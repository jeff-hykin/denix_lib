import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./optionTypeFile.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      config: scope.nixArg$.NoDefault,
      lib: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.attrSet$({
        _file: "optionTypeFile.nix",
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
              default: {},
            }))),
        ...scope.deepSet$(["config", "theType"], () =>
          scope.apply$(
            scope.lib["mkMerge"],
            () => [
              scope.apply$(scope.lib["types"]["submodule"], () =>
                scope.attrSet$({
                  ...scope.deepSet$(["options", "nested"], () =>
                    scope.apply$(scope.lib["mkOption"], () =>
                      scope.attrSet$({
                        type: () => scope.lib["types"]["int"],
                      }))),
                })),
              scope.apply$(scope.lib["types"]["submodule"], () =>
                scope.attrSet$({
                  _file: "other.nix",
                  ...scope.deepSet$(["options", "nested"], () =>
                    scope.apply$(scope.lib["mkOption"], () =>
                      scope.attrSet$({
                        type: () => scope.lib["types"]["str"],
                      }))),
                })),
            ],
          )),
      }))
  ),
);
