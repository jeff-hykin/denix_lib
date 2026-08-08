import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./declare-submodule-via-evalModules.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.attrSet$({
          ...scope.deepSet$(["options", "submodule"], () =>
            scope.apply$(scope.lib["mkOption"], () =>
              scope.attrSet$({
                type: () =>
                  scope.apply$(scope.lib["evalModules"], () =>
                    scope.attrSet$({
                      modules: () => [scope.attrSet$({
                        ...scope.deepSet$(["options", "inner"], () =>
                          scope.apply$(scope.lib["mkOption"], () =>
                            scope.attrSet$({
                              type: () => scope.lib["types"]["bool"],
                              default: false,
                            }))),
                      })],
                    })).type,
                default: {},
              }))),
          ...scope.deepSet$(["config", "submodule"], () =>
            scope.apply$(
              scope.lib["mkMerge"],
              () => [
                scope.func$({
                  lib: scope.nixArg$.NoDefault,
                  "...": scope.nixArg$.Ellipsis,
                }, (scope) =>
                  scope.attrSet$({
                    ...scope.deepSet$(["options", "outer"], () =>
                      scope.apply$(scope.lib["mkOption"], () =>
                        scope.attrSet$({
                          type: () => scope.lib["types"]["bool"],
                          default: false,
                        }))),
                  })),
                { inner: true, outer: true },
              ],
            )),
        }),
    )
  ),
);
