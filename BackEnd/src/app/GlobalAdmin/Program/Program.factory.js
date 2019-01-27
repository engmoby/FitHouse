(function() {
    angular
      .module('home')
    //   .factory('ProgramResource', ['$resource', 'appCONSTANTS', ProgramResource])
    //   .factory('ProgramPagingResource', ['$resource', 'appCONSTANTS', ProgramPagingResource])
    //   .factory('UpdateProgramResource', ['$resource', 'appCONSTANTS', UpdateProgramResource])
    //   .factory('DeleteProgramResource', ['$resource', 'appCONSTANTS', DeleteProgramResource])
    //   .factory('AddProgramListResource', ['$resource', 'appCONSTANTS', AddProgramListResource])
      .factory('AddProgramResource', ['$resource', 'appCONSTANTS', AddProgramResource])
      .factory('GetDaysResource', ['$resource', 'appCONSTANTS', GetDaysResource])
      ;
  
    function AddProgramResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Program/', {}, { 
        create: { method: 'POST',useToken: true}
      })
    }

     function GetDaysResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Day/GetAllDays', {}, {
        gatAllDays: { method: 'GET', useToken: true,isArray:true} 
      })
    }
    
    // function AddProgramListResource($resource, appCONSTANTS) {
    //   return $resource(appCONSTANTS.API_URL + 'ProgramsList/', {}, { 
    //     createProgramList: { method: 'POST',useToken: true,isArray:true}
    //   })
    // }
    
    // function ProgramResource($resource, appCONSTANTS) {
    //   return $resource(appCONSTANTS.API_URL + 'Programs', {}, {
    //     getAllPrograms: { method: 'GET', useToken: true, isArray:true } 
    //   })
    // }

    // function ProgramPagingResource($resource, appCONSTANTS) {
    //   return $resource(appCONSTANTS.API_URL + 'ProgramsPaging', {}, {
    //     getAllPagingPrograms: { method: 'GET', useToken: true} 
    //   })
    // }

    // function ProgramFilterByGroupResource($resource, appCONSTANTS) {
    //   return $resource(appCONSTANTS.API_URL + 'Br_GroupProgram/:groupID', {}, {
    //     getProgramsForCertainGroup: { method: 'GET', useToken: true} 
    //   })
    // }

    // function GroupFilterByProgramResource($resource, appCONSTANTS) {
    //   return $resource(appCONSTANTS.API_URL + 'Br_ProgramGroup/:contactID', {}, {
    //     getGroupsForCertainProgram: { method: 'GET', useToken: true, isArray:true } 
    //   })
    // }

    // function UpdateProgramResource($resource, appCONSTANTS) {
    //   return $resource(appCONSTANTS.API_URL + 'Programs', {}, {
    //     updateProgram: { method: 'PUT', useToken: true} 
    //   })
    // }

    // function DeleteProgramResource($resource, appCONSTANTS) {
    //   return $resource(appCONSTANTS.API_URL + 'Programs/:contactID', {}, {
    //     deleteProgram: { method: 'Delete', useToken: true} 
    //   })
    // }
      
  }());
  
