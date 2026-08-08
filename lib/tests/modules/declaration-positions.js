import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./declaration-positions.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      lib: scope.nixArg$.NoDefault,
      options: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.let$({
        discardPositions: (scope) =>
          scope.apply$(scope.lib["mapAttrs"], () =>
            scope.func$("k", (scope) =>
              scope.func$("v", (scope) => scope.v))),
      }).in$((scope) =>
        ((_cond) => {
          if (!_cond) {
            throw new Error(
              "assertion failed: " + 'builtins.unsafeGetAttrPos "a" { a = true',
            );
          }
          return ((_cond) => {
            if (!_cond) {
              throw new Error(
                "assertion failed: " +
                  'builtins.unsafeGetAttrPos "a" (discardPositions {\n    a = true',
              );
            }
            return scope.attrSet$({
              imports: () => [scope.attrSet$({
                ...scope.deepSet$(["options", "imported", "line14"], () =>
                  scope.apply$(scope.lib["mkOption"], () =>
                    scope.attrSet$({
                      type: () =>
                        scope.lib["types"]["int"],
                    }))),
                ...scope.deepSet$(["options", "generated"], () =>
                  scope.apply$(scope.discardPositions, () =>
                    scope.attrSet$({
                      line22: () =>
                        scope.apply$(scope.lib["mkOption"], () =>
                          scope.attrSet$({
                            type: () =>
                              scope.lib["types"]["int"],
                          })),
                    }))),
                ...scope.deepSet$([
                  "options",
                  "submoduleLine38",
                  "extraOptLine27",
                ], () =>
                  scope.apply$(scope.lib["mkOption"], () =>
                    scope.attrSet$({
                      default: 1n,
                      type: () =>
                        scope.lib["types"]["int"],
                    }))),
              })],
              ...scope.deepSet$(["options", "nested", "nestedLine34"], () =>
                scope.apply$(scope.lib["mkOption"], () =>
                  scope.attrSet$({
                    type: () =>
                      scope.lib["types"]["int"],
                  }))),
              ...scope.deepSet$(["options", "submoduleLine38"], () =>
                scope.apply$(scope.lib["mkOption"], () =>
                  scope.attrSet$({
                    default: {},
                    type: () =>
                      scope.apply$(scope.lib["types"]["submoduleWith"], () =>
                        scope.attrSet$({
                          modules:
                            () => [
                              scope.func$({
                                options: scope.nixArg$.NoDefault,
                                "...": scope.nixArg$.Ellipsis,
                              }, (scope) =>
                                scope.attrSet$({
                                  ...scope.deepSet$([
                                    "options",
                                    "submodDeclLine45",
                                  ], () =>
                                    scope.apply$(scope.lib["mkOption"], {})),
                                })),
                              scope.attrSet$({
                                freeformType: () =>
                                  scope.with$(
                                    () => scope.lib["types"],
                                    (scope) =>
                                      scope.apply$(scope.lazyAttrsOf, () =>
                                        scope.apply$(scope.uniq, () =>
                                          scope.unspecified)),
                                  ),
                              }),
                            ],
                        })),
                  }))),
              config: () =>
                scope.attrSet$({
                  ...scope.deepSet$(
                    ["submoduleLine38", "submodDeclLine45"],
                    () =>
                      scope.apply$(
                        scope
                          .options["submoduleLine38"]["type"]["getSubOptions"],
                        [],
                      )["submodDeclLine45"]["declarationPositions"],
                  ),
                }),
            });
          })(
            scope.operators$.equal(
              scope.apply$(scope.builtins["unsafeGetAttrPos"], "a", () =>
                scope.apply$(scope.discardPositions, { a: true })),
              null,
            ),
          );
        })(
          scope.operators$.notEqual(
            scope.apply$(scope.builtins["unsafeGetAttrPos"], "a", { a: true }),
            null,
          ),
        )
      ))
  ),
);
