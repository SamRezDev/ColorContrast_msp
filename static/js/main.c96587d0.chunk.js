(this.webpackJsonpcolorcontrast=this.webpackJsonpcolorcontrast||[]).push([[0],[,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var o=n(1),c=n.n(o),r=n(4),s=n.n(r),i=(n(9),n(2)),a=(n(10),n(11),n(0));function u(t){var e=Object(o.useState)("#a663c5"),n=Object(i.a)(e,2),c=n[0],r=n[1],s=Object(o.useState)(""),u=Object(i.a)(s,2),l=u[0],b=u[1];function d(){var t=Math.floor(16777215*Math.random()).toString(16);r("#"+t),console.log(c),function(t){t=t.replace("#","");var e=parseInt(t.substr(0,2),16),n=parseInt(t.substr(2,2),16),o=parseInt(t.substr(4,2),16);b((299*e+587*n+114*o)/1e3>=128?"#000":"#FFFFFF")}(c)}return Object(o.useEffect)((function(){d()}),[]),Object(a.jsxs)("div",{className:"TileContainer",style:{backgroundColor:c},children:[Object(a.jsxs)("div",{className:"SecondaryContainer",children:[" ",Object(a.jsxs)("button",{className:"CloseButton",style:{border:"none",color:c,backgroundColor:l},onClick:function(){return t.RemoveContainer(t.id)},children:[" ","X"]})," "]}),Object(a.jsxs)("div",{className:"MainContainer",children:[Object(a.jsxs)("div",{className:"HexCodeSection",style:{color:l},children:[" ",c]}),Object(a.jsx)("button",{className:"GenColorButton",style:{border:"none",color:c,backgroundColor:l},onClick:function(){return d()},children:"GENERATE COLOR"})]})]})}var l=function(){var t=Object(o.useState)([]),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(o.useState)(!1),s=Object(i.a)(r,2),l=s[0],b=s[1];function d(t){c(n.filter((function(e){return t!==e.id}))),console.log(n)}return Object(o.useEffect)((function(){l&&function(){var t=Date.now(),e=n;e.push({id:t}),c(e),console.log(n)}()}),[l]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("button",{title:"Double click it!",className:"AddContainerButton",onClick:function(){return b(!l)},children:" +"}),n.map((function(t){return Object(a.jsx)(u,{id:t.id,RemoveContainer:d},t.id)}))]})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),o(t),c(t),r(t),s(t)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(l,{})}),document.getElementById("root")),b()}],[[13,1,2]]]);
//# sourceMappingURL=main.c96587d0.chunk.js.map