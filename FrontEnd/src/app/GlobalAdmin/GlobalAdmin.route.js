(function () {
    'use strict';

    angular
        .module('home')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('homePage', {
                    url: '/homePage',
                    templateUrl: './app/GlobalAdmin/user/templates/home.html',
                    controller: 'homePageController',
                    'controllerAs': 'homePageCtrl',
                    resolve: {
                        mealsPrepService: mealsPrepService,
                        programPrepService: programPrepService,
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
                          CountriesPrepService: CountriesPrepService,

                    } 
                })
                .state('Custom', {
                    url: '/Custom',
                    templateUrl: './app/GlobalAdmin/customProgram/templates/Custom.html',
                    controller: 'CustomController',
                    'controllerAs': 'CustomCtrl',
                    resolve: {
                        itemsPrepService: itemsPrepService,
                        CountriesPrepService: CountriesPrepService
                    }
                })
                .state('Summary', {
                    url: '/Summary',
                    templateUrl: './app/GlobalAdmin/customProgram/templates/Summary.html',
                    controller: 'CustomController',
                    'controllerAs': 'CustomCtrl',
                    resolve: {
                        itemsPrepService: itemsPrepService,
                        CountriesPrepService: CountriesPrepService
                    }
                })

        });

    /*Custom Program */
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
        return GetMealsResource.getAllMeals().$promise;
    }

    programPrepService.$inject = ['GetProgramResource']
    function programPrepService(GetProgramResource) {
        return GetProgramResource.gatAllPrograms().$promise;
    }
    settingsPrepService.$inject = ['GetSettingsResource']
    function settingsPrepService(GetSettingsResource) {
        return GetSettingsResource.getAllSettings().$promise;
    }
 
     /*User */ 
     CountriesPrepService.$inject = ['CountryResource']
     function CountriesPrepService(CountryResource) {
         return CountryResource.getAllCountries({ pageSize: 0 }).$promise;
     }
}());
