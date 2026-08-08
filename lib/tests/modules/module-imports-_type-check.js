import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./module-imports-_type-check.nix", import.meta.url).pathname,
  ({ scope }) => (
    { imports: [{ _type: "flake" }] }
  ),
);
