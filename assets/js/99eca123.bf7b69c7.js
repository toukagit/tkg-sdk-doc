"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3694],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),k=i,g=u["".concat(p,".").concat(k)]||u[k]||d[k]||r;return n?a.createElement(g,o(o({ref:t},l),{},{components:n})):a.createElement(g,o({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=k;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2851:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1},o="Installing the SDK",s={unversionedId:"tkg-integration/sdk-basic/sdk-import",id:"version-2.0.1/tkg-integration/sdk-basic/sdk-import",title:"Installing the SDK",description:"Please import the unitypackage to the project",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.0.1/tkg-integration/sdk-basic/sdk-import.md",sourceDirName:"tkg-integration/sdk-basic",slug:"/tkg-integration/sdk-basic/sdk-import",permalink:"/tkg-sdk-doc/2.0.1/tkg-integration/sdk-basic/sdk-import",tags:[],version:"2.0.1",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Preparation",permalink:"/tkg-sdk-doc/2.0.1/tkg-integration/sdk-prepare"},next:{title:"Configuration SDK (Only for iOS)",permalink:"/tkg-sdk-doc/2.0.1/tkg-integration/sdk-basic/sdk-config"}},p={},c=[{value:"ToukaSDK.unitypackage",id:"toukasdkunitypackage",level:3},{value:"Touka_AndroidPlugins.unitypackage",id:"touka_androidpluginsunitypackage",level:3},{value:"Touka_iOSAnalythics.unitypackage",id:"touka_iosanalythicsunitypackage",level:3},{value:"Touka_iOSAds.unitypackage",id:"touka_iosadsunitypackage",level:3}],l={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installing-the-sdk"},"Installing the SDK"),(0,i.kt)("p",null,"Please import the unitypackage to the project"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"SDK Demo: ",(0,i.kt)("inlineCode",{parentName:"li"},"Assets/TKGSDK/Demo/ToukaSDKDemo"))))),(0,i.kt)("h3",{id:"toukasdkunitypackage"},"ToukaSDK.unitypackage"),(0,i.kt)("p",null,"example:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"import01",src:n(5464).Z,width:"300",height:"477"})),(0,i.kt)("h3",{id:"touka_androidpluginsunitypackage"},"Touka_AndroidPlugins.unitypackage"),(0,i.kt)("p",null,"example:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"import02",src:n(1371).Z,width:"300",height:"420"})),(0,i.kt)("h3",{id:"touka_iosanalythicsunitypackage"},"Touka_iOSAnalythics.unitypackage"),(0,i.kt)("p",null,"example:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"import03",src:n(1802).Z,width:"300",height:"461"})),(0,i.kt)("h3",{id:"touka_iosadsunitypackage"},"Touka_iOSAds.unitypackage"),(0,i.kt)("p",null,"example:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"import04",src:n(6627).Z,width:"300",height:"461"})))}d.isMDXComponent=!0},5464:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/import01-e699c91f116615b96f2a31d00f47853a.jpg"},1371:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/import02-8ac17383f8591ee380269e4c4f39680b.jpg"},1802:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/import03-5c5ca6a4dfeb9ee09d72060a8031b7d8.jpeg"},6627:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/import04-cb1b869a01d10b713bc2b29b5b434683.jpeg"}}]);