import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./defaults.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      lib: scope.nixArg$.NoDefault,
      config: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.let$({
        types: (scope) => scope.lib["types"],
      }).in$((scope) =>
        scope.attrSet$({
          options: () =>
            scope.attrSet$({
              list: () =>
                scope.apply$(scope.lib["mkOption"], () =>
                  scope.attrSet$({
                    type: () =>
                      scope.apply$(
                        scope.types["listOf"],
                        () => scope.types["int"],
                      ),
                  })),
              attrs: () =>
                scope.apply$(scope.lib["mkOption"], () =>
                  scope.attrSet$({
                    type: () => scope.types["attrs"],
                  })),
              attrsOf: () =>
                scope.apply$(scope.lib["mkOption"], () =>
                  scope.attrSet$({
                    type: () =>
                      scope.apply$(
                        scope.types["attrsOf"],
                        () => scope.types["int"],
                      ),
                  })),
              null: () =>
                scope.apply$(scope.lib["mkOption"], () =>
                  scope.attrSet$({
                    type: () =>
                      scope.apply$(
                        scope.types["nullOr"],
                        () => scope.types["int"],
                      ),
                  })),
              submodule: () =>
                scope.apply$(scope.lib["mkOption"], () =>
                  scope.attrSet$({
                    type: () => scope.apply$(scope.types["submodule"], {}),
                  })),
              submoduleWithDefaults: () =>
                scope.apply$(scope.lib["mkOption"], () =>
                  scope.attrSet$({
                    type: () =>
                      scope.apply$(scope.types["submodule"], () =>
                        scope.attrSet$({
                          ...scope.deepSet$(["options", "enabled"], () =>
                            scope.apply$(
                              scope.lib["mkOption"],
                              () =>
                                scope.attrSet$({
                                  type: () => scope.types["bool"],
                                  default: true,
                                }),
                            )),
                          ...scope.deepSet$(
                            ["options", "count"],
                            () =>
                              scope.apply$(scope.lib["mkOption"], () =>
                                scope.attrSet$({
                                  type: () =>
                                    scope.types["int"],
                                  default: 13n,
                                })),
                          ),
                        })),
                  })),
              unique: () =>
                scope.apply$(scope.lib["mkOption"], () =>
                  scope.attrSet$({
                    type: () =>
                      scope.apply$(
                        scope.types["unique"],
                        { message: "hi" },
                        () =>
                          scope.apply$(
                            scope.types["listOf"],
                            () => scope.types["int"],
                          ),
                      ),
                  })),
              coercedTo: () =>
                scope.apply$(scope.lib["mkOption"], () =>
                  scope.attrSet$({
                    type: () =>
                      scope.apply$(scope.types["coercedTo"], () =>
                        scope.apply$(scope.types["attrsOf"], () =>
                          scope.types["int"]), () =>
                        scope.builtins["attrNames"], () =>
                        scope.apply$(scope.types["listOf"], () =>
                          scope.types["str"])),
                  })),
              int: () =>
                scope.apply$(scope.lib["mkOption"], () =>
                  scope.attrSet$({
                    type: () => scope.types["int"],
                  })),
              result: () =>
                scope.apply$(scope.lib["mkOption"], () =>
                  scope.attrSet$({
                    type: () => scope.types["str"],
                    default: () =>
                      ((_cond) => {
                        if (!_cond) {
                          throw new Error(
                            "assertion failed: " +
                              "config.submoduleWithDefaults == {\n            enabled = true",
                          );
                        }
                        return "ok";
                      })(
                        scope.operators$.equal(
                          scope.config["submoduleWithDefaults"],
                          { enabled: true, count: 13n },
                        ),
                      ),
                  })),
            }),
        })
      ))
  ),
);
