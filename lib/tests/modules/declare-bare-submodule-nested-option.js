import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./declare-bare-submodule-nested-option.nix", import.meta.url)
    .pathname,
  ({ scope }) => (
    scope.func$({
      config: scope.nixArg$.NoDefault,
      lib: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.let$({
        mkOption: (scope) => scope.lib["mkOption"],
        types: (scope) => scope.lib["types"],
      }).in$((scope) =>
        scope.attrSet$({
          ...scope.deepSet$(["options", "bare-submodule"], () =>
            scope.apply$(scope.mkOption, () =>
              scope.attrSet$({
                type: () =>
                  scope.apply$(scope.types["submoduleWith"], () =>
                    scope.attrSet$({
                      shorthandOnlyDefinesConfig: () =>
                        scope.config["shorthandOnlyDefinesConfig"],
                      modules: () => [scope.attrSet$({
                        ...scope.deepSet$(["options", "nested"], () =>
                          scope.apply$(scope.mkOption, () =>
                            scope.attrSet$({
                              type: () => scope.types["int"],
                              default: 1n,
                            }))),
                      })],
                    })),
              }))),
        })
      ))
  ),
);
