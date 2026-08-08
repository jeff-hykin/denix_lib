import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./options.nix", import.meta.url).pathname,
  ({ scope }) => (
    /**
  Module System option handling.
    */ scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        all: (scope) => scope.lib["all"],
        collect: (scope) => scope.lib["collect"],
        concatLists: (scope) => scope.lib["concatLists"],
        concatMap: (scope) => scope.lib["concatMap"],
        concatMapStringsSep: (scope) => scope.lib["concatMapStringsSep"],
        filter: (scope) => scope.lib["filter"],
        "foldl'": (scope) => scope.lib["foldl'"],
        head: (scope) => scope.lib["head"],
        tail: (scope) => scope.lib["tail"],
        isAttrs: (scope) => scope.lib["isAttrs"],
        isBool: (scope) => scope.lib["isBool"],
        isDerivation: (scope) => scope.lib["isDerivation"],
        isFunction: (scope) => scope.lib["isFunction"],
        isInt: (scope) => scope.lib["isInt"],
        isList: (scope) => scope.lib["isList"],
        isString: (scope) => scope.lib["isString"],
        length: (scope) => scope.lib["length"],
        mapAttrs: (scope) => scope.lib["mapAttrs"],
        optional: (scope) => scope.lib["optional"],
        optionals: (scope) => scope.lib["optionals"],
        take: (scope) => scope.lib["take"],
        attrByPath: (scope) => scope.lib["attrsets"]["attrByPath"],
        optionalAttrs: (scope) => scope.lib["attrsets"]["optionalAttrs"],
        showAttrPath: (scope) => scope.lib["attrsets"]["showAttrPath"],
        concatMapStrings: (scope) => scope.lib["strings"]["concatMapStrings"],
        concatStringsSep: (scope) => scope.lib["strings"]["concatStringsSep"],
        mkOptionType: (scope) => scope.lib["types"]["mkOptionType"],
        last: (scope) => scope.lib["lists"]["last"],
        toList: (scope) => scope.lib["lists"]["toList"],
        prioritySuggestion:
          "Use `lib.mkForce value` or `lib.mkDefault value` to change the priority on any of these definitions.\n",
      }).in$((scope) =>
        scope.recAttrSet$({
          isOption: (scope) => scope.apply$(scope.lib["isType"], "option"),
          mkOption: (scope) =>
            scope.func$(
              {
                default: null,
                defaultText: null,
                example: null,
                description: null,
                relatedPackages: null,
                type: null,
                apply: null,
                internal: null,
                visible: null,
                readOnly: null,
                attrs: scope.nixArg$.AllArgs,
              },
              (scope) =>
                scope.operators$.merge(scope.attrs, { _type: "option" }),
            ),
          mkEnableOption: (scope) =>
            scope.func$("name", (scope) =>
              scope.apply$(scope.mkOption, () =>
                scope.attrSet$({
                  default: false,
                  example: true,
                  description: () =>
                    scope.str$(() => ["Whether to enable ", scope.name, "."]),
                  type: () => scope.lib["types"]["bool"],
                }))),
          mkPackageOption: (scope) =>
            scope.func$("pkgs", (scope) =>
              scope.func$("name", (scope) =>
                scope.func$({
                  nullable: false,
                  default: (scope) => scope.name,
                  example: null,
                  extraDescription: "",
                  pkgsText: "pkgs",
                }, (scope) =>
                  scope.let$({
                    "name'": (scope) =>
                      scope.if$(scope.apply$(scope.isList, () => scope.name))
                        .then$(() => scope.apply$(scope.last, () => scope.name))
                        .else$(() => scope.name),
                    "default'": (scope) =>
                      scope.apply$(scope.toList, () => scope.default),
                    defaultText: (scope) =>
                      scope.apply$(scope.showAttrPath, () => scope["default'"]),
                    defaultValue: (scope) =>
                      scope.apply$(
                        scope.attrByPath,
                        () => scope["default'"],
                        () =>
                          scope.apply$(scope.throw, () =>
                            scope.str$(
                              () => [
                                scope.defaultText,
                                " cannot be found in ",
                                scope.pkgsText,
                              ]
                            )),
                        () => scope.pkgs,
                      ),
                    defaults: (scope) =>
                      scope.if$(scope.operators$.notEqual(scope.default, null))
                        .then$(() =>
                          scope.attrSet$({
                            default: () => scope.defaultValue,
                            defaultText: () =>
                              scope.apply$(
                                scope.literalExpression,
                                () =>
                                  scope.str$(
                                    () => [
                                      scope.pkgsText,
                                      ".",
                                      scope.defaultText,
                                    ]
                                  ),
                              ),
                          })
                        ).else$(() =>
                          scope.apply$(
                            scope.optionalAttrs,
                            () => scope.nullable,
                            { default: null },
                          )
                        ),
                  }).in$((scope) =>
                    scope.apply$(
                      scope.mkOption,
                      () => (scope.operators$.merge(
                        scope.defaults,
                        scope.operators$.merge(
                          scope.attrSet$({
                            description: () =>
                              scope.operators$.add(
                                scope.operators$.add(
                                  scope.str$(
                                    () => [
                                      "The ",
                                      scope["name'"],
                                      " package to use.",
                                    ]
                                  ),
                                  scope.if$(
                                    scope.operators$.equal(
                                      scope.extraDescription,
                                      "",
                                    ),
                                  ).then$("").else$(" "),
                                ),
                                scope.extraDescription,
                              ),
                            type: () =>
                              scope.with$(() => scope.lib["types"], (scope) =>
                                scope.apply$(
                                  scope.if$(scope.nullable).then$(() =>
                                    scope.nullOr
                                  ).else$(() => scope.lib["id"]),
                                  () => scope.package,
                                )),
                          }),
                          scope.apply$(
                            scope.optionalAttrs,
                            () => (scope.operators$.notEqual(
                              scope.example,
                              null,
                            )),
                            () =>
                              scope.attrSet$({
                                example: () =>
                                  scope.apply$(scope.literalExpression, () =>
                                    scope.if$(
                                      scope.apply$(scope.isList, () =>
                                        scope.example),
                                    ).then$(() =>
                                      scope.str$(
                                        () => [
                                          scope.pkgsText,
                                          ".",
                                          scope.apply$(
                                            scope.showAttrPath,
                                            () => scope.example,
                                          ),
                                        ]
                                      )
                                    ).else$(() => scope.example)),
                              }),
                          ),
                        ),
                      )),
                    )
                  )))),
          mkSinkUndeclaredOptions: (scope) =>
            scope.func$("attrs", (scope) =>
              scope.apply$(
                scope.mkOption,
                () => (scope.operators$.merge(
                  scope.attrSet$({
                    internal: true,
                    visible: false,
                    default: false,
                    description: "Sink for option definitions.",
                    type: () =>
                      scope.apply$(scope.mkOptionType, () =>
                        scope.attrSet$({
                          name: "sink",
                          check: () => scope.func$("x", (scope) => true),
                          merge: () =>
                            scope.func$("loc", (scope) =>
                              scope.func$("defs", (scope) => false)),
                        })),
                    apply: () =>
                      scope.func$("x", (scope) =>
                        scope.apply$(
                          scope.throw,
                          "Option value is not readable because the option is not declared.",
                        )),
                  }),
                  scope.attrs,
                )),
              )),
          mergeDefaultOption: (scope) =>
            scope.func$("loc", (scope) =>
              scope.func$("defs", (scope) =>
                scope.let$({
                  list: (scope) =>
                    scope.apply$(scope.getValues, () => scope.defs),
                }).in$((scope) =>
                  scope.if$(
                    scope.operators$.equal(
                      scope.apply$(scope.length, () => scope.list),
                      1n,
                    ),
                  ).then$(() => scope.apply$(scope.head, () => scope.list))
                    .elseIf$(() =>
                      scope.apply$(
                        scope.all,
                        () => scope.isFunction,
                        () => scope.list,
                      )
                    ).then$(() =>
                      scope.func$(
                        "x",
                        (scope) =>
                          scope.apply$(scope.mergeDefaultOption, () =>
                            scope.loc, () =>
                            scope.apply$(scope.map, () =>
                              scope.func$("f", (scope) =>
                                scope.apply$(scope.f, () =>
                                  scope.x)), () =>
                              scope.list)),
                      )
                    ).elseIf$(() =>
                      scope.apply$(
                        scope.all,
                        () => scope.isList,
                        () => scope.list,
                      )
                    ).then$(() =>
                      scope.apply$(scope.concatLists, () => scope.list)
                    ).elseIf$(() =>
                      scope.apply$(
                        scope.all,
                        () => scope.isAttrs,
                        () => scope.list,
                      )
                    ).then$(() =>
                      scope.apply$(
                        scope["foldl'"],
                        () => scope.lib["mergeAttrs"],
                        {},
                        () => scope.list,
                      )
                    ).elseIf$(() =>
                      scope.apply$(
                        scope.all,
                        () => scope.isBool,
                        () => scope.list,
                      )
                    ).then$(() =>
                      scope.apply$(
                        scope["foldl'"],
                        () => scope.lib["or"],
                        false,
                        () => scope.list,
                      )
                    ).elseIf$(() =>
                      scope.apply$(
                        scope.all,
                        () => scope.isString,
                        () => scope.list,
                      )
                    ).then$(() =>
                      scope.apply$(scope.lib["concatStrings"], () => scope.list)
                    ).elseIf$(() => ((scope.apply$(scope.all, () =>
                      scope.isInt, () =>
                      scope.list)) && (scope.apply$(scope.all, () =>
                        scope.func$("x", (scope) =>
                          scope.operators$.equal(
                            scope.x,
                            scope.apply$(scope.head, () => scope.list),
                          )), () =>
                        scope.list)))
                    ).then$(() =>
                      scope.apply$(scope.head, () =>
                        scope.list)
                    ).else$(() =>
                      scope.apply$(scope.throw, () =>
                        scope.str$(
                          () => [
                            "Cannot merge definitions of `",
                            scope.apply$(scope.showOption, () => scope.loc),
                            "'. Definition values:",
                            scope.apply$(scope.showDefs, () => scope.defs),
                          ]
                        ))
                    )
                ))),
          mergeOneOption: (scope) =>
            scope.apply$(scope.mergeUniqueOption, { message: "" }),
          mergeUniqueOption: (scope) =>
            scope.func$({
              message: scope.nixArg$.NoDefault,
              merge: (scope) =>
                scope.func$("loc", (scope) =>
                  scope.func$("defs", (scope) =>
                    scope.apply$(scope.head, () =>
                      scope.defs)["value"])),
            }, (scope) =>
              scope.func$("loc", (scope) =>
                scope.func$("defs", (scope) =>
                  scope.if$(
                    scope.operators$.equal(
                      scope.apply$(scope.length, () => scope.defs),
                      1n,
                    ),
                  ).then$(() =>
                    scope.apply$(scope.merge, () => scope.loc, () => scope.defs)
                  ).else$(() =>
                    ((_cond) => {
                      if (!_cond) {
                        throw new Error(
                          "assertion failed: " + "length defs > 1",
                        );
                      }
                      return scope.apply$(
                        scope.throw,
                        () =>
                          scope.str$(
                            () => [
                              "The option `",
                              scope.apply$(scope.showOption, () => scope.loc),
                              "' is defined multiple times while it's expected to be unique.\n",
                              scope.message,
                              "\nDefinition values:",
                              scope.apply$(scope.showDefs, () => scope.defs),
                              "\n",
                              scope.prioritySuggestion,
                            ]
                          ),
                      );
                    })(
                      scope.operators$.greaterThan(
                        scope.apply$(scope.length, () => scope.defs),
                        1n,
                      ),
                    )
                  )))),
          mergeEqualOption: (scope) =>
            scope.func$("loc", (scope) =>
              scope.func$("defs", (scope) =>
                scope.if$(scope.operators$.equal(scope.defs, [])).then$(() =>
                  scope.apply$(scope.abort, "This case should never happen.")
                ).elseIf$(() =>
                  scope.operators$.equal(
                    scope.apply$(scope.length, () => scope.defs),
                    1n,
                  )
                ).then$(() =>
                  scope.apply$(scope.head, () => scope.defs)["value"]
                ).else$(() =>
                  scope.apply$(
                    scope["foldl'"],
                    () =>
                      scope.func$("first", (scope) =>
                        scope.func$("def", (scope) =>
                          scope.if$(
                            scope.operators$.notEqual(
                              scope.def["value"],
                              scope.first["value"],
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
                                  "' has conflicting definition values:",
                                  scope.apply$(
                                    scope.showDefs,
                                    () => [scope.first, scope.def],
                                  ),
                                  "\n",
                                  scope.prioritySuggestion,
                                ]
                              ))
                          ).else$(() =>
                            scope.first
                          ))),
                    () => scope.apply$(scope.head, () => scope.defs),
                    () => scope.apply$(scope.tail, () => scope.defs),
                  )["value"]
                ))),
          getValues: (scope) =>
            scope.apply$(
              scope.map,
              () => scope.func$("x", (scope) => scope.x["value"]),
            ),
          getFiles: (scope) =>
            scope.apply$(
              scope.map,
              () => scope.func$("x", (scope) => scope.x["file"]),
            ),
          optionAttrSetToDocList: (scope) =>
            scope.apply$(scope["optionAttrSetToDocList'"], []),
          "optionAttrSetToDocList'": (scope) =>
            scope.func$("_", (scope) =>
              scope.func$("options", (scope) =>
                scope.apply$(
                  scope.concatMap,
                  () =>
                    scope.func$("opt", (scope) =>
                      scope.let$({
                        name: (scope) =>
                          scope.apply$(
                            scope.showOption,
                            () => scope.opt["loc"],
                          ),
                        visible: (scope) =>
                          scope.operators$.selectOrDefault(scope.opt, [
                            "visible",
                          ], true),
                        docOption: (scope) =>
                          scope.operators$.merge(
                            scope.attrSet$({
                              loc: () => scope.opt["loc"],
                              name: () => scope.name,
                              description: () =>
                                scope.operators$.selectOrDefault(scope.opt, [
                                  "description",
                                ], null),
                              declarations: () =>
                                scope.apply$(scope.filter, () =>
                                  scope.func$("x", (scope) =>
                                    scope.operators$.notEqual(
                                      scope.x,
                                      scope.unknownModule,
                                    )), () => scope.opt["declarations"]),
                              internal: () =>
                                scope.operators$.selectOrDefault(scope.opt, [
                                  "internal",
                                ], false),
                              visible: () =>
                                scope.if$(
                                  scope.apply$(
                                    scope.isBool,
                                    () => scope.visible,
                                  ),
                                ).then$(() => scope.visible).else$(() =>
                                  scope.operators$.equal(
                                    scope.visible,
                                    "shallow",
                                  )
                                ),
                              readOnly: () =>
                                scope.operators$.selectOrDefault(scope.opt, [
                                  "readOnly",
                                ], false),
                              type: () =>
                                scope.operators$.selectOrDefault(scope.opt, [
                                  "type",
                                  "description",
                                ], "unspecified"),
                            }),
                            scope.operators$.merge(
                              scope.apply$(
                                scope.optionalAttrs,
                                () =>
                                  scope.operators$.hasAttr(
                                    scope.opt,
                                    "example",
                                  ),
                                () =>
                                  scope.attrSet$({
                                    example: () =>
                                      scope.apply$(
                                        scope.builtins["addErrorContext"],
                                        () =>
                                          scope.str$(
                                            () => [
                                              "while evaluating the example of option `",
                                              scope.name,
                                              "`",
                                            ]
                                          ),
                                        () =>
                                          scope.apply$(
                                            scope.renderOptionValue,
                                            () => scope.opt["example"],
                                          ),
                                      ),
                                  }),
                              ),
                              scope.operators$.merge(
                                scope.apply$(
                                  scope.optionalAttrs,
                                  () => (((scope.operators$.hasAttr(
                                    scope.opt,
                                    "defaultText",
                                  )) ||
                                    (scope.operators$.hasAttr(
                                      scope.opt,
                                      "default",
                                    ))) ||
                                    ((scope.operators$.hasAttr(
                                      scope.operators$.selectOrDefault(
                                        scope.operators$.selectOrDefault(
                                          scope.opt,
                                          ["type"],
                                          {},
                                        ),
                                        ["emptyValue"],
                                        {},
                                      ),
                                      "value",
                                    )) &&
                                      (scope.operators$.equal(
                                        scope.operators$.selectOrDefault(
                                          scope.operators$.selectOrDefault(
                                            scope.opt,
                                            ["type"],
                                            {},
                                          ),
                                          ["getSubModules"],
                                          null,
                                        ),
                                        null,
                                      )))),
                                  () =>
                                    scope.attrSet$({
                                      default: () =>
                                        scope.apply$(
                                          scope.builtins["addErrorContext"],
                                          () =>
                                            scope.str$(
                                              () => [
                                                "while evaluating the ",
                                                scope.if$(
                                                  scope.operators$.hasAttr(
                                                    scope.opt,
                                                    "defaultText",
                                                  ),
                                                ).then$("defaultText").else$(
                                                  "default value",
                                                ),
                                                " of option `",
                                                scope.name,
                                                "`",
                                              ]
                                            ),
                                          () =>
                                            scope.apply$(
                                              scope.renderOptionValue,
                                              () =>
                                                scope.operators$
                                                  .selectOrDefault(scope.opt, [
                                                    "defaultText",
                                                  ], () =>
                                                    scope.operators$
                                                      .selectOrDefault(
                                                        scope.opt,
                                                        ["default"],
                                                        () =>
                                                          scope
                                                            .opt["type"][
                                                              "emptyValue"
                                                            ]["value"],
                                                      )),
                                            ),
                                        ),
                                    }),
                                ),
                                scope.apply$(
                                  scope.optionalAttrs,
                                  () => ((scope.operators$.hasAttr(
                                    scope.opt,
                                    "relatedPackages",
                                  )) &&
                                    (scope.operators$.notEqual(
                                      scope.opt["relatedPackages"],
                                      null,
                                    ))),
                                  () =>
                                    scope.attrSet$({
                                      relatedPackages: () =>
                                        scope.opt.relatedPackages,
                                    }),
                                ),
                              ),
                            ),
                          ),
                        subOptions: (scope) =>
                          scope.let$({
                            ss: (scope) =>
                              scope.apply$(
                                scope.opt["type"]["getSubOptions"],
                                () => scope.opt["loc"],
                              ),
                          }).in$((scope) =>
                            scope.if$(scope.operators$.notEqual(scope.ss, {}))
                              .then$(() =>
                                scope.apply$(
                                  scope["optionAttrSetToDocList'"],
                                  () => scope.opt["loc"],
                                  () => scope.ss,
                                )
                              ).else$([])
                          ),
                        subOptionsVisible: (scope) =>
                          scope.if$(
                            scope.apply$(scope.isBool, () => scope.visible),
                          ).then$(() => scope.visible).else$(() =>
                            scope.operators$.equal(scope.visible, "transparent")
                          ),
                      }).in$((scope) =>
                        scope.operators$.listConcat(
                          [scope.docOption],
                          scope.apply$(scope.optionals, () =>
                            scope.subOptionsVisible, () =>
                            scope.subOptions),
                        )
                      )),
                  () =>
                    scope.apply$(
                      scope.collect,
                      () => scope.isOption,
                      () => scope.options,
                    ),
                ))),
          scrubOptionValue: (scope) =>
            scope.func$(
              "x",
              (scope) =>
                scope.if$(scope.apply$(scope.isDerivation, () => scope.x))
                  .then$(() =>
                    scope.attrSet$({
                      type: "derivation",
                      drvPath: () => scope.x["name"],
                      outPath: () => scope.x["name"],
                      name: () => scope.x["name"],
                    })
                  ).elseIf$(() => scope.apply$(scope.isList, () => scope.x))
                  .then$(() =>
                    scope.apply$(
                      scope.map,
                      () => scope.scrubOptionValue,
                      () => scope.x,
                    )
                  ).elseIf$(() => scope.apply$(scope.isAttrs, () => scope.x))
                  .then$(() =>
                    scope.apply$(
                      scope.mapAttrs,
                      () =>
                        scope.func$(
                          "n",
                          (scope) =>
                            scope.func$("v", (scope) =>
                              scope.apply$(scope.scrubOptionValue, () =>
                                scope.v)),
                        ),
                      () =>
                        scope.apply$(scope.removeAttrs, () => scope.x, [
                          "_args",
                        ]),
                    )
                  ).else$(() => scope.x),
            ),
          renderOptionValue: (scope) =>
            scope.func$(
              "v",
              (scope) =>
                scope.if$(
                  (scope.operators$.hasAttr(scope.v, "_type")) &&
                  (scope.operators$.hasAttr(scope.v, "text")),
                ).then$(() => scope.v).else$(() =>
                  scope.apply$(scope.literalExpression, () =>
                    scope.apply$(scope.lib["generators"]["toPretty"], {
                      multiline: true,
                      allowPrettyValues: true,
                    }, () =>
                      scope.v))
                ),
            ),
          literalExpression: (scope) =>
            scope.func$(
              "text",
              (scope) =>
                scope.if$(
                  scope.operators$.negate(scope.apply$(scope.isString, () =>
                    scope.text)),
                ).then$(() =>
                  scope.apply$(
                    scope.throw,
                    "literalExpression expects a string.",
                  )
                ).else$(() =>
                  scope.attrSet$({
                    _type: "literalExpression",
                    text: () => scope.text,
                  })
                ),
            ),
          literalCode: (scope) =>
            scope.func$(
              "languageTag",
              (scope) =>
                scope.func$("text", (scope) =>
                  scope.apply$(scope.lib["literalMD"], () =>
                    scope.str$(
                      () => [
                        "```",
                        scope.languageTag,
                        "\n",
                        scope.text,
                        "\n```\n",
                      ]
                    ))),
            ),
          literalMD: (scope) =>
            scope.func$(
              "text",
              (scope) =>
                scope.if$(
                  scope.operators$.negate(scope.apply$(scope.isString, () =>
                    scope.text)),
                ).then$(() =>
                  scope.apply$(scope.throw, "literalMD expects a string.")
                ).else$(() =>
                  scope.attrSet$({
                    _type: "literalMD",
                    text: () => scope.text,
                  })
                ),
            ),
          showOption: (scope) =>
            scope.func$("parts", (scope) =>
              scope.let$({
                isNamedPlaceholder: (scope) =>
                  scope.apply$(scope.builtins["match"], "<(.*)>"),
                escapeOptionPart: (scope) =>
                  scope.func$("part", (scope) =>
                    scope.if$(
                      (scope.operators$.equal(scope.part, "*")) ||
                      (scope.operators$.notEqual(
                        scope.apply$(scope.isNamedPlaceholder, () =>
                          scope.part),
                        null,
                      )),
                    ).then$(() => scope.part).else$(() =>
                      scope.apply$(
                        scope.lib["strings"]["escapeNixIdentifier"],
                        () => scope.part,
                      )
                    )),
              }).in$((scope) =>
                scope.apply$(scope.apply$(scope.concatStringsSep, "."), () =>
                  scope.apply$(scope.map, () =>
                    scope.escapeOptionPart, () =>
                    scope.parts))
              )),
          showFiles: (scope) =>
            scope.func$("files", (scope) =>
              scope.apply$(scope.concatStringsSep, " and ", () =>
                scope.apply$(scope.map, () =>
                  scope.func$("f", (scope) =>
                    scope.str$(() => ["`", scope.f, "'"])), () =>
                  scope.files))),
          showDefs: (scope) =>
            scope.func$("defs", (scope) =>
              scope.apply$(scope.concatMapStrings, () =>
                scope.func$("def", (scope) =>
                  scope.let$({
                    prettyEval: (scope) =>
                      scope.apply$(scope.builtins["tryEval"], () =>
                        scope.apply$(
                          scope.lib["generators"]["toPretty"],
                          {},
                          () =>
                            scope.apply$(
                              scope.lib["generators"]["withRecursion"],
                              { depthLimit: 10n, throwOnDepthLimit: false },
                              () =>
                                scope.def["value"],
                            ),
                        )),
                    lines: (scope) =>
                      scope.apply$(scope.filter, () =>
                        scope.func$("v", (scope) =>
                          scope.operators$.negate(
                            scope.apply$(scope.isList, () =>
                              scope.v),
                          )), () =>
                        scope.apply$(scope.builtins["split"], "\n", () =>
                          scope.prettyEval["value"])),
                    value: (scope) =>
                      scope.apply$(
                        scope.concatStringsSep,
                        "\n    ",
                        () => (scope.operators$.listConcat(
                          scope.apply$(scope.take, 5n, () => scope.lines),
                          scope.apply$(
                            scope.optional,
                            () => (scope.operators$.greaterThan(
                              scope.apply$(scope.length, () => scope.lines),
                              5n,
                            )),
                            "...",
                          ),
                        )),
                      ),
                    result: (scope) =>
                      scope.if$(
                        scope.operators$.negate(scope.prettyEval["success"]),
                      ).then$("").elseIf$(() =>
                        scope.operators$.greaterThan(
                          scope.apply$(scope.length, () =>
                            scope.lines),
                          1n,
                        )
                      ).then$(() =>
                        scope.operators$.add(":\n    ", scope.value)
                      ).else$(() =>
                        scope.operators$.add(": ", scope.value)
                      ),
                  }).in$((scope) =>
                    scope.str$(
                      () => ["\n- In `", scope.def["file"], "'", scope.result]
                    )
                  )), () =>
                scope.defs)),
          showOptionWithDefLocs: (scope) =>
            scope.func$("opt", (scope) =>
              scope.str$(() => [
                scope.apply$(scope.showOption, () => scope.opt["loc"]),
                ", with values defined in:\n",
                scope.apply$(scope.concatMapStringsSep, "\n", () =>
                  scope.func$(
                    "defFile",
                    (scope) => scope.str$(() => ["  - ", scope.defFile]),
                  ), () => scope.opt["files"]),
                "\n",
              ])),
          unknownModule: "<unknown-file>",
        })
      ))
  ),
);
