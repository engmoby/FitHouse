(function() {
    angular
      .module('home')
      .factory('MealResource', ['$resource', 'appCONSTANTS', MealResource])
      .factory('GetMealsResource', ['$resource', 'appCONSTANTS', GetMealsResource])
      .factory('GetMealNamesResource', ['$resource', 'appCONSTANTS', GetMealNamesResource])
      .factory('TranslateMealResource', ['$resource', 'appCONSTANTS', TranslateMealResource])
      .factory('ActivateMealResource', ['$resource', 'appCONSTANTS', ActivateMealResource])
      .factory('DeactivateMealResource', ['$resource', 'appCONSTANTS', DeactivateMealResource]);
  
    function MealResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Meals/:mealId', {}, {
        create: { method: 'POST', useToken: true },
        getMeal: { method: 'GET', useToken: true },
        deleteMeal: { method: 'DELETE', useToken: true },
        update: { method: 'PUT', useToken: true }
      })
    }
    function GetMealsResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Meals/GetAllMeals', {}, {
          getAllMeals: { method: 'GET', useToken: true, params:{lang:'@lang'} },
        })
    }

    function GetMealNamesResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Category/:CategoryId/Meals/Name', {}, {
        getAllMealNames: { method: 'GET', useToken: true, isArray: true, params:{lang:'@lang'} },
      })
    }
    
    function TranslateMealResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Meals/Translate', {}, {
        translateMeal: { method: 'PUT', useToken: true},
      })
    }

    function ActivateMealResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Meals/:mealId/Activate', {}, {
          Activate: { method: 'GET', useToken: true}
        })
    }
    function DeactivateMealResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Meals/:mealId/DeActivate', {}, {
          Deactivate: { method: 'GET', useToken: true }
        })
    }
}());
  