import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./module-class-is-nixos.nix", import.meta.url).pathname,
  ({ scope }) => (
    { _class: "nixos", config: {} }
  ),
);
