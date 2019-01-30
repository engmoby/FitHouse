(function () {
	'use strict';

	angular
		.module('home')
		.controller('editMealController', ['$scope', '$filter', '$http', '$translate', '$stateParams', 'appCONSTANTS', '$state', 'MealResource', 'itemsssPrepService', 'ToastService', 'mealPrepService', editMealController])

	function editMealController($scope, $filter, $http, $translate, $stateParams, appCONSTANTS, $state, MealResource, itemsssPrepService, ToastService, mealPrepService) {
		var vm = this;
		vm.language = appCONSTANTS.supportedLanguage;
		vm.meal = mealPrepService;
		vm.itemsList = itemsssPrepService;
		vm.itemModel = [];
		if (vm.meal.imageUrl != null)
			vm.meal.imageUrl = vm.meal.imageUrl + "?date=" + $scope.getCurrentTime();

		var i;
		for (i = 0; i < vm.meal.mealDetails.length; i++) {
			var indexRate = vm.itemsList.indexOf($filter('filter')(vm.itemsList, { 'itemId': vm.meal.mealDetails[i].itemId }, true)[0]);
			vm.itemModel.push(vm.itemsList[indexRate]);

		}
		bindItemsTocalculate(vm.itemModel);
		vm.close = function () {
			$state.go('Meal');
		}
		vm.updateMeal = function () {
			vm.sendSelected = [];
			var updatedMeal = new Object();
			updatedMeal.mealNameDictionary = vm.meal.mealNameDictionary;
			updatedMeal.mealDescriptionDictionary = vm.meal.mealDescriptionDictionary;

			updatedMeal.mealId = vm.meal.mealId;
			updatedMeal.isImageChange = isMealImageChange;

			updatedMeal.mealPrice = vm.meal.totalPrice;
			if (vm.mealDiscount == null)
				updatedMeal.mealDiscount = 0;
			else
				updatedMeal.mealDiscount = vm.meal.mealDiscount;

			$scope.selectedItemList.forEach(element => {
				vm.sendSelected.push(
					{
						itemId: element.itemId
					}
				);
			});
			updatedMeal.MealDetails = vm.sendSelected;

			var model = new FormData();
			model.append('data', JSON.stringify(updatedMeal));
			model.append('file', mealImage);
			$http({
				method: 'put',
				url: appCONSTANTS.API_URL + 'Meals/',
				useToken: true,
				headers: { 'Content-Type': undefined },
				data: model
			}).then(
				function (data, status) {
					ToastService.show("right", "bottom", "fadeInUp", $translate.instant('MealUpdateSuccess'), "success");
					$state.go('Meal');
				},
				function (data, status) {
					ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
				}
			);
		}
		$scope.sum = function (items, prop) {
			SumItem(items, prop);
			// return items.reduce(function (a, b) {
			// 	return a + b[prop];
			// }, 0);
		};
		function SumItem(items, prop) {
			return items.reduce(function (a, b) {
				return a + b[prop];
			}, 0);
		}
		function bindItemsTocalculate(model) {

			vm.meal.carbs = SumItem(model, 'carbs');
			vm.meal.calories = SumItem(model, 'calories');
			vm.meal.protein = SumItem(model, 'protein');
			vm.meal.cost = SumItem(model, 'cost');
			vm.meal.price = SumItem(model, 'price');
			vm.meal.vat = SumItem(model, 'vat');
			vm.meal.totalPrice = SumItem(model, 'totalPrice');
			$scope.selectedItemList = model;
			calclulateWithDicscount();
		}
		vm.addItemToList = function (model) {
			bindItemsTocalculate(model)
		}
		function calclulateWithDicscount() {
			var vatPresantage = (vm.meal.price * vm.meal.vat) / 100;
			var discountPresantage = vm.meal.price * vm.meal.mealDiscount / 100;
			if (vm.mealDiscount == null)
				vm.meal.totalPrice = vm.meal.price + vatPresantage;
			else
				vm.meal.totalPrice = vm.meal.price + vatPresantage - discountPresantage;


		}
		vm.calclulate = function () {
			calclulateWithDicscount();

		}
		vm.LoadUploadLogo = function () {
			$("#mealImage").click();
		}
		var mealImage;
		var isMealImageChange = false;
		$scope.AddMealImage = function (element) {
			var logoFile = element[0];

			var allowedImageTypes = ['image/jpg', 'image/png', 'image/jpeg']

			if (logoFile && logoFile.size >= 0 && ((logoFile.size / (1024 * 1000)) < 2)) {

				if (allowedImageTypes.indexOf(logoFile.type) !== -1) {
					$scope.updatedMealForm.$dirty = true;
					$scope.$apply(function () {

						mealImage = logoFile;
						isMealImageChange = true;
						var reader = new FileReader();

						reader.onloadend = function () {
							vm.meal.imageURL = reader.result;

							$scope.$apply();
						};
						if (logoFile) {
							reader.readAsDataURL(logoFile);
						}
					})
				} else {
					$("#logoImage").val('');
					ToastService.show("right", "bottom", "fadeInUp", $translate.instant('imageTypeError'), "error");
				}

			} else {
				if (logoFile) {
					$("#logoImage").val('');
					ToastService.show("right", "bottom", "fadeInUp", $translate.instant('imgaeSizeError'), "error");
				}

			}


		}

		vm.calclulate = function () {
			var vatPresantage = vm.meal.price * vm.meal.vat / 100;
			vm.meal.totalPrice = vm.meal.price + vatPresantage;
		}
	}
}());
