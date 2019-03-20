(function () {
    'use strict';

    angular
        .module('home')
        .controller('editPromotionController', ['$scope', 'blockUI', '$http', '$filter', '$state', 'appCONSTANTS', '$translate',
            'PromotionResource', 'ToastService', 'PromotionByIdPrepService', editPromotionController])

    function editPromotionController($scope, blockUI, $http, $filter, $state, appCONSTANTS, $translate, PromotionResource,
        ToastService, PromotionByIdPrepService) {
        var vm = this;
      
        vm.IsProgram = false;
        vm.IsMeal = false;
        vm.IsCustomProgram = false;   
        vm.Promotion = PromotionByIdPrepService;
        vm.Promotion.value = parseInt(vm.Promotion.value);
        vm.Promotion.startDate = vm.Promotion.startDate + "Z";
        vm.Promotion.startDate = $filter('date')(new Date(vm.Promotion.startDate), "MM/dd/yyyy hh:mm a", "UTC");

        vm.Promotion.endDate = vm.Promotion.endDate + "Z";
        vm.Promotion.endDate = $filter('date')(new Date(vm.Promotion.endDate), "MM/dd/yyyy hh:mm a", "UTC");



        console.log(vm.Promotion);
        blockUI.stop();
        vm.Close = function () {
            $state.go('Promotion');

        }

        vm.UpdatePromotion = function () {
            debugger;
            blockUI.start($translate.instant('loading'));
            var updateObj = new PromotionResource();
            updateObj.promotionId = vm.Promotion.promotionId;
            updateObj.title = vm.Promotion.title;
            updateObj.value = vm.Promotion.value;
            updateObj.startDate = vm.Promotion.startDate;
            updateObj.endDate = vm.Promotion.endDate;
            updateObj.isCustomProgram = vm.Promotion.isCustomProgram;
            updateObj.isMeal = vm.Promotion.isMeal;
            updateObj.isProgram = vm.Promotion.isProgram;
            updateObj.$update().then(
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    $state.go('Promotion');


                },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }


        vm.dateIsValid = true;
        $scope.dateChange = function () {

            // $('#startdate').data('date') = vm.Promotion.startDate;
            // $('#enddate').data('date') = vm.Promotion.endDate;

            if ($('#startdate').val() == null || $('#startdate').val() == "" || $('#enddate').val() == null || $('#enddate').val() == "") {
                vm.dateIsValid = false;
                $scope.$apply();
            } else if (!$scope.promotionForm.isInValid) {

                vm.Promotion.startDate = $('#startdate').val();
                vm.Promotion.endDate = $('#enddate').val();
                debugger;
                var endDate = new Date(vm.Promotion.endDate);
                var startDate = new Date(vm.Promotion.startDate);
                if (startDate >= endDate) {
                    $scope.promotionForm.$valid = false;
                    vm.dateIsValid = false;
                    $scope.$apply();
                    // $scope.promotionForm.startDate.$setValidity("endBeforeStart", endDate >= startDate);

                }
                else {
                    vm.dateIsValid = true;
                    $scope.$apply();
                }
            }
        }

    }
}());
