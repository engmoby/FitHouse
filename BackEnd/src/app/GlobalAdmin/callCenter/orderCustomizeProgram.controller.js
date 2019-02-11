(function () {
    'use strict';

    angular
        .module('home')
        .controller('orderCustomizeProgramcontroller', ['$scope', 'blockUI', '$filter', '$translate',
            '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', '$stateParams',
            'AddProgramResource', 'daysPrepService', 'settingsPrepService', 'itemsssPrepService'
            , 'RegionResource', 'CityResource', 'AreaResource', 'CountriesPrepService', 'OrderResource', orderCustomizeProgramcontroller]);


    function orderCustomizeProgramcontroller($scope, blockUI, $filter, $translate, $state, $localStorage, authorizationService,
        appCONSTANTS, ToastService, $stateParams, AddProgramResource, daysPrepService, settingsPrepService, itemsssPrepService
        , RegionResource, CityResource, AreaResource, CountriesPrepService, OrderResource) {

        // $('.pmd-sidebar-nav>li>a').removeClass("active")
        // $($('.pmd-sidebar-nav').children()[3].children[0]).addClass("active")

        // blockUI.start("Loading...");

        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;

        // $scope.ProgramName = "";
        // $scope.ProgramDescription = "";
        vm.daysCount = 0;
        vm.mealsCount = 0;
        vm.ProgramDaysCount = 0;
        vm.MealPerDay = 0;
        vm.ProgramDiscount = 0;
        vm.IsBreakFast = false;
        vm.IsSnack = false;
        vm.ProgramPrice = 0;
        vm.ProgramCost = 0;
        vm.ProgramVAT = 0;
        // vm.ProgramDiscount = 0;
        vm.ProgramTotalPrice = 0;
        vm.dayList = daysPrepService;
        // vm.CategoriesPrepService = CategoriesPrepService;
        $scope.itemsssPrepService = itemsssPrepService;
        vm.itemList = [];
        //$scope.itemModel = [];
        //$scope.variableitemmodel;
        console.log(vm.itemList);
        vm.SelectedDays = [];
        vm.progCountList = [];

        vm.Setting = settingsPrepService;

        vm.orderType = {
            type: 'item'
        };

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
        }

        vm.deletedItem = false;
        vm.ConvertToNumber = function () {
            vm.daysCount = parseInt(vm.ProgramDaysCount, 10);
            vm.mealsCount = parseInt(vm.MealPerDay, 10);
        }

        $scope.discountChange = function () {
            vm.ProgramPrice = 0;
            vm.ProgramCost = 0;
            vm.ProgramVAT = 0;
            vm.ProgramTotalPrice = 0;
            for (var i = 0; i < vm.itemList.length; i++) {
                vm.ProgramPrice = vm.ProgramPrice + vm.itemList[i].price;
                vm.ProgramCost = vm.ProgramCost + vm.itemList[i].cost;
                vm.ProgramVAT = vm.ProgramVAT + vm.itemList[i].vat;
                vm.ProgramTotalPrice = (vm.ProgramPrice + vm.ProgramVAT) - vm.ProgramDiscount;
            }
        }

        $scope.getData = function (itemModel, day, meal) {
            // debugger;
            // var allDayMeal = $scope.itemList.filter(x=>x.day == day && x.meal == meal);
            var differntMeal = vm.itemList.filter(x => (x.dayNumber == day && x.mealNumberPerDay != meal) || (x.dayNumber != day));
            vm.itemList = [];
            vm.itemList = angular.copy(differntMeal);

            itemModel.forEach(element => {
                element.dayNumber = day;
                element.mealNumberPerDay = meal;
                // element.itemModel = element;
                //$scope.itemList=[];
                vm.itemList.push(element);
            });

            console.log(vm.itemList);

            vm.ProgramPrice = 0;
            vm.ProgramCost = 0;
            vm.ProgramVAT = 0;
            vm.ProgramTotalPrice = 0;
            for (var i = 0; i < vm.itemList.length; i++) {
                vm.ProgramPrice = vm.ProgramPrice + vm.itemList[i].price;
                vm.ProgramCost = vm.ProgramCost + vm.itemList[i].cost;
                vm.ProgramVAT = vm.ProgramVAT + vm.itemList[i].vat;
                vm.ProgramTotalPrice = (vm.ProgramPrice + vm.ProgramVAT) - vm.ProgramDiscount;
            }

        }
        //Model
        vm.currentStep = 1;
        vm.steps = [
            {
                step: 1,
                name: "Step 1",
                template: "./app/GlobalAdmin/callCenter/templates/customizeStepOne.html"
            },
            {
                step: 2,
                name: "Step 2",
                template: "./app/GlobalAdmin/callCenter/templates/customizeStepTwo.html"
            },
            {
                step: 3,
                name: "Step 3",
                template: "./app/GlobalAdmin/callCenter/templates/customizeStepThree.html"
            }
        ];
        vm.user = {};

        //Functions
        vm.gotoStep = function (newStep) {
            vm.currentStep = newStep;
        }

        vm.getStepTemplate = function () {
            for (var i = 0; i < vm.steps.length; i++) {
                if (vm.currentStep == vm.steps[i].step) {
                    return vm.steps[i].template;
                }
            }
        }

        vm.showDDL = function () {
            $(".select-add-tags").select2({
                tags: true,
                theme: "bootstrap",
                insertTag: function (data, tag) {
                    // Insert the tag at the end of the results
                    data.push(tag);
                }
            });
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
        vm.addressInfo = function (address) {
            vm.addressDetails = address;
        }

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

        vm.AddNewProgram = function () {
            var newProgram = new AddProgramResource();
            newProgram.programNameDictionary = vm.titleDictionary;
            newProgram.programDescriptionDictionary = vm.descriptionDictionary;
            newProgram.isActive = true;
            newProgram.programDays = vm.ProgramDaysCount;
            newProgram.noOfMeals = vm.MealPerDay;
            newProgram.isBreakfast = vm.IsBreakFast;
            newProgram.isSnack = vm.IsSnack;
            newProgram.programDiscount = vm.ProgramDiscount;
            newProgram.isAdmin = true;
            newProgram.isForClient = false;
            newProgram.isDeleted = false;
            newProgram.programDetails = vm.itemList;
            newProgram.price = vm.ProgramTotalPrice;
            newProgram.isOrdering = true;
            newProgram.day = $('#startdate').val();

            // newProgram.branchId = vm.selectedBranchId;
            newProgram.isProgram = true;
            newProgram.userId = vm.clientId;
            if (vm.orderType.type == "delivery") {
                newProgram.isDelivery = true;
                newProgram.addressId = vm.addresses.address;
                newProgram.branchId = vm.addressDetails.branchId;
            }
            else {
                newProgram.isDelivery = false;
                newProgram.branchId = vm.selectedBranchId;
            }
            newProgram.isOrdering = true;
            newProgram.days = vm.SelectedDays;
            newProgram.$create().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");
                    $state.go('callCenter');
                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }


    }

})();
