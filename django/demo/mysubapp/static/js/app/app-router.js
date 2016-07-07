define(function (require, exports, module) {

var marionette = require("marionette");

var AppRouter = marionette.AppRouter.extend({
    appRoutes:{
        
        "*default":"default"
    },

    constructor: function(options) {
        this.options = options;

        // docs claim that controller cna be configured with
        // options, but it does not seem to actually work
        this.controller = this.getOption("controller");
        marionette.AppRouter.prototype.constructor.apply(this, arguments);
    }
});

exports.AppRouter = AppRouter;

});