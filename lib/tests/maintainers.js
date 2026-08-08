import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./maintainers.nix", import.meta.url).pathname,
  ({ scope }) => (
    //
    //
    //
    scope.func$({
      pkgs: (scope) =>
        scope.apply$(
          scope.import,
          new scope.Path$([
            new URL("../../../nixpkgs.lib", import.meta.url).pathname,
          ], []),
          {},
        ),
      lib: (scope) => scope.pkgs["lib"],
    }, (scope) =>
      scope.let$({
        checkMaintainer: (scope) =>
          scope.func$("handle", (scope) =>
            scope.func$("uncheckedAttrs", (scope) =>
              scope.let$({
                prefix: (scope) => ["lib", "maintainers", scope.handle],
                checkedAttrs: (scope) =>
                  scope.apply$(scope.lib["modules"]["evalModules"], () =>
                    scope.attrSet$({
                      prefix: () => scope.prefix,
                      modules:
                        () => [
                          new scope.Path$([
                            new URL("./maintainer-module.nix", import.meta.url)
                              .pathname,
                          ], []),
                          scope.attrSet$({
                            _file: () =>
                              scope.apply$(
                                scope.toString,
                                new scope.Path$([
                                  new URL(
                                    "../../maintainers/maintainer-list.nix",
                                    import.meta.url,
                                  ).pathname,
                                ], []),
                              ),
                            config: () => scope.uncheckedAttrs,
                          }),
                        ],
                    }))["config"],
                checks: (scope) =>
                  scope.operators$.listConcat(
                    scope.apply$(
                      scope.lib["optional"],
                      () => ((scope.operators$.notEqual(
                        scope.checkedAttrs["github"],
                        null,
                      )) &&
                        (scope.operators$.equal(
                          scope.checkedAttrs["githubId"],
                          null,
                        ))),
                      () =>
                        scope.str$(
                          () => [
                            "echo ",
                            scope.apply$(scope.lib["escapeShellArg"], () =>
                              scope.apply$(
                                scope.lib["showOption"],
                                () => scope.prefix,
                              )),
                            "': If `github` is specified, `githubId` must be too.'\n# Calling this too often would hit non-authenticated API limits, but this\n# shouldn't happen since such errors will get fixed rather quickly\ninfo=$(curl -sS https://api.github.com/users/",
                            scope.checkedAttrs["github"],
                            ')\nid=$(jq -r \'.id\' <<< "$info")\necho "The GitHub ID for GitHub user ',
                            scope.checkedAttrs["github"],
                            ' is $id:"\necho -e "    githubId = $id;\\n"\n',
                          ]
                        ),
                    ),
                    scope.operators$.listConcat(
                      scope.apply$(
                        scope.lib["optional"],
                        () => (((scope.operators$.equal(
                          scope.checkedAttrs["email"],
                          null,
                        )) &&
                          (scope.operators$.equal(
                            scope.checkedAttrs["github"],
                            null,
                          ))) &&
                          (scope.operators$.equal(
                            scope.checkedAttrs["matrix"],
                            null,
                          ))),
                        () =>
                          scope.str$(
                            () => [
                              "echo ",
                              scope.apply$(scope.lib["escapeShellArg"], () =>
                                scope.apply$(
                                  scope.lib["showOption"],
                                  () => scope.prefix,
                                )),
                              "': At least one of `email`, `github` or `matrix` must be specified, so that users know how to reach you.'\n",
                            ]
                          ),
                      ),
                      scope.apply$(
                        scope.lib["optional"],
                        () => ((scope.operators$.notEqual(
                          scope.checkedAttrs["email"],
                          null,
                        )) &&
                          (scope.apply$(
                            scope.lib["hasSuffix"],
                            "noreply.github.com",
                            () => scope.checkedAttrs["email"],
                          ))),
                        () =>
                          scope.str$(
                            () => [
                              "echo ",
                              scope.apply$(scope.lib["escapeShellArg"], () =>
                                scope.apply$(
                                  scope.lib["showOption"],
                                  () => scope.prefix,
                                )),
                              "': If an email address is given, it should allow people to reach you. If you do not want that, you can just provide `github` or `matrix` instead.'\n",
                            ]
                          ),
                      ),
                    ),
                  ),
              }).in$((scope) =>
                scope.apply$(
                  scope.lib["deepSeq"],
                  () => scope.checkedAttrs,
                  () => scope.checks,
                )
              ))),
        missingGithubIds: (scope) =>
          scope.apply$(scope.lib["concatLists"], () =>
            scope.apply$(scope.lib["mapAttrsToList"], () =>
              scope.checkMaintainer, () =>
              scope.lib["maintainers"])),
        uniqueFields: ["github", "githubId", "email", "matrix"],
        nonUniqueFields: (scope) =>
          scope.apply$(scope.lib["filterAttrs"], () =>
            scope.func$("field", (scope) =>
              scope.func$("nonUnique", (scope) =>
                scope.operators$.notEqual(scope.nonUnique, {}))), () =>
            scope.apply$(scope.lib["genAttrs"], () =>
              scope.uniqueFields, () =>
              scope.func$("field", (scope) =>
                scope.apply$(
                  scope.lib["pipe"],
                  () => scope.lib["maintainers"],
                  () => [
                    scope.apply$(scope.lib["mapAttrsToList"], () =>
                      scope.func$("handle", (scope) =>
                        scope.func$("m", (scope) =>
                          scope.operators$.merge(
                            scope.m,
                            scope.attrSet$({
                              handle: () => scope.handle,
                            }),
                          )))),
                    scope.apply$(scope.lib["groupBy"], () =>
                      scope.func$("m", (scope) =>
                        scope.apply$(scope.toString, () =>
                          scope.operators$.selectOrDefault(scope.m, [
                            scope.field,
                          ], null)))),
                    scope.apply$(scope.lib["filterAttrs"], () =>
                      scope.func$("v", (scope) =>
                        scope.func$(
                          "ms",
                          (
                            scope,
                          ) => ((scope.operators$.notEqual(scope.v, "")) &&
                            (scope.operators$.greaterThan(
                              scope.apply$(scope.lib["length"], () => scope.ms),
                              1n,
                            ))),
                        ))),
                    scope.apply$(scope.lib["mapAttrs"], () =>
                      scope.func$("v", (scope) =>
                        scope.func$("ms", (scope) =>
                          scope.apply$(
                            scope.map,
                            () =>
                              scope.func$("m", (scope) => scope.m["handle"]),
                            () => scope.ms,
                          )))),
                  ],
                )))),
        uniquenessError: (scope) =>
          scope.func$("value", (scope) =>
            scope.if$(scope.operators$.equal(scope.nonUniqueFields, {})).then$(
              () =>
                scope.value
            ).else$(() =>
              scope.apply$(scope.throw, () =>
                scope.str$(
                  () => [
                    "lib.maintainers has non-unique fields: ",
                    scope.apply$(
                      scope.lib["generators"]["toPretty"],
                      {},
                      () => scope.nonUniqueFields,
                    ),
                  ]
                ))
            )),
        success: (scope) =>
          scope.apply$(
            scope.pkgs["runCommand"],
            "checked-maintainers-success",
            {},
            "mkdir $out",
          ),
        failure: (scope) =>
          scope.apply$(
            scope.pkgs["runCommand"],
            "checked-maintainers-failure",
            () =>
              scope.attrSet$({
                nativeBuildInputs: () => [scope.pkgs["curl"], scope.pkgs["jq"]],
                outputHash: () =>
                  scope.str$(() => ["sha256:", scope.lib["fakeSha256"]]),
                outputHAlgo: "sha256",
                outputHashMode: "flat",
                SSL_CERT_FILE: () =>
                  scope.str$(
                    () => [scope.pkgs["cacert"], "/etc/ssl/certs/ca-bundle.crt"]
                  ),
              }),
            () =>
              scope.str$(
                () => [
                  scope.apply$(
                    scope.lib["concatStringsSep"],
                    "\n",
                    () => scope.missingGithubIds,
                  ),
                  "\nexit 1\n",
                ]
              ),
          ),
      }).in$((scope) =>
        scope.apply$(scope.uniquenessError, () =>
          scope.if$(scope.operators$.equal(scope.missingGithubIds, [])).then$(
            () =>
              scope.success
          ).else$(() =>
            scope.failure
          ))
      ))
  ),
);
