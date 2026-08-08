import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./boolByOr.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.attrSet$({
          ...scope.deepSet$(["options", "value"], () =>
            scope.apply$(scope.lib["mkOption"], () =>
              scope.attrSet$({
                type: () =>
                  scope.apply$(scope.lib["types"]["lazyAttrsOf"], () =>
                    scope.lib["types"]["boolByOr"]),
              }))),
          ...scope.deepSet$(["config", "value"], () =>
            scope.attrSet$({
              falseFalse: () =>
                scope.apply$(scope.lib["mkMerge"], [false, false]),
              trueFalse: () =>
                scope.apply$(scope.lib["mkMerge"], [true, false]),
              falseTrue: () =>
                scope.apply$(scope.lib["mkMerge"], [false, true]),
              trueTrue: () =>
                scope.apply$(scope.lib["mkMerge"], [true, true]),
            })),
        }),
    )
  ),
);
