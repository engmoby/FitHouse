(function () {
    'use strict';

    angular
        .module('home')
        .controller('editProgramMealController', ['$scope', 'blockUI', '$filter', '$translate',
            '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', '$stateParams'
            , 'ProgramId', 'DayCount', 'MealCount', 'progDetailsPrepService', 'itemsssPrepService'
            , '$uibModalInstance', 'callBackFunction', 'UpdateProgramDetailsResource', editProgramMealController]);


    function editProgramMealController($scope, blockUI, $filter, $translate,
        $state, $localStorage, authorizationService, appCONSTANTS, ToastService, $stateParams,
        ProgramId, DayCount, MealCount, progDetailsPrepService, itemsssPrepService,
        $uibModalInstance, callBackFunction, UpdateProgramDetailsResource) {

        // $('.pmd-sidebar-nav>li>a').removeClass("active")
        // $($('.pmd-sidebar-nav').children()[3].children[0]).addClass("active")

        // blockUI.start("Loading...");
        $scope.selectedLanguage = $localStorage.language;
        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;

        $scope.itemsssPrepService = itemsssPrepService;
        $scope.itemList;

        console.log($scope.itemsssPrepService);

        vm.close = function () {
            $uibModalInstance.dismiss();
            //  $uibModalInstance.dismiss('cancel');
            // callBackFunction();
        }


        vm.UpdateProgram = function () {
            var test = new UpdateProgramDetailsResource();
            test.items = $scope.itemList;
            test.programDays = DayCount;
            test.noOfMeals = MealCount;
            test.programId = ProgramId;

            test.$updateProgramDetails().then(
                function (data, status) {
                    $uibModalInstance.dismiss();
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('EditedSuccessfully'), "success");


                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );

            // test.$updateProgramDetails({programId:ProgramId, dayCount:DayCount, mealCount:MealCount, items: $scope.itemList}).then(function (results) {
            //     var test = results;
            // },
            // function (data, status) {
            //     ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
            // });
        }
    }

})();
