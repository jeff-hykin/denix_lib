import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./minfeatures.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.let$({
      features: (scope) => [
        scope.attrSet$({
          description: "the `nixVersion` builtin",
          condition: () =>
            scope.operators$.hasAttr(scope.builtins, "nixVersion"),
        }),
        scope.attrSet$({
          description: "`builtins.nixVersion` reports at least 2.18",
          condition:
            () => ((scope.operators$.hasAttr(scope.builtins, "nixVersion")) &&
              (scope.operators$.notEqual(
                scope.apply$(scope.builtins["compareVersions"], "2.18", () =>
                  scope.builtins["nixVersion"]),
                1n,
              ))),
        }),
      ],
      evaluated: (scope) =>
        scope.apply$(scope.builtins["partition"], () =>
          scope.func$({
            condition: scope.nixArg$.NoDefault,
            "...": scope.nixArg$.Ellipsis,
          }, (scope) =>
            scope.condition), () =>
          scope.features),
    }).in$((scope) =>
      scope.attrSet$({
        all: () =>
          scope.features,
        supported: () => scope.evaluated["right"],
        missing: () => scope.evaluated["wrong"],
      })
    )
  ),
);
