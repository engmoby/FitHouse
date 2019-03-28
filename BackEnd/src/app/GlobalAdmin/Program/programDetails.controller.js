(function () {
    'use strict';

    angular
        .module('home')
        .controller('programDetailsController', ['$scope', 'blockUI', '$filter', '$translate',
            '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', '$stateParams', 'progDetailsPrepService'
            , 'AllcategoriesPrepService', '$uibModal', 'GetProgramDetailResource', programDetailsController]);


    function programDetailsController($scope, blockUI, $filter, $translate, $state, $localStorage, authorizationService,
        appCONSTANTS, ToastService, $stateParams, progDetailsPrepService,
        AllcategoriesPrepService, $uibModal, GetProgramDetailResource) {

        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;
        $scope.showBreakfast = false;
        $scope.showSnack = false;
        vm.programDetails = progDetailsPrepService;
        //console.log(vm.programDetails);
        // debugger;
        // for (var i = 0; i < vm.programDetails.programDetails.length; i++) {
        //     if (vm.programDetails.programDetails[i].dayNumber == 1 && vm.programDetails.programDetails[i].mealNumberPerDay == 1) {
        //         vm.record = vm.programDetails.programDetails[i].item;
        //         console.log(vm.record);
        //     }
        // }
        // console.log(vm.programDetails);
        vm.programId;

        vm.ShowProgramMeal = function (programId, dayCount, mealCount,itemType) {
            vm.programId = programId;
            $uibModal.open({
                templateUrl: './app/GlobalAdmin/Program/templates/editProgramMeal.html',
                controller: 'editProgramMealController',
                controllerAs: 'editProgramMealCtrl',
                resolve: {
                    AllcategoriesPrepService: function () { return AllcategoriesPrepService; },
                    ProgramId: function () { return programId },
                    DayCount: function () { return dayCount },
                    MealCount: function () { return mealCount },
                    itemType: function () { return itemType },
                    progDetailsPrepService: function () { return vm.programDetails },
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
