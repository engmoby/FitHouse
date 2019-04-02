(function () {
    'use strict';

    angular
        .module('home')
        .controller('editProgramMealController', ['$scope', 'blockUI', '$filter', '$translate',
            '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', '$stateParams'
            , 'ProgramId', 'DayCount', 'MealCount', 'itemType', 'progDetailsPrepService', 'AllcategoriesPrepService', 'CategoryResource', 'ItemResource'
            , '$uibModalInstance', 'callBackFunction', 'UpdateProgramDetailsResource', editProgramMealController]);


    function editProgramMealController($scope, blockUI, $filter, $translate,
        $state, $localStorage, authorizationService, appCONSTANTS, ToastService, $stateParams,
        ProgramId, DayCount, MealCount, itemType, progDetailsPrepService, AllcategoriesPrepService, CategoryResource, ItemResource,
        $uibModalInstance, callBackFunction, UpdateProgramDetailsResource) {
        //console.log(progDetailsPrepService);

        $scope.selectedLanguage = $localStorage.language;
        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;

        // $scope.itemsssPrepService = itemsssPrepService;
        vm.categories = AllcategoriesPrepService;
        vm.items = [];
        vm.itemSizes = [];

        $scope.itemList = [];
        debugger;
        vm.listOfDetails = progDetailsPrepService.programDetails;
        if (itemType == 'Normal')
            vm.testItem = vm.listOfDetails.filter(x => (x.dayNumber == DayCount && x.mealNumberPerDay == MealCount));

        if (itemType == 'BreakFast')
            vm.testItem = vm.listOfDetails.filter(x => (x.dayNumber == DayCount && x.mealNumberPerDay == 0 && x.itemType == 1));

        if (itemType == 'Snacks')
            vm.testItem = vm.listOfDetails.filter(x => (x.dayNumber == DayCount && x.mealNumberPerDay == 0 && x.itemType == 2));
        //console.log(testItem);


        vm.changeCategory = function (selectedCategoryId) {
            vm.isloading = true;
            CategoryResource.GetAllActiveItems({ categoryId: selectedCategoryId, pagesize: 0 }).$promise.then(function (results) {
                vm.items = results.results;
                vm.isloading = false;
            },
                function (data, status) {
                    vm.isloading = false;
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                });
        }

        vm.changeItem = function (selectedItemId) {
            vm.isloading = true;
            ItemResource.GetAllItemSizes({ itemId: selectedItemId }).$promise.then(function (results) {
                vm.itemSizes = results;
                vm.isloading = false;
            },
                function (data, status) {
                    vm.isloading = false;
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                });
        }
        vm.removeItem = function (index) {
            $scope.itemList.splice(index, 1);
        }
        for (var i = 0; i < vm.testItem.length; i++) {
            // var indexRate = $scope.itemsssPrepService.indexOf($filter('filter')($scope.itemsssPrepService, { 'itemId': vm.testItem[i].itemId }, true)[0]);
            // $scope.itemList.push($scope.itemsssPrepService[indexRate]);
            $scope.itemList.push(vm.testItem[i].itemSize)
        }

        // var differntMeal = vm.itemList.filter(x => (x.dayNumber == day && x.mealNumberPerDay != meal) || (x.dayNumber != day));

        //  console.log($scope.itemsssPrepService);

        vm.close = function () {
            $uibModalInstance.dismiss();
            //  $uibModalInstance.dismiss('cancel');
            // callBackFunction();
        }

        vm.addItemToList = function (model) {
            $scope.itemList.push(model);
            vm.selectedCategoryId = 0;
            vm.selectedItem = null;
            vm.selectedItemSize = null;
            vm.items = [];
            vm.itemSizes = [];

        }
        vm.UpdateProgram = function () {
            blockUI.start("Loading...");
            var test = new UpdateProgramDetailsResource();
            test.items = $scope.itemList;
            test.programDays = DayCount;
            test.noOfMeals = MealCount;
            test.programId = ProgramId;
            test.itemType = itemType;
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
