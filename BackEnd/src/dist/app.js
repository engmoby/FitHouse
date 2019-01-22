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




    CategoryPrepService.$inject = ['CategoryResource']
    function CategoryPrepService(CategoryResource) {
        return CategoryResource.getAllCategorys().$promise;
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

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[3].children[0]).addClass("active")

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
        .controller('CategoryController', ['$rootScope', '$scope', '$filter', '$translate',
            '$state', 'CategoryResource', '$localStorage',
            'authorizationService', 'appCONSTANTS', 'blockUI', '$uibModal',
            'ToastService', CategoryController]);


    function CategoryController($rootScope, $scope, $filter, $translate,
        $state, CategoryResource, $localStorage, authorizationService,
        appCONSTANTS, blockUI, $uibModal, ToastService) {
        var vm = this;

        refreshCategorys();

        function refreshCategorys() {
            blockUI.start("Loading...");

            var k = CategoryResource.getAllCategorys().$promise.then(function (results) {
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


    }

})();
(function () {
    angular
      .module('home')
        .factory('CategoryResource', ['$resource', 'appCONSTANTS', CategoryResource]) 

    function CategoryResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Category/', {}, {
            getAllCategorys: { method: 'GET', url: appCONSTANTS.API_URL + 'Category/GetAllCategories', useToken: true, params: { lang: '@lang' } },
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
        .controller('CityController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'CityResource', 'CitiesPrepService',  '$stateParams', 'appCONSTANTS',
            'ToastService','RegionByIdPrepService', CityController]);


    function CityController($rootScope, blockUI, $scope, $filter, $translate,
        $state, CityResource, CitiesPrepService, $stateParams, appCONSTANTS, ToastService,RegionByIdPrepService) { 

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[3].children[0]).addClass("active")

        blockUI.start("Loading..."); 

                    var vm = this;
        $scope.totalCount = CitiesPrepService.totalCount;
        $scope.Cities  = CitiesPrepService;
        $scope.countryName = RegionByIdPrepService.countryNameDictionary[$scope.selectedLanguage];
        $scope.regionName = RegionByIdPrepService.titleDictionary[$scope.selectedLanguage];
        function refreshCities() {

            blockUI.start("Loading..."); 

                        var k = CityResource.getAllCities({regionId: $stateParams.regionId ,page:vm.currentPage}).$promise.then(function (results) { 
                $scope.Cities = results  
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
            refreshCities();
        }
        blockUI.stop();

            }

})();
(function () {
    angular
      .module('home')
        .factory('CityResource', ['$resource', 'appCONSTANTS', CityResource]) 

    function CityResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Cities/', {}, {
            getAllCities: { method: 'GET', url: appCONSTANTS.API_URL + 'Regions/:regionId/Cities', useToken: true,  params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Cities/EditCity', useToken: true },
            getCity: { method: 'GET', url: appCONSTANTS.API_URL + 'Cities/:cityId', useToken: true },
            getAllCitiesForUser: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/:userId/Cities', useToken: true, isArray:true }
        })
    } 

}());
(function () {
    'use strict';

    angular
        .module('home')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('Cities', {
                    url: '/:regionId/City',
                    views: {
                        '@': {
                            templateUrl: './app/GlobalAdmin/City/templates/Cities.html',
                            controller: 'CityController',
                            'controllerAs': 'CityCtrl',
                        }
                    },
                    resolve: {
                        CitiesPrepService: CitiesPrepService,
                        RegionByIdPrepService: RegionByIdPrepService,
                    },
                    data: {
                        permissions: {
                            only: ['4'],
                            redirectTo: 'root'
                        }
                    },
                    parent:"Regions",
                    ncyBreadcrumb: {
                        label: '{{regionName}}'
                    }
                })
                .state('newCity', {
                    url: '/:regionId/newCity',
                    views: {
                        '@': {
                            templateUrl: './app/GlobalAdmin/City/templates/new.html',
                            controller: 'createCityDialogController',
                            'controllerAs': 'newCityCtrl',
                        }
                    },
                    resolve: {
                        RegionByIdPrepService: RegionByIdPrepService,
                    },
                    data: {
                        permissions: {
                            only: ['4'],
                            redirectTo: 'root'
                        }
                    },
                    parent:"Regions",
                    ncyBreadcrumb: {
                        label: '{{regionName}}'
                    }

                })
                .state('editCity', {
                    url: '/:regionId/editCity/:cityId',
                    views: {
                        '@': {
                            templateUrl: './app/GlobalAdmin/City/templates/edit.html',
                            controller: 'editCityDialogController',
                            'controllerAs': 'editCityCtrl',
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
                    parent:"Regions",
                    ncyBreadcrumb: {
                        label: '{{regionName}}'
                    }

                })
        });

    CitiesPrepService.$inject = ['CityResource', '$stateParams']
    function CitiesPrepService(CityResource, $stateParams) {
        return CityResource.getAllCities({ regionId: $stateParams.regionId }).$promise;
    }

    CityByIdPrepService.$inject = ['CityResource', '$stateParams']
    function CityByIdPrepService(CityResource, $stateParams) {
        return CityResource.getCity({ cityId: $stateParams.cityId }).$promise;
    }

    RegionByIdPrepService.$inject = ['RegionResource', '$stateParams']
    function RegionByIdPrepService(RegionResource, $stateParams) {
        return RegionResource.getRegion({ regionId: $stateParams.regionId }).$promise;
    }
}());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('createCityDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'CityResource', 'ToastService', '$stateParams','RegionByIdPrepService', createCityDialogController])

    function createCityDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, CityResource,
        ToastService, $stateParams,RegionByIdPrepService) {

                blockUI.start("Loading..."); 

            		var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;
        $scope.countryName = RegionByIdPrepService.countryNameDictionary[$scope.selectedLanguage];
        $scope.regionName = RegionByIdPrepService.titleDictionary[$scope.selectedLanguage];
        vm.close = function(){
			$state.go('Cities',{countryId: $stateParams.countryId ,regionId: $stateParams.regionId});
		} 

		 		vm.AddNewCity = function () {
            blockUI.start("Loading..."); 

                        var newObj = new CityResource();
            newObj.regionId= $stateParams.regionId;            
            newObj.titleDictionary = vm.titleDictionary; 
            newObj.IsDeleted = false; 
            newObj.IsStatic =false;
            newObj.$create().then(
                function (data, status) { 
        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success"); 
                    $state.go('Cities',{countryId: $stateParams.countryId ,regionId: $stateParams.regionId},{ reload: true });
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
        .controller('editCityDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate', 'CityResource', 'ToastService',
            'CityByIdPrepService','$stateParams','RegionByIdPrepService', editCityDialogController])

    function editCityDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, CityResource, ToastService, 
        CityByIdPrepService,$stateParams,RegionByIdPrepService) {
        blockUI.start("Loading..."); 

                var vm = this; 
		vm.language = appCONSTANTS.supportedLanguage;
        vm.City = CityByIdPrepService;
        $scope.countryName = RegionByIdPrepService.countryNameDictionary[$scope.selectedLanguage];
        $scope.regionName = RegionByIdPrepService.titleDictionary[$scope.selectedLanguage];

                vm.Close = function () {
            $state.go('Cities',{countryId: $stateParams.countryId,regionId: $stateParams.regionId });
        }
        vm.UpdateCity  = function () { 
            blockUI.start("Loading..."); 

                        var updateObj = new CityResource();
            updateObj.cityId = vm.City.cityId;
            updateObj.regionId= $stateParams.regionId;
            updateObj.titleDictionary = vm.City.titleDictionary;
		    updateObj.IsDeleted = false;
		    updateObj.IsStatic = false;
		    updateObj.$update().then(
                function (data, status) {
                    blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");

                     $state.go('Cities',{countryId: $stateParams.countryId,regionId: $stateParams.regionId},{ reload: true });

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
        .controller('CountryController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', 'CountryResource', 'CountriesPrepService',  '$localStorage', 'appCONSTANTS',
            'ToastService', CountryController]);


    function CountryController($rootScope, blockUI, $scope, $filter, $translate,
        $state, CountryResource, CountriesPrepService, $localStorage, appCONSTANTS, ToastService) { 

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[3].children[0]).addClass("active")

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
        .controller('ProgramController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', '$localStorage',
            'authorizationService', 'appCONSTANTS',
            'ToastService', '$stateParams', ProgramController]);


    function ProgramController($rootScope, blockUI, $scope, $filter, $translate,
        $state, $localStorage, authorizationService,
        appCONSTANTS, ToastService, $stateParams) {



         var vm = this;









    }

})();
(function() {
    angular
      .module('home')
      .factory('AddProgramResource', ['$resource', 'appCONSTANTS', AddProgramResource])
      ;

      function AddProgramResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Programs/', {}, { 
        create: { method: 'POST',useToken: true}
      })
    }








        }());

  (function () {
    'use strict';

    angular
        .module('home')
        .controller('addProgramController', ['$rootScope', 'blockUI', '$scope', '$filter', '$translate',
            '$state', '$localStorage', 'authorizationService', 'appCONSTANTS', 'ToastService', '$stateParams',
            'AddProgramResource', addProgramController]);


    function addProgramController($rootScope, blockUI, $scope, $filter, $translate, $state, $localStorage, authorizationService,
        appCONSTANTS, ToastService, $stateParams, AddProgramResource) {



        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage; 

        vm.ProgramDaysCount = 0;
        vm.MealPerDay = 0;
        $scope.ProgramDiscount = 0;
        $scope.IsBreakFast = false;
        $scope.IsSnack = false;
        $scope.ProgramPrice = 0;
        $scope.ProgramCost = 0;
        $scope.ProgramVAT = 0;
        $scope.ProgramTotalPrice = 0;
        vm.SelectedDays = [];
        vm.progCountList = [];

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

        vm.AddNewProgram = function () {
            var newProgram = new AddProgramResource();
            newProgram.programNameDictionary = vm.titleDictionary;
            newProgram.programDescriptionDictionary = vm.descriptionDictionary;
            newProgram.isActive = true;
            newProgram.programDays = vm.ProgramDaysCount;
            newProgram.noOfMeals = vm.MealPerDay;
            newProgram.isBreakfast = $scope.IsBreakFast;
            newProgram.isSnack = $scope.IsSnack;
            newProgram.programDiscount = vm.ProgramDiscount;
            newProgram.isAdmin = true;
            newProgram.isForClient = false;
            newProgram.isDeleted = false;
            newProgram.$create().then(
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

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[3].children[0]).addClass("active")

        blockUI.start("Loading..."); 

                    var vm = this;
        $scope.totalCount = RegionsPrepService.totalCount;
        $scope.Regions  = RegionsPrepService;
        $scope.countryName = CountryByIdPrepService.titleDictionary[$scope.selectedLanguage];
        function refreshRegions() {

            blockUI.start("Loading..."); 

                        var k = RegionResource.getAllRegions({countryId: $stateParams.countryId ,page:vm.currentPage}).$promise.then(function (results) { 
                $scope.Regions = results  
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
            refreshRegions();
        }
        blockUI.stop();

            }

})();
(function () {
    angular
      .module('home')
        .factory('RegionResource', ['$resource', 'appCONSTANTS', RegionResource]) 

    function RegionResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Regions/', {}, {
            getAllRegions: { method: 'GET', url: appCONSTANTS.API_URL + 'Countries/:countryId/Regions', useToken: true,  params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Regions/EditRegion', useToken: true },
            getRegion: { method: 'GET', url: appCONSTANTS.API_URL + 'Regions/:regionId', useToken: true },
            getAllRegionsForUser: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/:userId/Regions', useToken: true, isArray:true }

                    })
    } 

}());
(function () {
    'use strict';

    angular
        .module('home')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('Regions', {
                    url: '/Country/:countryId/Region',
                    templateUrl: './app/GlobalAdmin/Region/templates/Regions.html',
                    controller: 'RegionController',
                    'controllerAs': 'RegionCtrl',
                    resolve: {
                        RegionsPrepService: RegionsPrepService,
                        CountryByIdPrepService: CountryByIdPrepService                        
                    },
                    data: {
                        permissions: {
                            only: ['4'],
                            redirectTo: 'root'
                        }
                    },
                    ncyBreadcrumb: {
                        label: '{{countryName}}'
                    }
                })
                .state('newRegion', {
                    url: '/Country/:countryId/newRegion',
                    templateUrl: './app/GlobalAdmin/Region/templates/new.html',
                    controller: 'createRegionDialogController',
                    'controllerAs': 'newRegionCtrl',
                    resolve: {
                        CountryByIdPrepService: CountryByIdPrepService                        
                    },
                    data: {
                        permissions: {
                            only: ['4'],
                            redirectTo: 'root'
                        }
                    },
                    ncyBreadcrumb: {
                        label: '{{countryName}}'
                    }

                })
                .state('editRegion', {
                    url: '/Country/:countryId/editRegion/:regionId',
                    templateUrl: './app/GlobalAdmin/Region/templates/edit.html',
                    controller: 'editRegionDialogController',
                    'controllerAs': 'editRegionCtrl',
                    resolve: {
                        RegionByIdPrepService: RegionByIdPrepService,
                        CountryByIdPrepService: CountryByIdPrepService                        
                    },
                    data: {
                        permissions: {
                            only: ['4'],
                            redirectTo: 'root'
                        }
                    },
                    ncyBreadcrumb: {
                        label: '{{countryName}}'
                    }

                })
        });

    RegionsPrepService.$inject = ['RegionResource', '$stateParams']
    function RegionsPrepService(RegionResource, $stateParams) {
        return RegionResource.getAllRegions({ countryId: $stateParams.countryId }).$promise;
    }

    RegionByIdPrepService.$inject = ['RegionResource', '$stateParams']
    function RegionByIdPrepService(RegionResource, $stateParams) {
        return RegionResource.getRegion({ regionId: $stateParams.regionId }).$promise;
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
        .controller('createRegionDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'RegionResource', 'ToastService', '$stateParams','CountryByIdPrepService', createRegionDialogController])

    function createRegionDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, RegionResource,
        ToastService, $stateParams,CountryByIdPrepService) {

                blockUI.start("Loading..."); 

            		var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;
        $scope.countryName = CountryByIdPrepService.titleDictionary[$scope.selectedLanguage];

        		vm.close = function(){
			$state.go('Regions',{countryId: $stateParams.countryId });
		} 

		 		vm.AddNewRegion = function () {
            blockUI.start("Loading..."); 

                        var newObj = new RegionResource();
            newObj.countryId= $stateParams.countryId;
            newObj.titleDictionary = vm.titleDictionary; 
            newObj.IsDeleted = false; 
            newObj.IsStatic =false;
            newObj.$create().then(
                function (data, status) { 
        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success"); 
                    $state.go('Regions',{countryId: $stateParams.countryId },{ reload: true });
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
        .controller('editRegionDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate', 'RegionResource', 'ToastService',
            'RegionByIdPrepService','$stateParams','CountryByIdPrepService', editRegionDialogController])

    function editRegionDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, RegionResource, ToastService, 
        RegionByIdPrepService,$stateParams,CountryByIdPrepService) {
        blockUI.start("Loading..."); 

                var vm = this; 
		vm.language = appCONSTANTS.supportedLanguage;
        vm.Region = RegionByIdPrepService; 
        $scope.countryName = CountryByIdPrepService.titleDictionary[$scope.selectedLanguage];

                vm.Close = function () {
            $state.go('Regions',{countryId: $stateParams.countryId });
        }
        vm.UpdateRegion  = function () { 
            blockUI.start("Loading..."); 

                        var updateObj = new RegionResource();
            updateObj.regionId = vm.Region.regionId;
            updateObj.countryId= $stateParams.countryId;
            updateObj.titleDictionary = vm.Region.titleDictionary;
		    updateObj.IsDeleted = false;
		    updateObj.IsStatic = false;
		    updateObj.$update().then(
                function (data, status) {
                    blockUI.stop();

                                        ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");

                     $state.go('Regions',{countryId: $stateParams.countryId },{ reload: true });

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

                        var updateObj = new RoleResource();
            updateObj.RoleId = vm.Role.roleId;
            updateObj.Permissions = vm.selectedPermissions;
            updateObj.titleDictionary = vm.Role.titleDictionary;
            updateObj.IsDeleted = vm.Role.IsDeleted;
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
        $($('.pmd-sidebar-nav').children()[2].children[0]).addClass("active")

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

            updateObj.$update().then(
                function (data, status) {
            debugger;

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
		.controller('editItemController', ['$scope', '$http', '$translate', '$stateParams', 'appCONSTANTS', '$state', 'ItemResource', 'ToastService', 'itemPrepService', editItemController])

	function editItemController($scope, $http, $translate, $stateParams, appCONSTANTS, $state, ItemResource, ToastService, itemPrepService) {
		var vm = this;
		vm.language = appCONSTANTS.supportedLanguage;
		vm.item = itemPrepService;
		vm.item.imageUrl = vm.item.imageUrl + "?date=" + $scope.getCurrentTime();
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

			updatedItem.itemSize = vm.item.itemSize;
			updatedItem.carbs = vm.item.carbs;
			updatedItem.calories = vm.item.calories;
			updatedItem.protein = vm.item.protein;
			updatedItem.cost = vm.item.cost;
			updatedItem.price = vm.item.price;
			updatedItem.vat = vm.item.vat;
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
					$scope.updatedItemForm.$dirty = true;
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
			var vatPresantage = vm.item.price * vm.item.vat / 100;
			vm.item.totalPrice = vm.item.price + vatPresantage;
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
      .factory('DeactivateItemResource', ['$resource', 'appCONSTANTS', DeactivateItemResource]);

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

		vm.language = appCONSTANTS.supportedLanguage;

		vm.close = function () {
			$state.go('Items', { categoryId: $stateParams.categoryId });
		}

		vm.isChanged = false;

		vm.calclulate = function () {
			var vatPresantage = vm.price * vm.vat / 100;
			vm.totalPrice = vm.price + vatPresantage;
		}
		vm.addNewItem = function () {
			vm.isChanged = true;

			var newItem = new Object();
			newItem.itemNameDictionary = vm.itemNameDictionary;
			newItem.itemDescriptionDictionary = vm.itemDescriptionDictionary;
			newItem.categoryId = $stateParams.categoryId;
			newItem.itemSize = vm.itemSize;
			newItem.carbs = vm.carbs;
			newItem.calories = vm.calories;
			newItem.protein = vm.protein;
			newItem.cost = vm.cost;
			newItem.price = vm.price;
			newItem.vat = vm.vat;
			newItem.totalPrice = vm.totalPrice;
			newItem.isActive = true;


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
        CountriesPrepService ,RegionResource, CityResource, AreaResource) {

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

            vm.show = false;
            var newClient = new UserResource();
            newClient.UserId = $scope.userObj.userId;
            newClient.firstName = $scope.userObj.firstName;
            newClient.lastName = $scope.userObj.lastName;
            newClient.Phone = $scope.userObj.phone;
            newClient.Email = $scope.userObj.email;
            newClient.Password = $scope.userObj.password;
            newClient.IsActive = true;
            newClient.UserTypeId = $scope.selectedType.userTypeId;
            newClient.UserRoles = vm.selectedUserRoles;
            newClient.departmentId = vm.selectedDepartmentId > 0 ? vm.selectedDepartmentId : null;
            newClient.areaId = vm.selectedAreaId > 0 ? vm.selectedAreaId : null;
            newClient.cateoriesId = vm.selectedCategoryId;
            newClient.branchesId = vm.selectedBranchId;
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
            vm.selectedCountry = $scope.userObj.branch.area.city.region.country;
            vm.counties.push(vm.selectedCountry);
            vm.selectedRegion = $scope.userObj.branch.area.city.region;
            vm.regions = [];
            vm.regions.push(vm.selectedRegion);
            vm.selectedCity = $scope.userObj.branch.area.city;
            vm.cities = [];
            vm.cities.push(vm.selectedCity);
            vm.selectedArea = $scope.userObj.branch.area;
            vm.areaList = [];
            vm.areaList.push(vm.selectedArea);
            vm.selectedBranch = $scope.userObj.branch;
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


            RegionResource.getAllRegions({ countryId: vm.selectedCountry.countryId, pageSize: 0 }).$promise.then(function (results) {

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

    function userController($rootScope, blockUI, $scope, $filter, $translate, $state, UserResource,   userPrepService,
        RoleResource, RolePrepService, $localStorage, authorizationService, appCONSTANTS, ToastService, CountriesPrepService,
        RegionResource, CityResource, AreaResource) {

        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[5].children[0]).addClass("active")

        var vm = this;
        blockUI.start("Loading...");
        vm.close = function(){
        debugger;
        	$state.go('users');
		} 
        vm.counties = [];
        vm.counties.push({ countryId: 0, titleDictionary: { "en": "Select Country", "ar": "اختار بلد" } });
        vm.selectedCountryId = 0;
        vm.counties = vm.counties.concat(CountriesPrepService.results)

               $scope.totalCount = userPrepService.totalCount;
        $scope.userList = userPrepService.results;
        $scope.roleList = RolePrepService.results; 
        console.log(userPrepService);

        $scope.phoneNumbr = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;
        $scope.userObj = "";
        $scope.selectedType = "";
        $scope.userTypeList = [];
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
        function refreshUsers() {
            blockUI.start("Loading...");

            var k = UserResource.getAllUsers({ page: vm.currentPage }).$promise.then(function (results) {
                vm.getPageData = results;
                $scope.userList = vm.getPageData.results;
                console.log($scope.userList);
                blockUI.stop();

            },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }


         $scope.AddNewclient = function () {
            blockUI.start("Loading...");

            var newClient = new UserResource();
            newClient.FirstName = $scope.FirstName;
            newClient.LastName = $scope.LastName;
            newClient.Email = $scope.Email;
            newClient.Phone = $scope.Phone;
            newClient.Password = $scope.Password;
            newClient.IsActive = true;
            newClient.UserTypeId = $scope.selectedType.userTypeId;
            newClient.UserRoles = vm.selectedUserRoles;
            newClient.departmentId = vm.selectedDepartmentId > 0 ? vm.selectedDepartmentId : null;
            newClient.areaId = vm.selectedAreaId > 0 ? vm.selectedAreaId : null;
            newClient.cateoriesId = vm.selectedCategoryId;
            newClient.branchesId = vm.selectedBranchId;
            newClient.$create().then(
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('ClientAddSuccess'), "success");

                    localStorage.setItem('data', JSON.stringify(data.userId));
                    $state.go('users');

                },
                function (data, status) {
                    blockUI.stop();

                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
        vm.currentPage = 1;
        $scope.changePage = function (page) {
            vm.currentPage = page;
            refreshUsers();
        }

        blockUI.stop();

    }

}());(function () {
    angular
        .module('home')
        .factory('UserResource', ['$resource', 'appCONSTANTS', UserResource])

    function UserResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Users/', {}, {
            getAllUsers: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/GetAllUsers', useToken: true, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Users/EditRegisterUser', useToken: true },
            getUser: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/GetUserById/:UserId', useToken: true }, 
            getUserDepartments: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/Departments', useToken: true },
            getUserArea: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/Area', useToken: true },
        })
    }

}());
