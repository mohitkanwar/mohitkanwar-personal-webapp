"use strict";(self.webpackChunkang2_mohitkanwar=self.webpackChunkang2_mohitkanwar||[]).push([[673],{9673:(z,M,c)=>{c.r(M),c.d(M,{diagram:()=>W});var P=c(5861),E=c(9132),v=c(8586),C=c(8814),e=c(8190),A=c(4296);c(1764),c(6780),c(2735),c(1065),c(7416);const x=n=>e.e.sanitizeText(n,(0,e.c)());let T={dividerMargin:10,padding:5,textHeight:10,curve:void 0};const k=function(n,i,r,_,t){const s=Object.keys(n);e.l.info("keys:",s),e.l.info(n),s.filter(l=>n[l].parent==t).forEach(function(l){var d,a;const o=n[l],y=o.cssClasses.join(" "),p={labelStyle:"",shape:"class_box",labelText:x(o.label??o.id),classData:o,rx:0,ry:0,class:y,style:"",id:o.id,domId:o.domId,tooltip:_.db.getTooltip(o.id,t)||"",haveCallback:o.haveCallback,link:o.link,width:"group"===o.type?500:void 0,type:o.type,padding:(null==(d=(0,e.c)().flowchart)?void 0:d.padding)??(null==(a=(0,e.c)().class)?void 0:a.padding)};i.setNode(o.id,p),t&&i.setParent(o.id,t),e.l.info("setNode",p)})};function w(n){let i;switch(n){case 0:i="aggregation";break;case 1:i="extension";break;case 2:i="composition";break;case 3:i="dependency";break;case 4:i="lollipop";break;default:i="none"}return i}const W={parser:E.p,db:E.d,renderer:{setConf:function(n){T={...T,...n}},draw:function(){var n=(0,P.Z)(function*(i,r,_,t){e.l.info("Drawing class - ",r);const s=(0,e.c)().flowchart??(0,e.c)().class,l=(0,e.c)().securityLevel;e.l.info("config:",s);const d=s?.nodeSpacing??50,a=s?.rankSpacing??50,o=new C.k({multigraph:!0,compound:!0}).setGraph({rankdir:t.db.getDirection(),nodesep:d,ranksep:a,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),y=t.db.getNamespaces(),u=t.db.getClasses(),f=t.db.getRelations(),h=t.db.getNotes();let b;e.l.info(f),function(n,i,r,_){const t=Object.keys(n);e.l.info("keys:",t),e.l.info(n),t.forEach(function(s){var l,d;const a=n[s],y={shape:"rect",id:a.id,domId:a.domId,labelText:x(a.id),labelStyle:"",style:"fill: none; stroke: black",padding:(null==(l=(0,e.c)().flowchart)?void 0:l.padding)??(null==(d=(0,e.c)().class)?void 0:d.padding)};i.setNode(a.id,y),k(a.classes,i,0,_,a.id),e.l.info("setNode",y)})}(y,o,0,t),k(u,o,0,t),function(n,i){const r=(0,e.c)().flowchart;let _=0;n.forEach(function(t){var s;_++;const l={classes:"relation",pattern:1==t.relation.lineType?"dashed":"solid",id:"id"+_,arrowhead:"arrow_open"===t.type?"none":"normal",startLabelRight:"none"===t.relationTitle1?"":t.relationTitle1,endLabelLeft:"none"===t.relationTitle2?"":t.relationTitle2,arrowTypeStart:w(t.relation.type1),arrowTypeEnd:w(t.relation.type2),style:"fill:none",labelStyle:"",curve:(0,e.n)(r?.curve,v.c_6)};if(e.l.info(l,t),void 0!==t.style){const d=(0,e.k)(t.style);l.style=d.style,l.labelStyle=d.labelStyle}t.text=t.title,void 0===t.text?void 0!==t.style&&(l.arrowheadStyle="fill: #333"):(l.arrowheadStyle="fill: #333",l.labelpos="c",(null==(s=(0,e.c)().flowchart)?void 0:s.htmlLabels)??(0,e.c)().htmlLabels?(l.labelType="html",l.label='<span class="edgeLabel">'+t.text+"</span>"):(l.labelType="text",l.label=t.text.replace(e.e.lineBreakRegex,"\n"),void 0===t.style&&(l.style=l.style||"stroke: #333; stroke-width: 1.5px;fill:none"),l.labelStyle=l.labelStyle.replace("color:","fill:"))),i.setEdge(t.id1,t.id2,l,_)})}(f,o),function(n,i,r,_){e.l.info(n),n.forEach(function(t,s){var l,d;const a=t,b={labelStyle:"",shape:"note",labelText:x(a.text),noteData:a,rx:0,ry:0,class:"",style:"",id:a.id,domId:a.id,tooltip:"",type:"note",padding:(null==(l=(0,e.c)().flowchart)?void 0:l.padding)??(null==(d=(0,e.c)().class)?void 0:d.padding)};if(i.setNode(a.id,b),e.l.info("setNode",b),!a.class||!(a.class in _))return;const p=r+s,m={id:`edgeNote${p}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:(0,e.n)(T.curve,v.c_6)};i.setEdge(a.id,a.class,m,p)})}(h,o,f.length+1,u),"sandbox"===l&&(b=(0,v.Ys)("#i"+r));const p=(0,v.Ys)("sandbox"===l?b.nodes()[0].contentDocument.body:"body"),m=p.select(`[id="${r}"]`),K=p.select("#"+r+" g");if(yield(0,A.r)(K,o,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",r),e.u.insertTitle(m,"classTitleText",s?.titleTopMargin??5,t.db.getDiagramTitle()),(0,e.o)(o,m,s?.diagramPadding,s?.useMaxWidth),!s?.htmlLabels){const L="sandbox"===l?b.nodes()[0].contentDocument:document,j=L.querySelectorAll('[id="'+r+'"] .edgeLabel .label');for(const D of j){const S=D.getBBox(),g=L.createElementNS("http://www.w3.org/2000/svg","rect");g.setAttribute("rx",0),g.setAttribute("ry",0),g.setAttribute("width",S.width),g.setAttribute("height",S.height),D.insertBefore(g,D.firstChild)}}});return function(r,_,t,s){return n.apply(this,arguments)}}()},styles:E.s,init:n=>{n.class||(n.class={}),n.class.arrowMarkerAbsolute=n.arrowMarkerAbsolute,E.d.clear()}}}}]);