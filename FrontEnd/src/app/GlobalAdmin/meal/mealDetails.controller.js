(function () {
    'use strict';

    angular
        .module('home')
        .controller('mealDetailsController', ['$scope', 'blockUI','$stateParams', '$state', '$translate', 'appCONSTANTS'
            , '$filter', 'mealPrepService', 'itemsssPrepService', 'OrderResource'
            , 'RegionResource', 'BranchResource', 'CityResource', 'AreaResource', 'CountriesPrepService', mealDetailsController])

    function mealDetailsController($scope,blockUI, $stateParams, $state, $translate, appCONSTANTS
        , $filter, mealPrepService
        , itemsssPrepService, OrderResource, RegionResource, BranchResource, CityResource, AreaResource
        , CountriesPrepService) {

        $scope.mealPrepService = mealPrepService;
        $scope.itemsssPrepService = itemsssPrepService;
        $scope.Total = 0;
        var vm = this;
        $scope.clientId = $scope.user.id;
        // localStorage.getItem('ClientId');
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

        // $scope.addressValidation = false;
        // $scope.addressInfo = function (address) {
        //     $scope.addressDetails = address;
        //     $scope.addressValidation = true;
        // } 

        $scope.addressInfo = function (address) {
            $scope.addressDetails = address;
            $scope.selectedBranchId = $scope.addressDetails.branchId;
            // GetBranchDelivery();
            debugger;
            $scope.Total = $scope.mealPrepService.mealPrice;
        }
        $scope.dateIsValid = false;
        $scope.dateChange = function () {

            if ($('#startdate').data('date')== null || $('#startdate').data('date') == "") {
                // if ($scope.itemDatetime == null || $scope.itemDatetime == "") {
                $scope.dateIsValid = false;
                // $scope.$apply();
            } else if ($scope.orderForm.$valid) {

                $scope.dateIsValid = true;

                // var GivenDate = $scope.itemDatetime;
                // var GivenDate = $('#startdate').data('date')
                // var CurrentDate = new Date();
                // GivenDate = new Date(GivenDate);

                // GivenDate.setHours(CurrentDate.getHours());
                // GivenDate.setMinutes(CurrentDate.getMinutes());
                // GivenDate.setSeconds(CurrentDate.getSeconds());

                // if (GivenDate >= CurrentDate) {
                //     // alert('Given date is greater than the current date.');
                //     $scope.dateIsValid = true;
                // }
                // else {
                //     // alert('Given date is not greater than the current date.');
                //     //$scope.dateIsValid = false;

                // }
                // $scope.$apply();
            }
        }
        if ($scope.orderType.type == 'delivery') {
            var k = OrderResource.getUserAddresses({ userId: $scope.clientId }).$promise.then(function (results) {
                $scope.userAddresses = results;
                // console.log($scope.userAddresses);
                // blockUI.stop();

            },
                function (data, status) {
                    // blockUI.stop();
                    // ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }

        function GetBranchDelivery() {
            var temp = new BranchResource();
            temp.$getBranch({ branchId: $scope.selectedBranchId }).then(function (results) {
                $scope.DeliveryFees = results.deliveryPrice;
                // blockUI.stop();

            },
                function (data, status) {
                    //   blockUI.stop();
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
            // $scope.counties.splice(0, 1);
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
            // blockUI.stop();
        }

        $scope.regionChange = function () {
            // $scope.regions.splice(0, 1);
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
            // $scope.cities.splice(0, 1);
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
            // $scope.area.splice(0, 1);
            if ($scope.selectedAreaId != undefined && $scope.selectedAreaId > 0) {
                for (var i = $scope.area.length - 1; i >= 0; i--) {
                    if ($scope.area[i].areaId == 0) {
                        $scope.area.splice(i, 1);
                    }
                }
                $scope.branchList = [];
                // $scope.branchList.push({ branchId: 0, titleDictionary: { "en": "Select Branch", "ar": "اختار فرع" } });
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
            blockUI.start($translate.instant('loading'));

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
                     blockUI.stop();

                    // ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");

                    // localStorage.setItem('data', JSON.stringify(data.userId));
                    //  $state.go('meals');
                    localStorage.setItem('OrderSummary', JSON.stringify(data));
                    $state.go('Summary');
                },
                function (data, status) {
                    blockUI.stop();

                    // ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }


    }

}
    ());
