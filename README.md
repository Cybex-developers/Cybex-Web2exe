# How to use cybex-web2exe

make a settings.json file in the root of the app

write `{ "app" : "HTML-File-Location" }` and 

Run command `cwe --run` to test your app


## Parameters in Settings.json

|parameter|input value|Usage|
|----|-----|-------|
|height|number|specifies the height of the window|
|width|number|specifies the width of the window|
|start_maximized|true/false|tells whether the app has to started maximized or not|


## Demo settings.json
```JSON
{
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
Automatically clears the cache after the build!!