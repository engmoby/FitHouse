(function () {
    'use strict';

    angular
        .module('home')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: './app/GlobalAdmin/user/templates/home.html',
                    controller: 'homeController',
                    'controllerAs': 'homeCtrl',
                    resolve: {
                        mealsPrepService: mealsPrepService,
                        programPrepService: programPrepService,
                        settingsPrepService: settingsPrepService,
                        daysPrepService:daysPrepService
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
                    'controllerAs': 'CustomCtrl' ,
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
}());
