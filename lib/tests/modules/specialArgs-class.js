import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./specialArgs-class.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.attrSet$({
          options: () =>
            scope.attrSet$({
              sub: () =>
                scope.attrSet$({
                  nixos: () =>
                    scope.apply$(scope.lib["mkOption"], () =>
                      scope.attrSet$({
                        type: () =>
                          scope.apply$(scope.lib["types"]["submoduleWith"], {
                            class: "nixos",
                            modules: [
                              new scope.Path$([
                                new URL(
                                  "./expose-module-class.nix",
                                  import.meta.url,
                                ).pathname,
                              ], []),
                            ],
                          }),
                        default: {},
                      })),
                  conditionalImportAsNixos: () =>
                    scope.apply$(scope.lib["mkOption"], () =>
                      scope.attrSet$({
                        type: () =>
                          scope.apply$(scope.lib["types"]["submoduleWith"], {
                            class: "nixos",
                            modules: [
                              new scope.Path$([
                                new URL(
                                  "./polymorphic-module.nix",
                                  import.meta.url,
                                ).pathname,
                              ], []),
                            ],
                          }),
                        default: {},
                      })),
                  conditionalImportAsDarwin: () =>
                    scope.apply$(scope.lib["mkOption"], () =>
                      scope.attrSet$({
                        type: () =>
                          scope.apply$(scope.lib["types"]["submoduleWith"], {
                            class: "darwin",
                            modules: [
                              new scope.Path$([
                                new URL(
                                  "./polymorphic-module.nix",
                                  import.meta.url,
                                ).pathname,
                              ], []),
                            ],
                          }),
                        default: {},
                      })),
                }),
            }),
          config: () =>
            scope.attrSet$({
              ...scope.deepSet$(
                ["_module", "freeformType"],
                () => scope.lib["types"]["anything"],
              ),
              nixos: () =>
                scope.apply$(scope.lib["evalModules"], {
                  class: "nixos",
                  modules: [
                    new scope.Path$([
                      new URL("./expose-module-class.nix", import.meta.url)
                        .pathname,
                    ], []),
                  ],
                }),
              conditionalImportAsNixos: () =>
                scope.apply$(scope.lib["evalModules"], {
                  class: "nixos",
                  modules: [
                    new scope.Path$([
                      new URL("./polymorphic-module.nix", import.meta.url)
                        .pathname,
                    ], []),
                  ],
                }),
              conditionalImportAsDarwin: () =>
                scope.apply$(scope.lib["evalModules"], {
                  class: "darwin",
                  modules: [
                    new scope.Path$([
                      new URL("./polymorphic-module.nix", import.meta.url)
                        .pathname,
                    ], []),
                  ],
                }),
            }),
        }),
    )
  ),
);
