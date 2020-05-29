import {Component, OnInit} from '@angular/core';
import {Program} from "../../interface/program";
import {ProgramService} from "../../service/program/program.service";
import {Classroom} from "../../interface/classroom";
import {ClassroomService} from "../../service/classroom/classroom.service";

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-list-classroom',
  templateUrl: './list-classroom.component.html',
  styleUrls: ['./list-classroom.component.css']
})
export class ListClassroomComponent implements OnInit {
  listClassroom: Classroom[];
  id: number;

  constructor(private classroomService: ClassroomService) {
  }

  ngOnInit() {
    this.getAllClassroom();
  }

  getClassroomId(id: number) {
    this.id = id;
  }

  deleteClassroom() {
    this.classroomService.deleteClassroom(this.id).subscribe(() => {
      this.classroomService.getAllClassroom().subscribe(listClassroom => {
        this.listClassroom = listClassroom;
      })
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
    })
  }

  getAllClassroom() {
    this.classroomService.getAllClassroom().subscribe(listClassroom => {
      this.listClassroom = listClassroom;
      $(function () {
        $('#table-classroom').DataTable({
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
}
