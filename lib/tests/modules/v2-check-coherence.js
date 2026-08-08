import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./v2-check-coherence.nix", import.meta.url).pathname,
  ({ scope }) => (
    //
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.let$({
          types: (scope) => scope.lib["types"],
          mkOption: (scope) => scope.lib["mkOption"],
          adhocOverrideType: (scope) =>
            scope.operators$.merge(
              scope.apply$(scope.types["lazyAttrsOf"], () =>
                scope.types["raw"]),
              scope.attrSet$({
                check: () =>
                  scope.func$("_", (scope) => false),
              }),
            ),
          properlyCheckedType: (scope) =>
            scope.apply$(scope.types["addCheck"], () =>
              scope.apply$(scope.types["lazyAttrsOf"], () =>
                scope.types["raw"]), () =>
              scope.func$("v", (scope) =>
                scope.operators$.hasAttr(scope.v, "foo"))),
          failingCheckedType: (scope) =>
            scope.apply$(scope.types["addCheck"], () =>
              scope.apply$(scope.types["lazyAttrsOf"], () =>
                scope.types["raw"]), () =>
              scope.func$("v", (scope) =>
                scope.operators$.hasAttr(scope.v, "foo"))),
          adhocOuterType: (scope) =>
            scope.operators$.merge(
              scope.apply$(scope.types["lazyAttrsOf"], () =>
                scope.types["int"]),
              scope.attrSet$({
                check: () =>
                  scope.func$("_", (scope) => false),
              }),
            ),
          adhocEitherLeft: (scope) =>
            scope.operators$.merge(
              scope.apply$(scope.types["lazyAttrsOf"], () =>
                scope.types["raw"]),
              scope.attrSet$({
                check: () =>
                  scope.func$("_", (scope) => false),
              }),
            ),
          adhocCoercedFrom: (scope) =>
            scope.operators$.merge(
              scope.apply$(scope.types["lazyAttrsOf"], () =>
                scope.types["raw"]),
              scope.attrSet$({
                check: () =>
                  scope.func$("_", (scope) => false),
              }),
            ),
          adhocCoercedTo: (scope) =>
            scope.operators$.merge(
              scope.apply$(scope.types["lazyAttrsOf"], () =>
                scope.types["raw"]),
              scope.attrSet$({
                check: () =>
                  scope.func$("_", (scope) => false),
              }),
            ),
          adhocAddCheck: (scope) =>
            scope.apply$(
              scope.types["addCheck"],
              () => (scope.operators$.merge(
                scope.apply$(scope.types["lazyAttrsOf"], () =>
                  scope.types["raw"]),
                scope.attrSet$({
                  check: () =>
                    scope.func$("_", (scope) => false),
                }),
              )),
              () => scope.func$("v", (scope) => true),
            ),
        }).in$((scope) =>
          scope.attrSet$({
            ...scope.deepSet$(["options", "adhocFail"], () =>
              scope.apply$(scope.mkOption, () =>
                scope.attrSet$({
                  type: () =>
                    scope.apply$(scope.types["lazyAttrsOf"], () =>
                      scope.adhocOverrideType),
                  default: {},
                }))),
            ...scope.deepSet$(["config", "adhocFail"], { foo: {} }),
            ...scope.deepSet$(["options", "adhocOuterFail"], () =>
              scope.apply$(scope.mkOption, () =>
                scope.attrSet$({
                  type: () =>
                    scope.adhocOuterType,
                  default: {},
                }))),
            ...scope.deepSet$(["config", "adhocOuterFail", "bar"], 42n),
            ...scope.deepSet$(["options", "eitherLeftFail"], () =>
              scope.apply$(scope.mkOption, () =>
                scope.attrSet$({
                  type: () =>
                    scope.apply$(scope.types["either"], () =>
                      scope.adhocEitherLeft, () =>
                      scope.types["int"]),
                }))),
            ...scope.deepSet$(["config", "eitherLeftFail", "foo"], {}),
            ...scope.deepSet$(["options", "eitherRightFail"], () =>
              scope.apply$(scope.mkOption, () =>
                scope.attrSet$({
                  type: () =>
                    scope.apply$(
                      scope.types["either"],
                      () => scope.types["int"],
                      () => (scope.operators$.merge(
                        scope.apply$(scope.types["lazyAttrsOf"], () =>
                          scope.types["raw"]),
                        scope.attrSet$({
                          check: () =>
                            scope.func$("_", (scope) => false),
                        }),
                      )),
                    ),
                }))),
            ...scope.deepSet$(["config", "eitherRightFail", "foo"], {}),
            ...scope.deepSet$(["options", "coercedFromFail"], () =>
              scope.apply$(scope.mkOption, () =>
                scope.attrSet$({
                  type: () =>
                    scope.apply$(scope.types["coercedTo"], () =>
                      scope.adhocCoercedFrom, () =>
                      scope.func$("x", (scope) => ({ bar: 1n })), () =>
                      scope.apply$(scope.types["lazyAttrsOf"], () =>
                        scope.types["int"])),
                }))),
            ...scope.deepSet$(["config", "coercedFromFail"], { foo: {} }),
            ...scope.deepSet$(["options", "coercedToFail"], () =>
              scope.apply$(scope.mkOption, () =>
                scope.attrSet$({
                  type: () =>
                    scope.apply$(scope.types["coercedTo"], () =>
                      scope.types["str"], () =>
                      scope.func$("x", (scope) => ({})), () =>
                      scope.adhocCoercedTo),
                }))),
            ...scope.deepSet$(["config", "coercedToFail", "foo"], {}),
            ...scope.deepSet$(["options", "addCheckNested"], () =>
              scope.apply$(scope.mkOption, () =>
                scope.attrSet$({
                  type: () =>
                    scope.adhocAddCheck,
                }))),
            ...scope.deepSet$(["config", "addCheckNested", "foo"], {}),
            ...scope.deepSet$(["options", "addCheckPass"], () =>
              scope.apply$(scope.mkOption, () =>
                scope.attrSet$({
                  type: () =>
                    scope.apply$(scope.types["lazyAttrsOf"], () =>
                      scope.properlyCheckedType),
                  default: {},
                }))),
            ...scope.deepSet$(
              ["config", "addCheckPass", "bar", "foo"],
              "value",
            ),
            ...scope.deepSet$(["options", "addCheckFail"], () =>
              scope.apply$(scope.mkOption, () =>
                scope.attrSet$({
                  type: () =>
                    scope.apply$(scope.types["lazyAttrsOf"], () =>
                      scope.failingCheckedType),
                  default: {},
                }))),
            ...scope.deepSet$(
              ["config", "addCheckFail", "bar", "baz"],
              "value",
            ),
            ...scope.deepSet$(["options", "normalPass"], () =>
              scope.apply$(scope.mkOption, () =>
                scope.attrSet$({
                  type: () =>
                    scope.apply$(scope.types["lazyAttrsOf"], () =>
                      scope.apply$(scope.types["attrsOf"], () =>
                        scope.types["int"])),
                  default: {},
                }))),
            ...scope.deepSet$(["config", "normalPass", "foo", "bar"], 42n),
            ...scope.deepSet$(["options", "result"], () =>
              scope.apply$(scope.mkOption, () =>
                scope.attrSet$({
                  type: () =>
                    scope.types["bool"],
                  default: false,
                }))),
            ...scope.deepSet$(["config", "result"], true),
          })
        ),
    )
  ),
);
