import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./doRename-condition-migrated.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      config: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.attrSet$({
        config: () =>
          scope.attrSet$({
            ...scope.deepSet$(["services", "foos", "", "bar"], "baz"),
            result: () =>
              ((_cond) => {
                if (!_cond) {
                  throw new Error(
                    "assertion failed: " +
                      'config.services.foos == {\n          "" = {\n            bar = "baz"',
                  );
                }
                return ((_cond) => {
                  if (!_cond) {
                    throw new Error(
                      "assertion failed: " + 'config.services.foo.bar == "baz"',
                    );
                  }
                  return true;
                })(
                  scope.operators$.equal(
                    scope.config["services"]["foo"]["bar"],
                    "baz",
                  ),
                );
              })(
                scope.operators$.equal(scope.config["services"]["foos"], {
                  "": { bar: "baz" },
                }),
              ),
          }),
      }))
  ),
);
