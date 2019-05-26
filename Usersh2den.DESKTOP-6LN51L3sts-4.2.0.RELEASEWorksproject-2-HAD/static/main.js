(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/employee-list/employee-list.component */ "./src/app/components/employee-list/employee-list.component.ts");
/* harmony import */ var _components_employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/employee-create/employee-create.component */ "./src/app/components/employee-create/employee-create.component.ts");
/* harmony import */ var _components_shifts_shifts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/shifts/shifts.component */ "./src/app/components/shifts/shifts.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_buisness_page_buisness_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/buisness-page/buisness-page.component */ "./src/app/components/buisness-page/buisness-page.component.ts");
/* harmony import */ var _components_shiftpool_shiftpool_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/shiftpool/shiftpool.component */ "./src/app/components/shiftpool/shiftpool.component.ts");
/* harmony import */ var _components_shift_config_shift_config_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/shift-config/shift-config.component */ "./src/app/components/shift-config/shift-config.component.ts");











var routes = [
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: '',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'employee',
        component: _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeListComponent"]
    },
    {
        path: 'employee-create',
        component: _components_employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeCreateComponent"]
    },
    {
        path: 'shifts',
        component: _components_shifts_shifts_component__WEBPACK_IMPORTED_MODULE_6__["ShiftsComponent"]
    },
    {
        path: 'signup',
        component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"]
    }, {
        path: 'business',
        component: _components_buisness_page_buisness_page_component__WEBPACK_IMPORTED_MODULE_8__["BuisnessPageComponent"]
    },
    {
        path: 'open',
        component: _components_shiftpool_shiftpool_component__WEBPACK_IMPORTED_MODULE_9__["ShiftpoolComponent"]
    },
    {
        path: 'shift-config',
        component: _components_shift_config_shift_config_component__WEBPACK_IMPORTED_MODULE_10__["ShiftConfigComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-navigation></app-navigation>\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ShiftMe';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var _pipes_signup_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/signup.pipe */ "./src/app/pipes/signup.pipe.ts");
/* harmony import */ var _pipes_trim_pipe_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/trim-pipe.pipe */ "./src/app/pipes/trim-pipe.pipe.ts");
/* harmony import */ var _components_employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/employee-create/employee-create.component */ "./src/app/components/employee-create/employee-create.component.ts");
/* harmony import */ var _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/employee-list/employee-list.component */ "./src/app/components/employee-list/employee-list.component.ts");
/* harmony import */ var _components_buisness_page_buisness_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/buisness-page/buisness-page.component */ "./src/app/components/buisness-page/buisness-page.component.ts");
/* harmony import */ var _components_shifts_shifts_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/shifts/shifts.component */ "./src/app/components/shifts/shifts.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _components_shiftpool_shiftpool_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/shiftpool/shiftpool.component */ "./src/app/components/shiftpool/shiftpool.component.ts");
/* harmony import */ var _components_shift_config_shift_config_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/shift-config/shift-config.component */ "./src/app/components/shift-config/shift-config.component.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
                _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__["NavigationComponent"],
                _pipes_signup_pipe__WEBPACK_IMPORTED_MODULE_12__["SignupPipe"],
                _pipes_trim_pipe_pipe__WEBPACK_IMPORTED_MODULE_13__["TrimPipePipe"],
                _components_employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_14__["EmployeeCreateComponent"],
                _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_15__["EmployeeListComponent"],
                _components_shifts_shifts_component__WEBPACK_IMPORTED_MODULE_17__["ShiftsComponent"],
                _components_buisness_page_buisness_page_component__WEBPACK_IMPORTED_MODULE_16__["BuisnessPageComponent"],
                _components_shiftpool_shiftpool_component__WEBPACK_IMPORTED_MODULE_19__["ShiftpoolComponent"],
                _components_shift_config_shift_config_component__WEBPACK_IMPORTED_MODULE_20__["ShiftConfigComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_11__["CollapseModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_18__["ModalModule"].forRoot()
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/ShiftConfig.ts":
/*!****************************************!*\
  !*** ./src/app/classes/ShiftConfig.ts ***!
  \****************************************/
/*! exports provided: ShiftConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftConfig", function() { return ShiftConfig; });
var ShiftConfig = /** @class */ (function () {
    function ShiftConfig(user, startTime, endTime, weekDays, numberOfEmployees) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.weekdays = weekDays;
        this.numberOfEmployees = numberOfEmployees;
        this.users = user;
    }
    return ShiftConfig;
}());



/***/ }),

/***/ "./src/app/classes/WeekDays.ts":
/*!*************************************!*\
  !*** ./src/app/classes/WeekDays.ts ***!
  \*************************************/
/*! exports provided: WeekDays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekDays", function() { return WeekDays; });
var WeekDays = /** @class */ (function () {
    function WeekDays(Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, id) {
        if (id === void 0) { id = 0; }
        this.monday = Monday;
        this.tuesday = Tuesday;
        this.wednesday = Wednesday;
        this.thursday = Thursday;
        this.friday = Friday;
        this.saturday = Saturday;
        this.sunday = Sunday;
        this.id = id;
    }
    return WeekDays;
}());



/***/ }),

/***/ "./src/app/classes/credentials.ts":
/*!****************************************!*\
  !*** ./src/app/classes/credentials.ts ***!
  \****************************************/
/*! exports provided: Credentials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Credentials", function() { return Credentials; });
var Credentials = /** @class */ (function () {
    function Credentials(password, hashedPassword, username, user) {
        this.password = password;
        this.hashedPassword = hashedPassword;
        this.username = username;
        this.user = user;
    }
    return Credentials;
}());



/***/ }),

/***/ "./src/app/classes/shift.ts":
/*!**********************************!*\
  !*** ./src/app/classes/shift.ts ***!
  \**********************************/
/*! exports provided: Shift */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shift", function() { return Shift; });
var Shift = /** @class */ (function () {
    function Shift(shiftId, startTime, endTime, employees, numberOfEmployees, isEmptyShift) {
        if (isEmptyShift === void 0) { isEmptyShift = false; }
        this.employees = [];
        this.startHour = startTime;
        this.endHour = endTime;
        this.employees = employees;
        this.isEmptyShift = isEmptyShift;
        this.shiftId = shiftId;
        this.numberOfEmployees = numberOfEmployees;
    }
    return Shift;
}());



/***/ }),

/***/ "./src/app/classes/users.ts":
/*!**********************************!*\
  !*** ./src/app/classes/users.ts ***!
  \**********************************/
/*! exports provided: Users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return Users; });
var Users = /** @class */ (function () {
    function Users(firstname, lastname, email, role, id, token) {
        if (token === void 0) { token = null; }
        this.firstName = firstname;
        this.email = email;
        this.lastName = lastname;
        this.role = role;
        this.userId = id;
        this.token = token;
    }
    return Users;
}());



/***/ }),

/***/ "./src/app/classes/week.ts":
/*!*********************************!*\
  !*** ./src/app/classes/week.ts ***!
  \*********************************/
/*! exports provided: Week */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Week", function() { return Week; });
var Week = /** @class */ (function () {
    function Week(days, id, startDate) {
        this.days = new Map();
        this.days = days;
        this.id = id;
        this.startDate = startDate;
    }
    return Week;
}());



/***/ }),

/***/ "./src/app/components/buisness-page/buisness-page.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/buisness-page/buisness-page.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#login-wrapper{\r\n    margin-top: 10vh;\r\n    padding: 50px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idWlzbmVzcy1wYWdlL2J1aXNuZXNzLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9idWlzbmVzcy1wYWdlL2J1aXNuZXNzLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2dpbi13cmFwcGVye1xyXG4gICAgbWFyZ2luLXRvcDogMTB2aDtcclxuICAgIHBhZGRpbmc6IDUwcHhcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/buisness-page/buisness-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/buisness-page/buisness-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container d-flex justify-content-center\">\r\n          \r\n      <div id=\"login-wrapper\" class=\"col-12 col-md-9 col-lg-6 bg-primary\">\r\n        \r\n        <div class=\"form-group d-flex justify-content-center flex-wrap\">\r\n          <label class=\"form-control-label text-white col-12\" for=\"businessName\">Business Name</label>\r\n          <input type=\"text\" [(ngModel)]=\"businessName\">\r\n        \r\n       \r\n        </div>\r\n        <div class=\"form-group has-danger d-flex justify-content-center flex-wrap\">\r\n          <label class=\"form-control-label text-white col-12\" for=\"city\">City</label>\r\n          <input type=\"text\" [(ngModel)]=\"city\">\r\n        \r\n        </div>\r\n\r\n        <div class=\"form-group has-danger d-flex justify-content-center flex-wrap\">\r\n            <label class=\"form-control-label text-white col-12\" for=\"address\">Address</label>\r\n            <input type=\"text\" [(ngModel)]=\"address\">\r\n          \r\n          </div>\r\n\r\n\r\n              <div class=\"form-group d-flex justify-content-center flex-wrap\">\r\n\r\n                  <label class=\"form-control-label text-white col-12 \" for=\"state\">State</label>\r\n                \r\n                  <div class=\"col-sm-6 d-flex justify-content-center flex-wrap\">\r\n                \r\n                    <select class=\"form-control\" id=\"state\" name=\"state\" [(ngModel)] = \"state\">\r\n                \r\n                      <option value=\"\">N/A</option>\r\n                \r\n                      <option value=\"1\">Alaska</option>\r\n                \r\n                      <option value=\"2\">Alabama</option>\r\n                \r\n                      <option value=\"3\">Arkansas</option>\r\n                \r\n                      <option value=\"4\">Arizona</option>\r\n                \r\n                      <option value=\"5\">California</option>\r\n                \r\n                      <option value=\"6\">Colorado</option>\r\n                \r\n                      <option value=\"7\">Connecticut</option>\r\n                                \r\n                      <option value=\"8\">Delaware</option>\r\n                \r\n                      <option value=\"9\">Florida</option>\r\n                \r\n                      <option value=\"10\">Georgia</option>\r\n                \r\n                      <option value=\"11\">Hawaii</option>\r\n                \r\n                      <option value=\"12\">Iowa</option>\r\n                \r\n                      <option value=\"13\">Idaho</option>\r\n                \r\n                      <option value=\"14\">Illinois</option>\r\n                \r\n                      <option value=\"15\">Indiana</option>\r\n                \r\n                      <option value=\"16\">Kansas</option>\r\n                \r\n                      <option value=\"17\">Kentucky</option>\r\n                \r\n                      <option value=\"18\">Louisiana</option>\r\n                \r\n                      <option value=\"19\">Massachusetts</option>\r\n                \r\n                      <option value=\"20\">Maryland</option>\r\n                \r\n                      <option value=\"21\">Maine</option>\r\n                \r\n                      <option value=\"22\">Michigan</option>\r\n              \r\n                      <option value=\"23\">Minnesota</option>\r\n                \r\n                      <option value=\"24\">Missouri</option>\r\n                \r\n                      <option value=\"25\">Mississippi</option>\r\n                \r\n                      <option value=\"26\">Montana</option>\r\n                \r\n                      <option value=\"27\">North Carolina</option>\r\n                \r\n                      <option value=\"28\">North Dakota</option>\r\n                \r\n                      <option value=\"29\">Nebraska</option>\r\n                \r\n                      <option value=\"30\">New Hampshire</option>\r\n                \r\n                      <option value=\"31\">New Jersey</option>\r\n                \r\n                      <option value=\"32\">New Mexico</option>\r\n                \r\n                      <option value=\"33\">Nevada</option>\r\n                \r\n                      <option value=\"34\">New York</option>\r\n                \r\n                      <option value=\"35\">Ohio</option>\r\n                \r\n                      <option value=\"36\">Oklahoma</option>\r\n                \r\n                      <option value=\"37\">Oregon</option>\r\n                \r\n                      <option value=\"38\">Pennsylvania</option>\r\n                                \r\n                      <option value=\"39\">Rhode Island</option>\r\n                \r\n                      <option value=\"40\">South Carolina</option>\r\n                \r\n                      <option value=\"41\">South Dakota</option>\r\n                \r\n                      <option value=\"42\">Tennessee</option>\r\n                \r\n                      <option value=\"43\">Texas</option>\r\n                \r\n                      <option value=\"44\">Utah</option>\r\n                \r\n                      <option value=\"45\">Virginia</option>\r\n                \r\n                      <option value=\"46\">Vermont</option>\r\n                \r\n                      <option value=\"47\">Washington</option>\r\n                \r\n                      <option value=\"48\">Wisconsin</option>\r\n                \r\n                      <option value=\"49\">West Virginia</option>\r\n                \r\n                      <option value=\"50\">Wyoming</option>\r\n                \r\n                    </select>\r\n                \r\n                  </div>\r\n                \r\n                </div>\r\n          <div class=\"form-group has-danger d-flex justify-content-center flex-wrap\">\r\n              <label class=\"form-control-label text-white col-12\" for=\"zipCode\">ZIP/Postal Code</label>\r\n              <input type=\"number\" [(ngModel)]=\"zipCode\">\r\n            \r\n            </div>\r\n           \r\n      <div class=\"d-flex justify-content-center col-12\">\r\n        <input class=\"btn btn-outline-light\" type=\"submit\" [disabled]=\"!(cityValid() && businessValid() && addressValid())\" (click)=\"submit()\">\r\n      </div>\r\n    \r\n    </div>\r\n    </section>"

/***/ }),

/***/ "./src/app/components/buisness-page/buisness-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/buisness-page/buisness-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: BuisnessPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuisnessPageComponent", function() { return BuisnessPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_buisness_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/buisness-page.service */ "./src/app/services/buisness-page.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var BuisnessPageComponent = /** @class */ (function () {
    function BuisnessPageComponent(buisnessPageService, loginService, router) {
        this.buisnessPageService = buisnessPageService;
        this.loginService = loginService;
        this.router = router;
        this.businessName = '';
        this.city = '';
        this.address = '';
        this.state = 0;
        this.zipCode = 0;
        this.lastStatus = 200;
    }
    BuisnessPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.loginService.getLoggedIn()) {
            this.router.navigateByUrl('login');
        }
        this.businessResponse = this.buisnessPageService.$businessStatus.subscribe(function (status) {
            if (status === 200) {
            }
            else {
                _this.lastStatus = status;
            }
        });
    };
    BuisnessPageComponent.prototype.ngOnDestroy = function () {
        if (this.businessResponse) {
            this.businessResponse.unsubscribe();
        }
    };
    BuisnessPageComponent.prototype.businessValid = function () {
        return this.businessName.length > 8;
    };
    BuisnessPageComponent.prototype.cityValid = function () {
        return this.city.length > 4;
    };
    BuisnessPageComponent.prototype.addressValid = function () {
        return this.address.length > 5;
    };
    BuisnessPageComponent.prototype.submit = function () {
        this.buisnessPageService.business(this.businessName, this.city, this.address, this.state, this.zipCode);
    };
    BuisnessPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buisness-page',
            template: __webpack_require__(/*! ./buisness-page.component.html */ "./src/app/components/buisness-page/buisness-page.component.html"),
            styles: [__webpack_require__(/*! ./buisness-page.component.css */ "./src/app/components/buisness-page/buisness-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_buisness_page_service__WEBPACK_IMPORTED_MODULE_2__["BuisnessPageService"], src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], BuisnessPageComponent);
    return BuisnessPageComponent;
}());



/***/ }),

/***/ "./src/app/components/employee-create/employee-create.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/employee-create/employee-create.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWUtY3JlYXRlL2VtcGxveWVlLWNyZWF0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/employee-create/employee-create.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/employee-create/employee-create.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h1>New Employee</h1>\r\n    <form (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">First Name</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.firstName\" [ngModelOptions]=\"{standalone: true}\" required>\r\n      </div>\r\n \r\n      <div class=\"form-group\">\r\n        <label for=\"alterEgo\">Last Name</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.lastName\" [ngModelOptions]=\"{standalone: true}\" required>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"alterEgo\">Email</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.email\" [ngModelOptions]=\"{standalone: true}\" required>\r\n      </div>\r\n\r\n      <div class=\"radio\">\r\n        <label><input type=\"radio\" name=\"optradio\" [(ngModel)]=\"user.role\" value=\"1\" [ngModelOptions]=\"{standalone: true}\" checked>Employee</label>\r\n      </div>\r\n      <div class=\"radio\">\r\n        <label><input type=\"radio\" name=\"optradio\" [(ngModel)]=\"user.role\" value=\"2\" [ngModelOptions]=\"{standalone: true}\">Manager</label>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"alterEgo\">Username</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" [ngModelOptions]=\"{standalone: true}\" required>\r\n        <div *ngIf = \"employeeService.nonUniqueUsername\" class=\"alert alert-danger\" role=\"alert\">\r\n          Username taken.\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"alterEgo\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone: true}\" required>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"alterEgo\">Confirm Password</label>\r\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"passwordConfirmation\" [ngModelOptions]=\"{standalone: true}\" required>\r\n      </div>\r\n \r\n      <button type=\"submit\" [disabled]=\"!formValidation()\" class=\"btn btn-success\">Submit</button>\r\n\r\n      <!-- <button (click)=\"sampleUserSubmit()\" class=\"btn btn-success\">SampleUserSubmit</button> -->\r\n    </form>\r\n    \r\n</div>"

/***/ }),

/***/ "./src/app/components/employee-create/employee-create.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/employee-create/employee-create.component.ts ***!
  \*************************************************************************/
/*! exports provided: EmployeeCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeCreateComponent", function() { return EmployeeCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_classes_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/users */ "./src/app/classes/users.ts");
/* harmony import */ var src_app_classes_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/classes/credentials */ "./src/app/classes/credentials.ts");
/* harmony import */ var src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");







var EmployeeCreateComponent = /** @class */ (function () {
    function EmployeeCreateComponent(employeeService, loginService, router) {
        this.employeeService = employeeService;
        this.loginService = loginService;
        this.router = router;
        this.user = new src_app_classes_users__WEBPACK_IMPORTED_MODULE_2__["Users"]('', '', '', -1, -1);
        this.username = '';
        this.password = '';
        this.passwordConfirmation = '';
    }
    EmployeeCreateComponent.prototype.ngOnInit = function () {
        if (!this.loginService.getLoggedIn()) {
            this.router.navigateByUrl('login');
        }
    };
    EmployeeCreateComponent.prototype.sampleUserSubmit = function () {
        var deleteMe = new src_app_classes_credentials__WEBPACK_IMPORTED_MODULE_3__["Credentials"]('cmCM11!!1', '', 'charlesManson', new src_app_classes_users__WEBPACK_IMPORTED_MODULE_2__["Users"]('Charles', 'Manson', 'cm@hotmail.com', 1, -1));
        this.employeeService.createUser(deleteMe);
        this.router.navigateByUrl('employee');
    };
    EmployeeCreateComponent.prototype.onSubmit = function () {
        var credentials = new src_app_classes_credentials__WEBPACK_IMPORTED_MODULE_3__["Credentials"](this.password, '', this.username, this.user);
        this.employeeService.createUser(credentials);
        this.router.navigateByUrl('employee');
    };
    EmployeeCreateComponent.prototype.formValidation = function () {
        this.usernameTrim();
        return this.passwordLengthValidation() &&
            this.passwordsMatch() &&
            this.usernameLengthValidation();
    };
    EmployeeCreateComponent.prototype.passwordLengthValidation = function () {
        return this.password.length >= 8;
    };
    EmployeeCreateComponent.prototype.passwordsMatch = function () {
        return this.password === this.passwordConfirmation;
    };
    EmployeeCreateComponent.prototype.usernameLengthValidation = function () {
        return this.username.length >= 5;
    };
    EmployeeCreateComponent.prototype.usernameTrim = function () {
        this.username = this.username.trim();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_classes_users__WEBPACK_IMPORTED_MODULE_2__["Users"])
    ], EmployeeCreateComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmployeeCreateComponent.prototype, "username", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmployeeCreateComponent.prototype, "password", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmployeeCreateComponent.prototype, "passwordConfirmation", void 0);
    EmployeeCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-create',
            template: __webpack_require__(/*! ./employee-create.component.html */ "./src/app/components/employee-create/employee-create.component.html"),
            styles: [__webpack_require__(/*! ./employee-create.component.css */ "./src/app/components/employee-create/employee-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"], src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], EmployeeCreateComponent);
    return EmployeeCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/employee-list/employee-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/employee-list/employee-list.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWUtbGlzdC9lbXBsb3llZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/employee-list/employee-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/employee-list/employee-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\r\n    <table class=\"table table-striped table-hover table-bordered\">\r\n      <tr>\r\n        <th>Firstname</th>\r\n        <th>Lastname</th>\r\n        <th>Email</th>\r\n        <th>Role</th>\r\n        <th>Delete</th>\r\n      </tr>\r\n      <tr *ngFor=\"let user of employeeService.listUsers\">\r\n        <td>{{user.firstName}}</td>\r\n        <td>{{user.lastName}}</td>\r\n        <td>{{user.email}}</td>\r\n        <td>{{user.role}}</td>\r\n        <td>\r\n          <button class=\"btn btn-danger\" (click)=\"delete(user)\">Delete</button>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <button class=\"btn btn-info\" (click)=\"create(user)\">New Employee</button>\r\n  "

/***/ }),

/***/ "./src/app/components/employee-list/employee-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/employee-list/employee-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/employee.service */ "./src/app/services/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");






var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(employeeService, httpClient, router, loginService) {
        this.employeeService = employeeService;
        this.httpClient = httpClient;
        this.router = router;
        this.loginService = loginService;
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        if (!this.loginService.getLoggedIn()) {
            this.router.navigateByUrl('login');
        }
        this.employeeService.getAllUsers();
    };
    EmployeeListComponent.prototype.delete = function (user) {
        this.employeeService.deleteUser(user);
        this.router.navigateByUrl('employee');
    };
    EmployeeListComponent.prototype.create = function () {
        this.router.navigateByUrl('employee-create');
    };
    EmployeeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-list',
            template: __webpack_require__(/*! ./employee-list.component.html */ "./src/app/components/employee-list/employee-list.component.html"),
            styles: [__webpack_require__(/*! ./employee-list.component.css */ "./src/app/components/employee-list/employee-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#login-wrapper{\r\n    margin-top: 20vh;\r\n    padding: 50px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9naW4td3JhcHBlcntcclxuICAgIG1hcmdpbi10b3A6IDIwdmg7XHJcbiAgICBwYWRkaW5nOiA1MHB4XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container d-flex justify-content-center\">\r\n<p *ngIf=\"lastStatus === 400\">Username or password is incorrect.</p>\r\n<p *ngIf=\"lastStatus === 500\">Unknown server error occurred.</p>\r\n<p *ngIf=\"lastStatus === 0\">Server unreachable.</p>\r\n    \r\n    <!-- <div class=\"col-3 d-flex justify-content-center \" style=\"max-width: 40rem;\"> -->\r\n  <div id=\"login-wrapper\" class=\"col-12 col-md-9 col-lg-6 bg-primary\">\r\n    <div class=\"form-group d-flex justify-content-center flex-wrap\">\r\n      <label class=\"form-control-label text-white col-12\" for=\"username\">Enter Username:</label>\r\n      <input [className]=\"validationClassesForUser()\" type=\"text\" [(ngModel)]=\"username\">\r\n     <!-- <div class=\"valid-feedback\">Success! You've done it.</div> -->\r\n   \r\n    </div>\r\n    <div class=\"form-group has-danger d-flex justify-content-center flex-wrap\">\r\n      <label class=\"form-control-label text-white col-12\" for=\"password\">Enter Password</label>\r\n      <input [className]=\"validationClassesForPassword()\" type=\"password\" [(ngModel)]=\"password\">\r\n      <!-- <div class=\"invalid-feedback\">Sorry, that username's taken. Try another?</div> -->\r\n    </div>\r\n  \r\n  <div class=\"d-flex justify-content-center col-12\">\r\n    <input class=\"btn btn-outline-light\" type=\"submit\" [disabled]=\"!(userValid() && passwordValid())\" (click)=\"submit()\">\r\n  </div>\r\n\r\n</div>\r\n</section>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router, cookieService) {
        this.loginService = loginService;
        this.router = router;
        this.cookieService = cookieService;
        this.username = '';
        this.password = '';
        this.lastStatus = 200;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginResponse = this.loginService.$loginStatus.subscribe(function (status) {
            if (status === 200) {
            }
            else {
                _this.lastStatus = status;
            }
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        if (this.loginResponse) {
            this.loginResponse.unsubscribe();
        }
    };
    LoginComponent.prototype.passwordValid = function () {
        return this.password.length > 8;
    };
    LoginComponent.prototype.userValid = function () {
        return this.username.length > 5;
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this.loginService.login(this.username, this.password);
        this.loginResponse = this.loginService.$loginStatus.subscribe(function (status) {
            if (status === 200) {
                _this.router.navigateByUrl('shifts');
            }
            else {
                _this.lastStatus = status;
            }
        });
    };
    LoginComponent.prototype.validationClassesForUser = function () {
        if (this.userValid()) {
            return 'form-control is-valid col-12';
        }
        else {
            return 'form-control is-invalid col-12';
        }
    };
    LoginComponent.prototype.validationClassesForPassword = function () {
        if (this.passwordValid()) {
            return 'form-control is-valid col-12';
        }
        else {
            return 'form-control is-invalid col-12';
        }
    };
    LoginComponent.prototype.managerValid = function () {
        if (this.loginService.currentUser.role === 2) {
            return true;
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link:hover{\r\n    background-color: blueviolet;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWxpbms6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-primary navbar-secondary d-flex justify-content-between\">\r\n  <button class=\"d-lg-none btn btn-outline-secondary\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"nabvar-content\">\r\n    <img class=\"navbar-toggler-icon\" alt=\"navigation menu\" src=\"./assets/img/hamburger.png\"></button>\r\n  <div id=\"navbar-content\" class=\"d-none d-lg-block\">  \r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\" >\r\n        <a routerLink=\"shifts\" class=\"nav-link text-white hover-light\">Schedule</a>\r\n      </li>\r\n        <li class=\"nav-item\"  *ngIf = \"managerValid()\">\r\n            <a routerLink=\"employee\" class=\"nav-link text-white hover-light\">Manage Employees</a>\r\n          </li>\r\n      <li class=\"nav-item\">\r\n\r\n        <a routerLink=\"login\" class=\"nav-link text-white hover-light\">Login</a>\r\n\r\n      <li class=\"nav-item\" *ngIf = \"managerValid()\">\r\n          <a routerLink=\"shift-config\" class=\"nav-link text-white hover-light\">Adding Shifts</a>\r\n        </li>\r\n        <li class=\"nav-item\" >\r\n            <a routerLink=\"employee-create\" class=\"nav-link text-white hover-light\">Signup</a>\r\n          </li>\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"open\" class=\"nav-link text-white\">Open Shifts</a>\r\n      </li> \r\n      <li class=\"nav-item\" >\r\n        <a (click)=\"logOut()\" routerLink=\"login\" class=\"nav-link text-white hover-light\">Log Out</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div [collapse]=\"!isCollapsed\" id=\"navbar-content\" class=\"d-lg-none\">  \r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\" >\r\n        <a routerLink=\"shifts\" class=\"nav-link text-white hover-light\">Schedule</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"login\" class=\"nav-link text-white hover-light\">Login</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"open\" class=\"nav-link text-white hover-light\">Open Shifts</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"shift-config\" class=\"nav-link text-white hover-light\">Adding Shifts</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"employee\" class=\"nav-link text-white hover-light\">Employees</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <h1 class=\"h1 text-white d-flex\">Logo Here</h1>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(cookieService, loginService, router) {
        this.cookieService = cookieService;
        this.loginService = loginService;
        this.router = router;
        this.isCollapsed = false;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.managerValid = function () {
        if (this.cookieService.get('role') === '2') {
            return true;
        }
    };
    NavigationComponent.prototype.logOut = function () {
        this.loginService.currentUser = null;
        console.log('Logged off');
        this.loginService.logOff();
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/components/navigation/navigation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/shift-config/shift-config.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/shift-config/shift-config.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#login-wrapper{\r\n    margin-top: 20vh;\r\n    padding: 50px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGlmdC1jb25maWcvc2hpZnQtY29uZmlnLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hpZnQtY29uZmlnL3NoaWZ0LWNvbmZpZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ2luLXdyYXBwZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHZoO1xyXG4gICAgcGFkZGluZzogNTBweFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/shift-config/shift-config.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/shift-config/shift-config.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container d-flex justify-content-center\">\r\n     \r\n  <div id=\"login-wrapper\" class=\"col-9 bg-primary\">\r\n      <section class=\"container d-flex justify-content-center\">\r\n      <div class=\"form-group d-flex justify-content-center flex-wrap\">\r\n        <label class=\"form-control-label text-white col-12\" for=\"startTime\">Shift Start Time:</label>\r\n        <input type=\"number\" [(ngModel)]=\"shiftConfig.startTime\">\r\n      \r\n      </div>\r\n      <div class=\"form-group has-danger d-flex justify-content-center flex-wrap\">\r\n        <label class=\"form-control-label text-white col-12\" for=\"endTime\">Shift End Time</label>\r\n        <input type=\"number\" [(ngModel)]=\"shiftConfig.endTime\">\r\n      </div>\r\n    </section>\r\n   <hr>\r\n      <section class=\"container d-flex justify-content-center\">\r\n    <div class=\"form-check justify-content-center\">\r\n      <label class=\"form-check-label text-white col-12\">\r\n        <input name=\"optionsRadios\" class=\"form-check-input\" type=\"checkbox\"  [(ngModel)]=\"shiftConfig.weekdays.monday\" [ngModelOptions]=\"{standalone: true}\" checked=\"\" value=\"1\">\r\n        Monday\r\n      </label>\r\n    </div>\r\n    <div class=\"form-check\">\r\n      <label class=\"form-check-label text-white col-12\">\r\n        <input name=\"optionsRadios\" class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"shiftConfig.weekdays.tuesday\" [ngModelOptions]=\"{standalone: true}\" checked=\"\" value=\"2\">\r\n        Tuesday\r\n      </label>\r\n    </div>\r\n    <div class=\"form-check\">\r\n      <label class=\"form-check-label text-white col-12\">\r\n        <input name=\"optionsRadios\" class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"shiftConfig.weekdays.wednesday\" [ngModelOptions]=\"{standalone: true}\" checked=\"\" value=\"3\">\r\n        Wednesday\r\n      </label>\r\n    </div>\r\n    <div class=\"form-check\">\r\n      <label class=\"form-check-label text-white col-12\">\r\n        <input name=\"optionsRadios\" class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"shiftConfig.weekdays.thursday\" [ngModelOptions]=\"{standalone: true}\" checked=\"\" value=\"4\">\r\n        Thursday\r\n      </label>\r\n    </div>\r\n    <div class=\"form-check\">\r\n      <label class=\"form-check-label text-white col-12\">\r\n        <input name=\"optionsRadios\" class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"shiftConfig.weekdays.friday\" [ngModelOptions]=\"{standalone: true}\" checked=\"\" value=\"5\">\r\n        Friday\r\n      </label>\r\n    </div>\r\n    <div class=\"form-check\">\r\n      <label class=\"form-check-label text-white col-12\">\r\n        <input name=\"optionsRadios\" class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"shiftConfig.weekdays.saturday\" [ngModelOptions]=\"{standalone: true}\" checked=\"\" value=\"6\">\r\n        Saturday\r\n      </label>\r\n    </div>\r\n    <div class=\"form-check\">\r\n      <label class=\"form-check-label text-white col-12\">\r\n        <input name=\"optionsRadios\" class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"shiftConfig.weekdays.sunday\" [ngModelOptions]=\"{standalone: true}\" checked=\"\" value=\"7\">\r\n        Sunday\r\n      </label>\r\n    </div>\r\n</section>\r\n<hr>\r\n   <div class=\"d-flex justify-content-center col-12\">\r\n      <input class=\"btn btn-outline-light\" type=\"submit\" (click)=\"submit()\">\r\n    </div>\r\n  </div>\r\n  </section>\r\n  \r\n  \r\n  "

/***/ }),

/***/ "./src/app/components/shift-config/shift-config.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/shift-config/shift-config.component.ts ***!
  \*******************************************************************/
/*! exports provided: ShiftConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftConfigComponent", function() { return ShiftConfigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var src_app_classes_ShiftConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/classes/ShiftConfig */ "./src/app/classes/ShiftConfig.ts");
/* harmony import */ var src_app_classes_WeekDays__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/classes/WeekDays */ "./src/app/classes/WeekDays.ts");
/* harmony import */ var src_app_services_shift_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/shift-config.service */ "./src/app/services/shift-config.service.ts");
/* harmony import */ var src_app_classes_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/classes/users */ "./src/app/classes/users.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var ShiftConfigComponent = /** @class */ (function () {
    function ShiftConfigComponent(loginService, router, shiftConfigService) {
        this.loginService = loginService;
        this.router = router;
        this.shiftConfigService = shiftConfigService;
        this.shiftConfig = new src_app_classes_ShiftConfig__WEBPACK_IMPORTED_MODULE_3__["ShiftConfig"](null, null, null, new src_app_classes_WeekDays__WEBPACK_IMPORTED_MODULE_4__["WeekDays"](false, false, false, false, false, false, false), null);
    }
    ShiftConfigComponent.prototype.ngOnInit = function () {
        console.log(this.loginService.currentUser.role);
        if (!this.loginService.getLoggedIn()) {
            this.router.navigateByUrl('login');
        }
        console.log(this.loginService.currentUser.firstName);
        this.sampleUser = new src_app_classes_users__WEBPACK_IMPORTED_MODULE_6__["Users"]('Monty', 'Python', 'monty@python.org', 1, 1);
    };
    ShiftConfigComponent.prototype.submit = function () {
        this.shiftConfig.users = this.sampleUser;
        this.shiftConfigService.postShiftConfig(this.shiftConfig);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_classes_ShiftConfig__WEBPACK_IMPORTED_MODULE_3__["ShiftConfig"])
    ], ShiftConfigComponent.prototype, "shiftConfig", void 0);
    ShiftConfigComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shift-config',
            template: __webpack_require__(/*! ./shift-config.component.html */ "./src/app/components/shift-config/shift-config.component.html"),
            styles: [__webpack_require__(/*! ./shift-config.component.css */ "./src/app/components/shift-config/shift-config.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], src_app_services_shift_config_service__WEBPACK_IMPORTED_MODULE_5__["ShiftConfigService"]])
    ], ShiftConfigComponent);
    return ShiftConfigComponent;
}());



/***/ }),

/***/ "./src/app/components/shiftpool/shiftpool.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/shiftpool/shiftpool.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".day{\r\n    height: 72vh;\r\n    width: 100%;\r\n    margin: 0 1px;\r\n}\r\n.shift {\r\n    width: 100%;\r\n    background-color: #aaa;\r\n    border: solid 1px #fff;\r\n    box-sizing: border-box;\r\n}\r\n.shift:hover {\r\n    background-color: #888;\r\n    box-shadow: 3px 3px 3px #666;\r\n}\r\n.day-date{\r\n    width: 100%;\r\n}\r\n.emps-list {\r\n    list-style: none;\r\n    padding-left: 2px;\r\n}\r\n.emps {\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n.hours{\r\n    height: 72vh;\r\n}\r\n.empty{\r\n    background: none !important;\r\n}\r\n.empty:hover {\r\n    box-shadow: none !important;\r\n}\r\n.hours>table>tbody>tr>td {\r\n    font-size: .7rem;\r\n    box-sizing: border-box;\r\n    color: #fff;\r\n}\r\n.hours>table>tbody>tr {\r\n    border-top: solid 1px #fff;\r\n}\r\n.hours>table {\r\n    height: 100%;\r\n}\r\n.hours>table>tbody {\r\n    height: 100%;\r\n}\r\n.lasttr{\r\n    border-bottom: solid 1px #fff;\r\n}\r\n@media (min-width: 576px) {\r\n    \r\n}\r\n@media (min-width: 768px) { \r\n    .day{\r\n        width: 14.7%;\r\n    }\r\n    .day-date{\r\n        width: 14.7%;\r\n    }\r\n}\r\n@media (min-width: 992px) {\r\n\r\n}\r\n@media (min-width: 1200px) {\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGlmdHBvb2wvc2hpZnRwb29sLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hpZnRwb29sL3NoaWZ0cG9vbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRheXtcclxuICAgIGhlaWdodDogNzJ2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIDFweDtcclxufVxyXG4uc2hpZnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmZjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLnNoaWZ0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAjNjY2O1xyXG59XHJcbi5kYXktZGF0ZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5lbXBzLWxpc3Qge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG59XHJcbi5lbXBzIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5ob3Vyc3tcclxuICAgIGhlaWdodDogNzJ2aDtcclxufVxyXG4uZW1wdHl7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmVtcHR5OmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4uaG91cnM+dGFibGU+dGJvZHk+dHI+dGQge1xyXG4gICAgZm9udC1zaXplOiAuN3JlbTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uaG91cnM+dGFibGU+dGJvZHk+dHIge1xyXG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNmZmY7XHJcbn1cclxuLmhvdXJzPnRhYmxlIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4uaG91cnM+dGFibGU+dGJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5sYXN0dHJ7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2ZmZjtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgIFxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyBcclxuICAgIC5kYXl7XHJcbiAgICAgICAgd2lkdGg6IDE0LjclO1xyXG4gICAgfVxyXG4gICAgLmRheS1kYXRle1xyXG4gICAgICAgIHdpZHRoOiAxNC43JTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuXHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/shiftpool/shiftpool.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/shiftpool/shiftpool.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"col-12 bg-secondary\">\r\n  <div class=\"col-12 d-flex flex-row justify-content-between\">\r\n    <button click=\"previous()\" class=\"btn btn-light\">Previous {{ weekOrDay }}</button>\r\n    <h1 class=\"h1 text-center text-white\">Shifts</h1>\r\n    <button (click)=\"next()\" class=\"btn btn-light\">Next {{ weekOrDay }}</button>\r\n  </div>\r\n  <div class=\"d-flex flex-row col-12\">\r\n    <div class=\"col-1\"></div>\r\n    <div class=\"col-11 d-flex flex-row justify-content-between\">\r\n        <h5 *ngIf=\"isCurrentDay(0)\" class=\"day-date text-center text-white\">{{ weekdays[0] }} </h5>\r\n        <h5 *ngIf=\"isCurrentDay(1)\" class=\"day-date text-center text-white\">{{ weekdays[1] }} </h5>\r\n        <h5 *ngIf=\"isCurrentDay(2)\" class=\"day-date text-center text-white\">{{ weekdays[2] }} </h5>\r\n        <h5 *ngIf=\"isCurrentDay(3)\" class=\"day-date text-center text-white\">{{ weekdays[3] }} </h5>\r\n        <h5 *ngIf=\"isCurrentDay(4)\" class=\"day-date text-center text-white\">{{ weekdays[4] }} </h5>\r\n        <h5 *ngIf=\"isCurrentDay(5)\" class=\"day-date text-center text-white\">{{ weekdays[5] }} </h5>\r\n        <h5 *ngIf=\"isCurrentDay(6)\" class=\"day-date text-center text-white\">{{ weekdays[6] }} </h5>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex flex-row\">\r\n    <div class=\"d-flex flex-column justify-content-between hours col-1\">\r\n      <table>\r\n        <tbody>\r\n          <tr>\r\n            <td>12a</td>\r\n          </tr>\r\n          <tr>\r\n            <td>1a</td>\r\n          </tr>\r\n          <tr>\r\n            <td>2a</td>\r\n          </tr>\r\n          <tr>\r\n            <td>3a</td>\r\n          </tr>\r\n          <tr>\r\n            <td>4a</td>\r\n          </tr>\r\n          <tr>\r\n            <td>5a</td>\r\n          </tr>\r\n          <tr>\r\n            <td>6a</td>\r\n          </tr>\r\n          <tr>\r\n            <td>7a</td>\r\n          </tr>\r\n          <tr>\r\n            <td>8a</td>\r\n          </tr>\r\n          <tr>\r\n            <td>9a</td>\r\n          </tr>\r\n          <tr>\r\n            <td>10a</td>\r\n          </tr>\r\n          <tr>\r\n            <td>11a</td>\r\n          </tr>\r\n          <tr>\r\n            <td>12p</td>\r\n          </tr>\r\n          <tr>\r\n            <td>1p</td>\r\n          </tr>\r\n          <tr>\r\n            <td>2p</td>\r\n          </tr>\r\n          <tr>\r\n            <td>3p</td>\r\n          </tr>\r\n          <tr>\r\n            <td>4p</td>\r\n          </tr>\r\n          <tr>\r\n            <td>5p</td>\r\n          </tr>\r\n          <tr>\r\n            <td>6p</td>\r\n          </tr>\r\n          <tr>\r\n            <td>7p</td>\r\n          </tr>\r\n          <tr>\r\n            <td>8p</td>\r\n          </tr>\r\n          <tr>\r\n            <td>9p</td>\r\n          </tr>\r\n          <tr>\r\n            <td>10p</td>\r\n          </tr>\r\n          <tr class=\"lasttr\">\r\n            <td>11p</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"shifts-wrapper col-11 d-flex flex-row justify-content-between bg-light\">\r\n      <div *ngIf=\"isCurrentDay(0)\" class=\"day\">\r\n        <div *ngFor=\"let shift of currentWeek.days[0].shifts\" [class.empty]=\"shift.isEmptyShift\" class=\"shift\" \r\n          (click)=\"openModal(template, shift)\" [style.height]=\"getHeight(shift)\"> \r\n          <ul class=\"emps-list\">\r\n            <li class=\"emps\" *ngFor=\"let employee of shift.employees\">{{ employee.user.firstName + ' ' + employee.user.lastName }}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"isCurrentDay(1)\" class=\"day\">\r\n        <div *ngFor=\"let shift of currentWeek.days[1].shifts\" [class.empty]=\"shift.isEmptyShift\" class=\"shift\" \r\n        (click)=\"openModal(template, shift)\" [style.height]=\"getHeight(shift)\" >\r\n        <ul class=\"emps-list\">\r\n            <li class=\"emps\" *ngFor=\"let employee of shift.employees\">{{ employee.user.firstName + ' ' + employee.user.lastName }}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"isCurrentDay(2)\" class=\"day\">\r\n        <div *ngFor=\"let shift of currentWeek.days[2].shifts\" [class.empty]=\"shift.isEmptyShift\" class=\"shift\" \r\n        (click)=\"openModal(template, shift)\" [style.height]=\"getHeight(shift)\">\r\n        <ul class=\"emps-list\">\r\n            <li class=\"emps\" *ngFor=\"let employee of shift.employees\">{{ employee.user.firstName + ' ' + employee.user.lastName }}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"isCurrentDay(3)\" class=\"day\">\r\n        <div *ngFor=\"let shift of currentWeek.days[3].shifts\" [class.empty]=\"shift.isEmptyShift\" class=\"shift\" \r\n        (click)=\"openModal(template, shift)\" [style.height]=\"getHeight(shift)\"><ul class=\"emps-list\">\r\n            <li class=\"emps\" *ngFor=\"let employee of shift.employees\">{{ employee.user.firstName + ' ' + employee.user.lastName }}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"isCurrentDay(4)\" class=\"day\">\r\n        <div *ngFor=\"let shift of currentWeek.days[4].shifts\" class=\"shift\" [class.empty]=\"shift.isEmptyShift\"\r\n        (click)=\"openModal(template, shift)\" [style.height]=\"getHeight(shift)\"><ul class=\"emps-list\">\r\n            <li class=\"emps\" *ngFor=\"let employee of shift.employees\">{{ employee.user.firstName + ' ' + employee.user.lastName }}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"isCurrentDay(5)\" class=\"day\">\r\n        <div *ngFor=\"let shift of currentWeek.days[5].shifts\" class=\"shift\" [class.empty]=\"shift.isEmptyShift\"\r\n        (click)=\"openModal(template, shift)\" [style.height]=\"getHeight(shift)\"><ul class=\"emps-list\">\r\n            <li class=\"emps\" *ngFor=\"let employee of shift.employees\">{{ employee.user.firstName + ' ' + employee.user.lastName }}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"isCurrentDay(6)\" class=\"day\">\r\n        <div *ngFor=\"let shift of currentWeek.days[6].shifts\" class=\"shift\" [class.empty]=\"shift.isEmptyShift\"\r\n        (click)=\"openModal(template, shift)\" [style.height]=\"getHeight(shift)\"><ul class=\"emps-list\">\r\n            <li class=\"emps\" *ngFor=\"let employee of shift.employees\">{{ employee.user.firstName + ' ' + employee.user.lastName }}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <ng-template #template>\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">Shift</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"col-12\">Start Time: {{ clickedShift.startTime }}</div>\r\n        <div class=\"col-12\">End Time: {{ clickedShift.endTime }}</div>\r\n        <div *ngFor=\"let employee of clickedShift.employees\" class=\"col-12 d-flex justify-content-between\">\r\n          Employee: {{ employee.username }}\r\n          <button *ngIf=\"isitEditMode()\" (click)=\"delete(employee.username)\" class=\"btn btn-danger\">Delete</button>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"isManager() && isitEditMode()\">\r\n          <select (change)=\"changeEmployee($event)\" class=\"form-control\">\r\n            <option [style.display]=\"employeeIsAlreadyAssigned(employee)\"\r\n              *ngFor=\"let employee of currentEmployees\">\r\n              {{ employee.username }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <button (click)=\"edit()\" *ngIf=\"!isitEditMode()\" class=\"btn btn-danger\">Edit</button>\r\n        <button (click)=\"save()\" *ngIf=\"isitEditMode()\" class=\"btn btn-success\">Save</button>\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n  <div class=\"d-flex justify-content-center col-12\">\r\n    <button class=\"btn btn-success\" click=\"submitWeek()\" [disabled]=\"!isChanged()\">Submit</button>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/components/shiftpool/shiftpool.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/shiftpool/shiftpool.component.ts ***!
  \*************************************************************/
/*! exports provided: ShiftpoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftpoolComponent", function() { return ShiftpoolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var src_app_classes_shift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/classes/shift */ "./src/app/classes/shift.ts");
/* harmony import */ var src_app_services_shift_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shift.service */ "./src/app/services/shift.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");







var ShiftpoolComponent = /** @class */ (function () {
    function ShiftpoolComponent(shiftService, modalService, router, loginService) {
        this.shiftService = shiftService;
        this.modalService = modalService;
        this.router = router;
        this.loginService = loginService;
        this.currentDay = 0;
        this.config = {
            backdrop: false
        };
        this.isEditMode = false;
        this.weekdays = new Array();
    }
    ShiftpoolComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.loginService.getLoggedIn()) {
            this.router.navigateByUrl('login');
        }
        var today = new Date(Date.now());
        var date = this.formartToUsableDate(today);
        console.log(date);
        // this.shiftService.fetchCurrentWeekByDate(date);
        // this.currentWeek = this.shiftService.getCurrentWeek(); commented out until backend is working
        // this.currentWeek = this.formatShiftsForDisplay(this.genSampleData());
        this.currentWeek = this.generateFillerShifts(this.currentWeek);
        this.currentDate = date;
        this.currentWeek.days.forEach(function (day) {
            _this.weekdays.push(_this.formartToUsableDate(day.date));
        });
        if (this.isSmallScreen()) {
            this.weekOrDay = 'Day';
        }
        else {
            this.weekOrDay = 'Week';
        }
        this.shiftService.setEmployees();
        this.currentEmployees = this.shiftService.getEmployees();
        console.log(this.currentEmployees);
    };
    ShiftpoolComponent.prototype.openModal = function (template, shift) {
        this.clickedShift = shift;
        if (!shift.isEmptyShift) {
            this.modalRef = this.modalService.show(template, this.config);
        }
    };
    ShiftpoolComponent.prototype.isSmallScreen = function () {
        return window.innerWidth < 768;
    };
    ShiftpoolComponent.prototype.isCurrentDay = function (day) {
        if (this.isSmallScreen()) {
            return day === this.currentDay;
        }
        else {
            return true;
        }
    };
    ShiftpoolComponent.prototype.next = function () {
        if (this.isSmallScreen()) {
            if (this.currentDay === 6) {
                this.shiftService.gotoNextWeek();
                this.currentWeek = this.shiftService.getCurrentWeek();
                this.currentDay = 0;
            }
            else {
                this.currentDay++;
            }
        }
        else {
            this.shiftService.gotoNextWeek();
            this.currentWeek = this.shiftService.getCurrentWeek();
        }
    };
    ShiftpoolComponent.prototype.previous = function () {
        if (this.isSmallScreen()) {
            if (this.currentDay === 0) { // if we're on the first day of the week, get previous week;
                this.shiftService.gotoPreviousWeek();
                this.currentWeek = this.shiftService.getCurrentWeek();
                this.currentDay = 6;
            }
            else {
                this.currentDay--;
            }
        }
        else {
            this.shiftService.gotoPreviousWeek();
            this.currentWeek = this.shiftService.getCurrentWeek();
        }
    };
    ShiftpoolComponent.prototype.formartToUsableDate = function (date) {
        var today = new Date(date);
        return (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();
    };
    ShiftpoolComponent.prototype.getHeight = function (shift) {
        var height = ((shift.endHour - shift.startHour) / 24) * 100; // calculate percentage of day the shift is
        var hPercent = height + '%';
        return hPercent;
    };
    ShiftpoolComponent.prototype.formatShiftsForDisplay = function (week) {
        week.days.forEach(function (day) {
            day.shifts = day.shifts.sort(function (a, b) { return a.startHour - b.startHour; });
        });
        return week;
    };
    ShiftpoolComponent.prototype.generateFillerShifts = function (week) {
        var blankShift = new src_app_classes_shift__WEBPACK_IMPORTED_MODULE_3__["Shift"](0, 0, 1, null, 0, true);
        week.days.forEach(function (day) {
            var emptyShifts = new Array();
            if (day.shifts !== undefined) {
                if (day.shifts[0].startHour !== 0) {
                    emptyShifts.push(new src_app_classes_shift__WEBPACK_IMPORTED_MODULE_3__["Shift"](0, 0, day.shifts[0].startHour, null, 0, true));
                }
            }
            if (day.shifts !== undefined) {
                for (var i = 1; i < day.shifts.length; i++) {
                    if (day.shifts[i - 1].endHour !== day.shifts[i].startHour) {
                        emptyShifts.push(new src_app_classes_shift__WEBPACK_IMPORTED_MODULE_3__["Shift"](0, day.shifts[i - 1].endHour, day.shifts[i].startHour, null, 0, true));
                    }
                }
            }
            emptyShifts.forEach(function (shift) {
                day.shifts.push(shift);
            });
        });
        console.log(week.days);
        week = this.formatShiftsForDisplay(week);
        return week;
    };
    ShiftpoolComponent.prototype.isManager = function () {
        return true;
    };
    ShiftpoolComponent.prototype.isitEditMode = function () {
        return this.isEditMode;
    };
    ShiftpoolComponent.prototype.changeEmployee = function ($event) {
        for (var _i = 0, _a = this.currentEmployees; _i < _a.length; _i++) {
            var employee = _a[_i];
            if (employee.username === $event.target.value) {
                this.clickedShift.employees.push(employee);
            }
        }
        this.isitChanged = true;
    };
    ShiftpoolComponent.prototype.employeeIsAlreadyAssigned = function (user) {
        for (var _i = 0, _a = this.clickedShift.employees; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.username === user.username) {
                return 'none';
            }
        }
        return 'block';
    };
    ShiftpoolComponent.prototype.edit = function () {
        this.isEditMode = true;
    };
    ShiftpoolComponent.prototype.save = function () {
        this.isEditMode = false;
    };
    ShiftpoolComponent.prototype.delete = function (username) {
        for (var _i = 0, _a = this.currentEmployees; _i < _a.length; _i++) {
            var employee = _a[_i];
            if (employee.username === username) {
                var index = this.clickedShift.employees.indexOf(employee);
                console.log(this.clickedShift.employees);
                console.log(index);
                this.clickedShift.employees.splice(index, 1);
            }
        }
    };
    ShiftpoolComponent.prototype.isChanged = function () {
        return this.isitChanged;
    };
    ShiftpoolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shiftpool',
            template: __webpack_require__(/*! ./shiftpool.component.html */ "./src/app/components/shiftpool/shiftpool.component.html"),
            styles: [__webpack_require__(/*! ./shiftpool.component.css */ "./src/app/components/shiftpool/shiftpool.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_shift_service__WEBPACK_IMPORTED_MODULE_4__["ShiftService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]])
    ], ShiftpoolComponent);
    return ShiftpoolComponent;
}());



/***/ }),

/***/ "./src/app/components/shifts/shifts.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/shifts/shifts.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".day{\r\n    height: 72vh;\r\n    width: 100%;\r\n    margin: 0 1px;\r\n}\r\n.shift {\r\n    width: 100%;\r\n    background-color: #aaa;\r\n    border: solid 1px #fff;\r\n    box-sizing: border-box;\r\n}\r\n.shift:hover {\r\n    background-color: #888;\r\n    box-shadow: 3px 3px 3px #666;\r\n}\r\n.day-date{\r\n    width: 100%;\r\n}\r\n.emps-list {\r\n    list-style: none;\r\n    padding-left: 2px;\r\n}\r\n.emps {\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n.hours{\r\n    height: 72vh;\r\n}\r\n.empty{\r\n    background: none !important;\r\n}\r\n.empty:hover {\r\n    box-shadow: none !important;\r\n}\r\n.hours>table>tbody>tr>td {\r\n    font-size: .7rem;\r\n    box-sizing: border-box;\r\n    color: #fff;\r\n}\r\n.hours>table>tbody>tr {\r\n    border-top: solid 1px #fff;\r\n}\r\n.hours>table {\r\n    height: 100%;\r\n}\r\n.hours>table>tbody {\r\n    height: 100%;\r\n}\r\n.lasttr{\r\n    border-bottom: solid 1px #fff;\r\n}\r\n@media (min-width: 576px) {\r\n    \r\n}\r\n@media (min-width: 768px) { \r\n    .day{\r\n        width: 14.7%;\r\n    }\r\n    .day-date{\r\n        width: 14.7%;\r\n    }\r\n}\r\n@media (min-width: 992px) {\r\n\r\n}\r\n@media (min-width: 1200px) {\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGlmdHMvc2hpZnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hpZnRzL3NoaWZ0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRheXtcclxuICAgIGhlaWdodDogNzJ2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIDFweDtcclxufVxyXG4uc2hpZnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmZjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLnNoaWZ0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAjNjY2O1xyXG59XHJcbi5kYXktZGF0ZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5lbXBzLWxpc3Qge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG59XHJcbi5lbXBzIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5ob3Vyc3tcclxuICAgIGhlaWdodDogNzJ2aDtcclxufVxyXG4uZW1wdHl7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmVtcHR5OmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4uaG91cnM+dGFibGU+dGJvZHk+dHI+dGQge1xyXG4gICAgZm9udC1zaXplOiAuN3JlbTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uaG91cnM+dGFibGU+dGJvZHk+dHIge1xyXG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNmZmY7XHJcbn1cclxuLmhvdXJzPnRhYmxlIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4uaG91cnM+dGFibGU+dGJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5sYXN0dHJ7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2ZmZjtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgIFxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyBcclxuICAgIC5kYXl7XHJcbiAgICAgICAgd2lkdGg6IDE0LjclO1xyXG4gICAgfVxyXG4gICAgLmRheS1kYXRle1xyXG4gICAgICAgIHdpZHRoOiAxNC43JTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuXHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/shifts/shifts.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/shifts/shifts.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"col-12 bg-secondary\">\r\n  <div class=\"col-12 d-flex flex-row justify-content-between\">\r\n    <button click=\"previous()\" class=\"btn btn-light\">Previous {{ weekOrDay }}</button>\r\n    <h1 class=\"h1 text-center text-white\">Shifts</h1>\r\n    <button (click)=\"next()\" class=\"btn btn-light\">Next {{ weekOrDay }}</button>\r\n  </div>\r\n  <div class=\"d-flex flex-row col-12\">\r\n    <div class=\"col-1\"></div>\r\n    <div class=\"col-11 d-flex flex-row justify-content-between\">\r\n        <h5 *ngIf=\"isCurrentDay(0)\" class=\"day-date text-center text-white\">{{ weekdays[0] }} </h5>\r\n        <h5 *ngIf=\"isCurrentDay(1)\" class=\"day-date text-center text-white\">{{ weekdays[1] }} </h5>\r\n        <h5 *ngIf=\"isCurrentDay(2)\" class=\"day-date text-center text-white\">{{ weekdays[2] }} </h5>\r\n        <h5 *ngIf=\"isCurrentDay(3)\" class=\"day-date text-center text-white\">{{ weekdays[3] }} </h5>\r\n        <h5 *ngIf=\"isCurrentDay(4)\" class=\"day-date text-center text-white\">{{ weekdays[4] }} </h5>\r\n        <h5 *ngIf=\"isCurrentDay(5)\" class=\"day-date text-center text-white\">{{ weekdays[5] }} </h5>\r\n        <h5 *ngIf=\"isCurrentDay(6)\" class=\"day-date text-center text-white\">{{ weekdays[6] }} </h5>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex flex-row\">\r\n    <div class=\"d-flex flex-column justify-content-between hours col-1\">\r\n      <table>\r\n        <tbody>\r\n          <tr>\r\n            <td>12a</td>\r\n          </tr>\r\n          <tr>\r\n            <td>1a</td>\r\n          </tr>\r\n          <tr>\r\n            <td>2a</td>\r\n          </tr>\r\n          <tr>\r\n            <td>3a</td>\r\n          </tr>\r\n          <tr>\r\n            <td>4a</td>\r\n          </tr>\r\n          <tr>\r\n            <td>5a</td>\r\n          </tr>\r\n          <tr>\r\n            <td>6a</td>\r\n          </tr>\r\n          <tr>\r\n            <td>7a</td>\r\n          </tr>\r\n          <tr>\r\n            <td>8a</td>\r\n          </tr>\r\n          <tr>\r\n            <td>9a</td>\r\n          </tr>\r\n          <tr>\r\n            <td>10a</td>\r\n          </tr>\r\n          <tr>\r\n            <td>11a</td>\r\n          </tr>\r\n          <tr>\r\n            <td>12p</td>\r\n          </tr>\r\n          <tr>\r\n            <td>1p</td>\r\n          </tr>\r\n          <tr>\r\n            <td>2p</td>\r\n          </tr>\r\n          <tr>\r\n            <td>3p</td>\r\n          </tr>\r\n          <tr>\r\n            <td>4p</td>\r\n          </tr>\r\n          <tr>\r\n            <td>5p</td>\r\n          </tr>\r\n          <tr>\r\n            <td>6p</td>\r\n          </tr>\r\n          <tr>\r\n            <td>7p</td>\r\n          </tr>\r\n          <tr>\r\n            <td>8p</td>\r\n          </tr>\r\n          <tr>\r\n            <td>9p</td>\r\n          </tr>\r\n          <tr>\r\n            <td>10p</td>\r\n          </tr>\r\n          <tr class=\"lasttr\">\r\n            <td>11p</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"shifts-wrapper col-11 d-flex flex-row justify-content-between bg-light\">\r\n      <div *ngIf=\"isCurrentDay(0)\" class=\"day\">\r\n        <div *ngFor=\"let shift of daysAsList[0]?.shifts\" [class.empty]=\"shift.isEmptyShift\" class=\"shift\" \r\n          (click)=\"openModal(template, shift)\" [style.height]=\"getHeight(shift)\"> \r\n          <ul class=\"emps-list\">\r\n            <li class=\"emps\" *ngFor=\"let employee of shift.employees\">{{ employee.user.firstName + ' ' + employee.user.lastName }}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"isCurrentDay(1)\" class=\"day\">\r\n        <div *ngFor=\"let shift of daysAsList[1]?.shifts\" [class.empty]=\"shift.isEmptyShift\" class=\"shift\" \r\n        (click)=\"openModal(template, shift)\" [style.height]=\"getHeight(shift)\" >\r\n        <ul class=\"emps-list\">\r\n            <li class=\"emps\" *ngFor=\"let employee of shift.employees\">{{ employee.user.firstName + ' ' + employee.user.lastName }}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"isCurrentDay(2)\" class=\"day\">\r\n        <div *ngFor=\"let shift of daysAsList[2]?.shifts\" [class.empty]=\"shift.isEmptyShift\" class=\"shift\" \r\n        (click)=\"openModal(template, shift)\" [style.height]=\"getHeight(shift)\">\r\n        <ul class=\"emps-list\">\r\n            <li class=\"emps\" *ngFor=\"let employee of shift.employees\">{{ employee.user.firstName + ' ' + employee.user.lastName }}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"isCurrentDay(3)\" class=\"day\">\r\n        <div *ngFor=\"let shift of daysAsList[3]?.shifts\" [class.empty]=\"shift.isEmptyShift\" class=\"shift\" \r\n        (click)=\"openModal(template, shift)\" [style.height]=\"getHeight(shift)\"><ul class=\"emps-list\">\r\n            <li class=\"emps\" *ngFor=\"let employee of shift.employees\">{{ employee.user.firstName + ' ' + employee.user.lastName }}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"isCurrentDay(4)\" class=\"day\">\r\n        <div *ngFor=\"let shift of daysAsList[4]?.shifts\" class=\"shift\" [class.empty]=\"shift.isEmptyShift\"\r\n        (click)=\"openModal(template, shift)\" [style.height]=\"getHeight(shift)\"><ul class=\"emps-list\">\r\n            <li class=\"emps\" *ngFor=\"let employee of shift.employees\">{{ employee.user.firstName + ' ' + employee.user.lastName }}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"isCurrentDay(5)\" class=\"day\">\r\n        <div *ngFor=\"let shift of daysAsList[5]?.shifts\" class=\"shift\" [class.empty]=\"shift.isEmptyShift\"\r\n        (click)=\"openModal(template, shift)\" [style.height]=\"getHeight(shift)\"><ul class=\"emps-list\">\r\n            <li class=\"emps\" *ngFor=\"let employee of shift.employees\">{{ employee.user.firstName + ' ' + employee.user.lastName }}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"isCurrentDay(6)\" class=\"day\">\r\n        <div *ngFor=\"let shift of daysAsList[6]?.shifts\" class=\"shift\" [class.empty]=\"shift.isEmptyShift\"\r\n        (click)=\"openModal(template, shift)\" [style.height]=\"getHeight(shift)\"><ul class=\"emps-list\">\r\n            <li class=\"emps\" *ngFor=\"let employee of shift.employees\">{{ employee.user.firstName + ' ' + employee.user.lastName }}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <ng-template #template>\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">Shift</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"col-12\">Start Time: {{ clickedShift.startHour }}</div>\r\n        <div class=\"col-12\">End Time: {{ clickedShift.endHour }}</div>\r\n        <div *ngFor=\"let employee of clickedShift.employees\" class=\"col-12 d-flex justify-content-between\">\r\n          Employee: {{ employee.username }}\r\n          <button *ngIf=\"isitEditMode()\" (click)=\"delete(employee.username)\" class=\"btn btn-danger\">Delete</button>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"isManager() && isitEditMode()\">\r\n          <select (change)=\"changeEmployee($event)\" class=\"form-control\">\r\n            <option [style.display]=\"employeeIsAlreadyAssigned(employee)\"\r\n              *ngFor=\"let employee of currentEmployees\">\r\n              {{ employee.username }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <button (click)=\"edit()\" *ngIf=\"!isitEditMode()\" class=\"btn btn-danger\">Edit</button>\r\n        <button (click)=\"save()\" *ngIf=\"isitEditMode()\" class=\"btn btn-success\">Save</button>\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n  <div class=\"d-flex justify-content-center col-12\">\r\n    <button class=\"btn btn-success\" (click)=\"submitWeek()\" [disabled]=\"!isChanged()\">Yoyoyoyo</button>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/components/shifts/shifts.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/shifts/shifts.component.ts ***!
  \*******************************************************/
/*! exports provided: ShiftsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftsComponent", function() { return ShiftsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_classes_week__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/week */ "./src/app/classes/week.ts");
/* harmony import */ var src_app_services_shift_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shift.service */ "./src/app/services/shift.service.ts");
/* harmony import */ var src_app_classes_shift__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/classes/shift */ "./src/app/classes/shift.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var ShiftsComponent = /** @class */ (function () {
    function ShiftsComponent(shiftService, modalService, loginService, router) {
        this.shiftService = shiftService;
        this.modalService = modalService;
        this.loginService = loginService;
        this.router = router;
        this.loaded = false;
        this.daysAsList = [];
        this.currentDay = 0;
        this.config = {
            backdrop: false
        };
        this.isEditMode = false;
        this.currentEmployees = [];
        this.weekdays = new Array();
    }
    ShiftsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.loginService.getLoggedIn()) {
            this.router.navigateByUrl('login');
        }
        var today = new Date(Date.now());
        var date = this.formartToUsableDate(today);
        this.currentDate = date;
        if (this.isSmallScreen()) {
            this.weekOrDay = 'Day';
        }
        else {
            this.weekOrDay = 'Week';
        }
        this.currentWeek = this.genSampleData();
        // this.daysAsList = this.convertToArray(this.currentWeek.days);
        this.shiftService.fetchCurrentWeekByUser(2);
        this.shiftService.$shiftStatus.subscribe(function (status) {
            if (status === 200) {
                _this.loaded = true;
                _this.populateShifts();
            }
            else {
            }
        });
        // this.currentWeek = this.formatShiftsForDisplay(this.genSampleData());
    };
    ShiftsComponent.prototype.populateShifts = function () {
        var _this = this;
        this.currentWeek = this.shiftService.getCurrentWeek();
        this.daysAsList = this.convertToArray(this.currentWeek.days);
        this.daysAsList = this.generateFillerShifts(this.daysAsList);
        this.daysAsList.forEach(function (day) {
            _this.weekdays.push(_this.formartToUsableDate(day.date));
        });
        this.shiftService.setEmployees();
        this.currentEmployees = this.shiftService.getEmployees();
    };
    ShiftsComponent.prototype.openModal = function (template, shift) {
        this.clickedShift = shift;
        if (!shift.isEmptyShift) {
            this.modalRef = this.modalService.show(template, this.config);
        }
    };
    ShiftsComponent.prototype.isSmallScreen = function () {
        return window.innerWidth < 768;
    };
    ShiftsComponent.prototype.isCurrentDay = function (day) {
        if (this.isSmallScreen()) {
            return day === this.currentDay;
        }
        else {
            return true;
        }
    };
    ShiftsComponent.prototype.next = function () {
        if (this.isSmallScreen()) {
            if (this.currentDay === 6) {
                this.shiftService.gotoNextWeek();
                this.currentWeek = this.shiftService.getCurrentWeek();
                this.currentDay = 0;
            }
            else {
                this.currentDay++;
            }
        }
        else {
            this.shiftService.gotoNextWeek();
            this.currentWeek = this.shiftService.getCurrentWeek();
        }
    };
    ShiftsComponent.prototype.previous = function () {
        if (this.isSmallScreen()) {
            if (this.currentDay === 0) { // if we're on the first day of the week, get previous week;
                this.shiftService.gotoPreviousWeek();
                this.currentWeek = this.shiftService.getCurrentWeek();
                this.currentDay = 6;
            }
            else {
                this.currentDay--;
            }
        }
        else {
            this.shiftService.gotoPreviousWeek();
            this.currentWeek = this.shiftService.getCurrentWeek();
        }
    };
    ShiftsComponent.prototype.formartToUsableDate = function (date) {
        var today = new Date(date);
        return (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();
    };
    ShiftsComponent.prototype.getHeight = function (shift) {
        var height = ((shift.endHour - shift.startHour) / 24) * 100; // calculate percentage of day the shift is
        var hPercent = height + '%';
        return hPercent;
    };
    ShiftsComponent.prototype.formatShiftsForDisplay = function (days) {
        days.forEach(function (day) {
            day.shifts = day.shifts.sort(function (a, b) { return a.startHour - b.startHour; });
        });
        return days;
    };
    ShiftsComponent.prototype.generateFillerShifts = function (days) {
        days.forEach(function (day) {
            var emptyShifts = new Array();
            if (day.shifts !== undefined) {
                if (day.shifts[0].startHour !== 0) {
                    emptyShifts.push(new src_app_classes_shift__WEBPACK_IMPORTED_MODULE_4__["Shift"](0, 0, day.shifts[0].startHour, null, 0, true));
                }
            }
            if (day.shifts !== undefined) {
                for (var i = 1; i < day.shifts.length; i++) {
                    if (day.shifts[i - 1].endHour !== day.shifts[i].startHour) {
                        emptyShifts.push(new src_app_classes_shift__WEBPACK_IMPORTED_MODULE_4__["Shift"](0, day.shifts[i - 1].endHour, day.shifts[i].startHour, null, 0, true));
                    }
                }
            }
            emptyShifts.forEach(function (shift) {
                day.shifts.push(shift);
            });
        });
        days = this.formatShiftsForDisplay(days);
        return days;
    };
    ShiftsComponent.prototype.isManager = function () {
        return true;
    };
    ShiftsComponent.prototype.isitEditMode = function () {
        return this.isEditMode;
    };
    ShiftsComponent.prototype.isLoaded = function () {
        return this.loaded;
    };
    ShiftsComponent.prototype.changeEmployee = function ($event) {
        if (this.clickedShift.employees === null) {
            this.clickedShift.employees = new Array();
        }
        for (var _i = 0, _a = this.currentEmployees; _i < _a.length; _i++) {
            var employee = _a[_i];
            if (employee.username === $event.target.value) {
                this.clickedShift.employees.push(employee);
            }
        }
        this.isitChanged = true;
    };
    ShiftsComponent.prototype.employeeIsAlreadyAssigned = function (user) {
        if (this.clickedShift.employees !== null) {
            for (var _i = 0, _a = this.clickedShift.employees; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i.username === user.username) {
                    return 'none';
                }
            }
        }
        return 'block';
    };
    ShiftsComponent.prototype.edit = function () {
        this.isEditMode = true;
    };
    ShiftsComponent.prototype.save = function () {
        this.isEditMode = false;
    };
    ShiftsComponent.prototype.delete = function (username) {
        for (var _i = 0, _a = this.currentEmployees; _i < _a.length; _i++) {
            var employee = _a[_i];
            if (employee.username === username) {
                var index = this.clickedShift.employees.indexOf(employee);
                this.clickedShift.employees.splice(index, 1);
            }
        }
    };
    ShiftsComponent.prototype.isChanged = function () {
        return this.isitChanged;
    };
    ShiftsComponent.prototype.convertToArray = function (map) {
        var array = new Array();
        Object.getOwnPropertyNames(map).forEach(function (day) {
            array.push(map[day]);
        });
        //array.push(map.get('MONDAY'));
        //array.push(map.get('TUESDAY'));
        return array;
    };
    ShiftsComponent.prototype.convertToMap = function (array, map) {
        var i = 0;
        Object.getOwnPropertyNames(map).forEach(function (day) {
            if (i < array.length) {
                //console.log(map[array[i].name]);
                // map[array[i].name] = array[i];
                map[array[i].name] = array[i];
                i++;
            }
        });
        //console.log(map);
        return map;
    };
    ShiftsComponent.prototype.submitWeek = function () {
        var days = this.convertToMap(this.daysAsList, this.currentWeek.days);
        this.currentWeek.days = days;
        this.shiftService.sendUpdatedWeek(this.currentWeek);
    };
    ShiftsComponent.prototype.genSampleData = function () {
        var week = new src_app_classes_week__WEBPACK_IMPORTED_MODULE_2__["Week"](/*days*/ null, 1, new Date(Date.now()));
        return week;
    };
    ShiftsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shifts',
            template: __webpack_require__(/*! ./shifts.component.html */ "./src/app/components/shifts/shifts.component.html"),
            styles: [__webpack_require__(/*! ./shifts.component.css */ "./src/app/components/shifts/shifts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_shift_service__WEBPACK_IMPORTED_MODULE_3__["ShiftService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"], src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], ShiftsComponent);
    return ShiftsComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#login-wrapper{\r\n    margin-top: 20vh;\r\n    padding: 50px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ2luLXdyYXBwZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHZoO1xyXG4gICAgcGFkZGluZzogNTBweFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container d-flex justify-content-center\">\r\n\r\n  <div *ngIf=\"!(loginAttemptSucceeded === undefined)\"></div>\r\n    <div *ngIf=\"!loginAttemptSucceeded\">Username already taken.</div>\r\n    <div *ngIf=\"loginAttemptSucceeded\">Account registered.</div>\r\n  <div id=\"login-wrapper\" class=\"col-12 col-md-9 col-lg-6 bg-primary\">\r\n  <div class=\"form-group d-flex justify-content-center flex-wrap\">\r\n  <label class = \"form-control-label text-white col-12\" for=\"username\">Enter Username:</label>\r\n  \r\n  <input type=\"text\" id=\"username\" [(ngModel)]=\"username\">\r\n</div>\r\n\r\n<div class=\"form-group d-flex justify-content-center flex-wrap\">\r\n  <label class=\"form-control-label text-white col-12\" for=\"password\">Enter Password</label>\r\n  <input type=\"password\" id=\"password\" [(ngModel)]=\"password\">\r\n</div>\r\n<div class=\"form-group d-flex justify-content-center flex-wrap\">\r\n  <label class=\"form-control-label text-white col-12\" for=\"passwordConfirmation\">Confirm Password:</label>\r\n  <input type=\"password\" id=\"passwordConfirmation\" [(ngModel)]=\"passwordConfirmation\">\r\n</div>\r\n<div class=\"form-group d-flex justify-content-center flex-wrap\">\r\n    <input type=\"submit\" [disabled]=\"!formValidation()\" (click)=\"submit()\">\r\n</div>\r\n</div>\r\n</section>"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_signup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/signup.service */ "./src/app/services/signup.service.ts");



var SignupComponent = /** @class */ (function () {
    function SignupComponent(signupService) {
        this.signupService = signupService;
        this.username = '';
        this.password = '';
        this.passwordConfirmation = '';
        this.loginAttemptSucceeded = undefined;
        this.lastStatus = 200;
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.signUpResponse = this.signupService.$signUpStatus.subscribe(function (status) {
            if (status === 200) {
            }
            else {
                _this.lastStatus = status;
            }
        });
    };
    SignupComponent.prototype.ngOnDestroy = function () {
        if (this.signUpResponse) {
            this.signUpResponse.unsubscribe();
        }
    };
    SignupComponent.prototype.formValidation = function () {
        this.usernameTrim();
        return this.passwordLengthValidation() &&
            this.passwordsMatch() &&
            this.usernameLengthValidation();
    };
    SignupComponent.prototype.passwordLengthValidation = function () {
        return this.password.length >= 8;
    };
    SignupComponent.prototype.passwordsMatch = function () {
        return this.password === this.passwordConfirmation;
    };
    SignupComponent.prototype.usernameLengthValidation = function () {
        return this.username.length >= 5;
    };
    SignupComponent.prototype.usernameTrim = function () {
        this.username = this.username.trim();
    };
    SignupComponent.prototype.submit = function () {
        var _this = this;
        this.signupService.signup(this.username, this.password).subscribe(function (result) {
            _this.loginAttemptSucceeded = true;
        }, function (error) {
            _this.loginAttemptSucceeded = false;
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_signup_service__WEBPACK_IMPORTED_MODULE_2__["SignupService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/pipes/signup.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/signup.pipe.ts ***!
  \**************************************/
/*! exports provided: SignupPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPipe", function() { return SignupPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SignupPipe = /** @class */ (function () {
    function SignupPipe() {
    }
    SignupPipe.prototype.transform = function (value, args) {
        return null;
    };
    SignupPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'signup'
        })
    ], SignupPipe);
    return SignupPipe;
}());



/***/ }),

/***/ "./src/app/pipes/trim-pipe.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/trim-pipe.pipe.ts ***!
  \*****************************************/
/*! exports provided: TrimPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrimPipePipe", function() { return TrimPipePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TrimPipePipe = /** @class */ (function () {
    function TrimPipePipe() {
    }
    TrimPipePipe.prototype.transform = function (value, args) {
        return value.trim();
    };
    TrimPipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'trimPipe'
        })
    ], TrimPipePipe);
    return TrimPipePipe;
}());



/***/ }),

/***/ "./src/app/services/buisness-page.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/buisness-page.service.ts ***!
  \***************************************************/
/*! exports provided: BuisnessPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuisnessPageService", function() { return BuisnessPageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var BuisnessPageService = /** @class */ (function () {
    function BuisnessPageService(httpClient) {
        this.httpClient = httpClient;
        this.businessStatusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.$businessStatus = this.businessStatusSubject.asObservable();
    }
    BuisnessPageService.prototype.business = function (businessName, city, address, state, zipCode) {
        var payload = {
            businessName: businessName,
            city: city,
            address: address,
            state: state,
            zipCode: zipCode
        };
        return this.httpClient.post('http://localhost:8080/ex/business', payload);
    };
    BuisnessPageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BuisnessPageService);
    return BuisnessPageService;
}());



/***/ }),

/***/ "./src/app/services/employee.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/employee.service.ts ***!
  \**********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EmployeeService = /** @class */ (function () {
    function EmployeeService(httpClient) {
        this.httpClient = httpClient;
    }
    EmployeeService.prototype.getAllUsers = function () {
        var _this = this;
        this.httpClient.get('http://localhost:8081/people', {
            observe: 'response'
        }).subscribe(function (response) {
            var user = JSON.stringify(response.body);
            _this.listUsers = JSON.parse(user);
        }, function (err) {
            console.log(err);
        });
    };
    EmployeeService.prototype.deleteUser = function (user) {
        var _this = this;
        console.log(user);
        this.httpClient.delete('http://localhost:8081/people/' + user.user_id, {
            observe: 'response'
        }).subscribe(function (response) {
            console.log(response.body);
            var index = _this.listUsers.indexOf(user, 0);
            if (index > -1) {
                _this.listUsers.splice(index, 1);
            }
            return true;
        }, function (err) {
            console.log(err);
            if (err.status === 403) {
                return false;
            }
        });
        return null;
    };
    EmployeeService.prototype.createUser = function (cred) {
        var _this = this;
        this.httpClient.post('http://localhost:8081/cred/create', cred, {
            observe: 'response'
        }).subscribe(function (response) {
            var user = JSON.stringify(response.body);
            console.log(user);
            _this.listUsers.push(JSON.parse(user));
        }, function (err) {
            console.log('Error thrown');
            console.log(err);
        });
    };
    EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var LoginService = /** @class */ (function () {
    function LoginService(httpClient, cookieService) {
        this.httpClient = httpClient;
        this.cookieService = cookieService;
        this.loginStatusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.$loginStatus = this.loginStatusSubject.asObservable();
        this.loggedIn = false;
    }
    LoginService.prototype.login = function (username, password) {
        var _this = this;
        var payload = {
            username: username,
            password: password
        };
        this.httpClient.post('http://localhost:8081/cred/login', payload, {
            observe: 'response',
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return response.body; }))
            .subscribe(function (response) {
            _this.currentUser = response;
            console.log(_this.currentUser.token);
            _this.cookieService.set('role', _this.currentUser.role.toString());
            _this.loggedIn = true;
            _this.loginStatusSubject.next(200);
        }, function (err) {
            _this.loginStatusSubject.next(err.status);
        });
    };
    LoginService.prototype.getLoggedIn = function () {
        return this.loggedIn;
    };
    LoginService.prototype.logOff = function () {
        this.loggedIn = false;
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/shift-config.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/shift-config.service.ts ***!
  \**************************************************/
/*! exports provided: ShiftConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftConfigService", function() { return ShiftConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var ShiftConfigService = /** @class */ (function () {
    function ShiftConfigService(httpClient) {
        this.httpClient = httpClient;
        this.shiftConfigStatusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.$shiftStatus = this.shiftConfigStatusSubject.asObservable();
    }
    ShiftConfigService.prototype.postShiftConfig = function (payload) {
        var _this = this;
        console.log(payload);
        this.httpClient.post('http://localhost:8081/config', payload, {
            observe: 'response',
        }).subscribe(function (response) {
            _this.shiftConfigStatusSubject.next(200);
            console.log('We made it');
            console.log(payload);
        }, function (err) {
            _this.shiftConfigStatusSubject.next(err.status);
        });
    };
    ShiftConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ShiftConfigService);
    return ShiftConfigService;
}());



/***/ }),

/***/ "./src/app/services/shift.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/shift.service.ts ***!
  \*******************************************/
/*! exports provided: ShiftService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftService", function() { return ShiftService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _classes_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/users */ "./src/app/classes/users.ts");
/* harmony import */ var _classes_credentials__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../classes/credentials */ "./src/app/classes/credentials.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var ShiftService = /** @class */ (function () {
    function ShiftService(httpClient) {
        this.httpClient = httpClient;
        this.shiftStatusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.$shiftStatus = this.shiftStatusSubject.asObservable();
    }
    ShiftService.prototype.fetchNextWeek = function (currentWeek) {
        var _this = this;
        this.httpClient.get("http://localhost:8080/week/" + currentWeek.startDate, {
            observe: 'response',
        }).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.body; }))
            .subscribe(function (response) {
            // this.loginStatusSubject.next(200);
            _this.nextWeek = response;
        }, function (err) {
            // this.loginStatusSubject.next(err.status);
        });
    };
    // This method is only run on component init
    ShiftService.prototype.fetchCurrentWeekByUser = function (id) {
        var _this = this;
        this.httpClient.get("http://localhost:8081/week/" + id, {
            observe: 'response',
        }).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.body; }))
            .subscribe(function (response) {
            _this.currentWeek = response;
            console.log('Shift service: ');
            console.log(_this.currentWeek);
            _this.shiftStatusSubject.next(200);
        }, function (err) {
            _this.shiftStatusSubject.next(err.status);
        });
    };
    ShiftService.prototype.fetchPreviousWeek = function (currentWeek) {
        var _this = this;
        this.httpClient.get("http://localhost:8080/week/" + currentWeek.startDate, {
            observe: 'response',
        }).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.body; }))
            .subscribe(function (response) {
            _this.shiftStatusSubject.next(200);
            _this.previousWeek = response;
        }, function (err) {
            _this.shiftStatusSubject.next(err.status);
        });
    };
    ShiftService.prototype.sendUpdatedWeek = function (week) {
        var _this = this;
        this.httpClient.put('http://localhost:8081/week', week, {
            observe: 'response',
        }).subscribe(function (response) {
            if (response.status === 200) {
                _this.shiftStatusSubject.next(200);
            }
        });
    };
    ShiftService.prototype.getCurrentWeek = function () {
        return this.currentWeek;
    };
    // Iterates through saved weeks forwards
    ShiftService.prototype.gotoNextWeek = function () {
        this.previousWeek = this.currentWeek;
        this.currentWeek = this.nextWeek;
        this.fetchNextWeek(this.currentWeek); // this method sets nextweek
    };
    // Iterates through saved weeks backwords
    ShiftService.prototype.gotoPreviousWeek = function () {
        this.nextWeek = this.currentWeek;
        this.currentWeek = this.previousWeek;
        this.fetchPreviousWeek(this.currentWeek); // this method sets previous week;
    };
    ShiftService.prototype.getEmployees = function () {
        return this.employees;
    };
    ShiftService.prototype.setEmployees = function () {
        var bob = new _classes_credentials__WEBPACK_IMPORTED_MODULE_5__["Credentials"]('billyboy', 'aoishgoihsgohap dhgap0sygsadgh', 'bobsath', new _classes_users__WEBPACK_IMPORTED_MODULE_4__["Users"]('Bob', 'Sather', 'bobsather@gmail.com', 2, 1));
        var martha = new _classes_credentials__WEBPACK_IMPORTED_MODULE_5__["Credentials"]('cookingiscool', 'aosihgoisahdpgoihaspdoigh', 'marthathecook', new _classes_users__WEBPACK_IMPORTED_MODULE_4__["Users"]('Martha', 'Stuart', 'martha@margo.wiz', 2, 1));
        var monty = new _classes_credentials__WEBPACK_IMPORTED_MODULE_5__["Credentials"]('hamsterparty', 'aosihgoisahdpgoihaspdoigh', 'montypython', new _classes_users__WEBPACK_IMPORTED_MODULE_4__["Users"]('Monty', 'Python', 'monty@python.com', 2, 3));
        var james = new _classes_credentials__WEBPACK_IMPORTED_MODULE_5__["Credentials"]('shakennotstirred', 'aosihgoisahdpgoihaspdoigh', 'jamesbond', new _classes_users__WEBPACK_IMPORTED_MODULE_4__["Users"]('James', 'Bond', 'bonejamesbond@bond.com', 2, 4));
        this.employees = new Array(bob, martha, monty, james);
    };
    ShiftService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ShiftService);
    return ShiftService;
}());



/***/ }),

/***/ "./src/app/services/signup.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/signup.service.ts ***!
  \********************************************/
/*! exports provided: SignupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupService", function() { return SignupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");





var SignupService = /** @class */ (function () {
    function SignupService(httpClient, cookieService) {
        this.httpClient = httpClient;
        this.cookieService = cookieService;
        this.signUpStatusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.$signUpStatus = this.signUpStatusSubject.asObservable();
    }
    SignupService.prototype.signup = function (username, password) {
        var payload = {
            username: username,
            password: password
        };
        return this.httpClient.post('http://localhost:8080/ex/signup', payload);
    };
    SignupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], SignupService);
    return SignupService;
}());



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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\h2den.DESKTOP-6LN51L3\Documents\Shiftme-front-end\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map