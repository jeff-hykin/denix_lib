import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";
import _nix_licenses_4baa6af6 from "./licenses.js";
import _nix_operators_27ab0fb9 from "./operators.js";
import _nix_helpers_74ba359d from "./helpers.js";

export default nixFile(
  new URL("./default.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        licenses: (scope) =>
          scope.apply$(_nix_licenses_4baa6af6(scope.runtime$), () =>
            scope.attrSet$({
              lib: () => scope.lib,
            })),
        operators: (scope) =>
          _nix_operators_27ab0fb9(scope.runtime$),
        helpers: (scope) =>
          scope.apply$(_nix_helpers_74ba359d(scope.runtime$), () =>
            scope.attrSet$({
              lib: () =>
                scope.lib,
            })),
      }).in$((scope) =>
        scope.operators$.merge(
          scope.licenses,
          scope.operators$.merge(scope.operators, scope.helpers),
        )
      ))
  ),
);
