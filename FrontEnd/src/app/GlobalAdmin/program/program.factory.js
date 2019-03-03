(function () {
    angular
        .module('home')
        .factory('GetProgramDetailResource', ['$resource', 'appCONSTANTS', GetProgramDetailResource])
        .factory('GetItemsssResource', ['$resource', 'appCONSTANTS', GetItemsssResource])
        .factory('GetProgramByIdResource', ['$resource', 'appCONSTANTS', GetProgramByIdResource])
        .factory('OrderResource', ['$resource', 'appCONSTANTS', OrderResource])
        .factory('RegionResource', ['$resource', 'appCONSTANTS', RegionResource])
        .factory('CityResource', ['$resource', 'appCONSTANTS', CityResource])
        .factory('AreaResource', ['$resource', 'appCONSTANTS', AreaResource])
        .factory('CountryResource', ['$resource', 'appCONSTANTS', CountryResource])
        ;

    function OrderResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Orders', {}, {
            createOrder: { method: 'POST', url: appCONSTANTS.API_URL + 'Orders/CreateOrder', useToken: true },
            getUserAddresses: { method: 'GET', url: appCONSTANTS.API_URL + 'Address/GetUserAddresses/:userId', useToken: true, isArray: true },

        })
    }

    function CountryResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Countries/', {}, {
            getAllCountries: { method: 'GET', url: appCONSTANTS.API_URL + 'Countries/GetAllCountries', useToken: false, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Countries/EditCountry', useToken: true },
            getCountry: { method: 'GET', url: appCONSTANTS.API_URL + 'Countries/:countryId', useToken: true }

        })
    }

    function AreaResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Areas/', {}, {
            getAllAreas: { method: 'GET', url: appCONSTANTS.API_URL + 'Cities/:cityId/Areas/GetAllAreas', useToken: false, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Areas/EditArea', useToken: true },
            getArea: { method: 'GET', url: appCONSTANTS.API_URL + 'Areas/GetAreaById/:AreaId', useToken: true },
            getAllAreasForUser: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/:userId/Areas', useToken: true, isArray: true }
        })
    }

    function RegionResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Regions/', {}, {
            getAllRegions: { method: 'GET', url: appCONSTANTS.API_URL + 'Countries/:countryId/Regions', useToken: false, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Regions/EditRegion', useToken: true },
            getRegion: { method: 'GET', url: appCONSTANTS.API_URL + 'Regions/:regionId', useToken: true },
            getAllRegionsForUser: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/:userId/Regions', useToken: true, isArray: true }

        })
    }

    function CityResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Cities/', {}, {
            getAllCities: { method: 'GET', url: appCONSTANTS.API_URL + 'Regions/:regionId/Cities', useToken: false, params: { lang: '@lang' } },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Cities/EditCity', useToken: true },
            getCity: { method: 'GET', url: appCONSTANTS.API_URL + 'Cities/:cityId', useToken: true },
            getAllCitiesForUser: { method: 'GET', url: appCONSTANTS.API_URL + 'Users/:userId/Cities', useToken: true, isArray: true }
        })
    }

    function GetProgramDetailResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Program', {}, {
            getProgramDetail: { method: 'GET', url: appCONSTANTS.API_URL + 'Program/GetAllProgramItems/:programId', useToken: true }
        })
    }

    function GetProgramByIdResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Program', {}, {
            getProgram: { method: 'GET', url: appCONSTANTS.API_URL + 'Program/GetProgramById/:ProgramId', useToken: true },

        })
    }

    function GetItemsssResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Items/GetAllItems', {}, {
            getAllItemsss: { method: 'GET', useToken: true, params: { lang: '@lang' }, isArray: true },
        })
    }

}());

