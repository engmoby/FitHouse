using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.BLL.DTOs;
using FitHouse.BLL.Services.Interfaces;
using FitHouse.Common;
using FitHouse.Common.CustomException;
using FitHouse.DAL.Entities.Model;
using Repository.Pattern.UnitOfWork;

namespace FitHouse.BLL.Services
{
    public class ProgramFacade : BaseFacade, IProgramFacade
    {
        private readonly IProgramService _programService;
        private readonly IProgramTranslationService _programTranslationService;

        public ProgramFacade(IProgramService programService, IUnitOfWorkAsync unitOfWork, IProgramTranslationService programTranslationService) : base(unitOfWork)
        {
            _programService = programService;
            _programTranslationService = programTranslationService;
        }

        public ProgramDto CreateProgram(ProgramDto programDto, int userId)
        {
            //if (GetCategory(programDto.ProgramId) != null)
            //{
            //    return EditCategory(programDto, userId);
            //}
            ValidateProgram(programDto);
            var programObj = Mapper.Map<Program>(programDto);
            foreach (var programName in programDto.ProgramNameDictionary)
            {
                programObj.ProgramTranslations.Add(new ProgramTranslation
                {
                    Title = programName.Value,

                    Language = programName.Key,
                    Description = programDto.ProgramDescriptionDictionary[programName.Key],
                });
            }

            programObj.ProgramDays = programDto.ProgramDays;
            programObj.NoOfMeals = programDto.NoOfMeals;
            programObj.IsBreakfast = programDto.IsBreakfast;
            programObj.IsForClient = programDto.IsForClient;
            programObj.IsAdmin = programDto.IsAdmin;
            programObj.ProgramDiscount = programDto.ProgramDiscount;
            programObj.IsActive = true;
            programObj.IsDeleted = false;
          
            _programTranslationService.InsertRange(programObj.ProgramTranslations);
            _programService.Insert(programObj);
            SaveChanges();
            return programDto;
        }

        private void ValidateProgram(ProgramDto programDto)
        {
            foreach (var name in programDto.ProgramNameDictionary)
            {
                if (name.Value.Length > 300)
                    throw new ValidationException(ErrorCodes.MenuNameExceedLength);

                if (_programTranslationService.CheckNameExist(name.Value, name.Key, programDto.ProgramId))
                    throw new ValidationException(ErrorCodes.NameIsExist);
            }
        }
    }
}
