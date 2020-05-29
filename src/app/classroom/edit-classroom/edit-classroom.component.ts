import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ClassroomService} from "../../service/classroom/classroom.service";
import {Classroom} from "../../interface/classroom";

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-edit-classroom',
  templateUrl: './edit-classroom.component.html',
  styleUrls: ['./edit-classroom.component.css']
})
export class EditClassroomComponent implements OnInit {
  sub: Subscription;
  name: string;
  description: string;
  id: number;
  capacity: number;
  classroomForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    capacity: new FormControl('')
  });


  constructor(private activatedRoute: ActivatedRoute,
              private classroomService: ClassroomService) {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.getClassroomInfo(id);
    });
  }

  ngOnInit() {
  }

  getClassroomInfo(id: number) {
    this.classroomService.getClassroom(id).subscribe(classroom => {
      this.name = classroom.name;
      this.id = classroom.id;
      this.capacity = classroom.capacity;
    });
  }

  updateClassroom(id: number) {
    const classroom: Classroom = {
      id: this.classroomForm.value.id,
      name: this.classroomForm.value.name === '' ? this.name : this.classroomForm.value.name,
      capacity: this.classroomForm.value.capacity === '' ? this.capacity : this.classroomForm.value.capacity,
    };
    this.classroomService.updateClassroom(id, classroom).subscribe(() => {
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
}
