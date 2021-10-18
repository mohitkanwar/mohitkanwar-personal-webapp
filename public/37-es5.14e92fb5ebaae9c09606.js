!function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}(self.webpackChunkang2_mohitkanwar=self.webpackChunkang2_mohitkanwar||[]).push([[37],{9037:function(e,i,n){n.r(i),n.d(i,{EditorModule:function(){return y}});var o,a=n(3216),c=n(8002),u=n(5304),s=n(3018),l=n(1764),f=((o=function(){function e(r,i,n){t(this,e),this.articlesService=r,this.router=i,this.userService=n}return r(e,[{key:"resolve",value:function(t,e){var r=this;return this.articlesService.get(t.params.slug).pipe((0,c.U)(function(t){if(r.userService.getCurrentUser().username===t.author.username)return t;r.router.navigateByUrl("/")}),(0,u.K)(function(t){return r.router.navigateByUrl("/")}))}}]),e}()).\u0275fac=function(t){return new(t||o)(s.LFG(a.JU),s.LFG(l.F0),s.LFG(a.KD))},o.\u0275prov=s.Yz7({token:o,factory:o.\u0275fac}),o),p=n(2042),g=n(665),h=n(6860),d=n(8583);function m(t,e){if(1&t){var r=s.EpF();s.TgZ(0,"span",15),s.TgZ(1,"i",16),s.NdJ("click",function(){var t=s.CHM(r).$implicit;return s.oxw().removeTag(t)}),s.qZA(),s._uU(2),s.qZA()}if(2&t){var i=e.$implicit;s.xp6(2),s.hij(" ",i," ")}}var v=function(){var e=function(){function e(r,i,n,o){t(this,e),this.articlesService=r,this.route=i,this.router=n,this.fb=o,this.article={},this.tagField=new g.NI,this.errors={},this.isSubmitting=!1,this.articleForm=this.fb.group({title:"",description:"",body:""}),this.article.tagList=[]}return r(e,[{key:"ngOnInit",value:function(){var t=this;this.route.data.subscribe(function(e){e.article&&(t.article=e.article,t.articleForm.patchValue(e.article))})}},{key:"addTag",value:function(){var t=this.tagField.value;this.article.tagList.indexOf(t)<0&&this.article.tagList.push(t),this.tagField.reset("")}},{key:"removeTag",value:function(t){this.article.tagList=this.article.tagList.filter(function(e){return e!==t})}},{key:"submitForm",value:function(){var t=this;this.isSubmitting=!0,this.updateArticle(this.articleForm.value),this.articlesService.save(this.article).subscribe(function(e){return t.router.navigateByUrl("/article/"+e.slug)},function(e){t.errors=e,t.isSubmitting=!1})}},{key:"updateArticle",value:function(t){Object.assign(this.article,t)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(s.Y36(a.JU),s.Y36(l.gz),s.Y36(l.F0),s.Y36(g.qu))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-editor-page"]],decls:20,vars:5,consts:[[1,"editor-page"],[1,"container","page"],[1,"row"],[1,"col-md-10","offset-md-1","col-xs-12"],[3,"errors"],[3,"formGroup"],[3,"disabled"],[1,"form-group"],["formControlName","title","type","text","placeholder","Article Title",1,"form-control","form-control-lg"],["formControlName","description","type","text","placeholder","What's this article about?",1,"form-control"],["formControlName","body","rows","8","placeholder","Write your article (in markdown)",1,"form-control"],["type","text","placeholder","Enter tags",1,"form-control",3,"formControl","keyup.enter"],[1,"tag-list"],["class","tag-default tag-pill",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-lg","pull-xs-right","btn-primary",3,"click"],[1,"tag-default","tag-pill"],[1,"ion-close-round",3,"click"]],template:function(t,e){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"div",3),s._UZ(4,"app-list-errors",4),s.TgZ(5,"form",5),s.TgZ(6,"fieldset",6),s.TgZ(7,"fieldset",7),s._UZ(8,"input",8),s.qZA(),s.TgZ(9,"fieldset",7),s._UZ(10,"input",9),s.qZA(),s.TgZ(11,"fieldset",7),s.TgZ(12,"textarea",10),s._uU(13,"              "),s.qZA(),s.qZA(),s.TgZ(14,"fieldset",7),s.TgZ(15,"input",11),s.NdJ("keyup.enter",function(){return e.addTag()}),s.qZA(),s.TgZ(16,"div",12),s.YNc(17,m,3,1,"span",13),s.qZA(),s.qZA(),s.TgZ(18,"button",14),s.NdJ("click",function(){return e.submitForm()}),s._uU(19," Publish Article "),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(4),s.Q6J("errors",e.errors),s.xp6(1),s.Q6J("formGroup",e.articleForm),s.xp6(1),s.Q6J("disabled",e.isSubmitting),s.xp6(9),s.Q6J("formControl",e.tagField),s.xp6(2),s.Q6J("ngForOf",e.article.tagList))},directives:[h.S,g._Y,g.JL,g.sg,g.Fj,g.JJ,g.u,g.oH,d.sg],encapsulation:2}),e}(),Z=[{path:"",component:v,canActivate:[a.a1]},{path:":slug",component:v,canActivate:[a.a1],resolve:{article:f}}],b=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[l.Bz.forChild(Z)],l.Bz]}),e}(),y=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({providers:[f],imports:[[p.m8,b]]}),e}()}}])}();