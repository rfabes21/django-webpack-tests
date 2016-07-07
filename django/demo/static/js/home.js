webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(17);


/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4), __webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, Marionette, Promise) {
	    "use strict";
	    var name = "home";
	    var view = new Marionette.View();
	    function foo() {
	        return new Promise(function (resolve) {
	            debugger;
	            resolve("foo");
	        });
	    }
	    exports.foo = foo;
	    function bar() {
	    }
	    function baz() {
	    }
	    foo()
	        .then(function (value) {
	        console.log(value);
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }

});
//# sourceMappingURL=home.js.map