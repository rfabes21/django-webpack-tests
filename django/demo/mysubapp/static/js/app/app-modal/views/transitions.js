define(function( require, exports, module ){

var _        = require("underscore");
var $        = require("jquery");
var TweenMax = require("gsap/TweenMax");

function fadeOut($el, options) {
    options = _.defaults(options || {}, {
        autoPlay: true
    });

    var deferred = new $.Deferred();
    var complete = function(){
        deferred.resolve();
    };
    var duration = 0.3; // seconds
    var props    = {opacity: "0", paused: true, ease: "Cubic.EaseOut", onComplete: deferred.resolve};
    var tween    = TweenMax.to($el, duration, props);

    if(options.autoPlay) tween.play();

    return {
        tween: tween,
        promise: deferred.promise()
    };
}

function fadeIn($el, options) {
    options = _.defaults(options || {}, {
        autoPlay: true
    });

    var deferred = new $.Deferred();
    var complete = function(){
        deferred.resolve();
    };
    var duration = 0.3; // seconds
    var props    = {opacity: "1", paused: true, ease: "Cubic.EaseOut", onComplete: deferred.resolve};
    var tween    = TweenMax.to($el, duration, props);

    if(options.autoPlay) tween.play();

    return {
        tween: tween,
        promise: deferred.promise()
    };
}

exports.fadeOut = fadeOut;
exports.fadeIn  = fadeIn;

});