import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./declare-variants.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      lib: scope.nixArg$.NoDefault,
      moduleType: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.let$({
        mkOption: (scope) => scope.lib["mkOption"],
        types: (scope) => scope.lib["types"],
      }).in$((scope) =>
        scope.attrSet$({
          ...scope.deepSet$(["options", "variants"], () =>
            scope.apply$(scope.mkOption, () =>
              scope.attrSet$({
                type: () =>
                  scope.apply$(scope.types["lazyAttrsOf"], () =>
                    scope.moduleType),
                default: {},
              }))),
        })
      ))
  ),
);
