import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./declare-mkPackageOption.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$(
      { lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis },
      (scope) =>
        scope.let$({
          ...scope.deepSet$(["pkgs", "hello"], {
            type: "derivation",
            pname: "hello",
          }),
        }).in$((scope) =>
          scope.attrSet$({
            options: () =>
              scope.attrSet$({
                package: () =>
                  scope.apply$(
                    scope.lib["mkPackageOption"],
                    () => scope.pkgs,
                    "hello",
                    {},
                  ),
                namedPackage: () =>
                  scope.apply$(
                    scope.lib["mkPackageOption"],
                    () => scope.pkgs,
                    "Hello",
                    { default: ["hello"] },
                  ),
                namedPackageSingletonDefault: () =>
                  scope.apply$(
                    scope.lib["mkPackageOption"],
                    () => scope.pkgs,
                    "Hello",
                    { default: "hello" },
                  ),
                pathPackage: () =>
                  scope.apply$(scope.lib["mkPackageOption"], () => scope.pkgs, [
                    "hello",
                  ], {}),
                packageWithExample: () =>
                  scope.apply$(
                    scope.lib["mkPackageOption"],
                    () => scope.pkgs,
                    "hello",
                    {
                      example:
                        "pkgs.hello.override { stdenv = pkgs.clangStdenv; }",
                    },
                  ),
                packageWithPathExample: () =>
                  scope.apply$(
                    scope.lib["mkPackageOption"],
                    () => scope.pkgs,
                    "hello",
                    { example: ["hello"] },
                  ),
                packageWithExtraDescription: () =>
                  scope.apply$(
                    scope.lib["mkPackageOption"],
                    () => scope.pkgs,
                    "hello",
                    { extraDescription: "Example extra description." },
                  ),
                undefinedPackage: () =>
                  scope.apply$(
                    scope.lib["mkPackageOption"],
                    () => scope.pkgs,
                    "hello",
                    { default: null },
                  ),
                nullablePackage: () =>
                  scope.apply$(
                    scope.lib["mkPackageOption"],
                    () => scope.pkgs,
                    "hello",
                    { nullable: true, default: null },
                  ),
                nullablePackageWithDefault: () =>
                  scope.apply$(
                    scope.lib["mkPackageOption"],
                    () => scope.pkgs,
                    "hello",
                    { nullable: true },
                  ),
                packageWithPkgsText: () =>
                  scope.apply$(
                    scope.lib["mkPackageOption"],
                    () => scope.pkgs,
                    "hello",
                    { pkgsText: "myPkgs" },
                  ),
                packageFromOtherSet: () =>
                  scope.let$({
                    myPkgs: (scope) =>
                      scope.attrSet$({
                        hello: () =>
                          scope.operators$.merge(scope.pkgs["hello"], {
                            pname: "hello-other",
                          }),
                      }),
                  }).in$((scope) =>
                    scope.apply$(
                      scope.lib["mkPackageOption"],
                      () => scope.myPkgs,
                      "hello",
                      {},
                    )
                  ),
                packageInvalidIdentifier: () =>
                  scope.let$({
                    ...scope.deepSet$(
                      ["myPkgs", '"123"', '"with\\"quote"'],
                      (scope) =>
                        scope.attrSet$({
                          hello: () => scope.pkgs.hello,
                        }),
                    ),
                  }).in$((scope) =>
                    scope.apply$(
                      scope.lib["mkPackageOption"],
                      () => scope.myPkgs,
                      ["123", 'with"quote', "hello"],
                      {},
                    )
                  ),
                packageInvalidIdentifierExample: () =>
                  scope.apply$(
                    scope.lib["mkPackageOption"],
                    () => scope.pkgs,
                    "hello",
                    { example: ["123", 'with"quote', "hello"] },
                  ),
              }),
          })
        ),
    )
  ),
);
