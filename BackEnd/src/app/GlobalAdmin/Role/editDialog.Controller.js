(function () {
    'use strict';

    angular
        .module('home')
        .controller('editRoleDialogController', ['$scope', 'blockUI', '$http', '$filter', '$state', 'appCONSTANTS', '$translate', 'RoleResource', 'PermissionResource', 'PermissionPrepService', 'ToastService',
            'RoleByIdPrepService', editRoleDialogController])

    function editRoleDialogController($scope, blockUI, $http, $filter, $state, appCONSTANTS, $translate, RoleResource, PermissionResource, PermissionPrepService, ToastService, RoleByIdPrepService) {
        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;
        vm.permissionList = PermissionPrepService.results;
        vm.Role = RoleByIdPrepService;
        console.log(vm.Role);
        vm.selectedPermissions = [];
        vm.Close = function () {
            $state.go('Role');
        }
        var i;
        for (i = 0; i < vm.Role.permissions.length; i++) {
            var indexRate = vm.permissionList.indexOf($filter('filter')(vm.permissionList, { 'permissionId': vm.Role.permissions[i].permissionId }, true)[0]);
            vm.selectedPermissions.push(vm.permissionList[indexRate]);

        }




        vm.UpdateType = function () {
            blockUI.start("Loading...");
            console.log(vm.Role);
            var updateObj = new RoleResource();
            updateObj.roleId = vm.Role.roleId;
            updateObj.permissions = vm.selectedPermissions;
            updateObj.titleDictionary = vm.Role.titleDictionary;
            updateObj.isDeleted = vm.Role.IsDeleted;
            updateObj.isActive = vm.Role.isActive;
            updateObj.$update().then(
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");

                    $state.go('Role');

                },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }

    }
}());
