(function () {
    'use strict';

    angular
        .module('home')
        .controller('orderItemscontroller', ['$scope', 'blockUI', '$filter', '$translate',
            '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', '$stateParams'
            , 'itemsssPrepService', 'RegionResource', 'CityResource', 'AreaResource', 'CountriesPrepService'
            , 'OrderResource', orderItemscontroller]);


    function orderItemscontroller($scope, blockUI, $filter, $translate, $state, $localStorage, authorizationService, appCONSTANTS, ToastService
        , $stateParams, itemsssPrepService, RegionResource, CityResource, AreaResource
        , CountriesPrepService, OrderResource) {

        // $('.pmd-sidebar-nav>li>a').removeClass("active")
        // $($('.pmd-sidebar-nav').children()[3].children[0]).addClass("active")

        // blockUI.start("Loading...");

        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;

        // var d = new Date();
        // //var e = formatDate(d);
        // vm.itemDateTime = formatDate(d);
        // vm.itemDatetime;
        $scope.itemModel = [];
        $scope.itemsssPrepService = itemsssPrepService;
        vm.counties = [];
        vm.clientId = localStorage.getItem('ClientId');

        vm.counties.push({ countryId: 0, titleDictionary: { "en": "Select Country", "ar": "اختار بلد" } });
        vm.selectedCountryId = 0;
        vm.counties = vm.counties.concat(CountriesPrepService.results)

        vm.dateIsValid = false;
        $scope.dateChange = function () {
            if ($('#startdate').data('date') == null || $('#startdate').data('date') == "") {
                vm.dateIsValid = false;
                $scope.$apply();
            } else if (!$scope.orderItemForm.isInValid) {
                vm.dateIsValid = true;
                $scope.$apply();
            }
        }


        // function formatDate(date) {
        //     var hours = date.getHours();
        //     var minutes = date.getMinutes();
        //     var ampm = hours >= 12 ? 'pm' : 'am';
        //     hours = hours % 12;
        //     hours = hours ? hours : 12; // the hour '0' should be '12'
        //     minutes = minutes < 10 ? '0'+minutes : minutes;
        //     var strTime = hours + ':' + minutes + ' ' + ampm;
        //     return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
        //   }

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
        }

        $scope.getData = function (itemModel) {
            vm.itemList = [];
            itemModel.forEach(element => {
                vm.itemList.push(element);
            });
        }

        vm.Order = function () {
            blockUI.start("Loading...");

            var order = new OrderResource();

            order.items = vm.itemList;
            order.isByAdmin = true;
            order.branchId = vm.selectedBranchId;
            order.userId = vm.clientId;
            order.day = $('#startdate').val();
            // order. = vm.orderStartDate;

            // var flagDate = new Date($('#invitationDateTime').data('date'));
            // if(flagDate == 'Invalid Date'){
            //     vm.invitationDateTime =  new Date(vm.invitationDateTime);
            // }
            // else{
            //     vm.invitationDateTime = new Date($('#invitationDateTime').data('date'));
            // }

            order.$createOrder().then(
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('OrderAddSuccess'), "success");

                    // localStorage.setItem('data', JSON.stringify(data.userId));
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
