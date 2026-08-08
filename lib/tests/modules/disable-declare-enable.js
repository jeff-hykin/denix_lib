import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./disable-declare-enable.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { "...": scope.nixArg$.Ellipsis },
      (scope) => ({
        disabledModules: [
          new scope.Path$([
            new URL("./declare-enable.nix", import.meta.url).pathname,
          ], []),
        ],
      }),
    )
  ),
);
