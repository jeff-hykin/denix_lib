import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./flakes.nix", import.meta.url).pathname,
  ({ scope }) => (
    /**
  Flake operations.
    */ scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.attrSet$({
        parseFlakeRef: () => scope.builtins.parseFlakeRef,
        flakeRefToString: () => scope.builtins.flakeRefToString,
      }))
  ),
);
