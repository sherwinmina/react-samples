module.exports = {
    entry: "./public/app/App.js",
    output: {
        path: "./public/build",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel"
            }
        ]
    }
}