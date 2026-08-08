import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./default-type-merge-payload.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      lib: scope.nixArg$.NoDefault,
      options: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.let$({
        fooOf: (scope) =>
          scope.func$("elemType", (scope) =>
            scope.apply$(scope.lib["mkOptionType"], () =>
              scope.attrSet$({
                name: "foo",
                functor: () =>
                  scope.attrSet$({
                    name: "foo",
                    type: () =>
                      scope.func$("payload", (scope) =>
                        scope.apply$(scope.fooOf, () =>
                          scope.payload["elemType"])),
                    binOp: () =>
                      scope.func$("a", (scope) =>
                        scope.func$("_b", (scope) =>
                          scope.a)),
                    ...scope.deepSet$(["payload", "elemType"], () =>
                      scope.elemType),
                  }),
              }))),
      }).in$((scope) =>
        scope.attrSet$({
          imports: () => [
            scope.attrSet$({
              ...scope.deepSet$(["options", "foo"], () =>
                scope.apply$(scope.lib["mkOption"], () =>
                  scope.attrSet$({
                    type: () =>
                      scope.apply$(
                        scope.fooOf,
                        () => scope.lib["types"]["int"],
                      ),
                  }))),
            }),
            scope.attrSet$({
              ...scope.deepSet$(["options", "foo"], () =>
                scope.apply$(scope.lib["mkOption"], () =>
                  scope.attrSet$({
                    type: () =>
                      scope.apply$(
                        scope.fooOf,
                        () => scope.lib["types"]["int"],
                      ),
                  }))),
            }),
          ],
          ...scope.deepSet$(["options", "result"], () =>
            scope.apply$(scope.lib["mkOption"], () =>
              scope.attrSet$({
                default: () =>
                  scope.apply$(
                    scope.builtins["seq"],
                    () => scope.options["foo"],
                    "ok",
                  ),
              }))),
        })
      ))
  ),
);
