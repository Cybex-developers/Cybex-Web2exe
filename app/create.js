#!/usr/bin/env node

const fs = require('fs');
const readline = require('readline');
const path = require("path");
const child_process = require('child_process');
__dirname = path.resolve();

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

module.exports = function (){
    setTimeout(function () {
        rl.question("Enter your Application Name : ", function (aname) {
            fs.mkdirSync(__dirname + "/" + aname);
            fs.writeFileSync(__dirname + "/" + aname + "/index.html",
`<!DOCTYPE html>
<html lang="en">
<head>
    <script src="./cwe-client.js"></script>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>

</body>
</html>`)
            fs.writeFileSync(__dirname + "/" + aname + "/settings.json",
`{
    "name": "` + aname + `",
    "app": "./index.html"
}`)
            fs.writeFileSync(__dirname + "/" + aname + "/package.json",
`{
    "name": "` + aname + `",
    "version": "1.0.0",
    "dependencies": {
        "chrome-runner": "^1.3.5",
        "path": "^0.12.7"
    }
}
`)
            child_process.exec(`npm i --prefix "` + aname + `" path chrome-runner -s`)
            rl.close();
        })
    }, 10)

}
