import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./functions.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      lib: scope.nixArg$.NoDefault,
      config: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.attrSet$({
        ...scope.deepSet$(["options", "valueIsFunction"], () =>
          scope.apply$(scope.lib["mkOption"], () =>
            scope.attrSet$({
              default: () =>
                scope.apply$(scope.lib["mapAttrs"], () =>
                  scope.func$("name", (scope) => scope.lib["isFunction"]), () =>
                  scope.config["value"]),
            }))),
        ...scope.deepSet$(["options", "value"], () =>
          scope.apply$(scope.lib["mkOption"], () =>
            scope.attrSet$({
              type: () =>
                scope.lib["types"]["anything"],
            }))),
        ...scope.deepSet$(["options", "applied"], () =>
          scope.apply$(scope.lib["mkOption"], () =>
            scope.attrSet$({
              default: () =>
                scope.apply$(scope.lib["mapAttrs"], () =>
                  scope.func$("name", (scope) =>
                    scope.func$("fun", (scope) =>
                      scope.apply$(scope.fun, null))), () =>
                  scope.config["value"]),
            }))),
        config: () =>
          scope.apply$(scope.lib["mkMerge"], () => [
            scope.attrSet$({
              ...scope.deepSet$(["value", "single-lambda"], () =>
                scope.func$("x", (scope) => scope.x)),
              ...scope.deepSet$(["value", "multiple-lambdas"], () =>
                scope.func$("x", (scope) =>
                  scope.attrSet$({
                    x: () =>
                      scope.x,
                  }))),
              ...scope.deepSet$(["value", "merging-lambdas"], () =>
                scope.func$("x", (scope) =>
                  scope.attrSet$({
                    x: () =>
                      scope.x,
                  }))),
            }),
            scope.attrSet$({
              ...scope.deepSet$(
                ["value", "multiple-lambdas"],
                () => scope.func$("x", (scope) => [scope.x]),
              ),
              ...scope.deepSet$(["value", "merging-lambdas"], () =>
                scope.func$("y", (scope) =>
                  scope.attrSet$({
                    y: () => scope.y,
                  }))),
            }),
          ]),
      }))
  ),
);
