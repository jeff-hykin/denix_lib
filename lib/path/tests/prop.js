import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./prop.nix", import.meta.url).pathname,
  ({ scope }) => (
    //
    //
    //
    //
    //
    //
    //
    scope.func$({
      libpath: scope.nixArg$.NoDefault,
      dir: scope.nixArg$.NoDefault,
    }, (scope) =>
      scope.let$({
        lib: (scope) => scope.apply$(scope.import, () => scope.libpath),
        strings: (scope) =>
          scope.apply$(scope.map, () =>
            scope.func$("name", (scope) =>
              scope.apply$(
                scope.builtins["readFile"],
                () => (scope.operators$.add(
                  scope.dir,
                  scope.str$(() => ["/", scope.name]),
                )),
              )), () =>
            scope.apply$(scope.builtins["attrNames"], () =>
              scope.apply$(scope.builtins["readDir"], () => scope.dir))),
        normalise: (scope) =>
          scope.lib["path"]["subpath"]["normalise"],
        isValid: (scope) =>
          scope.lib["path"]["subpath"]["isValid"],
        assertMsg: (scope) =>
          scope.lib["asserts"]["assertMsg"],
        normaliseAndCheck: (scope) =>
          scope.func$("str", (scope) =>
            scope.let$({
              originalValid: (scope) =>
                scope.apply$(scope.isValid, () => scope.str),
              tryOnce: (scope) =>
                scope.apply$(scope.builtins["tryEval"], () =>
                  scope.apply$(scope.normalise, () => scope.str)),
              tryTwice: (scope) =>
                scope.apply$(scope.builtins["tryEval"], () =>
                  scope.apply$(scope.normalise, () =>
                    scope.tryOnce["value"])),
              absConcatOrig: (scope) =>
                scope.operators$.add(
                  new scope.Path$(["/."], []),
                  scope.operators$.add("/", scope.str),
                ),
              absConcatNormalised: (scope) =>
                scope.operators$.add(
                  new scope.Path$(["/."], []),
                  scope.operators$.add("/", scope.tryOnce["value"]),
                ),
            }).in$((scope) =>
              ((_cond) => {
                if (!_cond) {
                  throw new Error(
                    "assertion failed: " +
                      'assertMsg (\n      originalValid -> tryOnce.success\n    ) "Even though string \\"${str}\\" is valid as a subpath, the normalisation for it failed"',
                  );
                }
                return ((_cond) => {
                  if (!_cond) {
                    throw new Error(
                      "assertion failed: " +
                        'assertMsg (\n      !originalValid -> !tryOnce.success\n    ) "Even though string \\"${str}\\" is invalid as a subpath, the normalisation for it succeeded"',
                    );
                  }
                  return ((_cond) => {
                    if (!_cond) {
                      throw new Error(
                        "assertion failed: " +
                          'assertMsg (\n      originalValid -> tryTwice.success\n    ) "For valid subpath \\"${str}\\", the normalisation \\"${tryOnce.value}\\" was not a valid subpath"',
                      );
                    }
                    return ((_cond) => {
                      if (!_cond) {
                        throw new Error(
                          "assertion failed: " +
                            'assertMsg (originalValid -> tryOnce.value == tryTwice.value)\n      "For valid subpath \\"${str}\\", normalising it once gives \\"${tryOnce.value}\\" but normalising it twice gives a different result: \\"${tryTwice.value}\\""',
                        );
                      }
                      return ((_cond) => {
                        if (!_cond) {
                          throw new Error(
                            "assertion failed: " +
                              'assertMsg (originalValid -> absConcatOrig == absConcatNormalised)\n      "For valid subpath \\"${str}\\", appending to an absolute Nix path value gives \\"${absConcatOrig}\\", but appending the normalised result \\"${tryOnce.value}\\" gives a different value \\"${absConcatNormalised}\\""',
                          );
                        }
                        return scope.if$(scope.tryOnce["success"]).then$(() =>
                          scope.tryOnce["value"]
                        ).else$("");
                      })(
                        scope.apply$(
                          scope.assertMsg,
                          () => (!(scope.originalValid) ||
                            (scope.operators$.equal(
                              scope.absConcatOrig,
                              scope.absConcatNormalised,
                            ))),
                          () =>
                            scope.str$(
                              () => [
                                'For valid subpath "',
                                scope.str,
                                '", appending to an absolute Nix path value gives "',
                                scope.absConcatOrig,
                                '", but appending the normalised result "',
                                scope.tryOnce["value"],
                                '" gives a different value "',
                                scope.absConcatNormalised,
                                '"',
                              ]
                            ),
                        ),
                      );
                    })(
                      scope.apply$(
                        scope.assertMsg,
                        () => (!(scope.originalValid) ||
                          (scope.operators$.equal(
                            scope.tryOnce["value"],
                            scope.tryTwice["value"],
                          ))),
                        () =>
                          scope.str$(
                            () => [
                              'For valid subpath "',
                              scope.str,
                              '", normalising it once gives "',
                              scope.tryOnce["value"],
                              '" but normalising it twice gives a different result: "',
                              scope.tryTwice["value"],
                              '"',
                            ]
                          ),
                      ),
                    );
                  })(
                    scope.apply$(
                      scope.assertMsg,
                      () => (!(scope.originalValid) ||
                        (scope.tryTwice["success"])),
                      () =>
                        scope.str$(
                          () => [
                            'For valid subpath "',
                            scope.str,
                            '", the normalisation "',
                            scope.tryOnce["value"],
                            '" was not a valid subpath',
                          ]
                        ),
                    ),
                  );
                })(
                  scope.apply$(
                    scope.assertMsg,
                    () => (!(scope.operators$.negate(scope.originalValid)) ||
                      (scope.operators$.negate(scope.tryOnce["success"]))),
                    () =>
                      scope.str$(
                        () => [
                          'Even though string "',
                          scope.str,
                          '" is invalid as a subpath, the normalisation for it succeeded',
                        ]
                      ),
                  ),
                );
              })(
                scope.apply$(
                  scope.assertMsg,
                  () => (!(scope.originalValid) || (scope.tryOnce["success"])),
                  () =>
                    scope.str$(
                      () => [
                        'Even though string "',
                        scope.str,
                        '" is valid as a subpath, the normalisation for it failed',
                      ]
                    ),
                ),
              )
            )),
      }).in$((scope) =>
        scope.apply$(scope.lib["genAttrs"], () =>
          scope.strings, () =>
          scope.normaliseAndCheck)
      ))
  ),
);
