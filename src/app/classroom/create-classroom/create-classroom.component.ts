import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ClassroomService} from "../../service/classroom/classroom.service";
import {Classroom} from "../../interface/classroom";

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-create-classroom',
  templateUrl: './create-classroom.component.html',
  styleUrls: ['./create-classroom.component.css']
})
export class CreateClassroomComponent implements OnInit {
  classroomForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    capacity: new FormControl('')
  });

  constructor(private classroomService: ClassroomService) {
  }

  ngOnInit() {
    $(document).ready(function () {
      $('#classroom-form').validate({
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

  createClassroom() {
    const classroom: Classroom = {
      id: this.classroomForm.value.id,
      name: this.classroomForm.value.name,
      capacity: this.classroomForm.value.capacity
    };
    if (classroom.name !== "") {
      this.classroomService.createClassroom(classroom).subscribe(() => {
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
        this.classroomForm.reset();
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
