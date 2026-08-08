import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./lib.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.let$({
          concatLists: (scope) => scope.lib["concatLists"],
          mapAttrsToList: (scope) => scope.lib["mapAttrsToList"],
          showOption: (scope) => scope.lib["showOption"],
          types: (scope) => scope.lib["types"],
        }).in$((scope) =>
          scope.recAttrSet$({
            flattenMapServicesConfigToList: (scope) =>
              scope.func$("f", (scope) =>
                scope.func$("loc", (scope) =>
                  scope.func$("config", (scope) =>
                    scope.operators$.listConcat(
                      scope.apply$(
                        scope.f,
                        () => scope.loc,
                        () => scope.config,
                      ),
                      scope.apply$(scope.concatLists, () =>
                        scope.apply$(scope.mapAttrsToList, () =>
                          scope.func$("k", (scope) =>
                            scope.func$("v", (scope) =>
                              scope.apply$(
                                scope.flattenMapServicesConfigToList,
                                () => scope.f,
                                () => (scope.operators$.listConcat(scope.loc, [
                                  "services",
                                  scope.k,
                                ])),
                                () => scope.v,
                              ))), () => scope.config["services"])),
                    )))),
            getWarnings: (scope) =>
              scope.apply$(scope.flattenMapServicesConfigToList, () =>
                scope.func$("loc", (scope) =>
                  scope.func$("config", (scope) =>
                    scope.apply$(scope.map, () =>
                      scope.func$("msg", (scope) =>
                        scope.str$(
                          () => [
                            "in ",
                            scope.apply$(scope.showOption, () => scope.loc),
                            ": ",
                            scope.msg,
                          ]
                        )), () => scope.config["warnings"])))),
            getAssertions: (scope) =>
              scope.apply$(scope.flattenMapServicesConfigToList, () =>
                scope.func$("loc", (scope) =>
                  scope.func$("config", (scope) =>
                    scope.apply$(scope.map, () =>
                      scope.func$("ass", (scope) =>
                        scope.attrSet$({
                          message: () =>
                            scope.str$(
                              () => [
                                "in ",
                                scope.apply$(scope.showOption, () => scope.loc),
                                ": ",
                                scope.ass["message"],
                              ]
                            ),
                          assertion: () => scope.ass["assertion"],
                        })), () => scope.config["assertions"])))),
            configure: (scope) =>
              scope.func$({
                serviceManagerPkgs: scope.nixArg$.NoDefault,
                extraRootModules: [],
                extraRootSpecialArgs: {},
              }, (scope) =>
                scope.let$({
                  modules: (
                    scope,
                  ) => [
                    scope.apply$(
                      scope.lib["modules"]["importApply"],
                      new scope.Path$([
                        new URL("./service.nix", import.meta.url).pathname,
                      ], []),
                      () =>
                        scope.attrSet$({
                          pkgs: () => scope.serviceManagerPkgs,
                        }),
                    ),
                  ],
                  serviceSubmodule: (scope) =>
                    scope.apply$(scope.types["submoduleWith"], () =>
                      scope.attrSet$({
                        class: "service",
                        modules: () =>
                          scope.operators$.listConcat(
                            scope.modules,
                            scope.extraRootModules,
                          ),
                        specialArgs: () => scope.extraRootSpecialArgs,
                      })),
                }).in$((scope) =>
                  scope.attrSet$({
                    serviceSubmodule: () => scope.serviceSubmodule,
                  })
                )),
          })
        ),
    )
  ),
);
