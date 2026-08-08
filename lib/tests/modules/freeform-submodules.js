import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./freeform-submodules.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      lib: scope.nixArg$.NoDefault,
      options: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.with$(() =>
        scope.lib["types"], (scope) =>
        scope.attrSet$({
          ...scope.deepSet$(["options", "fooDeclarations"], () =>
            scope.apply$(scope.lib["mkOption"], () =>
              scope.attrSet$({
                default: () =>
                  scope.apply$(
                    scope.options["free"]["type"]["getSubOptions"],
                    [],
                  )["_freeformOptions"]["foo"]["declarations"],
              }))),
          ...scope.deepSet$(["options", "free"], () =>
            scope.apply$(scope.lib["mkOption"], () =>
              scope.attrSet$({
                type: () =>
                  scope.apply$(scope.submodule, () =>
                    scope.attrSet$({
                      ...scope.deepSet$(
                        ["config", "_module", "freeformType"],
                        () =>
                          scope.apply$(
                            scope.lib["mkMerge"],
                            () => [
                              scope.apply$(scope.attrsOf, () =>
                                scope.apply$(scope.submodule, () =>
                                  scope.attrSet$({
                                    ...scope.deepSet$(
                                      ["options", "foo"],
                                      () =>
                                        scope.apply$(scope.lib["mkOption"], {}),
                                    ),
                                  }))),
                              scope.apply$(
                                scope.attrsOf,
                                () =>
                                  scope.apply$(scope.submodule, () =>
                                    scope.attrSet$({
                                      ...scope.deepSet$(
                                        ["options", "bar"],
                                        () =>
                                          scope.apply$(
                                            scope.lib["mkOption"],
                                            {},
                                          ),
                                      ),
                                    })),
                              ),
                            ],
                          ),
                      ),
                    })),
              }))),
          ...scope.deepSet$(["config", "free", "xxx", "foo"], 10n),
          ...scope.deepSet$(["config", "free", "yyy", "bar"], 10n),
        })))
  ),
);
