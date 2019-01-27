(function () {
    'use strict';

    angular
        .module('home')
        .controller('addProgramController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', '$stateParams',
            'AddProgramResource', 'CategoriesPrepService', 'daysPrepService', 'itemsssPrepService', addProgramController]);


    function addProgramController($rootScope, blockUI, $scope, $filter, $translate, $state, $localStorage, authorizationService,
        appCONSTANTS, ToastService, $stateParams, AddProgramResource, CategoriesPrepService, daysPrepService, itemsssPrepService) {

        // $('.pmd-sidebar-nav>li>a').removeClass("active")
        // $($('.pmd-sidebar-nav').children()[3].children[0]).addClass("active")

        // blockUI.start("Loading...");

        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;

        // $scope.ProgramName = "";
        // $scope.ProgramDescription = "";
        vm.ProgramDaysCount = 0;
        vm.MealPerDay = 0;
        $scope.ProgramDiscount = 0;
        $scope.IsBreakFast = false;
        $scope.IsSnack = false;
        $scope.ProgramPrice = 0;
        $scope.ProgramCost = 0;
        $scope.ProgramVAT = 0;
        // $scope.ProgramDiscount = 0;
        $scope.ProgramTotalPrice = 0;
        vm.dayList = daysPrepService;
        $scope.CategoriesPrepService = CategoriesPrepService;
        $scope.itemsssPrepService = itemsssPrepService;
        $scope.itemList = [];
        //$scope.itemModel = [];
        //$scope.variableitemmodel;
        console.log($scope.itemList);
        vm.SelectedDays = [];
        vm.progCountList = [];

        $scope.deletedItem = false;
        $scope.getData = function (itemModel, day, meal) {
            // debugger;
            // var allDayMeal = $scope.itemList.filter(x=>x.day == day && x.meal == meal);
            var differntMeal = $scope.itemList.filter(x=> (x.day == day && x.meal != meal) || (x.day != day) );
            $scope.itemList = [];
            $scope.itemList = angular.copy(differntMeal);
            itemModel.forEach(element => {
                element.day = day;
                element.meal = meal;
                // element.itemModel = element;
                //$scope.itemList=[];
                $scope.itemList.push(element);
            });


            
           
            console.log($scope.itemList);
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
            newProgram.isBreakfast = $scope.IsBreakFast;
            newProgram.isSnack = $scope.IsSnack;
            newProgram.programDiscount = vm.ProgramDiscount;
            newProgram.isAdmin = true;
            newProgram.isForClient = false;
            newProgram.isDeleted = false;
            newProgram.$create().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");
                    $state.go('Category');

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                }
            );
        }


    }

})();
