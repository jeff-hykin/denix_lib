import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./equal-atoms.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.attrSet$({
          ...scope.deepSet$(["options", "value"], () =>
            scope.apply$(scope.lib["mkOption"], () =>
              scope.attrSet$({
                type: () => scope.lib["types"]["anything"],
              }))),
          config: () =>
            scope.apply$(scope.lib["mkMerge"], () => [
              scope.attrSet$({
                ...scope.deepSet$(["value", "int"], 0n),
                ...scope.deepSet$(["value", "bool"], false),
                ...scope.deepSet$(["value", "string"], ""),
                ...scope.deepSet$(
                  ["value", "path"],
                  new scope.Path$([
                    new URL("../types-anything", import.meta.url).pathname,
                  ], []),
                ),
                ...scope.deepSet$(["value", "null"], null),
                ...scope.deepSet$(["value", "float"], 0.1),
                ...scope.deepSet$(["value", "list"], [1n, "a", { x: null }]),
              }),
              scope.attrSet$({
                ...scope.deepSet$(["value", "int"], 0n),
                ...scope.deepSet$(["value", "bool"], false),
                ...scope.deepSet$(["value", "string"], ""),
                ...scope.deepSet$(
                  ["value", "path"],
                  new scope.Path$([
                    new URL("../types-anything", import.meta.url).pathname,
                  ], []),
                ),
                ...scope.deepSet$(["value", "null"], null),
                ...scope.deepSet$(["value", "float"], 0.1),
                ...scope.deepSet$(["value", "list"], [1n, "a", { x: null }]),
              }),
            ]),
        }),
    )
  ),
);
