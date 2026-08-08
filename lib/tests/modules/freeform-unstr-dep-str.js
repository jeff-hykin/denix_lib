import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./freeform-unstr-dep-str.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      lib: scope.nixArg$.NoDefault,
      config: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.attrSet$({
        ...scope.deepSet$(["options", "value"], () =>
          scope.apply$(scope.lib["mkOption"], () =>
            scope.attrSet$({
              type: () =>
                scope.apply$(scope.lib["types"]["nullOr"], () =>
                  scope.lib["types"]["str"]),
              default: null,
            }))),
        ...scope.deepSet$(["config", "foo"], () =>
          scope.apply$(
            scope.lib["mkIf"],
            () => (scope.operators$.notEqual(scope.config["value"], null)),
            () => scope.config["value"],
          )),
      }))
  ),
);
