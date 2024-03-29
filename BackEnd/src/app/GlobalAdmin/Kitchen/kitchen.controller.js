(function () {
    'use strict';

    angular
        .module('home')
        .controller('KitchenController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'PickupsResource', 'kitchensResource', 'kitchensPrepService', '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', '$uibModal', KitchenController])
        ;


    function KitchenController($rootScope, blockUI, $scope, $filter, $translate,
        $state, PickupsResource, kitchensResource, kitchensPrepService, $localStorage, authorizationService,
        appCONSTANTS, ToastService, $uibModal) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[13].children[0]).addClass("active")

        blockUI.start("Loading...");

        var vm = this;

        vm.showMore = function (element, model) {

            if (model.ItemList != null) return;

            var programId = 0;
            var dayNumber = 0;
            if (model.isProgram)
                programId = model.orderDetails[0].programId;
            if (model.isProgram)
                dayNumber = model.orderDetails[0].dayNumber;

            var temp = new kitchensResource();
            temp.$GetOrderItems({ orderId: model.orderId, programId: programId, dayNumber: dayNumber }).then(function (results) {
                debugger;
                model.ItemList = results.results;
                blockUI.stop();

            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });


            $(element.currentTarget).toggleClass("child-table-collapse");
        }
        vm.changeStatus = function (order, status) {
            debugger;
            if (order.isProgram) {
                var orderDetailsId = order.orderDetails[0].orderDetailId;
                updateOrderDetails(orderDetailsId, status);
            }
            else {
                updateOrder(order.orderId, status);
            }
        }
        function updateOrder(orderId, status) {

            var temp = new PickupsResource();
            temp.$ChangeOrderStatus({ orderId: orderId, status: status }).then(function (results) {
                if (results = true)
                    refreshkitchens();

                blockUI.stop();

            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });

        }
        function updateOrderDetails(orderDetailsId, status) {

            var temp = new kitchensResource();
            temp.$ChangeOrderStatus({ orderDetailsId: orderDetailsId, status: status }).then(function (results) {
                if (results = true)
                    refreshkitchens();

                blockUI.stop();

            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });

        }
        $scope.totalCount = kitchensPrepService.totalCount;
        $scope.kitchenList = kitchensPrepService;
        console.log($scope.kitchenList);
        $scope.getTotal = function (kitchen) {
            debugger;
            var total = 0;
            if (kitchen.type == "3") {
                for (var i = 0; i < kitchen.kitchenDetails.length; i++) {
                    var obj = kitchen.kitchenDetails[i];
                    total += (obj.item.price);
                }
            }
            else if (kitchen.type == "2") {
                for (var i = 0; i < kitchen.kitchenDetails.length; i++) {
                    var obj = kitchen.kitchenDetails[i];
                    total += (obj.meal.mealPrice);
                }
            }
            else if (kitchen.type == "1") {
                total = 1500;
            }
            return total;
        }

        function refreshkitchens() {
            blockUI.start("Loading...");

            var k = kitchensResource.getAllkitchens({ page: vm.currentPage }).$promise.then(function (results) {
                $scope.kitchenList = results;
                blockUI.stop();

            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }


        function change(kitchen) {

            var updateObj = new kitchensResource();
            updateObj.kitchenId = kitchen.kitchenId;

            updateObj.isPaid = (kitchen.isPaid == true ? false : true);
            updateObj.kitchenDetails = kitchen.kitchenDetails;
            updateObj.$update().then(
                function (data, status) {


                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    kitchen.isPaid = updateObj.isPaid;

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );

        }
        $scope.Updatekitchen = function (kitchen) {
            debugger; change(kitchen);
        }


        vm.currentPage = 1;
        $scope.changePage = function (page) {
            vm.currentPage = page;
            refreshkitchens();
        }
        blockUI.stop();

        $scope.goToDetails = function (kitchenModel) {

            var modalContent = $uibModal.open({
                url: '/editkitchen/:kitchen',
                templateUrl: './app/GlobalAdmin/kitchen/templates/edit.html',
                controller: 'editkitchenDialogController',
                'controllerAs': 'editkitchenCtrl',
                resolve: {
                    kitchen: function () { return kitchenModel }

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