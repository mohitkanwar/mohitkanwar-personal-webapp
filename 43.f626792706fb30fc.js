"use strict";(self.webpackChunkang2_mohitkanwar=self.webpackChunkang2_mohitkanwar||[]).push([[43],{4043:(At,st,N)=>{N.d(st,{a:()=>lt,b:()=>Ot,c:()=>T,d:()=>Zt,e:()=>Rt,f:()=>$t,g:()=>Xt,h:()=>Dt,i:()=>V,j:()=>at,l:()=>E,p:()=>Ht,s:()=>It,u:()=>m});var L=N(5861),f=N(8190),S=N(8586),J=N(894);const it={extension:(a,r,t)=>{f.l.trace("Making markers for ",t),a.append("defs").append("marker").attr("id",t+"_"+r+"-extensionStart").attr("class","marker extension "+r).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),a.append("defs").append("marker").attr("id",t+"_"+r+"-extensionEnd").attr("class","marker extension "+r).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z")},composition:(a,r,t)=>{a.append("defs").append("marker").attr("id",t+"_"+r+"-compositionStart").attr("class","marker composition "+r).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),a.append("defs").append("marker").attr("id",t+"_"+r+"-compositionEnd").attr("class","marker composition "+r).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},aggregation:(a,r,t)=>{a.append("defs").append("marker").attr("id",t+"_"+r+"-aggregationStart").attr("class","marker aggregation "+r).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),a.append("defs").append("marker").attr("id",t+"_"+r+"-aggregationEnd").attr("class","marker aggregation "+r).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},dependency:(a,r,t)=>{a.append("defs").append("marker").attr("id",t+"_"+r+"-dependencyStart").attr("class","marker dependency "+r).attr("refX",6).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),a.append("defs").append("marker").attr("id",t+"_"+r+"-dependencyEnd").attr("class","marker dependency "+r).attr("refX",13).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},lollipop:(a,r,t)=>{a.append("defs").append("marker").attr("id",t+"_"+r+"-lollipopStart").attr("class","marker lollipop "+r).attr("refX",13).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6),a.append("defs").append("marker").attr("id",t+"_"+r+"-lollipopEnd").attr("class","marker lollipop "+r).attr("refX",1).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6)},point:(a,r,t)=>{a.append("marker").attr("id",t+"_"+r+"-pointEnd").attr("class","marker "+r).attr("viewBox","0 0 10 10").attr("refX",6).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),a.append("marker").attr("id",t+"_"+r+"-pointStart").attr("class","marker "+r).attr("viewBox","0 0 10 10").attr("refX",4.5).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 5 L 10 10 L 10 0 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},circle:(a,r,t)=>{a.append("marker").attr("id",t+"_"+r+"-circleEnd").attr("class","marker "+r).attr("viewBox","0 0 10 10").attr("refX",11).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),a.append("marker").attr("id",t+"_"+r+"-circleStart").attr("class","marker "+r).attr("viewBox","0 0 10 10").attr("refX",-1).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},cross:(a,r,t)=>{a.append("marker").attr("id",t+"_"+r+"-crossEnd").attr("class","marker cross "+r).attr("viewBox","0 0 11 11").attr("refX",12).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0"),a.append("marker").attr("id",t+"_"+r+"-crossStart").attr("class","marker cross "+r).attr("viewBox","0 0 11 11").attr("refX",-1).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0")},barb:(a,r,t)=>{a.append("defs").append("marker").attr("id",t+"_"+r+"-barbEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",14).attr("markerUnits","strokeWidth").attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")}},lt=(a,r,t,n)=>{r.forEach(s=>{it[s](a,t,n)})},T=(a,r,t,n)=>{let s=a||"";if("object"==typeof s&&(s=s[0]),(0,f.m)((0,f.c)().flowchart.htmlLabels))return s=s.replace(/\\n|\n/g,"<br />"),f.l.info("vertexText"+s),function ot(a){const r=(0,S.Ys)(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")),t=r.append("xhtml:div");return t.html('<span class="'+(a.isNode?"nodeLabel":"edgeLabel")+'" '+(a.labelStyle?'style="'+a.labelStyle+'"':"")+">"+a.label+"</span>"),function ct(a,r){r&&a.attr("style",r)}(t,a.labelStyle),t.style("display","inline-block"),t.style("white-space","nowrap"),t.attr("xmlns","http://www.w3.org/1999/xhtml"),r.node()}({isNode:n,label:(0,f.J)(s).replace(/fa[blrs]?:fa-[\w-]+/g,l=>`<i class='${l.replace(":"," ")}'></i>`),labelStyle:r.replace("fill:","color:")});{const i=document.createElementNS("http://www.w3.org/2000/svg","text");i.setAttribute("style",r.replace("color:","fill:"));let e=[];e="string"==typeof s?s.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(s)?s:[];for(const l of e){const c=document.createElementNS("http://www.w3.org/2000/svg","tspan");c.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),c.setAttribute("dy","1em"),c.setAttribute("x","0"),c.setAttribute("class",t?"title-row":"row"),c.textContent=l.trim(),i.appendChild(c)}return i}},E=function(){var a=(0,L.Z)(function*(r,t,n,s){let i;const e=t.useHtmlLabels||(0,f.m)((0,f.c)().flowchart.htmlLabels);i=n||"node default";const l=r.insert("g").attr("class",i).attr("id",t.domId||t.id),c=l.insert("g").attr("class","label").attr("style",t.labelStyle);let h;h=void 0===t.labelText?"":"string"==typeof t.labelText?t.labelText:t.labelText[0];const o=c.node();let p;p="markdown"===t.labelType?(0,J.a)(c,(0,f.d)((0,f.J)(h),(0,f.c)()),{useHtmlLabels:e,width:t.width||(0,f.c)().flowchart.wrappingWidth,classes:"markdown-node-label"}):o.appendChild(T((0,f.d)((0,f.J)(h),(0,f.c)()),t.labelStyle,!1,s));let u=p.getBBox();const x=t.padding/2;if((0,f.m)((0,f.c)().flowchart.htmlLabels)){const y=p.children[0],k=(0,S.Ys)(p),g=y.getElementsByTagName("img");if(g){const b=""===h.replace(/<img[^>]*>/g,"").trim();yield Promise.all([...g].map(d=>new Promise(C=>{function B(){if(d.style.display="flex",d.style.flexDirection="column",b){const Z=(0,f.c)().fontSize?(0,f.c)().fontSize:window.getComputedStyle(document.body).fontSize,z=5;d.style.width=parseInt(Z,10)*z+"px"}else d.style.width="100%";C(d)}setTimeout(()=>{d.complete&&B()}),d.addEventListener("error",B),d.addEventListener("load",B)})))}u=y.getBoundingClientRect(),k.attr("width",u.width),k.attr("height",u.height)}return c.attr("transform",e?"translate("+-u.width/2+", "+-u.height/2+")":"translate(0, "+-u.height/2+")"),t.centerLabel&&c.attr("transform","translate("+-u.width/2+", "+-u.height/2+")"),c.insert("rect",":first-child"),{shapeSvg:l,bbox:u,halfPadding:x,label:c}});return function(t,n,s,i){return a.apply(this,arguments)}}(),m=(a,r)=>{const t=r.node().getBBox();a.width=t.width,a.height=t.height};function I(a,r,t,n){return a.insert("polygon",":first-child").attr("points",n.map(function(s){return s.x+","+s.y}).join(" ")).attr("class","label-container").attr("transform","translate("+-r/2+","+t/2+")")}function K(a,r,t,n){var s=a.x,i=a.y,e=s-n.x,l=i-n.y,c=Math.sqrt(r*r*l*l+t*t*e*e),h=Math.abs(r*t*e/c);n.x<s&&(h=-h);var o=Math.abs(r*t*l/c);return n.y<i&&(o=-o),{x:s+h,y:i+o}}function pt(a,r,t,n){var s,i,e,l,c,h,o,p,u,x,y,k,g;if(x=(s=r.y-a.y)*n.x+(e=a.x-r.x)*n.y+(c=r.x*a.y-a.x*r.y),!(0!==(u=s*t.x+e*t.y+c)&&0!==x&&Q(u,x)||(i=n.y-t.y,l=t.x-n.x,h=n.x*t.y-t.x*n.y,o=i*a.x+l*a.y+h,p=i*r.x+l*r.y+h,0!==o&&0!==p&&Q(o,p)||(y=s*l-i*e,0===y))))return k=Math.abs(y/2),{x:(g=e*h-l*c)<0?(g-k)/y:(g+k)/y,y:(g=i*c-s*h)<0?(g-k)/y:(g+k)/y}}function Q(a,r){return a*r>0}const V=(a,r)=>{var c,h,t=a.x,n=a.y,s=r.x-t,i=r.y-n,e=a.width/2,l=a.height/2;return Math.abs(i)*e>Math.abs(s)*l?(i<0&&(l=-l),c=0===i?0:l*s/i,h=l):(s<0&&(e=-e),c=e,h=0===s?0:e*i/s),{x:t+c,y:n+h}},w={node:function ht(a,r){return a.intersect(r)},circle:function ft(a,r,t){return K(a,r,r,t)},ellipse:K,polygon:function ut(a,r,t){var n=a.x,s=a.y,i=[],e=Number.POSITIVE_INFINITY,l=Number.POSITIVE_INFINITY;"function"==typeof r.forEach?r.forEach(function(y){e=Math.min(e,y.x),l=Math.min(l,y.y)}):(e=Math.min(e,r.x),l=Math.min(l,r.y));for(var c=n-a.width/2-e,h=s-a.height/2-l,o=0;o<r.length;o++){var p=r[o],u=r[o<r.length-1?o+1:0],x=pt(a,t,{x:c+p.x,y:h+p.y},{x:c+u.x,y:h+u.y});x&&i.push(x)}return i.length?(i.length>1&&i.sort(function(y,k){var g=y.x-t.x,b=y.y-t.y,d=Math.sqrt(g*g+b*b),C=k.x-t.x,B=k.y-t.y,Z=Math.sqrt(C*C+B*B);return d<Z?-1:d===Z?0:1}),i[0]):a},rect:V},dt=function(){var a=(0,L.Z)(function*(r,t){t.useHtmlLabels||(0,f.c)().flowchart.htmlLabels||(t.centerLabel=!0);const{shapeSvg:s,bbox:i,halfPadding:e}=yield E(r,t,"node "+t.classes,!0);f.l.info("Classes = ",t.classes);const l=s.insert("rect",":first-child");return l.attr("rx",t.rx).attr("ry",t.ry).attr("x",-i.width/2-e).attr("y",-i.height/2-e).attr("width",i.width+t.padding).attr("height",i.height+t.padding),m(t,l),t.intersect=function(c){return w.rect(t,c)},s});return function(t,n){return a.apply(this,arguments)}}(),G=a=>a?" "+a:"",Y=(a,r)=>`${r||"node default"}${G(a.classes)} ${G(a.class)}`,P=function(){var a=(0,L.Z)(function*(r,t){const{shapeSvg:n,bbox:s}=yield E(r,t,Y(t,void 0),!0),l=s.width+t.padding+(s.height+t.padding),c=[{x:l/2,y:0},{x:l,y:-l/2},{x:l/2,y:-l},{x:0,y:-l/2}];f.l.info("Question main (Circle)");const h=I(n,l,l,c);return h.attr("style",t.style),m(t,h),t.intersect=function(o){return f.l.warn("Intersect called"),w.polygon(t,c,o)},n});return function(t,n){return a.apply(this,arguments)}}(),xt=function(){var a=(0,L.Z)(function*(r,t){const{shapeSvg:n,bbox:s}=yield E(r,t,Y(t,void 0),!0),e=s.height+t.padding,l=e/4,c=s.width+2*l+t.padding,h=[{x:l,y:0},{x:c-l,y:0},{x:c,y:-e/2},{x:c-l,y:-e},{x:l,y:-e},{x:0,y:-e/2}],o=I(n,c,e,h);return o.attr("style",t.style),m(t,o),t.intersect=function(p){return w.polygon(t,h,p)},n});return function(t,n){return a.apply(this,arguments)}}(),gt=function(){var a=(0,L.Z)(function*(r,t){const{shapeSvg:n,bbox:s}=yield E(r,t,Y(t,void 0),!0),i=s.width+t.padding,e=s.height+t.padding,l=[{x:-e/2,y:0},{x:i,y:0},{x:i,y:-e},{x:-e/2,y:-e},{x:0,y:-e/2}];return I(n,i,e,l).attr("style",t.style),t.width=i+e,t.height=e,t.intersect=function(h){return w.polygon(t,l,h)},n});return function(t,n){return a.apply(this,arguments)}}(),bt=function(){var a=(0,L.Z)(function*(r,t){const{shapeSvg:n,bbox:s}=yield E(r,t,Y(t),!0),i=s.width+t.padding,e=s.height+t.padding,l=[{x:-2*e/6,y:0},{x:i-e/6,y:0},{x:i+2*e/6,y:-e},{x:e/6,y:-e}],c=I(n,i,e,l);return c.attr("style",t.style),m(t,c),t.intersect=function(h){return w.polygon(t,l,h)},n});return function(t,n){return a.apply(this,arguments)}}(),wt=function(){var a=(0,L.Z)(function*(r,t){const{shapeSvg:n,bbox:s}=yield E(r,t,Y(t,void 0),!0),i=s.width+t.padding,e=s.height+t.padding,l=[{x:2*e/6,y:0},{x:i+e/6,y:0},{x:i-2*e/6,y:-e},{x:-e/6,y:-e}],c=I(n,i,e,l);return c.attr("style",t.style),m(t,c),t.intersect=function(h){return w.polygon(t,l,h)},n});return function(t,n){return a.apply(this,arguments)}}(),mt=function(){var a=(0,L.Z)(function*(r,t){const{shapeSvg:n,bbox:s}=yield E(r,t,Y(t,void 0),!0),i=s.width+t.padding,e=s.height+t.padding,l=[{x:-2*e/6,y:0},{x:i+2*e/6,y:0},{x:i-e/6,y:-e},{x:e/6,y:-e}],c=I(n,i,e,l);return c.attr("style",t.style),m(t,c),t.intersect=function(h){return w.polygon(t,l,h)},n});return function(t,n){return a.apply(this,arguments)}}(),kt=function(){var a=(0,L.Z)(function*(r,t){const{shapeSvg:n,bbox:s}=yield E(r,t,Y(t,void 0),!0),i=s.width+t.padding,e=s.height+t.padding,l=[{x:e/6,y:0},{x:i-e/6,y:0},{x:i+2*e/6,y:-e},{x:-2*e/6,y:-e}],c=I(n,i,e,l);return c.attr("style",t.style),m(t,c),t.intersect=function(h){return w.polygon(t,l,h)},n});return function(t,n){return a.apply(this,arguments)}}(),_t=function(){var a=(0,L.Z)(function*(r,t){const{shapeSvg:n,bbox:s}=yield E(r,t,Y(t,void 0),!0),i=s.width+t.padding,e=s.height+t.padding,l=[{x:0,y:0},{x:i+e/2,y:0},{x:i,y:-e/2},{x:i+e/2,y:-e},{x:0,y:-e}],c=I(n,i,e,l);return c.attr("style",t.style),m(t,c),t.intersect=function(h){return w.polygon(t,l,h)},n});return function(t,n){return a.apply(this,arguments)}}(),vt=function(){var a=(0,L.Z)(function*(r,t){const{shapeSvg:n,bbox:s}=yield E(r,t,Y(t,void 0),!0),i=s.width+t.padding,e=i/2,l=e/(2.5+i/50),c=s.height+l+t.padding,h="M 0,"+l+" a "+e+","+l+" 0,0,0 "+i+" 0 a "+e+","+l+" 0,0,0 "+-i+" 0 l 0,"+c+" a "+e+","+l+" 0,0,0 "+i+" 0 l 0,"+-c,o=n.attr("label-offset-y",l).insert("path",":first-child").attr("style",t.style).attr("d",h).attr("transform","translate("+-i/2+","+-(c/2+l)+")");return m(t,o),t.intersect=function(p){const u=w.rect(t,p),x=u.x-t.x;if(0!=e&&(Math.abs(x)<t.width/2||Math.abs(x)==t.width/2&&Math.abs(u.y-t.y)>t.height/2-l)){let y=l*l*(1-x*x/(e*e));0!=y&&(y=Math.sqrt(y)),y=l-y,p.y-t.y>0&&(y=-y),u.y+=y}return u},n});return function(t,n){return a.apply(this,arguments)}}(),Lt=function(){var a=(0,L.Z)(function*(r,t){const{shapeSvg:n,bbox:s,halfPadding:i}=yield E(r,t,"node "+t.classes+" "+t.class,!0),e=n.insert("rect",":first-child"),l=s.width+t.padding,c=s.height+t.padding;if(e.attr("class","basic label-container").attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",-s.width/2-i).attr("y",-s.height/2-i).attr("width",l).attr("height",c),t.props){const h=new Set(Object.keys(t.props));t.props.borders&&(q(e,t.props.borders,l,c),h.delete("borders")),h.forEach(o=>{f.l.warn(`Unknown node property ${o}`)})}return m(t,e),t.intersect=function(h){return w.rect(t,h)},n});return function(t,n){return a.apply(this,arguments)}}(),St=function(){var a=(0,L.Z)(function*(r,t){const{shapeSvg:n}=yield E(r,t,"label",!0);f.l.trace("Classes = ",t.class);const s=n.insert("rect",":first-child");if(s.attr("width",0).attr("height",0),n.attr("class","label edgeLabel"),t.props){const l=new Set(Object.keys(t.props));t.props.borders&&(q(s,t.props.borders,0,0),l.delete("borders")),l.forEach(c=>{f.l.warn(`Unknown node property ${c}`)})}return m(t,s),t.intersect=function(l){return w.rect(t,l)},n});return function(t,n){return a.apply(this,arguments)}}();function q(a,r,t,n){const s=[],i=l=>{s.push(l,0)},e=l=>{s.push(0,l)};r.includes("t")?(f.l.debug("add top border"),i(t)):e(t),r.includes("r")?(f.l.debug("add right border"),i(n)):e(n),r.includes("b")?(f.l.debug("add bottom border"),i(t)):e(t),r.includes("l")?(f.l.debug("add left border"),i(n)):e(n),a.attr("stroke-dasharray",s.join(" "))}const Mt=function(){var a=(0,L.Z)(function*(r,t){const{shapeSvg:n,bbox:s}=yield E(r,t,Y(t,void 0),!0),i=s.height+t.padding,e=s.width+i/4+t.padding,l=n.insert("rect",":first-child").attr("style",t.style).attr("rx",i/2).attr("ry",i/2).attr("x",-e/2).attr("y",-i/2).attr("width",e).attr("height",i);return m(t,l),t.intersect=function(c){return w.rect(t,c)},n});return function(t,n){return a.apply(this,arguments)}}(),tt=(a,r,t)=>{const n=a.insert("g").attr("class","node default").attr("id",r.domId||r.id);let s=70,i=10;"LR"===t&&(s=10,i=70);const e=n.append("rect").attr("x",-1*s/2).attr("y",-1*i/2).attr("width",s).attr("height",i).attr("class","fork-join");return m(r,e),r.height=r.height+r.padding/2,r.width=r.width+r.padding/2,r.intersect=function(l){return w.rect(r,l)},n},rt={rhombus:P,question:P,rect:Lt,labelRect:St,rectWithTitle:(a,r)=>{let t;t=r.classes?"node "+r.classes:"node default";const n=a.insert("g").attr("class",t).attr("id",r.domId||r.id),s=n.insert("rect",":first-child"),i=n.insert("line"),e=n.insert("g").attr("class","label"),l=r.labelText.flat?r.labelText.flat():r.labelText;let c="";c="object"==typeof l?l[0]:l,f.l.info("Label text abc79",c,l,"object"==typeof l);const h=e.node().appendChild(T(c,r.labelStyle,!0,!0));let o={width:0,height:0};if((0,f.m)((0,f.c)().flowchart.htmlLabels)){const k=h.children[0],g=(0,S.Ys)(h);o=k.getBoundingClientRect(),g.attr("width",o.width),g.attr("height",o.height)}f.l.info("Text 2",l);const p=l.slice(1,l.length);let u=h.getBBox();const x=e.node().appendChild(T(p.join?p.join("<br/>"):p,r.labelStyle,!0,!0));if((0,f.m)((0,f.c)().flowchart.htmlLabels)){const k=x.children[0],g=(0,S.Ys)(x);o=k.getBoundingClientRect(),g.attr("width",o.width),g.attr("height",o.height)}const y=r.padding/2;return(0,S.Ys)(x).attr("transform","translate( "+(o.width>u.width?0:(u.width-o.width)/2)+", "+(u.height+y+5)+")"),(0,S.Ys)(h).attr("transform","translate( "+(o.width<u.width?0:-(u.width-o.width)/2)+", 0)"),o=e.node().getBBox(),e.attr("transform","translate("+-o.width/2+", "+(-o.height/2-y+3)+")"),s.attr("class","outer title-state").attr("x",-o.width/2-y).attr("y",-o.height/2-y).attr("width",o.width+r.padding).attr("height",o.height+r.padding),i.attr("class","divider").attr("x1",-o.width/2-y).attr("x2",o.width/2+y).attr("y1",-o.height/2-y+u.height+y).attr("y2",-o.height/2-y+u.height+y),m(r,s),r.intersect=function(k){return w.rect(r,k)},n},choice:(a,r)=>{const t=a.insert("g").attr("class","node default").attr("id",r.domId||r.id);return t.insert("polygon",":first-child").attr("points",[{x:0,y:14},{x:14,y:0},{x:0,y:-14},{x:-14,y:0}].map(function(e){return e.x+","+e.y}).join(" ")).attr("class","state-start").attr("r",7).attr("width",28).attr("height",28),r.width=28,r.height=28,r.intersect=function(e){return w.circle(r,14,e)},t},circle:function(){var a=(0,L.Z)(function*(r,t){const{shapeSvg:n,bbox:s,halfPadding:i}=yield E(r,t,Y(t,void 0),!0),e=n.insert("circle",":first-child");return e.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",s.width/2+i).attr("width",s.width+t.padding).attr("height",s.height+t.padding),f.l.info("Circle main"),m(t,e),t.intersect=function(l){return f.l.info("Circle intersect",t,s.width/2+i,l),w.circle(t,s.width/2+i,l)},n});return function(t,n){return a.apply(this,arguments)}}(),doublecircle:function(){var a=(0,L.Z)(function*(r,t){const{shapeSvg:n,bbox:s,halfPadding:i}=yield E(r,t,Y(t,void 0),!0),l=n.insert("g",":first-child"),c=l.insert("circle"),h=l.insert("circle");return l.attr("class",t.class),c.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",s.width/2+i+5).attr("width",s.width+t.padding+10).attr("height",s.height+t.padding+10),h.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",s.width/2+i).attr("width",s.width+t.padding).attr("height",s.height+t.padding),f.l.info("DoubleCircle main"),m(t,c),t.intersect=function(o){return f.l.info("DoubleCircle intersect",t,s.width/2+i+5,o),w.circle(t,s.width/2+i+5,o)},n});return function(t,n){return a.apply(this,arguments)}}(),stadium:Mt,hexagon:xt,rect_left_inv_arrow:gt,lean_right:bt,lean_left:wt,trapezoid:mt,inv_trapezoid:kt,rect_right_inv_arrow:_t,cylinder:vt,start:(a,r)=>{const t=a.insert("g").attr("class","node default").attr("id",r.domId||r.id),n=t.insert("circle",":first-child");return n.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),m(r,n),r.intersect=function(s){return w.circle(r,7,s)},t},end:(a,r)=>{const t=a.insert("g").attr("class","node default").attr("id",r.domId||r.id),n=t.insert("circle",":first-child"),s=t.insert("circle",":first-child");return s.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),n.attr("class","state-end").attr("r",5).attr("width",10).attr("height",10),m(r,s),r.intersect=function(i){return w.circle(r,7,i)},t},note:dt,subroutine:function(){var a=(0,L.Z)(function*(r,t){const{shapeSvg:n,bbox:s}=yield E(r,t,Y(t,void 0),!0),i=s.width+t.padding,e=s.height+t.padding,l=[{x:0,y:0},{x:i,y:0},{x:i,y:-e},{x:0,y:-e},{x:0,y:0},{x:-8,y:0},{x:i+8,y:0},{x:i+8,y:-e},{x:-8,y:-e},{x:-8,y:0}],c=I(n,i,e,l);return c.attr("style",t.style),m(t,c),t.intersect=function(h){return w.polygon(t,l,h)},n});return function(t,n){return a.apply(this,arguments)}}(),fork:tt,join:tt,class_box:(a,r)=>{const t=r.padding/2;let i;i=r.classes?"node "+r.classes:"node default";const e=a.insert("g").attr("class",i).attr("id",r.domId||r.id),l=e.insert("rect",":first-child"),c=e.insert("line"),h=e.insert("line");let o=0,p=4;const u=e.insert("g").attr("class","label");let x=0;const y=r.classData.annotations&&r.classData.annotations[0],k=r.classData.annotations[0]?"\xab"+r.classData.annotations[0]+"\xbb":"",g=u.node().appendChild(T(k,r.labelStyle,!0,!0));let b=g.getBBox();if((0,f.m)((0,f.c)().flowchart.htmlLabels)){const _=g.children[0],v=(0,S.Ys)(g);b=_.getBoundingClientRect(),v.attr("width",b.width),v.attr("height",b.height)}r.classData.annotations[0]&&(p+=b.height+4,o+=b.width);let d=r.classData.label;void 0!==r.classData.type&&""!==r.classData.type&&((0,f.c)().flowchart.htmlLabels?d+="&lt;"+r.classData.type+"&gt;":d+="<"+r.classData.type+">");const C=u.node().appendChild(T(d,r.labelStyle,!0,!0));(0,S.Ys)(C).attr("class","classTitle");let B=C.getBBox();if((0,f.m)((0,f.c)().flowchart.htmlLabels)){const _=C.children[0],v=(0,S.Ys)(C);B=_.getBoundingClientRect(),v.attr("width",B.width),v.attr("height",B.height)}p+=B.height+4,B.width>o&&(o=B.width);const Z=[];r.classData.members.forEach(_=>{const v=_.getDisplayDetails();let $=v.displayText;(0,f.c)().flowchart.htmlLabels&&($=$.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const O=u.node().appendChild(T($,v.cssStyle?v.cssStyle:r.labelStyle,!0,!0));let R=O.getBBox();if((0,f.m)((0,f.c)().flowchart.htmlLabels)){const F=O.children[0],W=(0,S.Ys)(O);R=F.getBoundingClientRect(),W.attr("width",R.width),W.attr("height",R.height)}R.width>o&&(o=R.width),p+=R.height+4,Z.push(O)}),p+=8;const z=[];if(r.classData.methods.forEach(_=>{const v=_.getDisplayDetails();let $=v.displayText;(0,f.c)().flowchart.htmlLabels&&($=$.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const O=u.node().appendChild(T($,v.cssStyle?v.cssStyle:r.labelStyle,!0,!0));let R=O.getBBox();if((0,f.m)((0,f.c)().flowchart.htmlLabels)){const F=O.children[0],W=(0,S.Ys)(O);R=F.getBoundingClientRect(),W.attr("width",R.width),W.attr("height",R.height)}R.width>o&&(o=R.width),p+=R.height+4,z.push(O)}),p+=8,y){let _=(o-b.width)/2;(0,S.Ys)(g).attr("transform","translate( "+(-1*o/2+_)+", "+-1*p/2+")"),x=b.height+4}let jt=(o-B.width)/2;return(0,S.Ys)(C).attr("transform","translate( "+(-1*o/2+jt)+", "+(-1*p/2+x)+")"),x+=B.height+4,c.attr("class","divider").attr("x1",-o/2-t).attr("x2",o/2+t).attr("y1",-p/2-t+8+x).attr("y2",-p/2-t+8+x),x+=8,Z.forEach(_=>{(0,S.Ys)(_).attr("transform","translate( "+-o/2+", "+(-1*p/2+x+4)+")");const v=_?.getBBox();x+=(v?.height??0)+4}),x+=8,h.attr("class","divider").attr("x1",-o/2-t).attr("x2",o/2+t).attr("y1",-p/2-t+8+x).attr("y2",-p/2-t+8+x),x+=8,z.forEach(_=>{(0,S.Ys)(_).attr("transform","translate( "+-o/2+", "+(-1*p/2+x)+")");const v=_?.getBBox();x+=(v?.height??0)+4}),l.attr("class","outer title-state").attr("x",-o/2-t).attr("y",-p/2-t).attr("width",o+r.padding).attr("height",p+r.padding),m(r,l),r.intersect=function(_){return w.rect(r,_)},e}};let D={};const Rt=function(){var a=(0,L.Z)(function*(r,t,n){let s,i;if(t.link){let e;"sandbox"===(0,f.c)().securityLevel?e="_top":t.linkTarget&&(e=t.linkTarget||"_blank"),s=r.insert("svg:a").attr("xlink:href",t.link).attr("target",e),i=yield rt[t.shape](s,t,n)}else i=yield rt[t.shape](r,t,n),s=i;return t.tooltip&&i.attr("title",t.tooltip),t.class&&i.attr("class","node default "+t.class),D[t.id]=s,t.haveCallback&&D[t.id].attr("class",D[t.id].attr("class")+" clickable"),s});return function(t,n,s){return a.apply(this,arguments)}}(),It=(a,r)=>{D[r.id]=a},Ot=()=>{D={}},Ht=a=>{const r=D[a.id];f.l.trace("Transforming node",a.diff,a,"translate("+(a.x-a.width/2-5)+", "+a.width/2+")");const n=a.diff||0;return r.attr("transform",a.clusterNode?"translate("+(a.x+n-a.width/2)+", "+(a.y-a.height/2-8)+")":"translate("+a.x+", "+a.y+")"),n},H={aggregation:18,extension:18,composition:18,dependency:6,lollipop:13.5,arrow_point:5.3};function X(a,r){a=j(a),r=j(r);const[t,n]=[a.x,a.y],[s,i]=[r.x,r.y],e=s-t,l=i-n;return{angle:Math.atan(l/e),deltaX:e,deltaY:l}}const j=a=>Array.isArray(a)?{x:a[0],y:a[1]}:a,at=a=>({x:function(r,t,n){let s=0;if(0===t&&Object.hasOwn(H,a.arrowTypeStart)){const{angle:i,deltaX:e}=X(n[0],n[1]);s=H[a.arrowTypeStart]*Math.cos(i)*(e>=0?1:-1)}else if(t===n.length-1&&Object.hasOwn(H,a.arrowTypeEnd)){const{angle:i,deltaX:e}=X(n[n.length-1],n[n.length-2]);s=H[a.arrowTypeEnd]*Math.cos(i)*(e>=0?1:-1)}return j(r).x+s},y:function(r,t,n){let s=0;if(0===t&&Object.hasOwn(H,a.arrowTypeStart)){const{angle:i,deltaY:e}=X(n[0],n[1]);s=H[a.arrowTypeStart]*Math.abs(Math.sin(i))*(e>=0?1:-1)}else if(t===n.length-1&&Object.hasOwn(H,a.arrowTypeEnd)){const{angle:i,deltaY:e}=X(n[n.length-1],n[n.length-2]);s=H[a.arrowTypeEnd]*Math.abs(Math.sin(i))*(e>=0?1:-1)}return j(r).y+s}});let A={},M={};const Zt=()=>{A={},M={}},$t=(a,r)=>{const t=(0,f.m)((0,f.c)().flowchart.htmlLabels),n="markdown"===r.labelType?(0,J.a)(a,r.label,{style:r.labelStyle,useHtmlLabels:t,addSvgBackground:!0}):T(r.label,r.labelStyle);f.l.info("abc82",r,r.labelType);const s=a.insert("g").attr("class","edgeLabel"),i=s.insert("g").attr("class","label");i.node().appendChild(n);let l,e=n.getBBox();if(t){const c=n.children[0],h=(0,S.Ys)(n);e=c.getBoundingClientRect(),h.attr("width",e.width),h.attr("height",e.height)}if(i.attr("transform","translate("+-e.width/2+", "+-e.height/2+")"),A[r.id]=s,r.width=e.width,r.height=e.height,r.startLabelLeft){const c=T(r.startLabelLeft,r.labelStyle),h=a.insert("g").attr("class","edgeTerminals"),o=h.insert("g").attr("class","inner");l=o.node().appendChild(c);const p=c.getBBox();o.attr("transform","translate("+-p.width/2+", "+-p.height/2+")"),M[r.id]||(M[r.id]={}),M[r.id].startLeft=h,U(l,r.startLabelLeft)}if(r.startLabelRight){const c=T(r.startLabelRight,r.labelStyle),h=a.insert("g").attr("class","edgeTerminals"),o=h.insert("g").attr("class","inner");l=h.node().appendChild(c),o.node().appendChild(c);const p=c.getBBox();o.attr("transform","translate("+-p.width/2+", "+-p.height/2+")"),M[r.id]||(M[r.id]={}),M[r.id].startRight=h,U(l,r.startLabelRight)}if(r.endLabelLeft){const c=T(r.endLabelLeft,r.labelStyle),h=a.insert("g").attr("class","edgeTerminals"),o=h.insert("g").attr("class","inner");l=o.node().appendChild(c);const p=c.getBBox();o.attr("transform","translate("+-p.width/2+", "+-p.height/2+")"),h.node().appendChild(c),M[r.id]||(M[r.id]={}),M[r.id].endLeft=h,U(l,r.endLabelLeft)}if(r.endLabelRight){const c=T(r.endLabelRight,r.labelStyle),h=a.insert("g").attr("class","edgeTerminals"),o=h.insert("g").attr("class","inner");l=o.node().appendChild(c);const p=c.getBBox();o.attr("transform","translate("+-p.width/2+", "+-p.height/2+")"),h.node().appendChild(c),M[r.id]||(M[r.id]={}),M[r.id].endRight=h,U(l,r.endLabelRight)}return n};function U(a,r){(0,f.c)().flowchart.htmlLabels&&a&&(a.style.width=9*r.length+"px",a.style.height="12px")}const Dt=(a,r)=>{f.l.info("Moving label abc78 ",a.id,a.label,A[a.id]);let t=r.updatedPath?r.updatedPath:r.originalPath;if(a.label){const n=A[a.id];let s=a.x,i=a.y;if(t){const e=f.u.calcLabelPosition(t);f.l.info("Moving label "+a.label+" from (",s,",",i,") to (",e.x,",",e.y,") abc78"),r.updatedPath&&(s=e.x,i=e.y)}n.attr("transform","translate("+s+", "+i+")")}if(a.startLabelLeft){const n=M[a.id].startLeft;let s=a.x,i=a.y;if(t){const e=f.u.calcTerminalLabelPosition(a.arrowTypeStart?10:0,"start_left",t);s=e.x,i=e.y}n.attr("transform","translate("+s+", "+i+")")}if(a.startLabelRight){const n=M[a.id].startRight;let s=a.x,i=a.y;if(t){const e=f.u.calcTerminalLabelPosition(a.arrowTypeStart?10:0,"start_right",t);s=e.x,i=e.y}n.attr("transform","translate("+s+", "+i+")")}if(a.endLabelLeft){const n=M[a.id].endLeft;let s=a.x,i=a.y;if(t){const e=f.u.calcTerminalLabelPosition(a.arrowTypeEnd?10:0,"end_left",t);s=e.x,i=e.y}n.attr("transform","translate("+s+", "+i+")")}if(a.endLabelRight){const n=M[a.id].endRight;let s=a.x,i=a.y;if(t){const e=f.u.calcTerminalLabelPosition(a.arrowTypeEnd?10:0,"end_right",t);s=e.x,i=e.y}n.attr("transform","translate("+s+", "+i+")")}},et=(a,r)=>{f.l.warn("abc88 cutPathAtIntersect",a,r);let t=[],n=a[0],s=!1;return a.forEach(i=>{if(f.l.info("abc88 checking point",i,r),((a,r)=>{const n=a.y,s=Math.abs(r.x-a.x),i=Math.abs(r.y-n);return s>=a.width/2||i>=a.height/2})(r,i)||s)f.l.warn("abc88 outside",i,n),n=i,s||t.push(i);else{const e=((a,r,t)=>{f.l.warn(`intersection calc abc89:\n  outsidePoint: ${JSON.stringify(r)}\n  insidePoint : ${JSON.stringify(t)}\n  node        : x:${a.x} y:${a.y} w:${a.width} h:${a.height}`);const n=a.x,s=a.y,i=Math.abs(n-t.x),e=a.width/2;let l=t.x<r.x?e-i:e+i;const c=a.height/2,h=Math.abs(r.y-t.y),o=Math.abs(r.x-t.x);if(Math.abs(s-r.y)*e>Math.abs(n-r.x)*c){let p=t.y<r.y?r.y-c-s:s-c-r.y;l=o*p/h;const u={x:t.x<r.x?t.x+l:t.x-o+l,y:t.y<r.y?t.y+h-p:t.y-h+p};return 0===l&&(u.x=r.x,u.y=r.y),0===o&&(u.x=r.x),0===h&&(u.y=r.y),f.l.warn(`abc89 topp/bott calc, Q ${h}, q ${p}, R ${o}, r ${l}`,u),u}{l=t.x<r.x?r.x-e-n:n-e-r.x;let p=h*l/o,u=t.x<r.x?t.x+o-l:t.x-o+l,x=t.y<r.y?t.y+p:t.y-p;return f.l.warn(`sides calc abc89, Q ${h}, q ${p}, R ${o}, r ${l}`,{_x:u,_y:x}),0===l&&(u=r.x,x=r.y),0===o&&(u=r.x),0===h&&(x=r.y),{x:u,y:x}}})(r,n,i);f.l.warn("abc88 inside",i,n,e),f.l.warn("abc88 intersection",e);let l=!1;t.forEach(c=>{l=l||c.x===e.x&&c.y===e.y}),t.some(c=>c.x===e.x&&c.y===e.y)?f.l.warn("abc88 no intersect",e,t):t.push(e),s=!0}}),f.l.warn("abc88 returning points",t),t},Xt=function(a,r,t,n,s,i,e){let l=t.points,c=!1;const h=i.node(r.v);var o=i.node(r.w);f.l.info("abc88 InsertEdge: ",t),o.intersect&&h.intersect&&(l=l.slice(1,t.points.length-1),l.unshift(h.intersect(l[0])),f.l.info("Last point",l[l.length-1],o,o.intersect(l[l.length-1])),l.push(o.intersect(l[l.length-1]))),t.toCluster&&(f.l.info("to cluster abc88",n[t.toCluster]),l=et(t.points,n[t.toCluster].node),c=!0),t.fromCluster&&(f.l.info("from cluster abc88",n[t.fromCluster]),l=et(l.reverse(),n[t.fromCluster].node).reverse(),c=!0);const p=l.filter(B=>!Number.isNaN(B.y));let u=S.$0Z;t.curve&&("graph"===s||"flowchart"===s)&&(u=t.curve);const{x,y}=at(t),k=(0,S.jvg)().x(x).y(y).curve(u);let g;switch(t.thickness){case"normal":g="edge-thickness-normal";break;case"thick":case"invisible":g="edge-thickness-thick";break;default:g=""}switch(t.pattern){case"solid":g+=" edge-pattern-solid";break;case"dotted":g+=" edge-pattern-dotted";break;case"dashed":g+=" edge-pattern-dashed"}const b=a.append("path").attr("d",k(p)).attr("id",t.id).attr("class"," "+g+(t.classes?" "+t.classes:"")).attr("style",t.style);let d="";switch(((0,f.c)().flowchart.arrowMarkerAbsolute||(0,f.c)().state.arrowMarkerAbsolute)&&(d=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,d=d.replace(/\(/g,"\\("),d=d.replace(/\)/g,"\\)")),f.l.info("arrowTypeStart",t.arrowTypeStart),f.l.info("arrowTypeEnd",t.arrowTypeEnd),t.arrowTypeStart){case"arrow_cross":b.attr("marker-start","url("+d+"#"+e+"_"+s+"-crossStart)");break;case"arrow_point":b.attr("marker-start","url("+d+"#"+e+"_"+s+"-pointStart)");break;case"arrow_barb":b.attr("marker-start","url("+d+"#"+e+"_"+s+"-barbStart)");break;case"arrow_circle":b.attr("marker-start","url("+d+"#"+e+"_"+s+"-circleStart)");break;case"aggregation":b.attr("marker-start","url("+d+"#"+e+"_"+s+"-aggregationStart)");break;case"extension":b.attr("marker-start","url("+d+"#"+e+"_"+s+"-extensionStart)");break;case"composition":b.attr("marker-start","url("+d+"#"+e+"_"+s+"-compositionStart)");break;case"dependency":b.attr("marker-start","url("+d+"#"+e+"_"+s+"-dependencyStart)");break;case"lollipop":b.attr("marker-start","url("+d+"#"+e+"_"+s+"-lollipopStart)")}switch(t.arrowTypeEnd){case"arrow_cross":b.attr("marker-end","url("+d+"#"+e+"_"+s+"-crossEnd)");break;case"arrow_point":b.attr("marker-end","url("+d+"#"+e+"_"+s+"-pointEnd)");break;case"arrow_barb":b.attr("marker-end","url("+d+"#"+e+"_"+s+"-barbEnd)");break;case"arrow_circle":b.attr("marker-end","url("+d+"#"+e+"_"+s+"-circleEnd)");break;case"aggregation":b.attr("marker-end","url("+d+"#"+e+"_"+s+"-aggregationEnd)");break;case"extension":b.attr("marker-end","url("+d+"#"+e+"_"+s+"-extensionEnd)");break;case"composition":b.attr("marker-end","url("+d+"#"+e+"_"+s+"-compositionEnd)");break;case"dependency":b.attr("marker-end","url("+d+"#"+e+"_"+s+"-dependencyEnd)");break;case"lollipop":b.attr("marker-end","url("+d+"#"+e+"_"+s+"-lollipopEnd)")}let C={};return c&&(C.updatedPath=l),C.originalPath=t.points,C}}}]);