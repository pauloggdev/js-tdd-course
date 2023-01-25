const path = require('path')

module.exports = {
    entry: "./src/main.js",
    // mode: "development",
    mode: "production",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    


}