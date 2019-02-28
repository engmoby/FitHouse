(function () {
    angular
        .module('home')
        .factory('AddressResource', ['$resource', 'appCONSTANTS', AddressResource])

    function AddressResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Address/', {}, {
            getAllAddress: { method: 'GET', url: appCONSTANTS.API_URL + 'Address/GetUserAddresses/:userId', useToken: true, isArray: true },
            // getUserAddresses: { method: 'GET', url: appCONSTANTS.API_URL + 'Address/GetUserAddresses/:userId', useToken: true, isArray: true },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Address/EditAddress', useToken: true },
            getAddress: { method: 'GET', url: appCONSTANTS.API_URL + 'Address/GetAddressById/:AddressId', useToken: true }

        })
    }
}());
