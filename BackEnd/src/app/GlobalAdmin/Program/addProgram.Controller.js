(function () {
    'use strict';

    angular
        .module('home')
        .controller('addProgramController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', '$stateParams',
            'AddProgramResource', addProgramController]);


    function addProgramController($rootScope, blockUI, $scope, $filter, $translate, $state, $localStorage, authorizationService,
        appCONSTANTS, ToastService, $stateParams, AddProgramResource) {

        // $('.pmd-sidebar-nav>li>a').removeClass("active")
        // $($('.pmd-sidebar-nav').children()[3].children[0]).addClass("active")

        // blockUI.start("Loading...");

        var vm = this;
        $scope.ProgramName = "";
        $scope.ProgramDescription = "";
        vm.ProgramDaysCount = 0;
        vm.MealPerDay = 0;
        $scope.ProgramDiscount = 0;
        $scope.IsBreakFast = false;
        $scope.IsSnack = false;
        $scope.ProgramPrice = 0;
        $scope.ProgramCost = 0;
        $scope.ProgramVAT = 0;
        $scope.ProgramDiscount = 0;
        $scope.ProgramTotalPrice = 0;
        // vm.dayList = daysPrepService;
        vm.SelectedDays = [];
        vm.progCountList = [];

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

        vm.save = function () {
            $scope.AddNewProgram = function () {
                var newProgram = new AddProgramResource();

                newContact.GroupName = vm.ContactGroupName;

                newContact.ContactName = $scope.ContactName;
                newContact.ContactEmail = $scope.ContactEmail;
                newContact.ContactMobileNum = $scope.ContactMobileNum;
                newContact.ContactGroups = vm.selectedGroups;
                // newContact.GroupName =  $scope.ContactGroupName;
                //var k = vm.groupListSelection;
                newContact.$create().then(
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddSuccess'), "success");
                        callBackFunction();
                        //close popup after save
                        $uibModalInstance.dismiss('cancel');

                    },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                    }
                );
            }
        }

    }

})();
