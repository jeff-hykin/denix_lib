import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./doRename-basic.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.attrSet$({
          imports: () => [scope.apply$(scope.lib["doRename"], () =>
            scope.attrSet$({
              from: ["a", "b"],
              to: ["c", "d", "e"],
              warn: true,
              use: () => scope.func$("x", (scope) => scope.x),
              visible: true,
            }))],
          options: () =>
            scope.attrSet$({
              ...scope.deepSet$(
                ["c", "d", "e"],
                () => scope.apply$(scope.lib["mkOption"], {}),
              ),
            }),
          config: () =>
            scope.attrSet$({
              ...scope.deepSet$(["a", "b"], 1234n),
            }),
        }),
    )
  ),
);
