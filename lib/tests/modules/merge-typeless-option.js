import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./merge-typeless-option.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({ "...": scope.nixArg$.Ellipsis }, (scope) =>
      scope.let$({
        typeless: (scope) =>
          scope.func$({
            lib: scope.nixArg$.NoDefault,
            "...": scope.nixArg$.Ellipsis,
          }, (scope) =>
            scope.attrSet$({
              ...scope.deepSet$(
                ["options", "group"],
                () => scope.apply$(scope.lib["mkOption"], {}),
              ),
            })),
        childOfTypeless: (scope) =>
          scope.func$({
            lib: scope.nixArg$.NoDefault,
            "...": scope.nixArg$.Ellipsis,
          }, (scope) =>
            scope.attrSet$({
              ...scope.deepSet$(
                ["options", "group", "enable"],
                () => scope.apply$(scope.lib["mkEnableOption"], "nothing"),
              ),
            })),
      }).in$((scope) =>
        scope.attrSet$({
          imports: () => [scope.typeless, scope.childOfTypeless],
          ...scope.deepSet$(["config", "group", "enable"], false),
        })
      ))
  ),
);
