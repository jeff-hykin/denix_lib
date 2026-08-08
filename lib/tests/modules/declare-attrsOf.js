import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./declare-attrsOf.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.let$({
          deathtrapArgs: (scope) =>
            scope.apply$(scope.lib["mapAttrs"], () =>
              scope.func$("k", (scope) =>
                scope.func$("_", (scope) =>
                  scope.apply$(scope.throw, () =>
                    scope.str$(
                      () => [
                        "The module system is too strict, accessing an unused option's ",
                        scope.k,
                        " mkOption-attribute.",
                      ]
                    )))), () =>
              scope.apply$(
                scope.lib["functionArgs"],
                () => scope.lib["mkOption"],
              )),
        }).in$((scope) =>
          scope.attrSet$({
            ...scope.deepSet$(["options", "value"], () =>
              scope.apply$(scope.lib["mkOption"], () =>
                scope.attrSet$({
                  type: () =>
                    scope.apply$(
                      scope.lib["types"]["attrsOf"],
                      () => scope.lib["types"]["str"],
                    ),
                  default: {},
                }))),
            ...scope.deepSet$(
              ["options", "testing-laziness-so-don't-read-me"],
              () =>
                scope.apply$(scope.lib["mkOption"], () => scope.deathtrapArgs),
            ),
          })
        ),
    )
  ),
);
