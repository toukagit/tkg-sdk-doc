"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4102],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(a),k=i,m=c["".concat(s,".").concat(k)]||c[k]||p[k]||r;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8215:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294);function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",hidden:a,className:i},t)}},9877:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),i=a(7294),r=a(2389),o=a(1548),l=a(6010);const s={tabItem:"tabItem_LplD"};function u(e){const{lazy:t,block:a,defaultValue:r,values:u,groupId:d,className:c}=e,p=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=u??p.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),m=(0,o.lx)(k,((e,t)=>e.value===t.value));if(m.length>0)throw new Error(`Docusaurus error: Duplicate values "${m.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===r?r:r??p.find((e=>e.props.default))?.props.value??p[0]?.props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:v}=(0,o.UB)(),[y,h]=(0,i.useState)(g),f=[],{blockElementScrollPositionUntilNextRender:S}=(0,o.o5)();if(null!=d){const e=b[d];null!=e&&e!==y&&k.some((t=>t.value===e))&&h(e)}const O=e=>{const t=e.currentTarget,a=f.indexOf(t),n=k[a].value;n!==y&&(S(t),h(n),null!=d&&v(d,n))},_=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=f.indexOf(e.currentTarget)+1;t=f[a]||f[0];break}case"ArrowLeft":{const a=f.indexOf(e.currentTarget)-1;t=f[a]||f[f.length-1];break}}t?.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},c)},k.map((e=>{let{value:t,label:a,attributes:r}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>f.push(e),onKeyDown:_,onFocus:O,onClick:O},r,{className:(0,l.Z)("tabs__item",s.tabItem,r?.className,{"tabs__item--active":y===t})}),a??t)}))),t?(0,i.cloneElement)(p.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},p.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function d(e){const t=(0,r.Z)();return i.createElement(u,(0,n.Z)({key:String(t)},e))}},688:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=a(7462),i=(a(7294),a(3905)),r=a(9877),o=a(8215);const l={sidebar_position:1},s="SDK\u5bfc\u5165",u={unversionedId:"tkg-integration/sdk-basic/sdk-import",id:"version-2.2.x/tkg-integration/sdk-basic/sdk-import",title:"SDK\u5bfc\u5165",description:"\u8bf7\u5c06\u4e0b\u8f7d\u540e\u7684unitypackage\u5305\u5bfc\u5165\u5de5\u7a0b:",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.2.x/tkg-integration/sdk-basic/sdk-import.md",sourceDirName:"tkg-integration/sdk-basic",slug:"/tkg-integration/sdk-basic/sdk-import",permalink:"/tkg-sdk-doc/zh/2.2.x/tkg-integration/sdk-basic/sdk-import",tags:[],version:"2.2.x",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u51c6\u5907\u5de5\u4f5c",permalink:"/tkg-sdk-doc/zh/2.2.x/tkg-integration/sdk-prepare"},next:{title:"SDK\u53c2\u6570\u914d\u7f6e",permalink:"/tkg-sdk-doc/zh/2.2.x/tkg-integration/sdk-basic/sdk-config"}},d={},c=[{value:"iOS \u5e73\u53f0 &amp; Android \u5e73\u53f0",id:"ios-\u5e73\u53f0--android-\u5e73\u53f0",level:2},{value:"\u53ea\u63a5\u5165 iOS \u5e73\u53f0",id:"\u53ea\u63a5\u5165-ios-\u5e73\u53f0",level:2},{value:"\u53ea\u63a5\u5165 Android \u5e73\u53f0",id:"\u53ea\u63a5\u5165-android-\u5e73\u53f0",level:2},{value:"iOS \u5e73\u53f0 &amp; Android \u5e73\u53f0",id:"ios-\u5e73\u53f0--android-\u5e73\u53f0-1",level:2},{value:"\u53ea\u63a5\u5165 iOS \u5e73\u53f0",id:"\u53ea\u63a5\u5165-ios-\u5e73\u53f0-1",level:2},{value:"\u53ea\u63a5\u5165 Android \u5e73\u53f0",id:"\u53ea\u63a5\u5165-android-\u5e73\u53f0-1",level:2},{value:"\u5404unitypackage\u5185\u5bb9",id:"\u5404unitypackage\u5185\u5bb9",level:2},{value:"CommonSDK.unitypackage",id:"commonsdkunitypackage",level:3},{value:"ToukaSDK_Android.unitypackage",id:"toukasdk_androidunitypackage",level:3},{value:"ToukaSDK_iOSLibs_CN.unitypackage",id:"toukasdk_ioslibs_cnunitypackage",level:3},{value:"ToukaSDK_iOSLibs_GB.unitypackage",id:"toukasdk_ioslibs_gbunitypackage",level:3}],p={toc:c},k="wrapper";function m(e){let{components:t,...l}=e;return(0,i.kt)(k,(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sdk\u5bfc\u5165"},"SDK\u5bfc\u5165"),(0,i.kt)("p",null,"\u8bf7\u5c06\u4e0b\u8f7d\u540e\u7684unitypackage\u5305\u5bfc\u5165\u5de5\u7a0b:    "),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"SDK Demo: ",(0,i.kt)("inlineCode",{parentName:"li"},"Assets/TKGSDK/Demo/ToukaSDKDemo")),(0,i.kt)("li",{parentName:"ul"},"Android \u5e73\u53f0\uff1a\u56fd\u5185\u548c\u6d77\u5916\u7248\u672c\u5e93\u76f8\u540c"),(0,i.kt)("li",{parentName:"ul"},"iOS \u5e73\u53f0\uff1a\u533a\u5206\u56fd\u5185\u6d77\u5916\uff0c\u4e14\u56fd\u5185\u6d77\u5916\u7248\u672c\u7684\u5e93\u4e0d\u80fd\u5171\u5b58")))),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"}," ",(0,i.kt)("strong",{parentName:"p"}," iOS \u5e73\u53f0:",(0,i.kt)("br",null)," ToukaSDK_iOSLibs_CN.unitypackage \u548c  ToukaSDK_iOSLibs_GB.unitypackage \u4e0d\u80fd\u540c\u65f6\u5bfc\u5165\u3002 ",(0,i.kt)("br",null),"\u5982\u679c\u9700\u8981\u5bfc\u5165\u53e6\u4e00\u4e2aunitypackage\u65f6\uff0c\u8bf7\u5220\u9664\u5df2\u5bfc\u5165\u7684unitypackage\u3002 ")))),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"\u56fd\u5185\u7248\u672c",label:"\u56fd\u5185\u7248\u672c",default:!0,mdxType:"TabItem"},(0,i.kt)("h2",{id:"ios-\u5e73\u53f0--android-\u5e73\u53f0"},"iOS \u5e73\u53f0 & Android \u5e73\u53f0"),(0,i.kt)("p",null,"CommonSDK.unitypackage ",(0,i.kt)("br",null),"\nToukaSDK_Android.unitypackage ",(0,i.kt)("br",null),"\nToukaSDK_iOSLibs_CN.unitypackage ",(0,i.kt)("br",null)),(0,i.kt)("h2",{id:"\u53ea\u63a5\u5165-ios-\u5e73\u53f0"},"\u53ea\u63a5\u5165 iOS \u5e73\u53f0"),(0,i.kt)("p",null,"CommonSDK.unitypackage",(0,i.kt)("br",null),"\nToukaSDK_iOSLibs_CN.unitypackage",(0,i.kt)("br",null)),(0,i.kt)("h2",{id:"\u53ea\u63a5\u5165-android-\u5e73\u53f0"},"\u53ea\u63a5\u5165 Android \u5e73\u53f0"),(0,i.kt)("p",null,"CommonSDK.unitypackage",(0,i.kt)("br",null),"\nToukaSDK_Android.unitypackage",(0,i.kt)("br",null))),(0,i.kt)(o.Z,{value:"\u6d77\u5916\u7248\u672c",label:"\u6d77\u5916\u7248\u672c",mdxType:"TabItem"},(0,i.kt)("h2",{id:"ios-\u5e73\u53f0--android-\u5e73\u53f0-1"},"iOS \u5e73\u53f0 & Android \u5e73\u53f0"),(0,i.kt)("p",null,"CommonSDK.unitypackage",(0,i.kt)("br",null),"\nToukaSDK_Android.unitypackage",(0,i.kt)("br",null),"\nToukaSDK_iOSLibs_GB.unitypackage",(0,i.kt)("br",null)),(0,i.kt)("h2",{id:"\u53ea\u63a5\u5165-ios-\u5e73\u53f0-1"},"\u53ea\u63a5\u5165 iOS \u5e73\u53f0"),(0,i.kt)("p",null,"CommonSDK.unitypackage",(0,i.kt)("br",null),"\nToukaSDK_iOSLibs_GB.unitypackage",(0,i.kt)("br",null)),(0,i.kt)("h2",{id:"\u53ea\u63a5\u5165-android-\u5e73\u53f0-1"},"\u53ea\u63a5\u5165 Android \u5e73\u53f0"),(0,i.kt)("p",null,"CommonSDK.unitypackage",(0,i.kt)("br",null),"\nToukaSDK_Android.unitypackage",(0,i.kt)("br",null)))),(0,i.kt)("h2",{id:"\u5404unitypackage\u5185\u5bb9"},"\u5404unitypackage\u5185\u5bb9"),(0,i.kt)("h3",{id:"commonsdkunitypackage"},"CommonSDK.unitypackage"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"iOS Symbols",src:a(8661).Z,width:"357",height:"592"})),(0,i.kt)("h3",{id:"toukasdk_androidunitypackage"},"ToukaSDK_Android.unitypackage"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"iOS Symbols",src:a(5972).Z,width:"346",height:"577"})),(0,i.kt)("h3",{id:"toukasdk_ioslibs_cnunitypackage"},"ToukaSDK_iOSLibs_CN.unitypackage"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"iOS Symbols",src:a(4295).Z,width:"357",height:"581"})),(0,i.kt)("h3",{id:"toukasdk_ioslibs_gbunitypackage"},"ToukaSDK_iOSLibs_GB.unitypackage"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"iOS Symbols",src:a(3435).Z,width:"357",height:"581"})))}m.isMDXComponent=!0},5972:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/config_android-4f3ba8a065aa861d7d3ee72fa3079203.png"},8661:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/config_commonsdk-96192f006048c581479893e5f4eb571d.png"},4295:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/config_ios_cn-acd9ad3b93fe44745ebb32f87a9c653d.png"},3435:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/config_ios_gb-29e5cdad287757ccf21574be1b9802b2.png"}}]);