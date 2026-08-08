import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";
import _nix_ascii_table_834fbda5 from "./ascii-table.js";

export default nixFile(
  new URL("./strings.nix", import.meta.url).pathname,
  ({ scope }) => (
    /**
  String manipulation functions.
    */ scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        length: (scope) => scope.builtins["length"],
        asciiTable: (scope) => _nix_ascii_table_834fbda5(scope.runtime$),
      }).in$((scope) =>
        scope.recAttrSet$({
          compareVersions: (scope) => scope.builtins["compareVersions"],
          concatMap: (scope) => scope.builtins["concatMap"],
          elem: (scope) => scope.builtins["elem"],
          elemAt: (scope) => scope.builtins["elemAt"],
          filter: (scope) => scope.builtins["filter"],
          fromJSON: (scope) => scope.builtins["fromJSON"],
          genList: (scope) => scope.builtins["genList"],
          head: (scope) => scope.builtins["head"],
          isInt: (scope) => scope.builtins["isInt"],
          isList: (scope) => scope.builtins["isList"],
          isAttrs: (scope) => scope.builtins["isAttrs"],
          isPath: (scope) => scope.builtins["isPath"],
          isString: (scope) => scope.builtins["isString"],
          match: (scope) => scope.builtins["match"],
          parseDrvName: (scope) => scope.builtins["parseDrvName"],
          readFile: (scope) => scope.builtins["readFile"],
          replaceStrings: (scope) => scope.builtins["replaceStrings"],
          split: (scope) => scope.builtins["split"],
          storeDir: (scope) => scope.builtins["storeDir"],
          stringLength: (scope) => scope.builtins["stringLength"],
          substring: (scope) => scope.builtins["substring"],
          tail: (scope) => scope.builtins["tail"],
          toJSON: (scope) => scope.builtins["toJSON"],
          typeOf: (scope) => scope.builtins["typeOf"],
          unsafeDiscardStringContext: (scope) =>
            scope.builtins["unsafeDiscardStringContext"],
          appendContext: (scope) => scope.builtins["appendContext"],
          join: (scope) => scope.builtins["concatStringsSep"],
          concatStrings: (scope) =>
            scope.apply$(scope.builtins["concatStringsSep"], ""),
          concatMapStrings: (scope) =>
            scope.func$("f", (scope) =>
              scope.func$("list", (scope) =>
                scope.apply$(scope.concatStrings, () =>
                  scope.apply$(scope.map, () => scope.f, () => scope.list)))),
          concatImapStrings: (scope) =>
            scope.func$("f", (scope) =>
              scope.func$("list", (scope) =>
                scope.apply$(scope.concatStrings, () =>
                  scope.apply$(scope.lib["imap1"], () =>
                    scope.f, () =>
                    scope.list)))),
          intersperse: (scope) =>
            scope.func$("separator", (scope) =>
              scope.func$("list", (scope) =>
                scope.if$(
                  (scope.operators$.equal(scope.list, [])) ||
                  (scope.operators$.equal(
                    scope.apply$(scope.length, () => scope.list),
                    1n,
                  )),
                ).then$(() =>
                  scope.list
                ).else$(() =>
                  scope.apply$(scope.tail, () =>
                    scope.apply$(
                      scope.lib["concatMap"],
                      () =>
                        scope.func$("x", (scope) => [scope.separator, scope.x]),
                      () => scope.list,
                    ))
                ))),
          concatStringsSep: (scope) =>
            scope.builtins["concatStringsSep"],
          concatMapStringsSep: (scope) =>
            scope.func$("sep", (scope) =>
              scope.func$("f", (scope) =>
                scope.func$("list", (scope) =>
                  scope.apply$(scope.concatStringsSep, () =>
                    scope.sep, () =>
                    scope.apply$(scope.map, () =>
                      scope.f, () =>
                      scope.list))))),
          concatImapStringsSep: (scope) =>
            scope.func$("sep", (scope) =>
              scope.func$("f", (scope) =>
                scope.func$("list", (scope) =>
                  scope.apply$(scope.concatStringsSep, () =>
                    scope.sep, () =>
                    scope.apply$(scope.lib["imap1"], () =>
                      scope.f, () =>
                      scope.list))))),
          concatMapAttrsStringSep: (scope) =>
            scope.func$("sep", (scope) =>
              scope.func$("f", (scope) =>
                scope.func$("attrs", (scope) =>
                  scope.apply$(scope.concatStringsSep, () =>
                    scope.sep, () =>
                    scope.apply$(scope.lib["attrValues"], () =>
                      scope.apply$(scope.lib["mapAttrs"], () =>
                        scope.f, () =>
                        scope.attrs)))))),
          concatLines: (scope) =>
            scope.func$("lines", (scope) =>
              scope.apply$(
                scope.optionalString,
                () => (scope.operators$.notEqual(scope.lines, [])),
                () => (scope.operators$.add(
                  scope.apply$(scope.concatStringsSep, "\n", () => scope.lines),
                  "\n",
                )),
              )),
          replaceString: (scope) =>
            scope.func$("from", (scope) =>
              scope.func$("to", (scope) =>
                scope.apply$(
                  scope.replaceStrings,
                  () => [scope.from],
                  () => [scope.to],
                ))),
          replicate: (scope) =>
            scope.func$("n", (scope) =>
              scope.func$("s", (scope) =>
                scope.apply$(scope.concatStrings, () =>
                  scope.apply$(scope.lib["lists"]["replicate"], () =>
                    scope.n, () =>
                    scope.s)))),
          trim: (scope) =>
            scope.apply$(scope.trimWith, { start: true, end: true }),
          trimWith: (scope) =>
            scope.func$({ start: false, end: false }, (scope) =>
              scope.let$({
                chars: " \t\r\n",
                regex: (scope) =>
                  scope.if$((scope.start) && (scope.end)).then$(() =>
                    scope.str$(
                      () => [
                        "[",
                        scope.chars,
                        "]*(.*[^",
                        scope.chars,
                        "])[",
                        scope.chars,
                        "]*",
                      ]
                    )
                  ).elseIf$(() =>
                    scope.start
                  ).then$(() =>
                    scope.str$(() => ["[", scope.chars, "]*(.*)"])
                  ).elseIf$(() =>
                    scope.end
                  ).then$(() =>
                    scope.str$(
                      () => ["(.*[^", scope.chars, "])[", scope.chars, "]*"]
                    )
                  ).else$("(.*)"),
              }).in$((scope) =>
                scope.func$("s", (scope) =>
                  scope.let$({
                    res: (scope) =>
                      scope.apply$(scope.match, () =>
                        scope.regex, () =>
                        scope.s),
                  }).in$((scope) =>
                    scope.apply$(
                      scope.optionalString,
                      () => (scope.operators$.notEqual(scope.res, null)),
                      () => scope.apply$(scope.head, () => scope.res),
                    )
                  ))
              )),
          makeSearchPath: (scope) =>
            scope.func$("subDir", (scope) =>
              scope.func$("paths", (scope) =>
                scope.apply$(scope.concatStringsSep, ":", () =>
                  scope.apply$(scope.concatMap, () =>
                    scope.func$("path", (scope) =>
                      scope.if$(scope.operators$.notEqual(scope.path, null))
                        .then$(
                          () => [
                            scope.operators$.add(
                              scope.operators$.add(scope.path, "/"),
                              scope.subDir,
                            ),
                          ]
                        ).else$([])), () =>
                    scope.paths)))),
          makeSearchPathOutput: (scope) =>
            scope.func$("output", (scope) =>
              scope.let$({
                "getOutput'": (scope) =>
                  scope.apply$(scope.lib["getOutput"], () =>
                    scope.output),
              }).in$((scope) =>
                scope.func$("subDir", (scope) =>
                  scope.func$("pkgs", (scope) =>
                    scope.apply$(scope.concatStringsSep, ":", () =>
                      scope.apply$(scope.concatMap, () =>
                        scope.func$("path", (scope) =>
                          scope.if$(scope.operators$.notEqual(scope.path, null))
                            .then$(
                              () => [
                                scope.operators$.add(
                                  scope.operators$.add(
                                    scope.apply$(scope["getOutput'"], () =>
                                      scope.path),
                                    "/",
                                  ),
                                  scope.subDir,
                                ),
                              ]
                            ).else$([])), () =>
                        scope.pkgs))))
              )),
          makeLibraryPath: (scope) =>
            scope.apply$(scope.makeSearchPathOutput, "lib", "lib"),
          makeIncludePath: (scope) =>
            scope.apply$(scope.makeSearchPathOutput, "dev", "include"),
          makeBinPath: (scope) =>
            scope.apply$(scope.makeSearchPathOutput, "bin", "bin"),
          normalizePath: (scope) =>
            scope.let$({
              startsWithSlash: (scope) =>
                scope.apply$(scope.hasSuffix, "/"),
            }).in$((scope) =>
              scope.func$("s", (scope) =>
                scope.if$(scope.apply$(scope.isPath, () =>
                  scope.s)).then$(() =>
                    scope.apply$(scope.throw, () =>
                      scope.str$(
                        () => [
                          "lib.strings.normalizePath: The argument (",
                          scope.apply$(scope.toString, () => scope.s),
                          ") is a path value, but only strings are supported.\n    Path values are always normalised in Nix, so there's no need to call this function on them.",
                        ]
                      ))
                  ).else$(() =>
                    scope.apply$(
                      scope.builtins["foldl'"],
                      () =>
                        scope.func$("x", (scope) =>
                          scope.func$("y", (scope) =>
                            scope.if$(
                              (scope.operators$.equal(scope.y, "/")) &&
                              (scope.apply$(scope.startsWithSlash, () =>
                                scope.x)),
                            ).then$(() => scope.x).else$(() =>
                              scope.operators$.add(scope.x, scope.y)
                            ))),
                      "",
                      () =>
                        scope.apply$(scope.stringToCharacters, () => scope.s),
                    )
                  ))
            ),
          optionalString: (scope) =>
            scope.func$("cond", (scope) =>
              scope.func$("string", (scope) =>
                scope.if$(scope.cond).then$(() => scope.string).else$(""))),
          hasPrefix: (scope) =>
            scope.func$("pref", (scope) =>
              scope.let$({
                getGivenPrefix: (scope) =>
                  scope.apply$(scope.substring, 0n, () =>
                    scope.apply$(scope.stringLength, () =>
                      scope.pref)),
              }).in$((scope) =>
                scope.if$(scope.apply$(scope.isPath, () =>
                  scope.pref)).then$(() =>
                    scope.apply$(scope.throw, () =>
                      scope.str$(
                        () => [
                          "lib.strings.hasPrefix: The first argument (",
                          scope.apply$(scope.toString, () => scope.pref),
                          ") is a path value, but only strings are supported.\n    You might want to use `lib.path.hasPrefix` instead, which correctly supports paths.",
                        ]
                      ))
                  ).else$(() =>
                    scope.func$("str", (scope) =>
                      scope.operators$.equal(
                        scope.apply$(scope.getGivenPrefix, () =>
                          scope.str),
                        scope.pref,
                      ))
                  )
              )),
          hasSuffix: (scope) =>
            scope.func$("suffix", (scope) =>
              scope.let$({
                lenSuffix: (scope) =>
                  scope.apply$(scope.stringLength, () =>
                    scope.suffix),
              }).in$((scope) =>
                scope.if$(scope.apply$(scope.isPath, () =>
                  scope.suffix)).then$(() =>
                    scope.apply$(scope.throw, () =>
                      scope.str$(
                        () => [
                          "lib.strings.hasSuffix: The first argument (",
                          scope.apply$(scope.toString, () => scope.suffix),
                          ") is a path value, but only strings are supported.\nThere is almost certainly a bug in the calling code, since this function always returns `false` in such a case.\nThis function also copies the path to the Nix store, which may not be what you want.",
                        ]
                      ))
                  ).else$(() =>
                    scope.func$("content", (scope) =>
                      scope.let$({
                        lenContent: (scope) =>
                          scope.apply$(scope.stringLength, () =>
                            scope.content),
                      }).in$((
                        scope,
                      ) => ((scope.operators$.greaterThanOrEqual(
                        scope.lenContent,
                        scope.lenSuffix,
                      )) &&
                        (scope.operators$.equal(
                          scope.apply$(
                            scope.substring,
                            () => (scope.operators$.subtract(
                              scope.lenContent,
                              scope.lenSuffix,
                            )),
                            () => scope.lenContent,
                            () => scope.content,
                          ),
                          scope.suffix,
                        )))
                      ))
                  )
              )),
          hasInfix: (scope) =>
            scope.func$("infix", (scope) =>
              scope.let$({
                matchGivenInfix: (scope) =>
                  scope.apply$(scope.builtins["match"], () =>
                    scope.str$(
                      () => [
                        ".*",
                        scope.apply$(scope.escapeRegex, () => scope.infix),
                        ".*",
                      ]
                    )),
              }).in$((scope) =>
                scope.if$(scope.apply$(scope.isPath, () => scope.infix)).then$(
                  () =>
                    scope.apply$(scope.throw, () =>
                      scope.str$(
                        () => [
                          "lib.strings.hasInfix: The first argument (",
                          scope.apply$(scope.toString, () => scope.infix),
                          ") is a path value, but only strings are supported.\n    There is almost certainly a bug in the calling code, since this function always returns `false` in such a case.\n    This function also copies the path to the Nix store, which may not be what you want.",
                        ]
                      ))
                ).else$(() =>
                  scope.func$("content", (scope) =>
                    scope.operators$.notEqual(
                      scope.apply$(scope.matchGivenInfix, () =>
                        scope.str$(() => [scope.content])),
                      null,
                    ))
                )
              )),
          stringToCharacters: (scope) =>
            scope.func$("s", (scope) =>
              scope.apply$(scope.genList, () =>
                scope.func$("p", (scope) =>
                  scope.apply$(
                    scope.substring,
                    () => scope.p,
                    1n,
                    () => scope.s,
                  )), () =>
                scope.apply$(scope.stringLength, () => scope.s))),
          stringAsChars: (scope) =>
            scope.func$("f", (scope) =>
              scope.func$("s", (scope) =>
                scope.apply$(scope.concatStrings, () =>
                  scope.apply$(scope.map, () =>
                    scope.f, () =>
                    scope.apply$(scope.stringToCharacters, () =>
                      scope.s))))),
          charToInt: (scope) =>
            scope.func$("c", (scope) =>
              scope.apply$(scope.builtins["getAttr"], () =>
                scope.c, () =>
                scope.asciiTable)),
          escape: (scope) =>
            scope.func$("list", (scope) =>
              scope.apply$(scope.replaceStrings, () =>
                scope.list, () =>
                scope.apply$(scope.map, () =>
                  scope.func$("c", (scope) =>
                    scope.str$(() => ["\\", scope.c])), () =>
                  scope.list))),
          escapeC: (scope) =>
            scope.func$("list", (scope) =>
              scope.apply$(scope.replaceStrings, () =>
                scope.list, () =>
                scope.apply$(scope.map, () =>
                  scope.func$("c", (scope) =>
                    scope.str$(
                      () => [
                        "\\x",
                        scope.apply$(scope.fixedWidthString, 2n, "0", () =>
                          scope.apply$(scope.toLower, () =>
                            scope.apply$(scope.lib["toHexString"], () =>
                              scope.apply$(scope.charToInt, () => scope.c)))),
                      ]
                    )), () =>
                  scope.list))),
          escapeURL: (scope) =>
            scope.let$({
              unreserved: [
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I",
                "J",
                "K",
                "L",
                "M",
                "N",
                "O",
                "P",
                "Q",
                "R",
                "S",
                "T",
                "U",
                "V",
                "W",
                "X",
                "Y",
                "Z",
                "a",
                "b",
                "c",
                "d",
                "e",
                "f",
                "g",
                "h",
                "i",
                "j",
                "k",
                "l",
                "m",
                "n",
                "o",
                "p",
                "q",
                "r",
                "s",
                "t",
                "u",
                "v",
                "w",
                "x",
                "y",
                "z",
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "-",
                "_",
                ".",
                "~",
              ],
              toEscape: (scope) =>
                scope.apply$(scope.removeAttrs, () =>
                  scope.asciiTable, () =>
                  scope.unreserved),
            }).in$((scope) =>
              scope.apply$(scope.replaceStrings, () =>
                scope.apply$(scope.builtins["attrNames"], () =>
                  scope.toEscape), () =>
                scope.apply$(scope.lib["mapAttrsToList"], () =>
                  scope.func$("_", (scope) =>
                    scope.func$("c", (scope) =>
                      scope.str$(
                        () => [
                          "%",
                          scope.apply$(scope.fixedWidthString, 2n, "0", () =>
                            scope.apply$(
                              scope.lib["toHexString"],
                              () => scope.c,
                            )),
                        ]
                      ))), () =>
                  scope.toEscape))
            ),
          escapeShellArg: (scope) =>
            scope.func$("arg", (scope) =>
              scope.let$({
                string: (scope) =>
                  scope.apply$(scope.toString, () =>
                    scope.arg),
              }).in$((scope) =>
                scope.if$(
                  scope.operators$.equal(
                    scope.apply$(scope.match, "[[:alnum:],._+:@%/-]+", () =>
                      scope.string),
                    null,
                  ),
                ).then$(() =>
                  scope.str$(
                    () => [
                      "'",
                      scope.apply$(
                        scope.replaceString,
                        "'",
                        "'\\''",
                        () => scope.string,
                      ),
                      "'",
                    ]
                  )
                ).else$(() =>
                  scope.string
                )
              )),
          escapeShellArgs: (scope) =>
            scope.apply$(scope.concatMapStringsSep, " ", () =>
              scope.escapeShellArg),
          isValidPosixName: (scope) =>
            scope.func$("name", (scope) =>
              scope.operators$.notEqual(
                scope.apply$(scope.match, "[a-zA-Z_][a-zA-Z0-9_]*", () =>
                  scope.name),
                null,
              )),
          toShellVar: (scope) =>
            scope.func$("name", (scope) =>
              scope.if$(
                scope.operators$.negate(
                  scope.apply$(scope.isValidPosixName, () => scope.name),
                ),
              ).then$(() =>
                scope.apply$(scope.throw, () =>
                  scope.str$(
                    () => [
                      "toShellVar: ",
                      scope.name,
                      " is not a valid shell variable name",
                    ]
                  ))
              ).else$(() =>
                scope.func$("value", (scope) =>
                  scope.if$(
                    (scope.apply$(scope.isAttrs, () => scope.value)) &&
                    (scope.operators$.negate(
                      scope.apply$(scope.isStringLike, () => scope.value),
                    )),
                  ).then$(() =>
                    scope.str$(
                      () => [
                        "declare -A ",
                        scope.name,
                        "=(",
                        scope.apply$(scope.concatStringsSep, " ", () =>
                          scope.apply$(scope.lib["mapAttrsToList"], () =>
                            scope.func$("n", (scope) =>
                              scope.func$("v", (scope) =>
                                scope.str$(
                                  () => [
                                    "[",
                                    scope.apply$(
                                      scope.escapeShellArg,
                                      () => scope.n,
                                    ),
                                    "]=",
                                    scope.apply$(
                                      scope.escapeShellArg,
                                      () => scope.v,
                                    ),
                                  ]
                                ))), () => scope.value)),
                        ")",
                      ]
                    )
                  ).elseIf$(() =>
                    scope.apply$(scope.isList, () =>
                      scope.value)
                  ).then$(() =>
                    scope.str$(
                      () => [
                        "declare -a ",
                        scope.name,
                        "=(",
                        scope.apply$(scope.escapeShellArgs, () => scope.value),
                        ")",
                      ]
                    )
                  ).else$(() =>
                    scope.str$(
                      () => [
                        scope.name,
                        "=",
                        scope.apply$(scope.escapeShellArg, () => scope.value),
                      ]
                    )
                  ))
              )),
          toShellVars: (scope) =>
            scope.func$("vars", (scope) =>
              scope.apply$(scope.concatStringsSep, "\n", () =>
                scope.apply$(scope.lib["mapAttrsToList"], () =>
                  scope.toShellVar, () =>
                  scope.vars))),
          escapeNixString: (scope) =>
            scope.func$("s", (scope) =>
              scope.apply$(scope.escape, ["$"], () =>
                scope.apply$(scope.toJSON, () =>
                  scope.s))),
          escapeRegex: (scope) =>
            scope.apply$(scope.escape, () =>
              scope.apply$(scope.stringToCharacters, "\\[{()^$?*+|.")),
          escapeNixIdentifier: (scope) =>
            scope.let$({
              nixKeywords: [
                "assert",
                "else",
                "if",
                "in",
                "inherit",
                "let",
                "or",
                "rec",
                "then",
                "with",
              ],
            }).in$((scope) =>
              scope.func$("s", (scope) =>
                scope.if$(
                  (scope.operators$.notEqual(
                    scope.apply$(scope.match, "[a-zA-Z_][a-zA-Z0-9_'-]*", () =>
                      scope.s),
                    null,
                  )) &&
                  (scope.operators$.negate(scope.apply$(scope.lib["elem"], () =>
                    scope.s, () =>
                    scope.nixKeywords))),
                ).then$(() =>
                  scope.s
                ).else$(() =>
                  scope.apply$(scope.escapeNixString, () =>
                    scope.s)
                ))
            ),
          escapeXML: (scope) =>
            scope.apply$(scope.builtins["replaceStrings"], [
              '"',
              "'",
              "<",
              ">",
              "&",
            ], ["&quot;", "&apos;", "&lt;", "&gt;", "&amp;"]),
          lowerChars: (scope) =>
            scope.apply$(
              scope.stringToCharacters,
              "abcdefghijklmnopqrstuvwxyz",
            ),
          upperChars: (scope) =>
            scope.apply$(
              scope.stringToCharacters,
              "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            ),
          toLower: (scope) =>
            scope.apply$(
              scope.replaceStrings,
              () => scope.upperChars,
              () => scope.lowerChars,
            ),
          toUpper: (scope) =>
            scope.apply$(
              scope.replaceStrings,
              () => scope.lowerChars,
              () => scope.upperChars,
            ),
          toSentenceCase: (scope) =>
            scope.func$("str", (scope) =>
              scope.if$(
                scope.operators$.negate(scope.apply$(scope.isString, () =>
                  scope.str)),
              ).then$(() =>
                scope.apply$(
                  scope.throw,
                  () =>
                    scope.str$(
                      () => [
                        "toSentenceCase does only accepts string values, but got ",
                        scope.apply$(scope.typeOf, () => scope.str),
                      ]
                    ),
                )
              ).else$(() =>
                scope.let$({
                  firstChar: (scope) =>
                    scope.apply$(scope.substring, 0n, 1n, () => scope.str),
                  rest: (scope) =>
                    scope.apply$(scope.substring, 1n, -1n, () => scope.str),
                }).in$((scope) =>
                  scope.operators$.add(
                    scope.apply$(scope.toUpper, () => scope.firstChar),
                    scope.apply$(scope.toLower, () => scope.rest),
                  )
                )
              )),
          toCamelCase: (scope) =>
            scope.func$("str", (scope) =>
              scope.if$(
                scope.operators$.negate(scope.apply$(scope.isString, () =>
                  scope.str)),
              ).then$(() =>
                scope.apply$(
                  scope.throw,
                  () =>
                    scope.str$(
                      () => [
                        "toCamelCase does only accepts string values, but got ",
                        scope.apply$(scope.typeOf, () => scope.str),
                      ]
                    ),
                )
              ).else$(() =>
                scope.let$({
                  separators: (scope) =>
                    scope.apply$(
                      scope.splitStringBy,
                      () =>
                        scope.func$("prev", (scope) =>
                          scope.func$("curr", (scope) =>
                            scope.apply$(scope.elem, () =>
                              scope.curr, ["-", "_", " "]))),
                      false,
                      () => scope.str,
                    ),
                  parts: (scope) =>
                    scope.apply$(scope.lib["flatten"], () =>
                      scope.apply$(scope.map, () =>
                        scope.apply$(scope.splitStringBy, () =>
                          scope.func$("prev", (scope) =>
                            scope.func$(
                              "curr",
                              (
                                scope,
                              ) => ((scope.operators$.notEqual(
                                scope.apply$(scope.match, "[a-z]", () =>
                                  scope.prev),
                                null,
                              )) &&
                                (scope.operators$.notEqual(
                                  scope.apply$(scope.match, "[A-Z]", () =>
                                    scope.curr),
                                  null,
                                ))),
                            )), true), () => scope.separators)),
                  first: (scope) =>
                    scope.if$(
                      scope.operators$.greaterThan(
                        scope.apply$(scope.length, () => scope.parts),
                        0n,
                      ),
                    ).then$(() =>
                      scope.apply$(
                        scope.toLower,
                        () => scope.apply$(scope.head, () => scope.parts),
                      )
                    ).else$(""),
                  rest: (scope) =>
                    scope.if$(
                      scope.operators$.greaterThan(
                        scope.apply$(scope.length, () => scope.parts),
                        1n,
                      ),
                    ).then$(() =>
                      scope.apply$(
                        scope.map,
                        () => scope.toSentenceCase,
                        () => scope.apply$(scope.tail, () => scope.parts),
                      )
                    ).else$([]),
                }).in$((scope) =>
                  scope.apply$(
                    scope.concatStrings,
                    () => (scope.operators$.listConcat(
                      [scope.first],
                      scope.rest,
                    )),
                  )
                )
              )),
          addContextFrom: (scope) =>
            scope.func$(
              "src",
              (scope) =>
                scope.func$("target", (scope) =>
                  scope.operators$.add(
                    scope.apply$(scope.substring, 0n, 0n, () =>
                      scope.src),
                    scope.target,
                  )),
            ),
          splitString: (scope) =>
            scope.func$("sep", (scope) =>
              scope.let$({
                escapedSep: (scope) =>
                  scope.apply$(
                    scope.escapeRegex,
                    () => scope.apply$(scope.toString, () => scope.sep),
                  ),
              }).in$((scope) =>
                scope.func$(
                  "s",
                  (scope) =>
                    scope.apply$(scope.map, () =>
                      scope.apply$(scope.addContextFrom, () => scope.s), () =>
                      scope.apply$(scope.filter, () =>
                        scope.isString, () =>
                        scope.apply$(scope.split, () =>
                          scope.escapedSep, () =>
                          scope.apply$(scope.toString, () =>
                            scope.s)))),
                )
              )),
          splitStringBy: (scope) =>
            scope.func$("predicate", (scope) =>
              scope.func$("keepSplit", (scope) =>
                scope.func$("str", (scope) =>
                  scope.let$({
                    len: (scope) =>
                      scope.apply$(scope.stringLength, () => scope.str),
                    withContext: (scope) =>
                      scope.apply$(scope.addContextFrom, () => scope.str),
                    go: (scope) =>
                      scope.func$("pos", (scope) =>
                        scope.func$("currentPart", (scope) =>
                          scope.func$("result", (scope) =>
                            scope.if$(
                              scope.operators$.equal(scope.pos, scope.len),
                            ).then$(() =>
                              scope.operators$.listConcat(scope.result, [
                                scope.apply$(scope.withContext, () =>
                                  scope.currentPart),
                              ])
                            ).else$(() =>
                              scope.let$({
                                currChar: (scope) =>
                                  scope.apply$(
                                    scope.substring,
                                    () => scope.pos,
                                    1n,
                                    () => scope.str,
                                  ),
                                prevChar: (scope) =>
                                  scope.if$(
                                    scope.operators$.greaterThan(scope.pos, 0n),
                                  ).then$(() =>
                                    scope.apply$(
                                      scope.substring,
                                      () => (scope.operators$.subtract(
                                        scope.pos,
                                        1n,
                                      )),
                                      1n,
                                      () => scope.str,
                                    )
                                  ).else$(""),
                              }).in$((scope) =>
                                scope.if$(
                                  scope.apply$(scope.predicate, () =>
                                    scope.prevChar, () =>
                                    scope.currChar),
                                ).then$(() =>
                                  scope.apply$(
                                    scope.go,
                                    () => (scope.operators$.add(scope.pos, 1n)),
                                    () =>
                                      scope.if$(scope.keepSplit).then$(() =>
                                        scope.currChar
                                      ).else$(""),
                                    () => (scope.operators$.listConcat(
                                      scope.result,
                                      [scope.apply$(scope.withContext, () =>
                                        scope.currentPart)],
                                    )),
                                  )
                                ).else$(() =>
                                  scope.apply$(
                                    scope.go,
                                    () => (scope.operators$.add(scope.pos, 1n)),
                                    () => (scope.operators$.add(
                                      scope.currentPart,
                                      scope.currChar,
                                    )),
                                    () => scope.result,
                                  )
                                )
                              )
                            )))),
                  }).in$((scope) =>
                    scope.if$(scope.operators$.equal(scope.len, 0n)).then$(
                      () => [scope.apply$(scope.withContext, "")]
                    ).else$(() => scope.apply$(scope.go, 0n, "", []))
                  )))),
          removePrefix: (scope) =>
            scope.func$("prefix", (scope) =>
              scope.let$({
                preLen: (scope) =>
                  scope.apply$(scope.stringLength, () => scope.prefix),
              }).in$((scope) =>
                scope.if$(scope.apply$(scope.isPath, () => scope.prefix)).then$(
                  () =>
                    scope.apply$(
                      scope.throw,
                      () =>
                        scope.str$(
                          () => [
                            "lib.strings.removePrefix: The first argument (",
                            scope.apply$(scope.toString, () => scope.prefix),
                            ") is a path value, but only strings are supported.\n    There is almost certainly a bug in the calling code, since this function never removes any prefix in such a case.\n    This function also copies the path to the Nix store, which may not be what you want.",
                          ]
                        ),
                    )
                ).else$(() =>
                  scope.func$("str", (scope) =>
                    scope.if$(
                      scope.operators$.equal(
                        scope.apply$(scope.substring, 0n, () =>
                          scope.preLen, () =>
                          scope.str),
                        scope.prefix,
                      ),
                    ).then$(() =>
                      scope.apply$(
                        scope.substring,
                        () => scope.preLen,
                        -1n,
                        () => scope.str,
                      )
                    ).else$(() => scope.str))
                )
              )),
          removeSuffix: (scope) =>
            scope.func$("suffix", (scope) =>
              scope.let$({
                sufLen: (scope) =>
                  scope.apply$(scope.stringLength, () => scope.suffix),
              }).in$((scope) =>
                scope.if$(scope.apply$(scope.isPath, () => scope.suffix)).then$(
                  () =>
                    scope.apply$(
                      scope.throw,
                      () =>
                        scope.str$(
                          () => [
                            "lib.strings.removeSuffix: The first argument (",
                            scope.apply$(scope.toString, () => scope.suffix),
                            ") is a path value, but only strings are supported.\n    There is almost certainly a bug in the calling code, since this function never removes any suffix in such a case.\n    This function also copies the path to the Nix store, which may not be what you want.",
                          ]
                        ),
                    )
                ).else$(() =>
                  scope.func$("str", (scope) =>
                    scope.let$({
                      sLen: (scope) =>
                        scope.apply$(scope.stringLength, () => scope.str),
                    }).in$((scope) =>
                      scope.if$(
                        (scope.operators$.lessThanOrEqual(
                          scope.sufLen,
                          scope.sLen,
                        )) &&
                        (scope.operators$.equal(
                          scope.suffix,
                          scope.apply$(
                            scope.substring,
                            () => (scope.operators$.subtract(
                              scope.sLen,
                              scope.sufLen,
                            )),
                            () => scope.sufLen,
                            () => scope.str,
                          ),
                        )),
                      ).then$(() =>
                        scope.apply$(
                          scope.substring,
                          0n,
                          () => (scope.operators$.subtract(
                            scope.sLen,
                            scope.sufLen,
                          )),
                          () => scope.str,
                        )
                      ).else$(() => scope.str)
                    ))
                )
              )),
          versionOlder: (scope) =>
            scope.func$(
              "v1",
              (scope) =>
                scope.func$("v2", (scope) =>
                  scope.operators$.equal(
                    scope.apply$(scope.compareVersions, () =>
                      scope.v2, () =>
                      scope.v1),
                    1n,
                  )),
            ),
          versionAtLeast: (scope) =>
            scope.func$(
              "v1",
              (scope) =>
                scope.func$("v2", (scope) =>
                  scope.operators$.notEqual(
                    scope.apply$(scope.compareVersions, () =>
                      scope.v2, () =>
                      scope.v1),
                    1n,
                  )),
            ),
          getName: (scope) =>
            scope.let$({
              parse: (scope) =>
                scope.func$("drv", (scope) =>
                  scope.apply$(scope.parseDrvName, () =>
                    scope.drv)["name"]),
            }).in$((scope) =>
              scope.func$("x", (scope) =>
                scope.if$(scope.apply$(scope.isString, () =>
                  scope.x)).then$(() =>
                    scope.apply$(scope.parse, () =>
                      scope.x)
                  ).else$(() =>
                    scope.operators$.selectOrDefault(scope.x, ["pname"], () =>
                      scope.apply$(scope.parse, () =>
                        scope.x["name"]))
                  ))
            ),
          getVersion: (scope) =>
            scope.let$({
              parse: (scope) =>
                scope.func$("drv", (scope) =>
                  scope.apply$(scope.parseDrvName, () =>
                    scope.drv)["version"]),
            }).in$((scope) =>
              scope.func$("x", (scope) =>
                scope.if$(scope.apply$(scope.isString, () =>
                  scope.x)).then$(() =>
                    scope.apply$(scope.parse, () =>
                      scope.x)
                  ).else$(() =>
                    scope.operators$.selectOrDefault(scope.x, ["version"], () =>
                      scope.apply$(scope.parse, () =>
                        scope.x["name"]))
                  ))
            ),
          nameFromURL: (scope) =>
            scope.func$("url", (scope) =>
              scope.func$("sep", (scope) =>
                scope.let$({
                  components: (scope) =>
                    scope.apply$(scope.splitString, "/", () =>
                      scope.url),
                  filename: (scope) =>
                    scope.apply$(scope.lib["last"], () =>
                      scope.components),
                  name: (scope) =>
                    scope.apply$(scope.head, () =>
                      scope.apply$(scope.splitString, () =>
                        scope.sep, () =>
                        scope.filename)),
                }).in$((scope) =>
                  ((_cond) => {
                    if (!_cond) {
                      throw new Error(
                        "assertion failed: " + "name != filename",
                      );
                    }
                    return scope.name;
                  })(scope.operators$.notEqual(scope.name, scope.filename))
                ))),
          cmakeOptionType: (scope) =>
            scope.let$({
              types: ["BOOL", "FILEPATH", "PATH", "STRING", "INTERNAL", "LIST"],
            }).in$((scope) =>
              scope.func$("type", (scope) =>
                ((_cond) => {
                  if (!_cond) {
                    throw new Error(
                      "assertion failed: " + "(elem (toUpper type) types)",
                    );
                  }
                  return scope.func$("feature", (scope) =>
                    scope.func$("value", (scope) =>
                      ((_cond) => {
                        if (!_cond) {
                          throw new Error(
                            "assertion failed: " + "(isString feature)",
                          );
                        }
                        return ((_cond) => {
                          if (!_cond) {
                            throw new Error(
                              "assertion failed: " + "(isString value)",
                            );
                          }
                          return scope.str$(
                            () => [
                              "-D",
                              scope.feature,
                              ":",
                              scope.apply$(scope.toUpper, () => scope.type),
                              "=",
                              scope.value,
                            ]
                          );
                        })(scope.apply$(scope.isString, () =>
                          scope.value));
                      })(scope.apply$(scope.isString, () =>
                        scope.feature))));
                })(scope.apply$(scope.elem, () =>
                  scope.apply$(scope.toUpper, () =>
                    scope.type), () =>
                  scope.types)))
            ),
          cmakeBool: (scope) =>
            scope.func$("condition", (scope) =>
              scope.func$("flag", (scope) =>
                ((_cond) => {
                  if (!_cond) {
                    throw new Error("assertion failed: " + "(lib.isBool flag)");
                  }
                  return scope.apply$(scope.cmakeOptionType, "bool", () =>
                    scope.condition, () =>
                    scope.if$(scope.flag).then$("TRUE").else$("FALSE"));
                })(scope.apply$(scope.lib["isBool"], () =>
                  scope.flag)))),
          cmakeFeature: (scope) =>
            scope.apply$(scope.cmakeOptionType, "string"),
          mesonOption: (scope) =>
            scope.func$("feature", (scope) =>
              scope.func$("value", (scope) =>
                ((_cond) => {
                  if (!_cond) {
                    throw new Error(
                      "assertion failed: " + "(lib.isString feature)",
                    );
                  }
                  return ((_cond) => {
                    if (!_cond) {
                      throw new Error(
                        "assertion failed: " + "(lib.isString value)",
                      );
                    }
                    return scope.str$(
                      () => ["-D", scope.feature, "=", scope.value]
                    );
                  })(scope.apply$(scope.lib["isString"], () =>
                    scope.value));
                })(scope.apply$(scope.lib["isString"], () =>
                  scope.feature)))),
          mesonBool: (scope) =>
            scope.func$("condition", (scope) =>
              scope.func$("flag", (scope) =>
                ((_cond) => {
                  if (!_cond) {
                    throw new Error("assertion failed: " + "(lib.isBool flag)");
                  }
                  return scope.apply$(scope.mesonOption, () =>
                    scope.condition, () =>
                    scope.apply$(scope.lib["boolToString"], () =>
                      scope.flag));
                })(scope.apply$(scope.lib["isBool"], () =>
                  scope.flag)))),
          mesonEnable: (scope) =>
            scope.func$("feature", (scope) =>
              scope.func$("flag", (scope) =>
                ((_cond) => {
                  if (!_cond) {
                    throw new Error("assertion failed: " + "(lib.isBool flag)");
                  }
                  return scope.apply$(scope.mesonOption, () =>
                    scope.feature, () =>
                    scope.if$(scope.flag).then$("enabled").else$("disabled"));
                })(scope.apply$(scope.lib["isBool"], () =>
                  scope.flag)))),
          enableFeature: (scope) =>
            scope.func$("flag", (scope) =>
              scope.func$("feature", (scope) =>
                ((_cond) => {
                  if (!_cond) {
                    throw new Error("assertion failed: " + "lib.isBool flag");
                  }
                  return ((_cond) => {
                    if (!_cond) {
                      throw new Error(
                        "assertion failed: " + "lib.isString feature",
                      );
                    }
                    return scope.str$(
                      () => [
                        "--",
                        scope.if$(scope.flag).then$("enable").else$("disable"),
                        "-",
                        scope.feature,
                      ]
                    );
                  })(scope.apply$(scope.lib["isString"], () =>
                    scope.feature));
                })(scope.apply$(scope.lib["isBool"], () =>
                  scope.flag)))),
          enableFeatureAs: (scope) =>
            scope.func$("flag", (scope) =>
              scope.func$("feature", (scope) =>
                scope.func$("value", (scope) =>
                  scope.operators$.add(
                    scope.apply$(scope.enableFeature, () => scope.flag, () =>
                      scope.feature),
                    scope.apply$(scope.optionalString, () => scope.flag, () =>
                      scope.str$(() => ["=", scope.value])),
                  )))),
          withFeature: (scope) =>
            scope.func$("flag", (scope) =>
              scope.func$("feature", (scope) =>
                ((_cond) => {
                  if (!_cond) {
                    throw new Error("assertion failed: " + "isString feature");
                  }
                  return scope.str$(
                    () => [
                      "--",
                      scope.if$(scope.flag).then$("with").else$("without"),
                      "-",
                      scope.feature,
                    ]
                  );
                })(scope.apply$(scope.isString, () =>
                  scope.feature)))),
          withFeatureAs: (scope) =>
            scope.func$("flag", (scope) =>
              scope.func$("feature", (scope) =>
                scope.func$("value", (scope) =>
                  scope.operators$.add(
                    scope.apply$(scope.withFeature, () => scope.flag, () =>
                      scope.feature),
                    scope.apply$(scope.optionalString, () => scope.flag, () =>
                      scope.str$(() => ["=", scope.value])),
                  )))),
          fixedWidthString: (scope) =>
            scope.func$("width", (scope) =>
              scope.func$("filler", (scope) =>
                scope.func$("str", (scope) =>
                  scope.let$({
                    strw: (scope) =>
                      scope.apply$(scope.lib["stringLength"], () =>
                        scope.str),
                    reqWidth: (scope) =>
                      scope.operators$.subtract(
                        scope.width,
                        scope.apply$(
                          scope.lib["stringLength"],
                          () => scope.filler,
                        ),
                      ),
                  }).in$((scope) =>
                    ((_cond) => {
                      if (!_cond) {
                        throw new Error(
                          "assertion failed: " +
                            'strw <= width\n      || throw "fixedWidthString: requested string length (${toString width}) must not be shorter than actual length (${toString strw})"',
                        );
                      }
                      return scope.if$(
                        scope.operators$.equal(scope.strw, scope.width),
                      ).then$(() =>
                        scope.str
                      ).else$(() =>
                        scope.operators$.add(
                          scope.filler,
                          scope.apply$(
                            scope.fixedWidthString,
                            () => scope.reqWidth,
                            () => scope.filler,
                            () => scope.str,
                          ),
                        )
                      );
                    })(
                      (scope.operators$.lessThanOrEqual(
                        scope.strw,
                        scope.width,
                      )) || (scope.apply$(scope.throw, () =>
                        scope.str$(
                          () => [
                            "fixedWidthString: requested string length (",
                            scope.apply$(scope.toString, () => scope.width),
                            ") must not be shorter than actual length (",
                            scope.apply$(scope.toString, () =>
                              scope.strw),
                            ")",
                          ]
                        ))),
                    )
                  )))),
          fixedWidthNumber: (scope) =>
            scope.func$("width", (scope) =>
              scope.func$("n", (scope) =>
                scope.apply$(
                  scope.fixedWidthString,
                  () => scope.width,
                  "0",
                  () => scope.apply$(scope.toString, () => scope.n),
                ))),
          floatToString: (scope) =>
            scope.func$("float", (scope) =>
              scope.let$({
                result: (scope) =>
                  scope.apply$(scope.toString, () =>
                    scope.float),
                precise: (scope) =>
                  scope.operators$.equal(
                    scope.float,
                    scope.apply$(scope.fromJSON, () => scope.result),
                  ),
              }).in$((scope) =>
                scope.apply$(
                  scope.lib["warnIf"],
                  () => (scope.operators$.negate(scope.precise)),
                  () =>
                    scope.str$(
                      () => [
                        "Imprecise conversion from float to string ",
                        scope.result,
                      ]
                    ),
                  () => scope.result,
                )
              )),
          isConvertibleWithToString: (scope) =>
            scope.let$({
              types: ["null", "int", "float", "bool"],
            }).in$((scope) =>
              scope.func$(
                "x",
                (
                  scope,
                ) => (((scope.apply$(scope.isStringLike, () => scope.x)) ||
                  (scope.apply$(
                    scope.elem,
                    () => scope.apply$(scope.typeOf, () => scope.x),
                    () => scope.types,
                  ))) ||
                  ((scope.apply$(scope.isList, () => scope.x)) &&
                    (scope.apply$(
                      scope.lib["all"],
                      () => scope.isConvertibleWithToString,
                      () => scope.x,
                    )))),
              )
            ),
          isStringLike: (scope) =>
            scope.func$("x", (scope) => ((((scope.apply$(scope.isString, () =>
              scope.x)) || (scope.apply$(scope.isPath, () =>
                scope.x))) || (scope.operators$.hasAttr(scope.x, "outPath"))) ||
              (scope.operators$.hasAttr(scope.x, "__toString")))),
          isStorePath: (scope) =>
            scope.func$("x", (scope) =>
              scope.if$(scope.apply$(scope.isStringLike, () =>
                scope.x)).then$(() =>
                  scope.let$({
                    str: (scope) =>
                      scope.apply$(scope.toString, () =>
                        scope.x),
                  }).in$((
                    scope,
                  ) => ((scope.operators$.equal(
                    scope.apply$(scope.substring, 0n, 1n, () =>
                      scope.str),
                    "/",
                  )) && ((scope.operators$.equal(
                    scope.apply$(scope.dirOf, () => scope.str),
                    scope.storeDir,
                  )) ||
                    (scope.operators$.notEqual(
                      scope.apply$(
                        scope.builtins["match"],
                        "/[0-9a-z]{52}",
                        () => scope.str,
                      ),
                      null,
                    ))))
                  )
                ).else$(false)),
          toInt: (scope) =>
            scope.let$({
              matchStripInput: (scope) =>
                scope.apply$(
                  scope.match,
                  "[[:space:]]*(-?[[:digit:]]+)[[:space:]]*",
                ),
              matchLeadingZero: (scope) =>
                scope.apply$(scope.match, "0[[:digit:]]+"),
            }).in$((scope) =>
              scope.func$("str", (scope) =>
                scope.let$({
                  strippedInput: (scope) =>
                    scope.apply$(scope.matchStripInput, () =>
                      scope.str),
                  isLeadingZero: (scope) =>
                    scope.operators$.equal(
                      scope.apply$(scope.matchLeadingZero, () =>
                        scope.apply$(scope.head, () =>
                          scope.strippedInput)),
                      [],
                    ),
                  parsedInput: (scope) =>
                    scope.apply$(scope.fromJSON, () =>
                      scope.apply$(scope.head, () =>
                        scope.strippedInput)),
                  generalError: (scope) =>
                    scope.str$(
                      () => [
                        "toInt: Could not convert ",
                        scope.apply$(scope.escapeNixString, () => scope.str),
                        " to int.",
                      ]
                    ),
                }).in$((scope) =>
                  scope.if$(scope.operators$.equal(scope.strippedInput, null))
                    .then$(() =>
                      scope.apply$(scope.throw, () =>
                        scope.generalError)
                    ).elseIf$(() =>
                      scope.isLeadingZero
                    ).then$(() =>
                      scope.apply$(scope.throw, () =>
                        scope.str$(
                          () => [
                            "toInt: Ambiguity in interpretation of ",
                            scope.apply$(
                              scope.escapeNixString,
                              () => scope.str,
                            ),
                            " between octal and zero padded integer.",
                          ]
                        ))
                    ).elseIf$(() =>
                      scope.operators$.negate(scope.apply$(scope.isInt, () =>
                        scope.parsedInput))
                    ).then$(() =>
                      scope.apply$(scope.throw, () =>
                        scope.generalError)
                    ).else$(() =>
                      scope.parsedInput
                    )
                ))
            ),
          toIntBase10: (scope) =>
            scope.let$({
              matchStripInput: (scope) =>
                scope.apply$(
                  scope.match,
                  "[[:space:]]*0*(-?[[:digit:]]+)[[:space:]]*",
                ),
              matchZero: (scope) =>
                scope.apply$(scope.match, "0+"),
            }).in$((scope) =>
              scope.func$("str", (scope) =>
                scope.let$({
                  strippedInput: (scope) =>
                    scope.apply$(scope.matchStripInput, () =>
                      scope.str),
                  isZero: (scope) =>
                    scope.operators$.equal(
                      scope.apply$(scope.matchZero, () =>
                        scope.apply$(scope.head, () => scope.strippedInput)),
                      [],
                    ),
                  parsedInput: (scope) =>
                    scope.apply$(scope.fromJSON, () =>
                      scope.apply$(scope.head, () =>
                        scope.strippedInput)),
                  generalError: (scope) =>
                    scope.str$(
                      () => [
                        "toIntBase10: Could not convert ",
                        scope.apply$(scope.escapeNixString, () => scope.str),
                        " to int.",
                      ]
                    ),
                }).in$((scope) =>
                  scope.if$(scope.operators$.equal(scope.strippedInput, null))
                    .then$(() =>
                      scope.apply$(scope.throw, () =>
                        scope.generalError)
                    ).elseIf$(() =>
                      scope.isZero
                    ).then$(0n).elseIf$(() =>
                      scope.operators$.negate(scope.apply$(scope.isInt, () =>
                        scope.parsedInput))
                    ).then$(() =>
                      scope.apply$(scope.throw, () =>
                        scope.generalError)
                    ).else$(() =>
                      scope.parsedInput
                    )
                ))
            ),
          fileContents: (scope) =>
            scope.let$({
              removeNewlineSuffix: (scope) =>
                scope.apply$(scope.removeSuffix, "\n"),
            }).in$((scope) =>
              scope.func$("file", (scope) =>
                scope.apply$(scope.removeNewlineSuffix, () =>
                  scope.apply$(scope.readFile, () =>
                    scope.file)))
            ),
          sanitizeDerivationName: (scope) =>
            scope.let$({
              okRegex: (scope) =>
                scope.apply$(scope.match, "[[:alnum:]+_?=-][[:alnum:]+._?=-]*"),
            }).in$((scope) =>
              scope.func$("string", (scope) =>
                scope.if$(
                  (scope.operators$.lessThanOrEqual(
                    scope.apply$(scope.stringLength, () =>
                      scope.string),
                    207n,
                  )) &&
                  (scope.operators$.notEqual(
                    scope.apply$(scope.okRegex, () => scope.string),
                    null,
                  )),
                ).then$(() =>
                  scope.apply$(scope.unsafeDiscardStringContext, () =>
                    scope.string)
                ).else$(() =>
                  scope.apply$(
                    scope.lib["pipe"],
                    () => scope.string,
                    () => [
                      scope.unsafeDiscardStringContext,
                      scope.func$("x", (scope) =>
                        scope.apply$(scope.elemAt, () =>
                          scope.apply$(scope.match, "\\.*(.*)", () =>
                            scope.x), 0n)),
                      scope.apply$(scope.split, "[^[:alnum:]+._?=-]+"),
                      scope.apply$(scope.concatMapStrings, () =>
                        scope.func$("s", (scope) =>
                          scope.if$(scope.apply$(scope.lib["isList"], () =>
                            scope.s)).then$("-").else$(() =>
                              scope.s
                            ))),
                      scope.func$("x", (scope) =>
                        scope.apply$(
                          scope.substring,
                          () =>
                            scope.apply$(
                              scope.lib["max"],
                              () => (scope.operators$.subtract(
                                scope.apply$(scope.stringLength, () => scope.x),
                                207n,
                              )),
                              0n,
                            ),
                          -1n,
                          () => scope.x,
                        )),
                      scope.func$("x", (scope) =>
                        scope.if$(
                          scope.operators$.equal(
                            scope.apply$(scope.stringLength, () =>
                              scope.x),
                            0n,
                          ),
                        ).then$("unknown").else$(() =>
                          scope.x
                        )),
                    ],
                  )
                ))
            ),
          levenshtein: (scope) =>
            scope.func$("a", (scope) =>
              scope.func$("b", (scope) =>
                scope.let$({
                  arr: (scope) =>
                    scope.apply$(
                      scope.lib["genList"],
                      () =>
                        scope.func$("i", (scope) =>
                          scope.apply$(
                            scope.lib["genList"],
                            () =>
                              scope.func$("j", (scope) =>
                                scope.apply$(scope.dist, () => scope.i, () =>
                                  scope.j)),
                            () => (scope.operators$.add(
                              scope.apply$(scope.stringLength, () =>
                                scope.b),
                              1n,
                            )),
                          )),
                      () => (scope.operators$.add(
                        scope.apply$(scope.stringLength, () =>
                          scope.a),
                        1n,
                      )),
                    ),
                  d: (scope) =>
                    scope.func$("x", (scope) =>
                      scope.func$("y", (scope) =>
                        scope.apply$(scope.lib["elemAt"], () =>
                          scope.apply$(scope.lib["elemAt"], () =>
                            scope.arr, () =>
                            scope.x), () =>
                          scope.y))),
                  dist: (scope) =>
                    scope.func$("i", (scope) =>
                      scope.func$("j", (scope) =>
                        scope.let$({
                          c: (scope) =>
                            scope.if$(
                              scope.operators$.equal(
                                scope.apply$(
                                  scope.substring,
                                  () => (scope.operators$.subtract(
                                    scope.i,
                                    1n,
                                  )),
                                  1n,
                                  () => scope.a,
                                ),
                                scope.apply$(
                                  scope.substring,
                                  () => (scope.operators$.subtract(
                                    scope.j,
                                    1n,
                                  )),
                                  1n,
                                  () => scope.b,
                                ),
                              ),
                            ).then$(0n).else$(1n),
                        }).in$((scope) =>
                          scope.if$(scope.operators$.equal(scope.j, 0n)).then$(
                            () =>
                              scope.i
                          ).elseIf$(() =>
                            scope.operators$.equal(scope.i, 0n)
                          ).then$(() =>
                            scope.j
                          ).else$(() =>
                            scope.apply$(
                              scope.lib["min"],
                              () =>
                                scope.apply$(
                                  scope.lib["min"],
                                  () => (scope.operators$.add(
                                    scope.apply$(
                                      scope.d,
                                      () => (scope.operators$.subtract(
                                        scope.i,
                                        1n,
                                      )),
                                      () => scope.j,
                                    ),
                                    1n,
                                  )),
                                  () => (scope.operators$.add(
                                    scope.apply$(
                                      scope.d,
                                      () => scope.i,
                                      () => (scope.operators$.subtract(
                                        scope.j,
                                        1n,
                                      )),
                                    ),
                                    1n,
                                  )),
                                ),
                              () => (scope.operators$.add(
                                scope.apply$(
                                  scope.d,
                                  () => (scope.operators$.subtract(
                                    scope.i,
                                    1n,
                                  )),
                                  () => (scope.operators$.subtract(
                                    scope.j,
                                    1n,
                                  )),
                                ),
                                scope.c,
                              )),
                            )
                          )
                        ))),
                }).in$((scope) =>
                  scope.apply$(scope.d, () =>
                    scope.apply$(scope.stringLength, () =>
                      scope.a), () =>
                    scope.apply$(scope.stringLength, () =>
                      scope.b))
                ))),
          commonPrefixLength: (scope) =>
            scope.func$("a", (scope) =>
              scope.func$("b", (scope) =>
                scope.let$({
                  m: (scope) =>
                    scope.apply$(scope.lib["min"], () =>
                      scope.apply$(scope.stringLength, () =>
                        scope.a), () =>
                      scope.apply$(scope.stringLength, () =>
                        scope.b)),
                  go: (scope) =>
                    scope.func$("i", (scope) =>
                      scope.if$(
                        scope.operators$.greaterThanOrEqual(scope.i, scope.m),
                      ).then$(() =>
                        scope.m
                      ).elseIf$(() =>
                        scope.operators$.equal(
                          scope.apply$(
                            scope.substring,
                            () => scope.i,
                            1n,
                            () => scope.a,
                          ),
                          scope.apply$(
                            scope.substring,
                            () => scope.i,
                            1n,
                            () => scope.b,
                          ),
                        )
                      ).then$(() =>
                        scope.apply$(
                          scope.go,
                          () => (scope.operators$.add(scope.i, 1n)),
                        )
                      ).else$(() =>
                        scope.i
                      )),
                }).in$((scope) =>
                  scope.apply$(scope.go, 0n)
                ))),
          commonSuffixLength: (scope) =>
            scope.func$("a", (scope) =>
              scope.func$("b", (scope) =>
                scope.let$({
                  m: (scope) =>
                    scope.apply$(scope.lib["min"], () =>
                      scope.apply$(scope.stringLength, () =>
                        scope.a), () =>
                      scope.apply$(scope.stringLength, () =>
                        scope.b)),
                  go: (scope) =>
                    scope.func$("i", (scope) =>
                      scope.if$(
                        scope.operators$.greaterThanOrEqual(scope.i, scope.m),
                      ).then$(() =>
                        scope.m
                      ).elseIf$(() =>
                        scope.operators$.equal(
                          scope.apply$(
                            scope.substring,
                            () => (scope.operators$.subtract(
                              scope.operators$.subtract(
                                scope.apply$(scope.stringLength, () => scope.a),
                                scope.i,
                              ),
                              1n,
                            )),
                            1n,
                            () => scope.a,
                          ),
                          scope.apply$(
                            scope.substring,
                            () => (scope.operators$.subtract(
                              scope.operators$.subtract(
                                scope.apply$(scope.stringLength, () => scope.b),
                                scope.i,
                              ),
                              1n,
                            )),
                            1n,
                            () => scope.b,
                          ),
                        )
                      ).then$(() =>
                        scope.apply$(
                          scope.go,
                          () => (scope.operators$.add(scope.i, 1n)),
                        )
                      ).else$(() =>
                        scope.i
                      )),
                }).in$((scope) =>
                  scope.apply$(scope.go, 0n)
                ))),
          levenshteinAtMost: (scope) =>
            scope.let$({
              infixDifferAtMost1: (scope) =>
                scope.func$("x", (scope) =>
                  scope.func$(
                    "y",
                    (
                      scope,
                    ) => ((scope.operators$.lessThanOrEqual(
                      scope.apply$(scope.stringLength, () => scope.x),
                      1n,
                    )) &&
                      (scope.operators$.lessThanOrEqual(
                        scope.apply$(scope.stringLength, () =>
                          scope.y),
                        1n,
                      ))),
                  )),
              infixDifferAtMost2: (scope) =>
                scope.func$("x", (scope) =>
                  scope.func$("y", (scope) =>
                    scope.let$({
                      xlen: (scope) =>
                        scope.apply$(scope.stringLength, () =>
                          scope.x),
                      ylen: (scope) =>
                        scope.apply$(scope.stringLength, () =>
                          scope.y),
                      diff: (scope) =>
                        scope.operators$.subtract(scope.xlen, scope.ylen),
                      xinfix: (scope) =>
                        scope.apply$(
                          scope.substring,
                          1n,
                          () => (scope.operators$.subtract(scope.xlen, 2n)),
                          () => scope.x,
                        ),
                      yinfix: (scope) =>
                        scope.apply$(
                          scope.substring,
                          1n,
                          () => (scope.operators$.subtract(scope.ylen, 2n)),
                          () => scope.y,
                        ),
                      xdelr: (scope) =>
                        scope.apply$(
                          scope.substring,
                          0n,
                          () => (scope.operators$.subtract(scope.xlen, 1n)),
                          () => scope.x,
                        ),
                      xdell: (scope) =>
                        scope.apply$(
                          scope.substring,
                          1n,
                          () => (scope.operators$.subtract(scope.xlen, 1n)),
                          () => scope.x,
                        ),
                      ydelr: (scope) =>
                        scope.apply$(
                          scope.substring,
                          0n,
                          () => (scope.operators$.subtract(scope.ylen, 1n)),
                          () => scope.y,
                        ),
                      ydell: (scope) =>
                        scope.apply$(
                          scope.substring,
                          1n,
                          () => (scope.operators$.subtract(scope.ylen, 1n)),
                          () => scope.y,
                        ),
                    }).in$((scope) =>
                      scope.if$(scope.operators$.equal(scope.diff, 2n)).then$(
                        () =>
                          scope.operators$.equal(scope.xinfix, scope.y)
                      ).elseIf$(() =>
                        scope.operators$.equal(scope.diff, 1n)
                      ).then$(
                        () => ((scope.operators$.equal(
                          scope.xinfix,
                          scope.ydelr,
                        )) ||
                          (scope.operators$.equal(scope.xinfix, scope.ydell)))
                      ).else$(
                        () => (((scope.operators$.equal(
                          scope.xinfix,
                          scope.yinfix,
                        )) ||
                          (scope.operators$.equal(scope.xdelr, scope.ydell))) ||
                          (scope.operators$.equal(scope.xdell, scope.ydelr)))
                      )
                    ))),
            }).in$((scope) =>
              scope.func$("k", (scope) =>
                scope.if$(scope.operators$.lessThanOrEqual(scope.k, 0n)).then$(
                  () =>
                    scope.func$("a", (scope) =>
                      scope.func$("b", (scope) =>
                        scope.operators$.equal(scope.a, scope.b)))
                ).else$(() =>
                  scope.let$({
                    f: (scope) =>
                      scope.func$("a", (scope) =>
                        scope.func$("b", (scope) =>
                          scope.let$({
                            alen: (scope) =>
                              scope.apply$(scope.stringLength, () =>
                                scope.a),
                            blen: (scope) =>
                              scope.apply$(scope.stringLength, () =>
                                scope.b),
                            prelen: (scope) =>
                              scope.apply$(scope.commonPrefixLength, () =>
                                scope.a, () =>
                                scope.b),
                            suflen: (scope) =>
                              scope.apply$(scope.commonSuffixLength, () =>
                                scope.a, () =>
                                scope.b),
                            presuflen: (scope) =>
                              scope.operators$.add(scope.prelen, scope.suflen),
                            ainfix: (scope) =>
                              scope.apply$(
                                scope.substring,
                                () => scope.prelen,
                                () => (scope.operators$.subtract(
                                  scope.alen,
                                  scope.presuflen,
                                )),
                                () => scope.a,
                              ),
                            binfix: (scope) =>
                              scope.apply$(
                                scope.substring,
                                () => scope.prelen,
                                () => (scope.operators$.subtract(
                                  scope.blen,
                                  scope.presuflen,
                                )),
                                () => scope.b,
                              ),
                          }).in$((scope) =>
                            scope.if$(
                              scope.operators$.lessThan(scope.alen, scope.blen),
                            ).then$(() =>
                              scope.apply$(scope.f, () =>
                                scope.b, () =>
                                scope.a)
                            ).elseIf$(() =>
                              scope.operators$.greaterThan(
                                scope.operators$.subtract(
                                  scope.alen,
                                  scope.blen,
                                ),
                                scope.k,
                              )
                            ).then$(false).elseIf$(() =>
                              scope.operators$.equal(scope.k, 1n)
                            ).then$(() =>
                              scope.apply$(scope.infixDifferAtMost1, () =>
                                scope.ainfix, () =>
                                scope.binfix)
                            ).elseIf$(() =>
                              scope.operators$.equal(scope.k, 2n)
                            ).then$(() =>
                              scope.apply$(scope.infixDifferAtMost2, () =>
                                scope.ainfix, () =>
                                scope.binfix)
                            ).else$(() =>
                              scope.operators$.lessThanOrEqual(
                                scope.apply$(scope.levenshtein, () =>
                                  scope.ainfix, () =>
                                  scope.binfix),
                                scope.k,
                              )
                            )
                          ))),
                  }).in$((scope) =>
                    scope.f
                  )
                ))
            ),
        })
      ))
  ),
);
