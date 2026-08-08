import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./importApply.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.attrSet$({
          ...scope.deepSet$(["options", "value"], () =>
            scope.apply$(scope.lib["mkOption"], { default: 1n })),
          imports:
            () => [
              scope.apply$(
                scope.lib["modules"]["importApply"],
                new scope.Path$([
                  new URL("./importApply-function.nix", import.meta.url)
                    .pathname,
                ], []),
                { foo: "abc" },
              ),
            ],
        }),
    )
  ),
);
