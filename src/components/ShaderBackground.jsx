import { useEffect, useRef, useState } from 'react'

/*
 * Domain-warped fBm noise field, rendered as a single full-screen quad.
 * Raw WebGL2 — ~5kB of shader instead of ~600kB of three.js.
 */

const VERT = `#version 300 es
in vec2 aPos;
void main() {
  gl_Position = vec4(aPos, 0.0, 1.0);
}`

const FRAG = `#version 300 es
precision highp float;

uniform vec2  uRes;
uniform float uTime;
uniform vec2  uMouse;

out vec4 fragColor;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i),                 hash(i + vec2(1.0, 0.0)), f.x),
    mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0, 1.0)), f.x),
    f.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = p * 2.03 + vec2(13.7, 7.1);
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  vec2 p  = (gl_FragCoord.xy * 2.0 - uRes) / min(uRes.x, uRes.y);

  float t = uTime * 0.045;

  // Push the noise field through itself twice — this is what makes it
  // look liquid rather than like static clouds.
  vec2 q = vec2(fbm(p * 1.1 + t),
                fbm(p * 1.1 + vec2(5.2, 1.3) - t));
  vec2 r = vec2(fbm(p * 1.4 + 3.0 * q + vec2(1.7, 9.2) + t * 1.4),
                fbm(p * 1.4 + 3.0 * q + vec2(8.3, 2.8) - t * 1.1));
  float f = fbm(p * 1.2 + 2.2 * r);

  // Soft lift that follows the pointer.
  float m = 1.0 - smoothstep(0.0, 1.1, length(p - uMouse));

  vec3 deep   = vec3(0.024, 0.027, 0.039);
  vec3 violet = vec3(0.655, 0.545, 0.980);
  vec3 cyan   = vec3(0.133, 0.827, 0.933);
  vec3 pink   = vec3(0.956, 0.447, 0.714);

  vec3 col = deep;
  col = mix(col, violet, smoothstep(0.35, 0.95, f) * 0.55);
  col = mix(col, cyan,   smoothstep(0.55, 1.05, f + r.x * 0.35) * 0.40);
  col = mix(col, pink,   smoothstep(0.70, 1.15, f + q.y * 0.45) * 0.22);
  col += violet * m * 0.12;

  float vig = smoothstep(1.55, 0.25, length(p * vec2(0.75, 1.0)));
  col *= 0.35 + 0.65 * vig;

  // Fade to near-black at the bottom so the content below reads cleanly.
  col *= 0.10 + 0.90 * smoothstep(-0.25, 0.90, uv.y);

  fragColor = vec4(col, 1.0);
}`

function compile(gl, type, src) {
  const sh = gl.createShader(type)
  gl.shaderSource(sh, src)
  gl.compileShader(sh)
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(sh))
    gl.deleteShader(sh)
    return null
  }
  return sh
}

export default function ShaderBackground() {
  const canvasRef = useRef(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl2', {
      antialias: false,
      alpha: false,
      powerPreference: 'low-power',
    })
    if (!gl) {
      setFailed(true)
      return
    }

    const vs = compile(gl, gl.VERTEX_SHADER, VERT)
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG)
    if (!vs || !fs) {
      setFailed(true)
      return
    }

    const prog = gl.createProgram()
    gl.attachShader(prog, vs)
    gl.attachShader(prog, fs)
    gl.linkProgram(prog)
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(prog))
      setFailed(true)
      return
    }
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]), // oversized tri covers the quad
      gl.STATIC_DRAW,
    )
    const loc = gl.getAttribLocation(prog, 'aPos')
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

    const uRes = gl.getUniformLocation(prog, 'uRes')
    const uTime = gl.getUniformLocation(prog, 'uTime')
    const uMouse = gl.getUniformLocation(prog, 'uMouse')

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 }
    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      const min = Math.min(rect.width, rect.height)
      mouse.tx = ((e.clientX - rect.left) * 2 - rect.width) / min
      mouse.ty = -(((e.clientY - rect.top) * 2 - rect.height) / min)
    }
    window.addEventListener('pointermove', onMove, { passive: true })

    const resize = () => {
      // Cap the pixel ratio: a noise shader at 3x on a retina display is
      // a lot of fragment work for a background nobody is staring at.
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      const w = Math.max(1, Math.floor(canvas.clientWidth * dpr))
      const h = Math.max(1, Math.floor(canvas.clientHeight * dpr))
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
        gl.viewport(0, 0, w, h)
      }
      gl.uniform2f(uRes, canvas.width, canvas.height)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    resize()

    let raf = 0
    let visible = true
    const start = performance.now()

    const draw = (now) => {
      const t = (now - start) / 1000
      gl.uniform1f(uTime, t)
      mouse.x += (mouse.tx - mouse.x) * 0.04
      mouse.y += (mouse.ty - mouse.y) * 0.04
      gl.uniform2f(uMouse, mouse.x, mouse.y)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }

    const loop = (now) => {
      draw(now)
      raf = requestAnimationFrame(loop)
    }

    const stop = () => {
      if (raf) cancelAnimationFrame(raf)
      raf = 0
    }
    const play = () => {
      if (!raf && visible && !reduced) raf = requestAnimationFrame(loop)
    }

    // Don't burn GPU on a background that's scrolled off-screen or in a
    // backgrounded tab.
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        visible ? play() : stop()
      },
      { threshold: 0 },
    )
    io.observe(canvas)

    const onVisibility = () => (document.hidden ? stop() : play())
    document.addEventListener('visibilitychange', onVisibility)

    if (reduced) draw(performance.now())
    else play()

    return () => {
      stop()
      io.disconnect()
      ro.disconnect()
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('visibilitychange', onVisibility)
      gl.deleteProgram(prog)
      gl.deleteShader(vs)
      gl.deleteShader(fs)
      gl.deleteBuffer(buf)
      gl.getExtension('WEBGL_lose_context')?.loseContext()
    }
  }, [])

  if (failed) {
    // No WebGL2: a static CSS field that reads close enough.
    return (
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,#2a1f52_0%,#0d1230_38%,#06070a_78%)]"
      />
    )
  }

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 h-full w-full"
    />
  )
}
