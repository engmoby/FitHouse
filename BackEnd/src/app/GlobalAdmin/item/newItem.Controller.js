(function () {
	'use strict';

	angular
		.module('home')
		.controller('newItemController', ['$scope', 'blockUI','$translate', '$http', '$stateParams', 'appCONSTANTS',
		 '$state', 'ToastService', 'TranslateItemResource','allSizesPrepService', newItemController])

	function newItemController($scope,blockUI, $translate, $http, $stateParams, appCONSTANTS, 
		$state, ToastService, TranslateItemResource,allSizesPrepService) {
		var vm = this;
		// vm.disable = true;
		vm.language = appCONSTANTS.supportedLanguage;
		vm.Sizes = allSizesPrepService.results;
		vm.SelectedSize = [];


		vm.close = function () {
			$state.go('Items', { categoryId: $stateParams.categoryId });
		}

		vm.isChanged = false;

		// vm.calclulate = function () {
		// 	if (vm.price <= vm.cost) {
		// 		vm.disable = true;
		// 		ToastService.show("right", "bottom", "fadeInUp", $translate.instant('costandprice'), "success");
		// 		return;
		// 	} else
		// 		vm.disable = false;
		// 	if (vm.vat !== undefined) {
		// 		var vatPresantage = vm.price * vm.vat / 100;
		// 		vm.totalPrice = vm.price + vatPresantage;
		// 	}
		// 	else
		// 		vm.totalPrice = vm.price;

		// }
		vm.addNewItem = function () {
            blockUI.start("Loading...");
			vm.isChanged = true;
			var newItem = new Object();
			newItem.itemNameDictionary = vm.itemNameDictionary;
			newItem.itemDescriptionDictionary = vm.itemDescriptionDictionary;
			newItem.categoryId = $stateParams.categoryId;
			// newItem.itemSize = (vm.itemSize == null) ? 0 : vm.itemSize;
			// newItem.fat = (vm.fat == null) ? 0 : vm.fat;
			// newItem.carbs = (vm.carbs == null) ? 0 : vm.carbs;
			// newItem.calories = (vm.calories == null) ? 0 : vm.calories;
			// newItem.protein = (vm.protein == null) ? 0 : vm.protein;
			// newItem.cost = vm.cost;
			// newItem.price = vm.price;
			newItem.vat = (vm.vat == null) ? 0 : vm.vat;
			// newItem.totalPrice = vm.totalPrice;
			newItem.itemSizes = [];
			vm.SelectedSize.forEach(function(element) {
            	newItem.itemSizes.push(element);
			}, this);
			newItem.isActive = true;
			debugger;


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
                    blockUI.stop();
					ToastService.show("right", "bottom", "fadeInUp", $translate.instant('itemAddSuccess'), "success");
					$state.go('Items', { categoryId: $stateParams.categoryId });
					vm.isChanged = false;

				},
				function (data, status) {
                    blockUI.stop();
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
