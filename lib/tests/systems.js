import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";
import _nix_default_6e679886 from "../default.js";

export default nixFile(
  new URL("./systems.nix", import.meta.url).pathname,
  ({ scope }) => (
    //
    //
    //
    //
    //
    scope.let$({
      lib: (scope) => _nix_default_6e679886(scope.runtime$),
      mseteq: (scope) =>
        scope.func$("x", (scope) =>
          scope.func$("y", (scope) =>
            scope.attrSet$({
              expr: () =>
                scope.apply$(scope.lib["sort"], () =>
                  scope.lib["lessThan"], () =>
                  scope.x),
              expected: () =>
                scope.apply$(scope.lib["sort"], () =>
                  scope.lib["lessThan"], () =>
                  scope.y),
            }))),
      toLosslessStringMaybe: (scope) =>
        scope.func$("sys", (scope) =>
          scope.if$(scope.apply$(scope.lib["isString"], () =>
            scope.sys)).then$(() =>
              scope.sys
            ).elseIf$(() =>
              scope.apply$(scope.lib["systems"]["equals"], () =>
                scope.sys, () =>
                scope.apply$(scope.lib["systems"]["elaborate"], () =>
                  scope.sys["system"]))
            ).then$(() =>
              scope.sys["system"]
            ).else$(null)),
    }).in$((scope) =>
      scope.apply$(
        scope.lib["runTests"],
        () => (scope.operators$.merge(
          scope.with$(() => scope.lib["systems"]["doubles"], (scope) =>
            scope.attrSet$({
              testall: () =>
                scope.apply$(
                  scope.mseteq,
                  () => scope.all,
                  () => (scope.operators$.listConcat(
                    scope.linux,
                    scope.operators$.listConcat(
                      scope.darwin,
                      scope.operators$.listConcat(
                        scope.freebsd,
                        scope.operators$.listConcat(
                          scope.openbsd,
                          scope.operators$.listConcat(
                            scope.netbsd,
                            scope.operators$.listConcat(
                              scope.illumos,
                              scope.operators$.listConcat(
                                scope.wasi,
                                scope.operators$.listConcat(
                                  scope.windows,
                                  scope.operators$.listConcat(
                                    scope.cygwin,
                                    scope.operators$.listConcat(
                                      scope.embedded,
                                      scope.operators$.listConcat(
                                        scope.mmix,
                                        scope.operators$.listConcat(
                                          scope.js,
                                          scope.operators$.listConcat(
                                            scope.genode,
                                            scope.operators$.listConcat(
                                              scope.redox,
                                              scope.uefi,
                                            ),
                                          ),
                                        ),
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  )),
                ),
              testarm: () =>
                scope.apply$(scope.mseteq, () => scope.arm, [
                  "armv5tel-linux",
                  "armv6l-linux",
                  "armv6l-netbsd",
                  "armv6l-none",
                  "armv7a-linux",
                  "armv7a-netbsd",
                  "armv7l-linux",
                  "armv7l-netbsd",
                  "arm-none",
                ]),
              testarmv7: () =>
                scope.apply$(scope.mseteq, () =>
                  scope.armv7, [
                  "armv7a-linux",
                  "armv7l-linux",
                  "armv7a-netbsd",
                  "armv7l-netbsd",
                ]),
              testi686: () =>
                scope.apply$(scope.mseteq, () =>
                  scope.i686, [
                  "i686-linux",
                  "i686-freebsd",
                  "i686-genode",
                  "i686-netbsd",
                  "i686-openbsd",
                  "i686-cygwin",
                  "i686-windows",
                  "i686-none",
                ]),
              testmips: () =>
                scope.apply$(scope.mseteq, () =>
                  scope.mips, [
                  "mips-none",
                  "mips64-none",
                  "mips-linux",
                  "mips64-linux",
                  "mips64el-linux",
                  "mipsel-linux",
                  "mipsel-netbsd",
                ]),
              testmmix: () =>
                scope.apply$(scope.mseteq, () =>
                  scope.mmix, ["mmix-mmixware"]),
              testpower: () =>
                scope.apply$(scope.mseteq, () =>
                  scope.power, [
                  "powerpc-linux",
                  "powerpc-netbsd",
                  "powerpc-none",
                  "powerpc64-linux",
                  "powerpc64le-linux",
                  "powerpcle-none",
                ]),
              testriscv: () =>
                scope.apply$(scope.mseteq, () => scope.riscv, [
                  "riscv32-linux",
                  "riscv64-linux",
                  "riscv32-netbsd",
                  "riscv64-netbsd",
                  "riscv32-none",
                  "riscv64-none",
                ]),
              testriscv32: () =>
                scope.apply$(scope.mseteq, () => scope.riscv32, [
                  "riscv32-linux",
                  "riscv32-netbsd",
                  "riscv32-none",
                ]),
              testriscv64: () =>
                scope.apply$(scope.mseteq, () => scope.riscv64, [
                  "riscv64-linux",
                  "riscv64-netbsd",
                  "riscv64-none",
                ]),
              tests390x: () =>
                scope.apply$(scope.mseteq, () => scope.s390x, [
                  "s390x-linux",
                  "s390x-none",
                ]),
              testx86_64: () =>
                scope.apply$(scope.mseteq, () => scope.x86_64, [
                  "x86_64-linux",
                  "x86_64-freebsd",
                  "x86_64-genode",
                  "x86_64-redox",
                  "x86_64-openbsd",
                  "x86_64-netbsd",
                  "x86_64-cygwin",
                  "x86_64-solaris",
                  "x86_64-windows",
                  "x86_64-none",
                  "x86_64-uefi",
                ]),
              testcygwin: () =>
                scope.apply$(scope.mseteq, () => scope.cygwin, [
                  "i686-cygwin",
                  "x86_64-cygwin",
                ]),
              testdarwin: () =>
                scope.apply$(scope.mseteq, () => scope.darwin, [
                  "aarch64-darwin",
                ]),
              testfreebsd: () =>
                scope.apply$(scope.mseteq, () => scope.freebsd, [
                  "aarch64-freebsd",
                  "i686-freebsd",
                  "x86_64-freebsd",
                ]),
              testgenode: () =>
                scope.apply$(scope.mseteq, () => scope.genode, [
                  "aarch64-genode",
                  "i686-genode",
                  "x86_64-genode",
                ]),
              testredox: () =>
                scope.apply$(scope.mseteq, () => scope.redox, ["x86_64-redox"]),
              testgnu: () =>
                scope.apply$(scope.mseteq, () => scope.gnu, () => scope.linux),
              testillumos: () =>
                scope.apply$(scope.mseteq, () => scope.illumos, [
                  "x86_64-solaris",
                ]),
              testlinux: () =>
                scope.apply$(scope.mseteq, () => scope.linux, [
                  "aarch64-linux",
                  "arc-linux",
                  "armv5tel-linux",
                  "armv6l-linux",
                  "armv7a-linux",
                  "armv7l-linux",
                  "i686-linux",
                  "loongarch64-linux",
                  "m68k-linux",
                  "sh4-linux",
                  "microblaze-linux",
                  "microblazeel-linux",
                  "mips-linux",
                  "mips64-linux",
                  "mips64el-linux",
                  "mipsel-linux",
                  "powerpc-linux",
                  "powerpc64-linux",
                  "powerpc64le-linux",
                  "riscv32-linux",
                  "riscv64-linux",
                  "s390-linux",
                  "s390x-linux",
                  "x86_64-linux",
                ]),
              testnetbsd: () =>
                scope.apply$(scope.mseteq, () => scope.netbsd, [
                  "aarch64-netbsd",
                  "armv6l-netbsd",
                  "armv7a-netbsd",
                  "armv7l-netbsd",
                  "i686-netbsd",
                  "m68k-netbsd",
                  "mipsel-netbsd",
                  "powerpc-netbsd",
                  "riscv32-netbsd",
                  "riscv64-netbsd",
                  "x86_64-netbsd",
                ]),
              testopenbsd: () =>
                scope.apply$(scope.mseteq, () => scope.openbsd, [
                  "i686-openbsd",
                  "x86_64-openbsd",
                ]),
              testwindows: () =>
                scope.apply$(scope.mseteq, () => scope.windows, [
                  "aarch64-windows",
                  "i686-windows",
                  "x86_64-windows",
                ]),
              testunix: () =>
                scope.apply$(
                  scope.mseteq,
                  () => scope.unix,
                  () => (scope.operators$.listConcat(
                    scope.linux,
                    scope.operators$.listConcat(
                      scope.darwin,
                      scope.operators$.listConcat(
                        scope.freebsd,
                        scope.operators$.listConcat(
                          scope.openbsd,
                          scope.operators$.listConcat(
                            scope.netbsd,
                            scope.operators$.listConcat(
                              scope.illumos,
                              scope.operators$.listConcat(
                                scope.cygwin,
                                scope.redox,
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  )),
                ),
            })),
          scope.operators$.merge(
            scope.attrSet$({
              test_platforms_pass_typecheck: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.builtins["filter"], () =>
                      scope.func$("system", (scope) =>
                        scope.let$({
                          evalResult: (scope) =>
                            scope.apply$(scope.builtins["tryEval"], () =>
                              scope.apply$(
                                scope
                                  .lib["systems"]["parse"][
                                    "mkSystemFromString"
                                  ],
                                () => scope.system,
                              )),
                        }).in$((scope) =>
                          scope.operators$.equal(
                            scope.evalResult["success"],
                            false,
                          )
                        )), () => scope.lib["platforms"]["all"]),
                  expected: [],
                }),
              "test_equals_example_x86_64-linux": () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.lib["systems"]["equals"], () =>
                      scope.apply$(
                        scope.lib["systems"]["elaborate"],
                        "x86_64-linux",
                      ), () =>
                      scope.apply$(
                        scope.lib["systems"]["elaborate"],
                        "x86_64-linux",
                      )),
                  expected: true,
                }),
              "test_toLosslessStringMaybe_example_x86_64-linux": () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.toLosslessStringMaybe, () =>
                      scope.apply$(
                        scope.lib["systems"]["elaborate"],
                        "x86_64-linux",
                      )),
                  expected: "x86_64-linux",
                }),
              test_toLosslessStringMaybe_fail: () =>
                scope.let$({
                  baseSystem: (scope) =>
                    scope.apply$(
                      scope.lib["systems"]["elaborate"],
                      "x86_64-linux",
                    ),
                }).in$((scope) =>
                  scope.attrSet$({
                    expr: () =>
                      scope.apply$(
                        scope.toLosslessStringMaybe,
                        () => (scope.operators$.merge(
                          scope.baseSystem,
                          scope.attrSet$({
                            _withoutFunctions: () =>
                              scope.operators$.merge(
                                scope.baseSystem["_withoutFunctions"],
                                { something: "extra" },
                              ),
                          }),
                        )),
                      ),
                    expected: null,
                  })
                ),
              test_elaborate_config_over_system: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.lib["systems"]["elaborate"], {
                      config: "i686-unknown-linux-gnu",
                      system: "x86_64-linux",
                    })["system"],
                  expected: "i686-linux",
                }),
              test_elaborate_config_over_parsed: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.lib["systems"]["elaborate"], () =>
                      scope.attrSet$({
                        config: "i686-unknown-linux-gnu",
                        parsed: () =>
                          scope.apply$(
                            scope.lib["systems"]["elaborate"],
                            "x86_64-linux",
                          )["parsed"],
                      }))["parsed"]["cpu"]["arch"],
                  expected: "i686",
                }),
              test_elaborate_system_over_parsed: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.lib["systems"]["elaborate"], () =>
                      scope.attrSet$({
                        system: "i686-linux",
                        parsed: () =>
                          scope.apply$(
                            scope.lib["systems"]["elaborate"],
                            "x86_64-linux",
                          )["parsed"],
                      }))["parsed"]["cpu"]["arch"],
                  expected: "i686",
                }),
              test_equals_reelaborate_overridden_platform: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.let$({
                      base: (scope) =>
                        scope.apply$(
                          scope.lib["systems"]["elaborate"],
                          "x86_64-linux",
                        ),
                    }).in$((scope) =>
                      scope.apply$(
                        scope.lib["systems"]["equals"],
                        () => scope.base,
                        () =>
                          scope.apply$(
                            scope.lib["systems"]["elaborate"],
                            () => (scope.operators$.merge(scope.base, {
                              useLLVM: true,
                              linker: "lld",
                            })),
                          ),
                      )
                    ),
                  expected: false,
                }),
            }),
            scope.operators$.merge(
              scope.attrSet$({
                test_equals_functionNames_in_sync: () =>
                  scope.let$({
                    sys: (scope) =>
                      scope.apply$(
                        scope.lib["systems"]["elaborate"],
                        "x86_64-linux",
                      ),
                    actual: (scope) =>
                      scope.apply$(scope.lib["filter"], () =>
                        scope.func$("n", (scope) =>
                          scope.apply$(scope.builtins["isFunction"], () =>
                            scope.sys[scope.n])), () =>
                        scope.apply$(scope.builtins["attrNames"], () =>
                          scope.sys)),
                    expected: (scope) =>
                      scope.apply$(scope.lib["sort"], () =>
                        scope.lib["lessThan"], () =>
                        scope.lib["systems"]["functionNames"]),
                  }).in$((scope) =>
                    scope.attrSet$({
                      expr: () =>
                        scope.apply$(scope.lib["sort"], () =>
                          scope.lib["lessThan"], () =>
                          scope.actual),
                      expected: () =>
                        scope.expected,
                    })
                  ),
              }),
              scope.let$({
                baseSystem: (scope) =>
                  scope.apply$(
                    scope.lib["systems"]["elaborate"],
                    "x86_64-linux",
                  ),
              }).in$((scope) =>
                scope.apply$(scope.lib["concatMapAttrs"], () =>
                  scope.func$("platformAttrName", (scope) =>
                    scope.func$("origValue", (scope) =>
                      scope.attrSet$({
                        ...scope.deepSet$([
                          scope.str$(
                            () => [
                              "test_equals_unequal_",
                              scope.platformAttrName,
                            ]
                          ),
                        ], () =>
                          scope.let$({
                            modified: (scope) =>
                              ((_cond) => {
                                if (!_cond) {
                                  throw new Error(
                                    "assertion failed: " +
                                      "origValue != arbitraryValue",
                                  );
                                }
                                return scope.operators$.merge(
                                  scope.baseSystem,
                                  scope.attrSet$({
                                    _withoutFunctions: () =>
                                      scope.operators$.merge(
                                        scope.baseSystem["_withoutFunctions"],
                                        scope.attrSet$({
                                          ...scope.deepSet$([
                                            scope.platformAttrName,
                                          ], () => scope.arbitraryValue),
                                        }),
                                      ),
                                  }),
                                );
                              })(
                                scope.operators$.notEqual(
                                  scope.origValue,
                                  scope.arbitraryValue,
                                ),
                              ),
                            arbitraryValue: (scope) =>
                              scope.func$("x", (scope) => "<<modified>>"),
                          }).in$((scope) =>
                            scope.attrSet$({
                              expr: () =>
                                scope.apply$(
                                  scope.lib["systems"]["equals"],
                                  () => scope.baseSystem,
                                  () => scope.modified,
                                ),
                              expected: false,
                            })
                          )),
                      }))), () => scope.baseSystem)
              ),
            ),
          ),
        )),
      )
    )
  ),
);
