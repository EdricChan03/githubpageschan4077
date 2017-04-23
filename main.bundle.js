webpackJsonp([1,4],{

/***/ 128:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 128;


/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(158);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].showDebug) {
    console.debug('In debug mode.');
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialogs_sendfeedback_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialogs_settingsdialog_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dialogs_sharedialog_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialogs_experimentsdialog_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_urldialog_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppComponent = (function () {
    function AppComponent(dialog, snackbar, urlDialogService, router, cdr, overlayContainer) {
        var _this = this;
        this.dialog = dialog;
        this.snackbar = snackbar;
        this.urlDialogService = urlDialogService;
        this.router = router;
        this.cdr = cdr;
        this.overlayContainer = overlayContainer;
        this.showScrollToTop = false;
        this.title = 'app works!';
        this.links = [
            { icon: 'home', href: '/home', name: 'Home' },
            { icon: 'information', href: '/about', name: 'About' },
            { icon: 'flask', href: '/projects', name: 'Projects' }
        ];
        this.docName = document.title;
        this.loading = true;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* NavigationEnd */]) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
            setTimeout(function () {
                _this.loading = false;
            }, 2000);
        });
    }
    AppComponent.prototype.onScroll = function (e) {
        // if ()
    };
    AppComponent.prototype.openSettings = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__dialogs_settingsdialog_component__["a" /* SettingsDialog */], { disableClose: true });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result instanceof Array || result instanceof Object) {
                console.dir(JSON.stringify(result));
                localStorage.setItem('settings', JSON.stringify(result));
                console.log('User clicked save. Saving settings to localStorage...');
                _this.snackbar.open('Preferences saved. Reloading in 3 seconds...', 'Undo', { duration: 5000 });
                setTimeout(function () {
                    // Force reload after 3 seconds
                    window.location.reload(true);
                }, 3000);
            }
            else if (result == 'cancel') {
                // Sets localStorage settings to value on `ngOnInit()`
                localStorage.setItem('settings', JSON.stringify(_this.settings));
                console.log('User clicked cancel. Reverting to initial settings in localStorage.');
                _this.snackbar.open('Settings were reverted', null, { duration: 5000 });
            }
            else if (result == 'clear') {
                // Do nothing as it is already handled in settingsdialog.component.ts under `clearSettings()`
                console.log('Settings cleared!');
            }
        });
    };
    AppComponent.prototype.openExperiments = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__dialogs_experimentsdialog_component__["a" /* ExperimentsDialog */]);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.snackbar.open('Experiments saved. Reloading in 3 seconds...');
            setTimeout(function () {
                // Force reload after 3 seconds
                window.location.reload(true);
            }, 3000);
        });
    };
    AppComponent.prototype.share = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__dialogs_sharedialog_component__["a" /* ShareDialog */]);
    };
    AppComponent.prototype.goToUrl = function (link) {
        console.log(link);
        if (link instanceof Object || link instanceof Array) {
            if (~link.href.indexOf('https:') || ~link.href.indexOf('http:') || ~link.href.indexOf('www')) {
                console.log('URL clicked is an external url.');
                this.urlDialogService.goToUrl(link.href);
            }
            else {
                console.log('URL clicked is not a external url.');
            }
        }
        else if (typeof link === 'string') {
            this.urlDialogService.goToUrl(link);
        }
    };
    AppComponent.prototype.sendFeedback = function (feedback) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__dialogs_sendfeedback_component__["a" /* SendFeedbackDialog */], { disableClose: true });
        // Check if feedback exists, is undefined, or null
        if (feedback || feedback == undefined || feedback == null) {
            console.log('No `feedback` input specified.');
            dialogRef.componentInstance.feedback = { name: '', feedback: '', sendViaEmail: false, type: '', email: '' };
        }
        else {
            console.log('`feedback` input specified as: ' + feedback);
            dialogRef.componentInstance.feedback = feedback;
        }
        dialogRef.afterClosed().subscribe(function (result) {
            // If result is null or undefined
            if (result == null || result == undefined) {
                _this.snackbar.open('Feedback cancelled', 'Undo', { duration: 5000 });
            }
        });
    };
    AppComponent.prototype.scrollToTop = function () {
        console.log('Scrolling to top...');
        document.getElementById('content').scrollIntoView();
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        // Sets settings to either parsed JSON of localStorage `settings`
        this.debugMode = JSON.parse(localStorage.getItem('debugMode'));
        this.settings = JSON.parse(localStorage.getItem('settings'));
        this.experiments = JSON.parse(localStorage.getItem('experiments'));
        // Theming
        var htmlEl = document.getElementById('root');
        htmlEl.className = this.settings.customTheme || 'indigo-pink';
        this.overlayContainer.themeClass = this.settings.customTheme;
        if (this.settings.showScrollToTop) {
            // Shows the scroll to top button if user checked the checkbox in the SettingsDialog
            this.showScrollToTop = true;
        }
        else {
            this.showScrollToTop = false;
        }
        console.debug(JSON.stringify('Settings: ' + this.settings));
    };
    AppComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        this.scrollToTopBtn = document.getElementById('scroll-to-top-btn');
        if (this.experiments.shareDialog || false) {
            // Shows the share dialog button
            setTimeout(function () {
                var cssString = "bottom: 95px; z-index: 1;";
                _this.scrollToTopBtn.style.cssText = cssString;
                _this.shareDialog = true;
            }, 2000);
        }
        else {
            // Set styles for second button
            // var cssString = "";
            // scrollToTopBtn.style.cssText = cssString;
            // Don't show the share dialog button
            this.shareDialog = false;
        }
        this.cdr.detectChanges();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["p" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(231)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__services_urldialog_service__["a" /* UrlDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_urldialog_service__["a" /* UrlDialogService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* ChangeDetectorRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* OverlayContainer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* OverlayContainer */]) === "function" && _f || Object])
], AppComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partials_toc_directive__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_markdown__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chan4077_github_io_module__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__partials_about_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__partials_home_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__partials_page_not_found_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__partials_projects_swiftapp_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__partials_projects_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__partials_projects_firstmod_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__dialogs_sendfeedback_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__dialogs_settingsdialog_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__dialogs_urldialog_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__dialogs_sharedialog_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__dialogs_experimentsdialog_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_urldialog_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// Modules for Material

// App routing

// App components




// App components -> Projects



// App dialogs





// App services

var AppModule = (function () {
    /* Icons
     * From MaterialDesignIcons
     * https://materialdesignicons.com
     */
    function AppModule(iconRegistry, sanitizer, overlayContainer) {
        iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('https://chan4077.github.io/res/mdi.svg'));
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__partials_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__partials_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_14__partials_page_not_found_component__["a" /* PageNotFoundComponent */],
            // App projects
            __WEBPACK_IMPORTED_MODULE_16__partials_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__partials_projects_swiftapp_component__["a" /* ProjectSwiftComponent */],
            __WEBPACK_IMPORTED_MODULE_17__partials_projects_firstmod_component__["a" /* ProjectFirstModComponent */],
            __WEBPACK_IMPORTED_MODULE_0__partials_toc_directive__["a" /* TOCComponent */],
            // App dialogs
            __WEBPACK_IMPORTED_MODULE_18__dialogs_sendfeedback_component__["a" /* SendFeedbackDialog */],
            __WEBPACK_IMPORTED_MODULE_19__dialogs_settingsdialog_component__["a" /* SettingsDialog */],
            __WEBPACK_IMPORTED_MODULE_20__dialogs_urldialog_component__["a" /* UrlDialog */],
            __WEBPACK_IMPORTED_MODULE_21__dialogs_sharedialog_component__["a" /* ShareDialog */],
            __WEBPACK_IMPORTED_MODULE_22__dialogs_experimentsdialog_component__["a" /* ExperimentsDialog */],
            // App directives
            __WEBPACK_IMPORTED_MODULE_0__partials_toc_directive__["b" /* TOCDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_9__chan4077_github_io_module__["a" /* Chan4077GithubIoMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_10__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_markdown__["a" /* MarkdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["FlexLayoutModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_23__services_urldialog_service__["a" /* UrlDialogService */],
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_18__dialogs_sendfeedback_component__["a" /* SendFeedbackDialog */],
            __WEBPACK_IMPORTED_MODULE_19__dialogs_settingsdialog_component__["a" /* SettingsDialog */],
            __WEBPACK_IMPORTED_MODULE_20__dialogs_urldialog_component__["a" /* UrlDialog */],
            __WEBPACK_IMPORTED_MODULE_21__dialogs_sharedialog_component__["a" /* ShareDialog */],
            __WEBPACK_IMPORTED_MODULE_22__dialogs_experimentsdialog_component__["a" /* ExperimentsDialog */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdIconRegistry */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* OverlayContainer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* OverlayContainer */]) === "function" && _c || Object])
], AppModule);

var _a, _b, _c;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partials_page_not_found_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__partials_home_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__partials_about_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__partials_projects_firstmod_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__partials_projects_swiftapp_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__partials_projects_component__ = __webpack_require__(94);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


// App components


// App components -> Projects



/**
 * Routes used for routing the app
 * @version 1.0.2
 * @author Edric Chan
 * @example In your `app.module.ts`, import `routing` into `imports` in `NgModule`
 * @description Paths to route to with components
 * @type Routes[]
 */
var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__partials_home_component__["a" /* HomeComponent */] },
    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_6__partials_projects_component__["a" /* ProjectsComponent */], children: [
            { path: 'swift', component: __WEBPACK_IMPORTED_MODULE_5__partials_projects_swiftapp_component__["a" /* ProjectSwiftComponent */] },
            { path: 'mod', component: __WEBPACK_IMPORTED_MODULE_4__partials_projects_firstmod_component__["a" /* ProjectFirstModComponent */] }
        ] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__partials_about_component__["a" /* AboutComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_0__partials_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chan4077GithubIoMaterialModule; });
/**
 * This module is meant for imports for ngMaterial so that the amount of code to import is reduced
 * @version 1.0.0
 * @example Import into <code>app.module.ts</code> as <code>MarketMaterialModule</code>
 * @author Edric Chan
 * @description Based on this PR which is merged:
 * https://github.com/angular/material2/pull/3840
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// NgModule

// MaterialModules to import

// List of components to import
var MATERIAL_MODULES = [
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdInputModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialogModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdTooltipModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdButtonModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdIconModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdTabsModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdCardModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* OverlayModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdProgressSpinnerModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdProgressBarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdSnackBarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdMenuModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MdCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdListModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MdRippleModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MdSidenavModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MdToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* StyleModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* A11yModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* RtlModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* PlatformModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* CompatibilityModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* ObserveContentModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MdRadioModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MdGridListModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MdSelectModule */]
];
var Chan4077GithubIoMaterialModule = (function () {
    // Export the module
    function Chan4077GithubIoMaterialModule() {
    }
    return Chan4077GithubIoMaterialModule;
}());
Chan4077GithubIoMaterialModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: MATERIAL_MODULES,
        exports: MATERIAL_MODULES
    })
    // Export the module
], Chan4077GithubIoMaterialModule);

//# sourceMappingURL=chan4077.github.io.module.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TOCDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TOCComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// TODO: Add it as an attirubte to HTML5 elements
var TOCDirective = (function () {
    function TOCDirective() {
    }
    return TOCDirective;
}());
TOCDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Directive */])({
        selector: 'toc, table-of-contents'
    })
], TOCDirective);

/**
 * Table of contents
 * @version 1.0.0
 * @desc Use via `<toc>` or `<table-of-contents>`
 * @author Edric Chan
 */
var TOCComponent = (function () {
    function TOCComponent(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.links = [];
        // If screen's width is less than 
        if (screen.width <= 991) {
            renderer.setElementClass(el.nativeElement, 'mobile-toc', true);
        }
        else {
            renderer.setElementClass(el.nativeElement, 'desktop-toc', true);
        }
    }
    TOCComponent.prototype.goTo = function (hashLink) {
        window.location.hash = hashLink;
    };
    TOCComponent.prototype.ngOnInit = function () {
        var linksAll = document.querySelectorAll("button[fragment], a[fragment]");
        for (var i = 0; i < linksAll.length; i++) {
            this.links.push({ "hashLink": linksAll.item(i).getAttribute('fragment'), "displayText": linksAll.item(i).getAttribute('title') });
            console.log(JSON.stringify(this.links));
        }
    };
    return TOCComponent;
}());
TOCComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'toc, table-of-contents',
        template: __webpack_require__(243),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ViewEncapsulation */].None,
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Renderer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */]) === "function" && _b || Object])
], TOCComponent);

var _a, _b;
//# sourceMappingURL=toc.directive.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    showDebug: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container fullscreen>\n    <md-sidenav #sidenav>\n        <md-toolbar color=\"accent\" class=\"mat-elevation-z3\">\n            <h4>Links</h4>\n        </md-toolbar>\n        <md-nav-list>\n            <h3 md-subheader>Links</h3>\n            <a md-list-item *ngFor=\"let link of links\" (click)=\"sidenav.close()\" [routerLink]=\"[link.href]\" (click)=\"goToUrl(link)\" routerLinkActive=\"active-link\">\n                <md-icon md-list-icon svgIcon=\"{{link.icon}}\"></md-icon>\n                <h3 md-line>{{link.name}}</h3>\n            </a>\n            <h3 md-subheader>Other</h3>\n            <a md-list-item (click)=\"sidenav.close(); goToUrl('https://chanziyangedric.blogspot.com')\">\n                <md-icon md-list-icon svgIcon=\"blogger\" color=\"accent\"></md-icon>\n                <h3 md-line>Blog</h3>\n            </a>\n            <a md-list-item (click)=\"sidenav.close(); goToUrl('https://github.com/Chan4077/chan4077.github.io')\">\n                <md-icon md-list-icon svgIcon=\"github-circle\" color=\"accent\"></md-icon>\n                <h3 md-line>View on Github</h3>\n            </a>\n            <a md-list-item (click)=\"sidenav.close(); sendFeedback()\">\n                <md-icon md-list-icon svgIcon=\"message-alert\" color=\"accent\"></md-icon>\n                <h3 md-line>Send Feedback</h3>\n            </a>\n        </md-nav-list>\n    </md-sidenav>\n    <md-progress-bar mode=\"indeterminate\" color=\"accent\" *ngIf=\"loading\"></md-progress-bar>\n    <md-toolbar color=\"primary\" class=\"fixed-toolbar mat-elevation-z3\" style=\"z-index: 1;\">\n        <button md-icon-button (click)=\"sidenav.toggle()\" mdTooltip=\"Toggle Sidenav\" mdTooltipPosition=\"below\">\n            <md-icon svgIcon=\"menu\"></md-icon>\n        </button>\n        <h4>{{docName}}</h4>\n        <span flex></span>\n        <button md-icon-button [mdMenuTriggerFor]=\"more\">\n                <md-icon svgIcon=\"dots-vertical\"></md-icon>\n            </button>\n        <md-menu #more=\"mdMenu\">\n            <button md-menu-item (click)=\"openSettings()\">\n                <md-icon svgIcon=\"settings\" class=\"menu-icon\"></md-icon>\n                <span>Settings</span>\n            </button>\n            <button md-menu-item (click)=\"openExperiments()\">\n                <md-icon svgIcon=\"flask\" class=\"menu-icon\"></md-icon>\n                <span>Experiments</span>\n            </button>\n            <button md-menu-item (click)=\"sendFeedback()\">\n                <md-icon svgIcon=\"message-alert\" class=\"menu-icon\"></md-icon>\n                <span>Send Feedback</span>\n            </button>\n        </md-menu>\n    </md-toolbar>\n    <div id=\"content\" (scroll)=\"onScroll($event)\">\n        <router-outlet></router-outlet>\n    </div>\n</md-sidenav-container>\n<span class=\"app-action\" *ngIf=\"shareDialog\" id=\"share-dialog-btn\">\n    <button md-fab (click)=\"share()\" mdTooltip=\"Share\" mdTooltipPosition=\"left\"><md-icon svgIcon=\"share\"></md-icon></button>\n</span>\n<span class=\"app-action\" *ngIf=\"showScrollToTop\" id=\"scroll-to-top-btn\">\n        <button md-fab (click)=\"scrollToTop()\" mdTooltip=\"Scroll to top\" mdTooltipPosition=\"left\" color=\"primary\"><md-icon svgIcon=\"chevron-up\"></md-icon></button>\n</span>"

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title>Experiments <span class=\"badge beta\"></span></h2>\n<md-dialog-content>\n    <section class=\"section\">\n        <md-checkbox class=\"checkbox\" [(ngModel)]=\"experiments.shareDialog\">Enable share dialog</md-checkbox>\n    </section>\n</md-dialog-content>\n<md-dialog-actions>\n    <button md-button color=\"primary\" md-dialog-close (click)=\"saveExperiments(experiments)\">Save</button>\n</md-dialog-actions>"

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title>Send Feedback</h2>\n<md-dialog-content>\n        <md-tab-group selectedIndex=\"0\" dynamicHeight>\n            <md-tab label=\"Send Feedback\">\n                <h2>General Feedback</h2>\n                <p>Thanks for sending in your feedback! Fill up the following details below and click <code>Send</code> when\n                    you're done.\n                </p>\n                <form #feedbackForm=\"ngForm\">\n                    <section class=\"section\">\n                        <md-input-container class=\"full-width\">\n                            <input mdInput [(ngModel)]=\"feedback.name\" placeholder=\"Name\" required name=\"name\">\n                            <md-error>This is required.</md-error>\n                        </md-input-container>\n                        <md-input-container class=\"full-width\">\n                            <textarea mdInput [(ngModel)]=\"feedback.feedback\" placeholder=\"Feedback\" [formControl]=\"feedbackControl\" name=\"feedback\"></textarea>\n                            <md-hint align=\"end\">{{feedback.feedback.length}} / 200</md-hint>\n                            <md-error *ngIf=\"feedbackControl.hasError('required')\">This is required.</md-error>\n                            <md-error *ngIf=\"feedbackControl.hasError('minlength')\">More than 5 characters are required.</md-error>\n                            <md-error *ngIf=\"feedbackControl.hasError('maxlength')\">Less than 200 characters are required.</md-error>\n                        </md-input-container>\n                        <label for=\"feedbackType\">What type of feedback are you reporting?</label>\n                        <br>\n                        <md-radio-group [(ngModel)]=\"feedback.type\" id=\"feedbackType\" class=\"radio-group\" name=\"feedbacktype\">\n                            <md-radio-button value=\"feature\" class=\"radio\">Feature Request</md-radio-button>\n                            <md-radio-button value=\"bug\" class=\"radio\">Bug Report</md-radio-button>\n                            <md-radio-button value=\"general\" class=\"radio\">General Feedback</md-radio-button>\n                        </md-radio-group>\n                        <br>\n                        <label for=\"attachFiles\">Attach any screenshots if needed.</label>\n                        <br>\n                        <button md-raised-button id=\"attachFiles\"><md-icon svgIcon=\"upload\"></md-icon> Attach Files</button>\n                        <br>\n                        <md-checkbox [(ngModel)]=\"feedback.sendViaEmail\" name=\"sendViaEmail\" class=\"checkbox\">Send via email</md-checkbox>\n                        <br>\n                        <div [hidden]=\"!feedback.sendViaEmail\">\n                            <md-input-container class=\"full-width\">\n                                <input mdInput type=\"email\" [(ngModel)]=\"feedback.email\" placeholder=\"Email\" name=\"email\">\n                            </md-input-container>\n                        </div>\n                    </section>\n                </form>\n            </md-tab>\n            <md-tab label=\"Contact Me\">\n                <h2>Contact Me</h2>\n                For your security, you will have to solve a <a href=\"https://google.com/recaptcha\">Recaptcha</a> to view\n                my personal particulars.\n                <!--TODO: Add recaptcha-->\n            </md-tab>\n        </md-tab-group>\n</md-dialog-content>\n<md-dialog-actions align=\"end\">\n    <button md-button color=\"primary\" (click)=\"dialogRef.close()\">Cancel</button>\n    <button md-button color=\"warn\" (click)=\"resetForm()\" [disabled]=\"\">Reset</button>\n    <button md-button color=\"primary\" (click)=\"dialogRef.close(feedback)\" [disabled]=\"!feedbackForm.form.valid\" title=\"Note that this will be disabled if you don't fill up the form\">Send</button>\n</md-dialog-actions>"

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title>Preferences</h2>\n<md-dialog-content>\n    <form #settingsForm=\"ngForm\">\n    <md-tab-group dynamicHeight>\n        <md-tab label=\"General\">\n            <h2>General Preferences</h2>\n            <section class=\"section\">\n            <md-checkbox [(ngModel)]=\"settings.isDarkTheme\" class=\"checkbox\" name=\"isDarkTheme\">Enable Dark Mode</md-checkbox>\n            <md-checkbox [(ngModel)]=\"settings.openNewTab\" color=\"primary\" class=\"checkbox\" name=\"openNewTab\">Open links in a new tab</md-checkbox>\n            <md-checkbox [(ngModel)]=\"settings.showScrollToTop\" color=\"warn\" class=\"checkbox\" name=\"showScrollToTop\">Show <code>Scroll To Top button</code></md-checkbox>\n            </section>\n        </md-tab>\n        <md-tab label=\"Experimental\">\n            <h2>Experimental Preferences</h2>\n            <section class=\"section\">\n            <md-input-container class=\"full-width\">\n                <input mdInput placeholder=\"Duration of toasts in milliseconds\" value=\"1000\" [(ngModel)]=\"settings.durationToasts\" name=\"durationToasts\">\n            </md-input-container>\n            <md-select [(ngModel)]=\"settings.customTheme\" placeholder=\"Select theme\" name=\"customTheme\" required color=\"primary\">\n                <md-option *ngFor=\"let theme of themes\" [value]=\"theme.value\">\n                    {{theme.displayText}}\n                </md-option>\n            </md-select>\n            </section>\n        </md-tab>\n    </md-tab-group>\n    </form>\n    <p class=\"note\">Please refresh your page to apply changes.</p>\n</md-dialog-content>\n<md-dialog-actions align=\"end\">\n    <button md-button color=\"warn\" (click)=\"clearSettings(); dialogRef.close('clear')\">Clear Settings</button>\n    <span flex></span>\n    <button md-button color=\"primary\" (click)=\"dialogRef.close('cancel')\">Cancel</button>\n    <button md-button color=\"primary\" (click)=\"dialogRef.close(settings)\" [disabled]=\"!settingsForm.form.valid\">Save</button>\n</md-dialog-actions>"

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title>Share <span class=\"badge beta\"></span></h2>\n<md-dialog-content>\n    <!--<md-list>\n        <md-list-item *ngFor=\"let shareBtn of shareBtns\">\n            <md-icon md-list-icon svgIcon=\"{{shareBtn.icon}}\" color=\"accent\"></md-icon>\n            <h3 md-line>{{shareBtn.name}}</h3>\n        </md-list-item>\n    </md-list>-->\n    <form #shareForm=\"ngForm\">\n        <section class=\"section\">\n            <md-select placeholder=\"Choose social media\" (ngModel)=\"socialMedia.name\" name=\"socialMediaType\" required>\n                <md-option *ngFor=\"let shareBtn of shareBtns\" [value]=\"shareBtn.name\" (click)=\"update(shareBtn)\">\n                    {{shareBtn.name}}\n                </md-option>\n            </md-select>\n            <md-input-container class=\"full-width\" mdTooltip=\"This is readonly and cannot be edited\" mdTooltipPosition=\"right\">\n                <input readonly [ngModel]=\"socialMedia.name\" mdInput placeholder=\"Name of social media\" name=\"socialMediaType\">\n            </md-input-container>\n            <md-input-container class=\"full-width\">\n                <textarea [(ngModel)]=\"socialMedia.text\" mdInput placeholder=\"Text of post\" rows=\"2\" cols=\"100\" name=\"socialMediaText\"></textarea>\n            </md-input-container>\n        </section>\n        <p class=\"important note\">Please allow popups to continue.</p>\n    </form>\n</md-dialog-content>\n<md-dialog-actions align=\"end\">\n    <button md-button color=\"primary\" (click)=\"shareBtnClick(socialMedia)\" [disabled]=\"!shareForm.form.valid\">Share</button>\n</md-dialog-actions>"

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title>Redirect Notice</h2>\n<md-dialog-content themeColor=\"isDarkTheme\">\n    <h3>NOTICE:</h3>\n    <p>You're leaving our site. If you didn't mean to click a link, please click <code>cancel</code>. If you did mean to, click <code>Redirect</code></p>\n    <p>The link you clicked is: <em>{{url}}</em></p>\n    <p class=\"bold\">Note that you have to allow popups in order for this to work.</p>\n</md-dialog-content>\n<md-dialog-actions align=\"end\">\n    <button md-button (click)=\"dialogRef.close('cancel')\" color=\"primary\">Cancel</button>\n    <button md-button (click)=\"dialogRef.close('redirect')\" color=\"primary\">Redirect</button>\n</md-dialog-actions>"

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<div>\n<span class=\"sticky-header\"><button md-icon-button fragment=\"about-me\" routerLink=\".\" style=\"display: inline-block; float:left;\" mdTooltip=\"Link to this part\" mdTooltipPosition=\"right\" title=\"About\"><md-icon svgIcon=\"link-variant\"></md-icon></button><h2 style=\"display: inline-block; margin:0;\" id=\"about-me\">About Me</h2></span>\n<br>\n<p class=\"about-paragraph\">I'm currently a <strong>student</strong> who likes coding.</p>\n</div>\n<div>\n<a md-icon-button fragment=\"dependencies\" routerLink=\".\" style=\"display: inline-block\" mdTooltip=\"Link to this part\" mdTooltipPosition=\"right\" title=\"Dependencies\"><md-icon svgIcon=\"link-variant\"></md-icon></a><h2 style=\"display: inline-block; margin:0\" id=\"dependencies\">Dependencies</h2>\n<br>\n<p class=\"about-paragraph\">This was created with the following:</p>\n<ul class=\"about-list\">\n    <li><a href=\"https://angular.io\" (click)=\"goToUrl($event)\">Angular 4</a></li>\n    <li><a href=\"https://material.angular.io\" (click)=\"goToUrl($event)\">Angular Material2</a></li>\n    <li><a href=\"https://www.typescriptlang.org\" (click)=\"goToUrl($event)\">Typescript</a></li>\n</ul>\n</div>\n<toc id=\"toc\"></toc>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>"

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

module.exports = "<div class=\"padding-content\">\n    <h1>Welcome to <a href=\"https://githubpageschan4077.firebaseapp.com\" (click)=\"goToUrl($event)\">Chan4077.Github.io <em>(version 2)</em></a>!</h1>\n    <p>This is meant to test out <a href=\"https://chan4077.github.io\" (click)=\"goToUrl($event)\">Chan4077.Github.io <em>(version 1)</em></a> with Angular\n        Material2!</p>\n    <p><del>Pretty soon, the release for version 2 will be out!</del> <strong>UPDATE:</strong> This site is already updated to angular material2!</p>\n    <p><em>View the old repo <a href=\"https://github.com/Chan4077/chan4077.github.io_old\" (click)=\"goToUrl($event)\">here</a></em></p>\n</div>"

/***/ }),

/***/ 239:
/***/ (function(module, exports) {

module.exports = "<md-card>\n    <md-card-header>\n        <button md-icon-button (click)=\"goBack()\" mdTooltip=\"Go Back\">\n            <md-icon svgIcon=\"arrow-left\"></md-icon>\n        </button>\n        <span flex></span>\n        <button md-icon-button (click)=\"aboutThis()\" mdTooltip=\"About This Card\">\n            <md-icon svgIcon=\"information\"></md-icon>\n        </button>\n    </md-card-header>\n    <md-card-title>Error 404</md-card-title>\n    <md-card-content>\n        <p>Error 404: URL not found.</p>\n        <p>The site you are accessing - <strong>{{router.url}}</strong> is not available.</p>\n        <p>Please contact the admin for more information.</p>\n        <br>\n        <p>To head back, click <md-icon svgIcon=\"arrow-left\" mdTooltip=\"Go Back Icon\"></md-icon></p>\n    </md-card-content>\n</md-card>"

/***/ }),

/***/ 240:
/***/ (function(module, exports) {

module.exports = "<md-nav-list>\n    <a md-list-item *ngFor=\"let project of projects\" [routerLink]=\"['/projects'+project.href]\" routerLinkActive=\"active-link\"\n        (click)=\"selected(project)\">\n        <md-icon md-list-icon svgIcon=\"{{project.icon}}\" *ngIf=\"project.hasIcon\"></md-icon>\n        <h3 md-line>{{project.name}}</h3>\n        <p *ngIf=\"project.hasDesc\" md-line>{{project.desc}}</p>\n    </a>\n</md-nav-list>\n<section>\n    <md-toolbar color=\"accent\" class=\"fixed-toolbar mat-elevation-z3\" style=\"z-index: 2;\">\n        <button md-icon-button disableRipple style=\"cursor: default;\">\n        <md-icon svgIcon=\"{{projectSelected.icon}}\"></md-icon>\n        </button>\n        <h4>{{projectSelected.name}}</h4>\n        <span flex></span>\n        <button md-icon-button mdTooltip=\"View Readme on Github\" (click)=\"goToGithub(projectSelected.readmeUrl)\">\n            <md-icon svgIcon=\"book-open-variant\"></md-icon>\n        </button>\n        &nbsp;\n        <button md-icon-button mdTooltip=\"View Project on Github\" (click)=\"goToGithub(projectSelected.githubUrl)\">\n        <md-icon svgIcon=\"github-circle\"></md-icon>\n    </button>\n    </md-toolbar>\n    <div class=\"project-content\">\n    <router-outlet></router-outlet>\n    </div>\n</section>"

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

module.exports = "<markdown path=\"https://raw.githubusercontent.com/Chan4077/First-Mod/master/README.md\"></markdown>"

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

module.exports = "<markdown path=\"https://raw.githubusercontent.com/Chan4077/First-Application/master/README.md\"></markdown>"

/***/ }),

/***/ 243:
/***/ (function(module, exports) {

module.exports = "<nav style=\"position: fixed; left: 1080px; top:90px;\">\n<h3>Table Of Contents</h3>\n<md-nav-list>\n    <a md-list-item (click)=\"goTo(link.hashLink)\" routerLink=\".\" *ngFor=\"let link of links\">\n        {{link.displayText}}\n    </a>\n</md-nav-list>\n</nav>"

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialogs_urldialog_component__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlDialogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// UrlDialog

var UrlDialogService = (function () {
    function UrlDialogService(snackbar, dialog) {
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.settings = JSON.parse(localStorage.getItem('settings')) || {};
    }
    /**
     * Goes to a url
     * @version 1.0.0
     * @author Edric Chan
     * @param {url:string} The url to go to
     * @returns null
     */
    UrlDialogService.prototype.goToUrl = function (url) {
        var _this = this;
        console.debug('URL is: ' + url);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__dialogs_urldialog_component__["a" /* UrlDialog */]);
        dialogRef.componentInstance.url = url;
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 'cancel') {
                // Do nothing
                _this.snackbar.open('You cancelled the redirect', null, { duration: 5000 });
            }
            else if (result == 'redirect') {
                if (_this.settings.openNewTab) {
                    console.debug('Opening ' + url + ' in a new tab.');
                    window.open(url, '_blank');
                }
                else {
                    window.location.href = url;
                }
            }
        });
    };
    return UrlDialogService;
}());
UrlDialogService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdSnackBar */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */]) === "function" && _b || Object])
], UrlDialogService);

var _a, _b;
//# sourceMappingURL=urldialog.service.js.map

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(129);


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperimentsDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExperimentsDialog = (function () {
    function ExperimentsDialog() {
        this.defaultExperiments = { "shareDialog": false };
    }
    ExperimentsDialog.prototype.saveExperiments = function (experiments) {
        localStorage.setItem('experiments', JSON.stringify(experiments));
    };
    ExperimentsDialog.prototype.ngOnInit = function () {
        this.experiments = JSON.parse(localStorage.getItem('experiments')) || this.defaultExperiments;
    };
    return ExperimentsDialog;
}());
ExperimentsDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'experiments-dialog',
        template: __webpack_require__(232)
    })
], ExperimentsDialog);

//# sourceMappingURL=experimentsdialog.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendFeedbackDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SendFeedbackDialog = (function () {
    function SendFeedbackDialog(dialogRef) {
        this.dialogRef = dialogRef;
        this.feedbackControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(200), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]);
    }
    /**
     * Resets the form
     * @version 1.0.0
     * @author Edric Chan
     */
    SendFeedbackDialog.prototype.resetForm = function () {
        this.feedback = { name: '', feedback: '', type: '', email: '', sendViaEmail: false };
        console.debug('Form was reset');
    };
    SendFeedbackDialog.prototype.ngOnInit = function () {
        this.feedback = this.dialogRef.componentInstance.feedback;
        console.debug('Feedback: ' + JSON.stringify(this.feedback));
    };
    return SendFeedbackDialog;
}());
SendFeedbackDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'send-feedback-dialog',
        template: __webpack_require__(233)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MdDialogRef */]) === "function" && _a || Object])
], SendFeedbackDialog);

var _a;
//# sourceMappingURL=sendfeedback.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsDialog = (function () {
    function SettingsDialog(dialogRef) {
        this.dialogRef = dialogRef;
        // Warn will be set as orange by default
        this.themes = [
            { value: 'indigo-pink', displayText: 'Indigo pink' },
            { value: 'blue-pink', displayText: 'Blue pink' },
            // TODO: Change colour of accent
            { value: 'yellow-green', displayText: 'Yellow green (dark)' }
        ];
    }
    SettingsDialog.prototype.clearSettings = function () {
        if (confirm('Are you sure you want to clear settings? This cannot be undone!')) {
            console.log('Clearing...');
            localStorage.removeItem('settings');
        }
        else {
            console.log('User cancelled');
        }
    };
    SettingsDialog.prototype.ngOnInit = function () {
        this.settings = JSON.parse(localStorage.getItem('settings')) || { 'isDarkTheme': false, 'openNewTab': false, 'showScrollToTop': true, 'durationToasts': 1000, 'customTheme': 'indigo-pink' };
    };
    return SettingsDialog;
}());
SettingsDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'settings-dialog',
        template: __webpack_require__(234)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MdDialogRef */]) === "function" && _a || Object])
], SettingsDialog);

var _a;
//# sourceMappingURL=settingsdialog.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ShareDialog = (function () {
    function ShareDialog() {
        this.shareBtns = [
            { "name": "Facebook", "url": "https://facebook.com/sharer.php?url=", "icon": "facebook-box" },
            { "name": "Twitter", "url": "https://twitter.com/intent/tweet?url=", "icon": "twitter-box" },
            { "name": "Google+", "url": "https://plus.google.com/share?url=", "icon": "google-plus-box" }
        ];
        /**
         * The share button which is clicked
         */
        this.shareBtnSelected = { "name": "", "url": "", "icon": "" };
        this.socialMedia = { "name": "", "url": "", "icon": "" };
    }
    ShareDialog.prototype.shareBtnClick = function (socialMedia) {
        console.log('Parm sharedBtn passed in as: ' + JSON.stringify(socialMedia));
        window.open(socialMedia.url + window.location.href, "Test", "height=400, width=200");
    };
    ShareDialog.prototype.onSelect = function (shareBtn) {
        this.socialMedia = shareBtn;
        console.log(this.socialMedia);
    };
    ShareDialog.prototype.update = function (socialMediaBtn) {
        console.log(JSON.stringify(socialMediaBtn));
        this.socialMedia = socialMediaBtn;
    };
    return ShareDialog;
}());
ShareDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'share-dialog',
        template: __webpack_require__(235)
    })
], ShareDialog);

//# sourceMappingURL=sharedialog.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UrlDialog = (function () {
    function UrlDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    UrlDialog.prototype.ngOnInit = function () {
        this.settings = JSON.parse(localStorage.getItem('settings')) || { 'isDarkTheme': true, 'name': 'Lorem ipsum', 'email': 'johnappleseed@gmail.com', 'birthday': '2003-12-23', 'showDeveloper': false };
        this.isDarkTheme = this.settings.isDarkTheme;
        this.url = this.dialogRef.componentInstance.url;
    };
    return UrlDialog;
}());
UrlDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'url-dialog',
        template: __webpack_require__(236)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MdDialogRef */]) === "function" && _a || Object])
], UrlDialog);

var _a;
//# sourceMappingURL=urldialog.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_urldialog_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(urlDialogService) {
        this.urlDialogService = urlDialogService;
    }
    AboutComponent.prototype.goToUrl = function (ev) {
        this.url = ev.srcElement.attributes.href.value;
        console.log(this.url);
        ev.preventDefault();
        this.urlDialogService.goToUrl(this.url);
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'about',
        template: __webpack_require__(237)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_urldialog_service__["a" /* UrlDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_urldialog_service__["a" /* UrlDialogService */]) === "function" && _a || Object])
], AboutComponent);

var _a;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_urldialog_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(urlDialogService) {
        this.urlDialogService = urlDialogService;
    }
    HomeComponent.prototype.goToUrl = function (ev) {
        this.url = ev.srcElement.attributes.href.value;
        console.log(this.url);
        ev.preventDefault();
        this.urlDialogService.goToUrl(this.url);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["p" /* Component */])({
        selector: 'home',
        template: __webpack_require__(238)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_urldialog_service__["a" /* UrlDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_urldialog_service__["a" /* UrlDialogService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageNotFoundComponent = (function () {
    function PageNotFoundComponent(router) {
        this.router = router;
    }
    PageNotFoundComponent.prototype.refresh = function () {
        window.location.reload(true);
    };
    PageNotFoundComponent.prototype.goBack = function () {
        window.history.back();
    };
    PageNotFoundComponent.prototype.aboutThis = function () {
        console.log('You clicked!');
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'page-not-found',
        template: __webpack_require__(239)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], PageNotFoundComponent);

var _a;
//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_urldialog_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectsComponent = (function () {
    function ProjectsComponent(router, urlDialogService) {
        this.router = router;
        this.urlDialogService = urlDialogService;
        this.projects = [
            { href: '/swift', icon: 'language-swift', hasIcon: true, name: 'First-Application', hasDesc: true, desc: 'A test on Swift 3.0', githubUrl: 'https://github.com/Chan4077/First-Application', readmeUrl: 'https://github.com/Chan4077/First-Application/blob/master/README.md' },
            { href: '/mod', icon: 'minecraft', hasIcon: true, name: 'First-Mod', hasDesc: true, desc: 'My first mod. Run on 1.11.2!', githubUrl: 'https://github.com/Chan4077/First-Mod', readmeUrl: 'https://github.com/Chan4077/First-Mod/blob/master/README.md' }
        ];
    }
    ProjectsComponent.prototype.goToGithub = function (url) {
        this.urlDialogService.goToUrl(url);
    };
    ProjectsComponent.prototype.selected = function (project) {
        this.projectSelected = project;
        localStorage.setItem('project-selected', JSON.stringify(this.projectSelected));
    };
    ProjectsComponent.prototype.ngOnInit = function () {
        this.projectSelected = JSON.parse(localStorage.getItem('project-selected'));
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'projects',
        template: __webpack_require__(240)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_urldialog_service__["a" /* UrlDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_urldialog_service__["a" /* UrlDialogService */]) === "function" && _b || Object])
], ProjectsComponent);

var _a, _b;
//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectFirstModComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProjectFirstModComponent = (function () {
    function ProjectFirstModComponent() {
    }
    return ProjectFirstModComponent;
}());
ProjectFirstModComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'project-firstmod',
        template: __webpack_require__(241)
    })
], ProjectFirstModComponent);

//# sourceMappingURL=firstmod.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectSwiftComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProjectSwiftComponent = (function () {
    function ProjectSwiftComponent() {
    }
    return ProjectSwiftComponent;
}());
ProjectSwiftComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'project-swift',
        template: __webpack_require__(242)
    })
], ProjectSwiftComponent);

//# sourceMappingURL=swiftapp.component.js.map

/***/ })

},[290]);
//# sourceMappingURL=main.bundle.js.map