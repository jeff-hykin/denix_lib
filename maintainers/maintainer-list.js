import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./maintainer-list.nix", import.meta.url).pathname,
  ({ scope }) => (
    //
    {}
  ),
);
