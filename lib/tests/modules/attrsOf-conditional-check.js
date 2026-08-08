import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./attrsOf-conditional-check.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      lib: scope.nixArg$.NoDefault,
      config: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.attrSet$({
        ...scope.deepSet$(["options", "conditionalWorks"], () =>
          scope.apply$(scope.lib["mkOption"], () =>
            scope.attrSet$({
              default: () =>
                scope.operators$.negate(
                  scope.operators$.hasAttr(scope.config["value"], "foo"),
                ),
            }))),
        ...scope.deepSet$(["config", "value", "foo"], () =>
          scope.apply$(scope.lib["mkIf"], false, "should not be defined")),
      }))
  ),
);
