(function () {
    'use strict';

    angular
        .module('home')
        .controller('editCategoryDialogController', ['$scope', '$filter', '$http', '$state', 'appCONSTANTS', '$translate',
            'CategoryResource', 'ToastService', 'CategoryByIdPrepService', editCategoryDialogController])

    function editCategoryDialogController($scope, $filter, $http, $state, appCONSTANTS, $translate, CategoryResource,
        ToastService, CategoryByIdPrepService) {
        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;
        vm.Category = CategoryByIdPrepService;
        console.log(vm.Category);


        vm.Close = function () {
            $state.go('Category');
        }
        vm.UpdateCategory = function () {
            var updateObj = new CategoryResource();
            updateObj.CategoryId = vm.Category.categoryId;
            updateObj.titleDictionary = vm.Category.titleDictionary;

            updateObj.$update().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");

                    $state.go('Category');

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );
        }
    }
}());
