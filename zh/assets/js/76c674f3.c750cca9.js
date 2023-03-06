"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5240],{3905:function(t,n,e){e.d(n,{Zo:function(){return s},kt:function(){return p}});var l=e(7294);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,l)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function u(t,n){if(null==t)return{};var e,l,a=function(t,n){if(null==t)return{};var e,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)e=r[l],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)e=r[l],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var o=l.createContext({}),k=function(t){var n=l.useContext(o),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},s=function(t){var n=k(t.components);return l.createElement(o.Provider,{value:n},t.children)},c={inlineCode:"code",wrapper:function(t){var n=t.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(t,n){var e=t.components,a=t.mdxType,r=t.originalType,o=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),d=k(e),p=a,g=d["".concat(o,".").concat(p)]||d[p]||c[p]||r;return e?l.createElement(g,i(i({ref:n},s),{},{components:e})):l.createElement(g,i({ref:n},s))}));function p(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var r=e.length,i=new Array(r);i[0]=d;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=t,u.mdxType="string"==typeof t?t:a,i[1]=u;for(var k=2;k<r;k++)i[k]=e[k];return l.createElement.apply(null,i)}return l.createElement.apply(null,e)}d.displayName="MDXCreateElement"},2541:function(t,n,e){e.r(n),e.d(n,{assets:function(){return s},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return u},metadata:function(){return k},toc:function(){return c}});var l=e(7462),a=e(3366),r=(e(7294),e(3905)),i=["components"],u={sidebar_position:3},o="\u5176\u4ed6\u529f\u80fd",k={unversionedId:"tkg-integration/sdk-other-func",id:"version-3.0.x/tkg-integration/sdk-other-func",title:"\u5176\u4ed6\u529f\u80fd",description:"1\u3001\u6e38\u620f\u5931\u53bb/\u83b7\u5f97\u7126\u70b9",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0.x/tkg-integration/sdk-other-func.md",sourceDirName:"tkg-integration",slug:"/tkg-integration/sdk-other-func",permalink:"/tkg-sdk-doc/zh/tkg-integration/sdk-other-func",tags:[],version:"3.0.x",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u4e8b\u4ef6\u57cb\u70b9",permalink:"/tkg-sdk-doc/zh/tkg-integration/sdk-basic/sdk-func-event"},next:{title:"Android \u63a5\u5165\u9a8c\u8bc1",permalink:"/tkg-sdk-doc/zh/tkg-integration/sdk-test/sdk-test-android"}},s={},c=[{value:"1\u3001\u6e38\u620f\u5931\u53bb/\u83b7\u5f97\u7126\u70b9",id:"1\u6e38\u620f\u5931\u53bb\u83b7\u5f97\u7126\u70b9",level:3},{value:"2\u3001\u8bc4\u4ef7",id:"2\u8bc4\u4ef7",level:3},{value:"3\u3001\u66f4\u591a\u6e38\u620f",id:"3\u66f4\u591a\u6e38\u620f",level:3},{value:"4\u3001\u83b7\u53d6\u5f53\u524d\u6e20\u9053\u540d\u79f0",id:"4\u83b7\u53d6\u5f53\u524d\u6e20\u9053\u540d\u79f0",level:3},{value:"5\u3001\u83b7\u53d6\u5f53\u524d\u7528\u6237\u6765\u6e90",id:"5\u83b7\u53d6\u5f53\u524d\u7528\u6237\u6765\u6e90",level:3},{value:"6\u3001SDK\u901a\u7528\u56de\u8c03\u63a5\u53e3",id:"6sdk\u901a\u7528\u56de\u8c03\u63a5\u53e3",level:3},{value:"7\u3001\u81ea\u5b9a\u4e49\u5728\u7ebf\u53c2\u6570",id:"7\u81ea\u5b9a\u4e49\u5728\u7ebf\u53c2\u6570",level:3},{value:"\u83b7\u53d6\u5728\u7ebf\u53c2\u6570",id:"\u83b7\u53d6\u5728\u7ebf\u53c2\u6570",level:4},{value:"8\u3001\u6fc0\u52b1\u89c6\u9891\u70b9\u51fb\u56de\u8c03",id:"8\u6fc0\u52b1\u89c6\u9891\u70b9\u51fb\u56de\u8c03",level:3},{value:"9\u3001\u9707\u52a8",id:"9\u9707\u52a8",level:3},{value:"10\u3001\u63a8\u9001 \uff08Android \u672a\u5f00\u653e\uff09",id:"10\u63a8\u9001-android-\u672a\u5f00\u653e",level:3},{value:"1. \u83b7\u53d6\u63a8\u9001\u6743\u9650",id:"1-\u83b7\u53d6\u63a8\u9001\u6743\u9650",level:4},{value:"2. \u6ce8\u518c\u901a\u77e5",id:"2-\u6ce8\u518c\u901a\u77e5",level:4},{value:"3. \u79fb\u9664\u5355\u6761\u63a8\u9001",id:"3-\u79fb\u9664\u5355\u6761\u63a8\u9001",level:4},{value:"4. \u79fb\u9664\u5168\u90e8\u63a8\u9001",id:"4-\u79fb\u9664\u5168\u90e8\u63a8\u9001",level:4},{value:'11\u3001\u83b7\u53d6\u7528\u6237\u6765\u6e90 \uff08<font color="#ff0000">v2.2.6\u65b0\u589e</font>\uff09',id:"11\u83b7\u53d6\u7528\u6237\u6765\u6e90-v226\u65b0\u589e",level:3},{value:'12\u3001\u6765\u6e90\u63a7\u5236 \uff08<font color="#ff0000">v2.2.9\u65b0\u589e</font>\uff09',id:"12\u6765\u6e90\u63a7\u5236-v229\u65b0\u589e",level:3},{value:'13\u3001\u5185\u8d2d \uff08<font color="#ff0000">v3.0.4\u65b0\u589e</font>\uff09',id:"13\u5185\u8d2d-v304\u65b0\u589e",level:3}],d={toc:c};function p(t){var n=t.components,e=(0,a.Z)(t,i);return(0,r.kt)("wrapper",(0,l.Z)({},d,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5176\u4ed6\u529f\u80fd"},"\u5176\u4ed6\u529f\u80fd"),(0,r.kt)("h3",{id:"1\u6e38\u620f\u5931\u53bb\u83b7\u5f97\u7126\u70b9"},"1\u3001\u6e38\u620f\u5931\u53bb/\u83b7\u5f97\u7126\u70b9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.SetGameFocusListener((_isFocus) => {\n    if (_isFocus)\n    {\n        Debug.Log("set game focus");\n    }\n    else\n    {\n        Debug.Log("lose game focus");\n    }\n});\n')),(0,r.kt)("p",null,"\u8bbe\u7f6e\u6e38\u620f\u5931\u53bb/\u83b7\u5f97\u7126\u70b9\u56de\u8c03\uff0cSDK\u6bcf\u6b21\u89e6\u53d1\u5230\u5bf9\u5e94\u60c5\u5883\u4f1a\u7ed9\u56de\u6765\u56de\u8c03\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u4f8b\u5982\u5f53\u5e7f\u544a\u5f00\u59cb\u64ad\u653e\u7684\u65f6\u5019\uff0c\u4f60\u7684\u6e38\u620f\u5c06\u4f1a\u5931\u53bb\u7126\u70b9\u3002\u5e7f\u544a\u64ad\u653e\u7ed3\u675f\uff0c\u8fd4\u56de\u6e38\u620f\uff0c\u4f60\u7684\u6e38\u620f\u4f1a\u83b7\u5f97\u7126\u70b9\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," API: "),"    "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"void SetGameFocusListener(Action&ltbool&gt _gameFocusAction);\n")),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Name"),(0,r.kt)("td",null,"isRequired"),(0,r.kt)("td",null,"Type"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"_gameFocusAction"),(0,r.kt)("td",null,"Y"),(0,r.kt)("td",null,"Action<bool>"),(0,r.kt)("td",null,"\u6e38\u620f\u7126\u70b9\u56de\u8c03\u3002     ",(0,r.kt)("br",null),"true:\u83b7\u5f97\u7126\u70b9     ",(0,r.kt)("br",null),"false:\u5931\u53bb\u7126\u70b9"))),(0,r.kt)("h3",{id:"2\u8bc4\u4ef7"},"2\u3001\u8bc4\u4ef7"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("font",{color:"#ff0000"},"\u6ce8\uff1a\u5f53\u524d\u53ea\u5bf9iOS\u751f\u6548\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.Review();\n")),(0,r.kt)("p",null,"iOS\u8c03\u7528\u7cfb\u7edf\u8bc4\u4ef7\u5f39\u6846\u3002"),(0,r.kt)("h3",{id:"3\u66f4\u591a\u6e38\u620f"},"3\u3001\u66f4\u591a\u6e38\u620f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.OpenMoreGame();\n")),(0,r.kt)("p",null,"\u8df3\u8f6c\u53c2\u6570\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"tka_url_moregame")," \u4e2d\u5bf9\u5e94\u7684\u94fe\u63a5\uff0c\u6253\u5f00\u81ea\u5bb6Appstore\u6e38\u620f\u5217\u8868\u9875\u9762\u3002"),(0,r.kt)("h3",{id:"4\u83b7\u53d6\u5f53\u524d\u6e20\u9053\u540d\u79f0"},"4\u3001\u83b7\u53d6\u5f53\u524d\u6e20\u9053\u540d\u79f0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"AppChannel _channel = TKGSDKManager.Instance.GetChannel()\uff1b\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," API: "),"     "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"AppChannel GetChannel();\n")),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Type"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"AppChannel"),(0,r.kt)("td",null,"\u8fd4\u56de\u5f53\u524d\u6e20\u9053\u540d\u79f0\uff0cAppChannel\u7c7b\u578b ",(0,r.kt)("br",null),(0,r.kt)("b",null," AppStore_GB/AppStore_CN/GooglePlay/GW002")," \u7b49"))),(0,r.kt)("h3",{id:"5\u83b7\u53d6\u5f53\u524d\u7528\u6237\u6765\u6e90"},"5\u3001\u83b7\u53d6\u5f53\u524d\u7528\u6237\u6765\u6e90"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.SetUserSourceListener((_isOrigin, _source) =>\n{\n    if (_isOrigin)\n    {\n        Debug.Log("is origin user");\n    }\n    else\n    {\n        Debug.Log("is not origin user");\n    }\n});\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," API: "),"     "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"void SetUserSourceListener(Action<bool, string> _userSourceAction);    \n")),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a\u8be5\u63a5\u53e3\u4e3a\u5f02\u6b65\u8fd4\u56de\u3002\u5982\u4e00\u6b21\u6e38\u620f\u5185\u591a\u6b21\u8c03\u7528\u8be5\u63a5\u53e3\u60c5\u51b5\uff0c\u53ea\u9996\u6b21\u6709\u8fd4\u56de\u503c\u3002     "),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Name"),(0,r.kt)("td",null,"isRequired"),(0,r.kt)("td",null,"Type"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"_userSourceAction"),(0,r.kt)("td",null,"Y"),(0,r.kt)("td",null,"Action<bool, string>"),(0,r.kt)("td",null,"\u7528\u6237\u6765\u6e90\u56de\u8c03\u3002     ",(0,r.kt)("br",null),"bool: true \u81ea\u7136\u7528\u6237 false \u975e\u81ea\u7136\u7528\u6237 ",(0,r.kt)("br",null)))),(0,r.kt)("h3",{id:"6sdk\u901a\u7528\u56de\u8c03\u63a5\u53e3"},"6\u3001SDK\u901a\u7528\u56de\u8c03\u63a5\u53e3"),(0,r.kt)("p",null,"\u8be5\u63a5\u53e3\u901a\u8fc7CommonCallbackCode\u6765\u8fdb\u884c\u4e8b\u4ef6\u7684\u533a\u5206\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5305\u542b\u5bf9firebase\u5728\u7ebf\u53c2\u6570\u83b7\u53d6\u6210\u529f/\u5931\u8d25\u7684\u56de\u8c03\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.SetTKGCommonCallback((code, msg) => {\n    Debug.Log("common callback, code : " + code + " , msg : " + msg);\n});\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," API: "),"     "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"void SetTKGCommonCallback(Action<CommonCallbackCode, string> _commonCallback);    \n")),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Name"),(0,r.kt)("td",null,"isRequired"),(0,r.kt)("td",null,"Type"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"_commonCallback"),(0,r.kt)("td",null,"Y"),(0,r.kt)("td",null,"Action<CommonCallbackCode, string>"),(0,r.kt)("td",null,"CommonCallbackCode: \u7528\u6765\u533a\u5206\u56de\u8c03\u4e8b\u4ef6\u540d\u79f0\u3002     ",(0,r.kt)("br",null),"FirebaseOnlineParamGet_Succ: firebase\u5728\u7ebf\u53c2\u6570\u83b7\u53d6\u6210\u529f\u3002  ",(0,r.kt)("br",null),"FirebaseOnlineParamGet_Failed: firebase\u5728\u7ebf\u53c2\u6570\u83b7\u53d6\u5931\u8d25\u3002   ",(0,r.kt)("br",null),"    ",(0,r.kt)("br",null),"string: \u6d88\u606f\u643a\u5e26\u53c2\u6570\u3002"))),(0,r.kt)("h3",{id:"7\u81ea\u5b9a\u4e49\u5728\u7ebf\u53c2\u6570"},"7\u3001\u81ea\u5b9a\u4e49\u5728\u7ebf\u53c2\u6570"),(0,r.kt)("h4",{id:"\u83b7\u53d6\u5728\u7ebf\u53c2\u6570"},"\u83b7\u53d6\u5728\u7ebf\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u8fdc\u7a0b\u53c2\u6570\u83b7\u53d6\u529f\u80fd\uff0c\u6e38\u620f\u4e2d\u53ef\u52a8\u6001\u83b7\u53d6\u8fdc\u7a0b\u53c2\u6570\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u8c03\u7528\u83b7\u53d6\u65b9\u6cd5\u524d\uff0c\u52a1\u5fc5\u5728\u4ee5\u4e0b\u914d\u7f6e\u6587\u4ef6\u4e2d\u9884\u5148\u5b9a\u4e49\u597d\u53c2\u6570\u540d\u53ca\u9ed8\u8ba4\u503c\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9884\u5b9a\u4e49\u53c2\u6570\u540d\u6b65\u9aa4:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u4e00\u4e2a\u679a\u4e3e\u6210\u5458\u7528\u4e8e\u5b58\u50a8\u4f60\u7684\u8fdc\u7a0b\u53c2\u6570\u540d:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Asset/TKGSDK/Config/Scripts/TKGParams.cs"',title:'"Asset/TKGSDK/Config/Scripts/TKGParams.cs"'},"public enum TKGParamKey\n{\n    RemoveAdsShowCount,\n    LevelList,\n    HasBlock,\n    .\n    .\n}\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5c06\u6240\u6709\u679a\u4e3e\u6210\u5458\u53ca\u5176\u9ed8\u8ba4\u503c\u6dfb\u52a0\u5230OnlineParamDic:\n")),(0,r.kt)("font",{color:"#ff0000"},"\u6240\u6709\u81ea\u5b9a\u4e49\u7684\u5728\u7ebf\u53c2\u6570\u7684\u9ed8\u8ba4\u503c\u90fd\u5728\u8fd9\u91cc\u5b9a\u4e49\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Asset/TKGSDK/Config/Scripts/TKGParams.cs"',title:'"Asset/TKGSDK/Config/Scripts/TKGParams.cs"'},'  \npublic static class TKGParams\n{\n    public static readonly Dictionary<string, object> OnlineParamDic = new Dictionary<string, object>()\n    {\n        // key - default value\n        { TKGParamKey.RemoveAdsShowCount.ToString(), 4 },    // int value    // \n        { TKGParamKey.LevelList.ToString(), "1,78,72,70,64,65,4,66" }, // string value\n        { TKGParamKey.HasBlock.ToString(), 0 },     // bool value // 1:true 0:false\n    };\n}\n\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u53c2\u8003\u83b7\u53d6\u8fdc\u7a0b\u53c2\u6570\u7684\u65b9\u6cd5\u8fdb\u884c\u8c03\u7528.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"// get online param value\nint onlineIntValue = TKGSDKManager.Instance.GetConfigInt(TKGParamKey.RemoveAdsShowCount);\nstring onlineStrValue = TKGSDKManager.Instance.GetConfigStr(TKGParamKey.LevelList);\nbool onlineBoolValue = TKGSDKManager.Instance.GetConfigBool(TKGParamKey.HasBlock);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"API:")),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Name"),(0,r.kt)("td",null,"isRequired"),(0,r.kt)("td",null,"Type"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"_key"),(0,r.kt)("td",null,"Y"),(0,r.kt)("td",null,"TKGParamKey"),(0,r.kt)("td",null,"\u5728\u7ebf\u53c2\u6570key\u540d\u79f0 ",(0,r.kt)("br",null),"\u8bf7\u5728\u3010\u4ea7\u54c1\u9700\u6c42\u6587\u6863\u3011\u5bf9\u5e94\u9700\u6c42\u5185\u83b7\u53d6\u3002"))),(0,r.kt)("h3",{id:"8\u6fc0\u52b1\u89c6\u9891\u70b9\u51fb\u56de\u8c03"},"8\u3001\u6fc0\u52b1\u89c6\u9891\u70b9\u51fb\u56de\u8c03"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'private void InitSDK()\n{\n    \n    TKGSDKManager.Instance.SetRewardClickListener(ClickRewardCallback);\n\n    TKGSDKManager.Instance.InitSDK(initCallback);\n}\n\nprivate void ClickRewardCallback()\n{\n    Debug.Log("[ToukaSDKDemo] click reward callback");\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"API:"),"  ",(0,r.kt)("br",null)),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SetRewardClickListener(Action _clickCallback)\n")),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Name"),(0,r.kt)("td",null,"isRequired"),(0,r.kt)("td",null,"Type"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"_clickCallback"),(0,r.kt)("td",null,"Y"),(0,r.kt)("td",null,"Action"),(0,r.kt)("td",null," \u7528\u4e8e\u63a5\u6536\u6fc0\u52b1\u89c6\u9891\u70b9\u51fb\u56de\u8c03\u7684\u65b9\u6cd5"))),(0,r.kt)("h3",{id:"9\u9707\u52a8"},"9\u3001\u9707\u52a8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.Shake(1,0.5f);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"API:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"void Shake(int _shakeType, float _intensity = 1)<br/>\n")),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Name"),(0,r.kt)("td",null,"isRequired"),(0,r.kt)("td",null,"Type"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"_shakeType"),(0,r.kt)("td",null,"Y"),(0,r.kt)("td",null,"int"),(0,r.kt)("td",null,"\u9707\u52a8\u5f3a\u5f31\uff1a",(0,r.kt)("br",null),"0:\u8f7b\u5fae",(0,r.kt)("br",null),"1:\u4e2d\u5ea6",(0,r.kt)("br",null),"2:\u91cd\u5ea6",(0,r.kt)("br",null))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"_intensity"),(0,r.kt)("td",null,"N"),(0,r.kt)("td",null,"float"),(0,r.kt)("td",null,"\u9707\u52a8\u65f6\u95f4: 0 ~ 1"))),(0,r.kt)("h3",{id:"10\u63a8\u9001-android-\u672a\u5f00\u653e"},"10\u3001\u63a8\u9001 \uff08Android \u672a\u5f00\u653e\uff09"),(0,r.kt)("h4",{id:"1-\u83b7\u53d6\u63a8\u9001\u6743\u9650"},"1. \u83b7\u53d6\u63a8\u9001\u6743\u9650"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.RegistAPNS();\n")),(0,r.kt)("p",null,"\u8c03\u7528\u540e\u5f39\u51fa\u7cfb\u7edf\u63a8\u9001\u6388\u6743\u5f39\u6846"),(0,r.kt)("h4",{id:"2-\u6ce8\u518c\u901a\u77e5"},"2. \u6ce8\u518c\u901a\u77e5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.RegistNotification("notificationID","hello world", now.AddDays(1).ToString("yyyy-MM-dd HH:mm:ss"),1,"Title","SubTitle");\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"API:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'void RegistNotification(string notiId, string body, string fireDate, int badge = 1, string title = "", string subTitle = "")\n')),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Name"),(0,r.kt)("td",null,"isRequired"),(0,r.kt)("td",null,"Type"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"notiId"),(0,r.kt)("td",null,"Y"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6ce8\u518c\u63a8\u9001\u7684ID\uff0c\u5177\u6709\u552f\u4e00\u6027")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"body"),(0,r.kt)("td",null,"Y"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u63a8\u9001\u5185\u5bb9\uff0c\u975e\u7a7a\uff0c\u5426\u5219\u6ce8\u518c\u4e0d\u6210\u529f")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fireDate"),(0,r.kt)("td",null,"Y"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u63a8\u9001\u5185\u5bb9\u89e6\u53d1\u65f6\u95f4\uff0cformat \u4e3a \uff1ayyyy-MM-dd HH:mm:ss\uff1b\u9700\u5927\u4e8e\u5f53\u524d\u65f6\u95f4\uff0c\u5426\u5219\u6ce8\u518c\u4e0d\u6210\u529f")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"title"),(0,r.kt)("td",null,"N"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u63a8\u9001\u6807\u9898")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"subTitle"),(0,r.kt)("td",null,"N"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u63a8\u9001\u526f\u6807\u9898"))),(0,r.kt)("h4",{id:"3-\u79fb\u9664\u5355\u6761\u63a8\u9001"},"3. \u79fb\u9664\u5355\u6761\u63a8\u9001"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.RemoveNotification("notificationID");\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"API:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"void RemoveNotification(string notiId)<br/>\n")),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Name"),(0,r.kt)("td",null,"isRequired"),(0,r.kt)("td",null,"Type"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"notiId"),(0,r.kt)("td",null,"Y"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"\u6839\u636e\u63a8\u9001ID\u79fb\u9664\u8be5\u6761\u63a8\u9001"))),(0,r.kt)("h4",{id:"4-\u79fb\u9664\u5168\u90e8\u63a8\u9001"},"4. \u79fb\u9664\u5168\u90e8\u63a8\u9001"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.RemoveAllNotifications();\n")),(0,r.kt)("p",null,"\u8c03\u7528\u540e\u79fb\u9664\u5168\u90e8\u63a8\u9001"),(0,r.kt)("h3",{id:"11\u83b7\u53d6\u7528\u6237\u6765\u6e90-v226\u65b0\u589e"},"11\u3001\u83b7\u53d6\u7528\u6237\u6765\u6e90 \uff08",(0,r.kt)("font",{color:"#ff0000"},"v2.2.6\u65b0\u589e"),"\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.SetUserSourceListener((_isOrigin, _source,_campaignName) =>\n{\n   if (_isOrigin)\n   {\n       Debug.Log("is origin user");\n   }\n   else\n   {\n       Debug.Log("is not origin user");\n   }\n});\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," API: "),"     "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"void SetUserSourceListener(Action<bool, string, string> _userSourceActionWithCampaignName);\n")),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Name"),(0,r.kt)("td",null,"isRequired"),(0,r.kt)("td",null,"Type"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"_userSourceActionWithCampaignName"),(0,r.kt)("td",null,"Y"),(0,r.kt)("td",null,"Action<bool, string,string>"),(0,r.kt)("td",null,"\u7528\u6237\u6765\u6e90\u56de\u8c03\u3002     ",(0,r.kt)("br",null),"bool: true \u81ea\u7136\u7528\u6237 false \u975e\u81ea\u7136\u7528\u6237 ",(0,r.kt)("br",null),"string: \u7528\u6237\u6765\u6e90",(0,r.kt)("br",null),"string: \u8ba1\u5212\u6765\u6e90",(0,r.kt)("br",null)))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," ",(0,r.kt)("font",{color:"#ff0000"},"\u8bf4\u660e\uff1a\u8be5\u63a5\u53e3\u4e3a\u5f02\u6b65\u8fd4\u56de\u3002\u5982\u4e00\u6b21\u6e38\u620f\u5185\u591a\u6b21\u8c03\u7528\u8be5\u63a5\u53e3\u60c5\u51b5\uff0c\u53ea\u9996\u6b21\u6709\u8fd4\u56de\u503c\u3002"),(0,r.kt)("br",null)," ")),(0,r.kt)("h3",{id:"12\u6765\u6e90\u63a7\u5236-v229\u65b0\u589e"},"12\u3001\u6765\u6e90\u63a7\u5236 \uff08",(0,r.kt)("font",{color:"#ff0000"},"v2.2.9\u65b0\u589e"),"\uff09"),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"}," \u8bf4\u660e\uff1a",(0,r.kt)("br",null),"1. \u8be5\u63a5\u53e3\u4e3a\u5f02\u6b65\u8fd4\u56de\u3002List\u7684\u957f\u5ea6\u51b3\u5b9a\u56de\u8c03\u65b9\u6cd5\u6267\u884c\u7684\u6b21\u6570\uff1b\u5982list\u7684\u957f\u5ea6\u4e3a2\uff0c\u5219\u4f1a\u6267\u884c\u4e24\u6b21\u56de\u8c03\u65b9\u6cd5\u3002",(0,r.kt)("br",null)," ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'void Start() \n{\n  TKGSDKManager.Instance.SetFunctionSwitchListener(new List<FunctionType>() { FunctionType.Function_wangz, FunctionType.Function_bing }, OnFunsSwitchCallback);\n\n}\n\nprivate void OnFunsSwitchCallback(FunctionType _type, bool _result)\n{\n  Debug.Log("[ToukaSDKDemo]\uff1aFunctionType:" + _type +"result:"+ _result);\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," API: "),"     "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"void SetFunctionSwitchListener(List<FunctionType> _functionKeys, Action<FunctionType, bool> _functionSwitchCallback);\n")),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Name"),(0,r.kt)("td",null,"isRequired"),(0,r.kt)("td",null,"Type"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"_functionKeys"),(0,r.kt)("td",null,"Y"),(0,r.kt)("td",null,"List<FunctionType>",(0,r.kt)("br",null)),(0,r.kt)("td",null,"\u5404\u529f\u80fd\u540d\u79f0\u96c6\u5408    ",(0,r.kt)("br",null))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"_functionSwitchCallback"),(0,r.kt)("td",null,"Y"),(0,r.kt)("td",null,"Action<FunctionType, bool>"),(0,r.kt)("td",null,"\u56de\u8c03\u4e8b\u4ef6\uff0c\u8fd4\u56de\u6bcf\u4e2a\u529f\u80fd\u540d\u79f0\u53ca\u5bf9\u5e94\u5f00\u5173",(0,r.kt)("br",null),"FunctionType: \u529f\u80fd\u540d\u79f0 ",(0,r.kt)("br",null),"bool: \u662f\u5426\u5f00\u542f\u5f53\u524d\u529f\u80fd\uff0ctrue - \u5f00\u542f / false - \u4e0d\u5f00\u542f",(0,r.kt)("br",null)))),(0,r.kt)("h3",{id:"13\u5185\u8d2d-v304\u65b0\u589e"},"13\u3001\u5185\u8d2d \uff08",(0,r.kt)("font",{color:"#ff0000"},"v3.0.4\u65b0\u589e"),"\uff09"),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u9700\u8981\u6dfb\u52a0 USE_IAP \u5b8f\u5b9a\u4e49"),"   "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Unity In App Purchasing \u63d2\u4ef6\u7248\u672c\u9700\u9ad8\u4e8e4.4.0"),"   ")))),(0,r.kt)("p",null,"1\u3001\u6dfb\u52a0\u5b8f\u5b9a\u4e49"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"USE_IAP \n")),(0,r.kt)("p",null,"2\u3001\u5728 IAPProducts.cs \u6587\u4ef6\u4e2d\u6dfb\u52a0\u5546\u54c1ID"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'public const string NoAds = "test.tremoveads";\n\npublic static readonly Dictionary<string, ProductType> ProductDic = new Dictionary<string, ProductType>()\n{\n    { NoAds, ProductType.NonConsumable}\n        \n};\n')),(0,r.kt)("p",null,"3\u3001\u6dfb\u52a0\u5185\u8d2d\u56de\u8c03"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"\nIAPTool.Instance.OnPurchaseDone += OnPurchaseResult;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"private void OnPurchaseResult(string pID, bool pResult)\n{\n    if (pID.Equals(IAPProducts.NoAds) && pResult)\n    {\n        // \u5185\u8d2d\u6210\u529f\u540e\uff0c\u53bb\u9664\u5e7f\u544a\n        TKGSDKManager.Instance.IsRemoveAds = true;\n    }\n}\n")),(0,r.kt)("p",null,"4\u3001\u5185\u8d2d\u63a5\u53e3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"IAPTool.Instance.BuyProductByID(IAPProducts.NoAds);\n")))}p.isMDXComponent=!0}}]);