import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./customisation.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        intersectAttrs: (scope) => scope.builtins["intersectAttrs"],
        unsafeGetAttrPos: (scope) => scope.builtins["unsafeGetAttrPos"],
        all: (scope) => scope.lib["all"],
        attrValues: (scope) => scope.lib["attrValues"],
        functionArgs: (scope) => scope.lib["functionArgs"],
        isFunction: (scope) => scope.lib["isFunction"],
        mirrorFunctionArgs: (scope) => scope.lib["mirrorFunctionArgs"],
        isAttrs: (scope) => scope.lib["isAttrs"],
        setFunctionArgs: (scope) => scope.lib["setFunctionArgs"],
        optionalAttrs: (scope) => scope.lib["optionalAttrs"],
        attrNames: (scope) => scope.lib["attrNames"],
        filter: (scope) => scope.lib["filter"],
        elemAt: (scope) => scope.lib["elemAt"],
        concatStringsSep: (scope) => scope.lib["concatStringsSep"],
        sortOn: (scope) => scope.lib["sortOn"],
        take: (scope) => scope.lib["take"],
        length: (scope) => scope.lib["length"],
        head: (scope) => scope.lib["head"],
        pipe: (scope) => scope.lib["pipe"],
        isDerivation: (scope) => scope.lib["isDerivation"],
        listToAttrs: (scope) => scope.lib["listToAttrs"],
        mapAttrs: (scope) => scope.lib["mapAttrs"],
        seq: (scope) => scope.lib["seq"],
        flatten: (scope) => scope.lib["flatten"],
        deepSeq: (scope) => scope.lib["deepSeq"],
        extends: (scope) => scope.lib["extends"],
        id: (scope) => scope.lib["id"],
        levenshtein: (scope) => scope.lib["strings"]["levenshtein"],
        levenshteinAtMost: (scope) => scope.lib["strings"]["levenshteinAtMost"],
      }).in$((scope) =>
        scope.recAttrSet$({
          overrideDerivation: (scope) =>
            scope.func$("drv", (scope) =>
              scope.func$("f", (scope) =>
                scope.apply$(
                  scope.apply$(scope.extendDerivation, () =>
                    scope.apply$(scope.seq, () => scope.drv["drvPath"], true)),
                  () => (scope.operators$.merge(
                    scope.attrSet$({
                      meta: () =>
                        scope.operators$.selectOrDefault(
                          scope.drv,
                          ["meta"],
                          {},
                        ),
                      passthru: () =>
                        scope.operators$.selectOrDefault(scope.drv, [
                          "passthru",
                        ], {}),
                    }),
                    scope.operators$.merge(
                      scope.operators$.selectOrDefault(
                        scope.drv,
                        ["passthru"],
                        {},
                      ),
                      scope.attrSet$({
                        ...scope.deepSet$([
                          scope.if$(
                            scope.operators$.hasAttr(scope.drv, "__spliced"),
                          ).then$("__spliced").else$(null),
                        ], () =>
                          scope.apply$(scope.mapAttrs, () =>
                            scope.func$("_", (scope) =>
                              scope.func$("sDrv", (scope) =>
                                scope.apply$(scope.overrideDerivation, () =>
                                  scope.sDrv, () =>
                                  scope.f))), () =>
                            scope.drv["__spliced"])),
                      }),
                    ),
                  )),
                  () =>
                    scope.apply$(
                      scope.derivation,
                      () => (scope.operators$.merge(
                        scope.drv["drvAttrs"],
                        scope.apply$(scope.f, () => scope.drv),
                      )),
                    ),
                ))),
          makeOverridable: (scope) =>
            scope.func$("f", (scope) =>
              scope.let$({
                mirrorArgs: (scope) =>
                  scope.apply$(scope.mirrorFunctionArgs, () =>
                    scope.f),
                "f'": (scope) =>
                  scope.func$("origArgs", (scope) =>
                    scope.let$({
                      result: (scope) =>
                        scope.apply$(scope.f, () =>
                          scope.origArgs),
                      overrideArgs: (scope) =>
                        scope.apply$(scope.mirrorArgs, () =>
                          scope.func$("newArgs", (scope) =>
                            scope.apply$(
                              scope.makeOverridable,
                              () => scope.f,
                              () => (scope.operators$.merge(
                                scope.origArgs,
                                scope.if$(
                                  scope.apply$(scope.isFunction, () =>
                                    scope.newArgs),
                                ).then$(() =>
                                  scope.apply$(
                                    scope.newArgs,
                                    () => scope.origArgs,
                                  )
                                ).else$(() => scope.newArgs),
                              )),
                            ))),
                    }).in$((scope) =>
                      scope.if$(scope.apply$(scope.isAttrs, () => scope.result))
                        .then$(() =>
                          scope.operators$.merge(
                            scope.result,
                            scope.attrSet$({
                              override: () => scope.overrideArgs,
                              overrideDerivation: () =>
                                scope.func$("fdrv", (scope) =>
                                  scope.apply$(scope.makeOverridable, () =>
                                    scope.apply$(scope.mirrorArgs, () =>
                                      scope.func$("args", (scope) =>
                                        scope.apply$(
                                          scope.overrideDerivation,
                                          () =>
                                            scope.apply$(scope.f, () =>
                                              scope.args),
                                          () => scope.fdrv,
                                        ))), () => scope.origArgs)),
                              ...scope.deepSet$([
                                scope.if$(
                                  scope.operators$.hasAttr(
                                    scope.result,
                                    "overrideAttrs",
                                  ),
                                ).then$("overrideAttrs").else$(null),
                              ], () =>
                                scope.func$("fdrv", (scope) =>
                                  scope.apply$(scope.makeOverridable, () =>
                                    scope.apply$(scope.mirrorArgs, () =>
                                      scope.func$("args", (scope) =>
                                        scope.apply$(
                                          scope.apply$(scope.f, () =>
                                            scope.args)["overrideAttrs"],
                                          () =>
                                            scope.fdrv,
                                        ))), () => scope.origArgs))),
                            }),
                          )
                        ).elseIf$(() =>
                          scope.apply$(scope.isFunction, () => scope.result)
                        ).then$(() =>
                          scope.operators$.merge(
                            scope.apply$(scope.setFunctionArgs, () =>
                              scope.result, () =>
                              scope.apply$(scope.functionArgs, () =>
                                scope.result)),
                            scope.attrSet$({
                              override: () =>
                                scope.overrideArgs,
                            }),
                          )
                        ).else$(() => scope.result)
                    )),
              }).in$((scope) =>
                scope.if$(scope.apply$(scope.isAttrs, () => scope.f)).then$(
                  () =>
                    scope.operators$.merge(
                      scope.f,
                      scope.operators$.merge(
                        scope.apply$(scope.mirrorArgs, () => scope["f'"]),
                        scope.attrSet$({
                          ...scope.deepSet$([
                            scope.if$(
                              scope.operators$.hasAttr(scope.f, "override"),
                            ).then$("override").else$(null),
                          ], () =>
                            scope.func$("fdrv", (scope) =>
                              scope.apply$(scope.makeOverridable, () =>
                                scope.apply$(scope.f["override"], () =>
                                  scope.fdrv)))),
                        }),
                      ),
                    )
                ).else$(() => scope.apply$(scope.mirrorArgs, () => scope["f'"]))
              )),
          callPackageWith: (scope) =>
            scope.let$({
              makeErrorMessage: (scope) =>
                scope.func$("autoArgs", (scope) =>
                  scope.func$("fn", (scope) =>
                    scope.func$("args", (scope) =>
                      scope.func$("fargs", (scope) =>
                        scope.func$("unpassedArgs", (scope) =>
                          scope.let$({
                            arg: (scope) =>
                              scope.apply$(scope.head, () =>
                                scope.apply$(
                                  scope.filter,
                                  () =>
                                    scope.func$("name", (scope) =>
                                      scope.operators$.negate(
                                        scope.fargs[scope.name],
                                      )),
                                  () =>
                                    scope.apply$(scope.attrNames, () =>
                                      scope.unpassedArgs),
                                )),
                            getSuggestions: (scope) =>
                              scope.func$("arg", (scope) =>
                                scope.apply$(
                                  scope.pipe,
                                  () => (scope.operators$.merge(
                                    scope.autoArgs,
                                    scope.args,
                                  )),
                                  () => [
                                    scope.attrNames,
                                    scope.apply$(scope.filter, () =>
                                      scope.apply$(
                                        scope.levenshteinAtMost,
                                        2n,
                                        () => scope.arg,
                                      )),
                                    scope.apply$(
                                      scope.sortOn,
                                      () =>
                                        scope.apply$(scope.levenshtein, () =>
                                          scope.arg),
                                    ),
                                    scope.apply$(scope.take, 3n),
                                    scope.apply$(
                                      scope.map,
                                      () =>
                                        scope.func$("x", (scope) =>
                                          scope.operators$.add(
                                            scope.operators$.add('"', scope.x),
                                            '"',
                                          )),
                                    ),
                                  ],
                                )),
                            prettySuggestions: (scope) =>
                              scope.func$("suggestions", (scope) =>
                                scope.if$(
                                  scope.operators$.equal(scope.suggestions, []),
                                ).then$("").elseIf$(() =>
                                  scope.operators$.equal(
                                    scope.apply$(scope.length, () =>
                                      scope.suggestions),
                                    1n,
                                  )
                                ).then$(() =>
                                  scope.str$(
                                    () => [
                                      ", did you mean ",
                                      scope.apply$(
                                        scope.elemAt,
                                        () => scope.suggestions,
                                        0n,
                                      ),
                                      "?",
                                    ]
                                  )
                                ).else$(() =>
                                  scope.str$(
                                    () => [
                                      ", did you mean ",
                                      scope.apply$(
                                        scope.concatStringsSep,
                                        ", ",
                                        () =>
                                          scope.apply$(
                                            scope.lib["init"],
                                            () => scope.suggestions,
                                          ),
                                      ),
                                      " or ",
                                      scope.apply$(
                                        scope.lib["last"],
                                        () => scope.suggestions,
                                      ),
                                      "?",
                                    ]
                                  )
                                )),
                            loc: (scope) =>
                              scope.apply$(
                                scope.unsafeGetAttrPos,
                                () => scope.arg,
                                () => scope.fargs,
                              ),
                            "loc'": (scope) =>
                              scope.if$(
                                scope.operators$.notEqual(scope.loc, null),
                              ).then$(() =>
                                scope.operators$.add(
                                  scope.operators$.add(scope.loc["file"], ":"),
                                  scope.apply$(
                                    scope.toString,
                                    () => scope.loc["line"],
                                  ),
                                )
                              ).else$("<unknown location>"),
                          }).in$((scope) =>
                            scope.str$(
                              () => [
                                'lib.customisation.callPackageWith: Function called without required argument "',
                                scope.arg,
                                '" at ',
                                scope["loc'"],
                                scope.apply$(
                                  scope.prettySuggestions,
                                  () =>
                                    scope.apply$(scope.getSuggestions, () =>
                                      scope.arg),
                                ),
                              ]
                            )
                          )))))),
            }).in$((scope) =>
              scope.func$("autoArgs", (scope) =>
                scope.func$("fn", (scope) =>
                  scope.func$("args", (scope) =>
                    scope.let$({
                      f: (scope) =>
                        scope.if$(
                          scope.apply$(scope.isFunction, () => scope.fn),
                        ).then$(() => scope.fn).else$(() =>
                          scope.apply$(scope.import, () => scope.fn)
                        ),
                      fargs: (scope) =>
                        scope.apply$(scope.functionArgs, () => scope.f),
                      allArgs: (scope) =>
                        scope.operators$.merge(
                          scope.apply$(scope.intersectAttrs, () =>
                            scope.fargs, () =>
                            scope.autoArgs),
                          scope.args,
                        ),
                      unpassedArgs: (scope) =>
                        scope.apply$(
                          scope.removeAttrs,
                          () => scope.fargs,
                          () =>
                            scope.apply$(scope.attrNames, () => scope.allArgs),
                        ),
                    }).in$((scope) =>
                      scope.if$(
                        (scope.operators$.equal(scope.unpassedArgs, {})) ||
                        (scope.apply$(scope.all, () =>
                          scope.func$("value", (scope) =>
                            scope.value), () =>
                          scope.apply$(scope.attrValues, () =>
                            scope.unpassedArgs))),
                      ).then$(() =>
                        scope.apply$(
                          scope.makeOverridable,
                          () => scope.f,
                          () => scope.allArgs,
                        )
                      ).else$(() =>
                        scope.apply$(
                          scope.abort,
                          () =>
                            scope.apply$(scope.makeErrorMessage, () =>
                              scope.autoArgs, () =>
                              scope.fn, () =>
                              scope.args, () =>
                              scope.fargs, () =>
                              scope.unpassedArgs),
                        )
                      )
                    ))))
            ),
          callPackagesWith: (scope) =>
            scope.func$("autoArgs", (scope) =>
              scope.func$("fn", (scope) =>
                scope.func$("args", (scope) =>
                  scope.let$({
                    f: (scope) =>
                      scope.if$(scope.apply$(scope.isFunction, () => scope.fn))
                        .then$(() => scope.fn).else$(() =>
                          scope.apply$(scope.import, () => scope.fn)
                        ),
                    auto: (scope) =>
                      scope.apply$(
                        scope.intersectAttrs,
                        () => scope.apply$(scope.functionArgs, () => scope.f),
                        () => scope.autoArgs,
                      ),
                    mirrorArgs: (scope) =>
                      scope.apply$(scope.mirrorFunctionArgs, () => scope.f),
                    origArgs: (scope) =>
                      scope.operators$.merge(scope.auto, scope.args),
                    pkgs: (scope) =>
                      scope.apply$(scope.f, () => scope.origArgs),
                    mkAttrOverridable: (scope) =>
                      scope.func$(
                        "name",
                        (scope) =>
                          scope.func$("_", (scope) =>
                            scope.apply$(scope.makeOverridable, () =>
                              scope.apply$(scope.mirrorArgs, () =>
                                scope.func$("newArgs", (scope) =>
                                  scope.apply$(scope.f, () =>
                                    scope.newArgs)[scope.name])), () =>
                              scope.origArgs)),
                      ),
                  }).in$((scope) =>
                    scope.if$(
                      scope.apply$(scope.isDerivation, () => scope.pkgs),
                    ).then$(() =>
                      scope.apply$(
                        scope.throw,
                        () => (scope.operators$.add(
                          scope.operators$.add(
                            "function `callPackages` was called on a *single* derivation ",
                            scope.str$(
                              () => [
                                '"',
                                scope.operators$.selectOrDefault(scope.pkgs, [
                                  "name",
                                ], "<unknown-name>"),
                                '";',
                              ]
                            ),
                          ),
                          " did you mean to use `callPackage` instead?",
                        )),
                      )
                    ).else$(() =>
                      scope.apply$(
                        scope.mapAttrs,
                        () => scope.mkAttrOverridable,
                        () => scope.pkgs,
                      )
                    )
                  )))),
          extendDerivation: (scope) =>
            scope.func$("condition", (scope) =>
              scope.func$("passthru", (scope) =>
                scope.func$("drv", (scope) =>
                  scope.let$({
                    commonAttrs: (scope) =>
                      scope.operators$.merge(
                        scope.drv,
                        scope.operators$.merge(
                          scope.apply$(
                            scope.listToAttrs,
                            () => (scope.operators$.listConcat(
                              scope.outputsList,
                              [scope.attrSet$({
                                name: "all",
                                value: () =>
                                  scope.apply$(scope.map, () =>
                                    scope.func$(
                                      "x",
                                      (scope) => scope.x["value"],
                                    ), () => scope.outputsList),
                              })],
                            )),
                          ),
                          scope.operators$.merge(
                            scope.passthru,
                            scope.attrSet$({
                              drvPath: () =>
                                ((_cond) => {
                                  if (!_cond) {
                                    throw new Error(
                                      "assertion failed: " + "condition",
                                    );
                                  }
                                  return scope.drv["drvPath"];
                                })(scope.condition),
                              outPath: () =>
                                ((_cond) => {
                                  if (!_cond) {
                                    throw new Error(
                                      "assertion failed: " + "condition",
                                    );
                                  }
                                  return scope.drv["outPath"];
                                })(scope.condition),
                            }),
                          ),
                        ),
                      ),
                    outputsList: (scope) =>
                      scope.apply$(
                        scope.map,
                        () =>
                          scope.func$("outputName", (scope) =>
                            scope.attrSet$({
                              name: () => scope.outputName,
                              value: () =>
                                scope.operators$.merge(
                                  scope.commonAttrs,
                                  scope.attrSet$({
                                    type: () =>
                                      scope.drv[scope.outputName].type,
                                    outputName: () =>
                                      scope.drv[scope.outputName].outputName,
                                    outputSpecified: true,
                                    drvPath: () =>
                                      ((_cond) => {
                                        if (!_cond) {
                                          throw new Error(
                                            "assertion failed: " + "condition",
                                          );
                                        }
                                        return scope
                                          .drv[scope.outputName]["drvPath"];
                                      })(scope.condition),
                                    outPath: () =>
                                      ((_cond) => {
                                        if (!_cond) {
                                          throw new Error(
                                            "assertion failed: " + "condition",
                                          );
                                        }
                                        return scope
                                          .drv[scope.outputName]["outPath"];
                                      })(scope.condition),
                                    ...scope.deepSet$([
                                      scope.if$(
                                        scope.operators$.hasAttr(
                                          scope.passthru,
                                          "overrideAttrs",
                                        ),
                                      ).then$("overrideAttrs").else$(null),
                                    ], () =>
                                      scope.func$("f", (scope) =>
                                        scope.apply$(
                                          scope.passthru["overrideAttrs"],
                                          () => scope.f,
                                        )[scope.outputName])),
                                  }),
                                ),
                            })),
                        () =>
                          scope.operators$.selectOrDefault(scope.drv, [
                            "outputs",
                          ], ["out"]),
                      ),
                  }).in$((scope) => scope.commonAttrs)))),
          hydraJob: (scope) =>
            scope.func$("drv", (scope) =>
              scope.let$({
                outputs: (scope) =>
                  scope.operators$.selectOrDefault(scope.drv, ["outputs"], [
                    "out",
                  ]),
                commonAttrs: (scope) =>
                  scope.operators$.merge(
                    scope.attrSet$({
                      name: () => scope.drv.name,
                      system: () => scope.drv.system,
                      meta: () => scope.drv.meta,
                      outputs: () => scope.outputs,
                    }),
                    scope.operators$.merge(
                      scope.apply$(scope.optionalAttrs, () =>
                        scope.operators$.selectOrDefault(scope.drv, [
                          "_hydraAggregate",
                        ], false), () =>
                        scope.attrSet$({
                          _hydraAggregate: true,
                          constituents: () =>
                            scope.apply$(scope.map, () => scope.hydraJob, () =>
                              scope.apply$(scope.flatten, () =>
                                scope.drv["constituents"])),
                        })),
                      scope.apply$(scope.listToAttrs, () => scope.outputsList),
                    ),
                  ),
                makeOutput: (scope) =>
                  scope.func$("outputName", (scope) =>
                    scope.let$({
                      output: (scope) => scope.drv[scope.outputName],
                    }).in$((scope) =>
                      scope.attrSet$({
                        name: () => scope.outputName,
                        value: () =>
                          scope.operators$.merge(
                            scope.commonAttrs,
                            scope.attrSet$({
                              outPath: () => scope.output["outPath"],
                              drvPath: () => scope.output["drvPath"],
                              type: "derivation",
                              outputName: () => scope.outputName,
                            }),
                          ),
                      })
                    )),
                outputsList: (scope) =>
                  scope.apply$(
                    scope.map,
                    () => scope.makeOutput,
                    () => scope.outputs,
                  ),
                "drv'": (scope) =>
                  scope.apply$(scope.head, () => scope.outputsList)["value"],
              }).in$((scope) =>
                scope.if$(scope.operators$.equal(scope.drv, null)).then$(null)
                  .else$(() =>
                    scope.apply$(
                      scope.deepSeq,
                      () => scope["drv'"],
                      () => scope["drv'"],
                    )
                  )
              )),
          makeScope: (scope) =>
            scope.func$("newScope", (scope) =>
              scope.func$("f", (scope) =>
                scope.let$({
                  self: (scope) =>
                    scope.operators$.merge(
                      scope.attrSet$({
                        callPackage: () =>
                          scope.apply$(scope.self["newScope"], {}),
                      }),
                      scope.operators$.merge(
                        scope.apply$(scope.f, () => scope.self),
                        scope.attrSet$({
                          newScope: () =>
                            scope.func$("scope", (scope) =>
                              scope.apply$(
                                scope.newScope,
                                () => (scope.operators$.merge(
                                  scope.self,
                                  scope.scope,
                                )),
                              )),
                          overrideScope: () =>
                            scope.func$("g", (scope) =>
                              scope.apply$(
                                scope.makeScope,
                                () => scope.newScope,
                                () =>
                                  scope.apply$(
                                    scope.extends,
                                    () => scope.g,
                                    () => scope.f,
                                  ),
                              )),
                          packages: () => scope.f,
                        }),
                      ),
                    ),
                }).in$((scope) => scope.self))),
          makeScopeWithSplicing: (scope) =>
            scope.func$("splicePackages", (scope) =>
              scope.func$("newScope", (scope) =>
                scope.func$("otherSplices", (scope) =>
                  scope.func$("keep", (scope) =>
                    scope.func$("extra", (scope) =>
                      scope.func$("f", (scope) =>
                        scope.apply$(
                          scope["makeScopeWithSplicing'"],
                          () =>
                            scope.attrSet$({
                              splicePackages: () => scope.splicePackages,
                              newScope: () => scope.newScope,
                            }),
                          () =>
                            scope.attrSet$({
                              otherSplices: () => scope.otherSplices,
                              keep: () => scope.keep,
                              extra: () => scope.extra,
                              f: () => scope.f,
                            }),
                        ))))))),
          "makeScopeWithSplicing'": (scope) =>
            scope.func$({
              splicePackages: scope.nixArg$.NoDefault,
              newScope: scope.nixArg$.NoDefault,
            }, (scope) =>
              scope.func$({
                otherSplices: scope.nixArg$.NoDefault,
                keep: (scope) => scope.func$("_self", (scope) => ({})),
                extra: (scope) => scope.func$("_spliced0", (scope) => ({})),
                f: scope.nixArg$.NoDefault,
              }, (scope) =>
                scope.let$({
                  spliced0: (scope) =>
                    scope.apply$(scope.splicePackages, () =>
                      scope.attrSet$({
                        pkgsBuildBuild: () =>
                          scope.otherSplices["selfBuildBuild"],
                        pkgsBuildHost: () =>
                          scope.otherSplices["selfBuildHost"],
                        pkgsBuildTarget: () =>
                          scope.otherSplices["selfBuildTarget"],
                        pkgsHostHost: () => scope.otherSplices["selfHostHost"],
                        pkgsHostTarget: () => scope.self,
                        pkgsTargetTarget: () =>
                          scope.otherSplices["selfTargetTarget"],
                      })),
                  spliced: (scope) =>
                    scope.operators$.merge(
                      scope.apply$(scope.extra, () => scope.spliced0),
                      scope.operators$.merge(
                        scope.spliced0,
                        scope.apply$(scope.keep, () => scope.self),
                      ),
                    ),
                  self: (scope) =>
                    scope.operators$.merge(
                      scope.apply$(scope.f, () => scope.self),
                      scope.attrSet$({
                        newScope: () =>
                          scope.func$("scope", (scope) =>
                            scope.apply$(
                              scope.newScope,
                              () => (scope.operators$.merge(
                                scope.spliced,
                                scope.scope,
                              )),
                            )),
                        callPackage: () =>
                          scope.apply$(scope.newScope, () =>
                            scope.spliced),
                        overrideScope: () =>
                          scope.func$("g", (scope) =>
                            scope.apply$(scope["makeScopeWithSplicing'"], () =>
                              scope.attrSet$({
                                splicePackages: () =>
                                  scope.splicePackages,
                                newScope: () =>
                                  scope.newScope,
                              }), () =>
                              scope.attrSet$({
                                otherSplices: () =>
                                  scope.otherSplices,
                                keep: () =>
                                  scope.keep,
                                extra: () =>
                                  scope.extra,
                                f: () =>
                                  scope.apply$(scope.extends, () =>
                                    scope.g, () =>
                                    scope.f),
                              }))),
                        packages: () =>
                          scope.f,
                      }),
                    ),
                }).in$((scope) => scope.self))),
          extendMkDerivation: (scope) =>
            scope.func$({
              constructDrv: scope.nixArg$.NoDefault,
              excludeDrvArgNames: [],
              excludeFunctionArgNames: [],
              extendDrvArgs: scope.nixArg$.NoDefault,
              inheritFunctionArgs: true,
              transformDrv: (scope) => scope.id,
            }, (scope) =>
              scope.attrSet$({
                __functor: () =>
                  scope.func$("self", (scope) =>
                    scope.func$("fpargs", (scope) =>
                      scope.apply$(scope.transformDrv, () =>
                        scope.apply$(scope.constructDrv, () =>
                          scope.func$("final", (scope) =>
                            scope.let$({
                              previous: (scope) =>
                                scope.if$(scope.apply$(scope.isFunction, () =>
                                  scope.fpargs)).then$(() =>
                                    scope.apply$(scope.fpargs, () =>
                                      scope.final)
                                  ).else$(() =>
                                    scope.fpargs
                                  ),
                            }).in$((scope) =>
                              scope.operators$.merge(
                                scope.apply$(scope.removeAttrs, () =>
                                  scope.previous, () =>
                                  scope.excludeDrvArgNames),
                                scope.apply$(scope.extendDrvArgs, () =>
                                  scope.final, () =>
                                  scope.previous),
                              )
                            )))))),
                __functionArgs: () =>
                  scope.apply$(
                    scope.removeAttrs,
                    () => (scope.operators$.merge(
                      scope.apply$(scope.optionalAttrs, () =>
                        scope.inheritFunctionArgs, () =>
                        scope.apply$(scope.removeAttrs, () =>
                          scope.apply$(scope.functionArgs, () =>
                            scope.constructDrv), () =>
                          scope.excludeDrvArgNames)),
                      scope.apply$(scope.functionArgs, () =>
                        scope.apply$(scope.extendDrvArgs, {})),
                    )),
                    () => scope.excludeFunctionArgNames,
                  ),
                constructDrv: () => scope.constructDrv,
                excludeDrvArgNames: () => scope.excludeDrvArgNames,
                extendDrvArgs: () => scope.extendDrvArgs,
                transformDrv: () => scope.transformDrv,
              })),
          renameCrossIndexFrom: (scope) =>
            scope.func$(
              "prefix",
              (scope) =>
                scope.func$("x", (scope) =>
                  scope.attrSet$({
                    buildBuild: () =>
                      scope.x[scope.str$(() => [scope.prefix, "BuildBuild"])],
                    buildHost: () =>
                      scope.x[scope.str$(() => [scope.prefix, "BuildHost"])],
                    buildTarget: () =>
                      scope.x[scope.str$(() => [scope.prefix, "BuildTarget"])],
                    hostHost: () =>
                      scope.x[scope.str$(() => [scope.prefix, "HostHost"])],
                    hostTarget: () =>
                      scope.x[scope.str$(() => [scope.prefix, "HostTarget"])],
                    targetTarget: () =>
                      scope.x[scope.str$(() => [scope.prefix, "TargetTarget"])],
                  })),
            ),
          renameCrossIndexTo: (scope) =>
            scope.func$("prefix", (scope) =>
              scope.func$("x", (scope) =>
                scope.attrSet$({
                  ...scope.deepSet$([
                    scope.str$(() => [scope.prefix, "BuildBuild"]),
                  ], () => scope.x["buildBuild"]),
                  ...scope.deepSet$([
                    scope.str$(() => [scope.prefix, "BuildHost"]),
                  ], () => scope.x["buildHost"]),
                  ...scope.deepSet$([
                    scope.str$(() => [scope.prefix, "BuildTarget"]),
                  ], () => scope.x["buildTarget"]),
                  ...scope.deepSet$([
                    scope.str$(() => [scope.prefix, "HostHost"]),
                  ], () => scope.x["hostHost"]),
                  ...scope.deepSet$([
                    scope.str$(() => [scope.prefix, "HostTarget"]),
                  ], () => scope.x["hostTarget"]),
                  ...scope.deepSet$([
                    scope.str$(() => [scope.prefix, "TargetTarget"]),
                  ], () => scope.x["targetTarget"]),
                }))),
          mapCrossIndex: (scope) =>
            scope.func$("f", (scope) =>
              scope.func$({
                buildBuild: scope.nixArg$.NoDefault,
                buildHost: scope.nixArg$.NoDefault,
                buildTarget: scope.nixArg$.NoDefault,
                hostHost: scope.nixArg$.NoDefault,
                hostTarget: scope.nixArg$.NoDefault,
                targetTarget: scope.nixArg$.NoDefault,
              }, (scope) =>
                scope.attrSet$({
                  buildBuild: () =>
                    scope.apply$(scope.f, () => scope.buildBuild),
                  buildHost: () => scope.apply$(scope.f, () => scope.buildHost),
                  buildTarget: () =>
                    scope.apply$(scope.f, () => scope.buildTarget),
                  hostHost: () => scope.apply$(scope.f, () => scope.hostHost),
                  hostTarget: () =>
                    scope.apply$(scope.f, () => scope.hostTarget),
                  targetTarget: () =>
                    scope.apply$(scope.f, () => scope.targetTarget),
                }))),
        })
      ))
  ),
);
