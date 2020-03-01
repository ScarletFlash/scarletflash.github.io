(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-talks-page-talks-page-module"],{

/***/ "./src/app/pages/talks-page/talks-page-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/talks-page/talks-page-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: TalksPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalksPageRoutingModule", function() { return TalksPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_declarations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app-declarations */ "./src/declarations/index.ts");
/* harmony import */ var _talks_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./talks-page.component */ "./src/app/pages/talks-page/talks-page.component.ts");
/* harmony import */ var _why_do_you_need_wsl_why_do_you_need_wsl_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./why-do-you-need-wsl/why-do-you-need-wsl.component */ "./src/app/pages/talks-page/why-do-you-need-wsl/why-do-you-need-wsl.component.ts");
/* harmony import */ var _why_do_you_need_wsl_wsl_eighth_slide_wsl_eighth_slide_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./why-do-you-need-wsl/wsl-eighth-slide/wsl-eighth-slide.component */ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-eighth-slide/wsl-eighth-slide.component.ts");
/* harmony import */ var _why_do_you_need_wsl_wsl_fifth_slide_wsl_fifth_slide_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./why-do-you-need-wsl/wsl-fifth-slide/wsl-fifth-slide.component */ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-fifth-slide/wsl-fifth-slide.component.ts");
/* harmony import */ var _why_do_you_need_wsl_wsl_first_slide_wsl_first_slide_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./why-do-you-need-wsl/wsl-first-slide/wsl-first-slide.component */ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-first-slide/wsl-first-slide.component.ts");
/* harmony import */ var _why_do_you_need_wsl_wsl_forth_slide_wsl_forth_slide_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./why-do-you-need-wsl/wsl-forth-slide/wsl-forth-slide.component */ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-forth-slide/wsl-forth-slide.component.ts");
/* harmony import */ var _why_do_you_need_wsl_wsl_ninth_slide_wsl_ninth_slide_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./why-do-you-need-wsl/wsl-ninth-slide/wsl-ninth-slide.component */ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-ninth-slide/wsl-ninth-slide.component.ts");
/* harmony import */ var _why_do_you_need_wsl_wsl_second_slide_wsl_second_slide_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./why-do-you-need-wsl/wsl-second-slide/wsl-second-slide.component */ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-second-slide/wsl-second-slide.component.ts");
/* harmony import */ var _why_do_you_need_wsl_wsl_seventh_slide_wsl_seventh_slide_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./why-do-you-need-wsl/wsl-seventh-slide/wsl-seventh-slide.component */ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-seventh-slide/wsl-seventh-slide.component.ts");
/* harmony import */ var _why_do_you_need_wsl_wsl_sixth_slide_wsl_sixth_slide_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./why-do-you-need-wsl/wsl-sixth-slide/wsl-sixth-slide.component */ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-sixth-slide/wsl-sixth-slide.component.ts");
/* harmony import */ var _why_do_you_need_wsl_wsl_third_slide_wsl_third_slide_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./why-do-you-need-wsl/wsl-third-slide/wsl-third-slide.component */ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-third-slide/wsl-third-slide.component.ts");
















const whyDoYouNeedWslRouteData = {
    firstSlideIndex: 1,
    lastSlideIndex: 9,
    subtitle: 'Why Do You Need WSL'
};
const whyDoYouNeedWslRoute = {
    children: [
        {
            path: '',
            pathMatch: 'full',
            redirectTo: '1'
        },
        {
            component: _why_do_you_need_wsl_wsl_first_slide_wsl_first_slide_component__WEBPACK_IMPORTED_MODULE_7__["WslFirstSlideComponent"],
            data: { ...whyDoYouNeedWslRouteData, animation: _app_declarations__WEBPACK_IMPORTED_MODULE_2__["SlidePosition"].First },
            path: '1'
        },
        {
            component: _why_do_you_need_wsl_wsl_second_slide_wsl_second_slide_component__WEBPACK_IMPORTED_MODULE_10__["WslSecondSlideComponent"],
            data: { ...whyDoYouNeedWslRouteData, animation: _app_declarations__WEBPACK_IMPORTED_MODULE_2__["SlidePosition"].Last },
            path: '2'
        },
        {
            component: _why_do_you_need_wsl_wsl_third_slide_wsl_third_slide_component__WEBPACK_IMPORTED_MODULE_13__["WslThirdSlideComponent"],
            data: { ...whyDoYouNeedWslRouteData, animation: _app_declarations__WEBPACK_IMPORTED_MODULE_2__["SlidePosition"].Last },
            path: '3'
        },
        {
            component: _why_do_you_need_wsl_wsl_forth_slide_wsl_forth_slide_component__WEBPACK_IMPORTED_MODULE_8__["WslForthSlideComponent"],
            data: { ...whyDoYouNeedWslRouteData, animation: _app_declarations__WEBPACK_IMPORTED_MODULE_2__["SlidePosition"].Last },
            path: '4'
        },
        {
            component: _why_do_you_need_wsl_wsl_fifth_slide_wsl_fifth_slide_component__WEBPACK_IMPORTED_MODULE_6__["WslFifthSlideComponent"],
            data: { ...whyDoYouNeedWslRouteData, animation: _app_declarations__WEBPACK_IMPORTED_MODULE_2__["SlidePosition"].Last },
            path: '5'
        },
        {
            component: _why_do_you_need_wsl_wsl_sixth_slide_wsl_sixth_slide_component__WEBPACK_IMPORTED_MODULE_12__["WslSixthSlideComponent"],
            data: { ...whyDoYouNeedWslRouteData, animation: _app_declarations__WEBPACK_IMPORTED_MODULE_2__["SlidePosition"].Last },
            path: '6'
        },
        {
            component: _why_do_you_need_wsl_wsl_seventh_slide_wsl_seventh_slide_component__WEBPACK_IMPORTED_MODULE_11__["WslSeventhSlideComponent"],
            data: { ...whyDoYouNeedWslRouteData, animation: _app_declarations__WEBPACK_IMPORTED_MODULE_2__["SlidePosition"].Last },
            path: '7'
        },
        {
            component: _why_do_you_need_wsl_wsl_eighth_slide_wsl_eighth_slide_component__WEBPACK_IMPORTED_MODULE_5__["WslEighthSlideComponent"],
            data: { ...whyDoYouNeedWslRouteData, animation: _app_declarations__WEBPACK_IMPORTED_MODULE_2__["SlidePosition"].Last },
            path: '8'
        },
        {
            component: _why_do_you_need_wsl_wsl_ninth_slide_wsl_ninth_slide_component__WEBPACK_IMPORTED_MODULE_9__["WslNinthSlideComponent"],
            data: { ...whyDoYouNeedWslRouteData, animation: _app_declarations__WEBPACK_IMPORTED_MODULE_2__["SlidePosition"].Last },
            path: '9'
        }
    ],
    component: _why_do_you_need_wsl_why_do_you_need_wsl_component__WEBPACK_IMPORTED_MODULE_4__["WhyDoYouNeedWslComponent"],
    data: whyDoYouNeedWslRouteData,
    path: 'wsl'
};
const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'wsl'
    },
    {
        children: [whyDoYouNeedWslRoute],
        component: _talks_page_component__WEBPACK_IMPORTED_MODULE_3__["TalksPageComponent"],
        path: ''
    }
];
class TalksPageRoutingModule {
}
TalksPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TalksPageRoutingModule });
TalksPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TalksPageRoutingModule_Factory(t) { return new (t || TalksPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TalksPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TalksPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/talks-page/talks-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/talks-page/talks-page.component.ts ***!
  \**********************************************************/
/*! exports provided: TalksPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalksPageComponent", function() { return TalksPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app-functions */ "./src/app/functions/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function TalksPageComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subtitle_r6 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subtitle_r6, " ");
} }
class TalksPageComponent {
    constructor(_activatedRoute, _router) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this.subtitle$ = this._router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((innerEvent) => innerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this._activatedRoute), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => Object(_app_functions__WEBPACK_IMPORTED_MODULE_2__["getDeepestActivatedRoute"])(this._activatedRoute)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((innerActivatedRoute) => innerActivatedRoute.data), Object(_app_functions__WEBPACK_IMPORTED_MODULE_2__["filterNotNullOrUndefined"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((innerData) => innerData.hasOwnProperty('subtitle')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((innerData) => innerData.subtitle), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
    }
}
TalksPageComponent.ɵfac = function TalksPageComponent_Factory(t) { return new (t || TalksPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
TalksPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TalksPageComponent, selectors: [["app-talks-page"]], decls: 7, vars: 3, consts: [[1, "header"], [1, "header__title"], ["class", "header__subtitle", 4, "ngIf"], [1, "slides-container"], [1, "header__subtitle"]], template: function TalksPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Talks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TalksPageComponent_span_3_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "main", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx.subtitle$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n}\n\n.header[_ngcontent-%COMP%] {\n  z-index: 2;\n  width: 100%;\n  height: 3rem;\n  box-sizing: border-box;\n  padding: 0.5rem 1rem;\n  background: #333333;\n  box-shadow: 0 0 0.5rem #000000;\n  position: absolute;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  top: 0;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  flex-wrap: nowrap;\n}\n\n.header__title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-family: \"Satisfy\", cursive;\n  text-shadow: 0.125rem 0.125rem 0.5rem #000000;\n  color: #ffffff;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n}\n\n.header__subtitle[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 0 0 1rem;\n  font-size: 1rem;\n  font-family: \"Raleway\", sans-serif;\n  text-shadow: 0.125rem 0.125rem 0.5rem #000000;\n  color: #ffffff;\n}\n\n.slides-container[_ngcontent-%COMP%] {\n  z-index: 1;\n  margin: 3rem 0 0 0;\n  height: calc(100% - 3rem);\n  width: 100%;\n  background: #e5e5e5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL2FwcC9wYWdlcy90YWxrcy1wYWdlL3RhbGtzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RhbGtzLXBhZ2UvdGFsa3MtcGFnZS5jb21wb25lbnQuc2NzcyIsIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL3N0eWxlcy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDSkY7O0FET0E7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBVmM7RUFXZCxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJFZGdCO0VGZWhCLDhCRUZrQjtFRkdsQixrQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLE1BQUE7RUdWRSxhQUFBO0VBRUYsbUJIU3dCO0VHUnhCLG1CSFE2QjtFR1A3QiwyQkhPcUM7RUdOckMsaUJITWlEO0FDQW5EOztBREVFO0VBQ0UsaUJBQUE7RUFDQSwrQkVqQmtCO0VGa0JsQiw2Q0VkZ0I7RUZlaEIsY0V2QlU7RUZ3QlYsV0FBQTtFR2xCQSxhQUFBO0VBRUYsbUJIaUIwQjtFR2hCMUIsbUJIZ0IrQjtFR2YvQiw4QkhldUM7RUdkdkMsaUJIY3NEO0FDSXhEOztBRERFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtDRTNCa0I7RUY0QmxCLDZDRXpCZ0I7RUYwQmhCLGNFbENVO0FEcUNkOztBRENBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJFNUNpQjtBRDhDbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWxrcy1wYWdlL3RhbGtzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuQGltcG9ydCAnbWl4aW5zJztcblxuJGhlaWdodF9oZWFkZXI6IDNyZW07XG5cbjpob3N0IHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uaGVhZGVyIHtcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogJGhlaWdodF9oZWFkZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBiYWNrZ3JvdW5kOiAkY29sb3JfZ3JleS1kYXJrO1xuICBib3gtc2hhZG93OiAkYm94LXNoYWRvd19jb21tb247XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRvcDogMDtcbiAgQGluY2x1ZGUgZmxleC1jb250YWluZXIocm93LCBjZW50ZXIsIGZsZXgtc3RhcnQsIG5vd3JhcCwgJ25vcm1hbCcpO1xuXG4gICZfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5X3NhdGlzZnk7XG4gICAgdGV4dC1zaGFkb3c6ICR0ZXh0LXNoYWRvd190aXRsZTtcbiAgICBjb2xvcjogJGNvbG9yX3doaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIEBpbmNsdWRlIGZsZXgtY29udGFpbmVyKHJvdywgY2VudGVyLCBzcGFjZS1iZXR3ZWVuLCBub3dyYXAsICdub3JtYWwnKTtcbiAgfVxuXG4gICZfX3N1YnRpdGxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgMCAwIDFyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHlfcmFsZXdheTtcbiAgICB0ZXh0LXNoYWRvdzogJHRleHQtc2hhZG93X3RpdGxlO1xuICAgIGNvbG9yOiAkY29sb3Jfd2hpdGU7XG4gIH1cbn1cblxuLnNsaWRlcy1jb250YWluZXIge1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW46ICRoZWlnaHRfaGVhZGVyIDAgMCAwO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JGhlaWdodF9oZWFkZXJ9KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICRjb2xvcl9ncmV5LWxpZ2h0O1xufVxuIiwiOmhvc3Qge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5oZWFkZXIge1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgYmFja2dyb3VuZDogIzMzMzMzMztcbiAgYm94LXNoYWRvdzogMCAwIDAuNXJlbSAjMDAwMDAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG4uaGVhZGVyX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LWZhbWlseTogXCJTYXRpc2Z5XCIsIGN1cnNpdmU7XG4gIHRleHQtc2hhZG93OiAwLjEyNXJlbSAwLjEyNXJlbSAwLjVyZW0gIzAwMDAwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuLmhlYWRlcl9fc3VidGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIDAgMCAxcmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1zaGFkb3c6IDAuMTI1cmVtIDAuMTI1cmVtIDAuNXJlbSAjMDAwMDAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnNsaWRlcy1jb250YWluZXIge1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW46IDNyZW0gMCAwIDA7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gM3JlbSk7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xufSIsIi8vIGNvbG9yc1xuJGNvbG9yX3ByaW1hcnktcmVkOiAjZmYxNzQ0O1xuJGNvbG9yX2dyZXktZGFyazogIzMzMzMzMztcbiRjb2xvcl9ncmV5LWxpZ2h0OiAjZTVlNWU1O1xuJGNvbG9yX3doaXRlOiAjZmZmZmZmO1xuJGNvbG9yX2JsYWNrOiAjMDAwMDAwO1xuXG4vLyBmb250LWZhbWlsaWVzXG4kZm9udC1mYW1pbHlfc2F0aXNmeTogJ1NhdGlzZnknLCBjdXJzaXZlO1xuJGZvbnQtZmFtaWx5X3JhbGV3YXk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcblxuLy8gdGV4dC1zaGFkb3dcbiR0ZXh0LXNoYWRvd190aXRsZTogMC4xMjVyZW0gMC4xMjVyZW0gMC41cmVtICRjb2xvcl9ibGFjaztcblxuLy8gYm94LXNoYWRvd1xuJGJveC1zaGFkb3dfY29tbW9uOiAwIDAgMC41cmVtICRjb2xvcl9ibGFjaztcbiIsIkBtaXhpbiBmbGV4LWNvbnRhaW5lcihcbiAgJGZsZXgtZGlyZWN0aW9uOiByb3csXG4gICRhbGlnbi1pdGVtczogZmxleC1zdGFydCxcbiAgJGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCxcbiAgJGZsZXgtd3JhcDogbm93cmFwLFxuICAkZmxleC10eXBlOiAnbm9ybWFsJ1xuKSB7XG4gIEBpZiAkZmxleC10eXBlID09ICdpbmxpbmUnIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgfSBAZWxzZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBmbGV4LWRpcmVjdGlvbjogJGZsZXgtZGlyZWN0aW9uO1xuICBhbGlnbi1pdGVtczogJGFsaWduLWl0ZW1zO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5LWNvbnRlbnQ7XG4gIGZsZXgtd3JhcDogJGZsZXgtd3JhcDtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TalksPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                selector: 'app-talks-page',
                styleUrls: ['./talks-page.component.scss'],
                templateUrl: './talks-page.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/talks-page/talks-page.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/talks-page/talks-page.module.ts ***!
  \*******************************************************/
/*! exports provided: TalksPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalksPageModule", function() { return TalksPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app-shared */ "./src/app/shared/index.ts");
/* harmony import */ var _talks_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./talks-page-routing.module */ "./src/app/pages/talks-page/talks-page-routing.module.ts");
/* harmony import */ var _talks_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./talks-page.component */ "./src/app/pages/talks-page/talks-page.component.ts");
/* harmony import */ var _why_do_you_need_wsl_why_do_you_need_wsl_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./why-do-you-need-wsl/why-do-you-need-wsl.component */ "./src/app/pages/talks-page/why-do-you-need-wsl/why-do-you-need-wsl.component.ts");
/* harmony import */ var _why_do_you_need_wsl_wsl_eighth_slide_wsl_eighth_slide_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./why-do-you-need-wsl/wsl-eighth-slide/wsl-eighth-slide.component */ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-eighth-slide/wsl-eighth-slide.component.ts");
/* harmony import */ var _why_do_you_need_wsl_wsl_fifth_slide_wsl_fifth_slide_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./why-do-you-need-wsl/wsl-fifth-slide/wsl-fifth-slide.component */ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-fifth-slide/wsl-fifth-slide.component.ts");
/* harmony import */ var _why_do_you_need_wsl_wsl_first_slide_wsl_first_slide_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./why-do-you-need-wsl/wsl-first-slide/wsl-first-slide.component */ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-first-slide/wsl-first-slide.component.ts");
/* harmony import */ var _why_do_you_need_wsl_wsl_forth_slide_wsl_forth_slide_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./why-do-you-need-wsl/wsl-forth-slide/wsl-forth-slide.component */ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-forth-slide/wsl-forth-slide.component.ts");
/* harmony import */ var _why_do_you_need_wsl_wsl_ninth_slide_wsl_ninth_slide_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./why-do-you-need-wsl/wsl-ninth-slide/wsl-ninth-slide.component */ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-ninth-slide/wsl-ninth-slide.component.ts");
/* harmony import */ var _why_do_you_need_wsl_wsl_second_slide_wsl_second_slide_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./why-do-you-need-wsl/wsl-second-slide/wsl-second-slide.component */ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-second-slide/wsl-second-slide.component.ts");
/* harmony import */ var _why_do_you_need_wsl_wsl_seventh_slide_wsl_seventh_slide_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./why-do-you-need-wsl/wsl-seventh-slide/wsl-seventh-slide.component */ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-seventh-slide/wsl-seventh-slide.component.ts");
/* harmony import */ var _why_do_you_need_wsl_wsl_sixth_slide_wsl_sixth_slide_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./why-do-you-need-wsl/wsl-sixth-slide/wsl-sixth-slide.component */ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-sixth-slide/wsl-sixth-slide.component.ts");
/* harmony import */ var _why_do_you_need_wsl_wsl_third_slide_wsl_third_slide_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./why-do-you-need-wsl/wsl-third-slide/wsl-third-slide.component */ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-third-slide/wsl-third-slide.component.ts");















class TalksPageModule {
}
TalksPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TalksPageModule });
TalksPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TalksPageModule_Factory(t) { return new (t || TalksPageModule)(); }, imports: [[_app_shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _talks_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["TalksPageRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TalksPageModule, { declarations: [_talks_page_component__WEBPACK_IMPORTED_MODULE_3__["TalksPageComponent"],
        _why_do_you_need_wsl_why_do_you_need_wsl_component__WEBPACK_IMPORTED_MODULE_4__["WhyDoYouNeedWslComponent"],
        _why_do_you_need_wsl_wsl_first_slide_wsl_first_slide_component__WEBPACK_IMPORTED_MODULE_7__["WslFirstSlideComponent"],
        _why_do_you_need_wsl_wsl_second_slide_wsl_second_slide_component__WEBPACK_IMPORTED_MODULE_10__["WslSecondSlideComponent"],
        _why_do_you_need_wsl_wsl_third_slide_wsl_third_slide_component__WEBPACK_IMPORTED_MODULE_13__["WslThirdSlideComponent"],
        _why_do_you_need_wsl_wsl_forth_slide_wsl_forth_slide_component__WEBPACK_IMPORTED_MODULE_8__["WslForthSlideComponent"],
        _why_do_you_need_wsl_wsl_fifth_slide_wsl_fifth_slide_component__WEBPACK_IMPORTED_MODULE_6__["WslFifthSlideComponent"],
        _why_do_you_need_wsl_wsl_sixth_slide_wsl_sixth_slide_component__WEBPACK_IMPORTED_MODULE_12__["WslSixthSlideComponent"],
        _why_do_you_need_wsl_wsl_seventh_slide_wsl_seventh_slide_component__WEBPACK_IMPORTED_MODULE_11__["WslSeventhSlideComponent"],
        _why_do_you_need_wsl_wsl_eighth_slide_wsl_eighth_slide_component__WEBPACK_IMPORTED_MODULE_5__["WslEighthSlideComponent"],
        _why_do_you_need_wsl_wsl_ninth_slide_wsl_ninth_slide_component__WEBPACK_IMPORTED_MODULE_9__["WslNinthSlideComponent"]], imports: [_app_shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _talks_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["TalksPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TalksPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _talks_page_component__WEBPACK_IMPORTED_MODULE_3__["TalksPageComponent"],
                    _why_do_you_need_wsl_why_do_you_need_wsl_component__WEBPACK_IMPORTED_MODULE_4__["WhyDoYouNeedWslComponent"],
                    _why_do_you_need_wsl_wsl_first_slide_wsl_first_slide_component__WEBPACK_IMPORTED_MODULE_7__["WslFirstSlideComponent"],
                    _why_do_you_need_wsl_wsl_second_slide_wsl_second_slide_component__WEBPACK_IMPORTED_MODULE_10__["WslSecondSlideComponent"],
                    _why_do_you_need_wsl_wsl_third_slide_wsl_third_slide_component__WEBPACK_IMPORTED_MODULE_13__["WslThirdSlideComponent"],
                    _why_do_you_need_wsl_wsl_forth_slide_wsl_forth_slide_component__WEBPACK_IMPORTED_MODULE_8__["WslForthSlideComponent"],
                    _why_do_you_need_wsl_wsl_fifth_slide_wsl_fifth_slide_component__WEBPACK_IMPORTED_MODULE_6__["WslFifthSlideComponent"],
                    _why_do_you_need_wsl_wsl_sixth_slide_wsl_sixth_slide_component__WEBPACK_IMPORTED_MODULE_12__["WslSixthSlideComponent"],
                    _why_do_you_need_wsl_wsl_seventh_slide_wsl_seventh_slide_component__WEBPACK_IMPORTED_MODULE_11__["WslSeventhSlideComponent"],
                    _why_do_you_need_wsl_wsl_eighth_slide_wsl_eighth_slide_component__WEBPACK_IMPORTED_MODULE_5__["WslEighthSlideComponent"],
                    _why_do_you_need_wsl_wsl_ninth_slide_wsl_ninth_slide_component__WEBPACK_IMPORTED_MODULE_9__["WslNinthSlideComponent"]
                ],
                imports: [_app_shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _talks_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["TalksPageRoutingModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/talks-page/why-do-you-need-wsl/why-do-you-need-wsl.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/talks-page/why-do-you-need-wsl/why-do-you-need-wsl.component.ts ***!
  \***************************************************************************************/
/*! exports provided: WhyDoYouNeedWslComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhyDoYouNeedWslComponent", function() { return WhyDoYouNeedWslComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_declarations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app-declarations */ "./src/declarations/index.ts");
/* harmony import */ var _app_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app-functions */ "./src/app/functions/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









class WhyDoYouNeedWslComponent {
    constructor(_hostElement, _router, _activatedRoute) {
        this._hostElement = _hostElement;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.slideHeightPx$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](0);
        this.slideWidthPx$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](0);
        this._deepestActivatedRoute$ = this._router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((innerEvent) => innerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(this._activatedRoute), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(() => Object(_app_functions__WEBPACK_IMPORTED_MODULE_3__["getDeepestActivatedRoute"])(this._activatedRoute)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])(1));
        this._routeData$ = this._deepestActivatedRoute$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((innerActivatedRoute) => innerActivatedRoute.data), Object(_app_functions__WEBPACK_IMPORTED_MODULE_3__["filterNotNullOrUndefined"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])(1));
        this._currentSlidePath$ = this._deepestActivatedRoute$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((innerActivatedRoute) => innerActivatedRoute.url), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((innerUrlSegments) => innerUrlSegments[0]), Object(_app_functions__WEBPACK_IMPORTED_MODULE_3__["filterNotNullOrUndefined"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((innerFirstSegment) => {
            const decimalNumberSystemRadix = 10;
            return Number.parseInt(innerFirstSegment.path, decimalNumberSystemRadix);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])(1));
        this._lastSlidePath$ = this._routeData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((innerData) => innerData.hasOwnProperty('lastSlideIndex')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((innerData) => innerData.lastSlideIndex), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])(1));
        this._firstSlidePath$ = this._routeData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((innerData) => innerData.hasOwnProperty('firstSlideIndex')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((innerData) => innerData.firstSlideIndex), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])(1));
    }
    updateSlideElementHeight() {
        this.updateSlideSize();
    }
    processKeyPressEvent(event) {
        const arrowLeftPressed = event.key === _app_declarations__WEBPACK_IMPORTED_MODULE_2__["EventKey"].ArrowLeft;
        const arrowRightPressed = event.key === _app_declarations__WEBPACK_IMPORTED_MODULE_2__["EventKey"].ArrowRight;
        if (!arrowLeftPressed && !arrowRightPressed) {
            return;
        }
        if (arrowLeftPressed) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this._currentSlidePath$, this._firstSlidePath$])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((innerData) => {
                let Aggregated;
                (function (Aggregated) {
                    Aggregated[Aggregated["currentSlidePath"] = 0] = "currentSlidePath";
                    Aggregated[Aggregated["firstSlidePath"] = 1] = "firstSlidePath";
                })(Aggregated || (Aggregated = {}));
                const currentSlideIndex = innerData[Aggregated.currentSlidePath];
                const firstSlideIndex = innerData[Aggregated.firstSlidePath];
                return currentSlideIndex <= firstSlideIndex ? firstSlideIndex : currentSlideIndex - 1;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
                .subscribe((targetIndex) => this._router.navigateByUrl(`/talks/wsl/${targetIndex}`));
            return;
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this._currentSlidePath$, this._lastSlidePath$])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((innerData) => {
            let Aggregated;
            (function (Aggregated) {
                Aggregated[Aggregated["currentSlidePath"] = 0] = "currentSlidePath";
                Aggregated[Aggregated["lastSlidePath"] = 1] = "lastSlidePath";
            })(Aggregated || (Aggregated = {}));
            const currentSlideIndex = innerData[Aggregated.currentSlidePath];
            const lastSlideIndex = innerData[Aggregated.lastSlidePath];
            return currentSlideIndex >= lastSlideIndex ? lastSlideIndex : currentSlideIndex + 1;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .subscribe((targetIndex) => this._router.navigateByUrl(`/talks/wsl/${targetIndex}`));
        this._lastSlidePath$.pipe();
    }
    ngOnInit() {
        this.updateSlideSize();
    }
    updateSlideSize() {
        const currentHostElementWidthPx = this._hostElement.nativeElement.getBoundingClientRect().width;
        const currentHostElementHeightPx = this._hostElement.nativeElement.getBoundingClientRect().height;
        const horizontalRatio = 16;
        const verticalRatio = 9;
        const slideWidthPx = currentHostElementWidthPx;
        const slideHeightPx = (currentHostElementWidthPx / horizontalRatio) * verticalRatio;
        if (slideHeightPx <= currentHostElementHeightPx) {
            this.slideWidthPx$.next(slideWidthPx);
            this.slideHeightPx$.next(slideHeightPx);
            return;
        }
        this.slideWidthPx$.next((currentHostElementHeightPx / verticalRatio) * horizontalRatio);
        this.slideHeightPx$.next(currentHostElementHeightPx);
    }
}
WhyDoYouNeedWslComponent.ɵfac = function WhyDoYouNeedWslComponent_Factory(t) { return new (t || WhyDoYouNeedWslComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
WhyDoYouNeedWslComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WhyDoYouNeedWslComponent, selectors: [["app-why-do-you-need-wsl"]], hostBindings: function WhyDoYouNeedWslComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function WhyDoYouNeedWslComponent_resize_HostBindingHandler() { return ctx.updateSlideElementHeight(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keydown", function WhyDoYouNeedWslComponent_keydown_HostBindingHandler($event) { return ctx.processKeyPressEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 4, vars: 8, consts: [[1, "slide"]], template: function WhyDoYouNeedWslComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, ctx.slideWidthPx$), "px")("height", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx.slideHeightPx$), "px");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: nowrap;\n}\n\n.slide[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL2FwcC9wYWdlcy90YWxrcy1wYWdlL3doeS1kby15b3UtbmVlZC13c2wvd2h5LWRvLXlvdS1uZWVkLXdzbC5jb21wb25lbnQuc2NzcyIsIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL3N0eWxlcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFsa3MtcGFnZS93aHktZG8teW91LW5lZWQtd3NsL3doeS1kby15b3UtbmVlZC13c2wuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQ0tFLGFBQUE7RUFFRixzQkROd0I7RUNPeEIsbUJEUGdDO0VDUWhDLHVCRFJ3QztFQ1N4QyxpQkRUZ0Q7QUVFbEQ7O0FGQ0E7RUFDRSxXQUFBO0FFRUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWxrcy1wYWdlL3doeS1kby15b3UtbmVlZC13c2wvd2h5LWRvLXlvdS1uZWVkLXdzbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ21peGlucyc7XG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIEBpbmNsdWRlIGZsZXgtY29udGFpbmVyKGNvbHVtbiwgY2VudGVyLCBjZW50ZXIsIG5vd3JhcCwgJ25vcm1hbCcpO1xufVxuXG4uc2xpZGUge1xuICB3aWR0aDogMTAwJTtcbn1cbiIsIkBtaXhpbiBmbGV4LWNvbnRhaW5lcihcbiAgJGZsZXgtZGlyZWN0aW9uOiByb3csXG4gICRhbGlnbi1pdGVtczogZmxleC1zdGFydCxcbiAgJGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCxcbiAgJGZsZXgtd3JhcDogbm93cmFwLFxuICAkZmxleC10eXBlOiAnbm9ybWFsJ1xuKSB7XG4gIEBpZiAkZmxleC10eXBlID09ICdpbmxpbmUnIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgfSBAZWxzZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBmbGV4LWRpcmVjdGlvbjogJGZsZXgtZGlyZWN0aW9uO1xuICBhbGlnbi1pdGVtczogJGFsaWduLWl0ZW1zO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5LWNvbnRlbnQ7XG4gIGZsZXgtd3JhcDogJGZsZXgtd3JhcDtcbn1cbiIsIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuXG4uc2xpZGUge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WhyDoYouNeedWslComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                selector: 'app-why-do-you-need-wsl',
                styleUrls: ['./why-do-you-need-wsl.component.scss'],
                templateUrl: './why-do-you-need-wsl.component.html'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { updateSlideElementHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize']
        }], processKeyPressEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:keydown', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-eighth-slide/wsl-eighth-slide.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/talks-page/why-do-you-need-wsl/wsl-eighth-slide/wsl-eighth-slide.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: WslEighthSlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WslEighthSlideComponent", function() { return WslEighthSlideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WslEighthSlideComponent {
}
WslEighthSlideComponent.ɵfac = function WslEighthSlideComponent_Factory(t) { return new (t || WslEighthSlideComponent)(); };
WslEighthSlideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WslEighthSlideComponent, selectors: [["app-wsl-eighth-slide"]], decls: 5, vars: 2, consts: [["src", "/assets/talks/why-do-you-need-wsl/slide-8-img.gif"]], template: function WslEighthSlideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "<<<<<<< HEAD\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n=======\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n>>>>>>> add wsl talk slides\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 60, "%");
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: #ffffff;\n  width: 100%;\n  height: 100%;\n  padding: 1rem;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL2FwcC9wYWdlcy90YWxrcy1wYWdlL3doeS1kby15b3UtbmVlZC13c2wvd3NsLWVpZ2h0aC1zbGlkZS93c2wtZWlnaHRoLXNsaWRlLmNvbXBvbmVudC5zY3NzIiwiL2MvUHJvamVjdHMvc2NhcmxldGZsYXNoLmdpdGh1Yi5pby9hcHBsaWNhdGlvbi9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL2MvUHJvamVjdHMvc2NhcmxldGZsYXNoLmdpdGh1Yi5pby9hcHBsaWNhdGlvbi9zcmMvc3R5bGVzL21peGlucy5zY3NzIiwic3JjL2FwcC9wYWdlcy90YWxrcy1wYWdlL3doeS1kby15b3UtbmVlZC13c2wvd3NsLWVpZ2h0aC1zbGlkZS93c2wtZWlnaHRoLXNsaWRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsY0FBQTtFQUNBLHlCQ0RZO0VERVosV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUVDRSxhQUFBO0VBRUYsc0JGRndCO0VFR3hCLG1CRkhnQztFRUloQyx1QkZKd0M7RUVLeEMsaUJGTGdEO0FHRWxEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFsa3MtcGFnZS93aHktZG8teW91LW5lZWQtd3NsL3dzbC1laWdodGgtc2xpZGUvd3NsLWVpZ2h0aC1zbGlkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdtaXhpbnMnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Jfd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIEBpbmNsdWRlIGZsZXgtY29udGFpbmVyKGNvbHVtbiwgY2VudGVyLCBjZW50ZXIsIG5vd3JhcCwgJ25vcm1hbCcpO1xufVxuIiwiLy8gY29sb3JzXG4kY29sb3JfcHJpbWFyeS1yZWQ6ICNmZjE3NDQ7XG4kY29sb3JfZ3JleS1kYXJrOiAjMzMzMzMzO1xuJGNvbG9yX2dyZXktbGlnaHQ6ICNlNWU1ZTU7XG4kY29sb3Jfd2hpdGU6ICNmZmZmZmY7XG4kY29sb3JfYmxhY2s6ICMwMDAwMDA7XG5cbi8vIGZvbnQtZmFtaWxpZXNcbiRmb250LWZhbWlseV9zYXRpc2Z5OiAnU2F0aXNmeScsIGN1cnNpdmU7XG4kZm9udC1mYW1pbHlfcmFsZXdheTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuXG4vLyB0ZXh0LXNoYWRvd1xuJHRleHQtc2hhZG93X3RpdGxlOiAwLjEyNXJlbSAwLjEyNXJlbSAwLjVyZW0gJGNvbG9yX2JsYWNrO1xuXG4vLyBib3gtc2hhZG93XG4kYm94LXNoYWRvd19jb21tb246IDAgMCAwLjVyZW0gJGNvbG9yX2JsYWNrO1xuIiwiQG1peGluIGZsZXgtY29udGFpbmVyKFxuICAkZmxleC1kaXJlY3Rpb246IHJvdyxcbiAgJGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0LFxuICAkanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0LFxuICAkZmxleC13cmFwOiBub3dyYXAsXG4gICRmbGV4LXR5cGU6ICdub3JtYWwnXG4pIHtcbiAgQGlmICRmbGV4LXR5cGUgPT0gJ2lubGluZScge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB9IEBlbHNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIGZsZXgtZGlyZWN0aW9uOiAkZmxleC1kaXJlY3Rpb247XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ24taXRlbXM7XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnktY29udGVudDtcbiAgZmxleC13cmFwOiAkZmxleC13cmFwO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufSJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WslEighthSlideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                selector: 'app-wsl-eighth-slide',
                styleUrls: ['./wsl-eighth-slide.component.scss'],
                templateUrl: './wsl-eighth-slide.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-fifth-slide/wsl-fifth-slide.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/talks-page/why-do-you-need-wsl/wsl-fifth-slide/wsl-fifth-slide.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: WslFifthSlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WslFifthSlideComponent", function() { return WslFifthSlideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WslFifthSlideComponent {
}
WslFifthSlideComponent.ɵfac = function WslFifthSlideComponent_Factory(t) { return new (t || WslFifthSlideComponent)(); };
WslFifthSlideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WslFifthSlideComponent, selectors: [["app-wsl-fifth-slide"]], decls: 5, vars: 2, consts: [["src", "/assets/talks/why-do-you-need-wsl/slide-5-img.gif"]], template: function WslFifthSlideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "<<<<<<< HEAD\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n=======\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n>>>>>>> add wsl talk slides\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 60, "%");
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: #ffffff;\n  width: 100%;\n  height: 100%;\n  padding: 1rem;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL2FwcC9wYWdlcy90YWxrcy1wYWdlL3doeS1kby15b3UtbmVlZC13c2wvd3NsLWZpZnRoLXNsaWRlL3dzbC1maWZ0aC1zbGlkZS5jb21wb25lbnQuc2NzcyIsIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL3N0eWxlcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFsa3MtcGFnZS93aHktZG8teW91LW5lZWQtd3NsL3dzbC1maWZ0aC1zbGlkZS93c2wtZmlmdGgtc2xpZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxjQUFBO0VBQ0EseUJDRFk7RURFWixXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFRUNFLGFBQUE7RUFFRixtQkZGd0I7RUVHeEIsbUJGSDZCO0VFSTdCLHVCRkpxQztFRUtyQyxpQkZMNkM7QUdFL0MiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWxrcy1wYWdlL3doeS1kby15b3UtbmVlZC13c2wvd3NsLWZpZnRoLXNsaWRlL3dzbC1maWZ0aC1zbGlkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdtaXhpbnMnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Jfd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIEBpbmNsdWRlIGZsZXgtY29udGFpbmVyKHJvdywgY2VudGVyLCBjZW50ZXIsIG5vd3JhcCwgJ25vcm1hbCcpO1xufVxuIiwiLy8gY29sb3JzXG4kY29sb3JfcHJpbWFyeS1yZWQ6ICNmZjE3NDQ7XG4kY29sb3JfZ3JleS1kYXJrOiAjMzMzMzMzO1xuJGNvbG9yX2dyZXktbGlnaHQ6ICNlNWU1ZTU7XG4kY29sb3Jfd2hpdGU6ICNmZmZmZmY7XG4kY29sb3JfYmxhY2s6ICMwMDAwMDA7XG5cbi8vIGZvbnQtZmFtaWxpZXNcbiRmb250LWZhbWlseV9zYXRpc2Z5OiAnU2F0aXNmeScsIGN1cnNpdmU7XG4kZm9udC1mYW1pbHlfcmFsZXdheTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuXG4vLyB0ZXh0LXNoYWRvd1xuJHRleHQtc2hhZG93X3RpdGxlOiAwLjEyNXJlbSAwLjEyNXJlbSAwLjVyZW0gJGNvbG9yX2JsYWNrO1xuXG4vLyBib3gtc2hhZG93XG4kYm94LXNoYWRvd19jb21tb246IDAgMCAwLjVyZW0gJGNvbG9yX2JsYWNrO1xuIiwiQG1peGluIGZsZXgtY29udGFpbmVyKFxuICAkZmxleC1kaXJlY3Rpb246IHJvdyxcbiAgJGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0LFxuICAkanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0LFxuICAkZmxleC13cmFwOiBub3dyYXAsXG4gICRmbGV4LXR5cGU6ICdub3JtYWwnXG4pIHtcbiAgQGlmICRmbGV4LXR5cGUgPT0gJ2lubGluZScge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB9IEBlbHNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIGZsZXgtZGlyZWN0aW9uOiAkZmxleC1kaXJlY3Rpb247XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ24taXRlbXM7XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnktY29udGVudDtcbiAgZmxleC13cmFwOiAkZmxleC13cmFwO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufSJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WslFifthSlideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                selector: 'app-wsl-fifth-slide',
                styleUrls: ['./wsl-fifth-slide.component.scss'],
                templateUrl: './wsl-fifth-slide.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-first-slide/wsl-first-slide.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/talks-page/why-do-you-need-wsl/wsl-first-slide/wsl-first-slide.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: WslFirstSlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WslFirstSlideComponent", function() { return WslFirstSlideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WslFirstSlideComponent {
}
WslFirstSlideComponent.ɵfac = function WslFirstSlideComponent_Factory(t) { return new (t || WslFirstSlideComponent)(); };
WslFirstSlideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WslFirstSlideComponent, selectors: [["app-wsl-first-slide"]], decls: 8, vars: 0, consts: [[1, "title"], [1, "subtitle"]], template: function WslFirstSlideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " WSL\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Why do you need it\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " How does it work\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Upcoming features\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-image: url(\"/assets/talks/why-do-you-need-wsl/slide-1-bg.jpg\");\n  background-position: center center;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  padding: 1rem;\n  box-sizing: border-box;\n}\n\n.title[_ngcontent-%COMP%], .subtitle[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-family: \"Raleway\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL2FwcC9wYWdlcy90YWxrcy1wYWdlL3doeS1kby15b3UtbmVlZC13c2wvd3NsLWZpcnN0LXNsaWRlL3dzbC1maXJzdC1zbGlkZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFsa3MtcGFnZS93aHktZG8teW91LW5lZWQtd3NsL3dzbC1maXJzdC1zbGlkZS93c2wtZmlyc3Qtc2xpZGUuY29tcG9uZW50LnNjc3MiLCIvYy9Qcm9qZWN0cy9zY2FybGV0Zmxhc2guZ2l0aHViLmlvL2FwcGxpY2F0aW9uL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0EseUVBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNERjs7QURJQTs7RUFFRSxjRVhZO0VGWVosa0NFUG9CO0FETXRCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFsa3MtcGFnZS93aHktZG8teW91LW5lZWQtd3NsL3dzbC1maXJzdC1zbGlkZS93c2wtZmlyc3Qtc2xpZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvdGFsa3Mvd2h5LWRvLXlvdS1uZWVkLXdzbC9zbGlkZS0xLWJnLmpwZycpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4udGl0bGUsXG4uc3VidGl0bGUge1xuICBjb2xvcjogJGNvbG9yX3doaXRlO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5X3JhbGV3YXk7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3RhbGtzL3doeS1kby15b3UtbmVlZC13c2wvc2xpZGUtMS1iZy5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi50aXRsZSxcbi5zdWJ0aXRsZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XG59IiwiLy8gY29sb3JzXG4kY29sb3JfcHJpbWFyeS1yZWQ6ICNmZjE3NDQ7XG4kY29sb3JfZ3JleS1kYXJrOiAjMzMzMzMzO1xuJGNvbG9yX2dyZXktbGlnaHQ6ICNlNWU1ZTU7XG4kY29sb3Jfd2hpdGU6ICNmZmZmZmY7XG4kY29sb3JfYmxhY2s6ICMwMDAwMDA7XG5cbi8vIGZvbnQtZmFtaWxpZXNcbiRmb250LWZhbWlseV9zYXRpc2Z5OiAnU2F0aXNmeScsIGN1cnNpdmU7XG4kZm9udC1mYW1pbHlfcmFsZXdheTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuXG4vLyB0ZXh0LXNoYWRvd1xuJHRleHQtc2hhZG93X3RpdGxlOiAwLjEyNXJlbSAwLjEyNXJlbSAwLjVyZW0gJGNvbG9yX2JsYWNrO1xuXG4vLyBib3gtc2hhZG93XG4kYm94LXNoYWRvd19jb21tb246IDAgMCAwLjVyZW0gJGNvbG9yX2JsYWNrO1xuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WslFirstSlideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                selector: 'app-wsl-first-slide',
                styleUrls: ['./wsl-first-slide.component.scss'],
                templateUrl: './wsl-first-slide.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-forth-slide/wsl-forth-slide.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/talks-page/why-do-you-need-wsl/wsl-forth-slide/wsl-forth-slide.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: WslForthSlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WslForthSlideComponent", function() { return WslForthSlideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WslForthSlideComponent {
}
WslForthSlideComponent.ɵfac = function WslForthSlideComponent_Factory(t) { return new (t || WslForthSlideComponent)(); };
WslForthSlideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WslForthSlideComponent, selectors: [["app-wsl-forth-slide"]], decls: 30, vars: 0, consts: [[1, "tools"], [1, "tools__item"], [1, "arrow"], [1, "wsl"], ["src", "/assets/talks/why-do-you-need-wsl/slide-4-img.gif"], [1, "subtitle"]], template: function WslForthSlideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " node.js ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u21E2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Git ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u21E2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " FTP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u21E2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " SSH ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u21E2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " ... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u21E2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "WSL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: #ffffff;\n  width: 100%;\n  height: 100%;\n  padding: 1rem;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: nowrap;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  color: #000000;\n  padding: 0.25rem;\n  margin: 0;\n  font-family: \"Raleway\", sans-serif;\n}\n\n.tools[_ngcontent-%COMP%] {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: center;\n  flex-wrap: nowrap;\n}\n\n.tools__item[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  margin: 0.5rem;\n  border: 0.0625rem #ff1744 solid;\n}\n\n.wsl[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border: 0.0625rem #ff1744 solid;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL2FwcC9wYWdlcy90YWxrcy1wYWdlL3doeS1kby15b3UtbmVlZC13c2wvd3NsLWZvcnRoLXNsaWRlL3dzbC1mb3J0aC1zbGlkZS5jb21wb25lbnQuc2NzcyIsIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL3N0eWxlcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFsa3MtcGFnZS93aHktZG8teW91LW5lZWQtd3NsL3dzbC1mb3J0aC1zbGlkZS93c2wtZm9ydGgtc2xpZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxjQUFBO0VBQ0EseUJDRFk7RURFWixXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFRUNFLGFBQUE7RUFFRixtQkZGd0I7RUVHeEIsbUJGSDZCO0VFSTdCLHVCRkpxQztFRUtyQyxpQkZMNkM7QUdFL0M7O0FIQ0E7RUFDRSxjQ1RZO0VEVVosZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0NDUm9CO0FFVXRCOztBSENBO0VBQ0UsYUFBQTtFRVhFLGFBQUE7RUFFRixzQkZVd0I7RUVUeEIscUJGU2dDO0VFUmhDLHVCRlEwQztFRVAxQyxpQkZPa0Q7QUdNcEQ7O0FISkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0FHTUo7O0FIRkE7RUFDRSxlQUFBO0VBQ0EsK0JBQUE7RUV2QkUsYUFBQTtFQUVGLHNCRnNCd0I7RUVyQnhCLG1CRnFCZ0M7RUVwQmhDLHVCRm9Cd0M7RUVuQnhDLGlCRm1CZ0Q7QUdTbEQiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWxrcy1wYWdlL3doeS1kby15b3UtbmVlZC13c2wvd3NsLWZvcnRoLXNsaWRlL3dzbC1mb3J0aC1zbGlkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdtaXhpbnMnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Jfd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIEBpbmNsdWRlIGZsZXgtY29udGFpbmVyKHJvdywgY2VudGVyLCBjZW50ZXIsIG5vd3JhcCwgJ25vcm1hbCcpO1xufVxuXG4uc3VidGl0bGUge1xuICBjb2xvcjogJGNvbG9yX2JsYWNrO1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHlfcmFsZXdheTtcbn1cblxuLnRvb2xzIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgQGluY2x1ZGUgZmxleC1jb250YWluZXIoY29sdW1uLCBmbGV4LWVuZCwgY2VudGVyLCBub3dyYXAsICdub3JtYWwnKTtcblxuICAmX19pdGVtIHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgbWFyZ2luOiAwLjVyZW07XG4gICAgYm9yZGVyOiAwLjA2MjVyZW0gJGNvbG9yX3ByaW1hcnktcmVkIHNvbGlkO1xuICB9XG59XG5cbi53c2wge1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJvcmRlcjogMC4wNjI1cmVtICRjb2xvcl9wcmltYXJ5LXJlZCBzb2xpZDtcbiAgQGluY2x1ZGUgZmxleC1jb250YWluZXIoY29sdW1uLCBjZW50ZXIsIGNlbnRlciwgbm93cmFwLCAnbm9ybWFsJyk7XG59XG4iLCIvLyBjb2xvcnNcbiRjb2xvcl9wcmltYXJ5LXJlZDogI2ZmMTc0NDtcbiRjb2xvcl9ncmV5LWRhcms6ICMzMzMzMzM7XG4kY29sb3JfZ3JleS1saWdodDogI2U1ZTVlNTtcbiRjb2xvcl93aGl0ZTogI2ZmZmZmZjtcbiRjb2xvcl9ibGFjazogIzAwMDAwMDtcblxuLy8gZm9udC1mYW1pbGllc1xuJGZvbnQtZmFtaWx5X3NhdGlzZnk6ICdTYXRpc2Z5JywgY3Vyc2l2ZTtcbiRmb250LWZhbWlseV9yYWxld2F5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG5cbi8vIHRleHQtc2hhZG93XG4kdGV4dC1zaGFkb3dfdGl0bGU6IDAuMTI1cmVtIDAuMTI1cmVtIDAuNXJlbSAkY29sb3JfYmxhY2s7XG5cbi8vIGJveC1zaGFkb3dcbiRib3gtc2hhZG93X2NvbW1vbjogMCAwIDAuNXJlbSAkY29sb3JfYmxhY2s7XG4iLCJAbWl4aW4gZmxleC1jb250YWluZXIoXG4gICRmbGV4LWRpcmVjdGlvbjogcm93LFxuICAkYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQsXG4gICRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQsXG4gICRmbGV4LXdyYXA6IG5vd3JhcCxcbiAgJGZsZXgtdHlwZTogJ25vcm1hbCdcbikge1xuICBAaWYgJGZsZXgtdHlwZSA9PSAnaW5saW5lJyB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIH0gQGVsc2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgZmxleC1kaXJlY3Rpb246ICRmbGV4LWRpcmVjdGlvbjtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbi1pdGVtcztcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeS1jb250ZW50O1xuICBmbGV4LXdyYXA6ICRmbGV4LXdyYXA7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcbn1cblxuLnRvb2xzIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG4udG9vbHNfX2l0ZW0ge1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIG1hcmdpbjogMC41cmVtO1xuICBib3JkZXI6IDAuMDYyNXJlbSAjZmYxNzQ0IHNvbGlkO1xufVxuXG4ud3NsIHtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXI6IDAuMDYyNXJlbSAjZmYxNzQ0IHNvbGlkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59Il19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WslForthSlideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                selector: 'app-wsl-forth-slide',
                styleUrls: ['./wsl-forth-slide.component.scss'],
                templateUrl: './wsl-forth-slide.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-ninth-slide/wsl-ninth-slide.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/talks-page/why-do-you-need-wsl/wsl-ninth-slide/wsl-ninth-slide.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: WslNinthSlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WslNinthSlideComponent", function() { return WslNinthSlideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WslNinthSlideComponent {
}
WslNinthSlideComponent.ɵfac = function WslNinthSlideComponent_Factory(t) { return new (t || WslNinthSlideComponent)(); };
WslNinthSlideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WslNinthSlideComponent, selectors: [["app-wsl-ninth-slide"]], decls: 30, vars: 0, consts: [[1, "version"], [1, "subtitle"], [1, "system"], [1, "system__title"], [1, "system__component"], [1, "arrow"]], template: function WslNinthSlideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " WSL 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Linux ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Docker CLI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u21C5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Windows ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Docker Daemon ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " WSL 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Linux ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Docker CLI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Docker Daemon ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \u21C5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Windows ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: #ffffff;\n  width: 100%;\n  height: 100%;\n  padding: 1rem;\n  box-sizing: border-box;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-wrap: nowrap;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  color: #000000;\n  font-family: \"Raleway\", sans-serif;\n}\n\n.version[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 40%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: nowrap;\n}\n\n.system[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0.0625rem #ff1744 solid;\n  position: relative;\n  padding: 3rem 1rem 1rem;\n  margin: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: nowrap;\n}\n\n.system__title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  padding: 0.5rem;\n  color: #ff1744;\n}\n\n.system__component[_ngcontent-%COMP%] {\n  color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL2FwcC9wYWdlcy90YWxrcy1wYWdlL3doeS1kby15b3UtbmVlZC13c2wvd3NsLW5pbnRoLXNsaWRlL3dzbC1uaW50aC1zbGlkZS5jb21wb25lbnQuc2NzcyIsIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL3N0eWxlcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFsa3MtcGFnZS93aHktZG8teW91LW5lZWQtd3NsL3dzbC1uaW50aC1zbGlkZS93c2wtbmludGgtc2xpZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxjQUFBO0VBQ0EseUJDRFk7RURFWixXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VFQUUsYUFBQTtFQUVGLG1CRkR3QjtFRUV4QixtQkZGNkI7RUVHN0IsNkJGSHFDO0VFSXJDLGlCRkptRDtBR0VyRDs7QUhDQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGNDWlk7RURhWixrQ0NUb0I7QUVXdEI7O0FIQ0E7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFRWJFLGFBQUE7RUFFRixzQkZhd0I7RUVaeEIsbUJGWWdDO0VFWGhDLHVCRld3QztFRVZ4QyxpQkZVZ0Q7QUdLbEQ7O0FIRkE7RUFDRSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFRXZCRSxhQUFBO0VBRUYsc0JGc0J3QjtFRXJCeEIsbUJGcUJnQztFRXBCaEMsdUJGb0J3QztFRW5CeEMsaUJGbUJnRDtBR1NsRDs7QUhQRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGVBQUE7RUFDQSxjQ3ZDZ0I7QUVnRHBCOztBSE5FO0VBQ0UsY0N2Q1U7QUUrQ2QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWxrcy1wYWdlL3doeS1kby15b3UtbmVlZC13c2wvd3NsLW5pbnRoLXNsaWRlL3dzbC1uaW50aC1zbGlkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdtaXhpbnMnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Jfd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgQGluY2x1ZGUgZmxleC1jb250YWluZXIocm93LCBjZW50ZXIsIHNwYWNlLWV2ZW5seSwgbm93cmFwLCAnbm9ybWFsJyk7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBjb2xvcjogJGNvbG9yX2JsYWNrO1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5X3JhbGV3YXk7XG59XG5cbi52ZXJzaW9uIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNDAlO1xuICAvLyBib3JkZXI6IDAuMDYyNXJlbSAkY29sb3JfcHJpbWFyeS1yZWQgc29saWQ7XG4gIEBpbmNsdWRlIGZsZXgtY29udGFpbmVyKGNvbHVtbiwgY2VudGVyLCBjZW50ZXIsIG5vd3JhcCwgJ25vcm1hbCcpO1xufVxuXG4uc3lzdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMC4wNjI1cmVtICRjb2xvcl9wcmltYXJ5LXJlZCBzb2xpZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAzcmVtIDFyZW0gMXJlbTtcbiAgbWFyZ2luOiAxcmVtO1xuICBAaW5jbHVkZSBmbGV4LWNvbnRhaW5lcihjb2x1bW4sIGNlbnRlciwgY2VudGVyLCBub3dyYXAsICdub3JtYWwnKTtcblxuICAmX190aXRsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgY29sb3I6ICRjb2xvcl9wcmltYXJ5LXJlZDtcbiAgfVxuXG4gICZfX2NvbXBvbmVudCB7XG4gICAgY29sb3I6ICRjb2xvcl9ibGFjaztcbiAgfVxufVxuIiwiLy8gY29sb3JzXG4kY29sb3JfcHJpbWFyeS1yZWQ6ICNmZjE3NDQ7XG4kY29sb3JfZ3JleS1kYXJrOiAjMzMzMzMzO1xuJGNvbG9yX2dyZXktbGlnaHQ6ICNlNWU1ZTU7XG4kY29sb3Jfd2hpdGU6ICNmZmZmZmY7XG4kY29sb3JfYmxhY2s6ICMwMDAwMDA7XG5cbi8vIGZvbnQtZmFtaWxpZXNcbiRmb250LWZhbWlseV9zYXRpc2Z5OiAnU2F0aXNmeScsIGN1cnNpdmU7XG4kZm9udC1mYW1pbHlfcmFsZXdheTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuXG4vLyB0ZXh0LXNoYWRvd1xuJHRleHQtc2hhZG93X3RpdGxlOiAwLjEyNXJlbSAwLjEyNXJlbSAwLjVyZW0gJGNvbG9yX2JsYWNrO1xuXG4vLyBib3gtc2hhZG93XG4kYm94LXNoYWRvd19jb21tb246IDAgMCAwLjVyZW0gJGNvbG9yX2JsYWNrO1xuIiwiQG1peGluIGZsZXgtY29udGFpbmVyKFxuICAkZmxleC1kaXJlY3Rpb246IHJvdyxcbiAgJGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0LFxuICAkanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0LFxuICAkZmxleC13cmFwOiBub3dyYXAsXG4gICRmbGV4LXR5cGU6ICdub3JtYWwnXG4pIHtcbiAgQGlmICRmbGV4LXR5cGUgPT0gJ2lubGluZScge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB9IEBlbHNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIGZsZXgtZGlyZWN0aW9uOiAkZmxleC1kaXJlY3Rpb247XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ24taXRlbXM7XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnktY29udGVudDtcbiAgZmxleC13cmFwOiAkZmxleC13cmFwO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xufVxuXG4udmVyc2lvbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDQwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuXG4uc3lzdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMC4wNjI1cmVtICNmZjE3NDQgc29saWQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogM3JlbSAxcmVtIDFyZW07XG4gIG1hcmdpbjogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuLnN5c3RlbV9fdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcGFkZGluZzogMC41cmVtO1xuICBjb2xvcjogI2ZmMTc0NDtcbn1cbi5zeXN0ZW1fX2NvbXBvbmVudCB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufSJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WslNinthSlideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                selector: 'app-wsl-ninth-slide',
                styleUrls: ['./wsl-ninth-slide.component.scss'],
                templateUrl: './wsl-ninth-slide.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-second-slide/wsl-second-slide.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/talks-page/why-do-you-need-wsl/wsl-second-slide/wsl-second-slide.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: WslSecondSlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WslSecondSlideComponent", function() { return WslSecondSlideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WslSecondSlideComponent {
}
WslSecondSlideComponent.ɵfac = function WslSecondSlideComponent_Factory(t) { return new (t || WslSecondSlideComponent)(); };
WslSecondSlideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WslSecondSlideComponent, selectors: [["app-wsl-second-slide"]], decls: 24, vars: 0, consts: [[1, "title"], [1, "subtitle"], [1, "highlighted"], [1, "versions"], [1, "versions__item"], [1, "versions__item", "versions__item_dashed"]], template: function WslSecondSlideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " WLS\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " is for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "W");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "indows ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "ubsystem for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "inux\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " WSL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "(stable)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " WSL 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "(preview)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: #ffffff;\n  width: 100%;\n  height: 100%;\n  padding: 1rem;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: nowrap;\n}\n\n.title[_ngcontent-%COMP%], .subtitle[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: \"Raleway\", sans-serif;\n}\n\n.highlighted[_ngcontent-%COMP%] {\n  color: #ff1744;\n}\n\n.versions[_ngcontent-%COMP%] {\n  padding: 1rem;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-wrap: nowrap;\n}\n\n.versions__item[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  width: 30%;\n  border: 0.0625rem #ff1744 solid;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: nowrap;\n}\n\n.versions__item_dashed[_ngcontent-%COMP%] {\n  border-style: dashed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL2FwcC9wYWdlcy90YWxrcy1wYWdlL3doeS1kby15b3UtbmVlZC13c2wvd3NsLXNlY29uZC1zbGlkZS93c2wtc2Vjb25kLXNsaWRlLmNvbXBvbmVudC5zY3NzIiwiL2MvUHJvamVjdHMvc2NhcmxldGZsYXNoLmdpdGh1Yi5pby9hcHBsaWNhdGlvbi9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL2MvUHJvamVjdHMvc2NhcmxldGZsYXNoLmdpdGh1Yi5pby9hcHBsaWNhdGlvbi9zcmMvc3R5bGVzL21peGlucy5zY3NzIiwic3JjL2FwcC9wYWdlcy90YWxrcy1wYWdlL3doeS1kby15b3UtbmVlZC13c2wvd3NsLXNlY29uZC1zbGlkZS93c2wtc2Vjb25kLXNsaWRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsY0FBQTtFQUNBLHlCQ0RZO0VERVosV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUVDRSxhQUFBO0VBRUYsc0JGRndCO0VFR3hCLG1CRkhnQztFRUloQyx1QkZKd0M7RUVLeEMsaUJGTGdEO0FHRWxEOztBSENBOztFQUVFLGNDVlk7RURXWixrQ0NQb0I7QUVTdEI7O0FIQ0E7RUFDRSxjQ25Ca0I7QUVxQnBCOztBSENBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUVmRSxhQUFBO0VBRUYsbUJGY3dCO0VFYnhCLG1CRmE2QjtFRVo3Qiw2QkZZcUM7RUVYckMsaUJGV21EO0FHTXJEOztBSEpFO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtFRXJCQSxhQUFBO0VBRUYsc0JGb0IwQjtFRW5CMUIsbUJGbUJrQztFRWxCbEMsdUJGa0IwQztFRWpCMUMsaUJGaUJrRDtBR1VwRDs7QUhSSTtFQUNFLG9CQUFBO0FHVU4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWxrcy1wYWdlL3doeS1kby15b3UtbmVlZC13c2wvd3NsLXNlY29uZC1zbGlkZS93c2wtc2Vjb25kLXNsaWRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcbkBpbXBvcnQgJ21peGlucyc7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl93aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgQGluY2x1ZGUgZmxleC1jb250YWluZXIoY29sdW1uLCBjZW50ZXIsIGNlbnRlciwgbm93cmFwLCAnbm9ybWFsJyk7XG59XG5cbi50aXRsZSxcbi5zdWJ0aXRsZSB7XG4gIGNvbG9yOiAkY29sb3JfYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHlfcmFsZXdheTtcbn1cblxuLmhpZ2hsaWdodGVkIHtcbiAgY29sb3I6ICRjb2xvcl9wcmltYXJ5LXJlZDtcbn1cblxuLnZlcnNpb25zIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIEBpbmNsdWRlIGZsZXgtY29udGFpbmVyKHJvdywgY2VudGVyLCBzcGFjZS1ldmVubHksIG5vd3JhcCwgJ25vcm1hbCcpO1xuXG4gICZfX2l0ZW0ge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICB3aWR0aDogMzAlO1xuICAgIGJvcmRlcjogMC4wNjI1cmVtICRjb2xvcl9wcmltYXJ5LXJlZCBzb2xpZDtcbiAgICBAaW5jbHVkZSBmbGV4LWNvbnRhaW5lcihjb2x1bW4sIGNlbnRlciwgY2VudGVyLCBub3dyYXAsICdub3JtYWwnKTtcblxuICAgICZfZGFzaGVkIHtcbiAgICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gY29sb3JzXG4kY29sb3JfcHJpbWFyeS1yZWQ6ICNmZjE3NDQ7XG4kY29sb3JfZ3JleS1kYXJrOiAjMzMzMzMzO1xuJGNvbG9yX2dyZXktbGlnaHQ6ICNlNWU1ZTU7XG4kY29sb3Jfd2hpdGU6ICNmZmZmZmY7XG4kY29sb3JfYmxhY2s6ICMwMDAwMDA7XG5cbi8vIGZvbnQtZmFtaWxpZXNcbiRmb250LWZhbWlseV9zYXRpc2Z5OiAnU2F0aXNmeScsIGN1cnNpdmU7XG4kZm9udC1mYW1pbHlfcmFsZXdheTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuXG4vLyB0ZXh0LXNoYWRvd1xuJHRleHQtc2hhZG93X3RpdGxlOiAwLjEyNXJlbSAwLjEyNXJlbSAwLjVyZW0gJGNvbG9yX2JsYWNrO1xuXG4vLyBib3gtc2hhZG93XG4kYm94LXNoYWRvd19jb21tb246IDAgMCAwLjVyZW0gJGNvbG9yX2JsYWNrO1xuIiwiQG1peGluIGZsZXgtY29udGFpbmVyKFxuICAkZmxleC1kaXJlY3Rpb246IHJvdyxcbiAgJGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0LFxuICAkanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0LFxuICAkZmxleC13cmFwOiBub3dyYXAsXG4gICRmbGV4LXR5cGU6ICdub3JtYWwnXG4pIHtcbiAgQGlmICRmbGV4LXR5cGUgPT0gJ2lubGluZScge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB9IEBlbHNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIGZsZXgtZGlyZWN0aW9uOiAkZmxleC1kaXJlY3Rpb247XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ24taXRlbXM7XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnktY29udGVudDtcbiAgZmxleC13cmFwOiAkZmxleC13cmFwO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuXG4udGl0bGUsXG4uc3VidGl0bGUge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uaGlnaGxpZ2h0ZWQge1xuICBjb2xvcjogI2ZmMTc0NDtcbn1cblxuLnZlcnNpb25zIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cbi52ZXJzaW9uc19faXRlbSB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgd2lkdGg6IDMwJTtcbiAgYm9yZGVyOiAwLjA2MjVyZW0gI2ZmMTc0NCBzb2xpZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuLnZlcnNpb25zX19pdGVtX2Rhc2hlZCB7XG4gIGJvcmRlci1zdHlsZTogZGFzaGVkO1xufSJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WslSecondSlideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                selector: 'app-wsl-second-slide',
                styleUrls: ['./wsl-second-slide.component.scss'],
                templateUrl: './wsl-second-slide.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-seventh-slide/wsl-seventh-slide.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/talks-page/why-do-you-need-wsl/wsl-seventh-slide/wsl-seventh-slide.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: WslSeventhSlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WslSeventhSlideComponent", function() { return WslSeventhSlideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WslSeventhSlideComponent {
}
WslSeventhSlideComponent.ɵfac = function WslSeventhSlideComponent_Factory(t) { return new (t || WslSeventhSlideComponent)(); };
WslSeventhSlideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WslSeventhSlideComponent, selectors: [["app-wsl-seventh-slide"]], decls: 4, vars: 0, consts: [[1, "code"], [1, "highlighted"]], template: function WslSeventhSlideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " wsl ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " --set-version <Distro> 2\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: #ffffff;\n  width: 100%;\n  height: 100%;\n  padding: 1rem;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: nowrap;\n}\n\n.code[_ngcontent-%COMP%] {\n  background: #000000;\n  color: #ffffff;\n  padding: 0.125rem;\n}\n\n.highlighted[_ngcontent-%COMP%] {\n  color: #ff1744;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL2FwcC9wYWdlcy90YWxrcy1wYWdlL3doeS1kby15b3UtbmVlZC13c2wvd3NsLXNldmVudGgtc2xpZGUvd3NsLXNldmVudGgtc2xpZGUuY29tcG9uZW50LnNjc3MiLCIvYy9Qcm9qZWN0cy9zY2FybGV0Zmxhc2guZ2l0aHViLmlvL2FwcGxpY2F0aW9uL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiLCIvYy9Qcm9qZWN0cy9zY2FybGV0Zmxhc2guZ2l0aHViLmlvL2FwcGxpY2F0aW9uL3NyYy9zdHlsZXMvbWl4aW5zLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RhbGtzLXBhZ2Uvd2h5LWRvLXlvdS1uZWVkLXdzbC93c2wtc2V2ZW50aC1zbGlkZS93c2wtc2V2ZW50aC1zbGlkZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGNBQUE7RUFDQSx5QkNEWTtFREVaLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VFQ0UsYUFBQTtFQUVGLG1CRkZ3QjtFRUd4QixtQkZINkI7RUVJN0IsdUJGSnFDO0VFS3JDLGlCRkw2QztBR0UvQzs7QUhDQTtFQUNFLG1CQ1RZO0VEVVosY0NYWTtFRFlaLGlCQUFBO0FHRUY7O0FIQ0E7RUFDRSxjQ25Ca0I7QUVxQnBCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFsa3MtcGFnZS93aHktZG8teW91LW5lZWQtd3NsL3dzbC1zZXZlbnRoLXNsaWRlL3dzbC1zZXZlbnRoLXNsaWRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcbkBpbXBvcnQgJ21peGlucyc7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl93aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgQGluY2x1ZGUgZmxleC1jb250YWluZXIocm93LCBjZW50ZXIsIGNlbnRlciwgbm93cmFwLCAnbm9ybWFsJyk7XG59XG5cbi5jb2RlIHtcbiAgYmFja2dyb3VuZDogJGNvbG9yX2JsYWNrO1xuICBjb2xvcjogJGNvbG9yX3doaXRlO1xuICBwYWRkaW5nOiAwLjEyNXJlbTtcbn1cblxuLmhpZ2hsaWdodGVkIHtcbiAgY29sb3I6ICRjb2xvcl9wcmltYXJ5LXJlZDtcbn1cbiIsIi8vIGNvbG9yc1xuJGNvbG9yX3ByaW1hcnktcmVkOiAjZmYxNzQ0O1xuJGNvbG9yX2dyZXktZGFyazogIzMzMzMzMztcbiRjb2xvcl9ncmV5LWxpZ2h0OiAjZTVlNWU1O1xuJGNvbG9yX3doaXRlOiAjZmZmZmZmO1xuJGNvbG9yX2JsYWNrOiAjMDAwMDAwO1xuXG4vLyBmb250LWZhbWlsaWVzXG4kZm9udC1mYW1pbHlfc2F0aXNmeTogJ1NhdGlzZnknLCBjdXJzaXZlO1xuJGZvbnQtZmFtaWx5X3JhbGV3YXk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcblxuLy8gdGV4dC1zaGFkb3dcbiR0ZXh0LXNoYWRvd190aXRsZTogMC4xMjVyZW0gMC4xMjVyZW0gMC41cmVtICRjb2xvcl9ibGFjaztcblxuLy8gYm94LXNoYWRvd1xuJGJveC1zaGFkb3dfY29tbW9uOiAwIDAgMC41cmVtICRjb2xvcl9ibGFjaztcbiIsIkBtaXhpbiBmbGV4LWNvbnRhaW5lcihcbiAgJGZsZXgtZGlyZWN0aW9uOiByb3csXG4gICRhbGlnbi1pdGVtczogZmxleC1zdGFydCxcbiAgJGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCxcbiAgJGZsZXgtd3JhcDogbm93cmFwLFxuICAkZmxleC10eXBlOiAnbm9ybWFsJ1xuKSB7XG4gIEBpZiAkZmxleC10eXBlID09ICdpbmxpbmUnIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgfSBAZWxzZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBmbGV4LWRpcmVjdGlvbjogJGZsZXgtZGlyZWN0aW9uO1xuICBhbGlnbi1pdGVtczogJGFsaWduLWl0ZW1zO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5LWNvbnRlbnQ7XG4gIGZsZXgtd3JhcDogJGZsZXgtd3JhcDtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cblxuLmNvZGUge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMC4xMjVyZW07XG59XG5cbi5oaWdobGlnaHRlZCB7XG4gIGNvbG9yOiAjZmYxNzQ0O1xufSJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WslSeventhSlideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                selector: 'app-wsl-seventh-slide',
                styleUrls: ['./wsl-seventh-slide.component.scss'],
                templateUrl: './wsl-seventh-slide.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-sixth-slide/wsl-sixth-slide.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/talks-page/why-do-you-need-wsl/wsl-sixth-slide/wsl-sixth-slide.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: WslSixthSlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WslSixthSlideComponent", function() { return WslSixthSlideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WslSixthSlideComponent {
}
WslSixthSlideComponent.ɵfac = function WslSixthSlideComponent_Factory(t) { return new (t || WslSixthSlideComponent)(); };
WslSixthSlideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WslSixthSlideComponent, selectors: [["app-wsl-sixth-slide"]], decls: 12, vars: 0, consts: [[1, "system"], [1, "layer"], [1, "arrow"]], template: function WslSixthSlideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Linux application ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u21E3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Linux ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u21C6\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Windows ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: #ffffff;\n  width: 100%;\n  height: 100%;\n  padding: 1rem;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-wrap: nowrap;\n}\n\n.system[_ngcontent-%COMP%] {\n  width: 40%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: nowrap;\n}\n\n.layer[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n  border: 0.0625rem #ff1744 solid;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-wrap: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL2FwcC9wYWdlcy90YWxrcy1wYWdlL3doeS1kby15b3UtbmVlZC13c2wvd3NsLXNpeHRoLXNsaWRlL3dzbC1zaXh0aC1zbGlkZS5jb21wb25lbnQuc2NzcyIsIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL3N0eWxlcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFsa3MtcGFnZS93aHktZG8teW91LW5lZWQtd3NsL3dzbC1zaXh0aC1zbGlkZS93c2wtc2l4dGgtc2xpZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxjQUFBO0VBQ0EseUJDRFk7RURFWixXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFRUNFLGFBQUE7RUFFRixtQkZGd0I7RUVHeEIsbUJGSDZCO0VFSTdCLDZCRkpxQztFRUtyQyxpQkZMbUQ7QUdFckQ7O0FIQ0E7RUFDRSxVQUFBO0VFSkUsYUFBQTtFQUVGLHNCRkd3QjtFRUZ4QixtQkZFZ0M7RUVEaEMsdUJGQ3dDO0VFQXhDLGlCQUFBO0FDTUY7O0FISEE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7RUVaRSxhQUFBO0VBRUYsbUJGV3dCO0VFVnhCLG1CRlU2QjtFRVQ3Qiw2QkZTcUM7RUVSckMsaUJGUW1EO0FHVXJEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFsa3MtcGFnZS93aHktZG8teW91LW5lZWQtd3NsL3dzbC1zaXh0aC1zbGlkZS93c2wtc2l4dGgtc2xpZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuQGltcG9ydCAnbWl4aW5zJztcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3doaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBAaW5jbHVkZSBmbGV4LWNvbnRhaW5lcihyb3csIGNlbnRlciwgc3BhY2UtZXZlbmx5LCBub3dyYXAsICdub3JtYWwnKTtcbn1cblxuLnN5c3RlbSB7XG4gIHdpZHRoOiA0MCU7XG4gIEBpbmNsdWRlIGZsZXgtY29udGFpbmVyKGNvbHVtbiwgY2VudGVyLCBjZW50ZXIsIG5vd3JhcCwgJ25vcm1hbCcpO1xufVxuXG4ubGF5ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyOiAwLjA2MjVyZW0gJGNvbG9yX3ByaW1hcnktcmVkIHNvbGlkO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBAaW5jbHVkZSBmbGV4LWNvbnRhaW5lcihyb3csIGNlbnRlciwgc3BhY2UtZXZlbmx5LCBub3dyYXAsICdub3JtYWwnKTtcbn1cbiIsIi8vIGNvbG9yc1xuJGNvbG9yX3ByaW1hcnktcmVkOiAjZmYxNzQ0O1xuJGNvbG9yX2dyZXktZGFyazogIzMzMzMzMztcbiRjb2xvcl9ncmV5LWxpZ2h0OiAjZTVlNWU1O1xuJGNvbG9yX3doaXRlOiAjZmZmZmZmO1xuJGNvbG9yX2JsYWNrOiAjMDAwMDAwO1xuXG4vLyBmb250LWZhbWlsaWVzXG4kZm9udC1mYW1pbHlfc2F0aXNmeTogJ1NhdGlzZnknLCBjdXJzaXZlO1xuJGZvbnQtZmFtaWx5X3JhbGV3YXk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcblxuLy8gdGV4dC1zaGFkb3dcbiR0ZXh0LXNoYWRvd190aXRsZTogMC4xMjVyZW0gMC4xMjVyZW0gMC41cmVtICRjb2xvcl9ibGFjaztcblxuLy8gYm94LXNoYWRvd1xuJGJveC1zaGFkb3dfY29tbW9uOiAwIDAgMC41cmVtICRjb2xvcl9ibGFjaztcbiIsIkBtaXhpbiBmbGV4LWNvbnRhaW5lcihcbiAgJGZsZXgtZGlyZWN0aW9uOiByb3csXG4gICRhbGlnbi1pdGVtczogZmxleC1zdGFydCxcbiAgJGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCxcbiAgJGZsZXgtd3JhcDogbm93cmFwLFxuICAkZmxleC10eXBlOiAnbm9ybWFsJ1xuKSB7XG4gIEBpZiAkZmxleC10eXBlID09ICdpbmxpbmUnIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgfSBAZWxzZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBmbGV4LWRpcmVjdGlvbjogJGZsZXgtZGlyZWN0aW9uO1xuICBhbGlnbi1pdGVtczogJGFsaWduLWl0ZW1zO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5LWNvbnRlbnQ7XG4gIGZsZXgtd3JhcDogJGZsZXgtd3JhcDtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cblxuLnN5c3RlbSB7XG4gIHdpZHRoOiA0MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cblxuLmxheWVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlcjogMC4wNjI1cmVtICNmZjE3NDQgc29saWQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn0iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WslSixthSlideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                selector: 'app-wsl-sixth-slide',
                styleUrls: ['./wsl-sixth-slide.component.scss'],
                templateUrl: './wsl-sixth-slide.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-third-slide/wsl-third-slide.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/talks-page/why-do-you-need-wsl/wsl-third-slide/wsl-third-slide.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: WslThirdSlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WslThirdSlideComponent", function() { return WslThirdSlideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WslThirdSlideComponent {
}
WslThirdSlideComponent.ɵfac = function WslThirdSlideComponent_Factory(t) { return new (t || WslThirdSlideComponent)(); };
WslThirdSlideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WslThirdSlideComponent, selectors: [["app-wsl-third-slide"]], decls: 10, vars: 0, consts: [[1, "layer"], [1, "arrow"]], template: function WslThirdSlideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Linux application\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u21E3\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " WSL\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u21E3\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Windows\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: #ffffff;\n  width: 100%;\n  height: 100%;\n  padding: 1rem;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: nowrap;\n}\n\n.layer[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border: 0.0625rem #ff1744 solid;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-wrap: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL2FwcC9wYWdlcy90YWxrcy1wYWdlL3doeS1kby15b3UtbmVlZC13c2wvd3NsLXRoaXJkLXNsaWRlL3dzbC10aGlyZC1zbGlkZS5jb21wb25lbnQuc2NzcyIsIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL3N0eWxlcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFsa3MtcGFnZS93aHktZG8teW91LW5lZWQtd3NsL3dzbC10aGlyZC1zbGlkZS93c2wtdGhpcmQtc2xpZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxjQUFBO0VBQ0EseUJDRFk7RURFWixXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFRUNFLGFBQUE7RUFFRixzQkZGd0I7RUVHeEIsbUJGSGdDO0VFSWhDLHVCRkp3QztFRUt4QyxpQkZMZ0Q7QUdFbEQ7O0FIQ0E7RUFDRSxhQUFBO0VBQ0EsK0JBQUE7RUVMRSxhQUFBO0VBRUYsbUJGSXdCO0VFSHhCLG1CRkc2QjtFRUY3Qiw2QkZFcUM7RUVEckMsaUJGQ21EO0FHTXJEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFsa3MtcGFnZS93aHktZG8teW91LW5lZWQtd3NsL3dzbC10aGlyZC1zbGlkZS93c2wtdGhpcmQtc2xpZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuQGltcG9ydCAnbWl4aW5zJztcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3doaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBAaW5jbHVkZSBmbGV4LWNvbnRhaW5lcihjb2x1bW4sIGNlbnRlciwgY2VudGVyLCBub3dyYXAsICdub3JtYWwnKTtcbn1cblxuLmxheWVyIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyOiAwLjA2MjVyZW0gJGNvbG9yX3ByaW1hcnktcmVkIHNvbGlkO1xuICBAaW5jbHVkZSBmbGV4LWNvbnRhaW5lcihyb3csIGNlbnRlciwgc3BhY2UtZXZlbmx5LCBub3dyYXAsICdub3JtYWwnKTtcbn1cbiIsIi8vIGNvbG9yc1xuJGNvbG9yX3ByaW1hcnktcmVkOiAjZmYxNzQ0O1xuJGNvbG9yX2dyZXktZGFyazogIzMzMzMzMztcbiRjb2xvcl9ncmV5LWxpZ2h0OiAjZTVlNWU1O1xuJGNvbG9yX3doaXRlOiAjZmZmZmZmO1xuJGNvbG9yX2JsYWNrOiAjMDAwMDAwO1xuXG4vLyBmb250LWZhbWlsaWVzXG4kZm9udC1mYW1pbHlfc2F0aXNmeTogJ1NhdGlzZnknLCBjdXJzaXZlO1xuJGZvbnQtZmFtaWx5X3JhbGV3YXk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcblxuLy8gdGV4dC1zaGFkb3dcbiR0ZXh0LXNoYWRvd190aXRsZTogMC4xMjVyZW0gMC4xMjVyZW0gMC41cmVtICRjb2xvcl9ibGFjaztcblxuLy8gYm94LXNoYWRvd1xuJGJveC1zaGFkb3dfY29tbW9uOiAwIDAgMC41cmVtICRjb2xvcl9ibGFjaztcbiIsIkBtaXhpbiBmbGV4LWNvbnRhaW5lcihcbiAgJGZsZXgtZGlyZWN0aW9uOiByb3csXG4gICRhbGlnbi1pdGVtczogZmxleC1zdGFydCxcbiAgJGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCxcbiAgJGZsZXgtd3JhcDogbm93cmFwLFxuICAkZmxleC10eXBlOiAnbm9ybWFsJ1xuKSB7XG4gIEBpZiAkZmxleC10eXBlID09ICdpbmxpbmUnIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgfSBAZWxzZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBmbGV4LWRpcmVjdGlvbjogJGZsZXgtZGlyZWN0aW9uO1xuICBhbGlnbi1pdGVtczogJGFsaWduLWl0ZW1zO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5LWNvbnRlbnQ7XG4gIGZsZXgtd3JhcDogJGZsZXgtd3JhcDtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cblxuLmxheWVyIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyOiAwLjA2MjVyZW0gI2ZmMTc0NCBzb2xpZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufSJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WslThirdSlideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                selector: 'app-wsl-third-slide',
                styleUrls: ['./wsl-third-slide.component.scss'],
                templateUrl: './wsl-third-slide.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/declarations/enums/event-key.enum.ts":
/*!**************************************************!*\
  !*** ./src/declarations/enums/event-key.enum.ts ***!
  \**************************************************/
/*! exports provided: EventKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventKey", function() { return EventKey; });
var EventKey;
(function (EventKey) {
    EventKey["Enter"] = "Enter";
    EventKey["ArrowLeft"] = "ArrowLeft";
    EventKey["ArrowRight"] = "ArrowRight";
})(EventKey || (EventKey = {}));


/***/ }),

/***/ "./src/declarations/enums/index.ts":
/*!*****************************************!*\
  !*** ./src/declarations/enums/index.ts ***!
  \*****************************************/
/*! exports provided: EventKey, SlidePosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_key_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-key.enum */ "./src/declarations/enums/event-key.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventKey", function() { return _event_key_enum__WEBPACK_IMPORTED_MODULE_0__["EventKey"]; });

/* harmony import */ var _slide_position_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slide-position.enum */ "./src/declarations/enums/slide-position.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SlidePosition", function() { return _slide_position_enum__WEBPACK_IMPORTED_MODULE_1__["SlidePosition"]; });





/***/ }),

/***/ "./src/declarations/enums/slide-position.enum.ts":
/*!*******************************************************!*\
  !*** ./src/declarations/enums/slide-position.enum.ts ***!
  \*******************************************************/
/*! exports provided: SlidePosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidePosition", function() { return SlidePosition; });
var SlidePosition;
(function (SlidePosition) {
    SlidePosition["First"] = "First";
    SlidePosition["Middle"] = "Middle";
    SlidePosition["Last"] = "Last";
})(SlidePosition || (SlidePosition = {}));


/***/ }),

/***/ "./src/declarations/index.ts":
/*!***********************************!*\
  !*** ./src/declarations/index.ts ***!
  \***********************************/
/*! exports provided: EventKey, SlidePosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ "./src/declarations/enums/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventKey", function() { return _enums__WEBPACK_IMPORTED_MODULE_0__["EventKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SlidePosition", function() { return _enums__WEBPACK_IMPORTED_MODULE_0__["SlidePosition"]; });




/***/ })

}]);
//# sourceMappingURL=pages-talks-page-talks-page-module.js.map