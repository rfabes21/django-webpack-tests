define(function (require, exports, module) {

var marionette = require("marionette");
var modals     = require("built/app/modals");
var activity   = require("built/app/activity");
var keys       = require("built/app/keys");
var vent       = require("built/app/vent");
var app        = require("app/app");

var AppModals = marionette.Object.extend({
    constructor: function(options) {
        this.options = options;
        this._constructorInitialize();
    },

    _constructorInitialize: function() {
        this.initKeys();
        this.initModals();
    },

    present: function(modalView, onComplete) {
        var promise = modals.presentModal(modalView);

        promise.then(function(){
            if(_.isFunction(onComplete)) onComplete();
             modals.dismissModal();
        }.bind(this));

        return promise;
    },

    dismiss: function() {
        modals.dismissModal();
    },

    /**
     * initialize built key management
     */
    initKeys: function() {
        keys.initialize({modals: modals});
        keys.registerInResponderChain(this);
    },

    _keyDown: function(e) {
        var keyFromEvent = keys.getKeyFromEvent(e)
        var keyCode      = e.keyCode;

        var ESCAPE = 27; // unfortunately not handled by getKeyFromEvent

        if(keyCode === ESCAPE) {
            modals.dismissModal();
        }
    },

    /**
     * initialize built modal management
     */
    initModals: function() {
        this.listenTo(vent, modals.events.PRESENT, this._presentModal);
        this.listenTo(vent, modals.events.DISMISS, this._dismissModal);
    },

     _presentModal: function(modalView){
        app.modal.show(modalView);
    },

    _dismissModal: function(modalView){
        app.modal.empty();
        modals.nextModal();
    }
});

exports.AppModals = AppModals;


});