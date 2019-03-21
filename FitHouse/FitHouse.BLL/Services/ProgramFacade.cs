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
        private readonly IProgramDetailService _programDetailService;
        private readonly  IProgExcludeDayService _progExcludeDayService;
        private readonly  IItemService _itemService;
        private readonly  IOrderService _orderService;
        private readonly  IOrderDetailsService _orderDetailsService;
        private readonly  IUserService _userService;

        public ProgramFacade(IUserService userService,IProgramService programService, IOrderService orderService, IOrderDetailsService orderDetailsService, IItemService itemService, IProgExcludeDayService progExcludeDayService, IProgramDetailService programDetailService, IUnitOfWorkAsync unitOfWork, IProgramTranslationService programTranslationService) : base(unitOfWork)
        {
            _programService = programService;
            _programTranslationService = programTranslationService;
            _programDetailService = programDetailService;
            _progExcludeDayService = progExcludeDayService;
            _itemService = itemService;
            _orderDetailsService = orderDetailsService;
            _orderService = orderService;
            _userService = userService;
        }

        public PagedResultsDto GetAllPrograms(int page, int pageSize)
        {
            var programs = _programService.GetAllPrograms(page, pageSize);
            return programs;
        }

        public PagedResultsDto GetAllActivePrograms(int page, int pageSize)
        {
            var programs = _programService.GetAllActivePrograms(page, pageSize);
            return programs;
        }
        
        public ProgramDto UpdateProgramDetails(long programId, long dayCount, long mealCount,
            List<ItemSizeDto> itemss)
        {

            var program = _programService.Find(programId);
            if(program == null) throw new NotFoundException(ErrorCodes.ProductNotFound);

            //Delete old data

            var deleteuserRoles = new ProgramDetail[program.ProgramDetails.Count];
            program.ProgramDetails.CopyTo(deleteuserRoles, 0);
            foreach (var detail in deleteuserRoles)
            {
                if (detail.DayNumber == dayCount && detail.MealNumberPerDay == mealCount)
                {
                    _programDetailService.Delete(detail);
                }

            }

            //add new data
            var detailInfo = new List<ProgramDetail>();
            var items = Mapper.Map<List<ItemSize>>(itemss);
            foreach (var item in items)
            {
                var det = new ProgramDetail();
                det.DayDateTime = DateTime.Now;
                det.DayNumber = dayCount;
                det.IsActive = true;
                det.IsDeleted = false;
                det.ItemSizeId = item.ItemSizeId;
                det.ProgramId = program.ProgramId;
                det.MealNumberPerDay = mealCount;
                detailInfo.Add(det);
            }
            
            _programDetailService.InsertRange(detailInfo);
            SaveChanges();


            return Mapper.Map<ProgramDto>(program);
        }

        //public ProgramDto CreateProgram(ProgramDto programDto, int userId)
        public OrderDto CreateProgram(ProgramDto programDto, int userId)
        {

            ValidateProgram(programDto);
            var programObj = Mapper.Map<Program>(programDto);
            if (!programDto.IsOrdering)
            {
                foreach (var programName in programDto.ProgramNameDictionary)
                {
                    programObj.ProgramTranslations.Add(new ProgramTranslation
                    {
                        Title = programName.Value,

                        Language = programName.Key,
                        Description = programDto.ProgramDescriptionDictionary[programName.Key]
                    });
                }
            }
            var detailInfo = new List<ProgramDetail>();

            foreach (var detail in programObj.ProgramDetails)
            {
                var det= new ProgramDetail();
                det.DayDateTime = DateTime.Now;
                det.DayNumber = detail.DayNumber;
                det.IsActive = true;
                det.IsDeleted = false;
                det.ItemSizeId = detail.ItemSizeId;
                //det.ProgramId = programObj.ProgramId;
                det.MealNumberPerDay = detail.MealNumberPerDay;
                detailInfo.Add(det);
            }
            programObj.ProgramDetails = detailInfo;

            var excludedDays = new List<ProgExcludeDay>();

            foreach (var day in programDto.Days)
            {
                var dayByday = new ProgExcludeDay();
                dayByday.DayId = day.DayId;
                dayByday.IsActive = true;
                dayByday.ProgramId = programObj.ProgramId;
                dayByday.IsDeleted = false;
                excludedDays.Add(dayByday);
            }

            var orderDetails = new List<OrderDetail>();
            var order = new Order();
            if (programDto.IsOrdering)
            {

                var user = _userService.Query(x => x.UserId == programDto.UserId).Select().FirstOrDefault();
                if (user == null) throw new NotFoundException(ErrorCodes.UserNotFound);
                
                programObj.ProgramTranslations.Add(new ProgramTranslation
                {
                    Title = user.FirstName+DateTime.Now,
                    Language = "en",
                    Description = user.FirstName + DateTime.Now
                });

                programObj.ProgramTranslations.Add(new ProgramTranslation
                {
                    Title = user.FirstName + DateTime.Now,
                    Language = "ar",
                    Description = user.FirstName + DateTime.Now
                });
                
                programObj.IsForClient = true;
              
                order.BranchId = programDto.branchId;
                order.IsByAdmin = true;
                order.IsDelivery = programDto.IsDelivery;
                order.IsProgram = true;
                order.OrderDate = DateTime.Now;
                order.UserId = programDto.UserId;
                order.OrderStartDate = programDto.Day;
                order.AddressId = (programDto.AddressId == 0) ? null : programDto.AddressId;
                order.BranchId = programDto.branchId;
                order.Price = programDto.Price;
                var rm = new Random();
                order.OrderCode = rm.Next(10000, 1000000).ToString();
                var lastDate = order.OrderStartDate;

                for (var i = 1; i <= programDto.ProgramDays; i++)
                {

                    var orderDetail = new OrderDetail();
                    orderDetail.OrderId = order.OrderId;
                    orderDetail.DayNumber = i;
                    orderDetail.ProgramId = programDto.ProgramId;


                    if (orderDetail.DayNumber == 1)
                    {
                        orderDetail.Day = lastDate;
                        orderDetail.Status = Enums.OrderStatus.Prepering;
                        //lastDate = lastDate?.AddDays(1);
                    }

                    else
                    {

                        lastDate = lastDate?.AddDays(1);
                        foreach (var day in excludedDays)
                        {
                            if (lastDate != null && day.DayId == 1 && lastDate.Value.DayOfWeek == DayOfWeek.Saturday)
                                lastDate = lastDate?.AddDays(1);

                            if (lastDate != null && day.DayId == 2 && lastDate.Value.DayOfWeek == DayOfWeek.Sunday)
                                lastDate = lastDate?.AddDays(1);

                            if (lastDate != null && day.DayId == 3 && lastDate.Value.DayOfWeek == DayOfWeek.Monday)
                                lastDate = lastDate?.AddDays(1);

                            if (lastDate != null && day.DayId == 4 && lastDate.Value.DayOfWeek == DayOfWeek.Tuesday)
                                lastDate = lastDate?.AddDays(1);

                            if (lastDate != null && day.DayId == 5 && lastDate.Value.DayOfWeek == DayOfWeek.Wednesday)
                                lastDate = lastDate?.AddDays(1);

                            if (lastDate != null && day.DayId == 6 && lastDate.Value.DayOfWeek == DayOfWeek.Thursday)
                                lastDate = lastDate?.AddDays(1);

                            if (lastDate != null && day.DayId == 7 && lastDate.Value.DayOfWeek == DayOfWeek.Friday)
                                lastDate = lastDate?.AddDays(1);
                        }
                        orderDetail.Day = lastDate;
                        orderDetail.Status = Enums.OrderStatus.Prepering;
                    }

                    orderDetails.Add(orderDetail);
                }

                _orderDetailsService.InsertRange(orderDetails);
                _orderService.Insert(order);
            }

            _progExcludeDayService.InsertRange(excludedDays);
            _programTranslationService.InsertRange(programObj.ProgramTranslations);
            _programDetailService.InsertRange(programObj.ProgramDetails);
            _programService.Insert(programObj);
            var orderDto= new OrderDto();
          
            orderDto = Mapper.Map<OrderDto>(order);
            orderDto.OrderPrice = programDto.Price;
            SaveChanges();
            return orderDto;
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

        public ProgramDto GetProgramById(ProgramDto programDto)
        {
            var programObj = _programService.Find(programDto.ProgramId);
            if (programObj == null) throw new NotFoundException(ErrorCodes.ProductNotFound);

            return Mapper.Map<ProgramDto>(programObj);
        }

        public ProgramDto UpdateProgram(ProgramDto programDto)
        {
            var programObj = _programService.Find(programDto.ProgramId);
            if (programObj == null) throw new NotFoundException(ErrorCodes.ProductNotFound);
            //ValidateProgram(programDto);
            foreach (var programName in programDto.ProgramNameDictionary)
            {
                var programTranslation = programObj.ProgramTranslations.FirstOrDefault(x => x.Language.ToLower() == programName.Key.ToLower() && x.ProgramId == programDto.ProgramId);
                if (programTranslation == null)
                {
                    programObj.ProgramTranslations.Add(new ProgramTranslation
                    {
                        Title = programName.Value,
                        Language = programName.Key,
                        Description = programDto.ProgramDescriptionDictionary[programName.Key]

                    });
                }
                else
                {
                    programTranslation.Title = programName.Value;
                    programTranslation.Description = programDto.ProgramDescriptionDictionary[programName.Key];

                }

            }

            programObj.ProgramDiscount = programDto.ProgramDiscount;

            _programService.Update(programObj);
            SaveChanges();
            return programDto;
        }

        public ProgramDto EditProgram(ProgramDto programDto, int userId)
        {
            var programObj = _programService.Find(programDto.ProgramId);
            if (programObj == null) throw new NotFoundException(ErrorCodes.ProductNotFound);
            ValidateProgram(programDto);
            foreach (var programName in programDto.ProgramNameDictionary)
            {
                var programTranslation = programObj.ProgramTranslations.FirstOrDefault(x => x.Language.ToLower() == programName.Key.ToLower() && x.ProgramId == programDto.ProgramId);
                if (programTranslation == null)
                {
                    programObj.ProgramTranslations.Add(new ProgramTranslation
                    {
                        Title = programName.Value,
                        Language = programName.Key,
                        Description = programDto.ProgramDescriptionDictionary[programName.Key]

                    });
                }
                else
                    programTranslation.Title = programName.Value;
            }



            //programObj.LastModificationTime = Strings.CurrentDateTime;
            //programObj.LastModifierUserId = userId;
            programObj.IsDeleted = programDto.IsDeleted;
            programObj.IsActive = programDto.IsActive;
            _programService.Update(programObj);
            SaveChanges();
            return programDto;

        }

        public ProgramDto GetProgramDetails(long programId)
        {
            var program = _programService.Find(programId);
            if (program == null) throw new NotFoundException(ErrorCodes.ProductNotFound);

            //var details = _programDetailService.GetProgramDetails(program.ProgramId);
            //program.ProgramDetails = details;
            return Mapper.Map<ProgramDto>(program);
        }

        public ProgramDto GetProgramById(long programId)
        {
            var program = _programService.Find(programId);
            if (program == null) throw new NotFoundException(ErrorCodes.ProductNotFound);

            //var details = _programDetailService.GetProgramDetails(program.ProgramId);
            //program.ProgramDetails = details;
            return Mapper.Map<ProgramDto>(program);
        }
        public List<ProgramDetailDto> GetProgramItems(long programId)
        {
            var details = _programDetailService.GetProgramDetails(programId);
            
            return Mapper.Map<List<ProgramDetailDto>>(details);
        }

    }
}
