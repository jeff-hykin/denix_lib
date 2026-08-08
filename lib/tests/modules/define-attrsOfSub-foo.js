import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./define-attrsOfSub-foo.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.attrSet$({
      ...scope.deepSet$(["attrsOfSub", "foo"], {}),
    })
  ),
);
