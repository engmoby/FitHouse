(function () {
    'use strict';

    angular
        .module('home')
        .controller('orderProgramscontroller', ['$scope', 'blockUI', '$filter', '$translate',
            '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', '$stateParams'
            , 'programsPrepService', 'RegionResource', 'CityResource', 'AreaResource', 'CountriesPrepService','BranchResource'
            , 'OrderResource', 'GetProgramDetailResource', orderProgramscontroller]);


    function orderProgramscontroller($scope, blockUI, $filter, $translate, $state, $localStorage, authorizationService, appCONSTANTS, ToastService
        , $stateParams, programsPrepService, RegionResource, CityResource, AreaResource
        , CountriesPrepService, BranchResource,OrderResource, GetProgramDetailResource) {

        // $('.pmd-sidebar-nav>li>a').removeClass("active")
        // $($('.pmd-sidebar-nav').children()[3].children[0]).addClass("active")

        // blockUI.start("Loading...");

        var vm = this;
        vm.DeliveryFees = 0;
        vm.language = appCONSTANTS.supportedLanguage;

        $scope.itemModel = [];
        vm.program;
        vm.mealItemss;
        $scope.programsPrepService = programsPrepService;
        vm.counties = [];
        vm.clientId = localStorage.getItem('ClientId');
        vm.flag = false;
     
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
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
            blockUI.stop();
        }

        vm.regionChange = function () {
            // vm.regions.splice(0, 1);
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
            // vm.cities.splice(0, 1);
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
            // vm.area.splice(0, 1);
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
			vm.Total = vm.TotalPrice + vm.DeliveryFees;
        }

        vm.TotalPrice = 0;
        $scope.getData = function (itemModel) {
          
            debugger;
           //program
           
           vm.itemList = [];
            vm.itemList.push(itemModel);
            vm.TotalPrice += itemModel.price;
            // itemModel.forEach(element => {
            //     vm.itemList.push(element);
            // });
        }

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
				vm.selectedBranchId = 0;
			}
		}
        vm.orderType = {
            type: 'delivery'
        };
        vm.addresses = {
            address: 0
        };

        if (vm.orderType.type == 'delivery') {
            var k = OrderResource.getUserAddresses({ userId: vm.clientId }).$promise.then(function (results) {
                vm.userAddresses = results;
                console.log(vm.userAddresses);
                blockUI.stop();

            },
                function (data, status) {
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
 
        vm.addressValidation = false;
        vm.addressInfo = function (address) {
           vm.addressDetails = address;
           vm.addressValidation = true;
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

				vm.Total = vm.TotalPrice + vm.DeliveryFees;
                 

			},
				function (data, status) {
					//   blockUI.stop();
					ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
				});
		}
        vm.programSearch = function () {
            var k = GetProgramDetailResource.getProgramDetail({ programId: vm.program.programId }).$promise.then(function (results) {
                vm.mealItemss = results;
                console.log(vm.mealItemss);
                blockUI.stop();
                vm.flag = true;

            },
                function (data, status) {
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }

        vm.dateIsValid = false;
        $scope.dateChange = function () {
            if ($('#startdate').data('date') == null || $('#startdate').data('date') == "") {
                vm.dateIsValid = false;
                $scope.$apply();
            } else if (!$scope.orderProgramForm.isInValid) {
                vm.dateIsValid = true;
                $scope.$apply();
            }
        }

        

        vm.Order = function () {
            blockUI.start("Loading...");

            var order = new OrderResource();

            order.programs = vm.itemList;
            order.isByAdmin = true;
            // order.branchId = vm.selectedBranchId;
            order.userId = vm.clientId;
            order.price = vm.Total;
            order.day = $('#startdate').val();

            if (vm.orderType.type == "delivery") {
                order.isDelivery = true;
                order.addressId = vm.addresses.address;
                order.branchId = vm.addressDetails.branchId;
            }
            else {
                order.isDelivery = false;
                order.branchId = vm.selectedBranchId;
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

})();
