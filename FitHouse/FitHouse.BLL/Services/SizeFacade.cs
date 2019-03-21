using AutoMapper;
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.BLL.DTOs;
using FitHouse.BLL.Services.Interfaces;
using FitHouse.Common.CustomException;
using FitHouse.DAL.Entities.Model;
using Repository.Pattern.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitHouse.BLL.Services
{
    public class SizeFacade : BaseFacade, ISizeFacade
    {
        private ISizeService _sizeService;
        private ISizeTranslationService _sizeTranslationService;
        private IItemSizeService _itemSizeService;
        public SizeFacade(ISizeService sizeService, ISizeTranslationService sizeTranslationService, IUnitOfWorkAsync unitOfWork,IItemSizeService itemSizeService) : base(unitOfWork)
        {
            _sizeTranslationService = sizeTranslationService;
            _sizeService = sizeService;
            _itemSizeService = itemSizeService;
        }
        public PagedResultsDto GetAllSizes(int page, int pageSize)
        {
            return _sizeService.GetAllSizes(page, pageSize);
        }

        public void AddSize(SizeDto sizeDto)
        {
            ValidateSize(sizeDto);
            var size = new Size();

            foreach (var sizeName in sizeDto.SizeNameDictionary)
            {
                size.SizeTranslations.Add(new SizeTranslation
                {
                    SizeName = sizeName.Value,
                    Language = sizeName.Key.ToLower()
                });
            }
            
            _sizeTranslationService.InsertRange(size.SizeTranslations);
            _sizeService.Insert(size);
            SaveChanges();
        }
        public void DeleteSize(long sizeId)
        {
            var size = _sizeService.Find(sizeId);
            if (size == null) throw new NotFoundException(ErrorCodes.SizeNotFound);
            if (_itemSizeService.Query(x => x.SizeId == sizeId && !x.Item.IsDeleted).Select().Any()) throw new ValidationException(ErrorCodes.SizeHasItems);
            size.IsDeleted = true;
            _sizeService.Update(size);
            SaveChanges();
        }
        public SizeDto GetSize(long sizeId)
        {
            var size = _sizeService.Find(sizeId);
            if (size == null) throw new NotFoundException(ErrorCodes.SizeNotFound);
            if (size.IsDeleted) throw new NotFoundException(ErrorCodes.SizeDeleted);
            //return Mapper.Map<Size, SizeDto>(size, opt =>
            //{
            //    opt.BeforeMap((src, dest) =>
            //        {
            //            src.SizeTranslations = src.SizeTranslations
            //                .Where(x => x.Language.ToLower() == language.ToLower())
            //                .ToList();
            //        }
            //    );
            //});
            return Mapper.Map<SizeDto>(size);
        }

        private void ValidateSize(SizeDto sizeDto)
        {
            foreach (var sizeName in sizeDto.SizeNameDictionary)
            {
                if (string.IsNullOrEmpty(sizeName.Value)) throw new ValidationException(ErrorCodes.EmptySizeName);
                if (sizeName.Value.Length > 100) throw new ValidationException(ErrorCodes.SizeNameExceedLength);
                if (sizeName.Value.Length < 3) throw new ValidationException(ErrorCodes.SizeNameMinimumLength);
                if (_sizeTranslationService.CheckSizeNameExist(sizeName.Value, sizeName.Key, sizeDto.SizeId))
                    throw new ValidationException(ErrorCodes.SizeNameAlreadyExist);
            }
        }

        public void UpdateSize(SizeDto sizeDto)
        {
            var size = _sizeService.Find(sizeDto.SizeId);
            if (size == null) throw new NotFoundException(ErrorCodes.SizeNotFound);
            ValidateSize(sizeDto);
            foreach (var sizeName in sizeDto.SizeNameDictionary)
            {
                var sizeTranslation =
                    size.SizeTranslations.FirstOrDefault(x => x.Language.ToLower() == sizeName.Key.ToLower());
                if (sizeTranslation == null)
                {
                    size.SizeTranslations.Add(new SizeTranslation
                    {
                        Language = sizeName.Key.ToLower(),
                        SizeName = sizeName.Value
                    });
                }
                else
                {
                    sizeTranslation.SizeName = sizeName.Value;
                }
            }
            _sizeService.Update(size);
            SaveChanges();
        }
    }
}
