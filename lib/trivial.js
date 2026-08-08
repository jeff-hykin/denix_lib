import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./trivial.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        isFunction: (scope) => scope.lib["trivial"]["isFunction"],
        isInt: (scope) => scope.lib["trivial"]["isInt"],
        functionArgs: (scope) => scope.lib["trivial"]["functionArgs"],
        pathExists: (scope) => scope.lib["trivial"]["pathExists"],
        release: (scope) => scope.lib["trivial"]["release"],
        toBaseDigits: (scope) => scope.lib["trivial"]["toBaseDigits"],
        version: (scope) => scope.lib["trivial"]["version"],
        versionSuffix: (scope) => scope.lib["trivial"]["versionSuffix"],
        warn: (scope) => scope.lib["trivial"]["warn"],
        foldr: (scope) => scope.lib["foldr"],
        fromJSON: (scope) => scope.lib["fromJSON"],
        isString: (scope) => scope.lib["isString"],
        readFile: (scope) => scope.lib["readFile"],
      }).in$((scope) =>
        scope.attrSet$({
          pathExists: () => scope.builtins.pathExists,
          readFile: () => scope.builtins.readFile,
          isBool: () => scope.builtins.isBool,
          isInt: () => scope.builtins.isInt,
          isFloat: () => scope.builtins.isFloat,
          add: () => scope.builtins.add,
          sub: () => scope.builtins.sub,
          mul: () => scope.builtins.mul,
          div: () => scope.builtins.div,
          lessThan: () => scope.builtins.lessThan,
          seq: () => scope.builtins.seq,
          deepSeq: () => scope.builtins.deepSeq,
          genericClosure: () => scope.builtins.genericClosure,
          bitAnd: () => scope.builtins.bitAnd,
          bitOr: () => scope.builtins.bitOr,
          bitXor: () => scope.builtins.bitXor,
          ceil: () => scope.builtins.ceil,
          floor: () => scope.builtins.floor,
          id: () => scope.func$("x", (scope) => scope.x),
          const: () =>
            scope.func$("x", (scope) => scope.func$("y", (scope) => scope.x)),
          pipe: () =>
            scope.apply$(scope.builtins["foldl'"], () =>
              scope.func$("x", (scope) =>
                scope.func$(
                  "f",
                  (scope) => scope.apply$(scope.f, () => scope.x),
                ))),
          concat: () =>
            scope.func$(
              "x",
              (scope) =>
                scope.func$("y", (scope) =>
                  scope.operators$.listConcat(scope.x, scope.y)),
            ),
          or: () =>
            scope.func$(
              "x",
              (scope) => scope.func$("y", (scope) => ((scope.x) || (scope.y))),
            ),
          and: () =>
            scope.func$(
              "x",
              (scope) => scope.func$("y", (scope) => ((scope.x) && (scope.y))),
            ),
          xor: () =>
            scope.func$(
              "x",
              (scope) =>
                scope.func$("y", (scope) =>
                  scope.operators$.notEqual(
                    scope.operators$.negate(scope.x),
                    scope.operators$.negate(scope.y),
                  )),
            ),
          bitNot: () => scope.apply$(scope.builtins["sub"], -1n),
          boolToString: () =>
            scope.func$(
              "b",
              (scope) => scope.if$(scope.b).then$("true").else$("false"),
            ),
          boolToYesNo: () =>
            scope.func$(
              "b",
              (scope) => scope.if$(scope.b).then$("yes").else$("no"),
            ),
          mergeAttrs: () =>
            scope.func$(
              "x",
              (scope) =>
                scope.func$("y", (scope) =>
                  scope.operators$.merge(scope.x, scope.y)),
            ),
          flip: () =>
            scope.func$(
              "f",
              (scope) =>
                scope.func$("a", (scope) =>
                  scope.func$("b", (scope) =>
                    scope.apply$(scope.f, () =>
                      scope.b, () =>
                      scope.a))),
            ),
          defaultTo: () =>
            scope.func$(
              "default",
              (scope) =>
                scope.func$("maybeValue", (scope) =>
                  scope.if$(scope.operators$.notEqual(scope.maybeValue, null))
                    .then$(() =>
                      scope.maybeValue
                    ).else$(() => scope.default)),
            ),
          mapNullable: () =>
            scope.func$(
              "f",
              (scope) =>
                scope.func$("a", (scope) =>
                  scope.if$(scope.operators$.equal(scope.a, null)).then$(() =>
                    scope.a
                  ).else$(() =>
                    scope.apply$(scope.f, () => scope.a)
                  )),
            ),
          version: () =>
            scope.operators$.add(scope.release, scope.versionSuffix),
          release: () =>
            scope.apply$(
              scope.lib["strings"]["fileContents"],
              new scope.Path$(
                [new URL(".version", import.meta.url).pathname],
                [],
              ),
            ),
          oldestSupportedRelease: 2605n,
          isInOldestRelease: () =>
            scope.apply$(
              scope.lib["warnIf"],
              () =>
                scope.apply$(
                  scope.lib["oldestSupportedReleaseIsAtLeast"],
                  2411n,
                ),
              "lib.isInOldestRelease is deprecated. Use lib.oldestSupportedReleaseIsAtLeast instead.",
              () => scope.lib["oldestSupportedReleaseIsAtLeast"],
            ),
          oldestSupportedReleaseIsAtLeast: () =>
            scope.func$(
              "release",
              (scope) =>
                scope.operators$.lessThanOrEqual(
                  scope.release,
                  scope.lib["trivial"]["oldestSupportedRelease"],
                ),
            ),
          codeName: "Zokor",
          versionSuffix: () =>
            scope.let$({
              suffixFile:
                (new scope.Path$([
                  new URL("../.version-suffix", import.meta.url).pathname,
                ], [])),
            }).in$((scope) =>
              scope.if$(scope.apply$(scope.pathExists, () => scope.suffixFile))
                .then$(() =>
                  scope.apply$(scope.lib["strings"]["fileContents"], () =>
                    scope.suffixFile)
                ).else$("pre-git")
            ),
          revisionWithDefault: () =>
            scope.func$("default", (scope) =>
              scope.let$({
                revisionFile: (scope) =>
                  scope.str$(
                    () => [
                      scope.apply$(
                        scope.toString,
                        new scope.Path$([
                          new URL("../../nixpkgs.lib", import.meta.url)
                            .pathname,
                        ], []),
                      ),
                      "/.git-revision",
                    ]
                  ),
                gitRepo: (scope) =>
                  scope.str$(
                    () => [
                      scope.apply$(
                        scope.toString,
                        new scope.Path$([
                          new URL("../../nixpkgs.lib", import.meta.url)
                            .pathname,
                        ], []),
                      ),
                      "/.git",
                    ]
                  ),
              }).in$((scope) =>
                scope.if$(scope.apply$(scope.lib["pathIsGitRepo"], () =>
                  scope.gitRepo)).then$(() =>
                    scope.apply$(scope.lib["commitIdFromGitRepo"], () =>
                      scope.gitRepo)
                  ).elseIf$(() =>
                    scope.apply$(scope.lib["pathExists"], () =>
                      scope.revisionFile)
                  ).then$(() =>
                    scope.apply$(scope.lib["fileContents"], () =>
                      scope.revisionFile)
                  ).else$(() =>
                    scope.default
                  )
              )),
          nixpkgsVersion: () =>
            scope.apply$(
              scope.warn,
              "lib.nixpkgsVersion is a deprecated alias of lib.version.",
              () => scope.version,
            ),
          inNixShell: () =>
            scope.operators$.notEqual(
              scope.apply$(scope.builtins["getEnv"], "IN_NIX_SHELL"),
              "",
            ),
          inPureEvalMode: () =>
            scope.operators$.negate(
              scope.operators$.hasAttr(scope.builtins, "currentSystem"),
            ),
          min: () =>
            scope.func$("x", (scope) =>
              scope.func$("y", (scope) =>
                scope.if$(scope.operators$.lessThan(scope.x, scope.y)).then$(
                  () =>
                    scope.x
                ).else$(() =>
                  scope.y
                ))),
          max: () =>
            scope.func$("x", (scope) =>
              scope.func$("y", (scope) =>
                scope.if$(scope.operators$.greaterThan(scope.x, scope.y)).then$(
                  () =>
                    scope.x
                ).else$(() =>
                  scope.y
                ))),
          mod: () =>
            scope.func$("base", (scope) =>
              scope.func$("int", (scope) =>
                scope.operators$.subtract(
                  scope.base,
                  scope.operators$.multiply(
                    scope.int,
                    scope.apply$(
                      scope.builtins["div"],
                      () => scope.base,
                      () => scope.int,
                    ),
                  ),
                ))),
          compare: () =>
            scope.func$("a", (scope) =>
              scope.func$("b", (scope) =>
                scope.if$(scope.operators$.lessThan(scope.a, scope.b)).then$(
                  -1n,
                ).elseIf$(() =>
                  scope.operators$.greaterThan(scope.a, scope.b)
                ).then$(1n).else$(0n))),
          splitByAndCompare: () =>
            scope.func$("p", (scope) =>
              scope.func$("yes", (scope) =>
                scope.func$("no", (scope) =>
                  scope.func$("a", (scope) =>
                    scope.func$("b", (scope) =>
                      scope.if$(scope.apply$(scope.p, () =>
                        scope.a)).then$(() =>
                          scope.if$(scope.apply$(scope.p, () =>
                            scope.b)).then$(() =>
                              scope.apply$(scope.yes, () =>
                                scope.a, () =>
                                scope.b)
                            ).else$(-1n)
                        ).elseIf$(() =>
                          scope.apply$(scope.p, () =>
                            scope.b)
                        ).then$(1n).else$(() =>
                          scope.apply$(scope.no, () =>
                            scope.a, () =>
                            scope.b)
                        )))))),
          importJSON: () =>
            scope.func$("path", (scope) =>
              scope.apply$(scope.fromJSON, () =>
                scope.apply$(scope.readFile, () =>
                  scope.path))),
          importTOML: () =>
            scope.func$("path", (scope) =>
              scope.apply$(scope.fromTOML, () =>
                scope.apply$(scope.readFile, () =>
                  scope.path))),
          warn: () =>
            scope.operators$.selectOrDefault(scope.builtins, ["warn"], () =>
              scope.let$({
                mustAbort: (scope) =>
                  scope.apply$(
                    scope.lib["elem"],
                    () =>
                      scope.apply$(
                        scope.builtins["getEnv"],
                        "NIX_ABORT_ON_WARN",
                      ),
                    ["1", "true", "yes"],
                  ),
              }).in$((scope) =>
                scope.func$("msg", (scope) =>
                  scope.func$("v", (scope) =>
                    ((_cond) => {
                      if (!_cond) {
                        throw new Error("assertion failed: " + "isString msg");
                      }
                      return scope.if$(scope.mustAbort).then$(() =>
                        scope.apply$(scope.builtins["trace"], () =>
                          scope.str$(
                            () => [
                              "\u001b[1;31mevaluation warning:\u001b[0m ",
                              scope.msg,
                            ]
                          ), () =>
                          scope.apply$(
                            scope.abort,
                            "NIX_ABORT_ON_WARN=true; warnings are treated as unrecoverable errors.",
                          ))
                      ).else$(() =>
                        scope.apply$(scope.builtins["trace"], () =>
                          scope.str$(
                            () => [
                              "\u001b[1;35mevaluation warning:\u001b[0m ",
                              scope.msg,
                            ]
                          ), () =>
                          scope.v)
                      );
                    })(scope.apply$(scope.isString, () =>
                      scope.msg))))
              )),
          warnIf: () =>
            scope.func$("cond", (scope) =>
              scope.func$("msg", (scope) =>
                scope.if$(scope.cond).then$(() =>
                  scope.apply$(scope.warn, () =>
                    scope.msg)
                ).else$(() =>
                  scope.func$("x", (scope) =>
                    scope.x)
                ))),
          warnIfNot: () =>
            scope.func$("cond", (scope) =>
              scope.func$("msg", (scope) =>
                scope.if$(scope.cond).then$(() =>
                  scope.func$("x", (scope) =>
                    scope.x)
                ).else$(() =>
                  scope.apply$(scope.warn, () =>
                    scope.msg)
                ))),
          throwIfNot: () =>
            scope.func$("cond", (scope) =>
              scope.func$("msg", (scope) =>
                scope.if$(scope.cond).then$(() =>
                  scope.func$("x", (scope) =>
                    scope.x)
                ).else$(() =>
                  scope.apply$(scope.throw, () =>
                    scope.msg)
                ))),
          throwIf: () =>
            scope.func$("cond", (scope) =>
              scope.func$("msg", (scope) =>
                scope.if$(scope.cond).then$(() =>
                  scope.apply$(scope.throw, () =>
                    scope.msg)
                ).else$(() =>
                  scope.func$("x", (scope) =>
                    scope.x)
                ))),
          checkListOfEnum: () =>
            scope.func$("msg", (scope) =>
              scope.func$("valid", (scope) =>
                scope.func$("given", (scope) =>
                  scope.let$({
                    unexpected: (scope) =>
                      scope.apply$(scope.lib["subtractLists"], () =>
                        scope.valid, () =>
                        scope.given),
                  }).in$((scope) =>
                    scope.apply$(
                      scope.lib["throwIfNot"],
                      () => (scope.operators$.equal(scope.unexpected, [])),
                      () =>
                        scope.str$(
                          () => [
                            scope.msg,
                            ": ",
                            scope.apply$(
                              scope.builtins["concatStringsSep"],
                              ", ",
                              () =>
                                scope.apply$(
                                  scope.map,
                                  () => scope.toString,
                                  () => scope.unexpected,
                                ),
                            ),
                            " unexpected; valid ones: ",
                            scope.apply$(
                              scope.builtins["concatStringsSep"],
                              ", ",
                              () =>
                                scope.apply$(
                                  scope.map,
                                  () => scope.toString,
                                  () => scope.valid,
                                ),
                            ),
                          ]
                        ),
                    )
                  )))),
          info: () =>
            scope.func$("msg", (scope) =>
              scope.apply$(scope.builtins["trace"], () =>
                scope.str$(() => ["INFO: ", scope.msg]))),
          showWarnings: () =>
            scope.func$("warnings", (scope) =>
              scope.func$("res", (scope) =>
                scope.apply$(scope.foldr, () =>
                  scope.warn, () =>
                  scope.res, () =>
                  scope.warnings))),
          setFunctionArgs: () =>
            scope.func$("f", (scope) =>
              scope.func$("args", (scope) =>
                scope.attrSet$({
                  __functor: () =>
                    scope.func$("self", (scope) =>
                      scope.f),
                  __functionArgs: () =>
                    scope.args,
                }))),
          functionArgs: () =>
            scope.let$({
              functionArgs: (scope) =>
                scope.builtins["functionArgs"],
            }).in$((scope) =>
              scope.func$("f", (scope) =>
                scope.if$(scope.operators$.hasAttr(scope.f, "__functor")).then$(
                  () =>
                    scope.operators$.selectOrDefault(scope.f, [
                      "__functionArgs",
                    ], () =>
                      scope.apply$(scope.functionArgs, () =>
                        scope.apply$(scope.f["__functor"], () =>
                          scope.f)))
                ).else$(() =>
                  scope.apply$(scope.functionArgs, () =>
                    scope.f)
                ))
            ),
          isFunction: () =>
            scope.let$({
              isFunction: (scope) =>
                scope.builtins["isFunction"],
            }).in$((scope) =>
              scope.func$("f", (scope) => ((scope.apply$(scope.isFunction, () =>
                scope.f)) ||
                ((scope.operators$.hasAttr(scope.f, "__functor")) &&
                  (scope.apply$(scope.isFunction, () =>
                    scope.apply$(scope.f["__functor"], () =>
                      scope.f))))))
            ),
          mirrorFunctionArgs: () =>
            scope.func$("f", (scope) =>
              scope.let$({
                fArgs: (scope) =>
                  scope.apply$(scope.functionArgs, () =>
                    scope.f),
              }).in$((scope) =>
                scope.func$("g", (scope) =>
                  scope.attrSet$({
                    __functor: () =>
                      scope.func$("self", (scope) =>
                        scope.g),
                    __functionArgs: () =>
                      scope.fArgs,
                  }))
              )),
          toFunction: () =>
            scope.func$("v", (scope) =>
              scope.if$(scope.apply$(scope.isFunction, () =>
                scope.v)).then$(() =>
                  scope.v
                ).else$(() =>
                  scope.func$("k", (scope) =>
                    scope.v)
                )),
          fromHexString: () =>
            scope.func$("str", (scope) =>
              scope.let$({
                match: (scope) =>
                  scope.apply$(
                    scope.builtins["match"],
                    "(0x)?([0-7]?[0-9A-Fa-f]{1,15})",
                    () => scope.str,
                  ),
              }).in$((scope) =>
                scope.if$(scope.operators$.notEqual(scope.match, null)).then$(
                  () =>
                    scope.apply$(scope.fromTOML, () =>
                      scope.str$(
                        () => [
                          "v=0x",
                          scope.apply$(
                            scope.builtins["elemAt"],
                            () => scope.match,
                            1n,
                          ),
                        ]
                      ))["v"]
                ).else$(() =>
                  ((_cond) => {
                    if (!_cond) {
                      throw new Error(
                        "assertion failed: " +
                          'lib.warn "fromHexString: ${\n        lib.generators.toPretty { } str\n      } is not a valid input and will be rejected in 26.05" true',
                      );
                    }
                    return scope.let$({
                      noPrefix: (scope) =>
                        scope.apply$(
                          scope.lib["strings"]["removePrefix"],
                          "0x",
                          () =>
                            scope.apply$(
                              scope.lib["strings"]["toLower"],
                              () => scope.str,
                            ),
                        ),
                    }).in$((scope) =>
                      scope.apply$(scope.fromTOML, () =>
                        scope.str$(() => ["v=0x", scope.noPrefix]))["v"]
                    );
                  })(scope.apply$(scope.lib["warn"], () =>
                    scope.str$(
                      () => [
                        "fromHexString: ",
                        scope.apply$(
                          scope.lib["generators"]["toPretty"],
                          {},
                          () => scope.str,
                        ),
                        " is not a valid input and will be rejected in 26.05",
                      ]
                    ), true))
                )
              )),
          toHexString: () =>
            scope.let$({
              hexDigits: (scope) => ({
                "10": "A",
                "11": "B",
                "12": "C",
                "13": "D",
                "14": "E",
                "15": "F",
              }),
              toHexDigit: (scope) =>
                scope.func$("d", (scope) =>
                  scope.if$(scope.operators$.lessThan(scope.d, 10n)).then$(() =>
                    scope.apply$(scope.toString, () =>
                      scope.d)
                  ).else$(() =>
                    scope.hexDigits[
                      scope.apply$(scope.toString, () => scope.d)
                    ]
                  )),
            }).in$((scope) =>
              scope.func$("i", (scope) =>
                scope.apply$(scope.lib["concatMapStrings"], () =>
                  scope.toHexDigit, () =>
                  scope.apply$(scope.toBaseDigits, 16n, () =>
                    scope.i)))
            ),
          toBaseDigits: () =>
            scope.func$("base", (scope) =>
              scope.func$("i", (scope) =>
                scope.let$({
                  go: (scope) =>
                    scope.func$("i", (scope) =>
                      scope.if$(scope.operators$.lessThan(scope.i, scope.base))
                        .then$(() => [scope.i]).else$(() =>
                          scope.let$({
                            r: (scope) =>
                              scope.operators$.subtract(
                                scope.i,
                                scope.operators$.multiply(
                                  scope.operators$.divide(scope.i, scope.base),
                                  scope.base,
                                ),
                              ),
                            q: (scope) =>
                              scope.operators$.divide(
                                scope.operators$.subtract(scope.i, scope.r),
                                scope.base,
                              ),
                          }).in$((scope) =>
                            scope.operators$.listConcat(
                              scope.apply$(scope.go, () =>
                                scope.q),
                              [scope.r],
                            )
                          )
                        )),
                }).in$((scope) =>
                  ((_cond) => {
                    if (!_cond) {
                      throw new Error("assertion failed: " + "(isInt base)");
                    }
                    return ((_cond) => {
                      if (!_cond) {
                        throw new Error("assertion failed: " + "(isInt i)");
                      }
                      return ((_cond) => {
                        if (!_cond) {
                          throw new Error("assertion failed: " + "(base >= 2)");
                        }
                        return ((_cond) => {
                          if (!_cond) {
                            throw new Error("assertion failed: " + "(i >= 0)");
                          }
                          return scope.apply$(scope.go, () =>
                            scope.i);
                        })(scope.operators$.greaterThanOrEqual(scope.i, 0n));
                      })(scope.operators$.greaterThanOrEqual(scope.base, 2n));
                    })(scope.apply$(scope.isInt, () =>
                      scope.i));
                  })(scope.apply$(scope.isInt, () =>
                    scope.base))
                ))),
        })
      ))
  ),
);
