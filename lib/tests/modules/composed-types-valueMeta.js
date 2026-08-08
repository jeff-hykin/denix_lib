import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./composed-types-valueMeta.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.let$({
          types: (scope) => scope.lib["types"],
          mkOption: (scope) => scope.lib["mkOption"],
          attrsOfModule: (scope) =>
            scope.apply$(scope.mkOption, () =>
              scope.attrSet$({
                type: () =>
                  scope.apply$(scope.types["attrsOf"], () =>
                    scope.apply$(scope.types["submodule"], () =>
                      scope.attrSet$({
                        ...scope.deepSet$(["options", "bar"], () =>
                          scope.apply$(scope.mkOption, () =>
                            scope.attrSet$({
                              type: () => scope.types["int"],
                            }))),
                      }))),
              })),
          listOfModule: (scope) =>
            scope.apply$(scope.mkOption, () =>
              scope.attrSet$({
                type: () =>
                  scope.apply$(scope.types["listOf"], () =>
                    scope.apply$(scope.types["submodule"], () =>
                      scope.attrSet$({
                        ...scope.deepSet$(["options", "bar"], () =>
                          scope.apply$(scope.mkOption, () =>
                            scope.attrSet$({
                              type: () => scope.types["int"],
                            }))),
                      }))),
              })),
        }).in$((scope) =>
          scope.attrSet$({
            imports: () => [
              scope.attrSet$({
                ...scope.deepSet$(
                  ["options", "attrsOfModule"],
                  () => scope.attrsOfModule,
                ),
                ...scope.deepSet$(
                  ["options", "mergedAttrsOfModule"],
                  () => scope.attrsOfModule,
                ),
                ...scope.deepSet$(
                  ["options", "listOfModule"],
                  () => scope.listOfModule,
                ),
                ...scope.deepSet$(
                  ["options", "mergedListOfModule"],
                  () => scope.listOfModule,
                ),
              }),
              scope.attrSet$({
                ...scope.deepSet$(
                  ["options", "mergedAttrsOfModule"],
                  () => scope.attrsOfModule,
                ),
                ...scope.deepSet$(
                  ["options", "mergedListOfModule"],
                  () => scope.listOfModule,
                ),
              }),
              scope.attrSet$({
                attrsOfModule: () =>
                  scope.attrSet$({
                    ...scope.deepSet$(["foo", "bar"], 42n),
                  }),
                mergedAttrsOfModule: () =>
                  scope.attrSet$({
                    ...scope.deepSet$(["foo", "bar"], 42n),
                  }),
              }),
              scope.func$({
                options: scope.nixArg$.NoDefault,
                "...": scope.nixArg$.Ellipsis,
              }, (scope) =>
                scope.attrSet$({
                  ...scope.deepSet$(["config", "listOfModule"], [{ bar: 42n }]),
                  ...scope.deepSet$(["config", "mergedListOfModule"], [{
                    bar: 42n,
                  }]),
                  ...scope.deepSet$(
                    ["options", "listResult"],
                    () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          default: () =>
                            scope.apply$(
                              scope.builtins["head"],
                              () =>
                                scope
                                  .options["listOfModule"]["valueMeta"]["list"],
                            )["configuration"]["options"]["bar"]["value"],
                        })),
                  ),
                  ...scope.deepSet$(
                    ["options", "mergedListResult"],
                    () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          default: () =>
                            scope.apply$(scope.builtins["head"], () =>
                              scope
                                .options["mergedListOfModule"]["valueMeta"][
                                  "list"
                                ])["configuration"]["options"]["bar"]["value"],
                        })),
                  ),
                })),
            ],
          })
        ),
    )
  ),
);
