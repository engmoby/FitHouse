(function () {
    angular
        .module('home')
        .factory('OrderResource', ['$resource', 'appCONSTANTS', OrderResource])

    function OrderResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Orders', {}, {
            createOrder: { method: 'POST', url: appCONSTANTS.API_URL + 'Orders/CreateOrder', useToken: true }, 
            getMealItems: { method: 'GET', url: appCONSTANTS.API_URL + 'Meals/GetMealItems/:MealId', useToken: true, isArray:true },             
            // createOrder: { method: 'POST', useToken: true },
            // createMeal: { method: 'POST', url: appCONSTANTS.API_URL + 'Orders/CreateMeal', useToken: true }, 
        })
    }

}());
