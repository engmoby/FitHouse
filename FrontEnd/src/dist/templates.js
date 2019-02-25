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
    '                            <!-- Switch -->\n' +
    '                            <!-- <div class="switch">\n' +
    '                                <label> {{\'Delivery\' | translate}}\n' +
    '                                    <input type="checkbox" ng-model="CustomCtrl.orderType.type"\n' +
    '                                        ng-click="CustomCtrl.changeOrderType()">\n' +
    '                                    <span class="lever"></span>\n' +
    '                                    {{\'PickUp\' | translate}} </label>\n' +
    '                            </div> -->\n' +
    '                            {{CustomCtrl.orderType.type}}\n' +
    '\n' +
    '                            <p>\n' +
    '                                <input name="group1" ng-click="CustomCtrl.changeOrderType()"\n' +
    '                                    ng-model="CustomCtrl.orderType.type" type="radio" id="test1" />\n' +
    '                                <label for="test1">{{\'Delivery\' | translate}}</label>\n' +
    '                            </p>\n' +
    '                            <p>\n' +
    '                                <input name="group1" ng-click="CustomCtrl.changeOrderType()"\n' +
    '                                    ng-model="CustomCtrl.orderType.type" type="radio" id="test2" />\n' +
    '                                <label for="test2">{{\'PickUp\' | translate}}</label>\n' +
    '                            </p>\n' +
    '                            <div class="row" ng-if="CustomCtrl.orderType.type == \'delivery\'">\n' +
    '                                <div class="col-md-6">\n' +
    '                                    <div>\n' +
    '                                        <div\n' +
    '                                            class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                            <label for="first-name">{{\'SelectAddress\' | translate}}</label>\n' +
    '\n' +
    '                                            <div ng-repeat="address in CustomCtrl.userAddresses">\n' +
    '                                                <label>\n' +
    '                                                    <input name="group2" ng-change="CustomCtrl.addressInfo(address)"\n' +
    '                                                        type="radio" ng-model="CustomCtrl.addresses.address"\n' +
    '                                                        value="{{address.addressId}}"\n' +
    '                                                        ng-required="CustomCtrl.orderType.type == \'delivery\'">\n' +
    '                                                    <label for="addressRadio{{address.addressId}}">\n' +
    '                                                        {{\'appartmentNo\' | translate}}: {{address.appartmentNo}}\n' +
    '                                                        <br> {{\'Floor\' | translate}} : {{address.floor}}\n' +
    '                                                        <br> {{\'appartmentNo\' | translate}} :\n' +
    '                                                        {{address.description}}\n' +
    '                                                    </label>\n' +
    '                                                </label>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '\n' +
    '                            <div ng-show="CustomCtrl.orderType.type == \'pickup\'">\n' +
    '                                <div class="row">\n' +
    '                                    <div class="input-field col s6">\n' +
    '                                        <select style="width:100% !important"\n' +
    '                                            ng-required="CustomCtrl.orderType.type == \'pickup\'"\n' +
    '                                            class=" select-tags form-control pmd-select2-tags" name="country"\n' +
    '                                            ng-change="CustomCtrl.countryChange()"\n' +
    '                                            ng-model="CustomCtrl.selectedCountryId"\n' +
    '                                            ng-options="group.countryId as group.titleDictionary[selectedLanguage] for group in CustomCtrl.counties">\n' +
    '                                        </select>\n' +
    '                                        <span ng-show=\'stepTwoProgramForm.country.$error.required\'>\n' +
    '                                            Email must be valid.\n' +
    '                                        </span>\n' +
    '                                    </div>\n' +
    '                                    <div class="input-field col s6">\n' +
    '                                        <select style="width:100% !important"\n' +
    '                                            ng-required="CustomCtrl.orderType.type == \'pickup\' || CustomCtrl.selectedCountryId > 0"\n' +
    '                                            class="select-tags form-control pmd-select2-tags"\n' +
    '                                            ng-change="CustomCtrl.regionChange()" ng-model="CustomCtrl.selectedRegionId"\n' +
    '                                            ng-options="group.regionId as group.titleDictionary[selectedLanguage] for group in CustomCtrl.regions">\n' +
    '                                        </select>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                                <div class="row">\n' +
    '                                    <div class="input-field col s6">\n' +
    '                                        <select\n' +
    '                                            ng-required="CustomCtrl.orderType.type == \'pickup\'  || CustomCtrl.selectedRegionId > 0"\n' +
    '                                            style="width:100% !important"\n' +
    '                                            class="select-tags form-control pmd-select2-tags"\n' +
    '                                            ng-change="CustomCtrl.cityChange()" ng-model="CustomCtrl.selectedCityId"\n' +
    '                                            ng-options="group.cityId as group.titleDictionary[selectedLanguage] for group in CustomCtrl.cities">\n' +
    '                                        </select>\n' +
    '                                    </div>\n' +
    '                                    <div class="input-field col s6">\n' +
    '                                        <select\n' +
    '                                            ng-required="CustomCtrl.orderType.type == \'pickup\' || CustomCtrl.selectedCityId > 0"\n' +
    '                                            style="width:100% !important"\n' +
    '                                            class="select-tags form-control pmd-select2-tags"\n' +
    '                                            ng-change="CustomCtrl.areaChange()" ng-model="CustomCtrl.selectedAreaId"\n' +
    '                                            ng-options="group.areaId as group.titleDictionary[selectedLanguage] for group in CustomCtrl.area">\n' +
    '                                        </select>\n' +
    '                                    </div>\n' +
    '                                    <div class="input-field col s6">\n' +
    '                                            <select\n' +
    '                                                ng-required="CustomCtrl.orderType.type == \'pickup\' || CustomCtrl.selectedAreaId > 0"\n' +
    '                                                style="width:100% !important"\n' +
    '                                                class="select-tags form-control pmd-select2-tags"\n' +
    '                                                ng-change="CustomCtrl.branchChange()" ng-model="CustomCtrl.selectedBranchId"\n' +
    '                                                ng-options="group.branchId as group.titleDictionary[selectedLanguage] for group in CustomCtrl.branchList">\n' +
    '                                            </select>\n' +
    '                                        </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="row">\n' +
    '                    <div class="col-md-10"></div>\n' +
    '                    <div class="col-md-2">\n' +
    '                        {{ CustomCtrl.selectedAreaId}}\n' +
    '                        {{stepTwoProgramForm.$invalid}}\n' +
    '                        <button style="background-color: #e4e5e6;color: black!important;"\n' +
    '                            ng-disabled="stepTwoProgramForm.$invalid || CustomCtrl.selectedAreaId <= 0"\n' +
    '                            class="btn pmd-ripple-effect btn-primary" type="button"\n' +
    '                            ng-click="CustomCtrl.AddNewProgram();">\n' +
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
    '											<li>Order Code: <span>#{{CustomCtrl.order.orderCode}}</span>\n' +
    '											</li>\n' +
    '											<li>Price: <span>{{CustomCtrl.order.price}}</span>\n' +
    '											</li>\n' +
    '											<li>Type :\n' +
    '												<span>{{CustomCtrl.order.isDelivery ? \'Delivery\' : \'PickUp\'}}</span>\n' +
    '\n' +
    '											</li>\n' +
    '											<li>No. of Days : <span>{{CustomCtrl.daysCount}}</span>\n' +
    '											</li>\n' +
    '											<li>No. of Meals Per Day : <span>{{CustomCtrl.mealsCount}}</span>\n' +
    '											</li>\n' +
    '											<li>Start Date : <span>{{CustomCtrl.startDate}}</span>\n' +
    '											</li>\n' +
    '											<li>Status :\n' +
    '												<span\n' +
    '													class="ov-yes">{{CustomCtrl.order.orderStatus ? \'Waiting\' : \'Open\'}}</span>\n' +
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
