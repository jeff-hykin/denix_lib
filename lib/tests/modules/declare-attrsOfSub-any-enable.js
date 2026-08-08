import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./declare-attrsOfSub-any-enable.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.let$({
          submod: (scope) =>
            scope.func$({ "...": scope.nixArg$.Ellipsis }, (scope) =>
              scope.attrSet$({
                options: () =>
                  scope.attrSet$({
                    enable: () =>
                      scope.apply$(scope.lib["mkOption"], () =>
                        scope.attrSet$({
                          default: false,
                          example: true,
                          type: () => scope.lib["types"]["bool"],
                          description: "Some descriptive text\n",
                        })),
                  }),
              })),
        }).in$((scope) =>
          scope.attrSet$({
            options: () =>
              scope.attrSet$({
                attrsOfSub: () =>
                  scope.apply$(scope.lib["mkOption"], () =>
                    scope.attrSet$({
                      default: {},
                      example: {},
                      type: () =>
                        scope.apply$(scope.lib["types"]["attrsOf"], () =>
                          scope.apply$(
                            scope.lib["types"]["submodule"],
                            () => [scope.submod],
                          )),
                      description: "Some descriptive text\n",
                    })),
              }),
          })
        ),
    )
  ),
);
