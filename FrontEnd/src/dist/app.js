(function () {
    'use strict';

    angular
        .module('home')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('homePage', {
                    url: '/CustomProgram',
                    templateUrl: './app/GlobalAdmin/user/templates/home.html',
                    controller: 'homePageController',
                    'controllerAs': 'homePageCtrl',
                    resolve: {
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


                .state('profile', {
                    url: '/profile/:userId',
                    templateUrl: './app/GlobalAdmin/register/templates/editUser.html',
                    controller: 'editUserController',
                    'controllerAs': 'editUserCtrl',
                    resolve: {
                        EditUserPrepService: EditUserPrepService,
                        CountriesPrepService: CountriesPrepService,

                    },
                    data: {
                        permissions: {
                            only: ['1'],
                            redirectTo: 'root'
                        }
                    }

                })


                .state('history', {
                    url: '/history',
                    templateUrl: './app/GlobalAdmin/order/templates/Order.html',
                    controller: 'OrderController',
                    'controllerAs': 'orderCtrl',
                    resolve: {
                        ordersPrepService: ordersPrepService

                    },
                    data: {
                        permissions: {
                            only: ['1'],
                            redirectTo: 'root'
                        }
                    }

                })


                .state('orderDetails', {
                    url: '/orderDetails/:id',
                    templateUrl: './app/GlobalAdmin/order/templates/OrderDetails.html',
                    controller: 'orderMealDetailscontroller',
                    'controllerAs': 'orderDetailsCtrl',
                    resolve: {
                        OrderMealPrepService: OrderMealPrepService,
                        itemsssPrepService: itemsssPrepService
                    }
                })


                .state('orderProgramDetails', {
                    url: '/orderpDetails/:programId',
                    templateUrl: './app/GlobalAdmin/order/templates/OrderProgramDetails.html',
                    controller: 'orderProgramDetailscontroller',
                    'controllerAs': 'orderProgramDetailsCtrl',
                    resolve: {
                        OrderprogDetailsPrepService: OrderprogDetailsPrepService,
                        itemsssPrepService: itemsssPrepService
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
                        CountriesPrepService: CountriesPrepService,
                        settingsPrepService: settingsPrepService
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

                .state('summaryProgram', {
                    url: '/summaryProgram',
                    templateUrl: './app/GlobalAdmin/customProgram/templates/summaryProgram.html',
                    controller: 'CustomController',
                    'controllerAs': 'CustomCtrl',
                    resolve: {
                        itemsPrepService: itemsPrepService,
                        CountriesPrepService: CountriesPrepService
                    }
                })


                .state('Address', {
                    url: '/Address/:userId',
                    templateUrl: './app/GlobalAdmin/Address/templates/Address.html',
                    controller: 'AddressController',
                    'controllerAs': 'AddressCtrl',
                    resolve: {
                        AddressPrepService: AddressPrepService
                    },
                    data: {
                        permissions: {
                            only: ['3'],
                            redirectTo: 'root'
                        }
                    }

                })
                .state('newAddress', {
                    url: '/newAddress',
                    templateUrl: './app/GlobalAdmin/Address/templates/new.html',
                    controller: 'createAddressDialogController',
                    'controllerAs': 'newAddressCtrl',
                    resolve: {
                        CountriesPrepService: CountriesPrepService
                    }

                })
                .state('editaddress', {
                    url: '/editaddress/:addressId',
                    templateUrl: './app/GlobalAdmin/Address/templates/edit.html',
                    controller: 'editAddressDialogController',
                    'controllerAs': 'editAddressCtrl',
                    resolve: {
                        AddressByIdPrepService: AddressByIdPrepService,
                        CountriesPrepService: CountriesPrepService
                    },
                    data: {
                        permissions: {
                            only: ['3'],
                            redirectTo: 'root'
                        }
                    }

                })


        });

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

    EditUserPrepService.$inject = ['UserResource', '$stateParams']
    function EditUserPrepService(GetUserResource, $stateParams) {
        return GetUserResource.getUser({ userId: $stateParams.userId }).$promise;
    }


    ordersPrepService.$inject = ['OrdersResource', '$stateParams']
    function ordersPrepService(OrdersResource, $stateParams) {
        return OrdersResource.getAllOrders().$promise;
    }

    OrderMealPrepService.$inject = ['MealResource', '$stateParams']
    function OrderMealPrepService(MealResource, $stateParams) {
        return MealResource.getMeal({ mealId: $stateParams.id }).$promise;
    }

    OrderprogDetailsPrepService.$inject = ['GetProgramDetailResource', '$stateParams']
    function OrderprogDetailsPrepService(GetProgramDetailResource, $stateParams) {
        return GetProgramDetailResource.getProgramDetail({ programId: $stateParams.programId }).$promise;
    }

    AddressPrepService.$inject = ['AddressResource', '$stateParams']
    function AddressPrepService(AddressResource, $stateParams) {
        return AddressResource.getAllAddress({ userId: $stateParams.userId }).$promise;
    }

    AllActivateAddressPrepService.$inject = ['AddressResource']
    function AllActivateAddressPrepService(AddressResource) {
        return AddressResource.getAllActivateAddress({ pageSize: 0 }).$promise;
    }

    AddressByIdPrepService.$inject = ['AddressResource', '$stateParams']
    function AddressByIdPrepService(AddressResource, $stateParams) {
        return AddressResource.getAddress({ addressId: $stateParams.addressId }).$promise;
    }
}());
(function() {
  'use strict';

  angular
    .module('home')
    .config(config)
    .run(runBlock);

  config.$inject = ['ngProgressLiteProvider'];
  runBlock.$inject = ['$rootScope', 'ngProgressLite','$transitions','blockUI','$translate'];

  function config(ngProgressLiteProvider) {
    ngProgressLiteProvider.settings.speed = 1000;

  }

  function runBlock($rootScope, ngProgressLite,$transitions,blockUI,$translate) {

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        startProgress();
    });
    $transitions.onStart({}, function(transition) {
      blockUI.start($translate.instant('loading')); 
    });
    $transitions.onSuccess({}, function(transition) {
      blockUI.stop();
      $(".hide-menu").click()
    });
    $transitions.onError({  }, function(transition) {
      blockUI.stop();
      $(".hide-menu").click();
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
        .controller('AddressController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'AddressResource', 'AddressPrepService', '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', AddressController]);


    function AddressController($rootScope, blockUI, $scope, $filter, $translate,
        $state, AddressResource, AddressPrepService, $localStorage, authorizationService,
        appCONSTANTS, ToastService) {

            blockUI.start($translate.instant('loading'));

        var vm = this;

        $scope.totalCount = AddressPrepService.totalCount;
        $scope.AddressList = AddressPrepService;
        console.log($scope.AddressList);
        blockUI.stop();

        function refreshAddress() {
            blockUI.start($translate.instant('loading'));

            var k = AddressResource.getAllAddress({ page: vm.currentPage }).$promise.then(function (results) {
                $scope.AddressList = results;
                blockUI.stop();

            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }



        vm.currentPage = 1;
        $scope.changePage = function (page) {
            vm.currentPage = page;
            refreshAddress();
        }

    }

})();(function () {
    angular
        .module('home')
        .factory('AddressResource', ['$resource', 'appCONSTANTS', AddressResource])

    function AddressResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Address/', {}, {
            getAllAddress: { method: 'GET', url: appCONSTANTS.API_URL + 'Address/GetUserAddresses/:userId', useToken: true, isArray: true },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Address/EditAddress', useToken: true },
            getAddress: { method: 'GET', url: appCONSTANTS.API_URL + 'Address/GetAddressById/:AddressId', useToken: true }

        })
    }
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('createAddressDialogController', ['$scope', '$filter', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'AddressResource', 'ToastService', '$rootScope', 'CountriesPrepService', 'RegionResource', 'CityResource', 'AreaResource'
            , createAddressDialogController])

    function createAddressDialogController($scope, $filter, blockUI, $http, $state, appCONSTANTS, $translate, AddressResource,
        ToastService, $rootScope, CountriesPrepService, RegionResource, CityResource, AreaResource) {
        var vm = this;
        vm.selectedAreaId = 0;
        vm.counties = [];
        vm.counties.push({ countryId: 0, titleDictionary: { "en": "Select Country", "ar": "اختار بلد" } });
        vm.selectedCountryId = 0;
        vm.counties = vm.counties.concat(CountriesPrepService.results)

        vm.AddNewType = function () {
           blockUI.start($translate.instant('loading'));
            var newAddress = new AddressResource();
            newAddress.floor = vm.FLoor;
            newAddress.appartmentNo = vm.AppartmentNo;
            newAddress.description = vm.AddressDescription;
            newAddress.branchId = vm.selectedBranchId;
            newAddress.userId = $scope.user.id;
            newAddress.$create().then(
                function (data, status) {
                  blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");
                    $state.go('Address', { userId: $scope.user.id });

                },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
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
            debugger;
            var dd = vm.selectedAreaId; 
            if (vm.selectedAreaId != undefined && vm.selectedAreaId > 0) {
                for (var i = vm.area.length - 1; i >= 0; i--) {
                    if (vm.area[i].areaId == 0) {
                        vm.area.splice(i, 1);
                    }
                }
                vm.branchList = [];
                vm.branchList = vm.branchList.concat(($filter('filter')(vm.area, { areaId: vm.selectedAreaId }))[0].branches);
                vm.selectedBranchId = vm.branchList[0].branchId;
            }
        }
        vm.branchChange = function () {
            for (var i = vm.branchList.length - 1; i >= 0; i--) {
                if (vm.branchList[i].branchId == 0) {
                    vm.branchList.splice(i, 1);
                }
            }
        }

    }
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('editAddressDialogController', ['$scope', 'blockUI', '$http', '$filter', '$state', 'appCONSTANTS', '$translate',
            'AddressResource', 'ToastService', 'AddressByIdPrepService', 'CountriesPrepService', 'RegionResource',
            'CityResource', 'AreaResource', editAddressDialogController])

    function editAddressDialogController($scope, blockUI, $http, $filter, $state, appCONSTANTS, $translate, AddressResource,
        ToastService, AddressByIdPrepService, CountriesPrepService, RegionResource, CityResource, AreaResource) {
        var vm = this;

        vm.Address = AddressByIdPrepService;
        vm.Address.floor = parseInt(vm.Address.floor);
        vm.Address.appartmentNo = parseInt(vm.Address.appartmentNo);
        console.log(vm.Address);
        vm.counties = [];
        vm.regions = [];
        vm.cities = [];
        vm.area = [];
        vm.branchList = [];
       console.log(vm.Address.areaId);
        if (vm.Address.areaId == null) {
            vm.counties.push({ countryId: 0, titleDictionary: { "en": "Select Country", "ar": "اختار بلد" } });
            vm.selectedCountryId = 0;
            vm.counties = vm.counties.concat(CountriesPrepService.results)
        }
        else {
            vm.counties = vm.counties.concat(CountriesPrepService.results)
            vm.selectedCountryId = vm.Address.countryId;

            var temp = new RegionResource();
            temp.$getRegion({ regionId: vm.Address.regionId }).then(function (results) {
                debugger;
                vm.selectedRegionId = vm.Address.regionId;
                vm.regions = vm.regions.concat(results);
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });


            var temp = new CityResource();
            temp.$getCity({ cityId: vm.Address.cityId }).then(function (results) {
                debugger;
                vm.selectedCityId = vm.Address.cityId;
                vm.cities = vm.cities.concat(results);
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });

            var temp = new AreaResource();
            temp.$getArea({ areaId: vm.Address.areaId }).then(function (results) {
                debugger;
                vm.selectedAreaId = vm.Address.areaId;
                vm.area = vm.area.concat(results);
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
                vm.selectedBranchId = vm.Address.branchesId;

        }
        blockUI.stop();
        vm.Close = function () {
            $state.go('Address', { userId: $scope.user.id });

        }

        vm.UpdateType = function () {
            debugger;
           blockUI.start($translate.instant('loading'));
            var updateObj = new AddressResource();
            updateObj.addressId = vm.Address.addressId;
            updateObj.floor = vm.Address.floor;
            updateObj.appartmentNo = vm.Address.appartmentNo;
            updateObj.description = vm.Address.description;
            updateObj.branchId = vm.selectedBranchId;
            updateObj.userId = $scope.user.id;
            updateObj.$update().then(
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    $state.go('Address', { userId: $scope.user.id });


                },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }


        vm.countryChange = function () {
            if (vm.selectedCountryId != undefined) {
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
                var indexarea = vm.area.indexOf($filter('filter')(vm.area, { 'areaId': vm.selectedAreaId }, true)[0]);
                vm.selectedAreaId = vm.area[indexarea];


                debugger;
                vm.selectedBranchId = vm.selectedAreaId.branches[0].branchId;
            }
        }
        vm.branchChange = function () {
            for (var i = vm.branchList.length - 1; i >= 0; i--) {
                if (vm.branchList[i].branchId == 0) {
                    vm.branchList.splice(i, 1);
                }
            }
        }

    }
}());
(function () {
	'use strict';

	angular
		.module('home')
		.controller('CustomController', ['$scope', '$filter', '$timeout', '$state', 'UserAddressesResource', 'BranchResource', '$translate', 'RegionResource', 'CityResource',
			'AreaResource', 'CountriesPrepService', 'CustomResource', 'itemsPrepService', 'ToastService', CustomController])

	function CustomController($scope, $filter, $timeout, $state, UserAddressesResource, BranchResource, $translate, RegionResource, CityResource, AreaResource, CountriesPrepService,
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
		vm.DeliveryFees = 0;
		debugger;
		if (vm.order != null) {
			$timeout(function () {
				vm.order = JSON.parse(localStorage.getItem("OrderSummary"));
				localStorage.removeItem("OrderSummary");
				localStorage.removeItem("itemDatetime");
				localStorage.removeItem("isSnack");
				localStorage.removeItem("isBreakFast");
				localStorage.removeItem("dayList");
				localStorage.removeItem("mealPerDay");
				localStorage.removeItem("programDaysCount");
				localStorage.removeItem("ProgramDiscount");
				$state.go('homePage')
			}, 10000);
		}
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


			debugger;
			vm.itemList.forEach(element => {
				vm.carbs = (element.carbs == null) ? 0 : $scope.sum(vm.itemList, 'carbs');
				vm.calories = (element.calories == null) ? 0 : $scope.sum(vm.itemList, 'calories');
				vm.protein = (element.protein == null) ? 0 : $scope.sum(vm.itemList, 'protein');
				vm.fat = (element.fat == null) ? 0 : $scope.sum(vm.itemList, 'fat');

			});
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


				vm.orderType = {
			type: 'delivery'
		};
		vm.addresses = {
			address: 0
		};
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

			},
				function (data, status) {
					ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
				});
		}
		vm.addressInfo = function (address) {
			debugger;
			vm.addressDetails = address;
			vm.selectedBranchId = vm.addressDetails.branchId;
			GetBranchDelivery();
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
					ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
				});
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
      getAllCountries: { method: 'GET', url: appCONSTANTS.API_URL + 'Countries/GetAllCountries', useToken: false, params: { lang: '@lang' } },

    })
  }
  function RegionResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Regions/', {}, {
      getAllRegions: { method: 'GET', url: appCONSTANTS.API_URL + 'Countries/:countryId/Regions', useToken: false, params: { lang: '@lang' } },
    })
  }
  function CityResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Cities/', {}, {
      getAllCities: { method: 'GET', url: appCONSTANTS.API_URL + 'Regions/:regionId/Cities', useToken: false, params: { lang: '@lang' } },
    })
  }
  function AreaResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Areas/', {}, {
      getAllAreas: { method: 'GET', url: appCONSTANTS.API_URL + 'Cities/:cityId/Areas/GetAllAreas', useToken: false, params: { lang: '@lang' } },
    })
  }
  function BranchResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Branchs/', {}, { 
        getBranch: { method: 'GET', url: appCONSTANTS.API_URL + 'Branchs/GetBranchById/:BranchId', useToken: false }
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
        .controller('mealDetailsController', ['$scope', '$stateParams', '$state', '$translate', 'appCONSTANTS'
            , '$filter', 'mealPrepService', 'itemsssPrepService', 'OrderResource'
            , 'RegionResource', 'BranchResource', 'CityResource', 'AreaResource', 'CountriesPrepService', mealDetailsController])

    function mealDetailsController($scope, $stateParams, $state, $translate, appCONSTANTS
        , $filter, mealPrepService
        , itemsssPrepService, OrderResource, RegionResource, BranchResource, CityResource, AreaResource
        , CountriesPrepService) {

        $scope.mealPrepService = mealPrepService;
        $scope.itemsssPrepService = itemsssPrepService;
        $scope.Total = 0;
        var vm = this;
        $scope.clientId = $scope.user.id;
        $scope.DeliveryFees = 0;
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


        $scope.addressInfo = function (address) {
            $scope.addressDetails = address;
            $scope.selectedBranchId = $scope.addressDetails.branchId;
            debugger;
            $scope.Total = $scope.mealPrepService.mealPrice;
        }
        $scope.dateIsValid = false;
        $scope.dateChange = function () {


            if ($scope.itemDatetime == null || $scope.itemDatetime == "") {
                $scope.dateIsValid = false;
            } else if (!$scope.orderForm.isInValid) {

                var GivenDate = $scope.itemDatetime;
                var CurrentDate = new Date();
                GivenDate = new Date(GivenDate);

                GivenDate.setHours(CurrentDate.getHours());
                GivenDate.setMinutes(CurrentDate.getMinutes());
                GivenDate.setSeconds(CurrentDate.getSeconds());

                if (GivenDate > CurrentDate) {
                    $scope.dateIsValid = true;
                }
                else {

                }
            }
        }
        if ($scope.orderType.type == 'delivery') {
            var k = OrderResource.getUserAddresses({ userId: $scope.clientId }).$promise.then(function (results) {
                $scope.userAddresses = results;

            },
                function (data, status) {
                });
        }

        function GetBranchDelivery() {
            var temp = new BranchResource();
            temp.$getBranch({ branchId: $scope.selectedBranchId }).then(function (results) {
                $scope.DeliveryFees = results.deliveryPrice;

            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
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
        $scope.areaChanged = false;
        $scope.branchChange = function () {
            for (var i = $scope.branchList.length - 1; i >= 0; i--) {
                if ($scope.branchList[i].branchId == 0) {
                    $scope.branchList.splice(i, 1);
                }
            }
            $scope.DeliveryFees = 0;
            $scope.Total = $scope.mealPrepService.mealPrice;
            $scope.areaChanged = true;

        }

        $scope.Order = function () {

            var order = new OrderResource();

            order.meal = $scope.mealPrepService;
            order.isByAdmin = true;
            order.branchId = $scope.selectedBranchId;
            order.userId = $scope.clientId;
            order.day = $('#startdate').val();
            order.type = "Meal";
            order.price = $scope.Total;

            order.$createOrder().then(
                function (data, status) {


                    localStorage.setItem('OrderSummary', JSON.stringify(data));
                    $state.go('Summary');
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
        .controller('OrderController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'OrdersResource', 'ordersPrepService', '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', OrderController])
        ;


    function OrderController($rootScope, blockUI, $scope, $filter, $translate,
        $state, OrdersResource, ordersPrepService, $localStorage, authorizationService,
        appCONSTANTS, ToastService) {

       blockUI.start($translate.instant('loading')); 
        var vm = this;

        $scope.totalCount = ordersPrepService.totalCount;
        $scope.OrderList = ordersPrepService;
        console.log($scope.OrderList);
        $scope.getTotal = function (order) {
            debugger;
            var total = 0;
            if (order.type == "3") {
                for (var i = 0; i < order.orderDetails.length; i++) {
                    var obj = order.orderDetails[i];
                    total += (obj.item.price);
                }
            }
            else if (order.type == "2") {
                for (var i = 0; i < order.orderDetails.length; i++) {
                    var obj = order.orderDetails[i];
                    total += (obj.meal.mealPrice);
                }
            }
            else if (order.type == "1") {
                total = 1500;
            }
            return total;
        }

        function refreshOrders() {
           blockUI.start($translate.instant('loading'));

            var k = OrdersResource.getAllOrders({ page: vm.currentPage }).$promise.then(function (results) {
                $scope.OrderList = results;
                blockUI.stop();

            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }


        vm.currentPage = 1;
        $scope.changePage = function (page) {
            vm.currentPage = page;
            refreshOrders();
        }
        blockUI.stop();

        $scope.goToDetails = function (orderModel) {



        }

    }

})();(function () {
    angular
      .module('home')
        .factory('OrdersResource', ['$resource', 'appCONSTANTS', OrdersResource]) 

    function OrdersResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Orders/', {}, {
            getAllOrders: { method: 'GET', url: appCONSTANTS.API_URL + 'Orders/GetOrderByClientId', useToken: true  },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Orders/EditOrder', useToken: true },
            getOrder: { method: 'GET', url: appCONSTANTS.API_URL + 'Orders/GetOrderById/:OrderId', useToken: true } ,
            getFullOrder: { method: 'GET', url: appCONSTANTS.API_URL + 'Orders/GetFullOrderById/:OrderId', useToken: true }   

        })
    } 
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('orderMealDetailscontroller', ['$scope', '$stateParams', '$state', '$translate', 'appCONSTANTS'
            , '$filter', 'OrderMealPrepService', 'itemsssPrepService', 'OrderResource'
            , 'RegionResource', 'BranchResource', 'CityResource', 'AreaResource', orderMealDetailscontroller])

    function orderMealDetailscontroller($scope, $stateParams, $state, $translate, appCONSTANTS
        , $filter, OrderMealPrepService
        , itemsssPrepService, OrderResource, RegionResource, BranchResource, CityResource, AreaResource
    ) {

       debugger;
        $scope.OrderMealPrepService = OrderMealPrepService;
        $scope.itemsssPrepService = itemsssPrepService;
        $scope.Total = 0;
        var vm = this;
        $scope.clientId = $scope.user.id;
        $scope.DeliveryFees = 0;
        $scope.counties = [];
        $scope.fats = 0;
        $scope.carbs = 0;
        $scope.protein = 0;
        $scope.calories = 0;

        for (var i = 0; i < $scope.OrderMealPrepService.mealDetails.length; i++) {
            var differntItem = $scope.itemsssPrepService.filter(x => (x.itemId == $scope.OrderMealPrepService.mealDetails[i].itemId));

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




               }

}
    ());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('orderProgramDetailscontroller', ['$scope', '$stateParams', '$translate', 'appCONSTANTS'
            , '$filter', 'OrderprogDetailsPrepService', 'itemsssPrepService', 'OrderResource', orderProgramDetailscontroller])

    function orderProgramDetailscontroller($scope, $stateParams, $translate, appCONSTANTS
        , $filter, OrderprogDetailsPrepService
        , itemsssPrepService) {
        debugger;
        $scope.OrderprogDetailsPrepService = OrderprogDetailsPrepService;
        $scope.itemsssPrepService = itemsssPrepService;
        $scope.clientId = localStorage.getItem('ClientId');

         $scope.fats = 0;
        $scope.carbs = 0;
        $scope.protein = 0;
        $scope.calories = 0;

        for (var i = 0; i < $scope.OrderprogDetailsPrepService.items.length; i++) {
            $scope.fats += $scope.OrderprogDetailsPrepService.items[i].fat;
            $scope.carbs += $scope.OrderprogDetailsPrepService.items[i].carbs;
            $scope.protein += $scope.OrderprogDetailsPrepService.items[i].protein;
            $scope.calories += $scope.OrderprogDetailsPrepService.items[i].calories;
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
            getAllCountries: { method: 'GET', url: appCONSTANTS.API_URL + 'Countries/GetAllCountries', useToken: false, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Countries/EditCountry', useToken: true },
            getCountry: { method: 'GET', url: appCONSTANTS.API_URL + 'Countries/:countryId', useToken: true }

        })
    }

    function AreaResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Areas/', {}, {
            getAllAreas: { method: 'GET', url: appCONSTANTS.API_URL + 'Cities/:cityId/Areas/GetAllAreas', useToken: false, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Areas/EditArea', useToken: true },
            getArea: { method: 'GET', url: appCONSTANTS.API_URL + 'Areas/GetAreaById/:AreaId', useToken: true },
            getAllAreasForUser: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/:userId/Areas', useToken: true, isArray: true }
        })
    }

    function RegionResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Regions/', {}, {
            getAllRegions: { method: 'GET', url: appCONSTANTS.API_URL + 'Countries/:countryId/Regions', useToken: false, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Regions/EditRegion', useToken: true },
            getRegion: { method: 'GET', url: appCONSTANTS.API_URL + 'Regions/:regionId', useToken: true },
            getAllRegionsForUser: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/:userId/Regions', useToken: true, isArray: true }

        })
    }

    function CityResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Cities/', {}, {
            getAllCities: { method: 'GET', url: appCONSTANTS.API_URL + 'Regions/:regionId/Cities', useToken: false, params: { lang: '@lang' } },
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
        .controller('programDetailsController', ['$scope', '$state', '$stateParams', '$translate', 'appCONSTANTS'
            , '$filter', 'progDetailsPrepService', 'itemsssPrepService', 'OrderResource'
            , 'RegionResource', 'CityResource', 'AreaResource', 'CountriesPrepService', 'BranchResource', 'settingsPrepService', programDetailsController])

    function programDetailsController($scope, $state, $stateParams, $translate, appCONSTANTS
        , $filter, progDetailsPrepService
        , itemsssPrepService, OrderResource, RegionResource, CityResource, AreaResource
        , CountriesPrepService, BranchResource, settingsPrepService) {

        $scope.progDetailsPrepService = progDetailsPrepService;
        $scope.settingsPrepService = settingsPrepService;
        $scope.itemsssPrepService = itemsssPrepService;
        $scope.clientId = $scope.user.id;

        $scope.counties = [];

        $scope.fats = 0;
        $scope.carbs = 0;
        $scope.protein = 0;
        $scope.calories = 0;
        $scope.DeliveryFees = 0;
        $scope.Total = 0;

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

        $scope.typeChanged = function () {
            if ($scope.orderType.type == 'delivery') {
                $scope.DeliveryFees = 0;
                $scope.Total = 0;
                $scope.selectedAreaId = 0;
            }
            else {
                $scope.DeliveryFees = 0;
                $scope.Total = 0;
                $scope.addresses.address = null;
            }
        }

        $scope.addressValidation = false;
        $scope.addressInfo = function (address) {
            $scope.addressDetails = address;
            $scope.addressValidation = true;
            $scope.selectedBranchId = $scope.addressDetails.branchId;
            GetBranchDelivery();
            debugger;
        }

        function GetBranchDelivery() {
            var temp = new BranchResource();
            temp.$getBranch({ branchId: $scope.selectedBranchId }).then(function (results) {
                if (results.deliveryPrice == null) {
                    $scope.DeliveryFees = 0;
                }
                else {
                    $scope.DeliveryFees = results.deliveryPrice;
                }

                if ($scope.settingsPrepService.programDiscount == undefined || $scope.settingsPrepService.programDiscount == 0) {
                    $scope.Total = $scope.progDetailsPrepService.price + $scope.DeliveryFees;
                }
                else {
                    $scope.Total = ($scope.progDetailsPrepService.price + $scope.DeliveryFees) - ($scope.progDetailsPrepService.price * ($scope.settingsPrepService.programDiscount / 100));
                }

            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
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
            $scope.DeliveryFees = 0;
            if ($scope.settingsPrepService.programDiscount == undefined || $scope.settingsPrepService.programDiscount == 0) {
                $scope.Total = $scope.progDetailsPrepService.price + $scope.DeliveryFees;
            }
            else {
                $scope.Total = ($scope.progDetailsPrepService.price + $scope.DeliveryFees) - ($scope.progDetailsPrepService.price * ($scope.settingsPrepService.programDiscount / 100));
            }
        }

        $scope.Order = function () {
          blockUI.start($translate.instant('loading'));

            var order = new OrderResource();

            order.program = $scope.progDetailsPrepService;
            order.isByAdmin = false;
            order.userId = $scope.clientId;
            order.price = $scope.Total;
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

                    localStorage.setItem('OrderSummary', JSON.stringify(data));
                    $state.go('summaryProgram');

                },
                function (data, status) {
                      blockUI.stop();

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
            '$localStorage', 'authorizationService', 'appCONSTANTS', 'EditUserPrepService',
            'ToastService', 'CountriesPrepService',
            'RegionResource', 'CityResource', 'AreaResource', editUserController]);


    function editUserController($rootScope, blockUI, $scope, $filter, $translate, $state, UserResource,
        $localStorage, authorizationService, appCONSTANTS, EditUserPrepService, ToastService,
        CountriesPrepService, RegionResource, CityResource, AreaResource) {
       blockUI.start($translate.instant('loading'));

        $scope.isPaneShown = true;
        $scope.$emit('LOAD')
        var vm = this;
        vm.close = function () {
            $state.go('homePage');
        }
        vm.counties = [];
        vm.regions = [];
        vm.cities = [];
        vm.area = [];
        vm.branchList = [];
        vm.show = true;
        $scope.userObj = EditUserPrepService;
        $scope.userObj.confirmPassword = $scope.userObj.password;
        console.log($scope.userObj); 
        blockUI.stop();
        if ($scope.userObj.areaId == null) {
            vm.counties.push({ countryId: 0, titleDictionary: { "en": "Select Country", "ar": "اختار بلد" } });
            vm.selectedCountryId = 0;
            vm.counties = vm.counties.concat(CountriesPrepService.results)
        }
        else {
            debugger;
            vm.counties = vm.counties.concat(CountriesPrepService.results)
            vm.selectedCountryId = $scope.userObj.countryId;

            var temp = new RegionResource();
            temp.$getRegion({ regionId: $scope.userObj.regionId }).then(function (results) { 
                debugger;
                vm.selectedRegionId = $scope.userObj.regionId;
                vm.regions = vm.regions.concat(results);
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });


            var temp = new CityResource();
            temp.$getCity({ cityId: $scope.userObj.cityId }).then(function (results) { 
                vm.selectedCityId = $scope.userObj.cityId;
                vm.cities = vm.cities.concat(results);
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });

            var temp = new AreaResource();
            temp.$getArea({ areaId: $scope.userObj.areaId }).then(function (results) {
                debugger;
                vm.selectedAreaId = $scope.userObj.areaId;
                vm.area = vm.area.concat(results);
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
                vm.selectedBranchId = $scope.userObj.branchesId;

        }
        $scope.Updateclient = function () {
           blockUI.start($translate.instant('loading'));
            vm.show = false;
            var newClient = new UserResource();
            newClient.userId = $scope.userObj.userId;
            newClient.firstName = $scope.userObj.firstName;
            newClient.lastName = $scope.userObj.lastName;
            newClient.phone = $scope.userObj.phone;
            newClient.email = $scope.userObj.email;
            newClient.password = $scope.userObj.password;
            newClient.isActive = true;
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


        vm.countryChange = function () {
            if (vm.selectedCountryId != undefined) {
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
                var indexarea = vm.area.indexOf($filter('filter')(vm.area, { 'areaId': vm.selectedAreaId }, true)[0]);
                vm.selectedAreaId = vm.area[indexarea];


                debugger;
                vm.selectedBranchId = vm.selectedAreaId.branches[0].branchId;
            }
        }
    }

})();(function () {
    'use strict';

    angular
        .module('home')
        .controller('OrderController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'OrdersResource', 'ordersPrepService', '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', OrderController])
        ;


    function OrderController($rootScope, blockUI, $scope, $filter, $translate,
        $state, OrdersResource, ordersPrepService, $localStorage, authorizationService,
        appCONSTANTS, ToastService) {

       blockUI.start($translate.instant('loading')); 
        var vm = this;

        $scope.totalCount = ordersPrepService.totalCount;
        $scope.OrderList = ordersPrepService;
        console.log($scope.OrderList);
        $scope.getTotal = function (order) {
            debugger;
            var total = 0;
            if (order.type == "3") {
                for (var i = 0; i < order.orderDetails.length; i++) {
                    var obj = order.orderDetails[i];
                    total += (obj.item.price);
                }
            }
            else if (order.type == "2") {
                for (var i = 0; i < order.orderDetails.length; i++) {
                    var obj = order.orderDetails[i];
                    total += (obj.meal.mealPrice);
                }
            }
            else if (order.type == "1") {
                total = 1500;
            }
            return total;
        }

        function refreshOrders() {
           blockUI.start($translate.instant('loading'));

            var k = OrdersResource.getAllOrders({ page: vm.currentPage }).$promise.then(function (results) {
                $scope.OrderList = results;
                blockUI.stop();

            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }


        vm.currentPage = 1;
        $scope.changePage = function (page) {
            vm.currentPage = page;
            refreshOrders();
        }
        blockUI.stop();

        $scope.goToDetails = function (orderModel) {



        }

    }

})();(function () {
    angular
      .module('home')
        .factory('OrdersResource', ['$resource', 'appCONSTANTS', OrdersResource]) 

    function OrdersResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Orders/', {}, {
            getAllOrders: { method: 'GET', url: appCONSTANTS.API_URL + 'Orders/GetOrderByClientId', useToken: true  },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Orders/EditOrder', useToken: true },
            getOrder: { method: 'GET', url: appCONSTANTS.API_URL + 'Orders/GetOrderById/:OrderId', useToken: true } ,
            getFullOrder: { method: 'GET', url: appCONSTANTS.API_URL + 'Orders/GetFullOrderById/:OrderId', useToken: true }   

        })
    } 
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('userController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate', '$state', 'UserResource',
            '$localStorage', 'authorizationService', 'appCONSTANTS',
            'ToastService', 'CountriesPrepService', 'RegionResource', 'CityResource', 'AreaResource', userController]);

    function userController($rootScope, blockUI, $scope, $filter, $translate, $state, UserResource, $localStorage, authorizationService, appCONSTANTS, ToastService, CountriesPrepService,
        RegionResource, CityResource, AreaResource) {

        var vm = this;
        vm.close = function () {
            $state.go('login');
        }
        vm.selectedAreaId = 0;
        vm.counties = [];
        vm.counties.push({ countryId: 0, titleDictionary: { "en": "Select Country", "ar": "اختار بلد" } });
        vm.selectedCountryId = 0;
        vm.counties = vm.counties.concat(CountriesPrepService.results)

        $scope.phoneNumbr = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;
        $scope.userObj = ""; 
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
            debugger;
            var dd = vm.selectedAreaId; 
            if (vm.selectedAreaId != undefined && vm.selectedAreaId > 0) {
                for (var i = vm.area.length - 1; i >= 0; i--) {
                    if (vm.area[i].areaId == 0) {
                        vm.area.splice(i, 1);
                    }
                }
                vm.branchList = [];
                vm.branchList = vm.branchList.concat(($filter('filter')(vm.area, { areaId: vm.selectedAreaId }))[0].branches);
                vm.selectedBranchId = vm.branchList[0].branchId;
            }
        }
        vm.branchChange = function () {
            for (var i = vm.branchList.length - 1; i >= 0; i--) {
                if (vm.branchList[i].branchId == 0) {
                    vm.branchList.splice(i, 1);
                }
            }
        }


        $scope.AddNewclient = function () {
            blockUI.start($translate.instant('loading'));
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
            newClient.code = 100;
            newClient.isAddress = true;
            newClient.floor = vm.FLoor;
            newClient.appartmentNo = vm.AppartmentNo;
            newClient.description = vm.AddressDescription;
            newClient.$create().then(
                function (data, status) {
                    debugger;
                    $scope.submit($scope.Email, $scope.Password)

                },
                function (data, status) {
                    blockUI.start(data.data.message);
                    alert(data.data.message);

                }
            );
        }
        vm.currentPage = 1;
        $scope.changePage = function (page) {
            vm.currentPage = page;
            refreshUsers();
        }




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
            create: { method: 'POST', useToken: false },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Users/EditRegisterUser', useToken: true },
            getUser: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/GetUserById/:UserId', useToken: true }, 
            validate: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/ValidateByPhone/:Phone', useToken: true }, 
            getUserDepartments: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/Departments', useToken: true }, 
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
        .controller('homePageController', ['$scope', '$state', '$stateParams', '$translate','blockUI', 'appCONSTANTS', 'settingsPrepService'
            , 'daysPrepService', homePageController])

    function homePageController($scope, $state, $stateParams, $translate, blockUI,appCONSTANTS
        , settingsPrepService, daysPrepService) {

        $scope.settingsPrepService = settingsPrepService;
        $scope.dayList = daysPrepService;
		$scope.SelectedDays = [];
        $scope.isSnack = false;
        $scope.isBreakFast = false;
        blockUI.stop();

        $scope.submitCustomise = function () {
            localStorage.setItem('mealPerDay', $scope.mealPerDay);
            localStorage.setItem('programDaysCount', $scope.programDaysCount);
            localStorage.setItem('dayList', JSON.stringify($scope.SelectedDays));
            localStorage.setItem('isBreakFast', $scope.isBreakFast);
            localStorage.setItem('isSnack', $scope.isSnack);
            localStorage.setItem('itemDatetime', $scope.itemDatetime);
            localStorage.setItem('ProgramDiscount', $scope.settingsPrepService.programDiscount);
            $state.go('Custom');
        }

        $scope.style = function () {
            return {
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
    return $resource(appCONSTANTS.API_URL + 'Program/GetAllActivePrograms', {}, {
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
    return $resource(appCONSTANTS.API_URL + 'Meals/GetAllActiveMeals', {}, {
      getAllMeals: { method: 'GET', useToken: true, params: { lang: '@lang' } },
    })
  }


}());

