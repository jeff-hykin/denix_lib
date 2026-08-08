import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./freeform-deprecated-malicous-wrong.nix", import.meta.url).pathname,
  ({ scope }) => (
    //
    scope.attrSet$({
      ...scope.deepSet$(["config", "either"], { int: "foo" }),
      ...scope.deepSet$(["config", "eitherBehindNullor"], { int: "foo" }),
      ...scope.deepSet$(["config", "oneOf"], { int: "foo" }),
      ...scope.deepSet$(["config", "number"], { str: "foo" }),
    })
  ),
);
