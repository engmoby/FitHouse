using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FitHouse.BLL.DataServices.Interfaces;
using Repository.Pattern.Repositories;
using Service.Pattern;
using FitHouse.DAL.Entities.Model;

namespace FitHouse.BLL.DataServices
{
    public class DayService : Service<Day>, IDayService
    {
        public DayService(IRepositoryAsync<Day> repository) : base(repository)
        {

        }

        public List<Day> GetAllDays()
        {
            var days = _repository.Query(x => x.IsDeleted != true).Select().ToList();
            return days;
        }
    }
}
