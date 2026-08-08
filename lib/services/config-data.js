import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./config-data.nix", import.meta.url).pathname,
  ({ scope }) => (
    //
    //
    scope.func$({ pkgs: scope.nixArg$.NoDefault }, (scope) =>
      scope.func$({
        lib: scope.nixArg$.NoDefault,
        "...": scope.nixArg$.Ellipsis,
      }, (scope) =>
        scope.let$({
          mkOption: (scope) =>
            scope.lib["mkOption"],
          types: (scope) => scope.lib["types"],
          importApply: (scope) => scope.lib["modules"]["importApply"],
        }).in$((scope) =>
          scope.attrSet$({
            options: () =>
              scope.attrSet$({
                configData: () =>
                  scope.apply$(scope.mkOption, () =>
                    scope.attrSet$({
                      default: {},
                      example: () =>
                        scope.apply$(
                          scope.lib["literalExpression"],
                          "{\n  \"server.conf\" = {\n    text = ''\n      port = 8080\n      workers = 4\n    '';\n  };\n  \"ssl/cert.pem\" = {\n    source = ./cert.pem;\n  };\n}\n",
                        ),
                      description:
                        "Configuration data files for the service\n\nThese files are made available to the service and can be updated without restarting the service process, enabling configuration reloading.\nThe service manager implementation determines how these files are exposed to the service (e.g., via a specific directory path).\nThis path is available in the `path` sub-option for each `configData.<name>` entry.\n\nThis is particularly useful for services that support configuration reloading via signals (e.g., SIGHUP) or which pick up changes automatically, so that no downtime is required in order to reload the service.\n",
                      type: () =>
                        scope.apply$(scope.types["lazyAttrsOf"], () =>
                          scope.apply$(scope.types["submodule"], () =>
                            scope.apply$(
                              scope.importApply,
                              new scope.Path$([
                                new URL(
                                  "./config-data-item.nix",
                                  import.meta.url,
                                ).pathname,
                              ], []),
                              () => scope.pkgs,
                            ))),
                    })),
              }),
          })
        )))
  ),
);
