/*
app.factory('CompanyInfo', function ($resource, $cacheFactory) {
    var cache = $cacheFactory('company');
    function loadData () {
            $resource(APP_ACTION.ABOUTUS, {}).get(function(res){
                console.log(res.status);
                return res;
            })
    }

    function getData () {
        if (!cache.get('companyinfo')) {
            var data = loadData();
            cache.put('companyinfo',data);
            console.log(data);
            return data;
        } else {
            return cache.get("companyinfo");
        };
    };

    return {
        get: getData
    };
});
*/
//app.controller("aboutCtrl",function($scope,AJAX,$resource,CompanyInfo){
//   var data = CompanyInfo.get();
//   console.log(data);
//})

app.controller("aboutCtrl",function($scope,AJAX,$resource){
    var companyInfo = $resource(APP_ACTION.ABOUTUS, {});
    companyInfo.get(function(data){
        console.log(data);
        if(data.status == 'ok') {

            var d = data.result;
            $scope.IMAGE_ROOT = IMAGE_ROOT;
            $scope.logo = d.logo;
            $scope.company_info = d.company_info;
            $scope.company_tel = d.company_tel;
            $scope.company_qq = d.company_qq;
            $scope.company_net = d.company_net;
            $scope.company_email = d.company_email;
        }
    }, function(error){
        console.log(error);
    });
})