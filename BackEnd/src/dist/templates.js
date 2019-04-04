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
    '    <!-- <div ncy-breadcrumb></div> -->\n' +
    '    <div style="margin-bottom:10px">\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" ng-click="$state.go(\'newCategory\');"\n' +
    '            class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddNew\'\n' +
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
    '                        <div class="btn-switch" ng-class="{\'btn-switch--on\':Category.isActive}"\n' +
    '                            ng-model="Category.isActive" ng-click="CategoryCtrl.UpdateCategory(Category)">\n' +
    '\n' +
    '                            <div class="btn-switch-circle" ng-class="{\'btn-switch-circle--on\':Category.isActive}"\n' +
    '                                ng-model="Category.isActive" ng-click="CategoryCtrl.UpdateCategory(Category)">\n' +
    '                            </div>\n' +
    '                    </td>\n' +
    '                    <td width="30%" ng-show="!Category.isStatic">\n' +
    '                        <a ng-click="$state.go(\'Items\', {categoryId: Category.categoryId});" class="cursorPointer">{{\'ItemsBtn\'\n' +
    '                            | translate}}</a>\n' +
    '                        <i class="material-icons md-dark pmd-md cursorPointer font25"\n' +
    '                            ng-click="$state.go(\'editCategory\',{categoryId: Category.categoryId});">mode_edit</i>\n' +
    '                        <i class="material-icons pmd-md deleteButton cursorPointer font25"\n' +
    '                            ng-click="CategoryCtrl.openDeleteDialog(Category,Category.titleDictionary[selectedLanguage],Category.categoryId)">delete</i>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '            </tbody>\n' +
    '        </table>\n' +
    '    </div>\n' +
    '\n' +
    '    <div style="text-align:center;direction: ltr" paging page="1" page-size="10" total="totalCount"\n' +
    '        paging-action="CategoryCtrl.changePage(page)" flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true"\n' +
    '        disabled-class="hide">\n' +
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
    '\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="DeliveryList.results.length > 0">\n' +
    '\n' +
    '        <button class="btn pmd-ripple-effect btn-default" style="background-color: #e4e5e6;color: black!important;"\n' +
    '            type="button" ng-click="changePage(1)">{{\'refresh\' |translate}}</button>\n' +
    '\n' +
    '        <div class="table-responsive"></div>\n' +
    '        <table class="table pmd-table table-hover">\n' +
    '            <thead>\n' +
    '                <tr>\n' +
    '                    <th>{{\'Name\' | translate}}</th>\n' +
    '                    <!-- <th>{{\'phone\' | translate}}</th> -->\n' +
    '                    <th>{{\'orderCode\' | translate}}</th>\n' +
    '                    <th>{{\'Date\' | translate}}</th>\n' +
    '                    <th>{{\'Status\' | translate}}</th>\n' +
    '                    <th></th>\n' +
    '                </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '                <tr ng-repeat-start="delivery in DeliveryList.results">\n' +
    '                    <td data-title="Name">{{delivery.user.firstName}}{{delivery.user.lastName}}</td>\n' +
    '                    <!-- <td data-title="Name">{{delivery.user.phone}}</td> -->\n' +
    '                    <td data-title="Name">#{{delivery.orderCode}} </td>\n' +
    '\n' +
    '                    <td data-title="Name">{{delivery.orderDetails[0].day | date : "d/MMM/yy"}}\n' +
    '                    </td>\n' +
    '                    <td ng-if="delivery.orderDetails[0].status == \'6\'">\n' +
    '                        <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '                            ng-click="deliveryCtrl.changeStatus(delivery.orderDetails[0].orderDetailId,3);"\n' +
    '                            class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">\n' +
    '                            {{\'OnTheWay\' | translate}}</button>\n' +
    '\n' +
    '                    </td>\n' +
    '\n' +
    '                    <td ng-if="delivery.orderDetails[0].status == \'3\'">\n' +
    '                        <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '                            ng-click="deliveryCtrl.changeStatus(delivery.orderDetails[0].orderDetailId,4);"\n' +
    '                            class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">\n' +
    '                            {{\'Deliverd\' | translate}}</button>\n' +
    '                        <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '                            ng-click="deliveryCtrl.changeStatus(delivery.orderDetails[0].orderDetailId,5);"\n' +
    '                            class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">\n' +
    '                            {{\'NotDeliverd\' | translate}}</button>\n' +
    '\n' +
    '                    </td>\n' +
    '                    <td class="pmd-table-row-action">\n' +
    '                        <span href="javascript:void(0);" ng-if="delivery.orderDetails.length >0 "\n' +
    '                            ng-click="delivery.show=!delivery.show;deliveryCtrl.showMore($event)"\n' +
    '                            class="btn pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-default btn-sm child-table-expand direct-expand"><i\n' +
    '                                class="material-icons md-dark pmd-sm"></i></span>\n' +
    '                    </td>\n' +
    '\n' +
    '                </tr>\n' +
    '                <tr ng-repeat-end class="child-table" ng-show="delivery.show">\n' +
    '                    <td colspan="12">\n' +
    '                        <div style="background: white;padding: 5px;" ng-if="request.comment !== null">\n' +
    '                            <h2>{{\'phoneLbl\'|translate}}: </h2>\n' +
    '                            <span>{{delivery.user.phone}}</span>\n' +
    '                        </div>\n' +
    '                        <div style="background: white;padding: 5px;" ng-if="request.comment !== null">\n' +
    '                            <h2>{{\'appartmentNo\'|translate}}: </h2>\n' +
    '                            <span>{{delivery.address.appartmentNo}}</span>\n' +
    '                        </div>\n' +
    '                        <div style="background: white;padding: 5px;" ng-if="request.comment !== null">\n' +
    '                            <h2>{{\'FLoor\'|translate}}: </h2>\n' +
    '                            <span>{{delivery.address.floor}}</span>\n' +
    '                        </div>\n' +
    '                        <div style="background: white;padding: 5px;" ng-if="request.comment !== null">\n' +
    '                            <h2>{{\'description\'|translate}}: </h2>\n' +
    '                            <span>{{delivery.address.description}}</span>\n' +
    '                        </div>\n' +
    '                        <div style="background: white;padding: 5px;" ng-if="request.comment !== null">\n' +
    '                            <h2>{{\'Branch\'|translate}}: </h2>\n' +
    '                            <span>{{delivery.branch.titleDictionary[selectedLanguage]}}</span>\n' +
    '                        </div>\n' +
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
    '                        <label>{{\'OrderCode\' | translate}} </label>\n' +
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
    '                                    <th>{{\'carbs\' | translate}}</th>\n' +
    '                                    <th>{{\'calories\' | translate}}</th>\n' +
    '                                    <th>{{\'protein\' | translate}}</th>\n' +
    '                                    <th>{{\'costlbl\' | translate}}</th>\n' +
    '                                    <th>{{\'Pricelbl\' | translate}}</th>\n' +
    '                                    <th>{{\'vat\' | translate}}</th>\n' +
    '                                    <th>{{\'Total\' | translate}}</th>\n' +
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
    '\n' +
    '\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="kitchenList.results.length > 0">\n' +
    '\n' +
    '        <button class="btn pmd-ripple-effect btn-default" style="background-color: #e4e5e6;color: black!important;"\n' +
    '            type="button" ng-click="changePage(1)">{{\'refresh\' |translate}}</button>\n' +
    '\n' +
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
    '                            {{\'Preperied\' | translate}}</button>\n' +
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
    '                                    <td data-title="Description">{{item.sizeNameDictionary[selectedLanguage]}}</td>\n' +
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
    '                                    <th>{{\'carbs\' | translate}}</th>\n' +
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
    '                                                            <th>{{\'carbs\' | translate}}</th>\n' +
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
    '\n' +
    '    <button class="btn pmd-ripple-effect btn-default" style="background-color: #e4e5e6;color: black!important;"\n' +
    '        type="button" ng-click="changePage(1)">{{\'refresh\' |translate}}</button>\n' +
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
    '                    <td data-title="Name">#{{order.orderCode}}  </td>\n' +
    '\n' +
    '                    <td data-title="Name">{{order.orderDate | date : "d/MMM/yy h:mm a" }} </td>\n' +
    '                    <td data-title="Name">{{order.orderStartDate | date : "d/MMM/yy h:mm a"}} </td>\n' +
    '                    <td data-title="Name">\n' +
    '\n' +
    '                        <h4>{{ order.price}}</h4>\n' +
    '                    </td>\n' +
    '                    <!-- <td ng-hide="order.orderStatus==2"> -->\n' +
    '                    <td>\n' +
    '                        <div ng-hide="order.orderStatus==2">\n' +
    '                            <div class="btn-switch" ng-class="{\'btn-switch--on\':order.isPaid}" ng-model="order.isPaid"\n' +
    '                                ng-click="UpdateOrder(order)">\n' +
    '\n' +
    '                                <div class="btn-switch-circle" ng-class="{\'btn-switch-circle--on\':order.isPaid}"\n' +
    '                                    ng-model="order.isPaid" ng-click="UpdateOrder(order)">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                    </td>\n' +
    '                    <td data-title="Name">\n' +
    '                        <img ng-if="order.isDelivery == true" src="assets\\img\\delivery.png" title="delivery">\n' +
    '                        <img ng-if="order.isDelivery == false" src="assets\\img\\takeaway.png" title="take away"\n' +
    '                            style="width: 44px;height: 39px;">\n' +
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
    '    <div style="text-align:center;direction: ltr" paging page="1" page-size="10" total="totalCount"\n' +
    '        paging-action="changePage(page)" flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true"\n' +
    '        disabled-class="hide">\n' +
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
    '                                ng-readonly="editOrderCtrl.Order.orderStatus==2" ng-change="editOrderCtrl.changeDate" id="startdate"\n' +
    '                                class="form-control" />\n' +
    '                        </div>\n' +
    '\n' +
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
    '                        <label for="first-name">{{\'userName\' | translate}} </label>\n' +
    '                        <label for="first-name" class="mat-input form-control">{{editOrderCtrl.Order.user.firstName}}\n' +
    '                            {{editOrderCtrl.Order.user.lastName}}</label>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div\n' +
    '                        class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label>{{\'OrderCode\' | translate}} </label>\n' +
    '                        <label class="mat-input form-control"> {{editOrderCtrl.Order.orderCode}}</label>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div\n' +
    '                        class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label>{{\'status\' | translate}} </label>\n' +
    '                        <br>\n' +
    '                        <input type="checkbox" ng-model="orderStatus"\n' +
    '                            value="1">{{\'MakeitPrepering\' | translate}}</input>\n' +
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
    '                                    <td data-title="Name" width="15%">{{meal.itemSize.itemNameDictionary[selectedLanguage]\n' +
    '                                        | limitTo:10}}</td>\n' +
    '                                    <td data-title="Description">{{meal.itemSize.carbs}}</td>\n' +
    '                                    <td data-title="Description">{{meal.itemSize.calories}}</td>\n' +
    '                                    <td data-title="Description">{{meal.itemSize.protein}}</td>\n' +
    '                                    <td data-title="Description">{{meal.itemSize.cost}}</td>\n' +
    '                                    <td data-title="Description">{{meal.itemSize.price}}</td>\n' +
    '                                    <td data-title="Description">{{meal.itemSize.vat}}</td>\n' +
    '                                    <td data-title="totalPrice">{{meal.itemSize.totalPrice}}</td>\n' +
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
    '\n' +
    '                                                        <tr ng-repeat="meal in request.meal.mealDetails">\n' +
    '                                                            <td data-title="Name" width="15%">{{meal.itemSize.itemNameDictionary[selectedLanguage]\n' +
    '                                                                | limitTo:10}}</td>\n' +
    '                                                            <td data-title="Description">{{meal.itemSize.carbs}}</td>\n' +
    '                                                            <td data-title="Description">{{meal.itemSize.calories}}</td>\n' +
    '                                                            <td data-title="Description">{{meal.itemSize.protein}}</td>\n' +
    '                                                            <td data-title="Description">{{meal.itemSize.cost}}</td>\n' +
    '                                                            <td data-title="Description">{{meal.itemSize.price}}</td>\n' +
    '                                                            <td data-title="Description">{{meal.itemSize.vat}}</td>\n' +
    '                                                            <td data-title="totalPrice">{{meal.itemSize.totalPrice}}\n' +
    '                                                            </td>\n' +
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
    '                minDate: new Date(),\n' +
    '                //   format: \'DD/MM/YYYY HH:mm:ss\'\n' +
    '                //  format: "DD-MM-YYYY"\n' +
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
  $templateCache.put('./app/GlobalAdmin/Pickup/templates/Pickup.html',
    '<style>\n' +
    '    .hideTogle {\n' +
    '        display: none;\n' +
    '\n' +
    '    }\n' +
    '</style>\n' +
    '<div>\n' +
    '    <div ng-if="PickupList.results.length == 0">\n' +
    '        <span>{{\'NoPickupsAvailable\' | translate}}</span>\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="PickupList.results.length > 0">\n' +
    '        <button class="btn pmd-ripple-effect btn-default" style="background-color: #e4e5e6;color: black!important;"\n' +
    '            type="button" ng-click="changePage(1)">{{\'refresh\' |\n' +
    '                translate}}</button>\n' +
    '\n' +
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
    '                        <div ng-hide="pickup.orderStatus==2">\n' +
    '                            <div class="btn-switch" ng-class="{\'btn-switch--on\':pickup.isPaid}" ng-model="pickup.isPaid"\n' +
    '                                ng-click="UpdatePickup(pickup)">\n' +
    '\n' +
    '                                <div class="btn-switch-circle" ng-class="{\'btn-switch-circle--on\':pickup.isPaid}"\n' +
    '                                    ng-model="pickup.isPaid" ng-click="UpdatePickup(pickup)">\n' +
    '                                </div>\n' +
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
    '\n' +
    '<div class="modal-content">\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-12">\n' +
    '            <div class="modal-header bordered">\n' +
    '                <h2 class="pmd-card-title-text">{{\'ProgramLbl\' | translate}}</h2>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <br>\n' +
    '    <div class="modal-body">\n' +
    '        <div class="row">\n' +
    '            <div class="col-md-12">\n' +
    '                <div id="wizard-container">\n' +
    '                    <div class="getting-started-nav">\n' +
    '                        <ul>\n' +
    '                            <h2 class="page-label">{{\'LETSCREATEPROGRAM\' | translate}}</h2>\n' +
    '                            <div class="nav-seperator"></div>\n' +
    '                            <li ng-class="{\'active\':addProgramCtrl.currentStep ==1}">\n' +
    '                                <span>1</span>\n' +
    '                                <label for="">Baisc Info</label>\n' +
    '                            </li>\n' +
    '                            <li ng-class="{\'active\':addProgramCtrl.currentStep ==2}">\n' +
    '                                <span>2</span>\n' +
    '                                <label for="">Create Meal</label>\n' +
    '                            </li>\n' +
    '                            <li ng-class="{\'active\':addProgramCtrl.currentStep ==3}">\n' +
    '                                <span>3</span>\n' +
    '                                <label for="">Summary</label>\n' +
    '                            </li>\n' +
    '\n' +
    '                        </ul>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <!-- <div id="wizard-step-container">\n' +
    '                    <ul ng-init="counter = 0" class="nav nav-pills nav-justified">\n' +
    '                        <li ng-repeat="step in addProgramCtrl.steps" ng-class="{\'active\':step.step == addProgramCtrl.currentStep}">\n' +
    '                            <a style="background-image: linear-gradient(90deg,#9a3ea6 0%,#bc4abf 100%)!important; color: yellow!important;"\n' +
    '                                ng-click="addProgramCtrl.gotoStep(step.step)" href="">{{\'Step\' | translate}}\n' +
    '                                #{{step.step}} </a>\n' +
    '                        </li>\n' +
    '                    </ul>\n' +
    '                </div> -->\n' +
    '\n' +
    '                    <div id="wizard-content-container">\n' +
    '                        <ng-include src="addProgramCtrl.getStepTemplate()"></ng-include>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div id="wizard-navigation-container" ng-show="false">\n' +
    '                        <div class="pull-right">\n' +
    '                            <span class="btn-group">\n' +
    '                                <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="1 >= addProgramCtrl.currentStep" class="btn btn-default"\n' +
    '                                    name="previous" type="button" ng-click="addProgramCtrl.gotoStep(addProgramCtrl.currentStep - 1)">\n' +
    '                                    <i class="fa fa-arrow-left"></i>{{\'PreviousStep\' | translate}}</button>\n' +
    '                                <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="addProgramCtrl.currentStep >= addProgramCtrl.steps.length"\n' +
    '                                    class="btn btn-primary" name="next" type="button" ng-click="addProgramCtrl.gotoStep(addProgramCtrl.currentStep + 1)">{{\'NextStep\' | translate}}\n' +
    '                                    <i class="fa fa-arrow-right"></i>\n' +
    '                                </button>\n' +
    '                            </span>\n' +
    '                            <!-- {{addProgramCtrl.Setting.minNoDaysPerProgram}} / {{addProgramCtrl.ProgramDaysCount}} -->\n' +
    '                            <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="(addProgramCtrl.currentStep != addProgramCtrl.steps.length) || (addProgramCtrl.Setting.minNoDaysPerProgram > addProgramCtrl.ProgramDaysCount)"\n' +
    '                                class="btn btn-success" name="next" type="button" ng-click="addProgramCtrl.AddNewProgram()">\n' +
    '                                <i class="fa fa-floppy-o"></i>{{\'Save\' | translate}}</button>\n' +
    '                        </div>\n' +
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
    '        $(".select-with-search").select2({\n' +
    '        	theme: "bootstrap"\n' +
    '        });\n' +
    '        // $(".select-tags").select2({\n' +
    '        // 	tags: false,\n' +
    '        // 	theme: "bootstrap",\n' +
    '        // });\n' +
    '        $(".select-add-tags").select2({\n' +
    '            tags: true,\n' +
    '            theme: "bootstrap",\n' +
    '            maximumSelectionLength: 5,\n' +
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
    '            <!-- <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'SelectItems\' | translate}}</label>\n' +
    '                <select required style="width:100% !important" class="form-control select-add-tags pmd-select2-tags" multiple\n' +
    '                    ng-model="itemList" ng-options="item as item.itemNameDictionary[selectedLanguage] \n' +
    '                    group by item.category.titleDictionary[selectedLanguage]\n' +
    '                    for item  in itemsssPrepService">\n' +
    '                </select>\n' +
    '            </div> -->\n' +
    '\n' +
    '            <div class="row">\n' +
    '					<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '							<label for="first-name">{{\'SelectCategory\' | translate}}</label>\n' +
    '							<select style="width:100% !important" class="form-control select-with-search pmd-select2-tags" ng-model="editProgramMealCtrl.selectedCategoryId"\n' +
    '							 ng-change="editProgramMealCtrl.changeCategory(editProgramMealCtrl.selectedCategoryId)">\n' +
    '								<option ng-repeat="category in editProgramMealCtrl.categories" ng-value="{{category.categoryId}}">{{category.titleDictionary[selectedLanguage]}}</option>\n' +
    '							</select>\n' +
    '						</div>\n' +
    '						<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '							<label for="first-name">{{\'SelectItems\' | translate}}</label>\n' +
    '							<select ng-disabled="editProgramMealCtrl.isloading" style="width:100% !important" class="form-control select-with-search pmd-select2-tags" ng-model="editProgramMealCtrl.selectedItem"\n' +
    '							 ng-change="editProgramMealCtrl.changeItem(editProgramMealCtrl.selectedItem.itemId)">\n' +
    '								<option ng-repeat="item in editProgramMealCtrl.items" ng-value="{{item}}">{{item.itemNameDictionary[selectedLanguage]}}</option>\n' +
    '							</select>\n' +
    '						</div>\n' +
    '						<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '							<label for="first-name">{{\'selectSizeLbl\' | translate}}</label>\n' +
    '							<select ng-disabled="editProgramMealCtrl.isloading" style="width:100% !important" class="form-control select-with-search pmd-select2-tags" ng-model="editProgramMealCtrl.selectedItemSize">\n' +
    '								<option ng-repeat="item in editProgramMealCtrl.itemSizes" ng-value="{{item}}">{{item.sizeNameDictionary[selectedLanguage]}}</option>\n' +
    '							</select>\n' +
    '						</div>\n' +
    '		\n' +
    '						<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '							<button style="background-color: #e4e5e6;color: black!important;" ng-disabled="editProgramMealCtrl.selectedCategoryId <= 0 || editProgramMealCtrl.selectedItem == null || editProgramMealCtrl.selectedItemSize == null"\n' +
    '							 class="btn pmd-ripple-effect btn-primary" type="button" ng-click="editProgramMealCtrl.addItemToList(editProgramMealCtrl.selectedItemSize)">\n' +
    '								{{\'addItemBtn\' | translate}}</button>\n' +
    '								<img ng-show="editProgramMealCtrl.isloading" src="assets/img/loading.gif" style="height: 40px;">\n' +
    '\n' +
    '						</div>\n' +
    '\n' +
    '				<!-- <div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'SelectItems\' | translate}}</label>\n' +
    '					<select style="width:100% !important" class="form-control select-add-tags pmd-select2-tags" multiple\n' +
    '						ng-model="editProgramMealCtrl.itemModel" ng-change="editProgramMealCtrl.addItemToList(editProgramMealCtrl.itemModel)"\n' +
    '						required ng-options="item as item.itemNameDictionary[selectedLanguage] \n' +
    '							 group by item.category.titleDictionary[selectedLanguage]\n' +
    '							for item  in editProgramMealCtrl.itemsList">\n' +
    '					</select>\n' +
    '				</div> -->\n' +
    '				\n' +
    '			</div>\n' +
    '			<div class=" form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '					<table class="table pmd-table table-hover">\n' +
    '						<thead>\n' +
    '							<tr>\n' +
    '								<th>{{\'Name\' | translate}}</th>\n' +
    '							<th>{{\'SizeName\' | translate}}</th>\n' +
    '								<th>{{\'carb\' | translate}}</th>\n' +
    '								<th>{{\'calories\' | translate}}</th>\n' +
    '								<th>{{\'protein\' | translate}}</th>\n' +
    '								<!-- <th>{{\'costlbl\' | translate}}</th> -->\n' +
    '								<th>{{\'Pricelbl\' | translate}}</th>\n' +
    '								<th>{{\'vat\' | translate}}</th>\n' +
    '								<th>{{\'total\' | translate}}</th>\n' +
    '								<th></th>\n' +
    '							</tr>\n' +
    '						</thead>\n' +
    '						<tbody>\n' +
    '							<tr ng-repeat="meal in itemList">\n' +
    '								<td data-title="Name" width="15%">\n' +
    '									{{meal.itemNameDictionary[selectedLanguage] | limitTo:10}}</td>\n' +
    '									<td data-title="Description">{{meal.sizeNameDictionary[selectedLanguage]}}</td>\n' +
    '								<td data-title="Description">{{meal.carbs}}</td>\n' +
    '								<td data-title="Description">{{meal.calories}}</td>\n' +
    '								<td data-title="Description">{{meal.protein}}</td>\n' +
    '								<!-- <td data-title="Description">{{meal.cost}}</td> -->\n' +
    '								<td data-title="Description">{{meal.price}}</td>\n' +
    '								<td data-title="Description">{{meal.vat}}</td>\n' +
    '								<td data-title="totalPrice">{{meal.totalPrice}}</td>\n' +
    '								<td><td><i class="material-icons pmd-md deleteButton cursorPointer font25" ng-click="editProgramMealCtrl.removeItem($index)">delete</i></td></td>\n' +
    '							</tr>\n' +
    '						</tbody>\n' +
    '					</table>\n' +
    '				</div>\n' +
    '        </form>\n' +
    '        <div class="pmd-modal-action text-right">\n' +
    '            <button ng-disabled="editProgramDetailsForm.$invalid || itemList.length <= 0" class="btn pmd-ripple-effect btn-primary" type="button"\n' +
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
    '\n' +
    '    <div>\n' +
    '        <ul class="nav nav-tabs" role="tablist">\n' +
    '            <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editProgramCtrl.language">\n' +
    '                <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab"\n' +
    '                    data-toggle="tab">\n' +
    '                    {{lang.value | translate}}\n' +
    '                </a>\n' +
    '            </li>\n' +
    '        </ul>\n' +
    '        <div class="pmd-card">\n' +
    '            <div class="pmd-card-body">\n' +
    '                <div class="tab-content">\n' +
    '                    <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}"\n' +
    '                        ng-repeat="lang in editProgramCtrl.language" id="{{lang.value}}-form">\n' +
    '                        <div\n' +
    '                            class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                            <label for="first-name"> {{ lang.value+\'ProgramName\' | translate}} </label>\n' +
    '\n' +
    '                            <input required Category="text" class="mat-input form-control"\n' +
    '                                name="programNameDictionary{{lang.value+\'Name\'}}"\n' +
    '                                ng-model="editProgramCtrl.programModel.programNameDictionary[lang.key]" ng-minlength="2"\n' +
    '                                ng-maxlength="255">\n' +
    '                            <div ng-messages="editProgramForm.programNameDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '                                <div\n' +
    '                                    ng-show="editProgramForm.programNameDictionary{{lang.value+\'Name\'}}.$error.required && !editProgramForm.programNameDictionary{{lang.value+\'Name\'}}.$pristine">\n' +
    '                                    {{\'requiredErr\' | translate}}</div>\n' +
    '                                <div\n' +
    '                                    ng-show="(editProgramForm.programNameDictionary{{lang.value+\'Name\'}}.$error.minlength || editProgramForm.programNameDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editProgramForm.programNameDictionary{{lang.value+\'Name\'}}.$error.required">\n' +
    '                                    {{\'NameLengthError255\' | translate}}</div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '\n' +
    '                        <div\n' +
    '                            class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                            <label for="first-name"> {{ lang.value+\'ProgramDescription\' | translate}} </label>\n' +
    '                            <input required Category="text" class="mat-input form-control"\n' +
    '                                name="programDescriptionDictionary{{lang.value+\'Name\'}}"\n' +
    '                                ng-model="editProgramCtrl.programModel.programDescriptionDictionary[lang.key]"\n' +
    '                                ng-minlength="2" ng-maxlength="255">\n' +
    '                            <div ng-messages="editProgramForm.programDescriptionDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '                                <div\n' +
    '                                    ng-show="editProgramForm.programDescriptionDictionary{{lang.value+\'Name\'}}.$error.required && !editProgramForm.programDescriptionDictionary{{lang.value+\'Name\'}}.$pristine">\n' +
    '                                    {{\'requiredErr\' | translate}}</div>\n' +
    '                                <div\n' +
    '                                    ng-show="(editProgramForm.programDescriptionDictionary{{lang.value+\'Name\'}}.$error.minlength || editProgramForm.programDescriptionDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editProgramForm.programDescriptionDictionary{{lang.value+\'Name\'}}.$error.required">\n' +
    '                                    {{\'NameLengthError255\' | translate}}</div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'ProgramPrice\' | translate}}</label>\n' +
    '        <input required type="number" ng-change="discountChange();" class="mat-input form-control" name="price"\n' +
    '            ng-model="editProgramCtrl.programModel.price" minlength="1" maxlength="12">\n' +
    '        <div ng-messages="editProgramForm.price.$error" class="error">\n' +
    '            <div ng-if="editProgramForm.price.$error.required && !editProgramForm.price.$pristine">\n' +
    '                {{\'priceReqError\' | translate}}</div>\n' +
    '            <div ng-if="(editProgramForm.price.$error.minlength || editProgramForm.price.$error.maxlength)">\n' +
    '                {{\'priceLengthError\' | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'ProgramDiscount\' | translate}}</label>\n' +
    '        <input required type="number" ng-change="discountChange();" class="mat-input form-control"\n' +
    '            name="programDiscount" ng-model="editProgramCtrl.programModel.programDiscount" minlength="1" maxlength="12">\n' +
    '        <div ng-messages="editProgramForm.programDiscount.$error" class="error">\n' +
    '            <div ng-if="editProgramForm.programDiscount.$error.required && !editProgramForm.programDiscount.$pristine">\n' +
    '                {{\'ProgramDiscountReqError\' | translate}}</div>\n' +
    '            <div\n' +
    '                ng-if="(editProgramForm.programDiscount.$error.minlength || editProgramForm.programDiscount.$error.maxlength)">\n' +
    '                {{\'ProgramDiscountLengthError\' | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <!-- <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'total\' | translate}}</label>\n' +
    '        <input required type="number" ng-change="discountChange();" class="mat-input form-control" name="total"\n' +
    '            ng-model="editProgramCtrl.total" minlength="1" maxlength="12">\n' +
    '        <div ng-messages="editProgramForm.total.$error" class="error">\n' +
    '            <div ng-if="editProgramForm.total.$error.required && !editProgramForm.total.$pristine">\n' +
    '                {{\'totalReqError\' | translate}}</div>\n' +
    '            <div ng-if="(editProgramForm.total.$error.minlength || editProgramForm.total.$error.maxlength)">\n' +
    '                {{\'totalLengthError\' | translate}}</div>\n' +
    '        </div>\n' +
    '    </div> -->\n' +
    '</form>\n' +
    '\n' +
    '<button style="background-color: #e4e5e6 !important; color: black!important" ng-disabled="editProgramForm.$invalid"\n' +
    '    class="btn btn-success" name="next" type="button" ng-click="editProgramCtrl.editProgram()">\n' +
    '    <i class="fa fa-floppy-o"></i>{{\'Save\' | translate}}</button>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Program/templates/newStepOne.html',
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
    '        $(".select-add-tags").select2({\n' +
    '            tags: true,\n' +
    '            theme: "bootstrap",\n' +
    '            maximumSelectionLength: 5,\n' +
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
    '                        <div class="row">\n' +
    '                            <div class="col-md-12">\n' +
    '                                <div class="tab-content">\n' +
    '\n' +
    '                                    <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in addProgramCtrl.language" id="{{lang.value}}-form">\n' +
    '                                        <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                            <label for="first-name"> {{ lang.value+\'ProgramName\' | translate}} </label>\n' +
    '                                            <input required Category="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Name\'}}" ng-model="addProgramCtrl.titleDictionary[lang.key]"\n' +
    '                                                ng-minlength="2" ng-maxlength="255">\n' +
    '                                            <div ng-messages="newProgramFormStepOne.titleDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '                                                <div ng-show="newProgramFormStepOne.titleDictionary{{lang.value+\'Name\'}}.$error.required && !newProgramFormStepOne.titleDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                                <div ng-show="(newProgramFormStepOne.titleDictionary{{lang.value+\'Name\'}}.$error.minlength || newProgramFormStepOne.titleDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newProgramFormStepOne.titleDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '\n' +
    '                                        <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                            <label for="first-name"> {{ lang.value+\'ProgramDescription\' | translate}} </label>\n' +
    '                                            <input required Category="text" class="mat-input form-control" name="descriptionDictionary{{lang.value+\'Name\'}}" ng-model="addProgramCtrl.descriptionDictionary[lang.key]"\n' +
    '                                                ng-minlength="2" ng-maxlength="255">\n' +
    '                                            <div ng-messages="newProgramFormStepOne.descriptionDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '                                                <div ng-show="newProgramFormStepOne.descriptionDictionary{{lang.value+\'Name\'}}.$error.required && !newProgramFormStepOne.descriptionDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                                <div ng-show="(newProgramFormStepOne.descriptionDictionary{{lang.value+\'Name\'}}.$error.minlength || newProgramFormStepOne.descriptionDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newProgramFormStepOne.descriptionDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError255\' | translate}}</div>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="row">\n' +
    '                        <div class="col-md-6 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                            <label for="first-name">{{\'SelectExcludeDays\' | translate}}</label>\n' +
    '                            <select ng-change="addProgramCtrl.ValidateExcludes()" style="width:100% !important" class="form-control select-add-tags"\n' +
    '                                multiple ng-model="addProgramCtrl.SelectedDays" ng-options="day as day.dayNameDictionary[selectedLanguage] for day in addProgramCtrl.dayList">\n' +
    '                            </select>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <br>\n' +
    '\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-10"></div>\n' +
    '                <div class="col-md-2">\n' +
    '                    <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="newProgramFormStepOne.$invalid || addProgramCtrl.DaysNotValid == true"\n' +
    '                        class="btn pmd-ripple-effect btn-primary" type="button" ng-click="addProgramCtrl.gotoStep(2)">\n' +
    '                        {{\'next\' | translate}}</button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Program/templates/newStepThree.html',
    '<form class="form-horizontal" name="newProgram3Form">\n' +
    '\n' +
    '    <br>\n' +
    '\n' +
    '    <!-- <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
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
    '    </div> -->\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-6">\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'ProgramDiscount\' | translate}}</label>\n' +
    '                <input minlength="1" maxlength="3" ng-change="discountChange();" type="number" class="mat-input form-control" name="programDiscount" ng-model="addProgramCtrl.ProgramDiscount">\n' +
    '            </div>\n' +
    '            <div ng-messages="newProgram3Form.programDiscount.$error" class="error">\n' +
    '                <div ng-if="(newProgram3Form.programDiscount.$error.minlength || newProgram3Form.programDiscount.$error.maxlength)">{{\'programDiscountLengthError\' | translate}}</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <!-- {{addProgramCtrl.ProgramTotalPriceBefore}} -->\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-6">\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'PriceBeforeDiscount\' | translate}}</label>\n' +
    '                <input disabled type="number" class="mat-input form-control" name="priceBeforeDiscount" ng-model="addProgramCtrl.ProgramTotalPriceBefore">\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <!-- {{addProgramCtrl.ProgramTotalPrice}} -->\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-6">\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'PriceAfterDiscount\' | translate}}</label>\n' +
    '                <input disabled type="number" class="mat-input form-control" name="priceAfterDiscount" ng-model="addProgramCtrl.ProgramTotalPrice">\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-10"></div>\n' +
    '        <div class="col-md-2">\n' +
    '            <!-- || (addProgramCtrl.Setting.minNoDaysPerProgram > addProgramCtrl.ProgramDaysCount) -->\n' +
    '            <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="(addProgramCtrl.currentStep != addProgramCtrl.steps.length)"\n' +
    '                class="btn btn-success" name="next" type="button" ng-click="addProgramCtrl.AddNewProgram()">\n' +
    '                <i class="fa fa-floppy-o"></i>{{\'Save\' | translate}}</button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</form>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Program/templates/newStepTwo.html',
    '<!-- Inbox like Accordion -->\n' +
    '<form name="stepTwoProgramForm">\n' +
    '    <div class="row">\n' +
    '        <div\n' +
    '            class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'ProgramDaysCount\' | translate}}</label>\n' +
    '            <input ng-change="addProgramCtrl.ConvertToNumber();addProgramCtrl.changeDayCount();" required type="number" class="mat-input form-control"\n' +
    '                name="programDaysCount" ng-model="addProgramCtrl.ProgramDaysCount" min="1" minlength="0" maxlength="2">\n' +
    '\n' +
    '            <div ng-messages="stepTwoProgramForm.programDaysCount.$error">\n' +
    '                <div\n' +
    '                    ng-if="stepTwoProgramForm.programDaysCount.$error.required && !stepTwoProgramForm.programDaysCount.$pristine">\n' +
    '                    {{\'requiredErr\' | translate}}\n' +
    '                </div>\n' +
    '                <div ng-if="(stepTwoProgramForm.programDaysCount.$error.minlength ||\n' +
    '                 stepTwoProgramForm.programDaysCount.$error.maxlength)">\n' +
    '                    {{\'maxlength\' | translate}}</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div\n' +
    '            class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'MealPerDay\' | translate}}</label>\n' +
    '            <input ng-change="addProgramCtrl.ConvertToNumber();addProgramCtrl.changeMealCount();" required type="number" class="mat-input form-control"\n' +
    '                name="mealPerDay" ng-model="addProgramCtrl.MealPerDay" min="1" minlength="0" maxlength="2">\n' +
    '            <div ng-messages="stepTwoProgramForm.mealPerDay.$error" class="error">\n' +
    '                <div ng-if="stepTwoProgramForm.mealPerDay.$error.required && !stepTwoProgramForm.mealPerDay.$pristine">\n' +
    '                    {{\'requiredErr\' | translate}}</div>\n' +
    '                <div\n' +
    '                    ng-if="(stepTwoProgramForm.mealPerDay.$error.minlength || stepTwoProgramForm.mealPerDay.$error.maxlength)">\n' +
    '                    {{\'maxlength\' | translate}}</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-9">\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Breakfast\' | translate}}\n' +
    '                    <input type="checkbox" ng-model="addProgramCtrl.IsBreakFast">\n' +
    '                </label>\n' +
    '                <br />\n' +
    '                <label for="first-name">{{\'Snack\' | translate}}\n' +
    '                    <input type="checkbox" ng-model="addProgramCtrl.IsSnack">\n' +
    '                </label>\n' +
    '\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-12">\n' +
    '            <div ng-init="counterDay = 0; counterMeal = 0">\n' +
    '                <div class="panel-group pmd-accordion pmd-accordion-inbox" id="accordion6" role="tablist"\n' +
    '                    aria-multiselectable="true">\n' +
    '                    <!-- <div ng-repeat="n in [].constructor(addProgramCtrl.daysCount)  track by $index" -->\n' +
    '                    <div ng-repeat="dayObj in addProgramCtrl.daylistCount"\n' +
    '                        class="panel panel-default">\n' +
    '                        <div class="panel-heading" role="tab" id="headingOne">\n' +
    '                            <h4 class="panel-title">\n' +
    '                                <a ng-init="counterDay=counterDay+1;" data-toggle="collapse" data-parent="#accordion6"\n' +
    '                                    ng-init="n=false" ng-click="n=!n;" aria-expanded="true" aria-controls="collapseOne6"\n' +
    '                                    data-expandable="false">\n' +
    '                                    {{\'Day\' | translate}} {{counterDay=$index+1}}\n' +
    '                                    <i class="material-icons md-dark pmd-sm pmd-accordion-arrow">keyboard_arrow_down</i>\n' +
    '                                </a>\n' +
    '                            </h4>\n' +
    '                        </div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '                        <div ng-show="n == true" id="collapseOne6" class="panel-collapse collapse in" role="tabpanel"\n' +
    '                            aria-labelledby="headingOne">\n' +
    '                            <div class="panel-body">\n' +
    '\n' +
    '                                <div ng-if="addProgramCtrl.IsBreakFast==true">\n' +
    '                                    {{\'Breakfast\' | translate}}\n' +
    '                                    <div class="row">\n' +
    '                                        <div\n' +
    '                                            class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                            <label for="first-name">{{\'SelectCategory\' | translate}}</label>\n' +
    '                                            <select style="width:100% !important"\n' +
    '                                                class="form-control select-with-search pmd-select2-tags"\n' +
    '                                                ng-model="meal.selectedCategoryId"\n' +
    '                                                ng-change="addProgramCtrl.changeCategory(meal.selectedCategoryId,meal)">\n' +
    '                                                <option ng-repeat="category in addProgramCtrl.categories"\n' +
    '                                                    ng-value="{{category.categoryId}}">\n' +
    '                                                    {{category.titleDictionary[selectedLanguage]}}\n' +
    '                                                </option>\n' +
    '                                            </select>\n' +
    '                                        </div>\n' +
    '                                        <div\n' +
    '                                            class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                            <label for="first-name">{{\'SelectItems\' | translate}}</label>\n' +
    '                                            <select style="width:100% !important"\n' +
    '                                                class="form-control select-with-search pmd-select2-tags"\n' +
    '                                                ng-model="meal.selectedItem"\n' +
    '                                                ng-change="addProgramCtrl.changeItem(meal.selectedItem.itemId,meal)">\n' +
    '                                                <option ng-repeat="item in meal.items" ng-value="{{item}}">\n' +
    '                                                    {{item.itemNameDictionary[selectedLanguage]}}\n' +
    '                                                </option>\n' +
    '                                            </select>\n' +
    '                                        </div>\n' +
    '                                        <div\n' +
    '                                            class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                            <label for="first-name">{{\'selectSizeLbl\' | translate}}</label>\n' +
    '                                            <select style="width:100% !important"\n' +
    '                                                class="form-control select-with-search pmd-select2-tags"\n' +
    '                                                ng-model="meal.selectedItemSize">\n' +
    '                                                <option ng-repeat="item in meal.itemSizes" ng-value="{{item}}">\n' +
    '                                                    {{item.sizeNameDictionary[selectedLanguage]}}\n' +
    '                                                </option>\n' +
    '                                            </select>\n' +
    '                                        </div>\n' +
    '\n' +
    '                                        <div\n' +
    '                                            class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                            <button\n' +
    '                                                style="background-color: #e4e5e6;color: black!important;     margin-top: 38px;"\n' +
    '                                                ng-disabled="meal.selectedCategoryId <= 0 || meal.selectedItem == null || meal.selectedItemSize == null"\n' +
    '                                                class="btn pmd-ripple-effect btn-primary" type="button"\n' +
    '                                                ng-click="getData(meal.selectedItemSize,counterDay,counterMeal,meal,\'BreakFast\')">\n' +
    '                                                {{\'addItemBtn\' | translate}}</button>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                    <div\n' +
    '                                        class=" form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '                                        <table class="table pmd-table table-hover">\n' +
    '                                            <thead>\n' +
    '                                                <tr>\n' +
    '                                                    <th>{{\'Name\' | translate}}</th>\n' +
    '                                                    <th>{{\'itemSize\' | translate}}</th>\n' +
    '                                                    <th></th>\n' +
    '                                                </tr>\n' +
    '                                            </thead>\n' +
    '                                            <tbody>\n' +
    '                                                <tr ng-repeat="itemSize in meal.selectedItemList">\n' +
    '                                                    <td data-title="Name" width="15%">\n' +
    '                                                        {{itemSize.itemNameDictionary[selectedLanguage] | limitTo:10}}\n' +
    '                                                    </td>\n' +
    '                                                    <td data-title="Description">\n' +
    '                                                        {{itemSize.sizeNameDictionary[selectedLanguage]}}\n' +
    '                                                    </td>\n' +
    '                                                    <td><i class="material-icons pmd-md deleteButton cursorPointer font25"\n' +
    '                                                            ng-click="addProgramCtrl.removeItem(itemSize,meal)">delete</i>\n' +
    '                                                    </td>\n' +
    '\n' +
    '                                                </tr>\n' +
    '                                            </tbody>\n' +
    '                                        </table>\n' +
    '                                    </div>\n' +
    '                                    <input type="number" name="ddl{{counterDay}}{{counterMeal}}" hidden\n' +
    '                                        ng-model="meal.selectedItemList.length" min="1" required>\n' +
    '                                </div>\n' +
    '                                <div ng-if="addProgramCtrl.IsSnack==true">\n' +
    '                                    {{\'Snack\' | translate}}\n' +
    '                                    <div class="row">\n' +
    '                                        <div\n' +
    '                                            class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                            <label for="first-name">{{\'SelectCategory\' | translate}}</label>\n' +
    '                                            <select style="width:100% !important"\n' +
    '                                                class="form-control select-with-search pmd-select2-tags"\n' +
    '                                                ng-model="meal.selectedCategoryId"\n' +
    '                                                ng-change="addProgramCtrl.changeCategory(meal.selectedCategoryId,meal)">\n' +
    '                                                <option ng-repeat="category in addProgramCtrl.categories"\n' +
    '                                                    ng-value="{{category.categoryId}}">\n' +
    '                                                    {{category.titleDictionary[selectedLanguage]}}\n' +
    '                                                </option>\n' +
    '                                            </select>\n' +
    '                                        </div>\n' +
    '                                        <div\n' +
    '                                            class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                            <label for="first-name">{{\'SelectItems\' | translate}}</label>\n' +
    '                                            <select style="width:100% !important"\n' +
    '                                                class="form-control select-with-search pmd-select2-tags"\n' +
    '                                                ng-model="meal.selectedItem"\n' +
    '                                                ng-change="addProgramCtrl.changeItem(meal.selectedItem.itemId,meal)">\n' +
    '                                                <option ng-repeat="item in meal.items" ng-value="{{item}}">\n' +
    '                                                    {{item.itemNameDictionary[selectedLanguage]}}\n' +
    '                                                </option>\n' +
    '                                            </select>\n' +
    '                                        </div>\n' +
    '                                        <div\n' +
    '                                            class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                            <label for="first-name">{{\'selectSizeLbl\' | translate}}</label>\n' +
    '                                            <select style="width:100% !important"\n' +
    '                                                class="form-control select-with-search pmd-select2-tags"\n' +
    '                                                ng-model="meal.selectedItemSize">\n' +
    '                                                <option ng-repeat="item in meal.itemSizes" ng-value="{{item}}">\n' +
    '                                                    {{item.sizeNameDictionary[selectedLanguage]}}\n' +
    '                                                </option>\n' +
    '                                            </select>\n' +
    '                                        </div>\n' +
    '\n' +
    '                                        <div\n' +
    '                                            class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                            <button\n' +
    '                                                style="background-color: #e4e5e6;color: black!important;     margin-top: 38px;"\n' +
    '                                                ng-disabled="meal.selectedCategoryId <= 0 || meal.selectedItem == null || meal.selectedItemSize == null"\n' +
    '                                                class="btn pmd-ripple-effect btn-primary" type="button"\n' +
    '                                                ng-click="getData(meal.selectedItemSize,counterDay,counterMeal,meal,\'Snacks\')">\n' +
    '                                                {{\'addItemBtn\' | translate}}</button>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '\n' +
    '                                    <div\n' +
    '                                        class=" form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '                                        <table class="table pmd-table table-hover">\n' +
    '                                            <thead>\n' +
    '                                                <tr>\n' +
    '                                                    <th>{{\'Name\' | translate}}</th>\n' +
    '                                                    <th>{{\'itemSize\' | translate}}</th>\n' +
    '                                                    <th></th>\n' +
    '                                                </tr>\n' +
    '                                            </thead>\n' +
    '                                            <tbody>\n' +
    '                                                <tr ng-repeat="itemSize in meal.selectedItemList">\n' +
    '                                                    <td data-title="Name" width="15%">\n' +
    '                                                        {{itemSize.itemNameDictionary[selectedLanguage] | limitTo:10}}\n' +
    '                                                    </td>\n' +
    '                                                    <td data-title="Description">\n' +
    '                                                        {{itemSize.sizeNameDictionary[selectedLanguage]}}\n' +
    '                                                    </td>\n' +
    '                                                    <td><i class="material-icons pmd-md deleteButton cursorPointer font25"\n' +
    '                                                            ng-click="addProgramCtrl.removeItem(itemSize,meal)">delete</i>\n' +
    '                                                    </td>\n' +
    '\n' +
    '                                                </tr>\n' +
    '                                            </tbody>\n' +
    '                                        </table>\n' +
    '                                    </div>\n' +
    '                                    <input type="number" name="ddl{{counterDay}}{{counterMeal}}" hidden\n' +
    '                                        ng-model="meal.selectedItemList.length" min="1" required>\n' +
    '                                </div>\n' +
    '                                <ul>\n' +
    '                                    <li ng-repeat="meal in dayObj.meals">\n' +
    '                                        <h4>\n' +
    '                                            <a ng-init="counterMeal=counterMeal+1;"\n' +
    '                                                ng-click="showDetails = ! showDetails; addProgramCtrl.showDDL(); ">{{\'Meal\'\n' +
    '                                                | translate}}\n' +
    '                                                {{counterMeal=$index+1}}</a>\n' +
    '                                        </h4>\n' +
    '                                        <div ng-show="showDetails">\n' +
    '                                            <div class="row">\n' +
    '                                                <div\n' +
    '                                                    class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                    <label for="first-name">{{\'SelectCategory\' | translate}}</label>\n' +
    '                                                    <select style="width:100% !important"\n' +
    '                                                        class="form-control select-with-search pmd-select2-tags"\n' +
    '                                                        ng-model="meal.selectedCategoryId"\n' +
    '                                                        ng-change="addProgramCtrl.changeCategory(meal.selectedCategoryId,meal)">\n' +
    '                                                        <option ng-repeat="category in addProgramCtrl.categories"\n' +
    '                                                            ng-value="{{category.categoryId}}">\n' +
    '                                                            {{category.titleDictionary[selectedLanguage]}}</option>\n' +
    '                                                    </select>\n' +
    '                                                </div>\n' +
    '                                                <div\n' +
    '                                                    class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                    <label for="first-name">{{\'SelectItems\' | translate}}</label>\n' +
    '                                                    <select ng-disabled="meal.isloading" style="width:100% !important" class="form-control select-with-search pmd-select2-tags"\n' +
    '                                                        ng-model="meal.selectedItem" ng-change="addProgramCtrl.changeItem(meal.selectedItem.itemId,meal)">\n' +
    '                                                        <option ng-repeat="item in meal.items" ng-value="{{item}}">{{item.itemNameDictionary[selectedLanguage]}}</option>\n' +
    '                                                    </select>\n' +
    '                                                </div>\n' +
    '                                                <div\n' +
    '                                                    class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                    <label for="first-name">{{\'selectSizeLbl\' | translate}}</label>\n' +
    '                                                    <select ng-disabled="meal.isloading" style="width:100% !important" class="form-control select-with-search pmd-select2-tags"\n' +
    '                                                        ng-model="meal.selectedItemSize">\n' +
    '                                                        <option ng-repeat="item in meal.itemSizes" ng-value="{{item}}">\n' +
    '                                                            {{item.sizeNameDictionary[selectedLanguage]}}</option>\n' +
    '                                                    </select>\n' +
    '                                                </div>\n' +
    '\n' +
    '                                                <div\n' +
    '                                                    class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                    <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '                                                        ng-disabled="meal.selectedCategoryId <= 0 || meal.selectedItem == null || meal.selectedItemSize == null"\n' +
    '                                                        class="btn pmd-ripple-effect btn-primary" type="button"\n' +
    '                                                        ng-click="getData(meal.selectedItemSize,counterDay,counterMeal,meal,\'Normal\')">\n' +
    '                                                        {{\'addItemBtn\' | translate}}</button>\n' +
    '                                                        <img ng-show="meal.isloading" src="assets/img/loading.gif" style="height: 40px;">\n' +
    '\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '\n' +
    '                                            <div\n' +
    '                                                class=" form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '                                                <table class="table pmd-table table-hover">\n' +
    '                                                    <thead>\n' +
    '                                                        <tr>\n' +
    '                                                            <th>{{\'Name\' | translate}}</th>\n' +
    '                                                            <th>{{\'SizeName\' | translate}}</th>\n' +
    '                                                            <th></th>\n' +
    '                                                        </tr>\n' +
    '                                                    </thead>\n' +
    '                                                    <tbody>\n' +
    '                                                        <tr ng-repeat="itemSize in meal.selectedItemList">\n' +
    '                                                            <td data-title="Name" width="15%">\n' +
    '                                                                {{itemSize.itemNameDictionary[selectedLanguage] | limitTo:10}}\n' +
    '                                                            </td>\n' +
    '                                                            <td data-title="Description">\n' +
    '                                                                {{itemSize.sizeNameDictionary[selectedLanguage]}}</td>\n' +
    '                                                            <td><i class="material-icons pmd-md deleteButton cursorPointer font25"\n' +
    '                                                                    ng-click="addProgramCtrl.removeItem(itemSize,meal)">delete</i>\n' +
    '                                                            </td>\n' +
    '\n' +
    '                                                        </tr>\n' +
    '                                                    </tbody>\n' +
    '                                                </table>\n' +
    '                                            </div>\n' +
    '                                            <input type="number" name="ddl{{counterDay}}{{counterMeal}}" hidden\n' +
    '                                                ng-model="meal.selectedItemList.length" min="1" required>\n' +
    '                                            <!-- <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                <label for="first-name">{{\'SelectItems\' | translate}}</label>\n' +
    '                                                <select required name="ddl{{counterDay}}{{counterMeal}}" style="width:100% !important"\n' +
    '                                                    class="select-tags form-control pmd-select2-tags" multiple ng-model="itemModel"\n' +
    '                                                    ng-change="getData(itemModel,counterDay,counterMeal)" ng-options="item as item.itemNameDictionary[selectedLanguage] \n' +
    '                                        group by item.category.titleDictionary[selectedLanguage]\n' +
    '                                        for item  in itemsssPrepService">\n' +
    '                                                </select>\n' +
    '                                                <div ng-messages="stepTwoProgramForm.ddl{{counterDay}}{{counterMeal}}.$error">\n' +
    '\n' +
    '                                                    <div ng-show="stepTwoProgramForm.ddl{{counterDay}}{{counterMeal}}.$error.required && !stepTwoProgramForm.ddl{{counterDay}}{{counterMeal}}.$pristine">\n' +
    '                                                        {{\'requiredErr\' | translate}}</div>\n' +
    '                                                    <div ng-show="(stepTwoProgramForm.ddl{{counterDay}}{{counterMeal}}.$error.minlength || stepTwoProgramForm.ddl{{counterDay}}{{counterMeal}}.$error.maxlength) && !stepTwoProgramForm.ddl{{counterDay}}{{counterMeal}}.$error.required">\n' +
    '                                                        {{\'NameLengthError255\' | translate}}</div>\n' +
    '                                                </div>\n' +
    '                                            </div> -->\n' +
    '                                        </div>\n' +
    '                                    </li>\n' +
    '                                </ul>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <!-- {{stepTwoProgramForm.$invalid}} {{addProgramCtrl.daysCount == 0}} {{addProgramCtrl.mealsCount == 0}} \n' +
    '    /{{stepTwoProgramForm.$invalid || (addProgramCtrl.daysCount == 0 || addProgramCtrl.mealsCount == 0)}} -->\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-10"></div>\n' +
    '        <div class="col-md-2">\n' +
    '            <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '                ng-disabled="(stepTwoProgramForm.$invalid || (addProgramCtrl.daysCount == 0 || addProgramCtrl.mealsCount == 0))"\n' +
    '                class="btn pmd-ripple-effect btn-primary" type="button" ng-click="addProgramCtrl.gotoStep(3);">\n' +
    '                {{\'next\' | translate}}</button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</form>');
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
    '                    <th>{{\'price\' | translate}}</th>\n' +
    '                    <th>{{\'Status\' | translate}}</th>\n' +
    '                    <th></th>\n' +
    '                </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '                <tr ng-repeat="program in programList.results">\n' +
    '                    <td data-title="Name">{{program.programNameDictionary[selectedLanguage]}}</td>\n' +
    '                    <td data-title="Name">{{program.programDescriptionDictionary[selectedLanguage]}}</td>\n' +
    '                    <td data-title="Name">{{program.price}}</td>\n' +
    '                    <td>\n' +
    '                        <div class="btn-switch" ng-class="{\'btn-switch--on\':program.isActive}"\n' +
    '                            ng-model="program.isActive" ng-click="programCtrl.UpdateProgram(program)">\n' +
    '\n' +
    '                            <div class="btn-switch-circle" ng-class="{\'btn-switch-circle--on\':program.isActive}"\n' +
    '                                ng-model="program.isActive" ng-click="programCtrl.UpdateProgram(program)">\n' +
    '                            </div>\n' +
    '                    </td>\n' +
    '                    <td width="30%" ng-show="!program.isStatic">\n' +
    '                        <a ng-click="$state.go(\'programDetails\', {programId: program.programId});"\n' +
    '                            class="cursorPointer">{{\'ProgramDetails\'\n' +
    '                            | translate}}</a>\n' +
    '                        <i class="material-icons md-dark pmd-md cursorPointer font25"\n' +
    '                            ng-click="$state.go(\'editProgram\', {programId: program.programId});">mode_edit</i>\n' +
    '                        <i class="material-icons pmd-md deleteButton cursorPointer font25"\n' +
    '                            ng-click="programCtrl.openDeleteDialog(program,program.titleDictionary[selectedLanguage],program.programId)">delete</i>\n' +
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
  $templateCache.put('./app/GlobalAdmin/Program/templates/programDetails.html',
    '<div ng-init="counterDay = 0; counterMeal = 0">\n' +
    '    <div class="panel-group pmd-accordion pmd-accordion-inbox" id="accordion6" role="tablist"\n' +
    '        aria-multiselectable="true">\n' +
    '        <!-- {{programDetailsCtrl.programDetails.programDays}} / {{programDetailsCtrl.programDetails.noOfMeals}} -->\n' +
    '        <div ng-repeat="n in [].constructor(programDetailsCtrl.programDetails.programDays)  track by $index"\n' +
    '            class="panel panel-default">\n' +
    '            <div class="panel-heading" role="tab" id="headingOne">\n' +
    '                <h4 class="panel-title">\n' +
    '                    <a ng-init="counterDay=counterDay+1;" data-toggle="collapse" data-parent=" accordion6"\n' +
    '                        ng-init="n=false" ng-click="n=!n;" aria-expanded="true" aria-controls="collapseOne6"\n' +
    '                        data-expandable="false">\n' +
    '                        {{\'Day\' | translate}} {{counterDay=$index+1}}\n' +
    '                        <i class="material-icons md-dark pmd-sm pmd-accordion-arrow">keyboard_arrow_down</i>\n' +
    '                    </a>\n' +
    '                </h4>\n' +
    '            </div>\n' +
    '            <div ng-show="n == true" id="collapseOne6" class="panel-collapse collapse in" role="tabpanel"\n' +
    '                aria-labelledby="headingOne">\n' +
    '                <div class="panel-body">\n' +
    '                    <div ng-if="programDetailsCtrl.programDetails.isBreakfast==true">\n' +
    '                        <h4>\n' +
    '                            <a ng-click="showBreakfast = ! showBreakfast;">{{\'Breakfast\' | translate}}</a>\n' +
    '                            <i class="material-icons md-dark pmd-md cursorPointer font25"\n' +
    '                                ng-click="programDetailsCtrl.ShowProgramMeal(programDetailsCtrl.programDetails.programId, counterDay, counterMeal,\'BreakFast\')">mode_edit</i>\n' +
    '\n' +
    '                        </h4>\n' +
    '\n' +
    '                        <div ng-show="showBreakfast">\n' +
    '                            <div\n' +
    '                                class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                <label for="first-name">{{\'SelectItems\' | translate}}</label>\n' +
    '                                <ul>\n' +
    '                                    <li\n' +
    '                                        ng-repeat="detail in programDetailsCtrl.programDetails.programDetails | filter:{dayNumber:counterDay, mealNumberPerDay: 0 ,itemType:1 } : true">\n' +
    '\n' +
    '                                        {{detail.itemSize.itemNameDictionary[selectedLanguage]}} /\n' +
    '                                        {{detail.itemSize.sizeNameDictionary[selectedLanguage]}}\n' +
    '\n' +
    '                                    </li>\n' +
    '                                </ul>\n' +
    '\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div ng-if="programDetailsCtrl.programDetails.isSnack==true">\n' +
    '                        <h4>\n' +
    '                            <a ng-click="showSnack = ! showSnack;">{{\'Snack\' | translate}}</a>\n' +
    '                            <i class="material-icons md-dark pmd-md cursorPointer font25"\n' +
    '                                ng-click="programDetailsCtrl.ShowProgramMeal(programDetailsCtrl.programDetails.programId, counterDay, counterMeal,\'Snacks\')">mode_edit</i>\n' +
    '\n' +
    '                        </h4>\n' +
    '                        <div ng-show="showSnack">\n' +
    '                            <div\n' +
    '                                class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                <label for="first-name">{{\'SelectItems\' | translate}}</label>\n' +
    '\n' +
    '                                <ul>\n' +
    '                                    <li\n' +
    '                                        ng-repeat="detail in programDetailsCtrl.programDetails.programDetails | filter:{dayNumber:counterDay, mealNumberPerDay: 0 ,itemType:2 } : true">\n' +
    '\n' +
    '                                        {{detail.itemSize.itemNameDictionary[selectedLanguage]}} /\n' +
    '                                        {{detail.itemSize.sizeNameDictionary[selectedLanguage]}}\n' +
    '\n' +
    '                                    </li>\n' +
    '                                </ul>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <ul>\n' +
    '                        <li\n' +
    '                            ng-repeat="meal in [].constructor(programDetailsCtrl.programDetails.noOfMeals)  track by $index">\n' +
    '                            <h4>\n' +
    '                                <a ng-init="counterMeal=counterMeal+1;"\n' +
    '                                    ng-click="showDetails = ! showDetails; programDetailsCtrl.showDDL(); ">{{\'Meal\' | translate}}\n' +
    '                                    {{counterMeal=$index+1}}</a>\n' +
    '                                <i class="material-icons md-dark pmd-md cursorPointer font25"\n' +
    '                                    ng-click="programDetailsCtrl.ShowProgramMeal(programDetailsCtrl.programDetails.programId, counterDay, counterMeal,\'Normal\')">mode_edit</i>\n' +
    '\n' +
    '                            </h4>\n' +
    '\n' +
    '                            <div ng-show="showDetails">\n' +
    '                                <div\n' +
    '                                    class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name">{{\'SelectItems\' | translate}}</label>\n' +
    '\n' +
    '                                    <ul>\n' +
    '                                        <li\n' +
    '                                            ng-repeat="detail in programDetailsCtrl.programDetails.programDetails | filter:{dayNumber:counterDay, mealNumberPerDay: counterMeal } : true">\n' +
    '\n' +
    '                                            {{detail.itemSize.itemNameDictionary[selectedLanguage]}} /\n' +
    '                                            {{detail.itemSize.sizeNameDictionary[selectedLanguage]}}\n' +
    '\n' +
    '                                            <!-- <div\n' +
    '                                                ng-repeat="item in programDetailsCtrl.programDetails.items |filter :{itemId:detail.itemId}">\n' +
    '                                                {{detail.itemId}}<br> {{item.itemNameDictionary[selectedLanguage]}}\n' +
    '                                            </div> -->\n' +
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
  $templateCache.put('./app/GlobalAdmin/Promotion/templates/Promotion.html',
    '<div>\n' +
    '\n' +
    '    <!--TYPOGRAPHY SECTION-->\n' +
    '    <div class="col-md-12">\n' +
    '        <div class="head-typo typo-com">\n' +
    '            <div style="margin-bottom:10px">\n' +
    '                <button style="background-color: #e4e5e6;color: black!important;" ng-click="$state.go(\'newPromotion\');"\n' +
    '                    class="btn pmd-ripple-effect btn-primary pmd-z-depth"\n' +
    '                    type="button">{{\'AddBtn\' | translate}}</button>\n' +
    '\n' +
    '            </div>\n' +
    '            <div ng-if="PromotionList.results.length == 0">\n' +
    '                <span>{{\'NoPromotionAvailable\' | translate}}</span>\n' +
    '            </div>\n' +
    '            <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="PromotionList.results.length > 0">\n' +
    '                <div class="table-responsive"></div>\n' +
    '                <table class="table">\n' +
    '                    <thead>\n' +
    '                        <tr>\n' +
    '                            <th>{{\'titleLbl\' | translate}}</th>\n' +
    '                            <th>{{\'value\' | translate}}</th>\n' +
    '                            <th>{{\'startDateLbl\' | translate}}</th>\n' +
    '                            <th>{{\'enddateLbl\' | translate}}</th>\n' +
    '                            <th>{{\'Meal\' | translate}} </th>\n' +
    '                            <th>{{\'Program\' | translate}} </th>\n' +
    '                            <th>{{\'CustomizeProgram\' | translate}} </th>\n' +
    '                            <th></th>\n' +
    '                        </tr>\n' +
    '                    </thead>\n' +
    '                    <tbody>\n' +
    '                        <tr ng-repeat="promotion in PromotionList.results" style="text-align: center;">\n' +
    '                            <td data-title="Name">{{promotion.title}}</td>\n' +
    '                            <td data-title="Name">{{promotion.value}}</td>\n' +
    '                            <td data-title="Name">{{promotion.startDate| date : "d/MMM/yy h:mm a"}}</td>\n' +
    '                            <td data-title="Name">{{promotion.endDate| date : "d/MMM/yy h:mm a"}}</td>\n' +
    '                            <td data-title="Name">\n' +
    '                                <input type="checkbox" ng-model="promotion.isMeal" name="name" ng-disabled="true">\n' +
    '                            </td>\n' +
    '                            <td data-title="Name">\n' +
    '                                <input type="checkbox" ng-model="promotion.isProgram" name="name" ng-disabled="true">\n' +
    '                            </td>\n' +
    '                            <td data-title="Name">\n' +
    '                                <input type="checkbox" ng-model="promotion.isCustomProgram" name="name"\n' +
    '                                    ng-disabled="true">\n' +
    '                            </td>\n' +
    '\n' +
    '                            <td ng-show="!promotion.IsUsed">\n' +
    '                                <i class="material-icons md-dark pmd-md cursorPointer font25" style="cursor: pointer;"\n' +
    '                                    ng-click="$state.go(\'editPromotion\',{promotionId: promotion.promotionId});">mode_edit</i>\n' +
    '\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                    </tbody>\n' +
    '                </table>\n' +
    '            </div>\n' +
    '            <div style="text-align:center;direction: ltr" paging page="1" page-size="10" total="totalCount"\n' +
    '                paging-action="changePage(page)" flex="nogrow" show-prev-next="true" show-first-last="true"\n' +
    '                hide-if-empty="true" disabled-class="hide">\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Promotion/templates/edit.html',
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'UpdatePromotionLbl\' | translate}}</h2>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="promotionForm">\n' +
    '\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name"> {{ \'titleLbl\' | translate}} </label>\n' +
    '                <input required type="text" class="mat-input form-control" name="title"\n' +
    '                    ng-model="editPromotionCtrl.Promotion.title" ng-minlength="3" ng-maxlength="255">\n' +
    '                <div ng-messages="promotionForm.title.$error">\n' +
    '                    <div ng-show="promotionForm.title.$error.required && !promotionForm.title.$pristine">\n' +
    '                        {{\'requiredErr\' | translate}}</div>\n' +
    '                    <div\n' +
    '                        ng-show="(promotionForm.title.$error.minlength || promotionForm.title.$error.maxlength) && !promotionForm.title.$error.required">\n' +
    '                        {{\'NameLengthError255\' | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'value\' | translate}}</label>\n' +
    '                <input required type="number" class="mat-input form-control" name="value" ng-pattern="/^[1-9]+[0-9]*$/"\n' +
    '                    ng-model="editPromotionCtrl.Promotion.value" ng-minlength="1" ng-maxlength="3">\n' +
    '                <div ng-messages="promotionForm.value.$error">\n' +
    '                    <div ng-if="promotionForm.value.$error.required && !promotionForm.value.$pristine">\n' +
    '                        {{\'requiredErr\' | translate}}</div>\n' +
    '                    <div ng-if="(promotionForm.value.$error.minlength || promotionForm.value.$error.maxlength)">\n' +
    '                        {{\'maxlength\' | translate}}</div>\n' +
    '                    <div ng-if="promotionForm.value.$error.pattern && !promotionForm.value.$pristine">\n' +
    '                        {{\'wrongpattern\' | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="row">\n' +
    '\n' +
    '                <div\n' +
    '                    class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '                    <label for="regular1" class="control-label">{{\'startDateLbl\' | translate}}</label>\n' +
    '                    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                        <input type="text" ng-model="editPromotionCtrl.Promotion.startDate"\n' +
    '                            ng-change="editPromotionCtrl.dateChange" id="startdate" class="form-control" />\n' +
    '                    </div>\n' +
    '\n' +
    '                </div>\n' +
    '                <div\n' +
    '                    class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                    <label for="regular1" class="control-label">{{\'enddateLbl\' | translate}}</label>\n' +
    '                    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                        <input type="text" ng-model="editPromotionCtrl.Promotion.endDate"\n' +
    '                            ng-change="editPromotionCtrl.dateChange" id="enddate" class="form-control" />\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="row">\n' +
    '                <div\n' +
    '                    class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                    <input type="checkbox"\n' +
    '                        ng-model="editPromotionCtrl.Promotion.isProgram">{{\'Program\' | translate}}</input>\n' +
    '                </div>\n' +
    '                <div\n' +
    '                    class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                    <input type="checkbox" ng-model="editPromotionCtrl.Promotion.isMeal">{{\'Meal\' | translate}}</input>\n' +
    '                </div>\n' +
    '\n' +
    '                <div\n' +
    '                    class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '                    <input type="checkbox"\n' +
    '                        ng-model="editPromotionCtrl.Promotion.isCustomProgram">{{\'CustomizeProgram\' | translate}}</input>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '            ng-disabled="promotionForm.$invalid || !editPromotionCtrl.dateIsValid||\n' +
    '            (editPromotionCtrl.IsProgram ==false && editPromotionCtrl.IsMeal ==false && editPromotionCtrl.IsCustomProgram ==false)"\n' +
    '            class="btn pmd-ripple-effect btn-primary" type="button"\n' +
    '            ng-click="editPromotionCtrl.UpdatePromotion()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '\n' +
    '        <button class="btn pmd-ripple-effect btn-default" type="button"\n' +
    '            ng-click="$state.go(\'Promotion\');">{{\'DiscardBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '<script type="text/javascript">\n' +
    '    $(function () {\n' +
    '        $(\'#startdate\').datetimepicker(\n' +
    '            {\n' +
    '                minDate: new Date(),\n' +
    '                format: \'MM/DD/YYYY hh:mm a\'\n' +
    '\n' +
    '            }\n' +
    '        );\n' +
    '        $(\'#enddate\').datetimepicker(\n' +
    '            {\n' +
    '                format: \'MM/DD/YYYY hh:mm a\',\n' +
    '                useCurrent: false\n' +
    '            }\n' +
    '        );\n' +
    '        $("#startdate").on("dp.change", function (e) {\n' +
    '            debugger;\n' +
    '            $(\'#enddate\').data("DateTimePicker").minDate(e.date);\n' +
    '            angular.element(document.getElementById(\'startdate\')).scope().dateChange();\n' +
    '\n' +
    '        });\n' +
    '        // Start date picke on chagne event [select maxmimum date for start date datepicker]\n' +
    '        $("#enddate").on("dp.change", function (e) {\n' +
    '            debugger;\n' +
    '            // var endDate = new Date($(\'#startdate\').val());\n' +
    '            // var startDate = new Date(e.date);\n' +
    '            // if (endDate >= startDate)\n' +
    '            //     $scope.promotionForm.$valid;\n' +
    '            angular.element(document.getElementById(\'enddate\')).scope().dateChange();\n' +
    '            $(\'#startdate\').data("DateTimePicker").maxDate(e.date);\n' +
    '        });\n' +
    '\n' +
    '    });\n' +
    '\n' +
    '</script>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Promotion/templates/new.html',
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'NewPromotionLbl\' | translate}}</h2>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="promotionForm">\n' +
    '\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                <label for="first-name"> {{ \'titleLbl\' | translate}} </label>\n' +
    '                <input required type="text" class="mat-input form-control" name="title"\n' +
    '                    ng-model="newPromotionCtrl.Title" ng-minlength="3" ng-maxlength="255">\n' +
    '                <div ng-messages="promotionForm.title.$error">\n' +
    '                    <div ng-show="promotionForm.title.$error.required && !promotionForm.title.$pristine">\n' +
    '                        {{\'requiredErr\' | translate}}</div>\n' +
    '                    <div\n' +
    '                        ng-show="(promotionForm.title.$error.minlength || promotionForm.title.$error.maxlength) && !promotionForm.title.$error.required">\n' +
    '                        {{\'NameLengthError255\' | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-compeleted">\n' +
    '                <label for="first-name">{{\'value\' | translate}}</label>\n' +
    '                <input required type="number" class="mat-input form-control" name="value" ng-pattern="/^[1-9]+[0-9]*$/"\n' +
    '                    ng-model="newPromotionCtrl.Value" ng-minlength="1" ng-maxlength="3">\n' +
    '                <div ng-messages="promotionForm.value.$error">\n' +
    '                    <div ng-if="promotionForm.value.$error.required && !promotionForm.value.$pristine">\n' +
    '                        {{\'requiredErr\' | translate}}</div>\n' +
    '                    <div ng-if="(promotionForm.value.$error.minlength || promotionForm.value.$error.maxlength)">\n' +
    '                        {{\'maxlength\' | translate}}</div>\n' +
    '                    <div ng-if="promotionForm.value.$error.pattern && !promotionForm.value.$pristine">\n' +
    '                        {{\'wrongpattern\' | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="row">\n' +
    '                <div\n' +
    '                    class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                    <label for="regular1" class="control-label">{{\'startDateLbl\' | translate}}</label>\n' +
    '                    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                        <input type="text" ng-model="newPromotionCtrl.StartDate" ng-change="newPromotionCtrl.dateChange"\n' +
    '                            id="startdate" class="form-control" />\n' +
    '                    </div>\n' +
    '\n' +
    '                </div>\n' +
    '                <div\n' +
    '                    class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                    <label for="regular1" class="control-label">{{\'enddateLbl\' | translate}}</label>\n' +
    '                    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                        <input type="text" ng-model="newPromotionCtrl.EndDate" ng-change="newPromotionCtrl.dateChange"\n' +
    '                            id="enddate" class="form-control" />\n' +
    '                    </div>\n' +
    '\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div\n' +
    '                    class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label">\n' +
    '                    <input type="checkbox" ng-model="newPromotionCtrl.IsProgram">{{\'Program\' | translate}}</input>\n' +
    '                </div>\n' +
    '                <div\n' +
    '                    class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label">\n' +
    '                    <input type="checkbox" ng-model="newPromotionCtrl.IsMeal">{{\'Meal\' | translate}}</input>\n' +
    '                </div>\n' +
    '\n' +
    '                <div\n' +
    '                    class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label">\n' +
    '\n' +
    '                    <input type="checkbox"\n' +
    '                        ng-model="newPromotionCtrl.IsCustomProgram">{{\'CustomizeProgram\' | translate}}</input>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '            ng-disabled="promotionForm.$invalid || !newPromotionCtrl.dateIsValid ||\n' +
    '            (newPromotionCtrl.IsProgram ==false && newPromotionCtrl.IsMeal ==false && newPromotionCtrl.IsCustomProgram ==false)" class="btn pmd-ripple-effect btn-primary"\n' +
    '            type="button" ng-click="newPromotionCtrl.AddNewPromotion()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '\n' +
    '        <button class="btn pmd-ripple-effect btn-default" type="button"\n' +
    '            ng-click="$state.go(\'Promotion\')">{{\'DiscardBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<script type="text/javascript">\n' +
    '    $(function () {\n' +
    '        $(\'#startdate\').datetimepicker(\n' +
    '            {\n' +
    '                minDate: new Date(),\n' +
    '                //format: \'DD/MM/YYYY\'\n' +
    '\n' +
    '            }\n' +
    '        );\n' +
    '        $(\'#enddate\').datetimepicker(\n' +
    '            {\n' +
    '                //   format: \'DD/MM/YYYY\',\n' +
    '                useCurrent: false\n' +
    '            }\n' +
    '        );\n' +
    '        $("#startdate").on("dp.change", function (e) {\n' +
    '            debugger;\n' +
    '            $(\'#enddate\').data("DateTimePicker").minDate(e.date);\n' +
    '            angular.element(document.getElementById(\'startdate\')).scope().dateChange();\n' +
    '\n' +
    '        });\n' +
    '        // Start date picke on chagne event [select maxmimum date for start date datepicker]\n' +
    '        $("#enddate").on("dp.change", function (e) {\n' +
    '            $(\'#startdate\').data("DateTimePicker").maxDate(e.date);\n' +
    '            angular.element(document.getElementById(\'enddate\')).scope().dateChange();\n' +
    '        });\n' +
    '\n' +
    '    });\n' +
    '\n' +
    '</script>');
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
    '        <button style="background-color: #e4e5e6;color: black!important;" ng-click="$state.go(\'newRole\');"\n' +
    '            class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddBtn\'\n' +
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
    '                        <i class="material-icons md-dark pmd-md cursorPointer font25"\n' +
    '                            ng-click="$state.go(\'editrole\',{roleId: role.roleId});">mode_edit</i>\n' +
    '                        <i class="material-icons pmd-md deleteButton cursorPointer font25"\n' +
    '                            ng-click="RoleCtrl.openDeleteDialog(role,role.titleDictionary[selectedLanguage],role.roleId)">delete</i>\n' +
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
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text">{{\'CallCenter\' | translate}}</h2>\n' +
    '    </div>\n' +
    '    <div class="modal-body">\n' +
    '        <div class="row">\n' +
    '            <div id="wizard-container">\n' +
    '                <div id="wizard-step-container">\n' +
    '                    <ul ng-init="counter = 0" class="nav nav-pills nav-justified">\n' +
    '\n' +
    '                        <li><a style="background-color: #e4e5e6;color: black!important; margin-left: 55% !important;width: 35%;"\n' +
    '                                ng-click="callCenterCtrl.gotoStep(2)" href="">{{\'Order\' | translate}}</a>\n' +
    '                        </li>\n' +
    '                        <li><a style="background-color: #e4e5e6;color: black!important;width: 35%;"\n' +
    '                                ng-click="callCenterCtrl.gotoStep(1)" href="">{{\'AddUserBtn\' | translate}} </a>\n' +
    '                        </li>\n' +
    '                        <!-- <li ng-repeat="step in callCenterCtrl.steps"\n' +
    '                            ng-class="{\'active\':step.step == callCenterCtrl.currentStep}">\n' +
    '                            <a ng-if="selectedLanguage == \'en\'"\n' +
    '                                style="background-color: #e4e5e6;color: black!important; margin-left: 55% !important;width: 32%;"\n' +
    '                                ng-click="callCenterCtrl.gotoStep(step.step)" href="">{{step.nameEn}} </a>\n' +
    '                            <a ng-if="selectedLanguage == \'ar\'"\n' +
    '                                style="background-color: #e4e5e6;color: black!important;    width: 32%;"\n' +
    '                                ng-click="callCenterCtrl.gotoStep(step.step)" href="">{{step.nameAr}} </a>\n' +
    '                        </li> -->\n' +
    '                    </ul>\n' +
    '                </div>\n' +
    '\n' +
    '                <div id="wizard-content-container">\n' +
    '                    <ng-include src="callCenterCtrl.getStepTemplate()"></ng-include>\n' +
    '                </div>\n' +
    '\n' +
    '                <!-- <div id="wizard-navigation-container">\n' +
    '                        <div class="pull-right">\n' +
    '                            <span class="btn-group">\n' +
    '                                <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="1 >= callCenterCtrl.currentStep" class="btn btn-default" name="previous" type="button" ng-click="callCenterCtrl.gotoStep(callCenterCtrl.currentStep - 1);">\n' +
    '                                    <i class="fa fa-arrow-left"></i>{{\'PreviousStep\' | translate}}</button>\n' +
    '                                <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="callCenterCtrl.currentStep >= callCenterCtrl.steps.length" class="btn btn-primary" name="next" type="button"\n' +
    '                                    ng-click="callCenterCtrl.gotoStep(callCenterCtrl.currentStep + 1)">{{\'NextStep\' | translate}}\n' +
    '                                    <i class="fa fa-arrow-right"></i>\n' +
    '                                </button>\n' +
    '                            </span> -->\n' +
    '                <!-- {{addProgramCtrl.Setting.minNoDaysPerProgram}} / {{addProgramCtrl.ProgramDaysCount}} -->\n' +
    '                <!-- <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="(addProgramCtrl.currentStep != addProgramCtrl.steps.length) || (addProgramCtrl.Setting.minNoDaysPerProgram > addProgramCtrl.ProgramDaysCount)" class="btn btn-success" name="next" type="button"\n' +
    '                                ng-click="addProgramCtrl.AddNewProgram()">\n' +
    '                                <i class="fa fa-floppy-o"></i>{{\'Save\' | translate}}</button> -->\n' +
    '                <!-- </div>\n' +
    '                    </div> -->\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
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
    '\n' +
    '\n' +
    '<form class="form-horizontal" name="newCallCenterForm">\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '        <label for="first-name">{{\'FirstNameLbl\' | translate}}</label>\n' +
    '        <input required type="text" class="mat-input form-control" name="firstName" ng-pattern="/^(\\D)+$/"\n' +
    '            ng-model="callCenterCtrl.FirstName" ng-minlength="2" ng-maxlength="255">\n' +
    '        <div ng-messages="newCallCenterForm.firstName.$error" class="error">\n' +
    '            <div ng-show="newCallCenterForm.firstName.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '            <div ng-if="newCallCenterForm.firstName.$error.required && !newCallCenterForm.firstName.$pristine">\n' +
    '                {{\'FirstNameLengthError\' | translate}}</div>\n' +
    '            <div\n' +
    '                ng-if="(newCallCenterForm.firstName.$error.minlength || newCallCenterForm.firstName.$error.maxlength) ">\n' +
    '                {{\'NameLengthError255\' | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '        <label for="first-name">{{\'LastNameLbl\' | translate}}</label>\n' +
    '        <input required type="text" class="mat-input form-control" name="lastName" ng-pattern="/^(\\D)+$/"\n' +
    '            ng-model="callCenterCtrl.LastName" ng-minlength="2" ng-maxlength="255">\n' +
    '        <div ng-messages="newCallCenterForm.lastName.$error">\n' +
    '            <div ng-show="newCallCenterForm.lastName.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '            <div ng-if="newCallCenterForm.lastName.$error.required && !newCallCenterForm.lastName.$pristine">\n' +
    '                {{\'lastName\' | translate}}\n' +
    '            </div>\n' +
    '            <div ng-if="(newCallCenterForm.lastName.$error.minlength || newCallCenterForm.lastName.$error.maxlength)">\n' +
    '                {{\'NameLengthError255\' | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '        <label>{{\'EmailLbl\' | translate}}</label>\n' +
    '        <input required type="text" class="mat-input form-control" name="userEmail" ng-model="callCenterCtrl.Email"\n' +
    '            ng-pattern="/^\\w+([-+.\']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$/">\n' +
    '        <span class="error" ng-show="newCallCenterForm.userEmail.$error.pattern">{{\'WrongMail\' | translate}} </span>\n' +
    '        <div ng-messages="newCallCenterForm.email.$error">\n' +
    '            <div ng-if="newCallCenterForm.userEmail.$error.required && !newCallCenterForm.userEmail.$pristine">\n' +
    '                {{\'EmailLengthError\' | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '        <label for="first-name">{{\'phoneLbl\' | translate}}</label>\n' +
    '        <input required type="text" class="mat-input form-control" name="phone" numbers-only\n' +
    '            ng-model="callCenterCtrl.Phone" ng-minlength="10" ng-maxlength="50">\n' +
    '        <div ng-messages="newCallCenterForm.phone.$error">\n' +
    '            <div ng-if="newCallCenterForm.phone.$error.required && !newCallCenterForm.phone.$pristine">\n' +
    '                {{\'PhoneReqError\' | translate}}\n' +
    '            </div>\n' +
    '            <div ng-if="(newCallCenterForm.phone.$error.minlength || newCallCenterForm.phone.$error.maxlength)">\n' +
    '                {{\'PhoneLengthError\' | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Length\' | translate}}</label>\n' +
    '        <input type="number" class="mat-input form-control" name="length" ng-model="callCenterCtrl.Length" positive\n' +
    '            ng-pattern="/^[1-9]+[0-9]*$/" ng-minlength="1" ng-maxlength="3">\n' +
    '        <div ng-messages="newCallCenterForm.length.$error" class="error">\n' +
    '            <div ng-if="(newCallCenterForm.length.$error.minlength || newCallCenterForm.length.$error.maxlength)">\n' +
    '                {{\'maxlength\' | translate}}</div>\n' +
    '            <div ng-if="newCallCenterForm.length.$error.pattern && !newCallCenterForm.length.$pristine">\n' +
    '                {{\'wrongpattern\' | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Weight\' | translate}}</label>\n' +
    '        <input type="number" class="mat-input form-control" name="weight" ng-model="callCenterCtrl.Weight" positive\n' +
    '            ng-pattern="/^[1-9]+[0-9]*$/" ng-minweight="1" ng-maxlength="3">\n' +
    '        <div ng-messages="newCallCenterForm.weight.$error" class="error">\n' +
    '            <div ng-if="(newCallCenterForm.weight.$error.minweight || newCallCenterForm.weight.$error.maxlength)">\n' +
    '                {{\'maxlength\' | translate}}</div>\n' +
    '            <div ng-if="newCallCenterForm.weight.$error.pattern && !newCallCenterForm.weight.$pristine">\n' +
    '                {{\'wrongpattern\' | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'FLoor\' | translate}}</label>\n' +
    '        <input required type="number" class="mat-input form-control" name="floor" ng-model="callCenterCtrl.FLoor"\n' +
    '            positive ng-pattern="/^[1-9]+[0-9]*$/" ng-minlength="1" ng-maxlength="4">\n' +
    '        <div ng-messages="newCallCenterForm.floor.$error" class="error">\n' +
    '            <div ng-if="newCallCenterForm.floor.$error.required && !newCallCenterForm.floor.$pristine">\n' +
    '                {{\'ProgramDaysCountReqError\' | translate}}</div>\n' +
    '            <div ng-if="(newCallCenterForm.floor.$error.minlength || newCallCenterForm.floor.$error.maxlength)">\n' +
    '                {{\'ProgramDaysCountLengthError\' | translate}}</div>\n' +
    '            <div ng-if="newCallCenterForm.floor.$error.pattern && !newCallCenterForm.floor.$pristine">\n' +
    '                {{\'wrongpattern\' | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'ApartmentNumber\' | translate}}</label>\n' +
    '        <input required type="number" class="mat-input form-control" name="appartmentNo" positive\n' +
    '            ng-pattern="/^[1-9]+[0-9]*$/" ng-model="callCenterCtrl.AppartmentNo" ng-minlength="1" ng-maxlength="4">\n' +
    '        <div ng-messages="newCallCenterForm.appartmentNo.$error" class="error">\n' +
    '            <div ng-if="newCallCenterForm.appartmentNo.$error.required && !newCallCenterForm.appartmentNo.$pristine">\n' +
    '                {{\'ProgramDaysCountReqError\' | translate}}</div>\n' +
    '            <div ng-if="(newCallCenterForm.appartmentNo.$error.minlength || newCallCenterForm.appartmentNo.$error.maxlength)">\n' +
    '                {{\'ProgramDaysCountLengthError\' | translate}}</div>\n' +
    '            <div ng-if="newCallCenterForm.appartmentNo.$error.pattern && !newCallCenterForm.appartmentNo.$pristine">\n' +
    '                {{\'wrongpattern\' | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '        <label for="first-name">{{\'AddressDescription\' | translate}}</label>\n' +
    '        <textarea required type="text" class="mat-input form-control" name="addressDescription"\n' +
    '            ng-model="callCenterCtrl.AddressDescription" ng-minlength="3" ng-maxlength="255"></textarea>\n' +
    '        <div ng-messages="newCallCenterForm.addressDescription.$error">\n' +
    '            <!-- <div ng-show="newCallCenterForm.addressDescription.$error.pattern">{{\'TextOnly\' | translate}}</div> -->\n' +
    '            <div\n' +
    '                ng-if="newCallCenterForm.addressDescription.$error.required && !newCallCenterForm.addressDescription.$pristine">\n' +
    '                {{\'lastName\' | translate}}\n' +
    '            </div>\n' +
    '            <div\n' +
    '                ng-if="(newCallCenterForm.addressDescription.$error.minlength || newCallCenterForm.addressDescription.$error.maxlength)">\n' +
    '                {{\'NameLengthError255\' | translate}}</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Country\' | translate}}</label>\n' +
    '        <select required style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '            ng-change="callCenterCtrl.countryChange()" ng-model="callCenterCtrl.selectedCountryId"\n' +
    '            ng-options="group.countryId as group.titleDictionary[selectedLanguage] for group in callCenterCtrl.counties">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div ng-show=" callCenterCtrl.selectedCountryId > 0"\n' +
    '        class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Region\' | translate}}</label>\n' +
    '        <select required style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '            ng-change="callCenterCtrl.regionChange()" ng-model="callCenterCtrl.selectedRegionId"\n' +
    '            ng-options="group.regionId as group.titleDictionary[selectedLanguage] for group in callCenterCtrl.regions">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div ng-show=" callCenterCtrl.selectedRegionId > 0"\n' +
    '        class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'City\' | translate}}</label>\n' +
    '        <select ng-required="callCenterCtrl.selectedRegionId > 0" style="width:100% !important"\n' +
    '            class="select-tags form-control pmd-select2-tags" ng-change="callCenterCtrl.cityChange()"\n' +
    '            ng-model="callCenterCtrl.selectedCityId"\n' +
    '            ng-options="group.cityId as group.titleDictionary[selectedLanguage] for group in callCenterCtrl.cities">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div ng-show=" callCenterCtrl.selectedCityId > 0"\n' +
    '        class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Area\' | translate}}</label>\n' +
    '        <select ng-required=" callCenterCtrl.selectedCityId > 0" style="width:100% !important"\n' +
    '            class="select-tags form-control pmd-select2-tags" ng-change="callCenterCtrl.areaChange()"\n' +
    '            ng-model="callCenterCtrl.selectedAreaId"\n' +
    '            ng-options="group.areaId as group.titleDictionary[selectedLanguage] for group in callCenterCtrl.area">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <!-- <div ng-show=" callCenterCtrl.selectedAreaId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Branch\' | translate}}</label>\n' +
    '        <select ng-required=" callCenterCtrl.selectedAreaId > 0 " class="form-control select-with-search pmd-select2-tags" ng-change="callCenterCtrl.branchChange()"\n' +
    '            ng-model="callCenterCtrl.selectedBranchId" ng-options="a.branchId as a.titleDictionary[selectedLanguage] for a in callCenterCtrl.branchList"></select>\n' +
    '    </div> -->\n' +
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
    '    <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '        ng-disabled="newCallCenterForm.$invalid  || callCenterCtrl.selectedAreaId <= 0"\n' +
    '        class="btn pmd-ripple-effect btn-primary" type="button"\n' +
    '        ng-click="callCenterCtrl.AddNewclient()">{{\'saveUser\' | translate}}</button>\n' +
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
    '        <input ng-change="checkValidation()" required type="text" class="mat-input form-control" name="phone"\n' +
    '         numbers-only ng-model="callCenterCtrl.Phone" ng-minlength="10"\n' +
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
    '        <!-- <label>\n' +
    '            <input type="radio" ng-model="callCenterCtrl.orderType.type" value="item"> {{\'Item\' | translate}}\n' +
    '        </label>\n' +
    '        <br/> -->\n' +
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
    '    <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="(newCallCenterForm.$invalid) || (flag != true)"\n' +
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
    '            maximumSelectionLength: 5,\n' +
    '            insertTag: function (data, tag) {\n' +
    '                // Insert the tag at the end of the results\n' +
    '                data.push(tag);\n' +
    '                // console.log(data);\n' +
    '            }\n' +
    '        });\n' +
    '\n' +
    '        // $(".select-tags").select2({\n' +
    '        //     tags: false,\n' +
    '        //     theme: "bootstrap",\n' +
    '        //     maximumSelectionSize: 3  });\n' +
    '\n' +
    '        // $(".select-with-search").select2({\n' +
    '        //     theme: "bootstrap",\n' +
    '        //     maximumSelectionSize: 3  });\n' +
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
    '                <div class="row">\n' +
    '                    <div class="col-md-12">\n' +
    '                        <div\n' +
    '                            class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                            <label for="first-name">{{\'SelectExcludeDays\' | translate}}</label>\n' +
    '                            <select style="width:100% !important" class="form-control select-add-tags"\n' +
    '                                multiple ng-model="orderCustomizeProgramCtrl.SelectedDays"\n' +
    '                                ng-options="day as day.dayNameDictionary[selectedLanguage] for day in orderCustomizeProgramCtrl.dayList">\n' +
    '                            </select>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
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
    '\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" class="btn pmd-ripple-effect btn-primary"\n' +
    '            type="button" ng-click="$state.go(\'callCenter\');">{{\'PreviousStep\' | translate}}</button>\n' +
    '\n' +
    '\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="newProgramForm.$invalid"\n' +
    '            class="btn pmd-ripple-effect btn-primary" type="button"\n' +
    '            ng-click="orderCustomizeProgramCtrl.gotoStep(2); orderCustomizeProgramCtrl.GetBranchDelivery();">\n' +
    '            {{\'NextStep\' | translate}}</button>\n' +
    '\n' +
    '    </div>\n' +
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
    '        var today = new Date();\n' +
    '        var tomorrow = new Date();\n' +
    '        $(\'#startdate\').datetimepicker(\n' +
    '            {\n' +
    '                minDate: tomorrow.setDate(today.getDate() + 1)\n' +
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
    '        <div\n' +
    '            class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="regular1" class="control-label">{{\'orderPickDateTime\' | translate}}</label>\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                <input ng-model="orderCustomizeProgramCtrl.itemDatetime" type="text"\n' +
    '                    ng-change="orderCustomizeProgramCtrl.dateChange()" id="startdate" class="form-control" />\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-3">\n' +
    '            <label for="first-name">{{\'OrderType\' | translate}}</label>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-3">\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label>\n' +
    '                    <input type="radio" ng-model="orderCustomizeProgramCtrl.orderType.type"\n' +
    '                        ng-change="orderCustomizeProgramCtrl.typeChanged()" value="delivery">\n' +
    '                    {{\'Deivery\' | translate}}\n' +
    '                </label>\n' +
    '                <label style="margin-left:3em">\n' +
    '                    <input type="radio" ng-model="orderCustomizeProgramCtrl.orderType.type"\n' +
    '                        ng-change="orderCustomizeProgramCtrl.typeChanged()" value="pickup">\n' +
    '                    {{\'Pickup\' | translate}}\n' +
    '                </label>\n' +
    '                <br />\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-6">\n' +
    '            <!-- {{orderCustomizeProgramCtrl.userAddresses.length}} -->\n' +
    '            <div ng-if="orderCustomizeProgramCtrl.orderType.type == \'delivery\'">\n' +
    '                <div\n' +
    '                    class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                    <label for="first-name">{{\'SelectAddress\' | translate}}</label>\n' +
    '\n' +
    '                    <div ng-repeat="address in orderCustomizeProgramCtrl.userAddresses">\n' +
    '                        <!-- {{orderCustomizeProgramCtrl.addresses.address}} -->\n' +
    '                        <label>\n' +
    '                            <input ng-change="orderCustomizeProgramCtrl.addressInfo(address)" type="radio"\n' +
    '                                ng-model="orderCustomizeProgramCtrl.addresses.address" value="{{address.addressId}}">\n' +
    '                            {{\'appartmentNo\' | translate}}: {{address.appartmentNo}}\n' +
    '                            <br> {{\'FLoor\' | translate}} : {{address.floor}}\n' +
    '                            <br> {{\'description\' | translate}}\n' +
    '                            :{{address.description}}</label>\n' +
    '                        </label>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-6">\n' +
    '            <div ng-show="orderCustomizeProgramCtrl.orderType.type == \'pickup\'">\n' +
    '                <div\n' +
    '                    class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                    <label for="first-name">{{\'Country\' | translate}}</label>\n' +
    '                    <select required style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                        ng-change="orderCustomizeProgramCtrl.countryChange()"\n' +
    '                        ng-model="orderCustomizeProgramCtrl.selectedCountryId"\n' +
    '                        ng-options="group.countryId as group.titleDictionary[selectedLanguage] for group in orderCustomizeProgramCtrl.counties">\n' +
    '                    </select>\n' +
    '                </div>\n' +
    '                <div ng-show=" orderCustomizeProgramCtrl.selectedCountryId > 0"\n' +
    '                    class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                    <label for="first-name">{{\'Region\' | translate}}</label>\n' +
    '                    <select required style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                        ng-change="orderCustomizeProgramCtrl.regionChange()"\n' +
    '                        ng-model="orderCustomizeProgramCtrl.selectedRegionId"\n' +
    '                        ng-options="group.regionId as group.titleDictionary[selectedLanguage] for group in orderCustomizeProgramCtrl.regions">\n' +
    '                    </select>\n' +
    '                </div>\n' +
    '                <div ng-show=" orderCustomizeProgramCtrl.selectedRegionId > 0"\n' +
    '                    class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                    <label for="first-name">{{\'City\' | translate}}</label>\n' +
    '                    <select ng-required="orderCustomizeProgramCtrl.selectedRegionId > 0" style="width:100% !important"\n' +
    '                        class="select-tags form-control pmd-select2-tags"\n' +
    '                        ng-change="orderCustomizeProgramCtrl.cityChange()"\n' +
    '                        ng-model="orderCustomizeProgramCtrl.selectedCityId"\n' +
    '                        ng-options="group.cityId as group.titleDictionary[selectedLanguage] for group in orderCustomizeProgramCtrl.cities">\n' +
    '                    </select>\n' +
    '                </div>\n' +
    '                <div ng-show=" orderCustomizeProgramCtrl.selectedCityId > 0"\n' +
    '                    class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                    <label for="first-name">{{\'Area\' | translate}}</label>\n' +
    '                    <select ng-required=" orderCustomizeProgramCtrl.selectedCityId > 0" style="width:100% !important"\n' +
    '                        class="select-tags form-control pmd-select2-tags"\n' +
    '                        ng-change="orderCustomizeProgramCtrl.areaChange()"\n' +
    '                        ng-model="orderCustomizeProgramCtrl.selectedAreaId"\n' +
    '                        ng-options="group.areaId as group.titleDictionary[selectedLanguage] for group in orderCustomizeProgramCtrl.area">\n' +
    '                    </select>\n' +
    '                </div>\n' +
    '                <div ng-show=" orderCustomizeProgramCtrl.selectedAreaId > 0"\n' +
    '                    class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                    <label for="first-name">{{\'Branch\' | translate}}</label>\n' +
    '                    <select ng-required=" orderCustomizeProgramCtrl.selectedAreaId > 0 "\n' +
    '                        class="form-control select-with-search pmd-select2-tags"\n' +
    '                        ng-change="orderCustomizeProgramCtrl.branchChange()"\n' +
    '                        ng-model="orderCustomizeProgramCtrl.selectedBranchId"\n' +
    '                        ng-options="a.branchId as a.titleDictionary[selectedLanguage] for a in orderCustomizeProgramCtrl.branchList"></select>\n' +
    '                </div>\n' +
    '\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    \n' +
    '    <div class="row">\n' +
    '        <div class="input-field col s2">\n' +
    '            <input required type="text" class="mat-input" name="title"\n' +
    '                placeholder="{{\'PromotionLbl\' | translate}}" ng-model="Title" minlength="3" maxlength="255">\n' +
    '            <div ng-messages="newProgram3Form.title.$error">\n' +
    '                <div ng-show="newProgram3Form.title.$error.required && !newProgram3Form.title.$pristine">\n' +
    '                    {{\'requiredErr\' | translate}}</div>\n' +
    '                <div\n' +
    '                    ng-show="(newProgram3Form.title.$error.minlength || newProgram3Form.title.$error.maxlength) && !newProgram3Form.title.$error.required">\n' +
    '                    {{\'NameLengthError255\' | translate}}</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="input-field col s2">\n' +
    '            <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '                class="btn pmd-ripple-effect btn-primary" ng-click="checkPromotion(Title)"\n' +
    '                ng-disabled="orderCustomizeProgramCtrl.itemList.length <= 0 ||!btnCheckValid|| Title==null ">\n' +
    '                {{\'CheckPromotion\' | translate}}</button>\n' +
    '\n' +
    '        </div>\n' +
    '        <br>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '    <span class="input-field col s6" ng-show="promotionValue == null">\n' +
    '        {{ promotionError}}</span>\n' +
    '\n' +
    '    <!-- <span class="input-field col s6" ng-show="promotionError== null">\n' +
    '        {{\'value\' | translate}}: {{ promotionValue.value}}\n' +
    '    </span> -->\n' +
    '   \n' +
    '    {{\'Pricelbl\' | translate}}:{{orderCustomizeProgramCtrl.totalPrice | number:2}} SR\n' +
    '    <!-- {{\'Pricelbl\' | translate}}:{{orderCustomizeProgramCtrl.totalPrice | number:0}} SR  -->\n' +
    '    <br>{{\'ProgramDiscount\' | translate}} : {{ orderCustomizeProgramCtrl.ProgramDiscount}} %\n' +
    '    <br> {{\'DeliveryPrice\' | translate}}:{{ orderCustomizeProgramCtrl.DeliveryFees}} SR\n' +
    '    <br>{{\'Total\' | translate}} :{{ orderCustomizeProgramCtrl.Total| number:2}} SR\n' +
    '    <br>\n' +
    '\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" class="btn pmd-ripple-effect btn-primary"\n' +
    '            type="button" ng-click="$state.go(\'callCenter\');">{{\'PreviousStep\' | translate}}</button>\n' +
    '\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '            ng-disabled="orderCustomizeProgramCtrl.selectedBranchId  <= 0 || !orderCustomizeProgramCtrl.dateIsValid"\n' +
    '            class="btn btn-success" name="next" type="button" ng-click="orderCustomizeProgramCtrl.AddNewProgram()">\n' +
    '            {{\'Save\' | translate}}</button>\n' +
    '\n' +
    '        <!-- ng-disabled="(orderCustomizeProgramCtrl.currentStep != orderCustomizeProgramCtrl.steps.length)||\n' +
    '        !orderCustomizeProgramCtrl.dateIsValid"  -->\n' +
    '    </div>\n' +
    '</form>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/callCenter/templates/customizeStepTwo.html',
    '<!-- Inbox like Accordion -->\n' +
    '<form name="newProgramForm2">\n' +
    '    <div class="row">\n' +
    '        <div\n' +
    '            class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'ProgramDaysCount\' | translate}}</label>\n' +
    '\n' +
    '            <input ng-change="orderCustomizeProgramCtrl.ConvertToNumber();orderCustomizeProgramCtrl.changeDayCount();" required type="number"\n' +
    '                class="mat-input form-control" name="programDaysCount" positive ng-pattern="/^[0-9]{1,5}$/"\n' +
    '                ng-model="orderCustomizeProgramCtrl.ProgramDaysCount" minlength="0" maxlength="2">\n' +
    '            <div ng-messages="newProgramForm2.programDaysCount.$error">\n' +
    '                <div\n' +
    '                    ng-if="newProgramForm2.programDaysCount.$error.required && !newProgramForm2.programDaysCount.$pristine">\n' +
    '                    {{\'requiredErr\' | translate}}\n' +
    '                </div>\n' +
    '                <div\n' +
    '                    ng-if="(newProgramForm2.programDaysCount.$error.minlength || newProgramForm2.programDaysCount.$error.maxlength)">\n' +
    '                    {{\'maxlength\' | translate}}</div>\n' +
    '                <div\n' +
    '                    ng-if="orderCustomizeProgramCtrl.Setting.minNoDaysPerProgram > orderCustomizeProgramCtrl.ProgramDaysCount">\n' +
    '                    {{\'ProgramDaysMinValue\' | translate}}{{orderCustomizeProgramCtrl.Setting.minNoDaysPerProgram}}</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div\n' +
    '            class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'MealPerDay\' | translate}}</label>\n' +
    '            <input ng-change="orderCustomizeProgramCtrl.ConvertToNumber(); orderCustomizeProgramCtrl.changeMealCount();" required type="number" positive ng-pattern="/^[0-9]{1,5}$/"\n' +
    '                class="mat-input form-control" name="mealPerDay" ng-model="orderCustomizeProgramCtrl.MealPerDay"\n' +
    '                minlength="0" maxlength="2">\n' +
    '            <div ng-messages="newProgramForm2.mealPerDay.$error">\n' +
    '                <div ng-if="newProgramForm2.mealPerDay.$error.required && !newProgramForm2.mealPerDay.$pristine">\n' +
    '                    {{\'requiredErr\' | translate}}</div>\n' +
    '                <div\n' +
    '                    ng-if="(newProgramForm2.mealPerDay.$error.minlength || newProgramForm2.mealPerDay.$error.maxlength)">\n' +
    '                    {{\'maxlength\' | translate}}</div>\n' +
    '                    <div ng-if="newProgramForm2.mealPerDay.$error.pattern && !newProgramForm2.mealPerDay.$pristine">\n' +
    '                        {{\'wrongpattern\' | translate}}</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-9">\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Breakfast\' | translate}}\n' +
    '                    <input type="checkbox" ng-model="orderCustomizeProgramCtrl.IsBreakFast">\n' +
    '                </label>\n' +
    '                {{orderCustomizeProgramCtrl.IsBreakFast}}\n' +
    '                <br />\n' +
    '                <label for="first-name">{{\'Snack\' | translate}}\n' +
    '                    <input type="checkbox" ng-model="orderCustomizeProgramCtrl.IsSnack">\n' +
    '                </label>\n' +
    '                {{orderCustomizeProgramCtrl.IsSnack}}\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-12">\n' +
    '            <div ng-init="counterDay = 0; counterMeal = 0">\n' +
    '                <div class="panel-group pmd-accordion pmd-accordion-inbox" id="accordion6" role="tablist"\n' +
    '                    aria-multiselectable="true">\n' +
    '                    <!-- <div ng-repeat="n in [].constructor(orderCustomizeProgramCtrl.daysCount)  track by $index" -->\n' +
    '                        <div ng-repeat="dayObj in orderCustomizeProgramCtrl.daylistCount"\n' +
    '                        class="panel panel-default">\n' +
    '                        <div class="panel-heading" role="tab" id="headingOne">\n' +
    '                            <h4 class="panel-title">\n' +
    '                                <a ng-init="counterDay=counterDay+1;" data-toggle="collapse" data-parent="#accordion6"\n' +
    '                                    ng-init="n=false" ng-click="n=!n;" aria-expanded="true" aria-controls="collapseOne6"\n' +
    '                                    data-expandable="false">\n' +
    '                                    {{\'Day\' | translate}} {{counterDay=$index+1}}\n' +
    '                                    <i class="material-icons md-dark pmd-sm pmd-accordion-arrow">keyboard_arrow_down</i>\n' +
    '                                </a>\n' +
    '                            </h4>\n' +
    '                        </div>\n' +
    '                        <div ng-show="n == true" id="collapseOne6" class="panel-collapse collapse in" role="tabpanel"\n' +
    '                            aria-labelledby="headingOne">\n' +
    '                            <div class="panel-body">\n' +
    '                                \n' +
    '\n' +
    '                                    <div ng-if="orderCustomizeProgramCtrl.IsBreakFast==true">\n' +
    '                                            {{\'Breakfast\' | translate}}\n' +
    '                                            <div class="row">\n' +
    '                                                <div\n' +
    '                                                    class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                    <label for="first-name">{{\'SelectCategory\' | translate}}</label>\n' +
    '                                                    <select style="width:100% !important"\n' +
    '                                                        class="form-control select-with-search pmd-select2-tags"\n' +
    '                                                        ng-model="meal.selectedCategoryId"\n' +
    '                                                        ng-change="orderCustomizeProgramCtrl.changeCategory(meal.selectedCategoryId,meal)">\n' +
    '                                                        <option ng-repeat="category in orderCustomizeProgramCtrl.categories"\n' +
    '                                                            ng-value="{{category.categoryId}}">\n' +
    '                                                            {{category.titleDictionary[selectedLanguage]}}\n' +
    '                                                        </option>\n' +
    '                                                    </select>\n' +
    '                                                </div>\n' +
    '                                                <div\n' +
    '                                                    class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                    <label for="first-name">{{\'SelectItems\' | translate}}</label>\n' +
    '                                                    <select style="width:100% !important"\n' +
    '                                                        class="form-control select-with-search pmd-select2-tags"\n' +
    '                                                        ng-model="meal.selectedItem"\n' +
    '                                                        ng-change="orderCustomizeProgramCtrl.changeItem(meal.selectedItem.itemId,meal)">\n' +
    '                                                        <option ng-repeat="item in meal.items" ng-value="{{item}}">\n' +
    '                                                            {{item.itemNameDictionary[selectedLanguage]}}\n' +
    '                                                        </option>\n' +
    '                                                    </select>\n' +
    '                                                </div>\n' +
    '                                                <div\n' +
    '                                                    class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                    <label for="first-name">{{\'selectSizeLbl\' | translate}}</label>\n' +
    '                                                    <select style="width:100% !important"\n' +
    '                                                        class="form-control select-with-search pmd-select2-tags"\n' +
    '                                                        ng-model="meal.selectedItemSize">\n' +
    '                                                        <option ng-repeat="item in meal.itemSizes" ng-value="{{item}}">\n' +
    '                                                            {{item.sizeNameDictionary[selectedLanguage]}}\n' +
    '                                                        </option>\n' +
    '                                                    </select>\n' +
    '                                                </div>\n' +
    '        \n' +
    '                                                <div\n' +
    '                                                    class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                    <button\n' +
    '                                                        style="background-color: #e4e5e6;color: black!important;     margin-top: 38px;"\n' +
    '                                                        ng-disabled="meal.selectedCategoryId <= 0 || meal.selectedItem == null || meal.selectedItemSize == null"\n' +
    '                                                        class="btn pmd-ripple-effect btn-primary" type="button"\n' +
    '                                                        ng-click="getData(meal.selectedItemSize,counterDay,counterMeal,meal,\'BreakFast\')">\n' +
    '                                                        {{\'addItemBtn\' | translate}}</button>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                            <div\n' +
    '                                                class=" form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        \n' +
    '                                                <table class="table pmd-table table-hover">\n' +
    '                                                    <thead>\n' +
    '                                                        <tr>\n' +
    '                                                            <th>{{\'Name\' | translate}}</th>\n' +
    '                                                            <th>{{\'itemSize\' | translate}}</th>\n' +
    '                                                            <th></th>\n' +
    '                                                        </tr>\n' +
    '                                                    </thead>\n' +
    '                                                    <tbody>\n' +
    '                                                        <tr ng-repeat="itemSize in meal.selectedItemList">\n' +
    '                                                            <td data-title="Name" width="15%">\n' +
    '                                                                {{itemSize.itemNameDictionary[selectedLanguage] | limitTo:10}}\n' +
    '                                                            </td>\n' +
    '                                                            <td data-title="Description">\n' +
    '                                                                {{itemSize.sizeNameDictionary[selectedLanguage]}}\n' +
    '                                                            </td>\n' +
    '                                                            <td><i class="material-icons pmd-md deleteButton cursorPointer font25"\n' +
    '                                                                    ng-click="orderCustomizeProgramCtrl.removeItem(itemSize,meal)">delete</i>\n' +
    '                                                            </td>\n' +
    '        \n' +
    '                                                        </tr>\n' +
    '                                                    </tbody>\n' +
    '                                                </table>\n' +
    '                                            </div>\n' +
    '                                            <input type="number" name="ddl{{counterDay}}{{counterMeal}}" hidden\n' +
    '                                                ng-model="meal.selectedItemList.length" min="1" required>\n' +
    '                                        </div>\n' +
    '                                        <div ng-if="orderCustomizeProgramCtrl.IsSnack==true">\n' +
    '                                            {{\'Snack\' | translate}}\n' +
    '                                            <div class="row">\n' +
    '                                                <div\n' +
    '                                                    class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                    <label for="first-name">{{\'SelectCategory\' | translate}}</label>\n' +
    '                                                    <select style="width:100% !important"\n' +
    '                                                        class="form-control select-with-search pmd-select2-tags"\n' +
    '                                                        ng-model="meal.selectedCategoryId"\n' +
    '                                                        ng-change="orderCustomizeProgramCtrl.changeCategory(meal.selectedCategoryId,meal)">\n' +
    '                                                        <option ng-repeat="category in orderCustomizeProgramCtrl.categories"\n' +
    '                                                            ng-value="{{category.categoryId}}">\n' +
    '                                                            {{category.titleDictionary[selectedLanguage]}}\n' +
    '                                                        </option>\n' +
    '                                                    </select>\n' +
    '                                                </div>\n' +
    '                                                <div\n' +
    '                                                    class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                    <label for="first-name">{{\'SelectItems\' | translate}}</label>\n' +
    '                                                    <select style="width:100% !important"\n' +
    '                                                        class="form-control select-with-search pmd-select2-tags"\n' +
    '                                                        ng-model="meal.selectedItem"\n' +
    '                                                        ng-change="orderCustomizeProgramCtrl.changeItem(meal.selectedItem.itemId,meal)">\n' +
    '                                                        <option ng-repeat="item in meal.items" ng-value="{{item}}">\n' +
    '                                                            {{item.itemNameDictionary[selectedLanguage]}}\n' +
    '                                                        </option>\n' +
    '                                                    </select>\n' +
    '                                                </div>\n' +
    '                                                <div\n' +
    '                                                    class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                    <label for="first-name">{{\'selectSizeLbl\' | translate}}</label>\n' +
    '                                                    <select style="width:100% !important"\n' +
    '                                                        class="form-control select-with-search pmd-select2-tags"\n' +
    '                                                        ng-model="meal.selectedItemSize">\n' +
    '                                                        <option ng-repeat="item in meal.itemSizes" ng-value="{{item}}">\n' +
    '                                                            {{item.sizeNameDictionary[selectedLanguage]}}\n' +
    '                                                        </option>\n' +
    '                                                    </select>\n' +
    '                                                </div>\n' +
    '        \n' +
    '                                                <div\n' +
    '                                                    class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                    <button\n' +
    '                                                        style="background-color: #e4e5e6;color: black!important;     margin-top: 38px;"\n' +
    '                                                        ng-disabled="meal.selectedCategoryId <= 0 || meal.selectedItem == null || meal.selectedItemSize == null"\n' +
    '                                                        class="btn pmd-ripple-effect btn-primary" type="button"\n' +
    '                                                        ng-click="getData(meal.selectedItemSize,counterDay,counterMeal,meal,\'Snacks\')">\n' +
    '                                                        {{\'addItemBtn\' | translate}}</button>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '        \n' +
    '                                            <div\n' +
    '                                                class=" form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        \n' +
    '                                                <table class="table pmd-table table-hover">\n' +
    '                                                    <thead>\n' +
    '                                                        <tr>\n' +
    '                                                            <th>{{\'Name\' | translate}}</th>\n' +
    '                                                            <th>{{\'itemSize\' | translate}}</th>\n' +
    '                                                            <th></th>\n' +
    '                                                        </tr>\n' +
    '                                                    </thead>\n' +
    '                                                    <tbody>\n' +
    '                                                        <tr ng-repeat="itemSize in meal.selectedItemList">\n' +
    '                                                            <td data-title="Name" width="15%">\n' +
    '                                                                {{itemSize.itemNameDictionary[selectedLanguage] | limitTo:10}}\n' +
    '                                                            </td>\n' +
    '                                                            <td data-title="Description">\n' +
    '                                                                {{itemSize.sizeNameDictionary[selectedLanguage]}}\n' +
    '                                                            </td>\n' +
    '                                                            <td><i class="material-icons pmd-md deleteButton cursorPointer font25"\n' +
    '                                                                    ng-click="orderCustomizeProgramCtrl.removeItem(itemSize,meal)">delete</i>\n' +
    '                                                            </td>\n' +
    '        \n' +
    '                                                        </tr>\n' +
    '                                                    </tbody>\n' +
    '                                                </table>\n' +
    '                                            </div>\n' +
    '                                            <input type="number" name="ddl{{counterDay}}{{counterMeal}}" hidden\n' +
    '                                                ng-model="meal.selectedItemList.length" min="1" required>\n' +
    '                                        </div>\n' +
    '                                <ul>\n' +
    '                                    <li ng-repeat="meal in dayObj.meals">\n' +
    '                                        <h4>\n' +
    '                                            <a ng-init="counterMeal=counterMeal+1;"\n' +
    '                                                ng-click="showDetails = ! showDetails; orderCustomizeProgramCtrl.showDDL(); ">{{\'Meal\' | translate}}\n' +
    '                                                {{counterMeal=$index+1}}</a>\n' +
    '                                        </h4>\n' +
    '                                        <div ng-show="showDetails">\n' +
    '                                                <div class="row">\n' +
    '                                                        <div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                            <label for="first-name">{{\'SelectCategory\' | translate}}</label>\n' +
    '                                                            <select style="width:100% !important" class="form-control select-with-search pmd-select2-tags"\n' +
    '                                                                ng-model="meal.selectedCategoryId" ng-change="orderCustomizeProgramCtrl.changeCategory(meal.selectedCategoryId,meal)">\n' +
    '                                                                <option ng-repeat="category in orderCustomizeProgramCtrl.categories"\n' +
    '                                                                    ng-value="{{category.categoryId}}">{{category.titleDictionary[selectedLanguage]}}</option>\n' +
    '                                                            </select>\n' +
    '                                                        </div>\n' +
    '                                                        <div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                            <label for="first-name">{{\'SelectItems\' | translate}}</label>\n' +
    '                                                            <select ng-disabled="meal.isloading" style="width:100% !important" class="form-control select-with-search pmd-select2-tags"\n' +
    '                                                                ng-model="meal.selectedItem" ng-change="orderCustomizeProgramCtrl.changeItem(meal.selectedItem.itemId,meal)">\n' +
    '                                                                <option ng-repeat="item in meal.items" ng-value="{{item}}">{{item.itemNameDictionary[selectedLanguage]}}</option>\n' +
    '                                                            </select>\n' +
    '                                                        </div>\n' +
    '                                                        <div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                            <label for="first-name">{{\'selectSizeLbl\' | translate}}</label>\n' +
    '                                                            <select ng-disabled="meal.isloading" style="width:100% !important" class="form-control select-with-search pmd-select2-tags"\n' +
    '                                                                ng-model="meal.selectedItemSize">\n' +
    '                                                                <option ng-repeat="item in meal.itemSizes" ng-value="{{item}}">{{item.sizeNameDictionary[selectedLanguage]}}</option>\n' +
    '                                                            </select>\n' +
    '                                                        </div>\n' +
    '        \n' +
    '                                                        <div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                            <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '                                                                ng-disabled="meal.selectedCategoryId <= 0 || meal.selectedItem == null || meal.selectedItemSize == null"\n' +
    '                                                                class="btn pmd-ripple-effect btn-primary" type="button"\n' +
    '                                                                ng-click="getData(meal.selectedItemSize,counterDay,counterMeal,meal,\'Normal\')">\n' +
    '                                                                {{\'addItemBtn\' | translate}}</button>\n' +
    '                                                                <img ng-show="meal.isloading" src="assets/img/loading.gif" style="height: 40px;">\n' +
    '                                                        </div>\n' +
    '                                                    </div>\n' +
    '                                                    <div class=" form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '                                                            <table class="table pmd-table table-hover">\n' +
    '                                                                <thead>\n' +
    '                                                                    <tr>\n' +
    '                                                                        <th>{{\'Name\' | translate}}</th>\n' +
    '                                                                        <th>{{\'SizeName\' | translate}}</th>\n' +
    '                                                                        <th></th>\n' +
    '                                                                    </tr>\n' +
    '                                                                </thead>\n' +
    '                                                                <tbody>\n' +
    '                                                                    <tr ng-repeat="itemSize in meal.selectedItemList">\n' +
    '                                                                        <td data-title="Name" width="15%">{{itemSize.itemNameDictionary[selectedLanguage] | limitTo:10}}</td>\n' +
    '                                                                        <td data-title="Description">{{itemSize.sizeNameDictionary[selectedLanguage]}}</td>\n' +
    '                                                                        <td><i class="material-icons pmd-md deleteButton cursorPointer font25" ng-click="orderCustomizeProgramCtrl.removeItem(itemSize,meal)">delete</i></td>\n' +
    '                                            \n' +
    '                                                                    </tr>\n' +
    '                                                                </tbody>\n' +
    '                                                            </table>\n' +
    '                                                        </div>\n' +
    '                                                        <input type="number" name="ddl{{counterDay}}{{counterMeal}}" hidden  ng-model="meal.selectedItemList.length" min="1" required>   \n' +
    '                                            <!-- <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                <label for="first-name">{{\'SelectItems\' | translate}}</label>\n' +
    '                                                <select required name="ddl{{counterDay}}{{counterMeal}}"\n' +
    '                                                    style="width:100% !important"\n' +
    '                                                    class="form-control select-add-tags pmd-select2-tags" multiple\n' +
    '                                                    ng-model="itemModel"\n' +
    '                                                    ng-change="getData(itemModel,counterDay,counterMeal)" ng-options="item as item.itemNameDictionary[selectedLanguage] \n' +
    '                                            group by item.category.titleDictionary[selectedLanguage]\n' +
    '                                            for item  in itemsssPrepService">\n' +
    '                                                </select>\n' +
    '                                                <div\n' +
    '                                                    ng-messages="newProgramForm2.ddl{{counterDay}}{{counterMeal}}.$error">\n' +
    '\n' +
    '                                                    <div\n' +
    '                                                        ng-show="newProgramForm2.ddl{{counterDay}}{{counterMeal}}.$error.required && !newProgramForm2.ddl{{counterDay}}{{counterMeal}}.$pristine">\n' +
    '                                                        {{\'requiredErr\' | translate}}</div>\n' +
    '                                                    <div\n' +
    '                                                        ng-show="(newProgramForm2.ddl{{counterDay}}{{counterMeal}}.$error.minlength || newProgramForm2.ddl{{counterDay}}{{counterMeal}}.$error.maxlength) && !newProgramForm2.ddl{{counterDay}}{{counterMeal}}.$error.required">\n' +
    '                                                        {{\'NameLengthError255\' | translate}}</div>\n' +
    '                                                </div>\n' +
    '                                            </div> -->\n' +
    '                                        </div>\n' +
    '                                    </li>\n' +
    '                                </ul>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" class="btn pmd-ripple-effect btn-primary"\n' +
    '            type="button" ng-click="$state.go(\'callCenter\');">{{\'PreviousStep\' | translate}}</button>\n' +
    '\n' +
    '\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '            ng-disabled="(newProgramForm2.$invalid || (orderCustomizeProgramCtrl.daysCount == 0 ||\n' +
    '             orderCustomizeProgramCtrl.mealsCount == 0) || (orderCustomizeProgramCtrl.Setting.minNoDaysPerProgram > orderCustomizeProgramCtrl.ProgramDaysCount))"\n' +
    '            class="btn pmd-ripple-effect btn-primary" type="button" ng-click="orderCustomizeProgramCtrl.gotoStep(3);">\n' +
    '            {{\'NextStep\' | translate}}</button>\n' +
    '\n' +
    '    </div>\n' +
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
    '        width: 45%;\n' +
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
    '    <div class="row">\n' +
    '        <div class="col-md-12">\n' +
    '            <div class="modal-header bordered">\n' +
    '                <h2 class="pmd-card-title-text">{{\'ProgramLbl\' | translate}}</h2>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <br>\n' +
    '    <div class="modal-body">\n' +
    '        <div class="row">\n' +
    '            <div class="col-md-12">\n' +
    '                <div id="wizard-container">\n' +
    '                    <div class="getting-started-nav">\n' +
    '                        <ul>\n' +
    '                            <h2 class="page-label">{{\'LETSCREATEPROGRAM\' | translate}}</h2>\n' +
    '                            <div class="nav-seperator"></div>\n' +
    '                            <li ng-class="{\'active\':orderCustomizeProgramCtrl.currentStep ==1}">\n' +
    '                                <span>1</span>\n' +
    '                                <label for="">{{\'BaiscInfo\' | translate}}</label>\n' +
    '                            </li>\n' +
    '                            <li ng-class="{\'active\':orderCustomizeProgramCtrl.currentStep ==2}">\n' +
    '                                <span>2</span>\n' +
    '                                <label for="">{{\'CreateMeal\' | translate}}</label>\n' +
    '                            </li>\n' +
    '                            <li ng-class="{\'active\':orderCustomizeProgramCtrl.currentStep ==3}">\n' +
    '                                <span>3</span>\n' +
    '                                <label for="">{{\'Summary\' | translate}}</label>\n' +
    '                            </li>\n' +
    '\n' +
    '                        </ul>\n' +
    '                    </div>\n' +
    '                    <!-- <div id="wizard-step-container">\n' +
    '                    <ul ng-init="counter = 0" class="nav nav-pills nav-justified">\n' +
    '                        <li ng-repeat="step in orderCustomizeProgramCtrl.steps" ng-class="{\'active\':step.step == orderCustomizeProgramCtrl.currentStep}">\n' +
    '                            <a style="background-image: linear-gradient(90deg,#9a3ea6 0%,#bc4abf 100%)!important; color: yellow!important;" ng-click="orderCustomizeProgramCtrl.gotoStep(step.step)"\n' +
    '                                href="">{{\'Step\' | translate}} #{{step.step}} </a>\n' +
    '                        </li>\n' +
    '                    </ul>\n' +
    '                </div> -->\n' +
    '\n' +
    '                    <div id="wizard-content-container">\n' +
    '                        <ng-include src="orderCustomizeProgramCtrl.getStepTemplate()"></ng-include>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div id="wizard-navigation-container" ng-show="false">\n' +
    '                        <div class="pull-right">\n' +
    '                            <span class="btn-group">\n' +
    '                                <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="1 >= orderCustomizeProgramCtrl.currentStep"\n' +
    '                                    class="btn btn-default" name="previous" type="button" ng-click="orderCustomizeProgramCtrl.gotoStep(orderCustomizeProgramCtrl.currentStep - 1)">\n' +
    '                                    <i class="fa fa-arrow-left"></i>{{\'PreviousStep\' | translate}}</button>\n' +
    '                                <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="orderCustomizeProgramCtrl.currentStep >= orderCustomizeProgramCtrl.steps.length"\n' +
    '                                    class="btn btn-primary" name="next" type="button" ng-click="orderCustomizeProgramCtrl.gotoStep(orderCustomizeProgramCtrl.currentStep + 1)">{{\'fdfdfdfdf\' | translate}}\n' +
    '                                    <i class="fa fa-arrow-right"></i>\n' +
    '                                </button>\n' +
    '                            </span>\n' +
    '                            <!-- {{orderCustomizeProgramCtrl.Setting.minNoDaysPerProgram}} / {{orderCustomizeProgramCtrl.ProgramDaysCount}} -->\n' +
    '                            <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '                             ng-disabled="(orderCustomizeProgramCtrl.currentStep != orderCustomizeProgramCtrl.steps.length) ||\n' +
    '                              (orderCustomizeProgramCtrl.Setting.minNoDaysPerProgram > orderCustomizeProgramCtrl.ProgramDaysCount)\n' +
    '                              || !orderCustomizeProgramCtrl.dateIsValid"\n' +
    '                                class="btn btn-success" name="next" type="button" ng-click="orderCustomizeProgramCtrl.AddNewProgram()">\n' +
    '                                <i class="fa fa-floppy-o"></i>{{\'NextStep\' | translate}}</button>\n' +
    '                        </div>\n' +
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
    '        var today = new Date();\n' +
    '        $(\'#startdate\').datetimepicker(\n' +
    '            {\n' +
    '                minDate: today.setHours(today.getHours()+1)\n' +
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
    '        var today = new Date();\n' +
    '\n' +
    '        $(\'#startdate\').datetimepicker(\n' +
    '            {\n' +
    '                minDate: today.setHours(today.getHours() + 1)\n' +
    '            }\n' +
    '        ).on(\'dp.change\', function (e) {\n' +
    '            debugger;\n' +
    '            angular.element(document.getElementById(\'startdate\')).scope().dateChange();\n' +
    '        });\n' +
    '    });\n' +
    '\n' +
    '</script>\n' +
    '\n' +
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text"> {{\'Meal\' | translate}}</h2>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="modal-body">\n' +
    '        <form name="orderMealForm">\n' +
    '            {{\'CheckMealContent\' | translate}}\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'SelectMeals\' | translate}}</label>\n' +
    '                <select style="width:100% !important" class="form-control select-add-tags pmd-select2-tags"\n' +
    '                    ng-model="orderMealsCtrl.meal" ng-change="orderMealsCtrl.mealSearch()" ng-options="item as item.mealNameDictionary[selectedLanguage] \n' +
    '                for item  in mealsPrepService.results">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '\n' +
    '            <table style="background: white" ng-show="orderMealsCtrl.flag == true" class="table pmd-table table-hover">\n' +
    '                <thead>\n' +
    '                    <tr>\n' +
    '                        <th>{{\'ItemName\' | translate}}</th>\n' +
    '                        <th>{{\'ItemDescription\' | translate}}</th>\n' +
    '                        <th>{{\'Calories\' | translate}}</th>\n' +
    '                        <th>{{\'Protein\' | translate}}</th>\n' +
    '                        <th>{{\'Carbs\' | translate}}</th>\n' +
    '                        <th>{{\'Fats\' | translate}}</th>\n' +
    '                        <th>{{\'Size\' | translate}}</th>\n' +
    '                    </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                    <tr ng-repeat="item in orderMealsCtrl.mealItemss">\n' +
    '                        <td data-title="Name">{{item.itemNameDictionary[selectedLanguage]}}</td>\n' +
    '                        <td data-title="Name">{{item.itemDescriptionDictionary[selectedLanguage]}}</td>\n' +
    '                        <td data-title="Name">{{item.calories}}</td>\n' +
    '                        <td data-title="Name">{{item.protein}}</td>\n' +
    '                        <td data-title="Name">{{item.carbs}}</td>\n' +
    '                        <td data-title="Name">{{item.fat}}</td>\n' +
    '                        <td data-title="Name">{{item.sizeNameDictionary[selectedLanguage]}}</td>\n' +
    '\n' +
    '                    </tr>\n' +
    '                </tbody>\n' +
    '            </table>\n' +
    '\n' +
    '            <hr> {{\'OrderMeal\' | translate}}\n' +
    '\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'SelectMeals\' | translate}}</label>\n' +
    '                <select style="width:100% !important" class="form-control select-add-tags pmd-select2-tags"\n' +
    '                    ng-model="itemModel" ng-change="getData(itemModel)" ng-options="item as item.mealNameDictionary[selectedLanguage]   \n' +
    '            for item  in mealsPrepService.results">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Pricelbl\' | translate}}</label>\n' +
    '                <input disabled type="number" class="mat-input form-control" name="priceAfterDiscount"\n' +
    '                    ng-model="orderMealsCtrl.TotalPrice">\n' +
    '            </div>\n' +
    '            <br>{{\'ProgramDiscount\' | translate}} : {{ discount}} %\n' +
    '            <br>{{\'Total\' | translate}} :{{ Total | number:2}} SR\n' +
    '            <div class="row">\n' +
    '                <div class="input-field col s2">\n' +
    '                    <input required type="text" class="mat-input" name="title"\n' +
    '                        placeholder="{{\'PromotionLbl\' | translate}}" ng-model="Title" minlength="3" maxlength="255">\n' +
    '                    <div ng-messages="orderMealForm.title.$error">\n' +
    '                        <div ng-show="orderMealForm.title.$error.required && !orderMealForm.title.$pristine">\n' +
    '                            {{\'requiredErr\' | translate}}</div>\n' +
    '                        <div\n' +
    '                            ng-show="(orderMealForm.title.$error.minlength || orderMealForm.title.$error.maxlength) && !orderMealForm.title.$error.required">\n' +
    '                            {{\'NameLengthError255\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="input-field col s2">\n' +
    '                    <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '                        class="btn pmd-ripple-effect btn-primary" ng-click="checkPromotion(Title)"\n' +
    '                        ng-disabled="!btnCheckValid|| Title==null ">\n' +
    '                        {{\'CheckPromotion\' | translate}}</button>\n' +
    '\n' +
    '                </div>\n' +
    '                <br>\n' +
    '\n' +
    '            </div>\n' +
    '\n' +
    '            <span class="input-field col s6" ng-show="promotionValue == null">\n' +
    '                {{ promotionError}}</span>\n' +
    '\n' +
    '            <!-- <span class="input-field col s6" ng-show="promotionError== null">\n' +
    '                {{\'value\' | translate}}: {{ promotionValue.value}}\n' +
    '            </span> -->\n' +
    '\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Country\' | translate}}</label>\n' +
    '                <select required style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                    ng-change="orderMealsCtrl.countryChange()" ng-model="orderMealsCtrl.selectedCountryId"\n' +
    '                    ng-options="group.countryId as group.titleDictionary[selectedLanguage] for group in orderMealsCtrl.counties">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '            <div ng-show=" orderMealsCtrl.selectedCountryId > 0"\n' +
    '                class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Region\' | translate}}</label>\n' +
    '                <select required style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                    ng-change="orderMealsCtrl.regionChange()" ng-model="orderMealsCtrl.selectedRegionId"\n' +
    '                    ng-options="group.regionId as group.titleDictionary[selectedLanguage] for group in orderMealsCtrl.regions">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '            <div ng-show=" orderMealsCtrl.selectedRegionId > 0"\n' +
    '                class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'City\' | translate}}</label>\n' +
    '                <select ng-required="orderMealsCtrl.selectedRegionId > 0" style="width:100% !important"\n' +
    '                    class="select-tags form-control pmd-select2-tags" ng-change="orderMealsCtrl.cityChange()"\n' +
    '                    ng-model="orderMealsCtrl.selectedCityId"\n' +
    '                    ng-options="group.cityId as group.titleDictionary[selectedLanguage] for group in orderMealsCtrl.cities">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '            <div ng-show=" orderMealsCtrl.selectedCityId > 0"\n' +
    '                class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Area\' | translate}}</label>\n' +
    '                <select ng-required=" orderMealsCtrl.selectedCityId > 0" style="width:100% !important"\n' +
    '                    class="select-tags form-control pmd-select2-tags" ng-change="orderMealsCtrl.areaChange()"\n' +
    '                    ng-model="orderMealsCtrl.selectedAreaId"\n' +
    '                    ng-options="group.areaId as group.titleDictionary[selectedLanguage] for group in orderMealsCtrl.area">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '            <div ng-show=" orderMealsCtrl.selectedAreaId > 0"\n' +
    '                class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Branch\' | translate}}</label>\n' +
    '                <select ng-required=" orderMealsCtrl.selectedAreaId > 0 "\n' +
    '                    class="form-control select-with-search pmd-select2-tags" ng-change="orderMealsCtrl.branchChange()"\n' +
    '                    ng-model="orderMealsCtrl.selectedBranchId"\n' +
    '                    ng-options="a.branchId as a.titleDictionary[selectedLanguage] for a in orderMealsCtrl.branchList"></select>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div\n' +
    '                    class="col-md-2 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                    <label for="regular1" class="control-label">{{\'orderPickDateTime\' | translate}}</label>\n' +
    '                    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                        <input ng-model="orderMealsCtrl.itemDatetime" type="text" ng-change="orderMealsCtrl.dateChange"\n' +
    '                            id="startdate" class="form-control" />\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '         \n' +
    '            <div class="pmd-modal-action text-right">\n' +
    '                <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '                    class="btn pmd-ripple-effect btn-primary" type="button"\n' +
    '                    ng-click="$state.go(\'callCenter\');">{{\'PreviousStep\' | translate}}</button>\n' +
    '\n' +
    '                <button\n' +
    '                    ng-disabled="orderMealForm.$invalid || !orderMealsCtrl.dateIsValid || orderMealsCtrl.selectedBranchId < 0"\n' +
    '                    style="background-color: #e4e5e6;color: black!important;" class="btn pmd-ripple-effect btn-primary"\n' +
    '                    type="button" ng-click="orderMealsCtrl.Order()">{{\'Order\' | translate}}</button>\n' +
    '            </div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '        </form>\n' +
    '    </div>\n' +
    '</div>');
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
    '        var today = new Date();\n' +
    '        var tomorrow = new Date();\n' +
    '\n' +
    '        $(\'#startdate\').datetimepicker(\n' +
    '            {\n' +
    '                minDate: tomorrow.setDate(today.getDate() + 1)\n' +
    '            }\n' +
    '        ).on(\'dp.change\', function (e) {\n' +
    '            debugger;\n' +
    '            angular.element(document.getElementById(\'startdate\')).scope().dateChange();\n' +
    '        });\n' +
    '    });\n' +
    '</script>\n' +
    '\n' +
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text"> {{\'Program\' | translate}}</h2>\n' +
    '    </div>\n' +
    '    <div class="modal-body">\n' +
    '        <form name="orderProgramForm">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-3">\n' +
    '                    {{\'CheckProgramContent\' | translate}}\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-6">\n' +
    '                    <div\n' +
    '                        class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'SelectProgram\' | translate}}</label>\n' +
    '                        <select style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                            ng-change="orderProgramsCtrl.programSearch();" ng-model="orderProgramsCtrl.program"\n' +
    '                            ng-options="program as program.programNameDictionary[selectedLanguage] for program  in programsPrepService.results">\n' +
    '                        </select>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12">\n' +
    '                    <div ng-if="orderProgramsCtrl.flag == true" ng-init="counterDay = 0; counterMeal = 0">\n' +
    '                        <div class="panel-group pmd-accordion pmd-accordion-inbox" id="accordion6" role="tablist"\n' +
    '                            aria-multiselectable="true">\n' +
    '                            <div ng-repeat="n in [].constructor(orderProgramsCtrl.mealItemss.programDays)  track by $index"\n' +
    '                                class="panel panel-default">\n' +
    '                                <div class="panel-heading" role="tab" id="headingOne">\n' +
    '                                    <h4 class="panel-title">\n' +
    '                                        <a ng-init="counterDay=counterDay+1;" data-toggle="collapse"\n' +
    '                                            data-parent="#accordion6" ng-init="n=false" ng-click="n=!n;"\n' +
    '                                            aria-expanded="true" aria-controls="collapseOne6" data-expandable="false">\n' +
    '                                            {{\'Day\' | translate}} {{counterDay=$index+1}}\n' +
    '                                            <i\n' +
    '                                                class="material-icons md-dark pmd-sm pmd-accordion-arrow">keyboard_arrow_down</i>\n' +
    '                                        </a>\n' +
    '                                    </h4>\n' +
    '                                </div>\n' +
    '                                <div ng-show="n == true" id="collapseOne6" class="panel-collapse collapse in"\n' +
    '                                    role="tabpanel" aria-labelledby="headingOne">\n' +
    '                                    <div class="panel-body">\n' +
    '                                        <div ng-if="orderProgramsCtrl.mealItemss.isBreakfast==true">\n' +
    '                                            <h4>\n' +
    '                                                <a\n' +
    '                                                    ng-click="showBreakfast = ! showBreakfast;">{{\'Breakfast\' | translate}}</a>\n' +
    '                                            </h4>\n' +
    '\n' +
    '                                            <div ng-show="showBreakfast">\n' +
    '                                                <div\n' +
    '                                                    class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                    <label for="first-name">{{\'SelectItems\' | translate}}</label>\n' +
    '                                                    <ul>\n' +
    '                                                        <li\n' +
    '                                                            ng-repeat="detail in orderProgramsCtrl.mealItemss.programDetails | filter:{dayNumber:counterDay, mealNumberPerDay: 0 ,itemType:1 } : true">\n' +
    '\n' +
    '                                                            {{detail.itemSize.itemNameDictionary[selectedLanguage]}} /\n' +
    '                                                            {{detail.itemSize.sizeNameDictionary[selectedLanguage]}}\n' +
    '\n' +
    '                                                        </li>\n' +
    '                                                    </ul>\n' +
    '\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '\n' +
    '                                        <div ng-if="orderProgramsCtrl.mealItemss.isSnack==true">\n' +
    '                                            <h4>\n' +
    '                                                <a ng-click="showSnack = ! showSnack;">{{\'Snack\' | translate}}</a>\n' +
    '\n' +
    '                                            </h4>\n' +
    '                                            <div ng-show="showSnack">\n' +
    '                                                <div\n' +
    '                                                    class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                    <label for="first-name">{{\'SelectItems\' | translate}}</label>\n' +
    '\n' +
    '                                                    <ul>\n' +
    '                                                        <li\n' +
    '                                                            ng-repeat="detail in orderProgramsCtrl.mealItemss.programDetails | filter:{dayNumber:counterDay, mealNumberPerDay: 0 ,itemType:2 } : true">\n' +
    '\n' +
    '                                                            {{detail.itemSize.itemNameDictionary[selectedLanguage]}} /\n' +
    '                                                            {{detail.itemSize.sizeNameDictionary[selectedLanguage]}}\n' +
    '\n' +
    '                                                        </li>\n' +
    '                                                    </ul>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                        <ul>\n' +
    '                                            <li\n' +
    '                                                ng-repeat="meal in [].constructor(orderProgramsCtrl.mealItemss.noOfMeals)  track by $index">\n' +
    '                                                <h4>\n' +
    '                                                    <a ng-init="counterMeal=counterMeal+1;"\n' +
    '                                                        ng-click="showDetails = ! showDetails; orderProgramsCtrl.showDDL(); ">{{\'Meal\' | translate}}\n' +
    '                                                        {{counterMeal=$index+1}}</a>\n' +
    '                                                </h4>\n' +
    '                                                <div ng-show="showDetails">\n' +
    '                                                    <div\n' +
    '                                                        class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                        <label for="first-name">{{\'SelectItems\' | translate}}</label>\n' +
    '                                                        <ul>\n' +
    '                                                            <li\n' +
    '                                                                ng-repeat="detail in orderProgramsCtrl.mealItemss.programDetails | filter:{dayNumber:counterDay, mealNumberPerDay: counterMeal} ">\n' +
    '                                                                <div>\n' +
    '                                                                    <!-- ng-repeat="item in orderProgramsCtrl.mealItemss.items |filter :{itemSizeId:detail.itemSizeId}"> -->\n' +
    '                                                                    {{detail.itemSize.itemNameDictionary[selectedLanguage]}}\n' +
    '                                                                    /\n' +
    '                                                                    {{detail.itemSize.sizeNameDictionary[selectedLanguage]}}\n' +
    '                                                                </div>\n' +
    '                                                            </li>\n' +
    '                                                        </ul>\n' +
    '                                                    </div>\n' +
    '                                                </div>\n' +
    '                                            </li>\n' +
    '                                        </ul>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <hr>\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-2">\n' +
    '                    {{\'OrderProgram\' | translate}}\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-6">\n' +
    '                    <div\n' +
    '                        class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'SelectPrograms\' | translate}}</label>\n' +
    '                        <select required style="width:100% !important"\n' +
    '                            class="form-control select-add-tags pmd-select2-tags" ng-model="itemModel"\n' +
    '                            ng-change="getData(itemModel)" ng-options="item as item.programNameDictionary[selectedLanguage]\n' +
    '                        for item  in programsPrepService.results">\n' +
    '                        </select>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-6">\n' +
    '                    <div\n' +
    '                        class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'Pricelbl\' | translate}}</label>\n' +
    '                        <input disabled type="number" class="mat-input form-control" name="priceAfterDiscount"\n' +
    '                            ng-model="orderProgramsCtrl.TotalPrice">\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div\n' +
    '                    class="col-md-4 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                    <label for="regular1" class="control-label">{{\'orderPickDateTime\' | translate}}</label>\n' +
    '                    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                        <input ng-model="orderProgramsCtrl.itemDatetime" type="text"\n' +
    '                            ng-change="orderProgramsCtrl.dateChange()" id="startdate" class="form-control" />\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="row form-group">\n' +
    '                <div class="col-md-2">\n' +
    '                    <label for="first-name">{{\'OrderType\' | translate}}</label>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-6">\n' +
    '                    <div\n' +
    '                        class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label>\n' +
    '                            <input name="group1" type="radio" id="test1" ng-change="orderProgramsCtrl.typeChanged()"\n' +
    '                                ng-model="orderProgramsCtrl.orderType.type" value="delivery">\n' +
    '                            {{\'Deivery\' | translate}}\n' +
    '                        </label>\n' +
    '                        <label style="margin-left:3em">\n' +
    '                            <input name="group1" type="radio" id="test2" ng-change="orderProgramsCtrl.typeChanged()"\n' +
    '                                ng-model="orderProgramsCtrl.orderType.type" value="pickup">\n' +
    '                            {{\'Pickup\' | translate}}\n' +
    '                        </label>\n' +
    '                        <br />\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '\n' +
    '            <div class="row form-group">\n' +
    '                <div class="col-md-6">\n' +
    '                    <div ng-if="orderProgramsCtrl.orderType.type == \'delivery\'">\n' +
    '                        <div\n' +
    '                            class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                            <label for="first-name">{{\'SelectAddress\' | translate}}</label>\n' +
    '                            <div ng-repeat="address in orderProgramsCtrl.userAddresses">\n' +
    '                                <label>\n' +
    '                                    <input ng-change="orderProgramsCtrl.addressInfo(address)" type="radio"\n' +
    '                                        ng-model="orderProgramsCtrl.addresses.address" value="{{address.addressId}}">\n' +
    '                                    <!-- {{address.appartmentNo}}, {{address.description}}, {{\'Floor\' | translate}}\n' +
    '                                    {{address.floor}} -->\n' +
    '                                    {{\'appartmentNo\' | translate}}: {{address.appartmentNo}}\n' +
    '                                    <br> {{\'FLoor\' | translate}} : {{address.floor}}\n' +
    '                                    <br> {{\'description\' | translate}}\n' +
    '                                    :{{address.description}}</label>\n' +
    '\n' +
    '                                </label>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="row form-group">\n' +
    '                <div class="col-md-6">\n' +
    '                    <div ng-show="orderProgramsCtrl.orderType.type == \'pickup\'">\n' +
    '                        <div\n' +
    '                            class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                            <label for="first-name">{{\'Country\' | translate}}</label>\n' +
    '                            <select ng-required="orderProgramsCtrl.orderType.type == \'pickup\'"\n' +
    '                                style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                                ng-change="orderProgramsCtrl.countryChange()"\n' +
    '                                ng-model="orderProgramsCtrl.selectedCountryId"\n' +
    '                                ng-options="group.countryId as group.titleDictionary[selectedLanguage] for group in orderProgramsCtrl.counties">\n' +
    '                            </select>\n' +
    '                        </div>\n' +
    '                        <div ng-show=" orderProgramsCtrl.selectedCountryId > 0"\n' +
    '                            class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                            <label for="first-name">{{\'Region\' | translate}}</label>\n' +
    '                            <select ng-required="orderProgramsCtrl.orderType.type == \'pickup\'"\n' +
    '                                style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                                ng-change="orderProgramsCtrl.regionChange()"\n' +
    '                                ng-model="orderProgramsCtrl.selectedRegionId"\n' +
    '                                ng-options="group.regionId as group.titleDictionary[selectedLanguage] for group in orderProgramsCtrl.regions">\n' +
    '                            </select>\n' +
    '                        </div>\n' +
    '                        <div ng-show=" orderProgramsCtrl.selectedRegionId > 0"\n' +
    '                            class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                            <label for="first-name">{{\'City\' | translate}}</label>\n' +
    '                            <select\n' +
    '                                ng-required="orderProgramsCtrl.selectedRegionId > 0 && orderProgramsCtrl.orderType.type == \'pickup\'"\n' +
    '                                style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                                ng-change="orderProgramsCtrl.cityChange()" ng-model="orderProgramsCtrl.selectedCityId"\n' +
    '                                ng-options="group.cityId as group.titleDictionary[selectedLanguage] for group in orderProgramsCtrl.cities">\n' +
    '                            </select>\n' +
    '                        </div>\n' +
    '                        <div ng-show=" orderProgramsCtrl.selectedCityId > 0"\n' +
    '                            class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                            <label for="first-name">{{\'Area\' | translate}}</label>\n' +
    '                            <select\n' +
    '                                ng-required=" orderProgramsCtrl.selectedCityId > 0 && orderProgramsCtrl.orderType.type == \'pickup\'"\n' +
    '                                style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                                ng-change="orderProgramsCtrl.areaChange()" ng-model="orderProgramsCtrl.selectedAreaId"\n' +
    '                                ng-options="group.areaId as group.titleDictionary[selectedLanguage] for group in orderProgramsCtrl.area">\n' +
    '                            </select>\n' +
    '                        </div>\n' +
    '                        <div ng-show=" orderProgramsCtrl.selectedAreaId > 0"\n' +
    '                            class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                            <label for="first-name">{{\'Branch\' | translate}}</label>\n' +
    '                            <select\n' +
    '                                ng-required=" orderProgramsCtrl.selectedAreaId > 0  && orderProgramsCtrl.orderType.type == \'pickup\'"\n' +
    '                                class="form-control select-with-search pmd-select2-tags"\n' +
    '                                ng-change="orderProgramsCtrl.branchChange()"\n' +
    '                                ng-model="orderProgramsCtrl.selectedBranchId"\n' +
    '                                ng-options="a.branchId as a.titleDictionary[selectedLanguage] for a in orderProgramsCtrl.branchList"></select>\n' +
    '                        </div>\n' +
    '\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="input-field col s2">\n' +
    '                    <input required type="text" class="mat-input" name="title"\n' +
    '                        placeholder="{{\'PromotionLbl\' | translate}}" ng-model="Title" minlength="3" maxlength="255">\n' +
    '                    <div ng-messages="orderForm.title.$error">\n' +
    '                        <div ng-show="orderForm.title.$error.required && !orderForm.title.$pristine">\n' +
    '                            {{\'requiredErr\' | translate}}</div>\n' +
    '                        <div\n' +
    '                            ng-show="(orderForm.title.$error.minlength || orderForm.title.$error.maxlength) && !orderForm.title.$error.required">\n' +
    '                            {{\'NameLengthError255\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="input-field col s2">\n' +
    '                    <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '                        class="btn pmd-ripple-effect btn-primary" ng-click="checkPromotion(Title)"\n' +
    '                        ng-disabled="!btnCheckValid|| Title==null ">\n' +
    '                        {{\'CheckPromotion\' | translate}}</button>\n' +
    '\n' +
    '                </div>\n' +
    '                <br>\n' +
    '\n' +
    '            </div>\n' +
    '\n' +
    '            <span class="input-field col s6" ng-show="promotionValue == null">\n' +
    '                {{ promotionError}}</span>\n' +
    '\n' +
    '            <!-- <span class="input-field col s6" ng-show="promotionError== null">\n' +
    '                {{\'value\' | translate}}: {{ promotionValue.value}}\n' +
    '            </span> -->\n' +
    '\n' +
    '            {{\'Pricelbl\' | translate}}:{{ orderProgramsCtrl.TotalPrice | number:2}} SR\n' +
    '            <br> {{\'DeliveryPrice\' | translate}}:{{ orderProgramsCtrl.DeliveryFees}} SR\n' +
    '            <br> {{\'ProgramDiscount\' | translate}}:{{ orderProgramsCtrl.discount}} %\n' +
    '            <br>{{\'Total\' | translate}} :{{ orderProgramsCtrl.Total | number:2}} SR\n' +
    '            <br>\n' +
    '            <div class="pmd-modal-action text-right">\n' +
    '                <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '                    class="btn pmd-ripple-effect btn-primary" type="button"\n' +
    '                    ng-click="$state.go(\'callCenter\');">{{\'PreviousStep\' | translate}}</button>\n' +
    '                <button\n' +
    '                    ng-disabled="orderForm.$invalid  || orderProgramsCtrl.selectedBranchId <= 0 || \n' +
    '                (orderProgramsCtrl.addressValidation == false && orderProgramsCtrl.orderType.type == \'delivery\') || !orderProgramsCtrl.dateIsValid"\n' +
    '                    style="background-color: #e4e5e6;color: black!important;" class="btn pmd-ripple-effect btn-primary"\n' +
    '                    type="button" ng-click="orderProgramsCtrl.Order()">{{\'Order\' | translate}}</button>\n' +
    '            </div>\n' +
    '\n' +
    '        </form>\n' +
    '\n' +
    '    </div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/client/templates/addUser.html',
    '{{\'BasicInfoLbl\' | translate}}\n' +
    '<form class="form-horizontal" name="newclientForm">\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '        <label for="first-name">{{\'FirstNameLbl\' | translate}}</label>\n' +
    '        <input required type="text" class="mat-input form-control" name="firstName"  \n' +
    '            ng-model="FirstName" ng-minlength="3" ng-maxlength="255">\n' +
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
    '        <input required type="text" class="mat-input form-control" name="lastName"  \n' +
    '            ng-model="LastName" ng-minlength="3" ng-maxlength="255">\n' +
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
    '        <input required type="text" class="mat-input form-control" name="userEmail" ng-model="Email"\n' +
    '            ng-pattern="/^\\w+([-+.\']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$/">\n' +
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
    '        <input required type="password" class="mat-input form-control" name="password" ng-model="Password"\n' +
    '            ng-minlength="8" ng-maxlength="25">\n' +
    '        <div ng-messages="newclientForm.password.$error">\n' +
    '            <div ng-if="newclientForm.password.$error.required && !newclientForm.password.$pristine">{{\'requiredErr\' |\n' +
    '                translate}}</div>\n' +
    '            <div\n' +
    '                ng-if="(newclientForm.password.$error.minlength || newclientForm.password.$error.maxlength) && !newclientForm.password.newPassword.$error.required">\n' +
    '                Password\n' +
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
    '        <select style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '            ng-change="userCtrl.countryChange()" ng-model="userCtrl.selectedCountryId"\n' +
    '            ng-options="group.countryId as group.titleDictionary[selectedLanguage] for group in userCtrl.counties">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div ng-show=" userCtrl.selectedCountryId > 0"\n' +
    '        class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Region\' | translate}}</label>\n' +
    '        <select style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '            ng-change="userCtrl.regionChange()" ng-model="userCtrl.selectedRegionId"\n' +
    '            ng-options="group.regionId as group.titleDictionary[selectedLanguage] for group in userCtrl.regions">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div ng-show=" userCtrl.selectedRegionId > 0"\n' +
    '        class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'City\' | translate}}</label>\n' +
    '        <select style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '            ng-change="userCtrl.cityChange()" ng-model="userCtrl.selectedCityId"\n' +
    '            ng-options="group.cityId as group.titleDictionary[selectedLanguage] for group in userCtrl.cities">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div ng-show=" userCtrl.selectedCityId > 0"\n' +
    '        class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Area\' | translate}}</label>\n' +
    '        <select style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '            ng-change="userCtrl.areaChange()" ng-model="userCtrl.selectedAreaId"\n' +
    '            ng-options="group.areaId as group.titleDictionary[selectedLanguage] for group in userCtrl.area">\n' +
    '        </select>\n' +
    '    </div>\n' +
    '    <div ng-show=" userCtrl.selectedAreaId > 0"\n' +
    '        class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'Branch\' | translate}}</label>\n' +
    '        <select class="form-control select-with-search pmd-select2-tags" ng-change="userCtrl.branchChange()"\n' +
    '            ng-model="userCtrl.selectedBranchId"\n' +
    '            ng-options="a.branchId as a.titleDictionary[selectedLanguage] for a in userCtrl.branchList"></select>\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label> {{ \'Role\' | translate}} </label>\n' +
    '        <select required style="width:100% !important" class="form-control select-with-search pmd-select2-tags" multiple\n' +
    '            ng-model="userCtrl.selectedUserRoles"\n' +
    '            ng-options="role as role.titleDictionary[selectedLanguage] for role in roleList"></select>\n' +
    '\n' +
    '    </div>\n' +
    '</form>\n' +
    '\n' +
    '<div class="pmd-modal-action text-right">\n' +
    '    <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '        ng-disabled="newclientForm.$invalid  || userCtrl.selectedUserRoles > 0 "\n' +
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
  $templateCache.put('./app/GlobalAdmin/client/templates/client.html',
    '<div>\n' +
    '    <!-- <div style="margin-bottom:10px">\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" ng-click="$state.go(\'addClient\');"\n' +
    '            class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddClientBtn\' | translate}}</button>\n' +
    '\n' +
    '    </div> -->\n' +
    '    <div ng-if="clientCtrl.clientList.results.length == 0">\n' +
    '        <span>{{\'NoclientAvailable\' | translate}}</span>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="clientList.length >0">\n' +
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
    '                    <tr ng-repeat="client in clientList">\n' +
    '                        <td data-title="Name" width="20%">{{client.firstName}} {{client.lastName}}</td>\n' +
    '                        <td data-title="Name" width="20%">{{client.email}} </td>\n' +
    '\n' +
    '                        <td data-title="Description">{{client.phone}}</td>\n' +
    '                        <td>\n' +
    '                            <div class="btn-switch" ng-class="{\'btn-switch--on\':client.isActive}" ng-model="client.isActive"\n' +
    '                                ng-click="clientCtrl.UpdateClient(client)">\n' +
    '\n' +
    '                                <div class="btn-switch-circle" ng-class="{\'btn-switch-circle--on\':client.isActive}"\n' +
    '                                    ng-model="client.isActive" ng-click="clientCtrl.UpdateClient(client)">\n' +
    '                                </div>\n' +
    '                        </td>\n' +
    '                        <td width="30%">\n' +
    '                            <i class="material-icons md-dark pmd-md cursorPointer font25"\n' +
    '                                ng-click="$state.go(\'editClient\', {userId: client.userId});">mode_edit</i>\n' +
    '                          </td>\n' +
    '                    </tr>\n' +
    '                </tbody>\n' +
    '            </table>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '    <div style="text-align:center;direction: ltr" paging page="1" page-size="10" total="totalCount"\n' +
    '        paging-action="changePage(page)" flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true"\n' +
    '        disabled-class="hide">\n' +
    '    </div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/client/templates/editUser.html',
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text"> {{\'BasicInfoLbl\' | translate}}</h2>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="updateclientForm" autocomplete="off">\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'FirstNameLbl\' | translate}}</label>\n' +
    '                <input required type="text" class="mat-input form-control" name="firstName"\n' +
    '                    ng-model="clientObj.firstName" minlength="3" maxlength="255">\n' +
    '                <div ng-messages="updateclientForm.firstName.$error">\n' +
    '                    <div ng-if="updateclientForm.firstName.$error.required && !updateclientForm.firstName.$pristine">{{\'FirstNameLengthError\'\n' +
    '                | translate}}</div>\n' +
    '                    <div\n' +
    '                        ng-if="(updateclientForm.firstName.$error.minlength || updateclientForm.firstName.$error.maxlength) && !updateclientForm.firstName.$error.required">{{\'NameLengthError255\'\n' +
    '                | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'LastNameLbl\' | translate}}</label>\n' +
    '                <input required type="text" class="mat-input form-control" name="lastName" ng-model="clientObj.lastName"\n' +
    '                    minlength="3" maxlength="255">\n' +
    '                <div ng-messages="updateclientForm.lastName.$error">\n' +
    '                    <div ng-if="updateclientForm.lastName.$error.required && !updateclientForm.lastName.$pristine">{{\'lastName\' |\n' +
    '                translate}}</div>\n' +
    '                    <div\n' +
    '                        ng-if="(updateclientForm.lastName.$error.minlength || updateclientForm.lastName.$error.maxlength) && !updateclientForm.lastName.$error.required">{{\'LastNameLengthError\'\n' +
    '                | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'EmailLbl\' | translate}}</label>\n' +
    '\n' +
    '                <input ng-disabled="true" required type="text" class="mat-input form-control" name="email"\n' +
    '                    ng-model="clientObj.email" ng-minlength="3" ng-maxlength="50">\n' +
    '                <div ng-messages="updateclientForm.email.$error">\n' +
    '                    <div ng-if="updateclientForm.email.$error.required && !updateclientForm.email.$pristine">{{\'lastName\' |\n' +
    '                translate}}</div>\n' +
    '                    <div\n' +
    '                        ng-if="(updateclientForm.email.$error.minlength || updateclientForm.email.$error.maxlength) && !updateclientForm.email.$error.required">{{\'LastNameLengthError\'\n' +
    '                | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'phoneLbl\' | translate}}</label>\n' +
    '\n' +
    '                <input required type="text" class="mat-input form-control" numbers-only name="phone"\n' +
    '                    ng-model="clientObj.phone" ng-pattern="phoneNumbr" ng-minlength="10" ng-maxlength="50">\n' +
    '                <span class="error" ng-show="updateclientForm.phone.$error.pattern">{{\'NotPhoneNumber\' | translate}}\n' +
    '                </span>\n' +
    '                <div ng-messages="updateclientForm.phone.$error">\n' +
    '                    <div ng-if="updateclientForm.phone.$error.required && !updateclientForm.phone.$pristine">{{\'PhoneReqError\' |\n' +
    '                translate}}</div>\n' +
    '                    <div ng-if="(updateclientForm.phone.$error.minlength || updateclientForm.phone.$error.maxlength)">{{\'PhoneLengthError\'\n' +
    '                | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'UserPasswordLbl\' | translate}}</label>\n' +
    '\n' +
    '                <input required type="password" class="mat-input form-control" name="password"\n' +
    '                    ng-model="clientObj.password" ng-minlength="8" ng-maxlength="25">\n' +
    '                <div ng-messages="updateclientForm.password.$error">\n' +
    '                    <div ng-if="updateclientForm.password.$error.required && !updateclientForm.password.$pristine">{{\'requiredErr\' |\n' +
    '                translate}}</div>\n' +
    '                    <div\n' +
    '                        ng-if="(updateclientForm.password.$error.minlength || updateclientForm.password.$error.maxlength) && !updateclientForm.password.newPassword.$error.required">\n' +
    '                        Password\n' +
    '                        length must be 8-25 char.</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'ConfirmPasswordLbl\' | translate}}</label>\n' +
    '                <input required type="password" class="mat-input form-control" name="confirmPassword"\n' +
    '                    ng-model="clientObj.confirmPassword" equalto="updateclientForm.password">\n' +
    '                <div ng-messages="updateclientForm.confirmPassword.$error">\n' +
    '                    <div\n' +
    '                        ng-if="updateclientForm.confirmPassword.$error.required && !updateclientForm.confirmPassword.$pristine">{{\'requiredErr\'\n' +
    '                | translate}}</div>\n' +
    '                    <div\n' +
    '                        ng-if="updateclientForm.confirmPassword.$error.equalto && !updateclientForm.confirmPassword.$error.required">{{\'passworddontmatch\'\n' +
    '                | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Length\' | translate}}</label>\n' +
    '                <input type="number" class="mat-input form-control" name="length" ng-model="clientObj.length" positive\n' +
    '                    ng-pattern="/^[0-9]{1,3}$/" ng-minlength="1" ng-maxlength="3">\n' +
    '                <div ng-messages="updateclientForm.length.$error" class="error">\n' +
    '                    <div ng-if="(updateclientForm.length.$error.minlength || updateclientForm.length.$error.maxlength)">\n' +
    '                        {{\'maxlength\' | translate}}</div>\n' +
    '                    <div ng-if="updateclientForm.length.$error.pattern && !updateclientForm.length.$pristine">\n' +
    '                        {{\'wrongpattern\' | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Weight\' | translate}}</label>\n' +
    '                <input type="number" class="mat-input form-control" name="weight" ng-model="clientObj.weight" positive\n' +
    '                    ng-pattern="/^[0-9]{1,3}$/" ng-minweight="1" ng-maxlength="3">\n' +
    '                <div ng-messages="updateclientForm.weight.$error" class="error">\n' +
    '                    <div ng-if="(updateclientForm.weight.$error.minweight || updateclientForm.weight.$error.maxlength)">\n' +
    '                        {{\'maxlength\' | translate}}</div>\n' +
    '                    <div ng-if="updateclientForm.weight.$error.pattern && !updateclientForm.weight.$pristine">\n' +
    '                        {{\'wrongpattern\' | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Country\' | translate}}</label>\n' +
    '                <select required style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                    ng-change="editClientCtrl.countryChange()" ng-model="editClientCtrl.selectedCountryId"\n' +
    '                    ng-options="group.countryId as group.titleDictionary[selectedLanguage] for group in editClientCtrl.counties">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '            <div ng-show=" editClientCtrl.selectedCountryId > 0"\n' +
    '                class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Region\' | translate}}</label>\n' +
    '                <select ng-required="editClientCtrl.selectedCountryId > 0" style="width:100% !important"\n' +
    '                    class="select-tags form-control pmd-select2-tags" ng-change="editClientCtrl.regionChange()"\n' +
    '                    ng-model="editClientCtrl.selectedRegionId"\n' +
    '                    ng-options="group.regionId as group.titleDictionary[selectedLanguage] for group in editClientCtrl.regions">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '            <div ng-show=" editClientCtrl.selectedRegionId > 0"\n' +
    '                class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'City\' | translate}}</label>\n' +
    '                <select ng-required="editClientCtrl.selectedRegionId > 0" style="width:100% !important"\n' +
    '                    class="select-tags form-control pmd-select2-tags" ng-change="editClientCtrl.cityChange()"\n' +
    '                    ng-model="editClientCtrl.selectedCityId"\n' +
    '                    ng-options="group.cityId as group.titleDictionary[selectedLanguage] for group in editClientCtrl.cities">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '            <div ng-show=" editClientCtrl.selectedCityId > 0"\n' +
    '                class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Area\' | translate}}</label>\n' +
    '                <select ng-required=" editClientCtrl.selectedCityId > 0" style="width:100% !important"\n' +
    '                    class="select-tags form-control pmd-select2-tags" ng-change="editClientCtrl.areaChange()"\n' +
    '                    ng-model="editClientCtrl.selectedAreaId"\n' +
    '                    ng-options="group.areaId as group.titleDictionary[selectedLanguage] for group in editClientCtrl.area">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '            <div ng-show="editClientCtrl.selectedAreaId > 0"\n' +
    '                class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Branch\' | translate}}</label>\n' +
    '                <select ng-required="editClientCtrl.selectedAreaId > 0 "\n' +
    '                    class="form-control select-with-search pmd-select2-tags" ng-change="editClientCtrl.branchChange()"\n' +
    '                    ng-model="editClientCtrl.selectedBranchId"\n' +
    '                    ng-options="a.branchId as a.titleDictionary[selectedLanguage] for a in editClientCtrl.branchList"></select>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '            ng-disabled="updateclientForm.$invalid || !editClientCtrl.show && editClientCtrl.selectedBranchId <= 0"\n' +
    '            class="btn pmd-ripple-effect btn-primary" type="button" ng-click="Updateclient()">{{\'saveChangesBtn\' |\n' +
    '        translate}}</button>\n' +
    '        <button class="btn pmd-ripple-effect btn-default" type="button" ng-click="editClientCtrl.close()">{{\'DiscardBtn\' |\n' +
    '        translate}}</button>\n' +
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
    '                        <th>{{\'descLbl\' | translate}}</th>\n' +
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
    '<script type="text/javascript">\n' +
    '	$(document).ready(function() {\n' +
    '		// <!-- Select Multiple Tags -->\n' +
    '		$(".select-tags").select2({\n' +
    '			tags: false,\n' +
    '			theme: "bootstrap",\n' +
    '		})\n' +
    '	});\n' +
    '</script>\n' +
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
    '						<a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '							{{lang.value | translate}}\n' +
    '						</a>\n' +
    '					</li>\n' +
    '				</ul>\n' +
    '				<div class="pmd-card">\n' +
    '					<div class="pmd-card-body">\n' +
    '						<div class="tab-content">\n' +
    '							<div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editItemCtrl.language"\n' +
    '							 id="{{lang.value}}-form">\n' +
    '								<div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '									<label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '									<input required type="text" class="mat-input form-control" name="itemNameDictionary{{lang.value+\'Name\'}}"\n' +
    '									 ng-model="editItemCtrl.item.itemNameDictionary[lang.key]" ng-minlength="3" ng-maxlength="100">\n' +
    '									<div ng-messages="editItemForm.itemNameDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '										<div ng-show="editItemForm.itemNameDictionary{{lang.value+\'Name\'}}.$error.required && !editItemForm.itemNameDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\'\n' +
    '											| translate}}</div>\n' +
    '										<div ng-show="(editItemForm.itemNameDictionary{{lang.value+\'Name\'}}.$error.minlength || editItemForm.itemNameDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editItemForm.itemNameDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError\'\n' +
    '											| translate}}</div>\n' +
    '									</div>\n' +
    '								</div>\n' +
    '								<div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '									<label for="first-name">{{ lang.value+\'descLbl\' | translate}}</label>\n' +
    '									<textarea required class="form-control" name="itemDescriptionDictionary{{lang.value+\'Name\'}}" ng-model="editItemCtrl.item.itemDescriptionDictionary[lang.key]"\n' +
    '									 ng-minlength="3" ng-maxlength="300"></textarea>\n' +
    '									<div ng-messages="editItemForm.itemDescriptionDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '										<div ng-show="editItemForm.itemDescriptionDictionary{{lang.value+\'Name\'}}.$error.required && !editItemForm.itemDescriptionDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\'\n' +
    '											| translate}}</div>\n' +
    '										<div ng-show="(editItemForm.itemDescriptionDictionary{{lang.value+\'Name\'}}.$error.minlength || editItemForm.itemDescriptionDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editItemForm.itemDescriptionDictionary{{lang.value+\'Name\'}}.$error.required">{{\'DescLengthError\'\n' +
    '											| translate}}</div>\n' +
    '									</div>\n' +
    '								</div>\n' +
    '							</div>\n' +
    '						</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '\n' +
    '			<div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '				<label for="first-name">{{\'vat\' | translate}} </label>\n' +
    '				<input type="number" class="mat-input form-control" name="vat" ng-model="editItemCtrl.item.vat"\n' +
    '				 min="0" ng-maxlength="5">\n' +
    '				<div ng-messages="editItemForm.vat.$error">\n' +
    '					<div ng-if="editItemForm.vat.$error.maxlength">{{\'vatLengthError\' | translate}}</div>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '\n' +
    '			<div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '				<label>{{\'selectSizeLbl\' | translate}}</label>\n' +
    '				<select required class="form-control select-tags pmd-select2-tags" multiple ng-change="editItemCtrl.sizeChange()"\n' +
    '				 ng-model="editItemCtrl.SelectedSizeId" ng-change="editItemCtrl.sizeChange()"  name="SelectedSize">\n' +
    '					<option ng-repeat="size in editItemCtrl.Sizes" ng-value="{{size.sizeId}}">\n' +
    '						{{size.sizeNameDictionary[selectedLanguage]}} </option>\n' +
    '				</select>\n' +
    '				<div ng-if="newItemForm.SelectedSizeId.$error.required && !newItemForm.SelectedSizeId.$pristine">{{\'requiredErr\' |\n' +
    '					translate}}</div>\n' +
    '			</div>\n' +
    '\n' +
    '			<div class="row" ng-repeat="itemSize in editItemCtrl.SelectedSize">\n' +
    '				<h3>{{(itemSize.sizeNameDictionary[selectedLanguage])}} </h3>\n' +
    '				<hr>\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'fat\' | translate}} </label>\n' +
    '					<input type="number" class="mat-input form-control" name="fat" ng-model="editItemCtrl.SelectedSize[$index].fat" min="0"\n' +
    '					 ng-maxlength="5">\n' +
    '					<div ng-messages="editItemForm.fat.$error">\n' +
    '						<div ng-if="editItemForm.fat.$error.maxlength">{{\'fatLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'carbs\' | translate}} </label>\n' +
    '					<input type="number" class="mat-input form-control" name="carbs" ng-model="editItemCtrl.SelectedSize[$index].carbs" min="0"\n' +
    '					 ng-maxlength="5">\n' +
    '					<div ng-messages="editItemForm.carbs.$error">\n' +
    '						<div ng-if="editItemForm.carbs.$error.maxlength">{{\'carbsLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'calories\' | translate}} </label>\n' +
    '					<input type="number" class="mat-input form-control" name="calories" ng-model="editItemCtrl.SelectedSize[$index].calories" min="0"\n' +
    '					 ng-maxlength="5">\n' +
    '					<div ng-messages="editItemForm.calories.$error">\n' +
    '						<div ng-if="editItemForm.calories.$error.maxlength">{{\'caloriesLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'protein\' | translate}} </label>\n' +
    '					<input type="number" class="mat-input form-control" name="protein" ng-model="editItemCtrl.SelectedSize[$index].protein" min="0"\n' +
    '					 ng-maxlength="5">\n' +
    '					<div ng-messages="editItemForm.protein.$error">\n' +
    '						<div ng-if="editItemForm.protein.$error.maxlength">{{\'proteinLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '			<!-- </div>\n' +
    '			<div class="row"> -->\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'costlbl\' | translate}} </label>\n' +
    '					<input type="number" class="mat-input form-control" name="cost" required ng-model="editItemCtrl.SelectedSize[$index].cost" min="1"\n' +
    '					 ng-maxlength="12">\n' +
    '					<div ng-messages="editItemForm.cost.$error">\n' +
    '						<div ng-if="editItemForm.cost.$error.required && !editItemForm.cost.$pristine">\n' +
    '							{{\'requiredErr\' | translate}}</div>\n' +
    '						<div ng-if="editItemForm.cost.$error.maxlength">{{\'costLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'Pricelbl\' | translate}} </label>\n' +
    '					<input type="number" ng-change="editItemCtrl.calclulate()" class="mat-input form-control" required name="price"\n' +
    '					 ng-model="editItemCtrl.SelectedSize[$index].price"  min="{{editItemCtrl.SelectedSize[$index].cost}}" ng-maxlength="12">\n' +
    '					<div ng-messages="editItemForm.price.$error">\n' +
    '						<div ng-if="editItemForm.price.$error.required && !editItemForm.price.$pristine">\n' +
    '							{{\'requiredErr\' | translate}}</div>\n' +
    '						<div ng-if="editItemForm.price.$error.maxlength">{{\'PriceLengthError\' | translate}}</div>\n' +
    '						<div ng-if="editItemForm.price.$error.min">{{\'PriceShouldbeMoreThanCost\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'Total\' | translate}} </label>\n' +
    '					<input type="number" readonly class="mat-input form-control" name="totalPrice" required \n' +
    '					ng-model="editItemCtrl.SelectedSize[$index].totalPrice =  editItemCtrl.SelectedSize[$index].price+ (editItemCtrl.SelectedSize[$index].price *  (editItemCtrl.item.vat!=null?editItemCtrl.item.vat:0)/100) "\n' +
    '					 min="1" ng-maxlength="12">\n' +
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
    '				<input id="itemImage" name="itemImage" style="display: none;" onchange="angular.element(this).scope().AddItemImage(this.files)"\n' +
    '				 type="file">\n' +
    '				<button ng-click="editItemCtrl.LoadUploadLogo()">{{\'UploadImageBtn\' | translate}}</button>\n' +
    '				<span> <i class="material-icons md-dark pmd-md warrningIcon">warning</i>\n' +
    '					{{\'RecommendedItemImage1\' | translate}}</span>\n' +
    '				<img ng-show="editItemCtrl.item.imageUrl != null " ng-src="{{editItemCtrl.item.imageUrl}}" style="max-height: 200px;max-width: 200px;">\n' +
    '\n' +
    '			</div>\n' +
    '\n' +
    '\n' +
    '		</form>\n' +
    '	</div>\n' +
    '	<div class="pmd-modal-action text-right">\n' +
    '\n' +
    '		<button style="background-color: #e4e5e6;color: black!important;" ng-disabled="editItemForm.$invalid"\n' +
    '		 class="btn pmd-ripple-effect btn-primary" type="button" ng-click="editItemCtrl.updateItem()">{{\'saveChangesBtn\'\n' +
    '			|\n' +
    '			translate}}</button>\n' +
    '		<button class="btn pmd-ripple-effect btn-default" type="button" ng-click="editItemCtrl.close()">{{\'DiscardBtn\' |\n' +
    '			translate}}</button>\n' +
    '	</div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/item/templates/new.html',
    '<script type="text/javascript">\n' +
    '	$(document).ready(function() {\n' +
    '		// <!-- Select Multiple Tags -->\n' +
    '		$(".select-tags").select2({\n' +
    '			tags: false,\n' +
    '			theme: "bootstrap",\n' +
    '		})\n' +
    '	});\n' +
    '</script>\n' +
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
    '									<label for="first-name">{{ lang.value+\'descLbl\n' +
    '										\' | translate}}</label>\n' +
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
    '			<div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '				<label for="first-name">{{\'vat\' | translate}} </label>\n' +
    '				<input type="number"  class="mat-input form-control" name="vat" ng-model="newItemCtrl.vat"\n' +
    '				 min="1" ng-maxlength="3">\n' +
    '				<div ng-messages="newItemForm.vat.$error">\n' +
    '					<div ng-if="newItemForm.vat.$error.required && !newItemForm.vat.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '					<div ng-if="newItemForm.vat.$error.maxlength">{{\'vatLengthError\' | translate}}</div>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '\n' +
    '\n' +
    '			<div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '				<label>{{\'selectSizeLbl\' | translate}}</label>\n' +
    '				<select class="form-control select-tags pmd-select2-tags" required multiple ng-model="newItemCtrl.SelectedSize" name="SelectedSize">\n' +
    '					<option ng-repeat="size in newItemCtrl.Sizes" ng-value="{{size}}">{{size.sizeNameDictionary[selectedLanguage]}}</option>\n' +
    '				</select>\n' +
    '				<div ng-if="newItemForm.SelectedSize.$error.required && !newItemForm.SelectedSize.$pristine">{{\'requiredErr\' |\n' +
    '					translate}}</div>\n' +
    '			</div>\n' +
    '\n' +
    '			<div class="row" ng-repeat="itemSize in newItemCtrl.SelectedSize">\n' +
    '				<h3>{{(itemSize.sizeNameDictionary[selectedLanguage])}} </h3>\n' +
    '				<hr>\n' +
    '				<!-- <div class=" col-md-3  form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'Pricelbl\' | translate}} </label>\n' +
    '					<input type="number" class="mat-input form-control" name="price" ng-model="newItemCtrl.SelectedSize[$index].price"\n' +
    '					 min="1" ng-maxlength="5">\n' +
    '					<div ng-messages="newItemForm.price.$error">\n' +
    '						<div ng-if="newItemForm.price.$error.required && !newItemForm.price.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '						<div ng-if="newItemForm.price.$error.maxlength">{{\'PriceLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div> -->\n' +
    '\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'fat\' | translate}} </label>\n' +
    '					<input type="number" class="mat-input form-control" name="fat" ng-model="newItemCtrl.SelectedSize[$index].fat" min="1" ng-maxlength="5">\n' +
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
    '					<input type="number" class="mat-input form-control" name="carbs" ng-model="newItemCtrl.SelectedSize[$index].carbs" min="1" ng-maxlength="5">\n' +
    '					<div ng-messages="newItemForm.carbs.$error">\n' +
    '						<div ng-if="newItemForm.carbs.$error.required && !newItemForm.carbs.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '						<div ng-if="newItemForm.carbs.$error.maxlength">{{\'carbsLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'calories\' | translate}} </label>\n' +
    '					<input type="number" class="mat-input form-control" name="calories" ng-model="newItemCtrl.SelectedSize[$index].calories" min="1"\n' +
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
    '					<input type="number" class="mat-input form-control" name="protein" ng-model="newItemCtrl.SelectedSize[$index].protein" min="1"\n' +
    '					 ng-maxlength="5">\n' +
    '					<div ng-messages="newItemForm.protein.$error">\n' +
    '						<div ng-if="newItemForm.protein.$error.required && !newItemForm.protein.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '						<div ng-if="newItemForm.protein.$error.maxlength">{{\'proteinLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '			<!-- </div>\n' +
    '			<div class="row"> -->\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'costlbl\' | translate}} </label>\n' +
    '					<input required type="number" class="mat-input form-control" name="cost" ng-model="newItemCtrl.SelectedSize[$index].cost" min="1"\n' +
    '					 ng-maxlength="12">\n' +
    '					<div ng-messages="newItemForm.cost.$error">\n' +
    '						<div ng-if="newItemForm.cost.$error.required && !newItemForm.cost.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '						<div ng-if="newItemForm.cost.$error.maxlength">{{\'costLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'Pricelbl\' | translate}} </label>\n' +
    '					\n' +
    '					<input required type="number" class="mat-input form-control" name="price" \n' +
    '					 ng-model="newItemCtrl.SelectedSize[$index].price" min="{{newItemCtrl.SelectedSize[$index].cost}}" ng-maxlength="12">\n' +
    '					<div ng-messages="newItemForm.price.$error">\n' +
    '						<div ng-if="newItemForm.price.$error.required && !newItemForm.price.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '						<div ng-if="newItemForm.price.$error.maxlength">{{\'PriceLengthError\' | translate}}</div>\n' +
    '						<div ng-if="newItemForm.price.$error.min">{{\'PriceShouldbeMoreThanCost\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'Total\' | translate}} </label>\n' +
    '					<input required type="number" readonly class="mat-input form-control" name="totalPrice" \n' +
    '					ng-model="newItemCtrl.SelectedSize[$index].totalPrice = newItemCtrl.SelectedSize[$index].price+ (newItemCtrl.SelectedSize[$index].price * (newItemCtrl.vat!=null?newItemCtrl.vat:0)/100) "\n' +
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
    '		<button style="background-color: #e4e5e6;color: black!important;" ng-disabled="newItemForm.$invalid  "\n' +
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
    '            class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddBtn\' | translate}}</button>\n' +
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
    '                        <th>{{\'descLbl\' | translate}}</th>\n' +
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
    '		$(".select-with-search").select2({\n' +
    '			// tags: true,\n' +
    '			theme: "bootstrap",\n' +
    '			// insertTag: function (data, tag) {\n' +
    '			// 	// Insert the tag at the end of the results\n' +
    '			// 	data.push(tag);\n' +
    '			// }\n' +
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
    '								ng-repeat="lang in editMealCtrl.language" id="{{lang.value}}-form">\n' +
    '								<div\n' +
    '									class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '									<label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '									<input required type="text" class="mat-input form-control"\n' +
    '										name="mealNameDictionary{{lang.value+\'Name\'}}"\n' +
    '										ng-model="editMealCtrl.meal.mealNameDictionary[lang.key]" ng-minlength="3"\n' +
    '										ng-maxlength="100">\n' +
    '									<div ng-messages="editMealForm.mealNameDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '										<div\n' +
    '											ng-show="editMealForm.mealNameDictionary{{lang.value+\'Name\'}}.$error.required && !editMealForm.mealNameDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\'\n' +
    '											| translate}}</div>\n' +
    '										<div\n' +
    '											ng-show="(editMealForm.mealNameDictionary{{lang.value+\'Name\'}}.$error.minlength || editMealForm.mealNameDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editMealForm.mealNameDictionary{{lang.value+\'Name\'}}.$error.required">{{\'NameLengthError\'\n' +
    '											| translate}}</div>\n' +
    '									</div>\n' +
    '								</div>\n' +
    '								<div\n' +
    '									class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '									<label for="first-name">{{ lang.value+\'descLbl\' | translate}}</label>\n' +
    '									<textarea required class="form-control"\n' +
    '										name="mealDescriptionDictionary{{lang.value+\'Name\'}}"\n' +
    '										ng-model="editMealCtrl.meal.mealDescriptionDictionary[lang.key]"\n' +
    '										ng-minlength="3" ng-maxlength="300"></textarea>\n' +
    '									<div\n' +
    '										ng-messages="editMealForm.mealDescriptionDictionary{{lang.value+\'Name\'}}.$error">\n' +
    '										<div\n' +
    '											ng-show="editMealForm.mealDescriptionDictionary{{lang.value+\'Name\'}}.$error.required && !editMealForm.mealDescriptionDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\'\n' +
    '											| translate}}</div>\n' +
    '										<div\n' +
    '											ng-show="(editMealForm.mealDescriptionDictionary{{lang.value+\'Name\'}}.$error.minlength || editMealForm.mealDescriptionDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editMealForm.mealDescriptionDictionary{{lang.value+\'Name\'}}.$error.required">{{\'DescLengthError\'\n' +
    '											| translate}}</div>\n' +
    '									</div>\n' +
    '								</div>\n' +
    '							</div>\n' +
    '						</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '			<div class="row">\n' +
    '					<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '							<label for="first-name">{{\'SelectCategory\' | translate}}</label>\n' +
    '							<select style="width:100% !important" class="form-control select-with-search pmd-select2-tags" ng-model="editMealCtrl.selectedCategoryId"\n' +
    '							 ng-change="editMealCtrl.changeCategory(editMealCtrl.selectedCategoryId)">\n' +
    '								<option ng-repeat="category in editMealCtrl.categories" ng-value="{{category.categoryId}}">{{category.titleDictionary[selectedLanguage]}}</option>\n' +
    '							</select>\n' +
    '						</div>\n' +
    '						<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '							<label for="first-name">{{\'SelectItems\' | translate}}</label>\n' +
    '							<select ng-disabled="editMealCtrl.isloading" style="width:100% !important" class="form-control select-with-search pmd-select2-tags" ng-model="editMealCtrl.selectedItem"\n' +
    '							 ng-change="editMealCtrl.changeItem(editMealCtrl.selectedItem.itemId)">\n' +
    '								<option ng-repeat="item in editMealCtrl.items" ng-value="{{item}}">{{item.itemNameDictionary[selectedLanguage]}}</option>\n' +
    '							</select>\n' +
    '						</div>\n' +
    '						<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '							<label for="first-name">{{\'selectSizeLbl\' | translate}}</label>\n' +
    '							<select ng-disabled="editMealCtrl.isloading" style="width:100% !important" class="form-control select-with-search pmd-select2-tags" ng-model="editMealCtrl.selectedItemSize">\n' +
    '								<option ng-repeat="item in editMealCtrl.itemSizes" ng-value="{{item}}">{{item.sizeNameDictionary[selectedLanguage]}}</option>\n' +
    '							</select>\n' +
    '						</div>\n' +
    '		\n' +
    '						<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '							<button style="background-color: #e4e5e6;color: black!important;" ng-disabled="editMealCtrl.selectedCategoryId <= 0 || editMealCtrl.selectedItem == null || editMealCtrl.selectedItemSize == null"\n' +
    '							 class="btn pmd-ripple-effect btn-primary" type="button" ng-click="editMealCtrl.addItemToList(editMealCtrl.selectedItemSize)">\n' +
    '								{{\'addItemBtn\' | translate}}</button>\n' +
    '								<img ng-show="editMealCtrl.isloading" src="assets/img/loading.gif" style="height: 40px;">\n' +
    '						</div>\n' +
    '\n' +
    '				<!-- <div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'SelectItems\' | translate}}</label>\n' +
    '					<select style="width:100% !important" class="form-control select-add-tags pmd-select2-tags" multiple\n' +
    '						ng-model="editMealCtrl.itemModel" ng-change="editMealCtrl.addItemToList(editMealCtrl.itemModel)"\n' +
    '						required ng-options="item as item.itemNameDictionary[selectedLanguage] \n' +
    '							 group by item.category.titleDictionary[selectedLanguage]\n' +
    '							for item  in editMealCtrl.itemsList">\n' +
    '					</select>\n' +
    '				</div> -->\n' +
    '				\n' +
    '			</div>\n' +
    '			<div class=" form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '					<table class="table pmd-table table-hover">\n' +
    '						<thead>\n' +
    '							<tr>\n' +
    '								<th>{{\'Name\' | translate}}</th>\n' +
    '							<th>{{\'SizeName\' | translate}}</th>\n' +
    '								<th>{{\'carb\' | translate}}</th>\n' +
    '								<th>{{\'calories\' | translate}}</th>\n' +
    '								<th>{{\'protein\' | translate}}</th>\n' +
    '								<th>{{\'fat\' | translate}}</th>\n' +
    '								<!-- <th>{{\'costlbl\' | translate}}</th> -->\n' +
    '								<th>{{\'Pricelbl\' | translate}}</th>\n' +
    '								<th>{{\'vat\' | translate}}</th>\n' +
    '								<th>{{\'total\' | translate}}</th>\n' +
    '								<th></th>\n' +
    '							</tr>\n' +
    '						</thead>\n' +
    '						<tbody>\n' +
    '							<tr ng-repeat="meal in selectedItemList">\n' +
    '								<td data-title="Name" width="15%">\n' +
    '									{{meal.itemNameDictionary[selectedLanguage] | limitTo:10}}</td>\n' +
    '									<td data-title="Description">{{meal.sizeNameDictionary[selectedLanguage]}}</td>\n' +
    '								<td data-title="Description">{{meal.carbs}}</td>\n' +
    '								<td data-title="Description">{{meal.calories}}</td>\n' +
    '								<td data-title="Description">{{meal.protein}}</td>\n' +
    '								<td data-title="Description">{{meal.fat}}</td>\n' +
    '								<!-- <td data-title="Description">{{meal.cost}}</td> -->\n' +
    '								<td data-title="Description">{{meal.price}}</td>\n' +
    '								<td data-title="Description">{{meal.vat}}</td>\n' +
    '								<td data-title="totalPrice">{{meal.totalPrice}}</td>\n' +
    '								<td><td><i class="material-icons pmd-md deleteButton cursorPointer font25" ng-click="editMealCtrl.removeItem($index)">delete</i></td></td>\n' +
    '							</tr>\n' +
    '						</tbody>\n' +
    '					</table>\n' +
    '				</div>\n' +
    '			<div class="row">\n' +
    '\n' +
    '				<!-- <div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'mealSize\' | translate}} </label>\n' +
    '					<input type="number" class="mat-input form-control" name="mealSize" ng-model="editMealCtrl.meal.mealSize" min="1"\n' +
    '					 ng-maxlength="12">\n' +
    '					<div ng-messages="editMealForm.mealSize.$error">\n' +
    '						<div ng-if="editMealForm.mealSize.$error.required && !editMealForm.mealSize.$pristine">{{\'requiredErr\' |\n' +
    '							translate}}</div>\n' +
    '						<div ng-if="editMealForm.mealSize.$error.maxlength">{{\'mealSizeLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div> -->\n' +
    '\n' +
    '\n' +
    '\n' +
    '				<div\n' +
    '					class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'carbs\' | translate}} </label>\n' +
    '					<input type="number" readonly class="mat-input form-control" name="carbs"\n' +
    '						ng-model="editMealCtrl.meal.carbs"  ng-maxlength="12">\n' +
    '					<div ng-messages="editMealForm.carbs.$error">\n' +
    '						<div ng-if="editMealForm.carbs.$error.required && !editMealForm.carbs.$pristine">\n' +
    '							{{\'requiredErr\' | translate}}</div>\n' +
    '						<div ng-if="editMealForm.carbs.$error.maxlength">{{\'carbsLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '				<div\n' +
    '					class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'calories\' | translate}} </label>\n' +
    '					<input type="number" readonly class="mat-input form-control" name="calories"\n' +
    '						ng-model="editMealCtrl.meal.calories"  ng-maxlength="12">\n' +
    '					<div ng-messages="editMealForm.calories.$error">\n' +
    '						<div ng-if="editMealForm.calories.$error.required && !editMealForm.calories.$pristine">{{\'requiredErr\' |\n' +
    '							translate}}</div>\n' +
    '						<div ng-if="editMealForm.calories.$error.maxlength">{{\'caloriesLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '\n' +
    '				<div\n' +
    '					class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'protein\' | translate}} </label>\n' +
    '					<input type="number" readonly class="mat-input form-control" name="protein"\n' +
    '						ng-model="editMealCtrl.meal.protein" ng-maxlength="12">\n' +
    '					<div ng-messages="editMealForm.protein.$error">\n' +
    '						<div ng-if="editMealForm.protein.$error.required && !editMealForm.protein.$pristine">{{\'requiredErr\' |\n' +
    '							translate}}</div>\n' +
    '						<div ng-if="editMealForm.protein.$error.maxlength">{{\'proteinLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '				\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed"><label\n' +
    '					for="first-name">{{\'fat\' | translate}} </label>\n' +
    '				   <input type="number" readonly class="mat-input form-control" name="fat" ng-model="editMealCtrl.meal.fat">\n' +
    '			   </div>\n' +
    '\n' +
    '			</div>\n' +
    '			<div class="row">\n' +
    '				<div\n' +
    '					class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'costlbl\' | translate}} </label>\n' +
    '					<input type="number" readonly class="mat-input form-control" name="cost"\n' +
    '						ng-model="editMealCtrl.meal.cost" min="1" ng-maxlength="12">\n' +
    '					<div ng-messages="editMealForm.cost.$error">\n' +
    '						<div ng-if="editMealForm.cost.$error.required && !editMealForm.cost.$pristine">\n' +
    '							{{\'requiredErr\' | translate}}</div>\n' +
    '						<div ng-if="editMealForm.cost.$error.maxlength">{{\'costLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '				<div\n' +
    '					class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'Pricelbl\' | translate}} </label>\n' +
    '					<input type="number" readonly ng-change="editMealCtrl.calclulate()" class="mat-input form-control"\n' +
    '						name="price" ng-model="editMealCtrl.meal.price" min="1" ng-maxlength="12">\n' +
    '					<div ng-messages="editMealForm.price.$error">\n' +
    '						<div ng-if="editMealForm.price.$error.required && !editMealForm.price.$pristine">\n' +
    '							{{\'requiredErr\' | translate}}</div>\n' +
    '						<div ng-if="editMealForm.price.$error.maxlength">{{\'PriceLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '				<div\n' +
    '					class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '					<label for="first-name">{{\'vat\' | translate}} </label>\n' +
    '					<input type="number" readonly ng-change="editMealCtrl.calclulate()" class="mat-input form-control"\n' +
    '						name="vat" ng-model="editMealCtrl.meal.vat"  ng-maxlength="12">\n' +
    '					<div ng-messages="editMealForm.vat.$error">\n' +
    '						<div ng-if="editMealForm.vat.$error.required && !editMealForm.vat.$pristine">\n' +
    '							{{\'requiredErr\' | translate}}</div>\n' +
    '						<div ng-if="editMealForm.vat.$error.maxlength">{{\'vatLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '				<div\n' +
    '					class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '					<label for="first-name">{{\'Total\' | translate}} </label>\n' +
    '					<input type="number"  ng-change="editMealCtrl.calclulateDiscount()" class="mat-input form-control" name="totalPrice"\n' +
    '						ng-model="editMealCtrl.meal.totalPrice" min="1" ng-maxlength="12">\n' +
    '					<div ng-messages="editMealForm.totalPrice.$error">\n' +
    '						<div ng-if="editMealForm.totalPrice.$error.required && !editMealForm.totalPrice.$pristine">{{\'requiredErr\' |\n' +
    '							translate}}</div>\n' +
    '						<div ng-if="editMealForm.totalPrice.$error.maxlength">{{\'totalPriceLengthError\' | translate}}\n' +
    '						</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '				<div\n' +
    '					class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'mealDiscount\' | translate}} </label>\n' +
    '					<input type="number" ng-change="editMealCtrl.calclulateDiscount()" class="mat-input form-control"\n' +
    '						name="mealDiscount" ng-model="editMealCtrl.meal.mealDiscount" min="0" minlength="1" ng-maxlength="3">\n' +
    '					<div ng-messages="editMealForm.meal.mealDiscount.$error">\n' +
    '						<div\n' +
    '							ng-if="(editMealForm.mealDiscount.$error.minlength || editMealForm.mealDiscount.$error.maxlength)">\n' +
    '							{{\'mealDiscountLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '				<div\n' +
    '					class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '					<label for="first-name">{{\'mealtotalDiscount\' | translate}} </label>\n' +
    '					<input type="number" ng-change="editMealCtrl.calclulatetotalDiscount()"\n' +
    '						class="mat-input form-control" name="mealtotalDiscount"\n' +
    '						ng-model="editMealCtrl.mealtotalDiscount" minlength="1" maxlength="12">\n' +
    '					<div ng-messages="editMealForm.mealtotalDiscount.$error">\n' +
    '						<div ng-if="editMealForm.mealtotalDiscount.$error.maxlength">\n' +
    '							{{\'mealtotalDiscountLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '\n' +
    '			<div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '				<input id="mealImage" name="mealImage" style="display: none;"\n' +
    '					onchange="angular.element(this).scope().AddMealImage(this.files)" type="file">\n' +
    '				<button ng-click="editMealCtrl.LoadUploadLogo()">{{\'UploadImageBtn\' | translate}}</button>\n' +
    '				<span> <i class="material-icons md-dark pmd-md warrningIcon">warning</i>\n' +
    '					{{\'RecommendedMealImage1\' | translate}}</span>\n' +
    '				<img ng-show="editMealCtrl.meal.imageUrl != null" ng-src="{{editMealCtrl.meal.imageUrl}}"\n' +
    '					style="max-height: 200px;max-width: 200px;">\n' +
    '\n' +
    '			</div>\n' +
    '\n' +
    '\n' +
    '		</form>\n' +
    '	</div>\n' +
    '	<div class="pmd-modal-action text-right">\n' +
    '		<button style="background-color: #e4e5e6;color: black!important;" ng-disabled="editMealForm.$invalid"\n' +
    '			class="btn pmd-ripple-effect btn-primary" type="button" ng-click="editMealCtrl.updateMeal()">{{\'saveChangesBtn\'\n' +
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
    '		$(".select-with-search").select2({\n' +
    '			// tags: true,\n' +
    '			theme: "bootstrap",\n' +
    '			// insertTag: function (data, tag) {\n' +
    '			// 	// Insert the tag at the end of the results\n' +
    '			// 	data.push(tag);\n' +
    '			// }\n' +
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
    '									<label for="first-name">{{ lang.value+\'descLbl\' | translate}}</label>\n' +
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
    '					<label for="first-name">{{\'SelectCategory\' | translate}}</label>\n' +
    '					<select style="width:100% !important" class="form-control select-with-search pmd-select2-tags" ng-model="newMealCtrl.selectedCategoryId"\n' +
    '					 ng-change="newMealCtrl.changeCategory(newMealCtrl.selectedCategoryId)">\n' +
    '						<option ng-repeat="category in newMealCtrl.categories" ng-value="{{category.categoryId}}">{{category.titleDictionary[selectedLanguage]}}</option>\n' +
    '					</select>\n' +
    '				</div>\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'SelectItems\' | translate}}</label>\n' +
    '					<select ng-disabled="newMealCtrl.isloading" style="width:100% !important" class="form-control select-with-search pmd-select2-tags" ng-model="newMealCtrl.selectedItem"\n' +
    '					 ng-change="newMealCtrl.changeItem(newMealCtrl.selectedItem.itemId)">\n' +
    '						<option ng-repeat="item in newMealCtrl.items" ng-value="{{item}}">{{item.itemNameDictionary[selectedLanguage]}}</option>\n' +
    '					</select>\n' +
    '				</div>\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'selectSizeLbl\' | translate}}</label>\n' +
    '					<select ng-disabled="newMealCtrl.isloading" style="width:100% !important" class="form-control select-with-search pmd-select2-tags" ng-model="newMealCtrl.selectedItemSize">\n' +
    '						<option ng-repeat="item in newMealCtrl.itemSizes" ng-value="{{item}}">{{item.sizeNameDictionary[selectedLanguage]}}</option>\n' +
    '					</select>\n' +
    '				</div>\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<button style="background-color: #e4e5e6;color: black!important;" ng-disabled="newMealCtrl.selectedCategoryId <= 0 || newMealCtrl.selectedItem == null || newMealCtrl.selectedItemSize == null"\n' +
    '					 class="btn pmd-ripple-effect btn-primary" type="button" ng-click="newMealCtrl.addItemToList(newMealCtrl.selectedItemSize)">\n' +
    '						{{\'addItemBtn\' | translate}}</button>\n' +
    '						<img ng-show="newMealCtrl.isloading" src="assets/img/loading.gif" style="height: 40px;">\n' +
    '\n' +
    '				</div>\n' +
    '			</div>\n' +
    '			<div class=" form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '				<table class="table pmd-table table-hover">\n' +
    '					<thead>\n' +
    '						<tr>\n' +
    '							<th>{{\'Name\' | translate}}</th>\n' +
    '							<th>{{\'SizeName\' | translate}}</th>\n' +
    '							<th>{{\'carb\' | translate}}</th>\n' +
    '							<th>{{\'calories\' | translate}}</th>\n' +
    '							<th>{{\'protein\' | translate}}</th>\n' +
    '							<th>{{\'fat\' | translate}}</th>\n' +
    '							<!-- <th>{{\'costlbl\' | translate}}</th> -->\n' +
    '							<th>{{\'Pricelbl\' | translate}}</th>\n' +
    '							<th>{{\'vat\' | translate}}</th>\n' +
    '							<th>{{\'Total\' | translate}}</th>\n' +
    '							<th></th>\n' +
    '						</tr>\n' +
    '					</thead>\n' +
    '					<tbody>\n' +
    '						<tr ng-repeat="meal in selectedItemList">\n' +
    '							<td data-title="Name" width="15%">{{meal.itemNameDictionary[selectedLanguage] | limitTo:10}}</td>\n' +
    '							<td data-title="Description">{{meal.sizeNameDictionary[selectedLanguage]}}</td>\n' +
    '							<td data-title="Description">{{meal.carbs}}</td>\n' +
    '							<td data-title="Description">{{meal.calories}}</td>\n' +
    '							<td data-title="Description">{{meal.protein}}</td>\n' +
    '							<td data-title="Description">{{meal.fat}}</td>\n' +
    '							<!-- <td data-title="Description">{{meal.cost}}</td> -->\n' +
    '							<td data-title="Description">{{meal.price}}</td>\n' +
    '							<td data-title="Description">{{meal.vat}}</td>\n' +
    '							<td data-title="totalPrice">{{meal.totalPrice}}</td>\n' +
    '							<td><i class="material-icons pmd-md deleteButton cursorPointer font25" ng-click="newMealCtrl.removeItem($index)">delete</i></td>\n' +
    '\n' +
    '						</tr>\n' +
    '					</tbody>\n' +
    '				</table>\n' +
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
    '					<input type="number" readonly class="mat-input form-control" name="carbs" ng-model="newMealCtrl.carbs" \n' +
    '					 ng-maxlength="5">\n' +
    '					<div ng-messages="newMealForm.carbs.$error">\n' +
    '						<div ng-if="newMealForm.carbs.$error.required && !newMealForm.carbs.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '						<div ng-if="newMealForm.carbs.$error.maxlength">{{\'carbsLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '					<label for="first-name">{{\'calories\' | translate}} </label>\n' +
    '					<input type="number" readonly class="mat-input form-control" name="calories" ng-model="newMealCtrl.calories"\n' +
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
    '					<input type="number" readonly class="mat-input form-control" name="protein" ng-model="newMealCtrl.protein" \n' +
    '					 ng-maxlength="5">\n' +
    '					<div ng-messages="newMealForm.protein.$error">\n' +
    '						<div ng-if="newMealForm.protein.$error.required && !newMealForm.protein.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '						<div ng-if="newMealForm.protein.$error.maxlength">{{\'proteinLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed"><label\n' +
    '					for="first-name">{{\'fat\' | translate}} </label>\n' +
    '				   <input type="number" readonly class="mat-input form-control" name="fat" ng-model="newMealCtrl.fat">\n' +
    '			   </div>\n' +
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
    '					 ng-model="newMealCtrl.vat" minlength="1" maxlength="3">\n' +
    '					<div ng-messages="newMealForm.vat.$error">\n' +
    '						<!-- <div ng-if="newMealForm.vat.$error.required && !newMealForm.vat.$pristine">{{\'requiredErr\' | translate}}</div> -->\n' +
    '						<div ng-if="newMealForm.vat.$error.maxlength">{{\'vatLengthError\' | translate}}</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '					<label for="first-name">{{\'Total\' | translate}} </label>\n' +
    '					<input type="number"  ng-change="newMealCtrl.calclulateDiscount()" class="mat-input form-control" name="totalPrice" ng-model="newMealCtrl.totalPrice"\n' +
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
    '					 ng-model="newMealCtrl.mealDiscount" min="0" minlength="1" maxlength="3">\n' +
    '					<div ng-messages="newMealForm.mealDiscount.$error">\n' +
    '						<div ng-if="(newMealForm.mealDiscount.$error.minlength || newMealForm.mealDiscount.$error.maxlength)">{{\'mealDiscountLengthError\'\n' +
    '							| translate}}</div>\n' +
    '					</div>\n' +
    '\n' +
    '				</div>\n' +
    '\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '					<label for="first-name">{{\'mealtotalDiscount\' | translate}} </label>\n' +
    '					<input disabled type="number" ng-change="newMealCtrl.calclulatetotalDiscount()" class="mat-input form-control"\n' +
    '					 name="mealtotalDiscount" ng-model="newMealCtrl.mealtotalDiscount" minlength="1" maxlength="12">\n' +
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
    '				<span> <i class="material-icons md-dark pmd-md warrningIcon">warning</i> {{\'RecommendedItemImage1\' | translate}}</span>\n' +
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
    '                <input required type="number" class="mat-input form-control" name="minDays"\n' +
    '                    ng-pattern="/^[1-9]+[0-9]*$/" ng-model="branch.deliveryCost" ng-minlength="1" ng-maxlength="2">\n' +
    '                <div ng-messages="editFeesForm.minDays.$error" class="error">\n' +
    '                    <div ng-if="editFeesForm.minDays.$error.required && !editFeesForm.minDays.$pristine">\n' +
    '                        {{\'minDaysReqError\' | translate}}</div>\n' +
    '                    <div ng-if="(editFeesForm.minDays.$error.minlength || editFeesForm.minDays.$error.maxlength)">\n' +
    '                        {{\'minDaysLengthError\' | translate}}</div>\n' +
    '                    <div ng-if="editFeesForm.minDays.$error.pattern && !editFeesForm.minDays.$pristine">\n' +
    '                        {{\'wrongpattern\' | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'DeliveryPrice\' | translate}}</label>\n' +
    '                <input required type="number" class="mat-input form-control" name="price"\n' +
    '                    ng-model="branch.deliveryPrice" min="{{branch.deliveryCost}}" ng-minlength="1" ng-maxlength="2">\n' +
    '                <div ng-messages="editFeesForm.price.$error" class="error">\n' +
    '                    <div ng-if="editFeesForm.price.$error.required && !editFeesForm.price.$pristine">\n' +
    '                        {{\'priceReqError\' | translate}}</div>\n' +
    '                    <div ng-if="(editFeesForm.price.$error.minlength || editFeesForm.price.$error.maxlength)">\n' +
    '                        {{\'priceLengthError\' | translate}}</div>\n' +
    '                    <div ng-if="editFeesForm.price.$error.min">{{\'PriceShouldbeMoreThanCost\' | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '        <div class="pmd-modal-action text-right">\n' +
    '            <button ng-disabled="editFeesForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button"\n' +
    '                ng-click="editBranchFeesCtrl.UpdateFees()">{{\'Edit\' | translate}}</button>\n' +
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
    '        <!-- <div>\n' +
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
    '        </div> -->\n' +
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
    '            <input required type="number" class="mat-input form-control" name="minDays" ng-model="settingCtrl.minDays"\n' +
    '                ng-pattern="/^[1-9]+[0-9]*$/" ng-minlength="1" ng-maxlength="2">\n' +
    '            <div ng-messages="settingForm.minDays.$error" class="error">\n' +
    '                <div ng-if="settingForm.minDays.$error.required && !settingForm.minDays.$pristine">\n' +
    '                    {{\'minDaysReqError\' | translate}}</div>\n' +
    '                <div ng-if="(settingForm.minDays.$error.minlength || settingForm.minDays.$error.maxlength)">\n' +
    '                    {{\'minDaysLengthError\' | translate}}</div>\n' +
    '                <div ng-if="settingForm.minDays.$error.pattern && !settingForm.minDays.$pristine">\n' +
    '                    {{\'wrongpattern\' | translate}}</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <!-- <label for="first-name">{{\'AllowPause\' | translate}}\n' +
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
    '            <br> -->\n' +
    '\n' +
    '            <!-- <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'ProgramDiscount\' | translate}}</label>\n' +
    '                <input required type="number" class="mat-input form-control" name="programDiscount"\n' +
    '                    ng-model="settingCtrl.programDiscount" minlength="1" maxlength="2">\n' +
    '                <div ng-messages="settingForm.programDiscount.$error" class="error">\n' +
    '                    <div ng-if="settingForm.programDiscount.$error.required && !settingForm.programDiscount.$pristine">\n' +
    '                        {{\'minDaysReqError\' | translate}}</div>\n' +
    '                    <div\n' +
    '                        ng-if="(settingForm.programDiscount.$error.minlength || settingForm.programDiscount.$error.maxlength)">\n' +
    '                        {{\'minDaysLengthError\' | translate}}</div>\n' +
    '                </div>\n' +
    '            </div> -->\n' +
    '            <br>\n' +
    '            <!-- <label for="first-name">{{\'AllowHistory\' | translate}}\n' +
    '                <input type="checkbox" ng-model="settingCtrl.allowHistory">\n' +
    '            </label> -->\n' +
    '        </div>\n' +
    '\n' +
    '        <!-- <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'ProgramDiscount\' | translate}}</label>ييي\n' +
    '                <input required type="number" class="mat-input form-control" name="programDiscount"\n' +
    '                ng-pattern="/^[1-9]+[0-9]*$/"   ng-model="settingCtrl.programDiscount" minlength="1" maxlength="2">\n' +
    '                <div ng-messages="settingForm.programDiscount.$error" class="error">\n' +
    '                    <div ng-if="settingForm.programDiscount.$error.required && !settingForm.programDiscount.$pristine">\n' +
    '                        {{\'minDaysReqError\' | translate}}</div>\n' +
    '                    <div\n' +
    '                        ng-if="(settingForm.programDiscount.$error.minlength || settingForm.programDiscount.$error.maxlength)">\n' +
    '                        {{\'minDaysLengthError\' | translate}}</div>\n' +
    '\n' +
    '                    <div ng-if="settingForm.programDiscount.$error.pattern && !settingForm.programDiscount.$pristine">\n' +
    '                        {{\'wrongpattern\' | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div> -->\n' +
    '\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" ng-click="settingCtrl.AddSetting()"\n' +
    '            class="btn pmd-ripple-effect btn-primary pmd-z-depth ng-binding" type="button">Add</button>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-if="settingsPrepService.isActive != undefined">\n' +
    '        <!-- <div>\n' +
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
    '        </div> -->\n' +
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
    '            <input required type="number" class="mat-input form-control" name="minDays" ng-pattern="/^[1-9]+[0-9]*$/"\n' +
    '                ng-model="settingsPrepService.minNoDaysPerProgram" ng-minlength="1" ng-maxlength="2">\n' +
    '            <div ng-messages="settingForm.minDays.$error" class="error">\n' +
    '                <div ng-if="settingForm.minDays.$error.required && !settingForm.minDays.$pristine">\n' +
    '                    {{\'requiredErr\' | translate}}</div>\n' +
    '                <div ng-if="(settingForm.minDays.$error.minlength || settingForm.minDays.$error.maxlength)">\n' +
    '                    {{\'maxlength\' | translate}}</div>\n' +
    '                <div ng-if="settingForm.minDays.$error.pattern && !settingForm.minDays.$pristine">\n' +
    '                    {{\'wrongpattern\' | translate}}</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '        <!-- <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
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
    '        </div> -->\n' +
    '\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'ProgramDiscount\' | translate}}</label>\n' +
    '                <input required type="number" class="mat-input form-control" name="programDiscount"\n' +
    '                    ng-pattern="/^[1-9]+[0-9]*$/" ng-model="settingCtrl.programDiscount" minlength="1"\n' +
    '                    maxlength="2">\n' +
    '                <div ng-messages="settingForm.programDiscount.$error" class="error">\n' +
    '                    <div ng-if="settingForm.programDiscount.$error.required && !settingForm.programDiscount.$pristine">\n' +
    '                        {{\'requiredErr\' | translate}}</div>\n' +
    '                    <div\n' +
    '                        ng-if="(settingForm.programDiscount.$error.minlength || settingForm.programDiscount.$error.maxlength)">\n' +
    '                        {{\'maxlength\' | translate}}</div>\n' +
    '\n' +
    '                    <div ng-if="settingForm.programDiscount.$error.pattern && !settingForm.programDiscount.$pristine">\n' +
    '                        {{\'wrongpattern\' | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;" ng-click="settingCtrl.UpdateSetting()"\n' +
    '            class="btn pmd-ripple-effect btn-primary pmd-z-depth ng-binding" type="button">{{\'Save\' | translate}} </button>\n' +
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
    '                        <i class="material-icons md-dark pmd-md cursorPointer font25"\n' +
    '                            ng-click="EditBranchDialog(branch.branchId)">mode_edit</i>\n' +
    '                    </td>\n' +
    '                </tr>\n' +
    '            </tbody>\n' +
    '        </table>\n' +
    '    </div>\n' +
    '    <div style="text-align:center;direction: ltr" paging page="1" page-size="10" total="totalCount"\n' +
    '        paging-action="changePage(page)" flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true"\n' +
    '        disabled-class="hide">\n' +
    '    </div>\n' +
    '</form>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/size/templates/editSize.html',
    '<div class="modal-content">\n' +
    '        <div class="modal-header bordered">\n' +
    '            <h2 class="pmd-card-title-text">{{\'UpdateSizeLbl\' | translate}}</h2>\n' +
    '        </div>\n' +
    '        <div class="modal-body">\n' +
    '            <form class="form-horizontal" name="editSizeForm">\n' +
    '                <!-- <div ng-if="editSizeDlCtrl.mode==\'map\'">\n' +
    '                    <select required class="select-simple form-control pmd-select2" \n' +
    '                            ng-options="item.sizeName for item in editSizeDlCtrl.englishSizes"  \n' +
    '                            ng-model="editSizeDlCtrl.selectedSize">\n' +
    '                    </select>\n' +
    '                    <div ng-if="editSizeDlCtrl.englishSizes.length <=0">{{\'NoSizeDefault\' | translate}} </div>\n' +
    '                </div> -->\n' +
    '                <div> \n' +
    '                    <!-- Nav tabs -->\n' +
    '                    <ul class="nav nav-tabs" role="tablist">\n' +
    '                        <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editSizeDlCtrl.language">\n' +
    '                            <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                                {{lang.value | translate}}\n' +
    '                            </a>\n' +
    '                        </li>\n' +
    '                        <!-- <li role="presentation">\n' +
    '                            <a href="javascript:void(0);" data-target="#arabic-form" aria-controls="about" role="tab" data-toggle="tab">{{\'arabic\' | translate}}</a>\n' +
    '                        </li> -->\n' +
    '                    </ul>\n' +
    '                    <div class="pmd-card">\n' +
    '                        <div class="pmd-card-body">\n' +
    '                            <!-- Tab panes -->\n' +
    '                            <div class="tab-content">\n' +
    '                                <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in editSizeDlCtrl.language" id="{{lang.value}}-form">\n' +
    '                                    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                        <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                        <input required type="text" class="mat-input form-control" name="sizeNameDictionary{{lang.value+\'Name\'}}" ng-model="editSizeDlCtrl.size.sizeNameDictionary[lang.key]" ng-minlength="3" ng-maxlength="10">\n' +
    '                                        <div ng-messages="editSizeForm.sizeNameDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '                                            \n' +
    '                                            <div ng-show="editSizeForm.sizeNameDictionary{{lang.value+\'Name\'}}.$error.required && !editSizeForm.sizeNameDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                            <div ng-show="(editSizeForm.sizeNameDictionary{{lang.value+\'Name\'}}.$error.minlength || editSizeForm.sizeNameDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !editSizeForm.sizeNameDictionary{{lang.value+\'Name\'}}.$error.required">{{\'SizeLengthError\' | translate}}</div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div> \n' +
    '\n' +
    '                <!-- <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                    <label for="first-name">{{\'Name\' | translate}}</label>\n' +
    '                    <input required type="text" class="mat-input form-control" name="sizeName" ng-model="editSizeDlCtrl.sizeName" ng-minlength="1" ng-maxlength="10">\n' +
    '                    <div ng-messages="editSizeForm.sizeName.$error" >\n' +
    '                        <div ng-if="editSizeForm.sizeName.$error.required && !editSizeForm.sizeName.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                        <div ng-if="(editSizeForm.sizeName.$error.minlength || editSizeForm.sizeName.$error.maxlength) && !editSizeForm.sizeName.$error.required">{{\'SizeLengthError\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </div> -->\n' +
    '            </form>\n' +
    '        </div>\n' +
    '        <div class="pmd-modal-action text-right">\n' +
    '            <button ng-disabled="editSizeForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="editSizeDlCtrl.updateSize()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '            <button class="btn pmd-ripple-effect btn-default" type="button" ng-click="editSizeDlCtrl.close()">{{\'DiscardBtn\' | translate}}</button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    \n' +
    '        \n' +
    '    ');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/size/templates/newSize.html',
    '<div class="modal-content">\n' +
    '        <div class="modal-header bordered">\n' +
    '            <h2 class="pmd-card-title-text">{{\'NewSizeLbl\' | translate}}</h2>\n' +
    '        </div>\n' +
    '        <div class="modal-body">\n' +
    '            <form class="form-horizontal" name="newSizeForm">\n' +
    '                <div> \n' +
    '                    <!-- Nav tabs -->\n' +
    '                    <ul class="nav nav-tabs" role="tablist">\n' +
    '                        <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in sizeDlCtrl.language">\n' +
    '                            <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                                {{lang.value | translate}}\n' +
    '                            </a>\n' +
    '                        </li>\n' +
    '                        <!-- <li role="presentation">\n' +
    '                            <a href="javascript:void(0);" data-target="#arabic-form" aria-controls="about" role="tab" data-toggle="tab">{{\'arabic\' | translate}}</a>\n' +
    '                        </li> -->\n' +
    '                    </ul>\n' +
    '                    <div class="pmd-card">\n' +
    '                        <div class="pmd-card-body">\n' +
    '                            <!-- Tab panes -->\n' +
    '                            <div class="tab-content">\n' +
    '                                <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in sizeDlCtrl.language" id="{{lang.value}}-form">\n' +
    '                                    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                        <label for="first-name"> {{ lang.value+\'Name\' | translate}} </label>\n' +
    '                                        <input required type="text" class="mat-input form-control" name="sizeNameDictionary{{lang.value+\'Name\'}}" ng-model="sizeDlCtrl.sizeNameDictionary[lang.key]" ng-minlength="3" ng-maxlength="10">\n' +
    '                                        <div ng-messages="newSizeForm.sizeNameDictionary{{lang.value+\'Name\'}}.$error" >\n' +
    '                                            \n' +
    '                                            <div ng-show="newSizeForm.sizeNameDictionary{{lang.value+\'Name\'}}.$error.required && !newSizeForm.sizeNameDictionary{{lang.value+\'Name\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                            <div ng-show="(newSizeForm.sizeNameDictionary{{lang.value+\'Name\'}}.$error.minlength || newSizeForm.sizeNameDictionary{{lang.value+\'Name\'}}.$error.maxlength) && !newSizeForm.sizeNameDictionary{{lang.value+\'Name\'}}.$error.required">{{\'SizeLengthError\' | translate}}</div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div> \n' +
    '                <!-- <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                    <label for="first-name">{{\'Name\' | translate}}</label>\n' +
    '                    <input required type="text" class="mat-input form-control" name="sizeName" ng-model="sizeDlCtrl.sizeName"  ng-minlength="3" ng-maxlength="10">\n' +
    '                    <div ng-messages="newSizeForm.sizeName.$error" >\n' +
    '                        <div ng-if="newSizeForm.sizeName.$error.required && !newSizeForm.sizeName.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                        <div ng-if="(newSizeForm.sizeName.$error.minlength || newSizeForm.sizeName.$error.maxlength) && !newSizeForm.sizeName.$error.required">{{\'SizeLengthError\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </div> -->\n' +
    '            </form>\n' +
    '        </div>\n' +
    '        <div class="pmd-modal-action text-right">\n' +
    '            <button ng-disabled="newSizeForm.$invalid || sizeDlCtrl.isChanged" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="sizeDlCtrl.AddNewSize()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '            <button class="btn pmd-ripple-effect btn-default" type="button" ng-click="sizeDlCtrl.close()">{{\'DiscardBtn\' | translate}}</button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    \n' +
    '        \n' +
    '    ');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/size/templates/size.html',
    '<div >\n' +
    '        <div style="margin-bottom:10px">\n' +
    '            <button  ng-click="$state.go(\'newsize\');" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddSizeBtn\' | translate}}</button>\n' +
    '    \n' +
    '        </div>\n' +
    '        <div ng-if="sizeCtrl.sizes.results.length == 0">\n' +
    '                <span>{{\'NoSizesAvailable\' | translate}}</span>\n' +
    '            </div>\n' +
    '        <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="sizeCtrl.sizes.results.length > 0">\n' +
    '            <div class="table-responsive">\n' +
    '                <table class="table pmd-table table-hover">\n' +
    '                    <thead>\n' +
    '                        <tr>\n' +
    '                            <th >{{\'Name\' | translate}}</th>\n' +
    '                            <th ></th>\n' +
    '                        </tr>\n' +
    '                    </thead>\n' +
    '                    <tbody>\n' +
    '                        <tr ng-repeat="size in sizeCtrl.sizes.results">\n' +
    '                            <td data-title="Name" width="30%">{{size.sizeNameDictionary[selectedLanguage]}}</td>\n' +
    '                            <td  width="70%">\n' +
    '                                <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="$state.go(\'editsize\',{sizeId: size.sizeId});">mode_edit</i> \n' +
    '                                <i class="material-icons pmd-md deleteButton cursorPointer font25" ng-click="sizeCtrl.openDeleteSizeDialog(size.sizeNameDictionary[selectedLanguage],size.sizeId,size)">delete</i>\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                    </tbody>\n' +
    '                </table>\n' +
    '            </div>\n' +
    '        </div> \n' +
    '    \n' +
    '            <div style="text-align:center;" paging page="1" page-size="10" total="sizeCtrl.sizes.totalCount" paging-action="sizeCtrl.changePage( page)"\n' +
    '            flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '               </div>\n' +
    '    \n' +
    '    </div>					\n' +
    '    ');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/user/templates/addUser.html',
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <h2 class="pmd-card-title-text"> {{\'BasicInfoLbl\' | translate}}</h2>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="newclientForm">\n' +
    '\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                <label for="first-name">{{\'FirstNameLbl\' | translate}}</label>\n' +
    '                <input required type="text" class="mat-input form-control" name="firstName" ng-model="FirstName"\n' +
    '                    ng-minlength="3" ng-maxlength="255">\n' +
    '                <div ng-messages="newclientForm.firstName.$error" class="error">\n' +
    '                    <div ng-show="newclientForm.firstName.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '                    <div ng-if="newclientForm.firstName.$error.required && !newclientForm.firstName.$pristine">{{\'FirstNameLengthError\'\n' +
    '                | translate}}</div>\n' +
    '                    <div\n' +
    '                        ng-if="(newclientForm.firstName.$error.minlength || newclientForm.firstName.$error.maxlength) ">{{\'NameLengthError255\'\n' +
    '                | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                <label for="first-name">{{\'LastNameLbl\' | translate}}</label>\n' +
    '                <input required type="text" class="mat-input form-control" name="lastName" ng-model="LastName"\n' +
    '                    ng-minlength="3" ng-maxlength="255">\n' +
    '                <div ng-messages="newclientForm.lastName.$error">\n' +
    '                    <div ng-show="newclientForm.lastName.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '                    <div ng-if="newclientForm.lastName.$error.required && !newclientForm.lastName.$pristine">{{\'lastName\' |\n' +
    '                translate}}</div>\n' +
    '                    <div ng-if="(newclientForm.lastName.$error.minlength || newclientForm.lastName.$error.maxlength)">{{\'NameLengthError255\'\n' +
    '                | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                <label>{{\'EmailLbl\' | translate}}</label>\n' +
    '                <input required type="text" class="mat-input form-control" name="userEmail" ng-model="Email"\n' +
    '                    ng-pattern="/^\\w+([-+.\']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$/">\n' +
    '                <span class="error" ng-show="newclientForm.userEmail.$error.pattern">{{\'WrongMail\' | translate}} </span>\n' +
    '                <!--\n' +
    '                            <div ng-if="!newclientForm.email.$error.required &amp;&amp;\n' +
    '                            newclientForm.userEmail.$error.email" class="error">{{\'WrongMail\' | translate}}\n' +
    '                            </div> -->\n' +
    '                <div ng-messages="newclientForm.email.$error">\n' +
    '                    <div ng-if="newclientForm.userEmail.$error.required && !newclientForm.userEmail.$pristine">{{\'EmailLengthError\'\n' +
    '                | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '\n' +
    '\n' +
    '                <label for="first-name">{{\'phoneLbl\' | translate}}</label>\n' +
    '                <input required type="text" class="mat-input form-control" name="phone" numbers-only ng-model="Phone"\n' +
    '                    ng-minlength="10" ng-maxlength="50">\n' +
    '                <!-- <span class="error" ng-show="newclientForm.phone.$error.pattern">{{\'NotPhoneNumber\' | translate}}   </span> -->\n' +
    '                <div ng-messages="newclientForm.phone.$error">\n' +
    '                    <div ng-if="newclientForm.phone.$error.required && !newclientForm.phone.$pristine">{{\'PhoneReqError\' |\n' +
    '                translate}}</div>\n' +
    '                    <div ng-if="(newclientForm.phone.$error.minlength || newclientForm.phone.$error.maxlength)">{{\'PhoneLengthError\'\n' +
    '                | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                <label for="first-name">{{\'UserPasswordLbl\' | translate}}</label>\n' +
    '                <input required type="password" class="mat-input form-control" name="password" ng-model="Password"\n' +
    '                    ng-minlength="8" ng-maxlength="25">\n' +
    '                <div ng-messages="newclientForm.password.$error">\n' +
    '                    <div ng-if="newclientForm.password.$error.required && !newclientForm.password.$pristine">{{\'requiredErr\' |\n' +
    '                translate}}</div>\n' +
    '                    <div\n' +
    '                        ng-if="(newclientForm.password.$error.minlength || newclientForm.password.$error.maxlength) && !newclientForm.password.newPassword.$error.required">\n' +
    '                        Password\n' +
    '                        length must be 8-25 char.</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                <label for="first-name">{{\'ConfirmPasswordLbl\' | translate}}</label>\n' +
    '                <input required type="password" class="mat-input form-control" name="confirmPassword"\n' +
    '                    ng-model="confirmPassword" equalto="newclientForm.password">\n' +
    '                <div ng-messages="newclientForm.confirmPassword.$error">\n' +
    '                    <div\n' +
    '                        ng-if="newclientForm.confirmPassword.$error.required && !newclientForm.confirmPassword.$pristine">{{\'requiredErr\'\n' +
    '                | translate}}</div>\n' +
    '                    <div\n' +
    '                        ng-if="newclientForm.confirmPassword.$error.equalto && !newclientForm.confirmPassword.$error.required">{{\'passworddontmatch\'\n' +
    '                | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Country\' | translate}}</label>\n' +
    '                <select style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                    ng-change="userCtrl.countryChange()" ng-model="userCtrl.selectedCountryId"\n' +
    '                    ng-options="group.countryId as group.titleDictionary[selectedLanguage] for group in userCtrl.counties">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '            <div ng-show=" userCtrl.selectedCountryId > 0"\n' +
    '                class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Region\' | translate}}</label>\n' +
    '                <select style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                    ng-change="userCtrl.regionChange()" ng-model="userCtrl.selectedRegionId"\n' +
    '                    ng-options="group.regionId as group.titleDictionary[selectedLanguage] for group in userCtrl.regions">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '            <div ng-show=" userCtrl.selectedRegionId > 0"\n' +
    '                class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'City\' | translate}}</label>\n' +
    '                <select style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                    ng-change="userCtrl.cityChange()" ng-model="userCtrl.selectedCityId"\n' +
    '                    ng-options="group.cityId as group.titleDictionary[selectedLanguage] for group in userCtrl.cities">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '            <div ng-show=" userCtrl.selectedCityId > 0"\n' +
    '                class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Area\' | translate}}</label>\n' +
    '                <select style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                    ng-change="userCtrl.areaChange()" ng-model="userCtrl.selectedAreaId"\n' +
    '                    ng-options="group.areaId as group.titleDictionary[selectedLanguage] for group in userCtrl.area">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '            <div ng-show=" userCtrl.selectedAreaId > 0"\n' +
    '                class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Branch\' | translate}}</label>\n' +
    '                <select class="form-control select-with-search pmd-select2-tags" ng-change="userCtrl.branchChange()"\n' +
    '                    ng-model="userCtrl.selectedBranchId"\n' +
    '                    ng-options="a.branchId as a.titleDictionary[selectedLanguage] for a in userCtrl.branchList"></select>\n' +
    '            </div>\n' +
    '\n' +
    '\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label> {{ \'Role\' | translate}} </label>\n' +
    '                <select required style="width:100% !important" class="form-control select-with-search pmd-select2-tags"\n' +
    '                    multiple ng-model="userCtrl.selectedUserRoles"\n' +
    '                    ng-options="role as role.titleDictionary[selectedLanguage] for role in roleList"></select>\n' +
    '\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '            ng-disabled="newclientForm.$invalid  || userCtrl.selectedUserRoles > 0 "\n' +
    '            class="btn pmd-ripple-effect btn-primary" type="button" ng-click="AddNewclient()">{{\'saveChangesBtn\' |\n' +
    '        translate}}</button>\n' +
    '        <button class="btn pmd-ripple-effect btn-default" type="button" ng-click="userCtrl.close()">{{\'DiscardBtn\' |\n' +
    '        translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<script type="text/javascript">\n' +
    '    $(document).ready(function () {\n' +
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
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered"> \n' +
    '        <h2 class="pmd-card-title-text"> {{\'BasicInfoLbl\' | translate}}</h2>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="newclientForm" autocomplete="off">\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'FirstNameLbl\' | translate}}</label>\n' +
    '                <input required type="text" class="mat-input form-control" name="firstName" ng-model="userObj.firstName"\n' +
    '                    minlength="3" maxlength="255">\n' +
    '                <div ng-messages="newclientForm.firstName.$error">\n' +
    '                    <div ng-if="newclientForm.firstName.$error.required && !newclientForm.firstName.$pristine">{{\'FirstNameLengthError\'\n' +
    '                | translate}}</div>\n' +
    '                    <div\n' +
    '                        ng-if="(newclientForm.firstName.$error.minlength || newclientForm.firstName.$error.maxlength) && !newclientForm.firstName.$error.required">{{\'NameLengthError255\'\n' +
    '                | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'LastNameLbl\' | translate}}</label>\n' +
    '                <input required type="text" class="mat-input form-control" name="lastName" ng-model="userObj.lastName"\n' +
    '                    minlength="3" maxlength="255">\n' +
    '                <div ng-messages="newclientForm.lastName.$error">\n' +
    '                    <div ng-if="newclientForm.lastName.$error.required && !newclientForm.lastName.$pristine">{{\'lastName\' |\n' +
    '                translate}}</div>\n' +
    '                    <div\n' +
    '                        ng-if="(newclientForm.lastName.$error.minlength || newclientForm.lastName.$error.maxlength) && !newclientForm.lastName.$error.required">{{\'LastNameLengthError\'\n' +
    '                | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'EmailLbl\' | translate}}</label>\n' +
    '\n' +
    '                <input required type="text" class="mat-input form-control" name="email"\n' +
    '                    ng-model="userObj.email" ng-minlength="3" ng-maxlength="50">\n' +
    '                <div ng-messages="newclientForm.email.$error">\n' +
    '                    <div ng-if="newclientForm.email.$error.required && !newclientForm.email.$pristine">{{\'lastName\' |\n' +
    '                translate}}</div>\n' +
    '                    <div\n' +
    '                        ng-if="(newclientForm.email.$error.minlength || newclientForm.email.$error.maxlength) && !newclientForm.email.$error.required">{{\'LastNameLengthError\'\n' +
    '                | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'phoneLbl\' | translate}}</label>\n' +
    '\n' +
    '                <input required type="text" class="mat-input form-control" numbers-only name="phone"\n' +
    '                    ng-model="userObj.phone" ng-pattern="phoneNumbr" ng-minlength="10" ng-maxlength="50">\n' +
    '                <span class="error" ng-show="newclientForm.phone.$error.pattern">{{\'NotPhoneNumber\' | translate}}\n' +
    '                </span>\n' +
    '                <div ng-messages="newclientForm.phone.$error">\n' +
    '                    <div ng-if="newclientForm.phone.$error.required && !newclientForm.phone.$pristine">{{\'PhoneReqError\' |\n' +
    '                translate}}</div>\n' +
    '                    <div ng-if="(newclientForm.phone.$error.minlength || newclientForm.phone.$error.maxlength)">{{\'PhoneLengthError\'\n' +
    '                | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'UserPasswordLbl\' | translate}}</label>\n' +
    '\n' +
    '                <input required type="password" class="mat-input form-control" name="password"\n' +
    '                    ng-model="userObj.password" ng-minlength="8" ng-maxlength="25">\n' +
    '                <div ng-messages="newclientForm.password.$error">\n' +
    '                    <div ng-if="newclientForm.password.$error.required && !newclientForm.password.$pristine">{{\'requiredErr\' |\n' +
    '                translate}}</div>\n' +
    '                    <div\n' +
    '                        ng-if="(newclientForm.password.$error.minlength || newclientForm.password.$error.maxlength) && !newclientForm.password.newPassword.$error.required">\n' +
    '                        Password\n' +
    '                        length must be 8-25 char.</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'ConfirmPasswordLbl\' | translate}}</label>\n' +
    '                <input required type="password" class="mat-input form-control" name="confirmPassword"\n' +
    '                    ng-model="userObj.confirmPassword" equalto="newclientForm.password">\n' +
    '                <div ng-messages="newclientForm.confirmPassword.$error">\n' +
    '                    <div\n' +
    '                        ng-if="newclientForm.confirmPassword.$error.required && !newclientForm.confirmPassword.$pristine">{{\'requiredErr\'\n' +
    '                | translate}}</div>\n' +
    '                    <div\n' +
    '                        ng-if="newclientForm.confirmPassword.$error.equalto && !newclientForm.confirmPassword.$error.required">{{\'passworddontmatch\'\n' +
    '                | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Country\' | translate}}</label>\n' +
    '                <select required style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                    ng-change="editUserCtrl.countryChange()" ng-model="editUserCtrl.selectedCountryId"\n' +
    '                    ng-options="group.countryId as group.titleDictionary[selectedLanguage] for group in editUserCtrl.counties">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '            <div ng-show=" editUserCtrl.selectedCountryId > 0"\n' +
    '                class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Region\' | translate}}</label>\n' +
    '                <select ng-required="editUserCtrl.selectedCountryId > 0" style="width:100% !important"\n' +
    '                    class="select-tags form-control pmd-select2-tags" ng-change="editUserCtrl.regionChange()"\n' +
    '                    ng-model="editUserCtrl.selectedRegionId"\n' +
    '                    ng-options="group.regionId as group.titleDictionary[selectedLanguage] for group in editUserCtrl.regions">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '            <div ng-show=" editUserCtrl.selectedRegionId > 0"\n' +
    '                class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'City\' | translate}}</label>\n' +
    '                <select ng-required="editUserCtrl.selectedRegionId > 0" style="width:100% !important"\n' +
    '                    class="select-tags form-control pmd-select2-tags" ng-change="editUserCtrl.cityChange()"\n' +
    '                    ng-model="editUserCtrl.selectedCityId"\n' +
    '                    ng-options="group.cityId as group.titleDictionary[selectedLanguage] for group in editUserCtrl.cities">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '            <div ng-show=" editUserCtrl.selectedCityId > 0"\n' +
    '                class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Area\' | translate}}</label>\n' +
    '                <select ng-required=" editUserCtrl.selectedCityId > 0" style="width:100% !important"\n' +
    '                    class="select-tags form-control pmd-select2-tags" ng-change="editUserCtrl.areaChange()"\n' +
    '                    ng-model="editUserCtrl.selectedAreaId"\n' +
    '                    ng-options="group.areaId as group.titleDictionary[selectedLanguage] for group in editUserCtrl.area">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '            <div ng-show="  editUserCtrl.selectedAreaId > 0"\n' +
    '                class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                <label for="first-name">{{\'Branch\' | translate}}</label>\n' +
    '                <select ng-required="(editUserCtrl.selectedAreaId > 0 "\n' +
    '                    class="form-control select-with-search pmd-select2-tags" ng-change="editUserCtrl.branchChange()"\n' +
    '                    ng-model="editUserCtrl.selectedBranchId"\n' +
    '                    ng-options="a.branchId as a.titleDictionary[selectedLanguage] for a in editUserCtrl.branchList"></select>\n' +
    '            </div> \n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '                <label> {{ \'Role\' | translate}} </label>\n' +
    '                <select required style="width:100% !important" class="form-control select-add-tags pmd-select2-tags"\n' +
    '                    multiple ng-model="editUserCtrl.selectedUserRoles"\n' +
    '                    ng-options="role as role.titleDictionary[selectedLanguage] for role in roleList"></select>\n' +
    '\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '            ng-disabled="newclientForm.$invalid || !editUserCtrl.show && editUserCtrl.selectedBranchId <= 0"\n' +
    '            class="btn pmd-ripple-effect btn-primary" type="button" ng-click="Updateclient()">{{\'saveChangesBtn\' |\n' +
    '        translate}}</button>\n' +
    '        <button class="btn pmd-ripple-effect btn-default" type="button" ng-click="editUserCtrl.close()">{{\'DiscardBtn\' |\n' +
    '        translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
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
    '                            <i class="material-icons md-dark pmd-md cursorPointer font25" \n' +
    '                            ng-click="$state.go(\'editUser\', {userId: user.userId});">mode_edit</i>\n' +
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
