import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./mk-mods.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.attrSet$({
          ...scope.deepSet$(["options", "value"], () =>
            scope.apply$(scope.lib["mkOption"], () =>
              scope.attrSet$({
                type: () => scope.lib["types"]["anything"],
              }))),
          config: () =>
            scope.apply$(scope.lib["mkMerge"], () => [
              scope.attrSet$({
                ...scope.deepSet$(
                  ["value", "mkiffalse"],
                  () => scope.apply$(scope.lib["mkIf"], false, {}),
                ),
              }),
              scope.attrSet$({
                ...scope.deepSet$(
                  ["value", "mkiftrue"],
                  () => scope.apply$(scope.lib["mkIf"], true, {}),
                ),
              }),
              scope.attrSet$({
                ...scope.deepSet$(
                  ["value", "mkdefault"],
                  () => scope.apply$(scope.lib["mkDefault"], 0n),
                ),
              }),
              scope.attrSet$({
                ...scope.deepSet$(["value", "mkdefault"], 1n),
              }),
              scope.attrSet$({
                ...scope.deepSet$(
                  ["value", "mkmerge"],
                  () => scope.apply$(scope.lib["mkMerge"], [{}]),
                ),
              }),
              scope.attrSet$({
                ...scope.deepSet$(
                  ["value", "mkbefore"],
                  () => scope.apply$(scope.lib["mkBefore"], true),
                ),
              }),
              scope.attrSet$({
                ...scope.deepSet$(["value", "nested"], () =>
                  scope.apply$(scope.lib["mkMerge"], () => [
                    scope.attrSet$({
                      foo: () => scope.apply$(scope.lib["mkDefault"], 0n),
                      bar: () => scope.apply$(scope.lib["mkIf"], false, 0n),
                    }),
                    scope.apply$(scope.lib["mkIf"], true, () =>
                      scope.attrSet$({
                        foo: () =>
                          scope.apply$(
                            scope.lib["mkIf"],
                            true,
                            () => scope.apply$(scope.lib["mkForce"], 1n),
                          ),
                        bar: () =>
                          scope.attrSet$({
                            baz: () =>
                              scope.apply$(scope.lib["mkDefault"], "baz"),
                          }),
                      })),
                  ])),
              }),
            ]),
        }),
    )
  ),
);
