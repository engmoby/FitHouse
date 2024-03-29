﻿using System;
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
    public class CountryTranslationService:Service<CountryTranslation>,ICountryTranslationService
    {
        public CountryTranslationService(IRepositoryAsync<CountryTranslation> repository):base(repository)
        {
            
        }
        public bool CheckNameExist(string objName, string language, long recordId)
        {
            return Queryable()
                .Any(x => x.Language.ToLower() == language.ToLower() && x.Title.ToLower() == objName.ToLower() &&
                          x.CountryId != recordId  && !x.Country.IsDeleted);
        }
    }
}
