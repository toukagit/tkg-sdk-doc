"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3990],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,g=d["".concat(u,".").concat(f)]||d[f]||l[f]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3488:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={sidebar_position:100},u="\u63d0\u4ea4\u53d1\u5e03",s={unversionedId:"tkg-integration/sdk-package",id:"version-2.1.0/tkg-integration/sdk-package",title:"\u63d0\u4ea4\u53d1\u5e03",description:"iOS\u6e38\u620f\u63d0\u4ea4",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1.0/tkg-integration/sdk-package.md",sourceDirName:"tkg-integration",slug:"/tkg-integration/sdk-package",permalink:"/tkg-sdk-doc/zh/2.1.0/tkg-integration/sdk-package",tags:[],version:"2.1.0",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"iOS \u63a5\u5165\u9a8c\u8bc1",permalink:"/tkg-sdk-doc/zh/2.1.0/tkg-integration/sdk-test/sdk-test-iOS"},next:{title:"FAQ",permalink:"/tkg-sdk-doc/zh/2.1.0/faq"}},p={},l=[{value:"iOS\u6e38\u620f\u63d0\u4ea4",id:"ios\u6e38\u620f\u63d0\u4ea4",level:3},{value:"Android \u6e38\u620f\u5305\u63d0\u4ea4",id:"android-\u6e38\u620f\u5305\u63d0\u4ea4",level:3}],d={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u63d0\u4ea4\u53d1\u5e03"},"\u63d0\u4ea4\u53d1\u5e03"),(0,i.kt)("h3",{id:"ios\u6e38\u620f\u63d0\u4ea4"},"iOS\u6e38\u620f\u63d0\u4ea4"),(0,i.kt)("p",null,"\u5f00\u53d1\u8005\u5b8c\u6210\u63a5\u5165\u540e\uff0c\u9700\u8981\u5c06\u6784\u5efa\u597d\u7684iOS\u5305\u63d0\u4ea4 TestFlight \u4ee5\u4fbf\u6211\u4eec\u53ef\u4ee5\u8fdb\u884c\u6700\u7ec8\u9a8c\u8bc1\u3002"),(0,i.kt)("h3",{id:"android-\u6e38\u620f\u5305\u63d0\u4ea4"},"Android \u6e38\u620f\u5305\u63d0\u4ea4"),(0,i.kt)("p",null,"\u5f00\u53d1\u8005\u5b8c\u6210\u63a5\u5165\u540e\uff0c\u9700\u8981\u5c06\u6784\u5efa\u597d\u7684Apk\u5305\u4ea4\u7531\u6211\u4eec\u8fdb\u884c\u6700\u7ec8\u989d\u5916\u8d44\u6e90\u7684\u5e76\u5165\u3002"))}f.isMDXComponent=!0}}]);