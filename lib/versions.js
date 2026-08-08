import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./versions.nix", import.meta.url).pathname,
  ({ scope }) => (
    //
    scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.recAttrSet$({
        compareVersions: (scope) => scope.builtins["compareVersions"],
        splitVersion: (scope) => scope.builtins["splitVersion"],
        major: (scope) =>
          scope.func$("v", (scope) =>
            scope.apply$(scope.builtins["elemAt"], () =>
              scope.apply$(scope.splitVersion, () => scope.v), 0n)),
        minor: (scope) =>
          scope.func$("v", (scope) =>
            scope.apply$(scope.builtins["elemAt"], () =>
              scope.apply$(scope.splitVersion, () =>
                scope.v), 1n)),
        patch: (scope) =>
          scope.func$("v", (scope) =>
            scope.apply$(scope.builtins["elemAt"], () =>
              scope.apply$(scope.splitVersion, () =>
                scope.v), 2n)),
        majorMinor: (scope) =>
          scope.func$("v", (scope) =>
            scope.apply$(scope.builtins["concatStringsSep"], ".", () =>
              scope.apply$(scope.lib["take"], 2n, () =>
                scope.apply$(scope.splitVersion, () =>
                  scope.v)))),
        pad: (scope) =>
          scope.func$("n", (scope) =>
            scope.func$("version", (scope) =>
              scope.let$({
                numericVersion: (scope) =>
                  scope.apply$(scope.lib["head"], () =>
                    scope.apply$(scope.lib["splitString"], "-", () =>
                      scope.version)),
                versionSuffix: (scope) =>
                  scope.apply$(scope.lib["removePrefix"], () =>
                    scope.numericVersion, () =>
                    scope.version),
              }).in$((scope) =>
                scope.operators$.add(
                  scope.apply$(scope.lib["concatStringsSep"], ".", () =>
                    scope.apply$(
                      scope.lib["take"],
                      () => scope.n,
                      () => (scope.operators$.listConcat(
                        scope.apply$(scope.lib["splitVersion"], () =>
                          scope.numericVersion),
                        scope.apply$(scope.lib["genList"], () =>
                          scope.func$("_", (scope) =>
                            "0"), () =>
                          scope.n),
                      )),
                    )),
                  scope.versionSuffix,
                )
              ))),
      }))
  ),
);
