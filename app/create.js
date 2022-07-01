#!/usr/bin/env node

const fs = require("fs");
const readline = require("readline");
const path = require("path")
__dirname = path.resolve();

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = function () {
    rl.question("Enter your Application Name : ",function (inp) {
        if(inp){
            fs.mkdirSync(__dirname + "/" + inp)
            fs.writeFileSync(__dirname + "/" + inp + "/index.html",
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="./cwe-client.js"></script>
    <script src="./lib/inpu.js" type="module"></script>
    <link rel="stylesheet" href="lib/cwe.css">
    <title>Document</title>
</head>
<body>
    <cwe-button>Hello World</cwe-button>
</body>
</html>`);
            fs.writeFileSync(__dirname + "/" + inp + "/settings.json",
`{
    "name": "` + inp + `",
    "author": "Cybes Studios",
    "description": "A demo app made for testing purpose.",
    "copyright": "Copyright (c) Cybex Studios 2022",
    "version": "2022.1.1",
    "app": "./index.html",
    "height": 440,
    "width": 600
}`);

            fs.mkdirSync(__dirname + "/" + inp + "/lib");

            fs.writeFileSync(__dirname + "/" + inp + "/cwe-client.js",
`var parameters = {"reload": true,"find": true,"zoom": true,"fullscreen": true,"resize": undefined,"print": true,"exit": true,"devTools": true};document.onkeydown = function (e) {let ky = e.which;let alt = e.altKey;let shft = e.shiftKey;let ctrl = e.ctrlKey;if (ctrl && ky == 78 || ctrl && ky == 84 || ctrl && ky == 85 || ctrl && ky == 68 || ctrl && ky == 72 || ctrl && ky == 74 || ctrl && ky == 117 || ctrl && ky == 71 || ctrl && ky == 83 || alt && ky == 69 || ky == 112 || ctrl && shft && ky == 78 || ctrl && shft && ky == 84 || ctrl && shft && ky == 66 || ctrl && shft && ky == 48 || ctrl && shft && ky == 79 || alt && ky == 32 || shft && ky == 27) {return false};if (parameters.fullscreen != true) {if (ky == 122) {return false}};if (parameters.print != true) {if (ctrl && ky == 80) {return false}};if (parameters.find != true) {if (ctrl && ky == 70 || ky == 114) {return false}};if (parameters.reload != true) {if (ctrl && ky == 82 || ky == 116) {return false}};if (parameters.exit != true) {if (ctrl && ky == 87 || ctrl && ky == 115 || ctrl && shft && ky == 87 || alt && 115) {return false}};if (parameters.devTools != true) {if (ctrl && shft && ky == 73 || ky == 123) {return false}};if (parameters.zoom != true) {if (ctrl && ky == 48 || ctrl && 107 || ctrl && 109) {return false}};};document.oncontextmenu = function (e) {e.preventDefault();};if(parameters.resize == false){const winSize = [window.outerWidth, window.outerHeight];window.onresize = function () {window.resizeTo(winSize[0],winSize[1]);};};
`);
            fs.writeFileSync(__dirname + "/" + inp + "/lib" + "/cwe.css",
`@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
@import url("./core/button.css");
@import url("./core/input.css");

wc-text{
    font-family: Arial;
}`);
            fs.writeFileSync(__dirname + "/" + inp + "/lib" + "/cwe.js",
`import { do_button } from "./core/button.js";
import { do_input } from "./lcore/input.js";

export function all_js() {
    do_button();do_input()
}`)

            fs.mkdirSync(__dirname + "/" + inp + "/lib/core");

            fs.writeFileSync(__dirname + "/" + inp + "/lib/core/button.css",
`cwe-button{
    display: block;
    font-family: Roboto;
    font-size: 14px;
    background: #06d;
    width: fit-content;
    color: white;
    cursor: default;
    margin: 2px;
    margin-top: 4px;
    padding: 6px;
    padding-left: 7px;
    padding-right: 7px;
    border-radius: 3px;
    transition: 0.3s background;
    user-select: none;
}
cwe-button:hover{background: #05c}
cwe-button:active{background: #07e;box-shadow: 0 0 6 #06d;}
cwe-button[type="outlined"]{
    background: white;
    box-shadow: none;
    border: 1px solid #06d;
    color: #06d;
}
cwe-button[type="outlined"]:hover{background: #f8f8f8;}
cwe-button[type="outlined"]:active{background: #06d1;}
cwe-button[type="text"]{
    background: white;
    box-shadow: none;
    color: #06d;
}
cwe-button[type="text"]:hover{background: #06d1;}
cwe-button[type="text"]:active{background: #06d2;}`);
            fs.writeFileSync(__dirname + "/" + inp + "/lib/core/input.css",
`cwe-input{
    display: block;
    font-family: Roboto;
    font-size: 14px;
    height: 18px;
    width: 200px;
    background: #f8f8f8;
    color: #333;
    cursor: default;
    margin: 2px;
    margin-top: 8px;
    font-weight: 100;
    padding: 15px;
    padding-bottom: 10px;
    border-radius: 5px 5px 0 0;
    transition: 0.3s background;
    user-select: none;
    border-bottom: 1px solid gray;
    background: attr(color);
    cursor: text;
}
cwe-input:hover{background: #eee;border-color: #444;}
cwe-input::before{
    color: #888;
    position: absolute;
    content: attr(placeholder);
    transition: 0.3s;
    margin-top: -3px;
    padding-left: 5px;
    padding-right: 5px;
}
cwe-input:focus{
    outline: none;
    border-color: #04b;
    padding-top: 20px;
    padding-bottom: 5px;
}
cwe-input:focus::before{
    margin-top: -15px;
    font-size: 11px;
    color: #04b;
}
cwe-input[has-text]{
    padding-top: 20px;
    padding-bottom: 5px;
}
cwe-input[has-text]::before{
    margin-top: -15px;
    font-size: 11px;
}
cwe-input[type="outlined"]{
    background: none;
    border: 1px solid gray;
    border-radius: 5px;
    padding-top: 12px;
    padding-bottom: 13px;
}
cwe-input[type="outlined"]::before{margin-top: 0;background: white;}
cwe-input[type="outlined"]:hover{border-color: #000;}
cwe-input[type="outlined"]:hover::before{color: #444;}
cwe-input[type="outlined"]:focus::before{margin-top: -20px;color: #06d;}
cwe-input[type="outlined"]:focus{
    border: 2px solid #06d;
    padding: 14px;
    padding-top: 11px;
    padding-bottom: 11px;
}
cwe-input[type="outlined"][has-text]::before{margin-top: -20px;}`);

            fs.writeFileSync(__dirname + "/" + inp + "/lib/core/button.js",
`export function do_button() {
    class cweButton extends HTMLElement {
        constructor() {
            super();

            if(this.getAttribute("type") == "outlined"){
                this.style.border = "1px solid " + this.getAttribute("color");
                this.style.color = this.getAttribute("color");
                this.onload = function () {
                    this.style.backgroundColor = "lime"
                }
            }
            else if(this.getAttribute("type") == "text"){
                this.style.color = this.getAttribute("color");
            }
            else{
                this.style.backgroundColor = this.getAttribute("color");
            }
        }
    }
    customElements.define('cwe-button', cweButton);
}`);
            fs.writeFileSync(__dirname + "/" + inp + "/lib/core/input.js",
`export function do_input() {
    class cweInput extends HTMLElement {
        constructor() {
            super();
            this.contentEditable = true;
            this.oninput = function () {
                if(this.innerHTML != "" && this.innerHTML != null){
                    this.setAttribute("has-text","")
                }
                else{
                    this.removeAttribute("has-text")
                }
            }
        }
    }
    customElements.define('cwe-input', cweInput);
}`);
            console.log("\x1b[32m","App created succesccfully")
            rl.close()
        }
        else{
            console.log("Please enter your application name");
        }
    })
}
