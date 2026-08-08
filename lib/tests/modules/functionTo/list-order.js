import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./list-order.nix", import.meta.url).pathname,
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
                          scope.types["listOf"],
                          () => scope.types["str"],
                        )),
                  })),
              result: () =>
                scope.apply$(scope.lib["mkOption"], () =>
                  scope.attrSet$({
                    type: () => scope.types["str"],
                    default: () =>
                      scope.apply$(scope.toString, () =>
                        scope.apply$(scope.config["fun"], {
                          a: "a",
                          b: "b",
                          c: "c",
                        })),
                  })),
            }),
          ...scope.deepSet$(["config", "fun"], () =>
            scope.apply$(
              scope.lib["mkMerge"],
              () => [
                scope.func$(
                  "input",
                  (scope) =>
                    scope.apply$(
                      scope.lib["mkAfter"],
                      () => [scope.input["a"]],
                    ),
                ),
                scope.func$("input", (scope) => [scope.input["b"]]),
              ],
            )),
        })
      ))
  ),
);
