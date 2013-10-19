
var APP_ACTION = {
    'NEWSLIST'             :SERVER+'/app_article/newslist/',                //公司动态列表
    'NEWSDETAIL'           :SERVER+'/app_article/news_detail/',                //公司动态详情
    'ABOUTUS'               :SERVER+'/app_company/aboutus/' ,                //关于我们
    'SERVICE'               :SERVER+'/app_article/service/',                 //服务项目列表
    'SERVICE_DETAIL'        :SERVER+'/app_article/service_detail/',          //服务项目详情
    'JOB'                   :SERVER+'/app_job/job'                     //招贤纳士列表
}

var isAndroid = (function(){
    return navigator.userAgent.indexOf("Android") > 0;
})();