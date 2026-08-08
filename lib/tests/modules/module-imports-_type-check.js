import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./module-imports-_type-check.nix", import.meta.url).pathname,
  ({ scope }) => (
    { imports: [{ _type: "flake" }] }
  ),
);
