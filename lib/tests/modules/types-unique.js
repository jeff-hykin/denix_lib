import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./types-unique.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.let$({
          mkOption: (scope) => scope.lib["mkOption"],
          types: (scope) => scope.lib["types"],
        }).in$((scope) =>
          scope.attrSet$({
            ...scope.deepSet$(["options", "examples"], () =>
              scope.apply$(scope.mkOption, () =>
                scope.attrSet$({
                  type: () =>
                    scope.apply$(scope.types["lazyAttrsOf"], () =>
                      scope.apply$(scope.types["unique"], {
                        message:
                          "We require a single definition, because seeing the whole value at once helps us maintain critical invariants of our system.",
                      }, () =>
                        scope.apply$(
                          scope.types["attrsOf"],
                          () => scope.types["str"],
                        ))),
                }))),
            imports: () => [
              scope.attrSet$({
                ...scope.deepSet$(["examples", "merged"], { b: "bee" }),
              }),
              scope.attrSet$({
                ...scope.deepSet$(
                  ["examples", "override"],
                  () => scope.apply$(scope.lib["mkForce"], { b: "bee" }),
                ),
              }),
            ],
            ...scope.deepSet$(["config", "examples"], {
              merged: { a: "aye" },
              override: { a: "aye" },
              badLazyType: { a: true },
            }),
          })
        ),
    )
  ),
);
