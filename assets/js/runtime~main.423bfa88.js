!function(){"use strict";var e,a,t,f,n,c={},r={};function b(e){var a=r[e];if(void 0!==a)return a.exports;var t=r[e]={id:e,loaded:!1,exports:{}};return c[e].call(t.exports,t,t.exports,b),t.loaded=!0,t.exports}b.m=c,b.c=r,e=[],b.O=function(a,t,f,n){if(!t){var c=1/0;for(u=0;u<e.length;u++){t=e[u][0],f=e[u][1],n=e[u][2];for(var r=!0,d=0;d<t.length;d++)(!1&n||c>=n)&&Object.keys(b.O).every((function(e){return b.O[e](t[d])}))?t.splice(d--,1):(r=!1,n<c&&(c=n));if(r){e.splice(u--,1);var o=f();void 0!==o&&(a=o)}}return a}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[t,f,n]},b.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return b.d(a,{a:a}),a},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},b.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var n=Object.create(null);b.r(n);var c={};a=a||[null,t({}),t([]),t(t)];for(var r=2&f&&e;"object"==typeof r&&!~a.indexOf(r);r=t(r))Object.getOwnPropertyNames(r).forEach((function(a){c[a]=function(){return e[a]}}));return c.default=function(){return e},b.d(n,c),n},b.d=function(e,a){for(var t in a)b.o(a,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},b.f={},b.e=function(e){return Promise.all(Object.keys(b.f).reduce((function(a,t){return b.f[t](e,a),a}),[]))},b.u=function(e){return"assets/js/"+({6:"b9fa56a0",96:"97a84a1b",137:"30eaad4f",548:"182ddf7f",823:"63503174",1004:"9c58ed29",1020:"5f957997",1023:"73f75ee6",1175:"5ce1c8d0",1389:"14eb3a6f",1413:"703f3689",1545:"a2f3e1e8",1820:"1e518b75",1841:"c8a5d49d",1943:"85ae40a5",2434:"a95af62a",2531:"ba6af4a5",2732:"cab41015",2833:"38d1eea8",3085:"1f391b9e",3196:"0eff7b28",3473:"23c46029",3538:"7b629d5b",3694:"99eca123",3762:"e7eca315",3843:"dd26f749",3958:"a81c4700",4195:"53dd7183",4330:"637aa07b",4354:"b2a9bf2a",4441:"4e6b5e13",4567:"8c38d9ee",4689:"06f8edbc",4746:"9a05f2eb",5318:"5b4a0942",5674:"c38d7b2a",6044:"49c687af",6573:"a6b36c1b",6717:"b98bbf73",7001:"547ce873",7011:"6a70e320",7250:"a2782c9b",7256:"da90ff6b",7281:"607ce2de",7298:"e59eab7d",7414:"393be207",7918:"17896441",7964:"d1dbe88e",7991:"7558a43c",8138:"1a9778fc",8304:"bf4febc2",8401:"e7ea67fe",8883:"eeb337de",9043:"dd03491d",9138:"7fed4ee4",9167:"f913484e",9183:"fc9364d9",9269:"55e742dc",9275:"2d982bda",9382:"3b6466b0",9514:"1be78505",9526:"eab2b72a",9649:"76b6b7a9",9724:"2171cb58",9729:"9f5e0096",9768:"51b8b3b9"}[e]||e)+"."+{6:"04beebf6",96:"aacf859e",137:"953221a8",548:"ee8129c5",823:"0087414f",1004:"e13134c6",1020:"dd82ac2a",1023:"cf65fdb4",1175:"d610b316",1389:"300e7e6d",1413:"d2e8b835",1545:"2790acc3",1820:"1aa41680",1841:"9cd908bb",1943:"fcb1376a",2434:"323a37ca",2531:"c4a803a4",2732:"18013491",2833:"6630c7a0",3085:"ae03e4a7",3196:"59a9869f",3473:"349fc537",3538:"239c477b",3694:"ff462d03",3762:"ec3e0206",3843:"b3394d2c",3958:"6a335e3a",4195:"4f13878d",4330:"cc21c98f",4354:"2de328eb",4441:"d089f531",4567:"35e475ef",4608:"85a54471",4689:"ddb43e3e",4746:"e37fdfff",5318:"da485f8f",5674:"5f7a8145",6044:"df3e380d",6518:"38fd42e6",6573:"77f7daa5",6717:"246da4a5",7001:"fcff4f13",7011:"02562bc9",7250:"d618a4bd",7256:"d0361197",7281:"492e1018",7298:"32d6d406",7414:"6674d555",7918:"c8881392",7964:"90964d7d",7991:"19def254",8138:"799d7953",8304:"30d5ae68",8401:"d6cff642",8883:"e1c204cc",9043:"4903d63d",9138:"17f3aa49",9167:"c2b680ce",9183:"7c1b57d7",9269:"8dd0fd4d",9275:"75dbae1e",9382:"61fae5dd",9514:"dac99cfc",9526:"31bca5fc",9649:"f8dc114a",9724:"6f0b2b23",9729:"dc00dd1c",9768:"6dbae825"}[e]+".js"},b.miniCssF=function(e){},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},f={},n="website:",b.l=function(e,a,t,c){if(f[e])f[e].push(a);else{var r,d;if(void 0!==t)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var i=o[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==n+t){r=i;break}}r||(d=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,b.nc&&r.setAttribute("nonce",b.nc),r.setAttribute("data-webpack",n+t),r.src=e),f[e]=[a];var l=function(a,t){r.onerror=r.onload=null,clearTimeout(s);var n=f[e];if(delete f[e],r.parentNode&&r.parentNode.removeChild(r),n&&n.forEach((function(e){return e(t)})),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=l.bind(null,r.onerror),r.onload=l.bind(null,r.onload),d&&document.head.appendChild(r)}},b.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/tkg-sdk-doc/",b.gca=function(e){return e={17896441:"7918",63503174:"823",b9fa56a0:"6","97a84a1b":"96","30eaad4f":"137","182ddf7f":"548","9c58ed29":"1004","5f957997":"1020","73f75ee6":"1023","5ce1c8d0":"1175","14eb3a6f":"1389","703f3689":"1413",a2f3e1e8:"1545","1e518b75":"1820",c8a5d49d:"1841","85ae40a5":"1943",a95af62a:"2434",ba6af4a5:"2531",cab41015:"2732","38d1eea8":"2833","1f391b9e":"3085","0eff7b28":"3196","23c46029":"3473","7b629d5b":"3538","99eca123":"3694",e7eca315:"3762",dd26f749:"3843",a81c4700:"3958","53dd7183":"4195","637aa07b":"4330",b2a9bf2a:"4354","4e6b5e13":"4441","8c38d9ee":"4567","06f8edbc":"4689","9a05f2eb":"4746","5b4a0942":"5318",c38d7b2a:"5674","49c687af":"6044",a6b36c1b:"6573",b98bbf73:"6717","547ce873":"7001","6a70e320":"7011",a2782c9b:"7250",da90ff6b:"7256","607ce2de":"7281",e59eab7d:"7298","393be207":"7414",d1dbe88e:"7964","7558a43c":"7991","1a9778fc":"8138",bf4febc2:"8304",e7ea67fe:"8401",eeb337de:"8883",dd03491d:"9043","7fed4ee4":"9138",f913484e:"9167",fc9364d9:"9183","55e742dc":"9269","2d982bda":"9275","3b6466b0":"9382","1be78505":"9514",eab2b72a:"9526","76b6b7a9":"9649","2171cb58":"9724","9f5e0096":"9729","51b8b3b9":"9768"}[e]||e,b.p+b.u(e)},function(){var e={1303:0,532:0};b.f.j=function(a,t){var f=b.o(e,a)?e[a]:void 0;if(0!==f)if(f)t.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var n=new Promise((function(t,n){f=e[a]=[t,n]}));t.push(f[2]=n);var c=b.p+b.u(a),r=new Error;b.l(c,(function(t){if(b.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;r.message="Loading chunk "+a+" failed.\n("+n+": "+c+")",r.name="ChunkLoadError",r.type=n,r.request=c,f[1](r)}}),"chunk-"+a,a)}},b.O.j=function(a){return 0===e[a]};var a=function(a,t){var f,n,c=t[0],r=t[1],d=t[2],o=0;if(c.some((function(a){return 0!==e[a]}))){for(f in r)b.o(r,f)&&(b.m[f]=r[f]);if(d)var u=d(b)}for(a&&a(t);o<c.length;o++)n=c[o],b.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return b.O(u)},t=self.webpackChunkwebsite=self.webpackChunkwebsite||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}()}();