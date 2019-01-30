(function () {
    'use strict';

    angular
        .module('home')
        .controller('editOrderDialogController', ['$scope', 'blockUI', '$http', '$filter', '$state', 'appCONSTANTS', '$translate',  'ToastService',
             editOrderDialogController])

    function editOrderDialogController($scope, order, blockUI, $http, $filter, $state, appCONSTANTS, $translate,    ToastService) {
        var vm = this;
        vm.Order = order;
        console.log(vm.Order);
        vm.language = appCONSTANTS.supportedLanguage;  
        vm.Close = function () {
            $state.go('Order');
        }
       

        vm.UpdateType = function () {
            blockUI.start("Loading...");
            console.log(vm.Order);
            var updateObj =null;// new OrderResource();
            updateObj.OrderId = vm.Order.orderId; 
            updateObj.titleDictionary = vm.Order.titleDictionary;
            updateObj.isDeleted = vm.Order.IsDeleted;
            updateObj.isActive = vm.Order.isActive;
            updateObj.$update().then(
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");

                    $state.go('Order');

                },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }

    }
}());
