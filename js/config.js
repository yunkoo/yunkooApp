
var APP_ACTION = {
    'NEWSLIST'             :SERVER+'/app_article/newslist/',                //公司动态
    'NEWSDETAIL'           :SERVER+'/app_article/news_detail/',                //新闻详情
    'ABOUTUS'               :SERVER+'/app_company/aboutus/'
}

var isAndroid = (function(){
    return navigator.userAgent.indexOf("Android") > 0;
})();