(function () {
	'use strict';

	angular
		.module('home')
		.controller('newMealController', ['$scope', '$translate', '$http', '$stateParams', 'appCONSTANTS', '$state', 'ToastService', 'TranslateMealResource', newMealController])

	function newMealController($scope, $translate, $http, $stateParams, appCONSTANTS, $state, ToastService, TranslateMealResource) {
		var vm = this;

		vm.language = appCONSTANTS.supportedLanguage;

		vm.close = function () {
			$state.go('Meals', { categoryId: $stateParams.categoryId });
		}

		vm.isChanged = false;

		vm.calclulate = function () {
			var vatPresantage = vm.price * vm.vat / 100;
			vm.totalPrice = vm.price + vatPresantage;
		}
		vm.addNewMeal = function () {
			vm.isChanged = true;

			var newMeal = new Object();
			newMeal.mealNameDictionary = vm.mealNameDictionary;
			newMeal.mealDescriptionDictionary = vm.mealDescriptionDictionary;
			newMeal.categoryId = $stateParams.categoryId;
			newMeal.mealSize = vm.mealSize;
			newMeal.carbs = vm.carbs;
			newMeal.calories = vm.calories;
			newMeal.protein = vm.protein;
			newMeal.cost = vm.cost;
			newMeal.price = vm.price;
			newMeal.vat = vm.vat;
			newMeal.totalPrice = vm.totalPrice;
			newMeal.isActive = true;


			var model = new FormData();
			model.append('data', JSON.stringify(newMeal));
			model.append('file', mealImage);
			$http({
				method: 'POST',
				url: appCONSTANTS.API_URL + 'Meals/',
				useToken: true,
				headers: { 'Content-Type': undefined },
				data: model
			}).then(
				function (data, status) {
					ToastService.show("right", "bottom", "fadeInUp", $translate.instant('mealAddSuccess'), "success");
					$state.go('Meals', { categoryId: $stateParams.categoryId });
					vm.isChanged = false;

				},
				function (data, status) {
					vm.isChanged = false;
					ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
				}
			);

		}
		vm.LoadUploadLogo = function () {
			$("#mealImage").click();
		}
		var mealImage;
		$scope.AddMealImage = function (element) {
			var logoFile = element[0];

			var allowedImageTypes = ['image/jpg', 'image/png', 'image/jpeg']

			if (logoFile && logoFile.size >= 0 && ((logoFile.size / (1024 * 1000)) < 2)) {

				if (allowedImageTypes.indexOf(logoFile.type) !== -1) {
					$scope.newMealForm.$dirty = true;
					$scope.$apply(function () {

						mealImage = logoFile;
						var reader = new FileReader();

						reader.onloadend = function () {
							vm.mealImage = reader.result;

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


	}
}());
