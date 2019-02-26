(function () {
    'use strict';

    angular
        .module('core', [
            'ngResource',
            'ui.router',
            'ngStorage',
            'permission',
            //'ui.event',
            'ngProgressLite',
           // 'ui.bootstrap', 
             'pascalprecht.translate',
           'blockUI'
        ]);
}());
