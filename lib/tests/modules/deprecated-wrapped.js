import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./deprecated-wrapped.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.let$({
          types: (scope) => scope.lib["types"],
          mkOption: (scope) => scope.lib["mkOption"],
          attrsOf: (scope) => scope.types["attrsOf"],
          listOf: (scope) => scope.types["listOf"],
          unique: (scope) => scope.types["unique"],
          nullOr: (scope) => scope.types["nullOr"],
          functionTo: (scope) => scope.types["functionTo"],
          coercedTo: (scope) => scope.types["coercedTo"],
          either: (scope) => scope.types["either"],
        }).in$((scope) =>
          scope.attrSet$({
            imports:
              () => [
                scope.func$({ "...": scope.nixArg$.Ellipsis }, (scope) =>
                  scope.attrSet$({
                    ...scope.deepSet$(["options", "attrsWith"], () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          type: () =>
                            scope.apply$(scope.attrsOf, () =>
                              scope.apply$(
                                scope.listOf,
                                () => scope.types["str"],
                              )),
                        }))),
                    ...scope.deepSet$(["options", "mergedAttrsWith"], () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          type: () =>
                            scope.apply$(
                              scope.attrsOf,
                              () =>
                                scope.apply$(scope.listOf, () =>
                                  scope.types["str"]),
                            ),
                        }))),
                    ...scope.deepSet$(["options", "listOf"], () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          type: () =>
                            scope.apply$(scope.listOf, () =>
                              scope.apply$(scope.listOf, () =>
                                scope.types["str"])),
                        }))),
                    ...scope.deepSet$(["options", "mergedListOf"], () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          type: () =>
                            scope.apply$(scope.listOf, () =>
                              scope.apply$(scope.listOf, () =>
                                scope.types["str"])),
                        }))),
                    ...scope.deepSet$(["options", "unique"], () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          type: () =>
                            scope.apply$(scope.unique, { message: "" }, () =>
                              scope.apply$(scope.listOf, () =>
                                scope.types["str"])),
                        }))),
                    ...scope.deepSet$(["options", "mergedUnique"], () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          type: () =>
                            scope.apply$(scope.unique, { message: "" }, () =>
                              scope.apply$(scope.listOf, () =>
                                scope.types["str"])),
                        }))),
                    ...scope.deepSet$(["options", "nullOr"], () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          type: () =>
                            scope.apply$(scope.nullOr, () =>
                              scope.apply$(scope.listOf, () =>
                                scope.types["str"])),
                        }))),
                    ...scope.deepSet$(["options", "mergedNullOr"], () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          type: () =>
                            scope.apply$(scope.nullOr, () =>
                              scope.apply$(scope.listOf, () =>
                                scope.types["str"])),
                        }))),
                    ...scope.deepSet$(["options", "functionTo"], () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          type: () =>
                            scope.apply$(scope.functionTo, () =>
                              scope.apply$(scope.listOf, () =>
                                scope.types["str"])),
                        }))),
                    ...scope.deepSet$(["options", "mergedFunctionTo"], () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          type: () =>
                            scope.apply$(scope.functionTo, () =>
                              scope.apply$(scope.listOf, () =>
                                scope.types["str"])),
                        }))),
                    ...scope.deepSet$(["options", "coercedTo"], () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          type: () =>
                            scope.apply$(
                              scope.coercedTo,
                              () =>
                                scope.apply$(scope.listOf, () =>
                                  scope.types["str"]),
                              () => scope.lib["id"],
                              () =>
                                scope.apply$(
                                  scope.listOf,
                                  () => scope.types["str"],
                                ),
                            ),
                        }))),
                    ...scope.deepSet$(
                      ["options", "either"],
                      () =>
                        scope.apply$(scope.mkOption, () =>
                          scope.attrSet$({
                            type: () =>
                              scope.apply$(
                                scope.either,
                                () =>
                                  scope.apply$(scope.listOf, () =>
                                    scope.types["str"]),
                                () =>
                                  scope.apply$(scope.listOf, () =>
                                    scope.types["str"]),
                              ),
                          })),
                    ),
                    ...scope.deepSet$(
                      ["options", "mergedEither"],
                      () =>
                        scope.apply$(scope.mkOption, () =>
                          scope.attrSet$({
                            type: () =>
                              scope.apply$(
                                scope.either,
                                () =>
                                  scope.apply$(scope.listOf, () =>
                                    scope.types["str"]),
                                () =>
                                  scope.apply$(scope.listOf, () =>
                                    scope.types["str"]),
                              ),
                          })),
                    ),
                  })),
                scope.func$({ "...": scope.nixArg$.Ellipsis }, (scope) =>
                  scope.attrSet$({
                    ...scope.deepSet$(
                      ["options", "mergedAttrsWith"],
                      () =>
                        scope.apply$(scope.mkOption, () =>
                          scope.attrSet$({
                            type: () =>
                              scope.apply$(
                                scope.attrsOf,
                                () =>
                                  scope.apply$(scope.listOf, () =>
                                    scope.types["str"]),
                              ),
                          })),
                    ),
                    ...scope.deepSet$(
                      ["options", "mergedListOf"],
                      () =>
                        scope.apply$(scope.mkOption, () =>
                          scope.attrSet$({
                            type: () =>
                              scope.apply$(
                                scope.listOf,
                                () =>
                                  scope.apply$(scope.listOf, () =>
                                    scope.types["str"]),
                              ),
                          })),
                    ),
                    ...scope.deepSet$(
                      ["options", "mergedUnique"],
                      () =>
                        scope.apply$(scope.mkOption, () =>
                          scope.attrSet$({
                            type: () =>
                              scope.apply$(
                                scope.unique,
                                { message: "" },
                                () =>
                                  scope.apply$(
                                    scope.listOf,
                                    () => scope.types["str"],
                                  ),
                              ),
                          })),
                    ),
                    ...scope.deepSet$(
                      ["options", "mergedNullOr"],
                      () =>
                        scope.apply$(scope.mkOption, () =>
                          scope.attrSet$({
                            type: () =>
                              scope.apply$(
                                scope.nullOr,
                                () =>
                                  scope.apply$(scope.listOf, () =>
                                    scope.types["str"]),
                              ),
                          })),
                    ),
                    ...scope.deepSet$(
                      ["options", "mergedFunctionTo"],
                      () =>
                        scope.apply$(scope.mkOption, () =>
                          scope.attrSet$({
                            type: () =>
                              scope.apply$(
                                scope.functionTo,
                                () =>
                                  scope.apply$(scope.listOf, () =>
                                    scope.types["str"]),
                              ),
                          })),
                    ),
                    ...scope.deepSet$(
                      ["options", "mergedEither"],
                      () =>
                        scope.apply$(scope.mkOption, () =>
                          scope.attrSet$({
                            type: () =>
                              scope.apply$(
                                scope.either,
                                () =>
                                  scope.apply$(scope.listOf, () =>
                                    scope.types["str"]),
                                () =>
                                  scope.apply$(scope.listOf, () =>
                                    scope.types["str"]),
                              ),
                          })),
                    ),
                  })),
              ],
          })
        ),
    )
  ),
);
