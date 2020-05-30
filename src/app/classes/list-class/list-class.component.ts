import {Component, OnInit} from '@angular/core';
import {Classes} from "../../interface/classes";
import {ClassesService} from "../../service/classes/classes.service";
import {Lecture} from "../../interface/lecture";
import {LectureService} from "../../service/lecture/lecture.service";

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-list-class',
  templateUrl: './list-class.component.html',
  styleUrls: ['./list-class.component.css']
})
export class ListClassComponent implements OnInit {
  listClasses: Classes[];
  id: number;
  listCoach: Lecture[] = [];
  listInstructor: Lecture[] = [];
  listTutor: Lecture[] = [];

  constructor(private classesService: ClassesService,
              private lectureService: LectureService) {
  }

  ngOnInit() {
    this.getAllClasses();
    this.getAllCoach();
    this.getAllInstructor();
  }

  getAllCoach() {
    this.lectureService.findAllByJob(1).subscribe(listCoach => {
      this.listCoach = listCoach;
    })
  }

  addCoachToClass(classId: number, coachId: string) {
    this.classesService.getClasses(classId).subscribe(classes => {
      const currentClass: Classes = {
        id: classes.id,
        name: classes.name,
        classTime: classes.classTime,
        program: {
          id: classes.program.id
        },
        coach: {
          id: +coachId
        }
      };
      if (classes.instructor != null) {
        currentClass.instructor = classes.instructor;
      }
      this.classesService.updateClasses(classId, currentClass).subscribe(() => {
      });
    })
  }

  addInstructorToClass(classId: number, instructorId: string) {
    this.classesService.getClasses(classId).subscribe(classes => {
      const currentClass: Classes = {
        id: classes.id,
        name: classes.name,
        classTime: classes.classTime,
        program: {
          id: classes.program.id
        },
        instructor: {
          id: +instructorId
        }
      };
      if (classes.coach != null) {
        currentClass.coach = classes.coach;
      }
      this.classesService.updateClasses(classId, currentClass).subscribe(() => {
      });
    })
  }

  getAllInstructor() {
    this.lectureService.findAllByJob(1).subscribe(listInstructor => {
      this.listInstructor = listInstructor;
    })
  }

  getClassId(id: number) {
    this.id = id;
  }

  deleteClass() {
    this.classesService.deleteClasses(this.id).subscribe(() => {
      this.classesService.getAllClasses().subscribe(listClasses => {
        this.listClasses = listClasses;
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

  getAllClasses() {
    this.classesService.getAllClasses().subscribe(listClasses => {
      this.listClasses = listClasses;
      $(function () {
        $('#table-classes').DataTable({
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
