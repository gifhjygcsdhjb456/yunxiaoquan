
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/home/home","pages/list/detail","uni_modules/uni-id-pages/pages/login/login-withpwd","pages/ucenter/ucenter","uni_modules/uni-feedback/pages/opendb-feedback/opendb-feedback","pages/uni-agree/uni-agree","pages/ucenter/settings/settings","pages/ucenter/read-news-log/read-news-log","pages/ucenter/about/about","uni_modules/uni-upgrade-center-app/pages/upgrade-popup","pages/ucenter/invite/invite","pages/interceptLog/interceptLog","pages/interceptSet/interceptSet","pages/tipOff/tipOff","pages/whiteList/whiteList","pages/blackList/blackList","pages/articles/articles","pages/msgDetail/msgDetail","pages/editTipOff/editTipOff","pages/articleDetail/articleDetail","uni_modules/uni-feedback/pages/opendb-feedback/opendb-feedback","uni_modules/uni-id-pages/pages/userinfo/userinfo","uni_modules/uni-id-pages/pages/userinfo/realname-verify/realname-verify","uni_modules/uni-id-pages/pages/login/login-withoutpwd","uni_modules/uni-id-pages/pages/login/login-withpwd","uni_modules/uni-id-pages/pages/userinfo/deactivate/deactivate","uni_modules/uni-id-pages/pages/userinfo/bind-mobile/bind-mobile","uni_modules/uni-id-pages/pages/login/login-smscode","uni_modules/uni-id-pages/pages/register/register","uni_modules/uni-id-pages/pages/retrieve/retrieve","uni_modules/uni-id-pages/pages/common/webview/webview","uni_modules/uni-id-pages/pages/userinfo/change_pwd/change_pwd","uni_modules/uni-id-pages/pages/register/register-by-email","uni_modules/uni-id-pages/pages/retrieve/retrieve-by-email","uni_modules/uni-id-pages/pages/userinfo/set-pwd/set-pwd"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"防诈宝","navigationBarBackgroundColor":"#00B8F9","backgroundColor":"#F8F8F8","enablePullDownRefresh":false,"rpxCalcMaxDeviceWidth":375,"rpxCalcBaseDeviceWidth":375},"tabBar":{"color":"#7A7E83","selectedColor":"#007AFF","borderStyle":"black","backgroundColor":"#FFFFFF","list":[{"pagePath":"pages/home/home","iconPath":"static/tabbar/list.png","selectedIconPath":"static/tabbar/list_active.png","text":"首页"},{"pagePath":"pages/ucenter/ucenter","iconPath":"static/tabbar/me.png","selectedIconPath":"static/tabbar/me_active.png","text":"我的"}]},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"防诈宝","compilerVersion":"3.99","entryPagePath":"uni_modules/uni-id-pages/pages/login/login-withpwd","entryPageQuery":"","realEntryPagePath":"pages/home/home","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/list/detail","meta":{},"window":{"navigationBarTitleText":"文章详情","titleNView":{"buttons":[{"type":"share"}],"type":"transparent"}}},{"path":"/uni_modules/uni-id-pages/pages/login/login-withpwd","meta":{},"window":{}},{"path":"/pages/ucenter/ucenter","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/uni_modules/uni-feedback/pages/opendb-feedback/opendb-feedback","meta":{},"window":{"navigationBarTitleText":"意见反馈","enablePullDownRefresh":false}},{"path":"/pages/uni-agree/uni-agree","meta":{"isNVue":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/ucenter/settings/settings","meta":{},"window":{"navigationBarTitleText":"设置"}},{"path":"/pages/ucenter/read-news-log/read-news-log","meta":{},"window":{"navigationBarTitleText":"阅读记录","enablePullDownRefresh":true}},{"path":"/pages/ucenter/about/about","meta":{},"window":{"navigationBarTitleText":"关于","titleNView":{"buttons":[{"type":"share"}]}}},{"path":"/uni_modules/uni-upgrade-center-app/pages/upgrade-popup","meta":{},"window":{"disableScroll":true,"backgroundColorTop":"transparent","background":"transparent","titleNView":false,"scrollIndicator":false,"animationType":"fade-in","animationDuration":200}},{"path":"/pages/ucenter/invite/invite","meta":{},"window":{"navigationStyle":"custom","enablePullDownRefresh":false}},{"path":"/pages/interceptLog/interceptLog","meta":{},"window":{"navigationBarTitleText":"识别记录","enablePullDownRefresh":false}},{"path":"/pages/interceptSet/interceptSet","meta":{},"window":{"navigationBarTitleText":"权限管理","enablePullDownRefresh":false}},{"path":"/pages/tipOff/tipOff","meta":{},"window":{"navigationBarTitleText":"投诉举报","enablePullDownRefresh":false}},{"path":"/pages/whiteList/whiteList","meta":{},"window":{"navigationBarTitleText":"白名单","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"white"}},{"path":"/pages/blackList/blackList","meta":{},"window":{"navigationBarTitleText":"黑名单","enablePullDownRefresh":false,"navigationStyle":"custom","navigationBarTextStyle":"white"}},{"path":"/pages/articles/articles","meta":{},"window":{"navigationBarTitleText":"安全专区","enablePullDownRefresh":true}},{"path":"/pages/msgDetail/msgDetail","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/editTipOff/editTipOff","meta":{},"window":{"navigationBarTitleText":"投诉举报","enablePullDownRefresh":false}},{"path":"/pages/articleDetail/articleDetail","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/uni_modules/uni-id-pages/pages/userinfo/userinfo","meta":{},"window":{"navigationBarTitleText":"个人资料"}},{"path":"/uni_modules/uni-id-pages/pages/userinfo/realname-verify/realname-verify","meta":{},"window":{"enablePullDownRefresh":false,"navigationBarTitleText":"实名认证"}},{"path":"/uni_modules/uni-id-pages/pages/login/login-withoutpwd","meta":{},"window":{}},{"path":"/uni_modules/uni-id-pages/pages/userinfo/deactivate/deactivate","meta":{},"window":{"navigationBarTitleText":"注销账号"}},{"path":"/uni_modules/uni-id-pages/pages/userinfo/bind-mobile/bind-mobile","meta":{},"window":{"navigationBarTitleText":"绑定手机号码"}},{"path":"/uni_modules/uni-id-pages/pages/login/login-smscode","meta":{},"window":{"navigationBarTitleText":"手机验证码登录"}},{"path":"/uni_modules/uni-id-pages/pages/register/register","meta":{},"window":{"navigationBarTitleText":"注册"}},{"path":"/uni_modules/uni-id-pages/pages/retrieve/retrieve","meta":{},"window":{"navigationBarTitleText":"重置密码"}},{"path":"/uni_modules/uni-id-pages/pages/common/webview/webview","meta":{},"window":{"enablePullDownRefresh":false,"navigationBarTitleText":""}},{"path":"/uni_modules/uni-id-pages/pages/userinfo/change_pwd/change_pwd","meta":{},"window":{"enablePullDownRefresh":false,"navigationBarTitleText":"修改密码"}},{"path":"/uni_modules/uni-id-pages/pages/register/register-by-email","meta":{},"window":{"navigationBarTitleText":"邮箱验证码注册"}},{"path":"/uni_modules/uni-id-pages/pages/retrieve/retrieve-by-email","meta":{},"window":{"navigationBarTitleText":"通过邮箱重置密码"}},{"path":"/uni_modules/uni-id-pages/pages/userinfo/set-pwd/set-pwd","meta":{},"window":{"enablePullDownRefresh":false,"navigationBarTitleText":"设置密码"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
