(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),m=a,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||i;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(106)),o={title:"Upload a site to Meli",sitebarTitle:"Upload a site",description:"Learn how to upload a site to Meli"},c={unversionedId:"get-started/upload-site",id:"get-started/upload-site",isDocsHomePage:!1,title:"Upload a site to Meli",description:"Learn how to upload a site to Meli",source:"@site/docs/get-started/upload-site.md",slug:"/get-started/upload-site",permalink:"/get-started/upload-site",editUrl:"https://github.com/getmeli/meli-docs/edit/latest/docs/get-started/upload-site.md",version:"current",sidebar:"docs",previous:{title:"Installation",permalink:"/get-started/installation"},next:{title:"Branches",permalink:"/get-started/branches"}},p=[{value:"Github Actions",id:"github-actions",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In the UI, create a site, say ",Object(i.b)("inlineCode",{parentName:"p"},"my-site"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In ",Object(i.b)("inlineCode",{parentName:"p"},"my-site"),", go to the ",Object(i.b)("strong",{parentName:"p"},"Tokens")," tab and copy a token")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In ",Object(i.b)("inlineCode",{parentName:"p"},"my-site"),", go to the ",Object(i.b)("strong",{parentName:"p"},"Settings")," tab, and copy the ",Object(i.b)("strong",{parentName:"p"},"Site ID"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Assuming your static site has been built into a directory named ",Object(i.b)("inlineCode",{parentName:"p"},"public"),", run:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'npx -p "@getmeli/cli" meli upload \\\n   ./public \\\n    --url http://localhost:80 \\\n    --site <site-id> \\\n    --token <site-token> \\\n    --branch "latest"\n'))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Your site is now live at ",Object(i.b)("inlineCode",{parentName:"p"},"https://latest.my-site.meli.my-company.com")," and ",Object(i.b)("inlineCode",{parentName:"p"},"https://my-site.meli.my-company.com"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Point your domain to the site in meli. If you are pointing ",Object(i.b)("inlineCode",{parentName:"p"},"sub.domain.com")," to a meli site, you can add a ",Object(i.b)("inlineCode",{parentName:"p"},"CNAME")," DNS record to point ",Object(i.b)("inlineCode",{parentName:"p"},"sub.domain.com")," to ",Object(i.b)("inlineCode",{parentName:"p"},"my-site.meli.my-company.com"),". If you are pointing a primary domain (",Object(i.b)("inlineCode",{parentName:"p"},"domain.com"),"), you have to create a DNS ",Object(i.b)("inlineCode",{parentName:"p"},"A")," record ppointing to the ",Object(i.b)("strong",{parentName:"p"},"IP")," where Meli serves your sites."))),Object(i.b)("h2",{id:"github-actions"},"Github Actions"),Object(i.b)("p",null,"Add a repository secret named ",Object(i.b)("inlineCode",{parentName:"p"},"MELI_TOKEN")," with a Meli token for your site, then update your build workflow:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'name: main\non: [ push ]\nenv:\n  MELI_SITE: "6d09389c-5cb7-4839-ba4b-a0ff75c12851"\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - uses: actions/setup-node@v1\n        with:\n          node-version: \'12\'\n      - name: "build"\n        run: |\n          npm ci\n          npm run build\n      - name: "publish"\n        run: |\n          npx -p "@getmeli/cli" meli upload ./public \\\n            --url "https://meli.my-company.com" \\\n            --site "$MELI_SITE" \\\n            --token "$MELI_TOKEN" \\\n            --release "$GITHUB_SHA"\n        env:\n          MELI_TOKEN: ${{ secrets.MELI_TOKEN }}\n          # Enable PR previews:\n          # uses the default GITHUB_TOKEN set by Github Actions\n          # https://docs.github.com/en/actions/reference/authentication-in-a-workflow#about-the-github_token-secret\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n')))}s.isMDXComponent=!0}}]);