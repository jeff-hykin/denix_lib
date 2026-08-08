import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./prefix-module-argument.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.attrSet$({
          ...scope.deepSet$(["options", "foo"], () =>
            scope.apply$(scope.lib["mkOption"], () =>
              scope.attrSet$({
                type: () => scope.apply$(scope.lib["types"]["submodule"], {}),
                default: {},
              }))),
          config: () =>
            scope.attrSet$({
              foo: () =>
                scope.func$({
                  _prefix: scope.nixArg$.NoDefault,
                  "...": scope.nixArg$.Ellipsis,
                }, (scope) =>
                  ((_cond) => {
                    if (!_cond) {
                      throw new Error(
                        "assertion failed: " + '_prefix == [ "foo" ]',
                      );
                    }
                    return scope.attrSet$({
                      ...scope.deepSet$(["options", "ok"], () =>
                        scope.apply$(scope.lib["mkOption"], {})),
                      ...scope.deepSet$(["config", "ok"], true),
                    });
                  })(scope.operators$.equal(scope._prefix, ["foo"]))),
            }),
        }),
    )
  ),
);
