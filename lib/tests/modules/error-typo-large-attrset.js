import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./error-typo-large-attrset.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.let$({
          mkOption: (scope) => scope.lib["mkOption"],
          concatMapAttrs: (scope) => scope.lib["concatMapAttrs"],
          ten: {
            a: null,
            b: null,
            c: null,
            d: null,
            e: null,
            f: null,
            g: null,
            h: null,
            i: null,
            j: null,
          },
          generatedOptions: (scope) =>
            scope.apply$(scope.concatMapAttrs, () =>
              scope.func$("k1", (scope) =>
                scope.func$("_", (scope) =>
                  scope.apply$(scope.concatMapAttrs, () =>
                    scope.func$("k2", (scope) =>
                      scope.func$("_", (scope) =>
                        scope.apply$(scope.concatMapAttrs, () =>
                          scope.func$("k3", (scope) =>
                            scope.func$("_", (scope) =>
                              scope.attrSet$({
                                ...scope.deepSet$([
                                  scope.str$(
                                    () => [scope.k1, scope.k2, scope.k3]
                                  ),
                                ], () =>
                                  scope.apply$(scope.mkOption, () =>
                                    scope.attrSet$({
                                      type: () => scope.lib["types"]["bool"],
                                      default: false,
                                    }))),
                              }))), () =>
                          scope.ten))), () =>
                    scope.ten))), () =>
              scope.ten),
          sensibleOptions: (scope) =>
            scope.attrSet$({
              enable: () =>
                scope.apply$(scope.mkOption, () =>
                  scope.attrSet$({
                    type: () =>
                      scope.lib["types"]["bool"],
                    default: false,
                  })),
              enabled: () =>
                scope.apply$(scope.mkOption, () =>
                  scope.attrSet$({
                    type: () =>
                      scope.lib["types"]["bool"],
                    default: false,
                  })),
              disable: () =>
                scope.apply$(scope.mkOption, () =>
                  scope.attrSet$({
                    type: () =>
                      scope.lib["types"]["bool"],
                    default: false,
                  })),
            }),
        }).in$((scope) =>
          scope.attrSet$({
            options: () =>
              scope.operators$.merge(
                scope.generatedOptions,
                scope.sensibleOptions,
              ),
            config: { enble: true },
          })
        ),
    )
  ),
);
