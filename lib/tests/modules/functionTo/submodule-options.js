import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./submodule-options.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      lib: scope.nixArg$.NoDefault,
      config: scope.nixArg$.NoDefault,
      options: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.let$({
        types: (scope) => scope.lib["types"],
      }).in$((scope) =>
        scope.attrSet$({
          imports:
            () => [
              scope.func$({ "...": scope.nixArg$.Ellipsis }, (scope) =>
                scope.attrSet$({
                  options: () =>
                    scope.attrSet$({
                      fun: () =>
                        scope.apply$(scope.lib["mkOption"], () =>
                          scope.attrSet$({
                            type: () =>
                              scope.apply$(scope.types["functionTo"], () =>
                                scope.apply$(scope.types["submodule"], () =>
                                  scope.attrSet$({
                                    ...scope.deepSet$(["options", "a"], () =>
                                      scope.apply$(scope.lib["mkOption"], {
                                        default: "a",
                                      })),
                                  }))),
                          })),
                    }),
                })),
              scope.func$({ "...": scope.nixArg$.Ellipsis }, (scope) =>
                scope.attrSet$({
                  options: () =>
                    scope.attrSet$({
                      fun: () =>
                        scope.apply$(scope.lib["mkOption"], () =>
                          scope.attrSet$({
                            type: () =>
                              scope.apply$(scope.types["functionTo"], () =>
                                scope.apply$(scope.types["submodule"], () =>
                                  scope.attrSet$({
                                    ...scope.deepSet$(["options", "b"], () =>
                                      scope.apply$(scope.lib["mkOption"], {
                                        default: "b",
                                      })),
                                  }))),
                          })),
                    }),
                })),
            ],
          options: () =>
            scope.attrSet$({
              result: () =>
                scope.apply$(scope.lib["mkOption"], () =>
                  scope.attrSet$({
                    type: () => scope.types["str"],
                    default: () =>
                      scope.apply$(scope.lib["concatStringsSep"], " ", () =>
                        scope.apply$(scope.lib["attrValues"], () =>
                          scope.apply$(scope.config["fun"], () =>
                            scope.apply$(
                              scope.throw,
                              "shouldn't use input param",
                            )))),
                  })),
              optionsResult: () =>
                scope.apply$(scope.lib["mkOption"], () =>
                  scope.attrSet$({
                    type: () => scope.types["str"],
                    default: () =>
                      scope.apply$(scope.lib["concatStringsSep"], " ", () =>
                        scope.apply$(scope.lib["concatLists"], () =>
                          scope.apply$(scope.lib["mapAttrsToList"], () =>
                            scope.func$("k", (scope) =>
                              scope.func$("v", (scope) =>
                                scope.if$(
                                  scope.operators$.equal(scope.k, "_module"),
                                ).then$([]).else$(
                                  () => [
                                    scope.apply$(scope.lib["showOption"], () =>
                                      scope.v["loc"]),
                                  ]
                                ))), () =>
                            scope.apply$(
                              scope.options["fun"]["type"]["getSubOptions"],
                              ["fun"],
                            )))),
                  })),
            }),
          ...scope.deepSet$(["config", "fun"], () =>
            scope.apply$(
              scope.lib["mkMerge"],
              () => [scope.func$("input", (scope) => ({ b: "bee" }))],
            )),
        })
      ))
  ),
);
