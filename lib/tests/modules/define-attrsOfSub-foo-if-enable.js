import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./define-attrsOfSub-foo-if-enable.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      config: scope.nixArg$.NoDefault,
      lib: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.attrSet$({
        ...scope.deepSet$(["attrsOfSub", "foo"], () =>
          scope.apply$(scope.lib["mkIf"], () =>
            scope.config["enable"], { enable: true })),
      }))
  ),
);
