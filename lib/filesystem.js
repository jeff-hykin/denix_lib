import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./filesystem.nix", import.meta.url).pathname,
  ({ scope }) => (
    /**
  Functions for querying information about the filesystem
  without copying any files to the Nix store.
    */ scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        pathExists: (scope) => scope.builtins["pathExists"],
        toString: (scope) => scope.builtins["toString"],
        pathIsDirectory: (scope) => scope.lib["filesystem"]["pathIsDirectory"],
        pathType: (scope) => scope.lib["filesystem"]["pathType"],
        packagesFromDirectoryRecursive: (scope) =>
          scope.lib["filesystem"]["packagesFromDirectoryRecursive"],
        hasSuffix: (scope) => scope.lib["strings"]["hasSuffix"],
      }).in$((scope) =>
        scope.attrSet$({
          baseNameOf: () => scope.builtins.baseNameOf,
          dirOf: () => scope.builtins.dirOf,
          isPath: () => scope.builtins.isPath,
          readDir: () => scope.builtins.readDir,
          readFileType: () => scope.builtins.readFileType,
          hashFile: () => scope.builtins.hashFile,
          pathType: () => scope.builtins["readFileType"],
          pathIsDirectory: () =>
            scope.func$(
              "path",
              (
                scope,
              ) => ((scope.apply$(scope.pathExists, () => scope.path)) &&
                (scope.operators$.equal(
                  scope.apply$(scope.pathType, () => scope.path),
                  "directory",
                ))),
            ),
          pathIsRegularFile: () =>
            scope.func$(
              "path",
              (scope) => ((scope.apply$(scope.pathExists, () =>
                scope.path)) &&
                (scope.operators$.equal(
                  scope.apply$(scope.pathType, () => scope.path),
                  "regular",
                ))),
            ),
          haskellPathsInDir: () =>
            scope.func$("root", (scope) =>
              scope.let$({
                "root-files": (scope) =>
                  scope.apply$(scope.builtins["attrNames"], () =>
                    scope.apply$(scope.builtins["readDir"], () => scope.root)),
                "root-files-with-paths": (scope) =>
                  scope.apply$(scope.map, () =>
                    scope.func$("file", (scope) =>
                      scope.attrSet$({
                        name: () =>
                          scope.file,
                        value: () =>
                          scope.operators$.add(
                            scope.root,
                            scope.str$(() => ["/", scope.file]),
                          ),
                      })), () => scope["root-files"]),
                "cabal-subdirs": (scope) =>
                  scope.apply$(scope.builtins["filter"], () =>
                    scope.func$(
                      {
                        name: scope.nixArg$.NoDefault,
                        value: scope.nixArg$.NoDefault,
                      },
                      (scope) =>
                        scope.apply$(
                          scope.builtins["pathExists"],
                          () => (scope.operators$.add(
                            scope.value,
                            scope.str$(() => ["/", scope.name, ".cabal"]),
                          )),
                        ),
                    ), () => scope["root-files-with-paths"]),
              }).in$((scope) =>
                scope.apply$(
                  scope.builtins["listToAttrs"],
                  () => scope["cabal-subdirs"],
                )
              )),
          locateDominatingFile: () =>
            scope.func$("pattern", (scope) =>
              scope.func$("file", (scope) =>
                scope.let$({
                  go: (scope) =>
                    scope.func$("path", (scope) =>
                      scope.let$({
                        files: (scope) =>
                          scope.apply$(
                            scope.builtins["attrNames"],
                            () =>
                              scope.apply$(scope.builtins["readDir"], () =>
                                scope.path),
                          ),
                        matches: (scope) =>
                          scope.apply$(
                            scope.builtins["filter"],
                            () =>
                              scope.func$("match", (scope) =>
                                scope.operators$.notEqual(scope.match, null)),
                            () =>
                              scope.apply$(scope.map, () =>
                                scope.apply$(scope.builtins["match"], () =>
                                  scope.pattern), () =>
                                scope.files),
                          ),
                      }).in$((scope) =>
                        scope.if$(
                          scope.operators$.notEqual(
                            scope.apply$(scope.builtins["length"], () =>
                              scope.matches),
                            0n,
                          ),
                        ).then$(() =>
                          scope.attrSet$({
                            path: () => scope.path,
                            matches: () => scope.matches,
                          })
                        ).elseIf$(() =>
                          scope.operators$.equal(
                            scope.apply$(scope.toString, () => scope.path),
                            "/",
                          )
                        ).then$(null).else$(() =>
                          scope.apply$(
                            scope.go,
                            () => scope.apply$(scope.dirOf, () => scope.path),
                          )
                        )
                      )),
                  parent: (scope) =>
                    scope.apply$(scope.dirOf, () => scope.file),
                  isDir: (scope) =>
                    scope.let$({
                      base: (scope) =>
                        scope.apply$(scope.baseNameOf, () => scope.file),
                      type: (scope) =>
                        scope.operators$.selectOrDefault(
                          scope.apply$(scope.builtins["readDir"], () =>
                            scope.parent),
                          [scope.base],
                          null,
                        ),
                    }).in$((
                      scope,
                    ) => ((scope.operators$.equal(
                      scope.apply$(scope.toString, () => scope.file),
                      "/",
                    )) || (scope.operators$.equal(scope.type, "directory")))),
                }).in$((scope) =>
                  scope.apply$(
                    scope.go,
                    () =>
                      scope.if$(scope.isDir).then$(() => scope.file).else$(() =>
                        scope.parent
                      ),
                  )
                ))),
          listFilesRecursive: () =>
            scope.let$({
              internalFunc: (scope) =>
                scope.func$("dir", (scope) =>
                  scope.apply$(
                    scope.lib["mapAttrsToList"],
                    () =>
                      scope.func$("name", (scope) =>
                        scope.func$("type", (scope) =>
                          scope.if$(
                            scope.operators$.equal(scope.type, "directory"),
                          ).then$(() =>
                            scope.apply$(
                              scope.internalFunc,
                              () => (scope.operators$.add(
                                scope.dir,
                                scope.str$(() => ["/", scope.name]),
                              )),
                            )
                          ).else$(() =>
                            scope.operators$.add(
                              scope.dir,
                              scope.str$(() => ["/", scope.name]),
                            )
                          ))),
                    () =>
                      scope.apply$(scope.builtins["readDir"], () => scope.dir),
                  )),
            }).in$((scope) =>
              scope.func$(
                "dir",
                (scope) =>
                  scope.apply$(scope.lib["flatten"], () =>
                    scope.apply$(scope.internalFunc, () => scope.dir)),
              )
            ),
          packagesFromDirectoryRecursive: () =>
            scope.let$({
              concatMapAttrs: (scope) => scope.lib["concatMapAttrs"],
              makeScope: (scope) => scope.lib["makeScope"],
              recurseIntoAttrs: (scope) => scope.lib["recurseIntoAttrs"],
              removeSuffix: (scope) => scope.lib["removeSuffix"],
              isNixFile: (scope) => scope.apply$(scope.hasSuffix, ".nix"),
              removeNixSuffix: (scope) =>
                scope.apply$(scope.removeSuffix, ".nix"),
              processDir: (scope) =>
                scope.func$({
                  callPackage: scope.nixArg$.NoDefault,
                  directory: scope.nixArg$.NoDefault,
                  "...": scope.nixArg$.Ellipsis,
                  args: scope.nixArg$.AllArgs,
                }, (scope) =>
                  scope.apply$(
                    scope.concatMapAttrs,
                    () =>
                      scope.func$("name", (scope) =>
                        scope.func$("type", (scope) =>
                          scope.let$({
                            path: (scope) =>
                              scope.operators$.add(
                                scope.directory,
                                scope.str$(() => ["/", scope.name]),
                              ),
                          }).in$((scope) =>
                            scope.if$(
                              scope.operators$.equal(scope.type, "directory"),
                            ).then$(() =>
                              scope.attrSet$({
                                ...scope.deepSet$([
                                  scope.str$(() => [scope.name]),
                                ], () =>
                                  scope.apply$(
                                    scope.packagesFromDirectoryRecursive,
                                    () => (scope.operators$.merge(
                                      scope.args,
                                      scope.attrSet$({
                                        directory: () => scope.path,
                                      }),
                                    )),
                                  )),
                              })
                            ).elseIf$(
                              () => ((scope.operators$.equal(
                                scope.type,
                                "regular",
                              )) && (scope.apply$(scope.isNixFile, () =>
                                scope.name)))
                            ).then$(() =>
                              scope.attrSet$({
                                ...scope.deepSet$(
                                  [scope.str$(
                                    () => [
                                      scope.apply$(scope.removeNixSuffix, () =>
                                        scope.name),
                                    ]
                                  )],
                                  () =>
                                    scope.apply$(scope.callPackage, () =>
                                      scope.path, {}),
                                ),
                              })
                            ).elseIf$(() =>
                              scope.operators$.equal(scope.type, "regular")
                            ).then$({}).else$(() =>
                              scope.apply$(scope.throw, () =>
                                scope.str$(
                                  () => [
                                    "lib.filesystem.packagesFromDirectoryRecursive: Unsupported file type ",
                                    scope.type,
                                    " at path ",
                                    scope.apply$(
                                      scope.toString,
                                      () => scope.path,
                                    ),
                                    "\n",
                                  ]
                                ))
                            )
                          ))),
                    () =>
                      scope.apply$(
                        scope.builtins["readDir"],
                        () => scope.directory,
                      ),
                  )),
            }).in$((scope) =>
              scope.func$({
                callPackage: scope.nixArg$.NoDefault,
                newScope: (scope) =>
                  scope.apply$(
                    scope.throw,
                    "lib.packagesFromDirectoryRecursive: newScope wasn't passed in args",
                  ),
                directory: scope.nixArg$.NoDefault,
                args: scope.nixArg$.AllArgs,
              }, (scope) =>
                scope.let$({
                  defaultPath: (scope) =>
                    scope.operators$.add(scope.directory, "/package.nix"),
                }).in$((scope) =>
                  scope.if$(
                    scope.apply$(scope.pathExists, () => scope.defaultPath),
                  ).then$(() =>
                    scope.apply$(scope.callPackage, () => scope.defaultPath, {})
                  ).elseIf$(() =>
                    scope.operators$.hasAttr(scope.args, "newScope")
                  ).then$(() =>
                    scope.apply$(
                      scope.recurseIntoAttrs,
                      () =>
                        scope.apply$(scope.makeScope, () =>
                          scope.newScope, () =>
                          scope.func$("self", (scope) =>
                            scope.apply$(
                              scope.processDir,
                              () => (scope.operators$.merge(
                                scope.args,
                                scope.attrSet$({
                                  callPackage: () => scope.self.callPackage,
                                  newScope: () => scope.self.newScope,
                                }),
                              )),
                            ))),
                    )
                  ).else$(() =>
                    scope.apply$(scope.processDir, () => scope.args)
                  )
                ))
            ),
          resolveDefaultNix: () =>
            scope.func$(
              "v",
              (scope) =>
                scope.if$(scope.apply$(scope.pathIsDirectory, () => scope.v))
                  .then$(() => scope.operators$.add(scope.v, "/default.nix"))
                  .elseIf$(() => ((scope.apply$(scope.lib["isString"], () =>
                    scope.v)) && (scope.apply$(scope.hasSuffix, "/", () =>
                      scope.v)))
                  ).then$(() =>
                    scope.operators$.add(scope.v, "default.nix")
                  ).else$(() => scope.v),
            ),
        })
      ))
  ),
);
