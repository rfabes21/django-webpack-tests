var webpackConfig = require("./webpack.config.js");
var path = require('path');

module.exports = function(config) {
    // the test files will act as the entry points.
    // imports there will deal with entries.

    var entryPoints = webpackConfig.entry;
    var common = path.resolve(webpackConfig.context, '@modules', entryPoints["js/common"]);

    webpackConfig.plugins.shift(); // remove commonChunk plugin for tests

    webpackConfig.entry = {
        "js/common": common
    }

    config.set({
        frameworks: ["jasmine"],
        browsers: ["PhantomJS"],
        reporters: ["dots"],
        autoWatch: true,
        logLevel: config.LOG_INFO,
        port: 3000,

        files: [
            // all files ending in "_test"
            "@tests/*_test.js",
            "@tests/**/*_test.js",
            "@tests/*_test.ts",
            "@tests/**/*_test.ts"
            // each file acts as entry point for the webpack configuration
        ],

        preprocessors: {
            // add webpack as preprocessor
            common: ["webpack", "sourcemap"],
            "@tests/*_test.js": ["webpack", "sourcemap"],
            "@tests/**/*_test.js": ["webpack", "sourcemap"],
            "@tests/*_test.ts": ["webpack", "sourcemap"],
            "@tests/**/*_test.ts": ["webpack", "sourcemap"]
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            noInfo: true,
            stats: {
                colors: true,
                version: true,
                noInfo: true,
                debug: true,
                errorDetails: true
            }
        }
    });
};
