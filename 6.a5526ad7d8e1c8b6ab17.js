(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{f0JH:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class u{}var s=e("pMnS"),o=e("iInd");class i{constructor(){}ngOnInit(){}}var r=t.kb({encapsulation:0,styles:[[""]],data:{}});function c(l){return t.Cb(0,[(l()(),t.mb(0,0,null,null,3,"section",[["class","repository-tile"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t.ub(l,1).onClick()&&u),u},null,null)),t.lb(1,16384,null,0,o.l,[o.k,o.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),(l()(),t.mb(2,0,null,null,1,"header",[["class","repository-tile__header"]],null,null,null,null,null)),(l()(),t.Ab(3,null,[" "," "]))],function(l,n){l(n,1,0,"/repos/repository")},function(l,n){l(n,3,0,n.component.repository.name)})}class a{transform(l,n,e="name"){return n?l.filter(l=>l[e].toString().toLowerCase().includes(n.toLowerCase())):l}}class b{constructor(){this.placeholder="",this.onvaluechange=new t.m(!0),this._focused=!1}emitValue(l){this.onvaluechange.emit(new CustomEvent("valuewaschanged",{detail:l}))}getElementStyles(l){return getComputedStyle(l)}setFocused(l){this._focused=l}getFocused(){return this._focused}}var p=t.kb({encapsulation:0,styles:[[".search-input[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;align-items:center;justify-content:space-between;border-bottom:.05rem solid #b6b9ba;transition:all .3s}.search-input_focused[_ngcontent-%COMP%]{border-bottom:.05rem solid #ff5050}.search-input__field[_ngcontent-%COMP%]{background:0 0;border:none;outline:0;color:#f4f4f4}.search-input__button[_ngcontent-%COMP%]{all:unset;background-image:url(/assets/icons/magnifier.svg);background-position:center center;background-size:contain;background-repeat:no-repeat}"]],data:{}});function d(l){return t.Cb(0,[(l()(),t.mb(0,0,null,null,2,"section",[["class","search-input"]],[[2,"search-input_focused",null]],null,null,null,null)),(l()(),t.mb(1,0,[["inputBlock",1]],null,0,"input",[["class","search-input__field"],["type","text"]],[[8,"placeholder",0]],[[null,"keyup"],[null,"focus"],[null,"blur"]],function(l,n,e){var t=!0,u=l.component;return"keyup"===n&&(t=!1!==u.emitValue(e.currentTarget.value)&&t),"focus"===n&&(t=!1!==u.setFocused(!0)&&t),"blur"===n&&(t=!1!==u.setFocused(!1)&&t),t},null,null)),(l()(),t.mb(2,0,null,null,0,"button",[["class","search-input__button"]],[[4,"width",null],[4,"height",null]],null,null,null,null))],null,function(l,n){var e=n.component;l(n,0,0,e.getFocused()),l(n,1,0,e.placeholder),l(n,2,0,e.getElementStyles(t.ub(n,1)).height,e.getElementStyles(t.ub(n,1)).height)})}var h=e("SVse");e("o0su");class f{constructor(l){this._githubControllerService=l,this.repositories=[],this._subscriptions=[]}ngOnInit(){this._subscriptions.push(this._githubControllerService.myRepositories.subscribe(l=>{this.repositories=l})),this._githubControllerService.requestMyRepositories()}ngOnDestroy(){this._subscriptions.forEach(l=>{l.unsubscribe()})}setFilter(l){this._filterCondition=l}getFilter(){return this._filterCondition}}var g=e("tbI/"),m=t.kb({encapsulation:0,styles:[[".repositories-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;width:100%}.repositories-list__title[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:.5rem 0 1rem}.repositories-list__item[_ngcontent-%COMP%]{margin:0 0 .5rem;width:100%}.repositories-list__placeholder[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;width:100%;box-sizing:border-box;padding:.5rem 0;color:#b6b9ba;opacity:.3}"]],data:{}});function _(l){return t.Cb(0,[(l()(),t.mb(0,0,null,null,1,"app-repository-tile",[["class","repositories-list__item"]],null,null,null,c,r)),t.lb(1,114688,null,0,i,[],{repository:[0,"repository"]},null)],function(l,n){l(n,1,0,n.context.$implicit)},null)}function y(l){return t.Cb(0,[(l()(),t.mb(0,0,null,null,1,"section",[["class","repositories-list__placeholder"]],null,null,null,null,null)),(l()(),t.Ab(-1,null,[" No matches "]))],null,null)}function v(l){return t.Cb(0,[t.vb(0,a,[]),(l()(),t.mb(1,0,null,null,11,"section",[["class","repositories-list"]],null,null,null,null,null)),(l()(),t.mb(2,0,null,null,4,"header",[["class","repositories-list__title"]],null,null,null,null,null)),(l()(),t.mb(3,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Ab(-1,null,["Repositories"])),(l()(),t.mb(5,0,null,null,1,"app-search-input",[],null,[[null,"onvaluechange"]],function(l,n,e){var t=!0;return"onvaluechange"===n&&(t=!1!==l.component.setFilter(e.detail)&&t),t},d,p)),t.lb(6,49152,null,0,b,[],{placeholder:[0,"placeholder"]},{onvaluechange:"onvaluechange"}),(l()(),t.db(16777216,null,null,2,null,_)),t.lb(8,278528,null,0,h.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),t.xb(9,2),(l()(),t.db(16777216,null,null,2,null,y)),t.lb(11,16384,null,0,h.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),t.xb(12,2)],function(l,n){var e=n.component;l(n,6,0,"filter repositories");var u=t.Bb(n,8,0,l(n,9,0,t.ub(n,0),e.repositories,e.getFilter()));l(n,8,0,u);var s=0===t.Bb(n,11,0,l(n,12,0,t.ub(n,0),e.repositories,e.getFilter())).length;l(n,11,0,s)},null)}function C(l){return t.Cb(0,[(l()(),t.mb(0,0,null,null,1,"app-repositories",[],null,null,null,v,m)),t.lb(1,245760,null,0,f,[g.a],null,null)],function(l,n){l(n,1,0)},null)}var k=t.ib("app-repositories",f,C,{},{},[]),w=e("IheW"),x=e("PCNd");class F{}e.d(n,"RepositoriesModuleNgFactory",function(){return O});var O=t.jb(u,[],function(l){return t.rb([t.sb(512,t.j,t.Y,[[8,[s.a,k]],[3,t.j],t.v]),t.sb(4608,h.k,h.j,[t.s,[2,h.q]]),t.sb(4608,w.h,w.n,[h.c,t.z,w.l]),t.sb(4608,w.o,w.o,[w.h,w.m]),t.sb(5120,w.a,function(l){return[l]},[w.o]),t.sb(4608,w.k,w.k,[]),t.sb(6144,w.i,null,[w.k]),t.sb(4608,w.g,w.g,[w.i]),t.sb(6144,w.b,null,[w.g]),t.sb(4608,w.f,w.j,[w.b,t.p]),t.sb(4608,w.c,w.c,[w.f]),t.sb(1073742336,h.b,h.b,[]),t.sb(1073742336,o.o,o.o,[[2,o.u],[2,o.k]]),t.sb(1073742336,w.e,w.e,[]),t.sb(1073742336,w.d,w.d,[]),t.sb(1073742336,x.a,x.a,[]),t.sb(1073742336,F,F,[]),t.sb(1073742336,u,u,[]),t.sb(256,w.l,"XSRF-TOKEN",[]),t.sb(256,w.m,"X-XSRF-TOKEN",[]),t.sb(1024,o.i,function(){return[[{path:"",component:f},{path:"*",loadChildren:"@app/pages/repository/repository.module#RepositoryModule"}]]},[])])})}}]);