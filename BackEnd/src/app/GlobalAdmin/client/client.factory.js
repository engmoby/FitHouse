(function () {
    angular
        .module('home')
        .factory('ClientResource', ['$resource', 'appCONSTANTS', ClientResource])

    function ClientResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Clients/', {}, {
            getAllClients: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/GetAllClients', useToken: true, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Users/EditRegisterUser', useToken: true },
            getClient: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/GetUserById/:UserId', useToken: true },
        })
    }

}());
