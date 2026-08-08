import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

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
