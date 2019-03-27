(function () {
    'use strict';

    angular
        .module('home')
        .controller('createCategoryDialogController', ['$scope', 'blockUI', '$http', '$state', 'appCONSTANTS', '$translate',
            'CategoryResource', 'ToastService', '$rootScope', createCategoryDialogController])

    function createCategoryDialogController($scope, blockUI, $http, $state, appCONSTANTS, $translate, CategoryResource,
        ToastService, $rootScope) {
        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;
        vm.close = function () {
            $state.go('Category');
        }

        vm.AddNewCategory = function () {
            blockUI.start("Loading...");
            var newObj = new CategoryResource();
            newObj.titleDictionary = vm.titleDictionary;
            newObj.IsDeleted = false;

            newObj.$create().then(
                function (data, status) {
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddedSuccessfully'), "success");
                    $state.go('Category');

                },
                function (data, status) {
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }

    }
}());
