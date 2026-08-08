import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./define-_module-args-custom.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({ "...": scope.nixArg$.Ellipsis }, (scope) =>
      scope.attrSet$({
        config: () =>
          scope.attrSet$({
            ...scope.deepSet$(["_module", "args", "custom"], true),
          }),
      }))
  ),
);
