import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./emptyValues.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.let$({
          types: (scope) => scope.lib["types"],
        }).in$((scope) =>
          scope.attrSet$({
            options: () =>
              scope.attrSet$({
                int: () =>
                  scope.apply$(scope.lib["mkOption"], () =>
                    scope.attrSet$({
                      type: () =>
                        scope.apply$(scope.types["lazyAttrsOf"], () =>
                          scope.types["int"]),
                    })),
                list: () =>
                  scope.apply$(scope.lib["mkOption"], () =>
                    scope.attrSet$({
                      type: () =>
                        scope.apply$(scope.types["lazyAttrsOf"], () =>
                          scope.apply$(scope.types["listOf"], () =>
                            scope.types["int"])),
                    })),
                nonEmptyList: () =>
                  scope.apply$(scope.lib["mkOption"], () =>
                    scope.attrSet$({
                      type: () =>
                        scope.apply$(scope.types["lazyAttrsOf"], () =>
                          scope.apply$(scope.types["nonEmptyListOf"], () =>
                            scope.types["int"])),
                    })),
                attrs: () =>
                  scope.apply$(scope.lib["mkOption"], () =>
                    scope.attrSet$({
                      type: () =>
                        scope.apply$(scope.types["lazyAttrsOf"], () =>
                          scope.apply$(scope.types["attrsOf"], () =>
                            scope.types["int"])),
                    })),
                null: () =>
                  scope.apply$(scope.lib["mkOption"], () =>
                    scope.attrSet$({
                      type: () =>
                        scope.apply$(scope.types["lazyAttrsOf"], () =>
                          scope.apply$(scope.types["nullOr"], () =>
                            scope.types["int"])),
                    })),
                submodule: () =>
                  scope.apply$(scope.lib["mkOption"], () =>
                    scope.attrSet$({
                      type: () =>
                        scope.apply$(scope.types["lazyAttrsOf"], () =>
                          scope.apply$(scope.types["submodule"], {})),
                    })),
              }),
            config: () =>
              scope.attrSet$({
                ...scope.deepSet$(["int", "a"], () =>
                  scope.apply$(scope.lib["mkIf"], false, null)),
                ...scope.deepSet$(["list", "a"], () =>
                  scope.apply$(scope.lib["mkIf"], false, null)),
                ...scope.deepSet$(["nonEmptyList", "a"], () =>
                  scope.apply$(scope.lib["mkIf"], false, null)),
                ...scope.deepSet$(["attrs", "a"], () =>
                  scope.apply$(scope.lib["mkIf"], false, null)),
                ...scope.deepSet$(["null", "a"], () =>
                  scope.apply$(scope.lib["mkIf"], false, null)),
                ...scope.deepSet$(["submodule", "a"], () =>
                  scope.apply$(scope.lib["mkIf"], false, null)),
              }),
          })
        ),
    )
  ),
);
