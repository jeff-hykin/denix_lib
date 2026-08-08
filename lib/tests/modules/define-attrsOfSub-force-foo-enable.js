import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./define-attrsOfSub-force-foo-enable.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.attrSet$({
          attrsOfSub: () =>
            scope.apply$(scope.lib["mkForce"], () =>
              scope.attrSet$({
                ...scope.deepSet$(["foo", "enable"], false),
              })),
        }),
    )
  ),
);
