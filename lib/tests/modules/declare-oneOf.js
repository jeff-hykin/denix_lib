import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./declare-oneOf.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.attrSet$({
          ...scope.deepSet$(["options", "value"], () =>
            scope.apply$(scope.lib["mkOption"], () =>
              scope.attrSet$({
                type: () =>
                  scope.apply$(
                    scope.lib["types"]["oneOf"],
                    () => [
                      scope.lib["types"]["int"],
                      scope.apply$(
                        scope.lib["types"]["listOf"],
                        () => scope.lib["types"]["int"],
                      ),
                      scope.lib["types"]["str"],
                    ],
                  ),
              }))),
        }),
    )
  ),
);
