import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./doRename-condition-no-enable.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      config: scope.nixArg$.NoDefault,
      options: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.attrSet$({
        config: () =>
          scope.attrSet$({
            result: () =>
              ((_cond) => {
                if (!_cond) {
                  throw new Error(
                    "assertion failed: " + "config.services.foos == { }",
                  );
                }
                return ((_cond) => {
                  if (!_cond) {
                    throw new Error(
                      "assertion failed: " +
                        "!options.services.foo.bar.isDefined",
                    );
                  }
                  return true;
                })(
                  scope.operators$.negate(
                    scope.options["services"]["foo"]["bar"]["isDefined"],
                  ),
                );
              })(scope.operators$.equal(scope.config["services"]["foos"], {})),
          }),
      }))
  ),
);
