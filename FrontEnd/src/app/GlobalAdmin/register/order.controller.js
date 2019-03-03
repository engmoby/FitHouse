(function () {
    'use strict';

    angular
        .module('home')
        .controller('OrderController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'OrdersResource', 'ordersPrepService', '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', OrderController])
        ;


    function OrderController($rootScope, blockUI, $scope, $filter, $translate,
        $state, OrdersResource, ordersPrepService, $localStorage, authorizationService,
        appCONSTANTS, ToastService) {

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


        vm.currentPage = 1;
        $scope.changePage = function (page) {
            vm.currentPage = page;
            refreshOrders();
        }
        blockUI.stop();

        $scope.goToDetails = function (orderModel) {

            // var modalContent = $uibModal.open({
            //     url: '/editorder/:order',
            //     templateUrl: './app/GlobalAdmin/Order/templates/edit.html',
            //     controller: 'editOrderDialogController',
            //     'controllerAs': 'editOrderCtrl',
            //     resolve: {
            //         order: function () { return orderModel }

            //     },
            //     data: {
            //         permissions: {
            //             only: ['3'],
            //             redirectTo: 'root'
            //         }
            //     }

            // });
        }

    }

})();