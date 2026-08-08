import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./test-mergeAttrDefinitionsWithPrio.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      lib: scope.nixArg$.NoDefault,
      options: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.let$({
        defs: (scope) =>
          scope.apply$(
            scope.lib["modules"]["mergeAttrDefinitionsWithPrio"],
            () => scope.options["_module"]["args"],
          ),
        assertLazy: (scope) =>
          scope.func$("pos", (scope) =>
            scope.apply$(scope.throw, () =>
              scope.str$(
                () => [
                  scope.pos["file"],
                  ":",
                  scope.apply$(scope.toString, () => scope.pos["line"]),
                  ":",
                  scope.apply$(scope.toString, () => scope.pos["column"]),
                  ": The test must not evaluate this the assertLazy thunk, but it did. Unexpected strictness leads to unexpected errors and performance problems.",
                ]
              ))),
      }).in$((scope) =>
        scope.attrSet$({
          ...scope.deepSet$(["options", "result"], () =>
            scope.apply$(scope.lib["mkOption"], {})),
          ...scope.deepSet$(["config", "_module", "args"], () =>
            scope.attrSet$({
              default: () =>
                scope.apply$(scope.lib["mkDefault"], () =>
                  scope.apply$(scope.assertLazy, () =>
                    scope.__curPos)),
              regular: null,
              force: () =>
                scope.apply$(scope.lib["mkForce"], () =>
                  scope.apply$(scope.assertLazy, () =>
                    scope.__curPos)),
              unused: () =>
                scope.apply$(scope.assertLazy, () =>
                  scope.__curPos),
            })),
          ...scope.deepSet$(["config", "result"], () =>
            ((_cond) => {
              if (!_cond) {
                throw new Error(
                  "assertion failed: " +
                    "defs.default.highestPrio == (lib.mkDefault (assertLazy __curPos)).priority",
                );
              }
              return ((_cond) => {
                if (!_cond) {
                  throw new Error(
                    "assertion failed: " +
                      "defs.regular.highestPrio == lib.modules.defaultOverridePriority",
                  );
                }
                return ((_cond) => {
                  if (!_cond) {
                    throw new Error(
                      "assertion failed: " +
                        "defs.force.highestPrio == (lib.mkForce (assertLazy __curPos)).priority",
                    );
                  }
                  return true;
                })(
                  scope.operators$.equal(
                    scope.defs["force"]["highestPrio"],
                    scope.apply$(scope.lib["mkForce"], () =>
                      scope.apply$(scope.assertLazy, () => scope.__curPos))[
                        "priority"
                      ],
                  ),
                );
              })(
                scope.operators$.equal(
                  scope.defs["regular"]["highestPrio"],
                  scope.lib["modules"]["defaultOverridePriority"],
                ),
              );
            })(
              scope.operators$.equal(
                scope.defs["default"]["highestPrio"],
                scope.apply$(scope.lib["mkDefault"], () =>
                  scope.apply$(scope.assertLazy, () => scope.__curPos))[
                    "priority"
                  ],
              ),
            )),
        })
      ))
  ),
);
