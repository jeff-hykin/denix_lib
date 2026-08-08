import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./declare-set.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.attrSet$({
          ...scope.deepSet$(["options", "set"], () =>
            scope.apply$(scope.lib["mkOption"], () =>
              scope.attrSet$({
                default: {},
                example: { a: 1n },
                type: () =>
                  scope.apply$(scope.lib["types"]["attrsOf"], () =>
                    scope.lib["types"]["int"]),
                description: "Some descriptive text\n",
              }))),
        }),
    )
  ),
);
