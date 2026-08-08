import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./define-settingsDict-a-is-b.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      config: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.attrSet$({
        ...scope.deepSet$(["settingsDict", "a"], () =>
          scope.config["settingsDict"]["b"]),
      }))
  ),
);
