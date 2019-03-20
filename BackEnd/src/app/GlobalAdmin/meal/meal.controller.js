(function () {
	'use strict';

	angular
		.module('home')
		.controller('MealController', ['$scope', '$translate', '$stateParams', 'appCONSTANTS', '$uibModal', 'GetMealsResource', 'MealResource', 'mealsPrepService', 'ToastService', 'ActivateMealResource', 'DeactivateMealResource', MealController])

	function MealController($scope, $translate, $stateParams, appCONSTANTS, $uibModal, GetMealsResource, MealResource, mealsPrepService, ToastService, ActivateMealResource, DeactivateMealResource) {

		var vm = this;
		vm.meals = mealsPrepService;  
		$('.pmd-sidebar-nav>li>a').removeClass("active")
		$($('.pmd-sidebar-nav').children()[7].children[0]).addClass("active")

		vm.Now = $scope.getCurrentTime();
		function refreshMeals() {
			var k = GetMealsResource.getAllMeals({ CategoryId: $stateParams.categoryId, page: vm.currentPage }).$promise.then(function (results) {
				vm.meals = results//.results;
			},
				function (data, status) {
					ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
				});
		}
		vm.currentPage = 1;
		vm.changePage = function (page) {
			vm.currentPage = page;
			refreshMeals();
		}


		function confirmationDelete(meal) {
			debugger;
			MealResource.deleteMeal({ mealId: meal.mealId }).$promise.then(function (results) {
		debugger;
		ToastService.show("right", "bottom", "fadeInUp", $translate.instant('DeletedSuccessfully'), "success");
				refreshMeals();
			},
				function (data, status) {
					ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
				});
		}
		vm.openDeleteDialog = function (model,name, id) {
		debugger;
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
		vm.UpdateStatus = function (meal) {
			debugger;
			if (meal.isActive == false)
				Activate(meal);
			else
				Deactivate(meal);
			//refreshMeals();
		}
		function Activate(meal) {
			ActivateMealResource.Activate({ mealId: meal.mealId })
				.$promise.then(function (result) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
					meal.isActive = true;
				},
					function (data, status) {
						debugger;
						ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
						meal.isActive = true;
					})
		}

		function Deactivate(meal) {
			DeactivateMealResource.Deactivate({ mealId: meal.mealId })
				.$promise.then(function (result) {
                    ToastService.show("right", "bottom", "fadeInUp", $translate.instant('Editeduccessfully'), "success");
					meal.isActive = false;
				},
					function (data, status) {
						debugger;
						ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
						if (data == null) meal.isActive = false;
					})
		}


	}

}
	());
