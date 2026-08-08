import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./disable-foo.nix", import.meta.url).pathname,
  ({ scope }) => (
    {
      disabledModules: [
        new scope.Path$([new URL("./foo.nix", import.meta.url).pathname], []),
      ],
    }
  ),
);
