import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./declare-submoduleWith-special.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.attrSet$({
          ...scope.deepSet$(["options", "submodule"], () =>
            scope.apply$(scope.lib["mkOption"], () =>
              scope.attrSet$({
                type: () =>
                  scope.apply$(scope.lib["types"]["submoduleWith"], () =>
                    scope.attrSet$({
                      modules:
                        () => [
                          scope.func$({
                            lib: scope.nixArg$.NoDefault,
                            "...": scope.nixArg$.Ellipsis,
                          }, (scope) =>
                            scope.attrSet$({
                              ...scope.deepSet$(["options", "foo"], () =>
                                scope.apply$(scope.lib["mkOption"], () =>
                                  scope.attrSet$({
                                    default: () => scope.lib["foo"],
                                  }))),
                            })),
                        ],
                      ...scope.deepSet$(
                        ["specialArgs", "lib"],
                        () => scope.operators$.merge(scope.lib, { foo: "foo" }),
                      ),
                    })),
                default: {},
              }))),
        }),
    )
  ),
);
