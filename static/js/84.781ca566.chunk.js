(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[84],{2758:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"d",(function(){return c})),a.d(t,"c",(function(){return s})),a.d(t,"e",(function(){return l})),a.d(t,"b",(function(){return d}));var r=a(30),n=a(2779),i=a.n(n);function o(e){return i()(e).format(Number.isInteger(e)?"$0,0":"$0,0.00")}function c(e){return i()(e/100).format("0.0%")}function s(e){return i()(e).format()}function l(e){return Object(r.replace)(i()(e).format("0.00a"),".00","")}function d(e){return i()(e).format("0.0 b")}},2771:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return c})),a.d(t,"d",(function(){return s}));var r=a(591),n=a(2850);function i(e){return Object(r.a)(new Date(e),"dd MMMM yyyy")}function o(e){return Object(r.a)(new Date(e),"dd MMM yyyy HH:mm")}function c(e){return Object(r.a)(new Date(e),"dd/MM/yyyy hh:mm p")}function s(e){return Object(n.a)(new Date(e),{addSuffix:!0})}},2806:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return h})),a.d(t,"c",(function(){return x})),a.d(t,"d",(function(){return g})),a.d(t,"e",(function(){return f})),a.d(t,"f",(function(){return v})),a.d(t,"g",(function(){return w})),a.d(t,"h",(function(){return S})),a.d(t,"j",(function(){return A})),a.d(t,"i",(function(){return M})),a.d(t,"k",(function(){return F})),a.d(t,"m",(function(){return W})),a.d(t,"l",(function(){return J}));var r=a(4),n=a(4518),i=a(2685),o=a(58),c=Object(i.a)((function(e){return Object(n.a)({"@global":{".apexcharts-tooltip,.apexcharts-xaxistooltip":{border:"0 !important",boxShadow:"".concat(e.customShadows.z24," !important"),color:"".concat(e.palette.text.primary," !important"),borderRadius:"".concat(e.shape.borderRadiusSm,"px !important"),backgroundColor:"".concat(e.palette.background.default," !important")},".apexcharts-tooltip-title":{border:"0 !important",fontWeight:e.typography.fontWeightBold,backgroundColor:"".concat(e.palette.grey[50016]," !important"),color:e.palette.text["light"===e.palette.mode?"secondary":"primary"]},".apexcharts-xaxistooltip-bottom":{"&:before":{borderBottomColor:"transparent !important"},"&:after":{borderBottomColor:"".concat(e.palette.background.paper," !important")}},".apexcharts-legend":{padding:"0 !important"},".apexcharts-legend-series":{alignItems:"center",display:"flex !important"},".apexcharts-legend-marker":{marginTop:"-2px !important",marginRight:"8px !important"},".apexcharts-legend-text":{lineHeight:"18px",textTransform:"capitalize"}}})}));function s(){c();var e=Object(o.a)(),t=Object(r.a)({show:!0,label:"Total",color:e.palette.text.secondary},e.typography.subtitle2),a=Object(r.a)({offsetY:8,color:e.palette.text.primary},e.typography.h3);return{colors:[e.palette.primary.main,e.palette.warning.main,e.palette.info.main,e.palette.error.main,e.palette.success.main],chart:{toolbar:{show:!1},zoom:{enabled:!1},foreColor:e.palette.text.disabled,fontFamily:e.typography.fontFamily},states:{hover:{filter:{type:"lighten",value:.04}},active:{filter:{type:"darken",value:.88}}},fill:{opacity:1,gradient:{type:"vertical",shadeIntensity:0,opacityFrom:.4,opacityTo:0,stops:[0,100]}},dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth",lineCap:"round"},grid:{strokeDashArray:3,borderColor:e.palette.divider},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1}},markers:{size:0,strokeColors:e.palette.background.paper},tooltip:{x:{show:!1}},legend:{show:!0,fontSize:13,position:"top",horizontalAlign:"right",markers:{radius:12},itemMargin:{horizontal:12},labels:{colors:e.palette.text.primary}},plotOptions:{pie:{donut:{labels:{show:!0,value:a,total:t}}},radialBar:{track:{strokeWidth:"100%",background:e.palette.grey[50016]},dataLabels:{value:a,total:t}},radar:{polygons:{strokeWidth:1,fill:{colors:["transparent"]},strokeColors:e.palette.divider,connectorColors:e.palette.divider}}}}}var l=a(30),d=a(2760),p=a.n(d),j=a(0),b=[{name:"series1",data:[31,40,28,51,42,109,100]},{name:"series2",data:[11,32,45,32,34,52,41]}];function h(){var e=Object(l.merge)(s(),{xaxis:{type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z","2018-09-19T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"}}});return Object(j.jsx)(p.a,{type:"area",series:b,options:e,height:320})}var u=[{data:[400,430,448,470,540,580,690,1100,1200,1380]}];function x(){var e=Object(l.merge)(s(),{stroke:{show:!1},plotOptions:{bar:{horizontal:!0,barHeight:"30%",borderRadius:4}},xaxis:{categories:["Italy","Japan","China","Canada","France","Germany","South Korea","Netherlands","United States","United Kingdom"]}});return Object(j.jsx)(p.a,{type:"bar",series:u,options:e,height:320})}var m=[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]}];function g(){var e=Object(l.merge)(s(),{stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},tooltip:{y:{formatter:function(e){return"$ ".concat(e," thousands")}}},plotOptions:{bar:{columnWidth:"34%",borderRadius:4}}});return Object(j.jsx)(p.a,{type:"bar",series:m,options:e,height:320})}var O=[{name:"Cash Flow",data:[1.45,5.42,5.9,-.42,-12.6,-18.1,-18.2,-14.16,-11.1,-6.09,.34,3.88,13.07,5.8,2,7.37,8.1,13.57,15.75,17.1,19.8,-27.03,-54.4,-47.2,-43.3,-18.6,-48.6,-41.1,-39.6,-37.6,-29.4,-21.4,-2.4]}];function f(){var e=Object(o.a)(),t=Object(l.merge)(s(),{stroke:{show:!1},yaxis:{labels:{formatter:function(e){return"".concat(e.toFixed(0),"%")}}},xaxis:{type:"datetime",categories:["2011-01-01","2011-02-01","2011-03-01","2011-04-01","2011-05-01","2011-06-01","2011-07-01","2011-08-01","2011-09-01","2011-10-01","2011-11-01","2011-12-01","2012-01-01","2012-02-01","2012-03-01","2012-04-01","2012-05-01","2012-06-01","2012-07-01","2012-08-01","2012-09-01","2012-10-01","2012-11-01","2012-12-01","2013-01-01","2013-02-01","2013-03-01","2013-04-01","2013-05-01","2013-06-01","2013-07-01","2013-08-01","2013-09-01"]},plotOptions:{bar:{columnWidth:"58%",borderRadius:4,colors:{ranges:[{from:-100,to:-46,color:e.palette.warning.main},{from:-45,to:0,color:e.palette.error.main}]}}}});return Object(j.jsx)(p.a,{type:"bar",series:O,options:t,height:320})}var y=[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]}];function v(){var e=Object(l.merge)(s(),{plotOptions:{bar:{columnWidth:"14%",borderRadius:4}},stroke:{show:!1},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},tooltip:{y:{formatter:function(e){return"$ ".concat(e," thousands")}}}});return Object(j.jsx)(p.a,{type:"bar",series:y,options:e,height:320})}var k=[{name:"Product A",data:[44,55,41,67,22,43]},{name:"Product B",data:[13,23,20,8,13,27]},{name:"Product C",data:[11,17,15,15,21,14]},{name:"Product D",data:[21,7,25,13,22,8]}];function w(){var e=Object(l.merge)(s(),{chart:{stacked:!0,zoom:{enabled:!0}},legend:{itemMargin:{vertical:8},position:"right",offsetY:20},plotOptions:{bar:{columnWidth:"14%",borderRadius:4}},stroke:{show:!1},xaxis:{type:"datetime",categories:["01/01/2011 GMT","01/02/2011 GMT","01/03/2011 GMT","01/04/2011 GMT","01/05/2011 GMT","01/06/2011 GMT"]}});return Object(j.jsx)(p.a,{type:"bar",series:k,options:e,height:320})}var C=[44,55,13,43];function S(){var e=Object(l.merge)(s(),{labels:["Apple","Mango","Orange","Watermelon"],stroke:{show:!1},legend:{horizontalAlign:"center"},plotOptions:{pie:{donut:{size:"90%"}}}});return Object(j.jsx)(p.a,{type:"donut",series:C,options:e,width:400})}var T=[{name:"Team A",type:"column",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"Team B",type:"area",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"Team C",type:"line",data:[30,25,36,30,45,35,64,52,59,36,39]}];function A(){var e=Object(l.merge)(s(),{stroke:{width:[0,2,3]},plotOptions:{bar:{columnWidth:"18%",borderRadius:4}},fill:{type:["solid","gradient","solid"]},labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],xaxis:{type:"datetime"},yaxis:{title:{text:"Points"},min:0},tooltip:{shared:!0,intersect:!1,y:{formatter:function(e){return"undefined"!==typeof e?"".concat(e.toFixed(0)," points"):e}}}});return Object(j.jsx)(p.a,{type:"line",series:T,options:e,height:320})}var I=[{name:"Desktops",data:[10,41,35,51,49,62,69,91,148]}];function M(){var e=Object(l.merge)(s(),{xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]},tooltip:{x:{show:!1},marker:{show:!1}}});return Object(j.jsx)(p.a,{type:"line",series:I,options:e,height:320})}var z=[44,55,13,43];function F(){var e=Object(l.merge)(s(),{labels:["Team A","Team B","Team C","Team D"],legend:{position:"right",offsetX:-20,offsetY:64,itemMargin:{vertical:8}},stroke:{show:!1},dataLabels:{enabled:!0,dropShadow:{enabled:!1}},plotOptions:{pie:{donut:{labels:{show:!1}}}}});return Object(j.jsx)(p.a,{type:"pie",series:z,options:e,width:400})}var R=[{name:"Series 1",data:[80,50,30,40,100,20]},{name:"Series 2",data:[20,30,40,80,20,80]},{name:"Series 3",data:[44,76,78,13,43,10]}];function W(){var e=Object(o.a)(),t=Object(l.merge)(s(),{stroke:{width:2},fill:{opacity:.48},legend:{position:"bottom",horizontalAlign:"center"},xaxis:{categories:["2011","2012","2013","2014","2015","2016"],labels:{style:{colors:[e.palette.text.secondary,e.palette.text.secondary,e.palette.text.secondary,e.palette.text.secondary,e.palette.text.secondary,e.palette.text.secondary]}}}});return Object(j.jsx)(p.a,{type:"radar",series:R,options:t,width:540})}var B=a(2758),H=[44,55];function J(){var e=Object(o.a)(),t=Object(l.merge)(s(),{labels:["Apples","Oranges"],fill:{type:"gradient",gradient:{colorStops:[[{offset:0,color:e.palette.primary.light},{offset:100,color:e.palette.primary.main}],[{offset:0,color:e.palette.warning.light},{offset:100,color:e.palette.warning.main}]]}},legend:{horizontalAlign:"center"},plotOptions:{radialBar:{hollow:{size:"68%"},dataLabels:{value:{offsetY:16},total:{formatter:function(){return Object(B.c)(2324)}}}}}});return Object(j.jsx)(p.a,{type:"radialBar",series:H,options:t,height:400})}},3127:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var r=a(17),n=a(1),i=a(27),o=a(2895),c=a.n(o),s=a(2983),l=a.n(s),d=a(2984),p=a.n(d),j=a(2801),b=a.n(j),h=a(2985),u=a.n(h),x=a(2728),m=a(592),g=a(2742),O=a(2724),f=a(2725),y=a(0);function v(){var e=Object(n.useRef)(null),t=Object(n.useState)(!1),a=Object(r.a)(t,2),o=a[0],s=a[1],d=[{text:"Import",icon:p.a,action:function(){alert("Hello Import!!"),s(!1)}},{text:"Copy",icon:c.a,action:function(){alert("Hello Copy!!"),s(!1)}},{text:"Export",icon:u.a,action:function(){alert("Hello Export!!"),s(!1)}},{text:"Archive",icon:l.a,action:function(){alert("Hello Archive!!"),s(!1)}}];return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(x.a,{ref:e,onClick:function(){return s(!0)},children:Object(y.jsx)(i.Icon,{icon:b.a,width:20,height:20})}),Object(y.jsx)(m.a,{open:o,anchorEl:e.current,onClose:function(){return s(!1)},PaperProps:{sx:{width:200,maxWidth:"100%"}},anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:d.map((function(e){return Object(y.jsxs)(g.a,{onClick:e.action,sx:{color:"text.secondary"},children:[Object(y.jsx)(O.a,{children:Object(y.jsx)(i.Icon,{icon:e.icon,width:24,height:24})}),Object(y.jsx)(f.a,{primary:e.text,primaryTypographyProps:{variant:"body2"}})]},e.text)}))})]})}},4572:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return Ue}));var r=a(2739),n=a(375),i=a(598),o=a(2719),c=a(378),s=a(27),l=a(3549),d=a.n(l),p=a(8),j=a(25),b=a(2750),h=a(2758),u=a(0),x=Object(p.a)(b.a)((function(e){var t=e.theme;return{boxShadow:"none",textAlign:"center",padding:t.spacing(5,0),color:t.palette.error.darker,backgroundColor:t.palette.error.lighter}})),m=Object(p.a)("div")((function(e){var t=e.theme;return{margin:"auto",display:"flex",borderRadius:"50%",alignItems:"center",width:t.spacing(8),height:t.spacing(8),justifyContent:"center",marginBottom:t.spacing(3),color:t.palette.error.dark,backgroundImage:"linear-gradient(135deg, ".concat(Object(j.a)(t.palette.error.dark,0)," 0%, ").concat(Object(j.a)(t.palette.error.dark,.24)," 100%)")}}));function g(){return Object(u.jsxs)(x,{children:[Object(u.jsx)(m,{children:Object(u.jsx)(s.Icon,{icon:d.a,width:24,height:24})}),Object(u.jsx)(i.a,{variant:"h3",children:Object(h.e)(234)}),Object(u.jsx)(i.a,{variant:"subtitle2",sx:{opacity:.72},children:"Bug Reports"})]})}var O=a(30),f=a(2760),y=a.n(f),v=a(2768),k=a(2806),w=[{data:[400,430,448,470,540,580,690,1100,1200,1380]}];function C(){var e=Object(O.merge)(Object(k.a)(),{tooltip:{marker:{show:!1},y:{formatter:function(e){return Object(h.c)(e)},title:{formatter:function(e){return"#".concat(e)}}}},plotOptions:{bar:{horizontal:!0,barHeight:"28%",borderRadius:2}},xaxis:{categories:["Italy","Japan","China","Canada","France","Germany","South Korea","Netherlands","United States","United Kingdom"]}});return Object(u.jsxs)(b.a,{children:[Object(u.jsx)(v.a,{title:"Conversion Rates",subheader:"(+43%) than last year"}),Object(u.jsx)(n.a,{sx:{mx:3},dir:"ltr",children:Object(u.jsx)(y.a,{type:"bar",series:w,options:e,height:364})})]})}var S=a(58),T=Object(p.a)("div")((function(e){var t=e.theme;return{height:392,marginTop:t.spacing(2),"& .apexcharts-canvas svg":{height:392},"& .apexcharts-canvas svg,.apexcharts-canvas foreignObject":{overflow:"visible"},"& .apexcharts-legend":{height:72,alignContent:"center",position:"relative !important",borderTop:"solid 1px ".concat(t.palette.divider),top:"calc(".concat(320,"px) !important")}}})),A=[{name:"Series 1",data:[80,50,30,40,100,20]},{name:"Series 2",data:[20,30,40,80,20,80]},{name:"Series 3",data:[44,76,78,13,43,10]}];function I(){var e=Object(S.a)(),t=Object(O.merge)(Object(k.a)(),{stroke:{width:2},fill:{opacity:.48},legend:{floating:!0,horizontalAlign:"center"},xaxis:{categories:["English","History","Physics","Geography","Chinese","Math"],labels:{style:{colors:[e.palette.text.secondary,e.palette.text.secondary,e.palette.text.secondary,e.palette.text.secondary,e.palette.text.secondary,e.palette.text.secondary]}}}});return Object(u.jsxs)(b.a,{children:[Object(u.jsx)(v.a,{title:"Current Subject"}),Object(u.jsx)(T,{dir:"ltr",children:Object(u.jsx)(y.a,{type:"radar",series:A,options:t,height:340})})]})}var M=Object(p.a)("div")((function(e){var t=e.theme;return{height:372,marginTop:t.spacing(5),"& .apexcharts-canvas svg":{height:372},"& .apexcharts-canvas svg,.apexcharts-canvas foreignObject":{overflow:"visible"},"& .apexcharts-legend":{height:72,alignContent:"center",position:"relative !important",borderTop:"solid 1px ".concat(t.palette.divider),top:"calc(".concat(300,"px) !important")}}})),z=[4344,5435,1443,4443];function F(){var e=Object(S.a)(),t=Object(O.merge)(Object(k.a)(),{colors:[e.palette.primary.main,e.palette.info.main,e.palette.warning.main,e.palette.error.main],labels:["America","Asia","Europe","Africa"],stroke:{colors:[e.palette.background.paper]},legend:{floating:!0,horizontalAlign:"center"},dataLabels:{enabled:!0,dropShadow:{enabled:!1}},tooltip:{fillSeriesColor:!1,y:{formatter:function(e){return Object(h.c)(e)},title:{formatter:function(e){return"#".concat(e)}}}},plotOptions:{pie:{donut:{labels:{show:!1}}}}});return Object(u.jsxs)(b.a,{children:[Object(u.jsx)(v.a,{title:"Current Visits"}),Object(u.jsx)(M,{dir:"ltr",children:Object(u.jsx)(y.a,{type:"pie",series:z,options:t,height:280})})]})}var R=a(3058),W=a.n(R),B=Object(p.a)(b.a)((function(e){var t=e.theme;return{boxShadow:"none",textAlign:"center",padding:t.spacing(5,0),color:t.palette.warning.darker,backgroundColor:t.palette.warning.lighter}})),H=Object(p.a)("div")((function(e){var t=e.theme;return{margin:"auto",display:"flex",borderRadius:"50%",alignItems:"center",width:t.spacing(8),height:t.spacing(8),justifyContent:"center",marginBottom:t.spacing(3),color:t.palette.warning.dark,backgroundImage:"linear-gradient(135deg, ".concat(Object(j.a)(t.palette.warning.dark,0)," 0%, ").concat(Object(j.a)(t.palette.warning.dark,.24)," 100%)")}}));function J(){return Object(u.jsxs)(B,{children:[Object(u.jsx)(H,{children:Object(u.jsx)(s.Icon,{icon:W.a,width:24,height:24})}),Object(u.jsx)(i.a,{variant:"h3",children:Object(h.e)(1723315)}),Object(u.jsx)(i.a,{variant:"subtitle2",sx:{opacity:.72},children:"Item Orders"})]})}var P=a(19),D=a(5),G=a.n(D),L=a(2788),N=a(28),E=a(126),U=a.n(E),Z=a(2633),V=a(2730),$=a(2639),K=a(297),Y=a(29),X=a(102),q=Object(P.a)(Array(5)).map((function(e,t){var a=t+1;return{title:G.a.name.title(),description:G.a.lorem.paragraphs(),image:Object(Y.b)(a),postedAt:G.a.date.soon()}}));function Q(e){var t=e.news,a=t.image,r=t.title,o=t.description,c=t.postedAt;return Object(u.jsxs)(Z.a,{direction:"row",alignItems:"center",spacing:2,children:[Object(u.jsx)(n.a,{component:"img",alt:r,src:a,sx:{width:48,height:48,borderRadius:1.5}}),Object(u.jsxs)(n.a,{sx:{minWidth:240},children:[Object(u.jsx)(V.a,{component:N.b,to:"#",color:"inherit",children:Object(u.jsx)(i.a,{variant:"subtitle2",noWrap:!0,children:r})}),Object(u.jsx)(i.a,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:o})]}),Object(u.jsx)(i.a,{variant:"caption",sx:{pr:3,flexShrink:0,color:"text.secondary"},children:Object(L.a)(c,new Date)})]})}function _(){return Object(u.jsxs)(b.a,{children:[Object(u.jsx)(v.a,{title:"News Update"}),Object(u.jsx)(X.a,{children:Object(u.jsx)(Z.a,{spacing:3,sx:{p:3,pr:0},children:q.map((function(e){return Object(u.jsx)(Q,{news:e},e.title)}))})}),Object(u.jsx)($.a,{}),Object(u.jsx)(n.a,{sx:{p:2,textAlign:"right"},children:Object(u.jsx)(K.a,{to:"#",size:"small",color:"inherit",component:N.b,endIcon:Object(u.jsx)(s.Icon,{icon:U.a}),children:"View all"})})]})}var ee=a(3057),te=a.n(ee),ae=Object(p.a)(b.a)((function(e){var t=e.theme;return{boxShadow:"none",textAlign:"center",padding:t.spacing(5,0),color:t.palette.info.darker,backgroundColor:t.palette.info.lighter}})),re=Object(p.a)("div")((function(e){var t=e.theme;return{margin:"auto",display:"flex",borderRadius:"50%",alignItems:"center",width:t.spacing(8),height:t.spacing(8),justifyContent:"center",marginBottom:t.spacing(3),color:t.palette.info.dark,backgroundImage:"linear-gradient(135deg, ".concat(Object(j.a)(t.palette.info.dark,0)," 0%, ").concat(Object(j.a)(t.palette.info.dark,.24)," 100%)")}}));function ne(){return Object(u.jsxs)(ae,{children:[Object(u.jsx)(re,{children:Object(u.jsx)(s.Icon,{icon:te.a,width:24,height:24})}),Object(u.jsx)(i.a,{variant:"h3",children:Object(h.e)(1352831)}),Object(u.jsx)(i.a,{variant:"subtitle2",sx:{opacity:.72},children:"New Users"})]})}var ie=a(2837),oe=a(4492),ce=a(4493),se=a(4494),le=a(3550),de=a(4495),pe=a(2771),je=a(39),be=[{title:"1983, orders, $4220",time:G.a.date.past(),type:"order1"},{title:"12 Invoices have been paid",time:G.a.date.past(),type:"order2"},{title:"Order #37745 from September",time:G.a.date.past(),type:"order3"},{title:"New order placed #XF-2356",time:G.a.date.past(),type:"order4"},{title:"New order placed #XF-2346",time:G.a.date.past(),type:"order5"}];function he(e){var t=e.item,a=e.isLast,r=t.type,n=t.title,o=t.time;return Object(u.jsxs)(oe.a,{children:[Object(u.jsxs)(ce.a,{children:[Object(u.jsx)(je.o,{color:("order1"===r?"primary":"order2"===r&&"success")||"order3"===r&&"info"||"order4"===r&&"warning"||"error"}),a?null:Object(u.jsx)(se.a,{})]}),Object(u.jsxs)(le.a,{children:[Object(u.jsx)(i.a,{variant:"subtitle2",children:n}),Object(u.jsx)(i.a,{variant:"caption",sx:{color:"text.secondary"},children:Object(pe.b)(o)})]})]})}function ue(){return Object(u.jsxs)(b.a,{sx:{"& .MuiTimelineItem-missingOppositeContent:before":{display:"none"}},children:[Object(u.jsx)(v.a,{title:"Order Timeline"}),Object(u.jsx)(ie.a,{children:Object(u.jsx)(de.a,{children:be.map((function(e,t){return Object(u.jsx)(he,{item:e,isLast:t===be.length-1},e.title)}))})})]})}var xe=a(4),me=a(31),ge=a(233),Oe=a(2749),fe=a(2708),ye=a(3127),ve=["Create FireStone Logo","Add SCSS and JS files if required","Stakeholder Meeting","Scoping & Estimations","Sprint Showcase"];function ke(e){var t=e.task,a=e.checked,r=e.formik,n=Object(me.a)(e,["task","checked","formik"]),o=r.getFieldProps;return Object(u.jsxs)(Z.a,{direction:"row",justifyContent:"space-between",sx:{py:.75},children:[Object(u.jsx)(Oe.a,{control:Object(u.jsx)(fe.a,Object(xe.a)(Object(xe.a)({},o("checked")),{},{value:t,checked:a},n)),label:Object(u.jsx)(i.a,{variant:"body2",sx:Object(xe.a)({},a&&{color:"text.disabled",textDecoration:"line-through"}),children:t})}),Object(u.jsx)(ye.a,{})]})}function we(){var e=Object(ge.d)({initialValues:{checked:[ve[2]]},onSubmit:function(e){console.log(e)}}),t=e.values,a=e.handleSubmit;return Object(u.jsxs)(b.a,{children:[Object(u.jsx)(v.a,{title:"Tasks"}),Object(u.jsx)(n.a,{sx:{px:3,py:1},children:Object(u.jsx)(ge.b,{value:e,children:Object(u.jsx)(ge.a,{autoComplete:"off",noValidate:!0,onSubmit:a,children:ve.map((function(a){return Object(u.jsx)(ke,{task:a,formik:e,checked:t.checked.includes(a)},a)}))})})})]})}var Ce=a(267),Se=a.n(Ce),Te=a(236),Ae=a.n(Te),Ie=a(237),Me=a.n(Ie),ze=a(387),Fe=a.n(ze),Re=a(2733),We=[{name:"FaceBook",value:G.a.datatype.number(),icon:Object(u.jsx)(s.Icon,{icon:Me.a,color:"#1877F2",width:32,height:32})},{name:"Google",value:G.a.datatype.number(),icon:Object(u.jsx)(s.Icon,{icon:Se.a,color:"#DF3E30",width:32,height:32})},{name:"Linkedin",value:G.a.datatype.number(),icon:Object(u.jsx)(s.Icon,{icon:Fe.a,color:"#006097",width:32,height:32})},{name:"Twitter",value:G.a.datatype.number(),icon:Object(u.jsx)(s.Icon,{icon:Ae.a,color:"#1C9CEA",width:32,height:32})}];function Be(e){var t=e.site,a=t.icon,r=t.value,c=t.name;return Object(u.jsx)(o.a,{item:!0,xs:6,children:Object(u.jsxs)(Re.a,{variant:"outlined",sx:{py:2.5,textAlign:"center"},children:[Object(u.jsx)(n.a,{sx:{mb:.5},children:a}),Object(u.jsx)(i.a,{variant:"h6",children:Object(h.e)(r)}),Object(u.jsx)(i.a,{variant:"body2",sx:{color:"text.secondary"},children:c})]})})}function He(){return Object(u.jsxs)(b.a,{children:[Object(u.jsx)(v.a,{title:"Traffic by Site"}),Object(u.jsx)(ie.a,{children:Object(u.jsx)(o.a,{container:!0,spacing:2,children:We.map((function(e){return Object(u.jsx)(Be,{site:e},e.name)}))})})]})}var Je=[{name:"Team A",type:"column",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"Team B",type:"area",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"Team C",type:"line",data:[30,25,36,30,45,35,64,52,59,36,39]}];function Pe(){var e=Object(O.merge)(Object(k.a)(),{stroke:{width:[0,2,3]},plotOptions:{bar:{columnWidth:"11%",borderRadius:4}},fill:{type:["solid","gradient","solid"]},labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],xaxis:{type:"datetime"},tooltip:{shared:!0,intersect:!1,y:{formatter:function(e){return"undefined"!==typeof e?"".concat(e.toFixed(0)," visits"):e}}}});return Object(u.jsxs)(b.a,{children:[Object(u.jsx)(v.a,{title:"Website Visits",subheader:"(+43%) than last year"}),Object(u.jsx)(n.a,{sx:{p:3,pb:1},dir:"ltr",children:Object(u.jsx)(y.a,{type:"line",series:Je,options:e,height:364})})]})}var De=a(3128),Ge=a.n(De),Le=Object(p.a)(b.a)((function(e){var t=e.theme;return{boxShadow:"none",textAlign:"center",padding:t.spacing(5,0),color:t.palette.primary.darker,backgroundColor:t.palette.primary.lighter}})),Ne=Object(p.a)("div")((function(e){var t=e.theme;return{margin:"auto",display:"flex",borderRadius:"50%",alignItems:"center",width:t.spacing(8),height:t.spacing(8),justifyContent:"center",marginBottom:t.spacing(3),color:t.palette.primary.dark,backgroundImage:"linear-gradient(135deg, ".concat(Object(j.a)(t.palette.primary.dark,0)," 0%, ").concat(Object(j.a)(t.palette.primary.dark,.24)," 100%)")}}));function Ee(){return Object(u.jsxs)(Le,{children:[Object(u.jsx)(Ne,{children:Object(u.jsx)(s.Icon,{icon:Ge.a,width:24,height:24})}),Object(u.jsx)(i.a,{variant:"h3",children:Object(h.e)(714e3)}),Object(u.jsx)(i.a,{variant:"subtitle2",sx:{opacity:.72},children:"Weekly Sales"})]})}function Ue(){return Object(u.jsx)(c.a,{title:"General: Analytics | Minimal-UI",children:Object(u.jsxs)(r.a,{maxWidth:"xl",children:[Object(u.jsx)(n.a,{sx:{pb:5},children:Object(u.jsx)(i.a,{variant:"h4",children:"Hi, Welcome back"})}),Object(u.jsxs)(o.a,{container:!0,spacing:3,children:[Object(u.jsx)(o.a,{item:!0,xs:12,sm:6,md:3,children:Object(u.jsx)(Ee,{})}),Object(u.jsx)(o.a,{item:!0,xs:12,sm:6,md:3,children:Object(u.jsx)(ne,{})}),Object(u.jsx)(o.a,{item:!0,xs:12,sm:6,md:3,children:Object(u.jsx)(J,{})}),Object(u.jsx)(o.a,{item:!0,xs:12,sm:6,md:3,children:Object(u.jsx)(g,{})}),Object(u.jsx)(o.a,{item:!0,xs:12,md:6,lg:8,children:Object(u.jsx)(Pe,{})}),Object(u.jsx)(o.a,{item:!0,xs:12,md:6,lg:4,children:Object(u.jsx)(F,{})}),Object(u.jsx)(o.a,{item:!0,xs:12,md:6,lg:8,children:Object(u.jsx)(C,{})}),Object(u.jsx)(o.a,{item:!0,xs:12,md:6,lg:4,children:Object(u.jsx)(I,{})}),Object(u.jsx)(o.a,{item:!0,xs:12,md:6,lg:8,children:Object(u.jsx)(_,{})}),Object(u.jsx)(o.a,{item:!0,xs:12,md:6,lg:4,children:Object(u.jsx)(ue,{})}),Object(u.jsx)(o.a,{item:!0,xs:12,md:6,lg:4,children:Object(u.jsx)(He,{})}),Object(u.jsx)(o.a,{item:!0,xs:12,md:6,lg:8,children:Object(u.jsx)(we,{})})]})]})})}}}]);
//# sourceMappingURL=84.781ca566.chunk.js.map