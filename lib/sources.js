import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./sources.nix", import.meta.url).pathname,
  ({ scope }) => (
    //
    scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        escapeRegex: (scope) => scope.lib["strings"]["escapeRegex"],
        hasPrefix: (scope) => scope.lib["strings"]["hasPrefix"],
        hasSuffix: (scope) => scope.lib["strings"]["hasSuffix"],
        match: (scope) => scope.lib["strings"]["match"],
        removePrefix: (scope) => scope.lib["strings"]["removePrefix"],
        removeSuffix: (scope) => scope.lib["strings"]["removeSuffix"],
        split: (scope) => scope.lib["strings"]["split"],
        splitString: (scope) => scope.lib["strings"]["splitString"],
        storeDir: (scope) => scope.lib["strings"]["storeDir"],
        stringLength: (scope) => scope.lib["strings"]["stringLength"],
        substring: (scope) => scope.lib["strings"]["substring"],
        any: (scope) => scope.lib["any"],
        boolToString: (scope) => scope.lib["boolToString"],
        concatStrings: (scope) => scope.lib["concatStrings"],
        elemAt: (scope) => scope.lib["elemAt"],
        fileContents: (scope) => scope.lib["fileContents"],
        filter: (scope) => scope.lib["filter"],
        head: (scope) => scope.lib["head"],
        isList: (scope) => scope.lib["isList"],
        isString: (scope) => scope.lib["isString"],
        last: (scope) => scope.lib["last"],
        length: (scope) => scope.lib["length"],
        readFile: (scope) => scope.lib["readFile"],
        pathIsRegularFile: (scope) =>
          scope.lib["filesystem"]["pathIsRegularFile"],
        removeSlashSuffix: (scope) => scope.apply$(scope.removeSuffix, "/"),
        cleanSourceFilter: (scope) =>
          scope.let$({
            hasEmacsBackupFileSuffix: (scope) =>
              scope.apply$(scope.hasSuffix, "~"),
            hasObjectSuffix: (scope) => scope.apply$(scope.hasSuffix, ".o"),
            hasSharedObjectSuffix: (scope) =>
              scope.apply$(scope.hasSuffix, ".so"),
            hasResultPrefix: (scope) => scope.apply$(scope.hasPrefix, "result"),
          }).in$((scope) =>
            scope.func$("name", (scope) =>
              scope.func$("type", (scope) =>
                scope.let$({
                  baseName: (scope) =>
                    scope.apply$(scope.baseNameOf, () => scope.name),
                }).in$((scope) =>
                  scope.operators$.negate(
                    ((((((((scope.operators$.equal(scope.baseName, ".git")) ||
                      ((scope.operators$.equal(scope.type, "directory")) &&
                        ((((((scope.operators$.equal(scope.baseName, ".svn")) ||
                          (scope.operators$.equal(scope.baseName, "CVS"))) ||
                          (scope.operators$.equal(scope.baseName, ".hg"))) ||
                          (scope.operators$.equal(scope.baseName, ".jj"))) ||
                          (scope.operators$.equal(scope.baseName, ".pijul"))) ||
                          (scope.operators$.equal(
                            scope.baseName,
                            "_darcs",
                          ))))) ||
                      (scope.apply$(
                        scope.hasEmacsBackupFileSuffix,
                        () => scope.baseName,
                      ))) ||
                      (scope.operators$.notEqual(
                        scope.apply$(scope.match, "^\\.sw[a-z]$", () =>
                          scope.baseName),
                        null,
                      ))) ||
                      (scope.operators$.notEqual(
                        scope.apply$(scope.match, "^\\..*\\.sw[a-z]$", () =>
                          scope.baseName),
                        null,
                      ))) ||
                      (scope.apply$(
                        scope.hasObjectSuffix,
                        () => scope.baseName,
                      ))) ||
                      (scope.apply$(
                        scope.hasSharedObjectSuffix,
                        () => scope.baseName,
                      ))) ||
                      ((scope.operators$.equal(scope.type, "symlink")) &&
                        (scope.apply$(
                          scope.hasResultPrefix,
                          () => scope.baseName,
                        )))) || (scope.operators$.equal(scope.type, "unknown")),
                  )
                )))
          ),
        cleanSource: (scope) =>
          scope.func$("src", (scope) =>
            scope.apply$(scope.cleanSourceWith, () =>
              scope.attrSet$({
                filter: () =>
                  scope.cleanSourceFilter,
                src: () => scope.src,
              }))),
        cleanSourceWith: (scope) =>
          scope.func$({
            src: scope.nixArg$.NoDefault,
            filter: null,
            name: null,
          }, (scope) =>
            scope.let$({
              orig: (scope) =>
                scope.apply$(scope.toSourceAttributes, () =>
                  scope.src),
            }).in$((scope) =>
              scope.apply$(scope.fromSourceAttributes, () =>
                scope.attrSet$({
                  origSrc: () => scope.orig.origSrc,
                  filter: () =>
                    scope.if$(
                      scope.operators$.equal(scope.orig["filter"], null),
                    ).then$(() => scope.filter).elseIf$(() =>
                      scope.operators$.equal(scope.filter, null)
                    ).then$(() => scope.orig["filter"]).else$(() =>
                      scope.func$(
                        "path",
                        (scope) =>
                          scope.func$(
                            "type",
                            (
                              scope,
                            ) => ((scope.apply$(
                              scope.filter,
                              () => scope.path,
                              () => scope.type,
                            )) && (scope.apply$(scope.orig["filter"], () =>
                              scope.path, () =>
                              scope.type))),
                          ),
                      )
                    ),
                  name: () =>
                    scope.if$(scope.operators$.notEqual(scope.name, null))
                      .then$(() => scope.name).else$(() => scope.orig["name"]),
                }))
            )),
        trace: (scope) =>
          scope.func$("src", (scope) =>
            scope.let$({
              attrs: (scope) =>
                scope.apply$(scope.toSourceAttributes, () => scope.src),
            }).in$((scope) =>
              scope.operators$.merge(
                scope.apply$(
                  scope.fromSourceAttributes,
                  () => (scope.operators$.merge(
                    scope.attrs,
                    scope.attrSet$({
                      filter: () =>
                        scope.if$(
                          scope.operators$.equal(scope.attrs["filter"], null),
                        ).then$(() =>
                          scope.func$("path", (scope) =>
                            scope.func$("type", (scope) =>
                              scope.apply$(scope.builtins["trace"], () =>
                                scope.str$(
                                  () => [
                                    scope.attrs["name"],
                                    ".filter ",
                                    scope.path,
                                    " = true",
                                  ]
                                ), true)))
                        ).else$(() =>
                          scope.func$("path", (scope) =>
                            scope.func$("type", (scope) =>
                              scope.let$({
                                r: (scope) =>
                                  scope.apply$(
                                    scope.attrs["filter"],
                                    () => scope.path,
                                    () => scope.type,
                                  ),
                              }).in$((scope) =>
                                scope.apply$(scope.builtins["trace"], () =>
                                  scope.str$(
                                    () => [
                                      scope.attrs["name"],
                                      ".filter ",
                                      scope.path,
                                      " = ",
                                      scope.apply$(
                                        scope.boolToString,
                                        () => scope.r,
                                      ),
                                    ]
                                  ), () => scope.r)
                              )))
                        ),
                    }),
                  )),
                ),
                scope.attrSet$({
                  satisfiesSubpathInvariant:
                    () => ((scope.operators$.hasAttr(
                      scope.src,
                      "satisfiesSubpathInvariant",
                    )) && (scope.src["satisfiesSubpathInvariant"])),
                }),
              )
            )),
        sourceByRegex: (scope) =>
          scope.func$("src", (scope) =>
            scope.func$("regexes", (scope) =>
              scope.let$({
                isFiltered: (scope) =>
                  scope.operators$.hasAttr(scope.src, "_isLibCleanSourceWith"),
                origSrc: (scope) =>
                  scope.if$(scope.isFiltered).then$(() => scope.src["origSrc"])
                    .else$(() => scope.src),
              }).in$((scope) =>
                scope.apply$(scope.cleanSourceWith, () =>
                  scope.attrSet$({
                    filter: () =>
                      scope.func$("path", (scope) =>
                        scope.func$("type", (scope) =>
                          scope.let$({
                            relPath: (scope) =>
                              scope.apply$(
                                scope.removePrefix,
                                () => (scope.operators$.add(
                                  scope.apply$(scope.toString, () =>
                                    scope.origSrc),
                                  "/",
                                )),
                                () =>
                                  scope.apply$(
                                    scope.toString,
                                    () => scope.path,
                                  ),
                              ),
                          }).in$((scope) =>
                            scope.apply$(
                              scope.any,
                              () =>
                                scope.func$("re", (scope) =>
                                  scope.operators$.notEqual(
                                    scope.apply$(scope.match, () =>
                                      scope.re, () =>
                                      scope.relPath),
                                    null,
                                  )),
                              () =>
                                scope.regexes,
                            )
                          ))),
                    src: () => scope.src,
                  }))
              ))),
        sourceFilesBySuffices: (scope) =>
          scope.func$("src", (scope) =>
            scope.func$("exts", (scope) =>
              scope.let$({
                filter: (scope) =>
                  scope.func$(
                    "name",
                    (scope) =>
                      scope.func$("type", (scope) =>
                        scope.let$({
                          base: (scope) =>
                            scope.apply$(scope.baseNameOf, () => scope.name),
                        }).in$((
                          scope,
                        ) => ((scope.operators$.equal(
                          scope.type,
                          "directory",
                        )) || (scope.apply$(scope.any, () =>
                          scope.func$("ext", (scope) =>
                            scope.apply$(scope.hasSuffix, () =>
                              scope.ext, () =>
                              scope.base)), () =>
                          scope.exts)))
                        )),
                  ),
              }).in$((scope) =>
                scope.apply$(scope.cleanSourceWith, () =>
                  scope.attrSet$({
                    filter: () => scope.filter,
                    src: () => scope.src,
                  }))
              ))),
        pathIsGitRepo: (scope) =>
          scope.func$(
            "path",
            (scope) =>
              scope.operators$.hasAttr(
                scope.apply$(scope._commitIdFromGitRepoOrError, () =>
                  scope.path),
                "value",
              ),
          ),
        commitIdFromGitRepo: (scope) =>
          scope.func$("path", (scope) =>
            scope.let$({
              commitIdOrError: (scope) =>
                scope.apply$(
                  scope._commitIdFromGitRepoOrError,
                  () => scope.path,
                ),
            }).in$((scope) =>
              scope.operators$.selectOrDefault(
                scope.commitIdOrError,
                ["value"],
                () =>
                  scope.apply$(
                    scope.throw,
                    () => scope.commitIdOrError["error"],
                  ),
              )
            )),
        _commitIdFromGitRepoOrError: (scope) =>
          scope.let$({
            readCommitFromFile: (scope) =>
              scope.func$("file", (scope) =>
                scope.func$("path", (scope) =>
                  scope.let$({
                    fileName: (scope) =>
                      scope.operators$.add(
                        scope.path,
                        scope.str$(() => ["/", scope.file]),
                      ),
                    packedRefsName: (scope) =>
                      scope.operators$.add(scope.path, "/packed-refs"),
                    absolutePath: (scope) =>
                      scope.func$(
                        "base",
                        (scope) =>
                          scope.func$("path", (scope) =>
                            scope.if$(scope.apply$(scope.hasPrefix, "/", () =>
                              scope.path)).then$(() =>
                                scope.path
                              ).elseIf$(() =>
                                scope.apply$(scope.hasPrefix, "/", () =>
                                  scope.base)
                              ).then$(() =>
                                scope.str$(() => [scope.base, "/", scope.path])
                              ).else$(() =>
                                scope.str$(
                                  () => ["/", scope.base, "/", scope.path]
                                )
                              )),
                      ),
                  }).in$((scope) =>
                    scope.if$(
                      scope.apply$(scope.pathIsRegularFile, () => scope.path),
                    ).then$(() =>
                      scope.let$({
                        m: (scope) =>
                          scope.apply$(
                            scope.match,
                            "^gitdir: (.*)$",
                            () =>
                              scope.apply$(
                                scope.lib["fileContents"],
                                () => scope.path,
                              ),
                          ),
                      }).in$((scope) =>
                        scope.if$(scope.operators$.equal(scope.m, null)).then$(
                          () =>
                            scope.attrSet$({
                              error: () =>
                                scope.operators$.add(
                                  "File contains no gitdir reference: ",
                                  scope.path,
                                ),
                            })
                        ).else$(() =>
                          scope.let$({
                            gitDir: (scope) =>
                              scope.apply$(scope.absolutePath, () =>
                                scope.apply$(scope.dirOf, () =>
                                  scope.path), () =>
                                scope.apply$(scope.head, () => scope.m)),
                            "commonDir''": (scope) =>
                              scope.if$(
                                scope.apply$(scope.pathIsRegularFile, () =>
                                  scope.str$(
                                    () => [scope.gitDir, "/commondir"]
                                  )),
                              ).then$(() =>
                                scope.apply$(scope.fileContents, () =>
                                  scope.str$(
                                    () => [scope.gitDir, "/commondir"]
                                  ))
                              ).else$(() =>
                                scope.gitDir
                              ),
                            "commonDir'": (scope) =>
                              scope.apply$(scope.removeSlashSuffix, () =>
                                scope["commonDir''"]),
                            commonDir: (scope) =>
                              scope.apply$(scope.absolutePath, () =>
                                scope.gitDir, () =>
                                scope["commonDir'"]),
                            refFile: (scope) =>
                              scope.apply$(scope.removePrefix, () =>
                                scope.str$(() => [scope.commonDir, "/"]), () =>
                                scope.str$(
                                  () => [scope.gitDir, "/", scope.file]
                                )),
                          }).in$((scope) =>
                            scope.apply$(scope.readCommitFromFile, () =>
                              scope.refFile, () =>
                              scope.commonDir)
                          )
                        )
                      )
                    ).elseIf$(() =>
                      scope.apply$(scope.pathIsRegularFile, () =>
                        scope.fileName)
                    ).then$(() =>
                      scope.let$({
                        fileContent: (scope) =>
                          scope.apply$(scope.fileContents, () =>
                            scope.fileName),
                        matchRef: (scope) =>
                          scope.apply$(scope.match, "^ref: (.*)$", () =>
                            scope.fileContent),
                      }).in$((scope) =>
                        scope.if$(scope.operators$.equal(scope.matchRef, null))
                          .then$(() =>
                            scope.attrSet$({
                              value: () =>
                                scope.fileContent,
                            })
                          ).else$(() =>
                            scope.apply$(scope.readCommitFromFile, () =>
                              scope.apply$(scope.head, () =>
                                scope.matchRef), () =>
                              scope.path)
                          )
                      )
                    ).elseIf$(() =>
                      scope.apply$(scope.pathIsRegularFile, () =>
                        scope.packedRefsName)
                    ).then$(() =>
                      scope.let$({
                        fileContent: (scope) =>
                          scope.apply$(scope.readFile, () =>
                            scope.packedRefsName),
                        matchRef: (scope) =>
                          scope.apply$(scope.match, () =>
                            scope.str$(() => ["([a-z0-9]+) ", scope.file])),
                        isRef: (scope) =>
                          scope.func$(
                            "s",
                            (
                              scope,
                            ) => ((scope.apply$(
                              scope.isString,
                              () => scope.s,
                            )) &&
                              (scope.operators$.notEqual(
                                scope.apply$(scope.matchRef, () => scope.s),
                                null,
                              ))),
                          ),
                        refs: (scope) =>
                          scope.apply$(scope.filter, () =>
                            scope.isRef, () =>
                            scope.apply$(scope.split, "\n", () =>
                              scope.fileContent)),
                      }).in$((scope) =>
                        scope.if$(scope.operators$.equal(scope.refs, [])).then$(
                          () =>
                            scope.attrSet$({
                              error: () =>
                                scope.operators$.add(
                                  scope.operators$.add(
                                    scope.operators$.add(
                                      "Could not find ",
                                      scope.file,
                                    ),
                                    " in ",
                                  ),
                                  scope.packedRefsName,
                                ),
                            })
                        ).else$(() =>
                          scope.attrSet$({
                            value: () =>
                              scope.apply$(scope.head, () =>
                                scope.apply$(scope.matchRef, () =>
                                  scope.apply$(scope.head, () =>
                                    scope.refs))),
                          })
                        )
                      )
                    ).else$(() =>
                      scope.attrSet$({
                        error: () =>
                          scope.operators$.add(
                            "Not a .git directory: ",
                            scope.apply$(scope.toString, () => scope.path),
                          ),
                      })
                    )
                  ))),
          }).in$((scope) => scope.apply$(scope.readCommitFromFile, "HEAD")),
        pathHasContext: (scope) =>
          scope.operators$.selectOrDefault(
            scope.builtins,
            ["hasContext"],
            () => scope.apply$(scope.hasPrefix, () => scope.storeDir),
          ),
        canCleanSource: (scope) =>
          scope.func$(
            "src",
            (
              scope,
            ) => ((scope.operators$.hasAttr(
              scope.src,
              "_isLibCleanSourceWith",
            )) ||
              (scope.operators$.negate(scope.apply$(scope.pathHasContext, () =>
                scope.apply$(scope.toString, () => scope.src))))),
          ),
        toSourceAttributes: (scope) =>
          scope.func$("src", (scope) =>
            scope.let$({
              isFiltered: (scope) =>
                scope.operators$.hasAttr(scope.src, "_isLibCleanSourceWith"),
            }).in$((scope) =>
              scope.attrSet$({
                origSrc: () =>
                  scope.if$(scope.isFiltered).then$(() => scope.src["origSrc"])
                    .else$(() => scope.src),
                filter: () =>
                  scope.if$(scope.isFiltered).then$(() => scope.src["filter"])
                    .else$(null),
                name: () =>
                  scope.if$(scope.isFiltered).then$(() => scope.src["name"])
                    .else$("source"),
              })
            )),
        fromSourceAttributes: (scope) =>
          scope.let$({
            path: (scope) => scope.builtins["path"],
          }).in$((scope) =>
            scope.func$({
              origSrc: scope.nixArg$.NoDefault,
              filter: scope.nixArg$.NoDefault,
              name: scope.nixArg$.NoDefault,
            }, (scope) =>
              scope.attrSet$({
                _isLibCleanSourceWith: true,
                origSrc: () => scope.origSrc,
                name: () => scope.name,
                filter: () =>
                  scope.if$(scope.operators$.equal(scope.filter, null)).then$(
                    () =>
                      scope.func$("_", (scope) =>
                        scope.func$("_", (scope) => true))
                  ).else$(() =>
                    scope.filter
                  ),
                outPath: () =>
                  scope.apply$(scope.path, () =>
                    scope.attrSet$({
                      name: () => scope.name,
                      ...scope.deepSet$([
                        scope.if$(scope.operators$.notEqual(scope.filter, null))
                          .then$("filter").else$(null),
                      ], () => scope.filter),
                      path: () => scope.origSrc,
                    })),
              }))
          ),
        urlToName: (scope) =>
          scope.func$("url", (scope) =>
            scope.let$({
              base: (scope) =>
                scope.apply$(scope.baseNameOf, () =>
                  scope.apply$(scope.removeSlashSuffix, () =>
                    scope.apply$(scope.last, () =>
                      scope.apply$(scope.splitString, ":", () =>
                        scope.apply$(scope.toString, () =>
                          scope.url))))),
              removeExt: (scope) =>
                scope.func$("name", (scope) =>
                  scope.let$({
                    matchExt: (scope) =>
                      scope.apply$(
                        scope.match,
                        "(.*)\\.(git|tar|zip|gz|tgz|bz|tbz|bz2|tbz2|lzma|txz|xz|zstd)$",
                        () => scope.name,
                      ),
                  }).in$((scope) =>
                    scope.if$(scope.operators$.notEqual(scope.matchExt, null))
                      .then$(() =>
                        scope.apply$(scope.head, () =>
                          scope.matchExt)
                      ).else$(() =>
                        scope.name
                      )
                  )),
              shrink: (scope) =>
                scope.func$("f", (scope) =>
                  scope.func$("x", (scope) =>
                    scope.let$({
                      v: (scope) => scope.apply$(scope.f, () => scope.x),
                    }).in$((scope) =>
                      scope.if$(
                        scope.operators$.lessThan(
                          scope.apply$(scope.stringLength, () => scope.v),
                          scope.apply$(scope.stringLength, () => scope.x),
                        ),
                      ).then$(() =>
                        scope.apply$(scope.shrink, () => scope.f, () =>
                          scope.v)
                      ).else$(() =>
                        scope.x
                      )
                    ))),
            }).in$((scope) =>
              scope.apply$(
                scope.shrink,
                () => scope.removeExt,
                () => scope.base,
              )
            )),
        shortRev: (scope) =>
          scope.func$("rev", (scope) =>
            scope.let$({
              baseRev: (scope) =>
                scope.apply$(
                  scope.baseNameOf,
                  () => scope.apply$(scope.toString, () => scope.rev),
                ),
              matchHash: (scope) =>
                scope.apply$(scope.match, "[a-f0-9]+", () => scope.baseRev),
              matchVer: (scope) =>
                scope.apply$(
                  scope.match,
                  "([A-Za-z]+[-_. ]?)*(v)?([0-9.]+.*)",
                  () => scope.baseRev,
                ),
            }).in$((scope) =>
              scope.if$(scope.operators$.notEqual(scope.matchHash, null)).then$(
                () => scope.apply$(scope.substring, 0n, 7n, () => scope.baseRev)
              ).elseIf$(() => scope.operators$.notEqual(scope.matchVer, null))
                .then$(() => scope.apply$(scope.last, () => scope.matchVer))
                .else$(() => scope.baseRev)
            )),
        revOrTag: (scope) =>
          scope.func$("rev", (scope) =>
            scope.func$("tag", (scope) =>
              scope.if$(scope.operators$.notEqual(scope.tag, null)).then$(() =>
                scope.tag
              ).elseIf$(() =>
                scope.operators$.notEqual(scope.rev, null)
              ).then$(() => scope.rev).else$("HEAD"))),
        repoRevToNameFull: (scope) =>
          scope.func$("repo_", (scope) =>
            scope.func$("rev_", (scope) =>
              scope.func$("suffix_", (scope) =>
                scope.let$({
                  repo: (scope) =>
                    scope.apply$(scope.urlToName, () =>
                      scope.repo_),
                  rev: (scope) =>
                    scope.if$(scope.operators$.notEqual(scope.rev_, null))
                      .then$(() =>
                        scope.str$(
                          () => [
                            "-",
                            scope.apply$(scope.shortRev, () => scope.rev_),
                          ]
                        )
                      ).else$(""),
                  suffix: (scope) =>
                    scope.if$(scope.operators$.notEqual(scope.suffix_, null))
                      .then$(() =>
                        scope.str$(() => ["-", scope.suffix_])
                      ).else$(""),
                }).in$((scope) =>
                  scope.str$(
                    () => [scope.repo, scope.rev, scope.suffix, "-source"]
                  )
                )))),
        repoRevToName: (scope) =>
          scope.func$("kind", (scope) =>
            scope.if$(scope.operators$.equal(scope.kind, "source")).then$(() =>
              scope.func$("repo", (scope) =>
                scope.func$("rev", (scope) =>
                  scope.func$("suffix", (scope) =>
                    "source")))
            ).elseIf$(() =>
              scope.operators$.equal(scope.kind, "versioned")
            ).then$(() =>
              scope.func$("repo", (scope) =>
                scope.func$("rev", (scope) =>
                  scope.func$("suffix", (scope) =>
                    scope.apply$(scope.repoRevToNameFull, () =>
                      scope.repo, () =>
                      scope.rev, null))))
            ).elseIf$(() =>
              scope.operators$.equal(scope.kind, "full")
            ).then$(() =>
              scope.repoRevToNameFull
            ).else$(() =>
              scope.apply$(scope.throw, "repoRevToName: invalid kind")
            )),
        sourceByGlobs: (scope) =>
          scope.let$({
            splitPath: (scope) =>
              scope.func$("path", (scope) =>
                scope.apply$(scope.filter, () =>
                  scope.isString, () =>
                  scope.apply$(scope.split, "/", () =>
                    scope.path))),
            mkRe: (scope) =>
              scope.func$("s", (scope) =>
                scope.if$(scope.operators$.equal(scope.s, "**")).then$(".*")
                  .else$(() =>
                    scope.apply$(scope.concatStrings, () =>
                      scope.apply$(scope.map, () =>
                        scope.func$("tok", (scope) =>
                          scope.if$(scope.apply$(scope.isList, () =>
                            scope.tok)).then$("[^/]*").else$(() =>
                              scope.apply$(scope.escapeRegex, () =>
                                scope.tok)
                            )), () =>
                        scope.apply$(scope.split, "\\*+", () =>
                          scope.s)))
                  )),
            mkMatcher: (scope) =>
              scope.func$("pat", (scope) =>
                scope.let$({
                  globs: (scope) =>
                    scope.apply$(scope.map, () =>
                      scope.mkRe, () =>
                      scope.apply$(scope.splitPath, () =>
                        scope.pat)),
                  glen: (scope) =>
                    scope.apply$(scope.length, () =>
                      scope.globs),
                }).in$((scope) =>
                  scope.func$("path", (scope) =>
                    scope.func$("type", (scope) =>
                      scope.let$({
                        "path'": (scope) =>
                          scope.apply$(scope.splitPath, () =>
                            scope.path),
                        plen: (scope) =>
                          scope.apply$(scope.length, () =>
                            scope["path'"]),
                        recurse: (scope) =>
                          scope.func$("gi", (scope) =>
                            scope.func$("pi", (scope) =>
                              scope.let$({
                                g: (scope) =>
                                  scope.apply$(scope.elemAt, () =>
                                    scope.globs, () =>
                                    scope.gi),
                                p: (scope) =>
                                  scope.apply$(scope.elemAt, () =>
                                    scope["path'"], () =>
                                    scope.pi),
                                m: (scope) =>
                                  scope.operators$.notEqual(
                                    scope.apply$(scope.match, () =>
                                      scope.g, () =>
                                      scope.p),
                                    null,
                                  ),
                              }).in$((scope) =>
                                scope.if$(
                                  scope.operators$.greaterThanOrEqual(
                                    scope.pi,
                                    scope.plen,
                                  ),
                                ).then$(
                                  () => ((scope.operators$.greaterThanOrEqual(
                                    scope.gi,
                                    scope.glen,
                                  )) ||
                                    ((scope.operators$.equal(
                                      scope.type,
                                      "directory",
                                    )) ||
                                      (scope.operators$.equal(
                                        scope.type,
                                        "symlink",
                                      ))))
                                ).elseIf$(() =>
                                  scope.operators$.greaterThanOrEqual(
                                    scope.gi,
                                    scope.glen,
                                  )
                                ).then$(false).elseIf$(() =>
                                  scope.operators$.equal(scope.g, ".*")
                                ).then$(() =>
                                  scope.if$(
                                    scope.operators$.equal(
                                      scope.operators$.add(scope.gi, 1n),
                                      scope.glen,
                                    ),
                                  ).then$(true).elseIf$(
                                    () => (scope.operators$.notEqual(
                                      scope.apply$(scope.match, () =>
                                        scope.apply$(
                                          scope.elemAt,
                                          () => scope.globs,
                                          () => (scope.operators$.add(
                                            scope.gi,
                                            1n,
                                          )),
                                        ), () =>
                                        scope.p),
                                      null,
                                    ))
                                  ).then$(() =>
                                    scope.apply$(
                                      scope.recurse,
                                      () => (scope.operators$.add(
                                        scope.gi,
                                        1n,
                                      )),
                                      () => scope.pi,
                                    )
                                  ).elseIf$(() =>
                                    scope.m
                                  ).then$(() =>
                                    scope.apply$(
                                      scope.recurse,
                                      () => scope.gi,
                                      () => (scope.operators$.add(
                                        scope.pi,
                                        1n,
                                      )),
                                    )
                                  ).else$(false)
                                ).elseIf$(() =>
                                  scope.m
                                ).then$(() =>
                                  scope.apply$(
                                    scope.recurse,
                                    () => (scope.operators$.add(scope.gi, 1n)),
                                    () => (scope.operators$.add(scope.pi, 1n)),
                                  )
                                ).else$(false)
                              ))),
                      }).in$((scope) =>
                        scope.apply$(scope.recurse, 0n, 0n)
                      )))
                )),
            mkSourceFilter: (scope) =>
              scope.func$("root", (scope) =>
                scope.func$("patterns", (scope) =>
                  scope.let$({
                    "root'": (scope) =>
                      scope.str$(() => [
                        scope.apply$(scope.toString, () => scope.root),
                        "/",
                      ]),
                    matchers: (scope) =>
                      scope.apply$(scope.map, () =>
                        scope.mkMatcher, () =>
                        scope.patterns),
                  }).in$((scope) =>
                    scope.func$("name", (scope) =>
                      scope.func$("type", (scope) =>
                        scope.let$({
                          "name'": (scope) =>
                            scope.apply$(scope.removePrefix, () =>
                              scope["root'"], () =>
                              scope.name),
                        }).in$((scope) =>
                          scope.apply$(scope.any, () =>
                            scope.func$("m", (scope) =>
                              scope.apply$(scope.m, () =>
                                scope["name'"], () =>
                                scope.type)), () =>
                            scope.matchers)
                        )))
                  ))),
          }).in$((scope) =>
            scope.func$("src", (scope) =>
              scope.func$("patterns", (scope) =>
                scope.apply$(scope.cleanSourceWith, () =>
                  scope.attrSet$({
                    filter: () =>
                      scope.apply$(scope.mkSourceFilter, () =>
                        scope.src, () =>
                        scope.patterns),
                    src: () =>
                      scope.src,
                  }))))
          ),
      }).in$((scope) =>
        scope.attrSet$({
          pathIsGitRepo: () => scope.pathIsGitRepo,
          commitIdFromGitRepo: () => scope.commitIdFromGitRepo,
          cleanSource: () => scope.cleanSource,
          cleanSourceWith: () => scope.cleanSourceWith,
          cleanSourceFilter: () => scope.cleanSourceFilter,
          pathHasContext: () => scope.pathHasContext,
          canCleanSource: () => scope.canCleanSource,
          urlToName: () => scope.urlToName,
          shortRev: () => scope.shortRev,
          revOrTag: () => scope.revOrTag,
          repoRevToName: () => scope.repoRevToName,
          sourceByRegex: () => scope.sourceByRegex,
          sourceFilesBySuffices: () => scope.sourceFilesBySuffices,
          sourceByGlobs: () => scope.sourceByGlobs,
          trace: () => scope.trace,
          filterSource: () => scope.builtins.filterSource,
        })
      ))
  ),
);
