#!/usr/bin/env node

const arg = process.argv;
const {launch} = require('chrome-runner');
const path = require("path")
__dirname = path.resolve();

if (arg.includes("--run")) {
    const fs = require('fs');
    if (fs.existsSync('./settings.json')) {
        const data = JSON.parse(fs.readFileSync("./settings.json"));

        if (data.app != null) {
            if (fs.existsSync(data.app)) {
                if (data.start_maximized == true) {
                    const runner = launch(
                        {"startupPage": __dirname + data.app,
                        "chromeFlags": ["--app="+ __dirname + data.app,"--start-maximized"]
                    });
                    setTimeout(() => {
                        process.exit()
                    }, 2);
                }
                else{
                    const runner = launch(
                        {"startupPage": __dirname + data.app,
                        "chromeFlags": ["--app="+ __dirname + data.app]
                    });
                    setTimeout(() => {
                        process.exit()
                    }, 2);
                }
            }
            else{
                console.log("Please specify the correct html file location.");
            }
        }
        else{
            console.log("Please specify the html file using 'app':'fileLocation'");
        }
    }
    else{
        console.log("settings.json does not exist \nCreate a settings.json to continue \nfor more details kindly go to the official website");
    }
}
if (arg.includes("--v") || arg.includes("--version")) {
    console.log("v2022.1");
}