import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./attrs-coercible.nix", import.meta.url).pathname,
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
          ...scope.deepSet$(["config", "value"], () =>
            scope.attrSet$({
              outPath: "foo",
              err: () => scope.apply$(scope.throw, "err"),
            })),
        }),
    )
  ),
);
