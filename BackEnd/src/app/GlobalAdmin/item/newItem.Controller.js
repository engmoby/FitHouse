(function () {
	'use strict';

	angular
		.module('home')
		.controller('newItemController', ['$scope', '$translate', '$http', '$stateParams', 'appCONSTANTS', '$state', 'ToastService', 'TranslateItemResource', 'defaultItemsPrepService', newItemController])

	function newItemController($scope, $translate, $http, $stateParams, appCONSTANTS, $state, ToastService, TranslateItemResource, defaultItemsPrepService) {
		var vm = this;

		vm.language = appCONSTANTS.supportedLanguage;

		vm.close = function () {
			$state.go('Items', { categoryId: $stateParams.categoryId });
		}

		vm.isChanged = false;

		vm.calclulate = function () {
			var vatPresantage = vm.price * vm.vat / 100;
			vm.totalPrice = vm.price + vatPresantage;
		}
		vm.addNewItem = function () {
			vm.isChanged = true;

			var newItem = new Object();
			newItem.itemNameDictionary = vm.itemNameDictionary;
			newItem.itemDescriptionDictionary = vm.itemDescriptionDictionary;
			newItem.categoryId = $stateParams.categoryId;
			newItem.itemSize = vm.itemSize;	
			newItem.fat = vm.fat;
			newItem.carbs = vm.carbs;
			newItem.calories = vm.calories;
			newItem.protein = vm.protein;
			newItem.cost = vm.cost;
			newItem.price = vm.price;
			newItem.vat = vm.vat;
			newItem.totalPrice = vm.totalPrice;
			newItem.isActive = true;


			var model = new FormData();
			model.append('data', JSON.stringify(newItem));
			model.append('file', itemImage);
			$http({
				method: 'POST',
				url: appCONSTANTS.API_URL + 'Items/',
				useToken: true,
				headers: { 'Content-Type': undefined },
				data: model
			}).then(
				function (data, status) {
					ToastService.show("right", "bottom", "fadeInUp", $translate.instant('itemAddSuccess'), "success");
					$state.go('Items', { categoryId: $stateParams.categoryId });
					vm.isChanged = false;

				},
				function (data, status) {
					vm.isChanged = false;
					ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
				}
			);

		}
		vm.LoadUploadLogo = function () {
			$("#itemImage").click();
		}
		var itemImage;
		$scope.AddItemImage = function (element) {
			var logoFile = element[0];

			var allowedImageTypes = ['image/jpg', 'image/png', 'image/jpeg']

			if (logoFile && logoFile.size >= 0 && ((logoFile.size / (1024 * 1000)) < 2)) {

				if (allowedImageTypes.indexOf(logoFile.type) !== -1) {
					$scope.newItemForm.$dirty = true;
					$scope.$apply(function () {

						itemImage = logoFile;
						var reader = new FileReader();

						reader.onloadend = function () {
							vm.itemImage = reader.result;

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
