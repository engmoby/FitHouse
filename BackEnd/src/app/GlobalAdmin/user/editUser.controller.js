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
        vm.counties = [];
        vm.regions = [];
        vm.cities = [];
        vm.area = [];
        vm.branchList = [];
        vm.show = true;
        $scope.roleList = RolePrepService.results;
        vm.selectedUserRoles = [];
        $scope.userObj = EditUserPrepService;
        $scope.userObj.confirmPassword = $scope.userObj.password;
      


        vm.counties.push({ countryId: 0, titleDictionary: { "en": "Select Country", "ar": "اختار بلد" } });
        vm.selectedCountryId = 0;
        vm.counties = vm.counties.concat(CountriesPrepService.results)

        var i;
        for (i = 0; i < $scope.userObj.userRoles.length; i++) {
            var indexRate = $scope.roleList.indexOf($filter('filter')($scope.roleList, { 'roleId': $scope.userObj.userRoles[i].roleId }, true)[0]);
            vm.selectedUserRoles.push($scope.roleList[indexRate]);

        }
        if ($scope.userObj.areaId == null) {
            vm.counties.push({ countryId: 0, titleDictionary: { "en": "Select Country", "ar": "اختار بلد" } });
            vm.selectedCountryId = 0;
            vm.counties = vm.counties.concat(CountriesPrepService.results)
        }
        else {

            //  vm.counties = vm.counties.concat(CountriesPrepService.results)
            vm.selectedCountryId = $scope.userObj.countryId;

            /*region */
            var temp = new RegionResource();
            temp.$getAllRegions({ countryId: $scope.userObj.countryId, pageSize: 0 }).then(function (results) {
                //vm.selectedRegionId = 0;
                vm.regions = vm.regions.concat(results.results);
                vm.selectedRegionId = $scope.userObj.regionId;
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
            // var temp = new RegionResource();
            // temp.$getRegion({ regionId: $scope.userObj.regionId }).then(function (results) {
            //     vm.selectedRegionId = $scope.userObj.regionId;
            //    // vm.regions = vm.regions.concat(results);
            // },
            //     function (data, status) {
            //         ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
            //     }); 
            /*city */
            var temp = new CityResource();
            temp.$getAllCities({ regionId: $scope.userObj.regionId, pageSize: 0 }).then(function (results) {
                vm.selectedCityId = 0;
                vm.cities = vm.cities.concat(results.results);
                vm.selectedCityId = $scope.userObj.cityId;
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });

            // var temp = new CityResource();
            // temp.$getCity({ cityId: $scope.userObj.cityId }).then(function (results) {
            //     vm.selectedCityId = $scope.userObj.cityId;
            //     vm.cities = vm.cities.concat(results);
            // },
            //     function (data, status) {
            //         ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
            //     });

            /*area */
            var temp = new AreaResource();
            temp.$getAllAreas({ cityId: $scope.userObj.cityId, pageSize: 0 }).then(function (results) {
                //     vm.selectedAreaId = 0;
                vm.area = vm.area.concat(results.results);
                vm.selectedAreaId = $scope.userObj.areaId;
                debugger;
                var indexarea = vm.area.indexOf($filter('filter')(vm.area, { 'areaId': vm.selectedAreaId }, true)[0]);
                vm.selecteArea = vm.area[indexarea];
    
                vm.selectedBranchId = vm.selecteArea.branches[0].branchId;
                vm.branchList.push(vm.selecteArea.branches[0]);
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
 
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
            newClient.branchId = vm.selectedBranchId;//1;
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
        function areaChange() {
            // vm.area.splice(0, 1);
            if (vm.selectedAreaId != undefined && vm.selectedAreaId > 0) {
                for (var i = vm.area.length - 1; i >= 0; i--) {
                    if (vm.area[i].areaId == 0) {
                        vm.area.splice(i, 1);
                    }
                }

                vm.branchList = [];
                // vm.branchList = vm.area.branches;
                // vm.branchList.push({ branchId: 0, titleDictionary: { "en": "Select Branch", "ar": "اختار فرع" } });
                // vm.selectedBranchId = 0;
                //  vm.selecteArea = vm.area.concat($filter('filter')(vm.area, { areaId: vm.selectedAreaId })[0].branches);
                var indexarea = vm.area.indexOf($filter('filter')(vm.area, { 'areaId': vm.selectedAreaId }, true)[0]);
                vm.selecteArea = vm.area[indexarea];

                vm.selectedBranchId = vm.selecteArea.branches[0].branchId;
                vm.branchList.push(vm.selecteArea.branches[0]);
                //alert(vm.selectedBranchId);
            }

        }
        vm.areaChange = function () {
            areaChange();
        }
    }

})();