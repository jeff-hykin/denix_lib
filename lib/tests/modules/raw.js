import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./raw.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      lib: scope.nixArg$.NoDefault,
      config: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.attrSet$({
        options: () =>
          scope.attrSet$({
            processedToplevel: () =>
              scope.apply$(scope.lib["mkOption"], () =>
                scope.attrSet$({
                  type: () => scope.lib["types"]["raw"],
                })),
            unprocessedNesting: () =>
              scope.apply$(scope.lib["mkOption"], () =>
                scope.attrSet$({
                  type: () => scope.lib["types"]["raw"],
                })),
            multiple: () =>
              scope.apply$(scope.lib["mkOption"], () =>
                scope.attrSet$({
                  type: () => scope.lib["types"]["raw"],
                })),
            priorities: () =>
              scope.apply$(scope.lib["mkOption"], () =>
                scope.attrSet$({
                  type: () => scope.lib["types"]["raw"],
                })),
            unprocessedNestingEvaluates: () =>
              scope.apply$(scope.lib["mkOption"], () =>
                scope.attrSet$({
                  default: () =>
                    scope.apply$(
                      scope.builtins["tryEval"],
                      () => scope.config["unprocessedNesting"],
                    ),
                })),
          }),
        config: () =>
          scope.attrSet$({
            processedToplevel: () => scope.apply$(scope.lib["mkIf"], true, 10n),
            ...scope.deepSet$(
              ["unprocessedNesting", "foo"],
              () => scope.apply$(scope.throw, "foo"),
            ),
            multiple: () => scope.apply$(scope.lib["mkMerge"], ["foo", "foo"]),
            priorities: () =>
              scope.apply$(
                scope.lib["mkMerge"],
                () => ["foo", scope.apply$(scope.lib["mkForce"], "bar")],
              ),
          }),
      }))
  ),
);
