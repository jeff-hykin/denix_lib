import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./error-mkOption-in-config.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.let$({
          mkOption: (scope) => scope.lib["mkOption"],
        }).in$((scope) =>
          scope.attrSet$({
            wrong1: () => scope.apply$(scope.mkOption, {}),
            ...scope.deepSet$(["nest", "wrong2"], () =>
              scope.apply$(scope.mkOption, {})),
          })
        ),
    )
  ),
);
