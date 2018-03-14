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
exports.push([module.i, "h1 {\r\n  color: #369;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 300%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div>\n  <!-- <app-search></app-search> -->\n  <!-- <app-home></app-home>  -->\n  <router-outlet></router-outlet> \n</div>"

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__artist_artist_component__ = __webpack_require__("../../../../../src/app/artist/artist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__artist_artist_track_list_artist_track_list_component__ = __webpack_require__("../../../../../src/app/artist/artist-track-list/artist-track-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__artist_artist_album_list_artist_album_list_component__ = __webpack_require__("../../../../../src/app/artist/artist-album-list/artist-album-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_always_auth_guard__ = __webpack_require__("../../../../../src/app/guards/always-auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_only_logged_in_users_guard__ = __webpack_require__("../../../../../src/app/guards/only-logged-in-users.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_always_auth_children_guard__ = __webpack_require__("../../../../../src/app/guards/always-auth-children.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_unsearched_term_guard__ = __webpack_require__("../../../../../src/app/guards/unsearched-term.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__artist_artist_videos_list_artist_videos_list_component__ = __webpack_require__("../../../../../src/app/artist/artist-videos-list/artist-videos-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'find', redirectTo: 'search' },
    // Since it holds an array we could have multiple guards for a single route.
    // { path: 'home', component: HomeComponent, canActivate: [AlwaysAuthGuard]},
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] },
    { path: 'search',
        component: __WEBPACK_IMPORTED_MODULE_6__search_search_component__["a" /* SearchComponent */],
        canDeactivate: [__WEBPACK_IMPORTED_MODULE_17__guards_unsearched_term_guard__["a" /* UnsearchedTermGuard */]]
    },
    { path: 'search/:term', component: __WEBPACK_IMPORTED_MODULE_6__search_search_component__["a" /* SearchComponent */] },
    { path: 'artist/:artistId',
        component: __WEBPACK_IMPORTED_MODULE_11__artist_artist_component__["a" /* ArtistComponent */],
        // guards will get executed in order they are declard in the array, only if all guards (allow)
        // i.e; evalute true then page ll be activated
        canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_always_auth_guard__["a" /* AlwaysAuthGuard */], __WEBPACK_IMPORTED_MODULE_15__guards_only_logged_in_users_guard__["a" /* OnlyLoggedInUsersGuard */]],
        canActivateChild: [__WEBPACK_IMPORTED_MODULE_16__guards_always_auth_children_guard__["a" /* AlwaysAuthChildrenGuard */]],
        children: [
            { path: '', redirectTo: 'tracks', pathMatch: 'full' },
            { path: 'tracks', component: __WEBPACK_IMPORTED_MODULE_12__artist_artist_track_list_artist_track_list_component__["a" /* ArtistTrackListComponent */] },
            { path: 'albums', component: __WEBPACK_IMPORTED_MODULE_13__artist_artist_album_list_artist_album_list_component__["a" /* ArtistAlbumListComponent */] },
            { path: 'videos', component: __WEBPACK_IMPORTED_MODULE_18__artist_artist_videos_list_artist_videos_list_component__["a" /* ArtistVideosListComponent */] }
        ]
    },
    // { path: '**', component: HomeComponent}
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_10__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__search_search_component__["a" /* SearchComponent */], __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_10__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */], __WEBPACK_IMPORTED_MODULE_11__artist_artist_component__["a" /* ArtistComponent */],
                __WEBPACK_IMPORTED_MODULE_12__artist_artist_track_list_artist_track_list_component__["a" /* ArtistTrackListComponent */], __WEBPACK_IMPORTED_MODULE_13__artist_artist_album_list_artist_album_list_component__["a" /* ArtistAlbumListComponent */], __WEBPACK_IMPORTED_MODULE_18__artist_artist_videos_list_artist_videos_list_component__["a" /* ArtistVideosListComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_14__guards_always_auth_guard__["a" /* AlwaysAuthGuard */], __WEBPACK_IMPORTED_MODULE_15__guards_only_logged_in_users_guard__["a" /* OnlyLoggedInUsersGuard */], __WEBPACK_IMPORTED_MODULE_16__guards_always_auth_children_guard__["a" /* AlwaysAuthChildrenGuard */], __WEBPACK_IMPORTED_MODULE_17__guards_unsearched_term_guard__["a" /* UnsearchedTermGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/artist/artist-album-list/artist-album-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artist/artist-album-list/artist-album-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n    <p class=\"lead\" *ngIf=\"loading\">Loading...</p>\n  </div>\n  <div *ngIf=\"albumsCount == 0\">\n      <h2 style=\"color:red\">Sorry, No results found!!</h2>\n    </div> \n   <div *ngIf=\"albumsCount\" class=\"head\"> \n     Total Albums: <span class=\"count\">({{albumsCount}})</span>\n   </div>\n\n<ul class=\"list-group\">\n    <li class=\"list-group-item\"\n        *ngFor=\"let album of albums\">\n      <img src=\"{{album.artworkUrl100 ? album.artworkUrl100 :'../../assets/img/no-image.jpg'}}\" width=\"100\" height=\"100\">\n      <a target=\"_blank\"\n         href=\"{{album.collectionViewUrl}}\">{{ album.collectionName ? album.collectionName : \"No info available\"  }}\n      </a>\n    </li>\n  </ul>"

/***/ }),

/***/ "../../../../../src/app/artist/artist-album-list/artist-album-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistAlbumListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArtistAlbumListComponent = /** @class */ (function () {
    function ArtistAlbumListComponent(activatedRoute, searchService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.searchService = searchService;
        this.loading = false;
        this.activatedRoute.parent.params.subscribe(function (params) {
            var trackId = params;
            // this.searchService.getAlbumList(trackId.artistId);
            _this.albums = [];
            _this.loading = true;
            _this.albumsCount = undefined;
            _this.searchService.getAlbumList(trackId.artistId).then(function (res) {
                _this.albums = res;
                _this.albumsCount = _this.searchService.getResultCount("albums");
                // console.log("albumsCount = ", this.albumsCount);
                _this.loading = false;
                console.log(_this.albums);
            });
        });
    }
    ArtistAlbumListComponent.prototype.ngOnInit = function () {
    };
    ArtistAlbumListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-artist-album-list',
            template: __webpack_require__("../../../../../src/app/artist/artist-album-list/artist-album-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/artist/artist-album-list/artist-album-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */]])
    ], ArtistAlbumListComponent);
    return ArtistAlbumListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/artist/artist-track-list/artist-track-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artist/artist-track-list/artist-track-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n    <p class=\"lead\" *ngIf=\"loading\">Loading...</p>\n  </div>\n  <div *ngIf=\"tracksCount == 0\">\n      <h2 style=\"color:red\">Sorry, No results found!!</h2>\n    </div> \n   <div *ngIf=\"tracksCount\" class=\"head\"> \n     Total Tracks: <span class=\"count\">({{tracksCount}})</span>\n   </div>  \n<ul class=\"list-group\">\n    <li class=\"list-group-item\"\n        *ngFor=\"let track of tracks\">\n      <img src=\"{{track.artworkUrl100 ? track.artworkUrl100 :'../../assets/img/no-image.jpg'}}\" width=\"100\" height=\"100\">\n      <a target=\"_blank\"\n         href=\"{{track.trackViewUrl}}\">{{ track.trackName  ? track.trackName : \"No info available\" }}\n      </a>\n    </li>\n  </ul>"

/***/ }),

/***/ "../../../../../src/app/artist/artist-track-list/artist-track-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistTrackListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArtistTrackListComponent = /** @class */ (function () {
    function ArtistTrackListComponent(activatedRoute, searchService) {
        // this.activatedRoute.params.subscribe(params => console.log(params)); // Object {}
        // The reason for this is that ActivatedRoute only passes you the parameters for the current components route and
        // since the route for ArtistTrackListComponent doesn’t have any route parameters it gets passed nothing,
        // we want to get the params for the parent route.
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.searchService = searchService;
        this.loading = false;
        // this.activatedRoute.parent.params.subscribe(params => console.log(params)); // Object {artistId: 12345}
        this.activatedRoute.parent.params.subscribe(function (params) {
            // console.log(params);
            var trackId = params;
            // this.searchService.getTrackList(trackId.artistId);
            _this.tracks = [];
            _this.loading = true;
            _this.tracksCount = undefined;
            _this.searchService.getTrackList(trackId.artistId).then(function (res) {
                _this.tracks = res;
                _this.tracksCount = _this.searchService.getResultCount("tracks");
                _this.loading = false;
                console.log(_this.tracks);
            });
        });
    }
    ArtistTrackListComponent.prototype.ngOnInit = function () {
    };
    ArtistTrackListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-artist-track-list',
            template: __webpack_require__("../../../../../src/app/artist/artist-track-list/artist-track-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/artist/artist-track-list/artist-track-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */]])
    ], ArtistTrackListComponent);
    return ArtistTrackListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/artist/artist-videos-list/artist-videos-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artist/artist-videos-list/artist-videos-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n    <p class=\"lead\" *ngIf=\"loading\">Loading...</p>\n  </div>\n  <div *ngIf=\"videosCount == 0\">\n      <h2 style=\"color:red\">Sorry, No results found!!</h2>\n    </div> \n   <div *ngIf=\"videosCount\" class=\"head\"> \n     Total Videos: <span class=\"count\">({{videosCount}})</span>\n   </div>\n<ul class=\"list-group\">\n    <li class=\"list-group-item\"\n        *ngFor=\"let video of videos\">\n      <img src=\"{{video.artworkUrl100 ? video.artworkUrl100 :'../../assets/img/no-image.jpg'}}\" width=\"100\" height=\"100\">\n      <a target=\"_blank\"\n         href=\"{{video.previewUrl}}\">{{ video.trackName ? video.trackName : \"No info available\"  }}\n      </a>\n    </li>\n  </ul>"

/***/ }),

/***/ "../../../../../src/app/artist/artist-videos-list/artist-videos-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistVideosListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArtistVideosListComponent = /** @class */ (function () {
    function ArtistVideosListComponent(activatedRoute, searchService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.searchService = searchService;
        this.loading = false;
        this.activatedRoute.parent.params.subscribe(function (params) {
            var trackId = params;
            // this.searchService.getAlbumList(trackId.artistId);
            _this.videos = [];
            _this.loading = true;
            _this.videosCount = undefined;
            _this.searchService.getVideoList(trackId.artistId).then(function (res) {
                _this.videos = res;
                _this.videosCount = _this.searchService.getResultCount("videos");
                // console.log("albumsCount = ", this.albumsCount);
                _this.loading = false;
                // console.log(this.videos);
            });
        });
    }
    ArtistVideosListComponent.prototype.ngOnInit = function () {
    };
    ArtistVideosListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-artist-videos-list',
            template: __webpack_require__("../../../../../src/app/artist/artist-videos-list/artist-videos-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/artist/artist-videos-list/artist-videos-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */]])
    ], ArtistVideosListComponent);
    return ArtistVideosListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/artist/artist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\na{\r\n    text-decoration: none; \r\n}\r\n.active a{\r\n    color:darkblue !important; \r\n    font-weight: bolder !important;   \r\n    background: #eaedf0\r\n}\r\na {\r\n    cursor: pointer;\r\n    color: #fff;\r\n    font-weight: bold;\r\n}\r\n.white{\r\n    color: #fff;\r\n    font-weight: bold;\r\n}\r\n.bk{\r\n    background: lightslategray;\r\n    padding: 20px;\r\n}\r\nh1, h4{\r\n    color:white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/artist/artist.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <img src=\"../assets/img/no-image.jpg\">  -->\n\n<div class=\"bk\">\n    \n    <h4 style=\"color:#fff\">Artist: <span style=\"color:#dcfaddf8\">{{artist?.artistName}}</span> <span style=\"color:#c5f2f6\">{{artist?.primaryGenreName}}</span></h4>\n    <hr />\n    <span [routerLinkActive]=\"['btn','btn-success']\" style=\"padding-left:10px\">\n      <!-- <a [routerLink]=\"['tracks']\">Tracks</a> | -->\n      <!-- A more explicit way of saying you want to route relative to the current URL is to prepend it with ./  -->\n      <!-- both above and below links work same and perfectly, i.e; direct to same path  -->\n      <!-- But below one is much explicit i.e; recommnded -->\n      <a [routerLink]=\"['./tracks']\">Tracks</a> \n    </span>\n    | \n    <!-- &nbsp;  | &nbsp; -->\n    <span [routerLinkActive]=\"['btn','btn-success']\">\n        <!-- Pre-pending with ./ clearly expresses our intent that the path is relative so lets use this syntax instead. -->\n        <a [routerLink]=\"['./albums']\">Albums</a>\n    </span>\n    |\n    <span [routerLinkActive]=\"['btn','btn-success']\">\n            <!-- Pre-pending with ./ clearly expresses our intent that the path is relative so lets use this syntax instead. -->\n            <a [routerLink]=\"['./videos']\">Videos</a>\n    </span>\n    \n    <!-- Now we have two router-outlets one nested inside another Angular figures out \n    which outlet to insert the component in by the nesting level of the route and the router outlet. -->\n    \n    <router-outlet></router-outlet>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/artist/artist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArtistComponent = /** @class */ (function () {
    function ArtistComponent(activatedRoute, searchService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.searchService = searchService;
        this.artist = {
            artistName: "",
            primaryGenreName: " "
        };
        this.activatedRoute.params.subscribe(function (params) {
            var trackId = params;
            _this.searchService.getArtistInfo(trackId.artistId).then(function (res) {
                console.log("response i got", res[0]);
                _this.artist.artistName = res[0].artistName;
                _this.artist.primaryGenreName = res[0].primaryGenreName;
            });
        });
    }
    ArtistComponent.prototype.ngOnInit = function () {
    };
    ArtistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-artist',
            template: __webpack_require__("../../../../../src/app/artist/artist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/artist/artist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */]])
    ], ArtistComponent);
    return ArtistComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/always-auth-children.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlwaysAuthChildrenGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AlwaysAuthChildrenGuard = /** @class */ (function () {
    function AlwaysAuthChildrenGuard() {
    }
    AlwaysAuthChildrenGuard.prototype.canActivateChild = function (next, state) {
        console.log("AlwaysAuthChildrenGuard");
        return true;
    };
    AlwaysAuthChildrenGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], AlwaysAuthChildrenGuard);
    return AlwaysAuthChildrenGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guards/always-auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlwaysAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AlwaysAuthGuard = /** @class */ (function () {
    function AlwaysAuthGuard() {
    }
    AlwaysAuthGuard.prototype.canActivate = function (next, state) {
        console.log("AlwaysAuthGuard called..");
        return true;
    };
    AlwaysAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], AlwaysAuthGuard);
    return AlwaysAuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guards/only-logged-in-users.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlyLoggedInUsersGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
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



var OnlyLoggedInUsersGuard = /** @class */ (function () {
    function OnlyLoggedInUsersGuard(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    OnlyLoggedInUsersGuard.prototype.canActivate = function (next, state) {
        var loggedIn = this.loginService.isLoggedIn();
        console.log("OnlyLoggedInUsersGuard called..");
        //  this is the future route that will be activated if the guard passes, we can use it’s params property to extract the route params.
        // console.log("ActivatedRouteSnapshot", next );
        // this is the future RouterState if the guard passes, we can find the URL we are trying to navigate to from the url property.
        // console.log("RouterStateSnapshot", state );
        if (!loggedIn) {
            alert("You are not authorized to viist this page.. Login Required");
            // re-direct user to login page
            // this.router.navigate(['login']);
        }
        else {
            // let user procced to visit the componen/page on which is guard is applied.
            console.log("You are authorized to visit this page.. Welcome.. :)");
        }
        return loggedIn;
    };
    OnlyLoggedInUsersGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], OnlyLoggedInUsersGuard);
    return OnlyLoggedInUsersGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guards/unsearched-term.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnsearchedTermGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UnsearchedTermGuard = /** @class */ (function () {
    function UnsearchedTermGuard() {
    }
    UnsearchedTermGuard.prototype.canDeactivate = function (component, next, state) {
        console.log("UnsearchedTermGuard called..");
        console.log("state", state);
        console.log("next", next);
        // if (next.params) {
        //   return true;
        // } else {
        //   // alert("u cant leave this page.. my marzi");
        //   return component.canDeactivate() || window.confirm("Are you sure?");
        // }
        return component.canDeactivate() || window.confirm("Are you sure?");
    };
    UnsearchedTermGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], UnsearchedTermGuard);
    return UnsearchedTermGuard;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".active a{\r\n    color:darkblue !important; \r\n    font-weight: bolder !important;   \r\n    background: #eaedf0\r\n}\r\na {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-light bg-faded\">\n  <a class=\"navbar-brand\" href=\"#\">iTunes Search App</a>\n  <ul class=\"nav navbar-nav\">\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" href=\"#\">Home</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\">Search</a>\n    </li>\n  </ul>\n</nav> -->\n\n<!-- Navigating using router.navigate(paramasArray[]) -->\n <!-- <a class=\"nav-link\" href=\"/#/\">Home <span class=\"sr-only\">(current)</span></a> -->\n <!-- <a class=\"nav-link\" href=\"/#/search\">Search</a> -->\n<!-- <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" (click)=\"goHome(homeEl)\">iTunes Search App</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\" #ulEl>\n      <li class=\"nav-item active\">\n       \n        <a class=\"nav-link\" (click)=\"goHome(homeEl)\" #homeEl>Home</a>\n      </li>\n      <li class=\"nav-item\">\n       \n        <a class=\"nav-link\" (click)=\"goSearch(searchEl)\" #searchEl>Search</a>\n      </li>\n    </ul>\n  </div>\n</nav> -->\n<!-- Navigating via a routerLink directive -->\n<!-- The routerLink directive takes as input the same link params array format that the router.navigate(…​) function takes. -->\n<!-- A routerLinkActive directive is associated with a route through a routerLink directive. -->\n<!-- It takes as input an array of classes which it will add to the element it’s attached to if it’s route is currently active -->\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" [routerLink]=\"['home']\">iTunes Search App</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\" #ulEl>\n      <li class=\"nav-item\"  [routerLinkActive]=\"['active']\">       \n        <a class=\"nav-link\" [routerLink]=\"['home']\" >Home</a>\n      </li>\n      <li class=\"nav-item\"  [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" [routerLink]=\"['/search']\"  >Search</a>\n        <!-- <a class=\"nav-link\" (click)=\"onSearch()\">Search</a> -->\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    function HeaderComponent(router, elementRef) {
        this.router = router;
        this.elementRef = elementRef;
    }
    /*   goHome(searchEl?) {
        this.router.navigate(['']);
        $(searchEl).css({"color": "darkblue", "font-weight": "bolder"});
      }
    
      goSearch(searchEl) {
        this.router.navigate(['search']);
        // console.log(searchEl);
        $(searchEl).css({"color": "darkblue", "font-weight": "bolder"});
    
        // console.log(this.ulEl.nativeElement.innerHTML);
      } */
    // onSearch() {
    //   this.router.navigate(['search', this.term]);
    // }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("ulEl", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HeaderComponent.prototype, "ulEl", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h3 class=\"display-3\">iTunes Search App</h3>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/Album.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Album; });
var Album = /** @class */ (function () {
    function Album(collectionName, artworkUrl100, collectionViewUrl) {
        this.collectionName = collectionName;
        this.artworkUrl100 = artworkUrl100;
        this.collectionViewUrl = collectionViewUrl;
    }
    return Album;
}());



/***/ }),

/***/ "../../../../../src/app/models/Track.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Track; });
var Track = /** @class */ (function () {
    function Track(trackName, artworkUrl100, trackViewUrl) {
        this.trackName = trackName;
        this.artworkUrl100 = artworkUrl100;
        this.trackViewUrl = trackViewUrl;
    }
    return Track;
}());



/***/ }),

/***/ "../../../../../src/app/models/Video.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Video; });
var Video = /** @class */ (function () {
    function Video(trackName, artworkUrl100, previewUrl) {
        this.trackName = trackName;
        this.artworkUrl100 = artworkUrl100;
        this.previewUrl = previewUrl;
    }
    return Video;
}());



/***/ }),

/***/ "../../../../../src/app/models/searchItem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchItem; });
var SearchItem = /** @class */ (function () {
    function SearchItem(name, artist, link, thumbnail, artistId) {
        this.name = name;
        this.artist = artist;
        this.link = link;
        this.thumbnail = thumbnail;
        this.artistId = artistId;
    }
    return SearchItem;
}());



/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n    color:red;\r\n    background: lightgreen;\r\n    text-align: center;\r\n}\r\n._404{\r\n    color:darkblue; \r\n    font-weight: bolder;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h2 class=\"display-3 _404\">404</h2>\n  <h3 class=\"display-3\"> Page not found!!!</h3>\n</div>"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "   \n<!-- <img src=\"assets/img/no-image.jpg\"> -->\n\n  <form class=\"form-inline\" >\n    <div class=\"form-group\">\n      <input type=\"search\"\n             class=\"form-control\"\n             placeholder=\"Enter search string\"\n             name=\"currentTerm\"\n             [(ngModel)] = \"currentTerm\"\n             #search> \n    </div>\n    &nbsp;\n    <button class=\"btn btn-primary\"\n            (click)=\"onSearch(search.value)\" > \n            Search\n    </button>\n    &nbsp;\n    <button *ngIf=\"hasPreviousData() && (records.length==0)\" (click)=\"getPreviousData()\" class=\"btn btn-success\">Previous Search Results</button>    \n  </form>\n  \n  <!-- <a href=\"http://localhost:4200/#/search/hi#routing-strategies\">Go there</a> -->\n  \n  <div class=\"text-center\">\n    <p class=\"lead\" *ngIf=\"loading\">Loading...</p>\n  </div>\n\n  <!--   <ul class=\"list-group\">\n    <li class=\"list-group-item\"\n        *ngFor=\"let track of records\">\n      <img src=\"{{track.thumbnail}}\">\n      <a target=\"_blank\"\n         href=\"{{track.link}}\">{{ track.name }}\n      </a>\n    </li>\n  </ul> -->\n\n <div *ngIf=\"recordsCount == 0\">\n   <h2 style=\"color:red\">Sorry, No results found!!</h2>\n </div> \n<div *ngIf=\"recordsCount\" class=\"head\"> \n  Total Songs: <span class=\"count\">({{recordsCount}})</span>\n</div>\n  <div class=\"list-group\">\n    <!-- <a [routerLink]=\"['artist', track.artistId]\"  -->\n    <!-- this just appends to the current url (relative to current path)-->\n    <!-- ex: http://localhost:4200/#/search/ji/artist/300117743 -->\n \n    <!-- this is relative url from root (relative to root path) -->\n    <!--ex: http://localhost:4200/#/artist/266838970 -->\n    <a [routerLink]=\"['/artist', track.artistId]\" \n       class=\"list-group-item list-group-item-action\"\n       *ngFor=\"let track of records\">\n      <img src=\"{{track.thumbnail ? track.thumbnail : 'assets/img/no-image.jpg' }}\">\n      {{ track.name  ? track.name : \"No info available\" }} <span class=\"text-muted\">by</span> {{ track.artist ? track.artist : \"No info available\"  }}\n    </a>\n  </div>\n\n\n\n  <!-- <a name=\"routing-strategies\">I m here</a> -->"

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_retry__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/retry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SearchComponent = /** @class */ (function () {
    function SearchComponent(itunes, route, router) {
        var _this = this;
        this.itunes = itunes;
        this.route = route;
        this.router = router;
        this.records = [];
        this.loading = false;
        this.recordsCount = undefined;
        this.route.params.subscribe(function (params) {
            // console.log("currentTerm.......", this.currentTerm);
            console.log("params", params);
            if (params['term']) {
                _this.currentTerm = params.term; // as to retain value inside text input box after refreshing page..
                _this.populateRecords(params['term']);
            }
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
        // console.log("called.......", this.currentTerm);
        if (this.itunes.getResultCount("records") > 0) {
            this.records = this.itunes.getPreviousSearchRecords();
            this.recordsCount = this.records.length;
        }
    };
    // doSearch(term: string) {
    //   this.loading = true;
    //   this.itunes.search(term).then(_ => this.loading = false);
    // }
    SearchComponent.prototype.onSearch = function (term) {
        // this.router.navigate(['search', {term: term}]);
        // or
        this.router.navigate(['search', term]);
    };
    SearchComponent.prototype.canDeactivate = function () {
        console.log("recordsCount = ", this.itunes.getResultCount("records"));
        return this.itunes.getResultCount("records") > 0;
    };
    SearchComponent.prototype.populateRecords = function (term) {
        var _this = this;
        this.records = [];
        this.loading = true;
        // as to hide it while displaying "loading..." on screen
        this.recordsCount = undefined;
        this.itunes.search(term).then(function (res) {
            _this.records = res;
            _this.recordsCount = _this.itunes.getResultCount("records");
            console.log("Total Records", _this.recordsCount);
            _this.loading = false;
            console.log(_this.records);
        });
    };
    SearchComponent.prototype.ngOnDestroy = function () {
        console.log("on destroy called");
    };
    SearchComponent.prototype.hasPreviousData = function () {
        return this.itunes.getResultCount("records") > 0;
    };
    SearchComponent.prototype.getPreviousData = function () {
        console.log("records i already have", this.records);
        if (this.itunes.getResultCount("records") > 0) {
            this.records = this.itunes.getPreviousSearchRecords();
            // console.log("got records", this.records);
            // this.itunes.getPreviousSearchRecords();
        }
        console.log("records i got", this.records);
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_searchItem__ = __webpack_require__("../../../../../src/app/models/searchItem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_Track__ = __webpack_require__("../../../../../src/app/models/Track.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_Album__ = __webpack_require__("../../../../../src/app/models/Album.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_Video__ = __webpack_require__("../../../../../src/app/models/Video.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import 'rxjs/add/operator/map';

// import 'rxjs/add/operator/retry';
// import 'rxjs/add/observable/of';





var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
        this.apiRoot = 'https://itunes.apple.com/search';
        this.apiRootLookup = 'https://itunes.apple.com/lookup';
        this.records = [];
        this.loading = false;
    }
    // via promises
    SearchService.prototype.search = function (term) {
        var _this = this;
        var apiURL = this.apiRoot + "?term=" + term + "&media=music&limit=20";
        return this.http.get(apiURL)
            .toPromise()
            .then(function (res) {
            var response = res;
            _this.recordsCount = response.resultCount;
            console.log("responseObject", response);
            _this.records = response.results.map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_4__models_searchItem__["a" /* SearchItem */](item.trackName, item.artistName, item.trackViewUrl, item.artworkUrl30, item.artistId);
            }) || [];
            return _this.records;
        }, function (errorMsg) {
            console.error('An error occurred', errorMsg);
            console.error("Error: " + errorMsg.status + " " + errorMsg.statusText);
            return Promise.reject(errorMsg.message || "error");
        });
    };
    SearchService.prototype.getPreviousSearchRecords = function () {
        // console.log("records i possess", this.records);
        return this.records || [];
    };
    SearchService.prototype.getTrackList = function (artistId) {
        var _this = this;
        // console.log("getTrackList... i got this artistId", artistId );
        var apiURL = this.apiRootLookup + "?id=" + artistId + "&entity=song";
        // console.log('apiUrl = ', apiURL);
        return this.http.get(apiURL)
            .toPromise()
            .then(function (res) {
            var response = res;
            // console.log("responseObject", response);
            _this.tracksCount = response.resultCount;
            _this.tracks = response.results.map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_5__models_Track__["a" /* Track */](item.trackName, item.artworkUrl100, item.trackViewUrl);
            }) || [];
            // console.log("this.tracks", this.tracks);
            return _this.tracks;
        }, function (errorMsg) {
            console.error('An error occurred', errorMsg);
            console.error("Error: " + errorMsg.status + " " + errorMsg.statusText);
            return Promise.reject(errorMsg.message || "error");
        });
    };
    SearchService.prototype.getAlbumList = function (artistId) {
        var _this = this;
        // console.log("getAlbumList... i got this artistId", artistId );
        var apiURL = this.apiRootLookup + "?id=" + artistId + "&entity=album";
        // console.log('apiUrl = ', apiURL);
        return this.http.get(apiURL)
            .toPromise()
            .then(function (res) {
            var response = res;
            _this.albumsCount = response.resultCount;
            // console.log("responseObject", response);
            _this.albums = response.results.map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_6__models_Album__["a" /* Album */](item.collectionName, item.artworkUrl100, item.collectionViewUrl);
            }) || [];
            // console.log("this.tracks", this.tracks);
            return _this.albums;
        }, function (errorMsg) {
            console.error('An error occurred', errorMsg);
            console.error("Error: " + errorMsg.status + " " + errorMsg.statusText);
            return Promise.reject(errorMsg.message || "error");
        });
    };
    SearchService.prototype.getVideoList = function (artistId) {
        var _this = this;
        // console.log("getAlbumList... i got this artistId", artistId );
        var apiURL = this.apiRootLookup + "?id=" + artistId + "&entity=musicVideo";
        // https://itunes.apple.com/lookup?id=${params['artistId']}&entity=musicVideo
        console.log('apiUrl = ', apiURL);
        return this.http.get(apiURL)
            .toPromise()
            .then(function (res) {
            var response = res;
            _this.videosCount = response.resultCount;
            // console.log("responseObject", response);
            _this.videos = response.results.map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_7__models_Video__["a" /* Video */](item.trackName, item.artworkUrl100, item.previewUrl);
            }) || [];
            console.log("this.videos", _this.videos);
            return _this.videos;
        }, function (errorMsg) {
            console.error('An error occurred', errorMsg);
            console.error("Error: " + errorMsg.status + " " + errorMsg.statusText);
            return Promise.reject(errorMsg.message || "error");
        });
    };
    SearchService.prototype.getArtistInfo = function (artistId) {
        // console.log("getAlbumList... i got this artistId", artistId );
        var apiURL = this.apiRootLookup + "?id=" + artistId;
        // console.log('apiUrl = ', apiURL);
        return this.http.get(apiURL)
            .toPromise()
            .then(function (res) {
            var response = res;
            return response.results || {};
        }, function (errorMsg) {
            console.error('An error occurred', errorMsg);
            console.error("Error: " + errorMsg.status + " " + errorMsg.statusText);
            return Promise.reject(errorMsg.message || "error");
        });
    };
    SearchService.prototype.getResultCount = function (countOf) {
        switch (countOf) {
            case "records":
                return this.recordsCount;
            case "tracks":
                return this.tracksCount;
            case "albums":
                return this.albumsCount;
            case "videos":
                return this.videosCount;
        }
    };
    SearchService.prototype.isLoggedIn = function () {
        return true;
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SearchService);
    return SearchService;
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




if (!__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
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