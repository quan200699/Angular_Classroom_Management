(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["program-program-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/program/create-program/create-program.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/program/create-program/create-program.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-sm-6\">\r\n        <h1>Tạo chương trình học mới</h1>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <ol class=\"breadcrumb float-sm-right\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"\">Trang chủ</a></li>\r\n          <li class=\"breadcrumb-item active\">Tạo chương trình học</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div><!-- /.container-fluid -->\r\n</section>\r\n<div class=\"card card-default\">\r\n  <div class=\"card-header\">\r\n    <h3 class=\"card-title\"></h3>\r\n  </div>\r\n  <!-- /.card-header -->\r\n  <!-- form start -->\r\n  <form [formGroup]=\"programForm\" (ngSubmit)=\"createProgram()\" id=\"program-form\">\r\n    <div class=\"card-body\">\r\n      <div class=\"form-group\">\r\n        <label for=\"program-name\">Tên chương trình học</label>\r\n        <input type=\"text\" formControlName=\"name\" name=\"name\" class=\"form-control\" id=\"program-name\"\r\n               placeholder=\"tên chương trình học\">\r\n      </div>\r\n    </div>\r\n    <!-- /.card-body -->\r\n    <div class=\"card-footer\">\r\n      <button type=\"submit\" class=\"btn btn-primary\">Tạo mới</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/program/edit-program/edit-program.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/program/edit-program/edit-program.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-sm-6\">\r\n        <h1>Cập nhật chương trình học</h1>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <ol class=\"breadcrumb float-sm-right\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"\">Trang chủ</a></li>\r\n          <li class=\"breadcrumb-item active\">Cập nhật chương trình</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div><!-- /.container-fluid -->\r\n</section>\r\n<div class=\"card card-default\">\r\n  <div class=\"card-header\">\r\n    <h3 class=\"card-title\"></h3>\r\n  </div>\r\n  <!-- /.card-header -->\r\n  <!-- form start -->\r\n  <form [formGroup]=\"programForm\" (ngSubmit)=\"updateProgram(id)\" id=\"program-form\">\r\n    <div class=\"card-body\">\r\n      <div class=\"form-group\">\r\n        <label for=\"program-name\">Tên chương trình học</label>\r\n        <input type=\"text\" formControlName=\"name\" name=\"name\" [value]=\"name\" class=\"form-control\" id=\"program-name\"\r\n               placeholder=\"Tên chương trình học\">\r\n      </div>\r\n    </div>\r\n    <!-- /.card-body -->\r\n\r\n    <div class=\"card-footer\">\r\n      <button type=\"submit\" class=\"btn btn-primary\">Cập nhật</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/program/list-program/list-program.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/program/list-program/list-program.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-sm-6\">\r\n        <h1>Danh sách chương trình</h1>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <ol class=\"breadcrumb float-sm-right\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"/\">Trang chủ</a></li>\r\n          <li class=\"breadcrumb-item active\">Danh sách chương trình</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div><!-- /.container-fluid -->\r\n</section>\r\n<section class=\"content\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h3 class=\"card-title\"></h3>\r\n      <div class=\"card-tools\">\r\n        <a routerLink=\"create\" class=\"btn btn-sm btn-primary float-lg-right\">\r\n          Tạo mới\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <table class=\"table table-bordered\" id=\"table-program\">\r\n        <thead>\r\n        <tr>\r\n          <th style=\"width: 10px\">#</th>\r\n          <th>Tên chương trình học</th>\r\n          <th style=\"width: 160px\"></th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let program of listProgram; index as i\">\r\n          <td>{{i + 1}}</td>\r\n          <td>\r\n            <a [routerLink]=\"['info',program.id]\">{{program.name}}</a>\r\n          </td>\r\n          <td>\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <a [routerLink]=\"['edit',program.id]\" class=\"btn btn-block btn-primary\" style=\"color: white\">\r\n                  <i class=\"fa fa-edit\"></i>\r\n                </a>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <button type=\"button\" class=\"btn btn-block btn-danger\" style=\"color: white\" data-toggle=\"modal\"\r\n                        data-target=\"#modal-delete\" (click)=\"getProgramId(program.id)\">\r\n                  <i class=\"fas fa-trash\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal fade\" id=\"modal-delete\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Xóa chương trinh học</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Bạn có chắc muốn xóa chương trình này</p>\r\n        </div>\r\n        <div class=\"modal-footer justify-content-between\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteProgram()\">Xóa</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/program/create-program/create-program.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/program/create-program/create-program.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2dyYW0vY3JlYXRlLXByb2dyYW0vY3JlYXRlLXByb2dyYW0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/program/create-program/create-program.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/program/create-program/create-program.component.ts ***!
  \********************************************************************/
/*! exports provided: CreateProgramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProgramComponent", function() { return CreateProgramComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_program_program_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/program/program.service */ "./src/app/service/program/program.service.ts");




let CreateProgramComponent = class CreateProgramComponent {
    constructor(programService) {
        this.programService = programService;
        this.programForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    ngOnInit() {
        $(document).ready(function () {
            $('#program-form').validate({
                rules: {
                    name: {
                        required: true
                    }
                },
                messages: {
                    name: {
                        required: 'Hãy nhập tên chương trình học'
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
    createProgram() {
        const program = {
            id: this.programForm.value.id,
            name: this.programForm.value.name
        };
        if (program.name !== "") {
            this.programService.createProgram(program).subscribe(() => {
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
                this.programForm.reset();
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
CreateProgramComponent.ctorParameters = () => [
    { type: _service_program_program_service__WEBPACK_IMPORTED_MODULE_3__["ProgramService"] }
];
CreateProgramComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-program',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-program.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/program/create-program/create-program.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-program.component.css */ "./src/app/program/create-program/create-program.component.css")).default]
    })
], CreateProgramComponent);



/***/ }),

/***/ "./src/app/program/edit-program/edit-program.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/program/edit-program/edit-program.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2dyYW0vZWRpdC1wcm9ncmFtL2VkaXQtcHJvZ3JhbS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/program/edit-program/edit-program.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/program/edit-program/edit-program.component.ts ***!
  \****************************************************************/
/*! exports provided: EditProgramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProgramComponent", function() { return EditProgramComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_program_program_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/program/program.service */ "./src/app/service/program/program.service.ts");





let EditProgramComponent = class EditProgramComponent {
    constructor(activatedRoute, programService) {
        this.activatedRoute = activatedRoute;
        this.programService = programService;
        this.programForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.sub = this.activatedRoute.paramMap.subscribe((paramMap) => {
            const id = +paramMap.get('id');
            this.getProgramInfo(id);
        });
    }
    ngOnInit() {
    }
    getProgramInfo(id) {
        this.programService.getProgram(id).subscribe(program => {
            this.name = program.name;
            this.id = program.id;
        });
    }
    updateProgram(id) {
        const program = {
            id: this.programForm.value.id,
            name: this.programForm.value.name === '' ? this.name : this.programForm.value.name,
        };
        this.programService.updateProgram(id, program).subscribe(() => {
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
EditProgramComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service_program_program_service__WEBPACK_IMPORTED_MODULE_4__["ProgramService"] }
];
EditProgramComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-program',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-program.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/program/edit-program/edit-program.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-program.component.css */ "./src/app/program/edit-program/edit-program.component.css")).default]
    })
], EditProgramComponent);



/***/ }),

/***/ "./src/app/program/list-program/list-program.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/program/list-program/list-program.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2dyYW0vbGlzdC1wcm9ncmFtL2xpc3QtcHJvZ3JhbS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/program/list-program/list-program.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/program/list-program/list-program.component.ts ***!
  \****************************************************************/
/*! exports provided: ListProgramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListProgramComponent", function() { return ListProgramComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_program_program_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/program/program.service */ "./src/app/service/program/program.service.ts");



let ListProgramComponent = class ListProgramComponent {
    constructor(programService) {
        this.programService = programService;
    }
    ngOnInit() {
        this.getAllProgram();
    }
    getProgramId(id) {
        this.id = id;
    }
    deleteProgram() {
        this.programService.deleteProgram(this.id).subscribe(() => {
            this.programService.getAllProgram().subscribe(listProgram => {
                this.listProgram = listProgram;
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
    getAllProgram() {
        this.programService.getAllProgram().subscribe(listProgram => {
            this.listProgram = listProgram;
            $(function () {
                $('#table-program').DataTable({
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
ListProgramComponent.ctorParameters = () => [
    { type: _service_program_program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"] }
];
ListProgramComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-program',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-program.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/program/list-program/list-program.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-program.component.css */ "./src/app/program/list-program/list-program.component.css")).default]
    })
], ListProgramComponent);



/***/ }),

/***/ "./src/app/program/program-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/program/program-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProgramRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramRoutingModule", function() { return ProgramRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_program_list_program_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-program/list-program.component */ "./src/app/program/list-program/list-program.component.ts");
/* harmony import */ var _create_program_create_program_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-program/create-program.component */ "./src/app/program/create-program/create-program.component.ts");
/* harmony import */ var _edit_program_edit_program_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-program/edit-program.component */ "./src/app/program/edit-program/edit-program.component.ts");






const routes = [
    {
        path: '',
        component: _list_program_list_program_component__WEBPACK_IMPORTED_MODULE_3__["ListProgramComponent"]
    },
    {
        path: 'create',
        component: _create_program_create_program_component__WEBPACK_IMPORTED_MODULE_4__["CreateProgramComponent"]
    },
    {
        path: 'edit/:id',
        component: _edit_program_edit_program_component__WEBPACK_IMPORTED_MODULE_5__["EditProgramComponent"]
    },
];
let ProgramRoutingModule = class ProgramRoutingModule {
};
ProgramRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProgramRoutingModule);



/***/ }),

/***/ "./src/app/program/program.module.ts":
/*!*******************************************!*\
  !*** ./src/app/program/program.module.ts ***!
  \*******************************************/
/*! exports provided: ProgramModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramModule", function() { return ProgramModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _program_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./program-routing.module */ "./src/app/program/program-routing.module.ts");
/* harmony import */ var _list_program_list_program_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-program/list-program.component */ "./src/app/program/list-program/list-program.component.ts");
/* harmony import */ var _create_program_create_program_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-program/create-program.component */ "./src/app/program/create-program/create-program.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _edit_program_edit_program_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-program/edit-program.component */ "./src/app/program/edit-program/edit-program.component.ts");








let ProgramModule = class ProgramModule {
};
ProgramModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _list_program_list_program_component__WEBPACK_IMPORTED_MODULE_4__["ListProgramComponent"],
            _create_program_create_program_component__WEBPACK_IMPORTED_MODULE_5__["CreateProgramComponent"],
            _edit_program_edit_program_component__WEBPACK_IMPORTED_MODULE_7__["EditProgramComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _program_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProgramRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]
    })
], ProgramModule);



/***/ })

}]);
//# sourceMappingURL=program-program-module-es2015.js.map