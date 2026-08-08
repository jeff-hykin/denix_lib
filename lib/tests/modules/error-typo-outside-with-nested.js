import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./error-typo-outside-with-nested.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.attrSet$({
          ...scope.deepSet$(["options", "set"], () =>
            scope.attrSet$({
              enable: () =>
                scope.apply$(scope.lib["mkOption"], () =>
                  scope.attrSet$({
                    default: false,
                    example: true,
                    type: () => scope.lib["types"]["bool"],
                    description: "Some descriptive text\n",
                  })),
            })),
          config: () =>
            scope.attrSet$({
              ...scope.deepSet$(["sea", "enable"], true),
            }),
        }),
    )
  ),
);
