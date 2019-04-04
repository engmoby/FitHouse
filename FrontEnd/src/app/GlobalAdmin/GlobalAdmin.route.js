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
                        // mealsPrepService: mealsPrepService,
                        // programPrepService: programPrepService,
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
                        programPrepService: programNoPagePrepService,
                        settingsPrepService: settingsPrepService
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
                        CountriesPrepService: CountriesPrepService,
                        settingsPrepService: settingsPrepService
                    }
                })

                .state('Custom', {
                    url: '/Custom',
                    templateUrl: './app/GlobalAdmin/customProgram/templates/Custom.html',
                    controller: 'CustomController',
                    'controllerAs': 'CustomCtrl',
                    resolve: {
                        AllcategoriesPrepService: AllcategoriesPrepService,
                        CountriesPrepService: CountriesPrepService
                    }
                })

                .state('Summary', {
                    url: '/Summary',
                    templateUrl: './app/GlobalAdmin/customProgram/templates/Summary.html',
                    controller: 'CustomController',
                    'controllerAs': 'CustomCtrl',
                    resolve: {
                        AllcategoriesPrepService: AllcategoriesPrepService,
                        CountriesPrepService: CountriesPrepService,
                        AllcategoriesPrepService: AllcategoriesPrepService
                    }
                })

                .state('summaryProgram', {
                    url: '/summaryProgram',
                    templateUrl: './app/GlobalAdmin/customProgram/templates/summaryProgram.html',
                    controller: 'CustomController',
                    'controllerAs': 'CustomCtrl',
                    resolve: {
                        itemsPrepService: itemsPrepService,
                        CountriesPrepService: CountriesPrepService,
                        AllcategoriesPrepService: AllcategoriesPrepService
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
        return GetMealsResource.getAllMeals({ pageSize: 0 }).$promise;
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

    // HistoryUserPrepService.$inject = ['HistoryResource', '$stateParams']
    // function HistoryUserPrepService(HistoryResource, $stateParams) {
    //     return HistoryResource.GetOrderByClientId().$promise;
    // }

    /*Orders */
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

    /*Address */
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

    AllcategoriesPrepService.$inject = ['CategoryResource']
    function AllcategoriesPrepService(CategoryResource) {
        return CategoryResource.GetAllActiveCategories().$promise;
    }


}());
