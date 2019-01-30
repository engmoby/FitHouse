(function () {
    angular
      .module('home')
      .factory('GetSettingsResource', ['$resource', 'appCONSTANTS', GetSettingsResource])
      ;

  
    function GetSettingsResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Setting/GetSetting', {}, {
        getAllSettings: { method: 'GET', useToken: true}
      })
    }
  
  }());
  
  