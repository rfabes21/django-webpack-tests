define(function(require, exports, module) {

// This file loads and runs once
// and assigns an instance of Application to the exports
// of this file.
//
// Essentially an application singleton
// You should be free to import this as necessar

var marionette = require("marionette");
module.exports = new marionette.Application();

});