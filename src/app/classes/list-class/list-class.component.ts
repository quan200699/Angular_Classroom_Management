import {Component, OnInit} from '@angular/core';
import {Classes} from "../../interface/classes";
import {ClassesService} from "../../service/classes/classes.service";
import {Lecture} from "../../interface/lecture";
import {LectureService} from "../../service/lecture/lecture.service";

declare var $: any;
declare var Swal: any;
let tutorIds: any[];
let tutorIdRemove: any;

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
  selected: boolean;
  message = "";

  constructor(private classesService: ClassesService,
              private lectureService: LectureService) {
  }

  ngOnInit() {
    this.getAllClasses();
    this.getAllCoach();
    this.getAllInstructor();
    this.getAllTutor();
  }

  getAllCoach() {
    this.lectureService.findAllByJob(1).subscribe(listCoach => {
      this.listCoach = listCoach;
    })
  }

  addCoachToClass(classId: number, coachId: string) {
    this.classesService.getClasses(classId).subscribe(classes => {
      let count = 1;
      let isEqual = false;
      const currentClass: Classes = {
        id: classes.id,
        name: classes.name,
        classTime: classes.classTime,
        program: {
          id: classes.program.id
        },
        coach: {
          id: +coachId
        },
        tutors: []
      };
      if (classes.instructor != null) {
        currentClass.instructor = classes.instructor;
        if (classes.instructor.id == +coachId) {
          isEqual = true;
        }
      }
      if (classes.tutors != null) {
        currentClass.tutors = classes.tutors;
        classes.tutors.map(tutor => {
          if (tutor.id == classes.instructor.id) {
            count++;
          }
        })
      }
      if (isEqual && count == 2) {
        this.message = "Giảng viên này đã có 2 vai trong lớp này";
        var self = this;
        $(function () {
          $('#modal-danger').modal('show');
        })
        $('#save-event').on('click', function () {
            self.classesService.updateClasses(classId, currentClass).subscribe(() => {
            });
          }
        );
      } else {
        this.classesService.updateClasses(classId, currentClass).subscribe(() => {
        });
      }
    })
  }

  addInstructorToClass(classId: number, instructorId: string) {
    this.classesService.getClasses(classId).subscribe(classes => {
      let count = 1;
      let isEqual = false;
      const currentClass: Classes = {
        id: classes.id,
        name: classes.name,
        classTime: classes.classTime,
        program: {
          id: classes.program.id
        },
        instructor: {
          id: +instructorId
        },
        tutors: []
      };
      if (classes.coach != null) {
        currentClass.coach = classes.coach;
        if (classes.coach.id == +instructorId) {
          isEqual = true;
        }
      }
      if (classes.tutors != null) {
        currentClass.tutors = classes.tutors;
        classes.tutors.map(tutor => {
          if (tutor.id == classes.coach.id) {
            count++;
          }
        })
      }
      if (isEqual && count == 2) {
        this.message = "Giảng viên " + classes.coach.name + " đã có 2 vai trong lớp này";
        var self = this;
        $(function () {
          $('#modal-danger').modal('show');
        })
        $('#save-event').on('click', function () {
            self.classesService.updateClasses(classId, currentClass).subscribe(() => {
            });
          }
        );
      } else {
        this.classesService.updateClasses(classId, currentClass).subscribe(() => {
        });
      }
    })
  }

  continue() {
    $(function () {
      $('#modal-danger').modal('hide');
    })
  }

  addTutorToClass(classId: number) {
    this.classesService.getClasses(classId).subscribe(async classes => {
      const currentClass: Classes = {
        id: classes.id,
        name: classes.name,
        classTime: classes.classTime,
        program: {
          id: classes.program.id
        },
        tutors: []
      };
      if (classes.coach != null) {
        currentClass.coach = classes.coach;
      }
      if (classes.instructor != null) {
        currentClass.instructor = classes.instructor;
      }
      if (classes.tutors != null) {
        currentClass.tutors = classes.tutors;
      }
      if (tutorIds != null) {
        for (let i = 0; i < tutorIds.length; i++) {
          const tutor = await this.getLecture(tutorIds[i]);
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
    })
  }

  removeTutorFromList(index: number, tutors: Lecture[]) {
    let listTutor = [];
    if (index == 0) {
      listTutor = tutors;
      listTutor.shift();
    } else if (index == tutors.length - 1) {
      listTutor = tutors;
      listTutor.pop();
    } else {
      for (let i = 0; i < index; i++) {
        listTutor.push(tutors[i]);
      }
      for (let i = index; i < tutors.length - 1; i++) {
        listTutor.push(tutors[i + 1]);
      }
    }
    tutors = listTutor;
  }

  getAllInstructor() {
    this.lectureService.findAllByJob(1).subscribe(listInstructor => {
      this.listInstructor = listInstructor;
    })
  }

  getAllTutor() {
    this.lectureService.findAllByJob(1).subscribe(listTutor => {
      this.listTutor = listTutor;
    })
  }

  getLecture(id: number) {
    return this.lectureService.getLecture(id).toPromise();
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
    var self = this;
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
        $('.select2').select2({
          maximumSelectionLength: 2
        });
        $('.tutor').on('select2:select', function (e, source) {
          tutorIds = $(e.currentTarget).val();
        });
        $('.tutor').on('select2:unselecting', function (e, source) {
          tutorIdRemove = $(e.currentTarget).val();
        });
        $('.tutor').on('change', function () {
          self.addTutorToClass(self.id);
        })
      });
    });
  }

}
