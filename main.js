(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        loadChildren: () => __webpack_require__.e(/*! import() | pages-main-page-main-page-module */ "pages-main-page-main-page-module").then(__webpack_require__.bind(null, /*! ./pages/main-page/main-page.module */ "./src/app/pages/main-page/main-page.module.ts")).then(module => module.MainPageModule),
        path: '',
        pathMatch: 'full'
    },
    {
        loadChildren: () => __webpack_require__.e(/*! import() | pages-talks-page-talks-page-module */ "pages-talks-page-talks-page-module").then(__webpack_require__.bind(null, /*! ./pages/talks-page//talks-page.module */ "./src/app/pages/talks-page/talks-page.module.ts")).then(module => module.TalksPageModule),
        path: 'talks'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/layout/layout.component */ "./src/app/shared/components/layout/layout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'ScarletFlash';
        // alert('Страница в разработке. 31.08.2019');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                selector: 'app-root',
                styleUrls: ['./app.component.scss'],
                templateUrl: './app.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app-shared */ "./src/app/shared/index.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/functions/helpers/get-deepest-activated-route.helper.ts":
/*!*************************************************************************!*\
  !*** ./src/app/functions/helpers/get-deepest-activated-route.helper.ts ***!
  \*************************************************************************/
/*! exports provided: getDeepestActivatedRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDeepestActivatedRoute", function() { return getDeepestActivatedRoute; });
/* harmony import */ var _is_null_or_undefined_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-null-or-undefined.helper */ "./src/app/functions/helpers/is-null-or-undefined.helper.ts");

const getDeepestActivatedRoute = (activatedRoute) => {
    const hasActivatedChildRoute = !Object(_is_null_or_undefined_helper__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"])(activatedRoute.firstChild);
    if (hasActivatedChildRoute) {
        return getDeepestActivatedRoute(activatedRoute.firstChild);
    }
    return activatedRoute;
};


/***/ }),

/***/ "./src/app/functions/helpers/get-random-integer-from-range.helper.ts":
/*!***************************************************************************!*\
  !*** ./src/app/functions/helpers/get-random-integer-from-range.helper.ts ***!
  \***************************************************************************/
/*! exports provided: getRandomIntegerFromRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomIntegerFromRange", function() { return getRandomIntegerFromRange; });
const getRandomIntegerFromRange = (rangeStart, rangeEnd) => {
    const possibleValuesCount = rangeEnd + 1 - rangeStart;
    return Math.floor(Math.random() * possibleValuesCount) + rangeStart;
};


/***/ }),

/***/ "./src/app/functions/helpers/index.ts":
/*!********************************************!*\
  !*** ./src/app/functions/helpers/index.ts ***!
  \********************************************/
/*! exports provided: getDeepestActivatedRoute, getRandomIntegerFromRange, isNullOrUndefined, shuffleArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_deepest_activated_route_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-deepest-activated-route.helper */ "./src/app/functions/helpers/get-deepest-activated-route.helper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDeepestActivatedRoute", function() { return _get_deepest_activated_route_helper__WEBPACK_IMPORTED_MODULE_0__["getDeepestActivatedRoute"]; });

/* harmony import */ var _get_random_integer_from_range_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-random-integer-from-range.helper */ "./src/app/functions/helpers/get-random-integer-from-range.helper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRandomIntegerFromRange", function() { return _get_random_integer_from_range_helper__WEBPACK_IMPORTED_MODULE_1__["getRandomIntegerFromRange"]; });

/* harmony import */ var _is_null_or_undefined_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-null-or-undefined.helper */ "./src/app/functions/helpers/is-null-or-undefined.helper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return _is_null_or_undefined_helper__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"]; });

/* harmony import */ var _shuffle_array_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shuffle-array.helper */ "./src/app/functions/helpers/shuffle-array.helper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shuffleArray", function() { return _shuffle_array_helper__WEBPACK_IMPORTED_MODULE_3__["shuffleArray"]; });







/***/ }),

/***/ "./src/app/functions/helpers/is-null-or-undefined.helper.ts":
/*!******************************************************************!*\
  !*** ./src/app/functions/helpers/is-null-or-undefined.helper.ts ***!
  \******************************************************************/
/*! exports provided: isNullOrUndefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return isNullOrUndefined; });
const isNullOrUndefined = (value) => {
    return value === undefined || value === null;
};


/***/ }),

/***/ "./src/app/functions/helpers/shuffle-array.helper.ts":
/*!***********************************************************!*\
  !*** ./src/app/functions/helpers/shuffle-array.helper.ts ***!
  \***********************************************************/
/*! exports provided: shuffleArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleArray", function() { return shuffleArray; });
/* harmony import */ var _get_random_integer_from_range_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-random-integer-from-range.helper */ "./src/app/functions/helpers/get-random-integer-from-range.helper.ts");

const shuffleArray = (array) => {
    return [...array].sort(() => Object(_get_random_integer_from_range_helper__WEBPACK_IMPORTED_MODULE_0__["getRandomIntegerFromRange"])(-1, 1));
};


/***/ }),

/***/ "./src/app/functions/index.ts":
/*!************************************!*\
  !*** ./src/app/functions/index.ts ***!
  \************************************/
/*! exports provided: getDeepestActivatedRoute, getRandomIntegerFromRange, isNullOrUndefined, shuffleArray, filterNotNullOrUndefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/app/functions/helpers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDeepestActivatedRoute", function() { return _helpers__WEBPACK_IMPORTED_MODULE_0__["getDeepestActivatedRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRandomIntegerFromRange", function() { return _helpers__WEBPACK_IMPORTED_MODULE_0__["getRandomIntegerFromRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return _helpers__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shuffleArray", function() { return _helpers__WEBPACK_IMPORTED_MODULE_0__["shuffleArray"]; });

/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rxjs-operators */ "./src/app/functions/rxjs-operators/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterNotNullOrUndefined", function() { return _rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filterNotNullOrUndefined"]; });





/***/ }),

/***/ "./src/app/functions/rxjs-operators/filter-non-null-or-undefined.ts":
/*!**************************************************************************!*\
  !*** ./src/app/functions/rxjs-operators/filter-non-null-or-undefined.ts ***!
  \**************************************************************************/
/*! exports provided: filterNotNullOrUndefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterNotNullOrUndefined", function() { return filterNotNullOrUndefined; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/app/functions/helpers/index.ts");


const filterNotNullOrUndefined = () => {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])((innerValue) => !Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(innerValue));
};


/***/ }),

/***/ "./src/app/functions/rxjs-operators/index.ts":
/*!***************************************************!*\
  !*** ./src/app/functions/rxjs-operators/index.ts ***!
  \***************************************************/
/*! exports provided: filterNotNullOrUndefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter_non_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-non-null-or-undefined */ "./src/app/functions/rxjs-operators/filter-non-null-or-undefined.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterNotNullOrUndefined", function() { return _filter_non_null_or_undefined__WEBPACK_IMPORTED_MODULE_0__["filterNotNullOrUndefined"]; });




/***/ }),

/***/ "./src/app/shared/components/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared/components/index.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ "./src/app/shared/components/layout/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return _layout__WEBPACK_IMPORTED_MODULE_0__["LayoutComponent"]; });




/***/ }),

/***/ "./src/app/shared/components/layout/index.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/components/layout/index.ts ***!
  \***************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.component */ "./src/app/shared/components/layout/layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return _layout_component__WEBPACK_IMPORTED_MODULE_0__["LayoutComponent"]; });




/***/ }),

/***/ "./src/app/shared/components/layout/layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/layout/layout.component.ts ***!
  \**************************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["*"];
class LayoutComponent {
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "layout"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".layout[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  width: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-wrap: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwiL2MvUHJvamVjdHMvc2NhcmxldGZsYXNoLmdpdGh1Yi5pby9hcHBsaWNhdGlvbi9zcmMvc3R5bGVzL21peGlucy5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQ0lFLGFBQUE7RUFFRixzQkRMd0I7RUNNeEIsdUJETmdDO0VDT2hDLDJCRFA0QztFQ1E1QyxpQkRSd0Q7QUVHMUQiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbWl4aW5zJztcblxuLmxheW91dCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBAaW5jbHVkZSBmbGV4LWNvbnRhaW5lcihjb2x1bW4sIGZsZXgtc3RhcnQsIGZsZXgtc3RhcnQsIG5vd3JhcCwgJ25vcm1hbCcpO1xufVxuIiwiQG1peGluIGZsZXgtY29udGFpbmVyKFxuICAkZmxleC1kaXJlY3Rpb246IHJvdyxcbiAgJGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0LFxuICAkanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0LFxuICAkZmxleC13cmFwOiBub3dyYXAsXG4gICRmbGV4LXR5cGU6ICdub3JtYWwnXG4pIHtcbiAgQGlmICRmbGV4LXR5cGUgPT0gJ2lubGluZScge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB9IEBlbHNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIGZsZXgtZGlyZWN0aW9uOiAkZmxleC1kaXJlY3Rpb247XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ24taXRlbXM7XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnktY29udGVudDtcbiAgZmxleC13cmFwOiAkZmxleC13cmFwO1xufVxuIiwiLmxheW91dCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout',
                styleUrls: ['./layout.component.scss'],
                templateUrl: './layout.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedModule, LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/app/shared/components/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["LayoutComponent"]; });

/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]; });





/***/ }),

/***/ "./src/app/shared/pipes/is-null-or-undefined.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/pipes/is-null-or-undefined.pipe.ts ***!
  \***********************************************************/
/*! exports provided: IsNullOrUndefinedPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNullOrUndefinedPipe", function() { return IsNullOrUndefinedPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app-functions */ "./src/app/functions/index.ts");



class IsNullOrUndefinedPipe {
    transform(value) {
        return Object(_app_functions__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(value);
    }
}
IsNullOrUndefinedPipe.ɵfac = function IsNullOrUndefinedPipe_Factory(t) { return new (t || IsNullOrUndefinedPipe)(); };
IsNullOrUndefinedPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "isNullOrUndefined", type: IsNullOrUndefinedPipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsNullOrUndefinedPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'isNullOrUndefined',
                pure: false
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/app/shared/components/index.ts");
/* harmony import */ var _pipes_is_null_or_undefined_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/is-null-or-undefined.pipe */ "./src/app/shared/pipes/is-null-or-undefined.pipe.ts");





const CORE_MODULES = [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]];
const SHARED_COMPONENTS = [_components__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"]];
const SHARED_PIPES = [_pipes_is_null_or_undefined_pipe__WEBPACK_IMPORTED_MODULE_3__["IsNullOrUndefinedPipe"]];
class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[...CORE_MODULES],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        _pipes_is_null_or_undefined_pipe__WEBPACK_IMPORTED_MODULE_3__["IsNullOrUndefinedPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _components__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        _pipes_is_null_or_undefined_pipe__WEBPACK_IMPORTED_MODULE_3__["IsNullOrUndefinedPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [...SHARED_COMPONENTS, ...SHARED_PIPES],
                exports: [...CORE_MODULES, ...SHARED_COMPONENTS, ...SHARED_PIPES],
                imports: [...CORE_MODULES]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone-error */ "./node_modules/zone.js/dist/zone-error.js");
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__);

const environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app-environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_app_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /c/Projects/scarletflash.github.io/application/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map