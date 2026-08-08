import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./meta.nix", import.meta.url).pathname,
  ({ scope }) => (
    /**
  Some functions for manipulating meta attributes, as well as the
  name attribute.
    */ scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        matchAttrs: (scope) => scope.lib["matchAttrs"],
        any: (scope) => scope.lib["any"],
        all: (scope) => scope.lib["all"],
        isDerivation: (scope) => scope.lib["isDerivation"],
        getBin: (scope) => scope.lib["getBin"],
        "mapAttrs'": (scope) => scope.lib["attrsets"]["mapAttrs'"],
        filterAttrs: (scope) => scope.lib["attrsets"]["filterAttrs"],
        isString: (scope) => scope.builtins["isString"],
        match: (scope) => scope.builtins["match"],
        typeOf: (scope) => scope.builtins["typeOf"],
      }).in$((scope) =>
        scope.recAttrSet$({
          addMetaAttrs: (scope) =>
            scope.func$("newAttrs", (scope) =>
              scope.func$("drv", (scope) =>
                scope.if$(scope.operators$.hasAttr(scope.drv, "overrideAttrs"))
                  .then$(() =>
                    scope.apply$(scope.drv["overrideAttrs"], () =>
                      scope.func$("old", (scope) =>
                        scope.attrSet$({
                          meta: () =>
                            scope.operators$.merge(
                              scope.operators$.selectOrDefault(scope.old, [
                                "meta",
                              ], {}),
                              scope.newAttrs,
                            ),
                        })))
                  ).else$(() =>
                    scope.operators$.merge(
                      scope.drv,
                      scope.attrSet$({
                        meta: () =>
                          scope.operators$.merge(
                            scope.operators$.selectOrDefault(scope.drv, [
                              "meta",
                            ], {}),
                            scope.newAttrs,
                          ),
                      }),
                    )
                  ))),
          dontDistribute: (scope) =>
            scope.func$("drv", (scope) =>
              scope.apply$(
                scope.addMetaAttrs,
                { hydraPlatforms: [] },
                () => scope.drv,
              )),
          setName: (scope) =>
            scope.func$("name", (scope) =>
              scope.func$("drv", (scope) =>
                scope.operators$.merge(
                  scope.drv,
                  scope.attrSet$({
                    name: () => scope.name,
                  }),
                ))),
          updateName: (scope) =>
            scope.func$("updater", (scope) =>
              scope.func$("drv", (scope) =>
                scope.operators$.merge(
                  scope.drv,
                  scope.attrSet$({
                    name: () =>
                      scope.apply$(scope.updater, () => scope.drv["name"]),
                  }),
                ))),
          appendToName: (scope) =>
            scope.func$("suffix", (scope) =>
              scope.apply$(scope.updateName, () =>
                scope.func$("name", (scope) =>
                  scope.let$({
                    x: (scope) =>
                      scope.apply$(
                        scope.builtins["parseDrvName"],
                        () => scope.name,
                      ),
                  }).in$((scope) =>
                    scope.str$(
                      () => [
                        scope.x["name"],
                        "-",
                        scope.suffix,
                        "-",
                        scope.x["version"],
                      ]
                    )
                  )))),
          mapDerivationAttrset: (scope) =>
            scope.func$("f", (scope) =>
              scope.func$("set", (scope) =>
                scope.apply$(scope.lib["mapAttrs"], () =>
                  scope.func$("name", (scope) =>
                    scope.func$("pkg", (scope) =>
                      scope.if$(
                        scope.apply$(
                          scope.lib["isDerivation"],
                          () => scope.pkg,
                        ),
                      ).then$(() => scope.apply$(scope.f, () => scope.pkg))
                        .else$(() => scope.pkg))), () => scope.set))),
          defaultPriority: 5n,
          setPrio: (scope) =>
            scope.func$(
              "priority",
              (scope) =>
                scope.apply$(scope.addMetaAttrs, () =>
                  scope.attrSet$({
                    priority: () => scope.priority,
                  })),
            ),
          lowPrio: (scope) => scope.apply$(scope.setPrio, 10n),
          lowPrioSet: (scope) =>
            scope.func$(
              "set",
              (scope) =>
                scope.apply$(scope.mapDerivationAttrset, () =>
                  scope.lowPrio, () =>
                  scope.set),
            ),
          hiPrio: (scope) => scope.apply$(scope.setPrio, -10n),
          hiPrioSet: (scope) =>
            scope.func$(
              "set",
              (scope) =>
                scope.apply$(scope.mapDerivationAttrset, () =>
                  scope.hiPrio, () =>
                  scope.set),
            ),
          platformMatch: (scope) =>
            scope.func$("platform", (scope) =>
              scope.func$("elem", (scope) =>
                scope.if$(scope.apply$(scope.isString, () => scope.elem)).then$(
                  () => ((scope.operators$.hasAttr(scope.platform, "system")) &&
                    (scope.operators$.equal(
                      scope.elem,
                      scope.platform["system"],
                    )))
                ).else$(() =>
                  scope.apply$(
                    scope.matchAttrs,
                    () =>
                      scope.if$(scope.operators$.hasAttr(scope.elem, "parsed"))
                        .then$(() => scope.elem).else$(() =>
                          scope.attrSet$({
                            parsed: () => scope.elem,
                          })
                        ),
                    () => scope.platform,
                  )
                ))),
          availableOn: (scope) =>
            scope.func$("platform", (scope) =>
              scope.func$(
                "pkg",
                (
                  scope,
                ) => (((scope.operators$.negate(
                  scope.operators$.hasAttrPath(scope.pkg, "meta", "platforms"),
                )) || (scope.apply$(scope.any, () =>
                  scope.apply$(scope.platformMatch, () => scope.platform), () =>
                  scope.pkg["meta"]["platforms"]))) &&
                  ((scope.operators$.negate(
                    scope.operators$.hasAttrPath(
                      scope.pkg,
                      "meta",
                      "badPlatforms",
                    ),
                  )) || (scope.operators$.negate(scope.apply$(scope.any, () =>
                    scope.apply$(scope.platformMatch, () =>
                      scope.platform), () =>
                    scope.pkg["meta"]["badPlatforms"]))))),
              )),
          licensesSpdx: (scope) =>
            scope.apply$(
              scope["mapAttrs'"],
              () =>
                scope.func$("_key", (scope) =>
                  scope.func$("license", (scope) =>
                    scope.attrSet$({
                      name: () =>
                        scope.license["spdxId"],
                      value: () => scope.license,
                    }))),
              () =>
                scope.apply$(scope.filterAttrs, () =>
                  scope.func$("_key", (scope) =>
                    scope.func$("license", (scope) =>
                      scope.operators$.hasAttr(scope.license, "spdxId"))), () =>
                  scope.lib["licenses"]),
            ),
          getLicenseFromSpdxId: (scope) =>
            scope.func$("licstr", (scope) =>
              scope.apply$(
                scope.getLicenseFromSpdxIdOr,
                () => scope.licstr,
                () =>
                  scope.apply$(scope.lib["warn"], () =>
                    scope.str$(
                      () => [
                        "getLicenseFromSpdxId: No license with the given SPDX ID found: ",
                        scope.licstr,
                      ]
                    ), () =>
                    scope.attrSet$({
                      shortName: () =>
                        scope.licstr,
                      spdxId: () => scope.licstr,
                    })),
              )),
          getLicenseFromSpdxIdOr: (scope) =>
            scope.let$({
              lowercaseLicenses: (scope) =>
                scope.apply$(
                  scope.lib["mapAttrs'"],
                  () =>
                    scope.func$("name", (scope) =>
                      scope.func$("value", (scope) =>
                        scope.attrSet$({
                          name: () =>
                            scope.apply$(scope.lib["toLower"], () =>
                              scope.name),
                          value: () =>
                            scope.value,
                        }))),
                  () =>
                    scope.licensesSpdx,
                ),
            }).in$((scope) =>
              scope.func$(
                "licstr",
                (scope) =>
                  scope.func$("default", (scope) =>
                    scope.operators$.selectOrDefault(scope.lowercaseLicenses, [
                      scope.apply$(scope.lib["toLower"], () =>
                        scope.licstr),
                    ], () =>
                      scope.default)),
              )
            ),
          getExe: (scope) =>
            scope.func$("x", (scope) =>
              scope.apply$(scope["getExe'"], () => scope.x, () =>
                scope.operators$.selectOrDefault(scope.x, [
                  "meta",
                  "mainProgram",
                ], () =>
                  scope.apply$(
                    scope.lib["warn"],
                    () =>
                      scope.str$(
                        () => [
                          "getExe: Package ",
                          scope.apply$(
                            scope.lib["strings"]["escapeNixIdentifier"],
                            () =>
                              scope.operators$.selectOrDefault(scope.x, [
                                "meta",
                                "name",
                              ], () =>
                                scope.operators$.selectOrDefault(scope.x, [
                                  "pname",
                                ], () => scope.x["name"])),
                          ),
                          " does not have the meta.mainProgram attribute. We'll assume that the main program has the same name for now, but this behavior is deprecated, because it leads to surprising errors when the assumption does not hold. If the package has a main program, please set `meta.mainProgram` in its definition to make this warning go away. Otherwise, if the package does not have a main program, or if you don't control its definition, use getExe' to specify the name to the program, such as lib.getExe' foo \"bar\".",
                        ]
                      ),
                    () => scope.lib["getName"],
                    () => scope.x,
                  )))),
          "getExe'": (scope) =>
            scope.func$("x", (scope) =>
              scope.func$("y", (scope) =>
                ((_cond) => {
                  if (!_cond) {
                    throw new Error(
                      "assertion failed: " +
                        'isDerivation x\n      || throw "lib.meta.getExe\': The first argument is of type ${typeOf x}, but it should be a derivation instead."',
                    );
                  }
                  return ((_cond) => {
                    if (!_cond) {
                      throw new Error(
                        "assertion failed: " +
                          'isString y\n      || throw "lib.meta.getExe\': The second argument is of type ${typeOf y}, but it should be a string instead."',
                      );
                    }
                    return ((_cond) => {
                      if (!_cond) {
                        throw new Error(
                          "assertion failed: " +
                            'match ".*/.*" y == null\n      || throw "lib.meta.getExe\': The second argument \\"${y}\\" is a nested path with a \\"/\\" character, but it should just be the name of the executable instead."',
                        );
                      }
                      return scope.str$(() => [
                        scope.apply$(scope.getBin, () => scope.x),
                        "/bin/",
                        scope.y,
                      ]);
                    })(
                      (scope.operators$.equal(
                        scope.apply$(scope.match, ".*/.*", () =>
                          scope.y),
                        null,
                      )) || (scope.apply$(scope.throw, () =>
                        scope.str$(
                          () => [
                            "lib.meta.getExe': The second argument \"",
                            scope.y,
                            '" is a nested path with a "/" character, but it should just be the name of the executable instead.',
                          ]
                        ))),
                    );
                  })(
                    (scope.apply$(scope.isString, () => scope.y)) ||
                    (scope.apply$(scope.throw, () =>
                      scope.str$(
                        () => [
                          "lib.meta.getExe': The second argument is of type ",
                          scope.apply$(scope.typeOf, () => scope.y),
                          ", but it should be a string instead.",
                        ]
                      ))),
                  );
                })(
                  (scope.apply$(scope.isDerivation, () => scope.x)) ||
                  (scope.apply$(scope.throw, () =>
                    scope.str$(
                      () => [
                        "lib.meta.getExe': The first argument is of type ",
                        scope.apply$(scope.typeOf, () => scope.x),
                        ", but it should be a derivation instead.",
                      ]
                    ))),
                ))),
          cpeFullVersionWithVendor: (scope) =>
            scope.func$(
              "vendor",
              (scope) =>
                scope.func$("version", (scope) =>
                  scope.attrSet$({
                    vendor: () => scope.vendor,
                    version: () => scope.version,
                    update: "*",
                  })),
            ),
        })
      ))
  ),
);
