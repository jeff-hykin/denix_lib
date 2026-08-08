import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./freeform-str-dep-unstr.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      lib: scope.nixArg$.NoDefault,
      config: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.attrSet$({
        ...scope.deepSet$(["options", "foo"], () =>
          scope.apply$(scope.lib["mkOption"], () =>
            scope.attrSet$({
              type: () =>
                scope.apply$(scope.lib["types"]["nullOr"], () =>
                  scope.lib["types"]["str"]),
              default: null,
            }))),
        ...scope.deepSet$(["config", "foo"], () =>
          scope.apply$(scope.lib["mkIf"], () =>
            scope.operators$.hasAttr(scope.config, "value"), () =>
            scope.config["value"])),
      }))
  ),
);
