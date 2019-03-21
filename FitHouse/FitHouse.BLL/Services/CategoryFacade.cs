using System.Collections.Generic;
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
    public class CategoryFacade : BaseFacade, ICategoryFacade
    {
        private readonly ICategoryService _categoryService;
        private readonly ICategoryTranslationService _typeTranslationService; 

        public CategoryFacade(ICategoryService categoryService, IUnitOfWorkAsync unitOfWork, ICategoryTranslationService typeTranslationService ) : base(unitOfWork)
        {
            _categoryService = categoryService;
            _typeTranslationService = typeTranslationService; 
        }

        public CategoryFacade(ICategoryService categoryService, ICategoryTranslationService typeTranslationService  )
        {
            _categoryService = categoryService;
            _typeTranslationService = typeTranslationService; 
        }

        public CategoryDto GetCategory(long categoryId)
        {
            // return Mapper.Map<CategoryDto>(_categoryService.Query(x => x.CategoryId == categoryId && x.TenantId == tenantId).Select().FirstOrDefault());
            if (categoryId == 0) return null;

            var query = _categoryService.Query(x => x.CategoryId == categoryId ).Select()
                .FirstOrDefault();


            var category = new CategoryDto();
            if (query != null)
            {
                category.CategoryId = query.CategoryId; 
                category.TitleDictionary = query.CategoryTranslations.ToDictionary(translation => translation.Language.ToLower(),
                    translation => translation.Title);
  }

            return category;
        }

        public CategoryDto CreateCategory(CategoryDto categoryDto, int userId)
        {
            if (GetCategory(categoryDto.CategoryId) != null)
            {
                return EditCategory(categoryDto, userId);
            }
            ValidateCategory(categoryDto);
            var categoryObj = Mapper.Map<Category>(categoryDto);
            foreach (var categoryName in categoryDto.TitleDictionary)
            {
                categoryObj.CategoryTranslations.Add(new CategoryTranslation
                {
                    Title = categoryName.Value,
                    Language = categoryName.Key 
                });
            }
       
            categoryObj.IsActive = true;
            categoryObj.CreationTime = Strings.CurrentDateTime;
            categoryObj.CreatorUserId = userId; 
            _typeTranslationService.InsertRange(categoryObj.CategoryTranslations);
            _categoryService.Insert(categoryObj);
            SaveChanges();
            return categoryDto;
        }

        public CategoryDto EditCategory(CategoryDto categoryDto, int userId)
        {
            var categoryObj = _categoryService.Find(categoryDto.CategoryId);
            if (categoryObj == null) throw new NotFoundException(ErrorCodes.ProductNotFound);
            ValidateCategory(categoryDto);
            foreach (var categoryName in categoryDto.TitleDictionary)
            {
                var categoryTranslation = categoryObj.CategoryTranslations.FirstOrDefault(x => x.Language.ToLower() == categoryName.Key.ToLower() && x.CategoryId == categoryDto.CategoryId);
                if (categoryTranslation == null)
                {
                    categoryObj.CategoryTranslations.Add(new CategoryTranslation
                    {
                        Title = categoryName.Value,
                        Language = categoryName.Key
                    });
                }
                else
                    categoryTranslation.Title = categoryName.Value;
            }

          

            categoryObj.LastModificationTime = Strings.CurrentDateTime;
            categoryObj.LastModifierUserId = userId;
            categoryObj.IsDeleted = categoryDto.IsDeleted;
            categoryObj.IsActive = categoryDto.IsActive;
            _categoryService.Update(categoryObj);
            SaveChanges();
            return categoryDto;

        }

        public PagedResultsDto GetAllCategorys(int page, int pageSize)
        {
            return _categoryService.GetAllCategorys(page, pageSize);
        }

        public List<CategoryProgramDto> GetAllCategs()
        {
            return Mapper.Map<List<CategoryProgramDto>>(_categoryService.GetAllCategs());
        }

        private void ValidateCategory(CategoryDto categoryDto)
        {
            foreach (var name in categoryDto.TitleDictionary)
            {
                if (name.Value.Length > 300)
                    throw new ValidationException(ErrorCodes.MenuNameExceedLength);

                if (_typeTranslationService.CheckNameExist(name.Value, name.Key, categoryDto.CategoryId))
                    throw new ValidationException(ErrorCodes.NameIsExist);
            }
        }

        public List<CategoryDto> GetAllActiveCategories()
        {
            return Mapper.Map<List<CategoryDto>>(_categoryService.GetAllActiveCategories());
        }
    }
}
