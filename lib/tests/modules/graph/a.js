import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./a.nix", import.meta.url).pathname,
  ({ scope }) => (
    {
      imports: [{ imports: [{}] }],
      disabledModules: [
        new scope.Path$([new URL("./b.nix", import.meta.url).pathname], []),
      ],
    }
  ),
);
