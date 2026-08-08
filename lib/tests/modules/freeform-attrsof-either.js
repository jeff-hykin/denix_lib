import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./freeform-attrsof-either.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.let$({
          types: (scope) => scope.lib["types"],
          mkOption: (scope) => scope.lib["mkOption"],
        }).in$((scope) =>
          scope.attrSet$({
            ...scope.deepSet$(["options", "number"], () =>
              scope.apply$(scope.mkOption, () =>
                scope.attrSet$({
                  type: () =>
                    scope.apply$(scope.types["submodule"], () =>
                      scope.attrSet$({
                        freeformType: () =>
                          scope.apply$(scope.types["attrsOf"], () =>
                            scope.apply$(scope.types["either"], () =>
                              scope.types["int"], () =>
                              scope.types["int"])),
                      })),
                  default: { int: 42n },
                }))),
          })
        ),
    )
  ),
);
