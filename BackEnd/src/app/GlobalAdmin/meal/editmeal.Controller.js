(function () {
	'use strict';

	angular
		.module('home')
		.controller('editMealController', ['$scope', '$http', '$translate', '$stateParams', 'appCONSTANTS', '$state', 'MealResource', 'ToastService', 'mealPrepService', editMealController])

	function editMealController($scope, $http, $translate, $stateParams, appCONSTANTS, $state, MealResource, ToastService, mealPrepService) {
		var vm = this;
		vm.language = appCONSTANTS.supportedLanguage;
		vm.meal = mealPrepService;
		vm.meal.imageUrl = vm.meal.imageUrl + "?date=" + $scope.getCurrentTime();
		console.log(vm.meal);

		vm.close = function () {
			$state.go('Meals', { categoryId: $stateParams.categoryId });
		}
		vm.updateMeal = function () {
			var updatedMeal = new Object();
			updatedMeal.mealNameDictionary = vm.meal.mealNameDictionary;
			updatedMeal.mealDescriptionDictionary = vm.meal.mealDescriptionDictionary;
			updatedMeal.categoryId = $stateParams.categoryId;

			updatedMeal.mealId = vm.meal.mealId;
			updatedMeal.isImageChange = isMealImageChange;

			updatedMeal.mealSize = vm.meal.mealSize;
			updatedMeal.carbs = vm.meal.carbs;
			updatedMeal.calories = vm.meal.calories;
			updatedMeal.protein = vm.meal.protein;
			updatedMeal.cost = vm.meal.cost;
			updatedMeal.price = vm.meal.price;
			updatedMeal.vat = vm.meal.vat;
			updatedMeal.totalPrice = vm.meal.totalPrice;


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
					$state.go('Meals', { categoryId: $stateParams.categoryId });
				},
				function (data, status) {
					ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
				}
			);
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
