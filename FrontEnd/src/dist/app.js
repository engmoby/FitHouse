(function () {
    'use strict';

    angular
        .module('home')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('aboutUs', {
                    url: '/aboutUs',
                    templateUrl: './app/GlobalAdmin/user/templates/about-us.html',
                    controller: 'aboutUsController',
                    'controllerAs': 'aboutUsCtrl',
                    resolve: {
                        aboutUsPrepService: aboutUsPrepService,
                        contactUsPrepService: contactUsPrepService,
                        homePrepService: homePrepService
                    }


                })

                .state('contactUs', {
                    url: '/contactUs',
                    templateUrl: './app/GlobalAdmin/user/templates/contact-us.html',
                    controller: 'contactUsController',
                    'controllerAs': 'contactUsCtrl',
                    resolve: {
                        contactUsPrepService: contactUsPrepService,
                        homePrepService: homePrepService
                    }
                })

                .state('home', {
                    url: '/home',
                    templateUrl: './app/GlobalAdmin/user/templates/home.html',
                    controller: 'homeController',
                    'controllerAs': 'homeCtrl',
                    resolve: {
                        mealsPrepService: mealsPrepService,
                        programPrepService: programPrepService,
                        settingsPrepService: settingsPrepService
                    }
                })

                .state('leadership', {
                    url: '/leadership',
                    templateUrl: './app/GlobalAdmin/user/templates/leadership.html',
                    controller: 'leadershipController',
                    'controllerAs': 'leadershipCtrl',
                    resolve: {
                        leadershipPrepService: leadershipPrepService,
                        contactUsPrepService: contactUsPrepService,
                        homePrepService: homePrepService
                    }
                })
        });

    settingsPrepService.$inject = ['GetSettingsResource']
    function settingsPrepService(GetSettingsResource) {
        return GetSettingsResource.getAllSettings().$promise;
    }

    mealsPrepService.$inject = ['GetMealsResource', '$stateParams']
    function mealsPrepService(GetMealsResource, $stateParams) {
        return GetMealsResource.getAllMeals().$promise;
    }

    programPrepService.$inject = ['GetProgramResource']
    function programPrepService(GetProgramResource) {
        return GetProgramResource.gatAllPrograms().$promise;
    }

    aboutUsPrepService.$inject = ['AboutUsResource']

    function aboutUsPrepService(AboutUsResource) {
        return AboutUsResource.getAboutUs().$promise;
    }

    contactUsPrepService.$inject = ['ContactUsResource']

    function contactUsPrepService(ContactUsResource) {
        return ContactUsResource.getContactUs().$promise;
    }

    homePrepService.$inject = ['HomeResource']

    function homePrepService(HomeResource) {
        return HomeResource.getHome().$promise;
    }

    leadershipPrepService.$inject = ['LeadershipResource']

    function leadershipPrepService(LeadershipResource) {
        return LeadershipResource.getLeadership().$promise;
    }

}());
(function() {
    'use strict';

      angular
      .module('home')
      .config(config)
      .run(runBlock);

      config.$inject = ['ngProgressLiteProvider'];
    runBlock.$inject = ['$rootScope', 'ngProgressLite' ];

      function config(ngProgressLiteProvider) {
      ngProgressLiteProvider.settings.speed = 1000;

      }

      function runBlock($rootScope, ngProgressLite ) {

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
          startProgress();
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
        .controller('aboutUsController', ['$scope', 'homePrepService','$stateParams','$translate', 'appCONSTANTS','ToastService', 'aboutUsPrepService', 'contactUsPrepService',  aboutUsController])

    function aboutUsController($scope, homePrepService,$stateParams ,$translate , appCONSTANTS, ToastService, aboutUsPrepService, contactUsPrepService){

                $scope.aboutUs = aboutUsPrepService;
        $scope.contactUs = contactUsPrepService;
        $scope.home = homePrepService;


	}

	}
());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('contactUsController', ['$scope', 'homePrepService', '$stateParams', '$sce','$translate', 'appCONSTANTS', 'contactUsPrepService',  contactUsController])

    function contactUsController($scope, homePrepService, $stateParams, $sce,$translate , appCONSTANTS, contactUsPrepService){

                $scope.contactUs = contactUsPrepService;
        $scope.hotelLocationUrl = $sce.trustAsResourceUrl($scope.contactUs.location);
        $scope.home = homePrepService;
	}

	}
());
(function () {
    'use strict';

    angular
        .module('home')
        .filter('range', function () {
            return function (input, total) {
                total = parseInt(total);

                for (var i = 0; i < total; i++) {
                    input.push(i);
                }

                return input;
            }
        })
        .controller('homeController', ['$scope', '$stateParams', '$translate', 'appCONSTANTS', 'mealsPrepService', 'programPrepService', 'settingsPrepService', homeController])

    function homeController($scope, $stateParams, $translate, appCONSTANTS, mealsPrepService, programPrepService, settingsPrepService) {

        $scope.mealsPrepService = mealsPrepService.results;
        $scope.programPrepService = programPrepService.results;
        $scope.settingsPrepService = settingsPrepService;

        $scope.submitCustomise = function(){
            localStorage.setItem('programName', $scope.programName);
            localStorage.setItem('programDescription', $scope.programDescription);
            localStorage.setItem('mealPerDay', $scope.mealPerDay);
            localStorage.setItem('programDaysCount', $scope.programDaysCount);
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

    }

}
    ());
(function () {
    'use strict';

	    angular
        .module('home')
        .controller('leadershipController', ['$scope', 'homePrepService','$stateParams','$translate', 'appCONSTANTS','ToastService', 'leadershipPrepService', 'contactUsPrepService',  leadershipController])

    function leadershipController($scope, homePrepService,$stateParams ,$translate , appCONSTANTS, ToastService, leadershipPrepService, contactUsPrepService){

                $scope.leadership = leadershipPrepService;
        $scope.contactUs = contactUsPrepService;
        $scope.home = homePrepService;



        					}

	}
());
(function () {
  angular
    .module('home')
    .factory('AboutUsResource', ['$resource', 'appCONSTANTS', AboutUsResource])
    .factory('ContactUsResource', ['$resource', 'appCONSTANTS', ContactUsResource])
    .factory('HomeResource', ['$resource', 'appCONSTANTS', HomeResource])
    .factory('LeadershipResource', ['$resource', 'appCONSTANTS', LeadershipResource])
    .factory('GetMealsResource', ['$resource', 'appCONSTANTS', GetMealsResource])
    .factory('GetSettingsResource', ['$resource', 'appCONSTANTS', GetSettingsResource])
    .factory('GetProgramResource', ['$resource', 'appCONSTANTS', GetProgramResource])
    ;


      function GetSettingsResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Setting/GetSetting', {}, {
      getAllSettings: { method: 'GET', useToken: true }
    })
  }

  function AboutUsResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'AboutUs', {}, {
      getAboutUs: { method: 'GET', useToken: true }
    })
  }

  function GetProgramResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Program', {}, {
      gatAllPrograms: { method: 'GET', useToken: true }
    })
  }


  function ContactUsResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'ContactUs', {}, {
      getContactUs: { method: 'GET', useToken: true }
    })
  }

  function HomeResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Home', {}, {
      getHome: { method: 'GET', useToken: true }
    })
  }

  function LeadershipResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'OurTeams', {}, {
      getLeadership: { method: 'GET', useToken: true, isArray: true }
    })
  }

  function GetMealsResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Meals/GetAllMeals', {}, {
      getAllMeals: { method: 'GET', useToken: true, params: { lang: '@lang' } },
    })
  }


}());

