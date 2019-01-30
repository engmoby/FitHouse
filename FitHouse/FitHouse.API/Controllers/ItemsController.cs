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
using FitHouse.API.Providers;
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.BLL.DTOs;
using FitHouse.Common;
using FitHouse.Common.CustomException;
using FitHouse.BLL.Services.Interfaces;
using FitHouse.BLL.Services;

namespace FitHouse.API.Controllers
{
    public class ItemsController : BaseApiController
    {
        private readonly IItemFacade _itemFacade;
        private IProgramDetailService _programDetailService;
        public ItemsController(ItemFacade itemFacade, IProgramDetailService programDetailService)
        {
            _itemFacade = itemFacade;
            _programDetailService = programDetailService;
        }
        //  [AuthorizeOrders(Enums.OrderType.RestaurantAdmin)]
        [Route("api/Items", Name = "AddItem")]
        [HttpPost]
        public IHttpActionResult AddItem()
        {
            var itemDto= new ItemDto();
            //if (!HttpContext.Current.Request.Files.AllKeys.Any())
            //    throw new ValidationException(ErrorCodes.EmptyItemImage);
            if (HttpContext.Current.Request.Files.Count != 0)
            {
                var httpPostedFile = HttpContext.Current.Request.Files[0];

                var itemModel = new JavaScriptSerializer().Deserialize<ItemModel>(HttpContext.Current.Request.Form.Get(0));

                if ((httpPostedFile.ContentLength > 2 * 1024 * 1000))
                    throw new ValidationException(ErrorCodes.ImageExceedSize);


                if (Path.GetExtension(httpPostedFile.FileName).ToLower() != ".jpg" &&
                    Path.GetExtension(httpPostedFile.FileName).ToLower() != ".png" &&
                    Path.GetExtension(httpPostedFile.FileName).ToLower() != ".jpeg")

                    throw new ValidationException(ErrorCodes.InvalidImageType);



                  itemDto = Mapper.Map<ItemDto>(itemModel);

                itemDto.Image = new MemoryStream();
                httpPostedFile.InputStream.CopyTo(itemDto.Image);
            }
            else
            {
                var itemModel1 = new JavaScriptSerializer().Deserialize<ItemModel>(HttpContext.Current.Request.Form.Get(0));


                itemDto = Mapper.Map<ItemDto>(itemModel1);
            }
               
            
            _itemFacade.AddItem(itemDto, HostingEnvironment.MapPath("~/Images/"));
            return Ok();
        }

        [Route("api/Items/GetAllItems", Name = "GetAllItems")]
        [HttpGet]
        public IHttpActionResult GetAllItems()
        {
            var items = Mapper.Map<List<ItemProgramModel>>(_itemFacade.GetAllItems());

            return Ok(items);
        }

        // [AuthorizeOrders(Enums.OrderType.RestaurantAdmin,Enums.OrderType.User)]
        [Route("api/Items/{itemId:long}", Name = "GetItem")]
        [HttpGet]
        [ResponseType(typeof(ItemModel))]
        public IHttpActionResult GetItem(long itemId)
        {
            var item = Mapper.Map<ItemModel>(_itemFacade.GetItem(itemId, Language));
            //item.ImageUrl = Url.Link("ItemImage", new { item.CategoryId, item.ItemId });
            return Ok(item);
        }

        //[AuthorizeOrders(Enums.OrderType.RestaurantAdmin)]
        [Route("api/Items", Name = "UpdateItem")]
        [HttpPut]
        public IHttpActionResult UpdateItem()
        {
            var itemModel =
                new JavaScriptSerializer().Deserialize<ItemModel>(HttpContext.Current.Request.Form.Get(0));
            var itemDto = Mapper.Map<ItemDto>(itemModel);
            if (itemModel.IsImageChange)
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
                itemDto.Image = new MemoryStream();
                httpPostedFile.InputStream.CopyTo(itemDto.Image);
            }

            _itemFacade.UpdateItem(itemDto, HostingEnvironment.MapPath("~/Images/"));
            return Ok();
        }

        //  [AuthorizeOrders(Enums.OrderType.RestaurantAdmin)]
        [Route("api/Items/{itemId:long}", Name = "DeleteItem")]
        [HttpDelete]
        public IHttpActionResult DeleteItem(long itemId)
        {
            _itemFacade.DeleteItem(itemId);
            return Ok();
        }

        //  [AuthorizeOrders(Enums.OrderType.RestaurantAdmin)]
        [Route("api/Items/Translate", Name = "TranslateItem")]
        [HttpPut]
        public IHttpActionResult TranslateItem([FromBody] ItemModel itemModel)
        {
            _itemFacade.TranslateItem(Mapper.Map<ItemDto>(itemModel), Language);
            return Ok();
        }



        //   [AuthorizeOrders(Enums.OrderType.RestaurantAdmin)]
        [Route("api/Items/{itemId:long}/Activate", Name = "ActivateItem")]
        [HttpGet]
        public IHttpActionResult ActivateItem(long itemId)
        {
            _itemFacade.ActivateItem(itemId);
            return Ok();
        }

        //  [AuthorizeOrders(Enums.OrderType.RestaurantAdmin)]
        [Route("api/Items/{itemId:long}/DeActivate", Name = "DeActivateItem")]
        [HttpGet]
        public IHttpActionResult DeActivateItem(long itemId)
        {
            _itemFacade.DeActivateItem(itemId);
            return Ok();
        }



        [Route("api/Category/{categoryId:long}/Item/{itemId:long}/Image", Name = "ItemImage")]
        public HttpResponseMessage GetItemImage(long categoryId, long itemId, string type = "orignal")
        {
            try
            {
                string filePath;
                if (type == "orignal")
                {
                    filePath = Directory.GetFiles(HostingEnvironment.MapPath("~/Images/") + "\\" + "Category-" + categoryId + "\\Items")
                        .FirstOrDefault(x => Path.GetFileName(x).Split('.')[0] == itemId + "-1" &&
                                             !Path.GetFileName(x).Contains("thumb"));
                }
                else
                {
                    filePath = Directory.GetFiles(HostingEnvironment.MapPath("~/Images/") + "\\" + "Category-" + categoryId + "\\Items")
                        .FirstOrDefault(x => Path.GetFileName(x).Split('.')[0] == itemId + "-1-thumbnail");
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
