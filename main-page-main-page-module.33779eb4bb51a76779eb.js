(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{IpKO:function(e,t,n){"use strict";n.r(t),n.d(t,"MainPageModule",(function(){return d}));var r=n("ofXK"),a=n("tyNb"),i=n("fXoL");let o=(()=>{class e{}return Object.defineProperty(e,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:function(t){return new(t||e)}}),Object.defineProperty(e,"\u0275cmp",{enumerable:!0,configurable:!0,writable:!0,value:i.zb({type:e,selectors:[["app-title"]],decls:6,vars:0,consts:[[1,"title"],[1,"title__text-container"],[1,"title__name"],[1,"title__position"]],template:function(e,t){1&e&&(i.Ib(0,"section",0),i.Ib(1,"section",1),i.Ib(2,"h1",2),i.Wb(3," Fedor Usakov "),i.Hb(),i.Ib(4,"h2",3),i.Wb(5," Leading Frontend Developer at SNH MeisterSoft "),i.Hb(),i.Hb(),i.Hb())},styles:["[_nghost-%COMP%]{display:block;position:absolute;z-index:1;top:0;left:0}.title[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%}.title[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end;justify-content:center;padding:1rem;box-sizing:border-box;color:hsla(0,0%,100%,.9)}.title__name[_ngcontent-%COMP%]{margin:0 0 .25rem}.title__position[_ngcontent-%COMP%]{font-size:1.09375rem}.title__text-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}"],changeDetection:0})}),e})();var l=n("UXun"),c=n("lJxs"),b=n("tk/3");let s=(()=>{class e{constructor(e){Object.defineProperty(this,"httpClient",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"assetsLocation",{enumerable:!0,configurable:!0,writable:!0,value:"/assets"})}getMainPageBackgroundImage(){return this.getFile("images/main-page-background.jpg")}getFile(e){return this.httpClient.get(`${this.assetsLocation}/${e}`,{responseType:"blob"})}}return Object.defineProperty(e,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:function(t){return new(t||e)(i.Kb(b.a))}}),Object.defineProperty(e,"\u0275prov",{enumerable:!0,configurable:!0,writable:!0,value:i.Bb({token:e,factory:e.\u0275fac,providedIn:"root"})}),e})();var u=n("jhN1");let p=(()=>{class e{constructor(e,t){Object.defineProperty(this,"assetsRequestsService",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"domSanitizer",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"image$",{enumerable:!0,configurable:!0,writable:!0,value:this.assetsRequestsService.getMainPageBackgroundImage().pipe(Object(l.a)(1))}),Object.defineProperty(this,"imageUrl$",{enumerable:!0,configurable:!0,writable:!0,value:this.image$.pipe(Object(c.a)(e=>URL.createObjectURL(e)),Object(l.a)(1))}),Object.defineProperty(this,"backgroundImageSafeStyle$",{enumerable:!0,configurable:!0,writable:!0,value:this.imageUrl$.pipe(Object(c.a)(e=>this.domSanitizer.bypassSecurityTrustStyle(`url(${e})`)),Object(l.a)(1))})}}return Object.defineProperty(e,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:function(t){return new(t||e)(i.Fb(s),i.Fb(u.b))}}),Object.defineProperty(e,"\u0275cmp",{enumerable:!0,configurable:!0,writable:!0,value:i.zb({type:e,selectors:[["app-background"]],decls:2,vars:4,consts:[[1,"background"]],template:function(e,t){1&e&&(i.Ib(0,"section",0),i.Qb(1,"async"),i.Hb()),2&e&&i.Vb("background-image",i.Rb(1,2,t.backgroundImageSafeStyle$),i.yb)},pipes:[r.b],styles:["[_nghost-%COMP%]{display:block;position:absolute;z-index:-1;top:0;left:0}.background[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%;height:100%}.background[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;background-size:cover}"],changeDetection:0})}),e})();const g=[{path:"",component:(()=>{class e{}return Object.defineProperty(e,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:function(t){return new(t||e)}}),Object.defineProperty(e,"\u0275cmp",{enumerable:!0,configurable:!0,writable:!0,value:i.zb({type:e,selectors:[["app-main-page"]],decls:2,vars:0,template:function(e,t){1&e&&(i.Gb(0,"app-title"),i.Gb(1,"app-background"))},directives:[o,p],styles:[""],changeDetection:0})}),e})()}];let f=(()=>{class e{}return Object.defineProperty(e,"\u0275mod",{enumerable:!0,configurable:!0,writable:!0,value:i.Db({type:e})}),Object.defineProperty(e,"\u0275inj",{enumerable:!0,configurable:!0,writable:!0,value:i.Cb({factory:function(t){return new(t||e)},imports:[[a.e.forChild(g)],a.e]})}),e})(),d=(()=>{class e{}return Object.defineProperty(e,"\u0275mod",{enumerable:!0,configurable:!0,writable:!0,value:i.Db({type:e})}),Object.defineProperty(e,"\u0275inj",{enumerable:!0,configurable:!0,writable:!0,value:i.Cb({factory:function(t){return new(t||e)},imports:[[r.c,f]]})}),e})()}}]);