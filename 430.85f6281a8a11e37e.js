"use strict";(self.webpackChunkang2_mohitkanwar=self.webpackChunkang2_mohitkanwar||[]).push([[430],{7143:(Ot,yt,Z)=>{Z.r(yt),Z.d(yt,{diagram:()=>wt});var d=Z(8190),it=Z(8586),ct=(Z(1764),Z(6780),Z(2735),function(){var e=function($,n,r,l){for(r=r||{},l=$.length;l--;r[$[l]]=n);return r},s=[1,3],h=[1,4],f=[1,5],g=[1,6],u=[1,7],c=[1,5,13,15,17,19,20,25,27,28,29,30,31,32,33,34,37,38,40,41,42,43,44,45,46,47,48,49,50],p=[1,5,6,13,15,17,19,20,25,27,28,29,30,31,32,33,34,37,38,40,41,42,43,44,45,46,47,48,49,50],i=[32,33,34],q=[2,7],y=[1,13],R=[1,17],U=[1,18],W=[1,19],I=[1,20],b=[1,21],Q=[1,22],H=[1,23],E=[1,24],nt=[1,25],st=[1,26],rt=[1,27],M=[1,30],N=[1,31],T=[1,32],m=[1,33],A=[1,34],t=[1,35],S=[1,36],k=[1,37],P=[1,38],F=[1,39],v=[1,40],L=[1,41],C=[1,42],Y=[1,57],j=[1,58],D=[5,22,26,32,33,34,40,41,42,43,44,45,46,47,48,49,50,51],dt={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,SPACE:5,QUADRANT:6,document:7,line:8,statement:9,axisDetails:10,quadrantDetails:11,points:12,title:13,title_value:14,acc_title:15,acc_title_value:16,acc_descr:17,acc_descr_value:18,acc_descr_multiline_value:19,section:20,text:21,point_start:22,point_x:23,point_y:24,"X-AXIS":25,"AXIS-TEXT-DELIMITER":26,"Y-AXIS":27,QUADRANT_1:28,QUADRANT_2:29,QUADRANT_3:30,QUADRANT_4:31,NEWLINE:32,SEMI:33,EOF:34,alphaNumToken:35,textNoTagsToken:36,STR:37,MD_STR:38,alphaNum:39,PUNCTUATION:40,AMP:41,NUM:42,ALPHA:43,COMMA:44,PLUS:45,EQUALS:46,MULT:47,DOT:48,BRKT:49,UNDERSCORE:50,MINUS:51,$accept:0,$end:1},terminals_:{2:"error",5:"SPACE",6:"QUADRANT",13:"title",14:"title_value",15:"acc_title",16:"acc_title_value",17:"acc_descr",18:"acc_descr_value",19:"acc_descr_multiline_value",20:"section",22:"point_start",23:"point_x",24:"point_y",25:"X-AXIS",26:"AXIS-TEXT-DELIMITER",27:"Y-AXIS",28:"QUADRANT_1",29:"QUADRANT_2",30:"QUADRANT_3",31:"QUADRANT_4",32:"NEWLINE",33:"SEMI",34:"EOF",37:"STR",38:"MD_STR",40:"PUNCTUATION",41:"AMP",42:"NUM",43:"ALPHA",44:"COMMA",45:"PLUS",46:"EQUALS",47:"MULT",48:"DOT",49:"BRKT",50:"UNDERSCORE",51:"MINUS"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[9,0],[9,2],[9,1],[9,1],[9,1],[9,2],[9,2],[9,2],[9,1],[9,1],[12,4],[10,4],[10,3],[10,2],[10,4],[10,3],[10,2],[11,2],[11,2],[11,2],[11,2],[4,1],[4,1],[4,1],[21,1],[21,2],[21,1],[21,1],[39,1],[39,2],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[36,1],[36,1],[36,1]],performAction:function(n,r,l,o,_,a,at){var x=a.length-1;switch(_){case 12:this.$=a[x].trim(),o.setDiagramTitle(this.$);break;case 13:this.$=a[x].trim(),o.setAccTitle(this.$);break;case 14:case 15:this.$=a[x].trim(),o.setAccDescription(this.$);break;case 16:o.addSection(a[x].substr(8)),this.$=a[x].substr(8);break;case 17:o.addPoint(a[x-3],a[x-1],a[x]);break;case 18:o.setXAxisLeftText(a[x-2]),o.setXAxisRightText(a[x]);break;case 19:a[x-1].text+=" \u27f6 ",o.setXAxisLeftText(a[x-1]);break;case 20:o.setXAxisLeftText(a[x]);break;case 21:o.setYAxisBottomText(a[x-2]),o.setYAxisTopText(a[x]);break;case 22:a[x-1].text+=" \u27f6 ",o.setYAxisBottomText(a[x-1]);break;case 23:o.setYAxisBottomText(a[x]);break;case 24:o.setQuadrant1Text(a[x]);break;case 25:o.setQuadrant2Text(a[x]);break;case 26:o.setQuadrant3Text(a[x]);break;case 27:o.setQuadrant4Text(a[x]);break;case 31:case 33:this.$={text:a[x],type:"text"};break;case 32:this.$={text:a[x-1].text+""+a[x],type:a[x-1].type};break;case 34:this.$={text:a[x],type:"markdown"};break;case 35:this.$=a[x];break;case 36:this.$=a[x-1]+""+a[x]}},table:[{3:1,4:2,5:s,6:h,32:f,33:g,34:u},{1:[3]},{3:8,4:2,5:s,6:h,32:f,33:g,34:u},{3:9,4:2,5:s,6:h,32:f,33:g,34:u},e(c,[2,4],{7:10}),e(p,[2,28]),e(p,[2,29]),e(p,[2,30]),{1:[2,1]},{1:[2,2]},e(i,q,{8:11,9:12,10:14,11:15,12:16,21:28,35:29,1:[2,3],5:y,13:R,15:U,17:W,19:I,20:b,25:Q,27:H,28:E,29:nt,30:st,31:rt,37:M,38:N,40:T,41:m,42:A,43:t,44:S,45:k,46:P,47:F,48:v,49:L,50:C}),e(c,[2,5]),{4:43,32:f,33:g,34:u},e(i,q,{10:14,11:15,12:16,21:28,35:29,9:44,5:y,13:R,15:U,17:W,19:I,20:b,25:Q,27:H,28:E,29:nt,30:st,31:rt,37:M,38:N,40:T,41:m,42:A,43:t,44:S,45:k,46:P,47:F,48:v,49:L,50:C}),e(i,[2,9]),e(i,[2,10]),e(i,[2,11]),{14:[1,45]},{16:[1,46]},{18:[1,47]},e(i,[2,15]),e(i,[2,16]),{21:48,35:29,37:M,38:N,40:T,41:m,42:A,43:t,44:S,45:k,46:P,47:F,48:v,49:L,50:C},{21:49,35:29,37:M,38:N,40:T,41:m,42:A,43:t,44:S,45:k,46:P,47:F,48:v,49:L,50:C},{21:50,35:29,37:M,38:N,40:T,41:m,42:A,43:t,44:S,45:k,46:P,47:F,48:v,49:L,50:C},{21:51,35:29,37:M,38:N,40:T,41:m,42:A,43:t,44:S,45:k,46:P,47:F,48:v,49:L,50:C},{21:52,35:29,37:M,38:N,40:T,41:m,42:A,43:t,44:S,45:k,46:P,47:F,48:v,49:L,50:C},{21:53,35:29,37:M,38:N,40:T,41:m,42:A,43:t,44:S,45:k,46:P,47:F,48:v,49:L,50:C},{5:Y,22:[1,54],35:56,36:55,40:T,41:m,42:A,43:t,44:S,45:k,46:P,47:F,48:v,49:L,50:C,51:j},e(D,[2,31]),e(D,[2,33]),e(D,[2,34]),e(D,[2,37]),e(D,[2,38]),e(D,[2,39]),e(D,[2,40]),e(D,[2,41]),e(D,[2,42]),e(D,[2,43]),e(D,[2,44]),e(D,[2,45]),e(D,[2,46]),e(D,[2,47]),e(c,[2,6]),e(i,[2,8]),e(i,[2,12]),e(i,[2,13]),e(i,[2,14]),e(i,[2,20],{36:55,35:56,5:Y,26:[1,59],40:T,41:m,42:A,43:t,44:S,45:k,46:P,47:F,48:v,49:L,50:C,51:j}),e(i,[2,23],{36:55,35:56,5:Y,26:[1,60],40:T,41:m,42:A,43:t,44:S,45:k,46:P,47:F,48:v,49:L,50:C,51:j}),e(i,[2,24],{36:55,35:56,5:Y,40:T,41:m,42:A,43:t,44:S,45:k,46:P,47:F,48:v,49:L,50:C,51:j}),e(i,[2,25],{36:55,35:56,5:Y,40:T,41:m,42:A,43:t,44:S,45:k,46:P,47:F,48:v,49:L,50:C,51:j}),e(i,[2,26],{36:55,35:56,5:Y,40:T,41:m,42:A,43:t,44:S,45:k,46:P,47:F,48:v,49:L,50:C,51:j}),e(i,[2,27],{36:55,35:56,5:Y,40:T,41:m,42:A,43:t,44:S,45:k,46:P,47:F,48:v,49:L,50:C,51:j}),{23:[1,61]},e(D,[2,32]),e(D,[2,48]),e(D,[2,49]),e(D,[2,50]),e(i,[2,19],{35:29,21:62,37:M,38:N,40:T,41:m,42:A,43:t,44:S,45:k,46:P,47:F,48:v,49:L,50:C}),e(i,[2,22],{35:29,21:63,37:M,38:N,40:T,41:m,42:A,43:t,44:S,45:k,46:P,47:F,48:v,49:L,50:C}),{24:[1,64]},e(i,[2,18],{36:55,35:56,5:Y,40:T,41:m,42:A,43:t,44:S,45:k,46:P,47:F,48:v,49:L,50:C,51:j}),e(i,[2,21],{36:55,35:56,5:Y,40:T,41:m,42:A,43:t,44:S,45:k,46:P,47:F,48:v,49:L,50:C,51:j}),e(i,[2,17])],defaultActions:{8:[2,1],9:[2,2]},parseError:function(n,r){if(!r.recoverable){var l=new Error(n);throw l.hash=r,l}this.trace(n)},parse:function(n){var r=this,l=[0],o=[],_=[null],a=[],at=this.table,x="",lt=0,qt=0,Vt=2,_t=1,Ut=a.slice.call(arguments,1),z=Object.create(this.lexer),J={yy:{}};for(var xt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,xt)&&(J.yy[xt]=this.yy[xt]);z.setInput(n,J.yy),J.yy.lexer=z,J.yy.parser=this,typeof z.yylloc>"u"&&(z.yylloc={});var ft=z.yylloc;a.push(ft);var Mt=z.options&&z.options.ranges;function Nt(){var G;return"number"!=typeof(G=o.pop()||z.lex()||_t)&&(G instanceof Array&&(G=(o=G).pop()),G=r.symbols_[G]||G),G}this.parseError="function"==typeof J.yy.parseError?J.yy.parseError:Object.getPrototypeOf(this).parseError;for(var V,tt,O,gt,ot,K,ht,et={};;){if(this.defaultActions[tt=l[l.length-1]]?O=this.defaultActions[tt]:((null===V||typeof V>"u")&&(V=Nt()),O=at[tt]&&at[tt][V]),typeof O>"u"||!O.length||!O[0]){var pt="";for(ot in ht=[],at[tt])this.terminals_[ot]&&ot>Vt&&ht.push("'"+this.terminals_[ot]+"'");pt=z.showPosition?"Parse error on line "+(lt+1)+":\n"+z.showPosition()+"\nExpecting "+ht.join(", ")+", got '"+(this.terminals_[V]||V)+"'":"Parse error on line "+(lt+1)+": Unexpected "+(V==_t?"end of input":"'"+(this.terminals_[V]||V)+"'"),this.parseError(pt,{text:z.match,token:this.terminals_[V]||V,line:z.yylineno,loc:ft,expected:ht})}if(O[0]instanceof Array&&O.length>1)throw new Error("Parse Error: multiple actions possible at state: "+tt+", token: "+V);switch(O[0]){case 1:l.push(V),_.push(z.yytext),a.push(z.yylloc),l.push(O[1]),V=null,qt=z.yyleng,x=z.yytext,lt=z.yylineno,ft=z.yylloc;break;case 2:if(et.$=_[_.length-(K=this.productions_[O[1]][1])],et._$={first_line:a[a.length-(K||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(K||1)].first_column,last_column:a[a.length-1].last_column},Mt&&(et._$.range=[a[a.length-(K||1)].range[0],a[a.length-1].range[1]]),typeof(gt=this.performAction.apply(et,[x,qt,lt,J.yy,O[1],_,a].concat(Ut)))<"u")return gt;K&&(l=l.slice(0,-1*K*2),_=_.slice(0,-1*K),a=a.slice(0,-1*K)),l.push(this.productions_[O[1]][0]),_.push(et.$),a.push(et._$),l.push(at[l[l.length-2]][l[l.length-1]]);break;case 3:return!0}}return!0}};function ut(){this.yy={}}return dt.lexer={EOF:1,parseError:function(r,l){if(!this.yy.parser)throw new Error(r);this.yy.parser.parseError(r,l)},setInput:function(n,r){return this.yy=r||this.yy||{},this._input=n,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var n=this._input[0];return this.yytext+=n,this.yyleng++,this.offset++,this.match+=n,this.matched+=n,n.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),n},unput:function(n){var r=n.length,l=n.split(/(?:\r\n?|\n)/g);this._input=n+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-r),this.offset-=r;var o=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),l.length-1&&(this.yylineno-=l.length-1);var _=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:l?(l.length===o.length?this.yylloc.first_column:0)+o[o.length-l.length].length-l[0].length:this.yylloc.first_column-r},this.options.ranges&&(this.yylloc.range=[_[0],_[0]+this.yyleng-r]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(n){this.unput(this.match.slice(n))},pastInput:function(){var n=this.matched.substr(0,this.matched.length-this.match.length);return(n.length>20?"...":"")+n.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var n=this.match;return n.length<20&&(n+=this._input.substr(0,20-n.length)),(n.substr(0,20)+(n.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var n=this.pastInput(),r=new Array(n.length+1).join("-");return n+this.upcomingInput()+"\n"+r+"^"},test_match:function(n,r){var l,o,_;if(this.options.backtrack_lexer&&(_={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(_.yylloc.range=this.yylloc.range.slice(0))),(o=n[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=o.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:o?o[o.length-1].length-o[o.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+n[0].length},this.yytext+=n[0],this.match+=n[0],this.matches=n,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(n[0].length),this.matched+=n[0],l=this.performAction.call(this,this.yy,this,r,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),l)return l;if(this._backtrack){for(var a in _)this[a]=_[a];return!1}return!1},next:function(){if(this.done)return this.EOF;var n,r,l,o;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var _=this._currentRules(),a=0;a<_.length;a++)if((l=this._input.match(this.rules[_[a]]))&&(!r||l[0].length>r[0].length)){if(r=l,o=a,this.options.backtrack_lexer){if(!1!==(n=this.test_match(l,_[a])))return n;if(this._backtrack){r=!1;continue}return!1}if(!this.options.flex)break}return r?!1!==(n=this.test_match(r,_[o]))&&n:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(r){this.conditionStack.push(r)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(r){return(r=this.conditionStack.length-1-Math.abs(r||0))>=0?this.conditionStack[r]:"INITIAL"},pushState:function(r){this.begin(r)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(r,l,o,_){switch(o){case 0:case 1:case 3:break;case 2:return 32;case 4:return this.begin("title"),13;case 5:return this.popState(),"title_value";case 6:return this.begin("acc_title"),15;case 7:return this.popState(),"acc_title_value";case 8:return this.begin("acc_descr"),17;case 9:return this.popState(),"acc_descr_value";case 10:this.begin("acc_descr_multiline");break;case 11:case 22:case 24:case 28:this.popState();break;case 12:return"acc_descr_multiline_value";case 13:return 25;case 14:return 27;case 15:return 26;case 16:return 28;case 17:return 29;case 18:return 30;case 19:return 31;case 20:this.begin("md_string");break;case 21:return"MD_STR";case 23:this.begin("string");break;case 25:return"STR";case 26:return this.begin("point_start"),22;case 27:return this.begin("point_x"),23;case 29:this.popState(),this.begin("point_y");break;case 30:return this.popState(),24;case 31:return 6;case 32:return 43;case 33:return"COLON";case 34:return 45;case 35:return 44;case 36:case 37:return 46;case 38:return 47;case 39:return 49;case 40:return 50;case 41:return 48;case 42:return 41;case 43:return 51;case 44:return 42;case 45:return 5;case 46:return 33;case 47:return 40;case 48:return 34}},rules:[/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:title\b)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?: *x-axis *)/i,/^(?: *y-axis *)/i,/^(?: *--+> *)/i,/^(?: *quadrant-1 *)/i,/^(?: *quadrant-2 *)/i,/^(?: *quadrant-3 *)/i,/^(?: *quadrant-4 *)/i,/^(?:["][`])/i,/^(?:[^`"]+)/i,/^(?:[`]["])/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:\s*:\s*\[\s*)/i,/^(?:(1)|(0(.\d+)?))/i,/^(?:\s*\] *)/i,/^(?:\s*,\s*)/i,/^(?:(1)|(0(.\d+)?))/i,/^(?: *quadrantChart *)/i,/^(?:[A-Za-z]+)/i,/^(?::)/i,/^(?:\+)/i,/^(?:,)/i,/^(?:=)/i,/^(?:=)/i,/^(?:\*)/i,/^(?:#)/i,/^(?:[\_])/i,/^(?:\.)/i,/^(?:&)/i,/^(?:-)/i,/^(?:[0-9]+)/i,/^(?:\s)/i,/^(?:;)/i,/^(?:[!"#$%&'*+,-.`?\\_/])/i,/^(?:$)/i],conditions:{point_y:{rules:[30],inclusive:!1},point_x:{rules:[29],inclusive:!1},point_start:{rules:[27,28],inclusive:!1},acc_descr_multiline:{rules:[11,12],inclusive:!1},acc_descr:{rules:[9],inclusive:!1},acc_title:{rules:[7],inclusive:!1},title:{rules:[5],inclusive:!1},md_string:{rules:[21,22],inclusive:!1},string:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,6,8,10,13,14,15,16,17,18,19,20,23,26,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],inclusive:!0}}},ut.prototype=dt,dt.Parser=ut,new ut}());ct.parser=ct;const At=ct,w=(0,d.D)(),bt=(0,d.c)();function X(e){return(0,d.d)(e.trim(),bt)}const B=new class mt{constructor(){this.config=this.getDefaultConfig(),this.themeConfig=this.getDefaultThemeConfig(),this.data=this.getDefaultData()}getDefaultData(){return{titleText:"",quadrant1Text:"",quadrant2Text:"",quadrant3Text:"",quadrant4Text:"",xAxisLeftText:"",xAxisRightText:"",yAxisBottomText:"",yAxisTopText:"",points:[]}}getDefaultConfig(){var s,h,f,g,u,c,p,i,q,y,R,U,W,I,b,Q,H,E;return{showXAxis:!0,showYAxis:!0,showTitle:!0,chartHeight:(null==(s=d.A.quadrantChart)?void 0:s.chartWidth)||500,chartWidth:(null==(h=d.A.quadrantChart)?void 0:h.chartHeight)||500,titlePadding:(null==(f=d.A.quadrantChart)?void 0:f.titlePadding)||10,titleFontSize:(null==(g=d.A.quadrantChart)?void 0:g.titleFontSize)||20,quadrantPadding:(null==(u=d.A.quadrantChart)?void 0:u.quadrantPadding)||5,xAxisLabelPadding:(null==(c=d.A.quadrantChart)?void 0:c.xAxisLabelPadding)||5,yAxisLabelPadding:(null==(p=d.A.quadrantChart)?void 0:p.yAxisLabelPadding)||5,xAxisLabelFontSize:(null==(i=d.A.quadrantChart)?void 0:i.xAxisLabelFontSize)||16,yAxisLabelFontSize:(null==(q=d.A.quadrantChart)?void 0:q.yAxisLabelFontSize)||16,quadrantLabelFontSize:(null==(y=d.A.quadrantChart)?void 0:y.quadrantLabelFontSize)||16,quadrantTextTopPadding:(null==(R=d.A.quadrantChart)?void 0:R.quadrantTextTopPadding)||5,pointTextPadding:(null==(U=d.A.quadrantChart)?void 0:U.pointTextPadding)||5,pointLabelFontSize:(null==(W=d.A.quadrantChart)?void 0:W.pointLabelFontSize)||12,pointRadius:(null==(I=d.A.quadrantChart)?void 0:I.pointRadius)||5,xAxisPosition:(null==(b=d.A.quadrantChart)?void 0:b.xAxisPosition)||"top",yAxisPosition:(null==(Q=d.A.quadrantChart)?void 0:Q.yAxisPosition)||"left",quadrantInternalBorderStrokeWidth:(null==(H=d.A.quadrantChart)?void 0:H.quadrantInternalBorderStrokeWidth)||1,quadrantExternalBorderStrokeWidth:(null==(E=d.A.quadrantChart)?void 0:E.quadrantExternalBorderStrokeWidth)||2}}getDefaultThemeConfig(){return{quadrant1Fill:w.quadrant1Fill,quadrant2Fill:w.quadrant2Fill,quadrant3Fill:w.quadrant3Fill,quadrant4Fill:w.quadrant4Fill,quadrant1TextFill:w.quadrant1TextFill,quadrant2TextFill:w.quadrant2TextFill,quadrant3TextFill:w.quadrant3TextFill,quadrant4TextFill:w.quadrant4TextFill,quadrantPointFill:w.quadrantPointFill,quadrantPointTextFill:w.quadrantPointTextFill,quadrantXAxisTextFill:w.quadrantXAxisTextFill,quadrantYAxisTextFill:w.quadrantYAxisTextFill,quadrantTitleFill:w.quadrantTitleFill,quadrantInternalBorderStrokeFill:w.quadrantInternalBorderStrokeFill,quadrantExternalBorderStrokeFill:w.quadrantExternalBorderStrokeFill}}clear(){this.config=this.getDefaultConfig(),this.themeConfig=this.getDefaultThemeConfig(),this.data=this.getDefaultData(),d.l.info("clear called")}setData(s){this.data={...this.data,...s}}addPoints(s){this.data.points=[...s,...this.data.points]}setConfig(s){d.l.trace("setConfig called with: ",s),this.config={...this.config,...s}}setThemeConfig(s){d.l.trace("setThemeConfig called with: ",s),this.themeConfig={...this.themeConfig,...s}}calculateSpace(s,h,f,g){const u=2*this.config.xAxisLabelPadding+this.config.xAxisLabelFontSize,c={top:"top"===s&&h?u:0,bottom:"bottom"===s&&h?u:0},p=2*this.config.yAxisLabelPadding+this.config.yAxisLabelFontSize,i={left:"left"===this.config.yAxisPosition&&f?p:0,right:"right"===this.config.yAxisPosition&&f?p:0},y={top:g?this.config.titleFontSize+2*this.config.titlePadding:0},W=this.config.chartWidth-2*this.config.quadrantPadding-i.left-i.right,I=this.config.chartHeight-2*this.config.quadrantPadding-c.top-c.bottom-y.top;return{xAxisSpace:c,yAxisSpace:i,titleSpace:y,quadrantSpace:{quadrantLeft:this.config.quadrantPadding+i.left,quadrantTop:this.config.quadrantPadding+c.top+y.top,quadrantWidth:W,quadrantHalfWidth:W/2,quadrantHeight:I,quadrantHalfHeight:I/2}}}getAxisLabels(s,h,f,g){const{quadrantSpace:u,titleSpace:c}=g,{quadrantHalfHeight:p,quadrantHeight:i,quadrantLeft:q,quadrantHalfWidth:y,quadrantTop:R,quadrantWidth:U}=u,W=Boolean(this.data.xAxisRightText),I=Boolean(this.data.yAxisTopText),b=[];return this.data.xAxisLeftText&&h&&b.push({text:this.data.xAxisLeftText,fill:this.themeConfig.quadrantXAxisTextFill,x:q+(W?y/2:0),y:"top"===s?this.config.xAxisLabelPadding+c.top:this.config.xAxisLabelPadding+R+i+this.config.quadrantPadding,fontSize:this.config.xAxisLabelFontSize,verticalPos:W?"center":"left",horizontalPos:"top",rotation:0}),this.data.xAxisRightText&&h&&b.push({text:this.data.xAxisRightText,fill:this.themeConfig.quadrantXAxisTextFill,x:q+y+(W?y/2:0),y:"top"===s?this.config.xAxisLabelPadding+c.top:this.config.xAxisLabelPadding+R+i+this.config.quadrantPadding,fontSize:this.config.xAxisLabelFontSize,verticalPos:W?"center":"left",horizontalPos:"top",rotation:0}),this.data.yAxisBottomText&&f&&b.push({text:this.data.yAxisBottomText,fill:this.themeConfig.quadrantYAxisTextFill,x:"left"===this.config.yAxisPosition?this.config.yAxisLabelPadding:this.config.yAxisLabelPadding+q+U+this.config.quadrantPadding,y:R+i-(I?p/2:0),fontSize:this.config.yAxisLabelFontSize,verticalPos:I?"center":"left",horizontalPos:"top",rotation:-90}),this.data.yAxisTopText&&f&&b.push({text:this.data.yAxisTopText,fill:this.themeConfig.quadrantYAxisTextFill,x:"left"===this.config.yAxisPosition?this.config.yAxisLabelPadding:this.config.yAxisLabelPadding+q+U+this.config.quadrantPadding,y:R+p-(I?p/2:0),fontSize:this.config.yAxisLabelFontSize,verticalPos:I?"center":"left",horizontalPos:"top",rotation:-90}),b}getQuadrants(s){const{quadrantSpace:h}=s,{quadrantHalfHeight:f,quadrantLeft:g,quadrantHalfWidth:u,quadrantTop:c}=h,p=[{text:{text:this.data.quadrant1Text,fill:this.themeConfig.quadrant1TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:g+u,y:c,width:u,height:f,fill:this.themeConfig.quadrant1Fill},{text:{text:this.data.quadrant2Text,fill:this.themeConfig.quadrant2TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:g,y:c,width:u,height:f,fill:this.themeConfig.quadrant2Fill},{text:{text:this.data.quadrant3Text,fill:this.themeConfig.quadrant3TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:g,y:c+f,width:u,height:f,fill:this.themeConfig.quadrant3Fill},{text:{text:this.data.quadrant4Text,fill:this.themeConfig.quadrant4TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:g+u,y:c+f,width:u,height:f,fill:this.themeConfig.quadrant4Fill}];for(const i of p)i.text.x=i.x+i.width/2,0===this.data.points.length?(i.text.y=i.y+i.height/2,i.text.horizontalPos="middle"):(i.text.y=i.y+this.config.quadrantTextTopPadding,i.text.horizontalPos="top");return p}getQuadrantPoints(s){const{quadrantSpace:h}=s,{quadrantHeight:f,quadrantLeft:g,quadrantTop:u,quadrantWidth:c}=h,p=(0,it.BYU)().domain([0,1]).range([g,c+g]),i=(0,it.BYU)().domain([0,1]).range([f+u,u]);return this.data.points.map(y=>({x:p(y.x),y:i(y.y),fill:this.themeConfig.quadrantPointFill,radius:this.config.pointRadius,text:{text:y.text,fill:this.themeConfig.quadrantPointTextFill,x:p(y.x),y:i(y.y)+this.config.pointTextPadding,verticalPos:"center",horizontalPos:"top",fontSize:this.config.pointLabelFontSize,rotation:0}}))}getBorders(s){const h=this.config.quadrantExternalBorderStrokeWidth/2,{quadrantSpace:f}=s,{quadrantHalfHeight:g,quadrantHeight:u,quadrantLeft:c,quadrantHalfWidth:p,quadrantTop:i,quadrantWidth:q}=f;return[{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:c-h,y1:i,x2:c+q+h,y2:i},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:c+q,y1:i+h,x2:c+q,y2:i+u-h},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:c-h,y1:i+u,x2:c+q+h,y2:i+u},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:c,y1:i+h,x2:c,y2:i+u-h},{strokeFill:this.themeConfig.quadrantInternalBorderStrokeFill,strokeWidth:this.config.quadrantInternalBorderStrokeWidth,x1:c+p,y1:i+h,x2:c+p,y2:i+u-h},{strokeFill:this.themeConfig.quadrantInternalBorderStrokeFill,strokeWidth:this.config.quadrantInternalBorderStrokeWidth,x1:c+h,y1:i+g,x2:c+q-h,y2:i+g}]}getTitle(s){if(s)return{text:this.data.titleText,fill:this.themeConfig.quadrantTitleFill,fontSize:this.config.titleFontSize,horizontalPos:"top",verticalPos:"center",rotation:0,y:this.config.titlePadding,x:this.config.chartWidth/2}}build(){const s=this.config.showXAxis&&!(!this.data.xAxisLeftText&&!this.data.xAxisRightText),h=this.config.showYAxis&&!(!this.data.yAxisTopText&&!this.data.yAxisBottomText),f=this.config.showTitle&&!!this.data.titleText,g=this.data.points.length>0?"bottom":this.config.xAxisPosition,u=this.calculateSpace(g,s,h,f);return{points:this.getQuadrantPoints(u),quadrants:this.getQuadrants(u),axisLabels:this.getAxisLabels(g,s,h,u),borderLines:this.getBorders(u),title:this.getTitle(f)}}},wt={parser:At,db:{setWidth:function zt(e){B.setConfig({chartWidth:e})},setHeight:function It(e){B.setConfig({chartHeight:e})},setQuadrant1Text:function St(e){B.setData({quadrant1Text:X(e.text)})},setQuadrant2Text:function kt(e){B.setData({quadrant2Text:X(e.text)})},setQuadrant3Text:function Pt(e){B.setData({quadrant3Text:X(e.text)})},setQuadrant4Text:function Ft(e){B.setData({quadrant4Text:X(e.text)})},setXAxisLeftText:function vt(e){B.setData({xAxisLeftText:X(e.text)})},setXAxisRightText:function Lt(e){B.setData({xAxisRightText:X(e.text)})},setYAxisTopText:function Ct(e){B.setData({yAxisTopText:X(e.text)})},setYAxisBottomText:function Et(e){B.setData({yAxisBottomText:X(e.text)})},addPoint:function Dt(e,s,h){B.addPoints([{x:s,y:h,text:X(e.text)}])},getQuadrantData:function Bt(){const e=(0,d.c)(),{themeVariables:s,quadrantChart:h}=e;return h&&B.setConfig(h),B.setThemeConfig({quadrant1Fill:s.quadrant1Fill,quadrant2Fill:s.quadrant2Fill,quadrant3Fill:s.quadrant3Fill,quadrant4Fill:s.quadrant4Fill,quadrant1TextFill:s.quadrant1TextFill,quadrant2TextFill:s.quadrant2TextFill,quadrant3TextFill:s.quadrant3TextFill,quadrant4TextFill:s.quadrant4TextFill,quadrantPointFill:s.quadrantPointFill,quadrantPointTextFill:s.quadrantPointTextFill,quadrantXAxisTextFill:s.quadrantXAxisTextFill,quadrantYAxisTextFill:s.quadrantYAxisTextFill,quadrantExternalBorderStrokeFill:s.quadrantExternalBorderStrokeFill,quadrantInternalBorderStrokeFill:s.quadrantInternalBorderStrokeFill,quadrantTitleFill:s.quadrantTitleFill}),B.setData({titleText:(0,d.r)()}),B.build()},clear:function(){B.clear(),(0,d.t)()},setAccTitle:d.s,getAccTitle:d.g,setDiagramTitle:d.q,getDiagramTitle:d.r,getAccDescription:d.a,setAccDescription:d.b},renderer:{draw:(e,s,h,f)=>{var g,u,c;function p(t){return"top"===t?"hanging":"middle"}function i(t){return"left"===t?"start":"middle"}function q(t){return`translate(${t.x}, ${t.y}) rotate(${t.rotation||0})`}const y=(0,d.c)();d.l.debug("Rendering quadrant chart\n"+e);const R=y.securityLevel;let U;"sandbox"===R&&(U=(0,it.Ys)("#i"+s));const I=(0,it.Ys)("sandbox"===R?U.nodes()[0].contentDocument.body:"body").select(`[id="${s}"]`),b=I.append("g").attr("class","main"),Q=(null==(g=y.quadrantChart)?void 0:g.chartWidth)||500,H=(null==(u=y.quadrantChart)?void 0:u.chartHeight)||500;(0,d.i)(I,H,Q,(null==(c=y.quadrantChart)?void 0:c.useMaxWidth)||!0),I.attr("viewBox","0 0 "+Q+" "+H),f.db.setHeight(H),f.db.setWidth(Q);const E=f.db.getQuadrantData(),nt=b.append("g").attr("class","quadrants"),st=b.append("g").attr("class","border"),rt=b.append("g").attr("class","data-points"),M=b.append("g").attr("class","labels"),N=b.append("g").attr("class","title");E.title&&N.append("text").attr("x",0).attr("y",0).attr("fill",E.title.fill).attr("font-size",E.title.fontSize).attr("dominant-baseline",p(E.title.horizontalPos)).attr("text-anchor",i(E.title.verticalPos)).attr("transform",q(E.title)).text(E.title.text),E.borderLines&&st.selectAll("line").data(E.borderLines).enter().append("line").attr("x1",t=>t.x1).attr("y1",t=>t.y1).attr("x2",t=>t.x2).attr("y2",t=>t.y2).style("stroke",t=>t.strokeFill).style("stroke-width",t=>t.strokeWidth);const T=nt.selectAll("g.quadrant").data(E.quadrants).enter().append("g").attr("class","quadrant");T.append("rect").attr("x",t=>t.x).attr("y",t=>t.y).attr("width",t=>t.width).attr("height",t=>t.height).attr("fill",t=>t.fill),T.append("text").attr("x",0).attr("y",0).attr("fill",t=>t.text.fill).attr("font-size",t=>t.text.fontSize).attr("dominant-baseline",t=>p(t.text.horizontalPos)).attr("text-anchor",t=>i(t.text.verticalPos)).attr("transform",t=>q(t.text)).text(t=>t.text.text),M.selectAll("g.label").data(E.axisLabels).enter().append("g").attr("class","label").append("text").attr("x",0).attr("y",0).text(t=>t.text).attr("fill",t=>t.fill).attr("font-size",t=>t.fontSize).attr("dominant-baseline",t=>p(t.horizontalPos)).attr("text-anchor",t=>i(t.verticalPos)).attr("transform",t=>q(t));const A=rt.selectAll("g.data-point").data(E.points).enter().append("g").attr("class","data-point");A.append("circle").attr("cx",t=>t.x).attr("cy",t=>t.y).attr("r",t=>t.radius).attr("fill",t=>t.fill),A.append("text").attr("x",0).attr("y",0).text(t=>t.text.text).attr("fill",t=>t.text.fill).attr("font-size",t=>t.text.fontSize).attr("dominant-baseline",t=>p(t.text.horizontalPos)).attr("text-anchor",t=>i(t.text.verticalPos)).attr("transform",t=>q(t.text))}},styles:()=>""}}}]);