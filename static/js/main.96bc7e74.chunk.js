(this.webpackJsonpcolorcontrast=this.webpackJsonpcolorcontrast||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n.n(o),r=n(6),s=n.n(r),i=(n(12),n(7)),a=n(3),l=(n(13),n(14),n(0));function u(t){var e=Object(o.useState)("#a663c5"),n=Object(a.a)(e,2),c=n[0],r=n[1],s=Object(o.useState)(""),i=Object(a.a)(s,2),u=i[0],d=i[1];function b(){var t=Math.floor(16777215*Math.random()).toString(16);r("#"+t),console.log(c),function(t){t=t.replace("#","");var e=parseInt(t.substr(0,2),16),n=parseInt(t.substr(2,2),16),o=parseInt(t.substr(4,2),16);d((299*e+587*n+114*o)/1e3>=128?"#000":"#FFFFFF")}(c)}return Object(o.useEffect)((function(){b()}),[]),Object(l.jsxs)("div",{className:"TileContainer",style:{backgroundColor:c},children:[Object(l.jsxs)("div",{className:"SecondaryContainer",children:[" ",Object(l.jsxs)("button",{className:"CloseButton",style:{border:"none",color:c,backgroundColor:u},onClick:function(){return t.RemoveContainer(t.id)},children:[" ","X"]})," "]}),Object(l.jsxs)("div",{className:"MainContainer",children:[Object(l.jsxs)("div",{className:"HexCodeSection",style:{color:u},children:[" ",c]}),Object(l.jsx)("button",{className:"GenColorButton",style:{border:"none",color:c,backgroundColor:u},onClick:function(){return b()},children:"GENERATE COLOR"})]})]})}var d=function(){var t=Object(o.useState)([]),e=Object(a.a)(t,2),n=e[0],c=e[1];function r(t){c(n.filter((function(e){return t!==e.id}))),console.log(n)}return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("button",{title:"Double click it!",className:"AddContainerButton",onClick:function(){var t=Date.now(),e=Object(i.a)(n);e.push({id:t}),c(e),console.log(n)},children:" +"}),n.map((function(t){return Object(l.jsx)(u,{id:t.id,RemoveContainer:r},t.id)}))]})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),o(t),c(t),r(t),s(t)}))};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.96bc7e74.chunk.js.map