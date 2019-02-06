using System.Linq;
using AutoMapper;
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.BLL.DTOs;
using FitHouse.BLL.Services.Interfaces;
using FitHouse.Common;
using FitHouse.Common.CustomException;
using Repository.Pattern.UnitOfWork;
using FitHouse.DAL.Entities.Model;

namespace FitHouse.BLL.Services
{
    public class LogFacade : BaseFacade, ILogFacade
    {
        private readonly ILogService _logService; 
        public LogFacade(ILogService logService, IUnitOfWorkAsync unitOfWork) : base(unitOfWork)
        {
            _logService = logService;
        }

        public LogFacade(ILogService logService)
        {
            _logService = logService;
        }

        public LogDto GetLog(long logId)
        {
            return Mapper.Map<LogDto>(_logService.Query(x => x.LogId == logId).Select().FirstOrDefault());
        }

        public LogDto CreateLog(LogDto logDto)
        {
            var logObj = Mapper.Map<Log>(logDto);

            _logService.Insert(logObj);
            SaveChanges();
            return logDto;
        }

        public PagedResultsDto GetAllLogs(int page, int pageSize)
        {
            return _logService.GetAllLogs( page, pageSize);
        }

    }
}