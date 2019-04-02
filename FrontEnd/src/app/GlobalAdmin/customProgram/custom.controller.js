(function () {
	'use strict';

	angular
		.module('home')
		.controller('CustomController', ['$scope', 'blockUI', 'PromotionResource', '$filter', '$timeout', '$state', 'UserAddressesResource', 'BranchResource', '$translate', 'RegionResource', 'CityResource',
			'AreaResource', 'CountriesPrepService', 'CustomResource', 'AllcategoriesPrepService', 'CategoryResource', 'ItemResource', 'ToastService', CustomController])

	function CustomController($scope, blockUI, PromotionResource, $filter, $timeout, $state, UserAddressesResource, BranchResource, $translate, RegionResource, CityResource, AreaResource, CountriesPrepService,
		CustomResource, AllcategoriesPrepService, CategoryResource, ItemResource, ToastService) {

		var vm = this;

		$scope.btnCheckValid = true;
		$scope.promotionValue = 0;
		$scope.promotionError = null;
		//vm.ItemCategorized = itemsPrepService;
		vm.itemList = [];
		vm.counties = [];
		vm.validate = false;
		vm.selectedBranchId = 0;
		vm.ProgramTotalPrice = 0;
		vm.ProgramDiscount = JSON.parse(localStorage.getItem("ProgramDiscount"));
		vm.daysCount = JSON.parse(localStorage.getItem("programDaysCount"));
		vm.mealsCount = JSON.parse(localStorage.getItem("mealPerDay"));
		vm.IsBreakFast = JSON.parse(localStorage.getItem("isBreakFast"));
		vm.IsSnack = JSON.parse(localStorage.getItem("isSnack"));
		vm.SelectedDays = JSON.parse(localStorage.getItem("dayList"));
		vm.startDate = localStorage.getItem("itemDatetime");
		var user = JSON.parse(localStorage.getItem("ngStorage-authInfo"));
		vm.clientId = user.UserId;
		vm.order = JSON.parse(localStorage.getItem("OrderSummary"));
		vm.Total = 0;
		vm.DeliveryFees = 0;
		vm.RepeatList = [];
		vm.daylistCount = []

		for (var j = 0; j < vm.daysCount; j++) {
			var mealList = []
			var dat = vm.startDate;
			for (var k = 0; k < vm.mealsCount; k++) {
				mealList.push({ selectedItemList: [] })
			}
			var newdate = new Date(dat);
			newdate.setDate(newdate.getDate() + j);
			dat = newdate;
			var dd = dat.getDay();
			if (j != 0) {
				for (var l = 0; vm.SelectedDays.length -1; l++) {
					debugger;
					var dd = vm.SelectedDays[l].dayId;
					if (dat.getDay() === vm.SelectedDays[l].dayId)
						newdate.setDate(newdate.getDate() + j + 1);
					if (dat.getDay() === vm.SelectedDays[l].dayId)
						newdate.setDate(newdate.getDate() + j + 1);
					if (dat.getDay() === vm.SelectedDays[l].dayId)
						newdate.setDate(newdate.getDate() + j + 1);
					if (dat.getDay() === vm.SelectedDays[l].dayId)
						newdate.setDate(newdate.getDate() + j + 1);
					if (dat.getDay() === vm.SelectedDays[l].dayId)
						newdate.setDate(newdate.getDate() + j + 1);
					if (dat.getDay() === vm.SelectedDays[l].dayId)
						newdate.setDate(newdate.getDate() + j + 1);
					if (dat.getDay() === vm.SelectedDays[l].dayId)
						newdate.setDate(newdate.getDate() + j + 1);
				}
			}
			vm.daylistCount.push({
				meals: mealList,
				date: dat
			})
		}
		console.log(vm.daylistCount);
		vm.itemList = [];
		vm.today = new Date(vm.startDate);
		for (var i = 1; i < vm.daysCount; i++) {
			var date = new Date(vm.startDate);
			var newdate = new Date(date);
			newdate.setDate(newdate.getDate() + i);
			vm.today = newdate;

		}
		vm.Repeat = function () {
			//vm.RepeatList = [];
			debugger;
			//console.log(vm.daylistCount[0].meals[0].selectedItemList);
			var dd = vm.daylistCount;

			var firstDay = $filter('filter')(vm.itemList, x => (x.dayNumber == 1));

			firstDay.forEach(element => {
				element.dayNumber = 1;
				vm.RepeatList.push(element);
			});

			for (var i = 1; i < vm.daysCount; i++) {
				for (var l = 0; l < firstDay.length; l++) {
					//	firstDay[l].dayNumber = i + 1;
					// vm.RepeatList.push(firstDay[l]);
					vm.daylistCount[i].meals.forEach(element => {
						debugger;
						var ss = element;
						firstDay[l].dayNumber = i + 1;
						// element.selectedItemList=[];
						element.selectedItemList.push(firstDay[l])
						vm.itemList.push(firstDay[l]);
					});
				}
			}
			var fff = vm.daylistCount;
			//vm.itemList = vm.RepeatList;
			//console.log(vm.itemList);
			//$scope.itemModel = vm.RepeatList;
		}

		vm.categories = AllcategoriesPrepService;
		vm.items = [];
		vm.itemSizes = [];
		// if (vm.order != null) {
		// 	//10 seconds delay
		// 	$timeout(function () {
		// 		vm.order = JSON.parse(localStorage.getItem("OrderSummary"));
		// 		localStorage.removeItem("OrderSummary");
		// 		localStorage.removeItem("itemDatetime");
		// 		localStorage.removeItem("isSnack");
		// 		localStorage.removeItem("isBreakFast");
		// 		localStorage.removeItem("dayList");
		// 		localStorage.removeItem("mealPerDay");
		// 		localStorage.removeItem("programDaysCount");
		// 		localStorage.removeItem("ProgramDiscount");
		// 		$state.go('homePage')
		// 	}, 10000);
		// }
		vm.changeCategory = function (selectedCategoryId, meal) {
			CategoryResource.GetAllActiveItems({ categoryId: selectedCategoryId, pagesize: 0 }).$promise.then(function (results) {
				meal.items = results.results;
			},
				function (data, status) {
					ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
				});
		}

		vm.changeItem = function (selectedItemId, meal) {
			ItemResource.GetAllItemSizes({ itemId: selectedItemId }).$promise.then(function (results) {
				meal.itemSizes = results;
			},
				function (data, status) {
					ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
				});
		}

		vm.removeItem = function (item, meal) {
			// meal.selectedItemList.splice(index, 1);
			meal.selectedItemList.splice(meal.selectedItemList.indexOf(item), 1);
			vm.itemList.splice(vm.itemList.indexOf(item), 1);
		}
		$scope.getData = function (itemModel, day, mealNumber, meal, type) {

			// var differntMeal = $filter('filter')(vm.itemList, x => (x.dayNumber == day && x.mealNumberPerDay != meal) || (x.dayNumber != day));
			// //var differntMeal = vm.itemList.filter(x => (x.dayNumber == day && x.mealNumberPerDay != meal) || (x.dayNumber != day));
			// vm.itemList = [];
			// vm.itemList = angular.copy(differntMeal);
			//vm.daylistCount.push(meal);
			// itemModel.forEach(element => {
			meal.selectedCategoryId = 0;
			meal.selectedItem = null;
			meal.selectedItemSize = null;
			itemModel.dayNumber = day;
			itemModel.mealNumberPerDay = mealNumber;
			itemModel.itemType = type;

			vm.itemList.push(itemModel);
			if (meal.selectedItemList == null)
				meal.selectedItemList = [];
			meal.selectedItemList.push(itemModel)
			// });
			vm.ProgramPrice = 0;
			vm.ProgramCost = 0;
			vm.ProgramVAT = 0;
			vm.ProgramTotalPrice = 0;
			vm.ProgramTotalPriceBefore = 0;
			vm.totalPrice = 0;
			for (var i = 0; i < vm.itemList.length; i++) {
				vm.ProgramPrice = vm.ProgramPrice + vm.itemList[i].price;
				vm.ProgramCost = vm.ProgramCost + vm.itemList[i].cost;
				vm.ProgramVAT = vm.ProgramVAT + vm.itemList[i].vat;
				vm.totalPrice += vm.itemList[i].totalPrice;
			}
			vm.ProgramTotalPrice = vm.totalPrice;//- (vm.totalPrice * (vm.ProgramDiscount / 100));
			vm.ProgramTotalPriceBefore = vm.totalPrice;

			debugger;
			vm.itemList.forEach(element => {
				vm.carbs = (element.carbs == null) ? 0 : $scope.sum(vm.itemList, 'carbs');
				vm.calories = (element.calories == null) ? 0 : $scope.sum(vm.itemList, 'calories');
				vm.protein = (element.protein == null) ? 0 : $scope.sum(vm.itemList, 'protein');
				vm.fat = (element.fat == null) ? 0 : $scope.sum(vm.itemList, 'fat');
				//vm.price = $scope.sum(model, 'price');

				//$scope.selectedItemList = model;
			});

			vm.Total = vm.totalPrice - (vm.totalPrice * (vm.ProgramDiscount / 100)) + vm.DeliveryFees;

		}

		vm.AddNewProgram = function () {
			blockUI.start($translate.instant('loading'));
			var newProgram = new CustomResource();
			newProgram.isActive = true;
			newProgram.programDays = vm.daysCount;
			newProgram.noOfMeals = vm.mealsCount;
			newProgram.isBreakfast = vm.IsBreakFast;
			newProgram.isSnack = vm.IsSnack;
			newProgram.programDiscount = vm.ProgramDiscount;
			newProgram.isAdmin = true;
			newProgram.isForClient = false;
			newProgram.isDeleted = false;
			newProgram.programDetails = vm.itemList;
			newProgram.price = vm.ProgramTotalPrice + vm.DeliveryFees;
			newProgram.isOrdering = true;
			newProgram.day = vm.startDate;
			newProgram.isProgram = true;
			newProgram.userId = vm.clientId;
			newProgram.days = vm.SelectedDays;
			if (vm.orderType.type == "delivery") {
				newProgram.isDelivery = true;
				newProgram.addressId = vm.addresses.address;
				newProgram.branchId = vm.addressDetails.branchId;
			}
			else {
				newProgram.isDelivery = false;
				newProgram.branchId = vm.selectedBranchId;
			}
			newProgram.$create().then(
				function (data, status) {
					//	ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");
					blockUI.stop();
					debugger;
					localStorage.setItem('OrderSummary', JSON.stringify(data));
					$state.go('Summary');
				},
				function (data, status) {
					blockUI.stop();
					//	ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
				}
			);
		}

		/* helper methods */

		vm.addItemToList = function (model) {
			debugger;
			var modelList = [];
			modelList = model;

			// modelList.forEach(element => {
			// 	vm.carbs = (element.carbs == null) ? 0 : $scope.sum(model, 'carbs');
			// 	vm.calories = (element.calories == null) ? 0 : $scope.sum(model, 'calories');
			// 	vm.protein = (element.protein == null) ? 0 : $scope.sum(model, 'protein');
			// 	vm.fat = (element.fat == null) ? 0 : $scope.sum(model, 'fat');
			// 	//vm.price = $scope.sum(model, 'price');

			// 	$scope.selectedItemList = model;
			// });
			//console.log($scope.selectedItemList);
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
		vm.counties.push({ countryId: 0, titleDictionary: { "en": "Select Country", "ar": "اختار بلد" } });
		vm.selectedCountryId = 0;
		vm.counties = vm.counties.concat(CountriesPrepService.results)

		vm.resetDLL = function () {
			vm.counties = [];
			vm.counties.push({ countryId: 0, titleDictionary: { "en": "Select Country", "ar": "اختار بلد" } });
			vm.selectedCountryId = 0;
			vm.counties = vm.counties.concat(CountriesPrepService.results)
			vm.regions = [];
			vm.cities = [];
			vm.area = [];
		}

		vm.countryChange = function () {
			// vm.counties.splice(0, 1);
			for (var i = vm.counties.length - 1; i >= 0; i--) {
				if (vm.counties[i].countryId == 0) {
					vm.counties.splice(i, 1);
				}
			}
			vm.regions = [];
			vm.cities = [];
			vm.area = [];
			vm.regions.push({ regionId: 0, titleDictionary: { "en": "Select Region", "ar": "اختار اقليم" } });
			RegionResource.getAllRegions({ countryId: vm.selectedCountryId, pageSize: 0 }).$promise.then(function (results) {
				vm.selectedRegionId = 0;
				vm.regions = vm.regions.concat(results.results);
			},
				function (data, status) {
					//  ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
				});
			vm.selectedBranchId = 0;
			vm.DeliveryFees = 0;
			//  blockUI.stop();
		}
		vm.regionChange = function () {
			if (vm.selectedRegionId != undefined) {
				for (var i = vm.regions.length - 1; i >= 0; i--) {
					if (vm.regions[i].regionId == 0) {
						vm.regions.splice(i, 1);
					}
				}
				vm.cities = [];
				vm.area = [];
				vm.cities.push({ cityId: 0, titleDictionary: { "en": "Select City", "ar": "اختار مدينة" } });
				CityResource.getAllCities({ regionId: vm.selectedRegionId, pageSize: 0 }).$promise.then(function (results) {
					vm.selectedCityId = 0;
					vm.cities = vm.cities.concat(results.results);
				},
					function (data, status) {
						//  ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
					});
			}
		}
		vm.cityChange = function () {
			if (vm.selectedCityId != undefined) {
				for (var i = vm.cities.length - 1; i >= 0; i--) {
					if (vm.cities[i].cityId == 0) {
						vm.cities.splice(i, 1);
					}
				}
				vm.area = [];
				vm.area.push({ areaId: 0, titleDictionary: { "en": "Select Area", "ar": "اختار منطقه" } });
				AreaResource.getAllAreas({ cityId: vm.selectedCityId, pageSize: 0 }).$promise.then(function (results) {
					debugger;
					vm.selectedAreaId = 0;
					vm.area = vm.area.concat(results.results);
				},
					function (data, status) {
						//ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
					});
			}
		}
		vm.areaChange = function () {
			debugger;
			if (vm.selectedAreaId != undefined && vm.selectedAreaId > 0) {
				for (var i = vm.area.length - 1; i >= 0; i--) {
					if (vm.area[i].areaId == 0) {
						vm.area.splice(i, 1);
					}
				}
				vm.branchList = [];
				// vm.branchList.push({ branchId: 0, titleDictionary: { "en": "Select Branch", "ar": "اختار فرع" } });
				vm.selectedBranchId = [0];
				vm.branchList = vm.branchList.concat(($filter('filter')(vm.area, { areaId: vm.selectedAreaId }))[0].branches);
			}
		}
		vm.branchChange = function () {
			for (var i = vm.branchList.length - 1; i >= 0; i--) {
				if (vm.branchList[i].branchId == 0) {
					vm.branchList.splice(i, 1);
				}
			}
			vm.DeliveryFees = 0;
			vm.Total = vm.ProgramTotalPrice + vm.DeliveryFees;
			//GetBranchDelivery();
		}

		vm.orderType = {
			type: 'delivery'
		};
		vm.addresses = {
			address: 0
		};
		vm.typeChanged = function () {
			debugger;
			if (vm.orderType.type == 'delivery') {
				vm.DeliveryFees = 0;
				vm.Total = 0;
				vm.selectedBranchId = 0;
			}
			else {
				vm.DeliveryFees = 0;
				vm.Total = 0;
				vm.addresses.address = null;
			}
		}

		vm.changeOrderType = function () {
			if (vm.orderType.type == 'delivery' || vm.orderType.type == 'true') {
				vm.orderType.type = 'pickup'
				vm.addressDetails.address = null;
			} else {
				vm.orderType.type = 'delivery'

			}


		}
		if (vm.orderType.type == 'delivery') {
			var k = UserAddressesResource.getUserAddresses({ userId: vm.clientId }).$promise.then(function (results) {
				vm.userAddresses = results;
				//console.log(vm.userAddresses);
				//blockUI.stop();

			},
				function (data, status) {
					//	blockUI.stop();
					ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
				});
		}
		vm.addressInfo = function (address) {
			debugger;
			vm.addressDetails = address;
			vm.selectedBranchId = vm.addressDetails.branchId;
			GetBranchDelivery();
			//	vm.Total = vm.ProgramTotalPrice + vm.DeliveryFees;
		}
		function GetBranchDelivery() {
			var temp = new BranchResource();
			temp.$getBranch({ branchId: vm.selectedBranchId }).then(function (results) {
				if (results.deliveryPrice == null) {
					vm.DeliveryFees = 0;
				}
				else {
					vm.DeliveryFees = results.deliveryPrice;
				}

				vm.Total = vm.ProgramTotalPrice + vm.DeliveryFees;


			},
				function (data, status) {
					//   blockUI.stop();
					ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
				});
		}


		$scope.checkPromotion = function (promoTitle) {
			blockUI.start($translate.instant('loading'));

			var promotion = new PromotionResource();
			promotion.title = promoTitle;
			promotion.type = "CustomProgram";


			promotion.$CheckPromotion().then(
				function (data, status) {
					debugger;
					blockUI.stop();
					$scope.btnCheckValid = false;
					$scope.promotionValue = data;
					// vm.ProgramTotalPrice = vm.ProgramTotalPrice - (vm.ProgramTotalPrice * $scope.promotionValue.value / 100);
					// vm.Total = vm.ProgramTotalPrice;
					$scope.promotionError = null;


					var promoValue = (vm.Total * $scope.promotionValue.value / 100);
					vm.Total = vm.Total - promoValue;
				},
				function (data, status) {
					blockUI.stop();
					$scope.btnCheckValid = true;
					$scope.promotionError = data.data.message;
					$scope.promotionValue = null;

				}
			);
		}
	}

}());
