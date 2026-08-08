import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./b.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$("args", (scope) => ({ imports: [{ key: "explicit-key" }] }))
  ),
);
