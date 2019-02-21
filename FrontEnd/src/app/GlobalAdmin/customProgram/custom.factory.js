(function () {
  angular
    .module('home')
    .factory('CustomResource', ['$resource', 'appCONSTANTS', CustomResource])
    .factory('CustomsResourceCategories', ['$resource', 'appCONSTANTS', CustomsResourceCategories])
    .factory('GetItemsResource', ['$resource', 'appCONSTANTS', GetItemsResource])
    .factory('CustomsResourceItems', ['$resource', 'appCONSTANTS', CustomsResourceItems]);

  function CustomResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Orders', {}, {
      createOrder: { method: 'POST', url: appCONSTANTS.API_URL + 'Orders/CreateOrder', useToken: true }
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

}());
