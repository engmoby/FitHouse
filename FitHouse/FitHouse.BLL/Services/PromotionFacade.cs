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
    public class PromotionFacade : BaseFacade, IPromotionFacade
    {
        private readonly IPromotionService _promotionService;
        static readonly DateTime ThisTime = DateTime.Now;
        static readonly TimeZoneInfo Tst = TimeZoneInfo.FindSystemTimeZoneById("Arab Standard Time");
        static readonly DateTime TstTime = TimeZoneInfo.ConvertTime(ThisTime, TimeZoneInfo.Local, Tst);
        public PromotionFacade(IPromotionService promotionService, IUnitOfWorkAsync unitOfWork) : base(unitOfWork)
        {
            _promotionService = promotionService;
        }

        public PagedResultsDto GetAllPromotions(int page, int pageSize)
        {
            return  _promotionService.GetAllPromotiones(page, pageSize);

        }

        public PromotionDto CreatePromotion(PromotionDto promotionDto)
        {
            if (GetPromotion(promotionDto.PromotionId) != null)
            {
                return EditPromotion(promotionDto);
            }
            var promotion = Mapper.Map<Promotion>(promotionDto);
            promotion.Title = promotionDto.Title.Trim();
            promotion.Value = promotionDto.Value;
            promotion.StartDate = promotionDto.StartDate;
            promotion.EndDate = promotionDto.EndDate;
            promotion.IsProgram = promotionDto.IsProgram;
            promotion.IsCustomProgram = promotionDto.IsCustomProgram;
            promotion.IsMeal = promotionDto.IsMeal;
            _promotionService.Insert(promotion);
            SaveChanges();
            return promotionDto;
        }

        public PromotionDto EditPromotion(PromotionDto promotionDto)
        {
            var promotion = _promotionService.Query(x => x.PromotionId == promotionDto.PromotionId).Select().FirstOrDefault();
            if (promotion == null) throw new NotFoundException(ErrorCodes.ProductNotFound);
            promotion.Title = promotionDto.Title.Trim();
            promotion.Value = promotionDto.Value;
            promotion.StartDate = promotionDto.StartDate;
            promotion.EndDate = promotionDto.EndDate;
            promotion.IsProgram = promotionDto.IsProgram;
            promotion.IsCustomProgram = promotionDto.IsCustomProgram;
            promotion.IsMeal = promotionDto.IsMeal;
            _promotionService.Update(promotion);
            SaveChanges();
            return promotionDto;

        }

        public PromotionDto GetPromotion(long promotionId)
        {
            var promotionObj = _promotionService.Query(x => x.PromotionId == promotionId).Select().FirstOrDefault();
            var returnPromotion = Mapper.Map<PromotionDto>(promotionObj);
            return returnPromotion;
        }

        public PromotionDto CheckPromotion(string promotionTitle, Enums.OrderType type)
        {
            var promotionObj = _promotionService.Query(x => x.Title == promotionTitle.Trim()).Select().FirstOrDefault();
            if (promotionObj== null)
                throw new NotFoundException(ErrorCodes.PromoCodeNotExist);
            if (promotionObj.StartDate > TstTime)
                throw new NotFoundException(ErrorCodes.PromoCodeNotStart);
            if (promotionObj.EndDate < TstTime)
                throw new NotFoundException(ErrorCodes.PromoCodeFinished);

            if (type == Enums.OrderType.CustomProgram) 
                if (!promotionObj.IsCustomProgram) throw new NotFoundException(ErrorCodes.PromoCodeNotAllowed);

            if (type == Enums.OrderType.Program)
                if (!promotionObj.IsProgram) throw new NotFoundException(ErrorCodes.PromoCodeNotAllowed);

            if (type == Enums.OrderType.Meal)
                if (!promotionObj.IsMeal) throw new NotFoundException(ErrorCodes.PromoCodeNotAllowed);



            var returnPromotion = Mapper.Map<PromotionDto>(promotionObj);
            return returnPromotion;
        }
    }
}
