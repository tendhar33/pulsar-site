"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[80714],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,b=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(b,o(o({ref:t},d),{},{components:n})):a.createElement(b,o({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={id:"develop-labels",title:"Label strategy"},o=void 0,i={unversionedId:"develop-labels",id:"develop-labels",title:"Label strategy",description:"This guide explains the labels used in the apache/pulsar repository (the main repo).",source:"@site/contribute/develop-labels.md",sourceDirName:".",slug:"/develop-labels",permalink:"/contribute/develop-labels",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/contribute/develop-labels.md",tags:[],version:"current",lastUpdatedBy:"momo-jun",lastUpdatedAt:1673259069,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{id:"develop-labels",title:"Label strategy"},sidebar:"sidebarDevelopment",previous:{title:"Coding conventions",permalink:"/contribute/develop-coding-conventions"},next:{title:"Semantic pull request",permalink:"/contribute/develop-semantic-title"}},p={},s=[{value:"ready-to-test",id:"ready-to-test",level:2},{value:"doc-*",id:"doc-",level:2}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide explains the labels used in the ",(0,r.kt)("a",{parentName:"p",href:"http://github.com/apache/pulsar"},"apache/pulsar")," repository (the main repo)."),(0,r.kt)("h2",{id:"ready-to-test"},"ready-to-test"),(0,r.kt)("p",null,"After ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/17693"},"PR-17693")," merged, pull requests ",(0,r.kt)("strong",{parentName:"p"},"except ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/apache/pulsar/blob/master/.github/changes-filter.yaml#L5"},"docs only changes"))," should be first tested in your own fork since the pulsar CI based on GitHub Actions has constrained resources and quota. GitHub Actions provides separate quota for pull requests that are executed in a forked repository."),(0,r.kt)("p",null,"When a committer believe the PR is ready to test, they will label ",(0,r.kt)("inlineCode",{parentName:"p"},"ready-to-test")," to the PR, and then you can rerun the CI tasks by commenting ",(0,r.kt)("inlineCode",{parentName:"p"},"/pulsarbot run-failure-checks")," and trigger the full CI validation."),(0,r.kt)("p",null,"See also ",(0,r.kt)("a",{parentName:"p",href:"/contribute/personal-ci"},"CI Testing in Fork"),"."),(0,r.kt)("h2",{id:"doc-"},"doc-*"),(0,r.kt)("p",null,"When submitting an issue or PR, you must ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/.github/PULL_REQUEST_TEMPLATE.md#documentation"},"choose one of the documentation checkboxes"),", so the automation can label the PR correctly."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Label"),(0,r.kt)("th",{parentName:"tr",align:null},"Usage"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"doc-not-needed")),(0,r.kt)("td",{parentName:"tr",align:null},"Your PR changes do not impact docs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"doc")),(0,r.kt)("td",{parentName:"tr",align:null},"Your PR contains doc changes, no matter whether the changes are in markdown or code files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"doc-required")),(0,r.kt)("td",{parentName:"tr",align:null},"Your PR changes impact docs and you will update later.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"doc-complete")),(0,r.kt)("td",{parentName:"tr",align:null},"Your PR changes impact docs and the related docs have been already added.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"doc-label-missing")),(0,r.kt)("td",{parentName:"tr",align:null},"The Bot applies this label when there is no doc label information in the PR if one of the following conditions is met: ",(0,r.kt)("br",null),(0,r.kt)("li",null,"You do not provide a doc label."),(0,r.kt)("li",null,"You provide multiple doc labels."),(0,r.kt)("li",null,"You delete backticks (``) in doc labels."),(0,r.kt)("li",null,"You add blanks in square brackets."))))))}c.isMDXComponent=!0}}]);