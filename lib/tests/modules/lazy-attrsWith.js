import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./lazy-attrsWith.nix", import.meta.url).pathname,
  ({ scope }) => (
    //
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.let$({
          types: (scope) => scope.lib["types"],
          mkOption: (scope) => scope.lib["mkOption"],
          lazyAttrsOf: (scope) =>
            scope.apply$(scope.mkOption, () =>
              scope.attrSet$({
                type: () =>
                  scope.apply$(scope.types["attrsWith"], () =>
                    scope.attrSet$({
                      lazy: true,
                      elemType: () => scope.types["int"],
                    })),
              })),
          attrsOf: (scope) =>
            scope.apply$(scope.mkOption, () =>
              scope.attrSet$({
                type: () =>
                  scope.apply$(scope.types["attrsWith"], () =>
                    scope.attrSet$({
                      elemType: () => scope.types["int"],
                    })),
              })),
        }).in$((scope) =>
          scope.attrSet$({
            imports:
              () => [
                scope.func$({ "...": scope.nixArg$.Ellipsis }, (scope) =>
                  scope.attrSet$({
                    ...scope.deepSet$(
                      ["options", "mergedLazyLazy"],
                      () => scope.lazyAttrsOf,
                    ),
                    ...scope.deepSet$(
                      ["options", "mergedLazyNonLazy"],
                      () => scope.lazyAttrsOf,
                    ),
                    ...scope.deepSet$(
                      ["options", "mergedNonLazyNonLazy"],
                      () => scope.attrsOf,
                    ),
                  })),
                scope.func$(
                  { "...": scope.nixArg$.Ellipsis },
                  (scope) =>
                    scope.attrSet$({
                      ...scope.deepSet$(
                        ["options", "mergedLazyLazy"],
                        () => scope.lazyAttrsOf,
                      ),
                      ...scope.deepSet$(
                        ["options", "mergedLazyNonLazy"],
                        () => scope.attrsOf,
                      ),
                      ...scope.deepSet$(
                        ["options", "mergedNonLazyNonLazy"],
                        () => scope.attrsOf,
                      ),
                    }),
                ),
                scope.func$({
                  config: scope.nixArg$.NoDefault,
                  "...": scope.nixArg$.Ellipsis,
                }, (scope) =>
                  scope.attrSet$({
                    ...scope.deepSet$(
                      ["config", "mergedLazyLazy", "bar"],
                      () =>
                        scope.operators$.add(
                          scope.config["mergedLazyLazy"]["baz"],
                          1n,
                        ),
                    ),
                    ...scope.deepSet$(["config", "mergedLazyLazy", "baz"], 10n),
                    ...scope.deepSet$(
                      ["options", "lazyResult"],
                      () =>
                        scope.apply$(scope.mkOption, () =>
                          scope.attrSet$({
                            default: () =>
                              scope.config["mergedLazyLazy"]["bar"],
                          })),
                    ),
                    ...scope.deepSet$(
                      ["config", "mergedNonLazyNonLazy", "bar"],
                      () =>
                        scope.operators$.add(
                          scope.config["mergedNonLazyNonLazy"]["baz"],
                          1n,
                        ),
                    ),
                    ...scope.deepSet$(
                      ["config", "mergedNonLazyNonLazy", "baz"],
                      10n,
                    ),
                    ...scope.deepSet$(
                      ["options", "nonLazyResult"],
                      () =>
                        scope.apply$(scope.mkOption, () =>
                          scope.attrSet$({
                            default: () =>
                              scope.config["mergedNonLazyNonLazy"]["bar"],
                          })),
                    ),
                  })),
              ],
          })
        ),
    )
  ),
);
