(function () {
    'use strict';

    angular
        .module('home')
        .controller('addProgramController', ['$scope', 'blockUI', '$filter', '$translate',
            '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', '$stateParams',
            'AddProgramResource', 'daysPrepService', 'settingsPrepService', 'itemsssPrepService', addProgramController]);


    function addProgramController($scope, blockUI, $filter, $translate, $state, $localStorage, authorizationService,
        appCONSTANTS, ToastService, $stateParams, AddProgramResource, daysPrepService, settingsPrepService, itemsssPrepService) {

        // $('.pmd-sidebar-nav>li>a').removeClass("active")
        // $($('.pmd-sidebar-nav').children()[3].children[0]).addClass("active")

        // blockUI.start("Loading...");

        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;

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
        $scope.itemsssPrepService = itemsssPrepService;
        vm.itemList = [];
        //$scope.itemModel = [];
        //$scope.variableitemmodel;
        console.log(vm.itemList);
        vm.SelectedDays = [];
        vm.progCountList = [];

        vm.Setting = settingsPrepService;

        vm.deletedItem = false;
        $scope.discountChange = function () {
            vm.ProgramPrice = 0;
            vm.ProgramCost = 0;
            vm.ProgramVAT = 0;
            vm.ProgramTotalPrice = 0;
            for (var i = 0; i < vm.itemList.length; i++) {
                vm.ProgramPrice = vm.ProgramPrice + vm.itemList[i].price;
                vm.ProgramCost = vm.ProgramCost + vm.itemList[i].cost;
                vm.ProgramVAT = vm.ProgramVAT + vm.itemList[i].vat;
                vm.ProgramTotalPrice = (vm.ProgramPrice + vm.ProgramVAT) - vm.ProgramDiscount;
            }
        }

        $scope.getData = function (itemModel, day, meal) {
        
        
            // debugger;
            // var allDayMeal = $scope.itemList.filter(x=>x.day == day && x.meal == meal);
            var differntMeal = vm.itemList.filter(x => (x.dayNumber == day && x.mealNumberPerDay != meal) || (x.dayNumber != day));
            vm.itemList = [];
            vm.itemList = angular.copy(differntMeal);

            itemModel.forEach(element => {
                element.dayNumber = day;
                element.mealNumberPerDay = meal;
                // element.itemModel = element;
                //$scope.itemList=[];
                vm.itemList.push(element);
            });

            console.log(vm.itemList);

            vm.ProgramPrice = 0;
            vm.ProgramCost = 0;
            vm.ProgramVAT = 0;
            vm.ProgramTotalPrice = 0;
            for (var i = 0; i < vm.itemList.length; i++) {
                vm.ProgramPrice = vm.ProgramPrice + vm.itemList[i].price;
                vm.ProgramCost = vm.ProgramCost + vm.itemList[i].cost;
                vm.ProgramVAT = vm.ProgramVAT + vm.itemList[i].vat;
                vm.ProgramTotalPrice += vm.itemList[i].totalPrice;
            }
        }
        
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
        }

        vm.AddNewProgram = function () {
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
            newProgram.price =  vm.ProgramTotalPrice;
            newProgram.$create().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");


                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }


    }

})();
