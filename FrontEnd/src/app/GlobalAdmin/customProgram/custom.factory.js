(function () {
  angular
    .module('home')
    .factory('CustomResource', ['$resource', 'appCONSTANTS', CustomResource]) 
    .factory('GetItemsResource', ['$resource', 'appCONSTANTS', GetItemsResource])
    .factory('UserAddressesResource', ['$resource', 'appCONSTANTS', UserAddressesResource])
    .factory('CountryResource', ['$resource', 'appCONSTANTS', CountryResource])
    .factory('RegionResource', ['$resource', 'appCONSTANTS', RegionResource])
    .factory('CityResource', ['$resource', 'appCONSTANTS', CityResource])
    .factory('AreaResource', ['$resource', 'appCONSTANTS', AreaResource])
    .factory('BranchResource', ['$resource', 'appCONSTANTS', BranchResource]) 
    .factory('CategoryResource', ['$resource', 'appCONSTANTS', CategoryResource]) 
    .factory('ItemResource', ['$resource', 'appCONSTANTS', ItemResource])
    ;

  function CustomResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Program/', {}, {
      create: { method: 'POST', useToken: true }
    })
  }
  function CustomsResourceItems($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Categories/:CategoryId/GetAllActiveItems', {}, {
      getAllItems: { method: 'GET', useToken: true, params: { lang: '@lang' } }
    })
  }
  function CustomsResourceCategories($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Category/GetAllCategs', {}, {
      getAllCategories: { method: 'GET', useToken: true, params: { lang: '@lang' }, isArray: true }
    })
  }


  function GetItemsResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Items/GetAllItems', {}, {
      getAllItemsCategorized: { method: 'GET', useToken: true, params: { lang: '@lang' }, isArray: true }
    })
  }

  function UserAddressesResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Orders', {}, { 
      getUserAddresses: { method: 'GET', url: appCONSTANTS.API_URL + 'Address/GetUserAddresses/:userId', useToken: true, isArray:true },             
    })
  }
  function CountryResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Countries/', {}, {
      getAllCountries: { method: 'GET', url: appCONSTANTS.API_URL + 'Countries/GetAllCountries', useToken: false, params: { lang: '@lang' } },

    })
  }
  function RegionResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Regions/', {}, {
      getAllRegions: { method: 'GET', url: appCONSTANTS.API_URL + 'Countries/:countryId/Regions', useToken: false, params: { lang: '@lang' } },
    })
  }
  function CityResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Cities/', {}, {
      getAllCities: { method: 'GET', url: appCONSTANTS.API_URL + 'Regions/:regionId/Cities', useToken: false, params: { lang: '@lang' } },
    })
  }
  function AreaResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Areas/', {}, {
      getAllAreas: { method: 'GET', url: appCONSTANTS.API_URL + 'Cities/:cityId/Areas/GetAllAreas', useToken: false, params: { lang: '@lang' } },
    })
  }
  function BranchResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Branchs/', {}, { 
        getBranch: { method: 'GET', url: appCONSTANTS.API_URL + 'Branchs/GetBranchById/:BranchId', useToken: false }
    })
}

function CategoryResource($resource, appCONSTANTS) {
  return $resource(appCONSTANTS.API_URL + 'Category/', {}, {
      GetAllActiveCategories: { method: 'GET', url: appCONSTANTS.API_URL + 'Category/GetAllActiveCategories', useToken: true, isArray:true},
      GetAllActiveItems: { method: 'GET', url: appCONSTANTS.API_URL + 'Categories/:categoryId/GetAllActiveItems', useToken: true}
  })
} 

function ItemResource($resource, appCONSTANTS) {
  return $resource(appCONSTANTS.API_URL + 'Items/:itemId', {}, {
    GetAllItemSizes: { method: 'GET', url: appCONSTANTS.API_URL + 'Items/:itemId/sizes', useToken: true, isArray:true},
  })
}

}());
