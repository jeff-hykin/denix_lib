import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./nested-attrs.nix", import.meta.url).pathname,
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
            scope.apply$(scope.lib["mkMerge"], () => [
              scope.attrSet$({
                ...scope.deepSet$(["value", "foo"], null),
              }),
              scope.attrSet$({
                ...scope.deepSet$(["value", "l1", "foo"], null),
              }),
              scope.attrSet$({
                ...scope.deepSet$(["value", "l1", "l2", "foo"], null),
              }),
              scope.attrSet$({
                ...scope.deepSet$(["value", "l1", "l2", "l3", "foo"], null),
              }),
            ]),
        }),
    )
  ),
);
