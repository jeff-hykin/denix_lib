import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";
import _nix_nix_for_tests_3f5f7b44 from "../../tests/nix-for-tests.js";

export default nixFile(
  new URL("./default.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      nixpkgs:
        (new scope.Path$([
          new URL("../../../../nixpkgs.lib", import.meta.url).pathname,
        ], [])),
      system: (scope) => scope.builtins["currentSystem"],
      pkgs: (scope) =>
        scope.apply$(scope.import, () => scope.nixpkgs, () =>
          scope.attrSet$({
            config: {},
            overlays: [],
            system: () => scope.system,
          })),
      nixVersions: (scope) =>
        scope.apply$(_nix_nix_for_tests_3f5f7b44(scope.runtime$), () =>
          scope.attrSet$({
            pkgs: () =>
              scope.pkgs,
          })),
      libpath:
        (new scope.Path$(
          [new URL("../../../lib", import.meta.url).pathname],
          [],
        )),
      seed: null,
    }, (scope) =>
      scope.apply$(scope.pkgs["runCommand"], "lib-path-tests", () =>
        scope.attrSet$({
          nativeBuildInputs: () =>
            scope.operators$.listConcat(
              [scope.nixVersions["stable"]],
              scope.with$(() => scope.pkgs, (scope) => [scope.jq, scope.bc]),
            ),
        }), () =>
        scope.str$(
          () => [
            "# Needed to make Nix evaluation work\nexport TEST_ROOT=$(pwd)/test-tmp\nexport NIX_BUILD_HOOK=\nexport NIX_CONF_DIR=$TEST_ROOT/etc\nexport NIX_LOCALSTATE_DIR=$TEST_ROOT/var\nexport NIX_LOG_DIR=$TEST_ROOT/var/log/nix\nexport NIX_STATE_DIR=$TEST_ROOT/var/nix\nexport NIX_STORE_DIR=$TEST_ROOT/store\nexport PAGER=cat\n\ncp -r ",
            scope.libpath,
            ' lib\nexport TEST_LIB=$PWD/lib\n\necho "Running unit tests lib/path/tests/unit.nix"\nnix-instantiate --eval --show-trace \\\n  --argstr libpath "$TEST_LIB" \\\n  lib/path/tests/unit.nix\n\necho "Running property tests lib/path/tests/prop.sh"\nbash lib/path/tests/prop.sh ',
            scope.apply$(scope.toString, () =>
              scope.seed),
            "\n\ntouch $out\n",
          ]
        )))
  ),
);
