(function () {
    'use strict';

    angular
        .module('home')
        .controller('ProgramController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', '$stateParams', ProgramController]);


    function ProgramController($rootScope, blockUI, $scope, $filter, $translate,
        $state, $localStorage, authorizationService,
        appCONSTANTS, ToastService, $stateParams) {

        // $('.pmd-sidebar-nav>li>a').removeClass("active")
        // $($('.pmd-sidebar-nav').children()[3].children[0]).addClass("active")

        // blockUI.start("Loading...");

         var vm = this;
        // $scope.totalCount = AreaPrepService.totalCount;
        // $scope.AreaList = AreaPrepService;
        // $scope.countryName = RegionByIdPrepService.countryNameDictionary[$scope.selectedLanguage];
        // $scope.regionName = RegionByIdPrepService.titleDictionary[$scope.selectedLanguage];
        // $scope.cityName = CityByIdPrepService.titleDictionary[$scope.selectedLanguage];
        // function refreshAreas() {

        //     blockUI.start("Loading...");

        //     var k = AreaResource.getAllAreas({ cityId: $stateParams.cityId, page: vm.currentPage }).$promise.then(function (results) {
        //         $scope.AreaList = results
        //         blockUI.stop();

        //     },
        //         function (data, status) {
        //             blockUI.stop();

        //             ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
        //         });
        // }
        // vm.showMore = function (element) {
        //     $(element.currentTarget).toggleClass("child-table-collapse");
        // }
        // vm.currentPage = 1;
        // $scope.changePage = function (page) {
        //     vm.currentPage = page;
        //     refreshAreas();
        // }
        // blockUI.stop();

        //Model
        // vm.currentStep = 1;
        // vm.steps = [
        //     {
        //         step: 1,
        //         name: "Step 1",
        //         template: "./app/GlobalAdmin/Program/templates/newStepOne.html"
        //     },
        //     {
        //         step: 2,
        //         name: "Step 2",
        //         template: "./app/GlobalAdmin/Program/templates/newStepTwo.html"
        //     }
        // ];
        // vm.user = {};

        // //Functions
        // vm.gotoStep = function (newStep) {
        //     vm.currentStep = newStep;
        // }

        // vm.getStepTemplate = function () {
        //     for (var i = 0; i < vm.steps.length; i++) {
        //         if (vm.currentStep == vm.steps[i].step) {
        //             return vm.steps[i].template;
        //         }
        //     }
        // }

        // vm.save = function () {
        //     //todo: save data...
        // }

    }

})();
