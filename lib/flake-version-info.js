import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./flake-version-info.nix", import.meta.url).pathname,
  ({ scope }) => (
    //
    //
    //
    //
    //
    //
    //
    //
    scope.func$("self", (scope) =>
      scope.func$("finalLib", (scope) =>
        scope.func$("prevLib", (scope) =>
          scope.attrSet$({
            trivial: () =>
              scope.operators$.merge(
                scope.prevLib["trivial"],
                scope.attrSet$({
                  versionSuffix: () =>
                    scope.str$(
                      () => [
                        ".",
                        scope.apply$(scope.finalLib["substring"], 0n, 8n, () =>
                          scope.operators$.selectOrDefault(scope.self, [
                            "lastModifiedDate",
                          ], "19700101")),
                        ".",
                        scope.operators$.selectOrDefault(scope.self, [
                          "shortRev",
                        ], "dirty"),
                      ]
                    ),
                  revisionWithDefault: () =>
                    scope.func$("default", (scope) =>
                      scope.operators$.selectOrDefault(
                        scope.self,
                        ["rev"],
                        () => scope.default,
                      )),
                }),
              ),
          }))))
  ),
);
