(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-main-page-main-page-module"],{

/***/ "./src/app/pages/main-page/main-page-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/main-page/main-page-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MainPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageRoutingModule", function() { return MainPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page.component */ "./src/app/pages/main-page/main-page.component.ts");





const routes = [
    {
        path: '**',
        pathMatch: 'prefix',
        redirectTo: '/talks/wsl/1'
    },
    {
        component: _main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"],
        path: '',
        pathMatch: 'full'
    }
];
class MainPageRoutingModule {
}
MainPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainPageRoutingModule });
MainPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainPageRoutingModule_Factory(t) { return new (t || MainPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app-functions */ "./src/app/functions/index.ts");
/* harmony import */ var _row_section_row_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./row-section/row-section.component */ "./src/app/pages/main-page/row-section/row-section.component.ts");
/* harmony import */ var _teaser_teaser_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teaser/teaser.component */ "./src/app/pages/main-page/teaser/teaser.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function MainPageComponent_ng_template_11_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    const logoUrl_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", logoUrl_r3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MainPageComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainPageComponent_ng_template_11_img_2_Template, 1, 1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.logoUrls);
} }
class MainPageComponent {
    constructor() {
        this._logoCount = 100;
        this._logoNames = new Set([
            'angular',
            'typescript',
            'nest.js',
            'rxjs',
            'docker',
            'ubuntu',
            'git',
            'node.js',
            'bem',
            'circleci',
            'npm',
            'sass',
            'css3',
            'html5'
        ]);
        this.teaserValues = [
            'Linter lover',
            'Frontend developer at SNH MeisterSoft',
            'Full-Stack developer at home'
        ];
        this.logoUrls = Object(_app_functions__WEBPACK_IMPORTED_MODULE_1__["shuffleArray"])(new Array(Math.ceil(this._logoCount / this._logoNames.size))
            .fill(Array.from(this._logoNames.values()))
            .flat()
            .map((innerName) => `/assets/logos/${innerName}.svg`));
        this.publications = [];
        // console.log(Math.ceil(this._logoCount / this._logoNames.size));
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 17, vars: 8, consts: [["type", "primary"], [1, "title"], [1, "title__greeting"], [1, "title__name"], ["alt", "", "src", "/assets/imgs/sample-photo.png", 1, "photo"], ["type", "light", 3, "backgroundTemplateRef"], [1, "title", "title_category", "title_dark"], [3, "values"], ["whoAmIBackground", ""], ["type", "dark"], [1, "title", "title_category"], [1, "tiles"], [1, "custom-background"], [1, "custom-background__content"], ["class", "custom-background__element", "alt", "", 3, "src", 4, "ngFor", "ngForOf"], ["alt", "", 1, "custom-background__element", 3, "src"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-row-section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Hello, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " I am Fedor Usakov ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-row-section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Who am I ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-teaser", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MainPageComponent_ng_template_11_Template, 3, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-row-section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Publications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", 95, "vh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", 75, "vh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("backgroundTemplateRef", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("values", ctx.teaserValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", 75, "vh");
    } }, directives: [_row_section_row_section_component__WEBPACK_IMPORTED_MODULE_2__["RowSectionComponent"], _teaser_teaser_component__WEBPACK_IMPORTED_MODULE_3__["TeaserComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  min-height: 100vh;\n  overflow: hidden;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-family: \"Satisfy\", cursive;\n  color: #ffffff;\n  padding: 1rem;\n  margin: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-wrap: nowrap;\n}\n\n.title_category[_ngcontent-%COMP%] {\n  text-shadow: 0.125rem 0.125rem 0.5rem #000000;\n}\n\n.title_dark[_ngcontent-%COMP%] {\n  color: #000000;\n  text-shadow: none;\n  text-decoration: underline;\n}\n\n.title__greeting[_ngcontent-%COMP%] {\n  transform: rotate(-30deg);\n  font-size: 6rem;\n}\n\n.title__name[_ngcontent-%COMP%] {\n  transform: rotate(-30deg);\n  font-size: 3rem;\n}\n\n.photo[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: auto;\n  height: 95%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  pointer-events: none;\n}\n\n.ticker-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: nowrap;\n}\n\n.custom-background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -20%;\n  height: 150%;\n  width: 100%;\n  transform: rotate(-10deg);\n  background: #ffffff;\n  overflow: hidden;\n}\n\n.custom-background__content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -25%;\n  left: -25%;\n  height: 150%;\n  width: 150%;\n  transform: rotate(-10deg);\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n}\n\n.custom-background__element[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: auto;\n  margin: 2.5rem;\n  opacity: 0.35;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL2FwcC9wYWdlcy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwiL2MvUHJvamVjdHMvc2NhcmxldGZsYXNoLmdpdGh1Yi5pby9hcHBsaWNhdGlvbi9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL2MvUHJvamVjdHMvc2NhcmxldGZsYXNoLmdpdGh1Yi5pby9hcHBsaWNhdGlvbi9zcmMvc3R5bGVzL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNGRjs7QURLQTtFQUNFLCtCRUZvQjtFRkdwQixjRVBZO0VGUVosYUFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7RUdKRSxhQUFBO0VBRUYsc0JIR3dCO0VHRnhCLHVCSEVnQztFR0RoQywyQkhDNEM7RUdBNUMsaUJBQUE7QUZFRjs7QURBRTtFQUNFLDZDRU5nQjtBRFFwQjs7QURDRTtFQUNFLGNFakJVO0VGa0JWLGlCQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURFRTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdFO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDREo7O0FES0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7RUFDQSxvQkFBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUd4Q0UsYUFBQTtFQUVGLHNCSHVDd0I7RUd0Q3hCLG1CSHNDZ0M7RUdyQ2hDLHVCSHFDd0M7RUdwQ3hDLGlCSG9DZ0Q7QUNFbEQ7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJFeERZO0VGeURaLGdCQUFBO0FDRUY7O0FEQUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFRzNEQSxhQUFBO0VBRUYsbUJIMEQwQjtFR3pEMUIsdUJIeUQrQjtFR3hEL0IsMkJId0QyQztFR3ZEM0MsZUh1RHVEO0FDTXpEOztBREhFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ21peGlucyc7XG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseV9zYXRpc2Z5O1xuICBjb2xvcjogJGNvbG9yX3doaXRlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW46IDA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBAaW5jbHVkZSBmbGV4LWNvbnRhaW5lcihjb2x1bW4sIGZsZXgtc3RhcnQsIGZsZXgtc3RhcnQsIG5vd3JhcCwgJ25vcm1hbCcpO1xuXG4gICZfY2F0ZWdvcnkge1xuICAgIHRleHQtc2hhZG93OiAkdGV4dC1zaGFkb3dfdGl0bGU7XG4gIH1cblxuICAmX2Rhcmsge1xuICAgIGNvbG9yOiAkY29sb3JfYmxhY2s7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cblxuICAmX19ncmVldGluZyB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTMwZGVnKTtcbiAgICBmb250LXNpemU6IDZyZW07XG4gIH1cblxuICAmX19uYW1lIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzBkZWcpO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgfVxufVxuXG4ucGhvdG8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDk1JTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4udGlja2VyLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBAaW5jbHVkZSBmbGV4LWNvbnRhaW5lcihjb2x1bW4sIGNlbnRlciwgY2VudGVyLCBub3dyYXAsICdub3JtYWwnKTtcbn1cblxuLmN1c3RvbS1iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yMCU7XG4gIGhlaWdodDogMTUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG4gIGJhY2tncm91bmQ6ICRjb2xvcl93aGl0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAmX19jb250ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMjUlO1xuICAgIGxlZnQ6IC0yNSU7XG4gICAgaGVpZ2h0OiAxNTAlO1xuICAgIHdpZHRoOiAxNTAlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG4gICAgQGluY2x1ZGUgZmxleC1jb250YWluZXIocm93LCBmbGV4LXN0YXJ0LCBmbGV4LXN0YXJ0LCB3cmFwLCAnbm9ybWFsJyk7XG4gIH1cblxuICAmX19lbGVtZW50IHtcbiAgICB3aWR0aDogM3JlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiAyLjVyZW07XG4gICAgb3BhY2l0eTogMC4zNTtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNhdGlzZnlcIiwgY3Vyc2l2ZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbjogMDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuLnRpdGxlX2NhdGVnb3J5IHtcbiAgdGV4dC1zaGFkb3c6IDAuMTI1cmVtIDAuMTI1cmVtIDAuNXJlbSAjMDAwMDAwO1xufVxuLnRpdGxlX2Rhcmsge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLnRpdGxlX19ncmVldGluZyB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0zMGRlZyk7XG4gIGZvbnQtc2l6ZTogNnJlbTtcbn1cbi50aXRsZV9fbmFtZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0zMGRlZyk7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLnBob3RvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiA5NSU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnRpY2tlci13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuXG4uY3VzdG9tLWJhY2tncm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTIwJTtcbiAgaGVpZ2h0OiAxNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jdXN0b20tYmFja2dyb3VuZF9fY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjUlO1xuICBsZWZ0OiAtMjUlO1xuICBoZWlnaHQ6IDE1MCU7XG4gIHdpZHRoOiAxNTAlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uY3VzdG9tLWJhY2tncm91bmRfX2VsZW1lbnQge1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDIuNXJlbTtcbiAgb3BhY2l0eTogMC4zNTtcbn0iLCIvLyBjb2xvcnNcbiRjb2xvcl9wcmltYXJ5LXJlZDogI2ZmMTc0NDtcbiRjb2xvcl9ncmV5LWRhcms6ICMzMzMzMzM7XG4kY29sb3JfZ3JleS1saWdodDogI2U1ZTVlNTtcbiRjb2xvcl93aGl0ZTogI2ZmZmZmZjtcbiRjb2xvcl9ibGFjazogIzAwMDAwMDtcblxuLy8gZm9udC1mYW1pbGllc1xuJGZvbnQtZmFtaWx5X3NhdGlzZnk6ICdTYXRpc2Z5JywgY3Vyc2l2ZTtcbiRmb250LWZhbWlseV9yYWxld2F5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG5cbi8vIHRleHQtc2hhZG93XG4kdGV4dC1zaGFkb3dfdGl0bGU6IDAuMTI1cmVtIDAuMTI1cmVtIDAuNXJlbSAkY29sb3JfYmxhY2s7XG5cbi8vIGJveC1zaGFkb3dcbiRib3gtc2hhZG93X2NvbW1vbjogMCAwIDAuNXJlbSAkY29sb3JfYmxhY2s7XG4iLCJAbWl4aW4gZmxleC1jb250YWluZXIoXG4gICRmbGV4LWRpcmVjdGlvbjogcm93LFxuICAkYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQsXG4gICRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQsXG4gICRmbGV4LXdyYXA6IG5vd3JhcCxcbiAgJGZsZXgtdHlwZTogJ25vcm1hbCdcbikge1xuICBAaWYgJGZsZXgtdHlwZSA9PSAnaW5saW5lJyB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIH0gQGVsc2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgZmxleC1kaXJlY3Rpb246ICRmbGV4LWRpcmVjdGlvbjtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbi1pdGVtcztcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeS1jb250ZW50O1xuICBmbGV4LXdyYXA6ICRmbGV4LXdyYXA7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                selector: 'app-main-page',
                styleUrls: ['./main-page.component.scss'],
                templateUrl: './main-page.component.html'
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app-shared */ "./src/app/shared/index.ts");
/* harmony import */ var _main_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page-routing.module */ "./src/app/pages/main-page/main-page-routing.module.ts");
/* harmony import */ var _main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-page.component */ "./src/app/pages/main-page/main-page.component.ts");
/* harmony import */ var _row_section_row_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./row-section/row-section.component */ "./src/app/pages/main-page/row-section/row-section.component.ts");
/* harmony import */ var _teaser_teaser_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./teaser/teaser.component */ "./src/app/pages/main-page/teaser/teaser.component.ts");







class MainPageModule {
}
MainPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainPageModule });
MainPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainPageModule_Factory(t) { return new (t || MainPageModule)(); }, imports: [[_app_shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _main_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainPageRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainPageModule, { declarations: [_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"], _row_section_row_section_component__WEBPACK_IMPORTED_MODULE_4__["RowSectionComponent"], _teaser_teaser_component__WEBPACK_IMPORTED_MODULE_5__["TeaserComponent"]], imports: [_app_shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _main_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"], _row_section_row_section_component__WEBPACK_IMPORTED_MODULE_4__["RowSectionComponent"], _teaser_teaser_component__WEBPACK_IMPORTED_MODULE_5__["TeaserComponent"]],
                imports: [_app_shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _main_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainPageRoutingModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_pipes_is_null_or_undefined_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/pipes/is-null-or-undefined.pipe */ "./src/app/shared/pipes/is-null-or-undefined.pipe.ts");




function RowSectionComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 4);
} }
const _c0 = function (a0) { return [a0]; };
const _c1 = ["*"];
class RowSectionComponent {
    constructor() {
        this.type = 'light';
    }
}
RowSectionComponent.ɵfac = function RowSectionComponent_Factory(t) { return new (t || RowSectionComponent)(); };
RowSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RowSectionComponent, selectors: [["app-row-section"]], inputs: { type: "type", backgroundTemplateRef: "backgroundTemplateRef" }, ngContentSelectors: _c1, decls: 6, vars: 7, consts: [[1, "row", 3, "ngClass"], [1, "row__background"], ["class", "sample", 4, "ngIf", "ngIfElse"], [1, "row__content"], [1, "sample"]], template: function RowSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RowSectionComponent_ng_container_2_Template, 1, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "isNullOrUndefined");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, "row_" + ctx.type));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx.backgroundTemplateRef))("ngIfElse", ctx.backgroundTemplateRef);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_shared_pipes_is_null_or_undefined_pipe__WEBPACK_IMPORTED_MODULE_2__["IsNullOrUndefinedPipe"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 95vh;\n  position: relative;\n  z-index: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-wrap: nowrap;\n}\n\n.row[_ngcontent-%COMP%] {\n  width: 100%;\n  height: inherit;\n  overflow: visible;\n  position: relative;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-wrap: nowrap;\n}\n\n.row_primary[_ngcontent-%COMP%] {\n  background: #ff1744;\n}\n\n.row_primary[_ngcontent-%COMP%]   .row__content[_ngcontent-%COMP%] {\n  top: 0;\n  padding: 0;\n}\n\n.row_dark[_ngcontent-%COMP%] {\n  background: #333333;\n}\n\n.row__background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -25%;\n  left: -50%;\n  width: 200%;\n  height: 100%;\n  background: inherit;\n  transform: rotate(10deg);\n  overflow: hidden;\n}\n\n.row__content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -40%;\n  padding: 3rem 1rem 1rem;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL2FwcC9wYWdlcy9tYWluLXBhZ2Uvcm93LXNlY3Rpb24vcm93LXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCIvYy9Qcm9qZWN0cy9zY2FybGV0Zmxhc2guZ2l0aHViLmlvL2FwcGxpY2F0aW9uL3NyYy9zdHlsZXMvbWl4aW5zLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21haW4tcGFnZS9yb3ctc2VjdGlvbi9yb3ctc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsIi9jL1Byb2plY3RzL3NjYXJsZXRmbGFzaC5naXRodWIuaW8vYXBwbGljYXRpb24vc3JjL3N0eWxlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VDR0UsYUFBQTtFQUVGLHNCREp3QjtFQ0t4Qix1QkRMZ0M7RUNNaEMsMkJETjRDO0VDTzVDLGlCRFB3RDtBRUUxRDs7QUZDQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CR1pZO0VGTVYsYUFBQTtFQUVGLHNCREt3QjtFQ0p4Qix1QkRJZ0M7RUNIaEMsMkJERzRDO0VDRjVDLGlCREV3RDtBRU0xRDs7QUZKRTtFQUNFLG1CR25CZ0I7QUR5QnBCOztBRkpJO0VBQ0UsTUFBQTtFQUNBLFVBQUE7QUVNTjs7QUZGRTtFQUNFLG1CRzNCYztBRCtCbEI7O0FGREU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUVHSjs7QUZBRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FFRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYWluLXBhZ2Uvcm93LXNlY3Rpb24vcm93LXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuQGltcG9ydCAnbWl4aW5zJztcblxuOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5NXZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDA7XG4gIEBpbmNsdWRlIGZsZXgtY29udGFpbmVyKGNvbHVtbiwgZmxleC1zdGFydCwgZmxleC1zdGFydCwgbm93cmFwLCAnbm9ybWFsJyk7XG59XG5cbi5yb3cge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAkY29sb3Jfd2hpdGU7XG4gIEBpbmNsdWRlIGZsZXgtY29udGFpbmVyKGNvbHVtbiwgZmxleC1zdGFydCwgZmxleC1zdGFydCwgbm93cmFwLCAnbm9ybWFsJyk7XG5cbiAgJl9wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3JfcHJpbWFyeS1yZWQ7XG5cbiAgICAucm93X19jb250ZW50IHtcbiAgICAgIHRvcDogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICB9XG5cbiAgJl9kYXJrIHtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3JfZ3JleS1kYXJrO1xuICB9XG5cbiAgJl9fYmFja2dyb3VuZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTI1JTtcbiAgICBsZWZ0OiAtNTAlO1xuICAgIHdpZHRoOiAyMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgJl9fY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTQwJTtcbiAgICBwYWRkaW5nOiAzcmVtIDFyZW0gMXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMTtcbiAgfVxufVxuIiwiQG1peGluIGZsZXgtY29udGFpbmVyKFxuICAkZmxleC1kaXJlY3Rpb246IHJvdyxcbiAgJGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0LFxuICAkanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0LFxuICAkZmxleC13cmFwOiBub3dyYXAsXG4gICRmbGV4LXR5cGU6ICdub3JtYWwnXG4pIHtcbiAgQGlmICRmbGV4LXR5cGUgPT0gJ2lubGluZScge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB9IEBlbHNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIGZsZXgtZGlyZWN0aW9uOiAkZmxleC1kaXJlY3Rpb247XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ24taXRlbXM7XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnktY29udGVudDtcbiAgZmxleC13cmFwOiAkZmxleC13cmFwO1xufVxuIiwiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5NXZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuXG4ucm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG4ucm93X3ByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiAjZmYxNzQ0O1xufVxuLnJvd19wcmltYXJ5IC5yb3dfX2NvbnRlbnQge1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4ucm93X2Rhcmsge1xuICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xufVxuLnJvd19fYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjUlO1xuICBsZWZ0OiAtNTAlO1xuICB3aWR0aDogMjAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucm93X19jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00MCU7XG4gIHBhZGRpbmc6IDNyZW0gMXJlbSAxcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxO1xufSIsIi8vIGNvbG9yc1xuJGNvbG9yX3ByaW1hcnktcmVkOiAjZmYxNzQ0O1xuJGNvbG9yX2dyZXktZGFyazogIzMzMzMzMztcbiRjb2xvcl9ncmV5LWxpZ2h0OiAjZTVlNWU1O1xuJGNvbG9yX3doaXRlOiAjZmZmZmZmO1xuJGNvbG9yX2JsYWNrOiAjMDAwMDAwO1xuXG4vLyBmb250LWZhbWlsaWVzXG4kZm9udC1mYW1pbHlfc2F0aXNmeTogJ1NhdGlzZnknLCBjdXJzaXZlO1xuJGZvbnQtZmFtaWx5X3JhbGV3YXk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcblxuLy8gdGV4dC1zaGFkb3dcbiR0ZXh0LXNoYWRvd190aXRsZTogMC4xMjVyZW0gMC4xMjVyZW0gMC41cmVtICRjb2xvcl9ibGFjaztcblxuLy8gYm94LXNoYWRvd1xuJGJveC1zaGFkb3dfY29tbW9uOiAwIDAgMC41cmVtICRjb2xvcl9ibGFjaztcbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RowSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                selector: 'app-row-section',
                styleUrls: ['./row-section.component.scss'],
                templateUrl: './row-section.component.html'
            }]
    }], null, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], backgroundTemplateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/main-page/teaser/teaser.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/main-page/teaser/teaser.component.ts ***!
  \************************************************************/
/*! exports provided: TeaserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeaserComponent", function() { return TeaserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app-functions */ "./src/app/functions/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





class TeaserComponent {
    constructor() {
        this.currentValue$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.values = [];
    }
    ngOnChanges(changes) {
        if (Object(_app_functions__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(changes) ||
            Object(_app_functions__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(changes.values) ||
            Object(_app_functions__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(changes.values.currentValue)) {
            return;
        }
    }
}
TeaserComponent.ɵfac = function TeaserComponent_Factory(t) { return new (t || TeaserComponent)(); };
TeaserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeaserComponent, selectors: [["app-teaser"]], inputs: { values: "values" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()], decls: 3, vars: 3, template: function TeaserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.currentValue$));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4tcGFnZS90ZWFzZXIvdGVhc2VyLmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeaserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                selector: 'app-teaser',
                styleUrls: ['./teaser.component.scss'],
                templateUrl: './teaser.component.html'
            }]
    }], null, { values: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-main-page-main-page-module.js.map