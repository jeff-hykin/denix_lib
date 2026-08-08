import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./attrsets.nix", import.meta.url).pathname,
  ({ scope }) => (
    /**
  Operations on attribute sets.
    */ scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        head: (scope) => scope.builtins["head"],
        length: (scope) => scope.builtins["length"],
        concatStringsSep: (scope) => scope.lib["strings"]["concatStringsSep"],
        concatMapStringsSep: (scope) =>
          scope.lib["strings"]["concatMapStringsSep"],
        escapeNixIdentifier: (scope) =>
          scope.lib["strings"]["escapeNixIdentifier"],
        sanitizeDerivationName: (scope) =>
          scope.lib["strings"]["sanitizeDerivationName"],
        all: (scope) => scope.lib["lists"]["all"],
        concatLists: (scope) => scope.lib["lists"]["concatLists"],
        concatMap: (scope) => scope.lib["lists"]["concatMap"],
        elemAt: (scope) => scope.lib["lists"]["elemAt"],
        filter: (scope) => scope.lib["lists"]["filter"],
        foldl: (scope) => scope.lib["lists"]["foldl"],
        "foldl'": (scope) => scope.lib["lists"]["foldl'"],
        foldr: (scope) => scope.lib["lists"]["foldr"],
        groupBy: (scope) => scope.lib["lists"]["groupBy"],
        partition: (scope) => scope.lib["lists"]["partition"],
        reverseList: (scope) => scope.lib["lists"]["reverseList"],
        take: (scope) => scope.lib["lists"]["take"],
      }).in$((scope) =>
        scope.recAttrSet$({
          attrNames: (scope) => scope.builtins["attrNames"],
          listToAttrs: (scope) => scope.builtins["listToAttrs"],
          hasAttr: (scope) => scope.builtins["hasAttr"],
          isAttrs: (scope) => scope.builtins["isAttrs"],
          getAttr: (scope) => scope.builtins["getAttr"],
          removeAttrs: (scope) => scope.builtins["removeAttrs"],
          intersectAttrs: (scope) => scope.builtins["intersectAttrs"],
          attrByPath: (scope) =>
            scope.func$("attrPath", (scope) =>
              scope.func$("default", (scope) =>
                scope.func$("set", (scope) =>
                  scope.let$({
                    lenAttrPath: (scope) =>
                      scope.apply$(scope.length, () => scope.attrPath),
                    "attrByPath'": (scope) =>
                      scope.func$("n", (scope) =>
                        scope.func$("s", (scope) =>
                          scope.if$(
                            scope.operators$.equal(scope.n, scope.lenAttrPath),
                          ).then$(() => scope.s).else$(() =>
                            scope.let$({
                              attr: (scope) =>
                                scope.apply$(scope.elemAt, () =>
                                  scope.attrPath, () =>
                                  scope.n),
                            }).in$((scope) =>
                              scope.if$(
                                scope.operators$.hasAttr(scope.s, scope.attr),
                              ).then$(() =>
                                scope.apply$(
                                  scope["attrByPath'"],
                                  () => (scope.operators$.add(scope.n, 1n)),
                                  () => scope.s[scope.attr],
                                )
                              ).else$(() =>
                                scope.default
                              )
                            )
                          ))),
                  }).in$((scope) =>
                    scope.apply$(scope["attrByPath'"], 0n, () =>
                      scope.set)
                  )))),
          hasAttrByPath: (scope) =>
            scope.func$("attrPath", (scope) =>
              scope.func$("e", (scope) =>
                scope.let$({
                  lenAttrPath: (scope) =>
                    scope.apply$(scope.length, () =>
                      scope.attrPath),
                  "hasAttrByPath'": (scope) =>
                    scope.func$("n", (scope) =>
                      scope.func$(
                        "s",
                        (
                          scope,
                        ) => ((scope.operators$.equal(
                          scope.n,
                          scope.lenAttrPath,
                        )) || (scope.let$({
                          attr: (scope) =>
                            scope.apply$(
                              scope.elemAt,
                              () => scope.attrPath,
                              () => scope.n,
                            ),
                        }).in$((scope) =>
                          scope.if$(
                            scope.operators$.hasAttr(scope.s, scope.attr),
                          ).then$(() =>
                            scope.apply$(
                              scope["hasAttrByPath'"],
                              () => (scope.operators$.add(scope.n, 1n)),
                              () => scope.s[scope.attr],
                            )
                          ).else$(false)
                        ))),
                      )),
                }).in$((scope) =>
                  scope.apply$(scope["hasAttrByPath'"], 0n, () => scope.e)
                ))),
          longestValidPathPrefix: (scope) =>
            scope.func$("attrPath", (scope) =>
              scope.func$("v", (scope) =>
                scope.let$({
                  lenAttrPath: (scope) =>
                    scope.apply$(scope.length, () => scope.attrPath),
                  getPrefixForSetAtIndex: (scope) =>
                    scope.func$("remainingSet", (scope) =>
                      scope.func$("remainingPathIndex", (scope) =>
                        scope.if$(
                          scope.operators$.equal(
                            scope.remainingPathIndex,
                            scope.lenAttrPath,
                          ),
                        ).then$(() => scope.attrPath).else$(() =>
                          scope.let$({
                            attr: (scope) =>
                              scope.apply$(scope.elemAt, () =>
                                scope.attrPath, () =>
                                scope.remainingPathIndex),
                          }).in$((scope) =>
                            scope.if$(
                              scope.operators$.hasAttr(
                                scope.remainingSet,
                                scope.attr,
                              ),
                            ).then$(() =>
                              scope.apply$(
                                scope.getPrefixForSetAtIndex,
                                () => scope.remainingSet[scope.attr],
                                () => (scope.operators$.add(
                                  scope.remainingPathIndex,
                                  1n,
                                )),
                              )
                            ).else$(() =>
                              scope.apply$(scope.take, () =>
                                scope.remainingPathIndex, () =>
                                scope.attrPath)
                            )
                          )
                        ))),
                }).in$((scope) =>
                  scope.apply$(scope.getPrefixForSetAtIndex, () =>
                    scope.v, 0n)
                ))),
          setAttrByPath: (scope) =>
            scope.func$("attrPath", (scope) =>
              scope.func$("value", (scope) =>
                scope.let$({
                  len: (scope) =>
                    scope.apply$(scope.length, () =>
                      scope.attrPath),
                  atDepth: (scope) =>
                    scope.func$("n", (scope) =>
                      scope.if$(scope.operators$.equal(scope.n, scope.len))
                        .then$(() =>
                          scope.value
                        ).else$(() =>
                          scope.attrSet$({
                            ...scope.deepSet$([scope.apply$(scope.elemAt, () =>
                              scope.attrPath, () =>
                              scope.n)], () =>
                              scope.apply$(
                                scope.atDepth,
                                () => (scope.operators$.add(scope.n, 1n)),
                              )),
                          })
                        )),
                }).in$((scope) =>
                  scope.apply$(scope.atDepth, 0n)
                ))),
          getAttrFromPath: (scope) =>
            scope.func$("attrPath", (scope) =>
              scope.func$("set", (scope) =>
                scope.apply$(scope.attrByPath, () =>
                  scope.attrPath, () =>
                  scope.apply$(
                    scope.abort,
                    () => (scope.operators$.add(
                      scope.operators$.add(
                        "cannot find attribute '",
                        scope.apply$(
                          scope.concatStringsSep,
                          ".",
                          () => scope.attrPath,
                        ),
                      ),
                      "'",
                    )),
                  ), () =>
                  scope.set))),
          concatMapAttrs: (scope) =>
            scope.func$("f", (scope) =>
              scope.func$("v", (scope) =>
                scope.apply$(scope.listToAttrs, () =>
                  scope.apply$(scope.concatLists, () =>
                    scope.apply$(scope.reverseList, () =>
                      scope.apply$(scope.mapAttrsToList, () =>
                        scope.func$("name", (scope) =>
                          scope.func$("value", (scope) =>
                            scope.apply$(scope.attrsToList, () =>
                              scope.apply$(scope.f, () =>
                                scope.name, () =>
                                scope.value)))), () =>
                        scope.v)))))),
          updateManyAttrsByPath: (scope) =>
            scope.let$({
              go: (scope) =>
                scope.func$("prefixLength", (scope) =>
                  scope.func$("hasValue", (scope) =>
                    scope.func$("value", (scope) =>
                      scope.func$("updates", (scope) =>
                        scope.let$({
                          split: (scope) =>
                            scope.apply$(scope.partition, () =>
                              scope.func$("el", (scope) =>
                                scope.operators$.equal(
                                  scope.apply$(scope.length, () =>
                                    scope.el["path"]),
                                  scope.prefixLength,
                                )), () =>
                              scope.updates),
                          nested: (scope) =>
                            scope.apply$(scope.groupBy, () =>
                              scope.func$("el", (scope) =>
                                scope.apply$(scope.elemAt, () =>
                                  scope.el["path"], () =>
                                  scope.prefixLength)), () =>
                              scope.split["wrong"]),
                          withNestedMods: (scope) =>
                            scope.if$(
                              scope.operators$.equal(scope.split["wrong"], []),
                            ).then$(() =>
                              scope.if$(scope.hasValue).then$(() =>
                                scope.value
                              ).else$(() =>
                                scope.let$({
                                  updatePath: (scope) =>
                                    scope.apply$(scope.head, () =>
                                      scope.split["right"])["path"],
                                }).in$((scope) =>
                                  scope.apply$(
                                    scope.throw,
                                    () => (scope.operators$.add(
                                      scope.operators$.add(
                                        scope.str$(
                                          () => [
                                            "updateManyAttrsByPath: Path '",
                                            scope.apply$(
                                              scope.showAttrPath,
                                              () => scope.updatePath,
                                            ),
                                            "' does ",
                                          ]
                                        ),
                                        "not exist in the given value, but the first update to this ",
                                      ),
                                      "path tries to access the existing value.",
                                    )),
                                  )
                                )
                              )
                            ).elseIf$(() =>
                              scope.operators$.negate(scope.hasValue)
                            ).then$(() =>
                              scope.apply$(scope.mapAttrs, () =>
                                scope.func$("name", (scope) =>
                                  scope.apply$(
                                    scope.go,
                                    () => (scope.operators$.add(
                                      scope.prefixLength,
                                      1n,
                                    )),
                                    false,
                                    null,
                                  )), () =>
                                scope.nested)
                            ).elseIf$(() =>
                              scope.apply$(scope.isAttrs, () =>
                                scope.value)
                            ).then$(() =>
                              scope.operators$.merge(
                                scope.value,
                                scope.apply$(scope.mapAttrs, () =>
                                  scope.func$("name", (scope) =>
                                    scope.apply$(
                                      scope.go,
                                      () => (scope.operators$.add(
                                        scope.prefixLength,
                                        1n,
                                      )),
                                      () =>
                                        scope.operators$.hasAttr(
                                          scope.value,
                                          scope.name,
                                        ),
                                      () => scope.value[scope.name],
                                    )), () => scope.nested),
                              )
                            ).else$(() =>
                              scope.let$({
                                updatePath: (scope) =>
                                  scope.apply$(scope.head, () =>
                                    scope.split["wrong"])["path"],
                              }).in$((scope) =>
                                scope.apply$(
                                  scope.throw,
                                  () => (scope.operators$.add(
                                    scope.operators$.add(
                                      scope.operators$.add(
                                        scope.str$(
                                          () => [
                                            "updateManyAttrsByPath: Path '",
                                            scope.apply$(
                                              scope.showAttrPath,
                                              () => scope.updatePath,
                                            ),
                                            "' needs to ",
                                          ]
                                        ),
                                        scope.str$(
                                          () => [
                                            "be updated, but path '",
                                            scope.apply$(
                                              scope.showAttrPath,
                                              () =>
                                                scope.apply$(scope.take, () =>
                                                  scope.prefixLength, () =>
                                                  scope.updatePath),
                                            ),
                                            "' ",
                                          ]
                                        ),
                                      ),
                                      "of the given value is not an attribute set, so we can't ",
                                    ),
                                    "update an attribute inside of it.",
                                  )),
                                )
                              )
                            ),
                        }).in$((scope) =>
                          scope.apply$(
                            scope.foldl,
                            () =>
                              scope.func$("acc", (scope) =>
                                scope.func$("el", (scope) =>
                                  scope.apply$(
                                    scope.el["update"],
                                    () => scope.acc,
                                  ))),
                            () => scope.withNestedMods,
                            () => scope.split["right"],
                          )
                        ))))),
            }).in$((scope) =>
              scope.func$(
                "updates",
                (scope) =>
                  scope.func$("value", (scope) =>
                    scope.apply$(scope.go, 0n, true, () =>
                      scope.value, () =>
                      scope.updates)),
              )
            ),
          attrVals: (scope) =>
            scope.func$(
              "nameList",
              (scope) =>
                scope.func$("set", (scope) =>
                  scope.apply$(scope.map, () =>
                    scope.func$("x", (scope) =>
                      scope.set[scope.x]), () =>
                    scope.nameList)),
            ),
          attrValues: (scope) => scope.builtins["attrValues"],
          getAttrs: (scope) =>
            scope.func$(
              "names",
              (scope) =>
                scope.func$("attrs", (scope) =>
                  scope.apply$(scope.genAttrs, () =>
                    scope.names, () =>
                    scope.func$("name", (scope) =>
                      scope.attrs[scope.name]))),
            ),
          catAttrs: (scope) => scope.builtins["catAttrs"],
          filterAttrs: (scope) =>
            scope.func$(
              "pred",
              (scope) =>
                scope.func$("set", (scope) =>
                  scope.apply$(scope.removeAttrs, () =>
                    scope.set, () =>
                    scope.apply$(scope.filter, () =>
                      scope.func$("name", (scope) =>
                        scope.operators$.negate(scope.apply$(scope.pred, () =>
                          scope.name, () =>
                          scope.set[scope.name]))), () =>
                      scope.apply$(scope.attrNames, () =>
                        scope.set)))),
            ),
          filterAttrsRecursive: (scope) =>
            scope.func$("pred", (scope) =>
              scope.func$("set", (scope) =>
                scope.apply$(scope.listToAttrs, () =>
                  scope.apply$(
                    scope.concatMap,
                    () =>
                      scope.func$("name", (scope) =>
                        scope.let$({
                          v: (scope) => scope.set[scope.name],
                        }).in$((scope) =>
                          scope.if$(
                            scope.apply$(scope.pred, () =>
                              scope.name, () =>
                              scope.v),
                          ).then$(() => [scope.apply$(scope.nameValuePair, () =>
                            scope.name, () =>
                            scope.if$(scope.apply$(scope.isAttrs, () =>
                              scope.v)).then$(() =>
                                scope.apply$(scope.filterAttrsRecursive, () =>
                                  scope.pred, () =>
                                  scope.v)
                              ).else$(() =>
                                scope.v
                              ))]
                          ).else$([])
                        )),
                    () => scope.apply$(scope.attrNames, () => scope.set),
                  )))),
          foldlAttrs: (scope) =>
            scope.func$(
              "f",
              (scope) =>
                scope.func$("init", (scope) =>
                  scope.func$("set", (scope) =>
                    scope.apply$(scope["foldl'"], () =>
                      scope.func$("acc", (scope) =>
                        scope.func$("name", (scope) =>
                          scope.apply$(scope.f, () =>
                            scope.acc, () =>
                            scope.name, () =>
                            scope.set[scope.name]))), () =>
                      scope.init, () =>
                      scope.apply$(scope.attrNames, () =>
                        scope.set)))),
            ),
          foldAttrs: (scope) =>
            scope.func$("op", (scope) =>
              scope.func$("nul", (scope) =>
                scope.func$("list_of_attrs", (scope) =>
                  scope.apply$(
                    scope.foldr,
                    () =>
                      scope.func$("n", (scope) =>
                        scope.func$("a", (scope) =>
                          scope.apply$(scope.foldr, () =>
                            scope.func$("name", (scope) =>
                              scope.func$("o", (scope) =>
                                scope.operators$.merge(
                                  scope.o,
                                  scope.attrSet$({
                                    ...scope.deepSet$([scope.name], () =>
                                      scope.apply$(
                                        scope.op,
                                        () => scope.n[scope.name],
                                        () =>
                                          scope.operators$.selectOrDefault(
                                            scope.a,
                                            [scope.name],
                                            () => scope.nul,
                                          ),
                                      )),
                                  }),
                                ))), () =>
                            scope.a, () =>
                            scope.apply$(scope.attrNames, () => scope.n)))),
                    {},
                    () => scope.list_of_attrs,
                  )))),
          collect: (scope) =>
            scope.func$(
              "pred",
              (scope) =>
                scope.func$("attrs", (scope) =>
                  scope.if$(scope.apply$(scope.pred, () =>
                    scope.attrs)).then$(() => [scope.attrs]).elseIf$(() =>
                      scope.apply$(scope.isAttrs, () =>
                        scope.attrs)
                    ).then$(() =>
                      scope.apply$(scope.concatMap, () =>
                        scope.apply$(scope.collect, () => scope.pred), () =>
                        scope.apply$(scope.attrValues, () =>
                          scope.attrs))
                    ).else$([])),
            ),
          cartesianProduct: (scope) =>
            scope.func$("attrsOfLists", (scope) =>
              scope.apply$(
                scope["foldl'"],
                () =>
                  scope.func$("listOfAttrs", (scope) =>
                    scope.func$("attrName", (scope) =>
                      scope.apply$(scope.concatMap, () =>
                        scope.func$("attrs", (scope) =>
                          scope.apply$(scope.map, () =>
                            scope.func$("listValue", (scope) =>
                              scope.operators$.merge(
                                scope.attrs,
                                scope.attrSet$({
                                  ...scope.deepSet$(
                                    [scope.attrName],
                                    () => scope.listValue,
                                  ),
                                }),
                              )), () =>
                            scope.attrsOfLists[scope.attrName])), () =>
                        scope.listOfAttrs))),
                [{}],
                () => scope.apply$(scope.attrNames, () => scope.attrsOfLists),
              )),
          mapCartesianProduct: (scope) =>
            scope.func$(
              "f",
              (scope) =>
                scope.func$("attrsOfLists", (scope) =>
                  scope.apply$(scope.map, () =>
                    scope.f, () =>
                    scope.apply$(scope.cartesianProduct, () =>
                      scope.attrsOfLists))),
            ),
          nameValuePair: (scope) =>
            scope.func$(
              "name",
              (scope) =>
                scope.func$("value", (scope) =>
                  scope.attrSet$({
                    name: () => scope.name,
                    value: () => scope.value,
                  })),
            ),
          mapAttrs: (scope) => scope.builtins["mapAttrs"],
          "mapAttrs'": (scope) =>
            scope.func$(
              "f",
              (scope) =>
                scope.func$("set", (scope) =>
                  scope.apply$(scope.listToAttrs, () =>
                    scope.apply$(scope.mapAttrsToList, () =>
                      scope.f, () =>
                      scope.set))),
            ),
          mapAttrsToList: (scope) =>
            scope.func$(
              "f",
              (scope) =>
                scope.func$("attrs", (scope) =>
                  scope.apply$(scope.attrValues, () =>
                    scope.apply$(scope.mapAttrs, () =>
                      scope.f, () =>
                      scope.attrs))),
            ),
          attrsToList: (scope) =>
            scope.apply$(scope.mapAttrsToList, () => scope.nameValuePair),
          mapAttrsRecursive: (scope) =>
            scope.func$(
              "f",
              (scope) =>
                scope.func$("set", (scope) =>
                  scope.apply$(scope.mapAttrsRecursiveCond, () =>
                    scope.func$("as", (scope) =>
                      true), () =>
                    scope.f, () =>
                    scope.set)),
            ),
          mapAttrsRecursiveCond: (scope) =>
            scope.func$("cond", (scope) =>
              scope.func$("f", (scope) =>
                scope.func$("set", (scope) =>
                  scope.let$({
                    recurse: (scope) =>
                      scope.func$(
                        "path",
                        (scope) =>
                          scope.apply$(scope.mapAttrs, () =>
                            scope.func$("name", (scope) =>
                              scope.func$("value", (scope) =>
                                scope.if$(
                                  (scope.apply$(
                                    scope.isAttrs,
                                    () => scope.value,
                                  )) && (scope.apply$(scope.cond, () =>
                                    scope.value)),
                                ).then$(() =>
                                  scope.apply$(
                                    scope.recurse,
                                    () => (scope.operators$.listConcat(
                                      scope.path,
                                      [scope.name],
                                    )),
                                    () => scope.value,
                                  )
                                ).else$(() =>
                                  scope.apply$(
                                    scope.f,
                                    () => (scope.operators$.listConcat(
                                      scope.path,
                                      [scope.name],
                                    )),
                                    () => scope.value,
                                  )
                                )))),
                      ),
                  }).in$((scope) =>
                    scope.apply$(scope.recurse, [], () => scope.set)
                  )))),
          mapAttrsToListRecursive: (scope) =>
            scope.apply$(
              scope.mapAttrsToListRecursiveCond,
              () =>
                scope.func$("_", (scope) => scope.func$("_", (scope) => true)),
            ),
          mapAttrsToListRecursiveCond: (scope) =>
            scope.func$("pred", (scope) =>
              scope.func$("f", (scope) =>
                scope.func$("set", (scope) =>
                  scope.let$({
                    mapRecursive: (scope) =>
                      scope.func$("path", (scope) =>
                        scope.func$("value", (scope) =>
                          scope.if$(
                            (scope.apply$(scope.isAttrs, () => scope.value)) &&
                            (scope.apply$(scope.pred, () => scope.path, () =>
                              scope.value)),
                          ).then$(() =>
                            scope.apply$(scope.recurse, () =>
                              scope.path, () =>
                              scope.value)
                          ).else$(() => [scope.apply$(scope.f, () =>
                            scope.path, () =>
                            scope.value)]
                          ))),
                    recurse: (scope) =>
                      scope.func$("path", (scope) =>
                        scope.func$("set", (scope) =>
                          scope.apply$(scope.concatMap, () =>
                            scope.func$("name", (scope) =>
                              scope.apply$(
                                scope.mapRecursive,
                                () => (scope.operators$.listConcat(scope.path, [
                                  scope.name,
                                ])),
                                () => scope.set[scope.name],
                              )), () =>
                            scope.apply$(scope.attrNames, () =>
                              scope.set)))),
                  }).in$((scope) =>
                    scope.apply$(scope.recurse, [], () =>
                      scope.set)
                  )))),
          genAttrs: (scope) =>
            scope.func$(
              "names",
              (scope) =>
                scope.func$("f", (scope) =>
                  scope.apply$(scope["genAttrs'"], () =>
                    scope.names, () =>
                    scope.func$("n", (scope) =>
                      scope.apply$(scope.nameValuePair, () =>
                        scope.n, () =>
                        scope.apply$(scope.f, () =>
                          scope.n))))),
            ),
          "genAttrs'": (scope) =>
            scope.func$(
              "xs",
              (scope) =>
                scope.func$("f", (scope) =>
                  scope.apply$(scope.listToAttrs, () =>
                    scope.apply$(scope.map, () =>
                      scope.f, () =>
                      scope.xs))),
            ),
          isDerivation: (scope) =>
            scope.func$(
              "value",
              (scope) =>
                scope.operators$.equal(
                  scope.operators$.selectOrDefault(scope.value, ["type"], null),
                  "derivation",
                ),
            ),
          toDerivation: (scope) =>
            scope.func$("path", (scope) =>
              scope.let$({
                "path'": (scope) =>
                  scope.apply$(scope.builtins["storePath"], () => scope.path),
                res: (scope) =>
                  scope.attrSet$({
                    type: "derivation",
                    name: () =>
                      scope.apply$(scope.sanitizeDerivationName, () =>
                        scope.apply$(
                          scope.builtins["substring"],
                          33n,
                          -1n,
                          () =>
                            scope.apply$(
                              scope.baseNameOf,
                              () => scope["path'"],
                            ),
                        )),
                    outPath: () => scope["path'"],
                    outputs: ["out"],
                    out: () => scope.res,
                    outputName: "out",
                  }),
              }).in$((scope) => scope.res)),
          optionalAttrs: (scope) =>
            scope.func$(
              "cond",
              (scope) =>
                scope.func$("as", (scope) =>
                  scope.if$(scope.cond).then$(() =>
                    scope.as
                  ).else$({})),
            ),
          zipAttrsWithNames: (scope) =>
            scope.func$("names", (scope) =>
              scope.func$("f", (scope) =>
                scope.func$("sets", (scope) =>
                  scope.apply$(scope.listToAttrs, () =>
                    scope.apply$(scope.map, () =>
                      scope.func$("name", (scope) =>
                        scope.attrSet$({
                          name: () => scope.name,
                          value: () =>
                            scope.apply$(
                              scope.f,
                              () => scope.name,
                              () =>
                                scope.apply$(
                                  scope.catAttrs,
                                  () => scope.name,
                                  () => scope.sets,
                                ),
                            ),
                        })), () => scope.names))))),
          zipAttrsWith: (scope) =>
            scope.operators$.selectOrDefault(
              scope.builtins,
              ["zipAttrsWith"],
              () =>
                scope.func$("f", (scope) =>
                  scope.func$("sets", (scope) =>
                    scope.apply$(scope.zipAttrsWithNames, () =>
                      scope.apply$(scope.concatMap, () =>
                        scope.attrNames, () =>
                        scope.sets), () =>
                      scope.f, () =>
                      scope.sets))),
            ),
          zipAttrs: (scope) =>
            scope.apply$(
              scope.zipAttrsWith,
              () =>
                scope.func$("name", (scope) =>
                  scope.func$("values", (scope) => scope.values)),
            ),
          mergeAttrsList: (scope) =>
            scope.func$("list", (scope) =>
              scope.let$({
                binaryMerge: (scope) =>
                  scope.func$("start", (scope) =>
                    scope.func$("end", (scope) =>
                      scope.if$(
                        scope.operators$.equal(
                          scope.operators$.subtract(scope.end, scope.start),
                          1n,
                        ),
                      ).then$(() =>
                        scope.apply$(
                          scope.elemAt,
                          () => scope.list,
                          () => scope.start,
                        )
                      ).else$(() =>
                        scope.operators$.merge(
                          scope.apply$(
                            scope.binaryMerge,
                            () => scope.start,
                            () => (scope.operators$.divide(
                              scope.operators$.add(scope.start, scope.end),
                              2n,
                            )),
                          ),
                          scope.apply$(
                            scope.binaryMerge,
                            () => (scope.operators$.divide(
                              scope.operators$.add(scope.start, scope.end),
                              2n,
                            )),
                            () => scope.end,
                          ),
                        )
                      ))),
              }).in$((scope) =>
                scope.if$(scope.operators$.equal(scope.list, [])).then$({})
                  .else$(() =>
                    scope.apply$(
                      scope.binaryMerge,
                      0n,
                      () => scope.apply$(scope.length, () => scope.list),
                    )
                  )
              )),
          recursiveUpdateUntil: (scope) =>
            scope.func$("pred", (scope) =>
              scope.func$("lhs", (scope) =>
                scope.func$("rhs", (scope) =>
                  scope.let$({
                    f: (scope) =>
                      scope.func$("attrPath", (scope) =>
                        scope.apply$(scope.zipAttrsWith, () =>
                          scope.func$("name", (scope) =>
                            scope.func$("values", (scope) =>
                              scope.let$({
                                here: (scope) =>
                                  scope.operators$.listConcat(scope.attrPath, [
                                    scope.name,
                                  ]),
                              }).in$((scope) =>
                                scope.if$(
                                  (scope.operators$.equal(
                                    scope.apply$(scope.length, () =>
                                      scope.values),
                                    1n,
                                  )) || (scope.apply$(scope.pred, () =>
                                    scope.here, () =>
                                    scope.apply$(scope.elemAt, () =>
                                      scope.values, 1n), () =>
                                    scope.apply$(scope.head, () =>
                                      scope.values))),
                                ).then$(() =>
                                  scope.apply$(scope.head, () => scope.values)
                                ).else$(() =>
                                  scope.apply$(
                                    scope.f,
                                    () => scope.here,
                                    () => scope.values,
                                  )
                                )
                              ))))),
                  }).in$((scope) =>
                    scope.apply$(scope.f, [], () => [scope.rhs, scope.lhs])
                  )))),
          recursiveUpdate: (scope) =>
            scope.func$("lhs", (scope) =>
              scope.func$("rhs", (scope) =>
                scope.apply$(
                  scope.recursiveUpdateUntil,
                  () =>
                    scope.func$("path", (scope) =>
                      scope.func$("lhs", (scope) =>
                        scope.func$("rhs", (scope) =>
                          scope.operators$.negate(
                            (scope.apply$(scope.isAttrs, () =>
                              scope.lhs)) && (scope.apply$(scope.isAttrs, () =>
                                scope.rhs)),
                          )))),
                  () => scope.lhs,
                  () => scope.rhs,
                ))),
          matchAttrs: (scope) =>
            scope.let$({
              recurse: (scope) =>
                scope.func$("pattern", (scope) =>
                  scope.func$("attrs", (scope) =>
                    scope.apply$(
                      scope.all,
                      () =>
                        scope.func$(
                          "attr",
                          (
                            scope,
                          ) => ((scope.operators$.hasAttr(
                            scope.attrs,
                            scope.attr,
                          )) && (scope.let$({
                            lhs: (scope) => scope.pattern[scope.attr],
                            rhs: (scope) => scope.attrs[scope.attr],
                          }).in$((
                            scope,
                          ) => ((scope.operators$.equal(
                            scope.lhs,
                            scope.rhs,
                          )) || (((scope.apply$(scope.isAttrs, () =>
                            scope.lhs)) && (scope.apply$(scope.isAttrs, () =>
                              scope.rhs))) && (scope.apply$(scope.recurse, () =>
                                scope.lhs, () =>
                                scope.rhs))))
                          ))),
                        ),
                      () => scope.apply$(scope.attrNames, () => scope.pattern),
                    ))),
            }).in$((scope) =>
              scope.func$("pattern", (scope) =>
                ((_cond) => {
                  if (!_cond) {
                    throw new Error("assertion failed: " + "isAttrs pattern");
                  }
                  return scope.apply$(scope.recurse, () => scope.pattern);
                })(scope.apply$(scope.isAttrs, () => scope.pattern)))
            ),
          overrideExisting: (scope) =>
            scope.func$("old", (scope) =>
              scope.func$("new", (scope) =>
                scope.apply$(scope.mapAttrs, () =>
                  scope.func$("name", (scope) =>
                    scope.func$("value", (scope) =>
                      scope.operators$.selectOrDefault(
                        scope.new,
                        [scope.name],
                        () => scope.value,
                      ))), () =>
                  scope.old))),
          showAttrPath: (scope) =>
            scope.func$("path", (scope) =>
              scope.if$(scope.operators$.equal(scope.path, [])).then$(
                "<root attribute path>",
              ).else$(() =>
                scope.apply$(scope.concatMapStringsSep, ".", () =>
                  scope.escapeNixIdentifier, () =>
                  scope.path)
              )),
          getOutput: (scope) =>
            scope.func$("output", (scope) =>
              scope.func$("pkg", (scope) =>
                scope.if$(
                  (scope.operators$.negate(
                    scope.operators$.hasAttr(scope.pkg, "outputSpecified"),
                  )) || (scope.operators$.negate(scope.pkg["outputSpecified"])),
                ).then$(() =>
                  scope.operators$.selectOrDefault(
                    scope.pkg,
                    [scope.output],
                    () =>
                      scope.operators$.selectOrDefault(
                        scope.pkg,
                        ["out"],
                        () => scope.pkg,
                      ),
                  )
                ).else$(() =>
                  scope.pkg
                ))),
          getFirstOutput: (scope) =>
            scope.func$("candidates", (scope) =>
              scope.func$("pkg", (scope) =>
                scope.let$({
                  outputs: (scope) =>
                    scope.apply$(scope.builtins["filter"], () =>
                      scope.func$("name", (scope) =>
                        scope.apply$(scope.hasAttr, () => scope.name, () =>
                          scope.pkg)), () =>
                      scope.candidates),
                  output: (scope) =>
                    scope.apply$(scope.builtins["head"], () => scope.outputs),
                }).in$((scope) =>
                  scope.if$(
                    (scope.operators$.selectOrDefault(scope.pkg, [
                      "outputSpecified",
                    ], false)) || (scope.operators$.equal(scope.outputs, [])),
                  ).then$(() => scope.pkg).else$(() =>
                    scope.pkg[scope.output]
                  )
                ))),
          getBin: (scope) =>
            scope.apply$(scope.getOutput, "bin"),
          getLib: (scope) => scope.apply$(scope.getOutput, "lib"),
          getStatic: (scope) =>
            scope.apply$(scope.getFirstOutput, ["static", "lib", "out"]),
          getDev: (scope) => scope.apply$(scope.getOutput, "dev"),
          getInclude: (scope) =>
            scope.apply$(scope.getFirstOutput, ["include", "dev", "out"]),
          getMan: (scope) => scope.apply$(scope.getOutput, "man"),
          chooseDevOutputs: (scope) =>
            scope.apply$(scope.map, () => scope.getDev),
          recurseIntoAttrs: (scope) =>
            scope.func$(
              "attrs",
              (scope) =>
                scope.operators$.merge(scope.attrs, {
                  recurseForDerivations: true,
                }),
            ),
          dontRecurseIntoAttrs: (scope) =>
            scope.func$(
              "attrs",
              (scope) =>
                scope.operators$.merge(scope.attrs, {
                  recurseForDerivations: false,
                }),
            ),
          unionOfDisjoint: (scope) =>
            scope.func$("x", (scope) =>
              scope.func$("y", (scope) =>
                scope.let$({
                  intersection: (scope) =>
                    scope.apply$(
                      scope.builtins["intersectAttrs"],
                      () => scope.x,
                      () => scope.y,
                    ),
                  collisions: (scope) =>
                    scope.apply$(
                      scope.lib["concatStringsSep"],
                      " ",
                      () =>
                        scope.apply$(
                          scope.builtins["attrNames"],
                          () => scope.intersection,
                        ),
                    ),
                  mask: (scope) =>
                    scope.apply$(scope.builtins["mapAttrs"], () =>
                      scope.func$("name", (scope) =>
                        scope.func$(
                          "value",
                          (scope) =>
                            scope.apply$(scope.throw, () =>
                              scope.str$(
                                () => [
                                  "unionOfDisjoint: collision on ",
                                  scope.name,
                                  "; complete list: ",
                                  scope.collisions,
                                ]
                              )),
                        )), () => scope.intersection),
                }).in$((scope) =>
                  scope.operators$.merge(
                    scope.operators$.merge(scope.x, scope.y),
                    scope.mask,
                  )
                ))),
        })
      ))
  ),
);
