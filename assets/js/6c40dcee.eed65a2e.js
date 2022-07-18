"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8829],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),u=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),g=r,k=d["".concat(s,".").concat(g)]||d[g]||v[g]||a;return n?l.createElement(k,i(i({ref:t},c),{},{components:n})):l.createElement(k,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},463:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return v}});var l=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],o={sidebar_position:6},s="Event Tracking",u={unversionedId:"tkg-integration/sdk-basic/sdk-func-event",id:"version-2.2.x/tkg-integration/sdk-basic/sdk-func-event",title:"Event Tracking",description:"Level Progression Events",source:"@site/versioned_docs/version-2.2.x/tkg-integration/sdk-basic/sdk-func-event.md",sourceDirName:"tkg-integration/sdk-basic",slug:"/tkg-integration/sdk-basic/sdk-func-event",permalink:"/tkg-sdk-doc/tkg-integration/sdk-basic/sdk-func-event",tags:[],version:"2.2.x",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Advertising integration",permalink:"/tkg-sdk-doc/tkg-integration/sdk-basic/sdk-func-ads"},next:{title:"Advanced Integration",permalink:"/tkg-sdk-doc/tkg-integration/sdk-other-func"}},c={},v=[{value:"Level Progression Events",id:"level-progression-events",level:2},{value:"LevelStart",id:"levelstart",level:3},{value:"LevelEnd",id:"levelend",level:3},{value:"Custom Event",id:"custom-event",level:2}],d={toc:v};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"event-tracking"},"Event Tracking"),(0,a.kt)("h2",{id:"level-progression-events"},"Level Progression Events"),(0,a.kt)("p",null,"Level progression events are used to track and analyze the user's level behavior in the game, Including level start, level end, etc.     "),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("b",null,(0,a.kt)("font",{color:"ff0000"},"Attention: if you have \u2018Levels\u2019 / 'Quest' / 'Task' or 'Mission' in your game, you must integrate \"Progression Events\" !")),(0,a.kt)("br",null),(0,a.kt)("p",{parentName:"div"},"Level Start Call: ",(0,a.kt)("strong",{parentName:"p"}," LevelStart "),(0,a.kt)("br",{parentName:"p"}),"\n","Level End Call: ",(0,a.kt)("strong",{parentName:"p"}," LevelEnd ")),(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"Level has ended with succ : ",(0,a.kt)("strong",{parentName:"li"}," StageSucc ")),(0,a.kt)("li",{parentName:"ul"},"Level has ended with failed: ",(0,a.kt)("strong",{parentName:"li"}," StageFail ")),(0,a.kt)("li",{parentName:"ul"},"Before level end, restart level. eg. click Retry button in the current level: ",(0,a.kt)("strong",{parentName:"li"}," StageRetry ")),(0,a.kt)("li",{parentName:"ul"},"Before level end, back to home page or level list. For example click back or quit buttons in current level: ",(0,a.kt)("strong",{parentName:"li"}," StageBack "))))),(0,a.kt)("h3",{id:"levelstart"},"LevelStart"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.LevelStart(level);\n\nTKGSDKManager.Instance.LevelStart(1);\nTKGSDKManager.Instance.LevelStart("S_1");\n')),(0,a.kt)("p",null,"Call ",(0,a.kt)("inlineCode",{parentName:"p"},"LevelStart")," method when starting each level."),(0,a.kt)("p",null,"API: ",(0,a.kt)("br",null),"\nvoid LevelStart(int level);",(0,a.kt)("br",{parentName:"p"}),"\n","void LevelStart(string level);"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Name"),(0,a.kt)("td",null,"isRequired"),(0,a.kt)("td",null,"Type"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"level"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"int/string"),(0,a.kt)("td",null,"level: current level id.         ",(0,a.kt)("br",null),"You can get the specific values  \u300cLevel Progress Event Access\u300d on your game product requirement."))),(0,a.kt)("h3",{id:"levelend"},"LevelEnd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.LevelEnd(level, StageResult.StageSucc); \n\nTKGSDKManager.Instance.LevelEnd(1, StageResult.StageSucc);\nTKGSDKManager.Instance.LevelEnd("S_1", StageResult.StageFail);\nTKGSDKManager.Instance.LevelEnd(3, StageResult.StageRetry);\nTKGSDKManager.Instance.LevelEnd("S_2", StageResult.StageBack);\n')),(0,a.kt)("p",null,"Call ",(0,a.kt)("inlineCode",{parentName:"p"},"LevelEnd")," method when finish each level.   "),(0,a.kt)("p",null,"API:\nbool LevelEnd(int level, StageResult stageResult);\nbool LevelEnd(string level, StageResult stageResult);"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Name"),(0,a.kt)("td",null,"isRequired"),(0,a.kt)("td",null,"Type"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"level"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"int/string"),(0,a.kt)("td",null,"level: current level id.         ",(0,a.kt)("br",null),"You can get the specific values  \u300cLevel Progress Event Access\u300d on your game product requirement.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"stageResult"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"StageResult"),(0,a.kt)("td",null,(0,a.kt)("b",null,"StageSucc:")," Level has ended with succ   ",(0,a.kt)("br",null),(0,a.kt)("b",null,"StageFail:")," Level has ended with failed  ",(0,a.kt)("br",null),(0,a.kt)("b",null,"StageRetry:")," Before level end, restart level. eg. click Retry button in the current level ",(0,a.kt)("br",null),(0,a.kt)("b",null,"StageBack:")," Before level end, back to home page or level list. For example click back or quit buttons in current level"))),(0,a.kt)("h2",{id:"custom-event"},"Custom Event"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.LogEvent("click_Skin");\nTKGSDKManager.Instance.LogEvent("get_gift", "stage_level", "1");\nTKGSDKManager.Instance.LogEvent("stage_end", "stage_level", "1", "stage_status", "success");\n')),(0,a.kt)("p",null,"API:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"void LogEvent(string _eventSort)"),(0,a.kt)("li",{parentName:"ul"},"void LogEvent(string _eventSort, string _key, string _value)"),(0,a.kt)("li",{parentName:"ul"},"void  LogEvent(string _eventSort, string _key01, string _value01, string _key02, string _value02)"),(0,a.kt)("li",{parentName:"ul"},"void  LogEvent(string _eventSort, Dictionary<string, string> _eventDic = null)")))}g.isMDXComponent=!0}}]);