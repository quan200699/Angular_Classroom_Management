import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ClassesService} from "../../service/classes/classes.service";
import {Classes} from "../../interface/classes";
import {ProgramService} from "../../service/program/program.service";
import {Program} from "../../interface/program";

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css']
})
export class CreateClassComponent implements OnInit {
  classForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    classTime: new FormControl(),
    program: new FormControl()
  });
  classTime: string[] = [];
  listProgram: Program[];

  constructor(private classesService: ClassesService,
              private programService: ProgramService) {
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
    })
  }

  createClass() {
    const classes: Classes = {
      id: this.classForm.value.id,
      name: this.classForm.value.name,
      classTime: this.classForm.value.classTime,
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
}
