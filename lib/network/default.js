import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";
import _nix_internal_010de22d from "./internal.js";

export default nixFile(
  new URL("./default.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        _ipv6: (scope) =>
          scope.apply$(_nix_internal_010de22d(scope.runtime$), () =>
            scope.attrSet$({
              lib: () => scope.lib,
            }))["_ipv6"],
        match: (scope) =>
          scope.lib["strings"]["match"],
        concatStringsSep: (scope) => scope.lib["strings"]["concatStringsSep"],
        toLower: (scope) => scope.lib["strings"]["toLower"],
        pipe: (scope) => scope.lib["trivial"]["pipe"],
        bitXor: (scope) => scope.lib["trivial"]["bitXor"],
        fromHexString: (scope) => scope.lib["trivial"]["fromHexString"],
        toHexString: (scope) => scope.lib["trivial"]["toHexString"],
        elemAt: (scope) => scope.lib["lists"]["elemAt"],
      }).in$((scope) =>
        scope.attrSet$({
          ipv6: () =>
            scope.attrSet$({
              fromString: () =>
                scope.func$("addr", (scope) =>
                  scope.let$({
                    splittedAddr: (scope) =>
                      scope.apply$(scope._ipv6["split"], () => scope.addr),
                    addrInternal: (scope) => scope.splittedAddr["address"],
                    prefixLength: (scope) => scope.splittedAddr["prefixLength"],
                    address: (scope) =>
                      scope.apply$(scope._ipv6["toStringFromExpandedIp"], () =>
                        scope.addrInternal),
                  }).in$((scope) =>
                    scope.attrSet$({
                      address: () =>
                        scope.address,
                      prefixLength: () =>
                        scope.prefixLength,
                    })
                  )),
              mkEUI64Suffix: () =>
                scope.func$("mac", (scope) =>
                  scope.apply$(
                    scope.pipe,
                    () => scope.mac,
                    () => [
                      scope.apply$(
                        scope.match,
                        "^([0-9A-Fa-f]{2})[-:.]?([0-9A-Fa-f]{2})[-:.]?([0-9A-Fa-f]{2})[-:.]?([0-9A-Fa-f]{2})[-:.]?([0-9A-Fa-f]{2})[-:.]?([0-9A-Fa-f]{2})$",
                      ),
                      scope.func$("matches", (scope) =>
                        scope.if$(scope.operators$.equal(scope.matches, null))
                          .then$(() =>
                            scope.apply$(scope.throw, () =>
                              scope.str$(
                                () => [
                                  '"',
                                  scope.mac,
                                  '" is not a valid MAC address (expected 6 octets of hex digits)',
                                ]
                              ))
                          ).else$(() => scope.matches)),
                      scope.func$(
                        "octets",
                        (scope) => [
                          scope.apply$(scope.toHexString, () =>
                            scope.apply$(scope.bitXor, 512n, () =>
                              scope.apply$(
                                scope.fromHexString,
                                () => (scope.operators$.add(
                                  scope.apply$(scope.elemAt, () =>
                                    scope.octets, 0n),
                                  scope.apply$(scope.elemAt, () =>
                                    scope.octets, 1n),
                                )),
                              ))),
                          scope.str$(() => [
                            scope.apply$(scope.elemAt, () => scope.octets, 2n),
                            "ff",
                          ]),
                          scope.str$(
                            () => [
                              "fe",
                              scope.apply$(
                                scope.elemAt,
                                () => scope.octets,
                                3n,
                              ),
                            ]
                          ),
                          scope.operators$.add(
                            scope.apply$(scope.elemAt, () => scope.octets, 4n),
                            scope.apply$(scope.elemAt, () => scope.octets, 5n),
                          ),
                        ],
                      ),
                      scope.apply$(scope.concatStringsSep, ":"),
                      scope.toLower,
                    ],
                  )),
            }),
        })
      ))
  ),
);
