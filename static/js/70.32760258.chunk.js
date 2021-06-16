(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[70],{2756:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var i=a(4),n=a(31),o=a(30),r=a(2633),l=a(375),s=a(598),c=a(2730),d=a(39),m=a(0);function p(e){var t=e.links,a=e.action,p=e.heading,u=e.moreLink,b=void 0===u?[]:u,j=e.sx,h=Object(n.a)(e,["links","action","heading","moreLink","sx"]);return Object(m.jsxs)(r.a,{sx:j,mb:5,spacing:2,children:[Object(m.jsxs)(r.a,{direction:"row",alignItems:"center",children:[Object(m.jsxs)(l.a,{sx:{flexGrow:1},children:[Object(m.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:p}),Object(m.jsx)(d.c,Object(i.a)({links:t},h))]}),a&&Object(m.jsx)(l.a,{sx:{flexShrink:0},children:a})]}),Object(o.isString)(b)?Object(m.jsx)(c.a,{href:b,target:"_blank",variant:"body2",children:b}):b.map((function(e){return Object(m.jsx)(c.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},2768:function(e,t,a){"use strict";var i=a(6),n=a(7),o=a(2),r=a(1),l=(a(12),a(11)),s=a(2686),c=a(598),d=a(14),m=a(8),p=a(2627),u=a(2687);function b(e){return Object(p.a)("MuiCardHeader",e)}var j=Object(u.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),h=a(0),g=Object(m.a)("div",{},{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(o.a)((a={},Object(i.a)(a,"& .".concat(j.title),t.title),Object(i.a)(a,"& .".concat(j.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),x=Object(m.a)("div",{},{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),O=Object(m.a)("div",{},{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),y=Object(m.a)("div",{},{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),_=r.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiCardHeader"}),i=a.action,r=a.avatar,m=a.className,p=a.component,u=void 0===p?"div":p,j=a.disableTypography,_=void 0!==j&&j,f=a.subheader,k=a.subheaderTypographyProps,v=a.title,w=a.titleTypographyProps,C=Object(n.a)(a,["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),S=Object(o.a)({},a,{component:u,disableTypography:_}),P=function(e){var t=e.classes;return Object(s.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},b,t)}(S),A=v;null==A||A.type===c.a||_||(A=Object(h.jsx)(c.a,Object(o.a)({variant:r?"body2":"h5",className:P.title,component:"span",display:"block"},w,{children:A})));var M=f;return null==M||M.type===c.a||_||(M=Object(h.jsx)(c.a,Object(o.a)({variant:r?"body2":"body1",className:P.subheader,color:"text.secondary",component:"span",display:"block"},k,{children:M}))),Object(h.jsxs)(g,Object(o.a)({className:Object(l.a)(P.root,m),as:u,ref:t,styleProps:S},C,{children:[r&&Object(h.jsx)(x,{className:P.avatar,styleProps:S,children:r}),Object(h.jsxs)(y,{className:P.content,styleProps:S,children:[A,M]}),i&&Object(h.jsx)(O,{className:P.action,styleProps:S,children:i})]}))}));t.a=_},2837:function(e,t,a){"use strict";var i=a(2),n=a(7),o=a(1),r=(a(12),a(11)),l=a(2686),s=a(8),c=a(14),d=a(2627),m=a(2687);function p(e){return Object(d.a)("MuiCardContent",e)}Object(m.a)("MuiCardContent",["root"]);var u=a(0),b=Object(s.a)("div",{},{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),j=o.forwardRef((function(e,t){var a=Object(c.a)({props:e,name:"MuiCardContent"}),o=a.className,s=a.component,d=void 0===s?"div":s,m=Object(n.a)(a,["className","component"]),j=Object(i.a)({},a,{component:d}),h=function(e){var t=e.classes;return Object(l.a)({root:["root"]},p,t)}(j);return Object(u.jsx)(b,Object(i.a)({as:d,className:Object(r.a)(h.root,o),styleProps:j,ref:t},m))}));t.a=j},3041:function(e,t,a){"use strict";var i=a(56),n=a(7),o=a(2),r=a(1),l=a(11),s=(a(12),a(120)),c=a(2686);a(6);function d(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function m(e){return parseFloat(e)}var p=a(25),u=a(8),b=a(14),j=a(2627),h=a(2687);function g(e){return Object(j.a)("MuiSkeleton",e)}Object(h.a)("MuiSkeleton",["root","text","rectangular","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var x,O,y,_,f,k,v,w,C=a(0),S=Object(s.c)(f||(f=x||(x=Object(i.a)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),P=Object(s.c)(k||(k=O||(O=Object(i.a)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),A=Object(u.a)("span",{},{name:"MuiSkeleton",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return Object(o.a)({},t.root,t[a.variant],!1!==a.animation&&t[a.animation],a.hasChildren&&t.withChildren,a.hasChildren&&!a.width&&t.fitContent,a.hasChildren&&!a.height&&t.heightAuto)}})((function(e){var t=e.theme,a=e.styleProps,i=d(t.shape.borderRadius)||"px",n=m(t.shape.borderRadius);return Object(o.a)({display:"block",backgroundColor:Object(p.a)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===a.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(n).concat(i,"/").concat(Math.round(n/.6*10)/10).concat(i),"&:empty:before":{content:'"\\00a0"'}},"circular"===a.variant&&{borderRadius:"50%"},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})}),(function(e){return"pulse"===e.styleProps.animation&&Object(s.b)(v||(v=y||(y=Object(i.a)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),S)}),(function(e){var t=e.styleProps,a=e.theme;return"wave"===t.animation&&Object(s.b)(w||(w=_||(_=Object(i.a)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(90deg, transparent, ",", transparent);\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),P,a.palette.action.hover)})),M=r.forwardRef((function(e,t){var a=Object(b.a)({props:e,name:"MuiSkeleton"}),i=a.animation,r=void 0===i?"pulse":i,s=a.className,d=a.component,m=void 0===d?"span":d,p=a.height,u=a.style,j=a.variant,h=void 0===j?"text":j,x=a.width,O=Object(n.a)(a,["animation","className","component","height","style","variant","width"]),y=Object(o.a)({},a,{animation:r,component:m,variant:h,hasChildren:Boolean(O.children)}),_=function(e){var t=e.classes,a=e.variant,i=e.animation,n=e.hasChildren,o=e.width,r=e.height,l={root:["root",a,i,n&&"withChildren",n&&!o&&"fitContent",n&&!r&&"heightAuto"]};return Object(c.a)(l,g,t)}(y);return Object(C.jsx)(A,Object(o.a)({as:m,ref:t,className:Object(l.a)(_.root,s),styleProps:y},O,{style:Object(o.a)({width:x,height:p},u)}))}));t.a=M},4469:function(e,t,a){"use strict";function i(){return new Worker(a.p+"static/js/mapbox-gl-csp-worker.94cee184.worker.js")}a.r(t),a.d(t,"default",(function(){return i}))},4613:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return I}));var i=a(4),n=a(3231),o=a.n(n),r=a(1),l=a(8),s=a(3041),c=a(375),d=a(2739),m=a(2719),p=a(2750),u=a(2768),b=a(2837),j=a(20),h=a(378),g=a(2756),x=[{city:"New York",population:"8,175,133",image:"http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/240px-Above_Gotham.jpg",state:"New York",latitude:40.6643,longitude:-73.9385},{city:"Los Angeles",population:"3,792,621",image:"http://upload.wikimedia.org/wikipedia/commons/thumb/5/57/LA_Skyline_Mountains2.jpg/240px-LA_Skyline_Mountains2.jpg",state:"California",latitude:34.0194,longitude:-118.4108},{city:"Chicago",population:"2,695,598",image:"http://upload.wikimedia.org/wikipedia/commons/thumb/8/85/2008-06-10_3000x1000_chicago_skyline.jpg/240px-2008-06-10_3000x1000_chicago_skyline.jpg",state:"Illinois",latitude:41.8376,longitude:-87.6818},{city:"Houston",population:"2,100,263",image:"http://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg/240px-Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg",state:"Texas",latitude:29.7805,longitude:-95.3863},{city:"Phoenix",population:"1,445,632",image:"http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Downtown_Phoenix_Aerial_Looking_Northeast.jpg/207px-Downtown_Phoenix_Aerial_Looking_Northeast.jpg",state:"Arizona",latitude:33.5722,longitude:-112.088},{city:"Philadelphia",population:"1,526,006",image:"http://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Philly_skyline.jpg/240px-Philly_skyline.jpg",state:"Pennsylvania",latitude:40.0094,longitude:-75.1333},{city:"San Antonio",population:"1,327,407",image:"http://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Downtown_San_Antonio_View.JPG/240px-Downtown_San_Antonio_View.JPG",state:"Texas",latitude:29.4724,longitude:-98.5251},{city:"San Diego",population:"1,307,402",image:"http://upload.wikimedia.org/wikipedia/commons/thumb/5/53/US_Navy_110604-N-NS602-574_Navy_and_Marine_Corps_personnel%2C_along_with_community_leaders_from_the_greater_San_Diego_area_come_together_to_commemora.jpg/240px-US_Navy_110604-N-NS602-574_Navy_and_Marine_Corps_personnel%2C_along_with_community_leaders_from_the_greater_San_Diego_area_come_together_to_commemora.jpg",state:"California",latitude:32.8153,longitude:-117.135},{city:"Dallas",population:"1,197,816",image:"http://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dallas_skyline_daytime.jpg/240px-Dallas_skyline_daytime.jpg",state:"Texas",latitude:32.7757,longitude:-96.7967},{city:"San Jose",population:"945,942",image:"http://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Downtown_San_Jose_skyline.PNG/240px-Downtown_San_Jose_skyline.PNG",state:"California",latitude:37.2969,longitude:-121.8193},{city:"Austin",population:"790,390",image:"http://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Austin2012-12-01.JPG/240px-Austin2012-12-01.JPG",state:"Texas",latitude:30.3072,longitude:-97.756},{city:"Jacksonville",population:"821,784",image:"http://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Skyline_of_Jacksonville_FL%2C_South_view_20160706_1.jpg/240px-Skyline_of_Jacksonville_FL%2C_South_view_20160706_1.jpg",state:"Florida",latitude:30.337,longitude:-81.6613},{city:"San Francisco",population:"805,235",image:"http://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/San_Francisco_skyline_from_Coit_Tower.jpg/240px-San_Francisco_skyline_from_Coit_Tower.jpg",state:"California",latitude:37.7751,longitude:-122.4193},{city:"Columbus",population:"787,033",image:"http://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Columbus-ohio-skyline-panorama.jpg/240px-Columbus-ohio-skyline-panorama.jpg",state:"Ohio",latitude:39.9848,longitude:-82.985},{city:"Indianapolis",population:"820,445",image:"http://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Downtown_indy_from_parking_garage_zoom.JPG/213px-Downtown_indy_from_parking_garage_zoom.JPG",state:"Indiana",latitude:39.7767,longitude:-86.1459},{city:"Fort Worth",population:"741,206",image:"http://upload.wikimedia.org/wikipedia/commons/thumb/d/db/FortWorthTexasSkylineW.jpg/240px-FortWorthTexasSkylineW.jpg",state:"Texas",latitude:32.7795,longitude:-97.3463},{city:"Charlotte",population:"731,424",image:"http://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Charlotte_skyline45647.jpg/222px-Charlotte_skyline45647.jpg",state:"North Carolina",latitude:35.2087,longitude:-80.8307},{city:"Seattle",population:"608,660",image:"http://upload.wikimedia.org/wikipedia/commons/thumb/3/36/SeattleI5Skyline.jpg/240px-SeattleI5Skyline.jpg",state:"Washington",latitude:47.6205,longitude:-122.3509},{city:"Denver",population:"600,158",image:"http://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/DenverCP.JPG/240px-DenverCP.JPG",state:"Colorado",latitude:39.7618,longitude:-104.8806},{city:"El Paso",population:"649,121",image:"http://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Downtown_El_Paso_at_sunset.jpeg/240px-Downtown_El_Paso_at_sunset.jpeg",state:"Texas",latitude:31.8484,longitude:-106.427}],O=a(5),y=a.n(O),_=[{timezones:["America/Aruba"],latlng:[12.5,-69.96666666],name:"Aruba",country_code:"AW",capital:"Oranjestad",photo:y.a.image.image()},{timezones:["Asia/Kabul"],latlng:[33,65],name:"Afghanistan",country_code:"AF",capital:"Kabul",photo:y.a.image.image()},{timezones:["Africa/Luanda"],latlng:[-12.5,18.5],name:"Angola",country_code:"AO",capital:"Luanda",photo:y.a.image.image()},{timezones:["Pacific/Efate"],latlng:[-16,167],name:"Vanuatu",country_code:"VU",capital:"Port Vila",photo:y.a.image.image()},{timezones:["Pacific/Wallis"],latlng:[-13.3,-176.2],name:"Wallis and Futuna",country_code:"WF",capital:"Mata-Utu",photo:y.a.image.image()},{timezones:["Pacific/Apia"],latlng:[-13.58333333,-172.33333333],name:"Samoa",country_code:"WS",capital:"Apia",photo:y.a.image.image()},{timezones:["Asia/Aden"],latlng:[15,48],name:"Yemen",country_code:"YE",capital:"Sana'a",photo:y.a.image.image()},{timezones:["Africa/Johannesburg"],latlng:[-29,24],name:"South Africa",country_code:"ZA",capital:"Pretoria",photo:y.a.image.image()},{timezones:["Africa/Lusaka"],latlng:[-15,30],name:"Zambia",country_code:"ZM",capital:"Lusaka",photo:y.a.image.image()},{timezones:["Africa/Harare"],latlng:[-20,30],name:"Zimbabwe",country_code:"ZW",capital:"Harare",photo:y.a.image.image()}],f=a(179),k=a(0);o.a.workerClass=a(4469).default;var v={streets:"mapbox://styles/mapbox/streets-v11",outdoors:"mapbox://styles/mapbox/outdoors-v11",light:"mapbox://styles/mapbox/light-v10",dark:"mapbox://styles/mapbox/dark-v10",satellite:"mapbox://styles/mapbox/satellite-v9",satelliteStreets:"mapbox://styles/mapbox/satellite-streets-v11"},w={mapboxApiAccessToken:f.c,width:"100%",height:"100%",minZoom:1},C=Object(l.a)(h.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}})),S=Object(l.a)("div")((function(e){return{zIndex:0,height:560,overflow:"hidden",position:"relative",borderRadius:e.theme.shape.borderRadius,"& .mapboxgl-ctrl-logo, .mapboxgl-ctrl-bottom-right":{display:"none"}}})),P=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(9),a.e(72)]).then(a.bind(null,3278))})),A=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(9),a.e(119)]).then(a.bind(null,3266))})),M=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(128)]).then(a.bind(null,3247))})),N=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(117)]).then(a.bind(null,3275))})),z=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(135),a.e(109)]).then(a.bind(null,3249))})),T=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(116)]).then(a.bind(null,3248))})),D=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(24),a.e(99)]).then(a.bind(null,3232))})),R=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(2),a.e(110)]).then(a.bind(null,3277))})),J=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(120)]).then(a.bind(null,3279))})),W=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(118)]).then(a.bind(null,3276))})),F=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(114)]).then(a.bind(null,3245))})),G=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(115)]).then(a.bind(null,3246))})),H=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(121)]).then(a.bind(null,3280))})),L=Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(s.a,{width:"100%",height:560,variant:"rectangular",sx:{borderRadius:2,mb:5}}),Object(k.jsx)(s.a,{width:"100%",height:560,variant:"rectangular",sx:{borderRadius:2}})]});function I(){return Object(k.jsxs)(C,{title:"Components: Map | Minimal-UI",children:[Object(k.jsx)(c.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(k.jsx)(d.a,{maxWidth:"lg",children:Object(k.jsx)(g.a,{heading:"Map",links:[{name:"Components",href:j.d.components},{name:"Map"}],moreLink:["http://visgl.github.io/react-map-gl","https://docs.mapbox.com-js/example"]})})}),Object(k.jsx)(d.a,{maxWidth:"lg",children:Object(k.jsx)(r.Suspense,{fallback:L,children:Object(k.jsxs)(m.a,{container:!0,spacing:3,children:[Object(k.jsx)(m.a,{item:!0,xs:12,children:Object(k.jsxs)(p.a,{sx:{mb:3},children:[Object(k.jsx)(u.a,{title:"Map Change Theme"}),Object(k.jsx)(b.a,{children:Object(k.jsx)(S,{children:Object(k.jsx)(N,Object(i.a)(Object(i.a)({},w),{},{themes:v}))})})]})}),Object(k.jsx)(m.a,{item:!0,xs:12,children:Object(k.jsxs)(p.a,{sx:{mb:3},children:[Object(k.jsx)(u.a,{title:"Map Dynamic Styling"}),Object(k.jsx)(b.a,{children:Object(k.jsx)(S,{children:Object(k.jsx)(R,Object(i.a)({},w))})})]})}),Object(k.jsx)(m.a,{item:!0,xs:12,children:Object(k.jsxs)(p.a,{sx:{mb:3},children:[Object(k.jsx)(u.a,{title:"Map Markers & Popups"}),Object(k.jsx)(b.a,{children:Object(k.jsx)(S,{children:Object(k.jsx)(T,Object(i.a)(Object(i.a)({},w),{},{data:_,mapStyle:v.light}))})})]})}),Object(k.jsx)(m.a,{item:!0,xs:12,children:Object(k.jsxs)(p.a,{sx:{mb:3},children:[Object(k.jsx)(u.a,{title:"Map Draggable Markers"}),Object(k.jsx)(b.a,{children:Object(k.jsx)(S,{children:Object(k.jsx)(W,Object(i.a)(Object(i.a)({},w),{},{mapStyle:v.light}))})})]})}),Object(k.jsx)(m.a,{item:!0,xs:12,children:Object(k.jsxs)(p.a,{sx:{mb:3},children:[Object(k.jsx)(u.a,{title:"Map Geojson"}),Object(k.jsx)(b.a,{children:Object(k.jsx)(S,{children:Object(k.jsx)(A,Object(i.a)(Object(i.a)({},w),{},{mapStyle:v.light}))})})]})}),Object(k.jsx)(m.a,{item:!0,xs:12,children:Object(k.jsxs)(p.a,{sx:{mb:3},children:[Object(k.jsx)(u.a,{title:"Map Geojson Animation"}),Object(k.jsx)(b.a,{children:Object(k.jsx)(S,{children:Object(k.jsx)(F,Object(i.a)(Object(i.a)({},w),{},{mapStyle:v.satelliteStreets}))})})]})}),Object(k.jsx)(m.a,{item:!0,xs:12,children:Object(k.jsxs)(p.a,{sx:{mb:3},children:[Object(k.jsx)(u.a,{title:"Map Clusters"}),Object(k.jsx)(b.a,{children:Object(k.jsx)(S,{children:Object(k.jsx)(M,Object(i.a)(Object(i.a)({},w),{},{mapStyle:v.light}))})})]})}),Object(k.jsx)(m.a,{item:!0,xs:12,children:Object(k.jsxs)(p.a,{sx:{mb:3},children:[Object(k.jsx)(u.a,{title:"Map Interaction"}),Object(k.jsx)(b.a,{children:Object(k.jsx)(S,{children:Object(k.jsx)(J,Object(i.a)(Object(i.a)({},w),{},{mapStyle:v.light}))})})]})}),Object(k.jsx)(m.a,{item:!0,xs:12,children:Object(k.jsxs)(p.a,{sx:{mb:3},children:[Object(k.jsx)(u.a,{title:"Map Viewport Animation"}),Object(k.jsx)(b.a,{children:Object(k.jsx)(S,{children:Object(k.jsx)(H,Object(i.a)(Object(i.a)({},w),{},{data:x.filter((function(e){return"Texas"===e.state})),mapStyle:v.light}))})})]})}),Object(k.jsx)(m.a,{item:!0,xs:12,children:Object(k.jsxs)(p.a,{sx:{mb:3},children:[Object(k.jsx)(u.a,{title:"Map Highlight By Filter"}),Object(k.jsx)(b.a,{children:Object(k.jsx)(S,{children:Object(k.jsx)(G,Object(i.a)(Object(i.a)({},w),{},{mapStyle:v.light}))})})]})}),Object(k.jsx)(m.a,{item:!0,xs:12,children:Object(k.jsxs)(p.a,{sx:{mb:3},children:[Object(k.jsx)(u.a,{title:"Map Zoom To Bounds"}),Object(k.jsx)(b.a,{children:Object(k.jsx)(S,{children:Object(k.jsx)(z,Object(i.a)({},w))})})]})}),Object(k.jsx)(m.a,{item:!0,xs:12,children:Object(k.jsxs)(p.a,{sx:{mb:3},children:[Object(k.jsx)(u.a,{title:"Map Deckgl Overlay"}),Object(k.jsx)(b.a,{children:Object(k.jsx)(S,{children:Object(k.jsx)(D,Object(i.a)(Object(i.a)({},w),{},{mapStyle:v.light}))})})]})}),Object(k.jsx)(m.a,{item:!0,xs:12,children:Object(k.jsxs)(p.a,{children:[Object(k.jsx)(u.a,{title:"Map Heatmap"}),Object(k.jsx)(b.a,{children:Object(k.jsx)(S,{children:Object(k.jsx)(P,Object(i.a)(Object(i.a)({},w),{},{mapStyle:v.light}))})})]})})]})})})]})}}}]);
//# sourceMappingURL=70.32760258.chunk.js.map