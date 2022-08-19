#!/usr/bin/env node

const path = require("path")
const {exec} = require("pkg");
const fs = require('fs-extra');
const PELibrary = require('pe-library');
const ResEdit = require('resedit');
const cFile = require("./files.js")
__dirname = path.resolve();

module.exports = function () {
    console.log("reading settings.json");
    const data = JSON.parse(fs.readFileSync("./settings.json"));
    if (fs.existsSync('./settings.json')) {
        if (data.app != null) {
            if (fs.existsSync(data.app)) {
                if (data.name != null) {
                    parameters = `["--app=" + __dirname + "` + data.app + `"`;
                    if (data.start_maximized == true) {
                        parameters = parameters + `," --start-maximized"`
                    }
                    if (data.height != null) {
                        if (parseInt(data.height) != "NaN") {
                            if (data.width != null) {
                                if (parseInt(data.width) != "NaN") {
                                    parameters = parameters + (`," --window-size=`+ data.width + `,` + data.height + `"`)
                                }
                            }
                            else if (data.width == null) {
                                parameters = parameters + (`," --window-size=600,` + data.height + `"`)
                            }
                        }
                    }
                    if (data.width != null) {
                        if (data.height == null) {
                            parameters = parameters + (`," --window-size=` + data.width + `,600"`)
                        }
                    }
                    parameters = parameters + "]";
                    cFile(data.app)
                    setTimeout(() => {

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
    else{
        console.log("settings.json does not exist \nCreate a settings.json to continue \nfor more details kindly go to the official website");
    }
}
