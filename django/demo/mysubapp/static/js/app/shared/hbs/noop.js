define(function( require, exports, module ){
    /**
     * An example HBS helper, use as template for additional helpers
     */

    var handlebars = require("hbs/handlebars");

    function noop(context, options) {
        // debugger;
    }

    handlebars.registerHelper("noop", noop);
    return noop;

});