import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";
import _nix_examples_96c19b6b from "./examples.js";

export default nixFile(
  new URL("./platforms.nix", import.meta.url).pathname,
  ({ scope }) => (
    //
    //
    //
    //
    //
    //
    scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.recAttrSet$({
        "armv5tel-multiplatform": { gcc: { arch: "armv5te" } },
        raspberrypi: { gcc: { arch: "armv6kz", fpu: "vfpv2" } },
        raspberrypi2: (scope) => scope["armv7l-hf-multiplatform"],
        bluefield2: { gcc: { arch: "armv8-a+fp+simd+crc+crypto" } },
        "zero-gravitas": { gcc: { fpu: "neon", cpu: "cortex-a9" } },
        "zero-sugar": {
          gcc: { cpu: "cortex-a7", fpu: "neon-vfpv4", "float-abi": "hard" },
        },
        "armv7a-android": {
          gcc: { arch: "armv7-a", "float-abi": "softfp", fpu: "vfpv3-d16" },
        },
        "armv7l-hf-multiplatform": {
          gcc: { arch: "armv7-a", fpu: "vfpv3-d16" },
        },
        "aarch64-multiplatform": { gcc: { arch: "armv8-a" } },
        "apple-m1": {
          gcc: {
            arch: "armv8.3-a+crypto+sha2+aes+crc+fp16+lse+simd+ras+rdm+rcpc",
            cpu: "apple-a13",
          },
        },
        ben_nanonote: { gcc: { arch: "mips32", float: "soft" } },
        fuloong2f_n32: {
          gcc: { arch: "loongson2f", float: "hard", abi: "n32" },
        },
        gcc_mips32r2_o32: { gcc: { arch: "mips32r2", abi: "32" } },
        gcc_mips32r6_o32: { gcc: { arch: "mips32r6", abi: "32" } },
        gcc_mips64r2_n32: { gcc: { arch: "mips64r2", abi: "n32" } },
        gcc_mips64r6_n32: { gcc: { arch: "mips64r6", abi: "n32" } },
        gcc_mips64r2_64: { gcc: { arch: "mips64r2", abi: "64" } },
        gcc_mips64r6_64: { gcc: { arch: "mips64r6", abi: "64" } },
        "loongarch64-multiplatform": {
          gcc: { arch: "la64v1.0", "strict-align": false, cmodel: "medium" },
        },
        select: (scope) =>
          scope.func$("platform", (scope) =>
            scope.if$(scope.platform["isAarch32"]).then$(() =>
              scope.let$({
                version: (scope) =>
                  scope.operators$.selectOrDefault(scope.platform, [
                    "parsed",
                    "cpu",
                    "version",
                  ], null),
              }).in$((scope) =>
                scope.if$(scope.operators$.equal(scope.version, null)).then$({})
                  .elseIf$(() =>
                    scope.apply$(scope.lib["versionOlder"], () =>
                      scope.version, "6")
                  ).then$(() =>
                    scope["armv5tel-multiplatform"]
                  ).elseIf$(() =>
                    scope.apply$(
                      scope.lib["versionOlder"],
                      () => scope.version,
                      "7",
                    )
                  ).then$(() => scope.raspberrypi).else$(() =>
                    scope["armv7l-hf-multiplatform"]
                  )
              )
            ).elseIf$(() => scope.platform["isAarch64"]).then$(() =>
              scope.if$(scope.platform["isDarwin"]).then$(() =>
                scope["apple-m1"]
              ).else$(() => scope["aarch64-multiplatform"])
            ).elseIf$(() => scope.platform["isLoongArch64"]).then$(() =>
              scope["loongarch64-multiplatform"]
            ).elseIf$(() =>
              scope.operators$.equal(
                scope.platform["parsed"]["cpu"],
                scope.lib["systems"]["parse"]["cpuTypes"]["mipsel"],
              )
            ).then$(() =>
              scope.apply$(
                _nix_examples_96c19b6b(scope.runtime$),
                () =>
                  scope.attrSet$({
                    lib: () => scope.lib,
                  }),
              )["mipsel-linux-gnu"]
            ).else$({})),
      }))
  ),
);
