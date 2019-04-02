(function () {
    'use strict';

    angular
        .module('home')
        .controller('addProgramController', ['$scope', 'blockUI', '$filter', '$translate',
            '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', '$stateParams',
            'AddProgramResource', 'daysPrepService', 'settingsPrepService',
            'AllcategoriesPrepService', 'CategoryResource', 'ItemResource', addProgramController]);


    function addProgramController($scope, blockUI, $filter, $translate, $state, $localStorage, authorizationService,
        appCONSTANTS, ToastService, $stateParams, AddProgramResource, daysPrepService, settingsPrepService,
        AllcategoriesPrepService, CategoryResource, ItemResource) {

        // $('.pmd-sidebar-nav>li>a').removeClass("active")
        // $($('.pmd-sidebar-nav').children()[3].children[0]).addClass("active")

        // blockUI.start("Loading...");

        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;
        vm.daysCount = 0;
        vm.mealsCount = 0;
        // $scope.ProgramName = "";
        // $scope.ProgramDescription = "";
        vm.ProgramDaysCount = 0;
        vm.MealPerDay = 0;
        vm.ProgramDiscount = 0;
        vm.IsBreakFast = false;
        vm.IsSnack = false;
        vm.ProgramPrice = 0;
        vm.ProgramCost = 0;
        vm.ProgramVAT = 0;
        // vm.ProgramDiscount = 0;
        vm.ProgramTotalPrice = 0;
        vm.dayList = daysPrepService;
        // vm.CategoriesPrepService = CategoriesPrepService;
        // $scope.itemsssPrepService = itemsssPrepService;
        vm.itemList = [];
        //$scope.itemModel = [];
        //$scope.variableitemmodel;
        // console.log(vm.itemList);
        vm.SelectedDays = [];
        vm.progCountList = [];

        vm.Setting = settingsPrepService;

        vm.deletedItem = false;

        vm.categories = AllcategoriesPrepService;
        vm.items = [];
        vm.itemSizes = [];
        vm.daylistCount = []
        for (var j = 0; j < vm.daysCount; j++) {
            var mealList = []
            for (var k = 0; k < vm.mealsCount; k++) {
                mealList.push({ selectedItemList: [] })
            }
            vm.daylistCount.push({
                meals: mealList
            })
        }
        vm.changeDayCount = function(){
            if (vm.daysCount > vm.daylistCount.length) {
                for (var j = vm.daylistCount.length; j < vm.daysCount; j++) {
                    var mealList = []
                    for (var k = 0; k < vm.mealsCount; k++) {
                        mealList.push({ selectedItemList: [] })
                    }
                    vm.daylistCount.push({
                        meals: mealList
                    })
                }
            }
            else if(vm.daysCount < vm.daylistCount.length){
                for (var j = vm.daylistCount.length; j > vm.daysCount; j--) {
                    vm.daylistCount.pop();
                }
            }
            updateItemList();
        }
        vm.changeMealCount = function(){
            vm.daylistCount.forEach(day => {
                if (vm.mealsCount > day.meals.length) {
                    for (var j = day.meals.length; j < vm.mealsCount; j++) {
                        // var mealList = []
                        // for (var k = 0; k < vm.mealsCount; k++) {
                        //     mealList.push({ selectedItemList: [] })
                        // }
                        day.meals.push({
                             selectedItemList: [] 
                        })
                    }
                }
                else if(vm.mealsCount < day.meals.length){
                    for (var j = day.meals.length; j > vm.mealsCount; j--) {
                        day.meals.pop();
                    }
                }
            });
            updateItemList();
        }
        function updateItemList(){
            var temp = angular.copy(vm.itemList);
            var deletedItems = vm.itemList.filter(x=>x.dayNumber > vm.daysCount || x.mealNumberPerDay > vm.mealsCount);
            // vm.itemList.forEach(element => {
            //     if(element.dayNumber > vm.daysCount || element.mealNumberPerDay > vm.mealsCount){
            //         vm.itemList.splice(vm.itemList.indexOf(element), 1);
            //     }
            // });
            deletedItems.forEach(element => {
                
                    vm.itemList.splice(vm.itemList.indexOf(element), 1);
            });
            console.log(vm.itemList);
        }
        vm.ConvertToNumber = function () {
            // vm.daysCount = parseInt(vm.ProgramDaysCount, 10);
            // vm.mealsCount = parseInt(vm.MealPerDay, 10);
            if ((vm.ProgramDaysCount != null && vm.ProgramDaysCount != 0) || (vm.MealPerDay != null && vm.MealPerDay != 0)) {
                vm.daysCount = parseInt(vm.ProgramDaysCount, 10);
                vm.mealsCount = parseInt(vm.MealPerDay, 10);
            }
            else {
                vm.ProgramDaysCount = "";
                vm.MealPerDay = "";
            }
            
            // vm.dayList.forEach(day  => {
            //     if (vm.mealsCount > day.meals.length) {
            //         var mealList = []
            //         for (var k = 0; k < vm.mealsCount; k++) {
            //             mealList.push({ selectedItemList: [] })
            //         }
            //     }
            //     else if(vm.daysCount > vm.dayList.length){
            //         vm.dayList.pop();
            //     }   
            // });
        }

        $scope.discountChange = function () {
            // vm.ProgramPrice = 0;
            // vm.ProgramCost = 0;
            // vm.ProgramVAT = 0;
            // vm.ProgramTotalPrice = 0;
            // for (var i = 0; i < vm.itemList.length; i++) {
            //     vm.ProgramPrice = vm.ProgramPrice + vm.itemList[i].price;
            //     vm.ProgramCost = vm.ProgramCost + vm.itemList[i].cost;
            //     vm.ProgramVAT = vm.ProgramVAT + vm.itemList[i].vat;
            //     vm.ProgramTotalPrice = (vm.ProgramPrice + vm.ProgramVAT) - vm.ProgramDiscount;
            // }
            vm.ProgramTotalPrice = vm.totalPrice - (vm.totalPrice * (vm.ProgramDiscount / 100));
            vm.ProgramTotalPriceBefore = vm.totalPrice;
        }

        vm.changeCategory = function (selectedCategoryId, meal) {
            meal.isloading = true;
            CategoryResource.GetAllActiveItems({ categoryId: selectedCategoryId, pagesize: 0 }).$promise.then(function (results) {
                meal.items = results.results;
                meal.isloading = false;
            },
                function (data, status) {
                    meal.isloading = false;
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                });
        }

        vm.changeItem = function (selectedItemId, meal) {
            meal.isloading = true;
            ItemResource.GetAllItemSizes({ itemId: selectedItemId }).$promise.then(function (results) {
                meal.itemSizes = results;
                meal.isloading = false;
            },
                function (data, status) {
                    meal.isloading = false;
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                });
        }

        vm.removeItem = function (item, meal) {
            // meal.selectedItemList.splice(index, 1);
            meal.selectedItemList.splice(meal.selectedItemList.indexOf(item), 1);
            vm.itemList.splice(vm.itemList.indexOf(item), 1);
        }

        $scope.getData = function (itemModel, day, mealNumber, meal, type) {


            // debugger;
            // var allDayMeal = $scope.itemList.filter(x=>x.day == day && x.meal == meal);
            // var differntMeal = vm.itemList.filter(x => (x.dayNumber == day && x.mealNumberPerDay != mealNumber) || (x.dayNumber != day));
            // vm.itemList = [];
            // vm.itemList = angular.copy(differntMeal);

            // itemModel.forEach(element => {
            meal.selectedCategoryId = 0;
            meal.selectedItem = null;
            meal.selectedItemSize = null;
            meal.items = [];
            meal.itemSizes = [];
            itemModel.dayNumber = day;
            itemModel.mealNumberPerDay = mealNumber;
            itemModel.itemType = type;
            // element.itemModel = element;
            //$scope.itemList=[];
            vm.itemList.push(itemModel);
            if (meal.selectedItemList == null)
                meal.selectedItemList = [];
            meal.selectedItemList.push(itemModel)
            // });

            // console.log(vm.itemList);

            vm.ProgramPrice = 0;
            vm.ProgramCost = 0;
            vm.ProgramVAT = 0;
            vm.ProgramTotalPrice = 0;
            vm.ProgramTotalPriceBefore = 0;
            vm.totalPrice = 0;
            for (var i = 0; i < vm.itemList.length; i++) {
                vm.ProgramPrice = vm.ProgramPrice + vm.itemList[i].price;
                vm.ProgramCost = vm.ProgramCost + vm.itemList[i].cost;
                vm.ProgramVAT = vm.ProgramVAT + vm.itemList[i].vat;
                vm.totalPrice += vm.itemList[i].totalPrice;
            }
            vm.ProgramTotalPrice = vm.totalPrice - (vm.totalPrice * (vm.ProgramDiscount / 100));
            vm.ProgramTotalPriceBefore = vm.totalPrice;
        }

        // vm.validateMeal = function () {
        //     var inValid = false
        //     vm.itemList.forEach(element => {
        //         if(element. == ProgramDaysCount)
        //     });
        //     return inValid;
        // }

        //Model
        vm.currentStep = 1;
        vm.steps = [
            {
                step: 1,
                name: "Step 1",
                template: "./app/GlobalAdmin/Program/templates/newStepOne.html"
            },
            {
                step: 2,
                name: "Step 2",
                template: "./app/GlobalAdmin/Program/templates/newStepTwo.html"
            },
            {
                step: 3,
                name: "Step 3",
                template: "./app/GlobalAdmin/Program/templates/newStepThree.html"
            }
        ];
        vm.user = {};

        //Functions
        vm.gotoStep = function (newStep) {
            vm.currentStep = newStep;
        }

        vm.getStepTemplate = function () {
            for (var i = 0; i < vm.steps.length; i++) {
                if (vm.currentStep == vm.steps[i].step) {
                    return vm.steps[i].template;
                }
            }
        }

        vm.showDDL = function () {
            $(".select-add-tags").select2({
                tags: true,
                theme: "bootstrap",
                insertTag: function (data, tag) {
                    // Insert the tag at the end of the results
                    data.push(tag);
                }
            });

            $(".select-tags").select2({
                tags: false,
                theme: "bootstrap",
            })

            $('.select-with-search').select2({
                theme: "bootstrap"
            });
        }

        vm.DaysNotValid = false;
        vm.ValidateExcludes = function () {
            if (vm.SelectedDays.length == 7) {
                vm.DaysNotValid = true;
            }
        }

        vm.AddNewProgram = function () {
            blockUI.start("Loading...");
            var newProgram = new AddProgramResource();
            newProgram.programNameDictionary = vm.titleDictionary;
            newProgram.programDescriptionDictionary = vm.descriptionDictionary;
            newProgram.isActive = true;
            newProgram.programDays = vm.ProgramDaysCount;
            newProgram.noOfMeals = vm.MealPerDay;
            newProgram.isBreakfast = vm.IsBreakFast;
            newProgram.isSnack = vm.IsSnack;
            newProgram.programDiscount = vm.ProgramDiscount;
            newProgram.isAdmin = true;
            newProgram.isForClient = false;
            newProgram.isDeleted = false;
            newProgram.programDetails = vm.itemList;
            newProgram.days = vm.SelectedDays;
            newProgram.price = vm.ProgramTotalPrice;
            newProgram.$create().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");
                    blockUI.stop();
                    $state.go('program');
                },
                function (data, status) {
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }


    }

})();
