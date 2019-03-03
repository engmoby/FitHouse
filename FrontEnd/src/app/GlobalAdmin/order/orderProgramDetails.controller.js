(function () {
    'use strict';

    angular
        .module('home')
        .controller('orderProgramDetailscontroller', ['$scope', '$stateParams', '$translate', 'appCONSTANTS'
            , '$filter', 'OrderprogDetailsPrepService', 'itemsssPrepService', 'OrderResource', orderProgramDetailscontroller])

    function orderProgramDetailscontroller($scope, $stateParams, $translate, appCONSTANTS
        , $filter, OrderprogDetailsPrepService
        , itemsssPrepService) {
        debugger;
        $scope.OrderprogDetailsPrepService = OrderprogDetailsPrepService;
        $scope.itemsssPrepService = itemsssPrepService;
        $scope.clientId = localStorage.getItem('ClientId');
 
        $scope.fats = 0;
        $scope.carbs = 0;
        $scope.protein = 0;
        $scope.calories = 0;

        for (var i = 0; i < $scope.OrderprogDetailsPrepService.items.length; i++) {
            $scope.fats += $scope.OrderprogDetailsPrepService.items[i].fat;
            $scope.carbs += $scope.OrderprogDetailsPrepService.items[i].carbs;
            $scope.protein += $scope.OrderprogDetailsPrepService.items[i].protein;
            $scope.calories += $scope.OrderprogDetailsPrepService.items[i].calories;
        }



    }

}
    ());
