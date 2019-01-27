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
                    // resolve: {
                    //     userPrepService: userPrepService,
                    //     RolePrepService: RolePrepService,
                    //     CountriesPrepService: CountriesPrepService,
                    // },
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
                        CategoriesPrepService: CategoriesPrepService,
                        daysPrepService:daysPrepService,
                        itemsssPrepService:itemsssPrepService
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

                .state('editUser', {
                    url: '/editUser/:userId',
                    templateUrl: './app/GlobalAdmin/user/templates/editUser.html',
                    controller: 'editUserController',
                    'controllerAs': 'editUserCtrl',
                    resolve: {
                        EditUserPrepService: EditUserPrepService,
                        RolePrepService: AllRolePrepService,
                        CountriesPrepService: CountriesPrepService,
                        RegionsForUserPrepService: RegionsForUserPrepService,
                        CitiesForUserPrepService: CitiesForUserPrepService,
                        AreasForUserPrepService: AreasForUserPrepService,

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

    // Program

    

    /*User */
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

    /*Role */
    RolePrepService.$inject = ['RoleResource']
    function RolePrepService(RoleResource) {
        return RoleResource.getAllRoles().$promise;
    }
    AllRolePrepService.$inject = ['RoleResource']
    function AllRolePrepService(RoleResource) {
        return RoleResource.getAllRoles({ pageSize: 0 }).$promise;
    }
    RoleByIdPrepService.$inject = ['RoleResource', '$stateParams']
    function RoleByIdPrepService(RoleResource, $stateParams) {
        return RoleResource.getRole({ roleId: $stateParams.roleId }).$promise;
    }

    PermissionPrepService.$inject = ['PermissionResource']
    function PermissionPrepService(PermissionResource) {
        return PermissionResource.getAllPermissions({ pageSize: 20 }).$promise;
    }
    /*Area */
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


    /*Branch */
    BranchPrepService.$inject = ['BranchResource']
    function BranchPrepService(BranchResource) {
        return BranchResource.getAllBranchs().$promise;
    }

    BranchByIdPrepService.$inject = ['BranchResource', '$stateParams']
    function BranchByIdPrepService(BranchResource, $stateParams) {
        return BranchResource.getBranch({ branchId: $stateParams.branchId }).$promise;
    }



    /*Category */
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

    CategoryByIdPrepService.$inject = ['CategoryResource', '$stateParams']
    function CategoryByIdPrepService(CategoryResource, $stateParams) {
        return CategoryResource.getCategory({ categoryId: $stateParams.categoryId }).$promise;
    }
    /*Items */
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

}());
