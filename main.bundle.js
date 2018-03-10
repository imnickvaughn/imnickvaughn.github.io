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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\"\r\n    href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\r\n\r\n\r\n<header></header>\r\n\r\n<div class=\"flex-container\">\r\n    <div class='mb-5'>\r\n        <ul class=\"nav nav-tabs cursor\">\r\n\r\n\r\n            <li [class.active]=\"viewIt === 'fetchapisandbox'\">\r\n                <a (click)=\"viewIt = 'fetchapisandbox'\">Fetch API Sandbox</a>\r\n            </li>\r\n            <li [class.active]=\"viewIt === 'xhrsandbox'\">\r\n                <a (click)=\"viewIt = 'xhrsandbox'\">XHR Sandbox</a>\r\n            </li>\r\n            <li [class.active]=\"viewIt === 'svgdasharray'\">\r\n                <a (click)=\"viewIt = 'svgdasharray'\">SVG Dash-Array and My Lightbox</a>\r\n            </li>\r\n            <li [class.active]=\"viewIt === 'zippy'\">\r\n                <a (click)=\"viewIt = 'zippy'\">Zippy API</a>\r\n            </li>\r\n            <li [class.active]=\"viewIt === 'customDrctv'\">\r\n                <a (click)=\"viewIt = 'customDrctv'\">Custom Directives</a>\r\n            </li>\r\n            <li [class.active]=\"viewIt === 'directives'\">\r\n                <a (click)=\"viewIt = 'directives'\">More Directives</a>\r\n            </li>\r\n            <li [class.active]=\"viewIt === 'favorite'\">\r\n                <a (click)=\"viewIt = 'favorite'\">Directives</a>\r\n            </li>\r\n\r\n\r\n        </ul>\r\n        <div [ngSwitch]=\"viewIt\">\r\n            <div *ngSwitchCase=\" 'favorite' \">\r\n                <div class=\"grid4\">\r\n                    <favorite></favorite>\r\n                    <like [isLike]=\"post.isLike\"\r\n                        (change)=\"onLikeChanged($event)\"></like>\r\n                </div>\r\n            </div>\r\n            <div *ngSwitchCase=\" 'directives' \">\r\n                <div class=\"grid4\">\r\n                    <directives></directives>\r\n                    <ngfor></ngfor>\r\n                    <trackby></trackby>\r\n                </div>\r\n            </div>\r\n            <div *ngSwitchCase=\" 'customDrctv' \">\r\n                <customDrctv></customDrctv>\r\n            </div>\r\n            <div *ngSwitchCase=\" 'zippy' \">\r\n                <zippy title=\"Shipping Details\">\r\n                    Shipping Details Content\r\n                </zippy>\r\n            </div>\r\n            <div *ngSwitchCase=\" 'svgdasharray' \">\r\n                <svg-dasharray></svg-dasharray>\r\n            </div>\r\n            <div *ngSwitchCase=\" 'xhrsandbox' \">\r\n                <xhr-sandbox></xhr-sandbox>\r\n            </div>\r\n            <div *ngSwitchCase=\" 'fetchapisandbox' \">\r\n                <fetch-api-sandbox></fetch-api-sandbox>\r\n            </div>\r\n            <div *ngSwitchDefault></div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div>"

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
        this.viewIt = 'fetchapisandbox';
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__favorite_favorite_component__ = __webpack_require__("./src/app/favorite/favorite.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__like_like_component__ = __webpack_require__("./src/app/like/like.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_directives_component__ = __webpack_require__("./src/app/directives/directives.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngfor_ngfor_component__ = __webpack_require__("./src/app/ngfor/ngfor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__trackby_trackby_component__ = __webpack_require__("./src/app/trackby/trackby.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__input_format_directive__ = __webpack_require__("./src/app/input-format.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__custom_drctv_custom_drctv_component__ = __webpack_require__("./src/app/custom-drctv/custom-drctv.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__input_format2_directive__ = __webpack_require__("./src/app/input-format2.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__zippy_zippy_component__ = __webpack_require__("./src/app/zippy/zippy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__svg_dasharray_svg_dasharray_component__ = __webpack_require__("./src/app/svg-dasharray/svg-dasharray.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__xhr_sandbox_xhr_sandbox_component__ = __webpack_require__("./src/app/xhr-sandbox/xhr-sandbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__fetch_api_sandbox_fetch_api_sandbox_component__ = __webpack_require__("./src/app/fetch-api-sandbox/fetch-api-sandbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_materialize__ = __webpack_require__("./node_modules/angular2-materialize/dist/index.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__favorite_favorite_component__["a" /* FavoriteComponent */],
                __WEBPACK_IMPORTED_MODULE_5__like_like_component__["a" /* LikeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__directives_directives_component__["a" /* DirectivesComponent */],
                __WEBPACK_IMPORTED_MODULE_7__ngfor_ngfor_component__["a" /* NgforComponent */],
                __WEBPACK_IMPORTED_MODULE_8__trackby_trackby_component__["a" /* TrackbyComponent */],
                __WEBPACK_IMPORTED_MODULE_9__input_format_directive__["a" /* InputFormatDirective */],
                __WEBPACK_IMPORTED_MODULE_10__custom_drctv_custom_drctv_component__["a" /* CustomDrctvComponent */],
                __WEBPACK_IMPORTED_MODULE_11__input_format2_directive__["a" /* InputFormat2Directive */],
                __WEBPACK_IMPORTED_MODULE_12__zippy_zippy_component__["a" /* ZippyComponent */],
                __WEBPACK_IMPORTED_MODULE_13__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_14__svg_dasharray_svg_dasharray_component__["a" /* SvgDasharrayComponent */],
                __WEBPACK_IMPORTED_MODULE_15__xhr_sandbox_xhr_sandbox_component__["a" /* XhrSandboxComponent */],
                __WEBPACK_IMPORTED_MODULE_16__fetch_api_sandbox_fetch_api_sandbox_component__["a" /* FetchApiSandboxComponent */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_17_angular2_materialize__["a" /* MaterializeModule */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
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

/***/ "./src/app/fetch-api-sandbox/fetch-api-sandbox.component.css":
/***/ (function(module, exports) {

module.exports = "form{\r\n    border: 1px solid teal;\r\n    border-radius: 4px;\r\n    margin: 10px;\r\n    padding: 10px;\r\n}"

/***/ }),

/***/ "./src/app/fetch-api-sandbox/fetch-api-sandbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container \">\n  <div class=\"row center\">\n    <h1 class=\"header col s12 light\">Fetch API Sandbox</h1>\n  </div>\n</div>\n\n\n<div class=\"container\">\n\n  <a href='#!'\n    class='btn waves-effect waves-teal'\n    id=\"getText\">Get Text</a>\n  <a href='#!'\n    class='btn waves-effect waves-teal'\n    id=\"getJson\">Get JSON</a>\n  <a href='#!'\n    class='btn waves-effect waves-teal'\n    id=\"getApi\">Get API</a>\n  <form id=\"addPost\">\n    <h6> POST DATA (look in console)</h6>\n    <div>\n      <input type=\"text\"\n        id=\"title\"\n        placeholder=\"Title\">\n    </div>\n    <div>\n      <textarea id=\"body\"\n        placeholder=\"Body\"></textarea>\n    </div>\n    <button href='#!'\n      class='btn waves-effect waves-teal'\n      type=\"submit\"\n      value=\"Submit\">Submit</button>\n  </form>\n\n\n  <div class=\"row\">\n    <div class=\"col-12 s12 m6\">\n      <div class=\"card blue-grey darken-1\">\n        <div class=\"card-content white-text\">\n          <span class=\"card-title\">Output: </span>\n          <p id=\"output\"></p>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/fetch-api-sandbox/fetch-api-sandbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetchApiSandboxComponent; });
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

var FetchApiSandboxComponent = /** @class */ (function () {
    function FetchApiSandboxComponent() {
    }
    FetchApiSandboxComponent.prototype.ngOnInit = function () {
        document.getElementById('getText').addEventListener('click', getText);
        document.getElementById('getJson').addEventListener('click', getJson);
        document.getElementById('getApi').addEventListener('click', getApi);
        document.getElementById('addPost').addEventListener('submit', addPost);
        function getText() {
            // fetch('sample.txt')
            // .then(function (res) {
            //     return res.text();
            // })
            // .then(function (data) {
            //     console.log(data);
            // })
            fetch('../../assets/sample.txt')
                .then(function (res) { return res.text(); })
                .then(function (data) {
                document.getElementById('output').innerHTML = '<h4>Text File</h4>' + data;
            });
        }
        function getJson() {
            fetch('../../assets/sample.json')
                .then(function (res) { return res.json(); })
                .then(function (data) {
                var output = '<h4>JSON File</h4>';
                data.forEach(function (user) {
                    output += "\n                    <ul>\n                    <li>ID: " + user.id + "</li>\n                    <li>Name: " + user.name + "</li>\n                    <li>Email: " + user.email + "</li>\n                    </ul>\n                    ";
                });
                document.getElementById('output').innerHTML = output;
            });
        }
        function getApi() {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(function (response) { return response.json(); })
                .then(function (json) {
                var output = '<h4>API Posts </h4>';
                json.forEach(function (posts) {
                    output += "\n                <h5>" + posts.title + "</h5>\n                <p>" + posts.body + "</p>\n                <br><br>\n                ";
                });
                document.getElementById('output').innerHTML = output;
            });
        }
        function addPost(e) {
            e.preventDefault();
            var title = document.getElementById('title').value;
            var body = document.getElementById('body').value;
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ title: title, body: body })
            })
                .then(function (res) { return res.json(); })
                .then(function (data) { return console.log(data); });
        }
    };
    FetchApiSandboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'fetch-api-sandbox',
            template: __webpack_require__("./src/app/fetch-api-sandbox/fetch-api-sandbox.component.html"),
            styles: [__webpack_require__("./src/app/fetch-api-sandbox/fetch-api-sandbox.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FetchApiSandboxComponent);
    return FetchApiSandboxComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.header{\r\n    display:-ms-grid;\r\n    display:grid;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    padding:10px;\r\n    margin-bottom: 10px;\r\n    -webkit-box-shadow: 0px 0px 12px 3px lightgray;\r\n            box-shadow: 0px 0px 12px 3px lightgray;\r\n\r\n\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">Me Tinkerins</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostListener */])('blur'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InputFormatDirective.prototype, "onBlur", null);
    InputFormatDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appInputFormat]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])('appInputFormat2'),
        __metadata("design:type", Object)
    ], InputFormat2Directive.prototype, "format", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostListener */])('blur'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InputFormat2Directive.prototype, "onBlur", null);
    InputFormat2Directive = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appInputFormat2]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
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
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])('isLike'),
        __metadata("design:type", Boolean)
    ], LikeComponent.prototype, "isLike", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])('change'),
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

/***/ "./src/app/svg-dasharray/svg-dasharray.component.css":
/***/ (function(module, exports) {

module.exports = ".lightbox {\r\n\r\n    position:fixed;\r\n\r\n    top:0;\r\n\r\n    left:0;\r\n\r\n    width:100%;\r\n\r\n    height:100%;\r\n\r\n    background:rgba(0, 0, 0, .8);\r\n\r\n}\r\n\r\n\r\n\r\n.lightbox_table {\r\n\r\n    width:100%;\r\n\r\n    height:100%;\r\n\r\n}\r\n\r\n\r\n\r\n.lightbox_table_cell {\r\n\r\n    vertical-align:middle;\r\n\r\n}\r\n\r\n\r\n\r\n.mainroot{\r\n    stroke-dasharray: 645;\r\n    stroke-dashoffset: 645;\r\n    stroke-width: 0.3px;\r\n    -webkit-animation: mainroot 10s ease-in-out forwards;\r\n            animation: mainroot 10s ease-in-out forwards;\r\n}\r\n\r\n\r\n\r\n@-webkit-keyframes mainroot {\r\n    100%{\r\n        stroke-width: 0.4px;\r\n        stroke-dashoffset: 0;\r\n    }\r\n}\r\n\r\n\r\n\r\n@keyframes mainroot {\r\n    100%{\r\n        stroke-width: 0.4px;\r\n        stroke-dashoffset: 0;\r\n    }\r\n}\r\n\r\n\r\n\r\n.node-1{\r\n    stroke-dasharray: 63;\r\n    stroke-dashoffset: 63;\r\n    opacity:0.4;\r\n    -webkit-animation: node-1 10s ease-out forwards;\r\n            animation: node-1 10s ease-out forwards;\r\n}\r\n\r\n\r\n\r\n@-webkit-keyframes node-1 {\r\n    0%{stroke-dashoffset: 63;}\r\n    10%{stroke-dashoffset: 63; }\r\n    50%{stroke-dashoffset: 0;}\r\n    100%{ stroke-dashoffset: 0; }\r\n}\r\n\r\n\r\n\r\n@keyframes node-1 {\r\n    0%{stroke-dashoffset: 63;}\r\n    10%{stroke-dashoffset: 63; }\r\n    50%{stroke-dashoffset: 0;}\r\n    100%{ stroke-dashoffset: 0; }\r\n}\r\n\r\n\r\n\r\n.node-2{\r\n    stroke-dasharray: 25;\r\n    stroke-dashoffset: 25;\r\n    opacity:0.4;\r\n    -webkit-animation: node-2 10s ease-out forwards;\r\n            animation: node-2 10s ease-out forwards;\r\n}\r\n\r\n\r\n\r\n@-webkit-keyframes node-2 {\r\n    0%{stroke-dashoffset: 25;}\r\n    20%{stroke-dashoffset: 25; }\r\n    35%{stroke-dashoffset: 0;}\r\n    100%{ stroke-dashoffset: 0; }\r\n}\r\n\r\n\r\n\r\n@keyframes node-2 {\r\n    0%{stroke-dashoffset: 25;}\r\n    20%{stroke-dashoffset: 25; }\r\n    35%{stroke-dashoffset: 0;}\r\n    100%{ stroke-dashoffset: 0; }\r\n}\r\n\r\n\r\n\r\n.node-3{\r\n    stroke-dasharray: 127;\r\n    stroke-dashoffset: 127;\r\n    opacity:0.4;\r\n    -webkit-animation: node-3 10s ease-in-out forwards;\r\n            animation: node-3 10s ease-in-out forwards;\r\n}\r\n\r\n\r\n\r\n@-webkit-keyframes node-3 {\r\n    0%{stroke-dashoffset: 127;}\r\n    25%{stroke-dashoffset: 127; }\r\n    50%{stroke-dashoffset: 0;}\r\n    100%{ stroke-dashoffset: 0; }\r\n}\r\n\r\n\r\n\r\n@keyframes node-3 {\r\n    0%{stroke-dashoffset: 127;}\r\n    25%{stroke-dashoffset: 127; }\r\n    50%{stroke-dashoffset: 0;}\r\n    100%{ stroke-dashoffset: 0; }\r\n}\r\n\r\n\r\n\r\n.node-4{\r\n    stroke-dasharray: 38;\r\n    stroke-dashoffset: 38;\r\n    opacity:0.4;\r\n    -webkit-animation: node-4 10s ease-in-out forwards;\r\n            animation: node-4 10s ease-in-out forwards;\r\n}\r\n\r\n\r\n\r\n@-webkit-keyframes node-4 {\r\n    0%{stroke-dashoffset: 38;}\r\n    30%{stroke-dashoffset: 38; }\r\n    40%{stroke-dashoffset: 0;}\r\n    100%{ stroke-dashoffset: 0; }\r\n}\r\n\r\n\r\n\r\n@keyframes node-4 {\r\n    0%{stroke-dashoffset: 38;}\r\n    30%{stroke-dashoffset: 38; }\r\n    40%{stroke-dashoffset: 0;}\r\n    100%{ stroke-dashoffset: 0; }\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/svg-dasharray/svg-dasharray.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h4> Click us!</h4>\n\n  <div class=\"grid4\">\n    <div>\n      <div onclick=\"document.getElementById('lightbox').style.display='inline';\">\n\n        <svg id=\"svg3919\"\n          viewBox=\"0 0 230.24243 117.9614\">\n          <defs id=\"defs3913\" />\n          <metadata id=\"metadata3916\">\n          </metadata>\n          <g transform=\"translate(66.362286,-0.17741527)\"\n            id=\"layer1\">\n            <path id=\"path3884\"\n              class=\"mainroot\"\n              d=\"m -66.328389,47.457907 c 6.013193,-1.593946 12.147122,-2.732202 18.331845,-3.40179 16.927811,-1.832686 34.735964,0.04911 49.5148804,8.50447 10.5213016,6.019481 18.9787666,15.020109 26.9608866,24.142483 7.982119,9.122374 15.749437,18.58991 25.388811,25.93936 10.868204,8.28636 23.997689,13.64696 37.5958,15.01553 13.598116,1.36857 27.622666,-1.30225 39.616256,-7.85476 11.99359,-6.55252 21.87443,-16.999221 27.46241,-29.471431 5.58799,-12.472211 6.79354,-26.91166 3.04875,-40.05541 C 157.98282,27.611226 149.77633,16.27611 138.76219,9.0570312 127.74805,1.8379526 114.00363,-1.1641098 101.01308,0.99739043 88.02254,3.1588907 75.933864,10.505513 68.187758,21.155592 c -7.746105,10.650079 -11.0112,24.496868 -8.650074,37.452616 1.299837,7.132346 4.25295,13.970967 8.643007,19.740484 4.390056,5.769518 10.217806,10.453369 16.842581,13.398243 6.624776,2.944873 14.036311,4.133053 21.237698,3.296446 7.20139,-0.836607 14.17003,-3.708951 19.80052,-8.275952 4.14927,-3.36555 7.58051,-7.660564 9.70013,-12.564698 2.11962,-4.904135 2.89527,-10.420979 1.94595,-15.678555 -0.94932,-5.257577 -3.66236,-10.223586 -7.74755,-13.666633 -4.08519,-3.443046 -9.54225,-5.286514 -14.85984,-4.770176 -4.78969,0.46508 -9.36658,2.844852 -12.49833,6.498562 -3.13175,3.653709 -4.78353,8.540715 -4.510596,13.345188\"\n          \n              style=\"fill:none;stroke:#000000;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"\n            />\n            <path id=\"path3943\"\n              class=\"node-1\"\n              d=\"m -52.130184,44.706517 c 9.118073,-1.51806 18.886022,1.584097 25.457422,8.084902 1.237846,1.224548 2.378074,2.577236 3.140418,4.142679 1.103523,2.266041 1.353309,4.935602 0.68932,7.367026 -0.663989,2.431423 -2.235958,4.603488 -4.338067,5.994114 -2.102109,1.390626 -4.716011,1.987676 -7.213426,1.647642 -2.497414,-0.340034 -4.856544,-1.614183 -6.510347,-3.516192\"\n          \n              style=\"fill:none;stroke:#000000;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"\n            />\n            <path id=\"path3959\"\n              class=\"node-2\"\n              d=\"m -14.390561,46.110732 c 1.318839,0.340339 2.626883,0.722508 3.921503,1.145739 2.0539066,0.671453 4.1408923,1.456784 6.2993049,1.353651 1.0792064,-0.05157 2.1615028,-0.336152 3.066528,-0.9263 0.90502522,-0.590148 1.62008184,-1.501656 1.86714852,-2.553466 C 0.89133298,44.587949 0.89313727,44.012572 0.73878399,43.47721 0.5844307,42.941847 0.27036241,42.448917 -0.16920638,42.106547 -0.49629209,41.851787 -0.8894923,41.68267 -1.29939,41.620449 c -0.4098977,-0.06222 -0.8355722,-0.01741 -1.2235252,0.128813 -0.3879529,0.146219 -0.737313,0.393514 -1.0041729,0.710805 -0.2668599,0.31729 -0.4506203,0.703864 -0.5281863,1.111137\"\n          \n              style=\"fill:none;stroke:#000000;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"\n            />\n            <path id=\"path3967\"\n              class=\"node-3\"\n              d=\"m 14.784477,62.38733 c 1.076861,0.943606 2.109902,1.937218 3.09468,2.976562 3.380537,3.56785 6.20164,7.7056 7.988733,12.284233 1.787093,4.578634 2.515285,9.608745 1.78248,14.468846 -1.086068,7.203009 -5.502984,13.844239 -11.751827,17.587879 -4.043224,2.42227 -8.7928595,3.64605 -13.5035666,3.49021 -4.7107071,-0.15584 -9.3661794,-1.68933 -13.2535754,-4.35451 -5.6811,-3.89494 -9.624627,-10.232627 -10.609083,-17.04998 -0.984456,-6.817353 1.004973,-14.011786 5.352066,-19.354841\"\n          \n              style=\"fill:none;stroke:#000000;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"\n            />\n            <path id=\"path3975\"\n              class=\"node-4\"\n              d=\"m 31.090864,79.735527 c 0.558148,0.611856 1.109438,1.229969 1.65373,1.854184 2.024587,2.321872 3.96412,4.740144 6.296673,6.752416 2.332554,2.012272 5.127341,3.621484 8.185994,3.988479 1.005992,0.120705 2.043455,0.102903 3.009973,-0.201124 0.966519,-0.304026 1.859385,-0.915307 2.372797,-1.788804 0.33457,-0.569222 0.49905,-1.237847 0.461402,-1.897038 -0.03765,-0.659192 -0.278032,-1.306178 -0.684152,-1.826771 -0.40612,-0.520594 -0.976734,-0.911885 -1.61021,-1.098052 -0.633477,-0.186168 -1.326786,-0.165433 -1.946191,0.06323 -0.778772,0.287501 -1.428831,0.906603 -1.753958,1.670433\"\n          \n              style=\"fill:none;stroke:#000000;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"\n            />\n          </g>\n        </svg>\n\n      </div>\n      <!-- LIGHTBOX CODE BEGIN -->\n      <div id=\"lightbox\"\n        class=\"lightbox\"\n        style=\"display:none\"\n        onclick=\"document.getElementById('lightbox').style.display='none';\">\n        <table class=\"lightbox_table\">\n          <tr>\n            <td class=\"lightbox_table_cell\"\n              align=\"center\">\n              <div id=\"lightbox_content\"\n                style=\"width:90vw; background-color:white; border:5px solid black;\">\n                <p>Click anywhere to close the lightbox.</p>\n\n                <svg id=\"svg3919\"\n                  viewBox=\"0 0 230.24243 117.9614\">\n                  <defs id=\"defs3913\" />\n                  <metadata id=\"metadata3916\">\n                  </metadata>\n                  <g transform=\"translate(66.362286,-0.17741527)\"\n                    id=\"layer1\">\n                    <path id=\"path3884\"\n                      class=\"mainroot\"\n                      d=\"m -66.328389,47.457907 c 6.013193,-1.593946 12.147122,-2.732202 18.331845,-3.40179 16.927811,-1.832686 34.735964,0.04911 49.5148804,8.50447 10.5213016,6.019481 18.9787666,15.020109 26.9608866,24.142483 7.982119,9.122374 15.749437,18.58991 25.388811,25.93936 10.868204,8.28636 23.997689,13.64696 37.5958,15.01553 13.598116,1.36857 27.622666,-1.30225 39.616256,-7.85476 11.99359,-6.55252 21.87443,-16.999221 27.46241,-29.471431 5.58799,-12.472211 6.79354,-26.91166 3.04875,-40.05541 C 157.98282,27.611226 149.77633,16.27611 138.76219,9.0570312 127.74805,1.8379526 114.00363,-1.1641098 101.01308,0.99739043 88.02254,3.1588907 75.933864,10.505513 68.187758,21.155592 c -7.746105,10.650079 -11.0112,24.496868 -8.650074,37.452616 1.299837,7.132346 4.25295,13.970967 8.643007,19.740484 4.390056,5.769518 10.217806,10.453369 16.842581,13.398243 6.624776,2.944873 14.036311,4.133053 21.237698,3.296446 7.20139,-0.836607 14.17003,-3.708951 19.80052,-8.275952 4.14927,-3.36555 7.58051,-7.660564 9.70013,-12.564698 2.11962,-4.904135 2.89527,-10.420979 1.94595,-15.678555 -0.94932,-5.257577 -3.66236,-10.223586 -7.74755,-13.666633 -4.08519,-3.443046 -9.54225,-5.286514 -14.85984,-4.770176 -4.78969,0.46508 -9.36658,2.844852 -12.49833,6.498562 -3.13175,3.653709 -4.78353,8.540715 -4.510596,13.345188\"\n                  \n                      style=\"fill:none;stroke:#000000;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"\n                    />\n                    <path id=\"path3943\"\n                      class=\"node-1\"\n                      d=\"m -52.130184,44.706517 c 9.118073,-1.51806 18.886022,1.584097 25.457422,8.084902 1.237846,1.224548 2.378074,2.577236 3.140418,4.142679 1.103523,2.266041 1.353309,4.935602 0.68932,7.367026 -0.663989,2.431423 -2.235958,4.603488 -4.338067,5.994114 -2.102109,1.390626 -4.716011,1.987676 -7.213426,1.647642 -2.497414,-0.340034 -4.856544,-1.614183 -6.510347,-3.516192\"\n                  \n                      style=\"fill:none;stroke:#000000;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"\n                    />\n                    <path id=\"path3959\"\n                      class=\"node-2\"\n                      d=\"m -14.390561,46.110732 c 1.318839,0.340339 2.626883,0.722508 3.921503,1.145739 2.0539066,0.671453 4.1408923,1.456784 6.2993049,1.353651 1.0792064,-0.05157 2.1615028,-0.336152 3.066528,-0.9263 0.90502522,-0.590148 1.62008184,-1.501656 1.86714852,-2.553466 C 0.89133298,44.587949 0.89313727,44.012572 0.73878399,43.47721 0.5844307,42.941847 0.27036241,42.448917 -0.16920638,42.106547 -0.49629209,41.851787 -0.8894923,41.68267 -1.29939,41.620449 c -0.4098977,-0.06222 -0.8355722,-0.01741 -1.2235252,0.128813 -0.3879529,0.146219 -0.737313,0.393514 -1.0041729,0.710805 -0.2668599,0.31729 -0.4506203,0.703864 -0.5281863,1.111137\"\n                  \n                      style=\"fill:none;stroke:#000000;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"\n                    />\n                    <path id=\"path3967\"\n                      class=\"node-3\"\n                      d=\"m 14.784477,62.38733 c 1.076861,0.943606 2.109902,1.937218 3.09468,2.976562 3.380537,3.56785 6.20164,7.7056 7.988733,12.284233 1.787093,4.578634 2.515285,9.608745 1.78248,14.468846 -1.086068,7.203009 -5.502984,13.844239 -11.751827,17.587879 -4.043224,2.42227 -8.7928595,3.64605 -13.5035666,3.49021 -4.7107071,-0.15584 -9.3661794,-1.68933 -13.2535754,-4.35451 -5.6811,-3.89494 -9.624627,-10.232627 -10.609083,-17.04998 -0.984456,-6.817353 1.004973,-14.011786 5.352066,-19.354841\"\n                  \n                      style=\"fill:none;stroke:#000000;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"\n                    />\n                    <path id=\"path3975\"\n                      class=\"node-4\"\n                      d=\"m 31.090864,79.735527 c 0.558148,0.611856 1.109438,1.229969 1.65373,1.854184 2.024587,2.321872 3.96412,4.740144 6.296673,6.752416 2.332554,2.012272 5.127341,3.621484 8.185994,3.988479 1.005992,0.120705 2.043455,0.102903 3.009973,-0.201124 0.966519,-0.304026 1.859385,-0.915307 2.372797,-1.788804 0.33457,-0.569222 0.49905,-1.237847 0.461402,-1.897038 -0.03765,-0.659192 -0.278032,-1.306178 -0.684152,-1.826771 -0.40612,-0.520594 -0.976734,-0.911885 -1.61021,-1.098052 -0.633477,-0.186168 -1.326786,-0.165433 -1.946191,0.06323 -0.778772,0.287501 -1.428831,0.906603 -1.753958,1.670433\"\n                  \n                      style=\"fill:none;stroke:#000000;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"\n                    />\n                  </g>\n                </svg>\n\n              </div>\n            </td>\n          </tr>\n        </table>\n      </div>\n      <!-- LIGHTBOX CODE END -->\n    </div>\n\n\n    <div>\n      <div (click)=\"lBActive=true\">\n\n        <svg viewBox=\"0 0 297 91\">\n          <defs>\n            <linearGradient id=\"linearGradient3880\"\n              x1=\"65.8\"\n              x2=\"276\"\n              y1=\"188\"\n              y2=\"173\"\n              gradientUnits=\"userSpaceOnUse\">\n              <stop offset=\"0\" />\n              <stop stop-opacity=\"0\"\n                offset=\"1\" />\n            </linearGradient>\n          </defs>\n          <g transform=\"translate(18.1 -119)\">\n            <path d=\"m269 162c9e-3 -0.707 0.183-1.5 0.624-2.28 0.632-1.09 1.78-2.08 3.39-2.41v-1e-5c1.36-0.26 2.92-4e-3 4.26 1.01 1.17 0.904 2.03 2.31 2.16 4.03 0.0612 0.955-0.0915 1.91-0.462 2.79-0.349 0.833-0.841 1.59-1.45 2.23-1.15 1.19-2.51 2.03-3.9 2.58-2.61 1.09-5.39 1.62-7.82 2.37-2.04 0.736-4.16 1.6-4.96 2.98-0.694 0.861-1.01 2.21-1.23 3.81-0.181 1.56-0.0605 3.26-0.039 5.43 0.0601 2-0.0229 4.36-0.688 6.93-0.62 2.52-2.14 5.1-4.77 7.07-1.61 1.11-3.46 1.78-5.4 1.95h-2e-5c-1.88 0.162-3.76-0.105-5.51-0.787-3.36-1.37-6.02-3.91-7.52-7.1-1.42-3.01-1.96-6.26-1.72-9.38 0.215-3 0.927-5.81 1.89-8.39 1.78-4.93 4.19-9.08 5-13 0.388-1.84 0.576-3.62 0.26-5.1-0.312-1.4-0.874-2.73-1.7-3.39-0.868-0.935-2.67-1.39-4.27-1.27-1.64 0.102-3.44 1.08-4.95 2.43-1.5 1.35-2.66 3.35-3.56 5.59-0.881 2.23-1.36 4.81-1.7 7.61-0.624 5.48-0.434 11.9-1.95 19.1-0.75 3.52-2.09 7.15-4.26 10.6-2.16 3.42-5.32 6.42-9.36 8.39-5.97 2.68-12.6 2.58-18.3 0.0831-5.53-2.44-9.93-6.53-12.9-11.4l-2e-5 -2e-5c-5.61-9.56-6.66-20-6.78-29.3-0.478-9.14-0.402-17.7-3.71-24.1-1.27-2.56-2.89-4.89-4.84-6.54-0.477-0.404-0.972-0.768-1.49-1.08-2.56-1.58-5.7-2.42-8.16-1.78-2.58 0.379-5.18 2.55-7.3 5.13-2.16 2.71-3.61 6.4-5.02 10.4l-1e-5 1e-5c-1.39 4.13-2.57 8.54-4.46 13.2-1.86 4.79-4.69 9.55-8.9 13.5-6.75 5.89-15.3 8.17-23.1 7.82-8.07-0.327-15.4-2.7-21.8-5.45-6.79-2.87-12.8-6.02-18.6-8.25-6.34-2.38-12.3-3.88-17.9-3.46-5.84 0.301-11.5 2.64-16.3 5.51-5.47 3.28-10.3 7.75-14.4 11.8-13.5 13.6-23.7 23.5-29.3 26.4-2.56 1.29-3.87 1.51-3.88 1.08-0.01-0.408 0.917-1.3 2.63-2.89 4.44-4.11 12.3-14.2 25.4-29.4 3.89-4.55 8.85-9.71 15-14 5.42-3.76 12.2-6.93 20.1-7.83 7.51-0.739 15 0.636 22.2 3.19 6.61 2.29 12.9 5.3 19.2 7.73 5.91 2.22 12 4.13 17.9 4.08 5.52-0.0871 11.3-1.57 14.8-5.11 2.41-2.16 4.13-5.48 5.67-9.22 1.46-3.71 2.52-8 4.01-12.6l1e-5 -2e-5c1.41-4.56 3.43-9.45 6.74-14 3.29-4.62 8.32-8.42 14.6-9.98 6.34-1.29 12.7 0.0889 17.8 3.43 3.63 2.39 6.58 5.47 8.81 8.9 0.828 1.27 1.56 2.6 2.19 3.95 4.48 9.95 4.82 20.2 4.96 29.1 0.503 8.94 0.853 17.3 4.75 23.1l1e-5 1e-5c1.86 2.91 4.3 5.37 7.05 6.49 2.68 1.1 5.89 1.33 8.07 0.212 1.6-0.653 3.1-2.13 4.32-3.86 1.24-1.79 2.08-4.08 2.71-6.57 1.31-5.09 1.18-11.2 2.09-17.9 0.445-3.41 1.24-6.94 2.64-10.4 1.42-3.57 3.66-6.95 6.71-9.72 3.15-2.87 7.24-4.7 11.7-5.07 4.67-0.367 9.29 1.29 12.8 4.67 2.64 2.78 4.11 6.13 4.53 9.44 0.432 3.35 0.0796 6.5-0.713 9.28-1.65 5.76-4.31 10.1-5.9 13.9-0.807 2.02-1.42 3.89-1.59 5.64-0.159 1.79-0.0423 3.48 0.551 4.78 0.595 1.3 1.54 2.46 2.56 2.87 0.524 0.24 1.09 0.38 1.59 0.366h1e-5c0.504-0.0109 1.02-0.134 1.39-0.357 0.7-0.269 1.3-1.32 1.79-2.47 0.492-1.26 0.609-2.95 0.733-4.75 0.0907-1.97 0.136-4.05 0.533-6.36 0.383-2.46 1.4-4.92 3.14-7.01 2.68-2.85 5.94-4.06 8.63-4.55 3.03-0.655 5.52-0.817 7.5-1.44 1.02-0.342 1.83-0.642 2.36-1.11 0.284-0.235 0.519-0.478 0.668-0.726 0.155-0.257 0.265-0.522 0.29-0.753 0.071-0.384-0.0964-0.893-0.355-1.2-0.289-0.366-0.841-0.604-1.3-0.619-0.561-0.0333-1.17 0.257-1.54 0.631-0.503 0.492-0.71 1.25-0.696 1.83\"\n          \n              fill=\"url(#linearGradient3880)\"\n              stroke=\"#000\"\n              stroke-width=\".265px\" />\n          </g>\n        </svg>\n\n      </div>\n      <!-- LIGHTBOX CODE BEGIN -->\n      <div id=\"lightbox\"\n        class=\"lightbox\"\n        *ngIf=\"lBActive\"\n        (click)=\"lBActive=false\">\n        <table class=\"lightbox_table\">\n          <tr>\n            <td class=\"lightbox_table_cell\"\n              align=\"center\">\n              <div id=\"lightbox_content\"\n                style=\"width:90vw; background-color:white; border:5px solid black;\">\n                <p>Click anywhere to close the lightbox.</p>\n                <p>\n\n\n\n                  <svg viewBox=\"0 0 297 91\">\n                    <defs>\n                      <linearGradient id=\"linearGradient3880\"\n                        x1=\"65.8\"\n                        x2=\"276\"\n                        y1=\"188\"\n                        y2=\"173\"\n                        gradientUnits=\"userSpaceOnUse\">\n                        <stop offset=\"0\" />\n                        <stop stop-opacity=\"0\"\n                          offset=\"1\" />\n                      </linearGradient>\n                    </defs>\n                    <g transform=\"translate(18.1 -119)\">\n                      <path d=\"m269 162c9e-3 -0.707 0.183-1.5 0.624-2.28 0.632-1.09 1.78-2.08 3.39-2.41v-1e-5c1.36-0.26 2.92-4e-3 4.26 1.01 1.17 0.904 2.03 2.31 2.16 4.03 0.0612 0.955-0.0915 1.91-0.462 2.79-0.349 0.833-0.841 1.59-1.45 2.23-1.15 1.19-2.51 2.03-3.9 2.58-2.61 1.09-5.39 1.62-7.82 2.37-2.04 0.736-4.16 1.6-4.96 2.98-0.694 0.861-1.01 2.21-1.23 3.81-0.181 1.56-0.0605 3.26-0.039 5.43 0.0601 2-0.0229 4.36-0.688 6.93-0.62 2.52-2.14 5.1-4.77 7.07-1.61 1.11-3.46 1.78-5.4 1.95h-2e-5c-1.88 0.162-3.76-0.105-5.51-0.787-3.36-1.37-6.02-3.91-7.52-7.1-1.42-3.01-1.96-6.26-1.72-9.38 0.215-3 0.927-5.81 1.89-8.39 1.78-4.93 4.19-9.08 5-13 0.388-1.84 0.576-3.62 0.26-5.1-0.312-1.4-0.874-2.73-1.7-3.39-0.868-0.935-2.67-1.39-4.27-1.27-1.64 0.102-3.44 1.08-4.95 2.43-1.5 1.35-2.66 3.35-3.56 5.59-0.881 2.23-1.36 4.81-1.7 7.61-0.624 5.48-0.434 11.9-1.95 19.1-0.75 3.52-2.09 7.15-4.26 10.6-2.16 3.42-5.32 6.42-9.36 8.39-5.97 2.68-12.6 2.58-18.3 0.0831-5.53-2.44-9.93-6.53-12.9-11.4l-2e-5 -2e-5c-5.61-9.56-6.66-20-6.78-29.3-0.478-9.14-0.402-17.7-3.71-24.1-1.27-2.56-2.89-4.89-4.84-6.54-0.477-0.404-0.972-0.768-1.49-1.08-2.56-1.58-5.7-2.42-8.16-1.78-2.58 0.379-5.18 2.55-7.3 5.13-2.16 2.71-3.61 6.4-5.02 10.4l-1e-5 1e-5c-1.39 4.13-2.57 8.54-4.46 13.2-1.86 4.79-4.69 9.55-8.9 13.5-6.75 5.89-15.3 8.17-23.1 7.82-8.07-0.327-15.4-2.7-21.8-5.45-6.79-2.87-12.8-6.02-18.6-8.25-6.34-2.38-12.3-3.88-17.9-3.46-5.84 0.301-11.5 2.64-16.3 5.51-5.47 3.28-10.3 7.75-14.4 11.8-13.5 13.6-23.7 23.5-29.3 26.4-2.56 1.29-3.87 1.51-3.88 1.08-0.01-0.408 0.917-1.3 2.63-2.89 4.44-4.11 12.3-14.2 25.4-29.4 3.89-4.55 8.85-9.71 15-14 5.42-3.76 12.2-6.93 20.1-7.83 7.51-0.739 15 0.636 22.2 3.19 6.61 2.29 12.9 5.3 19.2 7.73 5.91 2.22 12 4.13 17.9 4.08 5.52-0.0871 11.3-1.57 14.8-5.11 2.41-2.16 4.13-5.48 5.67-9.22 1.46-3.71 2.52-8 4.01-12.6l1e-5 -2e-5c1.41-4.56 3.43-9.45 6.74-14 3.29-4.62 8.32-8.42 14.6-9.98 6.34-1.29 12.7 0.0889 17.8 3.43 3.63 2.39 6.58 5.47 8.81 8.9 0.828 1.27 1.56 2.6 2.19 3.95 4.48 9.95 4.82 20.2 4.96 29.1 0.503 8.94 0.853 17.3 4.75 23.1l1e-5 1e-5c1.86 2.91 4.3 5.37 7.05 6.49 2.68 1.1 5.89 1.33 8.07 0.212 1.6-0.653 3.1-2.13 4.32-3.86 1.24-1.79 2.08-4.08 2.71-6.57 1.31-5.09 1.18-11.2 2.09-17.9 0.445-3.41 1.24-6.94 2.64-10.4 1.42-3.57 3.66-6.95 6.71-9.72 3.15-2.87 7.24-4.7 11.7-5.07 4.67-0.367 9.29 1.29 12.8 4.67 2.64 2.78 4.11 6.13 4.53 9.44 0.432 3.35 0.0796 6.5-0.713 9.28-1.65 5.76-4.31 10.1-5.9 13.9-0.807 2.02-1.42 3.89-1.59 5.64-0.159 1.79-0.0423 3.48 0.551 4.78 0.595 1.3 1.54 2.46 2.56 2.87 0.524 0.24 1.09 0.38 1.59 0.366h1e-5c0.504-0.0109 1.02-0.134 1.39-0.357 0.7-0.269 1.3-1.32 1.79-2.47 0.492-1.26 0.609-2.95 0.733-4.75 0.0907-1.97 0.136-4.05 0.533-6.36 0.383-2.46 1.4-4.92 3.14-7.01 2.68-2.85 5.94-4.06 8.63-4.55 3.03-0.655 5.52-0.817 7.5-1.44 1.02-0.342 1.83-0.642 2.36-1.11 0.284-0.235 0.519-0.478 0.668-0.726 0.155-0.257 0.265-0.522 0.29-0.753 0.071-0.384-0.0964-0.893-0.355-1.2-0.289-0.366-0.841-0.604-1.3-0.619-0.561-0.0333-1.17 0.257-1.54 0.631-0.503 0.492-0.71 1.25-0.696 1.83\"\n                    \n                        fill=\"url(#linearGradient3880)\"\n                        stroke=\"#000\"\n                        stroke-width=\".265px\" />\n                    </g>\n                  </svg>\n\n\n\n\n\n\n                </p>\n              </div>\n            </td>\n          </tr>\n        </table>\n      </div>\n      <!-- LIGHTBOX CODE END -->\n\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/svg-dasharray/svg-dasharray.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgDasharrayComponent; });
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

var SvgDasharrayComponent = /** @class */ (function () {
    function SvgDasharrayComponent() {
        this.lBActive = false;
    }
    SvgDasharrayComponent.prototype.ngOnInit = function () {
    };
    SvgDasharrayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'svg-dasharray',
            template: __webpack_require__("./src/app/svg-dasharray/svg-dasharray.component.html"),
            styles: [__webpack_require__("./src/app/svg-dasharray/svg-dasharray.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SvgDasharrayComponent);
    return SvgDasharrayComponent;
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

/***/ "./src/app/xhr-sandbox/xhr-sandbox.component.css":
/***/ (function(module, exports) {

module.exports = ".flex {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n"

/***/ }),

/***/ "./src/app/xhr-sandbox/xhr-sandbox.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>XHR Sandbox</h1>\n\n\n<button id=\"getText\">Get Text</button>\n\n<button id=\"getJson\">Get JSON</button>\n\n<button id=\"getApi\">Get API</button>\n\n\n\n\n<div id=\"output\"></div>"

/***/ }),

/***/ "./src/app/xhr-sandbox/xhr-sandbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XhrSandboxComponent; });
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

var XhrSandboxComponent = /** @class */ (function () {
    function XhrSandboxComponent() {
    }
    XhrSandboxComponent.prototype.ngOnInit = function () {
        document.getElementById('getText').addEventListener('click', getText);
        document.getElementById('getJson').addEventListener('click', getJson);
        document.getElementById('getApi').addEventListener('click', getApi);
        function getText() {
            var xhr = new XMLHttpRequest;
            xhr.open('GET', '../../assets/sample.txt', true);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    document.getElementById('output').innerHTML = xhr.responseText;
                }
            };
            xhr.send();
        }
        function getJson() {
            var xhr = new XMLHttpRequest;
            xhr.open('GET', '../../assets/sample.json', true);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    var jsonResp = JSON.parse(xhr.response);
                    var output = '';
                    for (var _i = 0, _a = Object.keys(jsonResp); _i < _a.length; _i++) {
                        var i = _a[_i];
                        output += "\n                    <div>ID: " + jsonResp[i].id + "</div>\n                    <div>Name: " + jsonResp[i].name + "</div>\n                    <div>Email: " + jsonResp[i].email + "</div>\n                    <br><br>\n                    ";
                    }
                    document.getElementById('output').innerHTML = output;
                }
            };
            xhr.send();
        }
        function getApi() {
            var xhr = new XMLHttpRequest;
            xhr.open('GET', 'https://api.github.com/users', true);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    var apiResp = JSON.parse(xhr.response);
                    var output = '';
                    for (var _i = 0, _a = Object.keys(apiResp); _i < _a.length; _i++) {
                        var i = _a[_i];
                        output += "\n                    <ul>\n                    <img src=\"" + apiResp[i].avatar_url + "\" style=\"height:70px;width:70px;\">\n                    <li>Name: " + apiResp[i].id + "</li>\n                    <li>Email: " + apiResp[i].login + "</li>\n                    </ul>\n                    <br><br>\n                    ";
                    }
                    document.getElementById('output').innerHTML = output;
                }
            };
            xhr.send();
        }
    };
    XhrSandboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'xhr-sandbox',
            template: __webpack_require__("./src/app/xhr-sandbox/xhr-sandbox.component.html"),
            styles: [__webpack_require__("./src/app/xhr-sandbox/xhr-sandbox.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], XhrSandboxComponent);
    return XhrSandboxComponent;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])('title'),
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* enableProdMode */])();
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