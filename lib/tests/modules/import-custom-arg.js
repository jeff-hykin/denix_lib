import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./import-custom-arg.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      lib: scope.nixArg$.NoDefault,
      custom: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.attrSet$({
        imports: () =>
          scope.operators$.listConcat(
            [],
            scope.apply$(
              scope.lib["optional"],
              () => scope.custom,
              new scope.Path$([
                new URL("./define-enable-force.nix", import.meta.url).pathname,
              ], []),
            ),
          ),
      }))
  ),
);
