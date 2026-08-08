import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";
import _nix_default_6e679886 from "../../../default.js";

export default nixFile(
  new URL("./test.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.let$({
      lib: (scope) => _nix_default_6e679886(scope.runtime$),
      evaluation: (scope) =>
        scope.apply$(scope.lib["evalModules"], () =>
          scope.attrSet$({
            modules:
              () => [
                {},
                scope.func$("args", (scope) => ({})),
                new scope.Path$(
                  [new URL("./a.nix", import.meta.url).pathname],
                  [],
                ),
                new scope.Path$(
                  [new URL("./b.nix", import.meta.url).pathname],
                  [],
                ),
              ],
          })),
      actual: (scope) => scope.evaluation["graph"],
      expected: (
        scope,
      ) => [
        {
          key: ":anon-1",
          file: "<unknown-file>",
          imports: [],
          disabled: false,
        },
        {
          key: ":anon-2",
          file: "<unknown-file>",
          imports: [],
          disabled: false,
        },
        scope.attrSet$({
          key: () =>
            scope.apply$(
              scope.toString,
              new scope.Path$(
                [new URL("./a.nix", import.meta.url).pathname],
                [],
              ),
            ),
          file: () =>
            scope.apply$(
              scope.toString,
              new scope.Path$(
                [new URL("./a.nix", import.meta.url).pathname],
                [],
              ),
            ),
          imports: () => [scope.attrSet$({
            key: () =>
              scope.str$(
                () => [
                  scope.apply$(
                    scope.toString,
                    new scope.Path$([
                      new URL("./a.nix", import.meta.url).pathname,
                    ], []),
                  ),
                  ":anon-1",
                ]
              ),
            file: () =>
              scope.apply$(
                scope.toString,
                new scope.Path$(
                  [new URL("./a.nix", import.meta.url).pathname],
                  [],
                ),
              ),
            imports: () => [scope.attrSet$({
              key: () =>
                scope.str$(
                  () => [
                    scope.apply$(
                      scope.toString,
                      new scope.Path$([
                        new URL("./a.nix", import.meta.url).pathname,
                      ], []),
                    ),
                    ":anon-1:anon-1",
                  ]
                ),
              file: () =>
                scope.apply$(
                  scope.toString,
                  new scope.Path$([
                    new URL("./a.nix", import.meta.url).pathname,
                  ], []),
                ),
              imports: [],
              disabled: false,
            })],
            disabled: false,
          })],
          disabled: false,
        }),
        scope.attrSet$({
          key: () =>
            scope.apply$(
              scope.toString,
              new scope.Path$(
                [new URL("./b.nix", import.meta.url).pathname],
                [],
              ),
            ),
          file: () =>
            scope.apply$(
              scope.toString,
              new scope.Path$(
                [new URL("./b.nix", import.meta.url).pathname],
                [],
              ),
            ),
          imports: () => [scope.attrSet$({
            key: "explicit-key",
            file: () =>
              scope.apply$(
                scope.toString,
                new scope.Path$(
                  [new URL("./b.nix", import.meta.url).pathname],
                  [],
                ),
              ),
            imports: [],
            disabled: false,
          })],
          disabled: true,
        }),
      ],
    }).in$((scope) =>
      ((_cond) => {
        if (!_cond) {
          throw new Error("assertion failed: " + "actual == expected");
        }
        return null;
      })(scope.operators$.equal(scope.actual, scope.expected))
    )
  ),
);
