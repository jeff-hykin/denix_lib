import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./freeform-deprecated-malicous-wrong2.nix", import.meta.url)
    .pathname,
  ({ scope }) => (
    //
    //
    scope.attrSet$({
      ...scope.deepSet$(["config", "either"], { int: 42n }),
      ...scope.deepSet$(["config", "eitherBehindNullor"], { int: 42n }),
      ...scope.deepSet$(["config", "oneOf"], { int: 42n }),
      ...scope.deepSet$(["config", "number"], { str: 42n }),
    })
  ),
);
