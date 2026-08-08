import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./source-types.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        defaultSourceType: (scope) =>
          scope.func$("tname", (scope) =>
            scope.attrSet$({
              shortName: () => scope.tname,
              isSource: false,
            })),
      }).in$((scope) =>
        scope.apply$(scope.lib["mapAttrs"], () =>
          scope.func$("tname", (scope) =>
            scope.func$("tset", (scope) =>
              scope.operators$.merge(
                scope.apply$(scope.defaultSourceType, () => scope.tname),
                scope.tset,
              ))), {
          fromSource: { isSource: true },
          binaryNativeCode: {},
          binaryBytecode: {},
          binaryFirmware: {},
          obfuscatedCode: {},
        })
      ))
  ),
);
