using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.BLL.DTOs;
using FitHouse.BLL.Services.Interfaces;
using FitHouse.BLL.Services.ManageStorage;
using FitHouse.Common;
using FitHouse.Common.CustomException;
using FitHouse.DAL.Entities.Model;
using Repository.Pattern.UnitOfWork;

namespace FitHouse.BLL.Services
{
    public class ItemFacade : BaseFacade, IItemFacade
    {
        private readonly ICategoryService _categoryService;
        private readonly IItemService _itemService;
        private readonly IItemTranslationService _itemTranslationService;
        private readonly IManageStorage _manageStorage;
        private ICategoryTranslationService _categoryTranslationService;
        private IMealDetailsService _mealDetailsService;
        private IProgramDetailService _programDetailService;
        public ItemFacade(ICategoryService categoryService, IItemService itemService, IItemTranslationService itemTranslationService, IManageStorage manageStorage,
              ICategoryTranslationService categoryTranslationService, IUnitOfWorkAsync unitOfWork, IProgramDetailService programDetailService, IMealDetailsService mealDetailsService) : base(unitOfWork)
        {
            _categoryService = categoryService;
            _itemService = itemService;
            _itemTranslationService = itemTranslationService;
            _manageStorage = manageStorage;
            _categoryTranslationService = categoryTranslationService;
            _programDetailService = programDetailService;
            _mealDetailsService = mealDetailsService;
        }

        public ItemFacade(ICategoryService categoryService, IItemService itemService, IItemTranslationService itemTranslationService, IManageStorage manageStorage,
              ICategoryTranslationService categoryTranslationService, IProgramDetailService programDetailService, IMealDetailsService mealDetailsService)
        {
            _categoryService = categoryService;
            _itemService = itemService;
            _itemTranslationService = itemTranslationService;
            _manageStorage = manageStorage;
            _categoryTranslationService = categoryTranslationService;
            _programDetailService = programDetailService;
            _mealDetailsService = mealDetailsService;
        }

        public List<ItemProgramDto> GetItemsById(List<ProgramDetailDto> programDetails)
        {
            var items = new List<ItemProgramDto>();
            foreach (var detail in programDetails)
            {
               
                //if(!items.Contains(item))
                var itemValidation = new ItemProgramDto();
                itemValidation = items.FirstOrDefault(x => x.ItemId == detail.ItemId);

                if (itemValidation == null)
                {
                    var item = Mapper.Map<ItemProgramDto>(_itemService.GetProgamItem(detail.ItemId));
                    items.Add(item);
                }


            }
            return items;
        }

        public void AddItem(ItemDto itemDto, string path)
        {
            var category = _categoryService.Find(itemDto.CategoryId);
            if (category == null) throw new NotFoundException(ErrorCodes.CategoryNotFound);
            if (category.IsDeleted) throw new ValidationException(ErrorCodes.CategoryDeleted);
            ValidateItem(itemDto);
            var item = Mapper.Map<Item>(itemDto);
            foreach (var itemName in itemDto.ItemNameDictionary)
            {
                item.ItemTranslations.Add(new ItemTranslation
                {
                    Title = itemName.Value,
                    Description = itemDto.ItemDescriptionDictionary[itemName.Key],
                    Language = itemName.Key.ToLower()
                });
            }
            _itemTranslationService.InsertRange(item.ItemTranslations);
            _itemService.Insert(item);

            SaveChanges();
            if (itemDto.Image != null)
            {
                _manageStorage.UploadImage(path + "\\" + "Category-" + category.CategoryId + "\\" + "\\Items", itemDto.Image, item.ItemId + "-1");
            }
        }

        public List<ItemProgramDto> GetAllItems()
        {
            return Mapper.Map<List<ItemProgramDto>>(_itemService.GetAllItems());
        }

        public ItemDto GetItem(long itemId, string language)
        {
            var item = _itemService.Find(itemId);
            if (item == null) throw new NotFoundException(ErrorCodes.ItemNotFound);
            if (item.IsDeleted) throw new NotFoundException(ErrorCodes.ItemDeleted);
            var itemDto = Mapper.Map<ItemDto>(item);
            var itemTranslation = item.ItemTranslations.FirstOrDefault(x => x.Language.ToLower() == language.ToLower());
            itemDto.ItemName = itemTranslation.Title;
            itemDto.ItemDescription = itemTranslation.Description;
            return itemDto;
        }

        private void ValidateItem(ItemDto itemDto)
        {
            foreach (var itemName in itemDto.ItemNameDictionary)
            {
                if (string.IsNullOrEmpty(itemName.Value))
                    throw new ValidationException(ErrorCodes.EmptyItemName);
                if (string.IsNullOrEmpty(itemDto.ItemDescriptionDictionary[itemName.Key]))
                    throw new ValidationException(ErrorCodes.EmptyItemDescription);
                if (itemName.Value.Length > 100)
                    throw new ValidationException(ErrorCodes.ItemNameExceedLength);
                if (_itemTranslationService.CheckItemNameExistForCategory(itemName.Value, itemName.Key, itemDto.ItemId, itemDto.CategoryId)) throw new ValidationException(ErrorCodes.ItemNameAlreadyExist);
            }
        }

        public PagedResultsDto GetAllItemsByCategoryId(string language, long categoryId, int page, int pageSize)
        {
            var category = _categoryService.Find(categoryId);
            if (category == null) throw new NotFoundException(ErrorCodes.CategoryNotFound);
            if (category.IsDeleted) throw new ValidationException(ErrorCodes.CategoryDeleted);
            var results = _itemTranslationService.GetAllItemsByCategoryId(language, categoryId, page, pageSize);
            //results.IsParentTranslated = language == Strings.DefaultLanguage || _categoryTranslationService.CheckCategoryByLanguage(categoryId, language);
            return results;
        }

        public PagedResultsDto GetActivatedItemsByCategoryId(string language, long categoryId, int page, int pageSize)
        {
            var category = _categoryService.Find(categoryId);
            if (category == null) throw new NotFoundException(ErrorCodes.CategoryNotFound);
            if (category.IsDeleted) throw new ValidationException(ErrorCodes.CategoryDeleted);
            var results = _itemTranslationService.GetActivatedItemsByCategoryId(language, categoryId, page, pageSize);
            return results;
        }

        public void ActivateItem(long itemId)
        {
            var item = _itemService.Find(itemId);
            if (item == null) throw new NotFoundException(ErrorCodes.MenuNotFound);
            if (Strings.SupportedLanguages.Any(x => !item.ItemTranslations.Select(m => m.Language.ToLower())
                .Contains(x.ToLower())))
                throw new ValidationException(ErrorCodes.ItemIsNotTranslated);
            item.IsActive = true;
            _itemService.Update(item);


            SaveChanges();
        }

        public void DeActivateItem(long itemId)
        {
            var item = _itemService.Find(itemId);
            if (item == null) throw new NotFoundException(ErrorCodes.CategoryNotFound);

            item.IsActive = false;

            if (!item.IsActive)
            {
                var checkIfUsed = _programDetailService.Queryable().Where(x => x.ItemId == item.ItemId);
                if (checkIfUsed.Any()) 
                    throw new ValidationException(ErrorCodes.RecordIsUsedInAnotherModule);

                var checkIfUsedOfMeal = _mealDetailsService.Queryable().Where(x => x.ItemId == item.ItemId);
                if (checkIfUsedOfMeal.Any()) 
                    throw new ValidationException(ErrorCodes.RecordIsUsedInAnotherModule);

                var checkIfUsedOfProgram = _programDetailService.Queryable().Where(x => x.ItemId == item.ItemId);
                if (checkIfUsedOfProgram.Any())
                    throw new ValidationException(ErrorCodes.RecordIsUsedInAnotherModule);

            }


            _itemService.Update(item);
            var categoryHasItemActivated = item.Category.Items.Any(x => x.IsActive);
            if (!categoryHasItemActivated)
            {
                item.Category.IsActive = false;
                _categoryService.Update(item.Category);
                CheckMenuHasCategoryActivated(item);
            }
            SaveChanges();
        }

        public void DeleteItem(long itemId)
        {
            var item = _itemService.Find(itemId);
            if (item == null) throw new NotFoundException(ErrorCodes.ItemNotFound);
            item.IsDeleted = true;

            if (item.IsDeleted)
            {
                var checkIfUsed = _programDetailService.Queryable().Where(x => x.ItemId == item.ItemId);
                if (checkIfUsed.Any()) 
                    throw new ValidationException(ErrorCodes.RecordIsUsedInAnotherModule);
                
                var checkIfUsedOfMeal = _mealDetailsService.Queryable().Where(x => x.ItemId == item.ItemId);
                if (checkIfUsedOfMeal.Any())
                    throw new ValidationException(ErrorCodes.RecordIsUsedInAnotherModule);

                var checkIfUsedOfProgram = _programDetailService.Queryable().Where(x => x.ItemId == item.ItemId);
                if (checkIfUsedOfProgram.Any())
                    throw new ValidationException(ErrorCodes.RecordIsUsedInAnotherModule);
            }

            item.IsActive = false;
            _itemService.Update(item);
            var categoryHasItemActivated = item.Category.Items.Any(x => x.IsActive);
            if (!categoryHasItemActivated)
            {
                item.Category.IsActive = false;
                _categoryService.Update(item.Category);
                CheckMenuHasCategoryActivated(item);
            }
            SaveChanges();
        }

        private void CheckMenuHasCategoryActivated(Item item)
        {

        }

        private void CheckRestaurantHasMenuActivated(Item item)
        {

        }
        public void UpdateItem(ItemDto itemDto, string path)
        {
            var item = _itemService.Find(itemDto.ItemId);
            if (item == null) throw new NotFoundException(ErrorCodes.ItemNotFound);
            ValidateItem(itemDto);

            foreach (var itemName in itemDto.ItemNameDictionary)
            {
                var itemTranslation =
                    item.ItemTranslations.FirstOrDefault(x => x.Language.ToLower() == itemName.Key.ToLower());
                if (itemTranslation == null)
                {
                    item.ItemTranslations.Add(new ItemTranslation
                    {
                        Language = itemName.Key.ToLower(),
                        Title = itemName.Value,
                        Description = itemDto.ItemDescriptionDictionary[itemName.Key]
                    });
                }
                else
                {
                    itemTranslation.Title = itemName.Value;
                    itemTranslation.Description = itemDto.ItemDescriptionDictionary[itemName.Key];
                }
            }
            item.Calories = itemDto.Calories;
            item.ItemSize = itemDto.ItemSize;
            item.Fat = itemDto.Fat;
            item.Protein = itemDto.Protein;
            item.Carbs = itemDto.Carbs;
            item.Cost = itemDto.Cost;
            item.VAT = itemDto.VAT;
            item.Price = itemDto.Price;
            item.TotalPrice = itemDto.TotalPrice;
            _itemService.Update(item);
            SaveChanges();
            if (itemDto.IsImageChange)
                _manageStorage.UploadImage(path + "\\" + "Category-" + item.CategoryId + "\\Items", itemDto.Image, item.ItemId + "-1");

        }

        public void TranslateItem(ItemDto itemDto, string language)
        {
            ValidateTranslateItem(itemDto, language);
            var item = _itemService.Find(itemDto.ItemId);
            if (item == null) throw new NotFoundException(ErrorCodes.ItemNotFound);
            var itemTranslation = item.ItemTranslations.FirstOrDefault(x => x.Language.ToLower() == language.ToLower());
            if (itemTranslation == null)
            {
                item.ItemTranslations.Add(new ItemTranslation
                {
                    Language = language,
                    Title = itemDto.ItemName,
                    Description = itemDto.ItemDescription
                });
            }
            else
            {
                itemTranslation.Title = itemDto.ItemName;
                itemTranslation.Description = itemDto.ItemDescription;
            }

            _itemService.Update(item);
            SaveChanges();
        }
        private void ValidateTranslateItem(ItemDto itemDto, string language)
        {
            if (string.IsNullOrEmpty(itemDto.ItemName))
                throw new ValidationException(ErrorCodes.EmptyItemName);
            if (string.IsNullOrEmpty(itemDto.ItemDescription))
                throw new ValidationException(ErrorCodes.EmptyItemDescription);
            if (itemDto.ItemName.Length > 100)
                throw new ValidationException(ErrorCodes.ItemNameExceedLength);
            if (_itemTranslationService.CheckItemNameExistForCategory(itemDto.ItemName, language, itemDto.ItemId, itemDto.CategoryId))
                throw new ValidationException(ErrorCodes.ItemNameAlreadyExist);
        }
    }
}
