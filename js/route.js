app.config(function($routeProvider) {
        $routeProvider
            .when("/about", {
                templateUrl: "content/about.html",
                pageTitle:"关于我们",
                transition: "fade"
            })
            .when("/newslist", {
                templateUrl: "content/newslist.html",
                pageTitle:"新闻",
                transition: "fade",
                pageRole:'newslist',
                reverse: false
            })
            .when("/newsdetail/:aid", {
                templateUrl: "content/newsDetail.html",
                pageTitle:"新闻详情",
                transition: "iOSlide",
                pageRole:'newsDetail',
                reverse: false
            })
            .when("/service", {
                templateUrl: "content/service.html",
                pageTitle:"服务项目",
                transition: "fade"
            })
            .when("/servicedetail/:aid", {
                templateUrl: "content/serviceDetail.html",
                pageTitle:"",
                transition: "slide",
                reverse: false
            })
            .when("/case", {
                templateUrl: "content/case.html",
                pageTitle:"成功案例",
                transition: "fade"
            })
            .when("/jobs", {
                templateUrl: "content/jobs.html",
                pageTitle:"工作在云库",
                transition: "fade"
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

