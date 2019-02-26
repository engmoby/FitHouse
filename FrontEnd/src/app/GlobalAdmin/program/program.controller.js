(function () {
    'use strict';

    angular
        .module('home')
        .controller('programController', ['$scope', '$stateParams', '$translate', 'appCONSTANTS', 'programPrepService'
            , programController])

    function programController($scope, $stateParams, $translate, appCONSTANTS, programPrepService) {

        $scope.programPrepService = programPrepService.results;

        $scope.style = function () {
            return {
                'background': 'url(https://fithouseksa.com/wp-content/uploads/2018/07/fat-running.png) no-repeat',
                'background-attachment': 'fixed',
                'background-size': 'cover',
                'width': '100%',
                'width': '100%'
            };
        }

    }

}
    ());
