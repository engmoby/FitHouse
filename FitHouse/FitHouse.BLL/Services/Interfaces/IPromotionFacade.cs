using System.Collections.Generic;
using FitHouse.BLL.DTOs;
using FitHouse.Common;

namespace FitHouse.BLL.Services.Interfaces
{
    public interface IPromotionFacade
    {
        PagedResultsDto GetAllPromotions(int page, int pageSize);
        PromotionDto CreatePromotion(PromotionDto promotionDto);
        PromotionDto EditPromotion(PromotionDto promotionDto);
        PromotionDto GetPromotion(long promotionId);
        PromotionDto CheckPromotion(string promotionTitle, Enums.OrderType type);
    }
}
