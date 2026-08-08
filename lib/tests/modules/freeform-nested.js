import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./freeform-nested.nix", import.meta.url).pathname,
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
            ...scope.deepSet$(["options", "nest", "foo"], () =>
              scope.apply$(scope.lib["mkOption"], () =>
                scope.attrSet$({
                  type: () => scope.lib["types"]["bool"],
                  default: false,
                }))),
            ...scope.deepSet$(
              ["options", "nest", "unused"],
              () =>
                scope.apply$(scope.lib["mkOption"], () => scope.deathtrapArgs),
            ),
            ...scope.deepSet$(["config", "nest", "bar"], "bar"),
          })
        ),
    )
  ),
);
