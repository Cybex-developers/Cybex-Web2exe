#!/usr/bin/env node

function cwe_unknown(){
    console.log(`please enter a valid argument, all available arguments are\n
 --v\n --version\n --help\n --build\n --run\n -- create`);
}
function cwe_version(){
    console.log("v2022.1");
}
function cwe_help(){

}
module.exports = {cwe_unknown,cwe_version,cwe_help}
