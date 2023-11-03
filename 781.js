"use strict";(self.webpackChunkang2_mohitkanwar=self.webpackChunkang2_mohitkanwar||[]).push([[781],{8781:(At,$,l)=>{l.r($),l.d($,{diagram:()=>Dt});var Z=l(5861),_=l(8439),m=l(5346),P=l(6768),i=l(6929),J=l(6076);l(3304),l(398),l(896),l(4948),l(2338);const p="rect",O="rectWithTitle",D="statediagram",st=`${D}-state`,v="transition",nt=`${v} note-edge`,ct=`${D}-note`,it=`${D}-cluster`,rt=`${D}-cluster-alt`,G="parent",B="note",R="----",at=`${R}${B}`,w=`${R}${G}`,N="fill:none",U="fill: #333",k="text",K="normal";let y={},E=0;function x(e="",c=0,t="",r=R){return`state-${e}${null!==t&&t.length>0?`${r}${t}`:""}-${c}`}const u=(e,c,t,r,n,a)=>{const s=t.id,f=function Et(e){return null==e?"":e.classes?e.classes.join(" "):""}(r[s]);if("root"!==s){let h=p;!0===t.start&&(h="start"),!1===t.start&&(h="end"),t.type!==_.D&&(h=t.type),y[s]||(y[s]={id:s,shape:h,description:i.e.sanitizeText(s,(0,i.c)()),classes:`${f} ${st}`});const o=y[s];t.description&&(Array.isArray(o.description)?(o.shape=O,o.description.push(t.description)):o.description.length>0?(o.shape=O,o.description=o.description===s?[t.description]:[o.description,t.description]):(o.shape=p,o.description=t.description),o.description=i.e.sanitizeTextOrArray(o.description,(0,i.c)())),1===o.description.length&&o.shape===O&&(o.shape=p),!o.type&&t.doc&&(i.l.info("Setting cluster for ",s,M(t)),o.type="group",o.dir=M(t),o.shape=t.type===_.a?"divider":"roundedWithTitle",o.classes=o.classes+" "+it+" "+(a?rt:""));const A={labelStyle:"",shape:o.shape,labelText:o.description,classes:o.classes,style:"",id:s,dir:o.dir,domId:x(s,E),type:o.type,padding:15,centerLabel:!0};if(t.note){const S={labelStyle:"",shape:"note",labelText:t.note.text,classes:ct,style:"",id:s+at+"-"+E,domId:x(s,E,B),type:o.type,padding:15},C={labelStyle:"",shape:"noteGroup",labelText:t.note.text,classes:o.classes,style:"",id:s+w,domId:x(s,E,G),type:"group",padding:0};E++;const d=s+w;e.setNode(d,C),e.setNode(S.id,S),e.setNode(s,A),e.setParent(s,d),e.setParent(S.id,d);let g=s,T=S.id;"left of"===t.note.position&&(g=S.id,T=s),e.setEdge(g,T,{arrowhead:"none",arrowType:"",style:N,labelStyle:"",classes:nt,arrowheadStyle:U,labelpos:"c",labelType:k,thickness:K})}else e.setNode(s,A)}c&&"root"!==c.id&&(i.l.trace("Setting node ",s," to be child of its parent ",c.id),e.setParent(s,c.id)),t.doc&&(i.l.trace("Adding nodes children "),St(e,t,t.doc,r,n,!a))},St=(e,c,t,r,n,a)=>{i.l.trace("items",t),t.forEach(s=>{switch(s.stmt){case _.b:case _.D:u(e,c,s,r,n,a);break;case _.S:{u(e,c,s.state1,r,n,a),u(e,c,s.state2,r,n,a);const f={id:"edge"+E,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:N,labelStyle:"",label:i.e.sanitizeText(s.description,(0,i.c)()),arrowheadStyle:U,labelpos:"c",labelType:k,thickness:K,classes:v};e.setEdge(s.state1.id,s.state2.id,f,E),E++}}})},M=(e,c=_.c)=>{let t=c;if(e.doc)for(let r=0;r<e.doc.length;r++){const n=e.doc[r];"dir"===n.stmt&&(t=n.value)}return t},Dt={parser:_.p,db:_.d,renderer:{setConf:function(e){const c=Object.keys(e);for(const t of c);},getClasses:function(e,c){return c.db.extract(c.db.getRootDocV2()),c.db.getClasses()},draw:function(){var e=(0,Z.Z)(function*(c,t,r,n){i.l.info("Drawing state diagram (v2)",t),y={},n.db.getDirection();const{securityLevel:a,state:s}=(0,i.c)(),f=s.nodeSpacing||50,h=s.rankSpacing||50;i.l.info(n.db.getRootDocV2()),n.db.extract(n.db.getRootDocV2()),i.l.info(n.db.getRootDocV2());const o=n.db.getStates(),A=new m.k({multigraph:!0,compound:!0}).setGraph({rankdir:M(n.db.getRootDocV2()),nodesep:f,ranksep:h,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});let S;u(A,void 0,n.db.getRootDocV2(),o,n.db,!0),"sandbox"===a&&(S=(0,P.Ys)("#i"+t));const C=(0,P.Ys)("sandbox"===a?S.nodes()[0].contentDocument.body:"body"),d=C.select(`[id="${t}"]`),g=C.select("#"+t+" g");yield(0,J.r)(g,A,["barb"],D,t),i.u.insertTitle(d,"statediagramTitleText",s.titleTopMargin,n.db.getDiagramTitle());const H=d.node().getBBox(),j=H.width+16,V=H.height+16;d.attr("class",D);const Y=d.node().getBBox();(0,i.i)(d,V,j,s.useMaxWidth);const z=`${Y.x-8} ${Y.y-8} ${j} ${V}`;i.l.debug(`viewBox ${z}`),d.attr("viewBox",z);const ht=document.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const L of ht){const I=L.getBBox(),b=document.createElementNS("http://www.w3.org/2000/svg",p);b.setAttribute("rx",0),b.setAttribute("ry",0),b.setAttribute("width",I.width),b.setAttribute("height",I.height),L.insertBefore(b,L.firstChild)}});return function(t,r,n,a){return e.apply(this,arguments)}}()},styles:_.s,init:e=>{e.state||(e.state={}),e.state.arrowMarkerAbsolute=e.arrowMarkerAbsolute,_.d.clear()}}}}]);