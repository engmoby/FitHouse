angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Area/templates/Area.html',
    '\n' +
    '<div>\n' +
    '        <div ncy-breadcrumb></div>  \n' +
    '    <div style="margin-bottom:10px">\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" ng-click="$state.go(\'newArea\',{countryId: $stateParams.countryId,regionId: $stateParams.regionId,cityId:$stateParams.cityId});" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddNew\' | translate}}</button>\n' +
    '\n' +
    '    </div> \n' +
    '    <div ng-if="AreaList.results.length == 0">\n' +
    '        <span>{{\'NoAreasAvailable\' | translate}}</span>\n' +
    '    </div>\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="AreaList.results.length > 0">\n' +
    '        <div class="table-responsive"></div>\n' +
    '        <table class="table pmd-table table-hover">\n' +
    '            <thead>\n' +
    '                <tr>\n' +
    '                    <th>{{\'Name\' | translate}}</th>\n' +
    '                    <!-- <th>{{\'status\' | translate}}</th> -->\n' +
    '                    <th>{{\'Branch\' | translate}}</th>\n' +
    '                    <th></th>\n' +
    '                </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '                <tr ng-repeat-start="Area in AreaList.results">\n' +
    '                    <td data-title="Name">{{Area.titleDictionary[selectedLanguage]}}</td>\n' +
    '                    \n' +
    '                    <!-- <td>\n' +
    '                        <p ng-show="Area.isStatic"> Static</p>\n' +
    '                    </td> -->\n' +
    '                    <td>\n' +
    '                        <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="Area.branches.length != 0" ng-click="$state.go(\'newBranch\',{countryId: $stateParams.countryId,regionId: $stateParams.regionId,cityId:$stateParams.cityId,areaId: Area.areaId});" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddNewBranch\' | translate}}</button>\n' +
    '                        <span href="javascript:void(0);" ng-click="Area.show=!Area.show;AreaCtrl.showMore($event)" ng-show="Area.branches.length != 0"\n' +
    '                              class="btn pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-default btn-sm child-table-expand direct-expand"><i class="material-icons md-dark pmd-sm"></i></span>\n' +
    '                    </td>\n' +
    '                   \n' +
    '                    <td width="30%" ng-show="!Area.isStatic">\n' +
    '                        <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="$state.go(\'editArea\',{countryId: $stateParams.countryId,regionId: $stateParams.regionId,cityId:$stateParams.cityId,areaId: Area.areaId});">mode_edit</i>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '                <tr ng-repeat-end ng-show="Area.show">\n' +
    '                    <td>\n' +
    '                        <table class="table pmd-table table-hover">\n' +
    '                            <thead>\n' +
    '                                <tr>\n' +
    '                                    <th>{{\'Name\' | translate}}</th>\n' +
    '                                    <!-- <th>{{\'status\' | translate}}</th> -->\n' +
    '                                    <th></th>\n' +
    '                                </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                                <tr ng-repeat="Branch in Area.branches">\n' +
    '                                    <td data-title="Name">{{Branch.titleDictionary[selectedLanguage]}}</td> \n' +
    '                                    <!-- <td>\n' +
    '                                        <p ng-show="Branch.isStatic"> Static</p>\n' +
    '                                    </td> -->\n' +
    '                                    <td width="30%" ng-show="!Branch.isStatic">\n' +
    '                                        <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="$state.go(\'editBranch\',{countryId: $stateParams.countryId,regionId: $stateParams.regionId,cityId:$stateParams.cityId,areaId: Area.areaId,branchId: Branch.branchId});">mode_edit</i>\n' +
    '                                    </td>\n' +
    '                                </tr>\n' +
    '                            </tbody>\n' +
    '                        </table>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '            </tbody>\n' +
    '        </table>\n' +
    '    </div>\n' +
    '    <div style="text-align:center;direction: ltr" paging page="1" page-size="10" total="totalCount" paging-action="changePage(page)"\n' +
    '         flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Area/templates/edit.html',
    '<div ncy-breadcrumb></div>  \n' +
    '<div class="modal-content">\n' +
    '	<div class="modal-header bordered">\n' +
    '		<h2 class="pmd-card-title-text">{{\'Area\' | translate}}</h2>\n' +
    '	</div>\n' +
    '	<div class="modal-body">\n' +
    '		<form class="form-horizontal" name="editTypeForm"> \n' +
    '                <div> \n' +
    '                    <!-- Nav tabs -->\n' +
    '                    <ul class="nav nav-tabs" role="tablist">\n' +
    '                        <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editAreaCtrl.language">\n' +
    '                            <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                                {{lang.value | translate}}\n' +
    '                            </a>\n' +
    '                        </li> \n' +
    '                    </ul>\n' +
    '                    <div class="pmd-card">\n' +
    '                        <div class="pmd-card-body">\n' +
    '                            <!-- Tab panes -->\n' +
    '                            <div class="tab-content">\n' +
    '                                <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editAreaCtrl.language" id="{{lang.value}}-form">\n' +
    '                                    <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                                        <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                        <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="editAreaCtrl.Area.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                        <div ng-messages="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '                                            \n' +
    '                                            <div ng-show="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                            <div ng-show="(editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div> \n' +
    '                        </div>\n' +
    '\n' +
    '                   \n' +
    '                    </div>\n' +
    '                </div> \n' +
    ' \n' +
    '		</form>\n' +
    '	</div>\n' +
    '	<div class="pmd-modal-action text-right">\n' +
    '		<button style="background-color: #e4e5e6;color: black!important;" ng-disabled="editTypeForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="editAreaCtrl.UpdateArea()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '		<button class="btn pmd-ripple-effect btn-default" type="button" ng-click="editAreaCtrl.Close()">{{\'DiscardBtn\' | translate}}</button>\n' +
    '	</div>\n' +
    '</div>\n' +
    '\n' +
    '	\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Area/templates/new.html',
    '<div ncy-breadcrumb></div>  \n' +
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'NewArea\' | translate}}</h2>\n' +
    '    </div>\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="newAreaForm"> \n' +
    '            <div> \n' +
    '                <!-- Nav tabs -->\n' +
    '                <ul class="nav nav-tabs" role="tablist">\n' +
    '                    <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newAreaCtrl.language">\n' +
    '                        <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                            {{lang.value | translate}}\n' +
    '                        </a>\n' +
    '                    </li> \n' +
    '                </ul>\n' +
    '                <div class="pmd-card">\n' +
    '                    <div class="pmd-card-body">\n' +
    '                        <!-- Tab panes -->\n' +
    '                        <div class="tab-content">\n' +
    '                            <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newAreaCtrl.language" id="{{lang.value}}-form">\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                    <input required Area="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="newAreaCtrl.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                    <div ng-messages="newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '										\n' +
    '                                        <div ng-show="newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div> \n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="newAreaForm.$invalid" class="btn pmd-ripple-effect btn-primary" Area="button" ng-click="newAreaCtrl.AddNewArea()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '        <button class="btn pmd-ripple-effect btn-default" Area="button" ng-click="$state.go(\'Area\',{countryId: $stateParams.countryId,regionId: $stateParams.regionId,cityId:$stateParams.cityId});">{{\'DiscardBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Branch/templates/edit.html',
    '<div ncy-breadcrumb></div>  \n' +
    '<div class="modal-content">\n' +
    '	<div class="modal-header bordered">\n' +
    '		<h2 class="pmd-card-title-text">{{\'Branch\' | translate}}</h2>\n' +
    '	</div>\n' +
    '	<div class="modal-body">\n' +
    '		<form class="form-horizontal" name="editTypeForm"> \n' +
    '                <div> \n' +
    '                    <!-- Nav tabs -->\n' +
    '                    <ul class="nav nav-tabs" role="tablist">\n' +
    '                        <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editBranchCtrl.language">\n' +
    '                            <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                                {{lang.value | translate}}\n' +
    '                            </a>\n' +
    '                        </li> \n' +
    '                    </ul>\n' +
    '                    <div class="pmd-card">\n' +
    '                        <div class="pmd-card-body">\n' +
    '                            <!-- Tab panes -->\n' +
    '                            <div class="tab-content">\n' +
    '                                <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editBranchCtrl.language" id="{{lang.value}}-form">\n' +
    '                                    <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                                        <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                        <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="editBranchCtrl.Branch.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                        <div ng-messages="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '                                            \n' +
    '                                            <div ng-show="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                            <div ng-show="(editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div> \n' +
    '                        </div>\n' +
    '\n' +
    '                   \n' +
    '                    </div>\n' +
    '                </div> \n' +
    ' \n' +
    '		</form>\n' +
    '	</div>\n' +
    '	<div class="pmd-modal-action text-right">\n' +
    '		<button style="background-color: #e4e5e6;color: black!important;" ng-disabled="editTypeForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="editBranchCtrl.UpdateBranch()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '		<button class="btn pmd-ripple-effect btn-default" type="button" ng-click="editBranchCtrl.close()">{{\'DiscardBtn\' | translate}}</button>\n' +
    '	</div>\n' +
    '</div>\n' +
    '\n' +
    '	\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Branch/templates/new.html',
    '<div ncy-breadcrumb></div>  \n' +
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'Branch\' | translate}}</h2>\n' +
    '    </div>\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="newBranchForm"> \n' +
    '            <div> \n' +
    '                <!-- Nav tabs -->\n' +
    '                <ul class="nav nav-tabs" role="tablist">\n' +
    '                    <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newBranchCtrl.language">\n' +
    '                        <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                            {{lang.value | translate}}\n' +
    '                        </a>\n' +
    '                    </li> \n' +
    '                </ul>\n' +
    '                <div class="pmd-card">\n' +
    '                    <div class="pmd-card-body">\n' +
    '                        <!-- Tab panes -->\n' +
    '                        <div class="tab-content">\n' +
    '                            <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newBranchCtrl.language" id="{{lang.value}}-form">\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                    <input required Branch="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="newBranchCtrl.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                    <div ng-messages="newBranchForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '										\n' +
    '                                        <div ng-show="newBranchForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !newBranchForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(newBranchForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || newBranchForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newBranchForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div> \n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="newBranchForm.$invalid" class="btn pmd-ripple-effect btn-primary" Branch="button" ng-click="newBranchCtrl.AddNewBranch()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '        <button class="btn pmd-ripple-effect btn-default" Branch="button" ng-click="newBranchCtrl.close()">{{\'DiscardBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Category/templates/Category.html',
    '<div>\n' +
    '    <div ncy-breadcrumb></div>\n' +
    '    <div style="margin-bottom:10px">\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" ng-click="$state.go(\'newCategory\');" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddNew\'\n' +
    '            | translate}}</button>\n' +
    '\n' +
    '    </div>\n' +
    '    <div ng-if="CategoryList.results.length == 0">\n' +
    '        <span>{{\'NoCategorysAvailable\' | translate}}</span>\n' +
    '    </div>\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="CategoryList.results.length > 0">\n' +
    '        <div class="table-responsive"></div>\n' +
    '        <table class="table pmd-table table-hover">\n' +
    '            <thead>\n' +
    '                <tr>\n' +
    '                    <th>{{\'Name\' | translate}}</th>\n' +
    '                    <th>{{\'Status\' | translate}}</th>\n' +
    '                    <th></th>\n' +
    '                </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '                <tr ng-repeat="Category in CategoryList.results">\n' +
    '                    <td data-title="Name">{{Category.titleDictionary[selectedLanguage]}}</td>\n' +
    '                    <td>\n' +
    '                        <div class="btn-switch" ng-class="{\'btn-switch--on\':Category.isActive}" ng-model="Category.isActive"\n' +
    '                            ng-click="CategoryCtrl.UpdateCategory(Category)">\n' +
    '\n' +
    '                            <div class="btn-switch-circle" ng-class="{\'btn-switch-circle--on\':Category.isActive}"\n' +
    '                                ng-model="Category.isActive" ng-click="CategoryCtrl.UpdateCategory(Category)">\n' +
    '                            </div>\n' +
    '                    </td>\n' +
    '                    <td width="30%" ng-show="!Category.isStatic">\n' +
    '                        <a ng-click="$state.go(\'Items\', {categoryId: Category.categoryId});" class="cursorPointer">{{\'ItemsBtn\'\n' +
    '                            | translate}}</a>\n' +
    '                        <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="$state.go(\'editCategory\',{categoryId: Category.categoryId});">mode_edit</i>\n' +
    '                        <i class="material-icons pmd-md deleteButton cursorPointer font25" ng-click="CategoryCtrl.openDeleteDialog(Category,Category.titleDictionary[selectedLanguage],Category.categoryId)">delete</i>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '            </tbody>\n' +
    '        </table>\n' +
    '    </div>\n' +
    '    <div style="text-align:center;direction: ltr" paging page="1" page-size="10" total="totalCount" paging-action="changePage(page)"\n' +
    '        flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '    </div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Category/templates/edit.html',
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'CategoryLbl\' | translate}}</h2>\n' +
    '    </div>\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="editTypeForm">\n' +
    '            <div>\n' +
    '                <!-- Nav tabs -->\n' +
    '                <ul class="nav nav-tabs" role="tablist">\n' +
    '                    <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editCategoryCtrl.language">\n' +
    '                        <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                            {{lang.value | translate}}\n' +
    '                        </a>\n' +
    '                    </li>\n' +
    '                </ul>\n' +
    '                <div class="pmd-card">\n' +
    '                    <div class="pmd-card-body">\n' +
    '                        <!-- Tab panes -->\n' +
    '                        <div class="tab-content">\n' +
    '                            <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editCategoryCtrl.language" id="{{lang.value}}-form">\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                    <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="editCategoryCtrl.Category.titleDictionary[lang.key]"\n' +
    '                                        ng-minlength="3" ng-maxlength="255">\n' +
    '                                    <div ng-messages="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '\n' +
    '                                        <div ng-show="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    ' \n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="editTypeForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="editCategoryCtrl.UpdateCategory()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '        <button class="btn pmd-ripple-effect btn-default" type="button" ng-click="editCategoryCtrl.Close()">{{\'DiscardBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
    '        $(".select-add-tags").select2({\n' +
    '            tags: true,\n' +
    '            theme: "bootstrap",\n' +
    '            insertTag: function (data, tag) {\n' +
    '                // Insert the tag at the end of the results\n' +
    '                data.push(tag);\n' +
    '                // console.log(data);\n' +
    '            }\n' +
    '        });\n' +
    '        $(".select-with-search").select2({\n' +
    '            theme: "bootstrap"\n' +
    '        });\n' +
    '    });\n' +
    '</script>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Category/templates/new.html',
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'CategoryLbl\' | translate}}</h2>\n' +
    '    </div>\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="newCategoryForm">\n' +
    '            <div>\n' +
    '                <!-- Nav tabs -->\n' +
    '                <ul class="nav nav-tabs" role="tablist">\n' +
    '                    <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newCategoryCtrl.language">\n' +
    '                        <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                            {{lang.value | translate}}\n' +
    '                        </a>\n' +
    '                    </li>\n' +
    '                </ul>\n' +
    '                <div class="pmd-card">\n' +
    '                    <div class="pmd-card-body">\n' +
    '                        <!-- Tab panes -->\n' +
    '                        <div class="tab-content">\n' +
    '                            <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newCategoryCtrl.language" id="{{lang.value}}-form">\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                    <input required Category="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="newCategoryCtrl.titleDictionary[lang.key]"\n' +
    '                                        ng-minlength="3" ng-maxlength="255">\n' +
    '                                    <div ng-messages="newCategoryForm.titleDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '\n' +
    '                                        <div ng-show="newCategoryForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !newCategoryForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(newCategoryForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || newCategoryForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newCategoryForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                             \n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="newCategoryForm.$invalid" class="btn pmd-ripple-effect btn-primary" Category="button" ng-click="newCategoryCtrl.AddNewCategory()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '        <button class="btn pmd-ripple-effect btn-default" Category="button" ng-click="newCategoryCtrl.close()">{{\'DiscardBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
    '        $(".select-add-tags").select2({\n' +
    '            tags: true,\n' +
    '            theme: "bootstrap",\n' +
    '            insertTag: function (data, tag) {\n' +
    '                data.push(tag);\n' +
    '            }\n' +
    '        });\n' +
    '        $(".select-with-search").select2({\n' +
    '            theme: "bootstrap"\n' +
    '        });\n' +
    '    });\n' +
    '</script>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/City/templates/Cities.html',
    '\n' +
    '<div>\n' +
    '        <div ncy-breadcrumb></div>  \n' +
    '    <div style="margin-bottom:10px">\n' +
    '        <button  style="background-color: #e4e5e6;color: black!important;" ng-click="$state.go(\'newCity\',{ countryId: $stateParams.countryId,regionId: $stateParams.regionId });" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddNew\' | translate}}</button>\n' +
    '        \n' +
    '    </div> \n' +
    '    <div ng-if="Cities.results.length == 0">\n' +
    '        <span>{{\'NoCitiesAvailable\' | translate}}</span>\n' +
    '    </div>\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="Cities.results.length > 0">\n' +
    '        <div class="table-responsive"></div>\n' +
    '        <table class="table pmd-table table-hover">\n' +
    '            <thead>\n' +
    '                <tr>\n' +
    '                    <th>{{\'Name\' | translate}}</th> \n' +
    '                    <th></th>\n' +
    '                </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '                <tr ng-repeat="city in Cities.results">\n' +
    '                    <td data-title="Name">{{city.titleDictionary[selectedLanguage]}}</td> \n' +
    '                    <td>\n' +
    '                        <button style="background-color: #e4e5e6;color: black!important;" ng-click="$state.go(\'Area\',{countryId: $stateParams.countryId,regionId: $stateParams.regionId,cityId:city.cityId});" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'viewAreas\' | translate}}</button>\n' +
    '                      </td>\n' +
    '                   \n' +
    '                    <td width="30%" >\n' +
    '                        <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="$state.go(\'editCity\',{countryId: $stateParams.countryId,regionId: $stateParams.regionId,cityId: city.cityId});">mode_edit</i>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '                \n' +
    '            </tbody>\n' +
    '        </table>\n' +
    '    </div>\n' +
    '    <div style="text-align:center;direction: ltr" paging page="1" page-size="10" total="totalCount" paging-action="changePage(page)"\n' +
    '         flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/City/templates/edit.html',
    '<div ncy-breadcrumb></div>  \n' +
    '<div class="modal-content">\n' +
    '	<div class="modal-header bordered">\n' +
    '		<h2 class="pmd-card-title-text">{{\'City\' | translate}}</h2>\n' +
    '	</div>\n' +
    '	<div class="modal-body">\n' +
    '		<form class="form-horizontal" name="editTypeForm"> \n' +
    '                <div> \n' +
    '                    <!-- Nav tabs -->\n' +
    '                    <ul class="nav nav-tabs" role="tablist">\n' +
    '                        <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editCityCtrl.language">\n' +
    '                            <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                                {{lang.value | translate}}\n' +
    '                            </a>\n' +
    '                        </li> \n' +
    '                    </ul>\n' +
    '                    <div class="pmd-card">\n' +
    '                        <div class="pmd-card-body">\n' +
    '                            <!-- Tab panes -->\n' +
    '                            <div class="tab-content">\n' +
    '                                <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editCityCtrl.language" id="{{lang.value}}-form">\n' +
    '                                    <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                                        <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                        <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="editCityCtrl.City.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                        <div ng-messages="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '                                            \n' +
    '                                            <div ng-show="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                            <div ng-show="(editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div> \n' +
    '                        </div>\n' +
    '\n' +
    '                   \n' +
    '                    </div>\n' +
    '                </div> \n' +
    ' \n' +
    '		</form>\n' +
    '	</div>\n' +
    '	<div class="pmd-modal-action text-right">\n' +
    '		<button style="background-color: #e4e5e6;color: black!important;" ng-disabled="editTypeForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="editCityCtrl.UpdateCity()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '		<button class="btn pmd-ripple-effect btn-default" type="button" ng-click="editCityCtrl.Close()">{{\'DiscardBtn\' | translate}}</button>\n' +
    '	</div>\n' +
    '</div>\n' +
    '\n' +
    '	\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/City/templates/new.html',
    '<div ncy-breadcrumb></div>  \n' +
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'NewCity\' | translate}}</h2>\n' +
    '    </div>\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="newAreaForm"> \n' +
    '            <div> \n' +
    '                <!-- Nav tabs -->\n' +
    '                <ul class="nav nav-tabs" role="tablist">\n' +
    '                    <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newCityCtrl.language">\n' +
    '                        <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                            {{lang.value | translate}}\n' +
    '                        </a>\n' +
    '                    </li> \n' +
    '                </ul>\n' +
    '                <div class="pmd-card">\n' +
    '                    <div class="pmd-card-body">\n' +
    '                        <!-- Tab panes -->\n' +
    '                        <div class="tab-content">\n' +
    '                            <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newCityCtrl.language" id="{{lang.value}}-form">\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                    <input required Area="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="newCityCtrl.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                    <div ng-messages="newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '										\n' +
    '                                        <div ng-show="newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div> \n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="newAreaForm.$invalid" class="btn pmd-ripple-effect btn-primary" Area="button" ng-click="newCityCtrl.AddNewCity()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '        <button class="btn pmd-ripple-effect btn-default" Area="button" ng-click="$state.go(\'Cities\',{countryId: $stateParams.countryId,regionId: $stateParams.regionId });">{{\'DiscardBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Country/templates/Countries.html',
    '\n' +
    '<div>\n' +
    '        \n' +
    '    <div style="margin-bottom:10px">\n' +
    '        <button  style="background-color: #e4e5e6;color: black!important;" ng-click="$state.go(\'newCountry\');" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddNew\' | translate}}</button>\n' +
    '\n' +
    '    </div> \n' +
    '    <div ng-if="Countries.results.length == 0">\n' +
    '        <span>{{\'NoCountriesAvailable\' | translate}}</span>\n' +
    '    </div>\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="Countries.results.length > 0">\n' +
    '        <div class="table-responsive"></div>\n' +
    '        <table class="table pmd-table table-hover">\n' +
    '            <thead>\n' +
    '                <tr>\n' +
    '                    <th>{{\'Name\' | translate}}</th> \n' +
    '                    <th></th>\n' +
    '                </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '                <tr ng-repeat="country in Countries.results">\n' +
    '                    <td data-title="Name">{{country.titleDictionary[selectedLanguage]}}</td> \n' +
    '                    <td>\n' +
    '                        <button style="background-color: #e4e5e6;color: black!important;" ng-click="$state.go(\'Regions\',{countryId: country.countryId});" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'viewRegions\' | translate}}</button>\n' +
    '                     </td>\n' +
    '                   \n' +
    '                    <td width="30%" >\n' +
    '                        <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="$state.go(\'editCountry\',{countryId: country.countryId});">mode_edit</i>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '                \n' +
    '            </tbody>\n' +
    '        </table>\n' +
    '    </div>\n' +
    '    <div style="text-align:center;direction: ltr" paging page="1" page-size="10" total="totalCount" paging-action="changePage(page)"\n' +
    '         flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Country/templates/edit.html',
    '<div class="modal-content">\n' +
    '	<div class="modal-header bordered">\n' +
    '		<h2 class="pmd-card-title-text">{{\'Country\' | translate}}</h2>\n' +
    '	</div>\n' +
    '	<div class="modal-body">\n' +
    '		<form class="form-horizontal" name="editTypeForm"> \n' +
    '                <div> \n' +
    '                    <!-- Nav tabs -->\n' +
    '                    <ul class="nav nav-tabs" role="tablist">\n' +
    '                        <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editCountryCtrl.language">\n' +
    '                            <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                                {{lang.value | translate}}\n' +
    '                            </a>\n' +
    '                        </li> \n' +
    '                    </ul>\n' +
    '                    <div class="pmd-card">\n' +
    '                        <div class="pmd-card-body">\n' +
    '                            <!-- Tab panes -->\n' +
    '                            <div class="tab-content">\n' +
    '                                <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editCountryCtrl.language" id="{{lang.value}}-form">\n' +
    '                                    <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                                        <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                        <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="editCountryCtrl.Country.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                        <div ng-messages="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '                                            \n' +
    '                                            <div ng-show="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                            <div ng-show="(editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div> \n' +
    '                        </div>\n' +
    '\n' +
    '                   \n' +
    '                    </div>\n' +
    '                </div> \n' +
    ' \n' +
    '		</form>\n' +
    '	</div>\n' +
    '	<div class="pmd-modal-action text-right">\n' +
    '		<button style="background-color: #e4e5e6;color: black!important;" ng-disabled="editTypeForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="editCountryCtrl.UpdateCountry()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '		<button class="btn pmd-ripple-effect btn-default" type="button" ng-click="editCountryCtrl.Close()">{{\'DiscardBtn\' | translate}}</button>\n' +
    '	</div>\n' +
    '</div>\n' +
    '\n' +
    '	\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Country/templates/new.html',
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'NewCountry\' | translate}}</h2>\n' +
    '    </div>\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="newAreaForm"> \n' +
    '            <div> \n' +
    '                <!-- Nav tabs -->\n' +
    '                <ul class="nav nav-tabs" role="tablist">\n' +
    '                    <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newCountryCtrl.language">\n' +
    '                        <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                            {{lang.value | translate}}\n' +
    '                        </a>\n' +
    '                    </li> \n' +
    '                </ul>\n' +
    '                <div class="pmd-card">\n' +
    '                    <div class="pmd-card-body">\n' +
    '                        <!-- Tab panes -->\n' +
    '                        <div class="tab-content">\n' +
    '                            <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newCountryCtrl.language" id="{{lang.value}}-form">\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                    <input required Area="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="newCountryCtrl.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                    <div ng-messages="newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '										\n' +
    '                                        <div ng-show="newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div> \n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="newAreaForm.$invalid" class="btn pmd-ripple-effect btn-primary" Area="button" ng-click="newCountryCtrl.AddNewCountry()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '        <button class="btn pmd-ripple-effect btn-default" Area="button" ng-click="$state.go(\'Countries\');">{{\'DiscardBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Delivery/templates/Delivery.html',
    '<div>\n' +
    '    <div ng-if="DeliveryList.results.length == 0">\n' +
    '        <span>{{\'NoDeliverysAvailable\' | translate}}</span>\n' +
    '    </div>\n' +
    '    {{flag}}\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="DeliveryList.results.length > 0">\n' +
    '        <div class="table-responsive"></div>\n' +
    '        <table class="table pmd-table table-hover">\n' +
    '            <thead>\n' +
    '                <tr>\n' +
    '                    <th>{{\'Name\' | translate}}</th>\n' +
    '                    <th>{{\'phone\' | translate}}</th>\n' +
    '                    <th>{{\'orderCode\' | translate}}</th>\n' +
    '                    <th>{{\'Date\' | translate}}</th>\n' +
    '                    <th>{{\'status\' | translate}}</th>\n' +
    '                    <th></th>\n' +
    '                </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '                <tr ng-repeat-start="delivery in DeliveryList.results">\n' +
    '                    <td data-title="Name">{{delivery.user.firstName}}{{delivery.user.lastName}}</td>\n' +
    '                    <td data-title="Name">{{delivery.user.phone}}</td>\n' +
    '                    <td data-title="Name">#{{delivery.orderCode}} </td>\n' +
    '\n' +
    '                    <td data-title="Name">{{delivery.orderDetails[0].day | date : "d/MMM/yy"}}\n' +
    '                    </td>\n' +
    '                    <td ng-if="delivery.orderDetails[0].status == \'2\'">\n' +
    '                        <button style="background-color: #e4e5e6;color: black!important;" ng-click="deliveryCtrl.changeStatus(delivery.orderDetails[0].orderDetailId,3);"\n' +
    '                            class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">\n' +
    '                            {{\'Prepering\' | translate}}</button>\n' +
    '\n' +
    '                    </td>\n' +
    '\n' +
    '                    <td ng-if="delivery.orderDetails[0].status == \'3\'">\n' +
    '                            <button style="background-color: #e4e5e6;color: black!important;" ng-click="deliveryCtrl.changeStatus(delivery.orderDetails[0].orderDetailId,4);"\n' +
    '                            class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">\n' +
    '                            {{\'Deliverd\' | translate}}</button>\n' +
    '                        <button style="background-color: #e4e5e6;color: black!important;" ng-click="deliveryCtrl.changeStatus(delivery.orderDetails[0].orderDetailId,5);"\n' +
    '                            class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">\n' +
    '                            {{\'NotDeliverd\' | translate}}</button>\n' +
    '\n' +
    '                    </td>  \n' +
    '                    <td class="pmd-table-row-action">\n' +
    '                        <span href="javascript:void(0);" ng-if="delivery.orderDetails.length >0 " ng-click="delivery.show=!delivery.show;deliveryCtrl.showMore($event)"\n' +
    '                            class="btn pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-default btn-sm child-table-expand direct-expand"><i\n' +
    '                                class="material-icons md-dark pmd-sm"></i></span>\n' +
    '                    </td>\n' +
    '\n' +
    '                </tr>\n' +
    '                <tr ng-repeat-end class="child-table" ng-show="delivery.show">\n' +
    '                    <td colspan="12">\n' +
    '                        <div style="background: white;padding: 5px;" ng-if="request.comment !== null">\n' +
    '                            <h2>{{\'appartmentNo\'|translate}}: </h2>\n' +
    '                            <span>{{delivery.address.appartmentNo}}</span>\n' +
    '                        </div>\n' +
    '                        <div style="background: white;padding: 5px;" ng-if="request.comment !== null">\n' +
    '                            <h2>{{\'floor\'|translate}}: </h2>\n' +
    '                            <span>{{delivery.address.floor}}</span>\n' +
    '                        </div>\n' +
    '                        <div style="background: white;padding: 5px;" ng-if="request.comment !== null">\n' +
    '                            <h2>{{\'description\'|translate}}: </h2>\n' +
    '                            <span>{{delivery.address.description}}</span>\n' +
    '                        </div>\n' +
    '                        <div style="background: white;padding: 5px;" ng-if="request.comment !== null">\n' +
    '                            <h2>{{\'branch\'|translate}}: </h2>\n' +
    '                            <span>{{delivery.branch.titleDictionary[selectedLanguage]}}</span>\n' +
    '                        </div>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '            </tbody>\n' +
    '        </table>\n' +
    '    </div>\n' +
    '    <div style="text-align:center;direction: ltr" paging page="1" page-size="10" total="totalCount" paging-action="changePage(page)"\n' +
    '        flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '    </div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Delivery/templates/edit.html',
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'Order\' | translate}}</h2>\n' +
    '    </div>\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="editForm">\n' +
    '            <div>\n' +
    '                <div class="row">\n' +
    '                    <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '                        <br>\n' +
    '                        <img ng-if="editOrderCtrl.Order.type == 0" src="assets\\img\\program.png" title="program">\n' +
    '                        <img ng-if="editOrderCtrl.Order.type == 1" src="assets\\img\\meal.png" title="meal">\n' +
    '                        <img ng-if="editOrderCtrl.Order.type == 2" src="assets\\img\\item.png" title="item">\n' +
    '                    </div>\n' +
    '                    <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="regular1" class="control-label">{{\'startDateLbl\' | translate}}</label>\n' +
    '                        <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                            <input type="text" ng-model="editOrderCtrl.Order.orderStartDate" ng-change="editOrderCtrl.changeDate"\n' +
    '                                id="startdate" class="form-control" />\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'Creationdate\' | translate}} </label>\n' +
    '                        <label for="first-name" class="mat-input form-control">{{editOrderCtrl.Order.orderDate}}\n' +
    '                        </label>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'username\' | translate}} </label>\n' +
    '                        <label for="first-name" class="mat-input form-control">{{editOrderCtrl.Order.user.firstName}}\n' +
    '                            {{editOrderCtrl.Order.user.lastName}}</label>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label>{{\'orderCode\' | translate}} </label>\n' +
    '                        <label class="mat-input form-control"> {{editOrderCtrl.Order.orderCode}}</label>\n' +
    '                    </div>\n' +
    '\n' +
    '\n' +
    '                </div>\n' +
    '                <!-- bind item list -->\n' +
    '                <div class="row" ng-init="editOrderCtrl.Order.type==2" ng-show="editOrderCtrl.Order.type==2">\n' +
    '                    <div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label>{{\'orderdetails\' | translate}} </label>\n' +
    '\n' +
    '                        <table class="table pmd-table table-hover">\n' +
    '                            <thead>\n' +
    '                                <tr>\n' +
    '                                    <th>{{\'Name\' | translate}}</th>\n' +
    '                                    <th>{{\'carb\' | translate}}</th>\n' +
    '                                    <th>{{\'calories\' | translate}}</th>\n' +
    '                                    <th>{{\'protein\' | translate}}</th>\n' +
    '                                    <th>{{\'costlbl\' | translate}}</th>\n' +
    '                                    <th>{{\'Pricelbl\' | translate}}</th>\n' +
    '                                    <th>{{\'vat\' | translate}}</th>\n' +
    '                                    <th>{{\'total\' | translate}}</th>\n' +
    '                                    <th></th>\n' +
    '                                </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                                <tr ng-repeat="meal in editOrderCtrl.Order.orderDetails">\n' +
    '                                    <td data-title="Name" width="15%">{{meal.item.itemNameDictionary[selectedLanguage]\n' +
    '                                        | limitTo:10}}</td>\n' +
    '                                    <td data-title="Description">{{meal.item.carbs}}</td>\n' +
    '                                    <td data-title="Description">{{meal.item.calories}}</td>\n' +
    '                                    <td data-title="Description">{{meal.item.protein}}</td>\n' +
    '                                    <td data-title="Description">{{meal.item.cost}}</td>\n' +
    '                                    <td data-title="Description">{{meal.item.price}}</td>\n' +
    '                                    <td data-title="Description">{{meal.item.vat}}</td>\n' +
    '                                    <td data-title="totalPrice">{{meal.item.totalPrice}}</td>\n' +
    '\n' +
    '                                </tr>\n' +
    '                            </tbody>\n' +
    '                        </table>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <!-- bind meal list -->\n' +
    '                <div class="row" ng-init="editOrderCtrl.Order.type==1" ng-show="editOrderCtrl.Order.type==1">\n' +
    '                    <div class="col-md-6 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'orderdetails\' | translate}} </label>\n' +
    '                        <div class="table-responsive pmd-card pmd-z-depth">\n' +
    '                            <table class="table table-mc-red pmd-table">\n' +
    '                                <thead>\n' +
    '                                    <tr>\n' +
    '                                        <th>{{\'Meal\' | translate}}</th>\n' +
    '                                        <th></th>\n' +
    '                                    </tr>\n' +
    '                                </thead>\n' +
    '                                <tbody>\n' +
    '                                    <tr ng-repeat-start="request in editOrderCtrl.Order.orderDetails" ng-style="{\'background-color\': request.status==\'Pending\'?\'#f5f58a\':\'\'}">\n' +
    '                                        <td data-title="Name">{{request.meal.mealNameDictionary[selectedLanguage]\n' +
    '                                            | limitTo:10}}</td>\n' +
    '\n' +
    '                                        <td class="pmd-table-row-action">\n' +
    '                                            <span href="javascript:void(0);" ng-if="request.requestDetails.length >0 || request.comment !== null || request.requestTime !== null"\n' +
    '                                                ng-click="request.show=!request.show;editOrderCtrl.showMore($event)"\n' +
    '                                                class="btn pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-default btn-sm child-table-expand direct-expand"><i\n' +
    '                                                    class="material-icons md-dark pmd-sm"></i></span>\n' +
    '                                        </td>\n' +
    '                                    </tr>\n' +
    '                                    <tr ng-repeat-end class="child-table" ng-show="request.show">\n' +
    '                                        <td colspan="12">\n' +
    '                                            <div class="direct-child-table" ng-if="request.meal.mealDetails.length >0">\n' +
    '\n' +
    '                                                <table class="table pmd-table table-hover">\n' +
    '                                                    <thead>\n' +
    '                                                        <tr>\n' +
    '                                                            <th>{{\'Name\' | translate}}</th>\n' +
    '                                                            <th>{{\'carb\' | translate}}</th>\n' +
    '                                                            <th>{{\'calories\' | translate}}</th>\n' +
    '                                                            <th>{{\'protein\' | translate}}</th>\n' +
    '                                                            <th>{{\'costlbl\' | translate}}</th>\n' +
    '                                                            <th>{{\'Pricelbl\' | translate}}</th>\n' +
    '                                                            <th>{{\'vat\' | translate}}</th>\n' +
    '                                                            <th>{{\'total\' | translate}}</th>\n' +
    '                                                            <th></th>\n' +
    '                                                        </tr>\n' +
    '                                                    </thead>\n' +
    '                                                    <tbody>\n' +
    '                                                        <tr ng-repeat="meal in request.meal.mealDetails">\n' +
    '                                                            <td data-title="Name" width="15%">{{meal.item.itemNameDictionary[selectedLanguage]\n' +
    '                                                                | limitTo:10}}</td>\n' +
    '                                                            <td data-title="Description">{{meal.item.carbs}}</td>\n' +
    '                                                            <td data-title="Description">{{meal.item.calories}}</td>\n' +
    '                                                            <td data-title="Description">{{meal.item.protein}}</td>\n' +
    '                                                            <td data-title="Description">{{meal.item.cost}}</td>\n' +
    '                                                            <td data-title="Description">{{meal.item.price}}</td>\n' +
    '                                                            <td data-title="Description">{{meal.item.vat}}</td>\n' +
    '                                                            <td data-title="totalPrice">{{meal.item.totalPrice}}</td>\n' +
    '\n' +
    '                                                        </tr>\n' +
    '                                                    </tbody>\n' +
    '                                                </table>\n' +
    '                                            </div>\n' +
    '\n' +
    '\n' +
    '                                        </td>\n' +
    '                                    </tr>\n' +
    '                                </tbody>\n' +
    '                            </table>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <!-- bind Program list -->\n' +
    '                <div class="row" ng-init="editOrderCtrl.Order.type==0" ng-show="editOrderCtrl.Order.type==0">\n' +
    '                    <div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'orderdetails\' | translate}} </label>\n' +
    '                        <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                            <input readonly type="text" ng-model="editOrderCtrl.Order.orderDetails[0].program.programNameDictionary[selectedLanguage]"\n' +
    '                                class="form-control" />\n' +
    '                        </div>\n' +
    '\n' +
    '\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '            </div>\n' +
    '\n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="editForm.$invalid || !editOrderCtrl.dateIsValid  "\n' +
    '            class="btn pmd-ripple-effect btn-primary" type="button" ng-click="editOrderCtrl.UpdateType()">{{\'saveChangesBtn\'\n' +
    '            | translate}}</button>\n' +
    '        <button class="btn pmd-ripple-effect btn-default" type="button" ng-click="editOrderCtrl.Close()">{{\'DiscardBtn\'\n' +
    '            | translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
    '        $(".select-add-tags").select2({\n' +
    '            tags: true,\n' +
    '            theme: "bootstrap",\n' +
    '            insertTag: function (data, tag) {\n' +
    '                data.push(tag);\n' +
    '            }\n' +
    '        });\n' +
    '    });\n' +
    '</script>\n' +
    '<!-- \n' +
    '<script type="text/javascript">\n' +
    '    $(function () {\n' +
    '        $(\'#startdate\').datetimepicker(\n' +
    '            {\n' +
    '                minDate: new Date()\n' +
    '            }\n' +
    '        );\n' +
    '    });\n' +
    '\n' +
    '</script> -->\n' +
    '\n' +
    '\n' +
    '<script type="text/javascript">\n' +
    '    // $(function () {\n' +
    '    //     $(\'#startdate\').datetimepicker();\n' +
    '    // });\n' +
    '    $(function () {\n' +
    '        $(\'#startdate\').datetimepicker(\n' +
    '            {\n' +
    '                minDate: new Date()\n' +
    '            }\n' +
    '        ).on(\'dp.change\', function (e) {\n' +
    '            debugger;\n' +
    '            angular.element(document.getElementById(\'startdate\')).scope().dateChange();\n' +
    '        });\n' +
    '    });\n' +
    '\n' +
    '</script>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Delivery/templates/new.html',
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'NewRoleLbl\' | translate}}</h2>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="newTypeForm">\n' +
    '            <div>\n' +
    '                <!-- Nav tabs -->\n' +
    '                <ul class="nav nav-tabs" role="tablist">\n' +
    '                    <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newRoleCtrl.language">\n' +
    '                        <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                            {{lang.value | translate}}\n' +
    '                        </a>\n' +
    '                    </li>\n' +
    '                </ul>\n' +
    '                <div class="pmd-card">\n' +
    '                    <div class="pmd-card-body">\n' +
    '                        <!-- Tab panes -->\n' +
    '                        <div class="tab-content">\n' +
    '                            <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newRoleCtrl.language" id="{{lang.value}}-form">\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                    <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="newRoleCtrl.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                    <div ng-messages="newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '\n' +
    '                                        <div ng-show="newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '\n' +
    '\n' +
    '                            </div>\n' +
    '                            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                <label for="first-name">{{\'Permission\' | translate}}</label>\n' +
    '                                <select required style="width:100% !important" class="form-control select-with-search pmd-select2-tags" multiple\n' +
    '                                        ng-model="newRoleCtrl.selectedPermissions" ng-options="permission as permission.titleDictionary[selectedLanguage] for permission in permissionList"></select>\n' +
    '\n' +
    '\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="newTypeForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="newRoleCtrl.AddNewType()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '        <button class="btn pmd-ripple-effect btn-default" type="button" ng-click="$state.go(\'Role\');">{{\'DiscardBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
    '        $(".select-with-search").select2({\n' +
    '			theme: "bootstrap"\n' +
    '		});\n' +
    '    });\n' +
    '</script>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Kitchen/templates/Kitchen.html',
    '<div>\n' +
    '    <div ng-if="kitchenList.results.length == 0">\n' +
    '        <span>{{\'NokitchensAvailable\' | translate}}</span>\n' +
    '    </div>\n' +
    '    {{flag}}\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="kitchenList.results.length > 0">\n' +
    '        <div class="table-responsive"></div>\n' +
    '        <table class="table pmd-table table-hover">\n' +
    '            <thead>\n' +
    '                <tr>\n' +
    '                    <th>{{\'orderCode\' | translate}}</th>\n' +
    '                    <th>{{\'Date\' | translate}}</th>\n' +
    '                    <th>{{\'status\' | translate}}</th>\n' +
    '                    <th></th>\n' +
    '                </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '                <tr ng-repeat-start="kitchen in kitchenList.results">\n' +
    '                    <td data-title="Name">#{{kitchen.orderCode}} </td>\n' +
    '\n' +
    '                    <td data-title="Name">{{kitchen.orderDetails[0].day | date : "d/MMM/yy h:mm a"}}\n' +
    '                    </td>\n' +
    '                    <td ng-if="kitchen.orderDetails[0].status == \'2\'">\n' +
    '                        <button ng-click="kitchenCtrl.changeStatus(kitchen,6);"\n' +
    '                            style="background-color: #e4e5e6;color: black!important;"\n' +
    '                            class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">\n' +
    '                            {{\'Prepering\' | translate}}</button>\n' +
    '\n' +
    '                    </td>\n' +
    '\n' +
    '                    <td ng-if="kitchen.orderDetails[0].status == \'3\'">\n' +
    '                        <button disabled style="background-color: #e4e5e6;color: black!important;"\n' +
    '                            class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">\n' +
    '                            {{\'Deliverd\' | translate}}</button>\n' +
    '                        <button disabled style="background-color: #e4e5e6;color: black!important;"\n' +
    '                            class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">\n' +
    '                            {{\'NotDeliverd\' | translate}}</button>\n' +
    '\n' +
    '                    </td>\n' +
    '                    <td class="pmd-table-row-action">\n' +
    '                        <span href="javascript:void(0);" ng-if="kitchen.orderDetails.length > 0 "\n' +
    '                            ng-click="kitchen.show=!kitchen.show;kitchenCtrl.showMore($event,kitchen)"\n' +
    '                            class="btn pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-default btn-sm child-table-expand direct-expand"><i\n' +
    '                                class="material-icons md-dark pmd-sm"></i></span>\n' +
    '                    </td>\n' +
    '\n' +
    '                </tr>\n' +
    '                <tr ng-repeat-end class="child-table" ng-show="kitchen.show">\n' +
    '                    <td colspan="12">\n' +
    '                        <table class="table pmd-table table-hover">\n' +
    '                            <thead>\n' +
    '                                <tr>\n' +
    '                                    <th>{{\'Name\' | translate}}</th>\n' +
    '                                    <th>{{\'size\' | translate}}</th>\n' +
    '                                    <th></th>\n' +
    '                                </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                                <tr ng-repeat="item in kitchen.ItemList">\n' +
    '                                    <td data-title="Name" width="15%">{{item.itemNameDictionary[selectedLanguage]}}\n' +
    '                                    </td>\n' +
    '                                    <td data-title="Description">{{item.itemSize}}</td>\n' +
    '\n' +
    '                                </tr>\n' +
    '                            </tbody>\n' +
    '                        </table>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '            </tbody>\n' +
    '        </table>\n' +
    '    </div>\n' +
    '    <div style="text-align:center;direction: ltr" paging page="1" page-size="10" total="totalCount"\n' +
    '        paging-action="changePage(page)" flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true"\n' +
    '        disabled-class="hide">\n' +
    '    </div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Kitchen/templates/edit.html',
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'Order\' | translate}}</h2>\n' +
    '    </div>\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="editForm">\n' +
    '            <div>\n' +
    '                <div class="row">\n' +
    '                    <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '                        <br>\n' +
    '                        <img ng-if="editOrderCtrl.Order.type == 0" src="assets\\img\\program.png" title="program">\n' +
    '                        <img ng-if="editOrderCtrl.Order.type == 1" src="assets\\img\\meal.png" title="meal">\n' +
    '                        <img ng-if="editOrderCtrl.Order.type == 2" src="assets\\img\\item.png" title="item">\n' +
    '                    </div>\n' +
    '                    <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="regular1" class="control-label">{{\'startDateLbl\' | translate}}</label>\n' +
    '                        <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                            <input type="text" ng-model="editOrderCtrl.Order.orderStartDate" ng-change="editOrderCtrl.changeDate"\n' +
    '                                id="startdate" class="form-control" />\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'Creationdate\' | translate}} </label>\n' +
    '                        <label for="first-name" class="mat-input form-control">{{editOrderCtrl.Order.orderDate}}\n' +
    '                        </label>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'username\' | translate}} </label>\n' +
    '                        <label for="first-name" class="mat-input form-control">{{editOrderCtrl.Order.user.firstName}}\n' +
    '                            {{editOrderCtrl.Order.user.lastName}}</label>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label>{{\'orderCode\' | translate}} </label>\n' +
    '                        <label class="mat-input form-control"> {{editOrderCtrl.Order.orderCode}}</label>\n' +
    '                    </div>\n' +
    '\n' +
    '\n' +
    '                </div>\n' +
    '                <!-- bind item list -->\n' +
    '                <div class="row" ng-init="editOrderCtrl.Order.type==2" ng-show="editOrderCtrl.Order.type==2">\n' +
    '                    <div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label>{{\'orderdetails\' | translate}} </label>\n' +
    '\n' +
    '                        <table class="table pmd-table table-hover">\n' +
    '                            <thead>\n' +
    '                                <tr>\n' +
    '                                    <th>{{\'Name\' | translate}}</th>\n' +
    '                                    <th>{{\'carb\' | translate}}</th>\n' +
    '                                    <th>{{\'calories\' | translate}}</th>\n' +
    '                                    <th>{{\'protein\' | translate}}</th>\n' +
    '                                    <th>{{\'costlbl\' | translate}}</th>\n' +
    '                                    <th>{{\'Pricelbl\' | translate}}</th>\n' +
    '                                    <th>{{\'vat\' | translate}}</th>\n' +
    '                                    <th>{{\'total\' | translate}}</th>\n' +
    '                                    <th></th>\n' +
    '                                </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                                <tr ng-repeat="meal in editOrderCtrl.Order.orderDetails">\n' +
    '                                    <td data-title="Name" width="15%">{{meal.item.itemNameDictionary[selectedLanguage]\n' +
    '                                        | limitTo:10}}</td>\n' +
    '                                    <td data-title="Description">{{meal.item.carbs}}</td>\n' +
    '                                    <td data-title="Description">{{meal.item.calories}}</td>\n' +
    '                                    <td data-title="Description">{{meal.item.protein}}</td>\n' +
    '                                    <td data-title="Description">{{meal.item.cost}}</td>\n' +
    '                                    <td data-title="Description">{{meal.item.price}}</td>\n' +
    '                                    <td data-title="Description">{{meal.item.vat}}</td>\n' +
    '                                    <td data-title="totalPrice">{{meal.item.totalPrice}}</td>\n' +
    '\n' +
    '                                </tr>\n' +
    '                            </tbody>\n' +
    '                        </table>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <!-- bind meal list -->\n' +
    '                <div class="row" ng-init="editOrderCtrl.Order.type==1" ng-show="editOrderCtrl.Order.type==1">\n' +
    '                    <div class="col-md-6 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'orderdetails\' | translate}} </label>\n' +
    '                        <div class="table-responsive pmd-card pmd-z-depth">\n' +
    '                            <table class="table table-mc-red pmd-table">\n' +
    '                                <thead>\n' +
    '                                    <tr>\n' +
    '                                        <th>{{\'Meal\' | translate}}</th>\n' +
    '                                        <th></th>\n' +
    '                                    </tr>\n' +
    '                                </thead>\n' +
    '                                <tbody>\n' +
    '                                    <tr ng-repeat-start="request in editOrderCtrl.Order.orderDetails" ng-style="{\'background-color\': request.status==\'Pending\'?\'#f5f58a\':\'\'}">\n' +
    '                                        <td data-title="Name">{{request.meal.mealNameDictionary[selectedLanguage]\n' +
    '                                            | limitTo:10}}</td>\n' +
    '\n' +
    '                                        <td class="pmd-table-row-action">\n' +
    '                                            <span href="javascript:void(0);" ng-if="request.requestDetails.length >0 || request.comment !== null || request.requestTime !== null"\n' +
    '                                                ng-click="request.show=!request.show;editOrderCtrl.showMore($event)"\n' +
    '                                                class="btn pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-default btn-sm child-table-expand direct-expand"><i\n' +
    '                                                    class="material-icons md-dark pmd-sm"></i></span>\n' +
    '                                        </td>\n' +
    '                                    </tr>\n' +
    '                                    <tr ng-repeat-end class="child-table" ng-show="request.show">\n' +
    '                                        <td colspan="12">\n' +
    '                                            <div class="direct-child-table" ng-if="request.meal.mealDetails.length >0">\n' +
    '\n' +
    '                                                <table class="table pmd-table table-hover">\n' +
    '                                                    <thead>\n' +
    '                                                        <tr>\n' +
    '                                                            <th>{{\'Name\' | translate}}</th>\n' +
    '                                                            <th>{{\'carb\' | translate}}</th>\n' +
    '                                                            <th>{{\'calories\' | translate}}</th>\n' +
    '                                                            <th>{{\'protein\' | translate}}</th>\n' +
    '                                                            <th>{{\'costlbl\' | translate}}</th>\n' +
    '                                                            <th>{{\'Pricelbl\' | translate}}</th>\n' +
    '                                                            <th>{{\'vat\' | translate}}</th>\n' +
    '                                                            <th>{{\'total\' | translate}}</th>\n' +
    '                                                            <th></th>\n' +
    '                                                        </tr>\n' +
    '                                                    </thead>\n' +
    '                                                    <tbody>\n' +
    '                                                        <tr ng-repeat="meal in request.meal.mealDetails">\n' +
    '                                                            <td data-title="Name" width="15%">{{meal.item.itemNameDictionary[selectedLanguage]\n' +
    '                                                                | limitTo:10}}</td>\n' +
    '                                                            <td data-title="Description">{{meal.item.carbs}}</td>\n' +
    '                                                            <td data-title="Description">{{meal.item.calories}}</td>\n' +
    '                                                            <td data-title="Description">{{meal.item.protein}}</td>\n' +
    '                                                            <td data-title="Description">{{meal.item.cost}}</td>\n' +
    '                                                            <td data-title="Description">{{meal.item.price}}</td>\n' +
    '                                                            <td data-title="Description">{{meal.item.vat}}</td>\n' +
    '                                                            <td data-title="totalPrice">{{meal.item.totalPrice}}</td>\n' +
    '\n' +
    '                                                        </tr>\n' +
    '                                                    </tbody>\n' +
    '                                                </table>\n' +
    '                                            </div>\n' +
    '\n' +
    '\n' +
    '                                        </td>\n' +
    '                                    </tr>\n' +
    '                                </tbody>\n' +
    '                            </table>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <!-- bind Program list -->\n' +
    '                <div class="row" ng-init="editOrderCtrl.Order.type==0" ng-show="editOrderCtrl.Order.type==0">\n' +
    '                    <div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'orderdetails\' | translate}} </label>\n' +
    '                        <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                            <input readonly type="text" ng-model="editOrderCtrl.Order.orderDetails[0].program.programNameDictionary[selectedLanguage]"\n' +
    '                                class="form-control" />\n' +
    '                        </div>\n' +
    '\n' +
    '\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '            </div>\n' +
    '\n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="editForm.$invalid || !editOrderCtrl.dateIsValid  "\n' +
    '            class="btn pmd-ripple-effect btn-primary" type="button" ng-click="editOrderCtrl.UpdateType()">{{\'saveChangesBtn\'\n' +
    '            | translate}}</button>\n' +
    '        <button class="btn pmd-ripple-effect btn-default" type="button" ng-click="editOrderCtrl.Close()">{{\'DiscardBtn\'\n' +
    '            | translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
    '        $(".select-add-tags").select2({\n' +
    '            tags: true,\n' +
    '            theme: "bootstrap",\n' +
    '            insertTag: function (data, tag) {\n' +
    '                data.push(tag);\n' +
    '            }\n' +
    '        });\n' +
    '    });\n' +
    '</script>\n' +
    '<!-- \n' +
    '<script type="text/javascript">\n' +
    '    $(function () {\n' +
    '        $(\'#startdate\').datetimepicker(\n' +
    '            {\n' +
    '                minDate: new Date()\n' +
    '            }\n' +
    '        );\n' +
    '    });\n' +
    '\n' +
    '</script> -->\n' +
    '\n' +
    '\n' +
    '<script type="text/javascript">\n' +
    '    // $(function () {\n' +
    '    //     $(\'#startdate\').datetimepicker();\n' +
    '    // });\n' +
    '    $(function () {\n' +
    '        $(\'#startdate\').datetimepicker(\n' +
    '            {\n' +
    '                minDate: new Date()\n' +
    '            }\n' +
    '        ).on(\'dp.change\', function (e) {\n' +
    '            debugger;\n' +
    '            angular.element(document.getElementById(\'startdate\')).scope().dateChange();\n' +
    '        });\n' +
    '    });\n' +
    '\n' +
    '</script>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Kitchen/templates/new.html',
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'NewRoleLbl\' | translate}}</h2>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="newTypeForm">\n' +
    '            <div>\n' +
    '                <!-- Nav tabs -->\n' +
    '                <ul class="nav nav-tabs" role="tablist">\n' +
    '                    <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newRoleCtrl.language">\n' +
    '                        <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                            {{lang.value | translate}}\n' +
    '                        </a>\n' +
    '                    </li>\n' +
    '                </ul>\n' +
    '                <div class="pmd-card">\n' +
    '                    <div class="pmd-card-body">\n' +
    '                        <!-- Tab panes -->\n' +
    '                        <div class="tab-content">\n' +
    '                            <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newRoleCtrl.language" id="{{lang.value}}-form">\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                    <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="newRoleCtrl.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                    <div ng-messages="newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '\n' +
    '                                        <div ng-show="newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '\n' +
    '\n' +
    '                            </div>\n' +
    '                            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                <label for="first-name">{{\'Permission\' | translate}}</label>\n' +
    '                                <select required style="width:100% !important" class="form-control select-with-search pmd-select2-tags" multiple\n' +
    '                                        ng-model="newRoleCtrl.selectedPermissions" ng-options="permission as permission.titleDictionary[selectedLanguage] for permission in permissionList"></select>\n' +
    '\n' +
    '\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="newTypeForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="newRoleCtrl.AddNewType()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '        <button class="btn pmd-ripple-effect btn-default" type="button" ng-click="$state.go(\'Role\');">{{\'DiscardBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
    '        $(".select-with-search").select2({\n' +
    '			theme: "bootstrap"\n' +
    '		});\n' +
    '    });\n' +
    '</script>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Order/templates/Order.html',
    '<div>\n' +
    '    <div ng-if="OrderList.results.length == 0">\n' +
    '        <span>{{\'NoOrdersAvailable\' | translate}}</span>\n' +
    '    </div>\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="OrderList.results.length > 0">\n' +
    '        <div class="table-responsive"></div>\n' +
    '        <table class="table pmd-table table-hover">\n' +
    '            <thead>\n' +
    '                <tr>\n' +
    '                    <th>{{\'Name\' | translate}}</th>\n' +
    '                    <th>{{\'OrderCode\' | translate}}</th>\n' +
    '                    <th>{{\'Date\' | translate}}</th>\n' +
    '                    <th>{{\'startDate\' | translate}}</th>\n' +
    '                    <th>{{\'Price\' | translate}}</th>\n' +
    '                    <th>{{\'Payment\' | translate}}</th>\n' +
    '                    <th>{{\'Delvery/Takeaway\' | translate}}</th>\n' +
    '                    <th>{{\'Ordertype\' | translate}}</th>\n' +
    '                    <th></th>\n' +
    '                </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '                <tr ng-repeat="order in OrderList.results">\n' +
    '                    <td data-title="Name">{{order.user.firstName}}{{order.user.lastName}}</td>\n' +
    '                    <td data-title="Name">#{{order.orderCode}} </td>\n' +
    '\n' +
    '                    <td data-title="Name">{{order.orderDate | date : "d/MMM/yy h:mm a" }} </td>\n' +
    '                    <td data-title="Name">{{order.orderStartDate | date : "d/MMM/yy h:mm a"}} </td>\n' +
    '                    <td data-title="Name">\n' +
    '\n' +
    '                        <h4>{{ order.price}}</h4>\n' +
    '                    </td>\n' +
    '                    <td>\n' +
    '                        <div class="btn-switch" ng-class="{\'btn-switch--on\':order.isPaid}" ng-model="order.isPaid"\n' +
    '                            ng-click="UpdateOrder(order)">\n' +
    '\n' +
    '                            <div class="btn-switch-circle" ng-class="{\'btn-switch-circle--on\':order.isPaid}" ng-model="order.isPaid"\n' +
    '                                ng-click="UpdateOrder(order)">\n' +
    '                            </div>\n' +
    '                    </td>\n' +
    '                    <td data-title="Name">\n' +
    '                        <img ng-if="order.isDelivery == true" src="assets\\img\\delivery.png" title="delivery">\n' +
    '                        <img ng-if="order.isDelivery == false" src="assets\\img\\takeaway.png" title="take away" style="width: 44px;height: 39px;">\n' +
    '                    </td>\n' +
    '\n' +
    '                    <td data-title="Name">\n' +
    '                        <img ng-if="order.type == 0" src="assets\\img\\program.png" title="program">\n' +
    '                        <img ng-if="order.type == 1" src="assets\\img\\meal.png" title="meal">\n' +
    '                        <img ng-if="order.type == 2" src="assets\\img\\item.png" title="item">\n' +
    '                    </td>\n' +
    '                    <td>\n' +
    '                        <a ng-click="$state.go(\'editorder\', {orderId: order.orderId});" class="cursorPointer">{{\'ItemsBtn\'|\n' +
    '                            translate}}</a>\n' +
    '                    </td>\n' +
    '\n' +
    '                </tr>\n' +
    '            </tbody>\n' +
    '        </table>\n' +
    '    </div>\n' +
    '    <div style="text-align:center;direction: ltr" paging page="1" page-size="10" total="totalCount" paging-action="changePage(page)"\n' +
    '        flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '    </div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Order/templates/edit.html',
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'Order\' | translate}}</h2>\n' +
    '    </div>\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="editForm">\n' +
    '            <div>\n' +
    '                <div class="row">\n' +
    '                    <div\n' +
    '                        class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '                        <br>\n' +
    '                        <img ng-if="editOrderCtrl.Order.type == 0" src="assets\\img\\program.png" title="program">\n' +
    '                        <img ng-if="editOrderCtrl.Order.type == 1" src="assets\\img\\meal.png" title="meal">\n' +
    '                        <img ng-if="editOrderCtrl.Order.type == 2" src="assets\\img\\item.png" title="item">\n' +
    '                    </div>\n' +
    '                    <div\n' +
    '                        class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="regular1" class="control-label">{{\'startDateLbl\' | translate}}</label>\n' +
    '                        <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                            <input type="text" ng-model="editOrderCtrl.Order.orderStartDate"\n' +
    '                                ng-change="editOrderCtrl.changeDate" id="startdate" class="form-control" />\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div\n' +
    '                        class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'Creationdate\' | translate}} </label>\n' +
    '                        <label for="first-name" class="mat-input form-control">{{editOrderCtrl.Order.orderDate}}\n' +
    '                        </label>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div\n' +
    '                        class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'username\' | translate}} </label>\n' +
    '                        <label for="first-name" class="mat-input form-control">{{editOrderCtrl.Order.user.firstName}}\n' +
    '                            {{editOrderCtrl.Order.user.lastName}}</label>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div\n' +
    '                        class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label>{{\'orderCode\' | translate}} </label>\n' +
    '                        <label class="mat-input form-control"> {{editOrderCtrl.Order.orderCode}}</label>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div\n' +
    '                        class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label>{{\'status\' | translate}} </label>\n' +
    '                        <br>\n' +
    '                        <input type="checkbox" ng-model="orderStatus" value="1">Make it Prepering</input>\n' +
    '                    </div>\n' +
    '\n' +
    '\n' +
    '                </div>\n' +
    '                <!-- bind item list -->\n' +
    '                <div class="row" ng-init="editOrderCtrl.Order.type==2" ng-show="editOrderCtrl.Order.type==2">\n' +
    '                    <div\n' +
    '                        class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label>{{\'orderdetails\' | translate}} </label>\n' +
    '\n' +
    '                        <table class="table pmd-table table-hover">\n' +
    '                            <thead>\n' +
    '                                <tr>\n' +
    '                                    <th>{{\'Name\' | translate}}</th>\n' +
    '                                    <th>{{\'carb\' | translate}}</th>\n' +
    '                                    <th>{{\'calories\' | translate}}</th>\n' +
    '                                    <th>{{\'protein\' | translate}}</th>\n' +
    '                                    <th>{{\'costlbl\' | translate}}</th>\n' +
    '                                    <th>{{\'Pricelbl\' | translate}}</th>\n' +
    '                                    <th>{{\'vat\' | translate}}</th>\n' +
    '                                    <th>{{\'total\' | translate}}</th>\n' +
    '                                    <th></th>\n' +
    '                                </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                                <tr ng-repeat="meal in editOrderCtrl.Order.orderDetails">\n' +
    '                                    <td data-title="Name" width="15%">{{meal.item.itemNameDictionary[selectedLanguage]\n' +
    '                                        | limitTo:10}}</td>\n' +
    '                                    <td data-title="Description">{{meal.item.carbs}}</td>\n' +
    '                                    <td data-title="Description">{{meal.item.calories}}</td>\n' +
    '                                    <td data-title="Description">{{meal.item.protein}}</td>\n' +
    '                                    <td data-title="Description">{{meal.item.cost}}</td>\n' +
    '                                    <td data-title="Description">{{meal.item.price}}</td>\n' +
    '                                    <td data-title="Description">{{meal.item.vat}}</td>\n' +
    '                                    <td data-title="totalPrice">{{meal.item.totalPrice}}</td>\n' +
    '\n' +
    '                                </tr>\n' +
    '                            </tbody>\n' +
    '                        </table>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <!-- bind meal list -->\n' +
    '                <div class="row" ng-init="editOrderCtrl.Order.type==1" ng-show="editOrderCtrl.Order.type==1">\n' +
    '                    <div\n' +
    '                        class="col-md-6 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'orderdetails\' | translate}} </label>\n' +
    '                        <div class="table-responsive pmd-card pmd-z-depth">\n' +
    '                            <table class="table table-mc-red pmd-table">\n' +
    '                                <thead>\n' +
    '                                    <tr>\n' +
    '                                        <th>{{\'Meal\' | translate}}</th>\n' +
    '                                        <th></th>\n' +
    '                                    </tr>\n' +
    '                                </thead>\n' +
    '                                <tbody>\n' +
    '                                    <tr ng-repeat-start="request in editOrderCtrl.Order.orderDetails"\n' +
    '                                        ng-style="{\'background-color\': request.status==\'Pending\'?\'#f5f58a\':\'\'}">\n' +
    '                                        <td data-title="Name">{{request.meal.mealNameDictionary[selectedLanguage]\n' +
    '                                            | limitTo:10}}</td>\n' +
    '\n' +
    '                                        <td class="pmd-table-row-action">\n' +
    '                                            <span href="javascript:void(0);"\n' +
    '                                                ng-if="request.requestDetails.length >0 || request.comment !== null || request.requestTime !== null"\n' +
    '                                                ng-click="request.show=!request.show;editOrderCtrl.showMore($event)"\n' +
    '                                                class="btn pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-default btn-sm child-table-expand direct-expand"><i\n' +
    '                                                    class="material-icons md-dark pmd-sm"></i></span>\n' +
    '                                        </td>\n' +
    '                                    </tr>\n' +
    '                                    <tr ng-repeat-end class="child-table" ng-show="request.show">\n' +
    '                                        <td colspan="12">\n' +
    '                                            <div class="direct-child-table" ng-if="request.meal.mealDetails.length >0">\n' +
    '\n' +
    '                                                <table class="table pmd-table table-hover">\n' +
    '                                                    <thead>\n' +
    '                                                        <tr>\n' +
    '                                                            <th>{{\'Name\' | translate}}</th>\n' +
    '                                                            <th>{{\'carb\' | translate}}</th>\n' +
    '                                                            <th>{{\'calories\' | translate}}</th>\n' +
    '                                                            <th>{{\'protein\' | translate}}</th>\n' +
    '                                                            <th>{{\'costlbl\' | translate}}</th>\n' +
    '                                                            <th>{{\'Pricelbl\' | translate}}</th>\n' +
    '                                                            <th>{{\'vat\' | translate}}</th>\n' +
    '                                                            <th>{{\'total\' | translate}}</th>\n' +
    '                                                            <th></th>\n' +
    '                                                        </tr>\n' +
    '                                                    </thead>\n' +
    '                                                    <tbody>\n' +
    '                                                        <tr ng-repeat="meal in request.meal.mealDetails">\n' +
    '                                                            <td data-title="Name" width="15%">{{meal.item.itemNameDictionary[selectedLanguage]\n' +
    '                                                                | limitTo:10}}</td>\n' +
    '                                                            <td data-title="Description">{{meal.item.carbs}}</td>\n' +
    '                                                            <td data-title="Description">{{meal.item.calories}}</td>\n' +
    '                                                            <td data-title="Description">{{meal.item.protein}}</td>\n' +
    '                                                            <td data-title="Description">{{meal.item.cost}}</td>\n' +
    '                                                            <td data-title="Description">{{meal.item.price}}</td>\n' +
    '                                                            <td data-title="Description">{{meal.item.vat}}</td>\n' +
    '                                                            <td data-title="totalPrice">{{meal.item.totalPrice}}</td>\n' +
    '\n' +
    '                                                        </tr>\n' +
    '                                                    </tbody>\n' +
    '                                                </table>\n' +
    '                                            </div>\n' +
    '\n' +
    '\n' +
    '                                        </td>\n' +
    '                                    </tr>\n' +
    '                                </tbody>\n' +
    '                            </table>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <!-- bind Program list -->\n' +
    '                <div class="row" ng-init="editOrderCtrl.Order.type==0" ng-show="editOrderCtrl.Order.type==0">\n' +
    '                    <div\n' +
    '                        class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'orderdetails\' | translate}} </label>\n' +
    '                        <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                            <input readonly type="text"\n' +
    '                                ng-model="editOrderCtrl.Order.orderDetails[0].program.programNameDictionary[selectedLanguage]"\n' +
    '                                class="form-control" />\n' +
    '                        </div>\n' +
    '\n' +
    '\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '            </div>\n' +
    '\n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '            ng-disabled="editForm.$invalid || !editOrderCtrl.dateIsValid" class="btn pmd-ripple-effect btn-primary"\n' +
    '            type="button" ng-click="editOrderCtrl.UpdateType()">{{\'saveChangesBtn\'| translate}}</button>\n' +
    '        <button class="btn pmd-ripple-effect btn-default" type="button" ng-click="editOrderCtrl.Close()">{{\'DiscardBtn\'\n' +
    '            | translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
    '        $(".select-add-tags").select2({\n' +
    '            tags: true,\n' +
    '            theme: "bootstrap",\n' +
    '            insertTag: function (data, tag) {\n' +
    '                data.push(tag);\n' +
    '            }\n' +
    '        });\n' +
    '    });\n' +
    '</script>\n' +
    '<!-- \n' +
    '<script type="text/javascript">\n' +
    '    $(function () {\n' +
    '        $(\'#startdate\').datetimepicker(\n' +
    '            {\n' +
    '                minDate: new Date()\n' +
    '            }\n' +
    '        );\n' +
    '    });\n' +
    '\n' +
    '</script> -->\n' +
    '\n' +
    '\n' +
    '<script type="text/javascript">\n' +
    '    // $(function () {\n' +
    '    //     $(\'#startdate\').datetimepicker();\n' +
    '    // });\n' +
    '    $(function () {\n' +
    '        $(\'#startdate\').datetimepicker(\n' +
    '            {\n' +
    '                minDate: new Date()\n' +
    '            }\n' +
    '        ).on(\'dp.change\', function (e) {\n' +
    '            debugger;\n' +
    '            angular.element(document.getElementById(\'startdate\')).scope().dateChange();\n' +
    '        });\n' +
    '    });\n' +
    '\n' +
    '</script>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Order/templates/new.html',
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'NewRoleLbl\' | translate}}</h2>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="newTypeForm">\n' +
    '            <div>\n' +
    '                <!-- Nav tabs -->\n' +
    '                <ul class="nav nav-tabs" role="tablist">\n' +
    '                    <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newRoleCtrl.language">\n' +
    '                        <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                            {{lang.value | translate}}\n' +
    '                        </a>\n' +
    '                    </li>\n' +
    '                </ul>\n' +
    '                <div class="pmd-card">\n' +
    '                    <div class="pmd-card-body">\n' +
    '                        <!-- Tab panes -->\n' +
    '                        <div class="tab-content">\n' +
    '                            <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newRoleCtrl.language" id="{{lang.value}}-form">\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                    <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="newRoleCtrl.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                    <div ng-messages="newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '\n' +
    '                                        <div ng-show="newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '\n' +
    '\n' +
    '                            </div>\n' +
    '                            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                <label for="first-name">{{\'Permission\' | translate}}</label>\n' +
    '                                <select required style="width:100% !important" class="form-control select-with-search pmd-select2-tags" multiple\n' +
    '                                        ng-model="newRoleCtrl.selectedPermissions" ng-options="permission as permission.titleDictionary[selectedLanguage] for permission in permissionList"></select>\n' +
    '\n' +
    '\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="newTypeForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="newRoleCtrl.AddNewType()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '        <button class="btn pmd-ripple-effect btn-default" type="button" ng-click="$state.go(\'Role\');">{{\'DiscardBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
    '        $(".select-with-search").select2({\n' +
    '			theme: "bootstrap"\n' +
    '		});\n' +
    '    });\n' +
    '</script>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Pickup/templates/Pickup.html',
    '<div>\n' +
    '    <div ng-if="PickupList.results.length == 0">\n' +
    '        <span>{{\'NoPickupsAvailable\' | translate}}</span>\n' +
    '    </div>\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="PickupList.results.length > 0">\n' +
    '        <div class="table-responsive"></div>\n' +
    '        <table class="table pmd-table table-hover">\n' +
    '            <thead>\n' +
    '                <tr>\n' +
    '                    <th>{{\'Name\' | translate}}</th>\n' +
    '                    <th>{{\'PickupCode\' | translate}}</th>\n' +
    '                    <th>{{\'Date\' | translate}}</th>\n' +
    '                    <th>{{\'startDate\' | translate}}</th>\n' +
    '                    <th>{{\'Price\' | translate}}</th>\n' +
    '                    <th>{{\'Payment\' | translate}}</th>\n' +
    '                    <th>{{\'Ordertype\' | translate}}</th>\n' +
    '                    <th></th>\n' +
    '                </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '                <tr ng-repeat="pickup in PickupList.results">\n' +
    '                    <td data-title="Name">{{pickup.user.firstName}}{{pickup.user.lastName}}</td>\n' +
    '                    <td data-title="Name">#{{pickup.orderCode}} </td>\n' +
    '\n' +
    '                    <td data-title="Name">{{pickup.orderDate | date : "d/MMM/yy h:mm a" }} </td>\n' +
    '                    <td data-title="Name">{{pickup.orderStartDate | date : "d/MMM/yy h:mm a"}} </td>\n' +
    '                    <td data-title="Name">\n' +
    '\n' +
    '                        <h4>{{ pickup.price}}</h4>\n' +
    '                    </td>\n' +
    '                    <td>\n' +
    '                        <div class="btn-switch" ng-class="{\'btn-switch--on\':pickup.isPaid}" ng-model="pickup.isPaid"\n' +
    '                            ng-click="UpdatePickup(pickup)">\n' +
    '\n' +
    '                            <div class="btn-switch-circle" ng-class="{\'btn-switch-circle--on\':pickup.isPaid}"\n' +
    '                                ng-model="pickup.isPaid" ng-click="UpdatePickup(pickup)">\n' +
    '                            </div>\n' +
    '                    </td>\n' +
    '                    <td data-title="Name">\n' +
    '                        <img ng-if="pickup.type == 0" src="assets\\img\\program.png" title="program">\n' +
    '                        <img ng-if="pickup.type == 1" src="assets\\img\\meal.png" title="meal">\n' +
    '                        <img ng-if="pickup.type == 2" src="assets\\img\\item.png" title="item">\n' +
    '                    </td>\n' +
    '                    <td ng-if="!pickup.isProgram">\n' +
    '\n' +
    '                        <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '                            ng-show="pickup.orderStatus != 4" ng-click="pickupCtrl.changeStatus(pickup.orderId,4);"\n' +
    '                            class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">\n' +
    '                            {{\'Deliverd\' | translate}}</button>\n' +
    '\n' +
    '                    </td>\n' +
    '\n' +
    '                </tr>\n' +
    '            </tbody>\n' +
    '        </table>\n' +
    '    </div>\n' +
    '    <div style="text-align:center;direction: ltr" paging page="1" page-size="10" total="totalCount"\n' +
    '        paging-action="changePage(page)" flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true"\n' +
    '        disabled-class="hide">\n' +
    '    </div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Pickup/templates/edit.html',
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'Order\' | translate}}</h2>\n' +
    '    </div>\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="editForm">\n' +
    '            <div>\n' +
    '                <div class="row">\n' +
    '                    <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '                        <br>\n' +
    '                        <img ng-if="editOrderCtrl.Order.type == 0" src="assets\\img\\program.png" title="program">\n' +
    '                        <img ng-if="editOrderCtrl.Order.type == 1" src="assets\\img\\meal.png" title="meal">\n' +
    '                        <img ng-if="editOrderCtrl.Order.type == 2" src="assets\\img\\item.png" title="item">\n' +
    '                    </div>\n' +
    '                    <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="regular1" class="control-label">{{\'startDateLbl\' | translate}}</label>\n' +
    '                        <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                            <input type="text" ng-model="editOrderCtrl.Order.orderStartDate" ng-change="editOrderCtrl.changeDate"\n' +
    '                                id="startdate" class="form-control" />\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'Creationdate\' | translate}} </label>\n' +
    '                        <label for="first-name" class="mat-input form-control">{{editOrderCtrl.Order.orderDate}}\n' +
    '                        </label>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'username\' | translate}} </label>\n' +
    '                        <label for="first-name" class="mat-input form-control">{{editOrderCtrl.Order.user.firstName}}\n' +
    '                            {{editOrderCtrl.Order.user.lastName}}</label>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label>{{\'orderCode\' | translate}} </label>\n' +
    '                        <label class="mat-input form-control"> {{editOrderCtrl.Order.orderCode}}</label>\n' +
    '                    </div>\n' +
    '\n' +
    '\n' +
    '                </div>\n' +
    '                <!-- bind item list -->\n' +
    '                <div class="row" ng-init="editOrderCtrl.Order.type==2" ng-show="editOrderCtrl.Order.type==2">\n' +
    '                    <div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label>{{\'orderdetails\' | translate}} </label>\n' +
    '\n' +
    '                        <table class="table pmd-table table-hover">\n' +
    '                            <thead>\n' +
    '                                <tr>\n' +
    '                                    <th>{{\'Name\' | translate}}</th>\n' +
    '                                    <th>{{\'carb\' | translate}}</th>\n' +
    '                                    <th>{{\'calories\' | translate}}</th>\n' +
    '                                    <th>{{\'protein\' | translate}}</th>\n' +
    '                                    <th>{{\'costlbl\' | translate}}</th>\n' +
    '                                    <th>{{\'Pricelbl\' | translate}}</th>\n' +
    '                                    <th>{{\'vat\' | translate}}</th>\n' +
    '                                    <th>{{\'total\' | translate}}</th>\n' +
    '                                    <th></th>\n' +
    '                                </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                                <tr ng-repeat="meal in editOrderCtrl.Order.orderDetails">\n' +
    '                                    <td data-title="Name" width="15%">{{meal.item.itemNameDictionary[selectedLanguage]\n' +
    '                                        | limitTo:10}}</td>\n' +
    '                                    <td data-title="Description">{{meal.item.carbs}}</td>\n' +
    '                                    <td data-title="Description">{{meal.item.calories}}</td>\n' +
    '                                    <td data-title="Description">{{meal.item.protein}}</td>\n' +
    '                                    <td data-title="Description">{{meal.item.cost}}</td>\n' +
    '                                    <td data-title="Description">{{meal.item.price}}</td>\n' +
    '                                    <td data-title="Description">{{meal.item.vat}}</td>\n' +
    '                                    <td data-title="totalPrice">{{meal.item.totalPrice}}</td>\n' +
    '\n' +
    '                                </tr>\n' +
    '                            </tbody>\n' +
    '                        </table>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <!-- bind meal list -->\n' +
    '                <div class="row" ng-init="editOrderCtrl.Order.type==1" ng-show="editOrderCtrl.Order.type==1">\n' +
    '                    <div class="col-md-6 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'orderdetails\' | translate}} </label>\n' +
    '                        <div class="table-responsive pmd-card pmd-z-depth">\n' +
    '                            <table class="table table-mc-red pmd-table">\n' +
    '                                <thead>\n' +
    '                                    <tr>\n' +
    '                                        <th>{{\'Meal\' | translate}}</th>\n' +
    '                                        <th></th>\n' +
    '                                    </tr>\n' +
    '                                </thead>\n' +
    '                                <tbody>\n' +
    '                                    <tr ng-repeat-start="request in editOrderCtrl.Order.orderDetails" ng-style="{\'background-color\': request.status==\'Pending\'?\'#f5f58a\':\'\'}">\n' +
    '                                        <td data-title="Name">{{request.meal.mealNameDictionary[selectedLanguage]\n' +
    '                                            | limitTo:10}}</td>\n' +
    '\n' +
    '                                        <td class="pmd-table-row-action">\n' +
    '                                            <span href="javascript:void(0);" ng-if="request.requestDetails.length >0 || request.comment !== null || request.requestTime !== null"\n' +
    '                                                ng-click="request.show=!request.show;editOrderCtrl.showMore($event)"\n' +
    '                                                class="btn pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-default btn-sm child-table-expand direct-expand"><i\n' +
    '                                                    class="material-icons md-dark pmd-sm"></i></span>\n' +
    '                                        </td>\n' +
    '                                    </tr>\n' +
    '                                    <tr ng-repeat-end class="child-table" ng-show="request.show">\n' +
    '                                        <td colspan="12">\n' +
    '                                            <div class="direct-child-table" ng-if="request.meal.mealDetails.length >0">\n' +
    '\n' +
    '                                                <table class="table pmd-table table-hover">\n' +
    '                                                    <thead>\n' +
    '                                                        <tr>\n' +
    '                                                            <th>{{\'Name\' | translate}}</th>\n' +
    '                                                            <th>{{\'carb\' | translate}}</th>\n' +
    '                                                            <th>{{\'calories\' | translate}}</th>\n' +
    '                                                            <th>{{\'protein\' | translate}}</th>\n' +
    '                                                            <th>{{\'costlbl\' | translate}}</th>\n' +
    '                                                            <th>{{\'Pricelbl\' | translate}}</th>\n' +
    '                                                            <th>{{\'vat\' | translate}}</th>\n' +
    '                                                            <th>{{\'total\' | translate}}</th>\n' +
    '                                                            <th></th>\n' +
    '                                                        </tr>\n' +
    '                                                    </thead>\n' +
    '                                                    <tbody>\n' +
    '                                                        <tr ng-repeat="meal in request.meal.mealDetails">\n' +
    '                                                            <td data-title="Name" width="15%">{{meal.item.itemNameDictionary[selectedLanguage]\n' +
    '                                                                | limitTo:10}}</td>\n' +
    '                                                            <td data-title="Description">{{meal.item.carbs}}</td>\n' +
    '                                                            <td data-title="Description">{{meal.item.calories}}</td>\n' +
    '                                                            <td data-title="Description">{{meal.item.protein}}</td>\n' +
    '                                                            <td data-title="Description">{{meal.item.cost}}</td>\n' +
    '                                                            <td data-title="Description">{{meal.item.price}}</td>\n' +
    '                                                            <td data-title="Description">{{meal.item.vat}}</td>\n' +
    '                                                            <td data-title="totalPrice">{{meal.item.totalPrice}}</td>\n' +
    '\n' +
    '                                                        </tr>\n' +
    '                                                    </tbody>\n' +
    '                                                </table>\n' +
    '                                            </div>\n' +
    '\n' +
    '\n' +
    '                                        </td>\n' +
    '                                    </tr>\n' +
    '                                </tbody>\n' +
    '                            </table>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <!-- bind Program list -->\n' +
    '                <div class="row" ng-init="editOrderCtrl.Order.type==0" ng-show="editOrderCtrl.Order.type==0">\n' +
    '                    <div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'orderdetails\' | translate}} </label>\n' +
    '                        <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                            <input readonly type="text" ng-model="editOrderCtrl.Order.orderDetails[0].program.programNameDictionary[selectedLanguage]"\n' +
    '                                class="form-control" />\n' +
    '                        </div>\n' +
    '\n' +
    '\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '            </div>\n' +
    '\n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="editForm.$invalid || !editOrderCtrl.dateIsValid  "\n' +
    '            class="btn pmd-ripple-effect btn-primary" type="button" ng-click="editOrderCtrl.UpdateType()">{{\'saveChangesBtn\'\n' +
    '            | translate}}</button>\n' +
    '        <button class="btn pmd-ripple-effect btn-default" type="button" ng-click="editOrderCtrl.Close()">{{\'DiscardBtn\'\n' +
    '            | translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
    '        $(".select-add-tags").select2({\n' +
    '            tags: true,\n' +
    '            theme: "bootstrap",\n' +
    '            insertTag: function (data, tag) {\n' +
    '                data.push(tag);\n' +
    '            }\n' +
    '        });\n' +
    '    });\n' +
    '</script>\n' +
    '<!-- \n' +
    '<script type="text/javascript">\n' +
    '    $(function () {\n' +
    '        $(\'#startdate\').datetimepicker(\n' +
    '            {\n' +
    '                minDate: new Date()\n' +
    '            }\n' +
    '        );\n' +
    '    });\n' +
    '\n' +
    '</script> -->\n' +
    '\n' +
    '\n' +
    '<script type="text/javascript">\n' +
    '    // $(function () {\n' +
    '    //     $(\'#startdate\').datetimepicker();\n' +
    '    // });\n' +
    '    $(function () {\n' +
    '        $(\'#startdate\').datetimepicker(\n' +
    '            {\n' +
    '                minDate: new Date()\n' +
    '            }\n' +
    '        ).on(\'dp.change\', function (e) {\n' +
    '            debugger;\n' +
    '            angular.element(document.getElementById(\'startdate\')).scope().dateChange();\n' +
    '        });\n' +
    '    });\n' +
    '\n' +
    '</script>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Pickup/templates/new.html',
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'NewRoleLbl\' | translate}}</h2>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="newTypeForm">\n' +
    '            <div>\n' +
    '                <!-- Nav tabs -->\n' +
    '                <ul class="nav nav-tabs" role="tablist">\n' +
    '                    <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newRoleCtrl.language">\n' +
    '                        <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                            {{lang.value | translate}}\n' +
    '                        </a>\n' +
    '                    </li>\n' +
    '                </ul>\n' +
    '                <div class="pmd-card">\n' +
    '                    <div class="pmd-card-body">\n' +
    '                        <!-- Tab panes -->\n' +
    '                        <div class="tab-content">\n' +
    '                            <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newRoleCtrl.language" id="{{lang.value}}-form">\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                    <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="newRoleCtrl.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                    <div ng-messages="newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '\n' +
    '                                        <div ng-show="newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '\n' +
    '\n' +
    '                            </div>\n' +
    '                            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                <label for="first-name">{{\'Permission\' | translate}}</label>\n' +
    '                                <select required style="width:100% !important" class="form-control select-with-search pmd-select2-tags" multiple\n' +
    '                                        ng-model="newRoleCtrl.selectedPermissions" ng-options="permission as permission.titleDictionary[selectedLanguage] for permission in permissionList"></select>\n' +
    '\n' +
    '\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="newTypeForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="newRoleCtrl.AddNewType()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '        <button class="btn pmd-ripple-effect btn-default" type="button" ng-click="$state.go(\'Role\');">{{\'DiscardBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
    '        $(".select-with-search").select2({\n' +
    '			theme: "bootstrap"\n' +
    '		});\n' +
    '    });\n' +
    '</script>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Program/templates/addProgram.html',
    '\n' +
    '<style>\n' +
    '\n' +
    '    .page-label {\n' +
    '    text-align: center;\n' +
    '    font-family: \'brandon_text_regularregular\', serif/*rtl:prepend:"HelveticaNeueLTArabic-Roman",*/;\n' +
    '    font-size: 26px;\n' +
    '    position: relative;\n' +
    '    top: -60px;\n' +
    '    margin-bottom: 0;\n' +
    '    height: 0px;\n' +
    '    padding-bottom: 0;\n' +
    '    margin-top: 0;\n' +
    '}\n' +
    ' .getting-started-nav ul {\n' +
    '    font-family: \'brandon_textlight\', serif /*rtl:prepend:"HelveticaNeueLTArabic-Light",*/;\n' +
    '    text-align: center;\n' +
    '    margin: 0;\n' +
    '    padding: 0;\n' +
    '    width: 60%;\n' +
    '    text-align: center;\n' +
    '    margin: auto;\n' +
    '}\n' +
    '.getting-started-nav li {\n' +
    '    display: inline-block;\n' +
    '    width: 20%;\n' +
    '}\n' +
    '.nav-seperator {\n' +
    '    width: 46%;\n' +
    '    height: 4px;\n' +
    '    background: #2c3f52;\n' +
    '    margin: auto;\n' +
    '}\n' +
    '.getting-started-nav li.active span {\n' +
    '    background: #ea85e2 !important;\n' +
    '}\n' +
    '.getting-started-nav span {\n' +
    '    color: #fff;\n' +
    '    border-radius: 100%;\n' +
    '    background: #2c3f52;\n' +
    '    width: 32px;\n' +
    '    height: 32px;\n' +
    '    display: inline-block;\n' +
    '    padding: 4px;\n' +
    '    text-align: center;\n' +
    '    margin-bottom: 0;\n' +
    '    border: 2px solid #2c3f52;\n' +
    '    position: relative;\n' +
    '    top: -18px;\n' +
    '}\n' +
    '.getting-started-nav label {\n' +
    '    color: #2c3f52;\n' +
    '    text-transform: uppercase;\n' +
    '    display: block;\n' +
    '    position: relative;\n' +
    '    top: -8px;\n' +
    '}\n' +
    '\n' +
    '</style>\n' +
    '\n' +
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'ProgramLbl\' | translate}}</h2>\n' +
    '    </div>\n' +
    '    <div class="modal-body">\n' +
    '        <div class="row">\n' +
    '            <div id="wizard-container">\n' +
    '                <div class="getting-started-nav">\n' +
    '                    <ul>\n' +
    '                        <h2 class="page-label">{{\'LETSCREATEPROGRAM\' | translate}}</h2>\n' +
    '                        <div class="nav-seperator"></div>\n' +
    '                        <li ng-class="{\'active\':addProgramCtrl.currentStep ==1}"><span>1</span><label for="">Baisc Info</label></li>\n' +
    '                        <li ng-class="{\'active\':addProgramCtrl.currentStep ==2}"><span>2</span><label for="">Create Meal</label></li>\n' +
    '                        <li ng-class="{\'active\':addProgramCtrl.currentStep ==3}"><span>3</span><label for="">Summary</label></li>\n' +
    '                       \n' +
    '                    </ul>\n' +
    '                </div>\n' +
    '\n' +
    '                <!-- <div id="wizard-step-container">\n' +
    '                    <ul ng-init="counter = 0" class="nav nav-pills nav-justified">\n' +
    '                        <li ng-repeat="step in addProgramCtrl.steps" ng-class="{\'active\':step.step == addProgramCtrl.currentStep}">\n' +
    '                            <a style="background-image: linear-gradient(90deg,#9a3ea6 0%,#bc4abf 100%)!important; color: yellow!important;"\n' +
    '                                ng-click="addProgramCtrl.gotoStep(step.step)" href="">{{\'Step\' | translate}}\n' +
    '                                #{{step.step}} </a>\n' +
    '                        </li>\n' +
    '                    </ul>\n' +
    '                </div> -->\n' +
    '\n' +
    '                <div id="wizard-content-container">\n' +
    '                    <ng-include src="addProgramCtrl.getStepTemplate()"></ng-include>\n' +
    '                </div>\n' +
    '\n' +
    '                <div id="wizard-navigation-container" ng-show="false">\n' +
    '                    <div class="pull-right">\n' +
    '                        <span class="btn-group">\n' +
    '                            <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '                                ng-disabled="1 >= addProgramCtrl.currentStep" class="btn btn-default" name="previous"\n' +
    '                                type="button" ng-click="addProgramCtrl.gotoStep(addProgramCtrl.currentStep - 1)">\n' +
    '                                <i class="fa fa-arrow-left"></i>{{\'PreviousStep\' | translate}}</button>\n' +
    '                            <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '                                ng-disabled="addProgramCtrl.currentStep >= addProgramCtrl.steps.length" class="btn btn-primary"\n' +
    '                                name="next" type="button" ng-click="addProgramCtrl.gotoStep(addProgramCtrl.currentStep + 1)">{{\'NextStep\'\n' +
    '                                | translate}}\n' +
    '                                <i class="fa fa-arrow-right"></i>\n' +
    '                            </button>\n' +
    '                        </span>\n' +
    '                        <!-- {{addProgramCtrl.Setting.minNoDaysPerProgram}} / {{addProgramCtrl.ProgramDaysCount}} -->\n' +
    '                        <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '                            ng-disabled="(addProgramCtrl.currentStep != addProgramCtrl.steps.length) || (addProgramCtrl.Setting.minNoDaysPerProgram > addProgramCtrl.ProgramDaysCount)"\n' +
    '                            class="btn btn-success" name="next" type="button" ng-click="addProgramCtrl.AddNewProgram()">\n' +
    '                            <i class="fa fa-floppy-o"></i>{{\'Save\' | translate}}</button>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Program/templates/editProgramMeal.html',
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
    '\n' +
    '        // $(".select-simple").select2({\n' +
    '        // 	theme: "bootstrap",\n' +
    '        // 	minimumResultsForSearch: Infinity,\n' +
    '        // });\n' +
    '        // $(".select-with-search").select2({\n' +
    '        // 	theme: "bootstrap"\n' +
    '        // });\n' +
    '        // $(".select-tags").select2({\n' +
    '        // 	tags: false,\n' +
    '        // 	theme: "bootstrap",\n' +
    '        // });\n' +
    '        $(".select-add-tags").select2({\n' +
    '            tags: true,\n' +
    '            theme: "bootstrap",\n' +
    '            insertTag: function (data, tag) {\n' +
    '                // Insert the tag at the end of the results\n' +
    '                data.push(tag);\n' +
    '                // console.log(data);\n' +
    '            }\n' +
    '        });\n' +
    '    });\n' +
    '</script>\n' +
    '\n' +
    '\n' +
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <button class="close" type="button" ng-click="editProgramMealCtrl.close()">×</button>\n' +
    '        <h2 class="pmd-card-title-text">{{\'UpdateProgramLbl\' | translate}}</h2>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="editProgramDetailsForm" autocomplete="off">\n' +
    '\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'SelectItems\' | translate}}</label>\n' +
    '                <select required style="width:100% !important" class="form-control select-add-tags pmd-select2-tags" multiple\n' +
    '                    ng-model="itemList" ng-options="item as item.itemNameDictionary[selectedLanguage] \n' +
    '                    group by item.category.titleDictionary[selectedLanguage]\n' +
    '                    for item  in itemsssPrepService">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '        <div class="pmd-modal-action text-right">\n' +
    '            <button ng-disabled="editProgramDetailsForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button"\n' +
    '                ng-click="editProgramMealCtrl.UpdateProgram()">{{\'Edit\' | translate}}</button>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Program/templates/editPrograms.html',
    '<form class="form-horizontal" name="editProgramForm">\n' +
    '    <!-- {{editProgramCtrl.programObj}} -->\n' +
    '     \n' +
    '    <div>\n' +
    '        <ul class="nav nav-tabs" role="tablist">\n' +
    '            <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editProgramCtrl.language">\n' +
    '                <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                    {{lang.value | translate}}\n' +
    '                </a>\n' +
    '            </li>\n' +
    '        </ul>\n' +
    '        <div class="pmd-card">\n' +
    '            <div class="pmd-card-body">\n' +
    '                <div class="tab-content">\n' +
    '                    <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editProgramCtrl.language" id="{{lang.value}}-form">\n' +
    '                        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                            <label for="first-name"> {{ lang.value+\'ProgramName\' | translate}} </label>\n' +
    '\n' +
    '                            <input required Category="text" class="mat-input form-control" name="programNameDictionary{{lang.value+\'Name\'}}" ng-model="editProgramCtrl.programModel.programNameDictionary[lang.key]"\n' +
    '                                ng-minlength="2" ng-maxlength="255">\n' +
    '                            <div ng-messages="editProgramForm.programNameDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '                                <div ng-show="editProgramForm.programNameDictionary{{lang.value+\'Name\'}}.$error.required && !editProgramForm.programNameDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                <div ng-show="(editProgramForm.programNameDictionary{{lang.value+\'Name\'}}.$error.minlength || editProgramForm.programNameDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editProgramForm.programNameDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '\n' +
    '                        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                            <label for="first-name"> {{ lang.value+\'ProgramDescription\' | translate}} </label>\n' +
    '                            <input required Category="text" class="mat-input form-control" name="programDescriptionDictionary{{lang.value+\'Name\'}}" ng-model="editProgramCtrl.programModel.programDescriptionDictionary[lang.key]"\n' +
    '                                ng-minlength="2" ng-maxlength="255">\n' +
    '                            <div ng-messages="editProgramForm.programDescriptionDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '                                <div ng-show="editProgramForm.programDescriptionDictionary{{lang.value+\'Name\'}}.$error.required && !editProgramForm.programDescriptionDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                <div ng-show="(editProgramForm.programDescriptionDictionary{{lang.value+\'Name\'}}.$error.minlength || editProgramForm.programDescriptionDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editProgramForm.programDescriptionDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <hr>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'ProgramDiscount\' | translate}}</label>\n' +
    '        <input required type="number" ng-change="discountChange();" class="mat-input form-control" name="programDiscount" ng-model="editProgramCtrl.programModel.programDiscount"\n' +
    '            ng-minlength="1" ng-maxlength="5">\n' +
    '        <div ng-messages="editProgramForm.programDiscount.$error" class="error">\n' +
    '            <div ng-if="editProgramForm.programDiscount.$error.required && !editProgramForm.programDiscount.$pristine">{{\'ProgramDiscountReqError\' | translate}}</div>\n' +
    '            <div ng-if="(editProgramForm.programDiscount.$error.minlength || editProgramForm.programDiscount.$error.maxlength)">{{\'ProgramDiscountLengthError\' | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</form>\n' +
    '\n' +
    '<button style="background-image: linear-gradient(251deg,#f3c534 5%,#9a3ea6 68%)!important;" ng-disabled="editProgramForm.$invalid" class="btn btn-success" name="next" type="button"\n' +
    '    ng-click="editProgramCtrl.editProgram()">\n' +
    '    <i class="fa fa-floppy-o"></i>{{\'Save\' | translate}}</button>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Program/templates/newStepOne.html',
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
    '        $(".select-add-tags").select2({\n' +
    '            tags: true,\n' +
    '            theme: "bootstrap",\n' +
    '            insertTag: function (data, tag) {\n' +
    '                // Insert the tag at the end of the results\n' +
    '                data.push(tag);\n' +
    '                // console.log(data);\n' +
    '            }\n' +
    '        });\n' +
    '\n' +
    '        $(".select-tags").select2({\n' +
    '            tags: false,\n' +
    '            theme: "bootstrap",\n' +
    '        });\n' +
    '\n' +
    '        $(".select-with-search").select2({\n' +
    '            theme: "bootstrap"\n' +
    '        });\n' +
    '    });\n' +
    '</script>\n' +
    '<div>\n' +
    '    <div>\n' +
    '        <form class="form-horizontal" name="newProgramFormStepOne">\n' +
    '            <div>\n' +
    '                <ul class="nav nav-tabs" role="tablist">\n' +
    '                    <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in addProgramCtrl.language">\n' +
    '                        <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                            {{lang.value | translate}}\n' +
    '                        </a>\n' +
    '                    </li>\n' +
    '                </ul>\n' +
    '                <div class="pmd-card">\n' +
    '                    <div class="pmd-card-body">\n' +
    '                        <div class="tab-content">\n' +
    '                            <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in addProgramCtrl.language" id="{{lang.value}}-form">\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name"> {{ lang.value+\'ProgramName\' | translate}} </label>\n' +
    '                                    <input required Category="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="addProgramCtrl.titleDictionary[lang.key]"\n' +
    '                                        ng-minlength="2" ng-maxlength="255">\n' +
    '                                    <div ng-messages="newProgramFormStepOne.titleDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '                                        <div ng-show="newProgramFormStepOne.titleDictionary{{lang.value+\'Name\'}}.$error.required && !newProgramFormStepOne.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(newProgramFormStepOne.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || newProgramFormStepOne.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newProgramFormStepOne.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name"> {{ lang.value+\'ProgramDescription\' | translate}} </label>\n' +
    '                                    <input required Category="text" class="mat-input form-control" name="descriptionDictionary{{lang.value+\'Name\'}}" ng-model="addProgramCtrl.descriptionDictionary[lang.key]"\n' +
    '                                        ng-minlength="2" ng-maxlength="255">\n' +
    '                                    <div ng-messages="newProgramFormStepOne.descriptionDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '                                        <div ng-show="newProgramFormStepOne.descriptionDictionary{{lang.value+\'Name\'}}.$error.required && !newProgramFormStepOne.descriptionDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(newProgramFormStepOne.descriptionDictionary{{lang.value+\'Name\'}}.$error.minlength || newProgramFormStepOne.descriptionDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newProgramFormStepOne.descriptionDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="col-md-6 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'SelectExcludeDays\' | translate}}</label>\n' +
    '                        <select style="width:100% !important" class="form-control select-add-tags pmd-select2-tags" multiple ng-model="addProgramCtrl.SelectedDays"\n' +
    '                            ng-options="day as day.dayNameDictionary[selectedLanguage] for day in addProgramCtrl.dayList">\n' +
    '                        </select>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <br>\n' +
    '\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="newProgramFormStepOne.$invalid" class="btn pmd-ripple-effect btn-primary"\n' +
    '                type="button" ng-click="addProgramCtrl.gotoStep(2)">\n' +
    '                {{\'next\' | translate}}</button>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Program/templates/newStepThree.html',
    '  <form class="form-horizontal" name="newProgram3Form">\n' +
    '\n' +
    '    <br>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'ProgramPrice\' | translate}}</label>\n' +
    '        <input disabled type="number" class="mat-input form-control" name="programPrice" ng-model="addProgramCtrl.ProgramPrice">\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'ProgramCost\' | translate}}</label>\n' +
    '        <input disabled type="number" class="mat-input form-control" name="programCost" ng-model="addProgramCtrl.ProgramCost">\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'ProgramVAT\' | translate}}</label>\n' +
    '        <input disabled type="number" class="mat-input form-control" name="programVAT" ng-model="addProgramCtrl.ProgramVAT">\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'ProgramDiscount\' | translate}}</label>\n' +
    '        <input required type="number" class="mat-input form-control" name="programDiscount" ng-model="addProgramCtrl.ProgramDiscount">\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'ProgramTotalPrice\' | translate}}</label>\n' +
    '        <input disabled type="number" class="mat-input form-control" name="programTotalPrice" ng-model="addProgramCtrl.ProgramTotalPrice">\n' +
    '    </div>\n' +
    '    <!-- || (addProgramCtrl.Setting.minNoDaysPerProgram > addProgramCtrl.ProgramDaysCount) -->\n' +
    '    <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="(addProgramCtrl.currentStep != addProgramCtrl.steps.length)"\n' +
    '        class="btn btn-success" name="next" type="button" ng-click="addProgramCtrl.AddNewProgram()">\n' +
    '        <i class="fa fa-floppy-o"></i>{{\'Save\' | translate}}</button>\n' +
    '\n' +
    '</form>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Program/templates/newStepTwo.html',
    '<!-- Inbox like Accordion -->\n' +
    '<form name="stepTwoProgramForm">\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'ProgramDaysCount\' | translate}}</label>\n' +
    '            <!-- <input required type="text" numbers-only class="mat-input form-control" name="programDaysCount" ng-model="addProgramCtrl.ProgramDaysCount"\n' +
    '                ng-minlength="1" ng-maxlength="2"> -->\n' +
    '            <input ng-change="addProgramCtrl.ConvertToNumber();" required type="text" class="mat-input form-control" name="programDaysCount" numbers-only ng-model="addProgramCtrl.ProgramDaysCount"\n' +
    '                minlength="1" maxlength="2">\n' +
    '            <div ng-messages="stepTwoProgramForm.programDaysCount.$error">\n' +
    '                <div ng-if="stepTwoProgramForm.programDaysCount.$error.required && !stepTwoProgramForm.programDaysCount.$pristine">{{\'PhoneReqError\' | translate}}\n' +
    '                </div>\n' +
    '                <div ng-if="(stepTwoProgramForm.programDaysCount.$error.minlength || stepTwoProgramForm.programDaysCount.$error.maxlength)">{{\'PhoneLengthError\' | translate}}</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'MealPerDay\' | translate}}</label>\n' +
    '            <input ng-change="addProgramCtrl.ConvertToNumber();" required type="text" numbers-only class="mat-input form-control" name="mealPerDay" ng-model="addProgramCtrl.MealPerDay"\n' +
    '                minlength="1" maxlength="2">\n' +
    '            <div ng-messages="stepTwoProgramForm.mealPerDay.$error" class="error">\n' +
    '                <div ng-if="stepTwoProgramForm.mealPerDay.$error.required && !stepTwoProgramForm.mealPerDay.$pristine">{{\'MealPerDayReqError\' | translate}}</div>\n' +
    '                <div ng-if="(stepTwoProgramForm.mealPerDay.$error.minlength || stepTwoProgramForm.mealPerDay.$error.maxlength)">{{\'MealPerDayLengthError\' | translate}}</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <!-- <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'ProgramDiscount\' | translate}}</label>\n' +
    '            <input required type="number" ng-change="discountChange();" class="mat-input form-control" name="programDiscount"\n' +
    '                ng-model="addProgramCtrl.ProgramDiscount" ng-minlength="1" ng-maxlength="5">\n' +
    '            <div ng-messages="stepTwoProgramForm.programDiscount.$error" class="error">\n' +
    '                <div ng-if="stepTwoProgramForm.programDiscount.$error.required && !stepTwoProgramForm.programDiscount.$pristine">{{\'ProgramDiscountReqError\'\n' +
    '                    | translate}}</div>\n' +
    '                <div ng-if="(stepTwoProgramForm.programDiscount.$error.minlength || stepTwoProgramForm.programDiscount.$error.maxlength)">{{\'ProgramDiscountLengthError\'\n' +
    '                    | translate}}</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="col-md-6 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'SelectExcludeDays\' | translate}}</label>\n' +
    '            <select style="width:100% !important" class="form-control select-add-tags pmd-select2-tags" multiple\n' +
    '                ng-model="addProgramCtrl.SelectedDays" ng-options="day as day.dayNameDictionary[selectedLanguage] for day in addProgramCtrl.dayList">\n' +
    '\n' +
    '            </select>\n' +
    '        </div> -->\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Breakfast\' | translate}}\n' +
    '            <input type="checkbox" ng-model="addProgramCtrl.IsBreakFast">\n' +
    '        </label>\n' +
    '        <br />\n' +
    '        <label for="first-name">{{\'Snack\' | translate}}\n' +
    '            <input type="checkbox" ng-model="addProgramCtrl.IsSnack">\n' +
    '        </label>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-init="counterDay = 0; counterMeal = 0">\n' +
    '        <div class="panel-group pmd-accordion pmd-accordion-inbox" id="accordion6" role="tablist" aria-multiselectable="true">\n' +
    '            <div ng-repeat="n in [].constructor(addProgramCtrl.daysCount)  track by $index" class="panel panel-default">\n' +
    '                <div class="panel-heading" role="tab" id="headingOne">\n' +
    '                    <h4 class="panel-title">\n' +
    '                        <a ng-init="counterDay=counterDay+1;" data-toggle="collapse" data-parent="#accordion6" ng-init="n=false" ng-click="n=!n;"\n' +
    '                            aria-expanded="true" aria-controls="collapseOne6" data-expandable="false">\n' +
    '                            {{\'Day\' | translate}} #{{counterDay=$index+1}}\n' +
    '                            <i class="material-icons md-dark pmd-sm pmd-accordion-arrow">keyboard_arrow_down</i>\n' +
    '                        </a>\n' +
    '                    </h4>\n' +
    '                </div>\n' +
    '                <div ng-show="n == true" id="collapseOne6" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">\n' +
    '                    <div class="panel-body">\n' +
    '                        <ul>\n' +
    '                            <li ng-repeat="meal in [].constructor(addProgramCtrl.mealsCount)  track by $index">\n' +
    '                                <h4>\n' +
    '                                    <a ng-init="counterMeal=counterMeal+1;" ng-click="showDetails = ! showDetails; addProgramCtrl.showDDL(); ">{{\'Meal\' | translate}} #{{counterMeal=$index+1}}</a>\n' +
    '                                </h4>\n' +
    '                                <div ng-show="showDetails">\n' +
    '                                    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                        <label for="first-name">{{\'SelectItems\' | translate}}</label>\n' +
    '                                        <select required name="ddl{{counterDay}}{{counterMeal}}" style="width:100% !important" class="form-control select-add-tags pmd-select2-tags"\n' +
    '                                            multiple ng-model="itemModel" ng-change="getData(itemModel,counterDay,counterMeal)"\n' +
    '                                            ng-options="item as item.itemNameDictionary[selectedLanguage] \n' +
    '                                        group by item.category.titleDictionary[selectedLanguage]\n' +
    '                                        for item  in itemsssPrepService">\n' +
    '                                        </select>\n' +
    '                                        <div ng-messages="stepTwoProgramForm.ddl{{counterDay}}{{counterMeal}}.$error">\n' +
    '\n' +
    '                                            <div ng-show="stepTwoProgramForm.ddl{{counterDay}}{{counterMeal}}.$error.required && !stepTwoProgramForm.ddl{{counterDay}}{{counterMeal}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                            <div ng-show="(stepTwoProgramForm.ddl{{counterDay}}{{counterMeal}}.$error.minlength || stepTwoProgramForm.ddl{{counterDay}}{{counterMeal}}.$error.maxlength) && !stepTwoProgramForm.ddl{{counterDay}}{{counterMeal}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </li>\n' +
    '                        </ul>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <!-- {{stepTwoProgramForm.$invalid}} {{addProgramCtrl.daysCount == 0}} {{addProgramCtrl.mealsCount == 0}} \n' +
    '    /{{stepTwoProgramForm.$invalid || (addProgramCtrl.daysCount == 0 || addProgramCtrl.mealsCount == 0)}} -->\n' +
    '    <button style="background-color: #e4e5e6;color: black!important;" \n' +
    '    ng-disabled="(stepTwoProgramForm.$invalid || (addProgramCtrl.daysCount == 0 || addProgramCtrl.mealsCount == 0))"\n' +
    '        class="btn pmd-ripple-effect btn-primary" type="button" ng-click="addProgramCtrl.gotoStep(3);">\n' +
    '        {{\'next\' | translate}}</button>\n' +
    '\n' +
    '</form>\n' +
    '<!-- \n' +
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
    '        $(".select-add-tags").select2({\n' +
    '            tags: true,\n' +
    '            theme: "bootstrap",\n' +
    '            insertTag: function (data, tag) {\n' +
    '                // Insert the tag at the end of the results\n' +
    '                data.push(tag);\n' +
    '            }\n' +
    '        });\n' +
    '    });\n' +
    '</script> -->');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Program/templates/program.html',
    '<div>\n' +
    '    <!-- <div ncy-breadcrumb></div> -->\n' +
    '    <div style="margin-bottom:10px">\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" ng-click="$state.go(\'newProgram\');"\n' +
    '            class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddNew\'\n' +
    '            | translate}}</button>\n' +
    '\n' +
    '    </div>\n' +
    '    <div ng-if="programList.results.length == 0">\n' +
    '        <span>{{\'NoProgramAvailable\' | translate}}</span>\n' +
    '    </div>\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="programList.results.length > 0">\n' +
    '        <div class="table-responsive"></div>\n' +
    '        <table class="table pmd-table table-hover">\n' +
    '            <thead>\n' +
    '                <tr>\n' +
    '                    <th>{{\'ProgramName\' | translate}}</th>\n' +
    '                    <th>{{\'ProgramDescription\' | translate}}</th>\n' +
    '                    <th>{{\'Status\' | translate}}</th>\n' +
    '                    <th></th>\n' +
    '                </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '                <tr ng-repeat="program in programList.results">\n' +
    '                    <td data-title="Name">{{program.programNameDictionary[selectedLanguage]}}</td>\n' +
    '                    <td data-title="Name">{{program.programDescriptionDictionary[selectedLanguage]}}</td>\n' +
    '                    <td>\n' +
    '                        <div class="btn-switch" ng-class="{\'btn-switch--on\':program.isActive}" ng-model="program.isActive"\n' +
    '                            ng-click="programCtrl.UpdateProgram(program)">\n' +
    '\n' +
    '                            <div class="btn-switch-circle" ng-class="{\'btn-switch-circle--on\':program.isActive}"\n' +
    '                                ng-model="program.isActive" ng-click="programCtrl.UpdateProgram(program)">\n' +
    '                            </div>\n' +
    '                    </td>\n' +
    '                    <td width="30%" ng-show="!program.isStatic">\n' +
    '                        <a ng-click="$state.go(\'programDetails\', {programId: program.programId});" class="cursorPointer">{{\'ProgramDetails\'\n' +
    '                            | translate}}</a>\n' +
    '                        <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="$state.go(\'editProgram\', {programId: program.programId});">mode_edit</i>\n' +
    '                        <i class="material-icons pmd-md deleteButton cursorPointer font25" ng-click="programCtrl.openDeleteDialog(program,program.titleDictionary[selectedLanguage],program.programId)">delete</i>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '            </tbody>\n' +
    '        </table>\n' +
    '    </div>\n' +
    '    <div style="text-align:center;direction: ltr" paging page="1" page-size="10" total="totalCount" paging-action="changePage(page)"\n' +
    '        flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '    </div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Program/templates/programDetails.html',
    '<div ng-init="counterDay = 0; counterMeal = 0">\n' +
    '    <div class="panel-group pmd-accordion pmd-accordion-inbox" id="accordion6" role="tablist" aria-multiselectable="true">\n' +
    '        <!-- {{programDetailsCtrl.programDetails.programDays}} / {{programDetailsCtrl.programDetails.noOfMeals}} -->\n' +
    '        <div ng-repeat="n in [].constructor(programDetailsCtrl.programDetails.programDays)  track by $index" class="panel panel-default">\n' +
    '            <div class="panel-heading" role="tab" id="headingOne">\n' +
    '                <h4 class="panel-title">\n' +
    '                    <a ng-init="counterDay=counterDay+1;" data-toggle="collapse" data-parent="#accordion6" ng-init="n=false"\n' +
    '                        ng-click="n=!n;" aria-expanded="true" aria-controls="collapseOne6" data-expandable="false">\n' +
    '                        {{\'Day\' | translate}} #{{counterDay=$index+1}}\n' +
    '                        <i class="material-icons md-dark pmd-sm pmd-accordion-arrow">keyboard_arrow_down</i>\n' +
    '                    </a>\n' +
    '                </h4>\n' +
    '            </div>\n' +
    '            <div ng-show="n == true" id="collapseOne6" class="panel-collapse collapse in" role="tabpanel"\n' +
    '                aria-labelledby="headingOne">\n' +
    '                <div class="panel-body">\n' +
    '                    <ul>\n' +
    '\n' +
    '                        <li ng-repeat="meal in [].constructor(programDetailsCtrl.programDetails.noOfMeals)  track by $index">\n' +
    '                            <h4>\n' +
    '                                <a ng-init="counterMeal=counterMeal+1;" ng-click="showDetails = ! showDetails; programDetailsCtrl.showDDL(); ">{{\'Meal\'\n' +
    '                                    | translate}} #{{counterMeal=$index+1}}</a>\n' +
    '                                <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="programDetailsCtrl.ShowProgramMeal(programDetailsCtrl.programDetails.programId, counterDay, counterMeal)">mode_edit</i>\n' +
    '                                <!-- {{programDetailsCtrl.programDetails.programId}}, {{counterDay}}, {{counterMeal}} -->\n' +
    '                            </h4>\n' +
    '                            <div ng-show="showDetails">\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name">{{\'SelectItems\' | translate}}</label>\n' +
    '                                    <ul>\n' +
    '                                        <li ng-repeat="detail in programDetailsCtrl.programDetails.programDetails | filter:{dayNumber:counterDay, mealNumberPerDay: counterMeal} ">\n' +
    '                                            <div ng-repeat="item in programDetailsCtrl.programDetails.items |filter :{itemId:detail.itemId}">\n' +
    '                                                {{item.itemNameDictionary[selectedLanguage]}}\n' +
    '                                            </div>\n' +
    '                                        </li>\n' +
    '                                    </ul>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </li>\n' +
    '                    </ul>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Region/templates/Regions.html',
    '<div>\n' +
    '    <div ncy-breadcrumb></div>\n' +
    '    <div style="margin-bottom:10px">\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" ng-click="$state.go(\'newRegion\',{ countryId: $stateParams.countryId });" class="btn pmd-ripple-effect btn-primary pmd-z-depth"\n' +
    '            type="button">{{\'AddNew\' | translate}}</button>\n' +
    '\n' +
    '    </div>\n' +
    '    <div ng-if="Regions.results.length == 0">\n' +
    '        <span>{{\'NoRegionsAvailable\' | translate}}</span>\n' +
    '    </div>\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="Regions.results.length > 0">\n' +
    '        <div class="table-responsive"></div>\n' +
    '        <table class="table pmd-table table-hover">\n' +
    '            <thead>\n' +
    '                <tr>\n' +
    '                    <th>{{\'Name\' | translate}}</th> \n' +
    '                    <th></th>\n' +
    '                </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '                <tr ng-repeat="region in Regions.results">\n' +
    '                    <td data-title="Name">{{region.titleDictionary[selectedLanguage]}}</td>\n' +
    ' \n' +
    '                    <td>\n' +
    '                        <button style="background-color: #e4e5e6;color: black!important;" ng-click="$state.go(\'Cities\',{countryId: $stateParams.countryId,regionId: region.regionId});"\n' +
    '                            class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'viewCities\' |\n' +
    '                            translate}}</button>\n' +
    '                      </td>\n' +
    '\n' +
    '                    <td width="30%">\n' +
    '                        <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="$state.go(\'editRegion\',{countryId: $stateParams.countryId ,regionId: region.regionId});">mode_edit</i>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '\n' +
    '            </tbody>\n' +
    '        </table>\n' +
    '    </div>\n' +
    '    <div style="text-align:center;direction: ltr" paging page="1" page-size="10" total="totalCount" paging-action="changePage(page)"\n' +
    '        flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '    </div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Region/templates/edit.html',
    '<div ncy-breadcrumb></div>        \n' +
    '<div class="modal-content">\n' +
    '        <div class="modal-header bordered">\n' +
    '		<h2 class="pmd-card-title-text">{{\'Region\' | translate}}</h2>\n' +
    '	</div>\n' +
    '	<div class="modal-body">\n' +
    '		<form class="form-horizontal" name="editTypeForm"> \n' +
    '                <div> \n' +
    '                    <!-- Nav tabs -->\n' +
    '                    <ul class="nav nav-tabs" role="tablist">\n' +
    '                        <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editRegionCtrl.language">\n' +
    '                            <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                                {{lang.value | translate}}\n' +
    '                            </a>\n' +
    '                        </li> \n' +
    '                    </ul>\n' +
    '                    <div class="pmd-card">\n' +
    '                        <div class="pmd-card-body">\n' +
    '                            <!-- Tab panes -->\n' +
    '                            <div class="tab-content">\n' +
    '                                <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editRegionCtrl.language" id="{{lang.value}}-form">\n' +
    '                                    <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                                        <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                        <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="editRegionCtrl.Region.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                        <div ng-messages="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '                                            \n' +
    '                                            <div ng-show="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                            <div ng-show="(editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div> \n' +
    '                        </div>\n' +
    '\n' +
    '                   \n' +
    '                    </div>\n' +
    '                </div> \n' +
    ' \n' +
    '		</form>\n' +
    '	</div>\n' +
    '	<div class="pmd-modal-action text-right">\n' +
    '		<button style="background-color: #e4e5e6;color: black!important;" ng-disabled="editTypeForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="editRegionCtrl.UpdateRegion()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '		<button class="btn pmd-ripple-effect btn-default" type="button" ng-click="editRegionCtrl.Close()">{{\'DiscardBtn\' | translate}}</button>\n' +
    '	</div>\n' +
    '</div>\n' +
    '\n' +
    '	\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Region/templates/new.html',
    '<div ncy-breadcrumb></div>                \n' +
    '<div class="modal-content">\n' +
    '        \n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'NewRegion\' | translate}}</h2>\n' +
    '    </div>\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="newAreaForm"> \n' +
    '            <div> \n' +
    '                <!-- Nav tabs -->\n' +
    '                <ul class="nav nav-tabs" role="tablist">\n' +
    '                    <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newRegionCtrl.language">\n' +
    '                        <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                            {{lang.value | translate}}\n' +
    '                        </a>\n' +
    '                    </li> \n' +
    '                </ul>\n' +
    '                <div class="pmd-card">\n' +
    '                    <div class="pmd-card-body">\n' +
    '                        <!-- Tab panes -->\n' +
    '                        <div class="tab-content">\n' +
    '                            <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newRegionCtrl.language" id="{{lang.value}}-form">\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                    <input required Area="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="newRegionCtrl.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                    <div ng-messages="newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '										\n' +
    '                                        <div ng-show="newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newAreaForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div> \n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="newAreaForm.$invalid" class="btn pmd-ripple-effect btn-primary" Area="button" ng-click="newRegionCtrl.AddNewRegion()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '        <button class="btn pmd-ripple-effect btn-default" Area="button" ng-click="$state.go(\'Regions\',{countryId: $stateParams.countryId });">{{\'DiscardBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Role/templates/Role.html',
    '<div>\n' +
    '    <div style="margin-bottom:10px">\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" ng-click="$state.go(\'newRole\');" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddBtn\'\n' +
    '            | translate}}</button>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-if="RoleList.results.length == 0">\n' +
    '        <span>{{\'NoRolesAvailable\' | translate}}</span>\n' +
    '    </div>\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="RoleList.results.length > 0">\n' +
    '        <div class="table-responsive"></div>\n' +
    '        <table class="table pmd-table table-hover">\n' +
    '            <thead>\n' +
    '                <tr>\n' +
    '                    <th>{{\'Name\' | translate}}</th>\n' +
    '                    <th>{{\'Status\' | translate}}</th>\n' +
    '                    <th></th>\n' +
    '                </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '                <tr ng-repeat="role in RoleList.results">\n' +
    '                    <td data-title="Name">{{role.titleDictionary[selectedLanguage]}}</td>\n' +
    '                    <td>\n' +
    '                        <div class="btn-switch" ng-class="{\'btn-switch--on\':role.isActive}" ng-model="role.isActive"\n' +
    '                            ng-click="RoleCtrl.UpdateRole(role)">\n' +
    '\n' +
    '                            <div class="btn-switch-circle" ng-class="{\'btn-switch-circle--on\':role.isActive}"\n' +
    '                                ng-model="role.isActive" ng-click="RoleCtrl.UpdateRole(role)">\n' +
    '                            </div>\n' +
    '                    </td>\n' +
    '\n' +
    '                    <td width="30%" ng-show="!role.isStatic">\n' +
    '                        <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="$state.go(\'editrole\',{roleId: role.roleId});">mode_edit</i>\n' +
    '                        <i class="material-icons pmd-md deleteButton cursorPointer font25" ng-click="RoleCtrl.openDeleteDialog(role,role.titleDictionary[selectedLanguage],role.roleId)">delete</i>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '            </tbody>\n' +
    '        </table>\n' +
    '    </div>\n' +
    '    <div style="text-align:center;direction: ltr" paging page="1" page-size="10" total="totalCount" paging-action="changePage(page)"\n' +
    '        flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '    </div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Role/templates/edit.html',
    '<div class="modal-content">\n' +
    '	<div class="modal-header bordered">\n' +
    '		<h2 class="pmd-card-title-text">{{\'Role\' | translate}}</h2>\n' +
    '	</div>\n' +
    '	<div class="modal-body">\n' +
    '		<form class="form-horizontal" name="editTypeForm"> \n' +
    '                <div> \n' +
    '                    <!-- Nav tabs -->\n' +
    '                    <ul class="nav nav-tabs" role="tablist">\n' +
    '                        <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editRoleCtrl.language">\n' +
    '                            <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                                {{lang.value | translate}}\n' +
    '                            </a>\n' +
    '                        </li> \n' +
    '                    </ul>\n' +
    '                    <div class="pmd-card">\n' +
    '                        <div class="pmd-card-body">\n' +
    '                            <!-- Tab panes -->\n' +
    '                            <div class="tab-content">\n' +
    '                                <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editRoleCtrl.language" id="{{lang.value}}-form">\n' +
    '                                    <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                                        <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                        <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="editRoleCtrl.Role.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                        <div ng-messages="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '                                            \n' +
    '                                            <div ng-show="editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                            <div ng-show="(editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                 \n' +
    '                                </div>\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name">{{\'Permission\' | translate}}</label>\n' +
    '                                    <select required style="width:100% !important" class="form-control select-add-tags pmd-select2-tags"   multiple\n' +
    '                                            ng-model="editRoleCtrl.selectedPermissions" ng-options="permission as permission.titleDictionary[selectedLanguage] for permission in editRoleCtrl.permissionList">\n' +
    '                         \n' +
    '                                    </select>   \n' +
    '                                </div>\n' +
    '                            </div> \n' +
    '                        </div>\n' +
    '\n' +
    '                   \n' +
    '                    </div>\n' +
    '                </div> \n' +
    ' \n' +
    '		</form>\n' +
    '	</div>\n' +
    '	<div class="pmd-modal-action text-right">\n' +
    '		<button style="background-color: #e4e5e6;color: black!important;" ng-disabled="editTypeForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="editRoleCtrl.UpdateType()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '		<button class="btn pmd-ripple-effect btn-default" type="button" ng-click="editRoleCtrl.Close()">{{\'DiscardBtn\' | translate}}</button>\n' +
    '	</div>\n' +
    '</div>\n' +
    '\n' +
    '	\n' +
    '\n' +
    '<script type="text/javascript">\n' +
    '    $(document).ready(function() {\n' +
    '        $(".select-add-tags").select2({\n' +
    '            tags: true,\n' +
    '            theme: "bootstrap",\n' +
    '            insertTag: function (data, tag) {\n' +
    '                data.push(tag);\n' +
    '            }\n' +
    '        });\n' +
    '    });\n' +
    '</script>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Role/templates/new.html',
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'NewRoleLbl\' | translate}}</h2>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="newTypeForm">\n' +
    '            <div>\n' +
    '                <!-- Nav tabs -->\n' +
    '                <ul class="nav nav-tabs" role="tablist">\n' +
    '                    <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newRoleCtrl.language">\n' +
    '                        <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                            {{lang.value | translate}}\n' +
    '                        </a>\n' +
    '                    </li>\n' +
    '                </ul>\n' +
    '                <div class="pmd-card">\n' +
    '                    <div class="pmd-card-body">\n' +
    '                        <!-- Tab panes -->\n' +
    '                        <div class="tab-content">\n' +
    '                            <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newRoleCtrl.language" id="{{lang.value}}-form">\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                    <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="newRoleCtrl.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="255">\n' +
    '                                    <div ng-messages="newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '\n' +
    '                                        <div ng-show="newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newTypeForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '\n' +
    '\n' +
    '                            </div>\n' +
    '                            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                <label for="first-name">{{\'Permission\' | translate}}</label>\n' +
    '                                <select required style="width:100% !important" class="form-control select-with-search pmd-select2-tags" multiple\n' +
    '                                        ng-model="newRoleCtrl.selectedPermissions" ng-options="permission as permission.titleDictionary[selectedLanguage] for permission in permissionList"></select>\n' +
    '\n' +
    '\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="newTypeForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="newRoleCtrl.AddNewType()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '        <button class="btn pmd-ripple-effect btn-default" type="button" ng-click="$state.go(\'Role\');">{{\'DiscardBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
    '        $(".select-with-search").select2({\n' +
    '			theme: "bootstrap"\n' +
    '		});\n' +
    '    });\n' +
    '</script>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/callCenter/templates/callCenter.html',
    '<div class="modal-content">\n' +
    '        <div class="modal-header bordered">\n' +
    '            <h2 class="pmd-card-title-text">{{\'CallCenter\' | translate}}</h2>\n' +
    '        </div>\n' +
    '        <div class="modal-body">\n' +
    '            <div class="row">\n' +
    '                <div id="wizard-container">\n' +
    '                    <div id="wizard-step-container">\n' +
    '                        <ul ng-init="counter = 0" class="nav nav-pills nav-justified">\n' +
    '                            <li ng-repeat="step in callCenterCtrl.steps" ng-class="{\'active\':step.step == callCenterCtrl.currentStep}">\n' +
    '                                <a ng-if="selectedLanguage == \'en\'" style="background-color: #e4e5e6;color: black!important; margin-right: 2% !important;" ng-click="callCenterCtrl.gotoStep(step.step)" href="">{{step.nameEn}} </a>\n' +
    '                                <a ng-if="selectedLanguage == \'ar\'" style="background-color: #e4e5e6;color: black!important;" ng-click="callCenterCtrl.gotoStep(step.step)" href="">{{step.nameAr}} </a>\n' +
    '                            </li>\n' +
    '                        </ul>\n' +
    '                    </div>\n' +
    '    \n' +
    '                    <div id="wizard-content-container">\n' +
    '                        <ng-include src="callCenterCtrl.getStepTemplate()"></ng-include>\n' +
    '                    </div>\n' +
    '    \n' +
    '                    <!-- <div id="wizard-navigation-container">\n' +
    '                        <div class="pull-right">\n' +
    '                            <span class="btn-group">\n' +
    '                                <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="1 >= callCenterCtrl.currentStep" class="btn btn-default" name="previous" type="button" ng-click="callCenterCtrl.gotoStep(callCenterCtrl.currentStep - 1);">\n' +
    '                                    <i class="fa fa-arrow-left"></i>{{\'PreviousStep\' | translate}}</button>\n' +
    '                                <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="callCenterCtrl.currentStep >= callCenterCtrl.steps.length" class="btn btn-primary" name="next" type="button"\n' +
    '                                    ng-click="callCenterCtrl.gotoStep(callCenterCtrl.currentStep + 1)">{{\'NextStep\' | translate}}\n' +
    '                                    <i class="fa fa-arrow-right"></i>\n' +
    '                                </button>\n' +
    '                            </span> -->\n' +
    '                            <!-- {{addProgramCtrl.Setting.minNoDaysPerProgram}} / {{addProgramCtrl.ProgramDaysCount}} -->\n' +
    '                            <!-- <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="(addProgramCtrl.currentStep != addProgramCtrl.steps.length) || (addProgramCtrl.Setting.minNoDaysPerProgram > addProgramCtrl.ProgramDaysCount)" class="btn btn-success" name="next" type="button"\n' +
    '                                ng-click="addProgramCtrl.AddNewProgram()">\n' +
    '                                <i class="fa fa-floppy-o"></i>{{\'Save\' | translate}}</button> -->\n' +
    '                        <!-- </div>\n' +
    '                    </div> -->\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/callCenter/templates/callCenterStepOne.html',
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
    '        $(".select-add-tags").select2({\n' +
    '            tags: true,\n' +
    '            theme: "bootstrap",\n' +
    '            insertTag: function (data, tag) {\n' +
    '                // Insert the tag at the end of the results\n' +
    '                data.push(tag);\n' +
    '                // console.log(data);\n' +
    '            }\n' +
    '        });\n' +
    '\n' +
    '        $(".select-tags").select2({\n' +
    '            tags: false,\n' +
    '            theme: "bootstrap",\n' +
    '        });\n' +
    '\n' +
    '        $(".select-with-search").select2({\n' +
    '            theme: "bootstrap"\n' +
    '        });\n' +
    '    });\n' +
    '</script>\n' +
    '\n' +
    '<form class="form-horizontal" name="newCallCenterForm">\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '        <label for="first-name">{{\'FirstNameLbl\' | translate}}</label>\n' +
    '        <input required type="text" class="mat-input form-control" name="firstName" ng-pattern="/^(\\D)+$/" ng-model="callCenterCtrl.FirstName"\n' +
    '            ng-minlength="2" ng-maxlength="255">\n' +
    '        <div ng-messages="newCallCenterForm.firstName.$error" class="error">\n' +
    '            <div ng-show="newCallCenterForm.firstName.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '            <div ng-if="newCallCenterForm.firstName.$error.required && !newCallCenterForm.firstName.$pristine">{{\'FirstNameLengthError\' | translate}}</div>\n' +
    '            <div ng-if="(newCallCenterForm.firstName.$error.minlength || newCallCenterForm.firstName.$error.maxlength) ">{{\'NameLengthError255\' | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '        <label for="first-name">{{\'LastNameLbl\' | translate}}</label>\n' +
    '        <input required type="text" class="mat-input form-control" name="lastName" ng-pattern="/^(\\D)+$/" ng-model="callCenterCtrl.LastName"\n' +
    '            ng-minlength="2" ng-maxlength="255">\n' +
    '        <div ng-messages="newCallCenterForm.lastName.$error">\n' +
    '            <div ng-show="newCallCenterForm.lastName.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '            <div ng-if="newCallCenterForm.lastName.$error.required && !newCallCenterForm.lastName.$pristine">{{\'lastName\' | translate}}\n' +
    '            </div>\n' +
    '            <div ng-if="(newCallCenterForm.lastName.$error.minlength || newCallCenterForm.lastName.$error.maxlength)">{{\'NameLengthError255\' | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '        <label>{{\'EmailLbl\' | translate}}</label>\n' +
    '        <input required type="text" class="mat-input form-control" name="userEmail" ng-model="callCenterCtrl.Email" ng-pattern="/^\\w+([-+.\']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$/">\n' +
    '        <span class="error" ng-show="newCallCenterForm.userEmail.$error.pattern">{{\'WrongMail\' | translate}} </span>\n' +
    '        <div ng-messages="newCallCenterForm.email.$error">\n' +
    '            <div ng-if="newCallCenterForm.userEmail.$error.required && !newCallCenterForm.userEmail.$pristine">{{\'EmailLengthError\' | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '        <label for="first-name">{{\'phoneLbl\' | translate}}</label>\n' +
    '        <input required type="text" class="mat-input form-control" name="phone" numbers-only ng-model="callCenterCtrl.Phone" ng-minlength="10"\n' +
    '            ng-maxlength="50">\n' +
    '        <!-- <span class="error" ng-show="newCallCenterForm.phone.$error.pattern">{{\'NotPhoneNumber\' | translate}}   </span> -->\n' +
    '        <div ng-messages="newCallCenterForm.phone.$error">\n' +
    '            <div ng-if="newCallCenterForm.phone.$error.required && !newCallCenterForm.phone.$pristine">{{\'PhoneReqError\' | translate}}\n' +
    '            </div>\n' +
    '            <div ng-if="(newCallCenterForm.phone.$error.minlength || newCallCenterForm.phone.$error.maxlength)">{{\'PhoneLengthError\' | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'FLoor\' | translate}}</label>\n' +
    '        <input required type="number" class="mat-input form-control" name="floor" ng-model="callCenterCtrl.FLoor"\n' +
    '            ng-minlength="1" ng-maxlength="4">\n' +
    '        <div ng-messages="newProgramForm.floor.$error" class="error">\n' +
    '            <div ng-if="newProgramForm.floor.$error.required && !newProgramForm.floor.$pristine">{{\'ProgramDaysCountReqError\' | translate}}</div>\n' +
    '            <div ng-if="(newProgramForm.floor.$error.minlength || newProgramForm.floor.$error.maxlength)">{{\'ProgramDaysCountLengthError\' | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'ApartmentNumber\' | translate}}</label>\n' +
    '        <input required type="number" class="mat-input form-control" name="appartmentNo" ng-model="callCenterCtrl.AppartmentNo"\n' +
    '            ng-minlength="1" ng-maxlength="4">\n' +
    '        <div ng-messages="newProgramForm.appartmentNo.$error" class="error">\n' +
    '            <div ng-if="newProgramForm.appartmentNo.$error.required && !newProgramForm.appartmentNo.$pristine">{{\'ProgramDaysCountReqError\' | translate}}</div>\n' +
    '            <div ng-if="(newProgramForm.appartmentNo.$error.minlength || newProgramForm.appartmentNo.$error.maxlength)">{{\'ProgramDaysCountLengthError\' | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '        <label for="first-name">{{\'AddressDescription\' | translate}}</label>\n' +
    '        <input required type="text" class="mat-input form-control" name="addressDescription" ng-model="callCenterCtrl.AddressDescription" ng-minlength="3"\n' +
    '            ng-maxlength="255">\n' +
    '        <div ng-messages="newCallCenterForm.addressDescription.$error">\n' +
    '            <!-- <div ng-show="newCallCenterForm.addressDescription.$error.pattern">{{\'TextOnly\' | translate}}</div> -->\n' +
    '            <div ng-if="newCallCenterForm.addressDescription.$error.required && !newCallCenterForm.addressDescription.$pristine">{{\'lastName\' | translate}}\n' +
    '            </div>\n' +
    '            <div ng-if="(newCallCenterForm.addressDescription.$error.minlength || newCallCenterForm.addressDescription.$error.maxlength)">{{\'NameLengthError255\' | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Country\' | translate}}</label>\n' +
    '        <select required style="width:100% !important" class="select-tags form-control pmd-select2-tags" ng-change="callCenterCtrl.countryChange()"\n' +
    '            ng-model="callCenterCtrl.selectedCountryId" ng-options="group.countryId as group.titleDictionary[selectedLanguage] for group in callCenterCtrl.counties">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div ng-show=" callCenterCtrl.selectedCountryId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Region\' | translate}}</label>\n' +
    '        <select required style="width:100% !important" class="select-tags form-control pmd-select2-tags" ng-change="callCenterCtrl.regionChange()"\n' +
    '            ng-model="callCenterCtrl.selectedRegionId" ng-options="group.regionId as group.titleDictionary[selectedLanguage] for group in callCenterCtrl.regions">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div ng-show=" callCenterCtrl.selectedRegionId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'City\' | translate}}</label>\n' +
    '        <select ng-required="callCenterCtrl.selectedRegionId > 0" style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '            ng-change="callCenterCtrl.cityChange()" ng-model="callCenterCtrl.selectedCityId" ng-options="group.cityId as group.titleDictionary[selectedLanguage] for group in callCenterCtrl.cities">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div ng-show=" callCenterCtrl.selectedCityId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Area\' | translate}}</label>\n' +
    '        <select ng-required=" callCenterCtrl.selectedCityId > 0" style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '            ng-change="callCenterCtrl.areaChange()" ng-model="callCenterCtrl.selectedAreaId" ng-options="group.areaId as group.titleDictionary[selectedLanguage] for group in callCenterCtrl.area">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div ng-show=" callCenterCtrl.selectedAreaId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Branch\' | translate}}</label>\n' +
    '        <select ng-required=" callCenterCtrl.selectedAreaId > 0 " class="form-control select-with-search pmd-select2-tags" ng-change="callCenterCtrl.branchChange()"\n' +
    '            ng-model="callCenterCtrl.selectedBranchId" ng-options="a.branchId as a.titleDictionary[selectedLanguage] for a in callCenterCtrl.branchList"></select>\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '    <!-- <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label> {{ \'Role\' | translate}} </label>\n' +
    '        <select required style="width:100% !important" class="form-control select-with-search pmd-select2-tags" multiple ng-model="callCenterCtrl.selectedUserRoles"\n' +
    '            ng-options="role as role.titleDictionary[selectedLanguage] for role in callCenterCtrl.roleList"></select>\n' +
    '\n' +
    '    </div> -->\n' +
    '</form>\n' +
    '\n' +
    '<div class="pmd-modal-action text-right">\n' +
    '    <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="newCallCenterForm.$invalid  || (callCenterCtrl.selectedAreaId <= 0 || callCenterCtrl.selectedBranchId <= 0)"\n' +
    '        class="btn pmd-ripple-effect btn-primary" type="button" ng-click="callCenterCtrl.AddNewclient()">{{\'saveUser\' | translate}}</button>\n' +
    '    <!-- <button class="btn pmd-ripple-effect btn-default" type="button" ng-click="callCenterCtrl.close()">{{\'DiscardBtn\' | translate}}</button> -->\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/callCenter/templates/callCenterStepTwo.html',
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
    '        $(".select-add-tags").select2({\n' +
    '            tags: true,\n' +
    '            theme: "bootstrap",\n' +
    '            insertTag: function (data, tag) {\n' +
    '                // Insert the tag at the end of the results\n' +
    '                data.push(tag);\n' +
    '                // console.log(data);\n' +
    '            }\n' +
    '        });\n' +
    '\n' +
    '        $(".select-tags").select2({\n' +
    '            tags: false,\n' +
    '            theme: "bootstrap",\n' +
    '        });\n' +
    '\n' +
    '        $(".select-with-search").select2({\n' +
    '            theme: "bootstrap"\n' +
    '        });\n' +
    '    });\n' +
    '</script>\n' +
    '\n' +
    '<form class="form-horizontal" name="newCallCenterForm">\n' +
    '    <br>\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '        <label for="first-name">{{\'phoneLbl\' | translate}}</label>\n' +
    '        <input required type="text" class="mat-input form-control" name="phone" numbers-only ng-model="callCenterCtrl.Phone" ng-minlength="10"\n' +
    '            ng-maxlength="50">\n' +
    '        <!-- <span class="error" ng-show="newCallCenterForm.phone.$error.pattern">{{\'NotPhoneNumber\' | translate}}   </span> -->\n' +
    '        <div ng-messages="newCallCenterForm.phone.$error">\n' +
    '            <div ng-if="newCallCenterForm.phone.$error.required && !newCallCenterForm.phone.$pristine">{{\'PhoneReqError\' | translate}}\n' +
    '            </div>\n' +
    '            <div ng-if="(newCallCenterForm.phone.$error.minlength || newCallCenterForm.phone.$error.maxlength)">{{\'PhoneLengthError\' | translate}}</div>\n' +
    '        </div>\n' +
    '        <!-- <div ng-if="callCenterCtrl.validate == false">\n' +
    '            {{\'NotFound\' | translate}}\n' +
    '        </div> -->\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="pmd-modal-action text-left">\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="newCallCenterForm.$invalid" class="btn pmd-ripple-effect btn-primary"\n' +
    '            type="button" ng-click="callCenterCtrl.ValidateUser()">{{\'ValidateUser\' | translate}}</button>\n' +
    '        <!-- <button class="btn pmd-ripple-effect btn-default" type="button" ng-click="callCenterCtrl.close()">{{\'DiscardBtn\' | translate}}</button> -->\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view">\n' +
    '\n' +
    '        <div class="table-responsive">\n' +
    '            <table class="table pmd-table table-hover">\n' +
    '                <thead>\n' +
    '                    <tr>\n' +
    '                        <th>{{\'userName\' | translate}}</th>\n' +
    '                        <th>{{\'EmailLbl\' | translate}}</th>\n' +
    '                        <th>{{\'Phone1Lbl\' | translate}}</th>\n' +
    '                        <th></th>\n' +
    '                    </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '\n' +
    '                    <td data-title="Name" width="20%">{{callCenterCtrl.userOrder.firstName}} {{callCenterCtrl.userOrder.lastName}}</td>\n' +
    '                    <td data-title="Name" width="20%">{{callCenterCtrl.userOrder.email}} </td>\n' +
    '                    <td data-title="phone">{{callCenterCtrl.userOrder.phone}}</td>\n' +
    '                </tbody>\n' +
    '            </table>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '    <div>\n' +
    '        <!-- {{callCenterCtrl.orderType.type}} -->\n' +
    '        <label>\n' +
    '            <input type="radio" ng-model="callCenterCtrl.orderType.type" value="item"> {{\'Item\' | translate}}\n' +
    '        </label>\n' +
    '        <br/>\n' +
    '        <label>\n' +
    '            <input type="radio" ng-model="callCenterCtrl.orderType.type" value="meal"> {{\'Meal\' | translate}}\n' +
    '        </label>\n' +
    '        <br/>\n' +
    '        <label>\n' +
    '            <input type="radio" ng-model="callCenterCtrl.orderType.type" value="program"> {{\'Program\' | translate}}\n' +
    '        </label>\n' +
    '        <br/>\n' +
    '        <label>\n' +
    '            <input type="radio" ng-model="callCenterCtrl.orderType.type" value="customizeProgram"> {{\'CustomizeProgram\' | translate}}\n' +
    '        </label>\n' +
    '        <br/>\n' +
    '    </div>\n' +
    '</form>\n' +
    '\n' +
    '<div class="pmd-modal-action text-right">\n' +
    '    <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="(newCallCenterForm.$invalid) || (callCenterCtrl.flag != true)"\n' +
    '        class="btn pmd-ripple-effect btn-primary" type="button" ng-click="callCenterCtrl.MakeOrder()">{{\'MakeOrder\' | translate}}</button>\n' +
    '    <!-- <button class="btn pmd-ripple-effect btn-default" type="button" ng-click="callCenterCtrl.close()">{{\'DiscardBtn\' | translate}}</button> -->\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/callCenter/templates/customizeStepOne.html',
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
    '        $(".select-add-tags").select2({\n' +
    '            tags: true,\n' +
    '            theme: "bootstrap",\n' +
    '            insertTag: function (data, tag) {\n' +
    '                // Insert the tag at the end of the results\n' +
    '                data.push(tag);\n' +
    '                // console.log(data);\n' +
    '            }\n' +
    '        });\n' +
    '\n' +
    '        $(".select-tags").select2({\n' +
    '            tags: false,\n' +
    '            theme: "bootstrap",\n' +
    '        });\n' +
    '\n' +
    '        $(".select-with-search").select2({\n' +
    '            theme: "bootstrap"\n' +
    '        });\n' +
    '    });\n' +
    '\n' +
    '    $(function () {\n' +
    '        $(\'#startdate\').datetimepicker(\n' +
    '            {\n' +
    '                minDate: new Date()\n' +
    '            }\n' +
    '        ).on(\'dp.change\', function (e) {\n' +
    '            debugger;\n' +
    '            angular.element(document.getElementById(\'startdate\')).scope().dateChange();\n' +
    '        });\n' +
    '    });\n' +
    '</script>\n' +
    '\n' +
    '<form class="form-horizontal" name="newProgramForm">\n' +
    '    <div>\n' +
    '        <!-- {{orderCustomizeProgramCtrl.language}} -->\n' +
    '        <!-- <ul class="nav nav-tabs" role="tablist">\n' +
    '            <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in orderCustomizeProgramCtrl.language">\n' +
    '                <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                    {{lang.value | translate}}\n' +
    '                </a>\n' +
    '            </li>\n' +
    '        </ul> -->\n' +
    '        <div class="pmd-card">\n' +
    '            <div class="pmd-card-body">\n' +
    '                <!-- <div class="tab-content">\n' +
    '                    <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in orderCustomizeProgramCtrl.language"\n' +
    '                        id="{{lang.value}}-form">\n' +
    '                        <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                            <label for="first-name"> {{ lang.value+\'ProgramName\' | translate}} </label>\n' +
    '                            <input required Category="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="orderCustomizeProgramCtrl.titleDictionary[lang.key]"\n' +
    '                                ng-minlength="2" ng-maxlength="255">\n' +
    '                            <div ng-messages="newProgramForm.titleDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '                                <div ng-show="newProgramForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !newProgramForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                <div ng-show="(newProgramForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || newProgramForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newProgramForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '\n' +
    '                        <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                            <label for="first-name"> {{ lang.value+\'ProgramDescription\' | translate}} </label>\n' +
    '                            <input required Category="text" class="mat-input form-control" name="descriptionDictionary{{lang.value+\'Name\'}}" ng-model="orderCustomizeProgramCtrl.descriptionDictionary[lang.key]"\n' +
    '                                ng-minlength="2" ng-maxlength="255">\n' +
    '                            <div ng-messages="newProgramForm.descriptionDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '                                <div ng-show="newProgramForm.descriptionDictionary{{lang.value+\'Name\'}}.$error.required && !newProgramForm.descriptionDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                <div ng-show="(newProgramForm.descriptionDictionary{{lang.value+\'Name\'}}.$error.minlength || newProgramForm.descriptionDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newProgramForm.descriptionDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                </div> -->\n' +
    '\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                    <label for="first-name">{{\'SelectExcludeDays\' | translate}}</label>\n' +
    '                    <select style="width:100% !important" class="form-control select-add-tags pmd-select2-tags" multiple ng-model="orderCustomizeProgramCtrl.SelectedDays"\n' +
    '                        ng-options="day as day.dayNameDictionary[selectedLanguage] for day in orderCustomizeProgramCtrl.dayList">\n' +
    '                    </select>\n' +
    '                </div>\n' +
    '\n' +
    '                <!-- <div class="row">\n' +
    '                    <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="regular1" class="control-label">{{\'orderPickDateTime\' | translate}}</label>\n' +
    '                        <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                            <input ng-model="orderCustomizeProgramCtrl.itemDatetime" type="text" ng-change="orderCustomizeProgramCtrl.dateChange" id="startdate"\n' +
    '                                class="form-control" />\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div> -->\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    \n' +
    '    <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="newProgramForm.$invalid" class="btn pmd-ripple-effect btn-primary"\n' +
    '        type="button" ng-click="orderCustomizeProgramCtrl.gotoStep(2)">\n' +
    '        {{\'next\' | translate}}</button>\n' +
    '</form>\n' +
    '<!-- -------------------- -->\n' +
    '\n' +
    '\n' +
    '<!-- <div>\n' +
    '\n' +
    '    <!-- <div style="margin-bottom:10px">\n' +
    '        <h2 class="pmd-card-title-text">{{\'AddNew\' | translate}}</h2>\n' +
    '    </div> --\n' +
    '    <div>\n' +
    '        <form class="form-horizontal" name="newProgramForm">\n' +
    '            <div>\n' +
    '                <ul class="nav nav-tabs" role="tablist">\n' +
    '                    <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in orderCustomizeProgramCtrl.language">\n' +
    '                        <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                            {{lang.value | translate}}\n' +
    '                        </a>\n' +
    '                    </li>\n' +
    '                </ul>\n' +
    '                <div class="pmd-card">\n' +
    '                    <div class="pmd-card-body">\n' +
    '                        <div class="tab-content">\n' +
    '                            <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in orderCustomizeProgramCtrl.language"\n' +
    '                                id="{{lang.value}}-form">\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name"> {{ lang.value+\'ProgramName\' | translate}} </label>\n' +
    '                                    <input required Category="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="orderCustomizeProgramCtrl.titleDictionary[lang.key]"\n' +
    '                                        ng-minlength="2" ng-maxlength="255">\n' +
    '                                    <div ng-messages="newProgramForm.titleDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '                                        <div ng-show="newProgramForm.titleDictionary{{lang.value+\'Name\'}}.$error.required && !newProgramForm.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(newProgramForm.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || newProgramForm.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newProgramForm.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name"> {{ lang.value+\'ProgramDescription\' | translate}} </label>\n' +
    '                                    <input required Category="text" class="mat-input form-control" name="descriptionDictionary{{lang.value+\'Name\'}}" ng-model="orderCustomizeProgramCtrl.descriptionDictionary[lang.key]"\n' +
    '                                        ng-minlength="2" ng-maxlength="255">\n' +
    '                                    <div ng-messages="newProgramForm.descriptionDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '                                        <div ng-show="newProgramForm.descriptionDictionary{{lang.value+\'Name\'}}.$error.required && !newProgramForm.descriptionDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="(newProgramForm.descriptionDictionary{{lang.value+\'Name\'}}.$error.minlength || newProgramForm.descriptionDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newProgramForm.descriptionDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <hr>\n' +
    '\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'ProgramDaysCount\' | translate}}</label>\n' +
    '                <input required type="number" class="mat-input form-control" name="programDaysCount" ng-model="orderCustomizeProgramCtrl.ProgramDaysCount"\n' +
    '                    ng-minlength="1" ng-maxlength="2">\n' +
    '                <div ng-messages="newProgramForm.programDaysCount.$error" class="error">\n' +
    '                    <div ng-if="newProgramForm.programDaysCount.$error.required && !newProgramForm.programDaysCount.$pristine">{{\'ProgramDaysCountReqError\' | translate}}</div>\n' +
    '                    <div ng-if="(newProgramForm.programDaysCount.$error.minlength || newProgramForm.programDaysCount.$error.maxlength)">{{\'ProgramDaysCountLengthError\' | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'MealPerDay\' | translate}}</label>\n' +
    '                <input required type="number" class="mat-input form-control" name="mealPerDay" ng-model="orderCustomizeProgramCtrl.MealPerDay"\n' +
    '                    ng-minlength="1" ng-maxlength="2">\n' +
    '                <div ng-messages="newProgramForm.mealPerDay.$error" class="error">\n' +
    '                    <div ng-if="newProgramForm.mealPerDay.$error.required && !newProgramForm.mealPerDay.$pristine">{{\'MealPerDayReqError\' | translate}}</div>\n' +
    '                    <div ng-if="(newProgramForm.mealPerDay.$error.minlength || newProgramForm.mealPerDay.$error.maxlength)">{{\'MealPerDayLengthError\' | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'SelectExcludeDays\' | translate}}</label>\n' +
    '                <select style="width:100% !important" class="form-control select-add-tags pmd-select2-tags" multiple ng-model="orderCustomizeProgramCtrl.SelectedDays"\n' +
    '                    ng-options="day as day.dayNameDictionary[selectedLanguage] for day in orderCustomizeProgramCtrl.dayList">\n' +
    '\n' +
    '                </select>\n' +
    '            </div>\n' +
    '            <!-- {{orderCustomizeProgramCtrl.SelectedDays}} --\n' +
    '\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'ProgramDiscount\' | translate}}</label>\n' +
    '                <input required type="number" ng-change="discountChange();" class="mat-input form-control" name="programDiscount" ng-model="orderCustomizeProgramCtrl.ProgramDiscount"\n' +
    '                    ng-minlength="1" ng-maxlength="5">\n' +
    '                <div ng-messages="newProgramForm.programDiscount.$error" class="error">\n' +
    '                    <div ng-if="newProgramForm.programDiscount.$error.required && !newProgramForm.programDiscount.$pristine">{{\'ProgramDiscountReqError\' | translate}}</div>\n' +
    '                    <div ng-if="(newProgramForm.programDiscount.$error.minlength || newProgramForm.programDiscount.$error.maxlength)">{{\'ProgramDiscountLengthError\' | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Breakfast\' | translate}}\n' +
    '                    <input type="checkbox" ng-model="orderCustomizeProgramCtrl.IsBreakFast">\n' +
    '                </label>\n' +
    '                <br/>\n' +
    '                <label for="first-name">{{\'Snack\' | translate}}\n' +
    '                    <input type="checkbox" ng-model="orderCustomizeProgramCtrl.IsSnack">\n' +
    '                </label>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'OrderType\' | translate}}</label>\n' +
    '                <br>\n' +
    '                <label>\n' +
    '                    <input type="radio" ng-model="orderCustomizeProgramCtrl.orderType.type" value="delivery"> {{\'Deivery\' | translate}}\n' +
    '                </label>\n' +
    '                <label style="margin-left:3em">\n' +
    '                    <input type="radio" ng-model="orderCustomizeProgramCtrl.orderType.type" value="pickup"> {{\'Pickup\' | translate}}\n' +
    '                </label>\n' +
    '                <br/>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Country\' | translate}}</label>\n' +
    '                <select required style="width:100% !important" class="select-tags form-control pmd-select2-tags" ng-change="orderCustomizeProgramCtrl.countryChange()"\n' +
    '                    ng-model="orderCustomizeProgramCtrl.selectedCountryId" ng-options="group.countryId as group.titleDictionary[selectedLanguage] for group in orderCustomizeProgramCtrl.counties">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '            <div ng-show=" orderCustomizeProgramCtrl.selectedCountryId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Region\' | translate}}</label>\n' +
    '                <select required style="width:100% !important" class="select-tags form-control pmd-select2-tags" ng-change="orderCustomizeProgramCtrl.regionChange()"\n' +
    '                    ng-model="orderCustomizeProgramCtrl.selectedRegionId" ng-options="group.regionId as group.titleDictionary[selectedLanguage] for group in orderCustomizeProgramCtrl.regions">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '            <div ng-show=" orderCustomizeProgramCtrl.selectedRegionId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'City\' | translate}}</label>\n' +
    '                <select ng-required="orderCustomizeProgramCtrl.selectedRegionId > 0" style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                    ng-change="orderCustomizeProgramCtrl.cityChange()" ng-model="orderCustomizeProgramCtrl.selectedCityId" ng-options="group.cityId as group.titleDictionary[selectedLanguage] for group in orderCustomizeProgramCtrl.cities">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '            <div ng-show=" orderCustomizeProgramCtrl.selectedCityId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Area\' | translate}}</label>\n' +
    '                <select ng-required=" orderCustomizeProgramCtrl.selectedCityId > 0" style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                    ng-change="orderCustomizeProgramCtrl.areaChange()" ng-model="orderCustomizeProgramCtrl.selectedAreaId" ng-options="group.areaId as group.titleDictionary[selectedLanguage] for group in orderCustomizeProgramCtrl.area">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '            <div ng-show=" orderCustomizeProgramCtrl.selectedAreaId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Branch\' | translate}}</label>\n' +
    '                <select ng-required=" orderCustomizeProgramCtrl.selectedAreaId > 0 " class="form-control select-with-search pmd-select2-tags"\n' +
    '                    ng-change="orderCustomizeProgramCtrl.branchChange()" ng-model="orderCustomizeProgramCtrl.selectedBranchId"\n' +
    '                    ng-options="a.branchId as a.titleDictionary[selectedLanguage] for a in orderCustomizeProgramCtrl.branchList"></select>\n' +
    '            </div>\n' +
    '\n' +
    '        </form>\n' +
    '    </div>\n' +
    '</div> -->');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/callCenter/templates/customizeStepThree.html',
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
    '        $(".select-add-tags").select2({\n' +
    '            tags: true,\n' +
    '            theme: "bootstrap",\n' +
    '            insertTag: function (data, tag) {\n' +
    '                // Insert the tag at the end of the results\n' +
    '                data.push(tag);\n' +
    '                // console.log(data);\n' +
    '            }\n' +
    '        });\n' +
    '\n' +
    '        $(".select-tags").select2({\n' +
    '            tags: false,\n' +
    '            theme: "bootstrap",\n' +
    '        });\n' +
    '\n' +
    '        $(".select-with-search").select2({\n' +
    '            theme: "bootstrap"\n' +
    '        });\n' +
    '    });\n' +
    '\n' +
    '    $(function () {\n' +
    '        $(\'#startdate\').datetimepicker(\n' +
    '            {\n' +
    '                minDate: new Date()\n' +
    '            }\n' +
    '        ).on(\'dp.change\', function (e) {\n' +
    '            debugger;\n' +
    '            angular.element(document.getElementById(\'startdate\')).scope().dateChange();\n' +
    '        });\n' +
    '    });\n' +
    '</script>\n' +
    '<form class="form-horizontal" name="newProgram3Form">\n' +
    '\n' +
    '    <br>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="regular1" class="control-label">{{\'orderPickDateTime\' | translate}}</label>\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                <input ng-model="orderCustomizeProgramCtrl.itemDatetime" type="text" ng-change="orderCustomizeProgramCtrl.dateChange" id="startdate"\n' +
    '                    class="form-control" />\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'ProgramPrice\' | translate}}</label>\n' +
    '        <input disabled type="number" class="mat-input form-control" name="programPrice" ng-model="orderCustomizeProgramCtrl.ProgramPrice">\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'ProgramCost\' | translate}}</label>\n' +
    '        <input disabled type="number" class="mat-input form-control" name="programCost" ng-model="orderCustomizeProgramCtrl.ProgramCost">\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'ProgramVAT\' | translate}}</label>\n' +
    '        <input disabled type="number" class="mat-input form-control" name="programVAT" ng-model="orderCustomizeProgramCtrl.ProgramVAT">\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'ProgramDiscount\' | translate}}</label>\n' +
    '        <input required type="number" class="mat-input form-control" name="programDiscount" ng-model="orderCustomizeProgramCtrl.ProgramDiscount">\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'ProgramTotalPrice\' | translate}}</label>\n' +
    '        <input disabled type="number" class="mat-input form-control" name="programTotalPrice" ng-model="orderCustomizeProgramCtrl.ProgramTotalPrice">\n' +
    '    </div>\n' +
    '\n' +
    '    <hr>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'OrderType\' | translate}}</label>\n' +
    '        <label>\n' +
    '            <input type="radio" ng-model="orderCustomizeProgramCtrl.orderType.type" value="delivery"> {{\'Deivery\' | translate}}\n' +
    '        </label>\n' +
    '        <label style="margin-left:3em">\n' +
    '            <input type="radio" ng-model="orderCustomizeProgramCtrl.orderType.type" value="pickup"> {{\'Pickup\' | translate}}\n' +
    '        </label>\n' +
    '        <br/>\n' +
    '    </div>\n' +
    '\n' +
    '    <!-- {{orderCustomizeProgramCtrl.userAddresses.length}} -->\n' +
    '    <div ng-if="orderCustomizeProgramCtrl.orderType.type == \'delivery\'">\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'SelectAddress\' | translate}}</label>\n' +
    '\n' +
    '            <div ng-repeat="address in orderCustomizeProgramCtrl.userAddresses">\n' +
    '                <!-- {{orderCustomizeProgramCtrl.addresses.address}} -->\n' +
    '                <label>\n' +
    '                    <input ng-change="orderCustomizeProgramCtrl.addressInfo(address)" type="radio" ng-model="orderCustomizeProgramCtrl.addresses.address"\n' +
    '                        value="{{address.addressId}}"> {{address.appartmentNo}}, {{address.description}}, {{\'Floor\' | translate}} {{address.floor}}\n' +
    '                    <!-- {{addressInfo}} -->\n' +
    '                </label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '    <div ng-show="orderCustomizeProgramCtrl.orderType.type == \'pickup\'">\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'Country\' | translate}}</label>\n' +
    '            <select required style="width:100% !important" class="select-tags form-control pmd-select2-tags" ng-change="orderCustomizeProgramCtrl.countryChange()"\n' +
    '                ng-model="orderCustomizeProgramCtrl.selectedCountryId" ng-options="group.countryId as group.titleDictionary[selectedLanguage] for group in orderCustomizeProgramCtrl.counties">\n' +
    '            </select>\n' +
    '        </div>\n' +
    '        <div ng-show=" orderCustomizeProgramCtrl.selectedCountryId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'Region\' | translate}}</label>\n' +
    '            <select required style="width:100% !important" class="select-tags form-control pmd-select2-tags" ng-change="orderCustomizeProgramCtrl.regionChange()"\n' +
    '                ng-model="orderCustomizeProgramCtrl.selectedRegionId" ng-options="group.regionId as group.titleDictionary[selectedLanguage] for group in orderCustomizeProgramCtrl.regions">\n' +
    '            </select>\n' +
    '        </div>\n' +
    '        <div ng-show=" orderCustomizeProgramCtrl.selectedRegionId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'City\' | translate}}</label>\n' +
    '            <select ng-required="orderCustomizeProgramCtrl.selectedRegionId > 0" style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                ng-change="orderCustomizeProgramCtrl.cityChange()" ng-model="orderCustomizeProgramCtrl.selectedCityId" ng-options="group.cityId as group.titleDictionary[selectedLanguage] for group in orderCustomizeProgramCtrl.cities">\n' +
    '            </select>\n' +
    '        </div>\n' +
    '        <div ng-show=" orderCustomizeProgramCtrl.selectedCityId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'Area\' | translate}}</label>\n' +
    '            <select ng-required=" orderCustomizeProgramCtrl.selectedCityId > 0" style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                ng-change="orderCustomizeProgramCtrl.areaChange()" ng-model="orderCustomizeProgramCtrl.selectedAreaId" ng-options="group.areaId as group.titleDictionary[selectedLanguage] for group in orderCustomizeProgramCtrl.area">\n' +
    '            </select>\n' +
    '        </div>\n' +
    '        <div ng-show=" orderCustomizeProgramCtrl.selectedAreaId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'Branch\' | translate}}</label>\n' +
    '            <select ng-required=" orderCustomizeProgramCtrl.selectedAreaId > 0 " class="form-control select-with-search pmd-select2-tags"\n' +
    '                ng-change="orderCustomizeProgramCtrl.branchChange()" ng-model="orderCustomizeProgramCtrl.selectedBranchId" ng-options="a.branchId as a.titleDictionary[selectedLanguage] for a in orderCustomizeProgramCtrl.branchList"></select>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '    <!-- || (orderCustomizeProgramCtrl.Setting.minNoDaysPerProgram > orderCustomizeProgramCtrl.ProgramDaysCount) -->\n' +
    '    <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="(orderCustomizeProgramCtrl.currentStep != orderCustomizeProgramCtrl.steps.length)"\n' +
    '        class="btn btn-success" name="next" type="button" ng-click="orderCustomizeProgramCtrl.AddNewProgram()">\n' +
    '        <i class="fa fa-floppy-o"></i>{{\'Save\' | translate}}</button>\n' +
    '\n' +
    '</form>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/callCenter/templates/customizeStepTwo.html',
    '<!-- Inbox like Accordion -->\n' +
    '<form name="newProgramForm2">\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'ProgramDaysCount\' | translate}}</label>\n' +
    '           \n' +
    '            <input ng-change="orderCustomizeProgramCtrl.ConvertToNumber();" required type="text" class="mat-input form-control" name="programDaysCount"\n' +
    '                numbers-only ng-model="orderCustomizeProgramCtrl.ProgramDaysCount" minlength="1" maxlength="2">\n' +
    '            <div ng-messages="newProgramForm2.programDaysCount.$error">\n' +
    '                <div ng-if="newProgramForm2.programDaysCount.$error.required && !newProgramForm2.programDaysCount.$pristine">{{\'PhoneReqError\' | translate}}\n' +
    '                </div>\n' +
    '                <div ng-if="(newProgramForm2.programDaysCount.$error.minlength || newProgramForm2.programDaysCount.$error.maxlength)">{{\'PhoneLengthError\' | translate}}</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'MealPerDay\' | translate}}</label>\n' +
    '            <input ng-change="orderCustomizeProgramCtrl.ConvertToNumber();" required type="text" numbers-only class="mat-input form-control" name="mealPerDay"\n' +
    '                ng-model="orderCustomizeProgramCtrl.MealPerDay" minlength="1" maxlength="2">\n' +
    '            <div ng-messages="newProgramForm2.mealPerDay.$error" class="error">\n' +
    '                <div ng-if="newProgramForm2.mealPerDay.$error.required && !newProgramForm2.mealPerDay.$pristine">{{\'MealPerDayReqError\' | translate}}</div>\n' +
    '                <div ng-if="(newProgramForm2.mealPerDay.$error.minlength || newProgramForm2.mealPerDay.$error.maxlength)">{{\'MealPerDayLengthError\' | translate}}</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Breakfast\' | translate}}\n' +
    '            <input type="checkbox" ng-model="orderCustomizeProgramCtrl.IsBreakFast">\n' +
    '        </label>\n' +
    '        <br />\n' +
    '        <label for="first-name">{{\'Snack\' | translate}}\n' +
    '            <input type="checkbox" ng-model="orderCustomizeProgramCtrl.IsSnack">\n' +
    '        </label>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-init="counterDay = 0; counterMeal = 0">\n' +
    '        <div class="panel-group pmd-accordion pmd-accordion-inbox" id="accordion6" role="tablist" aria-multiselectable="true">\n' +
    '            <div ng-repeat="n in [].constructor(orderCustomizeProgramCtrl.daysCount)  track by $index" class="panel panel-default">\n' +
    '                <div class="panel-heading" role="tab" id="headingOne">\n' +
    '                    <h4 class="panel-title">\n' +
    '                        <a ng-init="counterDay=counterDay+1;" data-toggle="collapse" data-parent="#accordion6" ng-init="n=false" ng-click="n=!n;"\n' +
    '                            aria-expanded="true" aria-controls="collapseOne6" data-expandable="false">\n' +
    '                            {{\'Day\' | translate}} #{{counterDay=$index+1}}\n' +
    '                            <i class="material-icons md-dark pmd-sm pmd-accordion-arrow">keyboard_arrow_down</i>\n' +
    '                        </a>\n' +
    '                    </h4>\n' +
    '                </div>\n' +
    '                <div ng-show="n == true" id="collapseOne6" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">\n' +
    '                    <div class="panel-body">\n' +
    '                        <ul>\n' +
    '                            <li ng-repeat="meal in [].constructor(orderCustomizeProgramCtrl.mealsCount)  track by $index">\n' +
    '                                <h4>\n' +
    '                                    <a ng-init="counterMeal=counterMeal+1;" ng-click="showDetails = ! showDetails; orderCustomizeProgramCtrl.showDDL(); ">{{\'Meal\' | translate}} #{{counterMeal=$index+1}}</a>\n' +
    '                                </h4>\n' +
    '                                <div ng-show="showDetails">\n' +
    '                                    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                        <label for="first-name">{{\'SelectItems\' | translate}}</label>\n' +
    '                                        <select required name="ddl{{counterDay}}{{counterMeal}}" style="width:100% !important" class="form-control select-add-tags pmd-select2-tags"\n' +
    '                                            multiple ng-model="itemModel" ng-change="getData(itemModel,counterDay,counterMeal)"\n' +
    '                                            ng-options="item as item.itemNameDictionary[selectedLanguage] \n' +
    '                                            group by item.category.titleDictionary[selectedLanguage]\n' +
    '                                            for item  in itemsssPrepService">\n' +
    '                                        </select>\n' +
    '                                        <div ng-messages="newProgramForm2.ddl{{counterDay}}{{counterMeal}}.$error">\n' +
    '\n' +
    '                                            <div ng-show="newProgramForm2.ddl{{counterDay}}{{counterMeal}}.$error.required && !newProgramForm2.ddl{{counterDay}}{{counterMeal}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                            <div ng-show="(newProgramForm2.ddl{{counterDay}}{{counterMeal}}.$error.minlength || newProgramForm2.ddl{{counterDay}}{{counterMeal}}.$error.maxlength) && !newProgramForm2.ddl{{counterDay}}{{counterMeal}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </li>\n' +
    '                        </ul>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="(newProgramForm2.$invalid || (orderCustomizeProgramCtrl.daysCount == 0 || orderCustomizeProgramCtrl.mealsCount == 0))"\n' +
    '        class="btn pmd-ripple-effect btn-primary" type="button" ng-click="orderCustomizeProgramCtrl.gotoStep(3);">\n' +
    '        {{\'next\' | translate}}</button>\n' +
    '\n' +
    '</form>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/callCenter/templates/orderCustomizeProgram.html',
    '<style>\n' +
    '    .page-label {\n' +
    '        text-align: center;\n' +
    '        font-family: \'brandon_text_regularregular\', serif/*rtl:prepend:"HelveticaNeueLTArabic-Roman",*/\n' +
    '        ;\n' +
    '        font-size: 26px;\n' +
    '        position: relative;\n' +
    '        top: -60px;\n' +
    '        margin-bottom: 0;\n' +
    '        height: 0px;\n' +
    '        padding-bottom: 0;\n' +
    '        margin-top: 0;\n' +
    '    }\n' +
    '\n' +
    '    .getting-started-nav ul {\n' +
    '        font-family: \'brandon_textlight\', serif/*rtl:prepend:"HelveticaNeueLTArabic-Light",*/\n' +
    '        ;\n' +
    '        text-align: center;\n' +
    '        margin: 0;\n' +
    '        padding: 0;\n' +
    '        width: 60%;\n' +
    '        text-align: center;\n' +
    '        margin: auto;\n' +
    '    }\n' +
    '\n' +
    '    .getting-started-nav li {\n' +
    '        display: inline-block;\n' +
    '        width: 20%;\n' +
    '    }\n' +
    '\n' +
    '    .nav-seperator {\n' +
    '        width: 46%;\n' +
    '        height: 4px;\n' +
    '        background: #2c3f52;\n' +
    '        margin: auto;\n' +
    '    }\n' +
    '\n' +
    '    .getting-started-nav li.active span {\n' +
    '        background: #ea85e2 !important;\n' +
    '    }\n' +
    '\n' +
    '    .getting-started-nav span {\n' +
    '        color: #fff;\n' +
    '        border-radius: 100%;\n' +
    '        background: #2c3f52;\n' +
    '        width: 32px;\n' +
    '        height: 32px;\n' +
    '        display: inline-block;\n' +
    '        padding: 4px;\n' +
    '        text-align: center;\n' +
    '        margin-bottom: 0;\n' +
    '        border: 2px solid #2c3f52;\n' +
    '        position: relative;\n' +
    '        top: -18px;\n' +
    '    }\n' +
    '\n' +
    '    .getting-started-nav label {\n' +
    '        color: #2c3f52;\n' +
    '        text-transform: uppercase;\n' +
    '        display: block;\n' +
    '        position: relative;\n' +
    '        top: -8px;\n' +
    '    }\n' +
    '</style>\n' +
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'ProgramLbl\' | translate}}</h2>\n' +
    '    </div>\n' +
    '    <div class="modal-body">\n' +
    '        <div class="row">\n' +
    '            <div id="wizard-container">\n' +
    '                <div class="getting-started-nav">\n' +
    '                    <ul>\n' +
    '                        <h2 class="page-label">{{\'LETSCREATEPROGRAM\' | translate}}</h2>\n' +
    '                        <div class="nav-seperator"></div>\n' +
    '                        <li ng-class="{\'active\':orderCustomizeProgramCtrl.currentStep ==1}">\n' +
    '                            <span>1</span>\n' +
    '                            <label for="">{{\'BaiscInfo\' | translate}}</label>\n' +
    '                        </li>\n' +
    '                        <li ng-class="{\'active\':orderCustomizeProgramCtrl.currentStep ==2}">\n' +
    '                            <span>2</span>\n' +
    '                            <label for="">{{\'CreateMeal\' | translate}}</label>\n' +
    '                        </li>\n' +
    '                        <li ng-class="{\'active\':orderCustomizeProgramCtrl.currentStep ==3}">\n' +
    '                            <span>3</span>\n' +
    '                            <label for="">{{\'Summary\' | translate}}</label>\n' +
    '                        </li>\n' +
    '\n' +
    '                    </ul>\n' +
    '                </div>\n' +
    '                <!-- <div id="wizard-step-container">\n' +
    '                    <ul ng-init="counter = 0" class="nav nav-pills nav-justified">\n' +
    '                        <li ng-repeat="step in orderCustomizeProgramCtrl.steps" ng-class="{\'active\':step.step == orderCustomizeProgramCtrl.currentStep}">\n' +
    '                            <a style="background-image: linear-gradient(90deg,#9a3ea6 0%,#bc4abf 100%)!important; color: yellow!important;" ng-click="orderCustomizeProgramCtrl.gotoStep(step.step)"\n' +
    '                                href="">{{\'Step\' | translate}} #{{step.step}} </a>\n' +
    '                        </li>\n' +
    '                    </ul>\n' +
    '                </div> -->\n' +
    '\n' +
    '                <div id="wizard-content-container">\n' +
    '                    <ng-include src="orderCustomizeProgramCtrl.getStepTemplate()"></ng-include>\n' +
    '                </div>\n' +
    '\n' +
    '                <div id="wizard-navigation-container" ng-show="false">\n' +
    '                    <div class="pull-right">\n' +
    '                        <span class="btn-group">\n' +
    '                            <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="1 >= orderCustomizeProgramCtrl.currentStep" class="btn btn-default"\n' +
    '                                name="previous" type="button" ng-click="orderCustomizeProgramCtrl.gotoStep(orderCustomizeProgramCtrl.currentStep - 1)">\n' +
    '                                <i class="fa fa-arrow-left"></i>{{\'PreviousStep\' | translate}}</button>\n' +
    '                            <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="orderCustomizeProgramCtrl.currentStep >= orderCustomizeProgramCtrl.steps.length"\n' +
    '                                class="btn btn-primary" name="next" type="button" ng-click="orderCustomizeProgramCtrl.gotoStep(orderCustomizeProgramCtrl.currentStep + 1)">{{\'NextStep\' | translate}}\n' +
    '                                <i class="fa fa-arrow-right"></i>\n' +
    '                            </button>\n' +
    '                        </span>\n' +
    '                        <!-- {{orderCustomizeProgramCtrl.Setting.minNoDaysPerProgram}} / {{orderCustomizeProgramCtrl.ProgramDaysCount}} -->\n' +
    '                        <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="(orderCustomizeProgramCtrl.currentStep != orderCustomizeProgramCtrl.steps.length) || (orderCustomizeProgramCtrl.Setting.minNoDaysPerProgram > orderCustomizeProgramCtrl.ProgramDaysCount)"\n' +
    '                            class="btn btn-success" name="next" type="button" ng-click="orderCustomizeProgramCtrl.AddNewProgram()">\n' +
    '                            <i class="fa fa-floppy-o"></i>{{\'Save\' | translate}}</button>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/callCenter/templates/orderItems.html',
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
    '        $(".select-add-tags").select2({\n' +
    '            tags: true,\n' +
    '            theme: "bootstrap",\n' +
    '            insertTag: function (data, tag) {\n' +
    '                // Insert the tag at the end of the results\n' +
    '                data.push(tag);\n' +
    '                // console.log(data);\n' +
    '            }\n' +
    '        });\n' +
    '\n' +
    '        $(".select-tags").select2({\n' +
    '            tags: false,\n' +
    '            theme: "bootstrap",\n' +
    '        });\n' +
    '\n' +
    '        $(".select-with-search").select2({\n' +
    '            theme: "bootstrap"\n' +
    '        });\n' +
    '\n' +
    '        // ------\n' +
    '\n' +
    '    });\n' +
    '\n' +
    '      $(function () {\n' +
    '        $(\'#startdate\').datetimepicker(\n' +
    '            {\n' +
    '                minDate: new Date()\n' +
    '            }\n' +
    '        ).on(\'dp.change\', function (e) {\n' +
    '            debugger;\n' +
    '            angular.element(document.getElementById(\'startdate\')).scope().dateChange();\n' +
    '        });\n' +
    '    });\n' +
    '\n' +
    '</script>\n' +
    '\n' +
    '<form class="form-horizontal" name="orderItemForm">\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'SelectItems\' | translate}}</label>\n' +
    '        <select required name="selectItems" style="width:100% !important" class="form-control select-add-tags pmd-select2-tags" multiple\n' +
    '            ng-model="itemModel" ng-change="getData(itemModel)" ng-options="item as item.itemNameDictionary[selectedLanguage] \n' +
    '            group by item.category.titleDictionary[selectedLanguage]\n' +
    '            for item  in itemsssPrepService">\n' +
    '        </select>\n' +
    '        <div ng-messages="orderItemForm.selectItems.$error">\n' +
    '            <div ng-show="orderItemForm.selectItems.$error.required && !orderItemForm.selectItems.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '            <!-- <div ng-show="(orderItemForm.selectItems.$error.minlength || orderItemForm.selectItems.$error.maxlength) && !orderItemForm.selectItems.$error.required">{{\'NameLengthError255\' | translate}}</div> -->\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Country\' | translate}}</label>\n' +
    '        <select required style="width:100% !important" class="select-tags form-control pmd-select2-tags" ng-change="orderItemsCtrl.countryChange()"\n' +
    '            ng-model="orderItemsCtrl.selectedCountryId" ng-options="group.countryId as group.titleDictionary[selectedLanguage] for group in orderItemsCtrl.counties">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div ng-show=" orderItemsCtrl.selectedCountryId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Region\' | translate}}</label>\n' +
    '        <select required style="width:100% !important" class="select-tags form-control pmd-select2-tags" ng-change="orderItemsCtrl.regionChange()"\n' +
    '            ng-model="orderItemsCtrl.selectedRegionId" ng-options="group.regionId as group.titleDictionary[selectedLanguage] for group in orderItemsCtrl.regions">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div ng-show=" orderItemsCtrl.selectedRegionId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'City\' | translate}}</label>\n' +
    '        <select ng-required="orderItemsCtrl.selectedRegionId > 0" style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '            ng-change="orderItemsCtrl.cityChange()" ng-model="orderItemsCtrl.selectedCityId" ng-options="group.cityId as group.titleDictionary[selectedLanguage] for group in orderItemsCtrl.cities">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div ng-show=" orderItemsCtrl.selectedCityId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Area\' | translate}}</label>\n' +
    '        <select ng-required=" orderItemsCtrl.selectedCityId > 0" style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '            ng-change="orderItemsCtrl.areaChange()" ng-model="orderItemsCtrl.selectedAreaId" ng-options="group.areaId as group.titleDictionary[selectedLanguage] for group in orderItemsCtrl.area">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div ng-show=" orderItemsCtrl.selectedAreaId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Branch\' | translate}}</label>\n' +
    '        <select ng-required=" orderItemsCtrl.selectedAreaId > 0 " class="form-control select-with-search pmd-select2-tags" ng-change="orderItemsCtrl.branchChange()"\n' +
    '            ng-model="orderItemsCtrl.selectedBranchId" ng-options="a.branchId as a.titleDictionary[selectedLanguage] for a in orderItemsCtrl.branchList"></select>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="regular1" class="control-label">{{\'orderPickDateTime\' | translate}}</label>\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                <input ng-model="orderItemsCtrl.itemDatetime" type="text" ng-change="orderItemsCtrl.dateChange" id="startdate" class="form-control"\n' +
    '                />\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button ng-disabled="orderItemForm.$invalid || !orderItemsCtrl.dateIsValid" style="background-color: #e4e5e6;color: black!important;" class="btn pmd-ripple-effect btn-primary"\n' +
    '            type="button" ng-click="orderItemsCtrl.Order()">{{\'Order\' | translate}}</button>\n' +
    '    </div>\n' +
    '</form>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/callCenter/templates/orderMeals.html',
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
    '        $(".select-add-tags").select2({\n' +
    '            tags: true,\n' +
    '            theme: "bootstrap",\n' +
    '            insertTag: function (data, tag) {\n' +
    '                // Insert the tag at the end of the results\n' +
    '                data.push(tag);\n' +
    '                // console.log(data);\n' +
    '            }\n' +
    '        });\n' +
    '\n' +
    '        $(".select-tags").select2({\n' +
    '            tags: false,\n' +
    '            theme: "bootstrap",\n' +
    '        });\n' +
    '\n' +
    '        $(".select-with-search").select2({\n' +
    '            theme: "bootstrap"\n' +
    '        });\n' +
    '    });\n' +
    '\n' +
    '    $(function () {\n' +
    '        $(\'#startdate\').datetimepicker(\n' +
    '            {\n' +
    '                minDate: new Date()\n' +
    '            }\n' +
    '        ).on(\'dp.change\', function (e) {\n' +
    '            debugger;\n' +
    '            angular.element(document.getElementById(\'startdate\')).scope().dateChange();\n' +
    '        });\n' +
    '    });\n' +
    '\n' +
    '</script>\n' +
    '\n' +
    '\n' +
    '<form name="orderMealForm">\n' +
    '    {{\'CheckMealContent\' | translate}}\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'SelectMeals\' | translate}}</label>\n' +
    '        <select style="width:100% !important" class="form-control select-add-tags pmd-select2-tags" ng-model="orderMealsCtrl.meal"\n' +
    '            ng-change="orderMealsCtrl.mealSearch()" ng-options="item as item.mealNameDictionary[selectedLanguage] \n' +
    '                for item  in mealsPrepService.results">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '\n' +
    '    <table style="background: white" ng-show="orderMealsCtrl.flag == true" class="table pmd-table table-hover">\n' +
    '        <thead>\n' +
    '            <tr>\n' +
    '                <th>{{\'ItemName\' | translate}}</th>\n' +
    '                <th>{{\'ItemDescription\' | translate}}</th>\n' +
    '                <th>{{\'Calories\' | translate}}</th>\n' +
    '                <th>{{\'Protein\' | translate}}</th>\n' +
    '                <th>{{\'Carbs\' | translate}}</th>\n' +
    '            </tr>\n' +
    '        </thead>\n' +
    '        <tbody>\n' +
    '            <tr ng-repeat="item in orderMealsCtrl.mealItemss">\n' +
    '                <td data-title="Name">{{item.itemNameDictionary[selectedLanguage]}}</td>\n' +
    '                <td data-title="Name">{{item.itemDescriptionDictionary[selectedLanguage]}}</td>\n' +
    '                <td data-title="Name">{{item.calories}}</td>\n' +
    '                <td data-title="Name">{{item.protein}}</td>\n' +
    '                <td data-title="Name">{{item.carbs}}</td>\n' +
    '\n' +
    '            </tr>\n' +
    '        </tbody>\n' +
    '    </table>\n' +
    '\n' +
    '    <hr> {{\'OrderMeal\' | translate}}\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'SelectMeals\' | translate}}</label>\n' +
    '        <select style="width:100% !important" class="form-control select-add-tags pmd-select2-tags" multiple ng-model="itemModel"\n' +
    '            ng-change="getData(itemModel)" ng-options="item as item.mealNameDictionary[selectedLanguage]   \n' +
    '            for item  in mealsPrepService.results">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Country\' | translate}}</label>\n' +
    '        <select required style="width:100% !important" class="select-tags form-control pmd-select2-tags" ng-change="orderMealsCtrl.countryChange()"\n' +
    '            ng-model="orderMealsCtrl.selectedCountryId" ng-options="group.countryId as group.titleDictionary[selectedLanguage] for group in orderMealsCtrl.counties">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div ng-show=" orderMealsCtrl.selectedCountryId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Region\' | translate}}</label>\n' +
    '        <select required style="width:100% !important" class="select-tags form-control pmd-select2-tags" ng-change="orderMealsCtrl.regionChange()"\n' +
    '            ng-model="orderMealsCtrl.selectedRegionId" ng-options="group.regionId as group.titleDictionary[selectedLanguage] for group in orderMealsCtrl.regions">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div ng-show=" orderMealsCtrl.selectedRegionId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'City\' | translate}}</label>\n' +
    '        <select ng-required="orderMealsCtrl.selectedRegionId > 0" style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '            ng-change="orderMealsCtrl.cityChange()" ng-model="orderMealsCtrl.selectedCityId" ng-options="group.cityId as group.titleDictionary[selectedLanguage] for group in orderMealsCtrl.cities">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div ng-show=" orderMealsCtrl.selectedCityId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Area\' | translate}}</label>\n' +
    '        <select ng-required=" orderMealsCtrl.selectedCityId > 0" style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '            ng-change="orderMealsCtrl.areaChange()" ng-model="orderMealsCtrl.selectedAreaId" ng-options="group.areaId as group.titleDictionary[selectedLanguage] for group in orderMealsCtrl.area">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div ng-show=" orderMealsCtrl.selectedAreaId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Branch\' | translate}}</label>\n' +
    '        <select ng-required=" orderMealsCtrl.selectedAreaId > 0 " class="form-control select-with-search pmd-select2-tags" ng-change="orderMealsCtrl.branchChange()"\n' +
    '            ng-model="orderMealsCtrl.selectedBranchId" ng-options="a.branchId as a.titleDictionary[selectedLanguage] for a in orderMealsCtrl.branchList"></select>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="regular1" class="control-label">{{\'orderPickDateTime\' | translate}}</label>\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                <input ng-model="orderMealsCtrl.itemDatetime" type="text" ng-change="orderMealsCtrl.dateChange" id="startdate" class="form-control"\n' +
    '                />\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button ng-disabled="orderMealForm.$invalid || !orderMealsCtrl.dateIsValid" style="background-color: #e4e5e6;color: black!important;" class="btn pmd-ripple-effect btn-primary" type="button"\n' +
    '            ng-click="orderMealsCtrl.Order()">{{\'Order\' | translate}}</button>\n' +
    '    </div>\n' +
    '</form>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/callCenter/templates/orderPrograms.html',
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
    '        $(".select-add-tags").select2({\n' +
    '            tags: true,\n' +
    '            theme: "bootstrap",\n' +
    '            insertTag: function (data, tag) {\n' +
    '                // Insert the tag at the end of the results\n' +
    '                data.push(tag);\n' +
    '                // console.log(data);\n' +
    '            }\n' +
    '        });\n' +
    '\n' +
    '        $(".select-tags").select2({\n' +
    '            tags: false,\n' +
    '            theme: "bootstrap",\n' +
    '        });\n' +
    '\n' +
    '        $(".select-with-search").select2({\n' +
    '            theme: "bootstrap"\n' +
    '        });\n' +
    '    });\n' +
    '\n' +
    '    $(function () {\n' +
    '        $(\'#startdate\').datetimepicker(\n' +
    '            {\n' +
    '                minDate: new Date()\n' +
    '            }\n' +
    '        ).on(\'dp.change\', function (e) {\n' +
    '            debugger;\n' +
    '            angular.element(document.getElementById(\'startdate\')).scope().dateChange();\n' +
    '        });\n' +
    '    });\n' +
    '</script>\n' +
    '\n' +
    '<form name="orderProgramForm">\n' +
    '    {{\'CheckProgramContent\' | translate}}\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'SelectProgram\' | translate}}</label>\n' +
    '        <!-- <select style="width:100% !important" class="form-control" ng-model="orderProgramsCtrl.program"\n' +
    '        ng-change="orderProgramsCtrl.programSearch()" ng-options="program as program.programNameDictionary[selectedLanguage] for program  in programsPrepService.results">\n' +
    '    </select> -->\n' +
    '\n' +
    '        <select style="width:100% !important" class="select-tags form-control pmd-select2-tags" ng-change="orderProgramsCtrl.programSearch();"\n' +
    '            ng-model="orderProgramsCtrl.program" ng-options="program as program.programNameDictionary[selectedLanguage] for program  in programsPrepService.results">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-if="orderProgramsCtrl.flag == true" ng-init="counterDay = 0; counterMeal = 0">\n' +
    '        <div class="panel-group pmd-accordion pmd-accordion-inbox" id="accordion6" role="tablist" aria-multiselectable="true">\n' +
    '            <!-- {{orderProgramsCtrl.mealItemss.programDays}} / {{orderProgramsCtrl.mealItemss.noOfMeals}} -->\n' +
    '            <div ng-repeat="n in [].constructor(orderProgramsCtrl.mealItemss.programDays)  track by $index" class="panel panel-default">\n' +
    '                <div class="panel-heading" role="tab" id="headingOne">\n' +
    '                    <h4 class="panel-title">\n' +
    '                        <a ng-init="counterDay=counterDay+1;" data-toggle="collapse" data-parent="#accordion6" ng-init="n=false" ng-click="n=!n;"\n' +
    '                            aria-expanded="true" aria-controls="collapseOne6" data-expandable="false">\n' +
    '                            {{\'Day\' | translate}} #{{counterDay=$index+1}}\n' +
    '                            <i class="material-icons md-dark pmd-sm pmd-accordion-arrow">keyboard_arrow_down</i>\n' +
    '                        </a>\n' +
    '                    </h4>\n' +
    '                </div>\n' +
    '                <div ng-show="n == true" id="collapseOne6" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">\n' +
    '                    <div class="panel-body">\n' +
    '                        <ul>\n' +
    '                            <li ng-repeat="meal in [].constructor(orderProgramsCtrl.mealItemss.noOfMeals)  track by $index">\n' +
    '                                <h4>\n' +
    '                                    <a ng-init="counterMeal=counterMeal+1;" ng-click="showDetails = ! showDetails; orderProgramsCtrl.showDDL(); ">{{\'Meal\' | translate}} #{{counterMeal=$index+1}}</a>\n' +
    '                                    <!-- <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="orderProgramsCtrl.ShowProgramMeal(orderProgramsCtrl.mealItemss.programId, counterDay, counterMeal)">mode_edit</i> -->\n' +
    '                                    <!-- {{orderProgramsCtrl.mealItemss.programId}}, {{counterDay}}, {{counterMeal}} -->\n' +
    '                                </h4>\n' +
    '                                <div ng-show="showDetails">\n' +
    '                                    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                        <label for="first-name">{{\'SelectItems\' | translate}}</label>\n' +
    '                                        <ul>\n' +
    '                                            <li ng-repeat="detail in orderProgramsCtrl.mealItemss.programDetails | filter:{dayNumber:counterDay, mealNumberPerDay: counterMeal} ">\n' +
    '                                                <div ng-repeat="item in orderProgramsCtrl.mealItemss.items |filter :{itemId:detail.itemId}">\n' +
    '                                                    {{item.itemNameDictionary[selectedLanguage]}}\n' +
    '                                                </div>\n' +
    '                                            </li>\n' +
    '                                        </ul>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </li>\n' +
    '                        </ul>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <!-- <table style="background: white" ng-show="orderProgramsCtrl.flag == true" class="table pmd-table table-hover">\n' +
    '    <thead>\n' +
    '        <tr>\n' +
    '            <th>{{\'ItemName\' | translate}}</th>\n' +
    '            <th>{{\'ItemDescription\' | translate}}</th>\n' +
    '            <th>{{\'Calories\' | translate}}</th>\n' +
    '            <th>{{\'Protein\' | translate}}</th>\n' +
    '            <th>{{\'Carbs\' | translate}}</th>\n' +
    '        </tr>\n' +
    '    </thead>\n' +
    '    <tbody>\n' +
    '        <tr ng-repeat="item in orderProgramsCtrl.mealItemss.items">\n' +
    '            <td data-title="Name">{{item.itemNameDictionary[selectedLanguage]}}</td>\n' +
    '            <td data-title="Name">{{item.itemDescriptionDictionary[selectedLanguage]}}</td>\n' +
    '            <td data-title="Name">{{item.calories}}</td>\n' +
    '            <td data-title="Name">{{item.protein}}</td>\n' +
    '            <td data-title="Name">{{item.carbs}}</td>\n' +
    '\n' +
    '        </tr>\n' +
    '    </tbody>\n' +
    '</table> -->\n' +
    '\n' +
    '    <hr> {{\'OrderProgram\' | translate}}\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'SelectPrograms\' | translate}}</label>\n' +
    '        <select required style="width:100% !important" class="form-control select-add-tags pmd-select2-tags" ng-model="itemModel"\n' +
    '            ng-change="getData(itemModel)" ng-options="item as item.programNameDictionary[selectedLanguage]\n' +
    '            for item  in programsPrepService.results">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="regular1" class="control-label">{{\'orderPickDateTime\' | translate}}</label>\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                <input ng-model="orderProgramsCtrl.itemDatetime" type="text" ng-change="orderProgramsCtrl.dateChange" id="startdate" class="form-control"\n' +
    '                />\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'OrderType\' | translate}}</label>\n' +
    '        <label>\n' +
    '            <input type="radio" ng-model="orderProgramsCtrl.orderType.type" value="delivery"> {{\'Deivery\' | translate}}\n' +
    '        </label>\n' +
    '        <label style="margin-left:3em">\n' +
    '            <input type="radio" ng-model="orderProgramsCtrl.orderType.type" value="pickup"> {{\'Pickup\' | translate}}\n' +
    '        </label>\n' +
    '        <br/>\n' +
    '    </div>\n' +
    '\n' +
    '    <!-- {{orderProgramsCtrl.userAddresses.length}} -->\n' +
    '    <div ng-if="orderProgramsCtrl.orderType.type == \'delivery\'">\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'SelectAddress\' | translate}}</label>\n' +
    '\n' +
    '            <div ng-repeat="address in orderProgramsCtrl.userAddresses">\n' +
    '                <!-- {{orderProgramsCtrl.addresses.address}} -->\n' +
    '                <label>\n' +
    '                    <input ng-change="orderProgramsCtrl.addressInfo(address)" type="radio" ng-model="orderProgramsCtrl.addresses.address" value="{{address.addressId}}"> {{address.appartmentNo}}, {{address.description}}, {{\'Floor\' | translate}} {{address.floor}}\n' +
    '                    <!-- {{addressInfo}} -->\n' +
    '                </label>\n' +
    '            </div>\n' +
    '\n' +
    '            <!-- <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Country\' | translate}}</label>\n' +
    '                <select required style="width:100% !important" class="select-tags form-control pmd-select2-tags" ng-change="orderProgramsCtrl.countryChange()"\n' +
    '                    ng-model="orderProgramsCtrl.selectedCountryId" ng-options="group.countryId as group.titleDictionary[selectedLanguage] for group in orderProgramsCtrl.counties">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '            <div ng-show=" orderProgramsCtrl.selectedCountryId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Region\' | translate}}</label>\n' +
    '                <select required style="width:100% !important" class="select-tags form-control pmd-select2-tags" ng-change="orderProgramsCtrl.regionChange()"\n' +
    '                    ng-model="orderProgramsCtrl.selectedRegionId" ng-options="group.regionId as group.titleDictionary[selectedLanguage] for group in orderProgramsCtrl.regions">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '            <div ng-show=" orderProgramsCtrl.selectedRegionId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'City\' | translate}}</label>\n' +
    '                <select ng-required="orderProgramsCtrl.selectedRegionId > 0" style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                    ng-change="orderProgramsCtrl.cityChange()" ng-model="orderProgramsCtrl.selectedCityId" ng-options="group.cityId as group.titleDictionary[selectedLanguage] for group in orderProgramsCtrl.cities">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '            <div ng-show=" orderProgramsCtrl.selectedCityId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Area\' | translate}}</label>\n' +
    '                <select ng-required=" orderProgramsCtrl.selectedCityId > 0" style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                    ng-change="orderProgramsCtrl.areaChange()" ng-model="orderProgramsCtrl.selectedAreaId" ng-options="group.areaId as group.titleDictionary[selectedLanguage] for group in orderProgramsCtrl.area">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '            <div ng-show=" orderProgramsCtrl.selectedAreaId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Branch\' | translate}}</label>\n' +
    '                <select ng-required=" orderProgramsCtrl.selectedAreaId > 0 " class="form-control select-with-search pmd-select2-tags" ng-change="orderProgramsCtrl.branchChange()"\n' +
    '                    ng-model="orderProgramsCtrl.selectedBranchId" ng-options="a.branchId as a.titleDictionary[selectedLanguage] for a in orderProgramsCtrl.branchList"></select>\n' +
    '            </div>-->\n' +
    '        </div> \n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '    <div ng-show="orderProgramsCtrl.orderType.type == \'pickup\'">\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'Country\' | translate}}</label>\n' +
    '            <select required style="width:100% !important" class="select-tags form-control pmd-select2-tags" ng-change="orderProgramsCtrl.countryChange()"\n' +
    '                ng-model="orderProgramsCtrl.selectedCountryId" ng-options="group.countryId as group.titleDictionary[selectedLanguage] for group in orderProgramsCtrl.counties">\n' +
    '            </select>\n' +
    '        </div>\n' +
    '        <div ng-show=" orderProgramsCtrl.selectedCountryId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'Region\' | translate}}</label>\n' +
    '            <select required style="width:100% !important" class="select-tags form-control pmd-select2-tags" ng-change="orderProgramsCtrl.regionChange()"\n' +
    '                ng-model="orderProgramsCtrl.selectedRegionId" ng-options="group.regionId as group.titleDictionary[selectedLanguage] for group in orderProgramsCtrl.regions">\n' +
    '            </select>\n' +
    '        </div>\n' +
    '        <div ng-show=" orderProgramsCtrl.selectedRegionId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'City\' | translate}}</label>\n' +
    '            <select ng-required="orderProgramsCtrl.selectedRegionId > 0" style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                ng-change="orderProgramsCtrl.cityChange()" ng-model="orderProgramsCtrl.selectedCityId" ng-options="group.cityId as group.titleDictionary[selectedLanguage] for group in orderProgramsCtrl.cities">\n' +
    '            </select>\n' +
    '        </div>\n' +
    '        <div ng-show=" orderProgramsCtrl.selectedCityId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'Area\' | translate}}</label>\n' +
    '            <select ng-required=" orderProgramsCtrl.selectedCityId > 0" style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                ng-change="orderProgramsCtrl.areaChange()" ng-model="orderProgramsCtrl.selectedAreaId" ng-options="group.areaId as group.titleDictionary[selectedLanguage] for group in orderProgramsCtrl.area">\n' +
    '            </select>\n' +
    '        </div>\n' +
    '        <div ng-show=" orderProgramsCtrl.selectedAreaId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'Branch\' | translate}}</label>\n' +
    '            <select ng-required=" orderProgramsCtrl.selectedAreaId > 0 " class="form-control select-with-search pmd-select2-tags" ng-change="orderProgramsCtrl.branchChange()"\n' +
    '                ng-model="orderProgramsCtrl.selectedBranchId" ng-options="a.branchId as a.titleDictionary[selectedLanguage] for a in orderProgramsCtrl.branchList"></select>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button ng-disabled="orderProgramForm.$invalid || !orderProgramsCtrl.dateIsValid" style="background-color: #e4e5e6;color: black!important;"\n' +
    '            class="btn pmd-ripple-effect btn-primary" type="button" ng-click="orderProgramsCtrl.Order()">{{\'Order\' | translate}}</button>\n' +
    '    </div>\n' +
    '</form>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/dashboard/templates/dashboard.html',
    '<style>\n' +
    '    .my-custom-stars .button .material-icons {\n' +
    '        font-size: 20px;\n' +
    '    }\n' +
    '\n' +
    '    .my-custom-stars .star-button.star-on .material-icons {\n' +
    '        color: #003399;\n' +
    '    }\n' +
    '\n' +
    '    .my-custom-stars .star-button.star-off .material-icons {\n' +
    '        color: #99ccff;\n' +
    '    }\n' +
    '\n' +
    '    .my-custom-stars .button .material-icons a:focus,\n' +
    '    a:hover {\n' +
    '        text-decoration: none;\n' +
    '    }\n' +
    '</style>\n' +
    '<script type="text/javascript">\n' +
    '    $(function () {\n' +
    '        $(\'#fromdate\').datetimepicker(\n' +
    '            {\n' +
    '                format: \'DD/MM/YYYY\',\n' +
    '                // minDate: new Date()\n' +
    '            }\n' +
    '        );\n' +
    '        $(\'#todate\').datetimepicker(\n' +
    '            {\n' +
    '                format: \'DD/MM/YYYY\',\n' +
    '                // minDate: new Date(),\n' +
    '                useCurrent: false\n' +
    '            }\n' +
    '        );\n' +
    '        $("#fromdate").on("dp.change", function (e) {\n' +
    '            $(\'#todate\').data("DateTimePicker").minDate(e.date);\n' +
    '        });\n' +
    '        // Start date picke on chagne event [select maxmimum date for start date datepicker]\n' +
    '        $("#todate").on("dp.change", function (e) {\n' +
    '            $(\'#fromdate\').data("DateTimePicker").maxDate(e.date);\n' +
    '        });\n' +
    '\n' +
    '        \n' +
    '\n' +
    '        \n' +
    '        $(\'#fromdateSurvey\').datetimepicker(\n' +
    '            {\n' +
    '                format: \'DD/MM/YYYY\',\n' +
    '                // minDate: new Date()\n' +
    '            }\n' +
    '        );\n' +
    '        $(\'#todateSurvey\').datetimepicker(\n' +
    '            {\n' +
    '                format: \'DD/MM/YYYY\',\n' +
    '                // minDate: new Date(),\n' +
    '                useCurrent: false\n' +
    '            }\n' +
    '        );\n' +
    '        $("#fromdateSurvey").on("dp.change", function (e) {\n' +
    '            $(\'#todateSurvey\').data("DateTimePicker").minDate(e.date);\n' +
    '        });\n' +
    '        // Start date picke on chagne event [select maxmimum date for start date datepicker]\n' +
    '        $("#todateSurvey").on("dp.change", function (e) {\n' +
    '            $(\'#fromdateSurvey\').data("DateTimePicker").maxDate(e.date);\n' +
    '        });\n' +
    '    });\n' +
    '\n' +
    '</script>\n' +
    '<div class="container-fluid" ng-init="showMoreFilter = false">\n' +
    '        <div class="row" id="card-masonry">\n' +
    '            <!-- Today\'s Site Activity -->\n' +
    '            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\n' +
    '                <div class="pmd-card pmd-z-depth">      \n' +
    '                    <div class="pmd-card-title">\n' +
    '                        <div class="media-left"> \n' +
    '                            <div style="cursor: pointer;  background-color: #ccc;">\n' +
    '                                <h1 style="padding: 4px" ng-init="showTicket = false" ng-click="showTicket=!showTicket">\n' +
    '                                    {{\'Tickets\' | translate}}\n' +
    '                                </h1>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '\n' +
    '                        <div class="pmd-card-body" ng-show="showTicket" ng-init="showMoreFilter = false">\n' +
    '                            <div class="row">\n' +
    '                        \n' +
    '                                <div style="direction: ltr;" class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label>{{\'fromLbl\' | translate}}</label>\n' +
    '                                    <input type="text" id="fromdate" class="form-control" required />\n' +
    '                                </div>\n' +
    '                        \n' +
    '                                <div style="direction: ltr;" class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label>{{\'toLbl\' | translate}}</label>\n' +
    '                                    <input type="text" id="todate" class="form-control" required />\n' +
    '                                </div>\n' +
    '                                <!-- <div class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed" <label\n' +
    '                                    for="first-name">{{\'StatusLbl\' | translate}}</label>\n' +
    '                                    <select class="form-control select-with-search pmd-select2-tags" ng-model="dashboardCtrl.selectedStatus">\n' +
    '                                        <option value="">{{\'AllLbl\' | translate}}</option>\n' +
    '                                        <option value="Pending">{{\'Pending\'|translate}}</option>\n' +
    '                                        <option value="Assigned">{{\'Assigned\'|translate}}</option>\n' +
    '                                        <option value="InProgress">{{\'InProgress\'|translate}}</option>\n' +
    '                                        <option value="Closed">{{\'Closed\'|translate}}</option>\n' +
    '                                        <option value="Rejected">{{\'Rejected\'|translate}}</option>\n' +
    '                                    </select>\n' +
    '                                </div> -->\n' +
    '                                <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                        <label for="first-name">{{\'branchManager\' | translate}}</label>\n' +
    '                            \n' +
    '                                        <select required class="form-control select-with-search pmd-select2-tags" ng-model="dashboardCtrl.selectedBranchManager"\n' +
    '                                            ng-options="a as a.userName for a in dashboardCtrl.BranchManagers"></select>\n' +
    '                                    </div>\n' +
    '                            \n' +
    '                                    <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                        <label for="first-name">{{\'Tech\' | translate}}</label>\n' +
    '                            \n' +
    '                                        <select required class="form-control select-with-search pmd-select2-tags" ng-model="dashboardCtrl.selectedTechnician" ng-options="a as a.userName for a in dashboardCtrl.Technicians"></select>\n' +
    '                                    </div>\n' +
    '                            </div>\n' +
    '                            <div class="row" ng-show="showMoreFilter">\n' +
    '                                <div class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed" <label\n' +
    '                                    for="first-name">{{\'Country\' | translate}}</label>\n' +
    '                                    <select class="form-control select-with-search pmd-select2-tags" ng-change="dashboardCtrl.countryChange()" ng-model="dashboardCtrl.selectedCountry"\n' +
    '                                        ng-options="group as group.titleDictionary[selectedLanguage] for group in dashboardCtrl.counties">\n' +
    '                                    </select>\n' +
    '                                </div>\n' +
    '                                <div class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed" <label\n' +
    '                                    for="first-name">{{\'Region\' | translate}}</label>\n' +
    '                                    <select class="form-control select-with-search pmd-select2-tags" ng-change="dashboardCtrl.regionChange()" ng-model="dashboardCtrl.selectedRegion"\n' +
    '                                        ng-options="group as group.titleDictionary[selectedLanguage] for group in dashboardCtrl.regions">\n' +
    '                                    </select>\n' +
    '                                </div>\n' +
    '                                <div class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed" <label\n' +
    '                                    for="first-name">{{\'City\' | translate}}</label>\n' +
    '                                    <select class="form-control select-with-search pmd-select2-tags" ng-change="dashboardCtrl.cityChange()" ng-model="dashboardCtrl.selectedCity"\n' +
    '                                        ng-options="group as group.titleDictionary[selectedLanguage] for group in dashboardCtrl.cities">\n' +
    '                                    </select>\n' +
    '                                </div>\n' +
    '                                <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name">{{\'Area\' | translate}}</label>\n' +
    '                        \n' +
    '                                    <select required class="form-control select-with-search pmd-select2-tags" ng-change="dashboardCtrl.areaChange()" ng-model="dashboardCtrl.selectedArea"\n' +
    '                                        ng-options="a as a.titleDictionary[selectedLanguage] for a in dashboardCtrl.areaList"></select>\n' +
    '                                </div>\n' +
    '                        \n' +
    '                                <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name">{{\'Branch\' | translate}}</label>\n' +
    '                        \n' +
    '                                    <select required class="form-control select-with-search pmd-select2-tags" ng-model="dashboardCtrl.selectedBranch" ng-options="a as a.titleDictionary[selectedLanguage] for a in dashboardCtrl.branchList"></select>\n' +
    '                                </div>\n' +
    '                        \n' +
    '                                <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name">{{\'Department\' | translate}}</label>\n' +
    '                        \n' +
    '                                    <select required class="form-control select-with-search pmd-select2-tags" ng-change="dashboardCtrl.departmentChange()" ng-model="dashboardCtrl.selectedDepartment"\n' +
    '                                        ng-options="a as a.titleDictionary[selectedLanguage] for a in dashboardCtrl.departments"></select>\n' +
    '                                </div>\n' +
    '                        \n' +
    '                                <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name">{{\'CategoryLbl\' | translate}}</label>\n' +
    '                        \n' +
    '                                    <select required class="form-control select-with-search pmd-select2-tags" ng-model="dashboardCtrl.selectedCategory" ng-options="a as a.titleDictionary[selectedLanguage] for a in dashboardCtrl.categories"></select>\n' +
    '                                </div>\n' +
    '                                \n' +
    '                            </div>\n' +
    '                            <div class="row" style="padding-bottom: 5px;">\n' +
    '                                <div class="col-md-2 ">\n' +
    '                                    <button ng-click="dashboardCtrl.applyFilter()" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'filterBtn\' | translate}}</button>\n' +
    '                                </div>\n' +
    '                                <span ng-show="!showMoreFilter" ng-click="showMoreFilter = !showMoreFilter" style="cursor: pointer">{{\'moreFilter\'|translate}}</span>\n' +
    '                                <span ng-show="showMoreFilter" ng-click="showMoreFilter = !showMoreFilter" style="cursor: pointer">{{\'lessFilter\'|translate}}</span>\n' +
    '                            </div>\n' +
    '                            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                <label for="first-name">{{\'ViewBy\' | translate}}</label>\n' +
    '                                <select style="width:15% !important" class="select-tags form-control pmd-select2-tags" ng-change="dashboardCtrl.ticketFilterChange()"\n' +
    '                                    ng-model="dashboardCtrl.selectedTicketFilter" ng-options="f.value as f.name for f  in dashboardCtrl.ticketsFilter">\n' +
    '                                </select>\n' +
    '                            </div>\n' +
    '                            <nvd3 style="direction: ltr" options="dashboardCtrl.options" data="dashboardCtrl.data"></nvd3>\n' +
    '                        </div>\n' +
    '\n' +
    '                        <div class="media-left">\n' +
    '                            <div style="cursor: pointer; background-color: #ccc;">\n' +
    '                                <h1 style="padding: 4px" ng-init="showSurvey = false" ng-click="showSurvey=!showSurvey">\n' +
    '                                    {{\'Survey\' | translate}}\n' +
    '                                </h1>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '\n' +
    '                        <div class="pmd-card-body" ng-show="showSurvey" ng-init="showMoreFilterSurvey = false">\n' +
    '\n' +
    '                            <div class="row">\n' +
    '                                <div style="direction: ltr;" class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label>{{\'fromLbl\' | translate}}</label>\n' +
    '                                    <input type="text" id="fromdateSurvey" class="form-control" required />\n' +
    '                                </div>\n' +
    '                        \n' +
    '                        \n' +
    '                                <div style="direction: ltr;" class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label>{{\'toLbl\' | translate}}</label>\n' +
    '                                    <input type="text" id="todateSurvey" class="form-control" required />\n' +
    '                                </div>\n' +
    '                                <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name">{{\'AnswererdBy\' | translate}}</label>\n' +
    '                        \n' +
    '                                    <select required class="form-control select-with-search pmd-select2-tags" ng-model="dashboardCtrl.selectedAnswersUser"\n' +
    '                                        ng-options="a as a.userName for a in dashboardCtrl.AnswersUsers"></select>\n' +
    '                                </div>\n' +
    '                                <!-- <div class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed" <label\n' +
    '                                    for="first-name">{{\'StatusLbl\' | translate}}</label>\n' +
    '                                    <select class="form-control select-with-search pmd-select2-tags" ng-model="dashboardCtrl.selectedStatus">\n' +
    '                                        <option value="">{{\'AllLbl\' | translate}}</option>\n' +
    '                                        <option value="Pending">{{\'Pending\'|translate}}</option>\n' +
    '                                        <option value="Assigned">{{\'Assigned\'|translate}}</option>\n' +
    '                                        <option value="InProgress">{{\'InProgress\'|translate}}</option>\n' +
    '                                        <option value="Closed">{{\'Closed\'|translate}}</option>\n' +
    '                                        <option value="Rejected">{{\'Rejected\'|translate}}</option>\n' +
    '                                    </select>\n' +
    '                                </div> -->\n' +
    '                        \n' +
    '                            </div>\n' +
    '                            <div class="row" ng-show="showMoreFilterSurvey">\n' +
    '                                <div class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                        <label for="first-name">{{\'Country\' | translate}}</label>\n' +
    '                                    <select class="form-control select-with-search pmd-select2-tags" ng-change="dashboardCtrl.countrySurveyChange()" ng-model="dashboardCtrl.selectedCountrySurvey"\n' +
    '                                        ng-options="group as group.titleDictionary[selectedLanguage] for group in dashboardCtrl.countiesSurvey">\n' +
    '                                    </select>\n' +
    '                                </div>\n' +
    '                                <div class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name">{{\'Region\' | translate}}</label>\n' +
    '                                    <select class="form-control select-with-search pmd-select2-tags" ng-change="dashboardCtrl.regionSurveyChange()" ng-model="dashboardCtrl.selectedRegionSurvey"\n' +
    '                                        ng-options="group as group.titleDictionary[selectedLanguage] for group in dashboardCtrl.regionsSurvey">\n' +
    '                                    </select>\n' +
    '                                </div>\n' +
    '                                <div class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name">{{\'City\' | translate}}</label>\n' +
    '                                    <select class="form-control select-with-search pmd-select2-tags" ng-change="dashboardCtrl.citySurveyChange()" ng-model="dashboardCtrl.selectedCitySurvey"\n' +
    '                                        ng-options="group as group.titleDictionary[selectedLanguage] for group in dashboardCtrl.citiesSurvey">\n' +
    '                                    </select>\n' +
    '                                </div>\n' +
    '                                <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name">{{\'Area\' | translate}}</label>\n' +
    '                        \n' +
    '                                    <select required class="form-control select-with-search pmd-select2-tags" ng-change="dashboardCtrl.areaSurveyChange()" ng-model="dashboardCtrl.selectedAreaSurvey"\n' +
    '                                        ng-options="a as a.titleDictionary[selectedLanguage] for a in dashboardCtrl.areaListSurvey"></select>\n' +
    '                                </div>\n' +
    '                        \n' +
    '                                <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name">{{\'Branch\' | translate}}</label>\n' +
    '                        \n' +
    '                                    <select required class="form-control select-with-search pmd-select2-tags" ng-model="dashboardCtrl.selectedBranchSurvey" ng-options="a as a.titleDictionary[selectedLanguage] for a in dashboardCtrl.branchListSurvey"></select>\n' +
    '                                </div>\n' +
    '                        \n' +
    '                                <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name">{{\'Department\' | translate}}</label>\n' +
    '                        \n' +
    '                                    <select required class="form-control select-with-search pmd-select2-tags" ng-change="dashboardCtrl.departmentSurveyChange()" ng-model="dashboardCtrl.selectedDepartmentSurvey"\n' +
    '                                        ng-options="a as a.titleDictionary[selectedLanguage] for a in dashboardCtrl.departmentsSurvey"></select>\n' +
    '                                </div>\n' +
    '                        \n' +
    '                                <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name">{{\'CategoryLbl\' | translate}}</label>\n' +
    '                        \n' +
    '                                    <select required class="form-control select-with-search pmd-select2-tags" ng-model="dashboardCtrl.selectedCategorySurvey" ng-options="a as a.titleDictionary[selectedLanguage] for a in dashboardCtrl.categoriesSurvey"></select>\n' +
    '                                </div>\n' +
    '                        \n' +
    '                                <div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name">{{\'categoryType\' | translate}}</label>\n' +
    '                        \n' +
    '                                    <select required style="width:50% !important" class="form-control select-with-search pmd-select2-tags" ng-change="dashboardCtrl.categoryTypeChange()"\n' +
    '                                        ng-model="dashboardCtrl.selectedCategoryType" ng-options="a as a.titleDictionary[selectedLanguage] for a in dashboardCtrl.categoryTypes"></select>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="row" style="padding-bottom: 5px;">\n' +
    '                                <div class="col-md-2 ">\n' +
    '                                    <button ng-click="dashboardCtrl.applySurveyFilter()" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'filterBtn\' | translate}}</button>\n' +
    '                                    <!-- <button ng-click="dashboardCtrl.exportPDF()" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'exportPDFBtn\' | translate}}</button> -->\n' +
    '                                </div>\n' +
    '                                <span ng-show="!showMoreFilterSurvey" ng-click="showMoreFilterSurvey = !showMoreFilterSurvey" style="cursor: pointer">{{\'moreFilter\'|translate}}</span>\n' +
    '                                <span ng-show="showMoreFilterSurvey" ng-click="showMoreFilterSurvey = !showMoreFilterSurvey" style="cursor: pointer">{{\'lessFilter\'|translate}}</span>\n' +
    '                            </div>\n' +
    '                        \n' +
    '                            <div class="total-sales" ng-show="dashboardCtrl.questionList.length<=0">\n' +
    '                                <br>\n' +
    '                                <span>{{\'NoQuestionsAvailable\' | translate}}</span>\n' +
    '                            </div>\n' +
    '                        \n' +
    '                            <ul id="surveyDiv">\n' +
    '                        \n' +
    '                                <li ng-repeat="(k,v) in dashboardCtrl.questionList| groupBy: \'categoryId\'">\n' +
    '                                    <div style="cursor: pointer; background-color: #ccc;">\n' +
    '                        \n' +
    '                                        <h2 style="padding: 7px" ng-init="t = false" ng-click="t=!t">\n' +
    '                                            {{v[0].category.titleDictionary[selectedLanguage]}}\n' +
    '                                        </h2>\n' +
    '                                    </div>\n' +
    '                                    <ul ng-show="t">\n' +
    '                                        <li ng-repeat="ques in v">\n' +
    '                                            <!-- <button class="accordion">{{ques.titleDictionary[selectedLanguage]}}</button> -->\n' +
    '                                            <div style="cursor: pointer;    background-color: #ccc;">\n' +
    '                        \n' +
    '                                                <h3 style="padding: 4px" ng-click="ques.showAnswer=!ques.showAnswer;ques.showAnswer?dashboardCtrl.getQuestionDashbard(ques):ques.showAnswer=ques.showAnswer">\n' +
    '                                                    {{ques.titleDictionary[selectedLanguage]}}\n' +
    '                                                </h3>\n' +
    '                                            </div>\n' +
    '                                            <div ng-show="ques.showAnswer">\n' +
    '                                                <div style="text-align: center;">\n' +
    '                                                    <img ng-show="ques.isloading" src="assets/img/loading.gif" style="height: 80px;">\n' +
    '                                                </div>\n' +
    '                                                <span ng-if="!ques.isloading" ng-show="(ques.data.length == 0 && ques.questionTypeId ==0) \n' +
    '                                                    || (ques.questionTypeId == 1 && ques.dashboard.oneStartCount == 0 && ques.dashboard.twoStartCount == 0 && ques.dashboard.threeStartCount == 0 && ques.dashboard.fourStartCount == 0 && ques.dashboard.fiveStartCount == 0)\n' +
    '                                                    || (ques.questionTypeId == 2 && ques.dashboard.likeCount == 0 && ques.dashboard.disLikeCount == 0 )\n' +
    '                                                    ">{{\'noAnswersLbl\'|translate}}</span>\n' +
    '                                                <div ng-if="!ques.isloading &&  \n' +
    '                                                ((ques.questionTypeId == 1 && (ques.dashboard.oneStartCount != 0 || ques.dashboard.twoStartCount != 0 || ques.dashboard.threeStartCount != 0 || ques.dashboard.fourStartCount != 0 || ques.dashboard.fiveStartCount != 0))\n' +
    '                                                ||(ques.questionTypeId == 2 && (ques.dashboard.likeCount != 0 || ques.dashboard.disLikeCount != 0 ))\n' +
    '                                                || (ques.data.length > 0 && ques.questionTypeId ==0))">\n' +
    '                                                    <nvd3 style="direction: ltr" options="ques.options" data="ques.data"></nvd3>\n' +
    '                                                </div>\n' +
    '                                                <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-show="!ques.isloading  && \n' +
    '                                                (ques.questionTypeId == 1 && (ques.dashboard.oneStartCount != 0 || ques.dashboard.twoStartCount != 0 || ques.dashboard.threeStartCount != 0 || ques.dashboard.fourStartCount != 0 || ques.dashboard.fiveStartCount != 0))"\n' +
    '                                                    ng-if="ques.questionTypeId == 1">\n' +
    '                                                    <div class="table-responsive">\n' +
    '                                                        <table class="table pmd-table table-hover">\n' +
    '                                                            <thead>\n' +
    '                                                                <tr>\n' +
    '                                                                    <th>\n' +
    '                                                                        <jk-rating-stars rating="1" max-rating="5" read-only="true" class="my-custom-stars "></jk-rating-stars>\n' +
    '                                                                    </th>\n' +
    '                                                                    <th>\n' +
    '                                                                        <jk-rating-stars rating="2" max-rating="5" read-only="true" class="my-custom-stars "></jk-rating-stars>\n' +
    '                                                                    </th>\n' +
    '                                                                    <th>\n' +
    '                                                                        <jk-rating-stars rating="3" max-rating="5" read-only="true" class="my-custom-stars "></jk-rating-stars>\n' +
    '                                                                    </th>\n' +
    '                                                                    <th>\n' +
    '                                                                        <jk-rating-stars rating="4" max-rating="5" read-only="true" class="my-custom-stars "></jk-rating-stars>\n' +
    '                                                                    </th>\n' +
    '                                                                    <th>\n' +
    '                                                                        <jk-rating-stars rating="5" max-rating="5" read-only="true" class="my-custom-stars "></jk-rating-stars>\n' +
    '                                                                    </th>\n' +
    '                                                                    <th>{{\'averageLbl\' | translate}}</th>\n' +
    '                                                                    <th></th>\n' +
    '                                                                </tr>\n' +
    '                                                            </thead>\n' +
    '                                                            <tbody>\n' +
    '                                                                <tr>\n' +
    '                                                                    <td>{{ques.dashboard.oneStartCount}}</td>\n' +
    '                                                                    <td>{{ques.dashboard.twoStartCount}}</td>\n' +
    '                                                                    <td>{{ques.dashboard.threeStartCount}}</td>\n' +
    '                                                                    <td>{{ques.dashboard.fourStartCount}}</td>\n' +
    '                                                                    <td>{{ques.dashboard.fiveStartCount}}</td>\n' +
    '                                                                    <td>{{ques.dashboard.average | number:2}}</td>\n' +
    '                                                                </tr>\n' +
    '                                                            </tbody>\n' +
    '                                                        </table>\n' +
    '                                                    </div>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                        \n' +
    '                                        </li>\n' +
    '                        \n' +
    '                                    </ul>\n' +
    '                                </li>\n' +
    '                            </ul>\n' +
    '                            <canvas id="cc"></canvas>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/item/templates/Item.html',
    '<div>\n' +
    '    <div style="margin-bottom:10px">\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" ng-click="$state.go(\'newItem\',{categoryId: $stateParams.categoryId});" class="btn pmd-ripple-effect btn-primary pmd-z-depth"\n' +
    '            type="button">{{\'AddItemBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-if="itemCtrl.items.results.length == 0">\n' +
    '        <span>{{\'NoItemAvailable\' | translate}}</span>\n' +
    '    </div>\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="itemCtrl.items.results.length > 0">\n' +
    '        <div class="table-responsive">\n' +
    '            <table class="table pmd-table table-hover">\n' +
    '                <thead>\n' +
    '                    <tr>\n' +
    '                        <th>{{\'Name\' | translate}}</th>\n' +
    '                        <th>{{\'DescriptionLbl\' | translate}}</th>\n' +
    '                        <th>{{\'status\' | translate}}</th>\n' +
    '                        <th></th>\n' +
    '                    </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                    <tr ng-repeat="item in itemCtrl.items.results">\n' +
    '                        <td data-title="Name" width="15%">{{item.itemNameDictionary[selectedLanguage] | limitTo:10}}</td>\n' +
    '                        <td data-title="Description">{{item.itemDescriptionDictionary[selectedLanguage] | limitTo:50}}</td>\n' +
    '\n' +
    '                        <td>\n' +
    '                            <!-- <input type="checkbox" ng-model="item.isActive" name="name" ng-click="itemCtrl.UpdateStatus(item)"\n' +
    '                                title="click To Update user status"> -->\n' +
    '\n' +
    '                            <div class="btn-switch" ng-class="{\'btn-switch--on\':item.isActive}" ng-model="item.isActive"\n' +
    '                                ng-click="itemCtrl.UpdateStatus(item)">\n' +
    '\n' +
    '                                <div class="btn-switch-circle" ng-class="{\'btn-switch-circle--on\':item.isActive}"\n' +
    '                                    ng-model="item.isActive" ng-click="itemCtrl.UpdateStatus(item)">\n' +
    '                                </div>\n' +
    '\n' +
    '                        </td>\n' +
    '                        <td width="10%">\n' +
    '                            <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="$state.go(\'editItem\',{categoryId:item.categoryId,itemId:item.itemId});">mode_edit</i>\n' +
    '\n' +
    '\n' +
    '                            <!-- <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="$state.go(\'editItem\',{itemId:item.itemId,itemId:item.itemId});">mode_edit</i> -->\n' +
    '                            <i class="material-icons pmd-md deleteButton cursorPointer font25" ng-click="itemCtrl.openDeleteDialog(item,item.itemNameDictionary[selectedLanguage],item.itemId)">delete</i>\n' +
    '                        </td>\n' +
    '                    </tr>\n' +
    '                </tbody>\n' +
    '            </table>\n' +
    '        </div>\n' +
    '        <div style="text-align:center;" paging page="1" page-size="10" total="itemCtrl.items.totalCount" paging-action="itemCtrl.changePage( page)"\n' +
    '            flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/item/templates/edit.html',
    '<div class="modal-content">\n' +
    '	<div class="modal-header bordered">\n' +
    '		<h2 class="pmd-card-title-text">{{\'UpdateItemLbl\' | translate}}</h2>\n' +
    '	</div>\n' +
    '	<div class="modal-body">\n' +
    '		<form class="form-horizontal" name="editItemForm">\n' +
    '\n' +
    '			<div>\n' +
    '				<ul class="nav nav-tabs" role="tablist">\n' +
    '					<li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editItemCtrl.language">\n' +
    '						<a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab"\n' +
    '							data-toggle="tab">\n' +
    '							{{lang.value | translate}}\n' +
    '						</a>\n' +
    '					</li>\n' +
    '				</ul>\n' +
    '				<div class="pmd-card">\n' +
    '					<div class="pmd-card-body">\n' +
    '						<div class="tab-content">\n' +
    '							<div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}"\n' +
    '								ng-repeat="lang in editItemCtrl.language" id="{{lang.value}}-form">\n' +
    '								<div\n' +
    '									class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '									<label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '									<input required type="text" class="mat-input form-control"\n' +
    '										name="itemNameDictionary{{lang.value+\'Name\'}}"\n' +
    '										ng-model="editItemCtrl.item.itemNameDictionary[lang.key]" ng-minlength="3"\n' +
    '										ng-maxlength="100">\n' +
    '									<div ng-messages="editItemForm.itemNameDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '										<div\n' +
    '											ng-show="editItemForm.itemNameDictionary{{lang.value+\'Name\'}}.$error.required && !editItemForm.itemNameDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\'\n' +
    '											| translate}}</div>\n' +
    '										<div\n' +
    '											ng-show="(editItemForm.itemNameDictionary{{lang.value+\'Name\'}}.$error.minlength || editItemForm.itemNameDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editItemForm.itemNameDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError\'\n' +
    '											| translate}}</div>\n' +
    '									</div>\n' +
    '								</div>\n' +
    '								<div\n' +
    '									class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '									<label for="first-name">{{ lang.value+\'DescriptionLbl\' | translate}}</label>\n' +
    '									<textarea required class="form-control"\n' +
    '										name="itemDescriptionDictionary{{lang.value+\'Name\'}}"\n' +
    '										ng-model="editItemCtrl.item.itemDescriptionDictionary[lang.key]"\n' +
    '										ng-minlength="3" ng-maxlength="300"></textarea>\n' +
    '									<div\n' +
    '										ng-messages="editItemForm.itemDescriptionDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '										<div\n' +
    '											ng-show="editItemForm.itemDescriptionDictionary{{lang.value+\'Name\'}}.$error.required && !editItemForm.itemDescriptionDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\'\n' +
    '											| translate}}</div>\n' +
    '										<div\n' +
    '											ng-show="(editItemForm.itemDescriptionDictionary{{lang.value+\'Name\'}}.$error.minlength || editItemForm.itemDescriptionDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editItemForm.itemDescriptionDictionary{{lang.value+\'Name\'}}.$error.required">{{\'DescLengthError\'\n' +
    '											| translate}}</div>\n' +
    '									</div>\n' +
    '								</div>\n' +
    '							</div>\n' +
    '						</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '			<div class="row">\n' +
    '\n' +
    '				<div\n' +
    '					class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'itemSize\' | translate}} </label>\n' +
    '					<input type="number" class="mat-input form-control" name="itemSize"\n' +
    '						ng-model="editItemCtrl.item.itemSize" min="0" ng-maxlength="5">\n' +
    '					<div ng-messages="editItemForm.itemSize.$error">\n' +
    '\n' +
    '						<div ng-if="editItemForm.itemSize.$error.maxlength">{{\'itemSizeLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '				<div\n' +
    '					class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'fat\' | translate}} </label>\n' +
    '					<input type="number" class="mat-input form-control" name="fat" ng-model="editItemCtrl.item.fat"\n' +
    '						min="0" ng-maxlength="5">\n' +
    '					<div ng-messages="editItemForm.fat.$error">\n' +
    '						<div ng-if="editItemForm.fat.$error.maxlength">{{\'fatLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '				<div\n' +
    '					class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'carbs\' | translate}} </label>\n' +
    '					<input type="number" class="mat-input form-control" name="carbs" ng-model="editItemCtrl.item.carbs"\n' +
    '						min="0" ng-maxlength="5">\n' +
    '					<div ng-messages="editItemForm.carbs.$error">\n' +
    '						<div ng-if="editItemForm.carbs.$error.maxlength">{{\'carbsLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '				<div\n' +
    '					class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'calories\' | translate}} </label>\n' +
    '					<input type="number" class="mat-input form-control" name="calories"\n' +
    '						ng-model="editItemCtrl.item.calories" min="0" ng-maxlength="5">\n' +
    '					<div ng-messages="editItemForm.calories.$error">\n' +
    '						<div ng-if="editItemForm.calories.$error.maxlength">{{\'caloriesLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '\n' +
    '				<div\n' +
    '					class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'protein\' | translate}} </label>\n' +
    '					<input type="number" class="mat-input form-control" name="protein"\n' +
    '						ng-model="editItemCtrl.item.protein" min="0" ng-maxlength="5">\n' +
    '					<div ng-messages="editItemForm.protein.$error">\n' +
    '						<div ng-if="editItemForm.protein.$error.maxlength">{{\'proteinLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '			</div>\n' +
    '			<div class="row">\n' +
    '				<div\n' +
    '					class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'costlbl\' | translate}} </label>\n' +
    '					<input type="number" class="mat-input form-control" name="cost" required\n' +
    '						ng-model="editItemCtrl.item.cost" min="1" ng-maxlength="12">\n' +
    '					<div ng-messages="editItemForm.cost.$error">\n' +
    '						<div ng-if="editItemForm.cost.$error.required && !editItemForm.cost.$pristine">\n' +
    '							{{\'requiredErr\' | translate}}</div>\n' +
    '						<div ng-if="editItemForm.cost.$error.maxlength">{{\'costLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '				<div\n' +
    '					class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'Pricelbl\' | translate}} </label>\n' +
    '					<input type="number" ng-change="editItemCtrl.calclulate()" class="mat-input form-control" required\n' +
    '						name="price" ng-model="editItemCtrl.item.price" min="1" ng-maxlength="12">\n' +
    '					<div ng-messages="editItemForm.price.$error">\n' +
    '						<div ng-if="editItemForm.price.$error.required && !editItemForm.price.$pristine">\n' +
    '							{{\'requiredErr\' | translate}}</div>\n' +
    '						<div ng-if="editItemForm.price.$error.maxlength">{{\'PriceLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '				<div\n' +
    '					class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '					<label for="first-name">{{\'vat\' | translate}} </label>\n' +
    '					<input type="number" ng-change="editItemCtrl.calclulate()" class="mat-input form-control" name="vat"\n' +
    '						ng-model="editItemCtrl.item.vat" min="0" ng-maxlength="5">\n' +
    '					<div ng-messages="editItemForm.vat.$error">\n' +
    '						<div ng-if="editItemForm.vat.$error.maxlength">{{\'vatLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '				<div\n' +
    '					class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'Total\' | translate}} </label>\n' +
    '					<input type="number" readonly class="mat-input form-control" name="totalPrice" required\n' +
    '						ng-model="editItemCtrl.item.totalPrice" min="1" ng-maxlength="12">\n' +
    '					<div ng-messages="editItemForm.totalPrice.$error">\n' +
    '						<div ng-if="editItemForm.totalPrice.$error.required && !editItemForm.totalPrice.$pristine">{{\'requiredErr\' |\n' +
    '							translate}}</div>\n' +
    '						<div ng-if="editItemForm.totalPrice.$error.maxlength">{{\'totalPriceLengthError\' | translate}}\n' +
    '						</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '\n' +
    '			<div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '				<input id="itemImage" name="itemImage" style="display: none;"\n' +
    '					onchange="angular.element(this).scope().AddItemImage(this.files)" type="file">\n' +
    '				<button ng-click="editItemCtrl.LoadUploadLogo()">{{\'UploadImageBtn\' | translate}}</button>\n' +
    '				<span> <i class="material-icons md-dark pmd-md warrningIcon">warning</i>\n' +
    '					{{\'RecommendedItemImage1\' | translate}}</span>\n' +
    '				<img ng-show="editItemCtrl.item.imageUrl != null " ng-src="{{editItemCtrl.item.imageUrl}}"\n' +
    '					style="max-height: 200px;max-width: 200px;">\n' +
    '\n' +
    '			</div>\n' +
    '\n' +
    '\n' +
    '		</form>\n' +
    '	</div>\n' +
    '	<div class="pmd-modal-action text-right">\n' +
    '\n' +
    '		<button style="background-color: #e4e5e6;color: black!important;"\n' +
    '			ng-disabled="editItemForm.$invalid || editItemCtrl.disable" class="btn pmd-ripple-effect btn-primary"\n' +
    '			type="button" ng-click="editItemCtrl.updateItem()">{{\'saveChangesBtn\'\n' +
    '			|\n' +
    '			translate}}</button>\n' +
    '		<button class="btn pmd-ripple-effect btn-default" type="button" ng-click="editItemCtrl.close()">{{\'DiscardBtn\' |\n' +
    '			translate}}</button>\n' +
    '	</div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/item/templates/new.html',
    '<div class="modal-content">\n' +
    '	<div class="modal-header bordered">\n' +
    '		<h2 class="pmd-card-title-text">{{\'NewItemtLbl\' | translate}}</h2>\n' +
    '	</div>\n' +
    '	<div class="modal-body">\n' +
    '		<form class="form-horizontal" name="newItemForm">\n' +
    '			<div>\n' +
    '				<ul class="nav nav-tabs" role="tablist">\n' +
    '					<li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newItemCtrl.language">\n' +
    '						<a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '							{{lang.value | translate}}\n' +
    '						</a>\n' +
    '					</li>\n' +
    '				</ul>\n' +
    '				<div class="pmd-card">\n' +
    '					<div class="pmd-card-body">\n' +
    '						<div class="tab-content">\n' +
    '							<div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newItemCtrl.language"\n' +
    '							 id="{{lang.value}}-form">\n' +
    '								<div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '									<label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '									<input required type="text" class="mat-input form-control" name="itemNameDictionary{{lang.value+\'Name\'}}"\n' +
    '									 ng-model="newItemCtrl.itemNameDictionary[lang.key]" ng-minlength="3" ng-maxlength="100">\n' +
    '									<div ng-messages="newItemForm.itemNameDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '										<div ng-show="newItemForm.itemNameDictionary{{lang.value+\'Name\'}}.$error.required && !newItemForm.itemNameDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\'\n' +
    '											| translate}}</div>\n' +
    '										<div ng-show="(newItemForm.itemNameDictionary{{lang.value+\'Name\'}}.$error.minlength || newItemForm.itemNameDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newItemForm.itemNameDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError\'\n' +
    '											| translate}}</div>\n' +
    '									</div>\n' +
    '								</div>\n' +
    '								<div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '									<label for="first-name">{{ lang.value+\'DescriptionLbl\' | translate}}</label>\n' +
    '									<textarea required class="form-control" name="itemDescriptionDictionary{{lang.value+\'Name\'}}" ng-model="newItemCtrl.itemDescriptionDictionary[lang.key]"\n' +
    '									 ng-minlength="3" ng-maxlength="300"></textarea>\n' +
    '									<div ng-messages="newItemForm.itemDescriptionDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '										<div ng-show="newItemForm.itemDescriptionDictionary{{lang.value+\'Name\'}}.$error.required && !newItemForm.itemDescriptionDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\'\n' +
    '											| translate}}</div>\n' +
    '										<div ng-show="(newItemForm.itemDescriptionDictionary{{lang.value+\'Name\'}}.$error.minlength || newItemForm.itemDescriptionDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newItemForm.itemDescriptionDictionary{{lang.value+\'Name\'}}.$error.required">{{\'DescLengthError\'\n' +
    '											| translate}}</div>\n' +
    '									</div>\n' +
    '								</div>\n' +
    '							</div>\n' +
    '						</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '			<div class="row">\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'itemSize\' | translate}} </label>\n' +
    '					<input type="number" class="mat-input form-control" name="itemSize" ng-model="newItemCtrl.itemSize" min="1"\n' +
    '					 ng-maxlength="5">\n' +
    '					<div ng-messages="newItemForm.itemSize.$error">\n' +
    '						<div ng-if="newItemForm.itemSize.$error.required && !newItemForm.itemSize.$pristine">{{\'requiredErr\' |\n' +
    '							translate}}</div>\n' +
    '						<div ng-if="newItemForm.itemSize.$error.maxlength">{{\'itemSizeLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'fat\' | translate}} </label>\n' +
    '					<input type="number" class="mat-input form-control" name="fat" ng-model="newItemCtrl.fat" min="1" ng-maxlength="5">\n' +
    '					<div ng-messages="newItemForm.fat.$error">\n' +
    '						<div ng-if="newItemForm.fat.$error.required && !newItemForm.fat.$pristine">{{\'requiredErr\' |\n' +
    '							translate}}</div>\n' +
    '						<div ng-if="newItemForm.fat.$error.maxlength">{{\'fatLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'carbs\' | translate}} </label>\n' +
    '					<input type="number" class="mat-input form-control" name="carbs" ng-model="newItemCtrl.carbs" min="1" ng-maxlength="5">\n' +
    '					<div ng-messages="newItemForm.carbs.$error">\n' +
    '						<div ng-if="newItemForm.carbs.$error.required && !newItemForm.carbs.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '						<div ng-if="newItemForm.carbs.$error.maxlength">{{\'carbsLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'calories\' | translate}} </label>\n' +
    '					<input type="number" class="mat-input form-control" name="calories" ng-model="newItemCtrl.calories" min="1"\n' +
    '					 ng-maxlength="5">\n' +
    '					<div ng-messages="newItemForm.calories.$error">\n' +
    '						<div ng-if="newItemForm.calories.$error.required && !newItemForm.calories.$pristine">{{\'requiredErr\' |\n' +
    '							translate}}</div>\n' +
    '						<div ng-if="newItemForm.calories.$error.maxlength">{{\'caloriesLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed"><label\n' +
    '					 for="first-name">{{\'protein\' | translate}} </label>\n' +
    '					<input type="number" class="mat-input form-control" name="protein" ng-model="newItemCtrl.protein" min="1"\n' +
    '					 ng-maxlength="5">\n' +
    '					<div ng-messages="newItemForm.protein.$error">\n' +
    '						<div ng-if="newItemForm.protein.$error.required && !newItemForm.protein.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '						<div ng-if="newItemForm.protein.$error.maxlength">{{\'proteinLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '			</div>\n' +
    '			<div class="row">\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'costlbl\' | translate}} </label>\n' +
    '					<input required type="number" class="mat-input form-control" name="cost" ng-model="newItemCtrl.cost" min="1"\n' +
    '					 ng-maxlength="12">\n' +
    '					<div ng-messages="newItemForm.cost.$error">\n' +
    '						<div ng-if="newItemForm.cost.$error.required && !newItemForm.cost.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '						<div ng-if="newItemForm.cost.$error.maxlength">{{\'costLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'Pricelbl\' | translate}} </label>\n' +
    '					<input required type="number" class="mat-input form-control" name="price" ng-change="newItemCtrl.calclulate()"\n' +
    '					 ng-model="newItemCtrl.price" min="1" ng-maxlength="12">\n' +
    '					<div ng-messages="newItemForm.price.$error">\n' +
    '						<div ng-if="newItemForm.price.$error.required && !newItemForm.price.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '						<div ng-if="newItemForm.price.$error.maxlength">{{\'PriceLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '					<label for="first-name">{{\'vat\' | translate}} </label>\n' +
    '					<input type="number" ng-change="newItemCtrl.calclulate()" class="mat-input form-control" name="vat" ng-model="newItemCtrl.vat"\n' +
    '					 min="1" ng-maxlength="3">\n' +
    '					<div ng-messages="newItemForm.vat.$error">\n' +
    '						<div ng-if="newItemForm.vat.$error.required && !newItemForm.vat.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '						<div ng-if="newItemForm.vat.$error.maxlength">{{\'vatLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '					<label for="first-name">{{\'Total\' | translate}} </label>\n' +
    '					<input required type="number" readonly class="mat-input form-control" name="totalPrice" ng-model="newItemCtrl.totalPrice"\n' +
    '					 min="1" ng-maxlength="12">\n' +
    '					<div ng-messages="newItemForm.totalPrice.$error">\n' +
    '						<div ng-if="newItemForm.totalPrice.$error.required && !newItemForm.totalPrice.$pristine">{{\'requiredErr\' |\n' +
    '							translate}}</div>\n' +
    '						<div ng-if="newItemForm.totalPrice.$error.maxlength">{{\'totalPriceLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '\n' +
    '\n' +
    '			<div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '				<input id="itemImage" name="itemImage" style="display: none;" onchange="angular.element(this).scope().AddItemImage(this.files)"\n' +
    '				 type="file" required>\n' +
    '				<button ng-click="newItemCtrl.LoadUploadLogo()">{{\'UploadImageBtn\' | translate}}</button>\n' +
    '				<span> <i class="material-icons md-dark pmd-md warrningIcon">warning</i> {{\'RecommendedItemImage1\' | translate}}</span>\n' +
    '				<img ng-src="{{newItemCtrl.itemImage}}" style="max-height: 139px;max-width: 423px;">\n' +
    '				<div ng-messages="newItemForm.itemImage.$error">\n' +
    '					<div ng-if="newItemForm.itemImage.$error.required">{{\'requiredErr\' | translate}}</div>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '\n' +
    '		</form>\n' +
    '	</div>\n' +
    '	<div class="pmd-modal-action text-right">\n' +
    '		<button style="background-color: #e4e5e6;color: black!important;" ng-disabled="newItemForm.$invalid || newItemCtrl.disable"\n' +
    '		 class="btn pmd-ripple-effect btn-primary" type="button" ng-click="newItemCtrl.addNewItem()">{{\'saveChangesBtn\' |\n' +
    '			translate}}</button>\n' +
    '		<button class="btn pmd-ripple-effect btn-default" type="button" ng-click="newItemCtrl.close()">{{\'DiscardBtn\' |\n' +
    '			translate}}</button>\n' +
    '	</div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/meal/templates/Meal.html',
    '<div>\n' +
    '    <div style="margin-bottom:10px">\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" ng-click="$state.go(\'newMeal\',{categoryId: $stateParams.categoryId});"\n' +
    '            class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddMealBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-if="mealCtrl.meals.results.length == 0">\n' +
    '        <span>{{\'NoMealAvailable\' | translate}}</span>\n' +
    '    </div>\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="mealCtrl.meals.results.length > 0">\n' +
    '        <div class="table-responsive">\n' +
    '            <table class="table pmd-table table-hover">\n' +
    '                <thead>\n' +
    '                    <tr>\n' +
    '                        <th>{{\'Name\' | translate}}</th>\n' +
    '                        <th>{{\'DescriptionLbl\' | translate}}</th>\n' +
    '                        <th>{{\'status\' | translate}}</th>\n' +
    '                        <th></th>\n' +
    '                    </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                    <tr ng-repeat="meal in mealCtrl.meals.results">\n' +
    '                        <td data-title="Name" width="15%">{{meal.mealNameDictionary[selectedLanguage] | limitTo:10}}</td>\n' +
    '                        <td data-title="Description">{{meal.mealDescriptionDictionary[selectedLanguage] | limitTo:50}}</td>\n' +
    '\n' +
    '                        <td>\n' +
    '                            <!-- <input type="checkbox" ng-model="meal.isActive" name="name" ng-click="mealCtrl.UpdateStatus(meal)"\n' +
    '                                title="click To Update user status"> -->\n' +
    '\n' +
    '                            <div class="btn-switch" ng-class="{\'btn-switch--on\':meal.isActive}" ng-model="meal.isActive"\n' +
    '                                ng-click="mealCtrl.UpdateStatus(meal)">\n' +
    '\n' +
    '                                <div class="btn-switch-circle" ng-class="{\'btn-switch-circle--on\':meal.isActive}"\n' +
    '                                    ng-model="meal.isActive" ng-click="mealCtrl.UpdateStatus(meal)">\n' +
    '                                </div>\n' +
    '\n' +
    '                        </td>\n' +
    '                        <td width="10%">\n' +
    '                            <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="$state.go(\'editMeal\',{categoryId:meal.categoryId,mealId:meal.mealId});">mode_edit</i>\n' +
    '\n' +
    '\n' +
    '                            <!-- <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="$state.go(\'editMeal\',{mealId:meal.mealId,mealId:meal.mealId});">mode_edit</i> -->\n' +
    '                            <i class="material-icons pmd-md deleteButton cursorPointer font25" ng-click="mealCtrl.openDeleteDialog(meal,meal.mealNameDictionary[selectedLanguage],meal.mealId)">delete</i>\n' +
    '                        </td>\n' +
    '                    </tr>\n' +
    '                </tbody>\n' +
    '            </table>\n' +
    '        </div>\n' +
    '        <div style="text-align:center;" paging page="1" page-size="10" total="mealCtrl.meals.totalCount" paging-action="mealCtrl.changePage( page)"\n' +
    '            flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/meal/templates/edit.html',
    '<script type="text/javascript">\n' +
    '	$(document).ready(function () {\n' +
    '		$(".select-add-tags").select2({\n' +
    '			tags: true,\n' +
    '			theme: "bootstrap",\n' +
    '			insertTag: function (data, tag) {\n' +
    '				// Insert the tag at the end of the results\n' +
    '				data.push(tag);\n' +
    '			}\n' +
    '		});\n' +
    '	});\n' +
    '</script>\n' +
    '<div class="modal-content">\n' +
    '	<div class="modal-header bordered">\n' +
    '		<h2 class="pmd-card-title-text">{{\'UpdateMealLbl\' | translate}}</h2>\n' +
    '	</div>\n' +
    '	<div class="modal-body">\n' +
    '		<form class="form-horizontal" name="editMealForm">\n' +
    '\n' +
    '			<div>\n' +
    '				<ul class="nav nav-tabs" role="tablist">\n' +
    '					<li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editMealCtrl.language">\n' +
    '						<a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '							{{lang.value | translate}}\n' +
    '						</a>\n' +
    '					</li>\n' +
    '				</ul>\n' +
    '				<div class="pmd-card">\n' +
    '					<div class="pmd-card-body">\n' +
    '						<div class="tab-content">\n' +
    '							<div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editMealCtrl.language"\n' +
    '							 id="{{lang.value}}-form">\n' +
    '								<div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '									<label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '									<input required type="text" class="mat-input form-control" name="mealNameDictionary{{lang.value+\'Name\'}}"\n' +
    '									 ng-model="editMealCtrl.meal.mealNameDictionary[lang.key]" ng-minlength="3" ng-maxlength="100">\n' +
    '									<div ng-messages="editMealForm.mealNameDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '										<div ng-show="editMealForm.mealNameDictionary{{lang.value+\'Name\'}}.$error.required && !editMealForm.mealNameDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\'\n' +
    '											| translate}}</div>\n' +
    '										<div ng-show="(editMealForm.mealNameDictionary{{lang.value+\'Name\'}}.$error.minlength || editMealForm.mealNameDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editMealForm.mealNameDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError\'\n' +
    '											| translate}}</div>\n' +
    '									</div>\n' +
    '								</div>\n' +
    '								<div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '									<label for="first-name">{{ lang.value+\'DescriptionLbl\' | translate}}</label>\n' +
    '									<textarea required class="form-control" name="mealDescriptionDictionary{{lang.value+\'Name\'}}" ng-model="editMealCtrl.meal.mealDescriptionDictionary[lang.key]"\n' +
    '									 ng-minlength="3" ng-maxlength="300"></textarea>\n' +
    '									<div ng-messages="editMealForm.mealDescriptionDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '										<div ng-show="editMealForm.mealDescriptionDictionary{{lang.value+\'Name\'}}.$error.required && !editMealForm.mealDescriptionDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\'\n' +
    '											| translate}}</div>\n' +
    '										<div ng-show="(editMealForm.mealDescriptionDictionary{{lang.value+\'Name\'}}.$error.minlength || editMealForm.mealDescriptionDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editMealForm.mealDescriptionDictionary{{lang.value+\'Name\'}}.$error.required">{{\'DescLengthError\'\n' +
    '											| translate}}</div>\n' +
    '									</div>\n' +
    '								</div>\n' +
    '							</div>\n' +
    '						</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '			<div class="row">\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'SelectItems\' | translate}}</label>\n' +
    '					<select style="width:100% !important" class="form-control select-add-tags pmd-select2-tags" multiple ng-model="editMealCtrl.itemModel"\n' +
    '					 ng-change="editMealCtrl.addItemToList(editMealCtrl.itemModel)" required ng-options="item as item.itemNameDictionary[selectedLanguage] \n' +
    '							 group by item.category.titleDictionary[selectedLanguage]\n' +
    '							for item  in editMealCtrl.itemsList">\n' +
    '					</select>\n' +
    '				</div>\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '					<table class="table pmd-table table-hover">\n' +
    '						<thead>\n' +
    '							<tr>\n' +
    '								<th>{{\'Name\' | translate}}</th>\n' +
    '								<th>{{\'carb\' | translate}}</th>\n' +
    '								<th>{{\'calories\' | translate}}</th>\n' +
    '								<th>{{\'protein\' | translate}}</th>\n' +
    '								<th>{{\'costlbl\' | translate}}</th>\n' +
    '								<th>{{\'Pricelbl\' | translate}}</th>\n' +
    '								<th>{{\'vat\' | translate}}</th>\n' +
    '								<th>{{\'total\' | translate}}</th>\n' +
    '								<th></th>\n' +
    '							</tr>\n' +
    '						</thead>\n' +
    '						<tbody>\n' +
    '							<tr ng-repeat="meal in editMealCtrl.itemModel">\n' +
    '								<td data-title="Name" width="15%">{{meal.itemNameDictionary[selectedLanguage] | limitTo:10}}</td>\n' +
    '								<td data-title="Description">{{meal.carbs}}</td>\n' +
    '								<td data-title="Description">{{meal.calories}}</td>\n' +
    '								<td data-title="Description">{{meal.protein}}</td>\n' +
    '								<td data-title="Description">{{meal.cost}}</td>\n' +
    '								<td data-title="Description">{{meal.price}}</td>\n' +
    '								<td data-title="Description">{{meal.vat}}</td>\n' +
    '								<td data-title="totalPrice">{{meal.totalPrice}}</td>\n' +
    '\n' +
    '							</tr>\n' +
    '						</tbody>\n' +
    '					</table>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '			<div class="row">\n' +
    '\n' +
    '				<!-- <div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'mealSize\' | translate}} </label>\n' +
    '					<input type="number" class="mat-input form-control" name="mealSize" ng-model="editMealCtrl.meal.mealSize" min="1"\n' +
    '					 ng-maxlength="5">\n' +
    '					<div ng-messages="editMealForm.mealSize.$error">\n' +
    '						<div ng-if="editMealForm.mealSize.$error.required && !editMealForm.mealSize.$pristine">{{\'requiredErr\' |\n' +
    '							translate}}</div>\n' +
    '						<div ng-if="editMealForm.mealSize.$error.maxlength">{{\'mealSizeLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div> -->\n' +
    '\n' +
    '\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'carbs\' | translate}} </label>\n' +
    '					<input type="number" readonly class="mat-input form-control" name="carbs" ng-model="editMealCtrl.meal.carbs" min="1"\n' +
    '					 ng-maxlength="5">\n' +
    '					<div ng-messages="editMealForm.carbs.$error">\n' +
    '						<div ng-if="editMealForm.carbs.$error.required && !editMealForm.carbs.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '						<div ng-if="editMealForm.carbs.$error.maxlength">{{\'carbsLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'calories\' | translate}} </label>\n' +
    '					<input type="number" readonly class="mat-input form-control" name="calories" ng-model="editMealCtrl.meal.calories"\n' +
    '					 min="1" ng-maxlength="5">\n' +
    '					<div ng-messages="editMealForm.calories.$error">\n' +
    '						<div ng-if="editMealForm.calories.$error.required && !editMealForm.calories.$pristine">{{\'requiredErr\' |\n' +
    '							translate}}</div>\n' +
    '						<div ng-if="editMealForm.calories.$error.maxlength">{{\'caloriesLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed"><label\n' +
    '					 for="first-name">{{\'protein\' | translate}} </label>\n' +
    '					<input type="number" readonly class="mat-input form-control" name="protein" ng-model="editMealCtrl.meal.protein"\n' +
    '					 min="1" ng-maxlength="5">\n' +
    '					<div ng-messages="editMealForm.protein.$error">\n' +
    '						<div ng-if="editMealForm.protein.$error.required && !editMealForm.protein.$pristine">{{\'requiredErr\' |\n' +
    '							translate}}</div>\n' +
    '						<div ng-if="editMealForm.protein.$error.maxlength">{{\'proteinLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '			</div>\n' +
    '			<div class="row">\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'costlbl\' | translate}} </label>\n' +
    '					<input type="number" readonly class="mat-input form-control" name="cost" ng-model="editMealCtrl.meal.cost" min="1"\n' +
    '					 ng-maxlength="5">\n' +
    '					<div ng-messages="editMealForm.cost.$error">\n' +
    '						<div ng-if="editMealForm.cost.$error.required && !editMealForm.cost.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '						<div ng-if="editMealForm.cost.$error.maxlength">{{\'costLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'Pricelbl\' | translate}} </label>\n' +
    '					<input type="number" readonly ng-change="editMealCtrl.calclulate()" class="mat-input form-control" name="price"\n' +
    '					 ng-model="editMealCtrl.meal.price" min="1" ng-maxlength="5">\n' +
    '					<div ng-messages="editMealForm.price.$error">\n' +
    '						<div ng-if="editMealForm.price.$error.required && !editMealForm.price.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '						<div ng-if="editMealForm.price.$error.maxlength">{{\'PriceLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '					<label for="first-name">{{\'vat\' | translate}} </label>\n' +
    '					<input type="number" readonly ng-change="editMealCtrl.calclulate()" class="mat-input form-control" name="vat"\n' +
    '					 ng-model="editMealCtrl.meal.vat" min="1" ng-maxlength="5">\n' +
    '					<div ng-messages="editMealForm.vat.$error">\n' +
    '						<div ng-if="editMealForm.vat.$error.required && !editMealForm.vat.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '						<div ng-if="editMealForm.vat.$error.maxlength">{{\'vatLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '					<label for="first-name">{{\'Total\' | translate}} </label>\n' +
    '					<input type="number" readonly class="mat-input form-control" name="totalPrice" ng-model="editMealCtrl.meal.totalPrice"\n' +
    '					 min="1" ng-maxlength="5">\n' +
    '					<div ng-messages="editMealForm.totalPrice.$error">\n' +
    '						<div ng-if="editMealForm.totalPrice.$error.required && !editMealForm.totalPrice.$pristine">{{\'requiredErr\' |\n' +
    '							translate}}</div>\n' +
    '						<div ng-if="editMealForm.totalPrice.$error.maxlength">{{\'totalPriceLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '					<label for="first-name">{{\'mealDiscount\' | translate}} </label>\n' +
    '					<input type="number" ng-change="editMealCtrl.calclulateDiscount()" class="mat-input form-control" name="mealDiscount"\n' +
    '					 ng-model="editMealCtrl.meal.mealDiscount" min="1" ng-maxlength="3">\n' +
    '					<div ng-messages="editMealForm.meal.mealDiscount.$error">\n' +
    '						<div ng-if="editMealForm.meal.mealDiscount.$error.maxlength">{{\'mealDiscountLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '					<label for="first-name">{{\'mealtotalDiscount\' | translate}} </label>\n' +
    '					<input type="number" ng-change="editMealCtrl.calclulatetotalDiscount()" class="mat-input form-control" name="mealtotalDiscount"\n' +
    '					 ng-model="editMealCtrl.mealtotalDiscount" min="1" ng-maxlength="5">\n' +
    '					<div ng-messages="editMealForm.mealtotalDiscount.$error">\n' +
    '						<div ng-if="editMealForm.mealtotalDiscount.$error.maxlength">{{\'mealtotalDiscountLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '\n' +
    '			<div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '				<input id="mealImage" name="mealImage" style="display: none;" onchange="angular.element(this).scope().AddMealImage(this.files)"\n' +
    '				 type="file">\n' +
    '				<button ng-click="editMealCtrl.LoadUploadLogo()">{{\'UploadImageBtn\' | translate}}</button>\n' +
    '				<span> <i class="material-icons md-dark pmd-md warrningIcon">warning</i> {{\'RecommendedMealImage1\' | translate}}</span>\n' +
    '				<img ng-show="editMealCtrl.meal.imageUrl != null" ng-src="{{editMealCtrl.meal.imageUrl}}" style="max-height: 200px;max-width: 200px;">\n' +
    '\n' +
    '			</div>\n' +
    '\n' +
    '\n' +
    '		</form>\n' +
    '	</div>\n' +
    '	<div class="pmd-modal-action text-right">\n' +
    '		<button style="background-color: #e4e5e6;color: black!important;" ng-disabled="editMealForm.$invalid" class="btn pmd-ripple-effect btn-primary"\n' +
    '		 type="button" ng-click="editMealCtrl.updateMeal()">{{\'saveChangesBtn\'\n' +
    '			|\n' +
    '			translate}}</button>\n' +
    '		<button class="btn pmd-ripple-effect btn-default" type="button" ng-click="editMealCtrl.close()">{{\'DiscardBtn\' |\n' +
    '			translate}}</button>\n' +
    '	</div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/meal/templates/new.html',
    '<script type="text/javascript">\n' +
    '	$(document).ready(function () {\n' +
    '		$(".select-add-tags").select2({\n' +
    '			tags: true,\n' +
    '			theme: "bootstrap",\n' +
    '			insertTag: function (data, tag) {\n' +
    '				// Insert the tag at the end of the results\n' +
    '				data.push(tag);\n' +
    '			}\n' +
    '		});\n' +
    '	});\n' +
    '</script>\n' +
    '<div class="modal-content">\n' +
    '	<div class="modal-header bordered">\n' +
    '		<h2 class="pmd-card-title-text">{{\'NewMealtLbl\' | translate}}</h2>\n' +
    '	</div>\n' +
    '	<div class="modal-body">\n' +
    '		<form class="form-horizontal" name="newMealForm">\n' +
    '			<div>\n' +
    '				<ul class="nav nav-tabs" role="tablist">\n' +
    '					<li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newMealCtrl.language">\n' +
    '						<a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '							{{lang.value | translate}}\n' +
    '						</a>\n' +
    '					</li>\n' +
    '				</ul>\n' +
    '				<div class="pmd-card">\n' +
    '					<div class="pmd-card-body">\n' +
    '						<div class="tab-content">\n' +
    '							<div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in newMealCtrl.language"\n' +
    '							 id="{{lang.value}}-form">\n' +
    '								<div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '									<label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '									<input required type="text" class="mat-input form-control" name="mealNameDictionary{{lang.value+\'Name\'}}"\n' +
    '									 ng-model="newMealCtrl.mealNameDictionary[lang.key]" ng-minlength="3" ng-maxlength="100">\n' +
    '									<div ng-messages="newMealForm.mealNameDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '										<div ng-show="newMealForm.mealNameDictionary{{lang.value+\'Name\'}}.$error.required && !newMealForm.mealNameDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\'\n' +
    '											| translate}}</div>\n' +
    '										<div ng-show="(newMealForm.mealNameDictionary{{lang.value+\'Name\'}}.$error.minlength || newMealForm.mealNameDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newMealForm.mealNameDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError\'\n' +
    '											| translate}}</div>\n' +
    '									</div>\n' +
    '								</div>\n' +
    '								<div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '									<label for="first-name">{{ lang.value+\'DescriptionLbl\' | translate}}</label>\n' +
    '									<textarea required class="form-control" name="mealDescriptionDictionary{{lang.value+\'Name\'}}" ng-model="newMealCtrl.mealDescriptionDictionary[lang.key]"\n' +
    '									 ng-minlength="3" ng-maxlength="300"></textarea>\n' +
    '									<div ng-messages="newMealForm.mealDescriptionDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '										<div ng-show="newMealForm.mealDescriptionDictionary{{lang.value+\'Name\'}}.$error.required && !newMealForm.mealDescriptionDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\'\n' +
    '											| translate}}</div>\n' +
    '										<div ng-show="(newMealForm.mealDescriptionDictionary{{lang.value+\'Name\'}}.$error.minlength || newMealForm.mealDescriptionDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newMealForm.mealDescriptionDictionary{{lang.value+\'Name\'}}.$error.required">{{\'DescLengthError\'\n' +
    '											| translate}}</div>\n' +
    '									</div>\n' +
    '								</div>\n' +
    '							</div>\n' +
    '						</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '			<div class="row">\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'SelectItems\' | translate}}</label>\n' +
    '					<select style="width:100% !important" class="form-control select-add-tags pmd-select2-tags" multiple ng-model="newMealCtrl.itemModel"\n' +
    '					 ng-change="newMealCtrl.addItemToList(newMealCtrl.itemModel)" required ng-options="item as item.itemNameDictionary[selectedLanguage] \n' +
    '							group by item.category.titleDictionary[selectedLanguage]\n' +
    '							for item  in newMealCtrl.itemsList">\n' +
    '					</select>\n' +
    '				</div>\n' +
    '				<div class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '					<table class="table pmd-table table-hover">\n' +
    '						<thead>\n' +
    '							<tr>\n' +
    '								<th>{{\'Name\' | translate}}</th>\n' +
    '								<th>{{\'carb\' | translate}}</th>\n' +
    '								<th>{{\'calories\' | translate}}</th>\n' +
    '								<th>{{\'protein\' | translate}}</th>\n' +
    '								<th>{{\'costlbl\' | translate}}</th>\n' +
    '								<th>{{\'Pricelbl\' | translate}}</th>\n' +
    '								<th>{{\'vat\' | translate}}</th>\n' +
    '								<th>{{\'total\' | translate}}</th>\n' +
    '								<th></th>\n' +
    '							</tr>\n' +
    '						</thead>\n' +
    '						<tbody>\n' +
    '							<tr ng-repeat="meal in newMealCtrl.itemModel">\n' +
    '								<td data-title="Name" width="15%">{{meal.itemNameDictionary[selectedLanguage] | limitTo:10}}</td>\n' +
    '								<td data-title="Description">{{meal.carbs}}</td>\n' +
    '								<td data-title="Description">{{meal.calories}}</td>\n' +
    '								<td data-title="Description">{{meal.protein}}</td>\n' +
    '								<td data-title="Description">{{meal.cost}}</td>\n' +
    '								<td data-title="Description">{{meal.price}}</td>\n' +
    '								<td data-title="Description">{{meal.vat}}</td>\n' +
    '								<td data-title="totalPrice">{{meal.totalPrice}}</td>\n' +
    '\n' +
    '							</tr>\n' +
    '						</tbody>\n' +
    '					</table>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '			<div class="row">\n' +
    '\n' +
    '				<!-- <div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'mealSize\' | translate}} </label>\n' +
    '					<input type="number" class="mat-input form-control" name="mealSize" ng-model="newMealCtrl.mealSize" min="1"\n' +
    '					 ng-maxlength="5">\n' +
    '					<div ng-messages="newMealForm.mealSize.$error">\n' +
    '						<div ng-if="newMealForm.mealSize.$error.required && !newMealForm.mealSize.$pristine">{{\'requiredErr\' |\n' +
    '							translate}}</div>\n' +
    '						<div ng-if="newMealForm.mealSize.$error.maxlength">{{\'mealSizeLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div> -->\n' +
    '\n' +
    '\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'carbs\' | translate}} </label>\n' +
    '					<input type="number" readonly class="mat-input form-control" name="carbs" ng-model="newMealCtrl.carbs" min="1"\n' +
    '					 ng-maxlength="5">\n' +
    '					<div ng-messages="newMealForm.carbs.$error">\n' +
    '						<div ng-if="newMealForm.carbs.$error.required && !newMealForm.carbs.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '						<div ng-if="newMealForm.carbs.$error.maxlength">{{\'carbsLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'calories\' | translate}} </label>\n' +
    '					<input type="number" readonly class="mat-input form-control" name="calories" ng-model="newMealCtrl.calories" min="1"\n' +
    '					 ng-maxlength="5">\n' +
    '					<div ng-messages="newMealForm.calories.$error">\n' +
    '						<div ng-if="newMealForm.calories.$error.required && !newMealForm.calories.$pristine">{{\'requiredErr\' |\n' +
    '							translate}}</div>\n' +
    '						<div ng-if="newMealForm.calories.$error.maxlength">{{\'caloriesLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed"><label\n' +
    '					 for="first-name">{{\'protein\' | translate}} </label>\n' +
    '					<input type="number" readonly class="mat-input form-control" name="protein" ng-model="newMealCtrl.protein" min="1"\n' +
    '					 ng-maxlength="5">\n' +
    '					<div ng-messages="newMealForm.protein.$error">\n' +
    '						<div ng-if="newMealForm.protein.$error.required && !newMealForm.protein.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '						<div ng-if="newMealForm.protein.$error.maxlength">{{\'proteinLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '			</div>\n' +
    '			<div class="row">\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'costlbl\' | translate}} </label>\n' +
    '					<input type="number" readonly class="mat-input form-control" name="cost" ng-model="newMealCtrl.cost" min="1"\n' +
    '					 ng-maxlength="12">\n' +
    '					<div ng-messages="newMealForm.cost.$error">\n' +
    '						<div ng-if="newMealForm.cost.$error.required && !newMealForm.cost.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '						<div ng-if="newMealForm.cost.$error.maxlength">{{\'costLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'Pricelbl\' | translate}} </label>\n' +
    '					<input type="number" readonly class="mat-input form-control" name="price" ng-change="newMealCtrl.calclulate()"\n' +
    '					 ng-model="newMealCtrl.price" min="1" ng-maxlength="12">\n' +
    '					<div ng-messages="newMealForm.price.$error">\n' +
    '						<div ng-if="newMealForm.price.$error.required && !newMealForm.price.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '						<div ng-if="newMealForm.price.$error.maxlength">{{\'PriceLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '					<label for="first-name">{{\'vat\' | translate}} </label>\n' +
    '					<input type="number" readonly ng-change="newMealCtrl.calclulate()" class="mat-input form-control" name="vat"\n' +
    '					 ng-model="newMealCtrl.vat" min="1" ng-maxlength="3">\n' +
    '					<div ng-messages="newMealForm.vat.$error">\n' +
    '						<div ng-if="newMealForm.vat.$error.required && !newMealForm.vat.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '						<div ng-if="newMealForm.vat.$error.maxlength">{{\'vatLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '					<label for="first-name">{{\'Total\' | translate}} </label>\n' +
    '					<input type="number" readonly class="mat-input form-control" name="totalPrice" ng-model="newMealCtrl.totalPrice"\n' +
    '					 min="1" ng-maxlength="12">\n' +
    '					<div ng-messages="newMealForm.totalPrice.$error">\n' +
    '						<div ng-if="newMealForm.totalPrice.$error.required && !newMealForm.totalPrice.$pristine">{{\'requiredErr\' |\n' +
    '							translate}}</div>\n' +
    '						<div ng-if="newMealForm.totalPrice.$error.maxlength">{{\'totalPriceLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '					<label for="first-name">{{\'mealDiscount\' | translate}} </label>\n' +
    '					<input type="number" ng-change="newMealCtrl.calclulateDiscount()" class="mat-input form-control" name="mealDiscount"\n' +
    '					 ng-model="newMealCtrl.mealDiscount" min="1" ng-maxlength="3">\n' +
    '					<div ng-messages="newMealForm.mealDiscount.$error">\n' +
    '						<div ng-if="newMealForm.mealDiscount.$error.maxlength">{{\'mealDiscountLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '					<label for="first-name">{{\'mealtotalDiscount\' | translate}} </label>\n' +
    '					<input type="number" ng-change="newMealCtrl.calclulatetotalDiscount()" class="mat-input form-control" name="mealtotalDiscount"\n' +
    '					 ng-model="newMealCtrl.mealtotalDiscount" min="1" ng-maxlength="12">\n' +
    '					<div ng-messages="newMealForm.mealtotalDiscount.$error">\n' +
    '						<div ng-if="newMealForm.mealtotalDiscount.$error.maxlength">{{\'mealtotalDiscountLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '			</div>\n' +
    '\n' +
    '			<div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '				<input id="mealImage" name="mealImage" style="display: none;" onchange="angular.element(this).scope().AddMealImage(this.files)"\n' +
    '				 type="file" required>\n' +
    '				<button ng-click="newMealCtrl.LoadUploadLogo()">{{\'UploadImageBtn\' | translate}}</button>\n' +
    '				<span> <i class="material-icons md-dark pmd-md warrningIcon">warning</i> {{\'RecommendedMealImage1\' | translate}}</span>\n' +
    '				<img ng-src="{{newMealCtrl.mealImage}}" style="max-height: 139px;max-width: 423px;">\n' +
    '				<div ng-messages="newMealForm.mealImage.$error">\n' +
    '					<div ng-if="newMealForm.mealImage.$error.required">{{\'requiredErr\' | translate}}</div>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '\n' +
    '		</form>\n' +
    '	</div>\n' +
    '	<div class="pmd-modal-action text-right">\n' +
    '		<button style="background-color: #e4e5e6;color: black!important;" ng-disabled="newMealForm.$invalid" class="btn pmd-ripple-effect btn-primary"\n' +
    '		 type="button" ng-click="newMealCtrl.addNewMeal()">{{\'saveChangesBtn\' |\n' +
    '			translate}}</button>\n' +
    '		<button class="btn pmd-ripple-effect btn-default" type="button" ng-click="newMealCtrl.close()">{{\'DiscardBtn\' |\n' +
    '			translate}}</button>\n' +
    '	</div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/setting/templates/editBranchFees.html',
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <button class="close" type="button" ng-click="editBranchFeesCtrl.close()">×</button>\n' +
    '        <h2 class="pmd-card-title-text">{{\'UpdateDeliveryFees\' | translate}}</h2>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="editFeesForm" autocomplete="off">\n' +
    '\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'DeliveryCost\' | translate}}</label>\n' +
    '                <input required type="number" class="mat-input form-control" name="minDays" ng-model="branch.deliveryCost"\n' +
    '                    ng-minlength="1" ng-maxlength="2">\n' +
    '                <div ng-messages="editFeesForm.minDays.$error" class="error">\n' +
    '                    <div ng-if="editFeesForm.minDays.$error.required && !editFeesForm.minDays.$pristine">{{\'minDaysReqError\' | translate}}</div>\n' +
    '                    <div ng-if="(editFeesForm.minDays.$error.minlength || editFeesForm.minDays.$error.maxlength)">{{\'minDaysLengthError\' | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'DeliveryPrice\' | translate}}</label>\n' +
    '                <input required type="number" class="mat-input form-control" name="minDays" ng-model="branch.deliveryPrice"\n' +
    '                    ng-minlength="1" ng-maxlength="2">\n' +
    '                <div ng-messages="editFeesForm.minDays.$error" class="error">\n' +
    '                    <div ng-if="editFeesForm.minDays.$error.required && !editFeesForm.minDays.$pristine">{{\'minDaysReqError\' | translate}}</div>\n' +
    '                    <div ng-if="(editFeesForm.minDays.$error.minlength || editFeesForm.minDays.$error.maxlength)">{{\'minDaysLengthError\' | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '        <div class="pmd-modal-action text-right">\n' +
    '            <button ng-disabled="editFeesForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="editBranchFeesCtrl.UpdateFees()">{{\'Edit\' | translate}}</button>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/setting/templates/setting.html',
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
    '        $(".select-add-tags").select2({\n' +
    '            tags: true,\n' +
    '            theme: "bootstrap",\n' +
    '            insertTag: function (data, tag) {\n' +
    '                // Insert the tag at the end of the results\n' +
    '                data.push(tag);\n' +
    '                // console.log(data);\n' +
    '            }\n' +
    '        });\n' +
    '\n' +
    '        $(".select-tags").select2({\n' +
    '            tags: false,\n' +
    '            theme: "bootstrap",\n' +
    '        });\n' +
    '\n' +
    '        $(".select-with-search").select2({\n' +
    '            theme: "bootstrap"\n' +
    '        });\n' +
    '    });\n' +
    '</script>\n' +
    '<form class="form-horizontal" name="settingForm">\n' +
    '    <div ng-if="settingsPrepService.isActive == undefined">\n' +
    '        <div>\n' +
    '            {{\'SendVer\' | translate}}\n' +
    '            <br>\n' +
    '            <label>\n' +
    '                <input type="radio" ng-model="settingCtrl.orderType.type" value="none"> {{\'None\' | translate}}\n' +
    '            </label>\n' +
    '            <br/>\n' +
    '            <label>\n' +
    '                <input type="radio" ng-model="settingCtrl.orderType.type" value="sms"> {{\'SMS\' | translate}}\n' +
    '            </label>\n' +
    '            <br/>\n' +
    '            <label>\n' +
    '                <input type="radio" ng-model="settingCtrl.orderType.type" value="mail"> {{\'Mail\' | translate}}\n' +
    '            </label>\n' +
    '            <br/>\n' +
    '            <label>\n' +
    '                <input type="radio" ng-model="settingCtrl.orderType.type" value="both"> {{\'Both\' | translate}}\n' +
    '            </label>\n' +
    '            <br/>\n' +
    '        </div>\n' +
    '\n' +
    '        <!-- <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Currency\' | translate}}</label>\n' +
    '        <select style="width:100% !important" class="form-control select-add-tags pmd-select2-tags" multiple ng-model="settingCtrl.currency"\n' +
    '            ng-options="curr as curr.currencyCode for curr in currencyPrepService">\n' +
    '        </select>\n' +
    '    </div> -->\n' +
    '\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'MinDaysPerProg\' | translate}}</label>\n' +
    '            <input required type="number" class="mat-input form-control" name="minDays" ng-model="settingCtrl.minDays" ng-minlength="1"\n' +
    '                ng-maxlength="2">\n' +
    '            <div ng-messages="settingForm.minDays.$error" class="error">\n' +
    '                <div ng-if="settingForm.minDays.$error.required && !settingForm.minDays.$pristine">{{\'minDaysReqError\' | translate}}</div>\n' +
    '                <div ng-if="(settingForm.minDays.$error.minlength || settingForm.minDays.$error.maxlength)">{{\'minDaysLengthError\' | translate}}</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'AllowPause\' | translate}}\n' +
    '                <input type="checkbox" ng-model="settingCtrl.allowPause">\n' +
    '            </label>\n' +
    '            <div ng-if="settingCtrl.allowPause == true" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'MaxPauseDays\' | translate}}</label>\n' +
    '                <input required type="number" class="mat-input form-control" name="maxPause" ng-model="settingCtrl.maxPause" ng-minlength="1"\n' +
    '                    ng-maxlength="2">\n' +
    '                <div ng-messages="settingForm.maxPause.$error" class="error">\n' +
    '                    <div ng-if="settingForm.maxPause.$error.required && !settingForm.maxPause.$pristine">{{\'minDaysReqError\' | translate}}</div>\n' +
    '                    <div ng-if="(settingForm.maxPause.$error.minlength || settingForm.maxPause.$error.maxlength)">{{\'minDaysLengthError\' | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <br>\n' +
    '            <label for="first-name">{{\'AllowHistory\' | translate}}\n' +
    '                <input type="checkbox" ng-model="settingCtrl.allowHistory">\n' +
    '            </label>\n' +
    '        </div>\n' +
    '\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" ng-click="settingCtrl.AddSetting()" class="btn pmd-ripple-effect btn-primary pmd-z-depth ng-binding"\n' +
    '            type="button">Add</button>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-if="settingsPrepService.isActive != undefined">\n' +
    '        <div>\n' +
    '            {{\'SendVer\' | translate}}\n' +
    '            <br>\n' +
    '            <label>\n' +
    '                <input type="radio" ng-model="settingCtrl.orderType.type" value="none"> {{\'None\' | translate}}\n' +
    '            </label>\n' +
    '            <br/>\n' +
    '            <label>\n' +
    '                <input type="radio" ng-model="settingCtrl.orderType.type" value="sms"> {{\'SMS\' | translate}}\n' +
    '            </label>\n' +
    '            <br/>\n' +
    '            <label>\n' +
    '                <input type="radio" ng-model="settingCtrl.orderType.type" value="mail"> {{\'Mail\' | translate}}\n' +
    '            </label>\n' +
    '            <br/>\n' +
    '            <label>\n' +
    '                <input type="radio" ng-model="settingCtrl.orderType.type" value="both"> {{\'Both\' | translate}}\n' +
    '            </label>\n' +
    '            <br/>\n' +
    '        </div>\n' +
    '\n' +
    '        <!-- <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'Currency\' | translate}}</label>\n' +
    '            <select style="width:100% !important" class="form-control select-add-tags pmd-select2-tags" multiple ng-model="settingsPrepService.currencyCode"\n' +
    '                ng-options="curr as curr.currencyCode for curr in currencyPrepService">\n' +
    '            </select>\n' +
    '        </div> -->\n' +
    '\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'MinDaysPerProg\' | translate}}</label>\n' +
    '            <input required type="number" class="mat-input form-control" name="minDays" ng-model="settingsPrepService.minNoDaysPerProgram"\n' +
    '                ng-minlength="1" ng-maxlength="2">\n' +
    '            <div ng-messages="settingForm.minDays.$error" class="error">\n' +
    '                <div ng-if="settingForm.minDays.$error.required && !settingForm.minDays.$pristine">{{\'minDaysReqError\' | translate}}</div>\n' +
    '                <div ng-if="(settingForm.minDays.$error.minlength || settingForm.minDays.$error.maxlength)">{{\'minDaysLengthError\' | translate}}</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'AllowPause\' | translate}}\n' +
    '                <input type="checkbox" ng-model="settingsPrepService.isPause">\n' +
    '            </label>\n' +
    '            <div ng-if="settingsPrepService.isPause == true" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'MaxPauseDays\' | translate}}</label>\n' +
    '                <input required type="number" class="mat-input form-control" name="maxPause" ng-model="settingsPrepService.maxPauseDays"\n' +
    '                    ng-minlength="1" ng-maxlength="2">\n' +
    '                <div ng-messages="settingForm.maxPause.$error" class="error">\n' +
    '                    <div ng-if="settingForm.maxPause.$error.required && !settingForm.maxPause.$pristine">{{\'minDaysReqError\' | translate}}</div>\n' +
    '                    <div ng-if="(settingForm.maxPause.$error.minlength || settingForm.maxPause.$error.maxlength)">{{\'minDaysLengthError\' | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <br>\n' +
    '\n' +
    '            <label for="first-name">{{\'AllowHistory\' | translate}}\n' +
    '                <input type="checkbox" ng-model="settingsPrepService.allowHistory">\n' +
    '            </label>\n' +
    '        </div>\n' +
    '\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" ng-click="settingCtrl.UpdateSetting()" class="btn pmd-ripple-effect btn-primary pmd-z-depth ng-binding"\n' +
    '            type="button">Edit</button>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '    <br>\n' +
    '\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="BranchPrepService.results.length > 0">\n' +
    '        <h2 style="margin-left: 50%">{{\'DeliveryFees\' | translate}}</h2>\n' +
    '        <div class="table-responsive"></div>\n' +
    '        <table class="table pmd-table table-hover">\n' +
    '            <thead>\n' +
    '                <tr>\n' +
    '                    <th>{{\'branchName\' | translate}}</th>\n' +
    '                    <th>{{\'DeliveryCost\' | translate}}</th>\n' +
    '                    <th>{{\'DeliveryPrice\' | translate}}</th>\n' +
    '                    <th></th>\n' +
    '                </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '                <tr ng-repeat="branch in BranchPrepService.results">\n' +
    '                    <td data-title="Name">{{branch.titleDictionary[selectedLanguage]}}</td>\n' +
    '                    <td data-title="Name">{{branch.deliveryCost}}</td>\n' +
    '                    <td data-title="Name">{{branch.deliveryPrice}}</td>\n' +
    '                    <td width="30%" ng-show="!branch.isStatic">\n' +
    '                        <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="EditBranchDialog(branch.branchId)">mode_edit</i>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '            </tbody>\n' +
    '        </table>\n' +
    '    </div>\n' +
    '    <div style="text-align:center;direction: ltr" paging page="1" page-size="10" total="totalCount" paging-action="changePage(page)"\n' +
    '        flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '    </div>\n' +
    '</form>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/user/templates/addUser.html',
    '{{\'BasicInfoLbl\' | translate}}\n' +
    '<form class="form-horizontal" name="newclientForm">\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '        <label for="first-name">{{\'FirstNameLbl\' | translate}}</label>\n' +
    '        <input required type="text" class="mat-input form-control" name="firstName" ng-pattern="/^(\\D)+$/" ng-model="FirstName"\n' +
    '            ng-minlength="3" ng-maxlength="255">\n' +
    '        <div ng-messages="newclientForm.firstName.$error" class="error">\n' +
    '            <div ng-show="newclientForm.firstName.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '            <div ng-if="newclientForm.firstName.$error.required && !newclientForm.firstName.$pristine">{{\'FirstNameLengthError\'\n' +
    '                | translate}}</div>\n' +
    '            <div ng-if="(newclientForm.firstName.$error.minlength || newclientForm.firstName.$error.maxlength) ">{{\'NameLengthError255\'\n' +
    '                | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '        <label for="first-name">{{\'LastNameLbl\' | translate}}</label>\n' +
    '        <input required type="text" class="mat-input form-control" name="lastName" ng-pattern="/^(\\D)+$/" ng-model="LastName"\n' +
    '            ng-minlength="3" ng-maxlength="255">\n' +
    '        <div ng-messages="newclientForm.lastName.$error">\n' +
    '            <div ng-show="newclientForm.lastName.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '            <div ng-if="newclientForm.lastName.$error.required && !newclientForm.lastName.$pristine">{{\'lastName\' |\n' +
    '                translate}}</div>\n' +
    '            <div ng-if="(newclientForm.lastName.$error.minlength || newclientForm.lastName.$error.maxlength)">{{\'NameLengthError255\'\n' +
    '                | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '        <label>{{\'EmailLbl\' | translate}}</label>\n' +
    '        <input required type="text" class="mat-input form-control" name="userEmail" ng-model="Email" ng-pattern="/^\\w+([-+.\']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$/">\n' +
    '        <span class="error" ng-show="newclientForm.userEmail.$error.pattern">{{\'WrongMail\' | translate}} </span>\n' +
    '        <!--\n' +
    '                            <div ng-if="!newclientForm.email.$error.required &amp;&amp;\n' +
    '                            newclientForm.userEmail.$error.email" class="error">{{\'WrongMail\' | translate}}\n' +
    '                            </div> -->\n' +
    '        <div ng-messages="newclientForm.email.$error">\n' +
    '            <div ng-if="newclientForm.userEmail.$error.required && !newclientForm.userEmail.$pristine">{{\'EmailLengthError\'\n' +
    '                | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '\n' +
    '\n' +
    '        <label for="first-name">{{\'phoneLbl\' | translate}}</label>\n' +
    '        <input required type="text" class="mat-input form-control" name="phone" numbers-only ng-model="Phone"\n' +
    '            ng-minlength="10" ng-maxlength="50">\n' +
    '        <!-- <span class="error" ng-show="newclientForm.phone.$error.pattern">{{\'NotPhoneNumber\' | translate}}   </span> -->\n' +
    '        <div ng-messages="newclientForm.phone.$error">\n' +
    '            <div ng-if="newclientForm.phone.$error.required && !newclientForm.phone.$pristine">{{\'PhoneReqError\' |\n' +
    '                translate}}</div>\n' +
    '            <div ng-if="(newclientForm.phone.$error.minlength || newclientForm.phone.$error.maxlength)">{{\'PhoneLengthError\'\n' +
    '                | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '        <label for="first-name">{{\'UserPasswordLbl\' | translate}}</label>\n' +
    '        <input required type="password" class="mat-input form-control" name="password" ng-model="Password" ng-minlength="8"\n' +
    '            ng-maxlength="25">\n' +
    '        <div ng-messages="newclientForm.password.$error">\n' +
    '            <div ng-if="newclientForm.password.$error.required && !newclientForm.password.$pristine">{{\'requiredErr\' |\n' +
    '                translate}}</div>\n' +
    '            <div ng-if="(newclientForm.password.$error.minlength || newclientForm.password.$error.maxlength) && !newclientForm.password.newPassword.$error.required">Password\n' +
    '                length must be 8-25 char.</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '        <label for="first-name">{{\'ConfirmPasswordLbl\' | translate}}</label>\n' +
    '        <input required type="password" class="mat-input form-control" name="confirmPassword" ng-model="confirmPassword"\n' +
    '            equalto="newclientForm.password">\n' +
    '        <div ng-messages="newclientForm.confirmPassword.$error">\n' +
    '            <div ng-if="newclientForm.confirmPassword.$error.required && !newclientForm.confirmPassword.$pristine">{{\'requiredErr\'\n' +
    '                | translate}}</div>\n' +
    '            <div ng-if="newclientForm.confirmPassword.$error.equalto && !newclientForm.confirmPassword.$error.required">{{\'passworddontmatch\'\n' +
    '                | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Country\' | translate}}</label>\n' +
    '        <select style="width:100% !important" class="select-tags form-control pmd-select2-tags" ng-change="userCtrl.countryChange()"\n' +
    '            ng-model="userCtrl.selectedCountryId" ng-options="group.countryId as group.titleDictionary[selectedLanguage] for group in userCtrl.counties">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div ng-show=" userCtrl.selectedCountryId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Region\' | translate}}</label>\n' +
    '        <select style="width:100% !important" class="select-tags form-control pmd-select2-tags" ng-change="userCtrl.regionChange()"\n' +
    '            ng-model="userCtrl.selectedRegionId" ng-options="group.regionId as group.titleDictionary[selectedLanguage] for group in userCtrl.regions">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div ng-show=" userCtrl.selectedRegionId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'City\' | translate}}</label>\n' +
    '        <select style="width:100% !important" class="select-tags form-control pmd-select2-tags" ng-change="userCtrl.cityChange()"\n' +
    '            ng-model="userCtrl.selectedCityId" ng-options="group.cityId as group.titleDictionary[selectedLanguage] for group in userCtrl.cities">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div ng-show=" userCtrl.selectedCityId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Area\' | translate}}</label>\n' +
    '        <select style="width:100% !important" class="select-tags form-control pmd-select2-tags" ng-change="userCtrl.areaChange()"\n' +
    '            ng-model="userCtrl.selectedAreaId" ng-options="group.areaId as group.titleDictionary[selectedLanguage] for group in userCtrl.area">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div ng-show=" userCtrl.selectedAreaId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Branch\' | translate}}</label>\n' +
    '        <select class="form-control select-with-search pmd-select2-tags" ng-change="userCtrl.branchChange()" ng-model="userCtrl.selectedBranchId"\n' +
    '            ng-options="a.branchId as a.titleDictionary[selectedLanguage] for a in userCtrl.branchList"></select>\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label> {{ \'Role\' | translate}} </label>\n' +
    '        <select required style="width:100% !important" class="form-control select-with-search pmd-select2-tags"\n' +
    '            multiple ng-model="userCtrl.selectedUserRoles" ng-options="role as role.titleDictionary[selectedLanguage] for role in roleList"></select>\n' +
    '\n' +
    '    </div>\n' +
    '</form>\n' +
    '\n' +
    '<div class="pmd-modal-action text-right">\n' +
    '    <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="newclientForm.$invalid  || userCtrl.selectedUserRoles > 0 "\n' +
    '        class="btn pmd-ripple-effect btn-primary" type="button" ng-click="AddNewclient()">{{\'saveChangesBtn\' |\n' +
    '        translate}}</button>\n' +
    '    <button class="btn pmd-ripple-effect btn-default" type="button" ng-click="userCtrl.close()">{{\'DiscardBtn\' |\n' +
    '        translate}}</button>\n' +
    '</div>\n' +
    '<!-- \n' +
    '<div class="pmd-modal-action text-right">\n' +
    '    <button ng-disabled="newclientForm.$invalid  && (userCtrl.selectedAreaId <= 0 || userCtrl.selectedBranchId <= 0))"\n' +
    '        class="btn pmd-ripple-effect btn-primary" type="button" ng-click="AddNewclient()">{{\'NextLbl\' | translate}}</button>\n' +
    '</div> -->\n' +
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
    '        // $(".select-add-tags").select2({\n' +
    '        //     tags: true,\n' +
    '        //     theme: "bootstrap",\n' +
    '        //     insertTag: function (data, tag) { \n' +
    '        //         data.push(tag); \n' +
    '        //     }\n' +
    '        // });\n' +
    '        $(".select-tags").select2({\n' +
    '            tags: false,\n' +
    '            theme: "bootstrap",\n' +
    '        })\n' +
    '\n' +
    '        $(".select-with-search").select2({\n' +
    '            theme: "bootstrap"\n' +
    '        });\n' +
    '    });\n' +
    '</script>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/user/templates/editUser.html',
    '{{\'BasicInfoLbl\' | translate}}\n' +
    '<br />\n' +
    '<form class="form-horizontal" name="newclientForm" autocomplete="off">\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'FirstNameLbl\' | translate}}</label>\n' +
    '        <input ng-disabled="true" required type="text" class="mat-input form-control" name="firstName" ng-model="userObj.firstName"\n' +
    '            ng-minlength="3" ng-maxlength="255">\n' +
    '        <div ng-messages="newclientForm.firstName.$error">\n' +
    '            <div ng-if="newclientForm.firstName.$error.required && !newclientForm.firstName.$pristine">{{\'FirstNameLengthError\'\n' +
    '                | translate}}</div>\n' +
    '            <div ng-if="(newclientForm.firstName.$error.minlength || newclientForm.firstName.$error.maxlength) && !newclientForm.firstName.$error.required">{{\'NameLengthError255\'\n' +
    '                | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'LastNameLbl\' | translate}}</label>\n' +
    '        <input ng-disabled="true" required type="text" class="mat-input form-control" name="lastName" ng-model="userObj.lastName"\n' +
    '            ng-minlength="3" ng-maxlength="255">\n' +
    '        <div ng-messages="newclientForm.lastName.$error">\n' +
    '            <div ng-if="newclientForm.lastName.$error.required && !newclientForm.lastName.$pristine">{{\'lastName\' |\n' +
    '                translate}}</div>\n' +
    '            <div ng-if="(newclientForm.lastName.$error.minlength || newclientForm.lastName.$error.maxlength) && !newclientForm.lastName.$error.required">{{\'LastNameLengthError\'\n' +
    '                | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'EmailLbl\' | translate}}</label>\n' +
    '\n' +
    '        <input ng-disabled="true" required type="text" class="mat-input form-control" name="email" ng-model="userObj.email"\n' +
    '            ng-minlength="3" ng-maxlength="50">\n' +
    '        <div ng-messages="newclientForm.email.$error">\n' +
    '            <div ng-if="newclientForm.email.$error.required && !newclientForm.email.$pristine">{{\'lastName\' |\n' +
    '                translate}}</div>\n' +
    '            <div ng-if="(newclientForm.email.$error.minlength || newclientForm.email.$error.maxlength) && !newclientForm.email.$error.required">{{\'LastNameLengthError\'\n' +
    '                | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'phoneLbl\' | translate}}</label>\n' +
    '\n' +
    '        <input ng-disabled="true" required type="text" class="mat-input form-control" numbers-only name="phone"\n' +
    '            ng-model="userObj.phone" ng-pattern="phoneNumbr" ng-minlength="10" ng-maxlength="50">\n' +
    '        <span class="error" ng-show="newclientForm.phone.$error.pattern">{{\'NotPhoneNumber\' | translate}} </span>\n' +
    '        <div ng-messages="newclientForm.phone.$error">\n' +
    '            <div ng-if="newclientForm.phone.$error.required && !newclientForm.phone.$pristine">{{\'PhoneReqError\' |\n' +
    '                translate}}</div>\n' +
    '            <div ng-if="(newclientForm.phone.$error.minlength || newclientForm.phone.$error.maxlength)">{{\'PhoneLengthError\'\n' +
    '                | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'UserPasswordLbl\' | translate}}</label>\n' +
    '\n' +
    '        <input required type="password" class="mat-input form-control" name="password" ng-model="userObj.password"\n' +
    '            ng-minlength="8" ng-maxlength="25">\n' +
    '        <div ng-messages="newclientForm.password.$error">\n' +
    '            <div ng-if="newclientForm.password.$error.required && !newclientForm.password.$pristine">{{\'requiredErr\' |\n' +
    '                translate}}</div>\n' +
    '            <div ng-if="(newclientForm.password.$error.minlength || newclientForm.password.$error.maxlength) && !newclientForm.password.newPassword.$error.required">Password\n' +
    '                length must be 8-25 char.</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'ConfirmPasswordLbl\' | translate}}</label>\n' +
    '        <input required type="password" class="mat-input form-control" name="confirmPassword" ng-model="userObj.confirmPassword"\n' +
    '            equalto="newclientForm.password">\n' +
    '        <div ng-messages="newclientForm.confirmPassword.$error">\n' +
    '            <div ng-if="newclientForm.confirmPassword.$error.required && !newclientForm.confirmPassword.$pristine">{{\'requiredErr\'\n' +
    '                | translate}}</div>\n' +
    '            <div ng-if="newclientForm.confirmPassword.$error.equalto && !newclientForm.confirmPassword.$error.required">{{\'passworddontmatch\'\n' +
    '                | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Country\' | translate}}</label>\n' +
    '        <select ng-required="(selectedType.userTypeId == 3||selectedType.userTypeId == 4)" style="width:100% !important"\n' +
    '            class="select-tags form-control pmd-select2-tags" ng-change="editUserCtrl.countryChange()" ng-model="editUserCtrl.selectedCountryId"\n' +
    '            ng-options="group.countryId as group.titleDictionary[selectedLanguage] for group in editUserCtrl.counties">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div ng-show=" editUserCtrl.selectedCountryId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Region\' | translate}}</label>\n' +
    '        <select ng-required="(selectedType.userTypeId == 3||selectedType.userTypeId == 4)&& editUserCtrl.selectedCountryId > 0"\n' +
    '            style="width:100% !important" class="select-tags form-control pmd-select2-tags" ng-change="editUserCtrl.regionChange()"\n' +
    '            ng-model="editUserCtrl.selectedRegionId" ng-options="group.regionId as group.titleDictionary[selectedLanguage] for group in editUserCtrl.regions">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div ng-show=" editUserCtrl.selectedRegionId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'City\' | translate}}</label>\n' +
    '        <select ng-required="(selectedType.userTypeId == 3||selectedType.userTypeId == 4)&& editUserCtrl.selectedRegionId > 0"\n' +
    '            style="width:100% !important" class="select-tags form-control pmd-select2-tags" ng-change="editUserCtrl.cityChange()"\n' +
    '            ng-model="editUserCtrl.selectedCityId" ng-options="group.cityId as group.titleDictionary[selectedLanguage] for group in editUserCtrl.cities">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div ng-show=" editUserCtrl.selectedCityId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Area\' | translate}}</label>\n' +
    '        <select ng-required="(selectedType.userTypeId == 3||selectedType.userTypeId == 4)&& editUserCtrl.selectedCityId > 0"\n' +
    '            style="width:100% !important" class="select-tags form-control pmd-select2-tags" ng-change="editUserCtrl.areaChange()"\n' +
    '            ng-model="editUserCtrl.selectedAreaId" ng-options="group.areaId as group.titleDictionary[selectedLanguage] for group in editUserCtrl.area">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div ng-show="  editUserCtrl.selectedAreaId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Branch\' | translate}}</label>\n' +
    '        <select ng-required="(selectedType.userTypeId == 3||selectedType.userTypeId == 4) && editUserCtrl.selectedAreaId > 0 "\n' +
    '            class="form-control select-with-search pmd-select2-tags" multiple ng-change="editUserCtrl.branchChange()"\n' +
    '            ng-model="editUserCtrl.selectedBranchId" ng-options="a.branchId as a.titleDictionary[selectedLanguage] for a in editUserCtrl.branchList"></select>\n' +
    '    </div>\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '        <label> {{ \'Role\' | translate}} </label>\n' +
    '        <select required style="width:100% !important" class="form-control select-add-tags pmd-select2-tags" multiple\n' +
    '            ng-model="editUserCtrl.selectedUserRoles" ng-options="role as role.titleDictionary[selectedLanguage] for role in roleList"></select>\n' +
    '\n' +
    '    </div>\n' +
    '</form>\n' +
    '<!-- <div class="pmd-modal-action text-right">\n' +
    '    <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="newclientForm.$invalid || !editUserCtrl.show && editUserCtrl.selectedBranchId <= 0"\n' +
    '        class="btn pmd-ripple-effect btn-primary" type="button" ng-click="Updateclient()">{{\'Edit\' | translate}}</button>\n' +
    '</div> -->\n' +
    '\n' +
    '<div class="pmd-modal-action text-right">\n' +
    '    <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="newclientForm.$invalid || !editUserCtrl.show && editUserCtrl.selectedBranchId <= 0"\n' +
    '        class="btn pmd-ripple-effect btn-primary" type="button" ng-click="Updateclient()">{{\'saveChangesBtn\' |\n' +
    '        translate}}</button>\n' +
    '    <button class="btn pmd-ripple-effect btn-default" type="button" ng-click="editUserCtrl.close()">{{\'DiscardBtn\' |\n' +
    '        translate}}</button>\n' +
    '</div>\n' +
    '\n' +
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
    '        $(".select-add-tags").select2({\n' +
    '            tags: true,\n' +
    '            theme: "bootstrap",\n' +
    '            insertTag: function (data, tag) {\n' +
    '                // Insert the tag at the end of the results\n' +
    '                data.push(tag);\n' +
    '                // console.log(data);\n' +
    '            }\n' +
    '        });\n' +
    '        $(".select-tags").select2({\n' +
    '            tags: false,\n' +
    '            theme: "bootstrap",\n' +
    '        })\n' +
    '\n' +
    '        $(".select-with-search").select2({\n' +
    '            theme: "bootstrap"\n' +
    '        });\n' +
    '    });\n' +
    '</script>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/user/templates/user.html',
    '<div>\n' +
    '    <div style="margin-bottom:10px">\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" ng-click="$state.go(\'addUser\');"\n' +
    '            class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddUserBtn\' | translate}}</button>\n' +
    '\n' +
    '    </div>\n' +
    '    <div ng-if="userCtrl.userList.results.length == 0">\n' +
    '        <span>{{\'NouserAvailable\' | translate}}</span>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="userList.length >0">\n' +
    '\n' +
    '        <div class="table-responsive">\n' +
    '            <table class="table pmd-table table-hover">\n' +
    '                <thead>\n' +
    '                    <tr>\n' +
    '                        <th>{{\'userName\' | translate}}</th>\n' +
    '                        <th>{{\'EmailLbl\' | translate}}</th>\n' +
    '                        <th>{{\'Phone1Lbl\' | translate}}</th>\n' +
    '                        <th>{{\'Status\' | translate}}</th>\n' +
    '                        <th></th>\n' +
    '                    </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                    <tr ng-repeat="user in userList">\n' +
    '                        <td data-title="Name" width="20%">{{user.firstName}} {{user.lastName}}</td>\n' +
    '                        <td data-title="Name" width="20%">{{user.email}} </td>\n' +
    '\n' +
    '                        <td data-title="Description">{{user.phone}}</td>\n' +
    '                        <td>\n' +
    '                            <div class="btn-switch" ng-class="{\'btn-switch--on\':user.isActive}" ng-model="user.isActive"\n' +
    '                                ng-click="userCtrl.UpdateUser(user)">\n' +
    '\n' +
    '                                <div class="btn-switch-circle" ng-class="{\'btn-switch-circle--on\':user.isActive}"\n' +
    '                                    ng-model="user.isActive" ng-click="userCtrl.UpdateUser(user)">\n' +
    '                                </div>\n' +
    '                        </td>\n' +
    '                        <td width="30%">\n' +
    '                            <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="$state.go(\'editUser\', {userId: user.userId});">mode_edit</i>\n' +
    '                            <!-- <i class="material-icons pmd-md deleteButton cursorPointer font25" ng-click="CategoryCtrl.openDeleteDialog(Category,Category.titleDictionary[selectedLanguage],Category.categoryId)">delete</i> -->\n' +
    '                        </td>\n' +
    '                    </tr>\n' +
    '                </tbody>\n' +
    '            </table>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '    <div style="text-align:center;direction: ltr" paging page="1" page-size="10" total="totalCount" paging-action="changePage(page)"\n' +
    '        flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '    </div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/core/Delete/templates/ConfirmDeleteDialog.html',
    '<div class="modal-content">\n' +
    '	<div class="modal-body">{{\'deleteConfirmationLbl\' | translate}}<strong>{{deleteDlCtrl.itemName}}</strong> {{deleteDlCtrl.message}}? </div>\n' +
    '	<div class="pmd-modal-action text-right">\n' +
    '		<button class="btn pmd-ripple-effect btn-primary pmd-btn-flat" type="button" ng-click="deleteDlCtrl.Confirm()">{{\'deleteBtn\' | translate}}</button>\n' +
    '		<button class="btn pmd-ripple-effect btn-default pmd-btn-flat" type="button" ng-click="deleteDlCtrl.close()">{{\'cancelBtn\' | translate}}</button>\n' +
    '	</div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/core/login/templates/login.html',
    '<div class="logincard" ng-if="!isLoggedIn()" style="margin-right: 84px;\n' +
    'margin-left: -140px;">\n' +
    '    <div class="pmd-card card-default pmd-z-depth">\n' +
    '        <div class="login-card">\n' +
    '            <form ng-submit="submit(username,password)" name="loginForm">\n' +
    '                <div class="pmd-card-body">\n' +
    '                    <div class="alert alert-success" role="alert"> Oh snap! Change a few things up and try submitting\n' +
    '                        again. </div>\n' +
    '                    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                        <label for="inputError1" class="control-label pmd-input-group-label">Email</label>\n' +
    '                        <div class="input-group">\n' +
    '                            <div class="input-group-addon"><i class="material-icons md-dark pmd-sm">perm_identity</i></div>\n' +
    '                            <input type="text" class="form-control" id="exampleInputAmount" required name="username"\n' +
    '                                ng-model="username" ng-change="reset()">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                        <label for="inputError1" class="control-label pmd-input-group-label">Password</label>\n' +
    '                        <div class="input-group">\n' +
    '                            <div class="input-group-addon"><i class="material-icons md-dark pmd-sm">lock_outline</i></div>\n' +
    '                            <input required type="password" name="password" ng-model="password" ng-change="reset()"\n' +
    '                                minlength="6" class="form-control">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div ng-if="invalidLoginInfo" class="loginFailed">\n' +
    '                    <span>Incorrect username or password.</span>\n' +
    '                </div>\n' +
    '                <div ng-if="inActiveUser" class="loginFailed">\n' +
    '                    <span>Your Account Is Disabled, Please contact to administrator.</span>\n' +
    '                </div>\n' +
    '                <div class="pmd-card-footer card-footer-no-border card-footer-p16 text-center">\n' +
    '                    <button type="submit" style="color: #ffffff!important;\n' +
    '                    background: #9A3ea6;\n' +
    '                    border-width: 9px!important;\n' +
    '                    border-color: #9a3ea6;\n' +
    '                    border-radius: 100px;\n' +
    '                    letter-spacing: 1px;\n' +
    '                    font-size: 15px;\n' +
    '                    font-family: \'Montserrat\',Helvetica,Arial,Lucida,sans-serif!important;\n' +
    '                    font-weight: 500!important;\n' +
    '                    text-transform: uppercase!important;\n' +
    '                    background-color: #9A3ea6;" class="btn pmd-ripple-effect btn-primary btn-block">Login</button>\n' +
    '                </div>\n' +
    '            </form>\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '    </div>\n' +
    '</div>');
}]);
