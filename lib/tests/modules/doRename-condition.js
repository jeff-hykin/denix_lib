import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./doRename-condition.nix", import.meta.url).pathname,
  ({ scope }) => (
    /**
  Simulate a migration from a single-instance `services.foo` to a multi instance
  `services.foos.<name>` module, where `name = ""` serves as the legacy /
  compatibility instance.

  - No instances must exist, unless one is defined in the multi-instance module,
  or if the legacy enable option is set to true.
  - The legacy instance options must be renamed to the new instance, if it exists.

  The relevant scenarios are tested in separate files:
  - ./doRename-condition-enable.nix
  - ./doRename-condition-no-enable.nix
    */ scope.func$({
      config: scope.nixArg$.NoDefault,
      lib: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.let$({
        mkOption: (scope) => scope.lib["mkOption"],
        mkEnableOption: (scope) => scope.lib["mkEnableOption"],
        types: (scope) => scope.lib["types"],
        doRename: (scope) => scope.lib["doRename"],
      }).in$((scope) =>
        scope.attrSet$({
          options: () =>
            scope.attrSet$({
              ...scope.deepSet$(
                ["services", "foo", "enable"],
                () => scope.apply$(scope.mkEnableOption, "foo"),
              ),
              ...scope.deepSet$(["services", "foos"], () =>
                scope.apply$(scope.mkOption, () =>
                  scope.attrSet$({
                    type: () =>
                      scope.apply$(scope.types["attrsOf"], () =>
                        scope.apply$(scope.types["submodule"], () =>
                          scope.attrSet$({
                            options: () =>
                              scope.attrSet$({
                                bar: () =>
                                  scope.apply$(scope.mkOption, () =>
                                    scope.attrSet$({
                                      type: () => scope.types["str"],
                                    })),
                              }),
                          }))),
                    default: {},
                  }))),
              result: () => scope.apply$(scope.mkOption, {}),
            }),
          imports: () => [scope.apply$(scope.doRename, () =>
            scope.attrSet$({
              from: ["services", "foo", "bar"],
              to: ["services", "foos", "", "bar"],
              visible: true,
              warn: false,
              use: () => scope.func$("x", (scope) => scope.x),
              withPriority: true,
              condition: () => scope.config["services"]["foo"]["enable"],
            }))],
        })
      ))
  ),
);
