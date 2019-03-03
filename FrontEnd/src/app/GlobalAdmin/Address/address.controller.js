(function () {
    'use strict';

    angular
        .module('home')
        .controller('AddressController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'AddressResource', 'AddressPrepService', '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', AddressController]);


    function AddressController($rootScope, blockUI, $scope, $filter, $translate,
        $state, AddressResource, AddressPrepService, $localStorage, authorizationService,
        appCONSTANTS, ToastService) {

        blockUI.start("Loading...");

        var vm = this;

        $scope.totalCount = AddressPrepService.totalCount;
        $scope.AddressList = AddressPrepService;
        console.log($scope.AddressList);
        function refreshAddress() {
            blockUI.start("Loading...");

            var k = AddressResource.getAllAddress({ page: vm.currentPage }).$promise.then(function (results) {
                $scope.AddressList = results;
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
            refreshAddress();
        }
        blockUI.stop();

    }

})();