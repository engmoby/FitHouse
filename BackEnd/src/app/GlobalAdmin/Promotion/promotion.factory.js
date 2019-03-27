(function () {
    angular
        .module('home')
        .factory('PromotionResource', ['$resource', 'appCONSTANTS', PromotionResource])

    function PromotionResource($resource, appCONSTANTS) {
        return $resource(appCONSTANTS.API_URL + 'Promotion/', {}, {
            getAllPromotion: { method: 'GET', url: appCONSTANTS.API_URL + 'Promotion/GetAllPromotions', useToken: true },
            // getUserPromotiones: { method: 'GET', url: appCONSTANTS.API_URL + 'Promotion/GetUserPromotiones/:userId', useToken: true, isArray: true },
            create: { method: 'POST', useToken: true },
            update: { method: 'POST', url: appCONSTANTS.API_URL + 'Promotion/EditPromotion', useToken: true },
            getPromotion: { method: 'GET', url: appCONSTANTS.API_URL + 'Promotion/GetPromotionById/:PromotionId', useToken: true },
            CheckPromotion: { method: 'POST', url: appCONSTANTS.API_URL + 'Promotion/CheckPromotion', useToken: true }

        })
    }
}());
