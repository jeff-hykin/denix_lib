import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./derivations.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        genAttrs: (scope) => scope.lib["genAttrs"],
        isString: (scope) => scope.lib["isString"],
        mapAttrs: (scope) => scope.lib["mapAttrs"],
        removeAttrs: (scope) => scope.lib["removeAttrs"],
        showMaybeAttrPosPre: (scope) =>
          scope.func$("prefix", (scope) =>
            scope.func$("attrName", (scope) =>
              scope.func$("v", (scope) =>
                scope.let$({
                  pos: (scope) =>
                    scope.apply$(
                      scope.builtins["unsafeGetAttrPos"],
                      () => scope.attrName,
                      () => scope.v,
                    ),
                }).in$((scope) =>
                  scope.if$(scope.operators$.equal(scope.pos, null)).then$("")
                    .else$(() =>
                      scope.str$(
                        () => [
                          scope.prefix,
                          scope.pos["file"],
                          ":",
                          scope.apply$(scope.toString, () => scope.pos["line"]),
                          ":",
                          scope.apply$(
                            scope.toString,
                            () => scope.pos["column"],
                          ),
                        ]
                      )
                    )
                )))),
        showMaybePackagePosPre: (scope) =>
          scope.func$("prefix", (scope) =>
            scope.func$("pkg", (scope) =>
              scope.if$(
                (scope.operators$.hasAttrPath(scope.pkg, "meta", "position")) &&
                (scope.apply$(scope.isString, () =>
                  scope.pkg["meta"]["position"])),
              ).then$(() =>
                scope.str$(() => [scope.prefix, scope.pkg["meta"]["position"]])
              ).else$(""))),
      }).in$((scope) =>
        scope.attrSet$({
          addDrvOutputDependencies: () =>
            scope.builtins.addDrvOutputDependencies,
          unsafeDiscardOutputDependency: () =>
            scope.builtins.unsafeDiscardOutputDependency,
          lazyDerivation: () =>
            scope.func$({
              args: scope.nixArg$.AllArgs,
              derivation: scope.nixArg$.NoDefault,
              meta: null,
              passthru: {},
              outputs: ["out"],
            }, (scope) =>
              scope.let$({
                checked: (scope) =>
                  scope.if$(
                    scope.operators$.notEqual(
                      scope.operators$.selectOrDefault(scope.derivation, [
                        "type",
                      ], null),
                      "derivation",
                    ),
                  ).then$(() =>
                    scope.apply$(
                      scope.throw,
                      "lazyDerivation: input must be a derivation.",
                    )
                  ).elseIf$(() =>
                    scope.operators$.notEqual(
                      scope.derivation["outputs"],
                      scope.outputs,
                    )
                  ).then$(() =>
                    scope.apply$(scope.throw, () =>
                      scope.str$(
                        () => [
                          "lib.lazyDerivation: The derivation ",
                          scope.operators$.selectOrDefault(scope.derivation, [
                            "name",
                          ], "<unknown>"),
                          " has outputs that don't match the assumed outputs.\n\nAssumed outputs passed to lazyDerivation",
                          scope.apply$(
                            scope.showMaybeAttrPosPre,
                            ",\n    at ",
                            "outputs",
                            () => scope.args,
                          ),
                          ":\n    ",
                          scope.apply$(scope.lib["generators"]["toPretty"], {
                            multiline: false,
                          }, () => scope.outputs),
                          ";\n\nActual outputs of the derivation",
                          scope.apply$(
                            scope.showMaybePackagePosPre,
                            ",\n    defined at ",
                            () => scope.derivation,
                          ),
                          ":\n    ",
                          scope.apply$(scope.lib["generators"]["toPretty"], {
                            multiline: false,
                          }, () => scope.derivation["outputs"]),
                          "\n\nIf the outputs are known ahead of evaluating the derivation,\nthen update the lazyDerivation call to match the actual outputs, in the same order.\nIf lazyDerivation is passed a literal value, just change it to the actual outputs.\nAs a result it will work as before / as intended.\n\nOtherwise, when the outputs are dynamic and can't be known ahead of time, it won't\nbe possible to add laziness, but lib.lazyDerivation may still be useful for trimming\nthe attributes.\nIf you want to keep trimming the attributes, make sure that the package is in a\nvariable (don't evaluate it twice!) and pass the variable and its outputs attribute\nto lib.lazyDerivation. This largely defeats laziness, but keeps the trimming.\nIf none of the above works for you, replace the lib.lazyDerivation call by the\nexpression in the derivation argument.\n",
                        ]
                      ))
                  ).else$(() => scope.derivation),
              }).in$((scope) =>
                scope.operators$.merge(
                  scope.attrSet$({
                    type: "derivation",
                    outPath: () => scope.checked.outPath,
                    outputName: () => scope.checked.outputName,
                    drvPath: () =>
                      scope.checked.drvPath,
                    name: () =>
                      scope.checked.name,
                    system: () =>
                      scope.checked.system,
                    outputs: () =>
                      scope.outputs,
                    meta: () =>
                      scope.operators$.selectOrDefault(
                        scope.args,
                        ["meta"],
                        () => scope.checked["meta"],
                      ),
                  }),
                  scope.operators$.merge(
                    scope.apply$(scope.genAttrs, () =>
                      scope.outputs, () =>
                      scope.func$("outputName", (scope) =>
                        scope.checked[scope.outputName])),
                    scope.passthru,
                  ),
                )
              )),
          optionalDrvAttr: () =>
            scope.func$(
              "cond",
              (scope) =>
                scope.func$("value", (scope) =>
                  scope.if$(scope.cond).then$(() =>
                    scope.value
                  ).else$(null)),
            ),
          warnOnInstantiate: () =>
            scope.func$("msg", (scope) =>
              scope.func$("drv", (scope) =>
                scope.let$({
                  drvToWrap: (scope) =>
                    scope.apply$(scope.removeAttrs, () => scope.drv, [
                      "meta",
                      "name",
                      "type",
                      "outputName",
                    ]),
                }).in$((scope) =>
                  scope.operators$.merge(
                    scope.drv,
                    scope.operators$.merge(
                      scope.apply$(
                        scope.mapAttrs,
                        () =>
                          scope.func$(
                            "_",
                            (scope) =>
                              scope.apply$(scope.lib["warn"], () => scope.msg),
                          ),
                        () => scope.drvToWrap,
                      ),
                      scope.if$(
                        (scope.operators$.hasAttr(
                          scope.drv,
                          "overrideAttrs",
                        )) && (scope.apply$(scope.builtins["isFunction"], () =>
                          scope.drv["overrideAttrs"])),
                      ).then$(() =>
                        scope.attrSet$({
                          overrideAttrs: () =>
                            scope.func$("x", (scope) =>
                              scope.apply$(
                                scope.lib["derivations"]["warnOnInstantiate"],
                                () => scope.msg,
                                () =>
                                  scope.apply$(
                                    scope.drv["overrideAttrs"],
                                    () => scope.x,
                                  ),
                              )),
                        })
                      ).else$({}),
                    ),
                  )
                ))),
        })
      ))
  ),
);
