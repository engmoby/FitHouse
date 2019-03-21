(function () {
	'use strict';

	angular
		.module('home')
		.controller('newMealController', ['$scope', 'blockUI', '$translate', '$http', '$stateParams', 'appCONSTANTS',
			'$state', 'ToastService', 'AllcategoriesPrepService', 'CategoryResource', 'ItemResource', newMealController])

	function newMealController($scope, blockUI, $translate, $http, $stateParams, appCONSTANTS,
		$state, ToastService, AllcategoriesPrepService, CategoryResource, ItemResource) {
		var vm = this;
		vm.totalPrice = 0;
		vm.mealDiscount = 0;
		vm.isChanged = false;
		vm.itemModel = "";
		vm.categories = AllcategoriesPrepService;
		vm.items = [];
		vm.itemSizes = [];
		vm.language = appCONSTANTS.supportedLanguage;
		$scope.selectedItemList = [];
		vm.changeCategory = function (selectedCategoryId) {
			CategoryResource.GetAllActiveItems({ categoryId: selectedCategoryId,pagesize:0 }).$promise.then(function (results) {
				vm.items = results.results;
			},
				function (data, status) {
					ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
				});
		}

		vm.changeItem = function (selectedItemId) {
			ItemResource.GetAllItemSizes({ itemId: selectedItemId }).$promise.then(function (results) {
				vm.itemSizes = results;
			},
				function (data, status) {
					ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
				});
		}
		

		vm.close = function () {
			$state.go('Meal');
		}
		$scope.sum = function (items, prop) {
			return items.reduce(function (a, b) {
				return a + b[prop];
			}, 0);
		};
		vm.addItemToList = function (model) {
			//	if (model != null) {

			model.itemNameDictionary = vm.selectedItem.itemNameDictionary;
			model.sizeNameDictionary = vm.selectedItemSize.sizeNameDictionary;
			model.vat = vm.selectedItem.vat;
			$scope.selectedItemList.push(model);
			vm.selectedCategoryId = 0;
			vm.selectedItem = null;
			vm.selectedItemSize = null;
			if ($scope.selectedItemList == null) {
				vm.mealtotalDiscount = "";
				vm.mealDiscount = "";
				vm.carbs = "";
				vm.calories = "";
				vm.protein = "";
				vm.cost = "";
				vm.vat = "";
				vm.price = "";
				vm.totalPrice = "";
			} else {
				vm.carbs = $scope.sum($scope.selectedItemList, 'carbs');
				vm.calories = $scope.sum($scope.selectedItemList, 'calories');
				vm.protein = $scope.sum($scope.selectedItemList, 'protein');
				vm.cost = $scope.sum($scope.selectedItemList, 'cost');
				vm.price = $scope.sum($scope.selectedItemList, 'price');
				vm.vat = $scope.sum($scope.selectedItemList, 'vat');
				vm.totalPrice = $scope.sum($scope.selectedItemList, 'totalPrice');
			}
			calclulateWithDicscount();
			var discountPresantage = vm.totalPrice * vm.mealDiscount / 100;
			vm.mealtotalDiscount = vm.totalPrice - discountPresantage;
			//	} 
		}
		vm.removeItem = function(index){
			$scope.selectedItemList.splice(index,1);
			if ($scope.selectedItemList == null) {
				vm.mealtotalDiscount = "";
				vm.mealDiscount = "";
				vm.carbs = "";
				vm.calories = "";
				vm.protein = "";
				vm.cost = "";
				vm.vat = "";
				vm.price = "";
				vm.totalPrice = "";
			} else {
				vm.carbs = $scope.sum($scope.selectedItemList, 'carbs');
				vm.calories = $scope.sum($scope.selectedItemList, 'calories');
				vm.protein = $scope.sum($scope.selectedItemList, 'protein');
				vm.cost = $scope.sum($scope.selectedItemList, 'cost');
				vm.price = $scope.sum($scope.selectedItemList, 'price');
				vm.vat = $scope.sum($scope.selectedItemList, 'vat');
				vm.totalPrice = $scope.sum($scope.selectedItemList, 'totalPrice');
			}
		}
		function calclulateWithDicscount() {
			var vatPresantage = (vm.price * vm.vat) / 100;
			var discountPresantage = vm.price * vm.mealDiscount / 100;
			if (vm.mealDiscount == null) {
				vm.totalPrice = vm.price + vatPresantage;
				vm.mealtotalDiscount = vm.totalPrice;
			}
			else {
				vm.totalPrice = vm.price + vatPresantage - discountPresantage;
				vm.mealtotalDiscount = vm.totalPrice;
			}
			if (vm.vat == "") {
				vm.vat = 0;
			}
		}
		vm.calclulate = function () {
			calclulateWithDicscount();

		}

		vm.flag = false;
		vm.calclulateDiscount = function () {

			if (vm.mealtotalDiscount == "" || vm.mealtotalDiscount == null || vm.mealtotalDiscount == 0) {
				vm.mealtotalDiscount = vm.totalPrice;
				vm.mealDiscount = 0;
				vm.flag = true;

			}
			else {
				var discountPresantage = vm.totalPrice * vm.mealDiscount / 100;
				vm.mealtotalDiscount = vm.totalPrice - discountPresantage;
			}


		}
		vm.addNewMeal = function () {

			blockUI.start("Loading...");


			if ($scope.selectedItemList.length == 0) {
				blockUI.stop();
				ToastService.show("right", "bottom", "fadeInUp", $translate.instant('mustchooseitem'), "success");
				return
			}
			vm.sendSelected = [];
			vm.isChanged = true;
			var newMeal = new Object();
			newMeal.mealNameDictionary = vm.mealNameDictionary;
			newMeal.mealDescriptionDictionary = vm.mealDescriptionDictionary;

			if (vm.flag == true || vm.mealtotalDiscount == NaN) {
				newMeal.mealPrice = vm.totalPrice;
			}
			else {
				newMeal.mealPrice = vm.mealtotalDiscount;
			}

			if (vm.mealDiscount == null)
				newMeal.mealDiscount = 0;
			else
				newMeal.mealDiscount = vm.mealDiscount;

			// if (vm.mealDiscount == "") {
			// 	newMeal.mealDiscount = 0;
			// 	newMeal.totalPrice = vm.totalPrice;
			// }

			newMeal.isActive = true;

			$scope.selectedItemList.forEach(element => {
				vm.sendSelected.push(
					{
						itemSizeId: element.itemSizeId
					}
				);
			});
			newMeal.mealDetails = vm.sendSelected;
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
					blockUI.stop();
					ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");
					$state.go('Meal');
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
