"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9584],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=l.createContext({}),s=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return l.createElement(u.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),k=s(n),p=a,m=k["".concat(u,".").concat(p)]||k[p]||d[p]||r;return n?l.createElement(m,i(i({ref:t},c),{},{components:n})):l.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[k]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var l=n(7462),a=(n(7294),n(3905));const r={sidebar_position:3},i="Advanced Integration",o={unversionedId:"tkg-integration/sdk-other-func",id:"version-3.1.x/tkg-integration/sdk-other-func",title:"Advanced Integration",description:"1. Game focus  changed callback",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.1.x/tkg-integration/sdk-other-func.md",sourceDirName:"tkg-integration",slug:"/tkg-integration/sdk-other-func",permalink:"/tkg-sdk-doc/tkg-integration/sdk-other-func",tags:[],version:"3.1.x",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Account system",permalink:"/tkg-sdk-doc/tkg-integration/sdk-basic/sdk-func-account"},next:{title:"Android Integration Verification",permalink:"/tkg-sdk-doc/tkg-integration/sdk-test/sdk-test-android"}},u={},s=[{value:"1. Game focus  changed callback",id:"1-game-focus--changed-callback",level:3},{value:"2. Ratings and reviews",id:"2-ratings-and-reviews",level:3},{value:"3. More Games",id:"3-more-games",level:3},{value:"4. GetChannel",id:"4-getchannel",level:3},{value:"5. SetUserSourceListener",id:"5-setusersourcelistener",level:3},{value:"6. SetTKGCommonCallback",id:"6-settkgcommoncallback",level:3},{value:"7. Custom Remote Config",id:"7-custom-remote-config",level:3},{value:"Get Remote Config",id:"get-remote-config",level:4},{value:"8. RewardVideo Callback",id:"8-rewardvideo-callback",level:3},{value:"9. Shake",id:"9-shake",level:3},{value:"10. Notification \uff08iOS Only\uff09",id:"10-notification-ios-only",level:3},{value:"1. Request notification permission",id:"1-request-notification-permission",level:4},{value:"2. Registered notification",id:"2-registered-notification",level:4},{value:"3. Remove a specified notification",id:"3-remove-a-specified-notification",level:4},{value:"4. Remove all notifications",id:"4-remove-all-notifications",level:4},{value:'11\u3001SetUserSourceListener \uff08<font color="#ff0000">v2.2.6 new</font>\uff09',id:"11setusersourcelistener-v226-new",level:3},{value:'12\u3001Source control \uff08<font color="#ff0000">v2.2.9 new</font>\uff09',id:"12source-control-v229-new",level:3},{value:'13\u3001Identity information query interface\uff08iOS Only\uff09\uff08<font color="#ff0000">v3.0.5 new</font>\uff09',id:"13identity-information-query-interfaceios-onlyv305-new",level:3},{value:'14\u3001obtain advertising revenue callback\uff08<font color="#ff0000">v3.1.2 new</font>\uff09',id:"14obtain-advertising-revenue-callbackv312-new",level:3}],c={toc:s},k="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"advanced-integration"},"Advanced Integration"),(0,a.kt)("h3",{id:"1-game-focus--changed-callback"},"1. Game focus  changed callback"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.SetGameFocusListener((_isFocus) => {\n    if (_isFocus)\n    {\n        Debug.Log("set game focus");\n    }\n    else\n    {\n        Debug.Log("lose game focus");\n    }\n});\n')),(0,a.kt)("p",null,"When the ad is displayed, your game is going to lose focus . This method allows you to receive focus changes."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," API: "),"    "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"void SetGameFocusListener(Action<bool> _gameFocusAction)\n")),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Name"),(0,a.kt)("td",null,"isRequired"),(0,a.kt)("td",null,"Type"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"_gameFocusAction"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"Action<bool>"),(0,a.kt)("td",null,"Pass your callback receiver method.  ",(0,a.kt)("br",null),"Your method needs to implement one parameter to receive a boolean value."))),(0,a.kt)("h3",{id:"2-ratings-and-reviews"},"2. Ratings and reviews"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("font",{color:"#ff0000"},"Attention: only available on iOS at the moment!"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.Review();  \n")),(0,a.kt)("p",null,"Call this method wherever needed\nPresenting the user with a request for an App Store review using Review()  to get feedback on your game."),(0,a.kt)("h3",{id:"3-more-games"},"3. More Games"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.OpenMoreGame();\n")),(0,a.kt)("p",null,"Open the store's own games listing page. The URL key in the configuration file is ",(0,a.kt)("inlineCode",{parentName:"p"},"tka_url_moregame")),(0,a.kt)("h3",{id:"4-getchannel"},"4. GetChannel"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"AppChannel _channel = TKGSDKManager.Instance.GetChannel()\uff1b\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," API: "),"     "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"AppChannel GetChannel();\n")),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Type"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"AppChannel"),(0,a.kt)("td",null,"Curr channel name\uff0cType : AppChannel ",(0,a.kt)("br",null),(0,a.kt)("b",null,"AppStore_GB/AppStore_CN/GooglePlay/GW002")," etc."))),(0,a.kt)("h3",{id:"5-setusersourcelistener"},"5. SetUserSourceListener"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.SetUserSourceListener((_isOrigin, _source) =>\n{\n    if (_isOrigin)\n    {\n        Debug.Log("is origin user");\n    }\n    else\n    {\n        Debug.Log("is not origin user");\n    }\n});\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," API: "),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"void SetUserSourceListener(Action<bool, string> _userSourceAction);    \n")),(0,a.kt)("p",null,"Note: The interface returns asynchronously. If the interface is called multiple times in a game, only the first time will return a value.     "),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Name"),(0,a.kt)("td",null,"isRequired"),(0,a.kt)("td",null,"Type"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"_userSourceAction"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"Action<bool, string>"),(0,a.kt)("td",null,"User Source callback.     ",(0,a.kt)("br",null),"bool: true - origin user / false - not origin ",(0,a.kt)("br",null),"string: source str ",(0,a.kt)("br",null)))),(0,a.kt)("h3",{id:"6-settkgcommoncallback"},"6. SetTKGCommonCallback"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.SetTKGCommonCallback((code, msg) => {\n    Debug.Log("common callback, code : " + code + " , msg : " + msg);\n});\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," API: ")," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"void SetTKGCommonCallback(Action<CommonCallbackCode, string> _commonCallback);    \n")),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Name"),(0,a.kt)("td",null,"isRequired"),(0,a.kt)("td",null,"Type"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"_commonCallback"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"Action<CommonCallbackCode, string>"),(0,a.kt)("td",null,"Use CommonCallbackCode to distinguish event.     ",(0,a.kt)("br",null),(0,a.kt)("b",null,"FirebaseOnlineParamGet_Succ: ")," firebase remote configuration get succ.  ",(0,a.kt)("br",null),(0,a.kt)("b",null,"FirebaseOnlineParamGet_Failed: ")," firebase remote configuration get failed.   ",(0,a.kt)("br",null),"    ",(0,a.kt)("br",null),"string: msg."))),(0,a.kt)("h3",{id:"7-custom-remote-config"},"7. Custom Remote Config"),(0,a.kt)("h4",{id:"get-remote-config"},"Get Remote Config"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Make changes to your game dynamic by defining remote configs."),(0,a.kt)("li",{parentName:"ul"},"Before you call any of the methods to get the remote parameters, you must pre-define in the config file.")),(0,a.kt)("p",null,"Pre define step:\nstep1. Declare an enum for all of your param keys:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Asset/TKGSDK/Config/Scripts/TKGParams.cs"',title:'"Asset/TKGSDK/Config/Scripts/TKGParams.cs"'},"public enum TKGParamKey\n{\n    RemoveAdsShowCount,\n    LevelList,\n    HasBlock,\n    .\n    .\n}\n")),(0,a.kt)("p",null,"step2. Add your enum into OnlineParamDic:"),(0,a.kt)("font",{color:"#ff0000"},"The default values of all customized online parameters are defined here."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Asset/TKGSDK/Config/Scripts/TKGParams.cs"',title:'"Asset/TKGSDK/Config/Scripts/TKGParams.cs"'},'  \npublic static class TKGParams\n{\n    public static readonly Dictionary<string, object> OnlineParamDic = new Dictionary<string, object>()\n    {\n        // key - default value\n        { TKGParamKey.RemoveAdsShowCount.ToString(), 4 },    // int value    // \n        { TKGParamKey.LevelList.ToString(), "1,78,72,70,64,65,4,66" }, // string value\n        { TKGParamKey.HasBlock.ToString(), 0 },     // bool value // 1:true 0:false\n    };\n}\n\n')),(0,a.kt)("p",null,"step3.  Get remote parameters in your game refer to the method list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"// get online param value\nint onlineIntValue = TKGSDKManager.Instance.GetConfigInt(TKGParamKey.RemoveAdsShowCount);\nstring onlineStrValue = TKGSDKManager.Instance.GetConfigStr(TKGParamKey.LevelList);\nbool onlineBoolValue = TKGSDKManager.Instance.GetConfigBool(TKGParamKey.HasBlock);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"API:"),"  ",(0,a.kt)("br",null)),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"int GetConfigInt(TKGParamKey _key);    \nstring GetConfigStr(TKGParamKey _key);  \nbool GetConfigBool(TKGParamKey _key);  \n")),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Name"),(0,a.kt)("td",null,"isRequired"),(0,a.kt)("td",null,"Type"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"_key"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"TKGParamKey"),(0,a.kt)("td",null,"Online param key ",(0,a.kt)("br",null)," Defined in the  your game product requirement."))),(0,a.kt)("h3",{id:"8-rewardvideo-callback"},"8. RewardVideo Callback"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'private void InitSDK()\n{\n    \n    TKGSDKManager.Instance.SetRewardClickListener(ClickRewardCallback);\n\n    TKGSDKManager.Instance.InitSDK(initCallback);\n}\n\nprivate void ClickRewardCallback()\n{\n    Debug.Log("[ToukaSDKDemo] click reward callback");\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"API:"),"  ",(0,a.kt)("br",null)),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SetRewardClickListener(Action _clickCallback)\n")),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Name"),(0,a.kt)("td",null,"isRequired"),(0,a.kt)("td",null,"Type"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"_clickCallback"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"Action"),(0,a.kt)("td",null," The method used to receive the excitation video click callback."))),(0,a.kt)("h3",{id:"9-shake"},"9. Shake"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.Shake(1,0.5f);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"API:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"void Shake(int _shakeType, float _intensity = 1)<br/>\n")),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Name"),(0,a.kt)("td",null,"isRequired"),(0,a.kt)("td",null,"Type"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"_shakeType"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"int"),(0,a.kt)("td",null,"Vibration strength:",(0,a.kt)("br",null),"0:light",(0,a.kt)("br",null),"1:medium",(0,a.kt)("br",null),"2:heavy",(0,a.kt)("br",null))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"_intensity"),(0,a.kt)("td",null,"N"),(0,a.kt)("td",null,"float"),(0,a.kt)("td",null,"Vibration time: 0 ~ 1"))),(0,a.kt)("h3",{id:"10-notification-ios-only"},"10. Notification \uff08iOS Only\uff09"),(0,a.kt)("h4",{id:"1-request-notification-permission"},"1. Request notification permission"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.RegistAPNS();\n")),(0,a.kt)("p",null,"After the call, the system authorization notification box will pop up."),(0,a.kt)("h4",{id:"2-registered-notification"},"2. Registered notification"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.RegistNotification("notificationID","hello world", now.AddDays(1).ToString("yyyy-MM-dd HH:mm:ss"),1,"Title","SubTitle");\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"API:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'void RegistNotification(string notiId, string body, string fireDate, int badge = 1, string title = "", string subTitle = "")\n')),(0,a.kt)("br",null),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Name"),(0,a.kt)("td",null,"isRequired"),(0,a.kt)("td",null,"Type"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"notiId"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"The ID of the registration notification is unique.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"body"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"Notification content, not empty, otherwise the registration is unsuccessful.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"fireDate"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"The format is yyyy-MM-dd HH:mm:ss. The value is greater than the current time; otherwise, the registration fails.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"title"),(0,a.kt)("td",null,"N"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"Notification title.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"subTitle"),(0,a.kt)("td",null,"N"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"Notification subtitle."))),(0,a.kt)("h4",{id:"3-remove-a-specified-notification"},"3. Remove a specified notification"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.RemoveNotification("notificationID");\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"API:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"void RemoveNotification(string notiId)<br/>\n")),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Name"),(0,a.kt)("td",null,"isRequired"),(0,a.kt)("td",null,"Type"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"notiId"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"Remove the notification according to the notification ID."))),(0,a.kt)("h4",{id:"4-remove-all-notifications"},"4. Remove all notifications"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.RemoveAllNotifications();\n")),(0,a.kt)("p",null,"Remove all notifications after the call."),(0,a.kt)("h3",{id:"11setusersourcelistener-v226-new"},"11\u3001SetUserSourceListener \uff08",(0,a.kt)("font",{color:"#ff0000"},"v2.2.6 new"),"\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.SetUserSourceListener((_isOrigin, _source,_campaignName) =>\n{\n   if (_isOrigin)\n   {\n       Debug.Log("is origin user");\n   }\n   else\n   {\n       Debug.Log("is not origin user");\n   }\n});\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," API: "),"     "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"void SetUserSourceListener(Action<bool, string, string> _userSourceActionWithCampaignName);\n")),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Name"),(0,a.kt)("td",null,"isRequired"),(0,a.kt)("td",null,"Type"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"_userSourceActionWithCampaignName"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"Action<bool, string,string>"),(0,a.kt)("td",null,"User source callback.    ",(0,a.kt)("br",null),"bool: true - origin user / false - non-origin user ",(0,a.kt)("br",null),"string: user source",(0,a.kt)("br",null),"string: campaign source",(0,a.kt)("br",null)))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," ",(0,a.kt)("font",{color:"#ff0000"},"Note: This interface returns asynchronously. For example, if the interface is called multiple times in a game, only the first time has a return value."),(0,a.kt)("br",null)," ")),(0,a.kt)("h3",{id:"12source-control-v229-new"},"12\u3001Source control \uff08",(0,a.kt)("font",{color:"#ff0000"},"v2.2.9 new"),"\uff09"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"}," Note\uff1a",(0,a.kt)("br",null),"1. This interface returns asynchronously. The length of List determines the number of times the callback method is executed; If the length of the list is 2, the callback method is executed twice.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'void Start() \n{\n  TKGSDKManager.Instance.SetFunctionSwitchListener(new List<FunctionType>() { FunctionType.Function_wangz, FunctionType.Function_bing }, OnFunsSwitchCallback);\n\n}\n\nprivate void OnFunsSwitchCallback(FunctionType _type, bool _result)\n{\n  Debug.Log("[ToukaSDKDemo]\uff1aFunctionType:" + _type +"result:"+ _result);\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," API: "),"     "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"void SetFunctionSwitchListener(List<FunctionType> _functionKeys, Action<FunctionType, bool> _functionSwitchCallback);\n")),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Name"),(0,a.kt)("td",null,"isRequired"),(0,a.kt)("td",null,"Type"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"_functionKeys"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"List<FunctionType>",(0,a.kt)("br",null)),(0,a.kt)("td",null,"Set of function names    ",(0,a.kt)("br",null))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"_functionSwitchCallback"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"Action<FunctionType, bool>"),(0,a.kt)("td",null,"The callback event returns the name of each function and the corresponding switch.",(0,a.kt)("br",null),"FunctionType: Function type ",(0,a.kt)("br",null),"bool: Whether to enable the current function, true - open / false - not open",(0,a.kt)("br",null)))),(0,a.kt)("h3",{id:"13identity-information-query-interfaceios-onlyv305-new"},"13\u3001Identity information query interface\uff08iOS Only\uff09\uff08",(0,a.kt)("font",{color:"#ff0000"},"v3.0.5 new"),"\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"string userInfo = TKGSDKManager.Instance.GetUserNameAndUserIDCard();\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," API: "),"     "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"string GetUserNameAndUserIDCard();\n")),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Type"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"string "),(0,a.kt)("td",null,'Return the user name and ID card information after real-name authentication, for example: "Jack_654121199212099999"'))),(0,a.kt)("h3",{id:"14obtain-advertising-revenue-callbackv312-new"},"14\u3001obtain advertising revenue callback\uff08",(0,a.kt)("font",{color:"#ff0000"},"v3.1.2 new"),"\uff09"),(0,a.kt)("p",null,"Each time an ad is displayed, it will callback to this interface and pass back the ad revenue earned for the display to the game side."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.SetAdsRevenueCallback(AdsRevenueCallback);\n\nprivate void AdsRevenueCallback(AdsType _adsType, string _price, string _currency)\n{\n    Debug.Log("AdsRevenueCallback, _adsType : " + _adsType + " , _price : " + _price + " , _currency : " + _currency);\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," API: "),"     "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"void SetAdsRevenueCallback(Action<AdsType, string, string> _adsRevenueCallback)\n")),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Name"),(0,a.kt)("td",null,"isRequired"),(0,a.kt)("td",null,"Type"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"_adsRevenueCallback"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"Action<AdsType, string,string>"),(0,a.kt)("td",null,"advertising revenue callback.     ",(0,a.kt)("br",null),"AdsType: ads type ",(0,a.kt)("br",null),"string: ads revenue",(0,a.kt)("br",null),"string: ads revenue currency",(0,a.kt)("br",null)))))}d.isMDXComponent=!0}}]);