import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./extendModules-168767-imports.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      lib: scope.nixArg$.NoDefault,
      extendModules: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.let$({
        mkOption: (scope) => scope.lib["mkOption"],
        mkOverride: (scope) => scope.lib["mkOverride"],
        types: (scope) => scope.lib["types"],
      }).in$((scope) =>
        scope.attrSet$({
          imports: () => [
            scope.attrSet$({
              ...scope.deepSet$(["options", "sub"], () =>
                scope.apply$(scope.mkOption, () =>
                  scope.attrSet$({
                    default: {},
                    type: () =>
                      scope.apply$(scope.types["submodule"], () =>
                        scope.func$({
                          config: scope.nixArg$.NoDefault,
                          extendModules: scope.nixArg$.NoDefault,
                          "...": scope.nixArg$.Ellipsis,
                        }, (scope) =>
                          scope.attrSet$({
                            ...scope.deepSet$(["options", "value"], () =>
                              scope.apply$(scope.mkOption, () =>
                                scope.attrSet$({
                                  type: () => scope.types["int"],
                                }))),
                            ...scope.deepSet$(
                              ["options", "specialisation"],
                              () =>
                                scope.apply$(scope.mkOption, () =>
                                  scope.attrSet$({
                                    default: {},
                                    type: () =>
                                      scope.apply$(scope.extendModules, () =>
                                        scope.attrSet$({
                                          modules: () => [scope.attrSet$({
                                            specialisation: () =>
                                              scope.apply$(
                                                scope.mkOverride,
                                                0n,
                                                {},
                                              ),
                                          })],
                                        })).type,
                                  })),
                            ),
                          }))),
                  }))),
            }),
            scope.attrSet$({
              ...scope.deepSet$(["config", "sub", "value"], 1n),
            }),
          ],
        })
      ))
  ),
);
