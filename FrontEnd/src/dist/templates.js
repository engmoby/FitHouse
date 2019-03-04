angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Address/templates/Address.html',
    ' \n' +
    '<div class="inn-body-section pad-bot-55">\n' +
    '    <div class="container">\n' +
    '\n' +
    '        <div class="row">\n' +
    '            <!--TYPOGRAPHY SECTION-->\n' +
    '            <div class="col-md-12">\n' +
    '                <div class="head-typo typo-com">\n' +
    '                    <h3>{{\'Address\' | translate}}</h3>\n' +
    '\n' +
    '                    <div style="margin-bottom:10px">\n' +
    '                        <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '                            ng-click="$state.go(\'newAddress\');" class="btn pmd-ripple-effect btn-primary pmd-z-depth"\n' +
    '                            type="button">{{\'AddBtn\'\n' +
    '                | translate}}</button>\n' +
    '\n' +
    '                    </div>\n' +
    '                    <div ng-if="AddressList.length == 0">\n' +
    '                        <span>{{\'NoAddressAvailable\' | translate}}</span>\n' +
    '                    </div>\n' +
    '                    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="AddressList.length > 0">\n' +
    '                        <div class="table-responsive"></div>\n' +
    '                        <table class="table">\n' +
    '                            <thead>\n' +
    '                                <tr>\n' +
    '                                    <th>{{\'appartmentNo\' | translate}}</th>\n' +
    '                                    <th>{{\'floor\' | translate}}</th>\n' +
    '                                    <th></th>\n' +
    '                                </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                                <tr ng-repeat="address in AddressList">\n' +
    '                                    <td data-title="Name">{{address.appartmentNo}}</td>\n' +
    '\n' +
    '                                    <td data-title="Name">{{address.floor}}</td>\n' +
    '\n' +
    '                                    <td width="30%" ng-show="!address.isStatic">\n' +
    '                                        <i class="material-icons md-dark pmd-md cursorPointer font25" style="cursor: pointer;"\n' +
    '                                            ng-click="$state.go(\'editaddress\',{addressId: address.addressId});">mode_edit</i>\n' +
    '\n' +
    '                                    </td>\n' +
    '                                </tr>\n' +
    '                            </tbody>\n' +
    '                        </table>\n' +
    '                    </div>\n' +
    '                    <div style="text-align:center;direction: ltr" paging page="1" page-size="10" total="totalCount"\n' +
    '                        paging-action="changePage(page)" flex="nogrow" show-prev-next="true" show-first-last="true"\n' +
    '                        hide-if-empty="true" disabled-class="hide">\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/Address/templates/edit.html',
    '<div class="inn-body-section pad-bot-55">\n' +
    '    <div class="container">\n' +
    '        <div class="row">\n' +
    '            <div class="head-typo typo-com collap-expand book-form inn-com-form">\n' +
    '                <h2>{{\'Address\' | translate}} </h2>\n' +
    '\n' +
    '\n' +
    '                <form class="form-horizontal" name="addressForm">\n' +
    '\n' +
    '                    <div\n' +
    '                        class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'FLoor\' | translate}}</label>\n' +
    '                        <input required type="number" class="mat-input form-control" name="floor"\n' +
    '                            ng-model="editAddressCtrl.Address.floor" ng-minlength="1" ng-maxlength="4">\n' +
    '                        <div ng-messages="addressForm.floor.$error" class="error">\n' +
    '                            <div ng-if="addressForm.floor.$error.required && !addressForm.floor.$pristine">\n' +
    '                                {{\'ProgramDaysCountReqError\' | translate}}</div>\n' +
    '                            <div ng-if="(addressForm.floor.$error.minlength || addressForm.floor.$error.maxlength)">\n' +
    '                                {{\'ProgramDaysCountLengthError\' | translate}}</div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div\n' +
    '                        class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'ApartmentNumber\' | translate}}</label>\n' +
    '                        <input required type="number" class="mat-input form-control" name="appartmentNo"\n' +
    '                            ng-model="editAddressCtrl.Address.appartmentNo" ng-minlength="1" ng-maxlength="4">\n' +
    '                        <div ng-messages="addressForm.appartmentNo.$error" class="error">\n' +
    '                            <div\n' +
    '                                ng-if="addressForm.appartmentNo.$error.required && !addressForm.appartmentNo.$pristine">\n' +
    '                                {{\'ProgramDaysCountReqError\' | translate}}</div>\n' +
    '                            <div\n' +
    '                                ng-if="(addressForm.appartmentNo.$error.minlength || addressForm.appartmentNo.$error.maxlength)">\n' +
    '                                {{\'ProgramDaysCountLengthError\' | translate}}</div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                        <label for="first-name">{{\'AddressDescription\' | translate}}</label>\n' +
    '                        <textarea required type="text" class="mat-input form-control" name="addressDescription"\n' +
    '                            ng-model="editAddressCtrl.Address.description" ng-minlength="3"\n' +
    '                            ng-maxlength="255"></textarea>\n' +
    '                        <div ng-messages="addressForm.addressDescription.$error">\n' +
    '                            <div\n' +
    '                                ng-if="addressForm.addressDescription.$error.required && !addressForm.addressDescription.$pristine">\n' +
    '                                {{\'Address\' | translate}}\n' +
    '                                {{\'ReqError\' | translate}}\n' +
    '                            </div>\n' +
    '                            <div\n' +
    '                                ng-if="(addressForm.addressDescription.$error.minlength || addressForm.addressDescription.$error.maxlength)">\n' +
    '                                {{\'NameLengthError255\' | translate}}</div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div\n' +
    '                        class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'Country\' | translate}}</label>\n' +
    '                        <select style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                            ng-change="editAddressCtrl.countryChange()" ng-model="editAddressCtrl.selectedCountryId"\n' +
    '                            ng-options="group.countryId as group.titleDictionary[selectedLanguage] for group in editAddressCtrl.counties">\n' +
    '                        </select>\n' +
    '                    </div>\n' +
    '                    <div ng-show=" editAddressCtrl.selectedCountryId > 0"\n' +
    '                        class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'Region\' | translate}}</label>\n' +
    '                        <select style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                            ng-change="editAddressCtrl.regionChange()" ng-model="editAddressCtrl.selectedRegionId"\n' +
    '                            ng-options="group.regionId as group.titleDictionary[selectedLanguage] for group in editAddressCtrl.regions">\n' +
    '                        </select>\n' +
    '                    </div>\n' +
    '                    <div ng-show=" editAddressCtrl.selectedRegionId > 0"\n' +
    '                        class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'City\' | translate}}</label>\n' +
    '                        <select style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                            ng-change="editAddressCtrl.cityChange()" ng-model="editAddressCtrl.selectedCityId"\n' +
    '                            ng-options="group.cityId as group.titleDictionary[selectedLanguage] for group in editAddressCtrl.cities">\n' +
    '                        </select>\n' +
    '                    </div>\n' +
    '                    <div ng-show=" editAddressCtrl.selectedCityId > 0"\n' +
    '                        class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'Area\' | translate}}</label>\n' +
    '                        <select ng-required="editAddressCtrl.selectedCityId > 0" style="width:100% !important"\n' +
    '                            class="select-tags form-control pmd-select2-tags" ng-change="editAddressCtrl.areaChange()"\n' +
    '                            ng-model="editAddressCtrl.selectedAreaId"\n' +
    '                            ng-options="group.areaId as group.titleDictionary[selectedLanguage] for group in editAddressCtrl.area">\n' +
    '                        </select>\n' +
    '                    </div>\n' +
    '                    <div class="pmd-modal-action text-right">\n' +
    '                        <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '                            ng-disabled="addressForm.$invalid || editAddressCtrl.selectedBranchId < 0"\n' +
    '                            class="btn pmd-ripple-effect btn-primary" type="button"\n' +
    '                            ng-click="editAddressCtrl.UpdateType()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '\n' +
    '                        <button class="btn pmd-ripple-effect btn-default" type="button"\n' +
    '                            ng-click="$state.go(\'Address\', {userId: user.id});">{{\'DiscardBtn\' | translate}}</button>\n' +
    '                    </div>\n' +
    '                </form>\n' +
    '\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
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
  $templateCache.put('./app/GlobalAdmin/Address/templates/new.html',
    '<div class="inn-body-section pad-bot-55">\n' +
    '    <div class="container">\n' +
    '        <div class="row">\n' +
    '            <div class="head-typo typo-com collap-expand book-form inn-com-form">\n' +
    '                <h2>{{\'Address\' | translate}} </h2>\n' +
    '\n' +
    '\n' +
    '                <form class="form-horizontal" name="addressForm">\n' +
    '\n' +
    '                    <div\n' +
    '                        class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'FLoor\' | translate}}</label>\n' +
    '                        <input required type="number" class="mat-input form-control" name="floor"\n' +
    '                            ng-model="newAddressCtrl.FLoor" ng-minlength="1" ng-maxlength="4">\n' +
    '                        <div ng-messages="addressForm.floor.$error" class="error">\n' +
    '                            <div ng-if="addressForm.floor.$error.required && !addressForm.floor.$pristine">\n' +
    '                                {{\'ProgramDaysCountReqError\' | translate}}</div>\n' +
    '                            <div ng-if="(addressForm.floor.$error.minlength || addressForm.floor.$error.maxlength)">\n' +
    '                                {{\'ProgramDaysCountLengthError\' | translate}}</div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div\n' +
    '                        class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'ApartmentNumber\' | translate}}</label>\n' +
    '                        <input required type="number" class="mat-input form-control" name="appartmentNo"\n' +
    '                            ng-model="newAddressCtrl.AppartmentNo" ng-minlength="1" ng-maxlength="4">\n' +
    '                        <div ng-messages="addressForm.appartmentNo.$error" class="error">\n' +
    '                            <div\n' +
    '                                ng-if="addressForm.appartmentNo.$error.required && !addressForm.appartmentNo.$pristine">\n' +
    '                                {{\'ProgramDaysCountReqError\' | translate}}</div>\n' +
    '                            <div\n' +
    '                                ng-if="(addressForm.appartmentNo.$error.minlength || addressForm.appartmentNo.$error.maxlength)">\n' +
    '                                {{\'ProgramDaysCountLengthError\' | translate}}</div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                        <label for="first-name">{{\'AddressDescription\' | translate}}</label>\n' +
    '                        <textarea required type="text" class="mat-input form-control" name="addressDescription"\n' +
    '                            ng-model="newAddressCtrl.AddressDescription" ng-minlength="3" ng-maxlength="255"></textarea>\n' +
    '                        <div ng-messages="addressForm.addressDescription.$error">\n' +
    '                            <div\n' +
    '                                ng-if="addressForm.addressDescription.$error.required && !addressForm.addressDescription.$pristine">\n' +
    '                                {{\'Address\' | translate}}\n' +
    '                                {{\'ReqError\' | translate}}\n' +
    '                            </div>\n' +
    '                            <div\n' +
    '                                ng-if="(addressForm.addressDescription.$error.minlength || addressForm.addressDescription.$error.maxlength)">\n' +
    '                                {{\'NameLengthError255\' | translate}}</div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div\n' +
    '                    class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                    <label for="first-name">{{\'Country\' | translate}}</label>\n' +
    '                    <select style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                        ng-change="newAddressCtrl.countryChange()" ng-model="newAddressCtrl.selectedCountryId"\n' +
    '                        ng-options="group.countryId as group.titleDictionary[selectedLanguage] for group in newAddressCtrl.counties">\n' +
    '                    </select>\n' +
    '                </div>\n' +
    '                <div ng-show=" newAddressCtrl.selectedCountryId > 0"\n' +
    '                    class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                    <label for="first-name">{{\'Region\' | translate}}</label>\n' +
    '                    <select style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                        ng-change="newAddressCtrl.regionChange()" ng-model="newAddressCtrl.selectedRegionId"\n' +
    '                        ng-options="group.regionId as group.titleDictionary[selectedLanguage] for group in newAddressCtrl.regions">\n' +
    '                    </select>\n' +
    '                </div>\n' +
    '                <div ng-show=" newAddressCtrl.selectedRegionId > 0"\n' +
    '                    class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                    <label for="first-name">{{\'City\' | translate}}</label>\n' +
    '                    <select style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                        ng-change="newAddressCtrl.cityChange()" ng-model="newAddressCtrl.selectedCityId"\n' +
    '                        ng-options="group.cityId as group.titleDictionary[selectedLanguage] for group in newAddressCtrl.cities">\n' +
    '                    </select>\n' +
    '                </div>\n' +
    '                <div ng-show=" newAddressCtrl.selectedCityId > 0"\n' +
    '                    class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                    <label for="first-name">{{\'Area\' | translate}}</label>\n' +
    '                    <select ng-required="newAddressCtrl.selectedCityId > 0" style="width:100% !important"\n' +
    '                        class="select-tags form-control pmd-select2-tags" ng-change="newAddressCtrl.areaChange()"\n' +
    '                        ng-model="newAddressCtrl.selectedAreaId"\n' +
    '                        ng-options="group.areaId as group.titleDictionary[selectedLanguage] for group in newAddressCtrl.area">\n' +
    '                    </select>\n' +
    '                </div>\n' +
    '\n' +
    '                    <div class="pmd-modal-action text-right">\n' +
    '                        <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '                            ng-disabled="addressForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button"\n' +
    '                            ng-click="newAddressCtrl.AddNewType()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '\n' +
    '                        <button class="btn pmd-ripple-effect btn-default" type="button"\n' +
    '                            ng-click="$state.go(\'Address\', {userId: user.id});">{{\'DiscardBtn\' | translate}}</button>\n' +
    '                    </div>\n' +
    '                </form>\n' +
    '\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
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
  $templateCache.put('./app/GlobalAdmin/customProgram/templates/Custom.html',
    '<!--TOP BANNER-->\n' +
    '<div class="inn-banner">\n' +
    '    <div class="container">\n' +
    '        <div class="row">\n' +
    '            <h4>Hotel Events</h4>\n' +
    '            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut\n' +
    '                laoreet.\n' +
    '                <p>\n' +
    '                    <ul>\n' +
    '                        <li>\n' +
    '                            <a href="#">Home</a>\n' +
    '                        </li>\n' +
    '                        <li>\n' +
    '                            <a href="#">Custom</a>\n' +
    '                        </li>\n' +
    '                    </ul>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<!--TOP SECTION-->\n' +
    '<div class="inn-body-section pad-bot-55">\n' +
    '    <div class="container">\n' +
    '        <div class="row">\n' +
    '            <div class="page-head">\n' +
    '                <h4>Program Details</h4>\n' +
    '                <div class="head-title">\n' +
    '                    <div class="hl-1"></div>\n' +
    '                    <div class="hl-2"></div>\n' +
    '                    <div class="hl-3"></div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <!--TYPOGRAPHY SECTION-->\n' +
    '\n' +
    '            <form name="stepTwoProgramForm">\n' +
    '                <div class="head-typo typo-com collap-expand">\n' +
    '                    <h4>Days</h4>\n' +
    '                    <span>carbs: {{CustomCtrl.carbs}}</span>\n' +
    '                    <span>fat: {{CustomCtrl.fat}}</span>\n' +
    '                    <span>calories: {{CustomCtrl.calories}}</span>\n' +
    '                    <span>protein: {{CustomCtrl.protein}}</span>\n' +
    '                    <div ng-init="counterDay = 0; counterMeal = 0">\n' +
    '                        <div class="panel-group pmd-accordion pmd-accordion-inbox" id="accordion6" role="tablist"\n' +
    '                            aria-multiselectable="true">\n' +
    '                            <div ng-repeat="n in [].constructor(CustomCtrl.daysCount)  track by $index"\n' +
    '                                class="panel panel-default">\n' +
    '                                <div class="panel-heading" role="tab" id="headingOne">\n' +
    '                                    <a ng-init="counterDay=counterDay+1;" data-toggle="collapse"\n' +
    '                                        data-parent="#accordion6" ng-init="n=false"\n' +
    '                                        ng-click="n=!n;showDetails = ! showDetails; CustomCtrl.showDDL(); "\n' +
    '                                        aria-expanded="true" aria-controls="collapseOne6" data-expandable="false">\n' +
    '                                        <h4 class="panel-title">\n' +
    '\n' +
    '                                            {{\'Day\' | translate}} : {{counterDay=$index+1}}\n' +
    '                                            <!-- <i class="material-icons md-dark pmd-sm pmd-accordion-arrow">keyboard_arrow_down</i> -->\n' +
    '\n' +
    '                                        </h4>\n' +
    '                                    </a>\n' +
    '                                </div>\n' +
    '\n' +
    '                                <div ng-show="n == true" id="collapseOne6" class="panel-collapse collapse in"\n' +
    '                                    role="tabpanel" aria-labelledby="headingOne">\n' +
    '                                    <div class="panel-body">\n' +
    '                                        <ul>\n' +
    '                                            <li\n' +
    '                                                ng-repeat="meal in [].constructor(CustomCtrl.mealsCount)  track by $index">\n' +
    '                                                <!--EVENT-->\n' +
    '                                                <div class="row events">\n' +
    '                                                    <div class="col-md-2"> <img src="/assets/img/meal.jpeg" alt="" />\n' +
    '                                                    </div>\n' +
    '                                                    <div class="col-md-8">\n' +
    '                                                        <h3>\n' +
    '                                                            <a ng-init="counterMeal=counterMeal+1;">{{\'Meal\' | translate}}\n' +
    '                                                                : {{counterMeal=$index+1}}\n' +
    '                                                            </a>\n' +
    '                                                        </h3>\n' +
    '\n' +
    '\n' +
    '                                                        <div class="progress-bar progress-bar-danger progress-bar-striped"\n' +
    '                                                            role="progressbar" aria-valuenow="70" aria-valuemin="0"\n' +
    '                                                            aria-valuemax="100" style="width:\'{{CustomCtrl.carbs}}%\'">\n' +
    '                                                            60 (Calories) </div>\n' +
    '                                                    </div>\n' +
    '\n' +
    '\n' +
    '                                                    <br />\n' +
    '                                                    <!--SERVICES SECTION-->\n' +
    '                                                    <!--END SERVICES SECTION-->\n' +
    '                                                </div>\n' +
    '                                                <!--END EVENT-->\n' +
    '\n' +
    '                                                <div ng-show="showDetails">\n' +
    '                                                    <div\n' +
    '                                                        class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                        <label for="first-name">{{\'SelectItems\' | translate}}</label>\n' +
    '                                                        <select required name="ddl{{counterDay}}{{counterMeal}}"\n' +
    '                                                            style="width:100% !important"\n' +
    '                                                            class="select-tags form-control pmd-select2-tags" multiple\n' +
    '                                                            ng-model="itemModel"\n' +
    '                                                            ng-change="getData(itemModel,counterDay,counterMeal);CustomCtrl.addItemToList(itemModel)"\n' +
    '                                                            ng-options="item as item.itemNameDictionary[selectedLanguage] \n' +
    '                                                                        group by item.category.titleDictionary[selectedLanguage]\n' +
    '                                                                        for item  in CustomCtrl.ItemCategorized">\n' +
    '                                                        </select>\n' +
    '                                                        <div\n' +
    '                                                            ng-messages="stepTwoProgramForm.ddl{{counterDay}}{{counterMeal}}.$error">\n' +
    '                                                            <div\n' +
    '                                                                ng-show="stepTwoProgramForm.ddl{{counterDay}}{{counterMeal}}.$error.required && !stepTwoProgramForm.ddl{{counterDay}}{{counterMeal}}.$pristine">\n' +
    '                                                                {{\'requiredErr\' | translate}}</div>\n' +
    '                                                        </div>\n' +
    '                                                    </div>\n' +
    '                                                    <div class="row">\n' +
    '                                                        <div class="res-menu" ng-repeat="meal in itemModel">\n' +
    '                                                            <img src="/assets/img/meal.jpeg" alt="" />\n' +
    '                                                            <h3> {{meal.itemNameDictionary[selectedLanguage] | limitTo:10}}<span>{{meal.price}}</span>\n' +
    '                                                            </h3> <span\n' +
    '                                                                class="menu-item">{{meal.itemDescriptionDictionary[selectedLanguage] | limitTo:10}}</span>\n' +
    '                                                        </div>\n' +
    '                                                    </div>\n' +
    '\n' +
    '                                                </div>\n' +
    '                                            </li>\n' +
    '                                        </ul>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                </div>\n' +
    '                <div class="head-typo typo-com collap-expand">\n' +
    '                    <h4>Address</h4>\n' +
    '                    <div class="col-md-12">\n' +
    '                        <div class="head-typo typo-com collap-expand book-form inn-com-form">\n' +
    '                            <!-- Switch -->\n' +
    '                            <!-- <div class="switch">\n' +
    '                                <label> {{\'Delivery\' | translate}}\n' +
    '                                    <input type="checkbox" ng-model="CustomCtrl.orderType.type"\n' +
    '                                        ng-click="CustomCtrl.changeOrderType()">\n' +
    '                                    <span class="lever"></span>\n' +
    '                                    {{\'PickUp\' | translate}} </label>\n' +
    '                            </div> -->\n' +
    '                            <div class="col-md-12">\n' +
    '                                <h5>{{\'OrderType\' | translate}}</h5>\n' +
    '                                <p>\n' +
    '                                    <input ng-model="CustomCtrl.orderType.type" name="group1" type="radio" id="test1"\n' +
    '                                        value="delivery" />\n' +
    '                                    <label for="test1">{{\'Delivery\' | translate}}</label>\n' +
    '                                </p>\n' +
    '                                <p>\n' +
    '                                    <input ng-model="CustomCtrl.orderType.type" name="group1" type="radio" id="test2"\n' +
    '                                        value="pickup" />\n' +
    '                                    <label for="test2">{{\'PickUp\' | translate}}</label>\n' +
    '                                </p>\n' +
    '\n' +
    '                                <!--    <div ng-if="CustomCtrl.orderType.type == \'delivery\'" class="row form-group">\n' +
    '                                    <div class="col-md-6">\n' +
    '                                        <div>\n' +
    '                                            <div\n' +
    '                                                class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                <label for="first-name">{{\'SelectAddress\' | translate}}</label>\n' +
    '                                             \n' +
    '                                                <div ng-repeat="address in userAddresses">\n' +
    '\n' +
    '\n' +
    '                                                    <input ng-change="addressInfo(address)" name="group2" type="radio"\n' +
    '                                                        id="test{{address.addressId}}" ng-model="addresses.address"\n' +
    '                                                        value="{{address.addressId}}" />\n' +
    '                                                    <label for="test{{address.addressId}}">{{address.appartmentNo}},\n' +
    '                                                        {{address.description}},\n' +
    '                                                        {{\'Floor\' | translate}} {{address.floor}}</label>\n' +
    ' \n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '\n' +
    '                                 <p>\n' +
    '                                <input name="group1" ng-click="CustomCtrl.changeOrderType()"\n' +
    '                                    ng-model="CustomCtrl.orderType.type" type="radio" id="test1" />\n' +
    '                                <label for="test1">{{\'Delivery\' | translate}}</label>\n' +
    '                            </p>\n' +
    '                            <p>\n' +
    '                                <input name="group1" ng-click="CustomCtrl.changeOrderType()"\n' +
    '                                    ng-model="CustomCtrl.orderType.type" type="radio" id="test2" />\n' +
    '                                <label for="test2">{{\'PickUp\' | translate}}</label>\n' +
    '                            </p> -->\n' +
    '                                <div class="row" ng-if="CustomCtrl.orderType.type == \'delivery\'">\n' +
    '                                    <div class="col-md-6">\n' +
    '                                        <div>\n' +
    '                                            <div\n' +
    '                                                class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                <label for="first-name">{{\'SelectAddress\' | translate}}</label>\n' +
    '\n' +
    '                                                <div ng-repeat="address in CustomCtrl.userAddresses">\n' +
    '                                                    <label>\n' +
    '                                                        <input name="group3" ng-change="CustomCtrl.addressInfo(address)"\n' +
    '                                                            type="radio" ng-model="CustomCtrl.addresses.address"\n' +
    '                                                            value="{{address.addressId}}"\n' +
    '                                                            ng-required="CustomCtrl.orderType.type == \'delivery\'">\n' +
    '                                                        <label for="addressRadio{{address.addressId}}">\n' +
    '                                                            {{\'appartmentNo\' | translate}}: {{address.appartmentNo}}\n' +
    '                                                            <br> {{\'Floor\' | translate}} : {{address.floor}}\n' +
    '                                                            <br> {{\'appartmentNo\' | translate}} :\n' +
    '                                                            {{address.description}}\n' +
    '                                                        </label>\n' +
    '                                                    </label>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '\n' +
    '                                <div ng-show="CustomCtrl.orderType.type == \'pickup\'">\n' +
    '                                    <div class="row">\n' +
    '                                        <div class="input-field col s6">\n' +
    '                                            <select style="width:100% !important"\n' +
    '                                                ng-required="CustomCtrl.orderType.type == \'pickup\'"\n' +
    '                                                class=" select-tags form-control pmd-select2-tags" name="country"\n' +
    '                                                ng-change="CustomCtrl.countryChange()"\n' +
    '                                                ng-model="CustomCtrl.selectedCountryId"\n' +
    '                                                ng-options="group.countryId as group.titleDictionary[selectedLanguage] for group in CustomCtrl.counties">\n' +
    '                                            </select>\n' +
    '                                            <span ng-show=\'stepTwoProgramForm.country.$error.required\'>\n' +
    '                                                required\n' +
    '                                            </span>\n' +
    '                                        </div>\n' +
    '                                        <div class="input-field col s6">\n' +
    '                                            <select style="width:100% !important"\n' +
    '                                                ng-required="CustomCtrl.orderType.type == \'pickup\' || CustomCtrl.selectedCountryId > 0"\n' +
    '                                                class="select-tags form-control pmd-select2-tags"\n' +
    '                                                ng-change="CustomCtrl.regionChange()"\n' +
    '                                                ng-model="CustomCtrl.selectedRegionId"\n' +
    '                                                ng-options="group.regionId as group.titleDictionary[selectedLanguage] for group in CustomCtrl.regions">\n' +
    '                                            </select>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                    <div class="row">\n' +
    '                                        <div class="input-field col s6">\n' +
    '                                            <select\n' +
    '                                                ng-required="CustomCtrl.orderType.type == \'pickup\'  || CustomCtrl.selectedRegionId > 0"\n' +
    '                                                style="width:100% !important"\n' +
    '                                                class="select-tags form-control pmd-select2-tags"\n' +
    '                                                ng-change="CustomCtrl.cityChange()" ng-model="CustomCtrl.selectedCityId"\n' +
    '                                                ng-options="group.cityId as group.titleDictionary[selectedLanguage] for group in CustomCtrl.cities">\n' +
    '                                            </select>\n' +
    '                                        </div>\n' +
    '                                        <div class="input-field col s6">\n' +
    '                                            <select\n' +
    '                                                ng-required="CustomCtrl.orderType.type == \'pickup\' || CustomCtrl.selectedCityId > 0"\n' +
    '                                                style="width:100% !important"\n' +
    '                                                class="select-tags form-control pmd-select2-tags"\n' +
    '                                                ng-change="CustomCtrl.areaChange()" ng-model="CustomCtrl.selectedAreaId"\n' +
    '                                                ng-options="group.areaId as group.titleDictionary[selectedLanguage] for group in CustomCtrl.area">\n' +
    '                                            </select>\n' +
    '                                        </div>\n' +
    '                                        <div class="input-field col s6">\n' +
    '                                            <select\n' +
    '                                                ng-required="CustomCtrl.orderType.type == \'pickup\' || CustomCtrl.selectedAreaId > 0"\n' +
    '                                                style="width:100% !important"\n' +
    '                                                class="select-tags form-control pmd-select2-tags"\n' +
    '                                                ng-change="CustomCtrl.branchChange()"\n' +
    '                                                ng-model="CustomCtrl.selectedBranchId"\n' +
    '                                                ng-options="group.branchId as group.titleDictionary[selectedLanguage] for group in CustomCtrl.branchList">\n' +
    '                                            </select>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="row">\n' +
    '                        <div class="col-md-10"></div>\n' +
    '                        <div class="col-md-4">\n' +
    '                            Program Price:{{ CustomCtrl.ProgramTotalPrice}}\n' +
    '                            <br> Delivery:{{ CustomCtrl.DeliveryFees}}\n' +
    '                            <br>Total :{{ CustomCtrl.Total}}\n' +
    '                            <br>\n' +
    '                            <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '                                ng-disabled="stepTwoProgramForm.$invalid || CustomCtrl.selectedBranchId <= 0"\n' +
    '                                class="btn pmd-ripple-effect btn-primary" type="button"\n' +
    '                                ng-click="CustomCtrl.AddNewProgram();">\n' +
    '                                {{\'next\' | translate}}</button>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '            </form>\n' +
    '\n' +
    '\n' +
    '            <!--END TYPOGRAPHY SECTION-->\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</div>\n' +
    '<!--TOP SECTION-->');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/customProgram/templates/Summary.html',
    ' \n' +
    '<div class="hom-com">\n' +
    '	<div class="container">\n' +
    '		<div class="row">\n' +
    '			<div class="col-md-8">\n' +
    '				<div class="row">\n' +
    '\n' +
    '					<div class="hp-section">\n' +
    '						<div class="hp-sub-tit">\n' +
    '							<h4><span>Order</span> Details</h4>\n' +
    '							<p>Thanks for applying in our system Thanks for applying in our system Thanks for applying\n' +
    '								in our system.</p>\n' +
    '						</div>\n' +
    '						<div class="hp-over">\n' +
    '							<ul class="nav nav-tabs hp-over-nav">\n' +
    '\n' +
    '								<li>\n' +
    '									<a data-toggle="tab" data-target="#menu1"><img src="/assets/img/db4.png" alt="">\n' +
    '										<span class="tab-hide">Overview</span>\n' +
    '									</a>\n' +
    '								</li>\n' +
    '							</ul>\n' +
    '							<div class="tab-content">\n' +
    '\n' +
    '								<div id="menu1" class="tab-pane fade in active tab-space">\n' +
    '									<div class="hp-main-overview">\n' +
    '										<ul>\n' +
    '											<li>Order Code: <span>#{{CustomCtrl.order.orderCode}}</span>\n' +
    '											</li>\n' +
    '											<li>Price: <span>{{CustomCtrl.order.price}}</span>\n' +
    '											</li>\n' +
    '											<li>Type :\n' +
    '												<span> ( {{CustomCtrl.order.isProgram ? \'Program\' : \'Meal\'}} ) </span>\n' +
    '												<span>{{CustomCtrl.order.isDelivery ? \'Delivery\' : \'PickUp\'}}</span>\n' +
    '\n' +
    '											</li>\n' +
    '\n' +
    '											<li>No. of Days : <span>{{CustomCtrl.daysCount}}</span>\n' +
    '											</li>\n' +
    '											<li>No. of Meals Per Day : <span>{{CustomCtrl.mealsCount}}</span>\n' +
    '											</li>\n' +
    '											<li>Start Date : <span>{{CustomCtrl.startDate}}</span>\n' +
    '											</li>\n' +
    '											<li>Status :\n' +
    '												<span class="ov-yes">{{CustomCtrl.order.orderStatus ? \'Waiting\' : \'Open\'}}</span>\n' +
    '\n' +
    '												<!-- <span class="ov-yes" ng-if="{{CustomCtrl.order.type ==0}}">\n' +
    '													Open\n' +
    '												</span> -->\n' +
    '\n' +
    '												<!-- <span class="ov-yes">{{CustomCtrl.order.price}}</span> -->\n' +
    '											</li>\n' +
    '										</ul>\n' +
    '									</div>\n' +
    '								</div>\n' +
    '\n' +
    '							</div>\n' +
    '						</div>\n' +
    '					</div>\n' +
    '\n' +
    '				</div>\n' +
    '			</div>\n' +
    '			<div class="col-md-4">\n' +
    '				<!--=========================================-->\n' +
    '				<div class="hp-call hp-right-com">\n' +
    '					<div class="hp-call-in"> <img src="/assets/img/db4.png" alt="">\n' +
    '						<h3><span>Check Availability. Call us!</span> +01 4214 4214</h3> <small>We are available 24/7\n' +
    '							Monday to Sunday</small>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '				<!--=========================================-->\n' +
    '				<!--=========================================-->\n' +
    '				<!--=========================================-->\n' +
    '				<!--=========================================-->\n' +
    '\n' +
    '				<!--=========================================-->\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/customProgram/templates/summaryProgram.html',
    '<div class="hom-com">\n' +
    '    <div class="container">\n' +
    '        <div class="row">\n' +
    '            <div class="col-md-8">\n' +
    '                <div class="row">\n' +
    '\n' +
    '                    <div class="hp-section">\n' +
    '                        <div class="hp-sub-tit">\n' +
    '                            <h4>\n' +
    '                                <span>Order</span> Details</h4>\n' +
    '                            <p>Thanks for applying in our system Thanks for applying in our system Thanks for applying in our\n' +
    '                                system.</p>\n' +
    '                        </div>\n' +
    '                        <div class="hp-over">\n' +
    '                            <ul class="nav nav-tabs hp-over-nav">\n' +
    '\n' +
    '                                <li>\n' +
    '                                    <a data-toggle="tab" data-target="#menu1">\n' +
    '                                        <img src="/assets/img/db4.png" alt="">\n' +
    '                                        <span class="tab-hide">Overview</span>\n' +
    '                                    </a>\n' +
    '                                </li>\n' +
    '                            </ul>\n' +
    '                            <div class="tab-content">\n' +
    '\n' +
    '                                <div id="menu1" class="tab-pane fade in active tab-space">\n' +
    '                                    <div class="hp-main-overview">\n' +
    '                                        <ul>\n' +
    '                                            <li>Order Code:\n' +
    '                                                <span>#{{CustomCtrl.order.orderCode}}</span>\n' +
    '                                            </li>\n' +
    '                                            <li>Price:\n' +
    '                                                <span>{{CustomCtrl.order.price}}</span>\n' +
    '                                            </li>\n' +
    '                                            <li>Type :\n' +
    '                                                <span>{{\'Program\' | translate}}</span>\n' +
    '                                            </li>\n' +
    '\n' +
    '                                            <!-- <li>No. of Days :\n' +
    '                                                <span>{{CustomCtrl.daysCount}}</span>\n' +
    '                                            </li>\n' +
    '                                            <li>No. of Meals Per Day :\n' +
    '                                                <span>{{CustomCtrl.mealsCount}}</span>\n' +
    '                                            </li> -->\n' +
    '                                            <li>Start Date :\n' +
    '                                                <span>{{CustomCtrl.order.orderDate | limitTo: 10}}</span>\n' +
    '                                            </li>\n' +
    '                                            <li>Status :\n' +
    '                                                <span class="ov-yes">{{CustomCtrl.order.orderStatus ? \'Waiting\' : \'Open\'}}</span>\n' +
    '\n' +
    '                                                <!-- <span class="ov-yes" ng-if="{{CustomCtrl.order.type ==0}}">\n' +
    '                                                        Open\n' +
    '                                                    </span> -->\n' +
    '\n' +
    '                                                <!-- <span class="ov-yes">{{CustomCtrl.order.price}}</span> -->\n' +
    '                                            </li>\n' +
    '                                        </ul>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="col-md-4">\n' +
    '                <!--=========================================-->\n' +
    '                <div class="hp-call hp-right-com">\n' +
    '                    <div class="hp-call-in">\n' +
    '                        <img src="/assets/img/db4.png" alt="">\n' +
    '                        <h3>\n' +
    '                            <span>Check Availability. Call us!</span> +01 4214 4214</h3>\n' +
    '                        <small>We are available 24/7 Monday to Sunday</small>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <!--=========================================-->\n' +
    '                <!--=========================================-->\n' +
    '                <!--=========================================-->\n' +
    '                <!--=========================================-->\n' +
    '\n' +
    '                <!--=========================================-->\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/meal/templates/meal.html',
    ' \n' +
    '<div class="inn-body-section pad-bot-55">\n' +
    '    <div class="container">\n' +
    '        <div class="row">\n' +
    '            <div class="page-head">\n' +
    '                <h2>{{\'Meals\' | translate}}</h2>\n' +
    '                <div class="head-title">\n' +
    '                    <div class="hl-1"></div>\n' +
    '                    <div class="hl-2"></div>\n' +
    '                    <div class="hl-3"></div>\n' +
    '                </div>\n' +
    '                <p>{{\'MealsDescription\' | translate}}</p>\n' +
    '            </div>\n' +
    '            <!--ROOM SECTION-->\n' +
    '          \n' +
    '                <div ng-click="$state.go(\'mealDetails\', {mealId: Meal.mealId});" style="cursor: pointer !important;"\n' +
    '                    ng-repeat="Meal in mealsPrepService" class="room">\n' +
    '                    <div class="ribbon ribbon-top-left">\n' +
    '                        <span>{{\'Meal\' | translate}}</span>\n' +
    '                    </div>\n' +
    '                    <!--ROOM IMAGE-->\n' +
    '                    <div class="r1 r-com">\n' +
    '                        <img src="https://fithouseksa.com/wp-content/uploads/2018/07/Grilled-steak.png" alt="" />\n' +
    '                    </div>\n' +
    '                    <!--ROOM RATING-->\n' +
    '                    <div class="r2 r-com">\n' +
    '                        <h4>{{Meal.mealDescriptionDictionary[selectedLanguage]}}</h4>\n' +
    '                        <div class="r2-ratt">\n' +
    '                            <i></i>\n' +
    '                            <i></i>\n' +
    '                            <i></i>\n' +
    '                            <i></i>\n' +
    '                            <i></i>\n' +
    '                            <img src="images/h-trip.png" alt="" />\n' +
    '                            <span></span>\n' +
    '                        </div>\n' +
    '                        <ul>\n' +
    '                            <li></li>\n' +
    '                            <li></li>\n' +
    '                            <li></li>\n' +
    '                            <li></li>\n' +
    '                        </ul>\n' +
    '                    </div>\n' +
    '                    <!--ROOM AMINITIES-->\n' +
    '                    <div class="r3 r-com">\n' +
    '                        <ul>\n' +
    '                            <li>{{\'NumberOfItems\' | translate}}: {{Meal.mealDetails.length}}</li>\n' +
    '                            <li></li>\n' +
    '                            <li></li>\n' +
    '                            <li></li>\n' +
    '                            <li></li>\n' +
    '                        </ul>\n' +
    '                    </div>\n' +
    '                    <!--ROOM PRICE-->\n' +
    '                    <div class="r4 r-com">\n' +
    '                        <p>{{Meal.mealPrice}}</p>\n' +
    '                        <p>\n' +
    '                            <span class="room-price-1"></span>\n' +
    '                            <span class="room-price"></span>\n' +
    '                        </p>\n' +
    '                        <p>{{\'NonRefundable\' | translate}}</p>\n' +
    '                    </div>\n' +
    '                    <!--ROOM BOOKING BUTTON-->\n' +
    '                    <div class="r5 r-com">\n' +
    '                        <div class="r2-available">{{\'Available\' | translate}}</div>\n' +
    '                        <p></p>\n' +
    '                        <a ng-click="$state.go(\'mealDetails\', {mealId: Meal.mealId});"\n' +
    '                            class="inn-room-book">{{\'Book\' | translate}}</a>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '    \n' +
    '            <!--END ROOM SECTION-->\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/meal/templates/mealDetails.html',
    '<script>\n' +
    '    $(function () {\n' +
    '        $(\'#startdate\').datepicker(\n' +
    '            {\n' +
    '                minDate: new Date()\n' +
    '            }\n' +
    '        ).on(\'dp.change\', function (e) {\n' +
    '            debugger;\n' +
    '            angular.element(document.getElementById(\'startdate\')).scope().dateChange();\n' +
    '        });\n' +
    '    });\n' +
    '</script>\n' +
    '<div class="hp-banner">\n' +
    '    <img src="images/detailed-banner.jpg" alt=""> </div>\n' +
    '\n' +
    '<div class="hom-com">\n' +
    '    <div class="container">\n' +
    '        <div class="row">\n' +
    '            <div class="col-md-12">\n' +
    '                <div class="row">\n' +
    '                    <div class="hp-section">\n' +
    '                        <div class="hp-sub-tit">\n' +
    '                            <h4>\n' +
    '                                <span>{{mealPrepService.mealNameDictionary[selectedLanguage]}}</span>\n' +
    '                            </h4>\n' +
    '\n' +
    '                        </div>\n' +
    '                        <div class="hp-amini detai-2p">\n' +
    '                            <p>{{mealPrepService.mealDescriptionDictionary[selectedLanguage]}}</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="hp-section">\n' +
    '                        <div class="hp-sub-tit">\n' +
    '                            <h4>\n' +
    '                                <span>{{\'MealDetails\' | translate}}</span>\n' +
    '                            </h4>\n' +
    '                            <!-- <p>Aliquam id tempor sem. Cras molestie risus et lobortis congue. Donec id est consectetur,\n' +
    '                                        cursus tellus at, mattis lacus.</p> -->\n' +
    '                        </div>\n' +
    '                        <div class="hp-over">\n' +
    '                            <ul class="nav nav-tabs hp-over-nav">\n' +
    '                                <li class="active">\n' +
    '                                    <a data-toggle="tab" data-target="#home" style="cursor: pointer;">\n' +
    '                                        <img src="/assets/img/cropped-favicon-32x32.png" alt="">\n' +
    '                                        <span class="tab-hide">{{\'Details\' | translate}}</span>\n' +
    '                                    </a>\n' +
    '                                </li>\n' +
    '                                <li>\n' +
    '                                    <a data-toggle="tab" data-target="#menu1" style="cursor: pointer;">\n' +
    '                                        <img src="/assets/img/cropped-favicon-32x32.png" alt="">\n' +
    '                                        <span class="tab-hide">{{\'Summary\' | translate}}</span>\n' +
    '                                    </a>\n' +
    '                                </li>\n' +
    '                                <li>\n' +
    '                                    <a data-toggle="tab" data-target="#menu2" style="cursor: pointer;">\n' +
    '                                        <img src="/assets/img/cropped-favicon-32x32.png" alt="">\n' +
    '                                        <span class="tab-hide">{{\'Order\' | translate}}</span>\n' +
    '                                    </a>\n' +
    '                                </li>\n' +
    '                            </ul>\n' +
    '                            <div class="tab-content">\n' +
    '                                <div id="home" class="tab-pane fade in active tab-space">\n' +
    '                                    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                        <label for="first-name">{{\'Items\' | translate}}</label>\n' +
    '                                        <ul>\n' +
    '                                            <li ng-repeat="detail in mealPrepService.mealDetails">\n' +
    '                                                <!-- {{detail}} -->\n' +
    '                                                <div class="res-menu">\n' +
    '                                                    <!-- {{item.itemNameDictionary[selectedLanguage]}} -->\n' +
    '                                                    <img src="/assets/img/meal.jpeg" alt="" />\n' +
    '                                                    <h3> {{detail.item.itemNameDictionary[selectedLanguage]}}\n' +
    '                                                        <span>{{detail.item.price}}</span>\n' +
    '                                                    </h3>\n' +
    '                                                    <span class="menu-item">{{detail.item.itemDescriptionDictionary[selectedLanguage] }}</span>\n' +
    '                                                    <!-- | limitTo:10 -->\n' +
    '                                                </div>\n' +
    '\n' +
    '                                            </li>\n' +
    '                                        </ul>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                                <div id="menu1" class="tab-pane fade in   tab-space">\n' +
    '                                    <div class="hp-main-overview">\n' +
    '                                        <ul>\n' +
    '                                            <li>{{\'Fats\' | translate}}:\n' +
    '                                                <span>{{fats}}</span>\n' +
    '                                            </li>\n' +
    '                                            <li>{{\'Carbs\' | translate}}:\n' +
    '                                                <span>{{carbs}}</span>\n' +
    '                                            </li>\n' +
    '                                            <li>{{\'Protein\' | translate}}:\n' +
    '                                                <span>{{protein}}</span>\n' +
    '                                            </li>\n' +
    '                                            <li>{{\'Calories\' | translate}}:\n' +
    '                                                <span>{{calories}}</span>\n' +
    '                                            </li>\n' +
    '                                            <li>{{\'TotalPrice\' | translate}}:\n' +
    '                                                <span class="ov-yes">{{mealPrepService.mealPrice}}</span>\n' +
    '                                            </li>\n' +
    '                                        </ul>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                                <div id="menu2" class="tab-pane fade in   tab-space">\n' +
    '                                    <form name="orderForm">\n' +
    '                                        <!-- {{itemDatetime}} -->\n' +
    '                                        <div class="col-md-6">\n' +
    '                                            <h5>{{\'OrderDate\' | translate}}</h5>\n' +
    '                                            <input name="itemDatetime" required ng-model="itemDatetime" type="text" id="startdate" class="form-control" ng-change="dateChange();"\n' +
    '                                            />\n' +
    '                                        </div>\n' +
    '\n' +
    '\n' +
    '                                        <div class="col-md-12">\n' +
    '\n' +
    '                                            <div class="row">\n' +
    '                                                <div class="input-field col s6">\n' +
    '                                                    <select style="width:100% !important" required class=" select-tags form-control pmd-select2-tags" name="country" ng-change="countryChange()"\n' +
    '                                                        ng-model="selectedCountryId" ng-options="group.countryId as group.titleDictionary[selectedLanguage] for group in counties">\n' +
    '                                                    </select>\n' +
    '                                                </div>\n' +
    '                                                <div class="input-field col s6" ng-show="selectedCountryId > 0">\n' +
    '                                                    <select style="width:100% !important" ng-required="selectedCountryId > 0" class="select-tags form-control pmd-select2-tags"\n' +
    '                                                        ng-change="regionChange()" ng-model="selectedRegionId" ng-options="group.regionId as group.titleDictionary[selectedLanguage] for group in regions">\n' +
    '                                                    </select>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                            <div class="row">\n' +
    '                                                <div class="input-field col s6" ng-show="selectedRegionId > 0">\n' +
    '                                                    <select ng-required="selectedRegionId > 0" style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                                                        ng-change="cityChange()" ng-model="selectedCityId" ng-options="group.cityId as group.titleDictionary[selectedLanguage] for group in cities">\n' +
    '                                                    </select>\n' +
    '                                                </div>\n' +
    '                                                <div class="input-field col s6" ng-show="selectedCityId > 0">\n' +
    '                                                    <select ng-required="selectedCityId > 0" style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                                                        ng-change="areaChange()" ng-model="selectedAreaId" ng-options="group.areaId as group.titleDictionary[selectedLanguage] for group in area">\n' +
    '                                                    </select>\n' +
    '                                                </div>\n' +
    '                                                <div class="input-field col s6" ng-show="selectedAreaId > 0">\n' +
    '                                                    <select ng-required="selectedAreaId > 0" style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                                                        ng-change="branchChange()" ng-model="selectedBranchId" ng-options="group.branchId as group.titleDictionary[selectedLanguage] for group in branchList">\n' +
    '                                                    </select>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                            <div class="input-field col s12 m4 l2">\n' +
    '                                                <!-- <input type="submit" class="form-btn" ng-click="Order()"\n' +
    '                                                        ng-disabled="orderForm.$invalid"> -->\n' +
    '                                                <!-- ng-disabled="orderForm.$invalid || addressValidation == false">   -->\n' +
    '                                                <!-- ng-disabled="orderForm.$invalid || !dateIsValid || addressValidation == false" -->\n' +
    '\n' +
    '\n' +
    '                                                Price:{{ mealPrepService.mealPrice}}\n' +
    '                                                <br>\n' +
    '                                                <!-- {{areaChanged}} -->\n' +
    '                                                <button style="background-color: #e4e5e6;color: black!important;" ng-disabled="areaChanged == false || orderForm.$invalid || selectedBranchId <= 0 && !dateIsValid"\n' +
    '                                                    class="btn pmd-ripple-effect btn-primary" type="button" ng-click="Order();">\n' +
    '                                                    {{\'order\' | translate}}</button>\n' +
    '\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                    </form>\n' +
    '\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <!--END HEADER SECTION-->');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/order/templates/Order.html',
    ' \n' +
    '<div class="inn-body-section pad-bot-55">\n' +
    '    <div class="container">\n' +
    '\n' +
    '        <div class="row">\n' +
    '            <!--TYPOGRAPHY SECTION-->\n' +
    '            <div class="col-md-12">\n' +
    '                <div class="head-typo typo-com">\n' +
    '                    <h3>{{\'OrderHistory\' | translate}}</h3>\n' +
    '\n' +
    '                    <div ng-if="OrderList.results.length == 0">\n' +
    '                        <span>{{\'NoOrdersAvailable\' | translate}}</span>\n' +
    '                    </div>\n' +
    '                    <div class="table-responsive" ng-if="OrderList.results.length > 0">\n' +
    '\n' +
    '                        <table class="table">\n' +
    '                            <thead>\n' +
    '                                <tr>\n' +
    '                                    <th>{{\'OrderCode\' | translate}}</th>\n' +
    '                                    <th>{{\'Date\' | translate}}</th>\n' +
    '                                    <th>{{\'startDate\' | translate}}</th>\n' +
    '                                    <th>{{\'Price\' | translate}}</th>\n' +
    '                                    <th>{{\'Delvery/Takeaway\' | translate}}</th>\n' +
    '                                    <th>{{\'Ordertype\' | translate}}</th>\n' +
    '                                    <th>{{\'status\' | translate}}</th>\n' +
    '                                    <th></th>\n' +
    '                                </tr>\n' +
    '                            </thead>\n' +
    '                            <tbody>\n' +
    '                                <tr ng-repeat="order in OrderList.results">\n' +
    '                                    <td data-title="Name">#{{order.orderCode}} </td>\n' +
    '\n' +
    '                                    <td data-title="Name">{{order.orderDate | date : "d/MMM/yy h:mm a" }} </td>\n' +
    '                                    <td data-title="Name">{{order.orderStartDate | date : "d/MMM/yy h:mm a"}} </td>\n' +
    '                                    <td data-title="Name"> \n' +
    '                                        <h4>{{ order.price}}</h4>\n' +
    '                                    </td>\n' +
    '                                    <td data-title="Name">\n' +
    '                                        <img ng-if="order.isDelivery == true" src="assets\\img\\delivery.png"\n' +
    '                                            title="delivery">\n' +
    '                                        <img ng-if="order.isDelivery == false" src="assets\\img\\takeaway.png"\n' +
    '                                            title="take away" style="width: 44px;height: 39px;">\n' +
    '                                    </td>\n' +
    '\n' +
    '                                    <td data-title="Name">\n' +
    '                                        <img ng-if="order.type == 0" src="assets\\img\\program.png" title="program">\n' +
    '                                        <img ng-if="order.type == 1" src="assets\\img\\meal.png" title="meal">\n' +
    '                                        <img ng-if="order.type == 2" src="assets\\img\\item.png" title="item">\n' +
    '                                    </td>\n' +
    '                                    <td data-title="orderStatus"> \n' +
    '                                        <span class="ov-yes" ng-if="order.orderStatus == 0"> {{\'Open\' | translate}}</span>\n' +
    '                                        <span class="ov-yes" ng-if="order.orderStatus == 1">{{\'Pending\' | translate}}</span>\n' +
    '                                        <span class="ov-yes" ng-if="order.orderStatus == 2">{{\'Prepering\' | translate}}</span>\n' +
    '                                        <span class="ov-yes" ng-if="order.orderStatus == 3">{{\'OnTheWay\' | translate}}</span>\n' +
    '                                        <span class="ov-yes" ng-if="order.orderStatus == 4">{{\'Deliverd\' | translate}}</span>\n' +
    '                                        <span class="ov-yes" ng-if="order.orderStatus == 5">{{\'NotDeliverd\' | translate}}</span>\n' +
    '                                        <span class="ov-yes" ng-if="order.orderStatus == 6">{{\'KitchenFinished\' | translate}}</span>\n' +
    '                                    </td>\n' +
    '                                    \n' +
    '                                    <td> <a ng-if="!order.isProgram" style="cursor: pointer;"\n' +
    '                                            ng-click="$state.go(\'orderDetails\', {id: order.orderDetails[0].mealId});"\n' +
    '                                            class="cursorPointer">{{\'ItemsBtn\'|translate}}</a>\n' +
    '                                        <a ng-if="order.isProgram" style="cursor: pointer;"\n' +
    '                                            ng-click="$state.go(\'orderProgramDetails\', {programId: order.orderDetails[0].programId});"\n' +
    '                                            class="cursorPointer">{{\'ItemsBtn\'|translate}}</a>\n' +
    '                                    </td>\n' +
    '\n' +
    '                                </tr>\n' +
    '                            </tbody>\n' +
    '                        </table>\n' +
    '                    </div>\n' +
    '                    <div style="text-align:center;direction: ltr" paging page="1" page-size="10" total="totalCount"\n' +
    '                        paging-action="changePage(page)" flex="nogrow" show-prev-next="true" show-first-last="true"\n' +
    '                        hide-if-empty="true" disabled-class="hide">\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/order/templates/OrderDetails.html',
    ' \n' +
    '<div class="inn-body-section pad-bot-55">\n' +
    '    <div class="container">\n' +
    '\n' +
    '        <div class="row">\n' +
    '            <!--TYPOGRAPHY SECTION-->\n' +
    '            <div class="col-md-12">\n' +
    '                <div class="hp-section">\n' +
    '                    <div class="hp-sub-tit">\n' +
    '                        <h4>\n' +
    '                            <span>{{\'MealDetails\' | translate}}</span>\n' +
    '                        </h4> \n' +
    '                    </div>\n' +
    '                    <div class="hp-over">\n' +
    '                        <ul class="nav nav-tabs hp-over-nav">\n' +
    '                            <li class="active">\n' +
    '                                <a data-toggle="tab" data-target="#home" style="cursor: pointer;">\n' +
    '                                    <img src="/assets/img/cropped-favicon-32x32.png" alt="">\n' +
    '                                    <span class="tab-hide">{{\'Details\' | translate}}</span>\n' +
    '                                </a>\n' +
    '                            </li>\n' +
    '                            <li>\n' +
    '                                <a data-toggle="tab" data-target="#menu1" style="cursor: pointer;">\n' +
    '                                    <img src="/assets/img/cropped-favicon-32x32.png" alt="">\n' +
    '                                    <span class="tab-hide">{{\'Summary\' | translate}}</span>\n' +
    '                                </a>\n' +
    '                            </li> \n' +
    '                        </ul>\n' +
    '                        <div class="tab-content">\n' +
    '                            <div id="home" class="tab-pane fade in active tab-space">\n' +
    '                                <div\n' +
    '                                    class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name">{{\'Items\' | translate}}</label>\n' +
    '                                    <ul>\n' +
    '                                        <li ng-repeat="detail in OrderMealPrepService.mealDetails">\n' +
    '                                            <!-- {{detail}} -->\n' +
    '                                            <div class="res-menu">\n' +
    '                                                <!-- {{item.itemNameDictionary[selectedLanguage]}} -->\n' +
    '                                                <img src="/assets/img/meal.jpeg" alt="" />\n' +
    '                                                <h3> {{detail.item.itemNameDictionary[selectedLanguage]}}\n' +
    '                                                    <span>{{detail.item.price}}</span>\n' +
    '                                                </h3>\n' +
    '                                                <span\n' +
    '                                                    class="menu-item">{{detail.item.itemDescriptionDictionary[selectedLanguage] }}</span>\n' +
    '                                                <!-- | limitTo:10 -->\n' +
    '                                            </div>\n' +
    '\n' +
    '                                        </li>\n' +
    '                                    </ul>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div id="menu1" class="tab-pane fade in   tab-space">\n' +
    '                                <div class="hp-main-overview">\n' +
    '                                    <ul>\n' +
    '                                        <li>{{\'Fats\' | translate}}:\n' +
    '                                            <span>{{fats}}</span>\n' +
    '                                        </li>\n' +
    '                                        <li>{{\'Carbs\' | translate}}:\n' +
    '                                            <span>{{carbs}}</span>\n' +
    '                                        </li>\n' +
    '                                        <li>{{\'Protein\' | translate}}:\n' +
    '                                            <span>{{protein}}</span>\n' +
    '                                        </li>\n' +
    '                                        <li>{{\'Calories\' | translate}}:\n' +
    '                                            <span>{{calories}}</span>\n' +
    '                                        </li>\n' +
    '                                        <li>{{\'TotalPrice\' | translate}}:\n' +
    '                                            <span class="ov-yes">{{OrderMealPrepService.mealPrice}}</span>\n' +
    '                                        </li>\n' +
    '                                    </ul>\n' +
    '                                </div>\n' +
    '                            </div> \n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/order/templates/OrderProgramDetails.html',
    ' \n' +
    '<div class="inn-body-section pad-bot-55">\n' +
    '    <div class="container">\n' +
    '\n' +
    '        <div class="row">\n' +
    '            <!--TYPOGRAPHY SECTION-->\n' +
    '            <div class="col-md-12">\n' +
    '                <div class="hp-section">\n' +
    '                    <div class="hp-sub-tit">\n' +
    '                        <h4>\n' +
    '                            <span>{{\'ProgramDetails\' | translate}}</span>\n' +
    '                        </h4>\n' +
    '                    </div>\n' +
    '                    <div class="hp-over">\n' +
    '                        <ul class="nav nav-tabs hp-over-nav">\n' +
    '                            <li class="active">\n' +
    '                                <a data-toggle="tab" data-target="#home" style="cursor: pointer;">\n' +
    '                                    <img src="/assets/img/cropped-favicon-32x32.png" alt="">\n' +
    '                                    <span class="tab-hide">{{\'Details\' | translate}}</span>\n' +
    '                                </a>\n' +
    '                            </li>\n' +
    '                            <li>\n' +
    '                                <a data-toggle="tab" data-target="#menu1" style="cursor: pointer;">\n' +
    '                                    <img src="/assets/img/cropped-favicon-32x32.png" alt="">\n' +
    '                                    <span class="tab-hide">{{\'Summary\' | translate}}</span>\n' +
    '                                </a>\n' +
    '                            </li>\n' +
    '                        </ul>\n' +
    '                        <div class="tab-content">\n' +
    '                            <div id="home" class="tab-pane fade in active tab-space">\n' +
    '                                <div ng-init="counterDay = 0; counterMeal = 0">\n' +
    '                                    <div class="panel-group pmd-accordion pmd-accordion-inbox" id="accordion6"\n' +
    '                                        role="tablist" aria-multiselectable="true">\n' +
    '                                        <div ng-repeat="n in [].constructor(OrderprogDetailsPrepService.programDays)  track by $index"\n' +
    '                                            class="panel panel-default">\n' +
    '                                            <div class="panel-heading" role="tab" id="headingOne">\n' +
    '                                                <h4 class="panel-title">\n' +
    '                                                    <a ng-init="counterDay=counterDay+1;" data-toggle="collapse"\n' +
    '                                                        data-parent="#accordion6" ng-init="n=false" ng-click="n=!n;"\n' +
    '                                                        aria-expanded="true" aria-controls="collapseOne6"\n' +
    '                                                        data-expandable="false">\n' +
    '                                                        {{\'Day\' | translate}}  {{counterDay=$index+1}}\n' +
    '                                                        <i\n' +
    '                                                            class="material-icons md-dark pmd-sm pmd-accordion-arrow">keyboard_arrow_down</i>\n' +
    '                                                    </a>\n' +
    '                                                </h4>\n' +
    '                                            </div>\n' +
    '                                            <div ng-show="n == true" id="collapseOne6"\n' +
    '                                                class="panel-collapse collapse in" role="tabpanel"\n' +
    '                                                aria-labelledby="headingOne">\n' +
    '                                                <div class="panel-body">\n' +
    '                                                    <ul>\n' +
    '\n' +
    '                                                        <li\n' +
    '                                                            ng-repeat="meal in [].constructor(OrderprogDetailsPrepService.noOfMeals)  track by $index">\n' +
    '                                                            <h4>\n' +
    '                                                                <a ng-init="counterMeal=counterMeal+1;"\n' +
    '                                                                    ng-click="showDetails = ! showDetails;">{{\'Meal\' | translate}}\n' +
    '                                                                     {{counterMeal=$index+1}}</a>\n' +
    '                                                                <!-- <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="OrderprogDetailsPrepService.ShowProgramMeal(OrderprogDetailsPrepService.programDetails.programId, counterDay, counterMeal)">mode_edit</i> -->\n' +
    '                                                            </h4>\n' +
    '                                                            <div ng-show="showDetails">\n' +
    '                                                                <div\n' +
    '                                                                    class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                                    <label\n' +
    '                                                                        for="first-name">{{\'Items\' | translate}}</label>\n' +
    '                                                                    <ul>\n' +
    '                                                                        <li\n' +
    '                                                                            ng-repeat="detail in OrderprogDetailsPrepService.programDetails | filter:{dayNumber:counterDay, mealNumberPerDay: counterMeal} ">\n' +
    '                                                                            <div class="res-menu"\n' +
    '                                                                                ng-repeat="item in OrderprogDetailsPrepService.items |filter :{itemId:detail.itemId}">\n' +
    '                                                                                <!-- {{item.itemNameDictionary[selectedLanguage]}} -->\n' +
    '                                                                                <img src="/assets/img/meal.jpeg"\n' +
    '                                                                                    alt="" />\n' +
    '                                                                                <h3> {{item.itemNameDictionary[selectedLanguage]\n' +
    '                                                                                            | limitTo:10}}\n' +
    '                                                                                    <span>{{item.price}}</span>\n' +
    '                                                                                </h3>\n' +
    '                                                                                <span class="menu-item">{{item.itemDescriptionDictionary[selectedLanguage]\n' +
    '                                                                                            | limitTo:10}}</span>\n' +
    '                                                                            </div>\n' +
    '\n' +
    '                                                                        </li>\n' +
    '                                                                    </ul>\n' +
    '                                                                </div>\n' +
    '                                                            </div>\n' +
    '                                                        </li>\n' +
    '                                                    </ul>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div id="menu1" class="tab-pane fade in   tab-space">\n' +
    '                                <div class="hp-main-overview">\n' +
    '                                    <ul>\n' +
    '                                        <li>{{\'Fats\' | translate}}:\n' +
    '                                            <span>{{fats}}</span>\n' +
    '                                        </li>\n' +
    '                                        <li>{{\'Carbs\' | translate}}:\n' +
    '                                            <span>{{carbs}}</span>\n' +
    '                                        </li>\n' +
    '                                        <li>{{\'Protein\' | translate}}:\n' +
    '                                            <span>{{protein}}</span>\n' +
    '                                        </li>\n' +
    '                                        <li>{{\'Calories\' | translate}}:\n' +
    '                                            <span>{{calories}}</span>\n' +
    '                                        </li>\n' +
    '                                        <li>{{\'TotalPrice\' | translate}}:\n' +
    '                                            <span class="ov-yes">{{OrderprogDetailsPrepService.price}}</span>\n' +
    '                                        </li>\n' +
    '                                    </ul>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/program/templates/program.html',
    '<!-- <div class="main" >  -->\n' +
    '<!-- ng-style="style()" -->\n' +
    '<br>\n' +
    '<div class="inn-body-section pad-bot-55">\n' +
    '    <div class="container">\n' +
    '        <div class="row">\n' +
    '            <div class="page-head">\n' +
    '                <h2>{{\'Programs\' | translate}}</h2>\n' +
    '                <div class="head-title">\n' +
    '                    <div class="hl-1"></div>\n' +
    '                    <div class="hl-2"></div>\n' +
    '                    <div class="hl-3"></div>\n' +
    '                </div>\n' +
    '                <p>{{\'ProgramsDescription\' | translate}}</p>\n' +
    '            </div>\n' +
    '            <!--ROOM SECTION-->\n' +
    '            <div style="cursor: pointer !important;" ng-click="$state.go(\'programDetails\', {programId: Program.programId});" ng-repeat="Program in programPrepService"\n' +
    '                class="room">\n' +
    '\n' +
    '                <div class="ribbon ribbon-top-left">\n' +
    '                    <span>{{\'Program\' | translate}}</span>\n' +
    '                </div>\n' +
    '                <!--ROOM IMAGE-->\n' +
    '                <div class="r1 r-com">\n' +
    '                    <img src="https://fithouseksa.com/wp-content/uploads/2018/07/fithouse-icons6.png" alt="" />\n' +
    '                </div>\n' +
    '                <!--ROOM RATING-->\n' +
    '                <div class="r2 r-com">\n' +
    '                    <h4>{{Program.programNameDictionary[selectedLanguage]}}</h4>\n' +
    '                    <div class="r2-ratt">\n' +
    '                        <i class="fa fa-star"></i>\n' +
    '                        <i class="fa fa-star"></i>\n' +
    '                        <i class="fa fa-star"></i>\n' +
    '                        <i class="fa fa-star"></i>\n' +
    '                        <i class="fa fa-star"></i>\n' +
    '                        <img src="images/h-trip.png" alt="" />\n' +
    '                        <span></span>\n' +
    '                    </div>\n' +
    '                    <ul>\n' +
    '                        <li></li>\n' +
    '                        <li></li>\n' +
    '                        <li></li>\n' +
    '                        <li></li>\n' +
    '                    </ul>\n' +
    '                </div>\n' +
    '                <!--ROOM AMINITIES-->\n' +
    '                <div class="r3 r-com">\n' +
    '                    <ul>\n' +
    '                        <li>{{\'ProgramDays\' | translate}}: {{Program.programDays}}</li>\n' +
    '                        <li>{{\'MealPerDay\' | translate}}: {{Program.noOfMeals}}</li>\n' +
    '                        <li></li>\n' +
    '                        <li></li>\n' +
    '                        <li></li>\n' +
    '                    </ul>\n' +
    '                </div>\n' +
    '                <!--ROOM PRICE-->\n' +
    '                <div class="r4 r-com">\n' +
    '                    <p>{{Program.price}}</p>\n' +
    '                    <p>\n' +
    '                        <span class="room-price-1"></span>\n' +
    '                        <span class="room-price"></span>\n' +
    '                    </p>\n' +
    '                    <p>{{\'NonRefundable\' | translate}}</p>\n' +
    '                </div>\n' +
    '                <!--ROOM BOOKING BUTTON-->\n' +
    '                <div class="r5 r-com">\n' +
    '                    <div class="r2-available">{{\'Available\' | translate}}</div>\n' +
    '                    <p></p>\n' +
    '                    <a ng-click="$state.go(\'programDetails\', {programId: Program.programId});" class="inn-room-book">{{\'Book\' | translate}}</a>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <!--END ROOM SECTION-->\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<!-- </div> -->');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/program/templates/programDetails.html',
    '<script>\n' +
    '    // $(function () {\n' +
    '    //     var today = new Date();\n' +
    '    //     var tomorrow = new Date();\n' +
    '    //     $(\'#startdate\').datepicker(\n' +
    '    //         {\n' +
    '    //             minDate: tomorrow.setDate(today.getDate() + 1)\n' +
    '    //         }\n' +
    '    //     ).on(\'dp.change\', function (e) {\n' +
    '    //         debugger;\n' +
    '    //         angular.element(document.getElementById(\'startdate\')).scope().dateChange();\n' +
    '    //     });\n' +
    '    // });\n' +
    '    $(function () {\n' +
    '        $(\'#startdate\').datepicker(\n' +
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
    '<div class="menu-section">\n' +
    '    <div class="container">\n' +
    '\n' +
    '    </div>\n' +
    '</div>\n' +
    '<!--TOP SECTION-->\n' +
    '<div class="hp-banner">\n' +
    '    <img src="images/detailed-banner.jpg" alt=""> </div>\n' +
    '<!--END HOTEL ROOMS-->\n' +
    '<!--CHECK AVAILABILITY FORM-->\n' +
    '<!-- <div class="check-available">\n' +
    '        <div class="container">\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-12">\n' +
    '                    <div class="inn-com-form">\n' +
    '                        <form class="col s12">\n' +
    '                            <div class="row">\n' +
    '                                <div class="col s12 avail-title">\n' +
    '                                    <h4>Check Availability</h4>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="row">\n' +
    '                                <div class="input-field col s12 m4 l2">\n' +
    '                                    <select>\n' +
    '                                        <option value="" disabled selected>Select Room</option>\n' +
    '                                        <option value="1">Master Suite</option>\n' +
    '                                        <option value="2">Mini-Suite</option>\n' +
    '                                        <option value="3">Ultra Deluxe</option>\n' +
    '                                        <option value="4">Luxury</option>\n' +
    '                                        <option value="5">Premium </option>\n' +
    '                                        <option value="6">Normal</option>\n' +
    '                                    </select>\n' +
    '                                </div>\n' +
    '                                <div class="input-field col s12 m4 l2">\n' +
    '                                    <select>\n' +
    '                                        <option value="" disabled selected>No of adults</option>\n' +
    '                                        <option value="1">1</option>\n' +
    '                                        <option value="2">2</option>\n' +
    '                                        <option value="3">3</option>\n' +
    '                                        <option value="1">4</option>\n' +
    '                                    </select>\n' +
    '                                </div>\n' +
    '                                <div class="input-field col s12 m4 l2">\n' +
    '                                    <select>\n' +
    '                                        <option value="" disabled selected>No of childrens</option>\n' +
    '                                        <option value="1">1</option>\n' +
    '                                        <option value="2">2</option>\n' +
    '                                        <option value="3">3</option>\n' +
    '                                        <option value="1">4</option>\n' +
    '                                    </select>\n' +
    '                                </div>\n' +
    '                                <div class="input-field col s12 m4 l2">\n' +
    '                                    <input type="text" id="from" name="from">\n' +
    '                                    <label for="from">Arrival Date</label>\n' +
    '                                </div>\n' +
    '                                <div class="input-field col s12 m4 l2">\n' +
    '                                    <input type="text" id="to" name="to">\n' +
    '                                    <label for="to">Departure Date</label>\n' +
    '                                </div>\n' +
    '                                <div class="input-field col s12 m4 l2">\n' +
    '                                    <input type="submit" value="submit" class="form-btn"> </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div> -->\n' +
    '<!--END CHECK AVAILABILITY FORM-->\n' +
    '<div class="hom-com">\n' +
    '    <div class="container">\n' +
    '        <div class="row">\n' +
    '            <div class="col-md-12">\n' +
    '                <div class="row">\n' +
    '                    <div class="hp-section">\n' +
    '                        <div class="hp-sub-tit">\n' +
    '                            <h4>\n' +
    '                                <span>{{progDetailsPrepService.programNameDictionary[selectedLanguage]}}</span>\n' +
    '                            </h4>\n' +
    '\n' +
    '                        </div>\n' +
    '                        <div class="hp-amini detai-2p">\n' +
    '                            <p>{{progDetailsPrepService.programDescriptionDictionary[selectedLanguage]}}</p>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="hp-section">\n' +
    '                        <div class="hp-sub-tit">\n' +
    '                            <h4>\n' +
    '                                <span>{{\'ProgramDetails\' | translate}}</span>\n' +
    '                            </h4>\n' +
    '                            <!-- <p>Aliquam id tempor sem. Cras molestie risus et lobortis congue. Donec id est consectetur,\n' +
    '                                    cursus tellus at, mattis lacus.</p> -->\n' +
    '                        </div>\n' +
    '                        <div class="hp-over">\n' +
    '                            <ul class="nav nav-tabs hp-over-nav">\n' +
    '                                <li class="active">\n' +
    '                                    <a data-toggle="tab" data-target="#home" style="cursor: pointer;">\n' +
    '                                        <img src="images/icon/a9.png" alt="">\n' +
    '                                        <span class="tab-hide">{{\'Details\' | translate}}</span>\n' +
    '                                    </a>\n' +
    '                                </li>\n' +
    '                                <li>\n' +
    '                                    <a data-toggle="tab" data-target="#menu1" style="cursor: pointer;">\n' +
    '                                        <img src="images/icon/a8.png" alt="">\n' +
    '                                        <span class="tab-hide">{{\'Summary\' | translate}}</span>\n' +
    '                                    </a>\n' +
    '                                </li>\n' +
    '                                <li>\n' +
    '                                    <a data-toggle="tab" data-target="#menu2" style="cursor: pointer;">\n' +
    '                                        <img src="images/icon/a8.png" alt="">\n' +
    '                                        <span class="tab-hide">{{\'Order\' | translate}}</span>\n' +
    '                                    </a>\n' +
    '                                </li>\n' +
    '                            </ul>\n' +
    '                            <div class="tab-content">\n' +
    '                                <div id="home" class="tab-pane fade in active tab-space">\n' +
    '                                    <div ng-init="counterDay = 0; counterMeal = 0">\n' +
    '                                        <div class="panel-group pmd-accordion pmd-accordion-inbox" id="accordion6" role="tablist" aria-multiselectable="true">\n' +
    '                                            <div ng-repeat="n in [].constructor(progDetailsPrepService.programDays)  track by $index" class="panel panel-default">\n' +
    '                                                <div class="panel-heading" role="tab" id="headingOne">\n' +
    '                                                    <h4 class="panel-title">\n' +
    '                                                        <a ng-init="counterDay=counterDay+1;" data-toggle="collapse" data-parent="#accordion6" ng-init="n=false" ng-click="n=!n;"\n' +
    '                                                            aria-expanded="true" aria-controls="collapseOne6" data-expandable="false">\n' +
    '                                                            {{\'Day\' | translate}} #{{counterDay=$index+1}}\n' +
    '                                                            <i class="material-icons md-dark pmd-sm pmd-accordion-arrow">keyboard_arrow_down</i>\n' +
    '                                                        </a>\n' +
    '                                                    </h4>\n' +
    '                                                </div>\n' +
    '                                                <div ng-show="n == true" id="collapseOne6" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">\n' +
    '                                                    <div class="panel-body">\n' +
    '                                                        <ul>\n' +
    '\n' +
    '                                                            <li ng-repeat="meal in [].constructor(progDetailsPrepService.noOfMeals)  track by $index">\n' +
    '                                                                <h4>\n' +
    '                                                                    <a ng-init="counterMeal=counterMeal+1;" ng-click="showDetails = ! showDetails;">{{\'Meal\' | translate}} #{{counterMeal=$index+1}}</a>\n' +
    '                                                                    <!-- <i class="material-icons md-dark pmd-md cursorPointer font25" ng-click="progDetailsPrepService.ShowProgramMeal(progDetailsPrepService.programDetails.programId, counterDay, counterMeal)">mode_edit</i> -->\n' +
    '                                                                </h4>\n' +
    '                                                                <div ng-show="showDetails">\n' +
    '                                                                    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                                        <label for="first-name">{{\'Items\' | translate}}</label>\n' +
    '                                                                        <ul>\n' +
    '                                                                            <li ng-repeat="detail in progDetailsPrepService.programDetails | filter:{dayNumber:counterDay, mealNumberPerDay: counterMeal} ">\n' +
    '                                                                                <div class="res-menu" ng-repeat="item in progDetailsPrepService.items |filter :{itemId:detail.itemId}">\n' +
    '                                                                                    <!-- {{item.itemNameDictionary[selectedLanguage]}} -->\n' +
    '                                                                                    <img src="/assets/img/meal.jpeg" alt="" />\n' +
    '                                                                                    <h3> {{item.itemNameDictionary[selectedLanguage]\n' +
    '                                                                                        | limitTo:10}}\n' +
    '                                                                                        <span>{{item.price}}</span>\n' +
    '                                                                                    </h3>\n' +
    '                                                                                    <span class="menu-item">{{item.itemDescriptionDictionary[selectedLanguage]\n' +
    '                                                                                        | limitTo:10}}</span>\n' +
    '                                                                                </div>\n' +
    '\n' +
    '                                                                            </li>\n' +
    '                                                                        </ul>\n' +
    '                                                                    </div>\n' +
    '                                                                </div>\n' +
    '                                                            </li>\n' +
    '                                                        </ul>\n' +
    '                                                    </div>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                                <div id="menu1" class="tab-pane fade in tab-space">\n' +
    '                                    <div class="hp-main-overview">\n' +
    '                                        <ul>\n' +
    '                                            <li>{{\'ExcludedDays\' | translate}}:\n' +
    '                                                <span ng-if="progDetailsPrepService.days.length > 0" ng-repeat="day in progDetailsPrepService.days">\n' +
    '                                                    {{day.dayNameDictionary[selectedLanguage]}}, \n' +
    '                                                </span>\n' +
    '                                                <span ng-if="progDetailsPrepService.days.length == 0">\n' +
    '                                                    {{\'NoExcludedDays\' | translate}}\n' +
    '                                                </span>\n' +
    '                                            </li>\n' +
    '                                            <li>{{\'Fats\' | translate}}:\n' +
    '                                                <span>{{fats}}</span>\n' +
    '                                            </li>\n' +
    '                                            <li>{{\'Carbs\' | translate}}:\n' +
    '                                                <span>{{carbs}}</span>\n' +
    '                                            </li>\n' +
    '                                            <li>{{\'Protein\' | translate}}:\n' +
    '                                                <span>{{protein}}</span>\n' +
    '                                            </li>\n' +
    '                                            <li>{{\'Calories\' | translate}}:\n' +
    '                                                <span>{{calories}}</span>\n' +
    '                                            </li>\n' +
    '                                            <li>{{\'TotalPrice\' | translate}}:\n' +
    '                                                <span>{{progDetailsPrepService.price}}</span>\n' +
    '                                            </li>\n' +
    '                                        </ul>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                                <div id="menu2" class="tab-pane fade in tab-space">\n' +
    '                                    <form name="orderForm">\n' +
    '                                        <!-- {{itemDatetime}} -->\n' +
    '                                        <div class="col-md-6">\n' +
    '                                            <h5>{{\'OrderDate\' | translate}}</h5>\n' +
    '                                            <input name="itemDatetime" required ng-model="itemDatetime" type="text" id="startdate" class="form-control" ng-change="dateChange();"\n' +
    '                                            />\n' +
    '                                        </div>\n' +
    '\n' +
    '\n' +
    '                                        <div class="col-md-12">\n' +
    '                                            <h5>{{\'OrderType\' | translate}}</h5>\n' +
    '                                            <p>\n' +
    '                                                <input ng-model="orderType.type" name="group1" type="radio" id="test1" value="delivery" />\n' +
    '                                                <label for="test1">{{\'Delivery\' | translate}}</label>\n' +
    '                                            </p>\n' +
    '                                            <p>\n' +
    '                                                <input ng-model="orderType.type" name="group1" type="radio" id="test2" value="pickup" />\n' +
    '                                                <label for="test2">{{\'PickUp\' | translate}}</label>\n' +
    '                                            </p>\n' +
    '\n' +
    '                                            <div ng-if="orderType.type == \'delivery\'" class="row form-group">\n' +
    '                                                <div class="col-md-6">\n' +
    '                                                    <div>\n' +
    '                                                        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                            <label for="first-name">{{\'SelectAddress\' | translate}}</label>\n' +
    '                                                            <!-- {{addresses.address}} -->\n' +
    '                                                            <div ng-repeat="address in userAddresses">\n' +
    '                                                                <p>\n' +
    '                                                                    <input ng-change="addressInfo(address)" name="group2" type="radio" id="address{{address.addressId}}" ng-model="addresses.address"\n' +
    '                                                                        value="{{address.addressId}}" />\n' +
    '                                                                    <label for="address{{address.addressId}}">{{address.appartmentNo}}, {{address.description}}, {{\'Floor\'\n' +
    '                                                                        | translate}} {{address.floor}}</label>\n' +
    '                                                                </p>\n' +
    '                                                                <!-- <label>\n' +
    '                                                                        <input ng-change="addressInfo(address)" type="radio" ng-model="addresses.address" value="{{address.addressId}}"> {{address.appartmentNo}}, {{address.description}},\n' +
    '                                                                        {{\'Floor\' | translate}} {{address.floor}}\n' +
    '                                                                    </label> -->\n' +
    '                                                            </div>\n' +
    '                                                        </div>\n' +
    '                                                    </div>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '\n' +
    '                                            <div class="row form-group">\n' +
    '                                                <div class="col-md-6">\n' +
    '                                                    <div ng-show="orderType.type == \'pickup\'">\n' +
    '                                                        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                            <label for="first-name">{{\'Country\' | translate}}</label>\n' +
    '                                                            <select ng-required="orderType.type == \'pickup\'" style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                                                                ng-change="countryChange()" ng-model="selectedCountryId" ng-options="group.countryId as group.titleDictionary[selectedLanguage] for group in counties">\n' +
    '                                                            </select>\n' +
    '                                                        </div>\n' +
    '                                                        <div ng-show=" selectedCountryId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                            <label for="first-name">{{\'Region\' | translate}}</label>\n' +
    '                                                            <select ng-required="orderType.type == \'pickup\'" style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                                                                ng-change="regionChange()" ng-model="selectedRegionId" ng-options="group.regionId as group.titleDictionary[selectedLanguage] for group in regions">\n' +
    '                                                            </select>\n' +
    '                                                        </div>\n' +
    '                                                        <div ng-show=" selectedRegionId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                            <label for="first-name">{{\'City\' | translate}}</label>\n' +
    '                                                            <select ng-required="selectedRegionId > 0 && orderType.type == \'pickup\'" style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                                                                ng-change="cityChange()" ng-model="selectedCityId" ng-options="group.cityId as group.titleDictionary[selectedLanguage] for group in cities">\n' +
    '                                                            </select>\n' +
    '                                                        </div>\n' +
    '                                                        <div ng-show=" selectedCityId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                            <label for="first-name">{{\'Area\' | translate}}</label>\n' +
    '                                                            <select ng-required=" selectedCityId > 0 && orderType.type == \'pickup\'" style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                                                                ng-change="areaChange()" ng-model="selectedAreaId" ng-options="group.areaId as group.titleDictionary[selectedLanguage] for group in area">\n' +
    '                                                            </select>\n' +
    '                                                        </div>\n' +
    '                                                        <div ng-show=" selectedAreaId > 0" class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                            <label for="first-name">{{\'Branch\' | translate}}</label>\n' +
    '                                                            <select ng-required=" selectedAreaId > 0  && orderType.type == \'pickup\'" class="form-control select-with-search pmd-select2-tags"\n' +
    '                                                                ng-change="branchChange()" ng-model="selectedBranchId" ng-options="a.branchId as a.titleDictionary[selectedLanguage] for a in branchList"></select>\n' +
    '                                                        </div>\n' +
    '\n' +
    '                                                    </div>\n' +
    '                                                </div>\n' +
    '\n' +
    '                                            </div>\n' +
    '\n' +
    '                                            <div class="input-field col s12 m4 l2">\n' +
    '                                                Price:{{ progDetailsPrepService.price}}\n' +
    '                                                <br> Delivery:{{ DeliveryFees}}\n' +
    '                                                <br>Discount :{{ settingsPrepService.programDiscount}} %\n' +
    '                                                <br>Total :{{ Total}}\n' +
    '                                                <br>\n' +
    '                                                <button style="background-color: #e4e5e6;color: black!important;" class="btn pmd-ripple-effect btn-primary" ng-click="Order()"\n' +
    '                                                    ng-disabled="orderForm.$invalid  || selectedBranchId <= 0 || (addressValidation == false && orderType.type == \'delivery\') && !dateIsValid">\n' +
    '                                                    {{\'next\' | translate}}</button>\n' +
    '                                                <!-- ng-disabled="orderForm.$invalid || !dateIsValid || addressValidation == false" -->\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                    </form>\n' +
    '\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <!-- </section> -->\n' +
    '    <!--END HEADER SECTION-->');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/register/templates/addUser.html',
    '<div class="inn-body-section pad-bot-55">\n' +
    '    <div class="container">\n' +
    '        <div class="row">\n' +
    '            <div class="head-typo typo-com collap-expand book-form inn-com-form">\n' +
    '                <h2>{{\'BasicInfoLbl\' | translate}} </h2>\n' +
    '\n' +
    '                <form class="form-horizontal" name="newclientForm">\n' +
    '\n' +
    '                    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                        <label for="first-name">{{\'FirstNameLbl\' | translate}}</label>\n' +
    '                        <input required type="text" class="mat-input form-control" name="firstName" ng-model="FirstName"\n' +
    '                            ng-minlength="3" ng-maxlength="255">\n' +
    '                        <div ng-messages="newclientForm.firstName.$error" class="error">\n' +
    '                            <div ng-show="newclientForm.firstName.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '                            <div ng-if="newclientForm.firstName.$error.required && !newclientForm.firstName.$pristine">{{\'FirstNameLengthError\'\n' +
    '                | translate}}</div>\n' +
    '                            <div\n' +
    '                                ng-if="(newclientForm.firstName.$error.minlength || newclientForm.firstName.$error.maxlength) ">{{\'NameLengthError255\'\n' +
    '                | translate}}</div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                        <label for="first-name">{{\'LastNameLbl\' | translate}}</label>\n' +
    '                        <input required type="text" class="mat-input form-control" name="lastName" ng-model="LastName"\n' +
    '                            ng-minlength="3" ng-maxlength="255">\n' +
    '                        <div ng-messages="newclientForm.lastName.$error">\n' +
    '                            <div ng-show="newclientForm.lastName.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '                            <div ng-if="newclientForm.lastName.$error.required && !newclientForm.lastName.$pristine">{{\'lastName\' |\n' +
    '                translate}}</div>\n' +
    '                            <div\n' +
    '                                ng-if="(newclientForm.lastName.$error.minlength || newclientForm.lastName.$error.maxlength)">{{\'NameLengthError255\'\n' +
    '                | translate}}</div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                        <label>{{\'EmailLbl\' | translate}}</label>\n' +
    '                        <input required type="text" class="mat-input form-control" name="userEmail" ng-model="Email"\n' +
    '                            ng-pattern="/^\\w+([-+.\']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$/">\n' +
    '                        <span class="error" ng-show="newclientForm.userEmail.$error.pattern">{{\'WrongMail\' | translate}}\n' +
    '                        </span>\n' +
    '                        <!--\n' +
    '                            <div ng-if="!newclientForm.email.$error.required &amp;&amp;\n' +
    '                            newclientForm.userEmail.$error.email" class="error">{{\'WrongMail\' | translate}}\n' +
    '                            </div> -->\n' +
    '                        <div ng-messages="newclientForm.email.$error">\n' +
    '                            <div ng-if="newclientForm.userEmail.$error.required && !newclientForm.userEmail.$pristine">{{\'EmailLengthError\'\n' +
    '                | translate}}</div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '\n' +
    '\n' +
    '                        <label for="first-name">{{\'phoneLbl\' | translate}}</label>\n' +
    '                        <input required type="text" class="mat-input form-control" name="phone" numbers-only\n' +
    '                            ng-model="Phone" ng-minlength="10" ng-maxlength="50">\n' +
    '                        <!-- <span class="error" ng-show="newclientForm.phone.$error.pattern">{{\'NotPhoneNumber\' | translate}}   </span> -->\n' +
    '                        <div ng-messages="newclientForm.phone.$error">\n' +
    '                            <div ng-if="newclientForm.phone.$error.required && !newclientForm.phone.$pristine">{{\'PhoneReqError\' |\n' +
    '                translate}}</div>\n' +
    '                            <div ng-if="(newclientForm.phone.$error.minlength || newclientForm.phone.$error.maxlength)">{{\'PhoneLengthError\'\n' +
    '                | translate}}</div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                        <label for="first-name">{{\'UserPasswordLbl\' | translate}}</label>\n' +
    '                        <input required type="password" class="mat-input form-control" name="password"\n' +
    '                            ng-model="Password" ng-minlength="8" ng-maxlength="25">\n' +
    '                        <div ng-messages="newclientForm.password.$error">\n' +
    '                            <div ng-if="newclientForm.password.$error.required && !newclientForm.password.$pristine">{{\'requiredErr\' |\n' +
    '                translate}}</div>\n' +
    '                            <div\n' +
    '                                ng-if="(newclientForm.password.$error.minlength || newclientForm.password.$error.maxlength) && !newclientForm.password.newPassword.$error.required">\n' +
    '                                Password\n' +
    '                                length must be 8-25 char.</div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                        <label for="first-name">{{\'ConfirmPasswordLbl\' | translate}}</label>\n' +
    '                        <input required type="password" class="mat-input form-control" name="confirmPassword"\n' +
    '                            ng-model="confirmPassword" equalto="newclientForm.password">\n' +
    '                        <div ng-messages="newclientForm.confirmPassword.$error">\n' +
    '                            <div\n' +
    '                                ng-if="newclientForm.confirmPassword.$error.required && !newclientForm.confirmPassword.$pristine">{{\'requiredErr\'\n' +
    '                | translate}}</div>\n' +
    '                            <div\n' +
    '                                ng-if="newclientForm.confirmPassword.$error.equalto && !newclientForm.confirmPassword.$error.required">{{\'passworddontmatch\'\n' +
    '                | translate}}</div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div\n' +
    '                        class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'FLoor\' | translate}}</label>\n' +
    '                        <input required type="number" class="mat-input form-control" name="floor"\n' +
    '                            ng-model="userCtrl.FLoor" ng-minlength="1" ng-maxlength="4">\n' +
    '                        <div ng-messages="newclientForm.floor.$error" class="error">\n' +
    '                            <div ng-if="newclientForm.floor.$error.required && !newclientForm.floor.$pristine">\n' +
    '                                {{\'ProgramDaysCountReqError\' | translate}}</div>\n' +
    '                            <div ng-if="(newclientForm.floor.$error.minlength || newclientForm.floor.$error.maxlength)">\n' +
    '                                {{\'ProgramDaysCountLengthError\' | translate}}</div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div\n' +
    '                        class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'ApartmentNumber\' | translate}}</label>\n' +
    '                        <input required type="number" class="mat-input form-control" name="appartmentNo"\n' +
    '                            ng-model="userCtrl.AppartmentNo" ng-minlength="1" ng-maxlength="4">\n' +
    '                        <div ng-messages="newclientForm.appartmentNo.$error" class="error">\n' +
    '                            <div\n' +
    '                                ng-if="newclientForm.appartmentNo.$error.required && !newclientForm.appartmentNo.$pristine">\n' +
    '                                {{\'ProgramDaysCountReqError\' | translate}}</div>\n' +
    '                            <div\n' +
    '                                ng-if="(newclientForm.appartmentNo.$error.minlength || newclientForm.appartmentNo.$error.maxlength)">\n' +
    '                                {{\'ProgramDaysCountLengthError\' | translate}}</div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                        <label for="first-name">{{\'AddressDescription\' | translate}}</label>\n' +
    '                        <textarea required type="text" class="mat-input form-control" name="addressDescription"\n' +
    '                            ng-model="userCtrl.AddressDescription" ng-minlength="3" ng-maxlength="255"></textarea>\n' +
    '                        <div ng-messages="newclientForm.addressDescription.$error">\n' +
    '                            <div\n' +
    '                                ng-if="newclientForm.addressDescription.$error.required && !newclientForm.addressDescription.$pristine">\n' +
    '                                {{\'Address\' | translate}}\n' +
    '                                {{\'ReqError\' | translate}}\n' +
    '                            </div>\n' +
    '                            <div\n' +
    '                                ng-if="(newclientForm.addressDescription.$error.minlength || newclientForm.addressDescription.$error.maxlength)">\n' +
    '                                {{\'NameLengthError255\' | translate}}</div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div\n' +
    '                        class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'Country\' | translate}}</label>\n' +
    '                        <select style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                            ng-change="userCtrl.countryChange()" ng-model="userCtrl.selectedCountryId"\n' +
    '                            ng-options="group.countryId as group.titleDictionary[selectedLanguage] for group in userCtrl.counties">\n' +
    '                        </select>\n' +
    '                    </div>\n' +
    '                    <div ng-show=" userCtrl.selectedCountryId > 0"\n' +
    '                        class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'Region\' | translate}}</label>\n' +
    '                        <select style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                            ng-change="userCtrl.regionChange()" ng-model="userCtrl.selectedRegionId"\n' +
    '                            ng-options="group.regionId as group.titleDictionary[selectedLanguage] for group in userCtrl.regions">\n' +
    '                        </select>\n' +
    '                    </div>\n' +
    '                    <div ng-show=" userCtrl.selectedRegionId > 0"\n' +
    '                        class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'City\' | translate}}</label>\n' +
    '                        <select style="width:100% !important" class="select-tags form-control pmd-select2-tags"\n' +
    '                            ng-change="userCtrl.cityChange()" ng-model="userCtrl.selectedCityId"\n' +
    '                            ng-options="group.cityId as group.titleDictionary[selectedLanguage] for group in userCtrl.cities">\n' +
    '                        </select>\n' +
    '                    </div>\n' +
    '                    <div ng-show=" userCtrl.selectedCityId > 0"\n' +
    '                        class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'Area\' | translate}}</label>\n' +
    '                        <select ng-required="userCtrl.selectedCityId > 0" style="width:100% !important"\n' +
    '                            class="select-tags form-control pmd-select2-tags" ng-change="userCtrl.areaChange()"\n' +
    '                            ng-model="userCtrl.selectedAreaId"\n' +
    '                            ng-options="group.areaId as group.titleDictionary[selectedLanguage] for group in userCtrl.area">\n' +
    '                        </select>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="pmd-modal-action text-right">\n' +
    '                        <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '                            ng-disabled="newclientForm.$invalid  || userCtrl.selectedAreaId <= 0 "\n' +
    '                            class="btn pmd-ripple-effect btn-primary" type="button" ng-click="AddNewclient()">{{\'saveChangesBtn\' |\n' +
    '        translate}}</button>\n' +
    '                        <button class="btn pmd-ripple-effect btn-default" type="button" ng-click="userCtrl.close()">{{\'DiscardBtn\' |\n' +
    '        translate}}</button>\n' +
    '                    </div>\n' +
    '                </form>\n' +
    '\n' +
    '            </div>\n' +
    '        </div>\n' +
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
  $templateCache.put('./app/GlobalAdmin/register/templates/edit.html',
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
    '                minDate: new Date(),\n' +
    '             //   format: \'DD/MM/YYYY HH:mm:ss\'\n' +
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
  $templateCache.put('./app/GlobalAdmin/register/templates/editUser.html',
    '<div class="inn-body-section pad-bot-55">\n' +
    '    <div class="container">\n' +
    '        <div class="row">\n' +
    '            <div class="head-typo typo-com collap-expand book-form inn-com-form">\n' +
    '                <h2>{{\'BasicInfoLbl\' | translate}} </h2>\n' +
    '\n' +
    '                <form class="form-horizontal" name="newclientForm" autocomplete="off">\n' +
    '                    <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'FirstNameLbl\' | translate}}</label>\n' +
    '                        <input required type="text" class="mat-input form-control" name="firstName"\n' +
    '                            ng-model="userObj.firstName" minlength="3" maxlength="255">\n' +
    '                        <div ng-messages="newclientForm.firstName.$error">\n' +
    '                            <div ng-if="newclientForm.firstName.$error.required && !newclientForm.firstName.$pristine">{{\'FirstNameLengthError\'\n' +
    '                | translate}}</div>\n' +
    '                            <div\n' +
    '                                ng-if="(newclientForm.firstName.$error.minlength || newclientForm.firstName.$error.maxlength) && !newclientForm.firstName.$error.required">{{\'NameLengthError255\'\n' +
    '                | translate}}</div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'LastNameLbl\' | translate}}</label>\n' +
    '                        <input required type="text" class="mat-input form-control" name="lastName"\n' +
    '                            ng-model="userObj.lastName" minlength="3" maxlength="255">\n' +
    '                        <div ng-messages="newclientForm.lastName.$error">\n' +
    '                            <div ng-if="newclientForm.lastName.$error.required && !newclientForm.lastName.$pristine">{{\'lastName\' |\n' +
    '                translate}}</div>\n' +
    '                            <div\n' +
    '                                ng-if="(newclientForm.lastName.$error.minlength || newclientForm.lastName.$error.maxlength) && !newclientForm.lastName.$error.required">{{\'LastNameLengthError\'\n' +
    '                | translate}}</div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'EmailLbl\' | translate}}</label>\n' +
    '\n' +
    '                        <input ng-disabled="true" required type="text" class="mat-input form-control" name="email"\n' +
    '                            ng-model="userObj.email" ng-minlength="3" ng-maxlength="50">\n' +
    '                        <div ng-messages="newclientForm.email.$error">\n' +
    '                            <div ng-if="newclientForm.email.$error.required && !newclientForm.email.$pristine">{{\'lastName\' |\n' +
    '                translate}}</div>\n' +
    '                            <div\n' +
    '                                ng-if="(newclientForm.email.$error.minlength || newclientForm.email.$error.maxlength) && !newclientForm.email.$error.required">{{\'LastNameLengthError\'\n' +
    '                | translate}}</div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'phoneLbl\' | translate}}</label>\n' +
    '\n' +
    '                        <input required type="text" class="mat-input form-control" numbers-only name="phone"\n' +
    '                            ng-model="userObj.phone" ng-pattern="phoneNumbr" ng-minlength="10" ng-maxlength="50">\n' +
    '                        <span class="error"\n' +
    '                            ng-show="newclientForm.phone.$error.pattern">{{\'NotPhoneNumber\' | translate}} </span>\n' +
    '                        <div ng-messages="newclientForm.phone.$error">\n' +
    '                            <div ng-if="newclientForm.phone.$error.required && !newclientForm.phone.$pristine">{{\'PhoneReqError\' |\n' +
    '                translate}}</div>\n' +
    '                            <div ng-if="(newclientForm.phone.$error.minlength || newclientForm.phone.$error.maxlength)">{{\'PhoneLengthError\'\n' +
    '                | translate}}</div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'UserPasswordLbl\' | translate}}</label>\n' +
    '\n' +
    '                        <input required type="password" class="mat-input form-control" name="password"\n' +
    '                            ng-model="userObj.password" ng-minlength="8" ng-maxlength="25">\n' +
    '                        <div ng-messages="newclientForm.password.$error">\n' +
    '                            <div ng-if="newclientForm.password.$error.required && !newclientForm.password.$pristine">{{\'requiredErr\' |\n' +
    '                translate}}</div>\n' +
    '                            <div\n' +
    '                                ng-if="(newclientForm.password.$error.minlength || newclientForm.password.$error.maxlength) && !newclientForm.password.newPassword.$error.required">\n' +
    '                                Password\n' +
    '                                length must be 8-25 char.</div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div\n' +
    '                        class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'ConfirmPasswordLbl\' | translate}}</label>\n' +
    '                        <input required type="password" class="mat-input form-control" name="confirmPassword"\n' +
    '                            ng-model="userObj.confirmPassword" equalto="newclientForm.password">\n' +
    '                        <div ng-messages="newclientForm.confirmPassword.$error">\n' +
    '                            <div\n' +
    '                                ng-if="newclientForm.confirmPassword.$error.required && !newclientForm.confirmPassword.$pristine">{{\'requiredErr\'\n' +
    '                | translate}}</div>\n' +
    '                            <div\n' +
    '                                ng-if="newclientForm.confirmPassword.$error.equalto && !newclientForm.confirmPassword.$error.required">{{\'passworddontmatch\'\n' +
    '                | translate}}</div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                        <label for="first-name">{{\'Country\' | translate}}</label>\n' +
    '                        <select class="select-tags form-control pmd-select2-tags" style="width:100% !important"\n' +
    '                            ng-change="editUserCtrl.countryChange()" ng-model="editUserCtrl.selectedCountryId"\n' +
    '                            ng-options="group.countryId as group.titleDictionary[selectedLanguage] for group in editUserCtrl.counties">\n' +
    '                        </select>\n' +
    '                    </div>\n' +
    '                    <div ng-show=" editUserCtrl.selectedCountryId > 0"\n' +
    '                        class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'Region\' | translate}}</label>\n' +
    '                        <select ng-required="editUserCtrl.selectedCountryId > 0" style="width:100% !important"\n' +
    '                            class="select-tags form-control pmd-select2-tags" ng-change="editUserCtrl.regionChange()"\n' +
    '                            ng-model="editUserCtrl.selectedRegionId"\n' +
    '                            ng-options="group.regionId as group.titleDictionary[selectedLanguage] for group in editUserCtrl.regions">\n' +
    '                        </select>\n' +
    '                    </div>\n' +
    '                    <div ng-show=" editUserCtrl.selectedRegionId > 0"\n' +
    '                        class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'City\' | translate}}</label>\n' +
    '                        <select ng-required="editUserCtrl.selectedRegionId > 0" style="width:100% !important"\n' +
    '                            class="select-tags form-control pmd-select2-tags" ng-change="editUserCtrl.cityChange()"\n' +
    '                            ng-model="editUserCtrl.selectedCityId"\n' +
    '                            ng-options="group.cityId as group.titleDictionary[selectedLanguage] for group in editUserCtrl.cities">\n' +
    '                        </select>\n' +
    '                    </div>\n' +
    '                    <div ng-show=" editUserCtrl.selectedCityId > 0"\n' +
    '                        class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'Area\' | translate}}</label>\n' +
    '                        <select ng-required="  editUserCtrl.selectedCityId > 0" style="width:100% !important"\n' +
    '                            class="select-tags form-control pmd-select2-tags" ng-change="editUserCtrl.areaChange()"\n' +
    '                            ng-model="editUserCtrl.selectedAreaId"\n' +
    '                            ng-options="group.areaId as group.titleDictionary[selectedLanguage] for group in editUserCtrl.areaList">\n' +
    '                        </select>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="pmd-modal-action text-right">\n' +
    '                        <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '                            ng-disabled="newclientForm.$invalid || !editUserCtrl.show && editUserCtrl.selectedBranchId <= 0"\n' +
    '                            class="btn pmd-ripple-effect btn-primary" type="button" ng-click="Updateclient()">{{\'saveChangesBtn\' |\n' +
    '            translate}}</button>\n' +
    '                        <button class="btn pmd-ripple-effect btn-default" type="button" ng-click="editUserCtrl.close()">{{\'DiscardBtn\' |\n' +
    '            translate}}</button>\n' +
    '                    </div>\n' +
    '                </form>\n' +
    '\n' +
    '            </div>\n' +
    '        </div>\n' +
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
  $templateCache.put('./app/GlobalAdmin/register/templates/user.html',
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
  $templateCache.put('./app/GlobalAdmin/user/templates/home.html',
    '<script type="text/javascript">\n' +
    '	$(document).ready(function () {\n' +
    '		$(".select-add-tags").select2({\n' +
    '			tags: true,\n' +
    '			theme: "bootstrap",\n' +
    '			insertTag: function (data, tag) {\n' +
    '				// Insert the tag at the end of the results\n' +
    '				data.push(tag);\n' +
    '				// console.log(data);\n' +
    '			}\n' +
    '		});\n' +
    '\n' +
    '		$(".select-tags").select2({\n' +
    '			tags: false,\n' +
    '			theme: "bootstrap",\n' +
    '		});\n' +
    '\n' +
    '		$(".select-with-search").select2({\n' +
    '			theme: "bootstrap"\n' +
    '		});\n' +
    '	});\n' +
    '\n' +
    '	$(function () {\n' +
    '		\n' +
    '		$(\'#startdate\').datepicker(\n' +
    '			{\n' +
    '				minDate: new Date()\n' +
    '			}\n' +
    '		).on(\'dp.change\', function (e) {\n' +
    '			debugger;\n' +
    '			angular.element(document.getElementById(\'startdate\')).scope().dateChange();\n' +
    '		});\n' +
    '	});\n' +
    '\n' +
    '</script>\n' +
    '\n' +
    '<style>\n' +
    '	button[disabled], html input[disabled] {\n' +
    '    cursor: default;\n' +
    '    background: #e2a3ab !important;\n' +
    '}\n' +
    '</style>\n' +
    '\n' +
    '<!--HEADER SECTION-->\n' +
    '<!-- <form name="edithomeForm"> -->\n' +
    '<section class="main" ng-style="style()">\n' +
    '	<!--TOP SECTION-->\n' +
    '	<!--Check Availability SECTION-->\n' +
    '</section>\n' +
    '<div class="inn-body-section inn-booking">\n' +
    '	<div class="container">\n' +
    '		<div class="row">\n' +
    '			<!--TYPOGRAPHY SECTION-->\n' +
    '			<div class="col-md-6">\n' +
    '				<div class="book-title">\n' +
    '					<h2>{{\'customiseProgram\' | translate}}</h2>\n' +
    '					<p>{{\'DescribeCustomiseProgram\' | translate}}</p>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '			<div class="col-md-6">\n' +
    '				<div class="book-form inn-com-form">\n' +
    '					<form name="cutomizeProgram" class="col s12">\n' +
    '						<!-- <div class="row">\n' +
    '								<div class="input-field col s6">\n' +
    '									<input required type="text" class="validate" name="programName" ng-model="programName" minlength="1" maxlength="50">\n' +
    '									<label>{{\'ProgramName\' | translate}}</label>\n' +
    '								</div>\n' +
    '								<div class="input-field col s6">\n' +
    '									<input required type="text" class="validate" name="programDescription" ng-model="programDescription" minlength="1" maxlength="50">\n' +
    '									<label>{{\'ProgramDescription\' | translate}}</label>\n' +
    '								</div>\n' +
    '							</div> -->\n' +
    '\n' +
    '						<div class="row">\n' +
    '							<div class="input-field col s6">\n' +
    '								<div ng-messages="cutomizeProgram.programName.$error">\n' +
    '									<div ng-if="cutomizeProgram.programName.$error.required && !cutomizeProgram.programName.$pristine">\n' +
    '										{{\'requiredField\' | translate}}\n' +
    '									</div>\n' +
    '									<div ng-if="(cutomizeProgram.programName.$error.minlength || cutomizeProgram.programName.$error.maxlength)">\n' +
    '										{{\'minMaxLengthText\' | translate}}</div>\n' +
    '								</div>\n' +
    '							</div>\n' +
    '							<div class="input-field col s6">\n' +
    '								<div ng-messages="cutomizeProgram.programDescription.$error">\n' +
    '									<div ng-if="cutomizeProgram.programDescription.$error.required && !cutomizeProgram.programDescription.$pristine">\n' +
    '										{{\'requiredField\' | translate}}\n' +
    '									</div>\n' +
    '									<div ng-if="(cutomizeProgram.programDescription.$error.minlength || cutomizeProgram.programDescription.$error.maxlength)">\n' +
    '										{{\'minMaxLengthText\' | translate}}</div>\n' +
    '								</div>\n' +
    '							</div>\n' +
    '\n' +
    '						</div>\n' +
    '						<div class="row">\n' +
    '							<div class="input-field col s6">\n' +
    '								<input required numbers-only type="text" class="validate" name="programDaysCount" ng-model="programDaysCount" minlength="1"\n' +
    '								 maxlength="2">\n' +
    '								<label>{{\'ProgramDaysCount\' | translate}}</label>\n' +
    '								<div ng-show="settingsPrepService.minNoDaysPerProgram > programDaysCount">\n' +
    '									<p>{{\'minAllowedDays= \' | translate}} {{settingsPrepService.minNoDaysPerProgram}}\n' +
    '									</p>\n' +
    '								</div>\n' +
    '							</div>\n' +
    '							<div class="input-field col s6">\n' +
    '								<input required numbers-only type="text" class="validate" name="mealPerDay" ng-model="mealPerDay" minlength="1" maxlength="2">\n' +
    '								<label>{{\'MealPerDay\' | translate}}</label>\n' +
    '							</div>\n' +
    '						</div>\n' +
    '\n' +
    '						<div class="row">\n' +
    '							<div class="input-field col s6">\n' +
    '								<div ng-messages="cutomizeProgram.programDaysCount.$error">\n' +
    '									<div ng-if="cutomizeProgram.programDaysCount.$error.required && !cutomizeProgram.programDaysCount.$pristine">\n' +
    '										{{\'requiredField\' | translate}}\n' +
    '									</div>\n' +
    '									<div ng-if="(cutomizeProgram.programDaysCount.$error.minlength || cutomizeProgram.programDaysCount.$error.maxlength)">\n' +
    '										{{\'minMaxLengthNum\' | translate}}</div>\n' +
    '								</div>\n' +
    '							</div>\n' +
    '							<div class="input-field col s6">\n' +
    '								<div ng-messages="cutomizeProgram.mealPerDay.$error">\n' +
    '									<div ng-if="cutomizeProgram.mealPerDay.$error.required && !cutomizeProgram.mealPerDay.$pristine">\n' +
    '										{{\'requiredField\' | translate}}\n' +
    '									</div>\n' +
    '									<div ng-if="(cutomizeProgram.mealPerDay.$error.minlength || cutomizeProgram.mealPerDay.$error.maxlength)">\n' +
    '										{{\'minMaxLengthNum\' | translate}}</div>\n' +
    '									<div ng-if="1 > mealPerDay">{{\'minMealsIsOne\' | translate}}</div>\n' +
    '								</div>\n' +
    '							</div>\n' +
    '						</div>\n' +
    '\n' +
    '						<div class="row">\n' +
    '							<!-- <div class="input-field col s6">\n' +
    '								\n' +
    '							</div> -->\n' +
    '							<label>{{\'SelectExcludeDays\' | translate}}</label>\n' +
    '\n' +
    '							<div class="input-field col s12">\n' +
    '								<select style="width:100% !important" class="form-control select-tags pmd-select2-tags" multiple ng-model="SelectedDays"\n' +
    '								 ng-options="day as day.dayNameDictionary[selectedLanguage] for day in dayList">\n' +
    '								</select>\n' +
    '							</div>\n' +
    '						</div>\n' +
    '\n' +
    '						<div class="row">\n' +
    '							<div class="col s6">\n' +
    '								<span>\n' +
    '									<input type="checkbox" id="test5" ng-model="isBreakFast" />\n' +
    '									<label for="test5" class="labelCheckBox">{{\'IsBreakFast\' | translate}}</label>\n' +
    '								</span>\n' +
    '							</div>\n' +
    '							<div class="col s6">\n' +
    '								<span>\n' +
    '									<input type="checkbox" id="test6" ng-model="isSnack" />\n' +
    '									<label for="test6" class="labelCheckBox">{{\'IsSnack\' | translate}}</label>\n' +
    '								</span>\n' +
    '							</div>\n' +
    '						</div>\n' +
    '						<div class="row">\n' +
    '							<div class="input-field col s12">\n' +
    '								\n' +
    '								<input name="itemDatetime" required ng-model="itemDatetime" type="text" id="startdate" class="form-control" />\n' +
    '								<label for="from">{{\'OrderStartDate\' | translate}}</label>\n' +
    '							</div>\n' +
    '						</div>\n' +
    '						<div class="row">\n' +
    '							<div class="col s6">\n' +
    '								<div ng-messages="cutomizeProgram.itemDatetime.$error">\n' +
    '									<div ng-if="cutomizeProgram.itemDatetime.$error.required && !cutomizeProgram.itemDatetime.$pristine">\n' +
    '										{{\'requiredField\' | translate}}</div>\n' +
    '								</div>\n' +
    '							</div>\n' +
    '						</div>\n' +
    '						<div class="row">\n' +
    '							<div class="input-field col s12">\n' +
    '								<input ng-disabled="cutomizeProgram.$invalid  || settingsPrepService.minNoDaysPerProgram > programDaysCount" \n' +
    '								type="submit"\n' +
    '								 class="form-btn" ng-click="submitCustomise()">\n' +
    '\n' +
    '								 <!-- <button style="width: 90%; height: 50%;" class="form-btn" ng-disabled="cutomizeProgram.$invalid  || settingsPrepService.minNoDaysPerProgram > programDaysCount" ng-click="submitCustomise()"></button> -->\n' +
    '							</div>\n' +
    '						</div>\n' +
    '					</form>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '			<!--END TYPOGRAPHY SECTION-->\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</div>\n' +
    '<!--End Check Availability SECTION-->\n' +
    '<!--HOTEL ROOMS SECTION-->\n' +
    '<div class="hom1 hom-com pad-bot-40">\n' +
    '	<div class="container">\n' +
    '		<div class="row">\n' +
    '			<div class="hom1-title">\n' +
    '				<h2>{{\'Meals\' | translate}}</h2>\n' +
    '				<div class="head-title">\n' +
    '					<div class="hl-1"></div>\n' +
    '					<div class="hl-2"></div>\n' +
    '					<div class="hl-3"></div>\n' +
    '				</div>\n' +
    '				<p>{{\'MealsDescription\' | translate}}</p>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '		<div class="row">\n' +
    '			<div class="to-ho-hotel">\n' +
    '				<!-- HOTEL GRID -->\n' +
    '				<div ng-repeat="n in [] | range:6">\n' +
    '					<div ng-click="$state.go(\'mealDetails\', {mealId: mealsPrepService[n].mealId});" style="cursor: pointer !important;" ng-if="mealsPrepService[n] != undefined"\n' +
    '					 class="col-md-4">\n' +
    '						<div class="to-ho-hotel-con">\n' +
    '							<div class="to-ho-hotel-con-1">\n' +
    '								<!-- {{mealsPrepService[n].mealId}} -->\n' +
    '								<img src="https://fithouseksa.com/wp-content/uploads/2018/07/Grilled-steak.png" alt="">\n' +
    '							</div>\n' +
    '							<div class="to-ho-hotel-con-23">\n' +
    '								<div class="to-ho-hotel-con-2">\n' +
    '									<a>\n' +
    '										<h4>{{mealsPrepService[n].mealNameDictionary[selectedLanguage] | limitTo:10}}</h4>\n' +
    '									</a>\n' +
    '								</div>\n' +
    '								<div class="to-ho-hotel-con-3">\n' +
    '									<ul>\n' +
    '										<li>{{mealsPrepService[n].mealDescriptionDictionary[selectedLanguage] | limitTo:10}}\n' +
    '											<div class="dir-rat-star ho-hot-rat-star">\n' +
    '												<i aria-hidden="true"></i>\n' +
    '												<i aria-hidden="true"></i>\n' +
    '												<i aria-hidden="true"></i>\n' +
    '												<i aria-hidden="true"></i>\n' +
    '												<i aria-hidden="true"></i>\n' +
    '											</div>\n' +
    '										</li>\n' +
    '										<li>\n' +
    '											<span class="ho-hot-pri-dis"></span>\n' +
    '											<span class="ho-hot-pri">{{mealsPrepService[n].mealPrice}}</span>\n' +
    '										</li>\n' +
    '									</ul>\n' +
    '								</div>\n' +
    '							</div>\n' +
    '						</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</div>\n' +
    '<!--END HOTEL ROOMS-->\n' +
    '\n' +
    '<!--TOP SECTION-->\n' +
    '<section>\n' +
    '\n' +
    '<div class="inn-body-section pad-bot-55">\n' +
    '	<div class="container">\n' +
    '		<div class="row">\n' +
    '			<div class="page-head">\n' +
    '				<h2>{{\'Programs\' | translate}}</h2>\n' +
    '				<div class="head-title">\n' +
    '					<div class="hl-1"></div>\n' +
    '					<div class="hl-2"></div>\n' +
    '					<div class="hl-3"></div>\n' +
    '				</div>\n' +
    '				<p>{{\'ProgramsDescription\' | translate}}</p>\n' +
    '			</div>\n' +
    '			<!--ROOM SECTION-->\n' +
    '			<div ng-repeat="n in [] | range:6">\n' +
    '				<div style="cursor: pointer !important;" ng-click="$state.go(\'programDetails\', {programId: programPrepService[n].programId});"\n' +
    '				 ng-if="programPrepService[n] != undefined" class="room">\n' +
    '					<div class="ribbon ribbon-top-left">\n' +
    '						<span>{{\'Program\' | translate}}</span>\n' +
    '					</div>\n' +
    '					<!--ROOM IMAGE-->\n' +
    '					<div class="r1 r-com">\n' +
    '						<img src="https://fithouseksa.com/wp-content/uploads/2018/07/fithouse-icons6.png" alt="" />\n' +
    '					</div>\n' +
    '					<!--ROOM RATING-->\n' +
    '					<div class="r2 r-com">\n' +
    '						<h4>{{programPrepService[n].programNameDictionary[selectedLanguage] | limitTo:10}}</h4>\n' +
    '						<div class="r2-ratt">\n' +
    '							<i></i>\n' +
    '							<i></i>\n' +
    '							<i></i>\n' +
    '							<i></i>\n' +
    '							<i></i>\n' +
    '							<img src="images/h-trip.png" alt="" />\n' +
    '							<br>\n' +
    '							<span>{{programPrepService[n].programDescriptionDictionary[selectedLanguage] | limitTo:10}}</span>\n' +
    '						</div>\n' +
    '						<ul>\n' +
    '							<li></li>\n' +
    '							<li></li>\n' +
    '							<li></li>\n' +
    '							<li></li>\n' +
    '						</ul>\n' +
    '					</div>\n' +
    '					<!--ROOM AMINITIES-->\n' +
    '					<div class="r3 r-com">\n' +
    '						<ul>\n' +
    '							<li>{{\'ProgramDays\' | translate}}: {{programPrepService[n].programDays}}</li>\n' +
    '							<li>{{\'MealPerDay\' | translate}}: {{programPrepService[n].noOfMeals}}</li>\n' +
    '							<li></li>\n' +
    '							<li></li>\n' +
    '							<li></li>\n' +
    '						</ul>\n' +
    '					</div>\n' +
    '					<!--ROOM PRICE-->\n' +
    '					<div class="r4 r-com">\n' +
    '						<p></p>\n' +
    '						<p>\n' +
    '							<span class="room-price-1">{{programPrepService[n].price}}</span>\n' +
    '							<span class="room-price"></span>\n' +
    '						</p>\n' +
    '						<p>{{\'NonRefundable\' | translate}}</p>\n' +
    '					</div>\n' +
    '					<!--ROOM BOOKING BUTTON-->\n' +
    '					<div class="r5 r-com">\n' +
    '						<div class="r2-available">Available</div>\n' +
    '						<p></p>\n' +
    '						<a style="cursor: pointer !important;" ng-click="$state.go(\'programDetails\', {programId: programPrepService[n].programId});"\n' +
    '						 class="inn-room-book">{{\'Book\' | translate}}</a>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '				<!--END ROOM SECTION-->\n' +
    '			</div>\n' +
    '			\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</div>\n' +
    '</section>\n' +
    '\n' +
    '\n' +
    '\n' +
    '<!-- </form> -->\n' +
    '<!--END HEADER SECTION-->');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/core/login/templates/login.html',
    '<div class="inn-body-section pad-bot-55">\n' +
    '    <div class="container">\n' +
    '        <div class="row">\n' +
    '\n' +
    '            <div class="head-typo typo-com collap-expand book-form inn-com-form" ng-if="!isLoggedIn()">\n' +
    '                <h2>Login </h2>\n' +
    '\n' +
    '                <form ng-submit="submit(username,password)" name="loginForm">\n' +
    '                    <div class="pmd-card-body">\n' +
    '                        <!-- <div class="alert alert-success" role="alert"> Oh snap! Change a few things up and try submitting\n' +
    '                        again. </div> -->\n' +
    '                        <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                            <label for="inputError1" class="control-label pmd-input-group-label">Email</label>\n' +
    '                            <div class="input-group">\n' +
    '                                <div class="input-group-addon"><i\n' +
    '                                        class="material-icons md-dark pmd-sm">perm_identity</i>\n' +
    '                                </div>\n' +
    '                                <input type="text" class="form-control" id="exampleInputAmount" name="username"\n' +
    '                                    ng-pattern="/^\\w+([-+.\']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$/" required\n' +
    '                                    ng-model="username" ng-change="reset()">\n' +
    '\n' +
    '                            </div>\n' +
    '                            <span class="error" ng-show="loginForm.username.$error.pattern">{{\'WrongMail\' | translate}}\n' +
    '                            </span>\n' +
    '                            <div ng-messages="loginForm.email.$error">\n' +
    '                                <div ng-if="loginForm.username.$error.required && !loginForm.username.$pristine">{{\'EmailLengthError\'\n' +
    '                            | translate}}</div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '\n' +
    '                        <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                            <label for="inputError1" class="control-label pmd-input-group-label">Password</label>\n' +
    '                            <div class="input-group">\n' +
    '                                <div class="input-group-addon"><i class="material-icons md-dark pmd-sm">lock_outline</i>\n' +
    '                                </div>\n' +
    '                                <input required type="password" name="password" ng-model="password" ng-change="reset()"\n' +
    '                                    class="form-control" ng-minlength="8" ng-maxlength="25">\n' +
    '\n' +
    '                            </div>\n' +
    '\n' +
    '                            <span class="error" ng-show="loginForm.password.$error.pattern">{{\'WrongMail\' | translate}}\n' +
    '                            </span>\n' +
    '                            <div\n' +
    '                                ng-if="(loginForm.password.$error.minlength || loginForm.password.$error.maxlength) && !loginForm.password.newPassword.$error.required">\n' +
    '                                Password\n' +
    '                                length must be 8-25 char.</div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <div ng-if="invalidLoginInfo" class="loginFailed">\n' +
    '                        <span>Incorrect username or password.</span>\n' +
    '                    </div>\n' +
    '                    <div ng-if="inActiveUser" class="loginFailed">\n' +
    '                        <span>Your Account Is Disabled, Please contact to administrator.</span>\n' +
    '                    </div>\n' +
    '                    <div ng-if="inActiveNotClient" class="loginFailed">\n' +
    '                        <span>You are admin can\'t login herre, Please contact to administrator.</span>\n' +
    '                    </div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '                    <div class="pmd-card-footer card-footer-no-border card-footer-p16 text-center">\n' +
    '                        <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '                            ng-disabled="loginForm.$invalid " class="btn pmd-ripple-effect btn-primary" type="submit">\n' +
    '                            {{\'Login\' | translate}}</button>\n' +
    '\n' +
    '                        <button class="btn pmd-ripple-effect btn-primary" type="button" ng-click="Register()">\n' +
    '                            {{\'Register\' | translate}}</button>\n' +
    '\n' +
    '                    </div>\n' +
    '                </form>\n' +
    '\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
