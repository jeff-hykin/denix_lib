import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./declare-attrList.nix", import.meta.url).pathname,
  ({ scope }) => (
    //
    //
    //
    scope.func$({
      lib: scope.nixArg$.NoDefault,
      config: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.let$({
        mkOption: (scope) => scope.lib["mkOption"],
        mkOrder: (scope) => scope.lib["mkOrder"],
        mkMerge: (scope) => scope.lib["mkMerge"],
        mkBefore: (scope) => scope.lib["mkBefore"],
        mkAfter: (scope) => scope.lib["mkAfter"],
        mkIf: (scope) => scope.lib["mkIf"],
        mkOverride: (scope) => scope.lib["mkOverride"],
        mkDefault: (scope) => scope.lib["mkDefault"],
        mkForce: (scope) => scope.lib["mkForce"],
        types: (scope) => scope.lib["types"],
      }).in$((scope) =>
        scope.attrSet$({
          options: () =>
            scope.attrSet$({
              attrList: () =>
                scope.apply$(scope.mkOption, () =>
                  scope.attrSet$({
                    type: () =>
                      scope.apply$(scope.types["lazyAttrsOf"], () =>
                        scope.apply$(
                          scope.types["attrListOf"],
                          () => scope.types["str"],
                        )),
                  })),
              attrListInt: () =>
                scope.apply$(scope.mkOption, () =>
                  scope.attrSet$({
                    type: () =>
                      scope.apply$(
                        scope.types["lazyAttrsOf"],
                        () =>
                          scope.apply$(scope.types["attrListOf"], () =>
                            scope.types["int"]),
                      ),
                  })),
              attrListSubmodule: () =>
                scope.apply$(scope.mkOption, () =>
                  scope.attrSet$({
                    type: () =>
                      scope.apply$(scope.types["attrListOf"], () =>
                        scope.apply$(scope.types["submodule"], () =>
                          scope.attrSet$({
                            ...scope.deepSet$(
                              ["options", "port"],
                              () =>
                                scope.apply$(scope.mkOption, () =>
                                  scope.attrSet$({
                                    type: () =>
                                      scope.types["int"],
                                    description: "Port number",
                                  })),
                            ),
                            ...scope.deepSet$(
                              ["options", "host"],
                              () =>
                                scope.apply$(scope.mkOption, () =>
                                  scope.attrSet$({
                                    type: () =>
                                      scope.types["str"],
                                    default: "localhost",
                                    description: "Hostname",
                                  })),
                            ),
                          }))),
                  })),
              asAttrs: () =>
                scope.apply$(scope.mkOption, () =>
                  scope.attrSet$({
                    type: () =>
                      scope.apply$(
                        scope.types["lazyAttrsOf"],
                        () =>
                          scope.apply$(scope.types["attrListWith"], () =>
                            scope.attrSet$({
                              elemType: () =>
                                scope.types["str"],
                              asAttrs: true,
                              mergeAttrValues: () =>
                                scope.func$("_name", (scope) =>
                                  scope.func$("values", (scope) =>
                                    scope.apply$(scope.lib["last"], () =>
                                      scope.values))),
                            })),
                      ),
                  })),
              asAttrsDefault: () =>
                scope.apply$(scope.mkOption, () =>
                  scope.attrSet$({
                    type: () =>
                      scope.apply$(scope.types["lazyAttrsOf"], () =>
                        scope.apply$(scope.types["attrListWith"], () =>
                          scope.attrSet$({
                            elemType: () =>
                              scope.types["int"],
                            asAttrs: true,
                          }))),
                  })),
              attrListStrict: () =>
                scope.apply$(scope.mkOption, () =>
                  scope.attrSet$({
                    type: () =>
                      scope.apply$(scope.types["lazyAttrsOf"], () =>
                        scope.types["raw"]),
                  })),
              attrListIntStrict: () =>
                scope.apply$(scope.mkOption, () =>
                  scope.attrSet$({
                    type: () =>
                      scope.apply$(scope.types["lazyAttrsOf"], () =>
                        scope.types["raw"]),
                  })),
              eitherAttrListOrInt: () =>
                scope.apply$(scope.mkOption, () =>
                  scope.attrSet$({
                    type: () =>
                      scope.apply$(scope.types["either"], () =>
                        scope.apply$(scope.types["attrListOf"], () =>
                          scope.types["str"]), () =>
                        scope.types["int"]),
                  })),
              eitherAttrListOrIntFallback: () =>
                scope.apply$(scope.mkOption, () =>
                  scope.attrSet$({
                    type: () =>
                      scope.apply$(scope.types["either"], () =>
                        scope.apply$(scope.types["attrListOf"], () =>
                          scope.types["str"]), () =>
                        scope.types["int"]),
                  })),
              eitherIntOrAttrList: () =>
                scope.apply$(scope.mkOption, () =>
                  scope.attrSet$({
                    type: () =>
                      scope.apply$(scope.types["either"], () =>
                        scope.types["int"], () =>
                        scope.apply$(scope.types["attrListOf"], () =>
                          scope.types["str"])),
                  })),
              eitherIntOrAttrListFallback: () =>
                scope.apply$(scope.mkOption, () =>
                  scope.attrSet$({
                    type: () =>
                      scope.apply$(scope.types["either"], () =>
                        scope.types["int"], () =>
                        scope.apply$(scope.types["attrListOf"], () =>
                          scope.types["str"])),
                  })),
              assertions: () => scope.apply$(scope.mkOption, {}),
            }),
          imports: () => [scope.attrSet$({
            ...scope.deepSet$(["attrListInt", "multiModule"], [{ b: 2n }]),
          })],
          config: () =>
            scope.attrSet$({
              ...scope.deepSet$(["attrList", "listInput"], [{ a: "alpha" }, {
                b: "beta",
              }]),
              ...scope.deepSet$(
                ["attrList", "attrsetOrdered"],
                () =>
                  scope.attrSet$({
                    x: () => scope.apply$(scope.mkOrder, 200n, "x-val"),
                    y: () => scope.apply$(scope.mkOrder, 100n, "y-val"),
                  }),
              ),
              ...scope.deepSet$(
                ["attrList", "mixed"],
                () =>
                  scope.apply$(
                    scope.mkMerge,
                    () => [
                      [{ m: "from-list" }],
                      scope.attrSet$({
                        n: () =>
                          scope.apply$(scope.mkOrder, 50n, "from-attrset"),
                      }),
                    ],
                  ),
              ),
              ...scope.deepSet$(["attrListInt", "multiModule"], [{ a: 1n }]),
              ...scope.deepSet$(["attrList", "attrsetNoOrder"], {
                foo: "bar",
                baz: "qux",
              }),
              ...scope.deepSet$(["attrList", "empty"], []),
              ...scope.deepSet$(
                ["attrList", "ordering"],
                () =>
                  scope.apply$(scope.mkMerge, () => [
                    scope.attrSet$({
                      last: () => scope.apply$(scope.mkOrder, 1500n, "last"),
                    }),
                    scope.attrSet$({
                      first: () => scope.apply$(scope.mkOrder, 500n, "first"),
                    }),
                    [{ middle: "middle" }],
                  ]),
              ),
              ...scope.deepSet$(
                ["attrList", "listOrdering"],
                () => [scope.apply$(scope.mkAfter, { z: "after" }), {
                  m: "default",
                }, scope.apply$(scope.mkBefore, { a: "before" })],
              ),
              ...scope.deepSet$(
                ["attrList", "listDefaultPrio"],
                () =>
                  scope.apply$(scope.mkMerge, () => [
                    scope.attrSet$({
                      after: () => scope.apply$(scope.mkOrder, 1001n, "after"),
                    }),
                    [{ mid: "list-entry" }],
                    scope.attrSet$({
                      before: () => scope.apply$(scope.mkOrder, 999n, "before"),
                    }),
                  ]),
              ),
              ...scope.deepSet$(
                ["attrList", "beforeAfter"],
                () =>
                  scope.apply$(scope.mkMerge, () => [
                    scope.attrSet$({
                      z: () => scope.apply$(scope.mkAfter, "after"),
                    }),
                    scope.attrSet$({
                      a: () => scope.apply$(scope.mkBefore, "before"),
                    }),
                    [{ m: "default" }],
                  ]),
              ),
              ...scope.deepSet$(
                ["attrList", "withMkIf"],
                () =>
                  scope.apply$(
                    scope.mkMerge,
                    () => [
                      scope.apply$(scope.mkIf, true, [{ yes: "included" }]),
                      scope.apply$(scope.mkIf, false, [{ no: "excluded" }]),
                    ],
                  ),
              ),
              ...scope.deepSet$(
                ["attrList", "withOverride"],
                () =>
                  scope.apply$(
                    scope.mkMerge,
                    () => [
                      scope.apply$(scope.mkOverride, 100n, [{
                        replaced: "gone",
                      }]),
                      scope.apply$(scope.mkOverride, 50n, [{ winner: "wins" }]),
                    ],
                  ),
              ),
              ...scope.deepSet$(
                ["attrList", "withDefault"],
                () =>
                  scope.apply$(
                    scope.mkMerge,
                    () => [
                      scope.apply$(scope.mkDefault, [{
                        default: "overridden",
                      }]),
                      [{ normal: "wins" }],
                    ],
                  ),
              ),
              ...scope.deepSet$(
                ["attrList", "withForce"],
                () =>
                  scope.apply$(
                    scope.mkMerge,
                    () => [
                      [{ discarded: "gone" }],
                      scope.apply$(scope.mkForce, [{ forced: "wins" }]),
                    ],
                  ),
              ),
              ...scope.deepSet$(
                ["attrList", "forceWithOrder"],
                () =>
                  scope.apply$(
                    scope.mkForce,
                    () => [
                      scope.apply$(scope.mkAfter, { second: "after" }),
                      scope.apply$(scope.mkBefore, { first: "before" }),
                    ],
                  ),
              ),
              ...scope.deepSet$(
                ["attrListInt", "forceElementValue"],
                () => [
                  scope.attrSet$({
                    a: () =>
                      scope.apply$(scope.mkDefault, () =>
                        scope.apply$(
                          scope.abort,
                          "overridden by mkForce; laziness guarantee: MUST NOT be evaluated",
                        )),
                  }),
                  scope.attrSet$({
                    a: () => scope.apply$(scope.mkForce, 42n),
                  }),
                  scope.attrSet$({
                    a: () =>
                      scope.apply$(scope.mkOverride, 100n, () =>
                        scope.apply$(
                          scope.abort,
                          "overridden by mkForce; laziness guarantee: MUST NOT be evaluated",
                        )),
                  }),
                  { b: 2n },
                ],
              ),
              ...scope.deepSet$(
                ["attrList", "forceAttrset"],
                () =>
                  scope.apply$(
                    scope.mkMerge,
                    () => [
                      [{ discarded: "gone" }],
                      scope.apply$(scope.mkForce, () =>
                        scope.attrSet$({
                          x: () => scope.apply$(scope.mkOrder, 200n, "x-val"),
                          y: () => scope.apply$(scope.mkOrder, 100n, "y-val"),
                        })),
                    ],
                  ),
              ),
              ...scope.deepSet$(
                ["attrList", "forceRepeatedKey"],
                () => [
                  scope.attrSet$({
                    x: () =>
                      scope.apply$(scope.mkOverride, 100n, () =>
                        scope.apply$(
                          scope.abort,
                          "overridden by mkForce; laziness guarantee: MUST NOT be evaluated",
                        )),
                  }),
                  scope.attrSet$({
                    x: () => scope.apply$(scope.mkForce, "wins"),
                  }),
                  scope.attrSet$({
                    x: () => scope.apply$(scope.mkForce, "wins 2"),
                  }),
                ],
              ),
              ...scope.deepSet$(
                ["attrList", "forceRepeatedKeyMerge"],
                () =>
                  scope.apply$(
                    scope.mkMerge,
                    () => [[
                      { x: "unused: overridden by mkForce" },
                      scope.attrSet$({
                        x: () =>
                          scope.apply$(scope.mkDefault, () =>
                            scope.apply$(
                              scope.abort,
                              "overridden by mkForce; laziness guarantee: MUST NOT be evaluated",
                            )),
                      }),
                    ], [scope.attrSet$({
                      x: () =>
                        scope.apply$(scope.mkOverride, 100n, () =>
                          scope.apply$(
                            scope.abort,
                            "overridden by mkForce; laziness guarantee: MUST NOT be evaluated",
                          )),
                    })], [scope.attrSet$({
                      x: () => scope.apply$(scope.mkForce, "forced"),
                    })]],
                  ),
              ),
              ...scope.deepSet$(
                ["attrList", "forceRepeatedKeyAttrs"],
                () =>
                  scope.apply$(scope.mkMerge, () => [
                    scope.attrSet$({
                      x: () =>
                        scope.apply$(scope.mkDefault, () =>
                          scope.apply$(
                            scope.abort,
                            "overridden by mkForce; laziness guarantee: MUST NOT be evaluated",
                          )),
                      y: "kept",
                    }),
                    scope.attrSet$({
                      x: () => scope.apply$(scope.mkForce, "forced"),
                    }),
                  ]),
              ),
              ...scope.deepSet$(
                ["attrList", "forcePartialAttrs"],
                () =>
                  scope.apply$(
                    scope.mkMerge,
                    () => [
                      { x: "unused: overridden by mkForce", y: "normal y" },
                      scope.attrSet$({
                        x: () =>
                          scope.apply$(scope.mkForce, "forced x"),
                      }),
                    ],
                  ),
              ),
              ...scope.deepSet$(
                ["attrList", "forceMixedFormats"],
                () =>
                  scope.apply$(scope.mkMerge, () => [
                    [
                      scope.attrSet$({
                        x: () =>
                          scope.apply$(scope.mkOverride, 100n, () =>
                            scope.apply$(
                              scope.abort,
                              "overridden by mkForce; laziness guarantee: MUST NOT be evaluated",
                            )),
                      }),
                      { y: "list y" },
                    ],
                    scope.attrSet$({
                      x: () => scope.apply$(scope.mkForce, "attrset forced x"),
                    }),
                  ]),
              ),
              ...scope.deepSet$(
                ["attrList", "nestListOrderForce"],
                () =>
                  scope.apply$(scope.mkMerge, () => [[
                    scope.attrSet$({
                      x: () =>
                        scope.apply$(scope.mkDefault, () =>
                          scope.apply$(
                            scope.abort,
                            "overridden by mkForce; laziness guarantee: MUST NOT be evaluated",
                          )),
                    }),
                    scope.apply$(scope.mkOrder, 500n, () =>
                      scope.attrSet$({
                        x: () => scope.apply$(scope.mkForce, "forced-early"),
                      })),
                    scope.apply$(scope.mkOrder, 1500n, { y: "late" }),
                  ], [scope.apply$(scope.mkOrder, 100n, { z: "earliest" })]]),
              ),
              ...scope.deepSet$(
                ["attrList", "nestListOrderOfForce"],
                () =>
                  scope.apply$(scope.mkMerge, () => [[
                    scope.attrSet$({
                      x: () =>
                        scope.apply$(scope.mkOverride, 100n, () =>
                          scope.apply$(
                            scope.abort,
                            "overridden by mkForce; laziness guarantee: MUST NOT be evaluated",
                          )),
                    }),
                    { y: "plain-early" },
                  ], [
                    scope.attrSet$({
                      x: () =>
                        scope.apply$(scope.mkOrder, 1500n, () =>
                          scope.apply$(scope.mkForce, "forced-late")),
                    }),
                    scope.attrSet$({
                      z: () =>
                        scope.apply$(scope.mkOrder, 500n, "earliest"),
                    }),
                  ], [
                    { x: "unused: overridden by mkForce" },
                    scope.attrSet$({
                      w: () => scope.apply$(scope.mkOrder, 1200n, "mid"),
                    }),
                  ]]),
              ),
              ...scope.deepSet$(
                ["attrList", "nestListForceOfOrder"],
                () =>
                  scope.apply$(
                    scope.mkMerge,
                    () => [[{ x: "unused: overridden by mkForce" }, {
                      y: "plain-early",
                    }], [
                      scope.attrSet$({
                        x: () =>
                          scope.apply$(
                            scope.mkForce,
                            () =>
                              scope.apply$(scope.mkOrder, 1500n, "forced-late"),
                          ),
                      }),
                      scope.attrSet$({
                        z: () => scope.apply$(scope.mkOrder, 500n, "earliest"),
                      }),
                    ], [
                      scope.attrSet$({
                        x: () =>
                          scope.apply$(scope.mkDefault, () =>
                            scope.apply$(
                              scope.abort,
                              "overridden by mkForce; laziness guarantee: MUST NOT be evaluated",
                            )),
                      }),
                      scope.attrSet$({
                        w: () => scope.apply$(scope.mkOrder, 1200n, "mid"),
                      }),
                    ]],
                  ),
              ),
              ...scope.deepSet$(
                ["attrList", "nestAttrsOrderOfForce"],
                () =>
                  scope.apply$(scope.mkMerge, () => [
                    scope.attrSet$({
                      x: () =>
                        scope.apply$(scope.mkOverride, 100n, () =>
                          scope.apply$(
                            scope.abort,
                            "overridden by mkForce; laziness guarantee: MUST NOT be evaluated",
                          )),
                      y: "plain-early",
                    }),
                    scope.attrSet$({
                      x: () =>
                        scope.apply$(
                          scope.mkOrder,
                          1500n,
                          () => scope.apply$(scope.mkForce, "forced-late"),
                        ),
                      z: () => scope.apply$(scope.mkOrder, 500n, "earliest"),
                    }),
                    scope.attrSet$({
                      x: "unused: overridden by mkForce",
                      w: () => scope.apply$(scope.mkOrder, 1200n, "mid"),
                    }),
                  ]),
              ),
              ...scope.deepSet$(
                ["attrList", "nestAttrsForceOfOrder"],
                () =>
                  scope.apply$(
                    scope.mkMerge,
                    () => [
                      { x: "unused: overridden by mkForce", y: "plain-early" },
                      scope.attrSet$({
                        x: () =>
                          scope.apply$(scope.mkForce, () =>
                            scope.apply$(scope.mkOrder, 1500n, "forced-late")),
                        z: () =>
                          scope.apply$(scope.mkOrder, 500n, "earliest"),
                      }),
                      scope.attrSet$({
                        x: () =>
                          scope.apply$(scope.mkDefault, () =>
                            scope.apply$(
                              scope.abort,
                              "overridden by mkForce; laziness guarantee: MUST NOT be evaluated",
                            )),
                        w: () =>
                          scope.apply$(scope.mkOrder, 1200n, "mid"),
                      }),
                    ],
                  ),
              ),
              ...scope.deepSet$(
                ["attrListInt", "optionalValueList"],
                () => [
                  scope.attrSet$({
                    a: () => scope.apply$(scope.mkIf, true, 1n),
                  }),
                  scope.attrSet$({
                    b: () => scope.apply$(scope.mkIf, false, 2n),
                  }),
                  { c: 3n },
                ],
              ),
              ...scope.deepSet$(
                ["attrListInt", "optionalValueAttrs"],
                () =>
                  scope.attrSet$({
                    a: () => scope.apply$(scope.mkIf, true, 1n),
                    b: () => scope.apply$(scope.mkIf, false, 2n),
                    c: 3n,
                  }),
              ),
              attrListSubmodule: [{ web: { port: 80n } }, {
                db: { port: 5432n, host: "dbhost" },
              }],
              ...scope.deepSet$(["asAttrs", "unique"], [{ a: "alpha" }, {
                b: "beta",
              }]),
              ...scope.deepSet$(
                ["asAttrs", "duplicateKeys"],
                () =>
                  scope.apply$(scope.mkMerge, () => [
                    scope.attrSet$({
                      x: () => scope.apply$(scope.mkOrder, 500n, "first"),
                    }),
                    scope.attrSet$({
                      x: () => scope.apply$(scope.mkOrder, 1500n, "last"),
                    }),
                    { y: "only" },
                  ]),
              ),
              ...scope.deepSet$(["asAttrs", "ordered"], () =>
                scope.attrSet$({
                  z: () => scope.apply$(scope.mkOrder, 200n, "z-val"),
                  a: () => scope.apply$(scope.mkOrder, 100n, "a-val"),
                })),
              ...scope.deepSet$(
                ["asAttrs", "withForce"],
                () =>
                  scope.apply$(
                    scope.mkMerge,
                    () => [
                      { x: "unused: overridden by mkForce" },
                      scope.attrSet$({
                        x: () => scope.apply$(scope.mkForce, "forced"),
                        y: "kept",
                      }),
                    ],
                  ),
              ),
              ...scope.deepSet$(["asAttrs", "empty"], []),
              ...scope.deepSet$(["asAttrsDefault", "unique"], [{ a: 1n }, {
                b: 2n,
              }]),
              ...scope.deepSet$(
                ["asAttrsDefault", "duplicates"],
                () =>
                  scope.apply$(scope.mkMerge, () => [
                    scope.attrSet$({
                      x: () => scope.apply$(scope.mkOrder, 500n, 10n),
                    }),
                    scope.attrSet$({
                      x: () => scope.apply$(scope.mkOrder, 1500n, 30n),
                    }),
                    { y: 99n },
                    [{ x: 20n }],
                  ]),
              ),
              eitherAttrListOrInt: [{ a: "hello" }, { b: "world" }],
              eitherAttrListOrIntFallback: 42n,
              eitherIntOrAttrList: 42n,
              eitherIntOrAttrListFallback: [{ a: "hello" }],
              ...scope.deepSet$(["attrListInt", "badValue"], [{
                a: "not-an-int",
              }]),
              ...scope.deepSet$(["attrList", "badListElem"], [{
                a: "ok",
                b: "extra",
              }]),
              ...scope.deepSet$(["attrList", "badString"], "not-a-container"),
              ...scope.deepSet$(["attrList", "badListString"], [
                "not a singleton attribute",
              ]),
              attrListStrict: () =>
                scope.apply$(
                  scope.builtins["mapAttrs"],
                  () =>
                    scope.func$("k", (scope) =>
                      scope.func$("v", (scope) =>
                        scope.apply$(scope.builtins["deepSeq"], () =>
                          scope.v, () =>
                          scope.v))),
                  () =>
                    scope.config["attrList"],
                ),
              attrListIntStrict: () =>
                scope.apply$(
                  scope.builtins["mapAttrs"],
                  () =>
                    scope.func$("k", (scope) =>
                      scope.func$("v", (scope) =>
                        scope.apply$(scope.builtins["deepSeq"], () =>
                          scope.v, () =>
                          scope.v))),
                  () =>
                    scope.config["attrListInt"],
                ),
              assertions: () =>
                scope.let$({
                  c: (scope) =>
                    scope.apply$(scope.lib["evalModules"], {
                      modules: [
                        new scope.Path$([
                          new URL("./declare-attrList.nix", import.meta.url)
                            .pathname,
                        ], []),
                      ],
                    }),
                  cfg: (scope) => scope.c["config"],
                }).in$((scope) =>
                  ((_cond) => {
                    if (!_cond) {
                      throw new Error(
                        "assertion failed: " +
                          'cfg.attrList.listInput == [\n          { a = "alpha"',
                      );
                    }
                    return ((_cond) => {
                      if (!_cond) {
                        throw new Error(
                          "assertion failed: " +
                            'cfg.attrList.attrsetOrdered == [\n          { y = "y-val"',
                        );
                      }
                      return ((_cond) => {
                        if (!_cond) {
                          throw new Error(
                            "assertion failed: " +
                              'cfg.attrList.mixed == [\n          { n = "from-attrset"',
                          );
                        }
                        return ((_cond) => {
                          if (!_cond) {
                            throw new Error(
                              "assertion failed: " +
                                "cfg.attrListInt.multiModule == [\n          { b = 2",
                            );
                          }
                          return ((_cond) => {
                            if (!_cond) {
                              throw new Error(
                                "assertion failed: " +
                                  "builtins.length cfg.attrList.attrsetNoOrder == 2",
                              );
                            }
                            return ((_cond) => {
                              if (!_cond) {
                                throw new Error(
                                  "assertion failed: " +
                                    "cfg.attrList.empty == [ ]",
                                );
                              }
                              return ((_cond) => {
                                if (!_cond) {
                                  throw new Error(
                                    "assertion failed: " +
                                      'cfg.attrList.listOrdering == [\n          { a = "before"',
                                  );
                                }
                                return ((_cond) => {
                                  if (!_cond) {
                                    throw new Error(
                                      "assertion failed: " +
                                        'cfg.attrList.listDefaultPrio == [\n          { before = "before"',
                                    );
                                  }
                                  return ((_cond) => {
                                    if (!_cond) {
                                      throw new Error(
                                        "assertion failed: " +
                                          'cfg.attrList.ordering == [\n          { first = "first"',
                                      );
                                    }
                                    return ((_cond) => {
                                      if (!_cond) {
                                        throw new Error(
                                          "assertion failed: " +
                                            'cfg.attrList.beforeAfter == [\n          { a = "before"',
                                        );
                                      }
                                      return ((_cond) => {
                                        if (!_cond) {
                                          throw new Error(
                                            "assertion failed: " +
                                              'cfg.attrList.withMkIf == [\n          { yes = "included"',
                                          );
                                        }
                                        return ((_cond) => {
                                          if (!_cond) {
                                            throw new Error(
                                              "assertion failed: " +
                                                'cfg.attrList.withOverride == [\n          { winner = "wins"',
                                            );
                                          }
                                          return ((_cond) => {
                                            if (!_cond) {
                                              throw new Error(
                                                "assertion failed: " +
                                                  'cfg.attrList.withDefault == [\n          { normal = "wins"',
                                              );
                                            }
                                            return ((_cond) => {
                                              if (!_cond) {
                                                throw new Error(
                                                  "assertion failed: " +
                                                    'cfg.attrList.withForce == [\n          { forced = "wins"',
                                                );
                                              }
                                              return ((_cond) => {
                                                if (!_cond) {
                                                  throw new Error(
                                                    "assertion failed: " +
                                                      'cfg.attrList.forceWithOrder == [\n          { first = "before"',
                                                  );
                                                }
                                                return ((_cond) => {
                                                  if (!_cond) {
                                                    throw new Error(
                                                      "assertion failed: " +
                                                        "cfg.attrListInt.forceElementValue == [\n          { a = 42",
                                                    );
                                                  }
                                                  return ((_cond) => {
                                                    if (!_cond) {
                                                      throw new Error(
                                                        "assertion failed: " +
                                                          'cfg.attrList.forceAttrset == [\n          { y = "y-val"',
                                                      );
                                                    }
                                                    return ((_cond) => {
                                                      if (!_cond) {
                                                        throw new Error(
                                                          "assertion failed: " +
                                                            'cfg.attrList.forceRepeatedKey == [\n          { x = "wins"',
                                                        );
                                                      }
                                                      return ((_cond) => {
                                                        if (!_cond) {
                                                          throw new Error(
                                                            "assertion failed: " +
                                                              'cfg.attrList.forceRepeatedKeyMerge == [\n          { x = "forced"',
                                                          );
                                                        }
                                                        return ((_cond) => {
                                                          if (!_cond) {
                                                            throw new Error(
                                                              "assertion failed: " +
                                                                'cfg.attrList.forceRepeatedKeyAttrs == [\n          { y = "kept"',
                                                            );
                                                          }
                                                          return ((_cond) => {
                                                            if (!_cond) {
                                                              throw new Error(
                                                                "assertion failed: " +
                                                                  'cfg.attrList.forcePartialAttrs == [\n          { y = "normal y"',
                                                              );
                                                            }
                                                            return ((_cond) => {
                                                              if (!_cond) {
                                                                throw new Error(
                                                                  "assertion failed: " +
                                                                    'cfg.attrList.forceMixedFormats == [\n          { y = "list y"',
                                                                );
                                                              }
                                                              return ((
                                                                _cond,
                                                              ) => {
                                                                if (!_cond) {
                                                                  throw new Error(
                                                                    "assertion failed: " +
                                                                      'cfg.attrList.nestListOrderForce == [\n          { z = "earliest"',
                                                                  );
                                                                }
                                                                return ((
                                                                  _cond,
                                                                ) => {
                                                                  if (!_cond) {
                                                                    throw new Error(
                                                                      "assertion failed: " +
                                                                        'cfg.attrList.nestListOrderOfForce == [\n          { z = "earliest"',
                                                                    );
                                                                  }
                                                                  return ((
                                                                    _cond,
                                                                  ) => {
                                                                    if (
                                                                      !_cond
                                                                    ) {
                                                                      throw new Error(
                                                                        "assertion failed: " +
                                                                          'cfg.attrList.nestListForceOfOrder == [\n          { z = "earliest"',
                                                                      );
                                                                    }
                                                                    return ((
                                                                      _cond,
                                                                    ) => {
                                                                      if (
                                                                        !_cond
                                                                      ) {
                                                                        throw new Error(
                                                                          "assertion failed: " +
                                                                            'cfg.attrList.nestAttrsOrderOfForce == [\n          { z = "earliest"',
                                                                        );
                                                                      }
                                                                      return ((
                                                                        _cond,
                                                                      ) => {
                                                                        if (
                                                                          !_cond
                                                                        ) {
                                                                          throw new Error(
                                                                            "assertion failed: " +
                                                                              'cfg.attrList.nestAttrsForceOfOrder == [\n          { z = "earliest"',
                                                                          );
                                                                        }
                                                                        return ((
                                                                          _cond,
                                                                        ) => {
                                                                          if (
                                                                            !_cond
                                                                          ) {
                                                                            throw new Error(
                                                                              "assertion failed: " +
                                                                                "cfg.attrListInt.optionalValueList == [\n          { a = 1",
                                                                            );
                                                                          }
                                                                          return ((
                                                                            _cond,
                                                                          ) => {
                                                                            if (
                                                                              !_cond
                                                                            ) {
                                                                              throw new Error(
                                                                                "assertion failed: " +
                                                                                  "cfg.attrListInt.optionalValueAttrs == [\n          { a = 1",
                                                                              );
                                                                            }
                                                                            return ((
                                                                              _cond,
                                                                            ) => {
                                                                              if (
                                                                                !_cond
                                                                              ) {
                                                                                throw new Error(
                                                                                  "assertion failed: " +
                                                                                    'cfg.attrListSubmodule == [\n          {\n            web = {\n              host = "localhost"',
                                                                                );
                                                                              }
                                                                              return ((
                                                                                _cond,
                                                                              ) => {
                                                                                if (
                                                                                  !_cond
                                                                                ) {
                                                                                  throw new Error(
                                                                                    "assertion failed: " +
                                                                                      'builtins.map (m: m.configuration.config) c.options.attrListSubmodule.valueMeta.attrList == [\n          {\n            host = "localhost"',
                                                                                  );
                                                                                }
                                                                                return ((
                                                                                  _cond,
                                                                                ) => {
                                                                                  if (
                                                                                    !_cond
                                                                                  ) {
                                                                                    throw new Error(
                                                                                      "assertion failed: " +
                                                                                        'builtins.map (\n          m:\n          builtins.mapAttrs (n: o: o.description) (builtins.removeAttrs m.configuration.options [ "_module" ])\n        ) c.options.attrListSubmodule.valueMeta.attrList == [\n          {\n            host = "Hostname"',
                                                                                    );
                                                                                  }
                                                                                  return ((
                                                                                    _cond,
                                                                                  ) => {
                                                                                    if (
                                                                                      !_cond
                                                                                    ) {
                                                                                      throw new Error(
                                                                                        "assertion failed: " +
                                                                                          "c.options.attrList.valueMeta.attrs.listInput.attrList == [\n          { }\n          { }\n        ]",
                                                                                      );
                                                                                    }
                                                                                    return ((
                                                                                      _cond,
                                                                                    ) => {
                                                                                      if (
                                                                                        !_cond
                                                                                      ) {
                                                                                        throw new Error(
                                                                                          "assertion failed: " +
                                                                                            "c.options.attrList.valueMeta.attrs.attrsetOrdered.attrList == [\n          { }\n          { }\n        ]",
                                                                                        );
                                                                                      }
                                                                                      return ((
                                                                                        _cond,
                                                                                      ) => {
                                                                                        if (
                                                                                          !_cond
                                                                                        ) {
                                                                                          throw new Error(
                                                                                            "assertion failed: " +
                                                                                              "c.options.attrList.valueMeta.attrs.mixed.attrList == [\n          { }\n          { }\n        ]",
                                                                                          );
                                                                                        }
                                                                                        return ((
                                                                                          _cond,
                                                                                        ) => {
                                                                                          if (
                                                                                            !_cond
                                                                                          ) {
                                                                                            throw new Error(
                                                                                              "assertion failed: " +
                                                                                                "c.options.attrList.valueMeta.attrs.empty.attrList == [ ]",
                                                                                            );
                                                                                          }
                                                                                          return ((
                                                                                            _cond,
                                                                                          ) => {
                                                                                            if (
                                                                                              !_cond
                                                                                            ) {
                                                                                              throw new Error(
                                                                                                "assertion failed: " +
                                                                                                  "c.options.attrListInt.valueMeta.attrs.optionalValueList.attrList == [\n          { }\n          { }\n        ]",
                                                                                              );
                                                                                            }
                                                                                            return ((
                                                                                              _cond,
                                                                                            ) => {
                                                                                              if (
                                                                                                !_cond
                                                                                              ) {
                                                                                                throw new Error(
                                                                                                  "assertion failed: " +
                                                                                                    'cfg.eitherAttrListOrInt == [\n          { a = "hello"',
                                                                                                );
                                                                                              }
                                                                                              return ((
                                                                                                _cond,
                                                                                              ) => {
                                                                                                if (
                                                                                                  !_cond
                                                                                                ) {
                                                                                                  throw new Error(
                                                                                                    "assertion failed: " +
                                                                                                      "cfg.eitherAttrListOrIntFallback == 42",
                                                                                                  );
                                                                                                }
                                                                                                return ((
                                                                                                  _cond,
                                                                                                ) => {
                                                                                                  if (
                                                                                                    !_cond
                                                                                                  ) {
                                                                                                    throw new Error(
                                                                                                      "assertion failed: " +
                                                                                                        "cfg.eitherIntOrAttrList == 42",
                                                                                                    );
                                                                                                  }
                                                                                                  return ((
                                                                                                    _cond,
                                                                                                  ) => {
                                                                                                    if (
                                                                                                      !_cond
                                                                                                    ) {
                                                                                                      throw new Error(
                                                                                                        "assertion failed: " +
                                                                                                          'cfg.eitherIntOrAttrListFallback == [\n          { a = "hello"',
                                                                                                      );
                                                                                                    }
                                                                                                    return ((
                                                                                                      _cond,
                                                                                                    ) => {
                                                                                                      if (
                                                                                                        !_cond
                                                                                                      ) {
                                                                                                        throw new Error(
                                                                                                          "assertion failed: " +
                                                                                                            'cfg.asAttrs.unique == {\n          a = "alpha"',
                                                                                                        );
                                                                                                      }
                                                                                                      return ((
                                                                                                        _cond,
                                                                                                      ) => {
                                                                                                        if (
                                                                                                          !_cond
                                                                                                        ) {
                                                                                                          throw new Error(
                                                                                                            "assertion failed: " +
                                                                                                              'c.options.asAttrs.valueMeta.attrs.unique.attrListValue == [\n          { a = "alpha"',
                                                                                                          );
                                                                                                        }
                                                                                                        return ((
                                                                                                          _cond,
                                                                                                        ) => {
                                                                                                          if (
                                                                                                            !_cond
                                                                                                          ) {
                                                                                                            throw new Error(
                                                                                                              "assertion failed: " +
                                                                                                                'cfg.asAttrs.duplicateKeys == {\n          x = "last"',
                                                                                                            );
                                                                                                          }
                                                                                                          return ((
                                                                                                            _cond,
                                                                                                          ) => {
                                                                                                            if (
                                                                                                              !_cond
                                                                                                            ) {
                                                                                                              throw new Error(
                                                                                                                "assertion failed: " +
                                                                                                                  'c.options.asAttrs.valueMeta.attrs.duplicateKeys.attrListValue == [\n          { x = "first"',
                                                                                                              );
                                                                                                            }
                                                                                                            return ((
                                                                                                              _cond,
                                                                                                            ) => {
                                                                                                              if (
                                                                                                                !_cond
                                                                                                              ) {
                                                                                                                throw new Error(
                                                                                                                  "assertion failed: " +
                                                                                                                    'cfg.asAttrs.ordered == {\n          a = "a-val"',
                                                                                                                );
                                                                                                              }
                                                                                                              return ((
                                                                                                                _cond,
                                                                                                              ) => {
                                                                                                                if (
                                                                                                                  !_cond
                                                                                                                ) {
                                                                                                                  throw new Error(
                                                                                                                    "assertion failed: " +
                                                                                                                      'c.options.asAttrs.valueMeta.attrs.ordered.attrListValue == [\n          { a = "a-val"',
                                                                                                                  );
                                                                                                                }
                                                                                                                return ((
                                                                                                                  _cond,
                                                                                                                ) => {
                                                                                                                  if (
                                                                                                                    !_cond
                                                                                                                  ) {
                                                                                                                    throw new Error(
                                                                                                                      "assertion failed: " +
                                                                                                                        'cfg.asAttrs.withForce == {\n          x = "forced"',
                                                                                                                    );
                                                                                                                  }
                                                                                                                  return ((
                                                                                                                    _cond,
                                                                                                                  ) => {
                                                                                                                    if (
                                                                                                                      !_cond
                                                                                                                    ) {
                                                                                                                      throw new Error(
                                                                                                                        "assertion failed: " +
                                                                                                                          "cfg.asAttrs.empty == { }",
                                                                                                                      );
                                                                                                                    }
                                                                                                                    return ((
                                                                                                                      _cond,
                                                                                                                    ) => {
                                                                                                                      if (
                                                                                                                        !_cond
                                                                                                                      ) {
                                                                                                                        throw new Error(
                                                                                                                          "assertion failed: " +
                                                                                                                            "cfg.asAttrsDefault.unique == {\n          a = [ 1 ]",
                                                                                                                        );
                                                                                                                      }
                                                                                                                      return ((
                                                                                                                        _cond,
                                                                                                                      ) => {
                                                                                                                        if (
                                                                                                                          !_cond
                                                                                                                        ) {
                                                                                                                          throw new Error(
                                                                                                                            "assertion failed: " +
                                                                                                                              "cfg.asAttrsDefault.duplicates == {\n          x = [\n            10\n            20\n            30\n          ]",
                                                                                                                          );
                                                                                                                        }
                                                                                                                        return ((
                                                                                                                          _cond,
                                                                                                                        ) => {
                                                                                                                          if (
                                                                                                                            !_cond
                                                                                                                          ) {
                                                                                                                            throw new Error(
                                                                                                                              "assertion failed: " +
                                                                                                                                "c.options.asAttrsDefault.valueMeta.attrs.duplicates.attrListValue == [\n          { x = 10",
                                                                                                                            );
                                                                                                                          }
                                                                                                                          return ((
                                                                                                                            _cond,
                                                                                                                          ) => {
                                                                                                                            if (
                                                                                                                              !_cond
                                                                                                                            ) {
                                                                                                                              throw new Error(
                                                                                                                                "assertion failed: " +
                                                                                                                                  "let\n          defs = c.options.asAttrs.valueMeta.attrs.duplicateKeys.definitions",
                                                                                                                              );
                                                                                                                            }
                                                                                                                            return ((
                                                                                                                              _cond,
                                                                                                                            ) => {
                                                                                                                              if (
                                                                                                                                !_cond
                                                                                                                              ) {
                                                                                                                                throw new Error(
                                                                                                                                  "assertion failed: " +
                                                                                                                                    "let\n          rendered = lib.modules.mapDefinitionValue (attr: lib.cli.toCommandLineGNU { } attr) (\n            mkMerge c.options.asAttrs.valueMeta.attrs.duplicateKeys.definitions\n          )",
                                                                                                                                );
                                                                                                                              }
                                                                                                                              return "ok";
                                                                                                                            })(
                                                                                                                              scope
                                                                                                                                .let$(
                                                                                                                                  {
                                                                                                                                    rendered:
                                                                                                                                      (
                                                                                                                                        scope,
                                                                                                                                      ) =>
                                                                                                                                        scope
                                                                                                                                          .apply$(
                                                                                                                                            scope
                                                                                                                                              .lib[
                                                                                                                                                "modules"
                                                                                                                                              ]["mapDefinitionValue"],
                                                                                                                                            () =>
                                                                                                                                              scope
                                                                                                                                                .func$(
                                                                                                                                                  "attr",
                                                                                                                                                  (
                                                                                                                                                    scope,
                                                                                                                                                  ) =>
                                                                                                                                                    scope
                                                                                                                                                      .apply$(
                                                                                                                                                        scope
                                                                                                                                                          .lib[
                                                                                                                                                            "cli"
                                                                                                                                                          ]["toCommandLineGNU"],
                                                                                                                                                        {},
                                                                                                                                                        () =>
                                                                                                                                                          scope
                                                                                                                                                            .attr,
                                                                                                                                                      ),
                                                                                                                                                ),
                                                                                                                                            () =>
                                                                                                                                              scope
                                                                                                                                                .apply$(
                                                                                                                                                  scope
                                                                                                                                                    .mkMerge,
                                                                                                                                                  () =>
                                                                                                                                                    scope
                                                                                                                                                      .c[
                                                                                                                                                        "options"
                                                                                                                                                      ]["asAttrs"][
                                                                                                                                                        "valueMeta"
                                                                                                                                                      ]["attrs"][
                                                                                                                                                        "duplicateKeys"
                                                                                                                                                      ]["definitions"],
                                                                                                                                                ),
                                                                                                                                          ),
                                                                                                                                    result:
                                                                                                                                      (
                                                                                                                                        scope,
                                                                                                                                      ) =>
                                                                                                                                        scope
                                                                                                                                          .apply$(
                                                                                                                                            scope
                                                                                                                                              .lib[
                                                                                                                                                "evalModules"
                                                                                                                                              ],
                                                                                                                                            () =>
                                                                                                                                              scope
                                                                                                                                                .attrSet$(
                                                                                                                                                  {
                                                                                                                                                    modules:
                                                                                                                                                      () => [
                                                                                                                                                        scope
                                                                                                                                                          .attrSet$(
                                                                                                                                                            {
                                                                                                                                                              ...scope
                                                                                                                                                                .deepSet$(
                                                                                                                                                                  [
                                                                                                                                                                    "options",
                                                                                                                                                                    "out",
                                                                                                                                                                  ],
                                                                                                                                                                  () =>
                                                                                                                                                                    scope
                                                                                                                                                                      .apply$(
                                                                                                                                                                        scope
                                                                                                                                                                          .mkOption,
                                                                                                                                                                        () =>
                                                                                                                                                                          scope
                                                                                                                                                                            .attrSet$(
                                                                                                                                                                              {
                                                                                                                                                                                type:
                                                                                                                                                                                  () =>
                                                                                                                                                                                    scope
                                                                                                                                                                                      .apply$(
                                                                                                                                                                                        scope
                                                                                                                                                                                          .types[
                                                                                                                                                                                            "listOf"
                                                                                                                                                                                          ],
                                                                                                                                                                                        () =>
                                                                                                                                                                                          scope
                                                                                                                                                                                            .types[
                                                                                                                                                                                              "str"
                                                                                                                                                                                            ],
                                                                                                                                                                                      ),
                                                                                                                                                                              },
                                                                                                                                                                            ),
                                                                                                                                                                      ),
                                                                                                                                                                ),
                                                                                                                                                            },
                                                                                                                                                          ),
                                                                                                                                                        scope
                                                                                                                                                          .attrSet$(
                                                                                                                                                            {
                                                                                                                                                              ...scope
                                                                                                                                                                .deepSet$(
                                                                                                                                                                  [
                                                                                                                                                                    "config",
                                                                                                                                                                    "out",
                                                                                                                                                                  ],
                                                                                                                                                                  () =>
                                                                                                                                                                    scope
                                                                                                                                                                      .rendered,
                                                                                                                                                                ),
                                                                                                                                                            },
                                                                                                                                                          ),
                                                                                                                                                        scope
                                                                                                                                                          .attrSet$(
                                                                                                                                                            {
                                                                                                                                                              ...scope
                                                                                                                                                                .deepSet$(
                                                                                                                                                                  [
                                                                                                                                                                    "config",
                                                                                                                                                                    "out",
                                                                                                                                                                  ],
                                                                                                                                                                  () =>
                                                                                                                                                                    scope
                                                                                                                                                                      .apply$(
                                                                                                                                                                        scope
                                                                                                                                                                          .mkOrder,
                                                                                                                                                                        800n,
                                                                                                                                                                        ["--interleaved"],
                                                                                                                                                                      ),
                                                                                                                                                                ),
                                                                                                                                                            },
                                                                                                                                                          ),
                                                                                                                                                      ],
                                                                                                                                                  },
                                                                                                                                                ),
                                                                                                                                          )["config"][
                                                                                                                                            "out"
                                                                                                                                          ],
                                                                                                                                  },
                                                                                                                                ).in$(
                                                                                                                                  (
                                                                                                                                    scope,
                                                                                                                                  ) =>
                                                                                                                                    scope
                                                                                                                                      .operators$
                                                                                                                                      .equal(
                                                                                                                                        scope
                                                                                                                                          .result,
                                                                                                                                        [
                                                                                                                                          "-xfirst",
                                                                                                                                          "--interleaved",
                                                                                                                                          "-yonly",
                                                                                                                                          "-xlast",
                                                                                                                                        ],
                                                                                                                                      )
                                                                                                                                ),
                                                                                                                            );
                                                                                                                          })(
                                                                                                                            scope
                                                                                                                              .let$(
                                                                                                                                {
                                                                                                                                  defs:
                                                                                                                                    (
                                                                                                                                      scope,
                                                                                                                                    ) =>
                                                                                                                                      scope
                                                                                                                                        .c[
                                                                                                                                          "options"
                                                                                                                                        ]["asAttrs"][
                                                                                                                                          "valueMeta"
                                                                                                                                        ]["attrs"][
                                                                                                                                          "duplicateKeys"
                                                                                                                                        ]["definitions"],
                                                                                                                                  extract:
                                                                                                                                    (
                                                                                                                                      scope,
                                                                                                                                    ) =>
                                                                                                                                      scope
                                                                                                                                        .func$(
                                                                                                                                          "d",
                                                                                                                                          (
                                                                                                                                            scope,
                                                                                                                                          ) =>
                                                                                                                                            scope
                                                                                                                                              .attrSet$(
                                                                                                                                                {
                                                                                                                                                  prio:
                                                                                                                                                    () =>
                                                                                                                                                      scope
                                                                                                                                                        .d[
                                                                                                                                                          "value"
                                                                                                                                                        ]["priority"],
                                                                                                                                                  value:
                                                                                                                                                    () =>
                                                                                                                                                      scope
                                                                                                                                                        .d[
                                                                                                                                                          "value"
                                                                                                                                                        ]["content"],
                                                                                                                                                },
                                                                                                                                              ),
                                                                                                                                        ),
                                                                                                                                },
                                                                                                                              ).in$(
                                                                                                                                (
                                                                                                                                  scope,
                                                                                                                                ) =>
                                                                                                                                  scope
                                                                                                                                    .operators$
                                                                                                                                    .equal(
                                                                                                                                      scope
                                                                                                                                        .apply$(
                                                                                                                                          scope
                                                                                                                                            .map,
                                                                                                                                          () =>
                                                                                                                                            scope
                                                                                                                                              .extract,
                                                                                                                                          () =>
                                                                                                                                            scope
                                                                                                                                              .defs,
                                                                                                                                        ),
                                                                                                                                      [
                                                                                                                                        {
                                                                                                                                          prio:
                                                                                                                                            500n,
                                                                                                                                          value:
                                                                                                                                            {
                                                                                                                                              x: "first",
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                          prio:
                                                                                                                                            1000n,
                                                                                                                                          value:
                                                                                                                                            {
                                                                                                                                              y: "only",
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                          prio:
                                                                                                                                            1500n,
                                                                                                                                          value:
                                                                                                                                            {
                                                                                                                                              x: "last",
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                      ],
                                                                                                                                    )
                                                                                                                              ),
                                                                                                                          );
                                                                                                                        })(
                                                                                                                          scope
                                                                                                                            .operators$
                                                                                                                            .equal(
                                                                                                                              scope
                                                                                                                                .c[
                                                                                                                                  "options"
                                                                                                                                ]["asAttrsDefault"][
                                                                                                                                  "valueMeta"
                                                                                                                                ]["attrs"][
                                                                                                                                  "duplicates"
                                                                                                                                ]["attrListValue"],
                                                                                                                              [
                                                                                                                                {
                                                                                                                                  x: 10n,
                                                                                                                                },
                                                                                                                                {
                                                                                                                                  y: 99n,
                                                                                                                                },
                                                                                                                                {
                                                                                                                                  x: 20n,
                                                                                                                                },
                                                                                                                                {
                                                                                                                                  x: 30n,
                                                                                                                                },
                                                                                                                              ],
                                                                                                                            ),
                                                                                                                        );
                                                                                                                      })(
                                                                                                                        scope
                                                                                                                          .operators$
                                                                                                                          .equal(
                                                                                                                            scope
                                                                                                                              .cfg[
                                                                                                                                "asAttrsDefault"
                                                                                                                              ]["duplicates"],
                                                                                                                            {
                                                                                                                              x: [
                                                                                                                                10n,
                                                                                                                                20n,
                                                                                                                                30n,
                                                                                                                              ],
                                                                                                                              y: [
                                                                                                                                99n,
                                                                                                                              ],
                                                                                                                            },
                                                                                                                          ),
                                                                                                                      );
                                                                                                                    })(
                                                                                                                      scope
                                                                                                                        .operators$
                                                                                                                        .equal(
                                                                                                                          scope
                                                                                                                            .cfg[
                                                                                                                              "asAttrsDefault"
                                                                                                                            ]["unique"],
                                                                                                                          {
                                                                                                                            a: [
                                                                                                                              1n,
                                                                                                                            ],
                                                                                                                            b: [
                                                                                                                              2n,
                                                                                                                            ],
                                                                                                                          },
                                                                                                                        ),
                                                                                                                    );
                                                                                                                  })(
                                                                                                                    scope
                                                                                                                      .operators$
                                                                                                                      .equal(
                                                                                                                        scope
                                                                                                                          .cfg[
                                                                                                                            "asAttrs"
                                                                                                                          ]["empty"],
                                                                                                                        {},
                                                                                                                      ),
                                                                                                                  );
                                                                                                                })(
                                                                                                                  scope
                                                                                                                    .operators$
                                                                                                                    .equal(
                                                                                                                      scope
                                                                                                                        .cfg[
                                                                                                                          "asAttrs"
                                                                                                                        ]["withForce"],
                                                                                                                      {
                                                                                                                        x: "forced",
                                                                                                                        y: "kept",
                                                                                                                      },
                                                                                                                    ),
                                                                                                                );
                                                                                                              })(
                                                                                                                scope
                                                                                                                  .operators$
                                                                                                                  .equal(
                                                                                                                    scope
                                                                                                                      .c[
                                                                                                                        "options"
                                                                                                                      ]["asAttrs"][
                                                                                                                        "valueMeta"
                                                                                                                      ]["attrs"][
                                                                                                                        "ordered"
                                                                                                                      ]["attrListValue"],
                                                                                                                    [
                                                                                                                      {
                                                                                                                        a: "a-val",
                                                                                                                      },
                                                                                                                      {
                                                                                                                        z: "z-val",
                                                                                                                      },
                                                                                                                    ],
                                                                                                                  ),
                                                                                                              );
                                                                                                            })(
                                                                                                              scope
                                                                                                                .operators$
                                                                                                                .equal(
                                                                                                                  scope
                                                                                                                    .cfg[
                                                                                                                      "asAttrs"
                                                                                                                    ]["ordered"],
                                                                                                                  {
                                                                                                                    a: "a-val",
                                                                                                                    z: "z-val",
                                                                                                                  },
                                                                                                                ),
                                                                                                            );
                                                                                                          })(
                                                                                                            scope
                                                                                                              .operators$
                                                                                                              .equal(
                                                                                                                scope
                                                                                                                  .c[
                                                                                                                    "options"
                                                                                                                  ]["asAttrs"][
                                                                                                                    "valueMeta"
                                                                                                                  ]["attrs"][
                                                                                                                    "duplicateKeys"
                                                                                                                  ]["attrListValue"],
                                                                                                                [
                                                                                                                  {
                                                                                                                    x: "first",
                                                                                                                  },
                                                                                                                  {
                                                                                                                    y: "only",
                                                                                                                  },
                                                                                                                  {
                                                                                                                    x: "last",
                                                                                                                  },
                                                                                                                ],
                                                                                                              ),
                                                                                                          );
                                                                                                        })(
                                                                                                          scope
                                                                                                            .operators$
                                                                                                            .equal(
                                                                                                              scope
                                                                                                                .cfg[
                                                                                                                  "asAttrs"
                                                                                                                ]["duplicateKeys"],
                                                                                                              {
                                                                                                                x: "last",
                                                                                                                y: "only",
                                                                                                              },
                                                                                                            ),
                                                                                                        );
                                                                                                      })(
                                                                                                        scope
                                                                                                          .operators$
                                                                                                          .equal(
                                                                                                            scope
                                                                                                              .c[
                                                                                                                "options"
                                                                                                              ]["asAttrs"][
                                                                                                                "valueMeta"
                                                                                                              ]["attrs"][
                                                                                                                "unique"
                                                                                                              ]["attrListValue"],
                                                                                                            [
                                                                                                              {
                                                                                                                a: "alpha",
                                                                                                              },
                                                                                                              {
                                                                                                                b: "beta",
                                                                                                              },
                                                                                                            ],
                                                                                                          ),
                                                                                                      );
                                                                                                    })(
                                                                                                      scope
                                                                                                        .operators$
                                                                                                        .equal(
                                                                                                          scope
                                                                                                            .cfg[
                                                                                                              "asAttrs"
                                                                                                            ]["unique"],
                                                                                                          {
                                                                                                            a: "alpha",
                                                                                                            b: "beta",
                                                                                                          },
                                                                                                        ),
                                                                                                    );
                                                                                                  })(
                                                                                                    scope
                                                                                                      .operators$
                                                                                                      .equal(
                                                                                                        scope
                                                                                                          .cfg[
                                                                                                            "eitherIntOrAttrListFallback"
                                                                                                          ],
                                                                                                        [{
                                                                                                          a: "hello",
                                                                                                        }],
                                                                                                      ),
                                                                                                  );
                                                                                                })(
                                                                                                  scope
                                                                                                    .operators$
                                                                                                    .equal(
                                                                                                      scope
                                                                                                        .cfg[
                                                                                                          "eitherIntOrAttrList"
                                                                                                        ],
                                                                                                      42n,
                                                                                                    ),
                                                                                                );
                                                                                              })(
                                                                                                scope
                                                                                                  .operators$
                                                                                                  .equal(
                                                                                                    scope
                                                                                                      .cfg[
                                                                                                        "eitherAttrListOrIntFallback"
                                                                                                      ],
                                                                                                    42n,
                                                                                                  ),
                                                                                              );
                                                                                            })(
                                                                                              scope
                                                                                                .operators$
                                                                                                .equal(
                                                                                                  scope
                                                                                                    .cfg[
                                                                                                      "eitherAttrListOrInt"
                                                                                                    ],
                                                                                                  [
                                                                                                    {
                                                                                                      a: "hello",
                                                                                                    },
                                                                                                    {
                                                                                                      b: "world",
                                                                                                    },
                                                                                                  ],
                                                                                                ),
                                                                                            );
                                                                                          })(
                                                                                            scope
                                                                                              .operators$
                                                                                              .equal(
                                                                                                scope
                                                                                                  .c[
                                                                                                    "options"
                                                                                                  ]["attrListInt"][
                                                                                                    "valueMeta"
                                                                                                  ]["attrs"][
                                                                                                    "optionalValueList"
                                                                                                  ]["attrList"],
                                                                                                [
                                                                                                  {},
                                                                                                  {},
                                                                                                ],
                                                                                              ),
                                                                                          );
                                                                                        })(
                                                                                          scope
                                                                                            .operators$
                                                                                            .equal(
                                                                                              scope
                                                                                                .c[
                                                                                                  "options"
                                                                                                ]["attrList"][
                                                                                                  "valueMeta"
                                                                                                ]["attrs"][
                                                                                                  "empty"
                                                                                                ]["attrList"],
                                                                                              [],
                                                                                            ),
                                                                                        );
                                                                                      })(
                                                                                        scope
                                                                                          .operators$
                                                                                          .equal(
                                                                                            scope
                                                                                              .c[
                                                                                                "options"
                                                                                              ]["attrList"][
                                                                                                "valueMeta"
                                                                                              ]["attrs"][
                                                                                                "mixed"
                                                                                              ]["attrList"],
                                                                                            [
                                                                                              {},
                                                                                              {},
                                                                                            ],
                                                                                          ),
                                                                                      );
                                                                                    })(
                                                                                      scope
                                                                                        .operators$
                                                                                        .equal(
                                                                                          scope
                                                                                            .c[
                                                                                              "options"
                                                                                            ]["attrList"][
                                                                                              "valueMeta"
                                                                                            ]["attrs"][
                                                                                              "attrsetOrdered"
                                                                                            ]["attrList"],
                                                                                          [
                                                                                            {},
                                                                                            {},
                                                                                          ],
                                                                                        ),
                                                                                    );
                                                                                  })(
                                                                                    scope
                                                                                      .operators$
                                                                                      .equal(
                                                                                        scope
                                                                                          .c[
                                                                                            "options"
                                                                                          ]["attrList"][
                                                                                            "valueMeta"
                                                                                          ]["attrs"][
                                                                                            "listInput"
                                                                                          ]["attrList"],
                                                                                        [
                                                                                          {},
                                                                                          {},
                                                                                        ],
                                                                                      ),
                                                                                  );
                                                                                })(
                                                                                  scope
                                                                                    .operators$
                                                                                    .equal(
                                                                                      scope
                                                                                        .apply$(
                                                                                          scope
                                                                                            .builtins[
                                                                                              "map"
                                                                                            ],
                                                                                          () =>
                                                                                            scope
                                                                                              .func$(
                                                                                                "m",
                                                                                                (
                                                                                                  scope,
                                                                                                ) =>
                                                                                                  scope
                                                                                                    .apply$(
                                                                                                      scope
                                                                                                        .builtins[
                                                                                                          "mapAttrs"
                                                                                                        ],
                                                                                                      () =>
                                                                                                        scope
                                                                                                          .func$(
                                                                                                            "n",
                                                                                                            (
                                                                                                              scope,
                                                                                                            ) =>
                                                                                                              scope
                                                                                                                .func$(
                                                                                                                  "o",
                                                                                                                  (
                                                                                                                    scope,
                                                                                                                  ) =>
                                                                                                                    scope
                                                                                                                      .o[
                                                                                                                        "description"
                                                                                                                      ],
                                                                                                                ),
                                                                                                          ),
                                                                                                      () =>
                                                                                                        scope
                                                                                                          .apply$(
                                                                                                            scope
                                                                                                              .builtins[
                                                                                                                "removeAttrs"
                                                                                                              ],
                                                                                                            () =>
                                                                                                              scope
                                                                                                                .m[
                                                                                                                  "configuration"
                                                                                                                ]["options"],
                                                                                                            ["_module"],
                                                                                                          ),
                                                                                                    ),
                                                                                              ),
                                                                                          () =>
                                                                                            scope
                                                                                              .c[
                                                                                                "options"
                                                                                              ]["attrListSubmodule"][
                                                                                                "valueMeta"
                                                                                              ]["attrList"],
                                                                                        ),
                                                                                      [
                                                                                        {
                                                                                          host:
                                                                                            "Hostname",
                                                                                          port:
                                                                                            "Port number",
                                                                                        },
                                                                                        {
                                                                                          host:
                                                                                            "Hostname",
                                                                                          port:
                                                                                            "Port number",
                                                                                        },
                                                                                      ],
                                                                                    ),
                                                                                );
                                                                              })(
                                                                                scope
                                                                                  .operators$
                                                                                  .equal(
                                                                                    scope
                                                                                      .apply$(
                                                                                        scope
                                                                                          .builtins[
                                                                                            "map"
                                                                                          ],
                                                                                        () =>
                                                                                          scope
                                                                                            .func$(
                                                                                              "m",
                                                                                              (
                                                                                                scope,
                                                                                              ) =>
                                                                                                scope
                                                                                                  .m[
                                                                                                    "configuration"
                                                                                                  ]["config"],
                                                                                            ),
                                                                                        () =>
                                                                                          scope
                                                                                            .c[
                                                                                              "options"
                                                                                            ]["attrListSubmodule"][
                                                                                              "valueMeta"
                                                                                            ]["attrList"],
                                                                                      ),
                                                                                    [
                                                                                      {
                                                                                        host:
                                                                                          "localhost",
                                                                                        port:
                                                                                          80n,
                                                                                      },
                                                                                      {
                                                                                        host:
                                                                                          "dbhost",
                                                                                        port:
                                                                                          5432n,
                                                                                      },
                                                                                    ],
                                                                                  ),
                                                                              );
                                                                            })(
                                                                              scope
                                                                                .operators$
                                                                                .equal(
                                                                                  scope
                                                                                    .cfg[
                                                                                      "attrListSubmodule"
                                                                                    ],
                                                                                  [
                                                                                    {
                                                                                      web:
                                                                                        {
                                                                                          host:
                                                                                            "localhost",
                                                                                          port:
                                                                                            80n,
                                                                                        },
                                                                                    },
                                                                                    {
                                                                                      db:
                                                                                        {
                                                                                          host:
                                                                                            "dbhost",
                                                                                          port:
                                                                                            5432n,
                                                                                        },
                                                                                    },
                                                                                  ],
                                                                                ),
                                                                            );
                                                                          })(
                                                                            scope
                                                                              .operators$
                                                                              .equal(
                                                                                scope
                                                                                  .cfg[
                                                                                    "attrListInt"
                                                                                  ]["optionalValueAttrs"],
                                                                                [
                                                                                  {
                                                                                    a: 1n,
                                                                                  },
                                                                                  {
                                                                                    c: 3n,
                                                                                  },
                                                                                ],
                                                                              ),
                                                                          );
                                                                        })(
                                                                          scope
                                                                            .operators$
                                                                            .equal(
                                                                              scope
                                                                                .cfg[
                                                                                  "attrListInt"
                                                                                ]["optionalValueList"],
                                                                              [
                                                                                {
                                                                                  a: 1n,
                                                                                },
                                                                                {
                                                                                  c: 3n,
                                                                                },
                                                                              ],
                                                                            ),
                                                                        );
                                                                      })(
                                                                        scope
                                                                          .operators$
                                                                          .equal(
                                                                            scope
                                                                              .cfg[
                                                                                "attrList"
                                                                              ]["nestAttrsForceOfOrder"],
                                                                            [{
                                                                              z: "earliest",
                                                                            }, {
                                                                              y: "plain-early",
                                                                            }, {
                                                                              w: "mid",
                                                                            }, {
                                                                              x: "forced-late",
                                                                            }],
                                                                          ),
                                                                      );
                                                                    })(
                                                                      scope
                                                                        .operators$
                                                                        .equal(
                                                                          scope
                                                                            .cfg[
                                                                              "attrList"
                                                                            ]["nestAttrsOrderOfForce"],
                                                                          [{
                                                                            z: "earliest",
                                                                          }, {
                                                                            y: "plain-early",
                                                                          }, {
                                                                            w: "mid",
                                                                          }, {
                                                                            x: "forced-late",
                                                                          }],
                                                                        ),
                                                                    );
                                                                  })(
                                                                    scope
                                                                      .operators$
                                                                      .equal(
                                                                        scope
                                                                          .cfg[
                                                                            "attrList"
                                                                          ]["nestListForceOfOrder"],
                                                                        [{
                                                                          z: "earliest",
                                                                        }, {
                                                                          y: "plain-early",
                                                                        }, {
                                                                          w: "mid",
                                                                        }, {
                                                                          x: "forced-late",
                                                                        }],
                                                                      ),
                                                                  );
                                                                })(
                                                                  scope
                                                                    .operators$
                                                                    .equal(
                                                                      scope
                                                                        .cfg[
                                                                          "attrList"
                                                                        ]["nestListOrderOfForce"],
                                                                      [{
                                                                        z: "earliest",
                                                                      }, {
                                                                        y: "plain-early",
                                                                      }, {
                                                                        w: "mid",
                                                                      }, {
                                                                        x: "forced-late",
                                                                      }],
                                                                    ),
                                                                );
                                                              })(
                                                                scope.operators$
                                                                  .equal(
                                                                    scope
                                                                      .cfg[
                                                                        "attrList"
                                                                      ]["nestListOrderForce"],
                                                                    [{
                                                                      z: "earliest",
                                                                    }, {
                                                                      x: "forced-early",
                                                                    }, {
                                                                      y: "late",
                                                                    }],
                                                                  ),
                                                              );
                                                            })(
                                                              scope.operators$
                                                                .equal(
                                                                  scope
                                                                    .cfg[
                                                                      "attrList"
                                                                    ]["forceMixedFormats"],
                                                                  [{
                                                                    y: "list y",
                                                                  }, {
                                                                    x: "attrset forced x",
                                                                  }],
                                                                ),
                                                            );
                                                          })(
                                                            scope.operators$
                                                              .equal(
                                                                scope
                                                                  .cfg[
                                                                    "attrList"
                                                                  ]["forcePartialAttrs"],
                                                                [{
                                                                  y: "normal y",
                                                                }, {
                                                                  x: "forced x",
                                                                }],
                                                              ),
                                                          );
                                                        })(
                                                          scope.operators$
                                                            .equal(
                                                              scope
                                                                .cfg[
                                                                  "attrList"
                                                                ]["forceRepeatedKeyAttrs"],
                                                              [{ y: "kept" }, {
                                                                x: "forced",
                                                              }],
                                                            ),
                                                        );
                                                      })(
                                                        scope.operators$.equal(
                                                          scope
                                                            .cfg["attrList"][
                                                              "forceRepeatedKeyMerge"
                                                            ],
                                                          [{ x: "forced" }],
                                                        ),
                                                      );
                                                    })(
                                                      scope.operators$.equal(
                                                        scope
                                                          .cfg["attrList"][
                                                            "forceRepeatedKey"
                                                          ],
                                                        [{ x: "wins" }, {
                                                          x: "wins 2",
                                                        }],
                                                      ),
                                                    );
                                                  })(
                                                    scope.operators$.equal(
                                                      scope
                                                        .cfg["attrList"][
                                                          "forceAttrset"
                                                        ],
                                                      [{ y: "y-val" }, {
                                                        x: "x-val",
                                                      }],
                                                    ),
                                                  );
                                                })(
                                                  scope.operators$.equal(
                                                    scope
                                                      .cfg["attrListInt"][
                                                        "forceElementValue"
                                                      ],
                                                    [{ a: 42n }, { b: 2n }],
                                                  ),
                                                );
                                              })(
                                                scope.operators$.equal(
                                                  scope
                                                    .cfg["attrList"][
                                                      "forceWithOrder"
                                                    ],
                                                  [{ first: "before" }, {
                                                    second: "after",
                                                  }],
                                                ),
                                              );
                                            })(
                                              scope.operators$.equal(
                                                scope
                                                  .cfg["attrList"]["withForce"],
                                                [{ forced: "wins" }],
                                              ),
                                            );
                                          })(
                                            scope.operators$.equal(
                                              scope
                                                .cfg["attrList"]["withDefault"],
                                              [{ normal: "wins" }],
                                            ),
                                          );
                                        })(
                                          scope.operators$.equal(
                                            scope
                                              .cfg["attrList"]["withOverride"],
                                            [{ winner: "wins" }],
                                          ),
                                        );
                                      })(
                                        scope.operators$.equal(
                                          scope.cfg["attrList"]["withMkIf"],
                                          [{ yes: "included" }],
                                        ),
                                      );
                                    })(
                                      scope.operators$.equal(
                                        scope.cfg["attrList"]["beforeAfter"],
                                        [{ a: "before" }, { m: "default" }, {
                                          z: "after",
                                        }],
                                      ),
                                    );
                                  })(
                                    scope.operators$.equal(
                                      scope.cfg["attrList"]["ordering"],
                                      [
                                        { first: "first" },
                                        { middle: "middle" },
                                        { last: "last" },
                                      ],
                                    ),
                                  );
                                })(
                                  scope.operators$.equal(
                                    scope.cfg["attrList"]["listDefaultPrio"],
                                    [{ before: "before" }, {
                                      mid: "list-entry",
                                    }, { after: "after" }],
                                  ),
                                );
                              })(
                                scope.operators$.equal(
                                  scope.cfg["attrList"]["listOrdering"],
                                  [{ a: "before" }, { m: "default" }, {
                                    z: "after",
                                  }],
                                ),
                              );
                            })(
                              scope.operators$.equal(
                                scope.cfg["attrList"]["empty"],
                                [],
                              ),
                            );
                          })(
                            scope.operators$.equal(
                              scope.apply$(scope.builtins["length"], () =>
                                scope.cfg["attrList"]["attrsetNoOrder"]),
                              2n,
                            ),
                          );
                        })(
                          scope.operators$.equal(
                            scope.cfg["attrListInt"]["multiModule"],
                            [{ b: 2n }, { a: 1n }],
                          ),
                        );
                      })(
                        scope.operators$.equal(scope.cfg["attrList"]["mixed"], [
                          { n: "from-attrset" },
                          { m: "from-list" },
                        ]),
                      );
                    })(
                      scope.operators$.equal(
                        scope.cfg["attrList"]["attrsetOrdered"],
                        [{ y: "y-val" }, { x: "x-val" }],
                      ),
                    );
                  })(
                    scope.operators$.equal(scope.cfg["attrList"]["listInput"], [
                      { a: "alpha" },
                      { b: "beta" },
                    ]),
                  )
                ),
            }),
        })
      ))
  ),
);
