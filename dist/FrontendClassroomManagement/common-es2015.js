(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/service/program/program.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/program/program.service.ts ***!
  \****************************************************/
/*! exports provided: ProgramService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramService", function() { return ProgramService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}`;
let ProgramService = class ProgramService {
    constructor(http) {
        this.http = http;
    }
    getAllProgram() {
        return this.http.get(API_URL + '/programs');
    }
    createProgram(program) {
        return this.http.post(API_URL + '/programs', program);
    }
    getProgram(id) {
        return this.http.get(API_URL + `/programs/${id}`);
    }
    updateProgram(id, program) {
        return this.http.put(API_URL + `/programs/${id}`, program);
    }
    deleteProgram(id) {
        return this.http.delete(API_URL + `/programs/${id}`);
    }
    getAllModuleByProgram(id) {
        return this.http.get(API_URL + `/programs/${id}/modules`);
    }
};
ProgramService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ProgramService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProgramService);



/***/ }),

/***/ "./src/app/service/student/student.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/student/student.service.ts ***!
  \****************************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}`;
let StudentService = class StudentService {
    constructor(http) {
        this.http = http;
    }
    getAllStudent() {
        return this.http.get(API_URL + '/students');
    }
    createStudent(student) {
        return this.http.post(API_URL + '/students', student);
    }
    getStudent(id) {
        return this.http.get(API_URL + `/students/${id}`);
    }
    updateStudent(id, student) {
        return this.http.put(API_URL + `/students/${id}`, student);
    }
    deleteStudent(id) {
        return this.http.delete(API_URL + `/students/${id}`);
    }
};
StudentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
StudentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StudentService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map