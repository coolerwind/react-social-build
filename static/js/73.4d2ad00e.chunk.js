(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[73],{2808:function(e,t){t.__esModule=!0,t.default={body:'<path fill="currentColor" d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8a7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6a6 6 0 0 1-6-6z"/>',width:24,height:24}},3035:function(e,t,a){"use strict";var n=a(1),r=n.createContext({});t.a=r},4484:function(e,t,a){"use strict";var n=a(405),r=a(401),i=a(178),o=a(406);var s=a(17),c=a(6),d=a(7),l=a(2),u=a(1),b=(a(198),a(12),a(11)),j=a(2686),p=a(8),x=a(14),m=a(2726),h=a(2733),O=a(3035),f=a(106),g=a(2627),v=a(2687);function y(e){return Object(g.a)("MuiAccordion",e)}var R=Object(v.a)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),w=a(0),k=Object(p.a)(h.a,{},{name:"MuiAccordion",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return Object(l.a)(Object(c.a)({},"& .".concat(R.region),t.region),t.root,!a.square&&t.rounded,!a.disableGutters&&t.gutters)}})((function(e){var t,a=e.theme,n={duration:a.transitions.duration.shortest};return t={position:"relative",transition:a.transitions.create(["margin"],n),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:a.palette.divider,transition:a.transitions.create(["opacity","background-color"],n)},"&:first-of-type":{"&:before":{display:"none"}}},Object(c.a)(t,"&.".concat(R.expanded),{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}}),Object(c.a)(t,"&.".concat(R.disabled),{backgroundColor:a.palette.action.disabledBackground}),t}),(function(e){var t=e.theme,a=e.styleProps;return Object(l.a)({},!a.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:t.shape.borderRadius,borderTopRightRadius:t.shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:t.shape.borderRadius,borderBottomRightRadius:t.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!a.disableGutters&&Object(c.a)({},"&.".concat(R.expanded),{margin:"16px 0"}))})),A=u.forwardRef((function(e,t){var a,c=Object(x.a)({props:e,name:"MuiAccordion"}),p=c.children,h=c.className,g=c.defaultExpanded,v=void 0!==g&&g,R=c.disabled,A=void 0!==R&&R,C=c.disableGutters,M=void 0!==C&&C,q=c.expanded,N=c.onChange,G=c.square,I=void 0!==G&&G,P=c.TransitionComponent,S=void 0===P?m.a:P,W=c.TransitionProps,T=Object(d.a)(c,["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"]),V=Object(f.a)({controlled:q,default:v,name:"Accordion",state:"expanded"}),_=Object(s.a)(V,2),B=_[0],D=_[1],z=u.useCallback((function(e){D(!B),N&&N(e,!B)}),[B,N,D]),E=u.Children.toArray(p),H=(a=E,Object(n.a)(a)||Object(r.a)(a)||Object(i.a)(a)||Object(o.a)()),L=H[0],F=H.slice(1),J=u.useMemo((function(){return{expanded:B,disabled:A,disableGutters:M,toggle:z}}),[B,A,M,z]),Q=Object(l.a)({},c,{square:I,disabled:A,disableGutters:M,expanded:B}),U=function(e){var t=e.classes,a={root:["root",!e.square&&"rounded",e.expanded&&"expanded",e.disabled&&"disabled",!e.disableGutters&&"gutters"],region:["region"]};return Object(j.a)(a,y,t)}(Q);return Object(w.jsxs)(k,Object(l.a)({className:Object(b.a)(U.root,h),ref:t,styleProps:Q,square:I},T,{children:[Object(w.jsx)(O.a.Provider,{value:J,children:L}),Object(w.jsx)(S,Object(l.a)({in:B,timeout:"auto"},W,{children:Object(w.jsx)("div",{"aria-labelledby":L.props.id,id:L.props["aria-controls"],role:"region",className:U.region,children:F})}))]}))}));t.a=A},4489:function(e,t,a){"use strict";var n=a(6),r=a(7),i=a(2),o=a(1),s=(a(12),a(11)),c=a(2686),d=a(8),l=a(14),u=a(2707),b=a(3035),j=a(2627),p=a(2687);function x(e){return Object(j.a)("MuiAccordionSummary",e)}var m=Object(p.a)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),h=a(0),O=Object(d.a)(u.a,{},{name:"MuiAccordionSummary",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,a=e.theme,r=e.styleProps,o={duration:a.transitions.duration.shortest};return Object(i.a)((t={display:"flex",minHeight:48,padding:a.spacing(0,2),transition:a.transitions.create(["min-height","background-color"],o)},Object(n.a)(t,"&.".concat(m.focusVisible),{backgroundColor:a.palette.action.focus}),Object(n.a)(t,"&.".concat(m.disabled),{opacity:a.palette.action.disabledOpacity}),Object(n.a)(t,"&:hover:not(.".concat(m.disabled,")"),{cursor:"pointer"}),t),!r.disableGutters&&Object(n.a)({},"&.".concat(m.expanded),{minHeight:64}))})),f=Object(d.a)("div",{},{name:"MuiAccordionSummary",slot:"Content",overridesResolver:function(e,t){return t.content}})((function(e){var t=e.theme,a=e.styleProps;return Object(i.a)({display:"flex",flexGrow:1,margin:"12px 0"},!a.disableGutters&&Object(n.a)({transition:t.transitions.create(["margin"],{duration:t.transitions.duration.shortest})},"&.".concat(m.expanded),{margin:"20px 0"}))})),g=Object(d.a)("div",{},{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:function(e,t){return t.expandIconWrapper}})((function(e){var t=e.theme;return Object(n.a)({display:"flex",color:t.palette.action.active,transform:"rotate(0deg)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})},"&.".concat(m.expanded),{transform:"rotate(180deg)"})})),v=o.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiAccordionSummary"}),n=a.children,d=a.className,u=a.expandIcon,j=a.focusVisibleClassName,p=a.onClick,m=Object(r.a)(a,["children","className","expandIcon","focusVisibleClassName","onClick"]),v=o.useContext(b.a),y=v.disabled,R=void 0!==y&&y,w=v.disableGutters,k=v.expanded,A=v.toggle,C=Object(i.a)({},a,{expanded:k,disabled:R,disableGutters:w}),M=function(e){var t=e.classes,a=e.expanded,n=e.disabled,r=e.disableGutters,i={root:["root",a&&"expanded",n&&"disabled",!r&&"gutters"],focusVisible:["focusVisible"],content:["content",a&&"expanded",!r&&"contentGutters"],expandIconWrapper:["expandIconWrapper",a&&"expanded"]};return Object(c.a)(i,x,t)}(C);return Object(h.jsxs)(O,Object(i.a)({focusRipple:!1,disableRipple:!0,disabled:R,component:"div","aria-expanded":k,className:Object(s.a)(M.root,d),focusVisibleClassName:Object(s.a)(M.focusVisible,j),onClick:function(e){A&&A(e),p&&p(e)},ref:t,styleProps:C},m,{children:[Object(h.jsx)(f,{className:M.content,styleProps:C,children:n}),u&&Object(h.jsx)(g,{className:M.expandIconWrapper,styleProps:C,children:u})]}))}));t.a=v},4490:function(e,t,a){"use strict";var n=a(2),r=a(7),i=a(1),o=(a(12),a(11)),s=a(2686),c=a(8),d=a(14),l=a(2627),u=a(2687);function b(e){return Object(l.a)("MuiAccordionDetails",e)}Object(u.a)("MuiAccordionDetails",["root"]);var j=a(0),p=Object(c.a)("div",{},{name:"MuiAccordionDetails",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){return{padding:e.theme.spacing(1,2,2)}})),x=i.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiAccordionDetails"}),i=a.className,c=Object(r.a)(a,["className"]),l=Object(n.a)({},a),u=function(e){var t=e.classes;return Object(s.a)({root:["root"]},b,t)}(l);return Object(j.jsx)(p,Object(n.a)({className:Object(o.a)(u.root,i),ref:t,styleProps:l},c))}));t.a=x},4590:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return E}));var n=a(6),r=a(8),i=a(2739),o=a(598),s=a(2719),c=a(378),d=a(2701),l=a(27),u=a(2808),b=a.n(u),j=a(2720),p=a(25),x=a(375),m=a(2748),h=a(164),O=a(0),f=Object(r.a)(d.a.div)((function(e){var t=e.theme;return Object(n.a)({backgroundSize:"cover",backgroundImage:"url(/static/overlay.svg), url(/static/faqs/hero.jpg)",padding:t.spacing(10,0)},t.breakpoints.up("md"),{height:560,padding:0})})),g=Object(r.a)("div")((function(e){var t=e.theme;return Object(n.a)({textAlign:"center"},t.breakpoints.up("md"),{textAlign:"left",position:"absolute",bottom:t.spacing(10)})})),v=Object(r.a)(j.a)((function(e){var t=e.theme;return{width:320,color:t.palette.common.white,transition:t.transitions.create(["box-shadow","width"],{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter}),"&.Mui-focused":Object(n.a)({backgroundColor:Object(p.a)(t.palette.common.white,.04)},t.breakpoints.up("md"),{width:480}),"& fieldset":{borderWidth:"1px !important",borderColor:"".concat(t.palette.grey[50032]," !important")}}}));function y(){return Object(O.jsx)(f,{initial:"initial",animate:"animate",variants:h.eb,children:Object(O.jsx)(i.a,{maxWidth:"lg",sx:{position:"relative",height:"100%"},children:Object(O.jsxs)(g,{children:[Object(O.jsx)(h.e,{text:"How",sx:{color:"primary.main"},variants:h.w}),Object(O.jsx)("br",{}),Object(O.jsxs)(x.a,{sx:{display:"inline-flex",color:"common.white"},children:[Object(O.jsx)(h.e,{text:"can",sx:{mr:2}}),Object(O.jsx)(h.e,{text:"we",sx:{mr:2}}),Object(O.jsx)(h.e,{text:"help",sx:{mr:2}}),Object(O.jsx)(h.e,{text:"you?"})]}),Object(O.jsx)(h.d,{variants:h.x,sx:{mt:5},children:Object(O.jsx)(v,{placeholder:"Search support",startAdornment:Object(O.jsx)(m.a,{position:"start",children:Object(O.jsx)(x.a,{component:l.Icon,icon:b.a,sx:{color:"text.disabled"}})})})})]})})})}var R=a(19),w=a(5),k=a.n(w),A=a(105),C=a.n(A),M=a(4484),q=a(4489),N=a(4490),G=Object(R.a)(Array(8)).map((function(e,t){var a=t+1;return{value:"panel".concat(a),heading:"Questions ".concat(a),subHeading:k.a.lorem.slug(),detail:k.a.lorem.lines()}}));function I(){return Object(O.jsx)(h.d,{variants:h.t,children:G.map((function(e){return Object(O.jsxs)(M.a,{children:[Object(O.jsx)(q.a,{expandIcon:Object(O.jsx)(l.Icon,{icon:C.a,width:20,height:20}),children:Object(O.jsx)(o.a,{variant:"subtitle1",children:e.heading})}),Object(O.jsx)(N.a,{children:Object(O.jsx)(o.a,{children:e.detail})})]},e.value)}))})}var P=a(2633),S=a(2743),W=a(297);function T(){return Object(O.jsxs)(P.a,{spacing:3,children:[Object(O.jsx)(h.d,{variants:h.x,children:Object(O.jsx)(o.a,{variant:"h4",children:"Haven't found the right help?"})}),Object(O.jsx)(h.d,{variants:h.x,children:Object(O.jsx)(S.a,{fullWidth:!0,label:"Name"})}),Object(O.jsx)(h.d,{variants:h.x,children:Object(O.jsx)(S.a,{fullWidth:!0,label:"Email"})}),Object(O.jsx)(h.d,{variants:h.x,children:Object(O.jsx)(S.a,{fullWidth:!0,label:"Subject"})}),Object(O.jsx)(h.d,{variants:h.x,children:Object(O.jsx)(S.a,{fullWidth:!0,label:"Enter your message here.",multiline:!0,rows:4})}),Object(O.jsx)(h.d,{variants:h.x,children:Object(O.jsx)(W.a,{size:"large",variant:"contained",children:"Submit Now"})})]})}var V=a(2733),_=[{label:"Managing your account",icon:"/static/faqs/ic_account.svg",href:"#"},{label:"Payment",icon:"/static/faqs/ic_payment.svg",href:"#"},{label:"Delivery",icon:"/static/faqs/ic_delivery.svg",href:"#"},{label:"Problem with the Product",icon:"/static/faqs/ic_package.svg",href:"#"},{label:"Return & Refund",icon:"/static/faqs/ic_refund.svg",href:"#"},{label:"Guarantees and assurances",icon:"/static/faqs/ic_assurances.svg",href:"#"}];function B(e){var t=e.category,a=t.label,n=t.icon;return Object(O.jsxs)(V.a,{sx:{px:2,height:260,display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center",boxShadow:function(e){return e.customShadows.z8}},children:[Object(O.jsx)(x.a,{component:"img",src:n,sx:{mb:2,width:80,height:80}}),Object(O.jsx)(o.a,{variant:"subtitle2",children:a})]})}function D(){return Object(O.jsx)(s.a,{container:!0,spacing:3,sx:{mb:15},children:_.map((function(e){return Object(O.jsx)(s.a,{item:!0,xs:12,sm:4,md:2,children:Object(O.jsx)(h.d,{variants:h.t,children:Object(O.jsx)(B,{category:e})})},e.label)}))})}var z=Object(r.a)(c.a)((function(e){var t=e.theme;return Object(n.a)({paddingTop:t.spacing(8)},t.breakpoints.up("md"),{paddingTop:t.spacing(11)})}));function E(){return Object(O.jsxs)(z,{title:"Faqs | Minimal-UI",children:[Object(O.jsx)(y,{}),Object(O.jsxs)(i.a,{sx:{mt:15,mb:10},children:[Object(O.jsx)(D,{}),Object(O.jsx)(o.a,{variant:"h3",sx:{mb:5},children:"Frequently asked questions"}),Object(O.jsxs)(s.a,{container:!0,spacing:10,children:[Object(O.jsx)(s.a,{item:!0,xs:12,md:6,children:Object(O.jsx)(I,{})}),Object(O.jsx)(s.a,{item:!0,xs:12,md:6,children:Object(O.jsx)(T,{})})]})]})]})}}}]);
//# sourceMappingURL=73.4d2ad00e.chunk.js.map