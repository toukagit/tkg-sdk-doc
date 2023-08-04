"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7359],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=s(n),p=l,k=d["".concat(u,".").concat(p)]||d[p]||g[p]||i;return n?o.createElement(k,a(a({ref:t},c),{},{components:n})):o.createElement(k,a({ref:t},c))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=d;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r.mdxType="string"==typeof e?e:l,a[1]=r;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8563:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return g}});var o=n(7462),l=n(3366),i=(n(7294),n(3905)),a=["components"],r={sidebar_position:8},u="Account system",s={unversionedId:"tkg-integration/sdk-basic/sdk-func-account",id:"version-3.0.x/tkg-integration/sdk-basic/sdk-func-account",title:"Account system",description:"Before\xa0integrating\xa0the\xa0account\xa0system,\xa0please\xa0confirm\xa0the\xa0timing\xa0of\xa0its\xa0appearance\xa0and\xa0choose\xa0the\xa0login\xa0methods\xa0you\xa0want\xa0to\xa0support.\xa0We\xa0offer\xa0guest\xa0login,\xa0email\xa0login,\xa0and\xa0third-party\xa0login\xa0methods.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.0.x/tkg-integration/sdk-basic/sdk-func-account.md",sourceDirName:"tkg-integration/sdk-basic",slug:"/tkg-integration/sdk-basic/sdk-func-account",permalink:"/tkg-sdk-doc/tkg-integration/sdk-basic/sdk-func-account",tags:[],version:"3.0.x",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"In App Purchase",permalink:"/tkg-sdk-doc/tkg-integration/sdk-basic/sdk-func-iap"},next:{title:"Advanced Integration",permalink:"/tkg-sdk-doc/tkg-integration/sdk-other-func"}},c={},g=[{value:"Login methods",id:"login-methods",level:2},{value:"Account system display timing",id:"account-system-display-timing",level:2},{value:"Explanation",id:"explanation",level:2},{value:"API",id:"api",level:2},{value:"Account login",id:"account-login",level:3},{value:"Account logout (Optional)",id:"account-logout-optional",level:3},{value:"Login Mode Query interface (Required)",id:"login-mode-query-interface-required",level:3},{value:"Account delete (Required)",id:"account-delete-required",level:3},{value:"Account Binding  (Optional)",id:"account-binding--optional",level:3},{value:"Forced binding   (Optional)",id:"forced-binding---optional",level:3},{value:'Auto Login   (Optional)<font color="#ff0000">(v3.0.7new)</font>',id:"auto-login---optionalv307new",level:3},{value:'Returns the currently user Login Type  (Optional)<font color="#ff0000">(v3.0.7new)</font>',id:"returns-the-currently-user-login-type--optionalv307new",level:3},{value:'Return to whether the login interface needs to be displayed(Optional)<font color="#ff0000">(v3.0.7new)</font>',id:"return-to-whether-the-login-interface-needs-to-be-displayedoptionalv307new",level:3},{value:"Q&amp;A",id:"qa",level:2}],d={toc:g};function p(e){var t=e.components,r=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"account-system"},"Account system"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Before\xa0integrating\xa0the\xa0account\xa0system,\xa0please\xa0confirm\xa0the\xa0timing\xa0of\xa0its\xa0appearance\xa0and\xa0choose\xa0the\xa0login\xa0methods\xa0you\xa0want\xa0to\xa0support.\xa0We\xa0offer\xa0guest\xa0login,\xa0email\xa0login,\xa0and\xa0third-party\xa0login\xa0methods.",(0,i.kt)("br",{parentName:"p"}),"\n","Besides\xa0account\xa0login,\xa0we\xa0support\xa0account\xa0deletion\xa0(required),\xa0login\xa0type\xa0inquiry\xa0(required), logout,\xa0\xa0account\xa0binding,\xa0and\xa0forced\xa0binding, auto login, returns the currently user login type, Return to whether the login interface needs to be displayed.",(0,i.kt)("br",{parentName:"p"}),"\n","Touka SDK only provides the login interface, the login screen can be designed and created by developers according to the game's UI style.      "))),(0,i.kt)("h2",{id:"login-methods"},"Login methods"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Other account system logins: Guest login, Email login.      "),(0,i.kt)("li",{parentName:"ol"},"Third-party logins: Google login (Android only), Facebook login, Apple login (iOS only).      ")),(0,i.kt)("h2",{id:"account-system-display-timing"},"Account system display timing"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After entering the game, the login screen is displayed directly. Players must complete the login by filling in/selecting the information to enter the game. ",(0,i.kt)("font",{color:"ff0000"},"\uff08Only show game login screen for the first time, and after times use the selected method to log in.\uff09"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"LoginLogic01",src:n(3848).Z,width:"1288",height:"454"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Players can enter the game immediately with guest silent login and bind their accounts at a suitable game position.    ",(0,i.kt)("font",{color:"ff0000"},"\uff08non-guest account enters game, the binding button don't display.\uff09"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"LoginLogic02",src:n(8074).Z,width:"1378",height:"384"}),"  "))),(0,i.kt)("h2",{id:"explanation"},"Explanation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Different UserIDs are returned for each login method: guest, Google, Facebook, Apple, and email.",(0,i.kt)("font",{color:"ff0000"},"\uff08The situation is unique when it comes to account binding.\uff09"),"          "),(0,i.kt)("li",{parentName:"ol"},"Note that login is called through the login interface, and after successful login, the binding of a guest account to a third-party account is done through the account binding interface. Only when the account binding interface is called will an internal binding operation for the guest account and third-party account be performed in the SDK.          "),(0,i.kt)("li",{parentName:"ol"},"After successful login of non-guest account types, no binding function is provided (i.e. the binding button is not displayed). After a successful guest account binding, the returned login type corresponds to the type of the third-party account that was bound, and the returned UserID is the same as the UserID returned during guest login.        ")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"account-login"},"Account login"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.Login(LoginType.LOGIN_BY_GOOGLE, (loginStatus,  loginType,  loginMsg,  userId,  token,  email,  nickName,  iconUrl) =>{\n\n    Debug.Log("Login status code:"+loginStatus);\n    Debug.Log("Login type:" + loginType);\n    Debug.Log("Login status information:" + loginMsg);\n    Debug.Log("User ID:" + userId);\n    Debug.Log("token:" + token);\n    Debug.Log("email:" + email);\n    Debug.Log("nickName:" + nickName);\n    Debug.Log("icon url:" + iconUrl);\n    \n});\n\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," API: "),"     "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"void Login(LoginType _loginType, Action<LoginStatus, LoginType, string, string, string, string,string,string> _loginResultCallback)\n")),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"Name"),(0,i.kt)("td",null,"isRequired"),(0,i.kt)("td",null,"Type"),(0,i.kt)("td",null,"Description")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"_loginType"),(0,i.kt)("td",null,"Y"),(0,i.kt)("td",null,"string"),(0,i.kt)("td",null,"Login type:",(0,i.kt)("br",null),"LoginType.LOGIN_BY_GUESTER  (guester login)",(0,i.kt)("br",null),"LoginType.LOGIN_BY_EMAIL    (email login)",(0,i.kt)("br",null),"LoginType.LOGIN_BY_GOOGLE   (Google login)",(0,i.kt)("br",null),"LoginType.LOGIN_BY_FACEBOOK (Facebook login)",(0,i.kt)("br",null),"LoginType.LOGIN_BY_Apple    (Apple login)",(0,i.kt)("br",null))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"_loginResultCallback"),(0,i.kt)("td",null,"Y"),(0,i.kt)("td",null,"Action"),(0,i.kt)("td",null,"Login callback:",(0,i.kt)("br",null),"loginStatus: Login status code(Successful login, failed login, or cancelled login. If the login fails, the player should be prompted and the login interface should be displayed to initiate login again)",(0,i.kt)("br",null),(0,i.kt)("br",null),"loginType: Login type",(0,i.kt)("font",{color:"ff0000"},"\uff08Use this result to determine the display of the bind button. Display only for guest logins.\uff09"),(0,i.kt)("br",null),(0,i.kt)("br",null),"loginMsg: Login status information(Text describes login reasons, not suggested for direct game use.)",(0,i.kt)("br",null),"userId: userid (UserID after binding)",(0,i.kt)("br",null),"token: token  (Can be used for server verification)",(0,i.kt)("br",null),"email: email  (Returns third-party account email)",(0,i.kt)("br",null),"nickName: nickName  (Returns third-party account nickname)",(0,i.kt)("br",null),"iconUrl: iconUrl  (Returns third-party account avatar URL)",(0,i.kt)("br",null)))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," Game login button diagram: "),"  ",(0,i.kt)("br",null),"\n",(0,i.kt)("img",{alt:"LoginPanel",src:n(3687).Z,width:"320",height:"569"})),(0,i.kt)("h3",{id:"account-logout-optional"},"Account logout (Optional)"),(0,i.kt)("p",null,"The account logout interface can be called when the game switches accounts for logout operations. The SDK will callback the game upon account exit. No need to call if not required.      "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.Logout();\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," API: "),"     "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"void Logout(Action _logoutCallback = null)\n")),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"Name"),(0,i.kt)("td",null,"isRequired"),(0,i.kt)("td",null,"Type"),(0,i.kt)("td",null,"Description")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"_logoutCallback"),(0,i.kt)("td",null,"N"),(0,i.kt)("td",null,"Action"),(0,i.kt)("td",null,"Logout login callback"))),(0,i.kt)("h3",{id:"login-mode-query-interface-required"},"Login Mode Query interface (Required)"),(0,i.kt)("p",null,"SDK controls supported login types, returning a list to the game. Game must used the interface and game should adjust login/bind UI dynamically by this result."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"List<LoginType> list = TKGSDKManager.Instance.AvailableLoginChannelList();\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," API: "),"     "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"List<LoginType> AvailableLoginChannelList();\n")),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"Type"),(0,i.kt)("td",null,"Description")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"List <LoginType> "),(0,i.kt)("td",null,"Returns the currently available login type."))),(0,i.kt)("h3",{id:"account-delete-required"},"Account delete (Required)"),(0,i.kt)("p",null,"To enhance transparency and user data control, Google requires games with account login to offer account deletion.       "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Games must add a deletion button, clicking it invokes the SDK's deletion interface, no further action is needed.       "),(0,i.kt)("li",{parentName:"ul"},"The SDK then handles deletion, provides a callback to the game, and exits immediately. Reopening the game will resemble a new user entry.       "),(0,i.kt)("li",{parentName:"ul"},"The deletion flow includes: long-press 'OK' for 5 seconds until progress bar fills up, triggering a second confirmation. Click 'OK' to send the game callback, closing the game; 'Cancel' exits the deletion interface.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.DeleteAccount();\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," API: "),"     "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"//DeleteStatus.DELETE_ACCOUNT_FAILED  delete fail\n//DeleteStatus.DELETE_ACCOUNT_CANCEL  delete cancel\n//DeleteStatus.DELETE_ACCOUNT_SUCC    delete success\n\nvoid DeleteAccount(Action<DeleteStatus,string> _deleteAccountCallback = null);\n")),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"Name"),(0,i.kt)("td",null,"isRequired"),(0,i.kt)("td",null,"Type"),(0,i.kt)("td",null,"Description")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"_deleteAccountCallback"),(0,i.kt)("td",null,"N"),(0,i.kt)("td",null,"Action <DeleteStatus,string> "),(0,i.kt)("td",null,"Deleting an account callback returns the deleted userId & statusCode."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," SDK Account Deletion Interface Effect Diagram: "),"  ",(0,i.kt)("br",null),"\n",(0,i.kt)("img",{alt:"LoginPanel",src:n(5531).Z,width:"800",height:"705"})),(0,i.kt)("h3",{id:"account-binding--optional"},"Account Binding  (Optional)"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Explanation")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"The account binding function is used to bind guest accounts to third-party account services in the game.    "),(0,i.kt)("li",{parentName:"ol"},"Only guest accounts can be bound to third-party accounts. Once a guest account has been bound, it cannot be bound again. If the binding interface is called again, a 'already bound account' status code will be returned.    "),(0,i.kt)("li",{parentName:"ol"},"The game may hide the binding button after binding. The binding button should only be displayed when loginType in the callback is the guest login type.    "),(0,i.kt)("li",{parentName:"ol"},"After a guest account is bound to a third-party account, the returned UserID is still the UserID of the guest account; it's just that the two are bound together in SDK internally.    "),(0,i.kt)("li",{parentName:"ol"},"As long as the guest account hasn't been bound to a social account, it has the right to bind to a social account. If the social account has already been bound by another guest account, there is the right to force binding. This involves the forced binding interface.    "),(0,i.kt)("li",{parentName:"ol"},"When users use a social account that has been previously bound for the binding operation, the game can pop up an interface listing the two accounts and corresponding game progress for players to choose which account to bind. After the player selects, calling the force binding interface can be done.    "),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("font",{color:"#ff0000"},"After successful binding, the game needs to determine whether the UserID returned after binding is consistent with the currently logged in UserID. If it is not consistent, it needs to switch to the corresponding game progress (account switching) for the UserID returned after successful binding."))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'\nTKGSDKManager.Instance.BindAccount(LoginType.LOGIN_BY_FACEBOOK,(bindAccountStatus,loginType,loginMsg,userId,token,email,nickName,iconUrl,userIdList)=> {\n\n    Debug.Log("bind account status:" + bindAccountStatus);\n    Debug.Log("login type:" + loginType);\n    Debug.Log("login message:" + loginMsg);\n    Debug.Log("user ID:" + userId);\n    Debug.Log("token:" + token);\n    Debug.Log("email:" + email);\n    Debug.Log("nick name:" + nickName);\n    Debug.Log("icon url:" + iconUrl);\n    Debug.Log("userId list\uff1a"+userIdList);\n\n});\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," API: "),"     "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"void BindAccount(LoginType type,\n    Action<BindAccountStatus, LoginType, string, string, string, string, string, string, string[]>\n        _bindAccountCallback)\n")),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"Name"),(0,i.kt)("td",null,"isRequired"),(0,i.kt)("td",null,"Type"),(0,i.kt)("td",null,"Description")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"_loginType"),(0,i.kt)("td",null,"Y"),(0,i.kt)("td",null,"string"),(0,i.kt)("td",null,"Login type:",(0,i.kt)("br",null),"LoginType.LOGIN_BY_GUESTER  (guester login)",(0,i.kt)("br",null),"LoginType.LOGIN_BY_EMAIL    (email login)",(0,i.kt)("br",null),"LoginType.LOGIN_BY_GOOGLE   (Google login)",(0,i.kt)("br",null),"LoginType.LOGIN_BY_FACEBOOK (Facebook login)",(0,i.kt)("br",null),"LoginType.LOGIN_BY_Apple    (Apple login)",(0,i.kt)("br",null))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"_bindAccountCallback"),(0,i.kt)("td",null,"Y"),(0,i.kt)("td",null,"Action"),(0,i.kt)("td",null,"Binding callback\uff1a",(0,i.kt)("br",null),"bindAccountStatus\uff1abinding account status (Binding successful, Account already bound, Need to select, Binding failed, Cancel binding) ",(0,i.kt)("br",null),(0,i.kt)("br",null),"loginType\uff1alogin type",(0,i.kt)("font",{color:"ff0000"},"(Use this result to determine the display of the bind button. Display only for guest logins.)"),(0,i.kt)("br",null),(0,i.kt)("br",null),"loginMsg\uff1a login message(Text describes login reasons, not suggested for direct game use.)",(0,i.kt)("br",null),(0,i.kt)("br",null),"userId\uff1auserId (UserID after binding) ",(0,i.kt)("br",null),"token\uff1atoken (Can be used for server verification) ",(0,i.kt)("br",null),"email\uff1aemail (Returns third-party account email) ",(0,i.kt)("br",null),"nickName\uff1anick name (Returns third-party account nickname) ",(0,i.kt)("br",null),"iconUrl\uff1aicon url  (Returns third-party account avatar URL) ",(0,i.kt)("br",null),"userIdList\uff1auser id list(If binding an existing Google account, returns guest and Google UserIDs for choice; else, returns guest UserID post binding.)",(0,i.kt)("br",null)))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," Diagram of in-game account binding: "),"  ",(0,i.kt)("br",null),"\n",(0,i.kt)("img",{alt:"LoginPanel",src:n(419).Z,width:"320",height:"569"})),(0,i.kt)("h3",{id:"forced-binding---optional"},"Forced binding   (Optional)"),(0,i.kt)("p",null,"When binding with an already-bound social account, the game shows two accounts for player choice. After selection, call the force binding interface."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'\nTKGSDKManager.Instance.ForceBindAccount("userId001",(bindAccountStatus,loginType,loginMsg,userId,token,email,nickName,iconUrl,userIdList)=> {\n\n    Debug.Log("Binding status code:" + bindAccountStatus);\n    Debug.Log("login type:" + loginType);\n    Debug.Log("login message:" + loginMsg);\n    Debug.Log("user ID:" + userId);\n    Debug.Log("token:" + token);\n    Debug.Log("email:" + email);\n    Debug.Log("nick name:" + nickName);\n    Debug.Log("icon url:" + iconUrl);\n    Debug.Log("userId list\uff1a"+userIdList);\n\n});\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," API: "),"     "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"void ForceBindAccount(string userId,\n    Action<BindAccountStatus, LoginType, string, string, string, string, string, string, string[]>\n        _bindAccountCallback)\n")),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"Name"),(0,i.kt)("td",null,"isRequired"),(0,i.kt)("td",null,"Type"),(0,i.kt)("td",null,"Description")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"userId"),(0,i.kt)("td",null,"Y"),(0,i.kt)("td",null,"string"),(0,i.kt)("td",null,"userId")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"_bindAccountCallback"),(0,i.kt)("td",null,"Y"),(0,i.kt)("td",null,"Action"),(0,i.kt)("td",null,"Binding callback\uff1a",(0,i.kt)("br",null),"bindAccountStatus\uff1abinding account status(Binding successful, Account already bound, Need to select, Binding failed, Cancel binding)",(0,i.kt)("br",null),(0,i.kt)("br",null),"loginType\uff1alogin type(Use this result to determine the display of the bind button. Display only for guest logins.)",(0,i.kt)("br",null),(0,i.kt)("br",null),"loginMsg\uff1a login message(Text describes login reasons, not suggested for direct game use.)",(0,i.kt)("br",null),(0,i.kt)("br",null),"userId\uff1auserId(UserID after binding)",(0,i.kt)("br",null),"token\uff1atoken  (Can be used for server verification)",(0,i.kt)("br",null),"email\uff1aemail (Returns third-party account email) ",(0,i.kt)("br",null),"nickName\uff1anick name (Returns third-party account nickname) ",(0,i.kt)("br",null),"iconUrl\uff1aicon url (Returns third-party account avatar URL)",(0,i.kt)("br",null),"userIdList\uff1auser id list (If binding an existing Google account, returns guest and Google UserIDs for choice; else, returns guest UserID post binding.) ",(0,i.kt)("br",null)))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," Diagram of in-game screen for choosing account to bind: "),"  ",(0,i.kt)("br",null),"\n",(0,i.kt)("img",{alt:"LoginPanel",src:n(2466).Z,width:"320",height:"569"})),(0,i.kt)("h3",{id:"auto-login---optionalv307new"},"Auto Login   (Optional)",(0,i.kt)("font",{color:"#ff0000"},"(v3.0.7new)")),(0,i.kt)("p",null,"The SDK automatically logs in based on the type of last login. You can determine whether the automatic login interface is available through the ",(0,i.kt)("inlineCode",{parentName:"p"},"IsCanAutoLogin")," interface.",(0,i.kt)("font",{color:"ff0000"},"The SDK automatically logs in based on the type of last login. You can determine whether the automatic login interface is available through the 'IsCanAutoLogin' interface.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.AutoLogin((loginStatus,  loginType,  loginMsg,  userId,  token,  email,  nickName,  iconUrl) =>{\n\n    Debug.Log("Login status code:"+loginStatus);\n    Debug.Log("Login type:" + loginType);\n    Debug.Log("Login status information:" + loginMsg);\n    Debug.Log("User ID:" + userId);\n    Debug.Log("token:" + token);\n    Debug.Log("email:" + email);\n    Debug.Log("nickName:" + nickName);\n    Debug.Log("icon url:" + iconUrl);\n    \n});\n\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," API: "),"     "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"void AutoLogin(Action<LoginStatus, LoginType, string, string, string, string,string,string> _loginResultCallback)\n")),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"Name"),(0,i.kt)("td",null,"isRequired"),(0,i.kt)("td",null,"Type"),(0,i.kt)("td",null,"Description")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"_loginType"),(0,i.kt)("td",null,"Y"),(0,i.kt)("td",null,"string"),(0,i.kt)("td",null,"Login type:",(0,i.kt)("br",null),"LoginType.LOGIN_BY_GUESTER  (guester login)",(0,i.kt)("br",null),"LoginType.LOGIN_BY_EMAIL    (email login)",(0,i.kt)("br",null),"LoginType.LOGIN_BY_GOOGLE   (Google login)",(0,i.kt)("br",null),"LoginType.LOGIN_BY_FACEBOOK (Facebook login)",(0,i.kt)("br",null),"LoginType.LOGIN_BY_Apple    (Apple login)",(0,i.kt)("br",null))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"_loginResultCallback"),(0,i.kt)("td",null,"Y"),(0,i.kt)("td",null,"Action"),(0,i.kt)("td",null,"Login callback:",(0,i.kt)("br",null),"loginStatus: Login status code(Successful login, failed login, or cancelled login. If the login fails, the player should be prompted and the login interface should be displayed to initiate login again)",(0,i.kt)("br",null),(0,i.kt)("br",null),"loginType: Login type",(0,i.kt)("font",{color:"ff0000"},"\uff08Use this result to determine the display of the bind button. Display only for guest logins.\uff09"),(0,i.kt)("br",null),(0,i.kt)("br",null),"loginMsg: Login status information(Text describes login reasons, not suggested for direct game use.)",(0,i.kt)("br",null),"userId: userid (UserID after binding)",(0,i.kt)("br",null),"token: token  (Can be used for server verification)",(0,i.kt)("br",null),"email: email  (Returns third-party account email)",(0,i.kt)("br",null),"nickName: nickName  (Returns third-party account nickname)",(0,i.kt)("br",null),"iconUrl: iconUrl  (Returns third-party account avatar URL)",(0,i.kt)("br",null)))),(0,i.kt)("h3",{id:"returns-the-currently-user-login-type--optionalv307new"},"Returns the currently user Login Type  (Optional)",(0,i.kt)("font",{color:"#ff0000"},"(v3.0.7new)")),(0,i.kt)("p",null,"After successful login, obtain the current account type, and the game side can determine whether to display the binding related interface based on the results returned from this interface"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"LoginType accountType = TKGSDKManager.Instance.GetAccountType();\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," API: "),"     "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"LoginType GetAccountType();\n")),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"Type"),(0,i.kt)("td",null,"Description")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"LoginType "),(0,i.kt)("td",null,"Returns the type of the current account"))),(0,i.kt)("h3",{id:"return-to-whether-the-login-interface-needs-to-be-displayedoptionalv307new"},"Return to whether the login interface needs to be displayed(Optional)",(0,i.kt)("font",{color:"#ff0000"},"(v3.0.7new)")),(0,i.kt)("p",null,"The game can determine whether it can directly call the ",(0,i.kt)("inlineCode",{parentName:"p"},"AutoLogin")," interface for automatic silent login based on the results returned by this interface If not possible, you need to display the login interface and then call the ",(0,i.kt)("inlineCode",{parentName:"p"},"Login")," interface based on the player's chosen login type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"bool isCanAutoLogin = TKGSDKManager.Instance.IsCanAutoLogin();\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," API: "),"     "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bool IsCanAutoLogin();\n")),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"Type"),(0,i.kt)("td",null,"Description")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"bool "),(0,i.kt)("td",null,"Can I automatically log in"))),(0,i.kt)("h2",{id:"qa"},"Q&A"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1.\xa0Can\xa0one\xa0Google\xa0account\xa0correspond\xa0to\xa0multiple\xa0game\xa0accounts?"),"\nNo.\xa0One\xa0Google\xa0account\xa0can\xa0only\xa0correspond\xa0to\xa0one\xa0game\xa0account.    "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2.\xa0If\xa0guest\xa0login\xa0is\xa0called\xa0first,\xa0then\xa0Google\xa0login,\xa0will\xa0guest\xa0and\xa0Google\xa0accounts\xa0bind?"),"No.\xa0This\xa0procedure\xa0will\xa0return\xa0a\xa0new\xa0UserID\xa0for\xa0a\xa0new\xa0account.\xa0Binding\xa0only\xa0occurs\xa0when\xa0the\xa0binding\xa0interface\xa0is\xa0called,\xa0returning\xa0the\xa0same\xa0UserID,\xa0specifically\xa0the\xa0guest\xa0account's\xa0UserID,\xa0using\xa0the\xa0same\xa0gaming\xa0process.\xa0However,\xa0guest\xa0UserIDs\xa0are\xa0device-dependent.\xa0If\xa0the\xa0device\xa0ID\xa0changes,\xa0the\xa0unbound\xa0guest\xa0account\xa0could\xa0be\xa0lost."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3.\xa0If\xa0I\xa0log\xa0in\xa0as\xa0a\xa0guest\xa0and\xa0return\xa0UserID1,\xa0then\xa0choose\xa0to\xa0bind\xa0the\xa0Google\xa0account\xa0after\xa0making\xa0progress,\xa0will\xa0my\xa0UserID\xa0change?"),(0,i.kt)("br",{parentName:"p"}),"\n","No.\xa0After\xa0binding,\xa0it\xa0will\xa0remain\xa0as\xa0UserID1.\xa0The\xa0SDK\xa0only\xa0performs\xa0an\xa0internal\xa0binding\xa0while\xa0keeping\xa0the\xa0original\xa0guest\xa0UserID.    "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"4.\xa0If\xa0I\xa0choose\xa0Google\xa0login\xa0when\xa0entering\xa0the\xa0game,\xa0make\xa0progress,\xa0then\xa0re-enter\xa0and\xa0choose\xa0guest\xa0login,\xa0then\xa0bind\xa0the\xa0Google\xa0account,\xa0what\xa0will\xa0happen?"),(0,i.kt)("br",{parentName:"p"}),"\n","When\xa0binding\xa0a\xa0Google\xa0account\xa0with\xa0game\xa0progress,\xa0the\xa0SDK\xa0will\xa0return\xa0two\xa0UserIDs\xa0to\xa0the\xa0game:\xa0the\xa0current\xa0guest\xa0account\xa0UserID\xa0and\xa0the\xa0UserID\xa0associated\xa0with\xa0the\xa0Google\xa0account.\xa0The\xa0game\xa0can\xa0produce\xa0an\xa0interface\xa0for\xa0the\xa0player\xa0to\xa0choose\xa0which\xa0game\xa0progress\xa0UserID\xa0they\xa0want\xa0to\xa0bind\xa0to\xa0their\xa0Google\xa0account,\xa0which\xa0is\xa0then\xa0passed\xa0to\xa0the\xa0SDK\xa0for\xa0force\xa0binding.      "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"5.\xa0For\xa0games\xa0that\xa0by\xa0default\xa0use\xa0guest\xa0login,\xa0if\xa0I\xa0play\xa0and\xa0bind\xa0my\xa0only\xa0Google\xa0account\xa0on\xa0device\xa0A,\xa0then\xa0play\xa0and\xa0try\xa0to\xa0bind\xa0with\xa0the\xa0same\xa0Google\xa0account\xa0on\xa0device\xa0B,\xa0what\xa0will\xa0happen?"),(0,i.kt)("br",{parentName:"p"}),"\n","This\xa0situation\xa0is\xa0the\xa0same\xa0as\xa0number\xa04,\xa0both\xa0involve\xa0binding\xa0an\xa0existing\xa0Google\xa0account.  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"6.\xa0Will\xa0newly\xa0generated\xa0UserIDs\xa0be\xa0duplicated?"),(0,i.kt)("br",{parentName:"p"}),"\n","No.\xa0Newly\xa0generated\xa0UserIDs\xa0are\xa0unique\xa0and\xa0will\xa0not\xa0duplicate."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," 7\u3001Can I perform account system verification under Unity Editor?   "),(0,i.kt)("br",{parentName:"p"}),"\n","Yes. Unity Editor can be used for debugging the account system."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," 8\u3001Can I log in to a social account under Unity Editor?   "),(0,i.kt)("br",{parentName:"p"}),"\n","No.\xa0But it can simulate login. Find ",(0,i.kt)("inlineCode",{parentName:"p"},"ToukaGames ->Open GM Panel")," on the Unity Editor toolbar to open the GM interface, select the social login channel that needs to be simulated, fill in a desired UserID, save and restart the game, and then simulate the login and bind the function."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," 9\u3001Can the Android package account system be used normally?   "),(0,i.kt)("br",{parentName:"p"}),"\n","Yes. Android can use all the functions of the account system normally. If you need to simulate login and bind social accounts, you can open the login method and set the simulated userID through the debug panel."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," 10\u3001How to open the Android debug panel?   "),(0,i.kt)("br",{parentName:"p"}),"\n","Firstly, the game needs to be connected to the 'OpenPolicyPop' interface.",(0,i.kt)("br",{parentName:"p"}),"\n","Step 1: Open policy popup",(0,i.kt)("br",{parentName:"p"}),"\n","Step 2: Quickly click on the Title of the compliance pop-up window 5 times, and SDK will automatically close the compliance pop-up window and display a floating small ball on the game interface",(0,i.kt)("br",{parentName:"p"}),"\n","Step 3: Click on the floating ball to display some configuration information for the current game",(0,i.kt)("br",{parentName:"p"}),"\n","Step 4: Long press and hold the 'Close' button in the bottom right corner to display the debug panel"))}p.isMDXComponent=!0},3687:function(e,t,n){t.Z=n.p+"assets/images/01login-7d1064f761d0950848ddf93144da03cd.jpg"},419:function(e,t,n){t.Z=n.p+"assets/images/02bind-9d9976119ec934322f1c39607389b5f9.jpg"},5531:function(e,t,n){t.Z=n.p+"assets/images/03delete_01-b0eecd889da66594d1bdd87971f14add.jpeg"},2466:function(e,t,n){t.Z=n.p+"assets/images/04forcebind-c266e92493c5bc0fafb5be20e3747202.jpg"},3848:function(e,t,n){t.Z=n.p+"assets/images/login01_en-4ccbd2c3b89aece9e3ec4fc1231cabc9.png"},8074:function(e,t,n){t.Z=n.p+"assets/images/login02_en-a125bc8870741efc9522b19e47fac43c.png"}}]);