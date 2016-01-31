module.exports = function(config) {
    'use strict';

    config.set({

        basePath: './',

        frameworks: ["jasmine"],

        files: [
            '../bower_components/angular/angular.js',
            '../bower_components/angular-route/angular-route.js',
            '../bower_components/angular-ui-router/release/angular-ui-router.js',
            '../bower_components/angular-mocks/angular-mocks.js',
            '../src/**/*.js',
            '../test/**/*.js'
        ],

        autoWatch: true,

        browsers: ['PhantomJS']

    });
};
