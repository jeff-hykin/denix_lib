import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./service.nix", import.meta.url).pathname,
  ({ scope }) => (
    //
    //
    //
    scope.func$({ pkgs: scope.nixArg$.NoDefault }, (scope) =>
      scope.func$({
        lib: scope.nixArg$.NoDefault,
        config: scope.nixArg$.NoDefault,
        options: scope.nixArg$.NoDefault,
        "...": scope.nixArg$.Ellipsis,
      }, (scope) =>
        scope.let$({
          mkEnableOption: (scope) =>
            scope.lib["mkEnableOption"],
          mkOption: (scope) => scope.lib["mkOption"],
          types: (scope) => scope.lib["types"],
          pathOrStr: (scope) =>
            scope.apply$(scope.types["coercedTo"], () =>
              scope.types["path"], () =>
              scope.func$("x", (scope) =>
                scope.str$(() => [scope.x])), () =>
              scope.types["str"]),
        }).in$((scope) =>
          scope.attrSet$({
            _class: "service",
            imports:
              () => [
                new scope.Path$([
                  new URL(
                    "../../modules/generic/meta-maintainers.nix",
                    import.meta.url,
                  ).pathname,
                ], []),
                new scope.Path$([
                  new URL(
                    "../../nixos/modules/misc/assertions.nix",
                    import.meta.url,
                  ).pathname,
                ], []),
                scope.apply$(
                  scope.lib["modules"]["importApply"],
                  new scope.Path$([
                    new URL("./config-data.nix", import.meta.url).pathname,
                  ], []),
                  () =>
                    scope.attrSet$({
                      pkgs: () => scope.pkgs,
                    }),
                ),
              ],
            options: () =>
              scope.attrSet$({
                services: () =>
                  scope.apply$(scope.mkOption, () =>
                    scope.attrSet$({
                      type: () =>
                        scope.apply$(scope.types["attrsOf"], () =>
                          scope.apply$(scope.types["submoduleWith"], () =>
                            scope.attrSet$({
                              modules:
                                () => [
                                  scope.apply$(
                                    scope.lib["modules"]["importApply"],
                                    new scope.Path$([
                                      new URL("./service.nix", import.meta.url)
                                        .pathname,
                                    ], []),
                                    () =>
                                      scope.attrSet$({
                                        pkgs: () => scope.pkgs,
                                      }),
                                  ),
                                ],
                            }))),
                      description:
                        "A collection of [modular services](https://nixos.org/manual/nixos/unstable/#modular-services) that are configured in one go.\n\nYou could consider the sub-service relationship to be an ownership relation.\nIt **does not** automatically create any other relationship between services (e.g. systemd slices), unless perhaps such a behavior is explicitly defined and enabled in another option.\n",
                      default: {},
                      visible: "shallow",
                    })),
                process: () =>
                  scope.attrSet$({
                    argv: () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          type: () =>
                            scope.apply$(scope.types["listOf"], () =>
                              scope.pathOrStr),
                          example: () =>
                            scope.apply$(
                              scope.lib["literalExpression"],
                              '[ (lib.getExe config.package) "--nobackground" ]',
                            ),
                          description:
                            "Command filename and arguments for starting this service.\nThis is a raw command-line that should not contain any shell escaping.\nIf expansion of environmental variables is required then use\na shell script or `importas` from `pkgs.execline`.\n",
                        })),
                    reloadSignal: () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          type: () =>
                            scope.apply$(scope.types["nullOr"], () =>
                              scope.types["str"]),
                          default: null,
                          example: "HUP",
                          description:
                            "Configures the reload signal to send to the service manager.\n",
                        })),
                    reloadCommand: () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          type: () =>
                            scope.apply$(scope.types["nullOr"], () =>
                              scope.types["str"]),
                          default: null,
                          example: () =>
                            scope.apply$(
                              scope.lib["literalExpression"],
                              '"${pkgs.coreutils}/bin/kill -HUP $MAINPID"',
                            ),
                          description:
                            "Command used for reloading in the underlying service manager to reload.\n",
                        })),
                  }),
                notificationProtocol: () =>
                  scope.apply$(scope.mkOption, () =>
                    scope.attrSet$({
                      type: () =>
                        scope.apply$(scope.types["submodule"], () =>
                          scope.attrSet$({
                            options: () =>
                              scope.attrSet$({
                                systemd: () =>
                                  scope.apply$(
                                    scope.mkEnableOption,
                                    "Whether the service supports systemd-notify.",
                                  ),
                                s6: () =>
                                  scope.apply$(
                                    scope.mkEnableOption,
                                    "Whether the service supports s6-notify.",
                                  ),
                              }),
                          })),
                      description:
                        "Notification protocol that this service supports with the underlying service manager.\n",
                    })),
              }),
            config: () =>
              scope.attrSet$({
                assertions: () => [scope.attrSet$({
                  assertion: () =>
                    scope.operators$.negate(
                      (scope.operators$.notEqual(
                        scope.config["process"]["reloadSignal"],
                        null,
                      )) &&
                      (scope.operators$.lessThanOrEqual(
                        scope
                          .options["process"]["reloadCommand"]["highestPrio"],
                        scope.lib["modules"]["defaultOverridePriority"],
                      )),
                    ),
                  message:
                    "reloadSignal conflicts with reloadCommand. Please either use reloadSignal or reloadCommand.",
                })],
                ...scope.deepSet$(["process", "reloadCommand"], () =>
                  scope.apply$(
                    scope.lib["mkIf"],
                    () => (scope.operators$.notEqual(
                      scope.config["process"]["reloadSignal"],
                      null,
                    )),
                    () =>
                      scope.apply$(scope.lib["mkDefault"], () =>
                        scope.str$(
                          () => [
                            scope.pkgs["coreutils"],
                            "/bin/kill -",
                            scope.config["process"]["reloadSignal"],
                            " $MAINPID",
                          ]
                        )),
                  )),
              }),
          })
        )))
  ),
);
