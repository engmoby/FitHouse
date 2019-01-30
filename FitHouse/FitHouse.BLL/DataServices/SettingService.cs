using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.DAL.Entities.Model;
using Repository.Pattern.Repositories;
using Service.Pattern;

namespace FitHouse.BLL.DataServices
{
    public class SettingService : Service<Setting>, ISettingService
    {
        public SettingService(IRepositoryAsync<Setting> repository) : base(repository)
        {
            _repository = repository;
        }

        public Setting GetSetting()
        {
            var setting = _repository.Query(x => x.IsDeleted != true).Select().FirstOrDefault();
            return setting;
        }
    }
}
