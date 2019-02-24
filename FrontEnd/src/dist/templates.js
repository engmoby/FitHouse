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
    '                    <span>carbs: {{CustomCtrl.fat}}</span>\n' +
    '                    <span>calories: {{CustomCtrl.calories}}</span>\n' +
    '                    <span>protein: {{CustomCtrl.protein}}</span>\n' +
    '                    <span>cost: {{CustomCtrl.cost}}</span>\n' +
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
    '                                            group by item.category.titleDictionary[selectedLanguage]\n' +
    '                                            for item  in CustomCtrl.ItemCategorized">\n' +
    '                                                        </select>\n' +
    '                                                        <div\n' +
    '                                                            ng-messages="stepTwoProgramForm.ddl{{counterDay}}{{counterMeal}}.$error">\n' +
    '                                                            <div\n' +
    '                                                                ng-show="stepTwoProgramForm.ddl{{counterDay}}{{counterMeal}}.$error.required && !stepTwoProgramForm.ddl{{counterDay}}{{counterMeal}}.$pristine">\n' +
    '                                                                {{\'requiredErr\' | translate}}</div>\n' +
    '                                                            <div\n' +
    '                                                                ng-show="(stepTwoProgramForm.ddl{{counterDay}}{{counterMeal}}.$error.minlength || stepTwoProgramForm.ddl{{counterDay}}{{counterMeal}}.$error.maxlength) && !stepTwoProgramForm.ddl{{counterDay}}{{counterMeal}}.$error.required">\n' +
    '                                                                {{\'NameLengthError255\' | translate}}</div>\n' +
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
    '                    <div class="col-md-6">\n' +
    '                        <div class="head-typo typo-com collap-expand book-form inn-com-form">\n' +
    '                            <form class="col s12">\n' +
    '                                <!-- <div class="row">\n' +
    '                                    <div class="input-field col s6">\n' +
    '                                        <input required type="number" class="mat-input form-control" name="floor"\n' +
    '                                            ng-model="CustomCtrl.FLoor" ng-minlength="1" ng-maxlength="4">\n' +
    '                                        <div ng-messages="stepTwoProgramForm.floor.$error" class="error">\n' +
    '                                            <div\n' +
    '                                                ng-if="stepTwoProgramForm.floor.$error.required && !stepTwoProgramForm.floor.$pristine">\n' +
    '                                                {{\'ProgramDaysCountReqError\' | translate}}</div>\n' +
    '                                            <div\n' +
    '                                                ng-if="(stepTwoProgramForm.floor.$error.minlength || stepTwoProgramForm.floor.$error.maxlength)">\n' +
    '                                                {{\'ProgramDaysCountLengthError\' | translate}}</div>\n' +
    '                                        </div>\n' +
    '                                        <label>{{\'FLoor\' | translate}}</label>\n' +
    '                                    </div>\n' +
    '                                    <div class="input-field col s6">\n' +
    '                                        <input required type="number" class="mat-input form-control" name="appartmentNo"\n' +
    '                                            ng-model="CustomCtrl.AppartmentNo" ng-minlength="1" ng-maxlength="4">\n' +
    '                                        <div ng-messages="stepTwoProgramForm.appartmentNo.$error" class="error">\n' +
    '                                            <div\n' +
    '                                                ng-if="stepTwoProgramForm.appartmentNo.$error.required && !stepTwoProgramForm.appartmentNo.$pristine">\n' +
    '                                                {{\'ProgramDaysCountReqError\' | translate}}</div>\n' +
    '                                            <div\n' +
    '                                                ng-if="(stepTwoProgramForm.appartmentNo.$error.minlength || stepTwoProgramForm.appartmentNo.$error.maxlength)">\n' +
    '                                                {{\'ProgramDaysCountLengthError\' | translate}}</div>\n' +
    '                                        </div>\n' +
    '                                        <label>{{\'ApartmentNumber\' | translate}}</label>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                                <div class="row">\n' +
    '                                    <div class="input-field col s12">\n' +
    '                                        <textarea required type="text" class="materialize-textarea"\n' +
    '                                            name="addressDescription" ng-model="CustomCtrl.AddressDescription"\n' +
    '                                            ng-minlength="3" ng-maxlength="255"></textarea>\n' +
    '                                        <div ng-messages="stepTwoProgramForm.addressDescription.$error">\n' +
    '                                             <div\n' +
    '                                                ng-if="stepTwoProgramForm.addressDescription.$error.required && !stepTwoProgramForm.addressDescription.$pristine">\n' +
    '                                                {{\'lastName\' | translate}}\n' +
    '                                            </div>\n' +
    '                                            <div\n' +
    '                                                ng-if="(stepTwoProgramForm.addressDescription.$error.minlength || stepTwoProgramForm.addressDescription.$error.maxlength)">\n' +
    '                                                {{\'NameLengthError255\' | translate}}</div>\n' +
    '                                        </div> \n' +
    '                                        <label>{{\'AddressDescription\' | translate}}</label>\n' +
    '                                    </div>\n' +
    '                                </div> -->\n' +
    '                                <p>\n' +
    '									<input name="group1" type="radio" id="test1" />\n' +
    '									<label for="test1">Red</label>\n' +
    '								</p>\n' +
    '								<p>\n' +
    '									<input name="group1" type="radio" id="test2" />\n' +
    '									<label for="test2">Yellow</label>\n' +
    '                                </p>\n' +
    '                                \n' +
    '                                <div class="row">\n' +
    '                                    <div class="input-field col s6">\n' +
    '                                        <select required style="width:100% !important"\n' +
    '                                            class="select-tags form-control pmd-select2-tags"\n' +
    '                                            ng-change="CustomCtrl.countryChange()"\n' +
    '                                            ng-model="CustomCtrl.selectedCountryId"\n' +
    '                                            ng-options="group.countryId as group.titleDictionary[selectedLanguage] for group in CustomCtrl.counties">\n' +
    '                                        </select>\n' +
    '                                        <!-- <label>{{\'Country\' | translate}}</label> -->\n' +
    '                                    </div>\n' +
    '                                    <div class="input-field col s6">\n' +
    '                                        <select required style="width:100% !important"\n' +
    '                                            class="select-tags form-control pmd-select2-tags"\n' +
    '                                            ng-change="CustomCtrl.regionChange()" ng-model="CustomCtrl.selectedRegionId"\n' +
    '                                            ng-options="group.regionId as group.titleDictionary[selectedLanguage] for group in CustomCtrl.regions">\n' +
    '                                        </select>\n' +
    '                                        <!-- <label>{{\'Region\' | translate}}</label> -->\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                                <div class="row">\n' +
    '                                    <div class="input-field col s6">\n' +
    '                                        <select ng-required="CustomCtrl.selectedRegionId > 0"\n' +
    '                                            style="width:100% !important"\n' +
    '                                            class="select-tags form-control pmd-select2-tags"\n' +
    '                                            ng-change="CustomCtrl.cityChange()" ng-model="CustomCtrl.selectedCityId"\n' +
    '                                            ng-options="group.cityId as group.titleDictionary[selectedLanguage] for group in CustomCtrl.cities">\n' +
    '                                        </select>\n' +
    '                                        <!-- <label>{{\'City\' | translate}}</label> -->\n' +
    '                                    </div>\n' +
    '                                    <div class="input-field col s6">\n' +
    '                                        <select ng-required=" CustomCtrl.selectedCityId > 0"\n' +
    '                                            style="width:100% !important"\n' +
    '                                            class="select-tags form-control pmd-select2-tags"\n' +
    '                                            ng-change="CustomCtrl.areaChange()" ng-model="CustomCtrl.selectedAreaId"\n' +
    '                                            ng-options="group.areaId as group.titleDictionary[selectedLanguage] for group in CustomCtrl.area">\n' +
    '                                        </select>\n' +
    '                                        <!-- <label>{{\'Area\' | translate}}</label> -->\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </form>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="row">\n' +
    '                    <div class="col-md-10"></div>\n' +
    '                    <div class="col-md-2">\n' +
    '                        <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '                            ng-disabled="(stepTwoProgramForm.$invalid || (CustomCtrl.daysCount == 0 || CustomCtrl.mealsCount == 0))"\n' +
    '                            class="btn pmd-ripple-effect btn-primary" type="button" ng-click="CustomCtrl.gotoStep();">\n' +
    '                            {{\'next\' | translate}}</button>\n' +
    '                    </div>\n' +
    '                </div>\n' +
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
    '<!--TOP BANNER-->\n' +
    '<div class="inn-banner">\n' +
    '	<div class="container">\n' +
    '		<div class="row">\n' +
    '			<h4>All Room Types</h4>\n' +
    '			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut\n' +
    '				laoreet.\n' +
    '				<p>\n' +
    '					<ul>\n' +
    '						<li><a href="#">Home</a>\n' +
    '						</li>\n' +
    '						<li><a href="#">Rooms</a>\n' +
    '						</li>\n' +
    '					</ul>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</div>\n' +
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
    '									<a data-toggle="tab" href="#menu1"><img src="/assets/img/db4.png" alt=""> <span\n' +
    '											class="tab-hide">Overview</span>\n' +
    '									</a>\n' +
    '								</li>\n' +
    '							</ul>\n' +
    '							<div class="tab-content">\n' +
    '\n' +
    '								<div id="menu1" class="tab-pane fade in active tab-space">\n' +
    '									<div class="hp-main-overview">\n' +
    '										<ul>\n' +
    '											<li>Order Code: <span>#</span>\n' +
    '											</li>\n' +
    '											<li>Price: <span>Max four Persons</span>\n' +
    '											</li>\n' +
    '											<li>Type : <span>800 sq. feet</span>\n' +
    '											</li>\n' +
    '											<li>No. of Days : <span>Sea or Garden view</span>\n' +
    '											</li>\n' +
    '											<li>No. of Meals Per Day : <span>Available per request</span>\n' +
    '											</li>\n' +
    '											<li>Start Date : <span>Balcony</span>\n' +
    '											</li>\n' +
    '											<li>Status : <span class="ov-yes">Yes</span>\n' +
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
  $templateCache.put('./app/GlobalAdmin/customProgram/templates/new.html',
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
    '								<th>{{\'Total\' | translate}}</th>\n' +
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
    '					 ng-model="newMealCtrl.vat" minlength="1" maxlength="3">\n' +
    '					<div ng-messages="newMealForm.vat.$error">\n' +
    '						<!-- <div ng-if="newMealForm.vat.$error.required && !newMealForm.vat.$pristine">{{\'requiredErr\' | translate}}</div> -->\n' +
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
    '					 ng-model="newMealCtrl.mealDiscount" minlength="1" maxlength="3">\n' +
    '					<div ng-messages="newMealForm.mealDiscount.$error">\n' +
    '						<div ng-if="(newMealForm.mealDiscount.$error.minlength || newMealForm.mealDiscount.$error.maxlength)">{{\'mealDiscountLengthError\' | translate}}</div>										\n' +
    '					</div>\n' +
    '					\n' +
    '				</div>\n' +
    '\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '					<label for="first-name">{{\'mealtotalDiscount\' | translate}} </label>\n' +
    '					<input disabled type="number" ng-change="newMealCtrl.calclulatetotalDiscount()" class="mat-input form-control" name="mealtotalDiscount"\n' +
    '					 ng-model="newMealCtrl.mealtotalDiscount" minlength="1" maxlength="12">\n' +
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
  $templateCache.put('./app/GlobalAdmin/program/templates/program.html',
    '<!-- kol l programs -->');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/program/templates/programDetails.html',
    '');
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
    '\n' +
    '\n' +
    '<!--HEADER SECTION-->\n' +
    '<!-- <form name="edithomeForm"> -->\n' +
    '<section class="main" ng-style="style()">\n' +
    '	<!--TOP SECTION-->\n' +
    '	<!--Check Availability SECTION-->\n' +
    '	<div class="inn-body-section inn-booking">\n' +
    '		<div class="container">\n' +
    '			<div class="row">\n' +
    '				<!--TYPOGRAPHY SECTION-->\n' +
    '				<div class="col-md-6">\n' +
    '					<div class="book-title">\n' +
    '						<h2>{{\'customiseProgram\' | translate}}</h2>\n' +
    '						<p>{{\'DescribeCustomiseProgram\' | translate}}</p>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '				<div class="col-md-6">\n' +
    '					<div class="book-form inn-com-form">\n' +
    '						<form name="cutomizeProgram" class="col s12">\n' +
    '							<!-- <div class="row">\n' +
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
    '							<div class="row">\n' +
    '								<div class="input-field col s6">\n' +
    '									<div ng-messages="cutomizeProgram.programName.$error">\n' +
    '										<div ng-if="cutomizeProgram.programName.$error.required && !cutomizeProgram.programName.$pristine">{{\'requiredField\' | translate}}\n' +
    '										</div>\n' +
    '										<div ng-if="(cutomizeProgram.programName.$error.minlength || cutomizeProgram.programName.$error.maxlength)">{{\'minMaxLengthText\' | translate}}</div>\n' +
    '									</div>\n' +
    '								</div>\n' +
    '								<div class="input-field col s6">\n' +
    '									<div ng-messages="cutomizeProgram.programDescription.$error">\n' +
    '										<div ng-if="cutomizeProgram.programDescription.$error.required && !cutomizeProgram.programDescription.$pristine">{{\'requiredField\' | translate}}\n' +
    '										</div>\n' +
    '										<div ng-if="(cutomizeProgram.programDescription.$error.minlength || cutomizeProgram.programDescription.$error.maxlength)">{{\'minMaxLengthText\' | translate}}</div>\n' +
    '									</div>\n' +
    '								</div>\n' +
    '\n' +
    '							</div>\n' +
    '							<div class="row">\n' +
    '								<div class="input-field col s6">\n' +
    '									<input required numbers-only type="text" class="validate" name="mealPerDay" ng-model="mealPerDay" minlength="1" maxlength="2">\n' +
    '									<label>{{\'MealPerDay\' | translate}}</label>\n' +
    '								</div>\n' +
    '								<div class="input-field col s6">\n' +
    '									<input required numbers-only type="text" class="validate" name="programDaysCount" ng-model="programDaysCount" minlength="1"\n' +
    '									 maxlength="2">\n' +
    '									<label>{{\'ProgramDaysCount\' | translate}}</label>\n' +
    '									<div ng-show="settingsPrepService.minNoDaysPerProgram > programDaysCount">\n' +
    '										<p>{{\'minAllowedDays= \' | translate}} {{settingsPrepService.minNoDaysPerProgram}}</p>\n' +
    '									</div>\n' +
    '								</div>\n' +
    '							</div>\n' +
    '\n' +
    '							<div class="row">\n' +
    '								<div class="input-field col s6">\n' +
    '									<div ng-messages="cutomizeProgram.mealPerDay.$error">\n' +
    '										<div ng-if="cutomizeProgram.mealPerDay.$error.required && !cutomizeProgram.mealPerDay.$pristine">{{\'requiredField\' | translate}}\n' +
    '										</div>\n' +
    '										<div ng-if="(cutomizeProgram.mealPerDay.$error.minlength || cutomizeProgram.mealPerDay.$error.maxlength)">{{\'minMaxLengthNum\' | translate}}</div>\n' +
    '										<div ng-if="1 > mealPerDay">{{\'minMealsIsOne\' | translate}}</div>\n' +
    '									</div>\n' +
    '								</div>\n' +
    '								<div class="input-field col s6">\n' +
    '									<div ng-messages="cutomizeProgram.programDaysCount.$error">\n' +
    '										<div ng-if="cutomizeProgram.programDaysCount.$error.required && !cutomizeProgram.programDaysCount.$pristine">{{\'requiredField\' | translate}}\n' +
    '										</div>\n' +
    '										<div ng-if="(cutomizeProgram.programDaysCount.$error.minlength || cutomizeProgram.programDaysCount.$error.maxlength)">{{\'minMaxLengthNum\' | translate}}</div>\n' +
    '									</div>\n' +
    '								</div>\n' +
    '\n' +
    '							</div>\n' +
    '\n' +
    '							<div class="row">\n' +
    '								<div class="input-field col s5">\n' +
    '									<label>{{\'SelectExcludeDays\' | translate}}</label>\n' +
    '								</div>\n' +
    '								<div class="input-field col s7">\n' +
    '									<!-- <input type="text" class="validate"> -->\n' +
    '									<select style="width:100% !important" class="form-control select-tags pmd-select2-tags" multiple ng-model="SelectedDays"\n' +
    '									 ng-options="day as day.dayNameDictionary[selectedLanguage] for day in dayList">\n' +
    '									</select>\n' +
    '								</div>\n' +
    '							</div>\n' +
    '\n' +
    '							<div class="row">\n' +
    '								<div class="col s6">\n' +
    '									<p>\n' +
    '										<input type="checkbox" id="test5" ng-model="isBreakFast" />\n' +
    '										<label for="test5">{{\'IsBreakFast\' | translate}}</label>\n' +
    '									</p>\n' +
    '								</div>\n' +
    '								<div class="col s6">\n' +
    '									<p>\n' +
    '										<input type="checkbox" id="test6" ng-model="isSnack" />\n' +
    '										<label for="test6">{{\'IsSnack\' | translate}}</label>\n' +
    '									</p>\n' +
    '								</div>\n' +
    '							</div>\n' +
    '							<div class="row">\n' +
    '								<div class="input-field col s12">\n' +
    '									<input name="itemDatetime" required ng-model="itemDatetime" type="text" id="startdate" class="form-control" />\n' +
    '									<label for="from">Check In</label>\n' +
    '								</div>\n' +
    '							</div>\n' +
    '							<div class="row">\n' +
    '								<div class="col s6">\n' +
    '									<div ng-messages="cutomizeProgram.itemDatetime.$error">\n' +
    '										<div ng-if="cutomizeProgram.itemDatetime.$error.required && !cutomizeProgram.itemDatetime.$pristine">{{\'requiredField\' | translate}}</div>\n' +
    '									</div>\n' +
    '								</div>\n' +
    '							</div>\n' +
    '							<div class="row">\n' +
    '								<div class="input-field col s12">\n' +
    '									<input ng-disabled="cutomizeProgram.$invalid  || settingsPrepService.minNoDaysPerProgram > programDaysCount" type="submit"\n' +
    '									 class="form-btn" ng-click="submitCustomise()">\n' +
    '								</div>\n' +
    '							</div>\n' +
    '\n' +
    '						</form>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '				<!--END TYPOGRAPHY SECTION-->\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '	<!--End Check Availability SECTION-->\n' +
    '	<!--HOTEL ROOMS SECTION-->\n' +
    '	<div class="hom1 hom-com pad-bot-40">\n' +
    '		<div class="container">\n' +
    '			<div class="row">\n' +
    '				<div class="hom1-title">\n' +
    '					<h2>{{\'Meals\' | translate}}</h2>\n' +
    '					<div class="head-title">\n' +
    '						<div class="hl-1"></div>\n' +
    '						<div class="hl-2"></div>\n' +
    '						<div class="hl-3"></div>\n' +
    '					</div>\n' +
    '					<p>{{\'MealsDescription\' | translate}}</p>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '			<div class="row">\n' +
    '				<div class="to-ho-hotel">\n' +
    '					<!-- HOTEL GRID -->\n' +
    '					<div ng-repeat="n in [] | range:6">\n' +
    '						<div ng-if="mealsPrepService[n] != undefined" class="col-md-4">\n' +
    '							<div class="to-ho-hotel-con">\n' +
    '								<div class="to-ho-hotel-con-1">\n' +
    '									<div class="hom-hot-av-tic" style="cursor: pointer !important;" ng-click="bookMeal(mealsPrepService[n]);">{{\'Book\' | translate}}</div>\n' +
    '									<img src="https://fithouseksa.com/wp-content/uploads/2018/07/Grilled-steak.png" alt="">\n' +
    '								</div>\n' +
    '								<div class="to-ho-hotel-con-23">\n' +
    '									<div class="to-ho-hotel-con-2">\n' +
    '										<a>\n' +
    '											<h4>{{mealsPrepService[n].mealNameDictionary[selectedLanguage]}}</h4>\n' +
    '										</a>\n' +
    '									</div>\n' +
    '									<div class="to-ho-hotel-con-3">\n' +
    '										<ul>\n' +
    '											<li>{{mealsPrepService[n].mealDescriptionDictionary[selectedLanguage]}}\n' +
    '												<div class="dir-rat-star ho-hot-rat-star"> Rating:\n' +
    '													<i class="fa fa-star" aria-hidden="true"></i>\n' +
    '													<i class="fa fa-star" aria-hidden="true"></i>\n' +
    '													<i class="fa fa-star" aria-hidden="true"></i>\n' +
    '													<i class="fa fa-star" aria-hidden="true"></i>\n' +
    '													<i class="fa fa-star-o" aria-hidden="true"></i>\n' +
    '												</div>\n' +
    '											</li>\n' +
    '											<li>\n' +
    '												<span class="ho-hot-pri-dis"></span>\n' +
    '												<span class="ho-hot-pri">{{mealsPrepService[n].mealPrice}}</span>\n' +
    '											</li>\n' +
    '										</ul>\n' +
    '									</div>\n' +
    '								</div>\n' +
    '							</div>\n' +
    '						</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '	<!--END HOTEL ROOMS-->\n' +
    '\n' +
    '	<!--TOP SECTION-->\n' +
    '	<div class="inn-body-section pad-bot-55">\n' +
    '		<div class="container">\n' +
    '			<div class="row">\n' +
    '				<div class="page-head">\n' +
    '					<h2>{{\'Programs\' | translate}}</h2>\n' +
    '					<div class="head-title">\n' +
    '						<div class="hl-1"></div>\n' +
    '						<div class="hl-2"></div>\n' +
    '						<div class="hl-3"></div>\n' +
    '					</div>\n' +
    '					<p>{{\'ProgramsDescription\' | translate}}</p>\n' +
    '				</div>\n' +
    '				<!--ROOM SECTION-->\n' +
    '				<div ng-repeat="n in [] | range:6">\n' +
    '					<div ng-if="programPrepService[n] != undefined" class="room">\n' +
    '						<div class="ribbon ribbon-top-left">\n' +
    '							<span>{{\'Program\' | translate}}</span>\n' +
    '						</div>\n' +
    '						<!--ROOM IMAGE-->\n' +
    '						<div class="r1 r-com">\n' +
    '							<img src="https://fithouseksa.com/wp-content/uploads/2018/07/fithouse-icons6.png" alt="" />\n' +
    '						</div>\n' +
    '						<!--ROOM RATING-->\n' +
    '						<div class="r2 r-com">\n' +
    '							<h4>{{programPrepService[n].programNameDictionary[selectedLanguage]}}</h4>\n' +
    '							<div class="r2-ratt">\n' +
    '								<i class="fa fa-star"></i>\n' +
    '								<i class="fa fa-star"></i>\n' +
    '								<i class="fa fa-star"></i>\n' +
    '								<i class="fa fa-star"></i>\n' +
    '								<i class="fa fa-star"></i>\n' +
    '								<img src="images/h-trip.png" alt="" />\n' +
    '								<br>\n' +
    '								<span>{{programPrepService[n].programDescriptionDictionary[selectedLanguage]}}</span>\n' +
    '							</div>\n' +
    '							<ul>\n' +
    '								<li></li>\n' +
    '								<li></li>\n' +
    '								<li></li>\n' +
    '								<li></li>\n' +
    '							</ul>\n' +
    '						</div>\n' +
    '						<!--ROOM AMINITIES-->\n' +
    '						<div class="r3 r-com">\n' +
    '							<ul>\n' +
    '								<li>{{\'ProgramDays\' | translate}}: {{programPrepService[n].programDays}}</li>\n' +
    '								<li>{{\'MealPerDay\' | translate}}: {{programPrepService[n].noOfMeals}}</li>\n' +
    '								<li></li>\n' +
    '								<li></li>\n' +
    '								<li></li>\n' +
    '							</ul>\n' +
    '						</div>\n' +
    '						<!--ROOM PRICE-->\n' +
    '						<div class="r4 r-com">\n' +
    '							<p></p>\n' +
    '							<p>\n' +
    '								<span class="room-price-1">{{programPrepService[n].price}}</span>\n' +
    '								<span class="room-price"></span>\n' +
    '							</p>\n' +
    '							<p>{{\'NonRefundable\' | translate}}</p>\n' +
    '						</div>\n' +
    '						<!--ROOM BOOKING BUTTON-->\n' +
    '						<div class="r5 r-com">\n' +
    '							<div class="r2-available">Available</div>\n' +
    '							<p></p>\n' +
    '							<a style="cursor: pointer !important;" ng-click="bookProgram(programPrepService[n]);" class="inn-room-book">{{\'Book\' | translate}}</a>\n' +
    '						</div>\n' +
    '					</div>\n' +
    '					<!--END ROOM SECTION-->\n' +
    '				</div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '\n' +
    '</section>\n' +
    '<!-- </form> -->\n' +
    '<!--END HEADER SECTION-->');
}]);
