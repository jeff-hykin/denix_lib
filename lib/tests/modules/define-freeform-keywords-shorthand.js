import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./define-freeform-keywords-shorthand.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      config: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.attrSet$({
        class: () => ({ just: "data" }),
        a: "one",
        b: "two",
        meta: "meta",
        ...scope.deepSet$(["_module", "args", "result"], () =>
          scope.let$({
            r: (scope) =>
              scope.apply$(scope.removeAttrs, () => scope.config, ["_module"]),
          }).in$((scope) =>
            scope.apply$(
              scope.builtins["trace"],
              () =>
                scope.apply$(
                  scope.builtins["deepSeq"],
                  () => scope.r,
                  () => scope.r,
                ),
              () => (scope.operators$.equal(
                scope.r,
                scope.attrSet$({
                  a: "one",
                  b: "two",
                  class: () => ({ just: "data" }),
                  meta: "meta",
                }),
              )),
            )
          )),
      }))
  ),
);
