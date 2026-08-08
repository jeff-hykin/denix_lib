import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./define-variant.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      config: scope.nixArg$.NoDefault,
      lib: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.let$({
        types: (scope) => scope.lib["types"],
        mkOption: (scope) => scope.lib["mkOption"],
        attrNames: (scope) => scope.lib["attrNames"],
      }).in$((scope) =>
        scope.attrSet$({
          options: () =>
            scope.attrSet$({
              attrs: () =>
                scope.apply$(scope.mkOption, () =>
                  scope.attrSet$({
                    type: () =>
                      scope.apply$(scope.types["attrsOf"], () =>
                        scope.lib["types"]["int"]),
                  })),
              result: () =>
                scope.apply$(scope.mkOption, {}),
              resultFoo: () => scope.apply$(scope.mkOption, {}),
              resultFooBar: () => scope.apply$(scope.mkOption, {}),
              resultFooFoo: () => scope.apply$(scope.mkOption, {}),
            }),
          config: () =>
            scope.attrSet$({
              ...scope.deepSet$(["attrs", "a"], 1n),
              ...scope.deepSet$(["variants", "foo", "attrs", "b"], 1n),
              ...scope.deepSet$(["variants", "bar", "attrs", "y"], 1n),
              ...scope.deepSet$([
                "variants",
                "foo",
                "variants",
                "bar",
                "attrs",
                "z",
              ], 1n),
              ...scope.deepSet$([
                "variants",
                "foo",
                "variants",
                "foo",
                "attrs",
                "c",
              ], 3n),
              resultFoo: () =>
                scope.apply$(scope.lib["concatMapStringsSep"], " ", () =>
                  scope.toString, () =>
                  scope.apply$(scope.attrNames, () =>
                    scope.config["variants"]["foo"]["attrs"])),
              resultFooBar: () =>
                scope.apply$(scope.lib["concatMapStringsSep"], " ", () =>
                  scope.toString, () =>
                  scope.apply$(scope.attrNames, () =>
                    scope
                      .config["variants"]["foo"]["variants"]["bar"]["attrs"])),
              resultFooFoo: () =>
                scope.apply$(
                  scope.lib["concatMapStringsSep"],
                  " ",
                  () => scope.toString,
                  () =>
                    scope.apply$(scope.attrNames, () =>
                      scope
                        .config["variants"]["foo"]["variants"]["foo"]["attrs"]),
                ),
            }),
        })
      ))
  ),
);
