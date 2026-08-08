import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./strMatching-merge.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.attrSet$({
          imports: () => [
            scope.attrSet$({
              ...scope.deepSet$(["options", "sm"], () =>
                scope.apply$(scope.lib["mkOption"], () =>
                  scope.attrSet$({
                    type: () =>
                      scope.apply$(
                        scope.lib["types"]["strMatching"],
                        "\\(.*\\)",
                      ),
                  }))),
            }),
            scope.attrSet$({
              ...scope.deepSet$(
                ["options", "sm"],
                () =>
                  scope.apply$(scope.lib["mkOption"], () =>
                    scope.attrSet$({
                      type: () =>
                        scope.apply$(
                          scope.lib["types"]["strMatching"],
                          "\\(.*\\)",
                        ),
                    })),
              ),
            }),
          ],
        }),
    )
  ),
);
