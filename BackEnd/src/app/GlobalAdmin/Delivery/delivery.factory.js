(function () {
    angular
      .module('home')
        .factory('DeliverysResource', ['$resource', 'appCONSTANTS', DeliverysResource])
     
    function DeliverysResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Orders/', {}, {
            getAllDeliverys: { method: 'GET', url: appCONSTANTS.API_URL + 'Orders/GetAllOrdersForDelivery', useToken: true, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Orders/EditDelivery', useToken: true },
            getDelivery: { method: 'GET', url: appCONSTANTS.API_URL + 'Orders/GetDeliveryById/:DeliveryId', useToken: true } ,
            getFullDelivery: { method: 'GET', url: appCONSTANTS.API_URL + 'Orders/GetFullDeliveryById/:DeliveryId', useToken: true } ,  
            GetOrderItems: { method: 'GET', url: appCONSTANTS.API_URL + 'Orders/GetOrderItems/:orderId:programId', useToken: true } ,
            ChangeOrderStatus: { method: 'POST', url: appCONSTANTS.API_URL + 'Orders/ChangeOrderDetailsStatus/', useToken: true } 
        })
    } 
}());
