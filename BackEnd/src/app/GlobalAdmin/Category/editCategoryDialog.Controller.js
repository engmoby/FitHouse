(function () {
    'use strict';

    angular
        .module('home')
        .controller('editCategoryDialogController', ['$scope','blockUI', '$filter', '$http', '$state', 'appCONSTANTS', '$translate',
            'CategoryResource', 'ToastService', 'CategoryByIdPrepService', editCategoryDialogController])

    function editCategoryDialogController($scope,blockUI, $filter, $http, $state, appCONSTANTS, $translate, CategoryResource,
        ToastService, CategoryByIdPrepService) {
        var vm = this;
        vm.language = appCONSTANTS.supportedLanguage;
        vm.Category = CategoryByIdPrepService;
        console.log(vm.Category);


        vm.Close = function () {
            $state.go('Category');
        }
        vm.UpdateCategory = function () {
            blockUI.start("Loading...");

            var updateObj = new CategoryResource();
            updateObj.CategoryId = vm.Category.categoryId;
            updateObj.titleDictionary = vm.Category.titleDictionary; 
            updateObj.IsDeleted = vm.Category.IsDeleted;
            updateObj.isActive = vm.Category.isActive;
            updateObj.$update().then(
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    blockUI.stop();

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
