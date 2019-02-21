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
                        homePrepService: homePrepService,
                        contactUsPrepService: contactUsPrepService,
                        homePrepService: homePrepService
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


                .state('Custom', {
                    url: '/Custom',
                    templateUrl: './app/GlobalAdmin/customProgram/templates/Custom.html',
                    controller: 'CustomController',
                    'controllerAs': 'CustomCtrl',
                    resolve: {
                        itemsPrepService: itemsPrepService
                    }
                })

        });



    aboutUsPrepService.$inject = ['AboutUsResource']
    function aboutUsPrepService(AboutUsResource) {
    }

    contactUsPrepService.$inject = ['ContactUsResource']

    function contactUsPrepService(ContactUsResource) {
    }

    homePrepService.$inject = ['HomeResource']

    function homePrepService(HomeResource) {
    }

    leadershipPrepService.$inject = ['LeadershipResource']
    function leadershipPrepService(LeadershipResource) {
    }

    CategoreisPrepService.$inject = ['CustomsResourceCategories']
    function CategoreisPrepService(CustomsResourceCategories) {
        return CustomsResourceCategories.getAllCategories().$promise;
    }
    itemsPrepService.$inject = ['GetItemsResource']
    function itemsPrepService(GetItemsResource) {
        return GetItemsResource.getAllItemsCategorized().$promise;
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
        .controller('homeController', ['$scope', '$stateParams', '$translate', '$state', 'appCONSTANTS', 'homePrepService', 'contactUsPrepService', homeController])

    function homeController($scope, $stateParams, $translate, $state, appCONSTANTS, homePrepService, contactUsPrepService) {

        $scope.home = homePrepService;
        $scope.contactUs = contactUsPrepService;
        $scope.goToCustomPage = function () {
			$state.go('Custom');

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
(function() {
    angular
      .module('home')
      .factory('AboutUsResource', ['$resource', 'appCONSTANTS', AboutUsResource])
      .factory('ContactUsResource', ['$resource', 'appCONSTANTS', ContactUsResource])
      .factory('HomeResource', ['$resource', 'appCONSTANTS', HomeResource])
      .factory('LeadershipResource', ['$resource', 'appCONSTANTS', LeadershipResource])
     ;

      function AboutUsResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'AboutUs', {}, { 
        getAboutUs: { method: 'GET',useToken: true}
      })
    }

        function ContactUsResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'ContactUs', {}, { 
        getContactUs: { method: 'GET',useToken: true}
      })
    }

    function HomeResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Home', {}, { 
        getHome: { method: 'GET',useToken: true}
      })
    }

    function LeadershipResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'OurTeams', {}, { 
        getLeadership: { method: 'GET',useToken: true, isArray:true}
      })
    }

        }());

