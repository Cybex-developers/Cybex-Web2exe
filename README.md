# How to use cybex-web2exe

make a settings.json file in the root of the app

write "app":"HTMLfileLocation" and type

settings.json might look like {"app":"./index.html"}

Use command ```cwe --run``` to test your app


## Parameters in Settings.json

|parameter|input value|Usage|
|----|-----|-------|
|height|number|specifies the height of the window|
|width|number|specifies the width of the window|
|start-maximized|true/false|tells whether the app has to started maximized or not|