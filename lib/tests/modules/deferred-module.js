import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./deferred-module.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.let$({
          types: (scope) => scope.lib["types"],
          mkOption: (scope) => scope.lib["mkOption"],
          deferredModule: (scope) => scope.types["deferredModule"],
          lazyAttrsOf: (scope) => scope.types["lazyAttrsOf"],
          submodule: (scope) => scope.types["submodule"],
          str: (scope) => scope.types["str"],
          enum: (scope) => scope.types["enum"],
        }).in$((scope) =>
          scope.attrSet$({
            imports:
              () => [
                scope.func$({
                  config: scope.nixArg$.NoDefault,
                  "...": scope.nixArg$.Ellipsis,
                }, (scope) =>
                  scope.attrSet$({
                    _file: "generic.nix",
                    ...scope.deepSet$(["options", "nodes"], () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          type: () =>
                            scope.apply$(scope.lazyAttrsOf, () =>
                              scope.apply$(scope.submodule, () =>
                                scope.attrSet$({
                                  imports: () => [scope.config["default"]],
                                }))),
                          default: {},
                        }))),
                    ...scope.deepSet$(["options", "default"], () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          type: () => scope.deferredModule,
                          default: {},
                          description:
                            "Module that is included in all nodes.\n",
                        }))),
                  })),
                scope.attrSet$({
                  _file: "default-1.nix",
                  default: () =>
                    scope.func$({
                      config: scope.nixArg$.NoDefault,
                      "...": scope.nixArg$.Ellipsis,
                    }, (scope) =>
                      scope.attrSet$({
                        ...scope.deepSet$(["options", "settingsDict"], () =>
                          scope.apply$(scope.lib["mkOption"], () =>
                            scope.attrSet$({
                              type: () =>
                                scope.apply$(
                                  scope.lazyAttrsOf,
                                  () => scope.str,
                                ),
                              default: {},
                            }))),
                        ...scope.deepSet$(["options", "bottom"], () =>
                          scope.apply$(
                            scope.lib["mkOption"],
                            () =>
                              scope.attrSet$({
                                type: () => scope.apply$(scope.enum, []),
                              }),
                          )),
                      })),
                }),
                {
                  _file: "default-a-is-b.nix",
                  default:
                    (new scope.Path$([
                      new URL(
                        "./define-settingsDict-a-is-b.nix",
                        import.meta.url,
                      ).pathname,
                    ], [])),
                },
                scope.attrSet$({
                  _file: "nodes-foo.nix",
                  ...scope.deepSet$(
                    ["nodes", "foo", "settingsDict", "b"],
                    "beta",
                  ),
                }),
                scope.attrSet$({
                  _file: "the-file-that-contains-the-bad-config.nix",
                  ...scope.deepSet$(["default", "bottom"], "bogus"),
                }),
                scope.attrSet$({
                  _file: "nodes-foo-c-is-a.nix",
                  ...scope.deepSet$(
                    ["nodes", "foo"],
                    () =>
                      scope.func$({
                        config: scope.nixArg$.NoDefault,
                        "...": scope.nixArg$.Ellipsis,
                      }, (scope) =>
                        scope.attrSet$({
                          ...scope.deepSet$(
                            ["settingsDict", "c"],
                            () => scope.config["settingsDict"]["a"],
                          ),
                        })),
                  ),
                }),
              ],
          })
        ),
    )
  ),
);
