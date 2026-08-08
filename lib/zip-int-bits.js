import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./zip-int-bits.nix", import.meta.url).pathname,
  ({ scope }) => (
    /* Helper function to implement a fallback for the bit operators
   `bitAnd`, `bitOr` and `bitXor` on older nix version.
   See ./trivial.nix
    */ scope.func$("f", (scope) =>
      scope.func$("x", (scope) =>
        scope.func$("y", (scope) =>
          scope.let$({
            intToBits: (scope) =>
              scope.func$("x", (scope) =>
                scope.if$(
                  (scope.operators$.equal(scope.x, 0n)) ||
                  (scope.operators$.equal(scope.x, -1n)),
                ).then$([]).else$(() =>
                  scope.let$({
                    headbit: (scope) =>
                      scope.if$(
                        scope.operators$.notEqual(
                          scope.operators$.multiply(
                            scope.operators$.divide(scope.x, 2n),
                            2n,
                          ),
                          scope.x,
                        ),
                      ).then$(1n).else$(0n),
                    tailbits: (scope) =>
                      scope.if$(scope.operators$.lessThan(scope.x, 0n)).then$(
                        () =>
                          scope.operators$.subtract(
                            scope.operators$.divide(
                              scope.operators$.add(scope.x, 1n),
                              2n,
                            ),
                            1n,
                          )
                      ).else$(() =>
                        scope.operators$.divide(scope.x, 2n)
                      ),
                  }).in$((scope) =>
                    scope.operators$.listConcat(
                      [scope.headbit],
                      scope.apply$(scope.intToBits, () => scope.tailbits),
                    )
                  )
                )),
            bitsToInt: (scope) =>
              scope.func$("l", (scope) =>
                scope.func$("signum", (scope) =>
                  scope.if$(scope.operators$.equal(scope.l, [])).then$(() =>
                    scope.if$(scope.operators$.equal(scope.signum, 0n)).then$(
                      0n,
                    ).else$(-1n)
                  ).else$(() =>
                    scope.operators$.add(
                      scope.apply$(scope.builtins["head"], () => scope.l),
                      scope.operators$.multiply(
                        2n,
                        scope.apply$(
                          scope.bitsToInt,
                          () =>
                            scope.apply$(scope.builtins["tail"], () => scope.l),
                          () => scope.signum,
                        ),
                      ),
                    )
                  ))),
            xsignum: (scope) =>
              scope.if$(scope.operators$.lessThan(scope.x, 0n)).then$(1n).else$(
                0n,
              ),
            ysignum: (scope) =>
              scope.if$(scope.operators$.lessThan(scope.y, 0n)).then$(1n).else$(
                0n,
              ),
            "zipListsWith'": (scope) =>
              scope.func$("fst", (scope) =>
                scope.func$("snd", (scope) =>
                  scope.if$(
                    (scope.operators$.equal(scope.fst, [])) &&
                    (scope.operators$.equal(scope.snd, [])),
                  ).then$([]).elseIf$(() =>
                    scope.operators$.equal(scope.fst, [])
                  ).then$(() =>
                    scope.operators$.listConcat(
                      [scope.apply$(scope.f, () => scope.xsignum, () =>
                        scope.apply$(scope.builtins["head"], () =>
                          scope.snd))],
                      scope.apply$(scope["zipListsWith'"], [], () =>
                        scope.apply$(scope.builtins["tail"], () =>
                          scope.snd)),
                    )
                  ).elseIf$(() =>
                    scope.operators$.equal(scope.snd, [])
                  ).then$(() =>
                    scope.operators$.listConcat(
                      [scope.apply$(
                        scope.f,
                        () =>
                          scope.apply$(scope.builtins["head"], () => scope.fst),
                        () => scope.ysignum,
                      )],
                      scope.apply$(
                        scope["zipListsWith'"],
                        () =>
                          scope.apply$(scope.builtins["tail"], () => scope.fst),
                        [],
                      ),
                    )
                  ).else$(() =>
                    scope.operators$.listConcat(
                      [scope.apply$(
                        scope.f,
                        () =>
                          scope.apply$(scope.builtins["head"], () => scope.fst),
                        () =>
                          scope.apply$(scope.builtins["head"], () => scope.snd),
                      )],
                      scope.apply$(
                        scope["zipListsWith'"],
                        () =>
                          scope.apply$(scope.builtins["tail"], () => scope.fst),
                        () =>
                          scope.apply$(scope.builtins["tail"], () => scope.snd),
                      ),
                    )
                  ))),
          }).in$((scope) =>
            ((_cond) => {
              if (!_cond) {
                throw new Error(
                  "assertion failed: " +
                    "(builtins.isInt x) && (builtins.isInt y)",
                );
              }
              return scope.apply$(scope.bitsToInt, () =>
                scope.apply$(scope["zipListsWith'"], () =>
                  scope.apply$(scope.intToBits, () =>
                    scope.x), () =>
                  scope.apply$(scope.intToBits, () =>
                    scope.y)), () =>
                scope.apply$(scope.f, () =>
                  scope.xsignum, () =>
                  scope.ysignum));
            })(
              (scope.apply$(scope.builtins["isInt"], () => scope.x)) &&
              (scope.apply$(scope.builtins["isInt"], () => scope.y)),
            )
          ))))
  ),
);
