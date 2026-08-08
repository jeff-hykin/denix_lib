import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./unit.nix", import.meta.url).pathname,
  ({ scope }) => (
    //
    //
    scope.func$({ libpath: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        lib: (scope) => scope.apply$(scope.import, () => scope.libpath),
        hasPrefix: (scope) => scope.lib["path"]["hasPrefix"],
        removePrefix: (scope) => scope.lib["path"]["removePrefix"],
        append: (scope) => scope.lib["path"]["append"],
        splitRoot: (scope) => scope.lib["path"]["splitRoot"],
        hasStorePathPrefix: (scope) => scope.lib["path"]["hasStorePathPrefix"],
        subpath: (scope) => scope.lib["path"]["subpath"],
        storeDirPath: (scope) =>
          scope.operators$.add(
            new scope.Path$(["/."], []),
            scope.builtins["storeDir"],
          ),
        failures: (scope) =>
          scope.apply$(scope.lib["runTests"], () =>
            scope.attrSet$({
              testAppendExample1: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(
                      scope.append,
                      new scope.Path$(["/foo"], []),
                      "bar/baz",
                    ),
                  expected: (new scope.Path$(["/foo/bar/baz"], [])),
                }),
              testAppendExample2: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(
                      scope.append,
                      new scope.Path$(["/foo"], []),
                      "./bar//baz/./",
                    ),
                  expected: (new scope.Path$(["/foo/bar/baz"], [])),
                }),
              testAppendExample3: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(
                      scope.append,
                      new scope.Path$(["/."], []),
                      "foo/bar",
                    ),
                  expected: (new scope.Path$(["/foo/bar"], [])),
                }),
              testAppendExample4: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(
                      scope.builtins["tryEval"],
                      () => scope.apply$(scope.append, "/foo", "bar"),
                    )["success"],
                  expected: false,
                }),
              testAppendExample5: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.builtins["tryEval"], () =>
                      scope.apply$(
                        scope.append,
                        new scope.Path$(["/foo"], []),
                        new scope.Path$(["/bar"], []),
                      ))["success"],
                  expected: false,
                }),
              testAppendExample6: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.builtins["tryEval"], () =>
                      scope.apply$(
                        scope.append,
                        new scope.Path$(["/foo"], []),
                        "",
                      ))["success"],
                  expected: false,
                }),
              testAppendExample7: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.builtins["tryEval"], () =>
                      scope.apply$(
                        scope.append,
                        new scope.Path$(["/foo"], []),
                        "/bar",
                      ))["success"],
                  expected: false,
                }),
              testAppendExample8: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.builtins["tryEval"], () =>
                      scope.apply$(
                        scope.append,
                        new scope.Path$(["/foo"], []),
                        "../bar",
                      ))["success"],
                  expected: false,
                }),
              testHasPrefixExample1: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(
                      scope.hasPrefix,
                      new scope.Path$(["/foo"], []),
                      new scope.Path$(["/foo/bar"], []),
                    ),
                  expected: true,
                }),
              testHasPrefixExample2: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(
                      scope.hasPrefix,
                      new scope.Path$(["/foo"], []),
                      new scope.Path$(["/foo"], []),
                    ),
                  expected: true,
                }),
              testHasPrefixExample3: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(
                      scope.hasPrefix,
                      new scope.Path$(["/foo/bar"], []),
                      new scope.Path$(["/foo"], []),
                    ),
                  expected: false,
                }),
              testHasPrefixExample4: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(
                      scope.hasPrefix,
                      new scope.Path$(["/."], []),
                      new scope.Path$(["/foo"], []),
                    ),
                  expected: true,
                }),
              testRemovePrefixExample1: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(
                      scope.removePrefix,
                      new scope.Path$(["/foo"], []),
                      new scope.Path$(["/foo/bar/baz"], []),
                    ),
                  expected: "./bar/baz",
                }),
              testRemovePrefixExample2: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(
                      scope.removePrefix,
                      new scope.Path$(["/foo"], []),
                      new scope.Path$(["/foo"], []),
                    ),
                  expected: "./.",
                }),
              testRemovePrefixExample3: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.builtins["tryEval"], () =>
                      scope.apply$(
                        scope.removePrefix,
                        new scope.Path$(["/foo/bar"], []),
                        new scope.Path$(["/foo"], []),
                      ))["success"],
                  expected: false,
                }),
              testRemovePrefixExample4: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(
                      scope.removePrefix,
                      new scope.Path$(["/."], []),
                      new scope.Path$(["/foo"], []),
                    ),
                  expected: "./foo",
                }),
              testSplitRootExample1: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(
                      scope.splitRoot,
                      new scope.Path$(["/foo/bar"], []),
                    ),
                  expected: {
                    root: (new scope.Path$(["/."], [])),
                    subpath: "./foo/bar",
                  },
                }),
              testSplitRootExample2: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.splitRoot, new scope.Path$(["/."], [])),
                  expected: {
                    root: (new scope.Path$(["/."], [])),
                    subpath: "./.",
                  },
                }),
              testSplitRootExample3: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(
                      scope.splitRoot,
                      new scope.Path$(["/foo/../bar"], []),
                    ),
                  expected: {
                    root: (new scope.Path$(["/."], [])),
                    subpath: "./bar",
                  },
                }),
              testSplitRootExample4: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(
                      scope.builtins["tryEval"],
                      () => scope.apply$(scope.splitRoot, "/foo/bar"),
                    )["success"],
                  expected: false,
                }),
              testHasStorePathPrefixRoot: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(
                      scope.hasStorePathPrefix,
                      new scope.Path$(["/."], []),
                    ),
                  expected: false,
                }),
              testHasStorePathPrefixExample1: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(
                      scope.hasStorePathPrefix,
                      () => (scope.operators$.add(
                        scope.storeDirPath,
                        "/nvl9ic0pj1fpyln3zaqrf4cclbqdfn1j-foo/bar/baz",
                      )),
                    ),
                  expected: true,
                }),
              testHasStorePathPrefixExample2: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(
                      scope.hasStorePathPrefix,
                      () => scope.storeDirPath,
                    ),
                  expected: false,
                }),
              testHasStorePathPrefixExample3: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(
                      scope.hasStorePathPrefix,
                      () => (scope.operators$.add(
                        scope.storeDirPath,
                        "/nvl9ic0pj1fpyln3zaqrf4cclbqdfn1j-foo",
                      )),
                    ),
                  expected: true,
                }),
              testHasStorePathPrefixExample4: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(
                      scope.hasStorePathPrefix,
                      new scope.Path$(["/home/user"], []),
                    ),
                  expected: false,
                }),
              testHasStorePathPrefixExample5: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(
                      scope.hasStorePathPrefix,
                      () => (scope.operators$.add(
                        scope.storeDirPath,
                        "/.links/10gg8k3rmbw8p7gszarbk7qyd9jwxhcfq9i6s5i0qikx8alkk4hq",
                      )),
                    ),
                  expected: false,
                }),
              testHasStorePathPrefixExample6: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(
                      scope.hasStorePathPrefix,
                      () => (scope.operators$.add(
                        scope.storeDirPath,
                        "/nvl9ic0pj1fpyln3zaqrf4cclbqdfn1j-foo.drv",
                      )),
                    ),
                  expected: true,
                }),
              testHasStorePathPrefixExample7: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(
                      scope.hasStorePathPrefix,
                      () => (scope.operators$.add(
                        new scope.Path$(["/."], []),
                        "/1121rp0gvr1qya7hvy925g5kjwg66acz6sn1ra1hca09f1z5dsab",
                      )),
                    ),
                  expected: true,
                }),
              testHasStorePathPrefixExample8: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(
                      scope.hasStorePathPrefix,
                      () => (scope.operators$.add(
                        new scope.Path$(["/."], []),
                        "/1121rp0gvr1qya7hvy925g5kjwg66acz6sn1ra1hca09f1z5dsab/foo/bar",
                      )),
                    ),
                  expected: true,
                }),
              testSubpathIsValidExample1: () =>
                scope.attrSet$({
                  expr: () => scope.apply$(scope.subpath["isValid"], null),
                  expected: false,
                }),
              testSubpathIsValidExample2: () =>
                scope.attrSet$({
                  expr: () => scope.apply$(scope.subpath["isValid"], ""),
                  expected: false,
                }),
              testSubpathIsValidExample3: () =>
                scope.attrSet$({
                  expr: () => scope.apply$(scope.subpath["isValid"], "/foo"),
                  expected: false,
                }),
              testSubpathIsValidExample4: () =>
                scope.attrSet$({
                  expr: () => scope.apply$(scope.subpath["isValid"], "../foo"),
                  expected: false,
                }),
              testSubpathIsValidExample5: () =>
                scope.attrSet$({
                  expr: () => scope.apply$(scope.subpath["isValid"], "foo/bar"),
                  expected: true,
                }),
              testSubpathIsValidExample6: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.subpath["isValid"], "./foo//bar/"),
                  expected: true,
                }),
              testSubpathIsValidTwoDotsEnd: () =>
                scope.attrSet$({
                  expr: () => scope.apply$(scope.subpath["isValid"], "foo/.."),
                  expected: false,
                }),
              testSubpathIsValidTwoDotsMiddle: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.subpath["isValid"], "foo/../bar"),
                  expected: false,
                }),
              testSubpathIsValidTwoDotsPrefix: () =>
                scope.attrSet$({
                  expr: () => scope.apply$(scope.subpath["isValid"], "..foo"),
                  expected: true,
                }),
              testSubpathIsValidTwoDotsSuffix: () =>
                scope.attrSet$({
                  expr: () => scope.apply$(scope.subpath["isValid"], "foo.."),
                  expected: true,
                }),
              testSubpathIsValidTwoDotsPrefixComponent: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.subpath["isValid"], "foo/..bar/baz"),
                  expected: true,
                }),
              testSubpathIsValidTwoDotsSuffixComponent: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.subpath["isValid"], "foo/bar../baz"),
                  expected: true,
                }),
              testSubpathIsValidThreeDots: () =>
                scope.attrSet$({
                  expr: () => scope.apply$(scope.subpath["isValid"], "..."),
                  expected: true,
                }),
              testSubpathIsValidFourDots: () =>
                scope.attrSet$({
                  expr: () => scope.apply$(scope.subpath["isValid"], "...."),
                  expected: true,
                }),
              testSubpathIsValidThreeDotsComponent: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.subpath["isValid"], "foo/.../bar"),
                  expected: true,
                }),
              testSubpathIsValidFourDotsComponent: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.subpath["isValid"], "foo/..../bar"),
                  expected: true,
                }),
              testSubpathJoinExample1: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.subpath["join"], ["foo", "bar/baz"]),
                  expected: "./foo/bar/baz",
                }),
              testSubpathJoinExample2: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.subpath["join"], [
                      "./foo",
                      ".",
                      "bar//./baz/",
                    ]),
                  expected: "./foo/bar/baz",
                }),
              testSubpathJoinExample3: () =>
                scope.attrSet$({
                  expr: () => scope.apply$(scope.subpath["join"], []),
                  expected: "./.",
                }),
              testSubpathJoinExample4: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.builtins["tryEval"], () =>
                      scope.apply$(scope.subpath["join"], [
                        new scope.Path$(["/foo"], []),
                      ]))["success"],
                  expected: false,
                }),
              testSubpathJoinExample5: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.builtins["tryEval"], () =>
                      scope.apply$(scope.subpath["join"], [""]))["success"],
                  expected: false,
                }),
              testSubpathJoinExample6: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.builtins["tryEval"], () =>
                      scope.apply$(scope.subpath["join"], ["/foo"]))["success"],
                  expected: false,
                }),
              testSubpathJoinExample7: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.builtins["tryEval"], () =>
                      scope.apply$(scope.subpath["join"], ["../foo"]))[
                        "success"
                      ],
                  expected: false,
                }),
              testSubpathNormaliseExample1: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.subpath["normalise"], "foo//bar"),
                  expected: "./foo/bar",
                }),
              testSubpathNormaliseExample2: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.subpath["normalise"], "foo/./bar"),
                  expected: "./foo/bar",
                }),
              testSubpathNormaliseExample3: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.subpath["normalise"], "foo/bar"),
                  expected: "./foo/bar",
                }),
              testSubpathNormaliseExample4: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.subpath["normalise"], "foo/bar/"),
                  expected: "./foo/bar",
                }),
              testSubpathNormaliseExample5: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.subpath["normalise"], "foo/bar/."),
                  expected: "./foo/bar",
                }),
              testSubpathNormaliseExample6: () =>
                scope.attrSet$({
                  expr: () => scope.apply$(scope.subpath["normalise"], "."),
                  expected: "./.",
                }),
              testSubpathNormaliseExample7: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.builtins["tryEval"], () =>
                      scope.apply$(scope.subpath["normalise"], "foo/../bar"))[
                        "success"
                      ],
                  expected: false,
                }),
              testSubpathNormaliseExample8: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.builtins["tryEval"], () =>
                      scope.apply$(scope.subpath["normalise"], ""))["success"],
                  expected: false,
                }),
              testSubpathNormaliseExample9: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.builtins["tryEval"], () =>
                      scope.apply$(scope.subpath["normalise"], "/foo"))[
                        "success"
                      ],
                  expected: false,
                }),
              testSubpathNormaliseIsValidDots: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(
                      scope.subpath["normalise"],
                      "./foo/.bar/.../baz...qux",
                    ),
                  expected: "./foo/.bar/.../baz...qux",
                }),
              testSubpathNormaliseWrongType: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.builtins["tryEval"], () =>
                      scope.apply$(scope.subpath["normalise"], null))[
                        "success"
                      ],
                  expected: false,
                }),
              testSubpathNormaliseTwoDots: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.builtins["tryEval"], () =>
                      scope.apply$(scope.subpath["normalise"], ".."))[
                        "success"
                      ],
                  expected: false,
                }),
              testSubpathComponentsExample1: () =>
                scope.attrSet$({
                  expr: () => scope.apply$(scope.subpath["components"], "."),
                  expected: [],
                }),
              testSubpathComponentsExample2: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(
                      scope.subpath["components"],
                      "./foo//bar/./baz/",
                    ),
                  expected: ["foo", "bar", "baz"],
                }),
              testSubpathComponentsExample3: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(
                      scope.builtins["tryEval"],
                      () => scope.apply$(scope.subpath["components"], "/foo"),
                    )["success"],
                  expected: false,
                }),
            })),
      }).in$((scope) =>
        scope.apply$(scope.lib["debug"]["throwTestFailures"], () =>
          scope.attrSet$({
            failures: () => scope.failures,
          }))
      ))
  ),
);
