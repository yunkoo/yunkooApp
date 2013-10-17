app.factory('AJAX', function($http,$q){
    /*url p bCall sCall eCall*/
    var send=function(o){

        var canceler = $q.defer();

        var sendmethod=o.method || "GET";
        if(typeof(o.bCall)=="function"){o.bCall();}

        var httpPatams={
            cache: o.cache||false
        };
        httpPatams.url= o.url;
        httpPatams.method =sendmethod;
        if(sendmethod=="GET"){
            httpPatams.params=o.p || {};
        }else{
            httpPatams.data=o.p || null;
        };

        /*设定超时*/
        httpPatams.timeout= o.timeout || canceler.promise || 15000;

        $http(httpPatams).success(function(data, status, headers, config){
            if(typeof(o.sCall)=="function"){
                o.sCall(data,status, headers, config);
            };
            if(typeof(o.cCall)=="function"){
                o.cCall(data,status, headers, config);
            };
        }).error(function(data,status, headers, config){
                if(typeof(o.eCall)=="function"){
                    o.eCall(data,status, headers, config);
                };
                if(typeof(o.cCall)=="function"){
                    o.cCall(data,status, headers, config);
                };
//                if (status == 401) {
//                    try{
//                        delete $localStorage.userInfo;
//                        $sessionStorage.$reset();
//                    }catch(e){};
//                    $navigate.go('/login'+status,'modal',true);
//                }
            });

        return canceler;
    };
    return send;
});

app.factory('newsList', ['$resource', function($resource) {
    var res = $resource(APP_ACTION['NEWSLIST']+':catId/:pageNum/:limit',
        {catId:1,pageNum:1,limit:6});
    return res;
}]);