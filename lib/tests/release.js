import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";
import _nix_nix_for_tests_3f5f7b44 from "./nix-for-tests.js";
import _nix_default_6e679886 from "../default.js";
import _nix_test_with_nix_27a50848 from "./test-with-nix.js";
import _nix_nix_unit_01fc338d from "./nix-unit.js";
import _nix_maintainers_7e4e28c6 from "./maintainers.js";
import _nix_teams_fc5d5be7 from "./teams.js";

export default nixFile(
  new URL("./release.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      system: (scope) => scope.builtins["currentSystem"],
      pkgs: (scope) =>
        scope.operators$.merge(
          scope.apply$(
            scope.import,
            new scope.Path$([
              new URL("../../../nixpkgs.lib", import.meta.url).pathname,
            ], []),
            () =>
              scope.attrSet$({
                system: () => scope.system,
              }),
          ),
          scope.attrSet$({
            lib: () =>
              scope.apply$(
                scope.throw,
                "pkgs.lib accessed, but the lib tests should use nixpkgs' lib path directly!",
              ),
          }),
        ),
      pkgsBB: (scope) => scope.pkgs["pkgsBuildBuild"],
      nix: (scope) => scope["pkgs-nixVersions"]["stable"],
      nixVersions: (scope) => [scope.nix, scope["pkgs-nixVersions"]["latest"]],
      "pkgs-nixVersions": (scope) =>
        scope.apply$(_nix_nix_for_tests_3f5f7b44(scope.runtime$), () =>
          scope.attrSet$({
            pkgs: () =>
              scope.pkgsBB,
          })),
    }, (scope) =>
      scope.let$({
        lib: (scope) =>
          _nix_default_6e679886(scope.runtime$),
        testWithNix: (scope) =>
          scope.func$("nix", (scope) =>
            scope.apply$(_nix_test_with_nix_27a50848(scope.runtime$), () =>
              scope.attrSet$({
                lib: () =>
                  scope.lib,
                nix: () =>
                  scope.nix,
                pkgs: () => scope.pkgsBB,
              }))),
      }).in$((scope) =>
        scope.apply$(scope.pkgsBB["symlinkJoin"], () =>
          scope.attrSet$({
            name: "nixpkgs-lib-tests",
            paths: () =>
              scope.operators$.listConcat(
                scope.apply$(scope.map, () => scope.testWithNix, () =>
                  scope.nixVersions),
                [
                  scope.apply$(_nix_nix_unit_01fc338d(scope.runtime$), () =>
                    scope.attrSet$({
                      pkgs: () => scope.pkgs,
                    })),
                  scope.apply$(_nix_maintainers_7e4e28c6(scope.runtime$), () =>
                    scope.attrSet$({
                      pkgs: () =>
                        scope.pkgs,
                      lib: () =>
                        _nix_default_6e679886(scope.runtime$),
                    })),
                  scope.apply$(_nix_teams_fc5d5be7(scope.runtime$), () =>
                    scope.attrSet$({
                      pkgs: () => scope.pkgs,
                      lib: () =>
                        _nix_default_6e679886(scope.runtime$),
                    })),
                ],
              ),
          }))
      ))
  ),
);
