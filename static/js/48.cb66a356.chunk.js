(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[48],{2756:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(4),r=a(31),c=a(30),i=a(2633),l=a(375),o=a(598),s=a(2730),u=a(39),d=a(0);function b(e){var t=e.links,a=e.action,b=e.heading,j=e.moreLink,v=void 0===j?[]:j,x=e.sx,h=Object(r.a)(e,["links","action","heading","moreLink","sx"]);return Object(d.jsxs)(i.a,{sx:x,mb:5,spacing:2,children:[Object(d.jsxs)(i.a,{direction:"row",alignItems:"center",children:[Object(d.jsxs)(l.a,{sx:{flexGrow:1},children:[Object(d.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:b}),Object(d.jsx)(u.c,Object(n.a)({links:t},h))]}),a&&Object(d.jsx)(l.a,{sx:{flexShrink:0},children:a})]}),Object(c.isString)(v)?Object(d.jsx)(s.a,{href:v,target:"_blank",variant:"body2",children:v}):v.map((function(e){return Object(d.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},2759:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return u}));var n=a(4),r=a(598),c=a(2750),i=a(2768),l=a(375),o=a(0);function s(e){var t=e.title;return Object(o.jsx)(r.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function u(e){var t=e.title,a=e.sx,r=e.children;return Object(o.jsxs)(c.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(o.jsx)(i.a,{title:t}),Object(o.jsx)(l.a,{sx:Object(n.a)({p:3,minHeight:180},a),children:r})]})}},2768:function(e,t,a){"use strict";var n=a(6),r=a(7),c=a(2),i=a(1),l=(a(12),a(11)),o=a(2686),s=a(598),u=a(14),d=a(8),b=a(2627),j=a(2687);function v(e){return Object(b.a)("MuiCardHeader",e)}var x=Object(j.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),h=a(0),O=Object(d.a)("div",{},{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(c.a)((a={},Object(n.a)(a,"& .".concat(x.title),t.title),Object(n.a)(a,"& .".concat(x.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),f=Object(d.a)("div",{},{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),p=Object(d.a)("div",{},{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),m=Object(d.a)("div",{},{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),g=i.forwardRef((function(e,t){var a=Object(u.a)({props:e,name:"MuiCardHeader"}),n=a.action,i=a.avatar,d=a.className,b=a.component,j=void 0===b?"div":b,x=a.disableTypography,g=void 0!==x&&x,y=a.subheader,P=a.subheaderTypographyProps,T=a.title,C=a.titleTypographyProps,w=Object(r.a)(a,["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),M=Object(c.a)({},a,{component:j,disableTypography:g}),k=function(e){var t=e.classes;return Object(o.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},v,t)}(M),I=T;null==I||I.type===s.a||g||(I=Object(h.jsx)(s.a,Object(c.a)({variant:i?"body2":"h5",className:k.title,component:"span",display:"block"},C,{children:I})));var N=y;return null==N||N.type===s.a||g||(N=Object(h.jsx)(s.a,Object(c.a)({variant:i?"body2":"body1",className:k.subheader,color:"text.secondary",component:"span",display:"block"},P,{children:N}))),Object(h.jsxs)(O,Object(c.a)({className:Object(l.a)(k.root,d),as:j,ref:t,styleProps:M},w,{children:[i&&Object(h.jsx)(f,{className:k.avatar,styleProps:M,children:i}),Object(h.jsxs)(m,{className:k.content,styleProps:M,children:[I,N]}),n&&Object(h.jsx)(p,{className:k.action,styleProps:M,children:n})]}))}));t.a=g},2996:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"d",(function(){return o})),a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return u}));var n=a(17),r=a(1),c=(a(12),a(0)),i=r.createContext(null);function l(e){var t=e.children,a=e.value,l=function(){var e=r.useState(null),t=Object(n.a)(e,2),a=t[0],c=t[1];return r.useEffect((function(){c("mui-p-".concat(Math.round(1e5*Math.random())))}),[]),a}(),o=r.useMemo((function(){return{idPrefix:l,value:a}}),[l,a]);return Object(c.jsx)(i.Provider,{value:o,children:t})}function o(){return r.useContext(i)}function s(e,t){return null===e.idPrefix?null:"".concat(e.idPrefix,"-P-").concat(t)}function u(e,t){return null===e.idPrefix?null:"".concat(e.idPrefix,"-T-").concat(t)}},2997:function(e,t,a){"use strict";var n=a(2),r=a(7),c=a(1),i=(a(12),a(4588)),l=a(2996),o=a(0),s=c.forwardRef((function(e,t){var a=e.children,s=Object(r.a)(e,["children"]),u=Object(l.d)();if(null===u)throw new TypeError("No TabContext provided");var d=c.Children.map(a,(function(e){return c.isValidElement(e)?c.cloneElement(e,{"aria-controls":Object(l.b)(u,e.props.value),id:Object(l.c)(u,e.props.value)}):null}));return Object(o.jsx)(i.a,Object(n.a)({},s,{ref:t,value:u.value,children:d}))}));t.a=s},3039:function(e,t,a){"use strict";var n=a(601),r=a(600);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(a(1));var c=n(a(604)),i=a(0),l=(0,c.default)((0,i.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");t.default=l},3049:function(e,t,a){"use strict";var n=a(2),r=a(7),c=a(1),i=(a(12),a(11)),l=a(8),o=a(14),s=a(2686),u=a(2627),d=a(2687);function b(e){return Object(u.a)("MuiTabPanel",e)}Object(d.a)("MuiTabPanel",["root"]);var j=a(2996),v=a(0),x=Object(l.a)("div",{},{name:"MuiTabPanel",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){return{padding:e.theme.spacing(3)}})),h=c.forwardRef((function(e,t){var a=Object(o.a)({props:e,name:"MuiTabPanel"}),c=a.children,l=a.className,u=a.value,d=Object(r.a)(a,["children","className","value"]),h=Object(n.a)({},a),O=function(e){var t=e.classes;return Object(s.a)({root:["root"]},b,t)}(h),f=Object(j.d)();if(null===f)throw new TypeError("No TabContext provided");var p=Object(j.b)(f,u),m=Object(j.c)(f,u);return Object(v.jsx)(x,Object(n.a)({"aria-labelledby":m,className:Object(i.a)(O.root,l),hidden:u!==f.value,id:p,ref:t,role:"tabpanel",styleProps:h},d,{children:u===f.value&&c}))}));t.a=h},4457:function(e,t,a){"use strict";var n=a(601),r=a(600);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(a(1));var c=n(a(604)),i=a(0),l=(0,c.default)((0,i.jsx)("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}),"Phone");t.default=l},4458:function(e,t,a){"use strict";var n=a(601),r=a(600);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(a(1));var c=n(a(604)),i=a(0),l=(0,c.default)((0,i.jsx)("path",{d:"M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11c0-4.97-4.03-9-9-9zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.3c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"}),"PersonPin");t.default=l},4559:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return I}));var n=a(17),r=a(1),c=a(4457),i=a.n(c),l=a(3039),o=a.n(l),s=a(4458),u=a.n(s),d=a(8),b=a(375),j=a(2739),v=a(2633),x=a(4621),h=a(4588),O=a(2996),f=a(2997),p=a(3049),m=a(20),g=a(378),y=a(2756),P=a(2759),T=a(0),C={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}},w=[{value:"1",icon:Object(T.jsx)(i.a,{}),label:"Item One",disabled:!1},{value:"2",icon:Object(T.jsx)(o.a,{}),label:"Item Two",disabled:!1},{value:"3",icon:Object(T.jsx)(u.a,{}),label:"Item Three",disabled:!0}],M=[{value:"1",icon:Object(T.jsx)(i.a,{}),label:"Item 1"},{value:"2",icon:Object(T.jsx)(o.a,{}),label:"Item 2"},{value:"3",icon:Object(T.jsx)(u.a,{}),label:"Item 3"},{value:"4",icon:Object(T.jsx)(u.a,{}),label:"Item 4"},{value:"5",icon:Object(T.jsx)(u.a,{}),label:"Item 5"},{value:"6",icon:Object(T.jsx)(u.a,{}),label:"Item 6"},{value:"7",icon:Object(T.jsx)(u.a,{}),label:"Item 7"}],k=Object(d.a)(g.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function I(){var e=Object(r.useState)("1"),t=Object(n.a)(e,2),a=t[0],c=t[1],i=Object(r.useState)("1"),l=Object(n.a)(i,2),o=l[0],s=l[1],u=function(e,t){c(t)};return Object(T.jsxs)(k,{title:"Components: Tabs | Minimal-UI",children:[Object(T.jsx)(b.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(T.jsx)(j.a,{maxWidth:"lg",children:Object(T.jsx)(y.a,{heading:"Tabs",links:[{name:"Components",href:m.d.components},{name:"Tabs"}],moreLink:"https://next.material-ui.com/components/tabs"})})}),Object(T.jsx)(j.a,{maxWidth:"lg",children:Object(T.jsxs)(v.a,{spacing:3,children:[Object(T.jsxs)(v.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(T.jsx)(P.a,{title:"Text",sx:C,children:Object(T.jsxs)(O.a,{value:a,children:[Object(T.jsx)(f.a,{onChange:u,children:w.map((function(e,t){return Object(T.jsx)(x.a,{label:e.label,value:String(t+1)},e.value)}))}),Object(T.jsx)(b.a,{sx:{p:2,mt:2,height:80,width:"100%",borderRadius:1,bgcolor:"grey.50012"},children:w.map((function(e,t){return Object(T.jsx)(p.a,{value:String(t+1),children:e.label},e.value)}))})]})}),Object(T.jsx)(P.a,{title:"Icon",sx:C,children:Object(T.jsx)(h.a,{value:a,onChange:u,children:w.map((function(e){return Object(T.jsx)(x.a,{icon:e.icon,value:e.value},e.value)}))})})]}),Object(T.jsxs)(v.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(T.jsx)(P.a,{title:"Text & Icon",sx:C,children:Object(T.jsx)(O.a,{value:a,children:Object(T.jsx)(f.a,{onChange:u,children:w.map((function(e){return Object(T.jsx)(x.a,{icon:e.icon,label:e.label,value:e.value,disabled:e.disabled},e.value)}))})})}),Object(T.jsx)(P.a,{title:"Scrollable",sx:C,children:Object(T.jsx)(b.a,{sx:{flexGrow:1,width:"100%",maxWidth:320},children:Object(T.jsx)(h.a,{allowScrollButtonsMobile:!0,value:o,variant:"scrollable",scrollButtons:"auto",onChange:function(e,t){s(t)},children:M.map((function(e){return Object(T.jsx)(x.a,{label:e.label,value:e.value},e.value)}))})})})]})]})})]})}}}]);
//# sourceMappingURL=48.cb66a356.chunk.js.map