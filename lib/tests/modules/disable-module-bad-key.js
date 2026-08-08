import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./disable-module-bad-key.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) => ({
        imports: [
          new scope.Path$([
            new URL("./declare-enable.nix", import.meta.url).pathname,
          ], []),
        ],
        disabledModules: [{}],
      }),
    )
  ),
);
