import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./module-argument-default.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      a: false,
      lib: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.attrSet$({
        options: () =>
          scope.attrSet$({
            result: () => scope.apply$(scope.lib["mkOption"], {}),
          }),
        config: () =>
          scope.attrSet$({
            ...scope.deepSet$(["_module", "args", "a"], true),
            result: () => scope.a,
          }),
      }))
  ),
);
