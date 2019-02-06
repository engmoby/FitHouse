(function () {
    'use strict';

    angular
        .module('home')
        .controller('programDetailsController', ['$scope', 'blockUI', '$filter', '$translate',
            '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', '$stateParams', 'progDetailsPrepService'
            , 'itemsssPrepService', '$uibModal', 'GetProgramDetailResource', programDetailsController]);


    function programDetailsController($scope, blockUI, $filter, $translate, $state, $localStorage, authorizationService,
        appCONSTANTS, ToastService, $stateParams, progDetailsPrepService,
        itemsssPrepService, $uibModal, GetProgramDetailResource) {
 
        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;

        vm.programDetails = progDetailsPrepService;
        console.log("sdsdsd");
        console.log(vm.programDetails);
        vm.programId;

        vm.ShowProgramMeal = function (programId, dayCount, mealCount) {
            vm.programId = programId;
            $uibModal.open({
                templateUrl: './app/GlobalAdmin/Program/templates/editProgramMeal.html',
                controller: 'editProgramMealController',
                controllerAs: 'editProgramMealCtrl',
                resolve: {
                    itemsssPrepService: function () { return itemsssPrepService; },
                    ProgramId: function () { return programId },
                    DayCount: function () { return dayCount },
                    MealCount: function () { return mealCount },
                    progDetailsPrepService: function () { return progDetailsPrepService },
                    callBackFunction: function () { return refreshPrograms }
                }
            });
        }

        function refreshPrograms() {
            blockUI.start("Loading...");

            var k = GetProgramDetailResource.getProgramDetail({ programId: vm.programId }).$promise.then(function (results) {
                vm.programDetails = results;
                blockUI.stop();

            },
                function (data, status) {
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
 
    }

})();
