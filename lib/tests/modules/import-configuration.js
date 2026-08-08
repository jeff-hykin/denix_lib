import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./import-configuration.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.let$({
          myconf: (scope) =>
            scope.apply$(scope.lib["evalModules"], { modules: [{}] }),
        }).in$((scope) =>
          scope.attrSet$({
            imports: () => [scope.myconf],
          })
        ),
    )
  ),
);
