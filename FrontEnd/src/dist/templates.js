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
    '                                <a ng-init="counterDay=counterDay+1;" data-toggle="collapse" data-parent="#accordion6"\n' +
    '                                    ng-init="n=false"\n' +
    '                                    ng-click="n=!n;showDetails = ! showDetails; CustomCtrl.showDDL(); "\n' +
    '                                    aria-expanded="true" aria-controls="collapseOne6" data-expandable="false">\n' +
    '                                    <div class="panel-heading" role="tab" id="headingOne">\n' +
    '                                        <h4 class="panel-title">\n' +
    '\n' +
    '                                            {{\'Day\' | translate}} : {{counterDay=$index+1}}\n' +
    '                                            <!-- <i class="material-icons md-dark pmd-sm pmd-accordion-arrow">keyboard_arrow_down</i> -->\n' +
    '\n' +
    '                                        </h4>\n' +
    '\n' +
    '                                    </div>\n' +
    '                                </a>\n' +
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
    '                                                    <!-- <table class="table pmd-table table-hover">\n' +
    '                                                        <thead>\n' +
    '                                                            <tr>\n' +
    '                                                                <th>{{\'Name\' | translate}}</th>\n' +
    '                                                                <th>{{\'carb\' | translate}}</th>\n' +
    '                                                                <th>{{\'calories\' | translate}}</th>\n' +
    '                                                                <th>{{\'protein\' | translate}}</th>\n' +
    '                                                                <th>{{\'costlbl\' | translate}}</th>\n' +
    '                                                                <th>{{\'Pricelbl\' | translate}}</th>\n' +
    '                                                                <th>{{\'vat\' | translate}}</th>\n' +
    '                                                                <th>{{\'Total\' | translate}}</th>\n' +
    '                                                                <th></th>\n' +
    '                                                            </tr>\n' +
    '                                                        </thead>\n' +
    '                                                        <tbody>\n' +
    '                                                            <tr ng-repeat="meal in itemModel">\n' +
    '                                                                <td data-title="Name" width="15%">\n' +
    '                                                                    {{meal.itemNameDictionary[selectedLanguage] | limitTo:10}}\n' +
    '                                                                </td>\n' +
    '                                                                <td data-title="Description">{{meal.carbs}}</td>\n' +
    '                                                                <td data-title="Description">{{meal.calories}}</td>\n' +
    '                                                                <td data-title="Description">{{meal.protein}}</td>\n' +
    '                                                                <td data-title="Description">{{meal.cost}}</td>\n' +
    '                                                                <td data-title="Description">{{meal.price}}</td>\n' +
    '                                                                <td data-title="Description">{{meal.vat}}</td>\n' +
    '                                                                <td data-title="totalPrice">{{meal.totalPrice}}</td>\n' +
    '\n' +
    '                                                            </tr>\n' +
    '                                                        </tbody>\n' +
    '                                                    </table> -->\n' +
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
  $templateCache.put('./app/GlobalAdmin/customProgram/templates/edit.html',
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
    '					<label for="first-name">{{\'mealDiscount\' | translate}} </label>\n' +
    '					<input type="number" ng-change="editMealCtrl.calclulateDiscount()" class="mat-input form-control" name="mealDiscount"\n' +
    '					 ng-model="editMealCtrl.meal.mealDiscount" minlength="1" ng-maxlength="3">\n' +
    '					<div ng-messages="editMealForm.meal.mealDiscount.$error">\n' +
    '						<div ng-if="(editMealForm.mealDiscount.$error.minlength || editMealForm.mealDiscount.$error.maxlength)">{{\'mealDiscountLengthError\' | translate}}</div>					\n' +
    '					</div>\n' +
    '				</div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '				<div class="col-md-3 form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '\n' +
    '					<label for="first-name">{{\'mealtotalDiscount\' | translate}} </label>\n' +
    '					<input type="number" ng-change="editMealCtrl.calclulatetotalDiscount()" class="mat-input form-control" name="mealtotalDiscount"\n' +
    '					 ng-model="editMealCtrl.mealtotalDiscount" minlength="1" maxlength="12">\n' +
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
  $templateCache.put('./app/GlobalAdmin/user/templates/about-us.html',
    '	\n' +
    '	\n' +
    '	<!--HEADER SECTION-->\n' +
    '	<section>\n' +
    '	\n' +
    '		<!--TOP SECTION-->\n' +
    '		<div class="inn-banner" style="background: url(http://mezab-al-rahma.azurewebsites.net/api/Templates/{{home.templateId}}/Image) no-repeat">\n' +
    '			<div class="container">\n' +
    '				<div class="row">\n' +
    '					<h4>{{\'AboutUs\' | translate}}</h4>\n' +
    '					\n' +
    '					<ul>\n' +
    '						<li><a href="#">{{\'Home\'| translate}}</a>\n' +
    '						</li>\n' +
    '						<li><a href="#">{{\'AboutUs\' | translate}}</a>\n' +
    '						</li>\n' +
    '					</ul>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '		<div class="inn-body-section">\n' +
    '			<div class="container">\n' +
    '				<div class="row">\n' +
    '					<div class="page-head">\n' +
    '						<!-- <h2>{{aboutUs.headerDictionary[selectedLanguage]}}</h2> -->\n' +
    '						<h2>{{\'AboutUs\' | translate}}</h2>\n' +
    '						<div></div>\n' +
    '						<div class="head-title">\n' +
    '							<div class="hl-1"></div>\n' +
    '							<div class="hl-2"></div>\n' +
    '							<div class="hl-3"></div>\n' +
    '						</div>\n' +
    '						<p>{{aboutUs.titleDictionary[selectedLanguage]}}</p>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '				<div class="row">\n' +
    '					<div class="col-md-6">\n' +
    '						<div class="about-left">\n' +
    '							<h2>{{aboutUs.subTitleDictionary[selectedLanguage]}}<span> {{aboutUs.titleColoredDictionary[selectedLanguage]}}</span></h2>\n' +
    '							<h4>{{aboutUs.boldArticleDictionary[selectedLanguage]}}</h4>\n' +
    '							<p>{{aboutUs.descriptionDictionary[selectedLanguage]}}</p>\n' +
    '							<a>{{\'Mobile\' | translate}} {{contactUs.companyNumber}}</a> </div>\n' +
    '					</div>\n' +
    '					<div class="col-md-6">\n' +
    '						<div class="about-right"> <img ng-src="http://mezab-al-rahma.azurewebsites.net/api/Templates/{{aboutUs.templateId}}/Image" alt=""> </div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '		<!--TOP SECTION-->\n' +
    '		\n' +
    '	</section>\n' +
    '	<!--END HEADER SECTION-->\n' +
    '\n' +
    '	<!--ALL SCRIPT FILES-->\n' +
    '	<!-- <script src="js/jquery.min.js"></script>\n' +
    '	<script src="js/jquery-ui.js"></script>\n' +
    '	<script src="js/angular.min.js"></script>\n' +
    '	<script src="js/bootstrap.js" type="text/javascript"></script>\n' +
    '	<script src="js/materialize.min.js" type="text/javascript"></script>\n' +
    '	<script src="js/jquery.mixitup.min.js" type="text/javascript"></script>\n' +
    '	<script src="js/custom.js"></script> -->\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/user/templates/contact-us.html',
    '\n' +
    '	<!--HEADER SECTION-->\n' +
    '	<section>\n' +
    '	\n' +
    '		<!--TOP SECTION-->\n' +
    '		<div class="inn-banner" style="background: url(http://mezab-al-rahma.azurewebsites.net/api/Templates/{{home.templateId}}/Image) no-repeat">		\n' +
    '			<div class="container">\n' +
    '				<div class="row">\n' +
    '					<h4>{{\'ContactUs\' | translate}}</h4>\n' +
    '					\n' +
    '					<ul>\n' +
    '						<li><a href="#">{{\'Home\'| translate}}</a>\n' +
    '						</li>\n' +
    '						<li><a href="#">{{\'ContactUs\' | translate}}</a>\n' +
    '						</li>\n' +
    '					</ul>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '		<div class="inn-body-section">\n' +
    '			<div class="container">\n' +
    '				<div class="row">\n' +
    '					<div class="page-head">\n' +
    '						<h2>{{\'ContactUs\' | translate}}</h2>\n' +
    '						<div class="head-title">\n' +
    '							<div class="hl-1"></div>\n' +
    '							<div class="hl-2"></div>\n' +
    '							<div class="hl-3"></div>\n' +
    '						</div>\n' +
    '						<!-- <p>Quisque at volutpat nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p> -->\n' +
    '					</div>\n' +
    '				</div>\n' +
    '				\n' +
    '				<div class="row">\n' +
    '					<div class="col-md-6 col-sm-9 col-xs-12 new-con rtlCLass">\n' +
    '						<div ng-show ="contactUs.showEmail == true">\n' +
    '							<h2><span>{{\'Email\' | translate}}</span>{{contactUs.email}}</h2>\n' +
    '						</div>\n' +
    '						<div ng-show ="contactUs.showOwnerEmail == true">\n' +
    '							<h2><span>{{\'Email\' | translate}}</span>{{contactUs.ownerEmail}}</h2>\n' +
    '						</div>\n' +
    '						<div ng-show ="contactUs.showWhatsApp == true">\n' +
    '							<h2><span>{{\'WhatsApp\' | translate}}</span>{{contactUs.whatsAppNumber}}</h2>\n' +
    '						</div>\n' +
    '						<div ng-show ="contactUs.showMobile == true">\n' +
    '							<h2><span>{{\'Mobile\' | translate}}</span>{{contactUs.companyNumber}}</h2>\n' +
    '						</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '		<div class="row">\n' +
    '			<div class="contact-map">\n' +
    '				<iframe ng-src="{{hotelLocationUrl}}" allowfullscreen></iframe>\n' +
    '				<!-- <iframe ng-src="{{contactUs.location}}" allowfullscreen></iframe>				 -->\n' +
    '			</div>\n' +
    '		</div>\n' +
    '		<!--TOP SECTION-->\n' +
    '\n' +
    '	</section>\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/user/templates/home.html',
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
    '							<div class="row">\n' +
    '								<div class="input-field col s6">\n' +
    '									<input required type="text" class="validate" name="programName" ng-model="programName" minlength="1" maxlength="50">\n' +
    '									<label>{{\'ProgramName\' | translate}}</label>\n' +
    '								</div>\n' +
    '								<div class="input-field col s6">\n' +
    '									<input required type="text" class="validate" name="programDescription" ng-model="programDescription" minlength="1" maxlength="50">\n' +
    '									<label>{{\'ProgramDescription\' | translate}}</label>\n' +
    '								</div>\n' +
    '							</div>\n' +
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
    '								<div class="input-field col s12">\n' +
    '									<!-- <input type="text" class="validate"> -->\n' +
    '									<label>{{\'SelectExcludeDays\' | translate}}</label>\n' +
    '									<select ng-change="addProgramCtrl.ValidateExcludes()" style="width:100% !important" class="form-control select-tags pmd-select2-tags"\n' +
    '									 multiple ng-model="addProgramCtrl.SelectedDays" ng-options="day as day.dayNameDictionary[selectedLanguage] for day in addProgramCtrl.dayList">\n' +
    '									</select>\n' +
    '								</div>\n' +
    '							</div>\n' +
    '							<div class="row">\n' +
    '								<div class="input-field col s6">\n' +
    '									<input required numbers-only type="text" class="validate" name="mealPerDay" ng-model="mealPerDay" minlength="1" maxlength="2">\n' +
    '									<label>{{\'MealPerDay\' | translate}}</label>\n' +
    '								</div>\n' +
    '								<div class="input-field col s6">\n' +
    '									<input required numbers-only type="text" class="validate" name="programDaysCount" ng-model="programDaysCount" minlength="1" maxlength="2">\n' +
    '									<label>{{\'ProgramDaysCount\' | translate}}</label>\n' +
    '									<div ng-show="settingsPrepService.minNoDaysPerProgram > programDaysCount">\n' +
    '										<p>{{\'minAllowedDays= \' | translate}} {{settingsPrepService.minNoDaysPerProgram}}</p>\n' +
    '									</div>\n' +
    '								</div>\n' +
    '							</div>\n' +
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
    '							\n' +
    '							<!-- <div class="col-md-6">\n' +
    '									<div class="head-typo typo-com collap-expand form-ch-box">\n' +
    '										<h2>Checkboxes</h2>\n' +
    '										<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>\n' +
    '										<form action="#">\n' +
    '											<p>\n' +
    '												<input type="checkbox" id="test5" />\n' +
    '												<label for="test5">Red</label>\n' +
    '											</p>\n' +
    '											<p>\n' +
    '												<input type="checkbox" id="test6" checked="checked" />\n' +
    '												<label for="test6">Yellow</label>\n' +
    '											</p>\n' +
    '											<p>\n' +
    '												<input type="checkbox" class="filled-in" id="filled-in-box" checked="checked" />\n' +
    '												<label for="filled-in-box">Filled in</label>\n' +
    '											</p>\n' +
    '											<p>\n' +
    '												<input type="checkbox" id="indeterminate-checkbox" />\n' +
    '												<label for="indeterminate-checkbox">Indeterminate Style</label>\n' +
    '											</p>\n' +
    '											<p>\n' +
    '												<input type="checkbox" id="test7" checked="checked" disabled="disabled" />\n' +
    '												<label for="test7">Green</label>\n' +
    '											</p>\n' +
    '											<p>\n' +
    '												<input type="checkbox" id="test8" disabled="disabled" />\n' +
    '												<label for="test8">Brown</label>\n' +
    '											</p>\n' +
    '										</form>\n' +
    '									</div>\n' +
    '								</div> -->\n' +
    '							<div class="row">\n' +
    '								<div class="input-field col s12">\n' +
    '									<input ng-disabled="cutomizeProgram.$invalid  || settingsPrepService.minNoDaysPerProgram > programDaysCount" type="submit" class="form-btn" ng-click="submitCustomise()">\n' +
    '								</div>\n' +
    '							</div>\n' +
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
    '									<div class="hom-hot-av-tic"> Available Tickets: 42 </div>\n' +
    '									<img src="https://fithouseksa.com/wp-content/uploads/2018/07/Grilled-steak.png" alt="">\n' +
    '								</div>\n' +
    '								<div class="to-ho-hotel-con-23">\n' +
    '									<div class="to-ho-hotel-con-2">\n' +
    '										<a href="all-rooms.html">\n' +
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
    '							<a href="room-details-block.html" class="inn-room-book">Book</a>\n' +
    '						</div>\n' +
    '					</div>\n' +
    '					<!--END ROOM SECTION-->\n' +
    '				</div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '	<!--TOP SECTION-->\n' +
    '	<!--TOP SECTION-->\n' +
    '	<!-- <div class="offer">\n' +
    '		<div class="container">\n' +
    '			<div class="row">\n' +
    '				<div class="col-md-6">\n' +
    '					<div class="offer-l">\n' +
    '						<span class="ol-1"></span>\n' +
    '						<span class="ol-2">\n' +
    '							<i class="fa fa-star"></i>\n' +
    '							<i class="fa fa-star"></i>\n' +
    '							<i class="fa fa-star"></i>\n' +
    '							<i class="fa fa-star"></i>\n' +
    '							<i class="fa fa-star"></i>\n' +
    '						</span>\n' +
    '						<span class="ol-4">Standardized Budget Rooms</span>\n' +
    '						<span class="ol-3"></span>\n' +
    '						<span class="ol-5">$99/-</span>\n' +
    '						<ul>\n' +
    '							<li>\n' +
    '								<a href="#!" class="waves-effect waves-light btn-large offer-btn">\n' +
    '									<img src="images/icon/dis1.png" alt="">\n' +
    '								</a>\n' +
    '								<span>Free WiFi</span>\n' +
    '							</li>\n' +
    '							<li>\n' +
    '								<a href="#!" class="waves-effect waves-light btn-large offer-btn">\n' +
    '									<img src="images/icon/h2.png" alt=""> </a>\n' +
    '								<span>Breakfast</span>\n' +
    '							</li>\n' +
    '							<li>\n' +
    '								<a href="#!" class="waves-effect waves-light btn-large offer-btn">\n' +
    '									<img src="images/icon/dis3.png" alt=""> </a>\n' +
    '								<span>Pool</span>\n' +
    '							</li>\n' +
    '							<li>\n' +
    '								<a href="#!" class="waves-effect waves-light btn-large offer-btn">\n' +
    '									<img src="images/icon/dis4.png" alt=""> </a>\n' +
    '								<span>Television</span>\n' +
    '							</li>\n' +
    '							<li>\n' +
    '								<a href="#!" class="waves-effect waves-light btn-large offer-btn">\n' +
    '									<img src="images/icon/dis5.png" alt=""> </a>\n' +
    '								<span>GYM</span>\n' +
    '							</li>\n' +
    '						</ul>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '				<div class="col-md-6">\n' +
    '					<div class="offer-r">\n' +
    '						<div class="or-1">\n' +
    '							<span class="or-11">go</span>\n' +
    '							<span class="or-12">Stays</span>\n' +
    '						</div>\n' +
    '						<div class="or-2">\n' +
    '							<span class="or-21">Get</span>\n' +
    '							<span class="or-22">70%</span>\n' +
    '							<span class="or-23">Off</span>\n' +
    '							<span class="or-24">use code: RG5481WERQ</span>\n' +
    '							<span class="or-25"></span>\n' +
    '						</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</div> -->\n' +
    '</section>\n' +
    '<!-- </form> -->\n' +
    '<!--END HEADER SECTION-->');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/user/templates/leadership.html',
    '<!DOCTYPE html>\n' +
    '<html lang="en">\n' +
    '\n' +
    '<head>\n' +
    '	<title>Mezab Al-Rahma</title>\n' +
    '	<!-- META TAGS -->\n' +
    '	<meta charset="utf-8">\n' +
    '	<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    '	<!-- FAV ICON(BROWSER TAB ICON) -->\n' +
    '	<link rel="shortcut icon" href="images/fav.ico" type="image/x-icon">\n' +
    '	<!-- GOOGLE FONT -->\n' +
    '	<link href="https://fonts.googleapis.com/css?family=Poppins%7CQuicksand:500,700" rel="stylesheet">\n' +
    '	<!-- FONTAWESOME ICONS -->\n' +
    '	<link rel="stylesheet" href="css/font-awesome.min.css">\n' +
    '	<!-- ALL CSS FILES -->\n' +
    '	<link href="css/materialize.css" rel="stylesheet">\n' +
    '	<link href="css/style.css" rel="stylesheet">\n' +
    '	<link href="css/bootstrap.css" rel="stylesheet" type="text/css" />\n' +
    '	<!-- RESPONSIVE.CSS ONLY FOR MOBILE AND TABLET VIEWS -->\n' +
    '	<link href="css/responsive.css" rel="stylesheet">\n' +
    '	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->\n' +
    '	<!-- WARNING: Respond.js doesn\'t work if you view the page via file:// -->\n' +
    '	<!--[if lt IE 9]>\n' +
    '	<script src="js/html5shiv.js"></script>\n' +
    '	<script src="js/respond.min.js"></script>\n' +
    '	<![endif]-->\n' +
    '\n' +
    '</head>\n' +
    '\n' +
    '<body data-ng-app="">\n' +
    '	<!--HEADER SECTION-->\n' +
    '	<section>\n' +
    '		<!--TOP BANNER-->\n' +
    '		<div class="inn-banner" style="background: url(http://mezab-al-rahma.azurewebsites.net/api/Templates/{{home.templateId}}/Image) no-repeat">		\n' +
    '			<div class="container">\n' +
    '				<div class="row">\n' +
    '					<h4>{{\'Leadership\'| translate}}</h4>\n' +
    '					<!-- <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. -->\n' +
    '						<p>\n' +
    '							<ul>\n' +
    '								<li><a href="#">{{\'Home\'| translate}}</a>\n' +
    '								</li>\n' +
    '								<li><a href="#">{{\'Leadership\'| translate}}</a>\n' +
    '								</li>\n' +
    '							</ul>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '		<!--TOP SECTION-->\n' +
    '		<div class="inn-body-section pad-bot-55">\n' +
    '			<div class="container">\n' +
    '				<div class="row">\n' +
    '					<div class="page-head">\n' +
    '						<h2>{{\'Leadership\'| translate}}</h2>\n' +
    '						<div class="head-title">\n' +
    '							<div class="hl-1"></div>\n' +
    '							<div class="hl-2"></div>\n' +
    '							<div class="hl-3"></div>\n' +
    '						</div>\n' +
    '						<!-- <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p> -->\n' +
    '					</div>\n' +
    '					<!--TYPOGRAPHY SECTION-->\n' +
    '					<div class="col-md-8 rtlCLass">\n' +
    '						<div class="head-typo typo-com">\n' +
    '							<h2>{{\'LeadershipTeam\' | translate}}</h2>\n' +
    '							<!-- <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. </p> -->\n' +
    '							<!--EVENT-->\n' +
    '							<div class="aminities">\n' +
    '								<ul>\n' +
    '									<div ng-repeat="member in leadership">\n' +
    '											<li class="aminities-line"> <i class="fa fa-map-marker" aria-hidden="true"></i>\n' +
    '												<div class="row amini-body">\n' +
    '													<div class="col-md-4"> <img ng-src="http://mezab-al-rahma.azurewebsites.net/api/Templates/{{member.templateId}}/Image" alt="" /> </div>\n' +
    '													<!-- <div class="col-md-4"> <img ng-src="localhost:9091/img/ami/{{member.templateId}}.jpg" alt="" /> </div> -->\n' +
    '													<div class="col-md-8">\n' +
    '														<h4>{{member.titleDictionary[selectedLanguage]}}</h4>\n' +
    '														<p>{{member.descriptionDictionary[selectedLanguage]}}</p>\n' +
    '													</div>\n' +
    '												</div>\n' +
    '											</li>\n' +
    '									</div>\n' +
    '									\n' +
    '								</ul>\n' +
    '							</div>\n' +
    '							<!--END EVENT-->\n' +
    '						</div>\n' +
    '					</div>\n' +
    '					<div class="col-md-4">\n' +
    '						<!-- <div class="head-typo typo-com">\n' +
    '							<h2>One Column</h2>\n' +
    '							<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. </p>\n' +
    '						</div> -->\n' +
    '					</div>\n' +
    '					<!--END TYPOGRAPHY SECTION-->\n' +
    '				</div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '		<!--TOP SECTION-->\n' +
    '\n' +
    '	</section>\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/user/templates/searchUser.html',
    '<script type="text/javascript">\n' +
    '	$(document).ready(function() {\n' +
    '        $(".select-with-search").select2({\n' +
    '			theme: "bootstrap"\n' +
    '		});\n' +
    '	});\n' +
    '</script>\n' +
    '\n' +
    '<div class="modal-body">\n' +
    '    <h2 class="pmd-card-title-text">{{\'user\' | translate}}</h2>\n' +
    '    <br>\n' +
    '    <form class="form-horizontal" name="newUserForm">\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'SelectUser\' | translate}}</label>\n' +
    '            <select style="width:100% !important" class="form-control select-with-search pmd-select2" \n' +
    '            ng-model="searchUserCtrl.selectedUser"\n' +
    '            ng-options="user as user.userFirstName for user in searchUserCtrl.userList">\n' +
    '            </select>\n' +
    '         </div>\n' +
    '\n' +
    '    </form>\n' +
    '    <!-- <p>{{searchUserCtrl.selectedUser}}</p> -->\n' +
    '    \n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'CodeLbl\' | translate}}</label>\n' +
    '        <input disabled type="text" class="mat-input form-control pmd-textfield-floating-label" ng-model="searchUserCtrl.selectedUser.userCode">\n' +
    '        \n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'FirstNameLbl\' | translate}}</label>\n' +
    '        <input disabled type="text" class="mat-input form-control pmd-textfield-floating-label" ng-model="searchUserCtrl.selectedUser.userFirstName">\n' +
    '        \n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'SecondNameLbl\' | translate}}</label>\n' +
    '        <input disabled type="text" class="mat-input form-control pmd-textfield-floating-label" ng-model="searchUserCtrl.selectedUser.userSecondName">\n' +
    '        \n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'FamilyNameLbl\' | translate}}</label>\n' +
    '        <input disabled type="text" class="mat-input form-control pmd-textfield-floating-label" ng-model="searchUserCtrl.selectedUser.userFamilyName">\n' +
    '        \n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'NationalityLbl\' | translate}}</label>\n' +
    '        <input disabled type="text" class="mat-input form-control pmd-textfield-floating-label" ng-model="searchUserCtrl.selectedUser.userNationality">\n' +
    '        \n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'JobLbl\' | translate}}</label>\n' +
    '        <input disabled type="text" class="mat-input form-control pmd-textfield-floating-label" ng-model="searchUserCtrl.selectedUser.userJob">\n' +
    '        \n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'CountryLbl\' | translate}}</label>\n' +
    '        <input disabled type="text" class="mat-input form-control pmd-textfield-floating-label" ng-model="searchUserCtrl.selectedUser.userCountry">\n' +
    '        \n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'CityLbl\' | translate}}</label>\n' +
    '        <input disabled type="text" class="mat-input form-control pmd-textfield-floating-label" ng-model="searchUserCtrl.selectedUser.userCity">\n' +
    '        \n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'MobileNumberLbl\' | translate}}</label>\n' +
    '        <input disabled type="text" class="mat-input form-control pmd-textfield-floating-label" ng-model="searchUserCtrl.selectedUser.userMobile">\n' +
    '        \n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'EmailLbl\' | translate}}</label>\n' +
    '        <input disabled type="text" class="mat-input form-control pmd-textfield-floating-label" ng-model="searchUserCtrl.selectedUser.userEmail">\n' +
    '        \n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'GenderLbl\' | translate}}</label>\n' +
    '        <br>\n' +
    '        <div class="mat-input form-control pmd-textfield-floating-label" ng-if="searchUserCtrl.selectedUser.userGender == 1">{{\'MaleLbl\' | translate}}</div>\n' +
    '        <div class="mat-input form-control pmd-textfield-floating-label" ng-if="searchUserCtrl.selectedUser.userGender == 0">{{\'FemaleLbl\' | translate}}</div>\n' +
    '        \n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '    </div>');
}]);
