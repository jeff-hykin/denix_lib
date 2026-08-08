import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./types-valueMeta.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.let$({
          types: (scope) => scope.lib["types"],
          mkOption: (scope) => scope.lib["mkOption"],
          attrsOf: (scope) => scope.types["attrsOf"],
          listOf: (scope) => scope.types["listOf"],
          submoduleOf: (scope) => scope.types["submoduleOf"],
          str: (scope) => scope.types["str"],
        }).in$((scope) =>
          scope.attrSet$({
            imports:
              () => [
                scope.func$({
                  options: scope.nixArg$.NoDefault,
                  "...": scope.nixArg$.Ellipsis,
                }, (scope) =>
                  scope.attrSet$({
                    ...scope.deepSet$(["options", "str"], () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          type: () => scope.str,
                        }))),
                    ...scope.deepSet$(["options", "attrsOf"], () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          type: () =>
                            scope.apply$(scope.attrsOf, () => scope.str),
                          default: { foo: "foo", bar: "bar" },
                        }))),
                    ...scope.deepSet$(["options", "attrsOfResult"], () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          default: () =>
                            scope.apply$(scope.builtins["attrNames"], () =>
                              scope.options["attrsOf"]["valueMeta"]["attrs"]),
                        }))),
                    ...scope.deepSet$(["options", "listOf"], () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          type: () =>
                            scope.apply$(scope.listOf, () =>
                              scope.str),
                          default: ["foo", "bar"],
                        }))),
                    ...scope.deepSet$(["options", "listOfResult"], () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          default: () =>
                            scope.apply$(scope.builtins["length"], () =>
                              scope.options["listOf"]["valueMeta"]["list"]),
                        }))),
                    ...scope.deepSet$(["options", "submoduleOf"], () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          type: () =>
                            scope.apply$(scope.submoduleOf, () =>
                              scope.attrSet$({
                                ...scope.deepSet$(["options", "str"], () =>
                                  scope.apply$(scope.mkOption, () =>
                                    scope.attrSet$({
                                      type: () =>
                                        scope.str,
                                    }))),
                              })),
                        }))),
                  })),
              ],
          })
        ),
    )
  ),
);
