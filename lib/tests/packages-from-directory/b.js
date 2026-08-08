import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./b.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({}, (scope) => "b")
  ),
);
