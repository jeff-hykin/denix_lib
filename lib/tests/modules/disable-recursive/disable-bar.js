import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./disable-bar.nix", import.meta.url).pathname,
  ({ scope }) => (
    {
      disabledModules: [
        new scope.Path$([new URL("./bar.nix", import.meta.url).pathname], []),
      ],
    }
  ),
);
