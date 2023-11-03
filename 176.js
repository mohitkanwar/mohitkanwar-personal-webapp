"use strict";(self.webpackChunkang2_mohitkanwar=self.webpackChunkang2_mohitkanwar||[]).push([[176],{9176:(te,ut,j)=>{j.r(ut),j.d(ut,{diagram:()=>Xt});var f=j(6929),wt=j(6768),nt=(j(3304),j(398),j(896),function(){var r=function(z,h,g,x){for(g=g||{},x=z.length;x--;g[z[x]]=h);return g},a=[1,3],o=[1,6],u=[1,4],n=[1,5],c=[2,5],m=[1,12],l=[5,7,13,19,21,23,24,26,28,31,36,39,46],T=[7,13,19,21,23,24,26,28,31,36,39],E=[7,12,13,19,21,23,24,26,28,31,36,39],i=[7,13,46],d=[1,42],p=[1,41],y=[7,13,29,32,34,37,46],b=[1,55],k=[1,56],_=[1,57],N=[7,13,32,34,41,46],w={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,GG:5,document:6,EOF:7,":":8,DIR:9,options:10,body:11,OPT:12,NL:13,line:14,statement:15,commitStatement:16,mergeStatement:17,cherryPickStatement:18,acc_title:19,acc_title_value:20,acc_descr:21,acc_descr_value:22,acc_descr_multiline_value:23,section:24,branchStatement:25,CHECKOUT:26,ref:27,BRANCH:28,ORDER:29,NUM:30,CHERRY_PICK:31,COMMIT_ID:32,STR:33,COMMIT_TAG:34,EMPTYSTR:35,MERGE:36,COMMIT_TYPE:37,commitType:38,COMMIT:39,commit_arg:40,COMMIT_MSG:41,NORMAL:42,REVERSE:43,HIGHLIGHT:44,ID:45,";":46,$accept:0,$end:1},terminals_:{2:"error",5:"GG",7:"EOF",8:":",9:"DIR",12:"OPT",13:"NL",19:"acc_title",20:"acc_title_value",21:"acc_descr",22:"acc_descr_value",23:"acc_descr_multiline_value",24:"section",26:"CHECKOUT",28:"BRANCH",29:"ORDER",30:"NUM",31:"CHERRY_PICK",32:"COMMIT_ID",33:"STR",34:"COMMIT_TAG",35:"EMPTYSTR",36:"MERGE",37:"COMMIT_TYPE",39:"COMMIT",41:"COMMIT_MSG",42:"NORMAL",43:"REVERSE",44:"HIGHLIGHT",45:"ID",46:";"},productions_:[0,[3,2],[3,3],[3,4],[3,5],[6,0],[6,2],[10,2],[10,1],[11,0],[11,2],[14,2],[14,1],[15,1],[15,1],[15,1],[15,2],[15,2],[15,1],[15,1],[15,1],[15,2],[25,2],[25,4],[18,3],[18,5],[18,5],[18,5],[18,5],[17,2],[17,4],[17,4],[17,4],[17,6],[17,6],[17,6],[17,6],[17,6],[17,6],[17,8],[17,8],[17,8],[17,8],[17,8],[17,8],[16,2],[16,3],[16,3],[16,5],[16,5],[16,3],[16,5],[16,5],[16,5],[16,5],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,3],[16,5],[16,5],[16,5],[16,5],[16,5],[16,5],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[40,0],[40,1],[38,1],[38,1],[38,1],[27,1],[27,1],[4,1],[4,1],[4,1]],performAction:function(h,g,x,s,L,t,tt){var e=t.length-1;switch(L){case 2:return t[e];case 3:return t[e-1];case 4:return s.setDirection(t[e-3]),t[e-1];case 6:s.setOptions(t[e-1]),this.$=t[e];break;case 7:t[e-1]+=t[e],this.$=t[e-1];break;case 9:this.$=[];break;case 10:t[e-1].push(t[e]),this.$=t[e-1];break;case 11:this.$=t[e-1];break;case 16:this.$=t[e].trim(),s.setAccTitle(this.$);break;case 17:case 18:this.$=t[e].trim(),s.setAccDescription(this.$);break;case 19:s.addSection(t[e].substr(8)),this.$=t[e].substr(8);break;case 21:s.checkout(t[e]);break;case 22:s.branch(t[e]);break;case 23:s.branch(t[e-2],t[e]);break;case 24:s.cherryPick(t[e],"",void 0);break;case 25:s.cherryPick(t[e-2],"",t[e]);break;case 26:case 28:s.cherryPick(t[e-2],"","");break;case 27:s.cherryPick(t[e],"",t[e-2]);break;case 29:s.merge(t[e],"","","");break;case 30:s.merge(t[e-2],t[e],"","");break;case 31:s.merge(t[e-2],"",t[e],"");break;case 32:s.merge(t[e-2],"","",t[e]);break;case 33:s.merge(t[e-4],t[e],"",t[e-2]);break;case 34:s.merge(t[e-4],"",t[e],t[e-2]);break;case 35:s.merge(t[e-4],"",t[e-2],t[e]);break;case 36:s.merge(t[e-4],t[e-2],t[e],"");break;case 37:s.merge(t[e-4],t[e-2],"",t[e]);break;case 38:s.merge(t[e-4],t[e],t[e-2],"");break;case 39:s.merge(t[e-6],t[e-4],t[e-2],t[e]);break;case 40:s.merge(t[e-6],t[e],t[e-4],t[e-2]);break;case 41:s.merge(t[e-6],t[e-4],t[e],t[e-2]);break;case 42:s.merge(t[e-6],t[e-2],t[e-4],t[e]);break;case 43:s.merge(t[e-6],t[e],t[e-2],t[e-4]);break;case 44:s.merge(t[e-6],t[e-2],t[e],t[e-4]);break;case 45:s.commit(t[e]);break;case 46:s.commit("","",s.commitType.NORMAL,t[e]);break;case 47:s.commit("","",t[e],"");break;case 48:s.commit("","",t[e],t[e-2]);break;case 49:s.commit("","",t[e-2],t[e]);break;case 50:s.commit("",t[e],s.commitType.NORMAL,"");break;case 51:s.commit("",t[e-2],s.commitType.NORMAL,t[e]);break;case 52:s.commit("",t[e],s.commitType.NORMAL,t[e-2]);break;case 53:s.commit("",t[e-2],t[e],"");break;case 54:s.commit("",t[e],t[e-2],"");break;case 55:s.commit("",t[e-4],t[e-2],t[e]);break;case 56:s.commit("",t[e-4],t[e],t[e-2]);break;case 57:s.commit("",t[e-2],t[e-4],t[e]);break;case 58:s.commit("",t[e],t[e-4],t[e-2]);break;case 59:s.commit("",t[e],t[e-2],t[e-4]);break;case 60:s.commit("",t[e-2],t[e],t[e-4]);break;case 61:s.commit(t[e],"",s.commitType.NORMAL,"");break;case 62:s.commit(t[e],"",s.commitType.NORMAL,t[e-2]);break;case 63:s.commit(t[e-2],"",s.commitType.NORMAL,t[e]);break;case 64:s.commit(t[e-2],"",t[e],"");break;case 65:s.commit(t[e],"",t[e-2],"");break;case 66:s.commit(t[e],t[e-2],s.commitType.NORMAL,"");break;case 67:s.commit(t[e-2],t[e],s.commitType.NORMAL,"");break;case 68:s.commit(t[e-4],"",t[e-2],t[e]);break;case 69:s.commit(t[e-4],"",t[e],t[e-2]);break;case 70:s.commit(t[e-2],"",t[e-4],t[e]);break;case 71:s.commit(t[e],"",t[e-4],t[e-2]);break;case 72:s.commit(t[e],"",t[e-2],t[e-4]);break;case 73:s.commit(t[e-2],"",t[e],t[e-4]);break;case 74:s.commit(t[e-4],t[e],t[e-2],"");break;case 75:s.commit(t[e-4],t[e-2],t[e],"");break;case 76:s.commit(t[e-2],t[e],t[e-4],"");break;case 77:s.commit(t[e],t[e-2],t[e-4],"");break;case 78:s.commit(t[e],t[e-4],t[e-2],"");break;case 79:s.commit(t[e-2],t[e-4],t[e],"");break;case 80:s.commit(t[e-4],t[e],s.commitType.NORMAL,t[e-2]);break;case 81:s.commit(t[e-4],t[e-2],s.commitType.NORMAL,t[e]);break;case 82:s.commit(t[e-2],t[e],s.commitType.NORMAL,t[e-4]);break;case 83:s.commit(t[e],t[e-2],s.commitType.NORMAL,t[e-4]);break;case 84:s.commit(t[e],t[e-4],s.commitType.NORMAL,t[e-2]);break;case 85:s.commit(t[e-2],t[e-4],s.commitType.NORMAL,t[e]);break;case 86:s.commit(t[e-6],t[e-4],t[e-2],t[e]);break;case 87:s.commit(t[e-6],t[e-4],t[e],t[e-2]);break;case 88:s.commit(t[e-6],t[e-2],t[e-4],t[e]);break;case 89:s.commit(t[e-6],t[e],t[e-4],t[e-2]);break;case 90:s.commit(t[e-6],t[e-2],t[e],t[e-4]);break;case 91:s.commit(t[e-6],t[e],t[e-2],t[e-4]);break;case 92:s.commit(t[e-4],t[e-6],t[e-2],t[e]);break;case 93:s.commit(t[e-4],t[e-6],t[e],t[e-2]);break;case 94:s.commit(t[e-2],t[e-6],t[e-4],t[e]);break;case 95:s.commit(t[e],t[e-6],t[e-4],t[e-2]);break;case 96:s.commit(t[e-2],t[e-6],t[e],t[e-4]);break;case 97:s.commit(t[e],t[e-6],t[e-2],t[e-4]);break;case 98:s.commit(t[e],t[e-4],t[e-2],t[e-6]);break;case 99:s.commit(t[e-2],t[e-4],t[e],t[e-6]);break;case 100:s.commit(t[e],t[e-2],t[e-4],t[e-6]);break;case 101:s.commit(t[e-2],t[e],t[e-4],t[e-6]);break;case 102:s.commit(t[e-4],t[e-2],t[e],t[e-6]);break;case 103:s.commit(t[e-4],t[e],t[e-2],t[e-6]);break;case 104:s.commit(t[e-2],t[e-4],t[e-6],t[e]);break;case 105:s.commit(t[e],t[e-4],t[e-6],t[e-2]);break;case 106:s.commit(t[e-2],t[e],t[e-6],t[e-4]);break;case 107:s.commit(t[e],t[e-2],t[e-6],t[e-4]);break;case 108:s.commit(t[e-4],t[e-2],t[e-6],t[e]);break;case 109:s.commit(t[e-4],t[e],t[e-6],t[e-2]);break;case 110:this.$="";break;case 111:this.$=t[e];break;case 112:this.$=s.commitType.NORMAL;break;case 113:this.$=s.commitType.REVERSE;break;case 114:this.$=s.commitType.HIGHLIGHT}},table:[{3:1,4:2,5:a,7:o,13:u,46:n},{1:[3]},{3:7,4:2,5:a,7:o,13:u,46:n},{6:8,7:c,8:[1,9],9:[1,10],10:11,13:m},r(l,[2,117]),r(l,[2,118]),r(l,[2,119]),{1:[2,1]},{7:[1,13]},{6:14,7:c,10:11,13:m},{8:[1,15]},r(T,[2,9],{11:16,12:[1,17]}),r(E,[2,8]),{1:[2,2]},{7:[1,18]},{6:19,7:c,10:11,13:m},{7:[2,6],13:[1,22],14:20,15:21,16:23,17:24,18:25,19:[1,26],21:[1,27],23:[1,28],24:[1,29],25:30,26:[1,31],28:[1,35],31:[1,34],36:[1,33],39:[1,32]},r(E,[2,7]),{1:[2,3]},{7:[1,36]},r(T,[2,10]),{4:37,7:o,13:u,46:n},r(T,[2,12]),r(i,[2,13]),r(i,[2,14]),r(i,[2,15]),{20:[1,38]},{22:[1,39]},r(i,[2,18]),r(i,[2,19]),r(i,[2,20]),{27:40,33:d,45:p},r(i,[2,110],{40:43,32:[1,46],33:[1,48],34:[1,44],37:[1,45],41:[1,47]}),{27:49,33:d,45:p},{32:[1,50],34:[1,51]},{27:52,33:d,45:p},{1:[2,4]},r(T,[2,11]),r(i,[2,16]),r(i,[2,17]),r(i,[2,21]),r(y,[2,115]),r(y,[2,116]),r(i,[2,45]),{33:[1,53]},{38:54,42:b,43:k,44:_},{33:[1,58]},{33:[1,59]},r(i,[2,111]),r(i,[2,29],{32:[1,60],34:[1,62],37:[1,61]}),{33:[1,63]},{33:[1,64],35:[1,65]},r(i,[2,22],{29:[1,66]}),r(i,[2,46],{32:[1,68],37:[1,67],41:[1,69]}),r(i,[2,47],{32:[1,71],34:[1,70],41:[1,72]}),r(N,[2,112]),r(N,[2,113]),r(N,[2,114]),r(i,[2,50],{34:[1,73],37:[1,74],41:[1,75]}),r(i,[2,61],{32:[1,78],34:[1,76],37:[1,77]}),{33:[1,79]},{38:80,42:b,43:k,44:_},{33:[1,81]},r(i,[2,24],{34:[1,82]}),{32:[1,83]},{32:[1,84]},{30:[1,85]},{38:86,42:b,43:k,44:_},{33:[1,87]},{33:[1,88]},{33:[1,89]},{33:[1,90]},{33:[1,91]},{33:[1,92]},{38:93,42:b,43:k,44:_},{33:[1,94]},{33:[1,95]},{38:96,42:b,43:k,44:_},{33:[1,97]},r(i,[2,30],{34:[1,99],37:[1,98]}),r(i,[2,31],{32:[1,101],34:[1,100]}),r(i,[2,32],{32:[1,102],37:[1,103]}),{33:[1,104],35:[1,105]},{33:[1,106]},{33:[1,107]},r(i,[2,23]),r(i,[2,48],{32:[1,108],41:[1,109]}),r(i,[2,52],{37:[1,110],41:[1,111]}),r(i,[2,62],{32:[1,113],37:[1,112]}),r(i,[2,49],{32:[1,114],41:[1,115]}),r(i,[2,54],{34:[1,116],41:[1,117]}),r(i,[2,65],{32:[1,119],34:[1,118]}),r(i,[2,51],{37:[1,120],41:[1,121]}),r(i,[2,53],{34:[1,122],41:[1,123]}),r(i,[2,66],{34:[1,125],37:[1,124]}),r(i,[2,63],{32:[1,127],37:[1,126]}),r(i,[2,64],{32:[1,129],34:[1,128]}),r(i,[2,67],{34:[1,131],37:[1,130]}),{38:132,42:b,43:k,44:_},{33:[1,133]},{33:[1,134]},{33:[1,135]},{33:[1,136]},{38:137,42:b,43:k,44:_},r(i,[2,25]),r(i,[2,26]),r(i,[2,27]),r(i,[2,28]),{33:[1,138]},{33:[1,139]},{38:140,42:b,43:k,44:_},{33:[1,141]},{38:142,42:b,43:k,44:_},{33:[1,143]},{33:[1,144]},{33:[1,145]},{33:[1,146]},{33:[1,147]},{33:[1,148]},{33:[1,149]},{38:150,42:b,43:k,44:_},{33:[1,151]},{33:[1,152]},{33:[1,153]},{38:154,42:b,43:k,44:_},{33:[1,155]},{38:156,42:b,43:k,44:_},{33:[1,157]},{33:[1,158]},{33:[1,159]},{38:160,42:b,43:k,44:_},{33:[1,161]},r(i,[2,36],{34:[1,162]}),r(i,[2,37],{37:[1,163]}),r(i,[2,35],{32:[1,164]}),r(i,[2,38],{34:[1,165]}),r(i,[2,33],{37:[1,166]}),r(i,[2,34],{32:[1,167]}),r(i,[2,59],{41:[1,168]}),r(i,[2,72],{32:[1,169]}),r(i,[2,60],{41:[1,170]}),r(i,[2,83],{37:[1,171]}),r(i,[2,73],{32:[1,172]}),r(i,[2,82],{37:[1,173]}),r(i,[2,58],{41:[1,174]}),r(i,[2,71],{32:[1,175]}),r(i,[2,57],{41:[1,176]}),r(i,[2,77],{34:[1,177]}),r(i,[2,70],{32:[1,178]}),r(i,[2,76],{34:[1,179]}),r(i,[2,56],{41:[1,180]}),r(i,[2,84],{37:[1,181]}),r(i,[2,55],{41:[1,182]}),r(i,[2,78],{34:[1,183]}),r(i,[2,79],{34:[1,184]}),r(i,[2,85],{37:[1,185]}),r(i,[2,69],{32:[1,186]}),r(i,[2,80],{37:[1,187]}),r(i,[2,68],{32:[1,188]}),r(i,[2,74],{34:[1,189]}),r(i,[2,75],{34:[1,190]}),r(i,[2,81],{37:[1,191]}),{33:[1,192]},{38:193,42:b,43:k,44:_},{33:[1,194]},{33:[1,195]},{38:196,42:b,43:k,44:_},{33:[1,197]},{33:[1,198]},{33:[1,199]},{33:[1,200]},{38:201,42:b,43:k,44:_},{33:[1,202]},{38:203,42:b,43:k,44:_},{33:[1,204]},{33:[1,205]},{33:[1,206]},{33:[1,207]},{33:[1,208]},{33:[1,209]},{33:[1,210]},{38:211,42:b,43:k,44:_},{33:[1,212]},{33:[1,213]},{33:[1,214]},{38:215,42:b,43:k,44:_},{33:[1,216]},{38:217,42:b,43:k,44:_},{33:[1,218]},{33:[1,219]},{33:[1,220]},{38:221,42:b,43:k,44:_},r(i,[2,39]),r(i,[2,41]),r(i,[2,40]),r(i,[2,42]),r(i,[2,44]),r(i,[2,43]),r(i,[2,100]),r(i,[2,101]),r(i,[2,98]),r(i,[2,99]),r(i,[2,103]),r(i,[2,102]),r(i,[2,107]),r(i,[2,106]),r(i,[2,105]),r(i,[2,104]),r(i,[2,109]),r(i,[2,108]),r(i,[2,97]),r(i,[2,96]),r(i,[2,95]),r(i,[2,94]),r(i,[2,92]),r(i,[2,93]),r(i,[2,91]),r(i,[2,90]),r(i,[2,89]),r(i,[2,88]),r(i,[2,86]),r(i,[2,87])],defaultActions:{7:[2,1],13:[2,2],18:[2,3],36:[2,4]},parseError:function(h,g){if(!g.recoverable){var x=new Error(h);throw x.hash=g,x}this.trace(h)},parse:function(h){var x=[0],s=[],L=[null],t=[],tt=this.table,e="",it=0,_t=0,Qt=t.slice.call(arguments,1),O=Object.create(this.lexer),U={yy:{}};for(var ot in this.yy)Object.prototype.hasOwnProperty.call(this.yy,ot)&&(U.yy[ot]=this.yy[ot]);O.setInput(h,U.yy),U.yy.lexer=O,U.yy.parser=this,typeof O.yylloc>"u"&&(O.yylloc={});var lt=O.yylloc;t.push(lt);var V,Zt=O.options&&O.options.ranges;this.parseError="function"==typeof U.yy.parseError?U.yy.parseError:Object.getPrototypeOf(this).parseError;for(var S,q,B,ht,st,D,at,F={};;){if(this.defaultActions[q=x[x.length-1]]?B=this.defaultActions[q]:((null===S||typeof S>"u")&&(V=void 0,"number"!=typeof(V=s.pop()||O.lex()||1)&&(V instanceof Array&&(V=(s=V).pop()),V=this.symbols_[V]||V),S=V),B=tt[q]&&tt[q][S]),typeof B>"u"||!B.length||!B[0]){var mt;for(st in at=[],tt[q])this.terminals_[st]&&st>2&&at.push("'"+this.terminals_[st]+"'");mt=O.showPosition?"Parse error on line "+(it+1)+":\n"+O.showPosition()+"\nExpecting "+at.join(", ")+", got '"+(this.terminals_[S]||S)+"'":"Parse error on line "+(it+1)+": Unexpected "+(1==S?"end of input":"'"+(this.terminals_[S]||S)+"'"),this.parseError(mt,{text:O.match,token:this.terminals_[S]||S,line:O.yylineno,loc:lt,expected:at})}if(B[0]instanceof Array&&B.length>1)throw new Error("Parse Error: multiple actions possible at state: "+q+", token: "+S);switch(B[0]){case 1:x.push(S),L.push(O.yytext),t.push(O.yylloc),x.push(B[1]),S=null,_t=O.yyleng,e=O.yytext,it=O.yylineno,lt=O.yylloc;break;case 2:if(F.$=L[L.length-(D=this.productions_[B[1]][1])],F._$={first_line:t[t.length-(D||1)].first_line,last_line:t[t.length-1].last_line,first_column:t[t.length-(D||1)].first_column,last_column:t[t.length-1].last_column},Zt&&(F._$.range=[t[t.length-(D||1)].range[0],t[t.length-1].range[1]]),typeof(ht=this.performAction.apply(F,[e,_t,it,U.yy,B[1],L,t].concat(Qt)))<"u")return ht;D&&(x=x.slice(0,-1*D*2),L=L.slice(0,-1*D),t=t.slice(0,-1*D)),x.push(this.productions_[B[1]][0]),L.push(F.$),t.push(F._$),x.push(tt[x[x.length-2]][x[x.length-1]]);break;case 3:return!0}}return!0}};function G(){this.yy={}}return w.lexer={EOF:1,parseError:function(g,x){if(!this.yy.parser)throw new Error(g);this.yy.parser.parseError(g,x)},setInput:function(h,g){return this.yy=g||this.yy||{},this._input=h,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var h=this._input[0];return this.yytext+=h,this.yyleng++,this.offset++,this.match+=h,this.matched+=h,h.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),h},unput:function(h){var g=h.length,x=h.split(/(?:\r\n?|\n)/g);this._input=h+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-g),this.offset-=g;var s=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),x.length-1&&(this.yylineno-=x.length-1);var L=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:x?(x.length===s.length?this.yylloc.first_column:0)+s[s.length-x.length].length-x[0].length:this.yylloc.first_column-g},this.options.ranges&&(this.yylloc.range=[L[0],L[0]+this.yyleng-g]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(h){this.unput(this.match.slice(h))},pastInput:function(){var h=this.matched.substr(0,this.matched.length-this.match.length);return(h.length>20?"...":"")+h.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var h=this.match;return h.length<20&&(h+=this._input.substr(0,20-h.length)),(h.substr(0,20)+(h.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var h=this.pastInput(),g=new Array(h.length+1).join("-");return h+this.upcomingInput()+"\n"+g+"^"},test_match:function(h,g){var x,s,L;if(this.options.backtrack_lexer&&(L={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(L.yylloc.range=this.yylloc.range.slice(0))),(s=h[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=s.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:s?s[s.length-1].length-s[s.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+h[0].length},this.yytext+=h[0],this.match+=h[0],this.matches=h,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(h[0].length),this.matched+=h[0],x=this.performAction.call(this,this.yy,this,g,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),x)return x;if(this._backtrack){for(var t in L)this[t]=L[t];return!1}return!1},next:function(){if(this.done)return this.EOF;var h,g,x,s;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var L=this._currentRules(),t=0;t<L.length;t++)if((x=this._input.match(this.rules[L[t]]))&&(!g||x[0].length>g[0].length)){if(g=x,s=t,this.options.backtrack_lexer){if(!1!==(h=this.test_match(x,L[t])))return h;if(this._backtrack){g=!1;continue}return!1}if(!this.options.flex)break}return g?!1!==(h=this.test_match(g,L[s]))&&h:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(g){this.conditionStack.push(g)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(g){return(g=this.conditionStack.length-1-Math.abs(g||0))>=0?this.conditionStack[g]:"INITIAL"},pushState:function(g){this.begin(g)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(g,x,s,L){switch(s){case 0:return this.begin("acc_title"),19;case 1:return this.popState(),"acc_title_value";case 2:return this.begin("acc_descr"),21;case 3:return this.popState(),"acc_descr_value";case 4:this.begin("acc_descr_multiline");break;case 5:case 29:case 33:this.popState();break;case 6:return"acc_descr_multiline_value";case 7:return 13;case 8:case 9:break;case 10:return 5;case 11:return 39;case 12:return 32;case 13:return 37;case 14:return 41;case 15:return 42;case 16:return 43;case 17:return 44;case 18:return 34;case 19:return 28;case 20:return 29;case 21:return 36;case 22:return 31;case 23:return 26;case 24:case 25:return 9;case 26:return 8;case 27:return"CARET";case 28:this.begin("options");break;case 30:return 12;case 31:return 35;case 32:this.begin("string");break;case 34:return 33;case 35:return 30;case 36:return 45;case 37:return 7}},rules:[/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:(\r?\n)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:gitGraph\b)/i,/^(?:commit(?=\s|$))/i,/^(?:id:)/i,/^(?:type:)/i,/^(?:msg:)/i,/^(?:NORMAL\b)/i,/^(?:REVERSE\b)/i,/^(?:HIGHLIGHT\b)/i,/^(?:tag:)/i,/^(?:branch(?=\s|$))/i,/^(?:order:)/i,/^(?:merge(?=\s|$))/i,/^(?:cherry-pick(?=\s|$))/i,/^(?:checkout(?=\s|$))/i,/^(?:LR\b)/i,/^(?:TB\b)/i,/^(?::)/i,/^(?:\^)/i,/^(?:options\r?\n)/i,/^(?:[ \r\n\t]+end\b)/i,/^(?:[\s\S]+(?=[ \r\n\t]+end))/i,/^(?:["]["])/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[0-9]+(?=\s|$))/i,/^(?:\w([-\./\w]*[-\w])?)/i,/^(?:$)/i,/^(?:\s+)/i],conditions:{acc_descr_multiline:{rules:[5,6],inclusive:!1},acc_descr:{rules:[3],inclusive:!1},acc_title:{rules:[1],inclusive:!1},options:{rules:[29,30],inclusive:!1},string:{rules:[33,34],inclusive:!1},INITIAL:{rules:[0,2,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,31,32,35,36,37,38],inclusive:!0}}},G.prototype=w,w.Parser=G,new G}());nt.parser=nt;const Lt=nt;let et=(0,f.c)().gitGraph.mainBranchName,Rt=(0,f.c)().gitGraph.mainBranchOrder,M={},P=null,W={};W[et]={name:et,order:Rt};let R={};R[et]=P;let v=et,ft="LR",K=0;function ct(){return(0,f.x)({length:7})}let pt={};const bt=function(r){if(r=f.e.sanitizeText(r,(0,f.c)()),void 0===R[r]){let a=new Error('Trying to checkout branch which is not yet created. (Help try using "branch '+r+'")');throw a.hash={text:"checkout "+r,token:"checkout "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"branch '+r+'"']},a}v=r,P=M[R[v]]};function gt(r,a,o){const u=r.indexOf(a);-1===u?r.push(o):r.splice(u,1,o)}function dt(r){const a=r.reduce((n,c)=>n.seq>c.seq?n:c,r[0]);let o="";r.forEach(function(n){o+=n===a?"\t*":"\t|"});const u=[o,a.id,a.seq];for(let n in R)R[n]===a.id&&u.push(n);if(f.l.debug(u.join(" ")),a.parents&&2==a.parents.length)gt(r,a,M[a.parents[0]]),r.push(M[a.parents[1]]);else{if(0==a.parents.length)return;gt(r,a,M[a.parents])}r=function Mt(r,a){const o=Object.create(null);return r.reduce((u,n)=>{const c=a(n);return o[c]||(o[c]=!0,u.push(n)),u},[])}(r,n=>n.id),dt(r)}const kt=function(){const r=Object.keys(M).map(function(a){return M[a]});return r.forEach(function(a){f.l.debug(a.id)}),r.sort((a,o)=>a.seq-o.seq),r},X={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4};let J={};let C={},Q={},rt=[],Z=0,A="LR";const xt=r=>{const a=document.createElementNS("http://www.w3.org/2000/svg","text");let o=[];o="string"==typeof r?r.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(r)?r:[];for(const u of o){const n=document.createElementNS("http://www.w3.org/2000/svg","tspan");n.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),n.setAttribute("dy","1em"),n.setAttribute("x","0"),n.setAttribute("class","row"),n.textContent=u.trim(),a.appendChild(n)}return a},yt=(r,a,o)=>{const u=(0,f.c)().gitGraph,n=r.append("g").attr("class","commit-bullets"),c=r.append("g").attr("class","commit-labels");let m=0;"TB"===A&&(m=30),Object.keys(a).sort((E,i)=>a[E].seq-a[i].seq).forEach(E=>{const i=a[E],d="TB"===A?m+10:C[i.branch].pos,p="TB"===A?C[i.branch].pos:m+10;if(o){let y,b=void 0!==i.customType&&""!==i.customType?i.customType:i.type;switch(b){case 0:default:y="commit-normal";break;case 1:y="commit-reverse";break;case 2:y="commit-highlight";break;case 3:y="commit-merge";break;case 4:y="commit-cherry-pick"}if(2===b){const k=n.append("rect");k.attr("x",p-10),k.attr("y",d-10),k.attr("height",20),k.attr("width",20),k.attr("class",`commit ${i.id} commit-highlight${C[i.branch].index%8} ${y}-outer`),n.append("rect").attr("x",p-6).attr("y",d-6).attr("height",12).attr("width",12).attr("class",`commit ${i.id} commit${C[i.branch].index%8} ${y}-inner`)}else if(4===b)n.append("circle").attr("cx",p).attr("cy",d).attr("r",10).attr("class",`commit ${i.id} ${y}`),n.append("circle").attr("cx",p-3).attr("cy",d+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${i.id} ${y}`),n.append("circle").attr("cx",p+3).attr("cy",d+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${i.id} ${y}`),n.append("line").attr("x1",p+3).attr("y1",d+1).attr("x2",p).attr("y2",d-5).attr("stroke","#fff").attr("class",`commit ${i.id} ${y}`),n.append("line").attr("x1",p-3).attr("y1",d+1).attr("x2",p).attr("y2",d-5).attr("stroke","#fff").attr("class",`commit ${i.id} ${y}`);else{const k=n.append("circle");if(k.attr("cx",p),k.attr("cy",d),k.attr("r",3===i.type?9:10),k.attr("class",`commit ${i.id} commit${C[i.branch].index%8}`),3===b){const _=n.append("circle");_.attr("cx",p),_.attr("cy",d),_.attr("r",6),_.attr("class",`commit ${y} ${i.id} commit${C[i.branch].index%8}`)}1===b&&n.append("path").attr("d",`M ${p-5},${d-5}L${p+5},${d+5}M${p-5},${d+5}L${p+5},${d-5}`).attr("class",`commit ${y} ${i.id} commit${C[i.branch].index%8}`)}}if(Q[i.id]="TB"===A?{x:p,y:m+10}:{x:m+10,y:d},o){if(4!==i.type&&(i.customId&&3===i.type||3!==i.type)&&u.showCommitLabel){const k=c.append("g"),_=k.insert("rect").attr("class","commit-label-bkg"),N=k.append("text").attr("x",m).attr("y",d+25).attr("class","commit-label").text(i.id);let w=N.node().getBBox();_.attr("x",m+10-w.width/2-2).attr("y",d+13.5).attr("width",w.width+4).attr("height",w.height+4),"TB"===A&&(_.attr("x",p-(w.width+16+5)).attr("y",d-12),N.attr("x",p-(w.width+16)).attr("y",d+w.height-12)),"TB"!==A&&N.attr("x",m+10-w.width/2),u.rotateCommitLabel&&("TB"===A?(N.attr("transform","rotate(-45, "+p+", "+d+")"),_.attr("transform","rotate(-45, "+p+", "+d+")")):k.attr("transform","translate("+(-7.5-(w.width+10)/25*9.5)+", "+(10+w.width/25*8.5)+") rotate(-45, "+m+", "+d+")"))}if(i.tag){const k=c.insert("polygon"),_=c.append("circle"),N=c.append("text").attr("y",d-16).attr("class","tag-label").text(i.tag);let w=N.node().getBBox();N.attr("x",m+10-w.width/2);const H=w.height/2,G=d-19.2;k.attr("class","tag-label-bkg").attr("points",`\n          ${m-w.width/2-2},${G+2}\n          ${m-w.width/2-2},${G-2}\n          ${m+10-w.width/2-4},${G-H-2}\n          ${m+10+w.width/2+4},${G-H-2}\n          ${m+10+w.width/2+4},${G+H+2}\n          ${m+10-w.width/2-4},${G+H+2}`),_.attr("cx",m-w.width/2+2).attr("cy",G).attr("r",1.5).attr("class","tag-hole"),"TB"===A&&(k.attr("class","tag-label-bkg").attr("points",`\n            ${p},${m+2}\n            ${p},${m-2}\n            ${p+10},${m-H-2}\n            ${p+10+w.width+4},${m-H-2}\n            ${p+10+w.width+4},${m+H+2}\n            ${p+10},${m+H+2}`).attr("transform","translate(12,12) rotate(45, "+p+","+m+")"),_.attr("cx",p+2).attr("cy",m).attr("transform","translate(12,12) rotate(45, "+p+","+m+")"),N.attr("x",p+5).attr("y",m+3).attr("transform","translate(14,14) rotate(45, "+p+","+m+")"))}}m+=50,m>Z&&(Z=m)})},$=(r,a,o=0)=>{const u=r+Math.abs(r-a)/2;if(o>5)return u;if(rt.every(m=>Math.abs(m-u)>=10))return rt.push(u),u;const c=Math.abs(r-a);return $(r,a-c/5,o+1)},Xt={parser:Lt,db:{getConfig:()=>(0,f.c)().gitGraph,setDirection:function(r){ft=r},setOptions:function(r){f.l.debug("options str",r),r=(r=r&&r.trim())||"{}";try{pt=JSON.parse(r)}catch(a){f.l.error("error while parsing gitGraph options",a.message)}},getOptions:function(){return pt},commit:function(r,a,o,u){f.l.debug("Entering commit:",r,a,o,u),a=f.e.sanitizeText(a,(0,f.c)()),r=f.e.sanitizeText(r,(0,f.c)()),u=f.e.sanitizeText(u,(0,f.c)());const n={id:a||K+"-"+ct(),message:r,seq:K++,type:o||X.NORMAL,tag:u||"",parents:null==P?[]:[P.id],branch:v};P=n,M[n.id]=n,R[v]=n.id,f.l.debug("in pushCommit "+n.id)},branch:function(r,a){if(r=f.e.sanitizeText(r,(0,f.c)()),void 0!==R[r]){let o=new Error('Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout '+r+'")');throw o.hash={text:"branch "+r,token:"branch "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"checkout '+r+'"']},o}R[r]=null!=P?P.id:null,W[r]={name:r,order:a?parseInt(a,10):null},bt(r),f.l.debug("in createBranch")},merge:function(r,a,o,u){r=f.e.sanitizeText(r,(0,f.c)()),a=f.e.sanitizeText(a,(0,f.c)());const n=M[R[v]],c=M[R[r]];if(v===r){let l=new Error('Incorrect usage of "merge". Cannot merge a branch to itself');throw l.hash={text:"merge "+r,token:"merge "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},l}if(void 0===n||!n){let l=new Error('Incorrect usage of "merge". Current branch ('+v+")has no commits");throw l.hash={text:"merge "+r,token:"merge "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["commit"]},l}if(void 0===R[r]){let l=new Error('Incorrect usage of "merge". Branch to be merged ('+r+") does not exist");throw l.hash={text:"merge "+r,token:"merge "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch "+r]},l}if(void 0===c||!c){let l=new Error('Incorrect usage of "merge". Branch to be merged ('+r+") has no commits");throw l.hash={text:"merge "+r,token:"merge "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"commit"']},l}if(n===c){let l=new Error('Incorrect usage of "merge". Both branches have same head');throw l.hash={text:"merge "+r,token:"merge "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},l}if(a&&void 0!==M[a]){let l=new Error('Incorrect usage of "merge". Commit with id:'+a+" already exists, use different custom Id");throw l.hash={text:"merge "+r+a+o+u,token:"merge "+r+a+o+u,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["merge "+r+" "+a+"_UNIQUE "+o+" "+u]},l}const m={id:a||K+"-"+ct(),message:"merged branch "+r+" into "+v,seq:K++,parents:[null==P?null:P.id,R[r]],branch:v,type:X.MERGE,customType:o,customId:!!a,tag:u||""};P=m,M[m.id]=m,R[v]=m.id,f.l.debug(R),f.l.debug("in mergeBranch")},cherryPick:function(r,a,o){if(f.l.debug("Entering cherryPick:",r,a,o),r=f.e.sanitizeText(r,(0,f.c)()),a=f.e.sanitizeText(a,(0,f.c)()),o=f.e.sanitizeText(o,(0,f.c)()),!r||void 0===M[r]){let c=new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');throw c.hash={text:"cherryPick "+r+" "+a,token:"cherryPick "+r+" "+a,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},c}let u=M[r],n=u.branch;if(u.type===X.MERGE){let c=new Error('Incorrect usage of "cherryPick". Source commit should not be a merge commit');throw c.hash={text:"cherryPick "+r+" "+a,token:"cherryPick "+r+" "+a,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},c}if(!a||void 0===M[a]){if(n===v){let l=new Error('Incorrect usage of "cherryPick". Source commit is already on current branch');throw l.hash={text:"cherryPick "+r+" "+a,token:"cherryPick "+r+" "+a,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},l}const c=M[R[v]];if(void 0===c||!c){let l=new Error('Incorrect usage of "cherry-pick". Current branch ('+v+")has no commits");throw l.hash={text:"cherryPick "+r+" "+a,token:"cherryPick "+r+" "+a,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},l}const m={id:K+"-"+ct(),message:"cherry-picked "+u+" into "+v,seq:K++,parents:[null==P?null:P.id,u.id],branch:v,type:X.CHERRY_PICK,tag:o??"cherry-pick:"+u.id};P=m,M[m.id]=m,R[v]=m.id,f.l.debug(R),f.l.debug("in cherryPick")}},checkout:bt,prettyPrint:function(){f.l.debug(M),dt([kt()[0]])},clear:function(){M={},P=null;let r=(0,f.c)().gitGraph.mainBranchName,a=(0,f.c)().gitGraph.mainBranchOrder;R={},R[r]=null,W={},W[r]={name:r,order:a},v=r,K=0,(0,f.t)()},getBranchesAsObjArray:function(){return Object.values(W).map((a,o)=>null!==a.order?a:{...a,order:parseFloat(`0.${o}`,10)}).sort((a,o)=>a.order-o.order).map(({name:a})=>({name:a}))},getBranches:function(){return R},getCommits:function(){return M},getCommitsArray:kt,getCurrentBranch:function(){return v},getDirection:function(){return ft},getHead:function(){return P},setAccTitle:f.s,getAccTitle:f.g,getAccDescription:f.a,setAccDescription:f.b,setDiagramTitle:f.q,getDiagramTitle:f.r,commitType:X},renderer:{draw:function(r,a,o,u){C={},Q={},J={},Z=0,rt=[],A="LR";const n=(0,f.c)(),c=n.gitGraph;f.l.debug("in gitgraph renderer",r+"\n","id:",a,o),J=u.db.getCommits();const m=u.db.getBranchesAsObjArray();A=u.db.getDirection();const l=(0,wt.Ys)(`[id="${a}"]`);let T=0;m.forEach((E,i)=>{const d=xt(E.name),p=l.append("g"),y=p.insert("g").attr("class","branchLabel"),b=y.insert("g").attr("class","label branch-label");b.node().appendChild(d);let k=d.getBBox();C[E.name]={pos:T,index:i},T+=50+(c.rotateCommitLabel?40:0)+("TB"===A?k.width/2:0),b.remove(),y.remove(),p.remove()}),yt(l,J,!1),c.showBranches&&((r,a)=>{const o=(0,f.c)().gitGraph,u=r.append("g");a.forEach((n,c)=>{const m=c%8,l=C[n.name].pos,T=u.append("line");T.attr("x1",0),T.attr("y1",l),T.attr("x2",Z),T.attr("y2",l),T.attr("class","branch branch"+m),"TB"===A&&(T.attr("y1",30),T.attr("x1",l),T.attr("y2",Z),T.attr("x2",l)),rt.push(l);const i=xt(n.name),d=u.insert("rect"),y=u.insert("g").attr("class","branchLabel").insert("g").attr("class","label branch-label"+m);y.node().appendChild(i);let b=i.getBBox();d.attr("class","branchLabelBkg label"+m).attr("rx",4).attr("ry",4).attr("x",-b.width-4-(!0===o.rotateCommitLabel?30:0)).attr("y",-b.height/2+8).attr("width",b.width+18).attr("height",b.height+4),y.attr("transform","translate("+(-b.width-14-(!0===o.rotateCommitLabel?30:0))+", "+(l-b.height/2-1)+")"),"TB"===A&&(d.attr("x",l-b.width/2-10).attr("y",0),y.attr("transform","translate("+(l-b.width/2-5)+", 0)")),"TB"!==A&&d.attr("transform","translate(-19, "+(l-b.height/2)+")")})})(l,m),((r,a)=>{const o=r.append("g").attr("class","commit-arrows");Object.keys(a).forEach(u=>{const n=a[u];n.parents&&n.parents.length>0&&n.parents.forEach(c=>{((r,a,o,u)=>{const n=Q[a.id],c=Q[o.id],m=((r,a,o)=>Object.keys(o).filter(c=>o[c].branch===a.branch&&o[c].seq>r.seq&&o[c].seq<a.seq).length>0)(a,o,u);let p,l="",T="",E=0,i=0,d=C[o.branch].index;if(m){l="A 10 10, 0, 0, 0,",T="A 10 10, 0, 0, 1,",E=10,i=10,d=C[o.branch].index;const y=n.y<c.y?$(n.y,c.y):$(c.y,n.y),b=n.x<c.x?$(n.x,c.x):$(c.x,n.x);p="TB"===A?n.x<c.x?`M ${n.x} ${n.y} L ${b-E} ${n.y} ${T} ${b} ${n.y+i} L ${b} ${c.y-E} ${l} ${b+i} ${c.y} L ${c.x} ${c.y}`:`M ${n.x} ${n.y} L ${b+E} ${n.y} ${l} ${b} ${n.y+i} L ${b} ${c.y-E} ${T} ${b-i} ${c.y} L ${c.x} ${c.y}`:n.y<c.y?`M ${n.x} ${n.y} L ${n.x} ${y-E} ${l} ${n.x+i} ${y} L ${c.x-E} ${y} ${T} ${c.x} ${y+i} L ${c.x} ${c.y}`:`M ${n.x} ${n.y} L ${n.x} ${y+E} ${T} ${n.x+i} ${y} L ${c.x-E} ${y} ${l} ${c.x} ${y-i} L ${c.x} ${c.y}`}else"TB"===A?(n.x<c.x&&(l="A 20 20, 0, 0, 0,",T="A 20 20, 0, 0, 1,",E=20,i=20,d=C[o.branch].index,p=`M ${n.x} ${n.y} L ${c.x-E} ${n.y} ${T} ${c.x} ${n.y+i} L ${c.x} ${c.y}`),n.x>c.x&&(l="A 20 20, 0, 0, 0,",T="A 20 20, 0, 0, 1,",E=20,i=20,d=C[a.branch].index,p=`M ${n.x} ${n.y} L ${n.x} ${c.y-E} ${T} ${n.x-i} ${c.y} L ${c.x} ${c.y}`),n.x===c.x&&(d=C[a.branch].index,p=`M ${n.x} ${n.y} L ${n.x+E} ${n.y} ${l} ${n.x+i} ${c.y+E} L ${c.x} ${c.y}`)):(n.y<c.y&&(l="A 20 20, 0, 0, 0,",E=20,i=20,d=C[o.branch].index,p=`M ${n.x} ${n.y} L ${n.x} ${c.y-E} ${l} ${n.x+i} ${c.y} L ${c.x} ${c.y}`),n.y>c.y&&(l="A 20 20, 0, 0, 0,",E=20,i=20,d=C[a.branch].index,p=`M ${n.x} ${n.y} L ${c.x-E} ${n.y} ${l} ${c.x} ${n.y-i} L ${c.x} ${c.y}`),n.y===c.y&&(d=C[a.branch].index,p=`M ${n.x} ${n.y} L ${n.x} ${c.y-E} ${l} ${n.x+i} ${c.y} L ${c.x} ${c.y}`));r.append("path").attr("d",p).attr("class","arrow arrow"+d%8)})(o,a[c],n,a)})})})(l,J),yt(l,J,!0),f.u.insertTitle(l,"gitTitleText",c.titleTopMargin,u.db.getDiagramTitle()),(0,f.y)(void 0,l,c.diagramPadding,c.useMaxWidth??n.useMaxWidth)}},styles:r=>`\n  .commit-id,\n  .commit-msg,\n  .branch-label {\n    fill: lightgrey;\n    color: lightgrey;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n  }\n  ${[0,1,2,3,4,5,6,7].map(a=>`\n        .branch-label${a} { fill: ${r["gitBranchLabel"+a]}; }\n        .commit${a} { stroke: ${r["git"+a]}; fill: ${r["git"+a]}; }\n        .commit-highlight${a} { stroke: ${r["gitInv"+a]}; fill: ${r["gitInv"+a]}; }\n        .label${a}  { fill: ${r["git"+a]}; }\n        .arrow${a} { stroke: ${r["git"+a]}; }\n        `).join("\n")}\n\n  .branch {\n    stroke-width: 1;\n    stroke: ${r.lineColor};\n    stroke-dasharray: 2;\n  }\n  .commit-label { font-size: ${r.commitLabelFontSize}; fill: ${r.commitLabelColor};}\n  .commit-label-bkg { font-size: ${r.commitLabelFontSize}; fill: ${r.commitLabelBackground}; opacity: 0.5; }\n  .tag-label { font-size: ${r.tagLabelFontSize}; fill: ${r.tagLabelColor};}\n  .tag-label-bkg { fill: ${r.tagLabelBackground}; stroke: ${r.tagLabelBorder}; }\n  .tag-hole { fill: ${r.textColor}; }\n\n  .commit-merge {\n    stroke: ${r.primaryColor};\n    fill: ${r.primaryColor};\n  }\n  .commit-reverse {\n    stroke: ${r.primaryColor};\n    fill: ${r.primaryColor};\n    stroke-width: 3;\n  }\n  .commit-highlight-outer {\n  }\n  .commit-highlight-inner {\n    stroke: ${r.primaryColor};\n    fill: ${r.primaryColor};\n  }\n\n  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}\n  .gitTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${r.textColor};\n  }\n`}}}]);