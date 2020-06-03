(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["classes-classes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/classes/add-student/add-student.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/classes/add-student/add-student.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-sm-6\">\r\n        <h1>Tạo thông tin học viên mới</h1>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <ol class=\"breadcrumb float-sm-right\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"/\">Trang chủ</a></li>\r\n          <li class=\"breadcrumb-item active\">Thêm học viên</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div><!-- /.container-fluid -->\r\n</section>\r\n<div class=\"card card-default\">\r\n  <div class=\"card-header\">\r\n    <h3 class=\"card-title\"></h3>\r\n  </div>\r\n  <!-- /.card-header -->\r\n  <!-- form start -->\r\n  <form [formGroup]=\"copyStudentDataFromAndyForm\" (ngSubmit)=\"createManyStudent()\" id=\"student-form\">\r\n    <div class=\"card-body\">\r\n      <div class=\"form-group\">\r\n        <label for=\"data\">Nội dung</label>\r\n        <textarea class=\"form-control\" rows=\"20\" placeholder=\"Paste ...\" id=\"data\" name=\"data\"\r\n                  formControlName=\"data\"></textarea>\r\n      </div>\r\n    </div>\r\n    <!-- /.card-body -->\r\n\r\n    <div class=\"card-footer\">\r\n      <button type=\"submit\" class=\"btn btn-primary\">Tạo mới</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/classes/create-class/create-class.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/classes/create-class/create-class.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-sm-6\">\r\n        <h1>Tạo lớp học mới</h1>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <ol class=\"breadcrumb float-sm-right\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"\">Trang chủ</a></li>\r\n          <li class=\"breadcrumb-item active\">Tạo lớp học</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div><!-- /.container-fluid -->\r\n</section>\r\n<div class=\"card card-default\">\r\n  <div class=\"card-header\">\r\n    <h3 class=\"card-title\"></h3>\r\n  </div>\r\n  <!-- /.card-header -->\r\n  <!-- form start -->\r\n  <form [formGroup]=\"classForm\" (ngSubmit)=\"createClass()\" id=\"class-form\">\r\n    <div class=\"card-body\">\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">Tên lớp học</label>\r\n        <input type=\"text\" formControlName=\"name\" name=\"name\" class=\"form-control\" id=\"name\"\r\n               placeholder=\"tên lớp học\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"classTime\">Giờ học lý thuyết</label>\r\n        <select class=\"custom-select\" id=\"classTime\" name=\"classTime\" formControlName=\"classTime\">\r\n          <option [ngValue]=\"null\" disabled>Chọn giờ học lý thuyết</option>\r\n          <option *ngFor=\"let time of classTime\" [value]=\"time\">{{time}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"program\">Chương trình học</label>\r\n        <select class=\"custom-select\" id=\"program\" name=\"program\" formControlName=\"program\">\r\n          <option [ngValue]=\"null\" disabled>Chọn chương trình học</option>\r\n          <option *ngFor=\"let program of listProgram\" [value]=\"program.id\">{{program.name}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <!-- /.card-body -->\r\n    <div class=\"card-footer\">\r\n      <button type=\"submit\" class=\"btn btn-primary\">Tạo mới</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/classes/edit-class/edit-class.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/classes/edit-class/edit-class.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-sm-6\">\r\n        <h1>Cập nhật thông tin lớp học</h1>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <ol class=\"breadcrumb float-sm-right\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"\">Trang chủ</a></li>\r\n          <li class=\"breadcrumb-item active\">Cập nhật lớp học</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div><!-- /.container-fluid -->\r\n</section>\r\n<div class=\"card card-default\">\r\n  <div class=\"card-header\">\r\n    <h3 class=\"card-title\"></h3>\r\n  </div>\r\n  <!-- /.card-header -->\r\n  <!-- form start -->\r\n  <form [formGroup]=\"classForm\" (ngSubmit)=\"updateClass(id)\" id=\"class-form\">\r\n    <div class=\"card-body\">\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">Tên lớp học</label>\r\n        <input type=\"text\" formControlName=\"name\" name=\"name\" class=\"form-control\" id=\"name\"\r\n               placeholder=\"tên lớp học\" [value]=\"name\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"classTime\">Giờ học lý thuyết</label>\r\n        <select class=\"custom-select\" id=\"classTime\" name=\"classTime\" formControlName=\"classTime\">\r\n          <option [ngValue]=\"null\" disabled>Chọn giờ học lý thuyết</option>\r\n          <option *ngFor=\"let time of classTime\" [value]=\"time\" [selected]=\"time === currentClassTime\">{{time}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"program\">Chương trình học</label>\r\n        <select class=\"custom-select\" id=\"program\" name=\"program\" formControlName=\"program\"\r\n                *ngIf=\"currentProgram != null\">\r\n          <option [ngValue]=\"null\" disabled>Chọn chương trình học</option>\r\n          <option *ngFor=\"let program of listProgram\" [value]=\"program.id\"\r\n                  [selected]=\"currentProgram.id === program.id\">{{program.name}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"module\">Module</label>\r\n        <select class=\"custom-select\" id=\"module\" name=\"module\" formControlName=\"module\"\r\n                *ngIf=\"currentModule != null\">\r\n          <option [ngValue]=\"null\" disabled>Module</option>\r\n          <option *ngFor=\"let module of listModule\" [value]=\"module.name\"\r\n                  [selected]=\"currentModule == module.name\">{{module.name}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <!-- /.card-body -->\r\n    <div class=\"card-footer\">\r\n      <button type=\"submit\" class=\"btn btn-primary\">Cập nhật</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/classes/info-class/info-class.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/classes/info-class/info-class.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-sm-6\">\r\n        <h1>Danh sách học viên lớp {{className}}</h1>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <ol class=\"breadcrumb float-sm-right\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"/\">Trang chủ</a></li>\r\n          <li class=\"breadcrumb-item active\">Thông tin lớp học</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div><!-- /.container-fluid -->\r\n</section>\r\n<section class=\"content\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h3 class=\"card-title\"></h3>\r\n      <div class=\"card-tools\">\r\n        <a routerLink=\"add-student\" class=\"btn btn-sm btn-primary float-lg-right\">\r\n          Thêm học viên\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <table class=\"table table-bordered\" id=\"table-student\">\r\n        <thead>\r\n        <tr>\r\n          <th style=\"width: 10px\">#</th>\r\n          <th>Mã học viên</th>\r\n          <th>Họ tên học viên</th>\r\n          <th style=\"width: 160px\"></th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let student of studentList; index as i\">\r\n          <td>{{i + 1}}</td>\r\n          <td>{{student.studentId}}</td>\r\n          <td>\r\n            {{student.name}}\r\n          </td>\r\n          <td>\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <a [routerLink]=\"['../../../students/edit',student.id]\" class=\"btn btn-block btn-primary\" style=\"color: white\">\r\n                  <i class=\"fa fa-edit\"></i>\r\n                </a>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <button type=\"button\" class=\"btn btn-block btn-danger\" style=\"color: white\" data-toggle=\"modal\"\r\n                        data-target=\"#modal-delete\" >\r\n                  <i class=\"fas fa-trash\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/classes/list-class/list-class.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/classes/list-class/list-class.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-sm-6\">\r\n        <h1>Danh sách lớp học</h1>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <ol class=\"breadcrumb float-sm-right\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"/\">Trang chủ</a></li>\r\n          <li class=\"breadcrumb-item active\">Danh sách lớp học</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div><!-- /.container-fluid -->\r\n</section>\r\n<section class=\"content\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h3 class=\"card-title\"></h3>\r\n      <div class=\"card-tools\">\r\n        <a routerLink=\"create\" class=\"btn btn-sm btn-primary float-lg-right\">\r\n          Tạo mới\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <table class=\"table table-bordered\" id=\"table-classroom\">\r\n        <thead>\r\n        <tr>\r\n          <th style=\"width: 10px\">#</th>\r\n          <th>Tên lớp</th>\r\n          <th>Số HV</th>\r\n          <th>Giờ học lý thuyết</th>\r\n          <th>Chương trình học</th>\r\n          <th>Module</th>\r\n          <th>Coach</th>\r\n          <th>Instructor</th>\r\n          <th>Tutor</th>\r\n          <th>Location</th>\r\n          <th style=\"width: 160px\"></th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let classes of listClasses; index as i\" (mouseenter)=\"getClassId(classes.id)\">\r\n          <td>{{i + 1}}</td>\r\n          <td>\r\n            <a [routerLink]=\"['info',classes.id]\">{{classes.name}}</a>\r\n          </td>\r\n          <td *ngIf=\"classes.students!=null\">\r\n            {{classes.students.length}}\r\n          </td>\r\n          <td>\r\n            Giờ {{classes.classTime}}\r\n          </td>\r\n          <td *ngIf=\"classes.program != null\">\r\n            {{classes.program.name}}\r\n          </td>\r\n          <td>\r\n            {{classes.module}}\r\n          </td>\r\n          <td>\r\n            <select #coachId class=\"custom-select\"\r\n                    (change)=\"addCoachToClass(classes.id, coachId.value)\">\r\n              <option [ngValue]=\"null\" disabled>Coach</option>\r\n              <option *ngFor=\"let coach of listCoach\" [value]=\"coach.id\"\r\n                      [selected]=\"classes.coach!=null ? classes.coach.id === coach.id : false\">{{coach.name}}</option>\r\n            </select>\r\n          </td>\r\n          <td>\r\n            <select #instructorId class=\"custom-select\"\r\n                    (change)=\"addInstructorToClass(classes.id, instructorId.value)\">\r\n              <option [ngValue]=\"null\" disabled>Instructor</option>\r\n              <option *ngFor=\"let instructor of classes.instructorSelect\" [value]=\"instructor.id\"\r\n                      [selected]=\"classes.instructor != null ? classes.instructor.id === instructor.id : false\">{{instructor.name}}</option>\r\n            </select>\r\n          </td>\r\n          <td>\r\n            <select multiple class=\"form-control select2 select2-primary tutor\"\r\n                    data-dropdown-css-class=\"select2-primary\" style=\"width: 100%\">\r\n              <option [ngValue]=\"null\" disabled>Tutor</option>\r\n              <option *ngFor=\"let tutor of classes.tutorSelect; index as j\" [value]=\"tutor.id\"\r\n                      [selected]=\"classes.tutors[0] != null && classes.tutors[0].id == tutor.id\r\n                       || classes.tutors[1] != null && classes.tutors[1].id == tutor.id\">{{tutor.name}}</option>\r\n            </select>\r\n          </td>\r\n          <td>\r\n            <select #classroomId class=\"custom-select\"\r\n                    (change)=\"addClassroomToClasses(classes.id, classroomId.value)\">\r\n              <option [ngValue]=\"null\" disabled>Vị tri</option>\r\n              <option *ngFor=\"let classroom of listClassroom\" [value]=\"classroom.id\"\r\n                      [selected]=\"classes.classroom != null ? classes.classroom.id === classroom.id : false\">{{classroom.name}}</option>\r\n            </select>\r\n          </td>\r\n          <td>\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <a [routerLink]=\"['edit',classes.id]\" class=\"btn btn-block btn-primary\" style=\"color: white\">\r\n                  <i class=\"fa fa-edit\"></i>\r\n                </a>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <button type=\"button\" class=\"btn btn-block btn-danger\" style=\"color: white\" data-toggle=\"modal\"\r\n                        data-target=\"#modal-delete\" (click)=\"getClassId(classes.id)\">\r\n                  <i class=\"fas fa-trash\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal fade\" id=\"modal-delete\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Xóa lớp học</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Bạn có chắc muốn xóa lớp học này</p>\r\n        </div>\r\n        <div class=\"modal-footer justify-content-between\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteClass()\">Xóa</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n  <div class=\"modal fade\" id=\"modal-danger\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content bg-danger\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Cảnh báo</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>{{message}}</p>\r\n          <div *ngIf=\"isLectureError\">\r\n            <p>Bạn có chắc muốn tiếp tục?</p>\r\n            <p>Nếu có hãy nhấn OK</p>\r\n          </div>\r\n          <div *ngIf=\"isClassroomError\">\r\n            <p>Hãy chọn lớp khác</p>\r\n            <p></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer justify-content-between\">\r\n          <button type=\"button\" class=\"btn btn-outline-light\" data-dismiss=\"modal\">Đóng</button>\r\n          <button type=\"button\" class=\"btn btn-outline-light\" id=\"save-event\" (click)=\"continue()\">OK</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/classes/add-student/add-student.component.css":
/*!***************************************************************!*\
  !*** ./src/app/classes/add-student/add-student.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsYXNzZXMvYWRkLXN0dWRlbnQvYWRkLXN0dWRlbnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/classes/add-student/add-student.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/classes/add-student/add-student.component.ts ***!
  \**************************************************************/
/*! exports provided: AddStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStudentComponent", function() { return AddStudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_student_student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/student/student.service */ "./src/app/service/student/student.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AddStudentComponent = class AddStudentComponent {
    constructor(studentService, activatedRoute) {
        this.studentService = studentService;
        this.activatedRoute = activatedRoute;
        this.copyStudentDataFromAndyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            data: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.sub = this.activatedRoute.paramMap.subscribe((paramMap) => {
            this.id = +paramMap.get('id');
        });
    }
    ngOnInit() {
        $(document).ready(function () {
            $('#student-form').validate({
                rules: {
                    data: {
                        required: true
                    }
                },
                messages: {
                    data: {
                        required: 'Hãy nhập họ tên học viên'
                    }
                },
                errorElement: 'span',
                errorPlacement: function (error, element) {
                    error.addClass('invalid-feedback');
                    element.closest('.form-group').append(error);
                },
                highlight: function (element, errorClass, validClass) {
                    $(element).addClass('is-invalid');
                },
                unhighlight: function (element, errorClass, validClass) {
                    $(element).removeClass('is-invalid');
                }
            });
        });
    }
    createStudent(students) {
        const student = {
            studentId: students[1],
            name: students[2],
            classes: {
                id: this.id
            }
        };
        return this.studentService.createStudent(student).toPromise();
    }
    createManyStudent() {
        let data = this.copyStudentDataFromAndyForm.value.data;
        let students;
        let studentRows = [];
        students = data.split('\n');
        let createStudentsPromise = students.map(student => {
            let row = student.split('\t');
            if (row.length >= 3) {
                studentRows = row;
                return this.createStudent(studentRows);
            }
        });
        Promise.all(createStudentsPromise).then(() => {
            this.copyStudentDataFromAndyForm.reset();
            $(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    type: 'success',
                    title: 'Tạo mới thành công'
                });
            });
        }).catch(() => {
            $(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    type: 'error',
                    title: 'Tạo mới thất bại'
                });
            });
        });
    }
};
AddStudentComponent.ctorParameters = () => [
    { type: _service_student_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
AddStudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-student',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-student.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/classes/add-student/add-student.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-student.component.css */ "./src/app/classes/add-student/add-student.component.css")).default]
    })
], AddStudentComponent);



/***/ }),

/***/ "./src/app/classes/classes-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/classes/classes-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ClassesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassesRoutingModule", function() { return ClassesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_class_list_class_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-class/list-class.component */ "./src/app/classes/list-class/list-class.component.ts");
/* harmony import */ var _create_class_create_class_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-class/create-class.component */ "./src/app/classes/create-class/create-class.component.ts");
/* harmony import */ var _edit_class_edit_class_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-class/edit-class.component */ "./src/app/classes/edit-class/edit-class.component.ts");
/* harmony import */ var _info_class_info_class_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info-class/info-class.component */ "./src/app/classes/info-class/info-class.component.ts");
/* harmony import */ var _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-student/add-student.component */ "./src/app/classes/add-student/add-student.component.ts");








const routes = [
    {
        path: '',
        component: _list_class_list_class_component__WEBPACK_IMPORTED_MODULE_3__["ListClassComponent"]
    },
    {
        path: 'create',
        component: _create_class_create_class_component__WEBPACK_IMPORTED_MODULE_4__["CreateClassComponent"]
    },
    {
        path: 'edit/:id',
        component: _edit_class_edit_class_component__WEBPACK_IMPORTED_MODULE_5__["EditClassComponent"]
    },
    {
        path: 'info/:id',
        component: _info_class_info_class_component__WEBPACK_IMPORTED_MODULE_6__["InfoClassComponent"]
    },
    {
        path: 'info/:id/add-student',
        component: _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_7__["AddStudentComponent"]
    }
];
let ClassesRoutingModule = class ClassesRoutingModule {
};
ClassesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ClassesRoutingModule);



/***/ }),

/***/ "./src/app/classes/classes.module.ts":
/*!*******************************************!*\
  !*** ./src/app/classes/classes.module.ts ***!
  \*******************************************/
/*! exports provided: ClassesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassesModule", function() { return ClassesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _classes_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes-routing.module */ "./src/app/classes/classes-routing.module.ts");
/* harmony import */ var _list_class_list_class_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-class/list-class.component */ "./src/app/classes/list-class/list-class.component.ts");
/* harmony import */ var _create_class_create_class_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-class/create-class.component */ "./src/app/classes/create-class/create-class.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _edit_class_edit_class_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-class/edit-class.component */ "./src/app/classes/edit-class/edit-class.component.ts");
/* harmony import */ var _info_class_info_class_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./info-class/info-class.component */ "./src/app/classes/info-class/info-class.component.ts");
/* harmony import */ var _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-student/add-student.component */ "./src/app/classes/add-student/add-student.component.ts");










let ClassesModule = class ClassesModule {
};
ClassesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _list_class_list_class_component__WEBPACK_IMPORTED_MODULE_4__["ListClassComponent"],
            _create_class_create_class_component__WEBPACK_IMPORTED_MODULE_5__["CreateClassComponent"],
            _edit_class_edit_class_component__WEBPACK_IMPORTED_MODULE_7__["EditClassComponent"],
            _info_class_info_class_component__WEBPACK_IMPORTED_MODULE_8__["InfoClassComponent"],
            _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_9__["AddStudentComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _classes_routing_module__WEBPACK_IMPORTED_MODULE_3__["ClassesRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]
    })
], ClassesModule);



/***/ }),

/***/ "./src/app/classes/create-class/create-class.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/classes/create-class/create-class.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsYXNzZXMvY3JlYXRlLWNsYXNzL2NyZWF0ZS1jbGFzcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/classes/create-class/create-class.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/classes/create-class/create-class.component.ts ***!
  \****************************************************************/
/*! exports provided: CreateClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateClassComponent", function() { return CreateClassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_classes_classes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/classes/classes.service */ "./src/app/service/classes/classes.service.ts");
/* harmony import */ var _service_program_program_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/program/program.service */ "./src/app/service/program/program.service.ts");





let CreateClassComponent = class CreateClassComponent {
    constructor(classesService, programService) {
        this.classesService = classesService;
        this.programService = programService;
        this.classForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            classTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            program: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.classTime = [];
        this.classTime = ["G", "H", "I", "K"];
        this.getAllProgram();
    }
    ngOnInit() {
        $(document).ready(function () {
            $('#class-form').validate({
                rules: {
                    name: {
                        required: true
                    },
                    classTime: {
                        required: true
                    },
                    program: {
                        required: true
                    }
                },
                messages: {
                    name: {
                        required: 'Hãy nhập tên lớp học'
                    },
                    classTime: {
                        required: 'Hãy chọn giờ học lý thuyết'
                    },
                    program: {
                        required: 'Hãy chọn chương trình học'
                    },
                },
                errorElement: 'span',
                errorPlacement: function (error, element) {
                    error.addClass('invalid-feedback');
                    element.closest('.form-group').append(error);
                },
                highlight: function (element, errorClass, validClass) {
                    $(element).addClass('is-invalid');
                },
                unhighlight: function (element, errorClass, validClass) {
                    $(element).removeClass('is-invalid');
                }
            });
        });
    }
    getAllProgram() {
        this.programService.getAllProgram().subscribe(listProgram => {
            this.listProgram = listProgram;
        });
    }
    createClass() {
        const classes = {
            id: this.classForm.value.id,
            name: this.classForm.value.name,
            classTime: this.classForm.value.classTime,
            module: 'Module 1',
            program: {
                id: this.classForm.value.program
            },
        };
        if (classes.name !== "" && classes.classTime != null && classes.program != null) {
            this.classesService.createClasses(classes).subscribe(() => {
                $(function () {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000
                    });
                    Toast.fire({
                        type: 'success',
                        title: 'Tạo mới thành công'
                    });
                });
                this.classForm.reset();
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
                        title: 'Tạo mới thất bại'
                    });
                });
            });
        }
    }
};
CreateClassComponent.ctorParameters = () => [
    { type: _service_classes_classes_service__WEBPACK_IMPORTED_MODULE_3__["ClassesService"] },
    { type: _service_program_program_service__WEBPACK_IMPORTED_MODULE_4__["ProgramService"] }
];
CreateClassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-class',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-class.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/classes/create-class/create-class.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-class.component.css */ "./src/app/classes/create-class/create-class.component.css")).default]
    })
], CreateClassComponent);



/***/ }),

/***/ "./src/app/classes/edit-class/edit-class.component.css":
/*!*************************************************************!*\
  !*** ./src/app/classes/edit-class/edit-class.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsYXNzZXMvZWRpdC1jbGFzcy9lZGl0LWNsYXNzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/classes/edit-class/edit-class.component.ts":
/*!************************************************************!*\
  !*** ./src/app/classes/edit-class/edit-class.component.ts ***!
  \************************************************************/
/*! exports provided: EditClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditClassComponent", function() { return EditClassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_program_program_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/program/program.service */ "./src/app/service/program/program.service.ts");
/* harmony import */ var _service_classes_classes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/classes/classes.service */ "./src/app/service/classes/classes.service.ts");






let EditClassComponent = class EditClassComponent {
    constructor(activatedRoute, programService, classesService) {
        this.activatedRoute = activatedRoute;
        this.programService = programService;
        this.classesService = classesService;
        this.currentTutors = [];
        this.classForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            classTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            program: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            module: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.classTime = [];
        this.listProgram = [];
        this.listModule = [];
    }
    ngOnInit() {
        this.classTime = ["G", "H", "I", "K"];
        this.getAllProgram();
        this.sub = this.activatedRoute.paramMap.subscribe((paramMap) => {
            this.id = +paramMap.get('id');
            this.getClassesInfo(this.id);
        });
    }
    getAllProgram() {
        this.programService.getAllProgram().subscribe(listProgram => {
            this.listProgram = listProgram;
        });
    }
    getClassesInfo(id) {
        this.classesService.getClasses(id).subscribe(classes => {
            this.name = classes.name;
            this.id = classes.id;
            this.currentClassTime = classes.classTime;
            this.currentProgram = classes.program;
            this.currentModule = classes.module;
            this.currentTutors = classes.tutors;
            this.currentCoach = classes.coach;
            this.currentInstructor = classes.instructor;
            this.currentClassroom = classes.classroom;
            this.getAllModuleByProgram(this.currentProgram);
        });
    }
    getAllModuleByProgram(program) {
        this.programService.getAllModuleByProgram(program.id).subscribe(listModule => {
            this.listModule = listModule;
        });
    }
    updateClass(id) {
        const classes = {
            id: this.classForm.value.id,
            name: this.classForm.value.name === '' ? this.name : this.classForm.value.name,
            classTime: this.classForm.value.classTime == null ? this.currentClassTime : this.classForm.value.classTime,
            program: {
                id: this.classForm.value.program == null ? this.currentProgram.id : this.classForm.value.program
            },
            module: this.classForm.value.module == null ? this.currentModule : this.classForm.value.module,
            classroom: this.currentClassroom,
            instructor: this.currentInstructor,
            coach: this.currentCoach,
            tutors: this.currentTutors
        };
        this.classesService.updateClasses(id, classes).subscribe(() => {
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
EditClassComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service_program_program_service__WEBPACK_IMPORTED_MODULE_4__["ProgramService"] },
    { type: _service_classes_classes_service__WEBPACK_IMPORTED_MODULE_5__["ClassesService"] }
];
EditClassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-class',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-class.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/classes/edit-class/edit-class.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-class.component.css */ "./src/app/classes/edit-class/edit-class.component.css")).default]
    })
], EditClassComponent);



/***/ }),

/***/ "./src/app/classes/info-class/info-class.component.css":
/*!*************************************************************!*\
  !*** ./src/app/classes/info-class/info-class.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsYXNzZXMvaW5mby1jbGFzcy9pbmZvLWNsYXNzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/classes/info-class/info-class.component.ts":
/*!************************************************************!*\
  !*** ./src/app/classes/info-class/info-class.component.ts ***!
  \************************************************************/
/*! exports provided: InfoClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoClassComponent", function() { return InfoClassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_classes_classes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/classes/classes.service */ "./src/app/service/classes/classes.service.ts");




let InfoClassComponent = class InfoClassComponent {
    constructor(classesService, activatedRoute) {
        this.classesService = classesService;
        this.activatedRoute = activatedRoute;
        this.sub = this.activatedRoute.paramMap.subscribe((paramMap) => {
            const id = +paramMap.get('id');
            this.getClassInfo(id);
            this.getAllStudentByClass(id);
        });
    }
    ngOnInit() {
    }
    getClassInfo(id) {
        this.classesService.getClasses(id).subscribe(classes => {
            this.className = classes.name;
        });
    }
    getAllStudentByClass(id) {
        this.classesService.getAllStudentByClass(id).subscribe(studentList => {
            this.studentList = studentList;
            $(function () {
                $('#table-student').DataTable({
                    'paging': true,
                    'lengthChange': false,
                    'searching': false,
                    'ordering': true,
                    'info': true,
                    'autoWidth': false,
                });
            });
        });
    }
};
InfoClassComponent.ctorParameters = () => [
    { type: _service_classes_classes_service__WEBPACK_IMPORTED_MODULE_3__["ClassesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
InfoClassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info-class',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./info-class.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/classes/info-class/info-class.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./info-class.component.css */ "./src/app/classes/info-class/info-class.component.css")).default]
    })
], InfoClassComponent);



/***/ }),

/***/ "./src/app/classes/list-class/list-class.component.css":
/*!*************************************************************!*\
  !*** ./src/app/classes/list-class/list-class.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsYXNzZXMvbGlzdC1jbGFzcy9saXN0LWNsYXNzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/classes/list-class/list-class.component.ts":
/*!************************************************************!*\
  !*** ./src/app/classes/list-class/list-class.component.ts ***!
  \************************************************************/
/*! exports provided: ListClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListClassComponent", function() { return ListClassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_classes_classes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/classes/classes.service */ "./src/app/service/classes/classes.service.ts");
/* harmony import */ var _service_lecture_lecture_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/lecture/lecture.service */ "./src/app/service/lecture/lecture.service.ts");
/* harmony import */ var _service_classroom_classroom_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/classroom/classroom.service */ "./src/app/service/classroom/classroom.service.ts");





let tutorIds;
let tutorIdRemove;
let ListClassComponent = class ListClassComponent {
    constructor(classesService, lectureService, classroomService) {
        this.classesService = classesService;
        this.lectureService = lectureService;
        this.classroomService = classroomService;
        this.listCoach = [];
        this.listClassroom = [];
        this.message = "";
        this.isClassroomError = false;
        this.isLectureError = false;
    }
    ngOnInit() {
        this.getAllClasses();
        this.getAllClassroom();
    }
    getAllClassroom() {
        this.classroomService.getAllClassroom().subscribe(listClassroom => {
            this.listClassroom = listClassroom;
        });
    }
    getAllCoach() {
        this.lectureService.findAllByJob(1).subscribe(listCoach => {
            this.listCoach = listCoach;
        });
    }
    addCoachToClass(classId, coachId) {
        this.classesService.getAllClasses().subscribe((listClasses) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let countCoach = 0;
            for (let classes of listClasses) {
                if (classes.coach != null) {
                    if (+coachId == classes.coach.id) {
                        countCoach++;
                    }
                }
            }
            if (countCoach == 2) {
                this.message = "Giảng viên này đã có 2 coach 2 lớp";
                this.isLectureError = true;
                $(function () {
                    $('#modal-danger').modal('show');
                });
            }
            else {
                const classes = yield this.getClasses(classId);
                let count = 1;
                let isEqual = false;
                const currentClass = {
                    id: classes.id,
                    name: classes.name,
                    classTime: classes.classTime,
                    module: classes.module,
                    program: {
                        id: classes.program.id
                    },
                    coach: {
                        id: +coachId
                    },
                    tutors: classes.tutors != null ? classes.tutors : [],
                    instructor: classes.instructor != null ? classes.instructor : null,
                    classroom: classes.classroom != null ? classes.classroom : null
                };
                if (classes.instructor != null) {
                    if (classes.instructor.id == +coachId) {
                        isEqual = true;
                    }
                    if (classes.tutors != null) {
                        classes.tutors.map(tutor => {
                            if (tutor.id == classes.instructor.id) {
                                count++;
                            }
                        });
                    }
                }
                if (isEqual && count == 2) {
                    this.message = "Giảng viên này đã có 2 vai trong lớp này";
                    this.isLectureError = true;
                    var self = this;
                    $(function () {
                        $('#modal-danger').modal('show');
                    });
                    $('#save-event').on('click', function () {
                        self.classesService.updateClasses(classId, currentClass).subscribe(() => {
                        });
                    });
                }
                else {
                    this.classesService.updateClasses(classId, currentClass).subscribe(() => {
                    });
                }
            }
        }));
    }
    addInstructorToClass(classId, instructorId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const classes = yield this.getClasses(classId);
            let count = 1;
            let isEqual = false;
            const currentClass = {
                id: classes.id,
                name: classes.name,
                classTime: classes.classTime,
                module: classes.module,
                program: {
                    id: classes.program.id
                },
                instructor: {
                    id: +instructorId
                },
                tutors: classes.tutors != null ? classes.tutors : [],
                coach: classes.coach != null ? classes.coach : null,
                classroom: classes.classroom != null ? classes.classroom : null
            };
            if (classes.coach != null) {
                if (classes.coach.id == +instructorId) {
                    isEqual = true;
                }
            }
            classes.tutors.map(tutor => {
                if (tutor.id == classes.coach.id) {
                    count++;
                }
            });
            if (isEqual && count == 2) {
                this.message = "Giảng viên này đã có 2 vai trong lớp này";
                this.isLectureError = true;
                var self = this;
                $(function () {
                    $('#modal-danger').modal('show');
                });
                $('#save-event').on('click', function () {
                    self.classesService.updateClasses(classId, currentClass).subscribe(() => {
                    });
                });
            }
            else {
                this.classesService.updateClasses(classId, currentClass).subscribe(() => {
                });
            }
        });
    }
    addClassroomToClasses(classId, classroomId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let capacity = 0;
            const classes = yield this.getClasses(classId);
            const currentClass = {
                id: classes.id,
                name: classes.name,
                classTime: classes.classTime,
                module: classes.module,
                program: {
                    id: classes.program.id
                },
                classroom: {
                    id: +classroomId
                },
                tutors: classes.tutors != null ? classes.tutors : [],
                instructor: classes.instructor != null ? classes.instructor : null,
                coach: classes.coach != null ? classes.coach : null,
                students: []
            };
            const classroom = yield this.getClassroom(+classroomId);
            const listClass = yield this.classroomService.getAllClassesByClassroom(+classroomId).toPromise();
            if (listClass.length == 0) {
                this.classesService.updateClasses(classId, currentClass).subscribe(() => {
                });
            }
            else {
                listClass.map((class1) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    class1.students = yield this.getAllStudentByClasses(class1);
                    capacity += class1.students.length;
                }));
                classes.students = yield this.getAllStudentByClasses(classes);
                if (capacity + classes.students.length > classroom.capacity) {
                    this.isClassroomError = true;
                    this.message = "Phòng học này không đủ chỗ cho lớp";
                    $(function () {
                        $('#modal-danger').modal('show');
                    });
                    $('#save-event').on('click', function () {
                        $('#modal-danger').modal('hide');
                    });
                }
                else {
                    this.classesService.updateClasses(classId, currentClass).subscribe(() => {
                    });
                }
            }
        });
    }
    getClasses(id) {
        return this.classesService.getClasses(id).toPromise();
    }
    continue() {
        $(function () {
            $('#modal-danger').modal('hide');
        });
    }
    addTutorToClass(classId) {
        this.classesService.getClasses(classId).subscribe((classes) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const currentClass = {
                id: classes.id,
                name: classes.name,
                classTime: classes.classTime,
                module: classes.module,
                program: {
                    id: classes.program.id
                },
                tutors: classes.tutors != null ? classes.tutors : [],
                coach: classes.coach != null ? classes.coach : null,
                instructor: classes.instructor != null ? classes.instructor : null,
                classroom: classes.classroom != null ? classes.classroom : null
            };
            if (tutorIds != null) {
                for (let i = 0; i < tutorIds.length; i++) {
                    const tutor = yield this.getLecture(tutorIds[i]);
                    currentClass.tutors.push(tutor);
                }
            }
            if (tutorIdRemove != null) {
                let index = -1;
                for (let i = 0; i < currentClass.tutors.length; i++) {
                    if (currentClass.tutors[i].id == tutorIdRemove) {
                        index = i;
                    }
                }
                if (index != -1) {
                    this.removeTutorFromList(index, currentClass.tutors);
                }
            }
            this.classesService.updateClasses(classId, currentClass).subscribe(() => {
            });
        }));
    }
    removeTutorFromList(index, tutors) {
        let listTutor = [];
        if (index == 0) {
            listTutor = tutors;
            listTutor.shift();
        }
        else if (index == tutors.length - 1) {
            listTutor = tutors;
            listTutor.pop();
        }
        else {
            for (let i = 0; i < index; i++) {
                listTutor.push(tutors[i]);
            }
            for (let i = index; i < tutors.length - 1; i++) {
                listTutor.push(tutors[i + 1]);
            }
        }
        tutors = listTutor;
    }
    getAllInstructor(classId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const classes = yield this.getClasses(classId);
            let module = classes.module;
            let name = classes.program.name;
            let classTime = classes.classTime;
            if (module == 'Module 1') {
                return this.classesService.getAllInstructorHasFreeTime(classTime).toPromise();
            }
            let lectureHasFreeTime = yield this.classesService.getAllInstructorHasFreeTime(classTime).toPromise();
            let lecturesByLanguage = [];
            let lectures = [];
            if (name.indexOf('Java') != -1) {
                lecturesByLanguage = yield this.lectureService.findAllByLanguage(1).toPromise();
            }
            if (name.indexOf('PHP') != -1) {
                lecturesByLanguage = yield this.lectureService.findAllByLanguage(2).toPromise();
            }
            if (name.indexOf('ASP') != -1) {
                lecturesByLanguage = yield this.lectureService.findAllByLanguage(3).toPromise();
            }
            for (let i = 0; i < lectureHasFreeTime.length; i++) {
                for (let j = 0; j < lecturesByLanguage.length; j++) {
                    if (lectureHasFreeTime[i].id == lecturesByLanguage[j].id) {
                        lectures.push(lectureHasFreeTime[i]);
                    }
                }
            }
            return lectures;
        });
    }
    getAllTutor(classId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const classes = yield this.getClasses(classId);
            let name = classes.program.name;
            if (name.indexOf('Java') != -1) {
                return this.lectureService.findAllByLanguage(1).toPromise();
            }
            if (name.indexOf('PHP') != -1) {
                return this.lectureService.findAllByLanguage(2).toPromise();
            }
            return this.lectureService.findAllByLanguage(3).toPromise();
        });
    }
    getLecture(id) {
        return this.lectureService.getLecture(id).toPromise();
    }
    getClassId(id) {
        this.id = id;
    }
    deleteClass() {
        this.classesService.deleteClasses(this.id).subscribe(() => {
            this.classesService.getAllClasses().subscribe(listClasses => {
                this.listClasses = listClasses;
            });
            $(function () {
                $('#modal-delete').modal('hide');
            });
            $(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    type: 'success',
                    title: 'Xóa thành công'
                });
            });
        }, () => {
            $(function () {
                $('#modal-delete').modal('hide');
            });
            $(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    type: 'error',
                    title: 'Xóa thất bại'
                });
            });
        });
    }
    getAllClasses() {
        var self = this;
        this.classesService.getAllClasses().subscribe(listClasses => {
            this.listClasses = listClasses;
            this.listClasses.map((classes) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                classes.students = yield this.getAllStudentByClasses(classes);
                classes.tutorSelect = yield this.getAllTutor(classes.id);
                classes.instructorSelect = yield this.getAllInstructor(classes.id);
                if (classes.instructor != null) {
                    classes.instructorSelect.push(classes.instructor);
                }
            }));
            this.getAllCoach();
            $(function () {
                $('#table-classes').DataTable({
                    "paging": true,
                    "lengthChange": false,
                    "searching": false,
                    "ordering": true,
                    "info": true,
                    "autoWidth": false,
                });
                $('.select2').select2({
                    maximumSelectionLength: 2
                });
                $('.tutor').on('select2:select', function (e, source) {
                    tutorIds = $(e.currentTarget).val();
                });
                $('.tutor').on('select2:unselecting', function (e, source) {
                    tutorIdRemove = e.params.args.data.id;
                });
                $('.tutor').on('change', function () {
                    self.addTutorToClass(self.id);
                });
            });
        });
    }
    getAllStudentByClasses(classes) {
        return this.classesService.getAllStudentByClass(classes.id).toPromise();
    }
    getClassroom(id) {
        return this.classroomService.getClassroom(id).toPromise();
    }
};
ListClassComponent.ctorParameters = () => [
    { type: _service_classes_classes_service__WEBPACK_IMPORTED_MODULE_2__["ClassesService"] },
    { type: _service_lecture_lecture_service__WEBPACK_IMPORTED_MODULE_3__["LectureService"] },
    { type: _service_classroom_classroom_service__WEBPACK_IMPORTED_MODULE_4__["ClassroomService"] }
];
ListClassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-class',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-class.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/classes/list-class/list-class.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-class.component.css */ "./src/app/classes/list-class/list-class.component.css")).default]
    })
], ListClassComponent);



/***/ })

}]);
//# sourceMappingURL=classes-classes-module-es2015.js.map