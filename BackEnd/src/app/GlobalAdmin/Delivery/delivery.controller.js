(function () {
    'use strict';

    angular
        .module('home')
        .controller('DeliveryController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'DeliverysResource', 'deliverysPrepService', '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', '$uibModal', DeliveryController])
        ;


    function DeliveryController($rootScope, blockUI, $scope, $filter, $translate,
        $state, DeliverysResource, deliverysPrepService, $localStorage, authorizationService,
        appCONSTANTS, ToastService, $uibModal) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[8].children[0]).addClass("active")

        blockUI.start("Loading...");

        var vm = this;

        vm.showMore = function (element, delivery) {
            debugger;
            blockUI.start("Loading...");

            var k = DeliverysResource.GetOrderItems({ orderId: delivery.orderId, programId: delivery.orderDetails[0].programId }).$promise.then(function (results) {
                $scope.itemList = results;
                console.log($scope.itemList)
                blockUI.stop();

            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });

            $(element.currentTarget).toggleClass("child-table-collapse");
        }
        $scope.totalCount = deliverysPrepService.totalCount;
        $scope.DeliveryList = deliverysPrepService;
        console.log($scope.DeliveryList);
        $scope.getTotal = function (delivery) {
            debugger;
            var total = 0;
            if (delivery.type == "3") {
                for (var i = 0; i < delivery.deliveryDetails.length; i++) {
                    var obj = delivery.deliveryDetails[i];
                    total += (obj.item.price);
                }
            }
            else if (delivery.type == "2") {
                for (var i = 0; i < delivery.deliveryDetails.length; i++) {
                    var obj = delivery.deliveryDetails[i];
                    total += (obj.meal.mealPrice);
                }
            }
            else if (delivery.type == "1") {
                total = 1500;
            }
            return total;
        }

        function refreshDeliverys() {
            blockUI.start("Loading...");

            var k = DeliverysResource.getAllDeliverys({ page: vm.currentPage }).$promise.then(function (results) {
                $scope.DeliveryList = results;
                blockUI.stop();

            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }


        function change(delivery) {

            var updateObj = new DeliverysResource();
            updateObj.DeliveryId = delivery.deliveryId;

            updateObj.isPaid = (delivery.isPaid == true ? false : true);
            updateObj.DeliveryDetails = delivery.deliveryDetails;
            updateObj.$update().then(
                function (data, status) {


                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    delivery.isPaid = updateObj.isPaid;

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );

        }
        $scope.UpdateDelivery = function (delivery) {
            debugger; change(delivery);
        }


        vm.currentPage = 1;
        $scope.changePage = function (page) {
            vm.currentPage = page;
            refreshDeliverys();
        }
        blockUI.stop();

        $scope.goToDetails = function (deliveryModel) {

            var modalContent = $uibModal.open({
                url: '/editdelivery/:delivery',
                templateUrl: './app/GlobalAdmin/Delivery/templates/edit.html',
                controller: 'editDeliveryDialogController',
                'controllerAs': 'editDeliveryCtrl',
                resolve: {
                    delivery: function () { return deliveryModel }

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