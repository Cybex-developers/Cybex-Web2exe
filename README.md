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
## Creating a new project
execute command ```cwe --create```

## Steps to test/run your app:
execute command ```cwe --run```

## Steps to build executable
execute command ```cwe --build```

## What's new :
1. Creating New project
2. New command ```cwe --create```
3. File Creation Automation
4. Minor Bug Fixes

## What will be new:
1. Website will be released on 1<span style="font-size:9px">st</span> August,2022
2. A complete designing library
