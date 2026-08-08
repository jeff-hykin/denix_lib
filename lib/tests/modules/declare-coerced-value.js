import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./declare-coerced-value.nix", import.meta.url).pathname,
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
                    default: 42n,
                    type: () =>
                      scope.apply$(
                        scope.lib["types"]["coercedTo"],
                        () => scope.lib["types"]["int"],
                        () => scope.toString,
                        () => scope.lib["types"]["str"],
                      ),
                  })),
            }),
        }),
    )
  ),
);
