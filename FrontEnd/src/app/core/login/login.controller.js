(function () {
    'use strict';

    angular
        .module('home')
        .controller('loginController', ['$rootScope', '$scope', '$state', '$localStorage', 'authorizationService', 'appCONSTANTS','blockUI', loginController]);

    function loginController($rootScope, $scope, $state, $localStorage, authorizationService, appCONSTANTS,blockUI) {

        if ($localStorage.authInfo) {
            blockUI.start("Loading...");
            var user = authorizationService.getUser();

            // if (user.PermissionId[0] == 1)
            //     $state.go('users'); 
            // if (user.PermissionId[0] == 3)
            //     $state.go('Role');
            // if (user.PermissionId[0] == 4)
            //     $state.go('Area'); 
            // if ($scope.user.PermissionId[0] == 10)
            blockUI.stop();
            $state.go('homePage');

        }
        else {
            $state.go('login');
        }

        $scope.Register = function () {
         debugger;   $state.go('addUser');

        }
    }

}())