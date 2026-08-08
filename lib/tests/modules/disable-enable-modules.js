import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./disable-enable-modules.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { "...": scope.nixArg$.Ellipsis },
      (scope) => ({
        disabledModules: ["define-enable.nix", "declare-enable.nix"],
      }),
    )
  ),
);
