"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[412],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,v=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(v,l(l({ref:t},s),{},{components:n})):r.createElement(v,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294);function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7462),o=n(7294),a=n(2389),l=n(5979),i=n(6010),u="tabItem_LplD";function c(e){var t,n,a,c=e.lazy,s=e.block,d=e.defaultValue,p=e.values,m=e.groupId,v=e.className,f=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,l.UB)(),y=g.tabGroupChoices,w=g.setTabGroupChoices,D=(0,o.useState)(h),N=D[0],O=D[1],S=[],T=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=y[m];null!=E&&E!==N&&b.some((function(e){return e.value===E}))&&O(E)}var x=function(e){var t=e.currentTarget,n=S.indexOf(t),r=b[n].value;r!==N&&(T(t),O(r),null!=m&&w(m,r))},K=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=S.indexOf(e.currentTarget)+1;n=S[r]||S[0];break;case"ArrowLeft":var o=S.indexOf(e.currentTarget)-1;n=S[o]||S[S.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},v)},b.map((function(e){var t=e.value,n=e.label,a=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return S.push(e)},onKeyDown:K,onFocus:x,onClick:x},a,{className:(0,i.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),c?(0,o.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function s(e){var t=(0,a.Z)();return o.createElement(c,(0,r.Z)({key:String(t)},e))}},8118:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=(n(9877),n(8215),["components"]),i={title:"Download SDK",sidebar_label:"Download SDK",description:"",sidebar_position:2},u=void 0,c={unversionedId:"download",id:"version-3.0.x/download",title:"Download SDK",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.0.x/download.md",sourceDirName:".",slug:"/download",permalink:"/tkg-sdk-doc/download",tags:[],version:"3.0.x",sidebarPosition:2,frontMatter:{title:"Download SDK",sidebar_label:"Download SDK",description:"",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Touka SDK Introduction",permalink:"/tkg-sdk-doc/"},next:{title:"Preparation",permalink:"/tkg-sdk-doc/tkg-integration/sdk-prepare"}},s={},d=[{value:"ToukaSDK v3.0.4                          2023-03-06",id:"toukasdk-v304--------------------------2023-03-06",level:2},{value:"Release Note",id:"release-note",level:3}],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Get the Touka Android and iOS SDK. ",(0,a.kt)("br",null),"\nYou can download it from OSS or Google."),(0,a.kt)("h2",{id:"toukasdk-v304--------------------------2023-03-06"},"ToukaSDK v3.0.4                          2023-03-06"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"}," ToukaSDK requires Xcode 14.2 or higher version."),"   "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"}," Update new\nSDK version is better to delete the old version. Except the config files. and export new Xcode or Android Studio project, don't append to old version's exported project."))))),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"SDK Name "),(0,a.kt)("td",null," Version "),(0,a.kt)("td",null," Download ")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ToukaSDK_Common"),(0,a.kt)("td",null,"3.0.4"),(0,a.kt)("td",null,"OSS:",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Touka%20SDK/Unity%E6%B8%B8%E6%88%8F/TKGSDK/3.0.4/ToukaSDK_Common_3.0.4_d6d94ca.zip"},"ToukaSDK_Common_3.0.4_d6d94ca.zip"),(0,a.kt)("br",null),(0,a.kt)("br",null),"Google Driver:",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://drive.google.com/file/d/1XuJLqV2AQydi9oU1X-2Glqcch5KsDW3z/view?usp=share_link"},"ToukaSDK_Common_3.0.4_d6d94ca.zip")))),(0,a.kt)("h3",{id:"release-note"},(0,a.kt)("a",{parentName:"h3",href:"/versions"},"Release Note")))}m.isMDXComponent=!0}}]);