"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1198],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=l.createContext({}),c=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return l.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=c(n),m=a,p=k["".concat(u,".").concat(m)]||k[m]||d[m]||r;return n?l.createElement(p,i(i({ref:t},s),{},{components:n})):l.createElement(p,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2205:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var l=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],o={title:"Advanced API",sidebar_label:"Advanced API",description:"",sidebar_position:98},u=void 0,c={unversionedId:"api/advance-api",id:"version-2.2.x/api/advance-api",title:"Advanced API",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.2.x/api/advance-api.md",sourceDirName:"api",slug:"/api/advance-api",permalink:"/tkg-sdk-doc/api/advance-api",tags:[],version:"2.2.x",sidebarPosition:98,frontMatter:{title:"Advanced API",sidebar_label:"Advanced API",description:"",sidebar_position:98},sidebar:"apiSidebar",previous:{title:"Basic API",permalink:"/tkg-sdk-doc/api/common-api"}},s={},d=[{value:"1. Game focus changed callback",id:"1-game-focus-changed-callback",level:2},{value:"1.1 Sample code",id:"11-sample-code",level:4},{value:"2. Ratings and reviews",id:"2-ratings-and-reviews",level:2},{value:"2.1 Sample code",id:"21-sample-code",level:4},{value:"3. More Games",id:"3-more-games",level:2},{value:"3.1 Sample code",id:"31-sample-code",level:4},{value:"4. GetChannel",id:"4-getchannel",level:2},{value:"4.1 Sample code",id:"41-sample-code",level:4},{value:"5. SetUserSourceListener",id:"5-setusersourcelistener",level:2},{value:"5.1 Sample code",id:"51-sample-code",level:4},{value:"6. SetTKGCommonCallback",id:"6-settkgcommoncallback",level:2},{value:"6.1 Sample code",id:"61-sample-code",level:4},{value:"7. Custom Remote Config",id:"7-custom-remote-config",level:2},{value:"7.1 Sample code",id:"71-sample-code",level:4},{value:"8. Reward Video Callback",id:"8-reward-video-callback",level:2},{value:"8.1 Sample code",id:"81-sample-code",level:4},{value:"9. iOS GB Use Splash Ad",id:"9-ios-gb-use-splash-ad",level:2},{value:"10. Shake",id:"10-shake",level:2},{value:"10.1 Sample code",id:"101-sample-code",level:4},{value:"11. Notification",id:"11-notification",level:2},{value:"10.1 Sample code",id:"101-sample-code-1",level:4}],k={toc:d};function m(e){var t=e.components,o=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-game-focus-changed-callback"},"1. Game focus changed callback"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SetGameFocusListener"),(0,r.kt)("td",null,"(Action<bool> _gameFocusAction)"),(0,r.kt)("td",null,"Set game lost focus callback",(0,r.kt)("br",null),"true:get focus",(0,r.kt)("br",null),"false:lose focus",(0,r.kt)("br",null)," ",(0,r.kt)("br",null),"When the ad is displayed, your game is going to lose focus. Can pause game sound, etc.\u3002"))),(0,r.kt)("h4",{id:"11-sample-code"},"1.1 Sample code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.SetGameFocusListener((_isFocus) => {\n    if (_isFocus)\n    {\n        Debug.Log("set game focus");\n    }\n    else\n    {\n        Debug.Log("lose game focus");\n    }\n});\n')),(0,r.kt)("h2",{id:"2-ratings-and-reviews"},"2. Ratings and reviews"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Review"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Open iOS System Popout Review."))),(0,r.kt)("h4",{id:"21-sample-code"},"2.1 Sample code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.Review();\n")),(0,r.kt)("h2",{id:"3-more-games"},"3. More Games"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"OpenMoreGame"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Open the store's own games listing page."))),(0,r.kt)("h4",{id:"31-sample-code"},"3.1 Sample code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.OpenMoreGame();\n")),(0,r.kt)("h2",{id:"4-getchannel"},"4. GetChannel"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Return"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"GetChannel"),(0,r.kt)("td",null,"AppChannel"),(0,r.kt)("td",null,"Get Curr Channel\uff0creturn AppChannel ",(0,r.kt)("br",null),"AppStore_GB/AppStore_CN/GooglePlay/GW002 etc."))),(0,r.kt)("h4",{id:"41-sample-code"},"4.1 Sample code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"AppChannel _channel = TKGSDKManager.Instance.GetChannel();\n")),(0,r.kt)("h2",{id:"5-setusersourcelistener"},"5. SetUserSourceListener"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SetUserSourceListener"),(0,r.kt)("td",null,"(Action\xa0<bool, string> _userSourceAction)"),(0,r.kt)("td",null,"Set User Source Listener   ",(0,r.kt)("br",null),(0,r.kt)("br",null),"_isOrigin: true origin user / false not origin ",(0,r.kt)("br",null),(0,r.kt)("br",null),"The interface returns asynchronously. If the interface is called multiple times in a game, only the first time will return a value."))),(0,r.kt)("h4",{id:"51-sample-code"},"5.1 Sample code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.SetUserSourceListener((_isOrigin, _source) =>\n{\n    if (_isOrigin)\n    {\n        Debug.Log("is origin user");\n    }\n    else\n    {\n        Debug.Log("is not origin user");\n    }\n});\n')),(0,r.kt)("h2",{id:"6-settkgcommoncallback"},"6. SetTKGCommonCallback"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SetTKGCommonCallback"),(0,r.kt)("td",null,"(Action<CommonCallbackCode, string> _commonCallback)"),(0,r.kt)("td",null,"   ",(0,r.kt)("br",null),"SDK unified event callback interface. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Use CommonCallbackCode to distinguish event. ",(0,r.kt)("br",null),"FirebaseOnlineParamGet_Succ: firebase remote configuration get succ. FirebaseOnlineParamGet_Failed: firebase remote configuration get failed.   ",(0,r.kt)("br",null),"    ",(0,r.kt)("br",null),"string: msg."))),(0,r.kt)("h4",{id:"61-sample-code"},"6.1 Sample code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.SetTKGCommonCallback((code, msg) => {\n    Debug.Log("common callback, code : " + code + " , msg : " + msg);\n});\n')),(0,r.kt)("h2",{id:"7-custom-remote-config"},"7. Custom Remote Config"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"GetConfigStr"),(0,r.kt)("td",null,"(TKGParamKey _key)"),(0,r.kt)("td",null,"get string type remote config. ",(0,r.kt)("br",null),"Need define key and default value first in TKGParams.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"GetConfigInt"),(0,r.kt)("td",null,"(TKGParamKey _key)"),(0,r.kt)("td",null,"get int type remote config. ",(0,r.kt)("br",null),"Need define key and default value first in TKGParams.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"GetConfigBool"),(0,r.kt)("td",null,"(TKGParamKey _key)"),(0,r.kt)("td",null,"get bool type remote config. ",(0,r.kt)("br",null),"Need define key and default value first in TKGParams. ",(0,r.kt)("br",null),"true: set default value to 1; false: set default value to 0"))),(0,r.kt)("h4",{id:"71-sample-code"},"7.1 Sample code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Asset/TKGSDK/Config/Scripts/TKGParams.cs"',title:'"Asset/TKGSDK/Config/Scripts/TKGParams.cs"'},'// set key\npublic enum TKGParamKey\n{\n    RemoveAdsShowCount,\n    LevelList,\n    HasBlock,\n    .\n    .\n}\n\n// add key & default value\npublic static class TKGParams\n{\n    public static readonly Dictionary<string, object> OnlineParamDic = new Dictionary<string, object>()\n    {\n        // key - default value\n        { TKGParamKey.RemoveAdsShowCount.ToString(), 4 },    // int value    // \n        { TKGParamKey.LevelList.ToString(), "1,78,72,70,64,65,4,66" }, // string value\n        { TKGParamKey.HasBlock.ToString(), 0 },     // bool value // 1:true 0:false\n    };\n}\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"// get online param value\nint onlineIntValue = TKGSDKManager.Instance.GetConfigInt(TKGParamKey.RemoveAdsShowCount);\nstring onlineStrValue = TKGSDKManager.Instance.GetConfigStr(TKGParamKey.LevelList);\nbool onlineBoolValue = TKGSDKManager.Instance.GetConfigBool(TKGParamKey.HasBlock);\n")),(0,r.kt)("h2",{id:"8-reward-video-callback"},"8. Reward Video Callback"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SetRewardClickListener"),(0,r.kt)("td",null,"(Action _rewardClickAction)"),(0,r.kt)("td",null,"reward video callback.",(0,r.kt)("br",null),"Set up the incentive video click callback before initializing the SDK."))),(0,r.kt)("h4",{id:"81-sample-code"},"8.1 Sample code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'private void InitSDK()\n{\n    \n    TKGSDKManager.Instance.SetRewardClickListener(ClickRewardCallback);\n\n    TKGSDKManager.Instance.InitSDK(initCallback);\n}\n\nprivate void ClickRewardCallback()\n{\n    Debug.Log("[ToukaSDKDemo] click reward callback");\n}\n')),(0,r.kt)("h2",{id:"9-ios-gb-use-splash-ad"},"9. iOS GB Use Splash Ad"),(0,r.kt)("p",null,"Add macro definitions in Unity\uff1a",(0,r.kt)("strong",{parentName:"p"}," USE_SPLASH ")," ",(0,r.kt)("br",null),(0,r.kt)("br",null),"\n",(0,r.kt)("img",{src:n(399).Z,width:"636",height:"236"}),(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"10-shake"},"10. Shake"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Shake"),(0,r.kt)("td",null,"(int _shakeType, float _intensity = 1)"),(0,r.kt)("td",null,"Trigger your phone to vibrate.",(0,r.kt)("br",null)," ",(0,r.kt)("br",null),"_shakeType :",(0,r.kt)("br",null),"0:light",(0,r.kt)("br",null),"1:medium",(0,r.kt)("br",null),"2:heavy",(0,r.kt)("br",null),(0,r.kt)("br",null),"_intensity : ",(0,r.kt)("br",null),"0 ~ 1"))),(0,r.kt)("h4",{id:"101-sample-code"},"10.1 Sample code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.Shake(1,0.5f);\n")),(0,r.kt)("h2",{id:"11-notification"},"11. Notification"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"RegistAPNS"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"After the call, the system authorization notification box will pop up.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"RegistNotification"),(0,r.kt)("td",null,'(string notiId, string body, string fireDate, int badge = 1, string title = "", string subTitle = "")'),(0,r.kt)("td",null,"Registered notification",(0,r.kt)("br",null),"  ",(0,r.kt)("br",null),"notiId: The ID of the registration notification is unique.",(0,r.kt)("br",null),(0,r.kt)("br",null),"body: Notification content, not empty, otherwise the registration is unsuccessful.",(0,r.kt)("br",null),(0,r.kt)("br",null),"fireDate: The format is yyyy-MM-dd HH:mm:ss. The value is greater than the current time; otherwise, the registration fails.",(0,r.kt)("br",null),(0,r.kt)("br",null),"title: Notification title",(0,r.kt)("br",null),(0,r.kt)("br",null),"subTitle: Notification subtitle",(0,r.kt)("br",null),(0,r.kt)("br",null))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"RemoveNotification"),(0,r.kt)("td",null,"(string notiId)"),(0,r.kt)("td",null,"Remove the notification according to the notification ID. ",(0,r.kt)("br",null))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"RemoveNotification"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Remove all notifications after the call."))),(0,r.kt)("h4",{id:"101-sample-code-1"},"10.1 Sample code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'private void Awake()\n{\n    TKGSDKManager.Instance.RegistAPNS();\n}\n\nprivate void OnApplicationFocus(bool isFocus)\n{\n    TKGSDKManager.Instance.RemoveAllNotifications();\n\n    if (!isFocus)\n    {\n        TKGSDKManager.Instance.RegistNotification("notificationID","hello world", now.AddDays(1).ToString("yyyy-MM-dd HH:mm:ss"),1,"Title","SubTitle");\n    }\n}\n')))}m.isMDXComponent=!0},399:function(e,t,n){t.Z=n.p+"assets/images/usesplash-6dc5db23f2e9dbe754557fb05eb6e556.jpg"}}]);