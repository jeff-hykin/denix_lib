import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";
import _nix_flake_1f6a238e from "./lib/flake.js";

export default nixFile(
  new URL("./flake.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.attrSet$({
      description: "A cheap & continously rebased fork of nixpkgs.lib",
      outputs: () =>
        scope.func$("args", (scope) =>
          scope.apply$(_nix_flake_1f6a238e(scope.runtime$)["outputs"], () =>
            scope.args)),
    })
  ),
);
