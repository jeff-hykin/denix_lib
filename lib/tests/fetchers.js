import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";
import _nix_default_6e679886 from "../default.js";

export default nixFile(
  new URL("./fetchers.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.let$({
      lib: (scope) => _nix_default_6e679886(scope.runtime$),
      fakeHash: (scope) => scope.lib["fakeHash"],
      fakeSha256: (scope) => scope.lib["fakeSha256"],
      fakeSha512: (scope) => scope.lib["fakeSha512"],
      flip: (scope) => scope.lib["flip"],
      functionArgs: (scope) => scope.lib["functionArgs"],
      runTests: (scope) => scope.lib["runTests"],
      normalizeHash: (scope) => scope.lib["fetchers"]["normalizeHash"],
      withNormalizedHash: (scope) =>
        scope.lib["fetchers"]["withNormalizedHash"],
      testingThrow: (scope) =>
        scope.func$("expr", (scope) =>
          scope.attrSet$({
            expr: () =>
              scope.with$(() => scope.builtins, (scope) =>
                scope.apply$(
                  scope.tryEval,
                  () =>
                    scope.apply$(scope.seq, () => scope.expr, "didn't throw"),
                )),
            expected: { success: false, value: false },
          })),
      sri256: "sha256-d6xi4mKdjkX2JFicDIv5niSzpyI0m/Hnm8GGAIU04kY=",
      sri512:
        "sha512-AXFyVo7jiZ5we10fxZ5E9qfPjSfqkizY2apCzORKFVYZaNhCIVbooY+J4cYST00ztLf0EjivIBPPdtIYFUMfzQ==",
      unionOfDisjoints: (scope) =>
        scope.apply$(
          scope.lib["foldl"],
          () => scope.lib["attrsets"]["unionOfDisjoint"],
          {},
        ),
      genTests: (scope) =>
        scope.func$("n", (scope) =>
          scope.func$("f", (scope) =>
            scope.attrSet$({
              ...scope.deepSet$([
                scope.str$(() => ["test", scope.n, "AlreadyNormalized"]),
              ], () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.f, {}, {
                      outputHash: "",
                      outputHashAlgo: "md42",
                    }),
                  expected: { outputHash: "", outputHashAlgo: "md42" },
                })),
              ...scope.deepSet$([
                scope.str$(() => ["test", scope.n, "EmptySha256"]),
              ], () =>
                scope.attrSet$({
                  expr: () => scope.apply$(scope.f, {}, { sha256: "" }),
                  expected: () =>
                    scope.attrSet$({
                      outputHash: () => scope.fakeSha256,
                      outputHashAlgo: "sha256",
                    }),
                })),
              ...scope.deepSet$([
                scope.str$(() => ["test", scope.n, "EmptySha512"]),
              ], () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.f, { hashTypes: ["sha512"] }, {
                      sha512: "",
                    }),
                  expected: () =>
                    scope.attrSet$({
                      outputHash: () => scope.fakeSha512,
                      outputHashAlgo: "sha512",
                    }),
                })),
              ...scope.deepSet$([
                scope.str$(() => ["test", scope.n, "EmptyHash"]),
              ], () =>
                scope.attrSet$({
                  expr: () => scope.apply$(scope.f, {}, { hash: "" }),
                  expected: () =>
                    scope.attrSet$({
                      outputHash: () => scope.fakeHash,
                      outputHashAlgo: null,
                    }),
                })),
              ...scope.deepSet$(
                [scope.str$(() => ["test", scope.n, "Sri256"])],
                () =>
                  scope.attrSet$({
                    expr: () =>
                      scope.apply$(scope.f, {}, () =>
                        scope.attrSet$({
                          hash: () => scope.sri256,
                        })),
                    expected: () =>
                      scope.attrSet$({
                        outputHash: () => scope.sri256,
                        outputHashAlgo: null,
                      }),
                  }),
              ),
              ...scope.deepSet$(
                [scope.str$(() => ["test", scope.n, "Sri512"])],
                () =>
                  scope.attrSet$({
                    expr: () =>
                      scope.apply$(scope.f, {}, () =>
                        scope.attrSet$({
                          hash: () => scope.sri512,
                        })),
                    expected: () =>
                      scope.attrSet$({
                        outputHash: () => scope.sri512,
                        outputHashAlgo: null,
                      }),
                  }),
              ),
              ...scope.deepSet$([
                scope.str$(() => ["test", scope.n, "PreservesAttrs"]),
              ], () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.f, {}, {
                      hash: "aaaa",
                      destination: "Earth",
                    }),
                  expected: {
                    outputHash: "aaaa",
                    outputHashAlgo: null,
                    destination: "Earth",
                  },
                })),
              ...scope.deepSet$(
                [scope.str$(() => ["test", scope.n, "RejectsSha1ByDefault"])],
                () =>
                  scope.apply$(scope.testingThrow, () =>
                    scope.apply$(scope.f, {}, { sha1: "" })),
              ),
              ...scope.deepSet$(
                [scope.str$(() => ["test", scope.n, "RejectsSha512ByDefault"])],
                () =>
                  scope.apply$(scope.testingThrow, () =>
                    scope.apply$(scope.f, {}, { sha512: "" })),
              ),
              ...scope.deepSet$(
                [scope.str$(() => ["test", scope.n, "ThrowsOnMissing"])],
                () =>
                  scope.apply$(scope.testingThrow, () =>
                    scope.apply$(scope.f, {}, { gibi: false })),
              ),
            }))),
    }).in$((scope) =>
      scope.apply$(scope.runTests, () =>
        scope.apply$(
          scope.unionOfDisjoints,
          () => [
            scope.apply$(
              scope.genTests,
              "NormalizeHash",
              () => scope.normalizeHash,
            ),
            scope.apply$(scope.genTests, "WithNormalized", () =>
              scope.apply$(scope.flip, () => scope.withNormalizedHash, () =>
                scope.func$({
                  outputHash: scope.nixArg$.NoDefault,
                  outputHashAlgo: scope.nixArg$.NoDefault,
                  "...": scope.nixArg$.Ellipsis,
                  args: scope.nixArg$.AllArgs,
                }, (scope) => scope.args))),
            scope.attrSet$({
              testNormalizeNotRequiredEquivalent: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.normalizeHash, { required: false }, {
                      hash: "",
                      prof: "shadoko",
                    }),
                  expected: () =>
                    scope.apply$(scope.normalizeHash, {}, {
                      hash: "",
                      prof: "shadoko",
                    }),
                }),
              testNormalizeNotRequiredPassthru: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(
                      scope.normalizeHash,
                      { required: false },
                      () => ({ "ga bu": "zo meu" }),
                    ),
                  ...scope.deepSet$(["expected", "ga bu"], "zo meu"),
                }),
              testOptionalArg: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.withNormalizedHash, {}, () =>
                      scope.func$({
                        outputHash: "",
                        outputHashAlgo: null,
                        "...": scope.nixArg$.Ellipsis,
                        args: scope.nixArg$.AllArgs,
                      }, (scope) => scope.args), { author: "Jacques Rouxel" }),
                  ...scope.deepSet$(["expected", "author"], "Jacques Rouxel"),
                }),
              testOptionalArgMetadata: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.functionArgs, () =>
                      scope.apply$(scope.withNormalizedHash, {}, () =>
                        scope.func$(
                          { outputHash: "", outputHashAlgo: null },
                          (scope) => ({}),
                        ))),
                  ...scope.deepSet$(["expected", "hash"], true),
                }),
              testPreservesArgsMetadata: () =>
                scope.attrSet$({
                  expr: () =>
                    scope.apply$(scope.functionArgs, () =>
                      scope.apply$(scope.withNormalizedHash, {}, () =>
                        scope.func$({
                          outputHash: scope.nixArg$.NoDefault,
                          outputHashAlgo: scope.nixArg$.NoDefault,
                          pumping: true,
                        }, (scope) => ({})))),
                  expected: { hash: false, pumping: true },
                }),
              testRejectsMissingHashArg: () =>
                scope.apply$(scope.testingThrow, () =>
                  scope.apply$(scope.withNormalizedHash, {}, () =>
                    scope.func$(
                      { outputHashAlgo: scope.nixArg$.NoDefault },
                      (scope) => ({}),
                    ))),
              testRejectsMissingAlgoArg: () =>
                scope.apply$(scope.testingThrow, () =>
                  scope.apply$(scope.withNormalizedHash, {}, () =>
                    scope.func$(
                      { outputHash: scope.nixArg$.NoDefault },
                      (scope) => ({}),
                    ))),
            }),
          ],
        ))
    )
  ),
);
