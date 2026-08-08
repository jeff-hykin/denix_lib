import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./freeform-deprecated-malicous.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.let$({
          types: (scope) => scope.lib["types"],
          mkOption: (scope) => scope.lib["mkOption"],
        }).in$((scope) =>
          scope.attrSet$({
            ...scope.deepSet$(["options", "either"], () =>
              scope.apply$(scope.mkOption, () =>
                scope.attrSet$({
                  type: () =>
                    scope.apply$(scope.types["submodule"], () =>
                      scope.attrSet$({
                        freeformType: () =>
                          scope.apply$(scope.types["either"], () =>
                            scope.types["int"], () =>
                            scope.types["int"]),
                      })),
                }))),
            ...scope.deepSet$(["options", "eitherBehindNullor"], () =>
              scope.apply$(scope.mkOption, () =>
                scope.attrSet$({
                  type: () =>
                    scope.apply$(scope.types["submodule"], () =>
                      scope.attrSet$({
                        freeformType: () =>
                          scope.apply$(scope.types["nullOr"], () =>
                            scope.apply$(scope.types["either"], () =>
                              scope.types["int"], () =>
                              scope.types["int"])),
                      })),
                }))),
            ...scope.deepSet$(["options", "oneOf"], () =>
              scope.apply$(scope.mkOption, () =>
                scope.attrSet$({
                  type: () =>
                    scope.apply$(scope.types["submodule"], () =>
                      scope.attrSet$({
                        freeformType: () =>
                          scope.apply$(
                            scope.types["oneOf"],
                            () => [scope.types["int"], scope.types["int"]],
                          ),
                      })),
                }))),
            ...scope.deepSet$(["options", "number"], () =>
              scope.apply$(scope.mkOption, () =>
                scope.attrSet$({
                  type: () =>
                    scope.apply$(scope.types["submodule"], () =>
                      scope.attrSet$({
                        freeformType: () =>
                          scope.types["number"],
                      })),
                }))),
          })
        ),
    )
  ),
);
