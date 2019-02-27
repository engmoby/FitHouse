(function () {
    'use strict';

    angular
        .module('home')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('homePage', {
                    url: '/homePage',
                    templateUrl: './app/GlobalAdmin/user/templates/home.html',
                    controller: 'homePageController',
                    'controllerAs': 'homePageCtrl',
                    resolve: {
                        mealsPrepService: mealsPrepService,
                        programPrepService: programPrepService,
                        settingsPrepService: settingsPrepService,
                        daysPrepService: daysPrepService
                    }
                })

                .state('addUser', {
                    url: '/addUser',
                    templateUrl: './app/GlobalAdmin/register/templates/addUser.html',
                    controller: 'userController',
                    'controllerAs': 'userCtrl',
                    resolve: {
                        CountriesPrepService: CountriesPrepService
                    }
                })
                .state('program', {
                    url: '/program',
                    templateUrl: './app/GlobalAdmin/program/templates/program.html',
                    controller: 'programController',
                    'controllerAs': 'programCtrl',
                    resolve: {
                        programPrepService: programNoPagePrepService
                    }
                })

                .state('meal', {
                    url: '/meal',
                    templateUrl: './app/GlobalAdmin/meal/templates/meal.html',
                    controller: 'mealController',
                    'controllerAs': 'mealCtrl',
                    resolve: {
                        mealsPrepService: mealsPrepService
                    }
                })

                .state('programDetails', {
                    url: '/programDetails/:programId',
                    templateUrl: './app/GlobalAdmin/program/templates/programDetails.html',
                    controller: 'programDetailsController',
                    'controllerAs': 'programDetailsCtrl',
                    resolve: {
                        progDetailsPrepService: progDetailsPrepService,
                        itemsssPrepService: itemsssPrepService,
                        CountriesPrepService: CountriesPrepService
                    }
                })

                .state('mealDetails', {
                    url: '/mealDetails/:mealId',
                    templateUrl: './app/GlobalAdmin/meal/templates/mealDetails.html',
                    controller: 'mealDetailsController',
                    'controllerAs': 'mealDetailsCtrl',
                    resolve: {
                        mealPrepService: mealPrepService,
                        itemsssPrepService: itemsssPrepService,
                        CountriesPrepService: CountriesPrepService
                    }
                })

        } 
                })
    .state('Custom', {
        url: '/Custom',
        templateUrl: './app/GlobalAdmin/customProgram/templates/Custom.html',
        controller: 'CustomController',
        'controllerAs': 'CustomCtrl',
        resolve: {
            itemsPrepService: itemsPrepService,
            CountriesPrepService: CountriesPrepService
        }
    })

    .state('Summary', {
        url: '/Summary',
        templateUrl: './app/GlobalAdmin/customProgram/templates/Summary.html',
        controller: 'CustomController',
        'controllerAs': 'CustomCtrl',
        resolve: {
            itemsPrepService: itemsPrepService,
            CountriesPrepService: CountriesPrepService
        }
    })

        });


CountriesPrepService.$inject = ['CountryResource']
function CountriesPrepService(CountryResource) {
    return CountryResource.getAllCountries({ pageSize: 0 }).$promise;
}

progDetailsPrepService.$inject = ['GetProgramDetailResource', '$stateParams']
function progDetailsPrepService(GetProgramDetailResource, $stateParams) {
    return GetProgramDetailResource.getProgramDetail({ programId: $stateParams.programId }).$promise;
}

itemsssPrepService.$inject = ['GetItemsssResource']
function itemsssPrepService(GetItemsssResource) {
    return GetItemsssResource.getAllItemsss().$promise;
}

CategoreisPrepService.$inject = ['CustomsResourceCategories']
function CategoreisPrepService(CustomsResourceCategories) {
    return CustomsResourceCategories.getAllCategories().$promise;
}
itemsPrepService.$inject = ['GetItemsResource']
function itemsPrepService(GetItemsResource) {
    return GetItemsResource.getAllItemsCategorized().$promise;
}
CountriesPrepService.$inject = ['CountryResource']
function CountriesPrepService(CountryResource) {
    return CountryResource.getAllCountries({ pageSize: 0 }).$promise;
}

daysPrepService.$inject = ['GetDaysResource']
function daysPrepService(GetDaysResource) {
    return GetDaysResource.gatAllDays().$promise;
}

mealsPrepService.$inject = ['GetMealsResource', '$stateParams']
function mealsPrepService(GetMealsResource, $stateParams) {
    return GetMealsResource.getAllMeals().$promise;
}

mealPrepService.$inject = ['MealResource', '$stateParams']
function mealPrepService(MealResource, $stateParams) {
    return MealResource.getMeal({ mealId: $stateParams.mealId }).$promise;
}

programPrepService.$inject = ['GetProgramResource']
function programPrepService(GetProgramResource) {
    return GetProgramResource.gatAllPrograms().$promise;
}

programNoPagePrepService.$inject = ['GetProgramResource']
function programNoPagePrepService(GetProgramResource) {
    return GetProgramResource.gatAllPrograms({ pageSize: 0 }).$promise;
}

settingsPrepService.$inject = ['GetSettingsResource']
function settingsPrepService(GetSettingsResource) {
    return GetSettingsResource.getAllSettings().$promise;
}

CountriesPrepService.$inject = ['CountryResource']
function CountriesPrepService(CountryResource) {
    return CountryResource.getAllCountries({ pageSize: 0 }).$promise;
}
}());
(function() {
  'use strict';

  angular
    .module('home')
    .config(config)
    .run(runBlock);

  config.$inject = ['ngProgressLiteProvider'];
  runBlock.$inject = ['$rootScope', 'ngProgressLite','$transitions','blockUI'];

  function config(ngProgressLiteProvider) {
    ngProgressLiteProvider.settings.speed = 1000;

  }

  function runBlock($rootScope, ngProgressLite,$transitions,blockUI) {

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        startProgress();
    });
    $transitions.onStart({}, function(transition) {
      blockUI.start("Loading..."); 
    });
    $transitions.onSuccess({}, function(transition) {
      blockUI.stop();
    });
    $transitions.onError({  }, function(transition) {
      blockUI.stop();
    });
    var routingDoneEvents = ['$stateChangeSuccess', '$stateChangeError', '$stateNotFound'];

    angular.forEach(routingDoneEvents, function(event) {
      $rootScope.$on(event, function(event, toState, toParams, fromState, fromParams) {
        endProgress();
      });
    });

    function startProgress() {
      ngProgressLite.start();
    }

    function endProgress() {
      ngProgressLite.done();
    }

  }
})();
(function () {
	'use strict';

	angular
		.module('home')
		.controller('CustomController', ['$scope', '$filter', '$state', 'UserAddressesResource', 'BranchResource', '$translate', 'RegionResource', 'CityResource',
			'AreaResource', 'CountriesPrepService', 'CustomResource', 'itemsPrepService', 'ToastService', CustomController])

	function CustomController($scope, $filter, $state, UserAddressesResource, BranchResource, $translate, RegionResource, CityResource, AreaResource, CountriesPrepService,
		CustomResource, itemsPrepService, ToastService) {

		var vm = this;
		vm.ItemCategorized = itemsPrepService;
		vm.itemList = [];
		vm.counties = [];
		vm.validate = false;
		vm.ProgramDiscount = JSON.parse(localStorage.getItem("ProgramDiscount"));
		vm.daysCount = JSON.parse(localStorage.getItem("programDaysCount"));
		vm.mealsCount = JSON.parse(localStorage.getItem("mealPerDay"));
		vm.IsBreakFast = JSON.parse(localStorage.getItem("isBreakFast"));
		vm.SelectedDays = JSON.parse(localStorage.getItem("dayList"));
		vm.IsSnack = JSON.parse(localStorage.getItem("isSnack"));
		vm.startDate = localStorage.getItem("itemDatetime");
		var user = JSON.parse(localStorage.getItem("ngStorage-authInfo"));
		vm.clientId = user.UserId;
		vm.order = JSON.parse(localStorage.getItem("OrderSummary"));
		vm.Total = 0;

		$scope.getData = function (itemModel, day, meal) {

			var differntMeal = $filter('filter')(vm.itemList, x => (x.dayNumber == day && x.mealNumberPerDay != meal) || (x.dayNumber != day));
			vm.itemList = [];
			vm.itemList = angular.copy(differntMeal);

			itemModel.forEach(element => {
				element.dayNumber = day;
				element.mealNumberPerDay = meal;
				vm.itemList.push(element);
			});
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
			vm.ProgramTotalPrice = vm.totalPrice - (vm.totalPrice * (vm.ProgramDiscount / 100));
			vm.ProgramTotalPriceBefore = vm.totalPrice;


		}

		vm.AddNewProgram = function () {
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
					debugger;
					localStorage.setItem('OrderSummary', JSON.stringify(data));
					$state.go('Summary');
				},
				function (data, status) {
				}
			);
		}


		vm.addItemToList = function (model) {
			debugger;
			var modelList = [];
			modelList = model;

			modelList.forEach(element => {
				vm.carbs = (element.carbs == null) ? 0 : $scope.sum(model, 'carbs');
				vm.calories = (element.calories == null) ? 0 : $scope.sum(model, 'calories');
				vm.protein = (element.protein == null) ? 0 : $scope.sum(model, 'protein');
				vm.fat = (element.fat == null) ? 0 : $scope.sum(model, 'fat');

				$scope.selectedItemList = model;
			});
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
				});
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
		}
		function GetBranchDelivery() {
			var k = BranchResource.getBranch({ branchId: vm.selectedBranchId }).$promise.then(function (results) {
				vm.DeliveryFees = results.deliveryPrice;

			},
				function (data, status) {
					ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
				});
		}

		vm.orderType = {
			type: 'delivery'
		};
		vm.addresses = {
			address: 0
		};
		vm.changeOrderType = function () {
			if (vm.orderType.type == 'delivery' || vm.orderType.type == 'true') {
				vm.orderType.type = 'pickup'

			} else {
				vm.orderType.type = 'delivery'

			}


		}
		if (vm.orderType.type == 'delivery') {
			var k = UserAddressesResource.getUserAddresses({ userId: vm.clientId }).$promise.then(function (results) {
				vm.userAddresses = results;

			},
				function (data, status) {
					ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
				});
		}
		vm.addressInfo = function (address) {
			vm.addressDetails = address;
			vm.selectedBranchId = vm.addressDetails.branchId;
			GetBranchDelivery();
			debugger;
			vm.Total = vm.ProgramTotalPrice + vm.DeliveryFees;
		}
	}

}());
(function () {
  angular
    .module('home')
    .factory('CustomResource', ['$resource', 'appCONSTANTS', CustomResource]) 
    .factory('GetItemsResource', ['$resource', 'appCONSTANTS', GetItemsResource])
    .factory('UserAddressesResource', ['$resource', 'appCONSTANTS', UserAddressesResource])
    .factory('CountryResource', ['$resource', 'appCONSTANTS', CountryResource])
    .factory('RegionResource', ['$resource', 'appCONSTANTS', RegionResource])
    .factory('CityResource', ['$resource', 'appCONSTANTS', CityResource])
    .factory('AreaResource', ['$resource', 'appCONSTANTS', AreaResource])
    .factory('BranchResource', ['$resource', 'appCONSTANTS', BranchResource]) 
    ;

  function CustomResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Program/', {}, {
      create: { method: 'POST', useToken: true }
    })
  }
  function CustomsResourceItems($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Categories/:CategoryId/GetAllActiveItems', {}, {
      getAllItems: { method: 'GET', useToken: true, params: { lang: '@lang' } }
    })
  }
  function CustomsResourceCategories($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Category/GetAllCategs', {}, {
      getAllCategories: { method: 'GET', useToken: true, params: { lang: '@lang' }, isArray: true }
    })
  }


  function GetItemsResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Items/GetAllItems', {}, {
      getAllItemsCategorized: { method: 'GET', useToken: true, params: { lang: '@lang' }, isArray: true }
    })
  }

  function UserAddressesResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Orders', {}, { 
      getUserAddresses: { method: 'GET', url: appCONSTANTS.API_URL + 'Address/GetUserAddresses/:userId', useToken: true, isArray:true },             
    })
  }
  function CountryResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Countries/', {}, {
      getAllCountries: { method: 'GET', url: appCONSTANTS.API_URL + 'Countries/GetAllCountries', useToken: true, params: { lang: '@lang' } },

    })
  }
  function RegionResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Regions/', {}, {
      getAllRegions: { method: 'GET', url: appCONSTANTS.API_URL + 'Countries/:countryId/Regions', useToken: true, params: { lang: '@lang' } },
    })
  }
  function CityResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Cities/', {}, {
      getAllCities: { method: 'GET', url: appCONSTANTS.API_URL + 'Regions/:regionId/Cities', useToken: true, params: { lang: '@lang' } },
    })
  }
  function AreaResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Areas/', {}, {
      getAllAreas: { method: 'GET', url: appCONSTANTS.API_URL + 'Cities/:cityId/Areas/GetAllAreas', useToken: true, params: { lang: '@lang' } },
    })
  }
  function BranchResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Branchs/', {}, { 
        getBranch: { method: 'GET', url: appCONSTANTS.API_URL + 'Branchs/GetBranchById/:BranchId', useToken: true }
    })
} 
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('mealController', ['$scope', '$stateParams', '$translate', 'appCONSTANTS', 'mealsPrepService'
            , mealController])

    function mealController($scope, $stateParams, $translate, appCONSTANTS, mealsPrepService) {

        $scope.mealsPrepService = mealsPrepService.results;

        $scope.style = function () {
            return {
                'background': 'url(https://fithouseksa.com/wp-content/uploads/2018/07/fat-running.png) no-repeat',
                'background-attachment': 'fixed',
                'background-size': 'cover',
                'width': '100%',
                'width': '100%'
            };
        }

    }

}
    ());
(function() {
    angular
      .module('home')
      .factory('MealResource', ['$resource', 'appCONSTANTS', MealResource])
      .factory('GetMealsResource', ['$resource', 'appCONSTANTS', GetMealsResource])
      ;

      function MealResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Meals/:mealId', {}, {
        create: { method: 'POST', useToken: true },
        getMeal: { method: 'GET', useToken: true },
        deleteMeal: { method: 'DELETE', useToken: true },
        update: { method: 'PUT', useToken: true }
      })
    }
    function GetMealsResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Meals/GetAllMeals', {}, {
          getAllMeals: { method: 'GET', useToken: true, params:{lang:'@lang'} },
        })
    }

}());
  (function () {
    'use strict';

    angular
        .module('home')
        .controller('mealDetailsController', ['$scope', '$stateParams', '$translate', 'appCONSTANTS'
            , '$filter', 'mealPrepService', 'itemsssPrepService', 'OrderResource'
            , 'RegionResource', 'CityResource', 'AreaResource', 'CountriesPrepService', mealDetailsController])

    function mealDetailsController($scope, $stateParams, $translate, appCONSTANTS
        , $filter, mealPrepService
        , itemsssPrepService, OrderResource, RegionResource, CityResource, AreaResource
        , CountriesPrepService) {

        $scope.mealPrepService = mealPrepService;
        $scope.itemsssPrepService = itemsssPrepService;
        $scope.clientId = localStorage.getItem('ClientId');

        $scope.counties = [];
        $scope.fats = 0;
        $scope.carbs = 0;
        $scope.protein = 0;
        $scope.calories = 0;

        for (var i = 0; i < $scope.mealPrepService.mealDetails.length; i++) {
            var differntItem = $scope.itemsssPrepService.filter(x => (x.itemId == $scope.mealPrepService.mealDetails[i].itemId));

            $scope.fats += differntItem[0].fat;
            $scope.carbs += differntItem[0].carbs;
            $scope.protein += differntItem[0].protein;
            $scope.calories += differntItem[0].calories;
        }

        $scope.style = function () {
            return {
                'background': 'url(https://fithouseksa.com/wp-content/uploads/2018/07/fat-running.png) no-repeat',
                'background-attachment': 'fixed',
                'background-size': 'cover',
                'width': '100%',
                'width': '100%'
            };
        }

        $scope.orderType = {
            type: 'delivery'
        };
        $scope.addresses = {
            address: 0
        };

        $scope.addressValidation = false;
        $scope.addressInfo = function (address) {
            $scope.addressDetails = address;
            $scope.addressValidation = true;
        }

        $scope.dateIsValid = false;
        $scope.dateChange = function () {
            if ($('#startdate').data('date') == null || $('#startdate').data('date') == "") {
                $scope.dateIsValid = false;
            } else if (!$scope.orderProgramForm.isInValid) {
                $scope.dateIsValid = true;
            }
        }

        if ($scope.orderType.type == 'delivery') {
            var k = OrderResource.getUserAddresses({ userId: $scope.clientId }).$promise.then(function (results) {
                $scope.userAddresses = results;

            },
                function (data, status) {
                });
        }


        $scope.counties.push({ countryId: 0, titleDictionary: { "en": "Select Country", "ar": "اختار بلد" } });
        $scope.selectedCountryId = 0;
        $scope.counties = $scope.counties.concat(CountriesPrepService.results)

        $scope.resetDLL = function () {
            $scope.counties = [];
            $scope.counties.push({ countryId: 0, titleDictionary: { "en": "Select Country", "ar": "اختار بلد" } });
            $scope.selectedCountryId = 0;
            $scope.counties = $scope.counties.concat(CountriesPrepService.results)
            $scope.regions = [];
            $scope.cities = [];
            $scope.area = [];
            $scope.categoryList = [];
        }

        $scope.departmentChange = function () {
            $scope.department.splice(0, 1);
            $scope.categoryList = [];
            $scope.categoryList.push({ categoryId: 0, titleDictionary: { "en": "Select Category", "ar": "اختار الفئة" } });
            $scope.selectedCategoryId = 0;
            $scope.categoryList = $scope.categoryList.concat(($filter('filter')($scope.department, { departmentId: $scope.selectedDepartmentId }))[0].categories);
        }

        $scope.categoryChange = function () {
            for (var i = $scope.categoryList.length - 1; i >= 0; i--) {
                if ($scope.categoryList[i].categoryId == 0) {
                    $scope.categoryList.splice(i, 1);
                }
            }
        }

        $scope.countryChange = function () {
            for (var i = $scope.counties.length - 1; i >= 0; i--) {
                if ($scope.counties[i].countryId == 0) {
                    $scope.counties.splice(i, 1);
                }
            }
            $scope.regions = [];
            $scope.cities = [];
            $scope.area = [];
            $scope.regions.push({ regionId: 0, titleDictionary: { "en": "Select Region", "ar": "اختار اقليم" } });
            RegionResource.getAllRegions({ countryId: $scope.selectedCountryId, pageSize: 0 }).$promise.then(function (results) {
                $scope.selectedRegionId = 0;
                $scope.regions = $scope.regions.concat(results.results);
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }

        $scope.regionChange = function () {
            if ($scope.selectedRegionId != undefined) {
                for (var i = $scope.regions.length - 1; i >= 0; i--) {
                    if ($scope.regions[i].regionId == 0) {
                        $scope.regions.splice(i, 1);
                    }
                }
                $scope.cities = [];
                $scope.area = [];
                $scope.cities.push({ cityId: 0, titleDictionary: { "en": "Select City", "ar": "اختار مدينة" } });
                CityResource.getAllCities({ regionId: $scope.selectedRegionId, pageSize: 0 }).$promise.then(function (results) {
                    $scope.selectedCityId = 0;
                    $scope.cities = $scope.cities.concat(results.results);
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
        $scope.cityChange = function () {
            if ($scope.selectedCityId != undefined) {
                for (var i = $scope.cities.length - 1; i >= 0; i--) {
                    if ($scope.cities[i].cityId == 0) {
                        $scope.cities.splice(i, 1);
                    }
                }
                $scope.area = [];
                $scope.area.push({ areaId: 0, titleDictionary: { "en": "Select Area", "ar": "اختار منطقه" } });
                AreaResource.getAllAreas({ cityId: $scope.selectedCityId, pageSize: 0 }).$promise.then(function (results) {
                    $scope.selectedAreaId = 0;
                    $scope.area = $scope.area.concat(results.results);
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
        $scope.areaChange = function () {
            if ($scope.selectedAreaId != undefined && $scope.selectedAreaId > 0) {
                for (var i = $scope.area.length - 1; i >= 0; i--) {
                    if ($scope.area[i].areaId == 0) {
                        $scope.area.splice(i, 1);
                    }
                }
                $scope.branchList = [];
                $scope.selectedBranchId = [0];
                $scope.branchList = $scope.branchList.concat(($filter('filter')($scope.area, { areaId: $scope.selectedAreaId }))[0].branches);
            }
        }
        $scope.branchChange = function () {
            for (var i = $scope.branchList.length - 1; i >= 0; i--) {
                if ($scope.branchList[i].branchId == 0) {
                    $scope.branchList.splice(i, 1);
                }
            }
        }

        $scope.Order = function () {

            var order = new OrderResource();

            order.meal = $scope.mealPrepService;
            order.isByAdmin = true;
            order.branchId = $scope.selectedBranchId;
            order.userId = $scope.clientId;
            order.day = $('#startdate').val();
            order.type = "Meal";

            order.$createOrder().then(
                function (data, status) {


                    $state.go('meals');

                },
                function (data, status) {

                }
            );
        }


    }

}
    ());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('programController', ['$scope', '$stateParams', '$translate', 'appCONSTANTS', 'programPrepService'
            , programController])

    function programController($scope, $stateParams, $translate, appCONSTANTS, programPrepService) {

        $scope.programPrepService = programPrepService.results;

        $scope.style = function () {
            return {
                'background': 'url(https://fithouseksa.com/wp-content/uploads/2018/07/fat-running.png) no-repeat',
                'background-attachment': 'fixed',
                'background-size': 'cover',
                'width': '100%',
                'width': '100%'
            };
        }

    }

}
    ());
(function () {
    angular
        .module('home')
        .factory('GetProgramDetailResource', ['$resource', 'appCONSTANTS', GetProgramDetailResource])
        .factory('GetItemsssResource', ['$resource', 'appCONSTANTS', GetItemsssResource])
        .factory('GetProgramByIdResource', ['$resource', 'appCONSTANTS', GetProgramByIdResource])
        .factory('OrderResource', ['$resource', 'appCONSTANTS', OrderResource])
        .factory('RegionResource', ['$resource', 'appCONSTANTS', RegionResource])
        .factory('CityResource', ['$resource', 'appCONSTANTS', CityResource])
        .factory('AreaResource', ['$resource', 'appCONSTANTS', AreaResource])
        .factory('CountryResource', ['$resource', 'appCONSTANTS', CountryResource])
        ;

    function OrderResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Orders', {}, {
            createOrder: { method: 'POST', url: appCONSTANTS.API_URL + 'Orders/CreateOrder', useToken: true },
            getUserAddresses: { method: 'GET', url: appCONSTANTS.API_URL + 'Address/GetUserAddresses/:userId', useToken: true, isArray: true },

        })
    }

    function CountryResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Countries/', {}, {
            getAllCountries: { method: 'GET', url: appCONSTANTS.API_URL + 'Countries/GetAllCountries', useToken: true, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Countries/EditCountry', useToken: true },
            getCountry: { method: 'GET', url: appCONSTANTS.API_URL + 'Countries/:countryId', useToken: true }

        })
    }

    function AreaResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Areas/', {}, {
            getAllAreas: { method: 'GET', url: appCONSTANTS.API_URL + 'Cities/:cityId/Areas/GetAllAreas', useToken: true, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Areas/EditArea', useToken: true },
            getArea: { method: 'GET', url: appCONSTANTS.API_URL + 'Areas/GetAreaById/:AreaId', useToken: true },
            getAllAreasForUser: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/:userId/Areas', useToken: true, isArray: true }
        })
    }

    function RegionResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Regions/', {}, {
            getAllRegions: { method: 'GET', url: appCONSTANTS.API_URL + 'Countries/:countryId/Regions', useToken: true, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Regions/EditRegion', useToken: true },
            getRegion: { method: 'GET', url: appCONSTANTS.API_URL + 'Regions/:regionId', useToken: true },
            getAllRegionsForUser: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/:userId/Regions', useToken: true, isArray: true }

        })
    }

    function CityResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Cities/', {}, {
            getAllCities: { method: 'GET', url: appCONSTANTS.API_URL + 'Regions/:regionId/Cities', useToken: true, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Cities/EditCity', useToken: true },
            getCity: { method: 'GET', url: appCONSTANTS.API_URL + 'Cities/:cityId', useToken: true },
            getAllCitiesForUser: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/:userId/Cities', useToken: true, isArray: true }
        })
    }

    function GetProgramDetailResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Program', {}, {
            getProgramDetail: { method: 'GET', url: appCONSTANTS.API_URL + 'Program/GetAllProgramItems/:programId', useToken: true }
        })
    }

    function GetProgramByIdResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Program', {}, {
            getProgram: { method: 'GET', url: appCONSTANTS.API_URL + 'Program/GetProgramById/:ProgramId', useToken: true },

        })
    }

    function GetItemsssResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Items/GetAllItems', {}, {
            getAllItemsss: { method: 'GET', useToken: true, params: { lang: '@lang' }, isArray: true },
        })
    }

}());

(function () {
    'use strict';

    angular
        .module('home')
        .controller('programDetailsController', ['$scope', '$stateParams', '$translate', 'appCONSTANTS'
            , '$filter', 'progDetailsPrepService', 'itemsssPrepService', 'OrderResource'
            , 'RegionResource', 'CityResource', 'AreaResource', 'CountriesPrepService', programDetailsController])

    function programDetailsController($scope, $stateParams, $translate, appCONSTANTS
        , $filter, progDetailsPrepService
        , itemsssPrepService, OrderResource, RegionResource, CityResource, AreaResource
        , CountriesPrepService) {

        $scope.progDetailsPrepService = progDetailsPrepService;
        $scope.itemsssPrepService = itemsssPrepService;
        $scope.clientId = localStorage.getItem('ClientId');

        $scope.counties = [];

        $scope.fats = 0;
        $scope.carbs = 0;
        $scope.protein = 0;
        $scope.calories = 0;

        for (var i = 0; i < $scope.progDetailsPrepService.items.length; i++) {
            $scope.fats += $scope.progDetailsPrepService.items[i].fat;
            $scope.carbs += $scope.progDetailsPrepService.items[i].carbs;
            $scope.protein += $scope.progDetailsPrepService.items[i].protein;
            $scope.calories += $scope.progDetailsPrepService.items[i].calories;
        }

        $scope.style = function () {
            return {
                'background': 'url(https://fithouseksa.com/wp-content/uploads/2018/07/fat-running.png) no-repeat',
                'background-attachment': 'fixed',
                'background-size': 'cover',
                'width': '100%',
                'width': '100%'
            };
        }

        $scope.orderType = {
            type: 'delivery'
        };
        $scope.addresses = {
            address: 0
        };

        $scope.addressValidation = false;
        $scope.addressInfo = function (address) {
            $scope.addressDetails = address;
            $scope.addressValidation = true;
        }

        $scope.dateIsValid = false;
        $scope.dateChange = function () {
            if ($('#startdate').data('date') == null || $('#startdate').data('date') == "") {
                $scope.dateIsValid = false;
            } else if (!$scope.orderProgramForm.isInValid) {
                $scope.dateIsValid = true;
            }
        }

        if ($scope.orderType.type == 'delivery') {
            var k = OrderResource.getUserAddresses({ userId: $scope.clientId }).$promise.then(function (results) {
                $scope.userAddresses = results;

            },
                function (data, status) {
                });
        }


        $scope.counties.push({ countryId: 0, titleDictionary: { "en": "Select Country", "ar": "اختار بلد" } });
        $scope.selectedCountryId = 0;
        $scope.counties = $scope.counties.concat(CountriesPrepService.results)

        $scope.resetDLL = function () {
            $scope.counties = [];
            $scope.counties.push({ countryId: 0, titleDictionary: { "en": "Select Country", "ar": "اختار بلد" } });
            $scope.selectedCountryId = 0;
            $scope.counties = $scope.counties.concat(CountriesPrepService.results)
            $scope.regions = [];
            $scope.cities = [];
            $scope.area = [];
            $scope.categoryList = [];
        }

        $scope.departmentChange = function () {
            $scope.department.splice(0, 1);
            $scope.categoryList = [];
            $scope.categoryList.push({ categoryId: 0, titleDictionary: { "en": "Select Category", "ar": "اختار الفئة" } });
            $scope.selectedCategoryId = 0;
            $scope.categoryList = $scope.categoryList.concat(($filter('filter')($scope.department, { departmentId: $scope.selectedDepartmentId }))[0].categories);
        }

        $scope.categoryChange = function () {
            for (var i = $scope.categoryList.length - 1; i >= 0; i--) {
                if ($scope.categoryList[i].categoryId == 0) {
                    $scope.categoryList.splice(i, 1);
                }
            }
        }

        $scope.countryChange = function () {
            for (var i = $scope.counties.length - 1; i >= 0; i--) {
                if ($scope.counties[i].countryId == 0) {
                    $scope.counties.splice(i, 1);
                }
            }
            $scope.regions = [];
            $scope.cities = [];
            $scope.area = [];
            $scope.regions.push({ regionId: 0, titleDictionary: { "en": "Select Region", "ar": "اختار اقليم" } });
            RegionResource.getAllRegions({ countryId: $scope.selectedCountryId, pageSize: 0 }).$promise.then(function (results) {
                $scope.selectedRegionId = 0;
                $scope.regions = $scope.regions.concat(results.results);
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }

        $scope.regionChange = function () {
            if ($scope.selectedRegionId != undefined) {
                for (var i = $scope.regions.length - 1; i >= 0; i--) {
                    if ($scope.regions[i].regionId == 0) {
                        $scope.regions.splice(i, 1);
                    }
                }
                $scope.cities = [];
                $scope.area = [];
                $scope.cities.push({ cityId: 0, titleDictionary: { "en": "Select City", "ar": "اختار مدينة" } });
                CityResource.getAllCities({ regionId: $scope.selectedRegionId, pageSize: 0 }).$promise.then(function (results) {
                    $scope.selectedCityId = 0;
                    $scope.cities = $scope.cities.concat(results.results);
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
        $scope.cityChange = function () {
            if ($scope.selectedCityId != undefined) {
                for (var i = $scope.cities.length - 1; i >= 0; i--) {
                    if ($scope.cities[i].cityId == 0) {
                        $scope.cities.splice(i, 1);
                    }
                }
                $scope.area = [];
                $scope.area.push({ areaId: 0, titleDictionary: { "en": "Select Area", "ar": "اختار منطقه" } });
                AreaResource.getAllAreas({ cityId: $scope.selectedCityId, pageSize: 0 }).$promise.then(function (results) {
                    $scope.selectedAreaId = 0;
                    $scope.area = $scope.area.concat(results.results);
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
        $scope.areaChange = function () {
            if ($scope.selectedAreaId != undefined && $scope.selectedAreaId > 0) {
                for (var i = $scope.area.length - 1; i >= 0; i--) {
                    if ($scope.area[i].areaId == 0) {
                        $scope.area.splice(i, 1);
                    }
                }
                $scope.branchList = [];
                $scope.selectedBranchId = [0];
                $scope.branchList = $scope.branchList.concat(($filter('filter')($scope.area, { areaId: $scope.selectedAreaId }))[0].branches);
            }
        }
        $scope.branchChange = function () {
            for (var i = $scope.branchList.length - 1; i >= 0; i--) {
                if ($scope.branchList[i].branchId == 0) {
                    $scope.branchList.splice(i, 1);
                }
            }
        }

        $scope.Order = function () {

            var order = new OrderResource();

            order.program = $scope.progDetailsPrepService;
            order.isByAdmin = false;
            order.userId = $scope.clientId;
            order.day = $('#startdate').val();

            if ($scope.orderType.type == "delivery") {
                order.isDelivery = true;
                order.addressId = $scope.addresses.address;
                order.branchId = $scope.addressDetails.branchId;
            }
            else {
                order.isDelivery = false;
                order.branchId = $scope.selectedBranchId;
            }

            order.$createOrder().then(
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");

                    $state.go('callCenter');

                },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }


    }

}
    ());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('editUserController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate', '$state', 'UserResource',
            'RoleResource', 'RolePrepService', '$localStorage', 'authorizationService', 'appCONSTANTS', 'EditUserPrepService',
            'ToastService', 'CountriesPrepService',
            'RegionResource', 'CityResource', 'AreaResource', editUserController]);


    function editUserController($rootScope, blockUI, $scope, $filter, $translate, $state, UserResource,
        RoleResource, RolePrepService, $localStorage, authorizationService, appCONSTANTS, EditUserPrepService, ToastService,
        CountriesPrepService, RegionResource, CityResource, AreaResource) {

        blockUI.start("Loading...");

        $scope.isPaneShown = true;
        $scope.$emit('LOAD')
        var vm = this;
        vm.close = function () {
            $state.go('users');
        }

        vm.show = true;
        $scope.roleList = RolePrepService.results;
        vm.selectedUserRoles = [];
        $scope.userObj = EditUserPrepService;
        $scope.userObj.confirmPassword = $scope.userObj.password;
        console.log($scope.userObj);
        init();
        var i;
        for (i = 0; i < $scope.userObj.userRoles.length; i++) {
            var indexRate = $scope.roleList.indexOf($filter('filter')($scope.roleList, { 'roleId': $scope.userObj.userRoles[i].roleId }, true)[0]);
            vm.selectedUserRoles.push($scope.roleList[indexRate]);

        }


        $scope.Updateclient = function () {
            blockUI.start("Loading...");
            debugger;
            vm.show = false;
            var newClient = new UserResource();
            newClient.userId = $scope.userObj.userId;
            newClient.firstName = $scope.userObj.firstName;
            newClient.lastName = $scope.userObj.lastName;
            newClient.phone = $scope.userObj.phone;
            newClient.email = $scope.userObj.email;
            newClient.password = $scope.userObj.password;
            newClient.isActive = true;
            newClient.userRoles = vm.selectedUserRoles;
            newClient.branchId = vm.selectedBranchId;
            newClient.$update().then(
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    vm.show = true;
                    localStorage.setItem('data', JSON.stringify(data.userId));
                    $state.go('users');

                },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
        blockUI.stop();


        function init() {
            vm.counties = [];
            vm.counties.push(vm.selectedCountry);
            vm.counties = vm.counties.concat(CountriesPrepService.results)
            vm.regions = [];
            vm.regions.push(vm.selectedRegion);
            vm.cities = [];
            vm.cities.push(vm.selectedCity);
            vm.areaList = [];
            vm.areaList.push(vm.selectedArea);
            vm.branchList = [];
            vm.branchList.push(vm.selectedBranch);
            debugger;


        }
        function funcCountryChange() {
            vm.selectedRegion = { regionId: 0, titleDictionary: { "en-us": "All Regions", "ar-eg": "كل الأقاليم" } };
            vm.selectedCity = { cityId: 0, titleDictionary: { "en-us": "All Cities", "ar-eg": "كل المدن" } };
            vm.selectedArea = { areaId: 0, titleDictionary: { "en-us": "All Areas", "ar-eg": "كل المناطق" } };
            vm.regions = [];
            vm.cities = [vm.selectedCity];
            vm.areaList = [vm.selectedArea];
            vm.regions.push(vm.selectedRegion);

            vm.branchList = [];
            vm.selectedBranch = { branchId: 0, titleDictionary: { "en-us": "All Branches", "ar-eg": "كل الفروع" } };
            vm.branchList.push(vm.selectedBranch);


            RegionResource.getAllRegions({ countryId: $scope.userObj.countryId, pageSize: 0 }).$promise.then(function (results) {

                vm.regions = vm.regions.concat(results.results);

                var indexregion = vm.regions.indexOf($filter('filter')(vm.regions, { 'regionId': $scope.userObj.regionId }, true)[0]);
                vm.selectedRegion = vm.regions[indexregion];
                funcregionChange();
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }


        vm.countryChange = function () {
            funcCountryChange();
        }
        function funcregionChange() {
            if (vm.selectedRegion.regionId != undefined) {
                vm.cities = [];
                vm.areaList = [];
                vm.selectedCity = { cityId: 0, titleDictionary: { "en-us": "All Cities", "ar-eg": "كل المدن" } };
                vm.selectedArea = { areaId: 0, titleDictionary: { "en-us": "All Areas", "ar-eg": "كل المناطق" } };
                vm.cities.push(vm.selectedCity);
                vm.areaList = [vm.selectedArea];

                vm.branchList = [];
                vm.selectedBranch = { branchId: 0, titleDictionary: { "en-us": "All Branches", "ar-eg": "كل الفروع" } };
                vm.branchList.push(vm.selectedBranch);
                CityResource.getAllCities({ regionId: vm.selectedRegion.regionId, pageSize: 0 }).$promise.then(function (results) {

                    vm.cities = vm.cities.concat(results.results);

                    var indexcity = vm.cities.indexOf($filter('filter')(vm.cities, { 'cityId': $scope.userObj.cityId }, true)[0]);
                    vm.selectedCity = vm.cities[indexcity];
                    funcCityChange();
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
        vm.regionChange = function () {
            funcregionChange();
        }

        function funcCityChange() {

            if (vm.selectedCity.cityId != undefined) {
                vm.areaList = [];
                vm.selectedArea = { areaId: 0, titleDictionary: { "en-us": "All Areas", "ar-eg": "كل المناطق" } };
                vm.areaList.push(vm.selectedArea);

                vm.branchList = [];
                vm.selectedBranch = { branchId: 0, titleDictionary: { "en-us": "All Branches", "ar-eg": "كل الفروع" } };
                vm.branchList.push(vm.selectedBranch);
                AreaResource.getAllAreas({ cityId: vm.selectedCity.cityId, pageSize: 0 }).$promise.then(function (results) {
                    vm.areaList = vm.areaList.concat(results.results);

                    var indexarea = vm.areaList.indexOf($filter('filter')(vm.areaList, { 'areaId': $scope.userObj.areaId }, true)[0]);
                    vm.selectedArea = vm.areaList[indexarea];
                    funcAreaChange();

                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
        vm.cityChange = function () {
            funcCityChange();
        }
        function funcAreaChange() {
            vm.branchList = [];
            vm.selectedBranch = { branchId: 0, titleDictionary: { "en-us": "All Branches", "ar-eg": "كل الفروع" } };
            vm.branchList.push(vm.selectedBranch);
            if (vm.selectedArea.areaId > 0)
                vm.branchList = vm.branchList.concat(vm.selectedArea.branches);


            var indexbranch = vm.branchList.indexOf($filter('filter')(vm.branchList, { 'branchId': $scope.userObj.branchId }, true)[0]);
            vm.selectedBranch = vm.branchList[indexbranch];

        }
        vm.areaChange = function () {
            funcAreaChange();
        }
    }

})();(function () {
    'use strict';

    angular
        .module('home')
        .controller('userController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate', '$state', 'UserResource',
            '$localStorage', 'authorizationService', 'appCONSTANTS',
            'ToastService', 'CountriesPrepService', 'RegionResource', 'CityResource', 'AreaResource', userController]);

    function userController($rootScope, blockUI, $scope, $filter, $translate, $state, UserResource, $localStorage, authorizationService, appCONSTANTS, ToastService, CountriesPrepService,
        RegionResource, CityResource, AreaResource) {

                   var vm = this;
        blockUI.start("Loading...");
        vm.close = function () {
            $state.go('users');
        } 
        vm.counties = [];
        vm.counties.push({ countryId: 0, titleDictionary: { "en": "Select Country", "ar": "اختار بلد" } });
        vm.selectedCountryId = 0;
        vm.counties = vm.counties.concat(CountriesPrepService.results)

         $scope.phoneNumbr = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;
        $scope.userObj = "";
        $scope.selectedType = ""; 
        vm.resetDLL = function () { 
            vm.counties = [];
            vm.counties.push({ countryId: 0, titleDictionary: { "en": "Select Country", "ar": "اختار بلد" } });
            vm.selectedCountryId = 0;
            vm.counties = vm.counties.concat(CountriesPrepService.results)
            vm.regions = [];
            vm.cities = [];
            vm.area = [];
            vm.categoryList = [];
        }
        vm.departmentChange = function () {
            vm.department.splice(0, 1);
            vm.categoryList = [];
            vm.categoryList.push({ categoryId: 0, titleDictionary: { "en": "Select Category", "ar": "اختار الفئة" } });
            vm.selectedCategoryId = 0;
            vm.categoryList = vm.categoryList.concat(($filter('filter')(vm.department, { departmentId: vm.selectedDepartmentId }))[0].categories);
        }
        vm.categoryChange = function () {
            for (var i = vm.categoryList.length - 1; i >= 0; i--) {
                if (vm.categoryList[i].categoryId == 0) {
                    vm.categoryList.splice(i, 1);
                }
            }
        }

        vm.countryChange = function () {
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
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
            blockUI.stop();
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
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
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
                    vm.selectedAreaId = 0;
                    vm.area = vm.area.concat(results.results);
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
        vm.areaChange = function () {
            if (vm.selectedAreaId != undefined && vm.selectedAreaId > 0) {
                for (var i = vm.area.length - 1; i >= 0; i--) {
                    if (vm.area[i].areaId == 0) {
                        vm.area.splice(i, 1);
                    }
                }
                vm.branchList = [];
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
        }
        function refreshUsers() {
            blockUI.start("Loading...");

            var k = UserResource.getAllUsers({ page: vm.currentPage }).$promise.then(function (results) {
                vm.getPageData = results;
                $scope.userList = vm.getPageData.results;
                console.log($scope.userList);
                blockUI.stop();

            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }


        $scope.AddNewclient = function () {
            blockUI.start("Loading...");

            var newClient = new UserResource();
            newClient.FirstName = $scope.FirstName;
            newClient.LastName = $scope.LastName;
            newClient.Email = $scope.Email;
            newClient.Phone = $scope.Phone;
            newClient.Password = $scope.Password;
            newClient.IsActive = true;
            newClient.IsAdmin = true;
            newClient.UserRoles = vm.selectedUserRoles;
            newClient.branchId = vm.selectedBranchId;
            newClient.$create().then(
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('ClientAddSuccess'), "success");

                    localStorage.setItem('data', JSON.stringify(data.userId));
                    $state.go('users');

                },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
        vm.currentPage = 1;
        $scope.changePage = function (page) {
            vm.currentPage = page;
            refreshUsers();
        }

        blockUI.stop();



        function change(user, isDeleted) {
            debugger;
            var updateObj = new UserResource();
            updateObj.userId = user.userId;
            if (!isDeleted)
                updateObj.isActive = (user.isActive == true ? false : true);
            updateObj.isDeleted = user.isDeleted;

            updateObj.$update().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    user.isActive = updateObj.isActive;

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );

        }
        vm.UpdateUser = function (user) {
            change(user, false);
        }



    }

}());(function () {
    angular
        .module('home')
        .factory('UserResource', ['$resource', 'appCONSTANTS', UserResource])

    function UserResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Users/', {}, {
            getAllUsers: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/GetAllUsers', useToken: true, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Users/EditRegisterUser', useToken: true },
            getUser: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/GetUserById/:UserId', useToken: true }, 
            validate: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/ValidateByPhone/:Phone', useToken: true }, 
            getUserDepartments: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/Departments', useToken: true },
            getUserArea: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/Area', useToken: true },
        })
    }

}());
(function () {
    'use strict';

    angular
        .module('home')
        .filter('range', function () {
            return function (input, total) {
                total = parseInt(total);

                for (var i = 0; i < total; i++) {
                    input.push(i);
                }

                return input;
            }
        })
        .controller('homePageController', ['$scope', '$state', '$stateParams', '$translate', 'appCONSTANTS', 'mealsPrepService', 'programPrepService', 'settingsPrepService'
            , 'daysPrepService', homePageController])

    function homePageController($scope, $state, $stateParams, $translate, appCONSTANTS, mealsPrepService, programPrepService
        , settingsPrepService, daysPrepService) {

        $scope.mealsPrepService = mealsPrepService.results;
        $scope.programPrepService = programPrepService.results;
        $scope.settingsPrepService = settingsPrepService;
        $scope.dayList = daysPrepService;
		$scope.SelectedDays = [];

        $scope.isSnack = false;
        $scope.isBreakFast = false;

        $scope.submitCustomise = function () {
            localStorage.setItem('mealPerDay', $scope.mealPerDay);
            localStorage.setItem('programDaysCount', $scope.programDaysCount);
            localStorage.setItem('dayList', JSON.stringify($scope.SelectedDays));
            localStorage.setItem('isBreakFast', $scope.isBreakFast);
            localStorage.setItem('isSnack', $scope.isSnack);
            localStorage.setItem('itemDatetime', $scope.itemDatetime);
            localStorage.setItem('ProgramDiscount', 0);
            $state.go('Custom');
        }

        $scope.bookMeal = function (meal) {
        }
        $scope.bookProgram = function (program) {
        }

        $scope.style = function () {
            return {
                'background': 'url(https://fithouseksa.com/wp-content/uploads/2018/07/fat-running.png) no-repeat',
                'background-attachment': 'fixed',
                'background-size': 'cover',
                'width': '100%',
                'width': '100%'
            };
        }

    }

}
    ());
(function () {
  angular
    .module('home')
    .factory('AboutUsResource', ['$resource', 'appCONSTANTS', AboutUsResource])
    .factory('ContactUsResource', ['$resource', 'appCONSTANTS', ContactUsResource])
    .factory('HomeResource', ['$resource', 'appCONSTANTS', HomeResource])
    .factory('LeadershipResource', ['$resource', 'appCONSTANTS', LeadershipResource])
    .factory('GetMealsResource', ['$resource', 'appCONSTANTS', GetMealsResource])
    .factory('GetSettingsResource', ['$resource', 'appCONSTANTS', GetSettingsResource])
    .factory('GetProgramResource', ['$resource', 'appCONSTANTS', GetProgramResource])
    .factory('GetDaysResource', ['$resource', 'appCONSTANTS', GetDaysResource])

    ;



  function GetDaysResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Day/GetAllDays', {}, {
      gatAllDays: { method: 'GET', useToken: true, isArray: true }
    })
  }

  function GetSettingsResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Setting/GetSetting', {}, {
      getAllSettings: { method: 'GET', useToken: true }
    })
  }

  function AboutUsResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'AboutUs', {}, {
      getAboutUs: { method: 'GET', useToken: true }
    })
  }

  function GetProgramResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Program', {}, {
      gatAllPrograms: { method: 'GET', useToken: true }
    })
  }


  function ContactUsResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'ContactUs', {}, {
      getContactUs: { method: 'GET', useToken: true }
    })
  }

  function HomeResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Home', {}, {
      getHome: { method: 'GET', useToken: true }
    })
  }

  function LeadershipResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'OurTeams', {}, {
      getLeadership: { method: 'GET', useToken: true, isArray: true }
    })
  }

  function GetMealsResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Meals/GetAllMeals', {}, {
      getAllMeals: { method: 'GET', useToken: true, params: { lang: '@lang' } },
    })
  }


}());

