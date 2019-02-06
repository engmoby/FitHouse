(function () {
  angular
    .module('home')
    //   .factory('ProgramResource', ['$resource', 'appCONSTANTS', ProgramResource])
    //   .factory('ProgramPagingResource', ['$resource', 'appCONSTANTS', ProgramPagingResource])
    .factory('UpdateProgramResource', ['$resource', 'appCONSTANTS', UpdateProgramResource])
    //   .factory('DeleteProgramResource', ['$resource', 'appCONSTANTS', DeleteProgramResource])
    //   .factory('AddProgramListResource', ['$resource', 'appCONSTANTS', AddProgramListResource])
    .factory('AddProgramResource', ['$resource', 'appCONSTANTS', AddProgramResource])
    .factory('GetDaysResource', ['$resource', 'appCONSTANTS', GetDaysResource])
    .factory('GetProgramDetailResource', ['$resource', 'appCONSTANTS', GetProgramDetailResource])
    .factory('GetProgramResource', ['$resource', 'appCONSTANTS', GetProgramResource])
    .factory('EditProgramByIdResource', ['$resource', 'appCONSTANTS', EditProgramByIdResource])
    .factory('UpdateProgramDetailsResource', ['$resource', 'appCONSTANTS', UpdateProgramDetailsResource])
    .factory('GetProgramByIdResource', ['$resource', 'appCONSTANTS', GetProgramByIdResource])
    ;

  function AddProgramResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Program/', {}, {
      create: { method: 'POST', useToken: true }
    })
  }

  function GetDaysResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Day/GetAllDays', {}, {
      gatAllDays: { method: 'GET', useToken: true, isArray: true }
    })
  }

  function GetProgramResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Program', {}, {
      gatAllPrograms: { method: 'GET', useToken: true }
    })
  }

  function EditProgramByIdResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Program/UpdateProgram', {}, {
      update: { method: 'POST', useToken: true }
    })
  }

  function UpdateProgramDetailsResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Program', {}, {
      updateProgramDetails: { method: 'POST', url: appCONSTANTS.API_URL + 'Program/UpdateProgramDetails/:programId/:dayCount/:mealCount', useToken: true }
    })
  }

  function GetProgramDetailResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Program', {}, {
      getProgramDetail: { method: 'GET', url: appCONSTANTS.API_URL + 'Program/GetAllProgramItems/:programId', useToken: true }
    })
  }

  function UpdateProgramResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Program', {}, {
      update: { method: 'POST', url: appCONSTANTS.API_URL + 'Program/EditProgram', useToken: true }
    })
  }

  function GetProgramByIdResource($resource, appCONSTANTS) {
    return $resource(appCONSTANTS.API_URL + 'Program', {}, {
      getProgram: { method: 'GET', url: appCONSTANTS.API_URL + 'Program/GetProgramById/:ProgramId', useToken: true },

    })
  }
}());

