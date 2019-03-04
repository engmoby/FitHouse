(function () {
    'use strict';

    angular
        .module('home')
        .controller('editOrderDialogController', ['$scope', 'OrderByIdPrepService', 'OrdersResource', 'blockUI', '$http', '$filter', '$state', 'appCONSTANTS', '$translate', 'ToastService',
            editOrderDialogController])

    function editOrderDialogController($scope, OrderByIdPrepService, OrdersResource, blockUI, $http, $filter, $state, appCONSTANTS, $translate, ToastService) {
        var vm = this;
        vm.dateIsValid = false;

        vm.Order = OrderByIdPrepService;
        console.log(vm.Order);
        vm.language = appCONSTANTS.supportedLanguage;

        vm.Order.orderDate = vm.Order.orderDate + "Z";
        vm.Order.orderDate = $filter('date')(new Date(vm.Order.orderDate), "dd/MM/yyyy hh:mm a");

        vm.Order.orderStartDate = vm.Order.orderStartDate + "Z";
        vm.Order.orderStartDate = $filter('date')(new Date(vm.Order.orderStartDate), "dd/MM/yyyy hh:mm a");

        debugger;
        if (vm.Order.orderStartDate != null) {
            // vm.Order.orderStartDate = vm.Order.orderStartDate + "Z";
            // vm.Order.orderStartDate = $filter('date')(new Date(vm.Order.orderStartDate), "dd/MM/yyyy hh:mm a");
            vm.dateIsValid = true;
        }
        $scope.orderStatus = false;
        if (vm.Order.orderStatus == 2)
            $scope.orderStatus = true;


        vm.Close = function () {
            $state.go('Order');
        }
        vm.showMore = function (element) {
            $(element.currentTarget).toggleClass("child-table-collapse");
        }
        $scope.dateChange = function () {
            debugger;
            if ($('#startdate').data('date') == null || $('#startdate').data('date') == "") {
                vm.dateIsValid = false;
                $scope.$apply();
            } else if (!$scope.editForm.isInValid) {

                vm.Order.orderStartDate = $('#startdate').data('date');
                vm.dateIsValid = true;
                $scope.$apply();
            }
        }

        vm.UpdateType = function () {
            blockUI.start("Loading...");
            var updateObj = new OrdersResource();
            //  updateObj.OrderStartDate = $('#startdate').val();
            debugger;
            if ($scope.orderStatus) {
                updateObj.orderStatus = "Prepering";
            }
            else {
                updateObj.OrderStartDate = vm.Order.orderStartDate;

            }

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
