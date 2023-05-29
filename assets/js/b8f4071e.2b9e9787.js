"use strict";(self.webpackChunkkocitydocs=self.webpackChunkkocitydocs||[]).push([[135],{4137:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>f});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=o.createContext({}),u=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=u(t.components);return o.createElement(c.Provider,{value:e},t.children)},l="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),l=u(n),d=r,f=l["".concat(c,".").concat(d)]||l[d]||h[d]||i;return n?o.createElement(f,a(a({ref:e},p),{},{components:n})):o.createElement(f,a({ref:e},p))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[l]="string"==typeof t?t:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},308:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=n(7462),r=(n(7294),n(4137));const i={sidebar_position:1},a="API Intro",s={unversionedId:"API/intro",id:"API/intro",title:"API Intro",description:"So to start off, welcome to the API documentation for the unofficial Knockout City Build that I have been working on for the last few months. At this point, Knockout City hasn't yet shutdown the public servers and i want to get this done before that happens.",source:"@site/docs/API/intro.md",sourceDirName:"API",slug:"/API/intro",permalink:"/docs/API/intro",draft:!1,editUrl:"https://github.com/Ipmake/kocitydocs/tree/master/docs/API/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"API docs",permalink:"/docs/category/api-docs"},next:{title:"Endpoint",permalink:"/docs/API/Endpoint"}},c={},u=[{value:"What&#39;s the point of the API?",id:"whats-the-point-of-the-api",level:2},{value:"How does it authenticate?",id:"how-does-it-authenticate",level:3},{value:"Can i use the API for my own projects?",id:"can-i-use-the-api-for-my-own-projects",level:3}],p={toc:u},l="wrapper";function h(t){let{components:e,...n}=t;return(0,r.kt)(l,(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api-intro"},"API Intro"),(0,r.kt)("p",null,"So to start off, welcome to the API documentation for the unofficial Knockout City Build that I have been working on for the last few months. At this point, Knockout City hasn't yet shutdown the public servers and i want to get this done before that happens. "),(0,r.kt)("h2",{id:"whats-the-point-of-the-api"},"What's the point of the API?"),(0,r.kt)("p",null,"So the point of the API is mainly to enpower the launcher that i made as well to support authentication using discord as the primary platform. "),(0,r.kt)("h3",{id:"how-does-it-authenticate"},"How does it authenticate?"),(0,r.kt)("p",null,"The API authenticates using an auth token that is generated upon first login. This token is then used to authenticate the user for all future requests. This token is stored in the database and is used to authenticate the user before joining a server."),(0,r.kt)("h3",{id:"can-i-use-the-api-for-my-own-projects"},"Can i use the API for my own projects?"),(0,r.kt)("p",null,"Theoretically yes, but its important for me when building everything that i keep everything up to a certain standard that fits new users and prevents the Knockout City community from splitting up into multiple different communities based on the launcher that they use, and the servers that they can play on."))}h.isMDXComponent=!0}}]);