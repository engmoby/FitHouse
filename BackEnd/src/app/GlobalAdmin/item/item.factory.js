(function() {
    angular
      .module('home')
      .factory('ItemResource', ['$resource', 'appCONSTANTS', ItemResource])
      .factory('GetItemsResource', ['$resource', 'appCONSTANTS', GetItemsResource])
      .factory('GetItemNamesResource', ['$resource', 'appCONSTANTS', GetItemNamesResource])
      .factory('TranslateItemResource', ['$resource', 'appCONSTANTS', TranslateItemResource])
      .factory('ActivateItemResource', ['$resource', 'appCONSTANTS', ActivateItemResource])
      .factory('DeactivateItemResource', ['$resource', 'appCONSTANTS', DeactivateItemResource])
      .factory('GetItemsssResource', ['$resource', 'appCONSTANTS', GetItemsssResource])

      ;
  
    function ItemResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Items/:itemId', {}, {
        create: { method: 'POST', useToken: true },
        getItem: { method: 'GET', useToken: true },
        deleteItem: { method: 'DELETE', useToken: true },
        update: { method: 'PUT', useToken: true }
      })
    }
    function GetItemsResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Categories/:CategoryId/Items', {}, {
          getAllItems: { method: 'GET', useToken: true, params:{lang:'@lang'} },
        })
    }

    function GetItemsssResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Items/GetAllItems', {}, {
        getAllItemsss: { method: 'GET', useToken: true, params:{lang:'@lang'},  isArray:true },
      })
  }

    function GetItemNamesResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Category/:CategoryId/Items/Name', {}, {
        getAllItemNames: { method: 'GET', useToken: true, isArray: true, params:{lang:'@lang'} },
      })
    }
    
    function TranslateItemResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Items/Translate', {}, {
        translateItem: { method: 'PUT', useToken: true},
      })
    }

    function ActivateItemResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Items/:itemId/Activate', {}, {
          Activate: { method: 'GET', useToken: true}
        })
    }
    function DeactivateItemResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Items/:itemId/DeActivate', {}, {
          Deactivate: { method: 'GET', useToken: true }
        })
    }
}());
  