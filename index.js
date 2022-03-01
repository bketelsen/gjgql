import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { load } from "js-yaml";
import { readdir } from "node:fs";
import { readFile,writeFile } from "node:fs/promises";
import { promisify } from "node:util";

var data = new Map()
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dataDirectory = resolve(__dirname, "./data");

const awaitReaddir = promisify(readdir);
const directories = await awaitReaddir(dataDirectory);

for (const dir of directories) {
    const dirpath = join(dataDirectory, dir);
    const files = await awaitReaddir(dirpath);
    var records = new Array();
    for (const file of files) {
        const filepath = join(dirpath, file);
        const yaml = load(await readFile(filepath, "utf8"));
        const id = file.replace(".yaml", "");
        yaml["id"] = id;
        records.push(yaml)
    }
    data[dir] = records
}

const template = join(__dirname,"config","seed_template.js")

const tmpl = await readFile(template, "utf8");
const jsData = "const data="+JSON.stringify(data)+";"
const target = join(__dirname, "config", "seed.js");

await writeFile (target, jsData + "\n" + tmpl, function(err) {
    if (err) throw err;
    console.log('complete');
    }
);

