import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./flake-systems.nix", import.meta.url).pathname,
  ({ scope }) => (
    //
    //
    //
    //
    //
    //
    scope.func$(
      {},
      (
        scope,
      ) => [
        "x86_64-linux",
        "aarch64-linux",
        "armv6l-linux",
        "armv7l-linux",
        "i686-linux",
        "aarch64-darwin",
        "powerpc64le-linux",
        "riscv64-linux",
        "x86_64-freebsd",
      ],
    )
  ),
);
