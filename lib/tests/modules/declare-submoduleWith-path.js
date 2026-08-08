import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./declare-submoduleWith-path.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.attrSet$({
          ...scope.deepSet$(["options", "submodule"], () =>
            scope.apply$(scope.lib["mkOption"], () =>
              scope.attrSet$({
                type: () =>
                  scope.apply$(scope.lib["types"]["submoduleWith"], {
                    modules: [
                      new scope.Path$([
                        new URL("./declare-enable.nix", import.meta.url)
                          .pathname,
                      ], []),
                    ],
                  }),
                default: {},
              }))),
          ...scope.deepSet$(
            ["config", "submodule"],
            new scope.Path$([
              new URL("./define-enable.nix", import.meta.url).pathname,
            ], []),
          ),
        }),
    )
  ),
);
