(function () {
  'use strict';

  angular
    .module('core').config(["$translateProvider", "appCONSTANTS", function ($translateProvider, appCONSTANTS) {

      var en_translations = {
        "Email": "Email: ",
        "WhatsApp": "WhatsApp: ",
        "Mobile": "Mobile:",
        "LeadershipTeam": "Leadership Team",
        "Leadership": "Leadership",
        "Home": "Home",
        "AboutUs": "About Us",
        "ContactUs": "Contact Us",
        "Language": "Language",
        "customiseProgram": "Customise Program",
        "DescribeCustomiseProgram": "Describe Customise Program as client want",
        "ProgramName": "Program Name",
        "ProgramDescription": "Program Description",
        "SelectExcludeDays": "Select Excluded Days",
        "MealPerDay": "No of meals/day",
        "ProgramDaysCount": "Program Days",
        "Meals": "Meals",
        "MealsDescription": "Meals Description as user want",
        "Programs": "Programs",
        "ProgramsDescription": "Programs Description",
        "Program": "Program",
        "ProgramDays": "Program Days",
        "NonRefundable": "Non-Refundable",

      }

      var ar_translations = {

        "ProgramName": "اسم البرنامج",
        "ProgramDescription": "وصف البرنامج",
        "SelectExcludeDays": "اختر الأيام المستثيه",
        "MealPerDay": "عدد الوجبات في اليوم",
        "ProgramDaysCount": "عدد ايام البرنامج",
        "Meals": "الوجبات",
        "MealsDescription": "وصف الوجبات",
        "Programs": "البرامج",
        "ProgramsDescription": "وصف البرامج",
        "Program": "برنامج",
        "ProgramDays": "عدد ايام البرنامج",
        "NonRefundable": "غير قابل للاسترداد",

        "DescribeCustomiseProgram": "Describe Customise Program as client want",
        "customiseProgram": "انشاء برنامج",
        "Email": "البريد الالكتروني: ",
        "WhatsApp": "واتس اب: ",
        "Mobile": "رقم الجوال: ",
        "LeadershipTeam": "فريق القيادة",
        "Leadership": "القيادة",
        "Home": "الرئيسيه",
        "ContactUs": "تواصل",
        "AboutUs": "عن ميزاب",
        "Language": "اللغه"
      }

      $translateProvider.translations('en', en_translations);

      $translateProvider.translations('ar', ar_translations);

      $translateProvider.preferredLanguage(appCONSTANTS.defaultLanguage);

    }]);

}());
