import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./lists.nix", import.meta.url).pathname,
  ({ scope }) => (
    /**
  General list operations.
    */ scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        toInt: (scope) => scope.lib["strings"]["toInt"],
        compare: (scope) => scope.lib["trivial"]["compare"],
        id: (scope) => scope.lib["trivial"]["id"],
        min: (scope) => scope.lib["trivial"]["min"],
        seq: (scope) => scope.lib["trivial"]["seq"],
        warn: (scope) => scope.lib["trivial"]["warn"],
        mapAttrs: (scope) => scope.lib["attrsets"]["mapAttrs"],
        attrNames: (scope) => scope.lib["attrsets"]["attrNames"],
        attrValues: (scope) => scope.lib["attrsets"]["attrValues"],
      }).in$((scope) =>
        scope.recAttrSet$({
          head: (scope) => scope.builtins["head"],
          tail: (scope) => scope.builtins["tail"],
          length: (scope) => scope.builtins["length"],
          isList: (scope) => scope.builtins["isList"],
          elemAt: (scope) => scope.builtins["elemAt"],
          concatLists: (scope) => scope.builtins["concatLists"],
          filter: (scope) => scope.builtins["filter"],
          elem: (scope) => scope.builtins["elem"],
          genList: (scope) => scope.builtins["genList"],
          map: (scope) => scope.builtins["map"],
          singleton: (scope) => scope.func$("x", (scope) => [scope.x]),
          forEach: (scope) =>
            scope.func$("xs", (scope) =>
              scope.func$(
                "f",
                (scope) =>
                  scope.apply$(scope.map, () => scope.f, () => scope.xs),
              )),
          foldr: (scope) =>
            scope.func$("op", (scope) =>
              scope.func$("nul", (scope) =>
                scope.func$("list", (scope) =>
                  scope.let$({
                    len: (scope) =>
                      scope.apply$(scope.length, () => scope.list),
                    "fold'": (scope) =>
                      scope.func$("n", (scope) =>
                        scope.if$(scope.operators$.equal(scope.n, scope.len))
                          .then$(() => scope.nul).else$(() =>
                            scope.apply$(scope.op, () =>
                              scope.apply$(scope.elemAt, () => scope.list, () =>
                                scope.n), () =>
                              scope.apply$(
                                scope["fold'"],
                                () => (scope.operators$.add(scope.n, 1n)),
                              ))
                          )),
                  }).in$((scope) =>
                    scope.apply$(scope["fold'"], 0n)
                  )))),
          fold: (scope) =>
            scope.apply$(
              scope.warn,
              "fold has been deprecated, use foldr instead",
              () => scope.foldr,
            ),
          foldl: (scope) =>
            scope.func$("op", (scope) =>
              scope.func$("nul", (scope) =>
                scope.func$("list", (scope) =>
                  scope.let$({
                    "foldl'": (scope) =>
                      scope.func$("n", (scope) =>
                        scope.if$(scope.operators$.equal(scope.n, -1n)).then$(
                          () =>
                            scope.nul
                        ).else$(() =>
                          scope.apply$(scope.op, () =>
                            scope.apply$(
                              scope["foldl'"],
                              () => (scope.operators$.subtract(scope.n, 1n)),
                            ), () =>
                            scope.apply$(scope.elemAt, () =>
                              scope.list, () =>
                              scope.n))
                        )),
                  }).in$((scope) =>
                    scope.apply$(
                      scope["foldl'"],
                      () => (scope.operators$.subtract(
                        scope.apply$(scope.length, () => scope.list),
                        1n,
                      )),
                    )
                  )))),
          "foldl'": (scope) =>
            scope.let$({
              "foldl'": (scope) =>
                scope.builtins["foldl'"],
            }).in$((scope) =>
              scope.func$("op", (scope) =>
                scope.func$("acc", (scope) =>
                  scope.apply$(scope.seq, () =>
                    scope.acc, () =>
                    scope.apply$(scope["foldl'"], () =>
                      scope.op, () =>
                      scope.acc))))
            ),
          imap0: (scope) =>
            scope.func$("f", (scope) =>
              scope.func$("list", (scope) =>
                scope.apply$(scope.genList, () =>
                  scope.func$("n", (scope) =>
                    scope.apply$(scope.f, () =>
                      scope.n, () =>
                      scope.apply$(scope.elemAt, () =>
                        scope.list, () =>
                        scope.n))), () =>
                  scope.apply$(scope.length, () =>
                    scope.list)))),
          imap1: (scope) =>
            scope.func$("f", (scope) =>
              scope.func$("list", (scope) =>
                scope.apply$(scope.genList, () =>
                  scope.func$("n", (scope) =>
                    scope.apply$(
                      scope.f,
                      () => (scope.operators$.add(scope.n, 1n)),
                      () =>
                        scope.apply$(
                          scope.elemAt,
                          () => scope.list,
                          () => scope.n,
                        ),
                    )), () =>
                  scope.apply$(scope.length, () =>
                    scope.list)))),
          ifilter0: (scope) =>
            scope.func$("ipred", (scope) =>
              scope.func$("input", (scope) =>
                scope.apply$(scope.map, () =>
                  scope.func$("idx", (scope) =>
                    scope.apply$(scope.elemAt, () =>
                      scope.input, () =>
                      scope.idx)), () =>
                  scope.apply$(scope.filter, () =>
                    scope.func$("idx", (scope) =>
                      scope.apply$(scope.ipred, () =>
                        scope.idx, () =>
                        scope.apply$(scope.elemAt, () =>
                          scope.input, () =>
                          scope.idx))), () =>
                    scope.apply$(scope.genList, () =>
                      scope.func$("x", (scope) =>
                        scope.x), () =>
                      scope.apply$(scope.length, () =>
                        scope.input)))))),
          concatMap: (scope) =>
            scope.builtins["concatMap"],
          flatten: (scope) =>
            scope.func$("x", (scope) =>
              scope.if$(scope.apply$(scope.isList, () =>
                scope.x)).then$(() =>
                  scope.apply$(scope.concatMap, () =>
                    scope.flatten, () =>
                    scope.x)
                ).else$(() => [scope.x])),
          remove: (scope) =>
            scope.func$("e", (scope) =>
              scope.apply$(scope.filter, () =>
                scope.func$("x", (scope) =>
                  scope.operators$.notEqual(scope.x, scope.e)))),
          findSingle: (scope) =>
            scope.func$("pred", (scope) =>
              scope.func$("default", (scope) =>
                scope.func$("multiple", (scope) =>
                  scope.func$("list", (scope) =>
                    scope.let$({
                      found: (scope) =>
                        scope.apply$(scope.filter, () =>
                          scope.pred, () =>
                          scope.list),
                      len: (scope) =>
                        scope.apply$(scope.length, () =>
                          scope.found),
                    }).in$((scope) =>
                      scope.if$(scope.operators$.equal(scope.len, 0n)).then$(
                        () => scope.default
                      ).elseIf$(() =>
                        scope.operators$.notEqual(scope.len, 1n)
                      ).then$(() =>
                        scope.multiple
                      ).else$(() =>
                        scope.apply$(scope.head, () =>
                          scope.found)
                      )
                    ))))),
          findFirstIndex: (scope) =>
            scope.func$("pred", (scope) =>
              scope.func$("default", (scope) =>
                scope.func$("list", (scope) =>
                  scope.let$({
                    resultIndex: (scope) =>
                      scope.apply$(
                        scope["foldl'"],
                        () =>
                          scope.func$("index", (scope) =>
                            scope.func$("el", (scope) =>
                              scope.if$(
                                scope.operators$.lessThan(scope.index, 0n),
                              ).then$(() =>
                                scope.if$(
                                  scope.apply$(scope.pred, () => scope.el),
                                ).then$(() =>
                                  scope.operators$.subtract(
                                    scope.operators$.negative(scope.index),
                                    1n,
                                  )
                                ).else$(() =>
                                  scope.operators$.subtract(scope.index, 1n)
                                )
                              ).else$(() => scope.index))),
                        -1n,
                        () => scope.list,
                      ),
                  }).in$((scope) =>
                    scope.if$(scope.operators$.lessThan(scope.resultIndex, 0n))
                      .then$(() =>
                        scope.default
                      ).else$(() =>
                        scope.resultIndex
                      )
                  )))),
          findFirst: (scope) =>
            scope.func$("pred", (scope) =>
              scope.func$("default", (scope) =>
                scope.func$("list", (scope) =>
                  scope.let$({
                    index: (scope) =>
                      scope.apply$(
                        scope.findFirstIndex,
                        () => scope.pred,
                        null,
                        () => scope.list,
                      ),
                  }).in$((scope) =>
                    scope.if$(scope.operators$.equal(scope.index, null)).then$(
                      () =>
                        scope.default
                    ).else$(() =>
                      scope.apply$(scope.elemAt, () =>
                        scope.list, () =>
                        scope.index)
                    )
                  )))),
          any: (scope) =>
            scope.builtins["any"],
          all: (scope) =>
            scope.builtins["all"],
          count: (scope) =>
            scope.func$("pred", (scope) =>
              scope.apply$(scope["foldl'"], () =>
                scope.func$("c", (scope) =>
                  scope.func$("x", (scope) =>
                    scope.if$(scope.apply$(scope.pred, () =>
                      scope.x)).then$(() =>
                        scope.operators$.add(scope.c, 1n)
                      ).else$(() =>
                        scope.c
                      ))), 0n)),
          optional: (scope) =>
            scope.func$("cond", (scope) =>
              scope.func$("elem", (scope) =>
                scope.if$(scope.cond).then$(() => [scope.elem]).else$([]))),
          optionals: (scope) =>
            scope.func$("cond", (scope) =>
              scope.func$("elems", (scope) =>
                scope.if$(scope.cond).then$(() =>
                  scope.elems
                ).else$([]))),
          toList: (scope) =>
            scope.func$("x", (scope) =>
              scope.if$(scope.apply$(scope.isList, () =>
                scope.x)).then$(() =>
                  scope.x
                ).else$(() => [scope.x])),
          range: (scope) =>
            scope.func$("first", (scope) =>
              scope.func$("last", (scope) =>
                scope.if$(scope.operators$.greaterThan(scope.first, scope.last))
                  .then$([]).else$(() =>
                    scope.apply$(
                      scope.genList,
                      () =>
                        scope.func$(
                          "n",
                          (scope) => scope.operators$.add(scope.first, scope.n),
                        ),
                      () => (scope.operators$.add(
                        scope.operators$.subtract(scope.last, scope.first),
                        1n,
                      )),
                    )
                  ))),
          replicate: (scope) =>
            scope.func$("n", (scope) =>
              scope.func$("elem", (scope) =>
                scope.apply$(scope.genList, () =>
                  scope.func$("_", (scope) =>
                    scope.elem), () =>
                  scope.n))),
          partition: (scope) =>
            scope.builtins["partition"],
          "groupBy'": (scope) =>
            scope.func$("op", (scope) =>
              scope.func$("nul", (scope) =>
                scope.func$("pred", (scope) =>
                  scope.func$("lst", (scope) =>
                    scope.apply$(scope.mapAttrs, () =>
                      scope.func$("name", (scope) =>
                        scope.apply$(scope.foldl, () =>
                          scope.op, () =>
                          scope.nul)), () =>
                      scope.apply$(scope.groupBy, () =>
                        scope.pred, () =>
                        scope.lst)))))),
          groupBy: (scope) =>
            scope.operators$.selectOrDefault(scope.builtins, ["groupBy"], () =>
              scope.func$("pred", (scope) =>
                scope.apply$(scope["foldl'"], () =>
                  scope.func$("r", (scope) =>
                    scope.func$("e", (scope) =>
                      scope.let$({
                        key: (scope) =>
                          scope.apply$(scope.pred, () =>
                            scope.e),
                      }).in$((scope) =>
                        scope.operators$.merge(
                          scope.r,
                          scope.attrSet$({
                            ...scope.deepSet$([scope.key], () =>
                              scope.operators$.listConcat(
                                scope.operators$.selectOrDefault(scope.r, [
                                  scope.key,
                                ], []),
                                [scope.e],
                              )),
                          }),
                        )
                      ))), {}))),
          zipListsWith: (scope) =>
            scope.func$("f", (scope) =>
              scope.func$("fst", (scope) =>
                scope.func$("snd", (scope) =>
                  scope.apply$(scope.genList, () =>
                    scope.func$("n", (scope) =>
                      scope.apply$(scope.f, () =>
                        scope.apply$(scope.elemAt, () =>
                          scope.fst, () =>
                          scope.n), () =>
                        scope.apply$(scope.elemAt, () =>
                          scope.snd, () =>
                          scope.n))), () =>
                    scope.apply$(scope.min, () =>
                      scope.apply$(scope.length, () =>
                        scope.fst), () =>
                      scope.apply$(scope.length, () =>
                        scope.snd)))))),
          zipLists: (scope) =>
            scope.apply$(scope.zipListsWith, () =>
              scope.func$("fst", (scope) =>
                scope.func$("snd", (scope) =>
                  scope.attrSet$({
                    fst: () =>
                      scope.fst,
                    snd: () =>
                      scope.snd,
                  })))),
          reverseList: (scope) =>
            scope.func$("xs", (scope) =>
              scope.let$({
                lastIndex: (scope) =>
                  scope.operators$.subtract(
                    scope.apply$(scope.length, () => scope.xs),
                    1n,
                  ),
              }).in$((scope) =>
                scope.apply$(scope.genList, () =>
                  scope.func$("n", (scope) =>
                    scope.apply$(
                      scope.elemAt,
                      () => scope.xs,
                      () => (scope.operators$.subtract(
                        scope.lastIndex,
                        scope.n,
                      )),
                    )), () => (scope.operators$.add(scope.lastIndex, 1n)))
              )),
          listDfs: (scope) =>
            scope.func$("stopOnCycles", (scope) =>
              scope.func$("before", (scope) =>
                scope.func$("list", (scope) =>
                  scope.let$({
                    "dfs'": (scope) =>
                      scope.func$("us", (scope) =>
                        scope.func$("visited", (scope) =>
                          scope.func$("rest", (scope) =>
                            scope.let$({
                              c: (scope) =>
                                scope.apply$(scope.filter, () =>
                                  scope.func$(
                                    "x",
                                    (scope) =>
                                      scope.apply$(scope.before, () =>
                                        scope.x, () =>
                                        scope.us),
                                  ), () => scope.visited),
                              b: (scope) =>
                                scope.apply$(
                                  scope.partition,
                                  () =>
                                    scope.func$("x", (scope) =>
                                      scope.apply$(scope.before, () =>
                                        scope.x, () =>
                                        scope.us)),
                                  () =>
                                    scope.rest,
                                ),
                            }).in$((scope) =>
                              scope.if$(
                                (scope.stopOnCycles) &&
                                (scope.operators$.notEqual(scope.c, [])),
                              ).then$(() =>
                                scope.attrSet$({
                                  cycle: () => scope.us,
                                  loops: () => scope.c,
                                  visited: () => scope.visited,
                                  rest: () => scope.rest,
                                })
                              ).elseIf$(() =>
                                scope.operators$.equal(scope.b["right"], [])
                              ).then$(() =>
                                scope.attrSet$({
                                  minimal: () => scope.us,
                                  visited: () => scope.visited,
                                  rest: () => scope.rest,
                                })
                              ).else$(() =>
                                scope.apply$(
                                  scope["dfs'"],
                                  () =>
                                    scope.apply$(
                                      scope.head,
                                      () => scope.b["right"],
                                    ),
                                  () => (scope.operators$.listConcat(
                                    [scope.us],
                                    scope.visited,
                                  )),
                                  () => (scope.operators$.listConcat(
                                    scope.apply$(scope.tail, () =>
                                      scope.b["right"]),
                                    scope.b["wrong"],
                                  )),
                                )
                              )
                            )))),
                  }).in$((scope) =>
                    scope.apply$(
                      scope["dfs'"],
                      () => scope.apply$(scope.head, () => scope.list),
                      [],
                      () => scope.apply$(scope.tail, () => scope.list),
                    )
                  )))),
          toposort: (scope) =>
            scope.func$("before", (scope) =>
              scope.let$({
                dfs: (scope) =>
                  scope.apply$(scope.listDfs, true, () => scope.before),
                recurse: (scope) =>
                  scope.func$("list", (scope) =>
                    scope.let$({
                      dfsthis: (scope) =>
                        scope.apply$(scope.dfs, () => scope.list),
                      toporest: (scope) =>
                        scope.apply$(
                          scope.recurse,
                          () => (scope.operators$.listConcat(
                            scope.dfsthis["visited"],
                            scope.dfsthis["rest"],
                          )),
                        ),
                    }).in$((scope) =>
                      scope.if$(
                        scope.operators$.lessThan(
                          scope.apply$(scope.length, () => scope.list),
                          2n,
                        ),
                      ).then$(() =>
                        scope.attrSet$({
                          result: () =>
                            scope.list,
                        })
                      ).elseIf$(() =>
                        scope.operators$.hasAttr(scope.dfsthis, "cycle")
                      ).then$(() =>
                        scope.attrSet$({
                          cycle: () =>
                            scope.operators$.listConcat(
                              scope.apply$(scope.reverseList, () =>
                                scope.dfsthis["visited"]),
                              [scope.dfsthis["cycle"]],
                            ),
                          loops: () =>
                            scope.dfsthis.loops,
                        })
                      ).elseIf$(() =>
                        scope.operators$.hasAttr(scope.toporest, "cycle")
                      ).then$(() =>
                        scope.toporest
                      ).else$(() =>
                        scope.attrSet$({
                          result: () =>
                            scope.operators$.listConcat([
                              scope.dfsthis["minimal"],
                            ], scope.toporest["result"]),
                        })
                      )
                    )),
              }).in$((scope) =>
                scope.recurse
              )),
          sort: (scope) =>
            scope.builtins["sort"],
          sortOn: (scope) =>
            scope.func$("f", (scope) =>
              scope.func$("list", (scope) =>
                scope.let$({
                  pairs: (scope) =>
                    scope.apply$(scope.map, () =>
                      scope.func$("x", (scope) => [
                        scope.apply$(scope.f, () => scope.x),
                        scope.x,
                      ]), () =>
                      scope.list),
                }).in$((scope) =>
                  scope.apply$(scope.map, () =>
                    scope.func$("x", (scope) =>
                      scope.apply$(scope.builtins["elemAt"], () =>
                        scope.x, 1n)), () =>
                    scope.apply$(scope.sort, () =>
                      scope.func$("a", (scope) =>
                        scope.func$("b", (scope) =>
                          scope.operators$.lessThan(
                            scope.apply$(scope.head, () => scope.a),
                            scope.apply$(scope.head, () => scope.b),
                          ))), () =>
                      scope.pairs))
                ))),
          compareLists: (scope) =>
            scope.func$("cmp", (scope) =>
              scope.func$("a", (scope) =>
                scope.func$("b", (scope) =>
                  scope.if$(scope.operators$.equal(scope.a, [])).then$(() =>
                    scope.if$(scope.operators$.equal(scope.b, [])).then$(0n)
                      .else$(-1n)
                  ).elseIf$(() =>
                    scope.operators$.equal(scope.b, [])
                  ).then$(1n).else$(() =>
                    scope.let$({
                      rel: (scope) =>
                        scope.apply$(scope.cmp, () =>
                          scope.apply$(scope.head, () =>
                            scope.a), () =>
                          scope.apply$(scope.head, () =>
                            scope.b)),
                    }).in$((scope) =>
                      scope.if$(scope.operators$.equal(scope.rel, 0n)).then$(
                        () =>
                          scope.apply$(
                            scope.compareLists,
                            () => scope.cmp,
                            () => scope.apply$(scope.tail, () => scope.a),
                            () => scope.apply$(scope.tail, () => scope.b),
                          )
                      ).else$(() => scope.rel)
                    )
                  )))),
          naturalSort: (scope) =>
            scope.func$("lst", (scope) =>
              scope.let$({
                vectorise: (scope) =>
                  scope.func$("s", (scope) =>
                    scope.apply$(scope.map, () =>
                      scope.func$("x", (scope) =>
                        scope.if$(scope.apply$(scope.isList, () =>
                          scope.x)).then$(() =>
                            scope.apply$(scope.toInt, () =>
                              scope.apply$(scope.head, () =>
                                scope.x))
                          ).else$(() =>
                            scope.x
                          )), () =>
                      scope.apply$(
                        scope.builtins["split"],
                        "(0|[1-9][0-9]*)",
                        () => scope.s,
                      ))),
                prepared: (scope) =>
                  scope.apply$(scope.map, () =>
                    scope.func$(
                      "x",
                      (
                        scope,
                      ) => [
                        scope.apply$(scope.vectorise, () => scope.x),
                        scope.x,
                      ],
                    ), () =>
                    scope.lst),
                less: (scope) =>
                  scope.func$("a", (scope) =>
                    scope.func$("b", (scope) =>
                      scope.operators$.lessThan(
                        scope.apply$(scope.compareLists, () =>
                          scope.compare, () =>
                          scope.apply$(scope.head, () =>
                            scope.a), () =>
                          scope.apply$(scope.head, () =>
                            scope.b)),
                        0n,
                      ))),
              }).in$((scope) =>
                scope.apply$(scope.map, () =>
                  scope.func$("x", (scope) =>
                    scope.apply$(scope.elemAt, () =>
                      scope.x, 1n)), () =>
                  scope.apply$(scope.sort, () =>
                    scope.less, () =>
                    scope.prepared))
              )),
          take: (scope) =>
            scope.func$("count", (scope) =>
              scope.func$("list", (scope) =>
                scope.let$({
                  len: (scope) =>
                    scope.apply$(scope.length, () =>
                      scope.list),
                }).in$((scope) =>
                  scope.apply$(scope.genList, () =>
                    scope.apply$(scope.elemAt, () =>
                      scope.list), () =>
                    scope.if$(
                      scope.operators$.greaterThan(scope.count, scope.len),
                    ).then$(() =>
                      scope.len
                    ).else$(() =>
                      scope.count
                    ))
                ))),
          takeEnd: (scope) =>
            scope.func$("count", (scope) =>
              scope.func$("list", (scope) =>
                scope.let$({
                  len: (scope) =>
                    scope.apply$(scope.length, () =>
                      scope.list),
                  start: (scope) =>
                    scope.if$(
                      scope.operators$.greaterThan(scope.count, scope.len),
                    ).then$(0n).else$(() =>
                      scope.operators$.subtract(scope.len, scope.count)
                    ),
                }).in$((scope) =>
                  scope.apply$(scope.genList, () =>
                    scope.func$("i", (scope) =>
                      scope.apply$(
                        scope.elemAt,
                        () => scope.list,
                        () => (scope.operators$.add(scope.start, scope.i)),
                      )), () =>
                    scope.if$(
                      scope.operators$.greaterThan(scope.start, scope.len),
                    ).then$(0n).else$(() =>
                      scope.operators$.subtract(scope.len, scope.start)
                    ))
                ))),
          drop: (scope) =>
            scope.func$("count", (scope) =>
              scope.func$("list", (scope) =>
                scope.let$({
                  len: (scope) =>
                    scope.apply$(scope.length, () =>
                      scope.list),
                }).in$((scope) =>
                  scope.apply$(scope.genList, () =>
                    scope.func$("n", (scope) =>
                      scope.apply$(
                        scope.elemAt,
                        () => scope.list,
                        () => (scope.operators$.add(scope.n, scope.count)),
                      )), () =>
                    scope.if$(
                      scope.operators$.greaterThan(scope.count, scope.len),
                    ).then$(0n).else$(() =>
                      scope.operators$.subtract(scope.len, scope.count)
                    ))
                ))),
          dropEnd: (scope) =>
            scope.func$("n", (scope) =>
              scope.func$("list", (scope) =>
                scope.let$({
                  len: (scope) =>
                    scope.apply$(scope.length, () =>
                      scope.list),
                }).in$((scope) =>
                  scope.apply$(scope.genList, () =>
                    scope.apply$(scope.elemAt, () =>
                      scope.list), () =>
                    scope.if$(scope.operators$.greaterThan(scope.n, scope.len))
                      .then$(0n).elseIf$(() =>
                        scope.operators$.lessThan(scope.n, 0n)
                      ).then$(() =>
                        scope.len
                      ).else$(() =>
                        scope.operators$.subtract(scope.len, scope.n)
                      ))
                ))),
          hasPrefix: (scope) =>
            scope.func$("list1", (scope) =>
              scope.func$("list2", (scope) =>
                scope.operators$.equal(
                  scope.apply$(scope.take, () =>
                    scope.apply$(scope.length, () => scope.list1), () =>
                    scope.list2),
                  scope.list1,
                ))),
          removePrefix: (scope) =>
            scope.func$("list1", (scope) =>
              scope.func$("list2", (scope) =>
                scope.if$(scope.apply$(scope.hasPrefix, () =>
                  scope.list1, () =>
                  scope.list2)).then$(() =>
                    scope.apply$(scope.drop, () =>
                      scope.apply$(scope.length, () =>
                        scope.list1), () =>
                      scope.list2)
                  ).else$(() =>
                    scope.apply$(
                      scope.throw,
                      "lib.lists.removePrefix: First argument is not a list prefix of the second argument",
                    )
                  ))),
          sublist: (scope) =>
            scope.func$("start", (scope) =>
              scope.func$("count", (scope) =>
                scope.func$("list", (scope) =>
                  scope.let$({
                    len: (scope) =>
                      scope.apply$(scope.length, () =>
                        scope.list),
                  }).in$((scope) =>
                    scope.apply$(scope.genList, () =>
                      scope.func$("n", (scope) =>
                        scope.apply$(
                          scope.elemAt,
                          () => scope.list,
                          () => (scope.operators$.add(scope.n, scope.start)),
                        )), () =>
                      scope.if$(
                        scope.operators$.greaterThanOrEqual(
                          scope.start,
                          scope.len,
                        ),
                      ).then$(0n).elseIf$(() =>
                        scope.operators$.greaterThan(
                          scope.operators$.add(scope.start, scope.count),
                          scope.len,
                        )
                      ).then$(() =>
                        scope.operators$.subtract(scope.len, scope.start)
                      ).else$(() =>
                        scope.count
                      ))
                  )))),
          commonPrefix: (scope) =>
            scope.func$("list1", (scope) =>
              scope.func$("list2", (scope) =>
                scope.let$({
                  matchings: (scope) =>
                    scope.apply$(
                      scope.zipListsWith,
                      () =>
                        scope.func$(
                          "fst",
                          (scope) =>
                            scope.func$("snd", (scope) =>
                              scope.operators$.notEqual(scope.fst, scope.snd)),
                        ),
                      () => scope.list1,
                      () => scope.list2,
                    ),
                  commonPrefixLength: (scope) =>
                    scope.apply$(
                      scope.findFirstIndex,
                      () => scope.id,
                      () => scope.apply$(scope.length, () => scope.matchings),
                      () => scope.matchings,
                    ),
                }).in$((scope) =>
                  scope.apply$(
                    scope.take,
                    () => scope.commonPrefixLength,
                    () => scope.list1,
                  )
                ))),
          last: (scope) =>
            scope.func$("list", (scope) =>
              ((_cond) => {
                if (!_cond) {
                  throw new Error(
                    "assertion failed: " +
                      'list != [ ] || throw "lists.last: list must not be empty!"',
                  );
                }
                return scope.apply$(
                  scope.elemAt,
                  () => scope.list,
                  () => (scope.operators$.subtract(
                    scope.apply$(scope.length, () => scope.list),
                    1n,
                  )),
                );
              })(
                (scope.operators$.notEqual(scope.list, [])) ||
                (scope.apply$(
                  scope.throw,
                  "lists.last: list must not be empty!",
                )),
              )),
          init: (scope) =>
            scope.func$("list", (scope) =>
              ((_cond) => {
                if (!_cond) {
                  throw new Error(
                    "assertion failed: " +
                      'list != [ ] || throw "lists.init: list must not be empty!"',
                  );
                }
                return scope.apply$(
                  scope.genList,
                  () => scope.apply$(scope.elemAt, () => scope.list),
                  () => (scope.operators$.subtract(
                    scope.apply$(scope.length, () => scope.list),
                    1n,
                  )),
                );
              })(
                (scope.operators$.notEqual(scope.list, [])) ||
                (scope.apply$(
                  scope.throw,
                  "lists.init: list must not be empty!",
                )),
              )),
          crossLists: (scope) =>
            scope.func$("f", (scope) =>
              scope.apply$(scope.foldl, () =>
                scope.func$(
                  "fs",
                  (scope) =>
                    scope.func$("args", (scope) =>
                      scope.apply$(scope.concatMap, () =>
                        scope.func$("f", (scope) =>
                          scope.apply$(scope.map, () =>
                            scope.f, () =>
                            scope.args)), () =>
                        scope.fs)),
                ), () => [scope.f])),
          unique: (scope) =>
            scope.apply$(
              scope["foldl'"],
              () =>
                scope.func$("acc", (scope) =>
                  scope.func$("e", (scope) =>
                    scope.if$(scope.apply$(scope.elem, () =>
                      scope.e, () =>
                      scope.acc)).then$(() =>
                        scope.acc
                      ).else$(() =>
                        scope.operators$.listConcat(scope.acc, [scope.e])
                      ))),
              [],
            ),
          uniqueStrings: (scope) =>
            scope.func$(
              "list",
              (scope) =>
                scope.apply$(scope.attrNames, () =>
                  scope.apply$(scope.groupBy, () =>
                    scope.id, () =>
                    scope.list)),
            ),
          allUnique: (scope) =>
            scope.func$(
              "list",
              (
                scope,
              ) => (scope.operators$.equal(
                scope.apply$(scope.length, () =>
                  scope.apply$(scope.unique, () => scope.list)),
                scope.apply$(scope.length, () => scope.list),
              )),
            ),
          intersectLists: (scope) =>
            scope.func$(
              "e",
              (scope) =>
                scope.apply$(scope.filter, () =>
                  scope.func$("x", (scope) =>
                    scope.apply$(scope.elem, () =>
                      scope.x, () =>
                      scope.e))),
            ),
          subtractLists: (scope) =>
            scope.func$(
              "e",
              (scope) =>
                scope.apply$(scope.filter, () =>
                  scope.func$("x", (scope) =>
                    scope.operators$.negate(scope.apply$(scope.elem, () =>
                      scope.x, () =>
                      scope.e)))),
            ),
          mutuallyExclusive: (scope) =>
            scope.func$(
              "a",
              (scope) =>
                scope.func$(
                  "b",
                  (
                    scope,
                  ) => ((scope.operators$.equal(
                    scope.apply$(scope.length, () => scope.a),
                    0n,
                  )) || (scope.operators$.negate(scope.apply$(
                    scope.any,
                    () =>
                      scope.func$(
                        "x",
                        (scope) =>
                          scope.apply$(
                            scope.elem,
                            () => scope.x,
                            () => scope.a,
                          ),
                      ),
                    () => scope.b,
                  )))),
                ),
            ),
          concatAttrValues: (scope) =>
            scope.func$(
              "set",
              (scope) =>
                scope.apply$(scope.concatLists, () =>
                  scope.apply$(scope.attrValues, () => scope.set)),
            ),
          replaceElemAt: (scope) =>
            scope.func$(
              "list",
              (scope) =>
                scope.func$("idx", (scope) =>
                  scope.func$("newElem", (scope) =>
                    ((_cond) => {
                      if (!_cond) {
                        throw new Error(
                          "assertion failed: " +
                            "idx >= 0 && idx < length list\n      || throw \"'lists.replaceElemAt' called with index ${toString idx} on a list of size ${toString (length list)}\"",
                        );
                      }
                      return scope.apply$(scope.genList, () =>
                        scope.func$("i", (scope) =>
                          scope.if$(scope.operators$.equal(scope.i, scope.idx))
                            .then$(() =>
                              scope.newElem
                            ).else$(() =>
                              scope.apply$(scope.elemAt, () => scope.list, () =>
                                scope.i)
                            )), () =>
                        scope.apply$(scope.length, () =>
                          scope.list));
                    })(
                      ((scope.operators$.greaterThanOrEqual(scope.idx, 0n)) &&
                        (scope.operators$.lessThan(
                          scope.idx,
                          scope.apply$(scope.length, () => scope.list),
                        ))) || (scope.apply$(scope.throw, () =>
                          scope.str$(
                            () => [
                              "'lists.replaceElemAt' called with index ",
                              scope.apply$(scope.toString, () => scope.idx),
                              " on a list of size ",
                              scope.apply$(scope.toString, () =>
                                scope.apply$(scope.length, () => scope.list)),
                            ]
                          ))),
                    ))),
            ),
        })
      ))
  ),
);
