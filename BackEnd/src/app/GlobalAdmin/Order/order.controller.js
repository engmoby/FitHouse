(function () {
    'use strict';

    angular
        .module('home')
        .controller('OrderController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'OrdersResource', 'ordersPrepService', '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', '$uibModal', OrderController])
        ;


    function OrderController($rootScope, blockUI, $scope, $filter, $translate,
        $state, OrdersResource, ordersPrepService, $localStorage, authorizationService,
        appCONSTANTS, ToastService, $uibModal) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[9].children[0]).addClass("active")

        blockUI.start("Loading...");

        var vm = this;

        $scope.totalCount = ordersPrepService.totalCount;
        $scope.OrderList = ordersPrepService;
        console.log($scope.OrderList);
        $scope.getTotal = function (order) {
            debugger;
            var total = 0;
            if (order.type == "3") {
                for (var i = 0; i < order.orderDetails.length; i++) {
                    var obj = order.orderDetails[i];
                    total += (obj.item.price);
                }
            }
            else if (order.type == "2") {
                for (var i = 0; i < order.orderDetails.length; i++) {
                    var obj = order.orderDetails[i];
                    total += (obj.meal.mealPrice);
                }
            }
            else if (order.type == "1") {
                total = 1500;
            }
            return total;
        }

        function refreshOrders() {
            blockUI.start("Loading...");

            var k = OrdersResource.getAllOrders({ page: vm.currentPage }).$promise.then(function (results) {
                $scope.OrderList = results;
                blockUI.stop();

            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }


        function change(order) {
            if (order.orderStatus == 4) {
                ToastService.show("right", "bottom", "fadeInUp", 'cant change deleviered order', "success");
                return;
            }
            var updateObj = new OrdersResource();
            updateObj.OrderId = order.orderId;

            updateObj.isPaid = (order.isPaid == true ? false : true);
            updateObj.OrderDetails = order.orderDetails;
            updateObj.$update().then(
                function (data, status) {


                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    order.isPaid = updateObj.isPaid;

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );

        }
        $scope.UpdateOrder = function (order) {
            debugger;
             change(order);
        }


        vm.currentPage = 1;
        $scope.changePage = function (page) {
            vm.currentPage = page;
            refreshOrders();
        }
        blockUI.stop();

        $scope.goToDetails = function (orderModel) {

            var modalContent = $uibModal.open({
                url: '/editorder/:order',
                templateUrl: './app/GlobalAdmin/Order/templates/edit.html',
                controller: 'editOrderDialogController',
                'controllerAs': 'editOrderCtrl',
                resolve: {
                    order: function () { return orderModel }

                },
                data: {
                    permissions: {
                        only: ['3'],
                        redirectTo: 'root'
                    }
                }

            });
        }

    }

})();