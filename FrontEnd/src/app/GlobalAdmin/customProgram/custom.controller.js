(function () {
	'use strict';

	angular
		.module('home')
		.controller('CustomController', ['$scope', '$translate', 'CustomsResourceItems', 'CustomResource', 'itemsPrepService', 'ToastService', CustomController])

	function CustomController($scope, $translate, CustomsResourceItems, CustomResource, itemsPrepService, ToastService) {

		var vm = this;
		vm.ItemCategorized = itemsPrepService;

		//vm.itemModel ="";
		vm.daysCount = 2;
		vm.mealsCount = 1;
		console.log(vm.ItemCategorized);



		/* helper method*/

		vm.addItemToList = function (model) { 
		debugger;
			vm.carbs = $scope.sum(model, 'carbs');
			vm.calories = $scope.sum(model, 'calories');
			vm.protein = $scope.sum(model, 'protein');
			vm.fat = $scope.sum(model, 'fat');
			vm.cost = $scope.sum(model, 'cost');
			vm.price = $scope.sum(model, 'price');
			vm.vat = $scope.sum(model, 'vat');
			vm.totalPrice = $scope.sum(model, 'totalPrice');

			$scope.selectedItemList = model;
			if ($scope.selectedItemList.length == 0) {
				vm.mealtotalDiscount = "";
				vm.mealDiscount = "";
				vm.carbs = "";
				vm.calories = "";
				vm.protein = "";
				vm.cost = "";
				vm.vat = "";
				vm.totalPrice = "";
			} 
		 
		}
		$scope.sum = function (items, prop) {
			return items.reduce(function (a, b) {
				return a + b[prop];
			}, 0);
		};

        vm.showDDL = function () {
            $(".select-add-tags").select2({
                tags: true,
                theme: "bootstrap",
                insertTag: function (data, tag) {
                    // Insert the tag at the end of the results
                    data.push(tag);
                }
            });

            $(".select-tags").select2({
                tags: false,
                theme: "bootstrap",
            })
        }

	}

}());
