import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./computed-team-list.nix", import.meta.url).pathname,
  ({ scope }) => (
    //
    scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) => ({}))
  ),
);
