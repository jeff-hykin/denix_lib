import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./importApply-function.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { foo: scope.nixArg$.NoDefault },
      (scope) =>
        scope.func$({
          lib: scope.nixArg$.NoDefault,
          config: scope.nixArg$.NoDefault,
          "...": scope.nixArg$.Ellipsis,
        }, (scope) =>
          scope.attrSet$({
            value: () => scope.foo,
          })),
    )
  ),
);
