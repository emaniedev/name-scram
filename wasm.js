"use strict";
let wasm;
class Exports {
    jslog(ptr, len) {
        console.log("From Wasm: ", stringFromWasm(wasm, ptr, len));
    }
}
(async () => {
    wasm = await WebAssembly.instantiateStreaming(fetch("namescram.wasm"), {
        env: make_environment(new Exports()),
    });
    console.log(wasm);
    const c3 = {
        init: wasm.instance.exports.init,
        addName: wasm.instance.exports.addName,
    };
    c3.init();
    const addNameBtn = document.getElementById("addNameBtn");
    if (!addNameBtn)
        throw new Error("Cant get button with id `addNameBtn`");
    addNameBtn.addEventListener("click", (_) => {
        const input = document.getElementById("addNameInput");
        if (input.value.length > 0) {
            console.log(input.value);
            c3.addName(input.value);
        }
    });
})();
function stringFromWasm(wasm, ptr, len) {
    const mem = wasm.instance.exports.memory;
    return new TextDecoder("UTF-8").decode(new Uint8Array(mem.buffer, ptr, len));
}
function make_environment(env) {
    return new Proxy(env, {
        get(_, prop) {
            if (env[prop] !== undefined) {
                return env[prop].bind(env);
            }
            return (...args) => {
                throw new Error(`NOT IMPLEMENTED: ${prop.toString()} ${args}`);
            };
        }
    });
}
//# sourceMappingURL=wasm.js.map