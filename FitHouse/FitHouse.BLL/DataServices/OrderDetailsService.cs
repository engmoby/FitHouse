using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.BLL.DTOs;
using FitHouse.DAL.Entities.Model;
using Repository.Pattern.Repositories;
using Service.Pattern;

namespace FitHouse.BLL.DataServices
{
    public class OrderDetailsService : Service<OrderDetail>, IOrderDetailsService
    {
        public OrderDetailsService(IRepositoryAsync<OrderDetail> repository) : base(repository)
        {
            _repository = repository;
        }
         

    }
}