const path = require("path")
const fs = require('fs-extra');

__dirname = path.resolve();
module.exports = function (Htmlfile) {
    let Fdata = JSON.parse(fs.readFileSync("./settings.json"));
    if(Fdata.keys){
        if(Fdata.keys.reload != false){Fdata.keys.reload = true};
        if(Fdata.keys.zoom != false){Fdata.keys.zoom = true};
        if(Fdata.keys.exit != false){Fdata.keys.exit = true};
        if(Fdata.keys.find != false){Fdata.keys.find = true};
        if(Fdata.keys.fullscreen != false){Fdata.keys.fullscreen = true};
        if(Fdata.keys.print != false){Fdata.keys.print = true};
    }
    else{
        Fdata = {
            keys : {
                reload : true,
                zoom : true,
                fullscreen : true,
                exit : true,
                find : true,
                print : true
            }
        }
    }
    if(Fdata.devtools != false){Fdata.devtools = true};
    let fileLocation = Htmlfile.substr(0,Htmlfile.lastIndexOf("\\"))
    fileLocation = Htmlfile.substr(0,Htmlfile.lastIndexOf("/"))
    let text = `var parameters = {"reload": ` + Fdata.keys.reload + `,"find": ` + Fdata.keys.find + `,"zoom": ` + Fdata.keys.zoom + `,"fullscreen": ` + Fdata.keys.fullscreen + `,"resize": ` + Fdata.resize + `,"print": ` + Fdata.keys.print + `,"exit": ` + Fdata.keys.exit + `,"devTools": ` + Fdata.devtools + `};document.onkeydown = function (e) {let ky = e.which;let alt = e.altKey;let shft = e.shiftKey;let ctrl = e.ctrlKey;if (ctrl && ky == 78 || ctrl && ky == 84 || ctrl && ky == 85 || ctrl && ky == 68 || ctrl && ky == 72 || ctrl && ky == 74 || ctrl && ky == 117 || ctrl && ky == 71 || ctrl && ky == 83 || alt && ky == 69 || ky == 112 || ctrl && shft && ky == 78 || ctrl && shft && ky == 84 || ctrl && shft && ky == 66 || ctrl && shft && ky == 48 || ctrl && shft && ky == 79 || alt && ky == 32 || shft && ky == 27) {return false};if (parameters.fullscreen != true) {if (ky == 122) {return false}};if (parameters.print != true) {if (ctrl && ky == 80) {return false}};if (parameters.find != true) {if (ctrl && ky == 70 || ky == 114) {return false}};if (parameters.reload != true) {if (ctrl && ky == 82 || ky == 116) {return false}};if (parameters.exit != true) {if (ctrl && ky == 87 || ctrl && ky == 115 || ctrl && shft && ky == 87 || alt && 115) {return false}};if (parameters.devTools != true) {if (ctrl && shft && ky == 73 || ky == 123) {return false}};if (parameters.zoom != true) {if (ctrl && ky == 48 || ctrl && 107 || ctrl && 109) {return false}};};document.oncontextmenu = function (e) {e.preventDefault();};if(parameters.resize == false){const winSize = [window.outerWidth, window.outerHeight];window.onresize = function () {window.resizeTo(winSize[0],winSize[1]);};};`
    text = text + `const appData8546827 = {sourceData:{},settingsData:{}};localStorage.setItem('goti8546827', JSON.stringify(appData8546827));const cwe = {setSetting : function(name,value) {var setSetti8546827 = JSON.parse(localStorage.getItem('goti8546827'));eval("setSetti8546827.settingsData." + name + " = '" + value + "';");localStorage.setItem('goti8546827', JSON.stringify(setSetti8546827));},getSetting : function(name) {var gottensetti8546827 = JSON.parse(localStorage.getItem('goti8546827'));gottensetti8546827 = eval("gottensetti8546827.settingsData."+name);return gottensetti8546827;},getAllSettings : function() {var gottsettis8546827 = JSON.parse(localStorage.getItem('goti8546827'));gottsettis8546827 = eval("gottsettis8546827.settingsData");return gottsettis8546827;},removeSetting :function(name) {var settiToDel8546827 = JSON.parse(localStorage.getItem('goti8546827'));eval("delete settiToDel8546827.settingsData."+name);localStorage.setItem('goti8546827', JSON.stringify(settiToDel8546827));},removeAllSettings : function() {var allSetDel8546827 = JSON.parse(localStorage.getItem('goti8546827'));eval("allSetDel8546827.settingsData = {}");localStorage.setItem('goti8546827', JSON.stringify(allSetDel8546827));}}`;
    fs.writeFileSync(path.join(__dirname ,fileLocation)+ "/cwe-client.js",text)
}
