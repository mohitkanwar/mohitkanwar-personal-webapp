(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{cRhG:function(e,t,i){"use strict";i.r(t),i.d(t,"ProfileModule",function(){return k});var r=i("ey9i"),n=i("JIr8"),o=i("fXoL"),s=i("tyNb");let c=(()=>{class e{constructor(e,t){this.profilesService=e,this.router=t}resolve(e,t){return this.profilesService.get(e.params.username).pipe(Object(n.a)(e=>this.router.navigateByUrl("/")))}}return e.\u0275fac=function(t){return new(t||e)(o.Pb(r.d),o.Pb(s.c))},e.\u0275prov=o.Eb({token:e,factory:e.\u0275fac}),e})();var a=i("M0ag"),l=i("juF/");let u=(()=>{class e{constructor(e,t){this.route=e,this.router=t,this.articlesConfig={type:"all",filters:{}}}ngOnInit(){this.route.parent.data.subscribe(e=>{this.profile=e.profile,this.articlesConfig={type:"all",filters:{}},this.articlesConfig.filters.author=this.profile.username})}}return e.\u0275fac=function(t){return new(t||e)(o.Ib(s.a),o.Ib(s.c))},e.\u0275cmp=o.Cb({type:e,selectors:[["app-profile-articles"]],decls:1,vars:2,consts:[[3,"limit","config"]],template:function(e,t){1&e&&o.Jb(0,"app-article-list",0),2&e&&o.ac("limit",10)("config",t.articlesConfig)},directives:[l.a],encapsulation:2}),e})(),b=(()=>{class e{constructor(e,t){this.route=e,this.router=t,this.favoritesConfig={type:"all",filters:{}}}ngOnInit(){this.route.parent.data.subscribe(e=>{this.profile=e.profile,this.favoritesConfig.filters.favorited=this.profile.username})}}return e.\u0275fac=function(t){return new(t||e)(o.Ib(s.a),o.Ib(s.c))},e.\u0275cmp=o.Cb({type:e,selectors:[["app-profile-favorites"]],decls:1,vars:2,consts:[[3,"limit","config"]],template:function(e,t){1&e&&o.Jb(0,"app-article-list",0),2&e&&o.ac("limit",10)("config",t.favoritesConfig)},directives:[l.a],encapsulation:2}),e})();var f=i("bOdf"),p=i("vkgz"),v=i("UCte");const d=function(){return["/settings"]},h=function(){return{exact:!0}},g=function(e){return["/profile",e]},m=function(e){return["/profile",e,"favorites"]},L=[{path:":username",component:(()=>{class e{constructor(e,t){this.route=e,this.userService=t}ngOnInit(){this.route.data.pipe(Object(f.a)(e=>(this.profile=e.profile,this.userService.currentUser.pipe(Object(p.a)(e=>{this.currentUser=e,this.isUser=this.currentUser.username===this.profile.username}))))).subscribe()}onToggleFollowing(e){this.profile.following=e}}return e.\u0275fac=function(t){return new(t||e)(o.Ib(s.a),o.Ib(r.f))},e.\u0275cmp=o.Cb({type:e,selectors:[["app-profile-page"]],decls:26,vars:18,consts:[[1,"profile-page"],[1,"user-info"],[1,"container"],[1,"row"],[1,"col-xs-12","col-md-10","offset-md-1"],[1,"user-img",3,"src"],[3,"hidden","profile","toggle"],[1,"btn","btn-sm","btn-outline-secondary","action-btn",3,"routerLink","hidden"],[1,"ion-gear-a"],[1,"articles-toggle"],[1,"nav","nav-pills","outline-active"],[1,"nav-item"],["routerLinkActive","active",1,"nav-link",3,"routerLinkActiveOptions","routerLink"]],template:function(e,t){1&e&&(o.Lb(0,"div",0),o.Lb(1,"div",1),o.Lb(2,"div",2),o.Lb(3,"div",3),o.Lb(4,"div",4),o.Jb(5,"img",5),o.Lb(6,"h4"),o.kc(7),o.Kb(),o.Lb(8,"p"),o.kc(9),o.Kb(),o.Lb(10,"app-follow-button",6),o.Sb("toggle",function(e){return t.onToggleFollowing(e)}),o.Kb(),o.Lb(11,"a",7),o.Jb(12,"i",8),o.kc(13," Edit Profile Settings "),o.Kb(),o.Kb(),o.Kb(),o.Kb(),o.Kb(),o.Lb(14,"div",2),o.Lb(15,"div",3),o.Lb(16,"div",4),o.Lb(17,"div",9),o.Lb(18,"ul",10),o.Lb(19,"li",11),o.Lb(20,"a",12),o.kc(21," My Posts "),o.Kb(),o.Kb(),o.Lb(22,"li",11),o.Lb(23,"a",12),o.kc(24," Favorited Posts "),o.Kb(),o.Kb(),o.Kb(),o.Kb(),o.Jb(25,"router-outlet"),o.Kb(),o.Kb(),o.Kb(),o.Kb()),2&e&&(o.yb(5),o.ac("src",t.profile.image,o.hc),o.yb(2),o.lc(t.profile.username),o.yb(2),o.lc(t.profile.bio),o.yb(1),o.ac("hidden",t.isUser)("profile",t.profile),o.yb(1),o.ac("routerLink",o.bc(11,d))("hidden",!t.isUser),o.yb(9),o.ac("routerLinkActiveOptions",o.bc(12,h))("routerLink",o.cc(13,g,t.profile.username)),o.yb(3),o.ac("routerLinkActiveOptions",o.bc(15,h))("routerLink",o.cc(16,m,t.profile.username)))},directives:[v.a,s.e,s.d,s.g],encapsulation:2}),e})(),resolve:{profile:c},children:[{path:"",component:u},{path:"favorites",component:b}]}];let y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Gb({type:e}),e.\u0275inj=o.Fb({imports:[[s.f.forChild(L)],s.f]}),e})(),k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Gb({type:e}),e.\u0275inj=o.Fb({providers:[c],imports:[[a.a,y]]}),e})()}}]);