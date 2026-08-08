import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./docs.nix", import.meta.url).pathname,
  ({ scope }) => (
    /*
  A basic documentation generating module.
  Declares and defines a `docs` option, suitable for making assertions about
  the extraction "phase" of documentation generation.
    */ scope.func$({
      lib: scope.nixArg$.NoDefault,
      options: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.let$({
        head: (scope) => scope.lib["head"],
        length: (scope) => scope.lib["length"],
        mkOption: (scope) => scope.lib["mkOption"],
        types: (scope) => scope.lib["types"],
        traceListSeq: (scope) =>
          scope.func$("l", (scope) =>
            scope.func$("v", (scope) =>
              scope.apply$(scope.lib["foldl'"], () =>
                scope.func$("a", (scope) =>
                  scope.func$("b", (scope) =>
                    scope.apply$(scope.lib["traceSeq"], () => scope.b, () =>
                      scope.a))), () =>
                scope.v, () =>
                scope.l))),
      }).in$((scope) =>
        scope.attrSet$({
          ...scope.deepSet$(["options", "docs"], () =>
            scope.apply$(scope.mkOption, () =>
              scope.attrSet$({
                type: () =>
                  scope.apply$(scope.types["lazyAttrsOf"], () =>
                    scope.types["raw"]),
                description:
                  "All options to be rendered, without any visibility filtering applied.\n",
              }))),
          ...scope.deepSet$(["config", "docs"], () =>
            scope.apply$(scope.lib["zipAttrsWith"], () =>
              scope.func$("name", (scope) =>
                scope.func$("values", (scope) =>
                  scope.if$(
                    scope.operators$.greaterThan(
                      scope.apply$(scope.length, () => scope.values),
                      1n,
                    ),
                  ).then$(() =>
                    scope.apply$(scope.traceListSeq, () =>
                      scope.values, () =>
                      scope.abort, () =>
                      scope.str$(
                        () => [
                          "Multiple options with the same name: ",
                          scope.name,
                        ]
                      ))
                  ).else$(() =>
                    ((_cond) => {
                      if (!_cond) {
                        throw new Error(
                          "assertion failed: " + "length values == 1",
                        );
                      }
                      return scope.apply$(scope.head, () =>
                        scope.values);
                    })(scope.operators$.equal(
                      scope.apply$(scope.length, () => scope.values),
                      1n,
                    ))
                  ))), () =>
              scope.apply$(scope.map, () =>
                scope.func$("opt", (scope) =>
                  scope.attrSet$({
                    ...scope.deepSet$([scope.opt["name"]], () =>
                      scope.opt),
                  })), () =>
                scope.apply$(scope.lib["optionAttrSetToDocList"], () =>
                  scope.options)))),
        })
      ))
  ),
);
