import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./define-enable-with-custom-arg.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      custom: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.attrSet$({
        config: () =>
          scope.attrSet$({
            enable: () => scope.custom,
          }),
      }))
  ),
);
