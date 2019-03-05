(function () {
    'use strict';

    angular
        .module('home')
        .controller('mealController', ['$scope', '$stateParams', '$translate', 'appCONSTANTS', 'mealsPrepService'
            , mealController])

    function mealController($scope, $stateParams, $translate, appCONSTANTS, mealsPrepService) {
        

        $scope.mealsPrepService = mealsPrepService.results;

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
