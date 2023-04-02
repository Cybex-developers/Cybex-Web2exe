![version](https://img.shields.io/badge/release-2022.6.0-blue)
![license](https://img.shields.io/badge/license-MIT-orange)
![website](https://img.shields.io/badge/website-https%3A%2F%2Fcybex--developers.github.io%2FCybex__web2exe-blueviolet)
![size](https://img.shields.io/badge/executable%20size-30mb%20uncompressed-%2308f)

# How to use cybex-web2exe

make a settings.json file in the root of the app
write `{ "app" : "HTML-File-Location" }` and

## Parameters in Settings.json
For detailed documentation, visit https://cybex-developers.github.io/Cybex_web2exe

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
    "version": "2022.6.1",
    "copyright": "Copyright (c) Cybex Studios 2023",
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

## API :
cwe.setSetting() - used to set a setting in the system so that it will be presreved when app restared <br>
usage : cwe.setSetting("language","en-in") <br><br>

cwe.getSetting() - returns a setting which you have set <br>
usage : cwe.getSetting("language")  //will return en-in in the previous case <br><br>

cwe.getAllSettings() - returns all the settings which you have set <br>
usage : cwe.getAllSettings() <br><br>

cwe.removeSetting() - remove a setting which you have set <br>
usage : cwe.removeSetting("language")  //removes language setting<br><br>

cwe.removeAllSettings() - removes all the settings which you have set <br>
usage : cwe.removeAllSettings() <br><br>


## What's new :
1. This project has been deprecated

## What will be new:
There will be no new features as the product is already deprecated