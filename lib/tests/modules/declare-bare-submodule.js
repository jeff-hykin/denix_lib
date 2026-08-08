import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./declare-bare-submodule.nix", import.meta.url).pathname,
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
                      modules: [],
                      shorthandOnlyDefinesConfig: () =>
                        scope.config["shorthandOnlyDefinesConfig"],
                    })),
                default: {},
              }))),
          ...scope.deepSet$(
            ["options", "shorthandOnlyDefinesConfig"],
            () => scope.apply$(scope.mkOption, { default: false }),
          ),
        })
      ))
  ),
);
