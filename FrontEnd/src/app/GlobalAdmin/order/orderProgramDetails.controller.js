(function () {
    'use strict';

    angular
        .module('home')
        .controller('orderProgramDetailscontroller', ['$scope', '$stateParams', '$translate', 'appCONSTANTS'
            , '$filter', 'OrderprogDetailsPrepService', 'itemsssPrepService', 'OrderResource', orderProgramDetailscontroller])

    function orderProgramDetailscontroller($scope, $stateParams, $translate, appCONSTANTS
        , $filter, OrderprogDetailsPrepService
        , itemsssPrepService) {
        $scope.OrderprogDetailsPrepService = OrderprogDetailsPrepService;
        $scope.itemsssPrepService = itemsssPrepService;
        $scope.clientId = localStorage.getItem('ClientId');

        $scope.fats = 0;
        $scope.carbs = 0;
        $scope.protein = 0;
        $scope.calories = 0;

        for (var i = 0; i < $scope.OrderprogDetailsPrepService.programDetails.length; i++) { 
            $scope.fats = $scope.OrderprogDetailsPrepService.programDetails[i].item.fat; 
            $scope.carbs += $scope.OrderprogDetailsPrepService.programDetails[i].item.carbs;
            $scope.protein += $scope.OrderprogDetailsPrepService.programDetails[i].item.protein;
            $scope.calories += $scope.OrderprogDetailsPrepService.programDetails[i].item.calories;
        }



    }

}
    ());
