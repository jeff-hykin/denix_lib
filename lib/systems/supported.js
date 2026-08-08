import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./supported.nix", import.meta.url).pathname,
  ({ scope }) => (
    //
    //
    //
    scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.recAttrSet$({
        hydra: (scope) =>
          scope.operators$.listConcat(
            scope.tier1,
            scope.operators$.listConcat(
              scope.tier2,
              scope.operators$.listConcat(scope.tier3, ["aarch64-darwin"]),
            ),
          ),
        tier1: ["x86_64-linux"],
        tier2: ["aarch64-linux", "x86_64-darwin"],
        tier3: ["armv6l-linux", "armv7l-linux", "i686-linux", "mipsel-linux"],
      }))
  ),
);
