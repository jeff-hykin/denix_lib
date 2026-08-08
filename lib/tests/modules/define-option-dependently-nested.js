import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./define-option-dependently-nested.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      lib: scope.nixArg$.NoDefault,
      options: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.attrSet$({
        ...scope.deepSet$(["config", "set"], () =>
          scope.operators$.merge(
            scope.attrSet$({
              value: () =>
                scope.if$(
                  scope.operators$.hasAttrPath(scope.options, "set", "enable"),
                ).then$(360n).else$(7n),
            }),
            scope.apply$(
              scope.lib["optionalAttrs"],
              () =>
                scope.operators$.hasAttrPath(scope.options, "set", "enable"),
              { enable: true },
            ),
          )),
      }))
  ),
);
