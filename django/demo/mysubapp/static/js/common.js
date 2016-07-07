require.config({

  baseUrl: "static/js",

  paths : {
    "marionette": "vendor/backbone/marionette",
    "underscore": "vendor/underscore/lodash",

    // required by TimelineMax
    "TweenLite": "vendor/animation/greensock/TweenLite",
  },

   packages: [

        {
            location: "app",
            name: "app"
        },

        {
            location: "vendor/jquery",
            name: "jquery",
            main:"jquery"
        },

        {
            location: "vendor/backbone",
            name: "backbone",
            main:"backbone"
        },

        {
            location: "vendor/built",
            name: "built"
        },

        {
            location: "vendor/require/hbs",
            name: "hbs",
            main:"hbs"
        },

        {
            location: "vendor/animation/greensock",
            name: "gsap"
        },
    ],

    map: {
        "*": {
            "handlebars": "hbs/handlebars",
        },
    },

  hbs: {
        templateExtension : "html",
        // if disableI18n is `true` it won"t load locales and the i18n helper
        // won"t work as well.
        disableI18n : true,
        helperDirectory: "app/shared/hbs/"
  },

  shim : {

    "backbone": {
        "deps": ["jquery", "underscore"],
        "exports": "Backbone"
    },

    "backbone/stickit" : {
      "deps" : ["backbone"],
      "exports" : "Stickit"
    },

    "jquery/mockjax": {
        "deps": ["jquery"],
        "exports": "jquery"
    },

    "gsap/TweenMax": {
        "exports": "TweenMax"
    },

    "gsap/TimelineMax": {
        "exports": "TimelineMax"
    },
  },

  // introduced in requirejs 2.1.11, helps Backbone along.
  // http://jrburke.com/2014/02/16/requirejs-2.1.11-released/
  wrapShim: true,

});