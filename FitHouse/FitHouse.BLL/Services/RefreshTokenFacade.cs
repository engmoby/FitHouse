﻿using AutoMapper; 
using Repository.Pattern.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FitHouse.BLL.DataServices.Interfaces;
using FitHouse.BLL.DTOs;
using FitHouse.BLL.Services.Interfaces;
using FitHouse.DAL.Entities.Model;

namespace FitHouse.BLL.Services
{
    public class RefreshTokenFacade: BaseFacade,IRefreshTokenFacade
    {
        private readonly IRefreshTokenService _refreshTokenService;

        public RefreshTokenFacade(IRefreshTokenService refreshTokenService, IUnitOfWorkAsync unitOFWork)
            : base(unitOFWork)
        {
            _refreshTokenService = refreshTokenService;

        }
        public RefreshTokenDto FindRefreshTokenNotExpired(string id)
        {
            RefreshToken token =
                _refreshTokenService.Queryable()
                    .SingleOrDefault(
                        r => r.Id == id  && r.ExpiresUtc > DateTime.UtcNow);
            if (token != null)
                return Mapper.Map<RefreshTokenDto>(token);
            else
                return null;
        }
        public bool AddRefreshToken(RefreshTokenDto token)
        {
            RefreshToken tokenObj = Mapper.Map<RefreshToken>(token);
            var existingToken = _refreshTokenService.Queryable().Where(r => r.UserName == token.UserName);
            if (existingToken.Any())
            {
                RemoveRefreshToken(existingToken);
            }
            _refreshTokenService.Insert(tokenObj);
            return _unitOfWork.SaveChanges() > 0;
        }
        private void RemoveRefreshToken(IQueryable<RefreshToken> refreshTokens)
        {
            foreach (RefreshToken refreshToken in refreshTokens)
            {
                _refreshTokenService.Delete(refreshToken);
            }
        }
    }
}
