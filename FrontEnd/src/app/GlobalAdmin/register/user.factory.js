(function () {
    angular
        .module('home')
        .factory('UserResource', ['$resource', 'appCONSTANTS', UserResource])

    function UserResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Users/', {}, {
            create: { method: 'POST', useToken: false },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Users/EditRegisterUser', useToken: true },
            getUser: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/GetUserById/:UserId', useToken: true }, 
            validate: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/ValidateByPhone/:Phone', useToken: true }, 
            getUserDepartments: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/Departments', useToken: true }, 
        })
    }

}());
