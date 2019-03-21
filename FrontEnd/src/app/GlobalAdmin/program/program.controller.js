(function () {
    'use strict';

    angular
        .module('home')
        .controller('programController', ['$scope', 'blockUI', '$stateParams', '$translate', 'settingsPrepService', 'programPrepService'
            , programController])

    function programController($scope, blockUI, $stateParams, $translate, settingsPrepService, programPrepService) {
        $scope.settingsPrepService = settingsPrepService;
        localStorage.setItem('ProgramDiscount', $scope.settingsPrepService.programDiscount);

        $scope.programPrepService = programPrepService.results;
        blockUI.stop();

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
