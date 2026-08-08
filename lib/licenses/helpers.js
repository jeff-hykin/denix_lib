import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./helpers.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        all: (scope) => scope.lib["all"],
        any: (scope) => scope.lib["any"],
        elem: (scope) => scope.lib["elem"],
        handleComplexProperty: (scope) =>
          scope.func$("evaluateSubProperty", (scope) =>
            scope.func$("AND", (scope) =>
              scope.func$("OR", (scope) =>
                scope.func$("license", (scope) =>
                  scope.if$(
                    scope.operators$.equal(
                      scope.license["licenseType"],
                      "compound",
                    ),
                  ).then$(() =>
                    scope.if$(
                      scope.operators$.equal(scope.license["operator"], "OR"),
                    ).then$(() =>
                      scope.apply$(
                        scope.OR,
                        () => scope.evaluateSubProperty,
                        () => scope.license["licenses"],
                      )
                    ).elseIf$(() =>
                      scope.operators$.equal(scope.license["operator"], "AND")
                    ).then$(() =>
                      scope.apply$(
                        scope.AND,
                        () => scope.evaluateSubProperty,
                        () => scope.license["licenses"],
                      )
                    ).else$(() =>
                      scope.apply$(scope.throw, "Unknown license operator")
                    )
                  ).elseIf$(() =>
                    scope.operators$.equal(
                      scope.license["licenseType"],
                      "exception",
                    )
                  ).then$(() => ((scope.apply$(scope.evaluateSubProperty, () =>
                    scope.license["license"])) &&
                    (scope.apply$(scope.evaluateSubProperty, () =>
                      scope.license["exception"])))
                  ).elseIf$(() =>
                    scope.operators$.equal(scope.license["licenseType"], "plus")
                  ).then$(() =>
                    scope.apply$(scope.evaluateSubProperty, () =>
                      scope.license["license"])
                  ).else$(() =>
                    scope.apply$(
                      scope.throw,
                      "Unknown license type or legacy license",
                    )
                  ))))),
      }).in$((scope) =>
        scope.recAttrSet$({
          evaluateProperty: (scope) =>
            scope.func$("predicate", (scope) =>
              scope.func$("permissive", (scope) =>
                scope.let$({
                  OR: (scope) =>
                    scope.if$(scope.permissive).then$(() => scope.any).else$(
                      () => scope.all
                    ),
                  AND: (scope) =>
                    scope.if$(scope.permissive).then$(() => scope.all).else$(
                      () => scope.any
                    ),
                  evaluateComplexProperty: (scope) =>
                    scope.apply$(
                      scope.handleComplexProperty,
                      () =>
                        scope.apply$(scope.evaluateProperty, () =>
                          scope.predicate, () =>
                          scope.permissive),
                      () => scope.AND,
                      () => scope.OR,
                    ),
                }).in$((scope) =>
                  scope.func$("license", (scope) =>
                    scope.if$(
                      scope.operators$.equal(
                        scope.license["licenseType"],
                        "simple",
                      ),
                    ).then$(() =>
                      scope.apply$(scope.predicate, () => scope.license)
                    ).else$(() =>
                      scope.apply$(
                        scope.evaluateComplexProperty,
                        () => scope.license,
                      )
                    ))
                ))),
          evaluateNamedProperty: (scope) =>
            scope.func$("name", (scope) =>
              scope.func$("permissive", (scope) =>
                scope.let$({
                  OR: (scope) =>
                    scope.if$(scope.permissive).then$(() => scope.any).else$(
                      () => scope.all
                    ),
                  AND: (scope) =>
                    scope.if$(scope.permissive).then$(() => scope.all).else$(
                      () => scope.any
                    ),
                  evaluateComplexProperty: (scope) =>
                    scope.apply$(
                      scope.handleComplexProperty,
                      () =>
                        scope.apply$(scope.evaluateNamedProperty, () =>
                          scope.name, () =>
                          scope.permissive),
                      () => scope.AND,
                      () => scope.OR,
                    ),
                }).in$((scope) =>
                  scope.func$("license", (scope) =>
                    scope.if$(
                      scope.operators$.equal(
                        scope.license["licenseType"],
                        "simple",
                      ),
                    ).then$(() => scope.license[scope.name]).else$(() =>
                      scope.apply$(
                        scope.evaluateComplexProperty,
                        () => scope.license,
                      )
                    ))
                ))),
          isFree: (scope) =>
            scope.apply$(scope.evaluateNamedProperty, "free", true),
          isRedistributable: (scope) =>
            scope.apply$(scope.evaluateNamedProperty, "redistributable", true),
          containsLicenses: (scope) =>
            scope.func$(
              "licenses",
              (scope) =>
                scope.apply$(scope.evaluateProperty, () =>
                  scope.func$("x", (scope) =>
                    scope.apply$(scope.elem, () =>
                      scope.x, () =>
                      scope.licenses)), false),
            ),
          toSPDX: (scope) =>
            scope.func$("license", (scope) =>
              scope.let$({
                mkBracket: (scope) =>
                  scope.func$("x", (scope) =>
                    scope.if$(
                      (scope.operators$.equal(
                        scope.x["licenseType"],
                        "compound",
                      )) ||
                      (scope.operators$.equal(
                        scope.x["licenseType"],
                        "exception",
                      )),
                    ).then$(() =>
                      scope.str$(() => [
                        "(",
                        scope.apply$(scope.toSPDX, () => scope.x),
                        ")",
                      ])
                    ).else$(() =>
                      scope.apply$(scope.toSPDX, () =>
                        scope.x)
                    )),
              }).in$((scope) =>
                scope.if$(
                  scope.operators$.equal(
                    scope.license["licenseType"],
                    "simple",
                  ),
                ).then$(() =>
                  scope.operators$.selectOrDefault(
                    scope.license,
                    ["spdxId"],
                    () =>
                      scope.str$(
                        () => ["LicenseRef-nixos-", scope.license["shortName"]]
                      ),
                  )
                ).elseIf$(() =>
                  scope.operators$.equal(
                    scope.license["licenseType"],
                    "compound",
                  )
                ).then$(() =>
                  scope.apply$(
                    scope.lib["concatMapStringsSep"],
                    () =>
                      scope.str$(() => [" ", scope.license["operator"], " "]),
                    () =>
                      scope.func$("x", (scope) =>
                        scope.apply$(scope.mkBracket, () => scope.x)),
                    () => scope.license["licenses"],
                  )
                ).elseIf$(() =>
                  scope.operators$.equal(
                    scope.license["licenseType"],
                    "exception",
                  )
                ).then$(() =>
                  scope.str$(() => [
                    scope.apply$(
                      scope.mkBracket,
                      () => scope.license["license"],
                    ),
                    " ",
                    scope.license["operator"],
                    " ",
                    scope.apply$(
                      scope.mkBracket,
                      () => scope.license["exception"],
                    ),
                  ])
                ).elseIf$(() =>
                  scope.operators$.equal(scope.license["licenseType"], "plus")
                ).then$(() =>
                  scope.str$(() => [
                    scope.apply$(
                      scope.mkBracket,
                      () => scope.license["license"],
                    ),
                    scope.license["operator"],
                  ])
                ).else$(() => scope.apply$(scope.throw, "Unknown license type"))
              )),
        })
      ))
  ),
);
