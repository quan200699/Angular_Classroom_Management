(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-student-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/edit-student/edit-student.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/edit-student/edit-student.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-sm-6\">\r\n        <h1>Cập nhật thông tin học viên</h1>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <ol class=\"breadcrumb float-sm-right\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"\">Trang chủ</a></li>\r\n          <li class=\"breadcrumb-item active\">Cập nhật thông tin</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div><!-- /.container-fluid -->\r\n</section>\r\n<div class=\"card card-default\">\r\n  <div class=\"card-header\">\r\n    <h3 class=\"card-title\"></h3>\r\n  </div>\r\n  <!-- /.card-header -->\r\n  <!-- form start -->\r\n  <form [formGroup]=\"studentForm\" (ngSubmit)=\"updateStudent(id)\" id=\"student-form\">\r\n    <div class=\"card-body\">\r\n      <div class=\"form-group\">\r\n        <label for=\"studentId\">Mã học viên</label>\r\n        <input type=\"text\" formControlName=\"studentId\" name=\"studentId\" [value]=\"studentId\" class=\"form-control\"\r\n               id=\"studentId\"\r\n               placeholder=\"Mã học viên\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">Tên học viên</label>\r\n        <input type=\"text\" formControlName=\"name\" name=\"name\" [value]=\"name\" class=\"form-control\" id=\"name\"\r\n               placeholder=\"Tên học viên\">\r\n      </div>\r\n      <div class=\"form-group\" *ngIf=\"!buttonChangeClicked\">\r\n        <label for=\"classes1\">Lớp học: </label>\r\n        <span id=\"classes1\" *ngIf=\"currentClass!=null\">{{currentClass.name}}</span>\r\n        <button type=\"button\" class=\"btn btn-primary btn-sm ml-3\" (click)=\"changeButtonStatus()\">Đổi lớp</button>\r\n      </div>\r\n      <div class=\"form-group\" *ngIf=\"buttonChangeClicked\">\r\n        <label for=\"classes\">Lớp học: </label>\r\n        <select class=\"custom-select\" id=\"classes\" name=\"classes\" formControlName=\"classes\">\r\n          <option [ngValue]=\"null\" disabled>Chọn lớp học</option>\r\n          <option *ngFor=\"let classes of listClasses\" [value]=\"classes.id\"\r\n                  [selected]=\"classes.id === currentClass.id\">{{classes.name}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <!-- /.card-body -->\r\n\r\n    <div class=\"card-footer\">\r\n      <button type=\"submit\" class=\"btn btn-primary\">Cập nhật</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/student/edit-student/edit-student.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/student/edit-student/edit-student.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvZWRpdC1zdHVkZW50L2VkaXQtc3R1ZGVudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/student/edit-student/edit-student.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/student/edit-student/edit-student.component.ts ***!
  \****************************************************************/
/*! exports provided: EditStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditStudentComponent", function() { return EditStudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_student_student_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/student/student.service */ "./src/app/service/student/student.service.ts");
/* harmony import */ var _service_classes_classes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/classes/classes.service */ "./src/app/service/classes/classes.service.ts");






let EditStudentComponent = class EditStudentComponent {
    constructor(activatedRoute, studentService, classesService) {
        this.activatedRoute = activatedRoute;
        this.studentService = studentService;
        this.classesService = classesService;
        this.studentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            studentId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            classes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.buttonChangeClicked = false;
        this.sub = this.activatedRoute.paramMap.subscribe((paramMap) => {
            const id = +paramMap.get('id');
            this.getStudentInfo(id);
        });
    }
    ngOnInit() {
        this.getAllClasses();
    }
    changeButtonStatus() {
        this.buttonChangeClicked = !this.buttonChangeClicked;
    }
    getAllClasses() {
        this.classesService.getAllClasses().subscribe(listClasses => {
            this.listClasses = listClasses;
        });
    }
    getStudentInfo(id) {
        this.studentService.getStudent(id).subscribe(student => {
            this.name = student.name;
            this.id = student.id;
            this.studentId = student.studentId;
            this.currentClass = student.classes;
        });
    }
    updateStudent(id) {
        const student = {
            id: this.studentForm.value.id,
            studentId: this.studentForm.value.studentId === '' ? this.studentId : this.studentForm.value.studentId,
            name: this.studentForm.value.name === '' ? this.name : this.studentForm.value.name,
            classes: {
                id: this.studentForm.value.classes === '' ? this.currentClass.id : this.studentForm.value.classes
            },
        };
        this.studentService.updateStudent(id, student).subscribe(() => {
            $(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    type: 'success',
                    title: 'Cập nhật thành công'
                });
            });
        }, () => {
            $(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    type: 'error',
                    title: 'Cập nhật thất bại'
                });
            });
        });
    }
};
EditStudentComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service_student_student_service__WEBPACK_IMPORTED_MODULE_4__["StudentService"] },
    { type: _service_classes_classes_service__WEBPACK_IMPORTED_MODULE_5__["ClassesService"] }
];
EditStudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-student',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-student.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/edit-student/edit-student.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-student.component.css */ "./src/app/student/edit-student/edit-student.component.css")).default]
    })
], EditStudentComponent);



/***/ }),

/***/ "./src/app/student/student-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/student/student-routing.module.ts ***!
  \***************************************************/
/*! exports provided: StudentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentRoutingModule", function() { return StudentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_student_edit_student_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-student/edit-student.component */ "./src/app/student/edit-student/edit-student.component.ts");




const routes = [
    {
        path: '',
    },
    {
        path: 'edit/:id',
        component: _edit_student_edit_student_component__WEBPACK_IMPORTED_MODULE_3__["EditStudentComponent"]
    }
];
let StudentRoutingModule = class StudentRoutingModule {
};
StudentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], StudentRoutingModule);



/***/ }),

/***/ "./src/app/student/student.module.ts":
/*!*******************************************!*\
  !*** ./src/app/student/student.module.ts ***!
  \*******************************************/
/*! exports provided: StudentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentModule", function() { return StudentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _student_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student-routing.module */ "./src/app/student/student-routing.module.ts");
/* harmony import */ var _edit_student_edit_student_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-student/edit-student.component */ "./src/app/student/edit-student/edit-student.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let StudentModule = class StudentModule {
};
StudentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _edit_student_edit_student_component__WEBPACK_IMPORTED_MODULE_4__["EditStudentComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _student_routing_module__WEBPACK_IMPORTED_MODULE_3__["StudentRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]
    })
], StudentModule);



/***/ })

}]);
//# sourceMappingURL=student-student-module-es2015.js.map