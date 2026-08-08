import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./importApply-disabling.nix", import.meta.url).pathname,
  ({ scope }) => (
    {
      imports: [
        new scope.Path$([
          new URL("./importApply.nix", import.meta.url).pathname,
        ], []),
      ],
      disabledModules: [
        new scope.Path$([
          new URL("./importApply-function.nix", import.meta.url).pathname,
        ], []),
      ],
    }
  ),
);
