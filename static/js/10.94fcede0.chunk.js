(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[10],{2889:function(t,e,i){"use strict";i.d(e,"j",(function(){return l})),i.d(e,"g",(function(){return v})),i.d(e,"h",(function(){return k})),i.d(e,"i",(function(){return N})),i.d(e,"a",(function(){return K})),i.d(e,"b",(function(){return Y})),i.d(e,"c",(function(){return _})),i.d(e,"d",(function(){return nt})),i.d(e,"e",(function(){return lt})),i.d(e,"f",(function(){return gt})),i.d(e,"k",(function(){return Pt}));var n=i(4),r=i(31),c=i(8),a=i(375),o=i(0),s=Object(c.a)("ul")((function(t){var e=t.theme;return{display:"flex",listStyle:"none",alignItems:"center",position:"absolute",right:e.spacing(3),bottom:e.spacing(3),"& li":{width:18,height:18,opacity:.32,cursor:"pointer","&.slick-active":{opacity:1}}}}));function l(t){var e=t.color,i=Object(r.a)(t,["color"]);return{appendDots:function(t){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(s,Object(n.a)(Object(n.a)({},i),{},{children:t}))})},customPaging:function(){return Object(o.jsx)(a.a,{sx:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(o.jsx)(a.a,{component:"span",sx:{width:8,height:8,borderRadius:"50%",bgcolor:e||"common.white"}})})}}}var j=Object(c.a)("ul")({display:"flex",listStyle:"none",justifyContent:"center","& li":{width:24,height:24,opacity:.32,cursor:"pointer","&.slick-active":{opacity:1,"& .dotActive":{width:18,borderRadius:8}}}}),d=Object(c.a)("span")((function(t){var e=t.theme;return{width:8,height:8,borderRadius:"50%",transition:e.transitions.create("all",{easing:e.transitions.easing.easeInOut,duration:360})}}));var u=i(27),b=i(2860),h=i.n(b),O=i(2861),p=i.n(O),x=i(58),m=i(39),g=Object(c.a)("div")((function(t){var e=t.theme;return{zIndex:9,display:"flex",position:"absolute",top:e.spacing(2),right:e.spacing(2)}})),f=Object(c.a)(m.k)((function(t){return{padding:6,opacity:.48,color:t.theme.palette.common.white,"&:hover":{opacity:1}}}));function v(t){var e=t.onNext,i=t.onPrevious,c=Object(r.a)(t,["onNext","onPrevious"]),a="rtl"===Object(x.a)().direction;return Object(o.jsxs)(g,Object(n.a)(Object(n.a)({},c),{},{children:[Object(o.jsx)(f,{size:"small",onClick:i,children:Object(o.jsx)(u.Icon,{width:20,height:20,icon:a?p.a:h.a})}),Object(o.jsx)(f,{size:"small",onClick:e,children:Object(o.jsx)(u.Icon,{width:20,height:20,icon:a?h.a:p.a})})]}))}var w=Object(c.a)("div")((function(t){return{top:0,bottom:0,zIndex:9,height:40,width:"100%",margin:"auto",display:"flex",position:"absolute",padding:t.theme.spacing(0,2),justifyContent:"space-between"}})),y=Object(c.a)(m.k)((function(t){var e=t.theme;return{width:40,height:40,opacity:.48,display:"flex",cursor:"pointer",alignItems:"center",justifyContent:"center",color:e.palette.common.white,background:e.palette.grey[900],borderRadius:e.shape.borderRadiusSm,transition:e.transitions.create("opacity"),"&:hover":{opacity:1,background:e.palette.grey[900]}}}));function k(t){var e=t.onNext,i=t.onPrevious,c=Object(r.a)(t,["onNext","onPrevious"]),a="rtl"===Object(x.a)().direction;return Object(o.jsxs)(w,Object(n.a)(Object(n.a)({},c),{},{children:[Object(o.jsx)(y,{size:"small",onClick:i,children:Object(o.jsx)(u.Icon,{width:20,height:20,icon:a?p.a:h.a})}),Object(o.jsx)(y,{size:"small",onClick:e,children:Object(o.jsx)(u.Icon,{width:20,height:20,icon:a?h.a:p.a})})]}))}var S=i(25),I=i(598),P=Object(c.a)("div")((function(t){var e=t.theme;return{zIndex:9,display:"flex",alignItems:"center",position:"absolute",bottom:e.spacing(2),right:e.spacing(2),color:e.palette.common.white,borderRadius:e.shape.borderRadius,backgroundColor:Object(S.a)(e.palette.grey[900],.48)}})),R=Object(c.a)(m.k)((function(t){return{padding:6,opacity:.48,color:t.theme.palette.common.white,"&:hover":{opacity:1}}}));function N(t){var e=t.index,i=t.total,c=t.onNext,a=t.onPrevious,s=Object(r.a)(t,["index","total","onNext","onPrevious"]),l="rtl"===Object(x.a)().direction;return Object(o.jsxs)(P,Object(n.a)(Object(n.a)({},s),{},{children:[Object(o.jsx)(R,{size:"small",onClick:a,children:Object(o.jsx)(u.Icon,{width:20,height:20,icon:l?p.a:h.a})}),Object(o.jsxs)(I.a,{variant:"subtitle2",children:[e+1,"/",i]}),Object(o.jsx)(R,{size:"small",onClick:c,children:Object(o.jsx)(u.Icon,{width:20,height:20,icon:l?h.a:p.a})})]}))}var T=i(17),C=i(19),z=i(5),A=i.n(z),B=i(2780),F=i.n(B),W=i(2701),M=i(1),D=i(2733),J=i(2837),E=i(297),H=i(2750),L=i(29),V=i(164),X=Object(c.a)("img")({top:0,width:"100%",height:"100%",objectFit:"cover",position:"absolute"}),q=Object(C.a)(Array(5)).map((function(t,e){var i=e+1;return{title:A.a.name.title(),description:A.a.lorem.paragraphs(),image:Object(L.c)(i)}}));function G(t){var e=t.item,i=t.isActive,n=Object(x.a)(),r=e.image,c=e.title;return Object(o.jsxs)(D.a,{sx:{position:"relative",paddingTop:{xs:"100%",md:"50%"}},children:[Object(o.jsx)(X,{alt:c,src:r}),Object(o.jsx)(a.a,{sx:{top:0,width:"100%",height:"100%",position:"absolute",backgroundImage:"linear-gradient(to top, ".concat(n.palette.grey[900]," 0%,").concat(Object(S.a)(n.palette.grey[900],0)," 100%)")}}),Object(o.jsx)(J.a,{sx:{bottom:0,width:"100%",maxWidth:480,textAlign:"left",position:"absolute",color:"common.white"},children:Object(o.jsxs)(V.c,{open:i,children:[Object(o.jsx)(W.a.div,{variants:V.w,children:Object(o.jsx)(I.a,{variant:"h3",gutterBottom:!0,children:e.title})}),Object(o.jsx)(W.a.div,{variants:V.w,children:Object(o.jsx)(I.a,{variant:"body2",noWrap:!0,gutterBottom:!0,children:e.description})}),Object(o.jsx)(W.a.div,{variants:V.w,children:Object(o.jsx)(E.a,{variant:"contained",sx:{mt:3},children:"View More"})})]})})]})}function K(){var t=Object(x.a)(),e=Object(M.useRef)(),i=Object(M.useState)("rtl"===t.direction?q.length-1:0),r=Object(T.a)(i,2),c=r[0],a=r[1],s={speed:800,dots:!1,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,rtl:Boolean("rtl"===t.direction),beforeChange:function(t,e){return a(e)}};return Object(o.jsxs)(H.a,{children:[Object(o.jsx)(F.a,Object(n.a)(Object(n.a)({ref:e},s),{},{children:q.map((function(t,e){return Object(o.jsx)(G,{item:t,isActive:e===c},t.title)}))})),Object(o.jsx)(N,{index:c,total:q.length,onNext:function(){e.current.slickNext()},onPrevious:function(){e.current.slickPrev()}})]})}var Q=Object(C.a)(Array(5)).map((function(t,e){var i=e+1;return{title:A.a.name.title(),description:A.a.lorem.paragraphs(),image:Object(L.c)(i)}}));function U(t){var e=t.item,i=e.image,n=e.title;return Object(o.jsx)(a.a,{component:"img",alt:n,src:i,sx:{width:"100%",height:480,objectFit:"cover"}})}function Y(){var t=Object(x.a)(),e=Object(M.useRef)(),i=Object(M.useState)("rtl"===t.direction?Q.length-1:0),r=Object(T.a)(i,2),c=r[0],a=r[1],s={speed:500,dots:!1,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,rtl:Boolean("rtl"===t.direction),beforeChange:function(t,e){return a(e)}};return Object(o.jsxs)(H.a,{children:[Object(o.jsx)(F.a,Object(n.a)(Object(n.a)({ref:e},s),{},{children:Q.map((function(t){return Object(o.jsx)(U,{item:t},t.title)}))})),Object(o.jsx)(N,{index:c,total:Q.length,onNext:function(){e.current.slickNext()},onPrevious:function(){e.current.slickPrev()}})]})}var Z=Object(C.a)(Array(5)).map((function(t,e){var i=e+1;return{title:A.a.name.title(),description:A.a.lorem.paragraphs(),image:Object(L.c)(i)}}));function $(t){var e=t.item,i=e.image,n=e.title,r=e.description;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(a.a,{component:"img",alt:n,src:i,sx:{width:"100%",height:370,objectFit:"cover"}}),Object(o.jsxs)(J.a,{sx:{textAlign:"left"},children:[Object(o.jsx)(I.a,{variant:"h6",noWrap:!0,gutterBottom:!0,children:n}),Object(o.jsx)(I.a,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:r})]})]})}function _(){var t=Object(x.a)(),e=Object(M.useRef)(),i=Object(M.useState)(2),r=Object(T.a)(i,2),c=r[0],a=r[1],s={speed:500,dots:!1,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,initialSlide:c,fade:Boolean("rtl"!==t.direction),rtl:Boolean("rtl"===t.direction),beforeChange:function(t,e){return a(e)}};return Object(o.jsxs)(H.a,{children:[Object(o.jsx)(F.a,Object(n.a)(Object(n.a)({ref:e},s),{},{children:Z.map((function(t){return Object(o.jsx)($,{item:t},t.title)}))})),Object(o.jsx)(N,{index:c,total:Z.length,onNext:function(){e.current.slickNext()},onPrevious:function(){e.current.slickPrev()},sx:{bottom:120}})]})}var tt=Object(C.a)(Array(5)).map((function(t,e){var i=e+1;return{title:A.a.name.title(),description:A.a.lorem.paragraphs(),image:Object(L.c)(i)}})),et=Object(c.a)("div")((function(t){var e=t.theme;return{position:"relative","& .slick-list":{boxShadow:e.customShadows.z16,borderRadius:e.shape.borderRadiusMd}}}));function it(t){var e=t.item,i=e.image,n=e.title;return Object(o.jsx)(a.a,{component:"img",alt:n,src:i,sx:{width:"100%",height:480,objectFit:"cover"}})}function nt(){var t=Object(x.a)(),e=Object(M.useRef)(),i=Object(n.a)({speed:500,dots:!0,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,rtl:Boolean("rtl"===t.direction)},function(t){var e=t.color,i=Object(r.a)(t,["color"]);return{appendDots:function(t){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(j,Object(n.a)(Object(n.a)({},i),{},{children:t}))})},customPaging:function(){return Object(o.jsx)(a.a,{sx:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(o.jsx)(d,{className:"dotActive",sx:{bgcolor:e||"primary.main"}})})}}}({sx:{mt:3}}));return Object(o.jsxs)(et,{children:[Object(o.jsx)(F.a,Object(n.a)(Object(n.a)({ref:e},i),{},{children:tt.map((function(t){return Object(o.jsx)(it,{item:t},t.title)}))})),Object(o.jsx)(k,{onNext:function(){e.current.slickNext()},onPrevious:function(){e.current.slickPrev()}})]})}var rt=i(3125),ct=i.n(rt),at=Object(C.a)(Array(5)).map((function(t,e){var i=e+1;return{title:A.a.name.title(),description:A.a.lorem.paragraphs(),image:Object(L.c)(i)}})),ot=Object(c.a)("div")((function(t){var e=t.theme;return{bottom:0,zIndex:9,width:"100%",display:"flex",position:"absolute",alignItems:"center",padding:e.spacing(3),borderBottomLeftRadius:16,backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",borderBottomRightRadius:16,justifyContent:"space-between",backgroundColor:Object(S.a)(e.palette.grey[900],.72),flexDirection:"rtl"===e.direction?"row-reverse":"row"}}));function st(t){var e=t.item,i=e.image,n=e.title;return Object(o.jsxs)(a.a,{sx:{position:"relative",zIndex:0},children:[Object(o.jsx)(a.a,{component:"img",alt:n,src:i,sx:{width:"100%",height:480,objectFit:"cover"}}),Object(o.jsxs)(ot,{children:[Object(o.jsx)(I.a,{variant:"h6",sx:{color:"common.white"},children:e.title}),Object(o.jsx)(m.k,{onClick:function(){},sx:{color:"common.white","&:hover":{bgcolor:function(t){return Object(S.a)(t.palette.common.white,t.palette.action.hoverOpacity)}}},children:Object(o.jsx)(u.Icon,{icon:ct.a})})]})]})}function lt(){var t=Object(x.a)(),e=Object(M.useRef)(),i={speed:500,dots:!1,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,fade:Boolean("rtl"!==t.direction),rtl:Boolean("rtl"===t.direction)};return Object(o.jsxs)(H.a,{children:[Object(o.jsx)(F.a,Object(n.a)(Object(n.a)({ref:e},i),{},{children:at.map((function(t){return Object(o.jsx)(st,{item:t},t.title)}))})),Object(o.jsx)(k,{onNext:function(){e.current.slickNext()},onPrevious:function(){e.current.slickPrev()}})]})}var jt=i(6),dt=i(28),ut=i(3126),bt=i.n(ut),ht=i(2730),Ot=Object(C.a)(Array(5)).map((function(t,e){var i=e+1;return{title:A.a.name.title(),description:A.a.lorem.paragraphs(),image:Object(L.c)(i)}})),pt=Object(c.a)("div")((function(t){var e=t.theme;return{overflow:"hidden",position:"relative","&:before, &:after":Object(jt.a)({top:0,left:0,zIndex:8,width:48,content:"''",height:"100%",display:"none",position:"absolute",backgroundImage:"linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)"},e.breakpoints.up(480),{display:"block"}),"&:after":{right:0,left:"auto",transform:"scaleX(-1)"}}})),xt=Object(c.a)("img")((function(t){return{top:0,width:"100%",height:"100%",objectFit:"cover",position:"absolute",transition:t.theme.transitions.create("all")}}));function mt(t){var e=t.item,i=e.image,n=e.title;return Object(o.jsxs)(D.a,{sx:{mx:1,borderRadius:2,overflow:"hidden",paddingTop:"calc(16 /9 * 100%)",position:"relative","&:hover img":{width:"120%",height:"120%"}},children:[Object(o.jsx)(xt,{alt:n,src:i}),Object(o.jsxs)(J.a,{sx:{bottom:0,zIndex:9,width:"100%",textAlign:"left",position:"absolute",color:"common.white",backgroundImage:function(t){return"linear-gradient(to top, ".concat(t.palette.grey[900]," 0%,").concat(Object(S.a)(t.palette.grey[900],0)," 100%)")}},children:[Object(o.jsx)(I.a,{variant:"h4",paragraph:!0,children:n}),Object(o.jsxs)(ht.a,{to:"#",color:"inherit",variant:"overline",component:dt.b,sx:{opacity:.72,alignItems:"center",display:"inline-flex",transition:function(t){return t.transitions.create("opacity")},"&:hover":{opacity:1}},children:["learn More",Object(o.jsx)(a.a,{component:u.Icon,icon:bt.a,sx:{width:16,height:16,ml:1}})]})]})]})}function gt(){var t=Object(M.useRef)(),e=Object(x.a)(),i={speed:500,slidesToShow:3,centerMode:!0,centerPadding:"60px",rtl:Boolean("rtl"===e.direction),responsive:[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1,centerPadding:"0"}}]};return Object(o.jsxs)(pt,{children:[Object(o.jsx)(F.a,Object(n.a)(Object(n.a)({ref:t},i),{},{children:Ot.map((function(t){return Object(o.jsx)(mt,{item:t},t.title)}))})),Object(o.jsx)(k,{onNext:function(){t.current.slickNext()},onPrevious:function(){t.current.slickPrev()}})]})}var ft=Object(C.a)(Array(5)).map((function(t,e){var i=e+1;return{title:A.a.name.title(),description:A.a.lorem.paragraphs(),image:Object(L.c)(i)}})),vt=64,wt=Object(c.a)("div")((function(t){return{root:{"& .slick-slide":{float:"rtl"===t.theme.direction?"right":"left"}}}})),yt=Object(c.a)("img")({top:0,width:"100%",height:"100%",objectFit:"cover",position:"absolute"}),kt=Object(c.a)("img")((function(t){var e=t.theme;return{opacity:.48,width:vt,cursor:"pointer",height:vt,margin:e.spacing(0,1),borderRadius:e.shape.borderRadiusSm,"&:hover":{opacity:.72,transition:e.transitions.create("opacity")}}}));function St(t){var e=t.item,i=e.image,n=e.title;return Object(o.jsx)(a.a,{sx:{position:"relative",paddingTop:{xs:"100%",md:"50%"}},children:Object(o.jsx)(yt,{alt:n,src:i})})}function It(t){var e=t.item,i=e.image,n=e.title;return Object(o.jsx)(kt,{alt:n,src:i})}function Pt(){var t=Object(M.useState)(0),e=Object(T.a)(t,2),i=e[0],r=e[1],c=Object(M.useState)(null),s=Object(T.a)(c,2),l=s[0],j=s[1],d=Object(M.useState)(null),u=Object(T.a)(d,2),b=u[0],h=u[1],O=Object(M.useRef)(null),p=Object(M.useRef)(null),x={speed:500,dots:!1,arrows:!1,slidesToShow:1,draggable:!1,slidesToScroll:1,adaptiveHeight:!0,beforeChange:function(t,e){return r(e)}},m={dots:!1,arrows:!1,centerMode:!0,swipeToSlide:!0,focusOnSelect:!0,variableWidth:!0,centerPadding:"0px",slidesToShow:ft.length>3?3:ft.length};Object(M.useEffect)((function(){j(O.current),h(p.current)}),[]);return Object(o.jsxs)(wt,{children:[Object(o.jsxs)(a.a,{sx:{zIndex:0,borderRadius:2,overflow:"hidden",position:"relative"},children:[Object(o.jsx)(F.a,Object(n.a)(Object(n.a)({},x),{},{asNavFor:b,ref:O,children:ft.map((function(t){return Object(o.jsx)(St,{item:t},t)}))})),Object(o.jsx)(N,{index:i,total:ft.length,onNext:function(){p.current.slickNext()},onPrevious:function(){p.current.slickPrev()}})]}),Object(o.jsx)(a.a,{sx:Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)({mt:3,mx:"auto"},1===ft.length&&{maxWidth:80}),2===ft.length&&{maxWidth:160}),3===ft.length&&{maxWidth:240}),4===ft.length&&{maxWidth:240}),5===ft.length&&{maxWidth:384}),{},{"& .slick-current img":{opacity:1,border:function(t){return"solid 3px ".concat(t.palette.primary.main)}}}),children:Object(o.jsx)(F.a,Object(n.a)(Object(n.a)({},m),{},{asNavFor:l,ref:p,children:ft.map((function(t){return Object(o.jsx)(It,{item:t},t)}))}))})]})}}}]);
//# sourceMappingURL=10.94fcede0.chunk.js.map