import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./error-typo-multiple-suggestions.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.attrSet$({
          ...scope.deepSet$(["options", "foo"], () =>
            scope.apply$(scope.lib["mkOption"], () =>
              scope.attrSet$({
                default: false,
                type: () => scope.lib["types"]["bool"],
              }))),
          ...scope.deepSet$(["options", "bar"], () =>
            scope.apply$(scope.lib["mkOption"], () =>
              scope.attrSet$({
                default: false,
                type: () =>
                  scope.lib["types"]["bool"],
              }))),
          ...scope.deepSet$(["options", "baz"], () =>
            scope.apply$(scope.lib["mkOption"], () =>
              scope.attrSet$({
                default: false,
                type: () =>
                  scope.lib["types"]["bool"],
              }))),
          config: { far: true },
        }),
    )
  ),
);
