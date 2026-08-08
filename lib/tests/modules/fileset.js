import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./fileset.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      config: scope.nixArg$.NoDefault,
      lib: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.let$({
        mkOption: (scope) => scope.lib["mkOption"],
        mkIf: (scope) => scope.lib["mkIf"],
        types: (scope) => scope.lib["types"],
        mapAttrs: (scope) => scope.lib["mapAttrs"],
        length: (scope) => scope.lib["length"],
        empty: (scope) => scope.lib["fileset"]["empty"],
        unions: (scope) => scope.lib["fileset"]["unions"],
        toList: (scope) => scope.lib["fileset"]["toList"],
      }).in$((scope) =>
        scope.attrSet$({
          options: () =>
            scope.attrSet$({
              fileset: () =>
                scope.apply$(scope.mkOption, () =>
                  scope.attrSet$({
                    type: () =>
                      scope.with$(() => scope.types, (scope) =>
                        scope.apply$(scope.lazyAttrsOf, () =>
                          scope.fileset)),
                  })),
              filesetCardinal: () =>
                scope.apply$(scope.mkOption, () =>
                  scope.attrSet$({
                    default: () =>
                      scope.apply$(scope.mapAttrs, () =>
                        scope.func$("_", (scope) =>
                          scope.func$("fs", (scope) =>
                            scope.apply$(scope.length, () =>
                              scope.apply$(scope.toList, () =>
                                scope.fs)))), () =>
                        scope.config["fileset"]),
                  })),
            }),
          config: () =>
            scope.attrSet$({
              ...scope.deepSet$(["fileset", "ok1"], () =>
                scope.empty),
              ...scope.deepSet$(
                ["fileset", "ok2"],
                new scope.Path$([
                  new URL("./fileset", import.meta.url).pathname,
                ], []),
              ),
              ...scope.deepSet$(["fileset", "ok3"], () =>
                scope.apply$(
                  scope.unions,
                  () => [
                    scope.empty,
                    new scope.Path$([
                      new URL("./fileset", import.meta.url).pathname,
                    ], []),
                  ],
                )),
              ...scope.deepSet$(["fileset", "ok5"], () =>
                scope.apply$(
                  scope.mkIf,
                  false,
                  new scope.Path$([
                    new URL("./fileset", import.meta.url).pathname,
                  ], []),
                )),
              ...scope.deepSet$(["fileset", "err1"], 1n),
              ...scope.deepSet$(["fileset", "err2"], "foo"),
              ...scope.deepSet$(["fileset", "err3"], "./."),
              ...scope.deepSet$(["fileset", "err4"], () => [scope.empty]),
            }),
          imports: () => [
            scope.attrSet$({
              ...scope.deepSet$(
                ["fileset", "ok4"],
                new scope.Path$([
                  new URL("./fileset", import.meta.url).pathname,
                ], []),
              ),
            }),
            scope.attrSet$({
              ...scope.deepSet$(["fileset", "ok4"], () => scope.empty),
            }),
            scope.attrSet$({
              ...scope.deepSet$(
                ["fileset", "ok4"],
                new scope.Path$([
                  new URL("./fileset", import.meta.url).pathname,
                ], []),
              ),
            }),
          ],
        })
      ))
  ),
);
