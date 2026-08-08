import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./lists.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.attrSet$({
          ...scope.deepSet$(["options", "value"], () =>
            scope.apply$(scope.lib["mkOption"], () =>
              scope.attrSet$({
                type: () => scope.lib["types"]["anything"],
              }))),
          config: () =>
            scope.apply$(scope.lib["mkMerge"], [{ value: ["a value"] }, {
              value: ["another value"],
            }]),
        }),
    )
  ),
);
