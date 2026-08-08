import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./cli.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        concatLists: (scope) => scope.lib["concatLists"],
        concatMap: (scope) => scope.lib["concatMap"],
        escapeShellArgs: (scope) => scope.lib["escapeShellArgs"],
        isBool: (scope) => scope.lib["isBool"],
        isList: (scope) => scope.lib["isList"],
        mapAttrsToList: (scope) => scope.lib["mapAttrsToList"],
        oldestSupportedReleaseIsAtLeast: (scope) =>
          scope.lib["oldestSupportedReleaseIsAtLeast"],
        optional: (scope) => scope.lib["optional"],
        stringLength: (scope) => scope.lib["stringLength"],
        warnIf: (scope) => scope.lib["warnIf"],
        mkValueStringDefault: (scope) =>
          scope.lib["generators"]["mkValueStringDefault"],
        mkValueString: (scope) => scope.apply$(scope.mkValueStringDefault, {}),
      }).in$((scope) =>
        scope.recAttrSet$({
          toGNUCommandLineShell: (scope) =>
            scope.apply$(
              scope.warnIf,
              () => scope.apply$(scope.oldestSupportedReleaseIsAtLeast, 2511n),
              "lib.cli.toGNUCommandLineShell is deprecated, please use lib.cli.toCommandLineShell or lib.cli.toCommandLineShellGNU instead.",
              () =>
                scope.func$("options", (scope) =>
                  scope.func$("attrs", (scope) =>
                    scope.apply$(scope.escapeShellArgs, () =>
                      scope.apply$(scope.toGNUCommandLine, () =>
                        scope.options, () =>
                        scope.attrs)))),
            ),
          toGNUCommandLine: (scope) =>
            scope.apply$(
              scope.warnIf,
              () => scope.apply$(scope.oldestSupportedReleaseIsAtLeast, 2511n),
              "lib.cli.toGNUCommandLine is deprecated, please use lib.cli.toCommandLine or lib.cli.toCommandLineShellGNU instead.",
              () =>
                scope.func$({
                  mkOptionName: (scope) =>
                    scope.func$("k", (scope) =>
                      scope.if$(
                        scope.operators$.equal(
                          scope.apply$(scope.stringLength, () => scope.k),
                          1n,
                        ),
                      ).then$(() =>
                        scope.str$(() => ["-", scope.k])
                      ).else$(() => scope.str$(() => ["--", scope.k]))),
                  mkBool: (scope) =>
                    scope.func$("k", (scope) =>
                      scope.func$("v", (scope) =>
                        scope.apply$(scope.optional, () =>
                          scope.v, () =>
                          scope.apply$(scope.mkOptionName, () => scope.k)))),
                  mkList: (scope) =>
                    scope.func$("k", (scope) =>
                      scope.apply$(scope.concatMap, () =>
                        scope.apply$(scope.mkOption, () =>
                          scope.k))),
                  mkOption: (scope) =>
                    scope.func$("k", (scope) =>
                      scope.func$("v", (scope) =>
                        scope.if$(scope.operators$.equal(scope.v, null)).then$(
                          [],
                        ).elseIf$(() =>
                          scope.operators$.equal(
                            scope.optionValueSeparator,
                            null,
                          )
                        ).then$(() => [
                          scope.apply$(scope.mkOptionName, () => scope.k),
                          scope.apply$(scope.mkValueString, () => scope.v),
                        ]).else$(
                          () => [
                            scope.str$(
                              () => [
                                scope.apply$(scope.mkOptionName, () => scope.k),
                                scope.optionValueSeparator,
                                scope.apply$(
                                  scope.mkValueString,
                                  () => scope.v,
                                ),
                              ]
                            ),
                          ]
                        ))),
                  optionValueSeparator: null,
                }, (scope) =>
                  scope.let$({
                    render: (scope) =>
                      scope.func$("k", (scope) =>
                        scope.func$("v", (scope) =>
                          scope.if$(scope.apply$(scope.isBool, () => scope.v))
                            .then$(() =>
                              scope.apply$(scope.mkBool, () => scope.k, () =>
                                scope.v)
                            ).elseIf$(() =>
                              scope.apply$(scope.isList, () =>
                                scope.v)
                            ).then$(() =>
                              scope.apply$(scope.mkList, () =>
                                scope.k, () =>
                                scope.v)
                            ).else$(() =>
                              scope.apply$(scope.mkOption, () =>
                                scope.k, () =>
                                scope.v)
                            ))),
                  }).in$((scope) =>
                    scope.func$("options", (scope) =>
                      scope.apply$(scope.concatLists, () =>
                        scope.apply$(scope.mapAttrsToList, () =>
                          scope.render, () =>
                          scope.options)))
                  )),
            ),
          toCommandLineShellGNU: (scope) =>
            scope.func$("options", (scope) =>
              scope.func$("attrs", (scope) =>
                scope.apply$(scope.escapeShellArgs, () =>
                  scope.apply$(scope.toCommandLineGNU, () =>
                    scope.options, () =>
                    scope.attrs)))),
          toCommandLineGNU: (scope) =>
            scope.func$({
              isLong: (scope) =>
                scope.func$("optionName", (scope) =>
                  scope.operators$.greaterThan(
                    scope.apply$(scope.stringLength, () =>
                      scope.optionName),
                    1n,
                  )),
              explicitBool: false,
              formatArg: (scope) =>
                scope.mkValueString,
            }, (scope) =>
              scope.let$({
                optionFormat: (scope) =>
                  scope.func$("optionName", (scope) =>
                    scope.attrSet$({
                      option: () =>
                        scope.if$(scope.apply$(scope.isLong, () =>
                          scope.optionName)).then$(() =>
                            scope.str$(() => ["--", scope.optionName])
                          ).else$(() =>
                            scope.str$(() => ["-", scope.optionName])
                          ),
                      sep: () =>
                        scope.if$(scope.apply$(scope.isLong, () =>
                          scope.optionName)).then$("=").else$(""),
                      explicitBool: () =>
                        scope.explicitBool,
                      formatArg: () =>
                        scope.formatArg,
                    })),
              }).in$((scope) =>
                scope.apply$(scope.toCommandLine, () =>
                  scope.optionFormat)
              )),
          toCommandLineShell: (scope) =>
            scope.func$("optionFormat", (scope) =>
              scope.func$("attrs", (scope) =>
                scope.apply$(scope.escapeShellArgs, () =>
                  scope.apply$(scope.toCommandLine, () =>
                    scope.optionFormat, () =>
                    scope.attrs)))),
          toCommandLine: (scope) =>
            scope.func$("optionFormat", (scope) =>
              scope.let$({
                handlePair: (scope) =>
                  scope.func$("k", (scope) =>
                    scope.func$("v", (scope) =>
                      scope.if$(scope.operators$.equal(scope.k, "")).then$(() =>
                        scope.apply$(
                          scope.throw,
                          "lib.cli.toCommandLine only accepts non-empty option names.",
                        )
                      ).elseIf$(() =>
                        scope.apply$(scope.isList, () =>
                          scope.v)
                      ).then$(() =>
                        scope.apply$(scope.concatMap, () =>
                          scope.apply$(scope.handleOption, () =>
                            scope.k), () =>
                          scope.v)
                      ).else$(() =>
                        scope.apply$(scope.handleOption, () =>
                          scope.k, () =>
                          scope.v)
                      ))),
                handleOption: (scope) =>
                  scope.func$("k", (scope) =>
                    scope.apply$(scope.renderOption, () =>
                      scope.apply$(scope.optionFormat, () =>
                        scope.k), () =>
                      scope.k)),
                renderOption: (scope) =>
                  scope.func$({
                    option: scope.nixArg$.NoDefault,
                    sep: scope.nixArg$.NoDefault,
                    explicitBool: scope.nixArg$.NoDefault,
                    formatArg: (scope) => scope.mkValueString,
                  }, (scope) =>
                    scope.func$("k", (scope) =>
                      scope.func$("v", (scope) =>
                        scope.if$(
                          (scope.operators$.equal(scope.v, null)) ||
                          ((scope.operators$.negate(scope.explicitBool)) &&
                            (scope.operators$.equal(scope.v, false))),
                        ).then$([]).elseIf$(
                          () => ((scope.operators$.negate(
                            scope.explicitBool,
                          )) && (scope.operators$.equal(scope.v, true)))
                        ).then$(() => [scope.option]).else$(() =>
                          scope.let$({
                            arg: (scope) =>
                              scope.apply$(scope.formatArg, () =>
                                scope.v),
                          }).in$((scope) =>
                            scope.if$(
                              scope.operators$.notEqual(scope.sep, null),
                            ).then$(
                              () => [
                                scope.str$(
                                  () => [scope.option, scope.sep, scope.arg]
                                ),
                              ]
                            ).else$(() => [scope.option, scope.arg])
                          )
                        )))),
              }).in$((scope) =>
                scope.func$("attrs", (scope) =>
                  scope.apply$(scope.concatLists, () =>
                    scope.apply$(scope.mapAttrsToList, () =>
                      scope.handlePair, () =>
                      scope.attrs)))
              )),
        })
      ))
  ),
);
