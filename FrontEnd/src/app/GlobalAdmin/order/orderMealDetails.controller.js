(function () {
    'use strict';

    angular
        .module('home')
        .controller('orderMealDetailscontroller', ['$scope', '$stateParams', '$state', '$translate', 'appCONSTANTS'
            , '$filter', 'OrderMealPrepService', 'itemsssPrepService', 'OrderResource'
            , 'RegionResource', 'BranchResource', 'CityResource', 'AreaResource', orderMealDetailscontroller])

    function orderMealDetailscontroller($scope, $stateParams, $state, $translate, appCONSTANTS
        , $filter, OrderMealPrepService
        , itemsssPrepService, OrderResource, RegionResource, BranchResource, CityResource, AreaResource
    ) {

        $scope.OrderMealPrepService = OrderMealPrepService;
        $scope.itemsssPrepService = itemsssPrepService;
        $scope.Total = 0;
        var vm = this;
        $scope.clientId = $scope.user.id;// localStorage.getItem('ClientId');
        $scope.DeliveryFees = 0;
        $scope.counties = [];
        $scope.fats = 0;
        $scope.carbs = 0;
        $scope.protein = 0;
        $scope.calories = 0;

        for (var i = 0; i < $scope.OrderMealPrepService.mealDetails.length; i++) {
            var differntItem = $scope.itemsssPrepService.filter(x => (x.itemId == $scope.OrderMealPrepService.mealDetails[i].itemId));

            $scope.fats += differntItem[0].fat;
            $scope.carbs += differntItem[0].carbs;
            $scope.protein += differntItem[0].protein;
            $scope.calories += differntItem[0].calories;
        }

        $scope.style = function () {
            return {
                'background': 'url(https://fithouseksa.com/wp-content/uploads/2018/07/fat-running.png) no-repeat',
                'background-attachment': 'fixed',
                'background-size': 'cover',
                'width': '100%',
                'width': '100%'
            };
        }
  

         

    }

}
    ());
