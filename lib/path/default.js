import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./default.nix", import.meta.url).pathname,
  ({ scope }) => (
    //
    //
    scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        isString: (scope) => scope.builtins["isString"],
        isPath: (scope) => scope.builtins["isPath"],
        split: (scope) => scope.builtins["split"],
        match: (scope) => scope.builtins["match"],
        typeOf: (scope) => scope.builtins["typeOf"],
        storeDir: (scope) => scope.builtins["storeDir"],
        length: (scope) => scope.lib["lists"]["length"],
        head: (scope) => scope.lib["lists"]["head"],
        last: (scope) => scope.lib["lists"]["last"],
        genList: (scope) => scope.lib["lists"]["genList"],
        elemAt: (scope) => scope.lib["lists"]["elemAt"],
        all: (scope) => scope.lib["lists"]["all"],
        concatMap: (scope) => scope.lib["lists"]["concatMap"],
        "foldl'": (scope) => scope.lib["lists"]["foldl'"],
        take: (scope) => scope.lib["lists"]["take"],
        drop: (scope) => scope.lib["lists"]["drop"],
        listHasPrefix: (scope) => scope.lib["lists"]["hasPrefix"],
        concatStringsSep: (scope) => scope.lib["strings"]["concatStringsSep"],
        substring: (scope) => scope.lib["strings"]["substring"],
        isValid: (scope) => scope.lib["path"]["subpath"]["isValid"],
        subpathInvalidReason: (scope) =>
          scope.func$("value", (scope) =>
            scope.if$(
              scope.operators$.negate(scope.apply$(scope.isString, () =>
                scope.value)),
            ).then$(() =>
              scope.str$(
                () => [
                  "The given value is of type ",
                  scope.apply$(scope.builtins["typeOf"], () => scope.value),
                  ", but a string was expected",
                ]
              )
            ).elseIf$(() => scope.operators$.equal(scope.value, "")).then$(
              "The given string is empty",
            ).elseIf$(() =>
              scope.operators$.equal(
                scope.apply$(scope.substring, 0n, 1n, () => scope.value),
                "/",
              )
            ).then$(() =>
              scope.str$(
                () => [
                  'The given string "',
                  scope.value,
                  '" starts with a `/`, representing an absolute path',
                ]
              )
            ).elseIf$(() =>
              scope.operators$.notEqual(
                scope.apply$(scope.match, "(.*/)?\\.\\.(/.*)?", () =>
                  scope.value),
                null,
              )
            ).then$(() =>
              scope.str$(
                () => [
                  'The given string "',
                  scope.value,
                  '" contains a `..` component, which is not allowed in subpaths',
                ]
              )
            ).else$(null)),
        splitRelPath: (scope) =>
          scope.func$("path", (scope) =>
            scope.let$({
              parts: (scope) =>
                scope.apply$(scope.split, "/+(\\./+)*", () => scope.path),
              partCount: (scope) =>
                scope.operators$.add(
                  scope.operators$.divide(
                    scope.apply$(scope.length, () => scope.parts),
                    2n,
                  ),
                  1n,
                ),
              skipStart: (scope) =>
                scope.if$(
                  scope.operators$.equal(
                    scope.apply$(scope.head, () => scope.parts),
                    ".",
                  ),
                ).then$(1n).else$(0n),
              skipEnd: (scope) =>
                scope.if$(
                  (scope.operators$.equal(
                    scope.apply$(scope.last, () => scope.parts),
                    ".",
                  )) || (scope.operators$.equal(
                    scope.apply$(scope.last, () => scope.parts),
                    "",
                  )),
                ).then$(1n).else$(0n),
              componentCount: (scope) =>
                scope.operators$.subtract(
                  scope.operators$.subtract(scope.partCount, scope.skipEnd),
                  scope.skipStart,
                ),
            }).in$((scope) =>
              scope.if$(scope.operators$.equal(scope.path, ".")).then$([])
                .else$(() =>
                  scope.apply$(scope.genList, () =>
                    scope.func$("index", (scope) =>
                      scope.apply$(
                        scope.elemAt,
                        () => scope.parts,
                        () => (scope.operators$.multiply(
                          scope.operators$.add(scope.skipStart, scope.index),
                          2n,
                        )),
                      )), () => scope.componentCount)
                )
            )),
        joinRelPath: (scope) =>
          scope.func$("components", (scope) =>
            scope.operators$.add(
              "./",
              scope.if$(scope.operators$.equal(scope.components, [])).then$(".")
                .else$(() =>
                  scope.apply$(
                    scope.concatStringsSep,
                    "/",
                    () => scope.components,
                  )
                ),
            )),
        deconstructPath: (scope) =>
          scope.let$({
            recurse: (scope) =>
              scope.func$("components", (scope) =>
                scope.func$("base", (scope) =>
                  scope.if$(
                    scope.operators$.equal(
                      scope.base,
                      scope.apply$(scope.dirOf, () => scope.base),
                    ),
                  ).then$(() =>
                    scope.attrSet$({
                      root: () => scope.base,
                      components: () => scope.components,
                    })
                  ).else$(() =>
                    scope.apply$(
                      scope.recurse,
                      () => (scope.operators$.listConcat([
                        scope.apply$(scope.baseNameOf, () => scope.base),
                      ], scope.components)),
                      () =>
                        scope.apply$(scope.dirOf, () => scope.base),
                    )
                  ))),
          }).in$((scope) =>
            scope.apply$(scope.recurse, [])
          ),
        storeDirComponents: (scope) =>
          scope.apply$(
            scope.splitRelPath,
            () => (scope.operators$.add("./", scope.storeDir)),
          ),
        storeDirLength: (scope) =>
          scope.apply$(scope.length, () =>
            scope.storeDirComponents),
        componentsHaveStorePathPrefix: (scope) =>
          scope.func$(
            "components",
            (
              scope,
            ) => ((((scope.apply$(
              scope.listHasPrefix,
              () => scope.storeDirComponents,
              () => scope.components,
            )) &&
              (scope.operators$.notEqual(
                scope.storeDirComponents,
                scope.components,
              ))) &&
              (scope.operators$.notEqual(
                scope.apply$(scope.match, ".{32}-.+", () =>
                  scope.apply$(scope.elemAt, () =>
                    scope.components, () =>
                    scope.storeDirLength)),
                null,
              ))) ||
              ((scope.operators$.notEqual(scope.components, [])) &&
                (scope.operators$.notEqual(
                  scope.apply$(scope.match, "[0-9a-z]{52}", () =>
                    scope.apply$(scope.head, () =>
                      scope.components)),
                  null,
                )))),
          ),
      }).in$((scope) =>
        scope.attrSet$({
          append: () =>
            scope.func$("path", (scope) =>
              scope.func$("subpath", (scope) =>
                ((_cond) => {
                  if (!_cond) {
                    throw new Error(
                      "assertion failed: " +
                        'isPath path\n      || throw "lib.path.append: The first argument is of type ${builtins.typeOf path}, but a path was expected"',
                    );
                  }
                  return ((_cond) => {
                    if (!_cond) {
                      throw new Error(
                        "assertion failed: " +
                          "isValid subpath\n      || throw ''\n        lib.path.append: Second argument is not a valid subpath string:\n            ${subpathInvalidReason subpath}''",
                      );
                    }
                    return scope.operators$.add(
                      scope.path,
                      scope.operators$.add("/", scope.subpath),
                    );
                  })(
                    (scope.apply$(scope.isValid, () => scope.subpath)) ||
                    (scope.apply$(scope.throw, () =>
                      scope.str$(
                        () => [
                          "lib.path.append: Second argument is not a valid subpath string:\n    ",
                          scope.apply$(scope.subpathInvalidReason, () =>
                            scope.subpath),
                        ]
                      ))),
                  );
                })(
                  (scope.apply$(scope.isPath, () => scope.path)) ||
                  (scope.apply$(scope.throw, () =>
                    scope.str$(
                      () => [
                        "lib.path.append: The first argument is of type ",
                        scope.apply$(
                          scope.builtins["typeOf"],
                          () => scope.path,
                        ),
                        ", but a path was expected",
                      ]
                    ))),
                ))),
          hasPrefix: () =>
            scope.func$("path1", (scope) =>
              ((_cond) => {
                if (!_cond) {
                  throw new Error(
                    "assertion failed: " +
                      'isPath path1\n      || throw "lib.path.hasPrefix: First argument is of type ${typeOf path1}, but a path was expected"',
                  );
                }
                return scope.let$({
                  path1Deconstructed: (scope) =>
                    scope.apply$(scope.deconstructPath, () => scope.path1),
                }).in$((scope) =>
                  scope.func$("path2", (scope) =>
                    ((_cond) => {
                      if (!_cond) {
                        throw new Error(
                          "assertion failed: " +
                            'isPath path2\n      || throw "lib.path.hasPrefix: Second argument is of type ${typeOf path2}, but a path was expected"',
                        );
                      }
                      return scope.let$({
                        path2Deconstructed: (scope) =>
                          scope.apply$(
                            scope.deconstructPath,
                            () => scope.path2,
                          ),
                      }).in$((scope) =>
                        ((_cond) => {
                          if (!_cond) {
                            throw new Error(
                              "assertion failed: " +
                                'path1Deconstructed.root == path2Deconstructed.root\n      || throw \'\'\n        lib.path.hasPrefix: Filesystem roots must be the same for both paths, but paths with different roots were given:\n            first argument: "${toString path1}" with root "${toString path1Deconstructed.root}"\n            second argument: "${toString path2}" with root "${toString path2Deconstructed.root}"\'\'',
                            );
                          }
                          return scope.operators$.equal(
                            scope.apply$(scope.take, () =>
                              scope.apply$(scope.length, () =>
                                scope.path1Deconstructed["components"]), () =>
                              scope.path2Deconstructed["components"]),
                            scope.path1Deconstructed["components"],
                          );
                        })(
                          (scope.operators$.equal(
                            scope.path1Deconstructed["root"],
                            scope.path2Deconstructed["root"],
                          )) || (scope.apply$(scope.throw, () =>
                            scope.str$(
                              () => [
                                'lib.path.hasPrefix: Filesystem roots must be the same for both paths, but paths with different roots were given:\n    first argument: "',
                                scope.apply$(scope.toString, () => scope.path1),
                                '" with root "',
                                scope.apply$(scope.toString, () =>
                                  scope.path1Deconstructed["root"]),
                                '"\n    second argument: "',
                                scope.apply$(scope.toString, () =>
                                  scope.path2),
                                '" with root "',
                                scope.apply$(
                                  scope.toString,
                                  () => scope.path2Deconstructed["root"],
                                ),
                                '"',
                              ]
                            ))),
                        )
                      );
                    })(
                      (scope.apply$(scope.isPath, () => scope.path2)) ||
                      (scope.apply$(scope.throw, () =>
                        scope.str$(
                          () => [
                            "lib.path.hasPrefix: Second argument is of type ",
                            scope.apply$(scope.typeOf, () => scope.path2),
                            ", but a path was expected",
                          ]
                        ))),
                    ))
                );
              })(
                (scope.apply$(scope.isPath, () => scope.path1)) ||
                (scope.apply$(scope.throw, () =>
                  scope.str$(
                    () => [
                      "lib.path.hasPrefix: First argument is of type ",
                      scope.apply$(scope.typeOf, () => scope.path1),
                      ", but a path was expected",
                    ]
                  ))),
              )),
          removePrefix: () =>
            scope.func$("path1", (scope) =>
              ((_cond) => {
                if (!_cond) {
                  throw new Error(
                    "assertion failed: " +
                      'isPath path1\n      || throw "lib.path.removePrefix: First argument is of type ${typeOf path1}, but a path was expected."',
                  );
                }
                return scope.let$({
                  path1Deconstructed: (scope) =>
                    scope.apply$(scope.deconstructPath, () => scope.path1),
                  path1Length: (scope) =>
                    scope.apply$(
                      scope.length,
                      () => scope.path1Deconstructed["components"],
                    ),
                }).in$((scope) =>
                  scope.func$("path2", (scope) =>
                    ((_cond) => {
                      if (!_cond) {
                        throw new Error(
                          "assertion failed: " +
                            'isPath path2\n      || throw "lib.path.removePrefix: Second argument is of type ${typeOf path2}, but a path was expected."',
                        );
                      }
                      return scope.let$({
                        path2Deconstructed: (scope) =>
                          scope.apply$(
                            scope.deconstructPath,
                            () => scope.path2,
                          ),
                        success: (scope) =>
                          scope.operators$.equal(
                            scope.apply$(scope.take, () =>
                              scope.path1Length, () =>
                              scope.path2Deconstructed["components"]),
                            scope.path1Deconstructed["components"],
                          ),
                        components: (scope) =>
                          scope.if$(scope.success).then$(() =>
                            scope.apply$(
                              scope.drop,
                              () => scope.path1Length,
                              () => scope.path2Deconstructed["components"],
                            )
                          ).else$(() =>
                            scope.apply$(scope.throw, () =>
                              scope.str$(
                                () => [
                                  'lib.path.removePrefix: The first path argument "',
                                  scope.apply$(
                                    scope.toString,
                                    () => scope.path1,
                                  ),
                                  '" is not a component-wise prefix of the second path argument "',
                                  scope.apply$(
                                    scope.toString,
                                    () => scope.path2,
                                  ),
                                  '".',
                                ]
                              ))
                          ),
                      }).in$((scope) =>
                        ((_cond) => {
                          if (!_cond) {
                            throw new Error(
                              "assertion failed: " +
                                'path1Deconstructed.root == path2Deconstructed.root\n      || throw \'\'\n        lib.path.removePrefix: Filesystem roots must be the same for both paths, but paths with different roots were given:\n            first argument: "${toString path1}" with root "${toString path1Deconstructed.root}"\n            second argument: "${toString path2}" with root "${toString path2Deconstructed.root}"\'\'',
                            );
                          }
                          return scope.apply$(
                            scope.joinRelPath,
                            () => scope.components,
                          );
                        })(
                          (scope.operators$.equal(
                            scope.path1Deconstructed["root"],
                            scope.path2Deconstructed["root"],
                          )) || (scope.apply$(scope.throw, () =>
                            scope.str$(
                              () => [
                                'lib.path.removePrefix: Filesystem roots must be the same for both paths, but paths with different roots were given:\n    first argument: "',
                                scope.apply$(scope.toString, () => scope.path1),
                                '" with root "',
                                scope.apply$(scope.toString, () =>
                                  scope.path1Deconstructed["root"]),
                                '"\n    second argument: "',
                                scope.apply$(scope.toString, () =>
                                  scope.path2),
                                '" with root "',
                                scope.apply$(
                                  scope.toString,
                                  () => scope.path2Deconstructed["root"],
                                ),
                                '"',
                              ]
                            ))),
                        )
                      );
                    })(
                      (scope.apply$(scope.isPath, () => scope.path2)) ||
                      (scope.apply$(scope.throw, () =>
                        scope.str$(
                          () => [
                            "lib.path.removePrefix: Second argument is of type ",
                            scope.apply$(scope.typeOf, () =>
                              scope.path2),
                            ", but a path was expected.",
                          ]
                        ))),
                    ))
                );
              })(
                (scope.apply$(scope.isPath, () => scope.path1)) ||
                (scope.apply$(scope.throw, () =>
                  scope.str$(
                    () => [
                      "lib.path.removePrefix: First argument is of type ",
                      scope.apply$(scope.typeOf, () => scope.path1),
                      ", but a path was expected.",
                    ]
                  ))),
              )),
          splitRoot: () =>
            scope.func$("path", (scope) =>
              ((_cond) => {
                if (!_cond) {
                  throw new Error(
                    "assertion failed: " +
                      'isPath path\n      || throw "lib.path.splitRoot: Argument is of type ${typeOf path}, but a path was expected"',
                  );
                }
                return scope.let$({
                  deconstructed: (scope) =>
                    scope.apply$(scope.deconstructPath, () => scope.path),
                }).in$((scope) =>
                  scope.attrSet$({
                    root: () => scope.deconstructed["root"],
                    subpath: () =>
                      scope.apply$(scope.joinRelPath, () =>
                        scope.deconstructed["components"]),
                  })
                );
              })(
                (scope.apply$(scope.isPath, () => scope.path)) ||
                (scope.apply$(scope.throw, () =>
                  scope.str$(
                    () => [
                      "lib.path.splitRoot: Argument is of type ",
                      scope.apply$(scope.typeOf, () => scope.path),
                      ", but a path was expected",
                    ]
                  ))),
              )),
          hasStorePathPrefix: () =>
            scope.func$("path", (scope) =>
              scope.let$({
                deconstructed: (scope) =>
                  scope.apply$(scope.deconstructPath, () => scope.path),
              }).in$((scope) =>
                ((_cond) => {
                  if (!_cond) {
                    throw new Error(
                      "assertion failed: " +
                        'isPath path\n      || throw "lib.path.hasStorePathPrefix: Argument is of type ${typeOf path}, but a path was expected"',
                    );
                  }
                  return ((_cond) => {
                    if (!_cond) {
                      throw new Error(
                        "assertion failed: " +
                          '# This function likely breaks or needs adjustment if used with other filesystem roots, if they ever get implemented.\n      # Let\'s try to error nicely in such a case, though it\'s unclear how an implementation would work even and whether this could be detected.\n      # See also https://github.com/NixOS/nix/pull/6530#discussion_r1422843117\n      deconstructed.root == /. && toString deconstructed.root == "/"\n      || throw "lib.path.hasStorePathPrefix: Argument has a filesystem root (${toString deconstructed.root}) that\'s not /, which is currently not supported."',
                      );
                    }
                    return scope.apply$(
                      scope.componentsHaveStorePathPrefix,
                      () => scope.deconstructed["components"],
                    );
                  })(
                    ((scope.operators$.equal(
                      scope.deconstructed["root"],
                      new scope.Path$(["/."], []),
                    )) &&
                      (scope.operators$.equal(
                        scope.apply$(
                          scope.toString,
                          () => scope.deconstructed["root"],
                        ),
                        "/",
                      ))) || (scope.apply$(scope.throw, () =>
                        scope.str$(
                          () => [
                            "lib.path.hasStorePathPrefix: Argument has a filesystem root (",
                            scope.apply$(scope.toString, () =>
                              scope.deconstructed["root"]),
                            ") that's not /, which is currently not supported.",
                          ]
                        ))),
                  );
                })(
                  (scope.apply$(scope.isPath, () => scope.path)) ||
                  (scope.apply$(scope.throw, () =>
                    scope.str$(
                      () => [
                        "lib.path.hasStorePathPrefix: Argument is of type ",
                        scope.apply$(scope.typeOf, () => scope.path),
                        ", but a path was expected",
                      ]
                    ))),
                )
              )),
          ...scope.deepSet$(
            ["subpath", "isValid"],
            () =>
              scope.func$("value", (scope) =>
                scope.operators$.equal(
                  scope.apply$(scope.subpathInvalidReason, () =>
                    scope.value),
                  null,
                )),
          ),
          ...scope.deepSet$(["subpath", "join"], () =>
            scope.func$("subpaths", (scope) =>
              scope.if$(
                scope.apply$(
                  scope.all,
                  () => scope.isValid,
                  () => scope.subpaths,
                ),
              ).then$(() =>
                scope.apply$(
                  scope.joinRelPath,
                  () =>
                    scope.apply$(scope.concatMap, () =>
                      scope.splitRelPath, () =>
                      scope.subpaths),
                )
              ).else$(() =>
                scope.apply$(
                  scope["foldl'"],
                  () =>
                    scope.func$("i", (scope) =>
                      scope.func$("path", (scope) =>
                        scope.if$(scope.apply$(scope.isValid, () =>
                          scope.path)).then$(() =>
                            scope.operators$.add(scope.i, 1n)
                          ).else$(() =>
                            scope.apply$(scope.throw, () =>
                              scope.str$(
                                () => [
                                  "lib.path.subpath.join: Element at index ",
                                  scope.apply$(scope.toString, () =>
                                    scope.i),
                                  " is not a valid subpath string:\n    ",
                                  scope.apply$(scope.subpathInvalidReason, () =>
                                    scope.path),
                                ]
                              ))
                          ))),
                  0n,
                  () =>
                    scope.subpaths,
                )
              ))),
          ...scope.deepSet$(
            ["subpath", "components"],
            () =>
              scope.func$("subpath", (scope) =>
                ((_cond) => {
                  if (!_cond) {
                    throw new Error(
                      "assertion failed: " +
                        "isValid subpath\n      || throw ''\n        lib.path.subpath.components: Argument is not a valid subpath string:\n            ${subpathInvalidReason subpath}''",
                    );
                  }
                  return scope.apply$(scope.splitRelPath, () => scope.subpath);
                })(
                  (scope.apply$(scope.isValid, () => scope.subpath)) ||
                  (scope.apply$(scope.throw, () =>
                    scope.str$(
                      () => [
                        "lib.path.subpath.components: Argument is not a valid subpath string:\n    ",
                        scope.apply$(scope.subpathInvalidReason, () =>
                          scope.subpath),
                      ]
                    ))),
                )),
          ),
          ...scope.deepSet$(
            ["subpath", "normalise"],
            () =>
              scope.func$("subpath", (scope) =>
                ((_cond) => {
                  if (!_cond) {
                    throw new Error(
                      "assertion failed: " +
                        "isValid subpath\n      || throw ''\n        lib.path.subpath.normalise: Argument is not a valid subpath string:\n            ${subpathInvalidReason subpath}''",
                    );
                  }
                  return scope.apply$(
                    scope.joinRelPath,
                    () => scope.apply$(scope.splitRelPath, () => scope.subpath),
                  );
                })(
                  (scope.apply$(scope.isValid, () => scope.subpath)) ||
                  (scope.apply$(scope.throw, () =>
                    scope.str$(
                      () => [
                        "lib.path.subpath.normalise: Argument is not a valid subpath string:\n    ",
                        scope.apply$(scope.subpathInvalidReason, () =>
                          scope.subpath),
                      ]
                    ))),
                )),
          ),
        })
      ))
  ),
);
