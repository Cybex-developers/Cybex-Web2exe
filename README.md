# How to use cybex-web2exe

make a settings.json file in the root of the app

write `{ "app" : "HTML-File-Location" }` and 

Run command `cwe --run` to test your app


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
    "version": "2022.2.2",
    "copyright": "Copyright (c) Cybex Studios 2022",
    "app": "./public/index.html",
    "start_maximized": false,
    "width": "600",
    "height": "440"
}
```

## Steps to build executable
1. run `npm init`,it will create package.json file in the root of your app. Ignore if already has package.json in the root your of your app 
2. run command `npm i chrome-runner path --save`.
3. run command `cwe --build` to build executable.

## What's new:
Automatically clears the cache after the build!!<br>
5 New paramters i.e. name,author,description,version,copyright!!