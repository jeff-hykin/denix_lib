import { createRuntime } from "https://raw.esm.sh/gh/jeff-hykin/denix@1f73d879/main/runtime.js"
import libFile from "./lib/default.js"

// The translated lib/default.nix: a function waiting for the denix runtime it
// should be evaluated against. Import it directly to supply your own runtime.
export { libFile }

// nixpkgs.lib, evaluated against `runtime` (a fresh one if you don't have one).
// nixFile memoizes per runtime, so asking twice is free.
export const nixLib = (runtime = createRuntime()) => libFile(runtime)

export const createLib = (runtimeOptions = {}) => {
    const runtime = createRuntime(runtimeOptions)
    return { lib: libFile(runtime), runtime }
}

const RAW = Symbol.for("denix_lib.raw")

// Splice a value into a shellStr template without escaping it, for fragments
// that are already shell script rather than data.
export const raw = (value) => ({ [RAW]: value })

// A template tag that shell-escapes everything interpolated into it:
//
//     shellStr`HOME=${homePath} ${raw(alreadyAScript)}`
//
// Interpolated store paths keep their nix string context (the escaping goes
// through lib.escapeShellArg, and the pieces are joined by denix's str$), so
// they stay real dependencies instead of becoming plain strings.
export const shellStrFor = (runtime) => {
    const escapeShellArg = nixLib(runtime).escapeShellArg
    const { str$ } = runtime.scope ?? runtime
    return (strings, ...values) => str$(
        strings,
        ...values.map((each) => (each && typeof each === "object" && RAW in each) ? each[RAW] : escapeShellArg(each)),
    )
}

export default createLib
