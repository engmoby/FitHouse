(function () {
    angular
      .module('home')
        .factory('OrdersResource', ['$resource', 'appCONSTANTS', OrdersResource])
        .factory('PermissionResource', ['$resource', 'appCONSTANTS', PermissionResource])

    function OrdersResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Orders/', {}, {
            getAllOrders: { method: 'GET', url: appCONSTANTS.API_URL + 'Orders/GetAllOrders', useToken: true, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Orders/EditOrder', useToken: true },
            getOrder: { method: 'GET', url: appCONSTANTS.API_URL + 'Orders/GetOrderById/:OrderId', useToken: true } ,
            getFullOrder: { method: 'GET', url: appCONSTANTS.API_URL + 'Orders/GetFullOrderById/:OrderId', useToken: true }   

        })
    }
    function PermissionResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Permissions/', {}, {
            getAllPermissions: { method: 'GET', url: appCONSTANTS.API_URL + 'Permissions/GetAllPermissions', useToken: true, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Permissions/EditOrder', useToken: true },
            getOrder: { method: 'GET', url: appCONSTANTS.API_URL + 'Permissions/GetOrderById/:OrderId', useToken: true }

        })
    }
}());
