define(function (require, exports, module) {

var marionette = require("marionette");
var modals     = require("built/app/modals");
var vent       = require("built/app/vent").vent;

var AppModalRegion = marionette.Region.extend({
    el: ".js-modal",

    initialize: function() {
        this.initModals();
    },

    initModals: function() {
        this.listenTo(vent, modals.events.PRESENT, this._presentModal);
        this.listenTo(vent, modals.events.DISMISS, this._dismissModal);
    },

     _presentModal: function(view){
        this.show(view);
    },

    _dismissModal: function(modalView){
        this.empty();
        modals.nextModal();
    }
});

exports.AppModalRegion = AppModalRegion;

});