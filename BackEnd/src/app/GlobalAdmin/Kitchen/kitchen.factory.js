(function () {
    angular
      .module('home')
        .factory('kitchensResource', ['$resource', 'appCONSTANTS', kitchensResource])
     
    function kitchensResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Orders/', {}, {
            getAllkitchens: { method: 'GET', url: appCONSTANTS.API_URL + 'Orders/GetAllOrdersForKitchen', useToken: true, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Orders/Editkitchen', useToken: true },
            getkitchen: { method: 'GET', url: appCONSTANTS.API_URL + 'Orders/GetkitchenById/:kitchenId', useToken: true } ,
            getFullkitchen: { method: 'GET', url: appCONSTANTS.API_URL + 'Orders/GetFullkitchenById/:kitchenId', useToken: true } ,  
            GetOrderItems: { method: 'POST', url: appCONSTANTS.API_URL + 'Orders/GetOrderItems/', useToken: true } ,
            ChangeOrderStatus: { method: 'POST', url: appCONSTANTS.API_URL + 'Orders/ChangeorderStatus/', useToken: true } 
        })
    } 
}());
