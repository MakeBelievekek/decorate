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
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");





const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
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
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/modal.service */ "./src/app/services/modal.service.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.title = 'decorate';
    }
    hideModal() {
        this.modalService.bodyClick();
        console.log('Body Clicked');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[1, "valami"], [3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_3_listener() { return ctx.hideModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".valami[_ngcontent-%COMP%]{\r\n  background-color: red;\r\n    height: 100%;\r\n    width: 100%;\r\n    margin: 0px;\r\n    padding:0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmFsYW1pe1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOjBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/content/content.component */ "./src/app/components/content/content.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/content-header/content-header.component */ "./src/app/components/content-header/content-header.component.ts");
/* harmony import */ var _components_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/newsletter/newsletter.component */ "./src/app/components/newsletter/newsletter.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_second_content_second_content_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/second-content/second-content.component */ "./src/app/components/second-content/second-content.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/components/modal/modal.component.ts");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_8__["ContentHeaderComponent"],
        _components_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_9__["NewsletterComponent"],
        _components_second_content_second_content_component__WEBPACK_IMPORTED_MODULE_13__["SecondContentComponent"],
        _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_16__["ModalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_8__["ContentHeaderComponent"],
                    _components_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_9__["NewsletterComponent"],
                    _components_second_content_second_content_component__WEBPACK_IMPORTED_MODULE_13__["SecondContentComponent"],
                    _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_16__["ModalComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/content-header/content-header.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/content-header/content-header.component.ts ***!
  \***********************************************************************/
/*! exports provided: ContentHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentHeaderComponent", function() { return ContentHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContentHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContentHeaderComponent.ɵfac = function ContentHeaderComponent_Factory(t) { return new (t || ContentHeaderComponent)(); };
ContentHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentHeaderComponent, selectors: [["app-content-header"]], decls: 13, vars: 0, consts: [[1, "content-header"], [1, "icons"], [1, "dot"], ["aria-hidden", "true", 1, "fa", "fa-facebook-square", "fa-2x"], ["aria-hidden", "true", 1, "fa", "fa-twitter", "fa-2x"], [1, "logo"], [1, "phone"], [1, "telIcon"], ["id", "imgTel", "src", "https://image.flaticon.com/icons/svg/901/901171.svg", "alt", ""], ["id", "imgMail", "src", "https://image.flaticon.com/icons/svg/1034/1034138.svg", "alt", ""]], template: function ContentHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " +36 20 325 2355 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media screen and (min-width: 1000px) {\r\n    .content-header[_ngcontent-%COMP%] {\r\n        background-color: #E5E5E5;\r\n        height: 210px;\r\n        display: grid;\r\n        grid-template-rows: 1fr 2fr;\r\n        grid-template-columns: 0.2fr 1fr 0.2fr;\r\n        grid-template-areas: \"h1 h2 h3\" \"i1 h2 i3\";\r\n        padding-left: 32px;\r\n        padding-right: 32px;\r\n    }\r\n\r\n    .dot[_ngcontent-%COMP%] {\r\n        grid-area: i1;\r\n        height: 50px;\r\n        width: 50px;\r\n        background-color: white;\r\n        border-radius: 50%;\r\n        border: 1px solid #CCCCCC;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        margin-left: 20px;\r\n        cursor: pointer;\r\n        transition: 700ms;\r\n        transition-timing-function: linear;\r\n    }\r\n\r\n    .icons[_ngcontent-%COMP%] {\r\n        grid-area: i1;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: start;\r\n\r\n    }\r\n\r\n    .phone[_ngcontent-%COMP%] {\r\n        grid-area: i3;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: start;\r\n    }\r\n\r\n    .telIcon[_ngcontent-%COMP%] {\r\n\r\n        height: 50px;\r\n        width: 250px;\r\n        background-color: white;\r\n        border-radius: 15px;\r\n        border: 1px solid #CCCCCC;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        margin-left: 20px;\r\n        cursor: pointer;\r\n        transition: 700ms;\r\n        transition-timing-function: linear;\r\n    }\r\n\r\n    .dot[_ngcontent-%COMP%]:hover {\r\n        background-color: #C5C5C5;\r\n    }\r\n\r\n    .telIcon[_ngcontent-%COMP%]:hover {\r\n        background-color: #C5C5C5;\r\n    }\r\n\r\n    #imgMail[_ngcontent-%COMP%] {\r\n        width: 30px;\r\n    }\r\n\r\n    #imgTel[_ngcontent-%COMP%] {\r\n        width: 30px;\r\n    }\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n    grid-area: h2;\r\n}\r\n\r\n@media screen and (max-width: 999px) {\r\n    .content-header[_ngcontent-%COMP%] {\r\n        background-color: #E5E5E5;\r\n        height: 210px;\r\n        display: grid;\r\n        grid-template-areas: \"a\";\r\n    }\r\n\r\n  .icons[_ngcontent-%COMP%]{\r\n      display: none;\r\n  }\r\n    .phone[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    .logo[_ngcontent-%COMP%] {\r\n        grid-area: a;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50LWhlYWRlci9jb250ZW50LWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSx5QkFBeUI7UUFDekIsYUFBYTtRQUNiLGFBQWE7UUFDYiwyQkFBMkI7UUFDM0Isc0NBQXNDO1FBQ3RDLDBDQUEwQztRQUMxQyxrQkFBa0I7UUFDbEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLFlBQVk7UUFDWixXQUFXO1FBQ1gsdUJBQXVCO1FBQ3ZCLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFDekIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsa0NBQWtDO0lBQ3RDOztJQUVBO1FBQ0ksYUFBYTtRQUNiLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsc0JBQXNCOztJQUUxQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHNCQUFzQjtJQUMxQjs7SUFFQTs7UUFFSSxZQUFZO1FBQ1osWUFBWTtRQUNaLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIseUJBQXlCO1FBQ3pCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGtDQUFrQztJQUN0Qzs7SUFFQTtRQUNJLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFdBQVc7SUFDZjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO1FBQ0kseUJBQXlCO1FBQ3pCLGFBQWE7UUFDYixhQUFhO1FBQ2Isd0JBQXdCO0lBQzVCOztFQUVGO01BQ0ksYUFBYTtFQUNqQjtJQUNFO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50LWhlYWRlci9jb250ZW50LWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAuY29udGVudC1oZWFkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFNUU1RTU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMmZyIDFmciAwLjJmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImgxIGgyIGgzXCIgXCJpMSBoMiBpM1wiO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzJweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kb3Qge1xyXG4gICAgICAgIGdyaWQtYXJlYTogaTE7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogNzAwbXM7XHJcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgIH1cclxuXHJcbiAgICAuaWNvbnMge1xyXG4gICAgICAgIGdyaWQtYXJlYTogaTE7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5waG9uZSB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBpMztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICAgIH1cclxuXHJcbiAgICAudGVsSWNvbiB7XHJcblxyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogNzAwbXM7XHJcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgIH1cclxuXHJcbiAgICAuZG90OmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzVDNUM1O1xyXG4gICAgfVxyXG5cclxuICAgIC50ZWxJY29uOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzVDNUM1O1xyXG4gICAgfVxyXG5cclxuICAgICNpbWdNYWlsIHtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAjaW1nVGVsIHtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgZ3JpZC1hcmVhOiBoMjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTk5cHgpIHtcclxuICAgIC5jb250ZW50LWhlYWRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTVFNTtcclxuICAgICAgICBoZWlnaHQ6IDIxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJhXCI7XHJcbiAgICB9XHJcblxyXG4gIC5pY29uc3tcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgICAucGhvbmUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBhO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-content-header',
                templateUrl: './content-header.component.html',
                styleUrls: ['./content-header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/content/content.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/content/content.component.ts ***!
  \*********************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContentComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(); };
ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["app-content"]], decls: 8, vars: 0, consts: [[1, "content"], [1, "parent", "cardGrid1"], [1, "child", "firstCard"], [1, "mozaik"], [1, "parent", "cardGrid3"], [1, "child", "secondCard"], [1, "parent", "cardGrid2"], [1, "child", "thirdCard"]], template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media screen and (min-width: 1000px) {\r\n    .content[_ngcontent-%COMP%] {\r\n        height: 90vh;\r\n        display: grid;\r\n        grid-template-rows: 1fr 1fr;\r\n        grid-template-columns: 2fr 1fr 1fr;\r\n        grid-template-areas: \"a1 a2 a3\" \"a1 a4 a3\";\r\n    }\r\n    .cardGrid3[_ngcontent-%COMP%] {\r\n        grid-area: a4;\r\n    }\r\n    .cardGrid2[_ngcontent-%COMP%] {\r\n        grid-area: a3;\r\n    }\r\n    .cardGrid1[_ngcontent-%COMP%] {\r\n        grid-area: a1;\r\n    }\r\n\r\n    .firstCard[_ngcontent-%COMP%] {\r\n        background: url('JOURNEY BEYOND CAM 12.jpg') no-repeat center center;\r\n        background-size: cover;\r\n        width: 100%;\r\n        -webkit-filter: brightness(80%);\r\n                filter: brightness(80%);\r\n    }\r\n\r\n    .secondCard[_ngcontent-%COMP%] {\r\n        background: url('JOURNEY BEYOND CAM 11.jpg') no-repeat center center;\r\n        background-size: cover;\r\n        width: 100%;\r\n    }\r\n    .thirdCard[_ngcontent-%COMP%] {\r\n        grid-area: a3;\r\n        background: url('REFLECTIONS CAM 4.jpg') no-repeat center center;\r\n        background-size: cover;\r\n        width: 100%;\r\n        -webkit-filter: brightness(65%);\r\n                filter: brightness(65%);\r\n    }\r\n    .mozaik[_ngcontent-%COMP%] {\r\n        grid-area: a2;\r\n        background-color: #C6D7CD;\r\n        background-size: cover;\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 999px) {\r\n    .content[_ngcontent-%COMP%] {\r\n        height: 90vh;\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n        grid-template-rows: 2fr 1fr 1fr;\r\n        grid-template-areas: \"a a\" \"b1 c\" \"b2 c\";\r\n    }\r\n\r\n    .firstCard[_ngcontent-%COMP%] {\r\n        background: url('JOURNEY BEYOND CAM 12.jpg') no-repeat center center;\r\n        background-size: cover;\r\n        width: 100%;\r\n        -webkit-filter: brightness(80%);\r\n                filter: brightness(80%);\r\n    }\r\n    .secondCard[_ngcontent-%COMP%] {\r\n        background: url('JOURNEY BEYOND CAM 11.jpg') no-repeat center center;\r\n        background-size: cover;\r\n        width: 100%;\r\n    }\r\n    .thirdCard[_ngcontent-%COMP%] {\r\n        background: url('REFLECTIONS CAM 4.jpg') no-repeat center center;\r\n        background-size: cover;\r\n        width: 100%;\r\n        -webkit-filter: brightness(65%);\r\n                filter: brightness(65%);\r\n    }\r\n    .mozaik[_ngcontent-%COMP%] {\r\n        grid-area: b1;\r\n        background-color: #C6D7CD;\r\n        background-size: cover;\r\n        width: 100%;\r\n    }\r\n    .cardGrid3[_ngcontent-%COMP%] {\r\n        grid-area: b2;\r\n    }\r\n    .cardGrid2[_ngcontent-%COMP%] {\r\n        grid-area: c;\r\n    }\r\n    .cardGrid1[_ngcontent-%COMP%] {\r\n        grid-area: a;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYiwyQkFBMkI7UUFDM0Isa0NBQWtDO1FBQ2xDLDBDQUEwQztJQUM5QztJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLG9FQUErRTtRQUMvRSxzQkFBc0I7UUFDdEIsV0FBVztRQUNYLCtCQUF1QjtnQkFBdkIsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksb0VBQStFO1FBQy9FLHNCQUFzQjtRQUN0QixXQUFXO0lBQ2Y7SUFDQTtRQUNJLGFBQWE7UUFDYixnRUFBMkU7UUFDM0Usc0JBQXNCO1FBQ3RCLFdBQVc7UUFDWCwrQkFBdUI7Z0JBQXZCLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLHlCQUF5QjtRQUN6QixzQkFBc0I7UUFDdEIsV0FBVztJQUNmO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLCtCQUErQjtRQUMvQix3Q0FBd0M7SUFDNUM7O0lBRUE7UUFDSSxvRUFBK0U7UUFDL0Usc0JBQXNCO1FBQ3RCLFdBQVc7UUFDWCwrQkFBdUI7Z0JBQXZCLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksb0VBQStFO1FBQy9FLHNCQUFzQjtRQUN0QixXQUFXO0lBQ2Y7SUFDQTtRQUNJLGdFQUEyRTtRQUMzRSxzQkFBc0I7UUFDdEIsV0FBVztRQUNYLCtCQUF1QjtnQkFBdkIsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxhQUFhO1FBQ2IseUJBQXlCO1FBQ3pCLHNCQUFzQjtRQUN0QixXQUFXO0lBQ2Y7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImExIGEyIGEzXCIgXCJhMSBhNCBhM1wiO1xyXG4gICAgfVxyXG4gICAgLmNhcmRHcmlkMyB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBhNDtcclxuICAgIH1cclxuICAgIC5jYXJkR3JpZDIge1xyXG4gICAgICAgIGdyaWQtYXJlYTogYTM7XHJcbiAgICB9XHJcbiAgICAuY2FyZEdyaWQxIHtcclxuICAgICAgICBncmlkLWFyZWE6IGExO1xyXG4gICAgfVxyXG5cclxuICAgIC5maXJzdENhcmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvSk9VUk5FWSBCRVlPTkQgQ0FNIDEyLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWNvbmRDYXJkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL0pPVVJORVkgQkVZT05EIENBTSAxMS5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC50aGlyZENhcmQge1xyXG4gICAgICAgIGdyaWQtYXJlYTogYTM7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9SRUZMRUNUSU9OUyBDQU0gNC5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNjUlKTtcclxuICAgIH1cclxuICAgIC5tb3phaWsge1xyXG4gICAgICAgIGdyaWQtYXJlYTogYTI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0M2RDdDRDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTlweCkge1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIGhlaWdodDogOTB2aDtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiYSBhXCIgXCJiMSBjXCIgXCJiMiBjXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLmZpcnN0Q2FyZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9KT1VSTkVZIEJFWU9ORCBDQU0gMTIuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XHJcbiAgICB9XHJcbiAgICAuc2Vjb25kQ2FyZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9KT1VSTkVZIEJFWU9ORCBDQU0gMTEuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAudGhpcmRDYXJkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL1JFRkxFQ1RJT05TIENBTSA0LmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg2NSUpO1xyXG4gICAgfVxyXG4gICAgLm1vemFpayB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBiMTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzZEN0NEO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuY2FyZEdyaWQzIHtcclxuICAgICAgICBncmlkLWFyZWE6IGIyO1xyXG4gICAgfVxyXG4gICAgLmNhcmRHcmlkMiB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBjO1xyXG4gICAgfVxyXG4gICAgLmNhcmRHcmlkMSB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBhO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-content',
                templateUrl: './content.component.html',
                styleUrls: ['./content.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 48, vars: 0, consts: [[1, "footer"], [1, "row"], ["href", "#!"], [1, "footer-copyright", "text-center", "py-3"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Link 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Link 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Link 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Link 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Link 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Link 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Link 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Link 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Link 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Link 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Link 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Link 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u00A9 2020 Copyright: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "M\u00E1t\u00E9 \u00E9s Zsolt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\r\n    background-color: #E5E5E5;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTVFNTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _content_header_content_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content-header/content-header.component */ "./src/app/components/content-header/content-header.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/content.component */ "./src/app/components/content/content.component.ts");
/* harmony import */ var _newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../newsletter/newsletter.component */ "./src/app/components/newsletter/newsletter.component.ts");
/* harmony import */ var _second_content_second_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../second-content/second-content.component */ "./src/app/components/second-content/second-content.component.ts");






class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 0, consts: [[1, "content-margin"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-content-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-second-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_1__["ContentHeaderComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"], _newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_3__["NewsletterComponent"], _second_content_second_content_component__WEBPACK_IMPORTED_MODULE_4__["SecondContentComponent"]], styles: [".content-margin[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtbWFyZ2lue1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ModalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ez a modal compones NAVIGATION");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Some text in the Modal..");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Some text in the Modal..");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Some text in the Modal..");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Some text in the Modal..");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Some text in the Modal..");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModalComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ez a modal compones PRODUCTS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Some text in the Modal..");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Some text in the Modal..");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Some text in the Modal..");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Some text in the Modal..");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Some text in the Modal..");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ModalComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], inputs: { control: "control" }, decls: 2, vars: 2, consts: [["class", "navigation-modal animate__animated animate__fadeInDown", 4, "ngIf"], ["class", "products-modal animate__animated animate__fadeInDown", 4, "ngIf"], [1, "navigation-modal", "animate__animated", "animate__fadeInDown"], [1, "custom-modal-content"], [1, "products-modal", "animate__animated", "animate__fadeInDown"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ModalComponent_div_0_Template, 14, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModalComponent_div_1_Template, 14, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.control === "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.control === "products");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".navigation-modal[_ngcontent-%COMP%] {\r\n  display: block; \r\n  position: fixed; \r\n  z-index: 1; \r\n  padding-top: 60px; \r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; \r\n  overflow: auto; \r\n  transition: 3000ms transform;\r\n}\r\n\r\n.products-modal[_ngcontent-%COMP%] {\r\n  display: block; \r\n  position: fixed; \r\n  z-index: 1; \r\n  padding-top: 65px; \r\n  padding-left: 114px;\r\n  left: 0;\r\n  top: 0;\r\n  width: 500px; \r\n  overflow: auto; \r\n  transition: 3000ms transform;\r\n}\r\n\r\n.custom-modal-content[_ngcontent-%COMP%] {\r\n  background-color: #fefefe;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYyxFQUFFLHNCQUFzQjtFQUN0QyxlQUFlLEVBQUUsa0JBQWtCO0VBQ25DLFVBQVUsRUFBRSxlQUFlO0VBQzNCLGlCQUFpQixFQUFFLHdCQUF3QjtFQUMzQyxPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVcsRUFBRSxlQUFlO0VBQzVCLGNBQWMsRUFBRSw0QkFBNEI7RUFDNUMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsY0FBYyxFQUFFLHNCQUFzQjtFQUN0QyxlQUFlLEVBQUUsa0JBQWtCO0VBQ25DLFVBQVUsRUFBRSxlQUFlO0VBQzNCLGlCQUFpQixFQUFFLHdCQUF3QjtFQUMzQyxtQkFBbUI7RUFDbkIsT0FBTztFQUNQLE1BQU07RUFDTixZQUFZLEVBQUUsZUFBZTtFQUM3QixjQUFjLEVBQUUsNEJBQTRCO0VBQzVDLDRCQUE0QjtBQUM5Qjs7QUFHQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZpZ2F0aW9uLW1vZGFsIHtcclxuICBkaXNwbGF5OiBibG9jazsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXHJcbiAgcGFkZGluZy10b3A6IDYwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG4gIHRyYW5zaXRpb246IDMwMDBtcyB0cmFuc2Zvcm07XHJcbn1cclxuXHJcbi5wcm9kdWN0cy1tb2RhbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gIHBhZGRpbmctdG9wOiA2NXB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXHJcbiAgcGFkZGluZy1sZWZ0OiAxMTRweDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogNTAwcHg7IC8qIEZ1bGwgd2lkdGggKi9cclxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICB0cmFuc2l0aW9uOiAzMDAwbXMgdHJhbnNmb3JtO1xyXG59XHJcblxyXG5cclxuLmN1c3RvbS1tb2RhbC1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG59XHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal',
                templateUrl: './modal.component.html',
                styleUrls: ['./modal.component.css']
            }]
    }], function () { return []; }, { control: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/modal.service */ "./src/app/services/modal.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/modal.component */ "./src/app/components/modal/modal.component.ts");






function NavbarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_1_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.toggleProductsModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Designer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Wish list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Basket");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_2_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.toggleNavigationModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Basket");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_app_modal_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-modal", 16);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r2.modalController)("@fade", undefined);
} }
class NavbarComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() {
        this.getScreenSize();
        this.modalService.showModalState.subscribe(show => this.showNavigationModal = show);
        console.log(this.showNavigationModal);
    }
    getScreenSize(event) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        if (this.screenWidth >= 1000) {
            this.largeNavToShow = true;
            this.showNavigationModal = false;
            this.modalService.showModal = this.showNavigationModal;
        }
        else {
            this.largeNavToShow = false;
            this.showProductsModal = false;
            this.modalService.showModal = this.showProductsModal;
        }
    }
    toggleNavigationModal() {
        this.showNavigationModal = !this.showNavigationModal;
        this.modalService.showModal = this.showNavigationModal;
        this.modalController = 'navigation';
    }
    toggleProductsModal() {
        this.showNavigationModal = !this.showNavigationModal;
        this.modalService.showModal = this.showNavigationModal;
        this.modalController = 'products';
    }
    get screenWidth() {
        return this._screenWidth;
    }
    set screenWidth(value) {
        this._screenWidth = value;
    }
    get screenHeight() {
        return this._screenHeight;
    }
    set screenHeight(value) {
        this._screenHeight = value;
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function NavbarComponent_resize_HostBindingHandler($event) { return ctx.getScreenSize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 4, vars: 3, consts: [[1, "fixed-top"], ["class", "row", 4, "ngIf"], [3, "control", 4, "ngIf"], [1, "row"], [1, "make-left"], ["href", "#"], [3, "click"], ["aria-hidden", "true", 1, "fa", "fa-chevron-down", "pl-1", "pb-1"], [1, "col", "p-0"], [1, "row", "justify-content-end"], ["aria-hidden", "true", 1, "fa", "fa-search", "pl-2"], [1, "make-right"], ["aria-hidden", "true", 1, "fa", "fa-shopping-basket", "pl-2"], [1, "burger", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-bars", "fa-2x"], [1, "col"], [3, "control"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavbarComponent_div_1_Template, 33, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavbarComponent_div_2_Template, 14, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavbarComponent_app_modal_3_Template, 1, 2, "app-modal", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.largeNavToShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.largeNavToShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNavigationModal);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"]], styles: ["nav[_ngcontent-%COMP%]{\r\n  background: #fde6de;\r\n  height: 60px;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  margin: 0px;\r\n  padding:0px;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  float: left;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  float: left;\r\n  list-style: none;\r\n  position: relative;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-family: Arial;\r\n  color: #222;\r\n  font-size: 14px;\r\n  padding: 19.5px 24px;\r\n  text-decoration: none;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: white;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.make-left[_ngcontent-%COMP%]{\r\n  padding-left: 45px !important;\r\n}\r\n\r\n.make-right[_ngcontent-%COMP%]{\r\n  padding-right: 45px !important;\r\n}\r\n\r\n.burger[_ngcontent-%COMP%] {\r\n  padding: 12px 20px 17.5px 30px !important;\r\n  text-decoration: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLDRFQUE0RTtFQUM1RSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHFCQUFxQjtBQUN2Qjs7QUFHQTtFQUNFLHVCQUF1QjtFQUN2Qiw0RUFBNEU7QUFDOUU7O0FBR0E7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXZ7XHJcbiAgYmFja2dyb3VuZDogI2ZkZTZkZTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOjBweDtcclxufVxyXG5cclxubmF2IHVsIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxubmF2IHVsIGxpIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxubmF2IGRpdiBhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgY29sb3I6ICMyMjI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDE5LjVweCAyNHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuXHJcbm5hdiBkaXYgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG5cclxuXHJcbi5tYWtlLWxlZnR7XHJcbiAgcGFkZGluZy1sZWZ0OiA0NXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYWtlLXJpZ2h0e1xyXG4gIHBhZGRpbmctcmlnaHQ6IDQ1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ1cmdlciB7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4IDE3LjVweCAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"], data: { animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                ])
            ])] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css'],
                animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                        ])
                    ])]
            }]
    }], function () { return [{ type: _services_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"] }]; }, { getScreenSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/components/newsletter/newsletter.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/newsletter/newsletter.component.ts ***!
  \***************************************************************/
/*! exports provided: NewsletterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterComponent", function() { return NewsletterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NewsletterComponent {
    constructor() { }
    ngOnInit() {
    }
}
NewsletterComponent.ɵfac = function NewsletterComponent_Factory(t) { return new (t || NewsletterComponent)(); };
NewsletterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsletterComponent, selectors: [["app-newsletter"]], decls: 15, vars: 0, consts: [[1, "newsletter-container"], [1, "newsletter-content"], [1, "newsletter-title"], [1, "newsletter"], [1, "newsletter-desc"], [1, "newsletter-input"], ["type", "text", "id", "ip2", "placeholder", "Email address", 1, "custom-email"], ["type", "button", 1, "signButton"]], template: function NewsletterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NEWSLETTER Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sign up to find out about upcoming sales, new releases and our latest design ideas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Sign Up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media screen and (min-width: 1000px) {\r\n  .newsletter-container[_ngcontent-%COMP%] {\r\n    background-color: ghostwhite;\r\n    display: grid;\r\n    grid-template-rows: 1fr 2fr 1fr;\r\n    grid-template-columns: minmax(100px, 0.5fr) 2.4fr minmax(auto, 125px);\r\n    grid-template-areas: \"a1 a2 a3\" \"b1 b2 b3\" \"c1 c2 c3\";\r\n    min-height: 160px;\r\n  }\r\n\r\n  .newsletter-content[_ngcontent-%COMP%] {\r\n    grid-area: b2;\r\n    display: grid;\r\n    grid-template-columns:  minmax(350px, auto) minmax(50px, auto) minmax(430px, auto);\r\n    grid-template-areas: \"a b c\";\r\n  }\r\n\r\n  .newsletter-title[_ngcontent-%COMP%] {\r\n    grid-area: a;\r\n  }\r\n\r\n  .newsletter-desc[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: start;\r\n  }\r\n\r\n  .newsletter[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: start;\r\n  }\r\n\r\n  h4[_ngcontent-%COMP%] {\r\n    font-family: \"Nexa W01 Bold\", sans-serif;\r\n    color: #555555;\r\n    font-size: 2rem;\r\n  }\r\n\r\n  span[_ngcontent-%COMP%] {\r\n    font-family: \"NexaRustScriptL-00\", sans-serif;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: 0.875rem;\r\n    color: #555555;\r\n  }\r\n\r\n  .newsletter-input[_ngcontent-%COMP%] {\r\n    grid-area: c;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n  }\r\n\r\n  .custom-email[_ngcontent-%COMP%] {\r\n    border-radius: 25px;\r\n    border: 1px solid #C5C5C5;;\r\n    padding: 20px;\r\n    width: 300px;\r\n    height: 15px;\r\n\r\n  }\r\n\r\n  .signButton[_ngcontent-%COMP%] {\r\n    border-radius: 25px;\r\n    border: 1px solid #C6D7CD;;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    padding-top: 9px;\r\n    padding-bottom: 9px;\r\n    margin-left: 20px;\r\n  }\r\n\r\n  input[_ngcontent-%COMP%]:focus {\r\n    outline: none !important;\r\n    border-color: #719ECE;\r\n    box-shadow: 0 0 10px #719ECE;\r\n  }\r\n\r\n  button[_ngcontent-%COMP%]:focus {\r\n    outline: none !important;\r\n    border-color: #719ECE;\r\n    box-shadow: 0 0 10px #719ECE;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (max-width: 999px) {\r\n  .newsletter-content[_ngcontent-%COMP%] {\r\n    background-color: ghostwhite;\r\n    display: grid;\r\n    grid-template-rows: 1fr 1fr;\r\n    grid-template-areas: \"a \" \"b \";\r\n    min-height: 160px;\r\n\r\n  }\r\n\r\n  .newsletter-title[_ngcontent-%COMP%] {\r\n    grid-area: a;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .newsletter-input[_ngcontent-%COMP%] {\r\n    grid-area: b;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n  }\r\n\r\n  .custom-email[_ngcontent-%COMP%] {\r\n    border-radius: 25px;\r\n    border: 1px solid #C5C5C5;;\r\n    padding: 20px;\r\n    width: 300px;\r\n    height: 15px;\r\n  }\r\n\r\n  input[_ngcontent-%COMP%]:focus {\r\n    outline: none !important;\r\n    border-color: #719ECE;\r\n    box-shadow: 0 0 10px #719ECE;\r\n  }\r\n\r\n  .signButton[_ngcontent-%COMP%] {\r\n    border-radius: 25px;\r\n    border: 1px solid #C6D7CD;;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    padding-top: 9px;\r\n    padding-bottom: 9px;\r\n    margin-left: 20px;\r\n  }\r\n\r\n  h4[_ngcontent-%COMP%] {\r\n    font-family: \"Nexa W01 Bold\", sans-serif;\r\n    color: #555555;\r\n  }\r\n\r\n  span[_ngcontent-%COMP%] {\r\n    font-family: \"NexaRustScriptL-00\", sans-serif;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  button[_ngcontent-%COMP%]:focus {\r\n    outline: none !important;\r\n    border-color: #719ECE;\r\n    box-shadow: 0 0 10px #719ECE;\r\n  }\r\n  .custom-email[_ngcontent-%COMP%] {\r\n    border-radius: 25px;\r\n    border: 1px solid #C5C5C5;;\r\n    padding: 20px;\r\n    width: 200px;\r\n    height: 15px;\r\n\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXdzbGV0dGVyL25ld3NsZXR0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IscUVBQXFFO0lBQ3JFLHFEQUFxRDtJQUNyRCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGtGQUFrRjtJQUNsRiw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usd0NBQXdDO0lBQ3hDLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsNkNBQTZDO0VBQy9DOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7O0VBRXpCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7O0VBRWQ7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsNEJBQTRCO0VBQzlCOztBQUVGOztBQUVBO0VBQ0U7SUFDRSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsaUJBQWlCOztFQUVuQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1Qjs7RUFFekI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtFQUNkOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQiw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSx3Q0FBd0M7SUFDeEMsY0FBYztFQUNoQjs7RUFFQTtJQUNFLDZDQUE2QztFQUMvQzs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTs7RUFFZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uZXdzbGV0dGVyL25ld3NsZXR0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xyXG4gIC5uZXdzbGV0dGVyLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnaG9zdHdoaXRlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxMDBweCwgMC41ZnIpIDIuNGZyIG1pbm1heChhdXRvLCAxMjVweCk7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImExIGEyIGEzXCIgXCJiMSBiMiBiM1wiIFwiYzEgYzIgYzNcIjtcclxuICAgIG1pbi1oZWlnaHQ6IDE2MHB4O1xyXG4gIH1cclxuXHJcbiAgLm5ld3NsZXR0ZXItY29udGVudCB7XHJcbiAgICBncmlkLWFyZWE6IGIyO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogIG1pbm1heCgzNTBweCwgYXV0bykgbWlubWF4KDUwcHgsIGF1dG8pIG1pbm1heCg0MzBweCwgYXV0byk7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImEgYiBjXCI7XHJcbiAgfVxyXG5cclxuICAubmV3c2xldHRlci10aXRsZSB7XHJcbiAgICBncmlkLWFyZWE6IGE7XHJcbiAgfVxyXG5cclxuICAubmV3c2xldHRlci1kZXNjIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICB9XHJcblxyXG4gIC5uZXdzbGV0dGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICB9XHJcblxyXG4gIGg0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk5leGEgVzAxIEJvbGRcIiwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjNTU1NTU1O1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgc3BhbiB7XHJcbiAgICBmb250LWZhbWlseTogXCJOZXhhUnVzdFNjcmlwdEwtMDBcIiwgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIGNvbG9yOiAjNTU1NTU1O1xyXG4gIH1cclxuXHJcbiAgLm5ld3NsZXR0ZXItaW5wdXQge1xyXG4gICAgZ3JpZC1hcmVhOiBjO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLWVtYWlsIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQzVDNUM1OztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLnNpZ25CdXR0b24ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDNkQ3Q0Q7O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiA5cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBpbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICM3MTlFQ0U7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjNzE5RUNFO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogIzcxOUVDRTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM3MTlFQ0U7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTk5cHgpIHtcclxuICAubmV3c2xldHRlci1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdob3N0d2hpdGU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJhIFwiIFwiYiBcIjtcclxuICAgIG1pbi1oZWlnaHQ6IDE2MHB4O1xyXG5cclxuICB9XHJcblxyXG4gIC5uZXdzbGV0dGVyLXRpdGxlIHtcclxuICAgIGdyaWQtYXJlYTogYTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubmV3c2xldHRlci1pbnB1dCB7XHJcbiAgICBncmlkLWFyZWE6IGI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICB9XHJcblxyXG4gIC5jdXN0b20tZW1haWwge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDNUM1QzU7O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICB9XHJcblxyXG4gIGlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogIzcxOUVDRTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM3MTlFQ0U7XHJcbiAgfVxyXG5cclxuICAuc2lnbkJ1dHRvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0M2RDdDRDs7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDlweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA5cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICB9XHJcblxyXG4gIGg0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk5leGEgVzAxIEJvbGRcIiwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjNTU1NTU1O1xyXG4gIH1cclxuXHJcbiAgc3BhbiB7XHJcbiAgICBmb250LWZhbWlseTogXCJOZXhhUnVzdFNjcmlwdEwtMDBcIiwgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICM3MTlFQ0U7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjNzE5RUNFO1xyXG4gIH1cclxuICAuY3VzdG9tLWVtYWlsIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQzVDNUM1OztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcblxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsletterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-newsletter',
                templateUrl: './newsletter.component.html',
                styleUrls: ['./newsletter.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/second-content/second-content.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/second-content/second-content.component.ts ***!
  \***********************************************************************/
/*! exports provided: SecondContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondContentComponent", function() { return SecondContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SecondContentComponent {
    constructor() { }
    ngOnInit() {
    }
}
SecondContentComponent.ɵfac = function SecondContentComponent_Factory(t) { return new (t || SecondContentComponent)(); };
SecondContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SecondContentComponent, selectors: [["app-second-content"]], decls: 5, vars: 0, consts: [[1, "content"], [1, "parent"], [1, "child", "firstCard"], [1, "child", "secondCard"]], template: function SecondContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".content[_ngcontent-%COMP%] {\r\n    height: 50vh;\r\n    display: grid;\r\n    grid-template-columns:  1fr 1fr;\r\n    grid-template-areas: \"a1 a2\";\r\n\r\n}\r\n.firstCard[_ngcontent-%COMP%] {\r\n    grid-area: a1;\r\n    background: url('ABSTRACT CAM 4.jpg') no-repeat center center;\r\n    background-size: cover;\r\n    width: 100%;\r\n}\r\n.secondCard[_ngcontent-%COMP%] {\r\n    grid-area: a2;\r\n    background: url('JOURNEY BEYOND CAM 4.jpg') no-repeat center center;\r\n    background-size: cover;\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWNvbmQtY29udGVudC9zZWNvbmQtY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsNEJBQTRCOztBQUVoQztBQUNBO0lBQ0ksYUFBYTtJQUNiLDZEQUF3RTtJQUN4RSxzQkFBc0I7SUFDdEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUVBQThFO0lBQzlFLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlY29uZC1jb250ZW50L3NlY29uZC1jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAgMWZyIDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiYTEgYTJcIjtcclxuXHJcbn1cclxuLmZpcnN0Q2FyZCB7XHJcbiAgICBncmlkLWFyZWE6IGExO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9BQlNUUkFDVCBDQU0gNC5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnNlY29uZENhcmQge1xyXG4gICAgZ3JpZC1hcmVhOiBhMjtcclxuICAgIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvSk9VUk5FWSBCRVlPTkQgQ0FNIDQuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecondContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-second-content',
                templateUrl: './second-content.component.html',
                styleUrls: ['./second-content.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/modal.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/modal.service.ts ***!
  \*******************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class ModalService {
    constructor() {
        this.showModalState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.showModal = false;
    }
    bodyClick() {
        this.showModal = false;
        this.showModalState.next(false);
    }
}
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(); };
ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
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

module.exports = __webpack_require__(/*! C:\decorate\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map