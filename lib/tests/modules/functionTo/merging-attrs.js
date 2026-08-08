import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./merging-attrs.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      lib: scope.nixArg$.NoDefault,
      config: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.let$({
        types: (scope) => scope.lib["types"],
      }).in$((scope) =>
        scope.attrSet$({
          options: () =>
            scope.attrSet$({
              fun: () =>
                scope.apply$(scope.lib["mkOption"], () =>
                  scope.attrSet$({
                    type: () =>
                      scope.apply$(scope.types["functionTo"], () =>
                        scope.apply$(
                          scope.types["attrsOf"],
                          () => scope.types["str"],
                        )),
                  })),
              result: () =>
                scope.apply$(scope.lib["mkOption"], () =>
                  scope.attrSet$({
                    type: () => scope.types["str"],
                    default: () =>
                      scope.apply$(scope.toString, () =>
                        scope.apply$(scope.lib["attrValues"], () =>
                          scope.apply$(scope.config["fun"], {
                            a: "a",
                            b: "b",
                            c: "c",
                          }))),
                  })),
            }),
          ...scope.deepSet$(["config", "fun"], () =>
            scope.apply$(
              scope.lib["mkMerge"],
              () => [
                scope.func$("input", (scope) =>
                  scope.attrSet$({
                    a: () => scope.input.a,
                  })),
                scope.func$("input", (scope) =>
                  scope.attrSet$({
                    b: () => scope.input.b,
                  })),
                scope.func$("input", (scope) =>
                  scope.attrSet$({
                    b: () =>
                      scope.apply$(
                        scope.lib["mkForce"],
                        () => scope.input["c"],
                      ),
                  })),
              ],
            )),
        })
      ))
  ),
);
