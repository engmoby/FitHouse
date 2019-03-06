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
        //console.log(progDetailsPrepService);

        $scope.selectedLanguage = $localStorage.language;
        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;

        $scope.itemsssPrepService = itemsssPrepService;
        $scope.itemList = [];
        debugger;
        vm.listOfDetails = progDetailsPrepService.programDetails;
        vm.testItem = vm.listOfDetails.filter(x => (x.dayNumber == DayCount && x.mealNumberPerDay == MealCount));
        //console.log(testItem);


        var i;
        for (i = 0; i < vm.testItem.length; i++) {
            var indexRate = $scope.itemsssPrepService.indexOf($filter('filter')($scope.itemsssPrepService, { 'itemId': vm.testItem[i].itemId }, true)[0]);
            $scope.itemList.push($scope.itemsssPrepService[indexRate]);

        }

        // var differntMeal = vm.itemList.filter(x => (x.dayNumber == day && x.mealNumberPerDay != meal) || (x.dayNumber != day));

        //  console.log($scope.itemsssPrepService);

        vm.close = function () {
            $uibModalInstance.dismiss();
            //  $uibModalInstance.dismiss('cancel');
            // callBackFunction();
        }


        vm.UpdateProgram = function () {
            blockUI.start("Loading...");
            var test = new UpdateProgramDetailsResource();
            test.items = $scope.itemList;
            test.programDays = DayCount;
            test.noOfMeals = MealCount;
            test.programId = ProgramId;

            test.$updateProgramDetails().then(
                function (data, status) {
				blockUI.stop();
                $uibModalInstance.dismiss();
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('EditedSuccessfully'), "success");
                    callBackFunction();

                },
                function (data, status) {
				blockUI.stop();
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
