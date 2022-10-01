![version](https://img.shields.io/badge/release-2022.5.4-blue)
![license](https://img.shields.io/badge/license-MIT-orange)
![website](https://img.shields.io/badge/website-https%3A%2F%2Fcybex--developers.github.io%2FCybex__web2exe-blueviolet)
![size](https://img.shields.io/badge/executable%20size-30mb%20uncompressed-%2308f)

website link: https://cybex-developers.github.io/Cybex_web2exe

# How to use cybex-web2exe

make a settings.json file in the root of the app
write `{ "app" : "HTML-File-Location" }` and

## Parameters in Settings.json
For details visit https://cybex-developers.github.io/Cybex_web2exe/docs

## Creating a new project
execute command ```cwe --create```

## Steps to test/run your app:
execute command ```cwe --run```

## Steps to build executable
execute command ```cwe --build```

## Demo settings.json
```JSON
{
    "name": "Cybex Web2exe",
    "author": "Cybex Studios",
    "description": "A full fledged node module to make windows apps with web technologies like HTML, CSS, Javascript etc.",
    "version": "2022.5.4",
    "copyright": "Copyright (c) Cybex Studios 2022",
    "app": "./public/index.html",
    "start_maximized": false,
    "width": "600",
    "height": "440",
    "icon": "./favicon.ico",
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

## What's new :
1. 4 Major Bugs Fixed
2. All Vulnerabilities fixed
3. Custom Icon option improved
4. 3x faster start time

## What will be new:
1. Design Library on special occasion Dusshera.