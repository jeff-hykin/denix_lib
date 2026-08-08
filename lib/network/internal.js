import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";
import _nix_default_6e679886 from "../default.js";

export default nixFile(
  new URL("./internal.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: (scope) => _nix_default_6e679886(scope.runtime$) },
      (scope) =>
        scope.let$({
          map: (scope) => scope.builtins["map"],
          match: (scope) => scope.builtins["match"],
          genList: (scope) => scope.builtins["genList"],
          length: (scope) => scope.builtins["length"],
          concatMap: (scope) => scope.builtins["concatMap"],
          head: (scope) => scope.builtins["head"],
          toString: (scope) => scope.builtins["toString"],
          lists: (scope) => scope.lib["lists"],
          strings: (scope) => scope.lib["strings"],
          trivial: (scope) => scope.lib["trivial"],
          last: (scope) => scope.lib["lists"]["last"],
          ipv6Bits: 128n,
          ipv6Pieces: 8n,
          ipv6PieceMaxValue: 65535n,
        }).in$((scope) =>
          scope.let$({
            expandIpv6: (scope) =>
              scope.func$("addr", (scope) =>
                scope.if$(
                  scope.operators$.equal(
                    scope.apply$(scope.match, "^[0-9A-Fa-f:]+$", () =>
                      scope.addr),
                    null,
                  ),
                ).then$(() =>
                  scope.apply$(scope.throw, () =>
                    scope.str$(
                      () => [
                        scope.addr,
                        " contains malformed characters for IPv6 address",
                      ]
                    ))
                ).else$(() =>
                  scope.let$({
                    pieces: (scope) =>
                      scope.apply$(
                        scope.strings["splitString"],
                        ":",
                        () => scope.addr,
                      ),
                    piecesNoEmpty: (scope) =>
                      scope.apply$(
                        scope.lists["remove"],
                        "",
                        () => scope.pieces,
                      ),
                    piecesNoEmptyLen: (scope) =>
                      scope.apply$(scope.length, () => scope.piecesNoEmpty),
                    zeros: (scope) =>
                      scope.apply$(
                        scope.genList,
                        () => scope.func$("_", (scope) => "0"),
                        () => (scope.operators$.subtract(
                          scope.ipv6Pieces,
                          scope.piecesNoEmptyLen,
                        )),
                      ),
                    hasPrefix: (scope) =>
                      scope.apply$(
                        scope.strings["hasPrefix"],
                        "::",
                        () => scope.addr,
                      ),
                    hasSuffix: (scope) =>
                      scope.apply$(
                        scope.strings["hasSuffix"],
                        "::",
                        () => scope.addr,
                      ),
                    hasInfix: (scope) =>
                      scope.apply$(
                        scope.strings["hasInfix"],
                        "::",
                        () => scope.addr,
                      ),
                  }).in$((scope) =>
                    scope.if$(scope.operators$.equal(scope.addr, "::")).then$(
                      () => scope.zeros
                    ).elseIf$(() =>
                      scope.let$({
                        emptyCount: (scope) =>
                          scope.operators$.subtract(
                            scope.apply$(scope.length, () => scope.pieces),
                            scope.piecesNoEmptyLen,
                          ),
                        emptyExpected: (scope) =>
                          scope.if$((scope.hasPrefix) || (scope.hasSuffix))
                            .then$(2n).elseIf$(() => scope.hasInfix).then$(1n)
                            .else$(0n),
                      }).in$((
                        scope,
                      ) => (((scope.operators$.notEqual(
                        scope.emptyCount,
                        scope.emptyExpected,
                      )) ||
                        ((scope.hasInfix) &&
                          (scope.operators$.greaterThanOrEqual(
                            scope.piecesNoEmptyLen,
                            scope.ipv6Pieces,
                          )))) ||
                        ((scope.operators$.negate(scope.hasInfix)) &&
                          (scope.operators$.notEqual(
                            scope.piecesNoEmptyLen,
                            scope.ipv6Pieces,
                          ))))
                      )
                    ).then$(() =>
                      scope.apply$(
                        scope.throw,
                        () =>
                          scope.str$(
                            () => [scope.addr, " is not a valid IPv6 address"]
                          ),
                      )
                    ).elseIf$(() => scope.hasPrefix).then$(() =>
                      scope.operators$.listConcat(
                        scope.zeros,
                        scope.piecesNoEmpty,
                      )
                    ).elseIf$(() => scope.hasSuffix).then$(() =>
                      scope.operators$.listConcat(
                        scope.piecesNoEmpty,
                        scope.zeros,
                      )
                    ).elseIf$(() => scope.hasInfix).then$(() =>
                      scope.apply$(
                        scope.concatMap,
                        () =>
                          scope.func$("piece", (scope) =>
                            scope.if$(scope.operators$.equal(scope.piece, ""))
                              .then$(() =>
                                scope.zeros
                              ).else$(() => [scope.piece])),
                        () =>
                          scope.pieces,
                      )
                    ).else$(() => scope.pieces)
                  )
                )),
            parseExpandedIpv6: (scope) =>
              scope.func$("addr", (scope) =>
                ((_cond) => {
                  if (!_cond) {
                    throw new Error(
                      "assertion failed: " +
                        'length addr == ipv6Pieces\n      || throw "parseExpandedIpv6: expected list of integers with ${ipv6Pieces} elements"',
                    );
                  }
                  return scope.let$({
                    u16FromHexStr: (scope) =>
                      scope.func$("hex", (scope) =>
                        scope.let$({
                          parsed: (scope) =>
                            scope.apply$(
                              scope.trivial["fromHexString"],
                              () => scope.hex,
                            ),
                        }).in$((scope) =>
                          scope.if$(
                            (scope.operators$.lessThanOrEqual(
                              0n,
                              scope.parsed,
                            )) &&
                            (scope.operators$.lessThanOrEqual(
                              scope.parsed,
                              scope.ipv6PieceMaxValue,
                            )),
                          ).then$(() => scope.parsed).else$(() =>
                            scope.apply$(
                              scope.throw,
                              () =>
                                scope.str$(
                                  () => [
                                    "0x",
                                    scope.hex,
                                    " is not a valid u16 integer",
                                  ]
                                ),
                            )
                          )
                        )),
                  }).in$((scope) =>
                    scope.apply$(
                      scope.map,
                      () =>
                        scope.func$("piece", (scope) =>
                          scope.apply$(scope.u16FromHexStr, () =>
                            scope.piece)),
                      () =>
                        scope.addr,
                    )
                  );
                })(
                  (scope.operators$.equal(
                    scope.apply$(scope.length, () => scope.addr),
                    scope.ipv6Pieces,
                  )) || (scope.apply$(scope.throw, () =>
                    scope.str$(
                      () => [
                        "parseExpandedIpv6: expected list of integers with ",
                        scope.ipv6Pieces,
                        " elements",
                      ]
                    ))),
                )),
          }).in$((scope) =>
            scope.let$({
              parseIpv6FromString: (scope) =>
                scope.func$(
                  "addr",
                  (scope) =>
                    scope.apply$(scope.parseExpandedIpv6, () =>
                      scope.apply$(scope.expandIpv6, () => scope.addr)),
                ),
            }).in$((scope) =>
              scope.attrSet$({
                _ipv6: () =>
                  scope.attrSet$({
                    toStringFromExpandedIp: () =>
                      scope.func$(
                        "pieces",
                        (scope) =>
                          scope.apply$(
                            scope.strings["concatMapStringsSep"],
                            ":",
                            () =>
                              scope.func$("piece", (scope) =>
                                scope.apply$(
                                  scope.strings["toLower"],
                                  () =>
                                    scope.apply$(
                                      scope.trivial["toHexString"],
                                      () => scope.piece,
                                    ),
                                )),
                            () => scope.pieces,
                          ),
                      ),
                    split: () =>
                      scope.func$("addr", (scope) =>
                        scope.let$({
                          splitted: (scope) =>
                            scope.apply$(
                              scope.strings["splitString"],
                              "/",
                              () => scope.addr,
                            ),
                          splittedLength: (scope) =>
                            scope.apply$(scope.length, () => scope.splitted),
                        }).in$((scope) =>
                          scope.if$(
                            scope.operators$.equal(scope.splittedLength, 1n),
                          ).then$(() =>
                            scope.attrSet$({
                              address: () =>
                                scope.apply$(scope.parseIpv6FromString, () =>
                                  scope.addr),
                              prefixLength: () =>
                                scope.ipv6Bits,
                            })
                          ).elseIf$(() =>
                            scope.operators$.equal(scope.splittedLength, 2n)
                          ).then$(() =>
                            scope.attrSet$({
                              address: () =>
                                scope.apply$(scope.parseIpv6FromString, () =>
                                  scope.apply$(scope.head, () =>
                                    scope.splitted)),
                              prefixLength: () =>
                                scope.let$({
                                  n: (scope) =>
                                    scope.apply$(scope.strings["toInt"], () =>
                                      scope.apply$(scope.last, () =>
                                        scope.splitted)),
                                }).in$((scope) =>
                                  scope.if$(
                                    (scope.operators$.lessThanOrEqual(
                                      1n,
                                      scope.n,
                                    )) &&
                                    (scope.operators$.lessThanOrEqual(
                                      scope.n,
                                      scope.ipv6Bits,
                                    )),
                                  ).then$(() =>
                                    scope.n
                                  ).else$(() =>
                                    scope.apply$(scope.throw, () =>
                                      scope.str$(
                                        () => [
                                          scope.addr,
                                          " IPv6 subnet should be in range [1;",
                                          scope.apply$(
                                            scope.toString,
                                            () => scope.ipv6Bits,
                                          ),
                                          "], got ",
                                          scope.apply$(
                                            scope.toString,
                                            () => scope.n,
                                          ),
                                        ]
                                      ))
                                  )
                                ),
                            })
                          ).else$(() =>
                            scope.apply$(scope.throw, () =>
                              scope.str$(
                                () => [
                                  scope.addr,
                                  " is not a valid IPv6 address in CIDR notation",
                                ]
                              ))
                          )
                        )),
                  }),
              })
            )
          )
        ),
    )
  ),
);
