(function () {
    'use strict';

    angular
        .module('home')
        .controller('ProgramController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', '$stateParams', 'programPrepService', 'GetProgramResource', 'UpdateProgramResource', '$uibModal', ProgramController]);


    function ProgramController($rootScope, blockUI, $scope, $filter, $translate,
        $state, $localStorage, authorizationService,
        appCONSTANTS, ToastService, $stateParams, programPrepService, GetProgramResource, UpdateProgramResource, $uibModal) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[8].children[0]).addClass("active")

        // blockUI.start("Loading...");

        var vm = this;
        $scope.programList = programPrepService;
        vm.language = appCONSTANTS.supportedLanguage;
        vm.programObject;

        $scope.totalCount = programPrepService.totalCount;
        vm.UpdateProgram = function (program) {
            change(program, false);
        }

        function confirmationDelete(model) {
            model.isDeleted = true;
            change(model, true);

        }

        vm.currentPage = 1;
        $scope.changePage = function (page) {
            vm.currentPage = page;
            refreshPrograms();
        }

        function change(program, isDeleted) {
            debugger;
            var updateObj = new UpdateProgramResource();
            updateObj.ProgramId = program.programId;
            if (!isDeleted)
                updateObj.isActive = (program.isActive == true ? false : true);
            updateObj.isDeleted = program.isDeleted;

            updateObj.$update().then(
                function (data, status) {
                    if (isDeleted)
                        refreshPrograms();

                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    program.isActive = updateObj.isActive;

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );

        }

        // vm.getProgram = function(programObj){
        //     vm.programObject = programObj;
        //     vm.ProgramDiscount = programObj.programDiscount;
        //     vm.titleDictionary = programObj.titleDictionary;
        //     vm.descriptionDictionary = programObj.descriptionDictionary;
        // }

        // vm.editProgram = function () {
        //     var program = new EditProgramByIdResource();
        //     program.programDiscount = vm.ProgramDiscount;
        //     program.programNameDictionary = vm.titleDictionary;
        //     program.programDescriptionDictionary = vm.descriptionDictionary;
        //     program.programId = vm.programObject.programId;

        //     // console.log(program);

        //     program.$update().then(
        //         function (data, status) {
        //             $uibModalInstance.dismiss();
        //             ToastService.show("right", "bottom", "fadeInUp", $translate.instant('EditedSuccessfully'), "success");
        //             callBackFunction();

        //         },
        //         function (data, status) {
        //             ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
        //         }
        //     );
        // }

        function refreshPrograms() {
            blockUI.start("Loading...");

            var k = GetProgramResource.gatAllPrograms({ page: vm.currentPage }).$promise.then(function (results) {
                $scope.programList = results;

                console.log($scope.programList);
                blockUI.stop();
            },
                function (data, status) {
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }

        vm.openDeleteDialog = function (model, name, id) {
            var modalContent = $uibModal.open({
                templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
                controller: 'confirmDeleteDialogController',
                controllerAs: 'deleteDlCtrl',
                resolve: {
                    model: function () { return model },
                    itemName: function () { return name },
                    itemId: function () { return id },
                    message: function () { return null },
                    callBackFunction: function () { return confirmationDelete }
                }

            });
        }
    }

})();
