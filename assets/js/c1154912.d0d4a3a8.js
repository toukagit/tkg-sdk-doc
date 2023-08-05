"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3071],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(r),g=i,m=p["".concat(l,".").concat(g)]||p[g]||u[g]||o;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var d=2;d<o;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},3293:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(7462),i=(r(7294),r(3905));const o={title:"FAQ2",sidebar_label:"FAQ2",description:"",sidebar_position:97},a=void 0,s={unversionedId:"api",id:"version-3.0.x/api",title:"FAQ2",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.0.x/api.md",sourceDirName:".",slug:"/api",permalink:"/tkg-sdk-doc/3.0.x/api",tags:[],version:"3.0.x",sidebarPosition:97,frontMatter:{title:"FAQ2",sidebar_label:"FAQ2",description:"",sidebar_position:97}},l={},d=[{value:"iOS",id:"ios",level:2},{value:"Legacy Build System Error on Xcode",id:"legacy-build-system-error-on-xcode",level:3},{value:"Library not loaded:  ....KSAdSDK....  Error on Xcode",id:"library-not-loaded--ksadsdk--error-on-xcode",level:3},{value:"Required parameter is empty",id:"required-parameter-is-empty",level:3},{value:"Android",id:"android",level:2},{value:"Target API Level Error",id:"target-api-level-error",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ios"},"iOS"),(0,i.kt)("h3",{id:"legacy-build-system-error-on-xcode"},"Legacy Build System Error on Xcode"),(0,i.kt)("p",null,'When exporting the project to Xcode, if you see a building error saying, "The Legacy Build System will be removed in a future release. You can configure the selected build system and this deprecation message in File > Project Settings" please do the following to resolve this issue.   '),(0,i.kt)("p",null,"Step1. Navigate to File, then select Project Settings  "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"iOS Symbols",src:r(8734).Z,width:"200",height:"491"})," "),(0,i.kt)("p",null,"Step2. Under Shared Project Settings, change the Build System settings to New Build System  "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"iOS Symbols",src:r(5455).Z,width:"1072",height:"944"})),(0,i.kt)("h3",{id:"library-not-loaded--ksadsdk--error-on-xcode"},"Library not loaded:  ....KSAdSDK....  Error on Xcode"),(0,i.kt)("p",null,"If you see a building error about KSAdSDK similar to the screenshot below. Please do the [",(0,i.kt)("a",{parentName:"p",href:"/tkg-sdk-doc/3.0.x/tkg-integration/sdk-projectsettings/sdk-projectsettings-ios"},"Add dynamic library for ads sdk")," steps to resolve this issue.\n",(0,i.kt)("img",{alt:"ks_01_error",src:r(5875).Z,width:"1280",height:"471"})),(0,i.kt)("h3",{id:"required-parameter-is-empty"},"Required parameter is empty"),(0,i.kt)("p",null,"InitSDK will check the necessary parameters. If the following error is reported, please ",(0,i.kt)("a",{parentName:"p",href:"/tkg-sdk-doc/3.0.x/tkg-integration/sdk-basic/sdk-config"},"check the parameter configuration"),".  "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"check_config",src:r(5333).Z,width:"600",height:"132"})),(0,i.kt)("h2",{id:"android"},"Android"),(0,i.kt)("h3",{id:"target-api-level-error"},"Target API Level Error"),(0,i.kt)("p",null,"Please Build Package -> For Android ->",(0,i.kt)("a",{parentName:"p",href:"/tkg-sdk-doc/3.0.x/tkg-integration/sdk-projectsettings/sdk-projectsettings-android"},"Minimun API Level : API Level 22")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Target API Level Error",src:r(755).Z,width:"2648",height:"538"})))}u.isMDXComponent=!0},5333:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/checkConfig-a987e75c919050260799b183c7711cc2.jpeg"},755:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/androidtargetapi-b6e3e00af04c9f7886f2c017a5a341bf.jpg"},8734:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/legal01-d1dd5d59ea34cbd606b38daf45055566.png"},5455:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/legal02-302b09cdf646929738816eee4076d803.png"},5875:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ks_01_error-73b0f3df916363731951cddd9d6dbaad.png"}}]);