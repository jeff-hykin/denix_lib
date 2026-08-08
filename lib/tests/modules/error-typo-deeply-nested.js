import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./error-typo-deeply-nested.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.attrSet$({
          ...scope.deepSet$(["options", "services"], () =>
            scope.attrSet$({
              nginx: () =>
                scope.attrSet$({
                  enable: () =>
                    scope.apply$(scope.lib["mkOption"], () =>
                      scope.attrSet$({
                        default: false,
                        type: () => scope.lib["types"]["bool"],
                      })),
                  virtualHosts: () =>
                    scope.apply$(scope.lib["mkOption"], () =>
                      scope.attrSet$({
                        type: () =>
                          scope.apply$(scope.lib["types"]["attrsOf"], () =>
                            scope.apply$(scope.lib["types"]["submodule"], () =>
                              scope.attrSet$({
                                options: () =>
                                  scope.attrSet$({
                                    enableSSL: () =>
                                      scope.apply$(scope.lib["mkOption"], () =>
                                        scope.attrSet$({
                                          default: false,
                                          type: () =>
                                            scope.lib["types"]["bool"],
                                        })),
                                    ssl: () =>
                                      scope.attrSet$({
                                        certificate: () =>
                                          scope.apply$(
                                            scope.lib["mkOption"],
                                            () =>
                                              scope.attrSet$({
                                                default: "",
                                                type: () =>
                                                  scope.lib["types"]["str"],
                                              }),
                                          ),
                                        certificateKey: () =>
                                          scope.apply$(
                                            scope.lib["mkOption"],
                                            () =>
                                              scope.attrSet$({
                                                default: "",
                                                type: () =>
                                                  scope.lib["types"]["str"],
                                              }),
                                          ),
                                      }),
                                  }),
                              }))),
                        default: {},
                      })),
                }),
            })),
          config: () =>
            scope.attrSet$({
              ...scope.deepSet$([
                "services",
                "nginx",
                "virtualHosts",
                "example.com",
              ], () =>
                scope.attrSet$({
                  ...scope.deepSet$(["ssl", "certficate"], "/path/to/cert"),
                })),
            }),
        }),
    )
  ),
);
