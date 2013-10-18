app.config(function($routeProvider) {
        $routeProvider
            .when("/about", {
                templateUrl: "content/about.html",
                pageTitle:"关于我们",
                transition: "scale"
            })
            .when("/newslist", {
                templateUrl: "content/newslist.html",
                pageTitle:"新闻",
                transition: "fall",
                reverse: false
            })
            .when("/newsDetail/:aid", {
                templateUrl: "content/newsDetail.html",
                pageTitle:"新闻详情",
                transition: "slide",
                reverse: false
            })
            .when("/service", {
                templateUrl: "content/service.html",
                pageTitle:"服务项目",
                transition: "scale"
            })
            .when("/two", {
                templateUrl: "content/page2.html",
                pageTitle:"Page2",
                pageRole:"nav1",
                transition: "fall"
            })
            .when("/popup", {
                templateUrl: "content/popup.html",
                pageTitle:"Popup",
                transition: "slide"
            })
            .when("/monkey", {
                templateUrl: "content/monkey.html",
                pageTitle:"Monkey"
            })
            .when("/backwards", {
                templateUrl: "content/backwards.html",
                pageTitle:"backwards",
                pageRole:"nav2",
                reverse: true
            })
            .when("/", {
                templateUrl: "content/home.html",
                pageRole:"main",
                pageTitle:"MainPage"

            })
            .otherwise({
                redirectTo: "/"
            });
    });

