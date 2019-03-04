(function () {
    'use strict';

    angular
        .module('home')
        .controller('homeCtrl', ['$rootScope', 'blockUI', '$transitions', '$translate', '$scope', 'appCONSTANTS', '$state', '_', 'authenticationService', 'authorizationService', '$localStorage', homeCtrl])

    function homeCtrl($rootScope, blockUI, $transitions, $translate, $scope, appCONSTANTS, $state, _, authenticationService, authorizationService, $localStorage) {
        $scope.$on('LOAD', function () { $scope.loading = true });
        $scope.$on('UNLOAD', function () { $scope.loading = false });
        var vm = this;
        $scope.emailEmpty = false;
        $scope.passwordEmpty = false;
        $scope.languages = [{
            id: "en",
            label: "english"
        },
        {
            id: "ar",
            label: "arabic"
        }];
        if ($localStorage.language == null) {
            $scope.selectedLanguage = $scope.languages[0].id;
            $localStorage.language = $scope.selectedLanguage;
        }
        else
            $scope.selectedLanguage = $localStorage.language;

        $translate.use($scope.selectedLanguage);
        $scope.init =
            function () {
                $scope.user = authorizationService.getUser();

            }
        $scope.init();

        $scope.submit = function (username, password) {
            blockUI.start('Loading...');

            authorizationService.isPasswordchanged = false;
            $('#passwordChanged').hide();
            //  $('#userInActivated').hide();
            if (!username)
                $scope.emailEmpty = true;
            if (!password)
                $scope.passwordEmpty = true;;
            if (username && password) {
                $scope.afterSubmit = false;
                $scope.emailEmpty = $scope.passwordEmpty = false;
                authenticationService.authenticate(username, password).then(loginSuccess, loginFailed)
                //.error(loginFailed);;
            } else {
                $scope.afterSubmit = false;
            }
        };

        $scope.reloadPage = true;
        $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {

            if (fromState.name != "" && $scope.reloadPage) {
                e.preventDefault();
                $scope.reloadPage = false;
                $state.go(toState.name, toParams, { reload: true });
            }
        });
        $transitions.onStart({}, function (transition) {
            if (authorizationService.isLoggedIn()) {
                var user = authorizationService.getUser();
                // var authorize = false;
                // if (transition._targetState._identifier.self != undefined) {
                //     if (transition._targetState._identifier.self.data.permissions.only != undefined) {
                //         transition._targetState._identifier.self.data.permissions.only.forEach(function (element) {
                //             if (user.PermissionId.includes(element.toString()))
                //                 authorize = true;
                //         }, this);
                //         if (!authorize)
                //             $state.go(transition._targetState._identifier.self.data.permissions.redirectTo)
                //     }
                // }
            }
            else {
                $state.go('login');
            }
        });
        $scope.$watch(function () { return $localStorage.authInfo; }, function (newVal, oldVal) {
            if (oldVal != undefined && newVal === undefined && $localStorage.authInfo == undefined) {
                console.log('logout');
                $state.go('login');
            }
            if (oldVal === undefined && newVal !== undefined && $localStorage.authInfo != undefined) {
                console.log('login');
                $scope.user = authorizationService.getUser();
                loginSuccess()
                // authorizationService.isLoggedIn() && !location.href.contains('connect')
            }
        })
        function loginSuccess(response) {
            $scope.afterSubmit = false;
            $scope.invalidLoginInfo = false;
            $scope.inActiveUser = false;
            $scope.user = authorizationService.getUser(); 
            if (response != undefined) {
                if (response.data.PermissionId != "") {
                    $scope.invalidLoginInfo = false;
                    $scope.inActiveNotClient = true;
                }
                else
                    $state.go('homePage');
            }
            else {
                blockUI.stop();
                authorizationService.logout();
                $state.go('login');
            }

        }

        function loginFailed(response) {
            $scope.afterSubmit = true;
            //   blockUI.stop();
            if (response.data == null) {
                $scope.invalidLoginInfo = false;
                $scope.inActiveUser = true;
            }
            // $scope.invalidLoginInfo = true;
            if (response) {
                if (response.data.error == "invalid grant") {
                    $scope.invalidLoginInfo = true;
                    $scope.inActiveUser = false;
                }
                if (response.data.error == "inactive user") {
                    $scope.invalidLoginInfo = false;
                    $scope.inActiveUser = true;
                }

            }
        }

        $scope.logout = function () {
            authorizationService.logout();
            $state.go('login');
        }
        $scope.reset = function () {
            $scope.invalidLoginInfo = false;
            $scope.inActiveUser = false;
        }
        $scope.isLoggedIn = function () {
            return authorizationService.isLoggedIn();
        }
        $scope.changeLanguage = function (language) {
            $scope.selectedLanguage = language;
            $localStorage.language = $scope.selectedLanguage;
            $state.reload();
            $translate.use(language);
        }
        $scope.getCurrentTime = function () {
            return (new Date()).getTime()
        }


    }


}());
