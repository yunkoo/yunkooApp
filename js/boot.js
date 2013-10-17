/*启动angular*/
var app=angular.module('regou.anph', ['ngRoute','ngAnimate','ngResource','ngStorage','ajoslin.mobile-navigate','angular-gestures']);


app.config(function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    // Use x-www-form-urlencoded Content-Type
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
});

app.controller('MainCtrl', function($scope, $navigate) {
    $scope.$navigate = $navigate;
})

/*导航动画
* 用法：添加"nav-to"属性 "ani"属性（动画）ani属性值前加符号为反向
* */
app.directive("navTo",['$navigate', function($navigate){
    return {
        restrict: 'A',
        link: function (scope,element,attrs) {

            var tapAct=function(){
                var path=attrs['navTo'];
                var animate=attrs.ani;
                if(path=='back'){
                    scope.$apply(function(){$navigate.back()});
                }else{
                    if(animate && animate.substr(0, 1) == "-"){
                        animate=animate.substr(1);
                        scope.$apply(function(){$navigate.go(path,animate,true)});
                    }else{
                        scope.$apply(function(){$navigate.go(path,animate)});
                    }

                };
            };
            if(window.navigator.msPointerEnabled){
                element.bind("MSPointerUp",tapAct);
            }else{
                Hammer(element[0]).on("tap",tapAct);
            }


        }
    }
}]);


app.directive("touchact",function(){
    return {
        restrict: 'A',
        link: function (scope,element,attrs) {
            var classname=attrs['touchact'] || 'navfocus';
            element.bind("touchstart",function(){
                var cl=this.classList;
                try{cl.add(classname);
                setTimeout(function(){cl.remove(classname)},300);
                }catch(e){}
            });
            element.bind("touchend",function(){
                try{this.classList.remove(classname);}catch(e){}
            })
        }
    }
});


