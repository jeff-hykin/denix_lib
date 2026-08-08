import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./error-nonEmptyListOf-submodule.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.attrSet$({
          ...scope.deepSet$(["options", "bad"], () =>
            scope.apply$(scope.lib["mkOption"], () =>
              scope.attrSet$({
                type: () =>
                  scope.apply$(
                    scope.lib["types"]["nonEmptyListOf"],
                    () => scope.apply$(scope.lib["types"]["submodule"], {}),
                  ),
                default: [],
              }))),
        }),
    )
  ),
);
