"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[832],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=d(n),p=a,m=k["".concat(u,".").concat(p)]||k[p]||c[p]||l;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2174:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:5},u="\u5e7f\u544a\u63a5\u5165",d={unversionedId:"tkg-integration/sdk-basic/sdk-func-ads",id:"tkg-integration/sdk-basic/sdk-func-ads",title:"\u5e7f\u544a\u63a5\u5165",description:"\u63d2\u5c4f\u5e7f\u544a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/tkg-integration/sdk-basic/sdk-func-ads.md",sourceDirName:"tkg-integration/sdk-basic",slug:"/tkg-integration/sdk-basic/sdk-func-ads",permalink:"/tkg-sdk-doc/zh/tkg-integration/sdk-basic/sdk-func-ads",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u5408\u89c4\u63a5\u53e3",permalink:"/tkg-sdk-doc/zh/tkg-integration/sdk-basic/sdk-func-privacy"},next:{title:"\u4e8b\u4ef6\u57cb\u70b9",permalink:"/tkg-sdk-doc/zh/tkg-integration/sdk-basic/sdk-func-event"}},s={},c=[{value:"\u63d2\u5c4f\u5e7f\u544a",id:"\u63d2\u5c4f\u5e7f\u544a",level:2},{value:"\u64ad\u653e\u63d2\u5c4f\u5e7f\u544a",id:"\u64ad\u653e\u63d2\u5c4f\u5e7f\u544a",level:3},{value:"\u63d2\u5c4fIsReady",id:"\u63d2\u5c4fisready",level:3},{value:"\u6fc0\u52b1\u89c6\u9891",id:"\u6fc0\u52b1\u89c6\u9891",level:2},{value:"\u64ad\u653e\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a",id:"\u64ad\u653e\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a",level:3},{value:"\u6fc0\u52b1\u89c6\u9891isReady",id:"\u6fc0\u52b1\u89c6\u9891isready",level:3},{value:"\u5f00\u5c4f\u5e7f\u544a",id:"\u5f00\u5c4f\u5e7f\u544a",level:2},{value:"Banner\u5e7f\u544a",id:"banner\u5e7f\u544a",level:2},{value:"ShowBanner",id:"showbanner",level:3},{value:"HideBanner",id:"hidebanner",level:3}],k={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5e7f\u544a\u63a5\u5165"},"\u5e7f\u544a\u63a5\u5165"),(0,l.kt)("h2",{id:"\u63d2\u5c4f\u5e7f\u544a"},"\u63d2\u5c4f\u5e7f\u544a"),(0,l.kt)("h3",{id:"\u64ad\u653e\u63d2\u5c4f\u5e7f\u544a"},"\u64ad\u653e\u63d2\u5c4f\u5e7f\u544a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.ShowInterstitialAd(TKGIVAdPositionName.IV_Retry);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," \u53c2\u6570:   "),(0,l.kt)("br",{parentName:"p"}),"\n","void ShowInterstitialAd(TKGIVAdPositionName _adPos, Action _callback = null, IVADType _IvType = IVADType.IV1)"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Name"),(0,l.kt)("td",null,"isRequired"),(0,l.kt)("td",null,"Type"),(0,l.kt)("td",null,"Description")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"_adPos"),(0,l.kt)("td",null,"Y"),(0,l.kt)("td",null,"TKGIVAdPositionName"),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u63d2\u5c4f\u5e7f\u544a\u70b9\u4f4d\u540d\u79f0\u3002\n\u8bf7\u5c06\u3010\u4ea7\u54c1\u9700\u6c42\u6587\u6863\u3011\u4e2d\u7684\u63d2\u5c4f\u5e7f\u544a\u70b9\u4f4d\u540d\u79f0\u5148\u5728 TKGAdPositionName.cs - TKGIVAdPositionName \u4e2d\u8fdb\u884c\u5b9a\u4e49\u3002\n")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"_callback"),(0,l.kt)("td",null,"N"),(0,l.kt)("td",null,"Action"),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u63d2\u5c4f\u56de\u8c03\u3002\n\u5173\u95ed\u63d2\u5c4f\u548c\u64ad\u653e\u5931\u8d25\u7b49\u90fd\u4f1a\u56de\u6765\u8fd9\u4e2a\u56de\u8c03\u3002\n"))))),(0,l.kt)("p",null,"\u63d2\u5c4f\u5e7f\u544a\u70b9\u4f4d\u540d\u79f0\u5b9a\u4e49\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8def\u5f84\uff1a/Assets/TKGSDK/Config/Scripts/TKGAdPositionName.cs\n\npublic enum TKGIVAdPositionName\n{\n    autoShowIntersititial,  \n\n    IV_RetryExp,\n    IV_NextLevelExp,\n\n    //add your game InterstitialAd PositionName\n    \n}\n")),(0,l.kt)("h3",{id:"\u63d2\u5c4fisready"},"\u63d2\u5c4fIsReady"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"bool isReadyIV = TKGSDKManager.Instance.IsReadyInterstitialAd();\n")),(0,l.kt)("p",null,"\u63d2\u5c4f\u5e7f\u544a\u662f\u5426\u51c6\u5907\u597d\u3002",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Return: "),"  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"true  "),(0,l.kt)("li",{parentName:"ul"},"false ")),(0,l.kt)("h2",{id:"\u6fc0\u52b1\u89c6\u9891"},"\u6fc0\u52b1\u89c6\u9891"),(0,l.kt)("h3",{id:"\u64ad\u653e\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a"},"\u64ad\u653e\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.ShowRewardAd(TKGRVPositionName.RV_GetDoubleCoin, RewardResult);\n\nprivate void RewardResult(bool _bReward)\n{\n    Debug.Log("[ToukaSDKDemo] Reward result\uff1a" + _bReward);\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:"),(0,l.kt)("br",{parentName:"p"}),"\n","void ShowRewardAd(TKGRVPositionName _adPos, Action","<","bool",">"," _rewardCallback = null, Action _showFailedCallback = null)"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Name"),(0,l.kt)("td",null,"isRequired"),(0,l.kt)("td",null,"Type"),(0,l.kt)("td",null,"Description")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"_adPos"),(0,l.kt)("td",null,"Y"),(0,l.kt)("td",null,"TKGRVPositionName"),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u6fc0\u52b1\u89c6\u9891\u70b9\u4f4d\u540d\u79f0\u3002\n\u8bf7\u5c06\u3010\u4ea7\u54c1\u9700\u6c42\u6587\u6863\u3011\u4e2d\u7684\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u70b9\u4f4d\u540d\u79f0\u5148\u5728 TKGAdPositionName.cs - TKGRVPositionName \u4e2d\u8fdb\u884c\u5b9a\u4e49\u3002\n")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"_rewardCallback"),(0,l.kt)("td",null,"N"),(0,l.kt)("td",null,"Action-bool"),(0,l.kt)("td",null,"\u6fc0\u52b1\u89c6\u9891\u5956\u52b1\u56de\u8c03\u3002 ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"_playFailedCallback"),(0,l.kt)("td",null,"N"),(0,l.kt)("td",null,"Action"),(0,l.kt)("td",null,"\u6fc0\u52b1\u89c6\u9891\u64ad\u653e\u5931\u8d25\u56de\u8c03\u3002 "))),(0,l.kt)("p",null,"\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u70b9\u4f4d\u540d\u79f0\u5b9a\u4e49\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8def\u5f84\uff1a/Assets/TKGSDK/Config/Scripts/TKGAdPositionName.cs\n\npublic enum TKGRVPositionName\n{\n    RV_GetDoubleCoinExp,\n    RV_GetTipsExp,\n\n    //add your game RewardAd PositionName\n\n}\n")),(0,l.kt)("h3",{id:"\u6fc0\u52b1\u89c6\u9891isready"},"\u6fc0\u52b1\u89c6\u9891isReady"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"bool isReadyRV = TKGSDKManager.Instance. IsReadyRewardAd();\n")),(0,l.kt)("p",null,"\u8fd4\u56de\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u662f\u5426\u51c6\u5907\u597d\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","Return:   "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"true  "),(0,l.kt)("li",{parentName:"ul"},"false  ")),(0,l.kt)("h2",{id:"\u5f00\u5c4f\u5e7f\u544a"},"\u5f00\u5c4f\u5e7f\u544a"),(0,l.kt)("p",null,"\u63a5\u5165\u5f00\u5c4f\u5e7f\u544a\uff0c\u53ea\u9700\u8981\u914d\u7f6e\u5f00\u5c4f\u5e7f\u544a\u5f00\u5173\u548c\u5f00\u5c4f\u5e7f\u544a\u4f4dID\u3002\uff08\u5f00\u5c4f\u5f00\u5173\u9ed8\u8ba4\u5f00\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8def\u5f84\uff1aAssets/TKGSDK/Config/Scripts/AdsSettings/StaticStringsKey_iOS.cs\n\u5f00\u5173\uff1aSplashAdSwitch: true\n\u5f00\u5c4f\u5e7f\u544a\u4f4dID\uff1aTOPON_OriginSplashAdId\n")),(0,l.kt)("h2",{id:"banner\u5e7f\u544a"},"Banner\u5e7f\u544a"),(0,l.kt)("h3",{id:"showbanner"},"ShowBanner"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.ShowBanner(ToukaSDKAdapter.ToukaBannerAlign.BannerCenterBottomAlign);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters:"),(0,l.kt)("br",{parentName:"p"}),"\n","void ShowBanner(ToukaSDKAdapter.ToukaBannerAlign _bannerAlign)"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Name"),(0,l.kt)("td",null,"isRequired"),(0,l.kt)("td",null,"Type"),(0,l.kt)("td",null,"Description")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"_bannerAlign"),(0,l.kt)("td",null,"Y"),(0,l.kt)("td",null,"ToukaBannerAlign"),(0,l.kt)("td",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Banner\u4f4d\u7f6e\u3002\nBannerCenterBottomAlign / BannerCenterTopAlign\n"))))),(0,l.kt)("h3",{id:"hidebanner"},"HideBanner"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.HideBanner();\n")))}p.isMDXComponent=!0}}]);