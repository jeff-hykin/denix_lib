import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./define-enable-throw.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.attrSet$({
      ...scope.deepSet$(["config", "enable"], () =>
        scope.apply$(scope.throw, "oops")),
    })
  ),
);
