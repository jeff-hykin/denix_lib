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

export default createLib
