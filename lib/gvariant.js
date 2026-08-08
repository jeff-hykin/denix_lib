import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./gvariant.nix", import.meta.url).pathname,
  ({ scope }) => (
    /**
  A partial and basic implementation of GVariant formatted strings.
  See [GVariant Format Strings](https://docs.gtk.org/glib/gvariant-format-strings.html) for details.

  :::{.warning}
  This API is not considered fully stable and it might therefore
  change in backwards incompatible ways without prior notice.
  :::
    */
    //
    //
    scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        concatMapStringsSep: (scope) => scope.lib["concatMapStringsSep"],
        concatStrings: (scope) => scope.lib["concatStrings"],
        escape: (scope) => scope.lib["escape"],
        head: (scope) => scope.lib["head"],
        replaceString: (scope) => scope.lib["replaceString"],
        mkPrimitive: (scope) =>
          scope.func$("t", (scope) =>
            scope.func$("v", (scope) =>
              scope.attrSet$({
                _type: "gvariant",
                type: () => scope.t,
                value: () => scope.v,
                __toString: () =>
                  scope.func$("self", (scope) =>
                    scope.str$(
                      () => [
                        "@",
                        scope.self["type"],
                        " ",
                        scope.apply$(scope.toString, () => scope.self["value"]),
                      ]
                    )),
              }))),
        type: (scope) =>
          scope.attrSet$({
            arrayOf: () =>
              scope.func$("t", (scope) => scope.str$(() => ["a", scope.t])),
            maybeOf: () =>
              scope.func$("t", (scope) => scope.str$(() => ["m", scope.t])),
            tupleOf: () =>
              scope.func$("ts", (scope) =>
                scope.str$(() => [
                  "(",
                  scope.apply$(scope.concatStrings, () => scope.ts),
                  ")",
                ])),
            dictionaryEntryOf: () =>
              scope.func$("nameType", (scope) =>
                scope.func$("valueType", (scope) =>
                  scope.str$(
                    () => ["{", scope.nameType, scope.valueType, "}"]
                  ))),
            string: "s",
            boolean: "b",
            uchar: "y",
            int16: "n",
            uint16: "q",
            int32: "i",
            uint32: "u",
            int64: "x",
            uint64: "t",
            double: "d",
            variant: "v",
          }),
      }).in$((scope) =>
        scope.recAttrSet$({
          type: () =>
            scope.type,
          isGVariant: (scope) =>
            scope.func$("v", (scope) =>
              scope.operators$.equal(
                scope.operators$.selectOrDefault(scope.v, ["_type"], ""),
                "gvariant",
              )),
          intConstructors: (scope) => [
            scope.attrSet$({
              name: "mkInt32",
              type: () => scope.type["int32"],
              min: -2147483648n,
              max: 2147483647n,
            }),
            scope.attrSet$({
              name: "mkUint32",
              type: () => scope.type["uint32"],
              min: 0n,
              max: 4294967295n,
            }),
            scope.attrSet$({
              name: "mkInt64",
              type: () => scope.type["int64"],
              min: null,
              max: null,
            }),
            scope.attrSet$({
              name: "mkUint64",
              type: () => scope.type["uint64"],
              min: 0n,
              max: null,
            }),
            scope.attrSet$({
              name: "mkInt16",
              type: () => scope.type["int16"],
              min: -32768n,
              max: 32767n,
            }),
            scope.attrSet$({
              name: "mkUint16",
              type: () => scope.type["uint16"],
              min: 0n,
              max: 65535n,
            }),
            scope.attrSet$({
              name: "mkUchar",
              type: () => scope.type["uchar"],
              min: 0n,
              max: 255n,
            }),
          ],
          mkValue: (scope) =>
            scope.func$("v", (scope) =>
              scope.if$(scope.apply$(scope.builtins["isBool"], () =>
                scope.v)).then$(() =>
                  scope.apply$(scope.mkBoolean, () =>
                    scope.v)
                ).elseIf$(() =>
                  scope.apply$(scope.builtins["isFloat"], () =>
                    scope.v)
                ).then$(() =>
                  scope.apply$(scope.mkDouble, () => scope.v)
                ).elseIf$(() =>
                  scope.apply$(scope.builtins["isString"], () => scope.v)
                ).then$(() => scope.apply$(scope.mkString, () => scope.v))
                .elseIf$(() =>
                  scope.apply$(scope.builtins["isList"], () => scope.v)
                ).then$(() => scope.apply$(scope.mkArray, () => scope.v))
                .elseIf$(() => scope.apply$(scope.isGVariant, () => scope.v))
                .then$(() => scope.v).elseIf$(() =>
                  scope.apply$(scope.builtins["isInt"], () => scope.v)
                ).then$(() =>
                  scope.let$({
                    validConstructors: (scope) =>
                      scope.apply$(scope.builtins["filter"], () =>
                        scope.func$(
                          {
                            min: scope.nixArg$.NoDefault,
                            max: scope.nixArg$.NoDefault,
                            "...": scope.nixArg$.Ellipsis,
                          },
                          (
                            scope,
                          ) => (((scope.operators$.equal(scope.min, null)) ||
                            (scope.operators$.lessThanOrEqual(
                              scope.min,
                              scope.v,
                            ))) &&
                            ((scope.operators$.equal(scope.max, null)) ||
                              (scope.operators$.lessThanOrEqual(
                                scope.v,
                                scope.max,
                              )))),
                        ), () => scope.intConstructors),
                  }).in$((scope) =>
                    scope.apply$(scope.throw, () =>
                      scope.str$(
                        () => [
                          "The GVariant type for number “",
                          scope.apply$(scope.toString, () => scope.v),
                          "” is unclear.\nPlease wrap the value with one of the following, depending on the value type in GSettings schema:\n\n",
                          scope.apply$(
                            scope.lib["concatMapStringsSep"],
                            "\n",
                            () =>
                              scope.func$({
                                name: scope.nixArg$.NoDefault,
                                type: scope.nixArg$.NoDefault,
                                "...": scope.nixArg$.Ellipsis,
                              }, (scope) =>
                                scope.str$(
                                  () => [
                                    "- `lib.gvariant.",
                                    scope.name,
                                    "` for `",
                                    scope.type,
                                    "`",
                                  ]
                                )),
                            () => scope.validConstructors,
                          ),
                          "\n",
                        ]
                      ))
                  )
                ).elseIf$(() =>
                  scope.apply$(scope.builtins["isAttrs"], () => scope.v)
                ).then$(() =>
                  scope.apply$(
                    scope.throw,
                    "Cannot construct GVariant value from an attribute set. If you want to construct a dictionary, you will need to create an array containing items constructed with `lib.gvariant.mkDictionaryEntry`.",
                  )
                ).else$(() =>
                  scope.apply$(scope.throw, () =>
                    scope.str$(
                      () => [
                        "The GVariant type of “",
                        scope.apply$(scope.builtins["typeOf"], () => scope.v),
                        "” can't be inferred.",
                      ]
                    ))
                )),
          mkArray: (scope) =>
            scope.func$("elems", (scope) =>
              scope.let$({
                vs: (scope) =>
                  scope.apply$(scope.map, () => scope.mkValue, () =>
                    scope.if$(scope.operators$.equal(scope.elems, [])).then$(
                      () =>
                        scope.apply$(
                          scope.throw,
                          "Please create empty array with mkEmptyArray.",
                        )
                    ).else$(() => scope.elems)),
                firstType: (scope) =>
                  scope.apply$(scope.head, () => scope.vs)["type"],
                elemType: (scope) =>
                  scope.if$(scope.apply$(scope.lib["any"], () =>
                    scope.func$("v", (scope) =>
                      scope.operators$.notEqual(
                        scope.v["type"],
                        scope.firstType,
                      )), () =>
                    scope.vs)).then$(() =>
                      scope.apply$(
                        scope.throw,
                        "Elements in a list should have same type.",
                      )
                    ).else$(() =>
                      scope.firstType
                    ),
              }).in$((scope) =>
                scope.operators$.merge(
                  scope.apply$(
                    scope.mkPrimitive,
                    () =>
                      scope.apply$(scope.type["arrayOf"], () => scope.elemType),
                    () => scope.vs,
                  ),
                  scope.attrSet$({
                    __toString: () =>
                      scope.func$("self", (scope) =>
                        scope.str$(
                          () => [
                            "@",
                            scope.self["type"],
                            " [",
                            scope.apply$(
                              scope.concatMapStringsSep,
                              ",",
                              () => scope.toString,
                              () => scope.self["value"],
                            ),
                            "]",
                          ]
                        )),
                  }),
                )
              )),
          mkEmptyArray: (scope) =>
            scope.func$("elemType", (scope) =>
              scope.operators$.merge(
                scope.apply$(
                  scope.mkPrimitive,
                  () =>
                    scope.apply$(scope.type["arrayOf"], () => scope.elemType),
                  [],
                ),
                scope.attrSet$({
                  __toString: () =>
                    scope.func$(
                      "self",
                      (scope) =>
                        scope.str$(() => ["@", scope.self["type"], " []"]),
                    ),
                }),
              )),
          mkVariant: (scope) =>
            scope.func$("elem", (scope) =>
              scope.let$({
                gvarElem: (scope) =>
                  scope.apply$(scope.mkValue, () => scope.elem),
              }).in$((scope) =>
                scope.operators$.merge(
                  scope.apply$(scope.mkPrimitive, () =>
                    scope.type["variant"], () =>
                    scope.gvarElem),
                  scope.attrSet$({
                    __toString: () =>
                      scope.func$("self", (scope) =>
                        scope.str$(
                          () => [
                            "<",
                            scope.apply$(
                              scope.toString,
                              () => scope.self["value"],
                            ),
                            ">",
                          ]
                        )),
                  }),
                )
              )),
          mkDictionaryEntry: (scope) =>
            scope.func$("name", (scope) =>
              scope.func$("value", (scope) =>
                scope.let$({
                  "name'": (scope) =>
                    scope.apply$(scope.mkValue, () => scope.name),
                  "value'": (scope) =>
                    scope.apply$(scope.mkValue, () => scope.value),
                  dictionaryType: (scope) =>
                    scope.apply$(
                      scope.type["dictionaryEntryOf"],
                      () => scope["name'"]["type"],
                      () => scope["value'"]["type"],
                    ),
                }).in$((scope) =>
                  scope.operators$.merge(
                    scope.apply$(scope.mkPrimitive, () =>
                      scope.dictionaryType, () =>
                      scope.attrSet$({
                        name: () =>
                          scope.name,
                        value: () =>
                          scope.value,
                      })),
                    scope.attrSet$({
                      __toString: () =>
                        scope.func$("self", (scope) =>
                          scope.str$(
                            () => [
                              "@",
                              scope.self["type"],
                              " {",
                              scope["name'"],
                              ",",
                              scope["value'"],
                              "}",
                            ]
                          )),
                    }),
                  )
                ))),
          mkMaybe: (scope) =>
            scope.func$("elemType", (scope) =>
              scope.func$("elem", (scope) =>
                scope.operators$.merge(
                  scope.apply$(scope.mkPrimitive, () =>
                    scope.apply$(scope.type["maybeOf"], () =>
                      scope.elemType), () =>
                    scope.elem),
                  scope.attrSet$({
                    __toString: () =>
                      scope.func$("self", (scope) =>
                        scope.if$(
                          scope.operators$.equal(scope.self["value"], null),
                        ).then$(() =>
                          scope.str$(
                            () => ["@", scope.self["type"], " nothing"]
                          )
                        ).else$(() =>
                          scope.str$(
                            () => [
                              "just ",
                              scope.apply$(
                                scope.toString,
                                () => scope.self["value"],
                              ),
                            ]
                          )
                        )),
                  }),
                ))),
          mkNothing: (scope) =>
            scope.func$(
              "elemType",
              (scope) =>
                scope.apply$(scope.mkMaybe, () => scope.elemType, null),
            ),
          mkJust: (scope) =>
            scope.func$("elem", (scope) =>
              scope.let$({
                gvarElem: (scope) =>
                  scope.apply$(scope.mkValue, () => scope.elem),
              }).in$((scope) =>
                scope.apply$(
                  scope.mkMaybe,
                  () => scope.gvarElem["type"],
                  () => scope.gvarElem,
                )
              )),
          mkTuple: (scope) =>
            scope.func$("elems", (scope) =>
              scope.let$({
                gvarElems: (scope) =>
                  scope.apply$(
                    scope.map,
                    () => scope.mkValue,
                    () => scope.elems,
                  ),
                tupleType: (scope) =>
                  scope.apply$(
                    scope.type["tupleOf"],
                    () =>
                      scope.apply$(scope.map, () =>
                        scope.func$("e", (scope) => scope.e["type"]), () =>
                        scope.gvarElems),
                  ),
              }).in$((scope) =>
                scope.operators$.merge(
                  scope.apply$(scope.mkPrimitive, () =>
                    scope.tupleType, () =>
                    scope.gvarElems),
                  scope.attrSet$({
                    __toString: () =>
                      scope.func$("self", (scope) =>
                        scope.str$(
                          () => [
                            "@",
                            scope.self["type"],
                            " (",
                            scope.apply$(
                              scope.concatMapStringsSep,
                              ",",
                              () => scope.toString,
                              () => scope.self["value"],
                            ),
                            ")",
                          ]
                        )),
                  }),
                )
              )),
          mkBoolean: (scope) =>
            scope.func$(
              "v",
              (scope) =>
                scope.operators$.merge(
                  scope.apply$(
                    scope.mkPrimitive,
                    () => scope.type["boolean"],
                    () => scope.v,
                  ),
                  scope.attrSet$({
                    __toString: () =>
                      scope.func$(
                        "self",
                        (scope) =>
                          scope.if$(scope.self["value"]).then$("true").else$(
                            "false",
                          ),
                      ),
                  }),
                ),
            ),
          mkString: (scope) =>
            scope.func$("v", (scope) =>
              scope.let$({
                sanitize: (scope) =>
                  scope.func$(
                    "s",
                    (scope) =>
                      scope.apply$(scope.replaceString, "\n", "\\n", () =>
                        scope.apply$(scope.escape, ["'", "\\"], () =>
                          scope.s)),
                  ),
              }).in$((scope) =>
                scope.operators$.merge(
                  scope.apply$(scope.mkPrimitive, () =>
                    scope.type["string"], () =>
                    scope.v),
                  scope.attrSet$({
                    __toString: () =>
                      scope.func$("self", (scope) =>
                        scope.str$(
                          () => [
                            "'",
                            scope.apply$(
                              scope.sanitize,
                              () => scope.self["value"],
                            ),
                            "'",
                          ]
                        )),
                  }),
                )
              )),
          mkObjectpath: (scope) =>
            scope.func$(
              "v",
              (scope) =>
                scope.operators$.merge(
                  scope.apply$(
                    scope.mkPrimitive,
                    () => scope.type["string"],
                    () => scope.v,
                  ),
                  scope.attrSet$({
                    __toString: () =>
                      scope.func$("self", (scope) =>
                        scope.str$(
                          () => [
                            "objectpath '",
                            scope.apply$(
                              scope.escape,
                              ["'"],
                              () => scope.self["value"],
                            ),
                            "'",
                          ]
                        )),
                  }),
                ),
            ),
          mkUchar: (scope) =>
            scope.apply$(scope.mkPrimitive, () => scope.type["uchar"]),
          mkInt16: (scope) =>
            scope.apply$(scope.mkPrimitive, () => scope.type["int16"]),
          mkUint16: (scope) =>
            scope.apply$(scope.mkPrimitive, () => scope.type["uint16"]),
          mkInt32: (scope) =>
            scope.func$(
              "v",
              (scope) =>
                scope.operators$.merge(
                  scope.apply$(
                    scope.mkPrimitive,
                    () => scope.type["int32"],
                    () => scope.v,
                  ),
                  scope.attrSet$({
                    __toString: () =>
                      scope.func$(
                        "self",
                        (scope) =>
                          scope.apply$(scope.toString, () =>
                            scope.self["value"]),
                      ),
                  }),
                ),
            ),
          mkUint32: (scope) =>
            scope.apply$(scope.mkPrimitive, () => scope.type["uint32"]),
          mkInt64: (scope) =>
            scope.apply$(scope.mkPrimitive, () => scope.type["int64"]),
          mkUint64: (scope) =>
            scope.apply$(scope.mkPrimitive, () => scope.type["uint64"]),
          mkDouble: (scope) =>
            scope.func$(
              "v",
              (scope) =>
                scope.operators$.merge(
                  scope.apply$(
                    scope.mkPrimitive,
                    () => scope.type["double"],
                    () => scope.v,
                  ),
                  scope.attrSet$({
                    __toString: () =>
                      scope.func$(
                        "self",
                        (scope) =>
                          scope.apply$(scope.toString, () =>
                            scope.self["value"]),
                      ),
                  }),
                ),
            ),
        })
      ))
  ),
);
