import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";
import _nix_default_6e679886 from "../default.js";

export default nixFile(
  new URL("./misc.nix", import.meta.url).pathname,
  ({ scope }) => (
    /**
  Nix evaluation tests for various lib functions.

  Since these tests are implemented with Nix evaluation,
  error checking is limited to what `builtins.tryEval` can detect,
  which is `throw`'s and `abort`'s, without error messages.

  If you need to test error messages or more complex evaluations, see
  `lib/tests/modules.sh`, `lib/tests/sources.sh`, `lib/tests/filesystem.sh` or
  `lib/tests/debug.sh` as examples.

  To run these tests:

    [nixpkgs]$ nix-instantiate --eval --strict lib/tests/misc.nix

  If the resulting list is empty, all tests passed.
  Alternatively, to run all `lib` tests:

    [nixpkgs]$ nix-build lib/tests/release.nix
    */ scope.let$({
      lib: (scope) => _nix_default_6e679886(scope.runtime$),
      allUnique: (scope) => scope.lib["allUnique"],
      and: (scope) => scope.lib["and"],
      attrNames: (scope) => scope.lib["attrNames"],
      attrsets: (scope) => scope.lib["attrsets"],
      attrsToList: (scope) => scope.lib["attrsToList"],
      bitAnd: (scope) => scope.lib["bitAnd"],
      bitOr: (scope) => scope.lib["bitOr"],
      bitXor: (scope) => scope.lib["bitXor"],
      boolToString: (scope) => scope.lib["boolToString"],
      callPackagesWith: (scope) => scope.lib["callPackagesWith"],
      callPackageWith: (scope) => scope.lib["callPackageWith"],
      cartesianProduct: (scope) => scope.lib["cartesianProduct"],
      cli: (scope) => scope.lib["cli"],
      composeExtensions: (scope) => scope.lib["composeExtensions"],
      composeManyExtensions: (scope) => scope.lib["composeManyExtensions"],
      concatLines: (scope) => scope.lib["concatLines"],
      concatMapAttrs: (scope) => scope.lib["concatMapAttrs"],
      concatMapAttrsStringSep: (scope) => scope.lib["concatMapAttrsStringSep"],
      concatMapStrings: (scope) => scope.lib["concatMapStrings"],
      concatStrings: (scope) => scope.lib["concatStrings"],
      concatStringsSep: (scope) => scope.lib["concatStringsSep"],
      const: (scope) => scope.lib["const"],
      escapeXML: (scope) => scope.lib["escapeXML"],
      evalModules: (scope) => scope.lib["evalModules"],
      extends: (scope) => scope.lib["extends"],
      filter: (scope) => scope.lib["filter"],
      filterAttrs: (scope) => scope.lib["filterAttrs"],
      fix: (scope) => scope.lib["fix"],
      foldAttrs: (scope) => scope.lib["foldAttrs"],
      foldl: (scope) => scope.lib["foldl"],
      "foldl'": (scope) => scope.lib["foldl'"],
      foldlAttrs: (scope) => scope.lib["foldlAttrs"],
      foldr: (scope) => scope.lib["foldr"],
      functionArgs: (scope) => scope.lib["functionArgs"],
      generators: (scope) => scope.lib["generators"],
      genList: (scope) => scope.lib["genList"],
      getExe: (scope) => scope.lib["getExe"],
      "getExe'": (scope) => scope.lib["getExe'"],
      getLicenseFromSpdxIdOr: (scope) => scope.lib["getLicenseFromSpdxIdOr"],
      groupBy: (scope) => scope.lib["groupBy"],
      "groupBy'": (scope) => scope.lib["groupBy'"],
      hasAttrByPath: (scope) => scope.lib["hasAttrByPath"],
      hasInfix: (scope) => scope.lib["hasInfix"],
      id: (scope) => scope.lib["id"],
      ifilter0: (scope) => scope.lib["ifilter0"],
      isStorePath: (scope) => scope.lib["isStorePath"],
      join: (scope) => scope.lib["join"],
      lazyDerivation: (scope) => scope.lib["lazyDerivation"],
      length: (scope) => scope.lib["length"],
      lists: (scope) => scope.lib["lists"],
      listToAttrs: (scope) => scope.lib["listToAttrs"],
      makeExtensible: (scope) => scope.lib["makeExtensible"],
      makeIncludePath: (scope) => scope.lib["makeIncludePath"],
      makeOverridable: (scope) => scope.lib["makeOverridable"],
      mapAttrs: (scope) => scope.lib["mapAttrs"],
      mapAttrsToListRecursive: (scope) => scope.lib["mapAttrsToListRecursive"],
      mapAttrsToListRecursiveCond: (scope) =>
        scope.lib["mapAttrsToListRecursiveCond"],
      mapCartesianProduct: (scope) => scope.lib["mapCartesianProduct"],
      matchAttrs: (scope) => scope.lib["matchAttrs"],
      mergeAttrs: (scope) => scope.lib["mergeAttrs"],
      meta: (scope) => scope.lib["meta"],
      mod: (scope) => scope.lib["mod"],
      nameValuePair: (scope) => scope.lib["nameValuePair"],
      optionalDrvAttr: (scope) => scope.lib["optionalDrvAttr"],
      optionAttrSetToDocList: (scope) => scope.lib["optionAttrSetToDocList"],
      overrideExisting: (scope) => scope.lib["overrideExisting"],
      packagesFromDirectoryRecursive: (scope) =>
        scope.lib["packagesFromDirectoryRecursive"],
      pipe: (scope) => scope.lib["pipe"],
      range: (scope) => scope.lib["range"],
      recursiveUpdateUntil: (scope) => scope.lib["recursiveUpdateUntil"],
      removePrefix: (scope) => scope.lib["removePrefix"],
      replaceString: (scope) => scope.lib["replaceString"],
      replicate: (scope) => scope.lib["replicate"],
      runTests: (scope) => scope.lib["runTests"],
      setFunctionArgs: (scope) => scope.lib["setFunctionArgs"],
      showAttrPath: (scope) => scope.lib["showAttrPath"],
      sort: (scope) => scope.lib["sort"],
      sortOn: (scope) => scope.lib["sortOn"],
      stringLength: (scope) => scope.lib["stringLength"],
      strings: (scope) => scope.lib["strings"],
      stringToCharacters: (scope) => scope.lib["stringToCharacters"],
      systems: (scope) => scope.lib["systems"],
      tail: (scope) => scope.lib["tail"],
      take: (scope) => scope.lib["take"],
      testAllTrue: (scope) => scope.lib["testAllTrue"],
      toBaseDigits: (scope) => scope.lib["toBaseDigits"],
      toExtension: (scope) => scope.lib["toExtension"],
      toHexString: (scope) => scope.lib["toHexString"],
      fromHexString: (scope) => scope.lib["fromHexString"],
      toInt: (scope) => scope.lib["toInt"],
      toIntBase10: (scope) => scope.lib["toIntBase10"],
      toShellVars: (scope) => scope.lib["toShellVars"],
      types: (scope) => scope.lib["types"],
      uniqueStrings: (scope) => scope.lib["uniqueStrings"],
      updateManyAttrsByPath: (scope) => scope.lib["updateManyAttrsByPath"],
      versions: (scope) => scope.lib["versions"],
      xor: (scope) => scope.lib["xor"],
      testingThrow: (scope) =>
        scope.func$("expr", (scope) =>
          scope.attrSet$({
            expr: () =>
              scope.apply$(scope.builtins["tryEval"], () =>
                scope.apply$(scope.builtins["seq"], () =>
                  scope.expr, "didn't throw")),
            expected: { success: false, value: false },
          })),
      testingEval: (scope) =>
        scope.func$("expr", (scope) =>
          scope.attrSet$({
            expr: () =>
              scope.apply$(scope.builtins["tryEval"], () =>
                scope.expr)["success"],
            expected: true,
          })),
      testSanitizeDerivationName: (scope) =>
        scope.func$({
          name: scope.nixArg$.NoDefault,
          expected: scope.nixArg$.NoDefault,
        }, (scope) =>
          scope.let$({
            drv: (scope) =>
              scope.apply$(scope.derivation, () =>
                scope.attrSet$({
                  name: () =>
                    scope.apply$(scope.strings["sanitizeDerivationName"], () =>
                      scope.name),
                  builder: "x",
                  system: "x",
                })),
          }).in$((scope) =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.builtins["seq"], () =>
                  scope.drv["drvPath"], () =>
                  scope.drv["name"]),
              expected: () =>
                scope.expected,
            })
          )),
      dummyDerivation: (scope) =>
        scope.apply$(scope.derivation, {
          name: "name",
          builder: "builder",
          system: "system",
        }),
    }).in$((scope) =>
      scope.apply$(scope.runTests, () =>
        scope.attrSet$({
          testFunctionArgsMakeOverridable: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.functionArgs, () =>
                  scope.apply$(scope.makeOverridable, () =>
                    scope.func$({
                      a: scope.nixArg$.NoDefault,
                      b: scope.nixArg$.NoDefault,
                      c: null,
                    }, (scope) => ({})))),
              expected: { a: false, b: false, c: true },
            }),
          testFunctionArgsMakeOverridableOverride: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.functionArgs, () =>
                  scope.apply$(scope.makeOverridable, () =>
                    scope.func$({
                      a: scope.nixArg$.NoDefault,
                      b: scope.nixArg$.NoDefault,
                      c: null,
                    }, (scope) => ({})), { a: 1n, b: 2n })["override"]),
              expected: { a: false, b: false, c: true },
            }),
          testOverridePreserveFunctionMetadata: () =>
            scope.let$({
              toCallableAttrs: (scope) =>
                scope.func$("f", (scope) =>
                  scope.apply$(scope.setFunctionArgs, () =>
                    scope.f, () =>
                    scope.apply$(scope.functionArgs, () =>
                      scope.f))),
              constructDefinition: (scope) =>
                scope.func$({ a: 3n }, (scope) =>
                  scope.operators$.merge(
                    scope.apply$(scope.toCallableAttrs, () =>
                      scope.func$({ b: 5n }, (scope) =>
                        scope.attrSet$({
                          a: () => scope.a,
                          b: () =>
                            scope.b,
                        }))),
                    scope.attrSet$({
                      a: () => scope.a,
                      c: 7n,
                    }),
                  )),
              construct0: (scope) =>
                scope.apply$(scope.makeOverridable, () =>
                  scope.constructDefinition, {}),
              construct1: (scope) =>
                scope.apply$(scope.makeOverridable, () =>
                  scope.construct0),
              construct0p: (scope) =>
                scope.apply$(scope.construct0["override"], { a: 11n }),
              construct1p: (scope) =>
                scope.apply$(scope.construct1["override"], { a: 11n }),
            }).in$((scope) =>
              scope.attrSet$({
                expr: () =>
                  scope.attrSet$({
                    "construct-metadata": () =>
                      scope.attrSet$({
                        a: () =>
                          scope.construct1.a,
                        c: () =>
                          scope.construct1.c,
                      }),
                    "construct-overridden-metadata": () =>
                      scope.attrSet$({
                        v: () =>
                          scope.construct0p["a"],
                        a: () =>
                          scope.construct1p.a,
                        c: () =>
                          scope.construct1p.c,
                      }),
                    "construct-overridden-result-overrider": () =>
                      scope.attrSet$({
                        "result-overriders-exist": () =>
                          scope.apply$(scope.mapAttrs, () =>
                            scope.func$("_", (scope) =>
                              scope.func$("f", (scope) =>
                                scope.operators$.hasAttr(
                                  scope.apply$(scope.f, {}),
                                  "override",
                                ))), () =>
                            scope.attrSet$({
                              construct1: () =>
                                scope.construct1,
                              construct1p: () => scope.construct1p,
                            })),
                        "result-overrider-functionality": () =>
                          scope.attrSet$({
                            overridden: () =>
                              scope.attrSet$({
                                a: () =>
                                  scope.apply$(
                                    scope.apply$(
                                      scope.construct1p,
                                      {},
                                    )["override"],
                                    { b: 13n },
                                  ).a,
                                b: () =>
                                  scope.apply$(
                                    scope.apply$(
                                      scope.construct1p,
                                      {},
                                    )["override"],
                                    { b: 13n },
                                  ).b,
                              }),
                            direct: () =>
                              scope.attrSet$({
                                a: () =>
                                  scope.apply$(scope.construct1p, { b: 13n }).a,
                                b: () =>
                                  scope.apply$(scope.construct1p, { b: 13n }).b,
                              }),
                            v: () =>
                              scope.attrSet$({
                                a: () =>
                                  scope.apply$(scope.construct0p, { b: 13n }).a,
                                b: () =>
                                  scope.apply$(scope.construct0p, { b: 13n }).b,
                              }),
                          }),
                      }),
                  }),
                expected: () =>
                  scope.attrSet$({
                    "construct-metadata": () =>
                      scope.attrSet$({
                        a: () => scope.construct0.a,
                        c: () => scope.construct0.c,
                      }),
                    "construct-overridden-metadata": () =>
                      scope.attrSet$({
                        v: 11n,
                        a: () => scope.construct0p.a,
                        c: () => scope.construct0p.c,
                      }),
                    "construct-overridden-result-overrider": () =>
                      scope.attrSet$({
                        "result-overriders-exist": {
                          construct1: true,
                          construct1p: true,
                        },
                        "result-overrider-functionality": () =>
                          scope.attrSet$({
                            overridden: () =>
                              scope.attrSet$({
                                a: () =>
                                  scope.apply$(scope.construct0p, { b: 13n }).a,
                                b: () =>
                                  scope.apply$(scope.construct0p, { b: 13n }).b,
                              }),
                            direct: () =>
                              scope.attrSet$({
                                a: () =>
                                  scope.apply$(scope.construct0p, { b: 13n }).a,
                                b: () =>
                                  scope.apply$(scope.construct0p, { b: 13n }).b,
                              }),
                            v: { a: 11n, b: 13n },
                          }),
                      }),
                  }),
              })
            ),
          testCallPackageWithOverridePreservesArguments: () =>
            scope.let$({
              f: (scope) =>
                scope.func$(
                  { a: 0n, b: scope.nixArg$.NoDefault },
                  (scope) => ({}),
                ),
              "f'": (scope) =>
                scope.apply$(scope.callPackageWith, { a: 1n, b: 2n }, () =>
                  scope.f, {}),
            }).in$((scope) =>
              scope.attrSet$({
                expr: () =>
                  scope.apply$(scope.functionArgs, () =>
                    scope["f'"]["override"]),
                expected: () =>
                  scope.apply$(scope.functionArgs, () =>
                    scope.f),
              })
            ),
          testCallPackagesWithOverridePreservesArguments: () =>
            scope.let$({
              f: (scope) =>
                scope.func$(
                  { a: 0n, b: scope.nixArg$.NoDefault },
                  (scope) => ({ nested: {} }),
                ),
              "f'": (scope) =>
                scope.apply$(scope.callPackagesWith, { a: 1n, b: 2n }, () =>
                  scope.f, {}),
            }).in$((scope) =>
              scope.attrSet$({
                expr: () =>
                  scope.apply$(scope.functionArgs, () =>
                    scope["f'"]["nested"]["override"]),
                expected: () =>
                  scope.apply$(scope.functionArgs, () =>
                    scope.f),
              })
            ),
          testId: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.id, 1n),
              expected: 1n,
            }),
          testConst: () =>
            scope.attrSet$({
              expr: () => scope.apply$(scope.const, 2n, 3n),
              expected: 2n,
            }),
          testPipe: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.pipe, 2n, () => [
                  scope.func$(
                    "x",
                    (scope) => scope.operators$.add(scope.x, 2n),
                  ),
                  scope.func$(
                    "x",
                    (scope) => scope.operators$.multiply(scope.x, 2n),
                  ),
                ]),
              expected: 8n,
            }),
          testPipeEmpty: () =>
            scope.attrSet$({
              expr: () => scope.apply$(scope.pipe, 2n, []),
              expected: 2n,
            }),
          testPipeStrings: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.pipe,
                  [3n, 4n],
                  () => [
                    scope.apply$(scope.map, () => scope.toString),
                    scope.apply$(scope.map, () =>
                      scope.func$(
                        "s",
                        (scope) => scope.operators$.add(scope.s, "\n"),
                      )),
                    scope.concatStrings,
                  ],
                ),
              expected: "3\n4\n",
            }),
          testAnd: () =>
            scope.attrSet$({
              expr: () => scope.apply$(scope.and, true, false),
              expected: false,
            }),
          testXor: () =>
            scope.attrSet$({
              expr:
                () => [
                  scope.apply$(scope.xor, true, false),
                  scope.apply$(scope.xor, true, true),
                  scope.apply$(scope.xor, false, false),
                  scope.apply$(scope.xor, false, true),
                ],
              expected: [true, false, false, true],
            }),
          testComposeExtensions: () =>
            scope.attrSet$({
              expr: () =>
                scope.let$({
                  obj: (scope) =>
                    scope.apply$(scope.makeExtensible, () =>
                      scope.func$("self", (scope) =>
                        scope.attrSet$({
                          foo: () => scope.self["bar"],
                        }))),
                  f: (scope) =>
                    scope.func$("self", (scope) =>
                      scope.func$(
                        "super",
                        (scope) => ({ bar: false, baz: true }),
                      )),
                  g: (scope) =>
                    scope.func$("self", (scope) =>
                      scope.func$("super", (scope) =>
                        scope.attrSet$({
                          bar: () =>
                            scope.operators$.selectOrDefault(scope.super, [
                              "baz",
                            ], false),
                        }))),
                  f_o_g: (scope) =>
                    scope.apply$(scope.composeExtensions, () =>
                      scope.f, () =>
                      scope.g),
                  composed: (scope) =>
                    scope.apply$(scope.obj["extend"], () =>
                      scope.f_o_g),
                }).in$((scope) =>
                  scope.composed["foo"]
                ),
              expected: true,
            }),
          testComposeManyExtensions0: () =>
            scope.attrSet$({
              expr: () =>
                scope.let$({
                  obj: (scope) =>
                    scope.apply$(scope.makeExtensible, () =>
                      scope.func$("self", (scope) => ({ foo: true }))),
                  emptyComposition: (scope) =>
                    scope.apply$(scope.composeManyExtensions, []),
                  composed: (scope) =>
                    scope.apply$(scope.obj["extend"], () =>
                      scope.emptyComposition),
                }).in$((scope) =>
                  scope.composed["foo"]
                ),
              expected: true,
            }),
          testComposeManyExtensions: () =>
            scope.let$({
              f: (scope) =>
                scope.func$("self", (scope) =>
                  scope.func$("super", (scope) => ({ bar: false, baz: true }))),
              g: (scope) =>
                scope.func$("self", (scope) =>
                  scope.func$("super", (scope) =>
                    scope.attrSet$({
                      bar: () =>
                        scope.operators$.selectOrDefault(
                          scope.super,
                          ["baz"],
                          false,
                        ),
                    }))),
              h: (scope) =>
                scope.func$("self", (scope) =>
                  scope.func$("super", (scope) =>
                    scope.attrSet$({
                      qux: () =>
                        scope.operators$.selectOrDefault(
                          scope.super,
                          ["bar"],
                          false,
                        ),
                    }))),
              obj: (scope) =>
                scope.apply$(scope.makeExtensible, () =>
                  scope.func$("self", (scope) =>
                    scope.attrSet$({
                      foo: () =>
                        scope.self["qux"],
                    }))),
            }).in$((scope) =>
              scope.attrSet$({
                expr: () =>
                  scope.let$({
                    composition: (scope) =>
                      scope.apply$(
                        scope.composeManyExtensions,
                        () => [scope.f, scope.g, scope.h],
                      ),
                    composed: (scope) =>
                      scope.apply$(scope.obj["extend"], () =>
                        scope.composition),
                  }).in$((scope) =>
                    scope.composed["foo"]
                  ),
                expected: () =>
                  scope.apply$(scope.obj["extend"], () =>
                    scope.apply$(scope.composeExtensions, () =>
                      scope.f, () =>
                      scope.apply$(scope.composeExtensions, () =>
                        scope.g, () =>
                        scope.h)))["foo"],
              })
            ),
          testBitAnd: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.bitAnd, 3n, 10n),
              expected: 2n,
            }),
          testBitOr: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.bitOr, 3n, 10n),
              expected: 11n,
            }),
          testBitXor: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.bitXor, 3n, 10n),
              expected: 9n,
            }),
          testToHexString: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.toHexString, 250n),
              expected: "FA",
            }),
          testFromHexStringFirstExample: () =>
            scope.attrSet$({
              expr: () => scope.apply$(scope.fromHexString, "FF"),
              expected: 255n,
            }),
          testFromHexStringMaximum: () =>
            scope.attrSet$({
              expr: () => scope.apply$(scope.fromHexString, "7fffffffffffffff"),
              expected: 9223372036854775807n,
            }),
          testFromHexStringLeadingZeroes: () =>
            scope.attrSet$({
              expr: () => scope.apply$(scope.fromHexString, "00ffffffffffffff"),
              expected: 72057594037927935n,
            }),
          testFromHexStringWithPrefix: () =>
            scope.attrSet$({
              expr: () => scope.apply$(scope.fromHexString, "0xf"),
              expected: 15n,
            }),
          testFromHexStringMixedCase: () =>
            scope.attrSet$({
              expr: () => scope.apply$(scope.fromHexString, "eEeEe"),
              expected: 978670n,
            }),
          testToBaseDigits: () =>
            scope.attrSet$({
              expr: () => scope.apply$(scope.toBaseDigits, 2n, 6n),
              expected: [1n, 1n, 0n],
            }),
          testFunctionArgsFunctor: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.functionArgs, () =>
                  scope.attrSet$({
                    __functor: () =>
                      scope.func$("self", (scope) =>
                        scope.func$({
                          a: scope.nixArg$.NoDefault,
                          b: scope.nixArg$.NoDefault,
                        }, (scope) => null)),
                  })),
              expected: { a: false, b: false },
            }),
          testFunctionArgsSetFunctionArgs: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.functionArgs, () =>
                  scope.apply$(scope.setFunctionArgs, () =>
                    scope.func$("args", (scope) =>
                      scope.args["x"]), { x: false })),
              expected: { x: false },
            }),
          testJoin: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.join, ",", ["a", "b", "c"]),
              expected: "a,b,c",
            }),
          testConcatMapStrings: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.concatMapStrings, () =>
                  scope.func$("x", (scope) =>
                    scope.operators$.add(scope.x, ";")), ["a", "b", "c"]),
              expected: "a;b;c;",
            }),
          testConcatStringsSep: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.concatStringsSep, ",", ["a", "b", "c"]),
              expected: "a,b,c",
            }),
          testConcatMapAttrsStringSepExamples: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.concatMapAttrsStringSep, "\n", () =>
                  scope.func$("name", (scope) =>
                    scope.func$("value", (scope) =>
                      scope.str$(() => [scope.name, ": foo-", scope.value]))), {
                  a: "0.1.0",
                  b: "0.2.0",
                }),
              expected: "a: foo-0.1.0\nb: foo-0.2.0",
            }),
          testConcatLines: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.concatLines, ["a", "b", "c"]),
              expected: "a\nb\nc\n",
            }),
          testConcatLinesEmpty: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.concatLines, []),
              expected: "",
            }),
          testMakeIncludePathWithPkgs: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.makeIncludePath, () => [
                  scope.attrSet$({
                    ...scope.deepSet$(["dev", "outPath"], "/dev"),
                    ...scope.deepSet$(["out", "outPath"], "/out"),
                    outPath: "/default",
                  }),
                  scope.attrSet$({
                    ...scope.deepSet$(["out", "outPath"], "/out"),
                    outPath: "/default",
                  }),
                  { outPath: "/default" },
                  scope.attrSet$({
                    ...scope.deepSet$(["dev", "outPath"], "/dev"),
                    outPath: "/default",
                    outputSpecified: true,
                  }),
                ]),
              expected:
                "/dev/include:/out/include:/default/include:/default/include",
            }),
          testMakeIncludePathWithEmptyList: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.makeIncludePath, []),
              expected: "",
            }),
          testMakeIncludePathWithOneString: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.makeIncludePath, ["/usr"]),
              expected: "/usr/include",
            }),
          testMakeIncludePathWithManyString: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.makeIncludePath, ["/usr", "/usr/local"]),
              expected: "/usr/include:/usr/local/include",
            }),
          testReplaceStringString: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.strings["replaceString"],
                  ".",
                  "_",
                  "v1.2.3",
                ),
              expected: "v1_2_3",
            }),
          testReplicateString: () =>
            scope.attrSet$({
              expr: () => scope.apply$(scope.strings["replicate"], 5n, "hello"),
              expected: "hellohellohellohellohello",
            }),
          testTrimString: () =>
            scope.attrSet$({
              expr: () =>
                scope.let$({
                  testValues: (scope) =>
                    scope.func$("f", (scope) =>
                      scope.apply$(scope.mapAttrs, () =>
                        scope.func$("_", (scope) => scope.f), {
                        empty: "",
                        cr: "\r",
                        lf: "\n",
                        tab: "\t",
                        spaces: "   ",
                        leading: "  Hello, world",
                        trailing: "Hello, world   ",
                        mixed: " Hello, world ",
                        "mixed-tabs": " \t\tHello, world \t \t ",
                        multiline: "  Hello,\n  world!  ",
                        "multiline-crlf": "  Hello,\r\n  world!  ",
                      })),
                }).in$((scope) =>
                  scope.attrSet$({
                    leading: () =>
                      scope.apply$(scope.testValues, () =>
                        scope.apply$(scope.strings["trimWith"], {
                          start: true,
                        })),
                    trailing: () =>
                      scope.apply$(scope.testValues, () =>
                        scope.apply$(scope.strings["trimWith"], { end: true })),
                    both: () =>
                      scope.apply$(scope.testValues, () =>
                        scope.strings["trim"]),
                  })
                ),
              expected: {
                leading: {
                  empty: "",
                  cr: "",
                  lf: "",
                  tab: "",
                  spaces: "",
                  leading: "Hello, world",
                  trailing: "Hello, world   ",
                  mixed: "Hello, world ",
                  "mixed-tabs": "Hello, world \t \t ",
                  multiline: "Hello,\n  world!  ",
                  "multiline-crlf": "Hello,\r\n  world!  ",
                },
                trailing: {
                  empty: "",
                  cr: "",
                  lf: "",
                  tab: "",
                  spaces: "",
                  leading: "  Hello, world",
                  trailing: "Hello, world",
                  mixed: " Hello, world",
                  "mixed-tabs": " \t\tHello, world",
                  multiline: "  Hello,\n  world!",
                  "multiline-crlf": "  Hello,\r\n  world!",
                },
                both: {
                  empty: "",
                  cr: "",
                  lf: "",
                  tab: "",
                  spaces: "",
                  leading: "Hello, world",
                  trailing: "Hello, world",
                  mixed: "Hello, world",
                  "mixed-tabs": "Hello, world",
                  multiline: "Hello,\n  world!",
                  "multiline-crlf": "Hello,\r\n  world!",
                },
              },
            }),
          testSplitStringsSimple: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.strings["splitString"], ".", "a.b.c.d"),
              expected: ["a", "b", "c", "d"],
            }),
          testSplitStringsEmpty: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.strings["splitString"], ".", "a..b"),
              expected: ["a", "", "b"],
            }),
          testSplitStringsOne: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.strings["splitString"], ":", "a.b"),
              expected: ["a.b"],
            }),
          testSplitStringsNone: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.strings["splitString"], ".", ""),
              expected: [""],
            }),
          testSplitStringsFirstEmpty: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.strings["splitString"], "/", "/a/b/c"),
              expected: ["", "a", "b", "c"],
            }),
          testSplitStringsLastEmpty: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.strings["splitString"],
                  ":",
                  "2001:db8:0:0042::8a2e:370:",
                ),
              expected: ["2001", "db8", "0", "0042", "", "8a2e", "370", ""],
            }),
          testSplitStringsRegex: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.strings["splitString"],
                  "\\[{}]()^$?*+|.",
                  "A\\[{}]()^$?*+|.B",
                ),
              expected: ["A", "B"],
            }),
          testSplitStringBySimpleDelimiter: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.strings["splitStringBy"],
                  () =>
                    scope.func$("prev", (scope) =>
                      scope.func$(
                        "curr",
                        (scope) =>
                          scope.apply$(scope.builtins["elem"], () =>
                            scope.curr, [".", "-"]),
                      )),
                  false,
                  "foo.bar-baz",
                ),
              expected: ["foo", "bar", "baz"],
            }),
          testSplitStringByLeadingDelimiter: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.strings["splitStringBy"],
                  () =>
                    scope.func$("prev", (scope) =>
                      scope.func$("curr", (scope) =>
                        scope.apply$(scope.builtins["elem"], () => scope.curr, [
                          ".",
                        ]))),
                  false,
                  ".foo.bar.baz",
                ),
              expected: ["", "foo", "bar", "baz"],
            }),
          testSplitStringByTrailingDelimiter: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.strings["splitStringBy"],
                  () =>
                    scope.func$("prev", (scope) =>
                      scope.func$("curr", (scope) =>
                        scope.apply$(scope.builtins["elem"], () =>
                          scope.curr, ["."]))),
                  false,
                  "foo.bar.baz.",
                ),
              expected: ["foo", "bar", "baz", ""],
            }),
          testSplitStringByMultipleConsecutiveDelimiters: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.strings["splitStringBy"],
                  () =>
                    scope.func$("prev", (scope) =>
                      scope.func$("curr", (scope) =>
                        scope.apply$(scope.builtins["elem"], () =>
                          scope.curr, ["."]))),
                  false,
                  "foo...bar",
                ),
              expected: ["foo", "", "", "bar"],
            }),
          testSplitStringByKeepingSplitChar: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.strings["splitStringBy"],
                  () =>
                    scope.func$("prev", (scope) =>
                      scope.func$("curr", (scope) =>
                        scope.apply$(scope.builtins["elem"], () =>
                          scope.curr, ["."]))),
                  true,
                  "foo.bar.baz",
                ),
              expected: ["foo", ".bar", ".baz"],
            }),
          testSplitStringByCaseTransition: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.strings["splitStringBy"],
                  () =>
                    scope.func$("prev", (scope) =>
                      scope.func$(
                        "curr",
                        (
                          scope,
                        ) => ((scope.operators$.notEqual(
                          scope.apply$(scope.builtins["match"], "[a-z]", () =>
                            scope.prev),
                          null,
                        )) &&
                          (scope.operators$.notEqual(
                            scope.apply$(scope.builtins["match"], "[A-Z]", () =>
                              scope.curr),
                            null,
                          ))),
                      )),
                  true,
                  "fooBarBaz",
                ),
              expected: ["foo", "Bar", "Baz"],
            }),
          testSplitStringByEmptyString: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.strings["splitStringBy"],
                  () =>
                    scope.func$("prev", (scope) =>
                      scope.func$("curr", (scope) =>
                        scope.apply$(scope.builtins["elem"], () => scope.curr, [
                          ".",
                        ]))),
                  false,
                  "",
                ),
              expected: [""],
            }),
          testSplitStringByComplexPredicate: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.strings["splitStringBy"],
                  () =>
                    scope.func$("prev", (scope) =>
                      scope.func$(
                        "curr",
                        (
                          scope,
                        ) => ((((scope.operators$.notEqual(scope.prev, "")) &&
                          (scope.operators$.notEqual(scope.curr, ""))) &&
                          (scope.operators$.notEqual(
                            scope.apply$(scope.builtins["match"], "[0-9]", () =>
                              scope.prev),
                            null,
                          ))) &&
                          (scope.operators$.notEqual(
                            scope.apply$(scope.builtins["match"], "[a-z]", () =>
                              scope.curr),
                            null,
                          ))),
                      )),
                  true,
                  "123abc456def",
                ),
              expected: ["123", "abc456", "def"],
            }),
          testSplitStringByUpperCaseStart: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.strings["splitStringBy"],
                  () =>
                    scope.func$("prev", (scope) =>
                      scope.func$("curr", (scope) =>
                        scope.operators$.notEqual(
                          scope.apply$(scope.builtins["match"], "[A-Z]", () =>
                            scope.curr),
                          null,
                        ))),
                  true,
                  "FooBarBaz",
                ),
              expected: ["", "Foo", "Bar", "Baz"],
            }),
          testEscapeShellArg: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.strings["escapeShellArg"], "esc'ape\nme"),
              expected: "'esc'\\''ape\nme'",
            }),
          testEscapeShellArgEmpty: () =>
            scope.attrSet$({
              expr: () => scope.apply$(scope.strings["escapeShellArg"], ""),
              expected: "''",
            }),
          testEscapeShellArgs: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.strings["escapeShellArgs"], [
                  "one",
                  "two three",
                  "four'five",
                ]),
              expected: "one 'two three' 'four'\\''five'",
            }),
          testEscapeShellArgsUnicode: () =>
            scope.attrSet$({
              expr: () => scope.apply$(scope.strings["escapeShellArg"], "á"),
              expected: "'á'",
            }),
          testEscapeNixIdentifierNoQuote: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.strings["escapeNixIdentifier"], "foo"),
              expected: "foo",
            }),
          testEscapeNixIdentifierNumber: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.strings["escapeNixIdentifier"], "1foo"),
              expected: '"1foo"',
            }),
          testEscapeNixIdentifierKeyword: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.strings["escapeNixIdentifier"], "assert"),
              expected: '"assert"',
            }),
          testSplitStringsDerivation: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.lib["dropEnd"], 1n, () =>
                  scope.apply$(scope.strings["splitString"], "/", () =>
                    scope.dummyDerivation)),
              expected: () =>
                scope.apply$(scope.strings["splitString"], "/", () =>
                  scope.builtins["storeDir"]),
            }),
          testSplitVersionSingle: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.versions["splitVersion"], "1"),
              expected: ["1"],
            }),
          testSplitVersionDouble: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.versions["splitVersion"], "1.2"),
              expected: ["1", "2"],
            }),
          testSplitVersionTriple: () =>
            scope.attrSet$({
              expr: () => scope.apply$(scope.versions["splitVersion"], "1.2.3"),
              expected: ["1", "2", "3"],
            }),
          testPadVersionLess: () =>
            scope.attrSet$({
              expr: () => scope.apply$(scope.versions["pad"], 3n, "1.2"),
              expected: "1.2.0",
            }),
          testPadVersionLessExtra: () =>
            scope.attrSet$({
              expr: () => scope.apply$(scope.versions["pad"], 3n, "1.3-rc1"),
              expected: "1.3.0-rc1",
            }),
          testPadVersionMore: () =>
            scope.attrSet$({
              expr: () => scope.apply$(scope.versions["pad"], 3n, "1.2.3.4"),
              expected: "1.2.3",
            }),
          testIsStorePath: () =>
            scope.attrSet$({
              expr: () =>
                scope.let$({
                  goodPath: (scope) =>
                    scope.str$(
                      () => [
                        scope.builtins["storeDir"],
                        "/d945ibfx9x185xf04b890y4f9g3cbb63-python-2.7.11",
                      ]
                    ),
                  goodCAPath:
                    "/1121rp0gvr1qya7hvy925g5kjwg66acz6sn1ra1hca09f1z5dsab",
                }).in$((scope) =>
                  scope.attrSet$({
                    storePath: () =>
                      scope.apply$(scope.isStorePath, () => scope.goodPath),
                    storePathDerivation: () =>
                      scope.apply$(
                        scope.isStorePath,
                        () => scope.dummyDerivation,
                      ),
                    storePathAppendix: () =>
                      scope.apply$(
                        scope.isStorePath,
                        () => scope.str$(() => [scope.goodPath, "/bin/python"]),
                      ),
                    nonAbsolute: () =>
                      scope.apply$(scope.isStorePath, () =>
                        scope.apply$(scope.concatStrings, () =>
                          scope.apply$(scope.tail, () =>
                            scope.apply$(
                              scope.stringToCharacters,
                              () => scope.goodPath,
                            )))),
                    asPath: () =>
                      scope.apply$(
                        scope.isStorePath,
                        () => (scope.operators$.add(
                          new scope.Path$(["/."], []),
                          scope.goodPath,
                        )),
                      ),
                    otherPath: () =>
                      scope.apply$(scope.isStorePath, "/something/else"),
                    caPath: () =>
                      scope.apply$(scope.isStorePath, () => scope.goodCAPath),
                    caPathAppendix: () =>
                      scope.apply$(
                        scope.isStorePath,
                        () =>
                          scope.str$(() => [scope.goodCAPath, "/bin/python"]),
                      ),
                    caAsPath: () =>
                      scope.apply$(
                        scope.isStorePath,
                        () => (scope.operators$.add(
                          new scope.Path$(["/."], []),
                          scope.goodCAPath,
                        )),
                      ),
                    otherVals: () =>
                      scope.attrSet$({
                        attrset: () => scope.apply$(scope.isStorePath, {}),
                        list: () => scope.apply$(scope.isStorePath, []),
                        int: () => scope.apply$(scope.isStorePath, 42n),
                      }),
                  })
                ),
              expected: {
                storePath: true,
                storePathDerivation: true,
                storePathAppendix: false,
                nonAbsolute: false,
                asPath: true,
                caPath: true,
                caPathAppendix: false,
                caAsPath: true,
                otherPath: false,
                otherVals: { attrset: false, list: false, int: false },
              },
            }),
          testEscapeXML: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.escapeXML, "\"test\" 'test' < & >"),
              expected: "&quot;test&quot; &apos;test&apos; &lt; &amp; &gt;",
            }),
          testToShellVars: () =>
            scope.attrSet$({
              expr: () =>
                scope.str$(() => [
                  scope.apply$(scope.toShellVars, () =>
                    scope.attrSet$({
                      STRing01: "just a 'string'",
                      _array_: ["with", "more strings"],
                      ...scope.deepSet$(
                        ["assoc", "with some"],
                        "strings\npossibly newlines\n",
                      ),
                      drv: { outPath: "/drv", foo: "ignored attribute" },
                      path: (new scope.Path$(["/path"], [])),
                      stringable: () =>
                        scope.attrSet$({
                          __toString: () =>
                            scope.func$("_", (scope) => "hello toString"),
                          bar: "ignored attribute",
                        }),
                    })),
                  "\n",
                ]),
              expected:
                "STRing01='just a '\\''string'\\'''\ndeclare -a _array_=(with 'more strings')\ndeclare -A assoc=(['with some']='strings\npossibly newlines\n')\ndrv=/drv\npath=/path\nstringable='hello toString'\n",
            }),
          testHasInfixFalse: () =>
            scope.attrSet$({
              expr: () => scope.apply$(scope.hasInfix, "c", "abde"),
              expected: false,
            }),
          testHasInfixTrue: () =>
            scope.attrSet$({
              expr: () => scope.apply$(scope.hasInfix, "c", "abcde"),
              expected: true,
            }),
          testHasInfixDerivation: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.hasInfix, "name", () =>
                  scope.dummyDerivation),
              expected: true,
            }),
          testHasInfixPath: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.hasInfix,
                  "tests",
                  new scope.Path$([
                    new URL("../tests", import.meta.url).pathname,
                  ], []),
                ),
              expected: true,
            }),
          testHasInfixPathStoreDir: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.hasInfix,
                  () => scope.builtins["storeDir"],
                  new scope.Path$([
                    new URL("../tests", import.meta.url).pathname,
                  ], []),
                ),
              expected: true,
            }),
          testHasInfixToString: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.hasInfix, "a", () =>
                  scope.attrSet$({
                    __toString: () =>
                      scope.func$("_", (scope) =>
                        "a"),
                  })),
              expected: true,
            }),
          testRemovePrefixExample1: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.removePrefix, "foo.", "foo.bar.baz"),
              expected: "bar.baz",
            }),
          testRemovePrefixExample2: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.removePrefix, "xxx", "foo.bar.baz"),
              expected: "foo.bar.baz",
            }),
          testRemovePrefixEmptyPrefix: () =>
            scope.attrSet$({
              expr: () => scope.apply$(scope.removePrefix, "", "foo"),
              expected: "foo",
            }),
          testRemovePrefixEmptyString: () =>
            scope.attrSet$({
              expr: () => scope.apply$(scope.removePrefix, "foo", ""),
              expected: "",
            }),
          testRemovePrefixEmptyBoth: () =>
            scope.attrSet$({
              expr: () => scope.apply$(scope.removePrefix, "", ""),
              expected: "",
            }),
          testNormalizePath: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.strings["normalizePath"], "//a/b//c////d/"),
              expected: "/a/b/c/d/",
            }),
          testCharToInt: () =>
            scope.attrSet$({
              expr: () => scope.apply$(scope.strings["charToInt"], "A"),
              expected: 65n,
            }),
          testEscapeC: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.strings["escapeC"],
                  ["\n", " "],
                  "Hello World\n",
                ),
              expected: "Hello\\x20World\\x0a",
            }),
          testEscapeURL: () =>
            scope.apply$(
              scope.testAllTrue,
              () => [
                scope.operators$.equal(
                  "",
                  scope.apply$(scope.strings["escapeURL"], ""),
                ),
                scope.operators$.equal(
                  "Hello",
                  scope.apply$(scope.strings["escapeURL"], "Hello"),
                ),
                scope.operators$.equal(
                  "Hello%20World",
                  scope.apply$(scope.strings["escapeURL"], "Hello World"),
                ),
                scope.operators$.equal(
                  "Hello%2FWorld",
                  scope.apply$(scope.strings["escapeURL"], "Hello/World"),
                ),
                scope.operators$.equal(
                  "42%25",
                  scope.apply$(scope.strings["escapeURL"], "42%"),
                ),
                scope.operators$.equal(
                  "%20%3F%26%3D%23%2B%25%21%3C%3E%23%22%7B%7D%7C%5C%5E%5B%5D%60%09%3A%2F%40%24%27%28%29%2A%2C%3B",
                  scope.apply$(
                    scope.strings["escapeURL"],
                    " ?&=#+%!<>#\"{}|\\^[]`\t:/@$'()*,;",
                  ),
                ),
              ],
            ),
          testToSentenceCase: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.strings["toSentenceCase"], "hello world"),
              expected: "Hello world",
            }),
          testToSentenceCasePath: () =>
            scope.apply$(scope.testingThrow, () =>
              scope.apply$(
                scope.strings["toSentenceCase"],
                new scope.Path$(
                  [new URL("../tests", import.meta.url).pathname],
                  [],
                ),
              )),
          testToCamelCase: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.strings["toCamelCase"], "hello world"),
              expected: "helloWorld",
            }),
          testToCamelCaseFromKebab: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.strings["toCamelCase"], "hello-world"),
              expected: "helloWorld",
            }),
          testToCamelCaseFromSnake: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.strings["toCamelCase"], "hello_world"),
              expected: "helloWorld",
            }),
          testToCamelCaseFromPascal: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.strings["toCamelCase"], "HelloWorld"),
              expected: "helloWorld",
            }),
          testToCamelCasePath: () =>
            scope.apply$(scope.testingThrow, () =>
              scope.apply$(
                scope.strings["toCamelCase"],
                new scope.Path$(
                  [new URL("../tests", import.meta.url).pathname],
                  [],
                ),
              )),
          testToInt: () =>
            scope.apply$(
              scope.testAllTrue,
              () => [
                scope.operators$.equal(123n, scope.apply$(scope.toInt, "123")),
                scope.operators$.equal(0n, scope.apply$(scope.toInt, "0")),
                scope.operators$.equal(123n, scope.apply$(scope.toInt, " 123")),
                scope.operators$.equal(123n, scope.apply$(scope.toInt, "123 ")),
                scope.operators$.equal(
                  123n,
                  scope.apply$(scope.toInt, " 123 "),
                ),
                scope.operators$.equal(
                  123n,
                  scope.apply$(scope.toInt, "   123   "),
                ),
                scope.operators$.equal(0n, scope.apply$(scope.toInt, " 0")),
                scope.operators$.equal(0n, scope.apply$(scope.toInt, "0 ")),
                scope.operators$.equal(0n, scope.apply$(scope.toInt, " 0 ")),
                scope.operators$.equal(-1n, scope.apply$(scope.toInt, "-1")),
                scope.operators$.equal(-1n, scope.apply$(scope.toInt, " -1 ")),
              ],
            ),
          testToIntFails: () =>
            scope.apply$(
              scope.testAllTrue,
              () => [
                scope.operators$.equal(
                  scope.apply$(scope.builtins["tryEval"], () =>
                    scope.apply$(scope.toInt, "")),
                  { success: false, value: false },
                ),
                scope.operators$.equal(
                  scope.apply$(scope.builtins["tryEval"], () =>
                    scope.apply$(scope.toInt, "123 123")),
                  { success: false, value: false },
                ),
                scope.operators$.equal(
                  scope.apply$(scope.builtins["tryEval"], () =>
                    scope.apply$(scope.toInt, "0 123")),
                  { success: false, value: false },
                ),
                scope.operators$.equal(
                  scope.apply$(scope.builtins["tryEval"], () =>
                    scope.apply$(scope.toInt, " 0d ")),
                  { success: false, value: false },
                ),
                scope.operators$.equal(
                  scope.apply$(scope.builtins["tryEval"], () =>
                    scope.apply$(scope.toInt, " 1d ")),
                  { success: false, value: false },
                ),
                scope.operators$.equal(
                  scope.apply$(scope.builtins["tryEval"], () =>
                    scope.apply$(scope.toInt, " d0 ")),
                  { success: false, value: false },
                ),
                scope.operators$.equal(
                  scope.apply$(scope.builtins["tryEval"], () =>
                    scope.apply$(scope.toInt, "00")),
                  { success: false, value: false },
                ),
                scope.operators$.equal(
                  scope.apply$(scope.builtins["tryEval"], () =>
                    scope.apply$(scope.toInt, "01")),
                  { success: false, value: false },
                ),
                scope.operators$.equal(
                  scope.apply$(scope.builtins["tryEval"], () =>
                    scope.apply$(scope.toInt, "002")),
                  { success: false, value: false },
                ),
                scope.operators$.equal(
                  scope.apply$(scope.builtins["tryEval"], () =>
                    scope.apply$(scope.toInt, " 002 ")),
                  { success: false, value: false },
                ),
                scope.operators$.equal(
                  scope.apply$(scope.builtins["tryEval"], () =>
                    scope.apply$(scope.toInt, " foo ")),
                  { success: false, value: false },
                ),
                scope.operators$.equal(
                  scope.apply$(scope.builtins["tryEval"], () =>
                    scope.apply$(scope.toInt, " foo 123 ")),
                  { success: false, value: false },
                ),
                scope.operators$.equal(
                  scope.apply$(scope.builtins["tryEval"], () =>
                    scope.apply$(scope.toInt, " foo123 ")),
                  { success: false, value: false },
                ),
              ],
            ),
          testToIntBase10: () =>
            scope.apply$(
              scope.testAllTrue,
              () => [
                scope.operators$.equal(
                  123n,
                  scope.apply$(scope.toIntBase10, "123"),
                ),
                scope.operators$.equal(
                  0n,
                  scope.apply$(scope.toIntBase10, "0"),
                ),
                scope.operators$.equal(
                  123n,
                  scope.apply$(scope.toIntBase10, " 123"),
                ),
                scope.operators$.equal(
                  123n,
                  scope.apply$(scope.toIntBase10, "123 "),
                ),
                scope.operators$.equal(
                  123n,
                  scope.apply$(scope.toIntBase10, " 123 "),
                ),
                scope.operators$.equal(
                  123n,
                  scope.apply$(scope.toIntBase10, "   123   "),
                ),
                scope.operators$.equal(
                  0n,
                  scope.apply$(scope.toIntBase10, " 0"),
                ),
                scope.operators$.equal(
                  0n,
                  scope.apply$(scope.toIntBase10, "0 "),
                ),
                scope.operators$.equal(
                  0n,
                  scope.apply$(scope.toIntBase10, " 0 "),
                ),
                scope.operators$.equal(
                  123n,
                  scope.apply$(scope.toIntBase10, "0123"),
                ),
                scope.operators$.equal(
                  123n,
                  scope.apply$(scope.toIntBase10, "0000123"),
                ),
                scope.operators$.equal(
                  0n,
                  scope.apply$(scope.toIntBase10, "000000"),
                ),
                scope.operators$.equal(
                  123n,
                  scope.apply$(scope.toIntBase10, " 0123"),
                ),
                scope.operators$.equal(
                  123n,
                  scope.apply$(scope.toIntBase10, "0123 "),
                ),
                scope.operators$.equal(
                  123n,
                  scope.apply$(scope.toIntBase10, " 0123 "),
                ),
                scope.operators$.equal(
                  123n,
                  scope.apply$(scope.toIntBase10, " 0000123"),
                ),
                scope.operators$.equal(
                  123n,
                  scope.apply$(scope.toIntBase10, "0000123 "),
                ),
                scope.operators$.equal(
                  123n,
                  scope.apply$(scope.toIntBase10, " 0000123 "),
                ),
                scope.operators$.equal(
                  0n,
                  scope.apply$(scope.toIntBase10, " 000000"),
                ),
                scope.operators$.equal(
                  0n,
                  scope.apply$(scope.toIntBase10, "000000 "),
                ),
                scope.operators$.equal(
                  0n,
                  scope.apply$(scope.toIntBase10, " 000000 "),
                ),
                scope.operators$.equal(
                  -1n,
                  scope.apply$(scope.toIntBase10, "-1"),
                ),
                scope.operators$.equal(
                  -1n,
                  scope.apply$(scope.toIntBase10, " -1 "),
                ),
              ],
            ),
          testToIntBase10Fails: () =>
            scope.apply$(
              scope.testAllTrue,
              () => [
                scope.operators$.equal(
                  scope.apply$(scope.builtins["tryEval"], () =>
                    scope.apply$(scope.toIntBase10, "")),
                  { success: false, value: false },
                ),
                scope.operators$.equal(
                  scope.apply$(scope.builtins["tryEval"], () =>
                    scope.apply$(scope.toIntBase10, "123 123")),
                  { success: false, value: false },
                ),
                scope.operators$.equal(
                  scope.apply$(scope.builtins["tryEval"], () =>
                    scope.apply$(scope.toIntBase10, "0 123")),
                  { success: false, value: false },
                ),
                scope.operators$.equal(
                  scope.apply$(scope.builtins["tryEval"], () =>
                    scope.apply$(scope.toIntBase10, " 0d ")),
                  { success: false, value: false },
                ),
                scope.operators$.equal(
                  scope.apply$(scope.builtins["tryEval"], () =>
                    scope.apply$(scope.toIntBase10, " 1d ")),
                  { success: false, value: false },
                ),
                scope.operators$.equal(
                  scope.apply$(scope.builtins["tryEval"], () =>
                    scope.apply$(scope.toIntBase10, " d0 ")),
                  { success: false, value: false },
                ),
                scope.operators$.equal(
                  scope.apply$(scope.builtins["tryEval"], () =>
                    scope.apply$(scope.toIntBase10, " foo ")),
                  { success: false, value: false },
                ),
                scope.operators$.equal(
                  scope.apply$(scope.builtins["tryEval"], () =>
                    scope.apply$(scope.toIntBase10, " foo 123 ")),
                  { success: false, value: false },
                ),
                scope.operators$.equal(
                  scope.apply$(scope.builtins["tryEval"], () =>
                    scope.apply$(scope.toIntBase10, " foo 00123 ")),
                  { success: false, value: false },
                ),
                scope.operators$.equal(
                  scope.apply$(scope.builtins["tryEval"], () =>
                    scope.apply$(scope.toIntBase10, " foo00123 ")),
                  { success: false, value: false },
                ),
              ],
            ),
          testFilter: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.filter, () =>
                  scope.func$(
                    "x",
                    (scope) => scope.operators$.notEqual(scope.x, "a"),
                  ), ["a", "b", "c", "a"]),
              expected: ["b", "c"],
            }),
          testIfilter0Example: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.ifilter0, () =>
                  scope.func$("i", (scope) =>
                    scope.func$(
                      "v",
                      (
                        scope,
                      ) => ((scope.operators$.equal(scope.i, 0n)) ||
                        (scope.operators$.greaterThan(scope.v, 2n))),
                    )), [1n, 2n, 3n]),
              expected: [1n, 3n],
            }),
          testIfilter0Empty: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.ifilter0,
                  () =>
                    scope.func$(
                      "i",
                      (scope) =>
                        scope.func$("v", (scope) =>
                          scope.apply$(scope.abort, "shouldn't be evaluated!")),
                    ),
                  [],
                ),
              expected: [],
            }),
          testIfilter0IndexOnly: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.length, () =>
                  scope.apply$(
                    scope.ifilter0,
                    () =>
                      scope.func$("i", (scope) =>
                        scope.func$("v", (scope) =>
                          scope.operators$.equal(
                            scope.apply$(scope.mod, () => scope.i, 2n),
                            0n,
                          ))),
                    () => [
                      scope.apply$(scope.throw, "0"),
                      scope.apply$(scope.throw, "1"),
                      scope.apply$(scope.throw, "2"),
                      scope.apply$(scope.throw, "3"),
                    ],
                  )),
              expected: 2n,
            }),
          testIfilter0All: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.ifilter0, () =>
                  scope.func$(
                    "i",
                    (scope) => scope.func$("v", (scope) => true),
                  ), [10n, 11n, 12n, 13n, 14n, 15n]),
              expected: [10n, 11n, 12n, 13n, 14n, 15n],
            }),
          testIfilter0First: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.ifilter0,
                  () =>
                    scope.func$("i", (scope) =>
                      scope.func$("v", (scope) =>
                        scope.operators$.equal(scope.i, 0n))),
                  [10n, 11n, 12n, 13n, 14n, 15n],
                ),
              expected: [10n],
            }),
          testIfilter0Last: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.ifilter0, () =>
                  scope.func$(
                    "i",
                    (scope) =>
                      scope.func$("v", (scope) =>
                        scope.operators$.equal(scope.i, 5n)),
                  ), [10n, 11n, 12n, 13n, 14n, 15n]),
              expected: [15n],
            }),
          testFoldr: () =>
            scope.let$({
              f: (scope) =>
                scope.func$("op", (scope) =>
                  scope.func$("foldr", (scope) =>
                    scope.apply$(
                      scope.foldr,
                      () => scope.op,
                      0n,
                      () => scope.apply$(scope.range, 0n, 100n),
                    ))),
              assoc: (scope) =>
                scope.apply$(scope.f, () => scope.builtins["add"]),
              nonAssoc: (scope) =>
                scope.apply$(scope.f, () => scope.builtins["sub"]),
            }).in$((scope) =>
              scope.attrSet$({
                expr: () =>
                  scope.attrSet$({
                    assocRight: () =>
                      scope.apply$(scope.assoc, () => scope.foldr),
                    assocRightIsLeft: () =>
                      scope.operators$.equal(
                        scope.apply$(scope.assoc, () => scope.foldr),
                        scope.apply$(scope.assoc, () => scope.foldl),
                      ),
                    nonAssocRight: () =>
                      scope.apply$(scope.nonAssoc, () => scope.foldr),
                    nonAssocLeft: () =>
                      scope.apply$(scope.nonAssoc, () => scope.foldl),
                    nonAssocRightIsNotLeft: () =>
                      scope.operators$.notEqual(
                        scope.apply$(scope.nonAssoc, () => scope.foldl),
                        scope.apply$(scope.nonAssoc, () => scope.foldr),
                      ),
                  }),
                expected: {
                  assocRight: 5050n,
                  assocRightIsLeft: true,
                  nonAssocRight: 50n,
                  nonAssocLeft: (-5050n),
                  nonAssocRightIsNotLeft: true,
                },
              })
            ),
          "testFoldl'Empty": () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope["foldl'"],
                  () =>
                    scope.func$("acc", (scope) =>
                      scope.func$("el", (scope) =>
                        scope.apply$(scope.abort, "operation not called"))),
                  0n,
                  [],
                ),
              expected: 0n,
            }),
          "testFoldl'IntegerAdding": () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope["foldl'"],
                  () =>
                    scope.func$(
                      "acc",
                      (scope) =>
                        scope.func$("el", (scope) =>
                          scope.operators$.add(scope.acc, scope.el)),
                    ),
                  0n,
                  [1n, 2n, 3n],
                ),
              expected: 6n,
            }),
          "testFoldl'NonDeep": () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.take, 3n, () =>
                  scope.apply$(
                    scope["foldl'"],
                    () =>
                      scope.func$("acc", (scope) =>
                        scope.func$("el", (scope) =>
                          scope.operators$.listConcat([scope.el], scope.acc))),
                    () => [scope.apply$(scope.abort, "unevaluated list entry")],
                    [1n, 2n, 3n],
                  )),
              expected: [3n, 2n, 1n],
            }),
          "testFoldl'StrictInitial": () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.builtins["tryEval"], () =>
                  scope.apply$(scope["foldl'"], () =>
                    scope.func$("acc", (scope) =>
                      scope.func$("el", (scope) => scope.el)), () =>
                    scope.apply$(scope.throw, "hello"), []))["success"],
              expected: false,
            }),
          "testFoldl'Large": () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope["foldl'"],
                  () =>
                    scope.func$(
                      "acc",
                      (scope) =>
                        scope.func$("el", (scope) =>
                          scope.operators$.add(scope.acc, scope.el)),
                    ),
                  0n,
                  () => scope.apply$(scope.range, 0n, 100000n),
                ),
              expected: 5000050000n,
            }),
          testTake: () =>
            scope.apply$(
              scope.testAllTrue,
              () => [
                scope.operators$.equal(
                  [],
                  scope.apply$(scope.take, 0n, [1n, 2n, 3n]),
                ),
                scope.operators$.equal(
                  [1n],
                  scope.apply$(scope.take, 1n, [1n, 2n, 3n]),
                ),
                scope.operators$.equal(
                  [1n, 2n],
                  scope.apply$(scope.take, 2n, [1n, 2n, 3n]),
                ),
                scope.operators$.equal(
                  [1n, 2n, 3n],
                  scope.apply$(scope.take, 3n, [1n, 2n, 3n]),
                ),
                scope.operators$.equal(
                  [1n, 2n, 3n],
                  scope.apply$(scope.take, 4n, [1n, 2n, 3n]),
                ),
              ],
            ),
          testTakeEnd: () =>
            scope.let$({
              takeEnd: (scope) => scope.lib["takeEnd"],
            }).in$((scope) =>
              scope.apply$(
                scope.testAllTrue,
                () => [
                  scope.operators$.equal(
                    scope.apply$(scope.takeEnd, 0n, [1n, 2n, 3n]),
                    [],
                  ),
                  scope.operators$.equal(
                    scope.apply$(scope.takeEnd, 1n, [1n, 2n, 3n]),
                    [3n],
                  ),
                  scope.operators$.equal(
                    scope.apply$(scope.takeEnd, 2n, [1n, 2n, 3n]),
                    [2n, 3n],
                  ),
                  scope.operators$.equal(
                    scope.apply$(scope.takeEnd, 3n, [1n, 2n, 3n]),
                    [1n, 2n, 3n],
                  ),
                  scope.operators$.equal(
                    scope.apply$(scope.takeEnd, 4n, [1n, 2n, 3n]),
                    [1n, 2n, 3n],
                  ),
                  scope.operators$.equal(
                    scope.apply$(scope.takeEnd, 0n, []),
                    [],
                  ),
                  scope.operators$.equal(
                    scope.apply$(scope.takeEnd, 1n, []),
                    [],
                  ),
                  scope.operators$.equal(
                    scope.apply$(scope.takeEnd, -1n, [1n, 2n, 3n]),
                    [],
                  ),
                  scope.operators$.equal(
                    scope.apply$(scope.takeEnd, -1n, []),
                    [],
                  ),
                ],
              )
            ),
          testDrop: () =>
            scope.let$({
              drop: (scope) => scope.lib["drop"],
            }).in$((scope) =>
              scope.apply$(
                scope.testAllTrue,
                () => [
                  scope.operators$.equal(
                    scope.apply$(scope.drop, 0n, [1n, 2n, 3n]),
                    [1n, 2n, 3n],
                  ),
                  scope.operators$.equal(
                    scope.apply$(scope.drop, 1n, [1n, 2n, 3n]),
                    [2n, 3n],
                  ),
                  scope.operators$.equal(
                    scope.apply$(scope.drop, 2n, [1n, 2n, 3n]),
                    [3n],
                  ),
                  scope.operators$.equal(
                    scope.apply$(scope.drop, 3n, [1n, 2n, 3n]),
                    [],
                  ),
                  scope.operators$.equal(
                    scope.apply$(scope.drop, 4n, [1n, 2n, 3n]),
                    [],
                  ),
                  scope.operators$.equal(scope.apply$(scope.drop, 0n, []), []),
                  scope.operators$.equal(scope.apply$(scope.drop, 1n, []), []),
                ],
              )
            ),
          testDropEnd: () =>
            scope.let$({
              dropEnd: (scope) => scope.lib["dropEnd"],
            }).in$((scope) =>
              scope.apply$(
                scope.testAllTrue,
                () => [
                  scope.operators$.equal(
                    scope.apply$(scope.dropEnd, 0n, [1n, 2n, 3n]),
                    [1n, 2n, 3n],
                  ),
                  scope.operators$.equal(
                    scope.apply$(scope.dropEnd, 1n, [1n, 2n, 3n]),
                    [1n, 2n],
                  ),
                  scope.operators$.equal(
                    scope.apply$(scope.dropEnd, 2n, [1n, 2n, 3n]),
                    [1n],
                  ),
                  scope.operators$.equal(
                    scope.apply$(scope.dropEnd, 3n, [1n, 2n, 3n]),
                    [],
                  ),
                  scope.operators$.equal(
                    scope.apply$(scope.dropEnd, 4n, [1n, 2n, 3n]),
                    [],
                  ),
                  scope.operators$.equal(
                    scope.apply$(scope.dropEnd, 0n, []),
                    [],
                  ),
                  scope.operators$.equal(
                    scope.apply$(scope.dropEnd, 1n, []),
                    [],
                  ),
                  scope.operators$.equal(
                    scope.apply$(scope.dropEnd, -1n, [1n, 2n, 3n]),
                    [1n, 2n, 3n],
                  ),
                  scope.operators$.equal(
                    scope.apply$(scope.dropEnd, -1n, []),
                    [],
                  ),
                ],
              )
            ),
          testListHasPrefixExample1: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.lists["hasPrefix"], [1n, 2n], [
                  1n,
                  2n,
                  3n,
                  4n,
                ]),
              expected: true,
            }),
          testListHasPrefixExample2: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.lists["hasPrefix"], [0n, 1n], [
                  1n,
                  2n,
                  3n,
                  4n,
                ]),
              expected: false,
            }),
          testListHasPrefixLazy: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.lists["hasPrefix"],
                  [1n],
                  () => [
                    1n,
                    scope.apply$(
                      scope.abort,
                      "lib.lists.hasPrefix is not lazy",
                    ),
                  ],
                ),
              expected: true,
            }),
          testListHasPrefixEmptyPrefix: () =>
            scope.attrSet$({
              expr: () => scope.apply$(scope.lists["hasPrefix"], [], [1n, 2n]),
              expected: true,
            }),
          testListHasPrefixEmptyList: () =>
            scope.attrSet$({
              expr: () => scope.apply$(scope.lists["hasPrefix"], [1n, 2n], []),
              expected: false,
            }),
          testListRemovePrefixExample1: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.lists["removePrefix"], [1n, 2n], [
                  1n,
                  2n,
                  3n,
                  4n,
                ]),
              expected: [3n, 4n],
            }),
          testListRemovePrefixExample2: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.builtins["tryEval"], () =>
                  scope.apply$(scope.lists["removePrefix"], [0n, 1n], [
                    1n,
                    2n,
                    3n,
                    4n,
                  ]))["success"],
              expected: false,
            }),
          testListRemovePrefixEmptyPrefix: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.lists["removePrefix"], [], [1n, 2n]),
              expected: [1n, 2n],
            }),
          testListRemovePrefixEmptyList: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.builtins["tryEval"],
                  () => scope.apply$(scope.lists["removePrefix"], [1n, 2n], []),
                )["success"],
              expected: false,
            }),
          testFoldAttrs: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.foldAttrs,
                  () =>
                    scope.func$(
                      "n",
                      (scope) =>
                        scope.func$("a", (scope) =>
                          scope.operators$.listConcat([scope.n], scope.a)),
                    ),
                  [],
                  [{ a: 2n, b: 7n }, { a: 3n, c: 8n }],
                ),
              expected: { a: [2n, 3n], b: [7n], c: [8n] },
            }),
          testListCommonPrefixExample1: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.lists["commonPrefix"], [
                  1n,
                  2n,
                  3n,
                  4n,
                  5n,
                  6n,
                ], [1n, 2n, 4n, 8n]),
              expected: [1n, 2n],
            }),
          testListCommonPrefixExample2: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.lists["commonPrefix"], [1n, 2n, 3n], [
                  1n,
                  2n,
                  3n,
                  4n,
                  5n,
                ]),
              expected: [1n, 2n, 3n],
            }),
          testListCommonPrefixExample3: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.lists["commonPrefix"], [1n, 2n, 3n], [
                  4n,
                  5n,
                  6n,
                ]),
              expected: [],
            }),
          testListCommonPrefixEmpty: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.lists["commonPrefix"], [], [1n, 2n, 3n]),
              expected: [],
            }),
          testListCommonPrefixSame: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.lists["commonPrefix"], [1n, 2n, 3n], [
                  1n,
                  2n,
                  3n,
                ]),
              expected: [1n, 2n, 3n],
            }),
          testListCommonPrefixLazy: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.lists["commonPrefix"],
                  [1n],
                  () => [
                    1n,
                    scope.apply$(
                      scope.abort,
                      "lib.lists.commonPrefix shouldn't evaluate this",
                    ),
                  ],
                ),
              expected: [1n],
            }),
          testListCommonPrefixLong: () =>
            scope.let$({
              longList: (scope) =>
                scope.apply$(
                  scope.genList,
                  () => scope.func$("n", (scope) => scope.n),
                  100000n,
                ),
            }).in$((scope) =>
              scope.attrSet$({
                expr: () =>
                  scope.apply$(
                    scope.lists["commonPrefix"],
                    () => scope.longList,
                    () => scope.longList,
                  ),
                expected: () => scope.longList,
              })
            ),
          testSort: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.sort, () => scope.builtins["lessThan"], [
                  40n,
                  2n,
                  30n,
                  42n,
                ]),
              expected: [2n, 30n, 40n, 42n],
            }),
          testSortOn: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.sortOn, () => scope.stringLength, [
                  "aa",
                  "b",
                  "cccc",
                ]),
              expected: ["b", "aa", "cccc"],
            }),
          testSortOnEmpty: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.sortOn,
                  () => scope.apply$(scope.throw, "nope"),
                  [],
                ),
              expected: [],
            }),
          testSortOnIncomparable: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.map, () =>
                  scope.func$("x", (scope) =>
                    scope.apply$(scope.x["f"], () =>
                      scope.x["ok"])), () =>
                  scope.apply$(scope.sortOn, () =>
                    scope.func$("x", (scope) =>
                      scope.x["ok"]), () => [
                    scope.attrSet$({
                      ok: 1n,
                      f: () =>
                        scope.func$("x", (scope) => scope.x),
                    }),
                    scope.attrSet$({
                      ok: 3n,
                      f: () =>
                        scope.func$(
                          "x",
                          (scope) => scope.operators$.add(scope.x, 3n),
                        ),
                    }),
                    scope.attrSet$({
                      ok: 2n,
                      f: () => scope.func$("x", (scope) => scope.x),
                    }),
                  ])),
              expected: [1n, 2n, 6n],
            }),
          testReplaceString: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.replaceString,
                  "world",
                  "Nix",
                  "Hello, world!",
                ),
              expected: "Hello, Nix!",
            }),
          testReplicate: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.replicate, 3n, "a"),
              expected: ["a", "a", "a"],
            }),
          testToIntShouldConvertStringToInt: () =>
            scope.attrSet$({
              expr: () => scope.apply$(scope.toInt, "27"),
              expected: 27n,
            }),
          testToIntShouldThrowErrorIfItCouldNotConvertToInt: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.builtins["tryEval"], () =>
                  scope.apply$(scope.toInt, '"foo"')),
              expected: { success: false, value: false },
            }),
          testHasAttrByPathTrue: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.hasAttrByPath, ["a", "b"], {
                  a: { b: "yey" },
                }),
              expected: true,
            }),
          testHasAttrByPathFalse: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.hasAttrByPath, ["a", "b"], {
                  a: { c: "yey" },
                }),
              expected: false,
            }),
          testHasAttrByPathNonStrict: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.hasAttrByPath, [], () =>
                  scope.apply$(scope.throw, "do not use")),
              expected: true,
            }),
          testLongestValidPathPrefix_empty_empty: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.attrsets["longestValidPathPrefix"], [], {}),
              expected: [],
            }),
          testLongestValidPathPrefix_empty_nonStrict: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.attrsets["longestValidPathPrefix"], [], () =>
                  scope.apply$(scope.throw, "do not use")),
              expected: [],
            }),
          testLongestValidPathPrefix_zero: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.attrsets["longestValidPathPrefix"],
                  () => ["a", scope.apply$(scope.throw, "do not use")],
                  { d: null },
                ),
              expected: [],
            }),
          testLongestValidPathPrefix_zero_b: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.attrsets["longestValidPathPrefix"], [
                  "z",
                  "z",
                ], "remarkably harmonious"),
              expected: [],
            }),
          testLongestValidPathPrefix_one: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.attrsets["longestValidPathPrefix"], [
                  "a",
                  "b",
                  "c",
                ], { a: null }),
              expected: ["a"],
            }),
          testLongestValidPathPrefix_two: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.attrsets["longestValidPathPrefix"], [
                  "a",
                  "b",
                  "c",
                ], () =>
                  scope.attrSet$({
                    ...scope.deepSet$(["a", "b"], null),
                  })),
              expected: ["a", "b"],
            }),
          testLongestValidPathPrefix_three: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.attrsets["longestValidPathPrefix"], [
                  "a",
                  "b",
                  "c",
                ], () =>
                  scope.attrSet$({
                    ...scope.deepSet$(["a", "b", "c"], null),
                  })),
              expected: ["a", "b", "c"],
            }),
          testLongestValidPathPrefix_three_extra: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.attrsets["longestValidPathPrefix"], [
                  "a",
                  "b",
                  "c",
                ], () =>
                  scope.attrSet$({
                    ...scope.deepSet$(["a", "b", "c", "d"], () =>
                      scope.apply$(scope.throw, "nope")),
                  })),
              expected: ["a", "b", "c"],
            }),
          testFindFirstIndexExample1: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.lists["findFirstIndex"], () =>
                  scope.func$("x", (scope) =>
                    scope.operators$.greaterThan(scope.x, 3n)), () =>
                  scope.apply$(
                    scope.abort,
                    "index found, so a default must not be evaluated",
                  ), [1n, 6n, 4n]),
              expected: 1n,
            }),
          testFindFirstIndexExample2: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.lists["findFirstIndex"],
                  () =>
                    scope.func$(
                      "x",
                      (scope) => scope.operators$.greaterThan(scope.x, 9n),
                    ),
                  "a very specific default",
                  [1n, 6n, 4n],
                ),
              expected: "a very specific default",
            }),
          testFindFirstIndexEmpty: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.lists["findFirstIndex"],
                  () =>
                    scope.apply$(
                      scope.abort,
                      "when the list is empty, the predicate is not needed",
                    ),
                  null,
                  [],
                ),
              expected: null,
            }),
          testFindFirstIndexSingleMatch: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.lists["findFirstIndex"],
                  () =>
                    scope.func$(
                      "x",
                      (scope) => scope.operators$.equal(scope.x, 5n),
                    ),
                  null,
                  [5n],
                ),
              expected: 0n,
            }),
          testFindFirstIndexSingleDefault: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.lists["findFirstIndex"],
                  () => scope.func$("x", (scope) => false),
                  null,
                  () => [
                    scope.apply$(
                      scope.abort,
                      "if the predicate doesn't access the value, it must not be evaluated",
                    ),
                  ],
                ),
              expected: null,
            }),
          testFindFirstIndexNone: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.builtins["tryEval"], () =>
                  scope.apply$(
                    scope.lists["findFirstIndex"],
                    () =>
                      scope.func$(
                        "x",
                        (scope) => scope.operators$.equal(scope.x, 2n),
                      ),
                    null,
                    () => [
                      1n,
                      scope.apply$(
                        scope.throw,
                        "the last element must be evaluated when there's no match",
                      ),
                    ],
                  )),
              expected: { success: false, value: false },
            }),
          testFindFirstIndexBig: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.lists["findFirstIndex"],
                  () =>
                    scope.func$("x", (scope) =>
                      scope.operators$.equal(scope.x, 1000000n)),
                  null,
                  () => scope.apply$(scope.range, 0n, 1000000n),
                ),
              expected: 1000000n,
            }),
          testFindFirstIndexLazy: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.lists["findFirstIndex"],
                  () =>
                    scope.func$("x", (scope) =>
                      scope.operators$.equal(scope.x, 1n)),
                  null,
                  () => [
                    1n,
                    scope.apply$(
                      scope.abort,
                      "list elements after the match must not be evaluated",
                    ),
                  ],
                ),
              expected: 0n,
            }),
          testFindFirstExample1: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.lists["findFirst"],
                  () =>
                    scope.func$(
                      "x",
                      (scope) => scope.operators$.greaterThan(scope.x, 3n),
                    ),
                  7n,
                  [1n, 6n, 4n],
                ),
              expected: 6n,
            }),
          testFindFirstExample2: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.lists["findFirst"],
                  () =>
                    scope.func$("x", (scope) =>
                      scope.operators$.greaterThan(scope.x, 9n)),
                  7n,
                  [1n, 6n, 4n],
                ),
              expected: 7n,
            }),
          testAllUnique_true: () =>
            scope.attrSet$({
              expr: () => scope.apply$(scope.allUnique, [3n, 2n, 4n, 1n]),
              expected: true,
            }),
          testAllUnique_false: () =>
            scope.attrSet$({
              expr: () => scope.apply$(scope.allUnique, [3n, 2n, 3n, 4n]),
              expected: false,
            }),
          testUniqueStrings_empty: () =>
            scope.attrSet$({
              expr: () => scope.apply$(scope.uniqueStrings, []),
              expected: [],
            }),
          testUniqueStrings_singles: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.uniqueStrings, ["all", "unique", "already"]),
              expected: ["all", "already", "unique"],
            }),
          testUniqueStrings_allDuplicates: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.uniqueStrings, ["dup", "dup", "dup"]),
            expected: ["dup"],
          }),
          testUniqueStrings_some_duplicates: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.uniqueStrings, [
                  "foo",
                  "foo",
                  "bar",
                  "bar",
                  "baz",
                ]),
              expected: ["bar", "baz", "foo"],
            }),
          testUniqueStrings_unicode: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.uniqueStrings, [
                  "café",
                  "@",
                  "#",
                  "@",
                  "#",
                  "$",
                  "😎",
                  "😎",
                  "🙃",
                  "",
                  "",
                ]),
              expected: ["", "#", "$", "@", "café", "😎", "🙃"],
            }),
          testGenAttrs: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.attrsets["genAttrs"],
                  ["foo", "bar"],
                  () =>
                    scope.func$(
                      "name",
                      (scope) => scope.operators$.add("x_", scope.name),
                    ),
                ),
              expected: { foo: "x_foo", bar: "x_bar" },
            }),
          "testGenAttrs'": () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.attrsets["genAttrs'"],
                  ["foo", "bar"],
                  () =>
                    scope.func$("s", (scope) =>
                      scope.apply$(
                        scope.nameValuePair,
                        () => (scope.operators$.add("x_", scope.s)),
                        () => (scope.operators$.add("y_", scope.s)),
                      )),
                ),
              expected: { x_foo: "y_foo", x_bar: "y_bar" },
            }),
          "testGenAttrs'Example2": () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.attrsets["genAttrs'"],
                  [{ x: "foo", y: "baz" }],
                  () =>
                    scope.func$("s", (scope) =>
                      scope.apply$(
                        scope.lib["nameValuePair"],
                        () => (scope.operators$.add("x_", scope.s["x"])),
                        () => (scope.operators$.add("y_", scope.s["y"])),
                      )),
                ),
              expected: { x_foo: "y_baz" },
            }),
          "testGenAttrs'ConflictingName": () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.attrsets["genAttrs'"],
                  ["foo", "bar", "baz"],
                  () =>
                    scope.func$("s", (scope) =>
                      scope.apply$(scope.nameValuePair, "foo", () => scope.s)),
                ),
              expected: { foo: "foo" },
            }),
          testConcatMapAttrs: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.concatMapAttrs, () =>
                  scope.func$(
                    "name",
                    (scope) =>
                      scope.func$("value", (scope) =>
                        scope.attrSet$({
                          ...scope.deepSet$([scope.name], () => scope.value),
                          ...scope.deepSet$([
                            scope.operators$.add(scope.name, scope.value),
                          ], () => scope.value),
                        })),
                  ), { foo: "bar", foobar: "baz" }),
              expected: { foo: "bar", foobar: "baz", foobarbaz: "baz" },
            }),
          testConcatMapAttrsDuplicates: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.concatMapAttrs,
                  () =>
                    scope.func$("name", (scope) =>
                      scope.func$("value", (scope) =>
                        scope.attrSet$({
                          final: () =>
                            scope.value,
                        }))),
                  { a: 1n, b: 2n },
                ),
              expected: { final: 2n },
            }),
          testFilterAttrs: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.filterAttrs, () =>
                  scope.func$("n", (scope) =>
                    scope.func$(
                      "v",
                      (
                        scope,
                      ) => ((scope.operators$.notEqual(scope.n, "a")) &&
                        (scope.operators$.equal(
                          scope.operators$.selectOrDefault(
                            scope.v,
                            ["hello"],
                            false,
                          ),
                          true,
                        ))),
                    )), () =>
                  scope.attrSet$({
                    ...scope.deepSet$(["a", "hello"], true),
                    ...scope.deepSet$(["b", "hello"], true),
                    c: { hello: true, world: false },
                    ...scope.deepSet$(["d", "hello"], false),
                  })),
              expected: () =>
                scope.attrSet$({
                  ...scope.deepSet$(["b", "hello"], true),
                  c: { hello: true, world: false },
                }),
            }),
          testFoldlAttrs: () =>
            scope.attrSet$({
              expr: () =>
                scope.attrSet$({
                  example: () =>
                    scope.apply$(
                      scope.foldlAttrs,
                      () =>
                        scope.func$("acc", (scope) =>
                          scope.func$("name", (scope) =>
                            scope.func$("value", (scope) =>
                              scope.attrSet$({
                                sum: () =>
                                  scope.operators$.add(
                                    scope.acc["sum"],
                                    scope.value,
                                  ),
                                names: () =>
                                  scope.operators$.listConcat(
                                    scope.acc["names"],
                                    [scope.name],
                                  ),
                              })))),
                      { sum: 0n, names: [] },
                      { foo: 1n, bar: 10n },
                    ),
                  emptySet: () =>
                    scope.apply$(
                      scope.foldlAttrs,
                      () => scope.apply$(scope.throw, "function not needed"),
                      123n,
                      {},
                    ),
                  valuesNotNeeded: () =>
                    scope.apply$(
                      scope.foldlAttrs,
                      () =>
                        scope.func$("acc", (scope) =>
                          scope.func$("_name", (scope) =>
                            scope.func$("_v", (scope) =>
                              scope.acc))),
                      3n,
                      () =>
                        scope.attrSet$({
                          z: () =>
                            scope.apply$(scope.throw, "value z not needed"),
                          a: () =>
                            scope.apply$(scope.throw, "value a not needed"),
                        }),
                    ),
                  trivialAcc: () =>
                    scope.apply$(
                      scope.foldlAttrs,
                      () =>
                        scope.func$("acc", (scope) =>
                          scope.func$("_name", (scope) =>
                            scope.func$("v", (scope) =>
                              scope.operators$.add(
                                scope.operators$.multiply(scope.acc, 10n),
                                scope.v,
                              )))),
                      1n,
                      { z: 1n, a: 2n },
                    ),
                }),
              expected: {
                example: { sum: 11n, names: ["bar", "foo"] },
                emptySet: 123n,
                valuesNotNeeded: 3n,
                trivialAcc: 121n,
              },
            }),
          testMergeAttrsListExample1: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.attrsets["mergeAttrsList"], [
                { a: 0n, b: 1n },
                { c: 2n, d: 3n },
              ]),
            expected: { a: 0n, b: 1n, c: 2n, d: 3n },
          }),
          testMergeAttrsListExample2: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.attrsets["mergeAttrsList"], [{ a: 0n }, {
                a: 1n,
              }]),
            expected: { a: 1n },
          }),
          testMergeAttrsListExampleMany: () =>
            scope.let$({
              list: (scope) =>
                scope.apply$(scope.genList, () =>
                  scope.func$("n", (scope) =>
                    scope.apply$(scope.listToAttrs, () =>
                      scope.apply$(scope.genList, () =>
                        scope.func$("m", (scope) =>
                          scope.let$({
                            str: (scope) =>
                              scope.str$(
                                () => [
                                  "halfn",
                                  scope.apply$(
                                    scope.toString,
                                    () => (scope.operators$.divide(
                                      scope.n,
                                      2n,
                                    )),
                                  ),
                                  "m",
                                  scope.apply$(scope.toString, () => scope.m),
                                ]
                              ),
                          }).in$((scope) =>
                            scope.apply$(
                              scope.nameValuePair,
                              () => scope.str,
                              () => scope.str,
                            )
                          )), 100n))), 100n),
            }).in$((scope) =>
              scope.attrSet$({
                expr: () =>
                  scope.apply$(
                    scope.attrsets["mergeAttrsList"],
                    () => scope.list,
                  ),
                expected: () =>
                  scope.apply$(
                    scope["foldl'"],
                    () => scope.mergeAttrs,
                    {},
                    () => scope.list,
                  ),
              })
            ),
          testRecursiveUpdateUntil: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.recursiveUpdateUntil,
                  () =>
                    scope.func$("path", (scope) =>
                      scope.func$("l", (scope) =>
                        scope.func$("r", (scope) =>
                          scope.operators$.equal(scope.path, ["foo"])))),
                  () =>
                    scope.attrSet$({
                      ...scope.deepSet$(["foo", "bar"], 1n),
                      ...scope.deepSet$(["foo", "baz"], 2n),
                      bar: 3n,
                    }),
                  () =>
                    scope.attrSet$({
                      ...scope.deepSet$(["foo", "bar"], 1n),
                      ...scope.deepSet$(["foo", "quz"], 2n),
                      baz: 4n,
                    }),
                ),
              expected: () =>
                scope.attrSet$({
                  ...scope.deepSet$(["foo", "bar"], 1n),
                  ...scope.deepSet$(["foo", "quz"], 2n),
                  bar: 3n,
                  baz: 4n,
                }),
            }),
          testMatchAttrsMatchingExact: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.matchAttrs, { cpu: { bits: 64n } }, {
                cpu: { bits: 64n },
              }),
            expected: true,
          }),
          testMatchAttrsMismatch: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.matchAttrs, { cpu: { bits: 128n } }, {
                cpu: { bits: 64n },
              }),
            expected: false,
          }),
          testMatchAttrsMatchingImplicit: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.matchAttrs, { cpu: {} }, {
                cpu: { bits: 64n },
              }),
            expected: true,
          }),
          testMatchAttrsMissingAttrs: () => scope.attrSet$({
            expr: () => scope.apply$(scope.matchAttrs, { cpu: {} }, {}),
            expected: false,
          }),
          testOverrideExistingEmpty: () => scope.attrSet$({
            expr: () => scope.apply$(scope.overrideExisting, {}, { a: 1n }),
            expected: {},
          }),
          testOverrideExistingDisjoint: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.overrideExisting, { b: 2n }, { a: 1n }),
            expected: { b: 2n },
          }),
          testOverrideExistingOverride: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.overrideExisting, { a: 3n, b: 2n }, {
                  a: 1n,
                }),
              expected: { a: 1n, b: 2n },
            }),
          testListAttrsReverse: () =>
            scope.let$({
              exampleAttrs: {
                foo: 1n,
                bar: "asdf",
                baz: [1n, 3n, 3n, 7n],
                fnord: null,
              },
              exampleSingletonList: [{ name: "foo", value: 1n }],
            }).in$((scope) =>
              scope.attrSet$({
                expr: () =>
                  scope.attrSet$({
                    isReverseToListToAttrs: () =>
                      scope.operators$.equal(
                        scope.apply$(scope.builtins["listToAttrs"], () =>
                          scope.apply$(scope.attrsToList, () =>
                            scope.exampleAttrs)),
                        scope.exampleAttrs,
                      ),
                    isReverseToAttrsToList: () =>
                      scope.operators$.equal(
                        scope.apply$(scope.attrsToList, () =>
                          scope.apply$(scope.builtins["listToAttrs"], () =>
                            scope.exampleSingletonList)),
                        scope.exampleSingletonList,
                      ),
                    testDuplicatePruningBehaviour: () =>
                      scope.apply$(scope.attrsToList, () =>
                        scope.apply$(scope.builtins["listToAttrs"], [{
                          name: "a",
                          value: 2n,
                        }, { name: "a", value: 1n }])),
                  }),
                expected: {
                  isReverseToAttrsToList: true,
                  isReverseToListToAttrs: true,
                  testDuplicatePruningBehaviour: [{ name: "a", value: 2n }],
                },
              })
            ),
          testAttrsToListsCanDealWithFunctions: () =>
            scope.apply$(scope.testingEval, () =>
              scope.apply$(scope.attrsToList, () =>
                scope.attrSet$({
                  someFunc: () =>
                    scope.func$(
                      "a",
                      (scope) => scope.operators$.add(scope.a, 1n),
                    ),
                }))),
          testFix: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.fix, () =>
                  scope.func$("x", (scope) =>
                    scope.attrSet$({
                      a: () =>
                        scope.if$(scope.operators$.hasAttr(scope.x, "a")).then$(
                          "a",
                        ).else$("b"),
                    }))),
              expected: { a: "a" },
            }),
          testToExtension: () =>
            scope.attrSet$({
              expr: () => [
                scope.apply$(scope.fix, () =>
                  scope.func$("final", (scope) =>
                    scope.attrSet$({
                      a: 0n,
                      c: () => scope.final["a"],
                    }))),
                scope.apply$(scope.fix, () =>
                  scope.apply$(
                    scope.extends,
                    () => scope.apply$(scope.toExtension, { a: 1n, b: 2n }),
                    () =>
                      scope.func$("final", (scope) =>
                        scope.attrSet$({
                          a: 0n,
                          c: () => scope.final["a"],
                        })),
                  )),
                scope.apply$(scope.fix, () =>
                  scope.apply$(scope.extends, () =>
                    scope.apply$(scope.toExtension, () =>
                      scope.func$("prev", (scope) =>
                        scope.attrSet$({
                          a: 1n,
                          b: () => scope.prev["a"],
                        }))), () =>
                    scope.func$("final", (scope) =>
                      scope.attrSet$({
                        a: 0n,
                        c: () => scope.final["a"],
                      })))),
                scope.apply$(scope.fix, () =>
                  scope.apply$(scope.extends, () =>
                    scope.apply$(scope.toExtension, () =>
                      scope.func$("final", (scope) =>
                        scope.func$("prev", (scope) =>
                          scope.attrSet$({
                            a: 1n,
                            b: () => scope.prev["a"],
                            c: () => scope.operators$.add(scope.final["a"], 1n),
                          })))), () =>
                    scope.func$("final", (scope) =>
                      scope.attrSet$({
                        a: 0n,
                        c: () => scope.final["a"],
                      })))),
              ],
              expected: [{ a: 0n, c: 0n }, { a: 1n, b: 2n, c: 1n }, {
                a: 1n,
                b: 0n,
                c: 1n,
              }, { a: 1n, b: 0n, c: 2n }],
            }),
          testMkKeyValueDefault: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.generators["mkKeyValueDefault"],
                  {},
                  ":",
                  "f:oo",
                  "bar",
                ),
              expected: "f\\:oo:bar",
            }),
          testMkValueString: () =>
            scope.attrSet$({
              expr: () =>
                scope.let$({
                  vals: {
                    int: 42n,
                    string: 'fo"o',
                    bool: true,
                    bool2: false,
                    null: null,
                  },
                }).in$((scope) =>
                  scope.apply$(scope.mapAttrs, () =>
                    scope.apply$(scope.const, () =>
                      scope.apply$(
                        scope.generators["mkValueStringDefault"],
                        {},
                      )), () => scope.vals)
                ),
              expected: {
                int: "42",
                string: 'fo"o',
                bool: "true",
                bool2: "false",
                null: "null",
              },
            }),
          testToKeyValue: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.generators["toKeyValue"],
                  {},
                  () => ({ key: "value", "other=key": "baz" }),
                ),
              expected: "key=value\nother\\=key=baz\n",
            }),
          testToINIEmpty: () =>
            scope.attrSet$({
              expr: () => scope.apply$(scope.generators["toINI"], {}, {}),
              expected: "",
            }),
          testToINIEmptySection: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.generators["toINI"], {}, {
                  foo: {},
                  bar: {},
                }),
              expected: "[bar]\n\n[foo]\n",
            }),
          testToINIDuplicateKeys: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.generators["toINI"], {
                  listsAsDuplicateKeys: true,
                }, () =>
                  scope.attrSet$({
                    ...scope.deepSet$(["foo", "bar"], true),
                    ...scope.deepSet$(["baz", "qux"], [1n, false]),
                  })),
              expected: "[baz]\nqux=1\nqux=false\n\n[foo]\nbar=true\n",
            }),
          testToINIDefaultEscapes: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.generators["toINI"], {}, () =>
                  scope.attrSet$({
                    "no [ and ] allowed unescaped": () => ({
                      "and also no = in keys": 42n,
                    }),
                  })),
              expected:
                "[no \\[ and \\] allowed unescaped]\nand also no \\= in keys=42\n",
            }),
          testToINIDefaultFull: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.generators["toINI"], {}, () =>
                  scope.attrSet$({
                    "section 1": {
                      attribute1: 5n,
                      x: "Me-se JarJar Binx",
                      boolean: false,
                    },
                    "foo[]": () => ({ "he\\h=he": "this is okay" }),
                  })),
              expected:
                "[foo\\[\\]]\nhe\\h\\=he=this is okay\n\n[section 1]\nattribute1=5\nboolean=false\nx=Me-se JarJar Binx\n",
            }),
          testToINIWithGlobalSectionEmpty: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.generators["toINIWithGlobalSection"], {}, {
                  globalSection: {},
                  sections: {},
                }),
              expected: "",
            }),
          testToINIWithGlobalSectionGlobalEmptyIsTheSameAsToINI: () =>
            scope.let$({
              sections: (scope) =>
                scope.attrSet$({
                  "section 1": { attribute1: 5n, x: "Me-se JarJar Binx" },
                  foo: () => ({ "he\\h=he": "this is okay" }),
                }),
            }).in$((scope) =>
              scope.attrSet$({
                expr: () =>
                  scope.apply$(
                    scope.generators["toINIWithGlobalSection"],
                    {},
                    () =>
                      scope.attrSet$({
                        globalSection: {},
                        sections: () => scope.sections,
                      }),
                  ),
                expected: () =>
                  scope.apply$(scope.generators["toINI"], {}, () =>
                    scope.sections),
              })
            ),
          testToINIWithGlobalSectionFull: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.generators["toINIWithGlobalSection"],
                  {},
                  () =>
                    scope.attrSet$({
                      globalSection: { foo: "bar", test: false },
                      sections: () =>
                        scope.attrSet$({
                          "section 1": {
                            attribute1: 5n,
                            x: "Me-se JarJar Binx",
                          },
                          foo: () => ({ "he\\h=he": "this is okay" }),
                        }),
                    }),
                ),
              expected:
                "foo=bar\ntest=false\n\n[foo]\nhe\\h\\=he=this is okay\n\n[section 1]\nattribute1=5\nx=Me-se JarJar Binx\n",
            }),
          testToGitINI: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.generators["toGitINI"], () =>
                  scope.attrSet$({
                    user: {
                      email: "user@example.org",
                      name: "John Doe",
                      signingKey: "00112233445566778899AABBCCDDEEFF",
                    },
                    ...scope.deepSet$(["gpg", "program"], "path-to-gpg"),
                    ...scope.deepSet$(["tag", "gpgSign"], true),
                    ...scope.deepSet$(
                      ["include", "path"],
                      "~/path/to/config.inc",
                    ),
                    ...scope.deepSet$(
                      ["includeIf", "gitdif:~/src/dir", "path"],
                      "~/path/to/conditional.inc",
                    ),
                    extra: () =>
                      scope.attrSet$({
                        boolean: true,
                        integer: 38n,
                        name: "value",
                        ...scope.deepSet$(["subsection", "value"], "test"),
                      }),
                  })),
              expected: () =>
                scope.str$(
                  () => [
                    "[extra]\n",
                    "\t",
                    "boolean = true\n",
                    "\t",
                    "integer = 38\n",
                    "\t",
                    'name = "value"\n\n[extra "subsection"]\n',
                    "\t",
                    'value = "test"\n\n[gpg]\n',
                    "\t",
                    'program = "path-to-gpg"\n\n[include]\n',
                    "\t",
                    'path = "~/path/to/config.inc"\n\n[includeIf "gitdif:~/src/dir"]\n',
                    "\t",
                    'path = "~/path/to/conditional.inc"\n\n[tag]\n',
                    "\t",
                    "gpgSign = true\n\n[user]\n",
                    "\t",
                    'email = "user@example.org"\n',
                    "\t",
                    'name = "John Doe"\n',
                    "\t",
                    'signingKey = "00112233445566778899AABBCCDDEEFF"\n',
                  ]
                ),
            }),
          testToJSONSimple: () =>
            scope.let$({
              val: { foobar: ["baz", 1n, 2n, 3n] },
            }).in$((scope) =>
              scope.attrSet$({
                expr: () =>
                  scope.apply$(scope.generators["toJSON"], {}, () =>
                    scope.val),
                expected: () =>
                  scope.apply$(scope.builtins["toJSON"], () =>
                    scope.val),
              })
            ),
          testToYAMLSimple: () =>
            scope.let$({
              val: { list: [{ one: 1n }, { two: 2n }], all: 42n },
            }).in$((scope) =>
              scope.attrSet$({
                expr: () =>
                  scope.apply$(scope.generators["toYAML"], {}, () => scope.val),
                expected: () =>
                  scope.apply$(scope.builtins["toJSON"], () => scope.val),
              })
            ),
          testToPretty: () =>
            scope.let$({
              deriv: (scope) =>
                scope.apply$(scope.derivation, {
                  name: "test",
                  builder: "/bin/sh",
                  system: "aarch64-linux",
                }),
            }).in$((scope) =>
              scope.attrSet$({
                expr: () =>
                  scope.apply$(scope.mapAttrs, () =>
                    scope.apply$(scope.const, () =>
                      scope.apply$(scope.generators["toPretty"], {
                        multiline: false,
                      })), () =>
                    scope.recAttrSet$({
                      int: 42n,
                      float: 0.1337,
                      bool: true,
                      emptystring: "",
                      string: 'fn${o}"r\\d',
                      newlinestring: "\n",
                      path: (scope) =>
                        scope.operators$.add(
                          new scope.Path$(["/."], []),
                          "/foo",
                        ),
                      null_: null,
                      function: (scope) =>
                        scope.func$("x", (scope) =>
                          scope.x),
                      functionArgs: (scope) =>
                        scope.func$(
                          { arg: 4n, foo: scope.nixArg$.NoDefault },
                          (scope) => scope.arg,
                        ),
                      list: (scope) => [3n, 4n, scope.function, [false]],
                      emptylist: [],
                      attrs: (scope) => ({
                        assert: false,
                        foo: null,
                        "foo b/ar": "baz",
                      }),
                      emptyattrs: {},
                      drv: (scope) => scope.deriv,
                    })),
                expected: () =>
                  scope.recAttrSet$({
                    int: "42",
                    float: "0.1337",
                    bool: "true",
                    emptystring: '""',
                    string: '"fn\\${o}\\"r\\\\d"',
                    newlinestring: '"\\n"',
                    path: "/foo",
                    null_: "null",
                    function: "<function>",
                    functionArgs: "<function, args: {arg?, foo}>",
                    list: (scope) =>
                      scope.str$(
                        () => ["[ 3 4 ", scope.function, " [ false ] ]"]
                      ),
                    emptylist: "[ ]",
                    attrs:
                      '{ "assert" = false; foo = null; "foo b/ar" = "baz"; }',
                    emptyattrs: "{ }",
                    drv: (scope) =>
                      scope.str$(
                        () => ["<derivation ", scope.deriv["name"], ">"]
                      ),
                  }),
              })
            ),
          testToPrettyLimit: () =>
            scope.let$({
              ...scope.deepSet$(["a", "b"], 1n),
              ...scope.deepSet$(["a", "c"], (scope) =>
                scope.a),
            }).in$((scope) =>
              scope.attrSet$({
                expr: () =>
                  scope.apply$(
                    scope.generators["toPretty"],
                    {},
                    () =>
                      scope.apply$(scope.generators["withRecursion"], {
                        throwOnDepthLimit: false,
                        depthLimit: 2n,
                      }, () => scope.a),
                  ),
                expected:
                  '{\n  b = 1;\n  c = {\n    b = "<unevaluated>";\n    c = {\n      b = "<unevaluated>";\n      c = "<unevaluated>";\n    };\n  };\n}',
              })
            ),
          testToPrettyLimitThrow: () =>
            scope.let$({
              ...scope.deepSet$(["a", "b"], 1n),
              ...scope.deepSet$(["a", "c"], (scope) => scope.a),
            }).in$((scope) =>
              scope.attrSet$({
                expr: () =>
                  scope.apply$(
                    scope.builtins["tryEval"],
                    () =>
                      scope.apply$(scope.generators["toPretty"], {}, () =>
                        scope.apply$(scope.generators["withRecursion"], {
                          depthLimit: 2n,
                        }, () =>
                          scope.a)),
                  )["success"],
                expected: false,
              })
            ),
          testWithRecursionDealsWithFunctors: () =>
            scope.let$({
              functor: (scope) =>
                scope.attrSet$({
                  __functor: () =>
                    scope.func$("self", (scope) =>
                      scope.func$({
                        a: scope.nixArg$.NoDefault,
                        b: scope.nixArg$.NoDefault,
                      }, (scope) =>
                        null)),
                }),
              a: (scope) =>
                scope.attrSet$({
                  value: "1234",
                  b: () => scope.functor,
                  ...scope.deepSet$(["c", "d"], () => scope.functor),
                }),
            }).in$((scope) =>
              scope.attrSet$({
                expr: () =>
                  scope.apply$(
                    scope.generators["toPretty"],
                    {},
                    () =>
                      scope.apply$(scope.generators["withRecursion"], {
                        depthLimit: 1n,
                        throwOnDepthLimit: false,
                      }, () => scope.a),
                  ),
                expected:
                  '{\n  b = <function, args: {a, b}>;\n  c = {\n    d = "<unevaluated>";\n  };\n  value = "<unevaluated>";\n}',
              })
            ),
          testToPrettyMultiline: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.mapAttrs,
                  () =>
                    scope.apply$(scope.const, () =>
                      scope.apply$(scope.generators["toPretty"], {})),
                  () =>
                    scope.attrSet$({
                      list: [3n, 4n, [false]],
                      attrs: () =>
                        scope.attrSet$({
                          foo: null,
                          ...scope.deepSet$(["bar", "foo"], "baz"),
                        }),
                      newlinestring: "\n",
                      multilinestring: "hello\n${there}\nte''st\n",
                      "multilinestring'": "hello\nthere\ntest",
                    }),
                ),
              expected: {
                list: "[\n  3\n  4\n  [\n    false\n  ]\n]",
                attrs: '{\n  bar = {\n    foo = "baz";\n  };\n  foo = null;\n}',
                newlinestring: "''\n  \n''",
                multilinestring: "''\n  hello\n  ''${there}\n  te'''st\n''",
                "multilinestring'": "''\n  hello\n  there\n  test''",
              },
            }),
          testToPrettyAllowPrettyValues: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.generators["toPretty"], {
                  allowPrettyValues: true,
                }, () =>
                  scope.attrSet$({
                    __pretty: () =>
                      scope.func$("v", (scope) =>
                        scope.operators$.add(
                          scope.operators$.add("«", scope.v),
                          "»",
                        )),
                    val: "foo",
                  })),
              expected: "«foo»",
            }),
          testToPlistUnescaped: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.mapAttrs,
                  () =>
                    scope.apply$(scope.const, () =>
                      scope.apply$(scope.generators["toPlist"], {})),
                  () =>
                    scope.attrSet$({
                      value: () =>
                        scope.attrSet$({
                          ...scope.deepSet$(["nested", "values"], () =>
                            scope.attrSet$({
                              int: 42n,
                              float: 0.1337,
                              bool: true,
                              emptystring: "",
                              string: 'fn${o}"r\\d',
                              newlinestring: "\n",
                              path: () =>
                                scope.operators$.add(
                                  new scope.Path$(["/."], []),
                                  "/foo",
                                ),
                              null_: null,
                              list: [3n, 4n, "test"],
                              emptylist: [],
                              attrs: () => ({ foo: null, "foo b/ar": "baz" }),
                              emptyattrs: {},
                              "keys are not <escaped>":
                                "and < neither are string values",
                            })),
                        }),
                    }),
                ),
              expected: () =>
                scope.attrSet$({
                  value: () =>
                    scope.apply$(
                      scope.builtins["readFile"],
                      new scope.Path$([
                        new URL(
                          "./test-to-plist-unescaped-expected.plist",
                          import.meta.url,
                        ).pathname,
                      ], []),
                    ),
                }),
            }),
          testToPlistEscaped: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.mapAttrs,
                  () =>
                    scope.apply$(scope.const, () =>
                      scope.apply$(scope.generators["toPlist"], {
                        escape: true,
                      })),
                  () =>
                    scope.attrSet$({
                      value: () =>
                        scope.attrSet$({
                          ...scope.deepSet$(["nested", "values"], () =>
                            scope.attrSet$({
                              int: 42n,
                              float: 0.1337,
                              bool: true,
                              emptystring: "",
                              string: 'fn${o}"r\\d',
                              newlinestring: "\n",
                              path: () =>
                                scope.operators$.add(
                                  new scope.Path$(["/."], []),
                                  "/foo",
                                ),
                              null_: null,
                              list: [3n, 4n, "test"],
                              emptylist: [],
                              attrs: () => ({ foo: null, "foo b/ar": "baz" }),
                              emptyattrs: {},
                              "keys are <escaped>":
                                "and < so are string values",
                            })),
                        }),
                    }),
                ),
              expected: () =>
                scope.attrSet$({
                  value: () =>
                    scope.apply$(
                      scope.builtins["readFile"],
                      new scope.Path$([
                        new URL(
                          "./test-to-plist-escaped-expected.plist",
                          import.meta.url,
                        ).pathname,
                      ], []),
                    ),
                }),
            }),
          testToLuaEmptyAttrSet: () =>
            scope.attrSet$({
              expr: () => scope.apply$(scope.generators["toLua"], {}, {}),
              expected: "{}",
            }),
          testToLuaEmptyList: () =>
            scope.attrSet$({
              expr: () => scope.apply$(scope.generators["toLua"], {}, []),
              expected: "{}",
            }),
          testToLuaListOfVariousTypes: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.generators["toLua"], {}, [
                  null,
                  43n,
                  3.14159,
                  true,
                ]),
              expected: "{\n  nil,\n  43,\n  3.14159,\n  true\n}",
            }),
          testToLuaString: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.generators["toLua"],
                  {},
                  "double-quote (\") and single quotes (')",
                ),
              expected: '"double-quote (\\") and single quotes (\')"',
            }),
          testToLuaAttrsetWithLuaInline: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.generators["toLua"], {}, () =>
                  scope.attrSet$({
                    x: () =>
                      scope.apply$(
                        scope.generators["mkLuaInline"],
                        '"abc" .. "def"',
                      ),
                  })),
              expected: '{\n  ["x"] = ("abc" .. "def")\n}',
            }),
          testToLuaAttrsetWithSpaceInKey: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.generators["toLua"],
                  {},
                  () => ({ 'some space and double-quote (")': 42n }),
                ),
              expected: '{\n  ["some space and double-quote (\\")"] = 42\n}',
            }),
          testToLuaWithoutMultiline: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.generators["toLua"], { multiline: false }, [
                  41n,
                  43n,
                ]),
              expected: "{ 41, 43 }",
            }),
          testToLuaEmptyBindings: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.generators["toLua"], { asBindings: true }, {}),
            expected: "",
          }),
          testToLuaBindings: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.generators["toLua"], { asBindings: true }, {
                x1: 41n,
                _y: { a: 43n },
              }),
            expected: '_y = {\n  ["a"] = 43\n}\nx1 = 41\n',
          }),
          testToLuaPartialTableBindings: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.generators["toLua"],
                  { asBindings: true },
                  () => ({ "x.y": 42n }),
                ),
              expected: "x.y = 42\n",
            }),
          testToLuaIndentedBindings: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.generators["toLua"], {
                asBindings: true,
                indent: "  ",
              }, { x: { y: 42n } }),
            expected: '  x = {\n    ["y"] = 42\n  }\n',
          }),
          testToLuaBindingsWithSpace: () =>
            scope.apply$(
              scope.testingThrow,
              () =>
                scope.apply$(
                  scope.generators["toLua"],
                  { asBindings: true },
                  () => ({ "with space": 42n }),
                ),
            ),
          testToLuaBindingsWithLeadingDigit: () =>
            scope.apply$(
              scope.testingThrow,
              () =>
                scope.apply$(
                  scope.generators["toLua"],
                  { asBindings: true },
                  () => ({ "11eleven": 42n }),
                ),
            ),
          testToLuaBasicExample: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.generators["toLua"],
                  {},
                  () =>
                    scope.attrSet$({
                      cmd: ["typescript-language-server", "--stdio"],
                      ...scope.deepSet$(
                        ["settings", "workspace", "library"],
                        () =>
                          scope.apply$(
                            scope.generators["mkLuaInline"],
                            'vim.api.nvim_get_runtime_file("", true)',
                          ),
                      ),
                    }),
                ),
              expected:
                '{\n  ["cmd"] = {\n    "typescript-language-server",\n    "--stdio"\n  },\n  ["settings"] = {\n    ["workspace"] = {\n      ["library"] = (vim.api.nvim_get_runtime_file("", true))\n    }\n  }\n}',
            }),
          testToGNUCommandLine: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.cli["toGNUCommandLine"],
                  {},
                  () =>
                    scope.attrSet$({
                      data: () =>
                        scope.apply$(scope.builtins["toJSON"], { id: 0n }),
                      X: "PUT",
                      retry: 3n,
                      "retry-delay": null,
                      url: [
                        "https://example.com/foo",
                        "https://example.com/bar",
                      ],
                      silent: false,
                      verbose: true,
                    }),
                ),
              expected: [
                "-X",
                "PUT",
                "--data",
                '{"id":0}',
                "--retry",
                "3",
                "--url",
                "https://example.com/foo",
                "--url",
                "https://example.com/bar",
                "--verbose",
              ],
            }),
          testToGNUCommandLineSeparator: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.cli["toGNUCommandLine"], {
                  optionValueSeparator: "=",
                }, () =>
                  scope.attrSet$({
                    data: () =>
                      scope.apply$(scope.builtins["toJSON"], { id: 0n }),
                    X: "PUT",
                    retry: 3n,
                    "retry-delay": null,
                    url: ["https://example.com/foo", "https://example.com/bar"],
                    silent: false,
                    verbose: true,
                  })),
              expected: [
                "-X=PUT",
                '--data={"id":0}',
                "--retry=3",
                "--url=https://example.com/foo",
                "--url=https://example.com/bar",
                "--verbose",
              ],
            }),
          testToGNUCommandLineShell: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.cli["toGNUCommandLineShell"],
                  {},
                  () =>
                    scope.attrSet$({
                      data: () =>
                        scope.apply$(scope.builtins["toJSON"], { id: 0n }),
                      X: "PUT",
                      retry: 3n,
                      "retry-delay": null,
                      url: [
                        "https://example.com/foo",
                        "https://example.com/bar",
                      ],
                      silent: false,
                      verbose: true,
                    }),
                ),
              expected:
                "-X PUT --data '{\"id\":0}' --retry 3 --url https://example.com/foo --url https://example.com/bar --verbose",
            }),
          testToCommandLine: () =>
            scope.attrSet$({
              expr: () =>
                scope.let$({
                  optionFormat: (scope) =>
                    scope.func$("optionName", (scope) =>
                      scope.attrSet$({
                        option: () => scope.str$(() => ["-", scope.optionName]),
                        sep: "=",
                        explicitBool: true,
                      })),
                }).in$((scope) =>
                  scope.apply$(
                    scope.cli["toCommandLine"],
                    () => scope.optionFormat,
                    () =>
                      scope.attrSet$({
                        v: true,
                        verbose: [true, true, false, null],
                        i: ".bak",
                        testsuite: ["unit", "integration"],
                        e: ["s/a/b/", "s/b/c/"],
                        n: false,
                        data: () =>
                          scope.apply$(scope.builtins["toJSON"], { id: 0n }),
                      }),
                  )
                ),
              expected: [
                '-data={"id":0}',
                "-e=s/a/b/",
                "-e=s/b/c/",
                "-i=.bak",
                "-n=false",
                "-testsuite=unit",
                "-testsuite=integration",
                "-v=true",
                "-verbose=true",
                "-verbose=true",
                "-verbose=false",
              ],
            }),
          testToCommandLineGNU: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.cli["toCommandLineGNU"],
                  {},
                  () =>
                    scope.attrSet$({
                      v: true,
                      verbose: [true, true, false, null],
                      i: ".bak",
                      testsuite: ["unit", "integration"],
                      e: ["s/a/b/", "s/b/c/"],
                      n: false,
                      data: () =>
                        scope.apply$(scope.builtins["toJSON"], { id: 0n }),
                    }),
                ),
              expected: [
                '--data={"id":0}',
                "-es/a/b/",
                "-es/b/c/",
                "-i.bak",
                "--testsuite=unit",
                "--testsuite=integration",
                "-v",
                "--verbose",
                "--verbose",
              ],
            }),
          testSanitizeDerivationNameLeadingDots: () =>
            scope.apply$(scope.testSanitizeDerivationName, {
              name: "..foo",
              expected: "foo",
            }),
          testSanitizeDerivationNameUnicode: () =>
            scope.apply$(scope.testSanitizeDerivationName, {
              name: "fö",
              expected: "f-",
            }),
          testSanitizeDerivationNameAscii: () =>
            scope.apply$(scope.testSanitizeDerivationName, {
              name:
                " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~",
              expected:
                "-+--.-0123456789-=-?-ABCDEFGHIJKLMNOPQRSTUVWXYZ-_-abcdefghijklmnopqrstuvwxyz-",
            }),
          testSanitizeDerivationNameTooLong: () =>
            scope.apply$(scope.testSanitizeDerivationName, {
              name:
                "This string is loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong",
              expected:
                "loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong",
            }),
          testSanitizeDerivationNameTooLongWithInvalid: () =>
            scope.apply$(scope.testSanitizeDerivationName, {
              name:
                "Hello there aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa &&&&&&&&",
              expected:
                "there-aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa-",
            }),
          testSanitizeDerivationNameEmpty: () =>
            scope.apply$(scope.testSanitizeDerivationName, {
              name: "",
              expected: "unknown",
            }),
          "test: submodule definitions aren't unchecked when evaluating submodule documentation":
            () =>
              scope.attrSet$({
                expr: () =>
                  scope.let$({
                    module: (scope) =>
                      scope.func$({
                        lib: scope.nixArg$.NoDefault,
                        "...": scope.nixArg$.Ellipsis,
                      }, (scope) =>
                        scope.attrSet$({
                          ...scope.deepSet$(["options", "foo"], () =>
                            scope.apply$(scope.lib["mkOption"], () =>
                              scope.attrSet$({
                                type: () =>
                                  scope.apply$(
                                    scope.lib["types"]["submodule"],
                                    () => scope.submodule,
                                  ),
                              }))),
                        })),
                    submodule: (scope) =>
                      scope.attrSet$({
                        ...scope.deepSet$(["options", "bar"], () =>
                          scope.apply$(scope.lib["mkOption"], () =>
                            scope.attrSet$({
                              type: () =>
                                scope.lib["types"]["int"],
                            }))),
                        ...scope.deepSet$(["config", "submoduleWrong"], () =>
                          scope.apply$(scope.throw, "yikes")),
                      }),
                    options: (scope) =>
                      scope.apply$(scope.evalModules, () =>
                        scope.attrSet$({
                          modules: () => [scope.module],
                        }))["options"],
                    renderableOpts: (scope) =>
                      scope.apply$(scope.filter, () =>
                        scope.func$("o", (scope) =>
                          scope.operators$.negate(scope.o["internal"])), () =>
                        scope.apply$(scope.optionAttrSetToDocList, () =>
                          scope.options)),
                  }).in$((scope) =>
                    scope.apply$(
                      scope.builtins["deepSeq"],
                      () => scope.renderableOpts,
                      () =>
                        scope.apply$(scope.map, () =>
                          scope.func$("o", (scope) => scope.o["loc"]), () =>
                          scope.renderableOpts),
                    )
                  ),
                expected: [["_module", "args"], ["foo"], ["foo", "bar"]],
              }),
          testFreeformOptions: () =>
            scope.attrSet$({
              expr: () =>
                scope.let$({
                  submodule: (scope) =>
                    scope.func$({
                      lib: scope.nixArg$.NoDefault,
                      "...": scope.nixArg$.Ellipsis,
                    }, (scope) =>
                      scope.attrSet$({
                        freeformType: () =>
                          scope.apply$(scope.lib["types"]["attrsOf"], () =>
                            scope.apply$(scope.lib["types"]["submodule"], () =>
                              scope.attrSet$({
                                ...scope.deepSet$(["options", "bar"], () =>
                                  scope.apply$(scope.lib["mkOption"], {})),
                              }))),
                        ...scope.deepSet$(["options", "bar"], () =>
                          scope.apply$(scope.lib["mkOption"], {})),
                      })),
                  module: (scope) =>
                    scope.func$({
                      lib: scope.nixArg$.NoDefault,
                      "...": scope.nixArg$.Ellipsis,
                    }, (scope) =>
                      scope.attrSet$({
                        ...scope.deepSet$(["options", "foo"], () =>
                          scope.apply$(scope.lib["mkOption"], () =>
                            scope.attrSet$({
                              type: () =>
                                scope.apply$(
                                  scope.lib["types"]["submodule"],
                                  () => scope.submodule,
                                ),
                            }))),
                      })),
                  options: (scope) =>
                    scope.apply$(scope.evalModules, () =>
                      scope.attrSet$({
                        modules: () => [scope.module],
                      }))["options"],
                  locs: (scope) =>
                    scope.apply$(
                      scope.filter,
                      () =>
                        scope.func$("o", (scope) =>
                          scope.operators$.negate(scope.o["internal"])),
                      () =>
                        scope.apply$(scope.optionAttrSetToDocList, () =>
                          scope.options),
                    ),
                }).in$((scope) =>
                  scope.apply$(
                    scope.map,
                    () => scope.func$("o", (scope) => scope.o["loc"]),
                    () => scope.locs,
                  )
                ),
              expected: [
                ["_module", "args"],
                ["foo"],
                ["foo", "<name>", "bar"],
                ["foo", "bar"],
              ],
            }),
          testEmptyValueOption: () =>
            scope.attrSet$({
              expr: () =>
                scope.let$({
                  module: (scope) =>
                    scope.func$({
                      lib: scope.nixArg$.NoDefault,
                      "...": scope.nixArg$.Ellipsis,
                    }, (scope) =>
                      scope.attrSet$({
                        options: () =>
                          scope.attrSet$({
                            "empty-value": () =>
                              scope.apply$(scope.lib["mkOption"], () =>
                                scope.attrSet$({
                                  type: () =>
                                    scope.apply$(
                                      scope.lib["mkOptionType"],
                                      () =>
                                        scope.attrSet$({
                                          name:
                                            "propagate-empty-value-to-default",
                                          ...scope.deepSet$([
                                            "emptyValue",
                                            "value",
                                          ], 2n),
                                        }),
                                    ),
                                })),
                          }),
                      })),
                  eval: (scope) =>
                    scope.apply$(scope.evalModules, () =>
                      scope.attrSet$({
                        modules: () => [scope.module],
                      })),
                }).in$((scope) =>
                  scope.apply$(
                    scope.filter,
                    () =>
                      scope.func$("o", (scope) =>
                        scope.operators$.equal(scope.o["name"], "empty-value")),
                    () =>
                      scope.apply$(scope.optionAttrSetToDocList, () =>
                        scope.eval["options"]),
                  )
                ),
              expected: [{
                declarations: [],
                default: { _type: "literalExpression", text: "2" },
                description: null,
                internal: false,
                loc: ["empty-value"],
                name: "empty-value",
                readOnly: false,
                type: "propagate-empty-value-to-default",
                visible: true,
              }],
            }),
          testDocOptionVisiblity: () =>
            scope.attrSet$({
              expr: () =>
                scope.let$({
                  submodule: (scope) =>
                    scope.func$({
                      lib: scope.nixArg$.NoDefault,
                      "...": scope.nixArg$.Ellipsis,
                    }, (scope) =>
                      scope.attrSet$({
                        freeformType: () =>
                          scope.apply$(scope.lib["types"]["attrsOf"], () =>
                            scope.apply$(scope.lib["types"]["submodule"], () =>
                              scope.attrSet$({
                                ...scope.deepSet$(["options", "bar"], () =>
                                  scope.apply$(scope.lib["mkOption"], {})),
                              }))),
                        ...scope.deepSet$(["options", "foo"], () =>
                          scope.apply$(scope.lib["mkOption"], {})),
                      })),
                  module: (scope) =>
                    scope.func$({
                      lib: scope.nixArg$.NoDefault,
                      "...": scope.nixArg$.Ellipsis,
                    }, (scope) =>
                      scope.attrSet$({
                        options: () =>
                          scope.attrSet$({
                            shallow: () =>
                              scope.apply$(
                                scope.lib["mkOption"],
                                () =>
                                  scope.attrSet$({
                                    type: () =>
                                      scope.apply$(
                                        scope.lib["types"]["submodule"],
                                        () => scope.submodule,
                                      ),
                                    visible: "shallow",
                                  }),
                              ),
                            transparent: () =>
                              scope.apply$(
                                scope.lib["mkOption"],
                                () =>
                                  scope.attrSet$({
                                    type: () =>
                                      scope.apply$(
                                        scope.lib["types"]["submodule"],
                                        () => scope.submodule,
                                      ),
                                    visible: "transparent",
                                  }),
                              ),
                            true: () =>
                              scope.apply$(
                                scope.lib["mkOption"],
                                () =>
                                  scope.attrSet$({
                                    type: () =>
                                      scope.apply$(
                                        scope.lib["types"]["submodule"],
                                        () => scope.submodule,
                                      ),
                                    visible: true,
                                  }),
                              ),
                            false: () =>
                              scope.apply$(
                                scope.lib["mkOption"],
                                () =>
                                  scope.attrSet$({
                                    type: () =>
                                      scope.apply$(
                                        scope.lib["types"]["submodule"],
                                        () => scope.submodule,
                                      ),
                                    visible: false,
                                  }),
                              ),
                            internal: () =>
                              scope.apply$(
                                scope.lib["mkOption"],
                                () =>
                                  scope.attrSet$({
                                    type: () =>
                                      scope.apply$(
                                        scope.lib["types"]["submodule"],
                                        () => scope.submodule,
                                      ),
                                    internal: true,
                                  }),
                              ),
                          }),
                      })),
                  options: (scope) =>
                    scope.apply$(scope.evalModules, () =>
                      scope.attrSet$({
                        modules: () => [scope.module],
                      }))["options"],
                }).in$((scope) =>
                  scope.apply$(
                    scope.pipe,
                    () => scope.options,
                    () => [
                      scope.optionAttrSetToDocList,
                      scope.apply$(scope.filter, () =>
                        scope.func$("opt", (scope) =>
                          scope.operators$.negate(
                            scope.apply$(
                              scope.builtins["elem"],
                              "_module",
                              () => scope.opt["loc"],
                            ),
                          ))),
                      scope.apply$(scope.map, () =>
                        scope.func$("opt", (scope) =>
                          scope.apply$(
                            scope.nameValuePair,
                            () => scope.opt["name"],
                            () =>
                              scope.attrSet$({
                                visible: () => scope.opt.visible,
                                internal: () => scope.opt.internal,
                              }),
                          ))),
                      scope.listToAttrs,
                    ],
                  )
                ),
              expected: () => ({
                shallow: { visible: true, internal: false },
                transparent: { visible: false, internal: false },
                "transparent.foo": { visible: true, internal: false },
                "transparent.<name>.bar": { visible: true, internal: false },
                true: { visible: true, internal: false },
                "true.foo": { visible: true, internal: false },
                "true.<name>.bar": { visible: true, internal: false },
                false: { visible: false, internal: false },
                internal: { visible: true, internal: true },
                "internal.foo": { visible: true, internal: false },
                "internal.<name>.bar": { visible: true, internal: false },
              }),
            }),
          testAttrsWithName: () =>
            scope.attrSet$({
              expr: () =>
                scope.let$({
                  eval: (scope) =>
                    scope.apply$(scope.evalModules, () =>
                      scope.attrSet$({
                        modules: () => [scope.attrSet$({
                          options: () =>
                            scope.attrSet$({
                              foo: () =>
                                scope.apply$(scope.lib["mkOption"], () =>
                                  scope.attrSet$({
                                    type: () =>
                                      scope.apply$(
                                        scope.lib["types"]["attrsWith"],
                                        () =>
                                          scope.attrSet$({
                                            placeholder: "MyCustomPlaceholder",
                                            elemType: () =>
                                              scope.apply$(
                                                scope.lib["types"]["submodule"],
                                                () =>
                                                  scope.attrSet$({
                                                    ...scope.deepSet$([
                                                      "options",
                                                      "bar",
                                                    ], () =>
                                                      scope.apply$(
                                                        scope.lib["mkOption"],
                                                        () =>
                                                          scope.attrSet$({
                                                            type: () =>
                                                              scope
                                                                .lib["types"][
                                                                  "int"
                                                                ],
                                                            default: 42n,
                                                          }),
                                                      )),
                                                  }),
                                              ),
                                          }),
                                      ),
                                  })),
                            }),
                        })],
                      })),
                  opt: (scope) => scope.eval["options"]["foo"],
                }).in$((scope) =>
                  scope.apply$(
                    scope.opt["type"]["getSubOptions"],
                    () => scope.opt["loc"],
                  )["bar"]["loc"]
                ),
              expected: ["foo", "<MyCustomPlaceholder>", "bar"],
            }),
          testShowOptionWithPlaceholder: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.lib["showOption"], [
                "<name>",
                "<myName>",
                "*",
                "{foo}",
              ]),
            expected: '<name>.<myName>.*."{foo}"',
          }),
          testCartesianProductOfEmptySet: () => scope.attrSet$({
            expr: () => scope.apply$(scope.cartesianProduct, {}),
            expected: [{}],
          }),
          testCartesianProductOfOneSet: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.cartesianProduct, { a: [1n, 2n, 3n] }),
            expected: [{ a: 1n }, { a: 2n }, { a: 3n }],
          }),
          testCartesianProductOfTwoSets: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.cartesianProduct, { a: [1n], b: [10n, 20n] }),
            expected: [{ a: 1n, b: 10n }, { a: 1n, b: 20n }],
          }),
          testCartesianProductOfTwoSetsWithOneEmpty: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.cartesianProduct, { a: [], b: [10n, 20n] }),
            expected: [],
          }),
          testCartesianProductOfThreeSets: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.cartesianProduct, {
                  a: [1n, 2n, 3n],
                  b: [10n, 20n, 30n],
                  c: [100n, 200n, 300n],
                }),
              expected: [
                { a: 1n, b: 10n, c: 100n },
                { a: 1n, b: 10n, c: 200n },
                { a: 1n, b: 10n, c: 300n },
                { a: 1n, b: 20n, c: 100n },
                { a: 1n, b: 20n, c: 200n },
                { a: 1n, b: 20n, c: 300n },
                { a: 1n, b: 30n, c: 100n },
                { a: 1n, b: 30n, c: 200n },
                { a: 1n, b: 30n, c: 300n },
                { a: 2n, b: 10n, c: 100n },
                { a: 2n, b: 10n, c: 200n },
                { a: 2n, b: 10n, c: 300n },
                { a: 2n, b: 20n, c: 100n },
                { a: 2n, b: 20n, c: 200n },
                { a: 2n, b: 20n, c: 300n },
                { a: 2n, b: 30n, c: 100n },
                { a: 2n, b: 30n, c: 200n },
                { a: 2n, b: 30n, c: 300n },
                { a: 3n, b: 10n, c: 100n },
                { a: 3n, b: 10n, c: 200n },
                { a: 3n, b: 10n, c: 300n },
                { a: 3n, b: 20n, c: 100n },
                { a: 3n, b: 20n, c: 200n },
                { a: 3n, b: 20n, c: 300n },
                { a: 3n, b: 30n, c: 100n },
                { a: 3n, b: 30n, c: 200n },
                { a: 3n, b: 30n, c: 300n },
              ],
            }),
          testMapCartesianProductOfOneSet: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.mapCartesianProduct,
                () =>
                  scope.func$({ a: scope.nixArg$.NoDefault }, (scope) =>
                    scope.operators$.multiply(scope.a, 2n)),
                { a: [1n, 2n, 3n] },
              ),
            expected: [2n, 4n, 6n],
          }),
          testMapCartesianProductOfTwoSets: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.mapCartesianProduct,
                () =>
                  scope.func$({
                    a: scope.nixArg$.NoDefault,
                    b: scope.nixArg$.NoDefault,
                  }, (scope) => scope.operators$.add(scope.a, scope.b)),
                { a: [1n], b: [10n, 20n] },
              ),
            expected: [11n, 21n],
          }),
          testMapCartesianProcutOfTwoSetsWithOneEmpty: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.mapCartesianProduct,
                () =>
                  scope.func$("x", (scope) =>
                    scope.operators$.add(scope.x["a"], scope.x["b"])),
                { a: [], b: [10n, 20n] },
              ),
            expected: [],
          }),
          testMapCartesianProductOfThreeSets: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.mapCartesianProduct,
                  () =>
                    scope.func$({
                      a: scope.nixArg$.NoDefault,
                      b: scope.nixArg$.NoDefault,
                      c: scope.nixArg$.NoDefault,
                    }, (scope) =>
                      scope.operators$.add(
                        scope.operators$.add(scope.a, scope.b),
                        scope.c,
                      )),
                  {
                    a: [1n, 2n, 3n],
                    b: [10n, 20n, 30n],
                    c: [100n, 200n, 300n],
                  },
                ),
              expected: [
                111n,
                211n,
                311n,
                121n,
                221n,
                321n,
                131n,
                231n,
                331n,
                112n,
                212n,
                312n,
                122n,
                222n,
                322n,
                132n,
                232n,
                332n,
                113n,
                213n,
                313n,
                123n,
                223n,
                323n,
                133n,
                233n,
                333n,
              ],
            }),
          testMapAttrsToListRecursive: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.mapAttrsToListRecursive,
                  () =>
                    scope.func$("p", (scope) =>
                      scope.func$("v", (scope) =>
                        scope.str$(
                          () => [
                            scope.apply$(
                              scope.concatStringsSep,
                              ".",
                              () => scope.p,
                            ),
                            "=",
                            scope.v,
                          ]
                        ))),
                  {
                    a: { b: "A" },
                    c: { d: "B", e: { f: "C", g: "D" } },
                    h: { i: { j: { k: "E" } } },
                  },
                ),
              expected: ["a.b=A", "c.d=B", "c.e.f=C", "c.e.g=D", "h.i.j.k=E"],
            }),
          testMapAttrsToListRecursiveWithLists: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.mapAttrsToListRecursive,
                () =>
                  scope.func$("p", (scope) =>
                    scope.func$("v", (scope) => scope.v)),
                { a: [], b: { c: [[]] }, d: { e: { f: [[[]]] } } },
              ),
            expected: [[], [[]], [[[]]]],
          }),
          testMapAttrsToListRecursiveCond: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.mapAttrsToListRecursiveCond,
                () =>
                  scope.func$("p", (scope) =>
                    scope.func$("as", (scope) =>
                      scope.operators$.negate(
                        scope.operators$.hasAttr(scope.as, "stop"),
                      ))),
                () =>
                  scope.func$("p", (scope) =>
                    scope.func$("v", (scope) =>
                      scope.v)),
                {
                  a: { b: "A" },
                  c: { d: "B", e: { stop: null, f: "C", g: { h: "D" } } },
                },
              ),
            expected: ["A", "B", { stop: null, f: "C", g: { h: "D" } }],
          }),
          testMapAttrsToListRecursiveCondPath: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.mapAttrsToListRecursiveCond,
                  () =>
                    scope.func$("p", (scope) =>
                      scope.func$("as", (scope) =>
                        scope.operators$.lessThan(
                          scope.apply$(scope.length, () =>
                            scope.p),
                          2n,
                        ))),
                  () =>
                    scope.func$("p", (scope) =>
                      scope.func$("v", (scope) =>
                        scope.v)),
                  {
                    a: { b: "A" },
                    c: { d: "B", e: { f: "C", g: "D" } },
                    h: { i: { j: { k: "E" } } },
                  },
                ),
              expected: ["A", "B", { f: "C", g: "D" }, { j: { k: "E" } }],
            }),
          testShowAttrPathExample: () => scope.attrSet$({
            expr: () => scope.apply$(scope.showAttrPath, ["foo", "10", "bar"]),
            expected: 'foo."10".bar',
          }),
          testShowAttrPathEmpty: () => scope.attrSet$({
            expr: () => scope.apply$(scope.showAttrPath, []),
            expected: "<root attribute path>",
          }),
          testShowAttrPathVarious: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.showAttrPath, [
                ".",
                "foo",
                "2",
                "a2-b",
                "_bc'de",
              ]),
            expected: '".".foo."2".a2-b._bc\'de',
          }),
          testGroupBy: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.groupBy,
                () =>
                  scope.func$("n", (scope) =>
                    scope.apply$(scope.toString, () =>
                      scope.apply$(scope.mod, () =>
                        scope.n, 5n))),
                () => scope.apply$(scope.range, 0n, 16n),
              ),
            expected: () => ({
              "0": [0n, 5n, 10n, 15n],
              "1": [1n, 6n, 11n, 16n],
              "2": [2n, 7n, 12n],
              "3": [3n, 8n, 13n],
              "4": [4n, 9n, 14n],
            }),
          }),
          "testGroupBy'": () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope["groupBy'"],
                () => scope.builtins["add"],
                0n,
                () =>
                  scope.func$("x", (scope) =>
                    scope.apply$(
                      scope.boolToString,
                      () => (scope.operators$.greaterThan(scope.x, 2n)),
                    )),
                [5n, 1n, 2n, 3n, 4n],
              ),
            expected: { false: 3n, true: 12n },
          }),
          testUpdateManyAttrsByPathExample: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.updateManyAttrsByPath,
                  () => [
                    scope.attrSet$({
                      path: ["a", "b"],
                      update: () =>
                        scope.func$("old", (scope) =>
                          scope.attrSet$({
                            d: () => scope.old["c"],
                          })),
                    }),
                    scope.attrSet$({
                      path: ["a", "b", "c"],
                      update: () =>
                        scope.func$(
                          "old",
                          (scope) => scope.operators$.add(scope.old, 1n),
                        ),
                    }),
                    scope.attrSet$({
                      path: ["x", "y"],
                      update: () => scope.func$("old", (scope) => "xy"),
                    }),
                  ],
                  () =>
                    scope.attrSet$({
                      ...scope.deepSet$(["a", "b", "c"], 0n),
                    }),
                ),
              expected: { a: { b: { d: 1n } }, x: { y: "xy" } },
            }),
          testUpdateManyAttrsByPathNone: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.updateManyAttrsByPath, [], "something"),
            expected: "something",
          }),
          testUpdateManyAttrsByPathSingleIncrement: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.updateManyAttrsByPath, () => [scope.attrSet$({
                path: [],
                update: () =>
                  scope.func$(
                    "old",
                    (scope) => scope.operators$.add(scope.old, 1n),
                  ),
              })], 0n),
            expected: 1n,
          }),
          testUpdateManyAttrsByPathMultipleIncrements: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.updateManyAttrsByPath,
                  () => [
                    scope.attrSet$({
                      path: [],
                      update: () =>
                        scope.func$(
                          "old",
                          (scope) => scope.operators$.add(scope.old, "a"),
                        ),
                    }),
                    scope.attrSet$({
                      path: [],
                      update: () =>
                        scope.func$(
                          "old",
                          (scope) => scope.operators$.add(scope.old, "b"),
                        ),
                    }),
                    scope.attrSet$({
                      path: [],
                      update: () =>
                        scope.func$(
                          "old",
                          (scope) => scope.operators$.add(scope.old, "c"),
                        ),
                    }),
                  ],
                  "",
                ),
              expected: "abc",
            }),
          testUpdateManyAttrsByPathLazy: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.updateManyAttrsByPath, () => [
                scope.attrSet$({
                  path: [],
                  update: () =>
                    scope.func$("old", (scope) =>
                      scope.operators$.add(
                        scope.old,
                        scope.apply$(scope.throw, "nope"),
                      )),
                }),
                scope.attrSet$({
                  path: [],
                  update: () =>
                    scope.func$("old", (scope) => "untainted"),
                }),
              ], () => scope.apply$(scope.throw, "start")),
            expected: "untainted",
          }),
          testUpdateManyAttrsByPathDeep: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.updateManyAttrsByPath,
                  () => [scope.attrSet$({
                    path: ["a", "b", "c"],
                    update: () =>
                      scope.func$("old", (scope) =>
                        scope.operators$.add(scope.old, 1n)),
                  })],
                  () =>
                    scope.attrSet$({
                      ...scope.deepSet$(["a", "b", "c"], 0n),
                      ...scope.deepSet$(["a", "b", "z"], 0n),
                      ...scope.deepSet$(["a", "y", "z"], 0n),
                      ...scope.deepSet$(["x", "y", "z"], 0n),
                    }),
                ),
              expected: () =>
                scope.attrSet$({
                  ...scope.deepSet$(["a", "b", "c"], 1n),
                  ...scope.deepSet$(["a", "b", "z"], 0n),
                  ...scope.deepSet$(["a", "y", "z"], 0n),
                  ...scope.deepSet$(["x", "y", "z"], 0n),
                }),
            }),
          testUpdateManyAttrsByPathNestedBeforehand: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.updateManyAttrsByPath,
                  () => [
                    scope.attrSet$({
                      path: ["a"],
                      update: () =>
                        scope.func$("old", (scope) =>
                          scope.operators$.merge(
                            scope.old,
                            scope.attrSet$({
                              x: () => scope.old["b"],
                            }),
                          )),
                    }),
                    scope.attrSet$({
                      path: ["a", "b"],
                      update: () =>
                        scope.func$(
                          "old",
                          (scope) => scope.operators$.add(scope.old, 1n),
                        ),
                    }),
                  ],
                  () =>
                    scope.attrSet$({
                      ...scope.deepSet$(["a", "b"], 0n),
                    }),
                ),
              expected: () =>
                scope.attrSet$({
                  ...scope.deepSet$(["a", "b"], 1n),
                  ...scope.deepSet$(["a", "x"], 1n),
                }),
            }),
          testCommonPrefixLengthEmpty: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.strings["commonPrefixLength"], "", "hello"),
            expected: 0n,
          }),
          testCommonPrefixLengthSame: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.strings["commonPrefixLength"],
                "hello",
                "hello",
              ),
            expected: 5n,
          }),
          testCommonPrefixLengthDiffering: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.strings["commonPrefixLength"], "hello", "hey"),
            expected: 2n,
          }),
          testCommonSuffixLengthEmpty: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.strings["commonSuffixLength"], "", "hello"),
            expected: 0n,
          }),
          testCommonSuffixLengthSame: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.strings["commonSuffixLength"],
                "hello",
                "hello",
              ),
            expected: 5n,
          }),
          testCommonSuffixLengthDiffering: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.strings["commonSuffixLength"], "test", "rest"),
            expected: 3n,
          }),
          testLevenshteinEmpty: () => scope.attrSet$({
            expr: () => scope.apply$(scope.strings["levenshtein"], "", ""),
            expected: 0n,
          }),
          testLevenshteinOnlyAdd: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.strings["levenshtein"], "", "hello there"),
            expected: 11n,
          }),
          testLevenshteinOnlyRemove: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.strings["levenshtein"], "hello there", ""),
            expected: 11n,
          }),
          testLevenshteinOnlyTransform: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.strings["levenshtein"], "abcdef", "ghijkl"),
            expected: 6n,
          }),
          testLevenshteinMixed: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.strings["levenshtein"], "kitchen", "sitting"),
            expected: 5n,
          }),
          testLevenshteinAtMostZeroFalse: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.strings["levenshteinAtMost"],
                0n,
                "foo",
                "boo",
              ),
            expected: false,
          }),
          testLevenshteinAtMostZeroTrue: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.strings["levenshteinAtMost"],
                0n,
                "foo",
                "foo",
              ),
            expected: true,
          }),
          testLevenshteinAtMostOneFalse: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.strings["levenshteinAtMost"], 1n, "car", "ct"),
            expected: false,
          }),
          testLevenshteinAtMostOneTrue: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.strings["levenshteinAtMost"], 1n, "car", "cr"),
            expected: true,
          }),
          testLevenshteinAtMostTwoIsEmpty: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.strings["levenshteinAtMost"], 2n, "", ""),
            expected: true,
          }),
          testLevenshteinAtMostTwoIsZero: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.strings["levenshteinAtMost"],
                2n,
                "abcdef",
                "abcdef",
              ),
            expected: true,
          }),
          testLevenshteinAtMostTwoIsOne: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.strings["levenshteinAtMost"],
                2n,
                "abcdef",
                "abddef",
              ),
            expected: true,
          }),
          testLevenshteinAtMostTwoDiff0False: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.strings["levenshteinAtMost"],
                2n,
                "abcdef",
                "aczyef",
              ),
            expected: false,
          }),
          testLevenshteinAtMostTwoDiff0Outer: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.strings["levenshteinAtMost"],
                2n,
                "abcdef",
                "zbcdez",
              ),
            expected: true,
          }),
          testLevenshteinAtMostTwoDiff0DelLeft: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.strings["levenshteinAtMost"],
                2n,
                "abcdef",
                "bcdefz",
              ),
            expected: true,
          }),
          testLevenshteinAtMostTwoDiff0DelRight: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.strings["levenshteinAtMost"],
                2n,
                "abcdef",
                "zabcde",
              ),
            expected: true,
          }),
          testLevenshteinAtMostTwoDiff1False: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.strings["levenshteinAtMost"],
                2n,
                "abcdef",
                "bddez",
              ),
            expected: false,
          }),
          testLevenshteinAtMostTwoDiff1DelLeft: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.strings["levenshteinAtMost"],
                2n,
                "abcdef",
                "bcdez",
              ),
            expected: true,
          }),
          testLevenshteinAtMostTwoDiff1DelRight: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.strings["levenshteinAtMost"],
                2n,
                "abcdef",
                "zbcde",
              ),
            expected: true,
          }),
          testLevenshteinAtMostTwoDiff2False: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.strings["levenshteinAtMost"],
                2n,
                "hello",
                "hxo",
              ),
            expected: false,
          }),
          testLevenshteinAtMostTwoDiff2True: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.strings["levenshteinAtMost"],
                2n,
                "hello",
                "heo",
              ),
            expected: true,
          }),
          testLevenshteinAtMostTwoDiff3: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.strings["levenshteinAtMost"],
                2n,
                "hello",
                "ho",
              ),
            expected: false,
          }),
          testLevenshteinAtMostThreeFalse: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.strings["levenshteinAtMost"],
                3n,
                "hello",
                "Holla!",
              ),
            expected: false,
          }),
          testLevenshteinAtMostThreeTrue: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.strings["levenshteinAtMost"],
                3n,
                "hello",
                "Holla",
              ),
            expected: true,
          }),
          testLazyDerivationIsLazyInDerivationForAttrNames: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.attrNames,
                  () =>
                    scope.apply$(scope.lazyDerivation, () =>
                      scope.attrSet$({
                        derivation: () =>
                          scope.apply$(scope.throw, "not lazy enough"),
                      })),
                ),
              expected: [
                "drvPath",
                "meta",
                "name",
                "out",
                "outPath",
                "outputName",
                "outputs",
                "system",
                "type",
              ],
            }),
          testLazyDerivationIsLazyInDerivationForPassthruAttr: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.lazyDerivation, () =>
                  scope.attrSet$({
                    derivation: () =>
                      scope.apply$(scope.throw, "not lazy enough"),
                    ...scope.deepSet$(
                      ["passthru", "tests"],
                      "whatever is in tests",
                    ),
                  }))["tests"],
              expected: "whatever is in tests",
            }),
          testLazyDerivationIsLazyInDerivationForPassthruAttr2: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.lazyDerivation, () =>
                  scope.attrSet$({
                    derivation: () =>
                      scope.apply$(scope.throw, "not lazy enough"),
                    ...scope.deepSet$(
                      ["passthru", "foo"],
                      "whatever is in foo",
                    ),
                  }))["foo"],
              expected: "whatever is in foo",
            }),
          testLazyDerivationIsLazyInDerivationForMeta: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.lazyDerivation, () =>
                scope.attrSet$({
                  derivation: () =>
                    scope.apply$(scope.throw, "not lazy enough"),
                  meta: "whatever is in meta",
                }))["meta"],
            expected: "whatever is in meta",
          }),
          testLazyDerivationReturnsDerivationAttrs: () => scope.let$({
            derivation: {
              type: "derivation",
              outputs: ["out"],
              out: "test out",
              outPath: "test outPath",
              outputName: "out",
              drvPath: "test drvPath",
              name: "test name",
              system: "test system",
              meta: "test meta",
            },
          }).in$((scope) => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.lazyDerivation, () =>
                scope.attrSet$({
                  derivation: () => scope.derivation,
                })),
            expected: () => scope.derivation,
          })),
          testOptionalDrvAttr: () =>
            scope.let$({
              mkDerivation: (scope) =>
                scope.func$(
                  "args",
                  (scope) =>
                    scope.apply$(
                      scope.derivation,
                      () => (scope.operators$.merge(scope.args, {
                        builder: "builder",
                        system: "system",
                        __ignoreNulls: true,
                      })),
                    ),
                ),
            }).in$((scope) => scope.attrSet$({
              expr: () =>
                scope.apply$(scope.mkDerivation, () =>
                  scope.attrSet$({
                    name: "foo",
                    x: () => scope.apply$(scope.optionalDrvAttr, true, 1n),
                    y: () => scope.apply$(scope.optionalDrvAttr, false, 1n),
                  }))["drvPath"],
              expected: () =>
                scope.apply$(scope.mkDerivation, {
                  name: "foo",
                  x: 1n,
                })["drvPath"],
            })),
          testLazyDerivationMultiOutputReturnsDerivationAttrs: () =>
            scope.let$({
              derivation: (scope) =>
                scope.attrSet$({
                  type: "derivation",
                  outputs: ["out", "dev"],
                  dev: "test dev",
                  out: "test out",
                  outPath: "test outPath",
                  outputName: "out",
                  drvPath: "test drvPath",
                  name: "test name",
                  system: "test system",
                  ...scope.deepSet$(["meta", "position"], "/hi:23"),
                }),
            }).in$((scope) => scope.attrSet$({
              expr: () =>
                scope.apply$(scope.lazyDerivation, () =>
                  scope.attrSet$({
                    derivation: () => scope.derivation,
                    outputs: ["out", "dev"],
                    ...scope.deepSet$(
                      ["passthru", "meta", "position"],
                      "/hi:23",
                    ),
                  })),
              expected: () => scope.derivation,
            })),
          testTypeDescriptionInt: () => scope.attrSet$({
            expr: () =>
              scope.with$(
                () => scope.types,
                (scope) => scope.int,
              )["description"],
            expected: "signed integer",
          }),
          testTypeDescriptionIntsPositive: () => scope.attrSet$({
            expr: () =>
              scope.with$(
                () => scope.types,
                (scope) => scope.ints["positive"],
              )["description"],
            expected: "positive integer, meaning >0",
          }),
          testTypeDescriptionIntsPositiveOrEnumAuto: () => scope.attrSet$({
            expr: () =>
              scope.with$(
                () => scope.types,
                (scope) =>
                  scope.apply$(scope.either, () =>
                    scope.ints["positive"], () =>
                    scope.apply$(scope.enum, ["auto"])),
              )["description"],
            expected:
              'positive integer, meaning >0, or value "auto" (singular enum)',
          }),
          testTypeDescriptionListOfPositive: () => scope.attrSet$({
            expr: () =>
              scope.with$(
                () => scope.types,
                (scope) =>
                  scope.apply$(scope.listOf, () => scope.ints["positive"]),
              )["description"],
            expected: "list of (positive integer, meaning >0)",
          }),
          testTypeDescriptionListOfInt: () => scope.attrSet$({
            expr: () =>
              scope.with$(
                () => scope.types,
                (scope) => scope.apply$(scope.listOf, () => scope.int),
              )["description"],
            expected: "list of signed integer",
          }),
          testTypeDescriptionListOfListOfInt: () => scope.attrSet$({
            expr: () =>
              scope.with$(
                () => scope.types,
                (scope) =>
                  scope.apply$(scope.listOf, () =>
                    scope.apply$(scope.listOf, () => scope.int)),
              )["description"],
            expected: "list of list of signed integer",
          }),
          testTypeDescriptionListOfEitherStrOrBool: () => scope.attrSet$({
            expr: () =>
              scope.with$(
                () => scope.types,
                (scope) =>
                  scope.apply$(scope.listOf, () =>
                    scope.apply$(scope.either, () =>
                      scope.str, () =>
                      scope.bool)),
              )["description"],
            expected: "list of (string or boolean)",
          }),
          testTypeDescriptionEitherListOfStrOrBool: () => scope.attrSet$({
            expr: () =>
              scope.with$(
                () => scope.types,
                (scope) =>
                  scope.apply$(scope.either, () =>
                    scope.apply$(scope.listOf, () => scope.bool), () =>
                    scope.str),
              )["description"],
            expected: "(list of boolean) or string",
          }),
          testTypeDescriptionEitherStrOrListOfBool: () => scope.attrSet$({
            expr: () =>
              scope.with$(
                () => scope.types,
                (scope) =>
                  scope.apply$(scope.either, () =>
                    scope.str, () =>
                    scope.apply$(scope.listOf, () => scope.bool)),
              )["description"],
            expected: "string or list of boolean",
          }),
          testTypeDescriptionOneOfListOfStrOrBool: () => scope.attrSet$({
            expr: () =>
              scope.with$(
                () => scope.types,
                (scope) =>
                  scope.apply$(
                    scope.oneOf,
                    () => [
                      scope.apply$(scope.listOf, () => scope.bool),
                      scope.str,
                    ],
                  ),
              )["description"],
            expected: "(list of boolean) or string",
          }),
          testTypeDescriptionOneOfListOfStrOrBoolOrNumber: () =>
            scope.attrSet$({
              expr: () =>
                scope.with$(
                  () => scope.types,
                  (scope) =>
                    scope.apply$(
                      scope.oneOf,
                      () => [
                        scope.apply$(scope.listOf, () => scope.bool),
                        scope.str,
                        scope.number,
                      ],
                    ),
                )["description"],
              expected:
                "(list of boolean) or string or signed integer or floating point number",
            }),
          testTypeDescriptionEitherListOfBoolOrEitherStringOrNumber: () =>
            scope.attrSet$({
              expr: () =>
                scope.with$(
                  () => scope.types,
                  (scope) =>
                    scope.apply$(scope.either, () =>
                      scope.apply$(scope.listOf, () => scope.bool), () =>
                      scope.apply$(scope.either, () =>
                        scope.str, () =>
                        scope.number)),
                )["description"],
              expected:
                "(list of boolean) or string or signed integer or floating point number",
            }),
          testTypeDescriptionEitherEitherListOfBoolOrStringOrNumber: () =>
            scope.attrSet$({
              expr: () =>
                scope.with$(
                  () => scope.types,
                  (scope) =>
                    scope.apply$(scope.either, () =>
                      scope.apply$(scope.either, () =>
                        scope.apply$(scope.listOf, () =>
                          scope.bool), () =>
                        scope.str), () =>
                      scope.number),
                )["description"],
              expected:
                "(list of boolean) or string or signed integer or floating point number",
            }),
          testTypeDescriptionEitherNullOrBoolOrString: () => scope.attrSet$({
            expr: () =>
              scope.with$(
                () => scope.types,
                (scope) =>
                  scope.apply$(scope.either, () =>
                    scope.apply$(scope.nullOr, () => scope.bool), () =>
                    scope.str),
              )["description"],
            expected: "null or boolean or string",
          }),
          testTypeDescriptionEitherListOfEitherBoolOrStrOrInt: () =>
            scope.attrSet$({
              expr: () =>
                scope.with$(
                  () => scope.types,
                  (scope) =>
                    scope.apply$(scope.either, () =>
                      scope.apply$(scope.listOf, () =>
                        scope.apply$(scope.either, () =>
                          scope.bool, () =>
                          scope.str)), () =>
                      scope.int),
                )["description"],
              expected: "(list of (boolean or string)) or signed integer",
            }),
          testTypeDescriptionEitherIntOrListOrEitherBoolOrStr: () =>
            scope.attrSet$({
              expr: () =>
                scope.with$(
                  () => scope.types,
                  (scope) =>
                    scope.apply$(scope.either, () =>
                      scope.int, () =>
                      scope.apply$(scope.listOf, () =>
                        scope.apply$(scope.either, () =>
                          scope.bool, () =>
                          scope.str))),
                )["description"],
              expected: "signed integer or list of (boolean or string)",
            }),
          testTypeFunctionToPropagateFunctionArgs: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.lib["functionArgs"], () =>
                  scope.apply$(
                    scope.apply$(scope.types["functionTo"], () =>
                      scope.types["null"])["merge"],
                    [],
                    () => [
                      scope.attrSet$({
                        value: () =>
                          scope.func$({
                            a: scope.nixArg$.NoDefault,
                            b: false,
                            "...": scope.nixArg$.Ellipsis,
                          }, (scope) => null),
                      }),
                      scope.attrSet$({
                        value: () =>
                          scope.func$({
                            b: scope.nixArg$.NoDefault,
                            c: false,
                            "...": scope.nixArg$.Ellipsis,
                          }, (scope) => null),
                      }),
                    ],
                  )),
              expected: { a: false, b: false, c: true },
            }),
          "testGetExe'Output": () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope["getExe'"], {
                type: "derivation",
                out: "somelonghash",
                bin: "somelonghash",
              }, "executable"),
            expected: "somelonghash/bin/executable",
          }),
          testGetExeOutput: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.getExe, () =>
                scope.attrSet$({
                  type: "derivation",
                  out: "somelonghash",
                  bin: "somelonghash",
                  ...scope.deepSet$(["meta", "mainProgram"], "mainProgram"),
                })),
            expected: "somelonghash/bin/mainProgram",
          }),
          "testGetExe'FailureFirstArg": () =>
            scope.apply$(
              scope.testingThrow,
              () =>
                scope.apply$(
                  scope["getExe'"],
                  "not a derivation",
                  "executable",
                ),
            ),
          "testGetExe'FailureSecondArg": () =>
            scope.apply$(
              scope.testingThrow,
              () =>
                scope.apply$(
                  scope["getExe'"],
                  { type: "derivation" },
                  "dir/executable",
                ),
            ),
          testGetLicenseFromSpdxIdOrExamples: () =>
            scope.attrSet$({
              expr:
                () => [
                  scope.apply$(scope.getLicenseFromSpdxIdOr, "MIT", null),
                  scope.apply$(scope.getLicenseFromSpdxIdOr, "mIt", null),
                  scope.apply$(
                    scope.getLicenseFromSpdxIdOr,
                    "MY LICENSE",
                    () => scope.lib["licenses"]["free"],
                  ),
                  scope.apply$(
                    scope.getLicenseFromSpdxIdOr,
                    "MY LICENSE",
                    null,
                  ),
                ],
              expected:
                () => [
                  scope.lib["licenses"]["mit"],
                  scope.lib["licenses"]["mit"],
                  scope.lib["licenses"]["free"],
                  null,
                ],
            }),
          testGetLicenseFromSpdxIdOrThrow: () =>
            scope.apply$(
              scope.testingThrow,
              () =>
                scope.apply$(scope.getLicenseFromSpdxIdOr, "MY LICENSE", () =>
                  scope.apply$(scope.throw, "No SPDX ID matches MY LICENSE")),
            ),
          testPlatformMatch: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.meta["platformMatch"], {
                system: "x86_64-linux",
              }, "x86_64-linux"),
            expected: true,
          }),
          testPlatformMatchAttrs: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.meta["platformMatch"],
                () => scope.apply$(scope.systems["elaborate"], "x86_64-linux"),
                () =>
                  scope.apply$(
                    scope.systems["elaborate"],
                    "x86_64-linux",
                  )["parsed"],
              ),
            expected: true,
          }),
          testPlatformMatchNoMatch: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.meta["platformMatch"], {
                system: "x86_64-freebsd",
              }, "x86_64-linux"),
            expected: false,
          }),
          testPlatformMatchMissingSystem: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.meta["platformMatch"], {}, "x86_64-linux"),
            expected: false,
          }),
          testPackagesFromDirectoryRecursive: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.packagesFromDirectoryRecursive, () =>
                  scope.attrSet$({
                    callPackage: () =>
                      scope.func$(
                        "path",
                        (scope) =>
                          scope.func$("overrides", (scope) =>
                            scope.apply$(scope.import, () =>
                              scope.path, () =>
                              scope.overrides)),
                      ),
                    directory:
                      (new scope.Path$([
                        new URL(
                          "./packages-from-directory/plain",
                          import.meta.url,
                        ).pathname,
                      ], [])),
                  })),
              expected: {
                a: "a",
                b: "b",
                c: "c",
                "my-namespace": {
                  d: "d",
                  e: "e",
                  f: "f",
                  "my-sub-namespace": { g: "g", h: "h" },
                },
              },
            }),
          testPackagesFromDirectoryRecursiveStringDirectory: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.packagesFromDirectoryRecursive, () =>
                  scope.attrSet$({
                    callPackage: () =>
                      scope.func$(
                        "path",
                        (scope) =>
                          scope.func$("overrides", (scope) =>
                            scope.apply$(scope.import, () =>
                              scope.path, () =>
                              scope.overrides)),
                      ),
                    directory: () =>
                      scope.apply$(
                        scope.toString,
                        new scope.Path$([
                          new URL(
                            "./packages-from-directory/plain",
                            import.meta.url,
                          ).pathname,
                        ], []),
                      ),
                  })),
              expected: {
                a: "a",
                b: "b",
                c: "c",
                "my-namespace": {
                  d: "d",
                  e: "e",
                  f: "f",
                  "my-sub-namespace": { g: "g", h: "h" },
                },
              },
            }),
          testPackagesFromDirectoryRecursiveTopLevelPackageNix: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.packagesFromDirectoryRecursive, () =>
                  scope.attrSet$({
                    callPackage: () =>
                      scope.func$(
                        "path",
                        (scope) =>
                          scope.func$("overrides", (scope) =>
                            scope.apply$(scope.import, () =>
                              scope.path, () =>
                              scope.overrides)),
                      ),
                    directory:
                      (new scope.Path$([
                        new URL(
                          "./packages-from-directory/plain/c",
                          import.meta.url,
                        ).pathname,
                      ], [])),
                  })),
              expected: "c",
            }),
          testMergeTypesSimple: () => scope.let$({
            mergedType: (scope) =>
              scope.apply$(
                scope.types["mergeTypes"],
                () => scope.types["str"],
                () => scope.types["str"],
              ),
          }).in$((scope) => scope.attrSet$({
            expr: () => scope.mergedType["name"],
            expected: "str",
          })),
          testMergeTypesFail: () =>
            scope.let$({
              mergedType: (scope) =>
                scope.apply$(
                  scope.types["mergeTypes"],
                  () => scope.types["str"],
                  () => scope.types["int"],
                ),
            }).in$((scope) => scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.types["isType"],
                  "merge-error",
                  () => scope.mergedType,
                ),
              expected: true,
            })),
          testMergeTypesEnum: () =>
            scope.let$({
              enumAB: (scope) =>
                scope.apply$(scope.lib["types"]["enum"], ["A", "B"]),
              enumXY: (scope) =>
                scope.apply$(scope.lib["types"]["enum"], ["X", "Y"]),
              merged: (scope) =>
                scope.apply$(
                  scope.lib["types"]["mergeTypes"],
                  () => scope.enumAB,
                  () => scope.enumXY,
                ),
            }).in$((scope) =>
              scope.attrSet$({
                expr: () =>
                  scope.attrSet$({
                    checkA: () => scope.apply$(scope.merged["check"], "A"),
                    checkB: () => scope.apply$(scope.merged["check"], "B"),
                    checkX: () => scope.apply$(scope.merged["check"], "X"),
                    checkY: () => scope.apply$(scope.merged["check"], "Y"),
                    checkC: () => scope.apply$(scope.merged["check"], "C"),
                  }),
                expected: {
                  checkA: true,
                  checkB: true,
                  checkX: true,
                  checkY: true,
                  checkC: false,
                },
              })
            ),
          testPackagesFromDirectoryNestedScopes: () =>
            scope.let$({
              makeScope: (scope) => scope.lib["makeScope"],
              emptyScope: (scope) =>
                scope.apply$(
                  scope.makeScope,
                  () => scope.lib["callPackageWith"],
                  () => scope.func$("_", (scope) => ({})),
                ),
            }).in$((scope) =>
              scope.attrSet$({
                expr: () =>
                  scope.apply$(
                    scope.lib["filterAttrsRecursive"],
                    () =>
                      scope.func$("name", (scope) =>
                        scope.func$("value", (scope) =>
                          scope.operators$.negate(
                            scope.apply$(scope.lib["elem"], () =>
                              scope.name, [
                              "callPackage",
                              "newScope",
                              "overrideScope",
                              "packages",
                            ]),
                          ))),
                    () =>
                      scope.apply$(scope.packagesFromDirectoryRecursive, () =>
                        scope.attrSet$({
                          callPackage: () =>
                            scope.emptyScope.callPackage,
                          newScope: () =>
                            scope.emptyScope.newScope,
                          directory:
                            (new scope.Path$([
                              new URL(
                                "./packages-from-directory/scope",
                                import.meta.url,
                              ).pathname,
                            ], [])),
                        })),
                  ),
                expected: () =>
                  scope.apply$(scope.lib["recurseIntoAttrs"], () =>
                    scope.attrSet$({
                      a: "a",
                      b: "b",
                      c: "c",
                      "my-namespace": () =>
                        scope.apply$(
                          scope.lib["recurseIntoAttrs"],
                          () =>
                            scope.attrSet$({
                              d: "d",
                              e: "e",
                              f: "f",
                              "my-sub-namespace": () =>
                                scope.apply$(scope.lib["recurseIntoAttrs"], {
                                  g: "g",
                                  h: "h",
                                }),
                            }),
                        ),
                    })),
              })
            ),
          testMakeScopeDefaultCallPackage: () =>
            scope.let$({
              scope: (scope) =>
                scope.apply$(
                  scope.lib["makeScope"],
                  () => scope.lib["callPackageWith"],
                  () =>
                    scope.func$("self", (scope) =>
                      scope.attrSet$({
                        foo: () =>
                          scope.apply$(
                            scope.self["callPackage"],
                            () => scope.func$({}, (scope) => "foo-value"),
                            {},
                          ),
                      })),
                ),
            }).in$((scope) => scope.attrSet$({
              expr: () => scope.scope["foo"],
              expected: "foo-value",
            })),
          testMakeScopeOverrideCallPackage: () =>
            scope.let$({
              customCallPackage: (scope) =>
                scope.func$(
                  "_self",
                  (scope) =>
                    scope.func$("fn", (scope) =>
                      scope.func$("args", (scope) =>
                        scope.operators$.add(
                          scope.apply$(scope.fn, () => scope.args),
                          "-custom",
                        ))),
                ),
              scope: (scope) =>
                scope.apply$(
                  scope.lib["makeScope"],
                  () => scope.lib["callPackageWith"],
                  () =>
                    scope.func$("self", (scope) =>
                      scope.attrSet$({
                        callPackage: () =>
                          scope.apply$(
                            scope.customCallPackage,
                            () => scope.self,
                          ),
                        foo: () =>
                          scope.apply$(
                            scope.self["callPackage"],
                            () => scope.func$({}, (scope) => "foo-value"),
                            {},
                          ),
                      })),
                ),
            }).in$((scope) => scope.attrSet$({
              expr: () => scope.scope["foo"],
              expected: "foo-value-custom",
            })),
          testMakeScopeOverrideCallPackagePersistsThroughOverrideScope: () =>
            scope.let$({
              customCallPackage: (scope) =>
                scope.func$(
                  "_self",
                  (scope) =>
                    scope.func$("fn", (scope) =>
                      scope.func$("args", (scope) =>
                        scope.operators$.add(
                          scope.apply$(scope.fn, () => scope.args),
                          "-custom",
                        ))),
                ),
              scope: (scope) =>
                scope.apply$(
                  scope.lib["makeScope"],
                  () => scope.lib["callPackageWith"],
                  () =>
                    scope.func$("self", (scope) =>
                      scope.attrSet$({
                        callPackage: () =>
                          scope.apply$(
                            scope.customCallPackage,
                            () => scope.self,
                          ),
                        foo: () =>
                          scope.apply$(
                            scope.self["callPackage"],
                            () => scope.func$({}, (scope) => "foo-value"),
                            {},
                          ),
                      })),
                ),
              overridden: (scope) =>
                scope.apply$(
                  scope.scope["overrideScope"],
                  () =>
                    scope.func$("_final", (scope) =>
                      scope.func$("_prev", (scope) =>
                        scope.attrSet$({
                          bar: () =>
                            scope.apply$(scope.scope["callPackage"], () =>
                              scope.func$({}, (scope) =>
                                "bar-value"), {}),
                        }))),
                ),
            }).in$((scope) => scope.attrSet$({
              expr: () =>
                scope.attrSet$({
                  foo: () => scope.overridden.foo,
                  bar: () => scope.overridden.bar,
                }),
              expected: { foo: "foo-value-custom", bar: "bar-value-custom" },
            })),
          testFilesystemResolveDefaultNixFile1: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.lib["filesystem"]["resolveDefaultNix"],
                new scope.Path$([
                  new URL("./foo.nix", import.meta.url).pathname,
                ], []),
              ),
            expected:
              (new scope.Path$(
                [new URL("./foo.nix", import.meta.url).pathname],
                [],
              )),
          }),
          testFilesystemResolveDefaultNixFile2: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.lib["filesystem"]["resolveDefaultNix"],
                new scope.Path$([
                  new URL("./default.nix", import.meta.url).pathname,
                ], []),
              ),
            expected:
              (new scope.Path$([
                new URL("./default.nix", import.meta.url).pathname,
              ], [])),
          }),
          testFilesystemResolveDefaultNixDir1: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.lib["filesystem"]["resolveDefaultNix"],
                new scope.Path$(
                  [new URL("../tests", import.meta.url).pathname],
                  [],
                ),
              ),
            expected:
              (new scope.Path$([
                new URL("./default.nix", import.meta.url).pathname,
              ], [])),
          }),
          testFilesystemResolveDefaultNixFile1_toString: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.lib["filesystem"]["resolveDefaultNix"],
                  () =>
                    scope.apply$(
                      scope.toString,
                      new scope.Path$([
                        new URL("./foo.nix", import.meta.url).pathname,
                      ], []),
                    ),
                ),
              expected: () =>
                scope.apply$(
                  scope.toString,
                  new scope.Path$([
                    new URL("./foo.nix", import.meta.url).pathname,
                  ], []),
                ),
            }),
          testFilesystemResolveDefaultNixFile2_toString: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.lib["filesystem"]["resolveDefaultNix"],
                  () =>
                    scope.apply$(
                      scope.toString,
                      new scope.Path$([
                        new URL("./default.nix", import.meta.url).pathname,
                      ], []),
                    ),
                ),
              expected: () =>
                scope.apply$(
                  scope.toString,
                  new scope.Path$([
                    new URL("./default.nix", import.meta.url).pathname,
                  ], []),
                ),
            }),
          testFilesystemResolveDefaultNixDir1_toString: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.lib["filesystem"]["resolveDefaultNix"],
                  () =>
                    scope.apply$(
                      scope.toString,
                      new scope.Path$([
                        new URL("../tests", import.meta.url).pathname,
                      ], []),
                    ),
                ),
              expected: () =>
                scope.apply$(
                  scope.toString,
                  new scope.Path$([
                    new URL("./default.nix", import.meta.url).pathname,
                  ], []),
                ),
            }),
          testFilesystemResolveDefaultNixDir1_toString2: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.lib["filesystem"]["resolveDefaultNix"],
                  () =>
                    scope.apply$(
                      scope.toString,
                      new scope.Path$([
                        new URL("../tests", import.meta.url).pathname,
                      ], []),
                    ),
                ),
              expected: () =>
                scope.operators$.add(
                  scope.apply$(
                    scope.toString,
                    new scope.Path$([
                      new URL("../tests", import.meta.url).pathname,
                    ], []),
                  ),
                  "/default.nix",
                ),
            }),
          testFilesystemResolveDefaultNixNonExistent: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.lib["filesystem"]["resolveDefaultNix"],
                "/non-existent/this/does/not/exist/for/real/please-dont-mess-with-your-local-fs",
              ),
            expected:
              "/non-existent/this/does/not/exist/for/real/please-dont-mess-with-your-local-fs",
          }),
          testFilesystemResolveDefaultNixNonExistentDir: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.lib["filesystem"]["resolveDefaultNix"],
                "/non-existent/this/does/not/exist/for/real/please-dont-mess-with-your-local-fs/",
              ),
            expected:
              "/non-existent/this/does/not/exist/for/real/please-dont-mess-with-your-local-fs/default.nix",
          }),
          testRenameCrossIndexFrom: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.lib["renameCrossIndexFrom"], "pkgs", {
                  pkgsBuildBuild: "dummy-build-build",
                  pkgsBuildHost: "dummy-build-host",
                  pkgsBuildTarget: "dummy-build-target",
                  pkgsHostHost: "dummy-host-host",
                  pkgsHostTarget: "dummy-host-target",
                  pkgsTargetTarget: "dummy-target-target",
                }),
              expected: {
                buildBuild: "dummy-build-build",
                buildHost: "dummy-build-host",
                buildTarget: "dummy-build-target",
                hostHost: "dummy-host-host",
                hostTarget: "dummy-host-target",
                targetTarget: "dummy-target-target",
              },
            }),
          testRenameCrossIndexTo: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.lib["renameCrossIndexTo"], "self", {
                  buildBuild: "dummy-build-build",
                  buildHost: "dummy-build-host",
                  buildTarget: "dummy-build-target",
                  hostHost: "dummy-host-host",
                  hostTarget: "dummy-host-target",
                  targetTarget: "dummy-target-target",
                }),
              expected: {
                selfBuildBuild: "dummy-build-build",
                selfBuildHost: "dummy-build-host",
                selfBuildTarget: "dummy-build-target",
                selfHostHost: "dummy-host-host",
                selfHostTarget: "dummy-host-target",
                selfTargetTarget: "dummy-target-target",
              },
            }),
          testMapCrossIndex: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.lib["mapCrossIndex"],
                  () =>
                    scope.func$("x", (scope) =>
                      scope.operators$.multiply(scope.x, 10n)),
                  {
                    buildBuild: 1n,
                    buildHost: 2n,
                    buildTarget: 3n,
                    hostHost: 4n,
                    hostTarget: 5n,
                    targetTarget: 6n,
                  },
                ),
              expected: {
                buildBuild: 10n,
                buildHost: 20n,
                buildTarget: 30n,
                hostHost: 40n,
                hostTarget: 50n,
                targetTarget: 60n,
              },
            }),
          testMapCrossIndexString: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.lib["mapCrossIndex"],
                  () =>
                    scope.func$("x", (scope) =>
                      scope.str$(() => ["prefix-", scope.x])),
                  {
                    buildBuild: "bb",
                    buildHost: "bh",
                    buildTarget: "bt",
                    hostHost: "hh",
                    hostTarget: "ht",
                    targetTarget: "tt",
                  },
                ),
              expected: {
                buildBuild: "prefix-bb",
                buildHost: "prefix-bh",
                buildTarget: "prefix-bt",
                hostHost: "prefix-hh",
                hostTarget: "prefix-ht",
                targetTarget: "prefix-tt",
              },
            }),
          testReplaceElemAt: () => scope.attrSet$({
            expr: () =>
              scope.apply$(scope.lib["replaceElemAt"], [1n, 2n, 3n], 1n, "a"),
            expected: [1n, "a", 3n],
          }),
          testReplaceElemAtOutOfRange: () =>
            scope.apply$(
              scope.testingThrow,
              () =>
                scope.apply$(scope.lib["replaceElemAt"], [1n, 2n, 3n], 5n, "a"),
            ),
          testReplaceElemAtNegative: () =>
            scope.apply$(
              scope.testingThrow,
              () =>
                scope.apply$(
                  scope.lib["replaceElemAt"],
                  [1n, 2n, 3n],
                  -1n,
                  "a",
                ),
            ),
          testIsFree: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.lib["licenses"]["isFree"], () =>
                  scope.apply$(
                    scope.lib["licenses"]["AND"],
                    () => [
                      scope.lib["licenses"]["mit"],
                      scope.apply$(
                        scope.lib["licenses"]["OR"],
                        () => [
                          scope.lib["licenses"]["free"],
                          scope.lib["licenses"]["unfree"],
                        ],
                      ),
                      scope.apply$(
                        scope.lib["licenses"]["WITH"],
                        () => scope.lib["licenses"]["asl20"],
                        () => scope.lib["licenses"]["llvm-exception"],
                      ),
                      scope.apply$(
                        scope.lib["licenses"]["PLUS"],
                        () => scope.lib["licenses"]["eupl11"],
                      ),
                    ],
                  )),
              expected: true,
            }),
          testIsUnfree: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.lib["licenses"]["isFree"], () =>
                  scope.apply$(
                    scope.lib["licenses"]["AND"],
                    () => [
                      scope.lib["licenses"]["mit"],
                      scope.apply$(
                        scope.lib["licenses"]["OR"],
                        () => [scope.lib["licenses"]["unfree"]],
                      ),
                      scope.apply$(
                        scope.lib["licenses"]["WITH"],
                        () => scope.lib["licenses"]["asl20"],
                        () => scope.lib["licenses"]["llvm-exception"],
                      ),
                      scope.apply$(
                        scope.lib["licenses"]["PLUS"],
                        () => scope.lib["licenses"]["eupl11"],
                      ),
                    ],
                  )),
              expected: false,
            }),
          testIsRedistributable: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.lib["licenses"]["isRedistributable"], () =>
                  scope.apply$(
                    scope.lib["licenses"]["AND"],
                    () => [
                      scope.lib["licenses"]["mit"],
                      scope.apply$(
                        scope.lib["licenses"]["OR"],
                        () => [
                          scope.lib["licenses"]["free"],
                          scope.lib["licenses"]["unfree"],
                        ],
                      ),
                      scope.apply$(
                        scope.lib["licenses"]["WITH"],
                        () => scope.lib["licenses"]["asl20"],
                        () => scope.lib["licenses"]["llvm-exception"],
                      ),
                      scope.apply$(
                        scope.lib["licenses"]["PLUS"],
                        () => scope.lib["licenses"]["eupl11"],
                      ),
                    ],
                  )),
              expected: true,
            }),
          testIsUnredistributable: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.lib["licenses"]["isRedistributable"], () =>
                  scope.apply$(
                    scope.lib["licenses"]["AND"],
                    () => [
                      scope.lib["licenses"]["mit"],
                      scope.apply$(
                        scope.lib["licenses"]["OR"],
                        () => [scope.lib["licenses"]["unfree"]],
                      ),
                      scope.apply$(
                        scope.lib["licenses"]["WITH"],
                        () => scope.lib["licenses"]["asl20"],
                        () => scope.lib["licenses"]["llvm-exception"],
                      ),
                      scope.apply$(
                        scope.lib["licenses"]["PLUS"],
                        () => scope.lib["licenses"]["eupl11"],
                      ),
                    ],
                  )),
              expected: false,
            }),
          testContainsLicenses: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.lib["licenses"]["containsLicenses"],
                  () => [scope.lib["licenses"]["mit"]],
                  () =>
                    scope.apply$(
                      scope.lib["licenses"]["AND"],
                      () => [
                        scope.lib["licenses"]["mit"],
                        scope.apply$(
                          scope.lib["licenses"]["OR"],
                          () => [
                            scope.lib["licenses"]["free"],
                            scope.lib["licenses"]["unfree"],
                          ],
                        ),
                        scope.apply$(
                          scope.lib["licenses"]["WITH"],
                          () => scope.lib["licenses"]["asl20"],
                          () => scope.lib["licenses"]["llvm-exception"],
                        ),
                        scope.apply$(
                          scope.lib["licenses"]["PLUS"],
                          () => scope.lib["licenses"]["eupl11"],
                        ),
                      ],
                    ),
                ),
              expected: true,
            }),
          testToSPDX: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.lib["licenses"]["toSPDX"], () =>
                  scope.apply$(
                    scope.lib["licenses"]["AND"],
                    () => [
                      scope.lib["licenses"]["mit"],
                      scope.apply$(
                        scope.lib["licenses"]["OR"],
                        () => [
                          scope.lib["licenses"]["free"],
                          scope.lib["licenses"]["unfree"],
                        ],
                      ),
                      scope.apply$(
                        scope.lib["licenses"]["WITH"],
                        () => scope.lib["licenses"]["asl20"],
                        () => scope.lib["licenses"]["llvm-exception"],
                      ),
                      scope.apply$(
                        scope.lib["licenses"]["PLUS"],
                        () => scope.lib["licenses"]["eupl11"],
                      ),
                    ],
                  )),
              expected:
                "MIT AND (LicenseRef-nixos-free OR LicenseRef-nixos-unfree) AND (Apache-2.0 WITH LLVM-exception) AND EUPL-1.1+",
            }),
          testEvaluateProperty: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.lib["licenses"]["evaluateProperty"],
                  () => scope.func$("x", (scope) => scope.x["deprecated"]),
                  true,
                  () =>
                    scope.apply$(
                      scope.lib["licenses"]["AND"],
                      () => [
                        scope.lib["licenses"]["mit"],
                        scope.apply$(
                          scope.lib["licenses"]["OR"],
                          () => [
                            scope.lib["licenses"]["free"],
                            scope.lib["licenses"]["unfree"],
                          ],
                        ),
                        scope.apply$(
                          scope.lib["licenses"]["WITH"],
                          () => scope.lib["licenses"]["asl20"],
                          () => scope.lib["licenses"]["llvm-exception"],
                        ),
                        scope.apply$(
                          scope.lib["licenses"]["PLUS"],
                          () => scope.lib["licenses"]["eupl11"],
                        ),
                      ],
                    ),
                ),
              expected: false,
            }),
          testMapDefinitionValuePlain: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.lib["modules"]["mapDefinitionValue"],
                () =>
                  scope.func$("x", (scope) =>
                    scope.operators$.add(scope.x, 1n)),
                5n,
              ),
            expected: 6n,
          }),
          testMapDefinitionValueMkForce: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.lib["modules"]["mapDefinitionValue"],
                () =>
                  scope.func$("x", (scope) =>
                    scope.operators$.add(scope.x, 1n)),
                () => scope.apply$(scope.lib["mkForce"], 5n),
              ),
            expected: () => scope.apply$(scope.lib["mkForce"], 6n),
          }),
          testMapDefinitionValueMkDefault: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.lib["modules"]["mapDefinitionValue"],
                () =>
                  scope.func$("x", (scope) =>
                    scope.operators$.add(scope.x, 1n)),
                () => scope.apply$(scope.lib["mkDefault"], 5n),
              ),
            expected: () => scope.apply$(scope.lib["mkDefault"], 6n),
          }),
          testMapDefinitionValueMkOrder: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.lib["modules"]["mapDefinitionValue"],
                () =>
                  scope.func$("x", (scope) =>
                    scope.operators$.add(scope.x, 1n)),
                () => scope.apply$(scope.lib["mkOrder"], 500n, 5n),
              ),
            expected: () => scope.apply$(scope.lib["mkOrder"], 500n, 6n),
          }),
          testMapDefinitionValueMkOverrideNested: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.lib["modules"]["mapDefinitionValue"],
                  () =>
                    scope.func$("x", (scope) =>
                      scope.operators$.add(scope.x, 1n)),
                  () =>
                    scope.apply$(scope.lib["mkForce"], () =>
                      scope.apply$(scope.lib["mkOrder"], 500n, 5n)),
                ),
              expected: () =>
                scope.apply$(
                  scope.lib["mkForce"],
                  () => scope.apply$(scope.lib["mkOrder"], 500n, 6n),
                ),
            }),
          testMapDefinitionValueMkIf: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.lib["modules"]["mapDefinitionValue"],
                () =>
                  scope.func$("x", (scope) =>
                    scope.operators$.add(scope.x, 1n)),
                () => scope.apply$(scope.lib["mkIf"], true, 5n),
              ),
            expected: () => scope.apply$(scope.lib["mkIf"], true, 6n),
          }),
          testMapDefinitionValueMkMerge: () => scope.attrSet$({
            expr: () =>
              scope.apply$(
                scope.lib["modules"]["mapDefinitionValue"],
                () =>
                  scope.func$("x", (scope) =>
                    scope.operators$.add(scope.x, 1n)),
                () => scope.apply$(scope.lib["mkMerge"], [5n, 10n]),
              ),
            expected: () => scope.apply$(scope.lib["mkMerge"], [6n, 11n]),
          }),
          testMapDefinitionValueMkDefinition: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.lib["modules"]["mapDefinitionValue"],
                  () =>
                    scope.func$("x", (scope) =>
                      scope.operators$.add(scope.x, 1n)),
                  () =>
                    scope.apply$(scope.lib["mkDefinition"], {
                      file: "test",
                      value: 5n,
                    }),
                ),
              expected: () =>
                scope.apply$(scope.lib["mkDefinition"], {
                  file: "test",
                  value: 6n,
                }),
            }),
          testMapDefinitionValueDeep: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.lib["modules"]["mapDefinitionValue"],
                  () =>
                    scope.func$("x", (scope) =>
                      scope.operators$.add(scope.x, 1n)),
                  () =>
                    scope.apply$(scope.lib["mkIf"], true, () =>
                      scope.apply$(scope.lib["mkForce"], () =>
                        scope.apply$(scope.lib["mkOrder"], 500n, 5n))),
                ),
              expected: () =>
                scope.apply$(
                  scope.lib["mkIf"],
                  true,
                  () =>
                    scope.apply$(
                      scope.lib["mkForce"],
                      () => scope.apply$(scope.lib["mkOrder"], 500n, 6n),
                    ),
                ),
            }),
          testMapDefinitionValueAllNested: () =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(
                  scope.lib["modules"]["mapDefinitionValue"],
                  () =>
                    scope.func$("x", (scope) =>
                      scope.operators$.add(scope.x, 1n)),
                  () =>
                    scope.apply$(
                      scope.lib["mkMerge"],
                      () => [scope.apply$(scope.lib["mkIf"], true, () =>
                        scope.apply$(scope.lib["mkForce"], () =>
                          scope.apply$(scope.lib["mkOrder"], 500n, () =>
                            scope.apply$(scope.lib["mkDefinition"], () =>
                              scope.attrSet$({
                                file: "test",
                                value: () =>
                                  scope.apply$(scope.lib["mkBefore"], 5n),
                              })))))],
                    ),
                ),
              expected: () =>
                scope.apply$(
                  scope.lib["mkMerge"],
                  () => [scope.apply$(scope.lib["mkIf"], true, () =>
                    scope.apply$(scope.lib["mkForce"], () =>
                      scope.apply$(scope.lib["mkOrder"], 500n, () =>
                        scope.apply$(scope.lib["mkDefinition"], () =>
                          scope.attrSet$({
                            file: "test",
                            value: () =>
                              scope.apply$(scope.lib["mkBefore"], 6n),
                          })))))],
                ),
            }),
        }))
    )
  ),
);
