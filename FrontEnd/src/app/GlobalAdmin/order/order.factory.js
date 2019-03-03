(function () {
    angular
      .module('home')
        .factory('OrdersResource', ['$resource', 'appCONSTANTS', OrdersResource]) 

    function OrdersResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Orders/', {}, {
            getAllOrders: { method: 'GET', url: appCONSTANTS.API_URL + 'Orders/GetOrderByClientId', useToken: true  },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Orders/EditOrder', useToken: true },
            getOrder: { method: 'GET', url: appCONSTANTS.API_URL + 'Orders/GetOrderById/:OrderId', useToken: true } ,
            getFullOrder: { method: 'GET', url: appCONSTANTS.API_URL + 'Orders/GetFullOrderById/:OrderId', useToken: true }   

        })
    } 
}());
