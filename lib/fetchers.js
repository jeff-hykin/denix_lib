import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./fetchers.nix", import.meta.url).pathname,
  ({ scope }) => (
    //
    scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        commonH: (scope) =>
          scope.let$({
            defaultHashNames: ["hash"],
          }).in$((scope) =>
            scope.func$("hashTypes", (scope) =>
              scope.recAttrSet$({
                hashNames: (scope) =>
                  scope.operators$.listConcat(
                    scope.defaultHashNames,
                    scope.hashTypes,
                  ),
                hashSet: (scope) =>
                  scope.apply$(scope.genAttrs, () =>
                    scope.hashNames, () =>
                    scope.apply$(scope.const, {})),
              }))
          ),
        fakeH: (scope) =>
          scope.attrSet$({
            hash: () =>
              scope.lib["fakeHash"],
            sha256: () => scope.lib["fakeSha256"],
            sha512: () => scope.lib["fakeSha512"],
          }),
        defaultHashTypes: ["sha256"],
        concatMapStringsSep: (scope) => scope.lib["concatMapStringsSep"],
        head: (scope) => scope.lib["head"],
        length: (scope) => scope.lib["length"],
        attrsToList: (scope) => scope.lib["attrsets"]["attrsToList"],
        intersectAttrs: (scope) => scope.lib["attrsets"]["intersectAttrs"],
        genAttrs: (scope) => scope.lib["attrsets"]["genAttrs"],
        removeAttrs: (scope) => scope.lib["attrsets"]["removeAttrs"],
        optionalAttrs: (scope) => scope.lib["attrsets"]["optionalAttrs"],
        const: (scope) => scope.lib["trivial"]["const"],
        functionArgs: (scope) => scope.lib["trivial"]["functionArgs"],
        setFunctionArgs: (scope) => scope.lib["trivial"]["setFunctionArgs"],
      }).in$((scope) =>
        scope.recAttrSet$({
          proxyImpureEnvVars: [
            "http_proxy",
            "https_proxy",
            "ftp_proxy",
            "all_proxy",
            "no_proxy",
            "HTTP_PROXY",
            "HTTPS_PROXY",
            "FTP_PROXY",
            "ALL_PROXY",
            "NO_PROXY",
            "NIX_SSL_CERT_FILE",
          ],
          normalizeHash: (scope) =>
            scope.func$({
              hashTypes: (scope) => scope.defaultHashTypes,
              required: true,
            }, (scope) =>
              scope.let$({
                hashNames: (scope) =>
                  scope.apply$(
                    scope.commonH,
                    () => scope.hashTypes,
                  )["hashNames"],
                hashSet: (scope) =>
                  scope.apply$(scope.commonH, () => scope.hashTypes)["hashSet"],
              }).in$((scope) =>
                scope.func$("args", (scope) =>
                  scope.if$(scope.operators$.hasAttr(scope.args, "outputHash"))
                    .then$(() => scope.args).else$(() =>
                      scope.let$({
                        h: (scope) =>
                          scope.let$({
                            hashesAsNVPairs: (scope) =>
                              scope.apply$(
                                scope.attrsToList,
                                () =>
                                  scope.apply$(scope.intersectAttrs, () =>
                                    scope.hashSet, () =>
                                    scope.args),
                              ),
                          }).in$((scope) =>
                            scope.if$(
                              scope.operators$.equal(scope.hashesAsNVPairs, []),
                            ).then$(() =>
                              scope.if$(scope.required).then$(() =>
                                scope.apply$(
                                  scope.throw,
                                  "fetcher called without `hash`",
                                )
                              ).else$(null)
                            ).elseIf$(() =>
                              scope.operators$.notEqual(
                                scope.apply$(scope.length, () =>
                                  scope.hashesAsNVPairs),
                                1n,
                              )
                            ).then$(() =>
                              scope.apply$(scope.throw, () =>
                                scope.str$(
                                  () => [
                                    "fetcher called with mutually-incompatible arguments: ",
                                    scope.apply$(
                                      scope.concatMapStringsSep,
                                      ", ",
                                      () =>
                                        scope.func$("a", (scope) =>
                                          scope.a["name"]),
                                      () => scope.hashesAsNVPairs,
                                    ),
                                  ]
                                ))
                            ).else$(() =>
                              scope.apply$(
                                scope.head,
                                () => scope.hashesAsNVPairs,
                              )
                            )
                          ),
                      }).in$((scope) =>
                        scope.operators$.merge(
                          scope.apply$(scope.removeAttrs, () =>
                            scope.args, () =>
                            scope.hashNames),
                          scope.apply$(
                            scope.optionalAttrs,
                            () => (scope.operators$.notEqual(scope.h, null)),
                            () =>
                              scope.attrSet$({
                                outputHashAlgo: () =>
                                  scope.if$(
                                    scope.operators$.equal(
                                      scope.h["name"],
                                      "hash",
                                    ),
                                  ).then$(null).else$(() => scope.h["name"]),
                                outputHash: () =>
                                  scope.if$(
                                    scope.operators$.equal(
                                      scope.h["value"],
                                      "",
                                    ),
                                  ).then$(() =>
                                    scope.operators$.selectOrDefault(
                                      scope.fakeH,
                                      [scope.h["name"]],
                                      () =>
                                        scope.apply$(scope.throw, () =>
                                          scope.str$(
                                            () => [
                                              "no “fake hash” defined for ",
                                              scope.h["name"],
                                            ]
                                          )),
                                    )
                                  ).else$(() =>
                                    scope.h["value"]
                                  ),
                              }),
                          ),
                        )
                      )
                    ))
              )),
          withNormalizedHash: (scope) =>
            scope.let$({
              removedAttributes: ["outputHash", "outputHashAlgo"],
            }).in$((scope) =>
              scope.func$(
                { hashTypes: (scope) => scope.defaultHashTypes },
                (scope) =>
                  scope.let$({
                    hashSet: (scope) =>
                      scope.apply$(scope.commonH, () =>
                        scope.hashTypes)["hashSet"],
                  }).in$((scope) =>
                    scope.func$("fetcher", (scope) =>
                      scope.let$({
                        fArgs: (scope) =>
                          scope.apply$(scope.functionArgs, () =>
                            scope.fetcher),
                        normalize: (scope) =>
                          scope.apply$(
                            scope.normalizeHash,
                            () =>
                              scope.attrSet$({
                                hashTypes: () => scope.hashTypes,
                                required: () =>
                                  scope.operators$.negate(
                                    scope.fArgs["outputHash"],
                                  ),
                              }),
                          ),
                      }).in$((scope) =>
                        ((_cond) => {
                          if (!_cond) {
                            throw new Error(
                              "assertion failed: " +
                                "fArgs ? outputHash && fArgs ? outputHashAlgo",
                            );
                          }
                          return ((_cond) => {
                            if (!_cond) {
                              throw new Error(
                                "assertion failed: " +
                                  "intersectAttrs fArgs hashSet == { }",
                              );
                            }
                            return scope.apply$(
                              scope.setFunctionArgs,
                              () =>
                                scope.func$("args", (scope) =>
                                  scope.apply$(scope.fetcher, () =>
                                    scope.apply$(scope.normalize, () =>
                                      scope.args))),
                              () => (scope.operators$.merge(
                                scope.apply$(scope.removeAttrs, () =>
                                  scope.fArgs, () =>
                                  scope.removedAttributes),
                                scope.attrSet$({
                                  hash: () => scope.fArgs["outputHash"],
                                }),
                              )),
                            );
                          })(
                            scope.operators$.equal(
                              scope.apply$(scope.intersectAttrs, () =>
                                scope.fArgs, () =>
                                scope.hashSet),
                              {},
                            ),
                          );
                        })(
                          (scope.operators$.hasAttr(
                            scope.fArgs,
                            "outputHash",
                          )) &&
                          (scope.operators$.hasAttr(
                            scope.fArgs,
                            "outputHashAlgo",
                          )),
                        )
                      ))
                  ),
              )
            ),
        })
      ))
  ),
);
