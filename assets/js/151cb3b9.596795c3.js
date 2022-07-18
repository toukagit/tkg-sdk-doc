"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4306],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=s(n),p=a,m=k["".concat(u,".").concat(p)]||k[p]||d[p]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7462),a=n(7294),l=n(2389),o=n(5979),i=n(6010),u="tabItem_LplD";function s(e){var t,n,l,s=e.lazy,c=e.block,d=e.defaultValue,k=e.values,p=e.groupId,m=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=k?k:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.lx)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=f[0])?void 0:l.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,o.UB)(),y=h.tabGroupChoices,S=h.setTabGroupChoices,D=(0,a.useState)(g),T=D[0],E=D[1],K=[],w=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var O=y[p];null!=O&&O!==T&&b.some((function(e){return e.value===O}))&&E(O)}var C=function(e){var t=e.currentTarget,n=K.indexOf(t),r=b[n].value;r!==T&&(w(t),E(r),null!=p&&S(p,r))},N=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=K.indexOf(e.currentTarget)+1;n=K[r]||K[0];break;case"ArrowLeft":var a=K.indexOf(e.currentTarget)-1;n=K[a]||K[K.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},m)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return K.push(e)},onKeyDown:N,onFocus:C,onClick:C},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function c(e){var t=(0,l.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},4099:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=n(9877),i=n(8215),u=["components"],s={title:"Download SDK",sidebar_label:"Download SDK",description:"",sidebar_position:2},c=void 0,d={unversionedId:"download",id:"version-2.2.x/download",title:"Download SDK",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.2.x/download.md",sourceDirName:".",slug:"/download",permalink:"/tkg-sdk-doc/download",tags:[],version:"2.2.x",sidebarPosition:2,frontMatter:{title:"Download SDK",sidebar_label:"Download SDK",description:"",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Touka SDK Introduction",permalink:"/tkg-sdk-doc/"},next:{title:"Preparation",permalink:"/tkg-sdk-doc/tkg-integration/sdk-prepare"}},k={},p=[{value:"ToukaSDK v2.2.1               2022-07-18",id:"toukasdk-v221---------------2022-07-18",level:2},{value:"Release Note",id:"release-note",level:3}],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Get the Touka Android and iOS SDK. ",(0,l.kt)("br",null),"\nYou can download it from OSS or Google."),(0,l.kt)("h2",{id:"toukasdk-v221---------------2022-07-18"},"ToukaSDK v2.2.1               2022-07-18"),(0,l.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"}," ",(0,l.kt)("strong",{parentName:"p"}," ToukaSDK requires Xcode 13.2.1 or higher version.")))),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"CN SDK",label:"CN SDK",default:!0,mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"SDK Name "),(0,l.kt)("td",null," Required "),(0,l.kt)("td",null," Version "),(0,l.kt)("td",null," Download ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"CommonSDK"),(0,l.kt)("td",null,"YES"),(0,l.kt)("td",null,"2.2.1"),(0,l.kt)("td",null,"OSS:",(0,l.kt)("br",null),(0,l.kt)("a",{href:"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Touka%20SDK/Unity%E6%B8%B8%E6%88%8F/TKGSDK/CommonSDK.unitypackage"},"CommonSDK.unitypackage"),(0,l.kt)("br",null),(0,l.kt)("br",null),"Google Driver:",(0,l.kt)("br",null),(0,l.kt)("a",{href:"https://drive.google.com/file/d/1jnPkyUQn9zgCZOJ5M6y7ek_lcH7x-Uhx/view?usp=sharing"},"CommonSDK.unitypackage"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"ToukaSDK_Android"),(0,l.kt)("td",null," The Android platform must be integrated"),(0,l.kt)("td",null," 2.2.1 "),(0,l.kt)("td",null," OSS:",(0,l.kt)("br",null),(0,l.kt)("a",{href:"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Touka%20SDK/Unity%E6%B8%B8%E6%88%8F/TKGSDK/GB/ToukaSDK_Android.unitypackage"},"ToukaSDK_Android.unitypackage"),(0,l.kt)("br",null),(0,l.kt)("br",null),"Google Driver:",(0,l.kt)("br",null),(0,l.kt)("a",{href:"https://drive.google.com/file/d/1fbQLMsIkK7jqlmBJ95L7qirMyJ0l-FAR/view?usp=sharing"}," ToukaSDK_Android.unitypackage"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"ToukaSDK_iOS_CN"),(0,l.kt)("td",null," The iOS platform must be integrated"),(0,l.kt)("td",null," 2.2.1"),(0,l.kt)("td",null," OSS:",(0,l.kt)("br",null),(0,l.kt)("a",{href:"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Touka%20SDK/Unity%E6%B8%B8%E6%88%8F/TKGSDK/CN/Touka_iOSLibs_CN.unitypackage"},"ToukaSDK_iOSLibs_CN.unitypackage"),(0,l.kt)("br",null),(0,l.kt)("br",null),"Google Driver:",(0,l.kt)("br",null),(0,l.kt)("a",{href:"https://drive.google.com/file/d/1EEX7pHmq-A3kEpriLqmMoeXfwnwO9ZmF/view?usp=sharing"},"ToukaSDK_iOSLibs_CN.unitypackage"))))),(0,l.kt)(i.Z,{value:"Global SDK",label:"Global SDK",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"SDK Name "),(0,l.kt)("td",null," Required "),(0,l.kt)("td",null," Version "),(0,l.kt)("td",null," Download ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"CommonSDK"),(0,l.kt)("td",null,"YES"),(0,l.kt)("td",null,"2.2.1"),(0,l.kt)("td",null," OSS:",(0,l.kt)("br",null),(0,l.kt)("a",{href:"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Touka%20SDK/Unity%E6%B8%B8%E6%88%8F/TKGSDK/CommonSDK.unitypackage"},"CommonSDK.unitypackage"),(0,l.kt)("br",null),(0,l.kt)("br",null),"Google Driver:",(0,l.kt)("br",null),(0,l.kt)("a",{href:"https://drive.google.com/file/d/1jnPkyUQn9zgCZOJ5M6y7ek_lcH7x-Uhx/view?usp=sharing"},"CommonSDK.unitypackage"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"ToukaSDK_Android"),(0,l.kt)("td",null," The Android platform must be integrated"),(0,l.kt)("td",null," 2.2.1 "),(0,l.kt)("td",null," OSS:",(0,l.kt)("br",null),(0,l.kt)("a",{href:"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Touka%20SDK/Unity%E6%B8%B8%E6%88%8F/TKGSDK/GB/ToukaSDK_Android.unitypackage"},"ToukaSDK_Android.unitypackage"),(0,l.kt)("br",null),(0,l.kt)("br",null),"Google Driver:",(0,l.kt)("br",null),(0,l.kt)("a",{href:"https://drive.google.com/file/d/1fbQLMsIkK7jqlmBJ95L7qirMyJ0l-FAR/view?usp=sharing"},"ToukaSDK_Android.unitypackage"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"ToukaSDK_iOS_GB"),(0,l.kt)("td",null," The iOS platform must be integrated"),(0,l.kt)("td",null," 2.2.1"),(0,l.kt)("td",null," OSS:",(0,l.kt)("br",null),(0,l.kt)("a",{href:"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Touka%20SDK/Unity%E6%B8%B8%E6%88%8F/TKGSDK/GB/Touka_iOSLibs_GB.unitypackage"},"ToukaSDK_iOSLibs_GB.unitypackage"),(0,l.kt)("br",null),(0,l.kt)("br",null),"Google Driver:",(0,l.kt)("br",null),(0,l.kt)("a",{href:"https://drive.google.com/file/d/18pQ-ftL5JILTXnHuDinHOcGPTw62d8Z-/view?usp=sharing"},"ToukaSDK_iOSLibs_GB.unitypackage")))))),(0,l.kt)("h3",{id:"release-note"},(0,l.kt)("a",{parentName:"h3",href:"/versions"},"Release Note")))}f.isMDXComponent=!0}}]);