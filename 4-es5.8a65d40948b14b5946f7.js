(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{rNbD:function(t,e,n){"use strict";n.r(e);var i=n("CcnG"),r=function(){return function(){}}(),l=n("pMnS"),u=function(){return function(){}}(),s=i.ob({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;background:#3d3d3d;width:100%;height:100%}"]],data:{}});function o(t){return i.Ib(2,[(t()(),i.qb(0,0,null,null,1,"p",[],null,null,null,null,null)),(t()(),i.Gb(-1,null,["wsl-first-slide works!"]))],null,null)}function c(t){return i.Ib(0,[(t()(),i.qb(0,0,null,null,1,"app-wsl-first-slide",[],null,null,null,o,s)),i.pb(1,49152,null,0,u,[],null,null)],null,null)}var a=i.mb("app-wsl-first-slide",u,c,{},{},[]),h=function(){return function(){}}(),d=i.ob({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;background:#3d3d3d;width:100%;height:100%}"]],data:{}});function f(t){return i.Ib(2,[(t()(),i.qb(0,0,null,null,1,"p",[],null,null,null,null,null)),(t()(),i.Gb(-1,null,["wsl-second-slide works!"]))],null,null)}function p(t){return i.Ib(0,[(t()(),i.qb(0,0,null,null,1,"app-wsl-second-slide",[],null,null,null,f,d)),i.pb(1,49152,null,0,h,[],null,null)],null,null)}var b=i.mb("app-wsl-second-slide",h,p,{},{},[]),w=n("Ip0R"),v=n("ZYCi"),y=function(t){return t.Enter="Enter",t.ArrowLeft="ArrowLeft",t.ArrowRight="ArrowRight",t}({}),m=function(t){return t.First="First",t.Middle="Middle",t.Last="Last",t}({}),_=n("Nvhu"),g=n("26FU"),x=n("dzgT"),I=n("VnD/"),S=n("p0Sj"),O=n("67Y/"),P=n("mrSG"),j=n("K9Ia"),k=n("pugT"),N=function(t){function e(e,n){var i=t.call(this,e,n)||this;return i.scheduler=e,i.work=n,i}return P.c(e,t),e.prototype.schedule=function(e,n){return void 0===n&&(n=0),n>0?t.prototype.schedule.call(this,e,n):(this.delay=n,this.state=e,this.scheduler.flush(this),this)},e.prototype.execute=function(e,n){return n>0||this.closed?t.prototype.execute.call(this,e,n):this._execute(e,n)},e.prototype.requestAsyncId=function(e,n,i){return void 0===i&&(i=0),null!==i&&i>0||null===i&&this.delay>0?t.prototype.requestAsyncId.call(this,e,n,i):e.flush(this)},e}(function(t){function e(e,n){var i=t.call(this,e,n)||this;return i.scheduler=e,i.work=n,i.pending=!1,i}return P.c(e,t),e.prototype.schedule=function(t,e){if(void 0===e&&(e=0),this.closed)return this;this.state=t;var n=this.id,i=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(i,n,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(i,this.id,e),this},e.prototype.requestAsyncId=function(t,e,n){return void 0===n&&(n=0),setInterval(t.flush.bind(t,this),n)},e.prototype.recycleAsyncId=function(t,e,n){if(void 0===n&&(n=0),null!==n&&this.delay===n&&!1===this.pending)return e;clearInterval(e)},e.prototype.execute=function(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(t,e);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(t,e){var n=!1,i=void 0;try{this.work(t)}catch(r){n=!0,i=!!r&&r||new Error(r)}if(n)return this.unsubscribe(),i},e.prototype._unsubscribe=function(){var t=this.id,e=this.scheduler,n=e.actions,i=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==i&&n.splice(i,1),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null},e}(function(t){function e(e,n){return t.call(this)||this}return P.c(e,t),e.prototype.schedule=function(t,e){return void 0===e&&(e=0),this},e}(k.a))),E=function(){function t(e,n){void 0===n&&(n=t.now),this.SchedulerAction=e,this.now=n}return t.prototype.schedule=function(t,e,n){return void 0===e&&(e=0),new this.SchedulerAction(this,t).schedule(n,e)},t.now=function(){return Date.now()},t}(),T=new(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return P.c(e,t),e}(function(t){function e(n,i){void 0===i&&(i=E.now);var r=t.call(this,n,function(){return e.delegate&&e.delegate!==r?e.delegate.now():i()})||this;return r.actions=[],r.active=!1,r.scheduled=void 0,r}return P.c(e,t),e.prototype.schedule=function(n,i,r){return void 0===i&&(i=0),e.delegate&&e.delegate!==this?e.delegate.schedule(n,i,r):t.prototype.schedule.call(this,n,i,r)},e.prototype.flush=function(t){var e=this.actions;if(this.active)e.push(t);else{var n;this.active=!0;do{if(n=t.execute(t.state,t.delay))break}while(t=e.shift());if(this.active=!1,n){for(;t=e.shift();)t.unsubscribe();throw n}}},e}(E)))(N),z=n("FFOo"),$=n("G5J1"),C=n("F/XL"),M=n("6blF"),A=function(){function t(t,e,n){this.kind=t,this.value=e,this.error=n,this.hasValue="N"===t}return t.prototype.observe=function(t){switch(this.kind){case"N":return t.next&&t.next(this.value);case"E":return t.error&&t.error(this.error);case"C":return t.complete&&t.complete()}},t.prototype.do=function(t,e,n){switch(this.kind){case"N":return t&&t(this.value);case"E":return e&&e(this.error);case"C":return n&&n()}},t.prototype.accept=function(t,e,n){return t&&"function"==typeof t.next?this.observe(t):this.do(t,e,n)},t.prototype.toObservable=function(){var t;switch(this.kind){case"N":return Object(C.a)(this.value);case"E":return t=this.error,new M.a(function(e){return e.error(t)});case"C":return Object($.b)()}throw new Error("unexpected notification kind value")},t.createNext=function(e){return void 0!==e?new t("N",e):t.undefinedValueNotification},t.createError=function(e){return new t("E",void 0,e)},t.createComplete=function(){return t.completeNotification},t.completeNotification=new t("C"),t.undefinedValueNotification=new t("N",void 0),t}(),q=function(t){function e(e,n,i){void 0===i&&(i=0);var r=t.call(this,e)||this;return r.scheduler=n,r.delay=i,r}return P.c(e,t),e.dispatch=function(t){t.notification.observe(t.destination),this.unsubscribe()},e.prototype.scheduleMessage=function(t){this.destination.add(this.scheduler.schedule(e.dispatch,this.delay,new R(t,this.destination)))},e.prototype._next=function(t){this.scheduleMessage(A.createNext(t))},e.prototype._error=function(t){this.scheduleMessage(A.createError(t)),this.unsubscribe()},e.prototype._complete=function(){this.scheduleMessage(A.createComplete()),this.unsubscribe()},e}(z.a),R=function(){return function(t,e){this.notification=t,this.destination=e}}(),F=n("8g8A"),W=n("uMaO"),B=function(t){function e(e,n,i){void 0===e&&(e=Number.POSITIVE_INFINITY),void 0===n&&(n=Number.POSITIVE_INFINITY);var r=t.call(this)||this;return r.scheduler=i,r._events=[],r._infiniteTimeWindow=!1,r._bufferSize=e<1?1:e,r._windowTime=n<1?1:n,n===Number.POSITIVE_INFINITY?(r._infiniteTimeWindow=!0,r.next=r.nextInfiniteTimeWindow):r.next=r.nextTimeWindow,r}return P.c(e,t),e.prototype.nextInfiniteTimeWindow=function(e){var n=this._events;n.push(e),n.length>this._bufferSize&&n.shift(),t.prototype.next.call(this,e)},e.prototype.nextTimeWindow=function(e){this._events.push(new D(this._getNow(),e)),this._trimBufferThenGetEvents(),t.prototype.next.call(this,e)},e.prototype._subscribe=function(t){var e,n=this._infiniteTimeWindow,i=n?this._events:this._trimBufferThenGetEvents(),r=this.scheduler,l=i.length;if(this.closed)throw new F.a;if(this.isStopped||this.hasError?e=k.a.EMPTY:(this.observers.push(t),e=new W.a(this,t)),r&&t.add(t=new q(t,r)),n)for(var u=0;u<l&&!t.closed;u++)t.next(i[u]);else for(u=0;u<l&&!t.closed;u++)t.next(i[u].value);return this.hasError?t.error(this.thrownError):this.isStopped&&t.complete(),e},e.prototype._getNow=function(){return(this.scheduler||T).now()},e.prototype._trimBufferThenGetEvents=function(){for(var t=this._getNow(),e=this._bufferSize,n=this._windowTime,i=this._events,r=i.length,l=0;l<r&&!(t-i[l].time<n);)l++;return r>e&&(l=Math.max(l,r-e)),l>0&&i.splice(0,l),i},e}(j.a),D=function(){return function(t,e){this.time=t,this.value=e}}();function G(t,e,n){var i;return i=t&&"object"==typeof t?t:{bufferSize:t,windowTime:e,refCount:!1,scheduler:n},function(t){return t.lift(function(t){var e,n,r=i.bufferSize,l=void 0===r?Number.POSITIVE_INFINITY:r,u=i.windowTime,s=void 0===u?Number.POSITIVE_INFINITY:u,o=i.refCount,c=i.scheduler,a=0,h=!1,d=!1;return function(t){a++,e&&!h||(h=!1,e=new B(l,s,c),n=t.subscribe({next:function(t){e.next(t)},error:function(t){h=!0,e.error(t)},complete:function(){d=!0,e.complete()}}));var i=e.subscribe(this);this.add(function(){a--,i.unsubscribe(),n&&!d&&o&&0===a&&(n.unsubscribe(),n=void 0,e=void 0)})}}())}}var Y=n("15JJ");function H(t,e){return function(n){return n.lift(new L(t,e))}}var L=function(){function t(t,e){this.compare=t,this.keySelector=e}return t.prototype.call=function(t,e){return e.subscribe(new V(t,this.compare,this.keySelector))},t}(),V=function(t){function e(e,n,i){var r=t.call(this,e)||this;return r.keySelector=i,r.hasKey=!1,"function"==typeof n&&(r.compare=n),r}return P.c(e,t),e.prototype.compare=function(t,e){return t===e},e.prototype._next=function(t){var e;try{var n=this.keySelector;e=n?n(t):t}catch(r){return this.destination.error(r)}var i=!1;if(this.hasKey)try{i=(0,this.compare)(this.key,e)}catch(r){return this.destination.error(r)}else this.hasKey=!0;i||(this.key=e,this.destination.next(t))},e}(z.a),K=n("t9fZ"),J=function(){function t(t,e,n){var i=this;this._hostElement=t,this._router=e,this._activatedRoute=n,this.slideHeightPx$=new g.a(0),this.slideWidthPx$=new g.a(0),this._deepestActivatedRoute$=this._router.events.pipe(Object(I.a)(function(t){return t instanceof v.d}),Object(S.a)(this._activatedRoute),Object(O.a)(function(){return Object(_.b)(i._activatedRoute)}),G(1)),this._routeData$=this._deepestActivatedRoute$.pipe(Object(Y.a)(function(t){return t.data}),Object(_.a)(),G(1)),this._currentSlidePath$=this._deepestActivatedRoute$.pipe(Object(Y.a)(function(t){return t.url}),Object(O.a)(function(t){return t[0]}),Object(_.a)(),Object(O.a)(function(t){return Number.parseInt(t.path,10)}),G(1)),this._lastSlidePath$=this._routeData$.pipe(Object(I.a)(function(t){return t.hasOwnProperty("lastSlideIndex")}),Object(O.a)(function(t){return t.lastSlideIndex}),H(),G(1)),this._firstSlidePath$=this._routeData$.pipe(Object(I.a)(function(t){return t.hasOwnProperty("firstSlideIndex")}),Object(O.a)(function(t){return t.firstSlideIndex}),H(),G(1))}return t.prototype.updateSlideElementHeight=function(){this.updateSlideSize()},t.prototype.processKeyPressEvent=function(t){var e=this,n=t.key===y.ArrowLeft;(n||t.key===y.ArrowRight)&&(n?Object(x.a)([this._currentSlidePath$,this._firstSlidePath$]).pipe(Object(O.a)(function(t){var e;!function(t){t[t.currentSlidePath=0]="currentSlidePath",t[t.firstSlidePath=1]="firstSlidePath"}(e||(e={}));var n=t[e.currentSlidePath],i=t[e.firstSlidePath];return n<=i?i:n-1}),Object(K.a)(1)).subscribe(function(t){return e._router.navigateByUrl("/talks/wsl/"+t)}):(Object(x.a)([this._currentSlidePath$,this._lastSlidePath$]).pipe(Object(O.a)(function(t){var e;!function(t){t[t.currentSlidePath=0]="currentSlidePath",t[t.lastSlidePath=1]="lastSlidePath"}(e||(e={}));var n=t[e.currentSlidePath],i=t[e.lastSlidePath];return n>=i?i:n+1}),Object(K.a)(1)).subscribe(function(t){return e._router.navigateByUrl("/talks/wsl/"+t)}),this._lastSlidePath$.pipe()))},t.prototype.ngOnInit=function(){this.updateSlideSize()},t.prototype.updateSlideSize=function(){var t=this._hostElement.nativeElement.getBoundingClientRect().width,e=this._hostElement.nativeElement.getBoundingClientRect().height,n=t/16*9;if(n<=e)return this.slideWidthPx$.next(t),void this.slideHeightPx$.next(n);this.slideWidthPx$.next(e/9*16),this.slideHeightPx$.next(e)},t}(),U=i.ob({encapsulation:0,styles:[["[_nghost-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;flex-wrap:nowrap}.slide[_ngcontent-%COMP%]{width:100%}"]],data:{}});function Z(t){return i.Ib(2,[(t()(),i.qb(0,0,null,null,4,"div",[["class","slide"]],[[4,"width","px"],[4,"height","px"]],null,null,null,null)),i.Db(131072,w.b,[i.h]),i.Db(131072,w.b,[i.h]),(t()(),i.qb(3,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),i.pb(4,212992,null,0,v.n,[v.b,i.O,i.j,[8,null],i.h],null,null)],function(t,e){t(e,4,0)},function(t,e){var n=e.component;t(e,0,0,i.Hb(e,0,0,i.Bb(e,1).transform(n.slideWidthPx$)),i.Hb(e,0,1,i.Bb(e,2).transform(n.slideHeightPx$)))})}function X(t){return i.Ib(0,[(t()(),i.qb(0,0,null,null,1,"app-why-do-you-need-wsl",[],null,[["window","resize"],["window","keydown"]],function(t,e,n){var r=!0;return"window:resize"===e&&(r=!1!==i.Bb(t,1).updateSlideElementHeight()&&r),"window:keydown"===e&&(r=!1!==i.Bb(t,1).processKeyPressEvent(n)&&r),r},Z,U)),i.pb(1,114688,null,0,J,[i.k,v.l,v.a],null,null)],function(t,e){t(e,1,0)},null)}var Q=i.mb("app-why-do-you-need-wsl",J,X,{},{},[]),tt=function(){return function(t,e){var n=this;this._activatedRoute=t,this._router=e,this.subtitle$=this._router.events.pipe(Object(I.a)(function(t){return t instanceof v.d}),Object(S.a)(this._activatedRoute),Object(O.a)(function(){return Object(_.b)(n._activatedRoute)}),Object(Y.a)(function(t){return t.data}),Object(_.a)(),Object(I.a)(function(t){return t.hasOwnProperty("subtitle")}),Object(O.a)(function(t){return t.subtitle}),H(),G(1))}}(),et=i.ob({encapsulation:0,styles:[["[_nghost-%COMP%]{width:100vw;height:100vh}.header[_ngcontent-%COMP%]{z-index:2;width:100%;height:3rem;box-sizing:border-box;padding:.5rem 1rem;background:#333;box-shadow:0 0 .5rem #000;position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;top:0;display:flex;flex-direction:row;align-items:center;justify-content:flex-start;flex-wrap:nowrap}.header__title[_ngcontent-%COMP%]{font-size:1.5rem;font-family:Satisfy,cursive;text-shadow:.125rem .125rem .5rem #000;color:#fff;width:100%;display:flex;flex-direction:row;align-items:center;justify-content:space-between;flex-wrap:nowrap}.header__subtitle[_ngcontent-%COMP%]{display:block;margin:0 0 0 1rem;font-size:1rem;font-family:Raleway,sans-serif;text-shadow:.125rem .125rem .5rem #000;color:#fff}.slides-container[_ngcontent-%COMP%]{z-index:1;margin:3rem 0 0;height:calc(100% - 3rem);width:100%;background:#e5e5e5}"]],data:{}});function nt(t){return i.Ib(0,[(t()(),i.qb(0,0,null,null,1,"span",[["class","header__subtitle"]],null,null,null,null,null)),(t()(),i.Gb(1,null,[" "," "]))],null,function(t,e){t(e,1,0,e.context.ngIf)})}function it(t){return i.Ib(2,[(t()(),i.qb(0,0,null,null,5,"header",[["class","header"]],null,null,null,null,null)),(t()(),i.qb(1,0,null,null,4,"h1",[["class","header__title"]],null,null,null,null,null)),(t()(),i.Gb(-1,null,[" Talks "])),(t()(),i.fb(16777216,null,null,2,null,nt)),i.pb(4,16384,null,0,w.j,[i.O,i.L],{ngIf:[0,"ngIf"]},null),i.Db(131072,w.b,[i.h]),(t()(),i.qb(6,0,null,null,2,"main",[["class","slides-container"]],null,null,null,null,null)),(t()(),i.qb(7,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),i.pb(8,212992,null,0,v.n,[v.b,i.O,i.j,[8,null],i.h],null,null)],function(t,e){var n=e.component;t(e,4,0,i.Hb(e,4,0,i.Bb(e,5).transform(n.subtitle$))),t(e,8,0)},null)}function rt(t){return i.Ib(0,[(t()(),i.qb(0,0,null,null,1,"app-talks-page",[],null,null,null,it,et)),i.pb(1,49152,null,0,tt,[v.a,v.l],null,null)],null,null)}var lt=i.mb("app-talks-page",tt,rt,{},{},[]),ut=n("PCNd"),st={firstSlideIndex:1,lastSlideIndex:2,subtitle:"Why Do You Need WSL"},ot=P.a({},st,{animation:m.First}),ct=P.a({},st,{animation:m.Last}),at=st,ht=function(){return function(){}}();n.d(e,"TalksPageModuleNgFactory",function(){return dt});var dt=i.nb(r,[],function(t){return i.yb([i.zb(512,i.j,i.Y,[[8,[l.a,a,b,Q,lt]],[3,i.j],i.x]),i.zb(4608,w.l,w.k,[i.u,[2,w.t]]),i.zb(1073742336,w.c,w.c,[]),i.zb(1073742336,ut.a,ut.a,[]),i.zb(1073742336,v.m,v.m,[[2,v.r],[2,v.l]]),i.zb(1073742336,ht,ht,[]),i.zb(1073742336,r,r,[]),i.zb(1024,v.j,function(){return[[{path:"",pathMatch:"full",redirectTo:"wsl"},{children:[{children:[{path:"",pathMatch:"full",redirectTo:"1"},{component:u,data:ot,path:"1"},{component:h,data:ct,path:"2"}],component:J,data:at,path:"wsl"}],component:tt,path:""}]]},[])])})}}]);