import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL(
    "./attrList-valueMeta-definitions-file-diagnostic-forwarding.nix",
    import.meta.url,
  ).pathname,
  ({ scope }) => (
    scope.func$({
      lib: scope.nixArg$.NoDefault,
      options: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.let$({
        mkOption: (scope) => scope.lib["mkOption"],
        mkMerge: (scope) => scope.lib["mkMerge"],
        types: (scope) => scope.lib["types"],
      }).in$((scope) =>
        scope.attrSet$({
          imports: () => [scope.attrSet$({
            _file: "the-defs-file.nix",
            ...scope.deepSet$(["config", "flags", "my-flag"], 3.14),
          })],
          ...scope.deepSet$(["options", "flags"], () =>
            scope.apply$(scope.mkOption, () =>
              scope.attrSet$({
                type: () =>
                  scope.apply$(scope.types["attrListWith"], () =>
                    scope.attrSet$({
                      elemType: () => scope.types["anything"],
                      asAttrs: true,
                      mergeAttrValues: () =>
                        scope.func$("_name", (scope) =>
                          scope.func$("vs", (scope) =>
                            scope.apply$(scope.lib["head"], () => scope.vs))),
                    })),
              }))),
          ...scope.deepSet$(["options", "argv"], () =>
            scope.apply$(scope.mkOption, () =>
              scope.attrSet$({
                type: () =>
                  scope.apply$(scope.types["listOf"], () =>
                    scope.types["str"]),
              }))),
          ...scope.deepSet$(["config", "argv"], () =>
            scope.apply$(scope.mkMerge, () =>
              scope.options["flags"]["valueMeta"]["definitions"])),
        })
      ))
  ),
);
