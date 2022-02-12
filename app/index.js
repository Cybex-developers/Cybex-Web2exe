#!/usr/bin/env node

const arg = process.argv;
const run = require("./run.js");
const build = require("./build.js");
const extras = require("./extras.js");
if (arg.includes("--run")) {
    run()
}
else if (arg.includes("--v") || arg.includes("--version")) {
    extras.cwe_version()
}
else if (arg.includes("--help")) {
    extras.cwe_help()
}
else if (arg.includes("--build")) {
    build()
}
else {
    extras.cwe_unknown()
}