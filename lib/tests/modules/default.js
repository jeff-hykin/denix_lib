import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";
import _nix_default_6e679886 from "../../default.js";

export default nixFile(
  new URL("./default.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      lib: (scope) => _nix_default_6e679886(scope.runtime$),
      modules: [],
    }, (scope) =>
      scope.attrSet$({
        config: () =>
          scope.apply$(scope.lib["evalModules"], () =>
            scope.attrSet$({
              modules: () => scope.modules,
              ...scope.deepSet$(
                ["specialArgs", "modulesPath"],
                new scope.Path$([
                  new URL("../modules", import.meta.url).pathname,
                ], []),
              ),
            })).config,
        options: () =>
          scope.apply$(scope.lib["evalModules"], () =>
            scope.attrSet$({
              modules: () => scope.modules,
              ...scope.deepSet$(
                ["specialArgs", "modulesPath"],
                new scope.Path$([
                  new URL("../modules", import.meta.url).pathname,
                ], []),
              ),
            })).options,
      }))
  ),
);
