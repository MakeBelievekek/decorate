function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/admin/admin.component */
    "./src/app/components/admin/admin.component.ts");
    /* harmony import */


    var _components_basket_basket_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/basket/basket.component */
    "./src/app/components/basket/basket.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/products/products.component */
    "./src/app/components/products/products.component.ts");
    /* harmony import */


    var _components_basket_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/basket/checkout/checkout.component */
    "./src/app/components/basket/checkout/checkout.component.ts");
    /* harmony import */


    var _services_basket_content_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/basket-content-resolver */
    "./src/app/services/basket-content-resolver.ts");
    /* harmony import */


    var _services_home_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/home-resolver */
    "./src/app/services/home-resolver.ts");

    var routes = [{
      path: '',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
      resolve: {
        images: _services_home_resolver__WEBPACK_IMPORTED_MODULE_8__["HomeResolver"]
      }
    }, {
      path: 'admin',
      component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"]
    }, {
      path: 'products',
      component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"]
    }, {
      path: 'basket',
      component: _components_basket_basket_component__WEBPACK_IMPORTED_MODULE_3__["BasketComponent"],
      resolve: {
        basketItems: _services_basket_content_resolver__WEBPACK_IMPORTED_MODULE_7__["BasketContentResolver"]
      }
    }, {
      path: 'checkout',
      component: _components_basket_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__["CheckoutComponent"],
      resolve: {
        basketItems: _services_basket_content_resolver__WEBPACK_IMPORTED_MODULE_7__["BasketContentResolver"]
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/modal.service */
    "./src/app/services/modal.service.ts");
    /* harmony import */


    var _services_screen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/screen.service */
    "./src/app/services/screen.service.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_home_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/home/content-header/content-header.component */
    "./src/app/components/home/content-header/content-header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(modalService, screenService) {
        _classCallCheck(this, AppComponent);

        this.modalService = modalService;
        this.screenService = screenService;
        this.title = 'decorate';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.modalControl = this.modalService.modalControl;
          this.screenControl = this.screenService.screenControl;
          this.changeContentOnResize();
        }
      }, {
        key: "changeContentOnResize",
        value: function changeContentOnResize() {
          this.modalService.closeModal();
          this.screenService.getScreenSize();
          this.screenService.screenControlHandler();
          this.screenService.smallDropDownHandler();
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          if (this.modalControl.keepShowingModal && this.bodyPressed) {
            this.modalService.setModalButtonPressedFalse();
            this.bodyPressed = false;
          } else {
            this.modalService.closeModal();
          }
        }
      }, {
        key: "bodyClick",
        value: function bodyClick() {
          this.bodyPressed = true;
          this.closeModal();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_screen_service__WEBPACK_IMPORTED_MODULE_2__["ScreenService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      hostBindings: function AppComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler($event) {
            return ctx.changeContentOnResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 9,
      vars: 0,
      consts: [[3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_0_listener() {
            return ctx.bodyClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-content-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _components_home_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_4__["ContentHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _services_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]
        }, {
          type: _services_screen_service__WEBPACK_IMPORTED_MODULE_2__["ScreenService"]
        }];
      }, {
        changeContentOnResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_admin_admin_content_admin_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/admin/admin-content/admin-content.component */
    "./src/app/components/admin/admin-content/admin-content.component.ts");
    /* harmony import */


    var _components_admin_admin_main_admin_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/admin/admin-main/admin-main.component */
    "./src/app/components/admin/admin-main/admin-main.component.ts");
    /* harmony import */


    var _components_admin_admin_product_form_admin_product_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/admin/admin-product-form/admin-product-form.component */
    "./src/app/components/admin/admin-product-form/admin-product-form.component.ts");
    /* harmony import */


    var _components_admin_admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/admin/admin-sidebar/admin-sidebar.component */
    "./src/app/components/admin/admin-sidebar/admin-sidebar.component.ts");
    /* harmony import */


    var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/admin/admin.component */
    "./src/app/components/admin/admin.component.ts");
    /* harmony import */


    var _components_admin_category_form_category_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/admin/category-form/category-form.component */
    "./src/app/components/admin/category-form/category-form.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_home_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/home/content-header/content-header.component */
    "./src/app/components/home/content-header/content-header.component.ts");
    /* harmony import */


    var _components_home_content_content_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/home/content/content.component */
    "./src/app/components/home/content/content.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_home_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/home/newsletter/newsletter.component */
    "./src/app/components/home/newsletter/newsletter.component.ts");
    /* harmony import */


    var _components_home_second_content_second_content_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/home/second-content/second-content.component */
    "./src/app/components/home/second-content/second-content.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_products_products_header_products_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/products/products-header/products-header.component */
    "./src/app/components/products/products-header/products-header.component.ts");
    /* harmony import */


    var _components_products_products_list_product_product_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/products/products-list/product/product.component */
    "./src/app/components/products/products-list/product/product.component.ts");
    /* harmony import */


    var _components_products_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/products/products-list/products-list.component */
    "./src/app/components/products/products-list/products-list.component.ts");
    /* harmony import */


    var _components_products_products_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/products/products.component */
    "./src/app/components/products/products.component.ts");
    /* harmony import */


    var _components_home_third_content_third_content_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/home/third-content/third-content.component */
    "./src/app/components/home/third-content/third-content.component.ts");
    /* harmony import */


    var _components_home_fourth_content_fourth_content_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/home/fourth-content/fourth-content.component */
    "./src/app/components/home/fourth-content/fourth-content.component.ts");
    /* harmony import */


    var _components_home_news_news_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/home/news/news.component */
    "./src/app/components/home/news/news.component.ts");
    /* harmony import */


    var _components_home_sales_sales_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/home/sales/sales.component */
    "./src/app/components/home/sales/sales.component.ts");
    /* harmony import */


    var _components_products_products_modal_products_modal_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/products/products-modal/products-modal.component */
    "./src/app/components/products/products-modal/products-modal.component.ts");
    /* harmony import */


    var _components_navbar_navbar_modal_navbar_modal_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/navbar/navbar-modal/navbar-modal.component */
    "./src/app/components/navbar/navbar-modal/navbar-modal.component.ts");
    /* harmony import */


    var _components_basket_basket_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/basket/basket.component */
    "./src/app/components/basket/basket.component.ts");
    /* harmony import */


    var _components_products_products_filter_products_filter_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/products/products-filter/products-filter.component */
    "./src/app/components/products/products-filter/products-filter.component.ts");
    /* harmony import */


    var _components_basket_basket_header_basket_header_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/basket/basket-header/basket-header.component */
    "./src/app/components/basket/basket-header/basket-header.component.ts");
    /* harmony import */


    var _components_basket_basket_content_basket_content_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./components/basket/basket-content/basket-content.component */
    "./src/app/components/basket/basket-content/basket-content.component.ts");
    /* harmony import */


    var _components_basket_basket_bottom_basket_bottom_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./components/basket/basket-bottom/basket-bottom.component */
    "./src/app/components/basket/basket-bottom/basket-bottom.component.ts");
    /* harmony import */


    var _components_basket_basket_item_basket_item_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./components/basket/basket-item/basket-item.component */
    "./src/app/components/basket/basket-item/basket-item.component.ts");
    /* harmony import */


    var _components_basket_basket_item_plus_minus_input_plus_minus_input_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./components/basket/basket-item/plus-minus-input/plus-minus-input.component */
    "./src/app/components/basket/basket-item/plus-minus-input/plus-minus-input.component.ts");
    /* harmony import */


    var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ngx-webstorage-service */
    "./node_modules/ngx-webstorage-service/__ivy_ngcc__/fesm2015/ngx-webstorage-service.js");
    /* harmony import */


    var _services_localStorage_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./services/localStorage.service */
    "./src/app/services/localStorage.service.ts");
    /* harmony import */


    var _components_basket_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./components/basket/checkout/checkout.component */
    "./src/app/components/basket/checkout/checkout.component.ts");
    /* harmony import */


    var _components_products_active_filters_active_filters_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./components/products/active-filters/active-filters.component */
    "./src/app/components/products/active-filters/active-filters.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_localStorage_service__WEBPACK_IMPORTED_MODULE_40__["LocalStorageService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_39__["StorageServiceModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _components_home_content_content_component__WEBPACK_IMPORTED_MODULE_17__["ContentComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__["NavbarComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"], _components_home_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_16__["ContentHeaderComponent"], _components_home_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_19__["NewsletterComponent"], _components_home_second_content_second_content_component__WEBPACK_IMPORTED_MODULE_20__["SecondContentComponent"], _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"], _components_products_products_component__WEBPACK_IMPORTED_MODULE_25__["ProductsComponent"], _components_admin_admin_content_admin_content_component__WEBPACK_IMPORTED_MODULE_9__["AdminContentComponent"], _components_admin_admin_main_admin_main_component__WEBPACK_IMPORTED_MODULE_10__["AdminMainComponent"], _components_admin_admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["AdminSidebarComponent"], _components_admin_admin_product_form_admin_product_form_component__WEBPACK_IMPORTED_MODULE_11__["AdminProductFormComponent"], _components_admin_category_form_category_form_component__WEBPACK_IMPORTED_MODULE_14__["CategoryFormComponent"], _components_products_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_24__["ProductsListComponent"], _components_products_products_list_product_product_component__WEBPACK_IMPORTED_MODULE_23__["ProductComponent"], _components_products_products_header_products_header_component__WEBPACK_IMPORTED_MODULE_22__["ProductsHeaderComponent"], _components_home_third_content_third_content_component__WEBPACK_IMPORTED_MODULE_26__["ThirdContentComponent"], _components_home_fourth_content_fourth_content_component__WEBPACK_IMPORTED_MODULE_27__["FourthContentComponent"], _components_home_news_news_component__WEBPACK_IMPORTED_MODULE_28__["NewsComponent"], _components_home_sales_sales_component__WEBPACK_IMPORTED_MODULE_29__["SalesComponent"], _components_products_products_modal_products_modal_component__WEBPACK_IMPORTED_MODULE_30__["ProductsModalComponent"], _components_navbar_navbar_modal_navbar_modal_component__WEBPACK_IMPORTED_MODULE_31__["NavbarModalComponent"], _components_basket_basket_component__WEBPACK_IMPORTED_MODULE_32__["BasketComponent"], _components_basket_basket_header_basket_header_component__WEBPACK_IMPORTED_MODULE_34__["BasketHeaderComponent"], _components_basket_basket_content_basket_content_component__WEBPACK_IMPORTED_MODULE_35__["BasketContentComponent"], _components_basket_basket_bottom_basket_bottom_component__WEBPACK_IMPORTED_MODULE_36__["BasketBottomComponent"], _components_basket_basket_item_basket_item_component__WEBPACK_IMPORTED_MODULE_37__["BasketItemComponent"], _components_products_products_filter_products_filter_component__WEBPACK_IMPORTED_MODULE_33__["ProductsFilterComponent"], _components_basket_basket_item_plus_minus_input_plus_minus_input_component__WEBPACK_IMPORTED_MODULE_38__["PlusMinusInputComponent"], _components_basket_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_41__["CheckoutComponent"], _components_products_active_filters_active_filters_component__WEBPACK_IMPORTED_MODULE_42__["ActiveFiltersComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_39__["StorageServiceModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _components_home_content_content_component__WEBPACK_IMPORTED_MODULE_17__["ContentComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__["NavbarComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"], _components_home_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_16__["ContentHeaderComponent"], _components_home_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_19__["NewsletterComponent"], _components_home_second_content_second_content_component__WEBPACK_IMPORTED_MODULE_20__["SecondContentComponent"], _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"], _components_products_products_component__WEBPACK_IMPORTED_MODULE_25__["ProductsComponent"], _components_admin_admin_content_admin_content_component__WEBPACK_IMPORTED_MODULE_9__["AdminContentComponent"], _components_admin_admin_main_admin_main_component__WEBPACK_IMPORTED_MODULE_10__["AdminMainComponent"], _components_admin_admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["AdminSidebarComponent"], _components_admin_admin_product_form_admin_product_form_component__WEBPACK_IMPORTED_MODULE_11__["AdminProductFormComponent"], _components_admin_category_form_category_form_component__WEBPACK_IMPORTED_MODULE_14__["CategoryFormComponent"], _components_products_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_24__["ProductsListComponent"], _components_products_products_list_product_product_component__WEBPACK_IMPORTED_MODULE_23__["ProductComponent"], _components_products_products_header_products_header_component__WEBPACK_IMPORTED_MODULE_22__["ProductsHeaderComponent"], _components_home_third_content_third_content_component__WEBPACK_IMPORTED_MODULE_26__["ThirdContentComponent"], _components_home_fourth_content_fourth_content_component__WEBPACK_IMPORTED_MODULE_27__["FourthContentComponent"], _components_home_news_news_component__WEBPACK_IMPORTED_MODULE_28__["NewsComponent"], _components_home_sales_sales_component__WEBPACK_IMPORTED_MODULE_29__["SalesComponent"], _components_products_products_modal_products_modal_component__WEBPACK_IMPORTED_MODULE_30__["ProductsModalComponent"], _components_navbar_navbar_modal_navbar_modal_component__WEBPACK_IMPORTED_MODULE_31__["NavbarModalComponent"], _components_basket_basket_component__WEBPACK_IMPORTED_MODULE_32__["BasketComponent"], _components_basket_basket_header_basket_header_component__WEBPACK_IMPORTED_MODULE_34__["BasketHeaderComponent"], _components_basket_basket_content_basket_content_component__WEBPACK_IMPORTED_MODULE_35__["BasketContentComponent"], _components_basket_basket_bottom_basket_bottom_component__WEBPACK_IMPORTED_MODULE_36__["BasketBottomComponent"], _components_basket_basket_item_basket_item_component__WEBPACK_IMPORTED_MODULE_37__["BasketItemComponent"], _components_products_products_filter_products_filter_component__WEBPACK_IMPORTED_MODULE_33__["ProductsFilterComponent"], _components_basket_basket_item_plus_minus_input_plus_minus_input_component__WEBPACK_IMPORTED_MODULE_38__["PlusMinusInputComponent"], _components_basket_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_41__["CheckoutComponent"], _components_products_active_filters_active_filters_component__WEBPACK_IMPORTED_MODULE_42__["ActiveFiltersComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_39__["StorageServiceModule"]],
          providers: [_services_localStorage_service__WEBPACK_IMPORTED_MODULE_40__["LocalStorageService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/admin/admin-content/admin-content.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/admin/admin-content/admin-content.component.ts ***!
    \***************************************************************************/

  /*! exports provided: AdminContentComponent */

  /***/
  function srcAppComponentsAdminAdminContentAdminContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminContentComponent", function () {
      return AdminContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../admin-sidebar/admin-sidebar.component */
    "./src/app/components/admin/admin-sidebar/admin-sidebar.component.ts");
    /* harmony import */


    var _admin_main_admin_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../admin-main/admin-main.component */
    "./src/app/components/admin/admin-main/admin-main.component.ts");

    var AdminContentComponent = /*#__PURE__*/function () {
      function AdminContentComponent() {
        _classCallCheck(this, AdminContentComponent);

        this.parentToggle = new ( /*#__PURE__*/function () {
          function _class() {
            _classCallCheck(this, _class);
          }

          return _class;
        }())();
      }

      _createClass(AdminContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setToggle",
        value: function setToggle(toggle) {
          this.parentToggle = toggle;
        }
      }]);

      return AdminContentComponent;
    }();

    AdminContentComponent.ɵfac = function AdminContentComponent_Factory(t) {
      return new (t || AdminContentComponent)();
    };

    AdminContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminContentComponent,
      selectors: [["app-admin-content"]],
      decls: 5,
      vars: 1,
      consts: [[1, "admin-content"], [1, "sidebar-container"], [3, "toggle"], [1, "main-container"], [3, "inputToggle"]],
      template: function AdminContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-admin-sidebar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggle", function AdminContentComponent_Template_app_admin_sidebar_toggle_2_listener($event) {
            return ctx.setToggle($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-admin-main", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputToggle", ctx.parentToggle);
        }
      },
      directives: [_admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["AdminSidebarComponent"], _admin_main_admin_main_component__WEBPACK_IMPORTED_MODULE_2__["AdminMainComponent"]],
      styles: ["@media screen and (min-width: 1000px) {\r\n    .admin-content[_ngcontent-%COMP%] {\r\n        display: grid;\r\n        grid-template-columns: 1fr 4fr;\r\n        grid-template-areas: 'admin-sidebar admin-main';\r\n\r\n    }\r\n\r\n    .sidebar-container[_ngcontent-%COMP%] {\r\n        background-color: #C6D7CD;\r\n        grid-area: admin-sidebar;\r\n        border-right: black solid;\r\n    }\r\n\r\n    .main-container[_ngcontent-%COMP%] {\r\n        grid-area: admin-main;\r\n        background-color: #C6D7CD;\r\n    }\r\n}\r\n@media screen and (max-width: 999px) {\r\n    .admin-content[_ngcontent-%COMP%] {\r\n        display: grid;\r\n        grid-template-rows: 1fr 4fr;\r\n        grid-template-areas: 'admin-sidebar' 'admin-main';\r\n        height: 800px\r\n    }\r\n\r\n    .sidebar-container[_ngcontent-%COMP%] {\r\n        background-color: #C6D7CD;\r\n        grid-area: admin-sidebar;\r\n    }\r\n\r\n    .main-container[_ngcontent-%COMP%] {\r\n        grid-area: admin-main;\r\n        background-color: #C6D7CD;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi1jb250ZW50L2FkbWluLWNvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLDhCQUE4QjtRQUM5QiwrQ0FBK0M7O0lBRW5EOztJQUVBO1FBQ0kseUJBQXlCO1FBQ3pCLHdCQUF3QjtRQUN4Qix5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxxQkFBcUI7UUFDckIseUJBQXlCO0lBQzdCO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLDJCQUEyQjtRQUMzQixpREFBaUQ7UUFDakQ7SUFDSjs7SUFFQTtRQUNJLHlCQUF5QjtRQUN6Qix3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSxxQkFBcUI7UUFDckIseUJBQXlCO0lBQzdCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluL2FkbWluLWNvbnRlbnQvYWRtaW4tY29udGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAuYWRtaW4tY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2FkbWluLXNpZGViYXIgYWRtaW4tbWFpbic7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlYmFyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0M2RDdDRDtcclxuICAgICAgICBncmlkLWFyZWE6IGFkbWluLXNpZGViYXI7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBibGFjayBzb2xpZDtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbi1jb250YWluZXIge1xyXG4gICAgICAgIGdyaWQtYXJlYTogYWRtaW4tbWFpbjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzZEN0NEO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5OXB4KSB7XHJcbiAgICAuYWRtaW4tY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2FkbWluLXNpZGViYXInICdhZG1pbi1tYWluJztcclxuICAgICAgICBoZWlnaHQ6IDgwMHB4XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGViYXItY29udGFpbmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzZEN0NEO1xyXG4gICAgICAgIGdyaWQtYXJlYTogYWRtaW4tc2lkZWJhcjtcclxuICAgIH1cclxuXHJcbiAgICAubWFpbi1jb250YWluZXIge1xyXG4gICAgICAgIGdyaWQtYXJlYTogYWRtaW4tbWFpbjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzZEN0NEO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-content',
          templateUrl: './admin-content.component.html',
          styleUrls: ['./admin-content.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/admin/admin-main/admin-main.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/admin/admin-main/admin-main.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AdminMainComponent */

  /***/
  function srcAppComponentsAdminAdminMainAdminMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminMainComponent", function () {
      return AdminMainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _admin_product_form_admin_product_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../admin-product-form/admin-product-form.component */
    "./src/app/components/admin/admin-product-form/admin-product-form.component.ts");
    /* harmony import */


    var _category_form_category_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../category-form/category-form.component */
    "./src/app/components/admin/category-form/category-form.component.ts");

    function AdminMainComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-admin-product-form");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AdminMainComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-category-form");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AdminMainComponent = /*#__PURE__*/function () {
      function AdminMainComponent() {
        _classCallCheck(this, AdminMainComponent);

        this.inputToggle = new ( /*#__PURE__*/function () {
          function _class2() {
            _classCallCheck(this, _class2);
          }

          return _class2;
        }())();
      }

      _createClass(AdminMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.inputToggle.product = true;
        }
      }]);

      return AdminMainComponent;
    }();

    AdminMainComponent.ɵfac = function AdminMainComponent_Factory(t) {
      return new (t || AdminMainComponent)();
    };

    AdminMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminMainComponent,
      selectors: [["app-admin-main"]],
      inputs: {
        inputToggle: "inputToggle"
      },
      decls: 3,
      vars: 2,
      consts: [[1, "admin-main"], ["class", "form", 4, "ngIf"], [1, "form"]],
      template: function AdminMainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminMainComponent_div_1_Template, 2, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminMainComponent_div_2_Template, 2, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inputToggle.product);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inputToggle.category);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _admin_product_form_admin_product_form_component__WEBPACK_IMPORTED_MODULE_2__["AdminProductFormComponent"], _category_form_category_form_component__WEBPACK_IMPORTED_MODULE_3__["CategoryFormComponent"]],
      styles: ["@media screen and (min-width: 1000px) {\r\n    .admin-main[_ngcontent-%COMP%] {\r\n        margin-left: 50px;\r\n        margin-top: 50px;\r\n        margin-bottom: 50px;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n\r\n    }\r\n    .form[_ngcontent-%COMP%]{\r\n        width: 600px\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 999px) {\r\n    .admin-main[_ngcontent-%COMP%] {\r\n        margin: 50px;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        margin-top: 20px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi1tYWluL2FkbWluLW1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7O0lBRXZCO0lBQ0E7UUFDSTtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4tbWFpbi9hZG1pbi1tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIC5hZG1pbi1tYWluIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIH1cclxuICAgIC5mb3Jte1xyXG4gICAgICAgIHdpZHRoOiA2MDBweFxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTlweCkge1xyXG4gICAgLmFkbWluLW1haW4ge1xyXG4gICAgICAgIG1hcmdpbjogNTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-main',
          templateUrl: './admin-main.component.html',
          styleUrls: ['./admin-main.component.css']
        }]
      }], function () {
        return [];
      }, {
        inputToggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/admin/admin-product-form/admin-product-form.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/admin/admin-product-form/admin-product-form.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: AdminProductFormComponent */

  /***/
  function srcAppComponentsAdminAdminProductFormAdminProductFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminProductFormComponent", function () {
      return AdminProductFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/admin.service */
    "./src/app/services/admin.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AdminProductFormComponent_option_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r2);
      }
    }

    function AdminProductFormComponent_div_6_div_1_option_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r13);
      }
    }

    function AdminProductFormComponent_div_6_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Curtain Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdminProductFormComponent_div_6_div_1_option_4_Template, 2, 1, "option", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.curtainTypes);
      }
    }

    function AdminProductFormComponent_div_6_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Product Width");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AdminProductFormComponent_div_6_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Product Height");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AdminProductFormComponent_div_6_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Product Cleaning Instruction");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "textarea", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AdminProductFormComponent_div_6_div_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Product Annotation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AdminProductFormComponent_div_6_div_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Product Recommended Glue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AdminProductFormComponent_div_6_div_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var color_r14 = ctx.$implicit;
        var i_r15 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", i_r15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", color_r14.description, " ");
      }
    }

    function AdminProductFormComponent_div_6_div_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var style_r16 = ctx.$implicit;
        var i_r17 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", i_r17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", style_r16.description, " ");
      }
    }

    function AdminProductFormComponent_div_6_div_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pattern_r18 = ctx.$implicit;
        var i_r19 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", i_r19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pattern_r18.description, " ");
      }
    }

    function AdminProductFormComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminProductFormComponent_div_6_div_1_Template, 5, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Product Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Product description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "textarea", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Product ItemNumber");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AdminProductFormComponent_div_6_div_14_Template, 4, 0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AdminProductFormComponent_div_6_div_15_Template, 4, 0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Product Pattern Repetition");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Product Price");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Product Composition");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AdminProductFormComponent_div_6_div_28_Template, 4, 0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Product Family");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AdminProductFormComponent_div_6_div_33_Template, 4, 0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AdminProductFormComponent_div_6_div_34_Template, 4, 0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Colors : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AdminProductFormComponent_div_6_div_38_Template, 4, 2, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Styles : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AdminProductFormComponent_div_6_div_42_Template, 4, 2, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Patterns : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, AdminProductFormComponent_div_6_div_46_Template, 4, 2, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Primary Image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Secondary Image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.productType == "Curtain");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.productType == "Wallpaper");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.productType == "Curtain");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.productType == "Curtain");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.productType == "Wallpaper");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.productType == "Wallpaper");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.colors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.styles);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.patterns);
      }
    }

    var AdminProductFormComponent = /*#__PURE__*/function () {
      function AdminProductFormComponent(adminService, http) {
        _classCallCheck(this, AdminProductFormComponent);

        this.adminService = adminService;
        this.http = http;
        this.attributeList = new ( /*#__PURE__*/function () {
          function _class3() {
            _classCallCheck(this, _class3);
          }

          return _class3;
        }())();
        this.colors = [];
        this.patterns = [];
        this.styles = [];
        this.productTypes = ['', 'Wallpaper', 'Curtain'];
        this.curtainTypes = ['', 'Blackout', 'Children', 'Translucent', 'Darkener'];
        this.primary = new ( /*#__PURE__*/function () {
          function _class4() {
            _classCallCheck(this, _class4);
          }

          return _class4;
        }())();
        this.second = new ( /*#__PURE__*/function () {
          function _class5() {
            _classCallCheck(this, _class5);
          }

          return _class5;
        }())();
        this.attributeId = [];
        this.productModel = new ( /*#__PURE__*/function () {
          function _class6() {
            _classCallCheck(this, _class6);

            this.imageList = [];
          }

          return _class6;
        }())();
        this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          'productType': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          'curtainType': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          'productName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          'productDesc': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          'productItemNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          'productWidth': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          'productPatternRep': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          'productPrice': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          'productComposition': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          'productColors': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]),
          'productStyles': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]),
          'productPatterns': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]),
          'primaryImg': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          'secondaryImg': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          'productFamily': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          'productAnnotation': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          'productGlue': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          'productHeight': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          'cleaningInst': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
      }

      _createClass(AdminProductFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.adminService.getAllAttribute().subscribe(function (data) {
            _this.attributeList.attributes = data.attributes;
          }, function () {}, function () {
            var _iterator = _createForOfIteratorHelper(_this.attributeList.attributes),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var attr = _step.value;

                if (attr.type === 'Color') {
                  _this.colors.push(attr);
                }

                if (attr.type === 'Pattern') {
                  _this.patterns.push(attr);
                }

                if (attr.type === 'Style') {
                  _this.styles.push(attr);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            _this.adminService.createCheckboxControls(_this.colors, _this.patterns, _this.styles, _this.productForm);
          });
        }
      }, {
        key: "getAttributesId",
        value: function getAttributesId(data) {
          var _iterator2 = _createForOfIteratorHelper(data.productColors),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var at = _step2.value;
              this.attributeId.push(at.id);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          var _iterator3 = _createForOfIteratorHelper(data.productPatterns),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _at = _step3.value;
              this.attributeId.push(_at.id);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          var _iterator4 = _createForOfIteratorHelper(data.productStyles),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var _at2 = _step4.value;
              this.attributeId.push(_at2.id);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      }, {
        key: "getType",
        value: function getType() {
          var data = Object.assign({}, this.productForm.value);
          this.productType = data.productType;
        }
      }, {
        key: "saveProduct",
        value: function saveProduct() {
          var data = Object.assign({}, this.productForm.value);
          data.productColors = this.adminService.createColorsArrayToSend(this.productForm, this.colors);
          data.productPatterns = this.adminService.createPatternsArrayToSend(this.productForm, this.patterns);
          data.productStyles = this.adminService.createStylesArrayToSend(this.productForm, this.styles);
          this.getAttributesId(data);
          this.productModel.attributeListItemData = this.attributeId;
          this.productModel.productType = data.productType;
          this.productModel.curtainType = data.curtainType;
          this.productModel.productDesc = data.productDesc;
          this.productModel.name = data.productName;
          this.productModel.itemNumber = data.productItemNumber;
          this.productModel.width = data.productWidth;
          this.productModel.height = data.productHeight;
          this.productModel.cleaningInst = data.cleaningInst;
          this.productModel.patternRep = data.productPatternRep;
          this.productModel.price = data.productPrice;
          this.productModel.composition = data.productComposition;
          this.productModel.productFamily = data.productFamily;
          this.productModel.annotation = data.productAnnotation;
          this.productModel.recommendedGlue = data.productGlue;
          this.primary.imageType = 'PRIMARY_KEY';
          this.primary.imgUrl = data.primaryImg;
          this.second.imageType = 'SECONDARY_KEY';
          this.second.imgUrl = data.secondaryImg;
          this.productModel.imageList.push(this.primary);
          this.productModel.imageList.push(this.second);
          console.log(this.productModel);
          this.adminService.createProduct(this.productModel, this.productModel.productType.toLowerCase()).subscribe(function () {});
        }
      }]);

      return AdminProductFormComponent;
    }();

    AdminProductFormComponent.ɵfac = function AdminProductFormComponent_Factory(t) {
      return new (t || AdminProductFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    AdminProductFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminProductFormComponent,
      selectors: [["app-admin-product-form"]],
      decls: 9,
      vars: 3,
      consts: [["method", "post", 3, "formGroup"], [1, "form-group"], ["for", "productType"], ["id", "productType", "formControlName", "productType", 1, "form-control", 3, "change"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], ["class", "form-group", 4, "ngIf"], ["for", "product"], ["type", "text", "id", "product", "formControlName", "productName", 1, "form-control"], ["for", "description"], ["id", "description", "rows", "3", "formControlName", "productDesc", 1, "form-control"], ["for", "itemNum"], ["type", "text", "id", "itemNum", "formControlName", "productItemNumber", 1, "form-control"], ["for", "patternRep"], ["type", "number", "id", "patternRep", "formControlName", "productPatternRep", 1, "form-control"], ["for", "price"], ["type", "number", "id", "price", "formControlName", "productPrice", 1, "form-control"], ["for", "composition"], ["type", "text", "id", "composition", "formControlName", "productComposition", 1, "form-control"], ["for", "family"], ["type", "text", "id", "family", "formControlName", "productFamily", 1, "form-control"], [1, "form-group", "flex-form"], [1, "form-control-label"], ["formArrayName", "productColors", 4, "ngFor", "ngForOf"], ["formArrayName", "productStyles", 4, "ngFor", "ngForOf"], ["formArrayName", "productPatterns", 4, "ngFor", "ngForOf"], ["for", "primary"], ["type", "text", "id", "primary", "formControlName", "primaryImg", 1, "form-control"], ["for", "second"], ["type", "text", "id", "second", "formControlName", "secondaryImg", 1, "form-control"], ["for", "  curtainType"], ["id", "  curtainType", "formControlName", "curtainType", 1, "form-control"], ["for", "width"], ["type", "number", "id", "width", "formControlName", "productWidth", 1, "form-control"], ["for", "height"], ["type", "number", "id", "height", "formControlName", "productHeight", 1, "form-control"], ["for", "cleaningInst"], ["type", "text", "id", "cleaningInst", "formControlName", "cleaningInst", 1, "form-control"], ["for", "annotation"], ["type", "text", "id", "annotation", "formControlName", "productAnnotation", 1, "form-control"], ["for", "glue"], ["type", "text", "id", "glue", "formControlName", "productGlue", 1, "form-control"], ["formArrayName", "productColors"], ["type", "checkbox", 1, "checkbox", 3, "formControlName"], ["formArrayName", "productStyles"], ["formArrayName", "productPatterns"]],
      template: function AdminProductFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Product Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdminProductFormComponent_Template_select_change_4_listener() {
            return ctx.getType();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AdminProductFormComponent_option_5_Template, 2, 1, "option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AdminProductFormComponent_div_6_Template, 55, 9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminProductFormComponent_Template_a_click_7_listener() {
            return ctx.saveProduct();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.productForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productTypes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productType != null);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]],
      styles: [".flex-form[_ngcontent-%COMP%]{\r\n    display: flex;\r\n}\r\n.checkbox[_ngcontent-%COMP%]{\r\n    margin-left: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi1wcm9kdWN0LWZvcm0vYWRtaW4tcHJvZHVjdC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluL2FkbWluLXByb2R1Y3QtZm9ybS9hZG1pbi1wcm9kdWN0LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWZvcm17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5jaGVja2JveHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminProductFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-product-form',
          templateUrl: './admin-product-form.component.html',
          styleUrls: ['./admin-product-form.component.css']
        }]
      }], function () {
        return [{
          type: _services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/admin/admin-sidebar/admin-sidebar.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/admin/admin-sidebar/admin-sidebar.component.ts ***!
    \***************************************************************************/

  /*! exports provided: AdminSidebarComponent */

  /***/
  function srcAppComponentsAdminAdminSidebarAdminSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminSidebarComponent", function () {
      return AdminSidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_switch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/switch.service */
    "./src/app/services/switch.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "background-color": a0
      };
    };

    var AdminSidebarComponent = /*#__PURE__*/function () {
      function AdminSidebarComponent(switchService) {
        _classCallCheck(this, AdminSidebarComponent);

        this.switchService = switchService;
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(AdminSidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.chosen = 'product';
        }
      }, {
        key: "switchToggle",
        value: function switchToggle(type) {
          this.chosen = type;
          this.toggle.emit(this.switchService["switch"](type));
        }
      }]);

      return AdminSidebarComponent;
    }();

    AdminSidebarComponent.ɵfac = function AdminSidebarComponent_Factory(t) {
      return new (t || AdminSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_switch_service__WEBPACK_IMPORTED_MODULE_1__["SwitchService"]));
    };

    AdminSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminSidebarComponent,
      selectors: [["app-admin-sidebar"]],
      outputs: {
        toggle: "toggle"
      },
      decls: 7,
      vars: 6,
      consts: [[1, "sidebar"], [1, "sidebar-options", 3, "ngStyle"], [1, "option", 3, "click"]],
      template: function AdminSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminSidebarComponent_Template_h3_click_2_listener() {
            return ctx.switchToggle("product");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Product registration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminSidebarComponent_Template_h3_click_5_listener() {
            return ctx.switchToggle("category");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Attribute registration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.chosen === "product" ? "#E5E5E5" : "#C6D7CD"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.chosen === "category" ? "#E5E5E5" : "#C6D7CD"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]],
      styles: ["@media screen and (min-width: 1000px) {\r\n    .sidebar[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        flex-direction: column;\r\n        margin-left: 50px;\r\n        margin-top: 50px;\r\n        margin-bottom: 50px;\r\n        height: 400px;\r\n    }\r\n\r\n    .sidebar-options[_ngcontent-%COMP%] {\r\n        padding: 20px;\r\n    }\r\n\r\n    .sidebar-option[_ngcontent-%COMP%]:hover {\r\n        background-color: #E5E5E5;\r\n    }\r\n\r\n    .option[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        justify-content: start;\r\n        align-items: center;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 999px) {\r\n    .sidebar[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        flex-direction: column;\r\n        margin: 50px;\r\n        margin-bottom: 20px;\r\n    }\r\n\r\n    .sidebar-options[_ngcontent-%COMP%] {\r\n        padding: 10px;\r\n    }\r\n\r\n    .sidebar-option[_ngcontent-%COMP%]:hover {\r\n        background-color: #E5E5E5;\r\n    }\r\n\r\n    .option[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        justify-content: start;\r\n        align-items: center;\r\n        cursor: pointer;\r\n        font-size: 20px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi1zaWRlYmFyL2FkbWluLXNpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0kseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixzQkFBc0I7UUFDdEIsWUFBWTtRQUNaLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi1zaWRlYmFyL2FkbWluLXNpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xyXG4gICAgLnNpZGViYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlYmFyLW9wdGlvbnMge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGViYXItb3B0aW9uOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFNUU1O1xyXG4gICAgfVxyXG5cclxuICAgIC5vcHRpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTk5cHgpIHtcclxuICAgIC5zaWRlYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBtYXJnaW46IDUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2lkZWJhci1vcHRpb25zIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlYmFyLW9wdGlvbjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTVFNTtcclxuICAgIH1cclxuXHJcbiAgICAub3B0aW9uIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-sidebar',
          templateUrl: './admin-sidebar.component.html',
          styleUrls: ['./admin-sidebar.component.css']
        }]
      }], function () {
        return [{
          type: _services_switch_service__WEBPACK_IMPORTED_MODULE_1__["SwitchService"]
        }];
      }, {
        toggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/admin/admin.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/admin/admin.component.ts ***!
    \*****************************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppComponentsAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/admin.service */
    "./src/app/services/admin.service.ts");
    /* harmony import */


    var _admin_content_admin_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./admin-content/admin-content.component */
    "./src/app/components/admin/admin-content/admin-content.component.ts");

    var AdminComponent = /*#__PURE__*/function () {
      function AdminComponent(adminService) {
        _classCallCheck(this, AdminComponent);

        this.adminService = adminService;
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminComponent;
    }();

    AdminComponent.ɵfac = function AdminComponent_Factory(t) {
      return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]));
    };

    AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminComponent,
      selectors: [["app-admin"]],
      decls: 2,
      vars: 0,
      consts: [[1, "content-margin"]],
      template: function AdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-admin-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_admin_content_admin_content_component__WEBPACK_IMPORTED_MODULE_2__["AdminContentComponent"]],
      styles: [".content-margin[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LW1hcmdpbntcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin',
          templateUrl: './admin.component.html',
          styleUrls: ['./admin.component.css']
        }]
      }], function () {
        return [{
          type: _services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/admin/category-form/category-form.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/admin/category-form/category-form.component.ts ***!
    \***************************************************************************/

  /*! exports provided: CategoryFormComponent */

  /***/
  function srcAppComponentsAdminCategoryFormCategoryFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryFormComponent", function () {
      return CategoryFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/admin.service */
    "./src/app/services/admin.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CategoryFormComponent_option_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r1);
      }
    }

    var CategoryFormComponent = /*#__PURE__*/function () {
      function CategoryFormComponent(adminService, http) {
        _classCallCheck(this, CategoryFormComponent);

        this.adminService = adminService;
        this.http = http;
        this.attribute = new ( /*#__PURE__*/function () {
          function _class7() {
            _classCallCheck(this, _class7);
          }

          return _class7;
        }())();
        this.attributeTypes = ['', 'Color', 'Pattern', 'Style', 'Composition'];
        this.categoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          'attributeName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          'attributeType': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
      }

      _createClass(CategoryFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "saveCategory",
        value: function saveCategory() {
          var data = Object.assign({}, this.categoryForm.value);
          console.log(data);
          this.attribute.description = data.attributeName;
          this.attribute.type = data.attributeType;
          this.adminService.saveAttribute(this.attribute).subscribe(function () {});
        }
      }]);

      return CategoryFormComponent;
    }();

    CategoryFormComponent.ɵfac = function CategoryFormComponent_Factory(t) {
      return new (t || CategoryFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    CategoryFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CategoryFormComponent,
      selectors: [["app-category-form"]],
      decls: 13,
      vars: 2,
      consts: [[1, "admin-category"], ["method", "post", 3, "formGroup"], [1, "form-group"], ["for", "type"], ["type", "text", "id", "type", "formControlName", "attributeType", 1, "form-control"], [4, "ngFor", "ngForOf"], ["for", "category"], ["type", "text", "id", "category", "formControlName", "attributeName", 1, "form-control"], [1, "btn", "btn-primary", 3, "click"]],
      template: function CategoryFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Attribute Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CategoryFormComponent_option_6_Template, 2, 1, "option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Attribute Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryFormComponent_Template_a_click_11_listener() {
            return ctx.saveCategory();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.categoryForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.attributeTypes);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vY2F0ZWdvcnktZm9ybS9jYXRlZ29yeS1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-category-form',
          templateUrl: './category-form.component.html',
          styleUrls: ['./category-form.component.css']
        }]
      }], function () {
        return [{
          type: _services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/basket/basket-bottom/basket-bottom.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/basket/basket-bottom/basket-bottom.component.ts ***!
    \****************************************************************************/

  /*! exports provided: BasketBottomComponent */

  /***/
  function srcAppComponentsBasketBasketBottomBasketBottomComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasketBottomComponent", function () {
      return BasketBottomComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BasketBottomComponent = /*#__PURE__*/function () {
      function BasketBottomComponent() {
        _classCallCheck(this, BasketBottomComponent);
      }

      _createClass(BasketBottomComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BasketBottomComponent;
    }();

    BasketBottomComponent.ɵfac = function BasketBottomComponent_Factory(t) {
      return new (t || BasketBottomComponent)();
    };

    BasketBottomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BasketBottomComponent,
      selectors: [["app-basket-bottom"]],
      decls: 1,
      vars: 0,
      consts: [[1, "basket-bottom-grid"]],
      template: function BasketBottomComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        }
      },
      styles: [".basket-bottom-grid[_ngcontent-%COMP%] {\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYXNrZXQvYmFza2V0LWJvdHRvbS9iYXNrZXQtYm90dG9tLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jhc2tldC9iYXNrZXQtYm90dG9tL2Jhc2tldC1ib3R0b20uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXNrZXQtYm90dG9tLWdyaWQge1xyXG5cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasketBottomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-basket-bottom',
          templateUrl: './basket-bottom.component.html',
          styleUrls: ['./basket-bottom.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/basket/basket-content/basket-content.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/basket/basket-content/basket-content.component.ts ***!
    \******************************************************************************/

  /*! exports provided: BasketContentComponent */

  /***/
  function srcAppComponentsBasketBasketContentBasketContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasketContentComponent", function () {
      return BasketContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_localStorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/localStorage.service */
    "./src/app/services/localStorage.service.ts");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _basket_item_basket_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../basket-item/basket-item.component */
    "./src/app/components/basket/basket-item/basket-item.component.ts");

    function BasketContentComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-basket-item", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("totalPrice", function BasketContentComponent_div_10_Template_app_basket_item_totalPrice_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.getAllTotalPrice($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var prod_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", prod_r1);
      }
    }

    var CART_KEY = 'local_cartList';

    var BasketContentComponent = /*#__PURE__*/function () {
      function BasketContentComponent(localStorageService, productService) {
        _classCallCheck(this, BasketContentComponent);

        this.localStorageService = localStorageService;
        this.productService = productService;
        this.allTotal = 0;
        this.productsFromLocalStorage = [];
      }

      _createClass(BasketContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.startingPrice();
        }
      }, {
        key: "getAllTotalPrice",
        value: function getAllTotalPrice(event) {
          if (event.plusOrNot === false) {
            this.allTotal -= event.value;
          } else {
            this.allTotal += event.value;
          }

          console.log(this.allTotal);
        }
      }, {
        key: "startingPrice",
        value: function startingPrice() {
          var _iterator5 = _createForOfIteratorHelper(this.productsFromLocalStorage),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var par = _step5.value;

              var _iterator6 = _createForOfIteratorHelper(this.localStorageService.getItemsFromLocalStorage(CART_KEY)),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var loc = _step6.value;
                  if (par.id === loc.id) this.allTotal += par.price * loc.qty;
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
      }]);

      return BasketContentComponent;
    }();

    BasketContentComponent.ɵfac = function BasketContentComponent_Factory(t) {
      return new (t || BasketContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_localStorage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]));
    };

    BasketContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BasketContentComponent,
      selectors: [["app-basket-content"]],
      inputs: {
        productsFromLocalStorage: "productsFromLocalStorage"
      },
      decls: 26,
      vars: 2,
      consts: [[1, "flex-container"], [2, "margin-bottom", "50px"], [1, "flex-header"], [1, "filler"], [1, "qty"], [1, "price"], [1, "total-price"], [4, "ngFor", "ngForOf"], [1, "checkout-container"], [1, "prom-code"], ["placeholder", "kuponk\xF3d", 1, "discount-code-input"], [1, "discount-code-btn"], [1, "basket-total"], [1, "checkout-action"], ["routerLink", "/", 1, "basket-continue-btn"], ["routerLink", "/checkout", 1, "basket-checkout-btn"], [3, "product", "totalPrice"]],
      template: function BasketContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Mennyis\xE9g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\xC1r");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Teljes \xC1r");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BasketContentComponent_div_10_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "bev\xE1lt\xE1s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "TELJES \xC1R :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "V\xE1s\xE1rl\xE1s folytat\xE1sa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Biztons\xE1gos fizet\xE9s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productsFromLocalStorage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.allTotal, " ft");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _basket_item_basket_item_component__WEBPACK_IMPORTED_MODULE_5__["BasketItemComponent"]],
      styles: [".flex-header[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: minmax(280px, 2fr) 2fr 1fr 1fr;\r\n    grid-template-areas: 'a b c d ';\r\n    margin-bottom: 5px;\r\n    margin-left: 50px;\r\n    margin-right: 50px;\r\n    height: 50px;\r\n}\r\n\r\n.flex-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-grow: 1;\r\n    min-width: 800px;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    background-color: #E5E5E5;\r\n\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]    > h4[_ngcontent-%COMP%] {\r\n    font-family: Palatino, \"Palatino LT STD\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif;\r\n    font-weight: bolder;\r\n    font-size: 1.5rem;\r\n    text-align: center;\r\n    align-self: flex-end;\r\n    color: #505358;\r\n    margin: 0px;\r\n}\r\n\r\n.checkout-container[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    height: 300px;\r\n}\r\n\r\n.checkout-action[_ngcontent-%COMP%] {\r\n    margin: 32px 0 0 0;\r\n    padding: 32px 0 0 0;\r\n    border-top: 4px solid #D7D7D7;\r\n    text-align: center;\r\n    display: flex;\r\n    justify-content: end;\r\n}\r\n\r\n.prom-code[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.prom-code[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n    font-family: Palatino, \"Palatino LT STD\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif;\r\n    margin-top: 30px;\r\n    height: 38px;\r\n    width: 150px;\r\n    border-radius: 20px;\r\n    border: 1px solid #CCCCCC;\r\n}\r\n\r\n.discount-code-btn[_ngcontent-%COMP%] {\r\n    width: 80px;\r\n    background: #C6D7CD;\r\n}\r\n\r\n.discount-code-input[_ngcontent-%COMP%] {\r\n    margin-right: 20px;\r\n    padding-left: 40px;\r\n    padding-right: 35px;\r\n}\r\n\r\n.basket-continue-btn[_ngcontent-%COMP%], .basket-checkout-btn[_ngcontent-%COMP%] {\r\n    background: #C6D7CD;\r\n    width: 200px;\r\n}\r\n\r\n.basket-continue-btn[_ngcontent-%COMP%]:hover, .basket-checkout-btn[_ngcontent-%COMP%]:hover {\r\n    background: #64B385;\r\n}\r\n\r\n.basket-continue-btn[_ngcontent-%COMP%] {\r\n    margin-right: auto;\r\n}\r\n\r\n.basket-total[_ngcontent-%COMP%] {\r\n    margin-top: 30px;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.basket-total[_ngcontent-%COMP%]    > h4[_ngcontent-%COMP%] {\r\n    margin-left: 30px;\r\n}\r\n\r\n.qty[_ngcontent-%COMP%] {\r\n    grid-area: b;\r\n}\r\n\r\n.price[_ngcontent-%COMP%] {\r\n    grid-area: c;\r\n}\r\n\r\n.total-price[_ngcontent-%COMP%] {\r\n    grid-area: d;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYXNrZXQvYmFza2V0LWNvbnRlbnQvYmFza2V0LWNvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixxREFBcUQ7SUFDckQsK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHlCQUF5Qjs7QUFFN0I7O0FBRUE7SUFDSSw2RkFBNkY7SUFDN0YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDZGQUE2RjtJQUM3RixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFza2V0L2Jhc2tldC1jb250ZW50L2Jhc2tldC1jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDI4MHB4LCAyZnIpIDJmciAxZnIgMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2EgYiBjIGQgJztcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uZmxleC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIG1pbi13aWR0aDogODAwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTVFNTtcclxuXHJcbn1cclxuXHJcbmRpdiA+IGg0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBQYWxhdGlubywgXCJQYWxhdGlubyBMVCBTVERcIiwgXCJQYWxhdGlubyBMaW5vdHlwZVwiLCBcIkJvb2sgQW50aXF1YVwiLCBHZW9yZ2lhLCBzZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgY29sb3I6ICM1MDUzNTg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLmNoZWNrb3V0LWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5jaGVja291dC1hY3Rpb24ge1xyXG4gICAgbWFyZ2luOiAzMnB4IDAgMCAwO1xyXG4gICAgcGFkZGluZzogMzJweCAwIDAgMDtcclxuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAjRDdEN0Q3O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG59XHJcblxyXG4ucHJvbS1jb2RlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4ucHJvbS1jb2RlID4gaW5wdXQsIGJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogUGFsYXRpbm8sIFwiUGFsYXRpbm8gTFQgU1REXCIsIFwiUGFsYXRpbm8gTGlub3R5cGVcIiwgXCJCb29rIEFudGlxdWFcIiwgR2VvcmdpYSwgc2VyaWY7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XHJcbn1cclxuXHJcbi5kaXNjb3VudC1jb2RlLWJ0biB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGJhY2tncm91bmQ6ICNDNkQ3Q0Q7XHJcbn1cclxuXHJcbi5kaXNjb3VudC1jb2RlLWlucHV0IHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbi5iYXNrZXQtY29udGludWUtYnRuLCAuYmFza2V0LWNoZWNrb3V0LWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQzZEN0NEO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uYmFza2V0LWNvbnRpbnVlLWJ0bjpob3ZlciwgLmJhc2tldC1jaGVja291dC1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzY0QjM4NTtcclxufVxyXG5cclxuLmJhc2tldC1jb250aW51ZS1idG4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYmFza2V0LXRvdGFsIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmJhc2tldC10b3RhbCA+IGg0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4ucXR5IHtcclxuICAgIGdyaWQtYXJlYTogYjtcclxufVxyXG5cclxuLnByaWNlIHtcclxuICAgIGdyaWQtYXJlYTogYztcclxufVxyXG5cclxuLnRvdGFsLXByaWNlIHtcclxuICAgIGdyaWQtYXJlYTogZDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasketContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-basket-content',
          templateUrl: './basket-content.component.html',
          styleUrls: ['./basket-content.component.css']
        }]
      }], function () {
        return [{
          type: _services_localStorage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]
        }, {
          type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
        }];
      }, {
        productsFromLocalStorage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/basket/basket-header/basket-header.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/basket/basket-header/basket-header.component.ts ***!
    \****************************************************************************/

  /*! exports provided: BasketHeaderComponent */

  /***/
  function srcAppComponentsBasketBasketHeaderBasketHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasketHeaderComponent", function () {
      return BasketHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BasketHeaderComponent = /*#__PURE__*/function () {
      function BasketHeaderComponent() {
        _classCallCheck(this, BasketHeaderComponent);
      }

      _createClass(BasketHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BasketHeaderComponent;
    }();

    BasketHeaderComponent.ɵfac = function BasketHeaderComponent_Factory(t) {
      return new (t || BasketHeaderComponent)();
    };

    BasketHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BasketHeaderComponent,
      selectors: [["app-basket-header"]],
      decls: 3,
      vars: 0,
      consts: [[1, "basket-header-title"]],
      template: function BasketHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Kos\xE1r");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".basket-header-title[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 140px;\r\n    grid-template-areas: ' b1 ';\r\n    background-color: white;\r\n}\r\nh2[_ngcontent-%COMP%]::before {\r\n    content: \"\";\r\n    border-top: .3rem solid #505358;\r\n    width: 10rem;\r\n    margin-right: 5rem;\r\n    margin-left: 5rem;\r\n\r\n}\r\nh2[_ngcontent-%COMP%] {\r\n    grid-area: b1;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-family: Palatino, \"Palatino LT STD\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif;\r\n    font-size: 3rem;\r\n    margin: 0px;\r\n    color: #505358;\r\n}\r\nh2[_ngcontent-%COMP%]::after {\r\n    content: \"\";\r\n    border-top: .3rem solid #505358;\r\n    width: 10rem;\r\n    margin-left: 5rem;\r\n    margin-right:5rem ;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYXNrZXQvYmFza2V0LWhlYWRlci9iYXNrZXQtaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCOztBQUVyQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDZGQUE2RjtJQUM3RixlQUFlO0lBQ2YsV0FBVztJQUNYLGNBQWM7QUFDbEI7QUFFQTtJQUNJLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jhc2tldC9iYXNrZXQtaGVhZGVyL2Jhc2tldC1oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXNrZXQtaGVhZGVyLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTQwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnIGIxICc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5oMjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBib3JkZXItdG9wOiAuM3JlbSBzb2xpZCAjNTA1MzU4O1xyXG4gICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVyZW07XHJcblxyXG59XHJcblxyXG5oMiB7XHJcbiAgICBncmlkLWFyZWE6IGIxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBQYWxhdGlubywgXCJQYWxhdGlubyBMVCBTVERcIiwgXCJQYWxhdGlubyBMaW5vdHlwZVwiLCBcIkJvb2sgQW50aXF1YVwiLCBHZW9yZ2lhLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgY29sb3I6ICM1MDUzNTg7XHJcbn1cclxuXHJcbmgyOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYm9yZGVyLXRvcDogLjNyZW0gc29saWQgIzUwNTM1ODtcclxuICAgIHdpZHRoOiAxMHJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OjVyZW0gO1xyXG59XHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasketHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-basket-header',
          templateUrl: './basket-header.component.html',
          styleUrls: ['./basket-header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/basket/basket-item/basket-item.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/components/basket/basket-item/basket-item.component.ts ***!
    \************************************************************************/

  /*! exports provided: BasketItemComponent */

  /***/
  function srcAppComponentsBasketBasketItemBasketItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasketItemComponent", function () {
      return BasketItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_localStorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/localStorage.service */
    "./src/app/services/localStorage.service.ts");
    /* harmony import */


    var _services_basket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/basket.service */
    "./src/app/services/basket.service.ts");
    /* harmony import */


    var _plus_minus_input_plus_minus_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./plus-minus-input/plus-minus-input.component */
    "./src/app/components/basket/basket-item/plus-minus-input/plus-minus-input.component.ts");

    var CART_KEY = 'local_cartList';

    var BasketItemComponent = /*#__PURE__*/function () {
      function BasketItemComponent(localStorageService, basketService) {
        _classCallCheck(this, BasketItemComponent);

        this.localStorageService = localStorageService;
        this.basketService = basketService;
        this.totalPrice = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.total = new ( /*#__PURE__*/function () {
          function _class8() {
            _classCallCheck(this, _class8);
          }

          return _class8;
        }())();
        this.localQty = 1;
      }

      _createClass(BasketItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.totalPriceCounter = this.product.price;

          if (this.localStorageService.getItemsFromLocalStorage(CART_KEY)) {
            var _iterator7 = _createForOfIteratorHelper(this.localStorageService.getItemsFromLocalStorage(CART_KEY)),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var prod = _step7.value;

                if (prod.id === this.product.id) {
                  this.localQty = prod.qty;
                  this.totalPriceCounter = this.product.price * this.localQty;
                }
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }
        }
      }, {
        key: "countChange",
        value: function countChange(event) {
          this.totalPriceCounter = event.value * this.product.price;
          this.countAllTotal(event);
        }
      }, {
        key: "countAllTotal",
        value: function countAllTotal(event) {
          this.total.value = this.product.price;
          this.total.plusOrNot = event.plusOrNot;
          this.totalPrice.emit(this.total);
        }
      }]);

      return BasketItemComponent;
    }();

    BasketItemComponent.ɵfac = function BasketItemComponent_Factory(t) {
      return new (t || BasketItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_localStorage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_basket_service__WEBPACK_IMPORTED_MODULE_2__["BasketService"]));
    };

    BasketItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BasketItemComponent,
      selectors: [["app-basket-item"]],
      inputs: {
        product: "product"
      },
      outputs: {
        totalPrice: "totalPrice"
      },
      decls: 16,
      vars: 10,
      consts: [[1, "basket-item-grid"], ["alt", "", 3, "src"], [1, "basket-details"], [1, "qty"], ["ariaLabelLess", "Less 10", "ariaLabelMore", "Plus 10", 3, "step", "min", "max", "initialValue", "prodId", "counter"], [1, "price"], [1, "total-price"], ["id", "remove-icon", "src", "assets/remove-icon-png-7124.png", "alt", ""]],
      template: function BasketItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Size: roll");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-plus-minus-input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("counter", function BasketItemComponent_Template_app_plus_minus_input_counter_10_listener($event) {
            return ctx.countChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.productDesc);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Term\xE9k K\xF3d: ", ctx.product.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("step", 1)("min", 1)("max", 100)("initialValue", ctx.localQty)("prodId", ctx.product.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.product.price, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.totalPriceCounter, " ");
        }
      },
      directives: [_plus_minus_input_plus_minus_input_component__WEBPACK_IMPORTED_MODULE_3__["PlusMinusInputComponent"]],
      styles: [".basket-item-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 1fr minmax(140px, 1fr) 2fr 1fr 1fr;\r\n  grid-template-areas: 'a b c d e';\r\n  background-color: white;\r\n  margin-bottom: 5px;\r\n  margin-left: 50px;\r\n  margin-right: 50px;\r\n}\r\n\r\n.basket-details[_ngcontent-%COMP%] {\r\n  grid-area: b;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n}\r\n\r\n#remove-icon[_ngcontent-%COMP%] {\r\n  width: 20px;\r\n  height: 20px;\r\n  padding-left: 5px;\r\n  padding-bottom: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.basket-details[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n  margin: 0px;\r\n  overflow: hidden;\r\n  white-space: initial;\r\n  font-family: Palatino, \"Palatino LT STD\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif;\r\n  font-weight: bolder;\r\n  font-size: 15px;\r\n}\r\n\r\n.price[_ngcontent-%COMP%], .total-price[_ngcontent-%COMP%] {\r\n  align-self: center;\r\n  text-align: center;\r\n\r\n}\r\n\r\n.basket-item-grid[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n  grid-area: a;\r\n  width: 100px;\r\n  height: 100px;\r\n  margin: 20px;\r\n}\r\n\r\n.qty[_ngcontent-%COMP%] {\r\n  grid-area: c;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.qty[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n  margin-bottom: 0px;\r\n  font-family: Palatino, \"Palatino LT STD\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif;\r\n  font-weight: bolder;\r\n  font-size: 18px;\r\n  color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYXNrZXQvYmFza2V0LWl0ZW0vYmFza2V0LWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix5REFBeUQ7RUFDekQsZ0NBQWdDO0VBQ2hDLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsNkZBQTZGO0VBQzdGLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiw2RkFBNkY7RUFDN0YsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jhc2tldC9iYXNrZXQtaXRlbS9iYXNrZXQtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhc2tldC1pdGVtLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWlubWF4KDE0MHB4LCAxZnIpIDJmciAxZnIgMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdhIGIgYyBkIGUnO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5iYXNrZXQtZGV0YWlscyB7XHJcbiAgZ3JpZC1hcmVhOiBiO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuI3JlbW92ZS1pY29uIHtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5iYXNrZXQtZGV0YWlscyA+IHAge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IGluaXRpYWw7XHJcbiAgZm9udC1mYW1pbHk6IFBhbGF0aW5vLCBcIlBhbGF0aW5vIExUIFNURFwiLCBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFwiQm9vayBBbnRpcXVhXCIsIEdlb3JnaWEsIHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4ucHJpY2UsIC50b3RhbC1wcmljZSB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5iYXNrZXQtaXRlbS1ncmlkID4gaW1nIHtcclxuICBncmlkLWFyZWE6IGE7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4ucXR5IHtcclxuICBncmlkLWFyZWE6IGM7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5xdHkgPiBhIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBmb250LWZhbWlseTogUGFsYXRpbm8sIFwiUGFsYXRpbm8gTFQgU1REXCIsIFwiUGFsYXRpbm8gTGlub3R5cGVcIiwgXCJCb29rIEFudGlxdWFcIiwgR2VvcmdpYSwgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasketItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-basket-item',
          templateUrl: './basket-item.component.html',
          styleUrls: ['./basket-item.component.css']
        }]
      }], function () {
        return [{
          type: _services_localStorage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]
        }, {
          type: _services_basket_service__WEBPACK_IMPORTED_MODULE_2__["BasketService"]
        }];
      }, {
        product: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        totalPrice: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/basket/basket-item/plus-minus-input/plus-minus-input.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/components/basket/basket-item/plus-minus-input/plus-minus-input.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: PlusMinusInputComponent */

  /***/
  function srcAppComponentsBasketBasketItemPlusMinusInputPlusMinusInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlusMinusInputComponent", function () {
      return PlusMinusInputComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_localStorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../services/localStorage.service */
    "./src/app/services/localStorage.service.ts");

    var CART_KEY = 'local_cartList';

    var PlusMinusInputComponent = /*#__PURE__*/function () {
      function PlusMinusInputComponent(localStorageService) {
        var _this2 = this;

        _classCallCheck(this, PlusMinusInputComponent);

        this.localStorageService = localStorageService;
        this.step = 0;
        this.min = 0;
        this.max = 0;
        this.counter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.total = new ( /*#__PURE__*/function () {
          function _class9() {
            _classCallCheck(this, _class9);
          }

          return _class9;
        }())();
        this.item = new ( /*#__PURE__*/function () {
          function _class10() {
            _classCallCheck(this, _class10);
          }

          return _class10;
        }())();
        this.value = 0;

        this.toggleMore = function () {
          if (_this2.step + _this2.value <= _this2.max) {
            _this2.value = _this2.value + _this2.step;
            _this2.renderedValue = _this2.value.toString();
            _this2.total.value = _this2.value;
            _this2.total.plusOrNot = true;

            _this2.counter.emit(_this2.total);

            _this2.localStorageService.updateItem(_this2.prodId, _this2.value, CART_KEY);
          }
        };

        this.toggleLess = function () {
          if (_this2.value - _this2.step >= _this2.min) {
            _this2.value = _this2.value - _this2.step;
            _this2.renderedValue = _this2.value.toString();
            _this2.total.value = _this2.value;
            _this2.total.plusOrNot = false;

            _this2.counter.emit(_this2.total);

            _this2.localStorageService.updateItem(_this2.prodId, _this2.value, CART_KEY);
          }
        };
      }

      _createClass(PlusMinusInputComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.value = this.initialValue;
          this.renderedValue = this.value.toString();
          this.setProdToLocal();

          if (this.localStorageService.getItemIdFromLocalStorage(CART_KEY)) {
            if (!this.localStorageService.getItemIdFromLocalStorage(CART_KEY).includes(this.prodId)) {
              this.localStorageService.storeOnLocalStorage(this.item, CART_KEY);
            }
          } else {
            this.localStorageService.storeOnLocalStorage(this.item, CART_KEY);
          }
        }
      }, {
        key: "setProdToLocal",
        value: function setProdToLocal() {
          this.item.quantity = this.value;
          this.item.prodId = this.prodId;
        }
      }]);

      return PlusMinusInputComponent;
    }();

    PlusMinusInputComponent.ɵfac = function PlusMinusInputComponent_Factory(t) {
      return new (t || PlusMinusInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_localStorage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]));
    };

    PlusMinusInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlusMinusInputComponent,
      selectors: [["app-plus-minus-input"]],
      inputs: {
        initialValue: "initialValue",
        step: "step",
        min: "min",
        max: "max",
        symbol: "symbol",
        ariaLabelLess: "ariaLabelLess",
        ariaLabelMore: "ariaLabelMore",
        prodId: "prodId"
      },
      outputs: {
        counter: "counter"
      },
      decls: 7,
      vars: 3,
      consts: [[1, "stepper-input", "stepper__input"], [1, "toggle-less", 3, "click"], ["src", "assets/minus.svg"], ["name", "range-value", "aria-atomic", "true", "aria-live", "polite", "aria-relevant", "all", 1, "stepper-input-field"], [1, "toggle-more", 3, "click"], ["src", "assets/plus.svg"]],
      template: function PlusMinusInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlusMinusInputComponent_Template_button_click_1_listener() {
            return ctx.toggleLess();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlusMinusInputComponent_Template_button_click_5_listener() {
            return ctx.toggleMore();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("alt", ctx.ariaLabelLess);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.renderedValue, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("alt", ctx.ariaLabelMore);
        }
      },
      styles: [".stepper__input[_ngcontent-%COMP%] {\r\n    width: 120px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.stepper__input[_ngcontent-%COMP%]   .stepper-input-field[_ngcontent-%COMP%] {\r\n    color: #505358;\r\n    font-family: Arial, sans-serif;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    padding: 0;\r\n    background: transparent;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    height: 25px;\r\n    line-height: 25px;\r\n    border: none;\r\n    text-align: center;\r\n    flex-grow: 1;\r\n}\r\n\r\n.stepper__input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: relative;\r\n    cursor: pointer;\r\n    background-color: #505358;\r\n    min-width: 25px;\r\n    height: 25px;\r\n    line-height: 25px;\r\n    color: #fff;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    border-radius: 15px;\r\n    border: none;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYXNrZXQvYmFza2V0LWl0ZW0vcGx1cy1taW51cy1pbnB1dC9wbHVzLW1pbnVzLWlucHV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBR1osYUFBYTtJQUdiLDhCQUE4QjtJQUc5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBR2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZOztBQUVoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFza2V0L2Jhc2tldC1pdGVtL3BsdXMtbWludXMtaW5wdXQvcGx1cy1taW51cy1pbnB1dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0ZXBwZXJfX2lucHV0IHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdGVwcGVyX19pbnB1dCAuc3RlcHBlci1pbnB1dC1maWVsZCB7XHJcbiAgICBjb2xvcjogIzUwNTM1ODtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uc3RlcHBlcl9faW5wdXQgYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA1MzU4O1xyXG4gICAgbWluLXdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlusMinusInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-plus-minus-input',
          templateUrl: './plus-minus-input.component.html',
          styleUrls: ['./plus-minus-input.component.css']
        }]
      }], function () {
        return [{
          type: _services_localStorage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]
        }];
      }, {
        initialValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        step: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        min: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        symbol: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        ariaLabelLess: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        ariaLabelMore: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        prodId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        counter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/basket/basket.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/basket/basket.component.ts ***!
    \*******************************************************/

  /*! exports provided: BasketComponent */

  /***/
  function srcAppComponentsBasketBasketComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasketComponent", function () {
      return BasketComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_payment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/payment.service */
    "./src/app/services/payment.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _basket_header_basket_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basket-header/basket-header.component */
    "./src/app/components/basket/basket-header/basket-header.component.ts");
    /* harmony import */


    var _basket_content_basket_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./basket-content/basket-content.component */
    "./src/app/components/basket/basket-content/basket-content.component.ts");
    /* harmony import */


    var _basket_bottom_basket_bottom_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./basket-bottom/basket-bottom.component */
    "./src/app/components/basket/basket-bottom/basket-bottom.component.ts");

    var BasketComponent = /*#__PURE__*/function () {
      function BasketComponent(paymentService, route) {
        _classCallCheck(this, BasketComponent);

        this.paymentService = paymentService;
        this.route = route;
        this.total = 0;
      }

      _createClass(BasketComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.productsFromLocalStorage = this.route.snapshot.data.basketItems;
        }
      }, {
        key: "payment",
        value: function payment() {
          var _this3 = this;

          this.paymentService.transaction().subscribe(function (data) {
            _this3.response = data;
          }, function () {}, function () {
            console.log(_this3.response);
          });
        }
      }]);

      return BasketComponent;
    }();

    BasketComponent.ɵfac = function BasketComponent_Factory(t) {
      return new (t || BasketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_payment_service__WEBPACK_IMPORTED_MODULE_1__["PaymentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    BasketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BasketComponent,
      selectors: [["app-basket"]],
      decls: 5,
      vars: 1,
      consts: [[1, "basket-container"], [1, "basket-wrapper"], [3, "productsFromLocalStorage"]],
      template: function BasketComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-basket-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-basket-content", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-basket-bottom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("productsFromLocalStorage", ctx.productsFromLocalStorage);
        }
      },
      directives: [_basket_header_basket_header_component__WEBPACK_IMPORTED_MODULE_3__["BasketHeaderComponent"], _basket_content_basket_content_component__WEBPACK_IMPORTED_MODULE_4__["BasketContentComponent"], _basket_bottom_basket_bottom_component__WEBPACK_IMPORTED_MODULE_5__["BasketBottomComponent"]],
      styles: [".basket-container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: minmax(auto, 1fr) minmax(800px, 3.5fr) minmax(auto, 1fr);\r\n    grid-template-areas: 'a b c';\r\n\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.basket-wrapper[_ngcontent-%COMP%] {\r\n    grid-column: 2/3;\r\n    background-color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYXNrZXQvYmFza2V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsK0VBQStFO0lBQy9FLDRCQUE0Qjs7SUFFNUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFza2V0L2Jhc2tldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhc2tldC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KGF1dG8sIDFmcikgbWlubWF4KDgwMHB4LCAzLjVmcikgbWlubWF4KGF1dG8sIDFmcik7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnYSBiIGMnO1xyXG5cclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5iYXNrZXQtd3JhcHBlciB7XHJcbiAgICBncmlkLWNvbHVtbjogMi8zO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasketComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-basket',
          templateUrl: './basket.component.html',
          styleUrls: ['./basket.component.css']
        }]
      }], function () {
        return [{
          type: _services_payment_service__WEBPACK_IMPORTED_MODULE_1__["PaymentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/basket/checkout/checkout.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/basket/checkout/checkout.component.ts ***!
    \******************************************************************/

  /*! exports provided: CheckoutComponent */

  /***/
  function srcAppComponentsBasketCheckoutCheckoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function () {
      return CheckoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_localStorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/localStorage.service */
    "./src/app/services/localStorage.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CheckoutComponent_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*k\xF6telez\u0151");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CheckoutComponent_span_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_span_9_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.continueToAddress();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " szerkeszt\xE9s");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CheckoutComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "El\u0151z\u0151leg m\xE1r regisztr\xE1lt\xE1l ? Jelentkezz be itt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "K\xE9rlek add meg a vezet\xE9kneved, keresztneved \xE9s az email c\xEDmed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Vezet\xE9kn\xE9v ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Keresztn\xE9v ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_div_10_Template_button_click_24_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.saveDetails();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Tov\xE1bb a c\xEDmhez ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.personalDetailsForm);
      }
    }

    function CheckoutComponent_span_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_span_14_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.editDeliveryAddress();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " szerkeszt\xE9s");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CheckoutComponent_form_15_option_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var prov_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", prov_r18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](prov_r18);
      }
    }

    function CheckoutComponent_form_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "C\xE9gn\xE9v (nem k\xF6telez\u0151)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Orsz\xE1g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Utca, H\xE1zsz\xE1m ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "label", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "V\xE1ros ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Megye ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "select", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CheckoutComponent_form_15_option_33_Template, 2, 2, "option", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Ir\xE1ny\xEDt\xF3sz\xE1m ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Telefonsz\xE1m ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.billingAddressForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.provinces);
      }
    }

    function CheckoutComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sz\xE1ll\xEDt\xE1si m\xE1sik c\xEDmre? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_div_16_Template_input_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.setDeliveryAddress();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CheckoutComponent_div_18_option_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var prov_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](prov_r22);
      }
    }

    function CheckoutComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "C\xE9gn\xE9v (nem k\xF6telez\u0151)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Orsz\xE1g ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Utca, H\xE1zsz\xE1m ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "label", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "V\xE1ros ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Megye ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CheckoutComponent_div_18_option_27_Template, 2, 1, "option", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Ir\xE1ny\xEDt\xF3sz\xE1m ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.provinces);
      }
    }

    function CheckoutComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Rendel\xE9s jegyzetek (nem k\xF6telez\u0151)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "textarea", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CheckoutComponent_button_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_button_20_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          ctx_r23.continueToPayment();
          return ctx_r23.saveBillingInfo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Tov\xE1bb a fizet\xE9shez ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CheckoutComponent_form_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "K\xE1rtyasz\xE1m ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Lej\xE1rati d\xE1tum ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "K\xE1rtya tulajdonos neve ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "CVV2 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r9.paymentForm);
      }
    }

    function CheckoutComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Size : roll");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var prod_r25 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", prod_r25.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](prod_r25.productDesc);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Term\xE9k K\xF3d : ", prod_r25.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Mennyis\xE9g : ", prod_r25.qty, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xC1r : ", prod_r25.price * prod_r25.qty, " ft");
      }
    }

    var CART_KEY = 'local_cartList';
    var DETAILS_KEY = 'local_detailsList';

    var CheckoutComponent = /*#__PURE__*/function () {
      function CheckoutComponent(route, localStorageService) {
        _classCallCheck(this, CheckoutComponent);

        this.route = route;
        this.localStorageService = localStorageService;
        this.details = new ( /*#__PURE__*/function () {
          function _class11() {
            _classCallCheck(this, _class11);
          }

          return _class11;
        }())();
        this.allTotal = 0;
        this.provinces = ['Bács-Kiskun', 'Baranya', 'Békés', 'Borsod-Abaúj-Zemplén', 'Csongrád', 'Fejér', 'Győr-Moson-Sopron', 'Hajdú-Bihar', 'Heves', 'Jász-Nagykun-Szolnok', 'Komárom-Esztergom', 'Nógrád', 'Pest', 'Somogy', 'Szabolcs-Szatmár-Bereg', 'Tolna', 'Vas', 'Veszprém', 'Zala'];
        this.personalDetailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]),
          firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        this.billingAddressForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          company: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]),
          country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
          address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
          address2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
          city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
          province: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
          zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
          phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        this.shippingAddressForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          shipCompany: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
          shipCountry: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
          shipAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
          shipAddress2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
          shipCity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
          shipProvince: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
          shipZip: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
          shipInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        this.paymentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          cardNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
          expiresDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
          nameOnCard: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
          cvv: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
      }

      _createClass(CheckoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.product = this.route.snapshot.data.basketItems;
          this.startingPrice();
        }
      }, {
        key: "startingPrice",
        value: function startingPrice() {
          var _iterator8 = _createForOfIteratorHelper(this.product),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var par = _step8.value;

              var _iterator9 = _createForOfIteratorHelper(this.localStorageService.getItemsFromLocalStorage(CART_KEY)),
                  _step9;

              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var loc = _step9.value;

                  if (par.id === loc.id) {
                    par.qty = loc.qty;
                    this.allTotal += par.price * loc.qty;
                  }
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        }
      }, {
        key: "continueToAddress",
        value: function continueToAddress() {
          this.isLoggedIn = !this.isLoggedIn;
        }
      }, {
        key: "saveDetails",
        value: function saveDetails() {
          if (this.localStorageService.getItemsFromLocalStorage(DETAILS_KEY).length != 0) {
            this.localStorageService.deleteItem(DETAILS_KEY);
            this.savePersonalInfo();
          }

          this.continueToAddress();
          this.details.lastname = this.personalDetailsForm.controls['lastname'].value;
          this.details.firstname = this.personalDetailsForm.controls['firstname'].value;
          this.details.email = this.personalDetailsForm.controls['email'].value;
          this.localStorageService.storeDetailsOnLocalStorage(this.details, DETAILS_KEY);
        }
      }, {
        key: "setDeliveryAddress",
        value: function setDeliveryAddress() {
          this.isDifferentAddress = true;
        }
      }, {
        key: "editDeliveryAddress",
        value: function editDeliveryAddress() {
          this.isFilledAddress = !this.isFilledAddress;
          this.isPayment = !this.isPayment;
          this.isDifferentAddress = false;
        }
      }, {
        key: "continueToPayment",
        value: function continueToPayment() {
          this.isFilledAddress = !this.isFilledAddress;
          this.isPayment = !this.isPayment;
        }
      }, {
        key: "savePersonalInfo",
        value: function savePersonalInfo() {
          var personalDetails = Object.assign({}, this.personalDetailsForm.value);
          this.personalDetails = new ( /*#__PURE__*/function () {
            function _class12() {
              _classCallCheck(this, _class12);

              this.email = personalDetails.email;
              this.firstname = personalDetails.firstname;
              this.lastname = personalDetails.lastname;
            }

            return _class12;
          }())();
          console.log(this.personalDetails);
        }
      }, {
        key: "saveBillingInfo",
        value: function saveBillingInfo() {
          console.log(this.isDifferentAddress);
          var billingInfo = Object.assign({}, this.billingAddressForm.value);
          this.billingDetails = new ( /*#__PURE__*/function () {
            function _class13() {
              _classCallCheck(this, _class13);

              this.address = billingInfo.address;
              this.address2 = billingInfo.address2;
              this.city = billingInfo.city;
              this.company = billingInfo.company;
              this.country = billingInfo.country;
              this.phone = billingInfo.phone;
              this.province = billingInfo.province;
              this.zip = billingInfo.zip;
            }

            return _class13;
          }())();
          console.log(this.billingDetails);

          if (this.isDifferentAddress) {
            this.saveShipping();
          } else {
            var shippingInfo = Object.assign({}, this.shippingAddressForm.value);
            this.shippingDetails = new ( /*#__PURE__*/function () {
              function _class14() {
                _classCallCheck(this, _class14);

                this.address = billingInfo.address;
                this.address2 = billingInfo.address2;
                this.city = billingInfo.city;
                this.company = billingInfo.company;
                this.country = billingInfo.country;
                this.shipInfo = shippingInfo.shipInfo;
                this.province = billingInfo.province;
                this.zip = billingInfo.zip;
              }

              return _class14;
            }())();
            console.log(this.shippingDetails);
          }
        }
      }, {
        key: "saveShipping",
        value: function saveShipping() {
          var shippingInfo = Object.assign({}, this.shippingAddressForm.value);
          this.shippingDetails = new ( /*#__PURE__*/function () {
            function _class15() {
              _classCallCheck(this, _class15);

              this.address = shippingInfo.shipAddress;
              this.address2 = shippingInfo.shipAddress2;
              this.city = shippingInfo.shipCity;
              this.company = shippingInfo.shipCompany;
              this.country = shippingInfo.shipCountry;
              this.shipInfo = shippingInfo.shipInfo;
              this.province = shippingInfo.shipProvince;
              this.zip = shippingInfo.shipZip;
            }

            return _class15;
          }())();
          console.log(this.shippingDetails);
        }
      }]);

      return CheckoutComponent;
    }();

    CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) {
      return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_localStorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]));
    };

    CheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CheckoutComponent,
      selectors: [["app-checkout"]],
      decls: 48,
      vars: 15,
      consts: [[1, "checkout-container"], [1, "check-content"], [1, "check-form"], [1, "check-basket-header"], ["id", "header-title"], [4, "ngIf"], ["class", "editLink", 3, "click", 4, "ngIf"], ["class", "check-basket-form", 4, "ngIf"], ["id", "header-delivery"], ["method", "post", 3, "formGroup", 4, "ngIf"], ["class", "underline", 4, "ngIf"], ["method", "post", 3, "formGroup"], ["class", "form-group", 4, "ngIf"], ["class", "basket-continue-btn", 3, "click", 4, "ngIf"], ["id", "header-payment"], ["method", "post", "class", "payment", 3, "formGroup", 4, "ngIf"], [1, "checkout-basket"], [1, "chk-bsk"], ["id", "header-title2"], [4, "ngFor", "ngForOf"], [1, "checkout-table"], [1, "td-right"], [1, "editLink", 3, "click"], [1, "check-basket-form"], ["href", ""], [1, "form-group"], ["for", "lastname"], ["id", "lastname", "formControlName", "lastname", "placeholder", "", 1, "form-control"], ["for", "firstname"], ["id", "firstname", "formControlName", "firstname", "placeholder", "", 1, "form-control"], ["for", "email"], ["id", "email", "formControlName", "email", "placeholder", "", 1, "form-control"], [1, "basket-continue-btn", 3, "click"], ["for", "company"], ["id", "company", "formControlName", "company", "placeholder", "", 1, "form-control"], ["for", "country"], ["id", "country", "formControlName", "country", 1, "form-control"], ["for", "address"], ["id", "address", "formControlName", "address", "placeholder", "Utcan\xE9v, h\xE1zsz\xE1m", 1, "form-control"], ["for", "address2"], ["id", "address2", "formControlName", "address2", "placeholder", "Emelet, l\xE9pcs\u0151h\xE1z, lak\xE1s, stb. (nem k\xF6telez\u0151)", 1, "form-control"], ["for", "city"], ["id", "city", "formControlName", "city", "placeholder", "", 1, "form-control"], ["for", "province"], ["id", "province", "formControlName", "province", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "zip"], ["id", "zip", "formControlName", "zip", "placeholder", "", 1, "form-control"], ["for", "phone"], ["id", "phone", "formControlName", "phone", "placeholder", "", 1, "form-control"], [3, "value"], [1, "underline"], [1, "container"], ["type", "checkbox", 3, "click"], [1, "checkmark"], ["for", "shipCompany"], ["id", "shipCompany", "formControlName", "shipCompany", "placeholder", "", 1, "form-control"], ["for", "shipCountry"], ["id", "shipCountry", "formControlName", "shipCountry", 1, "form-control"], ["for", "shipAddress"], ["id", "shipAddress", "formControlName", "shipAddress", "placeholder", "Utcan\xE9v, h\xE1zsz\xE1m", 1, "form-control"], ["for", "shipAddress2"], ["id", "shipAddress2", "formControlName", "shipAddress2", "placeholder", "Emelet, l\xE9pcs\u0151h\xE1z, lak\xE1s, stb. (nem k\xF6telez\u0151)", 1, "form-control"], ["for", "shipCity"], ["id", "shipCity", "formControlName", "shipCity", "placeholder", "", 1, "form-control"], ["for", "shipProvince"], ["id", "shipProvince", "formControlName", "shipProvince", 1, "form-control"], ["for", "shipZip"], ["id", "shipZip", "formControlName", "shipZip", "placeholder", "", 1, "form-control"], ["for", "info"], ["id", "info", "formControlName", "shipInfo", "placeholder", "Megjegyz\xE9sek a rendel\xE9ssel, sz\xE1ll\xEDt\xE1ssal kapcsolatban.", 1, "form-control"], ["method", "post", 1, "payment", 3, "formGroup"], ["id", "card-group"], ["src", "https://tapetakorzo.hu/wp-content/plugins/pay-via-barion-for-woocommerce/assets/barion-card-payment-mark-2017-300px.png", "alt", "", 1, "paymentOptions"], ["for", "cardNumber"], ["id", "cardNumber", "formControlName", "cardNumber", "placeholder", "", 1, "form-control"], ["for", "expires1"], ["id", "expires1", "formControlName", "expiresDate", "placeholder", "MM/YY", 1, "form-control"], ["for", "nameOnCard"], ["id", "nameOnCard", "formControlName", "nameOnCard", "placeholder", "", 1, "form-control"], ["for", "CVV2"], [1, "cvv-flex"], ["id", "CVV2", "formControlName", "cvv", "placeholder", "", 1, "form-control"], ["id", "cvv2-image", "src", "assets/cvv.png", "alt", ""], [1, "check-card"], ["alt", "", 3, "src"], [1, "check-basket-details"], [1, "checkout-action"]],
      template: function CheckoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Biztons\xE1gos Fizet\xE9s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "1) Adataid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CheckoutComponent_span_8_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CheckoutComponent_span_9_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CheckoutComponent_div_10_Template, 26, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "2) Sz\xE1ml\xE1z\xE1si adatok");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CheckoutComponent_span_14_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CheckoutComponent_form_15_Template, 46, 2, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CheckoutComponent_div_16_Template, 5, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CheckoutComponent_div_18_Template, 33, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CheckoutComponent_div_19_Template, 4, 0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CheckoutComponent_button_20_Template, 2, 0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "3) Fizet\xE9si opci\xF3k");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CheckoutComponent_form_24_Template, 27, 1, "form", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Rendel\xE9s \xD6sszesit\xE9s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CheckoutComponent_div_30_Template, 15, 5, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "table", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Term\xE9k \xE1rak:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Sz\xE1llit\xE1si dij:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Ad\xF3 (Sz\xE1llit\xE1ssal):");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFilledAddress);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn && !ctx.isFilledAddress);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn && !ctx.isFilledAddress);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.shippingAddressForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDifferentAddress && ctx.isLoggedIn && !ctx.isFilledAddress);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn && !ctx.isFilledAddress);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn && !ctx.isPayment);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPayment);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.product);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.allTotal, " Ft");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.allTotal, " Ft");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.allTotal, " Ft");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      styles: [".checkout-container[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: minmax(auto, 1fr) minmax(500px, 1.7fr) minmax(300px, 1fr) minmax(auto, 1fr);\r\n  grid-template-areas: 'a b c d ';\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.check-content[_ngcontent-%COMP%] {\r\n  grid-area: b;\r\n}\r\n\r\n.check-content[_ngcontent-%COMP%]    > h4[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n  font-family: Palatino, \"Palatino LT STD\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif;\r\n  font-weight: bolder;\r\n  font-size: 2rem;\r\n}\r\n\r\n.checkout-basket[_ngcontent-%COMP%] {\r\n  grid-area: c;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  grid-area: a;\r\n  width: 100px;\r\n  height: 100px;\r\n  margin: 20px 0px;\r\n}\r\n\r\n.chk-bsk[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n  width: 300px;\r\n  padding: 22px 18px 29px 17px;\r\n  border: 1px solid #b2b2b1;\r\n  box-sizing: border-box;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.check-basket-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  width: 100%;\r\n  padding: 0 20px;\r\n  margin-top: 30px;\r\n  box-sizing: border-box;\r\n  background-color: #f3f3f4;\r\n  color: #000;\r\n  height: 50px;\r\n  text-transform: uppercase;\r\n  align-items: center;\r\n  font-family: Palatino, \"Palatino LT STD\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif;\r\n  font-weight: bolder;\r\n}\r\n\r\n.check-basket-header[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n  font-size: .7rem;\r\n  margin-left: auto;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  margin-left: 10px;\r\n  font-family: Palatino, \"Palatino LT STD\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n}\r\n\r\n.underline[_ngcontent-%COMP%] {\r\n  margin: 32px 0 0 0;\r\n  padding: 32px 0 0 0;\r\n  border-top: 3px solid #f3f3f4;\r\n  width: 350px;\r\n}\r\n\r\n.address-dropdown[_ngcontent-%COMP%] {\r\n  border-radius: 25px;\r\n  border: 1px solid #C5C5C5;\r\n  padding: 20px;\r\n  width: 300px;\r\n  height: 15px;\r\n}\r\n\r\nselect[_ngcontent-%COMP%] {\r\n  max-height: 3em;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n  border-radius: 25px;\r\n  border: 1px solid #C5C5C5;\r\n  padding: 20px;\r\n  width: 350px;\r\n}\r\n\r\n.basket-continue-btn[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n  background: #C6D7CD;\r\n  width: 300px;\r\n  border-radius: 25px;\r\n  border: 1px solid #C6D7CD;\r\n  padding: 7px;\r\n  font-family: Palatino, \"Palatino LT STD\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif;\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n}\r\n\r\n#header-title[_ngcontent-%COMP%], #header-title2[_ngcontent-%COMP%], #header-delivery[_ngcontent-%COMP%], #header-payment[_ngcontent-%COMP%] {\r\n  font-size: 1.1rem;\r\n  margin: 0px;\r\n}\r\n\r\n.editLink[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  color: dodgerblue;\r\n}\r\n\r\n.check-basket-details[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  margin-left: 20px;\r\n}\r\n\r\n.checkout-table[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  font-family: Palatino, \"Palatino LT STD\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif;\r\n  font-weight: bolder;\r\n\r\n}\r\n\r\n.check-basket-details[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], .check-basket-recapitulative[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n  margin: 0px;\r\n  overflow: hidden;\r\n  white-space: initial;\r\n  font-family: Palatino, \"Palatino LT STD\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif;\r\n  font-weight: bolder;\r\n  font-size: 1rem;\r\n  color: #1c1c1b;\r\n}\r\n\r\n.check-card[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.checkout-action[_ngcontent-%COMP%] {\r\n  border-top: 3px solid #f3f3f4;\r\n}\r\n\r\n.td-right[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n}\r\n\r\n.check-form[_ngcontent-%COMP%] {\r\n  width: 400px;\r\n}\r\n\r\n.check-basket-form[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-top: 20px;\r\n  font-family: Palatino, \"Palatino LT STD\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif;\r\n  font-weight: bold;\r\n\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  display: block;\r\n  position: relative;\r\n  padding-left: 30px;\r\n  margin-top: 20px;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n  height: 0;\r\n  width: 0;\r\n}\r\n\r\n.checkmark[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 20px;\r\n  width: 20px;\r\n  background-color: #eee;\r\n  border-radius: 50%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .checkmark[_ngcontent-%COMP%] {\r\n  background-color: #ccc;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\r\n  background-color: #C6D7CD;\r\n}\r\n\r\n.checkmark[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\r\n  display: block;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\r\n  top: 7px;\r\n  left: 7px;\r\n  width: 6px;\r\n  height: 6px;\r\n  border-radius: 50%;\r\n  background: black;\r\n}\r\n\r\n.paymentOptions[_ngcontent-%COMP%] {\r\n  width: 350px;\r\n  height: auto;\r\n  margin: 0px;\r\n}\r\n\r\n.payment[_ngcontent-%COMP%] {\r\n  border: 1px solid #b2b2b1;\r\n  margin-top: 20px;\r\n}\r\n\r\n#card-group[_ngcontent-%COMP%] {\r\n  padding-left: 20px;\r\n}\r\n\r\n#CVV2[_ngcontent-%COMP%]{\r\n  margin: 0px;\r\n  width: 200px;\r\n}\r\n\r\n.cvv-flex[_ngcontent-%COMP%]{\r\n  display: flex;\r\n}\r\n\r\n#cvv2-image[_ngcontent-%COMP%]{\r\n  margin: 0 0 0 10px;\r\n\r\n  max-width: 100%;\r\n  height: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYXNrZXQvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixrR0FBa0c7RUFDbEcsK0JBQStCO0VBQy9CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiw2RkFBNkY7RUFDN0YsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQiw2RkFBNkY7RUFDN0YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsNkZBQTZGO0FBQy9GOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWiw2RkFBNkY7RUFDN0YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLDZGQUE2RjtFQUM3RixtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsNkZBQTZGO0VBQzdGLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsNkZBQTZGO0VBQzdGLGlCQUFpQjs7QUFFbkI7O0FBR0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZUFBZTtFQUNmLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxrQkFBa0I7O0VBRWxCLGVBQWU7RUFDZixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jhc2tldC9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZWNrb3V0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChhdXRvLCAxZnIpIG1pbm1heCg1MDBweCwgMS43ZnIpIG1pbm1heCgzMDBweCwgMWZyKSBtaW5tYXgoYXV0bywgMWZyKTtcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnYSBiIGMgZCAnO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5jaGVjay1jb250ZW50IHtcclxuICBncmlkLWFyZWE6IGI7XHJcbn1cclxuXHJcbi5jaGVjay1jb250ZW50ID4gaDQge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFBhbGF0aW5vLCBcIlBhbGF0aW5vIExUIFNURFwiLCBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFwiQm9vayBBbnRpcXVhXCIsIEdlb3JnaWEsIHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4uY2hlY2tvdXQtYmFza2V0IHtcclxuICBncmlkLWFyZWE6IGM7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgZ3JpZC1hcmVhOiBhO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIG1hcmdpbjogMjBweCAwcHg7XHJcbn1cclxuXHJcbi5jaGstYnNrIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBwYWRkaW5nOiAyMnB4IDE4cHggMjlweCAxN3B4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiMmIyYjE7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uY2hlY2stYmFza2V0LWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjQ7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogUGFsYXRpbm8sIFwiUGFsYXRpbm8gTFQgU1REXCIsIFwiUGFsYXRpbm8gTGlub3R5cGVcIiwgXCJCb29rIEFudGlxdWFcIiwgR2VvcmdpYSwgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuLmNoZWNrLWJhc2tldC1oZWFkZXIgPiBzcGFuIHtcclxuICBmb250LXNpemU6IC43cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFBhbGF0aW5vLCBcIlBhbGF0aW5vIExUIFNURFwiLCBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFwiQm9vayBBbnRpcXVhXCIsIEdlb3JnaWEsIHNlcmlmO1xyXG59XHJcblxyXG5sYWJlbCA+IHNwYW4ge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4udW5kZXJsaW5lIHtcclxuICBtYXJnaW46IDMycHggMCAwIDA7XHJcbiAgcGFkZGluZzogMzJweCAwIDAgMDtcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgI2YzZjNmNDtcclxuICB3aWR0aDogMzUwcHg7XHJcbn1cclxuXHJcbi5hZGRyZXNzLWRyb3Bkb3duIHtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNDNUM1QzU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gIG1heC1oZWlnaHQ6IDNlbTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjQzVDNUM1O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG59XHJcblxyXG4uYmFza2V0LWNvbnRpbnVlLWJ0biB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBiYWNrZ3JvdW5kOiAjQzZEN0NEO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNDNkQ3Q0Q7XHJcbiAgcGFkZGluZzogN3B4O1xyXG4gIGZvbnQtZmFtaWx5OiBQYWxhdGlubywgXCJQYWxhdGlubyBMVCBTVERcIiwgXCJQYWxhdGlubyBMaW5vdHlwZVwiLCBcIkJvb2sgQW50aXF1YVwiLCBHZW9yZ2lhLCBzZXJpZjtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuI2hlYWRlci10aXRsZSwgI2hlYWRlci10aXRsZTIsICNoZWFkZXItZGVsaXZlcnksICNoZWFkZXItcGF5bWVudCB7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5lZGl0TGluayB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiBkb2RnZXJibHVlO1xyXG59XHJcblxyXG4uY2hlY2stYmFza2V0LWRldGFpbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLmNoZWNrb3V0LXRhYmxlIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFBhbGF0aW5vLCBcIlBhbGF0aW5vIExUIFNURFwiLCBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFwiQm9vayBBbnRpcXVhXCIsIEdlb3JnaWEsIHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcblxyXG59XHJcblxyXG4uY2hlY2stYmFza2V0LWRldGFpbHMgPiBwLCAuY2hlY2stYmFza2V0LXJlY2FwaXR1bGF0aXZlID4gcCB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcclxuICBmb250LWZhbWlseTogUGFsYXRpbm8sIFwiUGFsYXRpbm8gTFQgU1REXCIsIFwiUGFsYXRpbm8gTGlub3R5cGVcIiwgXCJCb29rIEFudGlxdWFcIiwgR2VvcmdpYSwgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6ICMxYzFjMWI7XHJcbn1cclxuXHJcbi5jaGVjay1jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY2hlY2tvdXQtYWN0aW9uIHtcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgI2YzZjNmNDtcclxufVxyXG5cclxuLnRkLXJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmNoZWNrLWZvcm0ge1xyXG4gIHdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLmNoZWNrLWJhc2tldC1mb3JtID4gYSwgcCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBmb250LWZhbWlseTogUGFsYXRpbm8sIFwiUGFsYXRpbm8gTFQgU1REXCIsIFwiUGFsYXRpbm8gTGlub3R5cGVcIiwgXCJCb29rIEFudGlxdWFcIiwgR2VvcmdpYSwgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4uY29udGFpbmVyIGlucHV0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3BhY2l0eTogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG59XHJcblxyXG4uY2hlY2ttYXJrIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxufVxyXG5cclxuLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0M2RDdDRDtcclxufVxyXG5cclxuLmNoZWNrbWFyazphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XHJcbiAgdG9wOiA3cHg7XHJcbiAgbGVmdDogN3B4O1xyXG4gIHdpZHRoOiA2cHg7XHJcbiAgaGVpZ2h0OiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcblxyXG4ucGF5bWVudE9wdGlvbnMge1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5wYXltZW50IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYjJiMmIxO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuI2NhcmQtZ3JvdXAge1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG4jQ1ZWMntcclxuICBtYXJnaW46IDBweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuLmN2di1mbGV4e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuI2N2djItaW1hZ2V7XHJcbiAgbWFyZ2luOiAwIDAgMCAxMHB4O1xyXG5cclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-checkout',
          templateUrl: './checkout.component.html',
          styleUrls: ['./checkout.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _services_localStorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 74,
      vars: 0,
      consts: [[1, "footer-media"], [1, "footer-menu"], [1, "flex-container"], [1, "footer-info"], [1, "footer-contact"], [1, "contact-social-container"], ["aria-hidden", "true", 1, "fa", "fa-facebook-square", "fa-2x"], ["aria-hidden", "true", 1, "fa", "fa-instagram", "fa-2x"], ["aria-hidden", "true", 1, "fa", "fa-pinterest-square", "fa-2x"], [1, "footer-pay"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "media");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur eaque ex illo iusto, non provident quas quos reprehenderit. Dicta distinctio explicabo impedit laborum odit sit soluta tenetur voluptate voluptatem. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Commodi consequatur corporis eius nam quidem? Accusamus asperiores aspernatur consequatur dolore, enim esse et maxime minus neque nulla officiis quae quidem tenetur totam, veritatis! Aspernatur esse exercitationem inventore nulla voluptas! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "F\u0151 oldal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Dekor tap\xE9ta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Ifjus\xE1gi tap\xE9ta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Panel tap\xE9ta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "opcio op");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "opcio op");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "opcio op");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "opcio op");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "info info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "info info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "info info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "info info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "info info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "info info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "info info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "info info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "pay");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam aut deleniti deserunt ducimus eaque error fugiat in, minima optio porro, quas quis rem sint totam unde, vero vitae voluptate? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["footer[_ngcontent-%COMP%] {\r\n  background: #fde6de;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  font-family: Arial, fantasy;\r\n  color: #222;\r\n  text-decoration: none;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n@media all and (min-width: 1300px) {\r\n\r\n  footer[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: minmax(2em, 150px) minmax(300px, 425px) 1fr 1fr 1fr 1fr minmax(2em, 150px);\r\n    grid-template-rows: auto auto;\r\n    grid-column-gap: 4em;\r\n    padding: 3em 2em 2em;\r\n    grid-row-gap: 2em;\r\n  }\r\n\r\n  .footer-menu[_ngcontent-%COMP%], .footer-info[_ngcontent-%COMP%] {\r\n    justify-self: center;\r\n    width: 150px;\r\n  }\r\n\r\n  .footer-media[_ngcontent-%COMP%] {\r\n    grid-column: 2 / 3;\r\n    padding-left: 3%;\r\n  }\r\n\r\n  .footer-menu[_ngcontent-%COMP%] {\r\n    grid-column: 4 / 5;\r\n\r\n  }\r\n\r\n  .footer-info[_ngcontent-%COMP%] {\r\n    grid-column: 5 / 6;\r\n  }\r\n\r\n  .footer-contact[_ngcontent-%COMP%] {\r\n    grid-column: 6 / 7;\r\n    justify-self: center;\r\n    width: 275px;\r\n  }\r\n\r\n  .footer-pay[_ngcontent-%COMP%] {\r\n    grid-column: 1 / -1;\r\n    grid-row: 2 / 3;\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n@media all and (min-width: 675px) and (max-width: 1299px) {\r\n  footer[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-auto-flow: column;\r\n    grid-template-areas: \"men inf\" \"med cont\";\r\n    grid-column-gap: 2em;\r\n    grid-row-gap: 3em;\r\n    padding: 3em 2em 2em;\r\n\r\n  }\r\n\r\n\r\n  .footer-menu[_ngcontent-%COMP%], .footer-info[_ngcontent-%COMP%] {\r\n    justify-self: center;\r\n    width: 275px;\r\n  }\r\n\r\n  .footer-media[_ngcontent-%COMP%] {\r\n    grid-area: med;\r\n    width: 350px;\r\n    justify-self: center;\r\n  }\r\n\r\n\r\n  .footer-menu[_ngcontent-%COMP%] {\r\n    grid-area: men;\r\n\r\n  }\r\n\r\n  .footer-menu[_ngcontent-%COMP%] {\r\n    grid-area: men;\r\n  }\r\n\r\n  .footer-info[_ngcontent-%COMP%] {\r\n    grid-area: inf;\r\n  }\r\n\r\n  .footer-contact[_ngcontent-%COMP%] {\r\n    grid-area: cont;\r\n    justify-self: center;\r\n    width: 275px;\r\n  }\r\n\r\n  .footer-pay[_ngcontent-%COMP%] {\r\n    grid-column: 1 / -1;\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n@media all and (max-width: 674px) {\r\n  footer[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    padding: 2em 0.5em 2em;\r\n    grid-auto-flow: column;\r\n    grid-row-gap: 3em;\r\n\r\n    grid-template-areas:  \"men inf\" \"cont cont\" \"med med\" \"pay pay\";\r\n  }\r\n\r\n  .footer-media[_ngcontent-%COMP%] {\r\n    grid-area: med;\r\n    width: 95%;\r\n    justify-self: center;\r\n  }\r\n\r\n\r\n  .footer-menu[_ngcontent-%COMP%] {\r\n    grid-area: men;\r\n    width: 150px;\r\n    justify-self: center;\r\n  }\r\n\r\n  .footer-info[_ngcontent-%COMP%] {\r\n    grid-area: inf;\r\n    width: 100px;\r\n    justify-self: center;\r\n  }\r\n\r\n  .footer-contact[_ngcontent-%COMP%] {\r\n    grid-area: cont;\r\n    justify-self: center;\r\n    width: 200px;\r\n  }\r\n  .footer-pay[_ngcontent-%COMP%] {\r\n    justify-self: center;\r\n    width: 95%;\r\n    grid-area: pay;\r\n  }\r\n\r\n\r\n}\r\n\r\n.flex-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.contact-social-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  padding-top: 1.5em;\r\n}\r\n\r\n.contact-social-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  padding-right: 0.75em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBR0E7O0VBRUU7SUFDRSxhQUFhO0lBQ2IsaUdBQWlHO0lBQ2pHLDZCQUE2QjtJQUM3QixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCOztFQUVwQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5Q0FBeUM7SUFDekMsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixvQkFBb0I7O0VBRXRCOzs7RUFHQTtJQUNFLG9CQUFvQjtJQUNwQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsWUFBWTtJQUNaLG9CQUFvQjtFQUN0Qjs7O0VBR0E7SUFDRSxjQUFjOztFQUVoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjs7SUFFakIsK0RBQStEO0VBQ2pFOztFQUVBO0lBQ0UsY0FBYztJQUNkLFVBQVU7SUFDVixvQkFBb0I7RUFDdEI7OztFQUdBO0lBQ0UsY0FBYztJQUNkLFlBQVk7SUFDWixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsWUFBWTtJQUNaLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsWUFBWTtFQUNkO0VBQ0E7SUFDRSxvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLGNBQWM7RUFDaEI7OztBQUdGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZkZTZkZTtcclxufVxyXG5cclxuYSB7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBmYW50YXN5O1xyXG4gIGNvbG9yOiAjMjIyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDEzMDBweCkge1xyXG5cclxuICBmb290ZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDJlbSwgMTUwcHgpIG1pbm1heCgzMDBweCwgNDI1cHgpIDFmciAxZnIgMWZyIDFmciBtaW5tYXgoMmVtLCAxNTBweCk7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcclxuICAgIGdyaWQtY29sdW1uLWdhcDogNGVtO1xyXG4gICAgcGFkZGluZzogM2VtIDJlbSAyZW07XHJcbiAgICBncmlkLXJvdy1nYXA6IDJlbTtcclxuICB9XHJcblxyXG4gIC5mb290ZXItbWVudSwgLmZvb3Rlci1pbmZvIHtcclxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlci1tZWRpYSB7XHJcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlci1tZW51IHtcclxuICAgIGdyaWQtY29sdW1uOiA0IC8gNTtcclxuXHJcbiAgfVxyXG5cclxuICAuZm9vdGVyLWluZm8ge1xyXG4gICAgZ3JpZC1jb2x1bW46IDUgLyA2O1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlci1jb250YWN0IHtcclxuICAgIGdyaWQtY29sdW1uOiA2IC8gNztcclxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDI3NXB4O1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlci1wYXkge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcclxuICAgIGdyaWQtcm93OiAyIC8gMztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDY3NXB4KSBhbmQgKG1heC13aWR0aDogMTI5OXB4KSB7XHJcbiAgZm9vdGVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJtZW4gaW5mXCIgXCJtZWQgY29udFwiO1xyXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAyZW07XHJcbiAgICBncmlkLXJvdy1nYXA6IDNlbTtcclxuICAgIHBhZGRpbmc6IDNlbSAyZW0gMmVtO1xyXG5cclxuICB9XHJcblxyXG5cclxuICAuZm9vdGVyLW1lbnUsIC5mb290ZXItaW5mbyB7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyNzVweDtcclxuICB9XHJcblxyXG4gIC5mb290ZXItbWVkaWEge1xyXG4gICAgZ3JpZC1hcmVhOiBtZWQ7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICB9XHJcblxyXG5cclxuICAuZm9vdGVyLW1lbnUge1xyXG4gICAgZ3JpZC1hcmVhOiBtZW47XHJcblxyXG4gIH1cclxuXHJcbiAgLmZvb3Rlci1tZW51IHtcclxuICAgIGdyaWQtYXJlYTogbWVuO1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlci1pbmZvIHtcclxuICAgIGdyaWQtYXJlYTogaW5mO1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlci1jb250YWN0IHtcclxuICAgIGdyaWQtYXJlYTogY29udDtcclxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDI3NXB4O1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlci1wYXkge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA2NzRweCkge1xyXG4gIGZvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgcGFkZGluZzogMmVtIDAuNWVtIDJlbTtcclxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XHJcbiAgICBncmlkLXJvdy1nYXA6IDNlbTtcclxuXHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAgXCJtZW4gaW5mXCIgXCJjb250IGNvbnRcIiBcIm1lZCBtZWRcIiBcInBheSBwYXlcIjtcclxuICB9XHJcblxyXG4gIC5mb290ZXItbWVkaWEge1xyXG4gICAgZ3JpZC1hcmVhOiBtZWQ7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmZvb3Rlci1tZW51IHtcclxuICAgIGdyaWQtYXJlYTogbWVuO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyLWluZm8ge1xyXG4gICAgZ3JpZC1hcmVhOiBpbmY7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5mb290ZXItY29udGFjdCB7XHJcbiAgICBncmlkLWFyZWE6IGNvbnQ7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICB9XHJcbiAgLmZvb3Rlci1wYXkge1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgZ3JpZC1hcmVhOiBwYXk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uY29udGFjdC1zb2NpYWwtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctdG9wOiAxLjVlbTtcclxufVxyXG5cclxuLmNvbnRhY3Qtc29jaWFsLWNvbnRhaW5lciBpIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwLjc1ZW07XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/home/content-header/content-header.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/home/content-header/content-header.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ContentHeaderComponent */

  /***/
  function srcAppComponentsHomeContentHeaderContentHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentHeaderComponent", function () {
      return ContentHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContentHeaderComponent = /*#__PURE__*/function () {
      function ContentHeaderComponent() {
        _classCallCheck(this, ContentHeaderComponent);
      }

      _createClass(ContentHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContentHeaderComponent;
    }();

    ContentHeaderComponent.ɵfac = function ContentHeaderComponent_Factory(t) {
      return new (t || ContentHeaderComponent)();
    };

    ContentHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContentHeaderComponent,
      selectors: [["app-content-header"]],
      decls: 15,
      vars: 0,
      consts: [[1, "content-header"], [1, "icons"], [1, "dot"], ["aria-hidden", "true", 1, "fa", "fa-facebook-square", "fa-2x"], ["aria-hidden", "true", 1, "fa", "fa-twitter", "fa-2x"], [1, "logo"], ["src", "assets/logo5.png", "alt", ""], [1, "phone"], [1, "telIcon"], ["id", "imgTel", "src", "https://image.flaticon.com/icons/svg/901/901171.svg", "alt", ""], ["id", "imgMail", "src", "https://image.flaticon.com/icons/svg/1034/1034138.svg", "alt", ""]],
      template: function ContentHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "+3670 394 3337");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@media screen and (min-width: 1000px) {\r\n  .content-header[_ngcontent-%COMP%] {\r\n    background-color: #e8e8e8;\r\n    height: 210px;\r\n    display: grid;\r\n    grid-template-rows: 1fr 2fr;\r\n    grid-template-columns: minmax(360px, 0.4fr) 1fr minmax(350px, 0.4fr);\r\n    grid-template-areas: \"h1 h2 h3\" \"i1 i2 i3\";\r\n    padding-left: 32px;\r\n    padding-right: 32px;\r\n    margin-top: 0;\r\n    padding-top: 0;\r\n  }\r\n\r\n  .dot[_ngcontent-%COMP%] {\r\n    grid-area: i1;\r\n    height: 50px;\r\n    width: 50px;\r\n    background-color: white;\r\n    border-radius: 50%;\r\n    border: 1px solid #CCCCCC;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-left: 10px;\r\n    cursor: pointer;\r\n    transition: 700ms;\r\n    transition-timing-function: linear;\r\n  }\r\n\r\n  .icons[_ngcontent-%COMP%] {\r\n    grid-area: i1;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: start;\r\n\r\n  }\r\n\r\n  .phone[_ngcontent-%COMP%] {\r\n    grid-area: i3;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: start;\r\n  }\r\n\r\n  .telIcon[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n    width: 14rem;\r\n    background-color: white;\r\n    border-radius: 15px;\r\n    border: 1px solid #CCCCCC;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-left: 10px;\r\n    cursor: pointer;\r\n    transition: 700ms;\r\n    transition-timing-function: linear;\r\n  }\r\n\r\n  .telIcon[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n    margin: 0px;\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .dot[_ngcontent-%COMP%]:hover {\r\n    background-color: #C5C5C5;\r\n  }\r\n\r\n  .telIcon[_ngcontent-%COMP%]:hover {\r\n    background-color: #C5C5C5;\r\n  }\r\n\r\n  #imgMail[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n  }\r\n\r\n  #imgTel[_ngcontent-%COMP%] {\r\n    width: 2rem;\r\n    margin-right: 10px;\r\n  }\r\n\r\n  img[_ngcontent-%COMP%] {\r\n    width: 150px;\r\n    height: 150px;\r\n\r\n  }\r\n\r\n  .logo[_ngcontent-%COMP%] {\r\n    grid-area: i2;\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n}\r\n\r\n\r\n@media screen and (max-width: 999px) {\r\n  .content-header[_ngcontent-%COMP%] {\r\n    background-color: #E5E5E5;\r\n    height: 200px;\r\n    display: flex;\r\n    align-items: end;\r\n    justify-content: center;\r\n  }\r\n\r\n  .icons[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .phone[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .logo[_ngcontent-%COMP%] {\r\n  }\r\n\r\n  img[_ngcontent-%COMP%] {\r\n    width: 145px;\r\n    height: 145px;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2NvbnRlbnQtaGVhZGVyL2NvbnRlbnQtaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixvRUFBb0U7SUFDcEUsMENBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7O0VBRXhCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTs7RUFFZjs7RUFFQTtJQUNFLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0VBQ3pCO0FBQ0Y7OztBQUdBO0VBQ0U7SUFDRSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0VBQ0E7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztBQUVGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2NvbnRlbnQtaGVhZGVyL2NvbnRlbnQtaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICAuY29udGVudC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcclxuICAgIGhlaWdodDogMjEwcHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMzYwcHgsIDAuNGZyKSAxZnIgbWlubWF4KDM1MHB4LCAwLjRmcik7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImgxIGgyIGgzXCIgXCJpMSBpMiBpM1wiO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzJweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICB9XHJcblxyXG4gIC5kb3Qge1xyXG4gICAgZ3JpZC1hcmVhOiBpMTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogNzAwbXM7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gIH1cclxuXHJcbiAgLmljb25zIHtcclxuICAgIGdyaWQtYXJlYTogaTE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcblxyXG4gIH1cclxuXHJcbiAgLnBob25lIHtcclxuICAgIGdyaWQtYXJlYTogaTM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgfVxyXG5cclxuICAudGVsSWNvbiB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogMTRyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogNzAwbXM7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gIH1cclxuXHJcbiAgLnRlbEljb24gPiBwIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmRvdDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzVDNUM1O1xyXG4gIH1cclxuXHJcbiAgLnRlbEljb246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M1QzVDNTtcclxuICB9XHJcblxyXG4gICNpbWdNYWlsIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgI2ltZ1RlbCB7XHJcbiAgICB3aWR0aDogMnJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG5cclxuICB9XHJcblxyXG4gIC5sb2dvIHtcclxuICAgIGdyaWQtYXJlYTogaTI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTk5cHgpIHtcclxuICAuY29udGVudC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTVFNTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmljb25zIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAucGhvbmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5sb2dvIHtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTQ1cHg7XHJcbiAgICBoZWlnaHQ6IDE0NXB4O1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-content-header',
          templateUrl: './content-header.component.html',
          styleUrls: ['./content-header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/home/content/content.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/home/content/content.component.ts ***!
    \**************************************************************/

  /*! exports provided: ContentComponent */

  /***/
  function srcAppComponentsHomeContentContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentComponent", function () {
      return ContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContentComponent = /*#__PURE__*/function () {
      function ContentComponent() {
        _classCallCheck(this, ContentComponent);

        this.color = 'red';
      }

      _createClass(ContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          document.documentElement.style.setProperty('--darkenerUrl', 'url(' + this.darkener + ')');
          document.documentElement.style.setProperty('--translucentUrl', 'url(' + this.translucent + ')');
          document.documentElement.style.setProperty('--pillowUrl', 'url(' + this.pillow + ')');
        }
      }]);

      return ContentComponent;
    }();

    ContentComponent.ɵfac = function ContentComponent_Factory(t) {
      return new (t || ContentComponent)();
    };

    ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContentComponent,
      selectors: [["app-content"]],
      inputs: {
        darkener: "darkener",
        translucent: "translucent",
        pillow: "pillow"
      },
      decls: 32,
      vars: 0,
      consts: [[1, "content"], [1, "card-direction", "firstCard"], [1, "desc-backgr"], [1, "desc-text"], [1, "text"], ["type", "button", 1, "detailsButton"], [1, "card-direction", "secondCard"], [1, "mozaik-down", "grid-down"], [1, "mozaik-text-container"], [1, "mozaik-text"], [1, "card-direction", "thirdCard"], [1, "mozaik-up", "grid-up"]],
      template: function ContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "D\xEDszp\xE1rna ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Gy\xF6ny\xF6r\u0171 d\xEDszp\xE1rn\xE1ink harmonikuss\xE1 var\xE1zsolj\xE1k otthon\xE1t");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " V\xC1LASZT\xC9K");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " F\xE9ny\xE1tereszt\u0151 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "f\xFCgg\xF6ny ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " K\xFCl\xF6nleges f\xFCgg\xF6ny ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Dekor - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\xE9s ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " S\xF6t\xE9tit\u0151 f\xFCgg\xF6ny");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Exkluz\xEDv textilek, m\xE9retre vart dekorf\xFCgg\xF6ny\xF6k");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@media screen and (min-width: 800px) {\r\n  .content[_ngcontent-%COMP%] {\r\n    height: 50vw;\r\n    display: grid;\r\n    grid-template-rows: 1fr 1fr;\r\n    grid-template-columns: 1fr 2fr 1fr;\r\n    grid-template-areas: \"a2 a1 a3\" \"a4 a1 a5\";\r\n    cursor: pointer;\r\n  }\r\n\r\n  span[_ngcontent-%COMP%] {\r\n    font-family: Palatino, \"Palatino LT STD\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif;\r\n    font-size: 0.9vw;\r\n    color: white;\r\n  }\r\n\r\n  .firstCard[_ngcontent-%COMP%] {\r\n    grid-area: a1;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 0.3fr;\r\n    grid-template-rows: 0.5fr 1fr 0.5fr;\r\n    grid-template-areas: \"a b .\" \"d e .\" \"i j .\";\r\n    background: var(--pillowUrl) no-repeat center center;\r\n    background-size: cover;\r\n  }\r\n\r\n  .secondCard[_ngcontent-%COMP%] {\r\n    grid-area: a4;\r\n    background: var(--translucentUrl) no-repeat center center;\r\n    background-size: cover;\r\n  }\r\n\r\n  .thirdCard[_ngcontent-%COMP%] {\r\n    grid-area: a3;\r\n    background: var(--darkenerUrl) no-repeat center center;\r\n    background-size: cover;\r\n  }\r\n\r\n  .grig-down[_ngcontent-%COMP%] {\r\n    grid-area: a2;\r\n  }\r\n\r\n  .grid-up[_ngcontent-%COMP%] {\r\n    grid-area: a5;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-family: Palatino, \"Palatino LT STD\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif;\r\n    font-size: 1.9vw;\r\n    font-weight: 900;\r\n    color: whitesmoke;\r\n    padding-top: 10px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 799px) {\r\n  .content[_ngcontent-%COMP%] {\r\n    height: 100vw;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 2fr 1fr 1fr;\r\n    grid-template-areas: \"a a\" \"b1 c1\" \"b2 c2\";\r\n  }\r\n\r\n  .firstCard[_ngcontent-%COMP%] {\r\n    background: var(--pillowUrl) no-repeat center center;\r\n    background-size: cover;\r\n    grid-area: a;\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr 1fr;\r\n    grid-template-rows: 0.5fr 1fr 0.5fr;\r\n    grid-template-areas: \"a b c\" \"d e f\" \"i j k\";\r\n  }\r\n\r\n  .secondCard[_ngcontent-%COMP%] {\r\n    background: var(--translucentUrl) no-repeat center center;\r\n    grid-area: b2;\r\n    background-size: cover;\r\n  }\r\n\r\n  .thirdCard[_ngcontent-%COMP%] {\r\n    background: var(--darkenerUrl) no-repeat center center;\r\n    background-size: cover;\r\n    grid-area: c1;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  span[_ngcontent-%COMP%] {\r\n    font-family: Palatino, \"Palatino LT STD\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif;\r\n    font-size: 3vw;\r\n    color: white;\r\n  }\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixrQ0FBa0M7SUFDbEMsMENBQTBDO0lBQzFDLGVBQWU7RUFDakI7O0VBRUE7SUFDRSw2RkFBNkY7SUFDN0YsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyw0Q0FBNEM7SUFDNUMsb0RBQW9EO0lBQ3BELHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYix5REFBeUQ7SUFDekQsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNEQUFzRDtJQUN0RCxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSw2RkFBNkY7SUFDN0YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQiwwQ0FBMEM7RUFDNUM7O0VBRUE7SUFDRSxvREFBb0Q7SUFDcEQsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLG1DQUFtQztJQUNuQyw0Q0FBNEM7RUFDOUM7O0VBRUE7SUFDRSx5REFBeUQ7SUFDekQsYUFBYTtJQUNiLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLHNEQUFzRDtJQUN0RCxzQkFBc0I7SUFDdEIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsNkZBQTZGO0lBQzdGLGNBQWM7SUFDZCxZQUFZO0VBQ2Q7OztBQUdGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAuY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDUwdnc7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiYTIgYTEgYTNcIiBcImE0IGExIGE1XCI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtZmFtaWx5OiBQYWxhdGlubywgXCJQYWxhdGlubyBMVCBTVERcIiwgXCJQYWxhdGlubyBMaW5vdHlwZVwiLCBcIkJvb2sgQW50aXF1YVwiLCBHZW9yZ2lhLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMC45dnc7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuZmlyc3RDYXJkIHtcclxuICAgIGdyaWQtYXJlYTogYTE7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDAuM2ZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAxZnIgMC41ZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImEgYiAuXCIgXCJkIGUgLlwiIFwiaSBqIC5cIjtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXBpbGxvd1VybCkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLnNlY29uZENhcmQge1xyXG4gICAgZ3JpZC1hcmVhOiBhNDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zbHVjZW50VXJsKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG5cclxuICAudGhpcmRDYXJkIHtcclxuICAgIGdyaWQtYXJlYTogYTM7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrZW5lclVybCkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLmdyaWctZG93biB7XHJcbiAgICBncmlkLWFyZWE6IGEyO1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtdXAge1xyXG4gICAgZ3JpZC1hcmVhOiBhNTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1mYW1pbHk6IFBhbGF0aW5vLCBcIlBhbGF0aW5vIExUIFNURFwiLCBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFwiQm9vayBBbnRpcXVhXCIsIEdlb3JnaWEsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxLjl2dztcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzk5cHgpIHtcclxuICAuY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDEwMHZ3O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmciAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImEgYVwiIFwiYjEgYzFcIiBcImIyIGMyXCI7XHJcbiAgfVxyXG5cclxuICAuZmlyc3RDYXJkIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXBpbGxvd1VybCkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgZ3JpZC1hcmVhOiBhO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDFmciAwLjVmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiYSBiIGNcIiBcImQgZSBmXCIgXCJpIGoga1wiO1xyXG4gIH1cclxuXHJcbiAgLnNlY29uZENhcmQge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNsdWNlbnRVcmwpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgZ3JpZC1hcmVhOiBiMjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG5cclxuICAudGhpcmRDYXJkIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhcmtlbmVyVXJsKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBncmlkLWFyZWE6IGMxO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgc3BhbiB7XHJcbiAgICBmb250LWZhbWlseTogUGFsYXRpbm8sIFwiUGFsYXRpbm8gTFQgU1REXCIsIFwiUGFsYXRpbm8gTGlub3R5cGVcIiwgXCJCb29rIEFudGlxdWFcIiwgR2VvcmdpYSwgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDN2dztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-content',
          templateUrl: './content.component.html',
          styleUrls: ['./content.component.css']
        }]
      }], function () {
        return [];
      }, {
        darkener: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        translucent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pillow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/home/fourth-content/fourth-content.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/home/fourth-content/fourth-content.component.ts ***!
    \****************************************************************************/

  /*! exports provided: FourthContentComponent */

  /***/
  function srcAppComponentsHomeFourthContentFourthContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FourthContentComponent", function () {
      return FourthContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FourthContentComponent = /*#__PURE__*/function () {
      function FourthContentComponent() {
        _classCallCheck(this, FourthContentComponent);
      }

      _createClass(FourthContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FourthContentComponent;
    }();

    FourthContentComponent.ɵfac = function FourthContentComponent_Factory(t) {
      return new (t || FourthContentComponent)();
    };

    FourthContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FourthContentComponent,
      selectors: [["app-fourth-content"]],
      decls: 3,
      vars: 0,
      consts: [[1, "content"], [1, "card-direction", "firstCard"], [1, "card-direction", "secondCard"]],
      template: function FourthContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".content[_ngcontent-%COMP%] {\r\n    height: 32vw;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-areas: \"a1 a2 \";\r\n}\r\n\r\n.firstCard[_ngcontent-%COMP%] {\r\n    grid-area: a1;\r\n    background: url('Karnis f\u0151oldali fot\xF3.jpg') no-repeat center center;\r\n    background-size: cover;\r\n}\r\n\r\n.secondCard[_ngcontent-%COMP%] {\r\n    grid-area: a2;\r\n    background: url('Textil Kieg\xE9sz\xEDt\u0151k f\u0151oldal fot\xF3.jpg') no-repeat center;\r\n    background-size: cover;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-family: Palatino, \"Palatino LT STD\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif;\r\n    font-size: 1.9vw;\r\n    color: whitesmoke;\r\n    padding-top: 10px;\r\n}\r\n\r\n@media screen and (max-width: 999px) {\r\n    .content[_ngcontent-%COMP%] {\r\n        height: 50vh;\r\n        display: grid;\r\n        grid-template-rows: 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr;\r\n        grid-template-areas: \"a1 a1\" \"b1 b1 \";\r\n    }\r\n\r\n    .firstCard[_ngcontent-%COMP%] {\r\n        grid-area: a1;\r\n        background: url('Karnis f\u0151oldali fot\xF3.jpg') no-repeat center center;\r\n        background-size: cover;\r\n    }\r\n\r\n    .secondCard[_ngcontent-%COMP%] {\r\n        grid-area: b1;\r\n        background: url('Textil Kieg\xE9sz\xEDt\u0151k f\u0151oldal fot\xF3.jpg') no-repeat center;\r\n        background-size: cover;\r\n    }\r\np[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2ZvdXJ0aC1jb250ZW50L2ZvdXJ0aC1jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUVBQThFO0lBQzlFLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1RUFBa0Y7SUFDbEYsc0JBQXNCO0FBQzFCOztBQUNBO0lBQ0ksNkZBQTZGO0lBQzdGLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLDJCQUEyQjtRQUMzQiw4QkFBOEI7UUFDOUIscUNBQXFDO0lBQ3pDOztJQUVBO1FBQ0ksYUFBYTtRQUNiLG1FQUE4RTtRQUM5RSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsdUVBQWtGO1FBQ2xGLHNCQUFzQjtJQUMxQjtBQUNKO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9mb3VydGgtY29udGVudC9mb3VydGgtY29udGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAzMnZ3O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiYTEgYTIgXCI7XHJcbn1cclxuXHJcbi5maXJzdENhcmQge1xyXG4gICAgZ3JpZC1hcmVhOiBhMTtcclxuICAgIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvS2FybmlzIGbFkW9sZGFsaSBmb3TDsy5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uc2Vjb25kQ2FyZCB7XHJcbiAgICBncmlkLWFyZWE6IGEyO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9UZXh0aWwgS2llZ8Opc3rDrXTFkWsgZsWRb2xkYWwgZm90w7MuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbnAge1xyXG4gICAgZm9udC1mYW1pbHk6IFBhbGF0aW5vLCBcIlBhbGF0aW5vIExUIFNURFwiLCBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFwiQm9vayBBbnRpcXVhXCIsIEdlb3JnaWEsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxLjl2dztcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5OXB4KSB7XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImExIGExXCIgXCJiMSBiMSBcIjtcclxuICAgIH1cclxuXHJcbiAgICAuZmlyc3RDYXJkIHtcclxuICAgICAgICBncmlkLWFyZWE6IGExO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvS2FybmlzIGbFkW9sZGFsaSBmb3TDsy5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxuXHJcbiAgICAuc2Vjb25kQ2FyZCB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBiMTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL1RleHRpbCBLaWVnw6lzesOtdMWRayBmxZFvbGRhbCBmb3TDsy5qcGdcIikgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgfVxyXG5we1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FourthContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-fourth-content',
          templateUrl: './fourth-content.component.html',
          styleUrls: ['./fourth-content.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _services_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/home.service */
    "./src/app/services/home.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _content_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./content/content.component */
    "./src/app/components/home/content/content.component.ts");
    /* harmony import */


    var _sales_sales_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sales/sales.component */
    "./src/app/components/home/sales/sales.component.ts");
    /* harmony import */


    var _third_content_third_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./third-content/third-content.component */
    "./src/app/components/home/third-content/third-content.component.ts");
    /* harmony import */


    var _news_news_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./news/news.component */
    "./src/app/components/home/news/news.component.ts");
    /* harmony import */


    var _second_content_second_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./second-content/second-content.component */
    "./src/app/components/home/second-content/second-content.component.ts");
    /* harmony import */


    var _newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./newsletter/newsletter.component */
    "./src/app/components/home/newsletter/newsletter.component.ts");
    /* harmony import */


    var _fourth_content_fourth_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./fourth-content/fourth-content.component */
    "./src/app/components/home/fourth-content/fourth-content.component.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(productService, home, route) {
        _classCallCheck(this, HomeComponent);

        this.productService = productService;
        this.home = home;
        this.route = route;
        this.images = [];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.images = this.route.snapshot.data.images;
          console.log(this.images);

          var _iterator10 = _createForOfIteratorHelper(this.images),
              _step10;

          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var im = _step10.value;

              if (im.type == 'Darkener') {
                this.darkenerImg = im.imgUrl;
              }

              if (im.type == 'Blackout') {
                this.blackoutImg = im.imgUrl;
              }

              if (im.type == 'Wallpaper') {
                this.wallpaperImg = im.imgUrl;
              }

              if (im.type == 'Translucent') {
                this.translucentImg = im.imgUrl;
              }

              if (im.type == 'Pillow') {
                this.pillowImg = im.imgUrl;
                console.log(this.pillowImg);
              }

              if (im.type == 'Children') {
                this.childrenImg = im.imgUrl;
                console.log(this.childrenImg);
              }

              if (im.type == 'Decoration') {
                this.decorationImg = im.imgUrl;
              }

              if (im.type == 'FurnitureFabric') {
                this.furnitureFabricImg = im.imgUrl;
              }
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 8,
      vars: 8,
      consts: [[1, "content-margin"], [3, "darkener", "pillow", "translucent"], [3, "wallpaper", "decoration"], [3, "blackout", "children", "furniture"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-third-content", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-news");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-second-content", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-newsletter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-fourth-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("darkener", ctx.darkenerImg)("pillow", ctx.pillowImg)("translucent", ctx.translucentImg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("wallpaper", ctx.wallpaperImg)("decoration", ctx.decorationImg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blackout", ctx.blackoutImg)("children", ctx.childrenImg)("furniture", ctx.furnitureFabricImg);
        }
      },
      directives: [_content_content_component__WEBPACK_IMPORTED_MODULE_4__["ContentComponent"], _sales_sales_component__WEBPACK_IMPORTED_MODULE_5__["SalesComponent"], _third_content_third_content_component__WEBPACK_IMPORTED_MODULE_6__["ThirdContentComponent"], _news_news_component__WEBPACK_IMPORTED_MODULE_7__["NewsComponent"], _second_content_second_content_component__WEBPACK_IMPORTED_MODULE_8__["SecondContentComponent"], _newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_9__["NewsletterComponent"], _fourth_content_fourth_content_component__WEBPACK_IMPORTED_MODULE_10__["FourthContentComponent"]],
      styles: ["p[_ngcontent-%COMP%] {\r\n    font-family: Palatino, \"Palatino LT STD\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif;\r\n    font-size: 1.9vw;\r\n    font-weight: 900;\r\n    color: whitesmoke;\r\n    padding-top: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZGQUE2RjtJQUM3RixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICBmb250LWZhbWlseTogUGFsYXRpbm8sIFwiUGFsYXRpbm8gTFQgU1REXCIsIFwiUGFsYXRpbm8gTGlub3R5cGVcIiwgXCJCb29rIEFudGlxdWFcIiwgR2VvcmdpYSwgc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEuOXZ3O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
        }, {
          type: _services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/home/news/news.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/home/news/news.component.ts ***!
    \********************************************************/

  /*! exports provided: NewsComponent */

  /***/
  function srcAppComponentsHomeNewsNewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsComponent", function () {
      return NewsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NewsComponent = /*#__PURE__*/function () {
      function NewsComponent() {
        _classCallCheck(this, NewsComponent);
      }

      _createClass(NewsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NewsComponent;
    }();

    NewsComponent.ɵfac = function NewsComponent_Factory(t) {
      return new (t || NewsComponent)();
    };

    NewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewsComponent,
      selectors: [["app-news"]],
      decls: 26,
      vars: 0,
      consts: [[1, "sales-container"], [1, "sales-text"], [1, "cards-pos"], [1, "sales-cards"], [1, "img-container"], ["src", "assets/JOURNEY BEYOND CAM 12.jpg", "alt", "Card image cap", 1, "card-img-top", "first"], [1, "overlay"], [1, "img-text"], ["src", "assets/ABSTRACT CAM 4.jpg", "alt", "Card image cap", 1, "card-img-top"], ["src", "assets/ABSTRACT CAM 5.jpg", "alt", "Card image cap", 1, "card-img-top"], ["src", "assets/REFLECTIONS CAM 4.jpg", "alt", "Card image cap", 1, "card-img-top"]],
      template: function NewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xDAJDONS\xC1GOK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " tap\xE9t\xE1k ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " f\xFCgg\xF6ny\xF6k ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " textilek ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " kieg\xE9sz\xEDt\u0151k ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@media screen and (min-width: 700px) {\r\n    .sales-container[_ngcontent-%COMP%] {\r\n        background-color: #E5E5E5;\r\n        display: grid;\r\n        grid-template-columns: 3fr 8fr;\r\n        grid-template-areas: \"a b \";\r\n        height: 17vw;\r\n    }\r\n\r\n    .sales-text[_ngcontent-%COMP%] {\r\n        grid-area: a;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        text-align: center;\r\n    }\r\n\r\n    H4[_ngcontent-%COMP%] {\r\n        font-family: Palatino, \"Palatino LT STD\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif;\r\n        font-weight: bolder;\r\n        color: #555555;\r\n        font-size: 2vw;\r\n    }\r\n\r\n    .sales-cards[_ngcontent-%COMP%] {\r\n        grid-area: cards;\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr 1fr 1fr;\r\n        grid-template-areas: \"img1 img2 img3 img4\";\r\n        grid-gap: 2vw;\r\n        margin: 20px 0px;\r\n\r\n    }\r\n\r\n    .cards-pos[_ngcontent-%COMP%] {\r\n        grid-area: b;\r\n        display: grid;\r\n        grid-template-columns: 1fr 5fr 1fr;\r\n        grid-template-areas: \". cards .\";\r\n    }\r\n\r\n    img[_ngcontent-%COMP%] {\r\n        display: block;\r\n        width: 16vw;\r\n        height: 14vw;\r\n        cursor: pointer;\r\n        border-radius: 8px;\r\n        box-shadow: 0 4px 8px 0 rgba(1, 1, 1, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.79);\r\n    }\r\n\r\n    .overlay[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        top: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n        height: 14vw;\r\n        width: 16vw;\r\n        opacity: 0;\r\n        transition: .5s ease;\r\n        background-color: black;\r\n        border-radius: 8px;\r\n    }\r\n\r\n    .img-container[_ngcontent-%COMP%] {\r\n        position: relative;\r\n    }\r\n\r\n    .img-container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\r\n        opacity: 50%;\r\n    }\r\n\r\n    .img-text[_ngcontent-%COMP%] {\r\n        color: white;\r\n        font-family: Palatino, \"Palatino LT STD\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif;\r\n        font-size: 2vw;\r\n        font-weight: bolder;\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n        -ms-transform: translate(-50%, -50%);\r\n    }\r\n}\r\n@media screen and (max-width: 699px) {\r\n    .sales-container[_ngcontent-%COMP%] {\r\n        background-color: #E5E5E5;\r\n        display: grid;\r\n        grid-template-rows: 0.5fr 2fr;\r\n        grid-template-columns: 1fr;\r\n        grid-template-areas: \"title\" \"images\";\r\n\r\n    }\r\n\r\n    br[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n\r\n    .sales-text[_ngcontent-%COMP%] {\r\n        grid-area: title;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        text-align: center;\r\n    }\r\n\r\n    .cards-pos[_ngcontent-%COMP%] {\r\n        grid-area: images;\r\n        display: grid;\r\n        grid-template-columns: 0.5fr 1fr 0.5fr;\r\n        grid-template-areas: \". cards .\";\r\n    }\r\n\r\n    .sales-cards[_ngcontent-%COMP%] {\r\n        grid-area: cards;\r\n        display: grid;\r\n        grid-template-rows: 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr;\r\n        grid-template-areas: \"image1 image2\" \"image3 image4\";\r\n        grid-gap: 4vw;\r\n        margin: 20px 0px;\r\n\r\n    }\r\n\r\n    img[_ngcontent-%COMP%] {\r\n        display: block;\r\n        width: 30vw;\r\n        height: 28vw;\r\n        cursor: pointer;\r\n        border-radius: 8px;\r\n        box-shadow: 0 4px 8px 0 rgba(1, 1, 1, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.79);\r\n    }\r\n\r\n    .overlay[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        top: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n        height: 28vw;\r\n        width: 30vw;\r\n        opacity: 0;\r\n        transition: .5s ease;\r\n        background-color: black;\r\n        border-radius: 8px;\r\n    }\r\n\r\n    .img-container[_ngcontent-%COMP%] {\r\n        position: relative;\r\n    }\r\n\r\n    .img-container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\r\n        opacity: 50%;\r\n    }\r\n\r\n    .img-text[_ngcontent-%COMP%] {\r\n        color: white;\r\n        font-family: Palatino, \"Palatino LT STD\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif;\r\n        font-size: 5vw;\r\n        font-weight: bolder;\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n        -ms-transform: translate(-50%, -50%);\r\n    }\r\n\r\n    H2[_ngcontent-%COMP%] {\r\n        font-family: Palatino, \"Palatino LT STD\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif;\r\n        font-weight: 900;\r\n        color: #555555;\r\n        font-size: 6vw;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL25ld3MvbmV3cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSx5QkFBeUI7UUFDekIsYUFBYTtRQUNiLDhCQUE4QjtRQUM5QiwyQkFBMkI7UUFDM0IsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSw2RkFBNkY7UUFDN0YsbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixzQ0FBc0M7UUFDdEMsMENBQTBDO1FBQzFDLGFBQWE7UUFDYixnQkFBZ0I7O0lBRXBCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixrQ0FBa0M7UUFDbEMsZ0NBQWdDO0lBQ3BDOztJQUVBO1FBQ0ksY0FBYztRQUNkLFdBQVc7UUFDWCxZQUFZO1FBQ1osZUFBZTtRQUNmLGtCQUFrQjtRQUNsQiw0RUFBNEU7SUFDaEY7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLFNBQVM7UUFDVCxPQUFPO1FBQ1AsUUFBUTtRQUNSLFlBQVk7UUFDWixXQUFXO1FBQ1gsVUFBVTtRQUNWLG9CQUFvQjtRQUNwQix1QkFBdUI7UUFDdkIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFlBQVk7UUFDWiw2RkFBNkY7UUFDN0YsY0FBYztRQUNkLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFNBQVM7UUFDVCxnQ0FBZ0M7UUFDaEMsb0NBQW9DO0lBQ3hDO0FBQ0o7QUFDQTtJQUNJO1FBQ0kseUJBQXlCO1FBQ3pCLGFBQWE7UUFDYiw2QkFBNkI7UUFDN0IsMEJBQTBCO1FBQzFCLHFDQUFxQzs7SUFFekM7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2Isc0NBQXNDO1FBQ3RDLGdDQUFnQztJQUNwQzs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsMkJBQTJCO1FBQzNCLDhCQUE4QjtRQUM5QixvREFBb0Q7UUFDcEQsYUFBYTtRQUNiLGdCQUFnQjs7SUFFcEI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsV0FBVztRQUNYLFlBQVk7UUFDWixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLDRFQUE0RTtJQUNoRjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixNQUFNO1FBQ04sU0FBUztRQUNULE9BQU87UUFDUCxRQUFRO1FBQ1IsWUFBWTtRQUNaLFdBQVc7UUFDWCxVQUFVO1FBQ1Ysb0JBQW9CO1FBQ3BCLHVCQUF1QjtRQUN2QixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLDZGQUE2RjtRQUM3RixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsU0FBUztRQUNULGdDQUFnQztRQUNoQyxvQ0FBb0M7SUFDeEM7O0lBRUE7UUFDSSw2RkFBNkY7UUFDN0YsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxjQUFjO0lBQ2xCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xyXG4gICAgLnNhbGVzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTVFNTtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDhmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImEgYiBcIjtcclxuICAgICAgICBoZWlnaHQ6IDE3dnc7XHJcbiAgICB9XHJcblxyXG4gICAgLnNhbGVzLXRleHQge1xyXG4gICAgICAgIGdyaWQtYXJlYTogYTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIEg0IHtcclxuICAgICAgICBmb250LWZhbWlseTogUGFsYXRpbm8sIFwiUGFsYXRpbm8gTFQgU1REXCIsIFwiUGFsYXRpbm8gTGlub3R5cGVcIiwgXCJCb29rIEFudGlxdWFcIiwgR2VvcmdpYSwgc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICBjb2xvcjogIzU1NTU1NTtcclxuICAgICAgICBmb250LXNpemU6IDJ2dztcclxuICAgIH1cclxuXHJcbiAgICAuc2FsZXMtY2FyZHMge1xyXG4gICAgICAgIGdyaWQtYXJlYTogY2FyZHM7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImltZzEgaW1nMiBpbWczIGltZzRcIjtcclxuICAgICAgICBncmlkLWdhcDogMnZ3O1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAwcHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkcy1wb3Mge1xyXG4gICAgICAgIGdyaWQtYXJlYTogYjtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAxZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCIuIGNhcmRzIC5cIjtcclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxNnZ3O1xyXG4gICAgICAgIGhlaWdodDogMTR2dztcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMSwgMSwgMSwgMC42KSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC43OSk7XHJcbiAgICB9XHJcblxyXG4gICAgLm92ZXJsYXkge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxNHZ3O1xyXG4gICAgICAgIHdpZHRoOiAxNnZ3O1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWctY29udGFpbmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmltZy1jb250YWluZXI6aG92ZXIgLm92ZXJsYXkge1xyXG4gICAgICAgIG9wYWNpdHk6IDUwJTtcclxuICAgIH1cclxuXHJcbiAgICAuaW1nLXRleHQge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LWZhbWlseTogUGFsYXRpbm8sIFwiUGFsYXRpbm8gTFQgU1REXCIsIFwiUGFsYXRpbm8gTGlub3R5cGVcIiwgXCJCb29rIEFudGlxdWFcIiwgR2VvcmdpYSwgc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAydnc7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2OTlweCkge1xyXG4gICAgLnNhbGVzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTVFNTtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMmZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwidGl0bGVcIiBcImltYWdlc1wiO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBiciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuc2FsZXMtdGV4dCB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiB0aXRsZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkcy1wb3Mge1xyXG4gICAgICAgIGdyaWQtYXJlYTogaW1hZ2VzO1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciAxZnIgMC41ZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCIuIGNhcmRzIC5cIjtcclxuICAgIH1cclxuXHJcbiAgICAuc2FsZXMtY2FyZHMge1xyXG4gICAgICAgIGdyaWQtYXJlYTogY2FyZHM7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaW1hZ2UxIGltYWdlMlwiIFwiaW1hZ2UzIGltYWdlNFwiO1xyXG4gICAgICAgIGdyaWQtZ2FwOiA0dnc7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMzB2dztcclxuICAgICAgICBoZWlnaHQ6IDI4dnc7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDEsIDEsIDEsIDAuNiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuNzkpO1xyXG4gICAgfVxyXG5cclxuICAgIC5vdmVybGF5IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGhlaWdodDogMjh2dztcclxuICAgICAgICB3aWR0aDogMzB2dztcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIH1cclxuXHJcbiAgICAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWctY29udGFpbmVyOmhvdmVyIC5vdmVybGF5IHtcclxuICAgICAgICBvcGFjaXR5OiA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmltZy10ZXh0IHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFBhbGF0aW5vLCBcIlBhbGF0aW5vIExUIFNURFwiLCBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFwiQm9vayBBbnRpcXVhXCIsIEdlb3JnaWEsIHNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNXZ3O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB9XHJcblxyXG4gICAgSDIge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQYWxhdGlubywgXCJQYWxhdGlubyBMVCBTVERcIiwgXCJQYWxhdGlubyBMaW5vdHlwZVwiLCBcIkJvb2sgQW50aXF1YVwiLCBHZW9yZ2lhLCBzZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgIGNvbG9yOiAjNTU1NTU1O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNnZ3O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-news',
          templateUrl: './news.component.html',
          styleUrls: ['./news.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/home/newsletter/newsletter.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/home/newsletter/newsletter.component.ts ***!
    \********************************************************************/

  /*! exports provided: NewsletterComponent */

  /***/
  function srcAppComponentsHomeNewsletterNewsletterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsletterComponent", function () {
      return NewsletterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NewsletterComponent = /*#__PURE__*/function () {
      function NewsletterComponent() {
        _classCallCheck(this, NewsletterComponent);
      }

      _createClass(NewsletterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NewsletterComponent;
    }();

    NewsletterComponent.ɵfac = function NewsletterComponent_Factory(t) {
      return new (t || NewsletterComponent)();
    };

    NewsletterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewsletterComponent,
      selectors: [["app-newsletter"]],
      decls: 15,
      vars: 0,
      consts: [[1, "newsletter-container"], [1, "newsletter-content"], [1, "newsletter-title"], [1, "newsletter"], [1, "newsletter-desc"], [1, "newsletter-input"], ["type", "text", "id", "ip2", "placeholder", "Email address", 1, "custom-email"], ["type", "button", 1, "signButton"]],
      template: function NewsletterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

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
        }
      },
      styles: ["@media screen and (min-width: 1000px) {\r\n  .newsletter-container[_ngcontent-%COMP%] {\r\n    background-color: #E5E5E5;\r\n    display: grid;\r\n    grid-template-rows: 1fr 2fr 1fr;\r\n    grid-template-columns:0.4fr 2.4fr minmax(auto, 125px);\r\n    grid-template-areas: \"a1 a2 a3\" \"b1 b2 b3\" \"c1 c2 c3\";\r\n    height: 10vw;\r\n  }\r\n\r\n  .newsletter-content[_ngcontent-%COMP%] {\r\n    grid-area: b2;\r\n    display: grid;\r\n    grid-template-columns:  minmax(350px, auto) minmax(50px, auto) minmax(430px, auto);\r\n    grid-template-areas: \"a b c\";\r\n  }\r\n\r\n  .newsletter-title[_ngcontent-%COMP%] {\r\n    grid-area: a;\r\n  }\r\n\r\n  .newsletter-desc[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: start;\r\n  }\r\n\r\n  .newsletter[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: start;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-family: Palatino, \"Palatino LT STD\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif;\r\n    font-weight: 900;\r\n    color: #555555;\r\n    font-size: 2.7vw;\r\n  }\r\n\r\n  span[_ngcontent-%COMP%] {\r\n    font-family: \"NexaRustScriptL-00\", sans-serif;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: 0.875rem;\r\n    color: #555555;\r\n  }\r\n\r\n  .newsletter-input[_ngcontent-%COMP%] {\r\n    grid-area: c;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n  }\r\n\r\n  .custom-email[_ngcontent-%COMP%] {\r\n    border-radius: 25px;\r\n    border: 1px solid #C5C5C5;\r\n    padding: 20px;\r\n    width: 300px;\r\n    height: 15px;\r\n\r\n  }\r\n\r\n  .signButton[_ngcontent-%COMP%] {\r\n    border-radius: 25px;\r\n    border: 1px solid #C6D7CD;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    padding-top: 9px;\r\n    padding-bottom: 9px;\r\n    margin-left: 20px;\r\n  }\r\n\r\n  input[_ngcontent-%COMP%]:focus {\r\n    outline: none !important;\r\n    border-color: #719ECE;\r\n    box-shadow: 0 0 10px #719ECE;\r\n  }\r\n\r\n  button[_ngcontent-%COMP%]:focus {\r\n    outline: none !important;\r\n    border-color: #719ECE;\r\n    box-shadow: 0 0 10px #719ECE;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (max-width: 999px) {\r\n  .newsletter-content[_ngcontent-%COMP%] {\r\n    background-color: ghostwhite;\r\n    display: grid;\r\n    grid-template-rows: 1fr 1fr;\r\n    grid-template-areas: \"a \" \"b \";\r\n    min-height: 160px;\r\n\r\n  }\r\n\r\n  .newsletter-title[_ngcontent-%COMP%] {\r\n    grid-area: a;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .newsletter-input[_ngcontent-%COMP%] {\r\n    grid-area: b;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n  }\r\n\r\n  .custom-email[_ngcontent-%COMP%] {\r\n    border-radius: 25px;\r\n    border: 1px solid #C5C5C5;;\r\n    padding: 20px;\r\n    width: 300px;\r\n    height: 15px;\r\n  }\r\n\r\n  input[_ngcontent-%COMP%]:focus {\r\n    outline: none !important;\r\n    border-color: #719ECE;\r\n    box-shadow: 0 0 10px #719ECE;\r\n  }\r\n\r\n  .signButton[_ngcontent-%COMP%] {\r\n    border-radius: 25px;\r\n    border: 1px solid #C6D7CD;;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    padding-top: 9px;\r\n    padding-bottom: 9px;\r\n    margin-left: 20px;\r\n  }\r\n\r\n  h4[_ngcontent-%COMP%] {\r\n    font-family: \"Nexa W01 Bold\", sans-serif;\r\n    color: #555555;\r\n  }\r\n\r\n  span[_ngcontent-%COMP%] {\r\n    font-family: \"NexaRustScriptL-00\", sans-serif;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  button[_ngcontent-%COMP%]:focus {\r\n    outline: none !important;\r\n    border-color: #719ECE;\r\n    box-shadow: 0 0 10px #719ECE;\r\n  }\r\n  .custom-email[_ngcontent-%COMP%] {\r\n    border-radius: 25px;\r\n    border: 1px solid #C5C5C5;;\r\n    padding: 20px;\r\n    width: 200px;\r\n    height: 15px;\r\n\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL25ld3NsZXR0ZXIvbmV3c2xldHRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLCtCQUErQjtJQUMvQixxREFBcUQ7SUFDckQscURBQXFEO0lBQ3JELFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0ZBQWtGO0lBQ2xGLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSw2RkFBNkY7SUFDN0YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSw2Q0FBNkM7RUFDL0M7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1Qjs7RUFFekI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTs7RUFFZDs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQiw0QkFBNEI7RUFDOUI7O0FBRUY7O0FBRUE7RUFDRTtJQUNFLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5QixpQkFBaUI7O0VBRW5COztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCOztFQUV6Qjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHdDQUF3QztJQUN4QyxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsNkNBQTZDO0VBQy9DOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQiw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZOztFQUVkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvbmV3c2xldHRlci9uZXdzbGV0dGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICAubmV3c2xldHRlci1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTVFNTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjAuNGZyIDIuNGZyIG1pbm1heChhdXRvLCAxMjVweCk7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImExIGEyIGEzXCIgXCJiMSBiMiBiM1wiIFwiYzEgYzIgYzNcIjtcclxuICAgIGhlaWdodDogMTB2dztcclxuICB9XHJcblxyXG4gIC5uZXdzbGV0dGVyLWNvbnRlbnQge1xyXG4gICAgZ3JpZC1hcmVhOiBiMjtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICBtaW5tYXgoMzUwcHgsIGF1dG8pIG1pbm1heCg1MHB4LCBhdXRvKSBtaW5tYXgoNDMwcHgsIGF1dG8pO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJhIGIgY1wiO1xyXG4gIH1cclxuXHJcbiAgLm5ld3NsZXR0ZXItdGl0bGUge1xyXG4gICAgZ3JpZC1hcmVhOiBhO1xyXG4gIH1cclxuXHJcbiAgLm5ld3NsZXR0ZXItZGVzYyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgfVxyXG5cclxuICAubmV3c2xldHRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBmb250LWZhbWlseTogUGFsYXRpbm8sIFwiUGFsYXRpbm8gTFQgU1REXCIsIFwiUGFsYXRpbm8gTGlub3R5cGVcIiwgXCJCb29rIEFudGlxdWFcIiwgR2VvcmdpYSwgc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgY29sb3I6ICM1NTU1NTU7XHJcbiAgICBmb250LXNpemU6IDIuN3Z3O1xyXG4gIH1cclxuXHJcbiAgc3BhbiB7XHJcbiAgICBmb250LWZhbWlseTogXCJOZXhhUnVzdFNjcmlwdEwtMDBcIiwgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIGNvbG9yOiAjNTU1NTU1O1xyXG4gIH1cclxuXHJcbiAgLm5ld3NsZXR0ZXItaW5wdXQge1xyXG4gICAgZ3JpZC1hcmVhOiBjO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLWVtYWlsIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQzVDNUM1O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuXHJcbiAgfVxyXG5cclxuICAuc2lnbkJ1dHRvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0M2RDdDRDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogOXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDlweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNzE5RUNFO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggIzcxOUVDRTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICM3MTlFQ0U7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjNzE5RUNFO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5OXB4KSB7XHJcbiAgLm5ld3NsZXR0ZXItY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnaG9zdHdoaXRlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiYSBcIiBcImIgXCI7XHJcbiAgICBtaW4taGVpZ2h0OiAxNjBweDtcclxuXHJcbiAgfVxyXG5cclxuICAubmV3c2xldHRlci10aXRsZSB7XHJcbiAgICBncmlkLWFyZWE6IGE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm5ld3NsZXR0ZXItaW5wdXQge1xyXG4gICAgZ3JpZC1hcmVhOiBiO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLWVtYWlsIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQzVDNUM1OztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgfVxyXG5cclxuICBpbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICM3MTlFQ0U7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjNzE5RUNFO1xyXG4gIH1cclxuXHJcbiAgLnNpZ25CdXR0b24ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDNkQ3Q0Q7O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiA5cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBoNCB7XHJcbiAgICBmb250LWZhbWlseTogXCJOZXhhIFcwMSBCb2xkXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzU1NTU1NTtcclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTmV4YVJ1c3RTY3JpcHRMLTAwXCIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBidXR0b246Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNzE5RUNFO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggIzcxOUVDRTtcclxuICB9XHJcbiAgLmN1c3RvbS1lbWFpbCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0M1QzVDNTs7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG5cclxuICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsletterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-newsletter',
          templateUrl: './newsletter.component.html',
          styleUrls: ['./newsletter.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/home/sales/sales.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/home/sales/sales.component.ts ***!
    \**********************************************************/

  /*! exports provided: SalesComponent */

  /***/
  function srcAppComponentsHomeSalesSalesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalesComponent", function () {
      return SalesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SalesComponent = /*#__PURE__*/function () {
      function SalesComponent() {
        _classCallCheck(this, SalesComponent);
      }

      _createClass(SalesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SalesComponent;
    }();

    SalesComponent.ɵfac = function SalesComponent_Factory(t) {
      return new (t || SalesComponent)();
    };

    SalesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SalesComponent,
      selectors: [["app-sales"]],
      decls: 28,
      vars: 0,
      consts: [[1, "sales-container"], [1, "sales-text"], [1, "cards-pos"], [1, "sales-cards"], [1, "img-container"], ["src", "assets/JOURNEY BEYOND CAM 12.jpg", "alt", "Card image cap", 1, "card-img-top", "first"], [1, "overlay"], [1, "img-text"], ["src", "assets/ABSTRACT CAM 4.jpg", "alt", "Card image cap", 1, "card-img-top"], ["src", "assets/ABSTRACT CAM 5.jpg", "alt", "Card image cap", 1, "card-img-top"], ["src", "assets/REFLECTIONS CAM 4.jpg", "alt", "Card image cap", 1, "card-img-top"]],
      template: function SalesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "AKCI\xD3S ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " TERM\xC9KEINK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " tap\xE9t\xE1k ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " f\xFCgg\xF6ny\xF6k ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " textilek ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " kieg\xE9sz\xEDt\u0151k ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@media screen and (min-width: 700px) {\r\n    .sales-container[_ngcontent-%COMP%] {\r\n        background-color: #E5E5E5;\r\n        display: grid;\r\n        grid-template-columns: 3fr 8fr;\r\n        grid-template-areas: \"a b \";\r\n        height: 15vw;\r\n    }\r\n\r\n    .sales-text[_ngcontent-%COMP%] {\r\n        grid-area: a;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        text-align: center;\r\n    }\r\n\r\n    H4[_ngcontent-%COMP%] {\r\n        font-family: Palatino, \"Palatino LT STD\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif;\r\n        font-weight: bolder;\r\n        color: #555555;\r\n        font-size: 2vw;\r\n    }\r\n\r\n    .sales-cards[_ngcontent-%COMP%] {\r\n        grid-area: cards;\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr 1fr 1fr;\r\n        grid-template-areas: \"img1 img2 img3 img4\";\r\n        grid-gap: 2vw;\r\n        margin: 20px 0px;\r\n\r\n    }\r\n\r\n    .cards-pos[_ngcontent-%COMP%] {\r\n        grid-area: b;\r\n        display: grid;\r\n        grid-template-columns: 1fr 5fr 1fr;\r\n        grid-template-areas: \". cards .\";\r\n    }\r\n\r\n    img[_ngcontent-%COMP%] {\r\n        display: block;\r\n        width: 14vw;\r\n        height: 12vw;\r\n        cursor: pointer;\r\n        border-radius: 8px;\r\n        box-shadow: 0 4px 8px 0 rgba(1, 1, 1, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.79);\r\n    }\r\n\r\n    .overlay[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        top: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n        height: 12vw;\r\n        width: 14vw;\r\n        opacity: 0;\r\n        transition: .5s ease;\r\n        background-color: black;\r\n        border-radius: 8px;\r\n    }\r\n\r\n    .img-container[_ngcontent-%COMP%] {\r\n        position: relative;\r\n    }\r\n\r\n    .img-container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\r\n        opacity: 50%;\r\n    }\r\n\r\n    .img-text[_ngcontent-%COMP%] {\r\n        color: white;\r\n        font-family: Palatino, \"Palatino LT STD\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif;\r\n        font-size: 2vw;\r\n        font-weight: bolder;\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n        -ms-transform: translate(-50%, -50%);\r\n    }\r\n}\r\n@media screen and (max-width: 699px) {\r\n    .sales-container[_ngcontent-%COMP%] {\r\n        background-color: #E5E5E5;\r\n        display: grid;\r\n        grid-template-rows: 0.5fr 2fr;\r\n        grid-template-columns: 1fr;\r\n        grid-template-areas: \"title\" \"images\";\r\n\r\n    }\r\n\r\n    br[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n\r\n    .sales-text[_ngcontent-%COMP%] {\r\n        grid-area: title;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        text-align: center;\r\n    }\r\n\r\n    .cards-pos[_ngcontent-%COMP%] {\r\n        grid-area: images;\r\n        display: grid;\r\n        grid-template-columns: 0.5fr 1fr 0.5fr;\r\n        grid-template-areas: \". cards .\";\r\n    }\r\n\r\n    .sales-cards[_ngcontent-%COMP%] {\r\n        grid-area: cards;\r\n        display: grid;\r\n        grid-template-rows: 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr;\r\n        grid-template-areas: \"image1 image2\" \"image3 image4\";\r\n        grid-gap: 4vw;\r\n        margin: 20px 0px;\r\n\r\n    }\r\n\r\n    img[_ngcontent-%COMP%] {\r\n        display: block;\r\n        width: 30vw;\r\n        height: 28vw;\r\n        cursor: pointer;\r\n        border-radius: 8px;\r\n        box-shadow: 0 4px 8px 0 rgba(1, 1, 1, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.79);\r\n    }\r\n\r\n    .overlay[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        top: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n        height: 28vw;\r\n        width: 30vw;\r\n        opacity: 0;\r\n        transition: .5s ease;\r\n        background-color: black;\r\n        border-radius: 8px;\r\n    }\r\n\r\n    .img-container[_ngcontent-%COMP%] {\r\n        position: relative;\r\n    }\r\n\r\n    .img-container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\r\n        opacity: 50%;\r\n    }\r\n\r\n    .img-text[_ngcontent-%COMP%] {\r\n        color: white;\r\n        font-family: Palatino, \"Palatino LT STD\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif;\r\n        font-size: 5vw;\r\n        font-weight: bolder;\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n        -ms-transform: translate(-50%, -50%);\r\n    }\r\n\r\n    H2[_ngcontent-%COMP%] {\r\n        font-family: Palatino, \"Palatino LT STD\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif;\r\n        font-weight: 900;\r\n        color: #555555;\r\n        font-size: 6vw;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3NhbGVzL3NhbGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLHlCQUF5QjtRQUN6QixhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLDJCQUEyQjtRQUMzQixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLDZGQUE2RjtRQUM3RixtQkFBbUI7UUFDbkIsY0FBYztRQUNkLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLHNDQUFzQztRQUN0QywwQ0FBMEM7UUFDMUMsYUFBYTtRQUNiLGdCQUFnQjs7SUFFcEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLGtDQUFrQztRQUNsQyxnQ0FBZ0M7SUFDcEM7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsV0FBVztRQUNYLFlBQVk7UUFDWixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLDRFQUE0RTtJQUNoRjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixNQUFNO1FBQ04sU0FBUztRQUNULE9BQU87UUFDUCxRQUFRO1FBQ1IsWUFBWTtRQUNaLFdBQVc7UUFDWCxVQUFVO1FBQ1Ysb0JBQW9CO1FBQ3BCLHVCQUF1QjtRQUN2QixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLDZGQUE2RjtRQUM3RixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsU0FBUztRQUNULGdDQUFnQztRQUNoQyxvQ0FBb0M7SUFDeEM7QUFDSjtBQUNBO0lBQ0k7UUFDSSx5QkFBeUI7UUFDekIsYUFBYTtRQUNiLDZCQUE2QjtRQUM3QiwwQkFBMEI7UUFDMUIscUNBQXFDOztJQUV6Qzs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixzQ0FBc0M7UUFDdEMsZ0NBQWdDO0lBQ3BDOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYiwyQkFBMkI7UUFDM0IsOEJBQThCO1FBQzlCLG9EQUFvRDtRQUNwRCxhQUFhO1FBQ2IsZ0JBQWdCOztJQUVwQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxXQUFXO1FBQ1gsWUFBWTtRQUNaLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsNEVBQTRFO0lBQ2hGOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixTQUFTO1FBQ1QsT0FBTztRQUNQLFFBQVE7UUFDUixZQUFZO1FBQ1osV0FBVztRQUNYLFVBQVU7UUFDVixvQkFBb0I7UUFDcEIsdUJBQXVCO1FBQ3ZCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osNkZBQTZGO1FBQzdGLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixTQUFTO1FBQ1QsZ0NBQWdDO1FBQ2hDLG9DQUFvQztJQUN4Qzs7SUFFQTtRQUNJLDZGQUE2RjtRQUM3RixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGNBQWM7SUFDbEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9zYWxlcy9zYWxlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAgIC5zYWxlcy1jb250YWluZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFNUU1RTU7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciA4ZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJhIGIgXCI7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXZ3O1xyXG4gICAgfVxyXG5cclxuICAgIC5zYWxlcy10ZXh0IHtcclxuICAgICAgICBncmlkLWFyZWE6IGE7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBINCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFBhbGF0aW5vLCBcIlBhbGF0aW5vIExUIFNURFwiLCBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFwiQm9vayBBbnRpcXVhXCIsIEdlb3JnaWEsIHNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgY29sb3I6ICM1NTU1NTU7XHJcbiAgICAgICAgZm9udC1zaXplOiAydnc7XHJcbiAgICB9XHJcblxyXG4gICAgLnNhbGVzLWNhcmRzIHtcclxuICAgICAgICBncmlkLWFyZWE6IGNhcmRzO1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJpbWcxIGltZzIgaW1nMyBpbWc0XCI7XHJcbiAgICAgICAgZ3JpZC1nYXA6IDJ2dztcclxuICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZHMtcG9zIHtcclxuICAgICAgICBncmlkLWFyZWE6IGI7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiLiBjYXJkcyAuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMTR2dztcclxuICAgICAgICBoZWlnaHQ6IDEydnc7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDEsIDEsIDEsIDAuNiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuNzkpO1xyXG4gICAgfVxyXG5cclxuICAgIC5vdmVybGF5IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGhlaWdodDogMTJ2dztcclxuICAgICAgICB3aWR0aDogMTR2dztcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIH1cclxuXHJcbiAgICAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWctY29udGFpbmVyOmhvdmVyIC5vdmVybGF5IHtcclxuICAgICAgICBvcGFjaXR5OiA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmltZy10ZXh0IHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFBhbGF0aW5vLCBcIlBhbGF0aW5vIExUIFNURFwiLCBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFwiQm9vayBBbnRpcXVhXCIsIEdlb3JnaWEsIHNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnZ3O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjk5cHgpIHtcclxuICAgIC5zYWxlcy1jb250YWluZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFNUU1RTU7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDJmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInRpdGxlXCIgXCJpbWFnZXNcIjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYnIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNhbGVzLXRleHQge1xyXG4gICAgICAgIGdyaWQtYXJlYTogdGl0bGU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZHMtcG9zIHtcclxuICAgICAgICBncmlkLWFyZWE6IGltYWdlcztcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMWZyIDAuNWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiLiBjYXJkcyAuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLnNhbGVzLWNhcmRzIHtcclxuICAgICAgICBncmlkLWFyZWE6IGNhcmRzO1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImltYWdlMSBpbWFnZTJcIiBcImltYWdlMyBpbWFnZTRcIjtcclxuICAgICAgICBncmlkLWdhcDogNHZ3O1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAwcHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDMwdnc7XHJcbiAgICAgICAgaGVpZ2h0OiAyOHZ3O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgxLCAxLCAxLCAwLjYpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjc5KTtcclxuICAgIH1cclxuXHJcbiAgICAub3ZlcmxheSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBoZWlnaHQ6IDI4dnc7XHJcbiAgICAgICAgd2lkdGg6IDMwdnc7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmltZy1jb250YWluZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICAuaW1nLWNvbnRhaW5lcjpob3ZlciAub3ZlcmxheSB7XHJcbiAgICAgICAgb3BhY2l0eTogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWctdGV4dCB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBQYWxhdGlubywgXCJQYWxhdGlubyBMVCBTVERcIiwgXCJQYWxhdGlubyBMaW5vdHlwZVwiLCBcIkJvb2sgQW50aXF1YVwiLCBHZW9yZ2lhLCBzZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDV2dztcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgfVxyXG5cclxuICAgIEgyIHtcclxuICAgICAgICBmb250LWZhbWlseTogUGFsYXRpbm8sIFwiUGFsYXRpbm8gTFQgU1REXCIsIFwiUGFsYXRpbm8gTGlub3R5cGVcIiwgXCJCb29rIEFudGlxdWFcIiwgR2VvcmdpYSwgc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICBjb2xvcjogIzU1NTU1NTtcclxuICAgICAgICBmb250LXNpemU6IDZ2dztcclxuICAgIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SalesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sales',
          templateUrl: './sales.component.html',
          styleUrls: ['./sales.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/home/second-content/second-content.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/home/second-content/second-content.component.ts ***!
    \****************************************************************************/

  /*! exports provided: SecondContentComponent */

  /***/
  function srcAppComponentsHomeSecondContentSecondContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecondContentComponent", function () {
      return SecondContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SecondContentComponent = /*#__PURE__*/function () {
      function SecondContentComponent() {
        _classCallCheck(this, SecondContentComponent);
      }

      _createClass(SecondContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          document.documentElement.style.setProperty('--childrenUrl', 'url(' + this.children + ')');
          document.documentElement.style.setProperty('--blackoutUrl', 'url(' + this.blackout + ')');
          document.documentElement.style.setProperty('--furnitureFabricUrl', 'url(' + this.furniture + ')');
        }
      }]);

      return SecondContentComponent;
    }();

    SecondContentComponent.ɵfac = function SecondContentComponent_Factory(t) {
      return new (t || SecondContentComponent)();
    };

    SecondContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SecondContentComponent,
      selectors: [["app-second-content"]],
      inputs: {
        children: "children",
        blackout: "blackout",
        furniture: "furniture"
      },
      decls: 30,
      vars: 0,
      consts: [[1, "content"], [1, "card-direction", "firstCard"], [1, "mozaik-up", "grid-up"], [1, "mozaik-text-container"], [1, "mozaik-text"], [1, "card-direction", "secondCard"], [1, "mozaik-down", "grid-down"], [1, "card-direction", "thirdCard"], [1, "desc-backgr"], [1, "desc-text"], [1, "text"], ["type", "button", 1, "detailsButton"]],
      template: function SecondContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Black Out ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "f\xFCgg\xF6ny ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Teljes s\xF6t\xE9t\xEDt\xE9st biztos\xEDt\xF3 f\xFCgg\xF6ny\xF6k ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Gyerek ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "f\xFCgg\xF6ny ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " K\xFCl\xF6nleges f\xFCgg\xF6ny ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "D\xEDszp\xE1rna ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Gy\xF6ny\xF6r\u0171 d\xEDszp\xE1rn\xE1ink harmonikuss\xE1 var\xE1zsolj\xE1k otthon\xE1t");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " V\xC1LASZT\xC9K");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@media screen and (min-width: 800px) {\r\n    .content[_ngcontent-%COMP%] {\r\n        height: 50vw;\r\n        display: grid;\r\n        grid-template-rows: 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr 2fr;\r\n        grid-template-areas: \"a1 a2 a3\" \"b1 b2 a3\";\r\n    }\r\n\r\n    .grig-down[_ngcontent-%COMP%] {\r\n        grid-area: a2;\r\n    }\r\n\r\n    .grid-up[_ngcontent-%COMP%] {\r\n        grid-area: b1;\r\n    }\r\n\r\n    .firstCard[_ngcontent-%COMP%] {\r\n        grid-area: a1;\r\n        background: var(--blackoutUrl) no-repeat center center;\r\n        background-size: cover;\r\n    }\r\n\r\n    .secondCard[_ngcontent-%COMP%] {\r\n        grid-area: b2;\r\n        background: var(--childrenUrl) no-repeat center center;\r\n        background-size: cover;\r\n    }\r\n\r\n    .thirdCard[_ngcontent-%COMP%] {\r\n        grid-area: a3;\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr 0.3fr;\r\n        grid-template-rows: 0.5fr 1fr 0.5fr;\r\n        grid-template-areas: \"a b .\" \"d e .\" \"i j .\";\r\n        background: var(--furnitureFabricUrl) no-repeat center center;\r\n        background-size: cover;\r\n    }\r\n\r\n    p[_ngcontent-%COMP%] {\r\n        font-family: Palatino, \"Palatino LT STD\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif;\r\n        font-size: 1.9vw;\r\n        color: whitesmoke;\r\n        padding-top: 10px;\r\n    }\r\n\r\n    span[_ngcontent-%COMP%] {\r\n        font-family: Palatino, \"Palatino LT STD\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif;\r\n        font-size: 0.9vw;\r\n        color: white;\r\n    }\r\n}\r\n@media screen and (max-width: 799px) {\r\n    .content[_ngcontent-%COMP%] {\r\n        height: 100vw;\r\n        display: grid;\r\n        grid-template-rows: 1fr 1fr 2fr;\r\n        grid-template-columns: 1fr 1fr;\r\n        grid-template-areas: \"a1 a2\" \"b1 b2\" \"c1 c1\";\r\n    }\r\n\r\n    .grig-down[_ngcontent-%COMP%] {\r\n        grid-area: b1;\r\n    }\r\n\r\n    .grid-up[_ngcontent-%COMP%] {\r\n        grid-area: a2;\r\n    }\r\n\r\n    .firstCard[_ngcontent-%COMP%] {\r\n        grid-area: a1;\r\n        background: var(--blackoutUrl) no-repeat center center;\r\n        background-size: cover;\r\n    }\r\n\r\n    .secondCard[_ngcontent-%COMP%] {\r\n        grid-area: b2;\r\n        background: var(--childrenUrl) no-repeat center center;\r\n        background-size: cover;\r\n    }\r\n\r\n    .thirdCard[_ngcontent-%COMP%] {\r\n        grid-area: c1;\r\n        display: grid;\r\n        grid-template-columns: 1fr 2fr 1fr;\r\n        grid-template-rows: 0.5fr 1fr 0.5fr;\r\n        grid-template-areas: \"a b c\" \"d e f\" \"i j k\";\r\n        background: var(--furnitureFabricUrl) no-repeat center center;\r\n        background-size: cover;\r\n    }\r\n    .mozaik-down[_ngcontent-%COMP%]:before {\r\n        left: 99.5%;\r\n        bottom: 35%;\r\n        transform: rotate(-90deg);\r\n    }\r\n    .mozaik-up[_ngcontent-%COMP%]:before {\r\n        right: 99.5%;\r\n        top: 35%;\r\n        transform: rotate(-90deg);\r\n    }\r\n\r\n    p[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    span[_ngcontent-%COMP%] {\r\n        font-family: Palatino, \"Palatino LT STD\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif;\r\n        font-size: 3vw;\r\n        color: white;\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3NlY29uZC1jb250ZW50L3NlY29uZC1jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsMkJBQTJCO1FBQzNCLGtDQUFrQztRQUNsQywwQ0FBMEM7SUFDOUM7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixzREFBc0Q7UUFDdEQsc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHNEQUFzRDtRQUN0RCxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsYUFBYTtRQUNiLG9DQUFvQztRQUNwQyxtQ0FBbUM7UUFDbkMsNENBQTRDO1FBQzVDLDZEQUE2RDtRQUM3RCxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSw2RkFBNkY7UUFDN0YsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSw2RkFBNkY7UUFDN0YsZ0JBQWdCO1FBQ2hCLFlBQVk7SUFDaEI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsYUFBYTtRQUNiLCtCQUErQjtRQUMvQiw4QkFBOEI7UUFDOUIsNENBQTRDO0lBQ2hEOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isc0RBQXNEO1FBQ3RELHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixzREFBc0Q7UUFDdEQsc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLGFBQWE7UUFDYixrQ0FBa0M7UUFDbEMsbUNBQW1DO1FBQ25DLDRDQUE0QztRQUM1Qyw2REFBNkQ7UUFDN0Qsc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsV0FBVztRQUNYLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0ksWUFBWTtRQUNaLFFBQVE7UUFDUix5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSw2RkFBNkY7UUFDN0YsY0FBYztRQUNkLFlBQVk7SUFDaEI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvc2Vjb25kLWNvbnRlbnQvc2Vjb25kLWNvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHZ3O1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAyZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJhMSBhMiBhM1wiIFwiYjEgYjIgYTNcIjtcclxuICAgIH1cclxuXHJcbiAgICAuZ3JpZy1kb3duIHtcclxuICAgICAgICBncmlkLWFyZWE6IGEyO1xyXG4gICAgfVxyXG5cclxuICAgIC5ncmlkLXVwIHtcclxuICAgICAgICBncmlkLWFyZWE6IGIxO1xyXG4gICAgfVxyXG5cclxuICAgIC5maXJzdENhcmQge1xyXG4gICAgICAgIGdyaWQtYXJlYTogYTE7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2tvdXRVcmwpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlY29uZENhcmQge1xyXG4gICAgICAgIGdyaWQtYXJlYTogYjI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY2hpbGRyZW5VcmwpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnRoaXJkQ2FyZCB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBhMztcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAwLjNmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDFmciAwLjVmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImEgYiAuXCIgXCJkIGUgLlwiIFwiaSBqIC5cIjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1mdXJuaXR1cmVGYWJyaWNVcmwpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFBhbGF0aW5vLCBcIlBhbGF0aW5vIExUIFNURFwiLCBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFwiQm9vayBBbnRpcXVhXCIsIEdlb3JnaWEsIHNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS45dnc7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFBhbGF0aW5vLCBcIlBhbGF0aW5vIExUIFNURFwiLCBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFwiQm9vayBBbnRpcXVhXCIsIEdlb3JnaWEsIHNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45dnc7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc5OXB4KSB7XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2dztcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAyZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiYTEgYTJcIiBcImIxIGIyXCIgXCJjMSBjMVwiO1xyXG4gICAgfVxyXG5cclxuICAgIC5ncmlnLWRvd24ge1xyXG4gICAgICAgIGdyaWQtYXJlYTogYjE7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyaWQtdXAge1xyXG4gICAgICAgIGdyaWQtYXJlYTogYTI7XHJcbiAgICB9XHJcblxyXG4gICAgLmZpcnN0Q2FyZCB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBhMTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibGFja291dFVybCkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxuXHJcbiAgICAuc2Vjb25kQ2FyZCB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBiMjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGlsZHJlblVybCkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxuXHJcbiAgICAudGhpcmRDYXJkIHtcclxuICAgICAgICBncmlkLWFyZWE6IGMxO1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDFmciAwLjVmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImEgYiBjXCIgXCJkIGUgZlwiIFwiaSBqIGtcIjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1mdXJuaXR1cmVGYWJyaWNVcmwpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbiAgICAubW96YWlrLWRvd246YmVmb3JlIHtcclxuICAgICAgICBsZWZ0OiA5OS41JTtcclxuICAgICAgICBib3R0b206IDM1JTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgfVxyXG4gICAgLm1vemFpay11cDpiZWZvcmUge1xyXG4gICAgICAgIHJpZ2h0OiA5OS41JTtcclxuICAgICAgICB0b3A6IDM1JTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBmb250LWZhbWlseTogUGFsYXRpbm8sIFwiUGFsYXRpbm8gTFQgU1REXCIsIFwiUGFsYXRpbm8gTGlub3R5cGVcIiwgXCJCb29rIEFudGlxdWFcIiwgR2VvcmdpYSwgc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecondContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-second-content',
          templateUrl: './second-content.component.html',
          styleUrls: ['./second-content.component.css']
        }]
      }], function () {
        return [];
      }, {
        children: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        blackout: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        furniture: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/home/third-content/third-content.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/home/third-content/third-content.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ThirdContentComponent */

  /***/
  function srcAppComponentsHomeThirdContentThirdContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThirdContentComponent", function () {
      return ThirdContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ThirdContentComponent = /*#__PURE__*/function () {
      function ThirdContentComponent() {
        _classCallCheck(this, ThirdContentComponent);
      }

      _createClass(ThirdContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          document.documentElement.style.setProperty('--wallpaperUrl', 'url(' + this.wallpaper + ')');
          document.documentElement.style.setProperty('--decorationUrl', 'url(' + this.decoration + ')');
        }
      }]);

      return ThirdContentComponent;
    }();

    ThirdContentComponent.ɵfac = function ThirdContentComponent_Factory(t) {
      return new (t || ThirdContentComponent)();
    };

    ThirdContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ThirdContentComponent,
      selectors: [["app-third-content"]],
      inputs: {
        wallpaper: "wallpaper",
        decoration: "decoration"
      },
      decls: 23,
      vars: 0,
      consts: [[1, "content"], [1, "card-direction", "firstCard"], [1, "desc-backgr"], [1, "desc-text"], [1, "text"], ["type", "button", 1, "detailsButton"], [1, "card-direction", "secondCard"]],
      template: function ThirdContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Tap\xE9ta ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Luxus tap\xE9t\xE1k Angli\xE1b\xF3l \xE9s Olaszorsz\xE1gb\xF3l");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " V\xC1LASZT\xC9K");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lak\xE1sdekor\xE1ci\xF3s ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "kieg\xE9sz\xEDt\u0151k ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Falik\xE9pek a t\xF6k\xE9letes harm\xF3nia megteremt\xE9s\xE9\xE9rt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " V\xC1LASZT\xC9K");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@media screen and (min-width: 800px) {\r\n    .content[_ngcontent-%COMP%] {\r\n        height: 32vw;\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n        grid-template-areas: \"a1 a2 \";\r\n    }\r\n\r\n    p[_ngcontent-%COMP%] {\r\n        font-family: Palatino, \"Palatino LT STD\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif;\r\n        font-size: 1.9vw;\r\n        color: whitesmoke;\r\n        padding-top: 10px;\r\n    }\r\n\r\n    .firstCard[_ngcontent-%COMP%] {\r\n        grid-area: a1;\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr 0.2fr;\r\n        grid-template-rows: 0.5fr 1fr 0.5fr;\r\n        grid-template-areas: \"a b .\" \"d e .\" \"i j .\";\r\n        background: var(--wallpaperUrl) no-repeat center center;\r\n        background-size: cover;\r\n        -webkit-filter: brightness(80%);\r\n                filter: brightness(80%);\r\n    }\r\n\r\n    .secondCard[_ngcontent-%COMP%] {\r\n        grid-area: a2;\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr 0.2fr;\r\n        grid-template-rows: 0.5fr 1fr 0.5fr;\r\n        grid-template-areas: \"a b .\" \"d e .\" \"i j .\";\r\n        background: var(--decorationUrl) no-repeat center center;\r\n        background-size: cover;\r\n        -webkit-filter: brightness(80%);\r\n                filter: brightness(80%);\r\n    }\r\n\r\n    span[_ngcontent-%COMP%] {\r\n        font-family: Palatino, \"Palatino LT STD\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif;\r\n        font-size: 0.9vw;\r\n        color: white;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 799px) {\r\n    .content[_ngcontent-%COMP%] {\r\n        height: 80vw;\r\n        display: grid;\r\n        grid-template-rows: 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr;\r\n        grid-template-areas: \"a1 a1\" \"b1 b1 \";\r\n    }\r\n\r\n    .firstCard[_ngcontent-%COMP%] {\r\n        grid-area: a1;\r\n        display: grid;\r\n        grid-auto-columns: 0.1fr 1fr 0.1fr;\r\n        grid-template-columns: 0.7fr 2fr 0.7fr;\r\n        grid-template-areas: \". . . \" \". e . \" \". . . \";\r\n        background:  var(--wallpaperUrl) no-repeat center center;\r\n        background-size: cover;\r\n    }\r\n\r\n    .secondCard[_ngcontent-%COMP%] {\r\n        grid-area: b1;\r\n        display: grid;\r\n        grid-auto-columns: 0.2fr 1fr 0.2fr;\r\n        grid-template-columns: 0.7fr 2fr 0.7fr;\r\n        grid-template-areas: \". . . \" \". e . \" \". . . \";\r\n        background: var(--decorationUrl) no-repeat center center;\r\n        background-size: cover;\r\n    }\r\n\r\n    p[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n\r\n    span[_ngcontent-%COMP%] {\r\n        font-family: Palatino, \"Palatino LT STD\", \"Palatino Linotype\", \"Book Antiqua\", Georgia, serif;\r\n        font-size: 3vw;\r\n        color: white;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3RoaXJkLWNvbnRlbnQvdGhpcmQtY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLDhCQUE4QjtRQUM5Qiw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSw2RkFBNkY7UUFDN0YsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsYUFBYTtRQUNiLG9DQUFvQztRQUNwQyxtQ0FBbUM7UUFDbkMsNENBQTRDO1FBQzVDLHVEQUF1RDtRQUN2RCxzQkFBc0I7UUFDdEIsK0JBQXVCO2dCQUF2Qix1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsYUFBYTtRQUNiLG9DQUFvQztRQUNwQyxtQ0FBbUM7UUFDbkMsNENBQTRDO1FBQzVDLHdEQUF3RDtRQUN4RCxzQkFBc0I7UUFDdEIsK0JBQXVCO2dCQUF2Qix1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSw2RkFBNkY7UUFDN0YsZ0JBQWdCO1FBQ2hCLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYiwyQkFBMkI7UUFDM0IsOEJBQThCO1FBQzlCLHFDQUFxQztJQUN6Qzs7SUFFQTtRQUNJLGFBQWE7UUFDYixhQUFhO1FBQ2Isa0NBQWtDO1FBQ2xDLHNDQUFzQztRQUN0QywrQ0FBK0M7UUFDL0Msd0RBQXdEO1FBQ3hELHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixhQUFhO1FBQ2Isa0NBQWtDO1FBQ2xDLHNDQUFzQztRQUN0QywrQ0FBK0M7UUFDL0Msd0RBQXdEO1FBQ3hELHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSw2RkFBNkY7UUFDN0YsY0FBYztRQUNkLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS90aGlyZC1jb250ZW50L3RoaXJkLWNvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMnZ3O1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiYTEgYTIgXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFBhbGF0aW5vLCBcIlBhbGF0aW5vIExUIFNURFwiLCBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFwiQm9vayBBbnRpcXVhXCIsIEdlb3JnaWEsIHNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS45dnc7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZpcnN0Q2FyZCB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBhMTtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAwLjJmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDFmciAwLjVmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImEgYiAuXCIgXCJkIGUgLlwiIFwiaSBqIC5cIjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13YWxscGFwZXJVcmwpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlY29uZENhcmQge1xyXG4gICAgICAgIGdyaWQtYXJlYTogYTI7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMC4yZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAxZnIgMC41ZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJhIGIgLlwiIFwiZCBlIC5cIiBcImkgaiAuXCI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGVjb3JhdGlvblVybCkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBmb250LWZhbWlseTogUGFsYXRpbm8sIFwiUGFsYXRpbm8gTFQgU1REXCIsIFwiUGFsYXRpbm8gTGlub3R5cGVcIiwgXCJCb29rIEFudGlxdWFcIiwgR2VvcmdpYSwgc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjl2dztcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc5OXB4KSB7XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHZ3O1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImExIGExXCIgXCJiMSBiMSBcIjtcclxuICAgIH1cclxuXHJcbiAgICAuZmlyc3RDYXJkIHtcclxuICAgICAgICBncmlkLWFyZWE6IGExO1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC1hdXRvLWNvbHVtbnM6IDAuMWZyIDFmciAwLjFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuN2ZyIDJmciAwLjdmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIi4gLiAuIFwiIFwiLiBlIC4gXCIgXCIuIC4gLiBcIjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAgdmFyKC0td2FsbHBhcGVyVXJsKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWNvbmRDYXJkIHtcclxuICAgICAgICBncmlkLWFyZWE6IGIxO1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC1hdXRvLWNvbHVtbnM6IDAuMmZyIDFmciAwLjJmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuN2ZyIDJmciAwLjdmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIi4gLiAuIFwiIFwiLiBlIC4gXCIgXCIuIC4gLiBcIjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kZWNvcmF0aW9uVXJsKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFBhbGF0aW5vLCBcIlBhbGF0aW5vIExUIFNURFwiLCBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFwiQm9vayBBbnRpcXVhXCIsIEdlb3JnaWEsIHNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThirdContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-third-content',
          templateUrl: './third-content.component.html',
          styleUrls: ['./third-content.component.css']
        }]
      }], function () {
        return [];
      }, {
        wallpaper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        decoration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/navbar/navbar-modal/navbar-modal.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/navbar/navbar-modal/navbar-modal.component.ts ***!
    \**************************************************************************/

  /*! exports provided: NavbarModalComponent */

  /***/
  function srcAppComponentsNavbarNavbarModalNavbarModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarModalComponent", function () {
      return NavbarModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/modal.service */
    "./src/app/services/modal.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NavbarModalComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ez a modal nem nem NAVIGATION");

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Some text in the Modal..");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Some text in the Modal..");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Some text in the Modal..");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Some text in the Modal..");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Some text in the Modal..");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Some text in the Modal..");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Some text in the Modal..");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Some text in the Modal..");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Some text in the Modal..");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarModalComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ez a modal nem nem NAVIGATION");

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
      }
    }

    function NavbarModalComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ez a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ez a modal compones PRODUCTS");

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Some text in the Modal..");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarModalComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ez a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ez a modal compones PRODUCTS");

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Some text in the Modal..");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var NavbarModalComponent = /*#__PURE__*/function () {
      function NavbarModalComponent(modalService) {
        _classCallCheck(this, NavbarModalComponent);

        this.modalService = modalService;
      }

      _createClass(NavbarModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.modalControl = this.modalService.modalControl;
        }
      }, {
        key: "keepModalOnScreen",
        value: function keepModalOnScreen() {
          this.modalService.keepModalOnScreen();
        }
      }]);

      return NavbarModalComponent;
    }();

    NavbarModalComponent.ɵfac = function NavbarModalComponent_Factory(t) {
      return new (t || NavbarModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]));
    };

    NavbarModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarModalComponent,
      selectors: [["app-navbar-modal"]],
      decls: 5,
      vars: 4,
      consts: [[3, "click"], ["class", "navigation-modal animate__animated animate__fadeInDown", 4, "ngIf"], ["class", "navigation-modal animate__animated animate__fadeOutUp", 4, "ngIf"], ["class", "products-modal animate__animated animate__fadeInDown", 4, "ngIf"], ["class", "products-modal animate__animated animate__fadeOutUp", 4, "ngIf"], [1, "navigation-modal", "animate__animated", "animate__fadeInDown"], [1, "custom-modal-content"], [1, "navigation-modal", "animate__animated", "animate__fadeOutUp"], [1, "products-modal", "animate__animated", "animate__fadeInDown"], [1, "products-modal", "animate__animated", "animate__fadeOutUp"]],
      template: function NavbarModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarModalComponent_Template_div_click_0_listener() {
            return ctx.keepModalOnScreen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavbarModalComponent_div_1_Template, 32, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavbarModalComponent_div_2_Template, 14, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavbarModalComponent_div_3_Template, 16, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavbarModalComponent_div_4_Template, 16, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modalControl.control === "navigation" && ctx.modalControl.showModal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modalControl.control === "navigation" && !ctx.modalControl.showModal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modalControl.control === "products" && ctx.modalControl.showModal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modalControl.control === "products" && !ctx.modalControl.showModal);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".navigation-modal[_ngcontent-%COMP%] {\r\n  display: block; \r\n  position: fixed; \r\n  z-index: 1; \r\n  padding-top: 60px; \r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; \r\n  overflow: auto; \r\n}\r\n\r\n.products-modal[_ngcontent-%COMP%] {\r\n  display: block; \r\n  position: fixed; \r\n\r\n  z-index: 1; \r\n  padding-top: 65px; \r\n  padding-left: 114px;\r\n  left: 0;\r\n  top: 0;\r\n  width: 500px; \r\n  overflow: auto; \r\n}\r\n\r\n.custom-modal-content[_ngcontent-%COMP%] {\r\n  background-color: #fefefe;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLW1vZGFsL25hdmJhci1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYyxFQUFFLHNCQUFzQjtFQUN0QyxlQUFlLEVBQUUsa0JBQWtCO0VBQ25DLFVBQVUsRUFBRSxlQUFlO0VBQzNCLGlCQUFpQixFQUFFLHdCQUF3QjtFQUMzQyxPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVcsRUFBRSxlQUFlO0VBQzVCLGNBQWMsRUFBRSw0QkFBNEI7QUFDOUM7O0FBRUE7RUFDRSxjQUFjLEVBQUUsc0JBQXNCO0VBQ3RDLGVBQWUsRUFBRSxrQkFBa0I7O0VBRW5DLFVBQVUsRUFBRSxlQUFlO0VBQzNCLGlCQUFpQixFQUFFLHdCQUF3QjtFQUMzQyxtQkFBbUI7RUFDbkIsT0FBTztFQUNQLE1BQU07RUFDTixZQUFZLEVBQUUsZUFBZTtFQUM3QixjQUFjLEVBQUUsNEJBQTRCO0FBQzlDOztBQUdBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLW1vZGFsL25hdmJhci1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRpb24tbW9kYWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cclxuICBwYWRkaW5nLXRvcDogNjBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbn1cclxuXHJcbi5wcm9kdWN0cy1tb2RhbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcblxyXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cclxuICBwYWRkaW5nLXRvcDogNjVweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xyXG4gIHBhZGRpbmctbGVmdDogMTE0cHg7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDUwMHB4OyAvKiBGdWxsIHdpZHRoICovXHJcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbn1cclxuXHJcblxyXG4uY3VzdG9tLW1vZGFsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar-modal',
          templateUrl: './navbar-modal.component.html',
          styleUrls: ['./navbar-modal.component.css']
        }]
      }], function () {
        return [{
          type: _services_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/modal.service */
    "./src/app/services/modal.service.ts");
    /* harmony import */


    var _services_screen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/screen.service */
    "./src/app/services/screen.service.ts");
    /* harmony import */


    var _services_localStorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/localStorage.service */
    "./src/app/services/localStorage.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _navbar_modal_navbar_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./navbar-modal/navbar-modal.component */
    "./src/app/components/navbar/navbar-modal/navbar-modal.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function NavbarComponent_div_1_span_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r2.numberOfItemsInBasket, ")");
      }
    }

    function NavbarComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_1_Template_a_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.toggleProductsModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Products");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Designer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About Us");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Contact");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Wish list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Search");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, NavbarComponent_div_1_span_31_Template, 2, 1, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Basket");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.numberOfItemsInBasket != 0);
      }
    }

    function NavbarComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_2_Template_a_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.toggleNavigationModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Search");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Basket");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var CART_KEY = 'local_cartList';

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(modalService, screenService, localStorageService) {
        _classCallCheck(this, NavbarComponent);

        this.modalService = modalService;
        this.screenService = screenService;
        this.localStorageService = localStorageService;
        this.numberOfItemsInBasket = 0;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.screenControl = this.screenService.screenControl;

          if (this.localStorageService.getItemsFromLocalStorage(CART_KEY)) {
            this.numberOfItemsInBasket = this.localStorageService.getItemsFromLocalStorage(CART_KEY).length;
          }
        }
      }, {
        key: "toggleNavigationModal",
        value: function toggleNavigationModal() {
          this.modalService.toggleModal('navigation');
        }
      }, {
        key: "toggleProductsModal",
        value: function toggleProductsModal() {
          this.modalService.toggleModal('products');
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_screen_service__WEBPACK_IMPORTED_MODULE_2__["ScreenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_localStorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 4,
      vars: 2,
      consts: [[1, "fixed-top"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "make-left"], ["href", "#"], [3, "click"], ["aria-hidden", "true", 1, "fa", "fa-chevron-down", "pl-1", "pb-1"], [1, "col", "p-0"], [1, "row", "justify-content-end"], ["aria-hidden", "true", 1, "fa", "fa-search", "pl-2"], [1, "make-right"], ["href", "#", "routerLink", "/basket"], [4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-shopping-basket", "pl-2"], [1, "burger", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-bars", "fa-2x"], [1, "col"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavbarComponent_div_1_Template, 34, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavbarComponent_div_2_Template, 14, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-navbar-modal");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenControl.largeScreen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenControl.smallScreen);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _navbar_modal_navbar_modal_component__WEBPACK_IMPORTED_MODULE_5__["NavbarModalComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]],
      styles: ["nav[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  background: #C6D7CD;\r\n  height: 60px;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  margin: 0px;\r\n  padding: 0px;\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: 1030\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  float: left;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  float: left;\r\n  list-style: none;\r\n  position: relative;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-family: Arial;\r\n  color: #222;\r\n  font-size: 1rem;\r\n  padding: 19.5px 24px;\r\n  text-decoration: none;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: white;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.make-left[_ngcontent-%COMP%] {\r\n  padding-left: 45px !important;\r\n}\r\n\r\n.make-right[_ngcontent-%COMP%] {\r\n  padding-right: 45px !important;\r\n}\r\n\r\n.burger[_ngcontent-%COMP%] {\r\n  padding: 12px 20px 17.5px 30px !important;\r\n  text-decoration: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiw0RUFBNEU7RUFDNUUsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsTUFBTTtFQUNOLFFBQVE7RUFDUixPQUFPO0VBQ1A7QUFDRjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixxQkFBcUI7QUFDdkI7O0FBR0E7RUFDRSx1QkFBdUI7RUFDdkIsNEVBQTRFO0FBQzlFOztBQUdBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQ6ICNDNkQ3Q0Q7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDMwXHJcbn1cclxuXHJcbm5hdiB1bCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbm5hdiB1bCBsaSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbm5hdiBkaXYgYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gIGNvbG9yOiAjMjIyO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBwYWRkaW5nOiAxOS41cHggMjRweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcblxyXG5uYXYgZGl2IGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuXHJcblxyXG4ubWFrZS1sZWZ0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDQ1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1ha2UtcmlnaHQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDQ1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ1cmdlciB7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4IDE3LjVweCAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [{
          type: _services_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]
        }, {
          type: _services_screen_service__WEBPACK_IMPORTED_MODULE_2__["ScreenService"]
        }, {
          type: _services_localStorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/products/active-filters/active-filters.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/components/products/active-filters/active-filters.component.ts ***!
    \********************************************************************************/

  /*! exports provided: ActiveFiltersComponent */

  /***/
  function srcAppComponentsProductsActiveFiltersActiveFiltersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActiveFiltersComponent", function () {
      return ActiveFiltersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_filter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/filter.service */
    "./src/app/services/filter.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["activeColorFilter"];

    function ActiveFiltersComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nincsen sz\xFCr\u0151! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ActiveFiltersComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Akt\xEDv sz\xFCr\u0151k: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ActiveFiltersComponent_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActiveFiltersComponent_ng_container_5_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var color_r4 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.handleActiveColors(color_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var color_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", color_r4, " ");
      }
    }

    var ActiveFiltersComponent = /*#__PURE__*/function () {
      function ActiveFiltersComponent(filterService) {
        _classCallCheck(this, ActiveFiltersComponent);

        this.filterService = filterService;
      }

      _createClass(ActiveFiltersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.filterControl = this.filterService.filterControl;
          this.setActiveFilterExists();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          console.log('change');
          this.setActiveFilterExists();
        }
      }, {
        key: "handleActiveColors",
        value: function handleActiveColors(color) {
          this.filterService.handleActiveColors(color);
          this.setActiveFilterExists();
        }
      }, {
        key: "setActiveFilterExists",
        value: function setActiveFilterExists() {
          if (this.filterControl.activeColors.length < 1) {
            this.activeFilterExists = false;
          } else {
            this.activeFilterExists = true;
          }
        }
      }, {
        key: "trackFilters",
        value: function trackFilters() {
          this.setActiveFilterExists();
        }
      }]);

      return ActiveFiltersComponent;
    }();

    ActiveFiltersComponent.ɵfac = function ActiveFiltersComponent_Factory(t) {
      return new (t || ActiveFiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_filter_service__WEBPACK_IMPORTED_MODULE_1__["FilterService"]));
    };

    ActiveFiltersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ActiveFiltersComponent,
      selectors: [["app-active-filters"]],
      viewQuery: function ActiveFiltersComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.activeColorFilter = _t.first);
        }
      },
      inputs: {
        number: "number"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 6,
      vars: 4,
      consts: [[1, "active-product-filter-container"], ["activeColorFilter", ""], ["class", "active-product-filter-message", 4, "ngIf"], [1, "active-product-filter-items-container"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "active-product-filter-message"], [1, "active-product-filter-item", 3, "click"], [1, "active-product-filter-item-text"], [1, "active-product-filter-item-icon"], ["id", "Capa_1", "enable-background", "new 0 0 386.667 386.667", "height", "0.65rem", "width", "0.65rem", "viewBox", "0 0 386.667 386.667", "xmlns", "http://www.w3.org/2000/svg"], ["d", "m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z"]],
      template: function ActiveFiltersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ActiveFiltersComponent_div_2_Template, 2, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ActiveFiltersComponent_div_3_Template, 2, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ActiveFiltersComponent_ng_container_5_Template, 7, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.activeFilterExists);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeFilterExists);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filterControl.activeColors)("ngForTrackBy", ctx.trackFilters());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".active-product-filter-container[_ngcontent-%COMP%] {\r\n  margin: 8px 0;\r\n  display: flex;\r\n}\r\n\r\n.active-product-filter-message[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex: 0 0 125px;\r\n  align-items: center;\r\n}\r\n\r\n.active-product-filter-items-container[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  flex: 1 0 0;\r\n  flex-wrap: wrap;\r\n  margin: -12px 0 0 -12px;\r\n  width: calc(100% + 12px);\r\n}\r\n\r\n.active-product-filter-items-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\n.active-product-filter-item[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: auto 1rem;\r\n  grid-column-gap: 0.5rem;\r\n  background: beige;\r\n  padding-bottom: 2px;\r\n  margin: 12px 0 0 12px;\r\n}\r\n\r\n.active-product-filter-item-text[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-column: 1 / 2;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-left: 0.4rem;\r\n}\r\n\r\n.active-product-filter-item-icon[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-column: 2 / -1;\r\n  justify-content: end;\r\n  align-items: center;\r\n  padding-top: 0.22rem;\r\n  margin-right: 4px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9hY3RpdmUtZmlsdGVycy9hY3RpdmUtZmlsdGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvYWN0aXZlLWZpbHRlcnMvYWN0aXZlLWZpbHRlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUtcHJvZHVjdC1maWx0ZXItY29udGFpbmVyIHtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5hY3RpdmUtcHJvZHVjdC1maWx0ZXItbWVzc2FnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4OiAwIDAgMTI1cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFjdGl2ZS1wcm9kdWN0LWZpbHRlci1pdGVtcy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZsZXg6IDEgMCAwO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW46IC0xMnB4IDAgMCAtMTJweDtcclxuICB3aWR0aDogY2FsYygxMDAlICsgMTJweCk7XHJcbn1cclxuXHJcbi5hY3RpdmUtcHJvZHVjdC1maWx0ZXItaXRlbXMtY29udGFpbmVyID4gZGl2IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hY3RpdmUtcHJvZHVjdC1maWx0ZXItaXRlbSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMXJlbTtcclxuICBncmlkLWNvbHVtbi1nYXA6IDAuNXJlbTtcclxuICBiYWNrZ3JvdW5kOiBiZWlnZTtcclxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gIG1hcmdpbjogMTJweCAwIDAgMTJweDtcclxufVxyXG5cclxuLmFjdGl2ZS1wcm9kdWN0LWZpbHRlci1pdGVtLXRleHQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjRyZW07XHJcbn1cclxuXHJcbi5hY3RpdmUtcHJvZHVjdC1maWx0ZXItaXRlbS1pY29uIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtY29sdW1uOiAyIC8gLTE7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMC4yMnJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActiveFiltersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-active-filters',
          templateUrl: './active-filters.component.html',
          styleUrls: ['./active-filters.component.css']
        }]
      }], function () {
        return [{
          type: _services_filter_service__WEBPACK_IMPORTED_MODULE_1__["FilterService"]
        }];
      }, {
        number: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        activeColorFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['activeColorFilter']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/products/products-filter/products-filter.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/products/products-filter/products-filter.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: ProductsFilterComponent */

  /***/
  function srcAppComponentsProductsProductsFilterProductsFilterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsFilterComponent", function () {
      return ProductsFilterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/modal.service */
    "./src/app/services/modal.service.ts");
    /* harmony import */


    var _services_screen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/screen.service */
    "./src/app/services/screen.service.ts");
    /* harmony import */


    var _services_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/filter.service */
    "./src/app/services/filter.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["filterControlContainer"];

    function ProductsFilterComponent_div_0_ng_container_8_div_1_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsFilterComponent_div_0_ng_container_8_div_1_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var order_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r11.handleActiveOrders(order_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", order_r8, " ");
      }
    }

    function ProductsFilterComponent_div_0_ng_container_8_div_1_a_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsFilterComponent_div_0_ng_container_8_div_1_a_2_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var order_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r15.handleActiveOrders(order_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", order_r8, " ");
      }
    }

    function ProductsFilterComponent_div_0_ng_container_8_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsFilterComponent_div_0_ng_container_8_div_1_a_1_Template, 3, 1, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductsFilterComponent_div_0_ng_container_8_div_1_a_2_Template, 3, 1, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r8 = ctx.$implicit;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.filterControl.activeOrder !== order_r8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.filterControl.activeOrder === order_r8);
      }
    }

    function ProductsFilterComponent_div_0_ng_container_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsFilterComponent_div_0_ng_container_8_div_1_Template, 3, 2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.filterControl.order);
      }
    }

    function ProductsFilterComponent_div_0_div_15_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsFilterComponent_div_0_div_15_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var color_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r22.handleActiveColors(color_r19);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var color_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](color_r19);
      }
    }

    function ProductsFilterComponent_div_0_div_15_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsFilterComponent_div_0_div_15_div_2_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var color_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r26.handleActiveColors(color_r19);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var color_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](color_r19);
      }
    }

    function ProductsFilterComponent_div_0_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsFilterComponent_div_0_div_15_div_1_Template, 4, 1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductsFilterComponent_div_0_div_15_div_2_Template, 4, 1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var color_r19 = ctx.$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.filterControl.activeColors.includes(color_r19));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.filterControl.activeColors.includes(color_r19));
      }
    }

    function ProductsFilterComponent_div_0_div_26_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsFilterComponent_div_0_div_26_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var designer_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r33.handleActiveDesigners(designer_r30);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var designer_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](designer_r30);
      }
    }

    function ProductsFilterComponent_div_0_div_26_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsFilterComponent_div_0_div_26_div_2_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var designer_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r37.handleActiveDesigners(designer_r30);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var designer_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](designer_r30);
      }
    }

    function ProductsFilterComponent_div_0_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsFilterComponent_div_0_div_26_div_1_Template, 4, 1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductsFilterComponent_div_0_div_26_div_2_Template, 4, 1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var designer_r30 = ctx.$implicit;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.filterControl.activeDesigners.includes(designer_r30));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.filterControl.activeDesigners.includes(designer_r30));
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "show-order-dropdown": a0
      };
    };

    var _c2 = function _c2(a0) {
      return {
        "show-large-dropdown": a0
      };
    };

    function ProductsFilterComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsFilterComponent_div_0_Template_div_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r41.toggleOrderModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsFilterComponent_div_0_Template_div_click_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          return $event.stopPropagation();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductsFilterComponent_div_0_ng_container_8_Template, 2, 1, "ng-container", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsFilterComponent_div_0_Template_div_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r44.toggleColorModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Colour");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsFilterComponent_div_0_Template_div_click_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          return $event.stopPropagation();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProductsFilterComponent_div_0_div_15_Template, 3, 2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsFilterComponent_div_0_Template_div_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r46.clearColorFilters();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "clear");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "filter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsFilterComponent_div_0_Template_div_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r47.toggleDesignModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Design Style");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsFilterComponent_div_0_Template_div_click_25_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          return $event.stopPropagation();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ProductsFilterComponent_div_0_div_26_Template, 3, 2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsFilterComponent_div_0_Template_div_click_28_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r49.clearDesignerFilters();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "clear");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "filter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "GridOne");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "GridTwo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.filterControl.activeOrder, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, ctx_r0.modalControl.control === "order" && ctx_r0.modalControl.showModal && !ctx_r0.screenControl.smallDropdown));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.modalControl.control === "order" && ctx_r0.modalControl.showModal);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx_r0.dropDownMeasurements.top, "px")("width", ctx_r0.dropDownMeasurements.width, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c2, ctx_r0.modalControl.control === "color" && ctx_r0.modalControl.showModal));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.filterControl.colors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx_r0.dropDownMeasurements.top, "px")("width", ctx_r0.dropDownMeasurements.width, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c2, ctx_r0.modalControl.control === "design" && ctx_r0.modalControl.showModal));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.filterControl.designers);
      }
    }

    function ProductsFilterComponent_div_1_div_4_div_6_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", order_r53, " ");
      }
    }

    function ProductsFilterComponent_div_1_div_4_div_6_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsFilterComponent_div_1_div_4_div_6_div_3_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var order_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r57.handleActiveOrders(order_r53);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", order_r53, " ");
      }
    }

    function ProductsFilterComponent_div_1_div_4_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsFilterComponent_div_1_div_4_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

          var order_r53 = ctx.$implicit;

          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r61.handleActiveOrders(order_r53);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductsFilterComponent_div_1_div_4_div_6_div_2_Template, 3, 1, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductsFilterComponent_div_1_div_4_div_6_div_3_Template, 3, 1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r53 = ctx.$implicit;

        var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r52.filterControl.activeOrder.includes(order_r53));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r52.filterControl.activeOrder.includes(order_r53));
      }
    }

    function ProductsFilterComponent_div_1_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsFilterComponent_div_1_div_4_Template_div_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64);

          return $event.stopPropagation();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Rendez\xE9s ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsFilterComponent_div_1_div_4_Template_i_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64);

          var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r65.toggleOrderModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductsFilterComponent_div_1_div_4_div_6_Template, 4, 2, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r50.filterControl.order);
      }
    }

    function ProductsFilterComponent_div_1_div_7_ng_container_8_ng_container_2_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsFilterComponent_div_1_div_7_ng_container_8_ng_container_2_div_2_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var color_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r71.handleActiveColors(color_r68);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var color_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", color_r68, " ");
      }
    }

    function ProductsFilterComponent_div_1_div_7_ng_container_8_ng_container_2_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsFilterComponent_div_1_div_7_ng_container_8_ng_container_2_div_3_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

          var color_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r75.handleActiveColors(color_r68);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var color_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", color_r68, " ");
      }
    }

    function ProductsFilterComponent_div_1_div_7_ng_container_8_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductsFilterComponent_div_1_div_7_ng_container_8_ng_container_2_div_2_Template, 4, 1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductsFilterComponent_div_1_div_7_ng_container_8_ng_container_2_div_3_Template, 5, 1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var color_r68 = ctx.$implicit;

        var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r67.filterControl.activeColors.includes(color_r68));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r67.filterControl.activeColors.includes(color_r68));
      }
    }

    function ProductsFilterComponent_div_1_div_7_ng_container_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductsFilterComponent_div_1_div_7_ng_container_8_ng_container_2_Template, 4, 2, "ng-container", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r66.filterControl.colors);
      }
    }

    function ProductsFilterComponent_div_1_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsFilterComponent_div_1_div_7_Template_div_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80);

          return $event.stopPropagation();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Rendez\xE9s ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsFilterComponent_div_1_div_7_Template_i_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80);

          var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r81.toggleFilterModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsFilterComponent_div_1_div_7_Template_div_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80);

          var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r82.toggleSmallColorFilter();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sz\xEDnek");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductsFilterComponent_div_1_div_7_ng_container_8_Template, 3, 1, "ng-container", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Designerek");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r51.showSmallColorFilter);
      }
    }

    function ProductsFilterComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsFilterComponent_div_1_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84);

          var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r83.toggleOrderModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Sorrend ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductsFilterComponent_div_1_div_4_Template, 7, 1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsFilterComponent_div_1_Template_div_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84);

          var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r85.toggleFilterModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Sz\xFCr\xE9s ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProductsFilterComponent_div_1_div_7_Template, 11, 1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.modalControl.control === "order" && ctx_r1.modalControl.showModal);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.modalControl.control === "filter" && ctx_r1.modalControl.showModal);
      }
    }

    var ProductsFilterComponent = /*#__PURE__*/function () {
      function ProductsFilterComponent(modalService, screenService, filterService) {
        _classCallCheck(this, ProductsFilterComponent);

        this.modalService = modalService;
        this.screenService = screenService;
        this.filterService = filterService;
        this.dropDownMeasurements = {
          top: 0,
          width: 0
        };
        this.productContentScreenAttributes = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ProductsFilterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.modalControl = this.modalService.modalControl;
          this.filterControl = this.filterService.filterControl;
          this.screenControl = this.screenService.screenControl;
          this.filterControl.activeOrder = this.filterService.filterControl.order[0];
        } // TODO be le kell rakni egy plusz feltételt amikor pici dropdown van akkor más mutason

      }, {
        key: "toggleOrderModal",
        value: function toggleOrderModal() {
          this.modalService.toggleModal('order');

          if (this.modalControl.control === 'order' && this.modalControl.showModal && this.screenControl.smallDropdown) {}
        }
      }, {
        key: "toggleColorModal",
        value: function toggleColorModal() {
          this.productContentScreenAttributes.emit('show');
          this.dropDownMeasurements = this.getTopOfSetAndWidth();
          this.dropDownMeasurements.top += 6;
          this.modalService.toggleModal('color');
        }
      }, {
        key: "toggleDesignModal",
        value: function toggleDesignModal() {
          this.productContentScreenAttributes.emit('show');
          this.dropDownMeasurements = this.getTopOfSetAndWidth();
          this.dropDownMeasurements.top += 6;
          this.modalService.toggleModal('design');
        }
      }, {
        key: "toggleFilterModal",
        value: function toggleFilterModal() {
          this.modalService.toggleModal('filter');

          if (this.filterService.isActiveColorFiltersEmpty()) {
            this.showSmallColorFilter = false;
          } else {
            this.showSmallColorFilter = true;
          }
        }
      }, {
        key: "handleActiveOrders",
        value: function handleActiveOrders(order) {
          this.filterService.handleActiveOrder(order);
        }
      }, {
        key: "handleActiveColors",
        value: function handleActiveColors(color) {
          this.filterService.handleActiveColors(color);
        }
      }, {
        key: "handleActiveDesigners",
        value: function handleActiveDesigners(designer) {
          this.filterService.handleActiveDesigners(designer);
        }
      }, {
        key: "clearColorFilters",
        value: function clearColorFilters() {
          this.filterService.clearColorFilters();
        }
      }, {
        key: "clearDesignerFilters",
        value: function clearDesignerFilters() {
          this.filterService.clearDesignerFilters();
        }
      }, {
        key: "toggleSmallColorFilter",
        value: function toggleSmallColorFilter() {
          this.showSmallColorFilter = !this.showSmallColorFilter;
        }
      }, {
        key: "getTopOfSetAndWidth",
        value: function getTopOfSetAndWidth() {
          var topOffset = this.filterControlContainer.nativeElement.offsetTop + this.filterControlContainer.nativeElement.offsetHeight;
          var contentWidth = this.filterControlContainer.nativeElement.offsetWidth;
          return {
            top: topOffset,
            width: contentWidth
          };
        }
      }]);

      return ProductsFilterComponent;
    }();

    ProductsFilterComponent.ɵfac = function ProductsFilterComponent_Factory(t) {
      return new (t || ProductsFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_screen_service__WEBPACK_IMPORTED_MODULE_2__["ScreenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_filter_service__WEBPACK_IMPORTED_MODULE_3__["FilterService"]));
    };

    ProductsFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductsFilterComponent,
      selectors: [["app-products-filter"]],
      viewQuery: function ProductsFilterComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.filterControlContainer = _t.first);
        }
      },
      outputs: {
        productContentScreenAttributes: "productContentScreenAttributes"
      },
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], [1, "filter-container"], ["filterControlContainer", ""], [1, "filter-element", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-chevron-down"], [1, "dropdown-content", 3, "ngClass", "click"], ["colourElement", ""], [4, "ngFor", "ngForOf"], [1, "color-dropdown-control-area"], [1, "color-button", 3, "click"], [1, "color-button"], [1, "push", "filter-element"], [1, "filter-element"], ["class", "custom", 3, "click", 4, "ngIf"], [1, "custom", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-circle-thin"], ["aria-hidden", "true", 1, "fa", "fa-circle"], ["class", "color-dropdown-item", 3, "click", 4, "ngIf"], [1, "color-dropdown-item", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-square-o"], ["aria-hidden", "true", 1, "fa", "fa-check-square"], [1, "small-filter-container"], [1, "small-filter-item", "small-border-right", 3, "click"], ["class", "small-order-dropdown-container", 3, "click", 4, "ngIf"], [1, "small-filter-item", 3, "click"], ["class", "small-filter-dropdown-container", 3, "click", 4, "ngIf"], [1, "small-order-dropdown-container", 3, "click"], [1, "small-header-container"], [1, "small-header-text"], [1, "small-header-exit"], ["aria-hidden", "true", 1, "fa", "fa-times", 3, "click"], ["class", "small-custom", 3, "click", 4, "ngFor", "ngForOf"], [1, "small-custom", 3, "click"], [3, "click", 4, "ngIf"], [3, "click"], [1, "small-filter-dropdown-container", 3, "click"], [1, "small-color-picker", 3, "click"], [1, "small-color-picker"], [1, "small-color-items-container"], [1, "small-color-item"], ["id", "Capa_1", "enable-background", "new 0 0 482.239 482.239", "height", "1.25rem", "viewBox", "0 0 482.239 482.239", "width", "1.25rem", "xmlns", "http://www.w3.org/2000/svg", 2, "padding-bottom", "0.25rem"], ["d", "m465.016 0h-447.793c-9.52 0-17.223 7.703-17.223 17.223v447.793c0 9.52 7.703 17.223 17.223 17.223h447.793c9.52 0 17.223-7.703 17.223-17.223v-447.793c0-9.52-7.703-17.223-17.223-17.223zm-17.223 447.793h-413.347v-413.347h413.348v413.347z"], ["id", "Capa_1", "enable-background", "new 0 0 451.111 451.111", "height", "1.25rem", "viewBox", "0 0 451.111 451.111", "width", "1.25rem", "xmlns", "http://www.w3.org/2000/svg", 2, "padding-bottom", "0.25rem"], ["d", "m361.116 183.893-45.564-45.564-122.219 122.218-57.774-57.774-45.564 45.564 103.338 103.338z"], ["d", "m0 0v451.111h451.111v-451.111zm386.667 386.667h-322.223v-322.223h322.222v322.223z"]],
      template: function ProductsFilterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductsFilterComponent_div_0_Template, 38, 21, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsFilterComponent_div_1_Template, 8, 2, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenControl.largeScreen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenControl.smallScreen);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: [".filter-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 3rem;\r\n  flex-direction: row;\r\n}\r\n\r\n.filter-element[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  font-family: Arial, fantasy;\r\n  color: #222;\r\n  text-decoration: none;\r\n  font-size: 1.2rem;\r\n}\r\n\r\ni[_ngcontent-%COMP%] {\r\n  padding-left: 0.5rem;\r\n  padding-right: 0.5rem;\r\n}\r\n\r\n.push[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: absolute;\r\n  z-index: 1;\r\n}\r\n\r\n.show-order-dropdown[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-top: 1rem;\r\n  width: 160px;\r\n}\r\n\r\n.show-order-dropdown[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.show-large-dropdown[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(6, 1fr);\r\n  grid-column-gap: 1vw;\r\n  grid-row-gap: 1vh;\r\n  background-color: #f1f1f1;\r\n  padding-left: 4vw;\r\n  padding-right: 4vw;\r\n  padding-top: 1.5vh;\r\n}\r\n\r\n.color-dropdown-control-area[_ngcontent-%COMP%] {\r\n  grid-column: 1 / -1;\r\n  padding-top: 1rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n.color-dropdown-item[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\r\n\r\n.color-button[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 7rem;\r\n  line-height: 3rem;\r\n  cursor: pointer;\r\n  background: darkslategrey;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n}\r\n\r\n.show-design-dropdown[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #f1f1f1;\r\n  min-width: 160px;\r\n}\r\n\r\n.custom[_ngcontent-%COMP%] {\r\n  padding-top: 7px;\r\n  font-family: Arial, fantasy;\r\n  color: #222;\r\n  text-decoration: none;\r\n  font-size: 1.2rem;\r\n  width: 160px;\r\n  display: block;\r\n  background: yellowgreen;\r\n}\r\n\r\n.custom[_ngcontent-%COMP%]:hover {\r\n  background: lightgrey;\r\n}\r\n\r\n\r\n\r\n.small-filter-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-top: 2rem;\r\n  padding-bottom: 0.5rem;\r\n  border-bottom: #222222 solid 2px;\r\n}\r\n\r\n.small-filter-item[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-grow: 1;\r\n  cursor: pointer;\r\n  position: relative;\r\n\r\n}\r\n\r\n.small-border-right[_ngcontent-%COMP%] {\r\n  border-right: solid black 2px;\r\n}\r\n\r\n.small-order-dropdown-container[_ngcontent-%COMP%] {\r\n  flex: 1 0 auto;\r\n  display: flex;\r\n  position: fixed;\r\n  flex-direction: column;\r\n  z-index: 100;\r\n  top: 20%;\r\n  background: white;\r\n  width: 85vw;\r\n  box-shadow: 10px 10px 44px -13px rgba(0, 0, 0, 0.63);\r\n  max-height: 80vh;\r\n  overflow: auto;\r\n}\r\n\r\n@media all and (min-width: 550px) and (max-width: 999px) {\r\n  .small-custom[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex: 1 0 auto;\r\n    padding-left: 35vw;\r\n    border-bottom: solid gray 0.1em;\r\n    font-size: 1.25rem;\r\n    height: 3rem;\r\n    align-items: center;\r\n  }\r\n\r\n\r\n  .small-custom[_ngcontent-%COMP%]:hover {\r\n    background: lightgray;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .small-header-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    border-bottom: solid gray 0.1em;\r\n  }\r\n\r\n  .small-header-text[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex: 1 0 0;\r\n    padding-left: 35vw;\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .small-header-exit[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    font-size: 2rem;\r\n    align-items: center;\r\n    padding-right: 0.5em;\r\n    cursor: pointer;\r\n\r\n  }\r\n}\r\n\r\n@media all and (max-width: 549px) {\r\n  .small-custom[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex: 1 0 auto;\r\n    padding-left: 2vw;\r\n    border-bottom: solid gray 0.1em;\r\n    height: 3rem;\r\n    font-size: 1.25rem;\r\n    align-items: center;\r\n  }\r\n\r\n  .small-custom[_ngcontent-%COMP%]:hover {\r\n    background: lightgray;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .small-header-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    border-bottom: solid gray 0.1em;\r\n  }\r\n\r\n  .small-header-text[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex: 1 0 0;\r\n    padding-left: 2vw;\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .small-header-exit[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    font-size: 2rem;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: pointer;\r\n  }\r\n\r\n}\r\n\r\n.small-filter-dropdown-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  position: fixed;\r\n  flex-flow: column;\r\n  flex: 1 0 auto;\r\n  z-index: 100;\r\n  top: 20%;\r\n  background: white;\r\n  min-height: 75vh;\r\n  max-height: 75vh;\r\n  width: 85vw;\r\n  overflow: auto;\r\n  box-shadow: 10px 10px 44px -13px rgba(0, 0, 0, 0.63);\r\n}\r\n\r\n.small-color-picker[_ngcontent-%COMP%]:hover {\r\n  background: lightgray;\r\n}\r\n\r\n.small-color-picker[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex: 1 0 auto;\r\n  max-height: 4rem;\r\n  min-height: 4rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 1.25rem;\r\n  border-bottom: solid 1px gray;\r\n  border-top: solid 1px gray;\r\n}\r\n\r\n@media all and (min-width: 500px) and (max-width: 999px) {\r\n\r\n\r\n  .small-color-items-container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-areas: \"a b c\";\r\n    grid-row-gap: 1em;\r\n    grid-column-gap: 1em;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-top: 1em;\r\n    padding-bottom: 1em;\r\n    margin-left: 10vw;\r\n    margin-right: 10vw;\r\n  }\r\n\r\n  .small-color-item[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    align-items: center;\r\n    font-size: 1.25rem;\r\n  }\r\n}\r\n\r\n@media all and (max-width: 499px) {\r\n  .small-color-items-container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-areas: \"a b\";\r\n    grid-row-gap: 1em;\r\n    grid-column-gap: 1em;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-top: 1em;\r\n    padding-bottom: 1em;\r\n    margin-left: 10vw;\r\n    margin-right: 10vw;\r\n  }\r\n\r\n  .small-color-item[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    align-items: center;\r\n    font-size: 1.25rem;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0cy1maWx0ZXIvcHJvZHVjdHMtZmlsdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFHQTtFQUNFLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsY0FBYztFQUNkLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQSxvREFBb0Q7O0FBQ3BEO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGdDQUFnQztBQUNsQzs7QUFHQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUdBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLFdBQVc7RUFHWCxvREFBb0Q7RUFDcEQsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjs7O0VBR0E7SUFDRSxxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7SUFDYiwrQkFBK0I7RUFDakM7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGVBQWU7O0VBRWpCO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLGFBQWE7SUFDYixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLGFBQWE7SUFDYixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtFQUNqQjs7QUFFRjs7QUFHQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxZQUFZO0VBQ1osUUFBUTtFQUNSLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxjQUFjO0VBR2Qsb0RBQW9EO0FBQ3REOztBQUdBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QiwwQkFBMEI7QUFDNUI7O0FBRUE7OztFQUdFO0lBQ0UsYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7QUFDRjs7QUFHQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7O0FBRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3RzLWZpbHRlci9wcm9kdWN0cy1maWx0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXItY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogM3JlbTtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uZmlsdGVyLWVsZW1lbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuXHJcbmEge1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgZmFudGFzeTtcclxuICBjb2xvcjogIzIyMjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbmkge1xyXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcclxufVxyXG5cclxuLnB1c2gge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnNob3ctb3JkZXItZHJvcGRvd24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICB3aWR0aDogMTYwcHg7XHJcbn1cclxuXHJcbi5zaG93LW9yZGVyLWRyb3Bkb3duIGRpdiB7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuLnNob3ctbGFyZ2UtZHJvcGRvd24ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcclxuICBncmlkLWNvbHVtbi1nYXA6IDF2dztcclxuICBncmlkLXJvdy1nYXA6IDF2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIHBhZGRpbmctbGVmdDogNHZ3O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDR2dztcclxuICBwYWRkaW5nLXRvcDogMS41dmg7XHJcbn1cclxuXHJcbi5jb2xvci1kcm9wZG93bi1jb250cm9sLWFyZWEge1xyXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XHJcbiAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5jb2xvci1kcm9wZG93bi1pdGVtIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5jb2xvci1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA3cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiBkYXJrc2xhdGVncmV5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uc2hvdy1kZXNpZ24tZHJvcGRvd24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIG1pbi13aWR0aDogMTYwcHg7XHJcbn1cclxuXHJcblxyXG4uY3VzdG9tIHtcclxuICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgZmFudGFzeTtcclxuICBjb2xvcjogIzIyMjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IHllbGxvd2dyZWVuO1xyXG59XHJcblxyXG4uY3VzdG9tOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XHJcbn1cclxuXHJcbi8qICAgICAgICAgICAgICAgICAgc21hbGwgc2V0dGluZ3MgICAgICAgICAgICAgICAgICovXHJcbi5zbWFsbC1maWx0ZXItY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogIzIyMjIyMiBzb2xpZCAycHg7XHJcbn1cclxuXHJcblxyXG4uc21hbGwtZmlsdGVyLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG59XHJcblxyXG4uc21hbGwtYm9yZGVyLXJpZ2h0IHtcclxuICBib3JkZXItcmlnaHQ6IHNvbGlkIGJsYWNrIDJweDtcclxufVxyXG5cclxuXHJcbi5zbWFsbC1vcmRlci1kcm9wZG93bi1jb250YWluZXIge1xyXG4gIGZsZXg6IDEgMCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIHRvcDogMjAlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHdpZHRoOiA4NXZ3O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDQ0cHggLTEzcHggcmdiYSgwLCAwLCAwLCAwLjYzKTtcclxuICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCA0NHB4IC0xM3B4IHJnYmEoMCwgMCwgMCwgMC42Myk7XHJcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDQ0cHggLTEzcHggcmdiYSgwLCAwLCAwLCAwLjYzKTtcclxuICBtYXgtaGVpZ2h0OiA4MHZoO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA1NTBweCkgYW5kIChtYXgtd2lkdGg6IDk5OXB4KSB7XHJcbiAgLnNtYWxsLWN1c3RvbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMSAwIGF1dG87XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDM1dnc7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCBncmF5IDAuMWVtO1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG5cclxuICAuc21hbGwtY3VzdG9tOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5zbWFsbC1oZWFkZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCBncmF5IDAuMWVtO1xyXG4gIH1cclxuXHJcbiAgLnNtYWxsLWhlYWRlci10ZXh0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxIDAgMDtcclxuICAgIHBhZGRpbmctbGVmdDogMzV2dztcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcblxyXG4gIC5zbWFsbC1oZWFkZXItZXhpdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNWVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1NDlweCkge1xyXG4gIC5zbWFsbC1jdXN0b20ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDEgMCBhdXRvO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAydnc7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCBncmF5IDAuMWVtO1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5zbWFsbC1jdXN0b206aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLnNtYWxsLWhlYWRlci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIGdyYXkgMC4xZW07XHJcbiAgfVxyXG5cclxuICAuc21hbGwtaGVhZGVyLXRleHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDEgMCAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAydnc7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG5cclxuICAuc21hbGwtaGVhZGVyLWV4aXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuLnNtYWxsLWZpbHRlci1kcm9wZG93bi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGZsZXg6IDEgMCBhdXRvO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICB0b3A6IDIwJTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBtaW4taGVpZ2h0OiA3NXZoO1xyXG4gIG1heC1oZWlnaHQ6IDc1dmg7XHJcbiAgd2lkdGg6IDg1dnc7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggNDRweCAtMTNweCByZ2JhKDAsIDAsIDAsIDAuNjMpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDQ0cHggLTEzcHggcmdiYSgwLCAwLCAwLCAwLjYzKTtcclxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggNDRweCAtMTNweCByZ2JhKDAsIDAsIDAsIDAuNjMpO1xyXG59XHJcblxyXG5cclxuLnNtYWxsLWNvbG9yLXBpY2tlcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xyXG59XHJcblxyXG4uc21hbGwtY29sb3ItcGlja2VyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDEgMCBhdXRvO1xyXG4gIG1heC1oZWlnaHQ6IDRyZW07XHJcbiAgbWluLWhlaWdodDogNHJlbTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggZ3JheTtcclxuICBib3JkZXItdG9wOiBzb2xpZCAxcHggZ3JheTtcclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNTAwcHgpIGFuZCAobWF4LXdpZHRoOiA5OTlweCkge1xyXG5cclxuXHJcbiAgLnNtYWxsLWNvbG9yLWl0ZW1zLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJhIGIgY1wiO1xyXG4gICAgZ3JpZC1yb3ctZ2FwOiAxZW07XHJcbiAgICBncmlkLWNvbHVtbi1nYXA6IDFlbTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwdnc7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwdnc7XHJcbiAgfVxyXG5cclxuICAuc21hbGwtY29sb3ItaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA0OTlweCkge1xyXG4gIC5zbWFsbC1jb2xvci1pdGVtcy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiYSBiXCI7XHJcbiAgICBncmlkLXJvdy1nYXA6IDFlbTtcclxuICAgIGdyaWQtY29sdW1uLWdhcDogMWVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMTB2dztcclxuICAgIG1hcmdpbi1yaWdodDogMTB2dztcclxuICB9XHJcblxyXG4gIC5zbWFsbC1jb2xvci1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-products-filter',
          templateUrl: './products-filter.component.html',
          styleUrls: ['./products-filter.component.css']
        }]
      }], function () {
        return [{
          type: _services_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]
        }, {
          type: _services_screen_service__WEBPACK_IMPORTED_MODULE_2__["ScreenService"]
        }, {
          type: _services_filter_service__WEBPACK_IMPORTED_MODULE_3__["FilterService"]
        }];
      }, {
        productContentScreenAttributes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        filterControlContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['filterControlContainer']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/products/products-header/products-header.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/products/products-header/products-header.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: ProductsHeaderComponent */

  /***/
  function srcAppComponentsProductsProductsHeaderProductsHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsHeaderComponent", function () {
      return ProductsHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_screen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/screen.service */
    "./src/app/services/screen.service.ts");
    /* harmony import */


    var _services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/modal.service */
    "./src/app/services/modal.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProductsHeaderComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "/");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Wallpaper");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "/");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "ByValami");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "/");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Blue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ProductsHeaderComponent = /*#__PURE__*/function () {
      function ProductsHeaderComponent(screenService, modalService) {
        _classCallCheck(this, ProductsHeaderComponent);

        this.screenService = screenService;
        this.modalService = modalService;
      } // TODO get the desc from a variable
      // TODO get the nav elements on the top from variable


      _createClass(ProductsHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.screenControl = this.screenService.screenControl;
        }
      }]);

      return ProductsHeaderComponent;
    }();

    ProductsHeaderComponent.ɵfac = function ProductsHeaderComponent_Factory(t) {
      return new (t || ProductsHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_screen_service__WEBPACK_IMPORTED_MODULE_1__["ScreenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]));
    };

    ProductsHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductsHeaderComponent,
      selectors: [["app-products-header"]],
      decls: 17,
      vars: 1,
      consts: [["class", "nav-container", 4, "ngIf"], [1, "desc-container"], [1, "grid-container"], [1, "grid-left-line"], [1, "grid-content"], [1, "grid-right-line"], [1, "long-desc"], [1, "nav-container"], ["href", ""]],
      template: function ProductsHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductsHeaderComponent_div_0_Template, 22, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "BRICK & WOOD EFFECT WALLPAPER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores assumenda distinctio impedit laboriosam libero qui quos unde voluptas voluptate? At cupiditate fuga magni necessitatibus possimus quia rem tenetur, voluptatem!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Amet animi aspernatur atque consequuntur corporis cumque dolor ea error esse ex fuga fugiat fugit hic incidunt inventore iure non nulla officia possimus provident quibusdam, repellat sint sit tenetur veniam.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Accusantium commodi consequatur cumque dolor dolore doloremque ducimus explicabo facere fugit incidunt ipsam, ipsum minima molestiae necessitatibus nemo odio officiis porro quam quod quos ratione reiciendis rerum sint tempora voluptate.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenControl.largeScreen);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".nav-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n  font-family: Arial, fantasy;\r\n  color: #222;\r\n  text-decoration: none;\r\n  font-size: 1rem;\r\n}\r\n\r\nspan[_ngcontent-%COMP%]{\r\n  font-family: Arial, fantasy;\r\n  color: #222;\r\n  font-size: 1rem;\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n}\r\n\r\n.desc-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  text-align: center;\r\n}\r\n\r\n.grid-container[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  height: 100%;\r\n  width: 100%;\r\n  grid-template-columns: 1fr minmax(auto, auto) 1fr;\r\n  grid-template-rows: 1fr 1fr;\r\n  grid-column-gap: 3rem;\r\n  grid-template-areas: \"left-line content right-line\"\r\n                        \". content .\";\r\n}\r\n\r\n.grid-content[_ngcontent-%COMP%] {\r\n  grid-area: content;\r\n}\r\n\r\n.grid-left-line[_ngcontent-%COMP%] {\r\n  grid-area: left-line;\r\n  border-bottom: 2px solid black;\r\n}\r\n\r\n.grid-right-line[_ngcontent-%COMP%] {\r\n  grid-area: right-line;\r\n  border-bottom: 2px solid black;\r\n}\r\n\r\n.long-desc[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  padding-left: 7em;\r\n  padding-right: 7em;\r\n}\r\n\r\n@media screen and (max-width: 1450px) {\r\n  .long-desc[_ngcontent-%COMP%] {\r\n    padding-left: 2em;\r\n    padding-right: 2em;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0cy1oZWFkZXIvcHJvZHVjdHMtaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7RUFDWCxpREFBaUQ7RUFDakQsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQjtxQ0FDbUM7QUFDckM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDhCQUE4QjtBQUNoQzs7QUFHQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3RzLWhlYWRlci9wcm9kdWN0cy1oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuYXtcclxuICBmb250LWZhbWlseTogQXJpYWwsIGZhbnRhc3k7XHJcbiAgY29sb3I6ICMyMjI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuc3BhbntcclxuICBmb250LWZhbWlseTogQXJpYWwsIGZhbnRhc3k7XHJcbiAgY29sb3I6ICMyMjI7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4uZGVzYy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbm1heChhdXRvLCBhdXRvKSAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xyXG4gIGdyaWQtY29sdW1uLWdhcDogM3JlbTtcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImxlZnQtbGluZSBjb250ZW50IHJpZ2h0LWxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi4gY29udGVudCAuXCI7XHJcbn1cclxuXHJcbi5ncmlkLWNvbnRlbnQge1xyXG4gIGdyaWQtYXJlYTogY29udGVudDtcclxufVxyXG5cclxuLmdyaWQtbGVmdC1saW5lIHtcclxuICBncmlkLWFyZWE6IGxlZnQtbGluZTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5ncmlkLXJpZ2h0LWxpbmUge1xyXG4gIGdyaWQtYXJlYTogcmlnaHQtbGluZTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcblxyXG4ubG9uZy1kZXNjIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiA3ZW07XHJcbiAgcGFkZGluZy1yaWdodDogN2VtO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDUwcHgpIHtcclxuICAubG9uZy1kZXNjIHtcclxuICAgIHBhZGRpbmctbGVmdDogMmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-products-header',
          templateUrl: './products-header.component.html',
          styleUrls: ['./products-header.component.css']
        }]
      }], function () {
        return [{
          type: _services_screen_service__WEBPACK_IMPORTED_MODULE_1__["ScreenService"]
        }, {
          type: _services_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/products/products-list/product/product.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/components/products/products-list/product/product.component.ts ***!
    \********************************************************************************/

  /*! exports provided: ProductComponent */

  /***/
  function srcAppComponentsProductsProductsListProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProductComponent = /*#__PURE__*/function () {
      function ProductComponent() {
        _classCallCheck(this, ProductComponent);
      }

      _createClass(ProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductComponent;
    }();

    ProductComponent.ɵfac = function ProductComponent_Factory(t) {
      return new (t || ProductComponent)();
    };

    ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductComponent,
      selectors: [["app-product"]],
      decls: 2,
      vars: 0,
      template: function ProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "product works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdHMtbGlzdC9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product',
          templateUrl: './product.component.html',
          styleUrls: ['./product.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/products/products-list/products-list.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/products/products-list/products-list.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ProductsListComponent */

  /***/
  function srcAppComponentsProductsProductsListProductsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsListComponent", function () {
      return ProductsListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProductsListComponent = /*#__PURE__*/function () {
      function ProductsListComponent() {
        _classCallCheck(this, ProductsListComponent);
      }

      _createClass(ProductsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductsListComponent;
    }();

    ProductsListComponent.ɵfac = function ProductsListComponent_Factory(t) {
      return new (t || ProductsListComponent)();
    };

    ProductsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductsListComponent,
      selectors: [["app-products-list"]],
      decls: 21,
      vars: 0,
      consts: [[1, "product-list-container"], [1, "product-list-card-container"], [1, "product-list-card-img"], [1, "product-list-card-text"]],
      template: function ProductsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " text ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " text ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " text ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " text ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " text ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".product-list-container[_ngcontent-%COMP%] {\r\n  margin: 2em 0;\r\n  display: grid;\r\n  justify-content: space-evenly;\r\n  grid-template-columns: repeat(auto-fill, 260px);\r\n  grid-auto-flow: row;\r\n  grid-column-gap: 1em;\r\n  grid-row-gap: 2em;\r\n}\r\n\r\n.product-list-card-container[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  height: 25vw;\r\n  min-height: 350px;\r\n  grid-template-rows: 2.5fr 1fr;\r\n  background-color: beige;\r\n}\r\n\r\n.product-list-card-img[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-row: 1 / 2;\r\n  background: url('JOURNEY BEYOND CAM 11.jpg') no-repeat center center;\r\n  background-size: cover;\r\n}\r\n\r\n.product-list-card-text[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-row: 2 / 3;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n@media all and (max-width: 599px) {\r\n  .product-list-container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-auto-flow: row;\r\n    grid-column-gap: 1em;\r\n    grid-row-gap: 2em;\r\n  }\r\n\r\n  .product-list-card-container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    height: 25vw;\r\n    min-height: 300px;\r\n    grid-template-rows: 2.5fr 1fr;\r\n    background-color: beige;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0cy1saXN0L3Byb2R1Y3RzLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLCtDQUErQztFQUMvQyxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLG9FQUErRTtFQUMvRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsdUJBQXVCO0VBQ3pCOztBQUVGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0cy1saXN0L3Byb2R1Y3RzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWxpc3QtY29udGFpbmVyIHtcclxuICBtYXJnaW46IDJlbSAwO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCAyNjBweCk7XHJcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcclxuICBncmlkLWNvbHVtbi1nYXA6IDFlbTtcclxuICBncmlkLXJvdy1nYXA6IDJlbTtcclxufVxyXG5cclxuLnByb2R1Y3QtbGlzdC1jYXJkLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBoZWlnaHQ6IDI1dnc7XHJcbiAgbWluLWhlaWdodDogMzUwcHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyLjVmciAxZnI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWxpc3QtY2FyZC1pbWcge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC1yb3c6IDEgLyAyO1xyXG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvSk9VUk5FWSBCRVlPTkQgQ0FNIDExLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4ucHJvZHVjdC1saXN0LWNhcmQtdGV4dCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXJvdzogMiAvIDM7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcclxuICAucHJvZHVjdC1saXN0LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcclxuICAgIGdyaWQtY29sdW1uLWdhcDogMWVtO1xyXG4gICAgZ3JpZC1yb3ctZ2FwOiAyZW07XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1saXN0LWNhcmQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBoZWlnaHQ6IDI1dnc7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMi41ZnIgMWZyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-products-list',
          templateUrl: './products-list.component.html',
          styleUrls: ['./products-list.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/products/products-modal/products-modal.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/components/products/products-modal/products-modal.component.ts ***!
    \********************************************************************************/

  /*! exports provided: ProductsModalComponent */

  /***/
  function srcAppComponentsProductsProductsModalProductsModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsModalComponent", function () {
      return ProductsModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/modal.service */
    "./src/app/services/modal.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "show": a0
      };
    };

    var ProductsModalComponent = /*#__PURE__*/function () {
      function ProductsModalComponent(modalService) {
        _classCallCheck(this, ProductsModalComponent);

        this.modalService = modalService;
        this.activeOrders = [];
      }

      _createClass(ProductsModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.modalControl = this.modalService.modalControl;
        } //TODO ez itt nem jó helyen van a filter ben kéne lennie valahogy átt kell oda rakni akár egy filter obj is belehet vezetni és annak atributum ként  oda adni

      }, {
        key: "handleActiveOrders",
        value: function handleActiveOrders(order) {
          this.modalService.keepModalOnScreen();

          if (!this.activeOrders.includes(order)) {
            this.activeOrders.push(order);
          } else {
            this.activeOrders = this.activeOrders.filter(function (activeOrder) {
              return activeOrder != order;
            });
          }
        }
      }, {
        key: "keepModalOnScreen",
        value: function keepModalOnScreen() {
          this.modalService.keepModalOnScreen();
        }
      }]);

      return ProductsModalComponent;
    }();

    ProductsModalComponent.ɵfac = function ProductsModalComponent_Factory(t) {
      return new (t || ProductsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]));
    };

    ProductsModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductsModalComponent,
      selectors: [["app-products-modal"]],
      inputs: {
        modalContent: "modalContent"
      },
      decls: 14,
      vars: 6,
      consts: [[1, "dropdown-content", 3, "ngClass", "click"]],
      template: function ProductsModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsModalComponent_Template_div_click_0_listener() {
            return ctx.keepModalOnScreen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Link 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Link 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Link 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsModalComponent_Template_div_click_7_listener() {
            return ctx.keepModalOnScreen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Link 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Link 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Link 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.modalControl.control === "order" && ctx.modalControl.showModal));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.modalControl.control === "color" && ctx.modalControl.showModal));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: [".products-modal-container-anti[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.products-modal-order-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  width: 175px;\r\n  flex-direction: column;\r\n\r\n}\r\n\r\n.products-modal-color-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  width: 175px;\r\n  flex-direction: column;\r\n  position: absolute;\r\n\r\n}\r\n\r\n.order-element-active[_ngcontent-%COMP%] {\r\n  background: #555555;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] {\r\n  flex-direction: row;\r\n  background: greenyellow;\r\n  width: 100%;\r\n  text-align: center;\r\n\r\n}\r\n\r\ni[_ngcontent-%COMP%] {\r\n   padding-right: 0.5rem;\r\n }\r\n\r\na[_ngcontent-%COMP%] {\r\n  padding-top: 7px;\r\n  font-family: Arial, fantasy;\r\n  color: #222;\r\n  text-decoration: none;\r\n  font-size: 1.2rem;\r\n  display: inline-block;\r\n  width: 100%;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  background: lightgrey;\r\n\r\n}\r\n\r\n.dropdown-content[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #f1f1f1;\r\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\r\n  z-index: 1;\r\n}\r\n\r\n.show[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  width: 175px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0cy1tb2RhbC9wcm9kdWN0cy1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixzQkFBc0I7O0FBRXhCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCOztBQUVwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFHQTtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGtCQUFrQjs7QUFFcEI7O0FBRUE7R0FDRyxxQkFBcUI7Q0FDdkI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7O0FBRXZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsK0NBQStDO0VBQy9DLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3RzLW1vZGFsL3Byb2R1Y3RzLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdHMtbW9kYWwtY29udGFpbmVyLWFudGkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5wcm9kdWN0cy1tb2RhbC1vcmRlci1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDE3NXB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG59XHJcblxyXG4ucHJvZHVjdHMtbW9kYWwtY29sb3ItY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxNzVweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbn1cclxuXHJcbi5vcmRlci1lbGVtZW50LWFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogIzU1NTU1NTtcclxufVxyXG5cclxuXHJcbmRpdiB7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBiYWNrZ3JvdW5kOiBncmVlbnllbGxvdztcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG5pIHtcclxuICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xyXG4gfVxyXG5cclxuYSB7XHJcbiAgcGFkZGluZy10b3A6IDdweDtcclxuICBmb250LWZhbWlseTogQXJpYWwsIGZhbnRhc3k7XHJcbiAgY29sb3I6ICMyMjI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xyXG5cclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnNob3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDE3NXB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-products-modal',
          templateUrl: './products-modal.component.html',
          styleUrls: ['./products-modal.component.css']
        }]
      }], function () {
        return [{
          type: _services_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]
        }];
      }, {
        modalContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/products/products.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/products/products.component.ts ***!
    \***********************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppComponentsProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_screen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/screen.service */
    "./src/app/services/screen.service.ts");
    /* harmony import */


    var _products_header_products_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./products-header/products-header.component */
    "./src/app/components/products/products-header/products-header.component.ts");
    /* harmony import */


    var _products_filter_products_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./products-filter/products-filter.component */
    "./src/app/components/products/products-filter/products-filter.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./products-list/products-list.component */
    "./src/app/components/products/products-list/products-list.component.ts");
    /* harmony import */


    var _active_filters_active_filters_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./active-filters/active-filters.component */
    "./src/app/components/products/active-filters/active-filters.component.ts");

    var _c0 = ["productContainer"];
    var _c1 = ["productContent"];

    function ProductsComponent_app_active_filters_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-active-filters");
      }
    }

    var ProductsComponent = /*#__PURE__*/function () {
      function ProductsComponent(screenService) {
        _classCallCheck(this, ProductsComponent);

        this.screenService = screenService;
      }

      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.screenControl = this.screenService.screenControl;
        }
      }, {
        key: "setScreenAttributes",
        value: function setScreenAttributes() {
          this.screenService.setContent(this.productContainer, this.productContent);
        }
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
      return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_screen_service__WEBPACK_IMPORTED_MODULE_1__["ScreenService"]));
    };

    ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductsComponent,
      selectors: [["app-products"]],
      viewQuery: function ProductsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.productContainer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.productContent = _t.first);
        }
      },
      decls: 9,
      vars: 1,
      consts: [[1, "products-container"], ["productContainer", ""], [1, "products-content-wrapper"], ["productContent", ""], [3, "productContentScreenAttributes"], [4, "ngIf"]],
      template: function ProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-products-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-products-filter", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("productContentScreenAttributes", function ProductsComponent_Template_app_products_filter_productContentScreenAttributes_6_listener() {
            return ctx.setScreenAttributes();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProductsComponent_app_active_filters_7_Template, 1, 0, "app-active-filters", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-products-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screenControl.largeScreen);
        }
      },
      directives: [_products_header_products_header_component__WEBPACK_IMPORTED_MODULE_2__["ProductsHeaderComponent"], _products_filter_products_filter_component__WEBPACK_IMPORTED_MODULE_3__["ProductsFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_5__["ProductsListComponent"], _active_filters_active_filters_component__WEBPACK_IMPORTED_MODULE_6__["ActiveFiltersComponent"]],
      styles: ["@media all and (min-width: 1601px) {\r\n  .products-container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    width: 100%;\r\n    grid-template-columns: minmax(1rem, 250px)  1fr minmax(1rem, 250px);\r\n    grid-template-rows: 70px 1fr;\r\n    grid-template-areas: \". . .\"\r\n    \". content .\";\r\n    position: relative;\r\n  }\r\n\r\n  .products-content-wrapper[_ngcontent-%COMP%] {\r\n    grid-area: content;\r\n  }\r\n\r\n}\r\n\r\n@media all and (min-width: 902px) and (max-width: 1600px) {\r\n  .products-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: grid;\r\n    width: 100%;\r\n    grid-template-columns: minmax(1rem, 100px)  1fr minmax(1rem, 100px);\r\n    grid-template-rows: 70px 1fr;\r\n    grid-template-areas: \". . .\"\r\n    \". content .\";\r\n  }\r\n\r\n  .products-content-wrapper[_ngcontent-%COMP%] {\r\n    grid-area: content;\r\n  }\r\n\r\n\r\n}\r\n\r\n@media  all and (max-width: 901px) {\r\n  .products-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: grid;\r\n    width: 100%;\r\n    grid-template-columns: 3vw  1fr 3vw;\r\n    grid-template-rows: 70px 1fr;\r\n    grid-template-areas: \". . .\"\r\n    \". content .\";\r\n  }\r\n\r\n  .products-content-wrapper[_ngcontent-%COMP%] {\r\n    grid-area: content;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsV0FBVztJQUNYLG1FQUFtRTtJQUNuRSw0QkFBNEI7SUFDNUI7aUJBQ2E7SUFDYixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0FBRUY7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsV0FBVztJQUNYLG1FQUFtRTtJQUNuRSw0QkFBNEI7SUFDNUI7aUJBQ2E7RUFDZjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7O0FBR0Y7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsV0FBVztJQUNYLG1DQUFtQztJQUNuQyw0QkFBNEI7SUFDNUI7aUJBQ2E7RUFDZjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7QUFFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDE2MDFweCkge1xyXG4gIC5wcm9kdWN0cy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMXJlbSwgMjUwcHgpICAxZnIgbWlubWF4KDFyZW0sIDI1MHB4KTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIi4gLiAuXCJcclxuICAgIFwiLiBjb250ZW50IC5cIjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5wcm9kdWN0cy1jb250ZW50LXdyYXBwZXIge1xyXG4gICAgZ3JpZC1hcmVhOiBjb250ZW50O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDkwMnB4KSBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XHJcbiAgLnByb2R1Y3RzLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxcmVtLCAxMDBweCkgIDFmciBtaW5tYXgoMXJlbSwgMTAwcHgpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiLiAuIC5cIlxyXG4gICAgXCIuIGNvbnRlbnQgLlwiO1xyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3RzLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAgYWxsIGFuZCAobWF4LXdpZHRoOiA5MDFweCkge1xyXG4gIC5wcm9kdWN0cy1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzdncgIDFmciAzdnc7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCIuIC4gLlwiXHJcbiAgICBcIi4gY29udGVudCAuXCI7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdHMtY29udGVudC13cmFwcGVyIHtcclxuICAgIGdyaWQtYXJlYTogY29udGVudDtcclxuICB9XHJcblxyXG59XHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-products',
          templateUrl: './products.component.html',
          styleUrls: ['./products.component.css']
        }]
      }], function () {
        return [{
          type: _services_screen_service__WEBPACK_IMPORTED_MODULE_1__["ScreenService"]
        }];
      }, {
        productContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['productContainer']
        }],
        productContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['productContent']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/admin.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/admin.service.ts ***!
    \*******************************************/

  /*! exports provided: AdminService */

  /***/
  function srcAppServicesAdminServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminService", function () {
      return AdminService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var BASE_URL = 'https://localhost:8443';

    var AdminService = /*#__PURE__*/function () {
      function AdminService(http) {
        _classCallCheck(this, AdminService);

        this.http = http;
        this.toggleService = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(AdminService, [{
        key: "createProduct",
        value: function createProduct(data, typeOfProduct) {
          return this.http.post(BASE_URL + '/' + typeOfProduct, data);
        }
      }, {
        key: "getAllAttribute",
        value: function getAllAttribute() {
          return this.http.get(BASE_URL + '/admin/formData');
        }
      }, {
        key: "createCheckboxControls",
        value: function createCheckboxControls(colors, patterns, styles, form) {
          colors.forEach(function () {
            var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false);
            form.controls.productColors.push(control);
          });
          styles.forEach(function () {
            var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false);
            form.controls.productStyles.push(control);
          });
          patterns.forEach(function () {
            var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false);
            form.controls.productPatterns.push(control);
          });
        }
      }, {
        key: "createColorsArrayToSend",
        value: function createColorsArrayToSend(form, colors) {
          return form.value.productColors.map(function (color, index) {
            return color ? colors[index] : null;
          }).filter(function (color) {
            return color !== null;
          });
        }
      }, {
        key: "createPatternsArrayToSend",
        value: function createPatternsArrayToSend(form, patterns) {
          return form.value.productPatterns.map(function (pattern, index) {
            return pattern ? patterns[index] : null;
          }).filter(function (pattern) {
            return pattern !== null;
          });
        }
      }, {
        key: "createStylesArrayToSend",
        value: function createStylesArrayToSend(form, styles) {
          return form.value.productStyles.map(function (style, index) {
            return style ? styles[index] : null;
          }).filter(function (style) {
            return style !== null;
          });
        }
      }, {
        key: "saveAttribute",
        value: function saveAttribute(attribute) {
          return this.http.post(BASE_URL + '/attribute', attribute);
        }
      }]);

      return AdminService;
    }();

    AdminService.ɵfac = function AdminService_Factory(t) {
      return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    AdminService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AdminService,
      factory: AdminService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/basket-content-resolver.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/basket-content-resolver.ts ***!
    \*****************************************************/

  /*! exports provided: BasketContentResolver */

  /***/
  function srcAppServicesBasketContentResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasketContentResolver", function () {
      return BasketContentResolver;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _localStorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./localStorage.service */
    "./src/app/services/localStorage.service.ts");
    /* harmony import */


    var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./product.service */
    "./src/app/services/product.service.ts");

    var CART_KEY = 'local_cartList';

    var BasketContentResolver = /*#__PURE__*/function () {
      function BasketContentResolver(localStorageService, productService) {
        _classCallCheck(this, BasketContentResolver);

        this.localStorageService = localStorageService;
        this.productService = productService;
      }

      _createClass(BasketContentResolver, [{
        key: "resolve",
        value: function resolve(route, state) {
          if (this.localStorageService.getItemsFromLocalStorage(CART_KEY)) {
            var productIds = [];

            var _iterator11 = _createForOfIteratorHelper(this.localStorageService.getItemsFromLocalStorage(CART_KEY)),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var prod = _step11.value;
                productIds.push(prod.id);
                console.log(productIds);
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }

            productIds.map(String);
            var prodString = productIds.toString();
            return this.productService.getProductsForLocalStorage(prodString);
          }
        }
      }]);

      return BasketContentResolver;
    }();

    BasketContentResolver.ɵfac = function BasketContentResolver_Factory(t) {
      return new (t || BasketContentResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_localStorage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]));
    };

    BasketContentResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BasketContentResolver,
      factory: BasketContentResolver.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasketContentResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _localStorage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]
        }, {
          type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/basket.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/basket.service.ts ***!
    \********************************************/

  /*! exports provided: BasketService */

  /***/
  function srcAppServicesBasketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasketService", function () {
      return BasketService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var BasketService = /*#__PURE__*/function () {
      function BasketService() {
        _classCallCheck(this, BasketService);

        this.total = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(BasketService, [{
        key: "sendTotalPrice",
        value: function sendTotalPrice(qty) {
          this.total.next(qty);
        }
      }, {
        key: "getTotalPrice",
        value: function getTotalPrice() {
          return this.total.asObservable();
        }
      }]);

      return BasketService;
    }();

    BasketService.ɵfac = function BasketService_Factory(t) {
      return new (t || BasketService)();
    };

    BasketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BasketService,
      factory: BasketService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/filter.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/filter.service.ts ***!
    \********************************************/

  /*! exports provided: FilterService */

  /***/
  function srcAppServicesFilterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterService", function () {
      return FilterService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FilterService = /*#__PURE__*/function () {
      function FilterService() {
        _classCallCheck(this, FilterService);

        this.filterControl = {
          order: ['lőség 1', 'lehetőség 2', 'lehetőség 3', 'lehetőség 4', 'lehetőség 5', 'lehetőség 6', 'lehetőség 5', 'lehetőség 6'],
          colors: ['fekete', 'fehér', 'szürke', 'piros', 'narancs', 'túzok', 'jazmin', 'fekete', 'fehér', 'szürke', 'piros', 'narancs', 'túzok', 'jazmin'],
          designers: ['fekete', 'fehér', 'szürke', 'piros', 'narancs', 'túzok', 'jazmin', 'fekete', 'fehér', 'szürke', 'piros', 'narancs', 'túzok', 'jazmin'],
          activeOrder: undefined,
          activeColors: [],
          activeDesigners: []
        };
      }

      _createClass(FilterService, [{
        key: "handleActiveOrder",
        value: function handleActiveOrder(order) {
          this.filterControl.activeOrder = order;
        }
      }, {
        key: "handleActiveColors",
        value: function handleActiveColors(color) {
          if (!this.filterControl.activeColors.includes(color)) {
            this.filterControl.activeColors.push(color);
          } else {
            this.filterControl.activeColors = this.filterControl.activeColors.filter(function (activeColor) {
              return activeColor !== color;
            });
          }
        }
      }, {
        key: "isActiveColorFiltersEmpty",
        value: function isActiveColorFiltersEmpty() {
          if (this.filterControl.activeColors.length > 0) {
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "handleActiveDesigners",
        value: function handleActiveDesigners(designer) {
          if (!this.filterControl.activeDesigners.includes(designer)) {
            this.filterControl.activeDesigners.push(designer);
          } else {
            this.filterControl.activeDesigners = this.filterControl.activeDesigners.filter(function (activeDesigner) {
              return activeDesigner !== designer;
            });
          }
        }
      }, {
        key: "clearColorFilters",
        value: function clearColorFilters() {
          this.filterControl.activeColors.splice(0, this.filterControl.activeColors.length);
        }
      }, {
        key: "clearDesignerFilters",
        value: function clearDesignerFilters() {
          this.filterControl.activeDesigners.splice(0, this.filterControl.activeDesigners.length);
        }
      }]);

      return FilterService;
    }();

    FilterService.ɵfac = function FilterService_Factory(t) {
      return new (t || FilterService)();
    };

    FilterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FilterService,
      factory: FilterService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/home-resolver.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/home-resolver.ts ***!
    \*******************************************/

  /*! exports provided: HomeResolver */

  /***/
  function srcAppServicesHomeResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeResolver", function () {
      return HomeResolver;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home.service */
    "./src/app/services/home.service.ts");

    var HomeResolver = /*#__PURE__*/function () {
      function HomeResolver(homeService) {
        _classCallCheck(this, HomeResolver);

        this.homeService = homeService;
      }

      _createClass(HomeResolver, [{
        key: "resolve",
        value: function resolve(route, state) {
          return this.homeService.getHomeImages();
        }
      }]);

      return HomeResolver;
    }();

    HomeResolver.ɵfac = function HomeResolver_Factory(t) {
      return new (t || HomeResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"]));
    };

    HomeResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HomeResolver,
      factory: HomeResolver.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/home.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/home.service.ts ***!
    \******************************************/

  /*! exports provided: HomeService */

  /***/
  function srcAppServicesHomeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeService", function () {
      return HomeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var BASE_URL = 'https://localhost:8443/home';

    var HomeService = /*#__PURE__*/function () {
      function HomeService(http) {
        _classCallCheck(this, HomeService);

        this.http = http;
      }

      _createClass(HomeService, [{
        key: "getHomeImages",
        value: function getHomeImages() {
          return this.http.get(BASE_URL);
        }
      }]);

      return HomeService;
    }();

    HomeService.ɵfac = function HomeService_Factory(t) {
      return new (t || HomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    HomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HomeService,
      factory: HomeService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/localStorage.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/localStorage.service.ts ***!
    \**************************************************/

  /*! exports provided: LocalStorageService */

  /***/
  function srcAppServicesLocalStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalStorageService", function () {
      return LocalStorageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-webstorage-service */
    "./node_modules/ngx-webstorage-service/__ivy_ngcc__/fesm2015/ngx-webstorage-service.js");

    var LocalStorageService = /*#__PURE__*/function () {
      function LocalStorageService(storage) {
        _classCallCheck(this, LocalStorageService);

        this.storage = storage;
      }

      _createClass(LocalStorageService, [{
        key: "storeOnLocalStorage",
        value: function storeOnLocalStorage(item, key) {
          var currentCartList = this.storage.get(key) || [];
          currentCartList.push({
            id: item.prodId,
            qty: item.quantity
          });
          this.storage.set(key, currentCartList);
        }
      }, {
        key: "storeDetailsOnLocalStorage",
        value: function storeDetailsOnLocalStorage(data, key) {
          var details = this.storage.get(key) || [];
          details.push({
            lastname: data.lastname,
            firstname: data.firstname,
            email: data.email
          });
          this.storage.set(key, details);
        }
      }, {
        key: "getItemIdFromLocalStorage",
        value: function getItemIdFromLocalStorage(key) {
          var id = [];

          var _iterator12 = _createForOfIteratorHelper(this.storage.get(key) || []),
              _step12;

          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var prod = _step12.value;
              id.push(prod.id);
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }

          return id;
        }
      }, {
        key: "getItemsFromLocalStorage",
        value: function getItemsFromLocalStorage(key) {
          console.log(this.storage.get(key) || []);
          return this.storage.get(key) || [];
        }
      }, {
        key: "updateItem",
        value: function updateItem(id, qty, key) {
          var cart = this.getItemsFromLocalStorage(key);

          var _iterator13 = _createForOfIteratorHelper(cart),
              _step13;

          try {
            for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
              var prod = _step13.value;

              if (prod.id == id) {
                prod.qty = qty;
              }
            }
          } catch (err) {
            _iterator13.e(err);
          } finally {
            _iterator13.f();
          }

          this.storage.set(key, cart);
        }
      }, {
        key: "deleteItem",
        value: function deleteItem(key) {
          this.storage.remove(key);
        }
      }]);

      return LocalStorageService;
    }();

    LocalStorageService.ɵfac = function LocalStorageService_Factory(t) {
      return new (t || LocalStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE"]));
    };

    LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LocalStorageService,
      factory: LocalStorageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/modal.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/modal.service.ts ***!
    \*******************************************/

  /*! exports provided: ModalService */

  /***/
  function srcAppServicesModalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalService", function () {
      return ModalService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ModalService = /*#__PURE__*/function () {
      function ModalService() {
        _classCallCheck(this, ModalService);

        this.openModals = [];
        this.modalControl = {
          control: '',
          showModal: false,
          keepShowingModal: false
        };
      }

      _createClass(ModalService, [{
        key: "closeModal",
        value: function closeModal() {
          var _this4 = this;

          this.openModals.forEach(function (openModal) {
            _this4.modalControl.control = openModal;
            _this4.modalControl.showModal = false;
          });
          this.openModals.splice(0, this.openModals.length);
        }
      }, {
        key: "toggleModal",
        value: function toggleModal(control) {
          this.modalControl.control = control;
          this.modalControl.showModal = !this.modalControl.showModal;

          if (this.modalControl.showModal) {
            this.addToOpenModals(control);
          } else if (!this.modalControl.showModal) {
            this.openModals = this.filterFromOpenModals(control);
          }

          this.modalControl.keepShowingModal = true;
        }
      }, {
        key: "isModalOpen",
        value: function isModalOpen(modalName) {
          return this.openModals.includes(modalName);
        }
      }, {
        key: "keepModalOnScreen",
        value: function keepModalOnScreen() {
          this.modalControl.keepShowingModal = true;
          console.log('keep it on screen');
        }
      }, {
        key: "addToOpenModals",
        value: function addToOpenModals(control) {
          if (!this.openModals.includes(control)) {
            this.openModals.push(control);
          }
        }
      }, {
        key: "filterFromOpenModals",
        value: function filterFromOpenModals(control) {
          if (this.openModals.includes(control)) {
            return this.openModals.filter(function (openControls) {
              return openControls != control;
            });
          }

          return this.openModals;
        }
      }, {
        key: "setModalButtonPressedFalse",
        value: function setModalButtonPressedFalse() {
          this.modalControl.keepShowingModal = false;
        }
      }]);

      return ModalService;
    }();

    ModalService.ɵfac = function ModalService_Factory(t) {
      return new (t || ModalService)();
    };

    ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ModalService,
      factory: ModalService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/payment.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/payment.service.ts ***!
    \*********************************************/

  /*! exports provided: PaymentService */

  /***/
  function srcAppServicesPaymentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentService", function () {
      return PaymentService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var PAYMENT_BASE_URL = 'https://localhost:8443';

    var PaymentService = /*#__PURE__*/function () {
      function PaymentService(http) {
        _classCallCheck(this, PaymentService);

        this.http = http;
      }

      _createClass(PaymentService, [{
        key: "transaction",
        value: function transaction() {
          var observable = this.http.get(PAYMENT_BASE_URL + '/payment');
          return observable;
        }
      }]);

      return PaymentService;
    }();

    PaymentService.ɵfac = function PaymentService_Factory(t) {
      return new (t || PaymentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    PaymentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PaymentService,
      factory: PaymentService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/product.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/product.service.ts ***!
    \*********************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppServicesProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var PRODUCT_BASE_URL = 'https://localhost:8443/product/local/';
    var CART_KEY = 'local_cartList';

    var ProductService = /*#__PURE__*/function () {
      function ProductService(http) {
        _classCallCheck(this, ProductService);

        this.http = http;
      }

      _createClass(ProductService, [{
        key: "getProductsForLocalStorage",
        value: function getProductsForLocalStorage(productsIds) {
          console.log(productsIds);
          return this.http.get(PRODUCT_BASE_URL + productsIds);
        }
      }]);

      return ProductService;
    }();

    ProductService.ɵfac = function ProductService_Factory(t) {
      return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProductService,
      factory: ProductService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/screen.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/screen.service.ts ***!
    \********************************************/

  /*! exports provided: ScreenService */

  /***/
  function srcAppServicesScreenServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScreenService", function () {
      return ScreenService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ScreenService = /*#__PURE__*/function () {
      function ScreenService() {
        _classCallCheck(this, ScreenService);

        this.screenControl = {
          largeScreen: false,
          smallScreen: false,
          smallDropdown: false
        };
        this.content = {
          productContainer: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
          productContent: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
          smallOrderDropDownContainer: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        };
        this.screenSize = {
          height: 0,
          width: 0
        };
      }

      _createClass(ScreenService, [{
        key: "getScreenSize",
        value: function getScreenSize(event) {
          this.screenSize.height = window.innerHeight;
          this.screenSize.width = window.innerWidth;
        }
      }, {
        key: "getContentMeasurements",
        value: function getContentMeasurements() {
          var topOfScreen = this.content.productContainer.nativeElement.offsetHeight;
          var widthOfContent = this.content.productContent.nativeElement.offsetWidth;
          return {
            top: topOfScreen,
            width: widthOfContent
          };
        }
      }, {
        key: "screenControlHandler",
        value: function screenControlHandler() {
          if (this.screenSize.width >= 1000) {
            this.screenControlSetter('largeScreen');
          } else if (this.screenSize.width < 1000) {
            this.screenControlSetter('smallScreen');
          }
        }
      }, {
        key: "screenControlSetter",
        value: function screenControlSetter(control) {
          var _this5 = this;

          Object.keys(this.screenControl).forEach(function (key) {
            if (key === control) {
              _this5.screenControl[key] = true;
            } else {
              _this5.screenControl[key] = false;
            }
          });
        }
      }, {
        key: "smallDropDownHandler",
        value: function smallDropDownHandler() {
          if (this.screenSize.width < 751) {
            this.screenControl.smallDropdown = true;
          } else {
            this.screenControl.smallDropdown = false;
          }
        }
      }, {
        key: "setContent",
        value: function setContent(productContainer, productContent) {
          this.content.productContainer = productContainer;
          this.content.productContent = productContent;
        }
      }, {
        key: "setSmallOrderDropDownContainer",
        value: function setSmallOrderDropDownContainer(smallOrderDropDownContainer) {
          this.content.smallOrderDropDownContainer = smallOrderDropDownContainer;
        }
      }, {
        key: "getSmallOrderDropDownContainerHeight",
        value: function getSmallOrderDropDownContainerHeight() {
          return this.content.smallOrderDropDownContainer.nativeElement.offsetHeight;
        }
      }]);

      return ScreenService;
    }();

    ScreenService.ɵfac = function ScreenService_Factory(t) {
      return new (t || ScreenService)();
    };

    ScreenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ScreenService,
      factory: ScreenService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScreenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/switch.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/switch.service.ts ***!
    \********************************************/

  /*! exports provided: SwitchService */

  /***/
  function srcAppServicesSwitchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SwitchService", function () {
      return SwitchService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SwitchService = /*#__PURE__*/function () {
      function SwitchService() {
        _classCallCheck(this, SwitchService);

        this.switchMod = new ( /*#__PURE__*/function () {
          function _class16() {
            _classCallCheck(this, _class16);
          }

          return _class16;
        }())();
      }

      _createClass(SwitchService, [{
        key: "switch",
        value: function _switch(type) {
          if (type === 'category') {
            this.switchMod.diagram = false;
            this.switchMod.category = true;
            this.switchMod.product = false;
          }

          if (type === 'diagrams') {
            this.switchMod.category = false;
            this.switchMod.product = false;
            this.switchMod.diagram = true;
          }

          if (type === 'product') {
            this.switchMod.diagram = false;
            this.switchMod.category = false;
            this.switchMod.product = true;
          }

          return this.switchMod;
        }
      }]);

      return SwitchService;
    }();

    SwitchService.ɵfac = function SwitchService_Factory(t) {
      return new (t || SwitchService)();
    };

    SwitchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SwitchService,
      factory: SwitchService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SwitchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Pupu\IdeaProjects\decorate\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map