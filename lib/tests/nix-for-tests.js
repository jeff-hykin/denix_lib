import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./nix-for-tests.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      lib: (scope) => scope.pkgs["lib"],
      pkgs: scope.nixArg$.NoDefault,
    }, (scope) =>
      scope.apply$(scope.builtins["mapAttrs"], () =>
        scope.func$("attr", (scope) =>
          scope.func$("pkg", (scope) =>
            scope.if$(
              scope.apply$(scope.lib["versionAtLeast"], () =>
                scope.pkg["version"], "2.29pre"),
            ).then$(() =>
              scope.apply$(scope.pkg["overrideScope"], () =>
                scope.func$(
                  "finalScope",
                  (scope) =>
                    scope.func$(
                      "prevScope",
                      (scope) => ({ "aws-sdk-cpp": null }),
                    ),
                ))
            ).else$(() =>
              scope.apply$(scope.pkg["override"], { withAWS: false })
            ))), () => scope.pkgs["nixVersions"]))
  ),
);
