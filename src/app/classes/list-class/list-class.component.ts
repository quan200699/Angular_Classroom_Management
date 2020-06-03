import {Component, OnInit} from '@angular/core';
import {Classes} from "../../interface/classes";
import {ClassesService} from "../../service/classes/classes.service";
import {Lecture} from "../../interface/lecture";
import {LectureService} from "../../service/lecture/lecture.service";
import {Classroom} from "../../interface/classroom";
import {ClassroomService} from "../../service/classroom/classroom.service";

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
  listClassroom: Classroom[] = [];
  selected: boolean;
  message = "";
  isClassroomError = false;
  isLectureError = false;

  constructor(private classesService: ClassesService,
              private lectureService: LectureService,
              private classroomService: ClassroomService) {
  }

  ngOnInit() {
    this.getAllClasses();
    this.getAllClassroom();
  }

  getAllClassroom() {
    this.classroomService.getAllClassroom().subscribe(listClassroom => {
      this.listClassroom = listClassroom;
    })
  }

  getAllCoach() {
    this.lectureService.findAllByJob(1).subscribe(listCoach => {
      this.listCoach = listCoach;
    })
  }

  addCoachToClass(classId: number, coachId: string) {
    this.classesService.getAllClasses().subscribe(async listClasses => {
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
        })
      } else {
        const classes = await this.getClasses(classId);
        let count = 1;
        let isEqual = false;
        const currentClass: Classes = {
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
            })
          }
        }
        if (isEqual && count == 2) {
          this.message = "Giảng viên này đã có 2 vai trong lớp này";
          this.isLectureError = true;
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
      }
    })
  }

  async addInstructorToClass(classId: number, instructorId: string) {
    const classes = await this.getClasses(classId);
    let count = 1;
    let isEqual = false;
    const currentClass: Classes = {
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
    })
    if (isEqual && count == 2) {
      this.message = "Giảng viên này đã có 2 vai trong lớp này";
      this.isLectureError = true;
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
  }

  async addClassroomToClasses(classId: number, classroomId: string) {
    let capacity = 0;
    const classes = await this.getClasses(classId);
    const currentClass: Classes = {
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
    const classroom = await this.getClassroom(+classroomId);
    const listClass = await this.classroomService.getAllClassesByClassroom(+classroomId).toPromise();
    if (listClass.length == 0) {
      this.classesService.updateClasses(classId, currentClass).subscribe(() => {
      });
    } else {
      listClass.map(async class1 => {
        class1.students = await this.getAllStudentByClasses(class1);
        capacity += class1.students.length;
      })
      classes.students = await this.getAllStudentByClasses(classes);
      if (capacity + classes.students.length > classroom.capacity) {
        this.isClassroomError = true;
        this.message = "Phòng học này không đủ chỗ cho lớp";
        $(function () {
          $('#modal-danger').modal('show');
        })
        $('#save-event').on('click', function () {
            $('#modal-danger').modal('hide');
          }
        );
      } else {
        this.classesService.updateClasses(classId, currentClass).subscribe(() => {
        });
      }
    }
  }

  getClasses(id: number) {
    return this.classesService.getClasses(id).toPromise();
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

  async getAllInstructor(classId: number) {
    const classes = await this.getClasses(classId);
    let module = classes.module;
    let name = classes.program.name;
    let classTime = classes.classTime;
    if (module == 'Module 1') {
      return this.classesService.getAllInstructorHasFreeTime(classTime).toPromise();
    }
    let lectureHasFreeTime = await this.classesService.getAllInstructorHasFreeTime(classTime).toPromise();
    let lecturesByLanguage = [];
    let lectures = [];
    if (name.indexOf('Java') != -1) {
      lecturesByLanguage = await this.lectureService.findAllByLanguage(1).toPromise();
    }
    if (name.indexOf('PHP') != -1) {
      lecturesByLanguage = await this.lectureService.findAllByLanguage(2).toPromise();
    }
    if (name.indexOf('ASP') != -1) {
      lecturesByLanguage = await this.lectureService.findAllByLanguage(3).toPromise();
    }
    for (let i = 0; i < lectureHasFreeTime.length; i++) {
      for (let j = 0; j < lecturesByLanguage.length; j++) {
        if (lectureHasFreeTime[i].id == lecturesByLanguage[j].id) {
          lectures.push(lectureHasFreeTime[i]);
        }
      }
    }
    return lectures;
  }

  async getAllTutor(classId: number) {
    const classes = await this.getClasses(classId);
    let name = classes.program.name;
    if (name.indexOf('Java') != -1) {
      return this.lectureService.findAllByLanguage(1).toPromise();
    }
    if (name.indexOf('PHP') != -1) {
      return this.lectureService.findAllByLanguage(2).toPromise();
    }
    return this.lectureService.findAllByLanguage(3).toPromise();
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
        $('#modal-delete').modal('hide');
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
        $('#modal-delete').modal('hide');
      })
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
      this.listClasses.map(async classes => {
        classes.students = await this.getAllStudentByClasses(classes);
        classes.tutorSelect = await this.getAllTutor(classes.id);
        classes.instructorSelect = await this.getAllInstructor(classes.id);
        if(classes.instructor!=null){
          classes.instructorSelect.push(classes.instructor);
        }
      })
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
        })
      });
    });
  }

  getAllStudentByClasses(classes: Classes) {
    return this.classesService.getAllStudentByClass(classes.id).toPromise()
  }

  getClassroom(id: number) {
    return this.classroomService.getClassroom(id).toPromise();
  }
}
