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
            // vm.area.push({ areaId: 0, titleDictionary: { "en": "Select Area", "ar": "اختار منطقه" } });
            // vm.selectedAreaId = 0;
            // vm.area = vm.area.concat(AreaPrepService.results)
            vm.counties.push({ countryId: 0, titleDictionary: { "en": "Select Country", "ar": "اختار بلد" } });
            vm.selectedCountryId = 0;
            vm.counties = vm.counties.concat(CountriesPrepService.results)
        }
        else {
            debugger;
            vm.counties = vm.counties.concat(CountriesPrepService.results)
            vm.selectedCountryId = $scope.userObj.countryId;

            /*region */
            var temp = new RegionResource();
            temp.$getRegion({ regionId: $scope.userObj.regionId }).then(function (results) { 
                debugger;
                vm.selectedRegionId = $scope.userObj.regionId;
                vm.regions = vm.regions.concat(results);
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });

            /*city */

            var temp = new CityResource();
            temp.$getCity({ cityId: $scope.userObj.cityId }).then(function (results) { 
                vm.selectedCityId = $scope.userObj.cityId;
                vm.cities = vm.cities.concat(results);
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });

            /*area */
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

            //vm.regions = RegionsForUserPrepService
            //vm.selectedRegionId = $scope.userObj.regionId;
            //vm.cities = CitiesForUserPrepService
            //vm.selectedCityId = $scope.userObj.cityId;
            //vm.area = AreasForUserPrepService
            //vm.selectedAreaId = $scope.userObj.areaId;
            //vm.branchList = ($filter('filter')(vm.area, { areaId: $scope.userObj.areaId }))[0].branches;
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
            newClient.length = $scope.userObj.length;
            newClient.weight = $scope.userObj.weight;
            newClient.password = $scope.userObj.password;
            newClient.isActive = true;
            newClient.branchId = vm.selectedBranchId;//1;
            newClient.$update().then(
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    vm.show = true;
                    localStorage.setItem('data', JSON.stringify(data.userId));
                    //$state.go('users');

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
                var indexarea = vm.area.indexOf($filter('filter')(vm.area, { 'areaId': vm.selectedAreaId }, true)[0]);
                vm.selectedAreaId = vm.area[indexarea];

                //  var indexbranch = vm.branchList.indexOf($filter('filter')(vm.branchList, { 'branchId': $scope.userObj.branchId }, true)[0]);

                debugger;
                vm.selectedBranchId = vm.selectedAreaId.branches[0].branchId;
                //alert(vm.selectedBranchId);
            }
        }
    }

})();