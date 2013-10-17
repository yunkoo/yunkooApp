app.controller("headerCtrl",function($scope,$rootScope,$navigate){




    $rootScope.$on("$pageNaved",function(angularEvent,navHistory,curRoute,preRoute){


        if(!curRoute.$$route){
           return
        }
        var curPageRole=null;
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
        $navigate.back();
    }


})