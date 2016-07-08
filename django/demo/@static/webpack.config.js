var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var BundleTracker = require('webpack-bundle-tracker');


module.exports = {
    // http://webpack.github.io/docs/configuration.html#context
    context: __dirname,

    // http://webpack.github.io/docs/configuration.html#entry
    entry: {
        "js/common": "common/index.js",
        "js/home": "home/index.js"
    },

    // http://webpack.github.io/docs/configuration.html#output
    output: {
        path: "../static",
        filename: "[name].js",
        // http://webpack.github.io/docs/configuration.html#output-chunkfilename
        chunkFilename: "[id].chunck.js"
    },

    // http://webpack.github.io/docs/configuration.html#plugins
    // http://webpack.github.io/docs/using-plugins.html
    plugins: [
        // https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
        new webpack.optimize.CommonsChunkPlugin({
          name: "js/common",
          filename: "js/common.js"
        }),
        new ExtractTextPlugin("css/styles.css"),
        new BundleTracker({filename: '../../webpack-stats.json'}),
    ],

    // http://webpack.github.io/docs/configuration.html#module
    module: {
        // http://webpack.github.io/docs/using-loaders.html
        loaders: [
            { test: /\.tsx?$/, exclude: /node_modules/, loader: "ts-loader" },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("style", "css!sass") }
        ],
    },
    // http://webpack.github.io/docs/configuration.html#devtool
    devtool: "source-map",

    // http://webpack.github.io/docs/configuration.html#resolve
    resolve: {
        // http://webpack.github.io/docs/configuration.html#resolve-modulesdirectories
        modulesDirectories: ["node_modules", "@modules", "@css"],
        // http://webpack.github.io/docs/configuration.html#resolve-extensions
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    }
}
