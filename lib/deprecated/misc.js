import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./misc.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        and: (scope) => scope.lib["and"],
        any: (scope) => scope.lib["any"],
        attrByPath: (scope) => scope.lib["attrByPath"],
        attrNames: (scope) => scope.lib["attrNames"],
        concat: (scope) => scope.lib["concat"],
        elem: (scope) => scope.lib["elem"],
        filter: (scope) => scope.lib["filter"],
        foldl: (scope) => scope.lib["foldl"],
        foldr: (scope) => scope.lib["foldr"],
        head: (scope) => scope.lib["head"],
        imap1: (scope) => scope.lib["imap1"],
        isAttrs: (scope) => scope.lib["isAttrs"],
        isFunction: (scope) => scope.lib["isFunction"],
        isInt: (scope) => scope.lib["isInt"],
        isList: (scope) => scope.lib["isList"],
        listToAttrs: (scope) => scope.lib["listToAttrs"],
        mapAttrs: (scope) => scope.lib["mapAttrs"],
        mergeAttrs: (scope) => scope.lib["mergeAttrs"],
        nameValuePair: (scope) => scope.lib["nameValuePair"],
        tail: (scope) => scope.lib["tail"],
        toList: (scope) => scope.lib["toList"],
        maybeEnv: (scope) =>
          scope.func$("name", (scope) =>
            scope.func$("default", (scope) =>
              scope.let$({
                value: (scope) =>
                  scope.apply$(scope.builtins["getEnv"], () => scope.name),
              }).in$((scope) =>
                scope.if$(scope.operators$.equal(scope.value, "")).then$(() =>
                  scope.default
                ).else$(() => scope.value)
              ))),
        defaultMergeArg: (scope) =>
          scope.func$("x", (scope) =>
            scope.func$("y", (scope) =>
              scope.if$(scope.apply$(scope.builtins["isAttrs"], () =>
                scope.y)).then$(() =>
                  scope.y
                ).else$(() =>
                  scope.apply$(scope.y, () =>
                    scope.x)
                ))),
        defaultMerge: (scope) =>
          scope.func$("x", (scope) =>
            scope.func$("y", (scope) =>
              scope.operators$.merge(
                scope.x,
                scope.apply$(scope.defaultMergeArg, () => scope.x, () =>
                  scope.y),
              ))),
        foldArgs: (scope) =>
          scope.func$("merger", (scope) =>
            scope.func$("f", (scope) =>
              scope.func$("init", (scope) =>
                scope.func$("x", (scope) =>
                  scope.let$({
                    arg: (scope) =>
                      scope.apply$(scope.merger, () =>
                        scope.init, () =>
                        scope.apply$(scope.defaultMergeArg, () =>
                          scope.init, () =>
                          scope.x)),
                    base: (scope) =>
                      scope.apply$(scope.setAttrMerge, "passthru", {}, () =>
                        scope.apply$(scope.f, () =>
                          scope.arg), () =>
                        scope.func$("z", (scope) =>
                          scope.operators$.merge(
                            scope.z,
                            scope.attrSet$({
                              function: () =>
                                scope.apply$(
                                  scope.foldArgs,
                                  () => scope.merger,
                                  () => scope.f,
                                  () => scope.arg,
                                ),
                              args: () =>
                                scope.operators$.merge(
                                  scope.apply$(
                                    scope.attrByPath,
                                    ["passthru", "args"],
                                    {},
                                    () => scope.z,
                                  ),
                                  scope.x,
                                ),
                            }),
                          ))),
                    withStdOverrides: (scope) =>
                      scope.operators$.merge(
                        scope.base,
                        scope.attrSet$({
                          override: () => scope.base["passthru"]["function"],
                        }),
                      ),
                  }).in$((scope) =>
                    scope.withStdOverrides
                  ))))),
        maybeAttrNullable: (scope) =>
          scope.maybeAttr,
        maybeAttr: (scope) =>
          scope.func$("name", (scope) =>
            scope.func$("default", (scope) =>
              scope.func$("attrs", (scope) =>
                scope.operators$.selectOrDefault(
                  scope.attrs,
                  [scope.name],
                  () => scope.default,
                )))),
        ifEnable: (scope) =>
          scope.func$("cond", (scope) =>
            scope.func$("val", (scope) =>
              scope.if$(scope.cond).then$(() =>
                scope.val
              ).elseIf$(() =>
                scope.apply$(scope.builtins["isList"], () =>
                  scope.val)
              ).then$([]).elseIf$(() =>
                scope.apply$(scope.builtins["isAttrs"], () =>
                  scope.val)
              ).then$({}).elseIf$(
                () => ((scope.operators$.equal(scope.val, true)) ||
                  (scope.operators$.equal(scope.val, false)))
              ).then$(false).else$(null))),
        checkFlag: (scope) =>
          scope.func$("attrSet", (scope) =>
            scope.func$("name", (scope) =>
              scope.if$(scope.operators$.equal(scope.name, "true")).then$(true)
                .elseIf$(() =>
                  scope.operators$.equal(scope.name, "false")
                ).then$(false).elseIf$(() =>
                  scope.apply$(scope.elem, () =>
                    scope.name, () =>
                    scope.apply$(scope.attrByPath, ["flags"], [], () =>
                      scope.attrSet))
                ).then$(true).else$(() =>
                  scope.apply$(
                    scope.attrByPath,
                    () => [scope.name],
                    false,
                    () => scope.attrSet,
                  )
                ))),
        getValue: (scope) =>
          scope.func$("attrSet", (scope) =>
            scope.func$("argList", (scope) =>
              scope.func$("name", (scope) =>
                scope.apply$(scope.attrByPath, () => [scope.name], () =>
                  scope.if$(scope.apply$(scope.checkFlag, () =>
                    scope.attrSet, () =>
                    scope.name)).then$(true).elseIf$(() =>
                      scope.operators$.equal(scope.argList, [])
                    ).then$(null).else$(() =>
                      scope.let$({
                        x: (scope) =>
                          scope.apply$(scope.builtins["head"], () =>
                            scope.argList),
                      }).in$((scope) =>
                        scope.if$(
                          scope.operators$.equal(
                            scope.apply$(scope.head, () => scope.x),
                            scope.name,
                          ),
                        ).then$(() =>
                          scope.apply$(scope.head, () =>
                            scope.apply$(scope.tail, () =>
                              scope.x))
                        ).else$(() =>
                          scope.apply$(scope.getValue, () =>
                            scope.attrSet, () =>
                            scope.apply$(scope.tail, () =>
                              scope.argList), () =>
                            scope.name)
                        )
                      )
                    ), () =>
                  scope.attrSet)))),
        checkReqs: (scope) =>
          scope.func$("attrSet", (scope) =>
            scope.func$("argList", (scope) =>
              scope.func$("condList", (scope) =>
                scope.apply$(
                  scope.foldr,
                  () => scope.and,
                  true,
                  () =>
                    scope.apply$(scope.map, () =>
                      scope.func$("x", (scope) =>
                        scope.let$({
                          name: (scope) =>
                            scope.apply$(scope.head, () => scope.x),
                        }).in$((
                          scope,
                        ) => (!(scope.apply$(
                          scope.checkFlag,
                          () => scope.attrSet,
                          () => scope.name,
                        )) || (scope.apply$(
                          scope.foldr,
                          () => scope.and,
                          true,
                          () =>
                            scope.apply$(
                              scope.map,
                              () =>
                                scope.func$("y", (scope) =>
                                  scope.let$({
                                    val: (scope) =>
                                      scope.apply$(
                                        scope.getValue,
                                        () => scope.attrSet,
                                        () => scope.argList,
                                        () => scope.y,
                                      ),
                                  }).in$((
                                    scope,
                                  ) => ((scope.operators$.notEqual(
                                    scope.val,
                                    null,
                                  )) &&
                                    (scope.operators$.notEqual(
                                      scope.val,
                                      false,
                                    )))
                                  )),
                              () => scope.apply$(scope.tail, () => scope.x),
                            ),
                        ))))), () => scope.condList),
                )))),
        uniqList: (scope) =>
          scope.func$(
            { inputList: scope.nixArg$.NoDefault, acc: [] },
            (scope) =>
              scope.let$({
                go: (scope) =>
                  scope.func$("xs", (scope) =>
                    scope.func$("acc", (scope) =>
                      scope.if$(scope.operators$.equal(scope.xs, [])).then$([])
                        .else$(() =>
                          scope.let$({
                            x: (scope) =>
                              scope.apply$(scope.head, () => scope.xs),
                            y: (scope) =>
                              scope.if$(scope.apply$(scope.elem, () =>
                                scope.x, () =>
                                scope.acc)).then$([]).else$(() => [scope.x]),
                          }).in$((scope) =>
                            scope.operators$.listConcat(
                              scope.y,
                              scope.apply$(
                                scope.go,
                                () => scope.apply$(scope.tail, () => scope.xs),
                                () => (scope.operators$.listConcat(
                                  scope.y,
                                  scope.acc,
                                )),
                              ),
                            )
                          )
                        ))),
              }).in$((scope) =>
                scope.apply$(scope.go, () =>
                  scope.inputList, () =>
                  scope.acc)
              ),
          ),
        uniqListExt: (scope) =>
          scope.func$({
            inputList: scope.nixArg$.NoDefault,
            outputList: [],
            getter: (scope) =>
              scope.func$("x", (scope) =>
                scope.x),
            compare: (scope) =>
              scope.func$("x", (scope) =>
                scope.func$("y", (scope) =>
                  scope.operators$.equal(scope.x, scope.y))),
          }, (scope) =>
            scope.if$(scope.operators$.equal(scope.inputList, [])).then$(() =>
              scope.outputList
            ).else$(() =>
              scope.let$({
                x: (scope) =>
                  scope.apply$(scope.head, () =>
                    scope.inputList),
                isX: (scope) =>
                  scope.func$("y", (scope) =>
                    scope.apply$(scope.compare, () =>
                      scope.apply$(scope.getter, () =>
                        scope.y), () =>
                      scope.apply$(scope.getter, () =>
                        scope.x))),
                newOutputList: (scope) =>
                  scope.operators$.listConcat(
                    scope.outputList,
                    scope.if$(scope.apply$(scope.any, () => scope.isX, () =>
                      scope.outputList)).then$([]).else$(() => [scope.x]),
                  ),
              }).in$((scope) =>
                scope.apply$(scope.uniqListExt, () =>
                  scope.attrSet$({
                    outputList: () =>
                      scope.newOutputList,
                    inputList: () =>
                      scope.apply$(scope.tail, () =>
                        scope.inputList),
                    getter: () =>
                      scope.getter,
                    compare: () =>
                      scope.compare,
                  }))
              )
            )),
        condConcat: (scope) =>
          scope.func$("name", (scope) =>
            scope.func$("list", (scope) =>
              scope.func$("checker", (scope) =>
                scope.if$(scope.operators$.equal(scope.list, [])).then$(() =>
                  scope.name
                ).elseIf$(() =>
                  scope.apply$(scope.checker, () =>
                    scope.apply$(scope.head, () =>
                      scope.list))
                ).then$(() =>
                  scope.apply$(
                    scope.condConcat,
                    () => (scope.operators$.add(
                      scope.name,
                      scope.apply$(
                        scope.head,
                        () => scope.apply$(scope.tail, () => scope.list),
                      ),
                    )),
                    () =>
                      scope.apply$(
                        scope.tail,
                        () => scope.apply$(scope.tail, () => scope.list),
                      ),
                    () => scope.checker,
                  )
                ).else$(() =>
                  scope.apply$(scope.condConcat, () =>
                    scope.name, () =>
                    scope.apply$(scope.tail, () =>
                      scope.apply$(scope.tail, () =>
                        scope.list)), () =>
                    scope.checker)
                )))),
        lazyGenericClosure: (scope) =>
          scope.func$({
            startSet: scope.nixArg$.NoDefault,
            operator: scope.nixArg$.NoDefault,
          }, (scope) =>
            scope.let$({
              work: (scope) =>
                scope.func$("list", (scope) =>
                  scope.func$("doneKeys", (scope) =>
                    scope.func$("result", (scope) =>
                      scope.if$(scope.operators$.equal(scope.list, [])).then$(
                        () =>
                          scope.result
                      ).else$(() =>
                        scope.let$({
                          x: (scope) =>
                            scope.apply$(scope.head, () =>
                              scope.list),
                          key: (scope) =>
                            scope.x["key"],
                        }).in$((scope) =>
                          scope.if$(scope.apply$(scope.elem, () =>
                            scope.key, () =>
                            scope.doneKeys)).then$(() =>
                              scope.apply$(scope.work, () =>
                                scope.apply$(scope.tail, () =>
                                  scope.list), () =>
                                scope.doneKeys, () =>
                                scope.result)
                            ).else$(() =>
                              scope.apply$(
                                scope.work,
                                () => (scope.operators$.listConcat(
                                  scope.apply$(scope.tail, () => scope.list),
                                  scope.apply$(scope.operator, () =>
                                    scope.x),
                                )),
                                () => (scope.operators$.listConcat(
                                  [scope.key],
                                  scope.doneKeys,
                                )),
                                () => (scope.operators$.listConcat(
                                  [scope.x],
                                  scope.result,
                                )),
                              )
                            )
                        )
                      )))),
            }).in$((scope) =>
              scope.apply$(
                scope.work,
                () => scope.startSet,
                [],
                [],
              )
            )),
        innerModifySumArgs: (scope) =>
          scope.func$("f", (scope) =>
            scope.func$("x", (scope) =>
              scope.func$("a", (scope) =>
                scope.func$("b", (scope) =>
                  scope.if$(scope.operators$.equal(scope.b, null)).then$(() =>
                    scope.operators$.merge(
                      scope.apply$(scope.f, () => scope.a, () =>
                        scope.b),
                      scope.x,
                    )
                  ).else$(() =>
                    scope.apply$(scope.innerModifySumArgs, () =>
                      scope.f, () =>
                      scope.x, () => (scope.operators$.merge(scope.a, scope.b)))
                  ))))),
        modifySumArgs: (scope) =>
          scope.func$("f", (scope) =>
            scope.func$("x", (scope) =>
              scope.apply$(scope.innerModifySumArgs, () =>
                scope.f, () =>
                scope.x, {}))),
        innerClosePropagation: (scope) =>
          scope.func$("acc", (scope) =>
            scope.func$("xs", (scope) =>
              scope.if$(scope.operators$.equal(scope.xs, [])).then$(() =>
                scope.acc
              ).else$(() =>
                scope.let$({
                  y: (scope) =>
                    scope.apply$(scope.head, () =>
                      scope.xs),
                  ys: (scope) =>
                    scope.apply$(scope.tail, () =>
                      scope.xs),
                }).in$((scope) =>
                  scope.if$(
                    scope.operators$.negate(scope.apply$(scope.isAttrs, () =>
                      scope.y)),
                  ).then$(() =>
                    scope.apply$(scope.innerClosePropagation, () =>
                      scope.acc, () =>
                      scope.ys)
                  ).else$(() =>
                    scope.let$({
                      "acc'": (scope) =>
                        scope.operators$.listConcat([scope.y], scope.acc),
                    }).in$((scope) =>
                      scope.apply$(scope.innerClosePropagation, () =>
                        scope["acc'"], () =>
                        scope.apply$(scope.uniqList, () =>
                          scope.attrSet$({
                            inputList: () =>
                              scope.operators$.listConcat(
                                scope.apply$(
                                  scope.maybeAttrNullable,
                                  "propagatedBuildInputs",
                                  [],
                                  () => scope.y,
                                ),
                                scope.operators$.listConcat(
                                  scope.apply$(
                                    scope.maybeAttrNullable,
                                    "propagatedNativeBuildInputs",
                                    [],
                                    () => scope.y,
                                  ),
                                  scope.ys,
                                ),
                              ),
                            acc: () =>
                              scope["acc'"],
                          })))
                    )
                  )
                )
              ))),
        closePropagationSlow: (scope) =>
          scope.func$("list", (scope) =>
            scope.apply$(scope.uniqList, () =>
              scope.attrSet$({
                inputList: () =>
                  scope.apply$(scope.innerClosePropagation, [], () =>
                    scope.list),
              }))),
        closePropagationFast: (scope) =>
          scope.func$("list", (scope) =>
            scope.apply$(scope.map, () =>
              scope.func$("x", (scope) =>
                scope.x["val"]), () =>
              scope.apply$(scope.builtins["genericClosure"], () =>
                scope.attrSet$({
                  startSet: () =>
                    scope.apply$(scope.map, () =>
                      scope.func$("x", (scope) =>
                        scope.attrSet$({
                          key: () =>
                            scope.x["outPath"],
                          val: () =>
                            scope.x,
                        })), () =>
                      scope.apply$(scope.builtins["filter"], () =>
                        scope.func$("x", (scope) =>
                          scope.operators$.notEqual(scope.x, null)), () =>
                        scope.list)),
                  operator: () =>
                    scope.func$("item", (scope) =>
                      scope.if$(
                        scope.operators$.negate(
                          scope.apply$(scope.builtins["isAttrs"], () =>
                            scope.item["val"]),
                        ),
                      ).then$([]).else$(() =>
                        scope.apply$(
                          scope.builtins["concatMap"],
                          () =>
                            scope.func$("x", (scope) =>
                              scope.if$(
                                scope.operators$.notEqual(scope.x, null),
                              ).then$(() => [scope.attrSet$({
                                key: () => scope.x["outPath"],
                                val: () => scope.x,
                              })]).else$([])),
                          () => (scope.operators$.listConcat(
                            scope.operators$.selectOrDefault(scope.item, [
                              "val",
                              "propagatedBuildInputs",
                            ], []),
                            scope.operators$.selectOrDefault(scope.item, [
                              "val",
                              "propagatedNativeBuildInputs",
                            ], []),
                          )),
                        )
                      )),
                })))),
        closePropagation: (scope) =>
          scope.if$(scope.operators$.hasAttr(scope.builtins, "genericClosure"))
            .then$(() =>
              scope.closePropagationFast
            ).else$(() =>
              scope.closePropagationSlow
            ),
        nvs: (scope) =>
          scope.func$("name", (scope) =>
            scope.func$("value", (scope) =>
              scope.apply$(
                scope.listToAttrs,
                () => [scope.apply$(scope.nameValuePair, () => scope.name, () =>
                  scope.value)],
              ))),
        setAttr: (scope) =>
          scope.func$("set", (scope) =>
            scope.func$("name", (scope) =>
              scope.func$("v", (scope) =>
                scope.operators$.merge(
                  scope.set,
                  scope.apply$(scope.nvs, () => scope.name, () => scope.v),
                )))),
        setAttrMerge: (scope) =>
          scope.func$("name", (scope) =>
            scope.func$("default", (scope) =>
              scope.func$("attrs", (scope) =>
                scope.func$("f", (scope) =>
                  scope.apply$(scope.setAttr, () =>
                    scope.attrs, () =>
                    scope.name, () =>
                    scope.apply$(scope.f, () =>
                      scope.apply$(scope.maybeAttr, () =>
                        scope.name, () =>
                        scope.default, () =>
                        scope.attrs))))))),
        mergeAttrsWithFunc: (scope) =>
          scope.func$("f", (scope) =>
            scope.func$("set1", (scope) =>
              scope.func$("set2", (scope) =>
                scope.apply$(
                  scope.foldr,
                  () =>
                    scope.func$("n", (scope) =>
                      scope.func$("set", (scope) =>
                        scope.if$(scope.operators$.hasAttr(scope.set, scope.n))
                          .then$(() =>
                            scope.apply$(
                              scope.setAttr,
                              () => scope.set,
                              () => scope.n,
                              () =>
                                scope.apply$(
                                  scope.f,
                                  () => scope.set[scope.n],
                                  () => scope.set2[scope.n],
                                ),
                            )
                          ).else$(() => scope.set))),
                  () => (scope.operators$.merge(scope.set2, scope.set1)),
                  () => scope.apply$(scope.attrNames, () => scope.set2),
                )))),
        mergeAttrsConcatenateValues: (scope) =>
          scope.apply$(scope.mergeAttrsWithFunc, () =>
            scope.func$("a", (scope) =>
              scope.func$("b", (scope) =>
                scope.operators$.listConcat(
                  scope.apply$(scope.toList, () => scope.a),
                  scope.apply$(scope.toList, () => scope.b),
                )))),
        mergeAttrsNoOverride: (scope) =>
          scope.func$({
            mergeLists: ["buildInputs", "propagatedBuildInputs"],
            overrideSnd: ["buildPhase"],
          }, (scope) =>
            scope.func$("attrs1", (scope) =>
              scope.func$("attrs2", (scope) =>
                scope.apply$(scope.foldr, () =>
                  scope.func$("n", (scope) =>
                    scope.func$("set", (scope) =>
                      scope.apply$(scope.setAttr, () =>
                        scope.set, () =>
                        scope.n, () =>
                        scope.if$(scope.operators$.hasAttr(scope.set, scope.n))
                          .then$(() =>
                            scope.if$(scope.apply$(scope.elem, () =>
                              scope.n, () =>
                              scope.mergeLists)).then$(() =>
                                scope.operators$.listConcat(
                                  scope.attrs2[scope.n],
                                  scope.attrs1[scope.n],
                                )
                              ).elseIf$(() =>
                                scope.apply$(scope.elem, () =>
                                  scope.n, () =>
                                  scope.overrideSnd)
                              ).then$(() =>
                                scope.attrs1[scope.n]
                              ).else$(() =>
                                scope.apply$(scope.throw, () =>
                                  scope.str$(
                                    () => [
                                      "error mergeAttrsNoOverride, attribute ",
                                      scope.n,
                                      " given in both attributes - no merge func defined",
                                    ]
                                  ))
                              )
                          ).else$(() =>
                            scope.attrs2[scope.n]
                          )))), () =>
                  scope.attrs1, () =>
                  scope.apply$(scope.attrNames, () =>
                    scope.attrs2))))),
        mergeAttrByFunc: (scope) =>
          scope.func$("x", (scope) =>
            scope.func$("y", (scope) =>
              scope.let$({
                mergeAttrBy2: (scope) =>
                  scope.operators$.merge(
                    scope.attrSet$({
                      mergeAttrBy: () => scope.mergeAttrs,
                    }),
                    scope.operators$.merge(
                      scope.apply$(scope.maybeAttr, "mergeAttrBy", {}, () =>
                        scope.x),
                      scope.apply$(scope.maybeAttr, "mergeAttrBy", {}, () =>
                        scope.y),
                    ),
                  ),
              }).in$((scope) =>
                scope.apply$(
                  scope.foldr,
                  () => scope.mergeAttrs,
                  {},
                  () => [
                    scope.x,
                    scope.y,
                    scope.apply$(scope.mapAttrs, () =>
                      scope.func$("a", (scope) =>
                        scope.func$("v", (scope) =>
                          scope.if$(scope.operators$.hasAttr(scope.x, scope.a))
                            .then$(() =>
                              scope.if$(
                                scope.operators$.hasAttr(scope.y, scope.a),
                              ).then$(() =>
                                scope.apply$(
                                  scope.v,
                                  () => scope.x[scope.a],
                                  () => scope.y[scope.a],
                                )
                              ).else$(() => scope.x[scope.a])
                            ).else$(() => scope.y[scope.a]))), () =>
                      scope.apply$(
                        scope.removeAttrs,
                        () => scope.mergeAttrBy2,
                        () =>
                          scope.apply$(scope.filter, () =>
                            scope.func$(
                              "a",
                              (
                                scope,
                              ) => ((scope.operators$.negate(
                                scope.operators$.hasAttr(scope.x, scope.a),
                              )) &&
                                (scope.operators$.negate(
                                  scope.operators$.hasAttr(scope.y, scope.a),
                                ))),
                            ), () =>
                            scope.apply$(
                              scope.attrNames,
                              () => scope.mergeAttrBy2,
                            )),
                      )),
                  ],
                )
              ))),
        mergeAttrsByFuncDefaults: (scope) =>
          scope.apply$(scope.foldl, () =>
            scope.mergeAttrByFunc, () =>
            scope.attrSet$({
              mergeAttrBy: () =>
                scope.mergeAttrBy,
            })),
        mergeAttrsByFuncDefaultsClean: (scope) =>
          scope.func$("list", (scope) =>
            scope.apply$(scope.removeAttrs, () =>
              scope.apply$(scope.mergeAttrsByFuncDefaults, () =>
                scope.list), ["mergeAttrBy"])),
        mergeAttrBy: (scope) =>
          scope.operators$.merge(
            scope.apply$(scope.listToAttrs, () =>
              scope.apply$(scope.map, () =>
                scope.func$("n", (scope) =>
                  scope.apply$(scope.nameValuePair, () => scope.n, () =>
                    scope.concat)), [
                "nativeBuildInputs",
                "buildInputs",
                "propagatedBuildInputs",
                "configureFlags",
                "prePhases",
                "postAll",
                "patches",
              ])),
            scope.operators$.merge(
              scope.apply$(scope.listToAttrs, () =>
                scope.apply$(scope.map, () =>
                  scope.func$("n", (scope) =>
                    scope.apply$(
                      scope.nameValuePair,
                      () => scope.n,
                      () => scope.mergeAttrs,
                    )), ["passthru", "meta", "cfg", "flags"])),
              scope.apply$(scope.listToAttrs, () =>
                scope.apply$(scope.map, () =>
                  scope.func$("n", (scope) =>
                    scope.apply$(
                      scope.nameValuePair,
                      () => scope.n,
                      () =>
                        scope.func$("a", (scope) =>
                          scope.func$("b", (scope) =>
                            scope.str$(() => [scope.a, "\n", scope.b]))),
                    )), ["preConfigure", "postInstall"])),
            ),
          ),
        nixType: (scope) =>
          scope.func$("x", (scope) =>
            scope.if$(scope.apply$(scope.isAttrs, () =>
              scope.x)).then$(() =>
                scope.if$(scope.operators$.hasAttr(scope.x, "outPath")).then$(
                  "derivation",
                ).else$("attrs")
              ).elseIf$(() =>
                scope.apply$(scope.isFunction, () =>
                  scope.x)
              ).then$("function").elseIf$(() =>
                scope.apply$(scope.isList, () =>
                  scope.x)
              ).then$("list").elseIf$(() =>
                scope.operators$.equal(scope.x, true)
              ).then$("bool").elseIf$(() =>
                scope.operators$.equal(scope.x, false)
              ).then$("bool").elseIf$(() =>
                scope.operators$.equal(scope.x, null)
              ).then$("null").elseIf$(() =>
                scope.apply$(scope.isInt, () =>
                  scope.x)
              ).then$("int").else$("string")),
        imap: (scope) =>
          scope.imap1,
        fakeHash: "sha256-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
        fakeSha256:
          "0000000000000000000000000000000000000000000000000000000000000000",
        fakeSha512:
          "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      }).in$((scope) =>
        scope.attrSet$({
          checkFlag: () =>
            scope.checkFlag,
          checkReqs: () =>
            scope.checkReqs,
          closePropagation: () =>
            scope.closePropagation,
          closePropagationFast: () =>
            scope.closePropagationFast,
          closePropagationSlow: () =>
            scope.closePropagationSlow,
          condConcat: () =>
            scope.condConcat,
          defaultMerge: () =>
            scope.defaultMerge,
          defaultMergeArg: () =>
            scope.defaultMergeArg,
          fakeHash: () =>
            scope.fakeHash,
          fakeSha256: () =>
            scope.fakeSha256,
          fakeSha512: () =>
            scope.fakeSha512,
          foldArgs: () =>
            scope.foldArgs,
          getValue: () =>
            scope.getValue,
          ifEnable: () =>
            scope.ifEnable,
          imap: () =>
            scope.imap,
          innerClosePropagation: () =>
            scope.innerClosePropagation,
          innerModifySumArgs: () =>
            scope.innerModifySumArgs,
          lazyGenericClosure: () =>
            scope.lazyGenericClosure,
          maybeAttr: () =>
            scope.maybeAttr,
          maybeAttrNullable: () =>
            scope.maybeAttrNullable,
          maybeEnv: () =>
            scope.maybeEnv,
          mergeAttrBy: () =>
            scope.mergeAttrBy,
          mergeAttrByFunc: () =>
            scope.mergeAttrByFunc,
          mergeAttrsByFuncDefaults: () =>
            scope.mergeAttrsByFuncDefaults,
          mergeAttrsByFuncDefaultsClean: () =>
            scope.mergeAttrsByFuncDefaultsClean,
          mergeAttrsConcatenateValues: () =>
            scope.mergeAttrsConcatenateValues,
          mergeAttrsNoOverride: () =>
            scope.mergeAttrsNoOverride,
          mergeAttrsWithFunc: () =>
            scope.mergeAttrsWithFunc,
          modifySumArgs: () =>
            scope.modifySumArgs,
          nixType: () =>
            scope.nixType,
          nvs: () =>
            scope.nvs,
          setAttr: () =>
            scope.setAttr,
          setAttrMerge: () =>
            scope.setAttrMerge,
          uniqList: () =>
            scope.uniqList,
          uniqListExt: () =>
            scope.uniqListExt,
        })
      ))
  ),
);
