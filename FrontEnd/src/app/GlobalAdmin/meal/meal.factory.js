(function() {
    angular
      .module('home')
      .factory('MealResource', ['$resource', 'appCONSTANTS', MealResource])
      .factory('GetMealsResource', ['$resource', 'appCONSTANTS', GetMealsResource])
      ;
  
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

}());
  