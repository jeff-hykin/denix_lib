import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";
import _nix_default_6e679886 from "./default.js";
import _nix_flake_version_info_ab55c664 from "./flake-version-info.js";

export default nixFile(
  new URL("./flake.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.attrSet$({
      description: "Library of low-level helper functions for nix expressions.",
      outputs: () =>
        scope.func$({ self: scope.nixArg$.NoDefault }, (scope) =>
          scope.let$({
            lib0: (scope) => _nix_default_6e679886(scope.runtime$),
          }).in$((scope) =>
            scope.attrSet$({
              lib: () =>
                scope.apply$(scope.lib0["extend"], () =>
                  scope.apply$(
                    _nix_flake_version_info_ab55c664(scope.runtime$),
                    () => scope.self,
                  )),
            })
          )),
    })
  ),
);
