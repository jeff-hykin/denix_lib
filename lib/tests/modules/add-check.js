import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./add-check.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.let$({
          types: (scope) => scope.lib["types"],
          mkOption: (scope) => scope.lib["mkOption"],
          addCheck: (scope) => scope.types["addCheck"],
          int: (scope) => scope.types["int"],
          attrsOf: (scope) => scope.types["attrsOf"],
          v1Type: (scope) =>
            scope.apply$(scope.addCheck, () => scope.int, () =>
              scope.func$("v", (scope) => scope.operators$.equal(scope.v, 0n))),
          v2Type: (scope) =>
            scope.apply$(scope.addCheck, () =>
              scope.apply$(scope.attrsOf, () =>
                scope.int), () =>
              scope.func$("v", (scope) =>
                scope.operators$.hasAttr(scope.v, "foo"))),
        }).in$((scope) =>
          scope.attrSet$({
            ...scope.deepSet$(["options", "v1CheckedPass"], () =>
              scope.apply$(scope.mkOption, () =>
                scope.attrSet$({
                  type: () =>
                    scope.v1Type,
                  default: 0n,
                }))),
            ...scope.deepSet$(["options", "v1CheckedFail"], () =>
              scope.apply$(scope.mkOption, () =>
                scope.attrSet$({
                  type: () =>
                    scope.v1Type,
                  default: 1n,
                }))),
            ...scope.deepSet$(["options", "v2checkedPass"], () =>
              scope.apply$(scope.mkOption, () =>
                scope.attrSet$({
                  type: () =>
                    scope.v2Type,
                  default: { foo: 1n },
                  apply: () =>
                    scope.func$("v", (scope) =>
                      scope.operators$.equal(scope.v["foo"], 1n)),
                }))),
            ...scope.deepSet$(["options", "v2checkedFail"], () =>
              scope.apply$(scope.mkOption, () =>
                scope.attrSet$({
                  type: () =>
                    scope.v2Type,
                  default: {},
                  apply: () =>
                    scope.func$("v", (scope) =>
                      scope.apply$(scope.lib["deepSeq"], () =>
                        scope.v, () =>
                        scope.v)),
                }))),
          })
        ),
    )
  ),
);
