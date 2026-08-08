import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./checkAndMergeCompat.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      pkgs: (scope) =>
        scope.apply$(
          scope.import,
          new scope.Path$([
            new URL("../../../nixpkgs.lib", import.meta.url).pathname,
          ], []),
          {},
        ),
      currLibPath:
        (new scope.Path$([new URL("../../lib", import.meta.url).pathname], [])),
      prevLibPath: (scope) =>
        scope.str$(
          () => [
            scope.apply$(scope.pkgs["fetchFromGitHub"], {
              owner: "nixos",
              repo: "nixpkgs",
              rev: "bcf94dd3f07189b7475d823c8d67d08b58289905",
              hash: "sha256-MuMiIY3MX5pFSOCvutmmRhV6RD0R3CG0Hmazkg8cMFI=",
            }),
            "/lib",
          ]
        ),
    }, (scope) =>
      scope.let$({
        lib: (scope) => scope.apply$(scope.import, () => scope.currLibPath),
        lib_with_merge_v2: (scope) => scope.lib,
        lib_with_merge_v1: (scope) =>
          scope.apply$(scope.import, () => scope.prevLibPath),
        getMatrix: (scope) =>
          scope.func$({
            getType: null,
            outerTypeName: scope.nixArg$.NoDefault,
            innerTypeName: scope.nixArg$.NoDefault,
            value: scope.nixArg$.NoDefault,
            testAttrs: scope.nixArg$.NoDefault,
          }, (scope) =>
            scope.let$({
              ...scope.deepSet$(["evalModules", "call_v1"], (scope) =>
                scope.lib_with_merge_v1["evalModules"]),
              ...scope.deepSet$(["evalModules", "call_v2"], (scope) =>
                scope.lib_with_merge_v2["evalModules"]),
              ...scope.deepSet$(["outerTypes", "outer_v1"], (scope) =>
                scope.lib_with_merge_v1["types"]),
              ...scope.deepSet$(["outerTypes", "outer_v2"], (scope) =>
                scope.lib_with_merge_v2["types"]),
              ...scope.deepSet$(["innerTypes", "inner_v1"], (scope) =>
                scope.lib_with_merge_v1["types"]),
              ...scope.deepSet$(["innerTypes", "inner_v2"], (scope) =>
                scope.lib_with_merge_v2["types"]),
            }).in$((scope) =>
              scope.apply$(scope.lib["mapAttrs"], () =>
                scope.func$("_", (scope) =>
                  scope.func$("evalModules", (scope) =>
                    scope.apply$(scope.lib["mapAttrs"], () =>
                      scope.func$("_", (scope) =>
                        scope.func$("outerTypes", (scope) =>
                          scope.apply$(scope.lib["mapAttrs"], () =>
                            scope.func$("_", (scope) =>
                              scope.func$("innerTypes", (scope) =>
                                scope.attrSet$({
                                  ...scope.deepSet$([
                                    scope.str$(
                                      () => [
                                        "test_",
                                        scope.outerTypeName,
                                        "_",
                                        scope.innerTypeName,
                                      ]
                                    ),
                                  ], () =>
                                    scope.operators$.merge(
                                      scope.testAttrs,
                                      scope.attrSet$({
                                        expr: () =>
                                          scope.apply$(scope.evalModules, () =>
                                            scope.attrSet$({
                                              modules:
                                                () => [
                                                  scope.func$("m", (scope) =>
                                                    scope.attrSet$({
                                                      ...scope.deepSet$([
                                                        "options",
                                                        "foo",
                                                      ], () =>
                                                        scope.apply$(
                                                          scope
                                                            .m["lib"][
                                                              "mkOption"
                                                            ],
                                                          () =>
                                                            scope.attrSet$({
                                                              type: () =>
                                                                scope.if$(
                                                                  scope
                                                                    .operators$
                                                                    .notEqual(
                                                                      scope
                                                                        .getType,
                                                                      null,
                                                                    ),
                                                                ).then$(() =>
                                                                  scope.apply$(
                                                                    scope
                                                                      .getType,
                                                                    () =>
                                                                      scope
                                                                        .outerTypes,
                                                                    () =>
                                                                      scope
                                                                        .innerTypes,
                                                                  )
                                                                ).else$(() =>
                                                                  scope.apply$(
                                                                    scope
                                                                      .outerTypes[
                                                                        scope
                                                                          .outerTypeName
                                                                      ],
                                                                    () =>
                                                                      scope
                                                                        .innerTypes[
                                                                          scope
                                                                            .innerTypeName
                                                                        ],
                                                                  )
                                                                ),
                                                              default: () =>
                                                                scope.value,
                                                            }),
                                                        )),
                                                    })),
                                                ],
                                            }))["config"]["foo"],
                                      }),
                                    )),
                                }))), () =>
                            scope.innerTypes))), () =>
                      scope.outerTypes))), () =>
                scope.evalModules)
            )),
      }).in$((scope) =>
        scope.attrSet$({
          attrsOf_str_ok: () =>
            scope.apply$(scope.getMatrix, {
              outerTypeName: "attrsOf",
              innerTypeName: "str",
              value: { bar: "test" },
              testAttrs: { expected: { bar: "test" } },
            }),
          attrsOf_str_err_inner: () =>
            scope.apply$(scope.getMatrix, {
              outerTypeName: "attrsOf",
              innerTypeName: "str",
              value: { bar: 1n },
              testAttrs: {
                expectedError: {
                  type: "ThrownError",
                  msg:
                    "A definition for option `foo.bar' is not of type `string'.*",
                },
              },
            }),
          attrsOf_str_err_outer: () =>
            scope.apply$(scope.getMatrix, {
              outerTypeName: "attrsOf",
              innerTypeName: "str",
              value: ["foo"],
              testAttrs: {
                expectedError: {
                  type: "ThrownError",
                  msg:
                    "A definition for option `foo' is not of type `attribute set of string'.*",
                },
              },
            }),
          listOf_str_ok: () =>
            scope.apply$(scope.getMatrix, {
              outerTypeName: "listOf",
              innerTypeName: "str",
              value: ["foo", "bar"],
              testAttrs: { expected: ["foo", "bar"] },
            }),
          listOf_str_err_inner: () =>
            scope.apply$(scope.getMatrix, {
              outerTypeName: "listOf",
              innerTypeName: "str",
              value: ["foo", 1n],
              testAttrs: {
                expectedError: {
                  type: "ThrownError",
                  msg:
                    "A definition for option `foo.\"\\[definition 1-entry 2\\]\"' is not of type `string'.",
                },
              },
            }),
          listOf_str_err_outer: () =>
            scope.apply$(scope.getMatrix, {
              outerTypeName: "listOf",
              innerTypeName: "str",
              value: { foo: 42n },
              testAttrs: {
                expectedError: {
                  type: "ThrownError",
                  msg:
                    "A definition for option `foo' is not of type `list of string'.*",
                },
              },
            }),
          attrsOf_submodule_ok: () =>
            scope.apply$(scope.getMatrix, () =>
              scope.attrSet$({
                getType: () =>
                  scope.func$("a", (scope) =>
                    scope.func$("b", (scope) =>
                      scope.apply$(scope.a["attrsOf"], () =>
                        scope.apply$(scope.b["submodule"], () =>
                          scope.func$("m", (scope) =>
                            scope.attrSet$({
                              ...scope.deepSet$(["options", "nested"], () =>
                                scope.apply$(scope.m["lib"]["mkOption"], () =>
                                  scope.attrSet$({
                                    type: () =>
                                      scope.m["lib"]["types"]["str"],
                                  }))),
                            })))))),
                outerTypeName: "attrsOf",
                innerTypeName: "submodule",
                value: { foo: { nested: "test1" }, bar: { nested: "test2" } },
                testAttrs: {
                  expected: {
                    foo: { nested: "test1" },
                    bar: { nested: "test2" },
                  },
                },
              })),
          attrsOf_submodule_err_inner: () =>
            scope.apply$(scope.getMatrix, () =>
              scope.attrSet$({
                outerTypeName: "attrsOf",
                innerTypeName: "submodule",
                getType: () =>
                  scope.func$("a", (scope) =>
                    scope.func$("b", (scope) =>
                      scope.apply$(scope.a["attrsOf"], () =>
                        scope.apply$(scope.b["submodule"], () =>
                          scope.func$("m", (scope) =>
                            scope.attrSet$({
                              ...scope.deepSet$(["options", "nested"], () =>
                                scope.apply$(scope.m["lib"]["mkOption"], () =>
                                  scope.attrSet$({
                                    type: () =>
                                      scope.m["lib"]["types"]["str"],
                                  }))),
                            })))))),
                value: { foo: [1n], bar: { nested: "test2" } },
                testAttrs: {
                  expectedError: {
                    type: "ThrownError",
                    msg:
                      "A definition for option `foo.foo' is not of type `submodule'.*",
                  },
                },
              })),
          attrsOf_submodule_err_outer: () =>
            scope.apply$(scope.getMatrix, () =>
              scope.attrSet$({
                outerTypeName: "attrsOf",
                innerTypeName: "submodule",
                getType: () =>
                  scope.func$("a", (scope) =>
                    scope.func$("b", (scope) =>
                      scope.apply$(scope.a["attrsOf"], () =>
                        scope.apply$(scope.b["submodule"], () =>
                          scope.func$("m", (scope) =>
                            scope.attrSet$({
                              ...scope.deepSet$(["options", "nested"], () =>
                                scope.apply$(scope.m["lib"]["mkOption"], () =>
                                  scope.attrSet$({
                                    type: () =>
                                      scope.m["lib"]["types"]["str"],
                                  }))),
                            })))))),
                value: [123n],
                testAttrs: {
                  expectedError: {
                    type: "ThrownError",
                    msg:
                      "A definition for option `foo' is not of type `attribute set of \\(submodule\\).*",
                  },
                },
              })),
          either_str_attrsOf_ok: () =>
            scope.apply$(scope.getMatrix, () =>
              scope.attrSet$({
                outerTypeName: "either",
                innerTypeName: "str_or_attrsOf_str",
                getType: () =>
                  scope.func$("a", (scope) =>
                    scope.func$("b", (scope) =>
                      scope.apply$(scope.a["either"], () =>
                        scope.b["str"], () =>
                        scope.apply$(scope.b["attrsOf"], () =>
                          scope.a["str"])))),
                value: "string value",
                testAttrs: { expected: "string value" },
              })),
          either_str_attrsOf_err_1: () =>
            scope.apply$(scope.getMatrix, () =>
              scope.attrSet$({
                outerTypeName: "either",
                innerTypeName: "str_or_attrsOf_str",
                getType: () =>
                  scope.func$("a", (scope) =>
                    scope.func$("b", (scope) =>
                      scope.apply$(scope.a["either"], () =>
                        scope.b["str"], () =>
                        scope.apply$(scope.b["attrsOf"], () =>
                          scope.a["str"])))),
                value: 1n,
                testAttrs: {
                  expectedError: {
                    type: "ThrownError",
                    msg:
                      "A definition for option `foo' is not of type `string or attribute set of string'.*",
                  },
                },
              })),
          either_str_attrsOf_err_2: () =>
            scope.apply$(scope.getMatrix, () =>
              scope.attrSet$({
                outerTypeName: "either",
                innerTypeName: "str_or_attrsOf_str",
                getType: () =>
                  scope.func$("a", (scope) =>
                    scope.func$("b", (scope) =>
                      scope.apply$(scope.a["either"], () =>
                        scope.b["str"], () =>
                        scope.apply$(scope.b["attrsOf"], () =>
                          scope.a["str"])))),
                value: { bar: 1n },
                testAttrs: {
                  expectedError: {
                    type: "ThrownError",
                    msg:
                      "A definition for option `foo.bar' is not of type `string'.*",
                  },
                },
              })),
          coerce_attrsOf_str_to_listOf_str_run: () =>
            scope.apply$(scope.getMatrix, () =>
              scope.attrSet$({
                outerTypeName: "coercedTo",
                innerTypeName: "attrsOf_str->listOf_str",
                getType: () =>
                  scope.func$("a", (scope) =>
                    scope.func$("b", (scope) =>
                      scope.apply$(scope.a["coercedTo"], () =>
                        scope.apply$(scope.b["attrsOf"], () =>
                          scope.b["str"]), () =>
                        scope.builtins["attrValues"], () =>
                        scope.apply$(scope.b["listOf"], () =>
                          scope.b["str"])))),
                value: { bar: "test1", foo: "test2" },
                testAttrs: { expected: ["test1", "test2"] },
              })),
          coerce_attrsOf_str_to_listOf_str_final: () =>
            scope.apply$(scope.getMatrix, () =>
              scope.attrSet$({
                outerTypeName: "coercedTo",
                innerTypeName: "attrsOf_str->listOf_str",
                getType: () =>
                  scope.func$("a", (scope) =>
                    scope.func$("b", (scope) =>
                      scope.apply$(scope.a["coercedTo"], () =>
                        scope.apply$(scope.b["attrsOf"], () =>
                          scope.b["str"]), () =>
                        scope.apply$(scope.abort, "This shouldnt run"), () =>
                        scope.apply$(scope.b["listOf"], () =>
                          scope.b["str"])))),
                value: ["test1", "test2"],
                testAttrs: { expected: ["test1", "test2"] },
              })),
          coerce_attrsOf_str_to_listOf_err_coercer_input: () =>
            scope.apply$(scope.getMatrix, () =>
              scope.attrSet$({
                outerTypeName: "coercedTo",
                innerTypeName: "attrsOf_str->listOf_str",
                getType: () =>
                  scope.func$("a", (scope) =>
                    scope.func$("b", (scope) =>
                      scope.apply$(scope.a["coercedTo"], () =>
                        scope.apply$(scope.b["attrsOf"], () =>
                          scope.b["str"]), () =>
                        scope.builtins["attrValues"], () =>
                        scope.apply$(scope.b["listOf"], () =>
                          scope.b["str"])))),
                value: [{}, {}],
                testAttrs: {
                  expectedError: {
                    type: "ThrownError",
                    msg:
                      "A definition for option `foo.\"\\[definition 1-entry 1\\]\"' is not of type `string'.*",
                  },
                },
              })),
          coerce_attrsOf_str_to_listOf_err_coercer_ouput: () =>
            scope.apply$(scope.getMatrix, () =>
              scope.attrSet$({
                outerTypeName: "coercedTo",
                innerTypeName: "attrsOf_str->listOf_str",
                getType: () =>
                  scope.func$("a", (scope) =>
                    scope.func$("b", (scope) =>
                      scope.apply$(scope.a["coercedTo"], () =>
                        scope.apply$(scope.b["attrsOf"], () =>
                          scope.b["str"]), () =>
                        scope.builtins["attrValues"], () =>
                        scope.apply$(scope.b["listOf"], () =>
                          scope.b["str"])))),
                value: { foo: { bar: 1n } },
                testAttrs: {
                  expectedError: {
                    type: "ThrownError",
                    msg:
                      "A definition for option `foo.\"\\[definition 1-entry 1\\]\"' is not of type `string'.*",
                  },
                },
              })),
          coerce_str_to_int_coercer_ouput: () =>
            scope.apply$(scope.getMatrix, () =>
              scope.attrSet$({
                outerTypeName: "coercedTo",
                innerTypeName: "int->str",
                getType: () =>
                  scope.func$("a", (scope) =>
                    scope.func$("b", (scope) =>
                      scope.apply$(scope.a["coercedTo"], () =>
                        scope.b["int"], () =>
                        scope.toString, () =>
                        scope.a["str"]))),
                value: [],
                testAttrs: {
                  expectedError: {
                    type: "ThrownError",
                    msg:
                      "A definition for option `foo' is not of type `string or signed integer convertible to it.*",
                  },
                },
              })),
          submodule_with_ok: () =>
            scope.apply$(scope.getMatrix, () =>
              scope.attrSet$({
                outerTypeName: "submoduleWith",
                innerTypeName: "mixed_types",
                getType: () =>
                  scope.func$("a", (scope) =>
                    scope.func$("b", (scope) =>
                      scope.apply$(scope.a["submodule"], () =>
                        scope.func$("m", (scope) =>
                          scope.attrSet$({
                            ...scope.deepSet$(["options", "attrs"], () =>
                              scope.apply$(scope.m["lib"]["mkOption"], () =>
                                scope.attrSet$({
                                  type: () =>
                                    scope.apply$(scope.b["attrsOf"], () =>
                                      scope.b["str"]),
                                }))),
                            ...scope.deepSet$(["options", "list"], () =>
                              scope.apply$(scope.m["lib"]["mkOption"], () =>
                                scope.attrSet$({
                                  type: () =>
                                    scope.apply$(scope.b["listOf"], () =>
                                      scope.b["str"]),
                                }))),
                            ...scope.deepSet$(["options", "either"], () =>
                              scope.apply$(scope.m["lib"]["mkOption"], () =>
                                scope.attrSet$({
                                  type: () =>
                                    scope.apply$(scope.b["either"], () =>
                                      scope.a["str"], () =>
                                      scope.a["int"]),
                                }))),
                          }))))),
                value: {
                  attrs: { foo: "bar" },
                  list: ["foo", "bar"],
                  either: 123n,
                },
                testAttrs: {
                  expected: {
                    attrs: { foo: "bar" },
                    list: ["foo", "bar"],
                    either: 123n,
                  },
                },
              })),
        })
      ))
  ),
);
