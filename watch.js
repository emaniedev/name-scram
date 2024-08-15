"use strict";
const { spawn } = require("node:child_process");

const spawnOptions = { shell: true }
const watcher = '"./node_modules/.bin/tsc"';
const watcherArgs = ["-watch"];
const server = '"./node_modules/.bin/http-server"';
const serverArgs = ["-p", "2121", "-a", "localhost", "-s", "-c-1"];


cmd(server, serverArgs.flat());
cmd(watcher, watcherArgs.flat());

function cmd(programPath, args) {
    console.log("Running: ", programPath, args.flat(), spawnOptions);
    const p = spawn(programPath, args.flat(), spawnOptions);
    p.stdout.on("data", (data) => process.stdout.write(data));
    p.stderr.on("data", (data) => process.stderr.write(data));

    p.on("close", (status) => {
        if (status < 0) {
            console.error(`Process ${programPath} exited with status ${status}`);
            return;
        }
        return status;
    })

    return p;
}
