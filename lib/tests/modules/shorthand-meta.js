import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./shorthand-meta.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.let$({
          types: (scope) => scope.lib["types"],
          mkOption: (scope) => scope.lib["mkOption"],
        }).in$((scope) =>
          scope.attrSet$({
            imports:
              () => [
                scope.func$({
                  config: scope.nixArg$.NoDefault,
                  "...": scope.nixArg$.Ellipsis,
                }, (scope) =>
                  scope.attrSet$({
                    options: () =>
                      scope.attrSet$({
                        ...scope.deepSet$(["meta", "foo"], () =>
                          scope.apply$(scope.mkOption, () =>
                            scope.attrSet$({
                              type: () =>
                                scope.apply$(scope.types["listOf"], () =>
                                  scope.types["str"]),
                            }))),
                        result: () =>
                          scope.apply$(scope.mkOption, () =>
                            scope.attrSet$({
                              default: () =>
                                scope.apply$(
                                  scope.lib["concatStringsSep"],
                                  " ",
                                  () => scope.config["meta"]["foo"],
                                ),
                            })),
                      }),
                  })),
                scope.attrSet$({
                  ...scope.deepSet$(["meta", "foo"], ["one", "two"]),
                }),
              ],
          })
        ),
    )
  ),
);
