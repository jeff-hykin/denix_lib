import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";
import _nix_default_6e679886 from "../default.js";

export default nixFile(
  new URL("./internal.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: (scope) => _nix_default_6e679886(scope.runtime$) },
      (scope) =>
        scope.let$({
          isAttrs: (scope) => scope.builtins["isAttrs"],
          isPath: (scope) => scope.builtins["isPath"],
          isString: (scope) => scope.builtins["isString"],
          pathExists: (scope) => scope.builtins["pathExists"],
          readDir: (scope) => scope.builtins["readDir"],
          split: (scope) => scope.builtins["split"],
          trace: (scope) => scope.builtins["trace"],
          typeOf: (scope) => scope.builtins["typeOf"],
          fetchGit: (scope) => scope.builtins["fetchGit"],
          attrNames: (scope) => scope.lib["attrsets"]["attrNames"],
          attrValues: (scope) => scope.lib["attrsets"]["attrValues"],
          mapAttrs: (scope) => scope.lib["attrsets"]["mapAttrs"],
          mapAttrsToList: (scope) => scope.lib["attrsets"]["mapAttrsToList"],
          zipAttrsWith: (scope) => scope.lib["attrsets"]["zipAttrsWith"],
          pathType: (scope) => scope.lib["filesystem"]["pathType"],
          all: (scope) => scope.lib["lists"]["all"],
          commonPrefix: (scope) => scope.lib["lists"]["commonPrefix"],
          concatLists: (scope) => scope.lib["lists"]["concatLists"],
          elemAt: (scope) => scope.lib["lists"]["elemAt"],
          filter: (scope) => scope.lib["lists"]["filter"],
          findFirst: (scope) => scope.lib["lists"]["findFirst"],
          findFirstIndex: (scope) => scope.lib["lists"]["findFirstIndex"],
          "foldl'": (scope) => scope.lib["lists"]["foldl'"],
          head: (scope) => scope.lib["lists"]["head"],
          length: (scope) => scope.lib["lists"]["length"],
          sublist: (scope) => scope.lib["lists"]["sublist"],
          tail: (scope) => scope.lib["lists"]["tail"],
          append: (scope) => scope.lib["path"]["append"],
          splitRoot: (scope) => scope.lib["path"]["splitRoot"],
          hasStorePathPrefix: (scope) =>
            scope.lib["path"]["hasStorePathPrefix"],
          components: (scope) => scope.lib["path"]["subpath"]["components"],
          join: (scope) => scope.lib["path"]["subpath"]["join"],
          isStringLike: (scope) => scope.lib["strings"]["isStringLike"],
          concatStringsSep: (scope) => scope.lib["strings"]["concatStringsSep"],
          substring: (scope) => scope.lib["strings"]["substring"],
          stringLength: (scope) => scope.lib["strings"]["stringLength"],
          hasSuffix: (scope) => scope.lib["strings"]["hasSuffix"],
        }).in$((scope) =>
          scope.recAttrSet$({
            _currentVersion: 3n,
            migrations: (scope) => [
              scope.func$("filesetV0", (scope) =>
                scope.let$({
                  parts: (scope) =>
                    scope.apply$(
                      scope.splitRoot,
                      () => scope.filesetV0["_internalBase"],
                    ),
                }).in$((scope) =>
                  scope.operators$.merge(
                    scope.filesetV0,
                    scope.attrSet$({
                      _internalVersion: 1n,
                      _internalBaseRoot: () => scope.parts["root"],
                      _internalBaseComponents: () =>
                        scope.apply$(
                          scope.components,
                          () => scope.parts["subpath"],
                        ),
                    }),
                  )
                )),
              scope.func$(
                "filesetV1",
                (scope) =>
                  scope.operators$.merge(scope.filesetV1, {
                    _internalVersion: 2n,
                  }),
              ),
              scope.func$(
                "filesetV2",
                (scope) =>
                  scope.operators$.merge(scope.filesetV2, {
                    _internalIsEmptyWithoutBase: false,
                    _internalVersion: 3n,
                  }),
              ),
            ],
            _noEvalMessage:
              "lib.fileset: Directly evaluating a file set is not supported.\n  To turn it into a usable source, use `lib.fileset.toSource`.\n  To pretty-print the contents, use `lib.fileset.trace` or `lib.fileset.traceVal`.",
            _emptyWithoutBase: (scope) =>
              scope.attrSet$({
                _type: "fileset",
                _internalVersion: () => scope._currentVersion,
                _internalIsEmptyWithoutBase: true,
                _noEval: () =>
                  scope.apply$(scope.throw, () => scope._noEvalMessage),
              }),
            _create: (scope) =>
              scope.func$("base", (scope) =>
                scope.func$("tree", (scope) =>
                  scope.let$({
                    parts: (scope) =>
                      scope.apply$(scope.splitRoot, () => scope.base),
                  }).in$((scope) =>
                    scope.attrSet$({
                      _type: "fileset",
                      _internalVersion: () => scope._currentVersion,
                      _internalIsEmptyWithoutBase: false,
                      _internalBase: () => scope.base,
                      _internalBaseRoot: () => scope.parts["root"],
                      _internalBaseComponents: () =>
                        scope.apply$(
                          scope.components,
                          () => scope.parts["subpath"],
                        ),
                      _internalTree: () => scope.tree,
                      _noEval: () =>
                        scope.apply$(scope.throw, () => scope._noEvalMessage),
                    })
                  ))),
            _coerceResult: (scope) =>
              scope.let$({
                ok: (scope) =>
                  scope.func$("value", (scope) =>
                    scope.attrSet$({
                      success: true,
                      value: () => scope.value,
                    })),
                error: (scope) =>
                  scope.func$("message", (scope) =>
                    scope.attrSet$({
                      success: false,
                      message: () => scope.message,
                    })),
              }).in$((scope) =>
                scope.func$("context", (scope) =>
                  scope.func$("value", (scope) =>
                    scope.if$(
                      scope.operators$.equal(
                        scope.operators$.selectOrDefault(
                          scope.value,
                          ["_type"],
                          "",
                        ),
                        "fileset",
                      ),
                    ).then$(() =>
                      scope.if$(
                        scope.operators$.greaterThan(
                          scope.value["_internalVersion"],
                          scope._currentVersion,
                        ),
                      ).then$(() =>
                        scope.apply$(scope.error, () =>
                          scope.str$(
                            () => [
                              scope.context,
                              " is a file set created from a future version of the file set library with a different internal representation:\n    - Internal version of the file set: ",
                              scope.apply$(
                                scope.toString,
                                () => scope.value["_internalVersion"],
                              ),
                              "\n    - Internal version of the library: ",
                              scope.apply$(
                                scope.toString,
                                () => scope._currentVersion,
                              ),
                              "\n    Make sure to update your Nixpkgs to have a newer version of `lib.fileset`.",
                            ]
                          ))
                      ).elseIf$(() =>
                        scope.operators$.lessThan(
                          scope.value["_internalVersion"],
                          scope._currentVersion,
                        )
                      ).then$(() =>
                        scope.let$({
                          migrationsToApply: (scope) =>
                            scope.apply$(
                              scope.sublist,
                              () => scope.value["_internalVersion"],
                              () => (scope.operators$.subtract(
                                scope._currentVersion,
                                scope.value["_internalVersion"],
                              )),
                              () => scope.migrations,
                            ),
                        }).in$((scope) =>
                          scope.apply$(scope.ok, () =>
                            scope.apply$(scope["foldl'"], () =>
                              scope.func$("value", (scope) =>
                                scope.func$("migration", (scope) =>
                                  scope.apply$(scope.migration, () =>
                                    scope.value))), () =>
                              scope.value, () =>
                              scope.migrationsToApply))
                        )
                      ).else$(() =>
                        scope.apply$(scope.ok, () => scope.value)
                      )
                    ).elseIf$(() =>
                      scope.operators$.negate(
                        scope.apply$(scope.isPath, () => scope.value),
                      )
                    ).then$(() =>
                      scope.if$(
                        scope.operators$.hasAttr(
                          scope.value,
                          "_isLibCleanSourceWith",
                        ),
                      ).then$(() =>
                        scope.apply$(scope.error, () =>
                          scope.str$(
                            () => [
                              scope.context,
                              " is a `lib.sources`-based value, but it should be a file set or a path instead.\n    To convert a `lib.sources`-based value to a file set you can use `lib.fileset.fromSource`.\n    Note that this only works for sources created from paths.",
                            ]
                          ))
                      ).elseIf$(() =>
                        scope.apply$(scope.isStringLike, () => scope.value)
                      ).then$(() =>
                        scope.apply$(scope.error, () =>
                          scope.str$(
                            () => [
                              scope.context,
                              ' ("',
                              scope.apply$(scope.toString, () => scope.value),
                              '") is a string-like value, but it should be a file set or a path instead.\n    Paths represented as strings are not supported by `lib.fileset`, use `lib.sources` or derivations instead.',
                            ]
                          ))
                      ).else$(() =>
                        scope.apply$(scope.error, () =>
                          scope.str$(
                            () => [
                              scope.context,
                              " is of type ",
                              scope.apply$(scope.typeOf, () => scope.value),
                              ", but it should be a file set or a path instead.",
                            ]
                          ))
                      )
                    ).elseIf$(() =>
                      scope.operators$.negate(
                        scope.apply$(scope.pathExists, () => scope.value),
                      )
                    ).then$(() =>
                      scope.apply$(scope.error, () =>
                        scope.str$(
                          () => [
                            scope.context,
                            " (",
                            scope.apply$(scope.toString, () => scope.value),
                            ") is a path that does not exist.\n    To create a file set from a path that may not exist, use `lib.fileset.maybeMissing`.",
                          ]
                        ))
                    ).else$(() =>
                      scope.apply$(scope.ok, () =>
                        scope.apply$(scope._singleton, () => scope.value))
                    )))
              ),
            _coerce: (scope) =>
              scope.func$("context", (scope) =>
                scope.func$("value", (scope) =>
                  scope.let$({
                    result: (scope) =>
                      scope.apply$(scope._coerceResult, () =>
                        scope.context, () =>
                        scope.value),
                  }).in$((scope) =>
                    scope.if$(scope.result["success"]).then$(() =>
                      scope.result["value"]
                    ).else$(() =>
                      scope.apply$(scope.throw, () =>
                        scope.result["message"])
                    )
                  ))),
            _coerceMany: (scope) =>
              scope.func$("functionContext", (scope) =>
                scope.func$("list", (scope) =>
                  scope.let$({
                    filesets: (scope) =>
                      scope.apply$(scope.map, () =>
                        scope.func$({
                          context: scope.nixArg$.NoDefault,
                          value: scope.nixArg$.NoDefault,
                        }, (scope) =>
                          scope.apply$(scope._coerce, () =>
                            scope.str$(
                              () => [scope.functionContext, ": ", scope.context]
                            ), () =>
                            scope.value)), () =>
                        scope.list),
                    firstWithBase: (scope) =>
                      scope.apply$(
                        scope.findFirst,
                        () =>
                          scope.func$("fileset", (scope) =>
                            scope.operators$.negate(
                              scope.fileset["_internalIsEmptyWithoutBase"],
                            )),
                        null,
                        () => scope.filesets,
                      ),
                    firstBaseRoot: (scope) =>
                      scope.firstWithBase["_internalBaseRoot"],
                    differentIndex: (scope) =>
                      scope.apply$(
                        scope.findFirstIndex,
                        () =>
                          scope.func$(
                            "fileset",
                            (
                              scope,
                            ) => ((scope.operators$.negate(
                              scope.fileset["_internalIsEmptyWithoutBase"],
                            )) &&
                              (scope.operators$.notEqual(
                                scope.firstBaseRoot,
                                scope.fileset["_internalBaseRoot"],
                              ))),
                          ),
                        null,
                        () => scope.filesets,
                      ),
                  }).in$((scope) =>
                    scope.if$(
                      (scope.operators$.notEqual(scope.firstWithBase, null)) &&
                      (scope.operators$.notEqual(scope.differentIndex, null)),
                    ).then$(() =>
                      scope.apply$(scope.throw, () =>
                        scope.str$(
                          () => [
                            scope.functionContext,
                            ": Filesystem roots are not the same:\n    ",
                            scope.apply$(
                              scope.head,
                              () => scope.list,
                            )["context"],
                            ': Filesystem root is "',
                            scope.apply$(
                              scope.toString,
                              () => scope.firstBaseRoot,
                            ),
                            '"\n    ',
                            scope.apply$(
                              scope.elemAt,
                              () => scope.list,
                              () => scope.differentIndex,
                            )["context"],
                            ': Filesystem root is "',
                            scope.apply$(
                              scope.toString,
                              () =>
                                scope.apply$(scope.elemAt, () =>
                                  scope.filesets, () =>
                                  scope.differentIndex)["_internalBaseRoot"],
                            ),
                            '"\n    Different filesystem roots are not supported.',
                          ]
                        ))
                    ).else$(() =>
                      scope.filesets
                    )
                  ))),
            _singleton: (scope) =>
              scope.func$("path", (scope) =>
                scope.let$({
                  type: (scope) =>
                    scope.apply$(scope.pathType, () =>
                      scope.path),
                }).in$((scope) =>
                  scope.if$(scope.operators$.equal(scope.type, "directory"))
                    .then$(() =>
                      scope.apply$(scope._create, () =>
                        scope.path, () =>
                        scope.type)
                    ).else$(() =>
                      scope.apply$(scope._create, () =>
                        scope.apply$(scope.dirOf, () =>
                          scope.path), () =>
                        scope.attrSet$({
                          ...scope.deepSet$([
                            scope.apply$(scope.baseNameOf, () =>
                              scope.path),
                          ], () =>
                            scope.type),
                        }))
                    )
                )),
            _directoryEntries: (scope) =>
              scope.func$("path", (scope) =>
                scope.func$("value", (scope) =>
                  scope.if$(scope.operators$.equal(scope.value, "directory"))
                    .then$(() =>
                      scope.apply$(scope.readDir, () =>
                        scope.path)
                    ).else$(() =>
                      scope.operators$.merge(
                        scope.apply$(scope.mapAttrs, () =>
                          scope.func$("name", (scope) =>
                            scope.func$("value", (scope) => null)), () =>
                          scope.apply$(scope.readDir, () =>
                            scope.path)),
                        scope.value,
                      )
                    ))),
            _normaliseTreeFilter: (scope) =>
              scope.func$("path", (scope) =>
                scope.func$("tree", (scope) =>
                  scope.if$(
                    (scope.operators$.equal(scope.tree, "directory")) ||
                    (scope.apply$(scope.isAttrs, () =>
                      scope.tree)),
                  ).then$(() =>
                    scope.let$({
                      entries: (scope) =>
                        scope.apply$(scope._directoryEntries, () =>
                          scope.path, () =>
                          scope.tree),
                      normalisedSubtrees: (scope) =>
                        scope.apply$(scope.mapAttrs, () =>
                          scope.func$("name", (scope) =>
                            scope.apply$(
                              scope._normaliseTreeFilter,
                              () => (scope.operators$.add(
                                scope.path,
                                scope.str$(() => ["/", scope.name]),
                              )),
                            )), () =>
                          scope.entries),
                      subtreeValues: (scope) =>
                        scope.apply$(scope.attrValues, () =>
                          scope.normalisedSubtrees),
                    }).in$((scope) =>
                      scope.if$(scope.apply$(scope.all, () =>
                        scope.isNull, () =>
                        scope.subtreeValues)).then$(null).elseIf$(() =>
                          scope.apply$(scope.all, () =>
                            scope.isString, () =>
                            scope.subtreeValues)
                        ).then$("directory").else$(() =>
                          scope.normalisedSubtrees
                        )
                    )
                  ).else$(() =>
                    scope.tree
                  ))),
            _normaliseTreeMinimal: (scope) =>
              scope.func$("path", (scope) =>
                scope.func$("tree", (scope) =>
                  scope.if$(
                    (scope.operators$.equal(scope.tree, "directory")) ||
                    (scope.apply$(scope.isAttrs, () =>
                      scope.tree)),
                  ).then$(() =>
                    scope.let$({
                      entries: (scope) =>
                        scope.apply$(scope._directoryEntries, () =>
                          scope.path, () =>
                          scope.tree),
                      normalisedSubtrees: (scope) =>
                        scope.apply$(scope.mapAttrs, () =>
                          scope.func$("name", (scope) =>
                            scope.apply$(
                              scope._normaliseTreeMinimal,
                              () => (scope.operators$.add(
                                scope.path,
                                scope.str$(() => ["/", scope.name]),
                              )),
                            )), () =>
                          scope.entries),
                      subtreeValues: (scope) =>
                        scope.apply$(scope.attrValues, () =>
                          scope.normalisedSubtrees),
                    }).in$((scope) =>
                      scope.if$(scope.apply$(
                        scope.all,
                        () =>
                          scope.func$(
                            "value",
                            (scope) =>
                              scope.operators$.equal(scope.value, "emptyDir"),
                          ),
                        () => scope.subtreeValues,
                      )).then$("emptyDir").elseIf$(
                        () => ((scope.operators$.equal(
                          scope.tree,
                          "directory",
                        )) || (scope.apply$(scope.all, () =>
                          scope.func$("value", (scope) =>
                            scope.apply$(scope.isString, () =>
                              scope.value)), () =>
                          scope.subtreeValues)))
                      ).then$("directory").elseIf$(() =>
                        scope.apply$(scope.all, () =>
                          scope.func$(
                            "value",
                            (
                              scope,
                            ) => ((scope.apply$(
                              scope.isNull,
                              () => scope.value,
                            )) ||
                              (scope.operators$.equal(
                                scope.value,
                                "emptyDir",
                              ))),
                          ), () =>
                          scope.subtreeValues)
                      ).then$(null).else$(() =>
                        scope.normalisedSubtrees
                      )
                    )
                  ).else$(() =>
                    scope.tree
                  ))),
            _printMinimalTree: (scope) =>
              scope.func$("base", (scope) =>
                scope.func$("tree", (scope) =>
                  scope.let$({
                    treeSuffix: (scope) =>
                      scope.func$("tree", (scope) =>
                        scope.if$(scope.apply$(scope.isAttrs, () =>
                          scope.tree)).then$("").elseIf$(() =>
                            scope.operators$.equal(scope.tree, "directory")
                          ).then$(" (all files in directory)").else$(() =>
                            scope.str$(() => [" (", scope.tree, ")"])
                          )),
                    traceTreeAttrs: (scope) =>
                      scope.func$("prevLine", (scope) =>
                        scope.func$("indent", (scope) =>
                          scope.func$("tree", (scope) =>
                            scope.apply$(scope["foldl'"], () =>
                              scope.func$("prevLine", (scope) =>
                                scope.func$("name", (scope) =>
                                  scope.let$({
                                    subtree: (scope) =>
                                      scope.tree[scope.name],
                                    thisLine: (scope) =>
                                      scope.apply$(scope.trace, () =>
                                        scope.str$(
                                          () => [
                                            scope.indent,
                                            "- ",
                                            scope.name,
                                            scope.apply$(
                                              scope.treeSuffix,
                                              () => scope.subtree,
                                            ),
                                          ]
                                        ), () =>
                                        scope.prevLine),
                                  }).in$((scope) =>
                                    scope.if$(
                                      (scope.operators$.equal(
                                        scope.subtree,
                                        null,
                                      )) ||
                                      (scope.operators$.equal(
                                        scope.subtree,
                                        "emptyDir",
                                      )),
                                    ).then$(() =>
                                      scope.prevLine
                                    ).elseIf$(() =>
                                      scope.apply$(scope.isAttrs, () =>
                                        scope.subtree)
                                    ).then$(() =>
                                      scope.apply$(
                                        scope.traceTreeAttrs,
                                        () => scope.thisLine,
                                        () =>
                                          scope.str$(
                                            () => [scope.indent, "  "]
                                          ),
                                        () => scope.subtree,
                                      )
                                    ).else$(() =>
                                      scope.thisLine
                                    )
                                  ))), () =>
                              scope.prevLine, () =>
                              scope.apply$(scope.attrNames, () =>
                                scope.tree))))),
                    firstLine: (scope) =>
                      scope.if$(
                        (scope.operators$.equal(scope.tree, null)) ||
                        (scope.operators$.equal(scope.tree, "emptyDir")),
                      ).then$(() =>
                        scope.apply$(scope.trace, "(empty)", null)
                      ).else$(() =>
                        scope.apply$(scope.trace, () =>
                          scope.str$(() => [
                            scope.apply$(scope.toString, () => scope.base),
                            scope.apply$(scope.treeSuffix, () => scope.tree),
                          ]), null)
                      ),
                  }).in$((scope) =>
                    scope.if$(scope.apply$(scope.isAttrs, () =>
                      scope.tree)).then$(() =>
                        scope.apply$(
                          scope.traceTreeAttrs,
                          () => scope.firstLine,
                          "",
                          () => scope.tree,
                        )
                      ).else$(() =>
                        scope.firstLine
                      )
                  ))),
            _printFileset: (scope) =>
              scope.func$("fileset", (scope) =>
                scope.if$(scope.fileset["_internalIsEmptyWithoutBase"]).then$(
                  () =>
                    scope.apply$(scope.trace, "(empty)", null)
                ).else$(() =>
                  scope.apply$(scope._printMinimalTree, () =>
                    scope.fileset["_internalBase"], () =>
                    scope.apply$(scope._normaliseTreeMinimal, () =>
                      scope.fileset["_internalBase"], () =>
                      scope.fileset["_internalTree"]))
                )),
            _toSourceFilter: (scope) =>
              scope.func$("fileset", (scope) =>
                scope.let$({
                  tree: (scope) =>
                    scope.apply$(scope._normaliseTreeFilter, () =>
                      scope.fileset["_internalBase"], () =>
                      scope.fileset["_internalTree"]),
                  baseString: (scope) =>
                    scope.if$(
                      scope.operators$.equal(
                        scope.fileset["_internalBaseComponents"],
                        [],
                      ),
                    ).then$("/").else$(() =>
                      scope.operators$.add(
                        scope.operators$.add(
                          "/",
                          scope.apply$(
                            scope.concatStringsSep,
                            "/",
                            () => scope.fileset["_internalBaseComponents"],
                          ),
                        ),
                        "/",
                      )
                    ),
                  baseLength: (scope) =>
                    scope.apply$(scope.stringLength, () =>
                      scope.baseString),
                  inTree: (scope) =>
                    scope.func$("components", (scope) =>
                      scope.let$({
                        recurse: (scope) =>
                          scope.func$("index", (scope) =>
                            scope.func$("localTree", (scope) =>
                              scope.if$(scope.apply$(scope.isAttrs, () =>
                                scope.localTree)).then$(() =>
                                  scope.if$(
                                    scope.operators$.greaterThanOrEqual(
                                      scope.index,
                                      scope.apply$(scope.length, () =>
                                        scope.components),
                                    ),
                                  ).then$(true).else$(() =>
                                    scope.apply$(
                                      scope.recurse,
                                      () => (scope.operators$.add(
                                        scope.index,
                                        2n,
                                      )),
                                      () =>
                                        scope
                                          .localTree[
                                            scope.apply$(scope.elemAt, () =>
                                              scope.components, () =>
                                              scope.index)
                                          ],
                                    )
                                  )
                                ).else$(() =>
                                  scope.operators$.notEqual(
                                    scope.localTree,
                                    null,
                                  )
                                ))),
                      }).in$((scope) =>
                        scope.apply$(scope.recurse, 0n, () =>
                          scope.tree)
                      )),
                  empty: (scope) =>
                    scope.func$("_", (scope) =>
                      scope.func$("_", (scope) =>
                        false)),
                  nonEmpty: (scope) =>
                    scope.func$("path", (scope) =>
                      scope.func$("type", (scope) =>
                        scope.let$({
                          pathSlash: (scope) =>
                            scope.operators$.add(scope.path, "/"),
                        }).in$((
                          scope,
                        ) => ((scope.if$(
                          scope.operators$.equal(
                            scope.apply$(scope.substring, 0n, () =>
                              scope.apply$(scope.stringLength, () =>
                                scope.pathSlash), () =>
                              scope.baseString),
                            scope.pathSlash,
                          ),
                        ).then$(true).elseIf$(() =>
                          scope.operators$.notEqual(
                            scope.apply$(scope.substring, 0n, () =>
                              scope.baseLength, () =>
                              scope.pathSlash),
                            scope.baseString,
                          )
                        ).then$(false).else$(() =>
                          scope.apply$(scope.inTree, () =>
                            scope.apply$(scope.split, "/", () =>
                              scope.apply$(
                                scope.substring,
                                () => scope.baseLength,
                                -1n,
                                () => scope.path,
                              )))
                        )) &&
                          ((scope.operators$.notEqual(scope.type, "unknown")) ||
                            (scope.apply$(scope.throw, () =>
                              scope.str$(
                                () => [
                                  "lib.fileset.toSource: `fileset` contains a file that cannot be added to the store: ",
                                  scope.path,
                                  "\n    This file is neither a regular file nor a symlink, the only file types supported by the Nix store.\n    Therefore the file set cannot be added to the Nix store as is. Make sure to not include that file to avoid this error.",
                                ]
                              )))))
                        ))),
                }).in$((scope) =>
                  scope.if$(
                    (scope.fileset["_internalIsEmptyWithoutBase"]) ||
                    (scope.operators$.equal(scope.tree, null)),
                  ).then$(() =>
                    scope.empty
                  ).else$(() =>
                    scope.nonEmpty
                  )
                )),
            _fromSourceFilter: (scope) =>
              scope.func$("root", (scope) =>
                scope.func$("sourceFilter", (scope) =>
                  scope.let$({
                    fromDirEntry: (scope) =>
                      scope.func$("path", (scope) =>
                        scope.func$("pathString", (scope) =>
                          scope.func$("type", (scope) =>
                            scope.if$(
                              scope.operators$.negate(
                                scope.apply$(scope.sourceFilter, () =>
                                  scope.pathString, () =>
                                  scope.type),
                              ),
                            ).then$(null).elseIf$(() =>
                              scope.operators$.equal(scope.type, "directory")
                            ).then$(() =>
                              scope.apply$(scope.fromDir, () =>
                                scope.path, () =>
                                scope.pathString)
                            ).else$(() =>
                              scope.type
                            )))),
                    fromDir: (scope) =>
                      scope.func$("path", (scope) =>
                        scope.func$("pathString", (scope) =>
                          scope.apply$(scope.mapAttrs, () =>
                            scope.func$("name", (scope) =>
                              scope.apply$(
                                scope.fromDirEntry,
                                () => (scope.operators$.add(
                                  scope.path,
                                  scope.str$(() => ["/", scope.name]),
                                )),
                                () => (scope.operators$.add(
                                  scope.pathString,
                                  scope.str$(() => ["/", scope.name]),
                                )),
                              )), () =>
                            scope.apply$(scope.readDir, () =>
                              scope.path)))),
                    rootPathType: (scope) =>
                      scope.apply$(scope.pathType, () =>
                        scope.root),
                    rootString: (scope) =>
                      scope.operators$.add(
                        "/",
                        scope.apply$(scope.concatStringsSep, "/", () =>
                          scope.apply$(scope.components, () =>
                            scope.apply$(
                              scope.splitRoot,
                              () => scope.root,
                            )["subpath"])),
                      ),
                  }).in$((scope) =>
                    scope.if$(
                      scope.operators$.equal(scope.rootPathType, "directory"),
                    ).then$(() =>
                      scope.apply$(scope._create, () =>
                        scope.root, () =>
                        scope.apply$(scope.fromDir, () =>
                          scope.root, () =>
                          scope.rootString))
                    ).else$(() =>
                      scope.apply$(scope._create, () =>
                        scope.apply$(scope.dirOf, () =>
                          scope.root), () =>
                        scope.attrSet$({
                          ...scope.deepSet$([
                            scope.apply$(scope.baseNameOf, () =>
                              scope.root),
                          ], () =>
                            scope.rootPathType),
                        }))
                    )
                  ))),
            _toList: (scope) =>
              scope.func$("fileset", (scope) =>
                scope.let$({
                  recurse: (scope) =>
                    scope.func$("path", (scope) =>
                      scope.func$("tree", (scope) =>
                        scope.if$(scope.apply$(scope.isAttrs, () =>
                          scope.tree)).then$(() =>
                            scope.apply$(scope.concatLists, () =>
                              scope.apply$(scope.mapAttrsToList, () =>
                                scope.func$("name", (scope) =>
                                  scope.func$("value", (scope) =>
                                    scope.apply$(
                                      scope.recurse,
                                      () => (scope.operators$.add(
                                        scope.path,
                                        scope.str$(() => ["/", scope.name]),
                                      )),
                                      () => scope.value,
                                    ))), () =>
                                scope.tree))
                          ).elseIf$(() =>
                            scope.operators$.equal(scope.tree, "directory")
                          ).then$(() =>
                            scope.apply$(scope.recurse, () =>
                              scope.path, () =>
                              scope.apply$(scope.readDir, () =>
                                scope.path))
                          ).elseIf$(() =>
                            scope.operators$.equal(scope.tree, null)
                          ).then$([]).else$(() => [scope.path]))),
                }).in$((scope) =>
                  scope.if$(scope.fileset["_internalIsEmptyWithoutBase"]).then$(
                    [],
                  ).else$(() =>
                    scope.apply$(scope.recurse, () =>
                      scope.fileset["_internalBase"], () =>
                      scope.fileset["_internalTree"])
                  )
                )),
            _shortenTreeBase: (scope) =>
              scope.func$("targetBaseComponents", (scope) =>
                scope.func$("fileset", (scope) =>
                  scope.let$({
                    recurse: (scope) =>
                      scope.func$("index", (scope) =>
                        scope.if$(
                          scope.operators$.lessThan(
                            scope.index,
                            scope.apply$(
                              scope.length,
                              () => scope.fileset["_internalBaseComponents"],
                            ),
                          ),
                        ).then$(() =>
                          scope.attrSet$({
                            ...scope.deepSet$([scope.apply$(scope.elemAt, () =>
                              scope.fileset["_internalBaseComponents"], () =>
                              scope.index)], () =>
                              scope.apply$(
                                scope.recurse,
                                () => (scope.operators$.add(scope.index, 1n)),
                              )),
                          })
                        ).else$(() =>
                          scope.fileset["_internalTree"]
                        )),
                  }).in$((scope) =>
                    scope.apply$(scope.recurse, () =>
                      scope.apply$(scope.length, () =>
                        scope.targetBaseComponents))
                  ))),
            _lengthenTreeBase: (scope) =>
              scope.func$("targetBaseComponents", (scope) =>
                scope.func$("fileset", (scope) =>
                  scope.let$({
                    recurse: (scope) =>
                      scope.func$("index", (scope) =>
                        scope.func$("tree", (scope) =>
                          scope.if$(
                            (scope.apply$(scope.isAttrs, () => scope.tree)) &&
                            (scope.operators$.lessThan(
                              scope.index,
                              scope.apply$(
                                scope.length,
                                () => scope.targetBaseComponents,
                              ),
                            )),
                          ).then$(() =>
                            scope.apply$(
                              scope.recurse,
                              () => (scope.operators$.add(scope.index, 1n)),
                              () =>
                                scope.operators$.selectOrDefault(scope.tree, [
                                  scope.apply$(scope.elemAt, () =>
                                    scope.targetBaseComponents, () =>
                                    scope.index),
                                ], null),
                            )
                          ).else$(() =>
                            scope.tree
                          ))),
                  }).in$((scope) =>
                    scope.apply$(scope.recurse, () =>
                      scope.apply$(scope.length, () =>
                        scope.fileset["_internalBaseComponents"]), () =>
                      scope.fileset["_internalTree"])
                  ))),
            _unionMany: (scope) =>
              scope.func$("filesets", (scope) =>
                scope.let$({
                  filesetsWithBase: (scope) =>
                    scope.apply$(scope.filter, () =>
                      scope.func$("fileset", (scope) =>
                        scope.operators$.negate(
                          scope.fileset["_internalIsEmptyWithoutBase"],
                        )), () =>
                      scope.filesets),
                  firstWithBase: (scope) =>
                    scope.apply$(scope.head, () =>
                      scope.filesetsWithBase),
                  commonBaseComponents: (scope) =>
                    scope.apply$(scope["foldl'"], () =>
                      scope.func$("components", (scope) =>
                        scope.func$("el", (scope) =>
                          scope.apply$(scope.commonPrefix, () =>
                            scope.components, () =>
                            scope.el["_internalBaseComponents"]))), () =>
                      scope.firstWithBase["_internalBaseComponents"], () =>
                      scope.apply$(scope.tail, () =>
                        scope.filesetsWithBase)),
                  commonBase: (scope) =>
                    scope.apply$(scope.append, () =>
                      scope.firstWithBase["_internalBaseRoot"], () =>
                      scope.apply$(scope.join, () =>
                        scope.commonBaseComponents)),
                  trees: (scope) =>
                    scope.apply$(scope.map, () =>
                      scope.apply$(scope._shortenTreeBase, () =>
                        scope.commonBaseComponents), () =>
                      scope.filesetsWithBase),
                  resultTree: (scope) =>
                    scope.apply$(scope._unionTrees, () =>
                      scope.trees),
                }).in$((scope) =>
                  scope.if$(scope.operators$.equal(scope.filesetsWithBase, []))
                    .then$(() =>
                      scope._emptyWithoutBase
                    ).else$(() =>
                      scope.apply$(scope._create, () =>
                        scope.commonBase, () =>
                        scope.resultTree)
                    )
                )),
            _unionTrees: (scope) =>
              scope.func$("trees", (scope) =>
                scope.let$({
                  stringIndex: (scope) =>
                    scope.apply$(
                      scope.findFirstIndex,
                      () => scope.isString,
                      null,
                      () => scope.trees,
                    ),
                  withoutNull: (scope) =>
                    scope.apply$(scope.filter, () =>
                      scope.func$("tree", (scope) =>
                        scope.operators$.notEqual(scope.tree, null)), () =>
                      scope.trees),
                }).in$((scope) =>
                  scope.if$(scope.operators$.notEqual(scope.stringIndex, null))
                    .then$(() =>
                      scope.apply$(scope.elemAt, () =>
                        scope.trees, () =>
                        scope.stringIndex)
                    ).elseIf$(() =>
                      scope.operators$.equal(scope.withoutNull, [])
                    ).then$(null).else$(() =>
                      scope.apply$(scope.zipAttrsWith, () =>
                        scope.func$("name", (scope) =>
                          scope._unionTrees), () =>
                        scope.withoutNull)
                    )
                )),
            _intersection: (scope) =>
              scope.func$("fileset1", (scope) =>
                scope.func$("fileset2", (scope) =>
                  scope.let$({
                    commonBaseComponentsLength: (scope) =>
                      scope.apply$(scope.length, () =>
                        scope.apply$(scope.commonPrefix, () =>
                          scope.fileset1["_internalBaseComponents"], () =>
                          scope.fileset2["_internalBaseComponents"])),
                    longestBaseFileset: (scope) =>
                      scope.if$(
                        scope.operators$.equal(
                          scope.commonBaseComponentsLength,
                          scope.apply$(
                            scope.length,
                            () => scope.fileset1["_internalBaseComponents"],
                          ),
                        ),
                      ).then$(() =>
                        scope.fileset2
                      ).elseIf$(() =>
                        scope.operators$.equal(
                          scope.commonBaseComponentsLength,
                          scope.apply$(
                            scope.length,
                            () => scope.fileset2["_internalBaseComponents"],
                          ),
                        )
                      ).then$(() =>
                        scope.fileset1
                      ).else$(null),
                    resultIsEmptyWithoutBase: (
                      scope,
                    ) => (((scope.fileset1["_internalIsEmptyWithoutBase"]) ||
                      (scope.fileset2["_internalIsEmptyWithoutBase"])) ||
                      (scope.operators$.equal(scope.longestBaseFileset, null))),
                    tree1: (scope) =>
                      scope.apply$(
                        scope._lengthenTreeBase,
                        () =>
                          scope.longestBaseFileset["_internalBaseComponents"],
                        () => scope.fileset1,
                      ),
                    tree2: (scope) =>
                      scope.apply$(
                        scope._lengthenTreeBase,
                        () =>
                          scope.longestBaseFileset["_internalBaseComponents"],
                        () => scope.fileset2,
                      ),
                    resultTree: (scope) =>
                      scope.apply$(scope._intersectTree, () =>
                        scope.tree1, () =>
                        scope.tree2),
                  }).in$((scope) =>
                    scope.if$(scope.resultIsEmptyWithoutBase).then$(() =>
                      scope._emptyWithoutBase
                    ).else$(() =>
                      scope.apply$(scope._create, () =>
                        scope.longestBaseFileset["_internalBase"], () =>
                        scope.resultTree)
                    )
                  ))),
            _intersectTree: (scope) =>
              scope.func$("lhs", (scope) =>
                scope.func$("rhs", (scope) =>
                  scope.if$(
                    (scope.apply$(scope.isAttrs, () => scope.lhs)) &&
                    (scope.apply$(scope.isAttrs, () => scope.rhs)),
                  ).then$(() =>
                    scope.apply$(scope.mapAttrs, () =>
                      scope.func$("name", (scope) =>
                        scope.apply$(scope._intersectTree, () =>
                          scope.lhs[scope.name])), () =>
                      scope.apply$(scope.builtins["intersectAttrs"], () =>
                        scope.lhs, () =>
                        scope.rhs))
                  ).elseIf$(
                    () => ((scope.operators$.equal(scope.lhs, null)) ||
                      (scope.apply$(scope.isString, () =>
                        scope.rhs)))
                  ).then$(() =>
                    scope.lhs
                  ).else$(() =>
                    scope.rhs
                  ))),
            _difference: (scope) =>
              scope.func$("positive", (scope) =>
                scope.func$("negative", (scope) =>
                  scope.let$({
                    commonBaseComponentsLength: (scope) =>
                      scope.apply$(scope.length, () =>
                        scope.apply$(scope.commonPrefix, () =>
                          scope.positive["_internalBaseComponents"], () =>
                          scope.negative["_internalBaseComponents"])),
                    negativeTreeWithPositiveBase: (scope) =>
                      scope.if$(
                        scope.operators$.equal(
                          scope.commonBaseComponentsLength,
                          scope.apply$(
                            scope.length,
                            () => scope.positive["_internalBaseComponents"],
                          ),
                        ),
                      ).then$(() =>
                        scope.apply$(scope._shortenTreeBase, () =>
                          scope.positive["_internalBaseComponents"], () =>
                          scope.negative)
                      ).elseIf$(() =>
                        scope.operators$.equal(
                          scope.commonBaseComponentsLength,
                          scope.apply$(
                            scope.length,
                            () => scope.negative["_internalBaseComponents"],
                          ),
                        )
                      ).then$(() =>
                        scope.apply$(scope._lengthenTreeBase, () =>
                          scope.positive["_internalBaseComponents"], () =>
                          scope.negative)
                      ).else$(null),
                    resultingTree: (scope) =>
                      scope.apply$(scope._differenceTree, () =>
                        scope.positive["_internalBase"], () =>
                        scope.positive["_internalTree"], () =>
                        scope.negativeTreeWithPositiveBase),
                  }).in$((scope) =>
                    scope.if$(scope.positive["_internalIsEmptyWithoutBase"])
                      .then$(() =>
                        scope._emptyWithoutBase
                      ).elseIf$(() =>
                        scope.negative["_internalIsEmptyWithoutBase"]
                      ).then$(() =>
                        scope.positive
                      ).else$(() =>
                        scope.apply$(scope._create, () =>
                          scope.positive["_internalBase"], () =>
                          scope.resultingTree)
                      )
                  ))),
            _differenceTree: (scope) =>
              scope.func$("path", (scope) =>
                scope.func$("lhs", (scope) =>
                  scope.func$("rhs", (scope) =>
                    scope.if$(
                      (scope.operators$.equal(scope.lhs, null)) ||
                      (scope.apply$(scope.isString, () =>
                        scope.rhs)),
                    ).then$(null).elseIf$(() =>
                      scope.operators$.equal(scope.rhs, null)
                    ).then$(() =>
                      scope.lhs
                    ).else$(() =>
                      scope.apply$(scope.mapAttrs, () =>
                        scope.func$("name", (scope) =>
                          scope.func$("lhsValue", (scope) =>
                            scope.apply$(
                              scope._differenceTree,
                              () => (scope.operators$.add(
                                scope.path,
                                scope.str$(() => ["/", scope.name]),
                              )),
                              () => scope.lhsValue,
                              () =>
                                scope.operators$.selectOrDefault(scope.rhs, [
                                  scope.name,
                                ], null),
                            ))), () =>
                        scope.apply$(scope._directoryEntries, () =>
                          scope.path, () =>
                          scope.lhs))
                    )))),
            _fileFilter: (scope) =>
              scope.func$("predicate", (scope) =>
                scope.func$("root", (scope) =>
                  scope.let$({
                    fromFile: (scope) =>
                      scope.func$("name", (scope) =>
                        scope.func$("type", (scope) =>
                          scope.if$(scope.apply$(scope.predicate, () =>
                            scope.attrSet$({
                              name: () =>
                                scope.name,
                              type: () =>
                                scope.type,
                              hasExt: () =>
                                scope.func$("ext", (scope) =>
                                  scope.apply$(scope.hasSuffix, () =>
                                    scope.str$(() => [".", scope.ext]), () =>
                                    scope.name)),
                              "lib.fileset.fileFilter: The predicate function passed as the first argument must be able to handle extra attributes for future compatibility. If you're using `{ name, file, hasExt }:`, use `{ name, file, hasExt, ... }:` instead.":
                                null,
                            }))).then$(() =>
                              scope.type
                            ).else$(null))),
                    fromDir: (scope) =>
                      scope.func$("path", (scope) =>
                        scope.apply$(scope.mapAttrs, () =>
                          scope.func$("name", (scope) =>
                            scope.func$("type", (scope) =>
                              scope.if$(
                                scope.operators$.equal(scope.type, "directory"),
                              ).then$(() =>
                                scope.apply$(
                                  scope.fromDir,
                                  () => (scope.operators$.add(
                                    scope.path,
                                    scope.str$(() => ["/", scope.name]),
                                  )),
                                )
                              ).else$(() =>
                                scope.apply$(scope.fromFile, () =>
                                  scope.name, () =>
                                  scope.type)
                              ))), () =>
                          scope.apply$(scope.readDir, () =>
                            scope.path))),
                    rootType: (scope) =>
                      scope.apply$(scope.pathType, () =>
                        scope.root),
                  }).in$((scope) =>
                    scope.if$(
                      scope.operators$.equal(scope.rootType, "directory"),
                    ).then$(() =>
                      scope.apply$(scope._create, () =>
                        scope.root, () =>
                        scope.apply$(scope.fromDir, () =>
                          scope.root))
                    ).else$(() =>
                      scope.apply$(scope._create, () =>
                        scope.apply$(scope.dirOf, () =>
                          scope.root), () =>
                        scope.attrSet$({
                          ...scope.deepSet$([
                            scope.apply$(scope.baseNameOf, () =>
                              scope.root),
                          ], () =>
                            scope.apply$(scope.fromFile, () =>
                              scope.apply$(scope.baseNameOf, () =>
                                scope.root), () =>
                              scope.rootType)),
                        }))
                    )
                  ))),
            _mirrorStorePath: (scope) =>
              scope.func$("localPath", (scope) =>
                scope.func$("storePath", (scope) =>
                  scope.let$({
                    recurse: (scope) =>
                      scope.func$("focusedStorePath", (scope) =>
                        scope.apply$(scope.mapAttrs, () =>
                          scope.func$("name", (scope) =>
                            scope.func$("type", (scope) =>
                              scope.if$(
                                scope.operators$.equal(scope.type, "directory"),
                              ).then$(() =>
                                scope.apply$(
                                  scope.recurse,
                                  () => (scope.operators$.add(
                                    scope.focusedStorePath,
                                    scope.str$(() => ["/", scope.name]),
                                  )),
                                )
                              ).else$(() =>
                                scope.type
                              ))), () =>
                          scope.apply$(scope.builtins["readDir"], () =>
                            scope.focusedStorePath))),
                  }).in$((scope) =>
                    scope.apply$(scope._create, () =>
                      scope.localPath, () =>
                      scope.apply$(scope.recurse, () =>
                        scope.storePath))
                  ))),
            _fromFetchGit: (scope) =>
              scope.func$("function", (scope) =>
                scope.func$("argument", (scope) =>
                  scope.func$("path", (scope) =>
                    scope.func$("extraFetchGitAttrs", (scope) =>
                      scope.let$({
                        tryStorePath: (scope) =>
                          scope.if$(
                            scope.apply$(
                              scope.pathExists,
                              () => (scope.operators$.add(scope.path, "/.git")),
                            ),
                          ).then$(() =>
                            scope.apply$(scope.throw, () =>
                              scope.str$(
                                () => [
                                  "lib.fileset.",
                                  scope.function,
                                  ": The ",
                                  scope.argument,
                                  " (",
                                  scope.apply$(
                                    scope.toString,
                                    () => scope.path,
                                  ),
                                  ') is a store path within a working tree of a Git repository.\n    This indicates that a source directory was imported into the store using a method such as `import "${./.}"` or `path:.`.\n    This function currently does not support such a use case, since it currently relies on `builtins.fetchGit`.\n    You could make this work by using a fetcher such as `fetchGit` instead of copying the whole repository.\n    If you can\'t avoid copying the repo to the store, see https://github.com/NixOS/nix/issues/9292.',
                                ]
                              ))
                          ).else$(() =>
                            scope.apply$(scope._singleton, () =>
                              scope.path)
                          ),
                        tryFetchGit: (scope) =>
                          scope.let$({
                            fetchResult: (scope) =>
                              scope.apply$(
                                scope.fetchGit,
                                () => (scope.operators$.merge(
                                  scope.attrSet$({
                                    url: () => scope.path,
                                    shallow: true,
                                  }),
                                  scope.extraFetchGitAttrs,
                                )),
                              ),
                          }).in$((scope) =>
                            scope.if$(
                              scope.operators$.negate(
                                scope.apply$(
                                  scope.pathExists,
                                  () => (scope.operators$.add(
                                    scope.path,
                                    "/.git",
                                  )),
                                ),
                              ),
                            ).then$(() =>
                              scope.apply$(scope.throw, () =>
                                scope.str$(
                                  () => [
                                    "lib.fileset.",
                                    scope.function,
                                    ": Expected the ",
                                    scope.argument,
                                    " (",
                                    scope.apply$(
                                      scope.toString,
                                      () => scope.path,
                                    ),
                                    ") to point to a local working tree of a Git repository, but it's not.",
                                  ]
                                ))
                            ).else$(() =>
                              scope.apply$(scope._mirrorStorePath, () =>
                                scope.path, () =>
                                scope.fetchResult["outPath"])
                            )
                          ),
                      }).in$((scope) =>
                        scope.if$(
                          scope.operators$.negate(
                            scope.apply$(scope.isPath, () => scope.path),
                          ),
                        ).then$(() =>
                          scope.apply$(scope.throw, () =>
                            scope.str$(
                              () => [
                                "lib.fileset.",
                                scope.function,
                                ": Expected the ",
                                scope.argument,
                                " to be a path, but it's a ",
                                scope.apply$(scope.typeOf, () => scope.path),
                                " instead.",
                              ]
                            ))
                        ).elseIf$(() =>
                          scope.operators$.notEqual(
                            scope.apply$(scope.pathType, () =>
                              scope.path),
                            "directory",
                          )
                        ).then$(() =>
                          scope.apply$(scope.throw, () =>
                            scope.str$(
                              () => [
                                "lib.fileset.",
                                scope.function,
                                ": Expected the ",
                                scope.argument,
                                " (",
                                scope.apply$(scope.toString, () => scope.path),
                                ") to be a directory, but it's a file instead.",
                              ]
                            ))
                        ).elseIf$(() =>
                          scope.apply$(scope.hasStorePathPrefix, () =>
                            scope.path)
                        ).then$(() =>
                          scope.tryStorePath
                        ).else$(() =>
                          scope.tryFetchGit
                        )
                      ))))),
          })
        ),
    )
  ),
);
