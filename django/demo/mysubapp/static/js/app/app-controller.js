define(function(require, exports, module) {

var marionette = require("marionette");
var app        = require("app/app");
var keys       = require('built/app/keys');
var modals     = require("built/app/modals");




var AppController = marionette.Object.extend({

    initialize: function(options){
        keys.initialize({modals: modals});
    },

    default: function(){
        
    },

    

});

exports.AppController = AppController;

});