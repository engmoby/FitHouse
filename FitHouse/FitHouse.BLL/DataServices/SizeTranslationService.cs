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
    public class SizeTranslationService : Service<SizeTranslation>, ISizeTranslationService
    {
        public SizeTranslationService(IRepositoryAsync<SizeTranslation> repository) : base(repository)
        {

        }
        public bool CheckSizeNameExist(string sizeName, string language, long sizeId)
        {
            return Queryable()
                .Any(x => x.Language.ToLower() == language.ToLower() &&
                          x.SizeName.ToLower() == sizeName.ToLower() &&
                          !x.Size.IsDeleted && x.SizeId != sizeId );
        }
    }
}
