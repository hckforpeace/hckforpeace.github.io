# hckforpeace.github.io

Pierre Beylouni — personal portfolio.

Personal portfolio — a single-page React SPA, built with Vite and deployed to
GitHub Pages by Actions.

## Development

The toolchain is pinned in `flake.nix`, so nothing needs to be installed
globally:

```bash
nix develop          # node 22 + pnpm in a shell
pnpm install
pnpm dev             # http://localhost:5173
```

Other commands:

| Command | What it does |
| --- | --- |
| `pnpm build` | Production build into `dist/` |
| `pnpm preview` | Serve the built `dist/` locally |

## Editing content

**All copy lives in `src/data.js`** — profile, projects, experience, stack and
socials. You shouldn't need to touch a component to update the site.

A portrait goes at `public/portrait.jpg`; see the TODO in
`src/components/About.jsx` for the two-line swap.

## Deployment

`.github/workflows/deploy.yml` builds on every push to `main` and publishes
`dist/` to Pages. This requires **Settings → Pages → Source: GitHub Actions**
(not "Deploy from a branch").

`vite.config.js` sets `base: '/'` because this is a user site served from the
domain root. A project site would need `base: '/<repo>/'`.

## Notes

- The hero background is a domain-warped fBm noise field in a raw WebGL2
  fragment shader (`src/components/ShaderBackground.jsx`) — no three.js. It
  falls back to a CSS gradient without WebGL2, pauses when scrolled out of view
  or the tab is hidden, and renders a single static frame under
  `prefers-reduced-motion`.
- Single scrolling page, no router — so there are no deep links for Pages to
  404 on.
