(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{f0JH:function(n,l,s){"use strict";s.r(l);var u=s("8Y7J");class i{}var t=s("pMnS"),o=s("SVse");s("o0su");class r{constructor(n){this._githubControllerService=n,this.repositories=[],this._subscriptions=[]}ngOnInit(){this._subscriptions.push(this._githubControllerService.myRepositories.subscribe(n=>{this.repositories=n})),this._githubControllerService.requestMyRepositories()}ngOnDestroy(){this._subscriptions.forEach(n=>{n.unsubscribe()})}}var b=s("tbI/"),e=u.kb({encapsulation:0,styles:[[""]],data:{}});function c(n){return u.zb(0,[(n()(),u.mb(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u.yb(1,null,[" "," "]))],null,function(n,l){n(l,1,0,l.context.$implicit.name)})}function p(n){return u.zb(0,[(n()(),u.mb(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),u.yb(-1,null,[" repositories works!\n"])),(n()(),u.db(16777216,null,null,1,null,c)),u.lb(3,278528,null,0,o.h,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,3,0,l.component.repositories)},null)}function a(n){return u.zb(0,[(n()(),u.mb(0,0,null,null,1,"app-repositories",[],null,null,null,p,e)),u.lb(1,245760,null,0,r,[b.a],null,null)],function(n,l){n(l,1,0)},null)}var h=u.ib("app-repositories",r,a,{},{},[]),f=s("IheW"),g=s("iInd"),d=s("PCNd");class m{}s.d(l,"RepositoriesModuleNgFactory",function(){return k});var k=u.jb(i,[],function(n){return u.rb([u.sb(512,u.j,u.Y,[[8,[t.a,h]],[3,u.j],u.v]),u.sb(4608,o.k,o.j,[u.s,[2,o.q]]),u.sb(4608,f.h,f.n,[o.c,u.z,f.l]),u.sb(4608,f.o,f.o,[f.h,f.m]),u.sb(5120,f.a,function(n){return[n]},[f.o]),u.sb(4608,f.k,f.k,[]),u.sb(6144,f.i,null,[f.k]),u.sb(4608,f.g,f.g,[f.i]),u.sb(6144,f.b,null,[f.g]),u.sb(4608,f.f,f.j,[f.b,u.p]),u.sb(4608,f.c,f.c,[f.f]),u.sb(1073742336,o.b,o.b,[]),u.sb(1073742336,g.n,g.n,[[2,g.t],[2,g.k]]),u.sb(1073742336,f.e,f.e,[]),u.sb(1073742336,f.d,f.d,[]),u.sb(1073742336,d.a,d.a,[]),u.sb(1073742336,m,m,[]),u.sb(1073742336,i,i,[]),u.sb(256,f.l,"XSRF-TOKEN",[]),u.sb(256,f.m,"X-XSRF-TOKEN",[]),u.sb(1024,g.i,function(){return[[{path:"",component:r}]]},[])])})}}]);