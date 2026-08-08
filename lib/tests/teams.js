import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./teams.nix", import.meta.url).pathname,
  ({ scope }) => (
    //
    //
    //
    scope.func$({
      pkgs: (scope) =>
        scope.apply$(
          scope.import,
          new scope.Path$([
            new URL("../../../nixpkgs.lib", import.meta.url).pathname,
          ], []),
          {},
        ),
      lib: (scope) => scope.pkgs["lib"],
    }, (scope) =>
      scope.let$({
        types: (scope) => scope.lib["types"],
        teamModule: (scope) =>
          scope.func$({
            config: scope.nixArg$.NoDefault,
            "...": scope.nixArg$.Ellipsis,
          }, (scope) =>
            scope.attrSet$({
              options: () =>
                scope.attrSet$({
                  shortName: () =>
                    scope.apply$(scope.lib["mkOption"], () =>
                      scope.attrSet$({
                        type: () => scope.types["str"],
                      })),
                  scope: () =>
                    scope.apply$(scope.lib["mkOption"], () =>
                      scope.attrSet$({
                        type: () => scope.types["str"],
                      })),
                  enableFeatureFreezePing: () =>
                    scope.apply$(scope.lib["mkOption"], () =>
                      scope.attrSet$({
                        type: () => scope.types["bool"],
                        default: false,
                      })),
                  members: () =>
                    scope.apply$(scope.lib["mkOption"], () =>
                      scope.attrSet$({
                        type: () =>
                          scope.apply$(scope.types["listOf"], () =>
                            scope.apply$(
                              scope.types["submodule"],
                              new scope.Path$([
                                new URL(
                                  "./maintainer-module.nix",
                                  import.meta.url,
                                ).pathname,
                              ], []),
                            )),
                        default: [],
                      })),
                  github: () =>
                    scope.apply$(scope.lib["mkOption"], () =>
                      scope.attrSet$({
                        type: () => scope.types["str"],
                        default: "",
                      })),
                  githubId: () =>
                    scope.apply$(scope.lib["mkOption"], () =>
                      scope.attrSet$({
                        type: () => scope.types["int"],
                        default: 0n,
                      })),
                  githubMaintainers: () =>
                    scope.apply$(scope.lib["mkOption"], () =>
                      scope.attrSet$({
                        type: () =>
                          scope.apply$(scope.types["listOf"], () =>
                            scope.apply$(
                              scope.types["submodule"],
                              new scope.Path$([
                                new URL(
                                  "./maintainer-module.nix",
                                  import.meta.url,
                                ).pathname,
                              ], []),
                            )),
                        default: [],
                      })),
                }),
            })),
        checkTeam: (scope) =>
          scope.func$("team", (scope) =>
            scope.func$("uncheckedAttrs", (scope) =>
              scope.let$({
                prefix: (scope) => ["lib", "maintainer-team", scope.team],
                checkedAttrs: (scope) =>
                  scope.apply$(scope.lib["modules"]["evalModules"], () =>
                    scope.attrSet$({
                      prefix: () => scope.prefix,
                      modules: () => [
                        scope.teamModule,
                        scope.attrSet$({
                          _file: () =>
                            scope.apply$(
                              scope.toString,
                              new scope.Path$([
                                new URL(
                                  "../../maintainers/team-list.nix",
                                  import.meta.url,
                                ).pathname,
                              ], []),
                            ),
                          config: () => scope.uncheckedAttrs,
                        }),
                      ],
                    }))["config"],
              }).in$((scope) => scope.checkedAttrs))),
        checkedTeams: (scope) =>
          scope.apply$(scope.lib["mapAttrs"], () =>
            scope.checkTeam, () =>
            scope.lib["teams"]),
      }).in$((scope) =>
        scope.apply$(scope.pkgs["writeTextDir"], "maintainer-teams.json", () =>
          scope.apply$(scope.builtins["toJSON"], () =>
            scope.checkedTeams))
      ))
  ),
);
