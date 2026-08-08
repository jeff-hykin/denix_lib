import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./strings-with-deps.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({ lib: scope.nixArg$.NoDefault }, (scope) =>
      scope.let$({
        concatMapStringsSep: (scope) => scope.lib["concatMapStringsSep"],
        head: (scope) => scope.lib["head"],
        isAttrs: (scope) => scope.lib["isAttrs"],
        listToAttrs: (scope) => scope.lib["listToAttrs"],
        tail: (scope) => scope.lib["tail"],
      }).in$((scope) =>
        scope.recAttrSet$({
          textClosureList: (scope) =>
            scope.func$("predefined", (scope) =>
              scope.func$("arg", (scope) =>
                scope.let$({
                  f: (scope) =>
                    scope.func$("done", (scope) =>
                      scope.func$("todo", (scope) =>
                        scope.if$(scope.operators$.equal(scope.todo, [])).then$(
                          () =>
                            scope.attrSet$({
                              result: [],
                              done: () => scope.done,
                            })
                        ).else$(() =>
                          scope.let$({
                            entry: (scope) =>
                              scope.apply$(scope.head, () => scope.todo),
                          }).in$((scope) =>
                            scope.if$(
                              scope.apply$(scope.isAttrs, () => scope.entry),
                            ).then$(() =>
                              scope.let$({
                                x: (scope) =>
                                  scope.apply$(
                                    scope.f,
                                    () => scope.done,
                                    () => scope.entry["deps"],
                                  ),
                                y: (scope) =>
                                  scope.apply$(
                                    scope.f,
                                    () => scope.x["done"],
                                    () =>
                                      scope.apply$(
                                        scope.tail,
                                        () => scope.todo,
                                      ),
                                  ),
                              }).in$((scope) =>
                                scope.attrSet$({
                                  result: () =>
                                    scope.operators$.listConcat(
                                      scope.x["result"],
                                      scope.operators$.listConcat([
                                        scope.entry["text"],
                                      ], scope.y["result"]),
                                    ),
                                  done: () => scope.y["done"],
                                })
                              )
                            ).elseIf$(() =>
                              scope.operators$.hasAttr(scope.done, scope.entry)
                            ).then$(() =>
                              scope.apply$(
                                scope.f,
                                () => scope.done,
                                () =>
                                  scope.apply$(scope.tail, () => scope.todo),
                              )
                            ).else$(() =>
                              scope.apply$(
                                scope.f,
                                () => (scope.operators$.merge(
                                  scope.done,
                                  scope.apply$(
                                    scope.listToAttrs,
                                    () => [scope.attrSet$({
                                      name: () => scope.entry,
                                      value: 1n,
                                    })],
                                  ),
                                )),
                                () => (scope.operators$.listConcat([
                                  scope.predefined[scope.entry],
                                ], scope.apply$(scope.tail, () => scope.todo))),
                              )
                            )
                          )
                        ))),
                }).in$((scope) =>
                  scope.apply$(scope.f, {}, () => scope.arg)["result"]
                ))),
          textClosureMap: (scope) =>
            scope.func$(
              "f",
              (scope) =>
                scope.func$("predefined", (scope) =>
                  scope.func$("names", (scope) =>
                    scope.apply$(scope.concatMapStringsSep, "\n", () =>
                      scope.f, () =>
                      scope.apply$(scope.textClosureList, () =>
                        scope.predefined, () =>
                        scope.names)))),
            ),
          noDepEntry: (scope) =>
            scope.func$("text", (scope) =>
              scope.attrSet$({
                text: () => scope.text,
                deps: [],
              })),
          fullDepEntry: (scope) =>
            scope.func$("text", (scope) =>
              scope.func$("deps", (scope) =>
                scope.attrSet$({
                  text: () =>
                    scope.text,
                  deps: () => scope.deps,
                }))),
          packEntry: (scope) =>
            scope.func$("deps", (scope) =>
              scope.attrSet$({
                deps: () => scope.deps,
                text: "",
              })),
          stringAfter: (scope) =>
            scope.func$(
              "deps",
              (scope) =>
                scope.func$("text", (scope) =>
                  scope.attrSet$({
                    text: () => scope.text,
                    deps: () => scope.deps,
                  })),
            ),
        })
      ))
  ),
);
