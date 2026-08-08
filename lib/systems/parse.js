import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";
import _nix_meta_types_28d72856 from "../meta-types.js";

export default nixFile(
  new URL("./parse.nix", import.meta.url).pathname,
  ({ scope }) => (
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        enum: (scope) =>
          scope.apply$(_nix_meta_types_28d72856(scope.runtime$), () =>
            scope.attrSet$({
              lib: () => scope.lib,
            }))["enum"],
        all: (scope) =>
          scope.lib["all"],
        any: (scope) => scope.lib["any"],
        attrValues: (scope) => scope.lib["attrValues"],
        elem: (scope) => scope.lib["elem"],
        elemAt: (scope) => scope.lib["elemAt"],
        hasPrefix: (scope) => scope.lib["hasPrefix"],
        head: (scope) => scope.lib["head"],
        id: (scope) => scope.lib["id"],
        length: (scope) => scope.lib["length"],
        mapAttrs: (scope) => scope.lib["mapAttrs"],
        optionalString: (scope) => scope.lib["optionalString"],
        splitString: (scope) => scope.lib["splitString"],
        versionAtLeast: (scope) => scope.lib["versionAtLeast"],
        match: (scope) => scope.lib["strings"]["match"],
        isAarch32: (scope) =>
          scope.lib["systems"]["inspect"]["predicates"]["isAarch32"],
        isBigEndian: (scope) =>
          scope.lib["systems"]["inspect"]["predicates"]["isBigEndian"],
        isDarwin: (scope) =>
          scope.lib["systems"]["inspect"]["predicates"]["isDarwin"],
        isLinux: (scope) =>
          scope.lib["systems"]["inspect"]["predicates"]["isLinux"],
        isPower64: (scope) =>
          scope.lib["systems"]["inspect"]["predicates"]["isPower64"],
        isWindows: (scope) =>
          scope.lib["systems"]["inspect"]["predicates"]["isWindows"],
        isCygwin: (scope) =>
          scope.lib["systems"]["inspect"]["predicates"]["isCygwin"],
        setTypes: (scope) =>
          scope.func$("type", (scope) =>
            scope.if$(scope.operators$.hasAttr(scope.type, "verify")).then$(
              () =>
                scope.let$({
                  verify: (scope) =>
                    scope.type["verify"],
                }).in$((scope) =>
                  scope.apply$(scope.mapAttrs, () =>
                    scope.func$("name", (scope) =>
                      scope.func$("value", (scope) =>
                        ((_cond) => {
                          if (!_cond) {
                            throw new Error(
                              "assertion failed: " + "verify value",
                            );
                          }
                          return scope.operators$.merge(
                            scope.attrSet$({
                              name: () => scope.name,
                            }),
                            scope.value,
                          );
                        })(scope.apply$(scope.verify, () =>
                          scope.value)))))
                )
            ).else$(() =>
              scope.apply$(
                scope.mapAttrs,
                () =>
                  scope.func$("name", (scope) =>
                    scope.func$("value", (scope) =>
                      scope.operators$.merge(
                        scope.attrSet$({
                          name: () => scope.name,
                        }),
                        scope.value,
                      ))),
              )
            )),
        removeAbiSuffix: (scope) =>
          scope.func$("x", (scope) =>
            scope.let$({
              found: (scope) =>
                scope.apply$(scope.match, "(.*)e?abi.*", () =>
                  scope.x),
            }).in$((scope) =>
              scope.if$(scope.operators$.equal(scope.found, null)).then$(() =>
                scope.x
              ).else$(() => scope.apply$(scope.head, () => scope.found))
            )),
      }).in$((scope) =>
        scope.recAttrSet$({
          ...scope.deepSet$(["types", "openSignificantByte"], {
            name: "significant-byte",
            description: "Endianness",
          }),
          ...scope.deepSet$(["types", "significantByte"], (scope) =>
            scope.apply$(scope.enum, () =>
              scope.apply$(scope.attrValues, () =>
                scope.significantBytes))),
          significantBytes: (scope) =>
            scope.apply$(scope.setTypes, () =>
              scope.types["openSignificantByte"], {
              bigEndian: {},
              littleEndian: {},
            }),
          ...scope.deepSet$(["types", "bitWidth"], (scope) =>
            scope.apply$(scope.enum, [8n, 16n, 32n, 64n, 128n])),
          ...scope.deepSet$(["types", "openCpuType"], (scope) =>
            scope.attrSet$({
              name: "cpu-type",
              description: "instruction set architecture name and information",
              verify: () =>
                scope.let$({
                  verifyBitWidth: (scope) =>
                    scope.types["bitWidth"]["verify"],
                  verifySignificantByte: (scope) =>
                    scope.types["significantByte"]["verify"],
                }).in$((scope) =>
                  scope.func$(
                    "v",
                    (
                      scope,
                    ) => ((scope.apply$(
                      scope.verifyBitWidth,
                      () => scope.v["bits"],
                    )) &&
                      (scope.if$(scope.operators$.lessThan(8n, scope.v["bits"]))
                        .then$(() =>
                          scope.apply$(
                            scope.verifySignificantByte,
                            () => scope.v["significantByte"],
                          )
                        ).else$(() =>
                          scope.operators$.negate(
                            scope.operators$.hasAttr(
                              scope.v,
                              "significantByte",
                            ),
                          )
                        ))),
                  )
                ),
            })),
          ...scope.deepSet$(
            ["types", "cpuType"],
            (scope) =>
              scope.apply$(scope.enum, () =>
                scope.apply$(scope.attrValues, () => scope.cpuTypes)),
          ),
          cpuTypes: (scope) =>
            scope.let$({
              littleEndian: (scope) => scope.significantBytes["littleEndian"],
              bigEndian: (scope) => scope.significantBytes["bigEndian"],
            }).in$((scope) =>
              scope.operators$.merge(
                scope.apply$(scope.setTypes, () =>
                  scope.types["openCpuType"], () =>
                  scope.attrSet$({
                    arm: () =>
                      scope.attrSet$({
                        bits: 32n,
                        significantByte: () =>
                          scope.littleEndian,
                        family: "arm",
                      }),
                    armv5tel: () =>
                      scope.attrSet$({
                        bits: 32n,
                        significantByte: () =>
                          scope.littleEndian,
                        family: "arm",
                        version: "5",
                        arch: "armv5t",
                      }),
                    armv6m: () =>
                      scope.attrSet$({
                        bits: 32n,
                        significantByte: () => scope.littleEndian,
                        family: "arm",
                        version: "6",
                        arch: "armv6-m",
                      }),
                    armv6l: () =>
                      scope.attrSet$({
                        bits: 32n,
                        significantByte: () => scope.littleEndian,
                        family: "arm",
                        version: "6",
                        arch: "armv6",
                      }),
                    armv7a: () =>
                      scope.attrSet$({
                        bits: 32n,
                        significantByte: () => scope.littleEndian,
                        family: "arm",
                        version: "7",
                        arch: "armv7-a",
                      }),
                    armv7r: () =>
                      scope.attrSet$({
                        bits: 32n,
                        significantByte: () => scope.littleEndian,
                        family: "arm",
                        version: "7",
                        arch: "armv7-r",
                      }),
                    armv7m: () =>
                      scope.attrSet$({
                        bits: 32n,
                        significantByte: () => scope.littleEndian,
                        family: "arm",
                        version: "7",
                        arch: "armv7-m",
                      }),
                    armv7l: () =>
                      scope.attrSet$({
                        bits: 32n,
                        significantByte: () => scope.littleEndian,
                        family: "arm",
                        version: "7",
                        arch: "armv7",
                      }),
                    armv8a: () =>
                      scope.attrSet$({
                        bits: 32n,
                        significantByte: () => scope.littleEndian,
                        family: "arm",
                        version: "8",
                        arch: "armv8-a",
                      }),
                    armv8r: () =>
                      scope.attrSet$({
                        bits: 32n,
                        significantByte: () => scope.littleEndian,
                        family: "arm",
                        version: "8",
                        arch: "armv8-a",
                      }),
                    armv8m: () =>
                      scope.attrSet$({
                        bits: 32n,
                        significantByte: () => scope.littleEndian,
                        family: "arm",
                        version: "8",
                        arch: "armv8-m",
                      }),
                    aarch64: () =>
                      scope.attrSet$({
                        bits: 64n,
                        significantByte: () => scope.littleEndian,
                        family: "arm",
                        version: "8",
                        arch: "armv8-a",
                      }),
                    aarch64_be: () =>
                      scope.attrSet$({
                        bits: 64n,
                        significantByte: () => scope.bigEndian,
                        family: "arm",
                        version: "8",
                        arch: "armv8-a",
                      }),
                    i386: () =>
                      scope.attrSet$({
                        bits: 32n,
                        significantByte: () => scope.littleEndian,
                        family: "x86",
                        arch: "i386",
                      }),
                    i486: () =>
                      scope.attrSet$({
                        bits: 32n,
                        significantByte: () => scope.littleEndian,
                        family: "x86",
                        arch: "i486",
                      }),
                    i586: () =>
                      scope.attrSet$({
                        bits: 32n,
                        significantByte: () => scope.littleEndian,
                        family: "x86",
                        arch: "i586",
                      }),
                    i686: () =>
                      scope.attrSet$({
                        bits: 32n,
                        significantByte: () => scope.littleEndian,
                        family: "x86",
                        arch: "i686",
                      }),
                    x86_64: () =>
                      scope.attrSet$({
                        bits: 64n,
                        significantByte: () => scope.littleEndian,
                        family: "x86",
                        arch: "x86-64",
                      }),
                    microblaze: () =>
                      scope.attrSet$({
                        bits: 32n,
                        significantByte: () => scope.bigEndian,
                        family: "microblaze",
                      }),
                    microblazeel: () =>
                      scope.attrSet$({
                        bits: 32n,
                        significantByte: () => scope.littleEndian,
                        family: "microblaze",
                      }),
                    mips: () =>
                      scope.attrSet$({
                        bits: 32n,
                        significantByte: () => scope.bigEndian,
                        family: "mips",
                      }),
                    mipsel: () =>
                      scope.attrSet$({
                        bits: 32n,
                        significantByte: () => scope.littleEndian,
                        family: "mips",
                      }),
                    mips64: () =>
                      scope.attrSet$({
                        bits: 64n,
                        significantByte: () => scope.bigEndian,
                        family: "mips",
                      }),
                    mips64el: () =>
                      scope.attrSet$({
                        bits: 64n,
                        significantByte: () => scope.littleEndian,
                        family: "mips",
                      }),
                    mmix: () =>
                      scope.attrSet$({
                        bits: 64n,
                        significantByte: () => scope.bigEndian,
                        family: "mmix",
                      }),
                    m68k: () =>
                      scope.attrSet$({
                        bits: 32n,
                        significantByte: () => scope.bigEndian,
                        family: "m68k",
                      }),
                    sh4: () =>
                      scope.attrSet$({
                        bits: 32n,
                        significantByte: () => scope.littleEndian,
                        family: "sh",
                      }),
                    powerpc: () =>
                      scope.attrSet$({
                        bits: 32n,
                        significantByte: () => scope.bigEndian,
                        family: "power",
                      }),
                    powerpc64: () =>
                      scope.attrSet$({
                        bits: 64n,
                        significantByte: () => scope.bigEndian,
                        family: "power",
                      }),
                    powerpc64le: () =>
                      scope.attrSet$({
                        bits: 64n,
                        significantByte: () => scope.littleEndian,
                        family: "power",
                      }),
                    powerpcle: () =>
                      scope.attrSet$({
                        bits: 32n,
                        significantByte: () => scope.littleEndian,
                        family: "power",
                      }),
                    riscv32: () =>
                      scope.attrSet$({
                        bits: 32n,
                        significantByte: () => scope.littleEndian,
                        family: "riscv",
                      }),
                    riscv64: () =>
                      scope.attrSet$({
                        bits: 64n,
                        significantByte: () => scope.littleEndian,
                        family: "riscv",
                      }),
                    s390: () =>
                      scope.attrSet$({
                        bits: 32n,
                        significantByte: () => scope.bigEndian,
                        family: "s390",
                      }),
                    s390x: () =>
                      scope.attrSet$({
                        bits: 64n,
                        significantByte: () => scope.bigEndian,
                        family: "s390",
                      }),
                    sparc: () =>
                      scope.attrSet$({
                        bits: 32n,
                        significantByte: () => scope.bigEndian,
                        family: "sparc",
                      }),
                    sparc64: () =>
                      scope.attrSet$({
                        bits: 64n,
                        significantByte: () => scope.bigEndian,
                        family: "sparc",
                      }),
                    wasm32: () =>
                      scope.attrSet$({
                        bits: 32n,
                        significantByte: () => scope.littleEndian,
                        family: "wasm",
                      }),
                    wasm64: () =>
                      scope.attrSet$({
                        bits: 64n,
                        significantByte: () => scope.littleEndian,
                        family: "wasm",
                      }),
                    alpha: () =>
                      scope.attrSet$({
                        bits: 64n,
                        significantByte: () => scope.littleEndian,
                        family: "alpha",
                      }),
                    rx: () =>
                      scope.attrSet$({
                        bits: 32n,
                        significantByte: () => scope.littleEndian,
                        family: "rx",
                      }),
                    msp430: () =>
                      scope.attrSet$({
                        bits: 16n,
                        significantByte: () => scope.littleEndian,
                        family: "msp430",
                      }),
                    avr: { bits: 8n, family: "avr" },
                    vc4: () =>
                      scope.attrSet$({
                        bits: 32n,
                        significantByte: () => scope.littleEndian,
                        family: "vc4",
                      }),
                    or1k: () =>
                      scope.attrSet$({
                        bits: 32n,
                        significantByte: () => scope.bigEndian,
                        family: "or1k",
                      }),
                    arc: () =>
                      scope.attrSet$({
                        bits: 32n,
                        significantByte: () => scope.littleEndian,
                        family: "arc",
                      }),
                    loongarch64: () =>
                      scope.attrSet$({
                        bits: 64n,
                        significantByte: () => scope.littleEndian,
                        family: "loongarch",
                      }),
                    javascript: () =>
                      scope.attrSet$({
                        bits: 32n,
                        significantByte: () => scope.littleEndian,
                        family: "javascript",
                      }),
                  })),
                scope.attrSet$({
                  arm64: () => scope.cpuTypes["aarch64"],
                }),
              )
            ),
          gnuNetBSDDefaultExecFormat: (scope) =>
            scope.func$("cpu", (scope) =>
              scope.if$(
                (scope.operators$.equal(scope.cpu["bits"], 32n)) &&
                ((((scope.operators$.equal(scope.cpu["family"], "arm")) ||
                  (scope.operators$.equal(scope.cpu["family"], "sparc"))) ||
                  (scope.operators$.equal(scope.cpu["family"], "m68k"))) ||
                  (scope.operators$.equal(scope.cpu["family"], "x86"))),
              ).then$(() => scope.execFormats["aout"]).else$(() =>
                scope.execFormats["elf"]
              )),
          isCompatible: (scope) =>
            scope.with$(() => scope.cpuTypes, (scope) =>
              scope.func$("a", (scope) =>
                scope.func$(
                  "b",
                  (
                    scope,
                  ) => ((scope.operators$.equal(scope.b, scope.a)) ||
                    (scope.apply$(
                      scope.any,
                      () => scope.id,
                      () => [
                        (scope.operators$.equal(scope.b, scope.i386)) &&
                        (scope.apply$(scope.isCompatible, () =>
                          scope.a, () =>
                          scope.i486)),
                        (scope.operators$.equal(scope.b, scope.i486)) &&
                        (scope.apply$(scope.isCompatible, () =>
                          scope.a, () =>
                          scope.i586)),
                        (scope.operators$.equal(scope.b, scope.i586)) &&
                        (scope.apply$(scope.isCompatible, () =>
                          scope.a, () =>
                          scope.i686)),
                        (scope.operators$.equal(scope.b, scope.i686)) &&
                        (scope.apply$(scope.isCompatible, () =>
                          scope.a, () =>
                          scope.x86_64)),
                        (scope.operators$.equal(scope.b, scope.arm)) &&
                        (scope.apply$(scope.isCompatible, () =>
                          scope.a, () =>
                          scope.armv5tel)),
                        (scope.operators$.equal(scope.b, scope.armv5tel)) &&
                        (scope.apply$(scope.isCompatible, () =>
                          scope.a, () =>
                          scope.armv6l)),
                        (scope.operators$.equal(scope.b, scope.armv6m)) &&
                        (scope.apply$(scope.isCompatible, () =>
                          scope.a, () =>
                          scope.armv6l)),
                        (scope.operators$.equal(scope.b, scope.armv6l)) &&
                        (scope.apply$(scope.isCompatible, () =>
                          scope.a, () =>
                          scope.armv7l)),
                        (scope.operators$.equal(scope.b, scope.armv7l)) &&
                        (scope.apply$(scope.isCompatible, () =>
                          scope.a, () =>
                          scope.armv7a)),
                        (scope.operators$.equal(scope.b, scope.armv7l)) &&
                        (scope.apply$(scope.isCompatible, () =>
                          scope.a, () =>
                          scope.armv7r)),
                        (scope.operators$.equal(scope.b, scope.armv7m)) &&
                        (scope.apply$(scope.isCompatible, () =>
                          scope.a, () =>
                          scope.armv7a)),
                        (scope.operators$.equal(scope.b, scope.armv7m)) &&
                        (scope.apply$(scope.isCompatible, () =>
                          scope.a, () =>
                          scope.armv7r)),
                        (scope.operators$.equal(scope.b, scope.armv8a)) &&
                        (scope.apply$(scope.isCompatible, () =>
                          scope.a, () =>
                          scope.aarch64)),
                        (scope.operators$.equal(scope.b, scope.powerpc)) &&
                        (scope.apply$(scope.isCompatible, () =>
                          scope.a, () =>
                          scope.powerpc64)),
                        (scope.operators$.equal(scope.b, scope.powerpcle)) &&
                        (scope.apply$(scope.isCompatible, () =>
                          scope.a, () =>
                          scope.powerpc64le)),
                        (scope.operators$.equal(scope.b, scope.mips)) &&
                        (scope.apply$(scope.isCompatible, () =>
                          scope.a, () =>
                          scope.mips64)),
                        (scope.operators$.equal(scope.b, scope.mipsel)) &&
                        (scope.apply$(scope.isCompatible, () =>
                          scope.a, () =>
                          scope.mips64el)),
                        (scope.operators$.equal(scope.b, scope.sparc)) &&
                        (scope.apply$(scope.isCompatible, () =>
                          scope.a, () =>
                          scope.sparc64)),
                      ],
                    ))),
                ))),
          ...scope.deepSet$(["types", "openVendor"], {
            name: "vendor",
            description: "vendor for the platform",
          }),
          ...scope.deepSet$(["types", "vendor"], (scope) =>
            scope.apply$(scope.enum, () =>
              scope.apply$(scope.attrValues, () => scope.vendors))),
          vendors: (scope) =>
            scope.apply$(scope.setTypes, () =>
              scope.types["openVendor"], {
              apple: {},
              pc: {},
              knuth: {},
              w64: {},
              none: {},
              unknown: {},
            }),
          ...scope.deepSet$(["types", "openExecFormat"], {
            name: "exec-format",
            description: "executable container used by the kernel",
          }),
          ...scope.deepSet$(["types", "execFormat"], (scope) =>
            scope.apply$(scope.enum, () =>
              scope.apply$(scope.attrValues, () =>
                scope.execFormats))),
          execFormats: (scope) =>
            scope.apply$(scope.setTypes, () =>
              scope.types["openExecFormat"], {
              aout: {},
              elf: {},
              macho: {},
              pe: {},
              wasm: {},
              unknown: {},
            }),
          ...scope.deepSet$(["types", "openKernelFamily"], {
            name: "exec-format",
            description: "executable container used by the kernel",
          }),
          ...scope.deepSet$(["types", "kernelFamily"], (scope) =>
            scope.apply$(scope.enum, () =>
              scope.apply$(scope.attrValues, () =>
                scope.kernelFamilies))),
          kernelFamilies: (scope) =>
            scope.apply$(scope.setTypes, () =>
              scope.types["openKernelFamily"], { bsd: {}, darwin: {} }),
          ...scope.deepSet$(["types", "openKernel"], (scope) =>
            scope.attrSet$({
              name: "open-kernel",
              description: "kernel name and information",
              verify: () =>
                scope.let$({
                  verifyExecFormat: (scope) =>
                    scope.types["execFormat"]["verify"],
                  verifyKernelFamily: (scope) =>
                    scope.types["kernelFamily"]["verify"],
                }).in$((scope) =>
                  scope.func$(
                    "v",
                    (
                      scope,
                    ) => ((scope.apply$(
                      scope.verifyExecFormat,
                      () => scope.v["execFormat"],
                    )) && (scope.apply$(scope.all, () =>
                      scope.verifyKernelFamily, () =>
                      scope.apply$(scope.attrValues, () =>
                        scope.v["families"])))),
                  )
                ),
            })),
          ...scope.deepSet$(["types", "kernel"], (scope) =>
            scope.apply$(scope.enum, () =>
              scope.apply$(scope.attrValues, () =>
                scope.kernels))),
          kernels: (scope) =>
            scope.let$({
              elf: (scope) =>
                scope.execFormats["elf"],
              pe: (scope) =>
                scope.execFormats["pe"],
              wasm: (scope) =>
                scope.execFormats["wasm"],
              unknown: (scope) =>
                scope.execFormats["unknown"],
              macho: (scope) =>
                scope.execFormats["macho"],
              bsd: (scope) =>
                scope.kernelFamilies["bsd"],
              darwin: (scope) =>
                scope.kernelFamilies["darwin"],
            }).in$((scope) =>
              scope.operators$.merge(
                scope.apply$(
                  scope.setTypes,
                  () => scope.types["openKernel"],
                  () =>
                    scope.attrSet$({
                      macos: () =>
                        scope.attrSet$({
                          execFormat: () => scope.macho,
                          families: () =>
                            scope.attrSet$({
                              darwin: () => scope.darwin,
                            }),
                          name: "darwin",
                        }),
                      ios: () =>
                        scope.attrSet$({
                          execFormat: () => scope.macho,
                          families: () =>
                            scope.attrSet$({
                              darwin: () =>
                                scope.darwin,
                            }),
                        }),
                      freebsd: () =>
                        scope.attrSet$({
                          execFormat: () =>
                            scope.elf,
                          families: () =>
                            scope.attrSet$({
                              bsd: () =>
                                scope.bsd,
                            }),
                          name: "freebsd",
                        }),
                      linux: () =>
                        scope.attrSet$({
                          execFormat: () => scope.elf,
                          families: {},
                        }),
                      netbsd: () =>
                        scope.attrSet$({
                          execFormat: () => scope.elf,
                          families: () =>
                            scope.attrSet$({
                              bsd: () => scope.bsd,
                            }),
                        }),
                      none: () =>
                        scope.attrSet$({
                          execFormat: () => scope.unknown,
                          families: {},
                        }),
                      openbsd: () =>
                        scope.attrSet$({
                          execFormat: () => scope.elf,
                          families: () =>
                            scope.attrSet$({
                              bsd: () => scope.bsd,
                            }),
                        }),
                      solaris: () =>
                        scope.attrSet$({
                          execFormat: () => scope.elf,
                          families: {},
                        }),
                      wasip1: () =>
                        scope.attrSet$({
                          execFormat: () => scope.wasm,
                          families: {},
                        }),
                      redox: () =>
                        scope.attrSet$({
                          execFormat: () => scope.elf,
                          families: {},
                        }),
                      windows: () =>
                        scope.attrSet$({
                          execFormat: () => scope.pe,
                          families: {},
                        }),
                      cygwin: () =>
                        scope.attrSet$({
                          execFormat: () => scope.pe,
                          families: {},
                        }),
                      ghcjs: () =>
                        scope.attrSet$({
                          execFormat: () => scope.unknown,
                          families: {},
                        }),
                      genode: () =>
                        scope.attrSet$({
                          execFormat: () => scope.elf,
                          families: {},
                        }),
                      mmixware: () =>
                        scope.attrSet$({
                          execFormat: () => scope.unknown,
                          families: {},
                        }),
                      uefi: () =>
                        scope.attrSet$({
                          execFormat: () => scope.pe,
                          families: {},
                        }),
                    }),
                ),
                scope.attrSet$({
                  darwin: () => scope.kernels["macos"],
                  watchos: () => scope.kernels["ios"],
                  tvos: () => scope.kernels["ios"],
                  wasi: () => scope.kernels["wasip1"],
                  win32: () => scope.kernels["windows"],
                }),
              )
            ),
          ...scope.deepSet$(["types", "openAbi"], {
            name: "abi",
            description: "binary interface for compiled code and syscalls",
          }),
          ...scope.deepSet$(["types", "abi"], (scope) =>
            scope.apply$(scope.enum, () =>
              scope.apply$(scope.attrValues, () =>
                scope.abis))),
          abis: (scope) =>
            scope.apply$(scope.setTypes, () =>
              scope.types["openAbi"], () =>
              scope.attrSet$({
                msvc: {},
                eabi: { float: "soft", eabi: true },
                eabihf: { float: "hard", eabi: true },
                elf: {},
                androideabi: { eabi: true },
                android: () =>
                  scope.attrSet$({
                    assertions: () => [scope.attrSet$({
                      assertion: () =>
                        scope.func$("platform", (scope) =>
                          scope.operators$.negate(scope.platform["isAarch32"])),
                      message:
                        'The "android" ABI is not for 32-bit ARM. Use "androideabi" instead.\n',
                    })],
                  }),
                gnueabi: { float: "soft", eabi: true },
                gnueabihf: { float: "hard", eabi: true },
                gnu: () =>
                  scope.attrSet$({
                    assertions: () => [
                      scope.attrSet$({
                        assertion: () =>
                          scope.func$(
                            "platform",
                            (scope) =>
                              scope.operators$.negate(
                                scope.platform["isAarch32"],
                              ),
                          ),
                        message:
                          'The "gnu" ABI is ambiguous on 32-bit ARM. Use "gnueabi" or "gnueabihf" instead.\n',
                      }),
                      scope.attrSet$({
                        assertion: () =>
                          scope.func$(
                            "platform",
                            (scope) =>
                              scope.operators$.negate(
                                (scope.platform["isPower64"]) &&
                                (scope.platform["isBigEndian"]),
                              ),
                          ),
                        message:
                          'The "gnu" ABI is ambiguous on big-endian 64-bit PowerPC. Use "gnuabielfv2" or "gnuabielfv1" instead.\n',
                      }),
                    ],
                  }),
                gnuabi64: { abi: "64" },
                muslabi64: { abi: "64" },
                gnuabin32: { abi: "n32" },
                muslabin32: { abi: "n32" },
                gnuabielfv2: { abi: "elfv2" },
                gnuabielfv1: { abi: "elfv1" },
                musleabi: { float: "soft", eabi: true },
                musleabihf: { float: "hard", eabi: true },
                musl: {},
                picolibc: {},
                uclibceabi: { float: "soft", eabi: true },
                uclibceabihf: { float: "hard", eabi: true },
                uclibc: {},
                unknown: {},
              })),
          ...scope.deepSet$(["types", "parsedPlatform"], (scope) =>
            scope.attrSet$({
              name: "system",
              description:
                "fully parsed representation of llvm- or nix-style platform tuple",
              verify: () =>
                scope.let$({
                  verifyCpu: (scope) =>
                    scope.types["cpuType"]["verify"],
                  verifyVendor: (scope) =>
                    scope.types["vendor"]["verify"],
                  verifyKernel: (scope) =>
                    scope.types["kernel"]["verify"],
                  verifyAbi: (scope) =>
                    scope.types["abi"]["verify"],
                }).in$((scope) =>
                  scope.func$({
                    cpu: scope.nixArg$.NoDefault,
                    vendor: scope.nixArg$.NoDefault,
                    kernel: scope.nixArg$.NoDefault,
                    abi: scope.nixArg$.NoDefault,
                  }, (scope) => ((((scope.apply$(scope.verifyCpu, () =>
                    scope.cpu)) && (scope.apply$(scope.verifyVendor, () =>
                      scope.vendor))) && (scope.apply$(scope.verifyKernel, () =>
                        scope.kernel))) && (scope.apply$(scope.verifyAbi, () =>
                        scope.abi))))
                ),
            })),
          isSystem: (scope) =>
            scope.func$("v", (scope) =>
              scope.operators$.equal(
                scope.operators$.selectOrDefault(scope.v, ["_type"], null),
                "system",
              )),
          mkSystem: (scope) =>
            scope.let$({
              verify: (scope) =>
                scope.types["parsedPlatform"]["verify"],
            }).in$((scope) =>
              scope.func$("components", (scope) =>
                ((_cond) => {
                  if (!_cond) {
                    throw new Error("assertion failed: " + "verify components");
                  }
                  return scope.operators$.merge(scope.components, {
                    _type: "system",
                  });
                })(scope.apply$(scope.verify, () =>
                  scope.components)))
            ),
          mkSkeletonFromList: (scope) =>
            scope.let$({
              linuxComponents: ["eabi", "eabihf", "elf", "gnu"],
              appleComponents: [
                "redox",
                "mmixware",
                "ghcjs",
                "mingw32",
                "uefi",
              ],
            }).in$((scope) =>
              scope.func$("l", (scope) =>
                scope.operators$.selectOrDefault(
                  scope.attrSet$({
                    "1": () =>
                      scope.let$({
                        firstComponent: (scope) =>
                          scope.apply$(scope.head, () => scope.l),
                      }).in$((scope) =>
                        scope.if$(
                          scope.operators$.equal(scope.firstComponent, "avr"),
                        ).then$(() =>
                          scope.attrSet$({
                            cpu: () => scope.firstComponent,
                            kernel: "none",
                            abi: "unknown",
                          })
                        ).else$(() =>
                          scope.apply$(scope.throw, () =>
                            scope.str$(
                              () => [
                                "system string '",
                                scope.apply$(
                                  scope.lib["concatStringsSep"],
                                  "-",
                                  () => scope.l,
                                ),
                                "' with 1 component is ambiguous",
                              ]
                            ))
                        )
                      ),
                    "2": () =>
                      scope.let$({
                        secondComponent: (scope) =>
                          scope.apply$(scope.elemAt, () => scope.l, 1n),
                      }).in$((scope) =>
                        scope.if$(
                          scope.operators$.equal(
                            scope.secondComponent,
                            "cygwin",
                          ),
                        ).then$(() =>
                          scope.apply$(
                            scope.mkSkeletonFromList,
                            () => [
                              scope.apply$(scope.head, () => scope.l),
                              "pc",
                              scope.secondComponent,
                            ],
                          )
                        ).elseIf$(() =>
                          scope.operators$.equal(
                            scope.secondComponent,
                            "windows",
                          )
                        ).then$(() =>
                          scope.attrSet$({
                            cpu: () => scope.apply$(scope.head, () => scope.l),
                            kernel: () => scope.secondComponent,
                            abi: "msvc",
                          })
                        ).elseIf$(() =>
                          scope.operators$.equal(scope.secondComponent, "elf")
                        ).then$(() =>
                          scope.attrSet$({
                            cpu: () => scope.apply$(scope.head, () => scope.l),
                            vendor: "unknown",
                            kernel: "none",
                            abi: () => scope.secondComponent,
                          })
                        ).else$(() =>
                          scope.attrSet$({
                            cpu: () => scope.apply$(scope.head, () => scope.l),
                            kernel: () => scope.secondComponent,
                          })
                        )
                      ),
                    "3": () =>
                      scope.let$({
                        secondComponent: (scope) =>
                          scope.apply$(scope.elemAt, () => scope.l, 1n),
                        thirdComponent: (scope) =>
                          scope.apply$(scope.elemAt, () => scope.l, 2n),
                      }).in$((scope) =>
                        scope.if$(
                          (scope.operators$.equal(
                            scope.secondComponent,
                            "linux",
                          )) || (scope.apply$(scope.elem, () =>
                            scope.thirdComponent, () =>
                            scope.linuxComponents)),
                        ).then$(() =>
                          scope.attrSet$({
                            cpu: () => scope.apply$(scope.head, () => scope.l),
                            kernel: () => scope.secondComponent,
                            abi: () => scope.thirdComponent,
                            vendor: "unknown",
                          })
                        ).elseIf$(
                          () => (((((((scope.operators$.equal(
                            scope.secondComponent,
                            "apple",
                          )) || (scope.apply$(scope.elem, () =>
                            scope.thirdComponent, () =>
                            scope.appleComponents))) ||
                            (scope.apply$(scope.hasPrefix, "freebsd", () =>
                              scope.thirdComponent))) ||
                            (scope.apply$(scope.hasPrefix, "netbsd", () =>
                              scope.thirdComponent))) ||
                            (scope.apply$(scope.hasPrefix, "openbsd", () =>
                              scope.thirdComponent))) ||
                            (scope.apply$(scope.hasPrefix, "genode", () =>
                              scope.thirdComponent))) ||
                            (scope.apply$(scope.hasPrefix, "wasm32", () =>
                              scope.apply$(scope.head, () =>
                                scope.l))))
                        ).then$(() =>
                          scope.attrSet$({
                            cpu: () =>
                              scope.apply$(scope.head, () =>
                                scope.l),
                            vendor: () =>
                              scope.secondComponent,
                            kernel: () =>
                              scope.if$(
                                scope.operators$.equal(
                                  scope.thirdComponent,
                                  "mingw32",
                                ),
                              ).then$("windows").else$(() =>
                                scope.thirdComponent
                              ),
                          })
                        ).elseIf$(() =>
                          scope.operators$.equal(scope.thirdComponent, "cygwin")
                        ).then$(() =>
                          scope.attrSet$({
                            cpu: () =>
                              scope.apply$(scope.head, () =>
                                scope.l),
                            vendor: () =>
                              scope.secondComponent,
                            kernel: () =>
                              scope.thirdComponent,
                          })
                        ).else$(() =>
                          scope.apply$(scope.throw, () =>
                            scope.str$(
                              () => [
                                "system string '",
                                scope.apply$(
                                  scope.lib["concatStringsSep"],
                                  "-",
                                  () => scope.l,
                                ),
                                "' with 3 components is ambiguous",
                              ]
                            ))
                        )
                      ),
                    "4": () =>
                      scope.attrSet$({
                        cpu: () =>
                          scope.apply$(scope.head, () =>
                            scope.l),
                        vendor: () =>
                          scope.apply$(scope.elemAt, () =>
                            scope.l, 1n),
                        kernel: () =>
                          scope.apply$(scope.elemAt, () =>
                            scope.l, 2n),
                        abi: () =>
                          scope.apply$(scope.elemAt, () =>
                            scope.l, 3n),
                      }),
                  }),
                  [scope.apply$(
                    scope.toString,
                    () => scope.apply$(scope.length, () => scope.l),
                  )],
                  () =>
                    scope.apply$(
                      scope.throw,
                      () =>
                        scope.str$(
                          () => [
                            "system string '",
                            scope.apply$(
                              scope.lib["concatStringsSep"],
                              "-",
                              () => scope.l,
                            ),
                            "' has invalid number of hyphen-separated components",
                          ]
                        ),
                    ),
                ))
            ),
          mkSystemFromSkeleton: (scope) =>
            scope.let$({
              getCpu: (scope) =>
                scope.func$(
                  "name",
                  (scope) =>
                    scope.operators$.selectOrDefault(scope.cpuTypes, [
                      scope.name,
                    ], () =>
                      scope.apply$(scope.throw, () =>
                        scope.str$(() => ["Unknown CPU type: ", scope.name]))),
                ),
              getVendor: (scope) =>
                scope.func$(
                  "name",
                  (scope) =>
                    scope.operators$.selectOrDefault(scope.vendors, [
                      scope.name,
                    ], () =>
                      scope.apply$(scope.throw, () =>
                        scope.str$(() => ["Unknown vendor: ", scope.name]))),
                ),
              getKernel: (scope) =>
                scope.func$(
                  "name",
                  (scope) =>
                    scope.operators$.selectOrDefault(scope.kernels, [
                      scope.name,
                    ], () =>
                      scope.apply$(scope.throw, () =>
                        scope.str$(() => ["Unknown kernel: ", scope.name]))),
                ),
              getAbi: (scope) =>
                scope.func$("name", (scope) =>
                  scope.operators$.selectOrDefault(
                    scope.abis,
                    [scope.name],
                    () =>
                      scope.apply$(
                        scope.throw,
                        () => scope.str$(() => ["Unknown ABI: ", scope.name]),
                      ),
                  )),
              hasDarwinPrefix: (scope) =>
                scope.apply$(scope.hasPrefix, "darwin"),
              hasBsdPrefix: (scope) => scope.apply$(scope.hasPrefix, "netbsd"),
            }).in$((scope) =>
              scope.func$({
                cpu: scope.nixArg$.NoDefault,
                vendor: (scope) =>
                  ((_cond) => {
                    if (!_cond) {
                      throw new Error("assertion failed: " + "false");
                    }
                    return null;
                  })(false),
                kernel: scope.nixArg$.NoDefault,
                abi: (scope) =>
                  ((_cond) => {
                    if (!_cond) {
                      throw new Error("assertion failed: " + "false");
                    }
                    return null;
                  })(false),
                args: scope.nixArg$.AllArgs,
              }, (scope) =>
                scope.let$({
                  parsed: (scope) =>
                    scope.attrSet$({
                      cpu: () =>
                        scope.apply$(scope.getCpu, () => scope.args["cpu"]),
                      vendor: () =>
                        scope.if$(
                          scope.operators$.hasAttr(scope.args, "vendor"),
                        ).then$(() =>
                          scope.apply$(
                            scope.getVendor,
                            () => scope.args["vendor"],
                          )
                        ).elseIf$(() =>
                          scope.apply$(scope.isDarwin, () => scope.parsed)
                        ).then$(() => scope.vendors["apple"]).elseIf$(
                          () => ((scope.apply$(
                            scope.isWindows,
                            () => scope.parsed,
                          )) || (scope.apply$(scope.isCygwin, () =>
                            scope.parsed)))
                        ).then$(() => scope.vendors["pc"]).else$(() =>
                          scope.vendors["unknown"]
                        ),
                      kernel: () =>
                        scope.if$(
                          scope.apply$(scope.hasDarwinPrefix, () =>
                            scope.args["kernel"]),
                        ).then$(() => scope.kernels["darwin"]).elseIf$(() =>
                          scope.apply$(
                            scope.hasBsdPrefix,
                            () => scope.args["kernel"],
                          )
                        ).then$(() => scope.kernels["netbsd"]).else$(() =>
                          scope.apply$(
                            scope.getKernel,
                            () =>
                              scope.apply$(scope.removeAbiSuffix, () =>
                                scope.args["kernel"]),
                          )
                        ),
                      abi: () =>
                        scope.if$(scope.operators$.hasAttr(scope.args, "abi"))
                          .then$(() =>
                            scope.apply$(scope.getAbi, () => scope.args["abi"])
                          ).elseIf$(() => ((scope.apply$(scope.isLinux, () =>
                            scope.parsed)) ||
                            (scope.apply$(scope.isWindows, () =>
                              scope.parsed)))
                          ).then$(() =>
                            scope.if$(scope.apply$(scope.isAarch32, () =>
                              scope.parsed)).then$(() =>
                                scope.if$(
                                  scope.apply$(scope.versionAtLeast, () =>
                                    scope.operators$.selectOrDefault(
                                      scope.parsed,
                                      ["cpu", "version"],
                                      "0",
                                    ), "6"),
                                ).then$(() =>
                                  scope.abis["gnueabihf"]
                                ).else$(() =>
                                  scope.abis["gnueabi"]
                                )
                              ).elseIf$(
                                () => ((scope.apply$(scope.isPower64, () =>
                                  scope.parsed)) &&
                                  (scope.apply$(scope.isBigEndian, () =>
                                    scope.parsed)))
                              ).then$(() =>
                                scope.abis["gnuabielfv1"]
                              ).else$(() =>
                                scope.abis["gnu"]
                              )
                          ).else$(() => scope.abis["unknown"]),
                    }),
                }).in$((scope) => scope.parsed))
            ),
          mkSystemFromString: (scope) =>
            scope.func$(
              "s",
              (scope) =>
                scope.apply$(scope.mkSystem, () =>
                  scope.apply$(scope.mkSystemFromSkeleton, () =>
                    scope.apply$(scope.mkSkeletonFromList, () =>
                      scope.apply$(scope.splitString, "-", () =>
                        scope.s)))),
            ),
          kernelName: (scope) =>
            scope.func$(
              "kernel",
              (scope) =>
                scope.if$(scope.operators$.hasAttr(scope.kernel, "version"))
                  .then$(() =>
                    scope.operators$.add(
                      scope.kernel["name"],
                      scope.apply$(
                        scope.toString,
                        () => scope.kernel["version"],
                      ),
                    )
                  ).else$(() => scope.kernel["name"]),
            ),
          darwinArch: (scope) =>
            scope.func$(
              "cpu",
              (scope) =>
                scope.if$(scope.operators$.equal(scope.cpu["name"], "aarch64"))
                  .then$("arm64").else$(() => scope.cpu["name"]),
            ),
          doubleFromSystem: (scope) =>
            scope.func$(
              {
                cpu: scope.nixArg$.NoDefault,
                kernel: scope.nixArg$.NoDefault,
                abi: scope.nixArg$.NoDefault,
                "...": scope.nixArg$.Ellipsis,
              },
              (scope) =>
                scope.if$(
                  scope.operators$.hasAttr(scope.kernel["families"], "darwin"),
                ).then$(() => scope.str$(() => [scope.cpu["name"], "-darwin"]))
                  .else$(() =>
                    scope.str$(
                      () => [
                        scope.cpu["name"],
                        "-",
                        scope.apply$(scope.kernelName, () => scope.kernel),
                      ]
                    )
                  ),
            ),
          tripleFromSystem: (scope) =>
            scope.func$({
              cpu: scope.nixArg$.NoDefault,
              vendor: scope.nixArg$.NoDefault,
              kernel: scope.nixArg$.NoDefault,
              abi: scope.nixArg$.NoDefault,
              "...": scope.nixArg$.Ellipsis,
              sys: scope.nixArg$.AllArgs,
            }, (scope) =>
              ((_cond) => {
                if (!_cond) {
                  throw new Error("assertion failed: " + "isSystem sys");
                }
                return scope.let$({
                  optExecFormat: (scope) =>
                    scope.apply$(
                      scope.optionalString,
                      () => ((scope.operators$.equal(
                        scope.kernel["name"],
                        "netbsd",
                      )) &&
                        (scope.operators$.notEqual(
                          scope.apply$(scope.gnuNetBSDDefaultExecFormat, () =>
                            scope.cpu),
                          scope.kernel["execFormat"],
                        ))),
                      () => scope.kernel["execFormat"]["name"],
                    ),
                  optAbi: (scope) =>
                    scope.apply$(
                      scope.optionalString,
                      () => (scope.operators$.notEqual(
                        scope.abi,
                        scope.abis["unknown"],
                      )),
                      () => scope.str$(() => ["-", scope.abi["name"]]),
                    ),
                  cpuName: (scope) =>
                    scope.if$(
                      scope.operators$.hasAttr(
                        scope.kernel["families"],
                        "darwin",
                      ),
                    ).then$(() =>
                      scope.apply$(scope.darwinArch, () => scope.cpu)
                    ).else$(() => scope.cpu["name"]),
                }).in$((scope) =>
                  scope.str$(
                    () => [
                      scope.cpuName,
                      "-",
                      scope.vendor["name"],
                      "-",
                      scope.apply$(scope.kernelName, () => scope.kernel),
                      scope.optExecFormat,
                      scope.optAbi,
                    ]
                  )
                );
              })(scope.apply$(scope.isSystem, () => scope.sys))),
          mkMuslSystem: (scope) =>
            scope.func$("parsed", (scope) =>
              scope.apply$(
                scope.func$("x", (scope) =>
                  scope.apply$(scope.lib["trivial"]["pipe"], () =>
                    scope.x, () => [
                    scope.func$("x", (scope) =>
                      scope.apply$(scope.removeAttrs, () => scope.x, [
                        "_type",
                      ])),
                    scope.mkSystem,
                  ])),
                () => (scope.operators$.merge(
                  scope.parsed,
                  scope.attrSet$({
                    abi: () =>
                      scope.operators$.selectOrDefault(
                        scope.attrSet$({
                          gnu: () => scope.abis["musl"],
                          gnueabi: () => scope.abis["musleabi"],
                          gnueabihf: () => scope.abis["musleabihf"],
                          gnuabin32: () =>
                            scope.abis["muslabin32"],
                          gnuabi64: () =>
                            scope.abis["muslabi64"],
                          gnuabielfv2: () => scope.abis["musl"],
                          gnuabielfv1: () => scope.abis["musl"],
                          musleabi: () => scope.abis["musleabi"],
                          musleabihf: () => scope.abis["musleabihf"],
                          muslabin32: () => scope.abis["muslabin32"],
                          muslabi64: () => scope.abis["muslabi64"],
                        }),
                        [scope.parsed["abi"]["name"]],
                        () => scope.abis["musl"],
                      ),
                  }),
                )),
              )),
        })
      ))
  ),
);
