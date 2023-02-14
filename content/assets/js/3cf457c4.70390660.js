"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[70082],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},32273:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={id:"client-libraries-dotnet",title:"Pulsar C# client",sidebar_label:"C# client"},l=void 0,o={unversionedId:"client-libraries-dotnet",id:"client-libraries-dotnet",title:"Pulsar C# client",description:"You can use the Pulsar C# client (DotPulsar) to create Pulsar producers, consumers, and readers in C#. All the methods in the producer, consumer, and reader of a C# client are thread-safe.",source:"@site/docs/client-libraries-dotnet.md",sourceDirName:".",slug:"/client-libraries-dotnet",permalink:"/docs/next/client-libraries-dotnet",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/client-libraries-dotnet.md",tags:[],version:"current",frontMatter:{id:"client-libraries-dotnet",title:"Pulsar C# client",sidebar_label:"C# client"},sidebar:"docsSidebar",previous:{title:"Use",permalink:"/docs/next/client-libraries-node-use"},next:{title:"Set up",permalink:"/docs/next/client-libraries-dotnet-setup"}},c={},s=[{value:"Get started",id:"get-started",level:2},{value:"What&#39;s next?",id:"whats-next",level:2},{value:"Reference doc",id:"reference-doc",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can use the Pulsar C# client (DotPulsar) to create Pulsar ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/concepts-clients#producer"},"producers"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/concepts-clients#consumer"},"consumers"),", and ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/concepts-clients#reader"},"readers")," in C#. All the methods in the producer, consumer, and reader of a C# client are thread-safe."),(0,a.kt)("h2",{id:"get-started"},"Get started"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-dotnet-setup"},"Set up C# client library")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-dotnet-initialize"},"Initialize a C# client")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-dotnet-use"},"Use a C# client"))),(0,a.kt)("h2",{id:"whats-next"},"What's next?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-clients"},"Work with clients")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-producers"},"Work with producers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-consumers"},"Work with consumers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-readers"},"Work with readers"))),(0,a.kt)("h2",{id:"reference-doc"},"Reference doc"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-dotnet-configs"},"C# client configurations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-dotpulsar/wiki"},"DotPulsar documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1YHYTkIXR8-Ql103u-IMI18TXLlGStK8uJjDsOOA0T20/edit#gid=1784579914"},"Client feature matrix")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/release-notes/client-cs"},"Release notes"))))}d.isMDXComponent=!0}}]);