import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./merge-module-with-key.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.let$({
          mkOption: (scope) => scope.lib["mkOption"],
          types: (scope) => scope.lib["types"],
          moduleWithoutKey: { config: { raw: "pear" } },
          moduleWithKey: (scope) =>
            scope.attrSet$({
              key: () =>
                scope.operators$.add(scope.__curPos["file"], "#moduleWithKey"),
              config: { raw: "pear" },
            }),
          decl: (scope) =>
            scope.attrSet$({
              options: () =>
                scope.attrSet$({
                  raw: () =>
                    scope.apply$(scope.mkOption, () =>
                      scope.attrSet$({
                        type: () => scope.types["lines"],
                      })),
                }),
            }),
        }).in$((scope) =>
          scope.attrSet$({
            options: () =>
              scope.attrSet$({
                once: () =>
                  scope.apply$(scope.mkOption, () =>
                    scope.attrSet$({
                      type: () =>
                        scope.apply$(scope.types["submodule"], () =>
                          scope.attrSet$({
                            imports:
                              () => [
                                scope.decl,
                                scope.moduleWithKey,
                                scope.moduleWithKey,
                              ],
                          })),
                      default: {},
                    })),
                twice: () =>
                  scope.apply$(scope.mkOption, () =>
                    scope.attrSet$({
                      type: () =>
                        scope.apply$(scope.types["submodule"], () =>
                          scope.attrSet$({
                            imports:
                              () => [
                                scope.decl,
                                scope.moduleWithoutKey,
                                scope.moduleWithoutKey,
                              ],
                          })),
                      default: {},
                    })),
              }),
          })
        ),
    )
  ),
);
