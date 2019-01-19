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
    public class PackageService:Service<Package>,IPackageService
    {
        public PackageService(IRepositoryAsync<Package> repository):base(repository)
        {
            
        }
    }
}
