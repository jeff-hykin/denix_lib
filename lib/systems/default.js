import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";
import _nix_doubles_cc0dc138 from "./doubles.js";
import _nix_parse_43d65a51 from "./parse.js";
import _nix_inspect_ec7e9aee from "./inspect.js";
import _nix_platforms_ca47304a from "./platforms.js";
import _nix_examples_96c19b6b from "./examples.js";
import _nix_architectures_8fda01fa from "./architectures.js";
import _nix_rustc_target_env_674612c5 from "./rustc-target-env.js";
import _nix_flake_systems_d663ad8c from "./flake-systems.js";

export default nixFile(
  new URL("./default.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        any: (scope) => scope.lib["any"],
        "foldl'": (scope) => scope.lib["foldl'"],
        hasInfix: (scope) => scope.lib["hasInfix"],
        isAttrs: (scope) => scope.lib["isAttrs"],
        isList: (scope) => scope.lib["isList"],
        mapAttrs: (scope) => scope.lib["mapAttrs"],
        optional: (scope) => scope.lib["optional"],
        optionalString: (scope) => scope.lib["optionalString"],
        removeSuffix: (scope) => scope.lib["removeSuffix"],
        replaceString: (scope) => scope.lib["replaceString"],
        toUpper: (scope) => scope.lib["toUpper"],
        toJSON: (scope) => scope.lib["strings"]["toJSON"],
        oldestSupportedReleaseIsAtLeast: (scope) =>
          scope.lib["trivial"]["oldestSupportedReleaseIsAtLeast"],
        doubles: (scope) =>
          scope.apply$(_nix_doubles_cc0dc138(scope.runtime$), () =>
            scope.attrSet$({
              lib: () => scope.lib,
            })),
        parse: (scope) =>
          scope.apply$(_nix_parse_43d65a51(scope.runtime$), () =>
            scope.attrSet$({
              lib: () =>
                scope.lib,
            })),
        inspect: (scope) =>
          scope.apply$(_nix_inspect_ec7e9aee(scope.runtime$), () =>
            scope.attrSet$({
              lib: () =>
                scope.lib,
            })),
        platforms: (scope) =>
          scope.apply$(_nix_platforms_ca47304a(scope.runtime$), () =>
            scope.attrSet$({
              lib: () =>
                scope.lib,
            })),
        examples: (scope) =>
          scope.apply$(_nix_examples_96c19b6b(scope.runtime$), () =>
            scope.attrSet$({
              lib: () =>
                scope.lib,
            })),
        architectures: (scope) =>
          scope.apply$(_nix_architectures_8fda01fa(scope.runtime$), () =>
            scope.attrSet$({
              lib: () =>
                scope.lib,
            })),
        "rustc-target-env": (scope) =>
          _nix_rustc_target_env_674612c5(scope.runtime$),
        equals: (scope) =>
          scope.func$("a", (scope) =>
            scope.func$("b", (scope) =>
              scope.operators$.equal(
                scope.a["_withoutFunctions"],
                scope.b["_withoutFunctions"],
              ))),
        functionNames: [
          "canExecute",
          "emulator",
          "emulatorAvailable",
          "staticEmulatorAvailable",
        ],
        ignoredNames: (scope) =>
          scope.operators$.listConcat(scope.functionNames, [
            "_withoutFunctions",
          ]),
        flakeExposed: (scope) =>
          scope.apply$(_nix_flake_systems_d663ad8c(scope.runtime$), {}),
        systemToAttrs: (scope) =>
          scope.func$("systemOrArgs", (scope) =>
            scope.if$(scope.apply$(scope.isAttrs, () =>
              scope.systemOrArgs)).then$(() =>
                scope.systemOrArgs
              ).else$(() =>
                scope.attrSet$({
                  system: () =>
                    scope.systemOrArgs,
                })
              )),
        elaborate: (scope) =>
          scope.func$("systemOrArgs", (scope) =>
            scope.let$({
              allArgs: (scope) =>
                scope.apply$(scope.systemToAttrs, () =>
                  scope.systemOrArgs),
              args: (scope) =>
                scope.apply$(scope.removeAttrs, () =>
                  scope.allArgs, ["parsed", "system", "_withoutFunctions"]),
              rust: (scope) =>
                scope.operators$.selectOrDefault(scope.args, ["rust"], () =>
                  scope.operators$.selectOrDefault(scope.args, ["rustc"], {})),
              selectEmulator: (scope) =>
                scope.func$("pkgs", (scope) =>
                  scope.let$({
                    wine: (scope) =>
                      scope.apply$(scope.pkgs["winePackagesFor"], () =>
                        scope.str$(
                          () => [
                            "wine",
                            scope.apply$(
                              scope.toString,
                              () => scope.final["parsed"]["cpu"]["bits"],
                            ),
                          ]
                        ))["minimal"],
                  }).in$((scope) =>
                    scope.if$(
                      scope.apply$(
                        scope.pkgs["stdenv"]["hostPlatform"]["canExecute"],
                        () => scope.final,
                      ),
                    ).then$(() =>
                      scope.apply$(scope.lib["getExe"], () =>
                        scope.apply$(
                          scope.pkgs["writeShellScriptBin"],
                          "exec",
                          'exec "$@"',
                        ))
                    ).elseIf$(() =>
                      scope.final["isWindows"]
                    ).then$(() =>
                      scope.str$(() => [scope.wine, "/bin/wine"])
                    ).elseIf$(
                      () => (((scope.final["isLinux"]) &&
                        (scope.pkgs["stdenv"]["hostPlatform"]["isLinux"])) &&
                        (scope.operators$.notEqual(
                          scope.final["qemuArch"],
                          null,
                        )))
                    ).then$(() =>
                      scope.str$(
                        () => [
                          scope.pkgs["qemu-user"],
                          "/bin/qemu-",
                          scope.final["qemuArch"],
                        ]
                      )
                    ).elseIf$(() =>
                      scope.final["isWasi"]
                    ).then$(() =>
                      scope.str$(
                        () => [scope.pkgs["wasmtime"], "/bin/wasmtime"]
                      )
                    ).elseIf$(() =>
                      scope.final["isGhcjs"]
                    ).then$(() =>
                      scope.str$(() => [scope.pkgs["nodejs-slim"], "/bin/node"])
                    ).elseIf$(() =>
                      scope.final["isMmix"]
                    ).then$(() =>
                      scope.str$(() => [scope.pkgs["mmixware"], "/bin/mmix"])
                    ).else$(null)
                  )),
              final: (scope) =>
                scope.operators$.merge(
                  scope.attrSet$({
                    _withoutFunctions: () =>
                      scope.apply$(scope.removeAttrs, () => scope.final, () =>
                        scope.ignoredNames),
                    parsed: () =>
                      scope.apply$(scope.parse["mkSystemFromString"], () =>
                        scope.operators$.selectOrDefault(
                          scope.args,
                          ["config"],
                          () => scope.allArgs["system"],
                        )),
                    system: () =>
                      scope.apply$(scope.parse["doubleFromSystem"], () =>
                        scope.final["parsed"]),
                    config: () =>
                      scope.apply$(scope.parse["tripleFromSystem"], () =>
                        scope.final["parsed"]),
                    canExecute: () =>
                      scope.func$(
                        "platform",
                        (
                          scope,
                        ) => ((((scope.operators$.equal(
                          scope.final["isAndroid"],
                          scope.platform["isAndroid"],
                        )) && (scope.apply$(scope.parse["isCompatible"], () =>
                          scope.final["parsed"]["cpu"], () =>
                          scope.platform["parsed"]["cpu"]))) &&
                          (scope.operators$.equal(
                            scope.final["parsed"]["kernel"],
                            scope.platform["parsed"]["kernel"],
                          ))) &&
                          (!(scope.operators$.equal(
                            scope.final["parsed"]["cpu"],
                            scope.platform["parsed"]["cpu"],
                          )) ||
                            (!(scope.operators$.hasAttrPath(
                              scope.platform,
                              "gcc",
                              "arch",
                            )) ||
                              ((scope.operators$.hasAttrPath(
                                scope.final,
                                "gcc",
                                "arch",
                              )) &&
                                (scope.apply$(
                                  scope.architectures["canExecute"],
                                  () => scope.final["gcc"]["arch"],
                                  () => scope.platform["gcc"]["arch"],
                                )))))),
                      ),
                    useLLVM:
                      () => ((scope.final["isFreeBSD"]) ||
                        (scope.final["isOpenBSD"])),
                    libc: () =>
                      scope.if$(scope.final["isDarwin"]).then$("libSystem")
                        .elseIf$(() =>
                          scope.final["isMsvc"]
                        ).then$("ucrt").elseIf$(() =>
                          scope.final["isMinGW"]
                        ).then$("msvcrt").elseIf$(() =>
                          scope.final["isCygwin"]
                        ).then$("cygwin").elseIf$(() =>
                          scope.final["isWasi"]
                        ).then$("wasilibc").elseIf$(
                          () => ((scope.final["isWasm"]) &&
                            (scope.operators$.negate(scope.final["isWasi"])))
                        ).then$(null).elseIf$(() =>
                          scope.final["isRedox"]
                        ).then$("relibc").elseIf$(() =>
                          scope.final["isMusl"]
                        ).then$("musl").elseIf$(() =>
                          scope.final["isPicolibc"]
                        ).then$("picolibc").elseIf$(() =>
                          scope.final["isUClibc"]
                        ).then$("uclibc").elseIf$(() =>
                          scope.final["isAndroid"]
                        ).then$("bionic").elseIf$(() =>
                          scope.final["isLinux"]
                        ).then$("glibc").elseIf$(() =>
                          scope.final["isFreeBSD"]
                        ).then$("fblibc").elseIf$(() =>
                          scope.final["isOpenBSD"]
                        ).then$("oblibc").elseIf$(() =>
                          scope.final["isNetBSD"]
                        ).then$("nblibc").elseIf$(() =>
                          scope.final["isAvr"]
                        ).then$("avrlibc").elseIf$(() =>
                          scope.final["isGhcjs"]
                        ).then$(null).elseIf$(() =>
                          scope.final["isNone"]
                        ).then$("newlib").else$("native/impure"),
                    linker: () =>
                      scope.if$(
                        scope.operators$.selectOrDefault(scope.final, [
                          "useLLVM",
                        ], false),
                      ).then$("lld").elseIf$(() =>
                        scope.final["isDarwin"]
                      ).then$("cctools").else$("bfd"),
                    libDir: () =>
                      scope.if$(scope.final["isLinux"]).then$(() =>
                        scope.if$(
                          ((scope.final["isx86_64"]) ||
                            (scope.final["isMips64"])) ||
                          (scope.final["isPower64"]),
                        ).then$("lib64").else$("lib")
                      ).else$(null),
                    extensions: () =>
                      scope.attrSet$({
                        staticLibrary: () =>
                          scope.if$(scope.final["isWindows"]).then$(".lib")
                            .else$(".a"),
                        library: () =>
                          scope.if$(scope.final["isStatic"]).then$(() =>
                            scope.final["extensions"]["staticLibrary"]
                          ).else$(() =>
                            scope.final["extensions"]["sharedLibrary"]
                          ),
                        executable: () =>
                          scope.if$(
                            (scope.final["isWindows"]) ||
                            (scope.final["isCygwin"]),
                          ).then$(".exe").else$(""),
                        ...scope.deepSet$([
                          scope.if$(scope.final["hasSharedLibraries"]).then$(
                            "sharedLibrary",
                          ).else$(null),
                        ], () =>
                          scope.if$(scope.final["isDarwin"]).then$(".dylib")
                            .elseIf$(
                              () => ((scope.final["isWindows"]) ||
                                (scope.final["isCygwin"]))
                            ).then$(".dll").else$(".so")),
                      }),
                    useAndroidPrebuilt: false,
                    useiOSPrebuilt: false,
                    uname: () =>
                      scope.attrSet$({
                        system: () =>
                          scope.operators$.selectOrDefault(
                            {
                              linux: "Linux",
                              windows: "Windows",
                              cygwin: "CYGWIN_NT",
                              darwin: "Darwin",
                              netbsd: "NetBSD",
                              freebsd: "FreeBSD",
                              openbsd: "OpenBSD",
                              wasip1: "WasiP1",
                              redox: "Redox",
                              genode: "Genode",
                            },
                            [scope.final["parsed"]["kernel"]["name"]],
                            null,
                          ),
                        processor: () =>
                          scope.if$(scope.final["isPower64"]).then$(() =>
                            scope.str$(
                              () => [
                                "ppc64",
                                scope.apply$(
                                  scope.optionalString,
                                  () => scope.final["isLittleEndian"],
                                  "le",
                                ),
                              ]
                            )
                          ).elseIf$(() =>
                            scope.final["isPower"]
                          ).then$(() =>
                            scope.str$(
                              () => [
                                "ppc",
                                scope.apply$(
                                  scope.optionalString,
                                  () => scope.final["isLittleEndian"],
                                  "le",
                                ),
                              ]
                            )
                          ).elseIf$(() =>
                            scope.final["isMips64"]
                          ).then$("mips64").elseIf$(() =>
                            scope.final["isDarwin"]
                          ).then$(() =>
                            scope.final["darwinArch"]
                          ).else$(() =>
                            scope.final["parsed"]["cpu"]["name"]
                          ),
                        release: null,
                      }),
                    hasSharedLibraries: () =>
                      scope.with$(
                        () => scope.final,
                        (
                          scope,
                        ) => (((((((((((((scope.isAndroid) || (scope.isGnu)) ||
                          (scope.isMusl)) || (scope.isDarwin)) ||
                          (scope.isSunOS)) || (scope.isOpenBSD)) ||
                          (scope.isFreeBSD)) || (scope.isNetBSD)) ||
                          (scope.isCygwin)) || (scope.isMinGW)) ||
                          (scope.isWindows)) || (scope.isWasm)) &&
                          (scope.operators$.negate(scope.isStatic))),
                      ),
                    isStatic:
                      () => ((scope.final["isWasi"]) ||
                        (scope.final["isRedox"])),
                    gcc: () =>
                      scope.operators$.merge(
                        scope.attrSet$({
                          gcc: () =>
                            scope.operators$.selectOrDefault(scope.args, [
                              "gcc",
                            ], {}),
                        }),
                        scope.apply$(scope.platforms["select"], () =>
                          scope.final),
                      ).gcc,
                    rustc: () =>
                      scope.operators$.selectOrDefault(
                        scope.args,
                        ["rustc"],
                        {},
                      ),
                    linuxArch: () =>
                      scope.if$(scope.final["isAarch32"]).then$("arm").elseIf$(
                        () => scope.final["isAarch64"]
                      ).then$("arm64").elseIf$(() => scope.final["isx86_32"])
                        .then$("i386").elseIf$(() => scope.final["isx86_64"])
                        .then$("x86_64").elseIf$(() =>
                          scope.final["isMicroBlaze"]
                        ).then$("microblaze").elseIf$(() =>
                          scope.final["isMips32"]
                        ).then$("mips").elseIf$(() => scope.final["isMips64"])
                        .then$("mips").elseIf$(() => scope.final["isPower"])
                        .then$("powerpc").elseIf$(() => scope.final["isRiscV"])
                        .then$("riscv").elseIf$(() => scope.final["isSh4"])
                        .then$("sh").elseIf$(() =>
                          scope.final["isS390"]
                        ).then$("s390").elseIf$(() =>
                          scope.final["isLoongArch64"]
                        ).then$("loongarch").else$(() =>
                          scope.final["parsed"]["cpu"]["name"]
                        ),
                    ubootArch: () =>
                      scope.if$(scope.final["isx86_32"]).then$("x86").elseIf$(
                        () => scope.final["isMips64"]
                      ).then$("mips64").else$(() => scope.final["linuxArch"]),
                    qemuArch: () =>
                      scope.if$(scope.final["isAarch32"]).then$("arm").elseIf$(
                        () => scope.final["isAarch64"]
                      ).then$(() =>
                        scope.str$(
                          () => [
                            "aarch64",
                            scope.apply$(
                              scope.optionalString,
                              () => scope.final["isBigEndian"],
                              "_be",
                            ),
                          ]
                        )
                      ).elseIf$(
                        () => ((scope.final["isS390"]) &&
                          (scope.operators$.negate(scope.final["isS390x"])))
                      ).then$(null).elseIf$(() => scope.final["isx86_64"])
                        .then$("x86_64").elseIf$(() => scope.final["isx86"])
                        .then$("i386").elseIf$(() => scope.final["isMips64n32"])
                        .then$(() =>
                          scope.str$(
                            () => [
                              "mipsn32",
                              scope.apply$(
                                scope.optionalString,
                                () => scope.final["isLittleEndian"],
                                "el",
                              ),
                            ]
                          )
                        ).elseIf$(() => scope.final["isMips64"]).then$(() =>
                          scope.str$(
                            () => [
                              "mips64",
                              scope.apply$(
                                scope.optionalString,
                                () => scope.final["isLittleEndian"],
                                "el",
                              ),
                            ]
                          )
                        ).else$(() => scope.final["uname"]["processor"]),
                    efiArch: () =>
                      scope.if$(scope.final["isx86_32"]).then$("ia32").elseIf$(
                        () => scope.final["isx86_64"]
                      ).then$("x64").elseIf$(() => scope.final["isAarch32"])
                        .then$("arm").elseIf$(() => scope.final["isAarch64"])
                        .then$("aa64").else$(() =>
                          scope.final["parsed"]["cpu"]["name"]
                        ),
                    darwinArch: () =>
                      scope.apply$(
                        scope.parse["darwinArch"],
                        () => scope.final["parsed"]["cpu"],
                      ),
                    darwinPlatform: () =>
                      scope.if$(scope.final["isMacOS"]).then$("macos").elseIf$(
                        () => scope.final["isiOS"]
                      ).then$("ios").else$(null),
                    darwinSdkVersion: () =>
                      scope.operators$.selectOrDefault(
                        scope.final,
                        ["sdkVer"],
                        "14.4",
                      ),
                    darwinMinVersion: "14.0",
                    darwinMinVersionVariable: () =>
                      scope.if$(scope.final["isMacOS"]).then$(
                        "MACOSX_DEPLOYMENT_TARGET",
                      ).elseIf$(() => scope.final["isiOS"]).then$(
                        "IPHONEOS_DEPLOYMENT_TARGET",
                      ).else$(null),
                    androidSdkVersion: () =>
                      scope.operators$.selectOrDefault(scope.args, [
                        "androidSdkVersion",
                      ], null),
                    androidNdkVersion: () =>
                      scope.operators$.selectOrDefault(scope.args, [
                        "androidNdkVersion",
                      ], null),
                    emulatorAvailable: () =>
                      scope.func$("pkgs", (scope) =>
                        scope.operators$.notEqual(
                          scope.apply$(scope.selectEmulator, () => scope.pkgs),
                          null,
                        )),
                    staticEmulatorAvailable: () =>
                      scope.func$(
                        "pkgs",
                        (
                          scope,
                        ) => ((scope.apply$(
                          scope.final["emulatorAvailable"],
                          () => scope.pkgs,
                        )) &&
                          (((scope.final["isLinux"]) ||
                            (scope.final["isWasi"])) ||
                            (scope.final["isMmix"]))),
                      ),
                    emulator: () =>
                      scope.func$("pkgs", (scope) =>
                        scope.if$(
                          scope.apply$(scope.final["emulatorAvailable"], () =>
                            scope.pkgs),
                        ).then$(() =>
                          scope.apply$(scope.selectEmulator, () => scope.pkgs)
                        ).else$(() =>
                          scope.apply$(scope.throw, () =>
                            scope.str$(
                              () => [
                                "Don't know how to run ",
                                scope.final["config"],
                                " executables.",
                              ]
                            ))
                        )),
                  }),
                  scope.operators$.merge(
                    scope.apply$(
                      scope.mapAttrs,
                      () =>
                        scope.func$(
                          "n",
                          (scope) =>
                            scope.func$("v", (scope) =>
                              scope.apply$(scope.v, () =>
                                scope.final["parsed"])),
                        ),
                      () => scope.inspect["predicates"],
                    ),
                    scope.operators$.merge(
                      scope.apply$(scope.mapAttrs, () =>
                        scope.func$("n", (scope) =>
                          scope.func$("v", (scope) =>
                            scope.apply$(scope.v, () =>
                              scope.operators$.selectOrDefault(scope.final, [
                                "gcc",
                                "arch",
                              ], "default")))), () =>
                        scope.architectures["predicates"]),
                      scope.operators$.merge(
                        scope.args,
                        scope.attrSet$({
                          rust: () =>
                            scope.operators$.merge(
                              scope.rust,
                              scope.attrSet$({
                                platform: () =>
                                  scope.operators$.merge(
                                    scope.operators$.selectOrDefault(
                                      scope.rust,
                                      ["platform"],
                                      () =>
                                        scope.if$(
                                          scope.apply$(
                                            scope.lib["hasSuffix"],
                                            ".json",
                                            () =>
                                              scope.operators$.selectOrDefault(
                                                scope.rust,
                                                ["rustcTargetSpec"],
                                                "",
                                              ),
                                          ),
                                        ).then$(() =>
                                          scope.apply$(
                                            scope.lib["importJSON"],
                                            () => scope.rust["rustcTargetSpec"],
                                          )
                                        ).else$({}),
                                    ),
                                    scope.attrSet$({
                                      arch: () =>
                                        scope.if$(
                                          scope.operators$.hasAttr(
                                            scope.rust,
                                            "platform",
                                          ),
                                        ).then$(() =>
                                          scope.rust["platform"]["arch"]
                                        ).elseIf$(() =>
                                          scope.final["isAarch32"]
                                        ).then$("arm").elseIf$(() =>
                                          scope.final["isMips64"]
                                        ).then$("mips64").elseIf$(() =>
                                          scope.final["isPower64"]
                                        ).then$("powerpc64").else$(() =>
                                          scope.final["parsed"]["cpu"]["name"]
                                        ),
                                      env: () =>
                                        scope.if$(
                                          scope.operators$.hasAttrPath(
                                            scope.rust,
                                            "platform",
                                            "env",
                                          ),
                                        ).then$(() =>
                                          scope.rust["platform"]["env"]
                                        ).elseIf$(() =>
                                          scope.operators$.hasAttr(
                                            scope["rustc-target-env"],
                                            scope
                                              .final["rust"]["rustcTargetSpec"],
                                          )
                                        ).then$(() =>
                                          scope["rustc-target-env"][
                                            scope
                                              .final["rust"]["rustcTargetSpec"]
                                          ]
                                        ).else$(""),
                                      os: () =>
                                        scope.if$(
                                          scope.operators$.hasAttr(
                                            scope.rust,
                                            "platform",
                                          ),
                                        ).then$(() =>
                                          scope.operators$.selectOrDefault(
                                            scope.rust,
                                            ["platform", "os"],
                                            "none",
                                          )
                                        ).elseIf$(() => scope.final["isDarwin"])
                                          .then$("macos").elseIf$(() =>
                                            scope.final["isWasi"]
                                          ).then$("wasi").elseIf$(
                                            () => ((scope.final["isWasm"]) &&
                                              (scope.operators$.negate(
                                                scope.final["isWasi"],
                                              )))
                                          ).then$("unknown").else$(() =>
                                            scope
                                              .final["parsed"]["kernel"]["name"]
                                          ),
                                      "target-family": () =>
                                        scope.if$(
                                          scope.operators$.hasAttrPath(
                                            scope.args,
                                            "rust",
                                            "platform",
                                            "target-family",
                                          ),
                                        ).then$(() =>
                                          scope
                                            .args["rust"]["platform"][
                                              "target-family"
                                            ]
                                        ).elseIf$(() =>
                                          scope.operators$.hasAttrPath(
                                            scope.args,
                                            "rustc",
                                            "platform",
                                            "target-family",
                                          )
                                        ).then$(() =>
                                          scope.let$({
                                            f: (scope) =>
                                              scope
                                                .args["rustc"]["platform"][
                                                  "target-family"
                                                ],
                                          }).in$((scope) =>
                                            scope.if$(
                                              scope.apply$(scope.isList, () =>
                                                scope.f),
                                            ).then$(() => scope.f).else$(
                                              () => [scope.f]
                                            )
                                          )
                                        ).else$(() =>
                                          scope.operators$.listConcat(
                                            scope.apply$(scope.optional, () =>
                                              scope.final["isUnix"], "unix"),
                                            scope.operators$.listConcat(
                                              scope.apply$(
                                                scope.optional,
                                                () => scope.final["isWindows"],
                                                "windows",
                                              ),
                                              scope.apply$(scope.optional, () =>
                                                scope.final["isWasm"], "wasm"),
                                            ),
                                          )
                                        ),
                                      vendor: () =>
                                        scope.let$({
                                          vendor: (scope) =>
                                            scope.final["parsed"]["vendor"],
                                        }).in$((scope) =>
                                          scope.operators$.selectOrDefault(
                                            scope.rust,
                                            ["platform", "vendor"],
                                            () =>
                                              scope.operators$.selectOrDefault(
                                                { w64: "pc" },
                                                [scope.vendor["name"]],
                                                () => scope.vendor["name"],
                                              ),
                                          )
                                        ),
                                    }),
                                  ),
                                rustcTargetSpec: () =>
                                  scope.let$({
                                    cpu: (scope) =>
                                      scope.final["parsed"]["cpu"],
                                    kernel: (scope) =>
                                      scope.final["parsed"]["kernel"],
                                    abi: (scope) =>
                                      scope.final["parsed"]["abi"],
                                    cpu_: (scope) =>
                                      scope.operators$.selectOrDefault(
                                        scope.rust,
                                        ["platform", "arch"],
                                        () =>
                                          scope.operators$.selectOrDefault(
                                            {
                                              armv7a: "armv7",
                                              armv7l: "armv7",
                                              armv6l: "arm",
                                              armv5tel: "armv5te",
                                              riscv32: "riscv32gc",
                                              riscv64: "riscv64gc",
                                            },
                                            [scope.cpu["name"]],
                                            () => scope.cpu["name"],
                                          ),
                                      ),
                                    vendor_: (scope) =>
                                      scope.final["rust"]["platform"]["vendor"],
                                    abi_: (scope) =>
                                      scope.if$(
                                        (scope.apply$(
                                          scope.lib["strings"]["hasPrefix"],
                                          "powerpc",
                                          () => scope.cpu["name"],
                                        )) &&
                                        (scope.apply$(
                                          scope.lib["strings"]["hasPrefix"],
                                          "gnuabielfv",
                                          () => scope.abi["name"],
                                        )),
                                      ).then$("gnu").else$(() =>
                                        scope.abi["name"]
                                      ),
                                    inferred: (scope) =>
                                      scope.if$(scope.final["isWasiP1"]).then$(
                                        () =>
                                          scope.str$(
                                            () => [scope.cpu_, "-wasip1"]
                                          )
                                      ).else$(() =>
                                        scope.str$(
                                          () => [
                                            scope.cpu_,
                                            "-",
                                            scope.vendor_,
                                            "-",
                                            scope.kernel["name"],
                                            scope.apply$(
                                              scope.optionalString,
                                              () => (scope.operators$.notEqual(
                                                scope.abi["name"],
                                                "unknown",
                                              )),
                                              () =>
                                                scope.str$(
                                                  () => ["-", scope.abi_]
                                                ),
                                            ),
                                          ]
                                        )
                                      ),
                                  }).in$((scope) =>
                                    scope.operators$.selectOrDefault(
                                      scope.args,
                                      ["rust", "rustcTargetSpec"],
                                      () =>
                                        scope.operators$.selectOrDefault(
                                          scope.args,
                                          ["rustc", "config"],
                                          () =>
                                            scope.if$(
                                              scope.operators$.hasAttr(
                                                scope.rust,
                                                "platform",
                                              ),
                                            ).then$(() =>
                                              scope.apply$(
                                                scope.builtins["toFile"],
                                                () => (scope.operators$.add(
                                                  scope.operators$
                                                    .selectOrDefault(
                                                      scope.rust,
                                                      ["rustcTarget"],
                                                      () => scope.inferred,
                                                    ),
                                                  ".json",
                                                )),
                                                () =>
                                                  scope.apply$(
                                                    scope.toJSON,
                                                    () =>
                                                      scope.rust["platform"],
                                                  ),
                                              )
                                            ).else$(() =>
                                              scope.operators$.selectOrDefault(
                                                scope.args,
                                                ["rust", "rustcTarget"],
                                                () =>
                                                  scope.inferred,
                                              )
                                            ),
                                        ),
                                    )
                                  ),
                                rustcTarget: () =>
                                  scope.operators$.selectOrDefault(
                                    scope.rust,
                                    ["rustcTarget"],
                                    () =>
                                      scope.final["rust"]["cargoShortTarget"],
                                  ),
                                cargoShortTarget: () =>
                                  scope.apply$(
                                    scope.removeSuffix,
                                    ".json",
                                    () =>
                                      scope.apply$(scope.baseNameOf, () =>
                                        scope.str$(
                                          () => [
                                            scope
                                              .final["rust"]["rustcTargetSpec"],
                                          ]
                                        )),
                                  ),
                                cargoEnvVarTarget: () =>
                                  scope.apply$(
                                    scope.replaceString,
                                    "-",
                                    "_",
                                    () =>
                                      scope.apply$(scope.toUpper, () =>
                                        scope
                                          .final["rust"]["cargoShortTarget"]),
                                  ),
                                isNoStdTarget: () =>
                                  scope.apply$(
                                    scope.any,
                                    () =>
                                      scope.func$("t", (scope) =>
                                        scope.apply$(scope.hasInfix, () =>
                                          scope.t, () =>
                                          scope.final["rust"]["rustcTarget"])),
                                    ["-none", "nvptx", "switch", "-uefi"],
                                  ),
                              }),
                            ),
                          go: () =>
                            scope.attrSet$({
                              GOARCH: () =>
                                scope.operators$.selectOrDefault(
                                  {
                                    aarch64: "arm64",
                                    arm: "arm",
                                    armv5tel: "arm",
                                    armv6l: "arm",
                                    armv7l: "arm",
                                    i686: "386",
                                    loongarch64: "loong64",
                                    mips: "mips",
                                    mips64el: "mips64le",
                                    mipsel: "mipsle",
                                    powerpc64: "ppc64",
                                    powerpc64le: "ppc64le",
                                    riscv64: "riscv64",
                                    s390x: "s390x",
                                    x86_64: "amd64",
                                    wasm32: "wasm",
                                  },
                                  [scope.final["parsed"]["cpu"]["name"]],
                                  null,
                                ),
                              GOOS: () =>
                                scope.if$(scope.final["isWasiP1"]).then$(
                                  "wasip1",
                                ).else$(() =>
                                  scope.final["parsed"]["kernel"]["name"]
                                ),
                              GOARM: () =>
                                scope.apply$(scope.toString, () =>
                                  scope.apply$(
                                    scope.lib["intersectLists"],
                                    () => [
                                      scope.operators$.selectOrDefault(
                                        scope.final,
                                        ["parsed", "cpu", "version"],
                                        "",
                                      ),
                                    ],
                                    ["5", "6", "7"],
                                  )),
                            }),
                          node: () =>
                            scope.attrSet$({
                              arch: () =>
                                scope.if$(scope.final["isAarch"]).then$(() =>
                                  scope.operators$.add(
                                    "arm",
                                    scope.apply$(
                                      scope.lib["optionalString"],
                                      () => scope.final["is64bit"],
                                      "64",
                                    ),
                                  )
                                ).elseIf$(() => scope.final["isMips32"]).then$(
                                  () =>
                                    scope.operators$.add(
                                      "mips",
                                      scope.apply$(
                                        scope.lib["optionalString"],
                                        () => scope.final["isLittleEndian"],
                                        "el",
                                      ),
                                    )
                                ).elseIf$(
                                  () => ((scope.final["isMips64"]) &&
                                    (scope.final["isLittleEndian"]))
                                ).then$("mips64el").elseIf$(() =>
                                  scope.final["isPower"]
                                ).then$(() =>
                                  scope.operators$.add(
                                    "ppc",
                                    scope.apply$(
                                      scope.lib["optionalString"],
                                      () => scope.final["is64bit"],
                                      "64",
                                    ),
                                  )
                                ).elseIf$(() => scope.final["isx86_64"]).then$(
                                  "x64",
                                ).elseIf$(() => scope.final["isx86_32"]).then$(
                                  "ia32",
                                ).elseIf$(() => scope.final["isS390x"]).then$(
                                  "s390x",
                                ).elseIf$(() => scope.final["isRiscV64"]).then$(
                                  "riscv64",
                                ).elseIf$(() => scope.final["isLoongArch64"])
                                  .then$("loong64").else$(null),
                              platform: () =>
                                scope.if$(scope.final["isAndroid"]).then$(
                                  "android",
                                ).elseIf$(() => scope.final["isDarwin"]).then$(
                                  "darwin",
                                ).elseIf$(() => scope.final["isFreeBSD"]).then$(
                                  "freebsd",
                                ).elseIf$(() => scope.final["isLinux"]).then$(
                                  "linux",
                                ).elseIf$(() => scope.final["isOpenBSD"]).then$(
                                  "openbsd",
                                ).elseIf$(() => scope.final["isSunOS"]).then$(
                                  "sunos",
                                ).elseIf$(
                                  () => ((scope.final["isWindows"]) ||
                                    (scope.final["isCygwin"]))
                                ).then$("win32").else$(null),
                            }),
                          nim: () =>
                            scope.attrSet$({
                              cpu: () =>
                                scope.if$(scope.final["isAarch32"]).then$("arm")
                                  .elseIf$(() => scope.final["isAarch64"])
                                  .then$("arm64").elseIf$(() =>
                                    scope.final["isAlpha"]
                                  ).then$("alpha").elseIf$(() =>
                                    scope.final["isAvr"]
                                  ).then$("avr").elseIf$(
                                    () => ((scope.final["isMips"]) &&
                                      (scope.final["is32Bit"]))
                                  ).then$("mips").elseIf$(
                                    () => ((scope.final["isMips"]) &&
                                      (scope.final["is64Bit"]))
                                  ).then$("mips64").elseIf$(() =>
                                    scope.final["isMsp430"]
                                  ).then$("msp430").elseIf$(
                                    () => ((scope.final["isPower"]) &&
                                      (scope.final["is32bit"]))
                                  ).then$("powerpc").elseIf$(
                                    () => ((scope.final["isPower"]) &&
                                      (scope.final["is64bit"]))
                                  ).then$("powerpc64").elseIf$(
                                    () => ((scope.final["isRiscV"]) &&
                                      (scope.final["is64bit"]))
                                  ).then$("riscv64").elseIf$(() =>
                                    scope.final["isSparc"]
                                  ).then$("sparc").elseIf$(() =>
                                    scope.final["isx86_32"]
                                  ).then$("i386").elseIf$(() =>
                                    scope.final["isx86_64"]
                                  ).then$("amd64").else$(null),
                              os: () =>
                                scope.if$(scope.final["isAndroid"]).then$(
                                  "Android",
                                ).elseIf$(() => scope.final["isDarwin"]).then$(
                                  "MacOSX",
                                ).elseIf$(() => scope.final["isFreeBSD"]).then$(
                                  "FreeBSD",
                                ).elseIf$(() => scope.final["isGenode"]).then$(
                                  "Genode",
                                ).elseIf$(() => scope.final["isLinux"]).then$(
                                  "Linux",
                                ).elseIf$(() => scope.final["isNetBSD"]).then$(
                                  "NetBSD",
                                ).elseIf$(() => scope.final["isNone"]).then$(
                                  "Standalone",
                                ).elseIf$(() => scope.final["isOpenBSD"]).then$(
                                  "OpenBSD",
                                ).elseIf$(() => scope.final["isWindows"]).then$(
                                  "Windows",
                                ).elseIf$(() => scope.final["isiOS"]).then$(
                                  "iOS",
                                ).else$(null),
                            }),
                        }),
                      ),
                    ),
                  ),
                ),
            }).in$((scope) =>
              ((_cond) => {
                if (!_cond) {
                  throw new Error(
                    "assertion failed: " +
                      'oldestSupportedReleaseIsAtLeast 2611 && args ? linux-kernel\n      -> throw "lib.systems.elaborate: linux-kernel has been removed',
                  );
                }
                return ((_cond) => {
                  if (!_cond) {
                    throw new Error(
                      "assertion failed: " +
                        "final.useAndroidPrebuilt -> final.isAndroid",
                    );
                  }
                  return ((_cond) => {
                    if (!_cond) {
                      throw new Error(
                        "assertion failed: " +
                          "foldl' (pass: { assertion, message }: if assertion final then pass else throw message) true (\n      final.parsed.abi.assertions or [ ]\n    )",
                      );
                    }
                    return scope.final;
                  })(scope.apply$(
                    scope["foldl'"],
                    () =>
                      scope.func$("pass", (scope) =>
                        scope.func$({
                          assertion: scope.nixArg$.NoDefault,
                          message: scope.nixArg$.NoDefault,
                        }, (scope) =>
                          scope.if$(
                            scope.apply$(scope.assertion, () => scope.final),
                          ).then$(() => scope.pass).else$(() =>
                            scope.apply$(scope.throw, () => scope.message)
                          ))),
                    true,
                    () =>
                      scope.operators$.selectOrDefault(scope.final, [
                        "parsed",
                        "abi",
                        "assertions",
                      ], []),
                  ));
                })(
                  !(scope.final["useAndroidPrebuilt"]) ||
                  (scope.final["isAndroid"]),
                );
              })(
                !((scope.apply$(
                  scope.oldestSupportedReleaseIsAtLeast,
                  2611n,
                )) && (scope.operators$.hasAttr(scope.args, "linux-kernel"))) ||
                (scope.apply$(
                  scope.throw,
                  "lib.systems.elaborate: linux-kernel has been removed; see the 26.11 release notes",
                )),
              )
            )),
      }).in$((scope) =>
        scope.attrSet$({
          architectures: () => scope.architectures,
          doubles: () => scope.doubles,
          elaborate: () => scope.elaborate,
          equals: () => scope.equals,
          examples: () => scope.examples,
          flakeExposed: () => scope.flakeExposed,
          functionNames: () => scope.functionNames,
          inspect: () => scope.inspect,
          parse: () => scope.parse,
          platforms: () => scope.platforms,
          systemToAttrs: () => scope.systemToAttrs,
        })
      ))
  ),
);
