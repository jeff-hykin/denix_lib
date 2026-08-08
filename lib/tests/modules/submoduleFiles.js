import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./submoduleFiles.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.attrSet$({
          ...scope.deepSet$(["options", "submodule"], () =>
            scope.apply$(scope.lib["mkOption"], () =>
              scope.attrSet$({
                default: {},
                type: () =>
                  scope.apply$(scope.lib["types"]["submoduleWith"], () =>
                    scope.attrSet$({
                      modules:
                        () => [
                          scope.func$({
                            options: scope.nixArg$.NoDefault,
                            "...": scope.nixArg$.Ellipsis,
                          }, (scope) =>
                            scope.attrSet$({
                              ...scope.deepSet$(["options", "value"], () =>
                                scope.apply$(scope.lib["mkOption"], {})),
                              ...scope.deepSet$(
                                ["options", "internalFiles"],
                                () =>
                                  scope.apply$(scope.lib["mkOption"], () =>
                                    scope.attrSet$({
                                      default: () =>
                                        scope.options["value"]["files"],
                                    })),
                              ),
                            })),
                        ],
                    })),
              }))),
          imports: () => [scope.attrSet$({
            _file: "the-file.nix",
            ...scope.deepSet$(["submodule", "value"], 10n),
          })],
        }),
    )
  ),
);
