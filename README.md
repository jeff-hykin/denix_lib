# denix_lib

`nixpkgs.lib`, translated to JavaScript by [denix](https://github.com/jeff-hykin/denix).

Every `.nix` file in [divnix/nixpkgs.lib](https://github.com/divnix/nixpkgs.lib)
has a `.js` file next to it. The imports between them are real, static JS
imports, so the whole library loads as an ordinary module graph — no Nix
installation, no parser, no filesystem lookups for the `.nix` sources.

## Use it

```javascript
import { createLib } from "https://raw.esm.sh/gh/jeff-hykin/denix_lib@main/mod.js"

const lib = createLib()
const { force, apply } = lib.runtime

console.log(force(apply(force(lib.value.concatStringsSep), ",", ["a", "b", "c"])))
// a,b,c
```

`createLib()` makes a fresh denix runtime and evaluates `lib/default.nix`
against it. Pass your own if you want to control the store:

```javascript
import { createRuntime } from "https://raw.esm.sh/gh/jeff-hykin/denix@main/main/runtime.js"
import libFile from "https://raw.esm.sh/gh/jeff-hykin/denix_lib@main/lib/default.js"

const lib = libFile(createRuntime({ storeDir: "/tmp/my-store" }))
```

Everything is lazy, exactly as in Nix: attribute access hands back a thunk and
`force` evaluates it.

## How it was made

```bash
denix translate ./nixpkgs.lib \
    --out-dir ./denix_lib \
    --runtime-path https://raw.esm.sh/gh/jeff-hykin/denix@main/main/runtime.js
```

Two edits to the Nix source were needed first, both kept in this repo's `.nix`
files:

- `lib/default.nix` routed nearly every module through
  `callLibs = file: import file { lib = self; }`. An import of a *variable*
  can't be resolved before evaluation, so it was inlined into 31 direct
  `import ./x.nix { lib = self; }` calls, which do hoist. Nix evaluates the
  result identically.
- `maintainers/maintainer-list.nix` and `maintainers/computed-team-list.nix`
  live in nixpkgs proper, not in the lib-only split, so they are stubbed as
  empty attribute sets here.

A few imports are genuinely dynamic and stay dynamic — `import fn` in
`lib/customisation.nix`, `import m` in `lib/modules.nix`, and the test helpers.
They resolve at evaluation time against the `.nix` files, which is why those are
checked in too.

Paths are emitted relative to each module (`new URL("./x", import.meta.url)`),
so the tree is not tied to the machine that generated it.
