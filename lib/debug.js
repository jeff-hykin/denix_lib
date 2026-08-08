import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./debug.nix", import.meta.url).pathname,
  ({ scope }) => (
    /**
  Collection of functions useful for debugging
  broken nix expressions.

  * `trace`-like functions take two values, print
    the first to stderr and return the second.
  * `traceVal`-like functions take one argument
    which both printed and returned.
  * `traceSeq`-like functions fully evaluate their
    traced value before printing (not just to “weak
    head normal form” like trace does by default).
  * Functions that end in `-Fn` take an additional
    function as their first argument, which is applied
    to the traced value before it is printed.
    */ scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        concatMapStringsSep: (scope) => scope.lib["concatMapStringsSep"],
        isList: (scope) => scope.lib["isList"],
        isAttrs: (scope) => scope.lib["isAttrs"],
        substring: (scope) => scope.lib["substring"],
        attrValues: (scope) => scope.lib["attrValues"],
        concatLists: (scope) => scope.lib["concatLists"],
        const: (scope) => scope.lib["const"],
        elem: (scope) => scope.lib["elem"],
        "foldl'": (scope) => scope.lib["foldl'"],
        generators: (scope) => scope.lib["generators"],
        id: (scope) => scope.lib["id"],
        mapAttrs: (scope) => scope.lib["mapAttrs"],
      }).in$((scope) =>
        scope.recAttrSet$({
          trace: (scope) => scope.builtins["trace"],
          addErrorContext: (scope) => scope.builtins["addErrorContext"],
          unsafeGetAttrPos: (scope) => scope.builtins["unsafeGetAttrPos"],
          traceIf: (scope) =>
            scope.func$("pred", (scope) =>
              scope.func$("msg", (scope) =>
                scope.func$("x", (scope) =>
                  scope.if$(scope.pred).then$(() =>
                    scope.apply$(scope.trace, () => scope.msg, () => scope.x)
                  ).else$(() =>
                    scope.x
                  )))),
          traceValFn: (scope) =>
            scope.func$("f", (scope) =>
              scope.func$("x", (scope) =>
                scope.apply$(scope.trace, () =>
                  scope.apply$(scope.f, () =>
                    scope.x), () =>
                  scope.x))),
          traceVal: (scope) =>
            scope.apply$(scope.traceValFn, () =>
              scope.id),
          traceSeq: (scope) =>
            scope.func$("x", (scope) =>
              scope.func$("y", (scope) =>
                scope.apply$(scope.trace, () =>
                  scope.apply$(scope.builtins["deepSeq"], () =>
                    scope.x, () =>
                    scope.x), () =>
                  scope.y))),
          traceSeqN: (scope) =>
            scope.func$("depth", (scope) =>
              scope.func$("x", (scope) =>
                scope.func$("y", (scope) =>
                  scope.let$({
                    snip: (scope) =>
                      scope.func$("v", (scope) =>
                        scope.if$(scope.apply$(scope.isList, () =>
                          scope.v)).then$(() =>
                            scope.apply$(scope.noQuotes, "[…]", () =>
                              scope.v)
                          ).elseIf$(() =>
                            scope.apply$(scope.isAttrs, () =>
                              scope.v)
                          ).then$(() =>
                            scope.apply$(scope.noQuotes, "{…}", () =>
                              scope.v)
                          ).else$(() =>
                            scope.v
                          )),
                    noQuotes: (scope) =>
                      scope.func$("str", (scope) =>
                        scope.func$("v", (scope) =>
                          scope.attrSet$({
                            __pretty: () =>
                              scope.apply$(scope.const, () =>
                                scope.str),
                            val: () => scope.v,
                          }))),
                    modify: (scope) =>
                      scope.func$("n", (scope) =>
                        scope.func$("fn", (scope) =>
                          scope.func$("v", (scope) =>
                            scope.if$(scope.operators$.equal(scope.n, 0n))
                              .then$(() =>
                                scope.apply$(scope.fn, () =>
                                  scope.v)
                              ).elseIf$(() =>
                                scope.apply$(scope.isList, () =>
                                  scope.v)
                              ).then$(() =>
                                scope.apply$(scope.map, () =>
                                  scope.apply$(
                                    scope.modify,
                                    () => (scope.operators$.subtract(
                                      scope.n,
                                      1n,
                                    )),
                                    () => scope.fn,
                                  ), () => scope.v)
                              ).elseIf$(() =>
                                scope.apply$(scope.isAttrs, () => scope.v)
                              ).then$(() =>
                                scope.apply$(scope.mapAttrs, () =>
                                  scope.apply$(scope.const, () =>
                                    scope.apply$(
                                      scope.modify,
                                      () => (scope.operators$.subtract(
                                        scope.n,
                                        1n,
                                      )),
                                      () => scope.fn,
                                    )), () => scope.v)
                              ).else$(() => scope.v)))),
                  }).in$((scope) =>
                    scope.apply$(scope.trace, () =>
                      scope.apply$(scope.generators["toPretty"], {
                        allowPrettyValues: true,
                      }, () =>
                        scope.apply$(scope.modify, () => scope.depth, () =>
                          scope.snip, () =>
                          scope.x)), () =>
                      scope.y)
                  )))),
          traceValSeqFn: (scope) =>
            scope.func$("f", (scope) =>
              scope.func$("v", (scope) =>
                scope.apply$(scope.traceValFn, () =>
                  scope.f, () =>
                  scope.apply$(scope.builtins["deepSeq"], () =>
                    scope.v, () =>
                    scope.v)))),
          traceValSeq: (scope) =>
            scope.apply$(scope.traceValSeqFn, () =>
              scope.id),
          traceValSeqNFn: (scope) =>
            scope.func$("f", (scope) =>
              scope.func$("depth", (scope) =>
                scope.func$("v", (scope) =>
                  scope.apply$(scope.traceSeqN, () =>
                    scope.depth, () =>
                    scope.apply$(scope.f, () =>
                      scope.v), () =>
                    scope.v)))),
          traceValSeqN: (scope) =>
            scope.apply$(scope.traceValSeqNFn, () =>
              scope.id),
          traceFnSeqN: (scope) =>
            scope.func$("depth", (scope) =>
              scope.func$("name", (scope) =>
                scope.func$("f", (scope) =>
                  scope.func$("v", (scope) =>
                    scope.let$({
                      res: (scope) =>
                        scope.apply$(scope.f, () =>
                          scope.v),
                    }).in$((scope) =>
                      scope.apply$(
                        scope.lib["traceSeqN"],
                        () => (scope.operators$.add(scope.depth, 1n)),
                        () =>
                          scope.attrSet$({
                            fn: () => scope.name,
                            from: () => scope.v,
                            to: () =>
                              scope.res,
                          }),
                        () => scope.res,
                      )
                    ))))),
          runTests: (scope) =>
            scope.func$("tests", (scope) =>
              scope.apply$(scope.concatLists, () =>
                scope.apply$(scope.attrValues, () =>
                  scope.apply$(scope.mapAttrs, () =>
                    scope.func$("name", (scope) =>
                      scope.func$("test", (scope) =>
                        scope.let$({
                          testsToRun: (scope) =>
                            scope.if$(
                              scope.operators$.hasAttr(scope.tests, "tests"),
                            ).then$(() =>
                              scope.tests["tests"]
                            ).else$([]),
                        }).in$((scope) =>
                          scope.if$(
                            (((scope.operators$.equal(
                              scope.apply$(scope.substring, 0n, 4n, () =>
                                scope.name),
                              "test",
                            )) || (scope.apply$(scope.elem, () =>
                              scope.name, () =>
                              scope.testsToRun))) &&
                              ((scope.operators$.equal(scope.testsToRun, [])) ||
                                (scope.apply$(scope.elem, () =>
                                  scope.name, () =>
                                  scope.tests["tests"])))) &&
                            (scope.operators$.notEqual(
                              scope.test["expr"],
                              scope.test["expected"],
                            )),
                          ).then$(() => [scope.attrSet$({
                            name: () =>
                              scope.name,
                            expected: () =>
                              scope.test["expected"],
                            result: () =>
                              scope.test["expr"],
                          })]).else$([])
                        ))), () =>
                    scope.tests)))),
          throwTestFailures: (scope) =>
            scope.func$({
              failures: scope.nixArg$.NoDefault,
              description: "tests",
              "...": scope.nixArg$.Ellipsis,
            }, (scope) =>
              scope.if$(scope.operators$.equal(scope.failures, [])).then$(null)
                .else$(() =>
                  scope.let$({
                    toPretty: (scope) =>
                      scope.func$("value", (scope) =>
                        scope.apply$(
                          scope.builtins["unsafeDiscardStringContext"],
                          () =>
                            scope.apply$(scope.generators["toPretty"], {
                              allowPrettyValues: true,
                            }, () => scope.value),
                        )),
                    failureToPretty: (scope) =>
                      scope.func$("failure", (scope) =>
                        scope.str$(
                          () => [
                            "FAIL ",
                            scope.apply$(
                              scope.toPretty,
                              () => scope.failure["name"],
                            ),
                            ":\nExpected:\n",
                            scope.apply$(
                              scope.toPretty,
                              () => scope.failure["expected"],
                            ),
                            "\n\nResult:\n",
                            scope.apply$(
                              scope.toPretty,
                              () => scope.failure["result"],
                            ),
                            "\n",
                          ]
                        )),
                    traceFailures: (scope) =>
                      scope.apply$(
                        scope["foldl'"],
                        () =>
                          scope.func$("_accumulator", (scope) =>
                            scope.func$("failure", (scope) =>
                              scope.apply$(
                                scope.traceVal,
                                () =>
                                  scope.apply$(scope.failureToPretty, () =>
                                    scope.failure),
                              ))),
                        null,
                        () => scope.failures,
                      ),
                  }).in$((scope) =>
                    scope.apply$(scope.throw, () =>
                      scope.apply$(
                        scope.builtins["seq"],
                        () => scope.traceFailures,
                        () => (scope.operators$.add(
                          scope.operators$.add(
                            scope.operators$.add(
                              scope.str$(
                                () => [
                                  scope.apply$(scope.builtins["toString"], () =>
                                    scope.apply$(scope.builtins["length"], () =>
                                      scope.failures)),
                                  " ",
                                  scope.description,
                                  " failed:\n- ",
                                ]
                              ),
                              scope.apply$(
                                scope.concatMapStringsSep,
                                "\n- ",
                                () =>
                                  scope.func$(
                                    "failure",
                                    (scope) => scope.failure["name"],
                                  ),
                                () => scope.failures,
                              ),
                            ),
                            "\n\n",
                          ),
                          scope.apply$(
                            scope.builtins["toJSON"],
                            () => scope.failures,
                          ),
                        )),
                      ))
                  )
                )),
          testAllTrue: (scope) =>
            scope.func$("expr", (scope) =>
              scope.attrSet$({
                expr: () =>
                  scope.expr,
                expected: () =>
                  scope.apply$(scope.map, () =>
                    scope.func$("x", (scope) =>
                      true), () =>
                    scope.expr),
              })),
        })
      ))
  ),
);
