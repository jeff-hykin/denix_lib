import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./module-class-is-darwin.nix", import.meta.url).pathname,
  ({ scope }) => (
    { _class: "darwin", config: {} }
  ),
);
