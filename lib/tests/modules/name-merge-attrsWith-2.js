import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./name-merge-attrsWith-2.nix", import.meta.url).pathname,
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
                scope.func$({ "...": scope.nixArg$.Ellipsis }, (scope) =>
                  scope.attrSet$({
                    ...scope.deepSet$(["options", "mergedName"], () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          default: {},
                          type: () =>
                            scope.apply$(scope.types["attrsWith"], () =>
                              scope.attrSet$({
                                placeholder: "id",
                                elemType: () =>
                                  scope.apply$(scope.types["submodule"], () =>
                                    scope.attrSet$({
                                      ...scope.deepSet$(
                                        ["options", "nested"],
                                        () =>
                                          scope.apply$(scope.mkOption, () =>
                                            scope.attrSet$({
                                              type: () => scope.types["int"],
                                              default: 1n,
                                            })),
                                      ),
                                    })),
                              })),
                        }))),
                  })),
                scope.func$({ "...": scope.nixArg$.Ellipsis }, (scope) =>
                  scope.attrSet$({
                    ...scope.deepSet$(["options", "mergedName"], () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          type: () =>
                            scope.apply$(scope.types["attrsWith"], () =>
                              scope.attrSet$({
                                placeholder: "other",
                                elemType: () =>
                                  scope.apply$(scope.types["submodule"], {}),
                              })),
                        }))),
                  })),
              ],
          })
        ),
    )
  ),
);
