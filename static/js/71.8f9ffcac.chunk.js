(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[71],{2756:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var i=n(4),a=n(31),r=n(30),c=n(2633),o=n(375),s=n(598),l=n(2730),h=n(39),p=n(0);function j(t){var e=t.links,n=t.action,j=t.heading,d=t.moreLink,b=void 0===d?[]:d,u=t.sx,x=Object(a.a)(t,["links","action","heading","moreLink","sx"]);return Object(p.jsxs)(c.a,{sx:u,mb:5,spacing:2,children:[Object(p.jsxs)(c.a,{direction:"row",alignItems:"center",children:[Object(p.jsxs)(o.a,{sx:{flexGrow:1},children:[Object(p.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:j}),Object(p.jsx)(h.c,Object(i.a)({links:e},x))]}),n&&Object(p.jsx)(o.a,{sx:{flexShrink:0},children:n})]}),Object(r.isString)(b)?Object(p.jsx)(l.a,{href:b,target:"_blank",variant:"body2",children:b}):b.map((function(t){return Object(p.jsx)(l.a,{noWrap:!0,href:t,variant:"body2",target:"_blank",sx:{display:"flex"},children:t},t)}))]})}},2792:function(t,e){e.__esModule=!0,e.default={body:'<path fill="currentColor" d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"/>',width:24,height:24}},3132:function(t,e){e.__esModule=!0,e.default={body:'<path fill="currentColor" d="M12 15.5a1 1 0 0 1-.71-.29l-4-4a1 1 0 1 1 1.42-1.42L12 13.1l3.3-3.18a1 1 0 1 1 1.38 1.44l-4 3.86a1 1 0 0 1-.68.28z"/>',width:24,height:24}},3519:function(t,e){e.__esModule=!0,e.default={body:'<g fill="currentColor"><circle cx="4" cy="7" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="17" r="1"/><rect x="7" y="11" width="14" height="2" rx=".94" ry=".94"/><rect x="7" y="16" width="14" height="2" rx=".94" ry=".94"/><rect x="7" y="6" width="14" height="2" rx=".94" ry=".94"/></g>',width:24,height:24}},4476:function(t,e){e.__esModule=!0,e.default={body:'<path fill="currentColor" d="M10.5 17a1 1 0 0 1-.71-.29a1 1 0 0 1 0-1.42L13.1 12L9.92 8.69a1 1 0 0 1 0-1.41a1 1 0 0 1 1.42 0l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32z"/>',width:24,height:24}},4585:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return mt}));var i=n(27),a=n(3519),r=n.n(a),c=n(8),o=n(375),s=n(2739),l=n(2737),h=n(598),p=n(2633),j=n(2750),d=n(2733),b=n(20),u=n(378),x=n(2756),m=n(17),O=n(4),g=n(31),f=n(1),y=n(28),v=n(4476),M=n.n(v),w=n(25),C=n(372),P=n(2730),S=n(2639),k=n(2727),I=n(0);function W(t){var e=t.tags,n=Object(g.a)(t,["tags"]);return Object(I.jsxs)(o.a,Object(O.a)(Object(O.a)({},n),{},{children:[Object(I.jsx)(h.a,{variant:"caption",fontWeight:"fontWeightBold",children:"Hot Products:"}),"\xa0",e.map((function(t,e){return Object(I.jsx)(P.a,{component:y.b,to:t.path,underline:"none",variant:"caption",sx:{color:"text.secondary",transition:function(t){return t.transitions.create("all")},"&:hover":{color:"primary.main"}},children:0===e?t.name:", ".concat(t.name," ")},t.name)}))]}))}var z=n(2780),L=n.n(z),A=n(58),B=n(2889);function E(t){var e=t.products,n=t.numberShow,i=t.sx,a=Object(A.a)(),r=Object(f.useRef)(),c=Object(O.a)({speed:500,dots:!0,arrows:!1,slidesToShow:n,slidesToScroll:n,rtl:Boolean("rtl"===a.direction)},Object(B.j)({color:"primary.main",sx:{mt:1,mx:"auto",display:"flex",position:"unset",justifyContent:"center"}}));return Object(I.jsxs)(o.a,{sx:Object(O.a)({position:"relative"},i),children:[Object(I.jsx)(L.a,Object(O.a)(Object(O.a)({ref:r},c),{},{children:e.map((function(t){return Object(I.jsx)(o.a,{sx:{px:1,textAlign:"center"},children:Object(I.jsxs)(P.a,{component:y.c,color:"inherit",underline:"none",to:t.path,sx:{display:"block",transition:function(t){return t.transitions.create("all")},"&:hover":{color:"primary.main"}},children:[Object(I.jsx)(o.a,{sx:{mb:1,position:"relative",pt:"100%"},children:Object(I.jsx)(o.a,{component:"img",src:t.image,sx:{top:0,width:"100%",height:"100%",borderRadius:1,objectFit:"cover",position:"absolute"}})}),Object(I.jsx)(h.a,{variant:"subtitle2",sx:{height:40,fontSize:12,overflow:"hidden",WebkitLineClamp:2,display:"-webkit-box",WebkitBoxOrient:"vertical"},children:t.name})]})},t.name)}))})),Object(I.jsx)(B.h,{onNext:function(){r.current.slickNext()},onPrevious:function(){r.current.slickPrev()},className:"controlsArrows",sx:{mt:7,"& .MuiIconButton-root":{width:24,height:24}}})]})}var T={width:"calc((100%/3) - 16px)","&:nth-child(3n+1)":{order:1},"&:nth-child(3n+2)":{order:2},"&:nth-child(3n)":{order:3}};function F(t){var e=t.path,n=t.title,a=t.open,r=t.hasSub,c=Object(g.a)(t,["path","title","open","hasSub"]),s={color:"primary.main",bgcolor:function(t){return Object(w.a)(t.palette.primary.main,t.palette.action.hoverOpacity)}};return Object(I.jsxs)(C.b,Object(O.a)(Object(O.a)({disableGutters:!0,to:e,component:y.c,sx:Object(O.a)({pl:2.5,pr:1.5,height:40,cursor:"pointer",color:"text.primary",typography:"subtitle2",textTransform:"capitalize",justifyContent:"space-between",transition:function(t){return t.transitions.create("all")},"&:hover":s},a&&s)},c),{},{children:[n,r&&Object(I.jsx)(o.a,{component:i.Icon,icon:M.a,sx:{ml:1,width:20,height:20}})]}))}function D(t){var e=t.parent,n=e.title,i=e.path,a=e.more,r=e.products,c=e.tags,o=e.children,s=Object(f.useState)(!1),l=Object(m.a)(s,2),j=l[0],b=l[1],u=function(){b(!0)},x=function(){b(!1)};return o?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(F,{onMouseEnter:u,onMouseLeave:x,path:i,title:n,open:j,hasSub:!0,children:n}),j&&Object(I.jsxs)(d.a,{onMouseEnter:u,onMouseLeave:x,sx:{p:3,top:-62,left:280,width:800,borderRadius:2,position:"absolute",boxShadow:function(t){return t.customShadows.z20}},children:[Object(I.jsx)(p.a,{flexWrap:"wrap",alignContent:"space-between",height:400,children:o.map((function(t){var e=t.subheader,n=t.items;return Object(I.jsxs)(p.a,{spacing:1.25,sx:Object(O.a)({mb:2.5},T),children:[Object(I.jsx)(h.a,{variant:"subtitle1",sx:{fontWeight:"fontWeightBold"},noWrap:!0,children:e}),n.map((function(t){return Object(I.jsx)(P.a,{noWrap:!0,component:y.c,to:t.path,underline:"none",sx:{typography:"body2",color:"text.primary",fontSize:13,transition:function(t){return t.transitions.create("all")},"&:hover":{color:"primary.main"}},children:t.title},t.title)}))]},e)}))}),Object(I.jsxs)(p.a,{spacing:3,children:[Object(I.jsx)(P.a,{to:a.path,component:y.c,sx:{typography:"body2",display:"inline-flex",fontSize:13},children:a.title}),Object(I.jsx)(S.a,{}),Object(I.jsx)(E,{products:r,numberShow:6,sx:{"& .controlsArrows":{mt:5}}}),Object(I.jsx)(S.a,{}),Object(I.jsx)(W,{tags:c})]})]})]}):Object(I.jsx)(F,{path:i,title:n,children:n})}function H(t){var e=t.navConfig,n=Object(g.a)(t,["navConfig"]);return Object(I.jsx)(k.a,Object(O.a)(Object(O.a)({disablePadding:!0},n),{},{children:e.map((function(t){return Object(I.jsx)(D,{parent:t},t.title)}))}))}var _=n(3132),R=n.n(_),G={width:"calc((100%/3) - 16px)","&:nth-child(3n+1)":{order:1},"&:nth-child(3n+2)":{order:2},"&:nth-child(3n)":{order:3}};function q(t){var e=t.path,n=t.title,a=t.open,r=t.hasSub,c=Object(g.a)(t,["path","title","open","hasSub"]),s={color:"primary.main"};return Object(I.jsxs)(P.a,Object(O.a)(Object(O.a)({to:e,component:y.c,underline:"none",color:"inherit",variant:"subtitle2",sx:Object(O.a)({display:"flex",cursor:"pointer",alignItems:"center",textTransform:"capitalize",height:64,lineHeight:"".concat(64,"px"),transition:function(t){return t.transitions.create("all")},"&:hover":s},a&&s)},c),{},{children:[n,r&&Object(I.jsx)(o.a,{component:i.Icon,icon:R.a,sx:{ml:1,width:20,height:20}})]}))}function N(t){var e=t.parent,n=e.title,i=e.path,a=e.more,r=e.products,c=e.tags,o=e.children,s=Object(f.useState)(!1),l=Object(m.a)(s,2),j=l[0],b=l[1],u=function(){b(!0)},x=function(){b(!1)};return o?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(q,{onMouseEnter:u,onMouseLeave:x,path:i,title:n,open:j,hasSub:!0}),j&&Object(I.jsxs)(d.a,{onMouseEnter:u,onMouseLeave:x,sx:{p:3,width:"100%",position:"absolute",borderRadius:2,top:64,left:-32,zIndex:function(t){return t.zIndex.modal},boxShadow:function(t){return t.customShadows.z20}},children:[Object(I.jsx)(p.a,{flexWrap:"wrap",alignContent:"space-between",height:400,children:o.map((function(t){var e=t.subheader,n=t.items;return Object(I.jsxs)(p.a,{spacing:1.25,sx:Object(O.a)({mb:2.5},G),children:[Object(I.jsx)(h.a,{variant:"subtitle1",sx:{fontWeight:"fontWeightBold"},noWrap:!0,children:e}),n.map((function(t){return Object(I.jsx)(P.a,{noWrap:!0,component:y.c,to:t.path,underline:"none",sx:{typography:"body2",color:"text.primary",fontSize:13,transition:function(t){return t.transitions.create("all")},"&:hover":{color:"primary.main"}},children:t.title},t.title)}))]},e)}))}),Object(I.jsxs)(p.a,{spacing:3,children:[Object(I.jsx)(P.a,{to:a.path,component:y.c,sx:{typography:"body2",display:"inline-flex",fontSize:13},children:a.title}),Object(I.jsx)(S.a,{}),Object(I.jsx)(E,{products:r,numberShow:8}),Object(I.jsx)(S.a,{}),Object(I.jsx)(W,{tags:c})]})]})]}):Object(I.jsx)(q,{path:i,title:n})}function V(t){var e=t.navConfig,n=Object(g.a)(t,["navConfig"]);return Object(I.jsx)(p.a,Object(O.a)(Object(O.a)({direction:"row",spacing:4},n),{},{children:e.map((function(t){return Object(I.jsx)(N,{parent:t},t.title)}))}))}var J=n(182),K=n.n(J),U=n(38),Q=n(2792),X=n.n(Q),Y=n(126),Z=n.n(Y),$=n(2724),tt=n(2725),et=n(2736),nt=n(2728),it=n(297),at=n(49),rt=n(102);function ct(t){var e=t.icon,n=t.title,a=t.hasSub,r=Object(g.a)(t,["icon","title","hasSub"]);return Object(I.jsxs)(C.b,Object(O.a)(Object(O.a)({button:!0,sx:{textTransform:"capitalize",height:44}},r),{},{children:[Object(I.jsx)($.a,{sx:{width:22,height:22},children:e}),Object(I.jsx)(tt.a,{primaryTypographyProps:{typography:"body2"},children:n}),a&&Object(I.jsx)(o.a,{component:i.Icon,icon:Z.a})]}))}function ot(t){var e=t.parent,n=t.pathname,a=Object(f.useState)(!1),r=Object(m.a)(a,2),c=r[0],s=r[1],l=e.title,j=e.icon,d=e.path,b=e.children;Object(f.useEffect)((function(){c&&u()}),[n]);var u=function(){s(!1)};return b?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(ct,{title:l,icon:j,onClick:function(){s(!0)},hasSub:!0}),Object(I.jsxs)(et.a,{open:c,onClose:u,ModalProps:{keepMounted:!0},PaperProps:{sx:{width:248}},children:[Object(I.jsxs)(p.a,{direction:"row",alignItems:"center",px:1,py:1.5,children:[Object(I.jsx)(nt.a,{onClick:u,children:Object(I.jsx)(i.Icon,{icon:X.a,width:20,height:20})}),Object(I.jsx)(h.a,{noWrap:!0,variant:"subtitle1",sx:{ml:1,textTransform:"capitalize"},children:l})]}),Object(I.jsx)(S.a,{}),Object(I.jsx)(rt.a,{children:Object(I.jsx)(p.a,{spacing:5,py:3,children:b.map((function(t){var e=t.subheader,n=t.items;return Object(I.jsxs)(k.a,{disablePadding:!0,children:[Object(I.jsx)(h.a,{component:"div",variant:"overline",sx:{px:2.5,mb:1,color:"text.secondary"},noWrap:!0,children:e}),n.map((function(t){return Object(I.jsxs)(C.b,{button:!0,disableGutters:!0,component:y.c,to:t.path,sx:{px:1.5},children:[Object(I.jsx)($.a,{sx:{mr:.5,width:22,height:22,display:"flex",alignItems:"center",justifyContent:"center"},children:Object(I.jsx)(o.a,{sx:{width:4,height:4,bgcolor:"currentColor",borderRadius:"50%"}})}),Object(I.jsx)(tt.a,{primary:t.title,primaryTypographyProps:{typography:"body2",noWrap:!0}})]},t.title)}))]},e)}))})})]})]}):Object(I.jsx)(ct,{component:y.c,title:l,icon:j,to:d})}function st(t){var e=t.navConfig,n=Object(U.g)().pathname,a=Object(f.useState)(!1),c=Object(m.a)(a,2),s=c[0],l=c[1];Object(f.useEffect)((function(){s&&p()}),[n]);var p=function(){l(!1)};return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(it.a,{variant:"contained",onClick:function(){l(!0)},startIcon:Object(I.jsx)(i.Icon,{icon:K.a}),children:"Menu Mobile"}),Object(I.jsx)(et.a,{open:s,onClose:p,ModalProps:{keepMounted:!0},PaperProps:{sx:{pb:5,width:260}},children:Object(I.jsxs)(rt.a,{children:[Object(I.jsx)(P.a,{component:y.c,to:"/",sx:{display:"inline-flex"},children:Object(I.jsx)(at.a,{sx:{mx:2.5,my:3}})}),Object(I.jsxs)(h.a,{variant:"h6",sx:{px:2,mb:2,display:"flex",alignItems:"center"},children:[Object(I.jsx)(o.a,{component:i.Icon,icon:r.a,sx:{mr:1,width:24,height:24}})," Categories"]}),e.map((function(t){return Object(I.jsx)(ot,{parent:t,pathname:n},t.title)}))]})})]})}var lt=n(19),ht=n(235),pt=n.n(ht),jt={width:"100%",height:"100%"},dt=Object(lt.a)(Array(10)).map((function(t,e){var n=e+1;return{name:"Product Phasellus volutpat metus eget egestas ".concat(n),image:"/static/mock-images/feeds/feed_".concat(n,".jpg"),path:"#"}})),bt=[{name:"Paper Cup",path:"#"},{name:"Lotion Pump",path:"#"},{name:"Brush Cutter",path:"#"},{name:"Display Rack",path:"#"},{name:"Glass Bottle",path:"#"}],ut=[{title:"Parent 1",path:"#",icon:Object(I.jsx)(i.Icon,Object(O.a)({icon:pt.a},jt)),more:{title:"More Categories",path:"#"},products:dt,tags:bt,children:[{subheader:"Agriculture Machinery",items:[{title:"Agriculture Machinery",path:"#"},{title:"Livestock MachineryFeed",path:"#"},{title:"Feed Processing Machinery",path:"#"},{title:"Tiller",path:"#"},{title:"Harvesting Machine",path:"#"}]},{subheader:"Machine Tools",items:[{title:"CNC Machine Tools",path:"#"},{title:"Lathe",path:"#"},{title:"Grinding Machine ",path:"#"},{title:"Drilling Machine ",path:"#"},{title:"Milling Machine ",path:"#"}]},{subheader:"Other Machinery & Parts",items:[{title:"Metallic Processing Machinery",path:"#"},{title:"Machinery for Food, Beverage & Cereal",path:"#"},{title:"Laser Equipment",path:"#"},{title:"Mould",path:"#"},{title:"Textile Machinery & Parts",path:"#"},{title:"Cutting & Fold-bend Machine",path:"#"},{title:"Paper Machinery",path:"#"},{title:"Rubber Machinery",path:"#"},{title:"Chemical Equipment & Machinery",path:"#"},{title:"Mixing Equipment",path:"#"},{title:"Machinery for Garment, Shoes & Accessories",path:"#"},{title:"Crushing & Culling Machine",path:"#"}]},{subheader:"Plastic & Woodworking Machinery",items:[{title:"Plastic Machinery",path:"#"},{title:"Woodworking Machinery",path:"#"},{title:"Blow Molding Machine",path:"#"},{title:"Plastic Recycling Machine",path:"#"},{title:"Injection Molding Machine",path:"#"}]},{subheader:"Construction Machinery",items:[{title:"Building Material Making Machinery",path:"#"},{title:"Lifting Equipment",path:"#"},{title:"Excavator",path:"#"},{title:"Concrete Machinery",path:"#"},{title:"Stone Processing Machinery",path:"#"}]}]},{title:"Parent 2",path:"#",icon:Object(I.jsx)(i.Icon,Object(O.a)({icon:pt.a},jt)),more:{title:"More Categories",path:"#"},products:dt,tags:bt,children:[{subheader:"Cellphone & Accessories",items:[{title:"Mobile Phone Charger",path:"#"},{title:"Power Bank",path:"#"},{title:"Mobile Phone LCD",path:"#"},{title:"Bluetooth Headset",path:"#"},{title:"Mobile Phone",path:"#"}]},{subheader:"Audio & Video",items:[{title:"Display & Accessories",path:"#"},{title:"Audio & Sets",path:"#"},{title:"Professional Audio",path:"#"},{title:"LCD Display",path:"#"},{title:"LCD Module",path:"#"},{title:"Video",path:"#"},{title:"TV & Parts",path:"#"},{title:"Amplifier",path:"#"},{title:"Portable Audio Appliance",path:"#"},{title:"Home Theatre System",path:"#"},{title:"HDMI Cable",path:"#"},{title:"Radio",path:"#"}]},{subheader:"Household Appliances",items:[{title:"Air Conditioner, Purifier & Humidifier",path:"#"},{title:"Refrigerator, Freezer & Parts",path:"#"},{title:"Water Heater & Components",path:"#"},{title:"Electrical Fan & Exhaust Fan",path:"#"},{title:"Household Water Treatment Equipment",path:"#"},{title:"Solar Water Heater",path:"#"},{title:"Photographic Apparatus",path:"#"},{title:"Gas Burner & Gas Stove",path:"#"},{title:"Entertainment Electronics",path:"#"},{title:"Electrical Kettle",path:"#"},{title:"Food Blender",path:"#"},{title:"Dehumidifier",path:"#"}]},{subheader:"Digital Devices",items:[{title:"Battery & Charger",path:"#"},{title:"Wearable Devices",path:"#"},{title:"Digital Photo Frame",path:"#"},{title:"Digital Camera",path:"#"},{title:"Smart Glasses",path:"#"}]}]},{title:"Parent 3",path:"#",icon:Object(I.jsx)(i.Icon,Object(O.a)({icon:pt.a},jt))},{title:"Parent 4",path:"#",icon:Object(I.jsx)(i.Icon,Object(O.a)({icon:pt.a},jt))}],xt=Object(c.a)(u.a)((function(t){var e=t.theme;return{paddingTop:e.spacing(11),paddingBottom:e.spacing(15)}}));function mt(){return Object(I.jsxs)(xt,{title:"Mega Menu | Minimal-UI",children:[Object(I.jsx)(o.a,{sx:{pt:6,pb:1,bgcolor:function(t){return"light"===t.palette.mode?"grey.200":"grey.800"}},children:Object(I.jsx)(s.a,{maxWidth:"lg",children:Object(I.jsx)(x.a,{heading:"Mega Menu",links:[{name:"Components",href:b.d.components},{name:"Mega Menu"}]})})}),Object(I.jsx)(l.a,{position:"static",color:"transparent",sx:{boxShadow:function(t){return t.customShadows.z8}},children:Object(I.jsxs)(s.a,{sx:{display:"flex",alignItems:"center",position:"relative"},children:[Object(I.jsx)(h.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Menu Horizon"}),Object(I.jsx)(V,{navConfig:ut})]})}),Object(I.jsxs)(s.a,{sx:{mt:10},children:[Object(I.jsx)(st,{navConfig:ut}),Object(I.jsxs)(p.a,{direction:"row",spacing:3,mt:5,children:[Object(I.jsxs)(j.a,{sx:{width:280,flexShrink:0,overflow:"unset"},children:[Object(I.jsxs)(h.a,{variant:"h6",sx:{p:2,display:"flex",alignItems:"center"},children:[Object(I.jsx)(o.a,{component:i.Icon,icon:r.a,sx:{mr:1,width:24,height:24}})," Menu Vertical"]}),Object(I.jsx)(H,{navConfig:ut})]}),Object(I.jsx)(d.a,{sx:{minHeight:480,overflow:"hidden",borderRadius:1},children:Object(I.jsx)(o.a,{component:"img",src:"/static/mock-images/feeds/feed_8.jpg",sx:{height:"100%",objectFit:"cover"}})})]})]})]})}}}]);
//# sourceMappingURL=71.8f9ffcac.chunk.js.map