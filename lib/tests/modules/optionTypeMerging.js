import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./optionTypeMerging.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      config: scope.nixArg$.NoDefault,
      lib: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.attrSet$({
        ...scope.deepSet$(["options", "theType"], () =>
          scope.apply$(scope.lib["mkOption"], () =>
            scope.attrSet$({
              type: () => scope.lib["types"]["optionType"],
            }))),
        ...scope.deepSet$(["options", "theOption"], () =>
          scope.apply$(scope.lib["mkOption"], () =>
            scope.attrSet$({
              type: () =>
                scope.config["theType"],
            }))),
        ...scope.deepSet$(["config", "theType"], () =>
          scope.apply$(
            scope.lib["mkMerge"],
            () => [
              scope.apply$(scope.lib["types"]["submodule"], () =>
                scope.attrSet$({
                  ...scope.deepSet$(["options", "int"], () =>
                    scope.apply$(scope.lib["mkOption"], () =>
                      scope.attrSet$({
                        type: () => scope.lib["types"]["int"],
                        default: 10n,
                      }))),
                })),
              scope.apply$(scope.lib["types"]["submodule"], () =>
                scope.attrSet$({
                  ...scope.deepSet$(["options", "str"], () =>
                    scope.apply$(scope.lib["mkOption"], () =>
                      scope.attrSet$({
                        type: () => scope.lib["types"]["str"],
                      }))),
                })),
            ],
          )),
        ...scope.deepSet$(["config", "theOption", "str"], "hello"),
      }))
  ),
);
