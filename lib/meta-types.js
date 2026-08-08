import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./meta-types.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        isString: (scope) => scope.lib["isString"],
        isInt: (scope) => scope.lib["isInt"],
        isAttrs: (scope) => scope.lib["isAttrs"],
        isList: (scope) => scope.lib["isList"],
        isDerivation: (scope) => scope.lib["isDerivation"],
        all: (scope) => scope.lib["all"],
        any: (scope) => scope.lib["any"],
        attrNames: (scope) => scope.lib["attrNames"],
        attrValues: (scope) => scope.lib["attrValues"],
        concatMap: (scope) => scope.lib["concatMap"],
        isFunction: (scope) => scope.lib["isFunction"],
        isBool: (scope) => scope.lib["isBool"],
        concatStringsSep: (scope) => scope.lib["concatStringsSep"],
        concatMapStringsSep: (scope) => scope.lib["concatMapStringsSep"],
        isFloat: (scope) => scope.lib["isFloat"],
        elem: (scope) => scope.lib["elem"],
        mapAttrs: (scope) => scope.lib["mapAttrs"],
        isTypeDef: (scope) =>
          scope.func$(
            "t",
            (scope) => (((((scope.apply$(scope.isAttrs, () =>
              scope.t)) && (scope.operators$.hasAttr(scope.t, "name"))) &&
              (scope.apply$(scope.isString, () =>
                scope.t["name"]))) &&
              (scope.operators$.hasAttr(scope.t, "verify"))) &&
              (scope.apply$(scope.isFunction, () => scope.t["verify"]))),
          ),
      }).in$((scope) =>
        scope.apply$(scope.lib["fix"], () =>
          scope.func$("self", (scope) =>
            scope.attrSet$({
              errors: () =>
                scope.func$("t", (scope) =>
                  scope.operators$.selectOrDefault(scope.t, ["errors"], () =>
                    scope.func$("ctx", (scope) =>
                      scope.func$(
                        "v",
                        (
                          scope,
                        ) => [
                          scope.str$(
                            () => [
                              scope.ctx,
                              ": Invalid value; expected ",
                              scope.t["name"],
                              ", got\n    ",
                              scope.apply$(
                                scope.lib["generators"]["toPretty"],
                                { indent: "    " },
                                () => scope.v,
                              ),
                            ]
                          ),
                        ],
                      )))),
              string: () =>
                scope.attrSet$({
                  name: "string",
                  verify: () => scope.isString,
                }),
              str: () => scope.self["string"],
              any: () =>
                scope.attrSet$({
                  name: "any",
                  verify: () => scope.func$("_", (scope) => true),
                }),
              int: () =>
                scope.attrSet$({
                  name: "int",
                  verify: () => scope.isInt,
                }),
              float: () =>
                scope.attrSet$({
                  name: "float",
                  verify: () => scope.isFloat,
                }),
              bool: () =>
                scope.attrSet$({
                  name: "bool",
                  verify: () => scope.isBool,
                }),
              attrs: () =>
                scope.attrSet$({
                  name: "attrs",
                  verify: () => scope.isAttrs,
                }),
              list: () =>
                scope.attrSet$({
                  name: "list",
                  verify: () => scope.isList,
                }),
              attrsOf: () =>
                scope.func$("t", (scope) =>
                  ((_cond) => {
                    if (!_cond) {
                      throw new Error("assertion failed: " + "isTypeDef t");
                    }
                    return scope.let$({
                      verify: (scope) => scope.t["verify"],
                    }).in$((scope) =>
                      scope.attrSet$({
                        name: () =>
                          scope.str$(() => ["attrsOf<", scope.t["name"], ">"]),
                        verify: () =>
                          scope.if$(
                            scope.operators$.equal(scope.t, scope.self["any"]),
                          ).then$(() => scope.isAttrs).else$(() =>
                            scope.func$(
                              "attrs",
                              (
                                scope,
                              ) => ((scope.apply$(
                                scope.isAttrs,
                                () => scope.attrs,
                              )) && (scope.apply$(scope.all, () =>
                                scope.verify, () =>
                                scope.apply$(scope.attrValues, () =>
                                  scope.attrs)))),
                            )
                          ),
                        errors: () =>
                          scope.func$("ctx", (scope) =>
                            scope.func$("attrs", (scope) =>
                              scope.if$(
                                scope.operators$.negate(
                                  scope.apply$(scope.isAttrs, () =>
                                    scope.attrs),
                                ),
                              ).then$(() =>
                                scope.apply$(scope.self["errors"], () =>
                                  scope.self["attrs"], () =>
                                  scope.ctx, () =>
                                  scope.attrs)
                              ).else$(() =>
                                scope.apply$(scope.concatMap, () =>
                                  scope.func$("name", (scope) =>
                                    scope.apply$(
                                      scope.lib["optionals"],
                                      () => (scope.operators$.negate(
                                        scope.apply$(scope.verify, () =>
                                          scope.attrs[scope.name]),
                                      )),
                                      () =>
                                        scope.apply$(
                                          scope.self["errors"],
                                          () => scope.t,
                                          () =>
                                            scope.str$(
                                              () => [scope.ctx, ".", scope.name]
                                            ),
                                          () => scope.attrs[scope.name],
                                        ),
                                    )), () =>
                                  scope.apply$(scope.attrNames, () =>
                                    scope.attrs))
                              ))),
                      })
                    );
                  })(scope.apply$(scope.isTypeDef, () =>
                    scope.t))),
              derivation: () =>
                scope.attrSet$({
                  name: "derivation",
                  verify: () =>
                    scope.isDerivation,
                }),
              listOf: () =>
                scope.func$("t", (scope) =>
                  ((_cond) => {
                    if (!_cond) {
                      throw new Error("assertion failed: " + "isTypeDef t");
                    }
                    return scope.let$({
                      verify: (scope) =>
                        scope.t["verify"],
                    }).in$((scope) =>
                      scope.attrSet$({
                        name: () =>
                          scope.str$(() => ["listOf<", scope.t["name"], ">"]),
                        verify: () =>
                          scope.if$(
                            scope.operators$.equal(scope.t, scope.self["any"]),
                          ).then$(() =>
                            scope.isList
                          ).else$(() =>
                            scope.func$(
                              "v",
                              (
                                scope,
                              ) => ((scope.apply$(
                                scope.isList,
                                () => scope.v,
                              )) && (scope.apply$(scope.all, () =>
                                scope.verify, () =>
                                scope.v))),
                            )
                          ),
                        errors: () =>
                          scope.func$("ctx", (scope) =>
                            scope.func$("v", (scope) =>
                              scope.if$(
                                scope.operators$.negate(
                                  scope.apply$(scope.isList, () =>
                                    scope.v),
                                ),
                              ).then$(() =>
                                scope.apply$(scope.self["errors"], () =>
                                  scope.self["list"], () =>
                                  scope.ctx, () =>
                                  scope.v)
                              ).else$(() =>
                                scope.apply$(scope.lib["concatMap"], () =>
                                  scope.func$({
                                    valid: scope.nixArg$.NoDefault,
                                    errors: scope.nixArg$.NoDefault,
                                  }, (scope) =>
                                    scope.errors), () =>
                                  scope.apply$(
                                    scope.lib["filter"],
                                    () =>
                                      scope.func$(
                                        {
                                          valid: scope.nixArg$.NoDefault,
                                          errors: scope.nixArg$.NoDefault,
                                        },
                                        (scope) =>
                                          scope.operators$.negate(scope.valid),
                                      ),
                                    () =>
                                      scope.apply$(scope.lib["imap0"], () =>
                                        scope.func$("i", (scope) =>
                                          scope.func$("el", (scope) =>
                                            scope.attrSet$({
                                              valid: () =>
                                                scope.apply$(
                                                  scope.verify,
                                                  () => scope.el,
                                                ),
                                              errors: () =>
                                                scope.apply$(
                                                  scope.self["errors"],
                                                  () => scope.t,
                                                  () =>
                                                    scope.str$(
                                                      () => [
                                                        scope.ctx,
                                                        ".",
                                                        scope.apply$(
                                                          scope.toString,
                                                          () => scope.i,
                                                        ),
                                                      ]
                                                    ),
                                                  () => scope.el,
                                                ),
                                            }))), () => scope.v),
                                  ))
                              ))),
                      })
                    );
                  })(scope.apply$(scope.isTypeDef, () =>
                    scope.t))),
              union: () =>
                scope.func$("types", (scope) =>
                  ((_cond) => {
                    if (!_cond) {
                      throw new Error(
                        "assertion failed: " + "all isTypeDef types",
                      );
                    }
                    return scope.let$({
                      funcs: (scope) =>
                        scope.apply$(scope.map, () =>
                          scope.func$("t", (scope) =>
                            scope.t["verify"]), () =>
                          scope.types),
                    }).in$((scope) =>
                      scope.attrSet$({
                        name: () =>
                          scope.str$(
                            () => [
                              "union<",
                              scope.apply$(scope.concatStringsSep, ",", () =>
                                scope.apply$(
                                  scope.map,
                                  () =>
                                    scope.func$(
                                      "t",
                                      (scope) => scope.t["name"],
                                    ),
                                  () => scope.types,
                                )),
                              ">",
                            ]
                          ),
                        verify: () =>
                          scope.func$("v", (scope) =>
                            scope.apply$(scope.any, () =>
                              scope.func$("func", (scope) =>
                                scope.apply$(scope.func, () =>
                                  scope.v)), () =>
                              scope.funcs)),
                      })
                    );
                  })(scope.apply$(scope.all, () =>
                    scope.isTypeDef, () =>
                    scope.types))),
              intersection: () =>
                scope.func$("types", (scope) =>
                  ((_cond) => {
                    if (!_cond) {
                      throw new Error(
                        "assertion failed: " + "all isTypeDef types",
                      );
                    }
                    return scope.let$({
                      funcs: (scope) =>
                        scope.apply$(scope.map, () =>
                          scope.func$("t", (scope) =>
                            scope.t["verify"]), () =>
                          scope.types),
                    }).in$((scope) =>
                      scope.attrSet$({
                        name: () =>
                          scope.str$(
                            () => [
                              "intersection<",
                              scope.apply$(scope.concatStringsSep, ",", () =>
                                scope.apply$(
                                  scope.map,
                                  () =>
                                    scope.func$(
                                      "t",
                                      (scope) => scope.t["name"],
                                    ),
                                  () => scope.types,
                                )),
                              ">",
                            ]
                          ),
                        verify: () =>
                          scope.func$("v", (scope) =>
                            scope.apply$(scope.all, () =>
                              scope.func$("func", (scope) =>
                                scope.apply$(scope.func, () =>
                                  scope.v)), () =>
                              scope.funcs)),
                      })
                    );
                  })(scope.apply$(scope.all, () =>
                    scope.isTypeDef, () =>
                    scope.types))),
              either: () =>
                scope.func$("t1", (scope) =>
                  scope.func$("t2", (scope) =>
                    ((_cond) => {
                      if (!_cond) {
                        throw new Error(
                          "assertion failed: " + "isTypeDef t1 && isTypeDef t2",
                        );
                      }
                      return scope.let$({
                        v1: (scope) =>
                          scope.t1["verify"],
                        v2: (scope) =>
                          scope.t2["verify"],
                      }).in$((scope) =>
                        scope.attrSet$({
                          name: () =>
                            scope.str$(
                              () => [
                                "either<",
                                scope.t1["name"],
                                ",",
                                scope.t2["name"],
                                ">",
                              ]
                            ),
                          verify: () =>
                            scope.func$(
                              "v",
                              (
                                scope,
                              ) => ((scope.apply$(scope.v1, () => scope.v)) ||
                                (scope.apply$(scope.v2, () => scope.v))),
                            ),
                        })
                      );
                    })(
                      (scope.apply$(scope.isTypeDef, () => scope.t1)) &&
                      (scope.apply$(scope.isTypeDef, () => scope.t2)),
                    ))),
              both: () =>
                scope.func$("t1", (scope) =>
                  scope.func$("t2", (scope) =>
                    ((_cond) => {
                      if (!_cond) {
                        throw new Error(
                          "assertion failed: " + "isTypeDef t1 && isTypeDef t2",
                        );
                      }
                      return scope.let$({
                        v1: (scope) =>
                          scope.t1["verify"],
                        v2: (scope) =>
                          scope.t2["verify"],
                      }).in$((scope) =>
                        scope.attrSet$({
                          name: () =>
                            scope.str$(
                              () => [
                                "both<",
                                scope.t1["name"],
                                ",",
                                scope.t2["name"],
                                ">",
                              ]
                            ),
                          verify: () =>
                            scope.func$(
                              "v",
                              (
                                scope,
                              ) => ((scope.apply$(scope.v1, () => scope.v)) &&
                                (scope.apply$(scope.v2, () => scope.v))),
                            ),
                        })
                      );
                    })(
                      (scope.apply$(scope.isTypeDef, () => scope.t1)) &&
                      (scope.apply$(scope.isTypeDef, () => scope.t2)),
                    ))),
              not: () =>
                scope.func$("t", (scope) =>
                  ((_cond) => {
                    if (!_cond) {
                      throw new Error("assertion failed: " + "isTypeDef t");
                    }
                    return scope.let$({
                      verify: (scope) =>
                        scope.t["verify"],
                    }).in$((scope) =>
                      scope.attrSet$({
                        name: () =>
                          scope.str$(() => ["not<", scope.t["name"], ">"]),
                        verify: () =>
                          scope.func$("v", (scope) =>
                            scope.operators$.negate(
                              scope.apply$(scope.verify, () =>
                                scope.v),
                            )),
                      })
                    );
                  })(scope.apply$(scope.isTypeDef, () =>
                    scope.t))),
              enum: () =>
                scope.func$("values", (scope) =>
                  ((_cond) => {
                    if (!_cond) {
                      throw new Error("assertion failed: " + "isList values");
                    }
                    return scope.attrSet$({
                      name: () =>
                        scope.if$(scope.apply$(scope.all, () =>
                          scope.isString, () =>
                          scope.values)).then$(() =>
                            scope.str$(
                              () => [
                                "enum<",
                                scope.apply$(
                                  scope.concatStringsSep,
                                  ",",
                                  () => scope.values,
                                ),
                                ">",
                              ]
                            )
                          ).else$("enum"),
                      verify: () =>
                        scope.func$("v", (scope) =>
                          scope.apply$(scope.elem, () =>
                            scope.v, () =>
                            scope.values)),
                    });
                  })(scope.apply$(scope.isList, () =>
                    scope.values))),
              record: () =>
                scope.func$("fields", (scope) =>
                  ((_cond) => {
                    if (!_cond) {
                      throw new Error(
                        "assertion failed: " +
                          "isAttrs fields && all isTypeDef (attrValues fields)",
                      );
                    }
                    return scope.let$({
                      fieldVerifiers: (scope) =>
                        scope.apply$(scope.mapAttrs, () =>
                          scope.func$("_", (scope) =>
                            scope.func$("t", (scope) =>
                              scope.t["verify"])), () =>
                          scope.fields),
                    }).in$((scope) =>
                      scope.attrSet$({
                        name: "record",
                        verify: () =>
                          scope.func$(
                            "v",
                            (
                              scope,
                            ) => ((scope.apply$(
                              scope.isAttrs,
                              () => scope.v,
                            )) && (scope.apply$(
                              scope.all,
                              () =>
                                scope.func$(
                                  "k",
                                  (
                                    scope,
                                  ) => ((scope.operators$.hasAttr(
                                    scope.fieldVerifiers,
                                    scope.k,
                                  )) &&
                                    (scope.apply$(
                                      scope.fieldVerifiers[scope.k],
                                      () => scope.v[scope.k],
                                    ))),
                                ),
                              () =>
                                scope.apply$(scope.attrNames, () => scope.v),
                            ))),
                          ),
                        errors: () =>
                          scope.func$("ctx", (scope) =>
                            scope.func$("v", (scope) =>
                              scope.if$(
                                scope.operators$.negate(
                                  scope.apply$(scope.isAttrs, () =>
                                    scope.v),
                                ),
                              ).then$(() =>
                                scope.apply$(scope.self["errors"], () =>
                                  scope.self["attrs"], () =>
                                  scope.ctx, () =>
                                  scope.v)
                              ).else$(() =>
                                scope.apply$(scope.concatMap, () =>
                                  scope.func$("k", (scope) =>
                                    scope.if$(
                                      scope.operators$.hasAttr(
                                        scope.fieldVerifiers,
                                        scope.k,
                                      ),
                                    ).then$(() =>
                                      scope.apply$(
                                        scope.lib["optionals"],
                                        () => (scope.operators$.negate(
                                          scope.apply$(
                                            scope.fieldVerifiers[scope.k],
                                            () => scope.v[scope.k],
                                          ),
                                        )),
                                        () =>
                                          scope.apply$(
                                            scope.self["errors"],
                                            () => scope.fields[scope.k],
                                            () =>
                                              scope.str$(
                                                () => [scope.ctx, ".", scope.k]
                                              ),
                                            () => scope.v[scope.k],
                                          ),
                                      )
                                    ).else$(
                                      () => [
                                        scope.str$(
                                          () => [
                                            scope.ctx,
                                            ": key '",
                                            scope.k,
                                            "' is unrecognized; expected one of: \n  [",
                                            scope.apply$(
                                              scope.concatMapStringsSep,
                                              ", ",
                                              () =>
                                                scope.func$("x", (scope) =>
                                                  scope.str$(
                                                    () => ["'", scope.x, "'"]
                                                  )),
                                              () =>
                                                scope.apply$(
                                                  scope.attrNames,
                                                  () => scope.fields,
                                                ),
                                            ),
                                            "]",
                                          ]
                                        ),
                                      ]
                                    )), () =>
                                  scope.apply$(scope.attrNames, () =>
                                    scope.v))
                              ))),
                      })
                    );
                  })(
                    (scope.apply$(scope.isAttrs, () => scope.fields)) &&
                    (scope.apply$(scope.all, () => scope.isTypeDef, () =>
                      scope.apply$(scope.attrValues, () =>
                        scope.fields))),
                  )),
            })))
      ))
  ),
);
