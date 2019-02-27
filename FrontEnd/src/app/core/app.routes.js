(function() {
    'use strict';

    angular
        .module('core')
        .config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            // main views
            $stateProvider
              .state('root', {
                    url: '/',
               
                    controller: 'loginController',
                   
                    data: {
                       permissions: {
                          
                        }
                    },
                 
                })
                
                // .state('addUser', {
                //     url: '/addUser',
                //     templateUrl: './app/GlobalAdmin/register/templates/addUser.html',
                //     controller: 'userController',
                //     'controllerAs': 'userCtrl', 
                //     resolve: { 
                //           CountriesPrepService: CountriesPrepService,

                //     } 
                // })
                .state('login', {
                    url: '/login',
                    templateUrl: './app/core/login/templates/login.html',
                    'controller': 'loginController'
                })
                .state('403', {
                    url: '/403',
                    templateUrl: './app/shell/403.html'
                })
                .state('404', {
                    url: '/404',
                    templateUrl: './app/shell/404.html'
                })
                .state('401', {
                    url: '/401',
                    templateUrl: './app/shell/401.html'
                })
        });
    
     /*User */ 
     CountriesPrepService.$inject = ['CountryResource']
     function CountriesPrepService(CountryResource) {
         return CountryResource.getAllCountries({ pageSize: 0 }).$promise;
     }
}());
