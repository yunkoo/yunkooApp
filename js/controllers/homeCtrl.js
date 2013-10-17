app.controller("homeCtrl",function($scope,$timeout){

    var setDeg=function(){

        var wrap=$('#cardWrap');
        var content=$('#homeContent');
        var TRANSFORM="webkitTransform" in document.documentElement.style ? "webkitTransform" : "transform";
        var width=content[0].offsetWidth;
        var height=content[0].offsetHeight;
        var rotationVal=Math.atan(width/height);

        var newDeg=rotationVal/0.017453293;

        var c=width/Math.sin(rotationVal);
        var nagMar=(c/2)*-1;
        var cssObj={
            'height':c+'px',
            'width':c+'px',
            'marginLeft':nagMar+'px',
            'marginTop':nagMar+'px',
            'top':'50%',
            'left':'50%'
        };
        cssObj[TRANSFORM]='rotate('+newDeg+'deg)';
        wrap.css(cssObj);
        var roStringGen=function(cssrole,deg){
            var cssString=cssrole+'{-webkit-transform:'+'rotate('+deg+'deg)'+'}';
            cssString+=cssrole+'{transform:'+'rotate('+deg+'deg)'+'}';
            return cssString;
        };
            var iconmaxHeight='';
            if(TRANSFORM!='webkitTransform'){
                /*Fix none webkit browsers*/
                iconmaxHeight='.cardIcon{max-height:'+c/5*0.4+'px}';
            }
            var fixRotString = roStringGen('.cardIcon',newDeg*-1)+roStringGen('.cardTitle',newDeg*-1)+iconmaxHeight;
            $scope.fixRot=fixRotString;
            $timeout(function(){
                var carditemInner=$('.carditemInner');
                fixRotString+='.carditemInner{margin-left:'+'-'+carditemInner.width()/2+'px;}';
                fixRotString+='.carditemInner{margin-top:'+'-'+carditemInner.height()/2+'px;}';
                $scope.fixRot+=fixRotString;
            },0);

    };

    $scope.$on('$pageNaved',(function(){
        var naved=false;
        return function(){
            if(naved){return}
            naved=true;

            window.addEventListener('resize',setDeg,false);
            $timeout(setDeg,0);

        };
    })());

    $scope.$on('$destroy',function(e){
        window.removeEventListener('resize',setDeg);
    })

//    $(window).on('$init',function(e){
//        var o1= e.o1;
//        var o2= e.o2;
//
//        /*我需要把o1,o2 传进去，以让每次resize的时候调用*/
//        window.addEventListener('resize',setDeg,false);
//    });
//
//    /*其他地方也要调用,里面两个是必须*/
//    setDeg($('#cardWrap'),$('#homeContent'));
//
//    $(window).on('$destroy',function(){
//        window.removeEventListener('resize',setDeg);
//    })




})