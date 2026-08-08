import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./disable-module-with-key.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.let$({
          mkOption: (scope) => scope.lib["mkOption"],
          types: (scope) => scope.lib["types"],
          moduleWithKey: {
            key: "disable-module-with-key.nix#moduleWithKey",
            config: { enable: true },
          },
        }).in$((scope) =>
          scope.attrSet$({
            options: () =>
              scope.attrSet$({
                positive: () =>
                  scope.apply$(scope.mkOption, () =>
                    scope.attrSet$({
                      type: () =>
                        scope.apply$(scope.types["submodule"], () =>
                          scope.attrSet$({
                            imports:
                              () => [
                                new scope.Path$([
                                  new URL(
                                    "./declare-enable.nix",
                                    import.meta.url,
                                  ).pathname,
                                ], []),
                                scope.moduleWithKey,
                              ],
                          })),
                      default: {},
                    })),
                negative: () =>
                  scope.apply$(scope.mkOption, () =>
                    scope.attrSet$({
                      type: () =>
                        scope.apply$(scope.types["submodule"], () =>
                          scope.attrSet$({
                            imports:
                              () => [
                                new scope.Path$([
                                  new URL(
                                    "./declare-enable.nix",
                                    import.meta.url,
                                  ).pathname,
                                ], []),
                                scope.moduleWithKey,
                              ],
                            disabledModules: () => [scope.moduleWithKey],
                          })),
                      default: {},
                    })),
              }),
          })
        ),
    )
  ),
);
