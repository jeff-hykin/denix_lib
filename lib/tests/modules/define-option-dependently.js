import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./define-option-dependently.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      lib: scope.nixArg$.NoDefault,
      options: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.attrSet$({
        config: () =>
          scope.operators$.merge(
            scope.attrSet$({
              value: () =>
                scope.if$(scope.operators$.hasAttr(scope.options, "enable"))
                  .then$(360n).else$(7n),
            }),
            scope.apply$(
              scope.lib["optionalAttrs"],
              () => scope.operators$.hasAttr(scope.options, "enable"),
              { enable: true },
            ),
          ),
      }))
  ),
);
