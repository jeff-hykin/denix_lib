import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./alias-with-priority-can-override.nix", import.meta.url).pathname,
  ({ scope }) => (
    //
    //
    //
    //
    //
    scope.func$({
      config: scope.nixArg$.NoDefault,
      lib: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.let$({
        mkAliasOptionModule: (scope) => scope.lib["mkAliasOptionModule"],
        mkForce: (scope) => scope.lib["mkForce"],
        mkOption: (scope) => scope.lib["mkOption"],
        types: (scope) => scope.lib["types"],
      }).in$((scope) =>
        scope.attrSet$({
          options: () =>
            scope.attrSet$({
              enable: () =>
                scope.apply$(scope.mkOption, () =>
                  scope.attrSet$({
                    type: () =>
                      scope.apply$(
                        scope.types["nullOr"],
                        () => scope.types["bool"],
                      ),
                    default: null,
                    example: true,
                    description: "Some descriptive text\n",
                  })),
              warnings: () =>
                scope.apply$(scope.mkOption, () =>
                  scope.attrSet$({
                    internal: true,
                    default: [],
                    type: () =>
                      scope.apply$(
                        scope.types["listOf"],
                        () => scope.types["str"],
                      ),
                    example: [
                      "The `foo' service is deprecated and will go away soon!",
                    ],
                    description:
                      "This option allows modules to show warnings to users during\nthe evaluation of the system configuration.\n",
                  })),
            }),
          imports:
            () => [
              scope.apply$(scope.mkAliasOptionModule, ["enableAlias"], [
                "enable",
              ]),
              scope.func$({
                config: scope.nixArg$.NoDefault,
                lib: scope.nixArg$.NoDefault,
                "...": scope.nixArg$.Ellipsis,
              }, (scope) =>
                scope.attrSet$({
                  enableAlias: () => scope.apply$(scope.mkForce, false),
                })),
              scope.func$({
                config: scope.nixArg$.NoDefault,
                lib: scope.nixArg$.NoDefault,
                "...": scope.nixArg$.Ellipsis,
              }, (scope) => ({ enable: true })),
            ],
        })
      ))
  ),
);
