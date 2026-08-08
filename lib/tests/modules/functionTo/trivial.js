import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./trivial.nix", import.meta.url).pathname,
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
                      scope.apply$(
                        scope.types["functionTo"],
                        () => scope.types["str"],
                      ),
                  })),
              result: () =>
                scope.apply$(scope.lib["mkOption"], () =>
                  scope.attrSet$({
                    type: () => scope.types["str"],
                    default: () => scope.apply$(scope.config["fun"], "input"),
                  })),
            }),
          ...scope.deepSet$(
            ["config", "fun"],
            () =>
              scope.func$("input", (scope) =>
                scope.str$(() => ["input is ", scope.input])),
          ),
        })
      ))
  ),
);
