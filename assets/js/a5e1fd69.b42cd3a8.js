(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{106:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),b=n,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||a;return r?i.a.createElement(m,l(l({ref:t},p),{},{components:r})):i.a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},162:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/gh-pr-preview-32ece4481887a85149cd925caa302a8f.png"},93:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),i=r(7),a=(r(0),r(106)),o={title:"Pull Request Previews",description:"Preview deployments of your pull requests"},l={unversionedId:"get-started/pr-previews",id:"get-started/pr-previews",isDocsHomePage:!1,title:"Pull Request Previews",description:"Preview deployments of your pull requests",source:"@site/docs/get-started/pr-previews.md",slug:"/get-started/pr-previews",permalink:"/get-started/pr-previews",editUrl:"https://github.com/getmeli/meli-docs/edit/latest/docs/get-started/pr-previews.md",version:"current",sidebar:"docs",previous:{title:"Single page applications (SPA)",permalink:"/get-started/single-page-applications"},next:{title:"Custom headers",permalink:"/get-started/custom-headers"}},c=[{value:"GitHub",id:"github",children:[]},{value:"Gitlab",id:"gitlab",children:[]},{value:"Gitea",id:"gitea",children:[]}],p={toc:c};function s(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"When you upload a site to Meli, the Meli CLI will tell your Git server where your site can be previewed."),Object(a.b)("h2",{id:"github"},"GitHub"),Object(a.b)("p",null,"To get Github Pull Request previews, make sure the ",Object(a.b)("inlineCode",{parentName:"p"},"GITHUB_TOKEN")," environment variable is defined when the Meli CLI si executed. This token should have the ",Object(a.b)("inlineCode",{parentName:"p"},"repo")," scope."),Object(a.b)("p",null,"Now, you'll get links to your pull request deployment previews (click ",Object(a.b)("strong",{parentName:"p"},"Details"),"):"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Login Page",src:r(162).default})),Object(a.b)("h2",{id:"gitlab"},"Gitlab"),Object(a.b)("p",null,"To get Gitlab deploy links, make sure the ",Object(a.b)("inlineCode",{parentName:"p"},"GITLAB_TOKEN")," environment variable is defined when the Meli CLI si executed. This token should have the ",Object(a.b)("inlineCode",{parentName:"p"},"repo")," scope."),Object(a.b)("h2",{id:"gitea"},"Gitea"),Object(a.b)("p",null,"To get Gitea deploy links, make sure the ",Object(a.b)("inlineCode",{parentName:"p"},"GITEA_TOKEN")," environment variable is defined when the Meli CLI si executed. This token should have the ",Object(a.b)("inlineCode",{parentName:"p"},"api")," scope."))}s.isMDXComponent=!0}}]);