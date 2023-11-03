"use strict";(self.webpackChunkang2_mohitkanwar=self.webpackChunkang2_mohitkanwar||[]).push([[484],{6484:(A,u,o)=>{o.r(u),o.d(u,{EditorModule:()=>C});var n=o(2622),d=o(6124),h=o(2413),t=o(2948),l=o(9092);let p=(()=>{class e{constructor(r,i,s){this.articlesService=r,this.router=i,this.userService=s}resolve(r,i){return this.articlesService.get(r.params.slug).pipe((0,d.U)(s=>{if(this.userService.getCurrentUser().username===s.author.username)return s;this.router.navigateByUrl("/")}),(0,h.K)(s=>this.router.navigateByUrl("/")))}static#t=this.\u0275fac=function(i){return new(i||e)(t.LFG(n.JU),t.LFG(l.F0),t.LFG(n.KD))};static#r=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac})}return e})();var g=o(8554),a=o(285),f=o(6814),v=o(7520);function F(e,T){if(1&e){const r=t.EpF();t.TgZ(0,"span",15)(1,"i",16),t.NdJ("click",function(){const c=t.CHM(r).$implicit,b=t.oxw();return t.KtG(b.removeTag(c))}),t.qZA(),t._uU(2),t.qZA()}if(2&e){const r=T.$implicit;t.xp6(2),t.hij(" ",r," ")}}let m=(()=>{class e{constructor(r,i,s,c){this.articlesService=r,this.route=i,this.router=s,this.fb=c,this.article={},this.tagField=new a.p4,this.errors={},this.isSubmitting=!1,this.articleForm=this.fb.group({title:"",description:"",body:""}),this.article.tagList=[]}ngOnInit(){this.route.data.subscribe(r=>{r.article&&(this.article=r.article,this.articleForm.patchValue(r.article))})}addTag(){const r=this.tagField.value;this.article.tagList.indexOf(r)<0&&this.article.tagList.push(r),this.tagField.reset("")}removeTag(r){this.article.tagList=this.article.tagList.filter(i=>i!==r)}submitForm(){this.isSubmitting=!0,this.updateArticle(this.articleForm.value),this.articlesService.save(this.article).subscribe(r=>this.router.navigateByUrl("/article/"+r.slug),r=>{this.errors=r,this.isSubmitting=!1})}updateArticle(r){Object.assign(this.article,r)}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(n.JU),t.Y36(l.gz),t.Y36(l.F0),t.Y36(a.QS))};static#r=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-editor-page"]],decls:20,vars:5,consts:[[1,"editor-page"],[1,"container","page"],[1,"row"],[1,"col-md-10","offset-md-1","col-xs-12"],[3,"errors"],[3,"formGroup"],[3,"disabled"],[1,"form-group"],["formControlName","title","type","text","placeholder","Article Title",1,"form-control","form-control-lg"],["formControlName","description","type","text","placeholder","What's this article about?",1,"form-control"],["formControlName","body","rows","8","placeholder","Write your article (in markdown)",1,"form-control"],["type","text","placeholder","Enter tags",1,"form-control",3,"formControl","keyup.enter"],[1,"tag-list"],["class","tag-default tag-pill",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-lg","pull-xs-right","btn-primary",3,"click"],[1,"tag-default","tag-pill"],[1,"ion-close-round",3,"click"]],template:function(i,s){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"app-list-errors",4),t.TgZ(5,"form",5)(6,"fieldset",6)(7,"fieldset",7),t._UZ(8,"input",8),t.qZA(),t.TgZ(9,"fieldset",7),t._UZ(10,"input",9),t.qZA(),t.TgZ(11,"fieldset",7)(12,"textarea",10),t._uU(13,"              "),t.qZA()(),t.TgZ(14,"fieldset",7)(15,"input",11),t.NdJ("keyup.enter",function(){return s.addTag()}),t.qZA(),t.TgZ(16,"div",12),t.YNc(17,F,3,1,"span",13),t.qZA()(),t.TgZ(18,"button",14),t.NdJ("click",function(){return s.submitForm()}),t._uU(19," Publish Article "),t.qZA()()()()()()()),2&i&&(t.xp6(4),t.Q6J("errors",s.errors),t.xp6(1),t.Q6J("formGroup",s.articleForm),t.xp6(1),t.Q6J("disabled",s.isSubmitting),t.xp6(9),t.Q6J("formControl",s.tagField),t.xp6(2),t.Q6J("ngForOf",s.article.tagList))},dependencies:[f.sg,a._Y,a.Fj,a.JJ,a.JL,a.oH,a.sg,a.u,v.S],encapsulation:2})}return e})();const y=[{path:"",component:m,canActivate:[n.a1]},{path:":slug",component:m,canActivate:[n.a1],resolve:{article:p}}];let Z=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#r=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(y),l.Bz]})}return e})(),C=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#r=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({providers:[p],imports:[g.m8,Z]})}return e})()}}]);