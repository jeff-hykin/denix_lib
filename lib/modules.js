import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./modules.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        addErrorContext: (scope) => scope.lib["addErrorContext"],
        all: (scope) => scope.lib["all"],
        any: (scope) => scope.lib["any"],
        attrByPath: (scope) => scope.lib["attrByPath"],
        attrNames: (scope) => scope.lib["attrNames"],
        catAttrs: (scope) => scope.lib["catAttrs"],
        concatLists: (scope) => scope.lib["concatLists"],
        concatMap: (scope) => scope.lib["concatMap"],
        concatStringsSep: (scope) => scope.lib["concatStringsSep"],
        elem: (scope) => scope.lib["elem"],
        filter: (scope) => scope.lib["filter"],
        "foldl'": (scope) => scope.lib["foldl'"],
        functionArgs: (scope) => scope.lib["functionArgs"],
        getAttrFromPath: (scope) => scope.lib["getAttrFromPath"],
        genericClosure: (scope) => scope.lib["genericClosure"],
        head: (scope) => scope.lib["head"],
        id: (scope) => scope.lib["id"],
        imap1: (scope) => scope.lib["imap1"],
        init: (scope) => scope.lib["init"],
        isAttrs: (scope) => scope.lib["isAttrs"],
        isBool: (scope) => scope.lib["isBool"],
        isFunction: (scope) => scope.lib["isFunction"],
        oldestSupportedReleaseIsAtLeast: (scope) =>
          scope.lib["oldestSupportedReleaseIsAtLeast"],
        isList: (scope) => scope.lib["isList"],
        isString: (scope) => scope.lib["isString"],
        last: (scope) => scope.lib["last"],
        length: (scope) => scope.lib["length"],
        mapAttrs: (scope) => scope.lib["mapAttrs"],
        mapAttrsToList: (scope) => scope.lib["mapAttrsToList"],
        mapAttrsRecursiveCond: (scope) => scope.lib["mapAttrsRecursiveCond"],
        min: (scope) => scope.lib["min"],
        optional: (scope) => scope.lib["optional"],
        optionalAttrs: (scope) => scope.lib["optionalAttrs"],
        optionalString: (scope) => scope.lib["optionalString"],
        pipe: (scope) => scope.lib["pipe"],
        recursiveUpdate: (scope) => scope.lib["recursiveUpdate"],
        remove: (scope) => scope.lib["remove"],
        reverseList: (scope) => scope.lib["reverseList"],
        sort: (scope) => scope.lib["sort"],
        sortOn: (scope) => scope.lib["sortOn"],
        seq: (scope) => scope.lib["seq"],
        setAttrByPath: (scope) => scope.lib["setAttrByPath"],
        substring: (scope) => scope.lib["substring"],
        take: (scope) => scope.lib["take"],
        trace: (scope) => scope.lib["trace"],
        typeOf: (scope) => scope.lib["typeOf"],
        types: (scope) => scope.lib["types"],
        unsafeGetAttrPos: (scope) => scope.lib["unsafeGetAttrPos"],
        warn: (scope) => scope.lib["warn"],
        warnIf: (scope) => scope.lib["warnIf"],
        zipAttrs: (scope) => scope.lib["zipAttrs"],
        zipAttrsWith: (scope) => scope.lib["zipAttrsWith"],
        isOption: (scope) => scope.lib["options"]["isOption"],
        mkOption: (scope) => scope.lib["options"]["mkOption"],
        showDefs: (scope) => scope.lib["options"]["showDefs"],
        showFiles: (scope) => scope.lib["options"]["showFiles"],
        showOption: (scope) => scope.lib["options"]["showOption"],
        unknownModule: (scope) => scope.lib["options"]["unknownModule"],
        isConvertibleWithToString: (scope) =>
          scope.lib["strings"]["isConvertibleWithToString"],
        levenshtein: (scope) => scope.lib["strings"]["levenshtein"],
        levenshteinAtMost: (scope) => scope.lib["strings"]["levenshteinAtMost"],
        showDeclPrefix: (scope) =>
          scope.func$("loc", (scope) =>
            scope.func$("decl", (scope) =>
              scope.func$("prefix", (scope) =>
                scope.str$(
                  () => [
                    " - option(s) with prefix `",
                    scope.apply$(
                      scope.showOption,
                      () => (scope.operators$.listConcat(scope.loc, [
                        scope.prefix,
                      ])),
                    ),
                    "' in module `",
                    scope.decl["_file"],
                    "'",
                  ]
                )))),
        showRawDecls: (scope) =>
          scope.func$("loc", (scope) =>
            scope.func$("decls", (scope) =>
              scope.apply$(scope.concatStringsSep, "\n", () =>
                scope.apply$(scope.sort, () =>
                  scope.func$("a", (scope) =>
                    scope.func$(
                      "b",
                      (scope) => scope.operators$.lessThan(scope.a, scope.b),
                    )), () =>
                  scope.apply$(scope.concatMap, () =>
                    scope.func$("decl", (scope) =>
                      scope.apply$(
                        scope.map,
                        () =>
                          scope.apply$(scope.showDeclPrefix, () =>
                            scope.loc, () =>
                            scope.decl),
                        () =>
                          scope.apply$(scope.attrNames, () =>
                            scope.decl["options"]),
                      )), () => scope.decls))))),
        evalModules: (scope) =>
          scope.func$({
            evalModulesArgs: scope.nixArg$.AllArgs,
            modules: scope.nixArg$.NoDefault,
            prefix: [],
            specialArgs: {},
            class: null,
            args: {},
            check: true,
          }, (scope) =>
            scope.let$({
              withWarnings: (scope) =>
                scope.func$("x", (scope) =>
                  scope.apply$(
                    scope.warnIf,
                    () =>
                      scope.operators$.hasAttr(scope.evalModulesArgs, "args"),
                    "The args argument to evalModules is deprecated. Please set config._module.args instead.",
                    () => scope.warnIf,
                    () =>
                      scope.operators$.hasAttr(scope.evalModulesArgs, "check"),
                    "The check argument to evalModules is deprecated. Please set config._module.check instead.",
                    () => scope.x,
                  )),
              legacyModules: (scope) =>
                scope.operators$.listConcat(
                  scope.apply$(
                    scope.optional,
                    () =>
                      scope.operators$.hasAttr(scope.evalModulesArgs, "args"),
                    () =>
                      scope.attrSet$({
                        config: () =>
                          scope.attrSet$({
                            ...scope.deepSet$(
                              ["_module", "args"],
                              () => scope.args,
                            ),
                          }),
                      }),
                  ),
                  scope.apply$(
                    scope.optional,
                    () =>
                      scope.operators$.hasAttr(scope.evalModulesArgs, "check"),
                    () =>
                      scope.attrSet$({
                        config: () =>
                          scope.attrSet$({
                            ...scope.deepSet$(
                              ["_module", "check"],
                              () =>
                                scope.apply$(
                                  scope.mkDefault,
                                  () => scope.check,
                                ),
                            ),
                          }),
                      }),
                  ),
                ),
              regularModules: (scope) =>
                scope.operators$.listConcat(scope.modules, scope.legacyModules),
              internalModule: (scope) =>
                scope.recAttrSet$({
                  _file: "lib/modules.nix",
                  key: (scope) => scope._file,
                  options: (scope) =>
                    scope.attrSet$({
                      ...scope.deepSet$(["_module", "args"], () =>
                        scope.apply$(scope.mkOption, () =>
                          scope.attrSet$({
                            type: () =>
                              scope.apply$(
                                scope.types["lazyAttrsOf"],
                                () => scope.types["raw"],
                              ),
                            ...scope.deepSet$([
                              scope.if$(
                                scope.operators$.equal(scope.prefix, []),
                              ).then$(null).else$("internal"),
                            ], true),
                            description:
                              'Additional arguments passed to each module in addition to ones\nlike `lib`, `config`,\nand `pkgs`, `modulesPath`.\n\nThis option is also available to all submodules. Submodules do not\ninherit args from their parent module, nor do they provide args to\ntheir parent module or sibling submodules. The sole exception to\nthis is the argument `name` which is provided by\nparent modules to a submodule and contains the attribute name\nthe submodule is bound to, or a unique generated name if it is\nnot bound to an attribute.\n\nSome arguments are already passed by default, of which the\nfollowing *cannot* be changed with this option:\n- {var}`lib`: The nixpkgs library.\n- {var}`config`: The results of all options after merging the values from all modules together.\n- {var}`options`: The options declared in all modules.\n- {var}`specialArgs`: The `specialArgs` argument passed to `evalModules`.\n- All attributes of {var}`specialArgs`\n\n  Whereas option values can generally depend on other option values\n  thanks to laziness, this does not apply to `imports`, which\n  must be computed statically before anything else.\n\n  For this reason, callers of the module system can provide `specialArgs`\n  which are available during import resolution.\n\n  For NixOS, `specialArgs` includes\n  {var}`modulesPath`, which allows you to import\n  extra modules from the nixpkgs package tree without having to\n  somehow make the module aware of the location of the\n  `nixpkgs` or NixOS directories.\n  ```\n  { modulesPath, ... }: {\n    imports = [\n      (modulesPath + "/profiles/minimal.nix")\n    ];\n  }\n  ```\n\nFor NixOS, the default value for this option includes at least this argument:\n- {var}`pkgs`: The nixpkgs package set according to\n  the {option}`nixpkgs.pkgs` option.\n',
                          }))),
                      ...scope.deepSet$(
                        ["_module", "check"],
                        () =>
                          scope.apply$(scope.mkOption, () =>
                            scope.attrSet$({
                              type: () => scope.types["bool"],
                              internal: true,
                              default: true,
                              description:
                                "Whether to check whether all option definitions have matching declarations.",
                            })),
                      ),
                      ...scope.deepSet$(["_module", "freeformType"], () =>
                        scope.apply$(scope.mkOption, () =>
                          scope.attrSet$({
                            type: () =>
                              scope.apply$(scope.types["nullOr"], () =>
                                scope.types["optionType"]),
                            internal: true,
                            default: null,
                            description:
                              "If set, merge all definitions that don't have an associated option\ntogether using this type. The result then gets combined with the\nvalues of all declared options to produce the final `\nconfig` value.\n\nIf this is `null`, definitions without an option\nwill throw an error unless {option}`_module.check` is\nturned off.\n",
                          }))),
                      ...scope.deepSet$(
                        ["_module", "specialArgs"],
                        () =>
                          scope.apply$(scope.mkOption, {
                            readOnly: true,
                            internal: true,
                            description:
                              "Externally provided module arguments that can't be modified from\nwithin a configuration, but can be used in module imports.\n",
                          }),
                      ),
                    }),
                  config: (scope) =>
                    scope.attrSet$({
                      ...scope.deepSet$(["_module", "args"], () =>
                        scope.attrSet$({
                          extendModules: () =>
                            scope.extendModules,
                          moduleType: () => scope.type,
                        })),
                      ...scope.deepSet$(["_module", "specialArgs"], () =>
                        scope.specialArgs),
                    }),
                }),
              doCollect: (scope) =>
                scope.func$({}, (scope) =>
                  scope.apply$(
                    scope.collectModules,
                    () => scope.class,
                    () =>
                      scope.operators$.selectOrDefault(scope.specialArgs, [
                        "modulesPath",
                      ], ""),
                    () => (scope.operators$.listConcat(scope.regularModules, [
                      scope.internalModule,
                    ])),
                    () => (scope.operators$.merge(
                      scope.attrSet$({
                        lib: () => scope.lib,
                        options: () => scope.options,
                        specialArgs: () => scope.specialArgs,
                        _class: () => scope.class,
                        _prefix: () => scope.prefix,
                        config: () =>
                          scope.apply$(
                            scope.addErrorContext,
                            "if you get an infinite recursion here, you probably reference `config` in `imports`. If you are trying to achieve a conditional import behavior dependent on `config`, consider importing unconditionally, and using `mkEnableOption` and `mkIf` to control its effect.",
                            () => scope.config,
                          ),
                      }),
                      scope.specialArgs,
                    )),
                  )),
              merged: (scope) =>
                scope.apply$(
                  scope.mergeModules,
                  () => scope.prefix,
                  () =>
                    scope.apply$(
                      scope.reverseList,
                      () => scope.apply$(scope.doCollect, {})["modules"],
                    ),
                ),
              options: (scope) => scope.merged["matchedOptions"],
              config: (scope) =>
                scope.let$({
                  declaredConfig: (scope) =>
                    scope.apply$(
                      scope.mapAttrsRecursiveCond,
                      () =>
                        scope.func$("v", (scope) =>
                          scope.operators$.negate(
                            scope.apply$(scope.isOption, () =>
                              scope.v),
                          )),
                      () =>
                        scope.func$("_", (scope) =>
                          scope.func$("v", (scope) =>
                            scope.v["value"])),
                      () =>
                        scope.options,
                    ),
                  freeformConfig: (scope) =>
                    scope.let$({
                      defs: (scope) =>
                        scope.apply$(
                          scope.map,
                          () =>
                            scope.func$("def", (scope) =>
                              scope.attrSet$({
                                file: () => scope.def["file"],
                                value: () =>
                                  scope.apply$(
                                    scope.setAttrByPath,
                                    () => scope.def["prefix"],
                                    () => scope.def["value"],
                                  ),
                              })),
                          () => scope.merged["unmatchedDefns"],
                        ),
                    }).in$((scope) =>
                      scope.if$(scope.operators$.equal(scope.defs, [])).then$(
                        {},
                      ).else$(() =>
                        scope.apply$(
                          scope
                            .declaredConfig["_module"]["freeformType"]["merge"],
                          () => scope.prefix,
                          () => scope.defs,
                        )
                      )
                    ),
                }).in$((scope) =>
                  scope.if$(
                    scope.operators$.equal(
                      scope.declaredConfig["_module"]["freeformType"],
                      null,
                    ),
                  ).then$(() => scope.declaredConfig).else$(() =>
                    scope.apply$(
                      scope.recursiveUpdate,
                      () => scope.freeformConfig,
                      () => scope.declaredConfig,
                    )
                  )
                ),
              checkUnmatched: (scope) =>
                scope.if$(
                  ((scope.config["_module"]["check"]) &&
                    (scope.operators$.equal(
                      scope.config["_module"]["freeformType"],
                      null,
                    ))) &&
                  (scope.operators$.notEqual(
                    scope.merged["unmatchedDefns"],
                    [],
                  )),
                ).then$(() =>
                  scope.let$({
                    firstDef: (scope) =>
                      scope.apply$(
                        scope.head,
                        () => scope.merged["unmatchedDefns"],
                      ),
                    baseMsg: (scope) =>
                      scope.let$({
                        optText: (scope) =>
                          scope.apply$(
                            scope.showOption,
                            () => (scope.operators$.listConcat(
                              scope.prefix,
                              scope.firstDef["prefix"],
                            )),
                          ),
                        defText: (scope) =>
                          scope.apply$(
                            scope.addErrorContext,
                            () =>
                              scope.str$(
                                () => [
                                  "while evaluating the error message for definitions for `",
                                  scope.optText,
                                  "', which is an option that does not exist",
                                ]
                              ),
                            () =>
                              scope.apply$(scope.addErrorContext, () =>
                                scope.str$(
                                  () => [
                                    "while evaluating a definition from `",
                                    scope.firstDef["file"],
                                    "'",
                                  ]
                                ), () =>
                                scope.apply$(
                                  scope.showDefs,
                                  () => [scope.firstDef],
                                )),
                          ),
                        absInvalidOptionParent: (scope) =>
                          scope.apply$(
                            scope.init,
                            () => (scope.operators$.listConcat(
                              scope.prefix,
                              scope.firstDef["prefix"],
                            )),
                          ),
                        invalidOptionParent: (scope) =>
                          scope.apply$(
                            scope.init,
                            () => scope.firstDef["prefix"],
                          ),
                        siblingOptionNames: (scope) =>
                          scope.apply$(
                            scope.attrNames,
                            () =>
                              scope.apply$(
                                scope.attrByPath,
                                () => scope.invalidOptionParent,
                                {},
                                () => scope.options,
                              ),
                          ),
                        candidateNames: (scope) =>
                          scope.if$(
                            scope.operators$.equal(
                              scope.invalidOptionParent,
                              [],
                            ),
                          ).then$(() =>
                            scope.apply$(
                              scope.remove,
                              "_module",
                              () => scope.siblingOptionNames,
                            )
                          ).else$(() => scope.siblingOptionNames),
                        invalidOptionName: (scope) =>
                          scope.apply$(
                            scope.last,
                            () => scope.firstDef["prefix"],
                          ),
                        suggestions: (scope) =>
                          scope.if$(
                            scope.operators$.lessThan(
                              scope.apply$(scope.length, () =>
                                scope.candidateNames),
                              100n,
                            ),
                          ).then$(() =>
                            scope.apply$(
                              scope.pipe,
                              () => scope.candidateNames,
                              () => [
                                scope.apply$(scope.sortOn, () =>
                                  scope.apply$(scope.levenshtein, () =>
                                    scope.invalidOptionName)),
                                scope.apply$(scope.take, 3n),
                              ],
                            )
                          ).else$(() =>
                            scope.apply$(
                              scope.pipe,
                              () => scope.candidateNames,
                              () => [
                                scope.apply$(scope.filter, () =>
                                  scope.apply$(
                                    scope.levenshteinAtMost,
                                    2n,
                                    () => scope.invalidOptionName,
                                  )),
                                scope.apply$(
                                  scope.sortOn,
                                  () =>
                                    scope.apply$(scope.levenshtein, () =>
                                      scope.invalidOptionName),
                                ),
                                scope.apply$(scope.take, 3n),
                              ],
                            )
                          ),
                        suggestion: (scope) =>
                          scope.if$(
                            scope.operators$.equal(scope.suggestions, []),
                          ).then$("").elseIf$(() =>
                            scope.operators$.equal(
                              scope.apply$(
                                scope.length,
                                () => scope.suggestions,
                              ),
                              1n,
                            )
                          ).then$(() =>
                            scope.str$(
                              () => [
                                "\n\nDid you mean `",
                                scope.apply$(
                                  scope.showOption,
                                  () => (scope.operators$.listConcat(
                                    scope.absInvalidOptionParent,
                                    [scope.apply$(scope.head, () =>
                                      scope.suggestions)],
                                  )),
                                ),
                                "'?",
                              ]
                            )
                          ).else$(() =>
                            scope.str$(
                              () => [
                                "\n\nDid you mean ",
                                scope.apply$(scope.concatStringsSep, ", ", () =>
                                  scope.apply$(scope.map, () =>
                                    scope.func$("s", (scope) =>
                                      scope.str$(
                                        () => [
                                          "`",
                                          scope.apply$(
                                            scope.showOption,
                                            () => (scope.operators$.listConcat(
                                              scope.absInvalidOptionParent,
                                              [scope.s],
                                            )),
                                          ),
                                          "'",
                                        ]
                                      )), () =>
                                    scope.apply$(
                                      scope.init,
                                      () => scope.suggestions,
                                    ))),
                                " or `",
                                scope.apply$(
                                  scope.showOption,
                                  () => (scope.operators$.listConcat(
                                    scope.absInvalidOptionParent,
                                    [scope.apply$(scope.last, () =>
                                      scope.suggestions)],
                                  )),
                                ),
                                "'?",
                              ]
                            )
                          ),
                      }).in$((scope) =>
                        scope.str$(
                          () => [
                            "The option `",
                            scope.optText,
                            "' does not exist. Definition values:",
                            scope.defText,
                            scope.suggestion,
                          ]
                        )
                      ),
                  }).in$((scope) =>
                    scope.if$(
                      scope.operators$.equal(
                        scope.apply$(scope.attrNames, () => scope.options),
                        ["_module"],
                      ),
                    ).then$(() =>
                      scope.let$({
                        optionName: (scope) =>
                          scope.apply$(scope.showOption, () => scope.prefix),
                      }).in$((scope) =>
                        scope.if$(scope.operators$.equal(scope.optionName, ""))
                          .then$(() =>
                            scope.apply$(
                              scope.throw,
                              () =>
                                scope.str$(
                                  () => [
                                    scope.baseMsg,
                                    "\n\nIt seems as if you're trying to declare an option by placing it into `config' rather than `options'!\n",
                                  ]
                                ),
                            )
                          ).else$(() =>
                            scope.apply$(
                              scope.throw,
                              () =>
                                scope.str$(
                                  () => [
                                    scope.baseMsg,
                                    "\n\nHowever there are no options defined in `",
                                    scope.apply$(
                                      scope.showOption,
                                      () => scope.prefix,
                                    ),
                                    "'. Are you sure you've\ndeclared your options properly? This can happen if you e.g. declared your options in `types.submodule'\nunder `config' rather than `options'.\n",
                                  ]
                                ),
                            )
                          )
                      )
                    ).else$(() =>
                      scope.apply$(scope.throw, () => scope.baseMsg)
                    )
                  )
                ).else$(null),
              checked: (scope) =>
                scope.apply$(scope.seq, () => scope.checkUnmatched),
              extendModules: (scope) =>
                scope.func$({
                  extendArgs: scope.nixArg$.AllArgs,
                  modules: [],
                  specialArgs: {},
                  prefix: [],
                }, (scope) =>
                  scope.apply$(
                    scope.evalModules,
                    () => (scope.operators$.merge(
                      scope.evalModulesArgs,
                      scope.attrSet$({
                        modules: () =>
                          scope.operators$.listConcat(
                            scope.regularModules,
                            scope.modules,
                          ),
                        specialArgs: () =>
                          scope.operators$.merge(
                            scope.operators$.selectOrDefault(
                              scope.evalModulesArgs,
                              ["specialArgs"],
                              {},
                            ),
                            scope.specialArgs,
                          ),
                        prefix: () =>
                          scope.operators$.selectOrDefault(scope.extendArgs, [
                            "prefix",
                          ], () =>
                            scope.operators$.selectOrDefault(
                              scope.evalModulesArgs,
                              ["prefix"],
                              [],
                            )),
                      }),
                    )),
                  )),
              type: (scope) =>
                scope.apply$(
                  scope.types["submoduleWith"],
                  () =>
                    scope.attrSet$({
                      modules: () => scope.modules,
                      specialArgs: () => scope.specialArgs,
                      class: () => scope.class,
                    }),
                ),
              result: (scope) =>
                scope.apply$(scope.withWarnings, () =>
                  scope.attrSet$({
                    _type: "configuration",
                    options: () =>
                      scope.apply$(scope.checked, () => scope.options),
                    config: () =>
                      scope.apply$(scope.checked, () =>
                        scope.apply$(scope.removeAttrs, () =>
                          scope.config, ["_module"])),
                    _module: () =>
                      scope.apply$(scope.checked, () =>
                        scope.config["_module"]),
                    graph: () =>
                      scope.apply$(scope.doCollect, {}).graph,
                    extendModules: () =>
                      scope.extendModules,
                    type: () => scope.type,
                    class: () => scope.class,
                  })),
            }).in$((scope) => scope.result)),
        collectModules: (scope) =>
          scope.func$("class", (scope) =>
            scope.let$({
              loadModule: (scope) =>
                scope.func$("args", (scope) =>
                  scope.func$("fallbackFile", (scope) =>
                    scope.func$("fallbackKey", (scope) =>
                      scope.func$("m", (scope) =>
                        scope.if$(scope.apply$(scope.isFunction, () => scope.m))
                          .then$(() =>
                            scope.apply$(
                              scope.unifyModuleSyntax,
                              () => scope.fallbackFile,
                              () => scope.fallbackKey,
                              () =>
                                scope.apply$(
                                  scope.applyModuleArgs,
                                  () => scope.fallbackKey,
                                  () => scope.m,
                                  () => scope.args,
                                ),
                            )
                          ).elseIf$(() =>
                            scope.apply$(scope.isAttrs, () => scope.m)
                          ).then$(() =>
                            scope.if$(
                              scope.operators$.equal(
                                scope.operators$.selectOrDefault(scope.m, [
                                  "_type",
                                ], "module"),
                                "module",
                              ),
                            ).then$(() =>
                              scope.apply$(
                                scope.unifyModuleSyntax,
                                () => scope.fallbackFile,
                                () => scope.fallbackKey,
                                () => scope.m,
                              )
                            ).elseIf$(
                              () => ((scope.operators$.equal(
                                scope.m["_type"],
                                "if",
                              )) ||
                                (scope.operators$.equal(
                                  scope.m["_type"],
                                  "override",
                                )))
                            ).then$(() =>
                              scope.apply$(
                                scope.loadModule,
                                () => scope.args,
                                () => scope.fallbackFile,
                                () => scope.fallbackKey,
                                () =>
                                  scope.attrSet$({
                                    config: () => scope.m,
                                  }),
                              )
                            ).else$(() =>
                              scope.apply$(scope.throw, () =>
                                scope.apply$(
                                  scope.messages["not_a_module"],
                                  () =>
                                    scope.attrSet$({
                                      fallbackFile: () => scope.fallbackFile,
                                      value: () =>
                                        scope.m,
                                      _type: () => scope.m["_type"],
                                      expectedClass: () => scope.class,
                                      prefix: () => scope.args["_prefix"],
                                    }),
                                ))
                            )
                          ).elseIf$(() =>
                            scope.apply$(scope.isList, () =>
                              scope.m)
                          ).then$(() =>
                            scope.let$({
                              defs: (scope) => [scope.attrSet$({
                                file: () => scope.fallbackFile,
                                value: () => scope.m,
                              })],
                            }).in$((scope) =>
                              scope.apply$(scope.throw, () =>
                                scope.str$(
                                  () => [
                                    "Module imports can't be nested lists. Perhaps you meant to remove one level of lists? Definitions: ",
                                    scope.apply$(scope.showDefs, () =>
                                      scope.defs),
                                  ]
                                ))
                            )
                          ).else$(() =>
                            scope.apply$(scope.unifyModuleSyntax, () =>
                              scope.apply$(scope.toString, () =>
                                scope.m), () =>
                              scope.apply$(scope.toString, () =>
                                scope.m), () =>
                              scope.apply$(
                                scope.applyModuleArgsIfFunction,
                                () =>
                                  scope.apply$(scope.toString, () => scope.m),
                                () =>
                                  scope.apply$(scope.import, () => scope.m),
                                () => scope.args,
                              ))
                          ))))),
              checkModule: (scope) =>
                scope.if$(scope.operators$.notEqual(scope.class, null)).then$(
                  () =>
                    scope.func$("m", (scope) =>
                      scope.if$(
                        (scope.operators$.equal(scope.m["_class"], null)) ||
                        (scope.operators$.equal(
                          scope.m["_class"],
                          scope.class,
                        )),
                      ).then$(() => scope.m).else$(() =>
                        scope.apply$(scope.throw, () =>
                          scope.str$(
                            () => [
                              "The module `",
                              scope.operators$.selectOrDefault(scope.m, [
                                "_file",
                              ], () => scope.m["key"]),
                              "` (class: ",
                              scope.apply$(
                                scope.lib["strings"]["escapeNixString"],
                                () => scope.m["_class"],
                              ),
                              ") cannot be imported into a module evaluation that expects class ",
                              scope.apply$(
                                scope.lib["strings"]["escapeNixString"],
                                () => scope.class,
                              ),
                              ".\n\nHelp:\n- Ensure that you are importing the correct module.\n- Verify that the module's `_class`, ",
                              scope.apply$(
                                scope.lib["strings"]["escapeNixString"],
                                () => scope.m["_class"],
                              ),
                              " matches the expected `class` ",
                              scope.apply$(
                                scope.lib["strings"]["escapeNixString"],
                                () => scope.class,
                              ),
                              ".\n- If you are using a custom class, make sure it is correctly defined and used consistently across your modules.\n",
                            ]
                          ))
                      ))
                ).else$(() => scope.func$("m", (scope) => scope.m)),
              isDisabled: (scope) =>
                scope.func$("modulesPath", (scope) =>
                  scope.func$("disabledList", (scope) =>
                    scope.let$({
                      moduleKey: (scope) =>
                        scope.func$("file", (scope) =>
                          scope.func$("m", (scope) =>
                            scope.if$(
                              scope.apply$(scope.isString, () => scope.m),
                            ).then$(() =>
                              scope.if$(
                                scope.operators$.equal(
                                  scope.apply$(scope.substring, 0n, 1n, () =>
                                    scope.m),
                                  "/",
                                ),
                              ).then$(() => scope.m).else$(() =>
                                scope.operators$.add(
                                  scope.operators$.add(
                                    scope.apply$(scope.toString, () =>
                                      scope.modulesPath),
                                    "/",
                                  ),
                                  scope.m,
                                )
                              )
                            ).elseIf$(() =>
                              scope.apply$(
                                scope.isConvertibleWithToString,
                                () => scope.m,
                              )
                            ).then$(() =>
                              scope.if$(
                                (scope.operators$.hasAttr(scope.m, "key")) &&
                                (scope.operators$.notEqual(
                                  scope.m["key"],
                                  scope.apply$(scope.toString, () => scope.m),
                                )),
                              ).then$(() =>
                                scope.apply$(
                                  scope.throw,
                                  () =>
                                    scope.str$(
                                      () => [
                                        "Module `",
                                        scope.file,
                                        "` contains a disabledModules item that is an attribute set that can be converted to a string (",
                                        scope.apply$(
                                          scope.toString,
                                          () => scope.m,
                                        ),
                                        ") but also has a `.key` attribute (",
                                        scope.m["key"],
                                        ") with a different value. This makes it ambiguous which module should be disabled.",
                                      ]
                                    ),
                                )
                              ).else$(() =>
                                scope.apply$(scope.toString, () => scope.m)
                              )
                            ).elseIf$(() =>
                              scope.operators$.hasAttr(scope.m, "key")
                            ).then$(() => scope.m["key"]).elseIf$(() =>
                              scope.apply$(scope.isAttrs, () => scope.m)
                            ).then$(() =>
                              scope.apply$(
                                scope.throw,
                                () =>
                                  scope.str$(
                                    () => [
                                      "Module `",
                                      scope.file,
                                      "` contains a disabledModules item that is an attribute set, presumably a module, that does not have a `key` attribute. This means that the module system doesn't have any means to identify the module that should be disabled. Make sure that you've put the correct value in disabledModules: a string path relative to modulesPath, a path value, or an attribute set with a `key` attribute.",
                                    ]
                                  ),
                              )
                            ).else$(() =>
                              scope.apply$(
                                scope.throw,
                                () =>
                                  scope.str$(
                                    () => [
                                      "Each disabledModules item must be a path, string, or a attribute set with a key attribute, or a value supported by toString. However, one of the disabledModules items in `",
                                      scope.apply$(scope.toString, () =>
                                        scope.file),
                                      "` is none of that, but is of type ",
                                      scope.apply$(scope.typeOf, () =>
                                        scope.m),
                                      ".",
                                    ]
                                  ),
                              )
                            ))),
                      disabledKeys: (scope) =>
                        scope.apply$(
                          scope.concatMap,
                          () =>
                            scope.func$({
                              file: scope.nixArg$.NoDefault,
                              disabled: scope.nixArg$.NoDefault,
                            }, (scope) =>
                              scope.apply$(scope.map, () =>
                                scope.apply$(scope.moduleKey, () =>
                                  scope.file), () =>
                                scope.disabled)),
                          () =>
                            scope.disabledList,
                        ),
                    }).in$((scope) =>
                      scope.func$(
                        "structuredModule",
                        (scope) =>
                          scope.apply$(scope.elem, () =>
                            scope.structuredModule["key"], () =>
                            scope.disabledKeys),
                      )
                    ))),
              collectStructuredModules: (scope) =>
                scope.let$({
                  collectResults: (scope) =>
                    scope.func$("modules", (scope) =>
                      scope.attrSet$({
                        disabled: () =>
                          scope.apply$(scope.concatLists, () =>
                            scope.apply$(scope.catAttrs, "disabled", () =>
                              scope.modules)),
                        modules: () =>
                          scope.modules,
                      })),
                }).in$((scope) =>
                  scope.func$("parentFile", (scope) =>
                    scope.func$("parentKey", (scope) =>
                      scope.func$("initialModules", (scope) =>
                        scope.func$("args", (scope) =>
                          scope.apply$(scope.collectResults, () =>
                            scope.apply$(scope.imap1, () =>
                              scope.func$("n", (scope) =>
                                scope.func$("x", (scope) =>
                                  scope.let$({
                                    module: (scope) =>
                                      scope.apply$(
                                        scope.checkModule,
                                        () =>
                                          scope.apply$(scope.loadModule, () =>
                                            scope.args, () =>
                                            scope.parentFile, () =>
                                            scope.str$(
                                              () => [
                                                scope.parentKey,
                                                ":anon-",
                                                scope.apply$(
                                                  scope.toString,
                                                  () => scope.n,
                                                ),
                                              ]
                                            ), () =>
                                            scope.x),
                                      ),
                                    collectedImports: (scope) =>
                                      scope.apply$(
                                        scope.collectStructuredModules,
                                        () => scope.module["_file"],
                                        () => scope.module["key"],
                                        () => scope.module["imports"],
                                        () => scope.args,
                                      ),
                                  }).in$((scope) =>
                                    scope.attrSet$({
                                      key: () => scope.module["key"],
                                      module: () => scope.module,
                                      modules: () =>
                                        scope.collectedImports["modules"],
                                      disabled: () =>
                                        scope.operators$.listConcat(
                                          scope.if$(
                                            scope.operators$.notEqual(
                                              scope.module["disabledModules"],
                                              [],
                                            ),
                                          ).then$(() => [scope.attrSet$({
                                            file: () => scope.module["_file"],
                                            disabled: () =>
                                              scope.module["disabledModules"],
                                          })]).else$([]),
                                          scope.collectedImports["disabled"],
                                        ),
                                    })
                                  ))), () => scope.initialModules))))))
                ),
              filterModules: (scope) =>
                scope.func$("modulesPath", (scope) =>
                  scope.func$({
                    disabled: scope.nixArg$.NoDefault,
                    modules: scope.nixArg$.NoDefault,
                  }, (scope) =>
                    scope.let$({
                      keyFilter: (scope) =>
                        scope.apply$(
                          scope.filter,
                          () =>
                            scope.func$("attrs", (scope) =>
                              scope.operators$.negate(
                                scope.apply$(scope.isDisabled, () =>
                                  scope.modulesPath, () =>
                                  scope.disabled, () =>
                                  scope.attrs),
                              )),
                        ),
                    }).in$((scope) =>
                      scope.apply$(
                        scope.map,
                        () =>
                          scope.func$("attrs", (scope) =>
                            scope.attrs["module"]),
                        () =>
                          scope.apply$(scope.genericClosure, () =>
                            scope.attrSet$({
                              startSet: () =>
                                scope.apply$(scope.keyFilter, () =>
                                  scope.modules),
                              operator: () =>
                                scope.func$("attrs", (scope) =>
                                  scope.apply$(scope.keyFilter, () =>
                                    scope.attrs["modules"])),
                            })),
                      )
                    ))),
              toGraph: (scope) =>
                scope.func$("modulesPath", (scope) =>
                  scope.func$({
                    disabled: scope.nixArg$.NoDefault,
                    modules: scope.nixArg$.NoDefault,
                  }, (scope) =>
                    scope.let$({
                      isDisabledModule: (scope) =>
                        scope.apply$(
                          scope.isDisabled,
                          () => scope.modulesPath,
                          () => scope.disabled,
                        ),
                      toModuleGraph: (scope) =>
                        scope.func$(
                          "structuredModule",
                          (scope) =>
                            scope.attrSet$({
                              disabled: () =>
                                scope.apply$(
                                  scope.isDisabledModule,
                                  () => scope.structuredModule,
                                ),
                              key: () => scope.structuredModule.key,
                              file: () =>
                                scope.structuredModule["module"]["_file"],
                              imports: () =>
                                scope.apply$(
                                  scope.map,
                                  () => scope.toModuleGraph,
                                  () => scope.structuredModule["modules"],
                                ),
                            }),
                        ),
                    }).in$((scope) =>
                      scope.apply$(
                        scope.map,
                        () => scope.toModuleGraph,
                        () =>
                          scope.apply$(scope.filter, () =>
                            scope.func$("x", (scope) =>
                              scope.operators$.notEqual(
                                scope.x["key"],
                                "lib/modules.nix",
                              )), () =>
                            scope.modules),
                      )
                    ))),
            }).in$((scope) =>
              scope.func$(
                "modulesPath",
                (scope) =>
                  scope.func$("initialModules", (scope) =>
                    scope.func$("args", (scope) =>
                      scope.attrSet$({
                        modules: () =>
                          scope.apply$(scope.filterModules, () =>
                            scope.modulesPath, () =>
                            scope.apply$(
                              scope.collectStructuredModules,
                              () => scope.unknownModule,
                              "",
                              () => scope.initialModules,
                              () => scope.args,
                            )),
                        graph: () =>
                          scope.apply$(scope.toGraph, () =>
                            scope.modulesPath, () =>
                            scope.apply$(
                              scope.collectStructuredModules,
                              () => scope.unknownModule,
                              "",
                              () => scope.initialModules,
                              () => scope.args,
                            )),
                      }))),
              )
            )),
        setDefaultModuleLocation: (scope) =>
          scope.func$(
            "file",
            (scope) =>
              scope.func$("m", (scope) =>
                scope.attrSet$({
                  _file: () => scope.file,
                  imports: () => [scope.m],
                })),
          ),
        unifyModuleSyntax: (scope) =>
          scope.func$("file", (scope) =>
            scope.func$("key", (scope) =>
              scope.func$("m", (scope) =>
                scope.let$({
                  addMeta: (scope) =>
                    scope.func$(
                      "config",
                      (scope) =>
                        scope.if$(scope.operators$.hasAttr(scope.m, "meta"))
                          .then$(() =>
                            scope.apply$(
                              scope.mkMerge,
                              () => [
                                scope.config,
                                scope.attrSet$({
                                  meta: () => scope.m["meta"],
                                }),
                              ],
                            )
                          ).else$(() => scope.config),
                    ),
                  addFreeformType: (scope) =>
                    scope.func$(
                      "config",
                      (scope) =>
                        scope.if$(
                          scope.operators$.hasAttr(scope.m, "freeformType"),
                        ).then$(() =>
                          scope.apply$(
                            scope.mkMerge,
                            () => [
                              scope.config,
                              scope.attrSet$({
                                ...scope.deepSet$(
                                  ["_module", "freeformType"],
                                  () => scope.m["freeformType"],
                                ),
                              }),
                            ],
                          )
                        ).else$(() => scope.config),
                    ),
                }).in$((scope) =>
                  scope.if$(
                    (scope.operators$.hasAttr(scope.m, "config")) ||
                    (scope.operators$.hasAttr(scope.m, "options")),
                  ).then$(() =>
                    scope.let$({
                      badAttrs: (scope) =>
                        scope.apply$(scope.removeAttrs, () => scope.m, [
                          "_class",
                          "_file",
                          "key",
                          "disabledModules",
                          "imports",
                          "options",
                          "config",
                          "meta",
                          "freeformType",
                        ]),
                    }).in$((scope) =>
                      scope.if$(scope.operators$.notEqual(scope.badAttrs, {}))
                        .then$(() =>
                          scope.apply$(
                            scope.throw,
                            () =>
                              scope.str$(
                                () => [
                                  "Module `",
                                  scope.key,
                                  "' has an unsupported attribute `",
                                  scope.apply$(
                                    scope.head,
                                    () =>
                                      scope.apply$(scope.attrNames, () =>
                                        scope.badAttrs),
                                  ),
                                  "'. This is caused by introducing a top-level `config' or `options' attribute. Add configuration attributes immediately on the top level instead, or move all of them (namely: ",
                                  scope.apply$(
                                    scope.toString,
                                    () =>
                                      scope.apply$(scope.attrNames, () =>
                                        scope.badAttrs),
                                  ),
                                  ") into the explicit `config' attribute.",
                                ]
                              ),
                          )
                        ).else$(() =>
                          scope.attrSet$({
                            _file: () =>
                              scope.apply$(
                                scope.toString,
                                () =>
                                  scope.operators$.selectOrDefault(scope.m, [
                                    "_file",
                                  ], () => scope.file),
                              ),
                            _class: () =>
                              scope.operators$.selectOrDefault(scope.m, [
                                "_class",
                              ], null),
                            key: () =>
                              scope.apply$(
                                scope.toString,
                                () =>
                                  scope.operators$.selectOrDefault(scope.m, [
                                    "key",
                                  ], () => scope.key),
                              ),
                            disabledModules: () =>
                              scope.operators$.selectOrDefault(scope.m, [
                                "disabledModules",
                              ], []),
                            imports: () =>
                              scope.operators$.selectOrDefault(scope.m, [
                                "imports",
                              ], []),
                            options: () =>
                              scope.operators$.selectOrDefault(scope.m, [
                                "options",
                              ], {}),
                            config: () =>
                              scope.apply$(
                                scope.addFreeformType,
                                () =>
                                  scope.apply$(scope.addMeta, () =>
                                    scope.operators$.selectOrDefault(scope.m, [
                                      "config",
                                    ], {})),
                              ),
                          })
                        )
                    )
                  ).elseIf$(() =>
                    scope.operators$.negate(
                      scope.apply$(scope.isAttrs, () => scope.m),
                    )
                  ).then$(() =>
                    scope.apply$(
                      scope.throw,
                      () =>
                        scope.str$(
                          () => [
                            "module ",
                            scope.file,
                            " (",
                            scope.key,
                            ") does not look like a module.",
                          ]
                        ),
                    )
                  ).else$(() =>
                    scope.attrSet$({
                      _file: () =>
                        scope.apply$(
                          scope.toString,
                          () =>
                            scope.operators$.selectOrDefault(
                              scope.m,
                              ["_file"],
                              () => scope.file,
                            ),
                        ),
                      _class: () =>
                        scope.operators$.selectOrDefault(
                          scope.m,
                          ["_class"],
                          null,
                        ),
                      key: () =>
                        scope.apply$(
                          scope.toString,
                          () =>
                            scope.operators$.selectOrDefault(
                              scope.m,
                              ["key"],
                              () => scope.key,
                            ),
                        ),
                      disabledModules: () =>
                        scope.operators$.selectOrDefault(scope.m, [
                          "disabledModules",
                        ], []),
                      imports: () =>
                        scope.operators$.listConcat(
                          scope.operators$.selectOrDefault(
                            scope.m,
                            ["require"],
                            [],
                          ),
                          scope.operators$.selectOrDefault(
                            scope.m,
                            ["imports"],
                            [],
                          ),
                        ),
                      options: {},
                      config: () =>
                        scope.apply$(
                          scope.addFreeformType,
                          () =>
                            scope.apply$(scope.removeAttrs, () => scope.m, [
                              "_class",
                              "_file",
                              "key",
                              "disabledModules",
                              "require",
                              "imports",
                              "freeformType",
                            ]),
                        ),
                    })
                  )
                )))),
        applyModuleArgsIfFunction: (scope) =>
          scope.func$(
            "key",
            (scope) =>
              scope.func$("f", (scope) =>
                scope.func$({
                  args: scope.nixArg$.AllArgs,
                  config: scope.nixArg$.NoDefault,
                  "...": scope.nixArg$.Ellipsis,
                }, (scope) =>
                  scope.if$(scope.apply$(scope.isFunction, () =>
                    scope.f)).then$(() =>
                      scope.apply$(scope.applyModuleArgs, () =>
                        scope.key, () =>
                        scope.f, () =>
                        scope.args)
                    ).else$(() =>
                      scope.f
                    ))),
          ),
        applyModuleArgs: (scope) =>
          scope.func$("key", (scope) =>
            scope.func$(
              "f",
              (scope) =>
                scope.func$({
                  args: scope.nixArg$.AllArgs,
                  config: scope.nixArg$.NoDefault,
                  "...": scope.nixArg$.Ellipsis,
                }, (scope) =>
                  scope.let$({
                    context: (scope) =>
                      scope.func$("name", (scope) =>
                        scope.str$(
                          () => [
                            "while evaluating the module argument `",
                            scope.name,
                            "' in \"",
                            scope.key,
                            '":',
                          ]
                        )),
                    extraArgs: (scope) =>
                      scope.apply$(
                        scope.mapAttrs,
                        () =>
                          scope.func$("name", (scope) =>
                            scope.func$("_", (scope) =>
                              scope.apply$(
                                scope.addErrorContext,
                                () =>
                                  scope.apply$(scope.context, () => scope.name),
                                () =>
                                  scope.operators$.selectOrDefault(scope.args, [
                                    scope.name,
                                  ], () =>
                                    scope.apply$(scope.addErrorContext, () =>
                                      scope.str$(
                                        () => [
                                          "noting that argument `",
                                          scope.name,
                                          "` is not externally provided, so querying `_module.args` instead, requiring `config`",
                                        ]
                                      ), () =>
                                      scope
                                        .config["_module"]["args"][
                                          scope.name
                                        ])),
                              ))),
                        () => scope.apply$(scope.functionArgs, () => scope.f),
                      ),
                  }).in$((scope) =>
                    scope.apply$(
                      scope.f,
                      () => (scope.operators$.merge(
                        scope.args,
                        scope.extraArgs,
                      )),
                    )
                  )),
            )),
        mergeModules: (scope) =>
          scope.func$(
            "prefix",
            (scope) =>
              scope.func$("modules", (scope) =>
                scope.apply$(scope["mergeModules'"], () =>
                  scope.prefix, () =>
                  scope.modules, () =>
                  scope.apply$(scope.concatMap, () =>
                    scope.func$("m", (scope) =>
                      scope.apply$(scope.map, () =>
                        scope.func$("config", (scope) =>
                          scope.attrSet$({
                            file: () =>
                              scope.m["_file"],
                            config: () =>
                              scope.config,
                          })), () =>
                        scope.apply$(scope.pushDownProperties, () =>
                          scope.m["config"]))), () =>
                    scope.modules))),
          ),
        "mergeModules'": (scope) =>
          scope.func$("prefix", (scope) =>
            scope.func$("modules", (scope) =>
              scope.func$("configs", (scope) =>
                scope.let$({
                  declsByName: (scope) =>
                    scope.apply$(
                      scope.zipAttrs,
                      () =>
                        scope.apply$(scope.map, () =>
                          scope.func$("module", (scope) =>
                            scope.let$({
                              subtree: (scope) =>
                                scope.module["options"],
                            }).in$((scope) =>
                              scope.if$(
                                scope.operators$.negate(
                                  scope.apply$(scope.isAttrs, () =>
                                    scope.subtree),
                                ),
                              ).then$(() =>
                                scope.apply$(scope.throw, () =>
                                  scope.str$(
                                    () => [
                                      "An option declaration for `",
                                      scope.apply$(
                                        scope.concatStringsSep,
                                        ".",
                                        () => scope.prefix,
                                      ),
                                      "' has type\n`",
                                      scope.apply$(
                                        scope.typeOf,
                                        () => scope.subtree,
                                      ),
                                      "' rather than an attribute set.\nDid you mean to define this outside of `options'?\n",
                                    ]
                                  ))
                              ).else$(() =>
                                scope.apply$(scope.mapAttrs, () =>
                                  scope.func$("n", (scope) =>
                                    scope.func$("option", (scope) =>
                                      scope.attrSet$({
                                        _file: () => scope.module._file,
                                        pos: () =>
                                          scope.apply$(
                                            scope.unsafeGetAttrPos,
                                            () => scope.n,
                                            () => scope.subtree,
                                          ),
                                        options: () => scope.option,
                                      }))), () =>
                                  scope.subtree)
                              )
                            )), () =>
                          scope.modules),
                    ),
                  checkedConfigs: (scope) =>
                    ((_cond) => {
                      if (!_cond) {
                        throw new Error(
                          "assertion failed: " +
                            "all (\n          c:\n          # TODO: I have my doubts that this error would occur when option definitions are not matched.\n          #       The implementation of this check used to be tied to a superficially similar check for\n          #       options, so maybe that's why this is here.\n          isAttrs c.config\n          || throw ''\n            In module `${c.file}', you're trying to define a value of type `${typeOf c.config}'\n            rather than an attribute set for the option\n            `${concatStringsSep \".\" prefix}'!\n\n            This usually happens if `${concatStringsSep \".\" prefix}' has option\n            definitions inside that are not matched. Please check how to properly define\n            this option by e.g. referring to `man 5 configuration.nix'!\n          ''\n        ) configs",
                        );
                      }
                      return scope.configs;
                    })(scope.apply$(scope.all, () =>
                      scope.func$(
                        "c",
                        (
                          scope,
                        ) => ((scope.apply$(
                          scope.isAttrs,
                          () => scope.c["config"],
                        )) || (scope.apply$(scope.throw, () =>
                          scope.str$(
                            () => [
                              "In module `",
                              scope.c["file"],
                              "', you're trying to define a value of type `",
                              scope.apply$(
                                scope.typeOf,
                                () => scope.c["config"],
                              ),
                              "'\nrather than an attribute set for the option\n`",
                              scope.apply$(
                                scope.concatStringsSep,
                                ".",
                                () => scope.prefix,
                              ),
                              "'!\n\nThis usually happens if `",
                              scope.apply$(
                                scope.concatStringsSep,
                                ".",
                                () => scope.prefix,
                              ),
                              "' has option\ndefinitions inside that are not matched. Please check how to properly define\nthis option by e.g. referring to `man 5 configuration.nix'!\n",
                            ]
                          )))),
                      ), () =>
                      scope.configs)),
                  pushedDownDefinitionsByName: (scope) =>
                    scope.apply$(scope.zipAttrsWith, () =>
                      scope.func$("n", (scope) =>
                        scope.concatLists), () =>
                      scope.apply$(scope.map, () =>
                        scope.func$("module", (scope) =>
                          scope.apply$(scope.mapAttrs, () =>
                            scope.func$("n", (scope) =>
                              scope.func$("value", (scope) =>
                                scope.apply$(scope.map, () =>
                                  scope.func$("config", (scope) =>
                                    scope.attrSet$({
                                      file: () =>
                                        scope.module.file,
                                      config: () =>
                                        scope.config,
                                    })), () =>
                                  scope.apply$(scope.pushDownProperties, () =>
                                    scope.value)))), () =>
                            scope.module["config"])), () =>
                        scope.checkedConfigs)),
                  rawDefinitionsByName: (scope) =>
                    scope.apply$(scope.zipAttrs, () =>
                      scope.apply$(scope.map, () =>
                        scope.func$("module", (scope) =>
                          scope.apply$(scope.mapAttrs, () =>
                            scope.func$("n", (scope) =>
                              scope.func$("value", (scope) =>
                                scope.attrSet$({
                                  file: () =>
                                    scope.module.file,
                                  value: () =>
                                    scope.value,
                                }))), () =>
                            scope.module["config"])), () =>
                        scope.checkedConfigs)),
                  optionTreeToOption: (scope) =>
                    scope.func$("decl", (scope) =>
                      scope.if$(scope.apply$(scope.isOption, () =>
                        scope.decl["options"])).then$(() =>
                          scope.decl
                        ).else$(() =>
                          scope.operators$.merge(
                            scope.decl,
                            scope.attrSet$({
                              options: () =>
                                scope.apply$(scope.mkOption, () =>
                                  scope.attrSet$({
                                    type: () =>
                                      scope.apply$(
                                        scope.types["submoduleWith"],
                                        () =>
                                          scope.attrSet$({
                                            modules: () => [scope.attrSet$({
                                              options: () =>
                                                scope.decl["options"],
                                            })],
                                            shorthandOnlyDefinesConfig: null,
                                          }),
                                      ),
                                  })),
                            }),
                          )
                        )),
                  resultsByName: (scope) =>
                    scope.apply$(scope.mapAttrs, () =>
                      scope.func$("name", (scope) =>
                        scope.func$("decls", (scope) =>
                          scope.let$({
                            loc: (scope) =>
                              scope.operators$.listConcat(scope.prefix, [
                                scope.name,
                              ]),
                            defns: (scope) =>
                              scope.operators$.selectOrDefault(
                                scope.pushedDownDefinitionsByName,
                                [scope.name],
                                [],
                              ),
                            "defns'": (scope) =>
                              scope.operators$.selectOrDefault(
                                scope.rawDefinitionsByName,
                                [scope.name],
                                [],
                              ),
                            optionDecls: (scope) =>
                              scope.apply$(scope.filter, () =>
                                scope.func$(
                                  "m",
                                  (
                                    scope,
                                  ) => ((scope.operators$.hasAttr(
                                    scope.m["options"],
                                    "_type",
                                  )) &&
                                    ((scope.operators$.equal(
                                      scope.m["options"]["_type"],
                                      "option",
                                    )) ||
                                      (scope.apply$(
                                        scope.throwDeclarationTypeError,
                                        () => scope.loc,
                                        () => scope.m["options"]["_type"],
                                        () => scope.m["_file"],
                                      )))),
                                ), () =>
                                scope.decls),
                          }).in$((scope) =>
                            scope.if$(
                              scope.operators$.equal(
                                scope.apply$(scope.length, () =>
                                  scope.optionDecls),
                                scope.apply$(scope.length, () =>
                                  scope.decls),
                              ),
                            ).then$(() =>
                              scope.let$({
                                opt: (scope) =>
                                  scope.apply$(scope.fixupOptionType, () =>
                                    scope.loc, () =>
                                    scope.apply$(scope.mergeOptionDecls, () =>
                                      scope.loc, () =>
                                      scope.decls)),
                              }).in$((scope) =>
                                scope.attrSet$({
                                  matchedOptions: () =>
                                    scope.apply$(scope.evalOptionValue, () =>
                                      scope.loc, () =>
                                      scope.opt, () =>
                                      scope["defns'"]),
                                  unmatchedDefns: [],
                                })
                              )
                            ).elseIf$(() =>
                              scope.operators$.notEqual(scope.optionDecls, [])
                            ).then$(() =>
                              scope.if$(scope.apply$(scope.all, () =>
                                scope.func$("x", (scope) =>
                                  scope.operators$.equal(
                                    scope.operators$.selectOrDefault(scope.x, [
                                      "options",
                                      "type",
                                      "name",
                                    ], null),
                                    "submodule",
                                  )), () =>
                                scope.optionDecls)).then$(() =>
                                  scope.let$({
                                    opt: (scope) =>
                                      scope.apply$(scope.fixupOptionType, () =>
                                        scope.loc, () =>
                                        scope.apply$(
                                          scope.mergeOptionDecls,
                                          () => scope.loc,
                                          () =>
                                            scope.apply$(
                                              scope.map,
                                              () => scope.optionTreeToOption,
                                              () => scope.decls,
                                            ),
                                        )),
                                  }).in$((scope) =>
                                    scope.attrSet$({
                                      matchedOptions: () =>
                                        scope.apply$(
                                          scope.evalOptionValue,
                                          () => scope.loc,
                                          () => scope.opt,
                                          () => scope["defns'"],
                                        ),
                                      unmatchedDefns: [],
                                    })
                                  )
                                ).else$(() =>
                                  scope.let$({
                                    nonOptions: (scope) =>
                                      scope.apply$(scope.filter, () =>
                                        scope.func$("m", (scope) =>
                                          scope.operators$.negate(
                                            scope.apply$(scope.isOption, () =>
                                              scope.m["options"]),
                                          )), () =>
                                        scope.decls),
                                  }).in$((scope) =>
                                    scope.apply$(scope.throw, () =>
                                      scope.str$(
                                        () => [
                                          "The option `",
                                          scope.apply$(
                                            scope.showOption,
                                            () => scope.loc,
                                          ),
                                          "' in module `",
                                          scope.apply$(
                                            scope.head,
                                            () => scope.optionDecls,
                                          )["_file"],
                                          "' would be a parent of the following options, but its type `",
                                          scope.operators$.selectOrDefault(
                                            scope.apply$(scope.head, () =>
                                              scope.optionDecls),
                                            ["options", "type", "description"],
                                            "<no description>",
                                          ),
                                          "' does not support nested options.\n",
                                          scope.apply$(
                                            scope.showRawDecls,
                                            () => scope.loc,
                                            () => scope.nonOptions,
                                          ),
                                        ]
                                      ))
                                  )
                                )
                            ).else$(() =>
                              scope.apply$(scope["mergeModules'"], () =>
                                scope.loc, () =>
                                scope.decls, () =>
                                scope.defns)
                            )
                          ))), () =>
                      scope.declsByName),
                  matchedOptions: (scope) =>
                    scope.apply$(scope.mapAttrs, () =>
                      scope.func$("n", (scope) =>
                        scope.func$("v", (scope) =>
                          scope.v["matchedOptions"])), () =>
                      scope.resultsByName),
                  unmatchedDefnsByName: (scope) =>
                    scope.operators$.merge(
                      scope.apply$(scope.mapAttrs, () =>
                        scope.func$("n", (scope) =>
                          scope.func$(
                            "v",
                            (scope) => scope.v["unmatchedDefns"],
                          )), () => scope.resultsByName),
                      scope.apply$(
                        scope.removeAttrs,
                        () => scope.rawDefinitionsByName,
                        () =>
                          scope.apply$(scope.attrNames, () =>
                            scope.matchedOptions),
                      ),
                    ),
                }).in$((scope) =>
                  scope.attrSet$({
                    matchedOptions: () => scope.matchedOptions,
                    unmatchedDefns: () =>
                      scope.if$(scope.operators$.equal(scope.configs, []))
                        .then$([]).else$(() =>
                          scope.apply$(scope.concatLists, () =>
                            scope.apply$(scope.mapAttrsToList, () =>
                              scope.func$("name", (scope) =>
                                scope.func$("defs", (scope) =>
                                  scope.apply$(scope.map, () =>
                                    scope.func$("def", (scope) =>
                                      scope.operators$.merge(
                                        scope.def,
                                        scope.attrSet$({
                                          prefix: () =>
                                            scope.operators$.listConcat(
                                              [scope.name],
                                              scope.operators$.selectOrDefault(
                                                scope.def,
                                                ["prefix"],
                                                [],
                                              ),
                                            ),
                                        }),
                                      )), () =>
                                    scope.defs))), () =>
                              scope.unmatchedDefnsByName))
                        ),
                  })
                )))),
        throwDeclarationTypeError: (scope) =>
          scope.func$("loc", (scope) =>
            scope.func$("actualTag", (scope) =>
              scope.func$("file", (scope) =>
                scope.let$({
                  name: (scope) =>
                    scope.apply$(
                      scope.lib["strings"]["escapeNixIdentifier"],
                      () =>
                        scope.apply$(scope.lib["lists"]["last"], () =>
                          scope.loc),
                    ),
                  path: (scope) =>
                    scope.apply$(scope.showOption, () => scope.loc),
                  depth: (scope) => scope.apply$(scope.length, () => scope.loc),
                  paragraphs: (scope) =>
                    scope.operators$.listConcat(
                      [scope.str$(
                        () => [
                          "In module ",
                          scope.file,
                          ": expected an option declaration at option path `",
                          scope.path,
                          "` but got an attribute set with type ",
                          scope.actualTag,
                        ]
                      )],
                      scope.apply$(
                        scope.optional,
                        () => (scope.operators$.equal(
                          scope.actualTag,
                          "option-type",
                        )),
                        () =>
                          scope.str$(
                            () => [
                              "When declaring an option, you must wrap the type in a `mkOption` call. It should look somewhat like:\n    ",
                              scope.comment,
                              "\n    ",
                              scope.name,
                              " = lib.mkOption {\n      description = ...;\n      type = <the type you wrote for ",
                              scope.name,
                              ">;\n      ...\n    };\n",
                            ]
                          ),
                      ),
                    ),
                  comment: (scope) =>
                    scope.apply$(
                      scope.optionalString,
                      () => (scope.operators$.greaterThan(scope.depth, 1n)),
                      () =>
                        scope.str$(
                          () => [
                            "\n    # ",
                            scope.apply$(scope.showOption, () => scope.loc),
                          ]
                        ),
                    ),
                }).in$((scope) =>
                  scope.apply$(
                    scope.throw,
                    () =>
                      scope.apply$(scope.concatStringsSep, "\n\n", () =>
                        scope.paragraphs),
                  )
                )))),
        mergeOptionDecls: (scope) =>
          scope.func$("loc", (scope) =>
            scope.func$("opts", (scope) =>
              scope.apply$(scope["foldl'"], () =>
                scope.func$("res", (scope) =>
                  scope.func$("opt", (scope) =>
                    scope.let$({
                      t: (scope) => scope.res["type"],
                      "t'": (scope) => scope.opt["options"]["type"],
                      mergedType: (scope) =>
                        scope.apply$(
                          scope.t["typeMerge"],
                          () => scope["t'"]["functor"],
                        ),
                      typesMergeable: (scope) =>
                        scope.operators$.notEqual(scope.mergedType, null),
                      typeSet: (scope) =>
                        scope.if$(
                          (scope.operators$.hasAttr(
                            scope.opt["options"],
                            "type",
                          )) && (scope.operators$.hasAttr(scope.res, "type")),
                        ).then$(() =>
                          scope.if$(scope.typesMergeable).then$(() =>
                            scope.attrSet$({
                              type: () => scope.mergedType,
                            })
                          ).else$(() =>
                            scope.apply$(
                              scope.throw,
                              () =>
                                scope.str$(
                                  () => [
                                    "The option `",
                                    scope.apply$(
                                      scope.showOption,
                                      () => scope.loc,
                                    ),
                                    "' in `",
                                    scope.opt["_file"],
                                    "' is already declared in ",
                                    scope.apply$(
                                      scope.showFiles,
                                      () => scope.res["declarations"],
                                    ),
                                    ".",
                                  ]
                                ),
                            )
                          )
                        ).else$({}),
                      bothHave: (scope) =>
                        scope.func$(
                          "k",
                          (
                            scope,
                          ) => ((scope.operators$.hasAttr(
                            scope.opt["options"],
                            scope.k,
                          )) && (scope.operators$.hasAttr(scope.res, scope.k))),
                        ),
                    }).in$((scope) =>
                      scope.if$(
                        (((scope.apply$(scope.bothHave, "default")) ||
                          (scope.apply$(scope.bothHave, "example"))) ||
                          (scope.apply$(scope.bothHave, "description"))) ||
                        (scope.apply$(scope.bothHave, "apply")),
                      ).then$(() =>
                        scope.apply$(
                          scope.throw,
                          () =>
                            scope.str$(
                              () => [
                                "The option `",
                                scope.apply$(scope.showOption, () => scope.loc),
                                "' in `",
                                scope.opt["_file"],
                                "' is already declared in ",
                                scope.apply$(
                                  scope.showFiles,
                                  () => scope.res["declarations"],
                                ),
                                ".",
                              ]
                            ),
                        )
                      ).else$(() =>
                        scope.let$({
                          getSubModules: (scope) =>
                            scope.operators$.selectOrDefault(scope.opt, [
                              "options",
                              "type",
                              "getSubModules",
                            ], null),
                          submodules: (scope) =>
                            scope.if$(
                              scope.operators$.notEqual(
                                scope.getSubModules,
                                null,
                              ),
                            ).then$(() =>
                              scope.operators$.listConcat(
                                scope.apply$(scope.map, () =>
                                  scope.apply$(
                                    scope.setDefaultModuleLocation,
                                    () => scope.opt["_file"],
                                  ), () =>
                                  scope.getSubModules),
                                scope.res["options"],
                              )
                            ).else$(() => scope.res["options"]),
                        }).in$((scope) =>
                          scope.operators$.merge(
                            scope.opt["options"],
                            scope.operators$.merge(
                              scope.res,
                              scope.operators$.merge(
                                scope.attrSet$({
                                  declarations: () =>
                                    scope.operators$.listConcat(
                                      scope.res["declarations"],
                                      [scope.opt["_file"]],
                                    ),
                                  declarationPositions: () =>
                                    scope.operators$.listConcat(
                                      scope.res["declarationPositions"],
                                      scope.if$(
                                        scope.operators$.notEqual(
                                          scope.opt["pos"],
                                          null,
                                        ),
                                      ).then$(() => [scope.opt["pos"]]).else$(
                                        () => [scope.attrSet$({
                                          file: () => scope.opt["_file"],
                                          line: null,
                                          column: null,
                                        })]
                                      ),
                                    ),
                                  options: () => scope.submodules,
                                }),
                                scope.typeSet,
                              ),
                            ),
                          )
                        )
                      )
                    ))), () =>
                scope.attrSet$({
                  loc: () => scope.loc,
                  declarations: [],
                  declarationPositions: [],
                  options: [],
                }), () => scope.opts))),
        evalOptionValue: (scope) =>
          scope.func$("loc", (scope) =>
            scope.func$("opt", (scope) =>
              scope.func$("defs", (scope) =>
                scope.let$({
                  "defs'": (scope) =>
                    scope.if$(scope.operators$.hasAttr(scope.opt, "default"))
                      .then$(() =>
                        scope.operators$.listConcat([scope.attrSet$({
                          file: () =>
                            scope.apply$(scope.head, () =>
                              scope.opt["declarations"]),
                          value: () =>
                            scope.apply$(scope.mkOptionDefault, () =>
                              scope.opt["default"]),
                        })], scope.defs)
                      ).else$(() =>
                        scope.defs
                      ),
                  res: (scope) =>
                    scope.if$(
                      (scope.operators$.selectOrDefault(
                        scope.opt,
                        ["readOnly"],
                        false,
                      )) &&
                      (scope.operators$.greaterThan(
                        scope.apply$(scope.length, () => scope["defs'"]),
                        1n,
                      )),
                    ).then$(() =>
                      scope.let$({
                        separateDefs: (scope) =>
                          scope.apply$(scope.map, () =>
                            scope.func$("def", (scope) =>
                              scope.operators$.merge(
                                scope.def,
                                scope.attrSet$({
                                  value: () =>
                                    scope.apply$(
                                      scope.mergeDefinitions,
                                      () => scope.loc,
                                      () => scope.opt["type"],
                                      () => [scope.def],
                                    )["mergedValue"],
                                }),
                              )), () =>
                            scope["defs'"]),
                      }).in$((scope) =>
                        scope.apply$(scope.throw, () =>
                          scope.str$(
                            () => [
                              "The option `",
                              scope.apply$(scope.showOption, () => scope.loc),
                              "' is read-only, but it's set multiple times. Definition values:",
                              scope.apply$(scope.showDefs, () =>
                                scope.separateDefs),
                            ]
                          ))
                      )
                    ).else$(() =>
                      scope.apply$(scope.mergeDefinitions, () =>
                        scope.loc, () =>
                        scope.opt["type"], () =>
                        scope["defs'"])
                    ),
                  value: (scope) =>
                    scope.if$(scope.operators$.hasAttr(scope.opt, "apply"))
                      .then$(() =>
                        scope.apply$(scope.opt["apply"], () =>
                          scope.res["mergedValue"])
                      ).else$(() =>
                        scope.res["mergedValue"]
                      ),
                  warnDeprecation: (scope) =>
                    scope.if$(
                      scope.operators$.notEqual(
                        scope.opt["type"]["deprecationMessage"],
                        null,
                      ),
                    ).then$(() =>
                      scope.apply$(scope.warn, () =>
                        scope.str$(
                          () => [
                            "The type `types.",
                            scope.opt["type"]["name"],
                            "' of option `",
                            scope.apply$(scope.showOption, () => scope.loc),
                            "' defined in ",
                            scope.apply$(
                              scope.showFiles,
                              () => scope.opt["declarations"],
                            ),
                            " is deprecated. ",
                            scope.opt["type"]["deprecationMessage"],
                          ]
                        ))
                    ).else$(() =>
                      scope.func$("x", (scope) =>
                        scope.x)
                    ),
                }).in$((scope) =>
                  scope.operators$.merge(
                    scope.apply$(scope.warnDeprecation, () => scope.opt),
                    scope.attrSet$({
                      value: () =>
                        scope.apply$(
                          scope.addErrorContext,
                          () =>
                            scope.str$(
                              () => [
                                "while evaluating the option `",
                                scope.apply$(scope.showOption, () => scope.loc),
                                "':",
                              ]
                            ),
                          () => scope.value,
                        ),
                      highestPrio: () => scope.res["defsFinal'"].highestPrio,
                      definitions: () =>
                        scope.apply$(
                          scope.map,
                          () =>
                            scope.func$("def", (scope) => scope.def["value"]),
                          () => scope.res["defsFinal"],
                        ),
                      files: () =>
                        scope.apply$(
                          scope.map,
                          () =>
                            scope.func$("def", (scope) => scope.def["file"]),
                          () => scope.res["defsFinal"],
                        ),
                      definitionsWithLocations: () => scope.res["defsFinal"],
                      isDefined: () => scope.res.isDefined,
                      valueMeta: () => scope.res["checkedAndMerged"].valueMeta,
                      __toString: () =>
                        scope.func$(
                          "_",
                          (scope) =>
                            scope.apply$(scope.showOption, () => scope.loc),
                        ),
                    }),
                  )
                )))),
        checkV2MergeCoherence: (scope) =>
          scope.func$(
            "loc",
            (scope) =>
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
                          "' that uses\nan ad-hoc `type // { check = ...; }' override, which is incompatible with\nthe v2 merge mechanism.\n\nPlease use `lib.types.addCheck` instead of `type // { check }' to add\ncustom validation. For example:\n\n  lib.types.addCheck baseType (value: /* your check */)\n\ninstead of:\n\n  baseType // { check = value: /* your check */; }\n\nAlternatively, this message may also occur as false positive when mixing Nixpkgs\nversions, if one Nixpkgs is between 83fed2e6..58696117 (Aug 28 - Oct 28 2025)\n",
                        ]
                      ))
                  ))),
          ),
        mergeDefinitions: (scope) =>
          scope.func$("loc", (scope) =>
            scope.func$("type", (scope) =>
              scope.func$("defs", (scope) =>
                scope.recAttrSet$({
                  "defsFinal'": (scope) =>
                    scope.let$({
                      defsNormalized: (scope) =>
                        scope.apply$(
                          scope.concatMap,
                          () =>
                            scope.func$("m", (scope) =>
                              scope.apply$(scope.map, () =>
                                scope.func$("value", (scope) =>
                                  scope.if$(
                                    scope.operators$.equal(
                                      scope.operators$.selectOrDefault(
                                        scope.value,
                                        ["_type"],
                                        null,
                                      ),
                                      "definition",
                                    ),
                                  ).then$(() =>
                                    scope.value
                                  ).else$(() =>
                                    scope.attrSet$({
                                      file: () =>
                                        scope.m.file,
                                      value: () =>
                                        scope.value,
                                    })
                                  )), () =>
                                scope.apply$(scope.addErrorContext, () =>
                                  scope.str$(
                                    () => [
                                      "while evaluating definitions from `",
                                      scope.m["file"],
                                      "':",
                                    ]
                                  ), () =>
                                  scope.apply$(scope.dischargeProperties, () =>
                                    scope.m["value"])))),
                          () =>
                            scope.defs,
                        ),
                      defsFiltered: (scope) =>
                        scope.apply$(
                          scope["filterOverrides'"],
                          () => scope.defsNormalized,
                        ),
                      defsSorted: (scope) =>
                        scope.if$(
                          scope.apply$(scope.any, () =>
                            scope.func$("def", (scope) =>
                              scope.operators$.equal(
                                scope.operators$.selectOrDefault(scope.def, [
                                  "value",
                                  "_type",
                                ], ""),
                                "order",
                              )), () =>
                            scope.defsFiltered["values"]),
                        ).then$(() =>
                          scope.apply$(
                            scope.sortProperties,
                            () => scope.defsFiltered["values"],
                          )
                        ).else$(() => scope.defsFiltered["values"]),
                    }).in$((scope) =>
                      scope.if$(
                        (scope.operators$.equal(
                          scope.apply$(scope.length, () => scope.defs),
                          1n,
                        )) && (scope.let$({
                          d: (scope) =>
                            scope.apply$(scope.head, () => scope.defs),
                        }).in$((scope) =>
                          scope.apply$(
                            scope.addErrorContext,
                            () =>
                              scope.str$(
                                () => [
                                  "while evaluating definitions from `",
                                  scope.d["file"],
                                  "':",
                                ]
                              ),
                            () => (scope.operators$.negate(
                              (scope.apply$(scope.isAttrs, () =>
                                scope.d["value"])) &&
                              (scope.operators$.hasAttr(
                                scope.d["value"],
                                "_type",
                              )),
                            )),
                          )
                        )),
                      ).then$(() =>
                        scope.attrSet$({
                          values: () => scope.defs,
                          highestPrio: () => scope.defaultOverridePriority,
                        })
                      ).else$(() =>
                        scope.attrSet$({
                          values: () => scope.defsSorted,
                          highestPrio: () => scope.defsFiltered.highestPrio,
                        })
                      )
                    ),
                  defsFinal: (scope) => scope["defsFinal'"]["values"],
                  mergedValue: (scope) =>
                    scope.if$(scope.isDefined).then$(() =>
                      scope.if$(
                        scope.operators$.hasAttr(scope.type["merge"], "v2"),
                      ).then$(() =>
                        scope.if$(
                          scope.operators$.notEqual(
                            scope.operators$.selectOrDefault(
                              scope.checkedAndMerged,
                              ["headError"],
                              null,
                            ),
                            null,
                          ),
                        ).then$(() =>
                          scope.apply$(scope.throw, () =>
                            scope.str$(
                              () => [
                                "A definition for option `",
                                scope.apply$(scope.showOption, () => scope.loc),
                                "' is not of type `",
                                scope.type["description"],
                                "'. TypeError: ",
                                scope.checkedAndMerged["headError"]["message"],
                              ]
                            ))
                        ).else$(() =>
                          scope.checkedAndMerged["value"]
                        )
                      ).elseIf$(() =>
                        scope.apply$(scope.all, () =>
                          scope.func$("def", (scope) =>
                            scope.apply$(scope.type["check"], () =>
                              scope.def["value"])), () =>
                          scope.defsFinal)
                      ).then$(() =>
                        scope.apply$(scope.type["merge"], () =>
                          scope.loc, () =>
                          scope.defsFinal)
                      ).else$(() =>
                        scope.let$({
                          allInvalid: (scope) =>
                            scope.apply$(scope.filter, () =>
                              scope.func$("def", (scope) =>
                                scope.operators$.negate(
                                  scope.apply$(scope.type["check"], () =>
                                    scope.def["value"]),
                                )), () =>
                              scope.defsFinal),
                        }).in$((scope) =>
                          scope.apply$(scope.throw, () =>
                            scope.str$(
                              () => [
                                "A definition for option `",
                                scope.apply$(scope.showOption, () => scope.loc),
                                "' is not of type `",
                                scope.type["description"],
                                "'. Definition values:",
                                scope.apply$(
                                  scope.showDefs,
                                  () => scope.allInvalid,
                                ),
                              ]
                            ))
                        )
                      )
                    ).elseIf$(() =>
                      scope.operators$.hasAttr(
                        scope.type["emptyValue"],
                        "value",
                      )
                    ).then$(() =>
                      scope.type["emptyValue"]["value"]
                    ).else$(() =>
                      scope.apply$(scope.throw, () =>
                        scope.str$(
                          () => [
                            "The option `",
                            scope.apply$(scope.showOption, () => scope.loc),
                            "' was accessed but has no value defined. Try setting the option.",
                          ]
                        ))
                    ),
                  checkedAndMerged: (scope) =>
                    scope.apply$(
                      scope.func$({
                        headError: scope.nixArg$.NoDefault,
                        value: scope.nixArg$.NoDefault,
                        valueMeta: scope.nixArg$.NoDefault,
                        args: scope.nixArg$.AllArgs,
                      }, (scope) =>
                        scope.args),
                      () =>
                        scope.if$(
                          scope.operators$.hasAttr(scope.type["merge"], "v2"),
                        ).then$(() =>
                          scope.let$({
                            r: (scope) =>
                              scope.apply$(
                                scope.checkV2MergeCoherence,
                                () => scope.loc,
                                () => scope.type,
                                () =>
                                  scope.apply$(scope.type["merge"]["v2"], () =>
                                    scope.attrSet$({
                                      loc: () => scope.loc,
                                      defs: () => scope.defsFinal,
                                    })),
                              ),
                          }).in$((scope) =>
                            scope.operators$.merge(
                              scope.r,
                              scope.attrSet$({
                                valueMeta: () =>
                                  scope.operators$.merge(
                                    scope.r["valueMeta"],
                                    scope.attrSet$({
                                      _internal: () =>
                                        scope.attrSet$({
                                          type: () => scope.type,
                                        }),
                                    }),
                                  ),
                              }),
                            )
                          )
                        ).else$(() =>
                          scope.attrSet$({
                            headError: null,
                            value: () => scope.mergedValue,
                            valueMeta: {},
                          })
                        ),
                    ),
                  isDefined: (scope) =>
                    scope.operators$.notEqual(scope.defsFinal, []),
                  optionalValue: (scope) =>
                    scope.if$(scope.isDefined).then$(() =>
                      scope.attrSet$({
                        value: () =>
                          scope.mergedValue,
                      })
                    ).else$({}),
                })))),
        pushDownProperties: (scope) =>
          scope.let$({
            mapAttrsIfAttrs: (scope) =>
              scope.func$(
                "f",
                (scope) =>
                  scope.func$("val", (scope) =>
                    scope.if$(scope.apply$(scope.isAttrs, () =>
                      scope.val)).then$(() =>
                        scope.apply$(scope.mapAttrs, () =>
                          scope.f, () =>
                          scope.val)
                      ).else$(() =>
                        scope.val
                      )),
              ),
          }).in$((scope) =>
            scope.func$(
              "cfg",
              (scope) =>
                scope.if$(
                  scope.operators$.equal(
                    scope.operators$.selectOrDefault(scope.cfg, ["_type"], ""),
                    "merge",
                  ),
                ).then$(() =>
                  scope.apply$(scope.concatMap, () =>
                    scope.pushDownProperties, () =>
                    scope.cfg["contents"])
                ).elseIf$(() =>
                  scope.operators$.equal(
                    scope.operators$.selectOrDefault(scope.cfg, ["_type"], ""),
                    "if",
                  )
                ).then$(() =>
                  scope.apply$(scope.map, () =>
                    scope.apply$(scope.mapAttrsIfAttrs, () =>
                      scope.func$("n", (scope) =>
                        scope.func$("v", (scope) =>
                          scope.apply$(scope.mkIf, () =>
                            scope.cfg["condition"], () =>
                            scope.v)))), () =>
                    scope.apply$(scope.pushDownProperties, () =>
                      scope.cfg["content"]))
                ).elseIf$(() =>
                  scope.operators$.equal(
                    scope.operators$.selectOrDefault(scope.cfg, ["_type"], ""),
                    "override",
                  )
                ).then$(() =>
                  scope.apply$(scope.map, () =>
                    scope.apply$(scope.mapAttrsIfAttrs, () =>
                      scope.func$("n", (scope) =>
                        scope.func$("v", (scope) =>
                          scope.apply$(scope.mkOverride, () =>
                            scope.cfg["priority"], () =>
                            scope.v)))), () =>
                    scope.apply$(scope.pushDownProperties, () =>
                      scope.cfg["content"]))
                ).else$(() => [scope.cfg]),
            )
          ),
        dischargeProperties: (scope) =>
          scope.func$(
            "def",
            (scope) =>
              scope.if$(
                scope.operators$.equal(
                  scope.operators$.selectOrDefault(scope.def, ["_type"], ""),
                  "merge",
                ),
              ).then$(() =>
                scope.apply$(scope.concatMap, () =>
                  scope.dischargeProperties, () =>
                  scope.def["contents"])
              ).elseIf$(() =>
                scope.operators$.equal(
                  scope.operators$.selectOrDefault(scope.def, ["_type"], ""),
                  "if",
                )
              ).then$(() =>
                scope.if$(scope.apply$(scope.isBool, () =>
                  scope.def["condition"])).then$(() =>
                    scope.if$(scope.def["condition"]).then$(() =>
                      scope.apply$(scope.dischargeProperties, () =>
                        scope.def["content"])
                    ).else$([])
                  ).else$(() =>
                    scope.apply$(
                      scope.throw,
                      "‘mkIf’ called with a non-Boolean condition",
                    )
                  )
              ).else$(() => [scope.def]),
          ),
        filterOverrides: (scope) =>
          scope.func$(
            "defs",
            (scope) =>
              scope.apply$(scope["filterOverrides'"], () =>
                scope.defs)["values"],
          ),
        "filterOverrides'": (scope) =>
          scope.let$({
            getPrio: (scope) =>
              scope.func$(
                "def",
                (scope) =>
                  scope.if$(
                    scope.operators$.equal(
                      scope.operators$.selectOrDefault(scope.def, [
                        "value",
                        "_type",
                      ], ""),
                      "override",
                    ),
                  ).then$(() => scope.def["value"]["priority"]).else$(() =>
                    scope.defaultOverridePriority
                  ),
              ),
            strip: (scope) =>
              scope.func$(
                "def",
                (scope) =>
                  scope.if$(
                    scope.operators$.equal(
                      scope.operators$.selectOrDefault(scope.def, [
                        "value",
                        "_type",
                      ], ""),
                      "override",
                    ),
                  ).then$(() =>
                    scope.operators$.merge(
                      scope.def,
                      scope.attrSet$({
                        value: () => scope.def["value"]["content"],
                      }),
                    )
                  ).else$(() => scope.def),
              ),
          }).in$((scope) =>
            scope.func$("defs", (scope) =>
              scope.if$(
                scope.operators$.equal(
                  scope.apply$(scope.length, () => scope.defs),
                  1n,
                ),
              ).then$(() =>
                scope.attrSet$({
                  values: () =>
                    scope.apply$(
                      scope.map,
                      () => scope.strip,
                      () => scope.defs,
                    ),
                  highestPrio: () =>
                    scope.apply$(
                      scope.getPrio,
                      () => scope.apply$(scope.head, () => scope.defs),
                    ),
                })
              ).else$(() =>
                scope.let$({
                  highestPrio: (scope) =>
                    scope.apply$(
                      scope["foldl'"],
                      () =>
                        scope.func$("prio", (scope) =>
                          scope.func$("def", (scope) =>
                            scope.apply$(scope.min, () =>
                              scope.apply$(scope.getPrio, () =>
                                scope.def), () =>
                              scope.prio))),
                      9999n,
                      () => scope.defs,
                    ),
                }).in$((scope) =>
                  scope.attrSet$({
                    values: () =>
                      scope.apply$(scope.concatMap, () =>
                        scope.func$("def", (scope) =>
                          scope.if$(
                            scope.operators$.equal(
                              scope.apply$(scope.getPrio, () => scope.def),
                              scope.highestPrio,
                            ),
                          ).then$(() => [scope.apply$(scope.strip, () =>
                            scope.def)]
                          ).else$([])), () => scope.defs),
                    highestPrio: () => scope.highestPrio,
                  })
                )
              ))
          ),
        sortProperties: (scope) =>
          scope.func$("defs", (scope) =>
            scope.let$({
              strip: (scope) =>
                scope.func$(
                  "def",
                  (scope) =>
                    scope.if$(
                      scope.operators$.equal(
                        scope.operators$.selectOrDefault(scope.def, [
                          "value",
                          "_type",
                        ], ""),
                        "order",
                      ),
                    ).then$(() =>
                      scope.operators$.merge(
                        scope.def,
                        scope.attrSet$({
                          value: () => scope.def["value"]["content"],
                          priority: () => scope.def["value"].priority,
                        }),
                      )
                    ).else$(() => scope.def),
                ),
              "defs'": (scope) =>
                scope.apply$(scope.map, () => scope.strip, () => scope.defs),
              compare: (scope) =>
                scope.func$(
                  "a",
                  (scope) =>
                    scope.func$("b", (scope) =>
                      scope.operators$.lessThan(
                        scope.operators$.selectOrDefault(
                          scope.a,
                          ["priority"],
                          () => scope.defaultOrderPriority,
                        ),
                        scope.operators$.selectOrDefault(
                          scope.b,
                          ["priority"],
                          () => scope.defaultOrderPriority,
                        ),
                      )),
                ),
            }).in$((scope) =>
              scope.apply$(
                scope.sort,
                () => scope.compare,
                () => scope["defs'"],
              )
            )),
        fixupOptionType: (scope) =>
          scope.func$(
            "loc",
            (scope) =>
              scope.func$("opt", (scope) =>
                scope.if$(
                  scope.operators$.equal(
                    scope.operators$.selectOrDefault(scope.opt, [
                      "type",
                      "getSubModules",
                    ], null),
                    null,
                  ),
                ).then$(() =>
                  scope.operators$.merge(
                    scope.opt,
                    scope.attrSet$({
                      type: () =>
                        scope.operators$.selectOrDefault(
                          scope.opt,
                          ["type"],
                          () => scope.types["unspecified"],
                        ),
                    }),
                  )
                ).else$(() =>
                  scope.operators$.merge(
                    scope.opt,
                    scope.attrSet$({
                      type: () =>
                        scope.apply$(
                          scope.opt["type"]["substSubModules"],
                          () => scope.opt["options"],
                        ),
                      options: [],
                    }),
                  )
                )),
          ),
        mergeAttrDefinitionsWithPrio: (scope) =>
          scope.func$("opt", (scope) =>
            scope.let$({
              defsByAttr: (scope) =>
                scope.apply$(
                  scope.zipAttrs,
                  () =>
                    scope.apply$(scope.concatLists, () =>
                      scope.apply$(scope.concatMap, () =>
                        scope.func$({
                          value: scope.nixArg$.NoDefault,
                          "...": scope.nixArg$.Ellipsis,
                          def: scope.nixArg$.AllArgs,
                        }, (scope) =>
                          scope.apply$(scope.map, () =>
                            scope.apply$(scope.mapAttrsToList, () =>
                              scope.func$("k", (scope) =>
                                scope.func$("value", (scope) =>
                                  scope.attrSet$({
                                    ...scope.deepSet$([scope.k], () =>
                                      scope.operators$.merge(
                                        scope.def,
                                        scope.attrSet$({
                                          value: () => scope.value,
                                        }),
                                      )),
                                  })))), () =>
                            scope.apply$(scope.pushDownProperties, () =>
                              scope.value))), () =>
                        scope.opt["definitionsWithLocations"])),
                ),
            }).in$((scope) =>
              ((_cond) => {
                if (!_cond) {
                  throw new Error(
                    "assertion failed: " +
                      'opt.type.name == "attrsOf" || opt.type.name == "lazyAttrsOf"',
                  );
                }
                return scope.apply$(scope.mapAttrs, () =>
                  scope.func$("k", (scope) =>
                    scope.func$("v", (scope) =>
                      scope.let$({
                        merging: (scope) =>
                          scope.apply$(
                            scope.mergeDefinitions,
                            () => (scope.operators$.listConcat(
                              scope.opt["loc"],
                              [scope.k],
                            )),
                            () => scope.opt["type"]["nestedTypes"]["elemType"],
                            () => scope.v,
                          ),
                      }).in$((scope) =>
                        scope.attrSet$({
                          value: () =>
                            scope.merging["mergedValue"],
                          highestPrio: () =>
                            scope.merging["defsFinal'"].highestPrio,
                        })
                      ))), () =>
                  scope.defsByAttr);
              })(
                (scope.operators$.equal(
                  scope.opt["type"]["name"],
                  "attrsOf",
                )) ||
                (scope.operators$.equal(
                  scope.opt["type"]["name"],
                  "lazyAttrsOf",
                )),
              )
            )),
        mkIf: (scope) =>
          scope.func$(
            "condition",
            (scope) =>
              scope.func$("content", (scope) =>
                scope.attrSet$({
                  _type: "if",
                  condition: () => scope.condition,
                  content: () => scope.content,
                })),
          ),
        mkAssert: (scope) =>
          scope.func$(
            "assertion",
            (scope) =>
              scope.func$("message", (scope) =>
                scope.func$("content", (scope) =>
                  scope.apply$(scope.mkIf, () =>
                    scope.if$(scope.assertion).then$(true).else$(() =>
                      scope.apply$(scope.throw, () =>
                        scope.str$(
                          () => ["\nFailed assertion: ", scope.message]
                        ))
                    ), () =>
                    scope.content))),
          ),
        mkMerge: (scope) =>
          scope.func$("contents", (scope) =>
            scope.attrSet$({
              _type: "merge",
              contents: () => scope.contents,
            })),
        mkDefinition: (scope) =>
          scope.func$({
            args: scope.nixArg$.AllArgs,
            file: scope.nixArg$.NoDefault,
            value: scope.nixArg$.NoDefault,
            "...": scope.nixArg$.Ellipsis,
          }, (scope) =>
            scope.operators$.merge(scope.args, { _type: "definition" })),
        mkOverride: (scope) =>
          scope.func$("priority", (scope) =>
            scope.func$("content", (scope) =>
              scope.attrSet$({
                _type: "override",
                priority: () =>
                  scope.priority,
                content: () =>
                  scope.content,
              }))),
        mkOptionDefault: (scope) =>
          scope.apply$(scope.mkOverride, 1500n),
        mkDefault: (scope) =>
          scope.apply$(scope.mkOverride, 1000n),
        defaultOverridePriority: 100n,
        mkImageMediaOverride: (scope) =>
          scope.apply$(scope.mkOverride, 60n),
        mkForce: (scope) => scope.apply$(scope.mkOverride, 50n),
        mkVMOverride: (scope) => scope.apply$(scope.mkOverride, 10n),
        mkFixStrictness: (scope) =>
          scope.apply$(
            scope.warn,
            "lib.mkFixStrictness has no effect and will be removed. It returns its argument unmodified, so you can just remove any calls.",
            () => scope.id,
          ),
        mkOrder: (scope) =>
          scope.func$(
            "priority",
            (scope) =>
              scope.func$("content", (scope) =>
                scope.attrSet$({
                  _type: "order",
                  priority: () => scope.priority,
                  content: () => scope.content,
                })),
          ),
        mapDefinitionValue: (scope) =>
          scope.func$("f", (scope) =>
            scope.func$("def", (scope) =>
              scope.if$(scope.operators$.hasAttr(scope.def, "_type")).then$(
                () =>
                  scope.if$(scope.operators$.equal(scope.def["_type"], "merge"))
                    .then$(() =>
                      scope.operators$.merge(
                        scope.def,
                        scope.attrSet$({
                          contents: () =>
                            scope.apply$(scope.map, () =>
                              scope.apply$(scope.mapDefinitionValue, () =>
                                scope.f), () =>
                              scope.def["contents"]),
                        }),
                      )
                    ).elseIf$(() =>
                      scope.operators$.equal(scope.def["_type"], "if")
                    ).then$(() =>
                      scope.operators$.merge(
                        scope.def,
                        scope.attrSet$({
                          content: () =>
                            scope.apply$(
                              scope.mapDefinitionValue,
                              () => scope.f,
                              () => scope.def["content"],
                            ),
                        }),
                      )
                    ).elseIf$(() =>
                      scope.operators$.equal(scope.def["_type"], "override")
                    ).then$(() =>
                      scope.operators$.merge(
                        scope.def,
                        scope.attrSet$({
                          content: () =>
                            scope.apply$(
                              scope.mapDefinitionValue,
                              () => scope.f,
                              () => scope.def["content"],
                            ),
                        }),
                      )
                    ).elseIf$(() =>
                      scope.operators$.equal(scope.def["_type"], "order")
                    ).then$(() =>
                      scope.operators$.merge(
                        scope.def,
                        scope.attrSet$({
                          content: () =>
                            scope.apply$(
                              scope.mapDefinitionValue,
                              () => scope.f,
                              () => scope.def["content"],
                            ),
                        }),
                      )
                    ).elseIf$(() =>
                      scope.operators$.equal(scope.def["_type"], "definition")
                    ).then$(() =>
                      scope.operators$.merge(
                        scope.def,
                        scope.attrSet$({
                          value: () =>
                            scope.apply$(
                              scope.mapDefinitionValue,
                              () => scope.f,
                              () => scope.def["value"],
                            ),
                        }),
                      )
                    ).else$(() => scope.apply$(scope.f, () => scope.def))
              ).else$(() => scope.apply$(scope.f, () => scope.def)))),
        mkBefore: (scope) => scope.apply$(scope.mkOrder, 500n),
        defaultOrderPriority: 1000n,
        mkAfter: (scope) => scope.apply$(scope.mkOrder, 1500n),
        mkAliasDefinitions: (scope) =>
          scope.apply$(scope.mkAliasAndWrapDefinitions, () => scope.id),
        mkAliasAndWrapDefinitions: (scope) =>
          scope.func$(
            "wrap",
            (scope) =>
              scope.func$("option", (scope) =>
                scope.apply$(scope.mkIf, () =>
                  scope.option["isDefined"], () =>
                  scope.apply$(scope.wrap, () =>
                    scope.apply$(scope.mkMerge, () =>
                      scope.option["definitions"])))),
          ),
        mkAliasAndWrapDefsWithPriority: (scope) =>
          scope.func$(
            "wrap",
            (scope) =>
              scope.func$("option", (scope) =>
                scope.let$({
                  prio: (scope) =>
                    scope.operators$.selectOrDefault(scope.option, [
                      "highestPrio",
                    ], () => scope.defaultOverridePriority),
                  defsWithPrio: (scope) =>
                    scope.apply$(
                      scope.map,
                      () => scope.apply$(scope.mkOverride, () => scope.prio),
                      () => scope.option["definitions"],
                    ),
                }).in$((scope) =>
                  scope.apply$(
                    scope.mkIf,
                    () => scope.option["isDefined"],
                    () =>
                      scope.apply$(scope.wrap, () =>
                        scope.apply$(scope.mkMerge, () => scope.defsWithPrio)),
                  )
                )),
          ),
        mkAliasIfDef: (scope) =>
          scope.apply$(
            scope.lib["warn"],
            "Usage of 'mkAliasIfDef' has been deprecated. Use 'mkIf option.isDefined' instead.",
            () =>
              scope.func$("option", (scope) =>
                scope.apply$(scope.mkIf, () =>
                  scope.option["isDefined"])),
          ),
        fixMergeModules: (scope) =>
          scope.func$(
            "modules",
            (scope) =>
              scope.func$("args", (scope) =>
                scope.apply$(scope.evalModules, () =>
                  scope.attrSet$({
                    modules: () =>
                      scope.modules,
                    args: () => scope.args,
                    check: false,
                  }))),
          ),
        mkRemovedOptionModule: (scope) =>
          scope.func$("optionName", (scope) =>
            scope.func$("replacementInstructions", (scope) =>
              scope.func$({
                options: scope.nixArg$.NoDefault,
                "...": scope.nixArg$.Ellipsis,
              }, (scope) =>
                scope.attrSet$({
                  options: () =>
                    scope.apply$(
                      scope.setAttrByPath,
                      () => scope.optionName,
                      () =>
                        scope.apply$(scope.mkOption, () =>
                          scope.attrSet$({
                            visible: false,
                            apply: () =>
                              scope.func$("x", (scope) =>
                                scope.apply$(scope.throw, () =>
                                  scope.str$(
                                    () => [
                                      "The option `",
                                      scope.apply$(
                                        scope.showOption,
                                        () => scope.optionName,
                                      ),
                                      "' can no longer be used since it's been removed. ",
                                      scope.replacementInstructions,
                                    ]
                                  ))),
                          })),
                    ),
                  ...scope.deepSet$(["config", "assertions"], () =>
                    scope.let$({
                      opt: (scope) =>
                        scope.apply$(scope.getAttrFromPath, () =>
                          scope.optionName, () =>
                          scope.options),
                    }).in$((scope) => [scope.attrSet$({
                      assertion: () =>
                        scope.operators$.negate(scope.opt["isDefined"]),
                      message: () =>
                        scope.str$(
                          () => [
                            "The option definition `",
                            scope.apply$(
                              scope.showOption,
                              () => scope.optionName,
                            ),
                            "' in ",
                            scope.apply$(
                              scope.showFiles,
                              () => scope.opt["files"],
                            ),
                            " no longer has any effect; please remove it.\n",
                            scope.replacementInstructions,
                            "\n",
                          ]
                        ),
                    })])),
                })))),
        mkRenamedOptionModule: (scope) =>
          scope.func$(
            "from",
            (scope) =>
              scope.func$("to", (scope) =>
                scope.apply$(scope.doRename, () =>
                  scope.attrSet$({
                    from: () =>
                      scope.from,
                    to: () => scope.to,
                    visible: false,
                    warn: true,
                    use: () =>
                      scope.apply$(scope.trace, () =>
                        scope.str$(
                          () => [
                            "Obsolete option `",
                            scope.apply$(scope.showOption, () => scope.from),
                            "' is used. It was renamed to `",
                            scope.apply$(scope.showOption, () => scope.to),
                            "'.",
                          ]
                        )),
                  }))),
          ),
        mkRenamedOptionModuleWith: (scope) =>
          scope.func$({
            from: scope.nixArg$.NoDefault,
            to: scope.nixArg$.NoDefault,
            sinceRelease: scope.nixArg$.NoDefault,
          }, (scope) =>
            scope.apply$(scope.doRename, () =>
              scope.attrSet$({
                from: () => scope.from,
                to: () => scope.to,
                visible: false,
                warn: () =>
                  scope.apply$(
                    scope.oldestSupportedReleaseIsAtLeast,
                    () => scope.sinceRelease,
                  ),
                use: () =>
                  scope.apply$(
                    scope.warnIf,
                    () =>
                      scope.apply$(scope.oldestSupportedReleaseIsAtLeast, () =>
                        scope.sinceRelease),
                    () =>
                      scope.str$(
                        () => [
                          "Obsolete option `",
                          scope.apply$(scope.showOption, () => scope.from),
                          "' is used. It was renamed to `",
                          scope.apply$(scope.showOption, () => scope.to),
                          "'.",
                        ]
                      ),
                  ),
              }))),
        mkMergedOptionModule: (scope) =>
          scope.func$("from", (scope) =>
            scope.func$("to", (scope) =>
              scope.func$("mergeFn", (scope) =>
                scope.func$({
                  config: scope.nixArg$.NoDefault,
                  options: scope.nixArg$.NoDefault,
                  "...": scope.nixArg$.Ellipsis,
                }, (scope) =>
                  scope.attrSet$({
                    options: () =>
                      scope.apply$(
                        scope["foldl'"],
                        () => scope.recursiveUpdate,
                        {},
                        () =>
                          scope.apply$(scope.map, () =>
                            scope.func$("path", (scope) =>
                              scope.apply$(scope.setAttrByPath, () =>
                                scope.path, () =>
                                scope.apply$(scope.mkOption, {
                                  visible: false,
                                  default: "_mkMergedOptionModule",
                                }))), () =>
                            scope.from),
                      ),
                    config: () =>
                      scope.operators$.merge(
                        scope.attrSet$({
                          warnings: () =>
                            scope.apply$(scope.filter, () =>
                              scope.func$("x", (scope) =>
                                scope.operators$.notEqual(scope.x, "")), () =>
                              scope.apply$(scope.map, () =>
                                scope.func$("f", (scope) =>
                                  scope.let$({
                                    val: (scope) =>
                                      scope.apply$(scope.getAttrFromPath, () =>
                                        scope.f, () =>
                                        scope.config),
                                    opt: (scope) =>
                                      scope.apply$(scope.getAttrFromPath, () =>
                                        scope.f, () =>
                                        scope.options),
                                  }).in$((scope) =>
                                    scope.apply$(
                                      scope.optionalString,
                                      () => (scope.operators$.notEqual(
                                        scope.val,
                                        "_mkMergedOptionModule",
                                      )),
                                      () =>
                                        scope.str$(
                                          () => [
                                            "The option `",
                                            scope.apply$(
                                              scope.showOption,
                                              () => scope.f,
                                            ),
                                            "' defined in ",
                                            scope.apply$(
                                              scope.showFiles,
                                              () => scope.opt["files"],
                                            ),
                                            " has been changed to `",
                                            scope.apply$(
                                              scope.showOption,
                                              () => scope.to,
                                            ),
                                            "' that has a different type. Please read `",
                                            scope.apply$(
                                              scope.showOption,
                                              () => scope.to,
                                            ),
                                            "' documentation and update your configuration accordingly.",
                                          ]
                                        ),
                                    )
                                  )), () =>
                                scope.from)),
                        }),
                        scope.apply$(scope.setAttrByPath, () =>
                          scope.to, () =>
                          scope.apply$(scope.mkMerge, () =>
                            scope.apply$(scope.optional, () =>
                              scope.apply$(scope.any, () =>
                                scope.func$("f", (scope) =>
                                  scope.operators$.notEqual(
                                    scope.apply$(scope.getAttrFromPath, () =>
                                      scope.f, () =>
                                      scope.config),
                                    "_mkMergedOptionModule",
                                  )), () =>
                                scope.from), () =>
                              scope.apply$(scope.mergeFn, () =>
                                scope.config)))),
                      ),
                  }))))),
        mkChangedOptionModule: (scope) =>
          scope.func$(
            "from",
            (scope) =>
              scope.func$("to", (scope) =>
                scope.func$("changeFn", (scope) =>
                  scope.apply$(
                    scope.mkMergedOptionModule,
                    () => [scope.from],
                    () => scope.to,
                    () => scope.changeFn,
                  ))),
          ),
        mkAliasOptionModule: (scope) =>
          scope.func$(
            "from",
            (scope) =>
              scope.func$("to", (scope) =>
                scope.apply$(scope.doRename, () =>
                  scope.attrSet$({
                    from: () =>
                      scope.from,
                    to: () => scope.to,
                    visible: true,
                    warn: false,
                    use: () => scope.id,
                  }))),
          ),
        mkAliasOptionModuleMD: (scope) =>
          scope.apply$(
            scope.lib["warn"],
            "mkAliasOptionModuleMD is deprecated and will be removed in 26.05; please use mkAliasOptionModule.",
            () => scope.mkAliasOptionModule,
          ),
        mkDerivedConfig: (scope) =>
          scope.func$(
            "opt",
            (scope) =>
              scope.func$("f", (scope) =>
                scope.apply$(scope.mkOverride, () =>
                  scope.operators$.selectOrDefault(
                    scope.opt,
                    ["highestPrio"],
                    () => scope.defaultOverridePriority,
                  ), () =>
                  scope.apply$(scope.f, () => scope.opt["value"]))),
          ),
        doRename: (scope) =>
          scope.func$({
            from: scope.nixArg$.NoDefault,
            to: scope.nixArg$.NoDefault,
            visible: scope.nixArg$.NoDefault,
            warn: scope.nixArg$.NoDefault,
            use: scope.nixArg$.NoDefault,
            withPriority: true,
            condition: true,
          }, (scope) =>
            scope.func$({
              config: scope.nixArg$.NoDefault,
              options: scope.nixArg$.NoDefault,
              "...": scope.nixArg$.Ellipsis,
            }, (scope) =>
              scope.let$({
                fromOpt: (scope) =>
                  scope.apply$(
                    scope.getAttrFromPath,
                    () => scope.from,
                    () => scope.options,
                  ),
                toOf: (scope) =>
                  scope.apply$(
                    scope.attrByPath,
                    () => scope.to,
                    () =>
                      scope.apply$(scope.abort, () =>
                        scope.str$(
                          () => [
                            "Renaming error: option `",
                            scope.apply$(scope.showOption, () => scope.to),
                            "' does not exist.",
                          ]
                        )),
                  ),
                toType: (scope) =>
                  scope.let$({
                    opt: (scope) =>
                      scope.apply$(
                        scope.attrByPath,
                        () => scope.to,
                        {},
                        () => scope.options,
                      ),
                  }).in$((scope) =>
                    scope.operators$.selectOrDefault(scope.opt, ["type"], () =>
                      scope.apply$(scope.types["submodule"], {}))
                  ),
              }).in$((scope) =>
                scope.attrSet$({
                  options: () =>
                    scope.apply$(
                      scope.setAttrByPath,
                      () => scope.from,
                      () => (scope.operators$.merge(
                        scope.apply$(scope.mkOption, () =>
                          scope.attrSet$({
                            visible: () => scope.visible,
                            description: () =>
                              scope.str$(
                                () => [
                                  "Alias of {option}`",
                                  scope.apply$(
                                    scope.showOption,
                                    () => scope.to,
                                  ),
                                  "`.",
                                ]
                              ),
                            apply: () =>
                              scope.func$(
                                "x",
                                (scope) =>
                                  scope.apply$(scope.use, () =>
                                    scope.apply$(scope.toOf, () =>
                                      scope.config)),
                              ),
                          })),
                        scope.apply$(
                          scope.optionalAttrs,
                          () => (scope.operators$.notEqual(scope.toType, null)),
                          () =>
                            scope.attrSet$({
                              type: () => scope.toType,
                            }),
                        ),
                      )),
                    ),
                  config: () =>
                    scope.apply$(scope.mkIf, () => scope.condition, () =>
                      scope.apply$(
                        scope.mkMerge,
                        () => [
                          scope.apply$(
                            scope.optionalAttrs,
                            () =>
                              scope.operators$.hasAttr(
                                scope.options,
                                "warnings",
                              ),
                            () =>
                              scope.attrSet$({
                                warnings: () =>
                                  scope.apply$(
                                    scope.optional,
                                    () => ((scope.warn) &&
                                      (scope.fromOpt["isDefined"])),
                                    () =>
                                      scope.str$(
                                        () => [
                                          "The option `",
                                          scope.apply$(
                                            scope.showOption,
                                            () => scope.from,
                                          ),
                                          "' defined in ",
                                          scope.apply$(
                                            scope.showFiles,
                                            () => scope.fromOpt["files"],
                                          ),
                                          " has been renamed to `",
                                          scope.apply$(
                                            scope.showOption,
                                            () => scope.to,
                                          ),
                                          "'.",
                                        ]
                                      ),
                                  ),
                              }),
                          ),
                          scope.if$(scope.withPriority).then$(() =>
                            scope.apply$(
                              scope.mkAliasAndWrapDefsWithPriority,
                              () =>
                                scope.apply$(scope.setAttrByPath, () =>
                                  scope.to),
                              () => scope.fromOpt,
                            )
                          ).else$(() =>
                            scope.apply$(
                              scope.mkAliasAndWrapDefinitions,
                              () =>
                                scope.apply$(scope.setAttrByPath, () =>
                                  scope.to),
                              () => scope.fromOpt,
                            )
                          ),
                        ],
                      )),
                })
              ))),
        importApply: (scope) =>
          scope.func$(
            "modulePath",
            (scope) =>
              scope.func$("staticArg", (scope) =>
                scope.apply$(scope.lib["setDefaultModuleLocation"], () =>
                  scope.modulePath, () =>
                  scope.apply$(scope.import, () =>
                    scope.modulePath, () =>
                    scope.staticArg))),
          ),
        importJSON: (scope) =>
          scope.func$("file", (scope) =>
            scope.attrSet$({
              _file: () => scope.file,
              config: () =>
                scope.apply$(scope.lib["importJSON"], () => scope.file),
            })),
        importTOML: (scope) =>
          scope.func$("file", (scope) =>
            scope.attrSet$({
              _file: () => scope.file,
              config: () =>
                scope.apply$(scope.lib["importTOML"], () => scope.file),
            })),
        private: (scope) =>
          scope.apply$(scope.mapAttrs, () =>
            scope.func$("k", (scope) =>
              scope.apply$(scope.warn, () =>
                scope.str$(
                  () => [
                    "External use of `lib.modules.",
                    scope.k,
                    "` is deprecated. If your use case isn't covered by non-deprecated functions, we'd like to know more and perhaps support your use case well, instead of providing access to these low level functions. In this case please open an issue in https://github.com/nixos/nixpkgs/issues/.",
                  ]
                ))), () =>
            scope.attrSet$({
              applyModuleArgsIfFunction: () =>
                scope.applyModuleArgsIfFunction,
              dischargeProperties: () =>
                scope.dischargeProperties,
              mergeModules: () => scope.mergeModules,
              "mergeModules'": () => scope["mergeModules'"],
              pushDownProperties: () => scope.pushDownProperties,
              unifyModuleSyntax: () => scope.unifyModuleSyntax,
              collectModules: () => scope.apply$(scope.collectModules, null),
            })),
        messages: (scope) =>
          scope.let$({
            concatMapStringsSep: (scope) =>
              scope.lib["strings"]["concatMapStringsSep"],
            escapeNixString: (scope) =>
              scope.lib["strings"]["escapeNixString"],
            trim: (scope) => scope.lib["strings"]["trim"],
            into_fallback_file_maybe: (scope) =>
              scope.func$(
                "file",
                (scope) =>
                  scope.apply$(
                    scope.optionalString,
                    () => ((scope.operators$.notEqual(scope.file, null)) &&
                      (scope.operators$.notEqual(
                        scope.file,
                        scope.unknownModule,
                      ))),
                    () =>
                      scope.str$(
                        () => [
                          ", while trying to load a module into ",
                          scope.apply$(scope.toString, () => scope.file),
                        ]
                      ),
                  ),
              ),
            into_prefix_maybe: (scope) =>
              scope.func$(
                "prefix",
                (scope) =>
                  scope.apply$(
                    scope.optionalString,
                    () => (scope.operators$.notEqual(scope.prefix, [])),
                    () =>
                      scope.str$(
                        () => [
                          ", while trying to load a module into ",
                          scope.apply$(scope.code, () =>
                            scope.apply$(scope.showOption, () => scope.prefix)),
                        ]
                      ),
                  ),
              ),
            lines: (scope) =>
              scope.apply$(scope.concatMapStringsSep, "\n", () =>
                scope.trim),
            paragraphs: (scope) =>
              scope.apply$(scope.concatMapStringsSep, "\n\n", () => scope.trim),
            optionalMatch: (scope) =>
              scope.func$(
                "cases",
                (scope) =>
                  scope.func$("value", (scope) =>
                    scope.if$(
                      (scope.apply$(scope.isString, () => scope.value)) &&
                      (scope.operators$.hasAttr(scope.cases, scope.value)),
                    ).then$(() => [scope.cases[scope.value]]).else$([])),
              ),
            esc: (scope) =>
              scope.apply$(scope.builtins["fromJSON"], '"\\u001b"'),
            warn: (scope) =>
              scope.func$(
                "s",
                (scope) =>
                  scope.str$(
                    () => [scope.esc, "[1;35m", scope.s, scope.esc, "[0m"]
                  ),
              ),
            good: (scope) =>
              scope.func$(
                "s",
                (scope) =>
                  scope.str$(
                    () => [scope.esc, "[1;32m", scope.s, scope.esc, "[0m"]
                  ),
              ),
            code: (scope) =>
              scope.func$(
                "s",
                (scope) =>
                  scope.str$(
                    () => [scope.esc, "[1m", scope.s, scope.esc, "[0m"]
                  ),
              ),
          }).in$((scope) =>
            scope.attrSet$({
              not_a_module: () =>
                scope.func$({
                  fallbackFile: scope.nixArg$.NoDefault,
                  value: scope.nixArg$.NoDefault,
                  _type: scope.nixArg$.NoDefault,
                  expectedClass: null,
                  prefix: scope.nixArg$.NoDefault,
                }, (scope) =>
                  scope.apply$(
                    scope.paragraphs,
                    () => (scope.operators$.listConcat(
                      [scope.str$(
                        () => [
                          "Expected a module, but found a value of type ",
                          scope.apply$(scope.warn, () =>
                            scope.apply$(
                              scope.escapeNixString,
                              () => scope._type,
                            )),
                          scope.apply$(
                            scope.into_fallback_file_maybe,
                            () => scope.fallbackFile,
                          ),
                          scope.apply$(
                            scope.into_prefix_maybe,
                            () => scope.prefix,
                          ),
                          ".\nA module is typically loaded by adding it to the ",
                          scope.apply$(scope.code, "imports = [ ... ];"),
                          " attribute of an existing module, or in the ",
                          scope.apply$(scope.code, "modules = [ ... ];"),
                          " argument of various functions.\nPlease make sure that each of the list items is a module, and not a different kind of value.\n",
                        ]
                      )],
                      scope.apply$(scope.optionalMatch, () =>
                        scope.attrSet$({
                          configuration: () =>
                            scope.apply$(
                              scope.trim,
                              "If you really mean to import this configuration, instead please only import the modules that make up the configuration.\nYou may have to create a `let` binding, file or attribute to give yourself access to the relevant modules.\nWhile loading a configuration into the module system is a very sensible idea, it can not be done cleanly in practice.\n",
                            ),
                          flake: () =>
                            scope.apply$(
                              scope.lines,
                              () => (scope.operators$.listConcat(
                                [scope.apply$(scope.trim, () =>
                                  scope.str$(
                                    () => [
                                      "Perhaps you forgot to select an attribute name?\nInstead of, for example,\n    ",
                                      scope.apply$(
                                        scope.warn,
                                        "inputs.someflake",
                                      ),
                                      "\nyou need to write something like\n    ",
                                      scope.apply$(
                                        scope.warn,
                                        "inputs.someflake",
                                      ),
                                      scope.if$(
                                        scope.operators$.equal(
                                          scope.expectedClass,
                                          null,
                                        ),
                                      ).then$(() =>
                                        scope.apply$(
                                          scope.good,
                                          ".modules.someApp.default",
                                        )
                                      ).else$(() =>
                                        scope.apply$(scope.good, () =>
                                          scope.str$(
                                            () => [
                                              ".modules.",
                                              scope.expectedClass,
                                              ".default",
                                            ]
                                          ))
                                      ),
                                      "\n",
                                    ]
                                  ))],
                                scope.apply$(scope.optionalMatch, () =>
                                  scope.attrSet$({
                                    nixos: () =>
                                      scope.apply$(scope.trim, () =>
                                        scope.str$(
                                          () => [
                                            "or\n    ",
                                            scope.apply$(
                                              scope.warn,
                                              "inputs.someflake",
                                            ),
                                            scope.apply$(
                                              scope.good,
                                              ".nixosModules.default",
                                            ),
                                            "\n",
                                          ]
                                        )),
                                    darwin: () =>
                                      scope.apply$(scope.trim, () =>
                                        scope.str$(
                                          () => [
                                            "or\n    ",
                                            scope.apply$(
                                              scope.warn,
                                              "inputs.someflake",
                                            ),
                                            scope.apply$(
                                              scope.good,
                                              ".darwinModules.default",
                                            ),
                                            "\n",
                                          ]
                                        )),
                                  }), () => scope.expectedClass),
                              )),
                            ),
                        }), () => scope._type),
                    )),
                  )),
            })
          ),
      }).in$((scope) =>
        scope.operators$.merge(
          scope.private,
          scope.attrSet$({
            defaultOrderPriority: () => scope.defaultOrderPriority,
            defaultOverridePriority: () => scope.defaultOverridePriority,
            doRename: () => scope.doRename,
            evalModules: () => scope.evalModules,
            evalOptionValue: () => scope.evalOptionValue,
            filterOverrides: () => scope.filterOverrides,
            "filterOverrides'": () => scope["filterOverrides'"],
            fixMergeModules: () => scope.fixMergeModules,
            fixupOptionType: () => scope.fixupOptionType,
            importApply: () => scope.importApply,
            importJSON: () => scope.importJSON,
            importTOML: () => scope.importTOML,
            mapDefinitionValue: () => scope.mapDefinitionValue,
            mergeDefinitions: () => scope.mergeDefinitions,
            mergeAttrDefinitionsWithPrio: () =>
              scope.mergeAttrDefinitionsWithPrio,
            mergeOptionDecls: () => scope.mergeOptionDecls,
            mkAfter: () => scope.mkAfter,
            mkAliasAndWrapDefinitions: () => scope.mkAliasAndWrapDefinitions,
            mkAliasAndWrapDefsWithPriority: () =>
              scope.mkAliasAndWrapDefsWithPriority,
            mkAliasDefinitions: () => scope.mkAliasDefinitions,
            mkAliasIfDef: () => scope.mkAliasIfDef,
            mkAliasOptionModule: () => scope.mkAliasOptionModule,
            mkAliasOptionModuleMD: () => scope.mkAliasOptionModuleMD,
            mkAssert: () => scope.mkAssert,
            mkBefore: () => scope.mkBefore,
            mkChangedOptionModule: () => scope.mkChangedOptionModule,
            mkDefault: () => scope.mkDefault,
            mkDefinition: () => scope.mkDefinition,
            mkDerivedConfig: () => scope.mkDerivedConfig,
            mkFixStrictness: () => scope.mkFixStrictness,
            mkForce: () => scope.mkForce,
            mkIf: () => scope.mkIf,
            mkImageMediaOverride: () => scope.mkImageMediaOverride,
            mkMerge: () => scope.mkMerge,
            mkMergedOptionModule: () => scope.mkMergedOptionModule,
            mkOptionDefault: () => scope.mkOptionDefault,
            mkOrder: () => scope.mkOrder,
            mkOverride: () => scope.mkOverride,
            mkRemovedOptionModule: () => scope.mkRemovedOptionModule,
            mkRenamedOptionModule: () => scope.mkRenamedOptionModule,
            mkRenamedOptionModuleWith: () => scope.mkRenamedOptionModuleWith,
            mkVMOverride: () => scope.mkVMOverride,
            setDefaultModuleLocation: () => scope.setDefaultModuleLocation,
            sortProperties: () => scope.sortProperties,
          }),
        )
      ))
  ),
);
