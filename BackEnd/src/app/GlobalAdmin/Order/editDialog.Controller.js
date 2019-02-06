(function () {
    'use strict';

    angular
        .module('home')
        .controller('editOrderDialogController', ['$scope', 'OrderByIdPrepService', 'OrdersResource', 'blockUI', '$http', '$filter', '$state', 'appCONSTANTS', '$translate', 'ToastService',
            editOrderDialogController])

    function editOrderDialogController($scope, OrderByIdPrepService, OrdersResource, blockUI, $http, $filter, $state, appCONSTANTS, $translate, ToastService) {
        var vm = this;
        vm.Order = OrderByIdPrepService;
        console.log(vm.Order);
        vm.language = appCONSTANTS.supportedLanguage;

        vm.Order.orderDate = vm.Order.orderDate + "Z";
        vm.Order.orderDate = $filter('date')(new Date(vm.Order.orderDate), "dd/MM/yyyy hh:mm a");
        if (vm.Order.orderStartDate != null) {
            vm.Order.orderStartDate = vm.Order.orderStartDate + "Z";
            vm.Order.orderStartDate = $filter('date')(new Date(vm.Order.orderStartDate), "dd/MM/yyyy hh:mm a");
        }




        vm.Close = function () {
            $state.go('Order');
        }
        vm.showMore = function (element) {
            $(element.currentTarget).toggleClass("child-table-collapse");
        }
        // vm.changeDate = function () {
        //     var isInValid = true;
        //     if ($('#startdate').data('date') != null) {
        //         isInValid = false
        //     }
        //     return isInValid;

        // }
        vm.dateIsValid = false;
        $scope.dateChange = function () {
            if ($('#startdate').data('date') == null || $('#startdate').data('date') == "") {
                vm.dateIsValid = false;
                $scope.$apply();
            } else if (!$scope.editForm.isInValid) {
                vm.dateIsValid = true;
                $scope.$apply();
            }
        }

        vm.UpdateType = function () {
            blockUI.start("Loading...");
            var updateObj = new OrdersResource();
            updateObj.orderStartDate = $('#startdate').val();



            updateObj.isPaid = vm.Order.isPaid;
            updateObj.OrderId = vm.Order.orderId;
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
