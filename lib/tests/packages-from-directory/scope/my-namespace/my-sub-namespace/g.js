import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./g.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      a: scope.nixArg$.NoDefault,
      d: scope.nixArg$.NoDefault,
      h: scope.nixArg$.NoDefault,
    }, (scope) => "g")
  ),
);
