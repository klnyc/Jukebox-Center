module.exports = {
    entry: ["babel-polyfill", "./client/app.js"],
    mode: "development",
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    devtool: "source-maps",
    module : {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader"
                }
            }
        ]
    }
}