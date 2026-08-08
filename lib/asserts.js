import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./asserts.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        concatStringsSep: (scope) => scope.lib["strings"]["concatStringsSep"],
        filter: (scope) => scope.lib["lists"]["filter"],
        showWarnings: (scope) => scope.lib["trivial"]["showWarnings"],
      }).in$((scope) =>
        scope.recAttrSet$({
          assertMsg: (scope) =>
            scope.func$("pred", (scope) =>
              scope.func$(
                "msg",
                (
                  scope,
                ) => ((scope.pred) ||
                  (scope.apply$(scope.throw, () => scope.msg))),
              )),
          assertOneOf: (scope) =>
            scope.func$("name", (scope) =>
              scope.func$("val", (scope) =>
                scope.func$("xs", (scope) =>
                  scope.apply$(scope.assertMsg, () =>
                    scope.apply$(
                      scope.lib["elem"],
                      () => scope.val,
                      () => scope.xs,
                    ), () =>
                    scope.str$(
                      () => [
                        scope.name,
                        " must be one of ",
                        scope.apply$(
                          scope.lib["generators"]["toPretty"],
                          {},
                          () => scope.xs,
                        ),
                        ", but is: ",
                        scope.apply$(
                          scope.lib["generators"]["toPretty"],
                          {},
                          () => scope.val,
                        ),
                      ]
                    ))))),
          assertEachOneOf: (scope) =>
            scope.func$("name", (scope) =>
              scope.func$("vals", (scope) =>
                scope.func$("xs", (scope) =>
                  scope.apply$(scope.assertMsg, () =>
                    scope.apply$(
                      scope.lib["all"],
                      () =>
                        scope.func$("val", (scope) =>
                          scope.apply$(scope.lib["elem"], () =>
                            scope.val, () =>
                            scope.xs)),
                      () =>
                        scope.vals,
                    ), () =>
                    scope.str$(
                      () => [
                        "each element in ",
                        scope.name,
                        " must be one of ",
                        scope.apply$(
                          scope.lib["generators"]["toPretty"],
                          {},
                          () => scope.xs,
                        ),
                        ", but is: ",
                        scope.apply$(
                          scope.lib["generators"]["toPretty"],
                          {},
                          () => scope.vals,
                        ),
                      ]
                    ))))),
          checkAssertWarn: (scope) =>
            scope.func$("assertions", (scope) =>
              scope.func$("warnings", (scope) =>
                scope.func$("val", (scope) =>
                  scope.let$({
                    failedAssertions: (scope) =>
                      scope.apply$(
                        scope.map,
                        () => scope.func$("x", (scope) => scope.x["message"]),
                        () =>
                          scope.apply$(
                            scope.filter,
                            () =>
                              scope.func$(
                                "x",
                                (scope) =>
                                  scope.operators$.negate(scope.x["assertion"]),
                              ),
                            () => scope.assertions,
                          ),
                      ),
                  }).in$((scope) =>
                    scope.if$(
                      scope.operators$.notEqual(scope.failedAssertions, []),
                    ).then$(() =>
                      scope.apply$(scope.throw, () =>
                        scope.str$(
                          () => [
                            "\nFailed assertions:\n",
                            scope.apply$(scope.concatStringsSep, "\n", () =>
                              scope.apply$(scope.map, () =>
                                scope.func$(
                                  "x",
                                  (scope) => scope.str$(() => ["- ", scope.x]),
                                ), () => scope.failedAssertions)),
                          ]
                        ))
                    ).else$(() =>
                      scope.apply$(
                        scope.showWarnings,
                        () => scope.warnings,
                        () => scope.val,
                      )
                    )
                  )))),
        })
      ))
  ),
);
