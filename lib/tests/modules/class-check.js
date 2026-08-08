import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./class-check.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.attrSet$({
          options: () =>
            scope.attrSet$({
              sub: () =>
                scope.attrSet$({
                  nixosOk: () =>
                    scope.apply$(scope.lib["mkOption"], () =>
                      scope.attrSet$({
                        type: () =>
                          scope.apply$(scope.lib["types"]["submoduleWith"], {
                            class: "nixos",
                            modules: [
                              new scope.Path$([
                                new URL(
                                  "./assert-module-class-is-nixos.nix",
                                  import.meta.url,
                                ).pathname,
                              ], []),
                            ],
                          }),
                      })),
                  nixosFail: () =>
                    scope.apply$(scope.lib["mkOption"], () =>
                      scope.attrSet$({
                        type: () =>
                          scope.apply$(scope.lib["types"]["submoduleWith"], {
                            class: "nixos",
                            modules: [],
                          }),
                      })),
                  mergeFail: () =>
                    scope.apply$(scope.lib["mkOption"], () =>
                      scope.attrSet$({
                        type: () =>
                          scope.apply$(scope.lib["types"]["submoduleWith"], {
                            class: "nixos",
                            modules: [],
                          }),
                        default: {},
                      })),
                }),
            }),
          imports: () => [scope.attrSet$({
            options: () =>
              scope.attrSet$({
                sub: () =>
                  scope.attrSet$({
                    mergeFail: () =>
                      scope.apply$(scope.lib["mkOption"], () =>
                        scope.attrSet$({
                          type: () =>
                            scope.apply$(scope.lib["types"]["submoduleWith"], {
                              class: "darwin",
                              modules: [],
                            }),
                        })),
                  }),
              }),
          })],
          config: () =>
            scope.attrSet$({
              ...scope.deepSet$(
                ["_module", "freeformType"],
                () => scope.lib["types"]["anything"],
              ),
              ok: () =>
                scope.apply$(scope.lib["evalModules"], {
                  class: "nixos",
                  modules: [
                    new scope.Path$([
                      new URL("./module-class-is-nixos.nix", import.meta.url)
                        .pathname,
                    ], []),
                    new scope.Path$([
                      new URL(
                        "./assert-module-class-is-nixos.nix",
                        import.meta.url,
                      ).pathname,
                    ], []),
                  ],
                }),
              fail: () =>
                scope.apply$(scope.lib["evalModules"], {
                  class: "nixos",
                  modules: [
                    new scope.Path$([
                      new URL("./module-class-is-nixos.nix", import.meta.url)
                        .pathname,
                    ], []),
                    new scope.Path$([
                      new URL("./module-class-is-darwin.nix", import.meta.url)
                        .pathname,
                    ], []),
                  ],
                }),
              "fail-anon": () =>
                scope.apply$(scope.lib["evalModules"], {
                  class: "nixos",
                  modules: [
                    new scope.Path$([
                      new URL("./module-class-is-nixos.nix", import.meta.url)
                        .pathname,
                    ], []),
                    {
                      _file: "foo.nix#darwinModules.default",
                      _class: "darwin",
                      config: {},
                      imports: [],
                    },
                  ],
                }),
              ...scope.deepSet$(["sub", "nixosOk"], { _class: "nixos" }),
              ...scope.deepSet$(["sub", "nixosFail"], {
                imports: [
                  new scope.Path$([
                    new URL("./module-class-is-darwin.nix", import.meta.url)
                      .pathname,
                  ], []),
                ],
              }),
            }),
        }),
    )
  ),
);
