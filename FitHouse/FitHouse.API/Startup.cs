﻿using System;
using System.Linq;
using System.Web.Http;
using FitHouse.API;
using FitHouse.API.Infrastructure;
using FitHouse.API.Providers;
using Microsoft.Owin;
using Microsoft.Owin.Security.OAuth;
using Newtonsoft.Json.Serialization;
using Owin;
using Swashbuckle.Application;

[assembly: OwinStartup(typeof(Startup))]

namespace FitHouse.API
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=316888
            ConfigureOAuth(app);

            HttpConfiguration config = new HttpConfiguration();
            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);
            //WebApiConfig.Register(config);
            ConfigureWebApi(config);
            app.UseWebApi(config);
            config.MessageHandlers.Add(new LanguageMessageHandler());

            GlobalConfiguration.Configure(WebApiConfig.Register);
            UnityConfig.RegisterTypes(config);

            AutoMapperConfig.RegisterMappings();
            //ECatalogBLLConfig.RegisterMappings();
        }
        public void ConfigureOAuth(IAppBuilder app)
        {
            OAuthAuthorizationServerOptions OAuthServerOptions = new OAuthAuthorizationServerOptions()
            {
                AllowInsecureHttp = true,
                TokenEndpointPath = new PathString("/api/token"),
                AccessTokenExpireTimeSpan = TimeSpan.FromDays(2),
                Provider = new SimpleAuthorizationServerProvider(),
             //   RefreshTokenProvider = new RefreshTokenProvider()
            };

            // Token Generation
            app.UseOAuthAuthorizationServer(OAuthServerOptions);
            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());

        }
        private void ConfigureWebApi(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();
            UnityConfig.RegisterTypes(config);
            config.EnableSwagger(c =>
            {
                c.SingleApiVersion("v2", "WebAPI");
                //c.IncludeXmlComments(GetXmlCommentsPath());
                c.OperationFilter<AddAuthorizationHeader>();
                c.ResolveConflictingActions(x => x.First());
            }).EnableSwaggerUi();

            // Web API configuration and services
            config.Formatters.Remove(GlobalConfiguration.Configuration.Formatters.XmlFormatter);
            // Use camel case for JSON data.
            config.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
        }
    }

}
