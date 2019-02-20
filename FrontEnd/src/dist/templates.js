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
    '						<form class="col s12">\n' +
    '							<div class="row">\n' +
    '								<div class="input-field col s6">\n' +
    '									<input type="text" class="validate">\n' +
    '									<label>{{\'ProgramName\' | translate}}</label>\n' +
    '								</div>\n' +
    '								<div class="input-field col s6">\n' +
    '									<input type="text" class="validate">\n' +
    '									<label>{{\'ProgramDescription\' | translate}}</label>\n' +
    '								</div>\n' +
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
    '									<input type="text" class="validate">\n' +
    '									<label>{{\'MealPerDay\' | translate}}</label>\n' +
    '								</div>\n' +
    '								<div class="input-field col s6">\n' +
    '									<input type="text" class="validate">\n' +
    '									<label>{{\'ProgramDaysCount\' | translate}}</label>\n' +
    '								</div>\n' +
    '							</div>\n' +
    '							<!-- <div class="row">\n' +
    '								<div class="input-field col s6">\n' +
    '									<input type="text" id="from" name="from">\n' +
    '									<label for="from">Check In</label>\n' +
    '								</div>\n' +
    '								<div class="input-field col s6">\n' +
    '									<input type="text" id="to" name="to">\n' +
    '									<label for="to">Check Out</label>\n' +
    '								</div>\n' +
    '							</div> -->\n' +
    '							<!-- <div class="row">\n' +
    '								<div class="input-field col s12">\n' +
    '									<textarea id="textarea1" class="materialize-textarea" data-length="120"></textarea>\n' +
    '									<label>Message</label>\n' +
    '								</div>\n' +
    '							</div> -->\n' +
    '							<div class="row">\n' +
    '								<div class="input-field col s12">\n' +
    '									<input type="submit"  class="form-btn"> </div>\n' +
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
    '					<div class="col-md-4">\n' +
    '						<div class="to-ho-hotel-con">\n' +
    '							<div class="to-ho-hotel-con-1">\n' +
    '								<div class="hom-hot-av-tic"> Available Tickets: 42 </div>\n' +
    '								<img src="https://fithouseksa.com/wp-content/uploads/2018/07/fat-running.png" alt="">\n' +
    '							</div>\n' +
    '							<div class="to-ho-hotel-con-23">\n' +
    '								<div class="to-ho-hotel-con-2">\n' +
    '									<a href="all-rooms.html">\n' +
    '										<h4>Master Room</h4>\n' +
    '									</a>\n' +
    '								</div>\n' +
    '								<div class="to-ho-hotel-con-3">\n' +
    '									<ul>\n' +
    '										<li>City: illunois,united states\n' +
    '											<div class="dir-rat-star ho-hot-rat-star"> Rating:\n' +
    '												<i class="fa fa-star" aria-hidden="true"></i>\n' +
    '												<i class="fa fa-star" aria-hidden="true"></i>\n' +
    '												<i class="fa fa-star" aria-hidden="true"></i>\n' +
    '												<i class="fa fa-star" aria-hidden="true"></i>\n' +
    '												<i class="fa fa-star-o" aria-hidden="true"></i>\n' +
    '											</div>\n' +
    '										</li>\n' +
    '										<li>\n' +
    '											<span class="ho-hot-pri-dis">$720</span>\n' +
    '											<span class="ho-hot-pri">$420</span>\n' +
    '										</li>\n' +
    '									</ul>\n' +
    '								</div>\n' +
    '							</div>\n' +
    '						</div>\n' +
    '					</div>\n' +
    '					<!-- HOTEL GRID -->\n' +
    '					<div class="col-md-4">\n' +
    '						<div class="to-ho-hotel-con">\n' +
    '							<div class="to-ho-hotel-con-1">\n' +
    '								<div class="hom-hot-av-tic"> Available Tickets: 520 </div>\n' +
    '								<img src="images/room/1.jpg" alt="">\n' +
    '							</div>\n' +
    '							<div class="to-ho-hotel-con-23">\n' +
    '								<div class="to-ho-hotel-con-2">\n' +
    '									<a href="all-rooms.html">\n' +
    '										<h4>Mini-Suite</h4>\n' +
    '									</a>\n' +
    '								</div>\n' +
    '								<div class="to-ho-hotel-con-3">\n' +
    '									<ul>\n' +
    '										<li>City: illunois,united states\n' +
    '											<div class="dir-rat-star ho-hot-rat-star"> Rating:\n' +
    '												<i class="fa fa-star" aria-hidden="true"></i>\n' +
    '												<i class="fa fa-star" aria-hidden="true"></i>\n' +
    '												<i class="fa fa-star" aria-hidden="true"></i>\n' +
    '												<i class="fa fa-star" aria-hidden="true"></i>\n' +
    '												<i class="fa fa-star-o" aria-hidden="true"></i>\n' +
    '											</div>\n' +
    '										</li>\n' +
    '										<li>\n' +
    '											<span class="ho-hot-pri-dis">$840</span>\n' +
    '											<span class="ho-hot-pri">$540</span>\n' +
    '										</li>\n' +
    '									</ul>\n' +
    '								</div>\n' +
    '							</div>\n' +
    '						</div>\n' +
    '					</div>\n' +
    '					<!-- HOTEL GRID -->\n' +
    '					<div class="col-md-4">\n' +
    '						<div class="to-ho-hotel-con">\n' +
    '							<div class="to-ho-hotel-con-1">\n' +
    '								<div class="hom-hot-av-tic"> Available Tickets: 92 </div>\n' +
    '								<img src="images/room/2.jpg" alt="">\n' +
    '							</div>\n' +
    '							<div class="to-ho-hotel-con-23">\n' +
    '								<div class="to-ho-hotel-con-2">\n' +
    '									<a href="all-rooms.html">\n' +
    '										<h4>Ultra Deluxe</h4>\n' +
    '									</a>\n' +
    '								</div>\n' +
    '								<div class="to-ho-hotel-con-3">\n' +
    '									<ul>\n' +
    '										<li>City: illunois,united states\n' +
    '											<div class="dir-rat-star ho-hot-rat-star"> Rating:\n' +
    '												<i class="fa fa-star" aria-hidden="true"></i>\n' +
    '												<i class="fa fa-star" aria-hidden="true"></i>\n' +
    '												<i class="fa fa-star" aria-hidden="true"></i>\n' +
    '												<i class="fa fa-star" aria-hidden="true"></i>\n' +
    '												<i class="fa fa-star-o" aria-hidden="true"></i>\n' +
    '											</div>\n' +
    '										</li>\n' +
    '										<li>\n' +
    '											<span class="ho-hot-pri-dis">$680</span>\n' +
    '											<span class="ho-hot-pri">$380</span>\n' +
    '										</li>\n' +
    '									</ul>\n' +
    '								</div>\n' +
    '							</div>\n' +
    '						</div>\n' +
    '					</div>\n' +
    '					<!-- HOTEL GRID -->\n' +
    '					<div class="col-md-4">\n' +
    '						<div class="to-ho-hotel-con">\n' +
    '							<div class="to-ho-hotel-con-1">\n' +
    '								<div class="hom-hot-av-tic"> Available Tickets: 42 </div>\n' +
    '								<img src="images/room/4.jpg" alt="">\n' +
    '							</div>\n' +
    '							<div class="to-ho-hotel-con-23">\n' +
    '								<div class="to-ho-hotel-con-2">\n' +
    '									<a href="all-rooms.html">\n' +
    '										<h4>Luxury Room</h4>\n' +
    '									</a>\n' +
    '								</div>\n' +
    '								<div class="to-ho-hotel-con-3">\n' +
    '									<ul>\n' +
    '										<li>City: illunois,united states\n' +
    '											<div class="dir-rat-star ho-hot-rat-star"> Rating:\n' +
    '												<i class="fa fa-star" aria-hidden="true"></i>\n' +
    '												<i class="fa fa-star" aria-hidden="true"></i>\n' +
    '												<i class="fa fa-star" aria-hidden="true"></i>\n' +
    '												<i class="fa fa-star" aria-hidden="true"></i>\n' +
    '												<i class="fa fa-star-o" aria-hidden="true"></i>\n' +
    '											</div>\n' +
    '										</li>\n' +
    '										<li>\n' +
    '											<span class="ho-hot-pri-dis">$720</span>\n' +
    '											<span class="ho-hot-pri">$420</span>\n' +
    '										</li>\n' +
    '									</ul>\n' +
    '								</div>\n' +
    '							</div>\n' +
    '						</div>\n' +
    '					</div>\n' +
    '					<!-- HOTEL GRID -->\n' +
    '					<div class="col-md-4">\n' +
    '						<div class="to-ho-hotel-con">\n' +
    '							<div class="to-ho-hotel-con-1">\n' +
    '								<div class="hom-hot-av-tic"> Available Tickets: 520 </div>\n' +
    '								<img src="images/room/5.jpg" alt="">\n' +
    '							</div>\n' +
    '							<div class="to-ho-hotel-con-23">\n' +
    '								<div class="to-ho-hotel-con-2">\n' +
    '									<a href="all-rooms.html">\n' +
    '										<h4>Premium Room</h4>\n' +
    '									</a>\n' +
    '								</div>\n' +
    '								<div class="to-ho-hotel-con-3">\n' +
    '									<ul>\n' +
    '										<li>City: illunois,united states\n' +
    '											<div class="dir-rat-star ho-hot-rat-star"> Rating:\n' +
    '												<i class="fa fa-star" aria-hidden="true"></i>\n' +
    '												<i class="fa fa-star" aria-hidden="true"></i>\n' +
    '												<i class="fa fa-star" aria-hidden="true"></i>\n' +
    '												<i class="fa fa-star" aria-hidden="true"></i>\n' +
    '												<i class="fa fa-star-o" aria-hidden="true"></i>\n' +
    '											</div>\n' +
    '										</li>\n' +
    '										<li>\n' +
    '											<span class="ho-hot-pri-dis">$840</span>\n' +
    '											<span class="ho-hot-pri">$540</span>\n' +
    '										</li>\n' +
    '									</ul>\n' +
    '								</div>\n' +
    '							</div>\n' +
    '						</div>\n' +
    '					</div>\n' +
    '					<!-- HOTEL GRID -->\n' +
    '					<div class="col-md-4">\n' +
    '						<div class="to-ho-hotel-con">\n' +
    '							<div class="to-ho-hotel-con-1">\n' +
    '								<div class="hom-hot-av-tic"> Available Tickets: 92 </div>\n' +
    '								<img src="images/room/6.jpg" alt="">\n' +
    '							</div>\n' +
    '							<div class="to-ho-hotel-con-23">\n' +
    '								<div class="to-ho-hotel-con-2">\n' +
    '									<a href="all-rooms.html">\n' +
    '										<h4>Normal Room</h4>\n' +
    '									</a>\n' +
    '								</div>\n' +
    '								<div class="to-ho-hotel-con-3">\n' +
    '									<ul>\n' +
    '										<li>City: illunois,united states\n' +
    '											<div class="dir-rat-star ho-hot-rat-star"> Rating:\n' +
    '												<i class="fa fa-star" aria-hidden="true"></i>\n' +
    '												<i class="fa fa-star" aria-hidden="true"></i>\n' +
    '												<i class="fa fa-star" aria-hidden="true"></i>\n' +
    '												<i class="fa fa-star" aria-hidden="true"></i>\n' +
    '												<i class="fa fa-star-o" aria-hidden="true"></i>\n' +
    '											</div>\n' +
    '										</li>\n' +
    '										<li>\n' +
    '											<span class="ho-hot-pri-dis">$680</span>\n' +
    '											<span class="ho-hot-pri">$380</span>\n' +
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
    '				<div class="room">\n' +
    '					<div class="ribbon ribbon-top-left">\n' +
    '						<span>Featured</span>\n' +
    '					</div>\n' +
    '					<!--ROOM IMAGE-->\n' +
    '					<div class="r1 r-com">\n' +
    '						<img src="images/room/1.jpg" alt="" />\n' +
    '					</div>\n' +
    '					<!--ROOM RATING-->\n' +
    '					<div class="r2 r-com">\n' +
    '						<h4>Master Suite</h4>\n' +
    '						<div class="r2-ratt">\n' +
    '							<i class="fa fa-star"></i>\n' +
    '							<i class="fa fa-star"></i>\n' +
    '							<i class="fa fa-star"></i>\n' +
    '							<i class="fa fa-star"></i>\n' +
    '							<i class="fa fa-star"></i>\n' +
    '							<img src="images/h-trip.png" alt="" />\n' +
    '							<span>Excellent 4.5 / 5</span>\n' +
    '						</div>\n' +
    '						<ul>\n' +
    '							<li>Max Adult : 3</li>\n' +
    '							<li>Max Child : 1</li>\n' +
    '							<li></li>\n' +
    '							<li></li>\n' +
    '						</ul>\n' +
    '					</div>\n' +
    '					<!--ROOM AMINITIES-->\n' +
    '					<div class="r3 r-com">\n' +
    '						<ul>\n' +
    '							<li>Ironing facilities</li>\n' +
    '							<li>Tea/Coffee maker</li>\n' +
    '							<li>Air conditioning</li>\n' +
    '							<li>Flat-screen TV</li>\n' +
    '							<li>Wake-up service</li>\n' +
    '						</ul>\n' +
    '					</div>\n' +
    '					<!--ROOM PRICE-->\n' +
    '					<div class="r4 r-com">\n' +
    '						<p>Price for 1 night</p>\n' +
    '						<p>\n' +
    '							<span class="room-price-1">5000</span>\n' +
    '							<span class="room-price">$: 7000</span>\n' +
    '						</p>\n' +
    '						<p>Non Refundable</p>\n' +
    '					</div>\n' +
    '					<!--ROOM BOOKING BUTTON-->\n' +
    '					<div class="r5 r-com">\n' +
    '						<div class="r2-available">Available</div>\n' +
    '						<p>Price for 1 night</p>\n' +
    '						<a href="room-details-block.html" class="inn-room-book">Book</a>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '				<!--END ROOM SECTION-->\n' +
    '				<!--ROOM SECTION-->\n' +
    '				<div class="room">\n' +
    '					<div class="ribbon ribbon-top-left">\n' +
    '						<span>Featured</span>\n' +
    '					</div>\n' +
    '					<!--ROOM IMAGE-->\n' +
    '					<div class="r1 r-com">\n' +
    '						<img src="images/room/2.jpg" alt="" />\n' +
    '					</div>\n' +
    '					<!--ROOM RATING-->\n' +
    '					<div class="r2 r-com">\n' +
    '						<h4>Mini Suite</h4>\n' +
    '						<div class="r2-ratt">\n' +
    '							<i class="fa fa-star"></i>\n' +
    '							<i class="fa fa-star"></i>\n' +
    '							<i class="fa fa-star"></i>\n' +
    '							<i class="fa fa-star"></i>\n' +
    '							<i class="fa fa-star-o"></i>\n' +
    '							<img src="images/h-trip.png" alt="" />\n' +
    '							<span>Excellent 4.2 / 5</span>\n' +
    '						</div>\n' +
    '						<ul>\n' +
    '							<li>Max Adult : 2</li>\n' +
    '							<li>Max Child : 2</li>\n' +
    '							<li></li>\n' +
    '							<li></li>\n' +
    '						</ul>\n' +
    '					</div>\n' +
    '					<!--ROOM AMINITIES-->\n' +
    '					<div class="r3 r-com">\n' +
    '						<ul>\n' +
    '							<li>Ironing facilities</li>\n' +
    '							<li>Tea/Coffee maker</li>\n' +
    '							<li>Air conditioning</li>\n' +
    '							<li>Flat-screen TV</li>\n' +
    '							<li>Wake-up service</li>\n' +
    '						</ul>\n' +
    '					</div>\n' +
    '					<!--ROOM PRICE-->\n' +
    '					<div class="r4 r-com">\n' +
    '						<p>Price for 1 night</p>\n' +
    '						<p>\n' +
    '							<span class="room-price-1">4000</span>\n' +
    '							<span class="room-price">$: 4500</span>\n' +
    '						</p>\n' +
    '						<p>Non Refundable</p>\n' +
    '					</div>\n' +
    '					<!--ROOM BOOKING BUTTON-->\n' +
    '					<div class="r5 r-com">\n' +
    '						<div class="r2-available">Available</div>\n' +
    '						<p>Price for 1 night</p>\n' +
    '						<a href="room-details.html" class="inn-room-book">Book</a>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '				<!--END ROOM SECTION-->\n' +
    '				<!--ROOM SECTION-->\n' +
    '				<div class="room">\n' +
    '					<!--<div class="ribbon ribbon-top-left"><span>Featured</span></div>\n' +
    '							-->\n' +
    '					<!--ROOM IMAGE-->\n' +
    '					<div class="r1 r-com">\n' +
    '						<img src="images/room/3.jpg" alt="" />\n' +
    '					</div>\n' +
    '					<!--ROOM RATING-->\n' +
    '					<div class="r2 r-com">\n' +
    '						<h4>Ultra Deluxe</h4>\n' +
    '						<div class="r2-ratt">\n' +
    '							<i class="fa fa-star"></i>\n' +
    '							<i class="fa fa-star"></i>\n' +
    '							<i class="fa fa-star"></i>\n' +
    '							<i class="fa fa-star"></i>\n' +
    '							<i class="fa fa-star-o"></i>\n' +
    '							<img src="images/h-trip.png" alt="" />\n' +
    '							<span>Excellent 3.9 / 5</span>\n' +
    '						</div>\n' +
    '						<ul>\n' +
    '							<li>Max Adult : 4</li>\n' +
    '							<li>Max Child : 2</li>\n' +
    '							<li></li>\n' +
    '							<li></li>\n' +
    '						</ul>\n' +
    '					</div>\n' +
    '					<!--ROOM AMINITIES-->\n' +
    '					<div class="r3 r-com">\n' +
    '						<ul>\n' +
    '							<li>Ironing facilities</li>\n' +
    '							<li>Tea/Coffee maker</li>\n' +
    '							<li>Air conditioning</li>\n' +
    '							<li>Flat-screen TV</li>\n' +
    '							<li>Wake-up service</li>\n' +
    '						</ul>\n' +
    '					</div>\n' +
    '					<!--ROOM PRICE-->\n' +
    '					<div class="r4 r-com">\n' +
    '						<p>Price for 1 night</p>\n' +
    '						<p>\n' +
    '							<span class="room-price-1">3500</span>\n' +
    '							<span class="room-price">$: 4000</span>\n' +
    '						</p>\n' +
    '						<p>Non Refundable</p>\n' +
    '					</div>\n' +
    '					<!--ROOM BOOKING BUTTON-->\n' +
    '					<div class="r5 r-com">\n' +
    '						<div class="r2-available">Available</div>\n' +
    '						<p>Price for 1 night</p>\n' +
    '						<a href="room-details-1.html" class="inn-room-book">Book</a>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '				<!--END ROOM SECTION-->\n' +
    '				<!--ROOM SECTION-->\n' +
    '				<div class="room">\n' +
    '					<!--<div class="ribbon ribbon-top-left"><span>Best Room</span></div>-->\n' +
    '					<!--ROOM IMAGE-->\n' +
    '					<div class="r1 r-com">\n' +
    '						<img src="images/room/4.jpg" alt="" />\n' +
    '					</div>\n' +
    '					<!--ROOM RATING-->\n' +
    '					<div class="r2 r-com">\n' +
    '						<h4>Luxury Room</h4>\n' +
    '						<div class="r2-ratt">\n' +
    '							<i class="fa fa-star"></i>\n' +
    '							<i class="fa fa-star"></i>\n' +
    '							<i class="fa fa-star"></i>\n' +
    '							<i class="fa fa-star"></i>\n' +
    '							<i class="fa fa-star-o"></i>\n' +
    '							<img src="images/h-trip.png" alt="" />\n' +
    '							<span>Excellent 4.0 / 5</span>\n' +
    '						</div>\n' +
    '						<ul>\n' +
    '							<li>Max Adult : 5</li>\n' +
    '							<li>Max Child : 2</li>\n' +
    '							<li></li>\n' +
    '							<li></li>\n' +
    '						</ul>\n' +
    '					</div>\n' +
    '					<!--ROOM AMINITIES-->\n' +
    '					<div class="r3 r-com">\n' +
    '						<ul>\n' +
    '							<li>Ironing facilities</li>\n' +
    '							<li>Tea/Coffee maker</li>\n' +
    '							<li>Air conditioning</li>\n' +
    '							<li>Flat-screen TV</li>\n' +
    '							<li>Wake-up service</li>\n' +
    '						</ul>\n' +
    '					</div>\n' +
    '					<!--ROOM PRICE-->\n' +
    '					<div class="r4 r-com">\n' +
    '						<p>Price for 1 night</p>\n' +
    '						<p>\n' +
    '							<span class="room-price-1">3000</span>\n' +
    '							<span class="room-price">$: 3500</span>\n' +
    '						</p>\n' +
    '						<p>Non Refundable</p>\n' +
    '					</div>\n' +
    '					<!--ROOM BOOKING BUTTON-->\n' +
    '					<div class="r5 r-com">\n' +
    '						<div class="r2-available">Available</div>\n' +
    '						<p>Price for 1 night</p>\n' +
    '						<a href="room-details.html" class="inn-room-book">Book</a>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '				<!--END ROOM SECTION-->\n' +
    '				<!--ROOM SECTION-->\n' +
    '				<div class="room">\n' +
    '					<div class="ribbon ribbon-top-left">\n' +
    '						<span>Special</span>\n' +
    '					</div>\n' +
    '					<!--ROOM IMAGE-->\n' +
    '					<div class="r1 r-com">\n' +
    '						<img src="images/room/5.jpg" alt="" />\n' +
    '					</div>\n' +
    '					<!--ROOM RATING-->\n' +
    '					<div class="r2 r-com">\n' +
    '						<h4>Premium Room</h4>\n' +
    '						<div class="r2-ratt">\n' +
    '							<i class="fa fa-star"></i>\n' +
    '							<i class="fa fa-star"></i>\n' +
    '							<i class="fa fa-star"></i>\n' +
    '							<i class="fa fa-star"></i>\n' +
    '							<i class="fa fa-star-o"></i>\n' +
    '							<img src="images/h-trip.png" alt="" />\n' +
    '							<span>Excellent 4.5 / 5</span>\n' +
    '						</div>\n' +
    '						<ul>\n' +
    '							<li>Max Adult : 5</li>\n' +
    '							<li>Max Child : 2</li>\n' +
    '							<li></li>\n' +
    '							<li></li>\n' +
    '						</ul>\n' +
    '					</div>\n' +
    '					<!--ROOM AMINITIES-->\n' +
    '					<div class="r3 r-com">\n' +
    '						<ul>\n' +
    '							<li>Ironing facilities</li>\n' +
    '							<li>Tea/Coffee maker</li>\n' +
    '							<li>Air conditioning</li>\n' +
    '							<li>Flat-screen TV</li>\n' +
    '							<li>Wake-up service</li>\n' +
    '						</ul>\n' +
    '					</div>\n' +
    '					<!--ROOM PRICE-->\n' +
    '					<div class="r4 r-com">\n' +
    '						<p>Price for 1 night</p>\n' +
    '						<p>\n' +
    '							<span class="room-price-1">4000</span>\n' +
    '							<span class="room-price">$: 5000</span>\n' +
    '						</p>\n' +
    '						<p>Non Refundable</p>\n' +
    '					</div>\n' +
    '					<!--ROOM BOOKING BUTTON-->\n' +
    '					<div class="r5 r-com">\n' +
    '						<div class="r2-available">Available</div>\n' +
    '						<p>Price for 1 night</p>\n' +
    '						<a href="room-details-block.html" class="inn-room-book">Book</a>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '				<!--END ROOM SECTION-->\n' +
    '				<!--ROOM SECTION-->\n' +
    '				<div class="room">\n' +
    '					<!--<div class="ribbon ribbon-top-left"><span>Featured</span></div>-->\n' +
    '					<!--ROOM IMAGE-->\n' +
    '					<div class="r1 r-com">\n' +
    '						<img src="images/room/6.jpg" alt="" />\n' +
    '					</div>\n' +
    '					<!--ROOM RATING-->\n' +
    '					<div class="r2 r-com">\n' +
    '						<h4>Normal Room</h4>\n' +
    '						<div class="r2-ratt">\n' +
    '							<i class="fa fa-star"></i>\n' +
    '							<i class="fa fa-star"></i>\n' +
    '							<i class="fa fa-star"></i>\n' +
    '							<i class="fa fa-star"></i>\n' +
    '							<i class="fa fa-star-o"></i>\n' +
    '							<img src="images/h-trip.png" alt="" />\n' +
    '							<span>Excellent 3.5 / 5</span>\n' +
    '						</div>\n' +
    '						<ul>\n' +
    '							<li>Max Adult : 4</li>\n' +
    '							<li>Max Child : 4</li>\n' +
    '							<li></li>\n' +
    '							<li></li>\n' +
    '						</ul>\n' +
    '					</div>\n' +
    '					<!--ROOM AMINITIES-->\n' +
    '					<div class="r3 r-com">\n' +
    '						<ul>\n' +
    '							<li>Ironing facilities</li>\n' +
    '							<li>Tea/Coffee maker</li>\n' +
    '							<li>Air conditioning</li>\n' +
    '							<li>Flat-screen TV</li>\n' +
    '							<li>Wake-up service</li>\n' +
    '						</ul>\n' +
    '					</div>\n' +
    '					<!--ROOM PRICE-->\n' +
    '					<div class="r4 r-com">\n' +
    '						<p>Price for 1 night</p>\n' +
    '						<p>\n' +
    '							<span class="room-price-1">2000</span>\n' +
    '							<span class="room-price">$: 2500</span>\n' +
    '						</p>\n' +
    '						<p>Non Refundable</p>\n' +
    '					</div>\n' +
    '					<!--ROOM BOOKING BUTTON-->\n' +
    '					<div class="r5 r-com">\n' +
    '						<div class="r2-available">Available</div>\n' +
    '						<p>Price for 1 night</p>\n' +
    '						<a href="room-details.html" class="inn-room-book">Book</a>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '				<!--END ROOM SECTION-->\n' +
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
