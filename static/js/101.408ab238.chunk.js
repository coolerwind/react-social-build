(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[101],{2756:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(4),i=n(31),c=n(30),s=n(2633),l=n(375),r=n(598),o=n(2730),j=n(39),x=n(0);function d(e){var t=e.links,n=e.action,d=e.heading,b=e.moreLink,u=void 0===b?[]:b,O=e.sx,m=Object(i.a)(e,["links","action","heading","moreLink","sx"]);return Object(x.jsxs)(s.a,{sx:O,mb:5,spacing:2,children:[Object(x.jsxs)(s.a,{direction:"row",alignItems:"center",children:[Object(x.jsxs)(l.a,{sx:{flexGrow:1},children:[Object(x.jsx)(r.a,{variant:"h4",gutterBottom:!0,children:d}),Object(x.jsx)(j.c,Object(a.a)({links:t},m))]}),n&&Object(x.jsx)(l.a,{sx:{flexShrink:0},children:n})]}),Object(c.isString)(u)?Object(x.jsx)(o.a,{href:u,target:"_blank",variant:"body2",children:u}):u.map((function(e){return Object(x.jsx)(o.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},2759:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return j}));var a=n(4),i=n(598),c=n(2750),s=n(2768),l=n(375),r=n(0);function o(e){var t=e.title;return Object(r.jsx)(i.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function j(e){var t=e.title,n=e.sx,i=e.children;return Object(r.jsxs)(c.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(r.jsx)(s.a,{title:t}),Object(r.jsx)(l.a,{sx:Object(a.a)({p:3,minHeight:180},n),children:i})]})}},4555:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return F}));var a=n(17),i=n(4),c=n(31),s=n(1),l=n(3039),r=n.n(l),o=n(4449),j=n.n(o),x=n(4448),d=n.n(x),b=n(4451),u=n.n(b),O=n(4447),m=n.n(O),h=n(4450),f=n.n(h),p=n(8),g=n(2637),v=n(3108),k=n(375),y=n(2739),C=n(2633),w=n(20),V=n(378),z=n(2756),S=n(2759),H=n(0),I={.5:"Useless",1:"Useless+",1.5:"Poor",2:"Poor+",2.5:"Ok",3:"Ok+",3.5:"Good",4:"Good+",4.5:"Excellent",5:"Excellent+"},L={1:{icon:Object(H.jsx)(m.a,{}),label:"Very Dissatisfied"},2:{icon:Object(H.jsx)(d.a,{}),label:"Dissatisfied"},3:{icon:Object(H.jsx)(j.a,{}),label:"Neutral"},4:{icon:Object(H.jsx)(f.a,{}),label:"Satisfied"},5:{icon:Object(H.jsx)(u.a,{}),label:"Very Satisfied"}},B={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}},R=Object(p.a)(V.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}})),W=Object(g.a)({iconFilled:{color:"#FF4842"},iconHover:{color:"#B72136"}})(v.a);function D(e){var t=e.value,n=Object(c.a)(e,["value"]);return Object(H.jsx)("span",Object(i.a)(Object(i.a)({},n),{},{children:L[t].icon}))}function F(){var e=Object(s.useState)(2),t=Object(a.a)(e,2),n=t[0],i=t[1],c=Object(s.useState)(-1),l=Object(a.a)(c,2),o=l[0],j=l[1];return Object(H.jsxs)(R,{title:"Components: Rating | Minimal-UI",children:[Object(H.jsx)(k.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(H.jsx)(y.a,{maxWidth:"lg",children:Object(H.jsx)(z.a,{heading:"Rating",links:[{name:"Components",href:w.d.components},{name:"Rating"}],moreLink:"https://next.material-ui.com/components/rating"})})}),Object(H.jsx)(y.a,{maxWidth:"lg",children:Object(H.jsxs)(C.a,{spacing:3,children:[Object(H.jsxs)(C.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(H.jsx)(S.a,{title:"Controlled",sx:B,children:Object(H.jsx)(v.a,{name:"simple-controlled",value:n,onChange:function(e,t){i(t)}})}),Object(H.jsx)(S.a,{title:"Read only",sx:B,children:Object(H.jsx)(v.a,{name:"read-only",value:n,readOnly:!0})}),Object(H.jsx)(S.a,{title:"Disabled",sx:B,children:Object(H.jsx)(v.a,{name:"disabled",value:n,disabled:!0})})]}),Object(H.jsxs)(C.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(H.jsx)(S.a,{title:"Pristine",sx:B,children:Object(H.jsx)(v.a,{name:"pristine",value:null})}),Object(H.jsx)(S.a,{title:"Custom empty icon",sx:B,children:Object(H.jsx)(v.a,{name:"customized-empty",defaultValue:2,precision:.5})}),Object(H.jsx)(S.a,{title:"Custom icon and color",sx:B,children:Object(H.jsx)(W,{name:"customized-color",defaultValue:2,getLabelText:function(e){return"".concat(e," Heart").concat(1!==e?"s":"")},precision:.5,icon:Object(H.jsx)(r.a,{}),emptyIcon:Object(H.jsx)(r.a,{})})})]}),Object(H.jsxs)(C.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(H.jsx)(S.a,{title:"10 stars",sx:B,children:Object(H.jsx)(v.a,{name:"customized-10",defaultValue:2,max:10})}),Object(H.jsx)(S.a,{title:"Custom icon set",sx:B,children:Object(H.jsx)(v.a,{name:"customized-icons",defaultValue:2,getLabelText:function(e){return L[e].label},IconContainerComponent:D})}),Object(H.jsxs)(S.a,{title:"Hover feedback",sx:B,children:[Object(H.jsx)(v.a,{name:"hover-feedback",value:n,precision:.5,onChange:function(e,t){i(t)},onChangeActive:function(e,t){j(t)}}),null!==n&&Object(H.jsx)(k.a,{sx:{ml:2},children:I[-1!==o?o:n]})]})]}),Object(H.jsxs)(C.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(H.jsxs)(S.a,{title:"Half ratings",sx:B,children:[Object(H.jsx)(v.a,{name:"half-rating",defaultValue:2.5,precision:.5}),Object(H.jsx)("br",{}),Object(H.jsx)(v.a,{name:"half-rating-read",defaultValue:2.5,precision:.5,readOnly:!0})]}),Object(H.jsxs)(S.a,{title:"Sizes",sx:B,children:[Object(H.jsx)(v.a,{name:"size-small",defaultValue:2,size:"small"}),Object(H.jsx)("br",{}),Object(H.jsx)(v.a,{name:"size-medium",defaultValue:2}),Object(H.jsx)("br",{}),Object(H.jsx)(v.a,{name:"size-large",defaultValue:2,size:"large"})]})]})]})})]})}}}]);
//# sourceMappingURL=101.408ab238.chunk.js.map