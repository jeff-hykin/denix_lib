import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./generators.nix", import.meta.url).pathname,
  ({ scope }) => (
    /**
  Functions that generate widespread file
  formats from nix data structures.

  They all follow a similar interface:

  ```nix
  generator { config-attrs } data
  ```

  `config-attrs` are “holes” in the generators
  with sensible default implementations that
  can be overwritten. The default implementations
  are mostly generators themselves, called with
  their respective default values; they can be reused.

  Tests can be found in ./tests/misc.nix

  Further Documentation can be found [here](#sec-generators).
    */ scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        addErrorContext: (scope) => scope.lib["addErrorContext"],
        any: (scope) => scope.lib["any"],
        attrNames: (scope) => scope.lib["attrNames"],
        attrValues: (scope) => scope.lib["attrValues"],
        concatLists: (scope) => scope.lib["concatLists"],
        concatMap: (scope) => scope.lib["concatMap"],
        concatMapStringsSep: (scope) => scope.lib["concatMapStringsSep"],
        concatStrings: (scope) => scope.lib["concatStrings"],
        concatStringsSep: (scope) => scope.lib["concatStringsSep"],
        const: (scope) => scope.lib["const"],
        elem: (scope) => scope.lib["elem"],
        escape: (scope) => scope.lib["escape"],
        filter: (scope) => scope.lib["filter"],
        flatten: (scope) => scope.lib["flatten"],
        foldl: (scope) => scope.lib["foldl"],
        functionArgs: (scope) => scope.lib["functionArgs"],
        gvariant: (scope) => scope.lib["gvariant"],
        hasInfix: (scope) => scope.lib["hasInfix"],
        head: (scope) => scope.lib["head"],
        id: (scope) => scope.lib["id"],
        init: (scope) => scope.lib["init"],
        isAttrs: (scope) => scope.lib["isAttrs"],
        isBool: (scope) => scope.lib["isBool"],
        isDerivation: (scope) => scope.lib["isDerivation"],
        isFloat: (scope) => scope.lib["isFloat"],
        isFunction: (scope) => scope.lib["isFunction"],
        isInt: (scope) => scope.lib["isInt"],
        isList: (scope) => scope.lib["isList"],
        isPath: (scope) => scope.lib["isPath"],
        isString: (scope) => scope.lib["isString"],
        last: (scope) => scope.lib["last"],
        length: (scope) => scope.lib["length"],
        genAttrs: (scope) => scope.lib["genAttrs"],
        mapAttrs: (scope) => scope.lib["mapAttrs"],
        mapAttrsToList: (scope) => scope.lib["mapAttrsToList"],
        optionals: (scope) => scope.lib["optionals"],
        recursiveUpdate: (scope) => scope.lib["recursiveUpdate"],
        replaceStrings: (scope) => scope.lib["replaceStrings"],
        reverseList: (scope) => scope.lib["reverseList"],
        splitString: (scope) => scope.lib["splitString"],
        tail: (scope) => scope.lib["tail"],
        escapeNixIdentifier: (scope) =>
          scope.lib["strings"]["escapeNixIdentifier"],
        floatToString: (scope) => scope.lib["strings"]["floatToString"],
        match: (scope) => scope.lib["strings"]["match"],
        split: (scope) => scope.lib["strings"]["split"],
        toJSON: (scope) => scope.lib["strings"]["toJSON"],
        typeOf: (scope) => scope.lib["strings"]["typeOf"],
        escapeXML: (scope) => scope.lib["strings"]["escapeXML"],
      }).in$((scope) =>
        scope.operators$.merge(
          scope.recAttrSet$({
            mkValueStringDefault: (scope) =>
              scope.func$({}, (scope) =>
                scope.func$("v", (scope) =>
                  scope.let$({
                    err: (scope) =>
                      scope.func$("t", (scope) =>
                        scope.func$("v", (scope) =>
                          scope.apply$(
                            scope.abort,
                            () => (scope.operators$.add(
                              "generators.mkValueStringDefault: ",
                              scope.str$(
                                () => [
                                  scope.t,
                                  " not supported: ",
                                  scope.apply$(
                                    scope.toPretty,
                                    {},
                                    () => scope.v,
                                  ),
                                ]
                              ),
                            )),
                          ))),
                  }).in$((scope) =>
                    scope.if$(scope.apply$(scope.isInt, () => scope.v)).then$(
                      () => scope.apply$(scope.toString, () => scope.v)
                    ).elseIf$(() =>
                      scope.apply$(scope.isDerivation, () => scope.v)
                    ).then$(() => scope.apply$(scope.toString, () => scope.v))
                      .elseIf$(() =>
                        scope.apply$(scope.isString, () => scope.v)
                      ).then$(() => scope.v).elseIf$(() =>
                        scope.operators$.equal(true, scope.v)
                      ).then$("true").elseIf$(() =>
                        scope.operators$.equal(false, scope.v)
                      ).then$("false").elseIf$(() =>
                        scope.operators$.equal(null, scope.v)
                      ).then$("null").elseIf$(() =>
                        scope.apply$(scope.isList, () => scope.v)
                      ).then$(() =>
                        scope.apply$(scope.err, "lists", () => scope.v)
                      ).elseIf$(() =>
                        scope.apply$(scope.isAttrs, () => scope.v)
                      ).then$(() =>
                        scope.apply$(scope.err, "attrsets", () => scope.v)
                      ).elseIf$(() =>
                        scope.apply$(scope.isFunction, () => scope.v)
                      ).then$(() =>
                        scope.apply$(scope.err, "functions", () => scope.v)
                      ).elseIf$(() =>
                        scope.apply$(scope.isFloat, () => scope.v)
                      ).then$(() =>
                        scope.apply$(scope.floatToString, () => scope.v)
                      ).else$(() =>
                        scope.apply$(scope.err, "this value is", () =>
                          scope.apply$(scope.toString, () => scope.v))
                      )
                  ))),
            mkKeyValueDefault: (scope) =>
              scope.func$({
                mkValueString: (scope) =>
                  scope.apply$(scope.mkValueStringDefault, {}),
              }, (scope) =>
                scope.func$("sep", (scope) =>
                  scope.func$("k", (scope) =>
                    scope.func$("v", (scope) =>
                      scope.str$(
                        () => [
                          scope.apply$(scope.escape, () => [scope.sep], () =>
                            scope.k),
                          scope.sep,
                          scope.apply$(scope.mkValueString, () => scope.v),
                        ]
                      ))))),
            toKeyValue: (scope) =>
              scope.func$({
                mkKeyValue: (scope) =>
                  scope.apply$(scope.mkKeyValueDefault, {}, "="),
                listsAsDuplicateKeys: false,
                indent: "",
              }, (scope) =>
                scope.let$({
                  mkLine: (scope) =>
                    scope.func$("k", (scope) =>
                      scope.func$("v", (scope) =>
                        scope.operators$.add(
                          scope.operators$.add(
                            scope.indent,
                            scope.apply$(scope.mkKeyValue, () => scope.k, () =>
                              scope.v),
                          ),
                          "\n",
                        ))),
                  mkLines: (scope) =>
                    scope.if$(scope.listsAsDuplicateKeys).then$(() =>
                      scope.func$("k", (scope) =>
                        scope.func$("v", (scope) =>
                          scope.apply$(scope.map, () =>
                            scope.apply$(scope.mkLine, () =>
                              scope.k), () =>
                            scope.if$(scope.apply$(scope.isList, () =>
                              scope.v)).then$(() =>
                                scope.v
                              ).else$(() => [scope.v]))))
                    ).else$(() =>
                      scope.func$("k", (scope) =>
                        scope.func$(
                          "v",
                          (
                            scope,
                          ) => [
                            scope.apply$(scope.mkLine, () =>
                              scope.k, () =>
                              scope.v),
                          ],
                        ))
                    ),
                }).in$((scope) =>
                  scope.func$("attrs", (scope) =>
                    scope.apply$(scope.concatStrings, () =>
                      scope.apply$(scope.concatLists, () =>
                        scope.apply$(scope.mapAttrsToList, () =>
                          scope.mkLines, () =>
                          scope.attrs))))
                )),
            toINI: (scope) =>
              scope.func$({
                mkSectionName: (scope) =>
                  scope.func$("name", (scope) =>
                    scope.apply$(scope.escape, ["[", "]"], () =>
                      scope.name)),
                mkKeyValue: (scope) =>
                  scope.apply$(scope.mkKeyValueDefault, {}, "="),
                listsAsDuplicateKeys: false,
              }, (scope) =>
                scope.func$("attrsOfAttrs", (scope) =>
                  scope.let$({
                    mapAttrsToStringsSep: (scope) =>
                      scope.func$("sep", (scope) =>
                        scope.func$("mapFn", (scope) =>
                          scope.func$("attrs", (scope) =>
                            scope.apply$(scope.concatStringsSep, () =>
                              scope.sep, () =>
                              scope.apply$(scope.mapAttrsToList, () =>
                                scope.mapFn, () =>
                                scope.attrs))))),
                    mkSection: (scope) =>
                      scope.func$("sectName", (scope) =>
                        scope.func$("sectValues", (scope) =>
                          scope.operators$.add(
                            scope.str$(
                              () => [
                                "[",
                                scope.apply$(
                                  scope.mkSectionName,
                                  () => scope.sectName,
                                ),
                                "]\n",
                              ]
                            ),
                            scope.apply$(scope.toKeyValue, () =>
                              scope.attrSet$({
                                mkKeyValue: () => scope.mkKeyValue,
                                listsAsDuplicateKeys: () =>
                                  scope.listsAsDuplicateKeys,
                              }), () =>
                              scope.sectValues),
                          ))),
                  }).in$((scope) =>
                    scope.apply$(scope.mapAttrsToStringsSep, "\n", () =>
                      scope.mkSection, () =>
                      scope.attrsOfAttrs)
                  ))),
            toINIWithGlobalSection: (scope) =>
              scope.func$({
                mkSectionName: (scope) =>
                  scope.func$("name", (scope) =>
                    scope.apply$(scope.escape, ["[", "]"], () =>
                      scope.name)),
                mkKeyValue: (scope) =>
                  scope.apply$(scope.mkKeyValueDefault, {}, "="),
                listsAsDuplicateKeys: false,
              }, (scope) =>
                scope.func$({
                  globalSection: scope.nixArg$.NoDefault,
                  sections: {},
                }, (scope) =>
                  scope.operators$.add(
                    scope.if$(scope.operators$.equal(scope.globalSection, {}))
                      .then$("").else$(() =>
                        scope.operators$.add(
                          scope.apply$(scope.toKeyValue, () =>
                            scope.attrSet$({
                              mkKeyValue: () => scope.mkKeyValue,
                              listsAsDuplicateKeys: () =>
                                scope.listsAsDuplicateKeys,
                            }), () =>
                            scope.globalSection),
                          "\n",
                        )
                      ),
                    scope.apply$(scope.toINI, () =>
                      scope.attrSet$({
                        mkSectionName: () => scope.mkSectionName,
                        mkKeyValue: () =>
                          scope.mkKeyValue,
                        listsAsDuplicateKeys: () =>
                          scope.listsAsDuplicateKeys,
                      }), () =>
                      scope.sections),
                  ))),
            toGitINI: (scope) =>
              scope.let$({
                mkSectionName: (scope) =>
                  scope.let$({
                    containsQuote: (scope) =>
                      scope.apply$(scope.hasInfix, '"'),
                  }).in$((scope) =>
                    scope.func$("name", (scope) =>
                      scope.let$({
                        sections: (scope) =>
                          scope.apply$(scope.splitString, ".", () =>
                            scope.name),
                      }).in$((scope) =>
                        scope.if$(
                          (scope.apply$(
                            scope.containsQuote,
                            () => scope.name,
                          )) ||
                          (scope.operators$.equal(
                            scope.apply$(scope.length, () => scope.sections),
                            1n,
                          )),
                        ).then$(() =>
                          scope.name
                        ).else$(() =>
                          scope.str$(() => [
                            scope.apply$(scope.head, () => scope.sections),
                            ' "',
                            scope.apply$(scope.concatStringsSep, ".", () =>
                              scope.apply$(scope.tail, () => scope.sections)),
                            '"',
                          ])
                        )
                      ))
                  ),
                mkValueString: (scope) =>
                  scope.let$({
                    escape: (scope) =>
                      scope.apply$(scope.replaceStrings, [
                        "\n",
                        "\t",
                        '"',
                        "\\",
                      ], ["\\n", "\\t", '\\"', "\\\\"]),
                  }).in$((scope) =>
                    scope.func$("v", (scope) =>
                      scope.apply$(scope.mkValueStringDefault, {}, () =>
                        scope.if$(scope.apply$(scope.isString, () =>
                          scope.v)).then$(() =>
                            scope.str$(
                              () => [
                                '"',
                                scope.apply$(scope.escape, () => scope.v),
                                '"',
                              ]
                            )
                          ).else$(() =>
                            scope.v
                          )))
                  ),
                mkKeyValue: (scope) =>
                  scope.let$({
                    mkKeyValue: (scope) =>
                      scope.apply$(scope.mkKeyValueDefault, () =>
                        scope.attrSet$({
                          mkValueString: () =>
                            scope.mkValueString,
                        }), " = "),
                    attrToString: (scope) =>
                      scope.func$("k", (scope) =>
                        scope.func$("v", (scope) =>
                          scope.operators$.add(
                            "\t",
                            scope.apply$(scope.mkKeyValue, () => scope.k, () =>
                              scope.v),
                          ))),
                  }).in$((scope) =>
                    scope.func$("k", (scope) =>
                      scope.func$("v", (scope) =>
                        scope.if$(scope.apply$(scope.isList, () =>
                          scope.v)).then$(() =>
                            scope.apply$(scope.concatStringsSep, "\n", () =>
                              scope.apply$(scope.map, () =>
                                scope.apply$(scope.attrToString, () =>
                                  scope.k), () =>
                                scope.v))
                          ).else$(() =>
                            scope.apply$(scope.attrToString, () =>
                              scope.k, () =>
                              scope.v)
                          )))
                  ),
                gitFlattenAttrs: (scope) =>
                  scope.let$({
                    isNonDrvAttrs: (scope) =>
                      scope.func$(
                        "value",
                        (
                          scope,
                        ) => ((scope.apply$(
                          scope.isAttrs,
                          () => scope.value,
                        )) &&
                          (scope.operators$.negate(
                            scope.apply$(scope.isDerivation, () => scope.value),
                          ))),
                      ),
                    recurse: (scope) =>
                      scope.func$("path", (scope) =>
                        scope.func$("value", (scope) =>
                          scope.if$(
                            scope.apply$(
                              scope.isNonDrvAttrs,
                              () => scope.value,
                            ),
                          ).then$(() =>
                            scope.apply$(
                              scope.concatMap,
                              () =>
                                scope.func$("name", (scope) =>
                                  scope.apply$(
                                    scope.recurse,
                                    () => (scope.operators$.listConcat([
                                      scope.name,
                                    ], scope.path)),
                                    () => scope.value[scope.name],
                                  )),
                              () =>
                                scope.apply$(scope.attrNames, () =>
                                  scope.value),
                            )
                          ).elseIf$(() =>
                            scope.operators$.greaterThan(
                              scope.apply$(scope.length, () => scope.path),
                              1n,
                            )
                          ).then$(() => [scope.attrSet$({
                            ...scope.deepSet$([
                              scope.apply$(scope.concatStringsSep, ".", () =>
                                scope.apply$(scope.reverseList, () =>
                                  scope.apply$(scope.tail, () =>
                                    scope.path))),
                              scope.apply$(scope.head, () =>
                                scope.path),
                            ], () => scope.value),
                          })]).else$(() => [scope.attrSet$({
                            ...scope.deepSet$([
                              scope.apply$(scope.head, () => scope.path),
                            ], () => scope.value),
                          })]))),
                  }).in$((scope) =>
                    scope.func$("attrs", (scope) =>
                      scope.let$({
                        namesToRewrite: (scope) =>
                          scope.apply$(
                            scope.filter,
                            () =>
                              scope.func$(
                                "name",
                                (scope) => ((scope.apply$(scope.isAttrs, () =>
                                  scope.attrs[scope.name])) &&
                                  (scope.apply$(scope.any, () =>
                                    scope.isNonDrvAttrs, () =>
                                    scope.apply$(scope.attrValues, () =>
                                      scope.attrs[scope.name])))),
                              ),
                            () =>
                              scope.apply$(scope.attrNames, () => scope.attrs),
                          ),
                        attrsToRewrite: (scope) =>
                          scope.apply$(
                            scope.genAttrs,
                            () => scope.namesToRewrite,
                            () =>
                              scope.func$("name", (scope) =>
                                scope.attrs[scope.name]),
                          ),
                      }).in$((scope) =>
                        scope.operators$.merge(
                          scope.apply$(scope.removeAttrs, () =>
                            scope.attrs, () =>
                            scope.namesToRewrite),
                          scope.apply$(
                            scope.foldl,
                            () => scope.recursiveUpdate,
                            {},
                            () =>
                              scope.apply$(
                                scope.recurse,
                                [],
                                () => scope.attrsToRewrite,
                              ),
                          ),
                        )
                      ))
                  ),
                toINI_: (scope) =>
                  scope.apply$(scope.toINI, () =>
                    scope.attrSet$({
                      mkKeyValue: () => scope.mkKeyValue,
                      mkSectionName: () => scope.mkSectionName,
                    })),
              }).in$((scope) =>
                scope.func$(
                  "attrs",
                  (scope) =>
                    scope.apply$(scope.toINI_, () =>
                      scope.apply$(scope.gitFlattenAttrs, () =>
                        scope.attrs)),
                )
              ),
            mkDconfKeyValue: (scope) =>
              scope.apply$(scope.mkKeyValueDefault, () =>
                scope.attrSet$({
                  mkValueString: () =>
                    scope.func$("v", (scope) =>
                      scope.apply$(scope.toString, () =>
                        scope.apply$(scope.gvariant["mkValue"], () =>
                          scope.v))),
                }), "="),
            toDconfINI: (scope) =>
              scope.apply$(scope.toINI, () =>
                scope.attrSet$({
                  mkKeyValue: () => scope.mkDconfKeyValue,
                })),
            withRecursion: (scope) =>
              scope.func$({
                depthLimit: scope.nixArg$.NoDefault,
                throwOnDepthLimit: true,
              }, (scope) =>
                ((_cond) => {
                  if (!_cond) {
                    throw new Error("assertion failed: " + "isInt depthLimit");
                  }
                  return scope.let$({
                    specialAttrs: [
                      "__functor",
                      "__functionArgs",
                      "__toString",
                      "__pretty",
                    ],
                    stepIntoAttr: (scope) =>
                      scope.func$(
                        "evalNext",
                        (scope) =>
                          scope.func$("name", (scope) =>
                            scope.if$(scope.apply$(scope.elem, () =>
                              scope.name, () =>
                              scope.specialAttrs)).then$(() =>
                                scope.id
                              ).else$(() =>
                                scope.evalNext
                              )),
                      ),
                    transform: (scope) =>
                      scope.func$("depth", (scope) =>
                        scope.if$(
                          (scope.operators$.notEqual(scope.depthLimit, null)) &&
                          (scope.operators$.greaterThan(
                            scope.depth,
                            scope.depthLimit,
                          )),
                        ).then$(() =>
                          scope.if$(scope.throwOnDepthLimit).then$(() =>
                            scope.apply$(
                              scope.throw,
                              () =>
                                scope.str$(
                                  () => [
                                    "Exceeded maximum eval-depth limit of ",
                                    scope.apply$(scope.toString, () =>
                                      scope.depthLimit),
                                    " while trying to evaluate with `generators.withRecursion'!",
                                  ]
                                ),
                            )
                          ).else$(() =>
                            scope.apply$(scope.const, "<unevaluated>")
                          )
                        ).else$(() => scope.id)),
                    mapAny: (scope) =>
                      scope.func$("depth", (scope) =>
                        scope.func$("v", (scope) =>
                          scope.let$({
                            evalNext: (scope) =>
                              scope.func$(
                                "x",
                                (scope) =>
                                  scope.apply$(
                                    scope.mapAny,
                                    () => (scope.operators$.add(
                                      scope.depth,
                                      1n,
                                    )),
                                    () =>
                                      scope.apply$(
                                        scope.transform,
                                        () => (scope.operators$.add(
                                          scope.depth,
                                          1n,
                                        )),
                                        () => scope.x,
                                      ),
                                  ),
                              ),
                          }).in$((scope) =>
                            scope.if$(
                              scope.apply$(scope.isAttrs, () => scope.v),
                            ).then$(() =>
                              scope.apply$(
                                scope.mapAttrs,
                                () =>
                                  scope.apply$(scope.stepIntoAttr, () =>
                                    scope.evalNext),
                                () => scope.v,
                              )
                            ).elseIf$(() =>
                              scope.apply$(scope.isList, () => scope.v)
                            ).then$(() =>
                              scope.apply$(
                                scope.map,
                                () => scope.evalNext,
                                () => scope.v,
                              )
                            ).else$(() =>
                              scope.apply$(
                                scope.transform,
                                () => (scope.operators$.add(scope.depth, 1n)),
                                () => scope.v,
                              )
                            )
                          ))),
                  }).in$((scope) => scope.apply$(scope.mapAny, 0n));
                })(scope.apply$(scope.isInt, () => scope.depthLimit))),
            toPretty: (scope) =>
              scope.func$({
                allowPrettyValues: false,
                multiline: true,
                indent: "",
              }, (scope) =>
                scope.let$({
                  go: (scope) =>
                    scope.func$("indent", (scope) =>
                      scope.func$("v", (scope) =>
                        scope.let$({
                          introSpace: (scope) =>
                            scope.if$(scope.multiline).then$(() =>
                              scope.str$(() => ["\n", scope.indent, "  "])
                            ).else$(" "),
                          outroSpace: (scope) =>
                            scope.if$(scope.multiline).then$(() =>
                              scope.str$(() => ["\n", scope.indent])
                            ).else$(" "),
                        }).in$((scope) =>
                          scope.if$(scope.apply$(scope.isInt, () => scope.v))
                            .then$(() =>
                              scope.apply$(scope.toString, () => scope.v)
                            ).elseIf$(() =>
                              scope.apply$(scope.isFloat, () => scope.v)
                            ).then$(() =>
                              scope.apply$(
                                scope.builtins["toJSON"],
                                () => scope.v,
                              )
                            ).elseIf$(() =>
                              scope.apply$(scope.isString, () => scope.v)
                            ).then$(() =>
                              scope.let$({
                                lines: (scope) =>
                                  scope.apply$(
                                    scope.filter,
                                    () =>
                                      scope.func$("v", (scope) =>
                                        scope.operators$.negate(
                                          scope.apply$(scope.isList, () =>
                                            scope.v),
                                        )),
                                    () =>
                                      scope.apply$(scope.split, "\n", () =>
                                        scope.v),
                                  ),
                                escapeSingleline: (scope) =>
                                  scope.apply$(scope.escape, ["\\", '"', "${"]),
                                escapeMultiline: (scope) =>
                                  scope.apply$(scope.replaceStrings, [
                                    "${",
                                    "''",
                                  ], ["''${", "'''"]),
                                singlelineResult: (scope) =>
                                  scope.operators$.add(
                                    scope.operators$.add(
                                      '"',
                                      scope.apply$(
                                        scope.concatStringsSep,
                                        "\\n",
                                        () =>
                                          scope.apply$(
                                            scope.map,
                                            () => scope.escapeSingleline,
                                            () => scope.lines,
                                          ),
                                      ),
                                    ),
                                    '"',
                                  ),
                                multilineResult: (scope) =>
                                  scope.let$({
                                    escapedLines: (scope) =>
                                      scope.apply$(
                                        scope.map,
                                        () => scope.escapeMultiline,
                                        () => scope.lines,
                                      ),
                                    lastLine: (scope) =>
                                      scope.apply$(
                                        scope.last,
                                        () => scope.escapedLines,
                                      ),
                                  }).in$((scope) =>
                                    scope.operators$.add(
                                      scope.operators$.add(
                                        scope.operators$.add(
                                          scope.operators$.add(
                                            "''",
                                            scope.introSpace,
                                          ),
                                          scope.apply$(
                                            scope.concatStringsSep,
                                            () => scope.introSpace,
                                            () =>
                                              scope.apply$(
                                                scope.init,
                                                () => scope.escapedLines,
                                              ),
                                          ),
                                        ),
                                        scope.if$(
                                          scope.operators$.equal(
                                            scope.lastLine,
                                            "",
                                          ),
                                        ).then$(() => scope.outroSpace).else$(
                                          () =>
                                            scope.operators$.add(
                                              scope.introSpace,
                                              scope.lastLine,
                                            )
                                        ),
                                      ),
                                      "''",
                                    )
                                  ),
                              }).in$((scope) =>
                                scope.if$(
                                  (scope.multiline) &&
                                  (scope.operators$.greaterThan(
                                    scope.apply$(scope.length, () =>
                                      scope.lines),
                                    1n,
                                  )),
                                ).then$(() => scope.multilineResult).else$(() =>
                                  scope.singlelineResult
                                )
                              )
                            ).elseIf$(() =>
                              scope.operators$.equal(true, scope.v)
                            ).then$("true").elseIf$(() =>
                              scope.operators$.equal(false, scope.v)
                            ).then$("false").elseIf$(() =>
                              scope.operators$.equal(null, scope.v)
                            ).then$("null").elseIf$(() =>
                              scope.apply$(scope.isPath, () => scope.v)
                            ).then$(() =>
                              scope.apply$(scope.toString, () => scope.v)
                            ).elseIf$(() =>
                              scope.apply$(scope.isList, () => scope.v)
                            ).then$(() =>
                              scope.if$(scope.operators$.equal(scope.v, []))
                                .then$("[ ]").else$(() =>
                                  scope.operators$.add(
                                    scope.operators$.add(
                                      scope.operators$.add(
                                        scope.operators$.add(
                                          "[",
                                          scope.introSpace,
                                        ),
                                        scope.apply$(
                                          scope.concatMapStringsSep,
                                          () => scope.introSpace,
                                          () =>
                                            scope.apply$(
                                              scope.go,
                                              () => (scope.operators$.add(
                                                scope.indent,
                                                "  ",
                                              )),
                                            ),
                                          () => scope.v,
                                        ),
                                      ),
                                      scope.outroSpace,
                                    ),
                                    "]",
                                  )
                                )
                            ).elseIf$(() =>
                              scope.apply$(scope.isFunction, () => scope.v)
                            ).then$(() =>
                              scope.let$({
                                fna: (scope) =>
                                  scope.apply$(
                                    scope.functionArgs,
                                    () => scope.v,
                                  ),
                                showFnas: (scope) =>
                                  scope.apply$(
                                    scope.concatStringsSep,
                                    ", ",
                                    () =>
                                      scope.apply$(scope.mapAttrsToList, () =>
                                        scope.func$("name", (scope) =>
                                          scope.func$("hasDefVal", (scope) =>
                                            scope.if$(scope.hasDefVal).then$(
                                              () =>
                                                scope.operators$.add(
                                                  scope.name,
                                                  "?",
                                                )
                                            ).else$(() =>
                                              scope.name
                                            ))), () =>
                                        scope.fna),
                                  ),
                              }).in$((scope) =>
                                scope.if$(scope.operators$.equal(scope.fna, {}))
                                  .then$("<function>").else$(() =>
                                    scope.str$(
                                      () => [
                                        "<function, args: {",
                                        scope.showFnas,
                                        "}>",
                                      ]
                                    )
                                  )
                              )
                            ).elseIf$(() =>
                              scope.apply$(scope.isAttrs, () => scope.v)
                            ).then$(() =>
                              scope.if$(
                                ((scope.allowPrettyValues) &&
                                  (scope.operators$.hasAttr(
                                    scope.v,
                                    "__pretty",
                                  ))) &&
                                (scope.operators$.hasAttr(scope.v, "val")),
                              ).then$(() =>
                                scope.apply$(
                                  scope.v["__pretty"],
                                  () => scope.v["val"],
                                )
                              ).elseIf$(() =>
                                scope.operators$.equal(scope.v, {})
                              ).then$("{ }").elseIf$(
                                () => ((scope.operators$.hasAttr(
                                  scope.v,
                                  "type",
                                )) &&
                                  (scope.operators$.equal(
                                    scope.v["type"],
                                    "derivation",
                                  )))
                              ).then$(() =>
                                scope.str$(
                                  () => [
                                    "<derivation ",
                                    scope.operators$.selectOrDefault(scope.v, [
                                      "name",
                                    ], "???"),
                                    ">",
                                  ]
                                )
                              ).else$(() =>
                                scope.operators$.add(
                                  scope.operators$.add(
                                    scope.operators$.add(
                                      scope.operators$.add(
                                        "{",
                                        scope.introSpace,
                                      ),
                                      scope.apply$(
                                        scope.concatStringsSep,
                                        () => scope.introSpace,
                                        () =>
                                          scope.apply$(
                                            scope.mapAttrsToList,
                                            () =>
                                              scope.func$("name", (scope) =>
                                                scope.func$("value", (scope) =>
                                                  scope.str$(
                                                    () => [
                                                      scope.apply$(
                                                        scope
                                                          .escapeNixIdentifier,
                                                        () => scope.name,
                                                      ),
                                                      " = ",
                                                      scope.apply$(
                                                        scope.addErrorContext,
                                                        () =>
                                                          scope.str$(
                                                            () => [
                                                              "while evaluating an attribute `",
                                                              scope.name,
                                                              "`",
                                                            ]
                                                          ),
                                                        () =>
                                                          scope.apply$(
                                                            scope.go,
                                                            () => (scope
                                                              .operators$.add(
                                                                scope.indent,
                                                                "  ",
                                                              )),
                                                            () => scope.value,
                                                          ),
                                                      ),
                                                      ";",
                                                    ]
                                                  ))),
                                            () => scope.v,
                                          ),
                                      ),
                                    ),
                                    scope.outroSpace,
                                  ),
                                  "}",
                                )
                              )
                            ).else$(() =>
                              scope.apply$(
                                scope.abort,
                                () =>
                                  scope.str$(
                                    () => [
                                      "generators.toPretty: should never happen (v = ",
                                      scope.v,
                                      ")",
                                    ]
                                  ),
                              )
                            )
                        ))),
                }).in$((scope) => scope.apply$(scope.go, () => scope.indent))),
            toPlist: (scope) =>
              scope.func$({ escape: false }, (scope) =>
                scope.func$("v", (scope) =>
                  scope.let$({
                    expr: (scope) =>
                      scope.func$("ind", (scope) =>
                        scope.func$("x", (scope) =>
                          scope.if$(scope.operators$.equal(scope.x, null))
                            .then$("").elseIf$(() =>
                              scope.apply$(scope.isBool, () => scope.x)
                            ).then$(() =>
                              scope.apply$(
                                scope.bool,
                                () => scope.ind,
                                () => scope.x,
                              )
                            ).elseIf$(() =>
                              scope.apply$(scope.isInt, () => scope.x)
                            ).then$(() =>
                              scope.apply$(
                                scope.int,
                                () => scope.ind,
                                () => scope.x,
                              )
                            ).elseIf$(() =>
                              scope.apply$(scope.isString, () => scope.x)
                            ).then$(() =>
                              scope.apply$(
                                scope.str,
                                () => scope.ind,
                                () => scope.x,
                              )
                            ).elseIf$(() =>
                              scope.apply$(scope.isList, () => scope.x)
                            ).then$(() =>
                              scope.apply$(
                                scope.list,
                                () => scope.ind,
                                () => scope.x,
                              )
                            ).elseIf$(() =>
                              scope.apply$(scope.isAttrs, () => scope.x)
                            ).then$(() =>
                              scope.apply$(
                                scope.attrs,
                                () => scope.ind,
                                () => scope.x,
                              )
                            ).elseIf$(() =>
                              scope.apply$(scope.isPath, () => scope.x)
                            ).then$(() =>
                              scope.apply$(
                                scope.str,
                                () => scope.ind,
                                () =>
                                  scope.apply$(scope.toString, () => scope.x),
                              )
                            ).elseIf$(() =>
                              scope.apply$(scope.isFloat, () => scope.x)
                            ).then$(() =>
                              scope.apply$(
                                scope.float,
                                () => scope.ind,
                                () => scope.x,
                              )
                            ).else$(() =>
                              scope.apply$(
                                scope.abort,
                                () =>
                                  scope.str$(
                                    () => [
                                      "generators.toPlist: should never happen (v = ",
                                      scope.v,
                                      ")",
                                    ]
                                  ),
                              )
                            ))),
                    literal: (scope) =>
                      scope.func$(
                        "ind",
                        (scope) =>
                          scope.func$("x", (scope) =>
                            scope.operators$.add(scope.ind, scope.x)),
                      ),
                    maybeEscapeXML: (scope) =>
                      scope.if$(scope.escape).then$(() => scope.escapeXML)
                        .else$(() => scope.func$("x", (scope) => scope.x)),
                    bool: (scope) =>
                      scope.func$(
                        "ind",
                        (scope) =>
                          scope.func$("x", (scope) =>
                            scope.apply$(scope.literal, () =>
                              scope.ind, () =>
                              scope.if$(scope.x).then$("<true/>").else$(
                                "<false/>",
                              ))),
                      ),
                    int: (scope) =>
                      scope.func$(
                        "ind",
                        (scope) =>
                          scope.func$("x", (scope) =>
                            scope.apply$(scope.literal, () =>
                              scope.ind, () =>
                              scope.str$(
                                () => [
                                  "<integer>",
                                  scope.apply$(scope.toString, () => scope.x),
                                  "</integer>",
                                ]
                              ))),
                      ),
                    str: (scope) =>
                      scope.func$(
                        "ind",
                        (scope) =>
                          scope.func$("x", (scope) =>
                            scope.apply$(scope.literal, () =>
                              scope.ind, () =>
                              scope.str$(
                                () => [
                                  "<string>",
                                  scope.apply$(
                                    scope.maybeEscapeXML,
                                    () => scope.x,
                                  ),
                                  "</string>",
                                ]
                              ))),
                      ),
                    key: (scope) =>
                      scope.func$(
                        "ind",
                        (scope) =>
                          scope.func$("x", (scope) =>
                            scope.apply$(scope.literal, () =>
                              scope.ind, () =>
                              scope.str$(
                                () => [
                                  "<key>",
                                  scope.apply$(
                                    scope.maybeEscapeXML,
                                    () => scope.x,
                                  ),
                                  "</key>",
                                ]
                              ))),
                      ),
                    float: (scope) =>
                      scope.func$(
                        "ind",
                        (scope) =>
                          scope.func$("x", (scope) =>
                            scope.apply$(scope.literal, () =>
                              scope.ind, () =>
                              scope.str$(
                                () => [
                                  "<real>",
                                  scope.apply$(scope.toString, () => scope.x),
                                  "</real>",
                                ]
                              ))),
                      ),
                    indent: (scope) =>
                      scope.func$(
                        "ind",
                        (scope) =>
                          scope.apply$(scope.expr, () =>
                            scope.str$(() => ["\t", scope.ind])),
                      ),
                    item: (scope) =>
                      scope.func$(
                        "ind",
                        (scope) =>
                          scope.apply$(scope.concatMapStringsSep, "\n", () =>
                            scope.apply$(scope.indent, () =>
                              scope.ind)),
                      ),
                    list: (scope) =>
                      scope.func$(
                        "ind",
                        (scope) =>
                          scope.func$("x", (scope) =>
                            scope.apply$(
                              scope.concatStringsSep,
                              "\n",
                              () => [
                                scope.apply$(
                                  scope.literal,
                                  () => scope.ind,
                                  "<array>",
                                ),
                                scope.apply$(
                                  scope.item,
                                  () => scope.ind,
                                  () => scope.x,
                                ),
                                scope.apply$(
                                  scope.literal,
                                  () => scope.ind,
                                  "</array>",
                                ),
                              ],
                            )),
                      ),
                    attrs: (scope) =>
                      scope.func$(
                        "ind",
                        (scope) =>
                          scope.func$("x", (scope) =>
                            scope.apply$(
                              scope.concatStringsSep,
                              "\n",
                              () => [
                                scope.apply$(
                                  scope.literal,
                                  () => scope.ind,
                                  "<dict>",
                                ),
                                scope.apply$(
                                  scope.attr,
                                  () => scope.ind,
                                  () => scope.x,
                                ),
                                scope.apply$(
                                  scope.literal,
                                  () => scope.ind,
                                  "</dict>",
                                ),
                              ],
                            )),
                      ),
                    attr: (scope) =>
                      scope.let$({
                        attrFilter: (scope) =>
                          scope.func$("name", (scope) =>
                            scope.func$(
                              "value",
                              (
                                scope,
                              ) => ((scope.operators$.notEqual(
                                scope.name,
                                "_module",
                              )) &&
                                (scope.operators$.notEqual(scope.value, null))),
                            )),
                      }).in$((scope) =>
                        scope.func$("ind", (scope) =>
                          scope.func$("x", (scope) =>
                            scope.apply$(scope.concatStringsSep, "\n", () =>
                              scope.apply$(scope.flatten, () =>
                                scope.apply$(scope.mapAttrsToList, () =>
                                  scope.func$("name", (scope) =>
                                    scope.func$("value", (scope) =>
                                      scope.apply$(
                                        scope.optionals,
                                        () =>
                                          scope.apply$(
                                            scope.attrFilter,
                                            () => scope.name,
                                            () => scope.value,
                                          ),
                                        () => [
                                          scope.apply$(
                                            scope.key,
                                            () =>
                                              scope.str$(
                                                () => ["\t", scope.ind]
                                              ),
                                            () => scope.name,
                                          ),
                                          scope.apply$(
                                            scope.expr,
                                            () =>
                                              scope.str$(
                                                () => ["\t", scope.ind]
                                              ),
                                            () => scope.value,
                                          ),
                                        ],
                                      ))), () =>
                                  scope.x)))))
                      ),
                  }).in$((scope) =>
                    scope.apply$(
                      scope.lib["warnIf"],
                      () => ((scope.operators$.negate(scope.escape)) &&
                        (scope.apply$(
                          scope.lib["oldestSupportedReleaseIsAtLeast"],
                          2505n,
                        ))),
                      "Using `lib.generators.toPlist` without `escape = true` is deprecated",
                      () =>
                        scope.str$(
                          () => [
                            '<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n',
                            scope.apply$(scope.expr, "", () => scope.v),
                            "\n</plist>",
                          ]
                        ),
                    )
                  ))),
            toDhall: (scope) =>
              scope.func$(
                { args: scope.nixArg$.AllArgs },
                (scope) =>
                  scope.func$("v", (scope) =>
                    scope.let$({
                      concatItems: (scope) =>
                        scope.apply$(scope.concatStringsSep, ", "),
                    }).in$((scope) =>
                      scope.if$(scope.apply$(scope.isAttrs, () => scope.v))
                        .then$(() =>
                          scope.str$(
                            () => [
                              "{ ",
                              scope.apply$(scope.concatItems, () =>
                                scope.apply$(scope.mapAttrsToList, () =>
                                  scope.func$("key", (scope) =>
                                    scope.func$("value", (scope) =>
                                      scope.str$(
                                        () => [
                                          scope.key,
                                          " = ",
                                          scope.apply$(
                                            scope.toDhall,
                                            () => scope.args,
                                            () => scope.value,
                                          ),
                                        ]
                                      ))), () => scope.v)),
                              " }",
                            ]
                          )
                        ).elseIf$(() =>
                          scope.apply$(scope.isList, () => scope.v)
                        ).then$(() =>
                          scope.str$(
                            () => [
                              "[ ",
                              scope.apply$(scope.concatItems, () =>
                                scope.apply$(
                                  scope.map,
                                  () =>
                                    scope.apply$(scope.toDhall, () =>
                                      scope.args),
                                  () => scope.v,
                                )),
                              " ]",
                            ]
                          )
                        ).elseIf$(() =>
                          scope.apply$(scope.isInt, () => scope.v)
                        ).then$(() =>
                          scope.str$(
                            () => [
                              scope.if$(scope.operators$.lessThan(scope.v, 0n))
                                .then$("").else$("+"),
                              scope.apply$(scope.toString, () => scope.v),
                            ]
                          )
                        ).elseIf$(() =>
                          scope.apply$(scope.isBool, () => scope.v)
                        ).then$(() =>
                          scope.if$(scope.v).then$("True").else$("False")
                        ).elseIf$(() =>
                          scope.apply$(scope.isFunction, () => scope.v)
                        ).then$(() =>
                          scope.apply$(
                            scope.abort,
                            "generators.toDhall: cannot convert a function to Dhall",
                          )
                        ).elseIf$(() => scope.operators$.equal(scope.v, null))
                        .then$(() =>
                          scope.apply$(
                            scope.abort,
                            "generators.toDhall: cannot convert a null to Dhall",
                          )
                        ).else$(() => scope.apply$(scope.toJSON, () => scope.v))
                    )),
              ),
            toLua: (scope) =>
              scope.func$({
                multiline: true,
                indent: "",
                asBindings: false,
                args: scope.nixArg$.AllArgs,
              }, (scope) =>
                scope.func$("v", (scope) =>
                  scope.let$({
                    innerIndent: (scope) =>
                      scope.str$(() => [scope.indent, "  "]),
                    introSpace: (scope) =>
                      scope.if$(scope.multiline).then$(() =>
                        scope.str$(() => ["\n", scope.innerIndent])
                      ).else$(" "),
                    outroSpace: (scope) =>
                      scope.if$(scope.multiline).then$(() =>
                        scope.str$(() => ["\n", scope.indent])
                      ).else$(" "),
                    innerArgs: (scope) =>
                      scope.operators$.merge(
                        scope.args,
                        scope.attrSet$({
                          indent: () =>
                            scope.if$(scope.asBindings).then$(() =>
                              scope.indent
                            ).else$(() => scope.innerIndent),
                          asBindings: false,
                        }),
                      ),
                    concatItems: (scope) =>
                      scope.apply$(
                        scope.concatStringsSep,
                        () => scope.str$(() => [",", scope.introSpace]),
                      ),
                    isLuaInline: (scope) =>
                      scope.func$(
                        { _type: null, "...": scope.nixArg$.Ellipsis },
                        (scope) =>
                          scope.operators$.equal(scope._type, "lua-inline"),
                      ),
                    generatedBindings: (scope) =>
                      ((_cond) => {
                        if (!_cond) {
                          throw new Error(
                            "assertion failed: " +
                              'badVarNames == [ ] || throw "Bad Lua var names: ${toPretty { } badVarNames}"',
                          );
                        }
                        return scope.apply$(scope.concatStrings, () =>
                          scope.apply$(scope.mapAttrsToList, () =>
                            scope.func$("key", (scope) =>
                              scope.func$("value", (scope) =>
                                scope.str$(
                                  () => [
                                    scope.indent,
                                    scope.key,
                                    " = ",
                                    scope.apply$(
                                      scope.toLua,
                                      () => scope.innerArgs,
                                      () => scope.value,
                                    ),
                                    "\n",
                                  ]
                                ))), () =>
                            scope.v));
                      })(
                        (scope.operators$.equal(scope.badVarNames, [])) ||
                        (scope.apply$(scope.throw, () =>
                          scope.str$(
                            () => [
                              "Bad Lua var names: ",
                              scope.apply$(
                                scope.toPretty,
                                {},
                                () => scope.badVarNames,
                              ),
                            ]
                          ))),
                      ),
                    matchVarName: (scope) =>
                      scope.apply$(
                        scope.match,
                        "[[:alpha:]_][[:alnum:]_]*(\\.[[:alpha:]_][[:alnum:]_]*)*",
                      ),
                    badVarNames: (scope) =>
                      scope.apply$(scope.filter, () =>
                        scope.func$("name", (scope) =>
                          scope.operators$.equal(
                            scope.apply$(scope.matchVarName, () =>
                              scope.name),
                            null,
                          )), () =>
                        scope.apply$(scope.attrNames, () =>
                          scope.v)),
                  }).in$((scope) =>
                    scope.if$(scope.asBindings).then$(() =>
                      scope.generatedBindings
                    ).elseIf$(() => scope.operators$.equal(scope.v, null))
                      .then$("nil").elseIf$(
                        () => ((((scope.apply$(scope.isInt, () => scope.v)) ||
                          (scope.apply$(scope.isFloat, () => scope.v))) ||
                          (scope.apply$(scope.isString, () => scope.v))) ||
                          (scope.apply$(scope.isBool, () => scope.v)))
                      ).then$(() => scope.apply$(scope.toJSON, () => scope.v))
                      .elseIf$(() => ((scope.apply$(scope.isPath, () =>
                        scope.v)) || (scope.apply$(scope.isDerivation, () =>
                          scope.v)))
                      ).then$(() =>
                        scope.apply$(
                          scope.toJSON,
                          () => scope.str$(() => [scope.v]),
                        )
                      ).elseIf$(() => scope.apply$(scope.isList, () => scope.v))
                      .then$(() =>
                        scope.if$(scope.operators$.equal(scope.v, [])).then$(
                          "{}",
                        ).else$(() =>
                          scope.str$(
                            () => [
                              "{",
                              scope.introSpace,
                              scope.apply$(scope.concatItems, () =>
                                scope.apply$(scope.map, () =>
                                  scope.func$("value", (scope) =>
                                    scope.str$(
                                      () => [scope.apply$(scope.toLua, () =>
                                        scope.innerArgs, () =>
                                        scope.value)]
                                    )), () => scope.v)),
                              scope.outroSpace,
                              "}",
                            ]
                          )
                        )
                      ).elseIf$(() =>
                        scope.apply$(scope.isAttrs, () =>
                          scope.v)
                      ).then$(() =>
                        scope.if$(
                          scope.apply$(scope.isLuaInline, () => scope.v),
                        ).then$(() =>
                          scope.str$(() => ["(", scope.v["expr"], ")"])
                        ).elseIf$(() => scope.operators$.equal(scope.v, {}))
                          .then$("{}").else$(() =>
                            scope.str$(
                              () => [
                                "{",
                                scope.introSpace,
                                scope.apply$(scope.concatItems, () =>
                                  scope.apply$(scope.mapAttrsToList, () =>
                                    scope.func$("key", (scope) =>
                                      scope.func$("value", (scope) =>
                                        scope.str$(
                                          () => [
                                            "[",
                                            scope.apply$(
                                              scope.toJSON,
                                              () => scope.key,
                                            ),
                                            "] = ",
                                            scope.apply$(
                                              scope.toLua,
                                              () => scope.innerArgs,
                                              () => scope.value,
                                            ),
                                          ]
                                        ))), () => scope.v)),
                                scope.outroSpace,
                                "}",
                              ]
                            )
                          )
                      ).else$(() =>
                        scope.apply$(scope.abort, () =>
                          scope.str$(
                            () => [
                              "generators.toLua: type ",
                              scope.apply$(scope.typeOf, () => scope.v),
                              " is unsupported",
                            ]
                          ))
                      )
                  ))),
            mkLuaInline: (scope) =>
              scope.func$("expr", (scope) =>
                scope.attrSet$({
                  _type: "lua-inline",
                  expr: () => scope.expr,
                })),
          }),
          scope.attrSet$({
            toJSON: () =>
              scope.func$({}, (scope) => scope.lib["strings"]["toJSON"]),
            toYAML: () =>
              scope.func$({}, (scope) => scope.lib["strings"]["toJSON"]),
          }),
        )
      ))
  ),
);
