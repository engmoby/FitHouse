(function () {
    angular
      .module('home')
        .factory('PickupsResource', ['$resource', 'appCONSTANTS', PickupsResource]) 

    function PickupsResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Pickups/', {}, {
            getAllPickups: { method: 'GET', url: appCONSTANTS.API_URL + 'Orders/GetAllOrdersForPickup', useToken: true, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Orders/EditOrder', useToken: true },
            getPickup: { method: 'GET', url: appCONSTANTS.API_URL + 'Orders/GetPickupById/:PickupId', useToken: true } ,
            getFullPickup: { method: 'GET', url: appCONSTANTS.API_URL + 'Orders/GetFullPickupById/:PickupId', useToken: true }   ,
            ChangeOrderStatus: { method: 'POST', url: appCONSTANTS.API_URL + 'Orders/ChangeOrderStatus/', useToken: true } 

        })
    } 
}());
