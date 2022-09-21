#!/usr/bin/env node

const path = require("path")
const {exec} = require("pkg");
const fs = require('fs-extra');
const PELibrary = require('pe-library');
const ResEdit = require('resedit');
const cFile = require("./files.js")
__dirname = path.resolve();

module.exports = function () {
    let mss = 0;
    setInterval(function () {
        mss = mss + 1;
    },1)
    console.log("reading settings.json");
    const data = JSON.parse(fs.readFileSync("./settings.json"));
    if (fs.existsSync('./settings.json')) {
        if (data.app != null) {
            if (fs.existsSync(data.app)) {
                if(data.icon){
                    if(fs.existsSync(__dirname + "/" + data.icon)){
                        let iconF = data.icon.toString()
                        if(iconF.substr(iconF.length - 4 ,iconF.length) == ".ico"){}
                        else{
                            console.log("icon file must be in .ico file format")
                            process.exit();
                        }
                    }
                    else{
                        console.log("please specify a correct icon file location")
                        process.exit();
                    }
                }
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
                {"startupPage": __dirname + "/" + "` + data.app + `",
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
                            exec(["cwe.js","--target","node12-win-x64","--output","file_to_run.exe"]).then(function () {
                                console.clear();
                                function createBaseApp(callback){
                                    fs.unlinkSync("./cwe.js")
                                    let datay = fs.readFileSync("file_to_run.exe");
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
                                    fs.writeFile("file_to_run.exe", new Buffer.from(newBinary),function () {

                                        callback()
                                    });
                                }
                                createBaseApp(function () {
                                    let fDir = __filename.substr(0,__filename.lastIndexOf("/"));
                                    fDir = __filename.substr(0,__filename.lastIndexOf("\\"));

                                    fs.writeFileSync("cwe.exe","");
                                    fs.copyFileSync(path.join(fDir ,"..\\") + 'cwe.exe',__dirname + "\\cwe.exe")

                                    let datay1 = fs.readFileSync("cwe.exe");
                                    let exe1 = PELibrary.NtExecutable.from(datay1);
                                    let res1 = PELibrary.NtExecutableResource.from(exe1);
                                    let viList1 = ResEdit.Resource.VersionInfo.fromEntries(res1.entries);
                                    let vi1 = viList1[0];
                                    if (data.description) {
                                        vi1.setStringValues({ lang: 1033, codepage: 1200 },{
                                            FileDescription: data.description,
                                            ProductName: data.name,
                                            OriginalFilename: data.name + ".exe",
                                        });
                                    }
                                    else{
                                        vi1.setStringValues({ lang: 1033, codepage: 1200 },{
                                            FileDescription: 'A full fledged node module to make windows apps with web technologies like HTML,CSS,Javascript etc."',
                                            ProductName: data.name,
                                            OriginalFilename: data.name + ".exe",
                                        });
                                    }
                                    if(data.copyright){
                                        vi1.setStringValues({ lang: 1033, codepage: 1200 },{
                                            LegalCopyright : data.copyright
                                        })
                                    }
                                    else{
                                        vi1.setStringValues({ lang: 1033, codepage: 1200 },{
                                            LegalCopyright : "Copyright (c) Cybex Studios 2022"
                                        })
                                    }
                                    if(data.author){
                                        vi1.setStringValues({ lang: 1033, codepage: 1200 },{
                                            CompanyName : data.author
                                        })
                                    }
                                    else{
                                        vi1.setStringValues({ lang: 1033, codepage: 1200 },{
                                            CompanyName : "Cybex Studios"
                                        })
                                    }
                                    if (data.version) {vi1.setFileVersion(data.version);vi1.setProductVersion(data.version);}
                                    else{vi1.setFileVersion(2022, 1, 9, 0, 1033);vi1.setProductVersion(2022,1,9,0,1033)}

                                    if(data.icon){
                                        let iconFile = ResEdit.Data.IconFile.from(fs.readFileSync(__dirname + '/' + data.icon));

                                        ResEdit.Resource.IconGroupEntry.replaceIconsForResource(
                                            res1.entries, 101, 1033,
                                            iconFile.icons.map((item) => item.data)
                                        );
                                    }


                                    vi1.outputToResourceEntries(res1.entries);
                                    res1.outputResource(exe1);
                                    let newBinary1 = exe1.generate();
                                    fs.writeFile(data.name + ".exe", new Buffer.from(newBinary1),function () {
                                        fs.unlinkSync("cwe.exe")
                                        console.log("build successful!")
                                        console.log(" build completed in  " + mss + "ms");
                                        process.exit()
                                    });
                                })
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
