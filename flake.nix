{
  description = "Damien's portfolio — Vite + React SPA deployed to GitHub Pages";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs }:
    let
      systems = [ "x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin" ];
      forAllSystems = f:
        nixpkgs.lib.genAttrs systems (system: f nixpkgs.legacyPackages.${system});
    in
    {
      devShells = forAllSystems (pkgs: {
        default = pkgs.mkShell {
          name = "portfolio";

          packages = with pkgs; [
            nodejs_22
            pnpm
            typescript-language-server
            vscode-langservers-extracted
          ];

          shellHook = ''
            echo "portfolio dev shell"
            echo "  node $(node --version)  pnpm $(pnpm --version)"
            echo ""
            echo "  pnpm install     install dependencies"
            echo "  pnpm dev         dev server on http://localhost:5173"
            echo "  pnpm build       production build to dist/"
            echo "  pnpm preview     serve the built dist/ locally"
          '';
        };
      });
    };
}
