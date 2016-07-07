define(function(require, exports, module){

var _              = require("underscore");
var $              = require("jquery");
var backbone       = require("backbone");
var app            = require("app/app");
var AppRouter      = require("app/app-router").AppRouter;
var AppController  = require("app/app-controller").AppController;
var AppModalRegion = require("app/shared/built/app-modal-region").AppModalRegion;

require("app/renderer");
require("backbone/stickit");

function onStart() {
    var controller = new AppController();
    var router = new AppRouter({controller: controller});
    // *note*: app.addRegions is deprecated and may be removed
    // in a future release
    app.addRegions({
        modal: AppModalRegion,
        main: ".js-main"
    });

    app.router = router;

    backbone.history.start({pushState: false, hashChange: true});
}

app.once("start", onStart);

$(function(){
    app.start();
})

});