(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{R0Qw:function(t,e,n){"use strict";function o(t){return null==t}n.d(e,"a",(function(){return o}))},UXun:function(t,e,n){"use strict";n.d(e,"a",(function(){return w}));var o=n("XNiG"),i=n("3N8a");class s extends i.a{constructor(t,e){super(t,e),this.scheduler=t,this.work=e}schedule(t,e=0){return e>0?super.schedule(t,e):(this.delay=e,this.state=t,this.scheduler.flush(this),this)}execute(t,e){return e>0||this.closed?super.execute(t,e):this._execute(t,e)}requestAsyncId(t,e,n=0){return null!==n&&n>0||null===n&&this.delay>0?super.requestAsyncId(t,e,n):t.flush(this)}}var r=n("IjjT");class a extends r.a{}const l=new a(s);var c=n("quSY"),u=n("7o/Q"),f=n("WMd4");class h extends u.a{constructor(t,e,n=0){super(t),this.scheduler=e,this.delay=n}static dispatch(t){const{notification:e,destination:n}=t;e.observe(n),this.unsubscribe()}scheduleMessage(t){this.destination.add(this.scheduler.schedule(h.dispatch,this.delay,new b(t,this.destination)))}_next(t){this.scheduleMessage(f.a.createNext(t))}_error(t){this.scheduleMessage(f.a.createError(t)),this.unsubscribe()}_complete(){this.scheduleMessage(f.a.createComplete()),this.unsubscribe()}}class b{constructor(t,e){this.notification=t,this.destination=e}}var d=n("9ppp"),p=n("Ylt2");class m extends o.a{constructor(t=Number.POSITIVE_INFINITY,e=Number.POSITIVE_INFINITY,n){super(),this.scheduler=n,this._events=[],this._infiniteTimeWindow=!1,this._bufferSize=t<1?1:t,this._windowTime=e<1?1:e,e===Number.POSITIVE_INFINITY?(this._infiniteTimeWindow=!0,this.next=this.nextInfiniteTimeWindow):this.next=this.nextTimeWindow}nextInfiniteTimeWindow(t){const e=this._events;e.push(t),e.length>this._bufferSize&&e.shift(),super.next(t)}nextTimeWindow(t){this._events.push(new y(this._getNow(),t)),this._trimBufferThenGetEvents(),super.next(t)}_subscribe(t){const e=this._infiniteTimeWindow,n=e?this._events:this._trimBufferThenGetEvents(),o=this.scheduler,i=n.length;let s;if(this.closed)throw new d.a;if(this.isStopped||this.hasError?s=c.a.EMPTY:(this.observers.push(t),s=new p.a(this,t)),o&&t.add(t=new h(t,o)),e)for(let r=0;r<i&&!t.closed;r++)t.next(n[r]);else for(let r=0;r<i&&!t.closed;r++)t.next(n[r].value);return this.hasError?t.error(this.thrownError):this.isStopped&&t.complete(),s}_getNow(){return(this.scheduler||l).now()}_trimBufferThenGetEvents(){const t=this._getNow(),e=this._bufferSize,n=this._windowTime,o=this._events,i=o.length;let s=0;for(;s<i&&!(t-o[s].time<n);)s++;return i>e&&(s=Math.max(s,i-e)),s>0&&o.splice(0,s),o}}class y{constructor(t,e){this.time=t,this.value=e}}function w(t,e,n){let o;return o=t&&"object"==typeof t?t:{bufferSize:t,windowTime:e,refCount:!1,scheduler:n},t=>t.lift(function({bufferSize:t=Number.POSITIVE_INFINITY,windowTime:e=Number.POSITIVE_INFINITY,refCount:n,scheduler:o}){let i,s,r=0,a=!1,l=!1;return function(c){let u;r++,!i||a?(a=!1,i=new m(t,e,o),u=i.subscribe(this),s=c.subscribe({next(t){i.next(t)},error(t){a=!0,i.error(t)},complete(){l=!0,s=void 0,i.complete()}})):u=i.subscribe(this),this.add(()=>{r--,u.unsubscribe(),s&&!l&&n&&0===r&&(s.unsubscribe(),s=void 0,i=void 0)})}}(o))}},WMd4:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n("EY2u"),i=n("LRne"),s=n("HDdC");let r=(()=>{class t{constructor(t,e,n){this.kind=t,this.value=e,this.error=n,this.hasValue="N"===t}observe(t){switch(this.kind){case"N":return t.next&&t.next(this.value);case"E":return t.error&&t.error(this.error);case"C":return t.complete&&t.complete()}}do(t,e,n){switch(this.kind){case"N":return t&&t(this.value);case"E":return e&&e(this.error);case"C":return n&&n()}}accept(t,e,n){return t&&"function"==typeof t.next?this.observe(t):this.do(t,e,n)}toObservable(){switch(this.kind){case"N":return Object(i.a)(this.value);case"E":return t=this.error,new s.a(e=>e.error(t));case"C":return Object(o.b)()}var t;throw new Error("unexpected notification kind value")}static createNext(e){return void 0!==e?new t("N",e):t.undefinedValueNotification}static createError(e){return new t("E",void 0,e)}static createComplete(){return t.completeNotification}}return t.completeNotification=new t("C"),t.undefinedValueNotification=new t("N",void 0),t})()},dgmN:function(t,e,n){"use strict";n.r(e),n.d(e,"PagesModule",(function(){return G}));var o=n("PCNd"),i=n("tyNb"),s=function(t){return t[t.Bottom=0]="Bottom",t[t.Top=1]="Top",t}({}),r=n("Cfvw"),a=n("wO+i"),l=n("itXk"),c=n("lJxs"),u=n("R0Qw"),f=n("pLZG"),h=n("D0XW"),b=n("l7GE"),d=n("ZUHj");class p{constructor(t){this.durationSelector=t}call(t,e){return e.subscribe(new m(t,this.durationSelector))}}class m extends b.a{constructor(t,e){super(t),this.durationSelector=e,this.hasValue=!1}_next(t){if(this.value=t,this.hasValue=!0,!this.throttled){let n;try{const{durationSelector:e}=this;n=e(t)}catch(e){return this.destination.error(e)}const o=Object(d.a)(this,n);!o||o.closed?this.clearThrottle():this.add(this.throttled=o)}}clearThrottle(){const{value:t,hasValue:e,throttled:n}=this;n&&(this.remove(n),this.throttled=null,n.unsubscribe()),e&&(this.value=null,this.hasValue=!1,this.destination.next(t))}notifyNext(t,e,n,o){this.clearThrottle()}notifyComplete(){this.clearThrottle()}}var y=n("HDdC"),w=n("DH7j");function v(t){return!Object(w.a)(t)&&t-parseFloat(t)+1>=0}var g=n("z+Ro");function B(t){const{index:e,period:n,subscriber:o}=t;if(o.next(e),!o.closed){if(-1===n)return o.complete();t.index=e+1,this.schedule(t,n)}}function x(t,e=h.a){return n=()=>function(t=0,e,n){let o=-1;return v(e)?o=Number(e)<1?1:Number(e):Object(g.a)(e)&&(n=e),Object(g.a)(n)||(n=h.a),new y.a(e=>{const i=v(t)?t:+t-n.now();return n.schedule(B,i,{index:0,period:o,subscriber:e})})}(t,e),function(t){return t.lift(new p(n))};var n}var C=n("eIep"),O=n("7o/Q");class _{constructor(t,e){this.compare=t,this.keySelector=e}call(t,e){return e.subscribe(new k(t,this.compare,this.keySelector))}}class k extends O.a{constructor(t,e,n){super(t),this.keySelector=n,this.hasKey=!1,"function"==typeof e&&(this.compare=e)}compare(t,e){return t===e}_next(t){let e;try{const{keySelector:n}=this;e=n?n(t):t}catch(o){return this.destination.error(o)}let n=!1;if(this.hasKey)try{const{compare:t}=this;n=t(this.key,e)}catch(o){return this.destination.error(o)}else this.hasKey=!0;n||(this.key=e,this.destination.next(t))}}var P=n("UXun"),j=n("fXoL"),N=n("ofXK"),E=n("LRne");class I{constructor(t){this.value=t}call(t,e){return e.subscribe(new S(t,this.value))}}class S extends O.a{constructor(t,e){super(t),this.value=e}_next(t){this.destination.next(this.value)}}var T=n("IzEk"),M=n("quSY"),z=n("2Vo4"),R=n("GU7r");const A=["contentElement"],L=["*"];let H=(()=>{class t{constructor(t){Object.defineProperty(this,"document",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"subscription",{enumerable:!0,configurable:!0,writable:!0,value:new M.a}),Object.defineProperty(this,"isActive",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"disabled",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"contentElementRef",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"isMouseOver$",{enumerable:!0,configurable:!0,writable:!0,value:new z.a(!1)}),Object.defineProperty(this,"currentContentWidthPx$",{enumerable:!0,configurable:!0,writable:!0,value:new z.a(null)}),Object.defineProperty(this,"currentContentHeightPx$",{enumerable:!0,configurable:!0,writable:!0,value:new z.a(null)})}processResize(){this.updateContentSize()}processClick(t){this.disabled&&(t.stopPropagation(),t.preventDefault())}ngOnInit(){this.updateContentSizeOnFontsLoadIsDone()}ngAfterContentInit(){this.updateContentSize()}ngOnDestroy(){this.subscription.unsubscribe()}processContentMutation(){this.updateContentSize()}processMouseEnter(){this.isMouseOver$.next(!0)}processMouseLeave(){this.isMouseOver$.next(!1)}updateContentSizeOnFontsLoadIsDone(){var t,e;this.subscription.add((t=this.document,!Object(u.a)(t)&&function(t){return"fonts"in t}(t)&&"object"==typeof(e=t.fonts)&&!Object(u.a)(e)&&"ready"in e?Object(r.a)(t.fonts.ready).pipe(t=>t.lift(new I(!0)),Object(T.a)(1)):Object(E.a)(!1)).pipe(Object(T.a)(1)).subscribe(()=>{this.updateContentSize()}))}updateContentSize(){if(void 0===this.contentElementRef)return;const t=this.contentElementRef.nativeElement.getBoundingClientRect(),{width:e,height:n}=t;this.currentContentHeightPx$.next(n),this.currentContentWidthPx$.next(e)}}return Object.defineProperty(t,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:function(e){return new(e||t)(j.Eb(N.d))}}),Object.defineProperty(t,"\u0275cmp",{enumerable:!0,configurable:!0,writable:!0,value:j.yb({type:t,selectors:[["app-button"]],viewQuery:function(t,e){var n;1&t&&j.ac(A,!0),2&t&&j.Vb(n=j.Nb())&&(e.contentElementRef=n.first)},hostBindings:function(t,e){1&t&&j.Mb("resize",(function(){return e.processResize()}),!1,j.Xb)("click",(function(t){return e.processClick(t)}))},inputs:{isActive:"isActive",disabled:"disabled"},ngContentSelectors:L,decls:10,vars:24,consts:[[1,"button"],[1,"button__content",3,"cdkObserveContent"],["contentElement",""],[1,"button__background",3,"mouseenter","mouseleave"]],template:function(t,e){1&t&&(j.Sb(),j.Hb(0,"button",0),j.Pb(1,"async"),j.Pb(2,"async"),j.Pb(3,"async"),j.Hb(4,"div",1,2),j.Mb("cdkObserveContent",(function(){return e.processContentMutation()})),j.Rb(6),j.Gb(),j.Hb(7,"div",3),j.Mb("mouseenter",(function(){return e.processMouseEnter()}))("mouseleave",(function(){return e.processMouseLeave()})),j.Pb(8,"async"),j.Pb(9,"async"),j.Gb(),j.Gb()),2&t&&(j.bc("width",j.Qb(1,14,e.currentContentWidthPx$),"px")("height",j.Qb(2,16,e.currentContentHeightPx$),"px"),j.wb("button_hovered",j.Qb(3,18,e.isMouseOver$))("button_active",e.isActive)("button_disabled",e.disabled),j.ub(7),j.bc("width",j.Qb(8,20,e.currentContentWidthPx$),"px")("height",j.Qb(9,22,e.currentContentHeightPx$),"px"))},directives:[R.a],pipes:[N.b],styles:["@font-face{font-family:Baloo Bhai\\ 2;src:url(/assets/fonts/baloo-bhai-2/BalooBhai2-ExtraBold.ttf);font-weight:800;font-style:normal;font-display:swap}@font-face{font-family:Baloo Bhai\\ 2;src:url(/assets/fonts/baloo-bhai-2/BalooBhai2-Bold.ttf);font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:Baloo Bhai\\ 2;src:url(/assets/fonts/baloo-bhai-2/BalooBhai2-SemiBold.ttf);font-weight:600;font-style:normal;font-display:swap}@font-face{font-family:Baloo Bhai\\ 2;src:url(/assets/fonts/baloo-bhai-2/BalooBhai2-Medium.ttf);font-weight:500;font-style:normal;font-display:swap}@font-face{font-family:Baloo Bhai\\ 2;src:url(/assets/fonts/baloo-bhai-2/BalooBhai2-Regular.ttf);font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:Baloo Chettan\\ 2;src:url(/assets/fonts/baloo-chettan-2/BalooChettan2-ExtraBold.ttf);font-weight:800;font-style:normal;font-display:swap}@font-face{font-family:Baloo Chettan\\ 2;src:url(/assets/fonts/baloo-chettan-2/BalooChettan2-Bold.ttf);font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:Baloo Chettan\\ 2;src:url(/assets/fonts/baloo-chettan-2/BalooChettan2-SemiBold.ttf);font-weight:600;font-style:normal;font-display:swap}@font-face{font-family:Baloo Chettan\\ 2;src:url(/assets/fonts/baloo-chettan-2/BalooChettan2-Medium.ttf);font-weight:500;font-style:normal;font-display:swap}@font-face{font-family:Baloo Chettan\\ 2;src:url(/assets/fonts/baloo-chettan-2/BalooChettan2-Regular.ttf);font-weight:400;font-style:normal;font-display:swap}::selection{background-color:#ff9d9d;color:#fff}html{font-size:16px;font-family:Baloo Bhai\\ 2,cursive;background:#010101}@media only screen and (min-width:640px) and (max-width:1024px){html{font-size:calc(100vw / 64)}}@media only screen and (max-width:639px){html{font-size:10px}}h1,h2{all:unset;line-height:100%}h1{font-family:Baloo Chettan\\ 2,cursive;font-size:4rem}h2{font-family:Baloo Bhai\\ 2,cursive}*{box-sizing:border-box}:host{display:block}.button{all:unset;position:relative;z-index:0;overflow:visible;cursor:pointer}.button__content{transform:translate(.25rem,-.25rem);padding:.5rem 1.5rem;z-index:1;transition:all .125s ease-out;background:#fff;color:#010101;white-space:nowrap;text-transform:uppercase;font-family:Baloo Chettan\\ 2,cursive;font-size:1rem;font-weight:500;pointer-events:none}.button__background,.button__content{position:absolute;top:0;left:0;border-radius:.125rem;border:.075rem solid #fff}.button__background{z-index:0}.button_hovered .button__content{transform:translate(0)}.button_active .button__content{background-color:#ff5050;border-color:#ff5050;transform:translate(0);color:#fff}.button_disabled{pointer-events:none;cursor:not-allowed}.button_disabled .button__background{border:.075rem solid #b3b3b3}.button_disabled .button__content{background-color:#b3b3b3;border-color:#b3b3b3;color:#000}.button_disabled .button_active .button__content{background-color:#b60000;border-color:#b60000;color:#b3b3b3}"],encapsulation:3,changeDetection:0})}),t})();const W=function(){return{exact:!0}};function $(t,e){if(1&t&&(j.Hb(0,"a",2,3),j.Hb(2,"app-button",4),j.dc(3),j.Gb(),j.Gb()),2&t){const t=e.$implicit,n=j.Wb(1);j.Tb("routerLink",t.url)("routerLinkActiveOptions",j.Ub(5,W)),j.ub(2),j.Tb("isActive",n.isActive)("disabled",t.disabled),j.ub(1),j.ec(" ",t.title," ")}}let K=(()=>{class t{constructor(t){Object.defineProperty(this,"router",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"position",{enumerable:!0,configurable:!0,writable:!0,value:s.Bottom}),Object.defineProperty(this,"navigationPosition",{enumerable:!0,configurable:!0,writable:!0,value:s}),Object.defineProperty(this,"links",{enumerable:!0,configurable:!0,writable:!0,value:[{title:"[M] Main",url:"/",disabled:!1,keyboardCode:"KeyM"},{title:"[S] Skills",url:"/skills",disabled:!0,keyboardCode:"KeyS"},{title:"[C] Contacts",url:"/contacts",disabled:!1,keyboardCode:"KeyC"},{title:"[H] Home projects",url:"/home-projects",disabled:!0,keyboardCode:"KeyH"}]}),Object.defineProperty(this,"usedKeyboardCodes",{enumerable:!0,configurable:!0,writable:!0,value:new Set(this.links.map(t=>t.keyboardCode))})}processKeyPress(t){const e=t.code;if(!this.usedKeyboardCodes.has(e))return;const n=this.links.find(t=>t.keyboardCode===e);void 0===n||n.disabled||this.router.navigateByUrl(n.url)}}return Object.defineProperty(t,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:function(e){return new(e||t)(j.Eb(i.c))}}),Object.defineProperty(t,"\u0275cmp",{enumerable:!0,configurable:!0,writable:!0,value:j.yb({type:t,selectors:[["app-navigation"]],hostBindings:function(t,e){1&t&&j.Mb("keypress",(function(t){return e.processKeyPress(t)}),!1,j.Xb)},inputs:{position:"position"},decls:2,vars:3,consts:[[1,"links"],["class","links__item","routerLinkActive","",3,"routerLink","routerLinkActiveOptions",4,"ngFor","ngForOf"],["routerLinkActive","",1,"links__item",3,"routerLink","routerLinkActiveOptions"],["routerLinkActiveRef","routerLinkActive"],[3,"isActive","disabled"]],template:function(t,e){1&t&&(j.Hb(0,"nav",0),j.cc(1,$,4,6,"a",1),j.Gb()),2&t&&(j.wb("links_top",e.position===e.navigationPosition.Top),j.ub(1),j.Tb("ngForOf",e.links))},directives:[N.i,i.e,i.d,H],styles:["@font-face{font-family:Baloo Bhai\\ 2;src:url(/assets/fonts/baloo-bhai-2/BalooBhai2-ExtraBold.ttf);font-weight:800;font-style:normal;font-display:swap}@font-face{font-family:Baloo Bhai\\ 2;src:url(/assets/fonts/baloo-bhai-2/BalooBhai2-Bold.ttf);font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:Baloo Bhai\\ 2;src:url(/assets/fonts/baloo-bhai-2/BalooBhai2-SemiBold.ttf);font-weight:600;font-style:normal;font-display:swap}@font-face{font-family:Baloo Bhai\\ 2;src:url(/assets/fonts/baloo-bhai-2/BalooBhai2-Medium.ttf);font-weight:500;font-style:normal;font-display:swap}@font-face{font-family:Baloo Bhai\\ 2;src:url(/assets/fonts/baloo-bhai-2/BalooBhai2-Regular.ttf);font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:Baloo Chettan\\ 2;src:url(/assets/fonts/baloo-chettan-2/BalooChettan2-ExtraBold.ttf);font-weight:800;font-style:normal;font-display:swap}@font-face{font-family:Baloo Chettan\\ 2;src:url(/assets/fonts/baloo-chettan-2/BalooChettan2-Bold.ttf);font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:Baloo Chettan\\ 2;src:url(/assets/fonts/baloo-chettan-2/BalooChettan2-SemiBold.ttf);font-weight:600;font-style:normal;font-display:swap}@font-face{font-family:Baloo Chettan\\ 2;src:url(/assets/fonts/baloo-chettan-2/BalooChettan2-Medium.ttf);font-weight:500;font-style:normal;font-display:swap}@font-face{font-family:Baloo Chettan\\ 2;src:url(/assets/fonts/baloo-chettan-2/BalooChettan2-Regular.ttf);font-weight:400;font-style:normal;font-display:swap}::selection{background-color:#ff9d9d;color:#fff}html{font-size:16px;font-family:Baloo Bhai\\ 2,cursive;background:#010101}@media only screen and (min-width:640px) and (max-width:1024px){html{font-size:calc(100vw / 64)}}@media only screen and (max-width:639px){html{font-size:10px}}h1,h2{all:unset;line-height:100%}h1{font-family:Baloo Chettan\\ 2,cursive;font-size:4rem}h2{font-family:Baloo Bhai\\ 2,cursive}*{box-sizing:border-box}:host{display:block;width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.links{position:absolute;width:100%;padding:.5rem;display:flex;flex-direction:row;align-items:center;justify-content:center;top:unset;bottom:0}.links_top{top:0;bottom:unset}.links__item~.links__item{margin:0 .5rem}"],encapsulation:3,changeDetection:0})}),t})();const V=[{path:"",component:(()=>{class t{constructor(t,e){Object.defineProperty(this,"activatedRoute",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"router",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"currentNavigationPosition$",{enumerable:!0,configurable:!0,writable:!0,value:this.router.events.pipe(Object(f.a)(t=>t instanceof i.b),x(500),Object(C.a)(()=>function(t){const e=function t(e,n=[]){return Object(u.a)(e)?n:Array.isArray(n)?t(e.firstChild,[...n,e]):t(e.firstChild,[e])}(t);return Object(l.a)(e.map(t=>t.data)).pipe(Object(c.a)(t=>t.reduce((t,e)=>({...t,...e}),{})))}(this.activatedRoute)),Object(c.a)(t=>t.hasOwnProperty("navigationPosition")?t.navigationPosition:s.Bottom),t=>t.lift(new _(void 0,void 0)),Object(P.a)(1))})}}return Object.defineProperty(t,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:function(e){return new(e||t)(j.Eb(i.a),j.Eb(i.c))}}),Object.defineProperty(t,"\u0275cmp",{enumerable:!0,configurable:!0,writable:!0,value:j.yb({type:t,selectors:[["app-pages"]],decls:3,vars:3,consts:[[3,"position"]],template:function(t,e){1&t&&(j.Fb(0,"app-navigation",0),j.Pb(1,"async"),j.Fb(2,"router-outlet")),2&t&&j.Tb("position",j.Qb(1,1,e.currentNavigationPosition$))},directives:[K,i.g],pipes:[N.b],styles:[":host{display:block;width:100%;height:100%}"],encapsulation:3,changeDetection:0})}),t})(),data:{navigationPosition:s.Bottom},children:[{path:"",pathMatch:"full",data:{navigationPosition:s.Bottom},loadChildren:()=>Object(r.a)(n.e(4).then(n.bind(null,"IpKO"))).pipe(Object(a.a)("MainPageModule"))},{path:"contacts",pathMatch:"full",data:{navigationPosition:s.Bottom},loadChildren:()=>Object(r.a)(n.e(1).then(n.bind(null,"fz8I"))).pipe(Object(a.a)("ContactsPageModule"))},{path:"**",data:{navigationPosition:s.Bottom},loadChildren:()=>Object(r.a)(n.e(2).then(n.bind(null,"eKI7"))).pipe(Object(a.a)("ErrorPageModule"))}]}];let F=(()=>{class t{}return Object.defineProperty(t,"\u0275mod",{enumerable:!0,configurable:!0,writable:!0,value:j.Cb({type:t})}),Object.defineProperty(t,"\u0275inj",{enumerable:!0,configurable:!0,writable:!0,value:j.Bb({factory:function(e){return new(e||t)},imports:[[i.f.forChild(V)],i.f]})}),t})(),G=(()=>{class t{}return Object.defineProperty(t,"\u0275mod",{enumerable:!0,configurable:!0,writable:!0,value:j.Cb({type:t})}),Object.defineProperty(t,"\u0275inj",{enumerable:!0,configurable:!0,writable:!0,value:j.Bb({factory:function(e){return new(e||t)},imports:[[F,o.a]]})}),t})()}}]);