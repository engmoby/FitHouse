(function () {
    angular
      .module('home')
      .factory('GetSettingsResource', ['$resource', 'appCONSTANTS', GetSettingsResource])
      .factory('UpdateSettingsResource', ['$resource', 'appCONSTANTS', UpdateSettingsResource])
      ;

  
    function GetSettingsResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Setting/GetSetting', {}, {
        getAllSettings: { method: 'GET', useToken: true}
      })
    }

    function UpdateSettingsResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Setting/UpdateSetting', {}, {
          update: { method: 'POST', useToken: true }, 
      })
  }
  
  }());
  
  