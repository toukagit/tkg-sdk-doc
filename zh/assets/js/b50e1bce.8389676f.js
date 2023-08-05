"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6814],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),k=i,m=d["".concat(l,".").concat(k)]||d[k]||p[k]||r;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8215:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294);function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",hidden:a,className:i},t)}},9877:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(7462),i=a(7294),r=a(2389),o=a(1548),s=a(6010);const l={tabItem:"tabItem_LplD"};function c(e){const{lazy:t,block:a,defaultValue:r,values:c,groupId:u,className:d}=e,p=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=c??p.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),m=(0,o.lx)(k,((e,t)=>e.value===t.value));if(m.length>0)throw new Error(`Docusaurus error: Duplicate values "${m.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===r?r:r??p.find((e=>e.props.default))?.props.value??p[0]?.props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:v}=(0,o.UB)(),[h,f]=(0,i.useState)(b),y=[],{blockElementScrollPositionUntilNextRender:_}=(0,o.o5)();if(null!=u){const e=g[u];null!=e&&e!==h&&k.some((t=>t.value===e))&&f(e)}const w=e=>{const t=e.currentTarget,a=y.indexOf(t),n=k[a].value;n!==h&&(_(t),f(n),null!=u&&v(u,n))},T=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=y.indexOf(e.currentTarget)+1;t=y[a]||y[0];break}case"ArrowLeft":{const a=y.indexOf(e.currentTarget)-1;t=y[a]||y[y.length-1];break}}t?.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},d)},k.map((e=>{let{value:t,label:a,attributes:r}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,key:t,ref:e=>y.push(e),onKeyDown:T,onFocus:w,onClick:w},r,{className:(0,s.Z)("tabs__item",l.tabItem,r?.className,{"tabs__item--active":h===t})}),a??t)}))),t?(0,i.cloneElement)(p.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},p.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}function u(e){const t=(0,r.Z)();return i.createElement(c,(0,n.Z)({key:String(t)},e))}},138:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=a(7462),i=(a(7294),a(3905)),r=a(9877),o=a(8215);const s={sidebar_position:1},l="SDK\u5bfc\u5165",c={unversionedId:"tkg-integration/sdk-basic/sdk-import",id:"version-2.1.0/tkg-integration/sdk-basic/sdk-import",title:"SDK\u5bfc\u5165",description:"\u8bf7\u5c06\u4e0b\u8f7d\u540e\u7684unitypackage\u5305\u5bfc\u5165\u5de5\u7a0b:",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1.0/tkg-integration/sdk-basic/sdk-import.md",sourceDirName:"tkg-integration/sdk-basic",slug:"/tkg-integration/sdk-basic/sdk-import",permalink:"/tkg-sdk-doc/zh/2.1.0/tkg-integration/sdk-basic/sdk-import",tags:[],version:"2.1.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u51c6\u5907\u5de5\u4f5c",permalink:"/tkg-sdk-doc/zh/2.1.0/tkg-integration/sdk-prepare"},next:{title:"SDK\u53c2\u6570\u914d\u7f6e",permalink:"/tkg-sdk-doc/zh/2.1.0/tkg-integration/sdk-basic/sdk-config"}},u={},d=[{value:"\u56fd\u5185 iOS &amp; Android",id:"\u56fd\u5185-ios--android",level:2},{value:"ToukaSDK.unitypackage\uff08\u5171\u7528\uff09",id:"toukasdkunitypackage\u5171\u7528",level:3},{value:"Touka_AndroidLibs_CN.unitypackage",id:"touka_androidlibs_cnunitypackage",level:3},{value:"Touka_iOSLibs_CN.unitypackage",id:"touka_ioslibs_cnunitypackage",level:3},{value:"\u6d77\u5916 iOS &amp; Android",id:"\u6d77\u5916-ios--android",level:2},{value:"ToukaSDK.unitypackage\uff08\u5171\u7528\uff09",id:"toukasdkunitypackage\u5171\u7528-1",level:3},{value:"Touka_AndroidLibs_GB.unitypackage",id:"touka_androidlibs_gbunitypackage",level:3},{value:"Touka_iOSLibs_GB.unitypackage",id:"touka_ioslibs_gbunitypackage",level:3}],p={toc:d},k="wrapper";function m(e){let{components:t,...s}=e;return(0,i.kt)(k,(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sdk\u5bfc\u5165"},"SDK\u5bfc\u5165"),(0,i.kt)("p",null,"\u8bf7\u5c06\u4e0b\u8f7d\u540e\u7684unitypackage\u5305\u5bfc\u5165\u5de5\u7a0b:    "),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"SDK Demo: ",(0,i.kt)("inlineCode",{parentName:"li"},"Assets/TKGSDK/Demo/ToukaSDKDemo")),(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u540c\u4e00\u4e2a\u5e73\u53f0\uff0c\u56fd\u5185\u7248\u672cSDK\u548c\u6d77\u5916\u7248\u672cSDK\u76f8\u5173\u5e93\u4e0d\u53ef\u540c\u5171\u5b58\u3002")))),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"\u56fd\u5185\u7248\u672c",label:"\u56fd\u5185\u7248\u672c",default:!0,mdxType:"TabItem"},(0,i.kt)("h2",{id:"\u56fd\u5185-ios--android"},"\u56fd\u5185 iOS & Android"),(0,i.kt)("h3",{id:"toukasdkunitypackage\u5171\u7528"},"ToukaSDK.unitypackage\uff08\u5171\u7528\uff09"),(0,i.kt)("p",null,"\u5bfc\u5165\u540e\u5982\u56fe\u6240\u793a\uff1a",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"import01",src:a(6980).Z,width:"400",height:"510"})),(0,i.kt)("h3",{id:"touka_androidlibs_cnunitypackage"},"Touka_AndroidLibs_CN.unitypackage"),(0,i.kt)("p",null,"\u5bfc\u5165\u540e\u5982\u56fe\u6240\u793a\uff1a",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"import02",src:a(1647).Z,width:"400",height:"508"})),(0,i.kt)("h3",{id:"touka_ioslibs_cnunitypackage"},"Touka_iOSLibs_CN.unitypackage"),(0,i.kt)("p",null,"\u5bfc\u5165\u540e\u5982\u56fe\u6240\u793a\uff1a",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"import03",src:a(1338).Z,width:"400",height:"414"}))),(0,i.kt)(o.Z,{value:"\u6d77\u5916\u7248\u672c",label:"\u6d77\u5916\u7248\u672c\uff08\u5373\u5c06\u5f00\u653e\uff09",mdxType:"TabItem"},(0,i.kt)("h2",{id:"\u6d77\u5916-ios--android"},"\u6d77\u5916 iOS & Android"),(0,i.kt)("h3",{id:"toukasdkunitypackage\u5171\u7528-1"},"ToukaSDK.unitypackage\uff08\u5171\u7528\uff09"),(0,i.kt)("p",null,"\u5bfc\u5165\u540e\u5982\u56fe\u6240\u793a\uff1a",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"import01",src:a(5464).Z,width:"300",height:"477"})),(0,i.kt)("h3",{id:"touka_androidlibs_gbunitypackage"},"Touka_AndroidLibs_GB.unitypackage"),(0,i.kt)("p",null,"\u5bfc\u5165\u540e\u5982\u56fe\u6240\u793a\uff1a",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"import04",src:a(1802).Z,width:"300",height:"461"})),(0,i.kt)("h3",{id:"touka_ioslibs_gbunitypackage"},"Touka_iOSLibs_GB.unitypackage"),(0,i.kt)("p",null,"\u5bfc\u5165\u540e\u5982\u56fe\u6240\u793a\uff1a",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"import04",src:a(6627).Z,width:"300",height:"461"})))))}m.isMDXComponent=!0},5464:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/import01-e699c91f116615b96f2a31d00f47853a.jpg"},1802:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/import03-5c5ca6a4dfeb9ee09d72060a8031b7d8.jpeg"},6627:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/import04-cb1b869a01d10b713bc2b29b5b434683.jpeg"},6980:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/import_2.1.0_01-417efc0b162094b9dc0f397ead7954cb.jpg"},1647:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/import_2.1.0_02-bbe9364454c2843ea3dc1837d3ed08e8.jpg"},1338:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/import_2.1.0_03-ce7b40cbaf46de291a5524dbe3c26e2e.jpg"}}]);