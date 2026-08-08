import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./nix-unit.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      pkgs: (scope) =>
        scope.apply$(
          scope.import,
          new scope.Path$([
            new URL("../../../nixpkgs.lib", import.meta.url).pathname,
          ], []),
          {},
        ),
    }, (scope) =>
      scope.let$({
        prevNixpkgs: (scope) =>
          scope.apply$(scope.pkgs["fetchFromGitHub"], {
            owner: "nixos",
            repo: "nixpkgs",
            rev: "bcf94dd3f07189b7475d823c8d67d08b58289905",
            hash: "sha256-MuMiIY3MX5pFSOCvutmmRhV6RD0R3CG0Hmazkg8cMFI=",
          }),
      }).in$((scope) =>
        scope.apply$(scope.pkgs["runCommand"], "lib-cross-eval-merge-v2", () =>
          scope.attrSet$({
            nativeBuildInputs: () => [scope.pkgs["nix-unit"]],
          }), () =>
          scope.str$(
            () => [
              'export HOME=$TMPDIR\nnix-unit --eval-store "$HOME" ',
              new scope.Path$([
                new URL("./checkAndMergeCompat.nix", import.meta.url).pathname,
              ], []),
              ' \\\n  --arg currLibPath "',
              new scope.Path$(
                [new URL("../../lib", import.meta.url).pathname],
                [],
              ),
              '" \\\n  --arg prevLibPath "',
              scope.prevNixpkgs,
              '/lib"\nmkdir $out\n',
            ]
          ))
      ))
  ),
);
