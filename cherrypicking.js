const { spawn } = require('node:child_process');


// 6c075aa32e6708d492e4e19b8dad753aba9b983a

async function main() {
    if (process.argv.length <= 2) {
        console.error("Need a git repository path and a commit");
        return 0;
    }

    const path = process.argv[2];
    process.chdir(path);

    const commit = process.argv[3];
    console.log("Se va a meter el commit: ", commit);

    const stdin = process.stdin;
    const stdout = process.stdout;

    const spawnOptions = { shell: true };
    const program = "git";
    const args = ["branch", "-a"];



    const output = await cmd(program, args.flat());

    const rawData = output.toString();
    const branches = rawData.split("\n");
    branches.pop();
    branches.shift();
    const trimmedBranches = branches.map((v) => {
        const toDelete = "remotes/origin/";
        v = v.trim()
        v = v.substring(v.indexOf(toDelete) + toDelete.length, v.length);
        return v;
    });
    console.log(trimmedBranches);
    console.log("Fetching remote changes....");
    await cmd(program, ["fetch", "--prune"]);

    for (const b of trimmedBranches) {
        console.log(`    - Incorporando commit ${commit} en rama ${b}.`);
        console.log(`        > git checkout ${b}`);
        await cmd(program, ["checkout", "-B", b].flat());
        console.log(`        > git reset --hard`);
        await cmd(program, ["reset", "--hard", b].flat());
        console.log(`        > git pull`);
        await cmd(program, ["pull"].flat());
        console.log(`        > git chery-pick ${commit}`);
        await cmd(program, ["cherry-pick", "--strategy", "ort", "-X", "theirs", commit].flat());
        console.log(`        > git push`);
    }

    function cmd(programPath, args) {
        const output = [];
        return new Promise((resolve, reject) => {
            console.log("Running: ", programPath, args.flat(), spawnOptions);
            const p = spawn(programPath, args.flat(), spawnOptions);
            p.stdout.setEncoding("utf8");
            p.stdout.on("data", (data) => {
                process.stdout.write(data);
                output.push(data);
            });
            p.stderr.on("data", (data) => process.stderr.write(data));
            p.on("exit", (_) => {
                resolve(output);
                //                fs.writeFile("branches.txt", trimmedBranches.join("\n"), (err) => new Error(err));

            });

            p.on("close", (status) => {
                if (status < 0) {
                    console.error(`Process ${programPath} exited with status ${status}`);
                    return;
                }

                return status;
            });
        });
    }
}


main();
