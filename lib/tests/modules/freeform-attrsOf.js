import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./freeform-attrsOf.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.attrSet$({
          freeformType: () =>
            scope.with$(() => scope.lib["types"], (scope) =>
              scope.apply$(scope.attrsOf, () =>
                scope.apply$(scope.either, () => scope.str, () =>
                  scope.apply$(scope.attrsOf, () => scope.str)))),
        }),
    )
  ),
);
