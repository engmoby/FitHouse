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

        // $('.pmd-sidebar-nav>li>a').removeClass("active")
        // $($('.pmd-sidebar-nav').children()[3].children[0]).addClass("active")

        // blockUI.start("Loading...");

        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;

        vm.programDetails = progDetailsPrepService;
        console.log(vm.programDetails);

        vm.ShowProgramMeal = function (programId, dayCount, mealCount) {
            $uibModal.open({
                templateUrl: './app/GlobalAdmin/Program/templates/editProgramMeal.html',
                controller: 'editProgramMealController',
                controllerAs: 'editProgramMealCtrl',
                resolve: {
                    itemsssPrepService: function(){ return itemsssPrepService;},
                    ProgramId :function(){ return programId},
                    DayCount : function(){return dayCount},
                    MealCount :function(){return mealCount},
                    progDetailsPrepService :function(){ return progDetailsPrepService},
                    callBackFunction : function(){ return refreshPrograms}
                }
            });
        }

        function refreshPrograms() {
            blockUI.start("Loading...");

            var k = GetProgramDetailResource.getProgramDetail().$promise.then(function (results) {
                vm.programDetails = results;
                blockUI.stop();

            },
                function (data, status) {
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }

        // debugger;

        // vm.ProgramDaysCount = 0;
        // vm.MealPerDay = 0;
        // vm.ProgramDiscount = 0;
        // vm.IsBreakFast = false;
        // vm.IsSnack = false;
        // vm.ProgramPrice = 0;
        // vm.ProgramCost = 0;
        // vm.ProgramVAT = 0;
        // vm.ProgramTotalPrice = 0;

    }

})();
