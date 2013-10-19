app.controller("headerCtrl",function($scope,$rootScope,$navigate){



    var curPageRole=null;
    $rootScope.$on("$pageNaved",function(angularEvent,navHistory,curRoute,preRoute){


        if(!curRoute.$$route){
           return
        }

        curPageRole=curRoute.$$route['pageRole'];


        $scope.title.pageTitle=curRoute.$$route['pageTitle'];
        if(curPageRole=="main"){
            navHistory=$navigate.eraseHistory('page',curRoute);
        }
        var l=navHistory.length;
        var pre=navHistory[l-2];
        if(pre){
            $scope.title.backTitle=pre[1].$$route['pageTitle'];
        }else{
            $scope.title.backTitle=null;
        }
    });

    $scope.historyBack=function(){
       if(curPageRole=='newsDetail'){
           $navigate.go('/newslist','iOSlide',true);
       }else if(curPageRole=='newslist'){
           $navigate.go('/','fade',true);
       }else{
           $navigate.back();
       }


    }

    $scope.$on("$headerChangeEvt",function(event,o){
        if(o && o.pageTitle){
            $scope.title.pageTitle = o.pageTitle;
        }
    });


})