(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{0:function(e,t,n){e.exports=n("zUnb")},zUnb:function(e,t,n){"use strict";n.r(t);var o=n("fXoL"),r=n("tk/3"),a=n("R1ws"),i=n("tyNb"),c=n("Cfvw"),l=n("wO+i");const u=[{path:"",pathMatch:"prefix",loadChildren:()=>Object(c.a)(n.e(4).then(n.bind(null,"dgmN"))).pipe(Object(l.a)("PagesModule"))}];let b=(()=>{class e{}return Object.defineProperty(e,"\u0275mod",{enumerable:!0,configurable:!0,writable:!0,value:o.Eb({type:e})}),Object.defineProperty(e,"\u0275inj",{enumerable:!0,configurable:!0,writable:!0,value:o.Db({factory:function(t){return new(t||e)},imports:[[i.e.forRoot(u,{initialNavigation:!0})],i.e]})}),e})();function s(e){return null==e}var f=n("pLZG");function p(e){return t=>t.pipe(Object(f.a)(t=>t instanceof e))}function d(){return e=>e.pipe(Object(f.a)(e=>!s(e)))}n("vkgz");var h=n("quSY"),g=n("PZkE"),O=n("UXun"),m=n("lJxs"),v=n("eIep");let w=(()=>{class e{constructor(e,t,n){Object.defineProperty(this,"router",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"activatedRoute",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"changeDetectorRef",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(this,"subscription",{enumerable:!0,configurable:!0,writable:!0,value:new h.a}),Object.defineProperty(this,"navigationEndEvents$",{enumerable:!0,configurable:!0,writable:!0,value:this.router.events.pipe(d(),p(i.d),p(i.b),Object(g.a)("url"),Object(O.a)(1))}),Object.defineProperty(this,"deepestActivatedRoute$",{enumerable:!0,configurable:!0,writable:!0,value:this.navigationEndEvents$.pipe(Object(m.a)(()=>this.activatedRoute),d(),Object(m.a)(e=>function e(t){const n=s(t)?null:t.firstChild;return s(n)?t:e(n)}(e)),d())}),Object.defineProperty(this,"deepestActivatedRouteData$",{enumerable:!0,configurable:!0,writable:!0,value:this.deepestActivatedRoute$.pipe(Object(v.a)(e=>e.data))})}ngOnInit(){this.changeDetectorRef.detach()}ngAfterViewInit(){this.changeDetectorRef.detectChanges()}ngOnDestroy(){this.subscription.unsubscribe()}}return Object.defineProperty(e,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:function(t){return new(t||e)(o.Gb(i.c),o.Gb(i.a),o.Gb(o.h))}}),Object.defineProperty(e,"\u0275cmp",{enumerable:!0,configurable:!0,writable:!0,value:o.Ab({type:e,selectors:[["app-root"]],decls:2,vars:0,consts:[[1,"layout"]],template:function(e,t){1&e&&(o.Jb(0,"main",0),o.Hb(1,"router-outlet"),o.Ib())},directives:[i.f],styles:['@import url("https://fonts.googleapis.com/css2?family=Baloo+Bhai+2&family=Baloo+Chettan+2:wght@400;500[_ngcontent-%COMP%];600[_ngcontent-%COMP%];700[_ngcontent-%COMP%];800&display=swap")[_ngcontent-%COMP%];[_ngcontent-%COMP%]::selection{background-color:#ff9d9d;color:#fff}html[_ngcontent-%COMP%]{font-size:16px}@media only screen and (min-width:640px) and (max-width:1024px){html[_ngcontent-%COMP%]{font-size:1.5625vw}}@media only screen and (max-width:639px){html[_ngcontent-%COMP%]{font-size:10px}}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{all:unset;line-height:100%}h1[_ngcontent-%COMP%]{font-family:Baloo Chettan\\ 2,cursive;font-size:4rem}h2[_ngcontent-%COMP%]{font-family:Baloo Bhai\\ 2,cursive}.layout[_ngcontent-%COMP%]{all:unset;top:0;right:0;bottom:0;left:0;position:fixed;display:block;overflow:hidden auto}']})}),e})(),y=(()=>{class e{}return Object.defineProperty(e,"\u0275mod",{enumerable:!0,configurable:!0,writable:!0,value:o.Eb({type:e,bootstrap:[w]})}),Object.defineProperty(e,"\u0275inj",{enumerable:!0,configurable:!0,writable:!0,value:o.Db({factory:function(t){return new(t||e)},providers:[],imports:[[a.a,r.b,b]]})}),e})();var P=n("jhN1");Object(o.R)(),P.c().bootstrapModule(y,{defaultEncapsulation:o.O.ShadowDom}).catch(e=>console.error(e))},zn8P:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="zn8P"}},[[0,0,7]]]);