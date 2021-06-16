(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[54],{2756:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var r=t(4),a=t(31),o=t(30),i=t(2633),c=t(375),s=t(598),u=t(2730),l=t(39),f=t(0);function p(e){var n=e.links,t=e.action,p=e.heading,d=e.moreLink,g=void 0===d?[]:d,b=e.sx,x=Object(a.a)(e,["links","action","heading","moreLink","sx"]);return Object(f.jsxs)(i.a,{sx:b,mb:5,spacing:2,children:[Object(f.jsxs)(i.a,{direction:"row",alignItems:"center",children:[Object(f.jsxs)(c.a,{sx:{flexGrow:1},children:[Object(f.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:p}),Object(f.jsx)(l.c,Object(r.a)({links:n},x))]}),t&&Object(f.jsx)(c.a,{sx:{flexShrink:0},children:t})]}),Object(o.isString)(g)?Object(f.jsx)(u.a,{href:g,target:"_blank",variant:"body2",children:g}):g.map((function(e){return Object(f.jsx)(u.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},4470:function(e,n,t){var r=t(4471),a=t(4472),o=t(4473),i=t(4475);e.exports=function(e,n){return r(e)||a(e,n)||o(e,n)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},4471:function(e,n){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},4472:function(e,n){e.exports=function(e,n){var t=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=t){var r,a,o=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);i=!0);}catch(s){c=!0,a=s}finally{try{i||null==t.return||t.return()}finally{if(c)throw a}}return o}},e.exports.default=e.exports,e.exports.__esModule=!0},4473:function(e,n,t){var r=t(4474);e.exports=function(e,n){if(e){if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},4474:function(e,n){e.exports=function(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r},e.exports.default=e.exports,e.exports.__esModule=!0},4475:function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},4599:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return A}));var r=t(8),a=t(375),o=t(2739),i=t(2750),c=t(2699),s=t(2749),u=t(2705),l=t(598),f=t(20),p=t(4470),d=t.n(p),g=t(390),b=t.n(g),x=t(1),h=t(2648);function j(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var v={};function m(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"===typeof n[0]&&v[n[0]]||("string"===typeof n[0]&&(v[n[0]]=new Date),j.apply(void 0,n))}function y(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function O(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return m("i18n.languages were undefined or empty",n.languages),!0;var r=n.languages[0],a=!!n.options&&n.options.fallbackLng,o=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var i=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!i(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||(!n.services.backendConnector.backend||!(!i(r,e)||a&&!i(o,e))))}function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){b()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var _=[{value:"en",label:"English",icon:"/static/icons/ic_flag_en.svg"},{value:"de",label:"German",icon:"/static/icons/ic_flag_de.svg"},{value:"fr",label:"French",icon:"/static/icons/ic_flag_fr.svg"}];function L(){var e=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=Object(x.useContext)(h.a)||{},a=r.i18n,o=r.defaultNS,i=t||a||Object(h.d)();if(i&&!i.reportNamespaces&&(i.reportNamespaces=new h.b),!i){m("You will need to pass in an i18next instance by using initReactI18next");var c=function(e){return Array.isArray(e)?e[e.length-1]:e},s=[c,{},!1];return s.t=c,s.i18n={},s.ready=!1,s}i.options.react&&void 0!==i.options.react.wait&&m("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var u=k(k(k({},Object(h.c)()),i.options.react),n),l=u.useSuspense,f=e||o||i.options&&i.options.defaultNS;f="string"===typeof f?[f]:f||["translation"],i.reportNamespaces.addUsedNamespaces&&i.reportNamespaces.addUsedNamespaces(f);var p=(i.isInitialized||i.initializedStoreOnce)&&f.every((function(e){return O(e,i,u)}));function g(){return i.getFixedT(null,"fallback"===u.nsMode?f:f[0])}var b=Object(x.useState)(g),j=d()(b,2),v=j[0],w=j[1],_=Object(x.useRef)(!0);Object(x.useEffect)((function(){var e=u.bindI18n,n=u.bindI18nStore;function t(){_.current&&w(g)}return _.current=!0,p||l||y(i,f,(function(){_.current&&w(g)})),e&&i&&i.on(e,t),n&&i&&i.store.on(n,t),function(){_.current=!1,e&&i&&e.split(" ").forEach((function(e){return i.off(e,t)})),n&&i&&n.split(" ").forEach((function(e){return i.store.off(e,t)}))}}),[i,f.join()]);var L=Object(x.useRef)(!0);Object(x.useEffect)((function(){_.current&&!L.current&&w(g),L.current=!1}),[i]);var S=[v,i,p];if(S.t=v,S.i18n=i,S.ready=p,p)return S;if(!p&&!l)return S;throw new Promise((function(e){y(i,f,(function(){e()}))}))}(),n=e.i18n,t=e.t,r=localStorage.getItem("i18nextLng");return{onChangeLang:function(e){n.changeLanguage(e)},translate:t,currentLang:_.find((function(e){return e.value===r})),allLang:_}}var S=t(378),I=t(2756),C=t(0),M=Object(r.a)(S.a)((function(e){var n=e.theme;return{paddingTop:n.spacing(11),paddingBottom:n.spacing(15)}}));function A(){var e=L(),n=e.allLang,t=e.currentLang,r=e.translate,p=e.onChangeLang;return Object(C.jsxs)(M,{title:"Components: Multi Language | Minimal-UI",children:[Object(C.jsx)(a.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(C.jsx)(o.a,{maxWidth:"lg",children:Object(C.jsx)(I.a,{heading:"Multi Language",links:[{name:"Components",href:f.d.components},{name:"Multi Language"}],moreLink:"https://react.i18next.com"})})}),Object(C.jsx)(o.a,{maxWidth:"lg",children:Object(C.jsxs)(i.a,{sx:{p:3},children:[Object(C.jsx)(c.a,{row:!0,value:t.value,onChange:function(e){return p(e.target.value)},children:n.map((function(e){return Object(C.jsx)(s.a,{value:e.value,label:e.label,control:Object(C.jsx)(u.a,{})},e.label)}))}),Object(C.jsxs)(a.a,{sx:{my:3,display:"flex",alignItems:"center"},children:[Object(C.jsx)(a.a,{component:"img",alt:t.label,src:t.icon,sx:{mr:1}}),Object(C.jsx)(l.a,{variant:"h2",children:r("demo.title")})]}),Object(C.jsx)(l.a,{variant:"body1",children:r("demo.introduction")})]})})]})}}}]);
//# sourceMappingURL=54.639c6e2b.chunk.js.map