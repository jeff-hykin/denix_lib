import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./assert-module-class-is-nixos.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      _class: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      ((_cond) => {
        if (!_cond) {
          throw new Error("assertion failed: " + '_class == "nixos"');
        }
        return {};
      })(scope.operators$.equal(scope._class, "nixos")))
  ),
);
