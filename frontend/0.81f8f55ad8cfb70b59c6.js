(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-list/employee-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-list/employee-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nb-card>\r\n\r\n  <nb-card-header>\r\n\r\n    <h2>Employee List</h2>\r\n  </nb-card-header>\r\n\r\n  <div>\r\n    <input type=\"text\" [(ngModel)]=\"userName\">\r\n    <button (click)=\"addEmployee()\">Add Employee</button>\r\n  </div>\r\n\r\n  <div>\r\n    <li *ngFor=\"let employee of getEmployeesObservable | async\">\r\n      {{employee.name}}\r\n    </li>\r\n  </div>\r\n\r\n</nb-card>\r\n<ng-container *ngIf=\"addEmployeeObservable | async\"></ng-container>\r\n");

/***/ }),

/***/ "./src/app/employee-list/employee-list-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/employee-list/employee-list-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: EmployeeListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListRoutingModule", function() { return EmployeeListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _employee_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-list.component */ "./src/app/employee-list/employee-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _employee_list_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeListComponent"],
    },
];
var EmployeeListRoutingModule = /** @class */ (function () {
    function EmployeeListRoutingModule() {
    }
    EmployeeListRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], EmployeeListRoutingModule);
    return EmployeeListRoutingModule;
}());



/***/ }),

/***/ "./src/app/employee-list/employee-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/employee-list/employee-list.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/employee-list/employee-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/employee-list/employee-list.component.ts ***!
  \**********************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(employeeService) {
        this.employeeService = employeeService;
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        this.getAllEmployees();
    };
    EmployeeListComponent.prototype.getAllEmployees = function () {
        this.getEmployeesObservable = this.employeeService.getAllEmployees()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (allEmployeyes) {
            console.log(allEmployeyes);
        }));
    };
    EmployeeListComponent.prototype.addEmployee = function () {
        var _this = this;
        this.addEmployeeObservable = this.employeeService.addEmployee(this.userName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (response) {
            console.log(response);
            _this.userName = '';
            _this.getAllEmployees();
        }));
    };
    EmployeeListComponent.ctorParameters = function () { return [
        { type: _employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"] }
    ]; };
    EmployeeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./employee-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-list/employee-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./employee-list.component.css */ "./src/app/employee-list/employee-list.component.css")).default]
        }),
        __metadata("design:paramtypes", [_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());



/***/ }),

/***/ "./src/app/employee-list/employee-list.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/employee-list/employee-list.module.ts ***!
  \*******************************************************/
/*! exports provided: EmployeeListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListModule", function() { return EmployeeListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _employee_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-list.component */ "./src/app/employee-list/employee-list.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _utils_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/shared.module */ "./src/app/utils/shared.module.ts");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");
/* harmony import */ var _employee_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-list-routing.module */ "./src/app/employee-list/employee-list-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var EmployeeListModule = /** @class */ (function () {
    function EmployeeListModule() {
    }
    EmployeeListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_employee_list_component__WEBPACK_IMPORTED_MODULE_1__["EmployeeListComponent"]],
            imports: [
                _utils_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                // NbCardModule,
                // SharedModule,
                _employee_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmployeeListRoutingModule"],
            ],
            exports: [_employee_list_component__WEBPACK_IMPORTED_MODULE_1__["EmployeeListComponent"]],
            providers: [_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]]
        })
    ], EmployeeListModule);
    return EmployeeListModule;
}());



/***/ }),

/***/ "./src/app/employee-list/employee.model.ts":
/*!*************************************************!*\
  !*** ./src/app/employee-list/employee.model.ts ***!
  \*************************************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());



/***/ }),

/***/ "./src/app/employee.service.ts":
/*!*************************************!*\
  !*** ./src/app/employee.service.ts ***!
  \*************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _employee_list_employee_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-list/employee.model */ "./src/app/employee-list/employee.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeService = /** @class */ (function () {
    // url = 'http://localhost:3000/';
    function EmployeeService(httpClient) {
        this.httpClient = httpClient;
        this.allEmployees = [];
        this.url = 'https://channel-nest.herokuapp.com/';
    }
    EmployeeService.prototype.getAllEmployees = function () {
        return this.httpClient.get(this.url);
    };
    EmployeeService.prototype.addEmployee = function (userName) {
        var newEmployee = new _employee_list_employee_model__WEBPACK_IMPORTED_MODULE_1__["Employee"]();
        newEmployee.name = userName;
        return this.httpClient.post(this.url, newEmployee);
    };
    EmployeeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    EmployeeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ })

}]);