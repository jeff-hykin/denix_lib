import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./import-from-store.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({ "...": scope.nixArg$.Ellipsis }, (scope) =>
      scope.attrSet$({
        imports:
          () => [
            scope.str$(
              () => [scope.apply$(scope.builtins["toFile"], "drv", "{}")]
            ),
            new scope.Path$([
              new URL("./declare-enable.nix", import.meta.url).pathname,
            ], []),
            new scope.Path$([
              new URL("./define-enable.nix", import.meta.url).pathname,
            ], []),
          ],
      }))
  ),
);
