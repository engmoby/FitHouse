(function () {
  'use strict';

  angular
    .module('core').config(["$translateProvider", "appCONSTANTS", function ($translateProvider, appCONSTANTS) {

      var en_translations = {
        "AddNew": "Add New",
        "PhoneLengthError320": "digits must be from 3 :20",
        "FirstNameLbl": "FirstName",
        "LastNameLbl": "lastName",
        "EmailLbl": "Email",
        "Phone1Lbl": "Phone",
        "Phone2Lbl": "Phone2",
        "FirstNameLengthError": "FirstName is required",
        "LastNameLengthError": "LastName is required",
        "EmailLengthError": "Email is required",
        "PhoneReqError": "Phone is required",
        "PhoneLengthError": "digits must be from 10 :50",
        "NameLengthError": "character must be from 3 :50",
        "NameLengthError200": "character must be from 3 :200",
        "NameLengthError255": "character must be from 3 :255",
        "NotPhoneNumber": "please enter numbers only",
        "PasswordLengthError": "Password is required",
        "UserPasswordLbl": "password",
        "ConfirmPasswordLbl": "Confirm password",
        "saveChangesBtn": "save changes",
        "DiscardBtn": "Discard",
        "ClientAddSuccess": "Client Add Success",
        "BackageAddSuccess": "Backage Add Success",
        "BackageEditSuccess": "Backage Edit Success",
        "ClientEditSuccess": "Client Edit Success",
        "LimitUserValidation": "Must be at least 1 user",
        "AddUserBtn": "Add new user",
        "BasicInfoLbl": "Basic Info",
        "NextLbl": "Next",
        "userName": "UserName",
        "StatusLbl": "Status",
        "ProductTitleLbl": "Product Title",
        "ProductDescLbl": "Product Desc",
        "ProductCountLbl": "Backage Count",
        "Edit": "Edit",
        "userlimitLbl": "Limit",
        "concumerLbl": "Consumer User",
        "startDateLbl": "Start Date",
        "enddateLbl": "End Date ",
        "AddProductBtn": "Add Product",
        "Products": "Products",
        "backage": "Duration",
        "user": "Users",
        "logoutBtn": "logout",
        "TextOnly": "Text Only",
        "passworddontmatch": "Passwords don't match",

        "WrongMail": "please enter right email format",
        "ApiUrlLbl": "Website Url",
        "Wrongapi": " Wrong Website Url",
        "requiredApi": "Website Url  is required",
        "productEditSuccess": "Update Edit Success",
        "productAddSuccess": "Update Add Success",
        "product": "Product",
        "englishName": "English Name",
        "arabicName": "Arabic Name",
        "english": "english",
        "arabic": "arabic",
        "NoBackageAvailable": "No backage available",
        "View": "View",
        "AddNew": "Add New",
        "NousertypesAvailable": "No user's types Available",
        "AddBtn": "Add",
        "Name": "Name",
        "status": "Status",
        "Static": "Static",
        "NewUserTypeLbl": "New User Type",
        "NoRolesAvailable": "No Role Available",
        "NewRoleLbl": "New Role",
        "Permission": "Permission",
        "NoAreasAvailable": "No Area Available",
        "NewArea": "New Area",
        "NoDepartmentsAvailable": "No Department Available",
        "NewDepartment": "New Department",
        "SelectGroups": "Select Groups",
        "UserType": "User Type",
        "Role": "Role",
        "Area": "Area",
        "Department": "Department",
        "users": "Users",
        "phoneLbl": "Mobile number",
        "AddNewBranch": "Add Branch",
        "AddedSuccessfully": "Added Successfully",
        "Editeduccessfully": "Edited Successfully",
        "DeletedSuccessfully":"Deleted Successfully",
        "Answers": "Answers",
        "filterBtn": "Apply filter",
        "noAnswersLbl": "There is no answers",
        "fromLbl": "from",
        "toLbl": "to",
        "Branch": "Branch",
        "AddNewCategoryBtn": "Add Category",
        "requiredErr": "Required",
        "Dynamic": "Dynamic",
        "Question": "Question",
        "AnswerQuestion": "Answers Questions",
        "Tickets": "Tickets",
        "NoTicketAvailable": "No Tickets Available",
        "titleLbl": "Title",
        "descLbl": "Description",
        "NewTicketLbl": "New Ticket",
        "AddImageBtn": "Add image",
        "Pending": "Pending",
        "Assigned": "Assigned To",
        "InProgress": "In Progress by",
        "Closed": "Closed by",
        "Rejected": "Rejected by",
        "DetailsBtn": "View details",
        "AssignedBtn": "Assigned to",
        "CategoryLbl": "Category",
        "selectTech": "Select Technacian",
        "ApproveBtn": "Approve",
        "CloseBtn": "Close",
        "RejectBtn": "Reject",
        "commentLbl": "Comment",
        "Creator": "Created by",
        "CreatTime": "Creation time",
        "AssignedBy": "Assigned by",
        "AssignedTime": "Assigned time",
        "imageLbl": "Images",
        "employee": "Employee",
        "branchManager": "Branch manager",
        "deptManager": "Department manager",
        "Tech": "Technacian",
        "DashboardLbl": "Dashboard",
        "AssignedStatus": "Assigned",
        "InProgressStatus": "In Progress",
        "ClosedStatus": "Closed",
        "RejectedStatus": "Rejected",
        "Survey": "Survey",
        "LikeLbl": "Like",
        "DisLikeLbl": "Dislike",
        "averageLbl": "Average",
        "onestar": "one star",
        "twostar": "two star",
        "threestar": "three star",
        "fourstar": "four star",
        "fivestar": "five star",
        "ticketsCount": "tickets count",
        "QuestionType": "Question Type",
        "Checkbox": "Checkbox",
        "Rate": "Rate",
        "LikeDislike": "Like or dislike",
        "value": "Answer",
        "note": "note",
        "questionEn": "Option english",
        "questionAr": "Option arabic",
        "RemoveBtn": "Remove",
        "dateLbl": "Date",
        "NoCountriesAvailable": "No Countries Available",
        "NewCountry": "New Country",
        "Country": "Country",
        "NoRegionsAvailable": "No Regions Available",
        "NewRegion": "New Region",
        "Region": "Region",
        "NoCitiesAvailable": "No Cities Available",
        "NewCity": "New City",
        "City": "City",
        "viewRegions": "view regions",
        "viewCities": "view cities",
        "viewAreas": "view areas",
        "allBranchesM": "All Branch managers",
        "allTechnasian": "All technicians",
        "AllLbl": "All",
        "moreFilter": "Show More Fiter",
        "lessFilter": "Show Less Fiter",
        "categoryType": "Category Type",
        "NoQuestionsAvailable": "There is no questions available",
        "NewcategoryTypeLbl": "New category type",
        "allUsers": "All users",
        "AnswererdBy": "answered By",
        "NocategoryTypesAvailable": "There is no category types available",
        "Priority": "Priority",
        "Critical": "Critical",
        "High": "High",
        "Medium": "Medium",
        "Low": "Low",
        "Reassigned": "Reassigned",
        "Completed": "Completed",
        "ReassignedBtn": "Reassigned to",
        "CompleteBtn": "Complete",
        "history": "History",
        "modifyBy": "Modify by",
        "modifyTime": "Modification date",
        "PreviousBtn": "Previous",
        "NextBtn": "Next",
        "Project": "Project",
        "Vendor": "Vendor",
        "addressLbl": "Address",
        "totalAsset": "Total Asset",
        "totalService": "Total Service",
        "price": "price",
        "AssetStatus": "Asset Status",

        "ConfigLbl": "Ticket Configration",
        "service": "service",
        "percentage": "percentage",
        "asset": "Asset",
        "PaymentMethod": "Payment Method",
        "urlErrorLbl": "Sorry Not a Valid URL, Don't Forget to Use http://",
        "NoProjectsAvailable": "No Projects Available",
        "NoVendorsAvailable": "No Vendors Available",
        "NoServicesAvailable": "No Services Available",
        "NoAssetsAvailable": "No Assets Available",
        "Debit": "Debit",
        "Credit": "Credit",
        "Recevied": "Recevied",
        "NotRecevied": "Not Recevied",
        "priceLengthError": "Price Length Error",
        "from0to100": "Percentage from 0 to 100",
        "ItemsBtn": "View items",
        "NoItemAvailable": "there is no items.",
        "AddItemBtn": "Add new Item",
        "itemAddSuccess": "item added successfully.",
        "NewItemtLbl": "New item",
        "UpdateItemLbl": "Update item",
        "Pricelbl": "Price",
        "itemDeleteSuccess": "item deleted successfully.",
        "RecommendedItemImage1": "Recommended dimension 423 x 139",
        "NoProgramAvailable": "No Program Available",
        "ProgramName": "Program Name",
        "ProgramDescription": "Program Description",
        "Status": "Status",
        "ProgramDetails": "Program Details",
        "Day": "Day",
        "Meal": "Meal",
        "SelectItems": "Select Items",
        "Step": "Step",
        "PreviousStep": "Previous Step",
        "NextStep": "Next Step",
        "Save": "Save",
        "UpdateProgramLbl": "Update Program",
        "Edit": "Edit",
        "NameLengthError255": "Characters between 2 : 255",
        "ProgramPrice": "Program Price",
        "ProgramCost": "Program Cost",
        "ProgramVAT": "Program VAT",
        "ProgramDiscount": "Program Discount",
        "englishProgramName": "Program Name",
        "englishProgramDescription": "Program Description",
        "ProgramDaysCount": "Program Total Days",
        "MealPerDay": "Meals Per a day",
        "ProgramTotalPrice": "Program Total Price",
        "Breakfast": "Breakfast",
        "Snack": "Snack",
        "SelectExcludeDays": "Excluded Days",
        "ProgramLbl": "New Program",
        "saveUser": "Save User",
        "Program": "Program",
        "CallCenter": "Call Center",
        "FirstName": "First Name",
        "lastName": "Last Name",
        "Email": "Email",
        "FLoor": "Floor",
        "ApartmentNumber": "Apartment Number",
        "AddressDescription": "Address Description",
        "Item": "Item",
        "CustomizeProgram": "Customize Program",
        "ValidateUser": "Validate User",
        "MakeOrder": "Make Order",
        "Order": "Order",
        "CheckMealContent": "Check Meal Content",
        "SelectMeals": "Select Meals",
        "OrderMeal": "Order Meal",
        "CheckProgramContent": "Check Program Content",
        "SelectProgram": "Select Program",
        "OrderProgram": "Order Program",
        "SelectPrograms": "Select Programs",
        "Pickup": "Pickup",
        "Delivery": "Delivery",
        "OrderType": "Order Type",
        "SelectAddress": "Select Address",
        "LETSCREATEPROGRAM": "Let's Create Program",
        "BaiscInfo": "Baisc Info",
        "CreateMeal": "Create Meal",
        "Summary": "Summary",
        "orderPickDateTime": "Order Date Time",
        "Settings": "Settings",
        "Kitchen": "Kitchen",
        "calories": "calories",
        "carbs": "carbs",
        "fat": "fat",
        "itemSize": "itemSize",
        "protein": "protein",
        "Total": "Total",
        "costlbl": "cost",
        "vat": "vat",
        "DeliveryPrice": "Delivery Price",
        "PriceBeforeDiscount": "Price Before Discount",
        "PriceAfterDiscount": "Price After Discount",
        "mealDiscount": "Meal Discount",
        "NoCategorysAvailable": "No Categories Available",
        "mealtotalDiscount": "Meal Total Discount",
        "UpdateMealLbl":"Update Meal",
        "mustchooseitem":"Must Choose an item",
        "imageTypeError":"Image Type Error",
        "imgaeSizeError":"Image Size Error",
        "OrderCode":"Order Code",
        "Date":"Date",
        "startDate":"Start Date",
        "Payment":"Payment",
        "Delvery/Takeaway":"Delivery/Takeaway",
        "Ordertype":"Order Type",
        "ClientFound":"Client Found",
        "ClientNotFound":"Client Not Found",
        "NoDeliverysAvailable":"No Delivery Available",
        "OnTheWay":"On The Way",
        "Deliverd":"Delivered",
        "NotDeliverd":"Not Delivered",
        "appartmentNo":"Appartment No",
        "description":"Description",
        "Creationdate":"Creation Date",
        "orderdetails":"Order Details",
        "NokitchensAvailable":"No kitchen Available",
        "Preperied":"Prepared",
        "SendVer":"Send Verification",
        "None":"None",
        "SMS":"SMS",
        "Mail":"Mail",
        "Both":"Both",
        "MinDaysPerProg":"Min Days Per Program",
        "AllowPause":"Allow Pause",
        "AllowHistory":"Allow History",
        "DeliveryFees":"Delivery Fees",
        "branchName":"Branch Name",
        "DeliveryCost":"Delivery Cost",
        "deleteConfirmationLbl":"Are you sure you want to delete: ",
        "deleteBtn": "Delete",
        "cancelBtn": "Cancel",
        
      }

      var ar_translations = {
        "deleteBtn": "مسح",
        "cancelBtn": "الغاء",
        "deleteConfirmationLbl":"هل أنت متأكد من أنك تريد مسح: ",
        "ClientFound":"العميل غير موجود",
        "ClientNotFound":"العميل موجود",
        "NoDeliverysAvailable":"لا يوجد دليفيري متاح",
        "OnTheWay":"في الطريق",
        "Deliverd":"تم التوصيل",
        "NotDeliverd":"لم توصل",
        "appartmentNo":"رقم العقار",
        "description":"الوصف",
        "Creationdate":"تاريخ الانشاء",
        "orderdetails":"تفاصيل الطلب",
        "NokitchensAvailable":"لا يوجد مطبخ متاح",
        "Preperied":"جهزت",
        "SendVer":"ارسال التأكيد",
        "None":"لا شيء",
        "SMS":"رساله نصيه",
        "Mail":"بريد الكتروني",
        "Both":"الاثنين",
        "MinDaysPerProg":"اقل عدد ايام للبرنامج",
        "AllowPause":"اتاحة التوقيف",
        "AllowHistory":"اتاحة السجل",
        "DeliveryFees":"تكلفة التوصيل",
        "branchName":"اسم الفرع",
        "DeliveryCost":"تكفلة التوصيل",
        "Date":"التاريخ",
        "startDate":"تاريخ البدأ",
        "Payment":"الدفع",
        "Delvery/Takeaway":"توصيل/فرع",
        "Ordertype":"نوع الطلب",
        "OrderCode":"كود الطلب",
        "imgaeSizeError":"خطأ في حجم الصورة",
        "imageTypeError":"خطأ في نوع الصورة",
        "mustchooseitem":"يجب ان تختار عنصر",
        "UpdateMealLbl":"تعديل الوجبه",
        "mealtotalDiscount":"اجمالي السعر بعد الخصم",
        "NoCategorysAvailable": "لا يوجد أقسام متاحه",
        "DeliveryPrice": "سعر  التوصيل",
        "PriceBeforeDiscount": "سعر قبل الخصم",
        "PriceAfterDiscount": "سعر بعد الخصم",
        "mealDiscount": "خصم الوجبه",
        "vat": "vat",
        "Kitchen": "مطبخ",
        "calories": "سعرات حراريه",
        "carbs": "الكربوهيدرات",
        "fat": "دهون",
        "itemSize": "حجم الصنف",
        "protein": "بروتين",
        "Total": "مجموع",
        "costlbl": "التكلفه",
        "vat": "الضريبه",
        "Settings": "الإعدادات",
        "Pickup": "امسك",
        "Delivery": "توصيل",
        "orderPickDateTime": "وقت الطلب",
        "Program": "البرنامج",
        "CallCenter": "خدمة العملاء",
        "FirstName": "الاسم الاول",
        "lastName": "الاسم الاخير",
        "Email": "البريد الالكتروني",
        "FLoor": "الطابق",
        "ApartmentNumber": "رقم الشقه",
        "AddressDescription": "وصف العنوان",
        "Item": "عنصر",
        "CustomizeProgram": "برنامج مخصص",
        "ValidateUser": "التأكد من العميل",
        "MakeOrder": "طلب",
        "Order": "طلب",
        "CheckMealContent": "معرفة تفاصيل الوجبة",
        "SelectMeals": "اختر الوجبات",
        "OrderMeal": "طلب وجبة",
        "CheckProgramContent": "معرفة تفاصيل البرنامج",
        "SelectProgram": "اختر البرنامج",
        "OrderProgram": "طلب برنامج",
        "SelectPrograms": "اختر البرنامج",
        "Pickup": "استلام من الفرع",
        "Deivery": "التوصيل",
        "OrderType": "نوع الطلب",
        "SelectAddress": "اختر العنوان",
        "LETSCREATEPROGRAM": "هيا لنضيف برنامج",
        "BaiscInfo": "معلومات اساسيه",
        "CreateMeal": "اضف الوجبه",
        "Summary": "المختصر",
        "saveUser": "حفظ مستخدم",
        "Program": "البرنامج",
        "ProgramLbl": "برنامج جديد",
        "SelectExcludeDays": "الأيام المستثنيه",
        "AddNew": "اضافة جديدة",
        "NoProgramAvailable": "لا يوجد برامج",
        "ProgramName": "اسم البرنامج",
        "ProgramDescription": "شرح البرنامج",
        "Status": "الحالة",
        "ProgramDetails": "تفاصيل البرنامج",
        "Day": "اليوم",
        "Meal": "الوجبه",
        "SelectItems": "اختر العناصر",
        "Step": "خطوة",
        "PreviousStep": "الخطوة السابقه",
        "NextStep": "الخطوة التاليه",
        "Save": "حفظ",
        "UpdateProgramLbl": "تعديل البرنامج",
        "Edit": "تعديل",
        "NameLengthError255": "الحروف بين 2 : 255 حروف",
        "ProgramPrice": "سعر البرنامج",
        "ProgramCost": "تكلفة البرنامج",
        "ProgramVAT": "ضريبة البرنامج",
        "ProgramDiscount": "خصم للبرنامج",
        "ProgramTotalPrice": "اجمالي السعر",
        "englishProgramName": "اسم البرنامج",
        "englishProgramDescription": "شرح البرنامج",
        "ProgramDaysCount": "عدد ايام البرنامج",
        "MealPerDay": "عدد الوجبات في اليوم",
        "Breakfast": "افطار",
        "Snack": "سناكس",

        "RecommendedItemImage1": "423 x 139 البعد الموصى به",
        "ItemsBtn": "عرض منتجات",
        "NoItemAvailable": ".لا يوجد منتاجات",
        "AddItemBtn": "اضف منتج جديد",
        "CategoryNotTranslated": ".قسم ليس مترجم بالعربيه",
        "itemAddSuccess": ".تم ادخال منتج بنجاح",
        "NewItemtLbl": "منتج جديد",
        "UpdateItemLbl": "تحديث المنتج",
        "Pricelbl": "السعر",
        "itemDeleteSuccess": ".تم حذف المنتج بنجاح",
        "from0to100": "النسبه من 0 الي 100",
        "priceLengthError": "خطأ في السعر",
        "Recevied": "استلمت",
        "NotRecevied": "لم تستلم",
        "Credit": "دائن",
        "Debit": "مدين",
        "PhoneLengthError320": "يجب أن تكون الأرقام من 3: 20",
        "ConfigLbl": "ترتيب",
        "NoAssetsAvailable": "لايوجد اصول",
        "NoServicesAvailable": "لا يوجد خدمات متاحه ",
        "NoVendorsAvailable": "لا يوجد بائع متاح",
        "NoProjectsAvailable": "لا يوجد مشاريع متاحه",
        "urlErrorLbl": "عذرًا ، ليس عنوان URL صالحًا ، لا تنس أن تستخدم http: //",
        "service": "خدمه",
        "percentage": "نسبه",
        "asset": "الأصول",
        "AssetStatus": "حاله الاصل",
        "PaymentMethod": "طريقة الدفع",
        "price": "السعر",
        "totalAsset": "مجموع الأصول",
        "totalService": "مجموع الخدمات",
        "addressLbl": "العنوان",
        "Project": "المشروع",
        "Vendor": "البائع",
        "PreviousBtn": "السابق",
        "NextBtn": "التالي",
        "Editeduccessfully": "تم التعديل بنجاح",
        "AddedSuccessfully": "تمت الاضافة بنجاح",
        "DeletedSuccessfully": "تم الحذف بنجاح",
        "AddNewBranch": "اضافة فرع",
        "phoneLbl": "رقم الجوال",
        "users": "المستخدمين",
        "Department": "قسم",
        "Area": "منطقه",
        "Role": "دور",
        "UserType": "نوع المستخدم",
        "SelectGroups": "اختر المجموعات",
        "NewDepartment": "قسم جديد",
        "NoDepartmentsAvailable": "لا يوجد قسم متاح",
        "NewArea": "منطقه جديده",
        "NoAreasAvailable": "لا يوجد مناطق متاحه",
        "Permission": "اذن",
        "NewRoleLbl": "دور جديد",
        "NoRolesAvailable": "لا يوجد دور",
        "NewUserTypeLbl": "نوع مستخدم جديد",
        "Static": "ثابته",
        "status": "الحالة",
        "Name": "الاسم",
        "AddBtn": "اضافة",
        "NousertypesAvailable": "لا يوجد أنواع للمستخدم",
        "FirstNameLbl": "الاسم الاول",
        "LastNameLbl": "الاسم الثاني",
        "EmailLbl": "البريد الالكتروني",
        "Phone1Lbl": "الرقم الاول",
        "Phone2Lbl": "الرقم الثاني",
        "FirstNameLengthError": "اسم المستخدم الاول مطلوب",
        "LastNameLengthError": "اسم المستخدم الثاني مطلوب",
        "EmailLengthError": "البريد الالكتروني مطلوب",
        "PhoneReqError": "رقم الهاتف مطلوب",
        "NameLengthError": "يجب أن تكون الحروف من 3 : 50",
        "NameLengthError200": "يجب أن تكون الحروف من 3 : 200",
        "NameLengthError255": "يجب أن تكون الحروف من 3 : 255",
        "PhoneLengthError": "يجب أن تكون الأرقام من 10: 50",
        "NotPhoneNumber": "برجاء إدخال أرقام فقط",
        "PasswordLengthError": "كلمه المرور مطلوبه",
        "UserPasswordLbl": "كلمة مرور  ",
        "ConfirmPasswordLbl": "تأكيد كلمه المرور",
        "saveChangesBtn": "حفظ",
        "DiscardBtn": "تجاهل",
        "ClientAddSuccess": "تم اضافه المستحدم بنجاح   ",
        "BackageAddSuccess": "تم اضافه الباقه بنجاح   ",
        "BackageEditSuccess": "تم تعديل الباقه بنجاح   ",
        "ClientEditSuccess": "تم تعديل بيانات المستحدم بنجاح   ",
        "LimitUserValidation": "لابد من اختيارعلي الاقل مستخدم واحد",
        "AddUserBtn": "اضافه عميل جديد",
        "BasicInfoLbl": "البيانات الاساسيه",
        "NextLbl": "التالي",
        "userName": "اسم المستخدم",
        "StatusLbl": "الحاله",
        "ProductTitleLbl": "اسم المنتج",
        "ProductDescLbl": "شرح المنتج",
        "ProductCountLbl": "عدد الباقات ",
        "Edit": "تعديل",
        "userlimitLbl": "عدد",
        "concumerLbl": "عدد المستهلكين",
        "startDateLbl": "تاريخ البدايه",
        "enddateLbl": "تاريخ الانتهاء",
        "AddProductBtn": "اضافه منتج",
        "Products": "المنتجات",
        "backage": "المده",
        "user": "المستخدمين",

        "logoutBtn": "خروج",

        "TextOnly": "حروف فقط",
        "WrongMail": "يرجى إدخال تنسيق البريد الإلكتروني الصحيح ",
        "passworddontmatch": "كلمه المرور غير متطابقه",

        "ApiUrlLbl": "رابط الموقع",
        "Wrongapi": " رابط الموقع غير صحيح",
        "requiredApi": "رابط الموقع مطلوب",
        "productEditSuccess": "تم التعديل بنجاح",
        "productAddSuccess": "تم الاضافه بنجاح",

        "product": "المنتج",
        "englishName": "الاسم انجليزي",
        "arabicName": "الاسم عربي",
        "english": "انجليزي",
        "arabic": "عربي",

        "NoBackageAvailable": "لا يوجد باقاات",
        "View": "عرض",
        "AddNew": "إضافه",
        "Answers": "الأجوبة",
        "filterBtn": "تصفيه",
        "noAnswersLbl": "لا يوجد اجوبة",
        "fromLbl": "من",
        "toLbl": "الي",
        "Branch": "فرع",
        "AddNewCategoryBtn": "اضافة الفئة",
        "requiredErr": "مطلوب",
        "Dynamic": "متحرك",
        "Question": "سؤال",
        "AnswerQuestion": "إجابات الأسئلة",
        "Tickets": "شكاوي",
        "NoTicketAvailable": "لا يوجد شكاوي",
        "titleLbl": "عنوان",
        "descLbl": "شرح",
        "NewTicketLbl": "شكوي جديد",
        "AddImageBtn": "أضف صورة",
        "Pending": "قيد الانتظار",
        "Assigned": "مخصص ل",
        "InProgress": "في تَقَدم من طرف",
        "Closed": "مغلق من طرف",
        "Rejected": "مرفوض من طرف",
        "DetailsBtn": "عرض التفاصيل",
        "AssignedBtn": "مخصص ل",
        "CategoryLbl": "فئة",
        "selectTech": "أختار فني",
        "ApproveBtn": "تأكيد",
        "CloseBtn": "غلق",
        "RejectBtn": "رفض",
        "commentLbl": "تعليق",
        "Creator": "صنع من قبل",
        "CreatTime": "وقت الإنشاء",
        "AssignedBy": "عين من",
        "AssignedTime": "الوقت التعين",
        "imageLbl": "صور",
        "employee": "موظف",
        "branchManager": "مدير فرع",
        "deptManager": "مدير أدارة",
        "Tech": "فني",
        "DashboardLbl": "لوحة القيادة",
        "AssignedStatus": "تعيين",
        "InProgressStatus": "في تَقَدم",
        "ClosedStatus": "مغلق",
        "RejectedStatus": "مرفوض",
        "Survey": "استطلاع",
        "LikeLbl": "اعجاب",
        "DisLikeLbl": "رفض",
        "averageLbl": "متوسط",
        "onestar": "نجمة واحده",
        "twostar": "نجمتين",
        "threestar": "ثلاث نجوم",
        "fourstar": "اربع نجوم",
        "fivestar": "خمس نجوم",
        "ticketsCount": "عدد الشكاوي",
        "QuestionType": "نوع السؤال",
        "Checkbox": "اختيار",
        "Rate": "تقييم",
        "LikeDislike": "اعجاب او رفض",
        "value": "أجابة",
        "note": "ملحوظه",
        "questionEn": "اختيار انجليزي",
        "questionAr": "اختيار عربي",
        "RemoveBtn": "حذف",
        "dateLbl": "تاريخ",
        "NoCountriesAvailable": "لا يوجد بلاد متاحه",
        "NewCountry": "بلد جديده",
        "Country": "بلد",

        "NoRegionsAvailable": "لا يوجد أقاليم متاحه",
        "NewRegion": "اقليم جديد",
        "Region": "اقليم",
        "NoCitiesAvailable": "لا يوجد مدن",
        "NewCity": "مدينة جديده",
        "City": "مدينة",

        "viewRegions": "عرض الأقاليم",
        "viewCities": "عرض المدن",
        "viewAreas": "عرض المناطق",
        "allBranchesM": "كل مديري الفروع",
        "allTechnasian": "كل الفنيين",
        "AllLbl": "كل",
        "moreFilter": "المزيد",
        "lessFilter": "الاقل",
        "categoryType": "نوع الفئة",
        "NoQuestionsAvailable": "لا يوجد اسئلة متاحة",
        "NewcategoryTypeLbl": "نوع فئة جديد",
        "allUsers": "كل المستخدميين",
        "AnswererdBy": "أجاب بواسطة",
        "NocategoryTypesAvailable": "لايوجد نوع فئة متاحة",
        "Priority": "أفضلية",
        "Critical": "حرج",
        "High": "هام",
        "Medium": "متوسط",
        "Low": "منخفض",
        "Reassigned": "إعادة تعيين",
        "Completed": "منتهى",
        "ReassignedBtn": "إعادة تعيين ل",
        "CompleteBtn": "اكتمال",
        "history": "سجل",
        "modifyBy": "تعديل بواسطة",
        "modifyTime": "تاريخ التعديل"
      }

      $translateProvider.translations('en', en_translations);

      $translateProvider.translations('ar', ar_translations);

      $translateProvider.preferredLanguage(appCONSTANTS.defaultLanguage);

    }]);

}());
