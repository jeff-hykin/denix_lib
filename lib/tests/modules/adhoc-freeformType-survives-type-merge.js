import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./adhoc-freeformType-survives-type-merge.nix", import.meta.url)
    .pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.attrSet$({
          ...scope.deepSet$(["options", "dummy"], () =>
            scope.apply$(scope.lib["mkOption"], () =>
              scope.attrSet$({
                type: () => scope.lib["types"]["anything"],
                default: {},
              }))),
          freeformType: () =>
            scope.let$({
              a: (scope) =>
                scope.apply$(scope.lib["types"]["attrsOf"], () =>
                  scope.apply$(scope.lib["types"]["submodule"], () =>
                    scope.attrSet$({
                      ...scope.deepSet$(
                        ["options", "bar"],
                        () => scope.apply$(scope.lib["mkOption"], {}),
                      ),
                    }))),
            }).in$((scope) =>
              scope.operators$.merge(
                scope.a,
                scope.attrSet$({
                  merge: () =>
                    scope.func$("loc", (scope) =>
                      scope.func$("defs", (scope) =>
                        scope.attrSet$({
                          freeformItems: () =>
                            scope.apply$(
                              scope.a["merge"],
                              () => scope.loc,
                              () => scope.defs,
                            ),
                        }))),
                }),
              )
            ),
          ...scope.deepSet$(["config", "foo", "bar"], "ok"),
        }),
    )
  ),
);
