import {Component, OnInit} from '@angular/core';
import {Lecture} from "../../interface/lecture";
import {LectureService} from "../../service/lecture/lecture.service";

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-list-lecture',
  templateUrl: './list-lecture.component.html',
  styleUrls: ['./list-lecture.component.css']
})
export class ListLectureComponent implements OnInit {
  listLecture: Lecture[];
  id: number;

  constructor(private lectureService: LectureService) {
  }

  ngOnInit() {
    this.getAllLecture();
  }

  getLectureId(id: number) {
    this.id = id;
  }

  deleteLecture() {
    this.lectureService.deleteLecture(this.id).subscribe(() => {
      this.lectureService.getAllLecture().subscribe(listLecture => {
        this.listLecture = listLecture;
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
}
