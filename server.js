const {launch} = require('chrome-runner');
const path = require("path")
__dirname = path.resolve();

const runner = launch(
    {"startupPage": __dirname + "/public/index.html",
    "chromeFlags": ["--app="+ __dirname +"/public/index.html"]
});
setTimeout(() => {
    process.exit()
}, 2);