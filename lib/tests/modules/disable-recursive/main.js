import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./main.nix", import.meta.url).pathname,
  ({ scope }) => (
    {
      imports: [
        new scope.Path$([new URL("./foo.nix", import.meta.url).pathname], []),
        new scope.Path$([new URL("./bar.nix", import.meta.url).pathname], []),
      ],
      enable: true,
    }
  ),
);
