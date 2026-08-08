import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./architectures.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.recAttrSet$({
        features: (scope) => ({
          default: [],
          "x86-64": [],
          "x86-64-v2": ["sse3", "ssse3", "sse4_1", "sse4_2"],
          "x86-64-v3": [
            "sse3",
            "ssse3",
            "sse4_1",
            "sse4_2",
            "avx",
            "avx2",
            "fma",
          ],
          "x86-64-v4": [
            "sse3",
            "ssse3",
            "sse4_1",
            "sse4_2",
            "avx",
            "avx2",
            "avx512",
            "fma",
          ],
          nehalem: ["sse3", "ssse3", "sse4_1", "sse4_2"],
          westmere: ["sse3", "ssse3", "sse4_1", "sse4_2"],
          silvermont: ["sse3", "ssse3", "sse4_1", "sse4_2"],
          sandybridge: ["sse3", "ssse3", "sse4_1", "sse4_2", "avx"],
          ivybridge: ["sse3", "ssse3", "sse4_1", "sse4_2", "avx"],
          haswell: ["sse3", "ssse3", "sse4_1", "sse4_2", "avx", "avx2", "fma"],
          broadwell: [
            "sse3",
            "ssse3",
            "sse4_1",
            "sse4_2",
            "avx",
            "avx2",
            "fma",
          ],
          skylake: [
            "sse3",
            "ssse3",
            "sse4_1",
            "sse4_2",
            "aes",
            "avx",
            "avx2",
            "fma",
          ],
          "skylake-avx512": [
            "sse3",
            "ssse3",
            "sse4_1",
            "sse4_2",
            "aes",
            "avx",
            "avx2",
            "avx512",
            "fma",
          ],
          cannonlake: [
            "sse3",
            "ssse3",
            "sse4_1",
            "sse4_2",
            "aes",
            "avx",
            "avx2",
            "avx512",
            "fma",
          ],
          "icelake-client": [
            "sse3",
            "ssse3",
            "sse4_1",
            "sse4_2",
            "aes",
            "avx",
            "avx2",
            "avx512",
            "fma",
          ],
          "icelake-server": [
            "sse3",
            "ssse3",
            "sse4_1",
            "sse4_2",
            "aes",
            "avx",
            "avx2",
            "avx512",
            "fma",
          ],
          rocketlake: [
            "sse3",
            "ssse3",
            "sse4_1",
            "sse4_2",
            "aes",
            "avx",
            "avx2",
            "avx512",
            "fma",
          ],
          cascadelake: [
            "sse3",
            "ssse3",
            "sse4_1",
            "sse4_2",
            "aes",
            "avx",
            "avx2",
            "avx512",
            "fma",
          ],
          cooperlake: [
            "sse3",
            "ssse3",
            "sse4_1",
            "sse4_2",
            "aes",
            "avx",
            "avx2",
            "avx512",
            "fma",
          ],
          tigerlake: [
            "sse3",
            "ssse3",
            "sse4_1",
            "sse4_2",
            "aes",
            "avx",
            "avx2",
            "avx512",
            "fma",
          ],
          alderlake: [
            "sse3",
            "ssse3",
            "sse4_1",
            "sse4_2",
            "aes",
            "avx",
            "avx2",
            "fma",
          ],
          sapphirerapids: [
            "sse3",
            "ssse3",
            "sse4_1",
            "sse4_2",
            "aes",
            "avx",
            "avx2",
            "avx512",
            "fma",
          ],
          emeraldrapids: [
            "sse3",
            "ssse3",
            "sse4_1",
            "sse4_2",
            "aes",
            "avx",
            "avx2",
            "avx512",
            "fma",
          ],
          sierraforest: [
            "sse3",
            "ssse3",
            "sse4_1",
            "sse4_2",
            "aes",
            "avx",
            "avx2",
            "fma",
          ],
          btver1: ["sse3", "ssse3", "sse4_1", "sse4_2"],
          btver2: ["sse3", "ssse3", "sse4_1", "sse4_2", "aes", "avx"],
          bdver1: [
            "sse3",
            "ssse3",
            "sse4_1",
            "sse4_2",
            "sse4a",
            "aes",
            "avx",
            "fma",
            "fma4",
          ],
          bdver2: [
            "sse3",
            "ssse3",
            "sse4_1",
            "sse4_2",
            "sse4a",
            "aes",
            "avx",
            "fma",
            "fma4",
          ],
          bdver3: [
            "sse3",
            "ssse3",
            "sse4_1",
            "sse4_2",
            "sse4a",
            "aes",
            "avx",
            "fma",
            "fma4",
          ],
          bdver4: [
            "sse3",
            "ssse3",
            "sse4_1",
            "sse4_2",
            "sse4a",
            "aes",
            "avx",
            "avx2",
            "fma",
            "fma4",
          ],
          znver1: [
            "sse3",
            "ssse3",
            "sse4_1",
            "sse4_2",
            "sse4a",
            "aes",
            "avx",
            "avx2",
            "fma",
          ],
          znver2: [
            "sse3",
            "ssse3",
            "sse4_1",
            "sse4_2",
            "sse4a",
            "aes",
            "avx",
            "avx2",
            "fma",
          ],
          znver3: [
            "sse3",
            "ssse3",
            "sse4_1",
            "sse4_2",
            "sse4a",
            "aes",
            "avx",
            "avx2",
            "fma",
          ],
          znver4: [
            "sse3",
            "ssse3",
            "sse4_1",
            "sse4_2",
            "sse4a",
            "aes",
            "avx",
            "avx2",
            "avx512",
            "fma",
          ],
          znver5: [
            "sse3",
            "ssse3",
            "sse4_1",
            "sse4_2",
            "sse4a",
            "aes",
            "avx",
            "avx2",
            "avx512",
            "fma",
          ],
          loongarch64: ["fpu64"],
          la464: ["fpu64", "lsx", "lasx"],
          la664: [
            "fpu64",
            "lsx",
            "lasx",
            "div32",
            "frecipe",
            "lam-bh",
            "lamcas",
            "ld-seq-sa",
          ],
          "la64v1.0": ["fpu64", "lsx"],
          "la64v1.1": [
            "fpu64",
            "lsx",
            "div32",
            "frecipe",
            "lam-bh",
            "lamcas",
            "ld-seq-sa",
          ],
          armv5te: [],
          armv6: [],
          "armv7-a": [],
          "armv8-a": [],
          mips32: [],
          loongson2f: [],
        }),
        inferiors: (scope) =>
          scope.let$({
            withInferiors: (scope) =>
              scope.func$("archs", (scope) =>
                scope.apply$(
                  scope.lib["unique"],
                  () => (scope.operators$.listConcat(
                    scope.archs,
                    scope.apply$(scope.lib["flatten"], () =>
                      scope.apply$(scope.lib["attrVals"], () =>
                        scope.archs, () =>
                        scope.inferiors)),
                  )),
                )),
          }).in$((scope) =>
            scope.attrSet$({
              default: [],
              "x86-64": [],
              "x86-64-v2": ["x86-64"],
              "x86-64-v3": () =>
                scope.operators$.listConcat(
                  ["x86-64-v2"],
                  scope.inferiors["x86-64-v2"],
                ),
              "x86-64-v4": () =>
                scope.operators$.listConcat(
                  ["x86-64-v3"],
                  scope.inferiors["x86-64-v3"],
                ),
              nehalem: () =>
                scope.operators$.listConcat(
                  ["x86-64-v2"],
                  scope.inferiors["x86-64-v2"],
                ),
              westmere: () =>
                scope.operators$.listConcat(
                  ["nehalem"],
                  scope.inferiors["nehalem"],
                ),
              sandybridge: () =>
                scope.operators$.listConcat(
                  ["westmere"],
                  scope.inferiors["westmere"],
                ),
              ivybridge: () =>
                scope.operators$.listConcat(
                  ["sandybridge"],
                  scope.inferiors["sandybridge"],
                ),
              haswell: () =>
                scope.apply$(
                  scope.lib["unique"],
                  () => (scope.operators$.listConcat(
                    ["ivybridge", "x86-64-v3"],
                    scope.operators$.listConcat(
                      scope.inferiors["ivybridge"],
                      scope.inferiors["x86-64-v3"],
                    ),
                  )),
                ),
              broadwell: () =>
                scope.operators$.listConcat(
                  ["haswell"],
                  scope.inferiors["haswell"],
                ),
              skylake: () =>
                scope.operators$.listConcat(
                  ["broadwell"],
                  scope.inferiors["broadwell"],
                ),
              "skylake-avx512": () =>
                scope.apply$(
                  scope.lib["unique"],
                  () => (scope.operators$.listConcat(
                    ["skylake", "x86-64-v4"],
                    scope.operators$.listConcat(
                      scope.inferiors["skylake"],
                      scope.inferiors["x86-64-v4"],
                    ),
                  )),
                ),
              cannonlake: () =>
                scope.operators$.listConcat(
                  ["skylake-avx512"],
                  scope.inferiors["skylake-avx512"],
                ),
              "icelake-client": () =>
                scope.operators$.listConcat(
                  ["cannonlake"],
                  scope.inferiors["cannonlake"],
                ),
              "icelake-server": () =>
                scope.operators$.listConcat(
                  ["icelake-client"],
                  scope.inferiors["icelake-client"],
                ),
              cascadelake: () =>
                scope.operators$.listConcat(
                  ["cannonlake"],
                  scope.inferiors["cannonlake"],
                ),
              cooperlake: () =>
                scope.operators$.listConcat(
                  ["cascadelake"],
                  scope.inferiors["cascadelake"],
                ),
              tigerlake: () =>
                scope.operators$.listConcat(
                  ["icelake-server"],
                  scope.inferiors["icelake-server"],
                ),
              sapphirerapids: () =>
                scope.operators$.listConcat(
                  ["tigerlake"],
                  scope.inferiors["tigerlake"],
                ),
              emeraldrapids: () =>
                scope.operators$.listConcat(
                  ["sapphirerapids"],
                  scope.inferiors["sapphirerapids"],
                ),
              rocketlake: () =>
                scope.operators$.listConcat(
                  ["x86-64-v4"],
                  scope.inferiors["x86-64-v4"],
                ),
              alderlake: () =>
                scope.operators$.listConcat(
                  ["skylake"],
                  scope.inferiors["skylake"],
                ),
              sierraforest: () =>
                scope.operators$.listConcat(
                  ["alderlake"],
                  scope.inferiors["alderlake"],
                ),
              btver1: ["x86-64"],
              btver2: () =>
                scope.operators$.listConcat(
                  ["x86-64-v2"],
                  scope.inferiors["x86-64-v2"],
                ),
              bdver1: () =>
                scope.operators$.listConcat(
                  ["x86-64-v2"],
                  scope.inferiors["x86-64-v2"],
                ),
              bdver2: () =>
                scope.operators$.listConcat(
                  ["x86-64-v2"],
                  scope.inferiors["x86-64-v2"],
                ),
              bdver3: () =>
                scope.operators$.listConcat(
                  ["x86-64-v2"],
                  scope.inferiors["x86-64-v2"],
                ),
              bdver4: () =>
                scope.operators$.listConcat(
                  ["x86-64-v3"],
                  scope.inferiors["x86-64-v3"],
                ),
              znver1: () =>
                scope.operators$.listConcat(
                  ["skylake"],
                  scope.inferiors["skylake"],
                ),
              znver2: () =>
                scope.operators$.listConcat(
                  ["znver1"],
                  scope.inferiors["znver1"],
                ),
              znver3: () =>
                scope.operators$.listConcat(
                  ["znver2"],
                  scope.inferiors["znver2"],
                ),
              znver4: () =>
                scope.apply$(
                  scope.lib["unique"],
                  () => (scope.operators$.listConcat(
                    ["znver3", "x86-64-v4"],
                    scope.operators$.listConcat(
                      scope.inferiors["znver3"],
                      scope.inferiors["x86-64-v4"],
                    ),
                  )),
                ),
              znver5: () =>
                scope.operators$.listConcat(
                  ["znver4"],
                  scope.inferiors["znver4"],
                ),
              "armv8-a": [],
              "armv8.1-a": ["armv8-a"],
              "armv8.2-a": () =>
                scope.operators$.listConcat(
                  ["armv8.1-a"],
                  scope.inferiors["armv8.1-a"],
                ),
              "armv8.3-a": () =>
                scope.operators$.listConcat(
                  ["armv8.2-a"],
                  scope.inferiors["armv8.2-a"],
                ),
              "armv8.4-a": () =>
                scope.operators$.listConcat(
                  ["armv8.3-a"],
                  scope.inferiors["armv8.3-a"],
                ),
              "armv8.5-a": () =>
                scope.operators$.listConcat(
                  ["armv8.4-a"],
                  scope.inferiors["armv8.4-a"],
                ),
              "armv8.6-a": () =>
                scope.operators$.listConcat(
                  ["armv8.5-a"],
                  scope.inferiors["armv8.5-a"],
                ),
              "armv8.7-a": () =>
                scope.operators$.listConcat(
                  ["armv8.6-a"],
                  scope.inferiors["armv8.6-a"],
                ),
              "armv8.8-a": () =>
                scope.operators$.listConcat(
                  ["armv8.7-a"],
                  scope.inferiors["armv8.7-a"],
                ),
              "armv8.9-a": () =>
                scope.operators$.listConcat(
                  ["armv8.8-a"],
                  scope.inferiors["armv8.8-a"],
                ),
              "armv9-a": () =>
                scope.operators$.listConcat(
                  ["armv8.5-a"],
                  scope.inferiors["armv8.5-a"],
                ),
              "armv9.1-a": () =>
                scope.operators$.listConcat(
                  ["armv9-a", "armv8.6-a"],
                  scope.inferiors["armv8.6-a"],
                ),
              "armv9.2-a": () =>
                scope.apply$(
                  scope.lib["unique"],
                  () => (scope.operators$.listConcat(
                    ["armv9.1-a", "armv8.7-a"],
                    scope.operators$.listConcat(
                      scope.inferiors["armv9.1-a"],
                      scope.inferiors["armv8.7-a"],
                    ),
                  )),
                ),
              "armv9.3-a": () =>
                scope.apply$(
                  scope.lib["unique"],
                  () => (scope.operators$.listConcat(
                    ["armv9.2-a", "armv8.8-a"],
                    scope.operators$.listConcat(
                      scope.inferiors["armv9.2-a"],
                      scope.inferiors["armv8.8-a"],
                    ),
                  )),
                ),
              "armv9.4-a": () =>
                scope.operators$.listConcat(
                  ["armv9.3-a"],
                  scope.inferiors["armv9.3-a"],
                ),
              "cortex-a53": ["armv8-a"],
              "cortex-a72": ["armv8-a"],
              "cortex-a55": () =>
                scope.operators$.listConcat([
                  "armv8.2-a",
                  "cortex-a53",
                  "cortex-a72",
                ], scope.inferiors["armv8.2-a"]),
              "cortex-a76": () =>
                scope.operators$.listConcat([
                  "armv8.2-a",
                  "cortex-a53",
                  "cortex-a72",
                ], scope.inferiors["armv8.2-a"]),
              ampere1: () =>
                scope.apply$(scope.withInferiors, [
                  "armv8.6-a",
                  "cortex-a55",
                  "cortex-a76",
                ]),
              ampere1a: () =>
                scope.operators$.listConcat(
                  ["ampere1"],
                  scope.inferiors["ampere1"],
                ),
              ampere1b: () =>
                scope.operators$.listConcat(
                  ["ampere1a"],
                  scope.inferiors["ampere1a"],
                ),
              loongarch64: [],
              "la64v1.0": ["loongarch64"],
              la464: () =>
                scope.operators$.listConcat(
                  ["la64v1.0"],
                  scope.inferiors["la64v1.0"],
                ),
              "la64v1.1": () =>
                scope.operators$.listConcat(
                  ["la64v1.0"],
                  scope.inferiors["la64v1.0"],
                ),
              la664: () =>
                scope.apply$(scope.withInferiors, ["la464", "la64v1.1"]),
              armv5te: [],
              armv6: [],
              "armv7-a": [],
              mips32: [],
              loongson2f: [],
            })
          ),
        hasInferior: (scope) =>
          scope.func$("arch1", (scope) =>
            scope.func$(
              "arch2",
              (
                scope,
              ) => ((scope.operators$.hasAttr(scope.inferiors, scope.arch1)) &&
                (scope.apply$(scope.lib["elem"], () => scope.arch2, () =>
                  scope.inferiors[scope.arch1]))),
            )),
        canExecute: (scope) =>
          scope.func$("arch1", (scope) =>
            scope.func$(
              "arch2",
              (
                scope,
              ) => ((scope.operators$.equal(scope.arch1, scope.arch2)) ||
                (scope.apply$(scope.hasInferior, () => scope.arch1, () =>
                  scope.arch2))),
            )),
        predicates: (scope) =>
          scope.let$({
            featureSupport: (scope) =>
              scope.func$("feature", (scope) =>
                scope.func$("x", (scope) =>
                  scope.apply$(scope.builtins["elem"], () =>
                    scope.feature, () =>
                    scope.operators$.selectOrDefault(
                      scope.features,
                      [scope.x],
                      [],
                    )))),
          }).in$((scope) =>
            scope.attrSet$({
              sse3Support: () =>
                scope.apply$(scope.featureSupport, "sse3"),
              ssse3Support: () =>
                scope.apply$(scope.featureSupport, "ssse3"),
              sse4_1Support: () =>
                scope.apply$(scope.featureSupport, "sse4_1"),
              sse4_2Support: () =>
                scope.apply$(scope.featureSupport, "sse4_2"),
              sse4_aSupport: () => scope.apply$(scope.featureSupport, "sse4a"),
              avxSupport: () => scope.apply$(scope.featureSupport, "avx"),
              avx2Support: () => scope.apply$(scope.featureSupport, "avx2"),
              avx512Support: () => scope.apply$(scope.featureSupport, "avx512"),
              aesSupport: () => scope.apply$(scope.featureSupport, "aes"),
              fmaSupport: () => scope.apply$(scope.featureSupport, "fma"),
              fma4Support: () => scope.apply$(scope.featureSupport, "fma4"),
              lsxSupport: () => scope.apply$(scope.featureSupport, "lsx"),
              lasxSupport: () => scope.apply$(scope.featureSupport, "lasx"),
            })
          ),
      }))
  ),
);
