import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./define-attrsOfSub-if-foo-enable.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      config: scope.nixArg$.NoDefault,
      lib: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.attrSet$({
        attrsOfSub: () =>
          scope.apply$(scope.lib["mkIf"], () =>
            scope.config["enable"], () =>
            scope.attrSet$({
              ...scope.deepSet$(["foo", "enable"], true),
            })),
      }))
  ),
);
