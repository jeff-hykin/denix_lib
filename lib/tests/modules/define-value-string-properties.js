import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./define-value-string-properties.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.attrSet$({
          imports: () => [scope.attrSet$({
            value: () => scope.apply$(scope.lib["mkDefault"], "def"),
          })],
          value: () =>
            scope.apply$(
              scope.lib["mkMerge"],
              () => [scope.apply$(scope.lib["mkIf"], false, "nope"), "yes"],
            ),
        }),
    )
  ),
);
