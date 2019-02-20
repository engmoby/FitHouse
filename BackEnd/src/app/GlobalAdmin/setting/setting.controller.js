(function () {
    'use strict';

    angular
        .module('home')
        .controller('settingController', ['$rootScope', 'blockUI', '$scope', '$http', '$filter', '$translate',
            '$state', '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', '$stateParams'
            , '$uibModal', 'settingsPrepService', 'BranchPrepService', 'AddSettingsResource', 'UpdateSettingsResource', settingController]);


    function settingController($rootScope, blockUI, $scope, $http, $filter, $translate,
        $state, $localStorage, authorizationService,
        appCONSTANTS, ToastService, $stateParams, $uibModal, settingsPrepService
        , BranchPrepService, AddSettingsResource, UpdateSettingsResource) {

        // $('.pmd-sidebar-nav>li>a').removeClass("active")
        // $($('.pmd-sidebar-nav').children()[3].children[0]).addClass("active")

        // blockUI.start("Loading...");

        var vm = this;
        $scope.settingsPrepService = settingsPrepService;

        vm.orderType = {
            type: 'item'
        };

        vm.currency;
        vm.minDays;
        vm.maxPause;
        vm.allowPause;
        vm.allowHistory;

        if ($scope.settingsPrepService.isActive != undefined) {
            if ($scope.settingsPrepService.isSMS && $scope.settingsPrepService.isMail) {
                vm.orderType.type = "both"
            }
            else if ($scope.settingsPrepService.isSMS) {
                vm.orderType.type = "sms"
            }
            else if ($scope.settingsPrepService.isMail) {
                vm.orderType.type = "mail"
            }
            else {
                vm.orderType.type = "none"
            }

        }
        // $scope.currencyPrepService = currencyPrepService;

        // $http.get('http://country.io/currency.json').then(function (response) {
        //     $scope.currencyPrepService = response.data;
        // });

        $scope.BranchPrepService = BranchPrepService;

        vm.currentPage = 1;
        $scope.changePage = function (page) {
            vm.currentPage = page;
            refreshAreas();
        }

        vm.UpdateProgram = function (program) {
            change(program, false);
        }

        // function confirmationDelete(model) {
        //     model.isDeleted = true;
        //     change(model, true);

        // }

        vm.AddSetting = function () {
            blockUI.start("Loading...");

            var setting = new AddSettingsResource();

            if (vm.orderType.type == "none") {
                setting.isSMS = false;
                setting.isMail = false;
            }
            else if (vm.orderType.type == "sms") {
                setting.isSMS = true;
                setting.isMail = false;
            }
            else if (vm.orderType.type == "mail") {
                setting.isSMS = false;
                setting.isMail = true;
            }
            else if (vm.orderType.type == "both") {
                setting.isSMS = true;
                setting.isMail = true;
            }

            setting.isDeleted = false;
            setting.isPause = vm.allowPause;

            if (vm.allowPause == true) {
                setting.maxPauseDays = vm.maxPause;
            }
            else if (vm.allowPause == false) {
                setting.maxPauseDays = 0;
            }
            setting.allowHistory = vm.allowHistory;
            setting.currencyCode = vm.currency;
            setting.minNoDaysPerProgram = vm.minDays;
            setting.isDeleted = false;
            setting.isActive = true;

            setting.$create().then(
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");

                    // localStorage.setItem('data', JSON.stringify(data.userId));
                    // $state.go('callCenter');

                },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }

        vm.UpdateSetting = function () {
            blockUI.start("Loading...");

            var setting = new UpdateSettingsResource();

            if (vm.orderType.type == "none") {
                setting.isSMS = false;
                setting.isMail = false;
            }
            else if (vm.orderType.type == "sms") {
                setting.isSMS = true;
                setting.isMail = false;
            }
            else if (vm.orderType.type == "mail") {
                setting.isSMS = false;
                setting.isMail = true;
            }
            else if (vm.orderType.type == "both") {
                setting.isSMS = true;
                setting.isMail = true;
            }

            setting.isDeleted = false;
            setting.isPause = $scope.settingsPrepService.isPause;

            if (setting.isPause == true) {
                setting.maxPauseDays = $scope.settingsPrepService.maxPauseDays;
            }
            else if (setting.isPause == false) {
                setting.maxPauseDays = 0;
            }
            setting.allowHistory = $scope.settingsPrepService.allowHistory;
            setting.currencyCode = $scope.settingsPrepService.currencyCode;
            setting.minNoDaysPerProgram = $scope.settingsPrepService.minNoDaysPerProgram;
            setting.isDeleted = false;
            setting.isActive = true;

            setting.$update().then(
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");

                    // localStorage.setItem('data', JSON.stringify(data.userId));
                    // $state.go('callCenter');

                },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }

        $scope.EditBranchDialog = function (branchIdd) {
            blockUI.stop();
            vm.branch = $scope.BranchPrepService.results.filter(x => x.branchId == branchIdd);

            $uibModal.open({
                templateUrl: './app/GlobalAdmin/setting/templates/editBranchFees.html',
                controller: 'editBranchFeesController',
                controllerAs: 'editBranchFeesCtrl',
                resolve: {
                    // BranchId: function () { return branchId; },
                    branchFeesPrepService: function () { return vm.branch; }
                    // callBackFunction: function () { return refreshPrograms }
                }
            });
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

        function refreshPrograms() {
            blockUI.start("Loading...");

            var k = GetProgramResource.gatAllPrograms().$promise.then(function (results) {
                $scope.programList = results;

                console.log($scope.programList);
                blockUI.stop();
            },
                function (data, status) {
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }

        // vm.openDeleteDialog = function (model, name, id) {
        //     var modalContent = $uibModal.open({
        //         templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
        //         controller: 'confirmDeleteDialogController',
        //         controllerAs: 'deleteDlCtrl',
        //         resolve: {
        //             model: function () { return model },
        //             itemName: function () { return name },
        //             itemId: function () { return id },
        //             message: function () { return null },
        //             callBackFunction: function () { return confirmationDelete }
        //         }

        //     });
        // }
    }

})();
