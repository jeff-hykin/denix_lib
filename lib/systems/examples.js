import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";
import _nix_platforms_ca47304a from "./platforms.js";

export default nixFile(
  new URL("./examples.nix", import.meta.url).pathname,
  ({ scope }) => (
    //
    //
    //
    scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        platforms: (scope) =>
          scope.apply$(_nix_platforms_ca47304a(scope.runtime$), () =>
            scope.attrSet$({
              lib: () => scope.lib,
            })),
        riscv: (scope) =>
          scope.func$("bits", (scope) =>
            scope.attrSet$({
              config: () =>
                scope.str$(() => ["riscv", scope.bits, "-unknown-linux-gnu"]),
            })),
      }).in$((scope) =>
        scope.recAttrSet$({
          powernv: { config: "powerpc64le-unknown-linux-gnu" },
          "musl-power": { config: "powerpc64le-unknown-linux-musl" },
          "ppc64-elfv1": { config: "powerpc64-unknown-linux-gnuabielfv1" },
          "ppc64-elfv2": { config: "powerpc64-unknown-linux-gnuabielfv2" },
          ppc64: (scope) =>
            scope["ppc64-elfv2"],
          "ppc64-musl": {
            config: "powerpc64-unknown-linux-musl",
            gcc: { abi: "elfv2" },
          },
          ppc32: (scope) =>
            scope.attrSet$({
              config: "powerpc-unknown-linux-gnu",
              ...scope.deepSet$(
                ["rust", "rustcTarget"],
                "powerpc-unknown-linux-gnu",
              ),
            }),
          "armv5tel-multiplatform": {
            config: "armv5tel-unknown-linux-gnueabi",
          },
          raspberryPi: (scope) =>
            scope.operators$.merge(
              { config: "armv6l-unknown-linux-gnueabihf" },
              scope.platforms["raspberrypi"],
            ),
          bluefield2: (scope) =>
            scope.operators$.merge(
              { config: "aarch64-unknown-linux-gnu" },
              scope.platforms["bluefield2"],
            ),
          remarkable1: (scope) =>
            scope.operators$.merge(
              { config: "armv7l-unknown-linux-gnueabihf" },
              scope.platforms["zero-gravitas"],
            ),
          remarkable2: (scope) =>
            scope.operators$.merge(
              { config: "armv7l-unknown-linux-gnueabihf" },
              scope.platforms["zero-sugar"],
            ),
          "armv7l-hf-multiplatform": {
            config: "armv7l-unknown-linux-gnueabihf",
          },
          "aarch64-multiplatform": { config: "aarch64-unknown-linux-gnu" },
          "armv7a-android-prebuilt": (scope) =>
            scope.operators$.merge(
              scope.attrSet$({
                config: "armv7a-unknown-linux-androideabi",
                ...scope.deepSet$(
                  ["rust", "rustcTarget"],
                  "armv7-linux-androideabi",
                ),
                androidSdkVersion: "35",
                androidNdkVersion: "27",
                useAndroidPrebuilt: true,
              }),
              scope.platforms["armv7a-android"],
            ),
          "aarch64-android-prebuilt": (scope) =>
            scope.attrSet$({
              config: "aarch64-unknown-linux-android",
              ...scope.deepSet$(
                ["rust", "rustcTarget"],
                "aarch64-linux-android",
              ),
              androidSdkVersion: "35",
              androidNdkVersion: "27",
              useAndroidPrebuilt: true,
            }),
          "aarch64-android": {
            config: "aarch64-unknown-linux-android",
            androidSdkVersion: "35",
            androidNdkVersion: "27",
            libc: "bionic",
            useAndroidPrebuilt: false,
            useLLVM: true,
          },
          "ben-nanonote": (scope) =>
            scope.operators$.merge(
              { config: "mipsel-unknown-linux-uclibc" },
              scope.platforms["ben_nanonote"],
            ),
          fuloongminipc: (scope) =>
            scope.operators$.merge(
              { config: "mipsel-unknown-linux-gnu" },
              scope.platforms["fuloong2f_n32"],
            ),
          "mips-linux-gnu": (scope) =>
            scope.operators$.merge(
              { config: "mips-unknown-linux-gnu" },
              scope.platforms["gcc_mips32r2_o32"],
            ),
          "mipsel-linux-gnu": (scope) =>
            scope.operators$.merge(
              { config: "mipsel-unknown-linux-gnu" },
              scope.platforms["gcc_mips32r2_o32"],
            ),
          "mips64-linux-gnuabin32": (scope) =>
            scope.operators$.merge(
              { config: "mips64-unknown-linux-gnuabin32" },
              scope.platforms["gcc_mips64r2_n32"],
            ),
          "mips64el-linux-gnuabin32": (scope) =>
            scope.operators$.merge({
              config: "mips64el-unknown-linux-gnuabin32",
            }, scope.platforms["gcc_mips64r2_n32"]),
          "mips64-linux-gnuabi64": (scope) =>
            scope.operators$.merge(
              { config: "mips64-unknown-linux-gnuabi64" },
              scope.platforms["gcc_mips64r2_64"],
            ),
          "mips64el-linux-gnuabi64": (scope) =>
            scope.operators$.merge({
              config: "mips64el-unknown-linux-gnuabi64",
            }, scope.platforms["gcc_mips64r2_64"]),
          muslpi: (scope) =>
            scope.operators$.merge(scope.raspberryPi, {
              config: "armv6l-unknown-linux-musleabihf",
            }),
          "aarch64-multiplatform-musl": {
            config: "aarch64-unknown-linux-musl",
          },
          gnu64: { config: "x86_64-unknown-linux-gnu" },
          gnu32: { config: "i686-unknown-linux-gnu" },
          musl64: { config: "x86_64-unknown-linux-musl" },
          musl32: { config: "i686-unknown-linux-musl" },
          riscv64: (scope) => scope.apply$(scope.riscv, "64"),
          riscv32: (scope) => scope.apply$(scope.riscv, "32"),
          "riscv64-musl": { config: "riscv64-unknown-linux-musl" },
          "riscv64-embedded": { config: "riscv64-none-elf", libc: "newlib" },
          "riscv32-embedded": { config: "riscv32-none-elf", libc: "newlib" },
          "mips64-embedded": { config: "mips64-none-elf", libc: "newlib" },
          "mips-embedded": { config: "mips-none-elf", libc: "newlib" },
          "loongarch64-linux": (scope) =>
            scope.apply$(
              scope.lib["recursiveUpdate"],
              () => scope.platforms["loongarch64-multiplatform"],
              { config: "loongarch64-unknown-linux-gnu" },
            ),
          "loongarch64-linux-embedded": (scope) =>
            scope.apply$(
              scope.lib["recursiveUpdate"],
              () => scope.platforms["loongarch64-multiplatform"],
              {
                config: "loongarch64-unknown-linux-gnu",
                gcc: { arch: "loongarch64", "strict-align": true },
              },
            ),
          mmix: { config: "mmix-unknown-mmixware", libc: "newlib" },
          "rx-embedded": { config: "rx-none-elf", libc: "newlib" },
          msp430: { config: "msp430-elf", libc: "newlib" },
          avr: { config: "avr" },
          vc4: { config: "vc4-elf", libc: "newlib" },
          or1k: { config: "or1k-elf", libc: "newlib" },
          m68k: { config: "m68k-unknown-linux-gnu" },
          arc: { config: "arc-unknown-linux-gnu" },
          sh4: { config: "sh4-unknown-linux-gnu" },
          s390: { config: "s390-unknown-linux-gnu" },
          s390x: { config: "s390x-unknown-linux-gnu" },
          "arm-embedded": { config: "arm-none-eabi", libc: "newlib" },
          "arm-embedded-nano": { config: "arm-none-eabi", libc: "newlib-nano" },
          "armhf-embedded": {
            config: "arm-none-eabihf",
            libc: "newlib",
            gcc: { arch: "armv5t", fpu: "vfp" },
          },
          "aarch64-embedded": (scope) =>
            scope.attrSet$({
              config: "aarch64-none-elf",
              libc: "newlib",
              ...scope.deepSet$(
                ["rust", "rustcTarget"],
                "aarch64-unknown-none",
              ),
            }),
          "aarch64be-embedded": {
            config: "aarch64_be-none-elf",
            libc: "newlib",
          },
          "ppc-embedded": { config: "powerpc-none-eabi", libc: "newlib" },
          "ppcle-embedded": { config: "powerpcle-none-eabi", libc: "newlib" },
          "i686-embedded": { config: "i686-elf", libc: "newlib" },
          "x86_64-embedded": { config: "x86_64-elf", libc: "newlib" },
          "microblaze-embedded": {
            config: "microblazeel-none-elf",
            libc: "newlib",
          },
          iphone64: {
            config: "arm64-apple-ios",
            darwinSdkVersion: "14.3",
            xcodeVer: "12.3",
            xcodePlatform: "iPhoneOS",
            useiOSPrebuilt: true,
          },
          "iphone64-simulator": {
            config: "x86_64-apple-ios",
            darwinSdkVersion: "14.3",
            xcodeVer: "12.3",
            xcodePlatform: "iPhoneSimulator",
            darwinPlatform: "ios-simulator",
            useiOSPrebuilt: true,
          },
          "aarch64-darwin": {
            config: "arm64-apple-darwin",
            xcodePlatform: "MacOSX",
            platform: {},
          },
          "x86_64-unknown-uefi": {
            config: "x86_64-unknown-uefi",
            libc: null,
            useLLVM: true,
            linker: "lld",
          },
          "aarch64-unknown-uefi": {
            config: "aarch64-unknown-uefi",
            libc: null,
            useLLVM: true,
            linker: "lld",
          },
          "mingw-msvcrt-i686": { config: "i686-w64-mingw32", libc: "msvcrt" },
          "mingw-msvcrt-x86_64": {
            config: "x86_64-w64-mingw32",
            libc: "msvcrt",
          },
          "mingw-ucrt-x86_64": { config: "x86_64-w64-mingw32", libc: "ucrt" },
          "mingw-ucrt-x86_64-llvm": (scope) =>
            scope.attrSet$({
              config: "x86_64-w64-mingw32",
              libc: "ucrt",
              ...scope.deepSet$(
                ["rust", "rustcTarget"],
                "x86_64-pc-windows-gnullvm",
              ),
              useLLVM: true,
            }),
          "mingw-ucrt-aarch64": (scope) =>
            scope.attrSet$({
              config: "aarch64-w64-mingw32",
              libc: "ucrt",
              ...scope.deepSet$(
                ["rust", "rustcTarget"],
                "aarch64-pc-windows-gnullvm",
              ),
              useLLVM: true,
            }),
          mingw32: (scope) => scope["mingw-msvcrt-i686"],
          mingwW64: (scope) => scope["mingw-msvcrt-x86_64"],
          ucrt64: (scope) => scope["mingw-ucrt-x86_64"],
          ucrtAarch64: (scope) => scope["mingw-ucrt-aarch64"],
          "x86_64-windows": { config: "x86_64-pc-windows-msvc", useLLVM: true },
          "aarch64-windows": {
            config: "aarch64-pc-windows-msvc",
            useLLVM: true,
          },
          "x86_64-cygwin": { config: "x86_64-pc-cygwin" },
          "aarch64-freebsd": {
            config: "aarch64-unknown-freebsd",
            useLLVM: true,
          },
          "x86_64-freebsd": { config: "x86_64-unknown-freebsd", useLLVM: true },
          "x86_64-netbsd": { config: "x86_64-unknown-netbsd" },
          "x86_64-netbsd-llvm": {
            config: "x86_64-unknown-netbsd",
            useLLVM: true,
          },
          "x86_64-openbsd": { config: "x86_64-unknown-openbsd", useLLVM: true },
          "wasm32-wasip1": { config: "wasm32-unknown-wasip1", useLLVM: true },
          wasi32: { config: "wasm32-unknown-wasip1", useLLVM: true },
          "wasm32-unknown-none": (scope) =>
            scope.attrSet$({
              config: "wasm32-unknown-none",
              ...scope.deepSet$(
                ["rust", "rustcTarget"],
                "wasm32-unknown-unknown",
              ),
              useLLVM: true,
            }),
          ghcjs: { config: "javascript-unknown-ghcjs" },
        })
      ))
  ),
);
