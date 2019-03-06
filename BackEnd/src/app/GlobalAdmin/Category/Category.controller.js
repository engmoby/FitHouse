(function () {
    'use strict';

    angular
        .module('home')
        .controller('CategoryController', ['$rootScope', '$scope', '$filter', '$translate',
            '$state', 'CategoryResource', '$localStorage',
            'authorizationService', 'appCONSTANTS', 'blockUI', '$uibModal', 'CategoryPrepService',
            'ToastService', CategoryController]);


    function CategoryController($rootScope, $scope, $filter, $translate,
        $state, CategoryResource, $localStorage, authorizationService,
        appCONSTANTS, blockUI, $uibModal, CategoryPrepService, ToastService) {
        $('.pmd-sidebar-nav>li>a').removeClass("active")
        $($('.pmd-sidebar-nav').children()[4].children[0]).addClass("active")
        debugger;
        var vm = this;
        vm.currentPage = 1;
        $scope.totalCount = CategoryPrepService.totalCount;
        $scope.CategoryList = CategoryPrepService;
        console.log(CategoryPrepService);

        function refreshCategorys() {
            blockUI.start("Loading...");

            var k = CategoryResource.getAllCategorys({ page: vm.currentPage }).$promise.then(function (results) {
                $scope.CategoryList = results;

                console.log($scope.CategoryList);
                blockUI.stop();

            },
                function (data, status) {
                    blockUI.stop();
                    ToastService.show("right", "bottom", "fadeInUp", data.message, "error");
                });
        }
        function change(category, isDeleted) {
            debugger;
            var updateObj = new CategoryResource();
            updateObj.CategoryId = category.categoryId;
            if (!isDeleted)
                updateObj.isActive = (category.isActive == true ? false : true);
            updateObj.isDeleted = category.isDeleted;

            updateObj.$update().then(
                function (data, status) {
                    if (isDeleted)
                        refreshCategorys();

                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
                    category.isActive = updateObj.isActive;

                },
                function (data, status) {
                    ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
                }
            );

        }
        vm.UpdateCategory = function (category) {
            change(category, false);
        }

        function confirmationDelete(model) {
            model.isDeleted = true;
            change(model, true);

        }
        vm.openDeleteDialog = function (model, name, id) {
            var modalContent = $uibModal.open({
                templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
                controller: 'confirmDeleteDialogController',
                controllerAs: 'deleteDlCtrl',
                resolve: {
                    model: function () { return model },
                    itemName: function () { return name },
                    itemId: function () { return id },
                    message: function () { return null },
                    callBackFunction: function () { return confirmationDelete }
                }

            });
        }

        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshCategorys();
        }

    }

})();
