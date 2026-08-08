import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";

export default nixFile(
  new URL("./types-attrTag.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      lib: scope.nixArg$.NoDefault,
      config: scope.nixArg$.NoDefault,
      options: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.let$({
        mkOption: (scope) => scope.lib["mkOption"],
        types: (scope) => scope.lib["types"],
        mergedSubOption: (scope) =>
          scope.apply$(
            scope.options["merged"]["type"]["getSubOptions"],
            () => scope.options["merged"]["loc"],
          )["extensible"],
      }).in$((scope) =>
        scope.attrSet$({
          options: () =>
            scope.attrSet$({
              intStrings: () =>
                scope.apply$(scope.mkOption, () =>
                  scope.attrSet$({
                    type: () =>
                      scope.apply$(scope.types["attrsOf"], () =>
                        scope.apply$(scope.types["attrTag"], () =>
                          scope.attrSet$({
                            left: () =>
                              scope.apply$(scope.mkOption, () =>
                                scope.attrSet$({
                                  type: () => scope.types["int"],
                                })),
                            right: () =>
                              scope.apply$(scope.mkOption, () =>
                                scope.attrSet$({
                                  type: () => scope.types["str"],
                                })),
                          }))),
                  })),
              nested: () =>
                scope.apply$(scope.mkOption, () =>
                  scope.attrSet$({
                    type: () =>
                      scope.apply$(scope.types["attrTag"], () =>
                        scope.attrSet$({
                          left: () =>
                            scope.apply$(scope.mkOption, () =>
                              scope.attrSet$({
                                type: () => scope.types["int"],
                              })),
                          right: () =>
                            scope.apply$(scope.mkOption, () =>
                              scope.attrSet$({
                                type: () =>
                                  scope.apply$(scope.types["attrTag"], () =>
                                    scope.attrSet$({
                                      left: () =>
                                        scope.apply$(scope.mkOption, () =>
                                          scope.attrSet$({
                                            type: () => scope.types["int"],
                                          })),
                                      right: () =>
                                        scope.apply$(scope.mkOption, () =>
                                          scope.attrSet$({
                                            type: () => scope.types["str"],
                                          })),
                                    })),
                              })),
                        })),
                  })),
              merged: () =>
                scope.apply$(scope.mkOption, () =>
                  scope.attrSet$({
                    type: () =>
                      scope.apply$(scope.types["attrsOf"], () =>
                        scope.apply$(scope.types["attrTag"], () =>
                          scope.attrSet$({
                            yay: () =>
                              scope.apply$(scope.mkOption, () =>
                                scope.attrSet$({
                                  type: () => scope.types["int"],
                                })),
                            extensible: () =>
                              scope.apply$(scope.mkOption, () =>
                                scope.attrSet$({
                                  type: () =>
                                    scope.apply$(scope.types["enum"], ["foo"]),
                                })),
                          }))),
                  })),
              submodules: () =>
                scope.apply$(scope.mkOption, () =>
                  scope.attrSet$({
                    type: () =>
                      scope.apply$(scope.types["attrsOf"], () =>
                        scope.apply$(scope.types["attrTag"], () =>
                          scope.attrSet$({
                            foo: () =>
                              scope.apply$(scope.mkOption, () =>
                                scope.attrSet$({
                                  type: () =>
                                    scope.apply$(scope.types["submodule"], () =>
                                      scope.attrSet$({
                                        options: () =>
                                          scope.attrSet$({
                                            bar: () =>
                                              scope.apply$(scope.mkOption, () =>
                                                scope.attrSet$({
                                                  type: () =>
                                                    scope.types["int"],
                                                })),
                                          }),
                                      })),
                                })),
                            qux: () =>
                              scope.apply$(scope.mkOption, () =>
                                scope.attrSet$({
                                  type: () => scope.types["str"],
                                  description:
                                    "A qux for when you don't want a foo",
                                })),
                          }))),
                  })),
              okChecks: () => scope.apply$(scope.mkOption, {}),
            }),
          imports:
            () => [
              new scope.Path$(
                [new URL("./docs.nix", import.meta.url).pathname],
                [],
              ),
              scope.attrSet$({
                ...scope.deepSet$(["options", "merged"], () =>
                  scope.apply$(scope.mkOption, () =>
                    scope.attrSet$({
                      type: () =>
                        scope.apply$(scope.types["attrsOf"], () =>
                          scope.apply$(scope.types["attrTag"], () =>
                            scope.attrSet$({
                              nay: () =>
                                scope.apply$(scope.mkOption, () =>
                                  scope.attrSet$({
                                    type: () => scope.types["bool"],
                                  })),
                              extensible: () =>
                                scope.apply$(scope.mkOption, () =>
                                  scope.attrSet$({
                                    type: () =>
                                      scope.apply$(scope.types["enum"], [
                                        "bar",
                                      ]),
                                  })),
                            }))),
                    }))),
              }),
            ],
          config: () =>
            scope.attrSet$({
              ...scope.deepSet$(["intStrings", "syntaxError"], 1n),
              ...scope.deepSet$(["intStrings", "syntaxError2"], {}),
              ...scope.deepSet$(["intStrings", "syntaxError3"], {
                a: true,
                b: true,
              }),
              ...scope.deepSet$(["intStrings", "syntaxError4"], () =>
                scope.apply$(scope.lib["mkMerge"], [{ a: true }, { b: true }])),
              ...scope.deepSet$(["intStrings", "mergeError"], () =>
                scope.apply$(scope.lib["mkMerge"], () => [
                  scope.attrSet$({
                    int: () => scope.apply$(scope.throw, "do not eval"),
                  }),
                  scope.attrSet$({
                    string: () => scope.apply$(scope.throw, "do not eval"),
                  }),
                ])),
              ...scope.deepSet$(["intStrings", "badTagError", "rite"], () =>
                scope.apply$(scope.throw, "do not eval")),
              ...scope.deepSet$(
                ["intStrings", "badTagTypeError", "left"],
                "bad",
              ),
              ...scope.deepSet$(["intStrings", "numberOne", "left"], 1n),
              ...scope.deepSet$(
                ["intStrings", "hello", "right"],
                "hello world",
              ),
              ...scope.deepSet$(["nested", "right", "left"], "not a number"),
              ...scope.deepSet$(["merged", "negative", "nay"], false),
              ...scope.deepSet$(["merged", "positive", "yay"], 100n),
              ...scope.deepSet$(["merged", "extensi-foo", "extensible"], "foo"),
              ...scope.deepSet$(["merged", "extensi-bar", "extensible"], "bar"),
              okChecks: () =>
                scope.apply$(
                  scope.builtins["addErrorContext"],
                  "while evaluating the assertions",
                  () =>
                    ((_cond) => {
                      if (!_cond) {
                        throw new Error(
                          "assertion failed: " +
                            'config.intStrings.hello == { right = "hello world"',
                        );
                      }
                      return ((_cond) => {
                        if (!_cond) {
                          throw new Error(
                            "assertion failed: " +
                              "config.intStrings.numberOne == { left = 1",
                          );
                        }
                        return ((_cond) => {
                          if (!_cond) {
                            throw new Error(
                              "assertion failed: " +
                                "config.merged.negative == { nay = false",
                            );
                          }
                          return ((_cond) => {
                            if (!_cond) {
                              throw new Error(
                                "assertion failed: " +
                                  "config.merged.positive == { yay = 100",
                              );
                            }
                            return ((_cond) => {
                              if (!_cond) {
                                throw new Error(
                                  "assertion failed: " +
                                    'config.merged.extensi-foo == { extensible = "foo"',
                                );
                              }
                              return ((_cond) => {
                                if (!_cond) {
                                  throw new Error(
                                    "assertion failed: " +
                                      'config.merged.extensi-bar == { extensible = "bar"',
                                  );
                                }
                                return ((_cond) => {
                                  if (!_cond) {
                                    throw new Error(
                                      "assertion failed: " +
                                        'config.docs."submodules.<name>.foo.bar".declarations == [ __curPos.file ]',
                                    );
                                  }
                                  return ((_cond) => {
                                    if (!_cond) {
                                      throw new Error(
                                        "assertion failed: " +
                                          'config.docs."submodules.<name>.foo.bar".type == "signed integer"',
                                      );
                                    }
                                    return ((_cond) => {
                                      if (!_cond) {
                                        throw new Error(
                                          "assertion failed: " +
                                            "lib.length\n          (options.submodules.type.nestedTypes.elemType.nestedTypes.foo.type.getSubOptions [ ])\n          .bar.declarationPositions == 1",
                                        );
                                      }
                                      return ((_cond) => {
                                        if (!_cond) {
                                          throw new Error(
                                            "assertion failed: " +
                                              "(lib.head\n          (options.submodules.type.nestedTypes.elemType.nestedTypes.foo.type.getSubOptions [ ])\n          .bar.declarationPositions\n        ).file == __curPos.file",
                                          );
                                        }
                                        return ((_cond) => {
                                          if (!_cond) {
                                            throw new Error(
                                              "assertion failed: " +
                                                'config.docs."submodules.<name>.qux".type == "string"',
                                            );
                                          }
                                          return ((_cond) => {
                                            if (!_cond) {
                                              throw new Error(
                                                "assertion failed: " +
                                                  'config.docs."submodules.<name>.qux".declarations == [ __curPos.file ]',
                                              );
                                            }
                                            return ((_cond) => {
                                              if (!_cond) {
                                                throw new Error(
                                                  "assertion failed: " +
                                                    'config.docs."submodules.<name>.qux".loc == [\n          "submodules"\n          "<name>"\n          "qux"\n        ]',
                                                );
                                              }
                                              return ((_cond) => {
                                                if (!_cond) {
                                                  throw new Error(
                                                    "assertion failed: " +
                                                      'config.docs."submodules.<name>.qux".name == "submodules.<name>.qux"',
                                                  );
                                                }
                                                return ((_cond) => {
                                                  if (!_cond) {
                                                    throw new Error(
                                                      "assertion failed: " +
                                                        'config.docs."submodules.<name>.qux".description == "A qux for when you don\'t want a foo"',
                                                    );
                                                  }
                                                  return ((_cond) => {
                                                    if (!_cond) {
                                                      throw new Error(
                                                        "assertion failed: " +
                                                          'config.docs."submodules.<name>.qux".readOnly == false',
                                                      );
                                                    }
                                                    return ((_cond) => {
                                                      if (!_cond) {
                                                        throw new Error(
                                                          "assertion failed: " +
                                                            'config.docs."submodules.<name>.qux".visible == true',
                                                        );
                                                      }
                                                      return ((_cond) => {
                                                        if (!_cond) {
                                                          throw new Error(
                                                            "assertion failed: " +
                                                              "lib.length options.submodules.type.nestedTypes.elemType.nestedTypes.qux.declarationPositions == 1",
                                                          );
                                                        }
                                                        return ((_cond) => {
                                                          if (!_cond) {
                                                            throw new Error(
                                                              "assertion failed: " +
                                                                "(lib.head options.submodules.type.nestedTypes.elemType.nestedTypes.qux.declarationPositions).file\n        == __curPos.file",
                                                            );
                                                          }
                                                          return ((_cond) => {
                                                            if (!_cond) {
                                                              throw new Error(
                                                                "assertion failed: " +
                                                                  "options.submodules.declarations == [ __curPos.file ]",
                                                              );
                                                            }
                                                            return ((_cond) => {
                                                              if (!_cond) {
                                                                throw new Error(
                                                                  "assertion failed: " +
                                                                    "lib.length options.submodules.declarationPositions == 1",
                                                                );
                                                              }
                                                              return ((
                                                                _cond,
                                                              ) => {
                                                                if (!_cond) {
                                                                  throw new Error(
                                                                    "assertion failed: " +
                                                                      "(lib.head options.submodules.declarationPositions).file == __curPos.file",
                                                                  );
                                                                }
                                                                return ((
                                                                  _cond,
                                                                ) => {
                                                                  if (!_cond) {
                                                                    throw new Error(
                                                                      "assertion failed: " +
                                                                        "options.merged.declarations == [\n          __curPos.file\n          __curPos.file\n        ]",
                                                                    );
                                                                  }
                                                                  return ((
                                                                    _cond,
                                                                  ) => {
                                                                    if (
                                                                      !_cond
                                                                    ) {
                                                                      throw new Error(
                                                                        "assertion failed: " +
                                                                          "lib.length options.merged.declarationPositions == 2",
                                                                      );
                                                                    }
                                                                    return ((
                                                                      _cond,
                                                                    ) => {
                                                                      if (
                                                                        !_cond
                                                                      ) {
                                                                        throw new Error(
                                                                          "assertion failed: " +
                                                                            "(lib.elemAt options.merged.declarationPositions 0).file == __curPos.file",
                                                                        );
                                                                      }
                                                                      return ((
                                                                        _cond,
                                                                      ) => {
                                                                        if (
                                                                          !_cond
                                                                        ) {
                                                                          throw new Error(
                                                                            "assertion failed: " +
                                                                              "(lib.elemAt options.merged.declarationPositions 1).file == __curPos.file",
                                                                          );
                                                                        }
                                                                        return ((
                                                                          _cond,
                                                                        ) => {
                                                                          if (
                                                                            !_cond
                                                                          ) {
                                                                            throw new Error(
                                                                              "assertion failed: " +
                                                                                "(lib.elemAt options.merged.declarationPositions 0).line\n        != (lib.elemAt options.merged.declarationPositions 1).line",
                                                                            );
                                                                          }
                                                                          return ((
                                                                            _cond,
                                                                          ) => {
                                                                            if (
                                                                              !_cond
                                                                            ) {
                                                                              throw new Error(
                                                                                "assertion failed: " +
                                                                                  "mergedSubOption.declarations == [\n          __curPos.file\n          __curPos.file\n        ]",
                                                                              );
                                                                            }
                                                                            return ((
                                                                              _cond,
                                                                            ) => {
                                                                              if (
                                                                                !_cond
                                                                              ) {
                                                                                throw new Error(
                                                                                  "assertion failed: " +
                                                                                    "lib.length mergedSubOption.declarationPositions == 2",
                                                                                );
                                                                              }
                                                                              return ((
                                                                                _cond,
                                                                              ) => {
                                                                                if (
                                                                                  !_cond
                                                                                ) {
                                                                                  throw new Error(
                                                                                    "assertion failed: " +
                                                                                      "(lib.elemAt mergedSubOption.declarationPositions 0).file == __curPos.file",
                                                                                  );
                                                                                }
                                                                                return ((
                                                                                  _cond,
                                                                                ) => {
                                                                                  if (
                                                                                    !_cond
                                                                                  ) {
                                                                                    throw new Error(
                                                                                      "assertion failed: " +
                                                                                        "(lib.elemAt mergedSubOption.declarationPositions 1).file == __curPos.file",
                                                                                    );
                                                                                  }
                                                                                  return ((
                                                                                    _cond,
                                                                                  ) => {
                                                                                    if (
                                                                                      !_cond
                                                                                    ) {
                                                                                      throw new Error(
                                                                                        "assertion failed: " +
                                                                                          "(lib.elemAt mergedSubOption.declarationPositions 0).line\n        != (lib.elemAt mergedSubOption.declarationPositions 1).line",
                                                                                      );
                                                                                    }
                                                                                    return ((
                                                                                      _cond,
                                                                                    ) => {
                                                                                      if (
                                                                                        !_cond
                                                                                      ) {
                                                                                        throw new Error(
                                                                                          "assertion failed: " +
                                                                                            'lib.length config.docs."merged.<name>.extensible".declarations == 2',
                                                                                        );
                                                                                      }
                                                                                      return true;
                                                                                    })(
                                                                                      scope
                                                                                        .operators$
                                                                                        .equal(
                                                                                          scope
                                                                                            .apply$(
                                                                                              scope
                                                                                                .lib[
                                                                                                  "length"
                                                                                                ],
                                                                                              () =>
                                                                                                scope
                                                                                                  .config[
                                                                                                    "docs"
                                                                                                  ]["merged.<name>.extensible"][
                                                                                                    "declarations"
                                                                                                  ],
                                                                                            ),
                                                                                          2n,
                                                                                        ),
                                                                                    );
                                                                                  })(
                                                                                    scope
                                                                                      .operators$
                                                                                      .notEqual(
                                                                                        scope
                                                                                          .apply$(
                                                                                            scope
                                                                                              .lib[
                                                                                                "elemAt"
                                                                                              ],
                                                                                            () =>
                                                                                              scope
                                                                                                .mergedSubOption[
                                                                                                  "declarationPositions"
                                                                                                ],
                                                                                            0n,
                                                                                          )["line"],
                                                                                        scope
                                                                                          .apply$(
                                                                                            scope
                                                                                              .lib[
                                                                                                "elemAt"
                                                                                              ],
                                                                                            () =>
                                                                                              scope
                                                                                                .mergedSubOption[
                                                                                                  "declarationPositions"
                                                                                                ],
                                                                                            1n,
                                                                                          )["line"],
                                                                                      ),
                                                                                  );
                                                                                })(
                                                                                  scope
                                                                                    .operators$
                                                                                    .equal(
                                                                                      scope
                                                                                        .apply$(
                                                                                          scope
                                                                                            .lib[
                                                                                              "elemAt"
                                                                                            ],
                                                                                          () =>
                                                                                            scope
                                                                                              .mergedSubOption[
                                                                                                "declarationPositions"
                                                                                              ],
                                                                                          1n,
                                                                                        )["file"],
                                                                                      scope
                                                                                        .__curPos[
                                                                                          "file"
                                                                                        ],
                                                                                    ),
                                                                                );
                                                                              })(
                                                                                scope
                                                                                  .operators$
                                                                                  .equal(
                                                                                    scope
                                                                                      .apply$(
                                                                                        scope
                                                                                          .lib[
                                                                                            "elemAt"
                                                                                          ],
                                                                                        () =>
                                                                                          scope
                                                                                            .mergedSubOption[
                                                                                              "declarationPositions"
                                                                                            ],
                                                                                        0n,
                                                                                      )["file"],
                                                                                    scope
                                                                                      .__curPos[
                                                                                        "file"
                                                                                      ],
                                                                                  ),
                                                                              );
                                                                            })(
                                                                              scope
                                                                                .operators$
                                                                                .equal(
                                                                                  scope
                                                                                    .apply$(
                                                                                      scope
                                                                                        .lib[
                                                                                          "length"
                                                                                        ],
                                                                                      () =>
                                                                                        scope
                                                                                          .mergedSubOption[
                                                                                            "declarationPositions"
                                                                                          ],
                                                                                    ),
                                                                                  2n,
                                                                                ),
                                                                            );
                                                                          })(
                                                                            scope
                                                                              .operators$
                                                                              .equal(
                                                                                scope
                                                                                  .mergedSubOption[
                                                                                    "declarations"
                                                                                  ],
                                                                                [
                                                                                  scope
                                                                                    .__curPos[
                                                                                      "file"
                                                                                    ],
                                                                                  scope
                                                                                    .__curPos[
                                                                                      "file"
                                                                                    ],
                                                                                ],
                                                                              ),
                                                                          );
                                                                        })(
                                                                          scope
                                                                            .operators$
                                                                            .notEqual(
                                                                              scope
                                                                                .apply$(
                                                                                  scope
                                                                                    .lib[
                                                                                      "elemAt"
                                                                                    ],
                                                                                  () =>
                                                                                    scope
                                                                                      .options[
                                                                                        "merged"
                                                                                      ]["declarationPositions"],
                                                                                  0n,
                                                                                )["line"],
                                                                              scope
                                                                                .apply$(
                                                                                  scope
                                                                                    .lib[
                                                                                      "elemAt"
                                                                                    ],
                                                                                  () =>
                                                                                    scope
                                                                                      .options[
                                                                                        "merged"
                                                                                      ]["declarationPositions"],
                                                                                  1n,
                                                                                )["line"],
                                                                            ),
                                                                        );
                                                                      })(
                                                                        scope
                                                                          .operators$
                                                                          .equal(
                                                                            scope
                                                                              .apply$(
                                                                                scope
                                                                                  .lib[
                                                                                    "elemAt"
                                                                                  ],
                                                                                () =>
                                                                                  scope
                                                                                    .options[
                                                                                      "merged"
                                                                                    ]["declarationPositions"],
                                                                                1n,
                                                                              )["file"],
                                                                            scope
                                                                              .__curPos[
                                                                                "file"
                                                                              ],
                                                                          ),
                                                                      );
                                                                    })(
                                                                      scope
                                                                        .operators$
                                                                        .equal(
                                                                          scope
                                                                            .apply$(
                                                                              scope
                                                                                .lib[
                                                                                  "elemAt"
                                                                                ],
                                                                              () =>
                                                                                scope
                                                                                  .options[
                                                                                    "merged"
                                                                                  ]["declarationPositions"],
                                                                              0n,
                                                                            )["file"],
                                                                          scope
                                                                            .__curPos[
                                                                              "file"
                                                                            ],
                                                                        ),
                                                                    );
                                                                  })(
                                                                    scope
                                                                      .operators$
                                                                      .equal(
                                                                        scope
                                                                          .apply$(
                                                                            scope
                                                                              .lib[
                                                                                "length"
                                                                              ],
                                                                            () =>
                                                                              scope
                                                                                .options[
                                                                                  "merged"
                                                                                ]["declarationPositions"],
                                                                          ),
                                                                        2n,
                                                                      ),
                                                                  );
                                                                })(
                                                                  scope
                                                                    .operators$
                                                                    .equal(
                                                                      scope
                                                                        .options[
                                                                          "merged"
                                                                        ]["declarations"],
                                                                      [
                                                                        scope
                                                                          .__curPos[
                                                                            "file"
                                                                          ],
                                                                        scope
                                                                          .__curPos[
                                                                            "file"
                                                                          ],
                                                                      ],
                                                                    ),
                                                                );
                                                              })(
                                                                scope.operators$
                                                                  .equal(
                                                                    scope
                                                                      .apply$(
                                                                        scope
                                                                          .lib[
                                                                            "head"
                                                                          ],
                                                                        () =>
                                                                          scope
                                                                            .options[
                                                                              "submodules"
                                                                            ]["declarationPositions"],
                                                                      )["file"],
                                                                    scope
                                                                      .__curPos[
                                                                        "file"
                                                                      ],
                                                                  ),
                                                              );
                                                            })(
                                                              scope.operators$
                                                                .equal(
                                                                  scope.apply$(
                                                                    scope
                                                                      .lib[
                                                                        "length"
                                                                      ],
                                                                    () =>
                                                                      scope
                                                                        .options[
                                                                          "submodules"
                                                                        ]["declarationPositions"],
                                                                  ),
                                                                  1n,
                                                                ),
                                                            );
                                                          })(
                                                            scope.operators$
                                                              .equal(
                                                                scope
                                                                  .options[
                                                                    "submodules"
                                                                  ]["declarations"],
                                                                [
                                                                  scope
                                                                    .__curPos[
                                                                      "file"
                                                                    ],
                                                                ],
                                                              ),
                                                          );
                                                        })(
                                                          scope.operators$
                                                            .equal(
                                                              scope.apply$(
                                                                scope
                                                                  .lib["head"],
                                                                () =>
                                                                  scope
                                                                    .options[
                                                                      "submodules"
                                                                    ]["type"][
                                                                      "nestedTypes"
                                                                    ]["elemType"][
                                                                      "nestedTypes"
                                                                    ]["qux"][
                                                                      "declarationPositions"
                                                                    ],
                                                              )["file"],
                                                              scope
                                                                .__curPos[
                                                                  "file"
                                                                ],
                                                            ),
                                                        );
                                                      })(
                                                        scope.operators$.equal(
                                                          scope.apply$(
                                                            scope.lib["length"],
                                                            () =>
                                                              scope
                                                                .options[
                                                                  "submodules"
                                                                ]["type"][
                                                                  "nestedTypes"
                                                                ]["elemType"][
                                                                  "nestedTypes"
                                                                ]["qux"][
                                                                  "declarationPositions"
                                                                ],
                                                          ),
                                                          1n,
                                                        ),
                                                      );
                                                    })(
                                                      scope.operators$.equal(
                                                        scope
                                                          .config["docs"][
                                                            "submodules.<name>.qux"
                                                          ]["visible"],
                                                        true,
                                                      ),
                                                    );
                                                  })(
                                                    scope.operators$.equal(
                                                      scope
                                                        .config["docs"][
                                                          "submodules.<name>.qux"
                                                        ]["readOnly"],
                                                      false,
                                                    ),
                                                  );
                                                })(
                                                  scope.operators$.equal(
                                                    scope
                                                      .config["docs"][
                                                        "submodules.<name>.qux"
                                                      ]["description"],
                                                    "A qux for when you don't want a foo",
                                                  ),
                                                );
                                              })(
                                                scope.operators$.equal(
                                                  scope
                                                    .config["docs"][
                                                      "submodules.<name>.qux"
                                                    ]["name"],
                                                  "submodules.<name>.qux",
                                                ),
                                              );
                                            })(
                                              scope.operators$.equal(
                                                scope
                                                  .config["docs"][
                                                    "submodules.<name>.qux"
                                                  ]["loc"],
                                                ["submodules", "<name>", "qux"],
                                              ),
                                            );
                                          })(
                                            scope.operators$.equal(
                                              scope
                                                .config["docs"][
                                                  "submodules.<name>.qux"
                                                ]["declarations"],
                                              [scope.__curPos["file"]],
                                            ),
                                          );
                                        })(
                                          scope.operators$.equal(
                                            scope
                                              .config["docs"][
                                                "submodules.<name>.qux"
                                              ]["type"],
                                            "string",
                                          ),
                                        );
                                      })(
                                        scope.operators$.equal(
                                          scope.apply$(scope.lib["head"], () =>
                                            scope.apply$(
                                              scope
                                                .options["submodules"]["type"][
                                                  "nestedTypes"
                                                ]["elemType"]["nestedTypes"][
                                                  "foo"
                                                ]["type"]["getSubOptions"],
                                              [],
                                            )["bar"]["declarationPositions"])[
                                              "file"
                                            ],
                                          scope.__curPos["file"],
                                        ),
                                      );
                                    })(
                                      scope.operators$.equal(
                                        scope.apply$(scope.lib["length"], () =>
                                          scope.apply$(
                                            scope
                                              .options["submodules"]["type"][
                                                "nestedTypes"
                                              ]["elemType"]["nestedTypes"][
                                                "foo"
                                              ]["type"]["getSubOptions"],
                                            [],
                                          )["bar"]["declarationPositions"]),
                                        1n,
                                      ),
                                    );
                                  })(
                                    scope.operators$.equal(
                                      scope
                                        .config["docs"][
                                          "submodules.<name>.foo.bar"
                                        ]["type"],
                                      "signed integer",
                                    ),
                                  );
                                })(
                                  scope.operators$.equal(
                                    scope
                                      .config["docs"][
                                        "submodules.<name>.foo.bar"
                                      ]["declarations"],
                                    [scope.__curPos["file"]],
                                  ),
                                );
                              })(
                                scope.operators$.equal(
                                  scope.config["merged"]["extensi-bar"],
                                  { extensible: "bar" },
                                ),
                              );
                            })(
                              scope.operators$.equal(
                                scope.config["merged"]["extensi-foo"],
                                { extensible: "foo" },
                              ),
                            );
                          })(
                            scope.operators$.equal(
                              scope.config["merged"]["positive"],
                              { yay: 100n },
                            ),
                          );
                        })(
                          scope.operators$.equal(
                            scope.config["merged"]["negative"],
                            { nay: false },
                          ),
                        );
                      })(
                        scope.operators$.equal(
                          scope.config["intStrings"]["numberOne"],
                          { left: 1n },
                        ),
                      );
                    })(
                      scope.operators$.equal(
                        scope.config["intStrings"]["hello"],
                        { right: "hello world" },
                      ),
                    ),
                ),
            }),
        })
      ))
  ),
);
