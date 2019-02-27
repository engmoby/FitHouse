(function () {
    'use strict';

    angular
        .module('home')
        .filter('range', function () {
            return function (input, total) {
                total = parseInt(total);

                for (var i = 0; i < total; i++) {
                    input.push(i);
                }

                return input;
            }
        })
        .controller('homePageController', ['$scope', '$state', '$stateParams', '$translate', 'appCONSTANTS', 'mealsPrepService', 'programPrepService', 'settingsPrepService'
            , 'daysPrepService', homePageController])

    function homePageController($scope, $state, $stateParams, $translate, appCONSTANTS, mealsPrepService, programPrepService
        , settingsPrepService, daysPrepService) {

        $scope.mealsPrepService = mealsPrepService.results;
        $scope.programPrepService = programPrepService.results;
        $scope.settingsPrepService = settingsPrepService;
        $scope.dayList = daysPrepService;
		$scope.SelectedDays = [];

        $scope.isSnack = false;
        $scope.isBreakFast = false;

        $scope.submitCustomise = function () {
            // localStorage.setItem('programName', $scope.programName);
            // localStorage.setItem('programDescription', $scope.programDescription);
            localStorage.setItem('mealPerDay', $scope.mealPerDay);
            localStorage.setItem('programDaysCount', $scope.programDaysCount);
            localStorage.setItem('dayList', JSON.stringify($scope.SelectedDays));
            localStorage.setItem('isBreakFast', $scope.isBreakFast);
            localStorage.setItem('isSnack', $scope.isSnack);
            localStorage.setItem('itemDatetime', $scope.itemDatetime);
            /*add here the disacount value*/
            localStorage.setItem('ProgramDiscount', 0);
            $state.go('Custom');
        }

        $scope.bookMeal = function (meal) {
            // navigate to anothet page
        }
        $scope.bookProgram = function (program) {
            // navigate to anothet page
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
