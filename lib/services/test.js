import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";
import _nix_default_6e679886 from "../default.js";
import _nix_lib_2273e60f from "./lib.js";

export default nixFile(
  new URL("./test.nix", import.meta.url).pathname,
  ({ scope }) => (
    //
    //
    scope.let$({
      lib: (scope) => _nix_default_6e679886(scope.runtime$),
      mkOption: (scope) => scope.lib["mkOption"],
      types: (scope) => scope.lib["types"],
      "portable-lib": (scope) =>
        scope.apply$(_nix_lib_2273e60f(scope.runtime$), () =>
          scope.attrSet$({
            lib: () => scope.lib,
          })),
      configured: (scope) =>
        scope.apply$(scope["portable-lib"]["configure"], () =>
          scope.attrSet$({
            serviceManagerPkgs: () =>
              scope.apply$(scope.throw, "do not use pkgs in this test"),
            extraRootModules: [],
            extraRootSpecialArgs: {},
          })),
      dummyPkg: (scope) =>
        scope.func$("name", (scope) =>
          scope.apply$(scope.derivation, () =>
            scope.attrSet$({
              system: "dummy",
              name: () =>
                scope.name,
              builder: "/bin/false",
            }))),
      exampleConfig: (scope) =>
        scope.attrSet$({
          services: () =>
            scope.attrSet$({
              service1: {
                process: { argv: ["/usr/bin/echo", "hello"] },
                assertions: [{
                  assertion: false,
                  message: "you can't enable this for that reason",
                }],
                warnings: [
                  "The `foo' service is deprecated and will go away soon!",
                ],
              },
              service2: () =>
                scope.attrSet$({
                  process: () =>
                    scope.attrSet$({
                      argv:
                        () => [
                          scope.apply$(scope.dummyPkg, "cowsay.sh"),
                          "world",
                        ],
                    }),
                }),
              service3: () =>
                scope.attrSet$({
                  process: { argv: ["/bin/false"] },
                  ...scope.deepSet$(["services", "exclacow"], () =>
                    scope.attrSet$({
                      process: () =>
                        scope.attrSet$({
                          argv:
                            () => [
                              scope.apply$(
                                scope.lib["getExe"],
                                () => (scope.operators$.merge(
                                  scope.apply$(scope.dummyPkg, "cowsay-ng"),
                                  scope.attrSet$({
                                    ...scope.deepSet$(
                                      ["meta", "mainProgram"],
                                      "cowsay",
                                    ),
                                  }),
                                )),
                              ),
                              "!",
                            ],
                        }),
                      assertions: [{
                        assertion: false,
                        message: "you can't enable this for such reason",
                      }],
                      warnings: [
                        "The `bar' service is deprecated and will go away soon!",
                      ],
                    })),
                }),
            }),
        }),
      exampleEval: (scope) =>
        scope.apply$(scope.lib["evalModules"], () =>
          scope.attrSet$({
            modules: () => [
              scope.attrSet$({
                ...scope.deepSet$(["options", "services"], () =>
                  scope.apply$(scope.mkOption, () =>
                    scope.attrSet$({
                      type: () =>
                        scope.apply$(
                          scope.types["attrsOf"],
                          () => scope.configured["serviceSubmodule"],
                        ),
                    }))),
              }),
              scope.exampleConfig,
            ],
          })),
      filterEval: (scope) =>
        scope.func$("config", (scope) =>
          scope.operators$.merge(
            scope.apply$(
              scope.lib["optionalAttrs"],
              () => scope.operators$.hasAttr(scope.config, "process"),
              () =>
                scope.attrSet$({
                  assertions: () => scope.config.assertions,
                  warnings: () => scope.config.warnings,
                  process: () => scope.config.process,
                }),
            ),
            scope.attrSet$({
              services: () =>
                scope.apply$(
                  scope.lib["mapAttrs"],
                  () => scope.func$("k", (scope) => scope.filterEval),
                  () => scope.config["services"],
                ),
            }),
          )),
      test: (scope) =>
        ((_cond) => {
          if (!_cond) {
            throw new Error(
              "assertion failed: " +
                'filterEval exampleEval.config == {\n        services = {\n          service1 = {\n            process = {\n              argv = [\n                "/usr/bin/echo"\n                "hello"\n              ]',
            );
          }
          return ((_cond) => {
            if (!_cond) {
              throw new Error(
                "assertion failed: " +
                  'portable-lib.getWarnings [ "service1" ] exampleEval.config.services.service1 == [\n        "in service1: The `foo\' service is deprecated and will go away soon!"\n      ]',
              );
            }
            return ((_cond) => {
              if (!_cond) {
                throw new Error(
                  "assertion failed: " +
                    'portable-lib.getAssertions [ "service1" ] exampleEval.config.services.service1 == [\n        {\n          message = "in service1: you can\'t enable this for that reason"',
                );
              }
              return ((_cond) => {
                if (!_cond) {
                  throw new Error(
                    "assertion failed: " +
                      'portable-lib.getWarnings [ "service3" ] exampleEval.config.services.service3 == [\n        "in service3.services.exclacow: The `bar\' service is deprecated and will go away soon!"\n      ]',
                  );
                }
                return ((_cond) => {
                  if (!_cond) {
                    throw new Error(
                      "assertion failed: " +
                        'portable-lib.getAssertions [ "service3" ] exampleEval.config.services.service3 == [\n        {\n          message = "in service3.services.exclacow: you can\'t enable this for such reason"',
                    );
                  }
                  return "ok";
                })(
                  scope.operators$.equal(
                    scope.apply$(scope["portable-lib"]["getAssertions"], [
                      "service3",
                    ], () =>
                      scope.exampleEval["config"]["services"]["service3"]),
                    [{
                      message:
                        "in service3.services.exclacow: you can't enable this for such reason",
                      assertion: false,
                    }],
                  ),
                );
              })(
                scope.operators$.equal(
                  scope.apply$(scope["portable-lib"]["getWarnings"], [
                    "service3",
                  ], () =>
                    scope.exampleEval["config"]["services"]["service3"]),
                  ["in service3.services.exclacow: The `bar' service is deprecated and will go away soon!"],
                ),
              );
            })(
              scope.operators$.equal(
                scope.apply$(scope["portable-lib"]["getAssertions"], [
                  "service1",
                ], () =>
                  scope.exampleEval["config"]["services"]["service1"]),
                [{
                  message: "in service1: you can't enable this for that reason",
                  assertion: false,
                }],
              ),
            );
          })(
            scope.operators$.equal(
              scope.apply$(
                scope["portable-lib"]["getWarnings"],
                ["service1"],
                () => scope.exampleEval["config"]["services"]["service1"],
              ),
              ["in service1: The `foo' service is deprecated and will go away soon!"],
            ),
          );
        })(scope.operators$.equal(
          scope.apply$(scope.filterEval, () => scope.exampleEval["config"]),
          scope.attrSet$({
            services: () =>
              scope.attrSet$({
                service1: {
                  process: { argv: ["/usr/bin/echo", "hello"] },
                  services: {},
                  assertions: [{
                    assertion: false,
                    message: "you can't enable this for that reason",
                  }],
                  warnings: [
                    "The `foo' service is deprecated and will go away soon!",
                  ],
                },
                service2: () =>
                  scope.attrSet$({
                    process: () =>
                      scope.attrSet$({
                        argv:
                          () => [
                            scope.str$(
                              () => [scope.apply$(scope.dummyPkg, "cowsay.sh")]
                            ),
                            "world",
                          ],
                      }),
                    services: {},
                    assertions: [],
                    warnings: [],
                  }),
                service3: () =>
                  scope.attrSet$({
                    process: { argv: ["/bin/false"] },
                    ...scope.deepSet$(["services", "exclacow"], () =>
                      scope.attrSet$({
                        process: () =>
                          scope.attrSet$({
                            argv:
                              () => [
                                scope.str$(
                                  () => [
                                    scope.apply$(scope.dummyPkg, "cowsay-ng"),
                                    "/bin/cowsay",
                                  ]
                                ),
                                "!",
                              ],
                          }),
                        services: {},
                        assertions: [{
                          assertion: false,
                          message: "you can't enable this for such reason",
                        }],
                        warnings: [
                          "The `bar' service is deprecated and will go away soon!",
                        ],
                      })),
                    assertions: [],
                    warnings: [],
                  }),
              }),
          }),
        )),
    }).in$((scope) =>
      scope.test
    )
  ),
);
