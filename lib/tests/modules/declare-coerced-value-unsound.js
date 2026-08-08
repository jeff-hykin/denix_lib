import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./declare-coerced-value-unsound.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.attrSet$({
          options: () =>
            scope.attrSet$({
              value: () =>
                scope.apply$(scope.lib["mkOption"], () =>
                  scope.attrSet$({
                    default: "12",
                    type: () =>
                      scope.apply$(
                        scope.lib["types"]["coercedTo"],
                        () => scope.lib["types"]["str"],
                        () => scope.lib["toInt"],
                        () => scope.lib["types"]["ints"]["s8"],
                      ),
                  })),
            }),
        }),
    )
  ),
);
