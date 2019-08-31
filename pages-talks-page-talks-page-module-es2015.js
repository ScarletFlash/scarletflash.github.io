(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-talks-page-talks-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/talks-page/talks-page.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/talks-page/talks-page.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"header\">\n  <h1 class=\"header__title\">\n    Talks\n    <span *ngIf=\"subtitle$ | async as subtitle\" class=\"header__subtitle\"> {{ subtitle }} </span>\n  </h1>\n</header>\n<main class=\"slides-container\">\n  <router-outlet></router-outlet>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/talks-page/why-do-you-need-wsl/why-do-you-need-wsl.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/talks-page/why-do-you-need-wsl/why-do-you-need-wsl.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"slide\" [style.width.px]=\"slideWidthPx$ | async\" [style.height.px]=\"slideHeightPx$ | async\">\n  <router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/talks-page/why-do-you-need-wsl/wsl-first-slide/wsl-first-slide.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/talks-page/why-do-you-need-wsl/wsl-first-slide/wsl-first-slide.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>wsl-first-slide works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/talks-page/why-do-you-need-wsl/wsl-second-slide/wsl-second-slide.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/talks-page/why-do-you-need-wsl/wsl-second-slide/wsl-second-slide.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>wsl-second-slide works!</p>\n");

/***/ }),

/***/ "./src/app/pages/talks-page/talks-page-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/talks-page/talks-page-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: TalksPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalksPageRoutingModule", function() { return TalksPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_declarations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app-declarations */ "./src/declarations/index.ts");
/* harmony import */ var _talks_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./talks-page.component */ "./src/app/pages/talks-page/talks-page.component.ts");
/* harmony import */ var _why_do_you_need_wsl_why_do_you_need_wsl_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./why-do-you-need-wsl/why-do-you-need-wsl.component */ "./src/app/pages/talks-page/why-do-you-need-wsl/why-do-you-need-wsl.component.ts");
/* harmony import */ var _why_do_you_need_wsl_wsl_first_slide_wsl_first_slide_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./why-do-you-need-wsl/wsl-first-slide/wsl-first-slide.component */ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-first-slide/wsl-first-slide.component.ts");
/* harmony import */ var _why_do_you_need_wsl_wsl_second_slide_wsl_second_slide_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./why-do-you-need-wsl/wsl-second-slide/wsl-second-slide.component */ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-second-slide/wsl-second-slide.component.ts");








const whyDoYouNeedWslRouteData = {
    firstSlideIndex: 1,
    lastSlideIndex: 2,
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
            component: _why_do_you_need_wsl_wsl_first_slide_wsl_first_slide_component__WEBPACK_IMPORTED_MODULE_6__["WslFirstSlideComponent"],
            data: Object.assign({}, whyDoYouNeedWslRouteData, { animation: _app_declarations__WEBPACK_IMPORTED_MODULE_3__["SlidePosition"].First }),
            path: '1'
        },
        {
            component: _why_do_you_need_wsl_wsl_second_slide_wsl_second_slide_component__WEBPACK_IMPORTED_MODULE_7__["WslSecondSlideComponent"],
            data: Object.assign({}, whyDoYouNeedWslRouteData, { animation: _app_declarations__WEBPACK_IMPORTED_MODULE_3__["SlidePosition"].Last }),
            path: '2'
        }
    ],
    component: _why_do_you_need_wsl_why_do_you_need_wsl_component__WEBPACK_IMPORTED_MODULE_5__["WhyDoYouNeedWslComponent"],
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
        component: _talks_page_component__WEBPACK_IMPORTED_MODULE_4__["TalksPageComponent"],
        path: ''
    }
];
let TalksPageRoutingModule = class TalksPageRoutingModule {
};
TalksPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
    })
], TalksPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/talks-page/talks-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/talks-page/talks-page.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  width: 100vw;\n  height: 100vh;\n}\n\n.header {\n  z-index: 2;\n  width: 100%;\n  height: 3rem;\n  box-sizing: border-box;\n  padding: 0.5rem 1rem;\n  background: #333333;\n  box-shadow: 0 0 0.5rem #000000;\n  position: absolute;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  top: 0;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  flex-wrap: nowrap;\n}\n\n.header__title {\n  font-size: 1.5rem;\n  font-family: \"Satisfy\", cursive;\n  text-shadow: 0.125rem 0.125rem 0.5rem #000000;\n  color: #ffffff;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n}\n\n.header__subtitle {\n  display: block;\n  margin: 0 0 0 1rem;\n  font-size: 1rem;\n  font-family: \"Raleway\", sans-serif;\n  text-shadow: 0.125rem 0.125rem 0.5rem #000000;\n  color: #ffffff;\n}\n\n.slides-container {\n  z-index: 1;\n  margin: 3rem 0 0 0;\n  height: calc(100% - 3rem);\n  width: 100%;\n  background: #e5e5e5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL2FwcC9wYWdlcy90YWxrcy1wYWdlL3RhbGtzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RhbGtzLXBhZ2UvdGFsa3MtcGFnZS5jb21wb25lbnQuc2NzcyIsIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL3N0eWxlcy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDSkY7O0FET0E7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBVmM7RUFXZCxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJFZGdCO0VGZWhCLDhCRUZrQjtFRkdsQixrQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsTUFBQTtFR1ZFLGFBQUE7RUFFRixtQkhTd0I7RUdSeEIsbUJIUTZCO0VHUDdCLDJCSE9xQztFR05yQyxpQkhNaUQ7QUNBbkQ7O0FERUU7RUFDRSxpQkFBQTtFQUNBLCtCRWpCa0I7RUZrQmxCLDZDRWRnQjtFRmVoQixjRXZCVTtFRndCVixXQUFBO0VHbEJBLGFBQUE7RUFFRixtQkhpQjBCO0VHaEIxQixtQkhnQitCO0VHZi9CLDhCSGV1QztFR2R2QyxpQkhjc0Q7QUNJeEQ7O0FEREU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0NFM0JrQjtFRjRCbEIsNkNFekJnQjtFRjBCaEIsY0VsQ1U7QURxQ2Q7O0FEQ0E7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkU1Q2lCO0FEOENuQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhbGtzLXBhZ2UvdGFsa3MtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdtaXhpbnMnO1xuXG4kaGVpZ2h0X2hlYWRlcjogM3JlbTtcblxuOmhvc3Qge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5oZWFkZXIge1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAkaGVpZ2h0X2hlYWRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJhY2tncm91bmQ6ICRjb2xvcl9ncmV5LWRhcms7XG4gIGJveC1zaGFkb3c6ICRib3gtc2hhZG93X2NvbW1vbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdG9wOiAwO1xuICBAaW5jbHVkZSBmbGV4LWNvbnRhaW5lcihyb3csIGNlbnRlciwgZmxleC1zdGFydCwgbm93cmFwLCAnbm9ybWFsJyk7XG5cbiAgJl9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHlfc2F0aXNmeTtcbiAgICB0ZXh0LXNoYWRvdzogJHRleHQtc2hhZG93X3RpdGxlO1xuICAgIGNvbG9yOiAkY29sb3Jfd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgQGluY2x1ZGUgZmxleC1jb250YWluZXIocm93LCBjZW50ZXIsIHNwYWNlLWJldHdlZW4sIG5vd3JhcCwgJ25vcm1hbCcpO1xuICB9XG5cbiAgJl9fc3VidGl0bGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCAwIDAgMXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseV9yYWxld2F5O1xuICAgIHRleHQtc2hhZG93OiAkdGV4dC1zaGFkb3dfdGl0bGU7XG4gICAgY29sb3I6ICRjb2xvcl93aGl0ZTtcbiAgfVxufVxuXG4uc2xpZGVzLWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbjogJGhlaWdodF9oZWFkZXIgMCAwIDA7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gI3skaGVpZ2h0X2hlYWRlcn0pO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogJGNvbG9yX2dyZXktbGlnaHQ7XG59XG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmhlYWRlciB7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDNyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xuICBib3gtc2hhZG93OiAwIDAgMC41cmVtICMwMDAwMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cbi5oZWFkZXJfX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtZmFtaWx5OiBcIlNhdGlzZnlcIiwgY3Vyc2l2ZTtcbiAgdGV4dC1zaGFkb3c6IDAuMTI1cmVtIDAuMTI1cmVtIDAuNXJlbSAjMDAwMDAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG4uaGVhZGVyX19zdWJ0aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgMCAwIDFyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXNoYWRvdzogMC4xMjVyZW0gMC4xMjVyZW0gMC41cmVtICMwMDAwMDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uc2xpZGVzLWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbjogM3JlbSAwIDAgMDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzcmVtKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNlNWU1ZTU7XG59IiwiLy8gY29sb3JzXG4kY29sb3JfcHJpbWFyeS1yZWQ6ICNmZjE3NDQ7XG4kY29sb3JfZ3JleS1kYXJrOiAjMzMzMzMzO1xuJGNvbG9yX2dyZXktbGlnaHQ6ICNlNWU1ZTU7XG4kY29sb3Jfd2hpdGU6ICNmZmZmZmY7XG4kY29sb3JfYmxhY2s6ICMwMDAwMDA7XG5cbi8vIGZvbnQtZmFtaWxpZXNcbiRmb250LWZhbWlseV9zYXRpc2Z5OiAnU2F0aXNmeScsIGN1cnNpdmU7XG4kZm9udC1mYW1pbHlfcmFsZXdheTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuXG4vLyB0ZXh0LXNoYWRvd1xuJHRleHQtc2hhZG93X3RpdGxlOiAwLjEyNXJlbSAwLjEyNXJlbSAwLjVyZW0gJGNvbG9yX2JsYWNrO1xuXG4vLyBib3gtc2hhZG93XG4kYm94LXNoYWRvd19jb21tb246IDAgMCAwLjVyZW0gJGNvbG9yX2JsYWNrO1xuIiwiQG1peGluIGZsZXgtY29udGFpbmVyKFxuICAkZmxleC1kaXJlY3Rpb246IHJvdyxcbiAgJGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0LFxuICAkanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0LFxuICAkZmxleC13cmFwOiBub3dyYXAsXG4gICRmbGV4LXR5cGU6ICdub3JtYWwnXG4pIHtcbiAgQGlmICRmbGV4LXR5cGUgPT0gJ2lubGluZScge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB9IEBlbHNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIGZsZXgtZGlyZWN0aW9uOiAkZmxleC1kaXJlY3Rpb247XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ24taXRlbXM7XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnktY29udGVudDtcbiAgZmxleC13cmFwOiAkZmxleC13cmFwO1xufVxuIl19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app-functions */ "./src/app/functions/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let TalksPageComponent = class TalksPageComponent {
    constructor(_activatedRoute, _router) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this.subtitle$ = this._router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((innerEvent) => innerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(this._activatedRoute), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => Object(_app_functions__WEBPACK_IMPORTED_MODULE_3__["getDeepestActivatedRoute"])(this._activatedRoute)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((innerActivatedRoute) => innerActivatedRoute.data), Object(_app_functions__WEBPACK_IMPORTED_MODULE_3__["filterNotNullOrUndefined"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((innerData) => innerData.hasOwnProperty('subtitle')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((innerData) => innerData.subtitle), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
    }
};
TalksPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TalksPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        selector: 'app-talks-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./talks-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/talks-page/talks-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./talks-page.component.scss */ "./src/app/pages/talks-page/talks-page.component.scss")).default]
    })
], TalksPageComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app-shared */ "./src/app/shared/index.ts");
/* harmony import */ var _talks_page_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./talks-page-routing.module */ "./src/app/pages/talks-page/talks-page-routing.module.ts");
/* harmony import */ var _talks_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./talks-page.component */ "./src/app/pages/talks-page/talks-page.component.ts");
/* harmony import */ var _why_do_you_need_wsl_why_do_you_need_wsl_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./why-do-you-need-wsl/why-do-you-need-wsl.component */ "./src/app/pages/talks-page/why-do-you-need-wsl/why-do-you-need-wsl.component.ts");
/* harmony import */ var _why_do_you_need_wsl_wsl_first_slide_wsl_first_slide_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./why-do-you-need-wsl/wsl-first-slide/wsl-first-slide.component */ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-first-slide/wsl-first-slide.component.ts");
/* harmony import */ var _why_do_you_need_wsl_wsl_second_slide_wsl_second_slide_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./why-do-you-need-wsl/wsl-second-slide/wsl-second-slide.component */ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-second-slide/wsl-second-slide.component.ts");








let TalksPageModule = class TalksPageModule {
};
TalksPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_talks_page_component__WEBPACK_IMPORTED_MODULE_4__["TalksPageComponent"], _why_do_you_need_wsl_why_do_you_need_wsl_component__WEBPACK_IMPORTED_MODULE_5__["WhyDoYouNeedWslComponent"], _why_do_you_need_wsl_wsl_first_slide_wsl_first_slide_component__WEBPACK_IMPORTED_MODULE_6__["WslFirstSlideComponent"], _why_do_you_need_wsl_wsl_second_slide_wsl_second_slide_component__WEBPACK_IMPORTED_MODULE_7__["WslSecondSlideComponent"]],
        imports: [_app_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _talks_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["TalksPageRoutingModule"]]
    })
], TalksPageModule);



/***/ }),

/***/ "./src/app/pages/talks-page/why-do-you-need-wsl/why-do-you-need-wsl.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/talks-page/why-do-you-need-wsl/why-do-you-need-wsl.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: nowrap;\n}\n\n.slide {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL2FwcC9wYWdlcy90YWxrcy1wYWdlL3doeS1kby15b3UtbmVlZC13c2wvd2h5LWRvLXlvdS1uZWVkLXdzbC5jb21wb25lbnQuc2NzcyIsIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL3N0eWxlcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFsa3MtcGFnZS93aHktZG8teW91LW5lZWQtd3NsL3doeS1kby15b3UtbmVlZC13c2wuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQ0tFLGFBQUE7RUFFRixzQkROd0I7RUNPeEIsbUJEUGdDO0VDUWhDLHVCRFJ3QztFQ1N4QyxpQkRUZ0Q7QUVFbEQ7O0FGQ0E7RUFDRSxXQUFBO0FFRUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWxrcy1wYWdlL3doeS1kby15b3UtbmVlZC13c2wvd2h5LWRvLXlvdS1uZWVkLXdzbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ21peGlucyc7XG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIEBpbmNsdWRlIGZsZXgtY29udGFpbmVyKGNvbHVtbiwgY2VudGVyLCBjZW50ZXIsIG5vd3JhcCwgJ25vcm1hbCcpO1xufVxuXG4uc2xpZGUge1xuICB3aWR0aDogMTAwJTtcbn1cbiIsIkBtaXhpbiBmbGV4LWNvbnRhaW5lcihcbiAgJGZsZXgtZGlyZWN0aW9uOiByb3csXG4gICRhbGlnbi1pdGVtczogZmxleC1zdGFydCxcbiAgJGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCxcbiAgJGZsZXgtd3JhcDogbm93cmFwLFxuICAkZmxleC10eXBlOiAnbm9ybWFsJ1xuKSB7XG4gIEBpZiAkZmxleC10eXBlID09ICdpbmxpbmUnIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgfSBAZWxzZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBmbGV4LWRpcmVjdGlvbjogJGZsZXgtZGlyZWN0aW9uO1xuICBhbGlnbi1pdGVtczogJGFsaWduLWl0ZW1zO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5LWNvbnRlbnQ7XG4gIGZsZXgtd3JhcDogJGZsZXgtd3JhcDtcbn1cbiIsIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuXG4uc2xpZGUge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_declarations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app-declarations */ "./src/declarations/index.ts");
/* harmony import */ var _app_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app-functions */ "./src/app/functions/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let WhyDoYouNeedWslComponent = class WhyDoYouNeedWslComponent {
    constructor(_hostElement, _router, _activatedRoute) {
        this._hostElement = _hostElement;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.slideHeightPx$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](0);
        this.slideWidthPx$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](0);
        this._deepestActivatedRoute$ = this._router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((innerEvent) => innerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(this._activatedRoute), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(() => Object(_app_functions__WEBPACK_IMPORTED_MODULE_4__["getDeepestActivatedRoute"])(this._activatedRoute)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["shareReplay"])(1));
        this._routeData$ = this._deepestActivatedRoute$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((innerActivatedRoute) => innerActivatedRoute.data), Object(_app_functions__WEBPACK_IMPORTED_MODULE_4__["filterNotNullOrUndefined"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["shareReplay"])(1));
        this._currentSlidePath$ = this._deepestActivatedRoute$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((innerActivatedRoute) => innerActivatedRoute.url), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((innerUrlSegments) => innerUrlSegments[0]), Object(_app_functions__WEBPACK_IMPORTED_MODULE_4__["filterNotNullOrUndefined"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((innerFirstSegment) => {
            const decimalNumberSystemRadix = 10;
            return Number.parseInt(innerFirstSegment.path, decimalNumberSystemRadix);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["shareReplay"])(1));
        this._lastSlidePath$ = this._routeData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((innerData) => innerData.hasOwnProperty('lastSlideIndex')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((innerData) => innerData.lastSlideIndex), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["shareReplay"])(1));
        this._firstSlidePath$ = this._routeData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((innerData) => innerData.hasOwnProperty('firstSlideIndex')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((innerData) => innerData.firstSlideIndex), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["shareReplay"])(1));
    }
    updateSlideElementHeight() {
        this.updateSlideSize();
    }
    processKeyPressEvent(event) {
        const arrowLeftPressed = event.key === _app_declarations__WEBPACK_IMPORTED_MODULE_3__["EventKey"].ArrowLeft;
        const arrowRightPressed = event.key === _app_declarations__WEBPACK_IMPORTED_MODULE_3__["EventKey"].ArrowRight;
        if (!arrowLeftPressed && !arrowRightPressed) {
            return;
        }
        if (arrowLeftPressed) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([this._currentSlidePath$, this._firstSlidePath$])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((innerData) => {
                let Aggregated;
                (function (Aggregated) {
                    Aggregated[Aggregated["currentSlidePath"] = 0] = "currentSlidePath";
                    Aggregated[Aggregated["firstSlidePath"] = 1] = "firstSlidePath";
                })(Aggregated || (Aggregated = {}));
                const currentSlideIndex = innerData[Aggregated.currentSlidePath];
                const firstSlideIndex = innerData[Aggregated.firstSlidePath];
                return currentSlideIndex <= firstSlideIndex ? firstSlideIndex : currentSlideIndex - 1;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
                .subscribe((targetIndex) => this._router.navigateByUrl(`/talks/wsl/${targetIndex}`));
            return;
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([this._currentSlidePath$, this._lastSlidePath$])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((innerData) => {
            let Aggregated;
            (function (Aggregated) {
                Aggregated[Aggregated["currentSlidePath"] = 0] = "currentSlidePath";
                Aggregated[Aggregated["lastSlidePath"] = 1] = "lastSlidePath";
            })(Aggregated || (Aggregated = {}));
            const currentSlideIndex = innerData[Aggregated.currentSlidePath];
            const lastSlideIndex = innerData[Aggregated.lastSlidePath];
            return currentSlideIndex >= lastSlideIndex ? lastSlideIndex : currentSlideIndex + 1;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
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
};
WhyDoYouNeedWslComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize')
], WhyDoYouNeedWslComponent.prototype, "updateSlideElementHeight", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown', ['$event'])
], WhyDoYouNeedWslComponent.prototype, "processKeyPressEvent", null);
WhyDoYouNeedWslComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        selector: 'app-why-do-you-need-wsl',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./why-do-you-need-wsl.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/talks-page/why-do-you-need-wsl/why-do-you-need-wsl.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./why-do-you-need-wsl.component.scss */ "./src/app/pages/talks-page/why-do-you-need-wsl/why-do-you-need-wsl.component.scss")).default]
    })
], WhyDoYouNeedWslComponent);



/***/ }),

/***/ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-first-slide/wsl-first-slide.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/talks-page/why-do-you-need-wsl/wsl-first-slide/wsl-first-slide.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  background: #3d3d3d;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL2FwcC9wYWdlcy90YWxrcy1wYWdlL3doeS1kby15b3UtbmVlZC13c2wvd3NsLWZpcnN0LXNsaWRlL3dzbC1maXJzdC1zbGlkZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFsa3MtcGFnZS93aHktZG8teW91LW5lZWQtd3NsL3dzbC1maXJzdC1zbGlkZS93c2wtZmlyc3Qtc2xpZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFsa3MtcGFnZS93aHktZG8teW91LW5lZWQtd3NsL3dzbC1maXJzdC1zbGlkZS93c2wtZmlyc3Qtc2xpZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjM2QzZDNkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogIzNkM2QzZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WslFirstSlideComponent = class WslFirstSlideComponent {
};
WslFirstSlideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        selector: 'app-wsl-first-slide',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wsl-first-slide.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/talks-page/why-do-you-need-wsl/wsl-first-slide/wsl-first-slide.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wsl-first-slide.component.scss */ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-first-slide/wsl-first-slide.component.scss")).default]
    })
], WslFirstSlideComponent);



/***/ }),

/***/ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-second-slide/wsl-second-slide.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/talks-page/why-do-you-need-wsl/wsl-second-slide/wsl-second-slide.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  background: #3d3d3d;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL2FwcC9wYWdlcy90YWxrcy1wYWdlL3doeS1kby15b3UtbmVlZC13c2wvd3NsLXNlY29uZC1zbGlkZS93c2wtc2Vjb25kLXNsaWRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy90YWxrcy1wYWdlL3doeS1kby15b3UtbmVlZC13c2wvd3NsLXNlY29uZC1zbGlkZS93c2wtc2Vjb25kLXNsaWRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhbGtzLXBhZ2Uvd2h5LWRvLXlvdS1uZWVkLXdzbC93c2wtc2Vjb25kLXNsaWRlL3dzbC1zZWNvbmQtc2xpZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjM2QzZDNkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogIzNkM2QzZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WslSecondSlideComponent = class WslSecondSlideComponent {
};
WslSecondSlideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        selector: 'app-wsl-second-slide',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wsl-second-slide.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/talks-page/why-do-you-need-wsl/wsl-second-slide/wsl-second-slide.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wsl-second-slide.component.scss */ "./src/app/pages/talks-page/why-do-you-need-wsl/wsl-second-slide/wsl-second-slide.component.scss")).default]
    })
], WslSecondSlideComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _event_key_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-key.enum */ "./src/declarations/enums/event-key.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventKey", function() { return _event_key_enum__WEBPACK_IMPORTED_MODULE_1__["EventKey"]; });

/* harmony import */ var _slide_position_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slide-position.enum */ "./src/declarations/enums/slide-position.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SlidePosition", function() { return _slide_position_enum__WEBPACK_IMPORTED_MODULE_2__["SlidePosition"]; });






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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ "./src/declarations/enums/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventKey", function() { return _enums__WEBPACK_IMPORTED_MODULE_1__["EventKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SlidePosition", function() { return _enums__WEBPACK_IMPORTED_MODULE_1__["SlidePosition"]; });





/***/ })

}]);
//# sourceMappingURL=pages-talks-page-talks-page-module-es2015.js.map