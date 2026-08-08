import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./import-error-submodule.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.let$({
          myconf: (scope) =>
            scope.apply$(scope.lib["evalModules"], { modules: [{}] }),
        }).in$((scope) =>
          scope.attrSet$({
            ...scope.deepSet$(["options", "foo"], () =>
              scope.apply$(scope.lib["mkOption"], () =>
                scope.attrSet$({
                  type: () => scope.apply$(scope.lib["types"]["submodule"], {}),
                  default: {},
                }))),
            ...scope.deepSet$(["config", "foo"], () =>
              scope.func$({ "...": scope.nixArg$.Ellipsis }, (scope) =>
                scope.attrSet$({
                  imports: () => [scope.myconf],
                }))),
          })
        ),
    )
  ),
);
