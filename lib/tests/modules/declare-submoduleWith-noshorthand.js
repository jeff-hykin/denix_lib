import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./declare-submoduleWith-noshorthand.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.let$({
          ...scope.deepSet$(["sub", "options", "config"], (scope) =>
            scope.apply$(scope.lib["mkOption"], () =>
              scope.attrSet$({
                type: () => scope.lib["types"]["bool"],
                default: false,
              }))),
        }).in$((scope) =>
          scope.attrSet$({
            ...scope.deepSet$(["options", "submodule"], () =>
              scope.apply$(scope.lib["mkOption"], () =>
                scope.attrSet$({
                  type: () =>
                    scope.apply$(scope.lib["types"]["submoduleWith"], () =>
                      scope.attrSet$({
                        modules: () => [scope.sub],
                      })),
                  default: {},
                }))),
          })
        ),
    )
  ),
);
