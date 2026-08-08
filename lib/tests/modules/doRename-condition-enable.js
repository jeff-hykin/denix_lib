import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./doRename-condition-enable.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      config: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.attrSet$({
        config: () =>
          scope.attrSet$({
            ...scope.deepSet$(["services", "foo", "enable"], true),
            ...scope.deepSet$(["services", "foo", "bar"], "baz"),
            result: () =>
              ((_cond) => {
                if (!_cond) {
                  throw new Error(
                    "assertion failed: " +
                      'config.services.foos == {\n          "" = {\n            bar = "baz"',
                  );
                }
                return true;
              })(
                scope.operators$.equal(scope.config["services"]["foos"], {
                  "": { bar: "baz" },
                }),
              ),
          }),
      }))
  ),
);
