import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./kernel.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        mkIf: (scope) => scope.lib["mkIf"],
        versionAtLeast: (scope) => scope.lib["versionAtLeast"],
        versionOlder: (scope) => scope.lib["versionOlder"],
      }).in$((scope) =>
        scope.attrSet$({
          option: () =>
            scope.func$("x", (scope) =>
              scope.operators$.merge(scope.x, { optional: true })),
          yes: { tristate: "y", optional: false },
          no: { tristate: "n", optional: false },
          module: { tristate: "m", optional: false },
          unset: { tristate: null, optional: false },
          freeform: () =>
            scope.func$("x", (scope) =>
              scope.attrSet$({
                freeform: () =>
                  scope.x,
                optional: false,
              })),
          whenHelpers: () =>
            scope.func$("version", (scope) =>
              scope.attrSet$({
                whenAtLeast: () =>
                  scope.func$("ver", (scope) =>
                    scope.apply$(scope.mkIf, () =>
                      scope.apply$(
                        scope.versionAtLeast,
                        () => scope.version,
                        () => scope.ver,
                      ))),
                whenOlder: () =>
                  scope.func$("ver", (scope) =>
                    scope.apply$(scope.mkIf, () =>
                      scope.apply$(scope.versionOlder, () =>
                        scope.version, () =>
                        scope.ver))),
                whenBetween: () =>
                  scope.func$("verLow", (scope) =>
                    scope.func$("verHigh", (scope) =>
                      scope.apply$(
                        scope.mkIf,
                        () => ((scope.apply$(
                          scope.versionAtLeast,
                          () => scope.version,
                          () => scope.verLow,
                        )) && (scope.apply$(scope.versionOlder, () =>
                          scope.version, () =>
                          scope.verHigh))),
                      ))),
              })),
        })
      ))
  ),
);
