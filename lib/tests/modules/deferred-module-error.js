import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./deferred-module-error.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      config: scope.nixArg$.NoDefault,
      lib: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.let$({
        types: (scope) => scope.lib["types"],
        mkOption: (scope) => scope.lib["mkOption"],
        evalModules: (scope) => scope.lib["evalModules"],
        deferredModule: (scope) => scope.types["deferredModule"],
      }).in$((scope) =>
        scope.attrSet$({
          options: () =>
            scope.attrSet$({
              deferred: () =>
                scope.apply$(scope.mkOption, () =>
                  scope.attrSet$({
                    type: () => scope.deferredModule,
                  })),
              result: () =>
                scope.apply$(scope.mkOption, () =>
                  scope.attrSet$({
                    default: () =>
                      scope.apply$(scope.evalModules, () =>
                        scope.attrSet$({
                          modules: () => [scope.config["deferred"]],
                        }))["config"]["result"],
                  })),
            }),
          config: () =>
            scope.attrSet$({
              deferred: () =>
                scope.func$({ "...": scope.nixArg$.Ellipsis }, (scope) => true),
            }),
        })
      ))
  ),
);
