"use strict";(self.webpackChunkang2_mohitkanwar=self.webpackChunkang2_mohitkanwar||[]).push([[132],{9132:(kt,Ge,ie)=>{ie.d(Ge,{d:()=>pt,p:()=>Ue,s:()=>ft});var P=ie(8586),h=ie(8190),ne=function(){var e=function(L,u,a,o){for(a=a||{},o=L.length;o--;a[L[o]]=u);return a},n=[1,16],r=[1,17],A=[1,18],c=[1,37],p=[1,38],g=[1,24],y=[1,22],D=[1,23],B=[1,29],ce=[1,30],le=[1,31],oe=[1,32],he=[1,33],Ae=[1,34],pe=[1,25],fe=[1,26],de=[1,27],Ee=[1,28],E=[1,42],C=[1,39],m=[1,40],b=[1,41],T=[1,43],Ce=[1,9],l=[1,8,9],j=[1,54],Q=[1,55],X=[1,56],W=[1,57],H=[1,58],me=[1,59],be=[1,60],q=[1,8,9,38],Re=[1,71],M=[1,8,9,12,13,21,36,38,41,58,59,60,61,62,63,64,69,71],J=[1,8,9,12,13,19,21,36,38,41,45,58,59,60,61,62,63,64,69,71,84,86,87,88,89],Z=[13,84,86,87,88,89],G=[13,63,64,84,86,87,88,89],we=[13,58,59,60,61,62,84,86,87,88,89],ke=[1,90],ge=[1,8,9,36,38,41],$=[1,8,9,21],Te={trace:function(){},yy:{},symbols_:{error:2,start:3,mermaidDoc:4,statements:5,graphConfig:6,CLASS_DIAGRAM:7,NEWLINE:8,EOF:9,statement:10,classLabel:11,SQS:12,STR:13,SQE:14,namespaceName:15,alphaNumToken:16,className:17,classLiteralName:18,GENERICTYPE:19,relationStatement:20,LABEL:21,namespaceStatement:22,classStatement:23,memberStatement:24,annotationStatement:25,clickStatement:26,cssClassStatement:27,noteStatement:28,direction:29,acc_title:30,acc_title_value:31,acc_descr:32,acc_descr_value:33,acc_descr_multiline_value:34,namespaceIdentifier:35,STRUCT_START:36,classStatements:37,STRUCT_STOP:38,NAMESPACE:39,classIdentifier:40,STYLE_SEPARATOR:41,members:42,CLASS:43,ANNOTATION_START:44,ANNOTATION_END:45,MEMBER:46,SEPARATOR:47,relation:48,NOTE_FOR:49,noteText:50,NOTE:51,direction_tb:52,direction_bt:53,direction_rl:54,direction_lr:55,relationType:56,lineType:57,AGGREGATION:58,EXTENSION:59,COMPOSITION:60,DEPENDENCY:61,LOLLIPOP:62,LINE:63,DOTTED_LINE:64,CALLBACK:65,LINK:66,LINK_TARGET:67,CLICK:68,CALLBACK_NAME:69,CALLBACK_ARGS:70,HREF:71,CSSCLASS:72,commentToken:73,textToken:74,graphCodeTokens:75,textNoTagsToken:76,TAGSTART:77,TAGEND:78,"==":79,"--":80,PCT:81,DEFAULT:82,SPACE:83,MINUS:84,keywords:85,UNICODE_TEXT:86,NUM:87,ALPHA:88,BQUOTE_STR:89,$accept:0,$end:1},terminals_:{2:"error",7:"CLASS_DIAGRAM",8:"NEWLINE",9:"EOF",12:"SQS",13:"STR",14:"SQE",19:"GENERICTYPE",21:"LABEL",30:"acc_title",31:"acc_title_value",32:"acc_descr",33:"acc_descr_value",34:"acc_descr_multiline_value",36:"STRUCT_START",38:"STRUCT_STOP",39:"NAMESPACE",41:"STYLE_SEPARATOR",43:"CLASS",44:"ANNOTATION_START",45:"ANNOTATION_END",46:"MEMBER",47:"SEPARATOR",49:"NOTE_FOR",51:"NOTE",52:"direction_tb",53:"direction_bt",54:"direction_rl",55:"direction_lr",58:"AGGREGATION",59:"EXTENSION",60:"COMPOSITION",61:"DEPENDENCY",62:"LOLLIPOP",63:"LINE",64:"DOTTED_LINE",65:"CALLBACK",66:"LINK",67:"LINK_TARGET",68:"CLICK",69:"CALLBACK_NAME",70:"CALLBACK_ARGS",71:"HREF",72:"CSSCLASS",75:"graphCodeTokens",77:"TAGSTART",78:"TAGEND",79:"==",80:"--",81:"PCT",82:"DEFAULT",83:"SPACE",84:"MINUS",85:"keywords",86:"UNICODE_TEXT",87:"NUM",88:"ALPHA",89:"BQUOTE_STR"},productions_:[0,[3,1],[3,1],[4,1],[6,4],[5,1],[5,2],[5,3],[11,3],[15,1],[15,2],[17,1],[17,1],[17,2],[17,2],[17,2],[10,1],[10,2],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,2],[10,2],[10,1],[22,4],[22,5],[35,2],[37,1],[37,2],[37,3],[23,1],[23,3],[23,4],[23,6],[40,2],[40,3],[25,4],[42,1],[42,2],[24,1],[24,2],[24,1],[24,1],[20,3],[20,4],[20,4],[20,5],[28,3],[28,2],[29,1],[29,1],[29,1],[29,1],[48,3],[48,2],[48,2],[48,1],[56,1],[56,1],[56,1],[56,1],[56,1],[57,1],[57,1],[26,3],[26,4],[26,3],[26,4],[26,4],[26,5],[26,3],[26,4],[26,4],[26,5],[26,4],[26,5],[26,5],[26,6],[27,3],[73,1],[73,1],[74,1],[74,1],[74,1],[74,1],[74,1],[74,1],[74,1],[76,1],[76,1],[76,1],[76,1],[16,1],[16,1],[16,1],[16,1],[18,1],[50,1]],performAction:function(u,a,o,i,d,t,U){var s=t.length-1;switch(d){case 8:this.$=t[s-1];break;case 9:case 11:case 12:this.$=t[s];break;case 10:case 13:this.$=t[s-1]+t[s];break;case 14:case 15:this.$=t[s-1]+"~"+t[s]+"~";break;case 16:i.addRelation(t[s]);break;case 17:t[s-1].title=i.cleanupLabel(t[s]),i.addRelation(t[s-1]);break;case 26:this.$=t[s].trim(),i.setAccTitle(this.$);break;case 27:case 28:this.$=t[s].trim(),i.setAccDescription(this.$);break;case 29:i.addClassesToNamespace(t[s-3],t[s-1]);break;case 30:i.addClassesToNamespace(t[s-4],t[s-1]);break;case 31:this.$=t[s],i.addNamespace(t[s]);break;case 32:case 42:this.$=[t[s]];break;case 33:this.$=[t[s-1]];break;case 34:t[s].unshift(t[s-2]),this.$=t[s];break;case 36:i.setCssClass(t[s-2],t[s]);break;case 37:i.addMembers(t[s-3],t[s-1]);break;case 38:i.setCssClass(t[s-5],t[s-3]),i.addMembers(t[s-5],t[s-1]);break;case 39:this.$=t[s],i.addClass(t[s]);break;case 40:this.$=t[s-1],i.addClass(t[s-1]),i.setClassLabel(t[s-1],t[s]);break;case 41:i.addAnnotation(t[s],t[s-2]);break;case 43:t[s].push(t[s-1]),this.$=t[s];break;case 44:case 46:case 47:break;case 45:i.addMember(t[s-1],i.cleanupLabel(t[s]));break;case 48:this.$={id1:t[s-2],id2:t[s],relation:t[s-1],relationTitle1:"none",relationTitle2:"none"};break;case 49:this.$={id1:t[s-3],id2:t[s],relation:t[s-1],relationTitle1:t[s-2],relationTitle2:"none"};break;case 50:this.$={id1:t[s-3],id2:t[s],relation:t[s-2],relationTitle1:"none",relationTitle2:t[s-1]};break;case 51:this.$={id1:t[s-4],id2:t[s],relation:t[s-2],relationTitle1:t[s-3],relationTitle2:t[s-1]};break;case 52:i.addNote(t[s],t[s-1]);break;case 53:i.addNote(t[s]);break;case 54:i.setDirection("TB");break;case 55:i.setDirection("BT");break;case 56:i.setDirection("RL");break;case 57:i.setDirection("LR");break;case 58:this.$={type1:t[s-2],type2:t[s],lineType:t[s-1]};break;case 59:this.$={type1:"none",type2:t[s],lineType:t[s-1]};break;case 60:this.$={type1:t[s-1],type2:"none",lineType:t[s]};break;case 61:this.$={type1:"none",type2:"none",lineType:t[s]};break;case 62:this.$=i.relationType.AGGREGATION;break;case 63:this.$=i.relationType.EXTENSION;break;case 64:this.$=i.relationType.COMPOSITION;break;case 65:this.$=i.relationType.DEPENDENCY;break;case 66:this.$=i.relationType.LOLLIPOP;break;case 67:this.$=i.lineType.LINE;break;case 68:this.$=i.lineType.DOTTED_LINE;break;case 69:case 75:this.$=t[s-2],i.setClickEvent(t[s-1],t[s]);break;case 70:case 76:this.$=t[s-3],i.setClickEvent(t[s-2],t[s-1]),i.setTooltip(t[s-2],t[s]);break;case 71:this.$=t[s-2],i.setLink(t[s-1],t[s]);break;case 72:this.$=t[s-3],i.setLink(t[s-2],t[s-1],t[s]);break;case 73:this.$=t[s-3],i.setLink(t[s-2],t[s-1]),i.setTooltip(t[s-2],t[s]);break;case 74:this.$=t[s-4],i.setLink(t[s-3],t[s-2],t[s]),i.setTooltip(t[s-3],t[s-1]);break;case 77:this.$=t[s-3],i.setClickEvent(t[s-2],t[s-1],t[s]);break;case 78:this.$=t[s-4],i.setClickEvent(t[s-3],t[s-2],t[s-1]),i.setTooltip(t[s-3],t[s]);break;case 79:this.$=t[s-3],i.setLink(t[s-2],t[s]);break;case 80:this.$=t[s-4],i.setLink(t[s-3],t[s-1],t[s]);break;case 81:this.$=t[s-4],i.setLink(t[s-3],t[s-1]),i.setTooltip(t[s-3],t[s]);break;case 82:this.$=t[s-5],i.setLink(t[s-4],t[s-2],t[s]),i.setTooltip(t[s-4],t[s-1]);break;case 83:i.setCssClass(t[s-1],t[s])}},table:[{3:1,4:2,5:3,6:4,7:[1,6],10:5,16:35,17:19,18:36,20:7,22:8,23:9,24:10,25:11,26:12,27:13,28:14,29:15,30:n,32:r,34:A,35:20,39:c,40:21,43:p,44:g,46:y,47:D,49:B,51:ce,52:le,53:oe,54:he,55:Ae,65:pe,66:fe,68:de,72:Ee,84:E,86:C,87:m,88:b,89:T},{1:[3]},{1:[2,1]},{1:[2,2]},{1:[2,3]},e(Ce,[2,5],{8:[1,44]}),{8:[1,45]},e(l,[2,16],{21:[1,46]}),e(l,[2,18]),e(l,[2,19]),e(l,[2,20]),e(l,[2,21]),e(l,[2,22]),e(l,[2,23]),e(l,[2,24]),e(l,[2,25]),{31:[1,47]},{33:[1,48]},e(l,[2,28]),e(l,[2,44],{48:49,56:52,57:53,13:[1,50],21:[1,51],58:j,59:Q,60:X,61:W,62:H,63:me,64:be}),{36:[1,61]},e(q,[2,35],{36:[1,63],41:[1,62]}),e(l,[2,46]),e(l,[2,47]),{16:64,84:E,86:C,87:m,88:b},{16:35,17:65,18:36,84:E,86:C,87:m,88:b,89:T},{16:35,17:66,18:36,84:E,86:C,87:m,88:b,89:T},{16:35,17:67,18:36,84:E,86:C,87:m,88:b,89:T},{13:[1,68]},{16:35,17:69,18:36,84:E,86:C,87:m,88:b,89:T},{13:Re,50:70},e(l,[2,54]),e(l,[2,55]),e(l,[2,56]),e(l,[2,57]),e(M,[2,11],{16:35,18:36,17:72,19:[1,73],84:E,86:C,87:m,88:b,89:T}),e(M,[2,12],{19:[1,74]}),{15:75,16:76,84:E,86:C,87:m,88:b},{16:35,17:77,18:36,84:E,86:C,87:m,88:b,89:T},e(J,[2,97]),e(J,[2,98]),e(J,[2,99]),e(J,[2,100]),e([1,8,9,12,13,19,21,36,38,41,58,59,60,61,62,63,64,69,71],[2,101]),e(Ce,[2,6],{10:5,20:7,22:8,23:9,24:10,25:11,26:12,27:13,28:14,29:15,17:19,35:20,40:21,16:35,18:36,5:78,30:n,32:r,34:A,39:c,43:p,44:g,46:y,47:D,49:B,51:ce,52:le,53:oe,54:he,55:Ae,65:pe,66:fe,68:de,72:Ee,84:E,86:C,87:m,88:b,89:T}),{5:79,10:5,16:35,17:19,18:36,20:7,22:8,23:9,24:10,25:11,26:12,27:13,28:14,29:15,30:n,32:r,34:A,35:20,39:c,40:21,43:p,44:g,46:y,47:D,49:B,51:ce,52:le,53:oe,54:he,55:Ae,65:pe,66:fe,68:de,72:Ee,84:E,86:C,87:m,88:b,89:T},e(l,[2,17]),e(l,[2,26]),e(l,[2,27]),{13:[1,81],16:35,17:80,18:36,84:E,86:C,87:m,88:b,89:T},{48:82,56:52,57:53,58:j,59:Q,60:X,61:W,62:H,63:me,64:be},e(l,[2,45]),{57:83,63:me,64:be},e(Z,[2,61],{56:84,58:j,59:Q,60:X,61:W,62:H}),e(G,[2,62]),e(G,[2,63]),e(G,[2,64]),e(G,[2,65]),e(G,[2,66]),e(we,[2,67]),e(we,[2,68]),{8:[1,86],23:87,37:85,40:21,43:p},{16:88,84:E,86:C,87:m,88:b},{42:89,46:ke},{45:[1,91]},{13:[1,92]},{13:[1,93]},{69:[1,94],71:[1,95]},{16:96,84:E,86:C,87:m,88:b},{13:Re,50:97},e(l,[2,53]),e(l,[2,102]),e(M,[2,13]),e(M,[2,14]),e(M,[2,15]),{36:[2,31]},{15:98,16:76,36:[2,9],84:E,86:C,87:m,88:b},e(ge,[2,39],{11:99,12:[1,100]}),e(Ce,[2,7]),{9:[1,101]},e($,[2,48]),{16:35,17:102,18:36,84:E,86:C,87:m,88:b,89:T},{13:[1,104],16:35,17:103,18:36,84:E,86:C,87:m,88:b,89:T},e(Z,[2,60],{56:105,58:j,59:Q,60:X,61:W,62:H}),e(Z,[2,59]),{38:[1,106]},{23:87,37:107,40:21,43:p},{8:[1,108],38:[2,32]},e(q,[2,36],{36:[1,109]}),{38:[1,110]},{38:[2,42],42:111,46:ke},{16:35,17:112,18:36,84:E,86:C,87:m,88:b,89:T},e(l,[2,69],{13:[1,113]}),e(l,[2,71],{13:[1,115],67:[1,114]}),e(l,[2,75],{13:[1,116],70:[1,117]}),{13:[1,118]},e(l,[2,83]),e(l,[2,52]),{36:[2,10]},e(ge,[2,40]),{13:[1,119]},{1:[2,4]},e($,[2,50]),e($,[2,49]),{16:35,17:120,18:36,84:E,86:C,87:m,88:b,89:T},e(Z,[2,58]),e(l,[2,29]),{38:[1,121]},{23:87,37:122,38:[2,33],40:21,43:p},{42:123,46:ke},e(q,[2,37]),{38:[2,43]},e(l,[2,41]),e(l,[2,70]),e(l,[2,72]),e(l,[2,73],{67:[1,124]}),e(l,[2,76]),e(l,[2,77],{13:[1,125]}),e(l,[2,79],{13:[1,127],67:[1,126]}),{14:[1,128]},e($,[2,51]),e(l,[2,30]),{38:[2,34]},{38:[1,129]},e(l,[2,74]),e(l,[2,78]),e(l,[2,80]),e(l,[2,81],{67:[1,130]}),e(ge,[2,8]),e(q,[2,38]),e(l,[2,82])],defaultActions:{2:[2,1],3:[2,2],4:[2,3],75:[2,31],98:[2,10],101:[2,4],111:[2,43],122:[2,34]},parseError:function(u,a){if(!a.recoverable){var o=new Error(u);throw o.hash=a,o}this.trace(u)},parse:function(u){var a=this,o=[0],i=[],d=[null],t=[],U=this.table,s="",ee=0,Pe=0,Et=2,Ve=1,Ct=t.slice.call(arguments,1),k=Object.create(this.lexer),I={yy:{}};for(var _e in this.yy)Object.prototype.hasOwnProperty.call(this.yy,_e)&&(I.yy[_e]=this.yy[_e]);k.setInput(u,I.yy),I.yy.lexer=k,I.yy.parser=this,void 0===k.yylloc&&(k.yylloc={});var ye=k.yylloc;t.push(ye);var mt=k.options&&k.options.ranges;function bt(){var N;return"number"!=typeof(N=i.pop()||k.lex()||Ve)&&(N instanceof Array&&(N=(i=N).pop()),N=a.symbols_[N]||N),N}this.parseError="function"==typeof I.yy.parseError?I.yy.parseError:Object.getPrototypeOf(this).parseError;for(var F,O,_,De,te,S,se,w={};;){if(this.defaultActions[O=o[o.length-1]]?_=this.defaultActions[O]:(null==F&&(F=bt()),_=U[O]&&U[O][F]),void 0===_||!_.length||!_[0]){var Be="";for(te in se=[],U[O])this.terminals_[te]&&te>Et&&se.push("'"+this.terminals_[te]+"'");Be=k.showPosition?"Parse error on line "+(ee+1)+":\n"+k.showPosition()+"\nExpecting "+se.join(", ")+", got '"+(this.terminals_[F]||F)+"'":"Parse error on line "+(ee+1)+": Unexpected "+(F==Ve?"end of input":"'"+(this.terminals_[F]||F)+"'"),this.parseError(Be,{text:k.match,token:this.terminals_[F]||F,line:k.yylineno,loc:ye,expected:se})}if(_[0]instanceof Array&&_.length>1)throw new Error("Parse Error: multiple actions possible at state: "+O+", token: "+F);switch(_[0]){case 1:o.push(F),d.push(k.yytext),t.push(k.yylloc),o.push(_[1]),F=null,Pe=k.yyleng,s=k.yytext,ee=k.yylineno,ye=k.yylloc;break;case 2:if(w.$=d[d.length-(S=this.productions_[_[1]][1])],w._$={first_line:t[t.length-(S||1)].first_line,last_line:t[t.length-1].last_line,first_column:t[t.length-(S||1)].first_column,last_column:t[t.length-1].last_column},mt&&(w._$.range=[t[t.length-(S||1)].range[0],t[t.length-1].range[1]]),void 0!==(De=this.performAction.apply(w,[s,Pe,ee,I.yy,_[1],d,t].concat(Ct))))return De;S&&(o=o.slice(0,-1*S*2),d=d.slice(0,-1*S),t=t.slice(0,-1*S)),o.push(this.productions_[_[1]][0]),d.push(w.$),t.push(w._$),o.push(U[o[o.length-2]][o[o.length-1]]);break;case 3:return!0}}return!0}};function Fe(){this.yy={}}return Te.lexer={EOF:1,parseError:function(a,o){if(!this.yy.parser)throw new Error(a);this.yy.parser.parseError(a,o)},setInput:function(u,a){return this.yy=a||this.yy||{},this._input=u,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var u=this._input[0];return this.yytext+=u,this.yyleng++,this.offset++,this.match+=u,this.matched+=u,u.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),u},unput:function(u){var a=u.length,o=u.split(/(?:\r\n?|\n)/g);this._input=u+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a),this.offset-=a;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),o.length-1&&(this.yylineno-=o.length-1);var d=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:o?(o.length===i.length?this.yylloc.first_column:0)+i[i.length-o.length].length-o[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[d[0],d[0]+this.yyleng-a]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(u){this.unput(this.match.slice(u))},pastInput:function(){var u=this.matched.substr(0,this.matched.length-this.match.length);return(u.length>20?"...":"")+u.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var u=this.match;return u.length<20&&(u+=this._input.substr(0,20-u.length)),(u.substr(0,20)+(u.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var u=this.pastInput(),a=new Array(u.length+1).join("-");return u+this.upcomingInput()+"\n"+a+"^"},test_match:function(u,a){var o,i,d;if(this.options.backtrack_lexer&&(d={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(d.yylloc.range=this.yylloc.range.slice(0))),(i=u[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+u[0].length},this.yytext+=u[0],this.match+=u[0],this.matches=u,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(u[0].length),this.matched+=u[0],o=this.performAction.call(this,this.yy,this,a,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),o)return o;if(this._backtrack){for(var t in d)this[t]=d[t];return!1}return!1},next:function(){if(this.done)return this.EOF;var u,a,o,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var d=this._currentRules(),t=0;t<d.length;t++)if((o=this._input.match(this.rules[d[t]]))&&(!a||o[0].length>a[0].length)){if(a=o,i=t,this.options.backtrack_lexer){if(!1!==(u=this.test_match(o,d[t])))return u;if(this._backtrack){a=!1;continue}return!1}if(!this.options.flex)break}return a?!1!==(u=this.test_match(a,d[i]))&&u:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(a){return(a=this.conditionStack.length-1-Math.abs(a||0))>=0?this.conditionStack[a]:"INITIAL"},pushState:function(a){this.begin(a)},stateStackSize:function(){return this.conditionStack.length},options:{},performAction:function(a,o,i,d){switch(i){case 0:return 52;case 1:return 53;case 2:return 54;case 3:return 55;case 4:case 5:case 14:case 29:case 34:case 38:case 45:break;case 6:return this.begin("acc_title"),30;case 7:return this.popState(),"acc_title_value";case 8:return this.begin("acc_descr"),32;case 9:return this.popState(),"acc_descr_value";case 10:this.begin("acc_descr_multiline");break;case 11:case 19:case 22:case 24:case 56:case 59:this.popState();break;case 12:return"acc_descr_multiline_value";case 13:case 33:return 8;case 15:case 16:return 7;case 17:case 35:case 43:return"EDGE_STATE";case 18:this.begin("callback_name");break;case 20:this.popState(),this.begin("callback_args");break;case 21:return 69;case 23:return 70;case 25:return"STR";case 26:this.begin("string");break;case 27:return this.begin("namespace"),39;case 28:case 37:return this.popState(),8;case 30:return this.begin("namespace-body"),36;case 31:case 41:return this.popState(),38;case 32:case 42:return"EOF_IN_STRUCT";case 36:return this.begin("class"),43;case 39:return this.popState(),this.popState(),38;case 40:return this.begin("class-body"),36;case 44:return"OPEN_IN_STRUCT";case 46:return"MEMBER";case 47:return 72;case 48:return 65;case 49:return 66;case 50:return 68;case 51:return 49;case 52:return 51;case 53:return 44;case 54:return 45;case 55:return 71;case 57:return"GENERICTYPE";case 58:this.begin("generic");break;case 60:return"BQUOTE_STR";case 61:this.begin("bqstring");break;case 62:case 63:case 64:case 65:return 67;case 66:case 67:return 59;case 68:case 69:return 61;case 70:return 60;case 71:return 58;case 72:return 62;case 73:return 63;case 74:return 64;case 75:return 21;case 76:return 41;case 77:return 84;case 78:return"DOT";case 79:return"PLUS";case 80:return 81;case 81:case 82:return"EQUALS";case 83:return 88;case 84:return 12;case 85:return 14;case 86:return"PUNCTUATION";case 87:return 87;case 88:return 86;case 89:return 83;case 90:return 9}},rules:[/^(?:.*direction\s+TB[^\n]*)/,/^(?:.*direction\s+BT[^\n]*)/,/^(?:.*direction\s+RL[^\n]*)/,/^(?:.*direction\s+LR[^\n]*)/,/^(?:%%(?!\{)*[^\n]*(\r?\n?)+)/,/^(?:%%[^\n]*(\r?\n)*)/,/^(?:accTitle\s*:\s*)/,/^(?:(?!\n||)*[^\n]*)/,/^(?:accDescr\s*:\s*)/,/^(?:(?!\n||)*[^\n]*)/,/^(?:accDescr\s*\{\s*)/,/^(?:[\}])/,/^(?:[^\}]*)/,/^(?:\s*(\r?\n)+)/,/^(?:\s+)/,/^(?:classDiagram-v2\b)/,/^(?:classDiagram\b)/,/^(?:\[\*\])/,/^(?:call[\s]+)/,/^(?:\([\s]*\))/,/^(?:\()/,/^(?:[^(]*)/,/^(?:\))/,/^(?:[^)]*)/,/^(?:["])/,/^(?:[^"]*)/,/^(?:["])/,/^(?:namespace\b)/,/^(?:\s*(\r?\n)+)/,/^(?:\s+)/,/^(?:[{])/,/^(?:[}])/,/^(?:$)/,/^(?:\s*(\r?\n)+)/,/^(?:\s+)/,/^(?:\[\*\])/,/^(?:class\b)/,/^(?:\s*(\r?\n)+)/,/^(?:\s+)/,/^(?:[}])/,/^(?:[{])/,/^(?:[}])/,/^(?:$)/,/^(?:\[\*\])/,/^(?:[{])/,/^(?:[\n])/,/^(?:[^{}\n]*)/,/^(?:cssClass\b)/,/^(?:callback\b)/,/^(?:link\b)/,/^(?:click\b)/,/^(?:note for\b)/,/^(?:note\b)/,/^(?:<<)/,/^(?:>>)/,/^(?:href\b)/,/^(?:[~])/,/^(?:[^~]*)/,/^(?:~)/,/^(?:[`])/,/^(?:[^`]+)/,/^(?:[`])/,/^(?:_self\b)/,/^(?:_blank\b)/,/^(?:_parent\b)/,/^(?:_top\b)/,/^(?:\s*<\|)/,/^(?:\s*\|>)/,/^(?:\s*>)/,/^(?:\s*<)/,/^(?:\s*\*)/,/^(?:\s*o\b)/,/^(?:\s*\(\))/,/^(?:--)/,/^(?:\.\.)/,/^(?::{1}[^:\n;]+)/,/^(?::{3})/,/^(?:-)/,/^(?:\.)/,/^(?:\+)/,/^(?:%)/,/^(?:=)/,/^(?:=)/,/^(?:\w+)/,/^(?:\[)/,/^(?:\])/,/^(?:[!"#$%&'*+,-.`?\\/])/,/^(?:[0-9]+)/,/^(?:[\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6]|[\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377]|[\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5]|[\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA]|[\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE]|[\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA]|[\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0]|[\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977]|[\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2]|[\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A]|[\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39]|[\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8]|[\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C]|[\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C]|[\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99]|[\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0]|[\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D]|[\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3]|[\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10]|[\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1]|[\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81]|[\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3]|[\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6]|[\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A]|[\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081]|[\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D]|[\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0]|[\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310]|[\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C]|[\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711]|[\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7]|[\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C]|[\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16]|[\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF]|[\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC]|[\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D]|[\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D]|[\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3]|[\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F]|[\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128]|[\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184]|[\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3]|[\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6]|[\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE]|[\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C]|[\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D]|[\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC]|[\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B]|[\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788]|[\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805]|[\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB]|[\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28]|[\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5]|[\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4]|[\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|[\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D]|[\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36]|[\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D]|[\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC]|[\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF]|[\uFFD2-\uFFD7\uFFDA-\uFFDC])/,/^(?:\s)/,/^(?:$)/],conditions:{"namespace-body":{rules:[26,31,32,33,34,35,36,47,48,49,50,51,52,53,54,55,58,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90],inclusive:!1},namespace:{rules:[26,27,28,29,30,47,48,49,50,51,52,53,54,55,58,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90],inclusive:!1},"class-body":{rules:[26,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,58,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90],inclusive:!1},class:{rules:[26,37,38,39,40,47,48,49,50,51,52,53,54,55,58,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90],inclusive:!1},acc_descr_multiline:{rules:[11,12,26,47,48,49,50,51,52,53,54,55,58,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90],inclusive:!1},acc_descr:{rules:[9,26,47,48,49,50,51,52,53,54,55,58,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90],inclusive:!1},acc_title:{rules:[7,26,47,48,49,50,51,52,53,54,55,58,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90],inclusive:!1},callback_args:{rules:[22,23,26,47,48,49,50,51,52,53,54,55,58,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90],inclusive:!1},callback_name:{rules:[19,20,21,26,47,48,49,50,51,52,53,54,55,58,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90],inclusive:!1},href:{rules:[26,47,48,49,50,51,52,53,54,55,58,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90],inclusive:!1},struct:{rules:[26,47,48,49,50,51,52,53,54,55,58,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90],inclusive:!1},generic:{rules:[26,47,48,49,50,51,52,53,54,55,56,57,58,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90],inclusive:!1},bqstring:{rules:[26,47,48,49,50,51,52,53,54,55,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90],inclusive:!1},string:{rules:[24,25,26,47,48,49,50,51,52,53,54,55,58,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,8,10,13,14,15,16,17,18,26,27,36,47,48,49,50,51,52,53,54,55,58,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90],inclusive:!0}}},Fe.prototype=Te,Te.Parser=Fe,new Fe}();ne.parser=ne;const Ue=ne,Se=["#","+","~","-",""];class Ne{constructor(n,r){this.memberType=r,this.visibility="",this.classifier="";const A=(0,h.d)(n,(0,h.c)());this.parseMember(A)}getDisplayDetails(){let n=this.visibility+(0,h.v)(this.id);return"method"===this.memberType&&(n+=`(${(0,h.v)(this.parameters.trim())})`,this.returnType&&(n+=" : "+(0,h.v)(this.returnType))),n=n.trim(),{displayText:n,cssStyle:this.parseClassifier()}}parseMember(n){let r="";if("method"===this.memberType){const c=n.match(/([#+~-])?(.+)\((.*)\)([\s$*])?(.*)([$*])?/);if(c){const p=c[1]?c[1].trim():"";if(Se.includes(p)&&(this.visibility=p),this.id=c[2].trim(),this.parameters=c[3]?c[3].trim():"",r=c[4]?c[4].trim():"",this.returnType=c[5]?c[5].trim():"",""===r){const g=this.returnType.substring(this.returnType.length-1);g.match(/[$*]/)&&(r=g,this.returnType=this.returnType.substring(0,this.returnType.length-1))}}}else{const A=n.length,c=n.substring(0,1),p=n.substring(A-1);Se.includes(c)&&(this.visibility=c),p.match(/[*?]/)&&(r=p),this.id=n.substring(""===this.visibility?0:1,""===r?A:A-1)}this.classifier=r}parseClassifier(){switch(this.classifier){case"*":return"font-style:italic;";case"$":return"text-decoration:underline;";default:return""}}}const z="classId-";let ue=[],f={},Y=[],ve=0,v={},re=0,V=[];const x=e=>h.e.sanitizeText(e,(0,h.c)()),R=function(e){const n=h.e.sanitizeText(e,(0,h.c)());let r="",A=n;if(n.indexOf("~")>0){const c=n.split("~");A=x(c[0]),r=x(c[1])}return{className:A,type:r}},K=function(e){const n=h.e.sanitizeText(e,(0,h.c)()),{className:r,type:A}=R(n);if(Object.hasOwn(f,r))return;const c=h.e.sanitizeText(r,(0,h.c)());f[c]={id:c,type:A,label:c,cssClasses:[],methods:[],members:[],annotations:[],domId:z+c+"-"+ve},ve++},Le=function(e){const n=h.e.sanitizeText(e,(0,h.c)());if(n in f)return f[n].domId;throw new Error("Class not found: "+n)},xe=function(e,n){K(e);const r=R(e).className,A=f[r];if("string"==typeof n){const c=n.trim();c.startsWith("<<")&&c.endsWith(">>")?A.annotations.push(x(c.substring(2,c.length-2))):c.indexOf(")")>0?A.methods.push(new Ne(c,"method")):c&&A.members.push(new Ne(c,"attribute"))}},ae=function(e,n){e.split(",").forEach(function(r){let A=r;r[0].match(/\d/)&&(A=z+A),void 0!==f[A]&&f[A].cssClasses.push(n)})},Ie=function(e){let n=(0,P.Ys)(".mermaidTooltip");null===(n._groups||n)[0][0]&&(n=(0,P.Ys)("body").append("div").attr("class","mermaidTooltip").style("opacity",0)),(0,P.Ys)(e).select("svg").selectAll("g.node").on("mouseover",function(){const c=(0,P.Ys)(this);if(null===c.attr("title"))return;const g=this.getBoundingClientRect();n.transition().duration(200).style("opacity",".9"),n.text(c.attr("title")).style("left",window.scrollX+g.left+(g.right-g.left)/2+"px").style("top",window.scrollY+g.top-14+document.body.scrollTop+"px"),n.html(n.html().replace(/&lt;br\/&gt;/g,"<br/>")),c.classed("hover",!0)}).on("mouseout",function(){n.transition().duration(500).style("opacity",0),(0,P.Ys)(this).classed("hover",!1)})};V.push(Ie);let Oe="TB";const pt={setAccTitle:h.s,getAccTitle:h.g,getAccDescription:h.a,setAccDescription:h.b,getConfig:()=>(0,h.c)().class,addClass:K,bindFunctions:function(e){V.forEach(function(n){n(e)})},clear:function(){ue=[],f={},Y=[],V=[],V.push(Ie),v={},re=0,(0,h.t)()},getClass:function(e){return f[e]},getClasses:function(){return f},getNotes:function(){return Y},addAnnotation:function(e,n){const r=R(e).className;f[r].annotations.push(n)},addNote:function(e,n){Y.push({id:`note${Y.length}`,class:n,text:e})},getRelations:function(){return ue},addRelation:function(e){h.l.debug("Adding relation: "+JSON.stringify(e)),K(e.id1),K(e.id2),e.id1=R(e.id1).className,e.id2=R(e.id2).className,e.relationTitle1=h.e.sanitizeText(e.relationTitle1.trim(),(0,h.c)()),e.relationTitle2=h.e.sanitizeText(e.relationTitle2.trim(),(0,h.c)()),ue.push(e)},getDirection:()=>Oe,setDirection:e=>{Oe=e},addMember:xe,addMembers:function(e,n){Array.isArray(n)&&(n.reverse(),n.forEach(r=>xe(e,r)))},cleanupLabel:function(e){return e.startsWith(":")&&(e=e.substring(1)),x(e.trim())},lineType:{LINE:0,DOTTED_LINE:1},relationType:{AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3,LOLLIPOP:4},setClickEvent:function(e,n,r){e.split(",").forEach(function(A){(function(e,n,r){const A=h.e.sanitizeText(e,(0,h.c)());if("loose"===(0,h.c)().securityLevel&&void 0!==n&&void 0!==f[A]){const g=Le(A);let y=[];if("string"==typeof r){y=r.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let D=0;D<y.length;D++){let B=y[D].trim();'"'===B.charAt(0)&&'"'===B.charAt(B.length-1)&&(B=B.substr(1,B.length-2)),y[D]=B}}0===y.length&&y.push(g),V.push(function(){const D=document.querySelector(`[id="${g}"]`);null!==D&&D.addEventListener("click",function(){h.u.runFunc(n,...y)},!1)})}})(A,n,r),f[A].haveCallback=!0}),ae(e,"clickable")},setCssClass:ae,setLink:function(e,n,r){const A=(0,h.c)();e.split(",").forEach(function(c){let p=c;c[0].match(/\d/)&&(p=z+p),void 0!==f[p]&&(f[p].link=h.u.formatUrl(n,A),f[p].linkTarget="sandbox"===A.securityLevel?"_top":"string"==typeof r?x(r):"_blank")}),ae(e,"clickable")},getTooltip:function(e,n){return n?v[n].classes[e].tooltip:f[e].tooltip},setTooltip:function(e,n){e.split(",").forEach(function(r){void 0!==n&&(f[r].tooltip=x(n))})},lookUpDomId:Le,setDiagramTitle:h.q,getDiagramTitle:h.r,setClassLabel:function(e,n){const r=h.e.sanitizeText(e,(0,h.c)());n&&(n=x(n));const{className:A}=R(r);f[A].label=n},addNamespace:function(e){void 0===v[e]&&(v[e]={id:e,classes:{},children:{},domId:z+e+"-"+re},re++)},addClassesToNamespace:function(e,n){void 0!==v[e]&&n.map(r=>{f[r].parent=e,v[e].classes[r]=f[r]})},getNamespace:function(e){return v[e]},getNamespaces:function(){return v}},ft=e=>`g.classGroup text {\n  fill: ${e.nodeBorder||e.classText};\n  stroke: none;\n  font-family: ${e.fontFamily};\n  font-size: 10px;\n\n  .title {\n    font-weight: bolder;\n  }\n\n}\n\n.nodeLabel, .edgeLabel {\n  color: ${e.classText};\n}\n.edgeLabel .label rect {\n  fill: ${e.mainBkg};\n}\n.label text {\n  fill: ${e.classText};\n}\n.edgeLabel .label span {\n  background: ${e.mainBkg};\n}\n\n.classTitle {\n  font-weight: bolder;\n}\n.node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${e.mainBkg};\n    stroke: ${e.nodeBorder};\n    stroke-width: 1px;\n  }\n\n\n.divider {\n  stroke: ${e.nodeBorder};\n  stroke-width: 1;\n}\n\ng.clickable {\n  cursor: pointer;\n}\n\ng.classGroup rect {\n  fill: ${e.mainBkg};\n  stroke: ${e.nodeBorder};\n}\n\ng.classGroup line {\n  stroke: ${e.nodeBorder};\n  stroke-width: 1;\n}\n\n.classLabel .box {\n  stroke: none;\n  stroke-width: 0;\n  fill: ${e.mainBkg};\n  opacity: 0.5;\n}\n\n.classLabel .label {\n  fill: ${e.nodeBorder};\n  font-size: 10px;\n}\n\n.relation {\n  stroke: ${e.lineColor};\n  stroke-width: 1;\n  fill: none;\n}\n\n.dashed-line{\n  stroke-dasharray: 3;\n}\n\n.dotted-line{\n  stroke-dasharray: 1 2;\n}\n\n#compositionStart, .composition {\n  fill: ${e.lineColor} !important;\n  stroke: ${e.lineColor} !important;\n  stroke-width: 1;\n}\n\n#compositionEnd, .composition {\n  fill: ${e.lineColor} !important;\n  stroke: ${e.lineColor} !important;\n  stroke-width: 1;\n}\n\n#dependencyStart, .dependency {\n  fill: ${e.lineColor} !important;\n  stroke: ${e.lineColor} !important;\n  stroke-width: 1;\n}\n\n#dependencyStart, .dependency {\n  fill: ${e.lineColor} !important;\n  stroke: ${e.lineColor} !important;\n  stroke-width: 1;\n}\n\n#extensionStart, .extension {\n  fill: transparent !important;\n  stroke: ${e.lineColor} !important;\n  stroke-width: 1;\n}\n\n#extensionEnd, .extension {\n  fill: transparent !important;\n  stroke: ${e.lineColor} !important;\n  stroke-width: 1;\n}\n\n#aggregationStart, .aggregation {\n  fill: transparent !important;\n  stroke: ${e.lineColor} !important;\n  stroke-width: 1;\n}\n\n#aggregationEnd, .aggregation {\n  fill: transparent !important;\n  stroke: ${e.lineColor} !important;\n  stroke-width: 1;\n}\n\n#lollipopStart, .lollipop {\n  fill: ${e.mainBkg} !important;\n  stroke: ${e.lineColor} !important;\n  stroke-width: 1;\n}\n\n#lollipopEnd, .lollipop {\n  fill: ${e.mainBkg} !important;\n  stroke: ${e.lineColor} !important;\n  stroke-width: 1;\n}\n\n.edgeTerminals {\n  font-size: 11px;\n}\n\n.classTitleText {\n  text-anchor: middle;\n  font-size: 18px;\n  fill: ${e.textColor};\n}\n`}}]);