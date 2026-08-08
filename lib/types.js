import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./types.nix", import.meta.url).pathname,
  ({ scope }) => (
    //
    //
    scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        all: (scope) => scope.lib["all"],
        elem: (scope) => scope.lib["elem"],
        flip: (scope) => scope.lib["flip"],
        hasContext: (scope) => scope.lib["hasContext"],
        functionArgs: (scope) => scope.lib["functionArgs"],
        isAttrs: (scope) => scope.lib["isAttrs"],
        isBool: (scope) => scope.lib["isBool"],
        isDerivation: (scope) => scope.lib["isDerivation"],
        isFloat: (scope) => scope.lib["isFloat"],
        isFunction: (scope) => scope.lib["isFunction"],
        isInt: (scope) => scope.lib["isInt"],
        isList: (scope) => scope.lib["isList"],
        isPath: (scope) => scope.lib["isPath"],
        isStorePath: (scope) => scope.lib["isStorePath"],
        isString: (scope) => scope.lib["isString"],
        substring: (scope) => scope.lib["substring"],
        sort: (scope) => scope.lib["sort"],
        toDerivation: (scope) => scope.lib["toDerivation"],
        toList: (scope) => scope.lib["toList"],
        types: (scope) => scope.lib["types"],
        concatLists: (scope) => scope.lib["lists"]["concatLists"],
        concatMap: (scope) => scope.lib["lists"]["concatMap"],
        elemAt: (scope) => scope.lib["lists"]["elemAt"],
        filter: (scope) => scope.lib["lists"]["filter"],
        "foldl'": (scope) => scope.lib["lists"]["foldl'"],
        head: (scope) => scope.lib["lists"]["head"],
        imap1: (scope) => scope.lib["lists"]["imap1"],
        last: (scope) => scope.lib["lists"]["last"],
        length: (scope) => scope.lib["lists"]["length"],
        tail: (scope) => scope.lib["lists"]["tail"],
        attrNames: (scope) => scope.lib["attrsets"]["attrNames"],
        filterAttrs: (scope) => scope.lib["attrsets"]["filterAttrs"],
        hasAttr: (scope) => scope.lib["attrsets"]["hasAttr"],
        mapAttrs: (scope) => scope.lib["attrsets"]["mapAttrs"],
        optionalAttrs: (scope) => scope.lib["attrsets"]["optionalAttrs"],
        zipAttrsWith: (scope) => scope.lib["attrsets"]["zipAttrsWith"],
        getFiles: (scope) => scope.lib["options"]["getFiles"],
        getValues: (scope) => scope.lib["options"]["getValues"],
        mergeDefaultOption: (scope) =>
          scope.lib["options"]["mergeDefaultOption"],
        mergeEqualOption: (scope) => scope.lib["options"]["mergeEqualOption"],
        mergeOneOption: (scope) => scope.lib["options"]["mergeOneOption"],
        mergeUniqueOption: (scope) => scope.lib["options"]["mergeUniqueOption"],
        showFiles: (scope) => scope.lib["options"]["showFiles"],
        showDefs: (scope) => scope.lib["options"]["showDefs"],
        showOption: (scope) => scope.lib["options"]["showOption"],
        concatMapStringsSep: (scope) =>
          scope.lib["strings"]["concatMapStringsSep"],
        concatStringsSep: (scope) => scope.lib["strings"]["concatStringsSep"],
        escapeNixString: (scope) => scope.lib["strings"]["escapeNixString"],
        hasInfix: (scope) => scope.lib["strings"]["hasInfix"],
        isStringLike: (scope) => scope.lib["strings"]["isStringLike"],
        boolToString: (scope) => scope.lib["trivial"]["boolToString"],
        mergeDefinitions: (scope) => scope.lib["modules"]["mergeDefinitions"],
        fixupOptionType: (scope) => scope.lib["modules"]["fixupOptionType"],
        mergeOptionDecls: (scope) => scope.lib["modules"]["mergeOptionDecls"],
        defaultOrderPriority: (scope) =>
          scope.lib["modules"]["defaultOrderPriority"],
        defaultOverridePriority: (scope) =>
          scope.lib["modules"]["defaultOverridePriority"],
        mkDefinition: (scope) => scope.lib["modules"]["mkDefinition"],
        mkOrder: (scope) => scope.lib["modules"]["mkOrder"],
        mkOverride: (scope) => scope.lib["modules"]["mkOverride"],
        isFileset: (scope) => scope.lib["fileset"]["isFileset"],
        unions: (scope) => scope.lib["fileset"]["unions"],
        empty: (scope) => scope.lib["fileset"]["empty"],
        hasStorePathPrefix: (scope) => scope.lib["path"]["hasStorePathPrefix"],
        inAttrPosSuffix: (scope) =>
          scope.func$("v", (scope) =>
            scope.func$("name", (scope) =>
              scope.let$({
                pos: (scope) =>
                  scope.apply$(scope.builtins["unsafeGetAttrPos"], () =>
                    scope.name, () =>
                    scope.v),
              }).in$((scope) =>
                scope.if$(scope.operators$.equal(scope.pos, null)).then$("")
                  .else$(() =>
                    scope.str$(
                      () => [
                        " at ",
                        scope.pos["file"],
                        ":",
                        scope.apply$(scope.toString, () => scope.pos["line"]),
                        ":",
                        scope.apply$(scope.toString, () => scope.pos["column"]),
                      ]
                    )
                  )
              ))),
        hasColonInfix: (scope) =>
          scope.apply$(scope.hasInfix, ":"),
        hasNewlineInfix: (scope) => scope.apply$(scope.hasInfix, "\n"),
        elemTypeFunctor: (scope) =>
          scope.func$("name", (scope) =>
            scope.func$({
              elemType: scope.nixArg$.NoDefault,
              "...": scope.nixArg$.Ellipsis,
              payload: scope.nixArg$.AllArgs,
            }, (scope) =>
              scope.attrSet$({
                name: () => scope.name,
                payload: () => scope.payload,
                type: () => scope.types[scope.name],
                binOp: () =>
                  scope.func$("a", (scope) =>
                    scope.func$("b", (scope) =>
                      scope.let$({
                        merged: (scope) =>
                          scope.apply$(
                            scope.a["elemType"]["typeMerge"],
                            () => scope.b["elemType"]["functor"],
                          ),
                      }).in$((scope) =>
                        scope.if$(scope.operators$.equal(scope.merged, null))
                          .then$(null).else$(() =>
                            scope.attrSet$({
                              elemType: () => scope.merged,
                            })
                          )
                      ))),
              }))),
        checkDefsForError: (scope) =>
          scope.func$("check", (scope) =>
            scope.func$("loc", (scope) =>
              scope.func$("defs", (scope) =>
                scope.if$(scope.apply$(scope.all, () =>
                  scope.func$("def", (scope) =>
                    scope.apply$(scope.check, () =>
                      scope.def["value"])), () =>
                  scope.defs)).then$(null).else$(() =>
                    scope.let$({
                      invalidDefs: (scope) =>
                        scope.apply$(scope.filter, () =>
                          scope.func$("def", (scope) =>
                            scope.operators$.negate(
                              scope.apply$(scope.check, () =>
                                scope.def["value"]),
                            )), () =>
                          scope.defs),
                    }).in$((scope) =>
                      scope.attrSet$({
                        message: () =>
                          scope.str$(
                            () => [
                              "Definition values: ",
                              scope.apply$(
                                scope.showDefs,
                                () => scope.invalidDefs,
                              ),
                            ]
                          ),
                      })
                    )
                  )))),
        checkV2MergeCoherence: (scope) =>
          scope.func$("loc", (scope) =>
            scope.func$("type", (scope) =>
              scope.func$("result", (scope) =>
                scope.if$(
                  scope.operators$.selectOrDefault(scope.type, [
                    "check",
                    "isV2MergeCoherent",
                  ], false),
                ).then$(() =>
                  scope.result
                ).else$(() =>
                  scope.apply$(scope.throw, () =>
                    scope.str$(
                      () => [
                        "The option `",
                        scope.apply$(scope.showOption, () => scope.loc),
                        "' has a type `",
                        scope.type["description"],
                        "' that uses\nan ad-hoc `type // { check = ...; }' override, which is incompatible with\nthe v2 merge mechanism.\n\nPlease use `lib.types.addCheck` instead of `type // { check }' to add\ncustom validation. For example:\n\n  lib.types.addCheck baseType (value: /* your check */)\n\ninstead of:\n\n  baseType // { check = value: /* your check */; }\n",
                      ]
                    ))
                )))),
      }).in$((scope) =>
        scope.recAttrSet$({
          isType: (scope) =>
            scope.func$("type", (scope) =>
              scope.func$("x", (scope) =>
                scope.operators$.equal(
                  scope.operators$.selectOrDefault(scope.x, ["_type"], ""),
                  scope.type,
                ))),
          setType: (scope) =>
            scope.func$("typeName", (scope) =>
              scope.func$("value", (scope) =>
                scope.operators$.merge(
                  scope.value,
                  scope.attrSet$({
                    _type: () => scope.typeName,
                  }),
                ))),
          defaultTypeMerge: (scope) =>
            scope.func$("f", (scope) =>
              scope.func$("f'", (scope) =>
                scope.let$({
                  mergedPayload: (scope) =>
                    scope.apply$(scope.f["binOp"], () =>
                      scope.f["payload"], () =>
                      scope["f'"]["payload"]),
                  hasPayload: (scope) =>
                    ((_cond) => {
                      if (!_cond) {
                        throw new Error(
                          "assertion failed: " +
                            "(f'.payload != null) == (f.payload != null)",
                        );
                      }
                      return scope.operators$.notEqual(
                        scope.f["payload"],
                        null,
                      );
                    })(
                      scope.operators$.equal(
                        scope.operators$.notEqual(scope["f'"]["payload"], null),
                        scope.operators$.notEqual(scope.f["payload"], null),
                      ),
                    ),
                }).in$((scope) =>
                  scope.if$(
                    scope.operators$.notEqual(
                      scope.f["name"],
                      scope["f'"]["name"],
                    ),
                  ).then$(null).elseIf$(() =>
                    scope.hasPayload
                  ).then$(() =>
                    scope.if$(scope.operators$.equal(scope.mergedPayload, null))
                      .then$(null).else$(() =>
                        scope.apply$(scope.f["type"], () =>
                          scope.mergedPayload)
                      )
                  ).else$(() =>
                    scope.f["type"]
                  )
                ))),
          defaultFunctor: (scope) =>
            scope.func$("name", (scope) =>
              scope.attrSet$({
                name: () =>
                  scope.name,
                type: () =>
                  scope.operators$.selectOrDefault(scope.lib, [
                    "types",
                    scope.name,
                  ], null),
                payload: null,
                binOp: () =>
                  scope.func$("a", (scope) =>
                    scope.func$("b", (scope) =>
                      null)),
              })),
          isOptionType: (scope) => scope.apply$(scope.isType, "option-type"),
          mkOptionType: (scope) =>
            scope.func$({
              name: scope.nixArg$.NoDefault,
              description: null,
              descriptionClass: null,
              check: (scope) => scope.func$("x", (scope) => true),
              merge: (scope) => scope.mergeDefaultOption,
              emptyValue: {},
              getSubOptions: (scope) => scope.func$("prefix", (scope) => ({})),
              getSubModules: null,
              substSubModules: (scope) => scope.func$("m", (scope) => null),
              typeMerge: (scope) =>
                scope.apply$(scope.defaultTypeMerge, () => scope.functor),
              functor: (scope) =>
                scope.apply$(scope.defaultFunctor, () => scope.name),
              deprecationMessage: null,
              nestedTypes: {},
            }, (scope) =>
              scope.attrSet$({
                _type: "option-type",
                name: () => scope.name,
                check: () => scope.check,
                merge: () => scope.merge,
                emptyValue: () => scope.emptyValue,
                getSubOptions: () => scope.getSubOptions,
                getSubModules: () => scope.getSubModules,
                substSubModules: () => scope.substSubModules,
                typeMerge: () => scope.typeMerge,
                deprecationMessage: () => scope.deprecationMessage,
                nestedTypes: () => scope.nestedTypes,
                descriptionClass: () => scope.descriptionClass,
                functor: () => scope.functor,
                description: () =>
                  scope.if$(scope.operators$.equal(scope.description, null))
                    .then$(() => scope.name).else$(() =>
                      scope.description
                    ),
              })),
          optionDescriptionPhrase: (scope) =>
            scope.func$("unparenthesize", (scope) =>
              scope.func$("t", (scope) =>
                scope.if$(scope.apply$(scope.unparenthesize, () =>
                  scope.operators$.selectOrDefault(scope.t, [
                    "descriptionClass",
                  ], null))).then$(() =>
                    scope.t["description"]
                  ).else$(() =>
                    scope.str$(() => ["(", scope.t["description"], ")"])
                  ))),
          noCheckForDocsModule: (scope) =>
            scope.attrSet$({
              ...scope.deepSet$(["config", "_module", "check"], () =>
                scope.apply$(scope.lib["mkForce"], false)),
              _file:
                "<built-in module that disables checks for the purpose of documentation generation>",
            }),
          raw: (scope) =>
            scope.apply$(scope.mkOptionType, () =>
              scope.attrSet$({
                name: "raw",
                description: "raw value",
                descriptionClass: "noun",
                check: () =>
                  scope.func$("value", (scope) =>
                    true),
                merge: () => scope.mergeOneOption,
              })),
          anything: (scope) =>
            scope.apply$(scope.mkOptionType, () =>
              scope.attrSet$({
                name: "anything",
                description: "anything",
                descriptionClass: "noun",
                check: () => scope.func$("value", (scope) => true),
                merge: () =>
                  scope.func$("loc", (scope) =>
                    scope.func$("defs", (scope) =>
                      scope.let$({
                        getType: (scope) =>
                          scope.func$("value", (scope) =>
                            scope.if$(
                              (scope.apply$(
                                scope.isAttrs,
                                () => scope.value,
                              )) && (scope.apply$(scope.isStringLike, () =>
                                scope.value)),
                            ).then$("stringCoercibleSet").else$(() =>
                              scope.apply$(
                                scope.builtins["typeOf"],
                                () => scope.value,
                              )
                            )),
                        commonType: (scope) =>
                          scope.apply$(scope["foldl'"], () =>
                            scope.func$("type", (scope) =>
                              scope.func$("def", (scope) =>
                                scope.if$(
                                  scope.operators$.equal(
                                    scope.apply$(scope.getType, () =>
                                      scope.def["value"]),
                                    scope.type,
                                  ),
                                ).then$(() => scope.type).else$(() =>
                                  scope.apply$(scope.throw, () =>
                                    scope.str$(
                                      () => [
                                        "The option `",
                                        scope.apply$(
                                          scope.showOption,
                                          () => scope.loc,
                                        ),
                                        "' has conflicting option types in ",
                                        scope.apply$(
                                          scope.showFiles,
                                          () =>
                                            scope.apply$(scope.getFiles, () =>
                                              scope.defs),
                                        ),
                                      ]
                                    ))
                                ))), () =>
                            scope.apply$(
                              scope.getType,
                              () =>
                                scope.apply$(scope.head, () =>
                                  scope.defs)["value"],
                            ), () => scope.defs),
                        mergeFunction: (scope) =>
                          scope.operators$.selectOrDefault(
                            scope.attrSet$({
                              set: () =>
                                scope.apply$(scope.attrsOf, () =>
                                  scope.anything)["merge"],
                              stringCoercibleSet: () =>
                                scope.mergeOneOption,
                              lambda: () =>
                                scope.func$("loc", (scope) =>
                                  scope.func$("defs", (scope) =>
                                    scope.func$("arg", (scope) =>
                                      scope.apply$(
                                        scope.anything["merge"],
                                        () => (scope.operators$.listConcat(
                                          scope.loc,
                                          ["<function body>"],
                                        )),
                                        () =>
                                          scope.apply$(scope.map, () =>
                                            scope.func$("def", (scope) =>
                                              scope.attrSet$({
                                                file: () => scope.def["file"],
                                                value: () =>
                                                  scope.apply$(
                                                    scope.def["value"],
                                                    () => scope.arg,
                                                  ),
                                              })), () => scope.defs),
                                      )))),
                            }),
                            [scope.commonType],
                            () => scope.mergeEqualOption,
                          ),
                      }).in$((scope) =>
                        scope.apply$(
                          scope.mergeFunction,
                          () => scope.loc,
                          () => scope.defs,
                        )
                      ))),
              })),
          unspecified: (scope) =>
            scope.apply$(scope.mkOptionType, {
              name: "unspecified",
              description: "unspecified value",
              descriptionClass: "noun",
            }),
          bool: (scope) =>
            scope.apply$(scope.mkOptionType, () =>
              scope.attrSet$({
                name: "bool",
                description: "boolean",
                descriptionClass: "noun",
                check: () => scope.isBool,
                merge: () => scope.mergeEqualOption,
              })),
          boolByOr: (scope) =>
            scope.apply$(scope.mkOptionType, () =>
              scope.attrSet$({
                name: "boolByOr",
                description: "boolean (merged using or)",
                descriptionClass: "noun",
                check: () => scope.isBool,
                merge: () =>
                  scope.func$("loc", (scope) =>
                    scope.func$("defs", (scope) =>
                      scope.apply$(
                        scope["foldl'"],
                        () =>
                          scope.func$("result", (scope) =>
                            scope.func$(
                              "def",
                              (
                                scope,
                              ) => ((scope.result) || (scope.def["value"])),
                            )),
                        false,
                        () => scope.defs,
                      ))),
              })),
          int: (scope) =>
            scope.apply$(scope.mkOptionType, () =>
              scope.attrSet$({
                name: "int",
                description: "signed integer",
                descriptionClass: "noun",
                check: () => scope.isInt,
                merge: () => scope.mergeEqualOption,
              })),
          ints: (scope) =>
            scope.let$({
              betweenDesc: (scope) =>
                scope.func$("lowest", (scope) =>
                  scope.func$("highest", (scope) =>
                    scope.str$(() => [
                      scope.apply$(scope.toString, () => scope.lowest),
                      " and ",
                      scope.apply$(scope.toString, () => scope.highest),
                      " (both inclusive)",
                    ]))),
              between: (scope) =>
                scope.func$("lowest", (scope) =>
                  scope.func$("highest", (scope) =>
                    ((_cond) => {
                      if (!_cond) {
                        throw new Error(
                          "assertion failed: " +
                            'lowest <= highest || throw "ints.between: lowest must be smaller than highest"',
                        );
                      }
                      return scope.operators$.merge(
                        scope.apply$(scope.addCheck, () => scope.int, () =>
                          scope.func$(
                            "x",
                            (
                              scope,
                            ) => ((scope.operators$.greaterThanOrEqual(
                              scope.x,
                              scope.lowest,
                            )) &&
                              (scope.operators$.lessThanOrEqual(
                                scope.x,
                                scope.highest,
                              ))),
                          )),
                        scope.attrSet$({
                          name: "intBetween",
                          description: () =>
                            scope.str$(
                              () => [
                                "integer between ",
                                scope.apply$(
                                  scope.betweenDesc,
                                  () => scope.lowest,
                                  () => scope.highest,
                                ),
                              ]
                            ),
                        }),
                      );
                    })(
                      (scope.operators$.lessThanOrEqual(
                        scope.lowest,
                        scope.highest,
                      )) ||
                      (scope.apply$(
                        scope.throw,
                        "ints.between: lowest must be smaller than highest",
                      )),
                    ))),
              ign: (scope) =>
                scope.func$("lowest", (scope) =>
                  scope.func$("highest", (scope) =>
                    scope.func$("name", (scope) =>
                      scope.func$("docStart", (scope) =>
                        scope.operators$.merge(
                          scope.apply$(scope.between, () =>
                            scope.lowest, () =>
                            scope.highest),
                          scope.attrSet$({
                            name: () =>
                              scope.name,
                            description: () =>
                              scope.operators$.add(
                                scope.docStart,
                                scope.str$(
                                  () => [
                                    "; between ",
                                    scope.apply$(
                                      scope.betweenDesc,
                                      () => scope.lowest,
                                      () => scope.highest,
                                    ),
                                  ]
                                ),
                              ),
                          }),
                        ))))),
              unsign: (scope) =>
                scope.func$("bit", (scope) =>
                  scope.func$("range", (scope) =>
                    scope.apply$(
                      scope.ign,
                      0n,
                      () => (scope.operators$.subtract(scope.range, 1n)),
                      () =>
                        scope.str$(
                          () => [
                            "unsignedInt",
                            scope.apply$(scope.toString, () => scope.bit),
                          ]
                        ),
                      () =>
                        scope.str$(() => [
                          scope.apply$(scope.toString, () => scope.bit),
                          " bit unsigned integer",
                        ]),
                    ))),
              sign: (scope) =>
                scope.func$("bit", (scope) =>
                  scope.func$("range", (scope) =>
                    scope.apply$(
                      scope.ign,
                      () => (scope.operators$.subtract(
                        0n,
                        scope.operators$.divide(scope.range, 2n),
                      )),
                      () => (scope.operators$.subtract(
                        scope.operators$.divide(scope.range, 2n),
                        1n,
                      )),
                      () =>
                        scope.str$(
                          () => [
                            "signedInt",
                            scope.apply$(scope.toString, () => scope.bit),
                          ]
                        ),
                      () =>
                        scope.str$(() => [
                          scope.apply$(scope.toString, () => scope.bit),
                          " bit signed integer",
                        ]),
                    ))),
            }).in$((scope) =>
              scope.attrSet$({
                between: () => scope.between,
                unsigned: () =>
                  scope.operators$.merge(
                    scope.apply$(scope.addCheck, () =>
                      scope.lib["types"]["int"], () =>
                      scope.func$("x", (scope) =>
                        scope.operators$.greaterThanOrEqual(scope.x, 0n))),
                    {
                      name: "unsignedInt",
                      description: "unsigned integer, meaning >=0",
                      descriptionClass: "nonRestrictiveClause",
                    },
                  ),
                positive: () =>
                  scope.operators$.merge(
                    scope.apply$(
                      scope.addCheck,
                      () => scope.lib["types"]["int"],
                      () =>
                        scope.func$(
                          "x",
                          (scope) => scope.operators$.greaterThan(scope.x, 0n),
                        ),
                    ),
                    {
                      name: "positiveInt",
                      description: "positive integer, meaning >0",
                      descriptionClass: "nonRestrictiveClause",
                    },
                  ),
                u8: () => scope.apply$(scope.unsign, 8n, 256n),
                u16: () => scope.apply$(scope.unsign, 16n, 65536n),
                u32: () =>
                  scope.apply$(scope.unsign, 32n, 4294967296n),
                s8: () =>
                  scope.apply$(scope.sign, 8n, 256n),
                s16: () =>
                  scope.apply$(scope.sign, 16n, 65536n),
                s32: () =>
                  scope.apply$(scope.sign, 32n, 4294967296n),
              })
            ),
          port: (scope) => scope.ints["u16"],
          float: (scope) =>
            scope.apply$(scope.mkOptionType, () =>
              scope.attrSet$({
                name: "float",
                description: "floating point number",
                descriptionClass: "noun",
                check: () => scope.isFloat,
                merge: () => scope.mergeEqualOption,
              })),
          number: (scope) =>
            scope.apply$(scope.either, () => scope.int, () => scope.float),
          numbers: (scope) =>
            scope.let$({
              betweenDesc: (scope) =>
                scope.func$("lowest", (scope) =>
                  scope.func$("highest", (scope) =>
                    scope.str$(
                      () => [
                        scope.apply$(
                          scope.builtins["toJSON"],
                          () => scope.lowest,
                        ),
                        " and ",
                        scope.apply$(
                          scope.builtins["toJSON"],
                          () => scope.highest,
                        ),
                        " (both inclusive)",
                      ]
                    ))),
            }).in$((scope) =>
              scope.attrSet$({
                between: () =>
                  scope.func$("lowest", (scope) =>
                    scope.func$("highest", (scope) =>
                      ((_cond) => {
                        if (!_cond) {
                          throw new Error(
                            "assertion failed: " +
                              'lowest <= highest || throw "numbers.between: lowest must be smaller than highest"',
                          );
                        }
                        return scope.operators$.merge(
                          scope.apply$(scope.addCheck, () => scope.number, () =>
                            scope.func$(
                              "x",
                              (
                                scope,
                              ) => ((scope.operators$.greaterThanOrEqual(
                                scope.x,
                                scope.lowest,
                              )) &&
                                (scope.operators$.lessThanOrEqual(
                                  scope.x,
                                  scope.highest,
                                ))),
                            )),
                          scope.attrSet$({
                            name: "numberBetween",
                            description: () =>
                              scope.str$(
                                () => [
                                  "integer or floating point number between ",
                                  scope.apply$(scope.betweenDesc, () =>
                                    scope.lowest, () =>
                                    scope.highest),
                                ]
                              ),
                          }),
                        );
                      })(
                        (scope.operators$.lessThanOrEqual(
                          scope.lowest,
                          scope.highest,
                        )) ||
                        (scope.apply$(
                          scope.throw,
                          "numbers.between: lowest must be smaller than highest",
                        )),
                      ))),
                nonnegative: () =>
                  scope.operators$.merge(
                    scope.apply$(scope.addCheck, () =>
                      scope.number, () =>
                      scope.func$("x", (scope) =>
                        scope.operators$.greaterThanOrEqual(scope.x, 0n))),
                    {
                      name: "numberNonnegative",
                      description:
                        "nonnegative integer or floating point number, meaning >=0",
                      descriptionClass: "nonRestrictiveClause",
                    },
                  ),
                positive: () =>
                  scope.operators$.merge(
                    scope.apply$(scope.addCheck, () =>
                      scope.number, () =>
                      scope.func$("x", (scope) =>
                        scope.operators$.greaterThan(scope.x, 0n))),
                    {
                      name: "numberPositive",
                      description:
                        "positive integer or floating point number, meaning >0",
                      descriptionClass: "nonRestrictiveClause",
                    },
                  ),
              })
            ),
          str: (scope) =>
            scope.apply$(scope.mkOptionType, () =>
              scope.attrSet$({
                name: "str",
                description: "string",
                descriptionClass: "noun",
                check: () => scope.isString,
                merge: () => scope.mergeEqualOption,
              })),
          nonEmptyStr: (scope) =>
            scope.apply$(scope.mkOptionType, () =>
              scope.attrSet$({
                name: "nonEmptyStr",
                description: "non-empty string",
                descriptionClass: "noun",
                check: () =>
                  scope.func$(
                    "x",
                    (scope) => ((scope.apply$(scope.str["check"], () =>
                      scope.x)) &&
                      (scope.operators$.equal(
                        scope.apply$(scope.builtins["match"], "[ \t\n]*", () =>
                          scope.x),
                        null,
                      ))),
                  ),
                merge: () => scope.str.merge,
              })),
          singleLineStr: (scope) =>
            scope.let$({
              check: (scope) =>
                scope.apply$(scope.strMatching, "[^\n\r]*\n?")["check"],
              merge: (scope) =>
                scope.apply$(scope.strMatching, "[^\n\r]*\n?")["merge"],
              removeNewlineSuffix: (scope) =>
                scope.apply$(scope.lib["removeSuffix"], "\n"),
            }).in$((scope) =>
              scope.apply$(scope.mkOptionType, () =>
                scope.attrSet$({
                  name: "singleLineStr",
                  description:
                    "(optionally newline-terminated) single-line string",
                  descriptionClass: "noun",
                  check: () => scope.check,
                  merge: () =>
                    scope.func$(
                      "loc",
                      (scope) =>
                        scope.func$("defs", (scope) =>
                          scope.apply$(scope.removeNewlineSuffix, () =>
                            scope.apply$(scope.merge, () =>
                              scope.loc, () =>
                              scope.defs))),
                    ),
                }))
            ),
          strMatching: (scope) =>
            scope.func$("pattern", (scope) =>
              scope.apply$(scope.mkOptionType, () =>
                scope.attrSet$({
                  name: () =>
                    scope.str$(
                      () => [
                        "strMatching ",
                        scope.apply$(
                          scope.escapeNixString,
                          () => scope.pattern,
                        ),
                      ]
                    ),
                  description: () =>
                    scope.str$(
                      () => ["string matching the pattern ", scope.pattern]
                    ),
                  descriptionClass: "noun",
                  check: () =>
                    scope.func$(
                      "x",
                      (scope) => ((scope.apply$(scope.str["check"], () =>
                        scope.x)) &&
                        (scope.operators$.notEqual(
                          scope.apply$(scope.builtins["match"], () =>
                            scope.pattern, () =>
                            scope.x),
                          null,
                        ))),
                    ),
                  merge: () => scope.str.merge,
                  functor: () =>
                    scope.operators$.merge(
                      scope.apply$(scope.defaultFunctor, "strMatching"),
                      scope.attrSet$({
                        type: () =>
                          scope.func$(
                            "payload",
                            (scope) =>
                              scope.apply$(scope.strMatching, () =>
                                scope.payload["pattern"]),
                          ),
                        payload: () =>
                          scope.attrSet$({
                            pattern: () => scope.pattern,
                          }),
                        binOp: () =>
                          scope.func$("lhs", (scope) =>
                            scope.func$("rhs", (scope) =>
                              scope.if$(
                                scope.operators$.equal(scope.lhs, scope.rhs),
                              ).then$(() =>
                                scope.lhs
                              ).else$(null))),
                      }),
                    ),
                }))),
          separatedString: (scope) =>
            scope.func$("sep", (scope) =>
              scope.apply$(scope.mkOptionType, () =>
                scope.recAttrSet$({
                  name: "separatedString",
                  description: (scope) =>
                    scope.str$(
                      () => [
                        "strings concatenated with ",
                        scope.apply$(scope.builtins["toJSON"], () => scope.sep),
                      ]
                    ),
                  descriptionClass: "noun",
                  check: (scope) => scope.isString,
                  merge: (scope) =>
                    scope.func$(
                      "loc",
                      (scope) =>
                        scope.func$("defs", (scope) =>
                          scope.apply$(scope.concatStringsSep, () =>
                            scope.sep, () =>
                            scope.apply$(scope.getValues, () =>
                              scope.defs))),
                    ),
                  functor: (scope) =>
                    scope.operators$.merge(
                      scope.apply$(scope.defaultFunctor, () => scope.name),
                      scope.attrSet$({
                        payload: () =>
                          scope.attrSet$({
                            sep: () => scope.sep,
                          }),
                        type: () =>
                          scope.func$("payload", (scope) =>
                            scope.apply$(
                              scope.lib["types"]["separatedString"],
                              () => scope.payload["sep"],
                            )),
                        binOp: () =>
                          scope.func$("lhs", (scope) =>
                            scope.func$("rhs", (scope) =>
                              scope.if$(
                                scope.operators$.equal(
                                  scope.lhs["sep"],
                                  scope.rhs["sep"],
                                ),
                              ).then$(() =>
                                scope.attrSet$({
                                  sep: () =>
                                    scope.lhs.sep,
                                })
                              ).else$(null))),
                      }),
                    ),
                }))),
          lines: (scope) => scope.apply$(scope.separatedString, "\n"),
          commas: (scope) => scope.apply$(scope.separatedString, ","),
          envVar: (scope) => scope.apply$(scope.separatedString, ":"),
          passwdEntry: (scope) =>
            scope.func$("entryType", (scope) =>
              scope.operators$.merge(
                scope.apply$(scope.addCheck, () =>
                  scope.entryType, () =>
                  scope.func$("str", (scope) =>
                    scope.operators$.negate(
                      (scope.apply$(scope.hasColonInfix, () =>
                        scope.str)) ||
                      (scope.apply$(scope.hasNewlineInfix, () => scope.str)),
                    ))),
                scope.attrSet$({
                  name: () =>
                    scope.str$(() => ["passwdEntry ", scope.entryType["name"]]),
                  description: () =>
                    scope.str$(
                      () => [
                        scope.apply$(scope.optionDescriptionPhrase, () =>
                          scope.func$(
                            "class",
                            (scope) =>
                              scope.operators$.equal(scope.class, "noun"),
                          ), () => scope.entryType),
                        ", not containing newlines or colons",
                      ]
                    ),
                  descriptionClass: "nonRestrictiveClause",
                }),
              )),
          attrs: (scope) =>
            scope.apply$(scope.mkOptionType, () =>
              scope.attrSet$({
                name: "attrs",
                description: "attribute set",
                check: () => scope.isAttrs,
                merge: () =>
                  scope.func$("loc", (scope) =>
                    scope.apply$(
                      scope["foldl'"],
                      () =>
                        scope.func$("res", (scope) =>
                          scope.func$("def", (scope) =>
                            scope.operators$.merge(
                              scope.res,
                              scope.def["value"],
                            ))),
                      {},
                    )),
                emptyValue: { value: {} },
              })),
          fileset: (scope) =>
            scope.apply$(scope.mkOptionType, () =>
              scope.attrSet$({
                name: "fileset",
                description: "fileset",
                descriptionClass: "noun",
                check: () => scope.isFileset,
                merge: () =>
                  scope.func$(
                    "loc",
                    (scope) =>
                      scope.func$("defs", (scope) =>
                        scope.apply$(scope.unions, () =>
                          scope.apply$(scope.map, () =>
                            scope.func$("x", (scope) =>
                              scope.x["value"]), () =>
                            scope.defs))),
                  ),
                ...scope.deepSet$(["emptyValue", "value"], () => scope.empty),
              })),
          package: (scope) =>
            scope.apply$(scope.mkOptionType, () =>
              scope.attrSet$({
                name: "package",
                descriptionClass: "noun",
                check: () =>
                  scope.func$(
                    "x",
                    (scope) => ((scope.apply$(scope.isDerivation, () =>
                      scope.x)) || (scope.apply$(scope.isStorePath, () =>
                        scope.x))),
                  ),
                merge: () =>
                  scope.func$("loc", (scope) =>
                    scope.func$("defs", (scope) =>
                      scope.let$({
                        res: (scope) =>
                          scope.apply$(
                            scope.mergeOneOption,
                            () => scope.loc,
                            () => scope.defs,
                          ),
                      }).in$((scope) =>
                        scope.if$(
                          (scope.apply$(scope.isPath, () => scope.res)) ||
                          ((scope.apply$(scope.isString, () => scope.res)) &&
                            (scope.operators$.negate(
                              scope.apply$(scope.hasContext, () => scope.res),
                            ))),
                        ).then$(() =>
                          scope.apply$(scope.toDerivation, () => scope.res)
                        ).else$(() => scope.res)
                      ))),
              })),
          shellPackage: (scope) =>
            scope.operators$.merge(
              scope.package,
              scope.attrSet$({
                check: () =>
                  scope.func$(
                    "x",
                    (scope) => ((scope.apply$(scope.isDerivation, () =>
                      scope.x)) &&
                      (scope.apply$(
                        scope.hasAttr,
                        "shellPath",
                        () => scope.x,
                      ))),
                  ),
              }),
            ),
          pkgs: (scope) =>
            scope.apply$(
              scope.addCheck,
              () => (scope.operators$.merge(
                scope.apply$(scope.unique, {
                  message:
                    "A Nixpkgs pkgs set can not be merged with another pkgs set.",
                }, () => scope.attrs),
                {
                  name: "pkgs",
                  descriptionClass: "noun",
                  description: "Nixpkgs package set",
                },
              )),
              () =>
                scope.func$("x", (scope) =>
                  scope.operators$.equal(
                    scope.operators$.selectOrDefault(scope.x, ["_type"], null),
                    "pkgs",
                  )),
            ),
          path: (scope) => scope.apply$(scope.pathWith, { absolute: true }),
          pathInStore: (scope) =>
            scope.apply$(scope.pathWith, { inStore: true }),
          externalPath: (scope) =>
            scope.apply$(scope.pathWith, { absolute: true, inStore: false }),
          pathWith: (scope) =>
            scope.func$({ inStore: null, absolute: null }, (scope) =>
              scope.if$(
                (((scope.operators$.notEqual(scope.inStore, null)) &&
                  (scope.operators$.notEqual(scope.absolute, null))) &&
                  (scope.inStore)) && (scope.operators$.negate(scope.absolute)),
              ).then$(() =>
                scope.apply$(
                  scope.throw,
                  "In pathWith, inStore means the path must be absolute",
                )
              ).else$(() =>
                scope.apply$(scope.mkOptionType, () =>
                  scope.attrSet$({
                    name: "path",
                    description:
                      () => (scope.operators$.add(
                        scope.operators$.add(
                          scope.if$(
                            scope.operators$.equal(scope.absolute, null),
                          ).then$("").else$(() =>
                            scope.if$(scope.absolute).then$("absolute ").else$(
                              "relative ",
                            )
                          ),
                          "path",
                        ),
                        scope.if$(scope.operators$.equal(scope.inStore, null))
                          .then$("").else$(() =>
                            scope.if$(scope.inStore).then$(" in the Nix store")
                              .else$(" not in the Nix store")
                          ),
                      )),
                    descriptionClass: "noun",
                    merge: () => scope.mergeEqualOption,
                    functor: () =>
                      scope.operators$.merge(
                        scope.apply$(scope.defaultFunctor, "path"),
                        scope.attrSet$({
                          type: () => scope.pathWith,
                          payload: () =>
                            scope.attrSet$({
                              inStore: () => scope.inStore,
                              absolute: () => scope.absolute,
                            }),
                          binOp: () =>
                            scope.func$("lhs", (scope) =>
                              scope.func$("rhs", (scope) =>
                                scope.if$(
                                  scope.operators$.equal(scope.lhs, scope.rhs),
                                ).then$(() =>
                                  scope.lhs
                                ).else$(null))),
                        }),
                      ),
                    check: () =>
                      scope.func$("x", (scope) =>
                        scope.let$({
                          isInStore: (scope) =>
                            scope.apply$(
                              scope.hasStorePathPrefix,
                              () =>
                                scope.if$(
                                  scope.apply$(scope.isPath, () => scope.x),
                                ).then$(() => scope.x).else$(() =>
                                  scope.operators$.add(
                                    new scope.Path$(["/."], []),
                                    scope.apply$(
                                      scope
                                        .builtins["unsafeDiscardStringContext"],
                                      () => scope.x,
                                    ),
                                  )
                                ),
                            ),
                          isAbsolute: (scope) =>
                            scope.operators$.equal(
                              scope.apply$(scope.substring, 0n, 1n, () =>
                                scope.apply$(scope.toString, () =>
                                  scope.x)),
                              "/",
                            ),
                          isExpectedType: (scope) =>
                            scope.if$(
                              (scope.operators$.equal(scope.inStore, null)) ||
                              (scope.inStore),
                            ).then$(() =>
                              scope.apply$(scope.isStringLike, () => scope.x)
                            ).else$(() =>
                              scope.apply$(scope.isString, () => scope.x)
                            ),
                        }).in$((
                          scope,
                        ) => (((scope.isExpectedType) &&
                          ((scope.operators$.equal(scope.inStore, null)) ||
                            (scope.operators$.equal(
                              scope.inStore,
                              scope.isInStore,
                            )))) &&
                          ((scope.operators$.equal(scope.absolute, null)) ||
                            (scope.operators$.equal(
                              scope.absolute,
                              scope.isAbsolute,
                            ))))
                        )),
                  }))
              )),
          listOf: (scope) =>
            scope.func$("elemType", (scope) =>
              scope.apply$(scope.mkOptionType, () =>
                scope.recAttrSet$({
                  name: "listOf",
                  description: (scope) =>
                    scope.str$(
                      () => [
                        "list of ",
                        scope.apply$(scope.optionDescriptionPhrase, () =>
                          scope.func$(
                            "class",
                            (
                              scope,
                            ) => ((scope.operators$.equal(
                              scope.class,
                              "noun",
                            )) ||
                              (scope.operators$.equal(
                                scope.class,
                                "composite",
                              ))),
                          ), () => scope.elemType),
                      ]
                    ),
                  descriptionClass: "composite",
                  check: (scope) =>
                    scope.attrSet$({
                      __functor: () =>
                        scope.func$("_self", (scope) => scope.isList),
                      isV2MergeCoherent: true,
                    }),
                  merge: (scope) =>
                    scope.attrSet$({
                      __functor: () =>
                        scope.func$(
                          "self",
                          (scope) =>
                            scope.func$("loc", (scope) =>
                              scope.func$("defs", (scope) =>
                                scope.apply$(scope.self["v2"], () =>
                                  scope.attrSet$({
                                    loc: () =>
                                      scope.loc,
                                    defs: () =>
                                      scope.defs,
                                  }))["value"])),
                        ),
                      v2: () =>
                        scope.func$({
                          loc: scope.nixArg$.NoDefault,
                          defs: scope.nixArg$.NoDefault,
                        }, (scope) =>
                          scope.let$({
                            evals: (scope) =>
                              scope.apply$(
                                scope.filter,
                                () =>
                                  scope.func$("x", (scope) =>
                                    scope.operators$.hasAttr(
                                      scope.x["optionalValue"],
                                      "value",
                                    )),
                                () =>
                                  scope.apply$(scope.concatLists, () =>
                                    scope.apply$(scope.imap1, () =>
                                      scope.func$("n", (scope) =>
                                        scope.func$("def", (scope) =>
                                          scope.apply$(scope.imap1, () =>
                                            scope.func$("m", (scope) =>
                                              scope.func$("def'", (scope) =>
                                                scope.apply$(
                                                  scope.mergeDefinitions,
                                                  () => (scope.operators$
                                                    .listConcat(scope.loc, [
                                                      scope.str$(
                                                        () => [
                                                          "[definition ",
                                                          scope.apply$(
                                                            scope.toString,
                                                            () => scope.n,
                                                          ),
                                                          "-entry ",
                                                          scope.apply$(
                                                            scope.toString,
                                                            () => scope.m,
                                                          ),
                                                          "]",
                                                        ]
                                                      ),
                                                    ])),
                                                  () => scope.elemType,
                                                  () => [scope.attrSet$({
                                                    file: () =>
                                                      scope.def.file,
                                                    value: () =>
                                                      scope["def'"],
                                                  })],
                                                ))), () =>
                                            scope.def["value"]))), () =>
                                      scope.defs)),
                              ),
                          }).in$((scope) =>
                            scope.attrSet$({
                              headError: () =>
                                scope.apply$(scope.checkDefsForError, () =>
                                  scope.check, () =>
                                  scope.loc, () =>
                                  scope.defs),
                              value: () =>
                                scope.apply$(scope.map, () =>
                                  scope.func$("x", (scope) =>
                                    scope.operators$.selectOrDefault(scope.x, [
                                      "optionalValue",
                                      "value",
                                    ], () =>
                                      scope.x["mergedValue"])), () =>
                                  scope.evals),
                              ...scope.deepSet$(["valueMeta", "list"], () =>
                                scope.apply$(
                                  scope.map,
                                  () =>
                                    scope.func$(
                                      "v",
                                      (scope) =>
                                        scope
                                          .v["checkedAndMerged"]["valueMeta"],
                                    ),
                                  () => scope.evals,
                                )),
                            })
                          )),
                    }),
                  emptyValue: { value: [] },
                  getSubOptions: (scope) =>
                    scope.func$(
                      "prefix",
                      (scope) =>
                        scope.apply$(
                          scope.elemType["getSubOptions"],
                          () => (scope.operators$.listConcat(scope.prefix, [
                            "*",
                          ])),
                        ),
                    ),
                  getSubModules: (scope) => scope.elemType["getSubModules"],
                  substSubModules: (scope) =>
                    scope.func$(
                      "m",
                      (scope) =>
                        scope.apply$(scope.listOf, () =>
                          scope.apply$(scope.elemType["substSubModules"], () =>
                            scope.m)),
                    ),
                  functor: (scope) =>
                    scope.operators$.merge(
                      scope.apply$(scope.elemTypeFunctor, () =>
                        scope.name, () =>
                        scope.attrSet$({
                          elemType: () =>
                            scope.elemType,
                        })),
                      scope.attrSet$({
                        type: () =>
                          scope.func$("payload", (scope) =>
                            scope.apply$(scope.lib["types"]["listOf"], () =>
                              scope.payload["elemType"])),
                      }),
                    ),
                  ...scope.deepSet$(
                    ["nestedTypes", "elemType"],
                    (scope) => scope.elemType,
                  ),
                }))),
          nonEmptyListOf: (scope) =>
            scope.func$("elemType", (scope) =>
              scope.let$({
                list: (scope) =>
                  scope.apply$(scope.addCheck, () =>
                    scope.apply$(scope.lib["types"]["listOf"], () =>
                      scope.elemType), () =>
                    scope.func$("l", (scope) =>
                      scope.operators$.notEqual(scope.l, []))),
              }).in$((scope) =>
                scope.operators$.merge(
                  scope.list,
                  scope.attrSet$({
                    description: () =>
                      scope.str$(
                        () => [
                          "non-empty ",
                          scope.apply$(
                            scope.optionDescriptionPhrase,
                            () =>
                              scope.func$(
                                "class",
                                (scope) =>
                                  scope.operators$.equal(scope.class, "noun"),
                              ),
                            () => scope.list,
                          ),
                        ]
                      ),
                    emptyValue: {},
                    substSubModules: () =>
                      scope.func$(
                        "m",
                        (scope) =>
                          scope.apply$(scope.nonEmptyListOf, () =>
                            scope.apply$(
                              scope.elemType["substSubModules"],
                              () => scope.m,
                            )),
                      ),
                  }),
                )
              )),
          attrListOf: (scope) =>
            scope.func$(
              "elemType",
              (scope) =>
                scope.apply$(scope.attrListWith, () =>
                  scope.attrSet$({
                    elemType: () => scope.elemType,
                  })),
            ),
          attrListWith: (scope) =>
            scope.func$({
              elemType: scope.nixArg$.NoDefault,
              asAttrs: false,
              mergeAttrValues: (scope) =>
                scope.func$(
                  "_name",
                  (scope) => scope.func$("values", (scope) => scope.values),
                ),
            }, (scope) =>
              scope.apply$(scope.mkOptionType, () =>
                scope.recAttrSet$({
                  name: "attrListOf",
                  description: (scope) =>
                    scope.str$(
                      () => [
                        "attribute list of ",
                        scope.apply$(scope.optionDescriptionPhrase, () =>
                          scope.func$(
                            "class",
                            (
                              scope,
                            ) => ((scope.operators$.equal(
                              scope.class,
                              "noun",
                            )) ||
                              (scope.operators$.equal(
                                scope.class,
                                "composite",
                              ))),
                          ), () => scope.elemType),
                      ]
                    ),
                  descriptionClass: "composite",
                  check: (scope) =>
                    scope.attrSet$({
                      __functor: () =>
                        scope.func$("_self", (scope) =>
                          scope.func$(
                            "x",
                            (
                              scope,
                            ) => ((scope.apply$(scope.isList, () => scope.x)) ||
                              (scope.apply$(scope.isAttrs, () => scope.x))),
                          )),
                      isV2MergeCoherent: true,
                    }),
                  merge: (scope) =>
                    scope.attrSet$({
                      __functor: () =>
                        scope.func$("self", (scope) =>
                          scope.func$("loc", (scope) =>
                            scope.func$("defs", (scope) =>
                              scope.apply$(scope.self["v2"], () =>
                                scope.attrSet$({
                                  loc: () =>
                                    scope.loc,
                                  defs: () =>
                                    scope.defs,
                                }))["value"]))),
                      v2: () =>
                        scope.func$({
                          loc: scope.nixArg$.NoDefault,
                          defs: scope.nixArg$.NoDefault,
                        }, (scope) =>
                          scope.let$({
                            peelProperties: (scope) =>
                              scope.func$("value", (scope) =>
                                scope.let$({
                                  type: (scope) =>
                                    scope.operators$.selectOrDefault(
                                      scope.value,
                                      ["_type"],
                                      null,
                                    ),
                                }).in$((scope) =>
                                  scope.if$(
                                    scope.operators$.equal(scope.type, "order"),
                                  ).then$(() =>
                                    scope.let$({
                                      inner: (scope) =>
                                        scope.apply$(scope.peelProperties, () =>
                                          scope.value["content"]),
                                    }).in$((scope) =>
                                      scope.attrSet$({
                                        value: () =>
                                          scope.inner.value,
                                        overridePrio: () =>
                                          scope.inner.overridePrio,
                                        prio: () =>
                                          scope.value["priority"],
                                      })
                                    )
                                  ).elseIf$(() =>
                                    scope.operators$.equal(
                                      scope.type,
                                      "override",
                                    )
                                  ).then$(() =>
                                    scope.let$({
                                      inner: (scope) =>
                                        scope.apply$(scope.peelProperties, () =>
                                          scope.value["content"]),
                                    }).in$((scope) =>
                                      scope.attrSet$({
                                        prio: () =>
                                          scope.inner.prio,
                                        overridePrio: () =>
                                          scope.value["priority"],
                                        value: () =>
                                          scope.apply$(scope.mkOverride, () =>
                                            scope.value["priority"], () =>
                                            scope.inner["value"]),
                                      })
                                    )
                                  ).else$(() =>
                                    scope.attrSet$({
                                      value: () =>
                                        scope.value,
                                      prio: () =>
                                        scope.defaultOrderPriority,
                                      overridePrio: () =>
                                        scope.defaultOverridePriority,
                                    })
                                  )
                                )),
                            extractItem: (scope) =>
                              scope.func$("file", (scope) =>
                                scope.func$("raw", (scope) =>
                                  scope.let$({
                                    hasOrder: (scope) =>
                                      scope.apply$(scope.isType, "order", () =>
                                        scope.raw),
                                    item: (scope) =>
                                      scope.if$(scope.hasOrder).then$(() =>
                                        scope.raw["content"]
                                      ).else$(() =>
                                        scope.raw
                                      ),
                                    key: (scope) =>
                                      scope.apply$(scope.head, () =>
                                        scope.apply$(scope.attrNames, () =>
                                          scope.item)),
                                    peeled: (scope) =>
                                      scope.apply$(scope.peelProperties, () =>
                                        scope.item[scope.key]),
                                  }).in$((scope) =>
                                    scope.if$(
                                      (scope.apply$(
                                        scope.isAttrs,
                                        () => scope.item,
                                      )) &&
                                      (scope.operators$.equal(
                                        scope.apply$(scope.length, () =>
                                          scope.apply$(scope.attrNames, () =>
                                            scope.item)),
                                        1n,
                                      )),
                                    ).then$(() =>
                                      scope.operators$.merge(
                                        scope.peeled,
                                        scope.attrSet$({
                                          file: () => scope.file,
                                          key: () =>
                                            scope.key,
                                          prio: () =>
                                            scope.if$(scope.hasOrder).then$(
                                              () =>
                                                scope.raw["priority"]
                                            ).else$(() =>
                                              scope.peeled["prio"]
                                            ),
                                        }),
                                      )
                                    ).else$(() =>
                                      scope.apply$(scope.throw, () =>
                                        scope.str$(
                                          () => [
                                            "A definition for option `",
                                            scope.apply$(
                                              scope.showOption,
                                              () => scope.loc,
                                            ),
                                            "' is not of type `",
                                            scope.description,
                                            "'. ",
                                            scope.if$(
                                              scope.operators$.negate(
                                                scope.apply$(
                                                  scope.isAttrs,
                                                  () => scope.item,
                                                ),
                                              ),
                                            ).then$(() =>
                                              scope.str$(
                                                () => [
                                                  "Each list element must be an attribute set, but got ",
                                                  scope.apply$(
                                                    scope.builtins["typeOf"],
                                                    () => scope.item,
                                                  ),
                                                ]
                                              )
                                            ).else$(() =>
                                              scope.str$(
                                                () => [
                                                  "Each list element must be a single-key attribute set, but got ",
                                                  scope.apply$(
                                                    scope.toString,
                                                    () =>
                                                      scope.apply$(
                                                        scope.length,
                                                        () =>
                                                          scope.apply$(
                                                            scope.attrNames,
                                                            () => scope.item,
                                                          ),
                                                      ),
                                                  ),
                                                  " keys",
                                                ]
                                              )
                                            ),
                                            ".",
                                            scope.apply$(
                                              scope.showDefs,
                                              () => [scope.attrSet$({
                                                file: () => scope.file,
                                                value: () => scope.raw,
                                              })],
                                            ),
                                          ]
                                        ))
                                    )
                                  ))),
                            defToItems: (scope) =>
                              scope.func$("def", (scope) =>
                                scope.if$(scope.apply$(scope.isList, () =>
                                  scope.def["value"])).then$(() =>
                                    scope.apply$(scope.map, () =>
                                      scope.apply$(scope.extractItem, () =>
                                        scope.def["file"]), () =>
                                      scope.def["value"])
                                  ).else$(() =>
                                    scope.apply$(scope.map, () =>
                                      scope.func$("key", (scope) =>
                                        scope.operators$.merge(
                                          scope.apply$(
                                            scope.peelProperties,
                                            () => scope.def["value"][scope.key],
                                          ),
                                          scope.attrSet$({
                                            file: () => scope.def.file,
                                            key: () => scope.key,
                                          }),
                                        )), () =>
                                      scope.apply$(scope.attrNames, () =>
                                        scope.def["value"]))
                                  )),
                            allItems: (scope) =>
                              scope.apply$(scope.concatMap, () =>
                                scope.defToItems, () =>
                                scope.defs),
                            winningOverridePrio: (scope) =>
                              scope.apply$(
                                scope["foldl'"],
                                () =>
                                  scope.func$("acc", (scope) =>
                                    scope.func$("item", (scope) =>
                                      scope.let$({
                                        prev: (scope) =>
                                          scope.operators$.selectOrDefault(
                                            scope.acc,
                                            [scope.item["key"]],
                                            () => scope.defaultOverridePriority,
                                          ),
                                      }).in$((scope) =>
                                        scope.if$(
                                          scope.operators$.lessThan(
                                            scope.item["overridePrio"],
                                            scope.prev,
                                          ),
                                        ).then$(() =>
                                          scope.operators$.merge(
                                            scope.acc,
                                            scope.attrSet$({
                                              ...scope.deepSet$(
                                                [scope.item["key"]],
                                                () =>
                                                  scope.item["overridePrio"],
                                              ),
                                            }),
                                          )
                                        ).else$(() => scope.acc)
                                      ))),
                                {},
                                () => scope.allItems,
                              ),
                            items: (scope) =>
                              scope.apply$(scope.sort, () =>
                                scope.func$("a", (scope) =>
                                  scope.func$("b", (scope) =>
                                    scope.operators$.lessThan(
                                      scope.a["prio"],
                                      scope.b["prio"],
                                    ))), () =>
                                scope.apply$(scope.filter, () =>
                                  scope.func$("item", (scope) =>
                                    scope.operators$.equal(
                                      scope.item["overridePrio"],
                                      scope.operators$.selectOrDefault(
                                        scope.winningOverridePrio,
                                        [scope.item["key"]],
                                        () =>
                                          scope.defaultOverridePriority,
                                      ),
                                    )), () =>
                                  scope.allItems)),
                            evals: (scope) =>
                              scope.apply$(scope.filter, () =>
                                scope.func$("e", (scope) =>
                                  scope.operators$.hasAttr(
                                    scope.e["eval"]["optionalValue"],
                                    "value",
                                  )), () =>
                                scope.apply$(scope.map, () =>
                                  scope.func$("item", (scope) =>
                                    scope.attrSet$({
                                      key: () =>
                                        scope.item.key,
                                      file: () =>
                                        scope.item.file,
                                      prio: () =>
                                        scope.item.prio,
                                      eval: () =>
                                        scope.apply$(
                                          scope.mergeDefinitions,
                                          () => (scope.operators$.listConcat(
                                            scope.loc,
                                            [scope.item["key"]],
                                          )),
                                          () => scope.elemType,
                                          () => [scope.attrSet$({
                                            file: () => scope.item.file,
                                            value: () =>
                                              scope.item.value,
                                          })],
                                        ),
                                    })), () =>
                                  scope.items)),
                            attrListValue: (scope) =>
                              scope.apply$(scope.map, () =>
                                scope.func$("e", (scope) =>
                                  scope.attrSet$({
                                    ...scope.deepSet$([scope.e["key"]], () =>
                                      scope.operators$.selectOrDefault(
                                        scope.e,
                                        ["eval", "optionalValue", "value"],
                                        () => scope.e["eval"]["mergedValue"],
                                      )),
                                  })), () =>
                                scope.evals),
                          }).in$((scope) =>
                            scope.attrSet$({
                              headError: () =>
                                scope.apply$(scope.checkDefsForError, () =>
                                  scope.check, () =>
                                  scope.loc, () =>
                                  scope.defs),
                              value: () =>
                                scope.if$(scope.asAttrs).then$(() =>
                                  scope.apply$(scope.zipAttrsWith, () =>
                                    scope.mergeAttrValues, () =>
                                    scope.attrListValue)
                                ).else$(() =>
                                  scope.attrListValue
                                ),
                              ...scope.deepSet$(["valueMeta", "attrList"], () =>
                                scope.apply$(scope.map, () =>
                                  scope.func$("e", (scope) =>
                                    scope
                                      .e["eval"]["checkedAndMerged"][
                                        "valueMeta"
                                      ]), () =>
                                  scope.evals)),
                              ...scope.deepSet$(
                                ["valueMeta", "attrListValue"],
                                () => scope.attrListValue,
                              ),
                              ...scope.deepSet$(
                                ["valueMeta", "definitions"],
                                () =>
                                  scope.apply$(scope.map, () =>
                                    scope.func$("e", (scope) =>
                                      scope.apply$(scope.mkDefinition, () =>
                                        scope.attrSet$({
                                          file: () => scope.e.file,
                                          value: () =>
                                            scope.apply$(scope.mkOrder, () =>
                                              scope.e["prio"], () =>
                                              scope.attrSet$({
                                                ...scope.deepSet$([
                                                  scope.e["key"],
                                                ], () =>
                                                  scope.operators$
                                                    .selectOrDefault(scope.e, [
                                                      "eval",
                                                      "optionalValue",
                                                      "value",
                                                    ], () =>
                                                      scope
                                                        .e["eval"][
                                                          "mergedValue"
                                                        ])),
                                              })),
                                        }))), () =>
                                    scope.evals),
                              ),
                            })
                          )),
                    }),
                  emptyValue: (scope) =>
                    scope.attrSet$({
                      value: () =>
                        scope.if$(scope.asAttrs).then$({}).else$([]),
                    }),
                  getSubOptions: (scope) =>
                    scope.func$("prefix", (scope) =>
                      scope.apply$(
                        scope.elemType["getSubOptions"],
                        () => (scope.operators$.listConcat(scope.prefix, [
                          "*",
                        ])),
                      )),
                  getSubModules: (scope) =>
                    scope.elemType["getSubModules"],
                  substSubModules: (scope) =>
                    scope.func$("m", (scope) =>
                      scope.apply$(scope.attrListWith, () =>
                        scope.attrSet$({
                          asAttrs: () =>
                            scope.asAttrs,
                          mergeAttrValues: () =>
                            scope.mergeAttrValues,
                          elemType: () =>
                            scope.apply$(
                              scope.elemType["substSubModules"],
                              () => scope.m,
                            ),
                        }))),
                  typeMerge: (scope) =>
                    scope.func$("t", (scope) =>
                      null),
                  ...scope.deepSet$(["nestedTypes", "elemType"], (scope) =>
                    scope.elemType),
                }))),
          attrsOf: (scope) =>
            scope.func$(
              "elemType",
              (scope) =>
                scope.apply$(scope.attrsWith, () =>
                  scope.attrSet$({
                    elemType: () => scope.elemType,
                  })),
            ),
          lazyAttrsOf: (scope) =>
            scope.func$(
              "elemType",
              (scope) =>
                scope.apply$(scope.attrsWith, () =>
                  scope.attrSet$({
                    elemType: () => scope.elemType,
                    lazy: true,
                  })),
            ),
          attrsWith: (scope) =>
            scope.let$({
              pushPositions: (scope) =>
                scope.apply$(
                  scope.map,
                  () =>
                    scope.func$("def", (scope) =>
                      scope.apply$(scope.mapAttrs, () =>
                        scope.func$("n", (scope) =>
                          scope.func$("v", (scope) =>
                            scope.attrSet$({
                              file: () =>
                                scope.def.file,
                              value: () =>
                                scope.v,
                            }))), () =>
                        scope.def["value"])),
                ),
              binOp: (scope) =>
                scope.func$(
                  "lhs",
                  (scope) =>
                    scope.func$("rhs", (scope) =>
                      scope.let$({
                        elemType: (scope) =>
                          scope.apply$(
                            scope.lhs["elemType"]["typeMerge"],
                            () => scope.rhs["elemType"]["functor"],
                          ),
                        lazy: (scope) =>
                          scope.if$(
                            scope.operators$.equal(
                              scope.lhs["lazy"],
                              scope.rhs["lazy"],
                            ),
                          ).then$(() => scope.lhs["lazy"]).else$(null),
                        placeholder: (scope) =>
                          scope.if$(
                            scope.operators$.equal(
                              scope.lhs["placeholder"],
                              scope.rhs["placeholder"],
                            ),
                          ).then$(() => scope.lhs["placeholder"]).elseIf$(() =>
                            scope.operators$.equal(
                              scope.lhs["placeholder"],
                              "name",
                            )
                          ).then$(() => scope.rhs["placeholder"]).elseIf$(() =>
                            scope.operators$.equal(
                              scope.rhs["placeholder"],
                              "name",
                            )
                          ).then$(() => scope.lhs["placeholder"]).else$(null),
                      }).in$((scope) =>
                        scope.if$(
                          ((scope.operators$.equal(scope.elemType, null)) ||
                            (scope.operators$.equal(scope.lazy, null))) ||
                          (scope.operators$.equal(scope.placeholder, null)),
                        ).then$(null).else$(() =>
                          scope.attrSet$({
                            elemType: () => scope.elemType,
                            lazy: () => scope.lazy,
                            placeholder: () => scope.placeholder,
                          })
                        )
                      )),
                ),
            }).in$((scope) =>
              scope.func$({
                elemType: scope.nixArg$.NoDefault,
                lazy: false,
                placeholder: "name",
              }, (scope) =>
                scope.apply$(scope.mkOptionType, () =>
                  scope.recAttrSet$({
                    name: (scope) =>
                      scope.if$(scope.lazy).then$("lazyAttrsOf").else$(
                        "attrsOf",
                      ),
                    description: (scope) =>
                      scope.operators$.add(
                        scope.if$(scope.lazy).then$("lazy attribute set").else$(
                          "attribute set",
                        ),
                        scope.str$(
                          () => [
                            " of ",
                            scope.apply$(scope.optionDescriptionPhrase, () =>
                              scope.func$(
                                "class",
                                (
                                  scope,
                                ) => ((scope.operators$.equal(
                                  scope.class,
                                  "noun",
                                )) ||
                                  (scope.operators$.equal(
                                    scope.class,
                                    "composite",
                                  ))),
                              ), () => scope.elemType),
                          ]
                        ),
                      ),
                    descriptionClass: "composite",
                    check: (scope) =>
                      scope.attrSet$({
                        __functor: () =>
                          scope.func$("_self", (scope) => scope.isAttrs),
                        isV2MergeCoherent: true,
                      }),
                    merge: (scope) =>
                      scope.attrSet$({
                        __functor: () =>
                          scope.func$("self", (scope) =>
                            scope.func$("loc", (scope) =>
                              scope.func$("defs", (scope) =>
                                scope.apply$(scope.self["v2"], () =>
                                  scope.attrSet$({
                                    loc: () =>
                                      scope.loc,
                                    defs: () =>
                                      scope.defs,
                                  }))["value"]))),
                        v2: () =>
                          scope.func$({
                            loc: scope.nixArg$.NoDefault,
                            defs: scope.nixArg$.NoDefault,
                          }, (scope) =>
                            scope.let$({
                              evals: (scope) =>
                                scope.if$(scope.lazy).then$(() =>
                                  scope.apply$(scope.zipAttrsWith, () =>
                                    scope.func$("name", (scope) =>
                                      scope.func$("defs", (scope) =>
                                        scope.apply$(
                                          scope.mergeDefinitions,
                                          () => (scope.operators$.listConcat(
                                            scope.loc,
                                            [scope.name],
                                          )),
                                          () => scope.elemType,
                                          () => scope.defs,
                                        ))), () =>
                                    scope.apply$(scope.pushPositions, () =>
                                      scope.defs))
                                ).else$(() =>
                                  scope.apply$(scope.filterAttrs, () =>
                                    scope.func$("n", (scope) =>
                                      scope.func$("v", (scope) =>
                                        scope.operators$.hasAttr(
                                          scope.v["optionalValue"],
                                          "value",
                                        ))), () =>
                                    scope.apply$(scope.zipAttrsWith, () =>
                                      scope.func$("name", (scope) =>
                                        scope.func$("defs", (scope) =>
                                          scope.apply$(
                                            scope.mergeDefinitions,
                                            () => (scope.operators$.listConcat(
                                              scope.loc,
                                              [scope.name],
                                            )),
                                            () => scope.elemType,
                                            () => scope.defs,
                                          ))), () =>
                                      scope.apply$(scope.pushPositions, () =>
                                        scope.defs)))
                                ),
                            }).in$((scope) =>
                              scope.attrSet$({
                                headError: () =>
                                  scope.apply$(scope.checkDefsForError, () =>
                                    scope.check, () =>
                                    scope.loc, () =>
                                    scope.defs),
                                value: () =>
                                  scope.apply$(scope.mapAttrs, () =>
                                    scope.func$("n", (scope) =>
                                      scope.func$("v", (scope) =>
                                        scope.if$(scope.lazy).then$(() =>
                                          scope.operators$.selectOrDefault(
                                            scope.v,
                                            ["optionalValue", "value"],
                                            () =>
                                              scope.operators$.selectOrDefault(
                                                scope.elemType,
                                                ["emptyValue", "value"],
                                                () =>
                                                  scope.v["mergedValue"],
                                              ),
                                          )
                                        ).else$(() =>
                                          scope.v["optionalValue"]["value"]
                                        ))), () =>
                                    scope.evals),
                                ...scope.deepSet$(["valueMeta", "attrs"], () =>
                                  scope.apply$(
                                    scope.mapAttrs,
                                    () =>
                                      scope.func$("n", (scope) =>
                                        scope.func$(
                                          "v",
                                          (scope) =>
                                            scope
                                              .v["checkedAndMerged"][
                                                "valueMeta"
                                              ],
                                        )),
                                    () => scope.evals,
                                  )),
                              })
                            )),
                      }),
                    emptyValue: { value: {} },
                    getSubOptions: (scope) =>
                      scope.func$("prefix", (scope) =>
                        scope.apply$(
                          scope.elemType["getSubOptions"],
                          () => (scope.operators$.listConcat(scope.prefix, [
                            scope.str$(() => ["<", scope.placeholder, ">"]),
                          ])),
                        )),
                    getSubModules: (scope) =>
                      scope.elemType["getSubModules"],
                    substSubModules: (scope) =>
                      scope.func$("m", (scope) =>
                        scope.apply$(scope.attrsWith, () =>
                          scope.attrSet$({
                            elemType: () =>
                              scope.apply$(
                                scope.elemType["substSubModules"],
                                () => scope.m,
                              ),
                            lazy: () =>
                              scope.lazy,
                            placeholder: () =>
                              scope.placeholder,
                          }))),
                    functor: (scope) =>
                      scope.operators$.merge(
                        scope.apply$(scope.elemTypeFunctor, "attrsWith", () =>
                          scope.attrSet$({
                            elemType: () =>
                              scope.elemType,
                            lazy: () =>
                              scope.lazy,
                            placeholder: () =>
                              scope.placeholder,
                          })),
                        scope.attrSet$({
                          binOp: () => scope.binOp,
                        }),
                      ),
                    ...scope.deepSet$(["nestedTypes", "elemType"], (scope) =>
                      scope.elemType),
                  })))
            ),
          loaOf: (scope) =>
            scope.func$(
              "elemType",
              (scope) =>
                scope.operators$.merge(
                  scope.apply$(scope.lib["types"]["attrsOf"], () =>
                    scope.elemType),
                  scope.attrSet$({
                    name: "loaOf",
                    deprecationMessage: () =>
                      scope.operators$.add(
                        scope.operators$.add(
                          "Mixing lists with attribute values is no longer",
                          " possible; please use `types.attrsOf` instead. See",
                        ),
                        " https://github.com/NixOS/nixpkgs/issues/1800 for the motivation.",
                      ),
                    ...scope.deepSet$(["nestedTypes", "elemType"], () =>
                      scope.elemType),
                  }),
                ),
            ),
          attrTag: (scope) =>
            scope.func$("tags", (scope) =>
              scope.let$({
                tags_: (scope) => scope.tags,
              }).in$((scope) =>
                scope.let$({
                  tags: (scope) =>
                    scope.apply$(scope.mapAttrs, () =>
                      scope.func$("n", (scope) =>
                        scope.func$("opt", (scope) =>
                          scope.apply$(
                            scope.builtins["addErrorContext"],
                            () =>
                              scope.str$(
                                () => [
                                  "while checking that attrTag tag ",
                                  scope.apply$(
                                    scope.lib["strings"]["escapeNixIdentifier"],
                                    () => scope.n,
                                  ),
                                  " is an option with a type",
                                  scope.apply$(
                                    scope.inAttrPosSuffix,
                                    () => scope.tags_,
                                    () => scope.n,
                                  ),
                                ]
                              ),
                            () =>
                              scope.if$(
                                scope.operators$.notEqual(
                                  scope.operators$.selectOrDefault(scope.opt, [
                                    "_type",
                                  ], null),
                                  "option",
                                ),
                              ).then$(() =>
                                scope.apply$(scope.throw, () =>
                                  scope.str$(
                                    () => [
                                      "In attrTag, each tag value must be an option, but tag ",
                                      scope.apply$(
                                        scope
                                          .lib["strings"][
                                            "escapeNixIdentifier"
                                          ],
                                        () => scope.n,
                                      ),
                                      " ",
                                      scope.if$(
                                        scope.operators$.hasAttr(
                                          scope.opt,
                                          "_type",
                                        ),
                                      ).then$(() =>
                                        scope.if$(
                                          scope.operators$.equal(
                                            scope.opt["_type"],
                                            "option-type",
                                          ),
                                        ).then$(
                                          "was a bare type, not wrapped in mkOption.",
                                        ).else$(() =>
                                          scope.str$(
                                            () => [
                                              "was of type ",
                                              scope.apply$(
                                                scope
                                                  .lib["strings"][
                                                    "escapeNixString"
                                                  ],
                                                () => scope.opt["_type"],
                                              ),
                                              ".",
                                            ]
                                          )
                                        )
                                      ).else$("was not."),
                                    ]
                                  ))
                              ).else$(() =>
                                scope.operators$.merge(
                                  scope.opt,
                                  scope.attrSet$({
                                    declarations: () =>
                                      scope.operators$.selectOrDefault(
                                        scope.opt,
                                        ["declarations"],
                                        () =>
                                          scope.let$({
                                            pos: (scope) =>
                                              scope.apply$(
                                                scope
                                                  .builtins["unsafeGetAttrPos"],
                                                () => scope.n,
                                                () => scope.tags_,
                                              ),
                                          }).in$((scope) =>
                                            scope.if$(
                                              scope.operators$.equal(
                                                scope.pos,
                                                null,
                                              ),
                                            ).then$([]).else$(
                                              () => [scope.pos["file"]]
                                            )
                                          ),
                                      ),
                                    declarationPositions: () =>
                                      scope.operators$.selectOrDefault(
                                        scope.opt,
                                        ["declarationPositions"],
                                        () =>
                                          scope.let$({
                                            pos: (scope) =>
                                              scope.apply$(
                                                scope
                                                  .builtins["unsafeGetAttrPos"],
                                                () => scope.n,
                                                () => scope.tags_,
                                              ),
                                          }).in$((scope) =>
                                            scope.if$(
                                              scope.operators$.equal(
                                                scope.pos,
                                                null,
                                              ),
                                            ).then$([]).else$(() => [scope.pos])
                                          ),
                                      ),
                                  }),
                                )
                              ),
                          ))), () => scope.tags_),
                  choicesStr: (scope) =>
                    scope.apply$(
                      scope.concatMapStringsSep,
                      ", ",
                      () => scope.lib["strings"]["escapeNixIdentifier"],
                      () => scope.apply$(scope.attrNames, () => scope.tags),
                    ),
                }).in$((scope) =>
                  scope.apply$(scope.mkOptionType, () =>
                    scope.attrSet$({
                      name: "attrTag",
                      description: () =>
                        scope.str$(
                          () => [
                            "attribute-tagged union with choices: ",
                            scope.choicesStr,
                          ]
                        ),
                      descriptionClass: "noun",
                      getSubOptions: () =>
                        scope.func$(
                          "prefix",
                          (scope) =>
                            scope.apply$(scope.mapAttrs, () =>
                              scope.func$("tagName", (scope) =>
                                scope.func$("tagOption", (scope) =>
                                  scope.operators$.merge(
                                    scope.tagOption,
                                    scope.attrSet$({
                                      loc: () =>
                                        scope.operators$.listConcat(
                                          scope.prefix,
                                          [scope.tagName],
                                        ),
                                    }),
                                  ))), () =>
                              scope.tags),
                        ),
                      check: () =>
                        scope.func$(
                          "v",
                          (scope) => (((scope.apply$(scope.isAttrs, () =>
                            scope.v)) &&
                            (scope.operators$.equal(
                              scope.apply$(scope.length, () =>
                                scope.apply$(scope.attrNames, () =>
                                  scope.v)),
                              1n,
                            ))) &&
                            (scope.operators$.hasAttr(
                              scope.tags,
                              scope.apply$(scope.head, () =>
                                scope.apply$(scope.attrNames, () => scope.v)),
                            ))),
                        ),
                      merge: () =>
                        scope.func$("loc", (scope) =>
                          scope.func$("defs", (scope) =>
                            scope.let$({
                              choice: (scope) =>
                                scope.apply$(
                                  scope.head,
                                  () =>
                                    scope.apply$(scope.attrNames, () =>
                                      scope.apply$(scope.head, () =>
                                        scope.defs)["value"]),
                                ),
                              checkedValueDefs: (scope) =>
                                scope.apply$(
                                  scope.map,
                                  () =>
                                    scope.func$("def", (scope) =>
                                      ((_cond) => {
                                        if (!_cond) {
                                          throw new Error(
                                            "assertion failed: " +
                                              "(length (attrNames def.value)) == 1",
                                          );
                                        }
                                        return scope.if$(
                                          scope.operators$.notEqual(
                                            scope.apply$(scope.head, () =>
                                              scope.apply$(
                                                scope.attrNames,
                                                () => scope.def["value"],
                                              )),
                                            scope.choice,
                                          ),
                                        ).then$(() =>
                                          scope.apply$(scope.throw, () =>
                                            scope.str$(
                                              () => [
                                                "The option `",
                                                scope.apply$(
                                                  scope.showOption,
                                                  () => scope.loc,
                                                ),
                                                "` is defined both as `",
                                                scope.choice,
                                                "` and `",
                                                scope.apply$(scope.head, () =>
                                                  scope.apply$(
                                                    scope.attrNames,
                                                    () => scope.def["value"],
                                                  )),
                                                "`, in ",
                                                scope.apply$(
                                                  scope.showFiles,
                                                  () =>
                                                    scope.apply$(
                                                      scope.getFiles,
                                                      () => scope.defs,
                                                    ),
                                                ),
                                                ".",
                                              ]
                                            ))
                                        ).else$(() =>
                                          scope.attrSet$({
                                            file: () => scope.def.file,
                                            value: () =>
                                              scope.def["value"][scope.choice],
                                          })
                                        );
                                      })(
                                        scope.operators$.equal(
                                          scope.apply$(scope.length, () =>
                                            scope.apply$(scope.attrNames, () =>
                                              scope.def["value"])),
                                          1n,
                                        ),
                                      )),
                                  () => scope.defs,
                                ),
                            }).in$((scope) =>
                              scope.if$(
                                scope.operators$.hasAttr(
                                  scope.tags,
                                  scope.choice,
                                ),
                              ).then$(() =>
                                scope.attrSet$({
                                  ...scope.deepSet$([scope.choice], () =>
                                    scope.apply$(
                                      scope.lib["modules"]["evalOptionValue"],
                                      () => (scope.operators$.listConcat(
                                        scope.loc,
                                        [scope.choice],
                                      )),
                                      () => scope.tags[scope.choice],
                                      () => scope.checkedValueDefs,
                                    )["value"]),
                                })
                              ).else$(() =>
                                scope.apply$(scope.throw, () =>
                                  scope.str$(
                                    () => [
                                      "The option `",
                                      scope.apply$(
                                        scope.showOption,
                                        () => scope.loc,
                                      ),
                                      "` is defined as ",
                                      scope.apply$(
                                        scope
                                          .lib["strings"][
                                            "escapeNixIdentifier"
                                          ],
                                        () => scope.choice,
                                      ),
                                      ", but ",
                                      scope.apply$(
                                        scope
                                          .lib["strings"][
                                            "escapeNixIdentifier"
                                          ],
                                        () => scope.choice,
                                      ),
                                      " is not among the valid choices (",
                                      scope.choicesStr,
                                      "). Value ",
                                      scope.choice,
                                      " was defined in ",
                                      scope.apply$(
                                        scope.showFiles,
                                        () =>
                                          scope.apply$(scope.getFiles, () =>
                                            scope.defs),
                                      ),
                                      ".",
                                    ]
                                  ))
                              )
                            ))),
                      nestedTypes: () => scope.tags,
                      getSubModules: () =>
                        scope.let$({
                          tagsWithSubModules: (scope) =>
                            scope.apply$(
                              scope.filterAttrs,
                              () =>
                                scope.func$(
                                  "_",
                                  (scope) =>
                                    scope.func$("mods", (scope) =>
                                      scope.operators$.notEqual(
                                        scope.mods,
                                        null,
                                      )),
                                ),
                              () =>
                                scope.apply$(
                                  scope.mapAttrs,
                                  () =>
                                    scope.func$("_", (scope) =>
                                      scope.func$("opt", (scope) =>
                                        scope.opt["type"]["getSubModules"])),
                                  () =>
                                    scope.tags,
                                ),
                            ),
                        }).in$((scope) =>
                          scope.if$(
                            scope.operators$.equal(
                              scope.tagsWithSubModules,
                              {},
                            ),
                          ).then$(null).else$(() => [scope.tagsWithSubModules])
                        ),
                      substSubModules: () =>
                        scope.func$("allWrappedModules", (scope) =>
                          scope.let$({
                            tagsWithNewTypes: (scope) =>
                              scope.apply$(
                                scope.zipAttrsWith,
                                () =>
                                  scope.func$("tag", (scope) =>
                                    scope
                                      .tags[scope.tag]["type"][
                                        "substSubModules"
                                      ]),
                                () =>
                                  scope.apply$(scope.concatMap, () =>
                                    scope.func$({
                                      _file: scope.nixArg$.NoDefault,
                                      imports: scope.nixArg$.NoDefault,
                                    }, (scope) =>
                                      scope.apply$(scope.map, () =>
                                        scope.apply$(scope.mapAttrs, () =>
                                          scope.func$("_", (scope) =>
                                            scope.func$("imports", (scope) =>
                                              scope.attrSet$({
                                                _file: () =>
                                                  scope._file,
                                                imports: () =>
                                                  scope.imports,
                                              })))), () =>
                                        scope.imports)), () =>
                                    scope.allWrappedModules),
                              ),
                          }).in$((scope) =>
                            scope.apply$(
                              scope.attrTag,
                              () =>
                                scope.apply$(scope.mapAttrs, () =>
                                  scope.func$("tag", (scope) =>
                                    scope.func$("opt", (scope) =>
                                      scope.operators$.merge(
                                        scope.opt,
                                        scope.apply$(scope.optionalAttrs, () =>
                                          scope.operators$.hasAttr(
                                            scope.tagsWithNewTypes,
                                            scope.tag,
                                          ), () =>
                                          scope.attrSet$({
                                            type: () =>
                                              scope.tagsWithNewTypes[scope.tag],
                                          })),
                                      ))), () =>
                                  scope.tags),
                            )
                          )),
                      functor: () =>
                        scope.operators$.merge(
                          scope.apply$(scope.defaultFunctor, "attrTag"),
                          scope.attrSet$({
                            type: () =>
                              scope.func$(
                                {
                                  tags: scope.nixArg$.NoDefault,
                                  "...": scope.nixArg$.Ellipsis,
                                },
                                (scope) =>
                                  scope.apply$(
                                    scope.lib["types"]["attrTag"],
                                    () => scope.tags,
                                  ),
                              ),
                            payload: () =>
                              scope.attrSet$({
                                tags: () => scope.tags,
                              }),
                            binOp: () =>
                              scope.let$({
                                wrapOptionDecl: (scope) =>
                                  scope.func$("option", (scope) =>
                                    scope.attrSet$({
                                      options: () =>
                                        scope.option,
                                      _file: "<attrTag {...}>",
                                      pos: null,
                                    })),
                              }).in$((scope) =>
                                scope.func$("a", (scope) =>
                                  scope.func$("b", (scope) =>
                                    scope.attrSet$({
                                      tags: () =>
                                        scope.operators$.merge(
                                          scope.a["tags"],
                                          scope.operators$.merge(
                                            scope.b["tags"],
                                            scope.apply$(scope.mapAttrs, () =>
                                              scope.func$("tagName", (scope) =>
                                                scope.func$("bOpt", (scope) =>
                                                  scope.operators$.merge(
                                                    scope.apply$(
                                                      scope
                                                        .lib[
                                                          "mergeOptionDecls"
                                                        ],
                                                      () => [scope.tagName],
                                                      () => [
                                                        scope.apply$(
                                                          scope.wrapOptionDecl,
                                                          () =>
                                                            scope
                                                              .a["tags"][
                                                                scope.tagName
                                                              ],
                                                        ),
                                                        scope.apply$(
                                                          scope.wrapOptionDecl,
                                                          () => scope.bOpt,
                                                        ),
                                                      ],
                                                    ),
                                                    scope.attrSet$({
                                                      declarations: () =>
                                                        scope.operators$
                                                          .listConcat(
                                                            scope
                                                              .a["tags"][
                                                                scope.tagName
                                                              ]["declarations"],
                                                            scope
                                                              .bOpt[
                                                                "declarations"
                                                              ],
                                                          ),
                                                      declarationPositions:
                                                        () =>
                                                          scope.operators$
                                                            .listConcat(
                                                              scope
                                                                .a["tags"][
                                                                  scope.tagName
                                                                ]["declarationPositions"],
                                                              scope
                                                                .bOpt[
                                                                  "declarationPositions"
                                                                ],
                                                            ),
                                                    }),
                                                  ))), () =>
                                              scope.apply$(
                                                scope
                                                  .builtins["intersectAttrs"],
                                                () => scope.a["tags"],
                                                () => scope.b["tags"],
                                              )),
                                          ),
                                        ),
                                    })))
                              ),
                          }),
                        ),
                    }))
                )
              )),
          luaInline: (scope) =>
            scope.apply$(scope.mkOptionType, () =>
              scope.attrSet$({
                name: "luaInline",
                description: "inline lua",
                descriptionClass: "noun",
                check: () =>
                  scope.func$("x", (scope) =>
                    scope.operators$.equal(
                      scope.operators$.selectOrDefault(
                        scope.x,
                        ["_type"],
                        null,
                      ),
                      "lua-inline",
                    )),
                merge: () =>
                  scope.mergeEqualOption,
              })),
          uniq: (scope) => scope.apply$(scope.unique, { message: "" }),
          unique: (scope) =>
            scope.func$(
              { message: scope.nixArg$.NoDefault },
              (scope) =>
                scope.func$("type", (scope) =>
                  scope.apply$(scope.mkOptionType, () =>
                    scope.recAttrSet$({
                      name: "unique",
                      description: (scope) =>
                        scope.type["description"],
                      descriptionClass: (scope) =>
                        scope.type["descriptionClass"],
                      check: (scope) => scope.type["check"],
                      merge: (scope) =>
                        scope.apply$(scope.mergeUniqueOption, () =>
                          scope.attrSet$({
                            message: () => scope.message,
                            merge: () => scope.type.merge,
                          })),
                      emptyValue: (scope) =>
                        scope.type["emptyValue"],
                      getSubOptions: (scope) => scope.type["getSubOptions"],
                      getSubModules: (scope) => scope.type["getSubModules"],
                      substSubModules: (scope) =>
                        scope.func$("m", (scope) =>
                          scope.apply$(scope.uniq, () =>
                            scope.apply$(scope.type["substSubModules"], () =>
                              scope.m))),
                      functor: (scope) =>
                        scope.operators$.merge(
                          scope.apply$(scope.elemTypeFunctor, () =>
                            scope.name, () =>
                            scope.attrSet$({
                              elemType: () =>
                                scope.type,
                            })),
                          scope.attrSet$({
                            type: () =>
                              scope.func$("payload", (scope) =>
                                scope.apply$(scope.lib["types"]["unique"], () =>
                                  scope.attrSet$({
                                    message: () => scope.message,
                                  }), () =>
                                  scope.payload["elemType"])),
                          }),
                        ),
                      ...scope.deepSet$(["nestedTypes", "elemType"], (scope) =>
                        scope.type),
                    }))),
            ),
          nullOr: (scope) =>
            scope.func$(
              "elemType",
              (scope) =>
                scope.apply$(scope.mkOptionType, () =>
                  scope.recAttrSet$({
                    name: "nullOr",
                    description: (scope) =>
                      scope.str$(
                        () => [
                          "null or ",
                          scope.apply$(scope.optionDescriptionPhrase, () =>
                            scope.func$(
                              "class",
                              (
                                scope,
                              ) => ((scope.operators$.equal(
                                scope.class,
                                "noun",
                              )) ||
                                (scope.operators$.equal(
                                  scope.class,
                                  "conjunction",
                                ))),
                            ), () => scope.elemType),
                        ]
                      ),
                    descriptionClass: "conjunction",
                    check: (scope) =>
                      scope.func$(
                        "x",
                        (
                          scope,
                        ) => ((scope.operators$.equal(scope.x, null)) ||
                          (scope.apply$(
                            scope.elemType["check"],
                            () => scope.x,
                          ))),
                      ),
                    merge: (scope) =>
                      scope.func$("loc", (scope) =>
                        scope.func$("defs", (scope) =>
                          scope.let$({
                            nulls: (scope) =>
                              scope.apply$(scope.filter, () =>
                                scope.func$("def", (scope) =>
                                  scope.operators$.equal(
                                    scope.def["value"],
                                    null,
                                  )), () => scope.defs),
                          }).in$((scope) =>
                            scope.if$(scope.operators$.equal(scope.nulls, []))
                              .then$(() =>
                                scope.apply$(
                                  scope.elemType["merge"],
                                  () => scope.loc,
                                  () => scope.defs,
                                )
                              ).elseIf$(() =>
                                scope.operators$.equal(
                                  scope.apply$(scope.length, () => scope.nulls),
                                  scope.apply$(scope.length, () => scope.defs),
                                )
                              ).then$(null).else$(() =>
                                scope.apply$(scope.throw, () =>
                                  scope.str$(
                                    () => [
                                      "The option `",
                                      scope.apply$(
                                        scope.showOption,
                                        () => scope.loc,
                                      ),
                                      "` is defined both null and not null, in ",
                                      scope.apply$(
                                        scope.showFiles,
                                        () =>
                                          scope.apply$(scope.getFiles, () =>
                                            scope.defs),
                                      ),
                                      ".",
                                    ]
                                  ))
                              )
                          ))),
                    emptyValue: { value: null },
                    getSubOptions: (scope) => scope.elemType["getSubOptions"],
                    getSubModules: (scope) => scope.elemType["getSubModules"],
                    substSubModules: (scope) =>
                      scope.func$(
                        "m",
                        (scope) =>
                          scope.apply$(scope.nullOr, () =>
                            scope.apply$(
                              scope.elemType["substSubModules"],
                              () => scope.m,
                            )),
                      ),
                    functor: (scope) =>
                      scope.operators$.merge(
                        scope.apply$(scope.elemTypeFunctor, () =>
                          scope.name, () =>
                          scope.attrSet$({
                            elemType: () =>
                              scope.elemType,
                          })),
                        scope.attrSet$({
                          type: () =>
                            scope.func$("payload", (scope) =>
                              scope.apply$(scope.lib["types"]["nullOr"], () =>
                                scope.payload["elemType"])),
                        }),
                      ),
                    ...scope.deepSet$(
                      ["nestedTypes", "elemType"],
                      (scope) => scope.elemType,
                    ),
                  })),
            ),
          functionTo: (scope) =>
            scope.func$(
              "elemType",
              (scope) =>
                scope.apply$(scope.mkOptionType, () =>
                  scope.attrSet$({
                    name: "functionTo",
                    description: () =>
                      scope.str$(
                        () => [
                          "function that evaluates to a(n) ",
                          scope.apply$(scope.optionDescriptionPhrase, () =>
                            scope.func$(
                              "class",
                              (
                                scope,
                              ) => ((scope.operators$.equal(
                                scope.class,
                                "noun",
                              )) ||
                                (scope.operators$.equal(
                                  scope.class,
                                  "composite",
                                ))),
                            ), () => scope.elemType),
                        ]
                      ),
                    descriptionClass: "composite",
                    check: () => scope.isFunction,
                    merge: () =>
                      scope.func$("loc", (scope) =>
                        scope.func$("defs", (scope) =>
                          scope.attrSet$({
                            __functionArgs: () =>
                              scope.apply$(
                                scope.zipAttrsWith,
                                () =>
                                  scope.func$(
                                    "_",
                                    (scope) =>
                                      scope.apply$(scope.all, () =>
                                        scope.func$("x", (scope) =>
                                          scope.x)),
                                  ),
                                () =>
                                  scope.apply$(
                                    scope.map,
                                    () =>
                                      scope.func$("fn", (scope) =>
                                        scope.apply$(scope.functionArgs, () =>
                                          scope.fn["value"])),
                                    () =>
                                      scope.defs,
                                  ),
                              ),
                            __functor: () =>
                              scope.func$("_", (scope) =>
                                scope.func$("callerArgs", (scope) =>
                                  scope.apply$(
                                    scope.mergeDefinitions,
                                    () => (scope.operators$.listConcat(
                                      scope.loc,
                                      ["<function body>"],
                                    )),
                                    () => scope.elemType,
                                    () =>
                                      scope.apply$(scope.map, () =>
                                        scope.func$("fn", (scope) =>
                                          scope.attrSet$({
                                            file: () => scope.fn.file,
                                            value: () =>
                                              scope.apply$(
                                                scope.fn["value"],
                                                () => scope.callerArgs,
                                              ),
                                          })), () => scope.defs),
                                  )["mergedValue"])),
                          }))),
                    getSubOptions: () =>
                      scope.func$(
                        "prefix",
                        (scope) =>
                          scope.apply$(
                            scope.elemType["getSubOptions"],
                            () => (scope.operators$.listConcat(scope.prefix, [
                              "<function body>",
                            ])),
                          ),
                      ),
                    getSubModules: () => scope.elemType["getSubModules"],
                    substSubModules: () =>
                      scope.func$(
                        "m",
                        (scope) =>
                          scope.apply$(scope.functionTo, () =>
                            scope.apply$(
                              scope.elemType["substSubModules"],
                              () => scope.m,
                            )),
                      ),
                    functor: () =>
                      scope.operators$.merge(
                        scope.apply$(scope.elemTypeFunctor, "functionTo", () =>
                          scope.attrSet$({
                            elemType: () =>
                              scope.elemType,
                          })),
                        scope.attrSet$({
                          type: () =>
                            scope.func$("payload", (scope) =>
                              scope.apply$(
                                scope.lib["types"]["functionTo"],
                                () => scope.payload["elemType"],
                              )),
                        }),
                      ),
                    ...scope.deepSet$(
                      ["nestedTypes", "elemType"],
                      () => scope.elemType,
                    ),
                  })),
            ),
          submodule: (scope) =>
            scope.func$(
              "modules",
              (scope) =>
                scope.apply$(scope.submoduleWith, () =>
                  scope.attrSet$({
                    shorthandOnlyDefinesConfig: true,
                    modules: () =>
                      scope.apply$(scope.toList, () => scope.modules),
                  })),
            ),
          deferredModule: (scope) => scope.apply$(scope.deferredModuleWith, {}),
          deferredModuleWith: (scope) =>
            scope.func$(
              { attrs: scope.nixArg$.AllArgs, staticModules: [] },
              (scope) =>
                scope.apply$(scope.mkOptionType, () =>
                  scope.attrSet$({
                    name: "deferredModule",
                    description: "module",
                    descriptionClass: "noun",
                    check: () =>
                      scope.func$(
                        "x",
                        (
                          scope,
                        ) => (((scope.apply$(scope.isAttrs, () => scope.x)) ||
                          (scope.apply$(scope.isFunction, () => scope.x))) ||
                          (scope.apply$(scope.path["check"], () => scope.x))),
                      ),
                    merge: () =>
                      scope.func$("loc", (scope) =>
                        scope.func$("defs", (scope) =>
                          scope.attrSet$({
                            imports: () =>
                              scope.operators$.listConcat(
                                scope.staticModules,
                                scope.apply$(scope.map, () =>
                                  scope.func$("def", (scope) =>
                                    scope.apply$(
                                      scope.lib["setDefaultModuleLocation"],
                                      () =>
                                        scope.str$(
                                          () => [
                                            scope.def["file"],
                                            ", via option ",
                                            scope.apply$(
                                              scope.showOption,
                                              () => scope.loc,
                                            ),
                                          ]
                                        ),
                                      () => scope.def["value"],
                                    )), () => scope.defs),
                              ),
                          }))),
                    getSubOptions: () =>
                      scope.apply$(scope.submoduleWith, () =>
                        scope.attrSet$({
                          modules: () => scope.staticModules,
                        })).getSubOptions,
                    getSubModules: () =>
                      scope.apply$(scope.submoduleWith, () =>
                        scope.attrSet$({
                          modules: () => scope.staticModules,
                        })).getSubModules,
                    substSubModules: () =>
                      scope.func$("m", (scope) =>
                        scope.apply$(
                          scope.deferredModuleWith,
                          () => (scope.operators$.merge(
                            scope.attrs,
                            scope.attrSet$({
                              staticModules: () => scope.m,
                            }),
                          )),
                        )),
                    functor: () =>
                      scope.operators$.merge(
                        scope.apply$(
                          scope.defaultFunctor,
                          "deferredModuleWith",
                        ),
                        scope.attrSet$({
                          type: () => scope.lib["types"]["deferredModuleWith"],
                          payload: () =>
                            scope.attrSet$({
                              staticModules: () => scope.staticModules,
                            }),
                          binOp: () =>
                            scope.func$("lhs", (scope) =>
                              scope.func$("rhs", (scope) =>
                                scope.attrSet$({
                                  staticModules: () =>
                                    scope.operators$.listConcat(
                                      scope.lhs["staticModules"],
                                      scope.rhs["staticModules"],
                                    ),
                                }))),
                        }),
                      ),
                  })),
            ),
          optionDeclaration: (scope) =>
            scope.apply$(scope.mkOptionType, () =>
              scope.attrSet$({
                name: "optionDeclaration",
                description: "option declaration",
                descriptionClass: "noun",
                check: () =>
                  scope.func$(
                    "opt",
                    (
                      scope,
                    ) => ((scope.apply$(
                      scope.isType,
                      "option",
                      () => scope.opt,
                    )) &&
                      (scope.operators$.negate(
                        scope.operators$.hasAttr(scope.opt, "value"),
                      ))),
                  ),
              })),
          optionType: (scope) =>
            scope.apply$(scope.mkOptionType, () =>
              scope.attrSet$({
                name: "optionType",
                description: "optionType",
                descriptionClass: "noun",
                check: () => scope.apply$(scope.isType, "option-type"),
                merge: () =>
                  scope.func$("loc", (scope) =>
                    scope.func$("defs", (scope) =>
                      scope.if$(
                        scope.operators$.equal(
                          scope.apply$(scope.length, () => scope.defs),
                          1n,
                        ),
                      ).then$(() =>
                        scope.apply$(scope.head, () =>
                          scope.defs)["value"]
                      ).else$(() =>
                        scope.let$({
                          optionModules: (scope) =>
                            scope.apply$(scope.map, () =>
                              scope.func$({
                                value: scope.nixArg$.NoDefault,
                                file: scope.nixArg$.NoDefault,
                              }, (scope) =>
                                scope.attrSet$({
                                  _file: () =>
                                    scope.file,
                                  options: () =>
                                    scope.apply$(scope.lib["mkOption"], () =>
                                      scope.attrSet$({
                                        type: () => scope.value,
                                      })),
                                })), () =>
                              scope.defs),
                          mergedOption: (scope) =>
                            scope.apply$(scope.fixupOptionType, () =>
                              scope.loc, () =>
                              scope.apply$(scope.mergeOptionDecls, () =>
                                scope.loc, () =>
                                scope.optionModules)),
                        }).in$((scope) =>
                          scope.mergedOption["type"]
                        )
                      ))),
              })),
          submoduleWith: (scope) =>
            scope.func$({
              modules: scope.nixArg$.NoDefault,
              specialArgs: {},
              shorthandOnlyDefinesConfig: false,
              description: null,
              class: null,
              attrs: scope.nixArg$.AllArgs,
            }, (scope) =>
              scope.let$({
                evalModules: (scope) => scope.lib["modules"]["evalModules"],
                allModules: (scope) =>
                  scope.func$(
                    "defs",
                    (scope) =>
                      scope.apply$(scope.map, () =>
                        scope.func$({
                          value: scope.nixArg$.NoDefault,
                          file: scope.nixArg$.NoDefault,
                        }, (scope) =>
                          scope.if$(
                            (scope.apply$(scope.isAttrs, () => scope.value)) &&
                            (scope.shorthandOnlyDefinesConfig),
                          ).then$(() =>
                            scope.attrSet$({
                              _file: () =>
                                scope.file,
                              config: () =>
                                scope.value,
                            })
                          ).else$(() =>
                            scope.attrSet$({
                              _file: () =>
                                scope.file,
                              imports: () => [scope.value],
                            })
                          )), () =>
                        scope.defs),
                  ),
                base: (scope) =>
                  scope.apply$(scope.evalModules, () =>
                    scope.attrSet$({
                      class: () => scope.class,
                      specialArgs: () => scope.specialArgs,
                      modules: () =>
                        scope.operators$.listConcat([scope.attrSet$({
                          ...scope.deepSet$(
                            ["_module", "args", "name"],
                            () =>
                              scope.apply$(
                                scope.lib["mkOptionDefault"],
                                "‹name›",
                              ),
                          ),
                        })], scope.modules),
                    })),
                freeformType: (scope) => scope.base["_module"]["freeformType"],
                name: "submodule",
                check: (scope) =>
                  scope.attrSet$({
                    __functor: () =>
                      scope.func$("_self", (scope) =>
                        scope.func$(
                          "x",
                          (
                            scope,
                          ) => (((scope.apply$(scope.isAttrs, () => scope.x)) ||
                            (scope.apply$(scope.isFunction, () => scope.x))) ||
                            (scope.apply$(scope.path["check"], () => scope.x))),
                        )),
                    isV2MergeCoherent: true,
                  }),
              }).in$((scope) =>
                scope.apply$(scope.mkOptionType, () =>
                  scope.attrSet$({
                    name: () => scope.name,
                    description: () =>
                      scope.if$(
                        scope.operators$.notEqual(scope.description, null),
                      ).then$(() => scope.description).else$(() =>
                        scope.let$({
                          docsEval: (scope) =>
                            scope.apply$(scope.base["extendModules"], () =>
                              scope.attrSet$({
                                modules: () => [scope.noCheckForDocsModule],
                              })),
                        }).in$((scope) =>
                          scope.if$(
                            scope.operators$.hasAttr(
                              scope.docsEval["_module"]["freeformType"],
                              "description",
                            ),
                          ).then$(() =>
                            scope.str$(
                              () => [
                                "open ",
                                scope.name,
                                " of ",
                                scope.apply$(
                                  scope.optionDescriptionPhrase,
                                  () =>
                                    scope.func$(
                                      "class",
                                      (
                                        scope,
                                      ) => ((scope.operators$.equal(
                                        scope.class,
                                        "noun",
                                      )) ||
                                        (scope.operators$.equal(
                                          scope.class,
                                          "composite",
                                        ))),
                                    ),
                                  () =>
                                    scope.docsEval["_module"]["freeformType"],
                                ),
                              ]
                            )
                          ).else$(() =>
                            scope.name
                          )
                        )
                      ),
                    check: () => scope.check,
                    merge: () =>
                      scope.attrSet$({
                        __functor: () =>
                          scope.func$("self", (scope) =>
                            scope.func$("loc", (scope) =>
                              scope.func$("defs", (scope) =>
                                scope.apply$(scope.self["v2"], () =>
                                  scope.attrSet$({
                                    loc: () => scope.loc,
                                    defs: () =>
                                      scope.defs,
                                  }))["value"]))),
                        v2: () =>
                          scope.func$({
                            loc: scope.nixArg$.NoDefault,
                            defs: scope.nixArg$.NoDefault,
                          }, (scope) =>
                            scope.let$({
                              configuration: (scope) =>
                                scope.apply$(scope.base["extendModules"], () =>
                                  scope.attrSet$({
                                    modules: () =>
                                      scope.operators$.listConcat(
                                        [scope.attrSet$({
                                          ...scope.deepSet$([
                                            "_module",
                                            "args",
                                            "name",
                                          ], () =>
                                            scope.apply$(scope.last, () =>
                                              scope.loc)),
                                        })],
                                        scope.apply$(scope.allModules, () =>
                                          scope.defs),
                                      ),
                                    prefix: () =>
                                      scope.loc,
                                  })),
                            }).in$((scope) =>
                              scope.attrSet$({
                                headError: () =>
                                  scope.apply$(scope.checkDefsForError, () =>
                                    scope.check, () =>
                                    scope.loc, () =>
                                    scope.defs),
                                value: () =>
                                  scope.configuration["config"],
                                valueMeta: () =>
                                  scope.attrSet$({
                                    configuration: () =>
                                      scope.configuration,
                                  }),
                              })
                            )),
                      }),
                    emptyValue: () =>
                      scope.attrSet$({
                        value: () => scope.base["config"],
                      }),
                    getSubOptions: () =>
                      scope.func$("prefix", (scope) =>
                        scope.let$({
                          docsEval: (scope) =>
                            scope.apply$(scope.base["extendModules"], () =>
                              scope.attrSet$({
                                prefix: () => scope.prefix,
                                modules: () => [scope.noCheckForDocsModule],
                              })),
                          freeformType: (scope) =>
                            scope.docsEval["_module"]["freeformType"],
                        }).in$((scope) =>
                          scope.operators$.merge(
                            scope.docsEval["options"],
                            scope.apply$(
                              scope.optionalAttrs,
                              () => (scope.operators$.notEqual(
                                scope.freeformType,
                                null,
                              )),
                              () =>
                                scope.attrSet$({
                                  _freeformOptions: () =>
                                    scope.apply$(
                                      scope.freeformType["getSubOptions"],
                                      () => scope.prefix,
                                    ),
                                }),
                            ),
                          )
                        )),
                    getSubModules: () => scope.modules,
                    substSubModules: () =>
                      scope.func$(
                        "m",
                        (scope) =>
                          scope.apply$(
                            scope.submoduleWith,
                            () => (scope.operators$.merge(
                              scope.attrs,
                              scope.attrSet$({
                                modules: () => scope.m,
                              }),
                            )),
                          ),
                      ),
                    nestedTypes: () =>
                      scope.apply$(
                        scope.lib["optionalAttrs"],
                        () => (scope.operators$.notEqual(
                          scope.freeformType,
                          null,
                        )),
                        () =>
                          scope.attrSet$({
                            freeformType: () => scope.freeformType,
                          }),
                      ),
                    functor: () =>
                      scope.operators$.merge(
                        scope.apply$(scope.defaultFunctor, () => scope.name),
                        scope.attrSet$({
                          type: () => scope.lib["types"]["submoduleWith"],
                          payload: () =>
                            scope.attrSet$({
                              modules: () => scope.modules,
                              class: () => scope.class,
                              specialArgs: () => scope.specialArgs,
                              shorthandOnlyDefinesConfig: () =>
                                scope.shorthandOnlyDefinesConfig,
                              description: () => scope.description,
                            }),
                          binOp: () =>
                            scope.func$("lhs", (scope) =>
                              scope.func$("rhs", (scope) =>
                                scope.attrSet$({
                                  class: () =>
                                    scope.if$(
                                      scope.operators$.equal(
                                        scope.operators$.selectOrDefault(
                                          scope.lhs,
                                          ["class"],
                                          null,
                                        ),
                                        null,
                                      ),
                                    ).then$(() =>
                                      scope.operators$.selectOrDefault(
                                        scope.rhs,
                                        ["class"],
                                        null,
                                      )
                                    ).elseIf$(() =>
                                      scope.operators$.equal(
                                        scope.operators$.selectOrDefault(
                                          scope.rhs,
                                          ["class"],
                                          null,
                                        ),
                                        null,
                                      )
                                    ).then$(() =>
                                      scope.operators$.selectOrDefault(
                                        scope.lhs,
                                        ["class"],
                                        null,
                                      )
                                    ).elseIf$(() =>
                                      scope.operators$.equal(
                                        scope.operators$.selectOrDefault(
                                          scope.lhs,
                                          ["class"],
                                          null,
                                        ),
                                        scope.rhs["class"],
                                      )
                                    ).then$(() =>
                                      scope.operators$.selectOrDefault(
                                        scope.lhs,
                                        ["class"],
                                        null,
                                      )
                                    ).else$(() =>
                                      scope.apply$(scope.throw, () =>
                                        scope.str$(
                                          () => [
                                            'A submoduleWith option is declared multiple times with conflicting class values "',
                                            scope.apply$(
                                              scope.toString,
                                              () => scope.lhs["class"],
                                            ),
                                            '" and "',
                                            scope.apply$(
                                              scope.toString,
                                              () => scope.rhs["class"],
                                            ),
                                            '".',
                                          ]
                                        ))
                                    ),
                                  modules: () =>
                                    scope.operators$.listConcat(
                                      scope.lhs["modules"],
                                      scope.rhs["modules"],
                                    ),
                                  specialArgs: () =>
                                    scope.let$({
                                      intersecting: (scope) =>
                                        scope.apply$(
                                          scope.builtins["intersectAttrs"],
                                          () => scope.lhs["specialArgs"],
                                          () => scope.rhs["specialArgs"],
                                        ),
                                    }).in$((scope) =>
                                      scope.if$(
                                        scope.operators$.equal(
                                          scope.intersecting,
                                          {},
                                        ),
                                      ).then$(() =>
                                        scope.operators$.merge(
                                          scope.lhs["specialArgs"],
                                          scope.rhs["specialArgs"],
                                        )
                                      ).else$(() =>
                                        scope.apply$(scope.throw, () =>
                                          scope.str$(
                                            () => [
                                              'A submoduleWith option is declared multiple times with the same specialArgs "',
                                              scope.apply$(scope.toString, () =>
                                                scope.apply$(
                                                  scope.attrNames,
                                                  () => scope.intersecting,
                                                )),
                                              '"',
                                            ]
                                          ))
                                      )
                                    ),
                                  shorthandOnlyDefinesConfig: () =>
                                    scope.if$(
                                      scope.operators$.equal(
                                        scope.lhs["shorthandOnlyDefinesConfig"],
                                        null,
                                      ),
                                    ).then$(() =>
                                      scope.rhs["shorthandOnlyDefinesConfig"]
                                    ).elseIf$(() =>
                                      scope.operators$.equal(
                                        scope.rhs["shorthandOnlyDefinesConfig"],
                                        null,
                                      )
                                    ).then$(() =>
                                      scope.lhs["shorthandOnlyDefinesConfig"]
                                    ).elseIf$(() =>
                                      scope.operators$.equal(
                                        scope.lhs["shorthandOnlyDefinesConfig"],
                                        scope.rhs["shorthandOnlyDefinesConfig"],
                                      )
                                    ).then$(() =>
                                      scope.lhs["shorthandOnlyDefinesConfig"]
                                    ).else$(() =>
                                      scope.apply$(
                                        scope.throw,
                                        "A submoduleWith option is declared multiple times with conflicting shorthandOnlyDefinesConfig values",
                                      )
                                    ),
                                  description: () =>
                                    scope.if$(
                                      scope.operators$.equal(
                                        scope.lhs["description"],
                                        null,
                                      ),
                                    ).then$(() => scope.rhs["description"])
                                      .elseIf$(() =>
                                        scope.operators$.equal(
                                          scope.rhs["description"],
                                          null,
                                        )
                                      ).then$(() => scope.lhs["description"])
                                      .elseIf$(() =>
                                        scope.operators$.equal(
                                          scope.lhs["description"],
                                          scope.rhs["description"],
                                        )
                                      ).then$(() => scope.lhs["description"])
                                      .else$(() =>
                                        scope.apply$(
                                          scope.throw,
                                          "A submoduleWith option is declared multiple times with conflicting descriptions",
                                        )
                                      ),
                                }))),
                        }),
                      ),
                  }))
              )),
          enum: (scope) =>
            scope.func$("values", (scope) =>
              scope.let$({
                unique: (scope) => scope.lib["lists"]["unique"],
                show: (scope) =>
                  scope.func$("v", (scope) =>
                    scope.if$(
                      scope.apply$(scope.builtins["isString"], () => scope.v),
                    ).then$(() => scope.str$(() => ['"', scope.v, '"']))
                      .elseIf$(() =>
                        scope.apply$(scope.builtins["isInt"], () => scope.v)
                      ).then$(() => scope.apply$(scope.toString, () => scope.v))
                      .elseIf$(() =>
                        scope.apply$(scope.builtins["isBool"], () => scope.v)
                      ).then$(() =>
                        scope.apply$(scope.boolToString, () => scope.v)
                      ).else$(() =>
                        scope.str$(
                          () => [
                            "<",
                            scope.apply$(
                              scope.builtins["typeOf"],
                              () => scope.v,
                            ),
                            ">",
                          ]
                        )
                      )),
              }).in$((scope) =>
                scope.apply$(scope.mkOptionType, () =>
                  scope.recAttrSet$({
                    name: "enum",
                    description: (scope) =>
                      scope.if$(scope.operators$.equal(scope.values, [])).then$(
                        "impossible (empty enum)",
                      ).elseIf$(() =>
                        scope.operators$.equal(
                          scope.apply$(scope.builtins["length"], () =>
                            scope.values),
                          1n,
                        )
                      ).then$(() =>
                        scope.str$(
                          () => [
                            "value ",
                            scope.apply$(
                              scope.show,
                              () =>
                                scope.apply$(scope.builtins["head"], () =>
                                  scope.values),
                            ),
                            " (singular enum)",
                          ]
                        )
                      ).else$(() =>
                        scope.str$(
                          () => [
                            "one of ",
                            scope.apply$(
                              scope.concatMapStringsSep,
                              ", ",
                              () => scope.show,
                              () => scope.values,
                            ),
                          ]
                        )
                      ),
                    descriptionClass: (scope) =>
                      scope.if$(
                        scope.operators$.lessThan(
                          scope.apply$(scope.builtins["length"], () =>
                            scope.values),
                          2n,
                        ),
                      ).then$("noun").else$("conjunction"),
                    check: (scope) =>
                      scope.apply$(
                        scope.flip,
                        () => scope.elem,
                        () => scope.values,
                      ),
                    merge: (scope) => scope.mergeEqualOption,
                    functor: (scope) =>
                      scope.operators$.merge(
                        scope.apply$(scope.defaultFunctor, () => scope.name),
                        scope.attrSet$({
                          payload: () =>
                            scope.attrSet$({
                              values: () => scope.values,
                            }),
                          type: () =>
                            scope.func$("payload", (scope) =>
                              scope.apply$(scope.lib["types"]["enum"], () =>
                                scope.payload["values"])),
                          binOp: () =>
                            scope.func$("a", (scope) =>
                              scope.func$("b", (scope) =>
                                scope.attrSet$({
                                  values: () =>
                                    scope.apply$(
                                      scope.unique,
                                      () => (scope.operators$.listConcat(
                                        scope.a["values"],
                                        scope.b["values"],
                                      )),
                                    ),
                                }))),
                        }),
                      ),
                  }))
              )),
          serializableValueWith: (scope) =>
            scope.func$(
              { typeName: scope.nixArg$.NoDefault, nullable: true },
              (scope) =>
                scope.let$({
                  baseType: (scope) =>
                    scope.apply$(
                      scope.oneOf,
                      () => [
                        scope.bool,
                        scope.int,
                        scope.float,
                        scope.str,
                        scope.path,
                        scope.apply$(scope.attrsOf, () => scope.valueType),
                        scope.apply$(scope.listOf, () => scope.valueType),
                      ],
                    ),
                  valueType: (scope) =>
                    scope.operators$.merge(
                      scope.if$(scope.nullable).then$(() =>
                        scope.apply$(scope.nullOr, () => scope.baseType)
                      ).else$(() => scope.baseType),
                      scope.attrSet$({
                        description: () =>
                          scope.str$(() => [scope.typeName, " value"]),
                      }),
                    ),
                }).in$((scope) => scope.valueType),
            ),
          json: (scope) =>
            scope.apply$(scope.serializableValueWith, { typeName: "JSON" }),
          toml: (scope) =>
            scope.apply$(scope.serializableValueWith, {
              typeName: "TOML",
              nullable: false,
            }),
          either: (scope) =>
            scope.func$("t1", (scope) =>
              scope.func$("t2", (scope) =>
                scope.apply$(scope.mkOptionType, () =>
                  scope.recAttrSet$({
                    name: "either",
                    description: (scope) =>
                      scope.if$(
                        scope.operators$.equal(
                          scope.operators$.selectOrDefault(scope.t1, [
                            "descriptionClass",
                          ], null),
                          "nonRestrictiveClause",
                        ),
                      ).then$(() =>
                        scope.str$(
                          () => [
                            scope.t1["description"],
                            ", or ",
                            scope.apply$(scope.optionDescriptionPhrase, () =>
                              scope.func$(
                                "class",
                                (
                                  scope,
                                ) => ((scope.operators$.equal(
                                  scope.class,
                                  "noun",
                                )) ||
                                  (scope.operators$.equal(
                                    scope.class,
                                    "conjunction",
                                  ))),
                              ), () => scope.t2),
                          ]
                        )
                      ).else$(() =>
                        scope.str$(
                          () => [
                            scope.apply$(scope.optionDescriptionPhrase, () =>
                              scope.func$(
                                "class",
                                (
                                  scope,
                                ) => ((scope.operators$.equal(
                                  scope.class,
                                  "noun",
                                )) ||
                                  (scope.operators$.equal(
                                    scope.class,
                                    "conjunction",
                                  ))),
                              ), () => scope.t1),
                            " or ",
                            scope.apply$(scope.optionDescriptionPhrase, () =>
                              scope.func$(
                                "class",
                                (
                                  scope,
                                ) => (((scope.operators$.equal(
                                  scope.class,
                                  "noun",
                                )) ||
                                  (scope.operators$.equal(
                                    scope.class,
                                    "conjunction",
                                  ))) ||
                                  (scope.operators$.equal(
                                    scope.class,
                                    "composite",
                                  ))),
                              ), () => scope.t2),
                          ]
                        )
                      ),
                    descriptionClass: "conjunction",
                    check: (scope) =>
                      scope.attrSet$({
                        __functor: () =>
                          scope.func$("_self", (scope) =>
                            scope.func$(
                              "x",
                              (scope) => ((scope.apply$(scope.t1["check"], () =>
                                scope.x)) ||
                                (scope.apply$(scope.t2["check"], () =>
                                  scope.x))),
                            )),
                        isV2MergeCoherent: true,
                      }),
                    merge: (scope) =>
                      scope.attrSet$({
                        __functor: () =>
                          scope.func$("self", (scope) =>
                            scope.func$("loc", (scope) =>
                              scope.func$("defs", (scope) =>
                                scope.apply$(scope.self["v2"], () =>
                                  scope.attrSet$({
                                    loc: () => scope.loc,
                                    defs: () => scope.defs,
                                  }))["value"]))),
                        v2: () =>
                          scope.func$({
                            loc: scope.nixArg$.NoDefault,
                            defs: scope.nixArg$.NoDefault,
                            args: scope.nixArg$.AllArgs,
                          }, (scope) =>
                            scope.let$({
                              t1CheckedAndMerged: (scope) =>
                                scope.if$(
                                  scope.operators$.hasAttr(
                                    scope.t1["merge"],
                                    "v2",
                                  ),
                                ).then$(() =>
                                  scope.apply$(
                                    scope.checkV2MergeCoherence,
                                    () => scope.loc,
                                    () => scope.t1,
                                    () =>
                                      scope.apply$(
                                        scope.t1["merge"]["v2"],
                                        () => scope.args,
                                      ),
                                  )
                                ).else$(() =>
                                  scope.attrSet$({
                                    value: () =>
                                      scope.apply$(scope.t1["merge"], () =>
                                        scope.loc, () =>
                                        scope.defs),
                                    headError: () =>
                                      scope.apply$(
                                        scope.checkDefsForError,
                                        () => scope.t1["check"],
                                        () => scope.loc,
                                        () => scope.defs,
                                      ),
                                    valueMeta: {},
                                  })
                                ),
                              t2CheckedAndMerged: (scope) =>
                                scope.if$(
                                  scope.operators$.hasAttr(
                                    scope.t2["merge"],
                                    "v2",
                                  ),
                                ).then$(() =>
                                  scope.apply$(
                                    scope.checkV2MergeCoherence,
                                    () => scope.loc,
                                    () => scope.t2,
                                    () =>
                                      scope.apply$(
                                        scope.t2["merge"]["v2"],
                                        () => scope.args,
                                      ),
                                  )
                                ).else$(() =>
                                  scope.attrSet$({
                                    value: () =>
                                      scope.apply$(scope.t2["merge"], () =>
                                        scope.loc, () =>
                                        scope.defs),
                                    headError: () =>
                                      scope.apply$(
                                        scope.checkDefsForError,
                                        () => scope.t2["check"],
                                        () => scope.loc,
                                        () => scope.defs,
                                      ),
                                    valueMeta: {},
                                  })
                                ),
                              checkedAndMerged: (scope) =>
                                scope.if$(
                                  scope.operators$.equal(
                                    scope.t1CheckedAndMerged["headError"],
                                    null,
                                  ),
                                ).then$(() =>
                                  scope.t1CheckedAndMerged
                                ).elseIf$(() =>
                                  scope.operators$.equal(
                                    scope.t2CheckedAndMerged["headError"],
                                    null,
                                  )
                                ).then$(() =>
                                  scope.t2CheckedAndMerged
                                ).else$(() =>
                                  scope.recAttrSet$({
                                    valueMeta: (scope) =>
                                      scope.attrSet$({
                                        headError: () =>
                                          scope.headError,
                                      }),
                                    headError: (scope) =>
                                      scope.attrSet$({
                                        message: () =>
                                          scope.str$(
                                            () => [
                                              "The option `",
                                              scope.apply$(
                                                scope.showOption,
                                                () => scope.loc,
                                              ),
                                              "` is neither a value of type `",
                                              scope.t1["description"],
                                              "` nor `",
                                              scope.t2["description"],
                                              "`, Definition values: ",
                                              scope.apply$(
                                                scope.showDefs,
                                                () => scope.defs,
                                              ),
                                            ]
                                          ),
                                      }),
                                    value: (scope) =>
                                      scope.apply$(scope.lib["warn"], () =>
                                        scope.str$(
                                          () => [
                                            "One or more definitions did not pass the type-check of the 'either' type.\n",
                                            scope.headError["message"],
                                            "\nIf `either`, `oneOf` or similar is used in freeformType, ensure that it is preceded by an 'attrsOf' such as: `freeformType = types.attrsOf (types.either t1 t2)`.\nOtherwise consider using the correct type for the option `",
                                            scope.apply$(scope.showOption, () =>
                                              scope.loc),
                                            "`.  This will be an error in Nixpkgs 26.05.\n",
                                          ]
                                        ), () =>
                                        scope.apply$(scope.mergeOneOption, () =>
                                          scope.loc, () =>
                                          scope.defs)),
                                  })
                                ),
                            }).in$((scope) =>
                              scope.checkedAndMerged
                            )),
                      }),
                    typeMerge: (scope) =>
                      scope.func$("f'", (scope) =>
                        scope.let$({
                          mt1: (scope) =>
                            scope.apply$(scope.t1["typeMerge"], () =>
                              scope.apply$(scope.head, () =>
                                scope["f'"]["payload"]["elemType"])["functor"]),
                          mt2: (scope) =>
                            scope.apply$(scope.t2["typeMerge"], () =>
                              scope.apply$(
                                scope.elemAt,
                                () => scope["f'"]["payload"]["elemType"],
                                1n,
                              )["functor"]),
                        }).in$((scope) =>
                          scope.if$(
                            ((scope.operators$.equal(
                              scope.name,
                              scope["f'"]["name"],
                            )) &&
                              (scope.operators$.notEqual(scope.mt1, null))) &&
                            (scope.operators$.notEqual(scope.mt2, null)),
                          ).then$(() =>
                            scope.apply$(scope.functor["type"], () =>
                              scope.mt1, () =>
                              scope.mt2)
                          ).else$(null)
                        )),
                    functor: (scope) =>
                      scope.apply$(scope.elemTypeFunctor, () =>
                        scope.name, () =>
                        scope.attrSet$({
                          elemType: () => [scope.t1, scope.t2],
                        })),
                    ...scope.deepSet$(["nestedTypes", "left"], (scope) =>
                      scope.t1),
                    ...scope.deepSet$(["nestedTypes", "right"], (scope) =>
                      scope.t2),
                  })))),
          oneOf: (scope) =>
            scope.func$("ts", (scope) =>
              scope.let$({
                "head'": (scope) =>
                  scope.if$(scope.operators$.equal(scope.ts, [])).then$(() =>
                    scope.apply$(
                      scope.throw,
                      "types.oneOf needs to get at least one type in its argument",
                    )
                  ).else$(() => scope.apply$(scope.head, () => scope.ts)),
              }).in$((scope) =>
                scope.apply$(scope["foldl'"], () => scope.either, () =>
                  scope["head'"], () =>
                  scope.apply$(scope.tail, () => scope.ts))
              )),
          coercedTo: (scope) =>
            scope.func$("coercedType", (scope) =>
              scope.func$("coerceFunc", (scope) =>
                scope.func$("finalType", (scope) =>
                  ((_cond) => {
                    if (!_cond) {
                      throw new Error(
                        "assertion failed: " +
                          'coercedType.getSubModules == null\n      || throw "coercedTo: coercedType must not have submodules (it’s a ${coercedType.description})"',
                      );
                    }
                    return scope.apply$(scope.mkOptionType, () =>
                      scope.recAttrSet$({
                        name: "coercedTo",
                        description: (scope) =>
                          scope.str$(
                            () => [
                              scope.apply$(
                                scope.optionDescriptionPhrase,
                                () =>
                                  scope.func$(
                                    "class",
                                    (scope) =>
                                      scope.operators$.equal(
                                        scope.class,
                                        "noun",
                                      ),
                                  ),
                                () => scope.finalType,
                              ),
                              " or ",
                              scope.apply$(
                                scope.optionDescriptionPhrase,
                                () =>
                                  scope.func$(
                                    "class",
                                    (scope) =>
                                      scope.operators$.equal(
                                        scope.class,
                                        "noun",
                                      ),
                                  ),
                                () => scope.coercedType,
                              ),
                              " convertible to it",
                            ]
                          ),
                        check: (scope) =>
                          scope.attrSet$({
                            __functor: () =>
                              scope.func$("_self", (scope) =>
                                scope.func$(
                                  "x",
                                  (
                                    scope,
                                  ) => (((scope.apply$(
                                    scope.coercedType["check"],
                                    () => scope.x,
                                  )) &&
                                    (scope.apply$(
                                      scope.finalType["check"],
                                      () =>
                                        scope.apply$(
                                          scope.coerceFunc,
                                          () => scope.x,
                                        ),
                                    ))) ||
                                    (scope.apply$(
                                      scope.finalType["check"],
                                      () => scope.x,
                                    ))),
                                )),
                            isV2MergeCoherent: true,
                          }),
                        merge: (scope) =>
                          scope.attrSet$({
                            __functor: () =>
                              scope.func$("self", (scope) =>
                                scope.func$("loc", (scope) =>
                                  scope.func$("defs", (scope) =>
                                    scope.apply$(scope.self["v2"], () =>
                                      scope.attrSet$({
                                        loc: () => scope.loc,
                                        defs: () => scope.defs,
                                      }))["value"]))),
                            v2: () =>
                              scope.func$({
                                loc: scope.nixArg$.NoDefault,
                                defs: scope.nixArg$.NoDefault,
                              }, (scope) =>
                                scope.let$({
                                  finalDefs: (scope) =>
                                    scope.apply$(scope.map, () =>
                                      scope.func$("def", (scope) =>
                                        scope.operators$.merge(
                                          scope.def,
                                          scope.attrSet$({
                                            value: () =>
                                              scope.if$(
                                                scope.operators$.hasAttr(
                                                  scope.coercedType["merge"],
                                                  "v2",
                                                ),
                                              ).then$(() =>
                                                scope.let$({
                                                  merged: (scope) =>
                                                    scope.apply$(
                                                      scope
                                                        .checkV2MergeCoherence,
                                                      () => scope.loc,
                                                      () => scope.coercedType,
                                                      () =>
                                                        scope.apply$(
                                                          scope
                                                            .coercedType[
                                                              "merge"
                                                            ]["v2"],
                                                          () =>
                                                            scope.attrSet$({
                                                              loc: () =>
                                                                scope.loc,
                                                              defs:
                                                                () => [
                                                                  scope.def,
                                                                ],
                                                            }),
                                                        ),
                                                    ),
                                                }).in$((scope) =>
                                                  scope.if$(
                                                    scope.operators$.equal(
                                                      scope.merged["headError"],
                                                      null,
                                                    ),
                                                  ).then$(() =>
                                                    scope.apply$(
                                                      scope.coerceFunc,
                                                      () => scope.def["value"],
                                                    )
                                                  ).else$(() =>
                                                    scope.def["value"]
                                                  )
                                                )
                                              ).elseIf$(() =>
                                                scope.apply$(
                                                  scope.coercedType["check"],
                                                  () => scope.def["value"],
                                                )
                                              ).then$(() =>
                                                scope.apply$(
                                                  scope.coerceFunc,
                                                  () => scope.def["value"],
                                                )
                                              ).else$(() => scope.def["value"]),
                                          }),
                                        )), () => scope.defs),
                                }).in$((scope) =>
                                  scope.if$(
                                    scope.operators$.hasAttr(
                                      scope.finalType["merge"],
                                      "v2",
                                    ),
                                  ).then$(() =>
                                    scope.apply$(
                                      scope.checkV2MergeCoherence,
                                      () => scope.loc,
                                      () => scope.finalType,
                                      () =>
                                        scope.apply$(
                                          scope.finalType["merge"]["v2"],
                                          () =>
                                            scope.attrSet$({
                                              loc: () => scope.loc,
                                              defs: () => scope.finalDefs,
                                            }),
                                        ),
                                    )
                                  ).else$(() =>
                                    scope.attrSet$({
                                      value: () =>
                                        scope.apply$(
                                          scope.finalType["merge"],
                                          () => scope.loc,
                                          () => scope.finalDefs,
                                        ),
                                      valueMeta: {},
                                      headError: () =>
                                        scope.apply$(
                                          scope.checkDefsForError,
                                          () => scope.check,
                                          () => scope.loc,
                                          () => scope.defs,
                                        ),
                                    })
                                  )
                                )),
                          }),
                        emptyValue: (scope) => scope.finalType["emptyValue"],
                        getSubOptions: (scope) =>
                          scope.finalType["getSubOptions"],
                        getSubModules: (scope) =>
                          scope.finalType["getSubModules"],
                        substSubModules: (scope) =>
                          scope.func$("m", (scope) =>
                            scope.apply$(scope.coercedTo, () =>
                              scope.coercedType, () =>
                              scope.coerceFunc, () =>
                              scope.apply$(
                                scope.finalType["substSubModules"],
                                () => scope.m,
                              ))),
                        typeMerge: (scope) =>
                          scope.func$("t", (scope) =>
                            null),
                        functor: (scope) =>
                          scope.apply$(scope.defaultFunctor, () => scope.name),
                        ...scope.deepSet$(
                          ["nestedTypes", "coercedType"],
                          (scope) => scope.coercedType,
                        ),
                        ...scope.deepSet$(
                          ["nestedTypes", "finalType"],
                          (scope) => scope.finalType,
                        ),
                      }));
                  })(
                    (scope.operators$.equal(
                      scope.coercedType["getSubModules"],
                      null,
                    )) || (scope.apply$(scope.throw, () =>
                      scope.str$(
                        () => [
                          "coercedTo: coercedType must not have submodules (it’s a ",
                          scope.coercedType["description"],
                          ")",
                        ]
                      ))),
                  )))),
          addCheck: (scope) =>
            scope.func$(
              "elemType",
              (scope) =>
                scope.func$("check", (scope) =>
                  scope.if$(
                    scope.operators$.hasAttr(scope.elemType["merge"], "v2"),
                  ).then$(() =>
                    scope.operators$.merge(
                      scope.elemType,
                      scope.attrSet$({
                        check: () =>
                          scope.attrSet$({
                            __functor: () =>
                              scope.func$("_self", (scope) =>
                                scope.func$(
                                  "x",
                                  (
                                    scope,
                                  ) => ((scope.apply$(
                                    scope.elemType["check"],
                                    () => scope.x,
                                  )) && (scope.apply$(scope.check, () =>
                                    scope.x))),
                                )),
                            isV2MergeCoherent: true,
                          }),
                        merge: () =>
                          scope.attrSet$({
                            __functor: () =>
                              scope.func$("self", (scope) =>
                                scope.func$("loc", (scope) =>
                                  scope.func$("defs", (scope) =>
                                    scope.apply$(scope.self["v2"], () =>
                                      scope.attrSet$({
                                        loc: () => scope.loc,
                                        defs: () => scope.defs,
                                      }))["value"]))),
                            v2: () =>
                              scope.func$({
                                loc: scope.nixArg$.NoDefault,
                                defs: scope.nixArg$.NoDefault,
                                args: scope.nixArg$.AllArgs,
                              }, (scope) =>
                                scope.let$({
                                  orig: (scope) =>
                                    scope.apply$(
                                      scope.checkV2MergeCoherence,
                                      () => scope.loc,
                                      () => scope.elemType,
                                      () =>
                                        scope.apply$(
                                          scope.elemType["merge"]["v2"],
                                          () => scope.args,
                                        ),
                                    ),
                                  "headError'": (scope) =>
                                    scope.if$(
                                      scope.operators$.notEqual(
                                        scope.orig["headError"],
                                        null,
                                      ),
                                    ).then$(() =>
                                      scope.orig["headError"]
                                    ).else$(() =>
                                      scope.apply$(
                                        scope.checkDefsForError,
                                        () => scope.check,
                                        () => scope.loc,
                                        () => scope.defs,
                                      )
                                    ),
                                }).in$((scope) =>
                                  scope.operators$.merge(
                                    scope.orig,
                                    scope.attrSet$({
                                      headError: () => scope["headError'"],
                                    }),
                                  )
                                )),
                          }),
                      }),
                    )
                  ).else$(() =>
                    scope.operators$.merge(
                      scope.elemType,
                      scope.attrSet$({
                        check: () =>
                          scope.func$(
                            "x",
                            (
                              scope,
                            ) => ((scope.apply$(
                              scope.elemType["check"],
                              () => scope.x,
                            )) && (scope.apply$(scope.check, () => scope.x))),
                          ),
                      }),
                    )
                  )),
            ),
          mergeTypes: (scope) =>
            scope.func$(
              "a",
              (scope) =>
                scope.func$("b", (scope) =>
                  ((_cond) => {
                    if (!_cond) {
                      throw new Error(
                        "assertion failed: " +
                          "isOptionType a && isOptionType b",
                      );
                    }
                    return scope.let$({
                      merged: (scope) =>
                        scope.apply$(
                          scope.a["typeMerge"],
                          () => scope.b["functor"],
                        ),
                    }).in$((scope) =>
                      scope.if$(scope.operators$.equal(scope.merged, null))
                        .then$(() =>
                          scope.apply$(scope.setType, "merge-error", {
                            error: "Cannot merge types",
                          })
                        ).else$(() => scope.merged)
                    );
                  })(
                    (scope.apply$(scope.isOptionType, () => scope.a)) &&
                    (scope.apply$(scope.isOptionType, () => scope.b)),
                  )),
            ),
          types: (scope) => scope.lib["types"],
        })
      ))
  ),
);
