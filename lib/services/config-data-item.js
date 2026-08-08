import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./config-data-item.nix", import.meta.url).pathname,
  ({ scope }) => (
    //
    //
    scope.func$("pkgs", (scope) =>
      scope.func$({
        lib: scope.nixArg$.NoDefault,
        name: scope.nixArg$.NoDefault,
        config: scope.nixArg$.NoDefault,
        options: scope.nixArg$.NoDefault,
        "...": scope.nixArg$.Ellipsis,
      }, (scope) =>
        scope.let$({
          mkOption: (scope) =>
            scope.lib["mkOption"],
          types: (scope) => scope.lib["types"],
        }).in$((scope) =>
          scope.attrSet$({
            options: () =>
              scope.attrSet$({
                enable: () =>
                  scope.apply$(scope.mkOption, () =>
                    scope.attrSet$({
                      type: () => scope.types["bool"],
                      default: true,
                      description:
                        "Whether this configuration file should be generated.\nThis option allows specific configuration files to be disabled.\n",
                    })),
                name: () =>
                  scope.apply$(scope.mkOption, () =>
                    scope.attrSet$({
                      type: () => scope.types["str"],
                      description:
                        "Name of the configuration file (relative to the service's configuration directory). Defaults to the attribute name.\n",
                    })),
                path: () =>
                  scope.apply$(scope.mkOption, () =>
                    scope.attrSet$({
                      type: () => scope.types["str"],
                      readOnly: true,
                      description:
                        "The actual path where this configuration file will be available.\nThis is determined by the service manager implementation.\n\nOn NixOS it is an absolute path.\nOther service managers may provide a relative path, in order to be unprivileged and/or relocatable.\n",
                    })),
                text: () =>
                  scope.apply$(scope.mkOption, () =>
                    scope.attrSet$({
                      default: null,
                      type: () =>
                        scope.apply$(
                          scope.types["nullOr"],
                          () => scope.types["lines"],
                        ),
                      description: "Text content of the configuration file.",
                    })),
                source: () =>
                  scope.apply$(scope.mkOption, () =>
                    scope.attrSet$({
                      type: () => scope.types["path"],
                      description: "Path of the source file.",
                    })),
              }),
            config: () =>
              scope.attrSet$({
                name: () =>
                  scope.apply$(scope.lib["mkDefault"], () => scope.name),
                source: () =>
                  scope.apply$(
                    scope.lib["mkIf"],
                    () => (scope.operators$.notEqual(
                      scope.config["text"],
                      null,
                    )),
                    () =>
                      scope.let$({
                        "name'": (scope) =>
                          scope.operators$.add(
                            "service-configdata-",
                            scope.apply$(scope.lib["replaceStrings"], ["/"], [
                              "-",
                            ], () => scope.name),
                          ),
                      }).in$((scope) =>
                        scope.apply$(
                          scope.lib["mkDerivedConfig"],
                          () => scope.options["text"],
                          () =>
                            scope.apply$(scope.pkgs["writeText"], () =>
                              scope["name'"]),
                        )
                      ),
                  ),
              }),
          })
        )))
  ),
);
