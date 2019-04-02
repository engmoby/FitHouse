(function () {
    'use strict';
	
    angular
        .module('home')
        .controller('sizeController', ['$scope','$translate', 'appCONSTANTS','$uibModal', 'SizeResource','sizesPrepService','ToastService',  sizeController])

    function sizeController($scope ,$translate , appCONSTANTS,$uibModal, SizeResource,sizesPrepService,ToastService){

        var vm = this;
		vm.sizes = sizesPrepService;
		$('.pmd-sidebar-nav>li>a').removeClass("active")
		$($('.pmd-sidebar-nav').children()[1].children[0]).addClass("active")
		
		function refreshSizes(){
			var k = SizeResource.getAllSizes({page:vm.currentPage}).$promise.then(function(results) {
				vm.sizes = results
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.message,"error");
            });
		}
		vm.currentPage = 1;
        vm.changePage = function (page) {
            vm.currentPage = page;
            refreshSizes();
		}
		vm.openSizeDialog = function(){		
			if($scope.selectedLanguage != appCONSTANTS.defaultLanguage)
			{
				var englishSizes;
				var k = SizeResource.getAllSizes({pagesize:0, lang: appCONSTANTS.defaultLanguage}).$promise.then(function(results) {
					englishSizes = results;
					var modalContent = $uibModal.open({
						templateUrl: './app/RestaurantAdmin/templates/editSize.html',
						controller: 'editSizeDialogController',
						controllerAs: 'editSizeDlCtrl',
						resolve:{
							mode:function(){return "map"},
							englishSizes: function(){return englishSizes.results;},
							size:function(){ return null},
							callBackFunction:function(){return refreshSizes;}
						}
						
					});
				});
			}
			else{
				var modalContent = $uibModal.open({
					templateUrl: './app/RestaurantAdmin/templates/newSize.html',
					controller: 'sizeDialogController',
					controllerAs: 'sizeDlCtrl',
					resolve:{
						callBackFunction:function(){return refreshSizes;}
					}
					
				});
			}
		}
		function confirmationDelete(model){
			SizeResource.deleteSize({sizeId:model.sizeId}).$promise.then(function(results) {
				ToastService.show("right","bottom","fadeInUp",$translate.instant('SizeDeleteSuccess'),"success");
				vm.currentPage = 1;
				refreshSizes();
			},
            function(data, status) {
				ToastService.show("right","bottom","fadeInUp",data.data.message,"error");
            });
		}
		vm.openDeleteSizeDialog = function(name,id,model){			
			var modalContent = $uibModal.open({
				templateUrl: './app/core/Delete/templates/ConfirmDeleteDialog.html',
				controller: 'confirmDeleteDialogController',
				controllerAs: 'deleteDlCtrl',
				resolve: {
					model: function () { return model },
					itemName: function () { return name },
					itemId: function() { return id },
					message:function() { return null},
					callBackFunction:function() { return confirmationDelete }
				}
				
			});
		}
		
		vm.openEditSizeDialog = function(index){
			var modalContent = $uibModal.open({
				templateUrl: './app/RestaurantAdmin/templates/editSize.html',
				controller: 'editSizeDialogController',
				controllerAs: 'editSizeDlCtrl',
				resolve:{
					mode:function(){return "edit"},
					englishSizes: function(){return null;},
					size:function(){ return vm.sizes.results[index]},
					callBackFunction:function(){return refreshSizes;}
				}
				
			});
			
		}
		
		
		
	}
	
}
());
