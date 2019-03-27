(function () {
    'use strict';

    angular
        .module('home')
        .controller('loginController', ['$rootScope', '$scope', '$state','$translate', '$localStorage', 'authorizationService', 'appCONSTANTS','blockUI', loginController]);

    function loginController($rootScope, $scope, $state,$translate, $localStorage, authorizationService, appCONSTANTS,blockUI) {
       // blockUI.start($translate.instant('loading'));

        if ($localStorage.authInfo) {
            var user = authorizationService.getUser();

            // if (user.PermissionId[0] == 1)
            //     $state.go('users'); 
            // if (user.PermissionId[0] == 3)
            //     $state.go('Role');
            // if (user.PermissionId[0] == 4)
            //     $state.go('Area'); 
            // if ($scope.user.PermissionId[0] == 10)
            blockUI.stop();
            // $state.go('homePage');
            $state.go('program');

        }
        else {
            $state.go('login');
        }

        $scope.Register = function () { 
           $state.go('addUser');

        }
    }

}())