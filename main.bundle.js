webpackJsonp([1,4],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 109;


/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(121);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].showDebug) {
    console.debug('In debug mode.');
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialogs_sendfeedback_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialogs_settingsdialog_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_urldialog_service__ = __webpack_require__(31);
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
    function AppComponent(dialog, snackbar, urlDialogService, router) {
        var _this = this;
        this.dialog = dialog;
        this.snackbar = snackbar;
        this.urlDialogService = urlDialogService;
        this.router = router;
        this.title = 'app works!';
        this.links = [
            { icon: 'home', href: '/home', name: 'Home' },
            { icon: 'information', href: '/about', name: 'About' },
            { icon: 'blogger', href: 'https://chanziyangedric.blogspot.com', name: 'Blog' },
            { icon: 'github-circle', href: 'https://github.com/Chan4077/chan4077.github.io', name: 'View on Github' },
            { icon: 'flask', href: '/projects', name: 'Projects' }
        ];
        this.docName = document.title;
        this.loading = true;
        router.events.subscribe(function () {
            setTimeout(function () {
                _this.loading = false;
            }, 2000);
        });
    }
    AppComponent.prototype.openSettings = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__dialogs_settingsdialog_component__["a" /* SettingsDialog */], { disableClose: true });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result instanceof Array || result instanceof Object) {
                console.dir(JSON.stringify(result));
                localStorage.setItem('settings', JSON.stringify(result));
                console.log('User clicked save. Saving settings to localStorage...');
                _this.snackbar.open('Preferences saved.', 'Undo', { duration: 5000 });
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
        if (feedback || feedback == undefined || feedback == null) {
            console.log('No `feedback` input specified.');
            dialogRef.componentInstance.feedback = { name: '', feedback: '', sendViaEmail: false, type: '', email: '' };
        }
        else {
            console.log('`feedback` input specified as: ' + feedback);
            dialogRef.componentInstance.feedback = feedback;
        }
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == null || result == undefined) {
                _this.snackbar.open('Feedback cancelled', 'Undo', { duration: 5000 });
            }
            else {
            }
        });
    };
    AppComponent.prototype.scrollToTop = function () {
        console.log('Scrolling to top...');
        console.log(window);
        document.getElementById('content').scrollIntoView();
        window.scrollTo(0, 0);
    };
    AppComponent.prototype.ngOnInit = function () {
        // Sets settings to either parsed JSON of localStorage `settings`
        this.settings = JSON.parse(localStorage.getItem('settings'));
        console.debug(JSON.stringify(this.settings));
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_1" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(196)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_urldialog_service__["a" /* UrlDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_urldialog_service__["a" /* UrlDialogService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_markdown__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chan4077_github_io_module__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__partials_about_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__partials_home_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__partials_projects_swiftapp_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__partials_projects_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__partials_projects_firstmod_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dialogs_sendfeedback_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dialogs_settingsdialog_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dialogs_urldialog_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_urldialog_service__ = __webpack_require__(31);
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
    function AppModule(iconRegistry, sanitizer) {
        iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__partials_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__partials_about_component__["a" /* AboutComponent */],
            // App projects
            __WEBPACK_IMPORTED_MODULE_13__partials_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__partials_projects_swiftapp_component__["a" /* ProjectSwiftComponent */],
            __WEBPACK_IMPORTED_MODULE_14__partials_projects_firstmod_component__["a" /* ProjectFirstModComponent */],
            // App dialogs
            __WEBPACK_IMPORTED_MODULE_15__dialogs_sendfeedback_component__["a" /* SendFeedbackDialog */],
            __WEBPACK_IMPORTED_MODULE_16__dialogs_settingsdialog_component__["a" /* SettingsDialog */],
            __WEBPACK_IMPORTED_MODULE_17__dialogs_urldialog_component__["a" /* UrlDialog */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__chan4077_github_io_module__["a" /* Chan4077GithubIoMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_markdown__["a" /* MarkdownModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_18__services_urldialog_service__["a" /* UrlDialogService */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_15__dialogs_sendfeedback_component__["a" /* SendFeedbackDialog */],
            __WEBPACK_IMPORTED_MODULE_16__dialogs_settingsdialog_component__["a" /* SettingsDialog */],
            __WEBPACK_IMPORTED_MODULE_17__dialogs_urldialog_component__["a" /* UrlDialog */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MdIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MdIconRegistry */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _b || Object])
], AppModule);

var _a, _b;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_home_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__partials_about_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__partials_projects_firstmod_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__partials_projects_swiftapp_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__partials_projects_component__ = __webpack_require__(73);
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
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__partials_home_component__["a" /* HomeComponent */] },
    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_5__partials_projects_component__["a" /* ProjectsComponent */], children: [
            { path: 'swift', component: __WEBPACK_IMPORTED_MODULE_4__partials_projects_swiftapp_component__["a" /* ProjectSwiftComponent */] },
            { path: 'mod', component: __WEBPACK_IMPORTED_MODULE_3__partials_projects_firstmod_component__["a" /* ProjectFirstModComponent */] }
        ] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__partials_about_component__["a" /* AboutComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chan4077GithubIoMaterialModule; });
/**
 * This module is meant for imports for ngMaterial so that the amount of code to import is reduced
 * @version 1.0.0
 * @example Import into <code>app.module.ts</code> as <code>MarketMaterialModule</code>
 * @author Edric Chan
 * @description Based on this PR which is currently not merged (this PR will depreceate <code>MaterialModule</code>):
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
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdInputModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdTooltipModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdButtonModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdIconModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdTabsModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdCardModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* OverlayModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdProgressSpinnerModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdProgressBarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdSnackBarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdMenuModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MdListModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdRippleModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MdSidenavModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MdToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* StyleModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* A11yModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* PlatformModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* CompatibilityModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* ObserveContentModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MdRadioModule */]
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

/***/ 121:
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

/***/ 196:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container fullscreen>\n    <md-sidenav #sidenav>\n        <md-nav-list>\n            <h3 md-subheader>Links</h3>\n            <a md-list-item *ngFor=\"let link of links\" (click)=\"sidenav.close()\" [routerLink]=\"[link.href]\" (click)=\"goToUrl(link)\">\n                <md-icon md-list-icon svgIcon=\"{{link.icon}}\"></md-icon>\n                <h3 md-line>{{link.name}}</h3>\n            </a>\n            <h3 md-subheader>Other</h3>\n            <a md-list-item (click)=\"sidenav.close(); sendFeedback()\">\n                <md-icon md-list-icon svgIcon=\"message-alert\" color=\"accent\"></md-icon>\n                <h3 md-line>Send Feedback</h3>\n            </a>\n        </md-nav-list>\n    </md-sidenav>\n    <md-progress-bar mode=\"indeterminate\" color=\"accent\" *ngIf=\"loading\"></md-progress-bar>\n    <md-toolbar color=\"primary\" class=\"fixed-toolbar\" style=\"z-index: 1;\">\n        <button md-icon-button (click)=\"sidenav.toggle()\" mdTooltip=\"Toggle Sidenav\" mdTooltipPosition=\"below\">\n            <md-icon svgIcon=\"menu\"></md-icon>\n        </button>\n        <h4>{{docName}}</h4>\n        <span flex></span>\n        <button md-icon-button [mdMenuTriggerFor]=\"more\">\n                <md-icon svgIcon=\"dots-vertical\"></md-icon>\n            </button>\n        <md-menu #more=\"mdMenu\">\n            <button md-menu-item (click)=\"openSettings()\">\n                <md-icon svgIcon=\"settings\" class=\"menu-icon\"></md-icon>\n                <span>Settings</span>\n            </button>\n            <button md-menu-item (click)=\"sendFeedback()\">\n                <md-icon svgIcon=\"message-alert\" class=\"menu-icon\"></md-icon>\n                <span>Send Feedback</span>\n            </button>\n        </md-menu>\n    </md-toolbar>\n    <div id=\"content\">\n        <router-outlet></router-outlet>\n    </div>\n</md-sidenav-container>\n<span class=\"app-action\">\n        <button md-fab (click)=\"scrollToTop()\" mdTooltip=\"Scroll to top\" mdTooltipPosition=\"above\" color=\"primary\"><md-icon svgIcon=\"chevron-up\"></md-icon></button>\n</span>"

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title>Send Feedback</h2>\n<md-dialog-content>\n    <div *ngIf=\"spinner\" class=\"is-loading\">\n        <md-progress-spinner mode=\"indeterminate\" color=\"primary\" class=\"loading-indicator\"></md-progress-spinner>\n    </div>\n    <div [hidden]=\"spinner\">\n    <md-tab-group>\n        <md-tab label=\"Send Feedback\">\n            <h2>General Feedback</h2>\n            <p>Thanks for sending in your feedback! Fill up the following details below and click <code>Send</code> when you're\n                done.\n            </p>\n            <form #feedbackForm=\"ngForm\">\n                <section class=\"section\">\n                <md-input-container class=\"full-width\">\n                    <input mdInput [(ngModel)]=\"feedback.name\" placeholder=\"Name\" required name=\"name\">\n                    <md-error>This is required.</md-error>\n                </md-input-container>\n                <md-input-container class=\"full-width\">\n                    <textarea mdInput [(ngModel)]=\"feedback.feedback\" placeholder=\"Feedback\" [formControl]=\"feedbackControl\" name=\"feedback\"></textarea>\n                    <md-hint align=\"end\">{{feedback.feedback.length}} / 200</md-hint>\n                    <md-error *ngIf=\"feedbackControl.hasError('required')\">This is required.</md-error>\n                    <md-error *ngIf=\"feedbackControl.hasError('minlength')\">More than 5 characters are required.</md-error>\n                    <md-error *ngIf=\"feedbackControl.hasError('maxlength')\">Less than 200 characters are required.</md-error>\n                </md-input-container>\n                <label for=\"feedbackType\">What type of feedback are you reporting?</label>\n                <br>\n                <md-radio-group [(ngModel)]=\"feedback.type\" id=\"feedbackType\" class=\"radio-group\" name=\"feedbacktype\">\n                    <md-radio-button value=\"feature\" class=\"radio\">Feature Request</md-radio-button>\n                    <md-radio-button value=\"bug\" class=\"radio\">Bug Report</md-radio-button>\n                    <md-radio-button value=\"general\" class=\"radio\">General Feedback</md-radio-button>\n                </md-radio-group>\n                <br>\n                <label for=\"attachFiles\">Attach any screenshots if needed.</label>\n                <br>\n                <button md-raised-button id=\"attachFiles\"><md-icon svgIcon=\"upload\"></md-icon> Attach Files</button>\n                <br>\n                <md-checkbox [(ngModel)]=\"feedback.sendViaEmail\" name=\"sendViaEmail\" class=\"checkbox\">Send via email</md-checkbox>\n                <br>\n                <div [hidden]=\"!feedback.sendViaEmail\">\n                    <md-input-container class=\"full-width\">\n                        <input mdInput type=\"email\" [(ngModel)]=\"feedback.email\" placeholder=\"Email\" name=\"email\">\n                    </md-input-container>\n                </div>\n                </section>\n            </form>\n        </md-tab>\n        <md-tab label=\"Contact Me\">\n            <h2>Contact Me</h2>\n            For your security, you will have to solve a <a href=\"https://google.com/recaptcha\">Recaptcha</a> to view my personal\n            particulars.\n            <!--TODO: Add recaptcha-->\n        </md-tab>\n    </md-tab-group>\n    </div>\n</md-dialog-content>\n<md-dialog-actions align=\"end\">\n    <button md-button color=\"primary\" (click)=\"dialogRef.close()\">Cancel</button>\n    <button md-button color=\"warn\" (click)=\"resetForm()\" [disabled]=\"\">Reset</button>\n    <button md-button color=\"primary\" (click)=\"dialogRef.close(feedback)\" [disabled]=\"!feedbackForm.form.valid\" title=\"Note that this will be disabled if you don't fill up the form\">Send</button>\n</md-dialog-actions>"

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title>Preferences</h2>\n<md-dialog-content>\n    <form #settingsForm=\"ngForm\">\n    <md-tab-group>\n        <md-tab label=\"General\">\n            <h2>General Preferences</h2>\n            <section class=\"section\">\n            <md-checkbox [(ngModel)]=\"settings.isDarkTheme\" class=\"checkbox\" name=\"isDarkTheme\">Enable Dark Mode</md-checkbox>\n            <md-checkbox [(ngModel)]=\"settings.openNewTab\" color=\"primary\" class=\"checkbox\" name=\"openNewTab\">Open links in a new tab</md-checkbox>\n            </section>\n        </md-tab>\n        <md-tab label=\"Experimental\">\n            <h2>Experimental Preferences</h2>\n            <section class=\"section\">\n            <md-input-container class=\"full-width\">\n                <input mdInput placeholder=\"Duration of toasts in milliseconds\" value=\"1000\" [(ngModel)]=\"settings.durationToasts\" name=\"durationToasts\">\n            </md-input-container>\n            </section>\n        </md-tab>\n    </md-tab-group>\n    </form>\n    <p class=\"note\">Please refresh your page to apply changes.</p>\n</md-dialog-content>\n<md-dialog-actions>\n    <button md-button color=\"warn\" (click)=\"clearSettings(); dialogRef.close('clear')\">Clear Settings</button>\n    <span flex></span>\n    <button md-button color=\"primary\" (click)=\"dialogRef.close('cancel')\">Cancel</button>\n    <button md-button color=\"primary\" (click)=\"dialogRef.close(settings)\" [disabled]=\"!settingsForm.form.valid\">Save</button>\n</md-dialog-actions>"

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title>Redirect Notice</h2>\n<md-dialog-content themeColor=\"isDarkTheme\">\n    <h3>NOTICE:</h3>\n    <p>You're leaving our site. If you didn't mean to click a link, please click <code>cancel</code>. If you did mean to, click <code>Redirect</code></p>\n    <p>The link you clicked is: <em>{{url}}</em></p>\n    <p class=\"bold\">Note that you have to allow popups in order for this to work.</p>\n</md-dialog-content>\n<md-dialog-actions align=\"end\">\n    <button md-button (click)=\"dialogRef.close('cancel')\" color=\"primary\">Cancel</button>\n    <button md-button (click)=\"dialogRef.close('redirect')\" color=\"primary\">Redirect</button>\n</md-dialog-actions>"

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

module.exports = "This was created with <a href=\"https://angular.io\" (click)=\"goToUrl($event)\">Angular 4</a>, <a href=\"https://material.angular.io\" (click)=\"goToUrl($event)\">Angular Material2</a>"

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to <a href=\"https://githubpageschan4077.firebaseapp.com\">Chan4077.Github.io <em>(version 2)</em></a>!</h1>\n<p>This is meant to test out <a href=\"https://chan4077.github.io\">Chan4077.Github.io <em>(version 1)</em></a> with Angular Material2!</p>\n<p>Pretty soon, the release for version 2 will be out! </p>\n"

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

module.exports = "<md-nav-list>\n    <a md-list-item *ngFor=\"let project of projects\" [routerLink]=\"['/projects'+project.href]\" routerLinkActive=\"active-link\"\n        (click)=\"selected(project)\">\n        <md-icon md-list-icon svgIcon=\"{{project.icon}}\" *ngIf=\"project.hasIcon\"></md-icon>\n        <h3 md-line>{{project.name}}</h3>\n        <p *ngIf=\"project.hasDesc\" md-line>{{project.desc}}</p>\n    </a>\n</md-nav-list>\n<section>\n    <md-toolbar color=\"primary\" class=\"fixed-toolbar\" style=\"z-index: 2;\">\n        <h4>{{projectSelected.name}}</h4>\n        <span flex></span>\n        <button md-icon-button mdTooltip=\"View on Github\" (click)=\"goToGithub(projectSelected.githubUrl)\">\n        <md-icon svgIcon=\"github-circle\"></md-icon>\n    </button>\n    </md-toolbar>\n    <router-outlet></router-outlet>\n</section>"

/***/ }),

/***/ 203:
/***/ (function(module, exports) {

module.exports = "<markdown path=\"https://raw.githubusercontent.com/Chan4077/First-Mod/master/README.md\"></markdown>"

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

module.exports = "<markdown path=\"https://raw.githubusercontent.com/Chan4077/First-Application/master/README.md\"></markdown>"

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(110);


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialogs_urldialog_component__ = __webpack_require__(70);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSnackBar */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */]) === "function" && _b || Object])
], UrlDialogService);

var _a, _b;
//# sourceMappingURL=urldialog.service.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
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
        var _this = this;
        this.feedback = this.dialogRef.componentInstance.feedback;
        console.debug('Feedback: ' + JSON.stringify(this.feedback));
        this.spinner = true;
        setTimeout(function () {
            _this.spinner = false;
        }, 2000);
    };
    return SendFeedbackDialog;
}());
SendFeedbackDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'send-feedback-dialog',
        template: __webpack_require__(197)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MdDialogRef */]) === "function" && _a || Object])
], SendFeedbackDialog);

var _a;
//# sourceMappingURL=sendfeedback.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
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



var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var SettingsDialog = (function () {
    function SettingsDialog(dialogRef) {
        this.dialogRef = dialogRef;
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(EMAIL_REGEX)]);
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
        this.settings = JSON.parse(localStorage.getItem('settings')) || { 'isDarkTheme': false, 'openNewTab': false, 'durationToasts': 1000 };
    };
    return SettingsDialog;
}());
SettingsDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'settings-dialog',
        template: __webpack_require__(198)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MdDialogRef */]) === "function" && _a || Object])
], SettingsDialog);

var _a;
//# sourceMappingURL=settingsdialog.component.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(13);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'url-dialog',
        template: __webpack_require__(199)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MdDialogRef */]) === "function" && _a || Object])
], UrlDialog);

var _a;
//# sourceMappingURL=urldialog.component.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_urldialog_service__ = __webpack_require__(31);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'about',
        template: __webpack_require__(200)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_urldialog_service__["a" /* UrlDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_urldialog_service__["a" /* UrlDialogService */]) === "function" && _a || Object])
], AboutComponent);

var _a;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'home',
        template: __webpack_require__(201)
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_urldialog_service__ = __webpack_require__(31);
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
            { href: '/swift', icon: 'language-swift', hasIcon: true, name: 'First-Application', hasDesc: true, desc: 'A test on Swift 3.0', githubUrl: 'https://github.com/Chan4077/MyFirstApp' },
            { href: '/mod', icon: 'minecraft', hasIcon: true, name: 'First-Mod', hasDesc: true, desc: 'My first mod. Run on 1.11.2!', githubUrl: 'https://github.com/Chan4077/First-Mod' }
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'projects',
        template: __webpack_require__(202)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_urldialog_service__["a" /* UrlDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_urldialog_service__["a" /* UrlDialogService */]) === "function" && _b || Object])
], ProjectsComponent);

var _a, _b;
//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'project-firstmod',
        template: __webpack_require__(203)
    })
], ProjectFirstModComponent);

//# sourceMappingURL=firstmod.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'project-swift',
        template: __webpack_require__(204)
    })
], ProjectSwiftComponent);

//# sourceMappingURL=swiftapp.component.js.map

/***/ })

},[254]);
//# sourceMappingURL=main.bundle.js.map