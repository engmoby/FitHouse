(function () {
    'use strict';

    angular
        .module('home')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: './app/GlobalAdmin/user/templates/home.html',
                    controller: 'homeController',
                    'controllerAs': 'homeCtrl',
                    resolve: {
                        mealsPrepService: mealsPrepService,
                        programPrepService: programPrepService,
                        settingsPrepService: settingsPrepService,
                        daysPrepService: daysPrepService
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
}());
(function() {
    'use strict';

      angular
      .module('home')
      .config(config)
      .run(runBlock);

      config.$inject = ['ngProgressLiteProvider'];
    runBlock.$inject = ['$rootScope', 'ngProgressLite' ];

      function config(ngProgressLiteProvider) {
      ngProgressLiteProvider.settings.speed = 1000;

      }

      function runBlock($rootScope, ngProgressLite ) {

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
          startProgress();
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
		.controller('CustomController', ['$scope', '$filter', '$state', '$translate', 'RegionResource', 'CityResource',
		 'AreaResource', 'CountriesPrepService', 'CustomsResourceItems', 'CustomResource', 'itemsPrepService', 'ToastService', CustomController])

	function CustomController($scope, $filter, $state, $translate, RegionResource, CityResource, AreaResource, CountriesPrepService, 
		CustomsResourceItems, CustomResource, itemsPrepService, ToastService) {

		var vm = this;
		vm.ItemCategorized = itemsPrepService;
		vm.itemList = [];
		vm.counties = [];
		vm.daysCount = JSON.parse(localStorage.getItem("programDaysCount"));
		vm.mealsCount = JSON.parse(localStorage.getItem("mealPerDay"));
		vm.IsBreakFast = JSON.parse(localStorage.getItem("IsBreakFast"));
		vm.IsSnack = JSON.parse(localStorage.getItem("IsSnack"));
		vm.startDate = JSON.parse(localStorage.getItem("startDate"));
		var user = JSON.parse(localStorage.getItem("ngStorage-authInfo"));
		vm.clientId = user.UserId;

		vm.gotoStep = function () {
			console.log(vm.itemList);
			localStorage.setItem('Program', JSON.stringify(vm.itemList));
			$state.go('Summary');
		}
		$scope.getData = function (itemModel, day, meal) {
			debugger;
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
			newProgram.price = vm.ProgramTotalPrice;
			newProgram.isOrdering = true;
			newProgram.day = vm.startDate;
			newProgram.isProgram = true;
			newProgram.userId = vm.clientId;
			if (vm.orderType.type == "delivery") {
				newProgram.isDelivery = true;
				newProgram.addressId = 9;
				newProgram.branchId = 1;
			}
			else {
				newProgram.isDelivery = false;
				newProgram.branchId =1;
			}

			newProgram.days = vm.SelectedDays;
			newProgram.$create().then(
				function (data, status) {
					$state.go('Summary');
				},
				function (data, status) {
				}
			);
		}


		vm.addItemToList = function (model) {
			debugger;
			vm.carbs = $scope.sum(model, 'carbs');
			vm.calories = $scope.sum(model, 'calories');
			vm.protein = $scope.sum(model, 'protein');
			vm.fat = $scope.sum(model, 'fat');
			vm.price = $scope.sum(model, 'price');

			$scope.selectedItemList = model;

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
                    vm.selectedAreaId = 0;
                    vm.area = vm.area.concat(results.results);
                },
                    function (data, status) {
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
			console.log( vm.branchList)
        }
        vm.branchChange = function () {
            for (var i = vm.branchList.length - 1; i >= 0; i--) {
                if (vm.branchList[i].branchId == 0) {
                    vm.branchList.splice(i, 1);
                }
            }
		}
		vm.GetBranchDelivery = function () {
            var k = BranchResource.getBranch({ branchId: vm.branchId }).$promise.then(function (results) {
                vm.DeliveryFees = results.deliveryPrice;

            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
	}

}());
(function () {
  angular
    .module('home')
    .factory('CustomResource', ['$resource', 'appCONSTANTS', CustomResource])
    .factory('CustomsResourceCategories', ['$resource', 'appCONSTANTS', CustomsResourceCategories])
    .factory('GetItemsResource', ['$resource', 'appCONSTANTS', GetItemsResource])
    .factory('CustomsResourceItems', ['$resource', 'appCONSTANTS', CustomsResourceItems])
    .factory('CountryResource', ['$resource', 'appCONSTANTS', CountryResource])
    .factory('RegionResource', ['$resource', 'appCONSTANTS', RegionResource])
    .factory('CityResource', ['$resource', 'appCONSTANTS', CityResource])
    .factory('AreaResource', ['$resource', 'appCONSTANTS', AreaResource])
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
        .filter('range', function () {
            return function (input, total) {
                total = parseInt(total);

                for (var i = 0; i < total; i++) {
                    input.push(i);
                }

                return input;
            }
        })
        .controller('homeController', ['$scope', '$stateParams', '$translate', 'appCONSTANTS', 'mealsPrepService', 'programPrepService', 'settingsPrepService'
            , 'daysPrepService', homeController])

    function homeController($scope, $stateParams, $translate, appCONSTANTS, mealsPrepService, programPrepService
        , settingsPrepService, daysPrepService) {

        $scope.mealsPrepService = mealsPrepService.results;
        $scope.programPrepService = programPrepService.results;
        $scope.settingsPrepService = settingsPrepService;
        $scope.dayList = daysPrepService;

        $scope.isSnack = false;
        $scope.isBreakFast = false;

        $scope.submitCustomise = function () {
            localStorage.setItem('mealPerDay', $scope.mealPerDay);
            localStorage.setItem('programDaysCount', $scope.programDaysCount);
            localStorage.setItem('dayList', $scope.SelectedDays);
            localStorage.setItem('isBreakFast', $scope.isBreakFast);
            localStorage.setItem('isSnack', $scope.isSnack);
            localStorage.setItem('itemDatetime', $scope.itemDatetime);
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

