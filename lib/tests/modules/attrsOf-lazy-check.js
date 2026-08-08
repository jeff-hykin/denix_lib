import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./attrsOf-lazy-check.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      lib: scope.nixArg$.NoDefault,
      config: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.attrSet$({
        ...scope.deepSet$(["options", "isLazy"], () =>
          scope.apply$(scope.lib["mkOption"], () =>
            scope.attrSet$({
              default: () =>
                scope.operators$.negate(
                  scope.operators$.hasAttr(scope.config["value"], "foo"),
                ),
            }))),
        ...scope.deepSet$(
          ["config", "value", "bar"],
          () => scope.apply$(scope.throw, "is not lazy"),
        ),
      }))
  ),
);
