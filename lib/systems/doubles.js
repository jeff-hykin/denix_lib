import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./doubles.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        lists: (scope) => scope.lib["lists"],
        splitString: (scope) => scope.lib["splitString"],
        parse: (scope) => scope.lib["systems"]["parse"],
        mkSystemFromSkeleton: (scope) => scope.parse["mkSystemFromSkeleton"],
        mkSkeletonFromList: (scope) => scope.parse["mkSkeletonFromList"],
        doubleFromSystem: (scope) => scope.parse["doubleFromSystem"],
        predicates: (scope) => scope.lib["systems"]["inspect"]["predicates"],
        matchAttrs: (scope) => scope.lib["attrsets"]["matchAttrs"],
        all: [
          "x86_64-linux",
          "aarch64-darwin",
          "aarch64-linux",
          "i686-cygwin",
          "x86_64-cygwin",
          "i686-freebsd",
          "x86_64-freebsd",
          "aarch64-freebsd",
          "aarch64-genode",
          "i686-genode",
          "x86_64-genode",
          "x86_64-solaris",
          "javascript-ghcjs",
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
          "mmix-mmixware",
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
          "aarch64_be-none",
          "aarch64-none",
          "arm-none",
          "armv6l-none",
          "avr-none",
          "i686-none",
          "microblaze-none",
          "microblazeel-none",
          "mips-none",
          "mips64-none",
          "msp430-none",
          "or1k-none",
          "m68k-none",
          "powerpc-none",
          "powerpcle-none",
          "riscv32-none",
          "riscv64-none",
          "rx-none",
          "s390-none",
          "s390x-none",
          "vc4-none",
          "x86_64-none",
          "i686-openbsd",
          "x86_64-openbsd",
          "x86_64-redox",
          "wasm64-wasip1",
          "wasm32-wasip1",
          "aarch64-windows",
          "x86_64-windows",
          "i686-windows",
          "aarch64-uefi",
          "x86_64-uefi",
        ],
        uncheckedSystemFromString: (scope) =>
          scope.let$({
            systemType: { _type: "system" },
          }).in$((scope) =>
            scope.func$("s", (scope) =>
              scope.operators$.merge(
                scope.apply$(scope.mkSystemFromSkeleton, () =>
                  scope.apply$(scope.mkSkeletonFromList, () =>
                    scope.apply$(scope.splitString, "-", () =>
                      scope.s))),
                scope.systemType,
              ))
          ),
        allParsed: (scope) =>
          scope.apply$(
            scope.map,
            () => scope.uncheckedSystemFromString,
            () => scope.all,
          ),
        filterDoubles: (scope) =>
          scope.func$("f", (scope) =>
            scope.apply$(
              scope.map,
              () => scope.doubleFromSystem,
              () =>
                scope.apply$(scope.lists["filter"], () => scope.f, () =>
                  scope.allParsed),
            )),
      }).in$((scope) =>
        scope.attrSet$({
          all: () => scope.all,
          none: [],
          arm: () =>
            scope.apply$(
              scope.filterDoubles,
              () => scope.predicates["isAarch32"],
            ),
          armv7: () =>
            scope.apply$(
              scope.filterDoubles,
              () => scope.predicates["isArmv7"],
            ),
          aarch: () =>
            scope.apply$(
              scope.filterDoubles,
              () => scope.predicates["isAarch"],
            ),
          aarch64: () =>
            scope.apply$(
              scope.filterDoubles,
              () => scope.predicates["isAarch64"],
            ),
          x86: () =>
            scope.apply$(scope.filterDoubles, () => scope.predicates["isx86"]),
          i686: () =>
            scope.apply$(scope.filterDoubles, () => scope.predicates["isi686"]),
          x86_64: () =>
            scope.apply$(
              scope.filterDoubles,
              () => scope.predicates["isx86_64"],
            ),
          microblaze: () =>
            scope.apply$(
              scope.filterDoubles,
              () => scope.predicates["isMicroBlaze"],
            ),
          mips: () =>
            scope.apply$(scope.filterDoubles, () => scope.predicates["isMips"]),
          mmix: () =>
            scope.apply$(scope.filterDoubles, () => scope.predicates["isMmix"]),
          power: () =>
            scope.apply$(
              scope.filterDoubles,
              () => scope.predicates["isPower"],
            ),
          riscv: () =>
            scope.apply$(
              scope.filterDoubles,
              () => scope.predicates["isRiscV"],
            ),
          riscv32: () =>
            scope.apply$(
              scope.filterDoubles,
              () => scope.predicates["isRiscV32"],
            ),
          riscv64: () =>
            scope.apply$(
              scope.filterDoubles,
              () => scope.predicates["isRiscV64"],
            ),
          rx: () =>
            scope.apply$(scope.filterDoubles, () => scope.predicates["isRx"]),
          vc4: () =>
            scope.apply$(scope.filterDoubles, () => scope.predicates["isVc4"]),
          or1k: () =>
            scope.apply$(scope.filterDoubles, () => scope.predicates["isOr1k"]),
          m68k: () =>
            scope.apply$(scope.filterDoubles, () => scope.predicates["isM68k"]),
          arc: () =>
            scope.apply$(scope.filterDoubles, () => scope.predicates["isArc"]),
          sh4: () =>
            scope.apply$(scope.filterDoubles, () => scope.predicates["isSh4"]),
          s390: () =>
            scope.apply$(scope.filterDoubles, () => scope.predicates["isS390"]),
          s390x: () =>
            scope.apply$(
              scope.filterDoubles,
              () => scope.predicates["isS390x"],
            ),
          loongarch64: () =>
            scope.apply$(
              scope.filterDoubles,
              () => scope.predicates["isLoongArch64"],
            ),
          js: () =>
            scope.apply$(
              scope.filterDoubles,
              () => scope.predicates["isJavaScript"],
            ),
          bigEndian: () =>
            scope.apply$(
              scope.filterDoubles,
              () => scope.predicates["isBigEndian"],
            ),
          littleEndian: () =>
            scope.apply$(
              scope.filterDoubles,
              () => scope.predicates["isLittleEndian"],
            ),
          cygwin: () =>
            scope.apply$(
              scope.filterDoubles,
              () => scope.predicates["isCygwin"],
            ),
          darwin: () =>
            scope.apply$(
              scope.filterDoubles,
              () => scope.predicates["isDarwin"],
            ),
          freebsd: () =>
            scope.apply$(
              scope.filterDoubles,
              () => scope.predicates["isFreeBSD"],
            ),
          gnu: () =>
            scope.operators$.listConcat(
              scope.apply$(scope.filterDoubles, () =>
                scope.apply$(scope.matchAttrs, () =>
                  scope.attrSet$({
                    kernel: () =>
                      scope.parse["kernels"]["linux"],
                    abi: () =>
                      scope.parse["abis"]["gnu"],
                  }))),
              scope.operators$.listConcat(
                scope.apply$(scope.filterDoubles, () =>
                  scope.apply$(scope.matchAttrs, () =>
                    scope.attrSet$({
                      kernel: () =>
                        scope.parse["kernels"]["linux"],
                      abi: () =>
                        scope.parse["abis"]["gnueabi"],
                    }))),
                scope.operators$.listConcat(
                  scope.apply$(scope.filterDoubles, () =>
                    scope.apply$(scope.matchAttrs, () =>
                      scope.attrSet$({
                        kernel: () =>
                          scope.parse["kernels"]["linux"],
                        abi: () =>
                          scope.parse["abis"]["gnueabihf"],
                      }))),
                  scope.operators$.listConcat(
                    scope.apply$(scope.filterDoubles, () =>
                      scope.apply$(scope.matchAttrs, () =>
                        scope.attrSet$({
                          kernel: () =>
                            scope.parse["kernels"]["linux"],
                          abi: () =>
                            scope.parse["abis"]["gnuabin32"],
                        }))),
                    scope.operators$.listConcat(
                      scope.apply$(scope.filterDoubles, () =>
                        scope.apply$(scope.matchAttrs, () =>
                          scope.attrSet$({
                            kernel: () =>
                              scope.parse["kernels"]["linux"],
                            abi: () =>
                              scope.parse["abis"]["gnuabi64"],
                          }))),
                      scope.operators$.listConcat(
                        scope.apply$(scope.filterDoubles, () =>
                          scope.apply$(scope.matchAttrs, () =>
                            scope.attrSet$({
                              kernel: () =>
                                scope.parse["kernels"]["linux"],
                              abi: () =>
                                scope.parse["abis"]["gnuabielfv1"],
                            }))),
                        scope.apply$(scope.filterDoubles, () =>
                          scope.apply$(scope.matchAttrs, () =>
                            scope.attrSet$({
                              kernel: () => scope.parse["kernels"]["linux"],
                              abi: () =>
                                scope.parse["abis"]["gnuabielfv2"],
                            }))),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          illumos: () =>
            scope.apply$(
              scope.filterDoubles,
              () => scope.predicates["isSunOS"],
            ),
          linux: () =>
            scope.apply$(
              scope.filterDoubles,
              () => scope.predicates["isLinux"],
            ),
          netbsd: () =>
            scope.apply$(
              scope.filterDoubles,
              () => scope.predicates["isNetBSD"],
            ),
          openbsd: () =>
            scope.apply$(
              scope.filterDoubles,
              () => scope.predicates["isOpenBSD"],
            ),
          unix: () =>
            scope.apply$(scope.filterDoubles, () => scope.predicates["isUnix"]),
          wasi: () =>
            scope.apply$(scope.filterDoubles, () => scope.predicates["isWasi"]),
          redox: () =>
            scope.apply$(
              scope.filterDoubles,
              () => scope.predicates["isRedox"],
            ),
          windows: () =>
            scope.apply$(
              scope.filterDoubles,
              () => scope.predicates["isWindows"],
            ),
          genode: () =>
            scope.apply$(
              scope.filterDoubles,
              () => scope.predicates["isGenode"],
            ),
          uefi: () =>
            scope.apply$(scope.filterDoubles, () => scope.predicates["isUefi"]),
          embedded: () =>
            scope.apply$(scope.filterDoubles, () => scope.predicates["isNone"]),
        })
      ))
  ),
);
