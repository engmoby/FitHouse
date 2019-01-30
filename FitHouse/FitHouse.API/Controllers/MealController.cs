using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;
using System.Web.Hosting;
using System.Web.Http;
using System.Web.Http.Description;
using System.Web.Script.Serialization;
using AutoMapper;
using FitHouse.API.Infrastructure;
using FitHouse.API.Models;
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.BLL.DTOs;
using FitHouse.BLL.Services;
using FitHouse.BLL.Services.Interfaces;
using FitHouse.Common.CustomException;

namespace FitHouse.API.Controllers
{
    public class MealsController : BaseApiController
    {
        private readonly IMealFacade _MealFacade;
        private IProgramDetailService _programDetailService;
        public MealsController(MealFacade MealFacade, IProgramDetailService programDetailService)
        {
            _MealFacade = MealFacade;
            _programDetailService = programDetailService;
        }


        [Route("api/Meals/GetAllMeals", Name = "GetAllMeals")]
        [HttpGet]
        public IHttpActionResult GetAllMeals(int page = Page, int pagesize = PageSize)
        {
            PagedResultsDto mealObj = _MealFacade.GetAllMeals(Language,page, pagesize);
            var data = Mapper.Map<List<MealModel>>(mealObj.Data);
            return PagedResponse("GetAllMeals", page, pagesize, mealObj.TotalCount, data);
        }


        //  [AuthorizeOrders(Enums.OrderType.RestaurantAdmin)]
        [Route("api/Meals", Name = "AddMeal")]
        [HttpPost]
        public IHttpActionResult AddMeal()
        {
            var MealDto= new MealDto();
            //if (!HttpContext.Current.Request.Files.AllKeys.Any())
            //    throw new ValidationException(ErrorCodes.EmptyMealImage);
            if (HttpContext.Current.Request.Files.Count != 0)
            {
                var httpPostedFile = HttpContext.Current.Request.Files[0];

                var MealModel = new JavaScriptSerializer().Deserialize<MealModel>(HttpContext.Current.Request.Form.Get(0));

                if ((httpPostedFile.ContentLength > 2 * 1024 * 1000))
                    throw new ValidationException(ErrorCodes.ImageExceedSize);


                if (Path.GetExtension(httpPostedFile.FileName).ToLower() != ".jpg" &&
                    Path.GetExtension(httpPostedFile.FileName).ToLower() != ".png" &&
                    Path.GetExtension(httpPostedFile.FileName).ToLower() != ".jpeg")

                    throw new ValidationException(ErrorCodes.InvalidImageType);



                  MealDto = Mapper.Map<MealDto>(MealModel);

                //MealDto.Image = new MemoryStream();
                //httpPostedFile.InputStream.CopyTo(MealDto.Image);
            }
            else
            {
                var MealModel1 = new JavaScriptSerializer().Deserialize<MealModel>(HttpContext.Current.Request.Form.Get(0));


                MealDto = Mapper.Map<MealDto>(MealModel1);
            }
               
            
            _MealFacade.AddMeal(MealDto, HostingEnvironment.MapPath("~/Images/"));
            return Ok();
        }

        // [AuthorizeOrders(Enums.OrderType.RestaurantAdmin,Enums.OrderType.User)]
        [Route("api/Meals/{MealId:long}", Name = "GetMeal")]
        [HttpGet]
        [ResponseType(typeof(MealModel))]
        public IHttpActionResult GetMeal(long MealId)
        {
            var Meal = Mapper.Map<MealModel>(_MealFacade.GetMeal(MealId, Language));
            Meal.ImageUrl = Url.Link("MealImage", new { Meal.MealId });
            return Ok(Meal);
        }

        //[AuthorizeOrders(Enums.OrderType.RestaurantAdmin)]
        [Route("api/Meals", Name = "UpdateMeal")]
        [HttpPut]
        public IHttpActionResult UpdateMeal()
        {
            var MealModel =
                new JavaScriptSerializer().Deserialize<MealModel>(HttpContext.Current.Request.Form.Get(0));
            var MealDto = Mapper.Map<MealDto>(MealModel);
            if (MealModel.IsImageChange)
            {
                if (!HttpContext.Current.Request.Files.AllKeys.Any())
                    throw new ValidationException(ErrorCodes.EmptyItemImage);
                var httpPostedFile = HttpContext.Current.Request.Files["file"];


                if (httpPostedFile == null)
                    throw new ValidationException(ErrorCodes.EmptyCategoryImage);

                if (httpPostedFile.ContentLength > 2 * 1024 * 1000)
                    throw new ValidationException(ErrorCodes.ImageExceedSize);


                if (Path.GetExtension(httpPostedFile.FileName).ToLower() != ".jpg" &&
                    Path.GetExtension(httpPostedFile.FileName).ToLower() != ".png" &&
                    Path.GetExtension(httpPostedFile.FileName).ToLower() != ".jpeg")

                    throw new ValidationException(ErrorCodes.InvalidImageType);

                //restaurantDto.Image = (MemoryStream) restaurant.Image.InputStream;
                //MealDto.Image = new MemoryStream();
                //httpPostedFile.InputStream.CopyTo(MealDto.Image);
            }

            _MealFacade.UpdateMeal(MealDto, HostingEnvironment.MapPath("~/Images/"));
            return Ok();
        }

        //  [AuthorizeOrders(Enums.OrderType.RestaurantAdmin)]
        [Route("api/Meals/{MealId:long}", Name = "DeleteMeal")]
        [HttpDelete]
        public IHttpActionResult DeleteMeal(long MealId)
        {
            _MealFacade.DeleteMeal(MealId);
            return Ok();
        }

        //  [AuthorizeOrders(Enums.OrderType.RestaurantAdmin)]
        //[Route("api/Meals/Translate", Name = "TranslateMeal")]
        //[HttpPut]
        //public IHttpActionResult TranslateMeal([FromBody] MealModel MealModel)
        //{
        //    _MealFacade.TranslateMeal(Mapper.Map<MealDto>(MealModel), Language);
        //    return Ok();
        //}



        //   [AuthorizeOrders(Enums.OrderType.RestaurantAdmin)]
        [Route("api/Meals/{MealId:long}/Activate", Name = "ActivateMeal")]
        [HttpGet]
        public IHttpActionResult ActivateMeal(long mealId)
        {
            _MealFacade.ActivateMeal(mealId);
            return Ok();
        }

        //  [AuthorizeOrders(Enums.OrderType.RestaurantAdmin)]
        [Route("api/Meals/{MealId:long}/DeActivate", Name = "DeActivateMeal")]
        [HttpGet]
        public IHttpActionResult DeActivateMeal(long MealId)
        {
            _MealFacade.DeActivateMeal(MealId);
            return Ok();
        }



        [Route("api/Meal/{MealId:long}/Image", Name = "MealImage")]
        public HttpResponseMessage GetMealImage( long MealId, string type = "orignal")
        {
            try
            {
                string filePath;
                if (type == "orignal")
                {
                    filePath = Directory.GetFiles(HostingEnvironment.MapPath("~/Images/") + "\\"   + "\\Meals")
                        .FirstOrDefault(x => Path.GetFileName(x).Split('.')[0] == MealId + "-1" &&
                                             !Path.GetFileName(x).Contains("thumb"));
                }
                else
                {
                    filePath = Directory.GetFiles(HostingEnvironment.MapPath("~/Images/") + "\\"   + "\\Meals")
                        .FirstOrDefault(x => Path.GetFileName(x).Split('.')[0] == MealId + "-1-thumbnail");
                }

                HttpResponseMessage Response = new HttpResponseMessage(HttpStatusCode.OK);

                byte[] fileData = File.ReadAllBytes(filePath);

                Response.Content = new ByteArrayContent(fileData);
                Response.Content.Headers.ContentType = new MediaTypeHeaderValue("image/png");

                return Response;
            }
            catch (Exception e)
            {
                return new HttpResponseMessage();
            }
        }

    }
}
