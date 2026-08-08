import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./d.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { a: scope.nixArg$.NoDefault, e: scope.nixArg$.NoDefault },
      (scope) =>
        ((_cond) => {
          if (!_cond) {
            throw new Error("assertion failed: " + 'a == "a"');
          }
          return ((_cond) => {
            if (!_cond) {
              throw new Error("assertion failed: " + 'e == "e"');
            }
            return "d";
          })(scope.operators$.equal(scope.e, "e"));
        })(scope.operators$.equal(scope.a, "a")),
    )
  ),
);
