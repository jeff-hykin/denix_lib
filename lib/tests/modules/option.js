import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@e818a96f/main/runtime.js";

export default nixFile(
  new URL("./option.nix", import.meta.url).pathname,
  ({ scope }) => (
    scope.func$({
      config: scope.nixArg$.NoDefault,
      lib: scope.nixArg$.NoDefault,
      options: scope.nixArg$.NoDefault,
      "...": scope.nixArg$.Ellipsis,
    }, (scope) =>
      scope.attrSet$({
        options: () =>
          scope.attrSet$({
            theOption: () =>
              scope.apply$(scope.lib["mkOption"], () =>
                scope.attrSet$({
                  type: () => scope.lib["types"]["optionDeclaration"],
                })),
            anOption: () => scope.config["theOption"],
            aBadOptionDef: () =>
              scope.apply$(scope.lib["mkOption"], () =>
                scope.attrSet$({
                  type: () => scope.lib["types"]["optionDeclaration"],
                  description:
                    "This option is perfectly fine, but will have a bad definition.\n",
                })),
          }),
        config: () =>
          scope.attrSet$({
            theOption: () =>
              scope.apply$(scope.lib["mkOption"], () =>
                scope.attrSet$({
                  type: () => scope.lib["types"]["int"],
                })),
            anOption: 10n,
            aBadOptionDef: () => scope.options["theOption"],
          }),
      }))
  ),
);
