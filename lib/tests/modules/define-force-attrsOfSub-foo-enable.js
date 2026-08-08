import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./define-force-attrsOfSub-foo-enable.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.apply$(scope.lib["mkForce"], () =>
          scope.attrSet$({
            ...scope.deepSet$(["attrsOfSub", "foo", "enable"], false),
          })),
    )
  ),
);
