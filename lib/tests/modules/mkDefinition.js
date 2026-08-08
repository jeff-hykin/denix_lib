import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./mkDefinition.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.let$({
          mkOption: (scope) => scope.lib["mkOption"],
          mkDefinition: (scope) => scope.lib["mkDefinition"],
          mkOptionDefault: (scope) => scope.lib["mkOptionDefault"],
        }).in$((scope) =>
          scope.attrSet$({
            imports: () => [
              scope.attrSet$({
                _file: "file",
                ...scope.deepSet$(
                  ["options", "conflict"],
                  () => scope.apply$(scope.mkOption, { default: 1n }),
                ),
                ...scope.deepSet$(["config", "conflict"], () =>
                  scope.apply$(scope.mkDefinition, () =>
                    scope.attrSet$({
                      file: "other",
                      value: () => scope.apply$(scope.mkOptionDefault, 42n),
                    }))),
              }),
              scope.attrSet$({
                ...scope.deepSet$(
                  ["options", "viaConfig"],
                  () => scope.apply$(scope.mkOption, {}),
                ),
                ...scope.deepSet$(
                  ["config", "viaConfig"],
                  () =>
                    scope.apply$(scope.mkDefinition, {
                      file: "other",
                      value: true,
                    }),
                ),
              }),
              scope.attrSet$({
                ...scope.deepSet$(
                  ["options", "mkMerge"],
                  () =>
                    scope.apply$(scope.mkOption, () =>
                      scope.attrSet$({
                        type: () => scope.lib["types"]["bool"],
                      })),
                ),
                ...scope.deepSet$(["config", "mkMerge"], () =>
                  scope.apply$(
                    scope.lib["mkMerge"],
                    () => [
                      scope.apply$(scope.mkDefinition, {
                        file: "a.nix",
                        value: true,
                      }),
                      scope.apply$(scope.mkDefinition, {
                        file: "b.nix",
                        value: true,
                      }),
                    ],
                  )),
              }),
              scope.attrSet$({
                ...scope.deepSet$(
                  ["options", "mkForce"],
                  () =>
                    scope.apply$(scope.mkOption, () =>
                      scope.attrSet$({
                        type: () => scope.lib["types"]["bool"],
                        default: false,
                      })),
                ),
                ...scope.deepSet$(
                  ["config", "mkForce"],
                  () =>
                    scope.apply$(scope.mkDefinition, () =>
                      scope.attrSet$({
                        file: "other",
                        value: () => scope.apply$(scope.lib["mkForce"], true),
                      })),
                ),
              }),
              scope.attrSet$({
                ...scope.deepSet$(
                  ["options", "viaOptionDefault"],
                  () =>
                    scope.apply$(scope.mkOption, () =>
                      scope.attrSet$({
                        type: () => scope.lib["types"]["bool"],
                        default: () =>
                          scope.apply$(scope.mkDefinition, {
                            file: "other",
                            value: true,
                          }),
                      })),
                ),
              }),
            ],
          })
        ),
    )
  ),
);
