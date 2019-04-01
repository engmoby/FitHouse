(function () {
	'use strict';

	angular
		.module('home')
		.controller('editItemController', ['$scope', 'blockUI', '$http', '$translate', '$stateParams',
			'appCONSTANTS', '$state', 'ItemResource', 'ToastService', 'itemPrepService', 'allSizesPrepService', editItemController])

	function editItemController($scope, blockUI, $http, $translate, $stateParams,
		appCONSTANTS, $state, ItemResource, ToastService, itemPrepService, allSizesPrepService) {
		var vm = this;
		// vm.disable = false;
		vm.language = appCONSTANTS.supportedLanguage;
		vm.item = itemPrepService;
		vm.Sizes = allSizesPrepService.results;
		vm.SelectedSizeId = [];
		vm.SelectedSize = [];
		itemPrepService.itemSizes.forEach(function (element) {
			var kk = vm.Sizes.filter(function (item) {
				return (item.sizeId === element.sizeId);
			})[0];
			//   if(kk != null)
			// 	kk.price = element.price;

			vm.SelectedSizeId.push(element.sizeId)
			element.sizeNameDictionary = kk.sizeNameDictionary;
			vm.SelectedSize.push(element)
		}, this);
		
		vm.sizeChange = function () {
			// vm.SelectedSize = []
			if(vm.SelectedSizeId == null){
				vm.SelectedSizeId = []
			}
			for (var i = 0; i < vm.SelectedSizeId.length; i++) {
				var size = vm.Sizes.filter(function (item) {
					return (item.sizeId === vm.SelectedSizeId[i]);
				})[0]
				// if(size.price == undefined)
				// size.price = 0;
				var itemSizeExist = vm.SelectedSize.filter(function (element) {
					return element.sizeId === size.sizeId
				})
				if (itemSizeExist.length == 0)
					vm.SelectedSize.push(size)
			}
			vm.SelectedSize.forEach(element => {
				var size = vm.SelectedSizeId.filter(function (item) {
					return (element.sizeId === item);
				})[0]
				if(size == null)
					vm.SelectedSize.pop(element);
			});
		}
		console.log(vm.item);

		vm.close = function () {
			$state.go('Items', { categoryId: $stateParams.categoryId });
		}
		vm.updateItem = function () {
			blockUI.start("Loading...");
			var updatedItem = new Object();
			updatedItem.itemNameDictionary = vm.item.itemNameDictionary;
			updatedItem.itemDescriptionDictionary = vm.item.itemDescriptionDictionary;
			updatedItem.categoryId = $stateParams.categoryId;

			updatedItem.itemId = vm.item.itemId;
			updatedItem.isImageChange = isItemImageChange;

			// updatedItem.itemSize =(vm.item.itemSize == null) ? 0 : vm.item.itemSize;
			// updatedItem.fat = (vm.item.fat == null) ? 0 : vm.item.fat;
			// updatedItem.carbs = (vm.item.carbs == null) ? 0 : vm.item.carbs;
			// updatedItem.calories = (vm.item.calories == null) ? 0 : vm.item.calories;
			// updatedItem.protein = (vm.item.protein == null) ? 0 : vm.item.protein;
			// updatedItem.cost = vm.item.cost;
			// updatedItem.price = vm.item.price;
			updatedItem.vat = (vm.item.vat == null) ? 0 : vm.item.vat;
			// updatedItem.totalPrice = vm.item.totalPrice;
			updatedItem.itemSizes = [];
			vm.SelectedSize.forEach(function (element) {
				updatedItem.itemSizes.push(element);
			}, this);

			var model = new FormData();
			model.append('data', JSON.stringify(updatedItem));
			model.append('file', itemImage);
			$http({
				method: 'put',
				url: appCONSTANTS.API_URL + 'Items/',
				useToken: true,
				headers: { 'Content-Type': undefined },
				data: model
			}).then(
				function (data, status) {
					blockUI.stop();
					ToastService.show("right", "bottom", "fadeInUp", $translate.instant('ItemUpdateSuccess'), "success");
					$state.go('Items', { categoryId: $stateParams.categoryId });
				},
				function (data, status) {
					blockUI.stop();
					ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
				}
			);
		}
		vm.LoadUploadLogo = function () {
			$("#itemImage").click();
		}
		var itemImage;
		var isItemImageChange = false;
		$scope.AddItemImage = function (element) {
			var logoFile = element[0];

			var allowedImageTypes = ['image/jpg', 'image/png', 'image/jpeg']

			if (logoFile && logoFile.size >= 0 && ((logoFile.size / (1024 * 1000)) < 2)) {

				if (allowedImageTypes.indexOf(logoFile.type) !== -1) {
					$scope.editItemForm.$dirty = true;
					$scope.$apply(function () {

						itemImage = logoFile;
						isItemImageChange = true;
						var reader = new FileReader();

						reader.onloadend = function () {
							vm.item.imageURL = reader.result;

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

		// vm.calclulate = function () {

		// 	if (vm.item.price <= vm.item.cost) {
		// 		vm.disable = true;
		// 		ToastService.show("right", "bottom", "fadeInUp", $translate.instant('costandprice'), "success");
		// 		return;
		// 	} else
		// 		vm.disable = false;
		// 	if (vm.item.vat !== undefined) {
		// 		var vatPresantage = vm.item.price * vm.item.vat / 100;
		// 		vm.item.totalPrice = vm.item.price + vatPresantage;
		// 	}
		// 	else
		// 		vm.item.totalPrice = vm.item.price;



		// 	// if (vm.item.vat !== undefined)
		// 	// 	var vatPresantage = vm.item.price * vm.item.vat / 100;
		// 	// else
		// 	// 	var vatPresantage = vm.item.price;

		// 	// //var vatPresantage = vm.item.price * vm.item.vat / 100;
		// 	// vm.item.totalPrice = vm.item.price + vatPresantage;
		// }
	}
}());
