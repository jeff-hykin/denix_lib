import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./foo.nix", import.meta.url).pathname,
  ({ scope }) => (
    {
      imports: [
        new scope.Path$([
          new URL("../declare-enable.nix", import.meta.url).pathname,
        ], []),
      ],
    }
  ),
);
