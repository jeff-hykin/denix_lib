import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./specialArgs-lib.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      config: scope.nixArg$.NoDefault,
      lib: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.attrSet$({
        options: () =>
          scope.attrSet$({
            result: () => scope.apply$(scope.lib["mkOption"], {}),
            weird: () =>
              scope.apply$(scope.lib["mkOption"], () =>
                scope.attrSet$({
                  type: () =>
                    scope.apply$(scope.lib["types"]["submoduleWith"], () =>
                      scope.attrSet$({
                        ...scope.deepSet$(["specialArgs", "lib"], {}),
                        modules: [],
                      })),
                })),
          }),
        ...scope.deepSet$(["config", "weird"], () =>
          scope.func$({
            args: scope.nixArg$.AllArgs,
            "...": scope.nixArg$.Ellipsis,
          }, (scope) =>
            ((_cond) => {
              if (!_cond) {
                throw new Error("assertion failed: " + "args.lib == { }");
              }
              return ((_cond) => {
                if (!_cond) {
                  throw new Error(
                    "assertion failed: " + "args.specialArgs == { lib = { }",
                  );
                }
                return scope.attrSet$({
                  ...scope.deepSet$(
                    ["options", "foo"],
                    () => scope.apply$(scope.lib["mkOption"], {}),
                  ),
                  ...scope.deepSet$(
                    ["config", "foo"],
                    () => scope.apply$(scope.lib["mkIf"], true, "alright"),
                  ),
                });
              })(
                scope.operators$.equal(scope.args["specialArgs"], { lib: {} }),
              );
            })(scope.operators$.equal(scope.args["lib"], {})))),
        ...scope.deepSet$(["config", "result"], () =>
          ((_cond) => {
            if (!_cond) {
              throw new Error(
                "assertion failed: " + 'config.weird.foo == "alright"',
              );
            }
            return "ok";
          })(scope.operators$.equal(scope.config["weird"]["foo"], "alright"))),
      }))
  ),
);
