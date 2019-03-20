(function () {
    'use strict';

    angular
        .module('home')
        .controller('PromotionController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'PromotionResource', 'PromotionsPrepService', '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', PromotionController]);


    function PromotionController($rootScope, blockUI, $scope, $filter, $translate,
        $state, PromotionResource, PromotionsPrepService, $localStorage, authorizationService,
        appCONSTANTS, ToastService) {
            $('.pmd-sidebar-nav>li>a').removeClass("active")
            $($('.pmd-sidebar-nav').children()[15].children[0]).addClass("active")
    
            blockUI.start($translate.instant('loading'));

        var vm = this;

        $scope.totalCount = PromotionsPrepService.totalCount;
        $scope.PromotionList = PromotionsPrepService;
        console.log($scope.PromotionList);
        blockUI.stop();

        function refreshPromotion() {
            blockUI.start($translate.instant('loading'));

            var k = PromotionResource.getAllPromotion({ page: vm.currentPage }).$promise.then(function (results) {
                $scope.PromotionList = results;
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
            refreshPromotion();
        }

    }

})();