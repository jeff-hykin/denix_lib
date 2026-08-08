import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./declare-bare-submodule-deep-option.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.let$({
          mkOption: (scope) => scope.lib["mkOption"],
          types: (scope) => scope.lib["types"],
        }).in$((scope) =>
          scope.attrSet$({
            ...scope.deepSet$(["options", "bare-submodule", "deep"], () =>
              scope.apply$(scope.mkOption, () =>
                scope.attrSet$({
                  type: () => scope.types["int"],
                  default: 2n,
                }))),
          })
        ),
    )
  ),
);
