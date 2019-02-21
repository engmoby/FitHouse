(function () {
    'use strict';

    angular
        .module('home')
        .controller('homeController', ['$scope', '$stateParams', '$translate', '$state', 'appCONSTANTS', 'homePrepService', 'contactUsPrepService', homeController])

    function homeController($scope, $stateParams, $translate, $state, appCONSTANTS, homePrepService, contactUsPrepService) {

        $scope.home = homePrepService;
        $scope.contactUs = contactUsPrepService;
        $scope.goToCustomPage = function () {
			$state.go('Custom');

        }
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
