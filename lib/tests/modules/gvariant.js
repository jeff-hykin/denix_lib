import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./gvariant.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      config: scope.nixArg$.NoDefault,
      lib: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.attrSet$({
        options: () =>
          scope.attrSet$({
            examples: () =>
              scope.apply$(scope.lib["mkOption"], () =>
                scope.attrSet$({
                  type: () => scope.lib["types"]["attrs"],
                })),
            assertion: () =>
              scope.apply$(scope.lib["mkOption"], () =>
                scope.attrSet$({
                  type: () => scope.lib["types"]["bool"],
                })),
          }),
        config: () =>
          scope.attrSet$({
            examples: () =>
              scope.with$(() => scope.lib["gvariant"], (scope) =>
                scope.attrSet$({
                  bool: true,
                  float: 3.14,
                  int32: () => scope.apply$(scope.mkInt32, -42n),
                  uint32: () => scope.apply$(scope.mkUint32, 42n),
                  int16: () => scope.apply$(scope.mkInt16, -42n),
                  uint16: () => scope.apply$(scope.mkUint16, 42n),
                  int64: () => scope.apply$(scope.mkInt64, -42n),
                  uint64: () => scope.apply$(scope.mkUint64, 42n),
                  array1: ["one"],
                  array2: () =>
                    scope.apply$(
                      scope.mkArray,
                      () => [scope.apply$(scope.mkInt32, 1n)],
                    ),
                  array3: () =>
                    scope.apply$(
                      scope.mkArray,
                      () => [scope.apply$(scope.mkUint32, 2n)],
                    ),
                  emptyArray: () =>
                    scope.apply$(scope.mkEmptyArray, () =>
                      scope.type["uint32"]),
                  string: "foo",
                  escapedString: "'\\\n",
                  tuple: () =>
                    scope.apply$(
                      scope.mkTuple,
                      () => [scope.apply$(scope.mkInt32, 1n), ["foo"]],
                    ),
                  maybe1: () =>
                    scope.apply$(scope.mkNothing, () =>
                      scope.type["string"]),
                  maybe2: () =>
                    scope.apply$(
                      scope.mkJust,
                      () => scope.apply$(scope.mkUint32, 4n),
                    ),
                  variant: () => scope.apply$(scope.mkVariant, "foo"),
                  dictionaryEntry: () =>
                    scope.apply$(
                      scope.mkDictionaryEntry,
                      () => scope.apply$(scope.mkInt32, 1n),
                      ["foo"],
                    ),
                })),
            assertion: () =>
              scope.let$({
                mkLine: (scope) =>
                  scope.func$("n", (scope) =>
                    scope.func$("v", (scope) =>
                      scope.str$(
                        () => [
                          scope.n,
                          " = ",
                          scope.apply$(
                            scope.toString,
                            () =>
                              scope.apply$(
                                scope.lib["gvariant"]["mkValue"],
                                () => scope.v,
                              ),
                          ),
                        ]
                      ))),
                result: (scope) =>
                  scope.apply$(scope.lib["concatStringsSep"], "\n", () =>
                    scope.apply$(
                      scope.lib["mapAttrsToList"],
                      () => scope.mkLine,
                      () => scope.config["examples"],
                    )),
              }).in$((scope) =>
                scope.operators$.equal(
                  scope.operators$.add(scope.result, "\n"),
                  "array1 = @as ['one']\narray2 = @ai [1]\narray3 = @au [@u 2]\nbool = true\ndictionaryEntry = @{ias} {1,@as ['foo']}\nemptyArray = @au []\nescapedString = '\\'\\\\\\n'\nfloat = 3.140000\nint16 = @n -42\nint32 = -42\nint64 = @x -42\nmaybe1 = @ms nothing\nmaybe2 = just @u 4\nstring = 'foo'\ntuple = @(ias) (1,@as ['foo'])\nuint16 = @q 42\nuint32 = @u 42\nuint64 = @t 42\nvariant = <'foo'>\n",
                )
              ),
          }),
      }))
  ),
);
