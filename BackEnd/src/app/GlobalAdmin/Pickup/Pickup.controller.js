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
        $($('.pmd-sidebar-nav').children()[8].children[0]).addClass("active")

        blockUI.start("Loading...");

        var vm = this;

        $scope.totalCount = pickupsPrepService.totalCount;
        $scope.PickupList = pickupsPrepService;
        console.log($scope.PickupList);
        $scope.getTotal = function (pickup) {
            debugger;
            var total = 0;
            if (pickup.type == "3") {
                for (var i = 0; i < pickup.pickupDetails.length; i++) {
                    var obj = pickup.pickupDetails[i];
                    total += (obj.item.price);
                }
            }
            else if (pickup.type == "2") {
                for (var i = 0; i < pickup.pickupDetails.length; i++) {
                    var obj = pickup.pickupDetails[i];
                    total += (obj.meal.mealPrice);
                }
            }
            else if (pickup.type == "1") {
                total = 1500;
            }
            return total;
        }

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


        function change(pickup) {

            var updateObj = new PickupsResource();
            updateObj.PickupId = pickup.pickupId;

            updateObj.isPaid = (pickup.isPaid == true ? false : true);
            updateObj.PickupDetails = pickup.pickupDetails;
            updateObj.$update().then(
                function (data, status) {


                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    pickup.isPaid = updateObj.isPaid;

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );

        }
        $scope.UpdatePickup = function (pickup) {
            debugger; change(pickup);
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