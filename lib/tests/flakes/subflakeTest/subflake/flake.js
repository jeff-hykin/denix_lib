import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./flake.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.attrSet$({
      outputs: () =>
        scope.func$(
          { self: scope.nixArg$.NoDefault },
          (scope) => ({ subflakeOutput: 1n }),
        ),
    })
  ),
);
