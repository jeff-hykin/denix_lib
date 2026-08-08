import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./mock-splitRoot.nix", import.meta.url).pathname,
  ({ scope }) => (
    //
    //
    //
    //
    //
    //
    //
    //
    scope.func$("self", (scope) =>
      scope.func$("super", (scope) =>
        scope.attrSet$({
          path: () =>
            scope.operators$.merge(
              scope.super["path"],
              scope.attrSet$({
                splitRoot: () =>
                  scope.func$("path", (scope) =>
                    scope.let$({
                      parts: (scope) =>
                        scope.apply$(
                          scope.super["path"]["splitRoot"],
                          () => scope.path,
                        ),
                      components: (scope) =>
                        scope.apply$(
                          scope.self["path"]["subpath"]["components"],
                          () => scope.parts["subpath"],
                        ),
                      count: (scope) =>
                        scope.apply$(
                          scope.self["length"],
                          () => scope.components,
                        ),
                      rootIndex: (scope) =>
                        scope.operators$.subtract(
                          scope.count,
                          scope.apply$(
                            scope.self["lists"]["findFirstIndex"],
                            () =>
                              scope.func$("component", (scope) =>
                                scope.operators$.equal(
                                  scope.component,
                                  "mock-root",
                                )),
                            () =>
                              scope.apply$(
                                scope.self["length"],
                                () => scope.components,
                              ),
                            () =>
                              scope.apply$(
                                scope.self["reverseList"],
                                () => scope.components,
                              ),
                          ),
                        ),
                      root: (scope) =>
                        scope.apply$(
                          scope.self["path"]["append"],
                          () => scope.parts["root"],
                          () =>
                            scope.apply$(
                              scope.self["path"]["subpath"]["join"],
                              () =>
                                scope.apply$(scope.self["take"], () =>
                                  scope.rootIndex, () =>
                                  scope.components),
                            ),
                        ),
                      subpath: (scope) =>
                        scope.apply$(
                          scope.self["path"]["subpath"]["join"],
                          () =>
                            scope.apply$(scope.self["drop"], () =>
                              scope.rootIndex, () =>
                              scope.components),
                        ),
                    }).in$((scope) =>
                      scope.attrSet$({
                        root: () => scope.root,
                        subpath: () => scope.subpath,
                      })
                    )),
              }),
            ),
        })))
  ),
);
