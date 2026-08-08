import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./polymorphic-module.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      _class: scope.nixArg$.NoDefault,
      lib: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.let$({
        nixosModule: (scope) =>
          scope.func$({ "...": scope.nixArg$.Ellipsis }, (scope) =>
            scope.attrSet$({
              ...scope.deepSet$(["options", "foo"], () =>
                scope.apply$(scope.lib["mkOption"], { default: "bar" })),
            })),
        darwinModule: (scope) =>
          scope.func$({ "...": scope.nixArg$.Ellipsis }, (scope) =>
            scope.attrSet$({
              ...scope.deepSet$(["options", "bar"], () =>
                scope.apply$(scope.lib["mkOption"], { default: "foo" })),
            })),
      }).in$((scope) =>
        scope.attrSet$({
          imports:
            () => [
              scope.apply$(
                scope.lib["optionalAttrs"],
                () => (scope.operators$.equal(scope._class, "nixos")),
                () => scope.nixosModule,
              ),
              scope.apply$(
                scope.lib["optionalAttrs"],
                () => (scope.operators$.equal(scope._class, "darwin")),
                () => scope.darwinModule,
              ),
            ],
        })
      ))
  ),
);
