"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5881],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),g=a,k=d["".concat(c,".").concat(g)]||d[g]||u[g]||i;return r?n.createElement(k,o(o({ref:t},l),{},{components:r})):n.createElement(k,o({ref:t},l))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5285:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:4},o="iOS \u63a5\u5165\u9a8c\u8bc1",s={unversionedId:"tkg-integration/sdk-test/sdk-test-iOS",id:"version-2.1.0/tkg-integration/sdk-test/sdk-test-iOS",title:"iOS \u63a5\u5165\u9a8c\u8bc1",description:"\u56fd\u5185iOS\u5305\u5408\u89c4\u76f8\u5173",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1.0/tkg-integration/sdk-test/sdk-test-iOS.md",sourceDirName:"tkg-integration/sdk-test",slug:"/tkg-integration/sdk-test/sdk-test-iOS",permalink:"/tkg-sdk-doc/zh/2.1.0/tkg-integration/sdk-test/sdk-test-iOS",tags:[],version:"2.1.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Android \u63a5\u5165\u9a8c\u8bc1",permalink:"/tkg-sdk-doc/zh/2.1.0/tkg-integration/sdk-test/sdk-test-android"},next:{title:"\u63d0\u4ea4\u53d1\u5e03",permalink:"/tkg-sdk-doc/zh/2.1.0/tkg-integration/sdk-package"}},c={},p=[{value:"\u56fd\u5185iOS\u5305\u5408\u89c4\u76f8\u5173",id:"\u56fd\u5185ios\u5305\u5408\u89c4\u76f8\u5173",level:2},{value:"AppTrackingTransparency \u5f39\u6846",id:"apptrackingtransparency-\u5f39\u6846",level:3},{value:"\u7528\u6237\u534f\u8bae\u5f39\u6846",id:"\u7528\u6237\u534f\u8bae\u5f39\u6846",level:3},{value:"\u5b9e\u540d\u8ba4\u8bc1\u5f39\u6846",id:"\u5b9e\u540d\u8ba4\u8bc1\u5f39\u6846",level:3}],l={toc:p},d="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ios-\u63a5\u5165\u9a8c\u8bc1"},"iOS \u63a5\u5165\u9a8c\u8bc1"),(0,a.kt)("h2",{id:"\u56fd\u5185ios\u5305\u5408\u89c4\u76f8\u5173"},"\u56fd\u5185iOS\u5305\u5408\u89c4\u76f8\u5173"),(0,a.kt)("h3",{id:"apptrackingtransparency-\u5f39\u6846"},"AppTrackingTransparency \u5f39\u6846"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bf7\u786e\u4fdd\u6709 AppTrackingTransparency \u5f39\u6846\u5f39\u51fa"),"\uff0cSDK\u5185\u5df2\u5904\u7406\uff0c\u65e0\u9700\u8fdb\u884c\u7279\u6b8a\u64cd\u4f5c\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"att",src:r(7216).Z,width:"300",height:"533"})),(0,a.kt)("h3",{id:"\u7528\u6237\u534f\u8bae\u5f39\u6846"},"\u7528\u6237\u534f\u8bae\u5f39\u6846"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bf7\u786e\u4fdd\u6709\u7528\u6237\u534f\u8bae\u5f39\u6846\u5f39\u51fa"),"\uff0c\u8c03\u7528SDK\u521d\u59cb\u5316\u5373\u53ef\u5f39\u51fa\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"useragreement",src:r(4286).Z,width:"300",height:"533"})),(0,a.kt)("h3",{id:"\u5b9e\u540d\u8ba4\u8bc1\u5f39\u6846"},"\u5b9e\u540d\u8ba4\u8bc1\u5f39\u6846"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5b9e\u540d\u8ba4\u8bc1\u5f39\u6846\u5f39\u51fa"),"\uff0cSDK\u5185\u5df2\u5904\u7406\uff0c\u65e0\u7279\u6b8a\u9700\u6c42\u65e0\u9700\u8fdb\u884c\u989d\u5916\u64cd\u4f5c\u3002   ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{alt:"realname",src:r(7242).Z,width:"300",height:"533"})))}u.isMDXComponent=!0},7216:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/att-7c17486862bc2dcbf89b3fb2c980e2b6.png"},7242:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/realname-5a6dd6d3cef52c92fa1c53dbcdc8e2b5.jpg"},4286:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/useragreement-c589beb00c33fa9acc7d8f1c54f3bdc7.jpg"}}]);