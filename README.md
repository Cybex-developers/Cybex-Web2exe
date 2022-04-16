# How to use cybex-web2exe

make a settings.json file in the root of the app

write `{ "app" : "HTML-File-Location" }` and 

## Parameters in Settings.json

|parameter|input value|Usage|
|----|-----|-------|
|name|string|Specifies the author name of the app|
|author|string|Specifies the author name of the app|
|version|string|Specifies the version of the app|
|description|string|Specifies the description related to the app|
|copyright|string|Specifies the Legal Copyright of the app|
|height|number|specifies the height of the window|
|width|number|specifies the width of the window|
|start_maximized|true/false|tells whether the app has to started maximized or not|


## Demo settings.json
```JSON
{
    "name": "Cybex Web2exe",
    "author": "Cybex Studios",
    "description": "A full fledged node module to make windows apps with web technologies like HTML,CSS,Javascript etc.",
    "version": "2022.2.9",
    "copyright": "Copyright (c) Cybex Studios 2022",
    "app": "./public/index.html",
    "start_maximized": false,
    "width": "600",
    "height": "440",
    "keys":{
        "zoom": false,
        "reload": true,
        "exit": false,
        "find": true,
        "print": false,
        "fullscreen": false
    },
    "devtools": true,
    "resize": true
}
```

## Steps to test/run your app:
1. Add this line to the top of your main html file `<script src="./cwe-client.js"></script>` 

## Steps to build executable
1. run `npm init`,it will create package.json file in the root of your app. Ignore if already has package.json in the root your of your app 
2. run command `npm i chrome-runner path --save`.
3. run command `cwe --build` to build executable.

## What's new :
disabling resize. <br>
automated generaton of cwe-client.js file to the location of html file

## What will be new in v2022.3:
1. Use of Node.js functions from an external file somehow like a middler.

## Note :
This is the last release of v2022.2