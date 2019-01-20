(function () {
    'use strict';

    angular
        .module('home')
        .controller('CategoryController', ['$rootScope', '$scope', '$filter', '$translate',
            '$state', 'CategoryResource',   '$localStorage',
            'authorizationService', 'appCONSTANTS','blockUI',
            'ToastService', CategoryController]);


    function CategoryController($rootScope, $scope, $filter, $translate,
        $state, CategoryResource,  $localStorage, authorizationService,
        appCONSTANTS,blockUI, ToastService) {

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

    }

})();
