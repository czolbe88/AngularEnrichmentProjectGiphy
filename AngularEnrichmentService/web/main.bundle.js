webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@Import url(\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\");\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"container\">\r\n\r\n  <nav mat-tab-nav-bar>\r\n    <a mat-tab-link\r\n       [routerLink]=\"['search']\">\r\n      Search Gif\r\n    </a>\r\n\r\n    <a mat-tab-link\r\n       [routerLink]=\"['retrieve']\">\r\n      Retrieve Gif\r\n    </a>\r\n\r\n\r\n  </nav>\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n  <!--<app-search-form></app-search-form>-->\r\n  <!--<app-display></app-display>-->\r\n\r\n\r\n\r\n  <!--<app-retrieval-form></app-retrieval-form>-->\r\n  <!--<app-display-user-gif></app-display-user-gif>-->\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_search_form_search_form_component__ = __webpack_require__("../../../../../src/app/components/search-form/search-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__searchGIF__ = __webpack_require__("../../../../../src/app/searchGIF.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_display_display_component__ = __webpack_require__("../../../../../src/app/components/display/display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__saveGIF__ = __webpack_require__("../../../../../src/app/saveGIF.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__retrieveGIF__ = __webpack_require__("../../../../../src/app/retrieveGIF.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_retrieval_form_retrieval_form_component__ = __webpack_require__("../../../../../src/app/components/retrieval-form/retrieval-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_display_user_gif_display_user_gif_component__ = __webpack_require__("../../../../../src/app/components/display-user-gif/display-user-gif.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_paginator__ = __webpack_require__("../../../material/esm5/paginator.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_cdk_layout__ = __webpack_require__("../../../cdk/esm5/layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














//angular material



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__components_search_form_search_form_component__["a" /* SearchFormComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_4__components_search_form_search_form_component__["a" /* SearchFormComponent */] },
    { path: 'retrieve', component: __WEBPACK_IMPORTED_MODULE_10__components_retrieval_form_retrieval_form_component__["a" /* RetrievalFormComponent */] },
    { path: "**", redirectTo: '/', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_search_form_search_form_component__["a" /* SearchFormComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_display_display_component__["a" /* DisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_retrieval_form_retrieval_form_component__["a" /* RetrievalFormComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_display_user_gif_display_user_gif_component__["a" /* DisplayUserGifComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_12__angular_router__["b" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_cdk_layout__["c" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_paginator__["a" /* MatPaginatorModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__searchGIF__["a" /* SearchGIFService */], __WEBPACK_IMPORTED_MODULE_8__saveGIF__["a" /* SaveGIFService */], __WEBPACK_IMPORTED_MODULE_9__retrieveGIF__["a" /* RetrieveGIFService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/display-user-gif/display-user-gif.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/display-user-gif/display-user-gif.component.html":
/***/ (function(module, exports) {

module.exports = "\n<table>\n  <tr *ngFor=\"let gif of displayResults\" >\n\n    <td>\n      <p name=\"gifTitle\">{{gif.title}}</p>\n    </td>\n\n    <td>\n      <img src={{gif.downsized}} width=\"200\" />\n    </td>\n\n\n  </tr>\n\n\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/components/display-user-gif/display-user-gif.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayUserGifComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__retrieveGIF__ = __webpack_require__("../../../../../src/app/retrieveGIF.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisplayUserGifComponent = /** @class */ (function () {
    function DisplayUserGifComponent(retrievalService) {
        this.retrievalService = retrievalService;
        this.displayResults = this.retrievalService.searchResult;
    }
    DisplayUserGifComponent.prototype.ngOnInit = function () {
    };
    DisplayUserGifComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-display-user-gif',
            template: __webpack_require__("../../../../../src/app/components/display-user-gif/display-user-gif.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/display-user-gif/display-user-gif.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__retrieveGIF__["a" /* RetrieveGIFService */]])
    ], DisplayUserGifComponent);
    return DisplayUserGifComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/display/display.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/display/display.component.html":
/***/ (function(module, exports) {

module.exports = "<form #saveForm=\"ngForm\" (ngSubmit)=\"saveGif()\">\r\n\r\n  <table>\r\n    <tr *ngFor=\"let gif of displayResults\" ngModelGroup={{displayResults.indexOf(gif)}}>\r\n\r\n\r\n      <td>\r\n        <p name=\"gifTitle\" ngModel=\"{{gif.title}}\">{{gif.title}}</p>\r\n      </td>\r\n\r\n      <td>\r\n        <img src={{gif.downsized}} width=\"200\" name=\"gifUrl\" ngModel=\"{{gif.downsized}}\"/>\r\n      </td>\r\n\r\n      <td>\r\n        <input type=\"checkbox\" name=\"cb\" value=\"{{gif.title}}\" ngModel/>\r\n      </td>\r\n\r\n      <!--<td>-->\r\n      <!--<input type=\"text\"  name =\"gifUrl\"  value= {{gif.downsized}}   hidden ngModel />-->\r\n      <!--</td>-->\r\n      <!--<td>-->\r\n      <!--<input type=\"text\"  name = \"gifTitle\"  value= {{gif.title}} hidden  ngModel />-->\r\n      <!--</td>-->\r\n\r\n\r\n    </tr>\r\n\r\n\r\n\r\n  </table>\r\n\r\n\r\n\r\n\r\n\r\n  <div [hidden]=\"hideDisplayResults\">\r\n    <input type=\"text\" name=\"user\" id=\"user\" placeholder=\"key in username\" required ngModel/>\r\n    <button type=\"submit\" [disabled]=\"saveForm.invalid\">Save</button>\r\n  </div>\r\n\r\n\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/display/display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__searchGIF__ = __webpack_require__("../../../../../src/app/searchGIF.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__saveGIF__ = __webpack_require__("../../../../../src/app/saveGIF.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DisplayComponent = /** @class */ (function () {
    function DisplayComponent(searchResults, saveGIF) {
        this.searchResults = searchResults;
        this.saveGIF = saveGIF;
        this.allGiphy = [];
        this.savedGiphy = [];
        this.displayResults = [];
        this.hideDisplayResults = this.searchResults.hideDisplay;
    }
    DisplayComponent.prototype.ngOnInit = function () {
        console.log(this.hideDisplayResults);
        this.displayResults = this.searchResults.searchResult;
    };
    DisplayComponent.prototype.saveGif = function () {
        // console.log(this.saveForm.value);
        //resets the lists
        this.allGiphy.length = 0;
        this.savedGiphy.length = 0;
        var user = this.saveForm.value['user'];
        console.log('user is: ', user);
        // console.log('saveform.value[quot1quot]: ', this.saveForm.value['1']); //works
        for (var giphy in this.saveForm.value) {
            // console.log("title is: ", this.saveForm.value[giphy]['gifTitle']); //works
            var giphyObj = {
                title: this.saveForm.value[giphy]['gifTitle'],
                downsized: this.saveForm.value[giphy]['gifUrl'],
                cb: this.saveForm.value[giphy]['cb']
            };
            // console.log("giphyobj is: ", giphyObj); //works
            // console.log('gif object is:', this.saveForm.value[giphy]); //works
            // console.log(this.saveForm.value[giphy].gifTitle); //works
            // console.log(this.saveForm.value[giphy]['gifTitle']); //works
            this.allGiphy.push(giphyObj);
        }
        for (var _i = 0, _a = this.allGiphy; _i < _a.length; _i++) {
            var giphyObj = _a[_i];
            var checkbox = giphyObj['cb'];
            // var checkbox = this.saveForm.value[giphy]['cb'];
            if (checkbox == true) {
                // this.savedGiphy.push(giphyObj);
                // console.log("saving the gif: ", giphyObj.downsized, giphyObj.title );
                this.saveGIF.saveSearchResults(user, giphyObj.downsized, giphyObj.title);
            }
        }
        // console.log('list of all giphy:', this.allGiphy);
        // console.log('list of saved giphy: ', this.savedGiphy);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('saveForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* NgForm */])
    ], DisplayComponent.prototype, "saveForm", void 0);
    DisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-display',
            template: __webpack_require__("../../../../../src/app/components/display/display.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/display/display.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__searchGIF__["a" /* SearchGIFService */], __WEBPACK_IMPORTED_MODULE_2__saveGIF__["a" /* SaveGIFService */]])
    ], DisplayComponent);
    return DisplayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/retrieval-form/retrieval-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/retrieval-form/retrieval-form.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Retrieve your saved Gif</h1>\n\n<form #retrieveForm=\"ngForm\" (ngSubmit)=\"RetrieveGIFPService()\">\n  <label for=\"search\">Search</label>\n\n  <input type=\"text\" name=\"search\" id=\"search\" ngModel/>\n\n  <button type=\"submit\">Submit</button>\n\n  <button type=\"reset\">Clear</button>\n\n</form>\n\n<app-display-user-gif>\n"

/***/ }),

/***/ "../../../../../src/app/components/retrieval-form/retrieval-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetrievalFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__retrieveGIF__ = __webpack_require__("../../../../../src/app/retrieveGIF.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RetrievalFormComponent = /** @class */ (function () {
    function RetrievalFormComponent(retrieveService, router) {
        this.retrieveService = retrieveService;
        this.router = router;
        this.DataReturned = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    RetrievalFormComponent.prototype.ngOnInit = function () {
    };
    // service that returns a promise
    RetrievalFormComponent.prototype.RetrieveGIFPService = function () {
        console.log('callback method');
        this.retrieveService.getSearchResults(this.retrieveForm.value.search);
        console.log('DONE?');
        this.router.navigate(['/search']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], RetrievalFormComponent.prototype, "DataReturned", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('retrieveForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgForm */])
    ], RetrievalFormComponent.prototype, "retrieveForm", void 0);
    RetrievalFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-retrieval-form',
            template: __webpack_require__("../../../../../src/app/components/retrieval-form/retrieval-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/retrieval-form/retrieval-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__retrieveGIF__["a" /* RetrieveGIFService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], RetrievalFormComponent);
    return RetrievalFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/search-form/search-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search-form/search-form.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Search for Gif</h1>\r\n\r\n  <form #submitForm=\"ngForm\" (ngSubmit)=\"searchGIFPService()\">\r\n    <label for=\"search\">Search</label>\r\n\r\n    <input type=\"text\" name=\"search\" id=\"search\" ngModel/>\r\n\r\n    <!--<input type=\"range\" min=\"1\" max=\"100\" value=\"50\" id=\"limit\" name=\"limit\" required ngModel>-->\r\n\r\n    <button type=\"submit\">Submit</button>\r\n\r\n    <button type=\"reset\">Clear</button>\r\n\r\n  </form>\r\n\r\n<mat-paginator [length]=\"totalItems\"\r\n               [pageSize]=\"limit\"\r\n               [pageSizeOptions]=\"[5, 10, 25]\"\r\n\r\n               (page)=\"pageEvent($event)\"\r\n\r\n\r\n>\r\n</mat-paginator>\r\n\r\n\r\n<app-display></app-display>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/search-form/search-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__searchGIF__ = __webpack_require__("../../../../../src/app/searchGIF.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchFormComponent = /** @class */ (function () {
    function SearchFormComponent(http, searchService) {
        this.http = http;
        this.searchService = searchService;
        this.DataReturned = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.url = 'https://api.giphy.com/v1/gifs/search?api_key=8aNpCLOpsmWzaQc20NdsXvBRsDu8OmWZ';
        this.data = [];
        this.pageIndex = 0;
        this.limit = 25;
        this.totalItems = this.searchService.totalItems;
        // method that returns a promise
        this.searchResults = [];
    }
    SearchFormComponent.prototype.ngOnInit = function () {
    };
    // service that returns a promise
    SearchFormComponent.prototype.searchGIFPService = function () {
        this.searchItem = this.submitForm.value.search;
        console.log('callback method');
        return (this.searchService.getSearchResults(this.searchItem, this.limit, this.pageIndex));
    };
    SearchFormComponent.prototype.pageEvent = function (pageEvent) {
        console.log("pressed: ", pageEvent.pageIndex);
        this.pageIndex = pageEvent.pageIndex;
        this.limit = pageEvent.pageSize;
        this.searchGIFPService();
    };
    SearchFormComponent.prototype.searchGIFP = function () {
        var queryParams = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set('q', this.submitForm.value.search).set('limit', this.submitForm.value.limit);
        return (this.http.get(this.url, { params: queryParams })
            .take(1)
            .toPromise()
            .then(function (resp) {
            console.log(resp['data']);
            var result = [];
            for (var _i = 0, _a = resp['data']; _i < _a.length; _i++) {
                var i = _a[_i];
                result.push({
                    title: i.title,
                    url: i.images.downsized.url
                });
            }
            var searchResult = [];
            for (var _b = 0, _c = resp['data']; _b < _c.length; _b++) {
                var i = _c[_b];
                var newGif = {
                    title: i.title,
                    downsized: i.url
                };
                searchResult.push(newGif);
            }
            // this.DataReturned.next(searchResult);
            console.log(searchResult);
        })
            .catch(function (error) {
            console.log(error);
        }));
    };
    // GET method that returns observable
    SearchFormComponent.prototype.searchGIF = function () {
        console.log('button is pressed. string is: ', this.submitForm.value.search);
        var queryParams = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set('q', this.submitForm.value.search).set('limit', this.submitForm.value.limit);
        // console.log(queryParams.toString());
        this.http.get(this.url, { params: queryParams }).subscribe(function (resp) {
            console.log(resp['data']);
            var result = [];
            for (var _i = 0, _a = resp['data']; _i < _a.length; _i++) {
                var i = _a[_i];
                result.push({
                    title: i.title,
                    url: i.images.downsized.url
                });
            }
            console.log(result);
        }, function (error) {
            console.log(error);
        });
        this.submitForm.reset();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], SearchFormComponent.prototype, "DataReturned", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('submitForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */])
    ], SearchFormComponent.prototype, "submitForm", void 0);
    SearchFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-form',
            template: __webpack_require__("../../../../../src/app/components/search-form/search-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/search-form/search-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__searchGIF__["a" /* SearchGIFService */]])
    ], SearchFormComponent);
    return SearchFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/retrieveGIF.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetrieveGIFService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RetrieveGIFService = /** @class */ (function () {
    function RetrieveGIFService(http) {
        this.http = http;
        this.searchResult = [];
    }
    RetrieveGIFService.prototype.getSearchResults = function (username) {
        var _this = this;
        this.searchResult.length = 0;
        var url = '/Service/getGif?User=' + username;
        // Returns an observable
        return this.http.get(url)
            .take(1) // from observable take 1 from the stream
            .toPromise()
            .then(function (resp) {
            console.log("result: ", resp);
            for (var i in resp) {
                var newGif = {
                    title: resp[i]['Title'],
                    downsized: resp[i]['Url']
                };
                _this.searchResult.push(newGif);
            }
            console.log("searchResult: ", _this.searchResult);
        })
            .catch(function (error) {
            console.log(error);
        }); // convert the event to a promise
    };
    RetrieveGIFService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RetrieveGIFService);
    return RetrieveGIFService;
}());



/***/ }),

/***/ "../../../../../src/app/saveGIF.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveGIFService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SaveGIFService = /** @class */ (function () {
    function SaveGIFService(httpClient) {
        this.httpClient = httpClient;
    }
    SaveGIFService.prototype.saveSearchResults = function (username, gifUrl, title) {
        // const body = {
        //   username: username,
        //   gifUrl: gifUrl,
        //   title: title
        // };
        console.log('saving the gif using saveGIF service: ', username, gifUrl, title);
        // this.httpClient.post('/Service/saveGif', body)
        //   .take(1)
        //   .toPromise()
        //   .then((resp) => {
        //
        //     console.log("post request sent");
        //   }
        // )
        //   .catch((error) => {
        //     console.log(error);
        //   });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]();
        params.set('username', username);
        params.set('gifUrl', gifUrl);
        params.set('title', title);
        var options = {
            headers: headers,
            params: params
        };
        var url = '/Service/saveGif?title=' + title + '&gifUrl=' + gifUrl + '&username=' + username;
        this.httpClient
            .get(url)
            .subscribe(function (response) { return console.log(response); });
    };
    SaveGIFService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SaveGIFService);
    return SaveGIFService;
}());



/***/ }),

/***/ "../../../../../src/app/searchGIF.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchGIFService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchGIFService = /** @class */ (function () {
    function SearchGIFService(http, router) {
        this.http = http;
        this.router = router;
        this.searchResult = [];
        this.hideDisplay = true;
    }
    SearchGIFService.prototype.getSearchResults = function (q, limit, page) {
        var _this = this;
        var offset = limit * page;
        this.searchResult.length = 0;
        var qs = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('q', q).set('limit', limit.toString()).set('offset', offset.toString());
        console.log('inside service method');
        // Returns an observable
        return this.http.get('https://api.giphy.com/v1/gifs/search?api_key=8aNpCLOpsmWzaQc20NdsXvBRsDu8OmWZ', { params: qs })
            .take(1) // from observable take 1 from the stream
            .toPromise()
            .then(function (resp) {
            // console.log("result: ", resp);
            for (var _i = 0, _a = resp['data']; _i < _a.length; _i++) {
                var i = _a[_i];
                var newGif = {
                    title: i.title,
                    downsized: i.images.downsized.url
                };
                _this.searchResult.push(newGif);
                _this.totalItems = resp['pagination']['total_count'];
                console.log("total count is", _this.totalItems);
            }
            if (_this.searchResult.length > 0) {
                _this.hideDisplay = false;
                console.log(_this.hideDisplay);
            }
            console.log("searchResult: ", _this.searchResult);
            _this.router.navigate(['/search']);
        })
            .catch(function (error) {
            console.log(error);
        }); // convert the event to a promise
    };
    SearchGIFService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], SearchGIFService);
    return SearchGIFService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map