(function () {
    'use strict';

    angular
        .module('home')
        .controller('newPromotionController', ['$scope', '$filter', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'PromotionResource', 'ToastService', newPromotionController])

    function newPromotionController($scope, $filter, blockUI, $http, $state, appCONSTANTS, $translate, PromotionResource,
        ToastService) {
        var vm = this;
        vm.IsProgram = false;
        vm.IsMeal = false;
        vm.IsCustomProgram = false;
        vm.dateIsValid = false;
        $scope.dateChange = function () {
            if ($('#startdate').data('date') == null || $('#startdate').data('date') == "" || $('#enddate').data('date') == null || $('#enddate').data('date') == "") {
                vm.dateIsValid = false;
                $scope.$apply();
            } else if (!$scope.promotionForm.isInValid) {
                vm.dateIsValid = true;
                $scope.$apply();
            }
        }

        vm.AddNewPromotion = function () {
            debugger;
            blockUI.start($translate.instant('loading'));
            var newPromotion = new PromotionResource();
            newPromotion.title = vm.Title;
            newPromotion.value = vm.Value;
            newPromotion.startDate = $('#startdate').val();
            newPromotion.endDate = $('#enddate').val();
            newPromotion.isCustomProgram = vm.IsCustomProgram;
            newPromotion.isMeal = vm.IsMeal;
            newPromotion.isProgram = vm.IsProgram;
            newPromotion.$create().then(
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");
                    $state.go('Promotion');

                },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }


    }
}());
