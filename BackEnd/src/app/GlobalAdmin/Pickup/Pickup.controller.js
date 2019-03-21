(function () {
    'use strict';

    angular
        .module('home')
        .controller('PickupController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'PickupsResource', 'pickupsPrepService', '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', '$uibModal', PickupController])
        ;


    function PickupController($rootScope, blockUI, $scope, $filter, $translate,
        $state, PickupsResource, pickupsPrepService, $localStorage, authorizationService,
        appCONSTANTS, ToastService, $uibModal) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[10].children[0]).addClass("active")

        blockUI.start("Loading...");

        var vm = this;

        $scope.totalCount = pickupsPrepService.totalCount;
        $scope.PickupList = pickupsPrepService;

        function refreshPickups() {
            blockUI.start("Loading...");

            var k = PickupsResource.getAllPickups({ page: vm.currentPage }).$promise.then(function (results) {
                $scope.PickupList = results;
                blockUI.stop();

            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }

        vm.changeStatus = function (orderId, status) {
            blockUI.start("Loading...");
            var temp = new PickupsResource();
            temp.$ChangeOrderStatus({ orderId: orderId, status: status }).then(function (results) {
                if (results = true)
                    refreshPickups();

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
            var updateObj = new PickupsResource();
            updateObj.OrderId = order.orderId;

            updateObj.isPaid = (order.isPaid == true ? false : true);
            updateObj.OrderDetails = order.orderDetails;
            updateObj.orderStatus = order.orderStatus;
            updateObj.$update().then(
                function (data, status) {


                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "error");
                    order.isPaid = updateObj.isPaid;

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );


        }
        $scope.UpdatePickup = function (pickup) {
            blockUI.start("Loading...");
            debugger; change(pickup);
            blockUI.stop();

        }


        vm.currentPage = 1;
        $scope.changePage = function (page) {
            vm.currentPage = page;
            refreshPickups();
        }
        blockUI.stop();

        $scope.goToDetails = function (pickupModel) {

            var modalContent = $uibModal.open({
                url: '/editpickup/:pickup',
                templateUrl: './app/GlobalAdmin/Pickup/templates/edit.html',
                controller: 'editPickupDialogController',
                'controllerAs': 'editPickupCtrl',
                resolve: {
                    pickup: function () { return pickupModel }

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