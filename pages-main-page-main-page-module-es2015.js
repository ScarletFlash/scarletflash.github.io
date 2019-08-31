(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-main-page-main-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-page/main-page.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-page/main-page.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-row-section type=\"primary\" [style.height.vh]=\"95\">\n  <h1 class=\"title\">\n    <span class=\"title__greeting\">\n      Hello,\n    </span>\n    <span class=\"title__name\">\n      I am Fedor Usakov\n    </span>\n  </h1>\n  <img class=\"photo\" alt src=\"/assets/img/sample-photo.png\" />\n</app-row-section>\n\n<app-row-section type=\"light\" [style.height.vh]=\"75\" [backgroundTemplateRef]=\"whoAmIBackground\">\n  <h3 class=\"title title_category title_dark\">\n    Who am I\n  </h3>\n</app-row-section>\n\n<ng-template #whoAmIBackground>\n  <div class=\"custom-background\">\n    <div class=\"custom-background__element\">\n      angular\n    </div>\n    <div class=\"custom-background__element\">\n      typescript\n    </div>\n    <div class=\"custom-background__element\">\n      angular\n    </div>\n    <div class=\"custom-background__element\">\n      typescript\n    </div>\n    <div class=\"custom-background__element\">\n      angular\n    </div>\n    <div class=\"custom-background__element\">\n      typescript\n    </div>\n    <div class=\"custom-background__element\">\n      angular\n    </div>\n    <div class=\"custom-background__element\">\n      typescript\n    </div>\n    <div class=\"custom-background__element\">\n      angular\n    </div>\n    <div class=\"custom-background__element\">\n      typescript\n    </div>\n    <div class=\"custom-background__element\">\n      angular\n    </div>\n    <div class=\"custom-background__element\">\n      typescript\n    </div>\n  </div>\n</ng-template>\n\n<app-row-section type=\"dark\" [style.height.vh]=\"75\">\n  <h3 class=\"title title_category\">\n    Publications\n  </h3>\n  <div class=\"tiles\"></div>\n</app-row-section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-page/row-section/row-section.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-page/row-section/row-section.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"row\" [ngClass]=\"['row_' + type]\">\n  <div class=\"row__background\">\n    <ng-container\n      *ngIf=\"backgroundTemplateRef | isNullOrUndefined; else backgroundTemplateRef\"\n      class=\"sample\"\n    ></ng-container>\n  </div>\n  <div class=\"row__content\">\n    <ng-content></ng-content>\n  </div>\n</section>\n");

/***/ }),

/***/ "./src/app/pages/main-page/main-page-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/main-page/main-page-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MainPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageRoutingModule", function() { return MainPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-page.component */ "./src/app/pages/main-page/main-page.component.ts");




const routes = [
    {
        component: _main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"],
        path: '',
        pathMatch: 'full'
    }
];
let MainPageRoutingModule = class MainPageRoutingModule {
};
MainPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
    })
], MainPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/main-page/main-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  width: 100%;\n  min-height: 100vh;\n  overflow: hidden;\n}\n\n.title {\n  font-family: \"Satisfy\", cursive;\n  color: #ffffff;\n  padding: 1rem;\n  margin: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-wrap: nowrap;\n}\n\n.title_category {\n  text-shadow: 0.125rem 0.125rem 0.5rem #000000;\n}\n\n.title_dark {\n  color: #000000;\n  text-shadow: none;\n  text-decoration: underline;\n}\n\n.title__greeting {\n  transform: rotate(-30deg);\n  font-size: 6rem;\n}\n\n.title__name {\n  transform: rotate(-30deg);\n  font-size: 3rem;\n}\n\n.photo {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: auto;\n  height: 95%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n}\n\n.ticker-wrapper {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: nowrap;\n}\n\n.custom-background {\n  position: absolute;\n  top: -10%;\n  height: 150%;\n  width: 100%;\n  transform: rotate(-10deg);\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n}\n\n.custom-background__element {\n  width: 3rem;\n  height: 3rem;\n  margin: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL2FwcC9wYWdlcy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwiL2MvUHJvamVjdHMvc2NhcmxldGZsYXNoLmdpdGh1Yi5pby9hcHBsaWNhdGlvbi9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL2MvUHJvamVjdHMvc2NhcmxldGZsYXNoLmdpdGh1Yi5pby9hcHBsaWNhdGlvbi9zcmMvc3R5bGVzL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNGRjs7QURLQTtFQUNFLCtCRUZvQjtFRkdwQixjRVBZO0VGUVosYUFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFR0pFLGFBQUE7RUFFRixzQkhHd0I7RUdGeEIsdUJIRWdDO0VHRGhDLDJCSEM0QztFR0E1QyxpQkFBQTtBRkVGOztBREFFO0VBQ0UsNkNFTmdCO0FEUXBCOztBRENFO0VBQ0UsY0VqQlU7RUZrQlYsaUJBQUE7RUFDQSwwQkFBQTtBQ0NKOztBREVFO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0U7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNESjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0Esb0JBQUE7QUNGRjs7QURLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VHeENFLGFBQUE7RUFFRixzQkh1Q3dCO0VHdEN4QixtQkhzQ2dDO0VHckNoQyx1QkhxQ3dDO0VHcEN4QyxpQkhvQ2dEO0FDRWxEOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFR2pERSxhQUFBO0VBRUYsbUJIZ0R3QjtFRy9DeEIsdUJIK0M2QjtFRzlDN0IsMkJIOEN5QztFRzdDekMsZUg2Q3FEO0FDTXZEOztBREpFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbWl4aW5zJztcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5X3NhdGlzZnk7XG4gIGNvbG9yOiAkY29sb3Jfd2hpdGU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbjogMDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIEBpbmNsdWRlIGZsZXgtY29udGFpbmVyKGNvbHVtbiwgZmxleC1zdGFydCwgZmxleC1zdGFydCwgbm93cmFwLCAnbm9ybWFsJyk7XG5cbiAgJl9jYXRlZ29yeSB7XG4gICAgdGV4dC1zaGFkb3c6ICR0ZXh0LXNoYWRvd190aXRsZTtcbiAgfVxuXG4gICZfZGFyayB7XG4gICAgY29sb3I6ICRjb2xvcl9ibGFjaztcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuXG4gICZfX2dyZWV0aW5nIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzBkZWcpO1xuICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgfVxuXG4gICZfX25hbWUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zMGRlZyk7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICB9XG59XG5cbi5waG90byB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogOTUlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi50aWNrZXItd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIEBpbmNsdWRlIGZsZXgtY29udGFpbmVyKGNvbHVtbiwgY2VudGVyLCBjZW50ZXIsIG5vd3JhcCwgJ25vcm1hbCcpO1xufVxuXG4uY3VzdG9tLWJhY2tncm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwJTtcbiAgaGVpZ2h0OiAxNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcbiAgQGluY2x1ZGUgZmxleC1jb250YWluZXIocm93LCBmbGV4LXN0YXJ0LCBmbGV4LXN0YXJ0LCB3cmFwLCAnbm9ybWFsJyk7XG5cbiAgJl9fZWxlbWVudCB7XG4gICAgd2lkdGg6IDNyZW07XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNhdGlzZnlcIiwgY3Vyc2l2ZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbjogMDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuLnRpdGxlX2NhdGVnb3J5IHtcbiAgdGV4dC1zaGFkb3c6IDAuMTI1cmVtIDAuMTI1cmVtIDAuNXJlbSAjMDAwMDAwO1xufVxuLnRpdGxlX2Rhcmsge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLnRpdGxlX19ncmVldGluZyB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0zMGRlZyk7XG4gIGZvbnQtc2l6ZTogNnJlbTtcbn1cbi50aXRsZV9fbmFtZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0zMGRlZyk7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLnBob3RvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiA5NSU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnRpY2tlci13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuXG4uY3VzdG9tLWJhY2tncm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwJTtcbiAgaGVpZ2h0OiAxNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmN1c3RvbS1iYWNrZ3JvdW5kX19lbGVtZW50IHtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgbWFyZ2luOiAxcmVtO1xufSIsIi8vIGNvbG9yc1xuJGNvbG9yX3ByaW1hcnktcmVkOiAjZmYxNzQ0O1xuJGNvbG9yX2dyZXktZGFyazogIzMzMzMzMztcbiRjb2xvcl9ncmV5LWxpZ2h0OiAjZTVlNWU1O1xuJGNvbG9yX3doaXRlOiAjZmZmZmZmO1xuJGNvbG9yX2JsYWNrOiAjMDAwMDAwO1xuXG4vLyBmb250LWZhbWlsaWVzXG4kZm9udC1mYW1pbHlfc2F0aXNmeTogJ1NhdGlzZnknLCBjdXJzaXZlO1xuJGZvbnQtZmFtaWx5X3JhbGV3YXk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcblxuLy8gdGV4dC1zaGFkb3dcbiR0ZXh0LXNoYWRvd190aXRsZTogMC4xMjVyZW0gMC4xMjVyZW0gMC41cmVtICRjb2xvcl9ibGFjaztcblxuLy8gYm94LXNoYWRvd1xuJGJveC1zaGFkb3dfY29tbW9uOiAwIDAgMC41cmVtICRjb2xvcl9ibGFjaztcbiIsIkBtaXhpbiBmbGV4LWNvbnRhaW5lcihcbiAgJGZsZXgtZGlyZWN0aW9uOiByb3csXG4gICRhbGlnbi1pdGVtczogZmxleC1zdGFydCxcbiAgJGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCxcbiAgJGZsZXgtd3JhcDogbm93cmFwLFxuICAkZmxleC10eXBlOiAnbm9ybWFsJ1xuKSB7XG4gIEBpZiAkZmxleC10eXBlID09ICdpbmxpbmUnIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgfSBAZWxzZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBmbGV4LWRpcmVjdGlvbjogJGZsZXgtZGlyZWN0aW9uO1xuICBhbGlnbi1pdGVtczogJGFsaWduLWl0ZW1zO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5LWNvbnRlbnQ7XG4gIGZsZXgtd3JhcDogJGZsZXgtd3JhcDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/main-page/main-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.ts ***!
  \********************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainPageComponent = class MainPageComponent {
    constructor() {
        this.tickerValues = [
            'Linter lover',
            'Frontend developer at SNH MeisterSoft',
            'Full-Stack developer at home'
        ];
        this.publications = [];
    }
};
MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        selector: 'app-main-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-page/main-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-page.component.scss */ "./src/app/pages/main-page/main-page.component.scss")).default]
    })
], MainPageComponent);



/***/ }),

/***/ "./src/app/pages/main-page/main-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/main-page/main-page.module.ts ***!
  \*****************************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app-shared */ "./src/app/shared/index.ts");
/* harmony import */ var _main_page_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-page-routing.module */ "./src/app/pages/main-page/main-page-routing.module.ts");
/* harmony import */ var _main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-page.component */ "./src/app/pages/main-page/main-page.component.ts");
/* harmony import */ var _row_section_row_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./row-section/row-section.component */ "./src/app/pages/main-page/row-section/row-section.component.ts");






let MainPageModule = class MainPageModule {
};
MainPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"], _row_section_row_section_component__WEBPACK_IMPORTED_MODULE_5__["RowSectionComponent"]],
        imports: [_app_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _main_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["MainPageRoutingModule"]]
    })
], MainPageModule);



/***/ }),

/***/ "./src/app/pages/main-page/row-section/row-section.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/main-page/row-section/row-section.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  width: 100%;\n  height: 95vh;\n  position: relative;\n  z-index: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-wrap: nowrap;\n}\n\n.row {\n  width: 100%;\n  height: inherit;\n  overflow: visible;\n  position: relative;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-wrap: nowrap;\n}\n\n.row_primary {\n  background: #ff1744;\n}\n\n.row_primary .row__content {\n  top: 0;\n  padding: 0;\n}\n\n.row_dark {\n  background: #333333;\n}\n\n.row__background {\n  position: absolute;\n  top: -25%;\n  left: -50%;\n  width: 200%;\n  height: 100%;\n  background: inherit;\n  transform: rotate(10deg);\n  overflow: hidden;\n}\n\n.row__content {\n  position: absolute;\n  top: -40%;\n  padding: 3rem 1rem 1rem;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL2FwcC9wYWdlcy9tYWluLXBhZ2Uvcm93LXNlY3Rpb24vcm93LXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCIvYy9Qcm9qZWN0cy9zY2FybGV0Zmxhc2guZ2l0aHViLmlvL2FwcGxpY2F0aW9uL3NyYy9zdHlsZXMvbWl4aW5zLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9yb3ctc2VjdGlvbi9yb3ctc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL3N0eWxlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VDR0UsYUFBQTtFQUVGLHNCREp3QjtFQ0t4Qix1QkRMZ0M7RUNNaEMsMkJETjRDO0VDTzVDLGlCRFB3RDtBRUUxRDs7QUZDQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CR1pZO0VGTVYsYUFBQTtFQUVGLHNCREt3QjtFQ0p4Qix1QkRJZ0M7RUNIaEMsMkJERzRDO0VDRjVDLGlCREV3RDtBRU0xRDs7QUZKRTtFQUNFLG1CR25CZ0I7QUR5QnBCOztBRkpJO0VBQ0UsTUFBQTtFQUNBLFVBQUE7QUVNTjs7QUZGRTtFQUNFLG1CRzNCYztBRCtCbEI7O0FGREU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUVHSjs7QUZBRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FFRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYWluLXBhZ2Uvcm93LXNlY3Rpb24vcm93LXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuQGltcG9ydCAnbWl4aW5zJztcblxuOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5NXZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDA7XG4gIEBpbmNsdWRlIGZsZXgtY29udGFpbmVyKGNvbHVtbiwgZmxleC1zdGFydCwgZmxleC1zdGFydCwgbm93cmFwLCAnbm9ybWFsJyk7XG59XG5cbi5yb3cge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAkY29sb3Jfd2hpdGU7XG4gIEBpbmNsdWRlIGZsZXgtY29udGFpbmVyKGNvbHVtbiwgZmxleC1zdGFydCwgZmxleC1zdGFydCwgbm93cmFwLCAnbm9ybWFsJyk7XG5cbiAgJl9wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3JfcHJpbWFyeS1yZWQ7XG5cbiAgICAucm93X19jb250ZW50IHtcbiAgICAgIHRvcDogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICB9XG5cbiAgJl9kYXJrIHtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3JfZ3JleS1kYXJrO1xuICB9XG5cbiAgJl9fYmFja2dyb3VuZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTI1JTtcbiAgICBsZWZ0OiAtNTAlO1xuICAgIHdpZHRoOiAyMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgJl9fY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTQwJTtcbiAgICBwYWRkaW5nOiAzcmVtIDFyZW0gMXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMTtcbiAgfVxufVxuIiwiQG1peGluIGZsZXgtY29udGFpbmVyKFxuICAkZmxleC1kaXJlY3Rpb246IHJvdyxcbiAgJGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0LFxuICAkanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0LFxuICAkZmxleC13cmFwOiBub3dyYXAsXG4gICRmbGV4LXR5cGU6ICdub3JtYWwnXG4pIHtcbiAgQGlmICRmbGV4LXR5cGUgPT0gJ2lubGluZScge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB9IEBlbHNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIGZsZXgtZGlyZWN0aW9uOiAkZmxleC1kaXJlY3Rpb247XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ24taXRlbXM7XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnktY29udGVudDtcbiAgZmxleC13cmFwOiAkZmxleC13cmFwO1xufVxuIiwiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5NXZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuXG4ucm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG4ucm93X3ByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiAjZmYxNzQ0O1xufVxuLnJvd19wcmltYXJ5IC5yb3dfX2NvbnRlbnQge1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4ucm93X2Rhcmsge1xuICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xufVxuLnJvd19fYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjUlO1xuICBsZWZ0OiAtNTAlO1xuICB3aWR0aDogMjAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucm93X19jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00MCU7XG4gIHBhZGRpbmc6IDNyZW0gMXJlbSAxcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxO1xufSIsIi8vIGNvbG9yc1xuJGNvbG9yX3ByaW1hcnktcmVkOiAjZmYxNzQ0O1xuJGNvbG9yX2dyZXktZGFyazogIzMzMzMzMztcbiRjb2xvcl9ncmV5LWxpZ2h0OiAjZTVlNWU1O1xuJGNvbG9yX3doaXRlOiAjZmZmZmZmO1xuJGNvbG9yX2JsYWNrOiAjMDAwMDAwO1xuXG4vLyBmb250LWZhbWlsaWVzXG4kZm9udC1mYW1pbHlfc2F0aXNmeTogJ1NhdGlzZnknLCBjdXJzaXZlO1xuJGZvbnQtZmFtaWx5X3JhbGV3YXk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcblxuLy8gdGV4dC1zaGFkb3dcbiR0ZXh0LXNoYWRvd190aXRsZTogMC4xMjVyZW0gMC4xMjVyZW0gMC41cmVtICRjb2xvcl9ibGFjaztcblxuLy8gYm94LXNoYWRvd1xuJGJveC1zaGFkb3dfY29tbW9uOiAwIDAgMC41cmVtICRjb2xvcl9ibGFjaztcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/main-page/row-section/row-section.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/main-page/row-section/row-section.component.ts ***!
  \**********************************************************************/
/*! exports provided: RowSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowSectionComponent", function() { return RowSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RowSectionComponent = class RowSectionComponent {
    constructor() {
        this.type = 'light';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RowSectionComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RowSectionComponent.prototype, "backgroundTemplateRef", void 0);
RowSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        selector: 'app-row-section',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./row-section.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main-page/row-section/row-section.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./row-section.component.scss */ "./src/app/pages/main-page/row-section/row-section.component.scss")).default]
    })
], RowSectionComponent);



/***/ })

}]);
//# sourceMappingURL=pages-main-page-main-page-module-es2015.js.map