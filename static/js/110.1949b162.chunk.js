(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[110],{2769:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return b})),r.d(t,"d",(function(){return y})),r.d(t,"e",(function(){return g})),r.d(t,"f",(function(){return h}));var a=r(4),o=r(2757),i=r(8),n=r(0),l=Object(i.a)(o.b)((function(e){var t=e.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",top:t.spacing(1.5),left:t.spacing(1.5),boxShadow:t.customShadows.z8,"& span.mapboxgl-ctrl-icon":{transform:" scale(0.75)"}}}));function c(e){var t=Object.assign({},e);return Object(n.jsx)(l,Object(a.a)({},t))}var s=Object(i.a)(o.c)((function(e){var t=e.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",top:t.spacing(6),left:t.spacing(1.5),boxShadow:t.customShadows.z8}}));function p(e){var t=Object.assign({},e);return Object(n.jsx)(s,Object(a.a)({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0},t))}var u=r(31),d=Object(i.a)("svg")((function(e){return{height:20,stroke:"none",cursor:"pointer",fill:e.theme.palette.error.main,transform:"translate(".concat(-10,"px,").concat(-20,"px)")}}));function b(e){var t=e.onClick,r=Object(u.a)(e,["onClick"]);return Object(n.jsx)(o.f,Object(a.a)(Object(a.a)({},r),{},{children:Object(n.jsx)(d,{viewBox:"0 0 24 24",onClick:t,children:Object(n.jsx)("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"})})}))}var m=Object(i.a)(o.g)((function(e){var t=e.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",bottom:t.spacing(6),left:t.spacing(1.5),boxShadow:t.customShadows.z8,"& button+button":{borderTop:"1px solid ".concat(t.palette.divider)}}}));function y(e){var t=Object.assign({},e);return Object(n.jsx)(m,Object(a.a)({},t))}var x=Object(i.a)(o.h)((function(e){var t=e.theme,r="rtl"===t.direction;return{"& .mapboxgl-popup-content":{maxWidth:180,padding:t.spacing(1),boxShadow:t.customShadows.z20,borderRadius:t.shape.borderRadius,backgroundColor:t.palette.grey[800]},"& .mapboxgl-popup-close-button":{width:24,height:24,fontSize:16,opacity:.48,color:t.palette.common.white,right:r&&"0",left:r&&"auto","&:hover":{opacity:1},"&:focus":{outline:"none"}},"&.mapboxgl-popup-anchor-top .mapboxgl-popup-tip":{marginBottom:-1,borderBottomColor:t.palette.grey[800]},"&.mapboxgl-popup-anchor-right .mapboxgl-popup-tip":{marginLeft:-1,borderLeftColor:t.palette.grey[800]},"&.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip":{marginTop:-1,borderTopColor:t.palette.grey[800]},"&.mapboxgl-popup-anchor-left .mapboxgl-popup-tip":{marginRight:-1,borderRightColor:t.palette.grey[800]}}}));function g(e){var t=e.children,r=e.onClose,o=Object(u.a)(e,["children","onClose"]);return Object(n.jsx)(x,Object(a.a)(Object(a.a)({tipSize:8,anchor:"bottom",onClose:r,closeButton:!0,closeOnClick:!1},o),{},{children:t}))}var f=Object(i.a)("div")((function(e){var t=e.theme;return{zIndex:99,position:"absolute",left:t.spacing(1.5),bottom:t.spacing(3.5),boxShadow:t.customShadows.z8,"& .mapboxgl-ctrl":{border:"none",borderRadius:4,lineHeight:"14px",color:t.palette.common.white,backgroundImage:"linear-gradient(to right, #8a2387, #e94057, #f27121)"}}}));function h(e){var t=e.sx,r=Object(u.a)(e,["sx"]);return Object(n.jsx)(f,{sx:t,children:Object(n.jsx)(o.i,Object(a.a)({maxWidth:100,unit:"imperial"},r))})}},2978:function(e){e.exports=JSON.parse('{"version":8,"name":"Basic","metadata":{"mapbox:autocomposite":true},"sources":{"mapbox":{"url":"mapbox://mapbox.mapbox-streets-v7","type":"vector"}},"sprite":"mapbox://sprites/mapbox/basic-v8","glyphs":"mapbox://fonts/mapbox/{fontstack}/{range}.pbf","layers":[{"id":"background","type":"background","paint":{"background-color":"#dedede"},"interactive":true},{"id":"landuse_overlay_national_park","type":"fill","source":"mapbox","source-layer":"landuse_overlay","filter":["==","class","national_park"],"paint":{"fill-color":"#d2edae","fill-opacity":0.75},"interactive":true},{"id":"landuse_park","type":"fill","source":"mapbox","source-layer":"landuse","filter":["==","class","park"],"paint":{"fill-color":"#d2edae"},"interactive":true},{"id":"waterway","type":"line","source":"mapbox","source-layer":"waterway","filter":["all",["==","$type","LineString"],["in","class","river","canal"]],"paint":{"line-color":"#a0cfdf","line-width":{"base":1.4,"stops":[[8,0.5],[20,15]]}},"interactive":true},{"id":"water","type":"fill","source":"mapbox","source-layer":"water","paint":{"fill-color":"#a0cfdf"},"interactive":true},{"id":"building","type":"fill","source":"mapbox","source-layer":"building","paint":{"fill-color":"#d6d6d6"},"interactive":true},{"interactive":true,"layout":{"line-cap":"butt","line-join":"miter"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["==","structure","tunnel"]]],"type":"line","source":"mapbox","id":"tunnel_minor","paint":{"line-color":"#efefef","line-width":{"base":1.55,"stops":[[4,0.25],[20,30]]},"line-dasharray":[0.36,0.18]},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"butt","line-join":"miter"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["==","structure","tunnel"]]],"type":"line","source":"mapbox","id":"tunnel_major","paint":{"line-color":"#fff","line-width":{"base":1.4,"stops":[[6,0.5],[20,30]]},"line-dasharray":[0.28,0.14]},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["in","structure","none","ford"]]],"type":"line","source":"mapbox","id":"road_minor","paint":{"line-color":"#efefef","line-width":{"base":1.55,"stops":[[4,0.25],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["in","structure","none","ford"]]],"type":"line","source":"mapbox","id":"road_major","paint":{"line-color":"#fff","line-width":{"base":1.4,"stops":[[6,0.5],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"butt","line-join":"miter"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["==","structure","bridge"]]],"type":"line","source":"mapbox","id":"bridge_minor case","paint":{"line-color":"#dedede","line-width":{"base":1.6,"stops":[[12,0.5],[20,10]]},"line-gap-width":{"base":1.55,"stops":[[4,0.25],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"butt","line-join":"miter"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["==","structure","bridge"]]],"type":"line","source":"mapbox","id":"bridge_major case","paint":{"line-color":"#dedede","line-width":{"base":1.6,"stops":[[12,0.5],[20,10]]},"line-gap-width":{"base":1.55,"stops":[[4,0.25],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["==","structure","bridge"]]],"type":"line","source":"mapbox","id":"bridge_minor","paint":{"line-color":"#efefef","line-width":{"base":1.55,"stops":[[4,0.25],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["==","structure","bridge"]]],"type":"line","source":"mapbox","id":"bridge_major","paint":{"line-color":"#fff","line-width":{"base":1.4,"stops":[[6,0.5],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["<=","admin_level",2],["==","maritime",0]]],"type":"line","source":"mapbox","id":"admin_country","paint":{"line-color":"#8b8a8a","line-width":{"base":1.3,"stops":[[3,0.5],[22,15]]}},"source-layer":"admin"},{"interactive":true,"minzoom":5,"layout":{"icon-image":"{maki}-11","text-offset":[0,0.5],"text-field":"{name_en}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-max-width":8,"text-anchor":"top","text-size":11,"icon-size":1},"filter":["all",["==","$type","Point"],["all",["==","scalerank",1],["==","localrank",1]]],"type":"symbol","source":"mapbox","id":"poi_label","paint":{"text-color":"#666","text-halo-width":1,"text-halo-color":"rgba(255,255,255,0.75)","text-halo-blur":1},"source-layer":"poi_label"},{"interactive":true,"layout":{"symbol-placement":"line","text-field":"{name_en}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-transform":"uppercase","text-letter-spacing":0.1,"text-size":{"base":1.4,"stops":[[10,8],[20,14]]}},"filter":["all",["==","$type","LineString"],["in","class","motorway","primary","secondary","tertiary","trunk"]],"type":"symbol","source":"mapbox","id":"road_major_label","paint":{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":2},"source-layer":"road_label"},{"interactive":true,"minzoom":8,"layout":{"text-field":"{name_en}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-max-width":6,"text-size":{"stops":[[6,12],[12,16]]}},"filter":["all",["==","$type","Point"],["in","type","town","village","hamlet","suburb","neighbourhood","island"]],"type":"symbol","source":"mapbox","id":"place_label_other","paint":{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":1,"text-halo-blur":1},"source-layer":"place_label"},{"interactive":true,"layout":{"text-field":"{name_en}","text-font":["Open Sans Bold","Arial Unicode MS Bold"],"text-max-width":10,"text-size":{"stops":[[3,12],[8,16]]}},"maxzoom":16,"filter":["all",["==","$type","Point"],["==","type","city"]],"type":"symbol","source":"mapbox","id":"place_label_city","paint":{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":1,"text-halo-blur":1},"source-layer":"place_label"},{"interactive":true,"layout":{"text-field":"{name_en}","text-font":["Open Sans Regular","Arial Unicode MS Regular"],"text-max-width":10,"text-size":{"stops":[[3,14],[8,22]]}},"maxzoom":12,"filter":["==","$type","Point"],"type":"symbol","source":"mapbox","id":"country_label","paint":{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":1,"text-halo-blur":1},"source-layer":"country_label"}]}')},3277:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return S}));var a=r(4),o=r(17),i=r(2757),n=r(1),l=r(2769),c=r(6),s=r(3167),p=r(8),u=r(25),d=r(58),b=r(375),m=r(598),y=r(2729),x=r(2978),g=r(0),f=Object(s.fromJS)(x),h=["labels","roads","buildings","parks","water","background"],j={background:/background/,water:/water/,parks:/park/,buildings:/building/,roads:/bridge|road|tunnel/,labels:/label|place|poi/},v={line:"line-color",fill:"fill-color",background:"background-color",symbol:"text-color"},O=Object(p.a)("div")((function(e){var t=e.theme;return{zIndex:99,minWidth:200,position:"absolute",top:t.spacing(1),right:t.spacing(1),padding:t.spacing(2),backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",borderRadius:t.shape.borderRadius,backgroundColor:Object(u.a)(t.palette.grey[900],.72)}})),w=Object(p.a)("div")((function(e){var t=e.theme;return{width:20,height:20,display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",marginRight:t.spacing(1),border:"solid 1px ".concat(t.palette.grey[500]),"& input":{width:12,height:12,border:"none",outline:"none",cursor:"pointer",WebkitAppearance:"none",backgroundColor:"transparent","&::-webkit-color-swatch-wrapper":{padding:0},"&::-moz-color-swatch":{border:"none",borderRadius:"50%"},"&::-webkit-color-swatch":{border:"none",borderRadius:"50%"}}}}));function k(e){var t=e.onChange,r=Object(d.a)(),i=Object(n.useState)({water:!0,parks:!0,roads:!0,labels:!0,buildings:!0,background:!0}),l=Object(o.a)(i,2),s=l[0],p=l[1],u=Object(n.useState)({water:r.palette.grey[900],labels:r.palette.grey[800],parks:r.palette.primary.dark,buildings:r.palette.grey[900],background:r.palette.grey[700],roads:r.palette.warning.darker}),x=Object(o.a)(u,2),k=x[0],S=x[1];Object(n.useEffect)((function(){_({color:k,visibility:s})}),[k,s]);var _=function(e){var r=e.color,a=e.visibility,o=f.get("layers").filter((function(e){var t=e.get("id");return h.every((function(e){return a[e]||!j[e].test(t)}))})).map((function(e){var t=e.get("id"),a=e.get("type"),o=h.find((function(e){return j[e].test(t)}));return o&&v[a]?e.setIn(["paint",v[a]],r[o]):e}));t(f.set("layers",o))};return Object(g.jsx)(O,{children:h.map((function(e){return Object(g.jsxs)(b.a,{sx:{py:1,display:"flex",alignItems:"center"},children:[Object(g.jsx)(w,{sx:Object(a.a)({},!s[e]&&{opacity:.48}),children:Object(g.jsx)("input",{type:"color",value:k[e],disabled:!s[e],onChange:function(t){return function(e,t){var r=Object(a.a)(Object(a.a)({},k),{},Object(c.a)({},t,e.target.value));S(r),_({color:r,visibility:s})}(t,e)}})}),Object(g.jsx)(m.a,{variant:"body2",sx:{flexGrow:1,textTransform:"capitalize",color:s[e]?"common.white":"text.disabled"},children:e}),Object(g.jsx)(y.a,{size:"small",checked:s[e],onChange:function(t){return function(e,t){var r=Object(a.a)(Object(a.a)({},s),{},Object(c.a)({},t,e.target.checked));p(r),_({color:k,visibility:r})}(t,e)}})]},e)}))})}function S(e){var t=Object.assign({},e),r=Object(n.useState)(""),c=Object(o.a)(r,2),s=c[0],p=c[1],u=Object(n.useState)({latitude:37.805,longitude:-122.447,zoom:15.5,bearing:0,pitch:0}),d=Object(o.a)(u,2),b=d[0],m=d[1];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(i.l,Object(a.a)(Object(a.a)(Object(a.a)({},b),{},{mapStyle:s,onViewportChange:m},t),{},{children:[Object(g.jsx)(l.f,{}),Object(g.jsx)(l.d,{}),Object(g.jsx)(l.a,{}),Object(g.jsx)(l.b,{})]})),Object(g.jsx)(k,{onChange:p})]})}}}]);
//# sourceMappingURL=110.1949b162.chunk.js.map