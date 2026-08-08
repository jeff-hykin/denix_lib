import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";
import _nix_internal_60d801c1 from "./internal.js";

export default nixFile(
  new URL("./default.nix", import.meta.url).pathname,
  ({ scope }) => (
    /**
  <!-- This anchor is here for backwards compatibility -->
  []{#sec-fileset}

  The [`lib.fileset`](#sec-functions-library-fileset) library allows you to work with _file sets_.
  A file set is a (mathematical) set of local files that can be added to the Nix store for use in Nix derivations.
  File sets are easy and safe to use, providing obvious and composable semantics with good error messages to prevent mistakes.

  # Overview {#sec-fileset-overview}

  Basics:
  - [Implicit coercion from paths to file sets](#sec-fileset-path-coercion)

  - [`lib.fileset.maybeMissing`](#function-library-lib.fileset.maybeMissing):

    Create a file set from a path that may be missing.

  - [`lib.fileset.trace`](#function-library-lib.fileset.trace)/[`lib.fileset.traceVal`](#function-library-lib.fileset.trace):

    Pretty-print file sets for debugging.

  - [`lib.fileset.toSource`](#function-library-lib.fileset.toSource):

    Add files in file sets to the store to use as derivation sources.

  - [`lib.fileset.toList`](#function-library-lib.fileset.toList):

    The list of files contained in a file set.

  Combinators:
  - [`lib.fileset.union`](#function-library-lib.fileset.union)/[`lib.fileset.unions`](#function-library-lib.fileset.unions):

    Create a larger file set from all the files in multiple file sets.

  - [`lib.fileset.intersection`](#function-library-lib.fileset.intersection):

    Create a smaller file set from only the files in both file sets.

  - [`lib.fileset.difference`](#function-library-lib.fileset.difference):

    Create a smaller file set containing all files that are in one file set, but not another one.

  Filtering:
  - [`lib.fileset.fileFilter`](#function-library-lib.fileset.fileFilter):

    Create a file set from all files that satisisfy a predicate in a directory.

  Utilities:
  - [`lib.fileset.fromSource`](#function-library-lib.fileset.fromSource):

    Create a file set from a `lib.sources`-based value.

  - [`lib.fileset.gitTracked`](#function-library-lib.fileset.gitTracked)/[`lib.fileset.gitTrackedWith`](#function-library-lib.fileset.gitTrackedWith):

    Create a file set from all tracked files in a local Git repository.

  If you need more file set functions,
  see [this issue](https://github.com/NixOS/nixpkgs/issues/266356) to request it.

  # Implicit coercion from paths to file sets {#sec-fileset-path-coercion}

  All functions accepting file sets as arguments can also accept [paths](https://nixos.org/manual/nix/stable/language/values.html#type-path) as arguments.
  Such path arguments are implicitly coerced to file sets containing all files under that path:
  - A path to a file turns into a file set containing that single file.
  - A path to a directory turns into a file set containing all files _recursively_ in that directory.

  If the path points to a non-existent location, an error is thrown.

  ::: {.note}
  Just like in Git, file sets cannot represent empty directories.
  Because of this, a path to a directory that contains no files (recursively) will turn into a file set containing no files.
  :::

  :::{.note}
  File set coercion does _not_ add any of the files under the coerced paths to the store.
  Only the [`toSource`](#function-library-lib.fileset.toSource) function adds files to the Nix store, and only those files contained in the `fileset` argument.
  This is in contrast to using [paths in string interpolation](https://nixos.org/manual/nix/stable/language/values.html#type-path), which does add the entire referenced path to the store.
  :::

  ## Example {#sec-fileset-path-coercion-example}

  Assume we are in a local directory with a file hierarchy like this:
  ```
  ├─ a/
  │  ├─ x (file)
  │  └─ b/
  │     └─ y (file)
  └─ c/
     └─ d/
  ```

  Here's a listing of which files get included when different path expressions get coerced to file sets:
  - `./.` as a file set contains both `a/x` and `a/b/y` (`c/` does not contain any files and is therefore omitted).
  - `./a` as a file set contains both `a/x` and `a/b/y`.
  - `./a/x` as a file set contains only `a/x`.
  - `./a/b` as a file set contains only `a/b/y`.
  - `./c` as a file set is empty, since neither `c` nor `c/d` contain any files.
    */ scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        _coerce: (scope) =>
          scope.apply$(_nix_internal_60d801c1(scope.runtime$), () =>
            scope.attrSet$({
              lib: () => scope.lib,
            }))["_coerce"],
        _coerceResult: (scope) =>
          scope.apply$(_nix_internal_60d801c1(scope.runtime$), () =>
            scope.attrSet$({
              lib: () =>
                scope.lib,
            }))["_coerceResult"],
        _singleton: (scope) =>
          scope.apply$(_nix_internal_60d801c1(scope.runtime$), () =>
            scope.attrSet$({
              lib: () =>
                scope.lib,
            }))["_singleton"],
        _coerceMany: (scope) =>
          scope.apply$(_nix_internal_60d801c1(scope.runtime$), () =>
            scope.attrSet$({
              lib: () =>
                scope.lib,
            }))["_coerceMany"],
        _toSourceFilter: (scope) =>
          scope.apply$(_nix_internal_60d801c1(scope.runtime$), () =>
            scope.attrSet$({
              lib: () =>
                scope.lib,
            }))["_toSourceFilter"],
        _fromSourceFilter: (scope) =>
          scope.apply$(_nix_internal_60d801c1(scope.runtime$), () =>
            scope.attrSet$({
              lib: () =>
                scope.lib,
            }))["_fromSourceFilter"],
        _toList: (scope) =>
          scope.apply$(_nix_internal_60d801c1(scope.runtime$), () =>
            scope.attrSet$({
              lib: () =>
                scope.lib,
            }))["_toList"],
        _unionMany: (scope) =>
          scope.apply$(_nix_internal_60d801c1(scope.runtime$), () =>
            scope.attrSet$({
              lib: () =>
                scope.lib,
            }))["_unionMany"],
        _fileFilter: (scope) =>
          scope.apply$(_nix_internal_60d801c1(scope.runtime$), () =>
            scope.attrSet$({
              lib: () =>
                scope.lib,
            }))["_fileFilter"],
        _printFileset: (scope) =>
          scope.apply$(_nix_internal_60d801c1(scope.runtime$), () =>
            scope.attrSet$({
              lib: () =>
                scope.lib,
            }))["_printFileset"],
        _intersection: (scope) =>
          scope.apply$(_nix_internal_60d801c1(scope.runtime$), () =>
            scope.attrSet$({
              lib: () =>
                scope.lib,
            }))["_intersection"],
        _difference: (scope) =>
          scope.apply$(_nix_internal_60d801c1(scope.runtime$), () =>
            scope.attrSet$({
              lib: () =>
                scope.lib,
            }))["_difference"],
        _fromFetchGit: (scope) =>
          scope.apply$(_nix_internal_60d801c1(scope.runtime$), () =>
            scope.attrSet$({
              lib: () =>
                scope.lib,
            }))["_fromFetchGit"],
        _emptyWithoutBase: (scope) =>
          scope.apply$(_nix_internal_60d801c1(scope.runtime$), () =>
            scope.attrSet$({
              lib: () =>
                scope.lib,
            }))["_emptyWithoutBase"],
        isBool: (scope) =>
          scope.builtins["isBool"],
        isList: (scope) =>
          scope.builtins["isList"],
        isPath: (scope) =>
          scope.builtins["isPath"],
        pathExists: (scope) =>
          scope.builtins["pathExists"],
        seq: (scope) =>
          scope.builtins["seq"],
        typeOf: (scope) =>
          scope.builtins["typeOf"],
        elemAt: (scope) =>
          scope.lib["lists"]["elemAt"],
        imap0: (scope) =>
          scope.lib["lists"]["imap0"],
        hasPrefix: (scope) =>
          scope.lib["path"]["hasPrefix"],
        splitRoot: (scope) =>
          scope.lib["path"]["splitRoot"],
        isStringLike: (scope) =>
          scope.lib["strings"]["isStringLike"],
        pathType: (scope) =>
          scope.lib["filesystem"]["pathType"],
        cleanSourceWith: (scope) =>
          scope.lib["sources"]["cleanSourceWith"],
        isFunction: (scope) =>
          scope.lib["trivial"]["isFunction"],
        pipe: (scope) =>
          scope.lib["trivial"]["pipe"],
      }).in$((scope) =>
        scope.attrSet$({
          maybeMissing: () =>
            scope.func$("path", (scope) =>
              scope.if$(scope.operators$.negate(scope.apply$(scope.isPath, () =>
                scope.path))).then$(() =>
                  scope.if$(scope.apply$(scope.isStringLike, () =>
                    scope.path)).then$(() =>
                      scope.apply$(scope.throw, () =>
                        scope.str$(
                          () => [
                            'lib.fileset.maybeMissing: Argument ("',
                            scope.apply$(scope.toString, () => scope.path),
                            '") is a string-like value, but it should be a path instead.',
                          ]
                        ))
                    ).else$(() =>
                      scope.apply$(scope.throw, () =>
                        scope.str$(
                          () => [
                            "lib.fileset.maybeMissing: Argument is of type ",
                            scope.apply$(scope.typeOf, () =>
                              scope.path),
                            ", but it should be a path instead.",
                          ]
                        ))
                    )
                ).elseIf$(() =>
                  scope.operators$.negate(scope.apply$(scope.pathExists, () =>
                    scope.path))
                ).then$(() =>
                  scope._emptyWithoutBase
                ).else$(() =>
                  scope.apply$(scope._singleton, () =>
                    scope.path)
                )),
          trace: () =>
            scope.func$("fileset", (scope) =>
              scope.let$({
                actualFileset: (scope) =>
                  scope.apply$(
                    scope._coerce,
                    "lib.fileset.trace: Argument",
                    () => scope.fileset,
                  ),
              }).in$((scope) =>
                scope.apply$(scope.seq, () =>
                  scope.apply$(scope._printFileset, () =>
                    scope.actualFileset), () =>
                  scope.func$("x", (scope) =>
                    scope.x))
              )),
          traceVal: () =>
            scope.func$("fileset", (scope) =>
              scope.let$({
                actualFileset: (scope) =>
                  scope.apply$(
                    scope._coerce,
                    "lib.fileset.traceVal: Argument",
                    () => scope.fileset,
                  ),
              }).in$((scope) =>
                scope.apply$(scope.seq, () =>
                  scope.apply$(scope._printFileset, () =>
                    scope.actualFileset), () =>
                  scope.actualFileset)
              )),
          toSource: () =>
            scope.func$({
              root: scope.nixArg$.NoDefault,
              fileset: scope.nixArg$.NoDefault,
            }, (scope) =>
              scope.let$({
                filesetArg: (scope) =>
                  scope.fileset,
              }).in$((scope) =>
                scope.let$({
                  fileset: (scope) =>
                    scope.apply$(
                      scope._coerce,
                      "lib.fileset.toSource: `fileset`",
                      () => scope.filesetArg,
                    ),
                  rootFilesystemRoot: (scope) =>
                    scope.apply$(scope.splitRoot, () =>
                      scope.root)["root"],
                  filesetFilesystemRoot: (scope) =>
                    scope.apply$(scope.splitRoot, () =>
                      scope.fileset["_internalBase"])["root"],
                  sourceFilter: (scope) =>
                    scope.apply$(scope._toSourceFilter, () =>
                      scope.fileset),
                }).in$((scope) =>
                  scope.if$(
                    scope.operators$.negate(scope.apply$(scope.isPath, () =>
                      scope.root)),
                  ).then$(() =>
                    scope.if$(
                      scope.operators$.hasAttr(
                        scope.root,
                        "_isLibCleanSourceWith",
                      ),
                    ).then$(() =>
                      scope.apply$(
                        scope.throw,
                        "lib.fileset.toSource: `root` is a `lib.sources`-based value, but it should be a path instead.\n    To use a `lib.sources`-based value, convert it to a file set using `lib.fileset.fromSource` and pass it as `fileset`.\n    Note that this only works for sources created from paths.",
                      )
                    ).elseIf$(() =>
                      scope.apply$(scope.isStringLike, () =>
                        scope.root)
                    ).then$(() =>
                      scope.apply$(scope.throw, () =>
                        scope.str$(
                          () => [
                            "lib.fileset.toSource: `root` (",
                            scope.apply$(scope.toString, () => scope.root),
                            ") is a string-like value, but it should be a path instead.\n    Paths in strings are not supported by `lib.fileset`, use `lib.sources` or derivations instead.",
                          ]
                        ))
                    ).else$(() =>
                      scope.apply$(scope.throw, () =>
                        scope.str$(
                          () => [
                            "lib.fileset.toSource: `root` is of type ",
                            scope.apply$(scope.typeOf, () => scope.root),
                            ", but it should be a path instead.",
                          ]
                        ))
                    )
                  ).elseIf$(
                    () => ((scope.operators$.negate(
                      scope.fileset["_internalIsEmptyWithoutBase"],
                    )) &&
                      (scope.operators$.notEqual(
                        scope.rootFilesystemRoot,
                        scope.filesetFilesystemRoot,
                      )))
                  ).then$(() =>
                    scope.apply$(scope.throw, () =>
                      scope.str$(
                        () => [
                          "lib.fileset.toSource: Filesystem roots are not the same for `fileset` and `root` (",
                          scope.apply$(scope.toString, () =>
                            scope.root),
                          '):\n    `root`: Filesystem root is "',
                          scope.apply$(
                            scope.toString,
                            () => scope.rootFilesystemRoot,
                          ),
                          '"\n    `fileset`: Filesystem root is "',
                          scope.apply$(
                            scope.toString,
                            () => scope.filesetFilesystemRoot,
                          ),
                          '"\n    Different filesystem roots are not supported.',
                        ]
                      ))
                  ).elseIf$(() =>
                    scope.operators$.negate(scope.apply$(scope.pathExists, () =>
                      scope.root))
                  ).then$(() =>
                    scope.apply$(scope.throw, () =>
                      scope.str$(
                        () => [
                          "lib.fileset.toSource: `root` (",
                          scope.apply$(scope.toString, () => scope.root),
                          ") is a path that does not exist.",
                        ]
                      ))
                  ).elseIf$(() =>
                    scope.operators$.notEqual(
                      scope.apply$(scope.pathType, () => scope.root),
                      "directory",
                    )
                  ).then$(() =>
                    scope.apply$(scope.throw, () =>
                      scope.str$(
                        () => [
                          "lib.fileset.toSource: `root` (",
                          scope.apply$(scope.toString, () => scope.root),
                          ") is a file, but it should be a directory instead. Potential solutions:\n    - If you want to import the file into the store _without_ a containing directory, use string interpolation or `builtins.path` instead of this function.\n    - If you want to import the file into the store _with_ a containing directory, set `root` to the containing directory, such as ",
                          scope.apply$(scope.toString, () =>
                            scope.apply$(scope.dirOf, () =>
                              scope.root)),
                          ", and set `fileset` to the file path.",
                        ]
                      ))
                  ).elseIf$(
                    () => ((scope.operators$.negate(
                      scope.fileset["_internalIsEmptyWithoutBase"],
                    )) &&
                      (scope.operators$.negate(
                        scope.apply$(scope.hasPrefix, () =>
                          scope.root, () =>
                          scope.fileset["_internalBase"]),
                      )))
                  ).then$(() =>
                    scope.apply$(scope.throw, () =>
                      scope.str$(
                        () => [
                          "lib.fileset.toSource: `fileset` could contain files in ",
                          scope.apply$(scope.toString, () =>
                            scope.fileset["_internalBase"]),
                          ", which is not under the `root` (",
                          scope.apply$(scope.toString, () =>
                            scope.root),
                          "). Potential solutions:\n    - Set `root` to ",
                          scope.apply$(scope.toString, () =>
                            scope.fileset["_internalBase"]),
                          " or any directory higher up. This changes the layout of the resulting store path.\n    - Set `fileset` to a file set that cannot contain files outside the `root` (",
                          scope.apply$(scope.toString, () =>
                            scope.root),
                          "). This could change the files included in the result.",
                        ]
                      ))
                  ).else$(() =>
                    scope.apply$(scope.seq, () =>
                      scope.sourceFilter, () =>
                      scope.cleanSourceWith, () =>
                      scope.attrSet$({
                        name: "source",
                        src: () =>
                          scope.root,
                        filter: () =>
                          scope.sourceFilter,
                      }))
                  )
                )
              )),
          toList: () =>
            scope.func$("fileset", (scope) =>
              scope.apply$(scope._toList, () =>
                scope.apply$(
                  scope._coerce,
                  "lib.fileset.toList: Argument",
                  () => scope.fileset,
                ))),
          union: () =>
            scope.func$("fileset1", (scope) =>
              scope.func$("fileset2", (scope) =>
                scope.apply$(scope._unionMany, () =>
                  scope.apply$(
                    scope._coerceMany,
                    "lib.fileset.union",
                    () => [
                      scope.attrSet$({
                        context: "First argument",
                        value: () => scope.fileset1,
                      }),
                      scope.attrSet$({
                        context: "Second argument",
                        value: () => scope.fileset2,
                      }),
                    ],
                  )))),
          unions: () =>
            scope.func$("filesets", (scope) =>
              scope.if$(scope.operators$.negate(scope.apply$(scope.isList, () =>
                scope.filesets))).then$(() =>
                  scope.apply$(scope.throw, () =>
                    scope.str$(
                      () => [
                        "lib.fileset.unions: Argument is of type ",
                        scope.apply$(scope.typeOf, () => scope.filesets),
                        ", but it should be a list instead.",
                      ]
                    ))
                ).else$(() =>
                  scope.apply$(scope.pipe, () =>
                    scope.filesets, () => [
                    scope.apply$(scope.imap0, () =>
                      scope.func$("i", (scope) =>
                        scope.func$("el", (scope) =>
                          scope.attrSet$({
                            context: () =>
                              scope.str$(
                                () => [
                                  "Element ",
                                  scope.apply$(scope.toString, () => scope.i),
                                ]
                              ),
                            value: () => scope.el,
                          })))),
                    scope.apply$(scope._coerceMany, "lib.fileset.unions"),
                    scope._unionMany,
                  ])
                )),
          intersection: () =>
            scope.func$("fileset1", (scope) =>
              scope.func$("fileset2", (scope) =>
                scope.let$({
                  filesets: (scope) =>
                    scope.apply$(
                      scope._coerceMany,
                      "lib.fileset.intersection",
                      () => [
                        scope.attrSet$({
                          context: "First argument",
                          value: () => scope.fileset1,
                        }),
                        scope.attrSet$({
                          context: "Second argument",
                          value: () => scope.fileset2,
                        }),
                      ],
                    ),
                }).in$((scope) =>
                  scope.apply$(scope._intersection, () =>
                    scope.apply$(scope.elemAt, () =>
                      scope.filesets, 0n), () =>
                    scope.apply$(scope.elemAt, () =>
                      scope.filesets, 1n))
                ))),
          difference: () =>
            scope.func$("positive", (scope) =>
              scope.func$("negative", (scope) =>
                scope.let$({
                  filesets: (scope) =>
                    scope.apply$(
                      scope._coerceMany,
                      "lib.fileset.difference",
                      () => [
                        scope.attrSet$({
                          context: "First argument (positive set)",
                          value: () => scope.positive,
                        }),
                        scope.attrSet$({
                          context: "Second argument (negative set)",
                          value: () => scope.negative,
                        }),
                      ],
                    ),
                }).in$((scope) =>
                  scope.apply$(scope._difference, () =>
                    scope.apply$(scope.elemAt, () =>
                      scope.filesets, 0n), () =>
                    scope.apply$(scope.elemAt, () =>
                      scope.filesets, 1n))
                ))),
          fileFilter: () =>
            scope.func$("predicate", (scope) =>
              scope.func$("path", (scope) =>
                scope.if$(
                  scope.operators$.negate(scope.apply$(scope.isFunction, () =>
                    scope.predicate)),
                ).then$(() =>
                  scope.apply$(scope.throw, () =>
                    scope.str$(
                      () => [
                        "lib.fileset.fileFilter: First argument is of type ",
                        scope.apply$(scope.typeOf, () =>
                          scope.predicate),
                        ", but it should be a function instead.",
                      ]
                    ))
                ).elseIf$(() =>
                  scope.operators$.negate(scope.apply$(scope.isPath, () =>
                    scope.path))
                ).then$(() =>
                  scope.if$(
                    scope.operators$.equal(
                      scope.operators$.selectOrDefault(
                        scope.path,
                        ["_type"],
                        "",
                      ),
                      "fileset",
                    ),
                  ).then$(() =>
                    scope.apply$(
                      scope.throw,
                      "lib.fileset.fileFilter: Second argument is a file set, but it should be a path instead.\n    If you need to filter files in a file set, use `intersection fileset (fileFilter pred ./.)` instead.",
                    )
                  ).else$(() =>
                    scope.apply$(scope.throw, () =>
                      scope.str$(
                        () => [
                          "lib.fileset.fileFilter: Second argument is of type ",
                          scope.apply$(scope.typeOf, () =>
                            scope.path),
                          ", but it should be a path instead.",
                        ]
                      ))
                  )
                ).elseIf$(() =>
                  scope.operators$.negate(scope.apply$(scope.pathExists, () =>
                    scope.path))
                ).then$(() =>
                  scope.apply$(scope.throw, () =>
                    scope.str$(
                      () => [
                        "lib.fileset.fileFilter: Second argument (",
                        scope.apply$(scope.toString, () => scope.path),
                        ") is a path that does not exist.",
                      ]
                    ))
                ).else$(() =>
                  scope.apply$(scope._fileFilter, () =>
                    scope.predicate, () =>
                    scope.path)
                ))),
          fromSource: () =>
            scope.func$("source", (scope) =>
              scope.let$({
                isFiltered: (scope) =>
                  scope.operators$.hasAttr(
                    scope.source,
                    "_isLibCleanSourceWith",
                  ),
                path: (scope) =>
                  scope.if$(scope.isFiltered).then$(() =>
                    scope.source["origSrc"]
                  ).else$(() =>
                    scope.source
                  ),
              }).in$((scope) =>
                scope.if$(
                  scope.operators$.negate(scope.apply$(scope.isPath, () =>
                    scope.path)),
                ).then$(() =>
                  scope.if$(scope.apply$(scope.isStringLike, () =>
                    scope.path)).then$(() =>
                      scope.apply$(scope.throw, () =>
                        scope.str$(
                          () => [
                            'lib.fileset.fromSource: The source origin of the argument is a string-like value ("',
                            scope.apply$(scope.toString, () =>
                              scope.path),
                            '"), but it should be a path instead.\n    Sources created from paths in strings cannot be turned into file sets, use `lib.sources` or derivations instead.',
                          ]
                        ))
                    ).else$(() =>
                      scope.apply$(scope.throw, () =>
                        scope.str$(
                          () => [
                            "lib.fileset.fromSource: The source origin of the argument is of type ",
                            scope.apply$(scope.typeOf, () =>
                              scope.path),
                            ", but it should be a path instead.",
                          ]
                        ))
                    )
                ).elseIf$(() =>
                  scope.operators$.negate(scope.apply$(scope.pathExists, () =>
                    scope.path))
                ).then$(() =>
                  scope.apply$(scope.throw, () =>
                    scope.str$(
                      () => [
                        "lib.fileset.fromSource: The source origin (",
                        scope.apply$(scope.toString, () => scope.path),
                        ") of the argument is a path that does not exist.",
                      ]
                    ))
                ).elseIf$(() =>
                  scope.isFiltered
                ).then$(() =>
                  scope.apply$(scope._fromSourceFilter, () =>
                    scope.path, () =>
                    scope.source["filter"])
                ).else$(() =>
                  scope.apply$(scope._singleton, () =>
                    scope.path)
                )
              )),
          gitTracked: () =>
            scope.func$("path", (scope) =>
              scope.apply$(scope._fromFetchGit, "gitTracked", "argument", () =>
                scope.path, {})),
          gitTrackedWith: () =>
            scope.func$({ recurseSubmodules: false }, (scope) =>
              scope.func$("path", (scope) =>
                scope.if$(
                  scope.operators$.negate(scope.apply$(scope.isBool, () =>
                    scope.recurseSubmodules)),
                ).then$(() =>
                  scope.apply$(scope.throw, () =>
                    scope.str$(
                      () => [
                        "lib.fileset.gitTrackedWith: Expected the attribute `recurseSubmodules` of the first argument to be a boolean, but it's a ",
                        scope.apply$(scope.typeOf, () =>
                          scope.recurseSubmodules),
                        " instead.",
                      ]
                    ))
                ).else$(() =>
                  scope.apply$(
                    scope._fromFetchGit,
                    "gitTrackedWith",
                    "second argument",
                    () => scope.path,
                    () =>
                      scope.attrSet$({
                        submodules: () => scope.recurseSubmodules,
                      }),
                  )
                ))),
          empty: () =>
            scope._emptyWithoutBase,
          isFileset: () =>
            scope.func$("x", (scope) =>
              scope.apply$(scope._coerceResult, "", () =>
                scope.x)["success"]),
        })
      ))
  ),
);
