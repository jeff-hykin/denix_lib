import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./operators.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.attrSet$({
      OR: () =>
        scope.func$("licenses", (scope) =>
          scope.attrSet$({
            licenseType: "compound",
            operator: "OR",
            licenses: () => scope.licenses,
          })),
      AND: () =>
        scope.func$("licenses", (scope) =>
          scope.attrSet$({
            licenseType: "compound",
            operator: "AND",
            licenses: () => scope.licenses,
          })),
      WITH: () =>
        scope.func$("license", (scope) =>
          scope.func$("exception", (scope) =>
            scope.attrSet$({
              licenseType: "exception",
              operator: "WITH",
              license: () =>
                scope.license,
              exception: () => scope.exception,
            }))),
      PLUS: () =>
        scope.func$("license", (scope) =>
          scope.attrSet$({
            licenseType: "plus",
            operator: "+",
            license: () =>
              scope.license,
          })),
    })
  ),
);
