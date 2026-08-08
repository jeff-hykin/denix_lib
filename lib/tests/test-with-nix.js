import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";
import _nix_default_dd920348 from "../path/tests/default.js";

export default nixFile(
  new URL("./test-with-nix.nix", import.meta.url).pathname,
  ({ scope }) => (
    /**
  Instantiate the library tests for a given Nix version.

  IMPORTANT:
  This is used by the github.com/NixOS/nix CI.
  This is used by Lix's CI (see flake.nix in the Lix repo).

  Try not to change the interface of this file, or if you need to, ping the
  Nix AND Lix maintainers (`nix eval -f . lib.teams.lix`) for help. Thank you!
    */ scope.func$({
      pkgs: scope.nixArg$.NoDefault,
      lib: scope.nixArg$.NoDefault,
      nix: scope.nixArg$.NoDefault,
    }, (scope) =>
      scope.apply$(
        scope.pkgs["runCommand"],
        () =>
          scope.str$(() => ["nixpkgs-lib-tests-nix-", scope.nix["version"]]),
        () =>
          scope.attrSet$({
            buildInputs:
              () => [scope.apply$(_nix_default_dd920348(scope.runtime$), () =>
                scope.attrSet$({
                  pkgs: () => scope.pkgs,
                }))],
            nativeBuildInputs: () =>
              scope.operators$.listConcat(
                [scope.nix, scope.pkgs["gitMinimal"]],
                scope.apply$(scope.lib["optional"], () =>
                  scope.pkgs["stdenv"]["hostPlatform"]["isLinux"], () =>
                  scope.pkgs["inotify-tools"]),
              ),
            strictDeps: true,
          }),
        () =>
          scope.str$(
            () => [
              'datadir="',
              scope.nix,
              '/share"\nexport TEST_ROOT=$(pwd)/test-tmp\nexport HOME=$(mktemp -d)\nexport NIX_BUILD_HOOK=\nexport NIX_CONF_DIR=$TEST_ROOT/etc\nexport NIX_LOCALSTATE_DIR=$TEST_ROOT/var\nexport NIX_LOG_DIR=$TEST_ROOT/var/log/nix\nexport NIX_STATE_DIR=$TEST_ROOT/var/nix\nexport NIX_STORE_DIR=$TEST_ROOT/store\nexport PAGER=cat\ncacheDir=$TEST_ROOT/binary-cache\n\nnix-store --init\n\ncp -r ',
              new scope.Path$(
                [new URL("../../lib", import.meta.url).pathname],
                [],
              ),
              ' lib\necho "Running lib/tests/modules.sh"\nbash lib/tests/modules.sh\n\necho "Checking lib.version"\nnix-instantiate lib -A version --eval || {\n  echo "lib.version does not evaluate when lib is isolated from the rest of the nixpkgs tree"\n  exit 1\n}\n\necho "Running lib/tests/filesystem.sh"\nTEST_LIB=$PWD/lib bash lib/tests/filesystem.sh\n\necho "Running lib/tests/sources.sh"\nTEST_LIB=$PWD/lib bash lib/tests/sources.sh\n\necho "Running lib/tests/debug.sh"\nTEST_LIB=$PWD/lib bash lib/tests/debug.sh\n\necho "Running lib/tests/network.sh"\nTEST_LIB=$PWD/lib bash lib/tests/network.sh\n\necho "Running lib/fileset/tests.sh"\nTEST_LIB=$PWD/lib bash lib/fileset/tests.sh\n\necho "Running lib/tests/systems.nix"\n[[ $(nix-instantiate --eval --strict lib/tests/systems.nix | tee /dev/stderr) == \'[ ]\' ]];\n\necho "Running lib/tests/misc.nix"\n[[ $(nix-instantiate --eval --strict lib/tests/misc.nix | tee /dev/stderr) == \'[ ]\' ]];\n\necho "Running lib/tests/fetchers.nix"\n[[ $(nix-instantiate --eval --strict lib/tests/fetchers.nix | tee /dev/stderr) == \'[ ]\' ]];\n\nmkdir $out\necho success > $out/',
              scope.nix["version"],
              "\n",
            ]
          ),
      ))
  ),
);
