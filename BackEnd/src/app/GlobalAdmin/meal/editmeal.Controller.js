(function () {
	'use strict';

	angular
		.module('home')
		.controller('editMealController', ['$scope', 'blockUI', '$filter', '$http', '$translate', '$stateParams',
		 'appCONSTANTS', '$state', 'MealResource', 'ToastService', 'mealPrepService',
		 'AllcategoriesPrepService', 'CategoryResource', 'ItemResource', editMealController])

	function editMealController($scope, blockUI, $filter, $http, $translate, $stateParams, appCONSTANTS,
		 $state, MealResource, ToastService, mealPrepService,
		 AllcategoriesPrepService, CategoryResource, ItemResource) {
		var vm = this;
		vm.language = appCONSTANTS.supportedLanguage;
		vm.meal = mealPrepService;
		// vm.itemsList = itemsssPrepService;
		vm.itemModel = [];
		vm.categories = AllcategoriesPrepService;
		vm.items = [];
		vm.itemSizes = [];
		$scope.selectedItemList = [];
		if (vm.meal.imageUrl != null)
			vm.meal.imageUrl = vm.meal.imageUrl + "?date=" + $scope.getCurrentTime();

		var i;
		vm.changeCategory = function (selectedCategoryId) {
			vm.isloading = true;
			CategoryResource.GetAllActiveItems({ categoryId: selectedCategoryId,pagesize:0 }).$promise.then(function (results) {
				vm.items = results.results;
				vm.isloading = false;
			},
				function (data, status) {
					vm.isloading = false;
					ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
				});
		}

		vm.changeItem = function (selectedItemId) {
			vm.isloading = true;
			ItemResource.GetAllItemSizes({ itemId: selectedItemId }).$promise.then(function (results) {
				vm.itemSizes = results;
				vm.isloading = false;
			},
				function (data, status) {
					vm.isloading = false;
					ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
				});
		}

		
		for (i = 0; i < vm.meal.mealDetails.length; i++) {
			// var indexRate = vm.itemsList.indexOf($filter('filter')(vm.itemsList, { 'itemId': vm.meal.mealDetails[i].itemId }, true)[0]);
			// vm.meal.mealDetails[i].itemSize.vat = vm.meal.mealDetails[i].
			// vm.itemModel.push(vm.meal.mealDetails[i].itemSize);
			$scope.selectedItemList.push(vm.meal.mealDetails[i].itemSize)
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
		// vm.itemModel = angular.copy(mealPrepService.mealDetails)
		// bindItemsTocalculate($scope.selectedItemList);
		bindItemsTocalculate();
		vm.close = function () {
			$state.go('Meal');
		}
		vm.updateMeal = function () {
			blockUI.start("Loading...");

			if ($scope.selectedItemList.length == 0) {
				blockUI.stop();
				ToastService.show("right", "bottom", "fadeInUp", $translate.instant('mustchooseitem'), "success");
				return
			}

			vm.sendSelected = [];
			var updatedMeal = new Object();
			updatedMeal.mealNameDictionary = vm.meal.mealNameDictionary;
			updatedMeal.mealDescriptionDictionary = vm.meal.mealDescriptionDictionary;

			updatedMeal.mealId = vm.meal.mealId;
			updatedMeal.isImageChange = isMealImageChange;
			
			updatedMeal.mealPrice = vm.mealtotalDiscount;
			if (vm.meal.mealDiscount == null)
				updatedMeal.mealDiscount = 0;
			else
				updatedMeal.mealDiscount = vm.meal.mealDiscount;

			$scope.selectedItemList.forEach(element => {
				vm.sendSelected.push(
					{
						itemSizeId: element.itemSizeId
					}
				);
			});
			updatedMeal.mealDetails = vm.sendSelected;

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
					blockUI.stop();
					ToastService.show("right", "bottom", "fadeInUp", $translate.instant('MealUpdateSuccess'), "success");
					$state.go('Meal');
				},
				function (data, status) {
					blockUI.stop();
					ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
				}
			);
		}
		function bindItemsTocalculate() {
			
			// model.itemNameDictionary = vm.selectedItem.itemNameDictionary;
			// model.sizeNameDictionary = vm.selectedItemSize.sizeNameDictionary;
			// model.vat = vm.selectedItem.vat;
			
			if ($scope.selectedItemList == null) {
				vm.meal.mealtotalDiscount = "";
				vm.meal.mealDiscount = "";
				vm.meal.carbs = "";
				vm.meal.calories = "";
				vm.meal.protein = "";
				vm.meal.fat = "";
				vm.meal.cost = "";
				vm.meal.vat = "";
				vm.meal.price = "";
				vm.meal.totalPrice = "";
			} else {
				vm.meal.carbs = SumItem($scope.selectedItemList, 'carbs');
				vm.meal.calories = SumItem($scope.selectedItemList, 'calories');
				vm.meal.protein = SumItem($scope.selectedItemList, 'protein');
				vm.meal.fat = SumItem($scope.selectedItemList, 'fat');
				vm.meal.cost = SumItem($scope.selectedItemList, 'cost');
				vm.meal.price = SumItem($scope.selectedItemList, 'price');
				vm.meal.vat = SumItem($scope.selectedItemList, 'vat');
				vm.meal.totalPrice = SumItem($scope.selectedItemList, 'totalPrice');
			}

			calclulateWithDicscount();
			var discountPresantage = vm.meal.totalPrice * vm.meal.mealDiscount / 100;

			vm.mealtotalDiscount = vm.meal.totalPrice - discountPresantage;


		}
		vm.removeItem = function(index){
			$scope.selectedItemList.splice(index,1);
			// $scope.selectedItemList.splice(index,1);

			if ($scope.selectedItemList == null) {
				vm.meal.mealtotalDiscount = "";
				vm.meal.mealDiscount = "";
				vm.meal.carbs = "";
				vm.meal.calories = "";
				vm.meal.protein = "";
				vm.meal.fat = "";
				vm.meal.cost = "";
				vm.meal.vat = "";
				vm.meal.price = "";
				vm.meal.totalPrice = "";
			} else {
				vm.meal.carbs = SumItem($scope.selectedItemList, 'carbs');
				vm.meal.calories = SumItem($scope.selectedItemList, 'calories');
				vm.meal.protein = SumItem($scope.selectedItemList, 'protein');
				vm.meal.fat = SumItem($scope.selectedItemList, 'fat');
				vm.meal.cost = SumItem($scope.selectedItemList, 'cost');
				vm.meal.price = SumItem($scope.selectedItemList, 'price');
				vm.meal.vat = SumItem($scope.selectedItemList, 'vat');
				vm.meal.totalPrice = SumItem($scope.selectedItemList, 'totalPrice');
			}
			bindItemsTocalculate();
		}
		vm.addItemToList = function (model) {
			$scope.selectedItemList.push(model);
			vm.selectedCategoryId = 0;
			vm.selectedItem = null;
			vm.selectedItemSize = null;
			vm.items = [];
			vm.itemSizes = [];
			bindItemsTocalculate();
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


		vm.calclulateDiscount = function () {
			var discountPresantage = vm.meal.totalPrice * vm.meal.mealDiscount / 100;

			vm.mealtotalDiscount = vm.meal.totalPrice - discountPresantage;
		}
		vm.LoadUploadLogo = function () {
			$("#mealImage").click();
		}
		var mealImage;
		var isMealImageChange = false;
		$scope.AddMealImage = function (element) {
			var logoFile = element[0];
			debugger;
			var allowedImageTypes = ['image/jpg', 'image/png', 'image/jpeg']

			if (logoFile && logoFile.size >= 0 && ((logoFile.size / (1024 * 1000)) < 2)) {

				if (allowedImageTypes.indexOf(logoFile.type) !== -1) {
					$scope.editMealForm.$dirty = true;
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
