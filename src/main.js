requirejs.config({
    paths: {
        'jquery': '../lib/jquery-2.1.3',
        'underscore': '../lib/underscore'
    },

    shim: {
        'underscore': {
            exports: '_'
        }
    }
});

require(['app', 'jquery'], function (App, $) {
    var app = new App($('body'));
    app.render();
});
