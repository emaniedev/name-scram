let wasm: WebAssembly.WebAssemblyInstantiatedSource;

class Exports {
	jslog(ptr: number, len: number) {
		console.log("From Wasm: ", stringFromWasm(wasm, ptr, len));
	}
}

(async () => {
	wasm = await WebAssembly.instantiateStreaming(fetch("namescram.wasm"), {
		env: make_environment(new Exports()),
	} as WebAssembly.Imports);
	console.log(wasm);

	const c3 = {
		init: wasm.instance.exports.init as CallableFunction,
		addName: wasm.instance.exports.addName as CallableFunction,
	};
	c3.init();

	const addNameBtn = document.getElementById("addNameBtn") as HTMLButtonElement;
	if (!addNameBtn) throw new Error("Cant get button with id `addNameBtn`");

	addNameBtn.addEventListener("click", (_) => {
		const input = document.getElementById("addNameInput") as HTMLInputElement;
		if (input.value.length > 0) {
			console.log(input.value);
			c3.addName(input.value);
		}
	});




})();

function stringFromWasm(wasm: WebAssembly.WebAssemblyInstantiatedSource, ptr: number, len: number) {
	const mem = wasm.instance.exports.memory as WebAssembly.Memory;
	return new TextDecoder("UTF-8").decode(new Uint8Array(mem.buffer, ptr, len));
}
function make_environment(env: any): any {
	return new Proxy(env, {
		get(_, prop) {
			if (env[prop] !== undefined) {
				return env[prop].bind(env);
			}
			return (...args: any[]) => {
				throw new Error(`NOT IMPLEMENTED: ${prop.toString()} ${args}`);
			}
		}
	});
}
