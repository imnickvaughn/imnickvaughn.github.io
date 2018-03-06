webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".cursor {\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\r\n\r\n\r\n<div class=\"flex-container\">\r\n    <div>\r\n        <ul class=\"nav nav-pills cursor\">\r\n            <li [class.active]=\"viewIt === 'favorite'\">\r\n                <a (click)=\"viewIt = 'favorite'\">Favorite</a>\r\n            </li>\r\n            <li [class.active]=\"viewIt === 'like'\">\r\n                <a (click)=\"viewIt = 'like'\">Like</a>\r\n            </li>\r\n            <li [class.active]=\"viewIt === 'directives'\">\r\n                <a (click)=\"viewIt = 'directives'\">Directives</a>\r\n            </li>\r\n            <li [class.active]=\"viewIt === 'ngfor'\">\r\n                <a (click)=\"viewIt = 'ngfor'\">Ngfor</a>\r\n            </li>\r\n            <li [class.active]=\"viewIt === 'trackby'\">\r\n                <a (click)=\"viewIt = 'trackby'\">TrackBy</a>\r\n            </li>\r\n            <li [class.active]=\"viewIt === 'customDrctv'\">\r\n                <a (click)=\"viewIt = 'customDrctv'\">customDrctv</a>\r\n            </li>\r\n            <li [class.active]=\"viewIt === 'zippy'\">\r\n                <a (click)=\"viewIt = 'zippy'\">zippy- my own API</a>\r\n            </li>\r\n        </ul>\r\n        <div [ngSwitch]=\"viewIt\">\r\n            <div *ngSwitchCase=\"'favorite'\">\r\n                <favorite></favorite>\r\n            </div>\r\n            <div *ngSwitchCase=\"'like'\">\r\n                <like [isLike]=\"post.isLike\" (change)=\"onLikeChanged($event)\"></like>\r\n            </div>\r\n            <div *ngSwitchCase=\"'directives'\">\r\n                <directives></directives>\r\n            </div>\r\n            <div *ngSwitchCase=\"'ngfor'\">\r\n                <ngfor></ngfor>\r\n            </div>\r\n            <div *ngSwitchCase=\"'trackby'\">\r\n                <trackby></trackby>\r\n            </div>\r\n            <div *ngSwitchCase=\"'customDrctv'\">\r\n                <customDrctv></customDrctv>\r\n            </div>\r\n            <div class=\"flex\" *ngSwitchCase=\"'zippy'\">\r\n\r\n                <zippy title=\"Shipping Details\">\r\n                    Shipping Details Content\r\n                </zippy>\r\n\r\n            </div>\r\n            <div *ngSwitchDefault></div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.viewIt = 'zippy';
        this.post = {
            title: 'Title',
            isLike: true
        };
    }
    AppComponent.prototype.onLikeChanged = function (eventArgs) {
        console.log('Like changed: ', eventArgs);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__favorite_favorite_component__ = __webpack_require__("./src/app/favorite/favorite.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__like_like_component__ = __webpack_require__("./src/app/like/like.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_component__ = __webpack_require__("./src/app/directives/directives.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngfor_ngfor_component__ = __webpack_require__("./src/app/ngfor/ngfor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__trackby_trackby_component__ = __webpack_require__("./src/app/trackby/trackby.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__input_format_directive__ = __webpack_require__("./src/app/input-format.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__custom_drctv_custom_drctv_component__ = __webpack_require__("./src/app/custom-drctv/custom-drctv.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__input_format2_directive__ = __webpack_require__("./src/app/input-format2.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__zippy_zippy_component__ = __webpack_require__("./src/app/zippy/zippy.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__favorite_favorite_component__["a" /* FavoriteComponent */],
                __WEBPACK_IMPORTED_MODULE_4__like_like_component__["a" /* LikeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_component__["a" /* DirectivesComponent */],
                __WEBPACK_IMPORTED_MODULE_6__ngfor_ngfor_component__["a" /* NgforComponent */],
                __WEBPACK_IMPORTED_MODULE_7__trackby_trackby_component__["a" /* TrackbyComponent */],
                __WEBPACK_IMPORTED_MODULE_8__input_format_directive__["a" /* InputFormatDirective */],
                __WEBPACK_IMPORTED_MODULE_9__custom_drctv_custom_drctv_component__["a" /* CustomDrctvComponent */],
                __WEBPACK_IMPORTED_MODULE_10__input_format2_directive__["a" /* InputFormat2Directive */],
                __WEBPACK_IMPORTED_MODULE_11__zippy_zippy_component__["a" /* ZippyComponent */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/custom-drctv/custom-drctv.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/custom-drctv/custom-drctv.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<div>\n  Simple custom directive that puts type to lowercase\n  <b>upon loss of focus</b>:\n</div>\n<input type=\"text\" appInputFormat>\n<br>\n<br>\n<br>\n<div>\n  Custom directive where case is determined by user\n  <b>upon loss of focus</b> (clean approach):\n</div>\n<input type=\"radio\" name='case' value=\"lowercase\">lowercase\n<br>\n<input type=\"radio\" name='case' value=\"uppercase\">UPPERCASE\n<br>\n<input type=\"text\" submit=\"submit\" [appInputFormat2]=\"'lowercase'\">"

/***/ }),

/***/ "./src/app/custom-drctv/custom-drctv.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDrctvComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomDrctvComponent = /** @class */ (function () {
    function CustomDrctvComponent() {
    }
    CustomDrctvComponent.prototype.ngOnInit = function () { };
    CustomDrctvComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'customDrctv',
            template: __webpack_require__("./src/app/custom-drctv/custom-drctv.component.html"),
            styles: [__webpack_require__("./src/app/custom-drctv/custom-drctv.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomDrctvComponent);
    return CustomDrctvComponent;
}());



/***/ }),

/***/ "./src/app/directives/directives.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/directives/directives.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <ul class=\"nav nav-pills\">\n    <li [class.active]=\"viewMode === 'map'\">\n      <a (click)=\"viewMode = 'map'\">Map View</a>\n    </li>\n    <li [class.active]=\"viewMode === 'list'\">\n      <a (click)=\"viewMode = 'list'\">List View</a>\n    </li>\n  </ul>\n  <div [ngSwitch]=\"viewMode\">\n    <div *ngSwitchCase=\"'map'\">Map View Content</div>\n    <div *ngSwitchCase=\"'list'\">List View Content</div>\n    <div *ngSwitchDefault></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/directives/directives.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DirectivesComponent = /** @class */ (function () {
    function DirectivesComponent() {
        this.viewMode = 'map';
    }
    DirectivesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'directives',
            template: __webpack_require__("./src/app/directives/directives.component.html"),
            styles: [__webpack_require__("./src/app/directives/directives.component.css")]
        })
    ], DirectivesComponent);
    return DirectivesComponent;
}());



/***/ }),

/***/ "./src/app/favorite/favorite.component.css":
/***/ (function(module, exports) {

module.exports = ".glyphicon {\r\n  color: blue;\r\n  opacity: 0.5;\r\n  font-size: 200px;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/favorite/favorite.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\r\n\r\n\r\n<div>Done with class property binding:\r\n</div>\r\n<span class=\"glyphicon\" [class.glyphicon-star-empty]=\"!isFavorite\" [class.glyphicon-star]='isFavorite' (click)=\"onClick()\"></span>\r\n\r\n<br>\r\n<div>Done with directives:</div>\r\n<span class=\"glyphicon\" [ngClass]=\"{\r\n    'glyphicon-star-empty': !isFavorite,\r\n    'glyphicon-star': isFavorite }\" (click)=\"onClick()\"></span>"

/***/ }),

/***/ "./src/app/favorite/favorite.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FavoriteComponent = /** @class */ (function () {
    function FavoriteComponent() {
    }
    FavoriteComponent.prototype.onClick = function () {
        this.isFavorite = !this.isFavorite;
    };
    FavoriteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'favorite',
            template: __webpack_require__("./src/app/favorite/favorite.component.html"),
            styles: [__webpack_require__("./src/app/favorite/favorite.component.css")]
        })
    ], FavoriteComponent);
    return FavoriteComponent;
}());



/***/ }),

/***/ "./src/app/input-format.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputFormatDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputFormatDirective = /** @class */ (function () {
    function InputFormatDirective(el) {
        this.el = el;
    }
    InputFormatDirective.prototype.onBlur = function () {
        var value = this.el.nativeElement.value;
        this.el.nativeElement.value = value.toLowerCase();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('blur'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InputFormatDirective.prototype, "onBlur", null);
    InputFormatDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: '[appInputFormat]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]])
    ], InputFormatDirective);
    return InputFormatDirective;
}());



/***/ }),

/***/ "./src/app/input-format2.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputFormat2Directive; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputFormat2Directive = /** @class */ (function () {
    function InputFormat2Directive(el) {
        this.el = el;
    }
    InputFormat2Directive.prototype.onBlur = function () {
        var value = this.el.nativeElement.value;
        this.format = document.querySelector('input[name="case"]:checked').value;
        if (this.format === 'lowercase') {
            this.el.nativeElement.value = value.toLowerCase();
        }
        else {
            this.el.nativeElement.value = value.toUpperCase();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('appInputFormat2'),
        __metadata("design:type", Object)
    ], InputFormat2Directive.prototype, "format", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('blur'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InputFormat2Directive.prototype, "onBlur", null);
    InputFormat2Directive = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: '[appInputFormat2]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]])
    ], InputFormat2Directive);
    return InputFormat2Directive;
}());



/***/ }),

/***/ "./src/app/like/like.component.css":
/***/ (function(module, exports) {

module.exports = ".glyphicon {\r\n  display: inline;\r\n  color: deeppink;\r\n  opacity: 0.5;\r\n  font-size: 200px;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\np {\r\n  display: inline;\r\n  color: deeppink;\r\n  opacity: 0.5;\r\n  font-size: 200px;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\ndiv {\r\n  display: block;\r\n  color: deeppink;\r\n  opacity: 0.5;\r\n  font-size: 50px;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/like/like.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"glyphicon\" [class.glyphicon-heart]=\"!isLike\" [class.glyphicon-heart-empty]=\"isLike\" (click)=\"onClick()\"></span>\n<p>{{count}}</p>\n<div>\n    <ng-container *ngIf=\"!isLike; else elseTemplate\">\n        You really like me!?\n    </ng-container>\n    <ng-template #elseTemplate>\n        Do you like me?\n    </ng-template>\n</div>\n\n<!-- <div *ngIf=\"this.classList.contains('counter'); then likeCount+1\"> {{ likeCount }} </div>\n<ng-template #content> {{ likeCount }} </ng-template> -->"

/***/ }),

/***/ "./src/app/like/like.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LikeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LikeComponent = /** @class */ (function () {
    function LikeComponent() {
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.count = 0;
    }
    LikeComponent.prototype.onClick = function () {
        this.isLike = !this.isLike;
        this.change.emit({ newValue: this.isLike });
        if (!this.isLike) {
            this.count = this.count + 1;
        }
        else {
            this.count = this.count - 1;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('isLike'),
        __metadata("design:type", Boolean)
    ], LikeComponent.prototype, "isLike", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])('change'),
        __metadata("design:type", Object)
    ], LikeComponent.prototype, "change", void 0);
    LikeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'like',
            template: __webpack_require__("./src/app/like/like.component.html"),
            styles: [__webpack_require__("./src/app/like/like.component.css")]
        })
    ], LikeComponent);
    return LikeComponent;
}());



/***/ }),

/***/ "./src/app/ngfor/ngfor.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ngfor/ngfor.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"onAdd()\">Add</button>\n<ul>\n  <li *ngFor=\"let course of courses; index as i\">{{i}} - {{course.name}}\n    <button class=\"btn btn-warning\" (click)='onRemove(course)'>Remove</button>\n  </li>\n\n</ul>\n<ul>\n  <li *ngFor=\"let course of courses; even as isEven\">{{course.name}}\n    <span *ngIf=\"isEven\">(EVEN)</span>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/ngfor/ngfor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgforComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgforComponent = /** @class */ (function () {
    function NgforComponent() {
        this.courses = [
            { id: 1, name: 'course1 ' },
            { id: 2, name: 'course2 ' },
            { id: 3, name: 'course3 ' }
        ];
    }
    NgforComponent.prototype.onAdd = function () {
        this.courses.push({
            id: 4,
            name: 'course' + Math.floor(Math.random() * Math.floor(100))
        });
    };
    NgforComponent.prototype.onRemove = function (course) {
        console.log(course);
        var index = this.courses.indexOf(course);
        this.courses.splice(index, 1);
    };
    NgforComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'ngfor',
            template: __webpack_require__("./src/app/ngfor/ngfor.component.html"),
            styles: [__webpack_require__("./src/app/ngfor/ngfor.component.css")]
        })
    ], NgforComponent);
    return NgforComponent;
}());



/***/ }),

/***/ "./src/app/trackby/trackby.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/trackby/trackby.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn\" (click)=\"onLoad()\">\n\n  Load </button>\n<button class=\"btn\" (click)=\"onAdd()\">Add</button>\n<ul>\n  <li *ngFor=\"let course of courses; index as i; trackBy: trackCourse\">{{i}} - {{course.name}}\n    <button class=\"btn btn-warning\" (click)='onRemove(course)'>Remove</button>\n  </li>\n\n</ul>"

/***/ }),

/***/ "./src/app/trackby/trackby.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackbyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TrackbyComponent = /** @class */ (function () {
    function TrackbyComponent() {
    }
    TrackbyComponent.prototype.onLoad = function () {
        this.courses = [
            { id: 1, name: 'course1 ' },
            { id: 2, name: 'course2 ' },
            { id: 3, name: 'course3 ' }
        ];
    };
    TrackbyComponent.prototype.onAdd = function () {
        this.courses.push({
            id: 4,
            name: 'course' + Math.floor(Math.random() * Math.floor(100))
        });
    };
    TrackbyComponent.prototype.onRemove = function (course) {
        console.log(course);
        var index = this.courses.indexOf(course);
        this.courses.splice(index, 1);
    };
    TrackbyComponent.prototype.trackCourse = function (index, course) {
        return course ? course.id : undefined;
    };
    TrackbyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'trackby',
            template: __webpack_require__("./src/app/trackby/trackby.component.html"),
            styles: [__webpack_require__("./src/app/trackby/trackby.component.css")]
        })
    ], TrackbyComponent);
    return TrackbyComponent;
}());



/***/ }),

/***/ "./src/app/zippy/zippy.component.css":
/***/ (function(module, exports) {

module.exports = ".zippy {\r\n  border: 1px solid #ccc;\r\n  margin: 10px;\r\n  border-radius: 5px;\r\n}\r\n.zippy-heading {\r\n  cursor: pointer;\r\n  padding: 20px;\r\n  font-weight: 700;\r\n}\r\n.zippy-body {\r\n  padding: 20px;\r\n}\r\n.glyphicon {\r\n  float: right;\r\n}\r\n.expanded {\r\n  background-color: #f0f0f0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/zippy/zippy.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"zippy\">\r\n    <div class=\"zippy-heading\" [class.expanded]='isExpanded' (click)='toggle()'>\r\n        {{title}}\r\n        <span class=\"glyphicon\" [ngClass]=\"{\r\n            'glyphicon-chevron-up': !isExpanded,\r\n            'glyphicon-chevron-down': isExpanded\r\n        }\"></span>\r\n    </div>\r\n    <div *ngIf=\"isExpanded\" class=\"zippy-body\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/zippy/zippy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZippyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ZippyComponent = /** @class */ (function () {
    function ZippyComponent() {
        this.isExpanded = false;
    }
    ZippyComponent.prototype.toggle = function (isExpanded) {
        this.isExpanded = !this.isExpanded;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('title'),
        __metadata("design:type", String)
    ], ZippyComponent.prototype, "title", void 0);
    ZippyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'zippy',
            template: __webpack_require__("./src/app/zippy/zippy.component.html"),
            styles: [__webpack_require__("./src/app/zippy/zippy.component.css")]
        })
    ], ZippyComponent);
    return ZippyComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map