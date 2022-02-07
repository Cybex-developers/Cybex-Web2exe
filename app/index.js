#!/usr/bin/env node

const arg = process.argv;
const {launch} = require('chrome-runner');
const path = require("path")
const {exec} = require("pkg");
const fs = require('fs');
const PELibrary = require('pe-library');
const ResEdit = require('resedit');
__dirname = path.resolve();

if (arg.includes("--run")) {
    if (fs.existsSync('./settings.json')) {
        const data = JSON.parse(fs.readFileSync("./settings.json"));

        if (data.app != null) {
            if (fs.existsSync(data.app)) {
                let parameters = ["--app="+ __dirname + data.app,"--disable-web-security","--disable-gpu","--allow-file-access-from-files"]
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
                    const fileDir = __dirname + data.app.toString().substr(1,data.app.toString().length).replace(/\//g,"\\")
                    fs.readFile(fileDir,"utf8",function (err,datar) {
                        fs.writeFile(fileDir,"<script src='./cwe-client.js'></script>\n"+datar,function () {
                            const runner = launch(
                                {"startupPage": __dirname + data.app,
                                "chromeFlags": parameters
                            });
                            setTimeout(() => {
                                process.exit()
                            }, 2);
                        })
                    })
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
else if (arg.includes("--v") || arg.includes("--version")) {
    console.log("v2022.1");
}
else if (arg.includes("--help")) {
    console.log("v2022.1");
}
else if (arg.includes("--build")) {
    console.log("reading settings.json");
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
                        console.clear()
                        console.log("reading settings.json successful.");
                        console.log("creating necessary files.");
                        fs.writeFileSync("./cwe.js",text,"utf8");
                        console.clear();
                        console.log("reading settings.json successful.");
                        console.log("creating necessary files successful.");
                        console.log("building executable");
                        exec(["cwe.js","--target","node12-win-x64","--output",data.name + ".exe"]).then(function () {
                            console.clear();
                            fs.unlinkSync("./cwe.js")
                            let datay = fs.readFileSync(data.name + ".exe");
                            let exe = PELibrary.NtExecutable.from(datay);
                            let res = PELibrary.NtExecutableResource.from(exe);
                            let viList = ResEdit.Resource.VersionInfo.fromEntries(res.entries);
                            let vi = viList[0];
                            if (data.description) {
                                vi.setStringValues({ lang: 1033, codepage: 1200 },{
                                    FileDescription: data.description,
                                    ProductName: data.name,
                                    OriginalFilename: data.name + ".exe",
                                });
                            }
                            else{
                                vi.setStringValues({ lang: 1033, codepage: 1200 },{
                                    FileDescription: 'A full fledged node module to make windows apps with web technologies like HTML,CSS,Javascript etc."',
                                    ProductName: data.name,
                                    OriginalFilename: data.name + ".exe",
                                });
                            }
                            if(data.copyright){
                                vi.setStringValues({ lang: 1033, codepage: 1200 },{
                                    LegalCopyright : data.copyright
                                })
                            }
                            else{
                                vi.setStringValues({ lang: 1033, codepage: 1200 },{
                                    LegalCopyright : "Copyright (c) Cybex Studios 2022"
                                })
                            }
                            if(data.author){
                                vi.setStringValues({ lang: 1033, codepage: 1200 },{
                                    CompanyName : data.author
                                })
                            }
                            else{
                                vi.setStringValues({ lang: 1033, codepage: 1200 },{
                                    CompanyName : "Cybex Studios"
                                })
                            }
                            if (data.version) {vi.setFileVersion(data.version);vi.setProductVersion(data.version);}
                            else{vi.setFileVersion(2022, 1, 9, 0, 1033);vi.setProductVersion(2022,1,9,0,1033)}
                            
                            vi.outputToResourceEntries(res.entries);
                            res.outputResource(exe);
                            let newBinary = exe.generate();
                            fs.writeFileSync(data.name + ".exe", new Buffer.from(newBinary));
                            console.log("build successful!")
                        })
                        
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
else {
    console.log(`please enter a valid argument, all available arguments are\n
 --v\n --version\n --help\n --build\n --run`);
}