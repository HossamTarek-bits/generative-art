(this["webpackJsonpgenerative-art"]=this["webpackJsonpgenerative-art"]||[]).push([[0],{101:function(t,e){},121:function(t,e,a){"use strict";a.r(e);var r=a(0),i=a.n(r),n=a(19),s=a.n(n),o=(a(76),a(77),a(24)),c=a(27),h=a(1),l=function(){var t=Object(c.a)({step:{value:64,min:5,max:100,step:1},strokeWeight:{value:Math.floor(3*Math.random())+1,min:1,max:30},color:["#3E065F","#700B97","#8E05C2"][Math.floor(3*Math.random())]}),e=t.step,a=t.strokeWeight,r=t.color;return Object(h.jsx)(o.a,{sketch:function(t){var i=.7*t.windowHeight,n=.7*t.windowHeight,s=function(t,e,i,n,s){var o=t.random([!1,!0]);t.stroke(r),t.strokeWeight(a),o?t.line(e,i,e+n,i+s):t.line(e+n,i,e,i+s)};t.setup=function(){t.createCanvas(i,n);for(var a=0;a<i;a+=e)for(var r=0;r<i;r+=e)s(t,a,r,e,e)},t.draw=function(){}}})},u=a(25),d=a(26),v=function(){function t(e,a,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:15,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:30,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"#3E065F",c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:3;Object(u.a)(this,t),this.radius=Math.floor(e.random(i,n)),this.pos=e.createVector(a,r),this.vel=e.createVector(e.random(-1,1)*s,e.random(-1,1)*s),this.color=o,this.strokeWeight=c}return Object(d.a)(t,[{key:"update",value:function(){this.pos.x+=this.vel.x,this.pos.y+=this.vel.y}},{key:"bounce",value:function(t,e){(this.pos.x-this.radius<=0||this.pos.x+this.radius>=t)&&(this.vel.x*=-1),(this.pos.y-this.radius<=0||this.pos.y+this.radius>=e)&&(this.vel.y*=-1)}},{key:"draw",value:function(t){t.stroke(this.color),t.noFill(),t.strokeWeight(this.strokeWeight),t.ellipse(this.pos.x,this.pos.y,this.radius)}}]),t}(),f=function(){var t=Object(c.a)({num:{value:30,min:1,max:100,step:1},speed:{value:1,min:1,max:30},radiusMin:{value:15,min:1,max:30},radiusMax:{value:30,min:30,max:300},strokeWeight:{value:Math.floor(3*Math.random())+1,min:1,max:30},color:["#3E065F","#700B97","#8E05C2"][Math.floor(3*Math.random())],distance:{value:300,min:1,max:1e3}}),e=t.num,a=t.speed,r=t.radiusMin,i=t.radiusMax,n=t.strokeWeight,s=t.color,l=t.distance;return Object(h.jsx)(o.a,{sketch:function(t){var o=.8*t.windowHeight,c=.8*t.windowHeight,h=[];t.setup=function(){for(var l=0;l<e;l++)h.push(new v(t,t.random(0,o),t.random(0,c),r,i,a,s,n))},t.draw=function(){t.createCanvas(o,c);for(var e=0;e<h.length;e++){for(var a=e+1;a<h.length;a++){t.dist(h[e].pos.x,h[e].pos.y,h[a].pos.x,h[a].pos.y)>=l||(t.stroke(s),t.strokeWeight(1),t.line(h[e].pos.x,h[e].pos.y,h[a].pos.x,h[a].pos.y))}h[e].update(),h[e].draw(t),h[e].bounce(o,c)}}}})},x=(a(108),function(){var t=Object(c.a)({maxRadius:{value:300,min:30,max:3e3,step:10},strokeWeight:{value:Math.floor(3*Math.random())+1,min:1,max:30},color:["#3E065F","#700B97","#8E05C2"][Math.floor(3*Math.random())]}),e=t.maxRadius,a=t.strokeWeight,r=t.color,i=function(){function t(e,a,r,i,n){Object(u.a)(this,t),this.x=e,this.y=a,this.radius=r,this.color=i,this.strokeWeight=n}return Object(d.a)(t,[{key:"draw",value:function(t){t.stroke(this.color),t.noFill(),t.strokeWeight(this.strokeWeight),t.ellipse(this.x,this.y,2*this.radius)}}]),t}();return Object(h.jsx)(o.a,{sketch:function(t){var n=.8*t.windowHeight,s=n,o=[];function c(){for(var s,c=!1,l=0;l<300;l++)if(!h(s=new i(Math.floor(Math.random()*n),Math.floor(Math.random()*n),5,r,a))){c=!0;break}if(c){for(var u=5;u<=e;u++)if(s.radius=u,h(s)){s.radius--;break}o.push(s),s.draw(t)}}function h(t){for(var e=0;e<o.length;e++){if(t===o[e])return!1;var a=o[e],r=t.radius+a.radius,i=t.x-a.x,s=t.y-a.y;if(r>=Math.sqrt(i*i+s*s))return!0}return t.x+t.radius>=n||t.x-t.radius<=0||(t.y+t.radius>=n||t.y-t.radius<=0)}t.setup=function(){t.createCanvas(n,n);for(var e=0;e<s;e++)c()},t.draw=function(){}}})}),j=a(126),m=a(125),g=a(127),p=a(69),k=a(8),b=function(){var t=Object(c.a)({strokeWeight:{value:Math.floor(3*Math.random())+1,min:1,max:10},color:"#4f87bc",finalSize:{value:3,min:1,max:3},minStartSteps:{value:2,min:2,max:10},maxStartSteps:{value:3,min:3,max:30}}),e=t.strokeWeight,a=t.color,r=t.finalSize,i=t.minStartSteps,n=t.maxStartSteps;return Object(h.jsx)(o.a,{sketch:function(t){var s=.8*t.windowHeight;t.setup=function(){t.createCanvas(s,s),t.strokeWeight(e),t.stroke(a),t.fill(0,0,0);var o,c=(s-4)/7,h=c,l=[-1,0,1];function u(e,a,i,n,s,c,l){if(t.rect(e,a,i,n),l>=0){var d=h*(l/o)+r,v=e+(i-d)/2,f=a+(n-d)/2;u(v-=(e-v)/(l+2)*s,f-=(a-f)/(l+2)*c,d,d,s,c,l-1)}}for(var d=2;d<s-2;d+=c)for(var v=2;v<s-2;v+=c){o=i+Math.ceil(Math.random()*n);var f=l[Math.floor(Math.random()*l.length)],x=l[Math.floor(Math.random()*l.length)];u(d,v,h,h,f,x,o-1)}},t.draw=function(){}}})},O=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(j.a,{expand:"lg",children:Object(h.jsxs)(m.a,{children:[Object(h.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav",bg:"light"}),Object(h.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(h.jsxs)(g.a,{className:"me-auto",children:[Object(h.jsx)(g.a.Link,{href:"/generative-art/sketch01",children:"Sketch01"}),Object(h.jsx)(g.a.Link,{href:"/generative-art/sketch02",children:"Sketch02"}),Object(h.jsx)(g.a.Link,{href:"/generative-art/sketch03",children:"Sketch03"}),Object(h.jsx)(g.a.Link,{href:"/generative-art/sketch04",children:"Sketch04"})]})})]})}),Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(p.a,{children:Object(h.jsxs)(k.c,{children:[Object(h.jsx)(k.a,{exact:!0,path:["/generative-art/","/generative-art/sketch01"],children:Object(h.jsx)(l,{})}),Object(h.jsx)(k.a,{exact:!0,path:"/generative-art/sketch02",children:Object(h.jsx)(f,{})}),Object(h.jsx)(k.a,{exact:!0,path:"/generative-art/sketch03",children:Object(h.jsx)(x,{})}),Object(h.jsx)(k.a,{exact:!0,path:"/generative-art/sketch04",children:Object(h.jsx)(b,{})})]})})})]})};a(120);s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root"))},76:function(t,e,a){},77:function(t,e,a){}},[[121,1,2]]]);
//# sourceMappingURL=main.0837d5bd.chunk.js.map