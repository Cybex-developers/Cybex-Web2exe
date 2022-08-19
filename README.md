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
    "version": "2022.4.1",
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

## What's new :
1. Major Updates to website
2. Minor Bug Fixes

## What will be new:
1. Website will have some updates
2. A complete designing library
