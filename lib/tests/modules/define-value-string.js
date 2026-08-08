import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./define-value-string.nix", import.meta.url).pathname,
  ({ scope }) => (
    { value: "24" }
  ),
);
