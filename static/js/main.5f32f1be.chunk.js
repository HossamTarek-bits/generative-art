(this["webpackJsonpgenerative-art"]=this["webpackJsonpgenerative-art"]||[]).push([[0],{55:function(t,e,i){},56:function(t,e,i){},66:function(t,e,i){"use strict";i.r(e);var a=i(0),n=i.n(a),s=i(23),o=i.n(s),r=(i(55),i(56),i(18)),h=i(19),c=i(1),l=function(){var t=Object(h.a)({step:{value:64,min:5,max:100,step:1},strokeWeight:{value:Math.floor(3*Math.random())+1,min:1,max:30},color:["#3E065F","#700B97","#8E05C2"][Math.floor(3*Math.random())]}),e=t.step,i=t.strokeWeight,a=t.color;return Object(c.jsx)(r.a,{sketch:function(t){var n=.6*t.windowWidth,s=.6*t.windowHeight,o=function(t,e,n,s,o){var r=t.random([!1,!0]);t.stroke(a),t.strokeWeight(i),r?t.line(e,n,e+s,n+o):t.line(e+s,n,e,n+o)};t.setup=function(){t.createCanvas(n,s);for(var i=0;i<n;i+=e)for(var a=0;a<n;a+=e)o(t,i,a,e,e)},t.draw=function(){}}})},u=i(14),f=i(15),p=function(){function t(e,i,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:15,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:30,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"#3E065F",h=arguments.length>7&&void 0!==arguments[7]?arguments[7]:3;Object(u.a)(this,t),this.radius=Math.floor(e.random(n,s)),this.pos=e.createVector(i,a),this.vel=e.createVector(e.random(-1,1)*o,e.random(-1,1)*o),this.color=r,this.strokeWeight=h}return Object(f.a)(t,[{key:"update",value:function(){this.pos.x+=this.vel.x,this.pos.y+=this.vel.y}},{key:"bounce",value:function(t,e){(this.pos.x-this.radius<=0||this.pos.x+this.radius>=t)&&(this.vel.x*=-1),(this.pos.y-this.radius<=0||this.pos.y+this.radius>=e)&&(this.vel.y*=-1)}},{key:"draw",value:function(t){t.stroke(this.color),t.noFill(),t.strokeWeight(this.strokeWeight),t.ellipse(this.pos.x,this.pos.y,this.radius)}}]),t}(),m=function(){var t=Object(h.a)({num:{value:30,min:1,max:100,step:1},speed:{value:1,min:1,max:30},radiusMin:{value:15,min:1,max:30},radiusMax:{value:30,min:30,max:300},strokeWeight:{value:Math.floor(3*Math.random())+1,min:1,max:30},color:["#3E065F","#700B97","#8E05C2"][Math.floor(3*Math.random())],distance:{value:300,min:1,max:1e3}}),e=t.num,i=t.speed,a=t.radiusMin,n=t.radiusMax,s=t.strokeWeight,o=t.color,l=t.distance;return Object(c.jsx)(r.a,{sketch:function(t){var r=.6*t.windowWidth,h=.6*t.windowHeight,c=[];t.setup=function(){for(var l=0;l<e;l++)c.push(new p(t,t.random(0,r),t.random(0,h),a,n,i,o,s))},t.draw=function(){t.createCanvas(r,h);for(var e=0;e<c.length;e++){for(var i=e+1;i<c.length;i++){t.dist(c[e].pos.x,c[e].pos.y,c[i].pos.x,c[i].pos.y)>=l||(t.stroke(o),t.strokeWeight(1),t.line(c[e].pos.x,c[e].pos.y,c[i].pos.x,c[i].pos.y))}c[e].update(),c[e].draw(t),c[e].bounce(r,h)}}}})},d=function(){var t=Object(h.a)({maxRadius:{value:300,min:30,max:3e3,step:10},strokeWeight:{value:Math.floor(3*Math.random())+1,min:1,max:30},color:["#3E065F","#700B97","#8E05C2"][Math.floor(3*Math.random())]}),e=t.maxRadius,i=t.strokeWeight,a=t.color,n=function(){function t(e,i,a,n,s){Object(u.a)(this,t),this.x=e,this.y=i,this.radius=a,this.color=n,this.strokeWeight=s}return Object(f.a)(t,[{key:"draw",value:function(t){t.stroke(this.color),t.noFill(),t.strokeWeight(this.strokeWeight),t.ellipse(this.x,this.y,2*this.radius)}}]),t}();return Object(c.jsx)(r.a,{sketch:function(t){var s=.6*t.windowWidth,o=.6*t.windowHeight,r=o,h=[];function c(){for(var r,c=!1,u=0;u<300;u++)if(!l(r=new n(Math.floor(Math.random()*s),Math.floor(Math.random()*o),5,a,i))){c=!0;break}if(c){for(var f=5;f<=e;f++)if(r.radius=f,l(r)){r.radius--;break}h.push(r),r.draw(t)}}function l(t){for(var e=0;e<h.length;e++){if(t===h[e])return!1;var i=h[e],a=t.radius+i.radius,n=t.x-i.x,r=t.y-i.y;if(a>=Math.sqrt(n*n+r*r))return!0}return t.x+t.radius>=s||t.x-t.radius<=0||(t.y+t.radius>=o||t.y-t.radius<=0)}t.setup=function(){t.createCanvas(s,o);for(var e=0;e<r;e++)c()},t.draw=function(){}}})},v=i(72),g=i(71),x=i(73),b=i(47),k=i(8),j=function(){var t=Object(h.a)({strokeWeight:{value:Math.floor(3*Math.random())+1,min:1,max:10},color:"#4f87bc",finalSize:{value:3,min:1,max:3},minStartSteps:{value:2,min:2,max:10},maxStartSteps:{value:3,min:3,max:30}}),e=t.strokeWeight,i=t.color,a=t.finalSize,n=t.minStartSteps,s=t.maxStartSteps;return Object(c.jsx)(r.a,{sketch:function(t){var o=.6*t.windowWidth,r=.6*t.windowHeight;t.setup=function(){t.createCanvas(o,r),t.strokeWeight(e),t.stroke(i),t.fill(0,0,0);var h,c=(r-4)/7,l=c,u=[-1,0,1];function f(e,i,n,s,o,r,c){if(t.rect(e,i,n,s),c>=0){var u=l*(c/h)+a,p=e+(n-u)/2,m=i+(s-u)/2;f(p-=(e-p)/(c+2)*o,m-=(i-m)/(c+2)*r,u,u,o,r,c-1)}}for(var p=2;p<o-2;p+=c)for(var m=2;m<r-2;m+=c){h=n+Math.ceil(Math.random()*s);var d=u[Math.floor(Math.random()*u.length)],v=u[Math.floor(Math.random()*u.length)];f(p,m,l,l,d,v,h-1)}},t.draw=function(){}}})},w=function(){var t=["#5800FF","#E900FF","#FFC600"],e=Object(h.a)({step:{value:15,min:1,max:100,step:1},strokeWeight:{value:2,min:1,max:30,step:1},frameRate:{value:30,min:1,max:60,step:1},followMouseProbability:{value:13,min:0,max:100,step:1}}),i=e.step,a=e.strokeWeight,n=e.frameRate,s=e.followMouseProbability;return Object(c.jsx)(r.a,{sketch:function(e){var o=.6*e.windowWidth,r=.6*e.windowHeight,h=e.createVector(Math.floor(o/2),Math.floor(r/2));e.setup=function(){e.createCanvas(o,r,e.WEBGL),e.frameRate(n)},e.draw=function(){e.translate(-o/2,-r/2),e.stroke(e.color(e.random(t))),e.strokeWeight(a),e.random(100)<s?function(t,e){var a=t.createVector(t.mouseX,t.mouseY);a.sub(e).normalize().mult(i),t.push(),t.translate(e.x,e.y),t.line(0,0,a.x,a.y),t.pop(),e.add(a)}(e,h):function(t,e,a,n){var s=e.x,o=e.y;switch(Math.floor(t.random(0,4))){case 0:s+=i,s=Math.min(a,s);break;case 1:s-=i,s=Math.max(0,s);break;case 2:o+=i,o=Math.min(n,o);break;case 3:o-=i,o=Math.max(0,o)}t.line(e.x,e.y,s,o),e.set(s,o)}(e,h,o,r)}}})},M=function(){function t(e,i,a,n,s){Object(u.a)(this,t),this.target=e.split(""),this.mutationRate=i,this.possibleCombo="1234567890-=!@#$%^&*()_+qwertyuiop[]\\QWERTYUIOP{}|asdfghjkl;'ASDFGHJKL:\"zxcvbnm,./ZXCVBNM<>? ",this.value=a?a.split(""):this.createRandom(e.length).split(""),this.fitness,this.x=n,this.y=s,this.xFit=0,this.yFit=0,this.midpoint}return Object(f.a)(t,[{key:"createRandom",value:function(t){for(var e="",i=0;i<t;i++)e+=this.possibleCombo.charAt(Math.floor(Math.random()*this.possibleCombo.length));return e}},{key:"calculateFitness",value:function(){this.fitness=0,this.xFit=0,this.yFit=0;for(var t=0;t<this.value.length;t++)this.target[t]===this.value[t]?(this.fitness+=1,t<this.midpoint?this.xFit+=1:this.yFit-=1):t<this.midpoint?this.xFit-=1:this.yFit+=1;this.fitness/=this.value.length,this.xFit/=this.midpoint,this.yFit/=this.value.length-this.midpoint}},{key:"updatePoint",value:function(t){this.x=this.xFit*t,this.y=this.yFit*t}},{key:"draw",value:function(t){t.circle(this.x,this.y,1)}}]),t}(),O=function(){function t(e,i,a,n,s){Object(u.a)(this,t),this.target=e,this.mutationRate=i,this.popMax=a,this.population=[],this.matingPool=[],this.numOfGens=0,this.averageFit=0;for(var o=0;o<a;o++)this.population.push(new M(e,i,null,n||0,s||0));this.best=this.population[0],this.calculateFitness()}return Object(f.a)(t,[{key:"calculateFitness",value:function(){var t=this;this.best=this.population[0],this.population.forEach((function(e){e.calculateFitness(),e.fitness>t.best.fitness&&(t.best=e),t.averageFit+=e.fitness})),this.averageFit/=this.population.length}},{key:"generate",value:function(){this.matingPool=[];for(var t=0,e=0;e<this.population.length;e++)this.population[e].fitness>t&&(t=this.population[e].fitness);for(var i=0;i<this.population.length;i++)for(var a=Math.floor(this.population[i].fitness/t*100),n=0;n<a;n++)this.matingPool.push(this.population[i])}},{key:"newGen",value:function(){for(var t=0;t<this.population.length;t++){var e=Math.floor(Math.random()*this.target.length),i=this.matingPool[Math.floor(Math.random()*this.matingPool.length)],a=this.matingPool[Math.floor(Math.random()*this.matingPool.length)];this.population[t].midpoint=e;for(var n=0;n<this.population[t].value.length;n++){this.population[t].value[n]=n<e?i.value[n]:a.value[n],Math.random()<this.mutationRate&&(this.population[t].value[n]=this.population[t].createRandom(1))}}this.numOfGens+=1}},{key:"getBest",value:function(){return this.best.value.join("")}},{key:"getAverageFit",value:function(){return this.averageFit.toFixed(2)}},{key:"getNumOfGens",value:function(){return this.numOfGens}},{key:"update",value:function(t){this.population.forEach((function(e){return e.updatePoint(t)}))}},{key:"draw",value:function(t){this.population.sort((function(t,e){return t.fitness-e.fitness}));for(var e=this.population.length-1;e>=Math.max(this.population.length-501,0);e--)this.population[e].draw(t)}}]),t}(),y=function(){var t=Object(h.a)({strokeWeight:{value:3,min:1,max:30,step:1},frameRate:{value:30,min:1,max:60,step:1},step:{value:300,min:10,max:500,step:10},mutationRate:{value:.01,min:0,max:1,step:.01},populationMax:{value:2e3,min:10,max:4e4,step:10},targetPhrase:"If science is to progress, what we need is the ability to experiment."}),e=t.strokeWeight,i=t.frameRate,a=t.step,n=t.mutationRate,s=t.populationMax,o=t.targetPhrase;return Object(c.jsx)(r.a,{sketch:function(t){var r=.8*t.windowWidth,h=.8*t.windowHeight,c=new O(o,n,s,0,0),l=t.createP("Best phrase:"),u=t.createP("Average Fitness:"),f=t.createP("Number of gens:"),p=t.createA("https://en.wikipedia.org/wiki/Infinite_monkey_theorem#:~:text=The%20infinite%20monkey%20theorem%20states,an%20infinite%20number%20of%20times.","Infinite monkey theorem - Genetic Algorithm");t.setup=function(){t.createCanvas(r,h,t.WEBGL),t.frameRate(i),t.stroke(255),t.strokeWeight(e),p.position(t.windowWidth/3,t.windowHeight-200),l.position(0,0),l.class("best"),u.position(r/2,0),u.class("best"),f.position(2*r/3,0),f.class("best"),console.log(c)},t.draw=function(){t.stroke(t.color("#08D9D6")),c.generate(),c.newGen(),c.calculateFitness(),c.update(a);var e=c.getBest();l.html("Best phrase:<br>"+e);var i=c.getAverageFit();u.html("Average Fitness:<br>"+i);var n=c.getNumOfGens();f.html("Number of gens:<br>"+n),c.draw(t),e===o&&t.noLoop()}}})},F=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(v.a,{expand:"lg",children:Object(c.jsxs)(g.a,{children:[Object(c.jsx)(v.a.Toggle,{"aria-controls":"basic-navbar-nav",bg:"light"}),Object(c.jsx)(v.a.Collapse,{id:"basic-navbar-nav",children:Object(c.jsxs)(x.a,{className:"me-auto",children:[Object(c.jsx)(x.a.Link,{href:"/generative-art/sketch01",children:"Sketch01"}),Object(c.jsx)(x.a.Link,{href:"/generative-art/sketch02",children:"Sketch02"}),Object(c.jsx)(x.a.Link,{href:"/generative-art/sketch03",children:"Sketch03"}),Object(c.jsx)(x.a.Link,{href:"/generative-art/sketch04",children:"Sketch04"}),Object(c.jsx)(x.a.Link,{href:"/generative-art/sketch05",children:"Sketch05"}),Object(c.jsx)(x.a.Link,{href:"/generative-art/sketch06",children:"Sketch06"})]})})]})}),Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(b.a,{children:Object(c.jsxs)(k.c,{children:[Object(c.jsx)(k.a,{exact:!0,path:["/generative-art/","/generative-art/sketch01"],children:Object(c.jsx)(l,{})}),Object(c.jsx)(k.a,{exact:!0,path:"/generative-art/sketch02",children:Object(c.jsx)(m,{})}),Object(c.jsx)(k.a,{exact:!0,path:"/generative-art/sketch03",children:Object(c.jsx)(d,{})}),Object(c.jsx)(k.a,{exact:!0,path:"/generative-art/sketch04",children:Object(c.jsx)(j,{})}),Object(c.jsx)(k.a,{exact:!0,path:"/generative-art/sketch05",children:Object(c.jsx)(w,{})}),Object(c.jsx)(k.a,{exact:!0,path:"/generative-art/sketch06",children:Object(c.jsx)(y,{})})]})})})]})};i(65);o.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(F,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.5f32f1be.chunk.js.map