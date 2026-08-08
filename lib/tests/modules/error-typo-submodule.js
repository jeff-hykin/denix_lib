import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./error-typo-submodule.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.attrSet$({
          ...scope.deepSet$(["options", "services"], () =>
            scope.apply$(scope.lib["mkOption"], () =>
              scope.attrSet$({
                type: () =>
                  scope.apply$(scope.lib["types"]["attrsOf"], () =>
                    scope.apply$(scope.lib["types"]["submodule"], () =>
                      scope.attrSet$({
                        options: () =>
                          scope.attrSet$({
                            enable: () =>
                              scope.apply$(scope.lib["mkOption"], () =>
                                scope.attrSet$({
                                  default: false,
                                  type: () => scope.lib["types"]["bool"],
                                })),
                            port: () =>
                              scope.apply$(scope.lib["mkOption"], () =>
                                scope.attrSet$({
                                  default: 8080n,
                                  type: () => scope.lib["types"]["int"],
                                })),
                          }),
                      }))),
                default: {},
              }))),
          config: () =>
            scope.attrSet$({
              ...scope.deepSet$(["services", "myservice"], { prot: 9000n }),
            }),
        }),
    )
  ),
);
