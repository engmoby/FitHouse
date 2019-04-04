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
            // vm.area.push({ areaId: 0, titleDictionary: { "en": "Select Area", "ar": "اختار منطقه" } });
            // vm.selectedAreaId = 0;
            // vm.area = vm.area.concat(AreaPrepService.results)
            vm.counties.push({ countryId: 0, titleDictionary: { "en": "Select Country", "ar": "اختار بلد" } });
            vm.selectedCountryId = 0;
            vm.counties = vm.counties.concat(CountriesPrepService.results)
        }
        else {
            vm.counties = vm.counties.concat(CountriesPrepService.results)
            vm.selectedCountryId = vm.Address.countryId;

            /*region */
            var temp = new RegionResource();
            temp.$getRegion({ regionId: vm.Address.regionId }).then(function (results) {
                debugger;
                vm.selectedRegionId = vm.Address.regionId;
                vm.regions = vm.regions.concat(results);
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });

            /*city */

            var temp = new CityResource();
            temp.$getCity({ cityId: vm.Address.cityId }).then(function (results) {
                debugger;
                vm.selectedCityId = vm.Address.cityId;
                vm.cities = vm.cities.concat(results);
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });

            /*area */
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

            //vm.regions = RegionsForUserPrepService
            //vm.selectedRegionId = vm.Address.regionId;
            //vm.cities = CitiesForUserPrepService
            //vm.selectedCityId = vm.Address.cityId;
            //vm.area = AreasForUserPrepService
            //vm.selectedAreaId = vm.Address.areaId;
            //vm.branchList = ($filter('filter')(vm.area, { areaId: vm.Address.areaId }))[0].branches;
        }
        //init();
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
            // vm.counties.splice(0, 1);
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
                // vm.selectedBranchId = 0;
                //vm.selecteArea = vm.area.concat($filter('filter')(vm.area, { areaId: vm.selectedAreaId })[0].branches);
                // var indexarea = vm.area.indexOf($filter('filter')(vm.area, { 'areaId': vm.selectedAreaId }, true)[0]);
                // vm.selectedAreaId = vm.area[indexarea];

                //  var indexbranch = vm.branchList.indexOf($filter('filter')(vm.branchList, { 'branchId': vm.Address.branchId }, true)[0]);

                debugger;
                vm.branchList = vm.branchList.concat(($filter('filter')(vm.area, { areaId: vm.selectedAreaId }))[0].branches);

                vm.selectedBranchId = vm.branchList[0].branchId //vm.selectedAreaId.branches[0].branchId;
                //alert(vm.selectedBranchId);
            }
        }
        /*vm.areaChange = function () {
            for (var i = vm.area.length - 1; i >= 0; i--) {
                if (vm.area[i].areaId == 0) {
                    vm.area.splice(i, 1);
                }
            }
            vm.branchList = [];
           // vm.branchList.push({ branchId: 0, titleDictionary: { "en": "Select Branch", "ar": "اختار فرع" } });
            vm.selectedBranchId = [0];
            vm.branchList = vm.branchList.concat(($filter('filter')(vm.area, { areaId: vm.selectedAreaId }))[0].branches);
        }*/
        vm.branchChange = function () {
            for (var i = vm.branchList.length - 1; i >= 0; i--) {
                if (vm.branchList[i].branchId == 0) {
                    vm.branchList.splice(i, 1);
                }
            }
        }

    }
}());
