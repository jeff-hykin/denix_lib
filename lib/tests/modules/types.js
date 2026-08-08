import { nixFile } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js"

export default nixFile(new URL("./types.nix", import.meta.url).pathname, ({ scope }) => (
//
//
//
scope.func$({ lib: scope.nixArg$.NoDefault, "...": scope.nixArg$.Ellipsis }, (scope)=>scope.let$({
    storeDir: (scope)=>scope.builtins["storeDir"],
    types: (scope)=>scope.lib["types"],
    mkOption: (scope)=>scope.lib["mkOption"],
}).in$((scope)=>scope.attrSet$({
    options: ()=>scope.attrSet$({
    pathInStore: ()=>scope.apply$(scope.mkOption, ()=>scope.attrSet$({
    type: ()=>scope.apply$(scope.types["lazyAttrsOf"], ()=>scope.types["pathInStore"]),
})),
    externalPath: ()=>scope.apply$(scope.mkOption, ()=>scope.attrSet$({
    type: ()=>scope.apply$(scope.types["lazyAttrsOf"], ()=>scope.types["externalPath"]),
})),
    nullableValue: ()=>scope.apply$(scope.mkOption, ()=>scope.attrSet$({
    type: ()=>scope.apply$(scope.types["attrsOf"], ()=>scope.apply$(scope.types["serializableValueWith"], { typeName: "VAL" })),
})),
    structuredValue: ()=>scope.apply$(scope.mkOption, ()=>scope.attrSet$({
    type: ()=>scope.apply$(scope.types["attrsOf"], ()=>scope.apply$(scope.types["serializableValueWith"], { typeName: "VAL", nullable: false })),
})),
    assertions: ()=>scope.apply$(scope.mkOption, {}),
}),
    config: ()=>scope.attrSet$({
    ...scope.deepSet$(["pathInStore", "ok1"], ()=>scope.str$(()=>[scope.storeDir, "/0lz9p8xhf89kb1c1kk6jxrzskaiygnlh-bash-5.2-p15.drv"])),
    ...scope.deepSet$(["pathInStore", "ok2"], ()=>scope.str$(()=>[scope.storeDir, "/0fb3ykw9r5hpayd05sr0cizwadzq1d8q-bash-5.2-p15"])),
    ...scope.deepSet$(["pathInStore", "ok3"], ()=>scope.str$(()=>[scope.storeDir, "/0fb3ykw9r5hpayd05sr0cizwadzq1d8q-bash-5.2-p15/bin/bash"])),
    ...scope.deepSet$(["pathInStore", "bad1"], ""),
    ...scope.deepSet$(["pathInStore", "bad2"], ()=>scope.str$(()=>[scope.storeDir])),
    ...scope.deepSet$(["pathInStore", "bad3"], ()=>scope.str$(()=>[scope.storeDir, "/"])),
    ...scope.deepSet$(["pathInStore", "bad4"], ()=>scope.str$(()=>[scope.storeDir, "/.links"])),
    ...scope.deepSet$(["pathInStore", "bad5"], "/foo/bar"),
    ...scope.deepSet$(["externalPath", "bad1"], ()=>scope.str$(()=>[scope.storeDir, "/0lz9p8xhf89kb1c1kk6jxrzskaiygnlh-bash-5.2-p15.drv"])),
    ...scope.deepSet$(["externalPath", "bad2"], ()=>scope.str$(()=>[scope.storeDir, "/0fb3ykw9r5hpayd05sr0cizwadzq1d8q-bash-5.2-p15"])),
    ...scope.deepSet$(["externalPath", "bad3"], ()=>scope.str$(()=>[scope.storeDir, "/0fb3ykw9r5hpayd05sr0cizwadzq1d8q-bash-5.2-p15/bin/bash"])),
    ...scope.deepSet$(["externalPath", "bad4"], ""),
    ...scope.deepSet$(["externalPath", "bad5"], "./foo/bar"),
    ...scope.deepSet$(["externalPath", "ok1"], "/foo/bar"),
    ...scope.deepSet$(["externalPath", "ok2"], "/"),
    ...scope.deepSet$(["nullableValue", "null"], null),
    ...scope.deepSet$(["nullableValue", "bool"], true),
    ...scope.deepSet$(["nullableValue", "int"], 1n),
    ...scope.deepSet$(["nullableValue", "float"], 1.1),
    ...scope.deepSet$(["nullableValue", "str"], "foo"),
    ...scope.deepSet$(["nullableValue", "path"], (new scope.Path$([new URL("../modules", import.meta.url).pathname], []))),
    ...scope.deepSet$(["nullableValue", "attrs"], { foo: 1n }),
    ...scope.deepSet$(["nullableValue", "list"], [{ bar: [1n] }]),
    ...scope.deepSet$(["nullableValue", "lambda"], ()=>scope.func$("x", (scope)=>scope.x)),
    ...scope.deepSet$(["structuredValue", "null"], null),
    assertions: ()=>scope.with$(()=>scope.lib["types"], (scope)=>((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "str.description == \"string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "int.description == \"signed integer\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsOf str).description == \"attribute set of string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsOf (attrsOf str)).description == \"attribute set of attribute set of string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(oneOf [\n          (attrsOf str)\n          int\n          bool\n        ]).description == \"(attribute set of string) or signed integer or boolean\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(enum [\n          true\n          null\n          false\n        ]).description == \"one of true, <null>, false\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(submodule { freeformType = attrsOf str");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsOf int).description == \"attribute set of signed integer\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsOf bool).description == \"attribute set of boolean\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsOf (either int str)).description == \"attribute set of (signed integer or string)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsOf (nullOr str)).description == \"attribute set of (null or string)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsOf (listOf str)).description == \"attribute set of list of string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsOf (attrsOf int)).description == \"attribute set of attribute set of signed integer\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsOf ints.positive).description == \"attribute set of (positive integer, meaning >0)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsOf (enum [\n          \"a\"\n          \"b\"\n        ])).description == \"attribute set of (one of \\\"a\\\", \\\"b\\\")\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsOf (strMatching \"[0-9]+\")).description\n        == \"attribute set of string matching the pattern [0-9]+\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsOf (nonEmptyListOf str)).description == \"attribute set of non-empty (list of string)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsOf (oneOf [\n          str\n          int\n        ])).description == \"attribute set of (string or signed integer)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsOf (coercedTo str abort int)).description\n        == \"attribute set of (signed integer or string convertible to it)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsOf (functionTo str)).description == \"attribute set of function that evaluates to a(n) string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsOf (passwdEntry str)).description\n        == \"attribute set of (string, not containing newlines or colons)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsOf (uniq str)).description == \"attribute set of string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsOf (unique { message = \"test\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsOf (pathWith {\n          absolute = true");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsOf (separatedString \",\")).description == \"attribute set of strings concatenated with \\\",\\\"\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsOf (loaOf str)).description == \"attribute set of attribute set of string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsOf (lazyAttrsOf str)).description == \"attribute set of lazy attribute set of string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsOf (submodule { })).description == \"attribute set of (submodule)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsOf (submodule {\n          freeformType = attrsOf str");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsOf (addCheck str (x: true))).description == \"attribute set of string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsOf (enum [ ])).description == \"attribute set of impossible (empty enum)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsOf ints.u32).description\n        == \"attribute set of 32 bit unsigned integer");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsOf numbers.positive).description\n        == \"attribute set of (positive integer or floating point number, meaning >0)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsWith { elemType = str");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsWith { elemType = int");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsWith { elemType = bool");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsWith { elemType = either int str");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsWith { elemType = nullOr str");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsWith { elemType = listOf str");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsWith { elemType = attrsOf int");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsWith { elemType = ints.positive");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsWith {\n          elemType = str");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrsWith {\n          elemType = str");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrListOf str).description == \"attribute list of string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrListOf int).description == \"attribute list of signed integer\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrListOf bool).description == \"attribute list of boolean\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrListOf (either int str)).description == \"attribute list of (signed integer or string)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrListOf (nullOr str)).description == \"attribute list of (null or string)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrListOf (listOf str)).description == \"attribute list of list of string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrListOf (attrsOf int)).description == \"attribute list of attribute set of signed integer\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrListOf (attrListOf str)).description == \"attribute list of attribute list of string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrListOf ints.positive).description == \"attribute list of (positive integer, meaning >0)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrListOf (enum [\n          \"a\"\n          \"b\"\n        ])).description == \"attribute list of (one of \\\"a\\\", \\\"b\\\")\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrListOf (strMatching \"[0-9]+\")).description\n        == \"attribute list of string matching the pattern [0-9]+\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrListOf (nonEmptyListOf str)).description == \"attribute list of non-empty (list of string)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(attrListOf (submodule { })).description == \"attribute list of (submodule)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(coercedTo str abort int).description == \"signed integer or string convertible to it\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(coercedTo int abort str).description == \"string or signed integer convertible to it\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(coercedTo bool abort str).description == \"string or boolean convertible to it\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(coercedTo (either int str) abort str).description\n        == \"string or (signed integer or string) convertible to it\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(coercedTo (nullOr str) abort str).description == \"string or (null or string) convertible to it\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(coercedTo (listOf str) abort str).description == \"string or (list of string) convertible to it\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(coercedTo (attrsOf int) abort str).description\n        == \"string or (attribute set of signed integer) convertible to it\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(coercedTo ints.positive abort str).description\n        == \"string or (positive integer, meaning >0) convertible to it\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(coercedTo (listOf str) abort (attrsOf str)).description\n        == \"(attribute set of string) or (list of string) convertible to it\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either str int).description == \"string or signed integer\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either int str).description == \"signed integer or string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either bool str).description == \"boolean or string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either (either int str) bool).description == \"signed integer or string or boolean\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either (nullOr str) int).description == \"null or string or signed integer\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either (listOf str) int).description == \"(list of string) or signed integer\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either (attrsOf int) str).description == \"(attribute set of signed integer) or string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either ints.positive str).description == \"positive integer, meaning >0, or string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either (either bool str) int).description == \"boolean or string or signed integer\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either bool str).description == \"boolean or string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either bool int).description == \"boolean or signed integer\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either bool (enum [\n          \"a\"\n          \"b\"\n        ])).description == \"boolean or one of \\\"a\\\", \\\"b\\\"\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either bool (strMatching \"[0-9]+\")).description == \"boolean or string matching the pattern [0-9]+\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either bool (nonEmptyListOf str)).description == \"boolean or non-empty (list of string)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either bool (oneOf [\n          str\n          int\n        ])).description == \"boolean or string or signed integer\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either bool (coercedTo str abort int)).description\n        == \"boolean or (signed integer or string convertible to it)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either bool (functionTo str)).description == \"boolean or function that evaluates to a(n) string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either bool (passwdEntry str)).description\n        == \"boolean or (string, not containing newlines or colons)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either bool (uniq str)).description == \"boolean or string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either bool (unique { message = \"test\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either bool (pathWith {\n          absolute = true");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either bool (separatedString \",\")).description == \"boolean or strings concatenated with \\\",\\\"\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either bool (attrsOf str)).description == \"boolean or attribute set of string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either bool (listOf str)).description == \"boolean or list of string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either bool (nullOr str)).description == \"boolean or null or string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either bool (lazyAttrsOf str)).description == \"boolean or lazy attribute set of string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either bool (submodule { })).description == \"boolean or (submodule)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either bool ints.positive).description == \"boolean or (positive integer, meaning >0)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either bool numbers.positive).description\n        == \"boolean or (positive integer or floating point number, meaning >0)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either str bool).description == \"string or boolean\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either int bool).description == \"signed integer or boolean\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either (enum [\n          \"a\"\n          \"b\"\n        ]) bool).description == \"one of \\\"a\\\", \\\"b\\\" or boolean\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either (strMatching \"[0-9]+\") bool).description == \"string matching the pattern [0-9]+ or boolean\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either (nonEmptyListOf str) bool).description == \"(non-empty (list of string)) or boolean\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either (oneOf [\n          str\n          int\n        ]) bool).description == \"string or signed integer or boolean\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either (coercedTo str abort int) bool).description\n        == \"(signed integer or string convertible to it) or boolean\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either (functionTo str) bool).description == \"(function that evaluates to a(n) string) or boolean\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either (passwdEntry str) bool).description\n        == \"string, not containing newlines or colons, or boolean\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either (uniq str) bool).description == \"string or boolean\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either (unique { message = \"test\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either (pathWith { absolute = true");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either (separatedString \",\") bool).description == \"strings concatenated with \\\",\\\" or boolean\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either (attrsOf str) bool).description == \"(attribute set of string) or boolean\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either (listOf str) bool).description == \"(list of string) or boolean\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either (nullOr str) bool).description == \"null or string or boolean\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either (lazyAttrsOf str) bool).description == \"(lazy attribute set of string) or boolean\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either (submodule { }) bool).description == \"(submodule) or boolean\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either ints.positive bool).description == \"positive integer, meaning >0, or boolean\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(either numbers.positive bool).description\n        == \"positive integer or floating point number, meaning >0, or boolean\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(enum [ ]).description == \"impossible (empty enum)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(enum [ \"single\" ]).description == \"value \\\"single\\\" (singular enum)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(enum [\n          \"a\"\n          \"b\"\n        ]).description == \"one of \\\"a\\\", \\\"b\\\"\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(enum [\n          true\n          false\n        ]).description == \"one of true, false\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(enum [\n          1\n          2\n          3\n        ]).description == \"one of 1, 2, 3\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(enum [ null ]).description == \"value <null> (singular enum)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(functionTo str).description == \"function that evaluates to a(n) string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(functionTo int).description == \"function that evaluates to a(n) signed integer\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(functionTo bool).description == \"function that evaluates to a(n) boolean\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(functionTo (either int str)).description\n        == \"function that evaluates to a(n) (signed integer or string)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(functionTo (nullOr str)).description == \"function that evaluates to a(n) (null or string)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(functionTo (listOf str)).description == \"function that evaluates to a(n) list of string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(functionTo (attrsOf int)).description\n        == \"function that evaluates to a(n) attribute set of signed integer\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(functionTo ints.positive).description\n        == \"function that evaluates to a(n) (positive integer, meaning >0)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(lazyAttrsOf str).description == \"lazy attribute set of string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(lazyAttrsOf int).description == \"lazy attribute set of signed integer\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(lazyAttrsOf bool).description == \"lazy attribute set of boolean\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(lazyAttrsOf (either int str)).description == \"lazy attribute set of (signed integer or string)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(lazyAttrsOf (nullOr str)).description == \"lazy attribute set of (null or string)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(lazyAttrsOf (listOf str)).description == \"lazy attribute set of list of string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(lazyAttrsOf (attrsOf int)).description == \"lazy attribute set of attribute set of signed integer\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(lazyAttrsOf ints.positive).description == \"lazy attribute set of (positive integer, meaning >0)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(listOf str).description == \"list of string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(listOf int).description == \"list of signed integer\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(listOf bool).description == \"list of boolean\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(listOf (either int str)).description == \"list of (signed integer or string)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(listOf (nullOr str)).description == \"list of (null or string)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(listOf (listOf str)).description == \"list of list of string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(listOf (attrsOf int)).description == \"list of attribute set of signed integer\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(listOf ints.positive).description == \"list of (positive integer, meaning >0)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(loaOf str).description == \"attribute set of string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(loaOf int).description == \"attribute set of signed integer\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(loaOf bool).description == \"attribute set of boolean\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(loaOf (either int str)).description == \"attribute set of (signed integer or string)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(loaOf (nullOr str)).description == \"attribute set of (null or string)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(loaOf (listOf str)).description == \"attribute set of list of string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(loaOf (attrsOf int)).description == \"attribute set of attribute set of signed integer\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(loaOf ints.positive).description == \"attribute set of (positive integer, meaning >0)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(nonEmptyListOf str).description == \"non-empty (list of string)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(nonEmptyListOf int).description == \"non-empty (list of signed integer)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(nonEmptyListOf bool).description == \"non-empty (list of boolean)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(nonEmptyListOf (either int str)).description == \"non-empty (list of (signed integer or string))\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(nonEmptyListOf (nullOr str)).description == \"non-empty (list of (null or string))\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(nonEmptyListOf (listOf str)).description == \"non-empty (list of list of string)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(nonEmptyListOf (attrsOf int)).description\n        == \"non-empty (list of attribute set of signed integer)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(nonEmptyListOf ints.positive).description == \"non-empty (list of (positive integer, meaning >0))\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(nullOr str).description == \"null or string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(nullOr int).description == \"null or signed integer\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(nullOr bool).description == \"null or boolean\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(nullOr (either int str)).description == \"null or signed integer or string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(nullOr (nullOr str)).description == \"null or null or string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(nullOr (listOf str)).description == \"null or (list of string)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(nullOr (attrsOf int)).description == \"null or (attribute set of signed integer)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(nullOr ints.positive).description == \"null or (positive integer, meaning >0)\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(oneOf [ str ]).description == \"string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(oneOf [ int ]).description == \"signed integer\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(oneOf [ bool ]).description == \"boolean\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(oneOf [ (either int str) ]).description == \"signed integer or string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(oneOf [ (nullOr str) ]).description == \"null or string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(oneOf [ (listOf str) ]).description == \"list of string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(oneOf [ (attrsOf int) ]).description == \"attribute set of signed integer\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(oneOf [ ints.positive ]).description == \"positive integer, meaning >0\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(oneOf [\n          str\n          int\n        ]).description == \"string or signed integer\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(oneOf [\n          str\n          int\n          bool\n        ]).description == \"string or signed integer or boolean\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(oneOf [\n          (listOf str)\n          int\n          bool\n        ]).description == \"(list of string) or signed integer or boolean\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(oneOf [\n          ints.positive\n          str\n        ]).description == \"positive integer, meaning >0, or string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(passwdEntry str).description == \"string, not containing newlines or colons\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(passwdEntry int).description == \"signed integer, not containing newlines or colons\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(passwdEntry bool).description == \"boolean, not containing newlines or colons\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(passwdEntry (either int str)).description\n        == \"(signed integer or string), not containing newlines or colons\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(passwdEntry (nullOr str)).description == \"(null or string), not containing newlines or colons\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(passwdEntry (listOf str)).description == \"(list of string), not containing newlines or colons\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(passwdEntry (attrsOf int)).description\n        == \"(attribute set of signed integer), not containing newlines or colons\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(passwdEntry ints.positive).description\n        == \"(positive integer, meaning >0), not containing newlines or colons\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(pathWith { }).description == \"path\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(pathWith { absolute = true");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(pathWith { inStore = true");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(pathWith {\n          absolute = true");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(pathWith { absolute = false");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(pathWith { absolute = null");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(pathWith { inStore = false");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(pathWith { inStore = null");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(separatedString \"\").description == \"strings concatenated with \\\"\\\"\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(separatedString \",\").description == \"strings concatenated with \\\",\\\"\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(separatedString \"\\n\").description == ''strings concatenated with \"\\n\"''");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(separatedString \":\").description == \"strings concatenated with \\\":\\\"\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(strMatching \"[a-z]+\").description == \"string matching the pattern [a-z]+\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(strMatching \"[0-9]{3}-[0-9]{2}-[0-9]{4}\").description\n        == \"string matching the pattern [0-9]{3}-[0-9]{2}-[0-9]{4}\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(strMatching \".*\\\\.txt\").description == \"string matching the pattern .*\\\\.txt\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(submodule { freeformType = attrsOf int");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(submodule { freeformType = attrsOf bool");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(submodule { freeformType = attrsOf (either int str)");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(submodule { freeformType = attrsOf (nullOr str)");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(submodule { freeformType = listOf str");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(submodule { freeformType = attrsOf ints.positive");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(submodule { freeformType = lazyAttrsOf str");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(submodule { freeformType = lazyAttrsOf int");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(submodule { freeformType = lazyAttrsOf (listOf str)");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(submodule { }).description == \"submodule\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(submodule [ { options.foo = mkOption { type = str");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(submodule [ ]).description == \"submodule\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(submodule [ { freeformType = attrsOf str");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(submodule [ { freeformType = lazyAttrsOf str");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(submodule [ { freeformType = lazyAttrsOf int");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(submodule [ { freeformType = lazyAttrsOf (either int str)");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(submoduleWith { modules = [ { freeformType = attrsOf str");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(submoduleWith { modules = [ { freeformType = attrsOf int");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(submoduleWith { modules = [ { freeformType = attrsOf bool");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(submoduleWith { modules = [ { freeformType = attrsOf (either int str)");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(submoduleWith { modules = [ { freeformType = attrsOf (nullOr str)");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(submoduleWith { modules = [ { freeformType = listOf str");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(submoduleWith { modules = [ { freeformType = lazyAttrsOf str");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(submoduleWith { modules = [ { freeformType = lazyAttrsOf int");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(submoduleWith { modules = [ { freeformType = lazyAttrsOf (either int str)");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(submoduleWith { modules = [ { freeformType = attrsOf ints.positive");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(submoduleWith { modules = [ ]");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(submoduleWith {\n          modules = [ ]");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(submoduleWith {\n          modules = [ ]");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(uniq str).description == \"string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(uniq (either int str)).description == \"signed integer or string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(uniq (listOf str)).description == \"list of string\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(unique { message = \"test\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(unique { message = \"\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(unique { message = \"custom\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(unique { message = \"test\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "(unique { message = \"test\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "json.description == \"JSON value\"");
    }
    return ((_cond)=>{
    if (!_cond) {
        throw new Error("assertion failed: " + "toml.description == \"TOML value\"");
    }
    return "ok";
})(scope.operators$.equal(scope.toml["description"], "TOML value"));
})(scope.operators$.equal(scope.json["description"], "JSON value"));
})(scope.operators$.equal(scope.apply$(scope.unique, { message: "test" }, ()=>scope.apply$(scope.listOf, ()=>scope.str))["description"], "list of string"));
})(scope.operators$.equal(scope.apply$(scope.unique, { message: "test" }, ()=>scope.apply$(scope.either, ()=>scope.int, ()=>scope.str))["description"], "signed integer or string"));
})(scope.operators$.equal(scope.apply$(scope.unique, { message: "custom" }, ()=>scope.apply$(scope.listOf, ()=>scope.str))["description"], "list of string"));
})(scope.operators$.equal(scope.apply$(scope.unique, { message: "" }, ()=>scope.apply$(scope.either, ()=>scope.int, ()=>scope.str))["description"], "signed integer or string"));
})(scope.operators$.equal(scope.apply$(scope.unique, { message: "test" }, ()=>scope.str)["description"], "string"));
})(scope.operators$.equal(scope.apply$(scope.uniq, ()=>scope.apply$(scope.listOf, ()=>scope.str))["description"], "list of string"));
})(scope.operators$.equal(scope.apply$(scope.uniq, ()=>scope.apply$(scope.either, ()=>scope.int, ()=>scope.str))["description"], "signed integer or string"));
})(scope.operators$.equal(scope.apply$(scope.uniq, ()=>scope.str)["description"], "string"));
})(scope.operators$.equal(scope.apply$(scope.submoduleWith, { modules: [], description: "custom module" })["description"], "custom module"));
})(scope.operators$.equal(scope.apply$(scope.submoduleWith, { modules: [], description: "custom" })["description"], "custom"));
})(scope.operators$.equal(scope.apply$(scope.submoduleWith, { modules: [] })["description"], "submodule"));
})(scope.operators$.equal(scope.apply$(scope.submoduleWith, ()=>scope.attrSet$({
    modules: ()=>[scope.attrSet$({
    freeformType: ()=>scope.apply$(scope.attrsOf, ()=>scope.ints["positive"]),
})],
}))["description"], "open submodule of attribute set of (positive integer, meaning >0)"));
})(scope.operators$.equal(scope.apply$(scope.submoduleWith, ()=>scope.attrSet$({
    modules: ()=>[scope.attrSet$({
    freeformType: ()=>scope.apply$(scope.lazyAttrsOf, ()=>scope.apply$(scope.either, ()=>scope.int, ()=>scope.str)),
})],
}))["description"], "open submodule of lazy attribute set of (signed integer or string)"));
})(scope.operators$.equal(scope.apply$(scope.submoduleWith, ()=>scope.attrSet$({
    modules: ()=>[scope.attrSet$({
    freeformType: ()=>scope.apply$(scope.lazyAttrsOf, ()=>scope.int),
})],
}))["description"], "open submodule of lazy attribute set of signed integer"));
})(scope.operators$.equal(scope.apply$(scope.submoduleWith, ()=>scope.attrSet$({
    modules: ()=>[scope.attrSet$({
    freeformType: ()=>scope.apply$(scope.lazyAttrsOf, ()=>scope.str),
})],
}))["description"], "open submodule of lazy attribute set of string"));
})(scope.operators$.equal(scope.apply$(scope.submoduleWith, ()=>scope.attrSet$({
    modules: ()=>[scope.attrSet$({
    freeformType: ()=>scope.apply$(scope.listOf, ()=>scope.str),
})],
}))["description"], "open submodule of list of string"));
})(scope.operators$.equal(scope.apply$(scope.submoduleWith, ()=>scope.attrSet$({
    modules: ()=>[scope.attrSet$({
    freeformType: ()=>scope.apply$(scope.attrsOf, ()=>scope.apply$(scope.nullOr, ()=>scope.str)),
})],
}))["description"], "open submodule of attribute set of (null or string)"));
})(scope.operators$.equal(scope.apply$(scope.submoduleWith, ()=>scope.attrSet$({
    modules: ()=>[scope.attrSet$({
    freeformType: ()=>scope.apply$(scope.attrsOf, ()=>scope.apply$(scope.either, ()=>scope.int, ()=>scope.str)),
})],
}))["description"], "open submodule of attribute set of (signed integer or string)"));
})(scope.operators$.equal(scope.apply$(scope.submoduleWith, ()=>scope.attrSet$({
    modules: ()=>[scope.attrSet$({
    freeformType: ()=>scope.apply$(scope.attrsOf, ()=>scope.bool),
})],
}))["description"], "open submodule of attribute set of boolean"));
})(scope.operators$.equal(scope.apply$(scope.submoduleWith, ()=>scope.attrSet$({
    modules: ()=>[scope.attrSet$({
    freeformType: ()=>scope.apply$(scope.attrsOf, ()=>scope.int),
})],
}))["description"], "open submodule of attribute set of signed integer"));
})(scope.operators$.equal(scope.apply$(scope.submoduleWith, ()=>scope.attrSet$({
    modules: ()=>[scope.attrSet$({
    freeformType: ()=>scope.apply$(scope.attrsOf, ()=>scope.str),
})],
}))["description"], "open submodule of attribute set of string"));
})(scope.operators$.equal(scope.apply$(scope.submodule, ()=>[scope.attrSet$({
    freeformType: ()=>scope.apply$(scope.lazyAttrsOf, ()=>scope.apply$(scope.either, ()=>scope.int, ()=>scope.str)),
})])["description"], "open submodule of lazy attribute set of (signed integer or string)"));
})(scope.operators$.equal(scope.apply$(scope.submodule, ()=>[scope.attrSet$({
    freeformType: ()=>scope.apply$(scope.lazyAttrsOf, ()=>scope.int),
})])["description"], "open submodule of lazy attribute set of signed integer"));
})(scope.operators$.equal(scope.apply$(scope.submodule, ()=>[scope.attrSet$({
    freeformType: ()=>scope.apply$(scope.lazyAttrsOf, ()=>scope.str),
})])["description"], "open submodule of lazy attribute set of string"));
})(scope.operators$.equal(scope.apply$(scope.submodule, ()=>[scope.attrSet$({
    freeformType: ()=>scope.apply$(scope.attrsOf, ()=>scope.str),
})])["description"], "open submodule of attribute set of string"));
})(scope.operators$.equal(scope.apply$(scope.submodule, [])["description"], "submodule"));
})(scope.operators$.equal(scope.apply$(scope.submodule, ()=>[scope.attrSet$({
    ...scope.deepSet$(["options", "foo"], ()=>scope.apply$(scope.mkOption, ()=>scope.attrSet$({
    type: ()=>scope.str,
}))),
})])["description"], "submodule"));
})(scope.operators$.equal(scope.apply$(scope.submodule, {})["description"], "submodule"));
})(scope.operators$.equal(scope.apply$(scope.submodule, ()=>scope.attrSet$({
    freeformType: ()=>scope.apply$(scope.lazyAttrsOf, ()=>scope.apply$(scope.listOf, ()=>scope.str)),
}))["description"], "open submodule of lazy attribute set of list of string"));
})(scope.operators$.equal(scope.apply$(scope.submodule, ()=>scope.attrSet$({
    freeformType: ()=>scope.apply$(scope.lazyAttrsOf, ()=>scope.int),
}))["description"], "open submodule of lazy attribute set of signed integer"));
})(scope.operators$.equal(scope.apply$(scope.submodule, ()=>scope.attrSet$({
    freeformType: ()=>scope.apply$(scope.lazyAttrsOf, ()=>scope.str),
}))["description"], "open submodule of lazy attribute set of string"));
})(scope.operators$.equal(scope.apply$(scope.submodule, ()=>scope.attrSet$({
    freeformType: ()=>scope.apply$(scope.attrsOf, ()=>scope.ints["positive"]),
}))["description"], "open submodule of attribute set of (positive integer, meaning >0)"));
})(scope.operators$.equal(scope.apply$(scope.submodule, ()=>scope.attrSet$({
    freeformType: ()=>scope.apply$(scope.listOf, ()=>scope.str),
}))["description"], "open submodule of list of string"));
})(scope.operators$.equal(scope.apply$(scope.submodule, ()=>scope.attrSet$({
    freeformType: ()=>scope.apply$(scope.attrsOf, ()=>scope.apply$(scope.nullOr, ()=>scope.str)),
}))["description"], "open submodule of attribute set of (null or string)"));
})(scope.operators$.equal(scope.apply$(scope.submodule, ()=>scope.attrSet$({
    freeformType: ()=>scope.apply$(scope.attrsOf, ()=>scope.apply$(scope.either, ()=>scope.int, ()=>scope.str)),
}))["description"], "open submodule of attribute set of (signed integer or string)"));
})(scope.operators$.equal(scope.apply$(scope.submodule, ()=>scope.attrSet$({
    freeformType: ()=>scope.apply$(scope.attrsOf, ()=>scope.bool),
}))["description"], "open submodule of attribute set of boolean"));
})(scope.operators$.equal(scope.apply$(scope.submodule, ()=>scope.attrSet$({
    freeformType: ()=>scope.apply$(scope.attrsOf, ()=>scope.int),
}))["description"], "open submodule of attribute set of signed integer"));
})(scope.operators$.equal(scope.apply$(scope.strMatching, ".*\\.txt")["description"], "string matching the pattern .*\\.txt"));
})(scope.operators$.equal(scope.apply$(scope.strMatching, "[0-9]{3}-[0-9]{2}-[0-9]{4}")["description"], "string matching the pattern [0-9]{3}-[0-9]{2}-[0-9]{4}"));
})(scope.operators$.equal(scope.apply$(scope.strMatching, "[a-z]+")["description"], "string matching the pattern [a-z]+"));
})(scope.operators$.equal(scope.apply$(scope.separatedString, ":")["description"], "strings concatenated with \":\""));
})(scope.operators$.equal(scope.apply$(scope.separatedString, "\n")["description"], "strings concatenated with \"\\n\""));
})(scope.operators$.equal(scope.apply$(scope.separatedString, ",")["description"], "strings concatenated with \",\""));
})(scope.operators$.equal(scope.apply$(scope.separatedString, "")["description"], "strings concatenated with \"\""));
})(scope.operators$.equal(scope.apply$(scope.pathWith, { inStore: null })["description"], "path"));
})(scope.operators$.equal(scope.apply$(scope.pathWith, { inStore: false })["description"], "path not in the Nix store"));
})(scope.operators$.equal(scope.apply$(scope.pathWith, { absolute: null })["description"], "path"));
})(scope.operators$.equal(scope.apply$(scope.pathWith, { absolute: false })["description"], "relative path"));
})(scope.operators$.equal(scope.apply$(scope.pathWith, { absolute: true, inStore: true })["description"], "absolute path in the Nix store"));
})(scope.operators$.equal(scope.apply$(scope.pathWith, { inStore: true })["description"], "path in the Nix store"));
})(scope.operators$.equal(scope.apply$(scope.pathWith, { absolute: true })["description"], "absolute path"));
})(scope.operators$.equal(scope.apply$(scope.pathWith, {})["description"], "path"));
})(scope.operators$.equal(scope.apply$(scope.passwdEntry, ()=>scope.ints["positive"])["description"], "(positive integer, meaning >0), not containing newlines or colons"));
})(scope.operators$.equal(scope.apply$(scope.passwdEntry, ()=>scope.apply$(scope.attrsOf, ()=>scope.int))["description"], "(attribute set of signed integer), not containing newlines or colons"));
})(scope.operators$.equal(scope.apply$(scope.passwdEntry, ()=>scope.apply$(scope.listOf, ()=>scope.str))["description"], "(list of string), not containing newlines or colons"));
})(scope.operators$.equal(scope.apply$(scope.passwdEntry, ()=>scope.apply$(scope.nullOr, ()=>scope.str))["description"], "(null or string), not containing newlines or colons"));
})(scope.operators$.equal(scope.apply$(scope.passwdEntry, ()=>scope.apply$(scope.either, ()=>scope.int, ()=>scope.str))["description"], "(signed integer or string), not containing newlines or colons"));
})(scope.operators$.equal(scope.apply$(scope.passwdEntry, ()=>scope.bool)["description"], "boolean, not containing newlines or colons"));
})(scope.operators$.equal(scope.apply$(scope.passwdEntry, ()=>scope.int)["description"], "signed integer, not containing newlines or colons"));
})(scope.operators$.equal(scope.apply$(scope.passwdEntry, ()=>scope.str)["description"], "string, not containing newlines or colons"));
})(scope.operators$.equal(scope.apply$(scope.oneOf, ()=>[scope.ints["positive"],scope.str])["description"], "positive integer, meaning >0, or string"));
})(scope.operators$.equal(scope.apply$(scope.oneOf, ()=>[scope.apply$(scope.listOf, ()=>scope.str),scope.int,scope.bool])["description"], "(list of string) or signed integer or boolean"));
})(scope.operators$.equal(scope.apply$(scope.oneOf, ()=>[scope.str,scope.int,scope.bool])["description"], "string or signed integer or boolean"));
})(scope.operators$.equal(scope.apply$(scope.oneOf, ()=>[scope.str,scope.int])["description"], "string or signed integer"));
})(scope.operators$.equal(scope.apply$(scope.oneOf, ()=>[scope.ints["positive"]])["description"], "positive integer, meaning >0"));
})(scope.operators$.equal(scope.apply$(scope.oneOf, ()=>[scope.apply$(scope.attrsOf, ()=>scope.int)])["description"], "attribute set of signed integer"));
})(scope.operators$.equal(scope.apply$(scope.oneOf, ()=>[scope.apply$(scope.listOf, ()=>scope.str)])["description"], "list of string"));
})(scope.operators$.equal(scope.apply$(scope.oneOf, ()=>[scope.apply$(scope.nullOr, ()=>scope.str)])["description"], "null or string"));
})(scope.operators$.equal(scope.apply$(scope.oneOf, ()=>[scope.apply$(scope.either, ()=>scope.int, ()=>scope.str)])["description"], "signed integer or string"));
})(scope.operators$.equal(scope.apply$(scope.oneOf, ()=>[scope.bool])["description"], "boolean"));
})(scope.operators$.equal(scope.apply$(scope.oneOf, ()=>[scope.int])["description"], "signed integer"));
})(scope.operators$.equal(scope.apply$(scope.oneOf, ()=>[scope.str])["description"], "string"));
})(scope.operators$.equal(scope.apply$(scope.nullOr, ()=>scope.ints["positive"])["description"], "null or (positive integer, meaning >0)"));
})(scope.operators$.equal(scope.apply$(scope.nullOr, ()=>scope.apply$(scope.attrsOf, ()=>scope.int))["description"], "null or (attribute set of signed integer)"));
})(scope.operators$.equal(scope.apply$(scope.nullOr, ()=>scope.apply$(scope.listOf, ()=>scope.str))["description"], "null or (list of string)"));
})(scope.operators$.equal(scope.apply$(scope.nullOr, ()=>scope.apply$(scope.nullOr, ()=>scope.str))["description"], "null or null or string"));
})(scope.operators$.equal(scope.apply$(scope.nullOr, ()=>scope.apply$(scope.either, ()=>scope.int, ()=>scope.str))["description"], "null or signed integer or string"));
})(scope.operators$.equal(scope.apply$(scope.nullOr, ()=>scope.bool)["description"], "null or boolean"));
})(scope.operators$.equal(scope.apply$(scope.nullOr, ()=>scope.int)["description"], "null or signed integer"));
})(scope.operators$.equal(scope.apply$(scope.nullOr, ()=>scope.str)["description"], "null or string"));
})(scope.operators$.equal(scope.apply$(scope.nonEmptyListOf, ()=>scope.ints["positive"])["description"], "non-empty (list of (positive integer, meaning >0))"));
})(scope.operators$.equal(scope.apply$(scope.nonEmptyListOf, ()=>scope.apply$(scope.attrsOf, ()=>scope.int))["description"], "non-empty (list of attribute set of signed integer)"));
})(scope.operators$.equal(scope.apply$(scope.nonEmptyListOf, ()=>scope.apply$(scope.listOf, ()=>scope.str))["description"], "non-empty (list of list of string)"));
})(scope.operators$.equal(scope.apply$(scope.nonEmptyListOf, ()=>scope.apply$(scope.nullOr, ()=>scope.str))["description"], "non-empty (list of (null or string))"));
})(scope.operators$.equal(scope.apply$(scope.nonEmptyListOf, ()=>scope.apply$(scope.either, ()=>scope.int, ()=>scope.str))["description"], "non-empty (list of (signed integer or string))"));
})(scope.operators$.equal(scope.apply$(scope.nonEmptyListOf, ()=>scope.bool)["description"], "non-empty (list of boolean)"));
})(scope.operators$.equal(scope.apply$(scope.nonEmptyListOf, ()=>scope.int)["description"], "non-empty (list of signed integer)"));
})(scope.operators$.equal(scope.apply$(scope.nonEmptyListOf, ()=>scope.str)["description"], "non-empty (list of string)"));
})(scope.operators$.equal(scope.apply$(scope.loaOf, ()=>scope.ints["positive"])["description"], "attribute set of (positive integer, meaning >0)"));
})(scope.operators$.equal(scope.apply$(scope.loaOf, ()=>scope.apply$(scope.attrsOf, ()=>scope.int))["description"], "attribute set of attribute set of signed integer"));
})(scope.operators$.equal(scope.apply$(scope.loaOf, ()=>scope.apply$(scope.listOf, ()=>scope.str))["description"], "attribute set of list of string"));
})(scope.operators$.equal(scope.apply$(scope.loaOf, ()=>scope.apply$(scope.nullOr, ()=>scope.str))["description"], "attribute set of (null or string)"));
})(scope.operators$.equal(scope.apply$(scope.loaOf, ()=>scope.apply$(scope.either, ()=>scope.int, ()=>scope.str))["description"], "attribute set of (signed integer or string)"));
})(scope.operators$.equal(scope.apply$(scope.loaOf, ()=>scope.bool)["description"], "attribute set of boolean"));
})(scope.operators$.equal(scope.apply$(scope.loaOf, ()=>scope.int)["description"], "attribute set of signed integer"));
})(scope.operators$.equal(scope.apply$(scope.loaOf, ()=>scope.str)["description"], "attribute set of string"));
})(scope.operators$.equal(scope.apply$(scope.listOf, ()=>scope.ints["positive"])["description"], "list of (positive integer, meaning >0)"));
})(scope.operators$.equal(scope.apply$(scope.listOf, ()=>scope.apply$(scope.attrsOf, ()=>scope.int))["description"], "list of attribute set of signed integer"));
})(scope.operators$.equal(scope.apply$(scope.listOf, ()=>scope.apply$(scope.listOf, ()=>scope.str))["description"], "list of list of string"));
})(scope.operators$.equal(scope.apply$(scope.listOf, ()=>scope.apply$(scope.nullOr, ()=>scope.str))["description"], "list of (null or string)"));
})(scope.operators$.equal(scope.apply$(scope.listOf, ()=>scope.apply$(scope.either, ()=>scope.int, ()=>scope.str))["description"], "list of (signed integer or string)"));
})(scope.operators$.equal(scope.apply$(scope.listOf, ()=>scope.bool)["description"], "list of boolean"));
})(scope.operators$.equal(scope.apply$(scope.listOf, ()=>scope.int)["description"], "list of signed integer"));
})(scope.operators$.equal(scope.apply$(scope.listOf, ()=>scope.str)["description"], "list of string"));
})(scope.operators$.equal(scope.apply$(scope.lazyAttrsOf, ()=>scope.ints["positive"])["description"], "lazy attribute set of (positive integer, meaning >0)"));
})(scope.operators$.equal(scope.apply$(scope.lazyAttrsOf, ()=>scope.apply$(scope.attrsOf, ()=>scope.int))["description"], "lazy attribute set of attribute set of signed integer"));
})(scope.operators$.equal(scope.apply$(scope.lazyAttrsOf, ()=>scope.apply$(scope.listOf, ()=>scope.str))["description"], "lazy attribute set of list of string"));
})(scope.operators$.equal(scope.apply$(scope.lazyAttrsOf, ()=>scope.apply$(scope.nullOr, ()=>scope.str))["description"], "lazy attribute set of (null or string)"));
})(scope.operators$.equal(scope.apply$(scope.lazyAttrsOf, ()=>scope.apply$(scope.either, ()=>scope.int, ()=>scope.str))["description"], "lazy attribute set of (signed integer or string)"));
})(scope.operators$.equal(scope.apply$(scope.lazyAttrsOf, ()=>scope.bool)["description"], "lazy attribute set of boolean"));
})(scope.operators$.equal(scope.apply$(scope.lazyAttrsOf, ()=>scope.int)["description"], "lazy attribute set of signed integer"));
})(scope.operators$.equal(scope.apply$(scope.lazyAttrsOf, ()=>scope.str)["description"], "lazy attribute set of string"));
})(scope.operators$.equal(scope.apply$(scope.functionTo, ()=>scope.ints["positive"])["description"], "function that evaluates to a(n) (positive integer, meaning >0)"));
})(scope.operators$.equal(scope.apply$(scope.functionTo, ()=>scope.apply$(scope.attrsOf, ()=>scope.int))["description"], "function that evaluates to a(n) attribute set of signed integer"));
})(scope.operators$.equal(scope.apply$(scope.functionTo, ()=>scope.apply$(scope.listOf, ()=>scope.str))["description"], "function that evaluates to a(n) list of string"));
})(scope.operators$.equal(scope.apply$(scope.functionTo, ()=>scope.apply$(scope.nullOr, ()=>scope.str))["description"], "function that evaluates to a(n) (null or string)"));
})(scope.operators$.equal(scope.apply$(scope.functionTo, ()=>scope.apply$(scope.either, ()=>scope.int, ()=>scope.str))["description"], "function that evaluates to a(n) (signed integer or string)"));
})(scope.operators$.equal(scope.apply$(scope.functionTo, ()=>scope.bool)["description"], "function that evaluates to a(n) boolean"));
})(scope.operators$.equal(scope.apply$(scope.functionTo, ()=>scope.int)["description"], "function that evaluates to a(n) signed integer"));
})(scope.operators$.equal(scope.apply$(scope.functionTo, ()=>scope.str)["description"], "function that evaluates to a(n) string"));
})(scope.operators$.equal(scope.apply$(scope.enum, [null])["description"], "value <null> (singular enum)"));
})(scope.operators$.equal(scope.apply$(scope.enum, [1n,2n,3n])["description"], "one of 1, 2, 3"));
})(scope.operators$.equal(scope.apply$(scope.enum, [true,false])["description"], "one of true, false"));
})(scope.operators$.equal(scope.apply$(scope.enum, ["a","b"])["description"], "one of \"a\", \"b\""));
})(scope.operators$.equal(scope.apply$(scope.enum, ["single"])["description"], "value \"single\" (singular enum)"));
})(scope.operators$.equal(scope.apply$(scope.enum, [])["description"], "impossible (empty enum)"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.numbers["positive"], ()=>scope.bool)["description"], "positive integer or floating point number, meaning >0, or boolean"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.ints["positive"], ()=>scope.bool)["description"], "positive integer, meaning >0, or boolean"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.apply$(scope.submodule, {}), ()=>scope.bool)["description"], "(submodule) or boolean"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.apply$(scope.lazyAttrsOf, ()=>scope.str), ()=>scope.bool)["description"], "(lazy attribute set of string) or boolean"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.apply$(scope.nullOr, ()=>scope.str), ()=>scope.bool)["description"], "null or string or boolean"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.apply$(scope.listOf, ()=>scope.str), ()=>scope.bool)["description"], "(list of string) or boolean"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.apply$(scope.attrsOf, ()=>scope.str), ()=>scope.bool)["description"], "(attribute set of string) or boolean"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.apply$(scope.separatedString, ","), ()=>scope.bool)["description"], "strings concatenated with \",\" or boolean"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.apply$(scope.pathWith, { absolute: true }), ()=>scope.bool)["description"], "absolute path or boolean"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.apply$(scope.unique, { message: "test" }, ()=>scope.str), ()=>scope.bool)["description"], "string or boolean"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.apply$(scope.uniq, ()=>scope.str), ()=>scope.bool)["description"], "string or boolean"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.apply$(scope.passwdEntry, ()=>scope.str), ()=>scope.bool)["description"], "string, not containing newlines or colons, or boolean"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.apply$(scope.functionTo, ()=>scope.str), ()=>scope.bool)["description"], "(function that evaluates to a(n) string) or boolean"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.apply$(scope.coercedTo, ()=>scope.str, ()=>scope.abort, ()=>scope.int), ()=>scope.bool)["description"], "(signed integer or string convertible to it) or boolean"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.apply$(scope.oneOf, ()=>[scope.str,scope.int]), ()=>scope.bool)["description"], "string or signed integer or boolean"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.apply$(scope.nonEmptyListOf, ()=>scope.str), ()=>scope.bool)["description"], "(non-empty (list of string)) or boolean"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.apply$(scope.strMatching, "[0-9]+"), ()=>scope.bool)["description"], "string matching the pattern [0-9]+ or boolean"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.apply$(scope.enum, ["a","b"]), ()=>scope.bool)["description"], "one of \"a\", \"b\" or boolean"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.int, ()=>scope.bool)["description"], "signed integer or boolean"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.str, ()=>scope.bool)["description"], "string or boolean"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.bool, ()=>scope.numbers["positive"])["description"], "boolean or (positive integer or floating point number, meaning >0)"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.bool, ()=>scope.ints["positive"])["description"], "boolean or (positive integer, meaning >0)"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.bool, ()=>scope.apply$(scope.submodule, {}))["description"], "boolean or (submodule)"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.bool, ()=>scope.apply$(scope.lazyAttrsOf, ()=>scope.str))["description"], "boolean or lazy attribute set of string"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.bool, ()=>scope.apply$(scope.nullOr, ()=>scope.str))["description"], "boolean or null or string"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.bool, ()=>scope.apply$(scope.listOf, ()=>scope.str))["description"], "boolean or list of string"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.bool, ()=>scope.apply$(scope.attrsOf, ()=>scope.str))["description"], "boolean or attribute set of string"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.bool, ()=>scope.apply$(scope.separatedString, ","))["description"], "boolean or strings concatenated with \",\""));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.bool, ()=>scope.apply$(scope.pathWith, { absolute: true }))["description"], "boolean or absolute path"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.bool, ()=>scope.apply$(scope.unique, { message: "test" }, ()=>scope.str))["description"], "boolean or string"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.bool, ()=>scope.apply$(scope.uniq, ()=>scope.str))["description"], "boolean or string"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.bool, ()=>scope.apply$(scope.passwdEntry, ()=>scope.str))["description"], "boolean or (string, not containing newlines or colons)"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.bool, ()=>scope.apply$(scope.functionTo, ()=>scope.str))["description"], "boolean or function that evaluates to a(n) string"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.bool, ()=>scope.apply$(scope.coercedTo, ()=>scope.str, ()=>scope.abort, ()=>scope.int))["description"], "boolean or (signed integer or string convertible to it)"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.bool, ()=>scope.apply$(scope.oneOf, ()=>[scope.str,scope.int]))["description"], "boolean or string or signed integer"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.bool, ()=>scope.apply$(scope.nonEmptyListOf, ()=>scope.str))["description"], "boolean or non-empty (list of string)"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.bool, ()=>scope.apply$(scope.strMatching, "[0-9]+"))["description"], "boolean or string matching the pattern [0-9]+"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.bool, ()=>scope.apply$(scope.enum, ["a","b"]))["description"], "boolean or one of \"a\", \"b\""));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.bool, ()=>scope.int)["description"], "boolean or signed integer"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.bool, ()=>scope.str)["description"], "boolean or string"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.apply$(scope.either, ()=>scope.bool, ()=>scope.str), ()=>scope.int)["description"], "boolean or string or signed integer"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.ints["positive"], ()=>scope.str)["description"], "positive integer, meaning >0, or string"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.apply$(scope.attrsOf, ()=>scope.int), ()=>scope.str)["description"], "(attribute set of signed integer) or string"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.apply$(scope.listOf, ()=>scope.str), ()=>scope.int)["description"], "(list of string) or signed integer"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.apply$(scope.nullOr, ()=>scope.str), ()=>scope.int)["description"], "null or string or signed integer"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.apply$(scope.either, ()=>scope.int, ()=>scope.str), ()=>scope.bool)["description"], "signed integer or string or boolean"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.bool, ()=>scope.str)["description"], "boolean or string"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.int, ()=>scope.str)["description"], "signed integer or string"));
})(scope.operators$.equal(scope.apply$(scope.either, ()=>scope.str, ()=>scope.int)["description"], "string or signed integer"));
})(scope.operators$.equal(scope.apply$(scope.coercedTo, ()=>scope.apply$(scope.listOf, ()=>scope.str), ()=>scope.abort, ()=>scope.apply$(scope.attrsOf, ()=>scope.str))["description"], "(attribute set of string) or (list of string) convertible to it"));
})(scope.operators$.equal(scope.apply$(scope.coercedTo, ()=>scope.ints["positive"], ()=>scope.abort, ()=>scope.str)["description"], "string or (positive integer, meaning >0) convertible to it"));
})(scope.operators$.equal(scope.apply$(scope.coercedTo, ()=>scope.apply$(scope.attrsOf, ()=>scope.int), ()=>scope.abort, ()=>scope.str)["description"], "string or (attribute set of signed integer) convertible to it"));
})(scope.operators$.equal(scope.apply$(scope.coercedTo, ()=>scope.apply$(scope.listOf, ()=>scope.str), ()=>scope.abort, ()=>scope.str)["description"], "string or (list of string) convertible to it"));
})(scope.operators$.equal(scope.apply$(scope.coercedTo, ()=>scope.apply$(scope.nullOr, ()=>scope.str), ()=>scope.abort, ()=>scope.str)["description"], "string or (null or string) convertible to it"));
})(scope.operators$.equal(scope.apply$(scope.coercedTo, ()=>scope.apply$(scope.either, ()=>scope.int, ()=>scope.str), ()=>scope.abort, ()=>scope.str)["description"], "string or (signed integer or string) convertible to it"));
})(scope.operators$.equal(scope.apply$(scope.coercedTo, ()=>scope.bool, ()=>scope.abort, ()=>scope.str)["description"], "string or boolean convertible to it"));
})(scope.operators$.equal(scope.apply$(scope.coercedTo, ()=>scope.int, ()=>scope.abort, ()=>scope.str)["description"], "string or signed integer convertible to it"));
})(scope.operators$.equal(scope.apply$(scope.coercedTo, ()=>scope.str, ()=>scope.abort, ()=>scope.int)["description"], "signed integer or string convertible to it"));
})(scope.operators$.equal(scope.apply$(scope.attrListOf, ()=>scope.apply$(scope.submodule, {}))["description"], "attribute list of (submodule)"));
})(scope.operators$.equal(scope.apply$(scope.attrListOf, ()=>scope.apply$(scope.nonEmptyListOf, ()=>scope.str))["description"], "attribute list of non-empty (list of string)"));
})(scope.operators$.equal(scope.apply$(scope.attrListOf, ()=>scope.apply$(scope.strMatching, "[0-9]+"))["description"], "attribute list of string matching the pattern [0-9]+"));
})(scope.operators$.equal(scope.apply$(scope.attrListOf, ()=>scope.apply$(scope.enum, ["a","b"]))["description"], "attribute list of (one of \"a\", \"b\")"));
})(scope.operators$.equal(scope.apply$(scope.attrListOf, ()=>scope.ints["positive"])["description"], "attribute list of (positive integer, meaning >0)"));
})(scope.operators$.equal(scope.apply$(scope.attrListOf, ()=>scope.apply$(scope.attrListOf, ()=>scope.str))["description"], "attribute list of attribute list of string"));
})(scope.operators$.equal(scope.apply$(scope.attrListOf, ()=>scope.apply$(scope.attrsOf, ()=>scope.int))["description"], "attribute list of attribute set of signed integer"));
})(scope.operators$.equal(scope.apply$(scope.attrListOf, ()=>scope.apply$(scope.listOf, ()=>scope.str))["description"], "attribute list of list of string"));
})(scope.operators$.equal(scope.apply$(scope.attrListOf, ()=>scope.apply$(scope.nullOr, ()=>scope.str))["description"], "attribute list of (null or string)"));
})(scope.operators$.equal(scope.apply$(scope.attrListOf, ()=>scope.apply$(scope.either, ()=>scope.int, ()=>scope.str))["description"], "attribute list of (signed integer or string)"));
})(scope.operators$.equal(scope.apply$(scope.attrListOf, ()=>scope.bool)["description"], "attribute list of boolean"));
})(scope.operators$.equal(scope.apply$(scope.attrListOf, ()=>scope.int)["description"], "attribute list of signed integer"));
})(scope.operators$.equal(scope.apply$(scope.attrListOf, ()=>scope.str)["description"], "attribute list of string"));
})(scope.operators$.equal(scope.apply$(scope.attrsWith, ()=>scope.attrSet$({
    elemType: ()=>scope.str,
    lazy: false,
}))["description"], "attribute set of string"));
})(scope.operators$.equal(scope.apply$(scope.attrsWith, ()=>scope.attrSet$({
    elemType: ()=>scope.str,
    lazy: true,
}))["description"], "lazy attribute set of string"));
})(scope.operators$.equal(scope.apply$(scope.attrsWith, ()=>scope.attrSet$({
    elemType: ()=>scope.ints["positive"],
}))["description"], "attribute set of (positive integer, meaning >0)"));
})(scope.operators$.equal(scope.apply$(scope.attrsWith, ()=>scope.attrSet$({
    elemType: ()=>scope.apply$(scope.attrsOf, ()=>scope.int),
}))["description"], "attribute set of attribute set of signed integer"));
})(scope.operators$.equal(scope.apply$(scope.attrsWith, ()=>scope.attrSet$({
    elemType: ()=>scope.apply$(scope.listOf, ()=>scope.str),
}))["description"], "attribute set of list of string"));
})(scope.operators$.equal(scope.apply$(scope.attrsWith, ()=>scope.attrSet$({
    elemType: ()=>scope.apply$(scope.nullOr, ()=>scope.str),
}))["description"], "attribute set of (null or string)"));
})(scope.operators$.equal(scope.apply$(scope.attrsWith, ()=>scope.attrSet$({
    elemType: ()=>scope.apply$(scope.either, ()=>scope.int, ()=>scope.str),
}))["description"], "attribute set of (signed integer or string)"));
})(scope.operators$.equal(scope.apply$(scope.attrsWith, ()=>scope.attrSet$({
    elemType: ()=>scope.bool,
}))["description"], "attribute set of boolean"));
})(scope.operators$.equal(scope.apply$(scope.attrsWith, ()=>scope.attrSet$({
    elemType: ()=>scope.int,
}))["description"], "attribute set of signed integer"));
})(scope.operators$.equal(scope.apply$(scope.attrsWith, ()=>scope.attrSet$({
    elemType: ()=>scope.str,
}))["description"], "attribute set of string"));
})(scope.operators$.equal(scope.apply$(scope.attrsOf, ()=>scope.numbers["positive"])["description"], "attribute set of (positive integer or floating point number, meaning >0)"));
})(scope.operators$.equal(scope.apply$(scope.attrsOf, ()=>scope.ints["u32"])["description"], "attribute set of 32 bit unsigned integer; between 0 and 4294967295 (both inclusive)"));
})(scope.operators$.equal(scope.apply$(scope.attrsOf, ()=>scope.apply$(scope.enum, []))["description"], "attribute set of impossible (empty enum)"));
})(scope.operators$.equal(scope.apply$(scope.attrsOf, ()=>scope.apply$(scope.addCheck, ()=>scope.str, ()=>scope.func$("x", (scope)=>true)))["description"], "attribute set of string"));
})(scope.operators$.equal(scope.apply$(scope.attrsOf, ()=>scope.apply$(scope.submodule, ()=>scope.attrSet$({
    freeformType: ()=>scope.apply$(scope.attrsOf, ()=>scope.str),
})))["description"], "attribute set of (open submodule of attribute set of string)"));
})(scope.operators$.equal(scope.apply$(scope.attrsOf, ()=>scope.apply$(scope.submodule, {}))["description"], "attribute set of (submodule)"));
})(scope.operators$.equal(scope.apply$(scope.attrsOf, ()=>scope.apply$(scope.lazyAttrsOf, ()=>scope.str))["description"], "attribute set of lazy attribute set of string"));
})(scope.operators$.equal(scope.apply$(scope.attrsOf, ()=>scope.apply$(scope.loaOf, ()=>scope.str))["description"], "attribute set of attribute set of string"));
})(scope.operators$.equal(scope.apply$(scope.attrsOf, ()=>scope.apply$(scope.separatedString, ","))["description"], "attribute set of strings concatenated with \",\""));
})(scope.operators$.equal(scope.apply$(scope.attrsOf, ()=>scope.apply$(scope.pathWith, { absolute: true }))["description"], "attribute set of absolute path"));
})(scope.operators$.equal(scope.apply$(scope.attrsOf, ()=>scope.apply$(scope.unique, { message: "test" }, ()=>scope.str))["description"], "attribute set of string"));
})(scope.operators$.equal(scope.apply$(scope.attrsOf, ()=>scope.apply$(scope.uniq, ()=>scope.str))["description"], "attribute set of string"));
})(scope.operators$.equal(scope.apply$(scope.attrsOf, ()=>scope.apply$(scope.passwdEntry, ()=>scope.str))["description"], "attribute set of (string, not containing newlines or colons)"));
})(scope.operators$.equal(scope.apply$(scope.attrsOf, ()=>scope.apply$(scope.functionTo, ()=>scope.str))["description"], "attribute set of function that evaluates to a(n) string"));
})(scope.operators$.equal(scope.apply$(scope.attrsOf, ()=>scope.apply$(scope.coercedTo, ()=>scope.str, ()=>scope.abort, ()=>scope.int))["description"], "attribute set of (signed integer or string convertible to it)"));
})(scope.operators$.equal(scope.apply$(scope.attrsOf, ()=>scope.apply$(scope.oneOf, ()=>[scope.str,scope.int]))["description"], "attribute set of (string or signed integer)"));
})(scope.operators$.equal(scope.apply$(scope.attrsOf, ()=>scope.apply$(scope.nonEmptyListOf, ()=>scope.str))["description"], "attribute set of non-empty (list of string)"));
})(scope.operators$.equal(scope.apply$(scope.attrsOf, ()=>scope.apply$(scope.strMatching, "[0-9]+"))["description"], "attribute set of string matching the pattern [0-9]+"));
})(scope.operators$.equal(scope.apply$(scope.attrsOf, ()=>scope.apply$(scope.enum, ["a","b"]))["description"], "attribute set of (one of \"a\", \"b\")"));
})(scope.operators$.equal(scope.apply$(scope.attrsOf, ()=>scope.ints["positive"])["description"], "attribute set of (positive integer, meaning >0)"));
})(scope.operators$.equal(scope.apply$(scope.attrsOf, ()=>scope.apply$(scope.attrsOf, ()=>scope.int))["description"], "attribute set of attribute set of signed integer"));
})(scope.operators$.equal(scope.apply$(scope.attrsOf, ()=>scope.apply$(scope.listOf, ()=>scope.str))["description"], "attribute set of list of string"));
})(scope.operators$.equal(scope.apply$(scope.attrsOf, ()=>scope.apply$(scope.nullOr, ()=>scope.str))["description"], "attribute set of (null or string)"));
})(scope.operators$.equal(scope.apply$(scope.attrsOf, ()=>scope.apply$(scope.either, ()=>scope.int, ()=>scope.str))["description"], "attribute set of (signed integer or string)"));
})(scope.operators$.equal(scope.apply$(scope.attrsOf, ()=>scope.bool)["description"], "attribute set of boolean"));
})(scope.operators$.equal(scope.apply$(scope.attrsOf, ()=>scope.int)["description"], "attribute set of signed integer"));
})(scope.operators$.equal(scope.apply$(scope.submodule, ()=>scope.attrSet$({
    freeformType: ()=>scope.apply$(scope.attrsOf, ()=>scope.str),
}))["description"], "open submodule of attribute set of string"));
})(scope.operators$.equal(scope.apply$(scope.enum, [true,null,false])["description"], "one of true, <null>, false"));
})(scope.operators$.equal(scope.apply$(scope.oneOf, ()=>[scope.apply$(scope.attrsOf, ()=>scope.str),scope.int,scope.bool])["description"], "(attribute set of string) or signed integer or boolean"));
})(scope.operators$.equal(scope.apply$(scope.attrsOf, ()=>scope.apply$(scope.attrsOf, ()=>scope.str))["description"], "attribute set of attribute set of string"));
})(scope.operators$.equal(scope.apply$(scope.attrsOf, ()=>scope.str)["description"], "attribute set of string"));
})(scope.operators$.equal(scope.int["description"], "signed integer"));
})(scope.operators$.equal(scope.str["description"], "string"))),
}),
})))
))