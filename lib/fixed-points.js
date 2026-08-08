import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./fixed-points.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.recAttrSet$({
          fix: (scope) =>
            scope.func$("f", (scope) =>
              scope.let$({
                x: (scope) => scope.apply$(scope.f, () => scope.x),
              }).in$((scope) => scope.x)),
          "fix'": (scope) =>
            scope.func$("f", (scope) =>
              scope.let$({
                x: (scope) =>
                  scope.operators$.merge(
                    scope.apply$(scope.f, () => scope.x),
                    scope.attrSet$({
                      __unfix__: () => scope.f,
                    }),
                  ),
              }).in$((scope) => scope.x)),
          converge: (scope) =>
            scope.func$("f", (scope) =>
              scope.func$("x", (scope) =>
                scope.let$({
                  "x'": (scope) => scope.apply$(scope.f, () => scope.x),
                }).in$((scope) =>
                  scope.if$(scope.operators$.equal(scope["x'"], scope.x)).then$(
                    () => scope.x
                  ).else$(() =>
                    scope.apply$(scope.converge, () => scope.f, () =>
                      scope["x'"])
                  )
                ))),
          extends: (scope) =>
            scope.func$("overlay", (scope) =>
              scope.func$("f", (scope) =>
                scope.func$("final", (scope) =>
                  scope.let$({
                    prev: (scope) =>
                      scope.apply$(scope.f, () => scope.final),
                  }).in$((scope) =>
                    scope.operators$.merge(
                      scope.prev,
                      scope.apply$(scope.overlay, () =>
                        scope.final, () =>
                        scope.prev),
                    )
                  )))),
          composeExtensions: (scope) =>
            scope.func$("f", (scope) =>
              scope.func$("g", (scope) =>
                scope.func$("final", (scope) =>
                  scope.func$("prev", (scope) =>
                    scope.let$({
                      fApplied: (scope) =>
                        scope.apply$(scope.f, () =>
                          scope.final, () =>
                          scope.prev),
                      "prev'": (scope) =>
                        scope.operators$.merge(scope.prev, scope.fApplied),
                    }).in$((scope) =>
                      scope.operators$.merge(
                        scope.fApplied,
                        scope.apply$(scope.g, () => scope.final, () =>
                          scope["prev'"]),
                      )
                    ))))),
          composeManyExtensions: (scope) =>
            scope.apply$(scope.lib["foldr"], () =>
              scope.func$("x", (scope) =>
                scope.func$("y", (scope) =>
                  scope.apply$(scope.composeExtensions, () =>
                    scope.x, () =>
                    scope.y))), () =>
              scope.func$("final", (scope) =>
                scope.func$("prev", (scope) => ({})))),
          makeExtensible: (scope) =>
            scope.apply$(scope.makeExtensibleWithCustomName, "extend"),
          makeExtensibleWithCustomName: (scope) =>
            scope.func$("extenderName", (scope) =>
              scope.func$("rattrs", (scope) =>
                scope.apply$(scope["fix'"], () =>
                  scope.func$("self", (scope) =>
                    scope.operators$.merge(
                      scope.apply$(scope.rattrs, () => scope.self),
                      scope.attrSet$({
                        ...scope.deepSet$([scope.extenderName], () =>
                          scope.func$("f", (scope) =>
                            scope.apply$(
                              scope.makeExtensibleWithCustomName,
                              () => scope.extenderName,
                              () =>
                                scope.apply$(
                                  scope.extends,
                                  () => scope.f,
                                  () => scope.rattrs,
                                ),
                            ))),
                      }),
                    ))))),
          toExtension: (scope) =>
            scope.func$("f", (scope) =>
              scope.if$(scope.apply$(scope.lib["isFunction"], () =>
                scope.f)).then$(() =>
                  scope.func$("final", (scope) =>
                    scope.func$("prev", (scope) =>
                      scope.let$({
                        fPrev: (scope) =>
                          scope.apply$(scope.f, () =>
                            scope.prev),
                      }).in$((scope) =>
                        scope.if$(scope.apply$(scope.lib["isFunction"], () =>
                          scope.fPrev)).then$(() =>
                            scope.apply$(scope.f, () =>
                              scope.final, () =>
                              scope.prev)
                          ).else$(() =>
                            scope.fPrev
                          )
                      )))
                ).else$(() =>
                  scope.func$("final", (scope) =>
                    scope.func$("prev", (scope) =>
                      scope.f))
                )),
        }),
    )
  ),
);
