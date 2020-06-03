(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lecture-lecture-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lecture/create-lecture/create-lecture.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lecture/create-lecture/create-lecture.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-sm-6\">\r\n        <h1>Tạo giảng viên</h1>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <ol class=\"breadcrumb float-sm-right\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"\">Trang chủ</a></li>\r\n          <li class=\"breadcrumb-item active\">Tạo giảng viên</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div><!-- /.container-fluid -->\r\n</section>\r\n<div class=\"card card-default\">\r\n  <div class=\"card-header\">\r\n    <h3 class=\"card-title\"></h3>\r\n  </div>\r\n  <!-- /.card-header -->\r\n  <!-- form start -->\r\n  <form [formGroup]=\"lectureForm\" (ngSubmit)=\"createLectureWithMultiLanguage()\" id=\"lecture-form\">\r\n    <div class=\"card-body\">\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">Tên giảng viên</label>\r\n        <input type=\"text\" formControlName=\"name\" name=\"name\" class=\"form-control\" id=\"name\"\r\n               placeholder=\"tên giảng viên\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"job\">Hình thức làm việc</label>\r\n        <select class=\"custom-select\" id=\"job\" name=\"job\" formControlName=\"job\">\r\n          <option [ngValue]=\"null\" disabled>Chọn hình thức làm việc</option>\r\n          <option *ngFor=\"let job of listJob\" [value]=\"job.id\">{{job.name}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"checkbox\">Ngôn ngữ lập trình</label>\r\n        <div id=\"checkbox\" class=\"custom-control custom-checkbox\" *ngFor=\"let language of listLanguage; index as i\">\r\n          <input class=\"custom-control-input\" type=\"checkbox\" id=\"customCheckbox{{i}}\" formControlName=\"language\"\r\n                 (click)=\"addLanguageToList(language.id)\" name=\"language\">\r\n          <label for=\"customCheckbox{{i}}\" class=\"custom-control-label\">{{language.name}}</label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- /.card-body -->\r\n    <div class=\"card-footer\">\r\n      <button type=\"submit\" class=\"btn btn-primary\">Tạo mới</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lecture/edit-lecture/edit-lecture.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lecture/edit-lecture/edit-lecture.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-sm-6\">\r\n        <h1>Cập nhật thông tin giảng viên</h1>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <ol class=\"breadcrumb float-sm-right\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"\">Trang chủ</a></li>\r\n          <li class=\"breadcrumb-item active\">Cập nhật thông tin giảng viên</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div><!-- /.container-fluid -->\r\n</section>\r\n<div class=\"card card-default\">\r\n  <div class=\"card-header\">\r\n    <h3 class=\"card-title\"></h3>\r\n  </div>\r\n  <!-- /.card-header -->\r\n  <!-- form start -->\r\n  <form [formGroup]=\"lectureForm\" (ngSubmit)=\"updateLecture(id)\" id=\"lecture-form\">\r\n    <div class=\"card-body\">\r\n      <div class=\"form-group\">\r\n        <label for=\"program-name\">Tên giảng viên</label>\r\n        <input type=\"text\" formControlName=\"name\" name=\"name\" [value]=\"name\" class=\"form-control\" id=\"program-name\"\r\n               placeholder=\"Tên chương trình học\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"job\">Hình thức làm việc</label>\r\n        <select class=\"custom-select\" id=\"job\" name=\"job\" formControlName=\"job\" *ngIf=\"currentJob != null\">\r\n          <option [ngValue]=\"null\" disabled>Chọn hình thức làm việc</option>\r\n          <option *ngFor=\"let job of listJob\" [value]=\"job.id\"\r\n                  [selected]=\"job.id === currentJob.id\">{{job.name}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"checkbox\">Ngôn ngữ lập trình</label>\r\n        <div id=\"checkbox\" class=\"custom-control custom-checkbox\" *ngFor=\"let language of listLanguage; index as i\">\r\n          <input class=\"custom-control-input\" type=\"checkbox\" id=\"language{{i}}\" formControlName=\"language\"\r\n                 (click)=\"addLanguageToList(language.id)\" name=\"language\"\r\n                 [checked]=\"language.id == currentLanguages[i].id\" *ngIf=\"currentLanguages[i] != null\">\r\n          <label for=\"language{{i}}\" class=\"custom-control-label\">{{language.name}}</label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- /.card-body -->\r\n\r\n    <div class=\"card-footer\">\r\n      <button type=\"submit\" class=\"btn btn-primary\">Cập nhật</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lecture/list-lecture/list-lecture.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lecture/list-lecture/list-lecture.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-sm-6\">\r\n        <h1>Danh sách giảng viên</h1>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <ol class=\"breadcrumb float-sm-right\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"/\">Trang chủ</a></li>\r\n          <li class=\"breadcrumb-item active\">Danh sách giảng viên</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div><!-- /.container-fluid -->\r\n</section>\r\n<section class=\"content\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h3 class=\"card-title\"></h3>\r\n      <div class=\"card-tools\">\r\n        <a routerLink=\"create\" class=\"btn btn-sm btn-primary float-lg-right\">\r\n          Tạo mới\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <table class=\"table table-bordered\" id=\"table-lecture\">\r\n        <thead>\r\n        <tr>\r\n          <th style=\"width: 10px\">#</th>\r\n          <th>Tên giảng viên</th>\r\n          <th style=\"width: 160px\"></th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let lecture of listLecture; index as i\">\r\n          <td>{{i + 1}}</td>\r\n          <td>\r\n            <a [routerLink]=\"['info',lecture.id]\">{{lecture.name}}</a>\r\n          </td>\r\n          <td>\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <a [routerLink]=\"['edit',lecture.id]\" class=\"btn btn-block btn-primary\" style=\"color: white\">\r\n                  <i class=\"fa fa-edit\"></i>\r\n                </a>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <button type=\"button\" class=\"btn btn-block btn-danger\" style=\"color: white\" data-toggle=\"modal\"\r\n                        data-target=\"#modal-delete\" (click)=\"getLectureId(lecture.id)\">\r\n                  <i class=\"fas fa-trash\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal fade\" id=\"modal-delete\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Xóa giảng viên</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Bạn có chắc muốn xóa giảng viên này</p>\r\n        </div>\r\n        <div class=\"modal-footer justify-content-between\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteLecture()\">Xóa</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/lecture/create-lecture/create-lecture.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/lecture/create-lecture/create-lecture.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlY3R1cmUvY3JlYXRlLWxlY3R1cmUvY3JlYXRlLWxlY3R1cmUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/lecture/create-lecture/create-lecture.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/lecture/create-lecture/create-lecture.component.ts ***!
  \********************************************************************/
/*! exports provided: CreateLectureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateLectureComponent", function() { return CreateLectureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_lecture_lecture_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/lecture/lecture.service */ "./src/app/service/lecture/lecture.service.ts");
/* harmony import */ var _service_job_job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/job/job.service */ "./src/app/service/job/job.service.ts");
/* harmony import */ var _service_language_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/language/language.service */ "./src/app/service/language/language.service.ts");






let CreateLectureComponent = class CreateLectureComponent {
    constructor(lectureService, jobService, languageService) {
        this.lectureService = lectureService;
        this.jobService = jobService;
        this.languageService = languageService;
        this.lectureForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            job: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            language: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.selectedLanguageList = [];
        this.getAllLanguage();
        this.getAllJob();
    }
    ngOnInit() {
        $(document).ready(function () {
            $('#lecture-form').validate({
                rules: {
                    name: {
                        required: true
                    },
                    job: {
                        required: true
                    },
                    language: {
                        required: true
                    }
                },
                messages: {
                    name: {
                        required: 'Hãy nhập tên giảng viên'
                    },
                    job: {
                        required: 'Hãy nhập thời gian làm việc'
                    },
                    language: {
                        required: 'Hãy nhập ngôn ngữ lập trình'
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
    getAllLanguage() {
        this.languageService.getAllLanguage().subscribe(listLanguage => {
            this.listLanguage = listLanguage;
        });
    }
    getAllJob() {
        this.jobService.getAllJob().subscribe(listJob => {
            this.listJob = listJob;
        });
    }
    addLanguageToList(id) {
        if (this.selectedLanguageList.length == 0) {
            this.selectedLanguageList.push(id);
        }
        else {
            let index = -1;
            for (let i = 0; i < this.selectedLanguageList.length; i++) {
                if (this.selectedLanguageList[i] == id) {
                    index = i;
                    break;
                }
            }
            if (index == -1) {
                this.selectedLanguageList.push(id);
            }
            else {
                this.removeLanguageFromList(index);
            }
        }
    }
    removeLanguageFromList(index) {
        let listLanguage = [];
        if (index == 0) {
            listLanguage = this.selectedLanguageList;
            listLanguage.shift();
        }
        else if (index == this.selectedLanguageList.length - 1) {
            listLanguage = this.selectedLanguageList;
            listLanguage.pop();
        }
        else {
            for (let i = 0; i < index; i++) {
                listLanguage.push(this.selectedLanguageList[i]);
            }
            for (let i = index; i < this.selectedLanguageList.length - 1; i++) {
                listLanguage.push(this.selectedLanguageList[i + 1]);
            }
        }
        this.selectedLanguageList = listLanguage;
    }
    createLectureWithMultiLanguage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const lecture = {
                id: this.lectureForm.value.id,
                name: this.lectureForm.value.name,
                job: {
                    id: this.lectureForm.value.job
                },
                languages: []
            };
            if (lecture.name !== "" && lecture.job != null && this.selectedLanguageList.length != 0) {
                for (let i = 0; i < this.selectedLanguageList.length; i++) {
                    const language = yield this.getLanguage(this.selectedLanguageList[i]);
                    lecture.languages.push(language);
                }
                const newLecture = yield this.createLecture(lecture);
                if (newLecture != null) {
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
                    this.lectureForm.reset();
                }
                else {
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
                }
            }
        });
    }
    getLanguage(id) {
        return this.languageService.getLanguage(id).toPromise();
    }
    createLecture(lecture) {
        return this.lectureService.createLecture(lecture).toPromise();
    }
};
CreateLectureComponent.ctorParameters = () => [
    { type: _service_lecture_lecture_service__WEBPACK_IMPORTED_MODULE_3__["LectureService"] },
    { type: _service_job_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"] },
    { type: _service_language_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"] }
];
CreateLectureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-lecture',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-lecture.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lecture/create-lecture/create-lecture.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-lecture.component.css */ "./src/app/lecture/create-lecture/create-lecture.component.css")).default]
    })
], CreateLectureComponent);



/***/ }),

/***/ "./src/app/lecture/edit-lecture/edit-lecture.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/lecture/edit-lecture/edit-lecture.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlY3R1cmUvZWRpdC1sZWN0dXJlL2VkaXQtbGVjdHVyZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/lecture/edit-lecture/edit-lecture.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/lecture/edit-lecture/edit-lecture.component.ts ***!
  \****************************************************************/
/*! exports provided: EditLectureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditLectureComponent", function() { return EditLectureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_lecture_lecture_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/lecture/lecture.service */ "./src/app/service/lecture/lecture.service.ts");
/* harmony import */ var _service_language_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/language/language.service */ "./src/app/service/language/language.service.ts");
/* harmony import */ var _service_job_job_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/job/job.service */ "./src/app/service/job/job.service.ts");







let EditLectureComponent = class EditLectureComponent {
    constructor(activatedRoute, lectureService, languageService, jobService) {
        this.activatedRoute = activatedRoute;
        this.lectureService = lectureService;
        this.languageService = languageService;
        this.jobService = jobService;
        this.selectedLanguageList = [];
        this.lectureForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            job: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            language: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.sub = this.activatedRoute.paramMap.subscribe((paramMap) => {
            const id = +paramMap.get('id');
            this.getLectureInfo(id);
        });
        this.getAllLanguage();
        this.getAllJob();
    }
    ngOnInit() {
        $(document).ready(function () {
            $('#lecture-form').validate({
                rules: {
                    name: {
                        required: true
                    },
                    job: {
                        required: true
                    },
                    language: {
                        required: true
                    }
                },
                messages: {
                    name: {
                        required: 'Hãy nhập tên giảng viên'
                    },
                    job: {
                        required: 'Hãy nhập thời gian làm việc'
                    },
                    language: {
                        required: 'Hãy nhập ngôn ngữ lập trình'
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
    getAllLanguage() {
        this.languageService.getAllLanguage().subscribe(listLanguage => {
            this.listLanguage = listLanguage;
        });
    }
    getAllJob() {
        this.jobService.getAllJob().subscribe(listJob => {
            this.listJob = listJob;
        });
    }
    getLectureInfo(id) {
        this.lectureService.getLecture(id).subscribe(lecture => {
            this.name = lecture.name;
            this.id = lecture.id;
            this.currentJob = lecture.job;
            this.currentLanguages = lecture.languages;
        });
    }
    addLanguageToList(id) {
        if (this.selectedLanguageList.length == 0) {
            this.selectedLanguageList.push(id);
        }
        else {
            let index = -1;
            for (let i = 0; i < this.selectedLanguageList.length; i++) {
                if (this.selectedLanguageList[i] == id) {
                    index = i;
                    break;
                }
            }
            if (index == -1) {
                this.selectedLanguageList.push(id);
            }
            else {
                this.removeLanguageFromList(index);
            }
        }
    }
    removeLanguageFromList(index) {
        let listLanguage = [];
        if (index == 0) {
            listLanguage = this.selectedLanguageList;
            listLanguage.shift();
        }
        else if (index == this.selectedLanguageList.length - 1) {
            listLanguage = this.selectedLanguageList;
            listLanguage.pop();
        }
        else {
            for (let i = 0; i < index; i++) {
                listLanguage.push(this.selectedLanguageList[i]);
            }
            for (let i = index; i < this.selectedLanguageList.length - 1; i++) {
                listLanguage.push(this.selectedLanguageList[i + 1]);
            }
        }
        this.selectedLanguageList = listLanguage;
    }
    updateLecture(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const lecture = {
                id: this.lectureForm.value.id,
                name: this.lectureForm.value.name === '' ? this.name : this.lectureForm.value.name,
                job: {
                    id: this.lectureForm.value.job == null ? this.currentJob.id : this.lectureForm.value.job
                },
                languages: this.currentLanguages
            };
            for (let i = 0; i < this.selectedLanguageList.length; i++) {
                const language = yield this.getLanguage(this.selectedLanguageList[i]);
                lecture.languages.push(language);
            }
            this.lectureService.updateLecture(id, lecture).subscribe(() => {
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
        });
    }
    getLanguage(id) {
        return this.languageService.getLanguage(id).toPromise();
    }
};
EditLectureComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service_lecture_lecture_service__WEBPACK_IMPORTED_MODULE_4__["LectureService"] },
    { type: _service_language_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"] },
    { type: _service_job_job_service__WEBPACK_IMPORTED_MODULE_6__["JobService"] }
];
EditLectureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-lecture',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-lecture.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lecture/edit-lecture/edit-lecture.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-lecture.component.css */ "./src/app/lecture/edit-lecture/edit-lecture.component.css")).default]
    })
], EditLectureComponent);



/***/ }),

/***/ "./src/app/lecture/lecture-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/lecture/lecture-routing.module.ts ***!
  \***************************************************/
/*! exports provided: LectureRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LectureRoutingModule", function() { return LectureRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_lecture_list_lecture_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-lecture/list-lecture.component */ "./src/app/lecture/list-lecture/list-lecture.component.ts");
/* harmony import */ var _create_lecture_create_lecture_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-lecture/create-lecture.component */ "./src/app/lecture/create-lecture/create-lecture.component.ts");
/* harmony import */ var _edit_lecture_edit_lecture_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-lecture/edit-lecture.component */ "./src/app/lecture/edit-lecture/edit-lecture.component.ts");






const routes = [
    {
        path: '',
        component: _list_lecture_list_lecture_component__WEBPACK_IMPORTED_MODULE_3__["ListLectureComponent"]
    },
    {
        path: 'create',
        component: _create_lecture_create_lecture_component__WEBPACK_IMPORTED_MODULE_4__["CreateLectureComponent"]
    },
    {
        path: 'edit/:id',
        component: _edit_lecture_edit_lecture_component__WEBPACK_IMPORTED_MODULE_5__["EditLectureComponent"]
    },
];
let LectureRoutingModule = class LectureRoutingModule {
};
LectureRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LectureRoutingModule);



/***/ }),

/***/ "./src/app/lecture/lecture.module.ts":
/*!*******************************************!*\
  !*** ./src/app/lecture/lecture.module.ts ***!
  \*******************************************/
/*! exports provided: LectureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LectureModule", function() { return LectureModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _lecture_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lecture-routing.module */ "./src/app/lecture/lecture-routing.module.ts");
/* harmony import */ var _list_lecture_list_lecture_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-lecture/list-lecture.component */ "./src/app/lecture/list-lecture/list-lecture.component.ts");
/* harmony import */ var _create_lecture_create_lecture_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-lecture/create-lecture.component */ "./src/app/lecture/create-lecture/create-lecture.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _edit_lecture_edit_lecture_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-lecture/edit-lecture.component */ "./src/app/lecture/edit-lecture/edit-lecture.component.ts");








let LectureModule = class LectureModule {
};
LectureModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _list_lecture_list_lecture_component__WEBPACK_IMPORTED_MODULE_4__["ListLectureComponent"],
            _create_lecture_create_lecture_component__WEBPACK_IMPORTED_MODULE_5__["CreateLectureComponent"],
            _edit_lecture_edit_lecture_component__WEBPACK_IMPORTED_MODULE_7__["EditLectureComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _lecture_routing_module__WEBPACK_IMPORTED_MODULE_3__["LectureRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]
    })
], LectureModule);



/***/ }),

/***/ "./src/app/lecture/list-lecture/list-lecture.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/lecture/list-lecture/list-lecture.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlY3R1cmUvbGlzdC1sZWN0dXJlL2xpc3QtbGVjdHVyZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/lecture/list-lecture/list-lecture.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/lecture/list-lecture/list-lecture.component.ts ***!
  \****************************************************************/
/*! exports provided: ListLectureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListLectureComponent", function() { return ListLectureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_lecture_lecture_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/lecture/lecture.service */ "./src/app/service/lecture/lecture.service.ts");



let ListLectureComponent = class ListLectureComponent {
    constructor(lectureService) {
        this.lectureService = lectureService;
    }
    ngOnInit() {
        this.getAllLecture();
    }
    getLectureId(id) {
        this.id = id;
    }
    deleteLecture() {
        this.lectureService.deleteLecture(this.id).subscribe(() => {
            this.lectureService.getAllLecture().subscribe(listLecture => {
                this.listLecture = listLecture;
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
    getAllLecture() {
        this.lectureService.getAllLecture().subscribe(listLecture => {
            this.listLecture = listLecture;
            $(function () {
                $('#table-lecture').DataTable({
                    "paging": true,
                    "lengthChange": false,
                    "searching": false,
                    "ordering": true,
                    "info": true,
                    "autoWidth": false,
                });
            });
        });
    }
};
ListLectureComponent.ctorParameters = () => [
    { type: _service_lecture_lecture_service__WEBPACK_IMPORTED_MODULE_2__["LectureService"] }
];
ListLectureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-lecture',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-lecture.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lecture/list-lecture/list-lecture.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-lecture.component.css */ "./src/app/lecture/list-lecture/list-lecture.component.css")).default]
    })
], ListLectureComponent);



/***/ }),

/***/ "./src/app/service/job/job.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/job/job.service.ts ***!
  \********************************************/
/*! exports provided: JobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobService", function() { return JobService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}`;
let JobService = class JobService {
    constructor(http) {
        this.http = http;
    }
    getAllJob() {
        return this.http.get(API_URL + '/jobs');
    }
    createJob(job) {
        return this.http.post(API_URL + '/jobs', job);
    }
    getJob(id) {
        return this.http.get(API_URL + `/jobs/${id}`);
    }
    updateJob(id, job) {
        return this.http.put(API_URL + `/jobs/${id}`, job);
    }
    deleteJob(id) {
        return this.http.delete(API_URL + `/jobs/${id}`);
    }
};
JobService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
JobService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], JobService);



/***/ }),

/***/ "./src/app/service/language/language.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/language/language.service.ts ***!
  \******************************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}`;
let LanguageService = class LanguageService {
    constructor(http) {
        this.http = http;
    }
    getAllLanguage() {
        return this.http.get(API_URL + '/languages');
    }
    createLanguage(language) {
        return this.http.post(API_URL + '/languages', language);
    }
    getLanguage(id) {
        return this.http.get(API_URL + `/languages/${id}`);
    }
    updateLanguage(id, language) {
        return this.http.put(API_URL + `/languages/${id}`, language);
    }
    deleteLanguage(id) {
        return this.http.delete(API_URL + `/languages/${id}`);
    }
};
LanguageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
LanguageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LanguageService);



/***/ })

}]);
//# sourceMappingURL=lecture-lecture-module-es2015.js.map