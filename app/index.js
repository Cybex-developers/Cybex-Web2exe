#!/usr/bin/env node

const arg = process.argv;
const {launch} = require('chrome-runner');
const path = require("path")
const {exec} = require("pkg");
const fs = require('fs');
__dirname = path.resolve();

if (arg.includes("--run")) {
    if (fs.existsSync('./settings.json')) {
        const data = JSON.parse(fs.readFileSync("./settings.json"));

        if (data.app != null) {
            if (fs.existsSync(data.app)) {
                let parameters = ["--app="+ __dirname + data.app]
                if (data.start_maximized == true) {
                    parameters.push(" --start-maximized")
                }
                if (data.height != null) {
                    if (parseInt(data.height) != "NaN") {
                        if (data.width != null) {
                            if (parseInt(data.width) != "NaN") {
                                parameters.push(" --window-size="+ data.width +"," + data.height)
                            }
                        }
                        else if (data.width == null) {
                            parameters.push(" --window-size=600," + data.height)
                        }
                    }
                }
                if (data.width != null) {
                    if (data.height == null) {
                        parameters.push(" --window-size=" + data.width + ",600")
                    }
                }

                setTimeout(() => {
                    const runner = launch(
                        {"startupPage": __dirname + data.app,
                        "chromeFlags": parameters
                    });
                    setTimeout(() => {
                            process.exit()
                    }, 2);
                }, 2);
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
if (arg.includes("--build")) {
    const data = JSON.parse(fs.readFileSync("./settings.json"));

    if (data.app != null) {
        if (fs.existsSync(data.app)) {
            if (data.name != null) {
                let parameters = []
                if (data.start_maximized == true) {
                    parameters.push(" --start-maximized")
                }
                if (data.height != null) {
                    if (parseInt(data.height) != "NaN") {
                        if (data.width != null) {
                            if (parseInt(data.width) != "NaN") {
                                parameters.push(" --window-size="+ data.width +"," + data.height)
                            }
                        }
                        else if (data.width == null) {
                            parameters.push(" --window-size=600," + data.height)
                        }
                    }
                }
                if (data.width != null) {
                    if (data.height == null) {
                        parameters.push(" --window-size=" + data.width + ",600")
                    }
                }
                setTimeout(() => {
                        parameters = `["--app=" + __dirname + "` + data.app + `"]`;
        
                        let text = `
        const {launch} = require('chrome-runner');
        const path = require("path")
        __dirname = path.resolve();
            
        const runner = launch(
            {"startupPage": __dirname + "`+ data.app + `",
            "chromeFlags": ` + parameters + `
        });
        setTimeout(() => {
            process.exit()
        }, 2);`
                        fs.writeFileSync("./cwe.js",text,"utf8")
                        exec(["cwe.js","--target","node12-win-x64","--output",data.name + ".exe"]);
                }, 2);
            }
            else{
                console.log("Please specify the name of your application in settings.json");
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