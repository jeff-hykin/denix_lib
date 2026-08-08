import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./pathWith.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.let$({
          storeDir: (scope) => scope.builtins["storeDir"],
          types: (scope) => scope.lib["types"],
          mkOption: (scope) => scope.lib["mkOption"],
        }).in$((scope) =>
          scope.attrSet$({
            imports: () => [
              scope.attrSet$({
                options: () =>
                  scope.attrSet$({
                    pathInStore: () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          type: () =>
                            scope.apply$(scope.types["lazyAttrsOf"], () =>
                              scope.apply$(scope.types["pathWith"], {
                                inStore: true,
                              })),
                        })),
                    pathNotInStore: () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          type: () =>
                            scope.apply$(scope.types["lazyAttrsOf"], () =>
                              scope.apply$(scope.types["pathWith"], {
                                inStore: false,
                              })),
                        })),
                    anyPath: () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          type: () =>
                            scope.apply$(
                              scope.types["lazyAttrsOf"],
                              () => scope.apply$(scope.types["pathWith"], {}),
                            ),
                        })),
                    absolutePathNotInStore: () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          type: () =>
                            scope.apply$(scope.types["lazyAttrsOf"], () =>
                              scope.apply$(scope.types["pathWith"], {
                                inStore: false,
                                absolute: true,
                              })),
                        })),
                    conflictingPathOptionType: () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          type: () =>
                            scope.apply$(scope.types["pathWith"], {
                              absolute: true,
                            }),
                        })),
                    impossiblePathOptionType: () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          type: () =>
                            scope.apply$(scope.types["pathWith"], {
                              inStore: true,
                              absolute: false,
                            }),
                        })),
                  }),
              }),
              scope.attrSet$({
                options: () =>
                  scope.attrSet$({
                    pathNotInStore: () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          type: () =>
                            scope.apply$(
                              scope.types["lazyAttrsOf"],
                              () =>
                                scope.apply$(scope.types["pathWith"], {
                                  inStore: false,
                                  absolute: null,
                                }),
                            ),
                        })),
                    conflictingPathOptionType: () =>
                      scope.apply$(scope.mkOption, () =>
                        scope.attrSet$({
                          type: () =>
                            scope.apply$(scope.types["pathWith"], {
                              absolute: false,
                            }),
                        })),
                  }),
              }),
            ],
            ...scope.deepSet$(["pathInStore", "ok1"], () =>
              scope.str$(
                () => [
                  scope.storeDir,
                  "/0lz9p8xhf89kb1c1kk6jxrzskaiygnlh-bash-5.2-p15.drv",
                ]
              )),
            ...scope.deepSet$(["pathInStore", "ok2"], () =>
              scope.str$(
                () => [
                  scope.storeDir,
                  "/0fb3ykw9r5hpayd05sr0cizwadzq1d8q-bash-5.2-p15",
                ]
              )),
            ...scope.deepSet$(["pathInStore", "ok3"], () =>
              scope.str$(
                () => [
                  scope.storeDir,
                  "/0fb3ykw9r5hpayd05sr0cizwadzq1d8q-bash-5.2-p15/bin/bash",
                ]
              )),
            ...scope.deepSet$(
              ["pathInStore", "ok4"],
              "/1121rp0gvr1qya7hvy925g5kjwg66acz6sn1ra1hca09f1z5dsab",
            ),
            ...scope.deepSet$(
              ["pathInStore", "ok5"],
              "/1121rp0gvr1qya7hvy925g5kjwg66acz6sn1ra1hca09f1z5dsab/bin/bash",
            ),
            ...scope.deepSet$(
              ["pathInStore", "ok6"],
              new scope.Path$([
                "/1121rp0gvr1qya7hvy925g5kjwg66acz6sn1ra1hca09f1z5dsab",
              ], []),
            ),
            ...scope.deepSet$(["pathInStore", "bad1"], ""),
            ...scope.deepSet$(["pathInStore", "bad2"], () =>
              scope.str$(() => [scope.storeDir])),
            ...scope.deepSet$(["pathInStore", "bad3"], () =>
              scope.str$(() => [scope.storeDir, "/"])),
            ...scope.deepSet$(["pathInStore", "bad4"], () =>
              scope.str$(() => [scope.storeDir, "/.links"])),
            ...scope.deepSet$(["pathInStore", "bad5"], "/foo/bar"),
            ...scope.deepSet$(["pathNotInStore", "ok1"], "/foo/bar"),
            ...scope.deepSet$(["pathNotInStore", "ok2"], () =>
              scope.str$(() => [scope.storeDir])),
            ...scope.deepSet$(["pathNotInStore", "ok3"], () =>
              scope.str$(() => [scope.storeDir, "/"])),
            ...scope.deepSet$(["pathNotInStore", "ok4"], ""),
            ...scope.deepSet$(["pathNotInStore", "ok5"], () =>
              scope.str$(() => [scope.storeDir, "/.links"])),
            ...scope.deepSet$(["pathNotInStore", "bad1"], () =>
              scope.str$(
                () => [
                  scope.storeDir,
                  "/0lz9p8xhf89kb1c1kk6jxrzskaiygnlh-bash-5.2-p15.drv",
                ]
              )),
            ...scope.deepSet$(["pathNotInStore", "bad2"], () =>
              scope.str$(
                () => [
                  scope.storeDir,
                  "/0fb3ykw9r5hpayd05sr0cizwadzq1d8q-bash-5.2-p15",
                ]
              )),
            ...scope.deepSet$(["pathNotInStore", "bad3"], () =>
              scope.str$(
                () => [
                  scope.storeDir,
                  "/0fb3ykw9r5hpayd05sr0cizwadzq1d8q-bash-5.2-p15/bin/bash",
                ]
              )),
            ...scope.deepSet$(
              ["pathNotInStore", "bad4"],
              new scope.Path$([
                new URL("./pathWith.nix", import.meta.url).pathname,
              ], []),
            ),
            ...scope.deepSet$(["anyPath", "ok1"], "/this/is/absolute"),
            ...scope.deepSet$(["anyPath", "ok2"], "./this/is/relative"),
            ...scope.deepSet$(["anyPath", "bad1"], 42n),
            ...scope.deepSet$(
              ["absolutePathNotInStore", "ok1"],
              "/this/is/absolute",
            ),
            ...scope.deepSet$(
              ["absolutePathNotInStore", "bad1"],
              "./this/is/relative",
            ),
            ...scope.deepSet$(["absolutePathNotInStore", "bad2"], () =>
              scope.str$(
                () => [
                  scope.storeDir,
                  "/0fb3ykw9r5hpayd05sr0cizwadzq1d8q-bash-5.2-p15",
                ]
              )),
            conflictingPathOptionType: "/foo/bar",
            impossiblePathOptionType: "/foo/bar",
          })
        ),
    )
  ),
);
