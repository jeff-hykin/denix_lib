import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./maintainer-module.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.let$({
          types: (scope) => scope.lib["types"],
        }).in$((scope) =>
          scope.attrSet$({
            options: () =>
              scope.attrSet$({
                name: () =>
                  scope.apply$(scope.lib["mkOption"], () =>
                    scope.attrSet$({
                      type: () => scope.types["str"],
                    })),
                github: () =>
                  scope.apply$(scope.lib["mkOption"], () =>
                    scope.attrSet$({
                      type: () => scope.types["str"],
                    })),
                githubId: () =>
                  scope.apply$(scope.lib["mkOption"], () =>
                    scope.attrSet$({
                      type: () => scope.types["ints"]["unsigned"],
                    })),
                email: () =>
                  scope.apply$(scope.lib["mkOption"], () =>
                    scope.attrSet$({
                      type: () =>
                        scope.apply$(
                          scope.types["nullOr"],
                          () => scope.types["str"],
                        ),
                      default: null,
                    })),
                matrix: () =>
                  scope.apply$(scope.lib["mkOption"], () =>
                    scope.attrSet$({
                      type: () =>
                        scope.apply$(
                          scope.types["nullOr"],
                          () => scope.types["str"],
                        ),
                      default: null,
                    })),
                keys: () =>
                  scope.apply$(scope.lib["mkOption"], () =>
                    scope.attrSet$({
                      type: () =>
                        scope.apply$(scope.types["listOf"], () =>
                          scope.apply$(scope.types["submodule"], () =>
                            scope.attrSet$({
                              ...scope.deepSet$(
                                ["options", "fingerprint"],
                                () =>
                                  scope.apply$(scope.lib["mkOption"], () =>
                                    scope.attrSet$({
                                      type: () =>
                                        scope.types["str"],
                                    })),
                              ),
                            }))),
                      default: [],
                    })),
              }),
          })
        ),
    )
  ),
);
