(function () {
    'use strict';

    angular
        .module('home')
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider

                .state('program', {
                    url: '/programs',
                    templateUrl: './app/GlobalAdmin/Program/templates/program.html',
                    controller: 'ProgramController',
                    'controllerAs': 'programCtrl',
                    resolve: {
                        programPrepService: programPrepService
                    },
                    data: {
                        permissions: {
                            only: ['1'],
                            redirectTo: 'root'
                        }
                    }

                })

                .state('programDetails', {
                    url: '/programDetails/:programId',
                    templateUrl: './app/GlobalAdmin/Program/templates/programDetails.html',
                    controller: 'programDetailsController',
                    'controllerAs': 'programDetailsCtrl',
                    resolve: {
                        progDetailsPrepService: progDetailsPrepService,
                        itemsssPrepService: itemsssPrepService
                    },
                    data: {
                        permissions: {
                            only: ['1'],
                            redirectTo: 'root'
                        }
                    }

                })

                .state('newProgram', {
                    url: '/newPrograms',
                    templateUrl: './app/GlobalAdmin/Program/templates/addProgram.html',
                    controller: 'addProgramController',
                    'controllerAs': 'addProgramCtrl',
                    resolve: {
                        settingsPrepService: settingsPrepService,
                        daysPrepService: daysPrepService,
                        itemsssPrepService: itemsssPrepService
                    },
                    data: {
                        permissions: {
                            only: ['1'],
                            redirectTo: 'root'
                        }
                    }

                })

                .state('editProgram', {
                    url: '/editPrograms/:programId',
                    templateUrl: './app/GlobalAdmin/Program/templates/editPrograms.html',
                    controller: 'editProgramController',
                    'controllerAs': 'editProgramCtrl',
                    resolve: {
                        programByIdPrepService: programByIdPrepService
                    },
                    data: {
                        permissions: {
                            only: ['1'],
                            redirectTo: 'root'
                        }
                    }

                })

                .state('setting', {
                    url: '/settings',
                    templateUrl: './app/GlobalAdmin/setting/templates/setting.html',
                    controller: 'settingController',
                    'controllerAs': 'settingCtrl',
                    resolve: {
                        settingsPrepService: settingsPrepService,
                        BranchPrepService: BranchPrepService
                    },
                    data: {
                        permissions: {
                            only: ['1'],
                            redirectTo: 'root'
                        }
                    }

                })

                .state('callCenter', {
                    url: '/callCenters',
                    templateUrl: './app/GlobalAdmin/callCenter/templates/callCenter.html',
                    controller: 'callCenterController',
                    'controllerAs': 'callCenterCtrl',
                    resolve: {
                        CountriesPrepService: CountriesPrepService
                    },
                    data: {
                        permissions: {
                            only: ['1'],
                            redirectTo: 'root'
                        }
                    }

                })

                .state('orderItem', {
                    url: '/orderItems',
                    templateUrl: './app/GlobalAdmin/callCenter/templates/orderItems.html',
                    controller: 'orderItemscontroller',
                    'controllerAs': 'orderItemsCtrl',
                    resolve: {
                        itemsssPrepService: itemsssPrepService,
                        CountriesPrepService: CountriesPrepService
                    },
                    data: {
                        permissions: {
                            only: ['1'],
                            redirectTo: 'root'
                        }
                    }

                })

                .state('orderMeal', {
                    url: '/orderMeals',
                    templateUrl: './app/GlobalAdmin/callCenter/templates/orderMeals.html',
                    controller: 'orderMealscontroller',
                    'controllerAs': 'orderMealsCtrl',
                    resolve: {
                        mealsPrepService: mealsPrepService,
                        CountriesPrepService: CountriesPrepService
                    },
                    data: {
                        permissions: {
                            only: ['1'],
                            redirectTo: 'root'
                        }
                    }

                })

                .state('orderProgram', {
                    url: '/orderPrograms',
                    templateUrl: './app/GlobalAdmin/callCenter/templates/orderPrograms.html',
                    controller: 'orderProgramscontroller',
                    'controllerAs': 'orderProgramsCtrl',
                    resolve: {
                        programsPrepService: programsPrepService,
                        CountriesPrepService: CountriesPrepService
                    },
                    data: {
                        permissions: {
                            only: ['1'],
                            redirectTo: 'root'
                        }
                    }

                })

                .state('orderCustomizeProgram', {
                    url: '/orderCustomizePrograms',
                    templateUrl: './app/GlobalAdmin/callCenter/templates/orderCustomizeProgram.html',
                    controller: 'orderCustomizeProgramcontroller',
                    'controllerAs': 'orderCustomizeProgramCtrl',
                    resolve: {
                        daysPrepService: daysPrepService,
                        settingsPrepService: settingsPrepService,
                        itemsssPrepService: itemsssPrepService,
                        CountriesPrepService: CountriesPrepService
                    },
                    data: {
                        permissions: {
                            only: ['1'],
                            redirectTo: 'root'
                        }
                    }

                })

                .state('users', {
                    url: '/users',
                    templateUrl: './app/GlobalAdmin/user/templates/user.html',
                    controller: 'userController',
                    'controllerAs': 'userCtrl',
                    resolve: {
                        userPrepService: userPrepService,
                        RolePrepService: RolePrepService,
                        CountriesPrepService: CountriesPrepService,
                    },
                    data: {
                        permissions: {
                            only: ['1'],
                            redirectTo: 'root'
                        }
                    }

                })

                .state('addUser', {
                    url: '/addUser',
                    templateUrl: './app/GlobalAdmin/user/templates/addUser.html',
                    controller: 'userController',
                    'controllerAs': 'userCtrl',

                    resolve: {
                        userPrepService: userPrepService,
                        RolePrepService: AllActivateRolePrepService,
                        CountriesPrepService: CountriesPrepService,

                    },
                    data: {
                        permissions: {
                            only: ['1'],
                            redirectTo: 'root'
                        }
                    }


                })

                .state('editUser', {
                    url: '/editUser/:userId',
                    templateUrl: './app/GlobalAdmin/user/templates/editUser.html',
                    controller: 'editUserController',
                    'controllerAs': 'editUserCtrl',
                    resolve: {
                        EditUserPrepService: EditUserPrepService,
                        RolePrepService: AllRolePrepService,
                        CountriesPrepService: CountriesPrepService,

                    },
                    data: {
                        permissions: {
                            only: ['1'],
                            redirectTo: 'root'
                        }
                    }

                })


                .state('Role', {
                    url: '/Role',
                    templateUrl: './app/GlobalAdmin/Role/templates/Role.html',
                    controller: 'RoleController',
                    'controllerAs': 'RoleCtrl',
                    resolve: {
                        RolePrepService: RolePrepService
                    },
                    data: {
                        permissions: {
                            only: ['3'],
                            redirectTo: 'root'
                        }
                    }

                })
                .state('newRole', {
                    url: '/newRole',
                    templateUrl: './app/GlobalAdmin/Role/templates/new.html',
                    controller: 'createRoleDialogController',
                    'controllerAs': 'newRoleCtrl',
                    resolve: {
                        PermissionPrepService: PermissionPrepService
                    },
                    data: {
                        permissions: {
                            only: ['3'],
                            redirectTo: 'root'
                        }
                    }

                })
                .state('editrole', {
                    url: '/editrole/:roleId',
                    templateUrl: './app/GlobalAdmin/Role/templates/edit.html',
                    controller: 'editRoleDialogController',
                    'controllerAs': 'editRoleCtrl',
                    resolve: {
                        RoleByIdPrepService: RoleByIdPrepService,
                        PermissionPrepService: PermissionPrepService
                    },
                    data: {
                        permissions: {
                            only: ['3'],
                            redirectTo: 'root'
                        }
                    }

                })


                .state('Area', {

                    url: '/:cityId/Area',
                    views: {
                        '@': {
                            templateUrl: './app/GlobalAdmin/Area/templates/Area.html',
                            controller: 'AreaController',
                            'controllerAs': 'AreaCtrl',
                        }
                    },
                    resolve: {
                        AreaPrepService: AreaPrepService,
                        CityByIdPrepService: CityByIdPrepService,
                        RegionByIdPrepService: RegionByIdPrepService,

                    },
                    data: {
                        permissions: {
                            only: ['4'],
                            redirectTo: 'root'
                        }
                    },
                    parent: "Cities",
                    ncyBreadcrumb: {
                        label: '{{cityName}}'
                    }

                })
                .state('newArea', {
                    url: '/:cityId/newArea',
                    views: {
                        '@': {
                            templateUrl: './app/GlobalAdmin/Area/templates/new.html',
                            controller: 'createAreaDialogController',
                            'controllerAs': 'newAreaCtrl',
                        }
                    },
                    resolve: {
                        CityByIdPrepService: CityByIdPrepService,
                        RegionByIdPrepService: RegionByIdPrepService,

                    },
                    data: {
                        permissions: {
                            only: ['4'],
                            redirectTo: 'root'
                        }
                    },
                    parent: "Cities",
                    ncyBreadcrumb: {
                        label: '{{cityName}}'
                    }

                })
                .state('editArea', {
                    url: '/:cityId/editArea/:areaId',
                    views: {
                        '@': {
                            templateUrl: './app/GlobalAdmin/Area/templates/edit.html',
                            controller: 'editAreaDialogController',
                            'controllerAs': 'editAreaCtrl',
                        }
                    },
                    resolve: {
                        AreaByIdPrepService: AreaByIdPrepService,
                        CityByIdPrepService: CityByIdPrepService,
                        RegionByIdPrepService: RegionByIdPrepService,

                    },
                    data: {
                        permissions: {
                            only: ['4'],
                            redirectTo: 'root'
                        }
                    },
                    parent: "Cities",
                    ncyBreadcrumb: {
                        label: '{{cityName}}'
                    }

                })

                .state('newBranch', {
                    url: '/:areaId/newBranch',
                    views: {
                        '@': {
                            templateUrl: './app/GlobalAdmin/Branch/templates/new.html',
                            controller: 'createBranchDialogController',
                            'controllerAs': 'newBranchCtrl',
                        }
                    },
                    resolve: {
                        AreaByIdPrepService: AreaByIdPrepService,
                        CityByIdPrepService: CityByIdPrepService,
                        RegionByIdPrepService: RegionByIdPrepService,
                    },
                    data: {
                        permissions: {
                            only: ['4'],
                            redirectTo: 'root'
                        }
                    },
                    parent: "Area",
                    ncyBreadcrumb: {
                        label: '{{areaName}}'
                    }

                })
                .state('editBranch', {
                    url: '/:areaId/editBranch/:branchId',
                    views: {
                        '@': {
                            templateUrl: './app/GlobalAdmin/Branch/templates/edit.html',
                            controller: 'editBranchDialogController',
                            'controllerAs': 'editBranchCtrl',
                        }
                    },
                    resolve: {
                        BranchByIdPrepService: BranchByIdPrepService,
                        AreaByIdPrepService: AreaByIdPrepService,
                        CityByIdPrepService: CityByIdPrepService,
                        RegionByIdPrepService: RegionByIdPrepService,
                    },
                    data: {
                        permissions: {
                            only: ['4'],
                            redirectTo: 'root'
                        }
                    },
                    parent: "Area",
                    ncyBreadcrumb: {
                        label: '{{areaName}}'
                    }

                })

                .state('Category', {
                    url: '/Category',
                    templateUrl: './app/GlobalAdmin/Category/templates/Category.html',
                    controller: 'CategoryController',
                    'controllerAs': 'CategoryCtrl',
                    resolve: {
                        CategoryPrepService: CategoryPrepService
                    },
                    data: {
                        permissions: {
                            only: ['5'],
                            redirectTo: 'root'
                        }
                    }

                })

                .state('newCategory', {
                    url: '/newCategory',
                    templateUrl: './app/GlobalAdmin/Category/templates/new.html',
                    controller: 'createCategoryDialogController',
                    'controllerAs': 'newCategoryCtrl',
                    resolve: {
                    },
                    data: {
                        permissions: {
                            only: ['5'],
                            redirectTo: 'root'
                        }
                    }

                })
                .state('editCategory', {
                    url: '/editcategory/:categoryId',
                    templateUrl: './app/GlobalAdmin/Category/templates/edit.html',
                    controller: 'editCategoryDialogController',
                    'controllerAs': 'editCategoryCtrl',
                    resolve: {
                        CategoryByIdPrepService: CategoryByIdPrepService,

                    },
                    data: {
                        permissions: {
                            only: ['3'],
                            redirectTo: 'root'
                        }
                    }

                })
                .state('Items', {
                    url: '/Category/:categoryId/Item',
                    templateUrl: './app/GlobalAdmin/item/templates/Item.html',
                    controller: 'ItemController',
                    'controllerAs': 'itemCtrl',
                    data: {
                        permissions: {
                            only: ['RestaurantAdmin'],
                            redirectTo: 'root'
                        },
                        displayName: 'Category'
                    },
                    resolve: {
                        itemsPrepService: itemsPrepService
                    }
                })
                .state('newItem', {
                    url: '/Category/:categoryId/newItem',
                    templateUrl: './app/GlobalAdmin/item/templates/new.html',
                    controller: 'newItemController',
                    'controllerAs': 'newItemCtrl',
                    data: {
                        permissions: {
                            only: ['RestaurantAdmin'],
                            redirectTo: 'root'
                        },
                        displayName: 'Items'
                    },
                    resolve: {
                        defaultItemsPrepService: defaultItemsPrepService,
                    }
                })
                .state('editItem', {
                    url: '/Category/:categoryId/Items/:itemId',
                    templateUrl: './app/GlobalAdmin/item/templates/edit.html',
                    controller: 'editItemController',
                    'controllerAs': 'editItemCtrl',
                    data: {
                        permissions: {
                            only: ['RestaurantAdmin'],
                            redirectTo: 'root'
                        },
                        displayName: 'Items'
                    },
                    resolve: {
                        itemPrepService: itemPrepService,
                    }
                })


                .state('Meal', {
                    url: '/Meal',
                    templateUrl: './app/GlobalAdmin/meal/templates/Meal.html',
                    controller: 'MealController',
                    'controllerAs': 'mealCtrl',
                    data: {
                        permissions: {
                            only: ['RestaurantAdmin'],
                            redirectTo: 'root'
                        },
                        displayName: 'Category'
                    },
                    resolve: {
                        mealsPrepService: mealsPrepService
                    }
                })
                .state('newMeal', {
                    url: '/newMeal',
                    templateUrl: './app/GlobalAdmin/meal/templates/new.html',
                    controller: 'newMealController',
                    'controllerAs': 'newMealCtrl',
                    data: {
                        permissions: {
                            only: ['RestaurantAdmin'],
                            redirectTo: 'root'
                        },
                        displayName: 'meals'
                    },
                    resolve: {
                        itemsssPrepService: itemsssPrepService
                    }
                })
                .state('editMeal', {
                    url: '/meals/:mealId',
                    templateUrl: './app/GlobalAdmin/meal/templates/edit.html',
                    controller: 'editMealController',
                    'controllerAs': 'editMealCtrl',
                    data: {
                        permissions: {
                            only: ['RestaurantAdmin'],
                            redirectTo: 'root'
                        },
                        displayName: 'meals'
                    },
                    resolve: {
                        mealPrepService: mealPrepService,
                        itemsssPrepService: itemsssPrepService
                    }
                })

                .state('Order', {
                    url: '/Order',
                    templateUrl: './app/GlobalAdmin/Order/templates/Order.html',
                    controller: 'OrderController',
                    'controllerAs': 'orderCtrl',
                    data: {
                        permissions: {
                            only: ['RestaurantAdmin'],
                            redirectTo: 'root'
                        },
                        displayName: 'Order'
                    },
                    resolve: {
                        ordersPrepService: ordersPrepService
                    }
                })
                .state('editorder', {
                    url: '/editorder/:orderId',
                    templateUrl: './app/GlobalAdmin/Order/templates/edit.html',
                    controller: 'editOrderDialogController',
                    'controllerAs': 'editOrderCtrl',
                    resolve: {
                        OrderByIdPrepService: OrderByIdPrepService
                    },
                    data: {
                        permissions: {
                            only: ['3'],
                            redirectTo: 'root'
                        }
                    }

                })

                .state('Pickup', {
                    url: '/Pickup',
                    templateUrl: './app/GlobalAdmin/Pickup/templates/Pickup.html',
                    controller: 'PickupController',
                    'controllerAs': 'pickupCtrl',
                    data: {
                        permissions: {
                            only: ['RestaurantAdmin'],
                            redirectTo: 'root'
                        },
                        displayName: 'Pickup'
                    },
                    resolve: {
                        pickupsPrepService: pickupsPrepService
                    }
                })

                .state('editpickup', {
                    url: '/editpickup/:pickup',
                    templateUrl: './app/GlobalAdmin/Pickup/templates/edit.html',
                    controller: 'editPickupDialogController',
                    'controllerAs': 'editPickupCtrl',
                    resolve: {
                        pickup: function () { return pickup },
                    },
                    data: {
                        permissions: {
                            only: ['3'],
                            redirectTo: 'root'
                        }
                    }

                })

                .state('Delivery', {
                    url: '/Delivery',
                    templateUrl: './app/GlobalAdmin/Delivery/templates/Delivery.html',
                    controller: 'DeliveryController',
                    'controllerAs': 'deliveryCtrl',
                    data: {
                        permissions: {
                            only: ['RestaurantAdmin'],
                            redirectTo: 'root'
                        },
                        displayName: 'Delivery'
                    },
                    resolve: {
                        deliverysPrepService: deliverysPrepService
                    }
                })


                .state('Kitchen', {
                    url: '/Kitchen',
                    templateUrl: './app/GlobalAdmin/Kitchen/templates/Kitchen.html',
                    controller: 'KitchenController',
                    'controllerAs': 'kitchenCtrl',
                    data: {
                        permissions: {
                            only: ['RestaurantAdmin'],
                            redirectTo: 'root'
                        },
                        displayName: 'Kitchen'
                    },
                    resolve: {
                        kitchensPrepService: kitchensPrepService
                    }
                })

                .state('Dashboard', {
                    url: '/Dashboard',
                    templateUrl: './app/GlobalAdmin/dashboard/templates/dashboard.html',
                    controller: 'dashboardController',
                    'controllerAs': 'dashboardCtrl',
                    resolve: {

                        CountriesPrepService: CountriesPrepService,

                    },
                    data: {
                        permissions: {
                            only: ['10'],
                            redirectTo: 'root'
                        }
                    }
                })


        });


    programByIdPrepService.$inject = ['GetProgramByIdResource', '$stateParams']
    function programByIdPrepService(GetProgramByIdResource, $stateParams) {
        return GetProgramByIdResource.getProgram({ programId: $stateParams.programId }).$promise;
    }



    settingsPrepService.$inject = ['GetSettingsResource']
    function settingsPrepService(GetSettingsResource) {
        return GetSettingsResource.getAllSettings().$promise;
    }

    userPrepService.$inject = ['UserResource']
    function userPrepService(UserResource) {
        return UserResource.getAllUsers().$promise;
    }

    EditUserPrepService.$inject = ['UserResource', '$stateParams']
    function EditUserPrepService(GetUserResource, $stateParams) {
        return GetUserResource.getUser({ userId: $stateParams.userId }).$promise;
    }

    userConsumedPrepService.$inject = ['UserResource']
    function userConsumedPrepService(UserResource) {
        return UserResource.getUserLimit().$promise;
    }

    RolePrepService.$inject = ['RoleResource']
    function RolePrepService(RoleResource) {
        return RoleResource.getAllRoles().$promise;
    }
    AllRolePrepService.$inject = ['RoleResource']
    function AllRolePrepService(RoleResource) {
        return RoleResource.getAllRoles({ pageSize: 0 }).$promise;
    }

    AllActivateRolePrepService.$inject = ['RoleResource']
    function AllActivateRolePrepService(RoleResource) {
        return RoleResource.getAllActivateRoles({ pageSize: 0 }).$promise;
    }

    RoleByIdPrepService.$inject = ['RoleResource', '$stateParams']
    function RoleByIdPrepService(RoleResource, $stateParams) {
        return RoleResource.getRole({ roleId: $stateParams.roleId }).$promise;
    }

    PermissionPrepService.$inject = ['PermissionResource']
    function PermissionPrepService(PermissionResource) {
        return PermissionResource.getAllPermissions({ pageSize: 20 }).$promise;
    }
    AreaPrepService.$inject = ['AreaResource', '$stateParams']
    function AreaPrepService(AreaResource, $stateParams) {
        return AreaResource.getAllAreas({ cityId: $stateParams.cityId }).$promise;
    }

    AllAreaPrepService.$inject = ['AreaResource']
    function AllAreaPrepService(AreaResource) {
        return AreaResource.getAllAreas({ pageSize: 0 }).$promise;
    }

    AreaByIdPrepService.$inject = ['AreaResource', '$stateParams']
    function AreaByIdPrepService(AreaResource, $stateParams) {
        return AreaResource.getArea({ areaId: $stateParams.areaId }).$promise;
    }


    BranchPrepService.$inject = ['BranchResource']
    function BranchPrepService(BranchResource) {
        return BranchResource.getAllBranchs().$promise;
    }

    BranchByIdPrepService.$inject = ['BranchResource', '$stateParams']
    function BranchByIdPrepService(BranchResource, $stateParams) {
        return BranchResource.getBranch({ branchId: $stateParams.branchId }).$promise;
    }

    progDetailsPrepService.$inject = ['GetProgramDetailResource', '$stateParams']
    function progDetailsPrepService(GetProgramDetailResource, $stateParams) {
        return GetProgramDetailResource.getProgramDetail({ programId: $stateParams.programId }).$promise;
    }

    CategoryPrepService.$inject = ['CategoryResource']
    function CategoryPrepService(CategoryResource) {
        return CategoryResource.getAllCategorys().$promise;
    }

    CategoriesPrepService.$inject = ['CategoryResource']
    function CategoriesPrepService(CategoryResource) {
        return CategoryResource.getAllCategories().$promise;
    }

    itemsssPrepService.$inject = ['GetItemsssResource']
    function itemsssPrepService(GetItemsssResource) {
        return GetItemsssResource.getAllItemsss().$promise;
    }

    daysPrepService.$inject = ['GetDaysResource']
    function daysPrepService(GetDaysResource) {
        return GetDaysResource.gatAllDays().$promise;
    }

    programPrepService.$inject = ['GetProgramResource']
    function programPrepService(GetProgramResource) {
        return GetProgramResource.gatAllPrograms().$promise;
    }


    CategoryByIdPrepService.$inject = ['CategoryResource', '$stateParams']
    function CategoryByIdPrepService(CategoryResource, $stateParams) {
        return CategoryResource.getCategory({ categoryId: $stateParams.categoryId }).$promise;
    }
    itemsPrepService.$inject = ['GetItemsResource', '$stateParams']
    function itemsPrepService(GetItemsResource, $stateParams) {
        return GetItemsResource.getAllItems({ CategoryId: $stateParams.categoryId }).$promise;
    }

    itemPrepService.$inject = ['ItemResource', '$stateParams']
    function itemPrepService(ItemResource, $stateParams) {
        return ItemResource.getItem({ itemId: $stateParams.itemId }).$promise;
    }

    defaultItemsPrepService.$inject = ['GetItemNamesResource', '$stateParams', '$localStorage', 'appCONSTANTS']
    function defaultItemsPrepService(GetItemNamesResource, $stateParams, $localStorage, appCONSTANTS) {
        if ($localStorage.language != appCONSTANTS.defaultLanguage) {
            return GetItemNamesResource.getAllItemNames({ CategoryId: $stateParams.categoryId, lang: appCONSTANTS.defaultLanguage }).$promise;
        }
        else
            return null;
    }

    mealsPrepService.$inject = ['GetMealsResource', '$stateParams']
    function mealsPrepService(GetMealsResource, $stateParams) {
        return GetMealsResource.getAllMeals().$promise;
    }

    programsPrepService.$inject = ['GetProgramResource', '$stateParams']
    function programsPrepService(GetProgramResource, $stateParams) {
        return GetProgramResource.gatAllPrograms().$promise;
    }

    mealPrepService.$inject = ['MealResource', '$stateParams']
    function mealPrepService(MealResource, $stateParams) {
        return MealResource.getMeal({ mealId: $stateParams.mealId }).$promise;
    }

    defaultMealsPrepService.$inject = ['GetMealNamesResource', '$stateParams', '$localStorage', 'appCONSTANTS']
    function defaultMealsPrepService(GetMealNamesResource, $stateParams, $localStorage, appCONSTANTS) {
        if ($localStorage.language != appCONSTANTS.defaultLanguage) {
            return GetMealNamesResource.getAllMealNames({ lang: appCONSTANTS.defaultLanguage }).$promise;
        }
        else
            return null;
    }

    ordersPrepService.$inject = ['OrdersResource', '$stateParams']
    function ordersPrepService(OrdersResource, $stateParams) {
        return OrdersResource.getAllOrders().$promise;
    }
    OrderByIdPrepService.$inject = ['OrdersResource', '$stateParams']
    function OrderByIdPrepService(OrdersResource, $stateParams) {
        return OrdersResource.getFullOrder({ orderId: $stateParams.orderId }).$promise;
    }
    pickupsPrepService.$inject = ['PickupsResource', '$stateParams']
    function pickupsPrepService(PickupsResource, $stateParams) {
        return PickupsResource.getAllPickups().$promise;
    }


    CityByIdPrepService.$inject = ['CityResource', '$stateParams']
    function CityByIdPrepService(CityResource, $stateParams) {
        return CityResource.getCity({ cityId: $stateParams.cityId }).$promise;
    }

    RegionByIdPrepService.$inject = ['RegionResource', '$stateParams']
    function RegionByIdPrepService(RegionResource, $stateParams) {
        return RegionResource.getRegion({ regionId: $stateParams.regionId }).$promise;
    }
    CountriesPrepService.$inject = ['CountryResource']
    function CountriesPrepService(CountryResource) {
        return CountryResource.getAllCountries({ pageSize: 0 }).$promise;
    }

    RegionsForUserPrepService.$inject = ['RegionResource', '$stateParams']
    function RegionsForUserPrepService(RegionResource, $stateParams) {
        return RegionResource.getAllRegionsForUser({ userId: $stateParams.userId }).$promise;
    }
    CitiesForUserPrepService.$inject = ['CityResource', '$stateParams']
    function CitiesForUserPrepService(CityResource, $stateParams) {
        return CityResource.getAllCitiesForUser({ userId: $stateParams.userId }).$promise;
    }
    AreasForUserPrepService.$inject = ['AreaResource', '$stateParams']
    function AreasForUserPrepService(AreaResource, $stateParams) {
        return AreaResource.getAllAreasForUser({ userId: $stateParams.userId }).$promise;
    }

    deliverysPrepService.$inject = ['DeliverysResource', '$stateParams']
    function deliverysPrepService(DeliverysResource, $stateParams) {
        return DeliverysResource.getAllDeliverys().$promise;
    }
    DeliveryByIdPrepService.$inject = ['DeliverysResource', '$stateParams']
    function DeliveryByIdPrepService(DeliverysResource, $stateParams) {
        return DeliverysResource.getFullDelivery({ orderId: $stateParams.orderId }).$promise;
    }


    kitchensPrepService.$inject = ['kitchensResource', '$stateParams']
    function kitchensPrepService(KitchensResource, $stateParams) {
        return KitchensResource.getAllkitchens().$promise;
    }
    KitchenByIdPrepService.$inject = ['KitchensResource', '$stateParams']
    function KitchenByIdPrepService(KitchensResource, $stateParams) {
        return KitchensResource.getFullKitchen({ orderId: $stateParams.orderId }).$promise;
    }
}());
(function() {
    'use strict';
  
    angular
      .module('home')
      .config(config)
      .run(runBlock);
  
    config.$inject = ['ngProgressLiteProvider'];
    runBlock.$inject = ['$rootScope', 'ngProgressLite','$transitions','blockUI'];
  
    function config(ngProgressLiteProvider) {
      ngProgressLiteProvider.settings.speed = 1000;
  
    }
  
    function runBlock($rootScope, ngProgressLite,$transitions,blockUI) {
  
      $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
          startProgress();
      });
      $transitions.onStart({}, function(transition) {
        blockUI.start("Loading..."); 
      });
      $transitions.onSuccess({}, function(transition) {
        blockUI.stop();
      });
      $transitions.onError({  }, function(transition) {
        blockUI.stop();
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
        .controller('AreaController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'AreaResource', 'AreaPrepService',  '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService','CityByIdPrepService','RegionByIdPrepService','$stateParams', AreaController]);


    function AreaController($rootScope, blockUI, $scope, $filter, $translate,
        $state, AreaResource, AreaPrepService, $localStorage, authorizationService,
        appCONSTANTS, ToastService,CityByIdPrepService,RegionByIdPrepService,$stateParams) { 


        blockUI.start("Loading..."); 

                    var vm = this;
        $scope.totalCount = AreaPrepService.totalCount;  


                $scope.AreaList = AreaPrepService;
        console.log($scope.AreaList);
        $scope.countryName = RegionByIdPrepService.countryNameDictionary[$scope.selectedLanguage];
        $scope.regionName = RegionByIdPrepService.titleDictionary[$scope.selectedLanguage];
        $scope.cityName = CityByIdPrepService.titleDictionary[$scope.selectedLanguage];
        function refreshAreas() {

            blockUI.start("Loading..."); 

                        var k = AreaResource.getAllAreas({cityId: $stateParams.cityId, page:vm.currentPage}).$promise.then(function (results) { 
                $scope.AreaList = results  
                blockUI.stop();

                            },
            function (data, status) {
                blockUI.stop();

                                ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
            });
        }
        vm.showMore = function (element) {
            $(element.currentTarget).toggleClass("child-table-collapse");
        }
        vm.currentPage = 1;
        $scope.changePage = function (page) {
            vm.currentPage = page;
            refreshAreas();
        }
        blockUI.stop();

            }

})();
(function () {
    angular
      .module('home')
        .factory('AreaResource', ['$resource', 'appCONSTANTS', AreaResource]) 

    function AreaResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Areas/', {}, {
            getAllAreas: { method: 'GET', url: appCONSTANTS.API_URL + 'Cities/:cityId/Areas/GetAllAreas', useToken: true,  params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Areas/EditArea', useToken: true },
            getArea: { method: 'GET', url: appCONSTANTS.API_URL + 'Areas/GetAreaById/:AreaId', useToken: true },
            getAllAreasForUser: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/:userId/Areas', useToken: true, isArray:true }
        })
    } 

}());
(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('createAreaDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'AreaResource', 'ToastService', '$stateParams','CityByIdPrepService','RegionByIdPrepService', createAreaDialogController])

    function createAreaDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, AreaResource,
        ToastService, $stateParams,CityByIdPrepService, RegionByIdPrepService) {
        
        blockUI.start("Loading..."); 
            
		var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;
        $scope.countryName = RegionByIdPrepService.countryNameDictionary[$scope.selectedLanguage];
        $scope.regionName = RegionByIdPrepService.titleDictionary[$scope.selectedLanguage];
        $scope.cityName = CityByIdPrepService.titleDictionary[$scope.selectedLanguage];
		vm.close = function(){
			$state.go('Area',{countryId: $stateParams.countryId,regionId: $stateParams.regionId,cityId:$stateParams.cityId});
		} 
		 
		vm.AddNewArea = function () {
            blockUI.start("Loading..."); 
            
            var newObj = new AreaResource();
            newObj.cityId= $stateParams.cityId;            
            newObj.titleDictionary = vm.titleDictionary; 
            newObj.IsDeleted = false; 
            newObj.IsStatic =false;
            newObj.$create().then(
                function (data, status) { 
        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success"); 
                    $state.go('Area',{countryId: $stateParams.countryId,regionId: $stateParams.regionId,cityId:$stateParams.cityId},{ reload: true });
                     blockUI.stop();        


                },
                function (data, status) {
               blockUI.stop();        

                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
        blockUI.stop();
  
	}	
}());
(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('editAreaDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate', 'AreaResource', 'ToastService',
            'AreaByIdPrepService','$stateParams','CityByIdPrepService','RegionByIdPrepService', editAreaDialogController])

    function editAreaDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, AreaResource, ToastService, 
        AreaByIdPrepService, $stateParams, CityByIdPrepService, RegionByIdPrepService) {
        blockUI.start("Loading..."); 
        
        var vm = this; 
		vm.language = appCONSTANTS.supportedLanguage;
        vm.Area = AreaByIdPrepService; 
        $scope.countryName = RegionByIdPrepService.countryNameDictionary[$scope.selectedLanguage];
        $scope.regionName = RegionByIdPrepService.titleDictionary[$scope.selectedLanguage];
        $scope.cityName = CityByIdPrepService.titleDictionary[$scope.selectedLanguage];
        vm.Close = function () {
            $state.go('Area',{countryId: $stateParams.countryId,regionId: $stateParams.regionId,cityId:$stateParams.cityId});
        }
        vm.UpdateArea = function () { 
            blockUI.start("Loading..."); 
            
            var updateObj = new AreaResource();
            updateObj.AreaId = vm.Area.areaId;
            updateObj.cityId= $stateParams.cityId;                        
            updateObj.titleDictionary = vm.Area.titleDictionary;
		    updateObj.IsDeleted = false;
		    updateObj.IsStatic = false;
		    updateObj.$update().then(
                function (data, status) {
                    blockUI.stop();
                    
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
 
                    $state.go('Area',{countryId: $stateParams.countryId,regionId: $stateParams.regionId,cityId:$stateParams.cityId},{ reload: true });

                },
                function (data, status) {
                    blockUI.stop();
                    
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
        blockUI.stop();
        
	}	
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('BranchController', ['$rootScope', '$scope', '$filter', '$translate',
            '$state', 'BranchResource',   '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', BranchController]);


    function BranchController($rootScope, $scope, $filter, $translate,
        $state, BranchResource,  $localStorage, authorizationService,
        appCONSTANTS, ToastService) {

        blockUI.start("Loading..."); 
            
        refreshBranchs();

        function refreshBranchs() {
           blockUI.start("Loading..."); 
            
            var k = BranchResource.getAllBranchs().$promise.then(function (results) {
                $scope.BranchList = results;
                blockUI.stop();
                
            },
            function (data, status) {
                blockUI.stop();
                
                ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
            });
        }

    }

})();
(function () {
    angular
      .module('home')
        .factory('BranchResource', ['$resource', 'appCONSTANTS', BranchResource]) 

    function BranchResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Branchs/', {}, {
            getAllBranchs: { method: 'GET', url: appCONSTANTS.API_URL + 'Branchs/GetAllBranchs', useToken: true,  params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Branchs/EditBranch', useToken: true },
            getBranch: { method: 'GET', url: appCONSTANTS.API_URL + 'Branchs/GetBranchById/:BranchId', useToken: true }
        })
    } 

}());
(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('createBranchDialogController', ['$scope', '$http', '$state', 'appCONSTANTS', '$translate',
            'BranchResource', 'ToastService', '$stateParams', 'AreaByIdPrepService','CityByIdPrepService', 'RegionByIdPrepService', createBranchDialogController])

    function createBranchDialogController($scope, $http, $state, appCONSTANTS, $translate, BranchResource,
        ToastService, $stateParams, AreaByIdPrepService,CityByIdPrepService, RegionByIdPrepService) {
		var vm = this;
		vm.Area = AreaByIdPrepService;
        vm.language = appCONSTANTS.supportedLanguage;
        $scope.countryName = RegionByIdPrepService.countryNameDictionary[$scope.selectedLanguage];
        $scope.regionName = RegionByIdPrepService.titleDictionary[$scope.selectedLanguage];
        $scope.cityName = CityByIdPrepService.titleDictionary[$scope.selectedLanguage];
        $scope.areaName = AreaByIdPrepService.titleDictionary[$scope.selectedLanguage];
		vm.close = function(){
		    $state.go('Area',{ countryId: $stateParams.countryId, regionId: $stateParams.regionId, cityId: $stateParams.cityId });
		} 
		 
		vm.AddNewBranch = function () {
            var newObj = new BranchResource();
		    newObj.AreaId = vm.Area.areaId;
            newObj.titleDictionary = vm.titleDictionary;
            newObj.IsDeleted = false; 
            newObj.IsStatic =false;
            newObj.$create().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success"); 
                    $state.go('Area',{ countryId: $stateParams.countryId, regionId: $stateParams.regionId, cityId: $stateParams.cityId },{ reload: true });

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
  
	}	
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('editBranchDialogController', ['$scope', '$http', '$state', 'appCONSTANTS', '$translate', 'BranchResource', 'ToastService',
            'BranchByIdPrepService','$stateParams','AreaByIdPrepService','CityByIdPrepService', 'RegionByIdPrepService', editBranchDialogController])

    function editBranchDialogController($scope, $http, $state, appCONSTANTS, $translate, BranchResource, ToastService,
         BranchByIdPrepService,$stateParams,AreaByIdPrepService,CityByIdPrepService, RegionByIdPrepService) {
        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;
        vm.Branch = BranchByIdPrepService;
        
        $scope.countryName = RegionByIdPrepService.countryNameDictionary[$scope.selectedLanguage];
        $scope.regionName = RegionByIdPrepService.titleDictionary[$scope.selectedLanguage];
        $scope.cityName = CityByIdPrepService.titleDictionary[$scope.selectedLanguage];
        $scope.areaName = AreaByIdPrepService.titleDictionary[$scope.selectedLanguage];
            
        vm.close = function () {
            $state.go('Area', { countryId: $stateParams.countryId, regionId: $stateParams.regionId, cityId: $stateParams.cityId });
        }
        vm.UpdateBranch = function () {
            var updateObj = new BranchResource();
            updateObj.BranchId = vm.Branch.branchId;
            updateObj.titleDictionary = vm.Branch.titleDictionary;
            updateObj.IsDeleted = false;
            updateObj.IsStatic = false;
            updateObj.$update().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");

                    $state.go('Area', { countryId: $stateParams.countryId, regionId: $stateParams.regionId, cityId: $stateParams.cityId },{ reload: true });

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
    }
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('CityController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'CityResource', 'CitiesPrepService',  '$stateParams', 'appCONSTANTS',
            'ToastService','RegionByIdPrepService', CityController]);


    function CityController($rootScope, blockUI, $scope, $filter, $translate,
        $state, CityResource, CitiesPrepService, $stateParams, appCONSTANTS, ToastService,RegionByIdPrepService) { 

        
    'use strict';

    angular
        .module('home')
        .controller('createRoleDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'RoleResource','PermissionResource', 'ToastService', '$rootScope', createRoleDialogController])

    function createRoleDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, RoleResource,PermissionResource,
        ToastService, $rootScope) {
        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage; 
        $scope.permissionList = [];
        BindPermissison();

        vm.close = function () {
            $state.go('Role');
        }

        vm.AddNewType = function () {
            blockUI.start("Loading..."); 

                        var newObj = new RoleResource();
            newObj.titleDictionary = vm.titleDictionary;
            newObj.Permissions = vm.selectedPermissions;
            newObj.IsDeleted = false;
            newObj.IsStatic = false;
            newObj.$create().then(
                function (data, status) {
                     blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");
                    $state.go('Role');

                },
                function (data, status) {
                    blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
        function BindPermissison() {
            blockUI.start("Loading..."); 

                        var k = PermissionResource.getAllPermissions({ pageSize: 20 }).$promise.then(function (results) {
                    vm.getPageData = results;
                    $scope.permissionList = vm.getPageData.results;
                blockUI.stop();

                                    },
                function (data, status) {
                blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
    }
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('CategoryController', ['$rootScope', '$scope', '$filter', '$translate',
            '$state', 'CategoryResource', '$localStorage',
            'authorizationService', 'appCONSTANTS', 'blockUI', '$uibModal', 'CategoryPrepService',
            'ToastService', CategoryController]);


    function CategoryController($rootScope, $scope, $filter, $translate,
        $state, CategoryResource, $localStorage, authorizationService,
        appCONSTANTS, blockUI, $uibModal, CategoryPrepService, ToastService) {
        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[4].children[0]).addClass("active")
        debugger;
        var vm = this;
        vm.currentPage = 1;
        $scope.totalCount = CategoryPrepService.totalCount;
        $scope.CategoryList = CategoryPrepService;
        console.log(CategoryPrepService);

         function refreshCategorys() {
            blockUI.start("Loading...");

            var k = CategoryResource.getAllCategorys({ page: vm.currentPage }).$promise.then(function (results) {
                $scope.CategoryList = results;

                console.log($scope.CategoryList);
                blockUI.stop();

            },
                function (data, status) {
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
        function change(category, isDeleted) {
            debugger;
            var updateObj = new CategoryResource();
            updateObj.CategoryId = category.categoryId;
            if (!isDeleted)
                updateObj.isActive = (category.isActive == true ? false : true);
            updateObj.isDeleted = category.isDeleted;

            updateObj.$update().then(
                function (data, status) {
                    if (isDeleted)
                        refreshCategorys();

                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    category.isActive = updateObj.isActive;

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );

        }
        vm.UpdateCategory = function (category) {
            change(category, false);
        }

        function confirmationDelete(model) {
            model.isDeleted = true;
            change(model, true);

        }
        vm.openDeleteDialog = function (model, name, id) {
            var modalContent = $uibModal.open({
                templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
                controller: 'confirmDeleteDialogController',
                controllerAs: 'deleteDlCtrl',
                resolve: {
                    model: function () { return model },
                    itemName: function () { return name },
                    itemId: function () { return id },
                    message: function () { return null },
                    callBackFunction: function () { return confirmationDelete }
                }

            });
        }

        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshCategorys();
        }

    }

})();
(function () {
    angular
      .module('home')
        .factory('CategoryResource', ['$resource', 'appCONSTANTS', CategoryResource]) 

    function CategoryResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Category/', {}, {
            getAllCategorys: { method: 'GET', url: appCONSTANTS.API_URL + 'Category/GetAllCategories', useToken: true, params: { lang: '@lang' } },
            getAllCategories: { method: 'GET', url: appCONSTANTS.API_URL + 'Category/GetAllCategs', useToken: true, params: { lang: '@lang' } , isArray:true},
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Category/EditCategory', useToken: true },
            getCategory: { method: 'GET', url: appCONSTANTS.API_URL + 'Category/GetCategoryById/:CategoryId', useToken: true }
        })
    } 

}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('createCategoryDialogController', ['$scope', '$http', '$state', 'appCONSTANTS', '$translate',
            'CategoryResource',  'ToastService', '$rootScope',   createCategoryDialogController])

    function createCategoryDialogController($scope, $http, $state, appCONSTANTS, $translate, CategoryResource, 
        ToastService, $rootScope ) {
        var vm = this; 
        vm.language = appCONSTANTS.supportedLanguage; 
        vm.close = function () {
            $state.go('Category');
        }

        vm.AddNewCategory = function () {
            var newObj = new CategoryResource(); 
            newObj.titleDictionary = vm.titleDictionary;
            newObj.IsDeleted = false; 

                       newObj.$create().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");
                    $state.go('Category');

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }

    }
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('editCategoryDialogController', ['$scope', '$filter', '$http', '$state', 'appCONSTANTS', '$translate',
            'CategoryResource', 'ToastService', 'CategoryByIdPrepService', editCategoryDialogController])

    function editCategoryDialogController($scope, $filter, $http, $state, appCONSTANTS, $translate, CategoryResource,
        ToastService, CategoryByIdPrepService) {
        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;
        vm.Category = CategoryByIdPrepService;
        console.log(vm.Category);


        vm.Close = function () {
            $state.go('Category');
        }
        vm.UpdateCategory = function () {
            var updateObj = new CategoryResource();
            updateObj.CategoryId = vm.Category.categoryId;
            updateObj.titleDictionary = vm.Category.titleDictionary; 
            updateObj.IsDeleted = vm.Category.IsDeleted;
            updateObj.isActive = vm.Category.isActive;
            updateObj.$update().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");

                    $state.go('Category');

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
    }
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('CountryController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'CountryResource', 'CountriesPrepService',  '$localStorage', 'appCONSTANTS',
            'ToastService', CountryController]);


    function CountryController($rootScope, blockUI, $scope, $filter, $translate,
        $state, CountryResource, CountriesPrepService, $localStorage, appCONSTANTS, ToastService) { 

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[2].children[0]).addClass("active")

        blockUI.start("Loading..."); 

                    var vm = this;
        $scope.totalCount = CountriesPrepService.totalCount;
        $scope.Countries  = CountriesPrepService;
        function refreshCountries() {

            blockUI.start("Loading..."); 

                        var k = CountryResource.getAllCountries({page:vm.currentPage}).$promise.then(function (results) { 
                $scope.Countries = results  
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
            refreshCountries();
        }
        blockUI.stop();

            }

})();
(function () {
    angular
      .module('home')
        .factory('CountryResource', ['$resource', 'appCONSTANTS', CountryResource]) 

    function CountryResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Countries/', {}, {
            getAllCountries: { method: 'GET', url: appCONSTANTS.API_URL + 'Countries/GetAllCountries', useToken: true,  params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Countries/EditCountry', useToken: true },
            getCountry: { method: 'GET', url: appCONSTANTS.API_URL + 'Countries/:countryId', useToken: true }

                    })
    } 

}());
(function() {
    'use strict';

    angular
        .module('home')
        .config(function($stateProvider, $urlRouterProvider) {

            $stateProvider
            .state('Countries', {
                url: '/Country',
                templateUrl: './app/GlobalAdmin/Country/templates/Countries.html',
                controller: 'CountryController',
                'controllerAs': 'CountryCtrl',
                resolve: {
                    CountriesPrepService: CountriesPrepService
                },
                data: {
                    permissions: {
                        only: ['4'],
                        redirectTo: 'root'
                    }
                }

            })
            .state('newCountry', {
                url: '/newCountry',
                templateUrl: './app/GlobalAdmin/Country/templates/new.html',
                controller: 'createCountryDialogController',
                'controllerAs': 'newCountryCtrl',
                data: {
                    permissions: {
                        only: ['4'],
                        redirectTo: 'root'
                    }
                }

            })
            .state('editCountry', {
                url: '/editCountry/:countryId',
                templateUrl: './app/GlobalAdmin/Country/templates/edit.html',
                controller: 'editCountryDialogController',
                'controllerAs': 'editCountryCtrl',
                resolve: {
                    CountryByIdPrepService: CountryByIdPrepService
                },
                data: {
                    permissions: {
                        only: ['4'],
                        redirectTo: 'root'
                    }
                }

            })
        });

                CountriesPrepService.$inject = ['CountryResource']
        function CountriesPrepService(CountryResource) {
            return CountryResource.getAllCountries().$promise;
        }

        CountryByIdPrepService.$inject = ['CountryResource', '$stateParams']
        function CountryByIdPrepService(CountryResource, $stateParams) {
            return CountryResource.getCountry({ countryId: $stateParams.countryId }).$promise;
        }

}());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('createCountryDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'CountryResource', 'ToastService', '$rootScope', createCountryDialogController])

    function createCountryDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, CountryResource,
        ToastService, $rootScope) {

                blockUI.start("Loading..."); 

            		var vm = this;
		vm.language = appCONSTANTS.supportedLanguage;
		vm.close = function(){
			$state.go('Countries');
		} 

		 		vm.AddNewCountry = function () {
            blockUI.start("Loading..."); 

                        var newObj = new CountryResource();
            newObj.titleDictionary = vm.titleDictionary; 
            newObj.IsDeleted = false; 
            newObj.IsStatic =false;
            newObj.$create().then(
                function (data, status) { 
        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success"); 
                    $state.go('Countries');
                     blockUI.stop();        


                },
                function (data, status) {
               blockUI.stop();        

                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
        blockUI.stop();

  	}	
}());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('editCountryDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate', 'CountryResource', 'ToastService',
            'CountryByIdPrepService', editCountryDialogController])

    function editCountryDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, CountryResource, ToastService, CountryByIdPrepService) {
        blockUI.start("Loading..."); 

                var vm = this; 
		vm.language = appCONSTANTS.supportedLanguage;
        vm.Country = CountryByIdPrepService; 
        vm.Close = function () {
            $state.go('Countries');
        }
        vm.UpdateCountry  = function () { 
            blockUI.start("Loading..."); 

                        var updateObj = new CountryResource();
            updateObj.countryId = vm.Country.countryId;
            updateObj.titleDictionary = vm.Country.titleDictionary;
		    updateObj.IsDeleted = false;
		    updateObj.IsStatic = false;
		    updateObj.$update().then(
                function (data, status) {
                    blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");

                     $state.go('Countries');

                },
                function (data, status) {
                    blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
        blockUI.stop();

        	}	
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('createRoleDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'RoleResource','PermissionResource', 'ToastService', '$rootScope', createRoleDialogController])

    function createRoleDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, RoleResource,PermissionResource,
        ToastService, $rootScope) {
        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage; 
        $scope.permissionList = [];
        BindPermissison();

        vm.close = function () {
            $state.go('Role');
        }

        vm.AddNewType = function () {
            blockUI.start("Loading..."); 

                        var newObj = new RoleResource();
            newObj.titleDictionary = vm.titleDictionary;
            newObj.Permissions = vm.selectedPermissions;
            newObj.IsDeleted = false;
            newObj.IsStatic = false;
            newObj.$create().then(
                function (data, status) {
                     blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");
                    $state.go('Role');

                },
                function (data, status) {
                    blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
        function BindPermissison() {
            blockUI.start("Loading..."); 

                        var k = PermissionResource.getAllPermissions({ pageSize: 20 }).$promise.then(function (results) {
                    vm.getPageData = results;
                    $scope.permissionList = vm.getPageData.results;
                blockUI.stop();

                                    },
                function (data, status) {
                blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
    }
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('DeliveryController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'DeliverysResource', 'deliverysPrepService', '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', '$uibModal', DeliveryController])
        ;


    function DeliveryController($rootScope, blockUI, $scope, $filter, $translate,
        $state, DeliverysResource, deliverysPrepService, $localStorage, authorizationService,
        appCONSTANTS, ToastService, $uibModal) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[10].children[0]).addClass("active")

        blockUI.start("Loading...");

        var vm = this;

        vm.showMore = function (element) {
            $(element.currentTarget).toggleClass("child-table-collapse");
        }
        vm.changeStatus = function (orderDetailsid, status) {
            var temp = new DeliverysResource();
            temp.$ChangeOrderStatus({ orderDetailsId: orderDetailsid, status: status }).then(function (results) {
                if (results = true)
                    refreshDeliverys();

                blockUI.stop();

            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });

        }
        $scope.totalCount = deliverysPrepService.totalCount;
        $scope.DeliveryList = deliverysPrepService;
        console.log($scope.DeliveryList);
        $scope.getTotal = function (delivery) {
            debugger;
            var total = 0;
            if (delivery.type == "3") {
                for (var i = 0; i < delivery.deliveryDetails.length; i++) {
                    var obj = delivery.deliveryDetails[i];
                    total += (obj.item.price);
                }
            }
            else if (delivery.type == "2") {
                for (var i = 0; i < delivery.deliveryDetails.length; i++) {
                    var obj = delivery.deliveryDetails[i];
                    total += (obj.meal.mealPrice);
                }
            }
            else if (delivery.type == "1") {
                total = 1500;
            }
            return total;
        }

        function refreshDeliverys() {
            blockUI.start("Loading...");

            var k = DeliverysResource.getAllDeliverys({ page: vm.currentPage }).$promise.then(function (results) {
                $scope.DeliveryList = results;
                blockUI.stop();

            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }


        function change(delivery) {

            var updateObj = new DeliverysResource();
            updateObj.DeliveryId = delivery.deliveryId;

            updateObj.isPaid = (delivery.isPaid == true ? false : true);
            updateObj.DeliveryDetails = delivery.deliveryDetails;
            updateObj.$update().then(
                function (data, status) {


                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    delivery.isPaid = updateObj.isPaid;

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );

        }
        $scope.UpdateDelivery = function (delivery) {
            debugger; change(delivery);
        }


        vm.currentPage = 1;
        $scope.changePage = function (page) {
            vm.currentPage = page;
            refreshDeliverys();
        }
        blockUI.stop();

        $scope.goToDetails = function (deliveryModel) {

            var modalContent = $uibModal.open({
                url: '/editdelivery/:delivery',
                templateUrl: './app/GlobalAdmin/Delivery/templates/edit.html',
                controller: 'editDeliveryDialogController',
                'controllerAs': 'editDeliveryCtrl',
                resolve: {
                    delivery: function () { return deliveryModel }

                },
                data: {
                    permissions: {
                        only: ['3'],
                        redirectTo: 'root'
                    }
                }

            });
        }

    }

})();(function () {
    angular
      .module('home')
        .factory('DeliverysResource', ['$resource', 'appCONSTANTS', DeliverysResource])
     
    function DeliverysResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Orders/', {}, {
            getAllDeliverys: { method: 'GET', url: appCONSTANTS.API_URL + 'Orders/GetAllOrdersForDelivery', useToken: true, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Orders/EditDelivery', useToken: true },
            getDelivery: { method: 'GET', url: appCONSTANTS.API_URL + 'Orders/GetDeliveryById/:DeliveryId', useToken: true } ,
            getFullDelivery: { method: 'GET', url: appCONSTANTS.API_URL + 'Orders/GetFullDeliveryById/:DeliveryId', useToken: true } ,  
            GetOrderItems: { method: 'GET', url: appCONSTANTS.API_URL + 'Orders/GetOrderItems/:orderId:programId', useToken: true } ,
            ChangeOrderStatus: { method: 'POST', url: appCONSTANTS.API_URL + 'Orders/ChangeOrderDetailsStatus/', useToken: true } 
        })
    } 
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('createRoleDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'RoleResource','PermissionResource', 'ToastService', '$rootScope', createRoleDialogController])

    function createRoleDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, RoleResource,PermissionResource,
        ToastService, $rootScope) {
        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage; 
        $scope.permissionList = [];
        BindPermissison();

        vm.close = function () {
            $state.go('Role');
        }

        vm.AddNewType = function () {
            blockUI.start("Loading..."); 

                        var newObj = new RoleResource();
            newObj.titleDictionary = vm.titleDictionary;
            newObj.Permissions = vm.selectedPermissions;
            newObj.IsDeleted = false;
            newObj.IsStatic = false;
            newObj.$create().then(
                function (data, status) {
                     blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");
                    $state.go('Role');

                },
                function (data, status) {
                    blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
        function BindPermissison() {
            blockUI.start("Loading..."); 

                        var k = PermissionResource.getAllPermissions({ pageSize: 20 }).$promise.then(function (results) {
                    vm.getPageData = results;
                    $scope.permissionList = vm.getPageData.results;
                blockUI.stop();

                                    },
                function (data, status) {
                blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
    }
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('KitchenController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'PickupsResource', 'kitchensResource', 'kitchensPrepService', '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', '$uibModal', KitchenController])
        ;


    function KitchenController($rootScope, blockUI, $scope, $filter, $translate,
        $state, PickupsResource, kitchensResource, kitchensPrepService, $localStorage, authorizationService,
        appCONSTANTS, ToastService, $uibModal) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[11].children[0]).addClass("active")

        blockUI.start("Loading...");

        var vm = this;

        vm.showMore = function (element, model) {

            if (model.ItemList != null) return;

            var programId = 0;
            var dayNumber = 0;
            if (model.isProgram)
                programId = model.orderDetails[0].programId;
            if (model.isProgram)
                dayNumber = model.orderDetails[0].dayNumber;

            var temp = new kitchensResource();
            temp.$GetOrderItems({ orderId: model.orderId, programId: programId, dayNumber: dayNumber }).then(function (results) {
                debugger;
                model.ItemList = results.results;
                blockUI.stop();

            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });


            $(element.currentTarget).toggleClass("child-table-collapse");
        }
        vm.changeStatus = function (order, status) {
            debugger;
            if (order.isProgram) {
                var orderDetailsId = order.orderDetails[0].orderDetailId;
                updateOrderDetails(orderDetailsId, status);
            }
            else {
                updateOrder(order.orderId, status);
            }
        }
        function updateOrder(orderId, status) {

            var temp = new PickupsResource();
            temp.$ChangeOrderStatus({ orderId: orderId, status: status }).then(function (results) {
                if (results = true)
                    refreshkitchens();

                blockUI.stop();

            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });

        }
        function updateOrderDetails(orderDetailsId, status) {

            var temp = new kitchensResource();
            temp.$ChangeOrderStatus({ orderDetailsId: orderDetailsId, status: status }).then(function (results) {
                if (results = true)
                    refreshkitchens();

                blockUI.stop();

            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });

        }
        $scope.totalCount = kitchensPrepService.totalCount;
        $scope.kitchenList = kitchensPrepService;
        console.log($scope.kitchenList);
        $scope.getTotal = function (kitchen) {
            debugger;
            var total = 0;
            if (kitchen.type == "3") {
                for (var i = 0; i < kitchen.kitchenDetails.length; i++) {
                    var obj = kitchen.kitchenDetails[i];
                    total += (obj.item.price);
                }
            }
            else if (kitchen.type == "2") {
                for (var i = 0; i < kitchen.kitchenDetails.length; i++) {
                    var obj = kitchen.kitchenDetails[i];
                    total += (obj.meal.mealPrice);
                }
            }
            else if (kitchen.type == "1") {
                total = 1500;
            }
            return total;
        }

        function refreshkitchens() {
            blockUI.start("Loading...");

            var k = kitchensResource.getAllkitchens({ page: vm.currentPage }).$promise.then(function (results) {
                $scope.kitchenList = results;
                blockUI.stop();

            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }


        function change(kitchen) {

            var updateObj = new kitchensResource();
            updateObj.kitchenId = kitchen.kitchenId;

            updateObj.isPaid = (kitchen.isPaid == true ? false : true);
            updateObj.kitchenDetails = kitchen.kitchenDetails;
            updateObj.$update().then(
                function (data, status) {


                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    kitchen.isPaid = updateObj.isPaid;

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );

        }
        $scope.Updatekitchen = function (kitchen) {
            debugger; change(kitchen);
        }


        vm.currentPage = 1;
        $scope.changePage = function (page) {
            vm.currentPage = page;
            refreshkitchens();
        }
        blockUI.stop();

        $scope.goToDetails = function (kitchenModel) {

            var modalContent = $uibModal.open({
                url: '/editkitchen/:kitchen',
                templateUrl: './app/GlobalAdmin/kitchen/templates/edit.html',
                controller: 'editkitchenDialogController',
                'controllerAs': 'editkitchenCtrl',
                resolve: {
                    kitchen: function () { return kitchenModel }

                },
                data: {
                    permissions: {
                        only: ['3'],
                        redirectTo: 'root'
                    }
                }

            });
        }

    }

})();(function () {
    angular
      .module('home')
        .factory('kitchensResource', ['$resource', 'appCONSTANTS', kitchensResource])
     
    function kitchensResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Orders/', {}, {
            getAllkitchens: { method: 'GET', url: appCONSTANTS.API_URL + 'Orders/GetAllOrdersForKitchen', useToken: true, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Orders/Editkitchen', useToken: true },
            getkitchen: { method: 'GET', url: appCONSTANTS.API_URL + 'Orders/GetkitchenById/:kitchenId', useToken: true } ,
            getFullkitchen: { method: 'GET', url: appCONSTANTS.API_URL + 'Orders/GetFullkitchenById/:kitchenId', useToken: true } ,  
            GetOrderItems: { method: 'POST', url: appCONSTANTS.API_URL + 'Orders/GetOrderItems/', useToken: true } ,
            ChangeOrderStatus: { method: 'POST', url: appCONSTANTS.API_URL + 'Orders/ChangeOrderDetailsStatus/', useToken: true } 
        })
    } 
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('createRoleDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'RoleResource','PermissionResource', 'ToastService', '$rootScope', createRoleDialogController])

    function createRoleDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, RoleResource,PermissionResource,
        ToastService, $rootScope) {
        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage; 
        $scope.permissionList = [];
        BindPermissison();

        vm.close = function () {
            $state.go('Role');
        }

        vm.AddNewType = function () {
            blockUI.start("Loading..."); 

                        var newObj = new RoleResource();
            newObj.titleDictionary = vm.titleDictionary;
            newObj.Permissions = vm.selectedPermissions;
            newObj.IsDeleted = false;
            newObj.IsStatic = false;
            newObj.$create().then(
                function (data, status) {
                     blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");
                    $state.go('Role');

                },
                function (data, status) {
                    blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
        function BindPermissison() {
            blockUI.start("Loading..."); 

                        var k = PermissionResource.getAllPermissions({ pageSize: 20 }).$promise.then(function (results) {
                    vm.getPageData = results;
                    $scope.permissionList = vm.getPageData.results;
                blockUI.stop();

                                    },
                function (data, status) {
                blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
    }
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('editOrderDialogController', ['$scope', 'OrderByIdPrepService', 'OrdersResource', 'blockUI', '$http', '$filter', '$state', 'appCONSTANTS', '$translate', 'ToastService',
            editOrderDialogController])

    function editOrderDialogController($scope, OrderByIdPrepService, OrdersResource, blockUI, $http, $filter, $state, appCONSTANTS, $translate, ToastService) {
        var vm = this;
        vm.dateIsValid = false;

        vm.Order = OrderByIdPrepService;
        console.log(vm.Order);
        vm.language = appCONSTANTS.supportedLanguage;

        vm.Order.orderDate = vm.Order.orderDate + "Z"; 
        vm.Order.orderDate = $filter('date')(new Date(vm.Order.orderDate), "dd/MM/yyyy hh:mm a");
        
        vm.Order.orderStartDate = vm.Order.orderStartDate + "Z"; 
        vm.Order.orderStartDate = $filter('date')(new Date(vm.Order.orderStartDate), "dd/MM/yyyy hh:mm a");
      
      debugger;
        if (vm.Order.orderStartDate != null) {
            
    'use strict';

    angular
        .module('home')
        .controller('createRoleDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'RoleResource','PermissionResource', 'ToastService', '$rootScope', createRoleDialogController])

    function createRoleDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, RoleResource,PermissionResource,
        ToastService, $rootScope) {
        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage; 
        $scope.permissionList = [];
        BindPermissison();

        vm.close = function () {
            $state.go('Role');
        }

        vm.AddNewType = function () {
            blockUI.start("Loading..."); 

                        var newObj = new RoleResource();
            newObj.titleDictionary = vm.titleDictionary;
            newObj.Permissions = vm.selectedPermissions;
            newObj.IsDeleted = false;
            newObj.IsStatic = false;
            newObj.$create().then(
                function (data, status) {
                     blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('productAddSuccess'), "success");
                    $state.go('Role');

                },
                function (data, status) {
                    blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
        function BindPermissison() {
            blockUI.start("Loading..."); 

                        var k = PermissionResource.getAllPermissions({ pageSize: 20 }).$promise.then(function (results) {
                    vm.getPageData = results;
                    $scope.permissionList = vm.getPageData.results;
                blockUI.stop();

                                    },
                function (data, status) {
                blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
    }
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('editPickupDialogController', ['$scope', 'OrderByIdPrepService', 'OrdersResource', 'blockUI', '$http', '$filter', '$state', 'appCONSTANTS', '$translate', 'ToastService',
        editPickupDialogController])

    function editPickupDialogController($scope, OrderByIdPrepService, OrdersResource, blockUI, $http, $filter, $state, appCONSTANTS, $translate, ToastService) {
        var vm = this;
        vm.Order = OrderByIdPrepService;
        console.log(vm.Order);
        vm.language = appCONSTANTS.supportedLanguage;

        vm.Order.orderDate = vm.Order.orderDate + "Z";
        vm.Order.orderDate = $filter('date')(new Date(vm.Order.orderDate), "dd/MM/yyyy hh:mm a");
        if (vm.Order.orderStartDate != null) {
            vm.Order.orderStartDate = vm.Order.orderStartDate + "Z";
            vm.Order.orderStartDate = $filter('date')(new Date(vm.Order.orderStartDate), "dd/MM/yyyy hh:mm a");
        }




        vm.Close = function () {
            $state.go('Order');
        }
        vm.showMore = function (element) {
            $(element.currentTarget).toggleClass("child-table-collapse");
        }
        
    'use strict';

    angular
        .module('home')
        .controller('ProgramController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', '$stateParams', 'programPrepService', 'GetProgramResource', 'UpdateProgramResource', '$uibModal', ProgramController]);


    function ProgramController($rootScope, blockUI, $scope, $filter, $translate,
        $state, $localStorage, authorizationService,
        appCONSTANTS, ToastService, $stateParams, programPrepService, GetProgramResource, UpdateProgramResource, $uibModal) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[6].children[0]).addClass("active")


        var vm = this;
        $scope.programList = programPrepService;
        vm.language = appCONSTANTS.supportedLanguage;
        vm.programObject;

        $scope.totalCount = programPrepService.totalCount;
        vm.UpdateProgram = function (program) {
            change(program, false);
        }

        function confirmationDelete(model) {
            model.isDeleted = true;
            change(model, true);

        }

        vm.currentPage = 1;
        $scope.changePage = function (page) {
            vm.currentPage = page;
            refreshPrograms();
        }

        function change(program, isDeleted) {
            debugger;
            var updateObj = new UpdateProgramResource();
            updateObj.ProgramId = program.programId;
            if (!isDeleted)
                updateObj.isActive = (program.isActive == true ? false : true);
            updateObj.isDeleted = program.isDeleted;

            updateObj.$update().then(
                function (data, status) {
                    if (isDeleted)
                        refreshPrograms();

                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    program.isActive = updateObj.isActive;

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );

        }






        function refreshPrograms() {
            blockUI.start("Loading...");

            var k = GetProgramResource.gatAllPrograms({ page: vm.currentPage }).$promise.then(function (results) {
                $scope.programList = results;

                console.log($scope.programList);
                blockUI.stop();
            },
                function (data, status) {
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }

        vm.openDeleteDialog = function (model, name, id) {
            var modalContent = $uibModal.open({
                templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
                controller: 'confirmDeleteDialogController',
                controllerAs: 'deleteDlCtrl',
                resolve: {
                    model: function () { return model },
                    itemName: function () { return name },
                    itemId: function () { return id },
                    message: function () { return null },
                    callBackFunction: function () { return confirmationDelete }
                }

            });
        }
    }

})();
(function () {
  angular
    .module('home')
    .factory('UpdateProgramResource', ['$resource', 'appCONSTANTS', UpdateProgramResource])
    .factory('AddProgramResource', ['$resource', 'appCONSTANTS', AddProgramResource])
    .factory('GetDaysResource', ['$resource', 'appCONSTANTS', GetDaysResource])
    .factory('GetProgramDetailResource', ['$resource', 'appCONSTANTS', GetProgramDetailResource])
    .factory('GetProgramResource', ['$resource', 'appCONSTANTS', GetProgramResource])
    .factory('EditProgramByIdResource', ['$resource', 'appCONSTANTS', EditProgramByIdResource])
    .factory('UpdateProgramDetailsResource', ['$resource', 'appCONSTANTS', UpdateProgramDetailsResource])
    .factory('GetProgramByIdResource', ['$resource', 'appCONSTANTS', GetProgramByIdResource])
    ;

  function AddProgramResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Program/', {}, {
      create: { method: 'POST', useToken: true }
    })
  }

  function GetDaysResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Day/GetAllDays', {}, {
      gatAllDays: { method: 'GET', useToken: true, isArray: true }
    })
  }

  function GetProgramResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Program', {}, {
      gatAllPrograms: { method: 'GET', useToken: true }
    })
  }

  function EditProgramByIdResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Program/UpdateProgram', {}, {
      update: { method: 'POST', useToken: true }
    })
  }

  function UpdateProgramDetailsResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Program', {}, {
      updateProgramDetails: { method: 'POST', url: appCONSTANTS.API_URL + 'Program/UpdateProgramDetails/:programId/:dayCount/:mealCount', useToken: true }
    })
  }

  function GetProgramDetailResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Program', {}, {
      getProgramDetail: { method: 'GET', url: appCONSTANTS.API_URL + 'Program/GetAllProgramItems/:programId', useToken: true }
    })
  }

  function UpdateProgramResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Program', {}, {
      update: { method: 'POST', url: appCONSTANTS.API_URL + 'Program/EditProgram', useToken: true }
    })
  }

  function GetProgramByIdResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Program', {}, {
      getProgram: { method: 'GET', url: appCONSTANTS.API_URL + 'Program/GetProgramById/:ProgramId', useToken: true },

    })
  }
}());

(function () {
    'use strict';

    angular
        .module('home')
        .controller('addProgramController', ['$scope', 'blockUI', '$filter', '$translate',
            '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', '$stateParams',
            'AddProgramResource', 'daysPrepService', 'settingsPrepService', 'itemsssPrepService', addProgramController]);


    function addProgramController($scope, blockUI, $filter, $translate, $state, $localStorage, authorizationService,
        appCONSTANTS, ToastService, $stateParams, AddProgramResource, daysPrepService, settingsPrepService, itemsssPrepService) {



        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;
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
        vm.ProgramTotalPrice = 0;
        vm.dayList = daysPrepService;
        $scope.itemsssPrepService = itemsssPrepService;
        vm.itemList = [];
        vm.SelectedDays = [];
        vm.progCountList = [];

        vm.Setting = settingsPrepService;

        vm.deletedItem = false;

        vm.ConvertToNumber = function () {
            vm.daysCount = parseInt(vm.ProgramDaysCount, 10);
            vm.mealsCount = parseInt(vm.MealPerDay, 10);
        }

        $scope.discountChange = function () {
            vm.ProgramTotalPrice = vm.totalPrice - (vm.totalPrice * (vm.ProgramDiscount/100));
            vm.ProgramTotalPriceBefore = vm.totalPrice;
        }

        $scope.getData = function (itemModel, day, meal) {


            var differntMeal = vm.itemList.filter(x => (x.dayNumber == day && x.mealNumberPerDay != meal) || (x.dayNumber != day));
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
            vm.ProgramTotalPrice = vm.totalPrice - (vm.totalPrice * (vm.ProgramDiscount/100));
            vm.ProgramTotalPriceBefore = vm.totalPrice;
        }


        vm.currentStep = 1;
        vm.steps = [
            {
                step: 1,
                name: "Step 1",
                template: "./app/GlobalAdmin/Program/templates/newStepOne.html"
            },
            {
                step: 2,
                name: "Step 2",
                template: "./app/GlobalAdmin/Program/templates/newStepTwo.html"
            },
            {
                step: 3,
                name: "Step 3",
                template: "./app/GlobalAdmin/Program/templates/newStepThree.html"
            }
        ];
        vm.user = {};

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
                    data.push(tag);
                }
            });

            $(".select-tags").select2({
                tags: false,
                theme: "bootstrap",
            })
        }

        vm.DaysNotValid = false;
        vm.ValidateExcludes = function () {
            if (vm.SelectedDays.length == 7) {
                vm.DaysNotValid = true;
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
            newProgram.days = vm.SelectedDays;
            newProgram.price = vm.ProgramTotalPrice;
            newProgram.$create().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");
                    $state.go('program');
                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }


    }

})();
(function () {
    'use strict';

    angular
        .module('home')
        .controller('editProgramController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', '$stateParams','programByIdPrepService', 'EditProgramByIdResource', '$uibModal', editProgramController]);


    function editProgramController($rootScope, blockUI, $scope, $filter, $translate,
        $state, $localStorage, authorizationService,
        appCONSTANTS, ToastService, $stateParams,programByIdPrepService, EditProgramByIdResource, $uibModal) {



        var vm = this;
        vm.programModel=programByIdPrepService;
        vm.language = appCONSTANTS.supportedLanguage;

            vm.editProgram = function () {
            var program = new EditProgramByIdResource();
            program.programDiscount = vm.programModel.programDiscount;
            program.programNameDictionary = vm.programModel.programNameDictionary;
            program.programDescriptionDictionary = vm.programModel.programDescriptionDictionary;
            program.programId = vm.programModel.programId;


            program.$update().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('EditedSuccessfully'), "success");

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }


       }

})();
(function () {
    'use strict';

    angular
        .module('home')
        .controller('editProgramMealController', ['$scope', 'blockUI', '$filter', '$translate',
            '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', '$stateParams'
            , 'ProgramId', 'DayCount', 'MealCount', 'progDetailsPrepService', 'itemsssPrepService'
            , '$uibModalInstance', 'callBackFunction', 'UpdateProgramDetailsResource', editProgramMealController]);


    function editProgramMealController($scope, blockUI, $filter, $translate,
        $state, $localStorage, authorizationService, appCONSTANTS, ToastService, $stateParams,
        ProgramId, DayCount, MealCount, progDetailsPrepService, itemsssPrepService,
        $uibModalInstance, callBackFunction, UpdateProgramDetailsResource) {

        $scope.selectedLanguage = $localStorage.language;
        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;

        $scope.itemsssPrepService = itemsssPrepService;
        $scope.itemList = [];

        vm.listOfDetails = progDetailsPrepService.programDetails;
        vm.testItem = vm.listOfDetails.filter(x => (x.dayNumber == DayCount && x.mealNumberPerDay == MealCount));


        var i;
        for (i = 0; i < vm.testItem.length; i++) {
            var indexRate = $scope.itemsssPrepService.indexOf($filter('filter')($scope.itemsssPrepService, { 'itemId': vm.testItem[i].itemId }, true)[0]);
            $scope.itemList.push($scope.itemsssPrepService[indexRate]);

        }



        vm.close = function () {
            $uibModalInstance.dismiss();
        }


        vm.UpdateProgram = function () {
            var test = new UpdateProgramDetailsResource();
            test.items = $scope.itemList;
            test.programDays = DayCount;
            test.noOfMeals = MealCount;
            test.programId = ProgramId;

            test.$updateProgramDetails().then(
                function (data, status) {
                    $uibModalInstance.dismiss();
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('EditedSuccessfully'), "success");
                    callBackFunction();

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );

        }
    }

})();
(function () {
    'use strict';

    angular
        .module('home')
        .controller('programDetailsController', ['$scope', 'blockUI', '$filter', '$translate',
            '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', '$stateParams', 'progDetailsPrepService'
            , 'itemsssPrepService', '$uibModal', 'GetProgramDetailResource', programDetailsController]);


    function programDetailsController($scope, blockUI, $filter, $translate, $state, $localStorage, authorizationService,
        appCONSTANTS, ToastService, $stateParams, progDetailsPrepService,
        itemsssPrepService, $uibModal, GetProgramDetailResource) {

         var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;

        vm.programDetails = progDetailsPrepService;
        console.log("sdsdsd");
        console.log(vm.programDetails);
        vm.programId;

        vm.ShowProgramMeal = function (programId, dayCount, mealCount) {
            vm.programId = programId;
            $uibModal.open({
                templateUrl: './app/GlobalAdmin/Program/templates/editProgramMeal.html',
                controller: 'editProgramMealController',
                controllerAs: 'editProgramMealCtrl',
                resolve: {
                    itemsssPrepService: function () { return itemsssPrepService; },
                    ProgramId: function () { return programId },
                    DayCount: function () { return dayCount },
                    MealCount: function () { return mealCount },
                    progDetailsPrepService: function () { return progDetailsPrepService },
                    callBackFunction: function () { return refreshPrograms }
                }
            });
        }

        function refreshPrograms() {
            blockUI.start("Loading...");

            var k = GetProgramDetailResource.getProgramDetail({ programId: vm.programId }).$promise.then(function (results) {
                vm.programDetails = results;
                blockUI.stop();

            },
                function (data, status) {
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }

     }

})();
(function () {
    'use strict';

    angular
        .module('home')
        .controller('RegionController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'RegionResource', 'RegionsPrepService',  '$stateParams', 'appCONSTANTS',
            'ToastService','CountryByIdPrepService', RegionController]);


    function RegionController($rootScope, blockUI, $scope, $filter, $translate,
        $state, RegionResource, RegionsPrepService, $stateParams, appCONSTANTS, ToastService,CountryByIdPrepService) { 

        
    'use strict';

    angular
        .module('home')
        .controller('createRoleDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'RoleResource','PermissionResource', 'ToastService', '$rootScope', createRoleDialogController])

    function createRoleDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, RoleResource,PermissionResource,
        ToastService, $rootScope) {
        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage; 
        $scope.permissionList = [];
        BindPermissison();

        vm.close = function () {
            $state.go('Role');
        }

        vm.AddNewType = function () {
            blockUI.start("Loading..."); 

                        var newObj = new RoleResource();
            newObj.titleDictionary = vm.titleDictionary;
            newObj.Permissions = vm.selectedPermissions;
            newObj.IsDeleted = false;
            newObj.IsStatic = false;
            newObj.$create().then(
                function (data, status) {
                     blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");
                    $state.go('Role');

                },
                function (data, status) {
                    blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
        function BindPermissison() {
            blockUI.start("Loading..."); 

                        var k = PermissionResource.getAllPermissions({ pageSize: 20 }).$promise.then(function (results) {
                    vm.getPageData = results;
                    $scope.permissionList = vm.getPageData.results;
                blockUI.stop();

                                    },
                function (data, status) {
                blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
    }
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('editRoleDialogController', ['$scope', 'blockUI', '$http', '$filter','$state', 'appCONSTANTS', '$translate', 'RoleResource', 'PermissionResource','PermissionPrepService', 'ToastService',
            'RoleByIdPrepService', editRoleDialogController])

    function editRoleDialogController($scope, blockUI, $http,$filter, $state, appCONSTANTS, $translate, RoleResource, PermissionResource,PermissionPrepService, ToastService, RoleByIdPrepService) {
        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;
        vm.permissionList = PermissionPrepService.results;
        vm.Role = RoleByIdPrepService;
        console.log(vm.Role); 
        vm.selectedPermissions = [];
        vm.Close = function () {
            $state.go('Role');
        }
        var i;
        for (i = 0; i < vm.Role.permissions.length; i++) {
            var indexRate = vm.permissionList.indexOf($filter('filter')(vm.permissionList, { 'permissionId': vm.Role.permissions[i].permissionId }, true)[0]);
            vm.selectedPermissions.push(vm.permissionList[indexRate]);

        }




               vm.UpdateType = function () {
            blockUI.start("Loading..."); 
            console.log(vm.Role);
            var updateObj = new RoleResource();
            updateObj.roleId = vm.Role.roleId;
            updateObj.permissions = vm.selectedPermissions;
            updateObj.titleDictionary = vm.Role.titleDictionary;
            updateObj.isDeleted = vm.Role.IsDeleted;
            updateObj.isActive = vm.Role.isActive;
            updateObj.$update().then(
                function (data, status) {
                blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");

                    $state.go('Role');

                },
                function (data, status) {
                blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }

           }
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('RoleController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'RoleResource', 'RolePrepService', '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', '$uibModal', RoleController]);


    function RoleController($rootScope, blockUI, $scope, $filter, $translate,
        $state, RoleResource, RolePrepService, $localStorage, authorizationService,
        appCONSTANTS, ToastService, $uibModal) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[1].children[0]).addClass("active")

        blockUI.start("Loading...");

        var vm = this;

        $scope.totalCount = RolePrepService.totalCount;
        $scope.RoleList = RolePrepService;
        function refreshRoles() {
            blockUI.start("Loading...");

            var k = RoleResource.getAllRoles({ page: vm.currentPage }).$promise.then(function (results) {
                $scope.RoleList = results;
                blockUI.stop();

            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }


        function change(role, isDeleted) {
            debugger;
            var updateObj = new RoleResource();
            updateObj.RoleId = role.roleId;
            if (!isDeleted)
                updateObj.isActive = (role.isActive == true ? false : true);
            updateObj.isDeleted = role.isDeleted;
            updateObj.permissions = role.permissions;
            updateObj.ischange = true;

            updateObj.$update().then(
                function (data, status) {

            if (isDeleted)
                        refreshRoles();

                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    role.isActive = updateObj.isActive;

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );

        }
        vm.UpdateRole = function (role) {
            change(role, false);
        }

        function confirmationDelete(model) {
            model.isDeleted = true;
            change(model, true);

        }
        vm.openDeleteDialog = function (model, name, id) {
            debugger;
            var modalContent = $uibModal.open({
                templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
                controller: 'confirmDeleteDialogController',
                controllerAs: 'deleteDlCtrl',
                resolve: {
                    model: function () { return model },
                    itemName: function () { return name },
                    itemId: function () { return id },
                    message: function () { return null },
                    callBackFunction: function () { return confirmationDelete }
                }

            });
        }


        vm.currentPage = 1;
        $scope.changePage = function (page) {
            vm.currentPage = page;
            refreshRoles();
        }
        blockUI.stop();

    }

})();(function () {
    angular
      .module('home')
        .factory('RoleResource', ['$resource', 'appCONSTANTS', RoleResource])
        .factory('PermissionResource', ['$resource', 'appCONSTANTS', PermissionResource])

    function RoleResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Roles/', {}, {
            getAllRoles: { method: 'GET', url: appCONSTANTS.API_URL + 'Roles/GetAllRoles', useToken: true, params: { lang: '@lang' } },
            getAllActivateRoles: { method: 'GET', url: appCONSTANTS.API_URL + 'Roles/GetAllActivateRoles', useToken: true, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Roles/EditRole', useToken: true },
            getRole: { method: 'GET', url: appCONSTANTS.API_URL + 'Roles/GetRoleById/:RoleId', useToken: true }  

        })
    }
    function PermissionResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Permissions/', {}, {
            getAllPermissions: { method: 'GET', url: appCONSTANTS.API_URL + 'Permissions/GetAllPermissions', useToken: true, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Permissions/EditRole', useToken: true },
            getRole: { method: 'GET', url: appCONSTANTS.API_URL + 'Permissions/GetRoleById/:RoleId', useToken: true }

        })
    }
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('callCenterController', ['$scope', 'blockUI', '$filter', '$translate',
            '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', '$stateParams'
            , 'CountriesPrepService', 'UserResource', 'CityResource', 'AreaResource', 'RegionResource'
            , callCenterController])

        ;


    function callCenterController($scope, blockUI, $filter, $translate, $state, $localStorage, authorizationService,
        appCONSTANTS, ToastService, $stateParams, CountriesPrepService, UserResource, CityResource, AreaResource
        , RegionResource) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[4].children[0]).addClass("active")


        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;

        vm.counties = [];
        vm.userOrder;
        $scope.flag = false;

        vm.orderType = {
            type: 'item'
        };
        vm.counties.push({ countryId: 0, titleDictionary: { "en": "Select Country", "ar": "اختار بلد" } });
        vm.selectedCountryId = 0;
        vm.counties = vm.counties.concat(CountriesPrepService.results)

        $scope.phoneNumbr = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;
        $scope.userObj = "";
        $scope.selectedType = "";
        $scope.userTypeList = [];

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


        vm.currentStep = 2;
        vm.steps = [
            {
                step: 1,
                nameEn: "Register User",
                nameAr: "تسجيل عميل",
                template: "./app/GlobalAdmin/callCenter/templates/callCenterStepOne.html"
            },
            {
                step: 2,
                nameEn: "Order",
                nameAr: "طلب",
                template: "./app/GlobalAdmin/callCenter/templates/callCenterStepTwo.html"
            }
        ];
        vm.user = {};

        vm.gotoStep = function (newStep) {
            vm.currentStep = newStep;
        }

        vm.Phone = localStorage.getItem('Phone');

        vm.ValidateUser = function () {
            blockUI.start("Loading...");

            var k = UserResource.validate({ phone: vm.Phone }).$promise.then(function (results) {
                vm.userOrder = results;
                $scope.flag = true;
                localStorage.setItem('Phone', vm.Phone);
                ToastService.show("right", "bottom", "fadeInUp", $translate.instant('ClientFound'), "success");
                blockUI.stop();

            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('ClientNotFound'), "error");
                });
        }
        $scope.checkValidation = function(){
            $scope.flag = false;
        }


                        vm.MakeOrder = function () {
            if (vm.orderType.type == "item") {
                localStorage.setItem('ClientId', vm.userOrder.userId);
                $state.go('orderItem');
            }
            else if (vm.orderType.type == "meal") {
                localStorage.setItem('ClientId', vm.userOrder.userId);
                $state.go('orderMeal');
            }

            else if (vm.orderType.type == "program") {
                localStorage.setItem('ClientId', vm.userOrder.userId);
                localStorage.setItem('BranchId', vm.userOrder.branchId);
                $state.go('orderProgram');
            }
            else if (vm.orderType.type == "customizeProgram") {
                localStorage.setItem('ClientId', vm.userOrder.userId);
                localStorage.setItem('BranchId', vm.userOrder.branchId);
                $state.go('orderCustomizeProgram');
            }
        }

        vm.AddNewclient = function () {
            blockUI.start("Loading...");

            var newClient = new UserResource();
            newClient.FirstName = vm.FirstName;
            newClient.LastName = vm.LastName;
            newClient.Email = vm.Email;
            newClient.Phone = vm.Phone;
            newClient.Password = vm.Phone;
            newClient.IsActive = true;
            newClient.floor = vm.FLoor;
            newClient.appartmentNo = vm.AppartmentNo;
            newClient.description = vm.AddressDescription;
            newClient.isAddress = true;
            newClient.code = 100;
            newClient.branchId = vm.branchList[0].branchId;
            vm.branchList
            newClient.$create().then(
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('ClientAddSuccess'), "success");

                    localStorage.setItem('data', JSON.stringify(data.userId));
                    $state.go('callCenter');

                },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }

        vm.getStepTemplate = function () {
            for (var i = 0; i < vm.steps.length; i++) {
                if (vm.currentStep == vm.steps[i].step) {
                    return vm.steps[i].template;
                }
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
            newProgram.days = vm.SelectedDays;
            newProgram.$create().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");


                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }


    }

}
)();
(function () {
    angular
        .module('home')
        .factory('OrderResource', ['$resource', 'appCONSTANTS', OrderResource])

    function OrderResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Orders', {}, {
            createOrder: { method: 'POST', url: appCONSTANTS.API_URL + 'Orders/CreateOrder', useToken: true }, 
            getMealItems: { method: 'GET', url: appCONSTANTS.API_URL + 'Meals/GetMealItems/:MealId', useToken: true, isArray:true },             
            getUserAddresses: { method: 'GET', url: appCONSTANTS.API_URL + 'Address/GetUserAddresses/:userId', useToken: true, isArray:true },             
        })
    }

}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('orderCustomizeProgramcontroller', ['$scope', 'blockUI', '$filter', '$translate',
            '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', '$stateParams',
            'AddProgramResource', 'daysPrepService', 'settingsPrepService', 'itemsssPrepService'
            , 'RegionResource', 'CityResource', 'AreaResource', 'CountriesPrepService', 'OrderResource', 'BranchResource', orderCustomizeProgramcontroller]);


    function orderCustomizeProgramcontroller($scope, blockUI, $filter, $translate, $state, $localStorage, authorizationService,
        appCONSTANTS, ToastService, $stateParams, AddProgramResource, daysPrepService, settingsPrepService, itemsssPrepService
        , RegionResource, CityResource, AreaResource, CountriesPrepService, OrderResource, BranchResource) {



        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;

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
        vm.ProgramTotalPrice = 0;
        vm.dayList = daysPrepService;
        $scope.itemsssPrepService = itemsssPrepService;
        vm.itemList = [];
        console.log(vm.itemList);
        vm.SelectedDays = [];
        vm.progCountList = [];

        vm.Setting = settingsPrepService;

        vm.orderType = {
            type: 'item'
        };

        vm.counties = [];
        vm.clientId = localStorage.getItem('ClientId');
        vm.branchId = localStorage.getItem('BranchId');


        vm.GetBranchDelivery = function () {
            var k = BranchResource.getBranch({ branchId: vm.branchId }).$promise.then(function (results) {
                vm.DeliveryFees = results.deliveryPrice;
                blockUI.stop();

            },
                function (data, status) {
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }

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
            vm.ProgramTotalPrice = (vm.totalPrice + vm.DeliveryFees) - (vm.totalPrice * (vm.ProgramDiscount/100));
            vm.ProgramTotalPriceBefore = vm.totalPrice + vm.DeliveryFees;
        }

        $scope.getData = function (itemModel, day, meal) {
            var differntMeal = vm.itemList.filter(x => (x.dayNumber == day && x.mealNumberPerDay != meal) || (x.dayNumber != day));
            vm.itemList = [];
            vm.itemList = angular.copy(differntMeal);

            itemModel.forEach(element => {
                element.dayNumber = day;
                element.mealNumberPerDay = meal;
                vm.itemList.push(element);
            });

            console.log(vm.itemList);

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
            vm.ProgramTotalPrice = (vm.totalPrice + vm.DeliveryFees) - (vm.totalPrice * (vm.ProgramDiscount/100));
            vm.ProgramTotalPriceBefore = vm.totalPrice + vm.DeliveryFees;
        }
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



        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;

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
            order.day = $('#startdate').val();

            order.userId = vm.clientId; 
            order.type = "Item";

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
(function () {
    'use strict';

    angular
        .module('home')
        .controller('orderMealscontroller', ['$scope', 'blockUI', '$filter', '$translate',
            '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', '$stateParams'
            , 'mealsPrepService', 'RegionResource', 'CityResource', 'AreaResource', 'CountriesPrepService'
            , 'OrderResource', 'MealResource', orderMealscontroller]);


    function orderMealscontroller($scope, blockUI, $filter, $translate, $state, $localStorage, authorizationService, appCONSTANTS, ToastService
        , $stateParams, mealsPrepService, RegionResource, CityResource, AreaResource
        , CountriesPrepService, OrderResource, MealResource) {



        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;

        $scope.itemModel = [];
        vm.meal;
        vm.mealItemss;
        $scope.mealsPrepService = mealsPrepService;
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

        vm.TotalPrice = 0;
        $scope.getData = function (itemModel) {
            vm.itemList = [];
            itemModel.forEach(element => {
                vm.itemList.push(element);
                vm.TotalPrice += element.totalPrice;
            });


                    }

        vm.mealSearch = function () {
            var k = OrderResource.getMealItems({mealId:vm.meal.mealId}).$promise.then(function (results) {
                vm.mealItemss = results;
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
            } else if (!$scope.orderMealForm.isInValid) {
                vm.dateIsValid = true;
                $scope.$apply();
            }
        }

        vm.Order = function () {
            blockUI.start("Loading...");

            var order = new OrderResource();

            order.meals = vm.itemList;
            order.isByAdmin = true;
            order.branchId = vm.selectedBranchId;
            order.userId = vm.clientId;
            order.day = $('#startdate').val();
            order.type = "Meal";

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
(function () {
    'use strict';

    angular
        .module('home')
        .controller('orderProgramscontroller', ['$scope', 'blockUI', '$filter', '$translate',
            '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', '$stateParams'
            , 'programsPrepService', 'RegionResource', 'CityResource', 'AreaResource', 'CountriesPrepService'
            , 'OrderResource', 'GetProgramDetailResource', orderProgramscontroller]);


    function orderProgramscontroller($scope, blockUI, $filter, $translate, $state, $localStorage, authorizationService, appCONSTANTS, ToastService
        , $stateParams, programsPrepService, RegionResource, CityResource, AreaResource
        , CountriesPrepService, OrderResource, GetProgramDetailResource) {



        var vm = this;
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

        vm.TotalPrice = 0;
        $scope.getData = function (itemModel) {
            vm.itemList = [];
            vm.itemList.push(itemModel);
            vm.TotalPrice += itemModel.price;
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
            order.userId = vm.clientId;
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
(function () {
    'use strict';

    angular
        .module('home')
        .controller('dashboardController', ['blockUI', '$scope', '$state',
            '$translate', 'dashboardResource', 'QuestionResource', 'TicketDashboardPrepService',
            'AnswerQuestionPrepService', '$filter', 'allcategoryTypePrepService', 'AnswerQuestionResource', 'CountriesPrepService',
            'BranchManagerPrepService', 'TechnasianPrepService', 'DepartmentPrepService',
            'RegionResource', 'CityResource', 'AreaResource', 'UsersAnswersQuestionPrepService', dashboardController]);

    function dashboardController(blockUI, $scope, $state,
        $translate, dashboardResource, QuestionResource, TicketDashboardPrepService,
        AnswerQuestionPrepService, $filter, allcategoryTypePrepService, AnswerQuestionResource, CountriesPrepService,
        BranchManagerPrepService, TechnasianPrepService, DepartmentPrepService,
        RegionResource, CityResource, AreaResource, UsersAnswersQuestionPrepService) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[10].children[0]).addClass("active")
        blockUI.start("Loading...");

        var vm = this;

        function init() {
            vm.ticketsFilter = [
                {
                    name: $translate.instant('Country'),
                    value: "country"
                },
                {
                    name: $translate.instant('Region'),
                    value: "region"
                },
                {
                    name: $translate.instant('City'),
                    value: "city"
                },
                {
                    name: $translate.instant('Area'),
                    value: "area"
                },
                {
                    name: $translate.instant('Branch'),
                    value: "branch"
                },
                {
                    name: $translate.instant('Department'),
                    value: "department"
                },
                {
                    name: $translate.instant('CategoryLbl'),
                    value: "category"
                }
            ]
            vm.selectedTicketFilter = "branch"
            vm.options = {
                chart: {
                    type: 'multiBarChart',
                    height: 300,
                    margin: {
                        top: 20,
                        right: 20,
                        bottom: 65,
                        left: 50
                    },
                    stacked: true,

                    duration: 100,
                    xAxis: {
                        rotateLabels: 30
                    },
                    yAxis: {
                        axisLabel: $translate.instant('ticketsCount'),
                        axisLabelDistance: -10,

                    }
                }
            };
            loadTicketDashboard(TicketDashboardPrepService);
            vm.questionList = AnswerQuestionPrepService.results;
            vm.categoryTypes = [];
            vm.selectedCategoryType = { categoryTypeId: 0, titleDictionary: { "en": "All", "ar": "كل" } };
            vm.categoryTypes.push(vm.selectedCategoryType);
            vm.categoryTypes = vm.categoryTypes.concat(allcategoryTypePrepService.results)

            vm.countiesSurvey = [];
            vm.selectedCountrySurvey = { countryId: 0, titleDictionary: { "en": "All Countries", "ar": "كل البلاد" } };
            vm.countiesSurvey.push(vm.selectedCountrySurvey);
            vm.countiesSurvey = vm.countiesSurvey.concat(CountriesPrepService.results)

            vm.selectedRegionSurvey = { regionId: 0, titleDictionary: { "en": "All Regions", "ar": "كل الأقاليم" } };
            vm.regionsSurvey = [];
            vm.regionsSurvey.push(vm.selectedRegionSurvey);
            vm.selectedCitySurvey = { cityId: 0, titleDictionary: { "en": "All Cities", "ar": "كل المدن" } };
            vm.citiesSurvey = [];
            vm.citiesSurvey.push(vm.selectedCitySurvey);
            vm.selectedAreaSurvey = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
            vm.areaListSurvey = [];
            vm.areaListSurvey.push(vm.selectedAreaSurvey);
            vm.selectedBranchSurvey = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
            vm.branchListSurvey = [];
            vm.branchListSurvey.push(vm.selectedBranchSurvey);

            vm.selectedDepartmentSurvey = { departmentId: 0, titleDictionary: { "en": "All Departments", "ar": "كل الاقسام" } };
            vm.departmentsSurvey = [];
            vm.departmentsSurvey.push(vm.selectedDepartmentSurvey);
            vm.departmentsSurvey = vm.departmentsSurvey.concat(DepartmentPrepService.results)
            vm.selectedCategorySurvey = { categoryId: 0, titleDictionary: { "en": "All Categories", "ar": "كل الفئات" } };
            vm.categoriesSurvey = [];
            vm.categoriesSurvey.push(vm.selectedCategorySurvey);

            vm.selectedAnswersUser = { userId: 0, userName: $translate.instant('allUsers') };
            vm.AnswersUsers = [];
            vm.AnswersUsers.push(vm.selectedAnswersUser);
            vm.AnswersUsers = vm.AnswersUsers.concat(UsersAnswersQuestionPrepService)

            vm.counties = [];
            vm.selectedCountry = { countryId: 0, titleDictionary: { "en": "All Countries", "ar": "كل البلاد" } };
            vm.counties.push(vm.selectedCountry);
            vm.counties = vm.counties.concat(CountriesPrepService.results)

            vm.selectedRegion = { regionId: 0, titleDictionary: { "en": "All Regions", "ar": "كل الأقاليم" } };
            vm.regions = [];
            vm.regions.push(vm.selectedRegion);
            vm.selectedCity = { cityId: 0, titleDictionary: { "en": "All Cities", "ar": "كل المدن" } };
            vm.cities = [];
            vm.cities.push(vm.selectedCity);
            vm.selectedArea = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
            vm.areaList = [];
            vm.areaList.push(vm.selectedArea);
            vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
            vm.branchList = [];
            vm.branchList.push(vm.selectedBranch);

            vm.selectedDepartment = { departmentId: 0, titleDictionary: { "en": "All Departments", "ar": "كل الاقسام" } };
            vm.departments = [];
            vm.departments.push(vm.selectedDepartment);
            vm.departments = vm.departments.concat(DepartmentPrepService.results)
            vm.selectedCategory = { categoryId: 0, titleDictionary: { "en": "All Categories", "ar": "كل الفئات" } };
            vm.categories = [];
            vm.categories.push(vm.selectedCategory);

            vm.selectedBranchManager = { userId: 0, userName: $translate.instant('allBranchesM') };
            vm.BranchManagers = [];
            vm.BranchManagers.push(vm.selectedBranchManager);
            vm.BranchManagers = vm.BranchManagers.concat(BranchManagerPrepService.results)
            vm.selectedTechnician = { userId: 0, userName: $translate.instant('allTechnasian') };
            vm.Technicians = [];
            vm.Technicians.push(vm.selectedTechnician);
            vm.Technicians = vm.Technicians.concat(TechnasianPrepService.results)

        }
        vm.countryChange = function () {
            vm.selectedRegion = { regionId: 0, titleDictionary: { "en": "All Regions", "ar": "كل الأقاليم" } };
            vm.selectedCity = { cityId: 0, titleDictionary: { "en": "All Cities", "ar": "كل المدن" } };
            vm.selectedArea = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
            vm.regions = [];
            vm.cities = [vm.selectedCity];
            vm.areaList = [vm.selectedArea];
            vm.regions.push(vm.selectedRegion);

            vm.branchList = [];
            vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
            vm.branchList.push(vm.selectedBranch);
            RegionResource.getAllRegions({ countryId: vm.selectedCountry.countryId, pageSize: 0 }).$promise.then(function (results) {

                vm.regions = vm.regions.concat(results.results);
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
            blockUI.stop();
        }
        vm.regionChange = function () {
            if (vm.selectedRegion.regionId != undefined) {
                vm.cities = [];
                vm.areaList = [];
                vm.selectedCity = { cityId: 0, titleDictionary: { "en": "All Cities", "ar": "كل المدن" } };
                vm.selectedArea = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
                vm.cities.push(vm.selectedCity);
                vm.areaList = [vm.selectedArea];

                vm.branchList = [];
                vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
                vm.branchList.push(vm.selectedBranch);
                CityResource.getAllCities({ regionId: vm.selectedRegion.regionId, pageSize: 0 }).$promise.then(function (results) {

                    vm.cities = vm.cities.concat(results.results);
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
        vm.cityChange = function () {
            if (vm.selectedCity.cityId != undefined) {
                vm.areaList = [];
                vm.selectedArea = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
                vm.areaList.push(vm.selectedArea);

                vm.branchList = [];
                vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
                vm.branchList.push(vm.selectedBranch);
                AreaResource.getAllAreas({ cityId: vm.selectedCity.cityId, pageSize: 0 }).$promise.then(function (results) {
                    vm.areaList = vm.areaList.concat(results.results);
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
        vm.areaChange = function () {
            vm.branchList = [];
            vm.selectedBranch = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
            vm.branchList.push(vm.selectedBranch);
            if (vm.selectedArea.areaId > 0)
                vm.branchList = vm.branchList.concat(vm.selectedArea.branches);
        }

        vm.departmentChange = function () {

            vm.categories = [];
            vm.selectedCategory = { categoryId: 0, titleDictionary: { "en": "All Categories", "ar": "كل الفئات" } };
            vm.categories.push(vm.selectedCategory);
            if (vm.selectedDepartment.departmentId > 0)
                vm.categories = vm.categories.concat(vm.selectedDepartment.categories);
        }
        vm.countryId = 0;
        vm.regionId = 0;
        vm.cityId = 0;
        vm.areaId = 0;
        vm.branchId = 0;
        vm.departmentId = 0;
        vm.categoryId = 0;

        vm.branchManagerId = 0;
        vm.technasianId = 0;
        vm.from = "";
        vm.to = "";
        vm.applyFilter = function () {
            vm.from = ""
            if ($('#fromdate').val() != "") {
                var fromDate = $('#fromdate').val().split('/')
                vm.from = (new Date(fromDate[1] + "/" + fromDate[0] + "/" + fromDate[2])).toISOString().replace('Z', '');
            }
            vm.to = ""
            if ($('#todate').val() != "") {
                var toDate = $('#todate').val().split('/')
                vm.to = (new Date(toDate[1] + "/" + toDate[0] + "/" + toDate[2])).toISOString().replace('Z', '');
            }
            vm.countryId = vm.selectedCountry.countryId;
            vm.regionId = vm.selectedRegion.regionId;
            vm.cityId = vm.selectedCity.cityId;
            vm.areaId = vm.selectedArea.areaId;
            vm.branchId = vm.selectedBranch.branchId;
            vm.branchManagerId = vm.selectedBranchManager.userId;
            vm.technasianId = vm.selectedTechnician.userId;

            vm.departmentId = vm.selectedDepartment.departmentId;
            vm.categoryId = vm.selectedCategory.categoryId;
            vm.status = vm.selectedStatus;
            vm.ticketFilterChange()
        }
        function loadTicketDashboard(tickets) {
            var assigned = [];
            var closed = [];
            var InProgress = [];
            var Pending = [];
            var Rejected = [];
            var Reassigned = [];
            var complete = [];
            tickets.forEach(function (element) {
                assigned.push({
                    x: element.xaxisName[$scope.selectedLanguage],
                    y: element.assignedCount
                })
                InProgress.push({
                    x: element.xaxisName[$scope.selectedLanguage],
                    y: element.inProgressCount
                })
                Pending.push({
                    x: element.xaxisName[$scope.selectedLanguage],
                    y: element.pendingCount
                })
                Rejected.push({
                    x: element.xaxisName[$scope.selectedLanguage],
                    y: element.rejectedCount
                })
                closed.push({
                    x: element.xaxisName[$scope.selectedLanguage],
                    y: element.closedCount
                })
                Reassigned.push({
                    x: element.xaxisName[$scope.selectedLanguage],
                    y: element.reassignedCount
                })
                complete.push({
                    x: element.xaxisName[$scope.selectedLanguage],
                    y: element.completedCount
                })
            }, this);
            vm.data = [
                {
                    "key": $translate.instant('AssignedStatus'),
                    "values": assigned
                },
                {
                    "key": $translate.instant('InProgressStatus'),
                    "values": InProgress
                },
                {
                    "key": $translate.instant('Pending'),
                    "values": Pending
                },
                {
                    "key": $translate.instant('RejectedStatus'),
                    "values": Rejected
                },
                {
                    "key": $translate.instant('ClosedStatus'),
                    "values": closed
                },
                {
                    "key": $translate.instant('Reassigned'),
                    "values": Reassigned
                },
                {
                    "key": $translate.instant('completed'),
                    "values": complete
                }
            ];
        }
        init();

        vm.ticketFilterChange = function () {
            dashboardResource.getTicketsDashboard({
                xaxis: vm.selectedTicketFilter,
                countryId: vm.countryId, regionId: vm.regionId, cityId: vm.cityId,
                areaId: vm.areaId, branchId: vm.branchId, from: vm.from, to: vm.to,
                departmentId: vm.departmentId, categoryId: vm.categoryId,
                branchManagerId: vm.branchManagerId, technasianId: vm.technasianId,
                status: vm.status
            }).$promise
                .then(function (results) {
                    loadTicketDashboard(results)
                },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }

        vm.countrySurveyChange = function () {
            vm.selectedRegionSurvey = { regionId: 0, titleDictionary: { "en": "All Regions", "ar": "كل الأقاليم" } };
            vm.selectedCitySurvey = { cityId: 0, titleDictionary: { "en": "All Cities", "ar": "كل المدن" } };
            vm.selectedAreaSurvey = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
            vm.regionsSurvey = [];
            vm.citiesSurvey = [vm.selectedCitySurvey];
            vm.areaListSurvey = [vm.selectedAreaSurvey];
            vm.regionsSurvey.push(vm.selectedRegionSurvey);

            vm.branchListSurvey = [];
            vm.selectedBranchSurvey = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
            vm.branchListSurvey.push(vm.selectedBranchSurvey);
            RegionResource.getAllRegions({ countryId: vm.selectedCountrySurvey.countryId, pageSize: 0 }).$promise.then(function (results) {

                vm.regionsSurvey = vm.regionsSurvey.concat(results.results);
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
            blockUI.stop();
        }
        vm.regionSurveyChange = function () {
            if (vm.selectedRegionSurvey.regionId != undefined) {
                vm.citiesSurvey = [];
                vm.areaListSurvey = [];
                vm.selectedCitySurvey = { cityId: 0, titleDictionary: { "en": "All Cities", "ar": "كل المدن" } };
                vm.selectedAreaSurvey = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
                vm.citiesSurvey.push(vm.selectedCitySurvey);
                vm.areaListSurvey = [vm.selectedAreaSurvey];

                vm.branchListSurvey = [];
                vm.selectedBranchSurvey = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
                vm.branchListSurvey.push(vm.selectedBranchSurvey);
                CityResource.getAllCities({ regionId: vm.selectedRegionSurvey.regionId, pageSize: 0 }).$promise.then(function (results) {
                    vm.citiesSurvey = vm.citiesSurvey.concat(results.results);
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
        vm.citySurveyChange = function () {
            if (vm.selectedCitySurvey.cityId != undefined) {
                vm.areaListSurvey = [];
                vm.selectedAreaSurvey = { areaId: 0, titleDictionary: { "en": "All Areas", "ar": "كل المناطق" } };
                vm.areaListSurvey.push(vm.selectedAreaSurvey);

                vm.branchListSurvey = [];
                vm.selectedBranchSurvey = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
                vm.branchListSurvey.push(vm.selectedBranchSurvey);
                AreaResource.getAllAreas({ cityId: vm.selectedCitySurvey.cityId, pageSize: 0 }).$promise.then(function (results) {
                    vm.areaListSurvey = vm.areaListSurvey.concat(results.results);
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
        vm.areaSurveyChange = function () {
            vm.branchListSurvey = [];
            vm.selectedBranchSurvey = { branchId: 0, titleDictionary: { "en": "All Branches", "ar": "كل الفروع" } };
            vm.branchListSurvey.push(vm.selectedBranchSurvey);
            if (vm.selectedAreaSurvey.areaId > 0)
                vm.branchListSurvey = vm.branchListSurvey.concat(vm.selectedAreaSurvey.branches);
        }

        vm.departmentSurveyChange = function () {
            vm.categoriesSurvey = [];
            vm.selectedCategorySurvey = { categoryId: 0, titleDictionary: { "en": "All Categories", "ar": "كل الفئات" } };
            vm.categoriesSurvey.push(vm.selectedCategorySurvey);
            if (vm.selectedDepartmentSurvey.departmentId > 0)
                vm.categoriesSurvey = vm.categoriesSurvey.concat(vm.selectedDepartmentSurvey.categories);
        }
        vm.countryIdSurvey = 0;
        vm.regionIdSurvey = 0;
        vm.cityIdSurvey = 0;
        vm.areaIdSurvey = 0;
        vm.branchIdSurvey = 0;
        vm.departmentIdSurvey = 0;
        vm.categoryIdSurvey = 0;

        vm.fromSurvey = "";
        vm.toSurvey = "";

        vm.applySurveyFilter = function () {
            blockUI.start("Loading...");
            vm.fromSurvey = ""
            if ($('#fromdateSurvey').val() != "") {
                var fromDateSurvey = $('#fromdateSurvey').val().split('/')
                vm.fromSurvey = (new Date(fromDateSurvey[1] + "/" + fromDateSurvey[0] + "/" + fromDateSurvey[2])).toISOString().replace('Z', '');
            }
            vm.toSurvey = ""
            if ($('#todateSurvey').val() != "") {
                var toDateSurvey = $('#todateSurvey').val().split('/')
                vm.toSurvey = (new Date(toDateSurvey[1] + "/" + toDateSurvey[0] + "/" + toDateSurvey[2])).toISOString().replace('Z', '');
            }
            vm.countryIdSurvey = vm.selectedCountrySurvey.countryId;
            vm.regionIdSurvey = vm.selectedRegionSurvey.regionId;
            vm.cityIdSurvey = vm.selectedCitySurvey.cityId;
            vm.areaIdSurvey = vm.selectedAreaSurvey.areaId;
            vm.branchIdSurvey = vm.selectedBranchSurvey.branchId;

            vm.departmentIdSurvey = vm.selectedDepartmentSurvey.departmentId;
            vm.categoryIdSurvey = vm.selectedCategorySurvey.categoryId;
            vm.AnsweredBy = vm.selectedAnswersUser.userId;

            AnswerQuestionResource.getAllQuestions({
                catgoryTypeId: vm.selectedCategoryType.categoryTypeId,
                departmentId: vm.departmentIdSurvey, categoryId: vm.categoryIdSurvey
            }).$promise.then(function (results) {
                vm.questionList = results.results;

                blockUI.stop();
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
        vm.getQuestionDashbard = function (question) {
            question.isloading = true;
            QuestionResource.getQuestionDashBoard({
                questionId: question.questionId,
                countryId: vm.countryIdSurvey, regionId: vm.regionIdSurvey, cityId: vm.cityIdSurvey,
                areaId: vm.areaIdSurvey, branchId: vm.branchIdSurvey, from: vm.fromSurvey, to: vm.toSurvey,
                AnsweredBy: vm.AnsweredBy
            }).$promise
                .then(function (results) {
                    question.dashboard = results;
                    question.isloading = false;
                    if (question.questionTypeId == 0) {
                        question.data = []
                        if (question.dashboard.optionsCount != undefined) {
                            for (var element in question.dashboard.optionsCount) {
                                question.data.push({
                                    key: ($filter('filter')(question.questionDetailses, { questionDetailsId: element }))[0].titleDictionary[$scope.selectedLanguage],
                                    y: question.dashboard.optionsCount[element]
                                })
                            }

                            question.options = {
                                chart: {
                                    type: 'pieChart',
                                    height: 350,
                                    x: function (d) { return d.key; },
                                    y: function (d) { return d.y; },
                                    showLabels: true,
                                    duration: 500,
                                    legend: {
                                        margin: {
                                            top: 5,
                                            right: 35,
                                            bottom: 5,
                                            left: 0
                                        }
                                    }
                                }
                            };
                        }
                    }
                    if (question.questionTypeId == 1) {
                        question.data = [
                            {
                                key: $translate.instant('onestar'),
                                y: question.dashboard.oneStartCount
                            },
                            {
                                key: $translate.instant('twostar'),
                                y: question.dashboard.twoStartCount
                            },
                            {
                                key: $translate.instant('threestar'),
                                y: question.dashboard.threeStartCount
                            },
                            {
                                key: $translate.instant('fourstar'),
                                y: question.dashboard.fourStartCount
                            },
                            {
                                key: $translate.instant('fivestar'),
                                y: question.dashboard.fiveStartCount
                            }
                        ]
                        question.options = {
                            chart: {
                                type: 'pieChart',
                                height: 350,
                                x: function (d) { return d.key; },
                                y: function (d) { return d.y; },
                                showLabels: true,
                                duration: 500,
                                legend: {
                                    margin: {
                                        top: 5,
                                        right: 35,
                                        bottom: 5,
                                        left: 0
                                    }
                                }
                            }
                        };
                    }
                    if (question.questionTypeId == 2) {
                        question.data = [
                            {
                                key: $translate.instant('LikeLbl'),
                                y: question.dashboard.likeCount
                            },
                            {
                                key: $translate.instant('DisLikeLbl'),
                                y: question.dashboard.disLikeCount
                            }
                        ]
                        question.options = {
                            chart: {
                                type: 'pieChart',
                                height: 300,
                                x: function (d) { return d.key; },
                                y: function (d) { return d.y; },
                                showLabels: true,
                                donut: true,
                                pie: {
                                    startAngle: function (d) { return d.startAngle / 2 - Math.PI / 2 },
                                    endAngle: function (d) { return d.endAngle / 2 - Math.PI / 2 }
                                },
                                legend: {
                                    margin: {
                                        top: 5,
                                        right: 35,
                                        bottom: 5,
                                        left: 0
                                    }
                                }
                            }
                        };
                    }
                },
                function (data, status) {
                    question.isloading = false;
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
        blockUI.stop();

        vm.exportPDF = function(){

                        html2canvas(document.getElementById('surveyDiv')).then(function(canvas) {
                var data = canvas.toDataURL();
                var docDefinition = {
                    content: [{
                        image: data,
                        height:canvas.height,
                        width:500   
                    }],
                };
                pdfMake.createPdf(docDefinition).download("test.pdf");
            });
        }


    }

}());(function () {
    angular
        .module('home')
        .factory('dashboardResource', ['$resource', 'appCONSTANTS', dashboardResource])

    function dashboardResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Tickets/', {}, {
            getTicketsDashboard: { method: 'GET', url: appCONSTANTS.API_URL + 'Tickets/dashboard', useToken: true,isArray:true },
        })
    }

}());
(function () {
	'use strict';

	angular
		.module('home')
		.controller('editMealController', ['$scope', '$filter', '$http', '$translate', '$stateParams', 'appCONSTANTS', '$state', 'MealResource', 'itemsssPrepService', 'ToastService', 'mealPrepService', editMealController])

	function editMealController($scope, $filter, $http, $translate, $stateParams, appCONSTANTS, $state, MealResource, itemsssPrepService, ToastService, mealPrepService) {
		var vm = this;
		vm.language = appCONSTANTS.supportedLanguage;
		vm.meal = mealPrepService;
		vm.itemsList = itemsssPrepService;
		vm.itemModel = [];
		if (vm.meal.imageUrl != null)
			vm.meal.imageUrl = vm.meal.imageUrl + "?date=" + $scope.getCurrentTime();

		var i;
		debugger;
		for (i = 0; i < vm.meal.mealDetails.length; i++) {
			var indexRate = vm.itemsList.indexOf($filter('filter')(vm.itemsList, { 'itemId': vm.meal.mealDetails[i].itemId }, true)[0]);
			vm.itemModel.push(vm.itemsList[indexRate]);

		}
		bindItemsTocalculate(vm.itemModel);
		vm.close = function () {
			$state.go('Meal');
		}
		vm.updateMeal = function () {

			if ($scope.selectedItemList.length == 0) {
				ToastService.show("right", "bottom", "fadeInUp", $translate.instant('mustchooseitem'), "success");
				return
			}

			vm.sendSelected = [];
			var updatedMeal = new Object();
			updatedMeal.mealNameDictionary = vm.meal.mealNameDictionary;
			updatedMeal.mealDescriptionDictionary = vm.meal.mealDescriptionDictionary;

			updatedMeal.mealId = vm.meal.mealId;
			updatedMeal.isImageChange = isMealImageChange;
			debugger;
			updatedMeal.mealPrice = vm.mealtotalDiscount;
			if (vm.meal.mealDiscount == null)
				updatedMeal.mealDiscount = 0;
			else
				updatedMeal.mealDiscount = vm.meal.mealDiscount;

			$scope.selectedItemList.forEach(element => {
				vm.sendSelected.push(
					{
						itemId: element.itemId
					}
				);
			});
			updatedMeal.MealDetails = vm.sendSelected;

			var model = new FormData();
			model.append('data', JSON.stringify(updatedMeal));
			model.append('file', mealImage);
			$http({
				method: 'put',
				url: appCONSTANTS.API_URL + 'Meals/',
				useToken: true,
				headers: { 'Content-Type': undefined },
				data: model
			}).then(
				function (data, status) {
					ToastService.show("right", "bottom", "fadeInUp", $translate.instant('MealUpdateSuccess'), "success");
					$state.go('Meal');
				},
				function (data, status) {
					ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
				}
			);
		}
		$scope.sum = function (items, prop) {
			SumItem(items, prop);
		};
		function SumItem(items, prop) {
			return items.reduce(function (a, b) {
				return a + b[prop];
			}, 0);
		}
		function bindItemsTocalculate(model) {

			vm.meal.carbs = SumItem(model, 'carbs');
			vm.meal.calories = SumItem(model, 'calories');
			vm.meal.protein = SumItem(model, 'protein');
			vm.meal.cost = SumItem(model, 'cost');
			vm.meal.price = SumItem(model, 'price');
			vm.meal.vat = SumItem(model, 'vat');
			vm.meal.totalPrice = SumItem(model, 'totalPrice');

			debugger;
			$scope.selectedItemList = model;
			if ($scope.selectedItemList.length == 0) {
				vm.mealtotalDiscount = "";
				vm.meal.mealDiscount = "";
			}
			calclulateWithDicscount();
			var discountPresantage = vm.meal.totalPrice * vm.meal.mealDiscount / 100;

			vm.mealtotalDiscount = vm.meal.totalPrice - discountPresantage;


		}
		vm.addItemToList = function (model) {
			bindItemsTocalculate(model)
		}
		function calclulateWithDicscount() {
			var vatPresantage = (vm.meal.price * vm.meal.vat) / 100;
			var discountPresantage = vm.meal.price * vm.meal.mealDiscount / 100;
			if (vm.mealDiscount == null)
				vm.meal.totalPrice = vm.meal.price + vatPresantage;
			else
				vm.meal.totalPrice = vm.meal.price + vatPresantage - discountPresantage;


		}
		vm.calclulate = function () {
			calclulateWithDicscount();

		}


		vm.calclulateDiscount = function () {
			var discountPresantage = vm.meal.totalPrice * vm.meal.mealDiscount / 100;

			vm.mealtotalDiscount = vm.meal.totalPrice - discountPresantage;
		}
		vm.LoadUploadLogo = function () {
			$("#mealImage").click();
		}
		var mealImage;
		var isMealImageChange = false;
		$scope.AddMealImage = function (element) {
			var logoFile = element[0];
debugger;
			var allowedImageTypes = ['image/jpg', 'image/png', 'image/jpeg']

			if (logoFile && logoFile.size >= 0 && ((logoFile.size / (1024 * 1000)) < 2)) {

				if (allowedImageTypes.indexOf(logoFile.type) !== -1) {
					$scope.editMealForm.$dirty = true;
					$scope.$apply(function () {

						mealImage = logoFile;
						isMealImageChange = true;
						var reader = new FileReader();

						reader.onloadend = function () {
							vm.meal.imageURL = reader.result;

							$scope.$apply();
						};
						if (logoFile) {
							reader.readAsDataURL(logoFile);
						}
					})
				} else {
					$("#logoImage").val('');
					ToastService.show("right", "bottom", "fadeInUp", $translate.instant('imageTypeError'), "error");
				}

			} else {
				if (logoFile) {
					$("#logoImage").val('');
					ToastService.show("right", "bottom", "fadeInUp", $translate.instant('imgaeSizeError'), "error");
				}

			}


		}

		vm.calclulate = function () {
			var vatPresantage = vm.meal.price * vm.meal.vat / 100;
			vm.meal.totalPrice = vm.meal.price + vatPresantage;
		}
	}
}());
(function () {
	'use strict';

	angular
		.module('home')
		.controller('MealController', ['$scope', '$translate', '$stateParams', 'appCONSTANTS', '$uibModal', 'GetMealsResource', 'MealResource', 'mealsPrepService', 'ToastService', 'ActivateMealResource', 'DeactivateMealResource', MealController])

	function MealController($scope, $translate, $stateParams, appCONSTANTS, $uibModal, GetMealsResource, MealResource, mealsPrepService, ToastService, ActivateMealResource, DeactivateMealResource) {

		var vm = this;
		vm.meals = mealsPrepService;  
		$('.pmd-sidebar-nav>li>a').removeClass("active")
		$($('.pmd-sidebar-nav').children()[5].children[0]).addClass("active")

		vm.Now = $scope.getCurrentTime();
		function refreshMeals() {
			var k = GetMealsResource.getAllMeals({ CategoryId: $stateParams.categoryId, page: vm.currentPage }).$promise.then(function (results) {
				vm.meals = results
			},
				function (data, status) {
					ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
				});
		}
		vm.currentPage = 1;
		vm.changePage = function (page) {
			vm.currentPage = page;
			refreshMeals();
		}


		function confirmationDelete(meal) {
			debugger;
			MealResource.deleteMeal({ mealId: meal.mealId }).$promise.then(function (results) {
		debugger;
		ToastService.show("right", "bottom", "fadeInUp", $translate.instant('DeletedSuccessfully'), "success");
				refreshMeals();
			},
				function (data, status) {
					ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
				});
		}
		vm.openDeleteDialog = function (model,name, id) {
		debugger;
			var modalContent = $uibModal.open({
				templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
				controller: 'confirmDeleteDialogController',
				controllerAs: 'deleteDlCtrl',
				resolve: {
                    model: function () { return model },
					itemName: function () { return name },
					itemId: function () { return id },
					message: function () { return null },
					callBackFunction: function () { return confirmationDelete }
				}

			});
		}
		vm.UpdateStatus = function (meal) {
			debugger;
			if (meal.isActive == false)
				Activate(meal);
			else
				Deactivate(meal);
		}
		function Activate(meal) {
			ActivateMealResource.Activate({ mealId: meal.mealId })
				.$promise.then(function (result) {
					meal.isActive = true;
				},
					function (data, status) {
						debugger;
						ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
						meal.isActive = true;
					})
		}

		function Deactivate(meal) {
			DeactivateMealResource.Deactivate({ mealId: meal.mealId })
				.$promise.then(function (result) {
					meal.isActive = false;
				},
					function (data, status) {
						debugger;
						ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
						if (data == null) meal.isActive = false;
					})
		}


	}

}
	());
(function() {
    angular
      .module('home')
      .factory('MealResource', ['$resource', 'appCONSTANTS', MealResource])
      .factory('GetMealsResource', ['$resource', 'appCONSTANTS', GetMealsResource])
      .factory('GetMealNamesResource', ['$resource', 'appCONSTANTS', GetMealNamesResource])
      .factory('TranslateMealResource', ['$resource', 'appCONSTANTS', TranslateMealResource])
      .factory('ActivateMealResource', ['$resource', 'appCONSTANTS', ActivateMealResource])
      .factory('DeactivateMealResource', ['$resource', 'appCONSTANTS', DeactivateMealResource]);

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

    function GetMealNamesResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Category/:CategoryId/Meals/Name', {}, {
        getAllMealNames: { method: 'GET', useToken: true, isArray: true, params:{lang:'@lang'} },
      })
    }

        function TranslateMealResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Meals/Translate', {}, {
        translateMeal: { method: 'PUT', useToken: true},
      })
    }

    function ActivateMealResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Meals/:mealId/Activate', {}, {
          Activate: { method: 'GET', useToken: true}
        })
    }
    function DeactivateMealResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Meals/:mealId/DeActivate', {}, {
          Deactivate: { method: 'GET', useToken: true }
        })
    }
}());
  (function () {
	'use strict';

	angular
		.module('home')
		.controller('newMealController', ['$scope', '$translate', '$http', '$stateParams', 'appCONSTANTS', '$state', 'ToastService', 'itemsssPrepService', newMealController])

	function newMealController($scope, $translate, $http, $stateParams, appCONSTANTS, $state, ToastService, itemsssPrepService) {
		var vm = this;
		vm.totalPrice = 0;
		vm.mealDiscount = 0;

		vm.itemsList = itemsssPrepService;
		vm.language = appCONSTANTS.supportedLanguage;
		$scope.selectedItemList = [];

		vm.isChanged = false;
		vm.itemModel = "";

		vm.close = function () {
			$state.go('Meal');
		}
		$scope.sum = function (items, prop) {
			return items.reduce(function (a, b) {
				return a + b[prop];
			}, 0);
		};
		vm.addItemToList = function (model) {
			vm.carbs = $scope.sum(model, 'carbs');
			vm.calories = $scope.sum(model, 'calories');
			vm.protein = $scope.sum(model, 'protein');
			vm.cost = $scope.sum(model, 'cost');
			vm.price = $scope.sum(model, 'price');
			vm.vat = $scope.sum(model, 'vat');
			vm.totalPrice = $scope.sum(model, 'totalPrice');

			$scope.selectedItemList = model;
			if ($scope.selectedItemList.length == 0) {
				vm.mealtotalDiscount = "";
				vm.mealDiscount = "";
				vm.carbs = "";
				vm.calories = "";
				vm.protein = "";
				vm.cost = "";
				vm.vat = "";
				vm.totalPrice = "";
			}
			calclulateWithDicscount();
			var discountPresantage = vm.totalPrice * vm.mealDiscount / 100;
			vm.mealtotalDiscount = vm.totalPrice - discountPresantage;
		}
		function calclulateWithDicscount() {
			var vatPresantage = (vm.price * vm.vat) / 100;
			var discountPresantage = vm.price * vm.mealDiscount / 100;
			if (vm.mealDiscount == null) {
				vm.totalPrice = vm.price + vatPresantage;
				vm.mealtotalDiscount = vm.totalPrice;
			}
			else {
				vm.totalPrice = vm.price + vatPresantage - discountPresantage;
				vm.mealtotalDiscount = vm.totalPrice;
			}
			if (vm.vat == "") {
				vm.vat = 0;
			}
		}
		vm.calclulate = function () {
			calclulateWithDicscount();

		}

		vm.flag = false;
		vm.calclulateDiscount = function () {

			if (vm.mealtotalDiscount == "" || vm.mealtotalDiscount == null || vm.mealtotalDiscount == 0) {
				vm.mealtotalDiscount = vm.totalPrice;
				vm.mealDiscount = 0;
				vm.flag = true;

			}
			else {
				var discountPresantage = vm.totalPrice * vm.mealDiscount / 100;
				vm.mealtotalDiscount = vm.totalPrice - discountPresantage;
			}


		}
		vm.addNewMeal = function () {



			if ($scope.selectedItemList.length == 0) {
				ToastService.show("right", "bottom", "fadeInUp", $translate.instant('mustchooseitem'), "success");
				return
			}
			vm.sendSelected = [];
			vm.isChanged = true;
			var newMeal = new Object();
			newMeal.mealNameDictionary = vm.mealNameDictionary;
			newMeal.mealDescriptionDictionary = vm.mealDescriptionDictionary;

			if (vm.flag == true || vm.mealtotalDiscount == NaN) {
				newMeal.mealPrice = vm.totalPrice;
			}
			else {
				newMeal.mealPrice = vm.mealtotalDiscount;
			}

			if (vm.mealDiscount == null)
				newMeal.mealDiscount = 0;
			else
				newMeal.mealDiscount = vm.mealDiscount;


			newMeal.isActive = true;

			$scope.selectedItemList.forEach(element => {
				vm.sendSelected.push(
					{
						itemId: element.itemId
					}
				);
			});
			newMeal.MealDetails = vm.sendSelected;
			var model = new FormData();
			model.append('data', JSON.stringify(newMeal));
			model.append('file', mealImage);
			$http({
				method: 'POST',
				url: appCONSTANTS.API_URL + 'Meals/',
				useToken: true,
				headers: { 'Content-Type': undefined },
				data: model
			}).then(
				function (data, status) {
					ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");
					$state.go('Meal');
					vm.isChanged = false;

				},
				function (data, status) {
					vm.isChanged = false;
					ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
				}
			);

		}
		vm.LoadUploadLogo = function () {
			$("#mealImage").click();
		}
		var mealImage;
		$scope.AddMealImage = function (element) {
			var logoFile = element[0];

			var allowedImageTypes = ['image/jpg', 'image/png', 'image/jpeg']

			if (logoFile && logoFile.size >= 0 && ((logoFile.size / (1024 * 1000)) < 2)) {

				if (allowedImageTypes.indexOf(logoFile.type) !== -1) {
					$scope.newMealForm.$dirty = true;
					$scope.$apply(function () {

						mealImage = logoFile;
						var reader = new FileReader();

						reader.onloadend = function () {
							vm.mealImage = reader.result;

							$scope.$apply();
						};
						if (logoFile) {
							reader.readAsDataURL(logoFile);
						}
					})
				} else {
					$("#logoImage").val('');
					ToastService.show("right", "bottom", "fadeInUp", $translate.instant('imageTypeError'), "error");
				}

			} else {
				if (logoFile) {
					$("#logoImage").val('');
					ToastService.show("right", "bottom", "fadeInUp", $translate.instant('imgaeSizeError'), "error");
				}

			}


		}


	}
}());
(function () {
    'use strict';

    angular
        .module('home')
        .controller('editBranchFeesController', ['$scope', 'blockUI', '$filter', '$translate',
            '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', '$stateParams'
            , 'branchFeesPrepService' , '$uibModalInstance', 'BranchResource', editBranchFeesController]);


    function editBranchFeesController($scope, blockUI, $filter, $translate,
        $state, $localStorage, authorizationService, appCONSTANTS, ToastService, $stateParams,
        branchFeesPrepService, $uibModalInstance, BranchResource) {

        $scope.selectedLanguage = $localStorage.language;
        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;
        blockUI.stop();
        $scope.branch = branchFeesPrepService[0];

        vm.close = function () {
            $uibModalInstance.dismiss();
        }


        vm.UpdateFees = function () {
            var branch = new BranchResource();

                        branch.deliveryCost = $scope.branch.deliveryCost;
            branch.deliveryPrice = $scope.branch.deliveryPrice;
            branch.isFees = true;
            branch.branchId = $scope.branch.branchId;

            branch.$update().then(
                function (data, status) {
                    $uibModalInstance.dismiss();
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('EditedSuccessfully'), "success");

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
    }

})();
(function () {
    'use strict';

    angular
        .module('home')
        .controller('settingController', ['$rootScope', 'blockUI', '$scope', '$http', '$filter', '$translate',
            '$state', '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', '$stateParams'
            , '$uibModal', 'settingsPrepService', 'BranchPrepService', 'AddSettingsResource', 'UpdateSettingsResource', settingController]);


    function settingController($rootScope, blockUI, $scope, $http, $filter, $translate,
        $state, $localStorage, authorizationService,
        appCONSTANTS, ToastService, $stateParams, $uibModal, settingsPrepService
        , BranchPrepService, AddSettingsResource, UpdateSettingsResource) {



        var vm = this;
        $scope.settingsPrepService = settingsPrepService;

        vm.orderType = {
            type: 'item'
        };

        vm.currency;
        vm.minDays;
        vm.maxPause;
        vm.allowPause;
        vm.allowHistory;

        if ($scope.settingsPrepService.isActive != undefined) {
            if ($scope.settingsPrepService.isSMS && $scope.settingsPrepService.isMail) {
                vm.orderType.type = "both"
            }
            else if ($scope.settingsPrepService.isSMS) {
                vm.orderType.type = "sms"
            }
            else if ($scope.settingsPrepService.isMail) {
                vm.orderType.type = "mail"
            }
            else {
                vm.orderType.type = "none"
            }

        }


        $scope.BranchPrepService = BranchPrepService;

        vm.currentPage = 1;
        $scope.changePage = function (page) {
            vm.currentPage = page;
            refreshAreas();
        }

        vm.UpdateProgram = function (program) {
            change(program, false);
        }



        vm.AddSetting = function () {
            blockUI.start("Loading...");

            var setting = new AddSettingsResource();

            if (vm.orderType.type == "none") {
                setting.isSMS = false;
                setting.isMail = false;
            }
            else if (vm.orderType.type == "sms") {
                setting.isSMS = true;
                setting.isMail = false;
            }
            else if (vm.orderType.type == "mail") {
                setting.isSMS = false;
                setting.isMail = true;
            }
            else if (vm.orderType.type == "both") {
                setting.isSMS = true;
                setting.isMail = true;
            }

            setting.isDeleted = false;
            setting.isPause = vm.allowPause;

            if (vm.allowPause == true) {
                setting.maxPauseDays = vm.maxPause;
            }
            else if (vm.allowPause == false) {
                setting.maxPauseDays = 0;
            }
            setting.allowHistory = vm.allowHistory;
            setting.currencyCode = vm.currency;
            setting.minNoDaysPerProgram = vm.minDays;
            setting.isDeleted = false;
            setting.isActive = true;

            setting.$create().then(
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");


                },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }

        vm.UpdateSetting = function () {
            blockUI.start("Loading...");

            var setting = new UpdateSettingsResource();

            if (vm.orderType.type == "none") {
                setting.isSMS = false;
                setting.isMail = false;
            }
            else if (vm.orderType.type == "sms") {
                setting.isSMS = true;
                setting.isMail = false;
            }
            else if (vm.orderType.type == "mail") {
                setting.isSMS = false;
                setting.isMail = true;
            }
            else if (vm.orderType.type == "both") {
                setting.isSMS = true;
                setting.isMail = true;
            }

            setting.isDeleted = false;
            setting.isPause = $scope.settingsPrepService.isPause;

            if (setting.isPause == true) {
                setting.maxPauseDays = $scope.settingsPrepService.maxPauseDays;
            }
            else if (setting.isPause == false) {
                setting.maxPauseDays = 0;
            }
            setting.allowHistory = $scope.settingsPrepService.allowHistory;
            setting.currencyCode = $scope.settingsPrepService.currencyCode;
            setting.minNoDaysPerProgram = $scope.settingsPrepService.minNoDaysPerProgram;
            setting.isDeleted = false;
            setting.isActive = true;

            setting.$update().then(
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");


                },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }

        $scope.EditBranchDialog = function (branchIdd) {
            blockUI.stop();
            vm.branch = $scope.BranchPrepService.results.filter(x => x.branchId == branchIdd);

            $uibModal.open({
                templateUrl: './app/GlobalAdmin/setting/templates/editBranchFees.html',
                controller: 'editBranchFeesController',
                controllerAs: 'editBranchFeesCtrl',
                resolve: {
                    branchFeesPrepService: function () { return vm.branch; }
                }
            });
        }

        function change(program, isDeleted) {
            debugger;
            var updateObj = new UpdateProgramResource();
            updateObj.ProgramId = program.programId;
            if (!isDeleted)
                updateObj.isActive = (program.isActive == true ? false : true);
            updateObj.isDeleted = program.isDeleted;

            updateObj.$update().then(
                function (data, status) {
                    if (isDeleted)
                        refreshPrograms();

                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    program.isActive = updateObj.isActive;

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );

        }

        function refreshPrograms() {
            blockUI.start("Loading...");

            var k = GetProgramResource.gatAllPrograms().$promise.then(function (results) {
                $scope.programList = results;

                console.log($scope.programList);
                blockUI.stop();
            },
                function (data, status) {
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }


    }

})();
(function () {
  angular
    .module('home')
    .factory('GetSettingsResource', ['$resource', 'appCONSTANTS', GetSettingsResource])
    .factory('UpdateSettingsResource', ['$resource', 'appCONSTANTS', UpdateSettingsResource])
    .factory('AddSettingsResource', ['$resource', 'appCONSTANTS', AddSettingsResource])
    .factory('UpdateBranchFeesResource', ['$resource', 'appCONSTANTS', UpdateBranchFeesResource])
    ;


  function GetSettingsResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Setting/GetSetting', {}, {
      getAllSettings: { method: 'GET', useToken: true }
    })
  }

  function UpdateSettingsResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Setting/UpdateSetting', {}, {
      update: { method: 'POST', useToken: true },
    })
  }

  function AddSettingsResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Setting/AddSettings', {}, {
      create: { method: 'POST', useToken: true },
    })
  }

  function UpdateBranchFeesResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Branchs/UpdateBranchFees', {}, {
      updateBranchFees: { method: 'POST', useToken: true },
    })
  }

}());

(function () {
	'use strict';

	angular
		.module('home')
		.controller('editItemController', ['$scope', '$http', '$translate', '$stateParams', 'appCONSTANTS', '$state', 'ItemResource', 'ToastService', 'itemPrepService', editItemController])

	function editItemController($scope, $http, $translate, $stateParams, appCONSTANTS, $state, ItemResource, ToastService, itemPrepService) {
		var vm = this;
		vm.disable = false;
		vm.language = appCONSTANTS.supportedLanguage;
		vm.item = itemPrepService; 
		console.log(vm.item);

		vm.close = function () {
			$state.go('Items', { categoryId: $stateParams.categoryId });
		}
		vm.updateItem = function () {
			var updatedItem = new Object();
			updatedItem.itemNameDictionary = vm.item.itemNameDictionary;
			updatedItem.itemDescriptionDictionary = vm.item.itemDescriptionDictionary;
			updatedItem.categoryId = $stateParams.categoryId;

			updatedItem.itemId = vm.item.itemId;
			updatedItem.isImageChange = isItemImageChange;

			updatedItem.itemSize =(vm.item.itemSize == null) ? 0 : vm.item.itemSize;
			updatedItem.fat = (vm.item.fat == null) ? 0 : vm.item.fat;
			updatedItem.carbs = (vm.item.carbs == null) ? 0 : vm.item.carbs;
			updatedItem.calories = (vm.item.calories == null) ? 0 : vm.item.calories;
			updatedItem.protein = (vm.item.protein == null) ? 0 : vm.item.protein;
			updatedItem.cost = vm.item.cost;
			updatedItem.price = vm.item.price;
			updatedItem.vat = (vm.item.vat == null) ? 0 : vm.item.vat;
			updatedItem.totalPrice = vm.item.totalPrice;


			var model = new FormData();
			model.append('data', JSON.stringify(updatedItem));
			model.append('file', itemImage);
			$http({
				method: 'put',
				url: appCONSTANTS.API_URL + 'Items/',
				useToken: true,
				headers: { 'Content-Type': undefined },
				data: model
			}).then(
				function (data, status) {
					ToastService.show("right", "bottom", "fadeInUp", $translate.instant('ItemUpdateSuccess'), "success");
					$state.go('Items', { categoryId: $stateParams.categoryId });
				},
				function (data, status) {
					ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
				}
			);
		}
		vm.LoadUploadLogo = function () {
			$("#itemImage").click();
		}
		var itemImage;
		var isItemImageChange = false;
		$scope.AddItemImage = function (element) {
			var logoFile = element[0];

			var allowedImageTypes = ['image/jpg', 'image/png', 'image/jpeg']

			if (logoFile && logoFile.size >= 0 && ((logoFile.size / (1024 * 1000)) < 2)) {

				if (allowedImageTypes.indexOf(logoFile.type) !== -1) {
					$scope.editItemForm.$dirty = true;
					$scope.$apply(function () {

						itemImage = logoFile;
						isItemImageChange = true;
						var reader = new FileReader();

						reader.onloadend = function () {
							vm.item.imageURL = reader.result;

							$scope.$apply();
						};
						if (logoFile) {
							reader.readAsDataURL(logoFile);
						}
					})
				} else {
					$("#logoImage").val('');
					ToastService.show("right", "bottom", "fadeInUp", $translate.instant('imageTypeError'), "error");
				}

			} else {
				if (logoFile) {
					$("#logoImage").val('');
					ToastService.show("right", "bottom", "fadeInUp", $translate.instant('imgaeSizeError'), "error");
				}

			}


		}

		vm.calclulate = function () {

			if (vm.item.price <= vm.item.cost) {
				vm.disable = true;
				ToastService.show("right", "bottom", "fadeInUp", $translate.instant('costandprice'), "success");
				return;
			} else
				vm.disable = false;
			if (vm.item.vat !== undefined) {
				var vatPresantage = vm.item.price * vm.item.vat / 100;
				vm.item.totalPrice = vm.item.price + vatPresantage;
			}
			else
				vm.item.totalPrice = vm.item.price;




		}
	}
}());
(function () {
	'use strict';

	angular
		.module('home')
		.controller('ItemController', ['$scope', '$translate', '$stateParams', 'appCONSTANTS', '$uibModal', 'GetItemsResource', 'ItemResource', 'itemsPrepService', 'ToastService', 'ActivateItemResource', 'DeactivateItemResource', ItemController])

	function ItemController($scope, $translate, $stateParams, appCONSTANTS, $uibModal, GetItemsResource, ItemResource, itemsPrepService, ToastService, ActivateItemResource, DeactivateItemResource) {

		var vm = this;
		vm.items = itemsPrepService;
		console.log(vm.items);

		vm.Now = $scope.getCurrentTime();
		function refreshItems() {
			var k = GetItemsResource.getAllItems({ CategoryId: $stateParams.categoryId, page: vm.currentPage }).$promise.then(function (results) {
				vm.items = results
			},
				function (data, status) {
					ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
				});
		}
		vm.currentPage = 1;
		vm.changePage = function (page) {
			vm.currentPage = page;
			refreshItems();
		}


		function confirmationDelete(item) {
			debugger;
			ItemResource.deleteItem({ itemId: item.itemId }).$promise.then(function (results) {
		debugger;
		ToastService.show("right", "bottom", "fadeInUp", $translate.instant('itemDeleteSuccess'), "success");
				refreshItems();
			},
				function (data, status) {
					ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
				});
		}
		vm.openDeleteDialog = function (model,name, id) {
			var modalContent = $uibModal.open({
				templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
				controller: 'confirmDeleteDialogController',
				controllerAs: 'deleteDlCtrl',
				resolve: {
                    model: function () { return model },
					itemName: function () { return name },
					itemId: function () { return id },
					message: function () { return null },
					callBackFunction: function () { return confirmationDelete }
				}

			});
		}
		vm.UpdateStatus = function (item) {
			debugger;
			if (item.isActive == false)
				Activate(item);
			else
				Deactivate(item);
		}
		function Activate(item) {
			ActivateItemResource.Activate({ itemId: item.itemId })
				.$promise.then(function (result) {
					item.isActive = true;
				},
					function (data, status) {
						debugger;
						ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
						item.isActive = true;
					})
		}

		function Deactivate(item) {
			DeactivateItemResource.Deactivate({ itemId: item.itemId })
				.$promise.then(function (result) {
					item.isActive = false;
				},
					function (data, status) {
						debugger;
						ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
						if (data == null) item.isActive = false;
					})
		}


	}

}
	());
(function() {
    angular
      .module('home')
      .factory('ItemResource', ['$resource', 'appCONSTANTS', ItemResource])
      .factory('GetItemsResource', ['$resource', 'appCONSTANTS', GetItemsResource])
      .factory('GetItemNamesResource', ['$resource', 'appCONSTANTS', GetItemNamesResource])
      .factory('TranslateItemResource', ['$resource', 'appCONSTANTS', TranslateItemResource])
      .factory('ActivateItemResource', ['$resource', 'appCONSTANTS', ActivateItemResource])
      .factory('DeactivateItemResource', ['$resource', 'appCONSTANTS', DeactivateItemResource])
      .factory('GetItemsssResource', ['$resource', 'appCONSTANTS', GetItemsssResource])

      ;

      function ItemResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Items/:itemId', {}, {
        create: { method: 'POST', useToken: true },
        getItem: { method: 'GET', useToken: true },
        deleteItem: { method: 'DELETE', useToken: true },
        update: { method: 'PUT', useToken: true }
      })
    }
    function GetItemsResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Categories/:CategoryId/Items', {}, {
          getAllItems: { method: 'GET', useToken: true, params:{lang:'@lang'} },
        })
    }

    function GetItemsssResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Items/GetAllItems', {}, {
        getAllItemsss: { method: 'GET', useToken: true, params:{lang:'@lang'},  isArray:true },
      })
  }

    function GetItemNamesResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Category/:CategoryId/Items/Name', {}, {
        getAllItemNames: { method: 'GET', useToken: true, isArray: true, params:{lang:'@lang'} },
      })
    }

        function TranslateItemResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Items/Translate', {}, {
        translateItem: { method: 'PUT', useToken: true},
      })
    }

    function ActivateItemResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Items/:itemId/Activate', {}, {
          Activate: { method: 'GET', useToken: true}
        })
    }
    function DeactivateItemResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Items/:itemId/DeActivate', {}, {
          Deactivate: { method: 'GET', useToken: true }
        })
    }
}());
  (function () {
	'use strict';

	angular
		.module('home')
		.controller('newItemController', ['$scope', '$translate', '$http', '$stateParams', 'appCONSTANTS', '$state', 'ToastService', 'TranslateItemResource', 'defaultItemsPrepService', newItemController])

	function newItemController($scope, $translate, $http, $stateParams, appCONSTANTS, $state, ToastService, TranslateItemResource, defaultItemsPrepService) {
		var vm = this;
		vm.disable = true;
		vm.language = appCONSTANTS.supportedLanguage;

		vm.close = function () {
			$state.go('Items', { categoryId: $stateParams.categoryId });
		}

		vm.isChanged = false;

		vm.calclulate = function () {
			if (vm.price <= vm.cost) {
				vm.disable = true;
				ToastService.show("right", "bottom", "fadeInUp", $translate.instant('costandprice'), "success");
				return;
			} else
				vm.disable = false;
			if (vm.vat !== undefined) {
				var vatPresantage = vm.price * vm.vat / 100;
				vm.totalPrice = vm.price + vatPresantage;
			}
			else
				vm.totalPrice = vm.price;

		}
		vm.addNewItem = function () {
			vm.isChanged = true;
			var newItem = new Object();
			newItem.itemNameDictionary = vm.itemNameDictionary;
			newItem.itemDescriptionDictionary = vm.itemDescriptionDictionary;
			newItem.categoryId = $stateParams.categoryId;
			newItem.itemSize = (vm.itemSize == null) ? 0 : vm.itemSize;
			newItem.fat = (vm.fat == null) ? 0 : vm.fat;
			newItem.carbs = (vm.carbs == null) ? 0 : vm.carbs;
			newItem.calories = (vm.calories == null) ? 0 : vm.calories;
			newItem.protein = (vm.protein == null) ? 0 : vm.protein;
			newItem.cost = vm.cost;
			newItem.price = vm.price;
			newItem.vat = (vm.vat == null) ? 0 : vm.vat;
			newItem.totalPrice = vm.totalPrice;
			newItem.isActive = true;
			debugger;


			var model = new FormData();
			model.append('data', JSON.stringify(newItem));
			model.append('file', itemImage);
			$http({
				method: 'POST',
				url: appCONSTANTS.API_URL + 'Items/',
				useToken: true,
				headers: { 'Content-Type': undefined },
				data: model
			}).then(
				function (data, status) {
					ToastService.show("right", "bottom", "fadeInUp", $translate.instant('itemAddSuccess'), "success");
					$state.go('Items', { categoryId: $stateParams.categoryId });
					vm.isChanged = false;

				},
				function (data, status) {
					vm.isChanged = false;
					ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
				}
			);

		}
		vm.LoadUploadLogo = function () {
			$("#itemImage").click();
		}
		var itemImage;
		$scope.AddItemImage = function (element) {
			var logoFile = element[0];

			var allowedImageTypes = ['image/jpg', 'image/png', 'image/jpeg']

			if (logoFile && logoFile.size >= 0 && ((logoFile.size / (1024 * 1000)) < 2)) {

				if (allowedImageTypes.indexOf(logoFile.type) !== -1) {
					$scope.newItemForm.$dirty = true;
					$scope.$apply(function () {

						itemImage = logoFile;
						var reader = new FileReader();

						reader.onloadend = function () {
							vm.itemImage = reader.result;

							$scope.$apply();
						};
						if (logoFile) {
							reader.readAsDataURL(logoFile);
						}
					})
				} else {
					$("#logoImage").val('');
					ToastService.show("right", "bottom", "fadeInUp", $translate.instant('imageTypeError'), "error");
				}

			} else {
				if (logoFile) {
					$("#logoImage").val('');
					ToastService.show("right", "bottom", "fadeInUp", $translate.instant('imgaeSizeError'), "error");
				}

			}


		}


	}
}());
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

        vm.show = true;
        $scope.roleList = RolePrepService.results;
        vm.selectedUserRoles = [];
        $scope.userObj = EditUserPrepService;
        $scope.userObj.confirmPassword = $scope.userObj.password;
        console.log($scope.userObj);
        init();
        var i;
        for (i = 0; i < $scope.userObj.userRoles.length; i++) {
            var indexRate = $scope.roleList.indexOf($filter('filter')($scope.roleList, { 'roleId': $scope.userObj.userRoles[i].roleId }, true)[0]);
            vm.selectedUserRoles.push($scope.roleList[indexRate]);

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
        blockUI.stop();


        function init() {
            vm.counties = [];
            vm.counties.push(vm.selectedCountry);
            vm.counties = vm.counties.concat(CountriesPrepService.results)
            vm.regions = [];
            vm.regions.push(vm.selectedRegion);
            vm.cities = [];
            vm.cities.push(vm.selectedCity);
            vm.areaList = [];
            vm.areaList.push(vm.selectedArea);
            vm.branchList = [];
            vm.branchList.push(vm.selectedBranch);
            debugger;


        }
        function funcCountryChange() {
            vm.selectedRegion = { regionId: 0, titleDictionary: { "en-us": "All Regions", "ar-eg": "كل الأقاليم" } };
            vm.selectedCity = { cityId: 0, titleDictionary: { "en-us": "All Cities", "ar-eg": "كل المدن" } };
            vm.selectedArea = { areaId: 0, titleDictionary: { "en-us": "All Areas", "ar-eg": "كل المناطق" } };
            vm.regions = [];
            vm.cities = [vm.selectedCity];
            vm.areaList = [vm.selectedArea];
            vm.regions.push(vm.selectedRegion);

            vm.branchList = [];
            vm.selectedBranch = { branchId: 0, titleDictionary: { "en-us": "All Branches", "ar-eg": "كل الفروع" } };
            vm.branchList.push(vm.selectedBranch);


            RegionResource.getAllRegions({ countryId: $scope.userObj.countryId, pageSize: 0 }).$promise.then(function (results) {

                vm.regions = vm.regions.concat(results.results);

                var indexregion = vm.regions.indexOf($filter('filter')(vm.regions, { 'regionId': $scope.userObj.regionId }, true)[0]);
                vm.selectedRegion = vm.regions[indexregion];
                funcregionChange();
            },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }


        vm.countryChange = function () {
            funcCountryChange();
        }
        function funcregionChange() {
            if (vm.selectedRegion.regionId != undefined) {
                vm.cities = [];
                vm.areaList = [];
                vm.selectedCity = { cityId: 0, titleDictionary: { "en-us": "All Cities", "ar-eg": "كل المدن" } };
                vm.selectedArea = { areaId: 0, titleDictionary: { "en-us": "All Areas", "ar-eg": "كل المناطق" } };
                vm.cities.push(vm.selectedCity);
                vm.areaList = [vm.selectedArea];

                vm.branchList = [];
                vm.selectedBranch = { branchId: 0, titleDictionary: { "en-us": "All Branches", "ar-eg": "كل الفروع" } };
                vm.branchList.push(vm.selectedBranch);
                CityResource.getAllCities({ regionId: vm.selectedRegion.regionId, pageSize: 0 }).$promise.then(function (results) {

                    vm.cities = vm.cities.concat(results.results);

                    var indexcity = vm.cities.indexOf($filter('filter')(vm.cities, { 'cityId': $scope.userObj.cityId }, true)[0]);
                    vm.selectedCity = vm.cities[indexcity];
                    funcCityChange();
                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
        vm.regionChange = function () {
            funcregionChange();
        }

        function funcCityChange() {

            if (vm.selectedCity.cityId != undefined) {
                vm.areaList = [];
                vm.selectedArea = { areaId: 0, titleDictionary: { "en-us": "All Areas", "ar-eg": "كل المناطق" } };
                vm.areaList.push(vm.selectedArea);

                vm.branchList = [];
                vm.selectedBranch = { branchId: 0, titleDictionary: { "en-us": "All Branches", "ar-eg": "كل الفروع" } };
                vm.branchList.push(vm.selectedBranch);
                AreaResource.getAllAreas({ cityId: vm.selectedCity.cityId, pageSize: 0 }).$promise.then(function (results) {
                    vm.areaList = vm.areaList.concat(results.results);

                    var indexarea = vm.areaList.indexOf($filter('filter')(vm.areaList, { 'areaId': $scope.userObj.areaId }, true)[0]);
                    vm.selectedArea = vm.areaList[indexarea];
                    funcAreaChange();

                },
                    function (data, status) {
                        ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                    });
            }
        }
        vm.cityChange = function () {
            funcCityChange();
        }
        function funcAreaChange() {
            vm.branchList = [];
            vm.selectedBranch = { branchId: 0, titleDictionary: { "en-us": "All Branches", "ar-eg": "كل الفروع" } };
            vm.branchList.push(vm.selectedBranch);
            if (vm.selectedArea.areaId > 0)
                vm.branchList = vm.branchList.concat(vm.selectedArea.branches);


            var indexbranch = vm.branchList.indexOf($filter('filter')(vm.branchList, { 'branchId': $scope.userObj.branchId }, true)[0]);
            vm.selectedBranch = vm.branchList[indexbranch];

        }
        vm.areaChange = function () {
            funcAreaChange();
        }
    }

})();(function () {
    'use strict';

    angular
        .module('home')
        .controller('userController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate', '$state', 'UserResource',
            'userPrepService', 'RoleResource', 'RolePrepService', '$localStorage', 'authorizationService', 'appCONSTANTS',
            'ToastService', 'CountriesPrepService', 'RegionResource', 'CityResource', 'AreaResource', userController]);

    function userController($rootScope, blockUI, $scope, $filter, $translate, $state, UserResource, userPrepService,
        RoleResource, RolePrepService, $localStorage, authorizationService, appCONSTANTS, ToastService, CountriesPrepService,
        RegionResource, CityResource, AreaResource) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[3].children[0]).addClass("active")

        var vm = this;
        blockUI.start("Loading...");
        vm.close = function () {
            debugger;
            $state.go('users');
        }
        
    angular
        .module('home')
        .factory('UserResource', ['$resource', 'appCONSTANTS', UserResource])

    function UserResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Users/', {}, {
            getAllUsers: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/GetAllUsers', useToken: true, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Users/EditRegisterUser', useToken: true },
            getUser: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/GetUserById/:UserId', useToken: true }, 
            validate: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/ValidateByPhone/:Phone', useToken: true }, 
            getUserDepartments: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/Departments', useToken: true },
            getUserArea: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/Area', useToken: true },
        })
    }

}());
