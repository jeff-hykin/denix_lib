import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./inspect.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        all: (scope) => scope.lib["all"],
        any: (scope) => scope.lib["any"],
        attrNames: (scope) => scope.lib["attrNames"],
        attrValues: (scope) => scope.lib["attrValues"],
        concatMap: (scope) => scope.lib["concatMap"],
        filter: (scope) => scope.lib["filter"],
        flip: (scope) => scope.lib["flip"],
        hasPrefix: (scope) => scope.lib["hasPrefix"],
        isAttrs: (scope) => scope.lib["isAttrs"],
        isList: (scope) => scope.lib["isList"],
        mapAttrs: (scope) => scope.lib["mapAttrs"],
        recursiveUpdateUntil: (scope) => scope.lib["recursiveUpdateUntil"],
        toList: (scope) => scope.lib["toList"],
        toJSON: (scope) => scope.lib["strings"]["toJSON"],
        kernels: (scope) => scope.lib["systems"]["parse"]["kernels"],
        kernelFamilies: (scope) =>
          scope.lib["systems"]["parse"]["kernelFamilies"],
        significantBytes: (scope) =>
          scope.lib["systems"]["parse"]["significantBytes"],
        cpuTypes: (scope) => scope.lib["systems"]["parse"]["cpuTypes"],
        execFormats: (scope) => scope.lib["systems"]["parse"]["execFormats"],
        hasArmv7Prefix: (scope) => scope.apply$(scope.hasPrefix, "armv7"),
        matchAttrsUnchecked: (scope) =>
          scope.func$("pattern", (scope) =>
            scope.func$("attrs", (scope) =>
              scope.apply$(scope.all, () =>
                scope.func$(
                  "attr",
                  (
                    scope,
                  ) => ((scope.operators$.hasAttr(scope.attrs, scope.attr)) &&
                    (scope.let$({
                      lhs: (scope) => scope.pattern[scope.attr],
                      rhs: (scope) => scope.attrs[scope.attr],
                    }).in$((
                      scope,
                    ) => ((scope.operators$.equal(scope.lhs, scope.rhs)) ||
                      ((scope.apply$(scope.isAttrs, () =>
                        scope.lhs)) &&
                        (scope.apply$(scope.matchAttrsUnchecked, () =>
                          scope.lhs, () =>
                          scope.rhs))))
                    ))),
                ), () =>
                scope.apply$(scope.attrNames, () =>
                  scope.pattern)))),
        removeAssertions: (scope) =>
          scope.apply$(scope.flip, () =>
            scope.removeAttrs, ["assertions"]),
        abis: (scope) =>
          scope.apply$(scope.mapAttrs, () =>
            scope.func$("_", (scope) =>
              scope.func$("abi", (scope) =>
                scope.if$(scope.operators$.hasAttr(scope.abi, "assertions"))
                  .then$(() =>
                    scope.apply$(scope.removeAssertions, () =>
                      scope.abi)
                  ).else$(() =>
                    scope.abi
                  ))), () =>
            scope.lib["systems"]["parse"]["abis"]),
      }).in$((scope) =>
        scope.recAttrSet$({
          patterns: (scope) =>
            scope.recAttrSet$({
              isi686: (scope) =>
                scope.attrSet$({
                  cpu: () =>
                    scope.cpuTypes["i686"],
                }),
              isx86_32: { cpu: { family: "x86", bits: 32n } },
              isx86_64: { cpu: { family: "x86", bits: 64n } },
              isPower: { cpu: { family: "power" } },
              isPower64: { cpu: { family: "power", bits: 64n } },
              isAbiElfv1: { abi: { abi: "elfv1" } },
              isAbiElfv2: [{ abi: { abi: "elfv2" } }, {
                abi: { name: "musl" },
                cpu: { family: "power", bits: 64n },
              }],
              isx86: { cpu: { family: "x86" } },
              isAarch32: { cpu: { family: "arm", bits: 32n } },
              isArmv7: (scope) =>
                scope.apply$(scope.map, () =>
                  scope.func$({
                    arch: scope.nixArg$.NoDefault,
                    "...": scope.nixArg$.Ellipsis,
                  }, (scope) =>
                    scope.attrSet$({
                      cpu: () =>
                        scope.attrSet$({
                          arch: () =>
                            scope.arch,
                        }),
                    })), () =>
                  scope.apply$(scope.filter, () =>
                    scope.func$(
                      "cpu",
                      (
                        scope,
                      ) => ((scope.operators$.hasAttr(scope.cpu, "arch")) &&
                        (scope.apply$(
                          scope.hasArmv7Prefix,
                          () => scope.cpu["arch"],
                        ))),
                    ), () =>
                    scope.apply$(scope.attrValues, () =>
                      scope.cpuTypes))),
              isAarch64: { cpu: { family: "arm", bits: 64n } },
              isAarch: { cpu: { family: "arm" } },
              isMicroBlaze: { cpu: { family: "microblaze" } },
              isMips: { cpu: { family: "mips" } },
              isMips32: { cpu: { family: "mips", bits: 32n } },
              isMips64: { cpu: { family: "mips", bits: 64n } },
              isMips64n32: {
                cpu: { family: "mips", bits: 64n },
                abi: { abi: "n32" },
              },
              isMips64n64: {
                cpu: { family: "mips", bits: 64n },
                abi: { abi: "64" },
              },
              isMmix: { cpu: { family: "mmix" } },
              isRiscV: { cpu: { family: "riscv" } },
              isRiscV32: { cpu: { family: "riscv", bits: 32n } },
              isRiscV64: { cpu: { family: "riscv", bits: 64n } },
              isRx: { cpu: { family: "rx" } },
              isSparc: { cpu: { family: "sparc" } },
              isSparc64: { cpu: { family: "sparc", bits: 64n } },
              isWasm: { cpu: { family: "wasm" } },
              isMsp430: { cpu: { family: "msp430" } },
              isVc4: { cpu: { family: "vc4" } },
              isAvr: { cpu: { family: "avr" } },
              isAlpha: { cpu: { family: "alpha" } },
              isOr1k: { cpu: { family: "or1k" } },
              isM68k: { cpu: { family: "m68k" } },
              isArc: { cpu: { family: "arc" } },
              isSh4: { cpu: { family: "sh" } },
              isS390: { cpu: { family: "s390" } },
              isS390x: { cpu: { family: "s390", bits: 64n } },
              isLoongArch64: { cpu: { family: "loongarch", bits: 64n } },
              isJavaScript: (scope) =>
                scope.attrSet$({
                  cpu: () =>
                    scope.cpuTypes["javascript"],
                }),
              is32bit: { cpu: { bits: 32n } },
              is64bit: { cpu: { bits: 64n } },
              isILP32: (scope) =>
                scope.operators$.listConcat(
                  [{ cpu: { family: "wasm", bits: 32n } }],
                  scope.apply$(scope.map, () =>
                    scope.func$("a", (scope) =>
                      scope.attrSet$({
                        abi: () =>
                          scope.attrSet$({
                            abi: () =>
                              scope.a,
                          }),
                      })), ["n32", "ilp32", "x32"]),
                ),
              isBigEndian: (scope) =>
                scope.attrSet$({
                  cpu: () =>
                    scope.attrSet$({
                      significantByte: () =>
                        scope.significantBytes["bigEndian"],
                    }),
                }),
              isLittleEndian: (scope) =>
                scope.attrSet$({
                  cpu: () =>
                    scope.attrSet$({
                      significantByte: () =>
                        scope.significantBytes["littleEndian"],
                    }),
                }),
              isBSD: (scope) =>
                scope.attrSet$({
                  kernel: () =>
                    scope.attrSet$({
                      families: () =>
                        scope.attrSet$({
                          bsd: () => scope.kernelFamilies.bsd,
                        }),
                    }),
                }),
              isDarwin: (scope) =>
                scope.attrSet$({
                  kernel: () =>
                    scope.attrSet$({
                      families: () =>
                        scope.attrSet$({
                          darwin: () => scope.kernelFamilies.darwin,
                        }),
                    }),
                }),
              isUnix: (
                scope,
              ) => [
                scope.isBSD,
                scope.isDarwin,
                scope.isLinux,
                scope.isSunOS,
                scope.isCygwin,
                scope.isRedox,
              ],
              isMacOS: (scope) =>
                scope.attrSet$({
                  kernel: () => scope.kernels["macos"],
                }),
              isiOS: (scope) =>
                scope.attrSet$({
                  kernel: () => scope.kernels["ios"],
                }),
              isLinux: (scope) =>
                scope.attrSet$({
                  kernel: () => scope.kernels["linux"],
                }),
              isSunOS: (scope) =>
                scope.attrSet$({
                  kernel: () => scope.kernels["solaris"],
                }),
              isFreeBSD: { kernel: { name: "freebsd" } },
              isNetBSD: (scope) =>
                scope.attrSet$({
                  kernel: () => scope.kernels["netbsd"],
                }),
              isOpenBSD: (scope) =>
                scope.attrSet$({
                  kernel: () => scope.kernels["openbsd"],
                }),
              isWindows: (scope) =>
                scope.attrSet$({
                  kernel: () => scope.kernels["windows"],
                }),
              isCygwin: (scope) =>
                scope.attrSet$({
                  kernel: () => scope.kernels["cygwin"],
                }),
              isMinGW: (scope) =>
                scope.attrSet$({
                  kernel: () => scope.kernels["windows"],
                  abi: () => scope.abis["gnu"],
                }),
              isMsvc: (scope) =>
                scope.attrSet$({
                  kernel: () => scope.kernels["windows"],
                  abi: () => scope.abis["msvc"],
                }),
              isWasi: (scope) => [scope.attrSet$({
                kernel: () => scope.kernels["wasip1"],
              })],
              isWasiP1: (scope) =>
                scope.attrSet$({
                  kernel: () => scope.kernels["wasip1"],
                }),
              isRedox: (scope) =>
                scope.attrSet$({
                  kernel: () => scope.kernels["redox"],
                }),
              isGhcjs: (scope) =>
                scope.attrSet$({
                  kernel: () => scope.kernels["ghcjs"],
                }),
              isGenode: (scope) =>
                scope.attrSet$({
                  kernel: () => scope.kernels["genode"],
                }),
              isNone: (scope) =>
                scope.attrSet$({
                  kernel: () => scope.kernels["none"],
                }),
              isAndroid: (scope) => [
                scope.attrSet$({
                  abi: () => scope.abis["android"],
                }),
                scope.attrSet$({
                  abi: () => scope.abis["androideabi"],
                }),
              ],
              isGnu: (scope) =>
                scope.with$(() => scope.abis, (scope) =>
                  scope.apply$(
                    scope.map,
                    () =>
                      scope.func$("a", (scope) =>
                        scope.attrSet$({
                          abi: () => scope.a,
                        })),
                    () => [
                      scope.gnuabi64,
                      scope.gnuabin32,
                      scope.gnu,
                      scope.gnueabi,
                      scope.gnueabihf,
                      scope.gnuabielfv1,
                      scope.gnuabielfv2,
                    ],
                  )),
              isMusl: (scope) =>
                scope.with$(() => scope.abis, (scope) =>
                  scope.apply$(
                    scope.map,
                    () =>
                      scope.func$("a", (scope) =>
                        scope.attrSet$({
                          abi: () => scope.a,
                        })),
                    () => [
                      scope.musl,
                      scope.musleabi,
                      scope.musleabihf,
                      scope.muslabin32,
                      scope.muslabi64,
                    ],
                  )),
              isPicolibc: (scope) =>
                scope.attrSet$({
                  abi: () =>
                    scope.abis["picolibc"],
                }),
              isUClibc: (scope) =>
                scope.with$(() =>
                  scope.abis, (scope) =>
                  scope.apply$(
                    scope.map,
                    () =>
                      scope.func$("a", (scope) =>
                        scope.attrSet$({
                          abi: () => scope.a,
                        })),
                    () => [scope.uclibc, scope.uclibceabi, scope.uclibceabihf],
                  )),
              isEfi: [
                { cpu: { family: "arm", version: "6" } },
                { cpu: { family: "arm", version: "7" } },
                { cpu: { family: "arm", version: "8" } },
                { cpu: { family: "riscv" } },
                { cpu: { family: "x86" } },
                { cpu: { family: "loongarch" } },
              ],
              isUefi: (scope) => [scope.attrSet$({
                kernel: () =>
                  scope.kernels["uefi"],
              })],
              isElf: (scope) =>
                scope.attrSet$({
                  ...scope.deepSet$(["kernel", "execFormat"], () =>
                    scope.execFormats["elf"]),
                }),
              isMacho: (scope) =>
                scope.attrSet$({
                  ...scope.deepSet$(["kernel", "execFormat"], () =>
                    scope.execFormats["macho"]),
                }),
              isPE: (scope) =>
                scope.attrSet$({
                  ...scope.deepSet$(["kernel", "execFormat"], () =>
                    scope.execFormats["pe"]),
                }),
              isEabi: (scope) =>
                scope.attrSet$({
                  ...scope.deepSet$(["abi", "eabi"], true),
                }),
            }),
          patternLogicalAnd: (scope) =>
            scope.func$("pat1_", (scope) =>
              scope.func$("pat2_", (scope) =>
                scope.let$({
                  pat1: (scope) =>
                    scope.apply$(scope.toList, () =>
                      scope.pat1_),
                  pat2: (scope) =>
                    scope.apply$(scope.toList, () => scope.pat2_),
                }).in$((scope) =>
                  scope.apply$(scope.concatMap, () =>
                    scope.func$("attr1", (scope) =>
                      scope.apply$(scope.map, () =>
                        scope.func$("attr2", (scope) =>
                          scope.apply$(
                            scope.recursiveUpdateUntil,
                            () =>
                              scope.func$("path", (scope) =>
                                scope.func$("subattr1", (scope) =>
                                  scope.func$("subattr2", (scope) =>
                                    scope.if$(
                                      (scope.operators$.equal(
                                        scope.apply$(
                                          scope.builtins["intersectAttrs"],
                                          () => scope.subattr1,
                                          () => scope.subattr2,
                                        ),
                                        {},
                                      )) ||
                                      (scope.operators$.equal(
                                        scope.subattr1,
                                        scope.subattr2,
                                      )),
                                    ).then$(true).else$(() =>
                                      scope.apply$(scope.throw, () =>
                                        scope.str$(
                                          () => [
                                            "pattern conflict at path ",
                                            scope.apply$(
                                              scope.toString,
                                              () => scope.path,
                                            ),
                                            ":\n  ",
                                            scope.apply$(
                                              scope.toJSON,
                                              () => scope.subattr1,
                                            ),
                                            "\n  ",
                                            scope.apply$(
                                              scope.toJSON,
                                              () => scope.subattr2,
                                            ),
                                            "\n",
                                          ]
                                        ))
                                    )))),
                            () => scope.attr1,
                            () => scope.attr2,
                          )), () => scope.pat2)), () => scope.pat1)
                ))),
          matchAnyPattern: (scope) =>
            scope.let$({
              matchPattern: (scope) =>
                scope.func$("pattern", (scope) =>
                  scope.let$({
                    names: (scope) =>
                      scope.apply$(scope.attrNames, () => scope.pattern),
                  }).in$((scope) =>
                    scope.func$("attrs", (scope) =>
                      scope.apply$(scope.all, () =>
                        scope.func$(
                          "attr",
                          (
                            scope,
                          ) => ((scope.operators$.hasAttr(
                            scope.attrs,
                            scope.attr,
                          )) && (scope.let$({
                            lhs: (scope) => scope.pattern[scope.attr],
                            rhs: (scope) => scope.attrs[scope.attr],
                          }).in$((
                            scope,
                          ) => ((scope.operators$.equal(
                            scope.lhs,
                            scope.rhs,
                          )) || (scope.apply$(scope.matchAttrsUnchecked, () =>
                            scope.lhs, () =>
                            scope.rhs)))
                          ))),
                        ), () => scope.names))
                  )),
            }).in$((scope) =>
              scope.func$("pattern", (scope) =>
                scope.if$(scope.apply$(scope.isList, () => scope.pattern))
                  .then$(() =>
                    scope.let$({
                      cachedPatterns: (scope) =>
                        scope.apply$(
                          scope.map,
                          () => scope.matchPattern,
                          () => scope.pattern,
                        ),
                    }).in$((scope) =>
                      scope.func$(
                        "attrs",
                        (scope) =>
                          scope.apply$(scope.any, () =>
                            scope.func$("pattern", (scope) =>
                              scope.apply$(scope.pattern, () =>
                                scope.attrs)), () =>
                            scope.cachedPatterns),
                      )
                    )
                  ).else$(() =>
                    scope.apply$(scope.matchPattern, () => scope.pattern)
                  ))
            ),
          predicates: (scope) =>
            scope.apply$(
              scope.mapAttrs,
              () => scope.func$("_", (scope) => scope.matchAnyPattern),
              () => scope.patterns,
            ),
          platformPatterns: (scope) =>
            scope.apply$(
              scope.mapAttrs,
              () =>
                scope.func$("_", (scope) =>
                  scope.func$("p", (scope) =>
                    scope.operators$.merge({ parsed: {} }, scope.p))),
              { isStatic: { isStatic: true } },
            ),
        })
      ))
  ),
);
