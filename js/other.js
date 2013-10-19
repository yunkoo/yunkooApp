(function(){
    document.addEventListener("deviceready", function(){
        var headerCollapse=$("#my_headerCollapse");
        var toogleCollapse=function(){
            headerCollapse.collapse('toggle');
        }
        document.addEventListener("menubutton", toogleCollapse, false);
    }, false);

    window.addEventListener('resize',function(e){
        $('.content,.contentNoWebkitTouch').trigger('resize',e);
    })
})();

app.run(function($route, $http, $templateCache) {
    angular.forEach($route.routes, function(r) {
        if (r.templateUrl) {
            $http.get(r.templateUrl, {cache: $templateCache});
        }
    });
});
