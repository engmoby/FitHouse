(function () {
    'use strict';

    angular
        .module('home')
        .controller('editAddressDialogController', ['$scope', 'blockUI', '$http', '$filter','$state', 'appCONSTANTS', '$translate', 'AddressResource', 'PermissionResource','PermissionPrepService', 'ToastService',
            'AddressByIdPrepService', editAddressDialogController])

    function editAddressDialogController($scope, blockUI, $http,$filter, $state, appCONSTANTS, $translate, AddressResource, PermissionResource,PermissionPrepService, ToastService, AddressByIdPrepService) {
        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;
        vm.permissionList = PermissionPrepService.results;
        vm.Address = AddressByIdPrepService;
        console.log(vm.Address); 
        vm.selectedPermissions = [];
        vm.Close = function () {
            $state.go('Address');
        }
        var i;
        for (i = 0; i < vm.Address.permissions.length; i++) {
            var indexRate = vm.permissionList.indexOf($filter('filter')(vm.permissionList, { 'permissionId': vm.Address.permissions[i].permissionId }, true)[0]);
            vm.selectedPermissions.push(vm.permissionList[indexRate]);

        }


       

        vm.UpdateType = function () {
            blockUI.start("Loading..."); 
            console.log(vm.Address);
            var updateObj = new AddressResource();
            updateObj.addressId = vm.Address.addressId;
            updateObj.permissions = vm.selectedPermissions;
            updateObj.titleDictionary = vm.Address.titleDictionary;
            updateObj.isDeleted = vm.Address.IsDeleted;
            updateObj.isActive = vm.Address.isActive;
            updateObj.$update().then(
                function (data, status) {
                blockUI.stop();
                    
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");

                    $state.go('Address');

                },
                function (data, status) {
                blockUI.stop();
                    
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
       
    }
}());
