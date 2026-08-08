import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js";
import _nix_trivial_e4a257ee from "./trivial.js";
import _nix_fixed_points_fe1b2c8d from "./fixed-points.js";
import _nix_attrsets_a0edbe71 from "./attrsets.js";
import _nix_lists_c892800e from "./lists.js";
import _nix_strings_99f41e2d from "./strings.js";
import _nix_strings_with_deps_3b9b85a5 from "./strings-with-deps.js";
import _nix_customisation_699d04d7 from "./customisation.js";
import _nix_derivations_b9c20981 from "./derivations.js";
import _nix_maintainer_list_4fb064ce from "../maintainers/maintainer-list.js";
import _nix_computed_team_list_e8b6b02d from "../maintainers/computed-team-list.js";
import _nix_meta_240d36e6 from "./meta.js";
import _nix_versions_25dca4be from "./versions.js";
import _nix_modules_c663b90e from "./modules.js";
import _nix_options_2fe1b5f1 from "./options.js";
import _nix_types_b8a97b2a from "./types.js";
import _nix_default_e8f424ed from "./licenses/default.js";
import _nix_source_types_ec2adca6 from "./source-types.js";
import _nix_default_70d89193 from "./systems/default.js";
import _nix_cli_8dd599f1 from "./cli.js";
import _nix_gvariant_05b0dbc5 from "./gvariant.js";
import _nix_generators_127f3009 from "./generators.js";
import _nix_asserts_33fe9938 from "./asserts.js";
import _nix_debug_0fbcc6cc from "./debug.js";
import _nix_misc_5603aa11 from "./deprecated/misc.js";
import _nix_fetchers_6534d83b from "./fetchers.js";
import _nix_default_2fd8170e from "./path/default.js";
import _nix_filesystem_46f354e4 from "./filesystem.js";
import _nix_default_f09a56af from "./fileset/default.js";
import _nix_sources_741e5589 from "./sources.js";
import _nix_kernel_8121f112 from "./kernel.js";
import _nix_default_5a57264b from "./network/default.js";
import _nix_flakes_8eee27f1 from "./flakes.js";

export default nixFile(
  new URL("./default.nix", import.meta.url).pathname,
  ({ scope }) => (
    /*
  Library of low-level helper functions for nix expressions.

  Please implement (mostly) exhaustive unit tests
  for new functions in `./tests.nix`.
    */ scope.let$({
      "makeExtensible'": (scope) =>
        scope.func$("rattrs", (scope) =>
          scope.let$({
            self: (scope) =>
              scope.operators$.merge(
                scope.apply$(scope.rattrs, () => scope.self),
                scope.attrSet$({
                  extend: () =>
                    scope.func$("f", (scope) =>
                      scope.apply$(scope.lib["makeExtensible"], () =>
                        scope.apply$(
                          scope.lib["extends"],
                          () => scope.f,
                          () => scope.rattrs,
                        ))),
                }),
              ),
          }).in$((scope) => scope.self)),
      lib: (scope) =>
        scope.apply$(scope["makeExtensible'"], () =>
          scope.func$("self", (scope) =>
            scope.attrSet$({
              trivial: () =>
                scope.apply$(_nix_trivial_e4a257ee(scope.runtime$), () =>
                  scope.attrSet$({
                    lib: () => scope.self,
                  })),
              fixedPoints: () =>
                scope.apply$(_nix_fixed_points_fe1b2c8d(scope.runtime$), () =>
                  scope.attrSet$({
                    lib: () => scope.self,
                  })),
              attrsets: () =>
                scope.apply$(_nix_attrsets_a0edbe71(scope.runtime$), () =>
                  scope.attrSet$({
                    lib: () => scope.self,
                  })),
              lists: () =>
                scope.apply$(_nix_lists_c892800e(scope.runtime$), () =>
                  scope.attrSet$({
                    lib: () => scope.self,
                  })),
              strings: () =>
                scope.apply$(_nix_strings_99f41e2d(scope.runtime$), () =>
                  scope.attrSet$({
                    lib: () =>
                      scope.self,
                  })),
              stringsWithDeps: () =>
                scope.apply$(
                  _nix_strings_with_deps_3b9b85a5(scope.runtime$),
                  () =>
                    scope.attrSet$({
                      lib: () => scope.self,
                    }),
                ),
              customisation: () =>
                scope.apply$(_nix_customisation_699d04d7(scope.runtime$), () =>
                  scope.attrSet$({
                    lib: () =>
                      scope.self,
                  })),
              derivations: () =>
                scope.apply$(_nix_derivations_b9c20981(scope.runtime$), () =>
                  scope.attrSet$({
                    lib: () =>
                      scope.self,
                  })),
              maintainers: () =>
                _nix_maintainer_list_4fb064ce(scope.runtime$),
              teams: () =>
                scope.apply$(
                  _nix_computed_team_list_e8b6b02d(scope.runtime$),
                  () =>
                    scope.attrSet$({
                      lib: () => scope.self,
                    }),
                ),
              meta: () =>
                scope.apply$(_nix_meta_240d36e6(scope.runtime$), () =>
                  scope.attrSet$({
                    lib: () =>
                      scope.self,
                  })),
              versions: () =>
                scope.apply$(_nix_versions_25dca4be(scope.runtime$), () =>
                  scope.attrSet$({
                    lib: () =>
                      scope.self,
                  })),
              modules: () =>
                scope.apply$(_nix_modules_c663b90e(scope.runtime$), () =>
                  scope.attrSet$({
                    lib: () =>
                      scope.self,
                  })),
              options: () =>
                scope.apply$(_nix_options_2fe1b5f1(scope.runtime$), () =>
                  scope.attrSet$({
                    lib: () =>
                      scope.self,
                  })),
              types: () =>
                scope.apply$(_nix_types_b8a97b2a(scope.runtime$), () =>
                  scope.attrSet$({
                    lib: () =>
                      scope.self,
                  })),
              licenses: () =>
                scope.apply$(_nix_default_e8f424ed(scope.runtime$), () =>
                  scope.attrSet$({
                    lib: () =>
                      scope.self,
                  })),
              sourceTypes: () =>
                scope.apply$(_nix_source_types_ec2adca6(scope.runtime$), () =>
                  scope.attrSet$({
                    lib: () =>
                      scope.self,
                  })),
              systems: () =>
                scope.apply$(_nix_default_70d89193(scope.runtime$), () =>
                  scope.attrSet$({
                    lib: () =>
                      scope.self,
                  })),
              cli: () =>
                scope.apply$(_nix_cli_8dd599f1(scope.runtime$), () =>
                  scope.attrSet$({
                    lib: () =>
                      scope.self,
                  })),
              gvariant: () =>
                scope.apply$(_nix_gvariant_05b0dbc5(scope.runtime$), () =>
                  scope.attrSet$({
                    lib: () =>
                      scope.self,
                  })),
              generators: () =>
                scope.apply$(_nix_generators_127f3009(scope.runtime$), () =>
                  scope.attrSet$({
                    lib: () =>
                      scope.self,
                  })),
              asserts: () =>
                scope.apply$(_nix_asserts_33fe9938(scope.runtime$), () =>
                  scope.attrSet$({
                    lib: () =>
                      scope.self,
                  })),
              debug: () =>
                scope.apply$(_nix_debug_0fbcc6cc(scope.runtime$), () =>
                  scope.attrSet$({
                    lib: () =>
                      scope.self,
                  })),
              misc: () =>
                scope.apply$(_nix_misc_5603aa11(scope.runtime$), () =>
                  scope.attrSet$({
                    lib: () =>
                      scope.self,
                  })),
              fetchers: () =>
                scope.apply$(_nix_fetchers_6534d83b(scope.runtime$), () =>
                  scope.attrSet$({
                    lib: () =>
                      scope.self,
                  })),
              path: () =>
                scope.apply$(_nix_default_2fd8170e(scope.runtime$), () =>
                  scope.attrSet$({
                    lib: () =>
                      scope.self,
                  })),
              filesystem: () =>
                scope.apply$(_nix_filesystem_46f354e4(scope.runtime$), () =>
                  scope.attrSet$({
                    lib: () =>
                      scope.self,
                  })),
              fileset: () =>
                scope.apply$(_nix_default_f09a56af(scope.runtime$), () =>
                  scope.attrSet$({
                    lib: () =>
                      scope.self,
                  })),
              sources: () =>
                scope.apply$(_nix_sources_741e5589(scope.runtime$), () =>
                  scope.attrSet$({
                    lib: () =>
                      scope.self,
                  })),
              platforms: () =>
                scope.self["systems"]["doubles"],
              kernel: () =>
                scope.apply$(_nix_kernel_8121f112(scope.runtime$), () =>
                  scope.attrSet$({
                    lib: () =>
                      scope.self,
                  })),
              network: () =>
                scope.apply$(_nix_default_5a57264b(scope.runtime$), () =>
                  scope.attrSet$({
                    lib: () =>
                      scope.self,
                  })),
              flakes: () =>
                scope.apply$(_nix_flakes_8eee27f1(scope.runtime$), () =>
                  scope.attrSet$({
                    lib: () =>
                      scope.self,
                  })),
              getContext: () =>
                scope.builtins.getContext,
              hasContext: () =>
                scope.builtins.hasContext,
              convertHash: () =>
                scope.builtins.convertHash,
              hashString: () =>
                scope.builtins.hashString,
              parseDrvName: () =>
                scope.builtins.parseDrvName,
              placeholder: () =>
                scope.builtins.placeholder,
              fromJSON: () =>
                scope.builtins.fromJSON,
              fromTOML: () =>
                scope.builtins.fromTOML,
              toFile: () =>
                scope.builtins.toFile,
              toJSON: () =>
                scope.builtins.toJSON,
              toString: () =>
                scope.builtins.toString,
              toXML: () =>
                scope.builtins.toXML,
              tryEval: () =>
                scope.builtins.tryEval,
              id: () =>
                scope.self["trivial"].id,
              const: () =>
                scope.self["trivial"].const,
              pipe: () =>
                scope.self["trivial"].pipe,
              concat: () =>
                scope.self["trivial"].concat,
              and: () =>
                scope.self["trivial"].and,
              mul: () =>
                scope.self["trivial"].mul,
              div: () =>
                scope.self["trivial"].div,
              xor: () =>
                scope.self["trivial"].xor,
              bitAnd: () =>
                scope.self["trivial"].bitAnd,
              bitOr: () =>
                scope.self["trivial"].bitOr,
              bitXor: () =>
                scope.self["trivial"].bitXor,
              bitNot: () =>
                scope.self["trivial"].bitNot,
              boolToString: () =>
                scope.self["trivial"].boolToString,
              boolToYesNo: () =>
                scope.self["trivial"].boolToYesNo,
              mergeAttrs: () =>
                scope.self["trivial"].mergeAttrs,
              flip: () =>
                scope.self["trivial"].flip,
              defaultTo: () =>
                scope.self["trivial"].defaultTo,
              mapNullable: () =>
                scope.self["trivial"].mapNullable,
              inNixShell: () =>
                scope.self["trivial"].inNixShell,
              isFloat: () =>
                scope.self["trivial"].isFloat,
              min: () =>
                scope.self["trivial"].min,
              max: () =>
                scope.self["trivial"].max,
              importJSON: () =>
                scope.self["trivial"].importJSON,
              importTOML: () =>
                scope.self["trivial"].importTOML,
              warn: () =>
                scope.self["trivial"].warn,
              warnIf: () =>
                scope.self["trivial"].warnIf,
              warnIfNot: () =>
                scope.self["trivial"].warnIfNot,
              throwIf: () =>
                scope.self["trivial"].throwIf,
              throwIfNot: () =>
                scope.self["trivial"].throwIfNot,
              checkListOfEnum: () =>
                scope.self["trivial"].checkListOfEnum,
              info: () =>
                scope.self["trivial"].info,
              showWarnings: () =>
                scope.self["trivial"].showWarnings,
              nixpkgsVersion: () =>
                scope.self["trivial"].nixpkgsVersion,
              version: () =>
                scope.self["trivial"].version,
              isInOldestRelease: () =>
                scope.self["trivial"].isInOldestRelease,
              oldestSupportedReleaseIsAtLeast: () =>
                scope.self["trivial"].oldestSupportedReleaseIsAtLeast,
              mod: () =>
                scope.self["trivial"].mod,
              compare: () =>
                scope.self["trivial"].compare,
              splitByAndCompare: () =>
                scope.self["trivial"].splitByAndCompare,
              seq: () =>
                scope.self["trivial"].seq,
              deepSeq: () =>
                scope.self["trivial"].deepSeq,
              lessThan: () =>
                scope.self["trivial"].lessThan,
              add: () =>
                scope.self["trivial"].add,
              sub: () => scope.self["trivial"].sub,
              functionArgs: () => scope.self["trivial"].functionArgs,
              setFunctionArgs: () => scope.self["trivial"].setFunctionArgs,
              isFunction: () => scope.self["trivial"].isFunction,
              toFunction: () => scope.self["trivial"].toFunction,
              mirrorFunctionArgs: () =>
                scope.self["trivial"].mirrorFunctionArgs,
              fromHexString: () => scope.self["trivial"].fromHexString,
              toHexString: () => scope.self["trivial"].toHexString,
              toBaseDigits: () => scope.self["trivial"].toBaseDigits,
              inPureEvalMode: () => scope.self["trivial"].inPureEvalMode,
              isBool: () => scope.self["trivial"].isBool,
              isInt: () => scope.self["trivial"].isInt,
              pathExists: () => scope.self["trivial"].pathExists,
              genericClosure: () => scope.self["trivial"].genericClosure,
              readFile: () => scope.self["trivial"].readFile,
              ceil: () => scope.self["trivial"].ceil,
              floor: () => scope.self["trivial"].floor,
              fix: () => scope.self["fixedPoints"].fix,
              "fix'": () => scope.self["fixedPoints"]["fix'"],
              converge: () => scope.self["fixedPoints"].converge,
              extends: () => scope.self["fixedPoints"].extends,
              composeExtensions: () =>
                scope.self["fixedPoints"].composeExtensions,
              composeManyExtensions: () =>
                scope.self["fixedPoints"].composeManyExtensions,
              makeExtensible: () => scope.self["fixedPoints"].makeExtensible,
              makeExtensibleWithCustomName: () =>
                scope.self["fixedPoints"].makeExtensibleWithCustomName,
              toExtension: () => scope.self["fixedPoints"].toExtension,
              attrByPath: () => scope.self["attrsets"].attrByPath,
              hasAttrByPath: () => scope.self["attrsets"].hasAttrByPath,
              setAttrByPath: () => scope.self["attrsets"].setAttrByPath,
              getAttrFromPath: () => scope.self["attrsets"].getAttrFromPath,
              attrVals: () => scope.self["attrsets"].attrVals,
              attrNames: () => scope.self["attrsets"].attrNames,
              attrValues: () => scope.self["attrsets"].attrValues,
              getAttrs: () => scope.self["attrsets"].getAttrs,
              catAttrs: () => scope.self["attrsets"].catAttrs,
              filterAttrs: () => scope.self["attrsets"].filterAttrs,
              filterAttrsRecursive: () =>
                scope.self["attrsets"].filterAttrsRecursive,
              foldlAttrs: () => scope.self["attrsets"].foldlAttrs,
              foldAttrs: () => scope.self["attrsets"].foldAttrs,
              collect: () => scope.self["attrsets"].collect,
              nameValuePair: () => scope.self["attrsets"].nameValuePair,
              mapAttrs: () => scope.self["attrsets"].mapAttrs,
              "mapAttrs'": () => scope.self["attrsets"]["mapAttrs'"],
              mapAttrsToList: () => scope.self["attrsets"].mapAttrsToList,
              attrsToList: () => scope.self["attrsets"].attrsToList,
              concatMapAttrs: () => scope.self["attrsets"].concatMapAttrs,
              mapAttrsRecursive: () =>
                scope.self["attrsets"].mapAttrsRecursive,
              mapAttrsRecursiveCond: () =>
                scope.self["attrsets"].mapAttrsRecursiveCond,
              mapAttrsToListRecursive: () =>
                scope.self["attrsets"].mapAttrsToListRecursive,
              mapAttrsToListRecursiveCond: () =>
                scope.self["attrsets"].mapAttrsToListRecursiveCond,
              genAttrs: () => scope.self["attrsets"].genAttrs,
              "genAttrs'": () => scope.self["attrsets"]["genAttrs'"],
              isDerivation: () => scope.self["attrsets"].isDerivation,
              toDerivation: () => scope.self["attrsets"].toDerivation,
              optionalAttrs: () => scope.self["attrsets"].optionalAttrs,
              zipAttrsWithNames: () =>
                scope.self["attrsets"].zipAttrsWithNames,
              zipAttrsWith: () => scope.self["attrsets"].zipAttrsWith,
              zipAttrs: () => scope.self["attrsets"].zipAttrs,
              recursiveUpdateUntil: () =>
                scope.self["attrsets"].recursiveUpdateUntil,
              recursiveUpdate: () => scope.self["attrsets"].recursiveUpdate,
              matchAttrs: () => scope.self["attrsets"].matchAttrs,
              mergeAttrsList: () => scope.self["attrsets"].mergeAttrsList,
              overrideExisting: () => scope.self["attrsets"].overrideExisting,
              showAttrPath: () => scope.self["attrsets"].showAttrPath,
              getOutput: () => scope.self["attrsets"].getOutput,
              getFirstOutput: () => scope.self["attrsets"].getFirstOutput,
              getBin: () => scope.self["attrsets"].getBin,
              getLib: () => scope.self["attrsets"].getLib,
              getStatic: () => scope.self["attrsets"].getStatic,
              getDev: () => scope.self["attrsets"].getDev,
              getInclude: () => scope.self["attrsets"].getInclude,
              getMan: () => scope.self["attrsets"].getMan,
              chooseDevOutputs: () => scope.self["attrsets"].chooseDevOutputs,
              recurseIntoAttrs: () => scope.self["attrsets"].recurseIntoAttrs,
              dontRecurseIntoAttrs: () =>
                scope.self["attrsets"].dontRecurseIntoAttrs,
              cartesianProduct: () => scope.self["attrsets"].cartesianProduct,
              mapCartesianProduct: () =>
                scope.self["attrsets"].mapCartesianProduct,
              updateManyAttrsByPath: () =>
                scope.self["attrsets"].updateManyAttrsByPath,
              listToAttrs: () => scope.self["attrsets"].listToAttrs,
              hasAttr: () => scope.self["attrsets"].hasAttr,
              getAttr: () => scope.self["attrsets"].getAttr,
              isAttrs: () => scope.self["attrsets"].isAttrs,
              intersectAttrs: () => scope.self["attrsets"].intersectAttrs,
              removeAttrs: () => scope.self["attrsets"].removeAttrs,
              singleton: () => scope.self["lists"].singleton,
              forEach: () => scope.self["lists"].forEach,
              map: () => scope.self["lists"].map,
              foldr: () => scope.self["lists"].foldr,
              fold: () => scope.self["lists"].fold,
              foldl: () => scope.self["lists"].foldl,
              "foldl'": () => scope.self["lists"]["foldl'"],
              imap0: () => scope.self["lists"].imap0,
              imap1: () => scope.self["lists"].imap1,
              filter: () => scope.self["lists"].filter,
              ifilter0: () => scope.self["lists"].ifilter0,
              concatMap: () => scope.self["lists"].concatMap,
              flatten: () => scope.self["lists"].flatten,
              remove: () => scope.self["lists"].remove,
              findSingle: () => scope.self["lists"].findSingle,
              findFirst: () => scope.self["lists"].findFirst,
              any: () => scope.self["lists"].any,
              all: () => scope.self["lists"].all,
              count: () => scope.self["lists"].count,
              optional: () => scope.self["lists"].optional,
              optionals: () => scope.self["lists"].optionals,
              toList: () => scope.self["lists"].toList,
              range: () => scope.self["lists"].range,
              replicate: () => scope.self["lists"].replicate,
              partition: () => scope.self["lists"].partition,
              zipListsWith: () => scope.self["lists"].zipListsWith,
              zipLists: () => scope.self["lists"].zipLists,
              reverseList: () => scope.self["lists"].reverseList,
              listDfs: () => scope.self["lists"].listDfs,
              toposort: () => scope.self["lists"].toposort,
              sort: () => scope.self["lists"].sort,
              sortOn: () => scope.self["lists"].sortOn,
              naturalSort: () => scope.self["lists"].naturalSort,
              compareLists: () => scope.self["lists"].compareLists,
              take: () => scope.self["lists"].take,
              takeEnd: () => scope.self["lists"].takeEnd,
              drop: () => scope.self["lists"].drop,
              dropEnd: () => scope.self["lists"].dropEnd,
              sublist: () => scope.self["lists"].sublist,
              last: () => scope.self["lists"].last,
              init: () => scope.self["lists"].init,
              crossLists: () => scope.self["lists"].crossLists,
              unique: () => scope.self["lists"].unique,
              uniqueStrings: () => scope.self["lists"].uniqueStrings,
              allUnique: () => scope.self["lists"].allUnique,
              intersectLists: () => scope.self["lists"].intersectLists,
              subtractLists: () => scope.self["lists"].subtractLists,
              mutuallyExclusive: () => scope.self["lists"].mutuallyExclusive,
              groupBy: () => scope.self["lists"].groupBy,
              "groupBy'": () => scope.self["lists"]["groupBy'"],
              concatLists: () => scope.self["lists"].concatLists,
              genList: () => scope.self["lists"].genList,
              length: () => scope.self["lists"].length,
              head: () => scope.self["lists"].head,
              tail: () => scope.self["lists"].tail,
              elem: () => scope.self["lists"].elem,
              elemAt: () => scope.self["lists"].elemAt,
              isList: () => scope.self["lists"].isList,
              concatAttrValues: () => scope.self["lists"].concatAttrValues,
              replaceElemAt: () => scope.self["lists"].replaceElemAt,
              concatStrings: () => scope.self["strings"].concatStrings,
              concatMapStrings: () => scope.self["strings"].concatMapStrings,
              concatImapStrings: () =>
                scope.self["strings"].concatImapStrings,
              stringLength: () => scope.self["strings"].stringLength,
              substring: () => scope.self["strings"].substring,
              isString: () => scope.self["strings"].isString,
              replaceString: () => scope.self["strings"].replaceString,
              replaceStrings: () => scope.self["strings"].replaceStrings,
              intersperse: () => scope.self["strings"].intersperse,
              concatStringsSep: () => scope.self["strings"].concatStringsSep,
              concatMapStringsSep: () =>
                scope.self["strings"].concatMapStringsSep,
              concatMapAttrsStringSep: () =>
                scope.self["strings"].concatMapAttrsStringSep,
              concatImapStringsSep: () =>
                scope.self["strings"].concatImapStringsSep,
              concatLines: () => scope.self["strings"].concatLines,
              makeSearchPath: () => scope.self["strings"].makeSearchPath,
              makeSearchPathOutput: () =>
                scope.self["strings"].makeSearchPathOutput,
              makeLibraryPath: () => scope.self["strings"].makeLibraryPath,
              makeIncludePath: () => scope.self["strings"].makeIncludePath,
              makeBinPath: () => scope.self["strings"].makeBinPath,
              optionalString: () => scope.self["strings"].optionalString,
              hasInfix: () => scope.self["strings"].hasInfix,
              hasPrefix: () => scope.self["strings"].hasPrefix,
              hasSuffix: () => scope.self["strings"].hasSuffix,
              join: () => scope.self["strings"].join,
              stringToCharacters: () =>
                scope.self["strings"].stringToCharacters,
              stringAsChars: () => scope.self["strings"].stringAsChars,
              escape: () => scope.self["strings"].escape,
              escapeShellArg: () => scope.self["strings"].escapeShellArg,
              escapeShellArgs: () => scope.self["strings"].escapeShellArgs,
              isStorePath: () => scope.self["strings"].isStorePath,
              isStringLike: () => scope.self["strings"].isStringLike,
              isValidPosixName: () => scope.self["strings"].isValidPosixName,
              toShellVar: () => scope.self["strings"].toShellVar,
              toShellVars: () => scope.self["strings"].toShellVars,
              trim: () => scope.self["strings"].trim,
              trimWith: () => scope.self["strings"].trimWith,
              escapeRegex: () => scope.self["strings"].escapeRegex,
              escapeURL: () => scope.self["strings"].escapeURL,
              escapeXML: () => scope.self["strings"].escapeXML,
              lowerChars: () => scope.self["strings"].lowerChars,
              upperChars: () => scope.self["strings"].upperChars,
              toLower: () => scope.self["strings"].toLower,
              toUpper: () => scope.self["strings"].toUpper,
              toCamelCase: () => scope.self["strings"].toCamelCase,
              toSentenceCase: () => scope.self["strings"].toSentenceCase,
              typeOf: () => scope.self["strings"].typeOf,
              addContextFrom: () => scope.self["strings"].addContextFrom,
              splitString: () => scope.self["strings"].splitString,
              splitStringBy: () => scope.self["strings"].splitStringBy,
              removePrefix: () => scope.self["strings"].removePrefix,
              removeSuffix: () => scope.self["strings"].removeSuffix,
              versionOlder: () => scope.self["strings"].versionOlder,
              versionAtLeast: () => scope.self["strings"].versionAtLeast,
              getName: () => scope.self["strings"].getName,
              getVersion: () => scope.self["strings"].getVersion,
              match: () => scope.self["strings"].match,
              split: () => scope.self["strings"].split,
              cmakeOptionType: () => scope.self["strings"].cmakeOptionType,
              cmakeBool: () => scope.self["strings"].cmakeBool,
              cmakeFeature: () => scope.self["strings"].cmakeFeature,
              mesonOption: () => scope.self["strings"].mesonOption,
              mesonBool: () => scope.self["strings"].mesonBool,
              mesonEnable: () => scope.self["strings"].mesonEnable,
              nameFromURL: () => scope.self["strings"].nameFromURL,
              enableFeature: () => scope.self["strings"].enableFeature,
              enableFeatureAs: () => scope.self["strings"].enableFeatureAs,
              withFeature: () => scope.self["strings"].withFeature,
              withFeatureAs: () => scope.self["strings"].withFeatureAs,
              fixedWidthString: () => scope.self["strings"].fixedWidthString,
              fixedWidthNumber: () => scope.self["strings"].fixedWidthNumber,
              toInt: () => scope.self["strings"].toInt,
              toIntBase10: () => scope.self["strings"].toIntBase10,
              fileContents: () => scope.self["strings"].fileContents,
              appendContext: () => scope.self["strings"].appendContext,
              unsafeDiscardStringContext: () =>
                scope.self["strings"].unsafeDiscardStringContext,
              textClosureList: () =>
                scope.self["stringsWithDeps"].textClosureList,
              textClosureMap: () =>
                scope.self["stringsWithDeps"].textClosureMap,
              noDepEntry: () => scope.self["stringsWithDeps"].noDepEntry,
              fullDepEntry: () => scope.self["stringsWithDeps"].fullDepEntry,
              packEntry: () => scope.self["stringsWithDeps"].packEntry,
              stringAfter: () => scope.self["stringsWithDeps"].stringAfter,
              overrideDerivation: () =>
                scope.self["customisation"].overrideDerivation,
              makeOverridable: () =>
                scope.self["customisation"].makeOverridable,
              callPackageWith: () =>
                scope.self["customisation"].callPackageWith,
              callPackagesWith: () =>
                scope.self["customisation"].callPackagesWith,
              extendDerivation: () =>
                scope.self["customisation"].extendDerivation,
              hydraJob: () => scope.self["customisation"].hydraJob,
              makeScope: () => scope.self["customisation"].makeScope,
              makeScopeWithSplicing: () =>
                scope.self["customisation"].makeScopeWithSplicing,
              "makeScopeWithSplicing'": () =>
                scope.self["customisation"]["makeScopeWithSplicing'"],
              extendMkDerivation: () =>
                scope.self["customisation"].extendMkDerivation,
              renameCrossIndexFrom: () =>
                scope.self["customisation"].renameCrossIndexFrom,
              renameCrossIndexTo: () =>
                scope.self["customisation"].renameCrossIndexTo,
              mapCrossIndex: () => scope.self["customisation"].mapCrossIndex,
              lazyDerivation: () => scope.self["derivations"].lazyDerivation,
              optionalDrvAttr: () =>
                scope.self["derivations"].optionalDrvAttr,
              warnOnInstantiate: () =>
                scope.self["derivations"].warnOnInstantiate,
              addDrvOutputDependencies: () =>
                scope.self["derivations"].addDrvOutputDependencies,
              unsafeDiscardOutputDependency: () =>
                scope.self["derivations"].unsafeDiscardOutputDependency,
              mkLuaInline: () => scope.self["generators"].mkLuaInline,
              addMetaAttrs: () => scope.self["meta"].addMetaAttrs,
              dontDistribute: () => scope.self["meta"].dontDistribute,
              setName: () => scope.self["meta"].setName,
              updateName: () => scope.self["meta"].updateName,
              appendToName: () => scope.self["meta"].appendToName,
              mapDerivationAttrset: () =>
                scope.self["meta"].mapDerivationAttrset,
              setPrio: () => scope.self["meta"].setPrio,
              lowPrio: () => scope.self["meta"].lowPrio,
              lowPrioSet: () => scope.self["meta"].lowPrioSet,
              hiPrio: () => scope.self["meta"].hiPrio,
              hiPrioSet: () => scope.self["meta"].hiPrioSet,
              licensesSpdx: () => scope.self["meta"].licensesSpdx,
              getLicenseFromSpdxId: () =>
                scope.self["meta"].getLicenseFromSpdxId,
              getLicenseFromSpdxIdOr: () =>
                scope.self["meta"].getLicenseFromSpdxIdOr,
              getExe: () => scope.self["meta"].getExe,
              "getExe'": () => scope.self["meta"]["getExe'"],
              pathType: () => scope.self["filesystem"].pathType,
              pathIsDirectory: () => scope.self["filesystem"].pathIsDirectory,
              pathIsRegularFile: () =>
                scope.self["filesystem"].pathIsRegularFile,
              baseNameOf: () => scope.self["filesystem"].baseNameOf,
              dirOf: () => scope.self["filesystem"].dirOf,
              isPath: () => scope.self["filesystem"].isPath,
              packagesFromDirectoryRecursive: () =>
                scope.self["filesystem"].packagesFromDirectoryRecursive,
              hashFile: () => scope.self["filesystem"].hashFile,
              readDir: () => scope.self["filesystem"].readDir,
              readFileType: () => scope.self["filesystem"].readFileType,
              cleanSourceFilter: () =>
                scope.self["sources"].cleanSourceFilter,
              cleanSource: () => scope.self["sources"].cleanSource,
              sourceByRegex: () => scope.self["sources"].sourceByRegex,
              sourceFilesBySuffices: () =>
                scope.self["sources"].sourceFilesBySuffices,
              commitIdFromGitRepo: () =>
                scope.self["sources"].commitIdFromGitRepo,
              cleanSourceWith: () => scope.self["sources"].cleanSourceWith,
              pathHasContext: () => scope.self["sources"].pathHasContext,
              canCleanSource: () => scope.self["sources"].canCleanSource,
              pathIsGitRepo: () => scope.self["sources"].pathIsGitRepo,
              revOrTag: () => scope.self["sources"].revOrTag,
              repoRevToName: () => scope.self["sources"].repoRevToName,
              filterSource: () => scope.self["sources"].filterSource,
              evalModules: () => scope.self["modules"].evalModules,
              setDefaultModuleLocation: () =>
                scope.self["modules"].setDefaultModuleLocation,
              unifyModuleSyntax: () =>
                scope.self["modules"].unifyModuleSyntax,
              applyModuleArgsIfFunction: () =>
                scope.self["modules"].applyModuleArgsIfFunction,
              mergeModules: () => scope.self["modules"].mergeModules,
              "mergeModules'": () => scope.self["modules"]["mergeModules'"],
              mergeOptionDecls: () => scope.self["modules"].mergeOptionDecls,
              mergeDefinitions: () => scope.self["modules"].mergeDefinitions,
              pushDownProperties: () =>
                scope.self["modules"].pushDownProperties,
              dischargeProperties: () =>
                scope.self["modules"].dischargeProperties,
              filterOverrides: () => scope.self["modules"].filterOverrides,
              sortProperties: () => scope.self["modules"].sortProperties,
              fixupOptionType: () => scope.self["modules"].fixupOptionType,
              mkIf: () => scope.self["modules"].mkIf,
              mkAssert: () => scope.self["modules"].mkAssert,
              mkDefinition: () => scope.self["modules"].mkDefinition,
              mkMerge: () => scope.self["modules"].mkMerge,
              mkOverride: () => scope.self["modules"].mkOverride,
              mkOptionDefault: () => scope.self["modules"].mkOptionDefault,
              mkDefault: () => scope.self["modules"].mkDefault,
              mkImageMediaOverride: () =>
                scope.self["modules"].mkImageMediaOverride,
              mkForce: () => scope.self["modules"].mkForce,
              mkVMOverride: () => scope.self["modules"].mkVMOverride,
              mkFixStrictness: () => scope.self["modules"].mkFixStrictness,
              mkOrder: () => scope.self["modules"].mkOrder,
              mkBefore: () => scope.self["modules"].mkBefore,
              mkAfter: () => scope.self["modules"].mkAfter,
              mkAliasDefinitions: () =>
                scope.self["modules"].mkAliasDefinitions,
              mkAliasAndWrapDefinitions: () =>
                scope.self["modules"].mkAliasAndWrapDefinitions,
              fixMergeModules: () => scope.self["modules"].fixMergeModules,
              mkRemovedOptionModule: () =>
                scope.self["modules"].mkRemovedOptionModule,
              mkRenamedOptionModule: () =>
                scope.self["modules"].mkRenamedOptionModule,
              mkRenamedOptionModuleWith: () =>
                scope.self["modules"].mkRenamedOptionModuleWith,
              mkMergedOptionModule: () =>
                scope.self["modules"].mkMergedOptionModule,
              mkChangedOptionModule: () =>
                scope.self["modules"].mkChangedOptionModule,
              mkAliasOptionModule: () =>
                scope.self["modules"].mkAliasOptionModule,
              mkDerivedConfig: () => scope.self["modules"].mkDerivedConfig,
              doRename: () => scope.self["modules"].doRename,
              mkAliasOptionModuleMD: () =>
                scope.self["modules"].mkAliasOptionModuleMD,
              evalOptionValue: () =>
                scope.apply$(
                  scope.lib["warn"],
                  "External use of `lib.evalOptionValue` is deprecated. If your use case isn't covered by non-deprecated functions, we'd like to know more and perhaps support your use case well, instead of providing access to these low level functions. In this case please open an issue in https://github.com/nixos/nixpkgs/issues/.",
                  () => scope.self["modules"]["evalOptionValue"],
                ),
              isOption: () => scope.self["options"].isOption,
              mkEnableOption: () => scope.self["options"].mkEnableOption,
              mkSinkUndeclaredOptions: () =>
                scope.self["options"].mkSinkUndeclaredOptions,
              mergeDefaultOption: () =>
                scope.self["options"].mergeDefaultOption,
              mergeOneOption: () => scope.self["options"].mergeOneOption,
              mergeEqualOption: () => scope.self["options"].mergeEqualOption,
              mergeUniqueOption: () =>
                scope.self["options"].mergeUniqueOption,
              getValues: () => scope.self["options"].getValues,
              getFiles: () => scope.self["options"].getFiles,
              optionAttrSetToDocList: () =>
                scope.self["options"].optionAttrSetToDocList,
              "optionAttrSetToDocList'": () =>
                scope.self["options"]["optionAttrSetToDocList'"],
              scrubOptionValue: () => scope.self["options"].scrubOptionValue,
              literalExpression: () =>
                scope.self["options"].literalExpression,
              showOption: () => scope.self["options"].showOption,
              showOptionWithDefLocs: () =>
                scope.self["options"].showOptionWithDefLocs,
              showFiles: () => scope.self["options"].showFiles,
              unknownModule: () => scope.self["options"].unknownModule,
              mkOption: () => scope.self["options"].mkOption,
              mkPackageOption: () => scope.self["options"].mkPackageOption,
              literalMD: () => scope.self["options"].literalMD,
              isType: () => scope.self["types"].isType,
              setType: () => scope.self["types"].setType,
              defaultTypeMerge: () => scope.self["types"].defaultTypeMerge,
              defaultFunctor: () => scope.self["types"].defaultFunctor,
              isOptionType: () => scope.self["types"].isOptionType,
              mkOptionType: () => scope.self["types"].mkOptionType,
              assertMsg: () => scope.self["asserts"].assertMsg,
              assertOneOf: () => scope.self["asserts"].assertOneOf,
              trace: () => scope.self["debug"].trace,
              traceIf: () => scope.self["debug"].traceIf,
              traceVal: () => scope.self["debug"].traceVal,
              traceValFn: () => scope.self["debug"].traceValFn,
              traceSeq: () => scope.self["debug"].traceSeq,
              traceSeqN: () => scope.self["debug"].traceSeqN,
              traceValSeq: () => scope.self["debug"].traceValSeq,
              traceValSeqFn: () => scope.self["debug"].traceValSeqFn,
              traceValSeqN: () => scope.self["debug"].traceValSeqN,
              traceValSeqNFn: () => scope.self["debug"].traceValSeqNFn,
              traceFnSeqN: () => scope.self["debug"].traceFnSeqN,
              addErrorContext: () => scope.self["debug"].addErrorContext,
              unsafeGetAttrPos: () => scope.self["debug"].unsafeGetAttrPos,
              runTests: () => scope.self["debug"].runTests,
              testAllTrue: () => scope.self["debug"].testAllTrue,
              maybeEnv: () => scope.self["misc"].maybeEnv,
              defaultMergeArg: () => scope.self["misc"].defaultMergeArg,
              defaultMerge: () => scope.self["misc"].defaultMerge,
              foldArgs: () => scope.self["misc"].foldArgs,
              maybeAttrNullable: () => scope.self["misc"].maybeAttrNullable,
              maybeAttr: () => scope.self["misc"].maybeAttr,
              ifEnable: () => scope.self["misc"].ifEnable,
              checkFlag: () => scope.self["misc"].checkFlag,
              getValue: () => scope.self["misc"].getValue,
              checkReqs: () => scope.self["misc"].checkReqs,
              uniqList: () => scope.self["misc"].uniqList,
              uniqListExt: () => scope.self["misc"].uniqListExt,
              condConcat: () => scope.self["misc"].condConcat,
              lazyGenericClosure: () => scope.self["misc"].lazyGenericClosure,
              innerModifySumArgs: () => scope.self["misc"].innerModifySumArgs,
              modifySumArgs: () => scope.self["misc"].modifySumArgs,
              innerClosePropagation: () =>
                scope.self["misc"].innerClosePropagation,
              closePropagation: () => scope.self["misc"].closePropagation,
              nvs: () => scope.self["misc"].nvs,
              setAttr: () => scope.self["misc"].setAttr,
              setAttrMerge: () => scope.self["misc"].setAttrMerge,
              mergeAttrsWithFunc: () => scope.self["misc"].mergeAttrsWithFunc,
              mergeAttrsConcatenateValues: () =>
                scope.self["misc"].mergeAttrsConcatenateValues,
              mergeAttrsNoOverride: () =>
                scope.self["misc"].mergeAttrsNoOverride,
              mergeAttrByFunc: () => scope.self["misc"].mergeAttrByFunc,
              mergeAttrsByFuncDefaults: () =>
                scope.self["misc"].mergeAttrsByFuncDefaults,
              mergeAttrsByFuncDefaultsClean: () =>
                scope.self["misc"].mergeAttrsByFuncDefaultsClean,
              mergeAttrBy: () => scope.self["misc"].mergeAttrBy,
              fakeHash: () => scope.self["misc"].fakeHash,
              fakeSha256: () => scope.self["misc"].fakeSha256,
              fakeSha512: () => scope.self["misc"].fakeSha512,
              nixType: () => scope.self["misc"].nixType,
              imap: () => scope.self["misc"].imap,
              compareVersions: () => scope.self["versions"].compareVersions,
              splitVersion: () => scope.self["versions"].splitVersion,
              mkEUI64Suffix: () =>
                scope.self["network"]["ipv6"].mkEUI64Suffix,
              parseFlakeRef: () => scope.self["flakes"].parseFlakeRef,
              flakeRefToString: () => scope.self["flakes"].flakeRefToString,
            }))),
    }).in$((scope) =>
      scope.lib
    )
  ),
);
