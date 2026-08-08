import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./expose-module-class.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      _class: scope.nixArg$.NoDefault,
      lib: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.attrSet$({
        options: () =>
          scope.attrSet$({
            foo: () =>
              scope.apply$(scope.lib["mkOption"], () =>
                scope.attrSet$({
                  default: () => scope._class,
                })),
          }),
      }))
  ),
);
