(function () {
    'use strict';

    angular
        .module('home')
        .controller('editProgramController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', '$stateParams','programByIdPrepService', 'EditProgramByIdResource', '$uibModal', editProgramController]);


    function editProgramController($rootScope, blockUI, $scope, $filter, $translate,
        $state, $localStorage, authorizationService,
        appCONSTANTS, ToastService, $stateParams,programByIdPrepService, EditProgramByIdResource, $uibModal) {

        // $('.pmd-sidebar-nav>li>a').removeClass("active")
        // $($('.pmd-sidebar-nav').children()[3].children[0]).addClass("active")

        // blockUI.start("Loading...");

        var vm = this;
        vm.programModel=programByIdPrepService;
        vm.language = appCONSTANTS.supportedLanguage;
    
        vm.editProgram = function () {
            blockUI.start("Loading...");
            var program = new EditProgramByIdResource();
            program.programDiscount = vm.programModel.programDiscount;
            program.programNameDictionary = vm.programModel.programNameDictionary;
            program.programDescriptionDictionary = vm.programModel.programDescriptionDictionary;
            program.programId = vm.programModel.programId;

            // console.log(program);

            program.$update().then(
                function (data, status) {
				blockUI.stop();
                ToastService.show("right", "bottom", "fadeInUp", $translate.instant('EditedSuccessfully'), "success");

                },
                function (data, status) {
				blockUI.stop();
                ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }

   
    }

})();
