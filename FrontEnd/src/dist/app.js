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
        });

    settingsPrepService.$inject = ['GetSettingsResource']
    function settingsPrepService(GetSettingsResource) {
        return GetSettingsResource.getAllSettings().$promise;
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
		.controller('CustomController', ['$scope', '$translate', 'CustomsResourceItems', 'CustomResource', 'itemsPrepService', 'ToastService', CustomController])

	function CustomController($scope, $translate, CustomsResourceItems, CustomResource, itemsPrepService, ToastService) {

		var vm = this;
		vm.ItemCategorized = itemsPrepService;

		vm.daysCount = 2;
		vm.mealsCount = 1;
		console.log(vm.ItemCategorized);




		vm.addItemToList = function (model) { 
		debugger;
			vm.carbs = $scope.sum(model, 'carbs');
			vm.calories = $scope.sum(model, 'calories');
			vm.protein = $scope.sum(model, 'protein');
			vm.fat = $scope.sum(model, 'fat');
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

		 		}
		$scope.sum = function (items, prop) {
			return items.reduce(function (a, b) {
				return a + b[prop];
			}, 0);
		};

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

	}

}());
(function () {
  angular
    .module('home')
    .factory('CustomResource', ['$resource', 'appCONSTANTS', CustomResource])
    .factory('CustomsResourceCategories', ['$resource', 'appCONSTANTS', CustomsResourceCategories])
    .factory('GetItemsResource', ['$resource', 'appCONSTANTS', GetItemsResource])
    .factory('CustomsResourceItems', ['$resource', 'appCONSTANTS', CustomsResourceItems]);

  function CustomResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Orders', {}, {
      createOrder: { method: 'POST', url: appCONSTANTS.API_URL + 'Orders/CreateOrder', useToken: true }
    })
  }
  function CustomsResourceItems($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Categories/:CategoryId/GetAllActiveItems', {}, {
      getAllItems: { method: 'GET', useToken: true, params: { lang: '@lang' } }
    })
  }
  function CustomsResourceCategories($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Category/GetAllCategs', {}, {
      getAllCategories: { method: 'GET', useToken: true, params: { lang: '@lang' }, isArray: true }
    })
  }


  function GetItemsResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Items/GetAllItems', {}, {
      getAllItemsCategorized: { method: 'GET', useToken: true, params: { lang: '@lang' }, isArray: true }
    })
  }

}());
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
        .controller('homeController', ['$scope', '$stateParams', '$translate', 'appCONSTANTS', 'mealsPrepService', 'programPrepService', 'settingsPrepService'
            , 'daysPrepService', homeController])

    function homeController($scope, $stateParams, $translate, appCONSTANTS, mealsPrepService, programPrepService
        , settingsPrepService, daysPrepService) {

        $scope.mealsPrepService = mealsPrepService.results;
        $scope.programPrepService = programPrepService.results;
        $scope.settingsPrepService = settingsPrepService;
        $scope.dayList = daysPrepService;

        $scope.isSnack = false;
        $scope.isBreakFast = false;

        $scope.submitCustomise = function () {
            localStorage.setItem('mealPerDay', $scope.mealPerDay);
            localStorage.setItem('programDaysCount', $scope.programDaysCount);
            localStorage.setItem('dayList', $scope.SelectedDays);
            localStorage.setItem('isBreakFast', $scope.isBreakFast);
            localStorage.setItem('isSnack', $scope.isSnack);
            localStorage.setItem('itemDatetime', $scope.itemDatetime);
        }

        $scope.bookMeal = function (meal) {
            localStorage.setItem('meal', meal);
        }

        $scope.bookProgram = function (program) {
            localStorage.setItem('program', program);
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
    .factory('GetDaysResource', ['$resource', 'appCONSTANTS', GetDaysResource])

    ;



  function GetDaysResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Day/GetAllDays', {}, {
      gatAllDays: { method: 'GET', useToken: true, isArray: true }
    })
  }

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

