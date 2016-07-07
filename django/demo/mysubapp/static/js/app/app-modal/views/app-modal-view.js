define(function (require, exports, module) {

var _           = require("underscore");
var marionette  = require("marionette");
var template    = require("hbs!../templates/app-modal");
var modals      = require("built/app/modals");
var keys        = require('built/app/keys');
var optionUtils = require("app/shared/marionette/option-utils");
var TweenMax    = require("gsap/TweenMax");
var ModalView   = require("built/app/modals/views/modal").ModalView;
var transitions = require("./transitions");

var AppModalView = marionette.LayoutView.extend({
    template: template,

    regions: {
        modalContent: ".js-modal-content"
    },

    ui : {
        closeBtn: ".js-btn-close"
    },

    events : {
        "click": "onClick",
        "click @ui.closeBtn": "onCloseClick"
    },

    className: function() {
        var className   = "app-modal-view";
        var theme       = "app-modal-view-" + (this.options.theme || "default");
        var customClass = this.options.customClass || "";
        var classes     = [className, theme, customClass]

        return classes.join(" ");
    },

    constructor: function(options) {
        this.options   = options || {};
        this.setOption = optionUtils.proxySetOption(this);

        this._constructorInitialize();

        marionette.LayoutView.prototype.constructor.apply(this, arguments);
    },

    _constructorInitialize: function() {
        this.setOption("contentView", {required: true});
        this.bindFunctionScopes();
        this.initKeys();
    },

    bindFunctionScopes: function() {
        _.bindAll(this,
            "dispatchModalComplete",
            "doTransitionIn",
            "doTransitionOut"
        );
    },

    initKeys: function() {
        keys.registerInResponderChain(this);
    },

    /**
     * required interface for built/keys
     * @param  {[type]} e [description]
     * @return {[type]}   [description]
     */
    keyDown: function(e) {
        var isEscape = e.keyCode == 27;
        if(isEscape) this.doTransitionOut();
    },

    /**
     * required interface method for built/modals
     * @return {Any}
     */
    getData: function() {
        if(this.contentView) {
            return this.contentView.getData();
        }

        return {};
    },

    onRender: function() {
        this.initClassName();
        this.renderContentView();
        this.doTransitionIn();
    },

    initClassName: function() {
        // className is not automatically set due to "setElement"
        // in built/ModalView
        this.$el.addClass(this.className());
    },

    renderContentView: function() {
        this.modalContent.show(this.contentView);
        this.listenToOnce(
            this.contentView,
            modals.events.COMPLETE,
            this.doTransitionOut
        );
    },

    doTransitionIn: function() {
        this.$el.css("opacity", 0);
        transitions.fadeIn(this.$el);
    },

    doTransitionOut: function() {
        transitions.fadeOut(this.$el)
        .promise
        .then(this.dispatchModalComplete);
    },

    onClick: function(e) {
        if(!this.contentView) return;

        var contentEl = this.contentView.el;
        var thisEl    = this.el;
        var isOutside = e.target == thisEl || e.target == contentEl;

        if(isOutside) this.onClickOutside(e);
    },

    onClickOutside: function(e) {
        this.doTransitionOut();
    },

    onCloseClick: function(e) {
        this.doTransitionOut();
    },

    dispatchModalComplete: function() {
        this.trigger(modals.events.COMPLETE);
    }

});

exports.AppModalView = AppModalView;

});