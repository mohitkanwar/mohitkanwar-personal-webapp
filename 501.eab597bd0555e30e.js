"use strict";(self.webpackChunkang2_mohitkanwar=self.webpackChunkang2_mohitkanwar||[]).push([[501],{1501:(Y,N,f)=>{f.r(N),f.d(N,{diagram:()=>U});var L=f(9132),b=f(8586),S=f(1065),H=f(8814),s=f(8190);f(1764),f(6780),f(2735);let O=0;const C=function(i,a,t,l){const{displayText:p,cssStyle:c}=a.getDisplayDetails(),o=i.append("tspan").attr("x",l.padding).text(p);""!==c&&o.attr("style",a.cssStyle),t||o.attr("dy",l.textHeight)},v_drawClass=function(i,a,t,l){s.l.debug("Rendering class ",a,t);const p=a.id,c={id:p,label:a.id,width:0,height:0},o=i.append("g").attr("id",l.db.lookUpDomId(p)).attr("class","classGroup");let h;h=a.link?o.append("svg:a").attr("xlink:href",a.link).attr("target",a.linkTarget).append("text").attr("y",t.textHeight+t.padding).attr("x",0):o.append("text").attr("y",t.textHeight+t.padding).attr("x",0);let n=!0;a.annotations.forEach(function(d){const g=h.append("tspan").text("\xab"+d+"\xbb");n||g.attr("dy",t.textHeight),n=!1});let r=function(i){let a=i.id;return i.type&&(a+="<"+(0,s.v)(i.type)+">"),a}(a);const E=h.append("tspan").text(r).attr("class","title");n||E.attr("dy",t.textHeight);const x=h.node().getBBox().height;let y,w,u;if(a.members.length>0){y=o.append("line").attr("x1",0).attr("y1",t.padding+x+t.dividerMargin/2).attr("y2",t.padding+x+t.dividerMargin/2);const d=o.append("text").attr("x",t.padding).attr("y",x+t.dividerMargin+t.textHeight).attr("fill","white").attr("class","classText");n=!0,a.members.forEach(function(g){C(d,g,n,t),n=!1}),w=d.node().getBBox()}if(a.methods.length>0){u=o.append("line").attr("x1",0).attr("y1",t.padding+x+t.dividerMargin+w.height).attr("y2",t.padding+x+t.dividerMargin+w.height);const d=o.append("text").attr("x",t.padding).attr("y",x+2*t.dividerMargin+w.height+t.textHeight).attr("fill","white").attr("class","classText");n=!0,a.methods.forEach(function(g){C(d,g,n,t),n=!1})}const _=o.node().getBBox();var m=" ";a.cssClasses.length>0&&(m+=a.cssClasses.join(" "));const e=o.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",_.width+2*t.padding).attr("height",_.height+t.padding+.5*t.dividerMargin).attr("class",m).node().getBBox().width;return h.node().childNodes.forEach(function(d){d.setAttribute("x",(e-d.getBBox().width)/2)}),a.tooltip&&h.insert("title").text(a.tooltip),y&&y.attr("x2",e),u&&u.attr("x2",e),c.width=e,c.height=_.height+t.padding+.5*t.dividerMargin,c};let T={};const k=function(i){const a=Object.entries(T).find(t=>t[1].label===i);if(a)return a[0]},U={parser:L.p,db:L.d,renderer:{draw:function(i,a,t,l){const p=(0,s.c)().class;T={},s.l.info("Rendering diagram "+i);const c=(0,s.c)().securityLevel;let o;"sandbox"===c&&(o=(0,b.Ys)("#i"+a));const h=(0,b.Ys)("sandbox"===c?o.nodes()[0].contentDocument.body:"body"),n=h.select(`[id='${a}']`);!function(i){i.append("defs").append("marker").attr("id","extensionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),i.append("defs").append("marker").attr("id","extensionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z"),i.append("defs").append("marker").attr("id","compositionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),i.append("defs").append("marker").attr("id","compositionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),i.append("defs").append("marker").attr("id","aggregationStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),i.append("defs").append("marker").attr("id","aggregationEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),i.append("defs").append("marker").attr("id","dependencyStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),i.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")}(n);const r=new H.k({multigraph:!0});r.setGraph({isMultiGraph:!0}),r.setDefaultEdgeLabel(function(){return{}});const E=l.db.getClasses(),x=Object.keys(E);for(const e of x){const g=v_drawClass(n,E[e],p,l);T[g.id]=g,r.setNode(g.id,g),s.l.info("Org height: "+g.height)}l.db.getRelations().forEach(function(e){s.l.info("tjoho"+k(e.id1)+k(e.id2)+JSON.stringify(e)),r.setEdge(k(e.id1),k(e.id2),{relation:e},e.title||"DEFAULT")}),l.db.getNotes().forEach(function(e){s.l.debug(`Adding note: ${JSON.stringify(e)}`);const d=function(i,a,t,l){s.l.debug("Rendering note ",a,t);const p=a.id,c={id:p,text:a.text,width:0,height:0},o=i.append("g").attr("id",p).attr("class","classGroup");let h=o.append("text").attr("y",t.textHeight+t.padding).attr("x",0);const n=JSON.parse(`"${a.text}"`).split("\n");n.forEach(function(y){s.l.debug(`Adding line: ${y}`),h.append("tspan").text(y).attr("class","title").attr("dy",t.textHeight)});const r=o.node().getBBox(),x=o.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",r.width+2*t.padding).attr("height",r.height+n.length*t.textHeight+t.padding+.5*t.dividerMargin).node().getBBox().width;return h.node().childNodes.forEach(function(y){y.setAttribute("x",(x-y.getBBox().width)/2)}),c.width=x,c.height=r.height+n.length*t.textHeight+t.padding+.5*t.dividerMargin,c}(n,e,p);T[d.id]=d,r.setNode(d.id,d),e.class&&e.class in E&&r.setEdge(e.id,k(e.class),{relation:{id1:e.id,id2:e.class,relation:{type1:"none",type2:"none",lineType:10}}},"DEFAULT")}),(0,S.bK)(r),r.nodes().forEach(function(e){void 0!==e&&void 0!==r.node(e)&&(s.l.debug("Node "+e+": "+JSON.stringify(r.node(e))),h.select("#"+(l.db.lookUpDomId(e)||e)).attr("transform","translate("+(r.node(e).x-r.node(e).width/2)+","+(r.node(e).y-r.node(e).height/2)+" )"))}),r.edges().forEach(function(e){void 0!==e&&void 0!==r.edge(e)&&(s.l.debug("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(r.edge(e))),function(i,a,t,l,p){const c=function(e){switch(e){case p.db.relationType.AGGREGATION:return"aggregation";case p.db.relationType.EXTENSION:return"extension";case p.db.relationType.COMPOSITION:return"composition";case p.db.relationType.DEPENDENCY:return"dependency";case p.db.relationType.LOLLIPOP:return"lollipop"}};a.points=a.points.filter(e=>!Number.isNaN(e.y));const o=a.points,h=(0,b.jvg)().x(function(e){return e.x}).y(function(e){return e.y}).curve(b.$0Z),n=i.append("path").attr("d",h(o)).attr("id","edge"+O).attr("class","relation");let E,x,r="";l.arrowMarkerAbsolute&&(r=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,r=r.replace(/\(/g,"\\("),r=r.replace(/\)/g,"\\)")),1==t.relation.lineType&&n.attr("class","relation dashed-line"),10==t.relation.lineType&&n.attr("class","relation dotted-line"),"none"!==t.relation.type1&&n.attr("marker-start","url("+r+"#"+c(t.relation.type1)+"Start)"),"none"!==t.relation.type2&&n.attr("marker-end","url("+r+"#"+c(t.relation.type2)+"End)");const y=a.points.length;let u,_,m,M,w=s.u.calcLabelPosition(a.points);if(E=w.x,x=w.y,y%2!=0&&y>1){let e=s.u.calcCardinalityPosition("none"!==t.relation.type1,a.points,a.points[0]),d=s.u.calcCardinalityPosition("none"!==t.relation.type2,a.points,a.points[y-1]);s.l.debug("cardinality_1_point "+JSON.stringify(e)),s.l.debug("cardinality_2_point "+JSON.stringify(d)),u=e.x,_=e.y,m=d.x,M=d.y}if(void 0!==t.title){const e=i.append("g").attr("class","classLabel"),d=e.append("text").attr("class","label").attr("x",E).attr("y",x).attr("fill","red").attr("text-anchor","middle").text(t.title);window.label=d;const g=d.node().getBBox();e.insert("rect",":first-child").attr("class","box").attr("x",g.x-l.padding/2).attr("y",g.y-l.padding/2).attr("width",g.width+l.padding).attr("height",g.height+l.padding)}s.l.info("Rendering relation "+JSON.stringify(t)),void 0!==t.relationTitle1&&"none"!==t.relationTitle1&&i.append("g").attr("class","cardinality").append("text").attr("class","type1").attr("x",u).attr("y",_).attr("fill","black").attr("font-size","6").text(t.relationTitle1),void 0!==t.relationTitle2&&"none"!==t.relationTitle2&&i.append("g").attr("class","cardinality").append("text").attr("class","type2").attr("x",m).attr("y",M).attr("fill","black").attr("font-size","6").text(t.relationTitle2),O++}(n,r.edge(e),r.edge(e).relation,p,l))});const u=n.node().getBBox(),_=u.width+40,m=u.height+40;(0,s.i)(n,m,_,p.useMaxWidth);const M=`${u.x-20} ${u.y-20} ${_} ${m}`;s.l.debug(`viewBox ${M}`),n.attr("viewBox",M)}},styles:L.s,init:i=>{i.class||(i.class={}),i.class.arrowMarkerAbsolute=i.arrowMarkerAbsolute,L.d.clear()}}}}]);