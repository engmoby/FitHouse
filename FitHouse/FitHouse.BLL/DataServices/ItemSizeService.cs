using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.DAL.Entities.Model;
using Repository.Pattern.Repositories;
using Service.Pattern;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitHouse.BLL.DataServices
{
    public class ItemSizeService: Service<ItemSize>, IItemSizeService
    {
        public ItemSizeService(IRepositoryAsync<ItemSize> repository) : base(repository)
        {

        }
    }
}
